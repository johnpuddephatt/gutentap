<template>
  <node-view-wrapper class="relative border-2 border-slate-400 rounded p-6">
    <div class="content">
      <file-pond
        name="test"
        ref="pond"
        class-name="my-pond"
        label-idle="Drop files here..."
        allow-multiple="true"
        allow-reorder="true"
        accepted-file-types="image/jpeg, image/png"
        v-model="myFiles"
        @init="handleFilePondInit"
      />
      <node-view-content class="bg-white p-2 border-2 rounded h-14" />
    </div>
  </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from "@tiptap/vue-3";

import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Create FilePond component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent,
    FilePond,
  },

  data() {
    return { myFiles: ["index.html"] };
  },

  props: nodeViewProps,

  mounted() {},

  methods: {
    handleFilePondInit: function () {
      // example of instance method call on pond reference
      // this.$refs.pond.getFiles();
    },
  },
};
</script>

<style>
.filepond--item {
  width: calc(50% - 0.5em);
}
</style>
