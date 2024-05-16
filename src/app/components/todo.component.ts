import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDo } from '../models/todo';
import { datePresentOrFuture } from './custom-validator';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  todoArray!: FormArray;
  

  constructor(private formBuilder: FormBuilder) {};
  
  // 2 form groups - todoForm, nested todoGroup -> todoArray
  ngOnInit(): void {
    this.todoArray = this.formBuilder.array([]);
    this.todoForm = this.formBuilder.group({
      todos: this.todoArray
    });
  }

  addToDo() {
    const todoGroup = this.formBuilder.group({
      description: this.formBuilder.control<string>('', [Validators.required, Validators.minLength(5)]),
      // <Date | string>
      dueDate: this.formBuilder.control<Date>(new Date(), [Validators.required, datePresentOrFuture]),
      priority: this.formBuilder.control<string>('Low')
    });
    this.todoArray.push(todoGroup);
  }

  deleteTodo(idx: number) {
    if (this.todoArray.length > 1) {
      this.todoArray.removeAt(idx);
    }
  }

  task: ToDo = new ToDo('', '', new Date());
  
  processForm() {
    const tasks = this.todoForm.value;
    console.info(typeof tasks);
    console.info('Tasks:' + JSON.stringify(tasks));
    tasks.todos.forEach((task: ToDo) => {
      console.info('Task:', task);
    });
  }


}
