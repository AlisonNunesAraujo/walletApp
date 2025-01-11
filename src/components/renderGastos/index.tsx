import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TypesGastos } from '../../contextApi';

import { useContext } from 'react';

import { AuthContext } from '../../contextApi';

export default function RenderGastos({data}: {data: TypesGastos}) {

    const {DeletarGastos} = useContext(AuthContext)

    function Deletar(uid){
        DeletarGastos({uid})
    }


 return (
   <View style={s.areaRender}>
    <Text style={s.textValor}>R$ {data.gastos}</Text>

    <TouchableOpacity onPress={() => Deletar(data.uid)}>
        <Text style={s.textbnt}>Apagar</Text>
    </TouchableOpacity>
   </View>
  );
}

const s = StyleSheet.create({
    areaRender:{
        width: '100%',
        height: 100,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,

    },
    textValor:{
        fontFamily: 'Arial',
        fontSize: 16,
    },

    textbnt:{
        fontFamily: 'Arial',
        fontWeight: '700'
    }

})