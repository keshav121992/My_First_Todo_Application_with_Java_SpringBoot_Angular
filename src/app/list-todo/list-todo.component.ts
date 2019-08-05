import { Component, OnInit } from '@angular/core';
import { TododataService } from '../service/data/tododata.service';
import { Router } from '@angular/router';


export class Todo{
  constructor(
    public id: Number,
    public username: string,
    public discription: string,
    public targateDate: Date,
    public done: boolean
  ){    

  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
   todos : Todo[]
   message: string
  //   new Todo(1,'Learn to Dance', false, new Date()),
  //   new Todo(2,'Learn to Java', false, new Date()),
  //   new Todo(3,'Learn to SpringBoot', false, new Date()),
  //   new Todo(4,'Learn to Angular', false, new Date()),
  //   new Todo(5,'Visit USA & UK', false, new Date())
  //   // {id:1, description: 'Learn to Dance'},
  //   // {id:2, description: 'Learn to Java'},
  //   // {id:3, description: 'Learn to SpringBoot'},
  //   // {id:4, description: 'Learn to Angular'},
  //   // {id:5, description: 'Visit USA & UK'}
  // ]
  // todo={
  //    id: 1,
  //    description: 'Learn to java'
  // }

  constructor(
    private todoService: TododataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoService.retriveAllTodos('in28Minutes').subscribe(
      response=>{
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo('in28Minutes', id).subscribe(
      response=>{
        console.log(response);
       this.message = `Deleted todo ${id} successfully!`
      }
    )
    console.log(`delete todo ${id}` );
  }

  updateTodo(id){
    console.log(`update todo ${id}` );
    this.router.navigate([`todo`, id])

}


}
