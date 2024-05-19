import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { GetTopLevelBlockCoords } from "../../utils/pm-utils";
import { AllSelection, TextSelection } from "prosemirror-state";

export interface NodeToolsOptions {}

export const InsertBetween = Extension.create<NodeToolsOptions>({
  name: "insertBetween",

  addOptions() {
    return {};
  },

  addProseMirrorPlugins() {
    let toolsShowing = false;
    let toolPosition = 0;

    let editor = this.editor;
    let { view } = editor;

    const tools = document.createElement("button");
    tools.classList.add("editor-node-tools");
    tools.ariaLabel = "Insert block here";
    // tools.innerText = "+";
    tools.style.display = "none";

    editor.view.dom.addEventListener("click", () => {
      tools.style.display = "none";
    });

    tools.addEventListener("click", (event) => {
      editor.view.focus();
      event.preventDefault();

      const endPosition = getTopLevelNodePositionFromCoords(
        view,
        event.clientX,
        event.clientY - 25,
        true
      );

      console.log(endPosition);

      const emptyParagraph = editor.schema.nodes["paragraph"];
      let tr = editor.state.tr.insert(endPosition, emptyParagraph.create());

      tr.setSelection(TextSelection.create(tr.doc, endPosition));
      editor.view.dispatch(tr);

      tools.style.display = "none";
    });

    editor.view.dom.parentElement?.appendChild(tools);

    const getTopLevelNodeDOMFromCoords = (view, event) => {
      let position = getTopLevelNodePositionFromCoords(
        view,
        event.clientX,
        event.clientY - 25
      );
      return view.nodeDOM(position);
    };

    const getTopLevelNodePositionFromCoords = (view, x, y, after = false) => {
      let posAtCoords = view.posAtCoords({
        left: x,
        top: y,
      });

      if (!posAtCoords) return null;

      let resolvedPos = view.state.doc.resolve(posAtCoords.pos);

      if (after) {
        return resolvedPos.after(1);
      } else {
        return resolvedPos.before(1);
      }
    };

    return [
      new Plugin({
        key: new PluginKey(this.name),
        props: {
          handleDOMEvents: {
            mousemove: (view, event) => {
              let nodeDOM = getTopLevelNodeDOMFromCoords(view, event);

              if (nodeDOM) {
                let rect = nodeDOM.getBoundingClientRect();

                let newToolPosition =
                  rect.bottom -
                  view.dom.getBoundingClientRect().top +
                  view.dom.offsetTop;

                if (
                  event.clientY > rect.bottom - 50 &&
                  (newToolPosition !== toolPosition || !toolsShowing)
                ) {
                  toolsShowing = true;
                  toolPosition = newToolPosition;
                  tools.style.top = `${newToolPosition}px`;
                  tools.style.right = `${rect.right - rect.width}px`;
                  tools.style.left = `${rect.left}px`;
                  tools.style.display = "";
                } else if (event.clientY <= rect.bottom - 50 && toolsShowing) {
                  tools.style.display = "none";
                  toolsShowing = false;
                  newToolPosition = 0;
                }
              }
            },
          },
        },
      }),
    ];
  },
});
