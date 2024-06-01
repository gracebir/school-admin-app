<template>
  <sidebar
    class="h-screen w-[102px] py-8 px-4 flex flex-col lg:w-[280px] bg-gray-800 transition-all duration-300"
  >
    <div class="w-full lg:text-start text-center">
      <router-link to="/admin">
        <h1
          class="uppercase text-white lg:text-4xl text-3xl font-extrabold hidden lg:block"
        >
          Student
        </h1>
        <h1
          class="uppercase text-white lg:text-4xl text-3xl font-extrabold block lg:hidden"
        >
          S
        </h1>
      </router-link>
    </div>
    <div class="flex flex-col gap-6 mt-6">
      <SidebarItem v-for="item of sidedata" :key="item.id" :href="item.href" :Icon="item.Icon" :title="item.title"/>
    </div>
  </sidebar>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
//@ts-ignore
import {
  UserIcon,
  HomeIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  NewspaperIcon,
  TemplateIcon
} from "@heroicons/vue/outline";
import { RouterLink } from "vue-router";
import SidebarItem from "./SidebarItem.vue";

export default defineComponent({
  components: {
    UserIcon,
    HomeIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    NewspaperIcon,
    TemplateIcon,
    SidebarItem,
    RouterLink,
  },
  setup() {
    const isOpen = ref<boolean>(false);
    const handChevronClick = () => {
      isOpen.value = !isOpen.value;
    };

    const sidedata = ref([
      {
        id: 1,
        title: "DashBoard",
        href: "/admin",
        Icon: HomeIcon,
        isChildren: false,
        childrens: [],
      },
      {
        id: 2,
        title: "Student",
        Icon: UserIcon,
        href: "/admin",
        isChildren: false,
        childrens: [
          {
            id: 21,
            title: "All Students",

            href: "#",
          },
          {
            id: 22,
            title: "Record a New One",

            href: "#",
          },
        ],
      },
      {
        id: 3,
        title: "Courses",
        Icon: NewspaperIcon,
        href: "/admin",
        isChildren: false,
        childrens: [],
      },
      {
        id: 4,
        title: "Programmers",
        Icon: TemplateIcon,
        href: "/admin",
        isChildren: false,
        childrens: [],
      },
    ]);

    return {
      isOpen,
      handChevronClick,
      sidedata,
    };
  },
});
</script>