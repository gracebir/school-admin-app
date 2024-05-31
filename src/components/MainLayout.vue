<template>
  <NavBarVue/>
  <main class="w-full h-[90vh]">
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarVue from "./NavBar.vue";
import {  RouterView } from 'vue-router'

export default defineComponent({
  components: {
    RouterView,
    NavBarVue
  }
})
</script>