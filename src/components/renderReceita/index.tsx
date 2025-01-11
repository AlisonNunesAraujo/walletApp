import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';
import { TypesReceita } from '../../contextApi';

import { useContext } from 'react';
import { AuthContext } from '../../contextApi';
import Auth from '../../routs/auth';
import { DeletarProp } from '../../contextApi';

export default function RenderReceita({data}: {data:TypesReceita}) {

    const {Deletar} = useContext(AuthContext)

    function Delete(uid){
        Deletar({uid})
    }

 return (
   <View style={s.areaRender}>
    
    <Text style={s.textValor}>R$ {data.receita}</Text>
    <TouchableOpacity onPress={() => Delete(data.uid)}>
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
        gap: 19,
       

    },

    textValor:{
        fontSize: 16,
        fontFamily: 'Arial,'
    },
    textbnt:{
        fontFamily: 'Arial',
        fontWeight: '700',

    }
})