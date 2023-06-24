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
    setFilter(state: State, filter: Filter) {
      state.activeFilter = filter;
    },
  },
  getters: {
    activeFilter: (state) => state.activeFilter,

    activeTodos: (state) => state.todos.filter((todo) => !todo.completed),
    doneTodos: (state) => state.todos.filter((todo) => todo.completed),
    filteredTodos: (state, getters) => {
      switch (state.activeFilter) {
        case 'Активные':
          return getters.activeTodos;
        case 'Выполненные':
          return getters.doneTodos;
        case 'Все':
        default:
          return state.todos;
      }
    },
  },
});

export default store;
