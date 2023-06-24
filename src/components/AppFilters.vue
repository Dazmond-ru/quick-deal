<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="filter in filters"
        :key="filter"
        class="button"
        :class="{ 'button--primary': activeFilter === filter }"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </section>
  </aside>
</template>

<script lang="ts">
import { defineComponent, computed, Ref } from 'vue';
import { useStore } from 'vuex';
import { Filter } from '@/types/Filter';
import { Todo } from '@/types/Todo';

export default defineComponent({
  setup() {
    const store = useStore();

    const filters: Filter[] = ['Все', 'Активные', 'Выполненные'];

    const activeFilter: Ref<Filter> = computed(() => store.getters.activeFilter);
    const todos: Ref<Todo[]> = computed(() => store.getters.filteredTodos);

    const setFilter = (filter: Filter) => {
      store.commit('setFilter', filter);
    };

    return {
      filters,
      activeFilter,
      todos,
      setFilter,
    };
  },
});
</script>
