import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  Keyboard,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import { showMessage } from "react-native-flash-message";
import { TextInputMask } from 'react-native-masked-text';
import { SafeAreaView } from "react-native-safe-area-context";
import { getStyles } from './style';
import { GoBack } from "../../components/goBack";
import { useTheme } from "../../contextApi/theme";

export default function AccoutFixed() {
  const { addAccount, account, deleteAccountfixed } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [nameAccount, setNameAccount] = useState("");
  const [valor, setValor] = useState("");
  const [vencimento, setVencimento] = useState("");

  const { colors } = useTheme();
  const s = getStyles(colors);

  function Delete(uid: string) {
    deleteAccountfixed({ uid });
  }

  function Add() {
    Keyboard.dismiss();
    if (nameAccount === "" || valor === "" || vencimento === "") {
      showMessage({ message: "Preencha todos os campos" });
      setModal(false);
      return;
    }
    addAccount({ nameAccount, valor, vencimento });
    setModal(false);
    setNameAccount("");
    setValor("");
    setVencimento("");
  }

  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <GoBack title="Contas Fixas" />

      <View style={s.header}>
        <Text style={s.Title}>Você quer adicionar uma conta fixa?</Text>
        <TouchableOpacity onPress={() => setModal(true)} style={s.bntCreateAccount}>
          <Text style={s.textcreateAccount}>Criar uma conta fixa</Text>
        </TouchableOpacity>
      </View>

      <View style={s.areaRender}>
        <FlatList
          horizontal
          style={s.flatList}
          data={account}
          renderItem={({ item }) => (
            <View style={s.grupoAccount}>
              <Text style={s.text}>Conta: {item.nameAccount}</Text>
              <Text style={s.text}>{item.valor}</Text>
              <Text style={s.text}>Vencimento: {item.vencimento}</Text>
              <TouchableOpacity style={s.bntFlat} onPress={() => Delete(item.uid)}>
                <Text style={s.textBnt}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={s.ListVazia}>
              <Text style={s.textListVazia}>
                Quando você adicionar alguma conta, ela aparecerá aqui!
              </Text>
            </View>
          )}
        />
      </View>

      <Modal visible={modal} animationType="slide">
        <View style={s.modal}>
          <Text style={s.titleModal}>Criar conta fixa!</Text>
          <TextInput
            placeholder="Nome da conta, Ex: Conta de luz!"
            value={nameAccount}
            onChangeText={setNameAccount}
            maxLength={20}
            style={s.Inputs}
          />
          <TextInputMask
            type="money"
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
            style={s.Inputs}
          />
          <TextInputMask
            type="datetime"
            placeholder="Dia de vencimento!"
            value={vencimento}
            onChangeText={setVencimento}
            maxLength={10}
            keyboardType="numeric"
            style={s.Inputs}
          />
          <TouchableOpacity style={s.buttomModal} onPress={Add}>
            <Text style={s.textButom}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModal(false)} style={s.buttomModal}>
            <Text style={s.textButom}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
