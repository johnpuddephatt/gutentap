<template>
  <div class="h-screen grid grid-cols-3">
    <tiptap
      class="col-span-2 my-32 prose xl:prose-xl text-slate-600 max-w-none"
      v-model="content"
    />
    <pre class="bg-slate-600 text-white p-4 overflow-y-auto text-sm">{{
      content
    }}</pre>
  </div>
</template>

<script>
import Tiptap from "./components/TipTap.vue";

export default {
  name: "App",
  components: {
    Tiptap,
  },
  data() {
    return {
      content: null,
    };
  },
};
</script>

<style>
@import "style.css";
</style>
