# gutentap

[Demo here](http://gutentap.letsdance.agency)

## Project setup

Install with `npm install gutentap`.

```
import { GutenTap }  from "gutentap"
import 'gutentap/style.css'

<GutenTap v-model="content" mode="json" />
```

Mode can be json or html.

## To do

- [x] Make package an installable library
- [x] Add HTML/JSON 'mode' property
- [x] Fix bullet/numbered list toggle
- [x] Small/touch screen optimisation
- [x] Add table tools (new row/delete row etc)
- [x] Create vue components for key UI elements – e.g. dropdown menus
- [x] Improve titles/tooltips with some sort of popover (tippy?)
- [x] Add property to block tools determining if they can be converted
- [x] add […] menu to end of floating toolbar: delete block, duplicate block
- [x] import blockquote separately to starter kit and extend it to only support paragraph tags
- [x] block width tool works on nested paragraphs (e.g. inside blockquote)
- [x] block width tool double icon when applied to blockquote (look at logic for showing icons... isActiveTest which uses .isActive() https://tiptap.dev/api/editor#is-active we can specify block type which should help – feed in top level block? )
- [x] explore fix for buggyness of inline\* for tablecell content
- [x] harmonize approach for finding/selecting parent block - e.g. https://github.com/ueberdosis/tiptap/blob/8c6751f0c638effb22110b62b40a1632ea6867c9/packages/core/src/commands/deleteNode.ts
