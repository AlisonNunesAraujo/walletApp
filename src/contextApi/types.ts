import { ReactNode } from "react";

export type States = {
  user: stateUser;
  logado: boolean;
  CreateUser: (info: { email: string; senha: string }) => Promise<void>;
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
    addValor: string | number;
    addDesc: string;
  }) => Promise<void>;
  load: boolean;
  loading: boolean;
  addAccount: (info: accountProps) => Promise<void>;
  account: listAccount[] | undefined;
  deleteAccountfixed: (info: { uid: string }) => Promise<void>;
  saldo: number;
  despesa: number;
};

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
}

export interface TypesGastos {
  gastos: number;
  desc: string;
  uid: string;
}

export type DeletarProp = {
  uid: string;
};

export type DeletarGastos = {
  uid: string;
};
