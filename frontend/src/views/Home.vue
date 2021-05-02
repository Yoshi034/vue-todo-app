<template>
  <header class="PageHeader_header">
    <h1 class="PageHeader_title">Todoアプリ</h1>
    <nav>
      <ul class="PageHeader_nav">
        <li>テストユーザさん</li>
        <li>ログアウト</li>
      </ul>
    </nav>
  </header>
  <div class="TodoBoard_content">
    <div class="TodoForm_content">
      <form class="TodoForm_form">
        <div class="TodoForm_input">
          <input type="text" placeholder="タスクを入力してください" />
        </div>
        <div class="TodoForm_button">
          <button type="button">追加</button>
        </div>
      </form>
    </div>
    <div class="TodoFilter_content">
      <button class="TodoFilter_buttonSelected">全て</button>
      <button class="TodoFilter_buttonUnselected">未完了のみ</button>
      <button class="TodoFilter_buttonUnselected">完了のみ</button>
    </div>

    <ul class="TodoList_list">
      <li class="TodoItem_item">
        <div class="TodoItem_todo">
          <label>
            <input
              type="checkbox"
              class="TodoItem_checkbox"
              checked="checked"
            />
            <span>洗い物をする</span>
          </label>
        </div>
        <div class="TodoItem_delete">
          <button class="TodoItem_button">x</button>
        </div>
      </li>
      <li class="TodoItem_item">
        <div class="TodoItem_todo">
          <label>
            <input type="checkbox" class="TodoItem_checkbox" />
            <span>洗濯物を干す</span>
          </label>
        </div>
        <div class="TodoItem_delete">
          <button class="TodoItem_button">x</button>
        </div>
      </li>
      <li class="TodoItem_item">
        <div class="TodoItem_todo">
          <label>
            <input type="checkbox" class="TodoItem_checkbox" />
            <span>買い物へ行く</span>
          </label>
        </div>
        <div class="TodoItem_delete">
          <button class="TodoItem_button">x</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style>
body {
  margin: 0;
}

.PageHeader_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  border-bottom: solid 1px black;
  background: black;
}
.PageHeader_title {
  color: white;
  font-size: 1.5rem;
}
.PageHeader_header a {
  text-decoration: none;
}
.PageHeader_nav {
  display: flex;
  list-style: none;
}
.PageHeader_nav li {
  margin-left: 30px;
  color: white;
}
.PageHeader_nav a {
  color: white;
}
.PageHeader_nav button,
.PageHeader_nav button:active,
.PageHeader_nav button:hover {
  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: white;
}

.TodoBoard_content {
  margin-top: 10px;
  width: 40%;
  padding: 0 30%;
}

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

.TodoList_list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

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
