<template>
  <div class="TodoBoard_content">
    <h2>Todo追加</h2>
    <router-link to="/">一覧に戻る</router-link>
    <div class="TodoForm_content">
      <form class="TodoForm_form">
        <div class="TodoForm_input">
          <input
            v-model="data.todoText"
            type="text"
            placeholder="タスクを入力してください"
          />
        </div>
        <div class="TodoForm_button">
          <button type="button" @click="onSubmit">追加</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { PostRequest } from "@/store//models/PostRequest";

type Params = {
  todoText: string;
};

export default defineComponent({
  name: "TodoAdd",
  setup() {
    const data = reactive<Params>({
      todoText: "",
    });

    const router = useRouter();
    const store = useStore();

    const onSubmit = async () => {
      const req: PostRequest = { text: data.todoText };
      await store.dispatch("addTodo", req);
      router.push("/");
    };

    return { data, onSubmit };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TodoForm_content {
  margin-top: 20px;
  margin-bottom: 20px;
}
.TodoForm_form {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.TodoForm_input {
  width: 86%;
}
.TodoForm_input input {
  float: left;
  width: 95%;
  border-radius: 5px;
  padding: 8px;
  border: solid 1px lightgray;
  background-color: #fafbfc;
  font-size: 16px;
  outline: none;
}
.TodoForm_input input:focus {
  background-color: white;
}
.TodoForm_button {
  text-align: center;
  width: 14%;
}
.TodoForm_button button {
  height: 35px;
  cursor: pointer;
  line-height: 1;
  font-size: 1rem;
  color: white;
  background-color: darkgreen;
  border-radius: 5px;
  padding: 0 15px;
  border: none;
  vertical-align: middle;
}
.TodoForm_button button:hover {
  background-color: green;
}
</style>
