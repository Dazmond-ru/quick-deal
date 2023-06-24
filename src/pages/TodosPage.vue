<template>
  <main class="app-main">
    <h3 class="title">Список задач</h3>

    <AppAddTodo />

    <AppStats />

    <AppFilters />

    <AppTodoList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppFilters from '@/components/AppFilters.vue';
import AppTodoList from '@/components/AppTodoList.vue';
import AppAddTodo from '@/components/AppAddTodo.vue';
import AppStats from '@/components/AppStats.vue';

export default defineComponent({
  components: {
    AppFilters,
    AppTodoList,
    AppAddTodo,
    AppStats,
  },
});
</script>
