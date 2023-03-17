# gutentap

## To do

- [ ] Fix bullet/numbered list toggle
- [ ] Add table tools (new row/delete row etc)
- [ ] Create vue components for key UI elements – e.g. dropdown menus
- [ ] Improve titles/tooltips with some sort of popover (tippy?)
- [ ] Add property to block tools determining if they can be converted
- [ ] add […] menu to end of floating toolbar: delete block, duplicate block
- [x] import blockquote separately to starter kit and extend it to only support paragraph tags
- [*] block width tool works on nested paragraphs (e.g. inside blockquote)
- [ ] block width tool double icon when applied to blockquote (look at logic for showing icons... isActiveTest which uses .isActive() https://tiptap.dev/api/editor#is-active we can specify block type which should help – feed in top level block? )
- [x] explore fix for buggyness of inline\* for tablecell content
- [x] harmonize approach for finding/selecting parent block - e.g. https://github.com/ueberdosis/tiptap/blob/8c6751f0c638effb22110b62b40a1632ea6867c9/packages/core/src/commands/deleteNode.ts

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
