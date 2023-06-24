import { createStore } from 'vuex';
import { Todo } from '@/types/Todo';

interface State {
  todos: Todo[];
}

export const store = createStore<State>({
  state: {
    todos: [
      { id: 0, text: 'Первая задача', completed: true },
      { id: 1, text: 'Вторая задача', completed: false },
    ],
  },
  getters: {
    todos: (state) => state.todos,
  },
});

export default store;
