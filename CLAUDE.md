# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve        # Start dev server for the demo app
npm run build        # Build both library and demo
npm run build:lib    # Build only the library (outputs to lib/)
npm run build:demo   # Build only the demo app
```

No test suite is configured. Linting is via ESLint (`eslint.config.js`) with Vue 3 essential rules.

## What This Is

**GutenTap** is a Vue 3 rich text editor component library built on [Tiptap](https://tiptap.dev/) (a ProseMirror abstraction). It is published as an npm package (`gutentap`) and ships an ES module + UMD build plus a CSS file.

Consumer usage:
```js
import { GutenTap } from "gutentap"
import 'gutentap/style.css'
// <GutenTap v-model="content" mode="json" />
```

## Architecture

### Entry Points
- `src/lib.js` — library export (what gets published)
- `src/app.js` + `src/App.vue` — demo app that exercises the library
- `vite.config.js` — library build (externalizes Vue, outputs `lib/`)
- `vite.demo.config.js` — demo build

### Core Component: `src/components/GutenTap.vue`
The single public component. Key props:
- `modelValue` / `mode` (`json` | `html`) — content binding and serialization format
- `editable` — toggles read-only mode
- `placeholder` — configurable placeholder text
- `blockTools`, `inlineTools`, `alignmentTools` — arrays of tool config objects that define the floating toolbar
- `extensions` — additional Tiptap extensions to inject
- `blockWidthTypes`, `variantsTypes` — which block types support width/variant UI

Key props also include:
- `editorClass` — CSS classes applied to the `EditorContent` wrapper div (e.g. `"my-32 prose xl:prose-xl"`). Defaults to `"prose"`. This is what drives typography styles — **not** the inner ProseMirror div.

On mount it creates a Tiptap `Editor` instance, loads initial content, and sets up `onUpdate`/`onSelectionUpdate` listeners that emit `update:modelValue`.

**Important DOM distinction:** `this.editor.view.dom` is the inner `.ProseMirror` contenteditable div and only carries the `ProseMirror` class. The `editorClass` classes (including `prose`) are one level up on the `EditorContent` wrapper. The full cascade for content styles is: `.gutentap > [editorClass div] > .ProseMirror > blocks`.

### Tool Configuration Objects (`src/tools/`)
Tools are plain objects (not Vue components) with shape:
```js
{ name, icon, command(editor), isActiveTest(editor), showTest(editor) }
```
- `block-tools.js` — paragraph, headings, lists, code block, blockquote, HR, table, YouTube
- `inline-tools.js` — bold, italic, link, strikethrough, code, highlight, sub/superscript
- `alignment-tools.js` — text alignment
- `table-tools.js` — row/column operations (only appear when cursor is inside a table)

### Custom Tiptap Extensions (`src/extensions/`)
Each subdirectory is a Tiptap extension that extends or overrides a Tiptap/ProseMirror default:
- `block-width/` — adds width attribute to HR, blockquote, YouTube nodes
- `variants/` — adds CSS variant/class attribute to blocks
- `insert-between/` — renders insert-block buttons in the gap between blocks
- `trailing-node/` — ensures a trailing empty paragraph always exists
- `youtube/` — custom YouTube embed with preview
- `figure/` — figure/image support
- `vue-component/` — renders arbitrary Vue components as editor nodes

### Slash Commands
`src/components/commands.js` defines the `/` command palette Tiptap extension. Typing `/` triggers `src/components/suggestion.js` which renders `CommandsList.vue` as a floating popover. Each block tool can expose an `insertCommand` to appear in this list.

### Floating Toolbar
The toolbar is rendered inside `GutenTap.vue` and is context-aware:
- Desktop: positioned top-left of the current block
- Mobile: sticky at the bottom
- Shows a block-type picker (converts current block), block-specific tools, inline tools, and a "more" menu (delete block, etc.)
- Table cursor shows `table-tools` instead of the standard set

### Utilities
- `src/utils/pm-utils.js` — ProseMirror helpers: coordinate calculation, node lookup by position, drag-node reordering
- `src/utils/utils.js` — array merge helper

### Styling
Tailwind CSS with the typography plugin (`tailwind.config.cjs`). Main stylesheet at `src/style.css`. Tailwind is processed via PostCSS (configured in `package.json`).

`tailwind.config.cjs` sets `important: ".gutentap"`, which scopes every Tailwind utility to inside a `.gutentap` ancestor. Consequence: any dynamically-created DOM elements (overlays, drag ghosts, popovers appended to `<body>`) that need Tailwind or typography styles must be wrapped in a `<div class="gutentap">`. Without it, utility classes and `prose` typography will have no effect.
