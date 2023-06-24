<template>
  <ul class="todo-list">
    <AppTodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, Ref } from 'vue';
import { useStore } from 'vuex';
import { Todo } from '@/types/Todo';
import AppTodoItem from './AppTodoItem.vue';

export default defineComponent({
  components: {
    AppTodoItem,
  },
  setup() {
    const store = useStore();

    const todos: Ref<Todo[]> = computed(() => store.getters.filteredTodos);

    return {
      todos,
    };
  },
});
</script>
