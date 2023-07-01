<template>
  <InlineSvg src="../icons/drag.svg" />
  <InlineSvg v-if="path" :src="path" />

  <span v-else v-html="icon"></span>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: { InlineSvg },
  props: {
    path: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
};
</script>
