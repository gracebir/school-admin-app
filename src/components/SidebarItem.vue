<template>
    <router-link
        class="w-full text-gray-300"
        :to="href"
      >
        <div
          class="flex items-center lg:justify-between justify-center"
          @click="handChevronClick"
        >
          <div class="flex gap-2">
            <component :is="Icon" class="w-6 h-6 text-gray-300" />
            <span class="text-lg font-semibold hidden lg:block">{{
              title
            }}</span>
          </div>
          <div class="hidden lg:block">
            <ChevronRightIcon class="w-4 h-4 text-gray-300" v-if="!isOpen" />
            <ChevronDownIcon class="w-4 h-4 text-gray-300" v-if="isOpen" />
          </div>
        </div>
      </router-link>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import {
ChevronRightIcon,
ChevronDownIcon,
} from "@heroicons/vue/outline";

export default defineComponent({
  components: {
    RouterLink,
    ChevronRightIcon,
    ChevronDownIcon,
  },
  props: {
    title: String,
    href: {type: String, required: true},
    Icon: Function,
  },
  setup() {
    const isOpen = ref<boolean>(false);
    const handChevronClick = () => {
      isOpen.value = !isOpen.value;
    };
    return {
        isOpen,
        handChevronClick
    }
  },
});
</script>
