<template>
  <section class="add-todo">
    <form class="add-todo__form" @submit.prevent="addTodo">
      <div class="text-input text-input--focus">
        <input v-model="todoText" class="input" />
      </div>
      <button
        class="button"
        :class="!todoText.length ? 'button--disabled' : 'button--filled'"
        :disabled="!todoText.length"
      >
        Добавить
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const todoText = ref('');

    const addTodo = () => {
      if (todoText.value) {
        store.commit('addTodo', { id: Date.now(), text: todoText.value, completed: false });
        todoText.value = '';
      }
    };
    return { todoText, addTodo };
  },
});
</script>
