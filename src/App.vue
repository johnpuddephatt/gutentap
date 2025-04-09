<template>
  <div class="gutentap">
    <div class="h-screen lg:grid lg:grid-cols-3">
      <div class="relative col-span-2 h-screen overflow-y-auto">
        <div
          class="flex flex-row gap-4 items-center fixed lg:absolute top-4 z-20 right-4"
        >
          <button
            @click.prevent="editable = !editable"
            v-text="editable ? 'Editable' : 'Read only'"
            class="rounded-full border-2 py-2 px-4"
          />

          <button
            aria-label="show JSON"
            class="lg:hidden w-12 h-12 bg-slate-800 text-white rounded-full border-2"
            @click.prevent="showContent = !showContent"
          >
            { }
          </button>

          <a
            aria-label="View on Github"
            href="https://github.com/johnpuddephatt/gutentap"
            class="w-12 h-12 p-2.5 bg-white text-white rounded-full border-2"
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
        </div>

        <gutentap
          editorClass="my-32 prose xl:prose-xl text-slate-600 max-w-none"
          v-model="content"
          :editable="editable"
          mode="json"
          :blockTools="blockTools"
          :extensions="extensions"
          :blockWidthTypes="[
            'vueComponent',
            'horizontalRule',
            'blockquote',
            'youtube',
          ]"
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
  </div>
</template>

<script>
import Gutentap from "./components/GutenTap.vue";
import sampleContent from "./content.json";
import VueComponent from "./extensions/vue-component";

import UploadImage from "tiptap-extension-upload-image";
import "tiptap-extension-upload-image/dist/upload-image.min.css";

