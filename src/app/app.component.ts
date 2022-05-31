import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-angular'
  name = 'Carlos'
  idade= 28

  names = ['carlos', 'danielle', 'sophia']

  nameMan= this.names[0].toUpperCase()
}
