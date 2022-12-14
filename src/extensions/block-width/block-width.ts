import { Extension } from '@tiptap/core'

export interface BlockWidthOptions {
  types: string[],
  alignments: string[],
  defaultAlignment: string,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    blockWidth: {
      /**
       * Set the text align attribute
       */
      setBlockWidth: (alignment: string) => ReturnType,
      /**
       * Unset the text align attribute
       */
      unsetBlockWidth: () => ReturnType,
    }
  }
}

export const BlockWidth = Extension.create<BlockWidthOptions>({
  name: 'blockWidth',

  addOptions() {
    return {
      types: [],
      alignments: ['normal', 'wide', 'full'],
      defaultAlignment: 'normal',
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          blockWidth: {
            default: this.options.defaultAlignment,
            parseHTML: element => element.dataset.blockWidth || this.options.defaultAlignment,
            renderHTML: attributes => {
              if (attributes.blockWidth === this.options.defaultAlignment) {
                return {}
              }

              return { 'data-block-width': attributes.blockWidth }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setBlockWidth: (alignment: string) => ({ commands }) => {
        if (!this.options.alignments.includes(alignment)) {
          return false
        }

        return this.options.types.every(type => commands.updateAttributes(type, { blockWidth: alignment }))
      },

      unsetBlockWidth: () => ({ commands }) => {
        return this.options.types.every(type => commands.resetAttributes(type, 'textAlign'))
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      // 'Mod-Shift-l': () => this.editor.commands.setTextAlign('left'),
      // 'Mod-Shift-e': () => this.editor.commands.setTextAlign('center'),
      // 'Mod-Shift-r': () => this.editor.commands.setTextAlign('right'),
      // 'Mod-Shift-j': () => this.editor.commands.setTextAlign('justify'),
    }
  },
})