<template>
  <header>
    <nav class="app-nav">
      <RouterLink to="/" class="app-nav__link" :class="{ 'app-nav__link--active': $route.path === '/' }">
        Главная
      </RouterLink>
      <RouterLink to="/todos" class="app-nav__link" :class="{ 'app-nav__link--active': $route.path === '/todos' }">
        Список задач
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
