import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  name = 'Jorge';
  items=[
    {
      name: 'Jorge Rodarte 1',
      email: 'jrodarte@email.com'
    },
    {
      name: 'Jorge Rodarte 2',
      email: 'jrodarte@email.com'
    }, {
      name: 'Jorge Rodarte 3',
      email: 'jrodarte@email.com'
    }
  ];
}
