<template>
  <li class="todo-item" :class="{ 'todo-item--done': todo.completed }">
    <div class="todo-item__status" @click="toggleTodo">
      <i class="bi" :class="todo.completed ? 'bi-check-square' : 'bi-square'"></i>
    </div>
    <span v-if="!editing" class="todo-item__text">{{ todo.text }}</span>
    <input
      v-else
      class="todo-item__text todo-item__text--edit"
      type="text"
      v-model="editedText"
      @keyup.enter="editTodo"
    />
    <button class="todo-item__change-button">
      <i class="bi" :class="editing ? 'bi-check2' : 'bi-pencil'" @click.stop="editTodo"></i>
    </button>
    <button class="todo-item__change-button" @click.stop="removeTodo">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Todo } from '@/types/Todo';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const editing = ref(false);
    const editedText = ref(props.todo.text);

    const toggleTodo = () => {
      store.commit('toggleTodo', props.todo.id);
    };

    const removeTodo = () => {
      store.commit('removeTodo', props.todo.id);
    };

    const editTodo = () => {
      if (editing.value && editedText.value) {
        store.commit('editTodo', { id: props.todo.id, text: editedText.value });
      }
      editedText.value = props.todo.text;
      editing.value = !editing.value;
    };

    return {
      toggleTodo,
      removeTodo,
      editTodo,
      editing,
      editedText,
    };
  },
});
</script>
