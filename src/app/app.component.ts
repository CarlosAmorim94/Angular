import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'teste-angular'
  name = 'Carlos'
  idade = 28

  names = ['Carlos', 'Danielle', 'Sophia']

  nameMan= this.names[0].toUpperCase()

  people = [
    {name: 'Carlos', age: 28},
    {name: 'Danielle', age: 32},
    {name: 'Sophia', age: 8}
  ]
}
