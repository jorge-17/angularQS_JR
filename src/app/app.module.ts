import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app/app.component';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UsersComponent, BooksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
