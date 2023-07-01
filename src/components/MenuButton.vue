<template>
  <button
    class="w-full flex p-1 flex-row items-center text-slate-600 rounded gap-2 hover:bg-slate-100"
    :aria-label="label"
    :data-tooltip="label"
    :title="label"
    :class="active ? activeClass : ''"
    v-html="content"
  ></button>
</template>

<script>
export default {
  props: {
    clickHandler: {
      type: String,
      required: false,
    },

    content: {
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
