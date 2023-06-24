import { Store } from 'vuex';

const localStoragePlugin = <S>(store: Store<S>) => {
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state));
  }

  store.subscribe((_mutation, state: S) => {
    localStorage.state = JSON.stringify(state);
  });
};

export default localStoragePlugin;
