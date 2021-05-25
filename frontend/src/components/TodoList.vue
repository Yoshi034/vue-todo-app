<template>
  <TodoFilter @fillter-event="fillterTodo" />
  <ul class="TodoList_list" v-if="filterType === 'ALL'">
    <TodoItem
      v-for="(todo, index) in allTodos"
      v-bind:key="index"
      v-bind:id="todo.id"
      v-bind:text="todo.text"
      v-bind:completed="todo.completed"
    />
  </ul>
  <ul class="TodoList_list" v-else-if="filterType === 'COMPLETED'">
    <TodoItem
      v-for="(todo, index) in completedTodos"
      v-bind:key="index"
      v-bind:id="todo.id"
      v-bind:text="todo.text"
      v-bind:completed="todo.completed"
    />
  </ul>
  <ul class="TodoList_list" v-else-if="filterType === 'INCOMPLETED'">
    <TodoItem
      v-for="(todo, index) in incompletedTodos"
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
import TodoItem from "@/components/TodoItem.vue";
import { useStore, FilterType } from "@/store/index";

export default defineComponent({
  name: "TodoList",
  components: { TodoFilter, TodoItem },

  async setup() {
    const store = useStore();
    await store.dispatch("getTodoList");

    const fillterTodo = (conditions: FilterType) => {
      const payload = {
        filterType: conditions,
      };
      store.commit("setFilterType", payload);
    };

    return {
      allTodos: computed(() => store.getters.getAllTodos),
      completedTodos: computed(() => store.getters.getCompletedTodos),
      incompletedTodos: computed(() => store.getters.getIncompletedTodos),
      filterType: computed(() => store.state.filterType),
      fillterTodo,
    };
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
