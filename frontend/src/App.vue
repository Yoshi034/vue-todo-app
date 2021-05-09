<template>
  <NavigationHeader />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationHeader from "@/components/NavigationHeader.vue";

export default defineComponent({
  name: "App",
  components: { NavigationHeader },
});
</script>

<style>
body {
  margin: 0;
}
</style>
