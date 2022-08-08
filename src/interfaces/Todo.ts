export interface Todo {
  id: number;
  text: string;
  isDone?: boolean;
}

export interface ITodoContext {
  todos: Todo[],
  addTodo: (text: string) => void;
  handleStatus: (id: number) => void; 
  removeTodo: (id: number) => void; 
}