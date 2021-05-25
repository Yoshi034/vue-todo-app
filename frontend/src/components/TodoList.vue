<template>
  <TodoFilter v-bind:filterType="filterType" @fillter-event="fillterTodo" />
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
    // ストアの取得
    const store = useStore();
    // Todo取得API呼び出し
    await store.dispatch("getTodoList");

    // 絞り込み時のコールバック関数
    const fillterTodo = (conditions: FilterType) => {
      const payload = {
        filterType: conditions,
      };
      store.commit("setFilterType", payload);
    };

    return {
      // ストアから取得したTodo全件
      allTodos: computed(() => store.getters.getAllTodos),
      // ストアから取得した完了済みのTodo
      completedTodos: computed(() => store.getters.getCompletedTodos),
      // ストアから取得した未完了のTodo
      incompletedTodos: computed(() => store.getters.getIncompletedTodos),
      // ストアから取得した絞り込みの種類
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
