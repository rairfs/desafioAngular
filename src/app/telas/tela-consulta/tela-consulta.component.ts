import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/entidades/Pessoa';
import { CpfService } from 'src/app/services/cpf-service.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {

  @Input() titulo: string;
  @Input() caminho: string;
  pagina?: number;
  isCpfValido: boolean = false;
  cpf: string = '';
  mensagemErro: string = '';
  pessoa?: Pessoa | null;
  
  constructor(private cpfService: CpfService){
    this.titulo = "NOVA ADMISSÃO COOPERADO";
    this.caminho = "Cadastro / Admissão do Cooperado / Nova Admissão do Cooperado"
  }

  ngOnInit(): void {
    
  }

  onConsultar(){
    if (this.cpf.length < 14) {
      this.mensagemErro = 'CPF Inválido'
      console.log('Dentro do primeiro if?')
      return
    }
    const cpfSemPontos = this.removePontos(this.cpf);

    if (this.validaCpf(cpfSemPontos)){
      this.pessoa = this.cpfService.buscarPessoa(cpfSemPontos);
      console.log(this.pessoa);
      if (!this.pessoa) {
        this.mensagemErro = 'CPF não encontrado!';
        console.log('CPF não encontrado!');
      } else {
        this.isCpfValido = true;
        this.mensagemErro = '';
      }
      return;
    }
    this.mensagemErro = 'CPF Inválido';
  }

  removePontos(cpfComPontos: string): string{
    let cpfSemPontos = '';

    for (let i = 0; i < 14; i++){
      if (i == 3 || i == 7 || i == 11){
        continue;
      }
      cpfSemPontos += cpfComPontos.charAt(i);
    }
    return cpfSemPontos;
  }

  formataInput(){
    if (this.cpf.length == 3 || this.cpf.length == 7){
      this.cpf += '.';
    } else if (this.cpf.length == 11) {
      this.cpf += '-';
    }
  }

  validaCpf(cpf: string): boolean{
    let Soma;
    let Resto;
    Soma = 0;
    if (cpf == "00000000000") return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
  }

  duplicarConta(){
    
  }

}
