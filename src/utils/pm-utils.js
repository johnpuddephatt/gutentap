// import { Decoration, DecorationSet } from "prosemirror-view";
import { Slice, Fragment } from "prosemirror-model";
import { ReplaceStep } from "prosemirror-transform";
import { Selection } from "prosemirror-state";

let mapChildren = function (node, callback) {
  const array = [];
  for (let i = 0; i < node.childCount; i++) {
    array.push(
      callback(node.child(i), i, node instanceof Fragment ? node : node.content)
    );
  }
  return array;
};

export const DragNode = function ({
  view,
  state,
  draggedNodePosition,
  targetNodePosition,
}) {
  let targetResolved = state.doc.resolve(targetNodePosition);
  let draggedNode = state.doc.resolve(draggedNodePosition).node(1);
  let targetNode = targetResolved.node(1);
  console.log(targetResolved.node(1));
  let tr = view.state.tr;
  const parent = targetResolved.node(0);
  const parentPos = targetResolved.start(0);

  const arr = mapChildren(parent, (node) => node);
  let fromIndex = arr.indexOf(draggedNode);
  let targetIndex = arr.indexOf(targetNode);
  let replaceStart = parentPos;
  let replaceEnd = targetResolved.end(0);
  let arrItem = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(targetIndex, 0, arrItem);
  const slice = new Slice(Fragment.fromArray(arr), 0, 0);
  tr.step(new ReplaceStep(replaceStart, replaceEnd, slice, false));

  tr.setSelection(Selection.near(tr.doc.resolve(targetNodePosition)));

  view.dispatch(tr);
};

export const MoveNode = function ({ view, dir, currentResolved }) {
  if (!currentResolved) {
    return false;
  }

  let tr = view.state.tr;

  //   const decoration = Decoration.node(
  //     currentResolved.before(),
  //     currentResolved.after(),
  //     { class: "current-element" }
  //   );
  //   tr.step(DecorationSet.create(view.state.doc, [decoration]));
  //   view.dispatch(tr);

  const isDown = dir === "DOWN";
  const currentNode = currentResolved.node(1);
  const parentDepth = 0;
  const parent = currentResolved.node(parentDepth);
  const parentPos = currentResolved.start(parentDepth);

  const arr = mapChildren(parent, (node) => node);
  let index = arr.indexOf(currentNode);

  let swapWithIndex = isDown ? index + 1 : index - 1;

  // If swap is out of bound
  if (swapWithIndex >= arr.length || swapWithIndex < 0) {
    return false;
  }

  const swapWithNodeSize = arr[swapWithIndex].nodeSize;
  [arr[index], arr[swapWithIndex]] = [arr[swapWithIndex], arr[index]];

  let replaceStart = parentPos;
  let replaceEnd = currentResolved.end(parentDepth);

  const slice = new Slice(Fragment.fromArray(arr), 0, 0);
  tr.step(new ReplaceStep(replaceStart, replaceEnd, slice, false));

  tr.setSelection(
    Selection.near(
      tr.doc.resolve(
        isDown
          ? currentResolved.pos + swapWithNodeSize
          : currentResolved.pos - swapWithNodeSize
      )
    )
  );

  view.dispatch(tr);
};
