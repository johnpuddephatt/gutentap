<template>
  <node-view-wrapper class="vue-component">
    <span class="label" contenteditable="false">Vue Component</span>

    <div contenteditable="false" class="content">
      <button @click.prevent="increase">
        This button has been clicked {{ node.attrs.count }} times.
      </button>
    </div>
    <node-view-content class="content" />
  </node-view-wrapper>
</template>

<script>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from "@tiptap/vue-3";

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent,
  },

  props: nodeViewProps,

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
.vue-component {
  background: #faf594;
  border: 3px solid #0d0d0d;
  border-radius: 0.5rem;
  margin: 1rem 0;
  position: relative;
}

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

.vue-component button {
  display: inline-block;
  border: 3px solid black;
  border-radius: 5px;
  padding: 0.25rem 1rem;
}
</style>
