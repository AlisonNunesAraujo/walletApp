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
import { TextInputMask } from 'react-native-masked-text'
import { Feather } from "@expo/vector-icons";

import { s } from './style'


export default function AccoutFixed() {
  const { addAccount, account, deleteAccountfixed, } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [nameAccount, setNameAccount] = useState("");
  const [valor, setValor] = useState("");
  const [vencimento, setVencimento] = useState("");

  // Função para deletar a conta fixa
  function Delete(uid: string) {
    deleteAccountfixed({ uid });
  }

  // Função para adicionar a conta fixa
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
      <StatusBar backgroundColor={"white"} />
      <View style={s.header}>
        <Text style={s.Title}>Você quer adicionar uma conta fixa?</Text>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={s.bntCreateAccount}
          accessibilityRole="button"
          accessibilityLabel="Criar uma conta fixa"
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
              <Text style={s.text}>Conta: {item.nameAccount}
              </Text>
              <Text style={s.text}>
                R$ {item.valor}
              </Text>
              <Text style={s.text}>
                Vencimento: {item.vencimento}
              </Text>
              <TouchableOpacity
                style={s.bntFlat}
                onPress={() => Delete(item.uid)}
                accessibilityRole="button"
                accessibilityLabel={`Excluir conta fixa ${item.nameAccount}`}
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

      <Modal visible={modal} animationType="slide" transparent={false}>
        <View style={s.modal}>
          <Text style={s.titleModal}>Criar conta fixa!</Text>

          <View style={s.inputRow}>
            <View style={s.inputIcon}>
              <Feather name="credit-card" size={20} color="#2563EB" />
            </View>
            <TextInput
              placeholder="Nome da conta (ex: Conta de luz)"
              value={nameAccount}
              onChangeText={setNameAccount}
              maxLength={20}
              style={s.input}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={s.inputRow}>
            <View style={s.inputIcon}>
              <Feather name="dollar-sign" size={20} color="#2563EB" />
            </View>
            <TextInputMask
              type="money"
              placeholder="Valor"
              value={valor}
              onChangeText={setValor}
              keyboardType="numeric"
              style={s.input}
            />
          </View>

          <View style={s.inputRow}>
            <View style={s.inputIcon}>
              <Feather name="calendar" size={20} color="#2563EB" />
            </View>
            <TextInputMask
              type="datetime"
              options={{ format: 'DD/MM/YYYY' }}
              placeholder="Dia de vencimento (DD/MM/AAAA)"
              value={vencimento}
              onChangeText={setVencimento}
              maxLength={10}
              keyboardType="numeric"
              style={s.input}
            />
          </View>

          <TouchableOpacity style={s.primaryBtn} onPress={Add} accessibilityRole="button" accessibilityLabel="Adicionar conta fixa">
            <Text style={s.textPrimaryBtn}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModal(false)}
            style={s.secondaryBtn}
            accessibilityRole="button"
            accessibilityLabel="Fechar modal"
          >
            <Text style={s.textSecondaryBtn}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}


