export interface Todo {
  id?: number;
  title: string;
  description: string;
  owner: string;
  isCompleted: boolean;
  date: Date;
}

export interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  setIsComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}
