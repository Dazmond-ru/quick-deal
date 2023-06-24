import { createStore } from 'vuex';
import { Todo } from '@/types/Todo';
import { Filter } from '@/types/Filter';

interface State {
  todos: Todo[];
  activeFilter: Filter;
}

export const store = createStore<State>({
  state: {
    todos: [
      { id: 0, text: 'Первая задача', completed: true },
      { id: 1, text: 'Вторая задача', completed: false },
    ],
    activeFilter: 'Все',
  },
  mutations: {
    addTodo(state: State, todo: Todo) {
      state.todos.push(todo);
    },
    removeTodo(state: State, id: number) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(state: State, id: number) {
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo(state: State, { id, text }: { id: number; text: string }) {
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.text = text;
      }
    },
  },
  getters: {
    todos: (state) => state.todos,
    activeFilter: (state) => state.activeFilter,
  },
});

export default store;
