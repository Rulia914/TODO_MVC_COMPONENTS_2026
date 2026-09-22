import DB from "../../DB.js";
import Todo from "../todo/Todo.js";
import getTemplate from './template';

export default class TodoList {
    constructor(data) {
      DB.setApiUrl(data.apiUrl);
      this.domEl = document.querySelector(data.el);
      this.title= data.title ?? "My Todolist";
      this.todos = [];

    }
    async loadTodos() {
      const todos = await DB.findAll();
      this.todos = [... todos.map((todo) => new Todo(todo))];
    }
    async render(){
      await this.loadTodos();
      this.domEl.innerHTML = getTemplate(this);
    }

    storeInArray(todo){
      this.todos.push(new Todo(todo));
    }
    
    storeInDom(data){
      const newTodo = document.createElement('div');
      this.domEl.querySelector('.todo-list').prepend(newTodo);
      newTodo.outerHTML= this.todos
        .filter((todo)=>todo.id == data.id)[0]
        .render();
    }

    async store(data){
      //1. Ajouter dans l'API via DB.store();
      const newTodo = await DB.store({content: data, completed: false});
      //2. Ajouter dans les todos via this.storeInArray()
      this.storeInArray(newTodo);
      //3. Ajouter dans le DOM via this.storeInDom()
      this.storeInDom(newTodo);
  }
  }