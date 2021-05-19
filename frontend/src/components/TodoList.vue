<template>
  <TodoFilter />
  <ul class="TodoList_list">
    <TodoItem
      v-for="(todo, index) in todos"
      v-bind:key="index"
      v-bind:id="todo.id"
      v-bind:text="todo.text"
      v-bind:completed="todo.completed"
    ></TodoItem>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoItem from "@/components/TodoItem.vue";
import { useStore } from "@/store/index";

export default defineComponent({
  name: "TodoList",
  components: { TodoFilter, TodoItem },

  async setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    await store.dispatch("getTodoList");
    return { todos };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TodoList_list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}
</style>
