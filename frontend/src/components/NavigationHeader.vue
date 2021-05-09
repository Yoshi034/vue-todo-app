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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationHeader",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