export default {
  name: "App",
  components: {
    Gutentap,
  },
  data() {
    return {
      showContent: false,
      extensions: [
        VueComponent,
        UploadImage.configure({
          uploadFn: () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve("https://placebear.com/1200/800");
              }, 1500);
            });
          },
        }),
      ],
      editable: true,
      // alignmentTools: [
      //   [
      //     {
      //       title: "Sidebar",
      //       icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><path d="M14.7 9v6h5.9V9h-5.9zm2.6-2.9H5.1v1.5h12.3V6.1zM5.1 17.9h11.7v-1.5H5.1v1.5zm8-6.6h-8v1.5h8v-1.5z"/></svg>',
      //       command: (editor) => {
      //         editor.chain().focus().setBlockWidth("full").run();
      //       },
      //       isActiveTest: (editor, topLevelNodeType) =>
      //         editor.isActive(topLevelNodeType, {
      //           blockWidth: "full",
      //         }),
      //     },
      //   ],
      // ],

      blockTools: [
        {
          name: "paragraph",
          tools: [
            {
              title: "Default",
              name: "default",
              icon: '<svg class="w-4 h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48"  viewBox="0 0 48 48"><path fill="currentColor" d="M33.52 13.16a13.63 13.63 0 0 0-.19 2.24v2.45l-.15.14h-.92l-.16-.13a16 16 0 0 0-.17-2.2A1 1 0 0 0 31 15h-4.76v12.39a32.3 32.3 0 0 0 .19 4.54.65.65 0 0 0 .5.55c.15 0 .72.08 1.71.14l.15.15v1l-.15.15c-1-.06-2.47-.09-4.51-.09s-3.59 0-4.51.09l-.13-.14v-1l.14-.15c1-.06 1.57-.11 1.72-.14a.65.65 0 0 0 .5-.55 34 34 0 0 0 .15-4.62V19c0-2.41 0-3.77-.05-4.07h-2.07a14.74 14.74 0 0 0-3.06.16.66.66 0 0 0-.33.22 3.28 3.28 0 0 0-.22.94c-.06.52-.11 1.05-.13 1.6L16 18h-.93l-.16-.14v-2.51a18.58 18.58 0 0 0-.17-2.18l.13-.15c.58.1 2.67.15 6.3.15h5.93q5 0 6.3-.15Z"/></svg>',
              command: (editor) => {
                editor.chain().focus().setVariant("default").run();
              },
              isActiveTest: (editor) => editor.isActive({ variant: "default" }),
            },
            {
              title: "Large",
              name: "large",
              icon: '<svg class="w-4 h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48"  viewBox="0 0 48 48"><path fill="currentColor" d="M41.37 6.12a27.85 27.85 0 0 0-.35 4L41 14.56l-.26.26h-1.69l-.29-.23a31.65 31.65 0 0 0-.29-4 1.83 1.83 0 0 0-1.69-1.24c-.35-.05-2-.08-5-.08h-3.49c0 .62-.05 3.06-.05 7.33v15a59.2 59.2 0 0 0 .34 8.18 1.14 1.14 0 0 0 .89 1 30 30 0 0 0 3.09.27l.26.26v1.77l-.26.26q-2.61-.16-8.12-.16t-8.12.16l-.24-.24v-1.8l.26-.26a29.7 29.7 0 0 0 3.09-.27 1.13 1.13 0 0 0 .89-1 58.62 58.62 0 0 0 .35-8.18v-15q0-6.51-.08-7.33h-3.77a27.11 27.11 0 0 0-5.51.29 1.12 1.12 0 0 0-.58.4 5.32 5.32 0 0 0-.4 1.69c-.12.93-.2 1.89-.24 2.87l-.26.26H8.17l-.29-.26L7.82 10a30.21 30.21 0 0 0-.31-3.93l.24-.26q1.54.25 11.33.26h10.68q9 0 11.34-.26Z"/></svg>',
              command: (editor) => {
                editor.chain().focus().setVariant("large").run();
              },
              isActiveTest: (editor) => editor.isActive({ variant: "large" }),
            },
          ],
        },
        {
          name: "vueComponent",
          title: "Sample Vue component",
          icon: '<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M24.3,4h-4.8L16,9.6L13,4H2l14,24L30,4L24.3,4z M5.5,6h3.4L16,18.4L23.1,6h3.4L16,24L5.5,6z"/></svg>',
          insertCommand: ({ editor, range }) => {
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .insertContent(
                '<div><vue-component count="0"></vue-component></div>'
              )
              .run();
            console.log(editor, range);
          },
          hasInlineTools: false,
          isActiveTest: (editor) => editor.isActive("vueComponent"),
        },
        {
          name: "image",
          title: "Image",
          icon: '<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M24.3,4h-4.8L16,9.6L13,4H2l14,24L30,4L24.3,4z M5.5,6h3.4L16,18.4L23.1,6h3.4L16,24L5.5,6z"/></svg>',
          insertCommand: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).addImage().run();
            console.log(editor, range);
          },
          hasInlineTools: false,
          isActiveTest: (editor) => editor.isActive("uploadImage"),
          tools: [
            {
              title: "Default",
              name: "default",
              icon: '<svg class="w-4 h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48"  viewBox="0 0 48 48"><path fill="currentColor" d="M33.52 13.16a13.63 13.63 0 0 0-.19 2.24v2.45l-.15.14h-.92l-.16-.13a16 16 0 0 0-.17-2.2A1 1 0 0 0 31 15h-4.76v12.39a32.3 32.3 0 0 0 .19 4.54.65.65 0 0 0 .5.55c.15 0 .72.08 1.71.14l.15.15v1l-.15.15c-1-.06-2.47-.09-4.51-.09s-3.59 0-4.51.09l-.13-.14v-1l.14-.15c1-.06 1.57-.11 1.72-.14a.65.65 0 0 0 .5-.55 34 34 0 0 0 .15-4.62V19c0-2.41 0-3.77-.05-4.07h-2.07a14.74 14.74 0 0 0-3.06.16.66.66 0 0 0-.33.22 3.28 3.28 0 0 0-.22.94c-.06.52-.11 1.05-.13 1.6L16 18h-.93l-.16-.14v-2.51a18.58 18.58 0 0 0-.17-2.18l.13-.15c.58.1 2.67.15 6.3.15h5.93q5 0 6.3-.15Z"/></svg>',
              command: (editor) => {
                editor.chain().focus().setVariant("default").run();
              },
              isActiveTest: (editor) => editor.isActive({ variant: "default" }),
            },
            {
              title: "Rounded",
              name: "rounded",
              icon: '<svg class="w-4 h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48"  viewBox="0 0 48 48"><path fill="currentColor" d="M41.37 6.12a27.85 27.85 0 0 0-.35 4L41 14.56l-.26.26h-1.69l-.29-.23a31.65 31.65 0 0 0-.29-4 1.83 1.83 0 0 0-1.69-1.24c-.35-.05-2-.08-5-.08h-3.49c0 .62-.05 3.06-.05 7.33v15a59.2 59.2 0 0 0 .34 8.18 1.14 1.14 0 0 0 .89 1 30 30 0 0 0 3.09.27l.26.26v1.77l-.26.26q-2.61-.16-8.12-.16t-8.12.16l-.24-.24v-1.8l.26-.26a29.7 29.7 0 0 0 3.09-.27 1.13 1.13 0 0 0 .89-1 58.62 58.62 0 0 0 .35-8.18v-15q0-6.51-.08-7.33h-3.77a27.11 27.11 0 0 0-5.51.29 1.12 1.12 0 0 0-.58.4 5.32 5.32 0 0 0-.4 1.69c-.12.93-.2 1.89-.24 2.87l-.26.26H8.17l-.29-.26L7.82 10a30.21 30.21 0 0 0-.31-3.93l.24-.26q1.54.25 11.33.26h10.68q9 0 11.34-.26Z"/></svg>',
              command: (editor) => {
                editor.chain().focus().setVariant("rounded").run();
              },
              isActiveTest: (editor) => editor.isActive({ variant: "rounded" }),
            },
          ],
        },
      ],
      content: sampleContent,
    };
  },
};
</script>

<style>
@tailwind base;
</style>
