// import { Decoration, DecorationSet } from "prosemirror-view";
import { Slice, Fragment } from "@tiptap/pm/model";
import { ReplaceStep } from "@tiptap/pm/transform";
import { Selection } from "@tiptap/pm/state";

export const GetTopLevelBlockCoords = function (view) {
  const $pos = view.state.selection.$from;
  let from = $pos.before(1);
  let coords = view.coordsAtPos(from);
  return new DOMRect(coords.left, coords.top, 0, 0);
};

export const GetTableRowCoords = function (view) {
  const pos = view.state.selection.$from;
  let depth = pos.depth;
  while (depth > 1) {
    if (pos.node(depth).type.name == "tableRow") break;
    depth--;
  }
  let from = pos.before(depth);
  let rect = view.nodeDOM(from).getBoundingClientRect();
  return new DOMRect(rect.x, rect.y, rect.width, rect.height);
};

export const GetTableColumnCoords = function (view) {
  const pos = view.state.selection.$from;
  let depth = pos.depth,
    cellDepth = 0,
    tableDepth = 0;
  while (depth > 0) {
    if (
      pos.node(depth).type.name == "tableCell" ||
      pos.node(depth).type.name == "tableHeader"
    ) {
      cellDepth = depth;
    }
    if (pos.node(depth).type.name == "table") {
      tableDepth = depth;
      break;
    }
    depth--;
  }
  if (!(tableDepth && cellDepth)) {
    return false;
  }
  let cellRect = view.nodeDOM(pos.before(cellDepth)).getBoundingClientRect();
  let tableRect = view.nodeDOM(pos.before(tableDepth)).getBoundingClientRect();

  return new DOMRect(cellRect.x, tableRect.y, cellRect.width, tableRect.height);
};

export const GetTopLevelNode = function (view) {
  const selectionStart = view.state.selection.$from;
  if (selectionStart.node(1) == null && view.lastSelectedViewDesc) {
    return view.lastSelectedViewDesc.node;
  }
  return selectionStart.node(1);
};

export const GetNodeTree = function (view) {
  let nodes = [];
  let selectionStart = view.state.selection.$from;

  if (selectionStart.node(1) == null && view.lastSelectedViewDesc) {
    return [view.lastSelectedViewDesc.node.type.name];
  }

  let depth = selectionStart.depth;
  while (depth >= 0) {
    nodes.push(selectionStart.node(depth).type.name);
    depth--;
  }
  return nodes.reverse();
};

// export const GetTopLevelBlock = function (editor) {
//   const selectionStart = editor.view.state.selection.$from;
//   let parentNode = editor.view.domAtPos(selectionStart.posAtIndex(0, 1)).node;
//   if (parentNode == editor.view.dom) {
//     return editor.view.lastSelectedViewDesc?.nodeDOM;
//   }

//   // Sometimes we get a node that isn't the top-level parent; e.g. codeBlock gives us the <code> not the wrapping <pre>
//   while (
//     parentNode != editor.view.dom &&
//     parentNode.parentNode != editor.view.dom
//   ) {
//     parentNode = parentNode.parentNode;
//   }

//   return parentNode;
// };

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
  let targetNode = targetResolved.node(1) ?? targetResolved.nodeAfter;

  // Get document; children; start and end – always the same!
  const parent = targetResolved.node(0);
  const parentPos = targetResolved.start(0);
  let tr = view.state.tr;
  const arr = mapChildren(parent, (node) => node);
  let replaceStart = parentPos;
  let replaceEnd = targetResolved.end(0);

  let fromIndex = arr.indexOf(draggedNode);
  let targetIndex = arr.indexOf(targetNode);

  // Index is different when target is after dragged node
  if (targetIndex > fromIndex) {
    --targetIndex;
  }
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
  const isDown = dir === "DOWN";
  const currentNode = currentResolved.node(1) || currentResolved.nodeAfter;
  const parentDepth = 0;
  const parent = currentResolved.node(parentDepth);
  const parentPos = currentResolved.start(parentDepth);

  const arr = mapChildren(parent, (node) => node);
  let index = arr.indexOf(currentNode);

  if (index == -1) {
    return false;
  }

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
