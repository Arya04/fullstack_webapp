import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
    public targetDate: Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[];
  message: String

    // new Todo(1,'Learn to dance', false, new Date()),
    // new Todo(2,'Become an expert at Angular', false, new Date()),
    // new Todo(3,'Visit California', false, new Date())

    // {id : 1, description : 'Learn to dance'},
    // {id : 2, description : 'Become an expert at Angular'},
    // {id : 3, description : 'Visit California'}
  
  // todo = {
  //   id : 1,
  //   description : 'Learn to dance'
  // }
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Arya').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('arya',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete successful of Todo ${id}`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
