<template>
  <div class="group text-sm relative">
    <slot></slot>

    <div
      v-if="hasDropdown"
      class="z-10 bg-white shadow py-2 group-focus-within:block hidden overflow-hidden whitespace-nowrap absolute top-full mt-4 rounded border border-slate-400"
      :class="align == 'left' ? 'left-0' : 'right-0'"
    >
      <slot name="dropdown"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasDropdown() {
      return !!this.$slots.dropdown;
    },
  },

  props: {
    align: {
      type: String,
      default: "left",
    },
    iconName: {
      type: String,
      required: false,
    },
    iconSvg: {
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
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white rounded",
    },
    active: {
      type: Boolean,
    },
  },
};
</script>
