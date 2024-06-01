<template>
  <div class="flex">
    <SideBarVue />
    <div class="flex-1 h-screen overflow-y-scroll">
      <NavBarVue />
      <main class="w-full px-4 lg:px-8 py-3 lg:py-5">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarVue from "./NavBar.vue";
import { RouterView } from "vue-router";
import SideBarVue from "./SideBar.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    RouterView,
    NavBarVue,
    SideBarVue,
  },
});
</script>