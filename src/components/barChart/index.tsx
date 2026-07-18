import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { type ThemeColors } from "../../contextApi/theme";

const BAR_MAX_HEIGHT = 120;
const GRID_LINES = 4;
const LABEL_HEIGHT = 28;

type MonthData = { month: string; receita: number; gasto: number };
type Props = { data: MonthData[]; colors: ThemeColors };

function fmtShort(n: number) {
  if (n === 0) return "0";
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`;
  return String(Math.round(n));
}

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: max > 0 ? (value / max) * BAR_MAX_HEIGHT : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [value, max]);

  return (
    <Animated.View
      style={{
        width: 28,
        height: anim,
        backgroundColor: color,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    />
  );
}

export default function BarChartSimple({ data, colors }: Props) {
  const max = Math.max(...data.map((d) => Math.max(d.receita, d.gasto)), 1);
  const ceil = Math.ceil(max / 100) * 100;

  return (
    <View style={s.wrapper}>

      {/* eixo Y */}
      <View style={s.yAxis}>
        {Array.from({ length: GRID_LINES + 1 }).map((_, i) => (
          <Text key={i} style={[s.yLabel, { color: colors.textSecondary }]}>
            {fmtShort(ceil * (1 - i / GRID_LINES))}
          </Text>
        ))}
      </View>

      {/* área das barras + grid */}
      <View style={s.chartArea}>

        {/* grid — linhas horizontais atrás das barras */}
        <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
          {Array.from({ length: GRID_LINES + 1 }).map((_, i) => (
            <View
              key={i}
              style={[
                s.gridLine,
                {
                  top: (i / GRID_LINES) * BAR_MAX_HEIGHT,
                  backgroundColor: colors.border,
                },
              ]}
            />
          ))}
        </View>

        {/* colunas de barras */}
        <View style={s.barsArea}>
          {data.map((item, i) => (
            <View key={i} style={s.group}>
              {/* barras crescem de baixo para cima */}
              <View style={s.barPair}>
                <Bar value={item.receita} max={ceil} color="#00cc73" />
                <Bar value={item.gasto} max={ceil} color="#E53935" />
              </View>
            </View>
          ))}
        </View>

        {/* eixo X + labels dos meses — abaixo das barras, fora do clipping */}
        <View style={[s.xAxis, { borderTopColor: colors.border }]}>
          {data.map((item, i) => (
            <Text key={i} style={[s.monthLabel, { color: colors.textSecondary }]}>
              {item.month}
            </Text>
          ))}
        </View>

      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 4,
  },
  yAxis: {
    width: 36,
    height: BAR_MAX_HEIGHT + LABEL_HEIGHT,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 6,
    paddingBottom: LABEL_HEIGHT,
  },
  yLabel: {
    fontSize: 9,
    fontFamily: "Arial",
  },
  chartArea: {
    flex: 1,
  },
  // clipa as barras para não ultrapassarem o topo
  barsArea: {
    height: BAR_MAX_HEIGHT,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    opacity: 0.5,
  },
  group: {
    alignItems: "center",
  },
  barPair: {
    flexDirection: "row",
    gap: 4,
    alignItems: "flex-end",
  },
  xAxis: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    paddingTop: 6,
    height: LABEL_HEIGHT,
  },
  monthLabel: {
    fontSize: 10,
    fontFamily: "Arial",
  },
});
