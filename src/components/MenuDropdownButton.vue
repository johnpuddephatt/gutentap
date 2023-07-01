<template>
  <button
    class="w-full flex py-1 pl-2 pr-6 flex-row items-center text-slate-600 gap-2 hover:bg-slate-100"
    :aria-label="label"
    :title="label"
    :class="active ? activeClass : ''"
    v-html="content"
  ></button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: false,
    },
    clickHandler: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    activeClass: {
      type: String,
      required: false,
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white",
    },
    active: {
      type: Boolean,
    },
  },
};
</script>
