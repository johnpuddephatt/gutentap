<template>
  <button
    class="w-full flex py-1 pl-2 pr-6 flex-row items-center rounded gap-2 hover:bg-slate-100"
    :aria-label="label"
    :title="label"
    :class="active ? activeClass : ''"
  >
    <svg-icon :icon="iconSvg" :name="iconName" />
    <slot></slot>
  </button>
</template>

<script>
import SvgIcon from "./SvgIcon";
export default {
  components: {
    SvgIcon,
  },

  props: {
    clickHandler: {
      type: String,
      required: false,
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
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white",
    },
    active: {
      type: Boolean,
    },
  },
};
</script>
