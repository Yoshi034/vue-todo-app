<template>
  <div class="TodoFilter_content">
    <button class="TodoFilter_buttonSelected" @click="fillterTodos('ALL')">
      全て
    </button>
    <button
      class="TodoFilter_buttonUnselected"
      @click="fillterTodos('COMPLETED')"
    >
      完了のみ
    </button>
    <button
      class="TodoFilter_buttonUnselected"
      @click="fillterTodos('INCOMPLETE')"
    >
      未完了のみ
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export type FilterType = "ALL" | "COMPLETED" | "INCOMPLETE";

export default defineComponent({
  name: "TodoFilter",
  setup(props, { emit }) {
    // ボタンのイベントハンドラ
    const fillterTodos = (conditions: FilterType) => {
      console.log("フィルター呼び出し");
      emit("fillter-event", conditions);
    };

    return { fillterTodos };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TodoFilter_content {
  text-align: right;
}
.TodoFilter_content button {
  margin-left: 5px;
}
.TodoFilter_buttonSelected {
  background-color: #31b3c7;
  border-width: 0;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  padding: 7px 16px;
  text-align: center;
  white-space: nowrap;
  border-radius: 290486px;
  outline: none;
}
.TodoFilter_buttonUnselected {
  background-color: lightgray;
  border-width: 0;
  color: gray;
  cursor: pointer;
  justify-content: center;
  padding: 7px 16px;
  text-align: center;
  white-space: nowrap;
  border-radius: 290486px;
  outline: none;
}
</style>
