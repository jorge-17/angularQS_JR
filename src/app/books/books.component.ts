import {Component} from '@angular/core';

@Component ({
  selector: 'books',
  template: './books.component.html'
})

export class BooksComponent{    
    books=[
      {
        titulo:'EL CUADRANTE DEL FLUJO DE DINERO',
        ISBN:'9786073147088'
      },
      {
        titulo:'Padre Rico, Padre Pobre',
        ISBN:'9786071124302'
      },
      {
        titulo:'El hombre mas rico de Babilonia',
        ISBN:'8477203717'
      }
    ];
}
