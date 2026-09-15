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
  }