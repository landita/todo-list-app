import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TodoState, Todo } from '../interfaces';

export const todoStore = create<TodoState>()(
  devtools(
    (set) => ({
      todos: [],
      addTodo: (todo: Todo) =>
        set((state) => ({ todos: [...state.todos, todo] })),
      setIsComplete: (id: number) =>
        set((state) => ({
          todos: [
            ...state.todos.map((curr) => {
              if (id === curr.id) {
                curr.isCompleted = !curr.isCompleted;
              }
              return curr;
            }),
          ],
        })),
      deleteTodo: (id: number) =>
        set((state) => {
          return {
            todos: state.todos.filter((curr) => curr.id !== id),
          };
        }),
    }),
    {
      name: 'todo-store',
    },
  ),
);
