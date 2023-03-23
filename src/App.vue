<template>
  <div class="h-screen grid grid-cols-3">
    <tiptap
      class="col-span-2 my-32 prose xl:prose-xl text-slate-600 max-w-none"
      v-model="content"
    />
    <pre class="bg-slate-600 text-white p-4 overflow-y-auto text-sm">{{
      content
    }}</pre>
  </div>
</template>

<script>
import Tiptap from "./components/TipTap.vue";

export default {
  name: "App",
  components: {
    Tiptap,
  },
  data() {
    return {
      content: [
        {
          type: "heading",
          attrs: {
            textAlign: "left",
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "Welcome to Gutentap!",
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            blockWidth: "normal",
            textAlign: "left",
          },
          content: [
            {
              type: "text",
              marks: [
                {
                  type: "bold",
                },
              ],
              text: "Gutentap",
            },
            {
              type: "text",
              text: " is a UI for ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: "https://tiptap.dev/",
                    target: "_blank",
                    class: null,
                  },
                },
              ],
              text: "Tiptap",
            },
            {
              type: "text",
              text: ", inspired by ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "italic",
                },
              ],
              text: "Gutenberg",
            },
            {
              type: "text",
              text: ". It uses a ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "strike",
                },
              ],
              text: "static",
            },
            {
              type: "text",
              text: " floating toolbar to provide contextual editing options as well as ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "code",
                },
              ],
              text: "slash commands",
            },
            {
              type: "text",
              text: " for inserting ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "highlight",
                },
              ],
              text: "new",
            },
            {
              type: "text",
              text: " blocks.",
            },
          ],
        },
        {
          type: "table",
          content: [
            {
              type: "tableRow",
              content: [
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: [53],
                  },
                },
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
              ],
            },
            {
              type: "tableRow",
              content: [
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: [53],
                  },
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
              ],
            },
            {
              type: "tableRow",
              content: [
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: [53],
                  },
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          attrs: {
            blockWidth: "normal",
            textAlign: "left",
          },
        },
      ],
    };
  },
};
</script>

<style>
@import "style.css";
</style>
