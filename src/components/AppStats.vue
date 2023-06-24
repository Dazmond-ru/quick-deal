<template>
  <div class="app-footer">Текущий статус задач - активные: {{ stats.active }} , выполненные: {{ stats.done }}</div>
</template>

<script lang="ts">
import { Stats } from '@/types/Stats';
import { defineComponent, computed, Ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const stats: Ref<Stats> = computed(() => store.getters.stats);

    return {
      stats,
    };
  },
});
</script>
