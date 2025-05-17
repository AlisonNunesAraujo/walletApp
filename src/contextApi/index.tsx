import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConextion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConextion";
import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { format } from 'date-fns'
import { States } from "./types";
import { ChildrenProp } from "./types";
import { stateUser } from "./types";
import { TypesReceita } from "./types";
import { TypesGastos } from "./types";
import { DeletarProp, listAccount, UidDelete } from "./types";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
export const AuthContext = createContext({} as States);

type nome = {
  name: string;
  uid: string;
}

export function AuthProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<stateUser>({
    email: "",
    uid: "",
  });
  const navigation = useNavigation();
  const [receita, setReceita] = useState<TypesReceita[]>([]);
  const [gastos, setGastos] = useState<TypesGastos[]>([]);
  const [load, setLoading] = useState(false);
  const [loading, setLoad] = useState(false);
  const [account, setAccount] = useState<listAccount[]>();
  const [nameUser, setNameUser] = useState<nome[]>([]);

  useEffect(() => {
    async function VerUser() {
      try {
        const response = await AsyncStorage.getItem("@userAppwallet");
        if (response) {
          setUser(JSON.parse(response));
        }
      } catch {
        showMessage({
          message: "Algo deu errado!",
        });
      }
    }

    VerUser();

    async function buscarDados() {
      const ref = collection(db, "receita");

      const receitaQuery = query(ref, where("uid", "==", user.uid));

      getDocs(receitaQuery).then((snapshot) => {
        let lista: TypesReceita[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            receita: doc.data().valor,
            desc: doc.data().descricao,
            uid: doc.id,
            date: doc.data().date
          });
        });
        setReceita(lista);




      });
    }

    buscarDados();

    async function RendleGastos() {
      const ref = collection(db, "gastos");
      const gastosQuery = query(ref, where("uid", "==", user.uid));
      getDocs(gastosQuery).then((snapshot) => {
        let lista: TypesGastos[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            gastos: doc.data().valor,
            desc: doc.data().descricao,
            uid: doc.id,
            date: doc.data().date
          });
        });
        setGastos(lista);




      });
    }

    RendleGastos();

    async function BuscarAccount() {
      const ref = collection(db, "Account");
      const queryAccount = query(ref, where("uid", "==", user.uid));
      getDocs(queryAccount).then((snapshot) => {
        let lista: listAccount[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            nameAccount: doc.data().nameAccount,
            valor: doc.data().valor,
            vencimento: doc.data().vencimento,
            uid: doc.id,
          });
        });
        setAccount(lista);
      });
    }

    BuscarAccount();

    async function GetName() {
      const ref = collection(db, 'users')

      const queryName = query(ref, where('uid', '==', user.uid))

      getDocs(queryName).then((snapshot) => {
        let getName: nome[] = []

        snapshot.forEach((doc) => {
          getName.push({
            name: doc.data().name,
            uid: doc.id
          })
        })
        setNameUser(getName)

      })

    }

    GetName();


  }, [Deletar, deleteAccountfixed]);

  async function CreateUser({
    email,
    senha,
  }: {
    email: string;
    senha: string;
  }) {
    setLoading(true);
    try {
      const data = await createUserWithEmailAndPassword(auth, email, senha);




      setUser({
        email: data.user.email,
        uid: data.user.uid,

      });

      const dados = {
        email: data.user.email,
        uid: data.user.uid,
      };

      showMessage({
        message: "Bem vindo!",
        duration: 2000,
        type: "success",
      });
      setLoading(false);

      await AsyncStorage.setItem("@userAppwallet", JSON.stringify(dados));
    } catch {
      showMessage({
        message: "Algo deu errado!",
      });
      setLoading(false);
    }
  }

  async function Login({ email, senha }: { email: string; senha: string }) {
    setLoading(true);
    try {
      const data = await signInWithEmailAndPassword(auth, email, senha);
      setUser({
        email: data.user.email,
        uid: data.user.uid,
      });
      const dados = {
        email: data.user.email,
        uid: data.user.uid,
      };
      setLoading(false);
      await AsyncStorage.setItem("@userAppwallet", JSON.stringify(dados));
      showMessage({
        message: "Bem vindo!",
        type: "success",
      });
    } catch {
      showMessage({
        message: "Algo deu errado!",
        type: "danger",
      });
      setLoading(false);
    }
  }

  async function Deletar({ uid }: DeletarProp) {
    setLoading(true);
    const data = doc(db, "receita", uid);

    await deleteDoc(data)
      .then(() => {
        showMessage({
          message: "Deletado com sucesso!",
          type: "success",
        });
        setLoading(false);
      })

      .catch(() => {
        showMessage({
          message: "Algo deu errado!",
        });
        setLoading(false);
      });
  }

  async function DeletarGastos({ uid }: DeletarProp) {
    const data = doc(db, "gastos", uid);

    await deleteDoc(data)
      .then(() => {
        showMessage({
          message: "Deletado com sucesso!",
          type: "success",
        });
      })
      .catch((err) => {
        showMessage({
          message: "Algo deu errado!",
        });
      });
  }

  async function AddReceita({
    addValor,
    addDesc,
  }: {
    addValor: string | number;
    addDesc: string;
  }) {
    setLoading(true);
    try {
      const data = await addDoc(collection(db, "receita"), {
        uid: user.uid,
        valor: addValor,
        descricao: addDesc,
        date: format(new Date(), "dd/MM/yyyy"),
      });

      showMessage({
        message: "Adicionado com sucesso!",
        type: "success",
      });
      setLoading(false);
    } catch {
      showMessage({
        message: "Algo deu errado!",
      });
      setLoading(false);
    }
  }

  async function AddGastos({
    addValor,
    addDesc,
  }: {
    addValor: string | number;
    addDesc: string;
  }) {
    setLoad(true);
    try {
      const data = await addDoc(collection(db, "gastos"), {
        uid: user.uid,
        valor: addValor,
        descricao: addDesc,
        date: format(new Date(), "dd/MM/yyyy"),
      });

      showMessage({
        message: "Adicionado com sucesso!",
        type: "success",
      });
      setLoad(false);
    } catch {
      showMessage({
        message: "Algo deu errado!",
      });
      setLoad(false);
    }
  }

  async function addAccount({
    nameAccount,
    valor,
    vencimento,
  }: {
    nameAccount: string;
    valor: string;
    vencimento: string;
  }) {
    const data = await addDoc(collection(db, "Account"), {
      nameAccount: nameAccount,
      valor: valor,
      vencimento: vencimento,
      uid: user.uid,
    });
  }

  async function deleteAccountfixed({ uid }: { uid: string }) {
    const data = doc(db, "Account", uid);

    await deleteDoc(data)
      .then(() => {
        showMessage({
          message: "Deletado com sucesso!",
        });
      })
      .catch(() => {
        showMessage({
          message: "Algo deu errado!",
        });
      });
  }

  async function LogOut() {
    AsyncStorage.removeItem('@userAppwallet');
    await signOut(auth)
      .then(() => {

        setUser({ email: '', uid: '' });

        showMessage({
          message: "Volte sempre!",
        });

      })
      .catch(() => {
        alert("erro");
      });
  }

  async function AddName({ name }: { name: string }) {
    try {
      const data = await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
      });
      showMessage({
        message: "Adicionado com sucesso!",
        type: "success",
      })
    }
    catch {
      Alert.alert("Algo deu errado!");
    }
  }

  const logado = !!user?.email && !!user?.uid;
  return (
    <AuthContext.Provider
      value={{
        user,
        logado,
        CreateUser,
        Login,
        receita,
        gastos,
        Deletar,
        DeletarGastos,
        LogOut,
        AddReceita,
        AddGastos,
        load,
        loading,
        addAccount,
        account,
        deleteAccountfixed,
        AddName,
        nameUser

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
