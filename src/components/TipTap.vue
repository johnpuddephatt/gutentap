<template>
  <div>
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
        getReferenceClientRect: getTippyCoords,
      }"
    >
      <div class="flex flex-row">
        <button
          class="p-2 h-12 hover:bg-slate-50 rounded"
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
            class="hover:bg-slate-50 rounded p-1 group-focus-within:bg-slate-600 group-focus-within:text-white"
            aria-label="Convert"
          >
            <span
              v-html="
                blockTools.find((tool) => tool.name == getTopLevelNodeType())
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

      <div class="flex flex-row p-2 gap-1" v-if="!dragging">
        <div
          v-for="(alignmentToolGroup, key) in alignmentTools"
          :key="key"
          class="group relative"
        >
          <!--
            Note we’re for-ing here even though only one button is displayed... we check if the current block has a blockWidth to decide whether to show the dropdown trigger -->
          <button
            class="hover:bg-slate-50 p-1 rounded group-focus-within:bg-slate-600 group-focus-within:text-white"
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
          !dragging &&
          blockTools.find((tool) => tool.name == getTopLevelNodeType())?.tools
            ?.length
        "
        class="gap-1 flex flex-row items-center p-2"
      >
        <button
          class="p-1 hover:bg-slate-50"
          :title="tool.title"
          :disabled="tool.isDisabledTest?.call(0, editor)"
          :class="{
            [tool.isActiveClass ??
            'bg-slate-600 hover:bg-slate-700 text-white rounded']: tool.isActiveTest?.call(
              0,
              editor
            ),
          }"
          @click="tool.command(editor)"
          :key="tool.name"
          v-for="tool in blockTools.find(
            (tool) => tool.name == getTopLevelNodeType()
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
          class="hover:bg-slate-50 p-1 block"
          @click="tool.command(editor)"
          :class="{
            [tool.isActiveClass ??
            'bg-slate-600 hover:bg-slate-700 text-white rounded']:
              tool.isActiveTest(editor),
          }"
        >
          <span v-html="tool.icon"></span>
        </button>
      </div>
      <div
        v-if="
          editor && editor.can().deleteNode(getTopLevelNodeType()) && !dragging
        "
        class="p-2 gap-1 flex flex-row items-center"
      >
        <button
          class="hover:bg-slate-50 p-1 flex-row gap-2 flex capitalize items-center"
          aria-label="Delete block"
          title="Delete block"
          @click="editor.commands.deleteNode(getTopLevelNodeType())"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          {{ getTopLevelNodeType() }}
        </button>
      </div>
    </bubble-menu>

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
import Blockquote from "@tiptap/extension-blockquote";
import {
  DragNode,
  MoveNode,
  GetTopLevelBlockCoords,
  GetTopLevelNode,
  GetNodeTree,
} from "../utils/pm-utils.js";
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
        StarterKit.configure({
          blockquote: false,
        }),
        Blockquote.extend({
          content: "paragraph*",
        }),
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
          types: ["paragraph", "horizontalRule", "blockquote"],
        }),
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        Table.configure({
          resizable: true,
        }),
        TableRow.extend({
          allowGapCursor: false,
        }),
        TableHeader.extend({
          content: "(inline|hardBreak?)*",
        }),
        TableCell.extend({
          content: "(inline|hardBreak?)*",
          isolating: false,
        }),
      ],
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getJSON().content);
        this.nodeTree = GetNodeTree(this.editor.view);
      },
    });
    this.editor.content = this.modelValue;
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  methods: {
    getTippyCoords() {
      return GetTopLevelBlockCoords(this.editor.view);
    },

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

    getTopLevelNodeType() {
      return GetTopLevelNode(this.editor.view)?.type.name;
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

.ProseMirror table {
  @apply table-fixed;
}

.ProseMirror table p {
  @apply my-0;
}

.ProseMirror table p + p {
  @apply mt-2;
}

.ProseMirror td,
.ProseMirror th {
  @apply p-2 border border-2;
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

hr {
  height: auto;
  border-top-width: 4px !important;
  border-radius: 10px !important;
}

hr:before {
  content: "♪♪";
}

hr:after {
  content: " This is an <hr> element";
}

.ProseMirror-selectednode {
  outline: 2px solid lightblue;
}
</style>
