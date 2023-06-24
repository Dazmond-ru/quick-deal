<template>
  <ul class="todo-list">
    <AppTodoItem />
    <AppTodoItem />
    <AppTodoItem />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppTodoItem from './AppTodoItem.vue';

export default defineComponent({
  components: {
    AppTodoItem,
  },
});
</script>
