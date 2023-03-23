<template>
  <InlineSvg v-if="name" :src="require(`@/icons/${name}.svg`)" />
  <span v-else v-html="icon"></span>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: { InlineSvg },
  props: {
    name: {
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
