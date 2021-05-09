<template>
  <li class="TodoItem_item">
    <div class="TodoItem_todo">
      <label>
        <input
          type="checkbox"
          class="TodoItem_checkbox"
          v-bind:checked="completed"
        />
        <span>{{ text }}</span>
      </label>
    </div>
    <div class="TodoItem_delete">
      <button class="TodoItem_button">x</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",
  props: {
    text: String,
    completed: Boolean,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TodoItem_item {
  padding: 15px 10px;
  background: whitesmoke;
  margin-bottom: 10px;
}
.TodoItem_todo {
  float: left;
  text-align: left;
}
.TodoItem_checkbox {
  margin-right: 7px;
  outline: none;
}
.TodoItem_delete {
  text-align: right;
}
.TodoItem_button {
  font-size: 17px;
  font-weight: bold;
  border: none;
  color: grey;
  background: lightgrey;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  line-height: 20px;
  cursor: pointer;
  outline: none;
}
</style>
