<template>
  <node-view-wrapper class="relative border-2 border-slate-400 rounded p-6">
    <span class="label">Vue Component</span>

    <div class="content">
      <node-view-content class="bg-white p-2 border-2 rounded h-14" />

      <button
        class="border-2 border-slate-400 rounded px-2 mt-2"
        contenteditable="false"
        @click="increase"
      >
        {{ node.attrs.count }} times
      </button>
    </div>
  </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from "@tiptap/vue-3";

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent,
  },

  props: nodeViewProps,

  //   props: {
  //     // the editor instance
  //     editor: {
  //       type: Object,
  //     },

  //     // the current node
  //     node: {
  //       type: Object,
  //     },

  //     // an array of decorations
  //     decorations: {
  //       type: Array,
  //     },

  //     // `true` when there is a `NodeSelection` at the current node view
  //     selected: {
  //       type: Boolean,
  //     },

  //     // access to the node extension, for example to get options
  //     extension: {
  //       type: Object,
  //     },

  //     // get the document position of the current node
  //     getPos: {
  //       type: Function,
  //     },

  //     // update attributes of the current node
  //     updateAttributes: {
  //       type: Function,
  //     },

  //     // delete the current node
  //     deleteNode: {
  //       type: Function,
  //     },
  //   },

  mounted() {
    console.log(this.node.value);
  },

  methods: {
    increase() {
      this.updateAttributes({
        count: this.node.attrs.count + 1,
      });
    },
  },
};
</script>

<style>
.label {
  margin-left: 1rem;
  background-color: #0d0d0d;
  font-size: 0.6rem;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  position: absolute;
  top: 0;
  padding: 0.25rem 0.75rem;
  border-radius: 0 0 0.5rem 0.5rem;
}

.content {
  margin-top: 1.5rem;
  padding: 1rem;
}
</style>
