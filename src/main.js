import TodoList from "./components/todoList/TodoList";

  new TodoList({
    el: "#app",
    title:"My amazing Todolist",
    apiUrl: "https://6a4f4934f45d5352b6112e4b.mockapi.io",
  }).render();