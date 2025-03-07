import { createContext, ReactNode, useEffect, useState } from "react";
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

import { States } from "./types";
import { ChildrenProp } from "./types";
import { stateUser } from "./types";
import { TypesReceita } from "./types";
import { TypesGastos } from "./types";
import { DeletarProp } from "./types";

export const AuthContext = createContext({} as States);

export function AuthProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<stateUser>({
    email: "",
    uid: "",
  });

  const [receita, setReceita] = useState<TypesReceita[]>([]);
  const [gastos, setGastos] = useState<TypesGastos[]>([]);
  const [load, setLoading] = useState(false);
  const [loading, setLoad] = useState(false);
  const [saldo, setSaldo] = useState([]);

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
          });
        });
        setGastos(lista);
      });
    }

    RendleGastos();
  }, [Deletar]);

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

  async function LogOut() {
    await signOut(auth);
    AsyncStorage.clear()

      .then(() => {
        setUser({
          email: "",
          uid: "",
        });

        showMessage({
          message: "Volte sempre!",
        });
      })
      .catch(() => {
        alert("erro");
      });
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
