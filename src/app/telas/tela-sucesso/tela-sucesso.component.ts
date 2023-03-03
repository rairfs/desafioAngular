import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/entidades/Pessoa';

@Component({
  selector: 'app-tela-sucesso',
  templateUrl: './tela-sucesso.component.html',
  styleUrls: ['./tela-sucesso.component.css']
})
export class TelaSucessoComponent implements OnInit {
  
  @Input() pessoa?: Pessoa;


  constructor(){

  }

  ngOnInit(): void {
  }

  duplicarConta() {
    
  }

}
