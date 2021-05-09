<template>
  <div class="TodoBoard_content">
    <TodoFilter></TodoFilter>
    <TodoForm></TodoForm>
    <TodoList></TodoList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoForm from "@/components/TodoForm.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "TodoBoard",
  components: { TodoForm, TodoFilter, TodoList },
});
</script>

<style scoped>
.TodoBoard_content {
  margin-top: 10px;
  width: 40%;
  padding: 0 30%;
}
</style>
