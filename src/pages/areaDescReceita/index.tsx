import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';


type AreaDescricao = {
    dados: {
        receita: number | string;
        desc: string | null
    }
}

type DadosProps = RouteProp<AreaDescricao, 'dados'>


export default function AreaDescReceita() {
    const route = useRoute<DadosProps>();
    return (
        <View>
            <Text>{route.params?.desc}</Text>
        </View>
    );
}