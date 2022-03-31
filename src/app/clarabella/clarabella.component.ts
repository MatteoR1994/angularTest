import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlutoService } from '../services/pluto.service';
import { Hero, TopolinoService } from '../services/topolino.service';

@Component({
  selector: 'app-clarabella',
  //templateUrl: './clarabella.component.html',
  template: `
    <button type="button" (click)="lightClicked()">Click me!</button>
    <span>{{message}}</span>`,
  styleUrls: ['./clarabella.component.scss']
})
export class ClarabellaComponent implements OnInit {

  @Input() hero!: Hero;

  @Output() selected = new EventEmitter<Hero>();

  isOn = false;

  get message() { 
    return `The light is ${this.isOn ? 'On' : 'Off'}`; 
  }

  constructor(private topolino: PlutoService) { }

  ngOnInit(): void {
  }
  
  lightClicked() { 
    this.isOn = !this.isOn; 
  }

  heroClick() { 
    this.selected.emit(this.hero); 
  }

}
