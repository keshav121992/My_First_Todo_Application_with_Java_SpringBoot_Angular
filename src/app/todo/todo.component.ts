import { Component, OnInit } from '@angular/core';
import { TododataService } from '../service/data/tododata.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  constructor(
    private todoService: TododataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1, '', '', new Date(), false);
    this.todoService.retriveTodo('in28Minutes', this.id)
    
    .subscribe(data=>this.todo = data
      )
  }

}
