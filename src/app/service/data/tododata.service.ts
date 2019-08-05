import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(
    private http: HttpClient
  ) { }

  retriveAllTodos(username) {
    return this.http.get<Todo[]>('http://localhost:8080/users/${in28minutes}/todos')
    console.log("My welcome service working fine")
  }

  deleteTodo(username , id){
        return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retriveTodo(username , id){
    return this.http.get<Todo>(`http://localhost:8080/users/{username}/todos/{id}`)
}

}
