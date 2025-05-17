import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function Chat() {
    const [text, setText] = useState(false);
    const [suporte, setSuporte] = useState(false);
    const [sobre, setSobre] = useState(false);
    const [contato, setContato] = useState(false);

    return (
        <View>
            <Text>bem vindo ao chat</Text>

            <View>
                <TouchableOpacity onPress={() => setText(!text)}>
                    <Text>Iniciar</Text>
                </TouchableOpacity>
            </View>


            {text &&
                <View>
                    <Pressable onPress={() => setSuporte(!suporte)}>
                        <Text>Suporte</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Sobre</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Contato</Text>
                    </Pressable>
                </View>
            }

            {suporte && <Text>suporte</Text>}
            {sobre && <Text>sobre</Text>}
            {contato && <Text>contato</Text>}



        </View>
    );
}