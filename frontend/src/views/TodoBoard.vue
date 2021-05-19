<template>
  <div class="TodoBoard_content">
    <h2>Todo一覧</h2>
    <router-link to="/add">新規追加</router-link>
    <Suspense>
      <template #default>
        <TodoList />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  name: "TodoBoard",
  components: { TodoList },
});
</script>

<style>
.TodoBoard_content {
  margin-top: 10px;
  width: 40%;
  padding: 0 30%;
}
</style>
