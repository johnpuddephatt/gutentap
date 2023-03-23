<template>
  <div
    v-if="editor"
    class="text-base px-8 fixed bottom-0 bg-gray-100 py-1 border-t left-0 right-0 flex flex-row gap-2"
  >
    <div v-for="(node, key) in nodeTree" :key="node">
      {{ node }} <span v-if="key < nodeTree.length - 1">&gt;</span>
    </div>
  </div>
</template>

<script>
import { GetNodeTree } from "../utils/pm-utils.js";

export default {
  props: {
    editor: {
      required: true,
    },
    value: {
      required: true,
    },
  },

  data() {
    return {
      nodeTree: [],
    };
  },

  watch: {
    value: {
      handler() {
        this.nodeTree = GetNodeTree(this.editor.view);
      },
      deep: true,
    },
  },
};
</script>
