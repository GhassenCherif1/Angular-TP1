import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoComponent } from '../todo/todo/todo.component';

const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
