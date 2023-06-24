<template>
  <main class="app-main">
    <h3 class="title">Главная</h3>

    <AppStats />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppStats from '@/components/AppStats.vue';

export default defineComponent({
  components: {
    AppStats,
  },
});
</script>
