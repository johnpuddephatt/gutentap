import { mergeAttributes, Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";

import FilepondGallery from "./FilepondGallery.vue";

export default Node.create({
  name: "filepondGallery",

  group: "block",

  atom: false,

  content: "inline*",

  addAttributes() {
    return {
      files: {
        default: [],
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "filepond-gallery",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["filepond-gallery", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return VueNodeViewRenderer(FilepondGallery);
  },
});
