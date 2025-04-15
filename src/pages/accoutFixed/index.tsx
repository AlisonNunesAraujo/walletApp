import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contextApi";
import { showMessage } from "react-native-flash-message";

export default function AccoutFixed() {
  const { addAccount, account, deleteAccountfixed, despesa } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [nameAccount, setNameAccount] = useState("");
  const [valor, setValor] = useState("");
  const [vencimento, setVencimento] = useState("");

  function Delete(uid: string) {
    deleteAccountfixed({ uid });
  }
  function Add() {
    if (nameAccount === "" || valor === "" || vencimento === "") {
      showMessage({
        message: "Preencha todos os campos",
      });
      return;
    }

    addAccount({ nameAccount, valor, vencimento });
    setModal(false);
    setNameAccount("");
    setValor("");
    setVencimento("");
  }

  return (
    <View style={s.conteiner}>
      <StatusBar backgroundColor={"white"} />
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
              <Text style={s.text}>
                Nome:<Text style={s.textDados}> {item.nameAccount}</Text>
              </Text>
              <Text style={s.text}>
                R$ <Text style={s.textDados}>{item.valor}</Text>
              </Text>
              <Text style={s.text}>
                Vencimento: <Text style={s.textDados}>{item.vencimento}</Text>
              </Text>
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
          <TextInput
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
            maxLength={20}
            style={s.Inputs}
          />
          <TextInput
            placeholder="Dia de vencimento!"
            value={vencimento}
            onChangeText={setVencimento}
            maxLength={4}
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

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    width: "100%",
    backgroundColor: "#ccc",
    padding: 20,
  },
  Title: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  bntCreateAccount: {
    width: "50%",
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  areaRender: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  titleModal: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },

  Inputs: {
    width: "90%",
    padding: 10,
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
  },
  buttomModal: {
    width: "90%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
  },
  textButom: {
    fontFamily: "Arial",
  },
  flatList: {
    marginLeft: 10,
    width: "auto",
    height: "auto",
    backgroundColor: "#ccc",
  },
  grupoAccount: {
    width: 330,
    height: "15%",
    gap: 10,
    backgroundColor: "white",
    marginTop: 30,
    borderRadius: 5,
    padding: 15,
    marginRight: 10,
    overflow: "hidden",
  },
  text: {
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  textDados: {
    color: "red",
  },
  bntFlat: {
    width: "100%",
    backgroundColor: "blue",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textBnt: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  textcreateAccount: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "800",
  },
  ListVazia: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  textListVazia: {
    fontFamily: "Arial",
  },
});
