import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = false
  name: string = ''

  showDiv(): void {
    this.canShow = !this.canShow
  }

  showName(): void {

    if (this.name === 'Carlos') {
      this.name = ''
    } else {
      this.name = 'Carlos'
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
