<template>
  <div>
    <bubble-menu
      v-if="editor && tableRowTools"
      :editor="editor"
      pluginKey="tableRowMenu"
      :should-show="tableIsActive"
      :tippy-options="{
        placement: 'left',
        getReferenceClientRect: getTableRowMenuCoords,
      }"
    >
      <menu-item>
        <menu-button
          title="Row tools"
          icon-name="ellipsis-horizontal-circle"
          class="rounded-full text-slate-400 hover:text-slate-800"
        ></menu-button>
        <template #dropdown>
          <menu-dropdown-button
            v-for="tool in tableRowTools"
            :iconSvg="tool.icon"
            :key="tool.title"
            :label="tool.title"
            @click="tool.command(editor)"
          >
            {{ tool.title }}
          </menu-dropdown-button>
        </template>
      </menu-item>
    </bubble-menu>

    <bubble-menu
      v-if="editor && tableColumnTools"
      :editor="editor"
      pluginKey="tableColumnMenu"
      :should-show="tableIsActive"
      :tippy-options="{
        placement: 'bottom',
        getReferenceClientRect: getTableColumnMenuCoords,
      }"
    >
      <menu-item>
        <menu-button
          title="Column tools"
          icon-name="ellipsis-horizontal-circle"
          class="rounded-full text-slate-400 hover:text-slate-800"
        ></menu-button>
        <template #dropdown>
          <menu-dropdown-button
            v-for="tool in tableColumnTools"
            :iconSvg="tool.icon"
            :key="tool.title"
            :label="tool.title"
            @click="tool.command(editor)"
          >
            {{ tool.title }}
          </menu-dropdown-button>
        </template>
      </menu-item>
    </bubble-menu>

    <bubble-menu
      pluginKey="mainMenu"
      @dragend="endDragging($event)"
      :draggable="dragging"
      :should-show="shouldShowMainToolbar"
      v-if="editor"
      class="text-sm bg-white flex divide-x divide-slate-400 flex-row border-slate-400 rounded border"
      :editor="editor"
      :class="{
        'pointer-events-none opacity-0': isTyping,
      }"
      :tippy-options="{
        maxWidth: 'none',
        placement: 'top-start',
        getReferenceClientRect: getMenuCoords,
      }"
    >
      <div class="flex flex-row">
        <button
          class="ml-1 my-2 w-6 h-8 hover:bg-slate-100 rounded"
          :class="{
            'cursor-grab': !dragging,
            'cursor-grabbing mr-1': dragging,
          }"
          aria-label="Drag"
          data-tooltip="Drag"
          @mousedown="startDragging($event)"
          @mouseup="
            draggedNodePosition = false;
            dragging = false;
          "
        >
          <svg-icon class="w-6 h-8" name="drag" />
        </button>

        <div class="py-2 group relative" v-if="!dragging && currentBlockTool">
          <menu-item>
            <menu-button
              :title="currentBlockTool?.name"
              :icon-svg="currentBlockTool?.icon"
              :class="
                currentBlockTool?.canBeConverted &&
                'group-focus-within:bg-slate-600 !cursor-pointer group-focus-within:text-white hover:bg-slate-50'
              "
            ></menu-button>
            <template v-if="currentBlockTool?.canBeConverted" #dropdown>
              <div
                class="p-3 uppercase text-gray-600 text-xs pb-1 tracking-wide"
              >
                Transform to
              </div>
              <menu-dropdown-button
                v-for="tool in blockTools.filter((tool) => tool.convertCommand)"
                :iconSvg="tool.icon"
                :key="tool.title"
                :label="tool.title"
                @click="tool.convertCommand(editor)"
                activeClass="hidden"
                :active="tool.isActiveTest(editor)"
              >
                {{ tool.title }}
              </menu-dropdown-button>
            </template>
          </menu-item>
        </div>

        <div class="pr-2 flex flex-col" v-if="!dragging">
          <button
            @click="moveNode('UP')"
            :disabled="!canMoveNodeUp()"
            data-tooltip="Move up"
            class="mt-2"
          >
            <svg-icon name="chevron-up" />
          </button>
          <button
            @click="moveNode('DOWN')"
            :disabled="!canMoveNodeDown()"
            data-tooltip="Move down"
            class="-mt-3.5"
          >
            <svg-icon name="chevron-down" />
          </button>
        </div>
      </div>

      <div
        class="flex gap-1 items-center hide-empty flex-row p-2"
        v-if="!dragging"
      >
        <menu-item
          v-for="(alignmentToolGroup, key) in activeAlignmentTools"
          :key="key"
        >
          <menu-button
            :title="
              alignmentToolGroup.find((tool) => tool.isActiveTest(editor))
                ?.title
            "
            :icon-svg="
              alignmentToolGroup.find((tool) => tool.isActiveTest(editor))?.icon
            "
          ></menu-button>
          <template #dropdown>
            <menu-dropdown-button
              v-for="tool in alignmentToolGroup"
              :key="tool.title"
              :iconSvg="tool.icon"
              :label="tool.title"
              @click="tool.command(editor)"
              :active="tool.isActiveTest(editor, topLevelNodeType)"
              >{{ tool.title }}</menu-dropdown-button
            >
          </template>
        </menu-item>
      </div>

      <div
        v-if="!dragging && currentBlockTool?.tools?.length"
        class="gap-1 flex flex-row items-center p-2"
      >
        <menu-button
          v-for="tool in currentBlockTool?.tools"
          :key="tool.name"
          :iconSvg="tool.icon"
          :label="tool.title"
          :activeClass="tool.isActiveClass"
          @click="tool.command.call(0, editor)"
          :disabled="tool.isDisabledTest?.call(0, editor)"
          :active="tool.isActiveTest?.call(0, editor)"
        ></menu-button>
      </div>

      <div
        v-if="currentBlockTool?.hasInlineTools && !dragging"
        class="p-2 gap-1 flex relative flex-row items-center"
      >
        <menu-item align="right" :key="tool.title" v-for="tool in inlineTools">
          <menu-button
            :iconSvg="tool.icon"
            :label="tool.title"
            :activeClass="tool.isActiveClass"
            @click="tool.command(editor)"
            :active="tool.isActiveTest(editor)"
          ></menu-button>
          <template #dropdown>
            <menu-dropdown-button
              v-for="tool in tool.tools"
              :key="tool.name"
              :iconSvg="tool.icon"
              @click="tool.command(editor)"
              :active="tool.isActiveTest(editor)"
              >{{ tool.title }}</menu-dropdown-button
            >
          </template>
        </menu-item>
      </div>

      <div
        v-if="editor && editor.can().deleteNode(topLevelNodeType) && !dragging"
        class="p-2 gap-1 flex group flex-row items-center relative"
      >
        <menu-item align="right">
          <menu-button iconName="more" label="More"></menu-button>
          <template #dropdown>
            <menu-dropdown-button
              ref="deleteButton"
              iconName="delete"
              label="Delete block"
              @click="deleteNode(topLevelNodeType)"
              >Delete</menu-dropdown-button
            >
          </template>
        </menu-item>
      </div>
    </bubble-menu>

    <div>
      <editor-content
        @keydown="isTyping = true"
        @keyup.esc="isTyping = false"
        ref="editor"
        :editor="editor"
      />
    </div>
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
import SvgIcon from "./SvgIcon";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import MenuDropdownButton from "./MenuDropdownButton";

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
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from "@tiptap/extension-highlight";
// import Youtube from "@tiptap/extension-youtube/src/index.ts";

