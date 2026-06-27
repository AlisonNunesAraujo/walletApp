import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase/firebaseConextion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { db } from "../services/firebase/firebaseConextion";
import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { format } from "date-fns";
import { States, ChildrenProp, stateUser, TypesReceita, TypesGastos } from "./types";
import { DeletarProp, listAccount, nome } from "./types";
import { Alert } from "react-native";

export const AuthContext = createContext({} as States);

export function AuthProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<stateUser>({ email: "", uid: "" });
  const [refreshKey, setRefreshKey] = useState(0);
  const [receita, setReceita] = useState<TypesReceita[]>([]);
  const [gastos, setGastos] = useState<TypesGastos[]>([]);
  const [load, setLoading] = useState(false);
  const [loading, setLoad] = useState(false);
  const [account, setAccount] = useState<listAccount[]>();
  const [nameUser, setNameUser] = useState<nome[]>([]);
  const [saldoReceita, setSaldoReceita] = useState([0.0]);
  const [saldoGastos, setSaldoGastos] = useState([0.0]);

  // carregar usuário do AsyncStorage apenas uma vez no mount
  useEffect(() => {
    async function ViewUser() {
      try {
        const response = await AsyncStorage.getItem("@userAppwallet");
        if (response) setUser(JSON.parse(response));
      } catch {
        showMessage({ message: "Algo deu errado!" });
      }
    }
    ViewUser();
  }, []);

  // buscar dados do Firebase quando uid ou refreshKey mudar
  useEffect(() => {
    if (!user.uid) return;

    async function buscarDados() {
      const q = query(collection(db, "receita"), where("uid", "==", user.uid));
      getDocs(q).then((snapshot) => {
        const lista: TypesReceita[] = [];
        snapshot.forEach((d) => {
          lista.push({ receita: d.data().valor, desc: d.data().descricao, uid: d.id, date: d.data().date });
        });
        setReceita(lista);
        setSaldoReceita([lista.reduce((acc, item) => acc + (Number(item.receita) || 0), 0)]);
      });
    }

    async function buscarGastos() {
      const q = query(collection(db, "gastos"), where("uid", "==", user.uid));
      getDocs(q).then((snapshot) => {
        const lista: TypesGastos[] = [];
        snapshot.forEach((d) => {
          lista.push({ gastos: d.data().valor, desc: d.data().descricao, uid: d.id, date: d.data().date });
        });
        setGastos(lista);
        setSaldoGastos([lista.reduce((acc, item) => acc + (Number(item.gastos) || 0), 0)]);
      });
    }

    async function buscarAccount() {
      const q = query(collection(db, "Account"), where("uid", "==", user.uid));
      getDocs(q).then((snapshot) => {
        const lista: listAccount[] = [];
        snapshot.forEach((d) => {
          lista.push({ nameAccount: d.data().nameAccount, valor: d.data().valor, vencimento: d.data().vencimento, uid: d.id });
        });
        setAccount(lista);
      });
    }

    async function buscarNome() {
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      getDocs(q).then((snapshot) => {
        const lista: nome[] = [];
        snapshot.forEach((d) => lista.push({ name: d.data().name, uid: d.id }));
        setNameUser(lista);
      });
    }

    buscarDados();
    buscarGastos();
    buscarAccount();
    buscarNome();
  }, [user.uid, refreshKey]);

  async function CreateUser({ email, senha, name }: { email: string; senha: string; name: string }) {
    setLoading(true);
    try {
      const data = await createUserWithEmailAndPassword(auth, email, senha);
      await addDoc(collection(db, "users"), { name, uid: data.user.uid });
      setUser({ email: data.user.email, uid: data.user.uid });
      await AsyncStorage.setItem("@userAppwallet", JSON.stringify({ email: data.user.email, uid: data.user.uid }));
      showMessage({ message: "Bem vindo!", duration: 2000, type: "success" });
    } catch {
      showMessage({ message: "Algo deu errado!" });
    } finally {
      setLoading(false);
    }
  }

  async function Login({ email, senha }: { email: string; senha: string }) {
    setLoading(true);
    try {
      const data = await signInWithEmailAndPassword(auth, email, senha);
      setUser({ email: data.user.email, uid: data.user.uid });
      await AsyncStorage.setItem("@userAppwallet", JSON.stringify({ email: data.user.email, uid: data.user.uid }));
      showMessage({ message: "Bem vindo!", type: "success" });
    } catch {
      showMessage({ message: "Algo deu errado!", type: "danger" });
    } finally {
      setLoading(false);
    }
  }

  async function Deletar({ uid }: DeletarProp) {
    setLoading(true);
    await deleteDoc(doc(db, "receita", uid))
      .then(() => {
        showMessage({ message: "Deletado com sucesso!", type: "success" });
        setRefreshKey((k) => k + 1);
      })
      .catch(() => showMessage({ message: "Algo deu errado!" }))
      .finally(() => setLoading(false));
  }

  async function DeletarGastos({ uid }: DeletarProp) {
    await deleteDoc(doc(db, "gastos", uid))
      .then(() => {
        showMessage({ message: "Deletado com sucesso!", type: "success" });
        setRefreshKey((k) => k + 1);
      })
      .catch(() => showMessage({ message: "Algo deu errado!" }));
  }

  async function AddReceita({ addValor, addDesc }: { addValor: string | number; addDesc: string }) {
    setLoading(true);
    const valorNumerico = parseFloat(
      String(addValor).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
    );
    try {
      await addDoc(collection(db, "receita"), {
        uid: user.uid,
        valor: valorNumerico,
        descricao: addDesc,
        date: format(new Date(), "dd/MM/yyyy"),
      });
      showMessage({ message: "Adicionado com sucesso!", type: "success" });
      setRefreshKey((k) => k + 1);
    } catch {
      showMessage({ message: "Algo deu errado!" });
    } finally {
      setLoading(false);
    }
  }

  async function AddGastos({ addValor, addDesc }: { addValor: string | number; addDesc: string }) {
    setLoad(true);
    const valorNumerico = parseFloat(
      String(addValor).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
    );
    try {
      await addDoc(collection(db, "gastos"), {
        uid: user.uid,
        valor: valorNumerico,
        descricao: addDesc,
        date: format(new Date(), "dd/MM/yyyy"),
      });
      showMessage({ message: "Adicionado com sucesso!", type: "success" });
      setRefreshKey((k) => k + 1);
    } catch {
      showMessage({ message: "Algo deu errado!" });
    } finally {
      setLoad(false);
    }
  }

  async function addAccount({ nameAccount, valor, vencimento }: { nameAccount: string; valor: string; vencimento: string }) {
    await addDoc(collection(db, "Account"), { nameAccount, valor, vencimento, uid: user.uid });
    setRefreshKey((k) => k + 1);
  }

  async function deleteAccountfixed({ uid }: { uid: string }) {
    await deleteDoc(doc(db, "Account", uid))
      .then(() => {
        showMessage({ message: "Deletado com sucesso!" });
        setRefreshKey((k) => k + 1);
      })
      .catch(() => showMessage({ message: "Algo deu errado!" }));
  }

  async function LogOut() {
    AsyncStorage.removeItem("@userAppwallet");
    await signOut(auth)
      .then(() => {
        setUser({ email: "", uid: "" });
        showMessage({ message: "Volte sempre!" });
      })
      .catch(() => alert("erro"));
  }

  async function AddName({ name }: { name: string }) {
    try {
      await addDoc(collection(db, "users"), { uid: user.uid, name });
      showMessage({ message: "Adicionado com sucesso!", type: "success" });
    } catch {
      Alert.alert("Algo deu errado!");
    }
  }

  const logado = !!user?.email && !!user?.uid;

  return (
    <AuthContext.Provider
      value={{
        user, logado, CreateUser, Login,
        receita, gastos, Deletar, DeletarGastos,
        LogOut, AddReceita, AddGastos,
        load, loading, addAccount, account,
        deleteAccountfixed, AddName, nameUser,
        saldoGastos, saldoReceita,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
