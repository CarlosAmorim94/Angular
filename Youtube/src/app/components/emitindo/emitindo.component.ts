import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitindo',
  templateUrl: './emitindo.component.html',
  styleUrls: ['./emitindo.component.css']
})
export class EmitindoComponent implements OnInit {

  number: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onAddNumber() {
    this.number++ 
  }

  onRemoveNumber() {
    this.number-- 
  }

}
