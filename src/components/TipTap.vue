<template>
  <div>
    <!--
  <div v-if="editor">
    <button @click="editor.chain().focus().setBlockWidth('normal').run()" :class="{ 'bg-black text-white': editor.isActive({ blockWidth: 'normal' }) }">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="components-menu-items__item-icon" aria-hidden="true" focusable="false"><path d="M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"></path></svg>
      Normal width
    </button>
    <button @click="editor.chain().focus().setBlockWidth('wide').run()" :class="{ 'bg-black text-white': editor.isActive({ blockWidth: 'wide' }) }">
     <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="components-menu-items__item-icon" aria-hidden="true" focusable="false"><path d="M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"></path></svg>
     Wide width
    </button>
    <button @click="editor.chain().focus().setBlockWidth('full').run()" :class="{ 'bg-black text-white': editor.isActive({ blockWidth: 'full' }) }">
     <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="components-menu-items__item-icon" aria-hidden="true" focusable="false"><path d="M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"></path></svg>
     Full width
    </button>
  </div>
-->

    <bubble-menu
      @dragend="endDragging($event)"
      :draggable="dragging"
      :should-show="editorIsActive"
      class="text-sm bg-white flex divide-x divide-slate-400 flex-row border-slate-400 rounded border"
      :editor="editor"
      v-if="editor"
      :tippy-options="{
        maxWidth: 'none',
        placement: 'top-start',
        duration: 100,
        getReferenceClientRect: getBubbleMenuPosition,
      }"
    >
      <div class="flex flex-row">
        <button
          class="p-2 h-12"
          :class="{ 'cursor-grab': !dragging, 'cursor-grabbing': dragging }"
          aria-label="Drag"
          @mousedown="startDragging($event)"
          @mouseup="
            draggedNodePosition = false;
            dragging = false;
          "
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z"
            ></path>
          </svg>
        </button>

        <div class="p-2 -ml-2 group relative" v-if="!dragging">
          <button
            class="rounded p-1 group-focus-within:bg-slate-600 group-focus-within:text-white"
            aria-label="Convert"
          >
            <span
              v-html="
                blockTools.find((tool) => tool.name == getTopLevelBlockType())
                  ?.icon
              "
            ></span>
          </button>
          <div
            class="bg-white shadow group-focus-within:block hidden whitespace-nowrap absolute -mt-px top-[calc(100%+0.5rem)] rounded left-0 border border-slate-400"
          >
            <div class="p-3 uppercase text-gray-600 text-xs pb-1 tracking-wide">
              Transform to
            </div>
            <button
              class="w-full flex p-2 pr-12 flex-row items-center gap-2 hover:bg-slate-50"
              :key="tool.title"
              :aria-label="`${tool.title}`"
              v-for="tool in blockTools.filter((tool) => tool.convertCommand)"
              @click="tool.convertCommand(editor)"
              :class="{ hidden: tool.isActiveTest(editor) }"
            >
              <span v-html="tool.icon"></span> {{ tool.title }}
            </button>
          </div>
        </div>

        <div class="pr-2 flex flex-col" v-if="!dragging">
          <button
            @click="moveNode('UP')"
            :disabled="!canMoveNodeUp()"
            class="mt-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
              ></path>
            </svg>
          </button>
          <button
            @click="moveNode('DOWN')"
            :disabled="!canMoveNodeDown()"
            class="-mt-3.5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex flex-row" v-if="!dragging">
        <div
          v-for="(alignmentToolGroup, key) in alignmentTools"
          :key="key"
          class="p-2 group relative"
        >
          <button
            class="p-1 rounded group-focus-within:bg-slate-600 group-focus-within:text-white"
            :key="tool.title"
            aria-label="Change block width"
            v-for="tool in alignmentToolGroup.filter((tool) =>
              tool.isActiveTest(editor)
            )"
          >
            <span v-html="tool.icon"></span>
          </button>
          <div
            class="bg-white shadow group-focus-within:block hidden absolute top-[calc(100%+0.5rem)] rounded overflow-hidden -left-px border border-slate-400"
          >
            <button
              class="w-full flex p-2 pr-6 flex-row items-center gap-2 hover:bg-slate-50 whitespace-nowrap"
              :key="tool.title"
              :aria-label="`Toggle ${tool.title}`"
              v-for="tool in alignmentToolGroup"
              @click="tool.command(editor)"
              :class="{ '!bg-slate-100': tool.isActiveTest(editor) }"
            >
              <span v-html="tool.icon"></span> {{ tool.title }}
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="
          blockTools.find((tool) => tool.name == getTopLevelBlockType())?.tools
            ?.length
        "
        class="p-2 gap-1 flex flex-row"
      >
        <button
          class="p-1"
          :title="tool.title"
          :disabled="tool.isDisabledTest?.call(0, editor)"
          :class="{
            [tool.isActiveClass ?? 'bg-slate-600 text-white rounded']:
              tool.isActiveTest?.call(0, editor),
          }"
          @click="tool.command(editor)"
          :key="tool.name"
          v-for="tool in blockTools.find(
            (tool) => tool.name == getTopLevelBlockType()
          )?.tools"
        >
          <span v-html="tool.icon"></span>
        </button>
      </div>

      <div class="p-2 gap-1 flex flex-row items-center" v-if="!dragging">
        <button
          :key="tool.title"
          :aria-label="`Toggle ${tool.title}`"
          v-for="tool in inlineTools"
          class="p-1 block"
          @click="tool.command(editor)"
          :class="{
            [tool.isActiveClass ?? 'bg-slate-600 text-white rounded']:
              tool.isActiveTest(editor),
          }"
        >
          <span v-html="tool.icon"></span>
        </button>
      </div>
    </bubble-menu>

    <!-- 
    <button @click="editor.chain().focus().setHorizontalRule().run()">
      horizontal rule
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
      hard break
    </button>
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
      undo
    </button>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
      redo
    </button> -->

    <editor-content ref="editor" :editor="editor" />

    <div
      v-if="editor"
      class="text-base px-8 fixed bottom-0 bg-gray-100 py-1 border-t left-0 right-0 flex flex-row gap-2"
    >
      <div v-for="(node, key) in nodeTree" :key="node">
        {{ node }} <span v-if="key < nodeTree.length - 1">&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { BubbleMenu, Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";

import { DragNode, MoveNode } from "../utils/pm-utils.js";
import BlockWidth from "../extensions/block-width";
import VueComponent from "../extensions/vue-component";

import Commands from "./commands";
import suggestion from "./suggestion";

import inlineTools from "../tools/inline-tools";
import blockTools from "../tools/block-tools";
import alignmentTools from "../tools/alignment-tools";

export default {
  props: ["modelValue"],

  components: {
    BubbleMenu,
    EditorContent,
  },

  data() {
    return {
      dragging: false,
      draggedNodePosition: null,
      editor: null,
      nodeTree: [],
      blockTools: blockTools(),
      inlineTools: inlineTools(),
      alignmentTools: alignmentTools(),
    };
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        VueComponent,
        Commands.configure({
          suggestion,
        }),
        Link.configure({
          openOnClick: false,
        }),
        Placeholder.configure({
          placeholder: "Write something…",
        }),
        BlockWidth.configure({
          types: ["heading", "paragraph"],
        }),
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        Table.configure({
          resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
      ],
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getJSON().content);
        this.updateNodeTree();
      },
    });
    this.editor.content = this.modelValue;
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  methods: {
    startDragging(event) {
      let coords = { left: event.clientX, top: event.clientY + 48 };
      this.draggedNodePosition = this.editor.view.posAtCoords(coords).pos;
      this.dragging = true;
    },

    endDragging(event) {
      let targetNodeFromCoords = this.editor.view.posAtCoords({
        left: event.clientX,
        top: event.clientY + 20,
      });

      if (targetNodeFromCoords) {
        DragNode({
          view: this.editor.view,
          state: this.editor.state,
          draggedNodePosition: this.draggedNodePosition,
          targetNodePosition: targetNodeFromCoords.pos,
        });
      }

      this.dragging = false;
      this.draggedNode = null;
    },

    editorIsActive() {
      return this.editor.isActive();
    },

    moveNode(dir = "UP") {
      MoveNode({
        view: this.editor.view,
        dir: dir,
        currentResolved: this.editor.view.state.selection.$from,
      });
    },

    getTopLevelBlockType() {
      const selectionStart = this.editor.view.state.selection.$from;
      return selectionStart.node(1)?.type.name;
    },

    updateNodeTree() {
      let nodes = [];
      const selectionStart = this.editor.view.state.selection.$from;

      let depth = selectionStart.depth;

      while (depth > 0) {
        nodes.push(selectionStart.node(depth).type.name);
        depth--;
      }

      this.nodeTree = nodes;
    },

    getBubbleMenuPosition() {
      const selectionStart = this.editor.view.state.selection.$from;
      let parentNode = this.editor.view.domAtPos(
        selectionStart.posAtIndex(0, 1)
      ).node;
      // Sometimes we get a node that isn't the top-level parent; e.g. codeBlock gives us the <code> not the wrapping <pre>

      while (
        parentNode != this.editor.view.dom &&
        parentNode.parentNode != this.editor.view.dom
      ) {
        parentNode = parentNode.parentNode;
      }
      return parentNode.getBoundingClientRect();
    },

    canMoveNodeDown() {
      const selectionStart = this.editor.view.state.selection.$from;
      return selectionStart.index(0) < selectionStart.node(0).childCount - 1;
    },

    canMoveNodeUp() {
      const selectionStart = this.editor.view.state.selection.$from;
      return selectionStart.index(0) > 0;
    },
  },
};
</script>

<style>
.ProseMirror:focus-visible {
  outline: none;
}

.ProseMirror > *:first-child {
  margin-top: 0;
}

.ProseMirror > * {
  @apply max-w-3xl mx-auto;
}

.ProseMirror-gapcursor {
  @apply !mx-auto block;
}

.ProseMirror-gapcursor:after {
  @apply block;
}

.ProseMirror td,
.ProseMirror th {
  @apply border border-2;
}

.ProseMirror th {
  @apply bg-slate-50;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}
</style>
