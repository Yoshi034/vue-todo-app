<template>
  <ul class="TodoList_list">
    <TodoItem text="洗い物をする" v-bind:completed="true"></TodoItem>
    <TodoItem text="洗濯物を干す" v-bind:completed="false" />
    <TodoItem text="買い物へ行く" v-bind:completed="false" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoItem from "@/components/TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: { TodoItem },
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
