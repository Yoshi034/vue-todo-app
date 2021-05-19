<template>
  <TodoFilter @fillter-event="fillterTodo" />
  <ul class="TodoList_list">
    <TodoItem
      v-for="(todo, index) in todos"
      v-bind:key="index"
      v-bind:id="todo.id"
      v-bind:text="todo.text"
      v-bind:completed="todo.completed"
    />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TodoFilter from "@/components/TodoFilter.vue";
import { FilterType } from "@/components/TodoFilter.vue";
import TodoItem from "@/components/TodoItem.vue";
import { useStore } from "@/store/index";

// export type FilterType = "ALL" | "COMPLETED" | "INCOMPLETE";

export default defineComponent({
  name: "TodoList",
  components: { TodoFilter, TodoItem },

  async setup() {
    const store = useStore();
    await store.dispatch("getTodoList");
    let todos = computed(() => store.getters.getAllTodos);
    console.log(todos);

    const fillterTodo = (conditions: FilterType) => {
      console.log("filter呼び出し2");
      console.log(conditions);
      if (conditions === "ALL") {
        todos = computed(() => store.getters.getAllTodos);
        console.log(todos);
      } else if (conditions === "COMPLETED") {
        console.log("完了if");
        todos = computed(() => store.getters.getCompletedTodos);
        console.log(todos);
      } else if (conditions === "INCOMPLETE") {
        todos = computed(() => store.getters.getIncompletedTodos);
        console.log(todos);
      }
    };

    return { todos, fillterTodo };
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
