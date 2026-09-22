import TodoList from "./components/todoList/TodoList";

  window.TodoList = new todoList({
    el: "#app",
    title:"My Todolist",
    apiUrl: "https://6a4f4934f45d5352b6112e4b.mockapi.io",
  });
  window.todoList.render();