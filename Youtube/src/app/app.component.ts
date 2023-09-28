import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'teste-angular'
  name: string = 'Carlos'
  idade: number = 28

  names: string[] = ['Carlos', 'Danielle', 'Sophia']

  nameMan: string = this.names[0].toUpperCase()

  people = [
    {name: 'Carlos', age: 28},
    {name: 'Danielle', age: 32},
    {name: 'Sophia', age: 8}
  ]
}
