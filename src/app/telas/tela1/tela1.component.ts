import { Component } from '@angular/core';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.component.html',
  styleUrls: ['./tela1.component.css']
})
export class Tela1Component {

  isHovered: boolean;

  constructor () {
    this.isHovered = false;
  }

  onMouseEnter(){
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
