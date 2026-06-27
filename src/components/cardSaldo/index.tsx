import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../contextApi';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useTheme } from '../../contextApi/theme';

export default function CardSaldo() {
    const { saldoReceita, saldoGastos } = useContext(AuthContext);
    const { isDark } = useTheme();

    const receita = saldoReceita?.[0] ?? 0;
    const gastos = saldoGastos?.[0] ?? 0;
    const saldoLiquido = receita - gastos;
    const isPositivo = saldoLiquido >= 0;

    // verde escuro no tema dark, verde original no claro
    const bgCard = isDark ? '#003d1f' : '#00cc73';

    const formatarValor = (numero: number) => {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(numero);
    };

    return (
        <View style={[s.container, { backgroundColor: bgCard }]}>
            <View style={s.areaSaldo}>
                <View>
                    <Text style={s.textType}> Receita</Text>
                    <Text style={s.textSaldo}> Saldo: {formatarValor(receita)}</Text>
                </View>
                <Fontisto name="checkbox-active" size={24} color="white" />
            </View>

            <View style={s.areaSaldo}>
                <View>
                    <Text style={s.textType}> Gastos</Text>
                    <Text style={s.textSaldoGastos}> Saldo: - {formatarValor(gastos)}</Text>
                </View>
                <AntDesign name="warning" size={24} color="white" />
            </View>

            <View style={s.divider} />

            <View style={s.areaSaldo}>
                <View>
                    <Text style={s.textType}> Saldo líquido</Text>
                    <Text style={[s.textSaldo, { color: isPositivo ? '#b3ffd9' : '#ffb3b3' }]}>
                        {' '}{formatarValor(saldoLiquido)}
                    </Text>
                </View>
                {isPositivo
                    ? <AntDesign name="arrow-up" size={24} color="#b3ffd9" />
                    : <AntDesign name="arrow-down" size={24} color="#ffb3b3" />
                }
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        marginLeft: '5%',
        marginTop: 20,
        justifyContent: 'space-between',
        gap: 10,
    },
    areaSaldo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginVertical: 4,
    },
    textType: {
        fontSize: 17,
        color: 'white',
    },
    textSaldo: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arial',
        letterSpacing: 1.5,
    },
    textSaldoGastos: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arial',
        letterSpacing: 1.5,
    },
});
