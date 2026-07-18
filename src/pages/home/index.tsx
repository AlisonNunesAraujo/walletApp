import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getStyles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamList } from "../../routs/authfree";
import HeaderComponent from "../../components/Header";
import ScrollHome from "../../components/scrollHome";
import CardSaldo from "../../components/cardSaldo";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../contextApi";
import { useTheme } from "../../contextApi/theme";
import BarChartSimple from "../../components/barChart";

const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  const { account, receita, gastos } = useContext(AuthContext);
  const [daysLeft, setDaysLeft] = useState<string[]>([]);
  const [verifiquedVencimento, setVerifiquedVencimento] = useState(false);

  const { colors } = useTheme();
  const s = getStyles(colors);

  useEffect(() => {
    if (!Array.isArray(account)) return;
    const hoje = new Date();
    const proximas: string[] = [];

    account.forEach((item) => {
      const [dia, mes, ano] = item.vencimento.split("/");
      const venc = new Date(Number(ano), Number(mes) - 1, Number(dia));
      const diffDias = Math.ceil((venc.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDias > 0 && diffDias <= 3) {
        proximas.push(`${item.nameAccount} (${diffDias}d)`);
      }
    });

    setDaysLeft(proximas);
    setVerifiquedVencimento(proximas.length > 0);
  }, [account]);

  const parseDate = (d: string) => {
    if (!d) return new Date(0);
    const [day, month, year] = d.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  const barData = React.useMemo(() => {
    const recMap: Record<string, number> = {};
    const gasMap: Record<string, number> = {};

    (receita ?? []).forEach((r) => {
      if (!r.date) return;
      const [, m, y] = r.date.split("/");
      const key = `${m}/${y}`;
      recMap[key] = (recMap[key] ?? 0) + (Number(r.receita) || 0);
    });

    (gastos ?? []).forEach((g) => {
      if (!g.date) return;
      const [, m, y] = g.date.split("/");
      const key = `${m}/${y}`;
      gasMap[key] = (gasMap[key] ?? 0) + (Number(g.gastos) || 0);
    });

    const allKeys = Array.from(new Set([...Object.keys(recMap), ...Object.keys(gasMap)])).sort(
      (a, b) => {
        const [ma, ya] = a.split("/").map(Number);
        const [mb, yb] = b.split("/").map(Number);
        return ya !== yb ? ya - yb : ma - mb;
      }
    );

    return allKeys.slice(-4).map((key) => {
      const [mes] = key.split("/").map(Number);
      return {
        month: MESES[mes - 1],
        receita: recMap[key] ?? 0,
        gasto: gasMap[key] ?? 0,
      };
    });
  }, [receita, gastos]);

  const temDadosGrafico = barData.length > 0;

  const ultimasTransacoes = [
    ...(receita ?? []).map((r) => ({
      tipo: "receita" as const,
      valor: Number(r.receita) || 0,
      desc: r.desc && String(r.desc) !== "undefined" ? String(r.desc) : "Receita",
      date: r.date,
    })),
    ...(gastos ?? []).map((g) => ({
      tipo: "gasto" as const,
      valor: Number(g.gastos) || 0,
      desc: g.desc || "Gasto",
      date: g.date,
    })),
  ]
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    .slice(0, 5);

  const fmt = (n: number) =>
    Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

  return (
    <SafeAreaView style={s.conteiner}>
      <HeaderComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardSaldo />
        <ScrollHome />

        {ultimasTransacoes.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>Últimas transações</Text>
            {ultimasTransacoes.map((item, index) => (
              <View key={index} style={s.transacaoRow}>
                <View style={s.transacaoLeft}>
                  <Text style={s.transacaoDesc}>{item.desc}</Text>
                  <Text style={s.transacaoDate}>{item.date}</Text>
                </View>
                <Text style={[s.transacaoValor, { color: item.tipo === "receita" ? "#00aa55" : "#cc3300" }]}>
                  {item.tipo === "receita" ? "+" : "-"} {fmt(item.valor)}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View style={s.areaView}>
          <TouchableOpacity
            style={s.areaBnts}
            onPress={() => navigation.navigate("AccountFixed")}
          >
            <Text style={s.textTitle}>Contas fixas</Text>
            <Text style={s.textInfo}>Adicione lembretes mensais como conta de luz, internet, etc.</Text>
          </TouchableOpacity>
        </View>

        {verifiquedVencimento && (
          <View style={s.vencimentoAviso}>
            <Text style={s.vencimentoTitulo}>Vencimento próximo</Text>
            <Text style={s.vencimentoTexto}>{daysLeft.join("  •  ")}</Text>
          </View>
        )}

        {temDadosGrafico && (
          <View style={[s.section, { marginBottom: 24 }]}>
            <Text style={s.sectionTitle}>Receitas vs Gastos</Text>
            <View style={s.legendaRow}>
              <View style={[s.legendaDot, { backgroundColor: "#00cc73" }]} />
              <Text style={s.legendaText}>Receita</Text>
              <View style={[s.legendaDot, { backgroundColor: "#E53935", marginLeft: 12 }]} />
              <Text style={s.legendaText}>Gasto</Text>
            </View>
            <BarChartSimple data={barData} colors={colors} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
