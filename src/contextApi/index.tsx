import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConextion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConextion";
import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export const AuthContext = createContext({} as States);

type States = {
  user: stateUser;
  logado: boolean;
  CreateUser: (info: { email: string; senha: string }) => Promise<void>;
  Login: (info: { email: string; senha: string }) => Promise<void>;
  receita: TypesReceita[] | undefined;
  gastos: TypesGastos[] | undefined;
  Deletar: (info: DeletarProp) => Promise<void>;
  DeletarGastos: (info: DeletarProp) => Promise<void>;
};

type stateUser = {
  email: string | null;
  uid: string | number;
};

type ChildrenProp = {
  children: ReactNode;
};

export interface TypesReceita {
  receita: string;
  uid: string | undefined;
}

export interface TypesGastos {
  gastos: string;
  uid: string;
}

export type DeletarProp = {
  uid: string;
};

export function AuthProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<stateUser>({
    email: "",
    uid: "",
  });

  const [receita, setReceita] = useState<TypesReceita[]>();
  const [gastos, setGastos] = useState<TypesGastos[]>();

  useEffect(() => {
    async function buscarDados() {
      const ref = collection(db, "receita");

      const receitaQuery = query(ref, where("uid", "==", user.uid));

      getDocs(receitaQuery).then((snapshot) => {
        let lista: TypesReceita[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            receita: doc.data().valor,
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
    try {
      const data = await createUserWithEmailAndPassword(auth, email, senha);

      alert("Conta criada com sucesso!");
      setUser({
        email: data.user.email,
        uid: data.user.uid,
      });
    } catch {
      alert("erro");
    }
  }

  async function Login({ email, senha }: { email: string; senha: string }) {
    try {
      const data = await signInWithEmailAndPassword(auth, email, senha);
      setUser({
        email: data.user.email,
        uid: data.user.uid,
      });
      alert("bem vindo");
    } catch {
      alert("erro");
    }
  }

  async function Deletar({ uid }: DeletarProp) {
    const data = doc(db, "receita", uid);

    await deleteDoc(data)
      .then(() => {
        alert("apagou");
      })
      .catch(() => {
        alert("erroooooo");
      });
  }

  async function DeletarGastos({ uid }: DeletarProp) {
    const data = doc(db, "gastos", uid);

    await deleteDoc(data)
      .then(() => {
        alert("apagou");
      })
      .catch((err) => {
        alert(err);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
