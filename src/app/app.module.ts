import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// formularios reactivos

import { ReactiveFormsModule } from '@angular/forms';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todoReducer } from './todo/todo.reducer';
import { AppComponent } from './app.component';

import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todos: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
