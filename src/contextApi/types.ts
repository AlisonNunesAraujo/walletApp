import { ReactNode } from "react";

export type States = {
  user: stateUser;
  logado: boolean;
  CreateUser: (info: { email: string; senha: string; name: string }) => Promise<void>;
  Login: (info: { email: string; senha: string }) => Promise<void>;
  receita: TypesReceita[] | undefined;
  gastos: TypesGastos[] | undefined;
  Deletar: (info: DeletarProp) => Promise<void>;
  DeletarGastos: (info: DeletarGastos) => Promise<void>;
  LogOut: () => Promise<void>;
  AddReceita: (info: {
    addValor: string | number;
    addDesc: string;
  }) => Promise<void>;
  AddGastos: (info: {
    addValor:  number| string;
    addDesc: string;
  }) => Promise<void>;
  load: boolean;
  loading: boolean;
  addAccount: (info: accountProps) => Promise<void>;
  account: listAccount[] | undefined;
  deleteAccountfixed: (info: { uid: string }) => Promise<void>;
  AddName:(info: { name: string }) => Promise<void>;
  nameUser: nome[];
  saldoReceita: number[]|null;
  saldoGastos: number[]|null;
  saldoTotal: number[]|null;
};



export interface nome {
  name: string;
  uid: string;
}

export type UidDelete = {
  uid: any;
};
export type accountProps = {
  nameAccount: string;
  valor: string;
  vencimento: string;
};

export type listAccount = {
  uid: string;
  nameAccount: string;
  valor: string;
  vencimento: string;
};

export type stateUser = {
  email: string | null;
  uid: string | number;
};

export type ChildrenProp = {
  children: ReactNode;
};

export interface TypesReceita {
  receita: number;
  desc: string | number;
  uid: string;
  date: string
}

export interface TypesGastos {
  gastos: number;
  desc: string;
  uid: string;
  date: string
}

export type DeletarProp = {
  uid: string;
};

export type DeletarGastos = {
  uid: string;
};