import {
  DragNode,
  MoveNode,
  GetTopLevelBlockCoords,
  GetTableColumnCoords,
  GetTableRowCoords,
  GetTopLevelNode,
  GetNodeTree,
} from "../utils/pm-utils.js";

import BlockWidth from "../extensions/block-width";
import VueComponent from "../extensions/vue-component";
import FilepondGallery from "../extensions/filepond-gallery";
import { Figure } from "../extensions/figure";
import { Youtube } from "../extensions/youtube";
import { TrailingNode } from "../extensions/trailing-node";

import Commands from "./commands";
import suggestion from "./suggestion";

import inlineTools from "../tools/inline-tools";
import { tableRowTools, tableColumnTools } from "../tools/table-tools";
import blockTools from "../tools/block-tools";
import alignmentTools from "../tools/alignment-tools";

export default {
  props: ["modelValue"],

  components: {
    BubbleMenu,
    EditorContent,
    SvgIcon,
    MenuButton,
    MenuItem,
    MenuDropdownButton,
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
      tableRowTools: tableRowTools(),
      tableColumnTools: tableColumnTools(),
      topLevelNodeType: null,
      currentBlockTool: null,
      isTyping: false,
      showMainToolbar: false,
    };
  },

  created: function () {
    window.addEventListener("mousemove", () => this.cancelTyping());
  },

  unmounted: function () {
    window.removeEventListener("mousemove", () => this.cancelTyping());
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit.configure({
          blockquote: false,
        }),
        Blockquote.extend({
          content: "paragraph",
        }),
        VueComponent,
        FilepondGallery,
        TrailingNode,
        Subscript,
        Superscript,
        Highlight,
        Figure,
        Commands.configure({
          suggestion,
        }),
        Link.configure({
          openOnClick: false,
        }),
        Placeholder.configure({
          placeholder: "Type / to choose a block",
        }),
        BlockWidth.configure({
          types: ["paragraph", "horizontalRule", "blockquote", "youtube"],
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
          isolating: false,
        }),
        TableCell.extend({
          content: "(inline|hardBreak?)*",
          isolating: false,
        }),
        Youtube.configure({
          inline: false,
          HTMLAttributes: {
            class: "aspect-video h-auto w-full",
          },
        }),
      ],

      onUpdate: () => {
        this.updateToolbar();
        this.$emit("update:modelValue", this.editor.getJSON().content);
      },

      onSelectionUpdate: () => {
        this.updateToolbar();
        this.nodeTree = GetNodeTree(this.editor.view);
      },
    });

    this.editor.commands.setContent({
      type: "doc",
      content: this.modelValue,
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  watch: {
    topLevelNodeType() {
      this.currentBlockTool = this.getCurrentBlockTool();
    },
  },

  computed: {
    activeAlignmentTools() {
      return this.alignmentTools.filter((alignmentToolGroup) =>
        alignmentToolGroup.find((tool) => tool.isActiveTest(this.editor))
      );
    },
  },

  methods: {
    cancelTyping() {
      this.$nextTick(() => (this.isTyping = false));
    },

    shouldShowMainToolbar() {
      return this.editor.isActive();
    },

    updateToolbar() {
      this.topLevelNodeType = this.getTopLevelNodeType();
    },

    getCurrentBlockTool() {
      return this.blockTools.find(
        (tool) =>
          tool.name == this.topLevelNodeType ||
          tool.tools?.find((tool) => tool.name == this.topLevelNodeType)
      );
    },

    deleteNode(node) {
      this.editor.commands.deleteNode(node);
      this.$refs.deleteButton.$el.blur();
    },

    getMenuCoords() {
      return GetTopLevelBlockCoords(this.editor.view);
    },

    getTableRowMenuCoords() {
      return GetTableRowCoords(this.editor.view);
    },

    getTableColumnMenuCoords() {
      return GetTableColumnCoords(this.editor.view);
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

    tableIsActive() {
      return this.getTopLevelNodeType() == "table";
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
hr {
  height: auto;
  border-top-width: 6px !important;
  border-radius: 4px !important;
  margin: 1.5rem 0;
}

[data-tooltip] {
  position: relative;
}

[data-tooltip]:hover::after {
  @apply translate-y-0 opacity-100;
}

[data-tooltip]::after {
  content: attr(data-tooltip);
  @apply whitespace-nowrap transition text-xs px-1.5 py-0.5 text-white bg-black rounded-sm absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 translate-y-1 opacity-0  pointer-events-none;
}
</style>
