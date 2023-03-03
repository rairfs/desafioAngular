import { Injectable } from '@angular/core';
import { Pessoa } from '../entidades/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class CpfService {

  pessoas: Pessoa[];
  constructor() {
    this.pessoas = [
      {cpf: '51822545390', nome: 'Mariane de Sousa Oliveira', situacaoCpf: 'regular', contas: [{banco: 'Coorperativa Viacredi', tipo: 'Conta Corrente', numero: '778461-8'}, {banco: 'Cooperativa Viacredi', numero: '557932-4', tipo: 'Conta aplicação'}] }
    ];
   }

   buscarPessoa(cpf: string): Pessoa | undefined{
    // this.pessoas.forEach(p => {
    //   if (p.cpf == cpf){
    //     console.log('Entrei no if');
    //     return p;
    //   } else {
    //     console.log('Entrei no else');
    //     return null;
    //   }
    // })
    // console.log('Ainda assim vim pra fora do for');
    // return null;
    for (let i = 0; i < this.pessoas.length; i++){
      if (this.pessoas.at(i)?.cpf == cpf){
        return this.pessoas.at(i);
      }
    }
    return undefined;
   }
}
