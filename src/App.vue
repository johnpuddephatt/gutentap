<template>
  <div class="h-screen lg:grid lg:grid-cols-3">
    <div class="relative col-span-2 h-screen overflow-y-auto">
      <button
        aria-label="show JSON"
        class="fixed lg:hidden w-12 h-12 top-4 right-4 bg-slate-800 text-white z-20 rounded-full border-2"
        @click="showContent = !showContent"
      >
        { }
      </button>

      <a
        aria-label="View on Github"
        href="https://github.com/johnpuddephatt/gutentap"
        class="fixed lg:absolute w-12 h-12 p-2.5 top-4 lg:right-4 right-[4.25rem] bg-white text-white z-20 rounded-full border-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>

      <gutentap
        editorClass="my-32 prose xl:prose-xl text-slate-600 max-w-none"
        v-model="content"
        mode="json"
      />
    </div>
    <div
      class="fixed transition top-0 right-0 bottom-0 w-11/12 lg:w-auto py-32 lg:static h-screen bg-slate-600 text-white lg:translate-x-0 px-8 overflow-y-auto"
      :class="{
        'translate-x-0': showContent,
        'translate-x-full': !showContent,
      }"
    >
      <h3 class="font-bold mb-8 text-3xl">Editor output</h3>
      <pre class="block text-sm w-full">{{ content }}</pre>
    </div>
  </div>
</template>

<script>
import Gutentap from "./components/GutenTap.vue";

export default {
  name: "App",
  components: {
    Gutentap,
  },
  data() {
    return {
      showContent: false,
      content: [
        {
          type: "heading",
          attrs: {
            textAlign: "left",
            level: 1,
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
              text: ", inspired by the Wordpress editor, ",
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
              text: " floating toolbar as well as ",
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
          type: "heading",
          attrs: {
            textAlign: "left",
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "The floating toolbar",
            },
          ],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    blockWidth: "normal",
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "disappears when writing to offer an uncluttered experience",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    blockWidth: "normal",
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "reappears when the cursor is moved or the escape key is pressed",
                    },
                  ],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  attrs: {
                    blockWidth: "normal",
                    textAlign: "left",
                  },
                  content: [
                    {
                      type: "text",
                      text: "shows contextual options (e.g. select this list item and you'll see options to change the list type or increase/decrease the indentation)",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            textAlign: "left",
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "Configuration",
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
              text: "Most of the configuration is inside the tools folder. The config is organised in a logical fashion:",
            },
          ],
        },
        {
          type: "codeBlock",
          attrs: {
            language: null,
          },
          content: [
            {
              type: "text",
              text: "/ tools\n  - alignment-tools.js    // text alignment and block width\n  - block-tools.js        // headings, paragraphs etc.\n  - inline-tools.js       // formatting like bold/italic\n  - table-tools.js        // row and column operations",
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            textAlign: "left",
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "Tables",
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
              text: "Tables use the same floating toolbar as other nodes. But they also have their own toolbar for row and column operations, which appears when a cell is selected.",
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
                    colwidth: [71],
                  },
                },
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Column 1",
                    },
                  ],
                },
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Column 2",
                    },
                  ],
                },
                {
                  type: "tableHeader",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Column 3",
                    },
                  ],
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
                    colwidth: [71],
                  },
                  content: [
                    {
                      type: "text",
                      text: "Row A",
                    },
                  ],
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 2,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Merged cells",
                    },
                  ],
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Cell",
                    },
                  ],
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
                    colwidth: [71],
                  },
                  content: [
                    {
                      type: "text",
                      text: "Row B",
                    },
                  ],
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Cell",
                    },
                  ],
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Cell",
                    },
                  ],
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Cell",
                    },
                  ],
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
                    colwidth: [71],
                  },
                  content: [
                    {
                      type: "text",
                      text: "Row C",
                    },
                  ],
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 1,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Cell",
                    },
                  ],
                },
                {
                  type: "tableCell",
                  attrs: {
                    colspan: 2,
                    rowspan: 1,
                    colwidth: null,
                  },
                  content: [
                    {
                      type: "text",
                      text: "Merged cells",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "heading",
          attrs: {
            textAlign: "left",
            level: 2,
          },
          content: [
            {
              type: "text",
              text: "YouTube embeds",
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
              text: "Paste a YouTube URL on a new line to embed it. YouTube embeds support the blockWidth option – the one below is set to ‘wide’.",
            },
          ],
        },
        {
          type: "youtube",
          attrs: {
            blockWidth: "wide",
            src: "https://www.youtube.com/watch?v=VcnROkRhJ34",
            start: 0,
            width: 640,
            height: 480,
          },
          content: [
            {
              type: "text",
              text: "YouTube embeds are wrapped in figure elements and can have a figcaption like this.",
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
