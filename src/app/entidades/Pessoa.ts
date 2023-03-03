import { Conta } from "./Conta";

export interface Pessoa{
    cpf: String;
    nome: String;
    situacaoCpf: string;
    contas: Conta[];
}