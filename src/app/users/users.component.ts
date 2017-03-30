import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
})
export class UsersComponent  {
  name = 'Jorge';
  items=[
    {
      name: 'Jorge Rodarte 1',
      email: 'jrodarte@email.com',
      edad: 23
    },
    {
      name: 'Jorge Rodarte 2',
      email: 'jrodarte@email.com',
      edad: 24
    }, {
      name: 'Jorge Rodarte 3',
      email: 'jrodarte@email.com',
      edad: 25
    }
  ];
}
