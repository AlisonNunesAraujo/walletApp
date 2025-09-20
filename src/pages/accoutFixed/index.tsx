import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  Keyboard,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import { showMessage } from "react-native-flash-message";
import { TextInputMask } from "react-native-masked-text";

import { s } from "./style";

export default function AccoutFixed() {
  const { addAccount, account, deleteAccountfixed, saldoTotal } =
    useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [nameAccount, setNameAccount] = useState("");
  const [valor, setValor] = useState("");
  const [vencimento, setVencimento] = useState("");

  function Delete(uid: string) {
    deleteAccountfixed({ uid });
  }

  function Add() {
    Keyboard.dismiss();

    if (nameAccount === "" || valor === "" || vencimento === "") {
      showMessage({
        message: "Preencha todos os campos",
      });
      setModal(false);
      return;
    }

    addAccount({ nameAccount, valor, vencimento });
    setModal(false);
    setNameAccount("");
    setValor("");
    setVencimento("");
    Keyboard.dismiss();
  }

  return (
    <View style={s.conteiner}>
  

      <View style={s.header}>
        <Text style={s.Title}>Voçe quer adicionar uma conta fixa?</Text>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={s.bntCreateAccount}
        >
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
              <TouchableOpacity
                style={s.bntFlat}
                onPress={() => Delete(item.uid)}
              >
                <Text style={s.textBnt}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => {
            return (
              <View style={s.ListVazia}>
                <Text style={s.textListVazia}>
                  Quando voçe adicionar alguma conta, ela aparecerá aqui!
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View>
        <FlatList
          data={saldoTotal}
          renderItem={({ item }) => (
            <View style={s.grupoAccount}>
              <Text style={s.text}>Saldo: {item}</Text>
            </View>
          )}
        />
      </View>

      <Modal visible={modal} animationType="slide">
        <View style={s.modal}>
          <Text style={s.titleModal}>Criar conta fixa!</Text>

          <TextInput
            placeholder="Nome da conta, Exp: Conta de luz!"
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

          <TouchableOpacity
            onPress={() => setModal(false)}
            style={s.buttomModal}
          >
            <Text style={s.textButom}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
