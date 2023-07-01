import { openBlock as Z, createElementBlock as ce, normalizeClass as En, renderSlot as Tc, createCommentVNode as kt, defineComponent as jr, ref as go, onMounted as bf, onBeforeUnmount as Ia, h as nn, getCurrentInstance as $m, watchEffect as Wm, nextTick as qm, unref as jm, Teleport as Ym, provide as Sc, reactive as wf, markRaw as Tf, customRef as Km, resolveComponent as Vt, createBlock as st, withCtx as De, createElementVNode as He, toDisplayString as Sf, createVNode as $e, Fragment as Xt, renderList as Jt, createTextVNode as Xm, createSlots as Jm, withKeys as Qm } from "vue";
const ar = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, Zm = {
  props: {
    clickHandler: {
      type: String,
      required: !1
    },
    content: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white"
    },
    active: {
      type: Boolean
    }
  }
}, eg = ["aria-label", "data-tooltip", "title", "innerHTML"];
function tg(t, e, n, r, i, s) {
  return Z(), ce("button", {
    class: En(["w-full flex p-1 flex-row items-center text-slate-600 rounded gap-2 hover:bg-slate-100", n.active ? n.activeClass : ""]),
    "aria-label": n.label,
    "data-tooltip": n.label,
    title: n.label,
    innerHTML: n.content
  }, null, 10, eg);
}
const ng = /* @__PURE__ */ ar(Zm, [["render", tg]]), rg = {
  computed: {
    hasDropdown() {
      return !!this.$slots.dropdown;
    }
  },
  props: {
    align: {
      type: String,
      default: "left"
    },
    iconName: {
      type: String,
      required: !1
    },
    iconSvg: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white rounded"
    },
    active: {
      type: Boolean
    }
  }
}, ig = { class: "group text-sm relative" };
function sg(t, e, n, r, i, s) {
  return Z(), ce("div", ig, [
    Tc(t.$slots, "default"),
    s.hasDropdown ? (Z(), ce("div", {
      key: 0,
      class: En(["z-10 bg-white shadow py-2 group-focus-within:block hidden overflow-hidden whitespace-nowrap absolute top-full mt-4 rounded border border-slate-400", n.align == "left" ? "left-0" : "right-0"])
    }, [
      Tc(t.$slots, "dropdown")
    ], 2)) : kt("", !0)
  ]);
}
const og = /* @__PURE__ */ ar(rg, [["render", sg]]), lg = {
  props: {
    content: {
      type: String,
      required: !1
    },
    clickHandler: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white"
    },
    active: {
      type: Boolean
    }
  }
}, ag = ["aria-label", "title", "innerHTML"];
function cg(t, e, n, r, i, s) {
  return Z(), ce("button", {
    class: En(["w-full flex py-1 pl-2 pr-6 flex-row items-center text-slate-600 gap-2 hover:bg-slate-100", n.active ? n.activeClass : ""]),
    "aria-label": n.label,
    title: n.label,
    innerHTML: n.content
  }, null, 10, ag);
}
const dg = /* @__PURE__ */ ar(lg, [["render", cg]]);
function Ne(t) {
  this.content = t;
}
Ne.prototype = {
  constructor: Ne,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, i = r.find(t), s = r.content.slice();
    return i == -1 ? s.push(n || t, e) : (s[i + 1] = e, n && (s[i] = n)), new Ne(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1)
      return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Ne(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Ne([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Ne(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(t);
    return i.splice(s == -1 ? i.length : s, 0, e, n), new Ne(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = Ne.from(t), t.size ? new Ne(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Ne.from(t), t.size ? new Ne(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Ne.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
Ne.from = function(t) {
  if (t instanceof Ne)
    return t;
  var e = [];
  if (t)
    for (var n in t)
      e.push(n, t[n]);
  return new Ne(e);
};
function If(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let i = t.child(r), s = e.child(r);
    if (i == s) {
      n += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return n;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        n++;
      return n;
    }
    if (i.content.size || s.content.size) {
      let o = If(i.content, s.content, n + 1);
      if (o != null)
        return o;
    }
    n += i.nodeSize;
  }
}
function Cf(t, e, n, r) {
  for (let i = t.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: n, b: r };
    let o = t.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      n -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: n, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, d = Math.min(o.text.length, l.text.length);
      for (; c < d && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, n--, r--;
      return { a: n, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Cf(o.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
class x {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, i = 0, s) {
    for (let o = 0, l = 0; l < n; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, n - d), r, i + d);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, n, (l, a) => {
      l.isText ? (s += l.text.slice(Math.max(e, a) - a, n - a), o = !r) : l.isLeaf ? (i ? s += typeof i == "function" ? i(l) : i : l.type.spec.leafText && (s += l.type.spec.leafText(l)), o = !r) : !o && l.isBlock && (s += r, o = !0);
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new x(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], i = 0;
    if (n > e)
      for (let s = 0, o = 0; o < n; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, n - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, n - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new x(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? x.empty : e == 0 && n == this.content.length ? this : new x(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let i = this.content.slice(), s = this.size + n.nodeSize - r.nodeSize;
    return i[e] = n, new x(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new x([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new x(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let i = this.content[n];
      e(i, r, n), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return If(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Cf(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, n = -1) {
    if (e == 0)
      return Zi(0, e);
    if (e == this.size)
      return Zi(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || n > 0 ? Zi(r + 1, o) : Zi(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return x.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new x(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return x.empty;
    let n, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (n || (n = e.slice(0, i)), n[n.length - 1] = s.withText(n[n.length - 1].text + s.text)) : n && n.push(s);
    }
    return new x(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return x.empty;
    if (e instanceof x)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new x([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
x.empty = new x([], 0);
const Uo = { index: 0, offset: 0 };
function Zi(t, e) {
  return Uo.index = t, Uo.offset = e, Uo;
}
function ks(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!ks(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !ks(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let ie = class _l {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        n || (n = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (n || (n = e.slice(0, i)), n.push(this), r = !0), n && n.push(s);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && ks(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    return r.create(n.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return _l.none;
    if (e instanceof _l)
      return [e];
    let n = e.slice();
    return n.sort((r, i) => r.type.rank - i.type.rank), n;
  }
};
ie.none = [];
class Ds extends Error {
}
class H {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = Of(this.content, e + this.openStart, n);
    return r && new H(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new H(Mf(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return H.empty;
    let r = n.openStart || 0, i = n.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new H(x.fromJSON(e, n.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new H(e, r, i);
  }
}
H.empty = new H(x.empty, 0, 0);
function Mf(t, e, n) {
  let { index: r, offset: i } = t.findIndex(e), s = t.maybeChild(r), { index: o, offset: l } = t.findIndex(n);
  if (i == e || s.isText) {
    if (l != n && !t.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, s.copy(Mf(s.content, e - i - 1, n - i - 1)));
}
function Of(t, e, n, r) {
  let { index: i, offset: s } = t.findIndex(e), o = t.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let l = Of(o.content, e - s - 1, n);
  return l && t.replaceChild(i, o.copy(l));
}
function ug(t, e, n) {
  if (n.openStart > t.depth)
    throw new Ds("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new Ds("Inconsistent open depths");
  return Af(t, e, n, 0);
}
function Af(t, e, n, r) {
  let i = t.index(r), s = t.node(r);
  if (i == e.index(r) && r < t.depth - n.openStart) {
    let o = Af(t, e, n, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let o = t.parent, l = o.content;
      return Yn(o, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = fg(n, t);
      return Yn(s, xf(t, o, l, e, r));
    }
  else
    return Yn(s, Ns(t, e, r));
}
function Rf(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new Ds("Cannot join " + e.type.name + " onto " + t.type.name);
}
function kl(t, e, n) {
  let r = t.node(n);
  return Rf(r, e.node(n)), r;
}
function jn(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function ui(t, e, n, r) {
  let i = (e || t).node(n), s = 0, o = e ? e.index(n) : i.childCount;
  t && (s = t.index(n), t.depth > n ? s++ : t.textOffset && (jn(t.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    jn(i.child(l), r);
  e && e.depth == n && e.textOffset && jn(e.nodeBefore, r);
}
function Yn(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function xf(t, e, n, r, i) {
  let s = t.depth > i && kl(t, e, i + 1), o = r.depth > i && kl(n, r, i + 1), l = [];
  return ui(null, t, i, l), s && o && e.index(i) == n.index(i) ? (Rf(s, o), jn(Yn(s, xf(t, e, n, r, i + 1)), l)) : (s && jn(Yn(s, Ns(t, e, i + 1)), l), ui(e, n, i, l), o && jn(Yn(o, Ns(n, r, i + 1)), l)), ui(r, null, i, l), new x(l);
}
function Ns(t, e, n) {
  let r = [];
  if (ui(null, t, n, r), t.depth > n) {
    let i = kl(t, e, n + 1);
    jn(Yn(i, Ns(t, e, n + 1)), r);
  }
  return ui(e, null, n, r), new x(r);
}
function fg(t, e) {
  let n = e.depth - t.openStart, i = e.node(n).copy(t.content);
  for (let s = n - 1; s >= 0; s--)
    i = e.node(s).copy(x.from(i));
  return {
    start: i.resolveNoCache(t.openStart + n),
    end: i.resolveNoCache(i.content.size - t.openEnd - n)
  };
}
class Ii {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(n);
    return r ? e.child(n).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], i = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return ie.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), i = e.maybeChild(n);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new Ls(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], i = 0, s = n;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new Ii(n, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    for (let i = 0; i < $o.length; i++) {
      let s = $o[i];
      if (s.pos == n && s.doc == e)
        return s;
    }
    let r = $o[Wo] = Ii.resolve(e, n);
    return Wo = (Wo + 1) % hg, r;
  }
}
let $o = [], Wo = 0, hg = 12;
class Ls {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const pg = /* @__PURE__ */ Object.create(null);
let Kn = class Dl {
  /**
  @internal
  */
  constructor(e, n, r, i = ie.none) {
    this.type = e, this.attrs = n, this.marks = i, this.content = r || x.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, i = 0) {
    this.content.nodesBetween(e, n, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, n, r, i) {
    return this.content.textBetween(e, n, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && ks(this.attrs, n || e.defaultAttrs || pg) && ie.sameSet(this.marks, r || ie.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Dl(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Dl(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return H.empty;
    let i = this.resolve(e), s = this.resolve(n), o = r ? 0 : i.sharedDepth(n), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new H(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return ug(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: i } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (i == e || n.isText)
        return n;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let i = this.content.child(n - 1);
    return { node: i, index: n - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Ii.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Ii.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let i = !1;
    return n > e && this.nodesBetween(e, n, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), _f(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = x.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, n);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, n);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let e = ie.none;
    for (let n = 0; n < this.marks.length; n++)
      e = this.marks[n].addToSet(e);
    if (!ie.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let i = x.fromJSON(e, n.content);
    return e.nodeType(n.type).create(n.attrs, i, r);
  }
};
Kn.prototype.text = void 0;
class Ps extends Kn {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    if (super(e, n, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : _f(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Ps(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Ps(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function _f(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class nr {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new mg(e, n);
    if (r.next == null)
      return nr.empty;
    let i = kf(r);
    r.next && r.err("Unexpected trailing text");
    let s = Tg(wg(i));
    return Sg(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let i = this;
    for (let s = n; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!n || a.validEnd))
        return x.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: d, next: u } = o.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let f = s(u, l.concat(d));
          if (f)
            return f;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in n) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), n[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && n(r.next[i].next);
    }
    return n(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
nr.empty = new nr(!0);
class mg {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function kf(t) {
  let e = [];
  do
    e.push(gg(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function gg(t) {
  let e = [];
  do
    e.push(yg(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function yg(t) {
  let e = bg(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = Eg(t, e);
    else
      break;
  return e;
}
function Ic(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function Eg(t, e) {
  let n = Ic(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Ic(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function vg(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let i = [];
  for (let s in n) {
    let o = n[s];
    o.groups.indexOf(e) > -1 && i.push(o);
  }
  return i.length == 0 && t.err("No node type or group '" + e + "' found"), i;
}
function bg(t) {
  if (t.eat("(")) {
    let e = kf(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = vg(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function wg(t) {
  let e = [[]];
  return i(s(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = n());
      }
    else if (o.type == "star") {
      let a = n();
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = n();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let d = n();
          i(s(o.expr, a), d), a = d;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let d = n();
            r(a, d), i(s(o.expr, a), d), a = d;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Df(t, e) {
  return e - t;
}
function Cc(t, e) {
  let n = [];
  return r(e), n.sort(Df);
  function r(i) {
    let s = t[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    n.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && n.indexOf(a) == -1 && r(a);
    }
  }
}
function Tg(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Cc(t, 0));
  function n(r) {
    let i = [];
    r.forEach((o) => {
      t[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let d = 0; d < i.length; d++)
          i[d][0] == l && (c = i[d][1]);
        Cc(t, a).forEach((d) => {
          c || i.push([l, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let s = e[r.join(",")] = new nr(r.indexOf(t.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(Df);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || n(l) });
    }
    return s;
  }
}
function Sg(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let i = r[n], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Nf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function Lf(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let i = e && e[r];
    if (i === void 0) {
      let s = t[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = i;
  }
  return n;
}
function Pf(t) {
  let e = /* @__PURE__ */ Object.create(null);
  if (t)
    for (let n in t)
      e[n] = new Ig(t[n]);
  return e;
}
let Mc = class Bf {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Pf(r.attrs), this.defaultAttrs = Nf(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == nr.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Lf(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Kn(this, this.computeAttrs(e), x.from(n), ie.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = x.from(n), this.checkContent(n), new Kn(this, this.computeAttrs(e), n, ie.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = x.from(n), n.size) {
      let o = this.contentMatch.fillBefore(n);
      if (!o)
        return null;
      n = o.append(n);
    }
    let i = this.contentMatch.matchFragment(n), s = i && i.fillBefore(x.empty, !0);
    return s ? new Kn(this, e, n.append(s), ie.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : ie.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new Bf(s, n, o));
    let i = n.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
class Ig {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class yo {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    this.name = e, this.rank = n, this.schema = r, this.spec = i, this.attrs = Pf(i.attrs), this.excluded = null;
    let s = Nf(this.attrs);
    this.instance = s ? new ie(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ie(this, Lf(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new yo(s, i++, n, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Cg {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let i in e)
      n[i] = e[i];
    n.nodes = Ne.from(e.nodes), n.marks = Ne.from(e.marks || {}), this.nodes = Mc.compile(this.spec.nodes, this), this.marks = yo.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      s.contentMatch = r[o] || (r[o] = nr.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.markSet = l == "_" ? null : l ? Oc(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : Oc(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Mc) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new Ps(r, r.defaultAttrs, e, ie.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Kn.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return ie.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function Oc(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = t.marks[i], o = s;
    if (s)
      n.push(s);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && n.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
class Nr {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [], n.forEach((r) => {
      r.tag ? this.tags.push(r) : r.style && this.styles.push(r);
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let i = e.nodes[r.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new Rc(this, n, !1);
    return r.addAll(e, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new Rc(this, n, !0);
    return r.addAll(e, n.from, n.to), H.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (Ag(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || n.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
        if (o.getAttrs) {
          let a = o.getAttrs(n);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < n.length; o++) {
        let l = n[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      n.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = xc(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = xc(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Nr(e, Nr.schemaRules(e)));
  }
}
const Hf = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Mg = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Vf = { ol: !0, ul: !0 }, Bs = 1, Hs = 2, fi = 4;
function Ac(t, e, n) {
  return e != null ? (e ? Bs : 0) | (e === "full" ? Hs : 0) : t && t.whitespace == "pre" ? Bs | Hs : n & ~fi;
}
class es {
  constructor(e, n, r, i, s, o, l) {
    this.type = e, this.attrs = n, this.marks = r, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = ie.none, this.stashMarks = [], this.match = o || (l & fi ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(x.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Bs)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let n = x.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(x.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  popFromStashMark(e) {
    for (let n = this.stashMarks.length - 1; n >= 0; n--)
      if (e.eq(this.stashMarks[n]))
        return this.stashMarks.splice(n, 1)[0];
  }
  applyPending(e) {
    for (let n = 0, r = this.pendingMarks; n < r.length; n++) {
      let i = r[n];
      (this.type ? this.type.allowsMarkType(i.type) : xg(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Hf.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Rc {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0;
    let i = n.topNode, s, o = Ac(null, n.preserveWhitespace, 0) | (r ? fi : 0);
    i ? s = new es(i.type, i.attrs, ie.none, ie.none, !0, n.topMatch || i.type.contentMatch, o) : r ? s = new es(null, null, ie.none, ie.none, !0, null, o) : s = new es(e.schema.topNodeType, null, ie.none, ie.none, !0, null, o), this.nodes = [s], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    if (e.nodeType == 3)
      this.addTextNode(e);
    else if (e.nodeType == 1) {
      let n = e.getAttribute("style");
      if (!n)
        this.addElement(e);
      else {
        let r = this.readStyles(Rg(n));
        if (!r)
          return;
        let [i, s] = r, o = this.top;
        for (let l = 0; l < s.length; l++)
          this.removePendingMark(s[l], o);
        for (let l = 0; l < i.length; l++)
          this.addPendingMark(i[l]);
        this.addElement(e);
        for (let l = 0; l < i.length; l++)
          this.removePendingMark(i[l], o);
        for (let l = 0; l < s.length; l++)
          this.addPendingMark(s[l]);
      }
    }
  }
  addTextNode(e) {
    let n = e.nodeValue, r = this.top;
    if (r.options & Hs || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
      if (r.options & Bs)
        r.options & Hs ? n = n.replace(/\r\n?/g, `
`) : n = n.replace(/\r?\n|\r/g, " ");
      else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], s = e.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (n = n.slice(1));
      }
      n && this.insertNode(this.parser.schema.text(n)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n) {
    let r = e.nodeName.toLowerCase(), i;
    Vf.hasOwnProperty(r) && this.parser.normalizeLists && Og(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, n));
    if (s ? s.ignore : Mg.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let o, l = this.top, a = this.needsBlock;
      if (Hf.hasOwnProperty(r))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      this.addAll(e), o && this.sync(l), this.needsBlock = a;
    } else
      this.addElementByRule(e, s, s.consuming === !1 ? i : void 0);
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let n = ie.none, r = ie.none;
    for (let i = 0; i < e.length; i += 2)
      for (let s = void 0; ; ) {
        let o = this.parser.matchStyle(e[i], e[i + 1], this, s);
        if (!o)
          break;
        if (o.ignore)
          return null;
        if (o.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((l) => {
          o.clearMark(l) && (r = l.addToSet(r));
        }) : n = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(n), o.consuming === !1)
          s = o;
        else
          break;
      }
    return [n, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r) {
    let i, s, o;
    n.node ? (s = this.parser.schema.nodes[n.node], s.isLeaf ? this.insertNode(s.create(n.attrs)) || this.leafFallback(e) : i = this.enter(s, n.attrs || null, n.preserveWhitespace)) : (o = this.parser.schema.marks[n.mark].create(n.attrs), this.addPendingMark(o));
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof n.contentElement == "string" ? a = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? a = n.contentElement(e) : n.contentElement && (a = n.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, o && this.removePendingMark(o, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r) {
    let i = n || 0;
    for (let s = n ? e.childNodes[n] : e.firstChild, o = r == null ? null : e.childNodes[r]; s != o; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let n, r;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], o = s.findWrapping(e);
      if (o && (!n || n.length > o.length) && (n = o, r = s, !o.length) || s.solid)
        break;
    }
    if (!n)
      return !1;
    this.sync(r);
    for (let i = 0; i < n.length; i++)
      this.enterInner(n[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let n = this.textblockFromContext();
      n && this.enterInner(n);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let n = this.top;
      n.applyPending(e.type), n.match && (n.match = n.match.matchType(e.type));
      let r = n.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!n.type || n.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return n.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r) {
    let i = this.findPlace(e.create(n));
    return i && this.enterInner(e, n, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, n = null, r = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(e), s.match = s.match && s.match.matchType(e);
    let o = Ac(e, i, s.options);
    s.options & fi && s.content.length == 0 && (o |= fi), this.nodes.push(new es(e, n, s.activeMarks, s.pendingMarks, r, null, o)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--)
      if (this.nodes[n] == e)
        return this.open = n, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && n.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = n[l];
        if (c == "") {
          if (l == n.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!d || d.name != c && d.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let n = _g(e, this.top.pendingMarks);
    n && this.top.stashMarks.push(n), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, n) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let o = i.popFromStashMark(e);
        o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks));
      }
      if (i == n)
        break;
    }
  }
}
function Og(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Vf.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Ag(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Rg(t) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, n, r = [];
  for (; n = e.exec(t); )
    r.push(n[1], n[2].trim());
  return r;
}
function xc(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function xg(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(t))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: d } = l.edge(a);
        if (c == e || s.indexOf(d) < 0 && o(d))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
function _g(t, e) {
  for (let n = 0; n < e.length; n++)
    if (t.eq(e[n]))
      return e[n];
}
class zt {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = qo(n).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], d = this.serializeMark(c, o.isInline, n);
          d && (s.push([c, i]), i.appendChild(d.dom), i = d.contentDOM || d.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: i } = zt.renderSpec(qo(n), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, n);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let i = this.marks[e.type.name];
    return i && zt.renderSpec(qo(r), i(e, n));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, n, r = null) {
    if (typeof n == "string")
      return { dom: e.createTextNode(n) };
    if (n.nodeType != null)
      return { dom: n };
    if (n.dom && n.dom.nodeType != null)
      return n;
    let i = n[0], s = i.indexOf(" ");
    s > 0 && (r = i.slice(0, s), i = i.slice(s + 1));
    let o, l = r ? e.createElementNS(r, i) : e.createElement(i), a = n[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let d in a)
        if (a[d] != null) {
          let u = d.indexOf(" ");
          u > 0 ? l.setAttributeNS(d.slice(0, u), d.slice(u + 1), a[d]) : l.setAttribute(d, a[d]);
        }
    }
    for (let d = c; d < n.length; d++) {
      let u = n[d];
      if (u === 0) {
        if (d < n.length - 1 || d > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: f, contentDOM: h } = zt.renderSpec(e, u, r);
        if (l.appendChild(f), h) {
          if (o)
            throw new RangeError("Multiple content holes");
          o = h;
        }
      }
    }
    return { dom: l, contentDOM: o };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new zt(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = _c(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return _c(e.marks);
  }
}
function _c(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function qo(t) {
  return t.document || window.document;
}
const Ff = 65535, zf = Math.pow(2, 16);
function kg(t, e) {
  return t + e * zf;
}
function kc(t) {
  return t & Ff;
}
function Dg(t) {
  return (t - (t & Ff)) / zf;
}
const Gf = 1, Uf = 2, Ts = 4, $f = 8;
class Nl {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & $f) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Gf | Ts)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Uf | Ts)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ts) > 0;
  }
}
class gt {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && gt.empty)
      return gt.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = kc(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        n += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + n + Dg(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], d = this.ranges[l + o], u = a + c;
      if (e <= u) {
        let f = c ? e == a ? -1 : e == u ? 1 : n : n, h = a + i + (f < 0 ? 0 : d);
        if (r)
          return h;
        let p = e == (n < 0 ? a : u) ? null : kg(l / 3, e - a), m = e == a ? Uf : e == u ? Gf : Ts;
        return (n < 0 ? e != a : e != u) && (m |= $f), new Nl(h, m, p);
      }
      i += d - c;
    }
    return r ? e + i : new Nl(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, i = kc(n), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], d = a + c;
      if (e <= d && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + n], d = this.ranges[i + r];
      e(l, l + c, a, a + d), s += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new gt(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? gt.empty : new gt(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
gt.empty = new gt([]);
class Rr {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], n, r = 0, i = e.length) {
    this.maps = e, this.mirror = n, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new Rr(this.maps, this.mirror, e, n);
  }
  /**
  @internal
  */
  copy() {
    return new Rr(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.to = this.maps.push(e), n != null && this.setMirror(this.maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this.maps.length; n < e.maps.length; n++) {
      let i = e.getMirror(n);
      this.appendMap(e.maps[n], i != null && i < n ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this.maps.length + e.maps.length; n >= 0; n--) {
      let i = e.getMirror(n);
      this.appendMap(e.maps[n].invert(), i != null && i > n ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Rr();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this.maps[s], l = o.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Nl(e, i, null);
  }
}
const jo = /* @__PURE__ */ Object.create(null);
class rt {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return gt.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = jo[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in jo)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return jo[e] = n, n.prototype.jsonID = e, n;
  }
}
class Se {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new Se(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new Se(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, i) {
    try {
      return Se.ok(e.replace(n, r, i));
    } catch (s) {
      if (s instanceof Ds)
        return Se.fail(s.message);
      throw s;
    }
  }
}
function Ca(t, e, n) {
  let r = [];
  for (let i = 0; i < t.childCount; i++) {
    let s = t.child(i);
    s.content.size && (s = s.copy(Ca(s.content, e, s))), s.isInline && (s = e(s, n, i)), r.push(s);
  }
  return x.fromArray(r);
}
class vn extends rt {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new H(Ca(n.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), n.openStart, n.openEnd);
    return Se.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new Gt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new vn(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof vn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new vn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new vn(n.from, n.to, e.markFromJSON(n.mark));
  }
}
rt.jsonID("addMark", vn);
class Gt extends rt {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new H(Ca(n.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), n.openStart, n.openEnd);
    return Se.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new vn(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Gt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Gt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Gt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Gt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
rt.jsonID("removeMark", Gt);
class bn extends rt {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Se.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return Se.fromReplace(e, this.pos, this.pos + 1, new H(x.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let i = 0; i < n.marks.length; i++)
          if (!n.marks[i].isInSet(r))
            return new bn(this.pos, n.marks[i]);
        return new bn(this.pos, this.mark);
      }
    }
    return new Lr(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new bn(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new bn(n.pos, e.markFromJSON(n.mark));
  }
}
rt.jsonID("addNodeMark", bn);
class Lr extends rt {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Se.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return Se.fromReplace(e, this.pos, this.pos + 1, new H(x.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new bn(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Lr(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Lr(n.pos, e.markFromJSON(n.mark));
  }
}
rt.jsonID("removeNodeMark", Lr);
class Oe extends rt {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, i = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Ll(e, this.from, this.to) ? Se.fail("Structure replace would overwrite content") : Se.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new gt([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Oe(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new Oe(n.pos, Math.max(n.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof Oe) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? H.empty : new H(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Oe(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? H.empty : new H(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Oe(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new Oe(n.from, n.to, H.fromJSON(e, n.slice), !!n.structure);
  }
}
rt.jsonID("replace", Oe);
class Re extends rt {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Ll(e, this.from, this.gapFrom) || Ll(e, this.gapTo, this.to)))
      return Se.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return Se.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? Se.fromReplace(e, this.from, this.to, r) : Se.fail("Content does not fit in gap");
  }
  getMap() {
    return new gt([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new Re(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), s = e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || i < n.pos || s > r.pos ? null : new Re(n.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new Re(n.from, n.to, n.gapFrom, n.gapTo, H.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
rt.jsonID("replaceAround", Re);
function Ll(t, e, n) {
  let r = t.resolve(e), i = n - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function Ng(t, e, n, r) {
  let i = [], s = [], o, l;
  t.doc.nodesBetween(e, n, (a, c, d) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && d.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, n), p = r.addToSet(u);
      for (let m = 0; m < u.length; m++)
        u[m].isInSet(p) || (o && o.to == f && o.mark.eq(u[m]) ? o.to = h : i.push(o = new Gt(f, h, u[m])));
      l && l.to == f ? l.to = h : s.push(l = new vn(f, h, r));
    }
  }), i.forEach((a) => t.step(a)), s.forEach((a) => t.step(a));
}
function Lg(t, e, n, r) {
  let i = [], s = 0;
  t.doc.nodesBetween(e, n, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof yo) {
      let c = o.marks, d;
      for (; d = r.isInSet(c); )
        (a || (a = [])).push(d), c = d.removeFromSet(c);
    } else
      r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, n);
      for (let d = 0; d < a.length; d++) {
        let u = a[d], f;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == s - 1 && u.eq(i[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = s) : i.push({ style: u, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => t.step(new Gt(o.from, o.to, o.style)));
}
function Pg(t, e, n, r = n.contentMatch) {
  let i = t.doc.nodeAt(e), s = [], o = e + 1;
  for (let l = 0; l < i.childCount; l++) {
    let a = i.child(l), c = o + a.nodeSize, d = r.matchType(a.type);
    if (!d)
      s.push(new Oe(o, c, H.empty));
    else {
      r = d;
      for (let u = 0; u < a.marks.length; u++)
        n.allowsMarkType(a.marks[u].type) || t.step(new Gt(o, c, a.marks[u]));
    }
    o = c;
  }
  if (!r.validEnd) {
    let l = r.fillBefore(x.empty, !0);
    t.replace(o, o, new H(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    t.step(s[l]);
}
function Bg(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Yr(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth; ; --r) {
    let i = t.$from.node(r), s = t.$from.index(r), o = t.$to.indexAfter(r);
    if (r < t.depth && i.canReplace(s, o, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !Bg(i, s, o))
      break;
  }
  return null;
}
function Hg(t, e, n) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, d = x.empty, u = 0;
  for (let p = s, m = !1; p > n; p--)
    m || r.index(p) > 0 ? (m = !0, d = x.from(r.node(p).copy(d)), u++) : a--;
  let f = x.empty, h = 0;
  for (let p = s, m = !1; p > n; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, f = x.from(i.node(p).copy(f)), h++) : c++;
  t.step(new Re(a, c, o, l, new H(d.append(f), u, h), d.size - u, !0));
}
function Ma(t, e, n = null, r = t) {
  let i = Vg(t, e), s = i && Fg(r, e);
  return s ? i.map(Dc).concat({ type: e, attrs: n }).concat(s.map(Dc)) : null;
}
function Dc(t) {
  return { type: t, attrs: null };
}
function Vg(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, s = n.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return n.canReplaceWith(r, i, o) ? s : null;
}
function Fg(t, e) {
  let { parent: n, startIndex: r, endIndex: i } = t, s = n.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function zg(t, e, n) {
  let r = x.empty;
  for (let o = n.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = n[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = x.from(n[o].type.create(n[o].attrs, r));
  }
  let i = e.start, s = e.end;
  t.step(new Re(i, s, i, s, new H(r, 0, 0), n.length, !0));
}
function Gg(t, e, n, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = t.steps.length;
  t.doc.nodesBetween(e, n, (o, l) => {
    if (o.isTextblock && !o.hasMarkup(r, i) && Ug(t.doc, t.mapping.slice(s).map(l), r)) {
      t.clearIncompatible(t.mapping.slice(s).map(l, 1), r);
      let a = t.mapping.slice(s), c = a.map(l, 1), d = a.map(l + o.nodeSize, 1);
      return t.step(new Re(c, d, c + 1, d - 1, new H(x.from(r.create(i, null, o.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function Ug(t, e, n) {
  let r = t.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function $g(t, e, n, r, i) {
  let s = t.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  n || (n = s.type);
  let o = n.create(r, null, i || s.marks);
  if (s.isLeaf)
    return t.replaceWith(e, e + s.nodeSize, o);
  if (!n.validContent(s.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new Re(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new H(x.from(o), 0, 0), 1, !0));
}
function xr(t, e, n = 1, r) {
  let i = t.resolve(e), s = i.depth - n, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, d = n - 2; c > s; c--, d--) {
    let u = i.node(c), f = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(f, u.childCount), p = r && r[d + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[d] || u;
    if (!u.canReplace(f + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function Wg(t, e, n = 1, r) {
  let i = t.doc.resolve(e), s = x.empty, o = x.empty;
  for (let l = i.depth, a = i.depth - n, c = n - 1; l > a; l--, c--) {
    s = x.from(i.node(l).copy(s));
    let d = r && r[c];
    o = x.from(d ? d.type.create(d.attrs, o) : i.node(l).copy(o));
  }
  t.step(new Oe(e, e, new H(s.append(o), n, n), !0));
}
function Rn(t, e) {
  let n = t.resolve(e), r = n.index();
  return Wf(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Wf(t, e) {
  return !!(t && e && !t.isLeaf && t.canAppend(e));
}
function qf(t, e, n = -1) {
  let r = t.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : n > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && Wf(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = n < 0 ? r.before(i) : r.after(i);
  }
}
function qg(t, e, n) {
  let r = new Oe(e - n, e + n, H.empty, !0);
  t.step(r);
}
function jg(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, n))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, n))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function jf(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let i = n.content;
  for (let s = 0; s < n.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (n.openStart == 0 && n.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), d = !1;
      if (s == 1)
        d = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        d = u && c.canReplaceWith(a, a, u[0]);
      }
      if (d)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function Oa(t, e, n = e, r = H.empty) {
  if (e == n && !r.size)
    return null;
  let i = t.resolve(e), s = t.resolve(n);
  return Yf(i, s, r) ? new Oe(e, n, r) : new Yg(i, s, r).fit();
}
function Yf(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class Yg {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = x.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = x.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new H(s, o, l);
    return e > -1 ? new Re(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new Oe(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = n.firstChild;
      if (n.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      n = s.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = Yo(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], d, u = null;
          if (n == 1 && (o ? c.matchType(o.type) || (u = c.fillBefore(x.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: u };
          if (n == 2 && o && (d = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: d };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = Yo(e, n);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new H(e, n + 1, Math.max(r, i.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = Yo(e, n);
    if (i.childCount <= 1 && n > 0) {
      let s = e.size - n <= n + i.size;
      this.unplaced = new H(ai(e, n - 1, 1), n - 1, s ? n - 1 : r);
    } else
      this.unplaced = new H(ai(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: i, wrap: s }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, d = [], { match: u, type: f } = this.frontier[n];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        d.push(i.child(m));
      u = u.matchFragment(i);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = g, d.push(Kf(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = ci(this.placed, n, x.from(d)), this.frontier[n].match = u, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let v = g.lastChild;
      this.frontier.push({ type: v.type, match: v.contentMatchAt(v.childCount) }), g = v.content;
    }
    this.unplaced = p ? e == 0 ? H.empty : new H(ai(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new H(ai(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Ko(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
        let { match: r, type: i } = this.frontier[n], s = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), o = Ko(e, n, i, r, s);
        if (o) {
          for (let l = n - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], d = Ko(e, l, c, a, !0);
            if (!d || d.childCount)
              continue e;
          }
          return { depth: n, fit: o, move: s ? e.doc.resolve(e.after(n + 1)) : e };
        }
      }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = ci(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = ci(this.placed, this.depth, x.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(x.empty, !0);
    n.childCount && (this.placed = ci(this.placed, this.frontier.length, n));
  }
}
function ai(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(ai(t.firstChild.content, e - 1, n)));
}
function ci(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(ci(t.lastChild.content, e - 1, n)));
}
function Yo(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Kf(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Kf(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(x.empty, !0)))), t.copy(r);
}
function Ko(t, e, n, r, i) {
  let s = t.node(e), o = i ? t.indexAfter(e) : t.index(e);
  if (o == s.childCount && !n.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !Kg(n, s.content, o) ? l : null;
}
function Kg(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function Xg(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function Jg(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let i = t.doc.resolve(e), s = t.doc.resolve(n);
  if (Yf(i, s, r))
    return t.step(new Oe(e, n, r));
  let o = Jf(i, t.doc.resolve(n));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(f) > -1 ? l = f : i.before(f) == h && o.splice(1, 0, -f);
  }
  let a = o.indexOf(l), c = [], d = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = d - 1; f >= 0; f--) {
    let h = c[f].type, p = Xg(h);
    if (p && i.node(a).type != h)
      d = f;
    else if (p || !h.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + d + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], v = !0;
        g < 0 && (v = !1, g = -g);
        let E = i.node(g - 1), b = i.index(g - 1);
        if (E.canReplaceWith(b, b, p.type, p.marks))
          return t.replace(i.before(g), v ? s.after(g) : n, new H(Xf(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let u = t.steps.length;
  for (let f = o.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > u)); f--) {
    let h = o[f];
    h < 0 || (e = i.before(h), n = s.after(h));
  }
}
function Xf(t, e, n, r, i) {
  if (e < n) {
    let s = t.firstChild;
    t = t.replaceChild(0, s.copy(Xf(s.content, e + 1, n, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(t).append(t);
    t = o.append(s.matchFragment(o).fillBefore(x.empty, !0));
  }
  return t;
}
function Qg(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let i = jg(t.doc, e, r.type);
    i != null && (e = n = i);
  }
  t.replaceRange(e, n, new H(x.from(r), 0, 0));
}
function Zg(t, e, n) {
  let r = t.doc.resolve(e), i = t.doc.resolve(n), s = Jf(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return t.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return t.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && n > r.end(o) && i.end(o) - n != i.depth - o)
      return t.delete(r.before(o), n);
  t.delete(e, n);
}
function Jf(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = t.start(i);
    if (s < t.pos - (t.depth - i) || e.end(i) > e.pos + (e.depth - i) || t.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == t.depth && i == e.depth && t.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && n.push(i);
  }
  return n;
}
class _r extends rt {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Se.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in n.attrs)
      r[s] = n.attrs[s];
    r[this.attr] = this.value;
    let i = n.type.create(r, null, n.marks);
    return Se.fromReplace(e, this.pos, this.pos + 1, new H(x.from(i), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return gt.empty;
  }
  invert(e) {
    return new _r(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new _r(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _r(n.pos, n.attr, n.value);
  }
}
rt.jsonID("attr", _r);
let Pr = class extends Error {
};
Pr = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Pr.prototype = Object.create(Error.prototype);
Pr.prototype.constructor = Pr;
Pr.prototype.name = "TransformError";
class Aa {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Rr();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new Pr(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = H.empty) {
    let i = Oa(this.doc, e, n, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new H(x.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, H.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return Jg(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return Qg(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return Zg(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return Hg(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return qg(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return zg(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, i = null) {
    return Gg(this, e, n, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, i) {
    return $g(this, e, n, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new _r(e, n, r)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new bn(e, n)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    if (!(n instanceof ie)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (n = n.isInSet(r.marks), !n)
        return this;
    }
    return this.step(new Lr(e, n)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, n = 1, r) {
    return Wg(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Ng(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return Lg(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Pg(this, e, n, r), this;
  }
}
const Xo = /* @__PURE__ */ Object.create(null);
class q {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Qf(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = H.empty) {
    let r = n.content.lastChild, i = null;
    for (let l = 0; l < n.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], d = e.mapping.slice(s);
      e.replaceRange(d.map(a.pos), d.map(c.pos), l ? H.empty : n), l == 0 && Pc(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), d = a.map(l.pos);
      s ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, n), Pc(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let i = e.parent.inlineContent ? new Y(e) : yr(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = n < 0 ? yr(e.node(0), e.node(s), e.before(s + 1), e.index(s), n, r) : yr(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, n, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new Rt(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return yr(e, e, 0, 0, 1) || new Rt(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return yr(e, e, e.content.size, e.childCount, -1) || new Rt(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Xo[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in Xo)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Xo[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return Y.between(this.$anchor, this.$head).getBookmark();
  }
}
q.prototype.visible = !0;
class Qf {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Nc = !1;
function Lc(t) {
  !Nc && !t.parent.inlineContent && (Nc = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class Y extends q {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    Lc(e), Lc(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return q.near(r);
    let i = e.resolve(n.map(this.anchor));
    return new Y(i.parent.inlineContent ? i : r, r);
  }
  replace(e, n = H.empty) {
    if (super.replace(e, n), n == H.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof Y && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Eo(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new Y(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let i = e.resolve(n);
    return new this(i, r == n ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let i = e.pos - n.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let s = q.findFrom(n, r, !0) || q.findFrom(n, -r, !0);
      if (s)
        n = s.$head;
      else
        return q.near(n, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = n : (e = (q.findFrom(e, -r, !0) || q.findFrom(e, r, !0)).$anchor, e.pos < n.pos != i < 0 && (e = n))), new Y(e, n);
  }
}
q.jsonID("text", Y);
class Eo {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Eo(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return Y.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class W extends q {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: i } = n.mapResult(this.anchor), s = e.resolve(i);
    return r ? q.near(s) : new W(s);
  }
  content() {
    return new H(x.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof W && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ra(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new W(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new W(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
W.prototype.visible = !1;
q.jsonID("node", W);
class Ra {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Eo(r, r) : new Ra(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && W.isSelectable(r) ? new W(n) : q.near(n);
  }
}
class Rt extends q {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = H.empty) {
    if (n == H.empty) {
      e.delete(0, e.doc.content.size);
      let r = q.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Rt(e);
  }
  map(e) {
    return new Rt(e);
  }
  eq(e) {
    return e instanceof Rt;
  }
  getBookmark() {
    return e0;
  }
}
q.jsonID("all", Rt);
const e0 = {
  map() {
    return this;
  },
  resolve(t) {
    return new Rt(t);
  }
};
function yr(t, e, n, r, i, s = !1) {
  if (e.inlineContent)
    return Y.create(t, n);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && W.isSelectable(l))
        return W.create(t, n - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = yr(t, l, n + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    n += l.nodeSize * i;
  }
  return null;
}
function Pc(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let i = t.steps[r];
  if (!(i instanceof Oe || i instanceof Re))
    return;
  let s = t.mapping.maps[r], o;
  s.forEach((l, a, c, d) => {
    o == null && (o = d);
  }), t.setSelection(q.near(t.doc.resolve(o), n));
}
const Bc = 1, ts = 2, Hc = 4;
class t0 extends Aa {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Bc) & ~ts, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & Bc) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= ts, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return ie.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & ts) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & ~ts, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, n = !0) {
    let r = this.selection;
    return n && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || ie.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, n, r) {
    let i = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = n), r = r ?? n, !e)
        return this.deleteRange(n, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(n);
        s = r == n ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(n, r, i.text(e, s)), this.selection.empty || this.setSelection(q.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, n) {
    return this.meta[typeof e == "string" ? e : e.key] = n, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= Hc, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Hc) > 0;
  }
}
function Vc(t, e) {
  return !e || !t ? t : t.bind(e);
}
class di {
  constructor(e, n, r) {
    this.name = e, this.init = Vc(n.init, r), this.apply = Vc(n.apply, r);
  }
}
const n0 = [
  new di("doc", {
    init(t) {
      return t.doc || t.schema.topNodeType.createAndFill();
    },
    apply(t) {
      return t.doc;
    }
  }),
  new di("selection", {
    init(t, e) {
      return t.selection || q.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    }
  }),
  new di("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, r) {
      return r.selection.$cursor ? t.storedMarks : null;
    }
  }),
  new di("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Jo {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = n0.slice(), n && n.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new di(r.key, r.spec.state, r));
    });
  }
}
class wr {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, n = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != n) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let n = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, d = a < n.length && l.spec.appendTransaction.call(l, a ? n.slice(a) : n, c, r);
          if (d && r.filterTransaction(d, o)) {
            if (d.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < o ? { state: r, n: n.length } : { state: this, n: 0 });
            }
            n.push(d), r = r.applyInner(d), s = !0;
          }
          i && (i[o] = { state: r, n: n.length });
        }
      }
      if (!s)
        return { state: r, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new wr(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      n[s.name] = s.apply(e, this[s.name], this, n);
    }
    return n;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new t0(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new Jo(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new wr(n);
    for (let i = 0; i < n.fields.length; i++)
      r[n.fields[i].name] = n.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let n = new Jo(this.schema, e.plugins), r = n.fields, i = new wr(n);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (n[r] = s.toJSON.call(i, this[i.key]));
      }
    return n;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, n, r) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Jo(e.schema, e.plugins), s = new wr(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = Kn.fromJSON(e.schema, n.doc);
      else if (o.name == "selection")
        s.selection = q.fromJSON(s.doc, n.selection);
      else if (o.name == "storedMarks")
        n.storedMarks && (s.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(n, l)) {
              s[o.name] = c.fromJSON.call(a, e, n[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function Zf(t, e, n) {
  for (let r in t) {
    let i = t[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Zf(i, e, {})), n[r] = i;
  }
  return n;
}
class me {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Zf(e.props, this, this.props), this.key = e.key ? e.key.key : eh("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Qo = /* @__PURE__ */ Object.create(null);
function eh(t) {
  return t in Qo ? t + "$" + ++Qo[t] : (Qo[t] = 0, t + "$");
}
class Ie {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = eh(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const lt = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Ci = function(t) {
  let e = t.assignedSlot || t.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Fc = null;
const Zt = function(t, e, n) {
  let r = Fc || (Fc = document.createRange());
  return r.setEnd(t, n ?? t.nodeValue.length), r.setStart(t, e || 0), r;
}, rr = function(t, e, n, r) {
  return n && (zc(t, e, n, r, -1) || zc(t, e, n, r, 1));
}, r0 = /^(img|br|input|textarea|hr)$/i;
function zc(t, e, n, r, i) {
  for (; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Ft(t))) {
      let s = t.parentNode;
      if (!s || s.nodeType != 1 || s0(t) || r0.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = lt(t) + (i < 0 ? 0 : 1), t = s;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (i < 0 ? -1 : 0)], t.contentEditable == "false")
        return !1;
      e = i < 0 ? Ft(t) : 0;
    } else
      return !1;
  }
}
function Ft(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function i0(t, e, n) {
  for (let r = e == 0, i = e == Ft(t); r || i; ) {
    if (t == n)
      return !0;
    let s = lt(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && s == 0, i = i && s == Ft(t);
  }
}
function s0(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const vo = function(t) {
  return t.focusNode && rr(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function Bn(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
function o0(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function l0(t, e, n) {
  if (t.caretPositionFromPoint)
    try {
      let r = t.caretPositionFromPoint(e, n);
      if (r)
        return { node: r.offsetNode, offset: r.offset };
    } catch {
    }
  if (t.caretRangeFromPoint) {
    let r = t.caretRangeFromPoint(e, n);
    if (r)
      return { node: r.startContainer, offset: r.startOffset };
  }
}
const Wt = typeof navigator < "u" ? navigator : null, Gc = typeof document < "u" ? document : null, xn = Wt && Wt.userAgent || "", Pl = /Edge\/(\d+)/.exec(xn), th = /MSIE \d/.exec(xn), Bl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(xn), Ze = !!(th || Bl || Pl), Tn = th ? document.documentMode : Bl ? +Bl[1] : Pl ? +Pl[1] : 0, xt = !Ze && /gecko\/(\d+)/i.test(xn);
xt && +(/Firefox\/(\d+)/.exec(xn) || [0, 0])[1];
const Hl = !Ze && /Chrome\/(\d+)/.exec(xn), Be = !!Hl, a0 = Hl ? +Hl[1] : 0, We = !Ze && !!Wt && /Apple Computer/.test(Wt.vendor), Br = We && (/Mobile\/\w+/.test(xn) || !!Wt && Wt.maxTouchPoints > 2), mt = Br || (Wt ? /Mac/.test(Wt.platform) : !1), c0 = Wt ? /Win/.test(Wt.platform) : !1, Ct = /Android \d/.test(xn), bo = !!Gc && "webkitFontSmoothing" in Gc.documentElement.style, d0 = bo ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function u0(t) {
  return {
    left: 0,
    right: t.documentElement.clientWidth,
    top: 0,
    bottom: t.documentElement.clientHeight
  };
}
function cn(t, e) {
  return typeof t == "number" ? t : t[e];
}
function f0(t) {
  let e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, r = e.height / t.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t.clientWidth * n,
    top: e.top,
    bottom: e.top + t.clientHeight * r
  };
}
function Uc(t, e, n) {
  let r = t.someProp("scrollThreshold") || 0, i = t.someProp("scrollMargin") || 5, s = t.dom.ownerDocument;
  for (let o = n || t.dom; o; o = Ci(o)) {
    if (o.nodeType != 1)
      continue;
    let l = o, a = l == s.body, c = a ? u0(s) : f0(l), d = 0, u = 0;
    if (e.top < c.top + cn(r, "top") ? u = -(c.top - e.top + cn(i, "top")) : e.bottom > c.bottom - cn(r, "bottom") && (u = e.bottom - c.bottom + cn(i, "bottom")), e.left < c.left + cn(r, "left") ? d = -(c.left - e.left + cn(i, "left")) : e.right > c.right - cn(r, "right") && (d = e.right - c.right + cn(i, "right")), d || u)
      if (a)
        s.defaultView.scrollBy(d, u);
      else {
        let f = l.scrollLeft, h = l.scrollTop;
        u && (l.scrollTop += u), d && (l.scrollLeft += d);
        let p = l.scrollLeft - f, m = l.scrollTop - h;
        e = { left: e.left - p, top: e.top - m, right: e.right - p, bottom: e.bottom - m };
      }
    if (a)
      break;
  }
}
function h0(t) {
  let e = t.dom.getBoundingClientRect(), n = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = n + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = t.root.elementFromPoint(s, o);
    if (!l || l == t.dom || !t.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= n - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: nh(t.dom) };
}
function nh(t) {
  let e = [], n = t.ownerDocument;
  for (let r = t; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n); r = Ci(r))
    ;
  return e;
}
function p0({ refDOM: t, refTop: e, stack: n }) {
  let r = t ? t.getBoundingClientRect().top : 0;
  rh(n, r == 0 ? 0 : r - e);
}
function rh(t, e) {
  for (let n = 0; n < t.length; n++) {
    let { dom: r, top: i, left: s } = t[n];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let pr = null;
function m0(t) {
  if (t.setActive)
    return t.setActive();
  if (pr)
    return t.focus(pr);
  let e = nh(t);
  t.focus(pr == null ? {
    get preventScroll() {
      return pr = { preventScroll: !0 }, !0;
    }
  } : void 0), pr || (pr = !1, rh(e, 0));
}
function ih(t, e) {
  let n, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
  for (let d = t.firstChild, u = 0; d; d = d.nextSibling, u++) {
    let f;
    if (d.nodeType == 1)
      f = d.getClientRects();
    else if (d.nodeType == 3)
      f = Zt(d).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= o && p.bottom >= l) {
        o = Math.max(p.bottom, o), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          n = d, r = m, i = m && n.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, d.nodeType == 1 && m && (s = u + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = d, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !n && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = u + 1);
    }
  }
  return !n && a && (n = a, i = c, r = 0), n && n.nodeType == 3 ? g0(n, i) : !n || r && n.nodeType == 1 ? { node: t, offset: s } : ih(n, i);
}
function g0(t, e) {
  let n = t.nodeValue.length, r = document.createRange();
  for (let i = 0; i < n; i++) {
    r.setEnd(t, i + 1), r.setStart(t, i);
    let s = fn(r, 1);
    if (s.top != s.bottom && xa(e, s))
      return { node: t, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: t, offset: 0 };
}
function xa(t, e) {
  return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
}
function y0(t, e) {
  let n = t.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function E0(t, e, n) {
  let { node: r, offset: i } = ih(e, n), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && n.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return t.docView.posFromDOM(r, i, s);
}
function v0(t, e, n, r) {
  let i = -1;
  for (let s = e, o = !1; s != t.dom; ) {
    let l = t.docView.nearestDesc(s, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent && !o || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && !o && (o = !0, a.left > r.left || a.top > r.top ? i = l.posBefore : (a.right < r.left || a.bottom < r.top) && (i = l.posAfter)), !l.contentDOM && i < 0)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    s = l.dom.parentNode;
  }
  return i > -1 ? i : t.docView.posFromDOM(e, n, -1);
}
function sh(t, e, n) {
  let r = t.childNodes.length;
  if (r && n.top < n.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), s = i; ; ) {
      let o = t.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (xa(e, c))
            return sh(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return t;
}
function b0(t, e) {
  let n = t.dom.ownerDocument, r, i = 0, s = l0(n, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top), l;
  if (!o || !t.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = t.dom.getBoundingClientRect();
    if (!xa(e, c) || (o = sh(t.dom, e, c), !o))
      return null;
  }
  if (We)
    for (let c = o; r && c; c = Ci(c))
      c.draggable && (r = void 0);
  if (o = y0(o, e), r) {
    if (xt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let c = r.childNodes[i], d;
      c.nodeName == "IMG" && (d = c.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++;
    }
    r == t.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = t.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = v0(t, r, i, e));
  }
  l == null && (l = E0(t, o, e));
  let a = t.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function $c(t) {
  return t.top < t.bottom || t.left < t.right;
}
function fn(t, e) {
  let n = t.getClientRects();
  if (n.length) {
    let r = n[e < 0 ? 0 : n.length - 1];
    if ($c(r))
      return r;
  }
  return Array.prototype.find.call(n, $c) || t.getBoundingClientRect();
}
const w0 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function oh(t, e, n) {
  let { node: r, offset: i, atom: s } = t.docView.domFromPos(e, n < 0 ? -1 : 1), o = bo || xt;
  if (r.nodeType == 3)
    if (o && (w0.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let a = fn(Zt(r, i, i), n);
      if (xt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = fn(Zt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let d = fn(Zt(r, i, i + 1), -1);
          if (d.top != a.top)
            return ni(d, d.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, d = n < 0 ? 1 : -1;
      return n < 0 && !i ? (c++, d = -1) : n >= 0 && i == r.nodeValue.length ? (a--, d = 1) : n < 0 ? a-- : c++, ni(fn(Zt(r, a, c), d), d < 0);
    }
  if (!t.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (n < 0 || i == Ft(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Zo(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < Ft(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Zo(a.getBoundingClientRect(), !0);
    }
    return Zo(r.getBoundingClientRect(), n >= 0);
  }
  if (s == null && i && (n < 0 || i == Ft(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? Zt(a, Ft(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return ni(fn(c, 1), !1);
  }
  if (s == null && i < Ft(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? Zt(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return ni(fn(c, -1), !0);
  }
  return ni(fn(r.nodeType == 3 ? Zt(r) : r, -n), n >= 0);
}
function ni(t, e) {
  if (t.width == 0)
    return t;
  let n = e ? t.left : t.right;
  return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function Zo(t, e) {
  if (t.height == 0)
    return t;
  let n = e ? t.top : t.bottom;
  return { top: n, bottom: n, left: t.left, right: t.right };
}
function lh(t, e, n) {
  let r = t.state, i = t.root.activeElement;
  r != e && t.updateState(e), i != t.dom && t.focus();
  try {
    return n();
  } finally {
    r != e && t.updateState(r), i != t.dom && i && i.focus();
  }
}
function T0(t, e, n) {
  let r = e.selection, i = n == "up" ? r.$from : r.$to;
  return lh(t, e, () => {
    let { node: s } = t.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let l = t.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = oh(t, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = Zt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d.bottom > d.top + 1 && (n == "up" ? o.top - d.top > (d.bottom - o.top) * 2 : d.bottom - o.bottom > (o.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const S0 = /[\u0590-\u08ac]/;
function I0(t, e, n) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = t.domSelection();
  return !S0.test(r.parent.textContent) || !l.modify ? n == "left" || n == "backward" ? s : o : lh(t, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: d, anchorOffset: u } = t.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", n, "character");
    let h = r.depth ? t.docView.domAfterPos(r.before()) : t.dom, { focusNode: p, focusOffset: m } = t.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(d, u), a && (a != d || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  });
}
let Wc = null, qc = null, jc = !1;
function C0(t, e, n) {
  return Wc == e && qc == n ? jc : (Wc = e, qc = n, jc = n == "up" || n == "down" ? T0(t, e, n) : I0(t, e, n));
}
const vt = 0, Yc = 1, zn = 2, qt = 3;
class Hi {
  constructor(e, n, r, i) {
    this.parent = e, this.children = n, this.dom = r, this.contentDOM = i, this.dirty = vt, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, n, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let n = 0; n < this.children.length; n++)
      e += this.children[n].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let n = 0, r = this.posAtStart; ; n++) {
      let i = this.children[n];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, n, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[n - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[n];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = n > lt(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (n == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && n == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!n || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let r = n; r; r = r.parent)
      if (r == this)
        return n;
  }
  posFromDOM(e, n, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, n, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, r = 0; n < this.children.length; n++) {
      let i = this.children[n], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof ch) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, n);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof ah && s.side >= 0; r--)
      ;
    if (n <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && n && o && !s.border && !s.domAtom ? s.domFromPos(s.size, n) : { node: this.contentDOM, offset: s ? lt(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, n) : { node: this.contentDOM, offset: s ? lt(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let d = o + a.border;
        if (e >= d && n <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, n, d);
        e = o;
        for (let u = l; u > 0; u--) {
          let f = this.children[u - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = lt(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > n || l == this.children.length - 1)) {
        n = c;
        for (let d = l + 1; d < this.children.length; d++) {
          let u = this.children[d];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            s = lt(u.dom);
            break;
          }
          n += u.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: r } = this.domFromPos(e, 0);
    if (n.nodeType != 1 || r == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, r, i = !1) {
    let s = Math.min(e, n), o = Math.max(e, n);
    for (let f = 0, h = 0; f < this.children.length; f++) {
      let p = this.children[f], m = h + p.size;
      if (s > h && o < m)
        return p.setSelection(e - h - p.border, n - h - p.border, r, i);
      h = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = n == e ? l : this.domFromPos(n, n ? -1 : 1), c = r.getSelection(), d = !1;
    if ((xt || We) && e == n) {
      let { node: f, offset: h } = l;
      if (f.nodeType == 3) {
        if (d = !!(h && f.nodeValue[h - 1] == `
`), d && h == f.nodeValue.length)
          for (let p = f, m; p; p = p.parentNode) {
            if (m = p.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: lt(m) + 1 });
              break;
            }
            let g = p.pmViewDesc;
            if (g && g.node && g.node.isBlock)
              break;
          }
      } else {
        let p = f.childNodes[h - 1];
        d = p && (p.nodeName == "BR" || p.contentEditable == "false");
      }
    }
    if (xt && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let f = c.focusNode.childNodes[c.focusOffset];
      f && f.contentEditable == "false" && (i = !0);
    }
    if (!(i || d && We) && rr(l.node, l.offset, c.anchorNode, c.anchorOffset) && rr(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let u = !1;
    if ((c.extend || e == n) && !d) {
      c.collapse(l.node, l.offset);
      try {
        e != n && c.extend(a.node, a.offset), u = !0;
      } catch {
      }
    }
    if (!u) {
      if (e > n) {
        let h = l;
        l = a, a = h;
      }
      let f = document.createRange();
      f.setEnd(a.node, a.offset), f.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(f);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, n) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && n >= r : e < o && n > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && n <= a) {
          this.dirty = e == r || n == o ? zn : Yc, e == l && n == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = qt : s.markDirty(e - l, n - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? zn : qt;
      }
      r = o;
    }
    this.dirty = zn;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let r = e == 1 ? zn : Yc;
      n.dirty < r && (n.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
}
class ah extends Hi {
  constructor(e, n, r, i) {
    let s, o = n.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !n.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = n, this.widget = n, s = this;
  }
  matchesWidget(e) {
    return this.dirty == vt && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let n = this.widget.spec.stopEvent;
    return n ? n(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class M0 extends Hi {
  constructor(e, n, r, i) {
    super(e, [], n, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, n) {
    return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class ir extends Hi {
  constructor(e, n, r, i) {
    super(e, [], r, i), this.mark = n;
  }
  static create(e, n, r, i) {
    let s = i.nodeViews[n.type.name], o = s && s(n, i, r);
    return (!o || !o.dom) && (o = zt.renderSpec(document, n.type.spec.toDOM(n, r))), new ir(e, n, o.dom, o.contentDOM || o.dom);
  }
  parseRule() {
    return this.dirty & qt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM || void 0 };
  }
  matchesMark(e) {
    return this.dirty != qt && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != vt) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = vt;
    }
  }
  slice(e, n, r) {
    let i = ir.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    n < o && (s = zl(s, n, o, r)), e > 0 && (s = zl(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
}
class Sn extends Hi {
  constructor(e, n, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = n, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, n, r, i, s, o) {
    let l = s.nodeViews[n.type.name], a, c = l && l(n, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), d = c && c.dom, u = c && c.contentDOM;
    if (n.isText) {
      if (!d)
        d = document.createTextNode(n.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      d || ({ dom: d, contentDOM: u } = zt.renderSpec(document, n.type.spec.toDOM(n)));
    !u && !n.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), n.type.spec.draggable && (d.draggable = !0));
    let f = d;
    return d = fh(d, r, n), c ? a = new O0(e, n, r, i, d, u || null, f, c, s, o + 1) : n.isText ? new wo(e, n, r, i, d, f, s) : new Sn(e, n, r, i, d, u || null, f, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let n = this.children.length - 1; n >= 0; n--) {
        let r = this.children[n];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => x.empty);
    }
    return e;
  }
  matchesNode(e, n, r) {
    return this.dirty == vt && e.eq(this.node) && Fl(n, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, n) {
    let r = this.node.inlineContent, i = n, s = e.composing ? this.localCompositionInfo(e, n) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new R0(this, o && o.node, e);
    k0(this.node, this.innerDeco, (c, d, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(d == this.node.childCount ? ie.none : this.node.child(d).marks, r, e), a.placeWidget(c, e, i);
    }, (c, d, u, f) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, d, u, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, d, u, h, e) || a.updateNextNode(c, d, u, e, f, i) || a.addNode(c, d, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == zn) && (o && this.protectLocalComposition(e, o), dh(this.contentDOM, this.children, e), Br && D0(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof Y) || r < n || i > n + this.node.content.size)
      return null;
    let s = e.domSelectionRange(), o = N0(s.focusNode, s.focusOffset);
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let l = o.nodeValue, a = L0(this.node.content, l, r - n, i - n);
      return a < 0 ? null : { node: o, pos: a, text: l };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: r, text: i }) {
    if (this.getDesc(n))
      return;
    let s = n;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new M0(this, s, n, i);
    e.input.compositionNodes.push(o), this.children = zl(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, r, i) {
    return this.dirty == qt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, i), !0);
  }
  updateInner(e, n, r, i) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = vt;
  }
  updateOuterDeco(e) {
    if (Fl(e, this.outerDeco))
      return;
    let n = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = uh(this.dom, this.nodeDOM, Vl(this.outerDeco, this.node, n), Vl(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable");
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Kc(t, e, n, r, i) {
  fh(r, e, t);
  let s = new Sn(void 0, t, e, n, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class wo extends Sn {
  constructor(e, n, r, i, s, o, l) {
    super(e, n, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, n, r, i) {
    return this.dirty == qt || this.dirty != vt && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != vt || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = vt, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, n, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, r) {
    let i = this.node.cut(e, n), s = document.createTextNode(i.text);
    return new wo(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = qt);
  }
  get domAtom() {
    return !1;
  }
}
class ch extends Hi {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == vt && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class O0 extends Sn {
  constructor(e, n, r, i, s, o, l, a, c, d) {
    super(e, n, r, i, s, o, l, c, d), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, r, i) {
    if (this.dirty == qt)
      return !1;
    if (this.spec.update) {
      let s = this.spec.update(e, n, r);
      return s && this.updateInner(e, n, r, i), s;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, n, r) : super.setSelection(e, n, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function dh(t, e, n) {
  let r = t.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == t) {
      for (; l != r; )
        r = Xc(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, t.insertBefore(l, r);
    if (o instanceof ir) {
      let a = r ? r.previousSibling : t.lastChild;
      dh(o.contentDOM, o.children, n), r = a ? a.nextSibling : t.firstChild;
    }
  }
  for (; r; )
    r = Xc(r), i = !0;
  i && n.trackWrites == t && (n.trackWrites = null);
}
const hi = function(t) {
  t && (this.nodeName = t);
};
hi.prototype = /* @__PURE__ */ Object.create(null);
const Gn = [new hi()];
function Vl(t, e, n) {
  if (t.length == 0)
    return Gn;
  let r = n ? Gn[0] : new hi(), i = [r];
  for (let s = 0; s < t.length; s++) {
    let o = t[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new hi(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (n && i.length == 1 && i.push(r = new hi(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function uh(t, e, n, r) {
  if (n == Gn && r == Gn)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = n[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != t && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = Gn[0]), i = a;
    }
    A0(i, l || Gn[0], o);
  }
  return i;
}
function A0(t, e, n) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in n) && t.removeAttribute(r);
  for (let r in n)
    r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && t.setAttribute(r, n[r]);
  if (e.class != n.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && t.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && t.classList.add(i[s]);
    t.classList.length == 0 && t.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        t.style.removeProperty(i[1]);
    }
    n.style && (t.style.cssText += n.style);
  }
}
function fh(t, e, n) {
  return uh(t, t, Gn, Vl(e, n, t.nodeType != 1));
}
function Fl(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].type.eq(e[n].type))
      return !1;
  return !0;
}
function Xc(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class R0 {
  constructor(e, n, r) {
    this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = x0(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let r = e; r < n; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, n - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, r) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = vt, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = ir.create(this.top, e[s], n, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, n, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, n, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, n, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == qt && o.dom == o.contentDOM && (o.dirty = zn), o.update(e, n, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof Sn) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != s)
          return !1;
        let d = a.dom, u, f = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != qt && Fl(n, a.outerDeco));
        if (!f && a.update(e, n, r, i))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!f && (u = this.recreateWrapper(a, e, n, r, i, o)))
          return this.top.children[this.index] = u, u.dirty = zn, u.updateChildren(i, o + 1), u.dirty = vt, this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, r, i, s, o) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content))
      return null;
    let l = Sn.create(this.top, n, r, i, s, o);
    if (!l.contentDOM)
      return null;
    l.children = e.children, e.children = [], e.destroy();
    for (let a of l.children)
      a.parent = l;
    return l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, r, i, s) {
    let o = Sn.create(this.top, e, n, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, n, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new ah(this.top, e, n, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof ir; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof wo) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((We || Be) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new ch(this.top, [], r, null);
      n != this.top ? n.children.push(i) : n.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function x0(t, e) {
  let n = e, r = n.children.length, i = t.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = n.children[r - 1];
          if (c instanceof ir)
            n = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (n == e)
            break e;
          r = n.parent.children.indexOf(n), n = n.parent;
        }
      let a = l.node;
      if (a) {
        if (a != t.child(i - 1))
          break;
        --i, s.set(l, i), o.push(l);
      }
    }
  return { index: i, matched: s, matches: o.reverse() };
}
function _0(t, e) {
  return t.type.side - e.type.side;
}
function k0(t, e, n, r) {
  let i = e.locals(t), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < t.childCount; c++) {
      let d = t.child(c);
      r(d, i, e.forChild(s, d), c), s += d.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    if (o < i.length && i[o].to == s) {
      let p = i[o++], m;
      for (; o < i.length && i[o].to == s; )
        (m || (m = [p])).push(i[o++]);
      if (m) {
        m.sort(_0);
        for (let g = 0; g < m.length; g++)
          n(m[g], c, !!a);
      } else
        n(p, c, !!a);
    }
    let d, u;
    if (a)
      u = -1, d = a, a = null;
    else if (c < t.childCount)
      u = c, d = t.child(c++);
    else
      break;
    for (let p = 0; p < l.length; p++)
      l[p].to <= s && l.splice(p--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let f = s + d.nodeSize;
    if (d.isText) {
      let p = f;
      o < i.length && i[o].from < p && (p = i[o].from);
      for (let m = 0; m < l.length; m++)
        l[m].to < p && (p = l[m].to);
      p < f && (a = d.cut(p - s), d = d.cut(0, p - s), f = p, u = -1);
    }
    let h = d.isInline && !d.isLeaf ? l.filter((p) => !p.inline) : l.slice();
    r(d, h, e.forChild(s, d), u), s = f;
  }
}
function D0(t) {
  if (t.nodeName == "UL" || t.nodeName == "OL") {
    let e = t.style.cssText;
    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
  }
}
function N0(t, e) {
  for (; ; ) {
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && e > 0) {
      if (t.childNodes.length > e && t.childNodes[e].nodeType == 3)
        return t.childNodes[e];
      t = t.childNodes[e - 1], e = Ft(t);
    } else if (t.nodeType == 1 && e < t.childNodes.length)
      t = t.childNodes[e], e = 0;
    else
      return null;
  }
}
function L0(t, e, n, r) {
  for (let i = 0, s = 0; i < t.childCount && s <= r; ) {
    let o = t.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < t.childCount; ) {
      let c = t.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= n) {
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= n)
        return l + c;
      if (n == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function zl(t, e, n, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < t.length; o++) {
    let a = t[o], c = l, d = l += a.size;
    c >= n || d <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), d > n && s.push(a.slice(n - c, a.size, r)));
  }
  return s;
}
function _a(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let i = t.docView.nearestDesc(n.focusNode), s = i && i.size == 0, o = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (vo(n)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let d = i.node;
    if (i && d.isAtom && W.isSelectable(d) && i.parent && !(d.isInline && i0(n.focusNode, n.focusOffset, i.dom))) {
      let u = i.posBefore;
      c = new W(o == u ? l : r.resolve(u));
    }
  } else {
    let d = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (d < 0)
      return null;
    a = r.resolve(d);
  }
  if (!c) {
    let d = e == "pointer" || t.state.selection.head < l.pos && !s ? 1 : -1;
    c = ka(t, a, l, d);
  }
  return c;
}
function hh(t) {
  return t.editable ? t.hasFocus() : mh(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function rn(t, e = !1) {
  let n = t.state.selection;
  if (ph(t, n), !!hh(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Be) {
      let r = t.domSelectionRange(), i = t.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && rr(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      B0(t);
    else {
      let { anchor: r, head: i } = n, s, o;
      Jc && !(n instanceof Y) && (n.$from.parent.inlineContent || (s = Qc(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = Qc(t, n.to))), t.docView.setSelection(r, i, t.root, e), Jc && (s && Zc(s), o && Zc(o)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && P0(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const Jc = We || Be && a0 < 63;
function Qc(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, s = r ? n.childNodes[r - 1] : null;
  if (We && i && i.contentEditable == "false")
    return el(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return el(i);
    if (s)
      return el(s);
  }
}
function el(t) {
  return t.contentEditable = "true", We && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function Zc(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function P0(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != i) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!hh(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function B0(t) {
  let e = t.domSelection(), n = document.createRange(), r = t.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? n.setEnd(r.parentNode, lt(r) + 1) : n.setEnd(r, 0), n.collapse(!1), e.removeAllRanges(), e.addRange(n), !i && !t.state.selection.visible && Ze && Tn <= 11 && (r.disabled = !0, r.disabled = !1);
}
function ph(t, e) {
  if (e instanceof W) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (ed(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    ed(t);
}
function ed(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function ka(t, e, n, r) {
  return t.someProp("createSelectionBetween", (i) => i(t, e, n)) || Y.between(e, n, r);
}
function td(t) {
  return t.editable && !t.hasFocus() ? !1 : mh(t);
}
function mh(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function H0(t) {
  let e = t.docView.domFromPos(t.state.selection.anchor, 0), n = t.domSelectionRange();
  return rr(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function Gl(t, e) {
  let { $anchor: n, $head: r } = t.selection, i = e > 0 ? n.max(r) : n.min(r), s = i.parent.inlineContent ? i.depth ? t.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && q.findFrom(s, e);
}
function Hn(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function nd(t, e, n) {
  let r = t.state.selection;
  if (r instanceof Y) {
    if (!r.empty || n.indexOf("s") > -1)
      return !1;
    if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
      let i = Gl(t.state, e);
      return i && i instanceof W ? Hn(t, i) : !1;
    } else if (!(mt && n.indexOf("m") > -1)) {
      let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
      if (!s || s.isText)
        return !1;
      let l = e < 0 ? i.pos - s.nodeSize : i.pos;
      return s.isAtom || (o = t.docView.descAt(l)) && !o.contentDOM ? W.isSelectable(s) ? Hn(t, new W(e < 0 ? t.state.doc.resolve(i.pos - s.nodeSize) : i)) : bo ? Hn(t, new Y(t.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
    }
  } else {
    if (r instanceof W && r.node.isInline)
      return Hn(t, new Y(e > 0 ? r.$to : r.$from));
    {
      let i = Gl(t.state, e);
      return i ? Hn(t, i) : !1;
    }
  }
}
function Vs(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function pi(t) {
  let e = t.pmViewDesc;
  return e && e.size == 0 && (t.nextSibling || t.nodeName != "BR");
}
function ri(t, e) {
  return e < 0 ? V0(t) : gh(t);
}
function V0(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i, s, o = !1;
  for (xt && n.nodeType == 1 && r < Vs(n) && pi(n.childNodes[r]) && (o = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (pi(l))
          i = n, s = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (yh(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && pi(l); )
          i = n.parentNode, s = lt(l), l = l.previousSibling;
        if (l)
          n = l, r = Vs(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Ul(t, n, r) : i && Ul(t, i, s);
}
function gh(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i = Vs(n), s, o;
  for (; ; )
    if (r < i) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (pi(l))
        s = n, o = ++r;
      else
        break;
    } else {
      if (yh(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && pi(l); )
          s = l.parentNode, o = lt(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, i = Vs(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && Ul(t, s, o);
}
function yh(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Ul(t, e, n) {
  let r = t.domSelection();
  if (vo(r)) {
    let s = document.createRange();
    s.setEnd(e, n), s.setStart(e, n), r.removeAllRanges(), r.addRange(s);
  } else
    r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: i } = t;
  setTimeout(() => {
    t.state == i && rn(t);
  }, 50);
}
function rd(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Be || c0) && n.parent.inlineContent) {
    let i = t.coordsAtPos(e);
    if (e > n.start()) {
      let s = t.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let s = t.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function id(t, e, n) {
  let r = t.state.selection;
  if (r instanceof Y && !r.empty || n.indexOf("s") > -1 || mt && n.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Gl(t.state, e);
    if (o && o instanceof W)
      return Hn(t, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof Rt ? q.near(o, e) : q.findFrom(o, e);
    return l ? Hn(t, l) : !1;
  }
  return !1;
}
function sd(t, e) {
  if (!(t.state.selection instanceof Y))
    return !0;
  let { $head: n, $anchor: r, empty: i } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (s && !s.isText) {
    let o = t.state.tr;
    return e < 0 ? o.delete(n.pos - s.nodeSize, n.pos) : o.delete(n.pos, n.pos + s.nodeSize), t.dispatch(o), !0;
  }
  return !1;
}
function od(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function F0(t) {
  if (!We || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    od(t, r, "true"), setTimeout(() => od(t, r, "false"), 20);
  }
  return !1;
}
function z0(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function G0(t, e) {
  let n = e.keyCode, r = z0(e);
  if (n == 8 || mt && n == 72 && r == "c")
    return sd(t, -1) || ri(t, -1);
  if (n == 46 && !e.shiftKey || mt && n == 68 && r == "c")
    return sd(t, 1) || ri(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || mt && n == 66 && r == "c") {
    let i = n == 37 ? rd(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return nd(t, i, r) || ri(t, i);
  } else if (n == 39 || mt && n == 70 && r == "c") {
    let i = n == 39 ? rd(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return nd(t, i, r) || ri(t, i);
  } else {
    if (n == 38 || mt && n == 80 && r == "c")
      return id(t, -1, r) || ri(t, -1);
    if (n == 40 || mt && n == 78 && r == "c")
      return F0(t) || id(t, 1, r) || gh(t);
    if (r == (mt ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function Eh(t, e) {
  t.someProp("transformCopied", (h) => {
    e = h(e, t);
  });
  let n = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = t.someProp("clipboardSerializer") || zt.fromSchema(t.state.schema), l = Ih(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, d, u = 0;
  for (; c && c.nodeType == 1 && (d = Sh[c.nodeName.toLowerCase()]); ) {
    for (let h = d.length - 1; h >= 0; h--) {
      let p = l.createElement(d[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (h) => h(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f };
}
function vh(t, e, n, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!n && !e)
    return null;
  let a = e && (r || s || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, s || r, t);
    }), s)
      return e ? new H(x.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : H.empty;
    let u = t.someProp("clipboardTextParser", (f) => f(e, i, r, t));
    if (u)
      l = u;
    else {
      let f = i.marks(), { schema: h } = t.state, p = zt.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (u) => {
      n = u(n, t);
    }), o = W0(n), bo && q0(o);
  let c = o && o.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let f = o.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      o = f;
    }
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || Nr.fromSchema(t.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || d),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !U0.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = j0(ld(l, +d[1], +d[2]), d[4]);
  else if (l = H.maxOpen($0(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, f = 0;
    for (let h = l.content.firstChild; u < l.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = ld(l, u, f);
  }
  return t.someProp("transformPasted", (u) => {
    l = u(l, t);
  }), l;
}
const U0 = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function $0(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let i = e.node(n).contentMatchAt(e.index(n)), s, o = [];
    if (t.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && wh(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = Th(o[o.length - 1], s.length));
        let d = bh(l, a);
        o.push(d), i = i.matchType(d.type), s = a;
      }
    }), o)
      return x.from(o);
  }
  return t;
}
function bh(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, x.from(t));
  return t;
}
function wh(t, e, n, r, i) {
  if (i < t.length && i < e.length && t[i] == e[i]) {
    let s = wh(t, e, n, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? n.type : t[i + 1]))
      return r.copy(r.content.append(x.from(bh(n, t, i + 1))));
  }
}
function Th(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, Th(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(x.empty, !0);
  return t.copy(n.append(r));
}
function $l(t, e, n, r, i, s) {
  let o = e < 0 ? t.firstChild : t.lastChild, l = o.content;
  return t.childCount > 1 && (s = 0), i < r - 1 && (l = $l(l, e, n, r, i + 1, s)), i >= n && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(x.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, o.copy(l));
}
function ld(t, e, n) {
  return e < t.openStart && (t = new H($l(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new H($l(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const Sh = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let ad = null;
function Ih() {
  return ad || (ad = document.implementation.createHTMLDocument("title"));
}
function W0(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = Ih().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), i;
  if ((i = r && Sh[r[1].toLowerCase()]) && (t = i.map((s) => "<" + s + ">").join("") + t + i.map((s) => "</" + s + ">").reverse().join("")), n.innerHTML = t, i)
    for (let s = 0; s < i.length; s++)
      n = n.querySelector(i[s]) || n;
  return n;
}
function q0(t) {
  let e = t.querySelectorAll(Be ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function j0(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: i, openStart: s, openEnd: o } = t;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = x.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new H(i, s, o);
}
const qe = {}, je = {}, Y0 = { touchstart: !0, touchmove: !0 };
class K0 {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function X0(t) {
  for (let e in qe) {
    let n = qe[e];
    t.dom.addEventListener(e, t.input.eventHandlers[e] = (r) => {
      Q0(t, r) && !Da(t, r) && (t.editable || !(r.type in je)) && n(t, r);
    }, Y0[e] ? { passive: !0 } : void 0);
  }
  We && t.dom.addEventListener("input", () => null), Wl(t);
}
function wn(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
function J0(t) {
  t.domObserver.stop();
  for (let e in t.input.eventHandlers)
    t.dom.removeEventListener(e, t.input.eventHandlers[e]);
  clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
}
function Wl(t) {
  t.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = (r) => Da(t, r));
  });
}
function Da(t, e) {
  return t.someProp("handleDOMEvents", (n) => {
    let r = n[e.type];
    return r ? r(t, e) || e.defaultPrevented : !1;
  });
}
function Q0(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target; n != t.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Z0(t, e) {
  !Da(t, e) && qe[e.type] && (t.editable || !(e.type in je)) && qe[e.type](t, e);
}
je.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !Mh(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Ct && Be && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), Br && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (i) => i(t, Bn(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else
      t.someProp("handleKeyDown", (r) => r(t, n)) || G0(t, n) ? n.preventDefault() : wn(t, "key");
};
je.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
je.keypress = (t, e) => {
  let n = e;
  if (Mh(t, n) || !n.charCode || n.ctrlKey && !n.altKey || mt && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (i) => i(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof Y) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(n.charCode);
    !/[\r\n]/.test(i) && !t.someProp("handleTextInput", (s) => s(t, r.$from.pos, r.$to.pos, i)) && t.dispatch(t.state.tr.insertText(i).scrollIntoView()), n.preventDefault();
  }
};
function To(t) {
  return { left: t.clientX, top: t.clientY };
}
function e1(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Na(t, e, n, r, i) {
  if (r == -1)
    return !1;
  let s = t.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (t.someProp(e, (l) => o > s.depth ? l(t, n, s.nodeAfter, s.before(o), i, !0) : l(t, n, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function kr(t, e, n) {
  t.focused || t.focus();
  let r = t.state.tr.setSelection(e);
  n == "pointer" && r.setMeta("pointer", !0), t.dispatch(r);
}
function t1(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && W.isSelectable(r) ? (kr(t, new W(n), "pointer"), !0) : !1;
}
function n1(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, i;
  n instanceof W && (r = n.node);
  let s = t.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (W.isSelectable(l)) {
      r && n.$from.depth > 0 && o >= n.$from.depth && s.before(n.$from.depth + 1) == n.$from.pos ? i = s.before(n.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (kr(t, W.create(t.state.doc, i), "pointer"), !0) : !1;
}
function r1(t, e, n, r, i) {
  return Na(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (s) => s(t, e, r)) || (i ? n1(t, n) : t1(t, n));
}
function i1(t, e, n, r) {
  return Na(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (i) => i(t, e, r));
}
function s1(t, e, n, r) {
  return Na(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (i) => i(t, e, r)) || o1(t, n, r);
}
function o1(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (kr(t, Y.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      kr(t, Y.create(r, l + 1, l + 1 + o.content.size), "pointer");
    else if (W.isSelectable(o))
      kr(t, W.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function La(t) {
  return Fs(t);
}
const Ch = mt ? "metaKey" : "ctrlKey";
qe.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = La(t), i = Date.now(), s = "singleClick";
  i - t.input.lastClick.time < 500 && e1(n, t.input.lastClick) && !n[Ch] && (t.input.lastClick.type == "singleClick" ? s = "doubleClick" : t.input.lastClick.type == "doubleClick" && (s = "tripleClick")), t.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: s };
  let o = t.posAtCoords(To(n));
  o && (s == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new l1(t, o, n, !!r)) : (s == "doubleClick" ? i1 : s1)(t, o.pos, o.inside, n) ? n.preventDefault() : wn(t, "pointer"));
};
class l1 {
  constructor(e, n, r, i) {
    this.view = e, this.pos = n, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Ch], this.allowDefault = r.shiftKey;
    let s, o;
    if (n.inside > -1)
      s = e.state.doc.nodeAt(n.inside), o = n.inside;
    else {
      let d = e.state.doc.resolve(n.pos);
      s = d.parent, o = d.depth ? d.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof W && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && xt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), wn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => rn(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(To(e))), this.updateAllowDefault(e), this.allowDefault || !n ? wn(this.view, "pointer") : r1(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    We && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Be && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (kr(this.view, q.near(this.view.state.doc.resolve(n.pos)), "pointer"), e.preventDefault()) : wn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), wn(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
qe.touchstart = (t) => {
  t.input.lastTouch = Date.now(), La(t), wn(t, "pointer");
};
qe.touchmove = (t) => {
  t.input.lastTouch = Date.now(), wn(t, "pointer");
};
qe.contextmenu = (t) => La(t);
function Mh(t, e) {
  return t.composing ? !0 : We && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const a1 = Ct ? 5e3 : -1;
je.compositionstart = je.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      t.markCursor = t.state.storedMarks || n.marks(), Fs(t, !0), t.markCursor = null;
    else if (Fs(t), xt && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          t.domSelection().collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    t.input.composing = !0;
  }
  Oh(t, a1);
};
je.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionID++, Oh(t, 20));
};
function Oh(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => Fs(t), e));
}
function Ah(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = c1()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function c1() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function Fs(t, e = !1) {
  if (!(Ct && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), Ah(t), e || t.docView && t.docView.dirty) {
      let n = _a(t);
      return n && !n.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(n)) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function d1(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Hr = Ze && Tn < 15 || Br && d0 < 604;
qe.copy = je.cut = (t, e) => {
  let n = e, r = t.state.selection, i = n.type == "cut";
  if (r.empty)
    return;
  let s = Hr ? null : n.clipboardData, o = r.content(), { dom: l, text: a } = Eh(t, o);
  s ? (n.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : d1(t, l), i && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function u1(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function f1(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Mi(t, r.value, null, i, e) : Mi(t, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Mi(t, e, n, r, i) {
  let s = vh(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, i, s || H.empty)))
    return !0;
  if (!s)
    return !1;
  let o = u1(s), l = o ? t.state.tr.replaceSelectionWith(o, r) : t.state.tr.replaceSelection(s);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
je.paste = (t, e) => {
  let n = e;
  if (t.composing && !Ct)
    return;
  let r = Hr ? null : n.clipboardData, i = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && Mi(t, r.getData("text/plain"), r.getData("text/html"), i, n) ? n.preventDefault() : f1(t, n);
};
class h1 {
  constructor(e, n) {
    this.slice = e, this.move = n;
  }
}
const Rh = mt ? "altKey" : "ctrlKey";
qe.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let i = t.state.selection, s = i.empty ? null : t.posAtCoords(To(n));
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof W ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      t.dispatch(t.state.tr.setSelection(W.create(t.state.doc, r.mightDrag.pos)));
    else if (n.target && n.target.nodeType == 1) {
      let c = t.docView.nearestDesc(n.target, !0);
      c && c.node.type.spec.draggable && c != t.docView && t.dispatch(t.state.tr.setSelection(W.create(t.state.doc, c.posBefore)));
    }
  }
  let o = t.state.selection.content(), { dom: l, text: a } = Eh(t, o);
  n.dataTransfer.clearData(), n.dataTransfer.setData(Hr ? "Text" : "text/html", l.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Hr || n.dataTransfer.setData("text/plain", a), t.dragging = new h1(o, !n[Rh]);
};
qe.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
je.dragover = je.dragenter = (t, e) => e.preventDefault();
je.drop = (t, e) => {
  let n = e, r = t.dragging;
  if (t.dragging = null, !n.dataTransfer)
    return;
  let i = t.posAtCoords(To(n));
  if (!i)
    return;
  let s = t.state.doc.resolve(i.pos), o = r && r.slice;
  o ? t.someProp("transformPasted", (p) => {
    o = p(o, t);
  }) : o = vh(t, n.dataTransfer.getData(Hr ? "Text" : "text/plain"), Hr ? null : n.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && !n[Rh]);
  if (t.someProp("handleDrop", (p) => p(t, n, o || H.empty, l))) {
    n.preventDefault();
    return;
  }
  if (!o)
    return;
  n.preventDefault();
  let a = o ? jf(t.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = t.state.tr;
  l && c.deleteSelection();
  let d = c.mapping.map(a), u = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, f = c.doc;
  if (u ? c.replaceRangeWith(d, d, o.content.firstChild) : c.replaceRange(d, d, o), c.doc.eq(f))
    return;
  let h = c.doc.resolve(d);
  if (u && W.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new W(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, v, E) => p = E), c.setSelection(ka(t, h, c.doc.resolve(p)));
  }
  t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"));
};
qe.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && rn(t);
  }, 20));
};
qe.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
qe.beforeinput = (t, e) => {
  if (Be && Ct && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (s) => s(t, Bn(8, "Backspace")))))
        return;
      let { $cursor: i } = t.state.selection;
      i && i.pos > 0 && t.dispatch(t.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in je)
  qe[t] = je[t];
function Oi(t, e) {
  if (t == e)
    return !0;
  for (let n in t)
    if (t[n] !== e[n])
      return !1;
  for (let n in e)
    if (!(n in t))
      return !1;
  return !0;
}
class Pa {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Xn, this.side = this.spec.side || 0;
  }
  map(e, n, r, i) {
    let { pos: s, deleted: o } = e.mapResult(n.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new Ve(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Pa && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Oi(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class In {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Xn;
  }
  map(e, n, r, i) {
    let s = e.map(n.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(n.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new Ve(s, o, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof In && Oi(this.attrs, e.attrs) && Oi(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof In;
  }
  destroy() {
  }
}
class Ba {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Xn;
  }
  map(e, n, r, i) {
    let s = e.mapResult(n.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(n.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new Ve(s.pos - r, o.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: i } = e.content.findIndex(n.from), s;
    return i == n.from && !(s = e.child(r)).isText && i + s.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Ba && Oi(this.attrs, e.attrs) && Oi(this.spec, e.spec);
  }
  destroy() {
  }
}
class Ve {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new Ve(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new Ve(e, e, new Pa(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, i) {
    return new Ve(e, n, new In(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, i) {
    return new Ve(e, n, new Ba(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof In;
  }
}
const Er = [], Xn = {};
class se {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Er, this.children = n.length ? n : Er;
  }
  /**
  Create a set of decorations, using the structure of the given
  document.
  */
  static create(e, n) {
    return n.length ? zs(n, e, 0, Xn) : Pe;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let i = [];
    return this.findInner(e ?? 0, n ?? 1e9, i, 0, r), i;
  }
  findInner(e, n, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= n && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < n && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, n - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == Pe || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Xn);
  }
  /**
  @internal
  */
  mapInner(e, n, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(n, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? p1(this.children, o || [], e, n, r, i, s) : o ? new se(o.sort(Jn), Er) : Pe;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Needs access to the current document to
  create the appropriate tree structure.
  */
  add(e, n) {
    return n.length ? this == Pe ? se.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, d;
      if (d = _h(n, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, d, c + 1) : i.splice(s, 0, a, a + l.nodeSize, zs(d, l, c + 1, Xn)), s += 3;
      }
    });
    let o = xh(s ? kh(n) : n, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new se(o.length ? this.local.concat(o).sort(Jn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Pe ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + n, a = r[s + 1] + n;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > l && u.to < a && (e[d] = null, (o || (o = [])).push(u));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != Pe ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, n) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new se(i, r) : Pe;
  }
  /**
  @internal
  */
  forChild(e, n) {
    if (this == Pe)
      return this;
    if (n.isLeaf)
      return se.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof In) {
        let c = Math.max(s, a.from) - s, d = Math.min(o, a.to) - s;
        c < d && (i || (i = [])).push(a.copy(c, d));
      }
    }
    if (i) {
      let l = new se(i.sort(Jn), Er);
      return r ? new mn([l, r]) : l;
    }
    return r || Pe;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof se) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Ha(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Pe)
      return Er;
    if (e.inlineContent || !this.local.some(In.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof In || n.push(this.local[r]);
    return n;
  }
}
se.empty = new se([], []);
se.removeOverlap = Ha;
const Pe = se.empty;
class mn {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((i) => i.map(e, n, Xn));
    return mn.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return se.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, n);
      s != Pe && (s instanceof mn ? r = r.concat(s.members) : r.push(s));
    }
    return mn.from(r);
  }
  eq(e) {
    if (!(e instanceof mn) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!n)
          n = s;
        else {
          r && (n = n.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            n.push(s[o]);
        }
    }
    return n ? Ha(r ? n : n.sort(Jn)) : Er;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Pe;
      case 1:
        return e[0];
      default:
        return new mn(e.every((n) => n instanceof se) ? e : e.reduce((n, r) => n.concat(r instanceof se ? r : r.members), []));
    }
  }
}
function p1(t, e, n, r, i, s, o) {
  let l = t.slice();
  for (let c = 0, d = s; c < n.maps.length; c++) {
    let u = 0;
    n.maps[c].forEach((f, h, p, m) => {
      let g = m - p - (h - f);
      for (let v = 0; v < l.length; v += 3) {
        let E = l[v + 1];
        if (E < 0 || f > E + d - u)
          continue;
        let b = l[v] + d - u;
        h >= b ? l[v + 1] = f <= b ? -2 : -1 : p >= i && g && (l[v] += g, l[v + 1] += g);
      }
      u += g;
    }), d = n.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = n.map(t[c] + s), u = d - i;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + s, -1), h = f - i, { index: p, offset: m } = r.content.findIndex(u), g = r.maybeChild(p);
      if (g && m == u && m + g.nodeSize == h) {
        let v = l[c + 2].mapInner(n, g, d + 1, t[c] + s + 1, o);
        v != Pe ? (l[c] = u, l[c + 1] = h, l[c + 2] = v) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = m1(l, t, e, n, i, s, o), d = zs(c, r, 0, o);
    e = d.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, f = 0; u < d.children.length; u += 3) {
      let h = d.children[u];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, d.children[u], d.children[u + 1], d.children[u + 2]);
    }
  }
  return new se(e.sort(Jn), l);
}
function xh(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    n.push(new Ve(i.from + e, i.to + e, i.type));
  }
  return n;
}
function m1(t, e, n, r, i, s, o) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let u = a.local[d].map(r, i, c);
      u ? n.push(u) : o.onRemove && o.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + s + 1);
  return n;
}
function _h(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, i = null;
  for (let s = 0, o; s < t.length; s++)
    (o = t[s]) && o.from > n && o.to < r && ((i || (i = [])).push(o), t[s] = null);
  return i;
}
function kh(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function zs(t, e, n, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = _h(t, l, a + n);
    if (c) {
      s = !0;
      let d = zs(c, l, n + a + 1, r);
      d != Pe && i.push(a, a + l.nodeSize, d);
    }
  });
  let o = xh(s ? kh(t) : t, -n).sort(Jn);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new se(o, i) : Pe;
}
function Jn(t, e) {
  return t.from - e.from || t.to - e.to;
}
function Ha(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let i = n + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == t && (e = t.slice()), e[i] = s.copy(s.from, r.to), cd(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, s.from), cd(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function cd(t, e, n) {
  for (; e < t.length && Jn(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
function tl(t) {
  let e = [];
  return t.someProp("decorations", (n) => {
    let r = n(t.state);
    r && r != Pe && e.push(r);
  }), t.cursorWrapper && e.push(se.create(t.state.doc, [t.cursorWrapper.deco])), mn.from(e);
}
const g1 = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, y1 = Ze && Tn <= 11;
class E1 {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class v1 {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new E1(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Ze && Tn <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), y1 && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, g1)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let n = 0; n < e.length; n++)
          this.queue.push(e[n]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (td(this.view)) {
      if (this.suppressingSelectionUpdates)
        return rn(this.view);
      if (Ze && Tn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && rr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let n = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Ci(s))
      n.add(s);
    for (let s = e.anchorNode; s; s = Ci(s))
      if (n.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let n = this.observer ? this.observer.takeRecords() : [];
    this.queue.length && (n = this.queue.concat(n), this.queue.length = 0);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && td(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < n.length; d++) {
        let u = this.registerMutation(n[d], a);
        u && (s = s < 0 ? u.from : Math.min(u.from, s), o = o < 0 ? u.to : Math.max(u.to, o), u.typeOver && (l = !0));
      }
    if (xt && a.length > 1) {
      let d = a.filter((u) => u.nodeName == "BR");
      if (d.length == 2) {
        let u = d[0], f = d[1];
        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove();
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && vo(r) && (c = _a(e)) && c.eq(q.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, rn(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), b1(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || rn(e), this.currentSelection.set(r));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++)
        n.push(e.addedNodes[d]);
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (Ze && Tn <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: u, nextSibling: f } = e.addedNodes[d];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (s = f);
        }
      let o = i && i.parentNode == e.target ? lt(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? lt(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : {
        from: r.posAtStart,
        to: r.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let dd = /* @__PURE__ */ new WeakMap(), ud = !1;
function b1(t) {
  if (!dd.has(t) && (dd.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
    if (t.requiresGeckoHackNode = xt, ud)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), ud = !0;
  }
}
function w1(t) {
  let e;
  function n(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  t.dom.addEventListener("beforeinput", n, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", n, !0);
  let r = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, l = t.domAtPos(t.state.selection.anchor);
  return rr(l.node, l.offset, s, o) && ([r, i, s, o] = [s, o, r, i]), { anchorNode: r, anchorOffset: i, focusNode: s, focusOffset: o };
}
function T1(t, e, n) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = t.docView.parseRange(e, n), a = t.domSelectionRange(), c, d = a.anchorNode;
  if (d && t.dom.contains(d.nodeType == 1 ? d : d.parentNode) && (c = [{ node: d, offset: a.anchorOffset }], vo(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), Be && t.input.lastKeyCode === 8)
    for (let g = s; g > i; g--) {
      let v = r.childNodes[g - 1], E = v.pmViewDesc;
      if (v.nodeName == "BR" && !E) {
        s = g;
        break;
      }
      if (!E || E.size)
        break;
    }
  let u = t.state.doc, f = t.someProp("domParser") || Nr.fromSchema(t.state.schema), h = u.resolve(o), p = null, m = f.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: S1,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, v = c[1] && c[1].pos;
    v == null && (v = g), p = { anchor: g + o, head: v + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function S1(t) {
  let e = t.pmViewDesc;
  if (e)
    return e.parseRule();
  if (t.nodeName == "BR" && t.parentNode) {
    if (We && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
      let n = document.createElement("div");
      return n.appendChild(document.createElement("li")), { skip: n };
    } else if (t.parentNode.lastChild == t || We && /^(tr|table)$/i.test(t.parentNode.nodeName))
      return { ignore: !0 };
  } else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const I1 = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function C1(t, e, n, r, i) {
  if (e < 0) {
    let S = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null, O = _a(t, S);
    if (O && !t.state.selection.eq(O)) {
      if (Be && Ct && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", (k) => k(t, Bn(13, "Enter"))))
        return;
      let P = t.state.tr.setSelection(O);
      S == "pointer" ? P.setMeta("pointer", !0) : S == "key" && P.scrollIntoView(), t.composing && P.setMeta("composition", t.input.compositionID), t.dispatch(P);
    }
    return;
  }
  let s = t.state.doc.resolve(e), o = s.sharedDepth(n);
  e = s.before(o + 1), n = t.state.doc.resolve(n).after(o + 1);
  let l = t.state.selection, a = T1(t, e, n), c = t.state.doc, d = c.slice(a.from, a.to), u, f;
  t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (u = t.state.selection.to, f = "end") : (u = t.state.selection.from, f = "start"), t.input.lastKeyCode = null;
  let h = A1(d.content, a.doc.content, a.from, u, f);
  if ((Br && t.input.lastIOSEnter > Date.now() - 225 || Ct) && i.some((S) => S.nodeType == 1 && !I1.test(S.nodeName)) && (!h || h.endA >= h.endB) && t.someProp("handleKeyDown", (S) => S(t, Bn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && l instanceof Y && !l.empty && l.$head.sameParent(l.$anchor) && !t.composing && !(a.sel && a.sel.anchor != a.sel.head))
      h = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (a.sel) {
        let S = fd(t, t.state.doc, a.sel);
        if (S && !S.eq(t.state.selection)) {
          let O = t.state.tr.setSelection(S);
          t.composing && O.setMeta("composition", t.input.compositionID), t.dispatch(O);
        }
      }
      return;
    }
  if (Be && t.cursorWrapper && a.sel && a.sel.anchor == t.cursorWrapper.deco.from && a.sel.head == a.sel.anchor) {
    let S = h.endB - h.start;
    a.sel = { anchor: a.sel.anchor + S, head: a.sel.anchor + S };
  }
  t.input.domChangeCount++, t.state.selection.from < t.state.selection.to && h.start == h.endB && t.state.selection instanceof Y && (h.start > t.state.selection.from && h.start <= t.state.selection.from + 2 && t.state.selection.from >= a.from ? h.start = t.state.selection.from : h.endA < t.state.selection.to && h.endA >= t.state.selection.to - 2 && t.state.selection.to <= a.to && (h.endB += t.state.selection.to - h.endA, h.endA = t.state.selection.to)), Ze && Tn <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > a.from && a.doc.textBetween(h.start - a.from - 1, h.start - a.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let p = a.doc.resolveNoCache(h.start - a.from), m = a.doc.resolveNoCache(h.endB - a.from), g = c.resolve(h.start), v = p.sameParent(m) && p.parent.inlineContent && g.end() >= h.endA, E;
  if ((Br && t.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((S) => S.nodeName == "DIV" || S.nodeName == "P")) || !v && p.pos < a.doc.content.size && !p.sameParent(m) && (E = q.findFrom(a.doc.resolve(p.pos + 1), 1, !0)) && E.head == m.pos) && t.someProp("handleKeyDown", (S) => S(t, Bn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (t.state.selection.anchor > h.start && O1(c, h.start, h.endA, p, m) && t.someProp("handleKeyDown", (S) => S(t, Bn(8, "Backspace")))) {
    Ct && Be && t.domObserver.suppressSelectionUpdates();
    return;
  }
  Be && Ct && h.endB == h.start && (t.input.lastAndroidDelete = Date.now()), Ct && !v && p.start() != m.start() && m.parentOffset == 0 && p.depth == m.depth && a.sel && a.sel.anchor == a.sel.head && a.sel.head == h.endA && (h.endB -= 2, m = a.doc.resolveNoCache(h.endB - a.from), setTimeout(() => {
    t.someProp("handleKeyDown", function(S) {
      return S(t, Bn(13, "Enter"));
    });
  }, 20));
  let b = h.start, y = h.endA, T, w, C;
  if (v) {
    if (p.pos == m.pos)
      Ze && Tn <= 11 && p.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => rn(t), 20)), T = t.state.tr.delete(b, y), w = c.resolve(h.start).marksAcross(c.resolve(h.endA));
    else if (
      // Adding or removing a mark
      h.endA == h.endB && (C = M1(p.parent.content.cut(p.parentOffset, m.parentOffset), g.parent.content.cut(g.parentOffset, h.endA - g.start())))
    )
      T = t.state.tr, C.type == "add" ? T.addMark(b, y, C.mark) : T.removeMark(b, y, C.mark);
    else if (p.parent.child(p.index()).isText && p.index() == m.index() - (m.textOffset ? 0 : 1)) {
      let S = p.parent.textBetween(p.parentOffset, m.parentOffset);
      if (t.someProp("handleTextInput", (O) => O(t, b, y, S)))
        return;
      T = t.state.tr.insertText(S, b, y);
    }
  }
  if (T || (T = t.state.tr.replace(b, y, a.doc.slice(h.start - a.from, h.endB - a.from))), a.sel) {
    let S = fd(t, T.doc, a.sel);
    S && !(Be && Ct && t.composing && S.empty && (h.start != h.endB || t.input.lastAndroidDelete < Date.now() - 100) && (S.head == b || S.head == T.mapping.map(y) - 1) || Ze && S.empty && S.head == b) && T.setSelection(S);
  }
  w && T.ensureMarks(w), t.composing && T.setMeta("composition", t.input.compositionID), t.dispatch(T.scrollIntoView());
}
function fd(t, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : ka(t, e.resolve(n.anchor), e.resolve(n.head));
}
function M1(t, e) {
  let n = t.firstChild.marks, r = e.firstChild.marks, i = n, s = r, o, l, a;
  for (let d = 0; d < r.length; d++)
    i = r[d].removeFromSet(i);
  for (let d = 0; d < n.length; d++)
    s = n[d].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let c = [];
  for (let d = 0; d < e.childCount; d++)
    c.push(a(e.child(d)));
  if (x.from(c).eq(t))
    return { mark: l, type: o };
}
function O1(t, e, n, r, i) {
  if (!r.parent.isTextblock || // The content must have shrunk
  n - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
  nl(r, !0, !1) < i.pos)
    return !1;
  let s = t.resolve(e);
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = t.resolve(nl(s, !0, !0));
  return !o.parent.isTextblock || o.pos > n || nl(o, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function nl(t, e, n) {
  let r = t.depth, i = e ? t.end() : t.pos;
  for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); )
    r--, i++, e = !1;
  if (n) {
    let s = t.node(r).maybeChild(t.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function A1(t, e, n, r, i) {
  let s = t.findDiffStart(e, n);
  if (s == null)
    return null;
  let { a: o, b: l } = t.findDiffEnd(e, n + t.size, n + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && t.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
class R1 {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new K0(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(yd), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = md(this), pd(this), this.nodeViews = gd(this), this.docView = Kc(this.state.doc, hd(this), tl(this), this.dom, this), this.domObserver = new v1(this, (r, i, s, o) => C1(this, r, i, s, o)), this.domObserver.start(), X0(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let n in e)
        this._props[n] = e[n];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Wl(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(yd), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let r in this._props)
      n[r] = this._props[r];
    n.state = this.state;
    for (let r in e)
      n[r] = e[r];
    this.update(n);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, n) {
    let r = this.state, i = !1, s = !1;
    e.storedMarks && this.composing && (Ah(this), s = !0), this.state = e;
    let o = r.plugins != e.plugins || this._props.plugins != n.plugins;
    if (o || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let f = gd(this);
      _1(f, this.nodeViews) && (this.nodeViews = f, i = !0);
    }
    (o || n.handleDOMEvents != this._props.handleDOMEvents) && Wl(this), this.editable = md(this), pd(this);
    let l = tl(this), a = hd(this), c = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", d = i || !this.docView.matchesNode(e.doc, a, l);
    (d || !e.selection.eq(r.selection)) && (s = !0);
    let u = c == "preserve" && s && this.dom.style.overflowAnchor == null && h0(this);
    if (s) {
      this.domObserver.stop();
      let f = d && (Ze || Be) && !this.composing && !r.selection.empty && !e.selection.empty && x1(r.selection, e.selection);
      if (d) {
        let h = Be ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, a, l, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Kc(e.doc, a, l, this.dom, this)), h && !this.trackWrites && (f = !0);
      }
      f || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && H0(this)) ? rn(this, f) : (ph(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && p0(u);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (n) => n(this)))
      if (this.state.selection instanceof W) {
        let n = this.docView.domAfterPos(this.state.selection.from);
        n.nodeType == 1 && Uc(this, n.getBoundingClientRect(), e);
      } else
        Uc(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let n = 0; n < this.directPlugins.length; n++) {
        let r = this.directPlugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let r = this.state.plugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let r = this.pluginViews[n];
        r.update && r.update(this, e);
      }
  }
  someProp(e, n) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = n ? n(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = n ? n(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = n ? n(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Ze) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && m0(this.dom), rn(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let n = this.dom.parentNode; n; n = n.parentNode)
        if (n.nodeType == 9 || n.nodeType == 11 && n.host)
          return n.getSelection || (Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()), this._root = n;
    }
    return e || document;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return b0(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, n = 1) {
    return oh(this, e, n);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, n = 0) {
    return this.docView.domFromPos(e, n);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let n = this.docView.descAt(e);
    return n ? n.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, n, r = -1) {
    let i = this.docView.posFromDOM(e, n, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, n) {
    return C0(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return Mi(this, "", e, !1, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return Mi(this, e, null, !0, n || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (J0(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], tl(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Z0(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let n = this._props.dispatchTransaction;
    n ? n.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    return We && this.root.nodeType === 11 && o0(this.dom.ownerDocument) == this.dom ? w1(this) : this.domSelection();
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function hd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t.state)), n)
      for (let r in n)
        r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]));
  }), e.translate || (e.translate = "no"), [Ve.node(0, t.state.doc.content.size, e)];
}
function pd(t) {
  if (t.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = { dom: e, deco: Ve.widget(t.state.selection.head, e, { raw: !0, marks: t.markCursor }) };
  } else
    t.cursorWrapper = null;
}
function md(t) {
  return !t.someProp("editable", (e) => e(t.state) === !1);
}
function x1(t, e) {
  let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
  return t.$anchor.start(n) != e.$anchor.start(n);
}
function gd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
}
function _1(t, e) {
  let n = 0, r = 0;
  for (let i in t) {
    if (t[i] != e[i])
      return !0;
    n++;
  }
  for (let i in e)
    r++;
  return n != r;
}
function yd(t) {
  if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var On = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Gs = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, k1 = typeof navigator < "u" && /Mac/.test(navigator.platform), D1 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Le = 0; Le < 10; Le++)
  On[48 + Le] = On[96 + Le] = String(Le);
for (var Le = 1; Le <= 24; Le++)
  On[Le + 111] = "F" + Le;
for (var Le = 65; Le <= 90; Le++)
  On[Le] = String.fromCharCode(Le + 32), Gs[Le] = String.fromCharCode(Le);
for (var rl in On)
  Gs.hasOwnProperty(rl) || (Gs[rl] = On[rl]);
function N1(t) {
  var e = k1 && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || D1 && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? Gs : On)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const L1 = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function P1(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      L1 ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), o && (n = "Meta-" + n), s && (n = "Shift-" + n), n;
}
function B1(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[P1(n)] = t[n];
  return e;
}
function il(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function H1(t) {
  return new me({ props: { handleKeyDown: Va(t) } });
}
function Va(t) {
  let e = B1(t);
  return function(n, r) {
    let i = N1(r), s, o = e[il(i, r)];
    if (o && o(n.state, n.dispatch, n))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[il(i, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (s = On[r.keyCode]) && s != i) {
        let l = e[il(s, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
const V1 = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function F1(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const z1 = (t, e, n) => {
  let r = F1(t, n);
  if (!r)
    return !1;
  let i = Dh(r);
  if (!i) {
    let o = r.blockRange(), l = o && Yr(o);
    return l == null ? !1 : (e && e(t.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (!s.type.spec.isolating && Ph(t, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Vr(s, "end") || W.isSelectable(s))) {
    let o = Oa(t.doc, r.before(), r.after(), H.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = t.tr.step(o);
        l.setSelection(Vr(s, "end") ? q.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : W.create(l.doc, i.pos - s.nodeSize)), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function Vr(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const G1 = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    s = Dh(r);
  }
  let o = s && s.nodeBefore;
  return !o || !W.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(W.create(t.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Dh(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function U1(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const $1 = (t, e, n) => {
  let r = U1(t, n);
  if (!r)
    return !1;
  let i = Nh(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (Ph(t, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Vr(s, "start") || W.isSelectable(s))) {
    let o = Oa(t.doc, r.before(), r.after(), H.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = t.tr.step(o);
        l.setSelection(Vr(s, "start") ? q.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : W.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(t.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, W1 = (t, e, n) => {
  let { $head: r, empty: i } = t.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    s = Nh(r);
  }
  let o = s && s.nodeAfter;
  return !o || !W.isSelectable(o) ? !1 : (e && e(t.tr.setSelection(W.create(t.doc, s.pos)).scrollIntoView()), !0);
};
function Nh(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const q1 = (t, e) => {
  let n = t.selection, r = n instanceof W, i;
  if (r) {
    if (n.node.isTextblock || !Rn(t.doc, n.from))
      return !1;
    i = n.from;
  } else if (i = qf(t.doc, n.from, -1), i == null)
    return !1;
  if (e) {
    let s = t.tr.join(i);
    r && s.setSelection(W.create(s.doc, i - t.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, j1 = (t, e) => {
  let n = t.selection, r;
  if (n instanceof W) {
    if (n.node.isTextblock || !Rn(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = qf(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, Y1 = (t, e) => {
  let { $from: n, $to: r } = t.selection, i = n.blockRange(r), s = i && Yr(i);
  return s == null ? !1 : (e && e(t.tr.lift(i, s).scrollIntoView()), !0);
}, K1 = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Lh(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const X1 = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let i = n.node(-1), s = n.indexAfter(-1), o = Lh(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(q.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, J1 = (t, e) => {
  let n = t.selection, { $from: r, $to: i } = n;
  if (n instanceof Rt || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = Lh(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = t.tr.insert(o, s.createAndFill());
    l.setSelection(Y.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Q1 = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let s = n.before();
    if (xr(t.doc, s))
      return e && e(t.tr.split(s).scrollIntoView()), !0;
  }
  let r = n.blockRange(), i = r && Yr(r);
  return i == null ? !1 : (e && e(t.tr.lift(r, i).scrollIntoView()), !0);
}, Z1 = (t, e) => {
  let { $from: n, to: r } = t.selection, i, s = n.sharedDepth(r);
  return s == 0 ? !1 : (i = n.before(s), e && e(t.tr.setSelection(W.create(t.doc, i))), !0);
};
function ey(t, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Rn(t.doc, e.pos)) ? !1 : (n && n(t.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function Ph(t, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, s, o;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (ey(t, e, n))
    return !0;
  let l = e.parent.canReplace(e.index(), e.index() + 1);
  if (l && (s = (o = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
    if (n) {
      let u = e.pos + i.nodeSize, f = x.empty;
      for (let m = s.length - 1; m >= 0; m--)
        f = x.from(s[m].create(null, f));
      f = x.from(r.copy(f));
      let h = t.tr.step(new Re(e.pos - 1, u, e.pos, u, new H(f, 1, 0), s.length, !0)), p = u + 2 * s.length;
      Rn(h.doc, p) && h.join(p), n(h.scrollIntoView());
    }
    return !0;
  }
  let a = q.findFrom(e, 1), c = a && a.$from.blockRange(a.$to), d = c && Yr(c);
  if (d != null && d >= e.depth)
    return n && n(t.tr.lift(c, d).scrollIntoView()), !0;
  if (l && Vr(i, "start", !0) && Vr(r, "end")) {
    let u = r, f = [];
    for (; f.push(u), !u.isTextblock; )
      u = u.lastChild;
    let h = i, p = 1;
    for (; !h.isTextblock; h = h.firstChild)
      p++;
    if (u.canReplace(u.childCount, u.childCount, h.content)) {
      if (n) {
        let m = x.empty;
        for (let v = f.length - 1; v >= 0; v--)
          m = x.from(f[v].copy(m));
        let g = t.tr.step(new Re(e.pos - f.length, e.pos + i.nodeSize, e.pos + p, e.pos + i.nodeSize - p, new H(m, f.length, 0), 0, !0));
        n(g.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Bh(t) {
  return function(e, n) {
    let r = e.selection, i = t < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (n && n(e.tr.setSelection(Y.create(e.doc, t < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const ty = Bh(-1), ny = Bh(1);
function ry(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: s } = n.selection, o = i.blockRange(s), l = o && Ma(o, t, e);
    return l ? (r && r(n.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function Ed(t, e = null) {
  return function(n, r) {
    let i = !1;
    for (let s = 0; s < n.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = n.selection.ranges[s];
      n.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(t, e)))
          if (a.type == t)
            i = !0;
          else {
            let d = n.doc.resolve(c), u = d.index();
            i = d.parent.canReplaceWith(u, u + 1, t);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = n.tr;
      for (let o = 0; o < n.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = n.selection.ranges[o];
        s.setBlockType(l, a, t, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function iy(t, e = null) {
  return function(n, r) {
    let { $from: i, $to: s } = n.selection, o = i.blockRange(s), l = !1, a = o;
    if (!o)
      return !1;
    if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(t) && o.startIndex == 0) {
      if (i.index(o.depth - 1) == 0)
        return !1;
      let d = n.doc.resolve(o.start - 2);
      a = new Ls(d, d, o.depth), o.endIndex < o.parent.childCount && (o = new Ls(i, n.doc.resolve(s.end(o.depth)), o.depth)), l = !0;
    }
    let c = Ma(a, t, e, o);
    return c ? (r && r(sy(n.tr, o, c, l, t).scrollIntoView()), !0) : !1;
  };
}
function sy(t, e, n, r, i) {
  let s = x.empty;
  for (let d = n.length - 1; d >= 0; d--)
    s = x.from(n[d].type.create(n[d].attrs, s));
  t.step(new Re(e.start - (r ? 2 : 0), e.end, e.start, e.end, new H(s, 0, 0), n.length, !0));
  let o = 0;
  for (let d = 0; d < n.length; d++)
    n[d].type == i && (o = d + 1);
  let l = n.length - o, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, f = !0; d < u; d++, f = !1)
    !f && xr(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(d).nodeSize;
  return t;
}
function oy(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == t);
    return s ? n ? r.node(s.depth - 1).type == t ? ly(e, n, t, s) : ay(e, n, s) : !0 : !1;
  };
}
function ly(t, e, n, r) {
  let i = t.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new Re(s - 1, o, s, o, new H(x.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Ls(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = Yr(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(s, -1) - 1;
  return Rn(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function ay(t, e, n) {
  let r = t.tr, i = n.parent;
  for (let h = n.end, p = n.endIndex - 1, m = n.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(n.start), o = s.nodeAfter;
  if (r.mapping.map(n.end) != n.start + s.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == i.childCount, c = s.node(-1), d = s.index(-1);
  if (!c.canReplace(d + (l ? 0 : 1), d + 1, o.content.append(a ? x.empty : x.from(i))))
    return !1;
  let u = s.pos, f = u + o.nodeSize;
  return r.step(new Re(u - (l ? 1 : 0), f + (a ? 1 : 0), u + 1, f - 1, new H((l ? x.empty : x.from(i.copy(x.empty))).append(a ? x.empty : x.from(i.copy(x.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function cy(t) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != t)
      return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type, d = x.from(c ? t.create() : null), u = new H(x.from(t.create(null, x.from(l.type.create(null, d)))), c ? 3 : 1, 0), f = s.start, h = s.end;
      n(e.tr.step(new Re(f - (c ? 3 : 1), h, f, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function So(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: i } = n, { storedMarks: s } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    filterTransaction: e.filterTransaction,
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = n.selection, i = n.doc, s = n.storedMarks, n;
    }
  };
}
class Io {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: n, state: r } = this, { view: i } = n, { tr: s } = r, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...d) => {
      const u = a(...d)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = [], a = !!e, c = e || s.tr, d = () => (!a && n && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((f) => f === !0)), u = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...m) => {
        const g = this.buildProps(c, n), v = h(...m)(g);
        return l.push(v), u;
      }])),
      run: d
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this, i = !1, s = e || r.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(n).map(([a, c]) => [a, (...d) => c(...d)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i;
    s.storedMarks && e.setStoredMarks(s.storedMarks);
    const l = {
      tr: e,
      editor: i,
      view: o,
      state: So({
        state: s,
        transaction: e
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(e),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...d) => c(...d)(l)]));
      }
    };
    return l;
  }
}
class dy {
  constructor() {
    this.callbacks = {};
  }
  on(e, n) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(n), this;
  }
  emit(e, ...n) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, n)), this;
  }
  off(e, n) {
    const r = this.callbacks[e];
    return r && (n ? this.callbacks[e] = r.filter((i) => i !== n) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function V(t, e, n) {
  return t.config[e] === void 0 && t.parent ? V(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? V(t.parent, e, n) : null
  }) : t.config[e];
}
function Co(t) {
  const e = t.filter((i) => i.type === "extension"), n = t.filter((i) => i.type === "node"), r = t.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function Hh(t) {
  const e = [], { nodeExtensions: n, markExtensions: r } = Co(t), i = [...n, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return t.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = V(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((d) => {
      d.types.forEach((u) => {
        Object.entries(d.attributes).forEach(([f, h]) => {
          e.push({
            type: u,
            name: f,
            attribute: {
              ...s,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = V(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([d, u]) => {
      const f = {
        ...s,
        ...u
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: o.name,
        name: d,
        attribute: f
      });
    });
  }), e;
}
function _e(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function ne(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      i === "class" ? r[i] = [r[i], s].join(" ") : i === "style" ? r[i] = [r[i], s].join("; ") : r[i] = s;
    }), r;
  }, {});
}
function ql(t, e) {
  return e.filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : {
    [n.name]: t.attrs[n.name]
  }).reduce((n, r) => ne(n, r), {});
}
function Vh(t) {
  return typeof t == "function";
}
function Q(t, e = void 0, ...n) {
  return Vh(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function uy(t = {}) {
  return Object.keys(t).length === 0 && t.constructor === Object;
}
function fy(t) {
  return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t;
}
function vd(t, e) {
  return t.style ? t : {
    ...t,
    getAttrs: (n) => {
      const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(n) : fy(n.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function bd(t) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(t).filter(([e, n]) => e === "attrs" && uy(n) ? !1 : n != null)
  );
}
function hy(t, e) {
  var n;
  const r = Hh(t), { nodeExtensions: i, markExtensions: s } = Co(t), o = (n = i.find((c) => V(c, "topNode"))) === null || n === void 0 ? void 0 : n.name, l = Object.fromEntries(i.map((c) => {
    const d = r.filter((v) => v.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = t.reduce((v, E) => {
      const b = V(E, "extendNodeSchema", u);
      return {
        ...v,
        ...b ? b(c) : {}
      };
    }, {}), h = bd({
      ...f,
      content: Q(V(c, "content", u)),
      marks: Q(V(c, "marks", u)),
      group: Q(V(c, "group", u)),
      inline: Q(V(c, "inline", u)),
      atom: Q(V(c, "atom", u)),
      selectable: Q(V(c, "selectable", u)),
      draggable: Q(V(c, "draggable", u)),
      code: Q(V(c, "code", u)),
      defining: Q(V(c, "defining", u)),
      isolating: Q(V(c, "isolating", u)),
      attrs: Object.fromEntries(d.map((v) => {
        var E;
        return [v.name, { default: (E = v == null ? void 0 : v.attribute) === null || E === void 0 ? void 0 : E.default }];
      }))
    }), p = Q(V(c, "parseHTML", u));
    p && (h.parseDOM = p.map((v) => vd(v, d)));
    const m = V(c, "renderHTML", u);
    m && (h.toDOM = (v) => m({
      node: v,
      HTMLAttributes: ql(v, d)
    }));
    const g = V(c, "renderText", u);
    return g && (h.toText = g), [c.name, h];
  })), a = Object.fromEntries(s.map((c) => {
    const d = r.filter((g) => g.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = t.reduce((g, v) => {
      const E = V(v, "extendMarkSchema", u);
      return {
        ...g,
        ...E ? E(c) : {}
      };
    }, {}), h = bd({
      ...f,
      inclusive: Q(V(c, "inclusive", u)),
      excludes: Q(V(c, "excludes", u)),
      group: Q(V(c, "group", u)),
      spanning: Q(V(c, "spanning", u)),
      code: Q(V(c, "code", u)),
      attrs: Object.fromEntries(d.map((g) => {
        var v;
        return [g.name, { default: (v = g == null ? void 0 : g.attribute) === null || v === void 0 ? void 0 : v.default }];
      }))
    }), p = Q(V(c, "parseHTML", u));
    p && (h.parseDOM = p.map((g) => vd(g, d)));
    const m = V(c, "renderHTML", u);
    return m && (h.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: ql(g, d)
    })), [c.name, h];
  }));
  return new Cg({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function sl(t, e) {
  return e.nodes[t] || e.marks[t] || null;
}
function wd(t, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t.name) : e;
}
const py = (t, e = 500) => {
  let n = "";
  const r = t.parentOffset;
  return t.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const d = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    n += d.slice(0, Math.max(0, r - s));
  }), n;
};
function Fa(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
class Mo {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const my = (t, e) => {
  if (Fa(e))
    return e.exec(t);
  const n = e(t);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function ol(t) {
  var e;
  const { editor: n, from: r, to: i, text: s, rules: o, plugin: l } = t, { view: a } = n;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let d = !1;
  const u = py(c) + s;
  return o.forEach((f) => {
    if (d)
      return;
    const h = my(u, f.find);
    if (!h)
      return;
    const p = a.state.tr, m = So({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - s.length),
      to: i
    }, { commands: v, chain: E, can: b } = new Io({
      editor: n,
      state: m
    });
    f.handler({
      state: m,
      range: g,
      match: h,
      commands: v,
      chain: E,
      can: b
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: s
    }), a.dispatch(p), d = !0);
  }), d;
}
function gy(t) {
  const { editor: e, rules: n } = t, r = new me({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const o = i.getMeta(r);
        return o || (i.selectionSet || i.docChanged ? null : s);
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return ol({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && ol({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? ol({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function yy(t) {
  return typeof t == "number";
}
class Fh {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Ey = (t, e) => {
  if (Fa(e))
    return [...t.matchAll(e)];
  const n = e(t);
  return n ? n.map((r) => {
    const i = [r.text];
    return i.index = r.index, i.input = t, i.data = r.data, r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(r.replaceWith)), i;
  }) : [];
};
function vy(t) {
  const { editor: e, state: n, from: r, to: i, rule: s } = t, { commands: o, chain: l, can: a } = new Io({
    editor: e,
    state: n
  }), c = [];
  return n.doc.nodesBetween(r, i, (u, f) => {
    if (!u.isTextblock || u.type.spec.code)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + u.content.size), m = u.textBetween(h - f, p - f, void 0, "￼");
    Ey(m, s.find).forEach((v) => {
      if (v.index === void 0)
        return;
      const E = h + v.index + 1, b = E + v[0].length, y = {
        from: n.tr.mapping.map(E),
        to: n.tr.mapping.map(b)
      }, T = s.handler({
        state: n,
        range: y,
        match: v,
        commands: o,
        chain: l,
        can: a
      });
      c.push(T);
    });
  }), c.every((u) => u !== null);
}
function by(t) {
  const { editor: e, rules: n } = t;
  let r = null, i = !1, s = !1;
  return n.map((l) => new me({
    // we register a global drag handler to track the current drag source element
    view(a) {
      const c = (d) => {
        var u;
        r = !((u = a.dom.parentElement) === null || u === void 0) && u.contains(d.target) ? a.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", c), {
        destroy() {
          window.removeEventListener("dragstart", c);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (a) => (s = r === a.dom.parentElement, !1),
        paste: (a, c) => {
          var d;
          const u = (d = c.clipboardData) === null || d === void 0 ? void 0 : d.getData("text/html");
          return i = !!(u != null && u.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (a, c, d) => {
      const u = a[0], f = u.getMeta("uiEvent") === "paste" && !i, h = u.getMeta("uiEvent") === "drop" && !s;
      if (!f && !h)
        return;
      const p = c.doc.content.findDiffStart(d.doc.content), m = c.doc.content.findDiffEnd(d.doc.content);
      if (!yy(p) || !m || p === m.b)
        return;
      const g = d.tr, v = So({
        state: d,
        transaction: g
      });
      if (!(!vy({
        editor: e,
        state: v,
        from: Math.max(p - 1, 0),
        to: m.b - 1,
        rule: l
      }) || !g.steps.length))
        return g;
    }
  }));
}
function wy(t) {
  const e = t.filter((n, r) => t.indexOf(n) !== r);
  return [...new Set(e)];
}
class Tr {
  constructor(e, n) {
    this.splittableMarks = [], this.editor = n, this.extensions = Tr.resolve(e), this.schema = hy(this.extensions, n), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: sl(r.name, this.schema)
      };
      r.type === "mark" && (!((i = Q(V(r, "keepOnSplit", s))) !== null && i !== void 0) || i) && this.splittableMarks.push(r.name);
      const o = V(r, "onBeforeCreate", s);
      o && this.editor.on("beforeCreate", o);
      const l = V(r, "onCreate", s);
      l && this.editor.on("create", l);
      const a = V(r, "onUpdate", s);
      a && this.editor.on("update", a);
      const c = V(r, "onSelectionUpdate", s);
      c && this.editor.on("selectionUpdate", c);
      const d = V(r, "onTransaction", s);
      d && this.editor.on("transaction", d);
      const u = V(r, "onFocus", s);
      u && this.editor.on("focus", u);
      const f = V(r, "onBlur", s);
      f && this.editor.on("blur", f);
      const h = V(r, "onDestroy", s);
      h && this.editor.on("destroy", h);
    });
  }
  static resolve(e) {
    const n = Tr.sort(Tr.flatten(e)), r = wy(n.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), n;
  }
  static flatten(e) {
    return e.map((n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage
      }, i = V(n, "addExtensions", r);
      return i ? [n, ...this.flatten(i())] : n;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const s = V(r, "priority") || 100, o = V(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, n) => {
      const r = {
        name: n.name,
        options: n.options,
        storage: n.storage,
        editor: this.editor,
        type: sl(n.name, this.schema)
      }, i = V(n, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, n = Tr.sort([...this.extensions].reverse()), r = [], i = [], s = n.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: sl(o.name, this.schema)
      }, a = [], c = V(o, "addKeyboardShortcuts", l);
      let d = {};
      if (o.type === "mark" && o.config.exitable && (d.ArrowRight = () => nt.handleExit({ editor: e, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([g, v]) => [g, () => v({ editor: e })]));
        d = { ...d, ...m };
      }
      const u = H1(d);
      a.push(u);
      const f = V(o, "addInputRules", l);
      wd(o, e.options.enableInputRules) && f && r.push(...f());
      const h = V(o, "addPasteRules", l);
      wd(o, e.options.enablePasteRules) && h && i.push(...h());
      const p = V(o, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      gy({
        editor: e,
        rules: r
      }),
      ...by({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  get attributes() {
    return Hh(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: n } = Co(this.extensions);
    return Object.fromEntries(n.filter((r) => !!V(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: _e(r.name, this.schema)
      }, o = V(r, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, d, u) => {
        const f = ql(a, i);
        return o()({
          editor: e,
          node: a,
          getPos: d,
          decorations: u,
          HTMLAttributes: f,
          extension: r
        });
      };
      return [r.name, l];
    }));
  }
}
function Ty(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function ll(t) {
  return Ty(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Oo(t, e) {
  const n = { ...t };
  return ll(t) && ll(e) && Object.keys(e).forEach((r) => {
    ll(e[r]) ? r in t ? n[r] = Oo(t[r], e[r]) : Object.assign(n, { [r]: e[r] }) : Object.assign(n, { [r]: e[r] });
  }), n;
}
class be {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = Q(V(this, "addOptions", {
      name: this.name
    }))), this.storage = Q(V(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new be(e);
  }
  configure(e = {}) {
    const n = this.extend();
    return n.options = Oo(this.options, e), n.storage = Q(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  extend(e = {}) {
    const n = new be(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = Q(V(n, "addOptions", {
      name: n.name
    })), n.storage = Q(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
function zh(t, e, n) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = n || {};
  let l = "", a = !0;
  return t.nodesBetween(r, i, (c, d, u, f) => {
    var h;
    const p = o == null ? void 0 : o[c.type.name];
    p ? (c.isBlock && !a && (l += s, a = !0), u && (l += p({
      node: c,
      pos: d,
      parent: u,
      index: f,
      range: e
    }))) : c.isText ? (l += (h = c == null ? void 0 : c.text) === null || h === void 0 ? void 0 : h.slice(Math.max(r, d) - d, i - d), a = !1) : c.isBlock && !a && (l += s, a = !0);
  }), l;
}
function Gh(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText]));
}
const Sy = be.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new me({
        key: new Ie("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((d) => d.$from.pos)), l = Math.max(...s.map((d) => d.$to.pos)), a = Gh(n);
            return zh(r, { from: o, to: l }, {
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Iy = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
}), !0), Cy = (t = !1) => ({ commands: e }) => e.setContent("", t), My = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: i } = r;
  return n && i.forEach(({ $from: s, $to: o }) => {
    t.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: d } = e, u = c.resolve(d.map(a)), f = c.resolve(d.map(a + l.nodeSize)), h = u.blockRange(f);
      if (!h)
        return;
      const p = Yr(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Oy = (t) => (e) => t(e), Ay = () => ({ state: t, dispatch: e }) => J1(t, e), Ry = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = t.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        t.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, xy = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const i = _e(t, n.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, _y = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: i } = t;
  return n && e.delete(r, i), !0;
}, ky = () => ({ state: t, dispatch: e }) => V1(t, e), Dy = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Ny = () => ({ state: t, dispatch: e }) => X1(t, e);
function Us(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => n.strict ? e[i] === t[i] : Fa(e[i]) ? e[i].test(t[i]) : e[i] === t[i]) : !0;
}
function jl(t, e, n = {}) {
  return t.find((r) => r.type === e && Us(r.attrs, n));
}
function Ly(t, e, n = {}) {
  return !!jl(t, e, n);
}
function za(t, e, n = {}) {
  if (!t || !e)
    return;
  let r = t.parent.childAfter(t.parentOffset);
  if (t.parentOffset === r.offset && r.offset !== 0 && (r = t.parent.childBefore(t.parentOffset)), !r.node)
    return;
  const i = jl([...r.node.marks], e, n);
  if (!i)
    return;
  let s = r.index, o = t.start() + r.offset, l = s + 1, a = o + r.node.nodeSize;
  for (jl([...r.node.marks], e, n); s > 0 && i.isInSet(t.parent.child(s - 1).marks); )
    s -= 1, o -= t.parent.child(s).nodeSize;
  for (; l < t.parent.childCount && Ly([...t.parent.child(l).marks], e, n); )
    a += t.parent.child(l).nodeSize, l += 1;
  return {
    from: o,
    to: a
  };
}
function _n(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const Py = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const s = _n(t, r.schema), { doc: o, selection: l } = n, { $from: a, from: c, to: d } = l;
  if (i) {
    const u = za(a, s, e);
    if (u && u.from <= c && u.to >= d) {
      const f = Y.create(o, u.from, u.to);
      n.setSelection(f);
    }
  }
  return !0;
}, By = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Ga(t) {
  return t instanceof Y;
}
function tn(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Uh(t, e = null) {
  if (!e)
    return null;
  const n = q.atStart(t), r = q.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const i = n.from, s = r.to;
  return e === "all" ? Y.create(t, tn(0, i, s), tn(t.content.size, i, s)) : Y.create(t, tn(e, i, s), tn(e, i, s));
}
function Ao() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Hy = (t = null, e = {}) => ({ editor: n, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    Ao() && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (s && t === null && !Ga(n.state.selection))
    return o(), !0;
  const l = Uh(i.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, Vy = (t, e) => (n) => t.every((r, i) => e(r, { ...n, index: i })), Fy = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e);
function Td(t) {
  const e = `<body>${t}</body>`;
  return new window.DOMParser().parseFromString(e, "text/html").body;
}
function $s(t, e, n) {
  if (n = {
    slice: !0,
    parseOptions: {},
    ...n
  }, typeof t == "object" && t !== null)
    try {
      return Array.isArray(t) && t.length > 0 ? x.fromArray(t.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(t);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", r), $s("", e, n);
    }
  if (typeof t == "string") {
    const r = Nr.fromSchema(e);
    return n.slice ? r.parseSlice(Td(t), n.parseOptions).content : r.parse(Td(t), n.parseOptions);
  }
  return $s("", e, n);
}
function zy(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const i = t.steps[r];
  if (!(i instanceof Oe || i instanceof Re))
    return;
  const s = t.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, d) => {
    o === 0 && (o = d);
  }), t.setSelection(q.near(t.doc.resolve(o), n));
}
const Gy = (t) => t.toString().startsWith("<"), Uy = (t, e, n) => ({ tr: r, dispatch: i, editor: s }) => {
  if (i) {
    n = {
      parseOptions: {},
      updateSelection: !0,
      ...n
    };
    const o = $s(e, s.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...n.parseOptions
      }
    });
    if (o.toString() === "<>")
      return !0;
    let { from: l, to: a } = typeof t == "number" ? { from: t, to: t } : t, c = !0, d = !0;
    if ((Gy(o) ? o : [o]).forEach((f) => {
      f.check(), c = c ? f.isText && f.marks.length === 0 : !1, d = d ? f.isBlock : !1;
    }), l === a && d) {
      const { parent: f } = r.doc.resolve(l);
      f.isTextblock && !f.type.spec.code && !f.childCount && (l -= 1, a += 1);
    }
    c ? Array.isArray(e) ? r.insertText(e.map((f) => f.text || "").join(""), l, a) : typeof e == "object" && e && e.text ? r.insertText(e.text, l, a) : r.insertText(e, l, a) : r.replaceWith(l, a, o), n.updateSelection && zy(r, r.steps.length - 1, -1);
  }
  return !0;
}, $y = () => ({ state: t, dispatch: e }) => q1(t, e), Wy = () => ({ state: t, dispatch: e }) => j1(t, e), qy = () => ({ state: t, dispatch: e }) => z1(t, e), jy = () => ({ state: t, dispatch: e }) => $1(t, e);
function $h() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Yy(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Ao() || $h() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), s && (n = `Shift-${n}`), n;
}
const Ky = (t) => ({ editor: e, view: n, tr: r, dispatch: i }) => {
  const s = Yy(t).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (c) => c(n, l));
  });
  return a == null || a.steps.forEach((c) => {
    const d = c.map(r.mapping);
    d && i && r.maybeStep(d);
  }), !0;
};
function Ai(t, e, n = {}) {
  const { from: r, to: i, empty: s } = t.selection, o = e ? _e(e, t.schema) : null, l = [];
  t.doc.nodesBetween(r, i, (u, f) => {
    if (u.isText)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + u.nodeSize);
    l.push({
      node: u,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((u) => o ? o.name === u.node.type.name : !0).filter((u) => Us(u.node.attrs, n, { strict: !1 }));
  return s ? !!c.length : c.reduce((u, f) => u + f.to - f.from, 0) >= a;
}
const Xy = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = _e(t, n.schema);
  return Ai(n, i, e) ? Y1(n, r) : !1;
}, Jy = () => ({ state: t, dispatch: e }) => Q1(t, e), Qy = (t) => ({ state: e, dispatch: n }) => {
  const r = _e(t, e.schema);
  return oy(r)(e, n);
}, Zy = () => ({ state: t, dispatch: e }) => K1(t, e);
function Ro(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Sd(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, i) => (n.includes(i) || (r[i] = t[i]), r), {});
}
const eE = (t, e) => ({ tr: n, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Ro(typeof t == "string" ? t : t.name, r.schema);
  return l ? (l === "node" && (s = _e(t, r.schema)), l === "mark" && (o = _n(t, r.schema)), i && n.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, d) => {
      s && s === c.type && n.setNodeMarkup(d, void 0, Sd(c.attrs, e)), o && c.marks.length && c.marks.forEach((u) => {
        o === u.type && n.addMark(d, d + c.nodeSize, o.create(Sd(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, tE = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), nE = () => ({ tr: t, commands: e }) => e.setTextSelection({
  from: 0,
  to: t.doc.content.size
}), rE = () => ({ state: t, dispatch: e }) => G1(t, e), iE = () => ({ state: t, dispatch: e }) => W1(t, e), sE = () => ({ state: t, dispatch: e }) => Z1(t, e), oE = () => ({ state: t, dispatch: e }) => ny(t, e), lE = () => ({ state: t, dispatch: e }) => ty(t, e);
function Wh(t, e, n = {}) {
  return $s(t, e, { slice: !1, parseOptions: n });
}
const aE = (t, e = !1, n = {}) => ({ tr: r, editor: i, dispatch: s }) => {
  const { doc: o } = r, l = Wh(t, i.schema, n);
  return s && r.replaceWith(0, o.content.size, l).setMeta("preventUpdate", !e), !0;
};
function cE(t, e) {
  const n = new Aa(t);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      n.step(i);
    });
  }), n;
}
function dE(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Yl(t, e, n) {
  const r = [];
  return t.nodesBetween(e.from, e.to, (i, s) => {
    n(i) && r.push({
      node: i,
      pos: s
    });
  }), r;
}
function qh(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function Ua(t) {
  return (e) => qh(e.$from, t);
}
function uE(t, e) {
  const n = zt.fromSchema(e).serializeFragment(t), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(n), i.innerHTML;
}
function fE(t, e) {
  const n = {
    from: 0,
    to: t.content.size
  };
  return zh(t, n, e);
}
function xo(t, e) {
  const n = _n(e, t.schema), { from: r, to: i, empty: s } = t.selection, o = [];
  s ? (t.storedMarks && o.push(...t.storedMarks), o.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function hE(t, e) {
  const n = _e(e, t.schema), { from: r, to: i } = t.selection, s = [];
  t.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === n.name);
  return o ? { ...o.attrs } : {};
}
function jh(t, e) {
  const n = Ro(typeof e == "string" ? e : e.name, t.schema);
  return n === "node" ? hE(t, e) : n === "mark" ? xo(t, e) : {};
}
function pE(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(n, i) ? !1 : n[i] = !0;
  });
}
function mE(t) {
  const e = pE(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((s, o) => o !== r).some((s) => n.oldRange.from >= s.oldRange.from && n.oldRange.to <= s.oldRange.to && n.newRange.from >= s.newRange.from && n.newRange.to <= s.newRange.to));
}
function gE(t) {
  const { mapping: e, steps: n } = t, r = [];
  return e.maps.forEach((i, s) => {
    const o = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = n[s];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const c = e.slice(s).map(l, -1), d = e.slice(s).map(a), u = e.invert().map(c, -1), f = e.invert().map(d);
      r.push({
        oldRange: {
          from: u,
          to: f
        },
        newRange: {
          from: c,
          to: d
        }
      });
    });
  }), mE(r);
}
function Ws(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((i) => {
    const s = n.resolve(t - 1), o = za(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : n.nodesBetween(t, e, (i, s) => {
    r.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), r;
}
function Ss(t, e, n) {
  return Object.fromEntries(Object.entries(n).filter(([r]) => {
    const i = t.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Kl(t, e, n = {}) {
  const { empty: r, ranges: i } = t.selection, s = e ? _n(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((u) => s ? s.name === u.type.name : !0).find((u) => Us(u.attrs, n, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: f }) => {
    const h = u.pos, p = f.pos;
    t.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const v = Math.max(h, g), E = Math.min(p, g + m.nodeSize), b = E - v;
      o += b, l.push(...m.marks.map((y) => ({
        mark: y,
        from: v,
        to: E
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((u) => s ? s.name === u.mark.type.name : !0).filter((u) => Us(u.mark.attrs, n, { strict: !1 })).reduce((u, f) => u + f.to - f.from, 0), c = l.filter((u) => s ? u.mark.type !== s && u.mark.type.excludes(s) : !0).reduce((u, f) => u + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function yE(t, e, n = {}) {
  if (!e)
    return Ai(t, null, n) || Kl(t, null, n);
  const r = Ro(e, t.schema);
  return r === "node" ? Ai(t, e, n) : r === "mark" ? Kl(t, e, n) : !1;
}
function Id(t, e) {
  const { nodeExtensions: n } = Co(e), r = n.find((o) => o.name === t);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = Q(V(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function EE(t) {
  var e;
  const n = (e = t.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = t.toJSON();
  return JSON.stringify(n) === JSON.stringify(r);
}
function vE(t) {
  return t instanceof W;
}
function Yh(t, e, n) {
  const i = t.state.doc.content.size, s = tn(e, 0, i), o = tn(n, 0, i), l = t.coordsAtPos(s), a = t.coordsAtPos(o, -1), c = Math.min(l.top, a.top), d = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - u, p = d - c, v = {
    top: c,
    bottom: d,
    left: u,
    right: f,
    width: h,
    height: p,
    x: u,
    y: c
  };
  return {
    ...v,
    toJSON: () => v
  };
}
function bE(t, e, n) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (Ga(i) && (s = i.$cursor), s) {
    const l = (r = t.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!n.isInSet(l) || !l.some((a) => a.type.excludes(n));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(l.pos, a.pos, (d, u, f) => {
      if (c)
        return !1;
      if (d.isInline) {
        const h = !f || f.type.allowsMarkType(n), p = !!n.isInSet(d.marks) || !d.marks.some((m) => m.type.excludes(n));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const wE = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: s } = n, { empty: o, ranges: l } = s, a = _n(t, r.schema);
  if (i)
    if (o) {
      const c = xo(r, a);
      n.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const d = c.$from.pos, u = c.$to.pos;
        r.doc.nodesBetween(d, u, (f, h) => {
          const p = Math.max(h, d), m = Math.min(h + f.nodeSize, u);
          f.marks.find((v) => v.type === a) ? f.marks.forEach((v) => {
            a === v.type && n.addMark(p, m, a.create({
              ...v.attrs,
              ...e
            }));
          }) : n.addMark(p, m, a.create(e));
        });
      });
  return bE(r, n, a);
}, TE = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), SE = (t, e = {}) => ({ state: n, dispatch: r, chain: i }) => {
  const s = _e(t, n.schema);
  return s.isTextblock ? i().command(({ commands: o }) => Ed(s, e)(n) ? !0 : o.clearNodes()).command(({ state: o }) => Ed(s, e)(o, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, IE = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, i = tn(t, 0, r.content.size), s = W.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, CE = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: i, to: s } = typeof t == "number" ? { from: t, to: t } : t, o = Y.atStart(r).from, l = Y.atEnd(r).to, a = tn(i, o, l), c = tn(s, o, l), d = Y.create(r, a, c);
    e.setSelection(d);
  }
  return !0;
}, ME = (t) => ({ state: e, dispatch: n }) => {
  const r = _e(t, e.schema);
  return cy(r)(e, n);
};
function Cd(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    t.tr.ensureMarks(r);
  }
}
const OE = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, d = Ss(c, l.node().type.name, l.node().attrs);
  if (s instanceof W && s.node.isBlock)
    return !l.parentOffset || !xr(o, l.pos) ? !1 : (r && (t && Cd(n, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  if (r) {
    const u = a.parentOffset === a.parent.content.size;
    s instanceof Y && e.deleteSelection();
    const f = l.depth === 0 ? void 0 : dE(l.node(-1).contentMatchAt(l.indexAfter(-1)));
    let h = u && f ? [
      {
        type: f,
        attrs: d
      }
    ] : void 0, p = xr(e.doc, e.mapping.map(l.pos), 1, h);
    if (!h && !p && xr(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
      {
        type: f,
        attrs: d
      }
    ] : void 0), p && (e.split(e.mapping.map(l.pos), 1, h), f && !u && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && Cd(n, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, AE = (t) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  var s;
  const o = _e(t, n.schema), { $from: l, $to: a } = n.selection, c = n.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const d = l.node(-1);
  if (d.type !== o)
    return !1;
  const u = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== o || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (r) {
      let g = x.empty;
      const v = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let C = l.depth - v; C >= l.depth - 3; C -= 1)
        g = x.from(l.node(C).copy(g));
      const E = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, b = Ss(u, l.node().type.name, l.node().attrs), y = ((s = o.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(b)) || void 0;
      g = g.append(x.from(o.createAndFill(null, y) || void 0));
      const T = l.before(l.depth - (v - 1));
      e.replace(T, l.after(-E), new H(g, 4 - v, 0));
      let w = -1;
      e.doc.nodesBetween(T, e.doc.content.size, (C, S) => {
        if (w > -1)
          return !1;
        C.isTextblock && C.content.size === 0 && (w = S + 1);
      }), w > -1 && e.setSelection(Y.near(e.doc.resolve(w))), e.scrollIntoView();
    }
    return !0;
  }
  const f = a.pos === l.end() ? d.contentMatchAt(0).defaultType : null, h = Ss(u, d.type.name, d.attrs), p = Ss(u, l.node().type.name, l.node().attrs);
  e.delete(l.pos, a.pos);
  const m = f ? [
    { type: o, attrs: h },
    { type: f, attrs: p }
  ] : [{ type: o, attrs: h }];
  if (!xr(e.doc, l.pos, 2))
    return !1;
  if (r) {
    const { selection: g, storedMarks: v } = n, { splittableMarks: E } = i.extensionManager, b = v || g.$to.parentOffset && g.$from.marks();
    if (e.split(l.pos, 2, m).scrollIntoView(), !b || !r)
      return !0;
    const y = b.filter((T) => E.includes(T.type.name));
    e.ensureMarks(y);
  }
  return !0;
}, al = (t, e) => {
  const n = Ua((o) => o.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === (i == null ? void 0 : i.type) && Rn(t.doc, n.pos) && t.join(n.pos), !0;
}, cl = (t, e) => {
  const n = Ua((o) => o.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const i = t.doc.nodeAt(r);
  return n.node.type === (i == null ? void 0 : i.type) && Rn(t.doc, r) && t.join(r), !0;
}, RE = (t, e, n, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: f } = i.extensionManager, h = _e(t, o.schema), p = _e(e, o.schema), { selection: m, storedMarks: g } = o, { $from: v, $to: E } = m, b = v.blockRange(E), y = g || m.$to.parentOffset && m.$from.marks();
  if (!b)
    return !1;
  const T = Ua((w) => Id(w.type.name, u))(m);
  if (b.depth >= 1 && T && b.depth - T.depth <= 1) {
    if (T.node.type === h)
      return c.liftListItem(p);
    if (Id(T.node.type.name, u) && h.validContent(T.node.content) && l)
      return a().command(() => (s.setNodeMarkup(T.pos, h), !0)).command(() => al(s, h)).command(() => cl(s, h)).run();
  }
  return !n || !y || !l ? a().command(() => d().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => al(s, h)).command(() => cl(s, h)).run() : a().command(() => {
    const w = d().wrapInList(h, r), C = y.filter((S) => f.includes(S.type.name));
    return s.ensureMarks(C), w ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => al(s, h)).command(() => cl(s, h)).run();
}, xE = (t, e = {}, n = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = n, o = _n(t, r.schema);
  return Kl(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, _E = (t, e, n = {}) => ({ state: r, commands: i }) => {
  const s = _e(t, r.schema), o = _e(e, r.schema);
  return Ai(r, s, n) ? i.setNode(o) : i.setNode(s, n);
}, kE = (t, e = {}) => ({ state: n, commands: r }) => {
  const i = _e(t, n.schema);
  return Ai(n, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, DE = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(t))) {
      if (e) {
        const o = t.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, t.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, NE = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: i } = n;
  return r || e && i.forEach((s) => {
    t.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, LE = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = n, a = _n(t, r.schema), { $from: c, empty: d, ranges: u } = l;
  if (!i)
    return !0;
  if (d && o) {
    let { from: f, to: h } = l;
    const p = (s = c.marks().find((g) => g.type === a)) === null || s === void 0 ? void 0 : s.attrs, m = za(c, a, p);
    m && (f = m.from, h = m.to), n.removeMark(f, h, a);
  } else
    u.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, PE = (t, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Ro(typeof t == "string" ? t : t.name, r.schema);
  return l ? (l === "node" && (s = _e(t, r.schema)), l === "mark" && (o = _n(t, r.schema)), i && n.selection.ranges.forEach((a) => {
    const c = a.$from.pos, d = a.$to.pos;
    r.doc.nodesBetween(c, d, (u, f) => {
      s && s === u.type && n.setNodeMarkup(f, void 0, {
        ...u.attrs,
        ...e
      }), o && u.marks.length && u.marks.forEach((h) => {
        if (o === h.type) {
          const p = Math.max(f, c), m = Math.min(f + u.nodeSize, d);
          n.addMark(p, m, o.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, BE = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = _e(t, n.schema);
  return ry(i, e)(n, r);
}, HE = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const i = _e(t, n.schema);
  return iy(i, e)(n, r);
};
var VE = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Iy,
  clearContent: Cy,
  clearNodes: My,
  command: Oy,
  createParagraphNear: Ay,
  deleteCurrentNode: Ry,
  deleteNode: xy,
  deleteRange: _y,
  deleteSelection: ky,
  enter: Dy,
  exitCode: Ny,
  extendMarkRange: Py,
  first: By,
  focus: Hy,
  forEach: Vy,
  insertContent: Fy,
  insertContentAt: Uy,
  joinUp: $y,
  joinDown: Wy,
  joinBackward: qy,
  joinForward: jy,
  keyboardShortcut: Ky,
  lift: Xy,
  liftEmptyBlock: Jy,
  liftListItem: Qy,
  newlineInCode: Zy,
  resetAttributes: eE,
  scrollIntoView: tE,
  selectAll: nE,
  selectNodeBackward: rE,
  selectNodeForward: iE,
  selectParentNode: sE,
  selectTextblockEnd: oE,
  selectTextblockStart: lE,
  setContent: aE,
  setMark: wE,
  setMeta: TE,
  setNode: SE,
  setNodeSelection: IE,
  setTextSelection: CE,
  sinkListItem: ME,
  splitBlock: OE,
  splitListItem: AE,
  toggleList: RE,
  toggleMark: xE,
  toggleNode: _E,
  toggleWrap: kE,
  undoInputRule: DE,
  unsetAllMarks: NE,
  unsetMark: LE,
  updateAttributes: PE,
  wrapIn: BE,
  wrapInList: HE
});
const FE = be.create({
  name: "commands",
  addCommands() {
    return {
      ...VE
    };
  }
}), zE = be.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new me({
        key: new Ie("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), GE = be.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new me({
        key: new Ie("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), UE = be.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: d, $anchor: u } = a, { pos: f, parent: h } = u, p = q.atStart(c).from === f;
        return !d || !p || !h.type.isTextblock || h.textContent.length ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ao() || $h() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new me({
        key: new Ie("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (!(t.some((p) => p.docChanged) && !e.doc.eq(n.doc)))
            return;
          const { empty: i, from: s, to: o } = e.selection, l = q.atStart(e.doc).from, a = q.atEnd(e.doc).to;
          if (i || !(s === l && o === a) || !(n.doc.textBetween(0, n.doc.content.size, " ", " ").length === 0))
            return;
          const u = n.tr, f = So({
            state: n,
            transaction: u
          }), { commands: h } = new Io({
            editor: this.editor,
            state: f
          });
          if (h.clearNodes(), !!u.steps.length)
            return u;
        }
      })
    ];
  }
}), $E = be.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new me({
        key: new Ie("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var WE = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: Sy,
  Commands: FE,
  Editable: zE,
  FocusEvents: GE,
  Keymap: UE,
  Tabindex: $E
});
const qE = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function jE(t, e) {
  const n = document.querySelector("style[data-tiptap-style]");
  if (n !== null)
    return n;
  const r = document.createElement("style");
  return e && r.setAttribute("nonce", e), r.setAttribute("data-tiptap-style", ""), r.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(r), r;
}
let YE = class extends dy {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = jE(qE, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, n = !0) {
    this.setOptions({ editable: e }), n && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, n) {
    const r = Vh(n) ? n(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const n = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(n))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    const n = [...this.options.enableCoreExtensions ? Object.values(WE) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
    this.extensionManager = new Tr(n, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Io({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    const e = Wh(this.options.content, this.schema, this.options.parseOptions), n = Uh(e, this.options.autofocus);
    this.view = new R1(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: wr.create({
        doc: e,
        selection: n || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const n = this.capturedTransaction;
    return this.capturedTransaction = null, n;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const n = this.state.apply(e), r = !this.state.selection.eq(n.selection);
    this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return jh(this.state, e);
  }
  isActive(e, n) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? n : e;
    return yE(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return uE(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: n = `

`, textSerializers: r = {} } = e || {};
    return fE(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...Gh(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return EE(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
};
function sr(t) {
  return new Mo({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = Q(t.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      let a = n.to;
      if (o) {
        const c = l.search(/\S/), d = n.from + l.indexOf(o), u = d + o.length;
        if (Ws(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === t.type && m !== h.mark.type)).filter((h) => h.to > d).length)
          return null;
        u < n.to && s.delete(u, n.to), d > n.from && s.delete(n.from + c, d), a = n.from + c + o.length, s.addMark(n.from + c, a, t.type.create(i || {})), s.removeStoredMark(t.type);
      }
    }
  });
}
function Kh(t) {
  return new Mo({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = Q(t.getAttributes, void 0, r) || {}, { tr: s } = e, o = n.from;
      let l = n.to;
      if (r[1]) {
        const a = r[0].lastIndexOf(r[1]);
        let c = o + a;
        c > l ? c = l : l = c + r[1].length;
        const d = r[0][r[0].length - 1];
        s.insertText(d, o + r[0].length - 1), s.replaceWith(c, l, t.type.create(i));
      } else
        r[0] && s.replaceWith(o, l, t.type.create(i));
    }
  });
}
function Xl(t) {
  return new Mo({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = e.doc.resolve(n.from), s = Q(t.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), t.type))
        return null;
      e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, s);
    }
  });
}
function Ri(t) {
  return new Mo({
    find: t.find,
    handler: ({ state: e, range: n, match: r, chain: i }) => {
      const s = Q(t.getAttributes, void 0, r) || {}, o = e.tr.delete(n.from, n.to), a = o.doc.resolve(n.from).blockRange(), c = a && Ma(a, t.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), t.keepMarks && t.editor) {
        const { selection: u, storedMarks: f } = e, { splittableMarks: h } = t.editor.extensionManager, p = f || u.$to.parentOffset && u.$from.marks();
        if (p) {
          const m = p.filter((g) => h.includes(g.type.name));
          o.ensureMarks(m);
        }
      }
      if (t.keepAttributes) {
        const u = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(u, s).run();
      }
      const d = o.doc.resolve(n.from - 1).nodeBefore;
      d && d.type === t.type && Rn(o.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, d)) && o.join(n.from - 1);
    }
  });
}
class nt {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = Q(V(this, "addOptions", {
      name: this.name
    }))), this.storage = Q(V(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new nt(e);
  }
  configure(e = {}) {
    const n = this.extend();
    return n.options = Oo(this.options, e), n.storage = Q(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  extend(e = {}) {
    const n = new nt(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = Q(V(n, "addOptions", {
      name: n.name
    })), n.storage = Q(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === n.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === n.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class oe {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = Q(V(this, "addOptions", {
      name: this.name
    }))), this.storage = Q(V(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new oe(e);
  }
  configure(e = {}) {
    const n = this.extend();
    return n.options = Oo(this.options, e), n.storage = Q(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
  extend(e = {}) {
    const n = new oe(e);
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = Q(V(n, "addOptions", {
      name: n.name
    })), n.storage = Q(V(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
class KE {
  constructor(e, n, r) {
    this.isDragging = !1, this.component = e, this.editor = n.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...r
    }, this.extension = n.extension, this.node = n.node, this.decorations = n.decorations, this.getPos = n.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(e) {
    var n, r, i, s, o, l, a;
    const { view: c } = this.editor, d = e.target, u = d.nodeType === 3 ? (n = d.parentElement) === null || n === void 0 ? void 0 : n.closest("[data-drag-handle]") : d.closest("[data-drag-handle]");
    if (!this.dom || !((r = this.contentDOM) === null || r === void 0) && r.contains(d) || !u)
      return;
    let f = 0, h = 0;
    if (this.dom !== u) {
      const g = this.dom.getBoundingClientRect(), v = u.getBoundingClientRect(), E = (i = e.offsetX) !== null && i !== void 0 ? i : (s = e.nativeEvent) === null || s === void 0 ? void 0 : s.offsetX, b = (o = e.offsetY) !== null && o !== void 0 ? o : (l = e.nativeEvent) === null || l === void 0 ? void 0 : l.offsetY;
      f = v.x - g.x + E, h = v.y - g.y + b;
    }
    (a = e.dataTransfer) === null || a === void 0 || a.setDragImage(this.dom, f, h);
    const p = W.create(c.state.doc, this.getPos()), m = c.state.tr.setSelection(p);
    c.dispatch(m);
  }
  stopEvent(e) {
    var n;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: e });
    const r = e.target;
    if (!(this.dom.contains(r) && !(!((n = this.contentDOM) === null || n === void 0) && n.contains(r))))
      return !1;
    const s = e.type.startsWith("drag"), o = e.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(r.tagName) || r.isContentEditable) && !o && !s)
      return !0;
    const { isEditable: a } = this.editor, { isDragging: c } = this, d = !!this.node.type.spec.draggable, u = W.isSelectable(this.node), f = e.type === "copy", h = e.type === "paste", p = e.type === "cut", m = e.type === "mousedown";
    if (!d && u && s && e.preventDefault(), d && s && !c)
      return e.preventDefault(), !1;
    if (d && a && !c && m) {
      const g = r.closest("[data-drag-handle]");
      g && (this.dom === g || this.dom.contains(g)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("drop", () => {
        this.isDragging = !1;
      }, { once: !0 }), document.addEventListener("mouseup", () => {
        this.isDragging = !1;
      }, { once: !0 }));
    }
    return !(c || o || f || h || p || m && u);
  }
  ignoreMutation(e) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: e }) : this.node.isLeaf || this.node.isAtom ? !0 : e.type === "selection" || this.dom.contains(e.target) && e.type === "childList" && Ao() && this.editor.isFocused && [
      ...Array.from(e.addedNodes),
      ...Array.from(e.removedNodes)
    ].every((r) => r.isContentEditable) ? !1 : this.contentDOM === e.target && e.type === "attributes" ? !0 : !this.contentDOM.contains(e.target);
  }
  updateAttributes(e) {
    this.editor.commands.command(({ tr: n }) => {
      const r = this.getPos();
      return n.setNodeMarkup(r, void 0, {
        ...this.node.attrs,
        ...e
      }), !0;
    });
  }
  deleteNode() {
    const e = this.getPos(), n = e + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: e, to: n });
  }
}
function An(t) {
  return new Fh({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const i = Q(t.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      let a = n.to;
      if (o) {
        const c = l.search(/\S/), d = n.from + l.indexOf(o), u = d + o.length;
        if (Ws(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === t.type && m !== h.mark.type)).filter((h) => h.to > d).length)
          return null;
        u < n.to && s.delete(u, n.to), d > n.from && s.delete(n.from + c, d), a = n.from + c + o.length, s.addMark(n.from + c, a, t.type.create(i || {})), s.removeStoredMark(t.type);
      }
    }
  });
}
function XE(t) {
  return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function JE(t) {
  return new Fh({
    find: t.find,
    handler({ match: e, chain: n, range: r }) {
      const i = Q(t.getAttributes, void 0, e);
      if (i === !1 || i === null)
        return null;
      e.input && n().deleteRange(r).insertContentAt(r.from, {
        type: t.type.name,
        attrs: i
      });
    }
  });
}
class Md {
  constructor(e) {
    this.transaction = e, this.currentStep = this.transaction.steps.length;
  }
  map(e) {
    let n = !1;
    return {
      position: this.transaction.steps.slice(this.currentStep).reduce((i, s) => {
        const o = s.getMap().mapResult(i);
        return o.deleted && (n = !0), o.pos;
      }, e),
      deleted: n
    };
  }
}
var et = "top", wt = "bottom", Tt = "right", tt = "left", $a = "auto", Vi = [et, wt, Tt, tt], Fr = "start", xi = "end", QE = "clippingParents", Xh = "viewport", ii = "popper", ZE = "reference", Od = /* @__PURE__ */ Vi.reduce(function(t, e) {
  return t.concat([e + "-" + Fr, e + "-" + xi]);
}, []), Jh = /* @__PURE__ */ [].concat(Vi, [$a]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Fr, e + "-" + xi]);
}, []), ev = "beforeRead", tv = "read", nv = "afterRead", rv = "beforeMain", iv = "main", sv = "afterMain", ov = "beforeWrite", lv = "write", av = "afterWrite", cv = [ev, tv, nv, rv, iv, sv, ov, lv, av];
function jt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function ct(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function or(t) {
  var e = ct(t).Element;
  return t instanceof e || t instanceof Element;
}
function bt(t) {
  var e = ct(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Wa(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = ct(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function dv(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, s = e.elements[n];
    !bt(s) || !jt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(o) {
      var l = i[o];
      l === !1 ? s.removeAttribute(o) : s.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function uv(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], s = e.attributes[r] || {}, o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), l = o.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !bt(i) || !jt(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const Qh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: dv,
  effect: uv,
  requires: ["computeStyles"]
};
function $t(t) {
  return t.split("-")[0];
}
var Qn = Math.max, qs = Math.min, zr = Math.round;
function Jl() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Zh() {
  return !/^((?!chrome|android).)*safari/i.test(Jl());
}
function Gr(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, s = 1;
  e && bt(t) && (i = t.offsetWidth > 0 && zr(r.width) / t.offsetWidth || 1, s = t.offsetHeight > 0 && zr(r.height) / t.offsetHeight || 1);
  var o = or(t) ? ct(t) : window, l = o.visualViewport, a = !Zh() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, d = (r.top + (a && l ? l.offsetTop : 0)) / s, u = r.width / i, f = r.height / s;
  return {
    width: u,
    height: f,
    top: d,
    right: c + u,
    bottom: d + f,
    left: c,
    x: c,
    y: d
  };
}
function qa(t) {
  var e = Gr(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function ep(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && Wa(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function sn(t) {
  return ct(t).getComputedStyle(t);
}
function fv(t) {
  return ["table", "td", "th"].indexOf(jt(t)) >= 0;
}
function kn(t) {
  return ((or(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function _o(t) {
  return jt(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Wa(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    kn(t)
  );
}
function Ad(t) {
  return !bt(t) || // https://github.com/popperjs/popper-core/issues/837
  sn(t).position === "fixed" ? null : t.offsetParent;
}
function hv(t) {
  var e = /firefox/i.test(Jl()), n = /Trident/i.test(Jl());
  if (n && bt(t)) {
    var r = sn(t);
    if (r.position === "fixed")
      return null;
  }
  var i = _o(t);
  for (Wa(i) && (i = i.host); bt(i) && ["html", "body"].indexOf(jt(i)) < 0; ) {
    var s = sn(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Fi(t) {
  for (var e = ct(t), n = Ad(t); n && fv(n) && sn(n).position === "static"; )
    n = Ad(n);
  return n && (jt(n) === "html" || jt(n) === "body" && sn(n).position === "static") ? e : n || hv(t) || e;
}
function ja(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function mi(t, e, n) {
  return Qn(t, qs(e, n));
}
function pv(t, e, n) {
  var r = mi(t, e, n);
  return r > n ? n : r;
}
function tp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function np(t) {
  return Object.assign({}, tp(), t);
}
function rp(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var mv = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, np(typeof e != "number" ? e : rp(e, Vi));
};
function gv(t) {
  var e, n = t.state, r = t.name, i = t.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, l = $t(n.placement), a = ja(l), c = [tt, Tt].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!s || !o)) {
    var u = mv(i.padding, n), f = qa(s), h = a === "y" ? et : tt, p = a === "y" ? wt : Tt, m = n.rects.reference[d] + n.rects.reference[a] - o[a] - n.rects.popper[d], g = o[a] - n.rects.reference[a], v = Fi(s), E = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = m / 2 - g / 2, y = u[h], T = E - f[d] - u[p], w = E / 2 - f[d] / 2 + b, C = mi(y, w, T), S = a;
    n.modifiersData[r] = (e = {}, e[S] = C, e.centerOffset = C - w, e);
  }
}
function yv(t) {
  var e = t.state, n = t.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || ep(e.elements.popper, i) && (e.elements.arrow = i));
}
const Ev = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: gv,
  effect: yv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ur(t) {
  return t.split("-")[1];
}
var vv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function bv(t, e) {
  var n = t.x, r = t.y, i = e.devicePixelRatio || 1;
  return {
    x: zr(n * i) / i || 0,
    y: zr(r * i) / i || 0
  };
}
function Rd(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, s = t.variation, o = t.offsets, l = t.position, a = t.gpuAcceleration, c = t.adaptive, d = t.roundOffsets, u = t.isFixed, f = o.x, h = f === void 0 ? 0 : f, p = o.y, m = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = g.x, m = g.y;
  var v = o.hasOwnProperty("x"), E = o.hasOwnProperty("y"), b = tt, y = et, T = window;
  if (c) {
    var w = Fi(n), C = "clientHeight", S = "clientWidth";
    if (w === ct(n) && (w = kn(n), sn(w).position !== "static" && l === "absolute" && (C = "scrollHeight", S = "scrollWidth")), w = w, i === et || (i === tt || i === Tt) && s === xi) {
      y = wt;
      var O = u && w === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[C]
      );
      m -= O - r.height, m *= a ? 1 : -1;
    }
    if (i === tt || (i === et || i === wt) && s === xi) {
      b = Tt;
      var P = u && w === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[S]
      );
      h -= P - r.width, h *= a ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: l
  }, c && vv), D = d === !0 ? bv({
    x: h,
    y: m
  }, ct(n)) : {
    x: h,
    y: m
  };
  if (h = D.x, m = D.y, a) {
    var F;
    return Object.assign({}, k, (F = {}, F[y] = E ? "0" : "", F[b] = v ? "0" : "", F.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", F));
  }
  return Object.assign({}, k, (e = {}, e[y] = E ? m + "px" : "", e[b] = v ? h + "px" : "", e.transform = "", e));
}
function wv(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, o = s === void 0 ? !0 : s, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: $t(e.placement),
    variation: Ur(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Rd(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Rd(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Tv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: wv,
  data: {}
};
var ns = {
  passive: !0
};
function Sv(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, s = i === void 0 ? !0 : i, o = r.resize, l = o === void 0 ? !0 : o, a = ct(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, ns);
  }), l && a.addEventListener("resize", n.update, ns), function() {
    s && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, ns);
    }), l && a.removeEventListener("resize", n.update, ns);
  };
}
const Iv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Sv,
  data: {}
};
var Cv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Is(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Cv[e];
  });
}
var Mv = {
  start: "end",
  end: "start"
};
function xd(t) {
  return t.replace(/start|end/g, function(e) {
    return Mv[e];
  });
}
function Ya(t) {
  var e = ct(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ka(t) {
  return Gr(kn(t)).left + Ya(t).scrollLeft;
}
function Ov(t, e) {
  var n = ct(t), r = kn(t), i = n.visualViewport, s = r.clientWidth, o = r.clientHeight, l = 0, a = 0;
  if (i) {
    s = i.width, o = i.height;
    var c = Zh();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: l + Ka(t),
    y: a
  };
}
function Av(t) {
  var e, n = kn(t), r = Ya(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, s = Qn(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Qn(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Ka(t), a = -r.scrollTop;
  return sn(i || n).direction === "rtl" && (l += Qn(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: l,
    y: a
  };
}
function Xa(t) {
  var e = sn(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function ip(t) {
  return ["html", "body", "#document"].indexOf(jt(t)) >= 0 ? t.ownerDocument.body : bt(t) && Xa(t) ? t : ip(_o(t));
}
function gi(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = ip(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), s = ct(r), o = i ? [s].concat(s.visualViewport || [], Xa(r) ? r : []) : r, l = e.concat(o);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(gi(_o(o)))
  );
}
function Ql(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function Rv(t, e) {
  var n = Gr(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _d(t, e, n) {
  return e === Xh ? Ql(Ov(t, n)) : or(e) ? Rv(e, n) : Ql(Av(kn(t)));
}
function xv(t) {
  var e = gi(_o(t)), n = ["absolute", "fixed"].indexOf(sn(t).position) >= 0, r = n && bt(t) ? Fi(t) : t;
  return or(r) ? e.filter(function(i) {
    return or(i) && ep(i, r) && jt(i) !== "body";
  }) : [];
}
function _v(t, e, n, r) {
  var i = e === "clippingParents" ? xv(t) : [].concat(e), s = [].concat(i, [n]), o = s[0], l = s.reduce(function(a, c) {
    var d = _d(t, c, r);
    return a.top = Qn(d.top, a.top), a.right = qs(d.right, a.right), a.bottom = qs(d.bottom, a.bottom), a.left = Qn(d.left, a.left), a;
  }, _d(t, o, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function sp(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? $t(r) : null, s = r ? Ur(r) : null, o = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, a;
  switch (i) {
    case et:
      a = {
        x: o,
        y: e.y - n.height
      };
      break;
    case wt:
      a = {
        x: o,
        y: e.y + e.height
      };
      break;
    case Tt:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case tt:
      a = {
        x: e.x - n.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? ja(i) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (s) {
      case Fr:
        a[c] = a[c] - (e[d] / 2 - n[d] / 2);
        break;
      case xi:
        a[c] = a[c] + (e[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function _i(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, s = n.strategy, o = s === void 0 ? t.strategy : s, l = n.boundary, a = l === void 0 ? QE : l, c = n.rootBoundary, d = c === void 0 ? Xh : c, u = n.elementContext, f = u === void 0 ? ii : u, h = n.altBoundary, p = h === void 0 ? !1 : h, m = n.padding, g = m === void 0 ? 0 : m, v = np(typeof g != "number" ? g : rp(g, Vi)), E = f === ii ? ZE : ii, b = t.rects.popper, y = t.elements[p ? E : f], T = _v(or(y) ? y : y.contextElement || kn(t.elements.popper), a, d, o), w = Gr(t.elements.reference), C = sp({
    reference: w,
    element: b,
    strategy: "absolute",
    placement: i
  }), S = Ql(Object.assign({}, b, C)), O = f === ii ? S : w, P = {
    top: T.top - O.top + v.top,
    bottom: O.bottom - T.bottom + v.bottom,
    left: T.left - O.left + v.left,
    right: O.right - T.right + v.right
  }, k = t.modifiersData.offset;
  if (f === ii && k) {
    var D = k[i];
    Object.keys(P).forEach(function(F) {
      var R = [Tt, wt].indexOf(F) >= 0 ? 1 : -1, G = [et, wt].indexOf(F) >= 0 ? "y" : "x";
      P[F] += D[G] * R;
    });
  }
  return P;
}
function kv(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, s = n.rootBoundary, o = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? Jh : a, d = Ur(r), u = d ? l ? Od : Od.filter(function(p) {
    return Ur(p) === d;
  }) : Vi, f = u.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = u);
  var h = f.reduce(function(p, m) {
    return p[m] = _i(t, {
      placement: m,
      boundary: i,
      rootBoundary: s,
      padding: o
    })[$t(m)], p;
  }, {});
  return Object.keys(h).sort(function(p, m) {
    return h[p] - h[m];
  });
}
function Dv(t) {
  if ($t(t) === $a)
    return [];
  var e = Is(t);
  return [xd(t), e, xd(e)];
}
function Nv(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, o = n.altAxis, l = o === void 0 ? !0 : o, a = n.fallbackPlacements, c = n.padding, d = n.boundary, u = n.rootBoundary, f = n.altBoundary, h = n.flipVariations, p = h === void 0 ? !0 : h, m = n.allowedAutoPlacements, g = e.options.placement, v = $t(g), E = v === g, b = a || (E || !p ? [Is(g)] : Dv(g)), y = [g].concat(b).reduce(function(ge, ze) {
      return ge.concat($t(ze) === $a ? kv(e, {
        placement: ze,
        boundary: d,
        rootBoundary: u,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: m
      }) : ze);
    }, []), T = e.rects.reference, w = e.rects.popper, C = /* @__PURE__ */ new Map(), S = !0, O = y[0], P = 0; P < y.length; P++) {
      var k = y[P], D = $t(k), F = Ur(k) === Fr, R = [et, wt].indexOf(D) >= 0, G = R ? "width" : "height", I = _i(e, {
        placement: k,
        boundary: d,
        rootBoundary: u,
        altBoundary: f,
        padding: c
      }), A = R ? F ? Tt : tt : F ? wt : et;
      T[G] > w[G] && (A = Is(A));
      var L = Is(A), B = [];
      if (s && B.push(I[D] <= 0), l && B.push(I[A] <= 0, I[L] <= 0), B.every(function(ge) {
        return ge;
      })) {
        O = k, S = !1;
        break;
      }
      C.set(k, B);
    }
    if (S)
      for (var $ = p ? 3 : 1, K = function(ze) {
        var X = y.find(function(le) {
          var Te = C.get(le);
          if (Te)
            return Te.slice(0, ze).every(function(it) {
              return it;
            });
        });
        if (X)
          return O = X, "break";
      }, ue = $; ue > 0; ue--) {
        var ke = K(ue);
        if (ke === "break")
          break;
      }
    e.placement !== O && (e.modifiersData[r]._skip = !0, e.placement = O, e.reset = !0);
  }
}
const Lv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Nv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function kd(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function Dd(t) {
  return [et, Tt, wt, tt].some(function(e) {
    return t[e] >= 0;
  });
}
function Pv(t) {
  var e = t.state, n = t.name, r = e.rects.reference, i = e.rects.popper, s = e.modifiersData.preventOverflow, o = _i(e, {
    elementContext: "reference"
  }), l = _i(e, {
    altBoundary: !0
  }), a = kd(o, r), c = kd(l, i, s), d = Dd(a), u = Dd(c);
  e.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": u
  });
}
const Bv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Pv
};
function Hv(t, e, n) {
  var r = $t(t), i = [tt, et].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, o = s[0], l = s[1];
  return o = o || 0, l = (l || 0) * i, [tt, Tt].indexOf(r) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function Vv(t) {
  var e = t.state, n = t.options, r = t.name, i = n.offset, s = i === void 0 ? [0, 0] : i, o = Jh.reduce(function(d, u) {
    return d[u] = Hv(u, e.rects, s), d;
  }, {}), l = o[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = o;
}
const Fv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vv
};
function zv(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = sp({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Gv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: zv,
  data: {}
};
function Uv(t) {
  return t === "x" ? "y" : "x";
}
function $v(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, s = i === void 0 ? !0 : i, o = n.altAxis, l = o === void 0 ? !1 : o, a = n.boundary, c = n.rootBoundary, d = n.altBoundary, u = n.padding, f = n.tether, h = f === void 0 ? !0 : f, p = n.tetherOffset, m = p === void 0 ? 0 : p, g = _i(e, {
    boundary: a,
    rootBoundary: c,
    padding: u,
    altBoundary: d
  }), v = $t(e.placement), E = Ur(e.placement), b = !E, y = ja(v), T = Uv(y), w = e.modifiersData.popperOffsets, C = e.rects.reference, S = e.rects.popper, O = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, P = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), k = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (w) {
    if (s) {
      var F, R = y === "y" ? et : tt, G = y === "y" ? wt : Tt, I = y === "y" ? "height" : "width", A = w[y], L = A + g[R], B = A - g[G], $ = h ? -S[I] / 2 : 0, K = E === Fr ? C[I] : S[I], ue = E === Fr ? -S[I] : -C[I], ke = e.elements.arrow, ge = h && ke ? qa(ke) : {
        width: 0,
        height: 0
      }, ze = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : tp(), X = ze[R], le = ze[G], Te = mi(0, C[I], ge[I]), it = b ? C[I] / 2 - $ - Te - X - P.mainAxis : K - Te - X - P.mainAxis, ae = b ? -C[I] / 2 + $ + Te + le + P.mainAxis : ue + Te + le + P.mainAxis, St = e.elements.arrow && Fi(e.elements.arrow), Gi = St ? y === "y" ? St.clientTop || 0 : St.clientLeft || 0 : 0, Jr = (F = k == null ? void 0 : k[y]) != null ? F : 0, Ui = A + it - Jr - Gi, $i = A + ae - Jr, Qr = mi(h ? qs(L, Ui) : L, A, h ? Qn(B, $i) : B);
      w[y] = Qr, D[y] = Qr - A;
    }
    if (l) {
      var Zr, Wi = y === "x" ? et : tt, qi = y === "x" ? wt : Tt, Kt = w[T], an = T === "y" ? "height" : "width", ei = Kt + g[Wi], Dn = Kt - g[qi], ti = [et, tt].indexOf(v) !== -1, ji = (Zr = k == null ? void 0 : k[T]) != null ? Zr : 0, Yi = ti ? ei : Kt - C[an] - S[an] - ji + P.altAxis, Ki = ti ? Kt + C[an] + S[an] - ji - P.altAxis : Dn, Xi = h && ti ? pv(Yi, Kt, Ki) : mi(h ? Yi : ei, Kt, h ? Ki : Dn);
      w[T] = Xi, D[T] = Xi - Kt;
    }
    e.modifiersData[r] = D;
  }
}
const Wv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $v,
  requiresIfExists: ["offset"]
};
function qv(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function jv(t) {
  return t === ct(t) || !bt(t) ? Ya(t) : qv(t);
}
function Yv(t) {
  var e = t.getBoundingClientRect(), n = zr(e.width) / t.offsetWidth || 1, r = zr(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Kv(t, e, n) {
  n === void 0 && (n = !1);
  var r = bt(e), i = bt(e) && Yv(e), s = kn(e), o = Gr(t, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((jt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Xa(s)) && (l = jv(e)), bt(e) ? (a = Gr(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : s && (a.x = Ka(s))), {
    x: o.left + l.scrollLeft - a.x,
    y: o.top + l.scrollTop - a.y,
    width: o.width,
    height: o.height
  };
}
function Xv(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(s) {
    e.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(l) {
      if (!n.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(s);
  }
  return t.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function Jv(t) {
  var e = Xv(t);
  return cv.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Qv(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function Zv(t) {
  var e = t.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var Nd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ld() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function eb(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, s = i === void 0 ? Nd : i;
  return function(l, a, c) {
    c === void 0 && (c = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nd, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, u = [], f = !1, h = {
      state: d,
      setOptions: function(v) {
        var E = typeof v == "function" ? v(d.options) : v;
        m(), d.options = Object.assign({}, s, d.options, E), d.scrollParents = {
          reference: or(l) ? gi(l) : l.contextElement ? gi(l.contextElement) : [],
          popper: gi(a)
        };
        var b = Jv(Zv([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = b.filter(function(y) {
          return y.enabled;
        }), p(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var v = d.elements, E = v.reference, b = v.popper;
          if (Ld(E, b)) {
            d.rects = {
              reference: Kv(E, Fi(b), d.options.strategy === "fixed"),
              popper: qa(b)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(P) {
              return d.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var y = 0; y < d.orderedModifiers.length; y++) {
              if (d.reset === !0) {
                d.reset = !1, y = -1;
                continue;
              }
              var T = d.orderedModifiers[y], w = T.fn, C = T.options, S = C === void 0 ? {} : C, O = T.name;
              typeof w == "function" && (d = w({
                state: d,
                options: S,
                name: O,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Qv(function() {
        return new Promise(function(g) {
          h.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Ld(l, a))
      return h;
    h.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var v = g.name, E = g.options, b = E === void 0 ? {} : E, y = g.effect;
        if (typeof y == "function") {
          var T = y({
            state: d,
            name: v,
            instance: h,
            options: b
          }), w = function() {
          };
          u.push(T || w);
        }
      });
    }
    function m() {
      u.forEach(function(g) {
        return g();
      }), u = [];
    }
    return h;
  };
}
var tb = [Iv, Gv, Tv, Qh, Fv, Lv, Wv, Ev, Bv], nb = /* @__PURE__ */ eb({
  defaultModifiers: tb
}), rb = "tippy-box", op = "tippy-content", ib = "tippy-backdrop", lp = "tippy-arrow", ap = "tippy-svg-arrow", Pn = {
  passive: !0,
  capture: !0
}, cp = function() {
  return document.body;
};
function sb(t, e) {
  return {}.hasOwnProperty.call(t, e);
}
function dl(t, e, n) {
  if (Array.isArray(t)) {
    var r = t[e];
    return r ?? (Array.isArray(n) ? n[e] : n);
  }
  return t;
}
function Ja(t, e) {
  var n = {}.toString.call(t);
  return n.indexOf("[object") === 0 && n.indexOf(e + "]") > -1;
}
function dp(t, e) {
  return typeof t == "function" ? t.apply(void 0, e) : t;
}
function Pd(t, e) {
  if (e === 0)
    return t;
  var n;
  return function(r) {
    clearTimeout(n), n = setTimeout(function() {
      t(r);
    }, e);
  };
}
function ob(t, e) {
  var n = Object.assign({}, t);
  return e.forEach(function(r) {
    delete n[r];
  }), n;
}
function lb(t) {
  return t.split(/\s+/).filter(Boolean);
}
function vr(t) {
  return [].concat(t);
}
function Bd(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ab(t) {
  return t.filter(function(e, n) {
    return t.indexOf(e) === n;
  });
}
function cb(t) {
  return t.split("-")[0];
}
function js(t) {
  return [].slice.call(t);
}
function Hd(t) {
  return Object.keys(t).reduce(function(e, n) {
    return t[n] !== void 0 && (e[n] = t[n]), e;
  }, {});
}
function yi() {
  return document.createElement("div");
}
function ki(t) {
  return ["Element", "Fragment"].some(function(e) {
    return Ja(t, e);
  });
}
function db(t) {
  return Ja(t, "NodeList");
}
function ub(t) {
  return Ja(t, "MouseEvent");
}
function fb(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
function hb(t) {
  return ki(t) ? [t] : db(t) ? js(t) : Array.isArray(t) ? t : js(document.querySelectorAll(t));
}
function ul(t, e) {
  t.forEach(function(n) {
    n && (n.style.transitionDuration = e + "ms");
  });
}
function Vd(t, e) {
  t.forEach(function(n) {
    n && n.setAttribute("data-state", e);
  });
}
function pb(t) {
  var e, n = vr(t), r = n[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function mb(t, e) {
  var n = e.clientX, r = e.clientY;
  return t.every(function(i) {
    var s = i.popperRect, o = i.popperState, l = i.props, a = l.interactiveBorder, c = cb(o.placement), d = o.modifiersData.offset;
    if (!d)
      return !0;
    var u = c === "bottom" ? d.top.y : 0, f = c === "top" ? d.bottom.y : 0, h = c === "right" ? d.left.x : 0, p = c === "left" ? d.right.x : 0, m = s.top - r + u > a, g = r - s.bottom - f > a, v = s.left - n + h > a, E = n - s.right - p > a;
    return m || g || v || E;
  });
}
function fl(t, e, n) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    t[r](i, n);
  });
}
function Fd(t, e) {
  for (var n = e; n; ) {
    var r;
    if (t.contains(n))
      return !0;
    n = n.getRootNode == null || (r = n.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Ht = {
  isTouch: !1
}, zd = 0;
function gb() {
  Ht.isTouch || (Ht.isTouch = !0, window.performance && document.addEventListener("mousemove", up));
}
function up() {
  var t = performance.now();
  t - zd < 20 && (Ht.isTouch = !1, document.removeEventListener("mousemove", up)), zd = t;
}
function yb() {
  var t = document.activeElement;
  if (fb(t)) {
    var e = t._tippy;
    t.blur && !e.state.isVisible && t.blur();
  }
}
function Eb() {
  document.addEventListener("touchstart", gb, Pn), window.addEventListener("blur", yb);
}
var vb = typeof window < "u" && typeof document < "u", bb = vb ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function mr(t) {
  var e = t === "destroy" ? "n already-" : " ";
  return [t + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Gd(t) {
  var e = /[ \t]{2,}/g, n = /^[ \t]*/gm;
  return t.replace(e, " ").replace(n, "").trim();
}
function wb(t) {
  return Gd(`
  %ctippy.js

  %c` + Gd(t) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function fp(t) {
  return [
    wb(t),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var Di;
process.env.NODE_ENV !== "production" && Tb();
function Tb() {
  Di = /* @__PURE__ */ new Set();
}
function en(t, e) {
  if (t && !Di.has(e)) {
    var n;
    Di.add(e), (n = console).warn.apply(n, fp(e));
  }
}
function Zl(t, e) {
  if (t && !Di.has(e)) {
    var n;
    Di.add(e), (n = console).error.apply(n, fp(e));
  }
}
function Sb(t) {
  var e = !t, n = Object.prototype.toString.call(t) === "[object Object]" && !t.addEventListener;
  Zl(e, ["tippy() was passed", "`" + String(t) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Zl(n, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var hp = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Ib = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, at = Object.assign({
  appendTo: cp,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, hp, Ib), Cb = Object.keys(at), Mb = function(e) {
  process.env.NODE_ENV !== "production" && mp(e, []);
  var n = Object.keys(e);
  n.forEach(function(r) {
    at[r] = e[r];
  });
};
function pp(t) {
  var e = t.plugins || [], n = e.reduce(function(r, i) {
    var s = i.name, o = i.defaultValue;
    if (s) {
      var l;
      r[s] = t[s] !== void 0 ? t[s] : (l = at[s]) != null ? l : o;
    }
    return r;
  }, {});
  return Object.assign({}, t, n);
}
function Ob(t, e) {
  var n = e ? Object.keys(pp(Object.assign({}, at, {
    plugins: e
  }))) : Cb, r = n.reduce(function(i, s) {
    var o = (t.getAttribute("data-tippy-" + s) || "").trim();
    if (!o)
      return i;
    if (s === "content")
      i[s] = o;
    else
      try {
        i[s] = JSON.parse(o);
      } catch {
        i[s] = o;
      }
    return i;
  }, {});
  return r;
}
function Ud(t, e) {
  var n = Object.assign({}, e, {
    content: dp(e.content, [t])
  }, e.ignoreAttributes ? {} : Ob(t, e.plugins));
  return n.aria = Object.assign({}, at.aria, n.aria), n.aria = {
    expanded: n.aria.expanded === "auto" ? e.interactive : n.aria.expanded,
    content: n.aria.content === "auto" ? e.interactive ? null : "describedby" : n.aria.content
  }, n;
}
function mp(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = []);
  var n = Object.keys(t);
  n.forEach(function(r) {
    var i = ob(at, Object.keys(hp)), s = !sb(i, r);
    s && (s = e.filter(function(o) {
      return o.name === r;
    }).length === 0), en(s, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var Ab = function() {
  return "innerHTML";
};
function ea(t, e) {
  t[Ab()] = e;
}
function $d(t) {
  var e = yi();
  return t === !0 ? e.className = lp : (e.className = ap, ki(t) ? e.appendChild(t) : ea(e, t)), e;
}
function Wd(t, e) {
  ki(e.content) ? (ea(t, ""), t.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? ea(t, e.content) : t.textContent = e.content);
}
function ta(t) {
  var e = t.firstElementChild, n = js(e.children);
  return {
    box: e,
    content: n.find(function(r) {
      return r.classList.contains(op);
    }),
    arrow: n.find(function(r) {
      return r.classList.contains(lp) || r.classList.contains(ap);
    }),
    backdrop: n.find(function(r) {
      return r.classList.contains(ib);
    })
  };
}
function gp(t) {
  var e = yi(), n = yi();
  n.className = rb, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
  var r = yi();
  r.className = op, r.setAttribute("data-state", "hidden"), Wd(r, t.props), e.appendChild(n), n.appendChild(r), i(t.props, t.props);
  function i(s, o) {
    var l = ta(e), a = l.box, c = l.content, d = l.arrow;
    o.theme ? a.setAttribute("data-theme", o.theme) : a.removeAttribute("data-theme"), typeof o.animation == "string" ? a.setAttribute("data-animation", o.animation) : a.removeAttribute("data-animation"), o.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof o.maxWidth == "number" ? o.maxWidth + "px" : o.maxWidth, o.role ? a.setAttribute("role", o.role) : a.removeAttribute("role"), (s.content !== o.content || s.allowHTML !== o.allowHTML) && Wd(c, t.props), o.arrow ? d ? s.arrow !== o.arrow && (a.removeChild(d), a.appendChild($d(o.arrow))) : a.appendChild($d(o.arrow)) : d && a.removeChild(d);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
gp.$$tippy = !0;
var Rb = 1, rs = [], hl = [];
function xb(t, e) {
  var n = Ud(t, Object.assign({}, at, pp(Hd(e)))), r, i, s, o = !1, l = !1, a = !1, c = !1, d, u, f, h = [], p = Pd(Ui, n.interactiveDebounce), m, g = Rb++, v = null, E = ab(n.plugins), b = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, y = {
    // properties
    id: g,
    reference: t,
    popper: yi(),
    popperInstance: v,
    props: n,
    state: b,
    plugins: E,
    // methods
    clearDelayTimeouts: Yi,
    setProps: Ki,
    setContent: Xi,
    show: Hm,
    hide: Vm,
    hideWithInteractivity: Fm,
    enable: ti,
    disable: ji,
    unmount: zm,
    destroy: Gm
  };
  if (!n.render)
    return process.env.NODE_ENV !== "production" && Zl(!0, "render() function has not been supplied."), y;
  var T = n.render(y), w = T.popper, C = T.onUpdate;
  w.setAttribute("data-tippy-root", ""), w.id = "tippy-" + y.id, y.popper = w, t._tippy = y, w._tippy = y;
  var S = E.map(function(M) {
    return M.fn(y);
  }), O = t.hasAttribute("aria-expanded");
  return St(), $(), A(), L("onCreate", [y]), n.showOnCreate && ei(), w.addEventListener("mouseenter", function() {
    y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
  }), w.addEventListener("mouseleave", function() {
    y.props.interactive && y.props.trigger.indexOf("mouseenter") >= 0 && R().addEventListener("mousemove", p);
  }), y;
  function P() {
    var M = y.props.touch;
    return Array.isArray(M) ? M : [M, 0];
  }
  function k() {
    return P()[0] === "hold";
  }
  function D() {
    var M;
    return !!((M = y.props.render) != null && M.$$tippy);
  }
  function F() {
    return m || t;
  }
  function R() {
    var M = F().parentNode;
    return M ? pb(M) : document;
  }
  function G() {
    return ta(w);
  }
  function I(M) {
    return y.state.isMounted && !y.state.isVisible || Ht.isTouch || d && d.type === "focus" ? 0 : dl(y.props.delay, M ? 0 : 1, at.delay);
  }
  function A(M) {
    M === void 0 && (M = !1), w.style.pointerEvents = y.props.interactive && !M ? "" : "none", w.style.zIndex = "" + y.props.zIndex;
  }
  function L(M, z, j) {
    if (j === void 0 && (j = !0), S.forEach(function(te) {
      te[M] && te[M].apply(te, z);
    }), j) {
      var re;
      (re = y.props)[M].apply(re, z);
    }
  }
  function B() {
    var M = y.props.aria;
    if (M.content) {
      var z = "aria-" + M.content, j = w.id, re = vr(y.props.triggerTarget || t);
      re.forEach(function(te) {
        var Ge = te.getAttribute(z);
        if (y.state.isVisible)
          te.setAttribute(z, Ge ? Ge + " " + j : j);
        else {
          var dt = Ge && Ge.replace(j, "").trim();
          dt ? te.setAttribute(z, dt) : te.removeAttribute(z);
        }
      });
    }
  }
  function $() {
    if (!(O || !y.props.aria.expanded)) {
      var M = vr(y.props.triggerTarget || t);
      M.forEach(function(z) {
        y.props.interactive ? z.setAttribute("aria-expanded", y.state.isVisible && z === F() ? "true" : "false") : z.removeAttribute("aria-expanded");
      });
    }
  }
  function K() {
    R().removeEventListener("mousemove", p), rs = rs.filter(function(M) {
      return M !== p;
    });
  }
  function ue(M) {
    if (!(Ht.isTouch && (a || M.type === "mousedown"))) {
      var z = M.composedPath && M.composedPath()[0] || M.target;
      if (!(y.props.interactive && Fd(w, z))) {
        if (vr(y.props.triggerTarget || t).some(function(j) {
          return Fd(j, z);
        })) {
          if (Ht.isTouch || y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
            return;
        } else
          L("onClickOutside", [y, M]);
        y.props.hideOnClick === !0 && (y.clearDelayTimeouts(), y.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), y.state.isMounted || X());
      }
    }
  }
  function ke() {
    a = !0;
  }
  function ge() {
    a = !1;
  }
  function ze() {
    var M = R();
    M.addEventListener("mousedown", ue, !0), M.addEventListener("touchend", ue, Pn), M.addEventListener("touchstart", ge, Pn), M.addEventListener("touchmove", ke, Pn);
  }
  function X() {
    var M = R();
    M.removeEventListener("mousedown", ue, !0), M.removeEventListener("touchend", ue, Pn), M.removeEventListener("touchstart", ge, Pn), M.removeEventListener("touchmove", ke, Pn);
  }
  function le(M, z) {
    it(M, function() {
      !y.state.isVisible && w.parentNode && w.parentNode.contains(w) && z();
    });
  }
  function Te(M, z) {
    it(M, z);
  }
  function it(M, z) {
    var j = G().box;
    function re(te) {
      te.target === j && (fl(j, "remove", re), z());
    }
    if (M === 0)
      return z();
    fl(j, "remove", u), fl(j, "add", re), u = re;
  }
  function ae(M, z, j) {
    j === void 0 && (j = !1);
    var re = vr(y.props.triggerTarget || t);
    re.forEach(function(te) {
      te.addEventListener(M, z, j), h.push({
        node: te,
        eventType: M,
        handler: z,
        options: j
      });
    });
  }
  function St() {
    k() && (ae("touchstart", Jr, {
      passive: !0
    }), ae("touchend", $i, {
      passive: !0
    })), lb(y.props.trigger).forEach(function(M) {
      if (M !== "manual")
        switch (ae(M, Jr), M) {
          case "mouseenter":
            ae("mouseleave", $i);
            break;
          case "focus":
            ae(bb ? "focusout" : "blur", Qr);
            break;
          case "focusin":
            ae("focusout", Qr);
            break;
        }
    });
  }
  function Gi() {
    h.forEach(function(M) {
      var z = M.node, j = M.eventType, re = M.handler, te = M.options;
      z.removeEventListener(j, re, te);
    }), h = [];
  }
  function Jr(M) {
    var z, j = !1;
    if (!(!y.state.isEnabled || Zr(M) || l)) {
      var re = ((z = d) == null ? void 0 : z.type) === "focus";
      d = M, m = M.currentTarget, $(), !y.state.isVisible && ub(M) && rs.forEach(function(te) {
        return te(M);
      }), M.type === "click" && (y.props.trigger.indexOf("mouseenter") < 0 || o) && y.props.hideOnClick !== !1 && y.state.isVisible ? j = !0 : ei(M), M.type === "click" && (o = !j), j && !re && Dn(M);
    }
  }
  function Ui(M) {
    var z = M.target, j = F().contains(z) || w.contains(z);
    if (!(M.type === "mousemove" && j)) {
      var re = an().concat(w).map(function(te) {
        var Ge, dt = te._tippy, fr = (Ge = dt.popperInstance) == null ? void 0 : Ge.state;
        return fr ? {
          popperRect: te.getBoundingClientRect(),
          popperState: fr,
          props: n
        } : null;
      }).filter(Boolean);
      mb(re, M) && (K(), Dn(M));
    }
  }
  function $i(M) {
    var z = Zr(M) || y.props.trigger.indexOf("click") >= 0 && o;
    if (!z) {
      if (y.props.interactive) {
        y.hideWithInteractivity(M);
        return;
      }
      Dn(M);
    }
  }
  function Qr(M) {
    y.props.trigger.indexOf("focusin") < 0 && M.target !== F() || y.props.interactive && M.relatedTarget && w.contains(M.relatedTarget) || Dn(M);
  }
  function Zr(M) {
    return Ht.isTouch ? k() !== M.type.indexOf("touch") >= 0 : !1;
  }
  function Wi() {
    qi();
    var M = y.props, z = M.popperOptions, j = M.placement, re = M.offset, te = M.getReferenceClientRect, Ge = M.moveTransition, dt = D() ? ta(w).arrow : null, fr = te ? {
      getBoundingClientRect: te,
      contextElement: te.contextElement || F()
    } : t, wc = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Ji) {
        var hr = Ji.state;
        if (D()) {
          var Um = G(), Go = Um.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Qi) {
            Qi === "placement" ? Go.setAttribute("data-placement", hr.placement) : hr.attributes.popper["data-popper-" + Qi] ? Go.setAttribute("data-" + Qi, "") : Go.removeAttribute("data-" + Qi);
          }), hr.attributes.popper = {};
        }
      }
    }, Nn = [{
      name: "offset",
      options: {
        offset: re
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Ge
      }
    }, wc];
    D() && dt && Nn.push({
      name: "arrow",
      options: {
        element: dt,
        padding: 3
      }
    }), Nn.push.apply(Nn, (z == null ? void 0 : z.modifiers) || []), y.popperInstance = nb(fr, w, Object.assign({}, z, {
      placement: j,
      onFirstUpdate: f,
      modifiers: Nn
    }));
  }
  function qi() {
    y.popperInstance && (y.popperInstance.destroy(), y.popperInstance = null);
  }
  function Kt() {
    var M = y.props.appendTo, z, j = F();
    y.props.interactive && M === cp || M === "parent" ? z = j.parentNode : z = dp(M, [j]), z.contains(w) || z.appendChild(w), y.state.isMounted = !0, Wi(), process.env.NODE_ENV !== "production" && en(y.props.interactive && M === at.appendTo && j.nextElementSibling !== w, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function an() {
    return js(w.querySelectorAll("[data-tippy-root]"));
  }
  function ei(M) {
    y.clearDelayTimeouts(), M && L("onTrigger", [y, M]), ze();
    var z = I(!0), j = P(), re = j[0], te = j[1];
    Ht.isTouch && re === "hold" && te && (z = te), z ? r = setTimeout(function() {
      y.show();
    }, z) : y.show();
  }
  function Dn(M) {
    if (y.clearDelayTimeouts(), L("onUntrigger", [y, M]), !y.state.isVisible) {
      X();
      return;
    }
    if (!(y.props.trigger.indexOf("mouseenter") >= 0 && y.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(M.type) >= 0 && o)) {
      var z = I(!1);
      z ? i = setTimeout(function() {
        y.state.isVisible && y.hide();
      }, z) : s = requestAnimationFrame(function() {
        y.hide();
      });
    }
  }
  function ti() {
    y.state.isEnabled = !0;
  }
  function ji() {
    y.hide(), y.state.isEnabled = !1;
  }
  function Yi() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(s);
  }
  function Ki(M) {
    if (process.env.NODE_ENV !== "production" && en(y.state.isDestroyed, mr("setProps")), !y.state.isDestroyed) {
      L("onBeforeUpdate", [y, M]), Gi();
      var z = y.props, j = Ud(t, Object.assign({}, z, Hd(M), {
        ignoreAttributes: !0
      }));
      y.props = j, St(), z.interactiveDebounce !== j.interactiveDebounce && (K(), p = Pd(Ui, j.interactiveDebounce)), z.triggerTarget && !j.triggerTarget ? vr(z.triggerTarget).forEach(function(re) {
        re.removeAttribute("aria-expanded");
      }) : j.triggerTarget && t.removeAttribute("aria-expanded"), $(), A(), C && C(z, j), y.popperInstance && (Wi(), an().forEach(function(re) {
        requestAnimationFrame(re._tippy.popperInstance.forceUpdate);
      })), L("onAfterUpdate", [y, M]);
    }
  }
  function Xi(M) {
    y.setProps({
      content: M
    });
  }
  function Hm() {
    process.env.NODE_ENV !== "production" && en(y.state.isDestroyed, mr("show"));
    var M = y.state.isVisible, z = y.state.isDestroyed, j = !y.state.isEnabled, re = Ht.isTouch && !y.props.touch, te = dl(y.props.duration, 0, at.duration);
    if (!(M || z || j || re) && !F().hasAttribute("disabled") && (L("onShow", [y], !1), y.props.onShow(y) !== !1)) {
      if (y.state.isVisible = !0, D() && (w.style.visibility = "visible"), A(), ze(), y.state.isMounted || (w.style.transition = "none"), D()) {
        var Ge = G(), dt = Ge.box, fr = Ge.content;
        ul([dt, fr], 0);
      }
      f = function() {
        var Nn;
        if (!(!y.state.isVisible || c)) {
          if (c = !0, w.offsetHeight, w.style.transition = y.props.moveTransition, D() && y.props.animation) {
            var zo = G(), Ji = zo.box, hr = zo.content;
            ul([Ji, hr], te), Vd([Ji, hr], "visible");
          }
          B(), $(), Bd(hl, y), (Nn = y.popperInstance) == null || Nn.forceUpdate(), L("onMount", [y]), y.props.animation && D() && Te(te, function() {
            y.state.isShown = !0, L("onShown", [y]);
          });
        }
      }, Kt();
    }
  }
  function Vm() {
    process.env.NODE_ENV !== "production" && en(y.state.isDestroyed, mr("hide"));
    var M = !y.state.isVisible, z = y.state.isDestroyed, j = !y.state.isEnabled, re = dl(y.props.duration, 1, at.duration);
    if (!(M || z || j) && (L("onHide", [y], !1), y.props.onHide(y) !== !1)) {
      if (y.state.isVisible = !1, y.state.isShown = !1, c = !1, o = !1, D() && (w.style.visibility = "hidden"), K(), X(), A(!0), D()) {
        var te = G(), Ge = te.box, dt = te.content;
        y.props.animation && (ul([Ge, dt], re), Vd([Ge, dt], "hidden"));
      }
      B(), $(), y.props.animation ? D() && le(re, y.unmount) : y.unmount();
    }
  }
  function Fm(M) {
    process.env.NODE_ENV !== "production" && en(y.state.isDestroyed, mr("hideWithInteractivity")), R().addEventListener("mousemove", p), Bd(rs, p), p(M);
  }
  function zm() {
    process.env.NODE_ENV !== "production" && en(y.state.isDestroyed, mr("unmount")), y.state.isVisible && y.hide(), y.state.isMounted && (qi(), an().forEach(function(M) {
      M._tippy.unmount();
    }), w.parentNode && w.parentNode.removeChild(w), hl = hl.filter(function(M) {
      return M !== y;
    }), y.state.isMounted = !1, L("onHidden", [y]));
  }
  function Gm() {
    process.env.NODE_ENV !== "production" && en(y.state.isDestroyed, mr("destroy")), !y.state.isDestroyed && (y.clearDelayTimeouts(), y.unmount(), Gi(), delete t._tippy, y.state.isDestroyed = !0, L("onDestroy", [y]));
  }
}
function cr(t, e) {
  e === void 0 && (e = {});
  var n = at.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (Sb(t), mp(e, n)), Eb();
  var r = Object.assign({}, e, {
    plugins: n
  }), i = hb(t);
  if (process.env.NODE_ENV !== "production") {
    var s = ki(r.content), o = i.length > 1;
    en(s && o, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var d = c && xb(c, r);
    return d && a.push(d), a;
  }, []);
  return ki(t) ? l[0] : l;
}
cr.defaultProps = at;
cr.setDefaultProps = Mb;
cr.currentInput = Ht;
Object.assign({}, Qh, {
  effect: function(e) {
    var n = e.state, r = {
      popper: {
        position: n.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow);
  }
});
cr.setDefaultProps({
  render: gp
});
class _b {
  constructor({ editor: e, element: n, view: r, tippyOptions: i = {}, updateDelay: s = 250, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: d }) => {
      const { doc: u, selection: f } = a, { empty: h } = f, p = !u.textBetween(c, d).length && Ga(a.selection), m = this.element.contains(document.activeElement);
      return !(!(l.hasFocus() || m) || h || p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: l }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      l != null && l.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(l.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (l) => {
      this.blurHandler({ event: l });
    }, this.handleDebouncedUpdate = (l, a) => {
      const c = !(a != null && a.selection.eq(l.state.selection)), d = !(a != null && a.doc.eq(l.state.doc));
      !c && !d || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(l, c, d, a);
      }, this.updateDelay));
    }, this.updateHandler = (l, a, c, d) => {
      var u, f, h;
      const { state: p, composing: m } = l, { selection: g } = p;
      if (m || !a && !c)
        return;
      this.createTooltip();
      const { ranges: E } = g, b = Math.min(...E.map((w) => w.$from.pos)), y = Math.max(...E.map((w) => w.$to.pos));
      if (!((u = this.shouldShow) === null || u === void 0 ? void 0 : u.call(this, {
        editor: this.editor,
        view: l,
        state: p,
        oldState: d,
        from: b,
        to: y
      }))) {
        this.hide();
        return;
      }
      (f = this.tippy) === null || f === void 0 || f.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (vE(p.selection)) {
            let w = l.nodeDOM(b);
            const C = w.dataset.nodeViewWrapper ? w : w.querySelector("[data-node-view-wrapper]");
            if (C && (w = C.firstChild), w)
              return w.getBoundingClientRect();
          }
          return Yh(l, b, y);
        })
      }), this.show();
    }, this.editor = e, this.element = n, this.view = r, this.updateDelay = s, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, n = !!e.parentElement;
    this.tippy || !n || (this.tippy = cr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, n) {
    const { state: r } = e, i = r.selection.$from.pos !== r.selection.$to.pos;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, n);
      return;
    }
    const s = !(n != null && n.selection.eq(e.state.selection)), o = !(n != null && n.doc.eq(e.state.doc));
    this.updateHandler(e, s, o, n);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, n;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (n = this.tippy) === null || n === void 0 || n.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const yp = (t) => new me({
  key: typeof t.pluginKey == "string" ? new Ie(t.pluginKey) : t.pluginKey,
  view: (e) => new _b({ view: e, ...t })
});
be.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      yp({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class kb {
  constructor({ editor: e, element: n, view: r, tippyOptions: i = {}, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: o, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: d } = a, u = c.depth === 1, f = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!o.hasFocus() || !d || !u || !f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: o }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      o != null && o.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(o.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (o) => {
      this.blurHandler({ event: o });
    }, this.editor = e, this.element = n, this.view = r, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, n = !!e.parentElement;
    this.tippy || !n || (this.tippy = cr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, n) {
    var r, i, s;
    const { state: o } = e, { doc: l, selection: a } = o, { from: c, to: d } = a;
    if (n && n.doc.eq(l) && n.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: o,
      oldState: n
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((s = this.tippyOptions) === null || s === void 0 ? void 0 : s.getReferenceClientRect) || (() => Yh(e, c, d))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, n;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (n = this.tippy) === null || n === void 0 || n.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Ep = (t) => new me({
  key: typeof t.pluginKey == "string" ? new Ie(t.pluginKey) : t.pluginKey,
  view: (e) => new kb({ view: e, ...t })
});
be.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Ep({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
const Db = jr({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(t, { slots: e }) {
    const n = go(null);
    return bf(() => {
      const { updateDelay: r, editor: i, pluginKey: s, shouldShow: o, tippyOptions: l } = t;
      i.registerPlugin(yp({
        updateDelay: r,
        editor: i,
        element: n.value,
        pluginKey: s,
        shouldShow: o,
        tippyOptions: l
      }));
    }), Ia(() => {
      const { pluginKey: r, editor: i } = t;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return nn("div", { ref: n }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function qd(t) {
  return Km((e, n) => ({
    get() {
      return e(), t;
    },
    set(r) {
      t = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
class Nb extends YE {
  constructor(e = {}) {
    return super(e), this.vueRenderers = wf(/* @__PURE__ */ new Map()), this.contentComponent = null, this.reactiveState = qd(this.view.state), this.reactiveExtensionStorage = qd(this.extensionStorage), this.on("transaction", () => {
      this.reactiveState.value = this.view.state, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Tf(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, n) {
    super.registerPlugin(e, n), this.reactiveState.value = this.view.state;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    super.unregisterPlugin(e), this.reactiveState.value = this.view.state;
  }
}
const Lb = jr({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(t) {
    const e = go(), n = $m();
    return Wm(() => {
      const r = t.editor;
      r && r.options.element && e.value && qm(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = jm(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = n.ctx._, r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), Ia(() => {
      const r = t.editor;
      if (!r || (r.isDestroyed || r.view.setProps({
        nodeViews: {}
      }), r.contentComponent = null, !r.options.element.firstChild))
        return;
      const i = document.createElement("div");
      i.append(...r.options.element.childNodes), r.setOptions({
        element: i
      });
    }), { rootEl: e };
  },
  render() {
    const t = [];
    return this.editor && this.editor.vueRenderers.forEach((e) => {
      const n = nn(Ym, {
        to: e.teleportElement,
        key: e.id
      }, nn(e.component, {
        ref: e.id,
        ...e.props
      }));
      t.push(n);
    }), nn("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    }, ...t);
  }
});
jr({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(t, { slots: e }) {
    const n = go(null);
    return bf(() => {
      const { pluginKey: r, editor: i, tippyOptions: s, shouldShow: o } = t;
      i.registerPlugin(Ep({
        pluginKey: r,
        editor: i,
        element: n.value,
        tippyOptions: s,
        shouldShow: o
      }));
    }), Ia(() => {
      const { pluginKey: r, editor: i } = t;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return nn("div", { ref: n }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
const vp = jr({
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return nn(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
}), bp = jr({
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var t, e;
    return nn(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (t = this.$slots).default) === null || e === void 0 ? void 0 : e.call(t));
  }
});
class wp {
  constructor(e, { props: n = {}, editor: r }) {
    if (this.id = Math.floor(Math.random() * 4294967295).toString(), this.editor = r, this.component = Tf(e), this.teleportElement = document.createElement("div"), this.element = this.teleportElement, this.props = wf(n), this.editor.vueRenderers.set(this.id, this), this.editor.contentComponent) {
      if (this.editor.contentComponent.update(), this.teleportElement.children.length !== 1)
        throw Error("VueRenderer doesn’t support multiple child elements.");
      this.element = this.teleportElement.firstElementChild;
    }
  }
  get ref() {
    var e;
    return (e = this.editor.contentComponent) === null || e === void 0 ? void 0 : e.refs[this.id];
  }
  updateProps(e = {}) {
    Object.entries(e).forEach(([n, r]) => {
      this.props[n] = r;
    });
  }
  destroy() {
    this.editor.vueRenderers.delete(this.id);
  }
}
const Tp = {
  editor: {
    type: Object,
    required: !0
  },
  node: {
    type: Object,
    required: !0
  },
  decorations: {
    type: Object,
    required: !0
  },
  selected: {
    type: Boolean,
    required: !0
  },
  extension: {
    type: Object,
    required: !0
  },
  getPos: {
    type: Function,
    required: !0
  },
  updateAttributes: {
    type: Function,
    required: !0
  },
  deleteNode: {
    type: Function,
    required: !0
  }
};
class Pb extends KE {
  mount() {
    const e = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      selected: !1,
      extension: this.extension,
      getPos: () => this.getPos(),
      updateAttributes: (i = {}) => this.updateAttributes(i),
      deleteNode: () => this.deleteNode()
    }, n = this.onDragStart.bind(this);
    this.decorationClasses = go(this.getDecorationClasses());
    const r = jr({
      extends: { ...this.component },
      props: Object.keys(e),
      template: this.component.template,
      setup: (i) => {
        var s, o;
        return Sc("onDragStart", n), Sc("decorationClasses", this.decorationClasses), (o = (s = this.component).setup) === null || o === void 0 ? void 0 : o.call(s, i, {
          expose: () => {
          }
        });
      },
      // add support for scoped styles
      // @ts-ignore
      // eslint-disable-next-line
      __scopeId: this.component.__scopeId,
      // add support for CSS Modules
      // @ts-ignore
      // eslint-disable-next-line
      __cssModules: this.component.__cssModules
    });
    this.renderer = new wp(r, {
      editor: this.editor,
      props: e
    });
  }
  get dom() {
    if (!this.renderer.element.hasAttribute("data-node-view-wrapper"))
      throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  get contentDOM() {
    return this.node.isLeaf ? null : this.dom.querySelector("[data-node-view-content]") || this.dom;
  }
  update(e, n) {
    const r = (i) => {
      this.decorationClasses.value = this.getDecorationClasses(), this.renderer.updateProps(i);
    };
    if (typeof this.options.update == "function") {
      const i = this.node, s = this.decorations;
      return this.node = e, this.decorations = n, this.options.update({
        oldNode: i,
        oldDecorations: s,
        newNode: e,
        newDecorations: n,
        updateProps: () => r({ node: e, decorations: n })
      });
    }
    return e.type !== this.node.type ? !1 : (e === this.node && this.decorations === n || (this.node = e, this.decorations = n, r({ node: e, decorations: n })), !0);
  }
  selectNode() {
    this.renderer.updateProps({
      selected: !0
    });
  }
  deselectNode() {
    this.renderer.updateProps({
      selected: !1
    });
  }
  getDecorationClasses() {
    return this.decorations.map((e) => e.type.attrs.class).flat().join(" ");
  }
  destroy() {
    this.renderer.destroy();
  }
}
function Sp(t, e) {
  return (n) => n.editor.contentComponent ? new Pb(t, n, e) : {};
}
const Bb = /^\s*>\s$/, Ip = oe.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["blockquote", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Ri({
        find: Bb,
        type: this.type
      })
    ];
  }
}), Hb = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, Vb = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, Fb = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, zb = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, Gb = nt.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["strong", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      sr({
        find: Hb,
        type: this.type
      }),
      sr({
        find: Fb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      An({
        find: Vb,
        type: this.type
      }),
      An({
        find: zb,
        type: this.type
      })
    ];
  }
}), Ub = oe.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", ne(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), jd = nt.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (t) => t.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: t, commands: e }) => {
        const n = xo(t, this.type);
        return Object.entries(n).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), Yd = /^\s*([-+*])\s$/, $b = oe.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Ub.name, this.editor.getAttributes(jd.name)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = Ri({
      find: Yd,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = Ri({
      find: Yd,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(jd.name),
      editor: this.editor
    })), [
      t
    ];
  }
}), Wb = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/, qb = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g, jb = nt.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      sr({
        find: Wb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      An({
        find: qb,
        type: this.type
      })
    ];
  }
}), Yb = /^```([a-z]+)?[\s\n]$/, Kb = /^~~~([a-z]+)?[\s\n]$/, Xb = oe.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: (t) => {
          var e;
          const { languageClassPrefix: n } = this.options, s = [...((e = t.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((o) => o.startsWith(n)).map((o) => o.replace(n, ""))[0];
          return s || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "pre",
      ne(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (t) => ({ commands: e }) => e.setNode(this.name, t),
      toggleCodeBlock: (t) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", t)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: t, $anchor: e } = this.editor.state.selection, n = e.pos === 1;
        return !t || e.parent.type.name !== this.name ? !1 : n || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: t }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = t, { selection: n } = e, { $from: r, empty: i } = n;
        if (!i || r.parent.type !== this.type)
          return !1;
        const s = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith(`

`);
        return !s || !o ? !1 : t.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: t }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = t, { selection: n, doc: r } = e, { $from: i, empty: s } = n;
        if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 || r.nodeAt(l) ? !1 : t.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Xl({
        find: Yb,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      }),
      Xl({
        find: Kb,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new me({
        key: new Ie("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (t, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, s = i == null ? void 0 : i.mode;
            if (!n || !s)
              return !1;
            const { tr: o } = t.state;
            return o.replaceSelectionWith(this.type.create({ language: s })), o.setSelection(Y.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.insertText(n.replace(/\r\n?/g, `
`)), o.setMeta("paste", !0), t.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), Jb = oe.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function Qb(t = {}) {
  return new me({
    view(e) {
      return new Zb(e, t);
    }
  });
}
class Zb {
  constructor(e, n) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let s = (o) => {
        this[i](o);
      };
      return e.dom.addEventListener(i, s), { name: i, handler: s };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: n }) => this.editorView.dom.removeEventListener(e, n));
  }
  update(e, n) {
    this.cursorPos != null && n.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), n = !e.parent.inlineContent, r;
    if (n) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let d = c.getBoundingClientRect(), u = l ? d.bottom : d.top;
          l && a && (u = (u + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: d.left, right: d.right, top: u - this.width / 2, bottom: u + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let s, o;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      s = -pageXOffset, o = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      s = l.left - i.scrollLeft, o = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - s + "px", this.element.style.top = r.top - o + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), i = r && r.type.spec.disableDropCursor, s = typeof i == "function" ? i(this.editorView, n, e) : i;
    if (n && !s) {
      let o = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = jf(this.editorView.state.doc, o, this.editorView.dragging.slice);
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const ew = be.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      Qb(this.options)
    ];
  }
});
class fe extends q {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    return fe.valid(r) ? new fe(r) : q.near(r);
  }
  content() {
    return H.empty;
  }
  eq(e) {
    return e instanceof fe && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new fe(e.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Qa(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let n = e.parent;
    if (n.isTextblock || !tw(e) || !nw(e))
      return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = n.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, n, r = !1) {
    e:
      for (; ; ) {
        if (!r && fe.valid(e))
          return e;
        let i = e.pos, s = null;
        for (let o = e.depth; ; o--) {
          let l = e.node(o);
          if (n > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
            s = l.child(n > 0 ? e.indexAfter(o) : e.index(o) - 1);
            break;
          } else if (o == 0)
            return null;
          i += n;
          let a = e.doc.resolve(i);
          if (fe.valid(a))
            return a;
        }
        for (; ; ) {
          let o = n > 0 ? s.firstChild : s.lastChild;
          if (!o) {
            if (s.isAtom && !s.isText && !W.isSelectable(s)) {
              e = e.doc.resolve(i + s.nodeSize * n), r = !1;
              continue e;
            }
            break;
          }
          s = o, i += n;
          let l = e.doc.resolve(i);
          if (fe.valid(l))
            return l;
        }
        return null;
      }
  }
}
fe.prototype.visible = !1;
fe.findFrom = fe.findGapCursorFrom;
q.jsonID("gapcursor", fe);
class Qa {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Qa(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return fe.valid(n) ? new fe(n) : q.near(n);
  }
}
function tw(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.index(e), r = t.node(e);
    if (n == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function nw(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.indexAfter(e), r = t.node(e);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(n); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function rw() {
  return new me({
    props: {
      decorations: lw,
      createSelectionBetween(t, e, n) {
        return e.pos == n.pos && fe.valid(n) ? new fe(n) : null;
      },
      handleClick: sw,
      handleKeyDown: iw,
      handleDOMEvents: { beforeinput: ow }
    }
  });
}
const iw = Va({
  ArrowLeft: is("horiz", -1),
  ArrowRight: is("horiz", 1),
  ArrowUp: is("vert", -1),
  ArrowDown: is("vert", 1)
});
function is(t, e) {
  const n = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, s) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof Y) {
      if (!s.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = fe.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new fe(c))), !0) : !1;
  };
}
function sw(t, e, n) {
  if (!t || !t.editable)
    return !1;
  let r = t.state.doc.resolve(e);
  if (!fe.valid(r))
    return !1;
  let i = t.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && W.isSelectable(t.state.doc.nodeAt(i.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new fe(r))), !0);
}
function ow(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof fe))
    return !1;
  let { $from: n } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = x.empty;
  for (let o = r.length - 1; o >= 0; o--)
    i = x.from(r[o].createAndFill(null, i));
  let s = t.state.tr.replace(n.pos, n.pos, new H(i, 0, 0));
  return s.setSelection(Y.near(s.doc.resolve(n.pos + 1))), t.dispatch(s), !1;
}
function lw(t) {
  if (!(t.selection instanceof fe))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", se.create(t.doc, [Ve.widget(t.selection.head, e, { key: "gapcursor" })]);
}
const aw = be.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      rw()
    ];
  },
  extendNodeSchema(t) {
    var e;
    const n = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = Q(V(t, "allowGapCursor", n))) !== null && e !== void 0 ? e : null
    };
  }
}), cw = oe.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", ne(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: n, editor: r }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: i, storedMarks: s } = n;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, a = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
            if (d && a && o) {
              const u = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(u);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), dw = oe.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, ne(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((t, e) => ({
      ...t,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((t) => Xl({
      find: new RegExp(`^(#{1,${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
var Ys = 200, xe = function() {
};
xe.prototype.append = function(e) {
  return e.length ? (e = xe.from(e), !this.length && e || e.length < Ys && this.leafAppend(e) || this.length < Ys && e.leafPrepend(this) || this.appendInner(e)) : this;
};
xe.prototype.prepend = function(e) {
  return e.length ? xe.from(e).append(this) : this;
};
xe.prototype.appendInner = function(e) {
  return new uw(this, e);
};
xe.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? xe.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
xe.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
xe.prototype.forEach = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0);
};
xe.prototype.map = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, n, r), i;
};
xe.from = function(e) {
  return e instanceof xe ? e : e && e.length ? new Cp(e) : xe.empty;
};
var Cp = /* @__PURE__ */ function(t) {
  function e(r) {
    t.call(this), this.values = r;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var a = s; a < o; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Ys)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Ys)
      return new e(i.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
}(xe);
xe.empty = new Cp([]);
var uw = /* @__PURE__ */ function(t) {
  function e(n, r) {
    t.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(xe);
const fw = 500;
class Mt {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    n && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, a, c = [], d = [];
    return this.items.forEach((u, f) => {
      if (!u.step) {
        i || (i = this.remapping(r, f + 1), s = i.maps.length), s--, d.push(u);
        return;
      }
      if (i) {
        d.push(new Dt(u.map));
        let h = u.step.map(i.slice(s)), p;
        h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new Dt(p, void 0, void 0, c.length + d.length))), s--, p && i.appendMap(p, s);
      } else
        o.maybeStep(u.step);
      if (u.selection)
        return l = i ? u.selection.map(i.slice(s)) : u.selection, a = new Mt(this.items.slice(0, r).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, r, i) {
    let s = [], o = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), f = new Dt(e.mapping.maps[d], u, n), h;
      (h = a && a.merge(f)) && (f = h, d ? s.pop() : l = l.slice(0, l.length - 1)), s.push(f), n && (o++, n = void 0), i || (a = f);
    }
    let c = o - r.depth;
    return c > pw && (l = hw(l, c), o -= c), new Mt(l.append(s), o);
  }
  remapping(e, n) {
    let r = new Rr();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, n), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Mt(this.items.append(e.map((n) => new Dt(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - n), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = n;
    this.items.forEach((f) => {
      let h = s.getMirror(--a);
      if (h == null)
        return;
      o = Math.min(o, h);
      let p = s.maps[h];
      if (f.step) {
        let m = e.steps[h].invert(e.docs[h]), g = f.selection && f.selection.map(s.slice(a + 1, h));
        g && l++, r.push(new Dt(p, m, g));
      } else
        r.push(new Dt(p));
    }, i);
    let c = [];
    for (let f = n; f < o; f++)
      c.push(new Dt(s.maps[f]));
    let d = this.items.slice(0, i).append(c).append(r), u = new Mt(d, l);
    return u.emptyItemCount() > fw && (u = u.compress(this.items.length - r.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((n) => {
      n.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let n = this.remapping(0, e), r = n.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(n.slice(r)), c = a && a.getMap();
        if (r--, c && n.appendMap(c, r), a) {
          let d = o.selection && o.selection.map(n.slice(r));
          d && s++;
          let u = new Dt(c.invert(), a, d), f, h = i.length - 1;
          (f = i.length && i[h].merge(u)) ? i[h] = f : i.push(u);
        }
      } else
        o.map && r--;
    }, this.items.length, 0), new Mt(xe.from(i.reverse()), s);
  }
}
Mt.empty = new Mt(xe.empty, 0);
function hw(t, e) {
  let n;
  return t.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return n = i, !1;
  }), t.slice(n);
}
class Dt {
  constructor(e, n, r, i) {
    this.map = e, this.step = n, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new Dt(n.getMap().invert(), n, this.selection);
    }
  }
}
class hn {
  constructor(e, n, r, i, s) {
    this.done = e, this.undone = n, this.prevRanges = r, this.prevTime = i, this.prevComposition = s;
  }
}
const pw = 20;
function mw(t, e, n, r) {
  let i = n.getMeta(Cn), s;
  if (i)
    return i.historyState;
  n.getMeta(yw) && (t = new hn(t.done, t.undone, null, 0, -1));
  let o = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t;
  if (o && o.getMeta(Cn))
    return o.getMeta(Cn).redo ? new hn(t.done.addTransform(n, void 0, r, Cs(e)), t.undone, Kd(n.mapping.maps[n.steps.length - 1]), t.prevTime, t.prevComposition) : new hn(t.done, t.undone.addTransform(n, void 0, r, Cs(e)), null, t.prevTime, t.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = t.prevTime == 0 || !o && t.prevComposition != l && (t.prevTime < (n.time || 0) - r.newGroupDelay || !gw(n, t.prevRanges)), c = o ? pl(t.prevRanges, n.mapping) : Kd(n.mapping.maps[n.steps.length - 1]);
    return new hn(t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, r, Cs(e)), Mt.empty, c, n.time, l ?? t.prevComposition);
  } else
    return (s = n.getMeta("rebased")) ? new hn(t.done.rebased(n, s), t.undone.rebased(n, s), pl(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new hn(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), pl(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
}
function gw(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let n = !1;
  return t.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (n = !0);
  }), n;
}
function Kd(t) {
  let e = [];
  return t.forEach((n, r, i, s) => e.push(i, s)), e;
}
function pl(t, e) {
  if (!t)
    return null;
  let n = [];
  for (let r = 0; r < t.length; r += 2) {
    let i = e.map(t[r], 1), s = e.map(t[r + 1], -1);
    i <= s && n.push(i, s);
  }
  return n;
}
function Mp(t, e, n, r) {
  let i = Cs(e), s = Cn.get(e).spec.config, o = (r ? t.undone : t.done).popEvent(e, i);
  if (!o)
    return;
  let l = o.selection.resolve(o.transform.doc), a = (r ? t.done : t.undone).addTransform(o.transform, e.selection.getBookmark(), s, i), c = new hn(r ? a : o.remaining, r ? o.remaining : a, null, 0, -1);
  n(o.transform.setSelection(l).setMeta(Cn, { redo: r, historyState: c }).scrollIntoView());
}
let ml = !1, Xd = null;
function Cs(t) {
  let e = t.plugins;
  if (Xd != e) {
    ml = !1, Xd = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        ml = !0;
        break;
      }
  }
  return ml;
}
const Cn = new Ie("history"), yw = new Ie("closeHistory");
function Ew(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new me({
    key: Cn,
    state: {
      init() {
        return new hn(Mt.empty, Mt.empty, null, 0, -1);
      },
      apply(e, n, r) {
        return mw(n, r, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let r = n.inputType, i = r == "historyUndo" ? Op : r == "historyRedo" ? Ap : null;
          return i ? (n.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const Op = (t, e) => {
  let n = Cn.getState(t);
  return !n || n.done.eventCount == 0 ? !1 : (e && Mp(n, t, e, !1), !0);
}, Ap = (t, e) => {
  let n = Cn.getState(t);
  return !n || n.undone.eventCount == 0 ? !1 : (e && Mp(n, t, e, !0), !0);
}, vw = be.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => Op(t, e),
      redo: () => ({ state: t, dispatch: e }) => Ap(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      Ew(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), bw = oe.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["hr", ne(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: t }) => t().insertContent({ type: this.name }).command(({ tr: e, dispatch: n }) => {
        var r;
        if (n) {
          const { $to: i } = e.selection, s = i.end();
          if (i.nodeAfter)
            e.setSelection(Y.create(e.doc, i.pos));
          else {
            const o = (r = i.parent.type.contentMatch.defaultType) === null || r === void 0 ? void 0 : r.create();
            o && (e.insert(s, o), e.setSelection(Y.create(e.doc, s)));
          }
          e.scrollIntoView();
        }
        return !0;
      }).run()
    };
  },
  addInputRules() {
    return [
      Kh({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), ww = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, Tw = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, Sw = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, Iw = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, Cw = nt.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      sr({
        find: ww,
        type: this.type
      }),
      sr({
        find: Sw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      An({
        find: Tw,
        type: this.type
      }),
      An({
        find: Iw,
        type: this.type
      })
    ];
  }
}), Mw = oe.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", ne(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Ow = oe.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", ne(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Jd = nt.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (t) => t.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: t, commands: e }) => {
        const n = xo(t, this.type);
        return Object.entries(n).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), Qd = /^(\d+)\.\s$/, Aw = oe.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, ...n } = t;
    return e === 1 ? ["ol", ne(this.options.HTMLAttributes, n), 0] : ["ol", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Ow.name, this.editor.getAttributes(Jd.name)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = Ri({
      find: Qd,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = Ri({
      find: Qd,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Jd.name) }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1],
      editor: this.editor
    })), [
      t
    ];
  }
}), Rw = oe.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), xw = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/, _w = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g, kw = nt.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-x": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      sr({
        find: xw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      An({
        find: _w,
        type: this.type
      })
    ];
  }
}), Dw = oe.create({
  name: "text",
  group: "inline"
}), Nw = be.create({
  name: "starterKit",
  addExtensions() {
    var t, e, n, r, i, s, o, l, a, c, d, u, f, h, p, m, g, v;
    const E = [];
    return this.options.blockquote !== !1 && E.push(Ip.configure((t = this.options) === null || t === void 0 ? void 0 : t.blockquote)), this.options.bold !== !1 && E.push(Gb.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && E.push($b.configure((n = this.options) === null || n === void 0 ? void 0 : n.bulletList)), this.options.code !== !1 && E.push(jb.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && E.push(Xb.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && E.push(Jb.configure((s = this.options) === null || s === void 0 ? void 0 : s.document)), this.options.dropcursor !== !1 && E.push(ew.configure((o = this.options) === null || o === void 0 ? void 0 : o.dropcursor)), this.options.gapcursor !== !1 && E.push(aw.configure((l = this.options) === null || l === void 0 ? void 0 : l.gapcursor)), this.options.hardBreak !== !1 && E.push(cw.configure((a = this.options) === null || a === void 0 ? void 0 : a.hardBreak)), this.options.heading !== !1 && E.push(dw.configure((c = this.options) === null || c === void 0 ? void 0 : c.heading)), this.options.history !== !1 && E.push(vw.configure((d = this.options) === null || d === void 0 ? void 0 : d.history)), this.options.horizontalRule !== !1 && E.push(bw.configure((u = this.options) === null || u === void 0 ? void 0 : u.horizontalRule)), this.options.italic !== !1 && E.push(Cw.configure((f = this.options) === null || f === void 0 ? void 0 : f.italic)), this.options.listItem !== !1 && E.push(Mw.configure((h = this.options) === null || h === void 0 ? void 0 : h.listItem)), this.options.orderedList !== !1 && E.push(Aw.configure((p = this.options) === null || p === void 0 ? void 0 : p.orderedList)), this.options.paragraph !== !1 && E.push(Rw.configure((m = this.options) === null || m === void 0 ? void 0 : m.paragraph)), this.options.strike !== !1 && E.push(kw.configure((g = this.options) === null || g === void 0 ? void 0 : g.strike)), this.options.text !== !1 && E.push(Dw.configure((v = this.options) === null || v === void 0 ? void 0 : v.text)), E;
  }
}), Lw = "aaa1rp3barth4b0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0faromeo7ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re2s2c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y0eats7k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking0channel11l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t0isalat7u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0at2delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d0network8tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntdoor4ier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5gtv3iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0eles2s3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1nder2le4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster5ia3d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4de2k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0cys3drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7serati6ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic3tual5v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rthwesternmutual14on4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3ssagens7y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cher3ks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w0time7i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ffany5ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0channel7ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lkswagen7vo3te1ing3o2yage5u0elos6wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Pw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5تصالات6رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", $r = (t, e) => {
  for (const n in e)
    t[n] = e[n];
  return t;
}, na = "numeric", ra = "ascii", ia = "alpha", Ms = "asciinumeric", ss = "alphanumeric", sa = "domain", Rp = "emoji", Bw = "scheme", Hw = "slashscheme", Zd = "whitespace";
function Vw(t, e) {
  return t in e || (e[t] = []), e[t];
}
function Un(t, e, n) {
  e[na] && (e[Ms] = !0, e[ss] = !0), e[ra] && (e[Ms] = !0, e[ia] = !0), e[Ms] && (e[ss] = !0), e[ia] && (e[ss] = !0), e[ss] && (e[sa] = !0), e[Rp] && (e[sa] = !0);
  for (const r in e) {
    const i = Vw(r, n);
    i.indexOf(t) < 0 && i.push(t);
  }
}
function Fw(t, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function Qe(t) {
  t === void 0 && (t = null), this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
Qe.groups = {};
Qe.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t) {
    const e = this, n = e.j[t];
    if (n)
      return n;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], s = e.jr[r][1];
      if (s && i.test(t))
        return s;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t, e) {
    return e === void 0 && (e = !1), e ? t in this.j : !!this.go(t);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t, e, n, r) {
    for (let i = 0; i < t.length; i++)
      this.tt(t[i], e, n, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t, e, n, r) {
    r = r || Qe.groups;
    let i;
    return e && e.j ? i = e : (i = new Qe(e), n && r && Un(e, n, r)), this.jr.push([t, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t, e, n, r) {
    let i = this;
    const s = t.length;
    if (!s)
      return i;
    for (let o = 0; o < s - 1; o++)
      i = i.tt(t[o]);
    return i.tt(t[s - 1], e, n, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t, e, n, r) {
    r = r || Qe.groups;
    const i = this;
    if (e && e.j)
      return i.j[t] = e, e;
    const s = e;
    let o, l = i.go(t);
    if (l ? (o = new Qe(), $r(o.j, l.j), o.jr.push.apply(o.jr, l.jr), o.jd = l.jd, o.t = l.t) : o = new Qe(), s) {
      if (r)
        if (o.t && typeof o.t == "string") {
          const a = $r(Fw(o.t, r), n);
          Un(s, a, r);
        } else
          n && Un(s, n, r);
      o.t = s;
    }
    return i.j[t] = o, o;
  }
};
const U = (t, e, n, r, i) => t.ta(e, n, r, i), ut = (t, e, n, r, i) => t.tr(e, n, r, i), eu = (t, e, n, r, i) => t.ts(e, n, r, i), N = (t, e, n, r, i) => t.tt(e, n, r, i), Qt = "WORD", oa = "UWORD", Ni = "LOCALHOST", la = "TLD", aa = "UTLD", Os = "SCHEME", br = "SLASH_SCHEME", Za = "NUM", xp = "WS", ec = "NL", Sr = "OPENBRACE", Ei = "OPENBRACKET", vi = "OPENANGLEBRACKET", bi = "OPENPAREN", Vn = "CLOSEBRACE", Ir = "CLOSEBRACKET", Cr = "CLOSEANGLEBRACKET", Fn = "CLOSEPAREN", Ks = "AMPERSAND", Xs = "APOSTROPHE", Js = "ASTERISK", pn = "AT", Qs = "BACKSLASH", Zs = "BACKTICK", eo = "CARET", gn = "COLON", tc = "COMMA", to = "DOLLAR", Nt = "DOT", no = "EQUALS", nc = "EXCLAMATION", Lt = "HYPHEN", ro = "PERCENT", io = "PIPE", so = "PLUS", oo = "POUND", lo = "QUERY", rc = "QUOTE", ic = "SEMI", Pt = "SLASH", wi = "TILDE", ao = "UNDERSCORE", _p = "EMOJI", co = "SYM";
var kp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: Qt,
  UWORD: oa,
  LOCALHOST: Ni,
  TLD: la,
  UTLD: aa,
  SCHEME: Os,
  SLASH_SCHEME: br,
  NUM: Za,
  WS: xp,
  NL: ec,
  OPENBRACE: Sr,
  OPENBRACKET: Ei,
  OPENANGLEBRACKET: vi,
  OPENPAREN: bi,
  CLOSEBRACE: Vn,
  CLOSEBRACKET: Ir,
  CLOSEANGLEBRACKET: Cr,
  CLOSEPAREN: Fn,
  AMPERSAND: Ks,
  APOSTROPHE: Xs,
  ASTERISK: Js,
  AT: pn,
  BACKSLASH: Qs,
  BACKTICK: Zs,
  CARET: eo,
  COLON: gn,
  COMMA: tc,
  DOLLAR: to,
  DOT: Nt,
  EQUALS: no,
  EXCLAMATION: nc,
  HYPHEN: Lt,
  PERCENT: ro,
  PIPE: io,
  PLUS: so,
  POUND: oo,
  QUERY: lo,
  QUOTE: rc,
  SEMI: ic,
  SLASH: Pt,
  TILDE: wi,
  UNDERSCORE: ao,
  EMOJI: _p,
  SYM: co
});
const gr = /[a-z]/, gl = /\p{L}/u, yl = /\p{Emoji}/u, El = /\d/, tu = /\s/, nu = `
`, zw = "️", Gw = "‍";
let ls = null, as = null;
function Uw(t) {
  t === void 0 && (t = []);
  const e = {};
  Qe.groups = e;
  const n = new Qe();
  ls == null && (ls = ru(Lw)), as == null && (as = ru(Pw)), N(n, "'", Xs), N(n, "{", Sr), N(n, "[", Ei), N(n, "<", vi), N(n, "(", bi), N(n, "}", Vn), N(n, "]", Ir), N(n, ">", Cr), N(n, ")", Fn), N(n, "&", Ks), N(n, "*", Js), N(n, "@", pn), N(n, "`", Zs), N(n, "^", eo), N(n, ":", gn), N(n, ",", tc), N(n, "$", to), N(n, ".", Nt), N(n, "=", no), N(n, "!", nc), N(n, "-", Lt), N(n, "%", ro), N(n, "|", io), N(n, "+", so), N(n, "#", oo), N(n, "?", lo), N(n, '"', rc), N(n, "/", Pt), N(n, ";", ic), N(n, "~", wi), N(n, "_", ao), N(n, "\\", Qs);
  const r = ut(n, El, Za, {
    [na]: !0
  });
  ut(r, El, r);
  const i = ut(n, gr, Qt, {
    [ra]: !0
  });
  ut(i, gr, i);
  const s = ut(n, gl, oa, {
    [ia]: !0
  });
  ut(s, gr), ut(s, gl, s);
  const o = ut(n, tu, xp, {
    [Zd]: !0
  });
  N(n, nu, ec, {
    [Zd]: !0
  }), N(o, nu), ut(o, tu, o);
  const l = ut(n, yl, _p, {
    [Rp]: !0
  });
  ut(l, yl, l), N(l, zw, l);
  const a = N(l, Gw);
  ut(a, yl, l);
  const c = [[gr, i]], d = [[gr, null], [gl, s]];
  for (let u = 0; u < ls.length; u++)
    dn(n, ls[u], la, Qt, c);
  for (let u = 0; u < as.length; u++)
    dn(n, as[u], aa, oa, d);
  Un(la, {
    tld: !0,
    ascii: !0
  }, e), Un(aa, {
    utld: !0,
    alpha: !0
  }, e), dn(n, "file", Os, Qt, c), dn(n, "mailto", Os, Qt, c), dn(n, "http", br, Qt, c), dn(n, "https", br, Qt, c), dn(n, "ftp", br, Qt, c), dn(n, "ftps", br, Qt, c), Un(Os, {
    scheme: !0,
    ascii: !0
  }, e), Un(br, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((u, f) => u[0] > f[0] ? 1 : -1);
  for (let u = 0; u < t.length; u++) {
    const f = t[u][0], p = t[u][1] ? {
      [Bw]: !0
    } : {
      [Hw]: !0
    };
    f.indexOf("-") >= 0 ? p[sa] = !0 : gr.test(f) ? El.test(f) ? p[Ms] = !0 : p[ra] = !0 : p[na] = !0, eu(n, f, f, p);
  }
  return eu(n, "localhost", Ni, {
    ascii: !0
  }), n.jd = new Qe(co), {
    start: n,
    tokens: $r({
      groups: e
    }, kp)
  };
}
function $w(t, e) {
  const n = Ww(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = n.length, i = [];
  let s = 0, o = 0;
  for (; o < r; ) {
    let l = t, a = null, c = 0, d = null, u = -1, f = -1;
    for (; o < r && (a = l.go(n[o])); )
      l = a, l.accepts() ? (u = 0, f = 0, d = l) : u >= 0 && (u += n[o].length, f++), c += n[o].length, s += n[o].length, o++;
    s -= u, o -= f, c -= u, i.push({
      t: d.t,
      // token type/name
      v: e.slice(s - c, s),
      // string value
      s: s - c,
      // start index
      e: s
      // end index (excluding)
    });
  }
  return i;
}
function Ww(t) {
  const e = [], n = t.length;
  let r = 0;
  for (; r < n; ) {
    let i = t.charCodeAt(r), s, o = i < 55296 || i > 56319 || r + 1 === n || (s = t.charCodeAt(r + 1)) < 56320 || s > 57343 ? t[r] : t.slice(r, r + 2);
    e.push(o), r += o.length;
  }
  return e;
}
function dn(t, e, n, r, i) {
  let s;
  const o = e.length;
  for (let l = 0; l < o - 1; l++) {
    const a = e[l];
    t.j[a] ? s = t.j[a] : (s = new Qe(r), s.jr = i.slice(), t.j[a] = s), t = s;
  }
  return s = new Qe(n), s.jr = i.slice(), t.j[e[o - 1]] = s, s;
}
function ru(t) {
  const e = [], n = [];
  let r = 0, i = "0123456789";
  for (; r < t.length; ) {
    let s = 0;
    for (; i.indexOf(t[r + s]) >= 0; )
      s++;
    if (s > 0) {
      e.push(n.join(""));
      for (let o = parseInt(t.substring(r, r + s), 10); o > 0; o--)
        n.pop();
      r += s;
    } else
      n.push(t[r]), r++;
  }
  return e;
}
const Li = {
  defaultProtocol: "http",
  events: null,
  format: iu,
  formatHref: iu,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function sc(t, e) {
  e === void 0 && (e = null);
  let n = $r({}, Li);
  t && (n = $r(n, t instanceof sc ? t.o : t));
  const r = n.ignoreTags, i = [];
  for (let s = 0; s < r.length; s++)
    i.push(r[s].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = i;
}
sc.prototype = {
  o: Li,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t) {
    return t;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t, e, n) {
    const r = e != null;
    let i = this.o[t];
    return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : Li[t], typeof i == "function" && r && (i = i(e, n))) : typeof i == "function" && r && (i = i(e, n.t, n)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, n) {
    let r = this.o[t];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  }
};
function iu(t) {
  return t;
}
function Dp(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
Dp.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */
  toHref(t) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t) {
    const e = this.toString(), n = t.get("truncate", e, this), r = t.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t) {
    return t === void 0 && (t = Li.defaultProtocol), {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t) {
    const e = this, n = this.toHref(t.get("defaultProtocol")), r = t.get("formatHref", n, this), i = t.get("tagName", n, e), s = this.toFormattedString(t), o = {}, l = t.get("className", n, e), a = t.get("target", n, e), c = t.get("rel", n, e), d = t.getObj("attributes", n, e), u = t.getObj("events", n, e);
    return o.href = r, l && (o.class = l), a && (o.target = a), c && (o.rel = c), d && $r(o, d), {
      tagName: i,
      attributes: o,
      content: s,
      eventListeners: u
    };
  }
};
function ko(t, e) {
  class n extends Dp {
    constructor(i, s) {
      super(i, s), this.t = t;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t, n;
}
const su = ko("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), ou = ko("text"), qw = ko("nl"), Ln = ko("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t) {
    return t === void 0 && (t = Li.defaultProtocol), this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== Ni && t[1].t === gn;
  }
}), Ce = (t) => new Qe(t);
function jw(t) {
  let {
    groups: e
  } = t;
  const n = e.domain.concat([Ks, Js, pn, Qs, Zs, eo, to, no, Lt, Za, ro, io, so, oo, Pt, co, wi, ao]), r = [Xs, Cr, Vn, Ir, Fn, gn, tc, Nt, nc, vi, Sr, Ei, bi, lo, rc, ic], i = [Ks, Xs, Js, Qs, Zs, eo, Vn, to, no, Lt, Sr, ro, io, so, oo, lo, Pt, co, wi, ao], s = Ce(), o = N(s, wi);
  U(o, i, o), U(o, e.domain, o);
  const l = Ce(), a = Ce(), c = Ce();
  U(s, e.domain, l), U(s, e.scheme, a), U(s, e.slashscheme, c), U(l, i, o), U(l, e.domain, l);
  const d = N(l, pn);
  N(o, pn, d), N(a, pn, d), N(c, pn, d);
  const u = N(o, Nt);
  U(u, i, o), U(u, e.domain, o);
  const f = Ce();
  U(d, e.domain, f), U(f, e.domain, f);
  const h = N(f, Nt);
  U(h, e.domain, f);
  const p = Ce(su);
  U(h, e.tld, p), U(h, e.utld, p), N(d, Ni, p);
  const m = N(f, Lt);
  U(m, e.domain, f), U(p, e.domain, f), N(p, Nt, h), N(p, Lt, m);
  const g = N(p, gn);
  U(g, e.numeric, su);
  const v = N(l, Lt), E = N(l, Nt);
  U(v, e.domain, l), U(E, i, o), U(E, e.domain, l);
  const b = Ce(Ln);
  U(E, e.tld, b), U(E, e.utld, b), U(b, e.domain, l), U(b, i, o), N(b, Nt, E), N(b, Lt, v), N(b, pn, d);
  const y = N(b, gn), T = Ce(Ln);
  U(y, e.numeric, T);
  const w = Ce(Ln), C = Ce();
  U(w, n, w), U(w, r, C), U(C, n, w), U(C, r, C), N(b, Pt, w), N(T, Pt, w);
  const S = N(a, gn), O = N(c, gn), P = N(O, Pt), k = N(P, Pt);
  U(a, e.domain, l), N(a, Nt, E), N(a, Lt, v), U(c, e.domain, l), N(c, Nt, E), N(c, Lt, v), U(S, e.domain, w), N(S, Pt, w), U(k, e.domain, w), U(k, n, w), N(k, Pt, w);
  const D = N(w, Sr), F = N(w, Ei), R = N(w, vi), G = N(w, bi);
  N(C, Sr, D), N(C, Ei, F), N(C, vi, R), N(C, bi, G), N(D, Vn, w), N(F, Ir, w), N(R, Cr, w), N(G, Fn, w), N(D, Vn, w);
  const I = Ce(Ln), A = Ce(Ln), L = Ce(Ln), B = Ce(Ln);
  U(D, n, I), U(F, n, A), U(R, n, L), U(G, n, B);
  const $ = Ce(), K = Ce(), ue = Ce(), ke = Ce();
  return U(D, r), U(F, r), U(R, r), U(G, r), U(I, n, I), U(A, n, A), U(L, n, L), U(B, n, B), U(I, r, I), U(A, r, A), U(L, r, L), U(B, r, B), U($, n, $), U(K, n, A), U(ue, n, L), U(ke, n, B), U($, r, $), U(K, r, K), U(ue, r, ue), U(ke, r, ke), N(A, Ir, w), N(L, Cr, w), N(B, Fn, w), N(I, Vn, w), N(K, Ir, w), N(ue, Cr, w), N(ke, Fn, w), N($, Fn, w), N(s, Ni, b), N(s, ec, qw), {
    start: s,
    tokens: kp
  };
}
function Yw(t, e, n) {
  let r = n.length, i = 0, s = [], o = [];
  for (; i < r; ) {
    let l = t, a = null, c = null, d = 0, u = null, f = -1;
    for (; i < r && !(a = l.go(n[i].t)); )
      o.push(n[i++]);
    for (; i < r && (c = a || l.go(n[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, u = l) : f >= 0 && f++, i++, d++;
    if (f < 0)
      i -= d, i < r && (o.push(n[i]), i++);
    else {
      o.length > 0 && (s.push(vl(ou, e, o)), o = []), i -= f, d -= f;
      const h = u.t, p = n.slice(i - d, i);
      s.push(vl(h, e, p));
    }
  }
  return o.length > 0 && s.push(vl(ou, e, o)), s;
}
function vl(t, e, n) {
  const r = n[0].s, i = n[n.length - 1].e, s = e.slice(r, i);
  return new t(s, n);
}
const Kw = typeof console < "u" && console && console.warn || (() => {
}), Xw = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", de = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Jw() {
  Qe.groups = {}, de.scanner = null, de.parser = null, de.tokenQueue = [], de.pluginQueue = [], de.customSchemes = [], de.initialized = !1;
}
function lu(t, e) {
  if (e === void 0 && (e = !1), de.initialized && Kw(`linkifyjs: already initialized - will not register custom scheme "${t}" ${Xw}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
 1. Must only contain digits, lowercase ASCII letters or "-"
 2. Cannot start or end with "-"
 3. "-" cannot repeat`);
  de.customSchemes.push([t, e]);
}
function Qw() {
  de.scanner = Uw(de.customSchemes);
  for (let t = 0; t < de.tokenQueue.length; t++)
    de.tokenQueue[t][1]({
      scanner: de.scanner
    });
  de.parser = jw(de.scanner.tokens);
  for (let t = 0; t < de.pluginQueue.length; t++)
    de.pluginQueue[t][1]({
      scanner: de.scanner,
      parser: de.parser
    });
  de.initialized = !0;
}
function Np(t) {
  return de.initialized || Qw(), Yw(de.parser.start, t, $w(de.scanner.start, t));
}
function oc(t, e, n) {
  if (e === void 0 && (e = null), n === void 0 && (n = null), e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new sc(n), i = Np(t), s = [];
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    l.isLink && (!e || l.t === e) && s.push(l.toFormattedObject(r));
  }
  return s;
}
function au(t, e) {
  e === void 0 && (e = null);
  const n = Np(t);
  return n.length === 1 && n[0].isLink && (!e || n[0].t === e);
}
function Zw(t) {
  return new me({
    key: new Ie("autolink"),
    appendTransaction: (e, n, r) => {
      const i = e.some((d) => d.docChanged) && !n.doc.eq(r.doc), s = e.some((d) => d.getMeta("preventAutolink"));
      if (!i || s)
        return;
      const { tr: o } = r, l = cE(n.doc, [...e]), { mapping: a } = l;
      if (gE(l).forEach(({ oldRange: d, newRange: u }) => {
        Ws(d.from, d.to, n.doc).filter((m) => m.mark.type === t.type).forEach((m) => {
          const g = a.map(m.from), v = a.map(m.to), E = Ws(g, v, r.doc).filter((S) => S.mark.type === t.type);
          if (!E.length)
            return;
          const b = E[0], y = n.doc.textBetween(m.from, m.to, void 0, " "), T = r.doc.textBetween(b.from, b.to, void 0, " "), w = au(y), C = au(T);
          w && !C && o.removeMark(b.from, b.to, t.type);
        });
        const f = Yl(r.doc, u, (m) => m.isTextblock);
        let h, p;
        if (f.length > 1 ? (h = f[0], p = r.doc.textBetween(h.pos, h.pos + h.node.nodeSize, void 0, " ")) : f.length && r.doc.textBetween(u.from, u.to, " ", " ").endsWith(" ") && (h = f[0], p = r.doc.textBetween(h.pos, u.to, void 0, " ")), h && p) {
          const m = p.split(" ").filter((E) => E !== "");
          if (m.length <= 0)
            return !1;
          const g = m[m.length - 1], v = h.pos + p.lastIndexOf(g);
          if (!g)
            return !1;
          oc(g).filter((E) => E.isLink).filter((E) => t.validate ? t.validate(E.value) : !0).map((E) => ({
            ...E,
            from: v + E.start + 1,
            to: v + E.end + 1
          })).forEach((E) => {
            o.addMark(E.from, E.to, t.type.create({
              href: E.href
            }));
          });
        }
      }), !!o.steps.length)
        return o;
    }
  });
}
function eT(t) {
  return new me({
    key: new Ie("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var i, s, o;
        if (r.button !== 0)
          return !1;
        const l = jh(e.state, t.type.name), a = (i = r.target) === null || i === void 0 ? void 0 : i.closest("a"), c = (s = a == null ? void 0 : a.href) !== null && s !== void 0 ? s : l.href, d = (o = a == null ? void 0 : a.target) !== null && o !== void 0 ? o : l.target;
        return a && c ? (window.open(c, d), !0) : !1;
      }
    }
  });
}
function tT(t) {
  return new me({
    key: new Ie("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { state: i } = e, { selection: s } = i, { empty: o } = s;
        if (o)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = oc(l).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : (t.editor.commands.setMark(t.type, {
          href: a.href
        }), !0);
      }
    }
  });
}
const nT = nt.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  onCreate() {
    this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        lu(t);
        return;
      }
      lu(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    Jw();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      validate: void 0
    };
  },
  addAttributes() {
    return {
      href: {
        default: null
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [{ tag: 'a[href]:not([href *= "javascript:" i])' }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["a", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setLink: (t) => ({ chain: e }) => e().setMark(this.name, t).setMeta("preventAutolink", !0).run(),
      toggleLink: (t) => ({ chain: e }) => e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(),
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      An({
        find: (t) => oc(t).filter((e) => this.options.validate ? this.options.validate(e.value) : !0).filter((e) => e.isLink).map((e) => ({
          text: e.value,
          index: e.start,
          data: e
        })),
        type: this.type,
        getAttributes: (t) => {
          var e;
          return {
            href: (e = t.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const t = [];
    return this.options.autolink && t.push(Zw({
      type: this.type,
      validate: this.options.validate
    })), this.options.openOnClick && t.push(eT({
      type: this.type
    })), this.options.linkOnPaste && t.push(tT({
      editor: this.editor,
      type: this.type
    })), t;
  }
}), rT = be.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new me({
        key: new Ie("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!n)
              return null;
            const s = t.type.createAndFill(), o = (s == null ? void 0 : s.sameMarkup(t)) && s.content.findDiffStart(t.content) === null;
            return t.descendants((l, a) => {
              const c = r >= a && r <= a + l.nodeSize, d = !l.isLeaf && !l.childCount;
              if ((c || !this.options.showOnlyCurrent) && d) {
                const u = [this.options.emptyNodeClass];
                o && u.push(this.options.emptyEditorClass);
                const f = Ve.node(a, a + l.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: l,
                    pos: a,
                    hasAnchor: c
                  }) : this.options.placeholder
                });
                i.push(f);
              }
              return this.options.includeChildren;
            }), se.create(t, i);
          }
        }
      })
    ];
  }
});
var ca, da;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  ca = (e) => t.get(e), da = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  ca = (r) => {
    for (let i = 0; i < t.length; i += 2)
      if (t[i] == r)
        return t[i + 1];
  }, da = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var he = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t)
        continue;
      const r = e % this.width, i = e / this.width | 0;
      let s = r + 1, o = i + 1;
      for (let l = 1; s < this.width && this.map[e + l] == n; l++)
        s++;
      for (let l = 1; o < this.height && this.map[e + this.width * l] == n; l++)
        o++;
      return { left: r, top: i, right: s, bottom: o };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t)
        return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(t, e, n) {
    const { left: r, right: i, top: s, bottom: o } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[s * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? s == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? s - 1 : o)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: n,
      right: r,
      top: i,
      bottom: s
    } = this.findCell(t), {
      left: o,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(n, o),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(s, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++)
      for (let i = t.left; i < t.right; i++) {
        const s = r * this.width + i, o = this.map[s];
        n[o] || (n[o] = !0, !(i == t.left && i && this.map[s - 1] == o || r == t.top && r && this.map[s - this.width] == o) && e.push(o));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, n) {
    for (let r = 0, i = 0; ; r++) {
      const s = i + n.child(r).nodeSize;
      if (r == t) {
        let o = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; o < l && this.map[o] < i; )
          o++;
        return o == l ? s - 1 : this.map[o];
      }
      i = s;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return ca(t) || da(t, iT(t));
  }
};
function iT(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = sT(t), n = t.childCount, r = [];
  let i = 0, s = null;
  const o = [];
  for (let c = 0, d = e * n; c < d; c++)
    r[c] = 0;
  for (let c = 0, d = 0; c < n; c++) {
    const u = t.child(c);
    d++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; )
        i++;
      if (p == u.childCount)
        break;
      const m = u.child(p), { colspan: g, rowspan: v, colwidth: E } = m.attrs;
      for (let b = 0; b < v; b++) {
        if (b + c >= n) {
          (s || (s = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: v - b
          });
          break;
        }
        const y = i + b * e;
        for (let T = 0; T < g; T++) {
          r[y + T] == 0 ? r[y + T] = d : (s || (s = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: g - T
          });
          const w = E && E[T];
          if (w) {
            const C = (y + T) % e * 2, S = o[C];
            S == null || S != w && o[C + 1] == 1 ? (o[C] = w, o[C + 1] = 1) : S == w && o[C + 1]++;
          }
        }
      }
      i += g, d += m.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; i < f; )
      r[i++] == 0 && h++;
    h && (s || (s = [])).push({ type: "missing", row: c, n: h }), d++;
  }
  const l = new he(e, n, r, s);
  let a = !1;
  for (let c = 0; !a && c < o.length; c += 2)
    o[c] != null && o[c + 1] < n && (a = !0);
  return a && oT(l, o, t), l;
}
function sT(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const i = t.child(r);
    let s = 0;
    if (n)
      for (let o = 0; o < r; o++) {
        const l = t.child(o);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          o + c.attrs.rowspan > r && (s += c.attrs.colspan);
        }
      }
    for (let o = 0; o < i.childCount; o++) {
      const l = i.child(o);
      s += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = s : e != s && (e = Math.max(e, s));
  }
  return e;
}
function oT(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let i = 0; i < t.map.length; i++) {
    const s = t.map[i];
    if (r[s])
      continue;
    r[s] = !0;
    const o = n.nodeAt(s);
    if (!o)
      throw new RangeError(`No cell with offset ${s} found`);
    let l = null;
    const a = o.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const d = (i + c) % t.width, u = e[d * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = lT(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: s,
      colwidth: l
    });
  }
}
function lT(t) {
  if (t.colwidth)
    return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++)
    e.push(0);
  return e;
}
function Fe(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var yn = new Ie("selectingCells");
function Kr(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function aT(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell")
      return t.node(e);
  }
  return null;
}
function _t(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function Do(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = Kr(e.$head) || cT(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function cT(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return t.doc.resolve(n - e.nodeSize);
  }
}
function ua(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function dT(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function lc(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function Lp(t, e, n) {
  const r = t.node(-1), i = he.get(r), s = t.start(-1), o = i.nextCell(t.pos - s, e, n);
  return o == null ? null : t.node(0).resolve(s + o);
}
function lr(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Pp(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++)
      r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function uT(t, e, n) {
  const r = Fe(e.type.schema).header_cell;
  for (let i = 0; i < t.height; i++)
    if (e.nodeAt(t.map[n + i * t.width]).type != r)
      return !1;
  return !0;
}
var ee = class extends q {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(t, e = t) {
    const n = t.node(-1), r = he.get(n), i = t.start(-1), s = r.rectBetween(
      t.pos - i,
      e.pos - i
    ), o = t.node(0), l = r.cellsInRect(s).filter((c) => c != e.pos - i);
    l.unshift(e.pos - i);
    const a = l.map((c) => {
      const d = n.nodeAt(c);
      if (!d)
        throw RangeError(`No cell with offset ${c} found`);
      const u = i + c + 1;
      return new Qf(
        o.resolve(u),
        o.resolve(u + d.content.size)
      );
    });
    super(a[0].$from, a[0].$to, a), this.$anchorCell = t, this.$headCell = e;
  }
  map(t, e) {
    const n = t.resolve(e.map(this.$anchorCell.pos)), r = t.resolve(e.map(this.$headCell.pos));
    if (ua(n) && ua(r) && lc(n, r)) {
      const i = this.$anchorCell.node(-1) != n.node(-1);
      return i && this.isRowSelection() ? ee.rowSelection(n, r) : i && this.isColSelection() ? ee.colSelection(n, r) : new ee(n, r);
    }
    return Y.between(n, r);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const t = this.$anchorCell.node(-1), e = he.get(t), n = this.$anchorCell.start(-1), r = e.rectBetween(
      this.$anchorCell.pos - n,
      this.$headCell.pos - n
    ), i = {}, s = [];
    for (let l = r.top; l < r.bottom; l++) {
      const a = [];
      for (let c = l * e.width + r.left, d = r.left; d < r.right; d++, c++) {
        const u = e.map[c];
        if (i[u])
          continue;
        i[u] = !0;
        const f = e.findCell(u);
        let h = t.nodeAt(u);
        if (!h)
          throw RangeError(`No cell with offset ${u} found`);
        const p = r.left - f.left, m = f.right - r.right;
        if (p > 0 || m > 0) {
          let g = h.attrs;
          if (p > 0 && (g = lr(g, 0, p)), m > 0 && (g = lr(
            g,
            g.colspan - m,
            m
          )), f.left < r.left) {
            if (h = h.type.createAndFill(g), !h)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(g)}`
              );
          } else
            h = h.type.create(g, h.content);
        }
        if (f.top < r.top || f.bottom > r.bottom) {
          const g = {
            ...h.attrs,
            rowspan: Math.min(f.bottom, r.bottom) - Math.max(f.top, r.top)
          };
          f.top < r.top ? h = h.type.createAndFill(g) : h = h.type.create(g, h.content);
        }
        a.push(h);
      }
      s.push(t.child(l).copy(x.from(a)));
    }
    const o = this.isColSelection() && this.isRowSelection() ? t : s;
    return new H(x.from(o), 1, 1);
  }
  replace(t, e = H.empty) {
    const n = t.steps.length, r = this.ranges;
    for (let s = 0; s < r.length; s++) {
      const { $from: o, $to: l } = r[s], a = t.mapping.slice(n);
      t.replace(
        a.map(o.pos),
        a.map(l.pos),
        s ? H.empty : e
      );
    }
    const i = q.findFrom(
      t.doc.resolve(t.mapping.slice(n).map(this.to)),
      -1
    );
    i && t.setSelection(i);
  }
  replaceWith(t, e) {
    this.replace(t, new H(x.from(e), 0, 0));
  }
  forEachCell(t) {
    const e = this.$anchorCell.node(-1), n = he.get(e), r = this.$anchorCell.start(-1), i = n.cellsInRect(
      n.rectBetween(
        this.$anchorCell.pos - r,
        this.$headCell.pos - r
      )
    );
    for (let s = 0; s < i.length; s++)
      t(e.nodeAt(i[s]), r + i[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const t = this.$anchorCell.index(-1), e = this.$headCell.index(-1);
    if (Math.min(t, e) > 0)
      return !1;
    const n = t + this.$anchorCell.nodeAfter.attrs.rowspan, r = e + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(n, r) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(t, e = t) {
    const n = t.node(-1), r = he.get(n), i = t.start(-1), s = r.findCell(t.pos - i), o = r.findCell(e.pos - i), l = t.node(0);
    return s.top <= o.top ? (s.top > 0 && (t = l.resolve(i + r.map[s.left])), o.bottom < r.height && (e = l.resolve(
      i + r.map[r.width * (r.height - 1) + o.right - 1]
    ))) : (o.top > 0 && (e = l.resolve(i + r.map[o.left])), s.bottom < r.height && (t = l.resolve(
      i + r.map[r.width * (r.height - 1) + s.right - 1]
    ))), new ee(t, e);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const t = this.$anchorCell.node(-1), e = he.get(t), n = this.$anchorCell.start(-1), r = e.colCount(this.$anchorCell.pos - n), i = e.colCount(this.$headCell.pos - n);
    if (Math.min(r, i) > 0)
      return !1;
    const s = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, o) == e.width;
  }
  eq(t) {
    return t instanceof ee && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(t, e = t) {
    const n = t.node(-1), r = he.get(n), i = t.start(-1), s = r.findCell(t.pos - i), o = r.findCell(e.pos - i), l = t.node(0);
    return s.left <= o.left ? (s.left > 0 && (t = l.resolve(
      i + r.map[s.top * r.width]
    )), o.right < r.width && (e = l.resolve(
      i + r.map[r.width * (o.top + 1) - 1]
    ))) : (o.left > 0 && (e = l.resolve(i + r.map[o.top * r.width])), s.right < r.width && (t = l.resolve(
      i + r.map[r.width * (s.top + 1) - 1]
    ))), new ee(t, e);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(t, e) {
    return new ee(t.resolve(e.anchor), t.resolve(e.head));
  }
  static create(t, e, n = e) {
    return new ee(t.resolve(e), t.resolve(n));
  }
  getBookmark() {
    return new Bp(this.$anchorCell.pos, this.$headCell.pos);
  }
};
ee.prototype.visible = !1;
q.jsonID("cell", ee);
var Bp = class {
  constructor(t, e) {
    this.anchor = t, this.head = e;
  }
  map(t) {
    return new Bp(t.map(this.anchor), t.map(this.head));
  }
  resolve(t) {
    const e = t.resolve(this.anchor), n = t.resolve(this.head);
    return e.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && e.index() < e.parent.childCount && n.index() < n.parent.childCount && lc(e, n) ? new ee(e, n) : q.near(n, 1);
  }
};
function fT(t) {
  if (!(t.selection instanceof ee))
    return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      Ve.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), se.create(t.doc, e);
}
function hT({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < t.pos - 6)
    return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++)
    ;
  for (let s = e.depth; s >= 0 && !(e.before(s + 1) > e.start(s)); s--, r--)
    ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function pT({ $from: t, $to: e }) {
  let n, r;
  for (let i = t.depth; i > 0; i--) {
    const s = t.node(i);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      n = s;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const s = e.node(i);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      r = s;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function mT(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let s, o;
  if (r instanceof W && (o = r.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell")
      s = ee.create(i, r.from);
    else if (o == "row") {
      const l = i.resolve(r.from + 1);
      s = ee.rowSelection(l, l);
    } else if (!n) {
      const l = he.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      s = ee.create(i, a + 1, c);
    }
  } else
    r instanceof Y && hT(r) ? s = Y.create(i, r.from) : r instanceof Y && pT(r) && (s = Y.create(i, r.$from.start(), r.$from.end()));
  return s && (e || (e = t.tr)).setSelection(s), e;
}
var gT = new Ie("fix-tables");
function Hp(t, e, n, r) {
  const i = t.childCount, s = e.childCount;
  e:
    for (let o = 0, l = 0; o < s; o++) {
      const a = e.child(o);
      for (let c = l, d = Math.min(i, o + 3); c < d; c++)
        if (t.child(c) == a) {
          l = c + 1, n += a.nodeSize;
          continue e;
        }
      r(a, n), l < i && t.child(l).sameMarkup(a) ? Hp(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
    }
}
function Vp(t, e) {
  let n;
  const r = (i, s) => {
    i.type.spec.tableRole == "table" && (n = yT(t, i, s, n));
  };
  return e ? e.doc != t.doc && Hp(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function yT(t, e, n, r) {
  const i = he.get(e);
  if (!i.problems)
    return r;
  r || (r = t.tr);
  const s = [];
  for (let a = 0; a < i.height; a++)
    s.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      const u = d.attrs;
      for (let f = 0; f < u.rowspan; f++)
        s[c.row + f] += c.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + c.pos),
        null,
        lr(u, u.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      s[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        colwidth: c.colwidth
      });
    }
  }
  let o, l;
  for (let a = 0; a < s.length; a++)
    s[a] && (o == null && (o = a), l = a);
  for (let a = 0, c = n + 1; a < i.height; a++) {
    const d = e.child(a), u = c + d.nodeSize, f = s[a];
    if (f > 0) {
      let h = "cell";
      d.firstChild && (h = d.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const v = Fe(t.schema)[h].createAndFill();
        v && p.push(v);
      }
      const m = (a == 0 || o == a - 1) && l == a ? c + 1 : u - 1;
      r.insert(r.mapping.map(m), p);
    }
    c = u;
  }
  return r.setMeta(gT, { fixTables: !0 });
}
function ET(t) {
  if (!t.size)
    return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), s = i.type.spec.tableRole, o = i.type.schema, l = [];
  if (s == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const d = a ? 0 : Math.max(0, n - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (d || u) && (c = fa(
        Fe(o).row,
        new H(c, d, u)
      ).content), l.push(c);
    }
  else if (s == "cell" || s == "header_cell")
    l.push(
      n || r ? fa(
        Fe(o).row,
        new H(e, n, r)
      ).content : e
    );
  else
    return null;
  return vT(o, l);
}
function vT(t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    for (let o = s.childCount - 1; o >= 0; o--) {
      const { rowspan: l, colspan: a } = s.child(o).attrs;
      for (let c = i; c < i + l; c++)
        n[c] = (n[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < n.length; i++)
    r = Math.max(r, n[i]);
  for (let i = 0; i < n.length; i++)
    if (i >= e.length && e.push(x.empty), n[i] < r) {
      const s = Fe(t).cell.createAndFill(), o = [];
      for (let l = n[i]; l < r; l++)
        o.push(s);
      e[i] = e[i].append(x.from(o));
    }
  return { height: e.length, width: r, rows: e };
}
function fa(t, e) {
  const n = t.createAndFill();
  return new Aa(n).replace(0, n.content.size, e).doc;
}
function bT({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const s = [], o = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let d = s[l] || 0, u = 0; d < r; u++) {
        let f = a.child(u % a.childCount);
        d + f.attrs.colspan > r && (f = f.type.createChecked(
          lr(
            f.attrs,
            f.attrs.colspan,
            d + f.attrs.colspan - r
          ),
          f.content
        )), c.push(f), d += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          s[l + h] = (s[l + h] || 0) + f.attrs.colspan;
      }
      o.push(x.from(c));
    }
    n = o, t = r;
  }
  if (e != i) {
    const s = [];
    for (let o = 0, l = 0; o < i; o++, l++) {
      const a = [], c = n[l % e];
      for (let d = 0; d < c.childCount; d++) {
        let u = c.child(d);
        o + u.attrs.rowspan > i && (u = u.type.create(
          {
            ...u.attrs,
            rowspan: Math.max(1, i - u.attrs.rowspan)
          },
          u.content
        )), a.push(u);
      }
      s.push(x.from(a));
    }
    n = s, e = i;
  }
  return { width: t, height: e, rows: n };
}
function wT(t, e, n, r, i, s, o) {
  const l = t.doc.type.schema, a = Fe(l);
  let c, d;
  if (i > e.width)
    for (let u = 0, f = 0; u < e.height; u++) {
      const h = n.child(u);
      f += h.nodeSize;
      const p = [];
      let m;
      h.lastChild == null || h.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = d || (d = a.header_cell.createAndFill());
      for (let g = e.width; g < i; g++)
        p.push(m);
      t.insert(t.mapping.slice(o).map(f - 1 + r), p);
    }
  if (s > e.height) {
    const u = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const g = p >= e.width ? !1 : n.nodeAt(e.map[m + p]).type == a.header_cell;
      u.push(
        g ? d || (d = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const f = a.row.create(null, x.from(u)), h = [];
    for (let p = e.height; p < s; p++)
      h.push(f);
    t.insert(t.mapping.slice(o).map(r + n.nodeSize - 2), h);
  }
  return !!(c || d);
}
function cu(t, e, n, r, i, s, o, l) {
  if (o == 0 || o == e.height)
    return !1;
  let a = !1;
  for (let c = i; c < s; c++) {
    const d = o * e.width + c, u = e.map[d];
    if (e.map[d - e.width] == u) {
      a = !0;
      const f = n.nodeAt(u), { top: h, left: p } = e.findCell(u);
      t.setNodeMarkup(t.mapping.slice(l).map(u + r), null, {
        ...f.attrs,
        rowspan: o - h
      }), t.insert(
        t.mapping.slice(l).map(e.positionAt(o, p, n)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - o
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function du(t, e, n, r, i, s, o, l) {
  if (o == 0 || o == e.width)
    return !1;
  let a = !1;
  for (let c = i; c < s; c++) {
    const d = c * e.width + o, u = e.map[d];
    if (e.map[d - 1] == u) {
      a = !0;
      const f = n.nodeAt(u), h = e.colCount(u), p = t.mapping.slice(l).map(u + r);
      t.setNodeMarkup(
        p,
        null,
        lr(
          f.attrs,
          o - h,
          f.attrs.colspan - (o - h)
        )
      ), t.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          lr(f.attrs, 0, o - h)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function uu(t, e, n, r, i) {
  let s = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!s)
    throw new Error("No table found");
  let o = he.get(s);
  const { top: l, left: a } = r, c = a + i.width, d = l + i.height, u = t.tr;
  let f = 0;
  function h() {
    if (s = n ? u.doc.nodeAt(n - 1) : u.doc, !s)
      throw new Error("No table found");
    o = he.get(s), f = u.mapping.maps.length;
  }
  wT(u, o, s, n, c, d, f) && h(), cu(u, o, s, n, a, c, l, f) && h(), cu(u, o, s, n, a, c, d, f) && h(), du(u, o, s, n, l, d, a, f) && h(), du(u, o, s, n, l, d, c, f) && h();
  for (let p = l; p < d; p++) {
    const m = o.positionAt(p, a, s), g = o.positionAt(p, c, s);
    u.replace(
      u.mapping.slice(f).map(m + n),
      u.mapping.slice(f).map(g + n),
      new H(i.rows[p - l], 0, 0)
    );
  }
  h(), u.setSelection(
    new ee(
      u.doc.resolve(n + o.positionAt(l, a, s)),
      u.doc.resolve(n + o.positionAt(d - 1, c - 1, s))
    )
  ), e(u);
}
var TT = Va({
  ArrowLeft: cs("horiz", -1),
  ArrowRight: cs("horiz", 1),
  ArrowUp: cs("vert", -1),
  ArrowDown: cs("vert", 1),
  "Shift-ArrowLeft": ds("horiz", -1),
  "Shift-ArrowRight": ds("horiz", 1),
  "Shift-ArrowUp": ds("vert", -1),
  "Shift-ArrowDown": ds("vert", 1),
  Backspace: us,
  "Mod-Backspace": us,
  Delete: us,
  "Mod-Delete": us
});
function As(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function cs(t, e) {
  return (n, r, i) => {
    if (!i)
      return !1;
    const s = n.selection;
    if (s instanceof ee)
      return As(
        n,
        r,
        q.near(s.$headCell, e)
      );
    if (t != "horiz" && !s.empty)
      return !1;
    const o = Fp(i, t, e);
    if (o == null)
      return !1;
    if (t == "horiz")
      return As(
        n,
        r,
        q.near(n.doc.resolve(s.head + e), e)
      );
    {
      const l = n.doc.resolve(o), a = Lp(l, t, e);
      let c;
      return a ? c = q.near(a, 1) : e < 0 ? c = q.near(n.doc.resolve(l.before(-1)), -1) : c = q.near(n.doc.resolve(l.after(-1)), 1), As(n, r, c);
    }
  };
}
function ds(t, e) {
  return (n, r, i) => {
    if (!i)
      return !1;
    const s = n.selection;
    let o;
    if (s instanceof ee)
      o = s;
    else {
      const a = Fp(i, t, e);
      if (a == null)
        return !1;
      o = new ee(n.doc.resolve(a));
    }
    const l = Lp(o.$headCell, t, e);
    return l ? As(
      n,
      r,
      new ee(o.$anchorCell, l)
    ) : !1;
  };
}
function us(t, e) {
  const n = t.selection;
  if (!(n instanceof ee))
    return !1;
  if (e) {
    const r = t.tr, i = Fe(t.schema).cell.createAndFill().content;
    n.forEachCell((s, o) => {
      s.content.eq(i) || r.replace(
        r.mapping.map(o + 1),
        r.mapping.map(o + s.nodeSize - 1),
        new H(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function ST(t, e) {
  const n = t.state.doc, r = Kr(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new ee(r))), !0) : !1;
}
function IT(t, e, n) {
  if (!_t(t.state))
    return !1;
  let r = ET(n);
  const i = t.state.selection;
  if (i instanceof ee) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        x.from(
          fa(Fe(t.state.schema).cell, n)
        )
      ]
    });
    const s = i.$anchorCell.node(-1), o = i.$anchorCell.start(-1), l = he.get(s).rectBetween(
      i.$anchorCell.pos - o,
      i.$headCell.pos - o
    );
    return r = bT(r, l.right - l.left, l.bottom - l.top), uu(t.state, t.dispatch, o, l, r), !0;
  } else if (r) {
    const s = Do(t.state), o = s.start(-1);
    return uu(
      t.state,
      t.dispatch,
      o,
      he.get(s.node(-1)).findCell(s.pos - o),
      r
    ), !0;
  } else
    return !1;
}
function CT(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey)
    return;
  const r = fu(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof ee)
    s(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = Kr(t.state.selection.$anchor)) != null && ((n = bl(t, e)) == null ? void 0 : n.pos) != i.pos)
    s(i, e), e.preventDefault();
  else if (!r)
    return;
  function s(a, c) {
    let d = bl(t, c);
    const u = yn.getState(t.state) == null;
    if (!d || !lc(a, d))
      if (u)
        d = a;
      else
        return;
    const f = new ee(a, d);
    if (u || !t.state.selection.eq(f)) {
      const h = t.state.tr.setSelection(f);
      u && h.setMeta(yn, a.pos), t.dispatch(h);
    }
  }
  function o() {
    t.root.removeEventListener("mouseup", o), t.root.removeEventListener("dragstart", o), t.root.removeEventListener("mousemove", l), yn.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(yn, -1));
  }
  function l(a) {
    const c = a, d = yn.getState(t.state);
    let u;
    if (d != null)
      u = t.state.doc.resolve(d);
    else if (fu(t, c.target) != r && (u = bl(t, e), !u))
      return o();
    u && s(u, c);
  }
  t.root.addEventListener("mouseup", o), t.root.addEventListener("dragstart", o), t.root.addEventListener("mousemove", l);
}
function Fp(t, e, n) {
  if (!(t.state.selection instanceof Y))
    return null;
  const { $head: r } = t.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const s = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : s.childCount))
      return null;
    if (s.type.spec.tableRole == "cell" || s.type.spec.tableRole == "header_cell") {
      const l = r.before(i), a = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function fu(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function bl(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? Kr(t.state.doc.resolve(n.pos)) : null;
}
var MT = class {
  constructor(e, n) {
    this.node = e, this.cellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ha(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, ha(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function ha(t, e, n, r, i, s) {
  var o;
  let l = 0, a = !0, c = e.firstChild;
  const d = t.firstChild;
  if (d) {
    for (let u = 0, f = 0; u < d.childCount; u++) {
      const { colspan: h, colwidth: p } = d.child(u).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = i == f ? s : p && p[m], v = g ? g + "px" : "";
        l += g || r, g || (a = !1), c ? (c.style.width != v && (c.style.width = v), c = c.nextSibling) : e.appendChild(document.createElement("col")).style.width = v;
      }
    }
    for (; c; ) {
      const u = c.nextSibling;
      (o = c.parentNode) == null || o.removeChild(c), c = u;
    }
    a ? (n.style.width = l + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = l + "px");
  }
}
var yt = new Ie(
  "tableColumnResizing"
);
function OT({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  View: n = MT,
  lastColumnResizable: r = !0
} = {}) {
  const i = new me({
    key: yt,
    state: {
      init(s, o) {
        return i.spec.props.nodeViews[Fe(o.schema).table.name] = (l, a) => new n(l, e, a), new Rs(-1, !1);
      },
      apply(s, o) {
        return o.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const o = yt.getState(s);
        return o && o.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, o) => {
          AT(
            s,
            o,
            t,
            e,
            r
          );
        },
        mouseleave: (s) => {
          RT(s);
        },
        mousedown: (s, o) => {
          xT(s, o, e);
        }
      },
      decorations: (s) => {
        const o = yt.getState(s);
        if (o && o.activeHandle > -1)
          return PT(s, o.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var Rs = class {
  constructor(t, e) {
    this.activeHandle = t, this.dragging = e;
  }
  apply(t) {
    const e = this, n = t.getMeta(yt);
    if (n && n.setHandle != null)
      return new Rs(n.setHandle, !1);
    if (n && n.setDragging !== void 0)
      return new Rs(e.activeHandle, n.setDragging);
    if (e.activeHandle > -1 && t.docChanged) {
      let r = t.mapping.map(e.activeHandle, -1);
      return ua(t.doc.resolve(r)) || (r = -1), new Rs(r, e.dragging);
    }
    return e;
  }
};
function AT(t, e, n, r, i) {
  const s = yt.getState(t.state);
  if (s && !s.dragging) {
    const o = kT(e.target);
    let l = -1;
    if (o) {
      const { left: a, right: c } = o.getBoundingClientRect();
      e.clientX - a <= n ? l = hu(t, e, "left", n) : c - e.clientX <= n && (l = hu(t, e, "right", n));
    }
    if (l != s.activeHandle) {
      if (!i && l !== -1) {
        const a = t.state.doc.resolve(l), c = a.node(-1), d = he.get(c), u = a.start(-1);
        if (d.colCount(a.pos - u) + a.nodeAfter.attrs.colspan - 1 == d.width - 1)
          return;
      }
      zp(t, l);
    }
  }
}
function RT(t) {
  const e = yt.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && zp(t, -1);
}
function xT(t, e, n) {
  const r = yt.getState(t.state);
  if (!r || r.activeHandle == -1 || r.dragging)
    return !1;
  const i = t.state.doc.nodeAt(r.activeHandle), s = _T(t, r.activeHandle, i.attrs);
  t.dispatch(
    t.state.tr.setMeta(yt, {
      setDragging: { startX: e.clientX, startWidth: s }
    })
  );
  function o(a) {
    window.removeEventListener("mouseup", o), window.removeEventListener("mousemove", l);
    const c = yt.getState(t.state);
    c != null && c.dragging && (DT(
      t,
      c.activeHandle,
      pu(c.dragging, a, n)
    ), t.dispatch(
      t.state.tr.setMeta(yt, { setDragging: null })
    ));
  }
  function l(a) {
    if (!a.which)
      return o(a);
    const c = yt.getState(t.state);
    if (c && c.dragging) {
      const d = pu(c.dragging, a, n);
      NT(t, c.activeHandle, d, n);
    }
  }
  return window.addEventListener("mouseup", o), window.addEventListener("mousemove", l), e.preventDefault(), !0;
}
function _T(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i)
    return i;
  const s = t.domAtPos(e);
  let l = s.node.childNodes[s.offset].offsetWidth, a = n;
  if (r)
    for (let c = 0; c < n; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function kT(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function hu(t, e, n, r) {
  const i = n == "right" ? -r : r, s = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!s)
    return -1;
  const { pos: o } = s, l = Kr(t.state.doc.resolve(o));
  if (!l)
    return -1;
  if (n == "right")
    return l.pos;
  const a = he.get(l.node(-1)), c = l.start(-1), d = a.map.indexOf(l.pos - c);
  return d % a.width == 0 ? -1 : c + a.map[d - 1];
}
function pu(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function zp(t, e) {
  t.dispatch(
    t.state.tr.setMeta(yt, { setHandle: e })
  );
}
function DT(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), s = he.get(i), o = r.start(-1), l = s.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < s.height; c++) {
    const d = c * s.width + l;
    if (c && s.map[d] == s.map[d - s.width])
      continue;
    const u = s.map[d], f = i.nodeAt(u).attrs, h = f.colspan == 1 ? 0 : l - s.colCount(u);
    if (f.colwidth && f.colwidth[h] == n)
      continue;
    const p = f.colwidth ? f.colwidth.slice() : LT(f.colspan);
    p[h] = n, a.setNodeMarkup(o + u, null, { ...f, colwidth: p });
  }
  a.docChanged && t.dispatch(a);
}
function NT(t, e, n, r) {
  const i = t.state.doc.resolve(e), s = i.node(-1), o = i.start(-1), l = he.get(s).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && ha(
    s,
    a.firstChild,
    a,
    r,
    l,
    n
  );
}
function LT(t) {
  return Array(t).fill(0);
}
function PT(t, e) {
  const n = [], r = t.doc.resolve(e), i = r.node(-1);
  if (!i)
    return se.empty;
  const s = he.get(i), o = r.start(-1), l = s.colCount(r.pos - o) + r.nodeAfter.attrs.colspan;
  for (let a = 0; a < s.height; a++) {
    const c = l + a * s.width - 1;
    if ((l == s.width || s.map[c] != s.map[c + 1]) && (a == 0 || s.map[c] != s.map[c - s.width])) {
      const d = s.map[c], u = o + d + i.nodeAt(d).nodeSize - 1, f = document.createElement("div");
      f.className = "column-resize-handle", n.push(Ve.widget(u, f));
    }
  }
  return se.create(t.doc, n);
}
function Yt(t) {
  const e = t.selection, n = Do(t), r = n.node(-1), i = n.start(-1), s = he.get(r);
  return { ...e instanceof ee ? s.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : s.findCell(n.pos - i), tableStart: i, map: s, table: r };
}
function Gp(t, { map: e, tableStart: n, table: r }, i) {
  let s = i > 0 ? -1 : 0;
  uT(e, r, i + s) && (s = i == 0 || i == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const l = o * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(
        t.mapping.map(n + a),
        null,
        Pp(c.attrs, i - e.colCount(a))
      ), o += c.attrs.rowspan - 1;
    } else {
      const a = s == null ? Fe(r.type.schema).cell : r.nodeAt(e.map[l + s]).type, c = e.positionAt(o, i, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function BT(t, e) {
  if (!_t(t))
    return !1;
  if (e) {
    const n = Yt(t);
    e(Gp(t.tr, n, n.left));
  }
  return !0;
}
function HT(t, e) {
  if (!_t(t))
    return !1;
  if (e) {
    const n = Yt(t);
    e(Gp(t.tr, n, n.right));
  }
  return !0;
}
function VT(t, { map: e, table: n, tableStart: r }, i) {
  const s = t.mapping.maps.length;
  for (let o = 0; o < e.height; ) {
    const l = o * e.width + i, a = e.map[l], c = n.nodeAt(a), d = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a)
      t.setNodeMarkup(
        t.mapping.slice(s).map(r + a),
        null,
        lr(d, i - e.colCount(a))
      );
    else {
      const u = t.mapping.slice(s).map(r + a);
      t.delete(u, u + c.nodeSize);
    }
    o += d.rowspan;
  }
}
function FT(t, e) {
  if (!_t(t))
    return !1;
  if (e) {
    const n = Yt(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width)
      return !1;
    for (let i = n.right - 1; VT(r, n, i), i != n.left; i--) {
      const s = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!s)
        throw RangeError("No table found");
      n.table = s, n.map = he.get(s);
    }
    e(r);
  }
  return !0;
}
function zT(t, e, n) {
  var r;
  const i = Fe(e.type.schema).header_cell;
  for (let s = 0; s < t.width; s++)
    if (((r = e.nodeAt(t.map[s + n * t.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Up(t, { map: e, tableStart: n, table: r }, i) {
  var s;
  let o = n;
  for (let c = 0; c < i; c++)
    o += r.child(c).nodeSize;
  const l = [];
  let a = i > 0 ? -1 : 0;
  zT(e, r, i + a) && (a = i == 0 || i == e.height ? null : 0);
  for (let c = 0, d = e.width * i; c < e.width; c++, d++)
    if (i > 0 && i < e.height && e.map[d] == e.map[d - e.width]) {
      const u = e.map[d], f = r.nodeAt(u).attrs;
      t.setNodeMarkup(n + u, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const u = a == null ? Fe(r.type.schema).cell : (s = r.nodeAt(e.map[d + a * e.width])) == null ? void 0 : s.type, f = u == null ? void 0 : u.createAndFill();
      f && l.push(f);
    }
  return t.insert(o, Fe(r.type.schema).row.create(null, l)), t;
}
function GT(t, e) {
  if (!_t(t))
    return !1;
  if (e) {
    const n = Yt(t);
    e(Up(t.tr, n, n.top));
  }
  return !0;
}
function UT(t, e) {
  if (!_t(t))
    return !1;
  if (e) {
    const n = Yt(t);
    e(Up(t.tr, n, n.bottom));
  }
  return !0;
}
function $T(t, { map: e, table: n, tableStart: r }, i) {
  let s = 0;
  for (let a = 0; a < i; a++)
    s += n.child(a).nodeSize;
  const o = s + n.child(i).nodeSize, l = t.mapping.maps.length;
  t.delete(s + r, o + r);
  for (let a = 0, c = i * e.width; a < e.width; a++, c++) {
    const d = e.map[c];
    if (i > 0 && d == e.map[c - e.width]) {
      const u = n.nodeAt(d).attrs;
      t.setNodeMarkup(t.mapping.slice(l).map(d + r), null, {
        ...u,
        rowspan: u.rowspan - 1
      }), a += u.colspan - 1;
    } else if (i < e.width && d == e.map[c + e.width]) {
      const u = n.nodeAt(d), f = u.attrs, h = u.type.create(
        { ...f, rowspan: u.attrs.rowspan - 1 },
        u.content
      ), p = e.positionAt(i + 1, a, n);
      t.insert(t.mapping.slice(l).map(r + p), h), a += f.colspan - 1;
    }
  }
}
function WT(t, e) {
  if (!_t(t))
    return !1;
  if (e) {
    const n = Yt(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height)
      return !1;
    for (let i = n.bottom - 1; $T(r, n, i), i != n.top; i--) {
      const s = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!s)
        throw RangeError("No table found");
      n.table = s, n.map = he.get(n.table);
    }
    e(r);
  }
  return !0;
}
function mu(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function qT({ width: t, height: e, map: n }, r) {
  let i = r.top * t + r.left, s = i, o = (r.bottom - 1) * t + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && n[s] == n[s - 1] || r.right < t && n[l] == n[l + 1])
      return !0;
    s += t, l += t;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && n[i] == n[i - t] || r.bottom < e && n[o] == n[o + t])
      return !0;
    i++, o++;
  }
  return !1;
}
function gu(t, e) {
  const n = t.selection;
  if (!(n instanceof ee) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = Yt(t), { map: i } = r;
  if (qT(i, r))
    return !1;
  if (e) {
    const s = t.tr, o = {};
    let l = x.empty, a, c;
    for (let d = r.top; d < r.bottom; d++)
      for (let u = r.left; u < r.right; u++) {
        const f = i.map[d * i.width + u], h = r.table.nodeAt(f);
        if (!(o[f] || !h))
          if (o[f] = !0, a == null)
            a = f, c = h;
          else {
            mu(h) || (l = l.append(h.content));
            const p = s.mapping.map(f + r.tableStart);
            s.delete(p, p + h.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (s.setNodeMarkup(a + r.tableStart, null, {
      ...Pp(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const d = a + 1 + c.content.size, u = mu(c) ? a + 1 : d;
      s.replaceWith(u + r.tableStart, d + r.tableStart, l);
    }
    s.setSelection(
      new ee(s.doc.resolve(a + r.tableStart))
    ), e(s);
  }
  return !0;
}
function yu(t, e) {
  const n = Fe(t.schema);
  return jT(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function jT(t) {
  return (e, n) => {
    var r;
    const i = e.selection;
    let s, o;
    if (i instanceof ee) {
      if (i.$anchorCell.pos != i.$headCell.pos)
        return !1;
      s = i.$anchorCell.nodeAfter, o = i.$anchorCell.pos;
    } else {
      if (s = aT(i.$from), !s)
        return !1;
      o = (r = Kr(i.$from)) == null ? void 0 : r.pos;
    }
    if (s == null || o == null || s.attrs.colspan == 1 && s.attrs.rowspan == 1)
      return !1;
    if (n) {
      let l = s.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const d = Yt(e), u = e.tr;
      for (let h = 0; h < d.right - d.left; h++)
        a.push(
          c ? {
            ...l,
            colwidth: c && c[h] ? [c[h]] : null
          } : l
        );
      let f;
      for (let h = d.top; h < d.bottom; h++) {
        let p = d.map.positionAt(h, d.left, d.table);
        h == d.top && (p += s.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          m == d.left && h == d.top || u.insert(
            f = u.mapping.map(p + d.tableStart, 1),
            t({ node: s, row: h, col: m }).createAndFill(a[g])
          );
      }
      u.setNodeMarkup(
        o,
        t({ node: s, row: d.top, col: d.left }),
        a[0]
      ), i instanceof ee && u.setSelection(
        new ee(
          u.doc.resolve(i.$anchorCell.pos),
          f ? u.doc.resolve(f) : void 0
        )
      ), n(u);
    }
    return !0;
  };
}
function YT(t, e) {
  return function(n, r) {
    if (!_t(n))
      return !1;
    const i = Do(n);
    if (i.nodeAfter.attrs[t] === e)
      return !1;
    if (r) {
      const s = n.tr;
      n.selection instanceof ee ? n.selection.forEachCell((o, l) => {
        o.attrs[t] !== e && s.setNodeMarkup(l, null, {
          ...o.attrs,
          [t]: e
        });
      }) : s.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [t]: e
      }), r(s);
    }
    return !0;
  };
}
function KT(t) {
  return function(e, n) {
    if (!_t(e))
      return !1;
    if (n) {
      const r = Fe(e.schema), i = Yt(e), s = e.tr, o = i.map.cellsInRect(
        t == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : t == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), l = o.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < o.length; a++)
        l[a].type == r.header_cell && s.setNodeMarkup(
          i.tableStart + o[a],
          r.cell,
          l[a].attrs
        );
      if (s.steps.length == 0)
        for (let a = 0; a < o.length; a++)
          s.setNodeMarkup(
            i.tableStart + o[a],
            r.header_cell,
            l[a].attrs
          );
      n(s);
    }
    return !0;
  };
}
function Eu(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const s = e.table.nodeAt(r[i]);
    if (s && s.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function Pi(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? KT(t) : function(n, r) {
    if (!_t(n))
      return !1;
    if (r) {
      const i = Fe(n.schema), s = Yt(n), o = n.tr, l = Eu("row", s, i), a = Eu(
        "column",
        s,
        i
      ), d = (t === "column" ? l : t === "row" ? a : !1) ? 1 : 0, u = t == "column" ? {
        left: 0,
        top: d,
        right: 1,
        bottom: s.map.height
      } : t == "row" ? {
        left: d,
        top: 0,
        right: s.map.width,
        bottom: 1
      } : s, f = t == "column" ? a ? i.cell : i.header_cell : t == "row" ? l ? i.cell : i.header_cell : i.cell;
      s.map.cellsInRect(u).forEach((h) => {
        const p = h + s.tableStart, m = o.doc.nodeAt(p);
        m && o.setNodeMarkup(p, f, m.attrs);
      }), r(o);
    }
    return !0;
  };
}
Pi("row", {
  useDeprecatedLogic: !0
});
Pi("column", {
  useDeprecatedLogic: !0
});
var XT = Pi("cell", {
  useDeprecatedLogic: !0
});
function JT(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n)
      return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, i = t.before(); r >= 0; r--) {
      const s = t.node(-1).child(r), o = s.lastChild;
      if (o)
        return i - 1 - o.nodeSize;
      i -= s.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), i = t.after(); r < n.childCount; r++) {
      const s = n.child(r);
      if (s.childCount)
        return i + 1;
      i += s.nodeSize;
    }
  }
  return null;
}
function vu(t) {
  return function(e, n) {
    if (!_t(e))
      return !1;
    const r = JT(Do(e), t);
    if (r == null)
      return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(
        e.tr.setSelection(Y.between(i, dT(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function QT(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(r), n.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function ZT({
  allowTableNodeSelection: t = !1
} = {}) {
  return new me({
    key: yn,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(yn);
        if (r != null)
          return r == -1 ? null : r;
        if (n == null || !e.docChanged)
          return n;
        const { deleted: i, pos: s } = e.mapping.mapResult(n);
        return i ? null : s;
      }
    },
    props: {
      decorations: fT,
      handleDOMEvents: {
        mousedown: CT
      },
      createSelectionBetween(e) {
        return yn.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: ST,
      handleKeyDown: TT,
      handlePaste: IT
    },
    appendTransaction(e, n, r) {
      return mT(
        r,
        Vp(r, n),
        t
      );
    }
  });
}
function bu(t, e, n, r, i, s) {
  let o = 0, l = !0, a = e.firstChild;
  const c = t.firstChild;
  for (let d = 0, u = 0; d < c.childCount; d += 1) {
    const { colspan: f, colwidth: h } = c.child(d).attrs;
    for (let p = 0; p < f; p += 1, u += 1) {
      const m = i === u ? s : h && h[p], g = m ? `${m}px` : "";
      o += m || r, m || (l = !1), a ? (a.style.width !== g && (a.style.width = g), a = a.nextSibling) : e.appendChild(document.createElement("col")).style.width = g;
    }
  }
  for (; a; ) {
    const d = a.nextSibling;
    a.parentNode.removeChild(a), a = d;
  }
  l ? (n.style.width = `${o}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${o}px`);
}
class eS {
  constructor(e, n) {
    this.node = e, this.cellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), bu(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, bu(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function wu(t, e) {
  return e ? t.createChecked(null, e) : t.createAndFill();
}
function tS(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function nS(t, e, n, r, i) {
  const s = tS(t), o = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const d = wu(s.cell, i);
    if (d && l.push(d), r) {
      const u = wu(s.header_cell, i);
      u && o.push(u);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(s.row.createChecked(null, r && c === 0 ? o : l));
  return s.table.createChecked(null, a);
}
function rS(t) {
  return t instanceof ee;
}
const fs = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!rS(e))
    return !1;
  let n = 0;
  const r = qh(e.ranges[0].$from, (s) => s.type.name === "table");
  return r == null || r.node.descendants((s) => {
    if (s.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(s.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, iS = oe.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: eS,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["table", ne(this.options.HTMLAttributes, t), ["tbody", 0]];
  },
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: s }) => {
        const o = nS(s.schema, t, e, n);
        if (i) {
          const l = r.selection.anchor + 1;
          r.replaceSelectionWith(o).scrollIntoView().setSelection(Y.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => BT(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => HT(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => FT(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => GT(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => UT(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => WT(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => QT(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => gu(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => yu(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Pi("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Pi("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => XT(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => gu(t, e) ? !0 : yu(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => YT(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => vu(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => vu(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && Vp(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = ee.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: fs,
      "Mod-Backspace": fs,
      Delete: fs,
      "Mod-Delete": fs
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        OT({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          // @ts-ignore (incorrect type)
          View: this.options.View,
          // TODO: PR for @types/prosemirror-tables
          // @ts-ignore (incorrect type)
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      ZT({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: Q(V(t, "tableRole", e))
    };
  }
}), sS = oe.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? [parseInt(e, 10)] : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", ne(this.options.HTMLAttributes, t), 0];
  }
}), oS = oe.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? [parseInt(e, 10)] : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", ne(this.options.HTMLAttributes, t), 0];
  }
}), lS = oe.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", ne(this.options.HTMLAttributes, t), 0];
  }
}), aS = be.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: "left"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => t.style.textAlign || this.options.defaultAlignment,
            renderHTML: (t) => t.textAlign === this.options.defaultAlignment ? {} : { style: `text-align: ${t.textAlign}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.every((n) => e.updateAttributes(n, { textAlign: t })) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.every((e) => t.resetAttributes(e, "textAlign"))
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), cS = nt.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sub", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSubscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSubscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), dS = nt.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sup", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSuperscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
}), uS = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/, fS = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g, hS = nt.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-color") || t.style.backgroundColor,
        renderHTML: (t) => t.color ? {
          "data-color": t.color,
          style: `background-color: ${t.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", ne(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: e }) => e.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      sr({
        find: uS,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      An({
        find: fS,
        type: this.type
      })
    ];
  }
}), pS = function(t) {
  let n = t.state.selection.$from.before(1), r = t.coordsAtPos(n);
  return new DOMRect(r.left, r.top, 0, 0);
}, mS = function(t) {
  const e = t.state.selection.$from;
  let n = e.depth;
  for (; n > 1 && e.node(n).type.name != "tableRow"; )
    n--;
  let r = e.before(n), i = t.nodeDOM(r).getBoundingClientRect();
  return new DOMRect(i.x, i.y, i.width, i.height);
}, gS = function(t) {
  const e = t.state.selection.$from;
  let n = e.depth, r = 0, i = 0;
  for (; n > 0; ) {
    if ((e.node(n).type.name == "tableCell" || e.node(n).type.name == "tableHeader") && (r = n), e.node(n).type.name == "table") {
      i = n;
      break;
    }
    n--;
  }
  if (!(i && r))
    return !1;
  let s = t.nodeDOM(e.before(r)).getBoundingClientRect(), o = t.nodeDOM(e.before(i)).getBoundingClientRect();
  return new DOMRect(s.x, o.y, s.width, o.height);
}, $p = function(t) {
  const e = t.state.selection.$from;
  return e.node(1) == null && t.lastSelectedViewDesc ? t.lastSelectedViewDesc.node : e.node(1);
};
let Wp = function(t, e) {
  const n = [];
  for (let r = 0; r < t.childCount; r++)
    n.push(
      e(t.child(r), r, t instanceof x ? t : t.content)
    );
  return n;
};
const yS = function({
  view: t,
  state: e,
  draggedNodePosition: n,
  targetNodePosition: r
}) {
  let i = e.doc.resolve(r), s = e.doc.resolve(n).node(1), o = i.node(1), l = t.state.tr;
  const a = i.node(0), c = i.start(0), d = Wp(a, (v) => v);
  let u = d.indexOf(s), f = d.indexOf(o), h = c, p = i.end(0), m = d[u];
  d.splice(u, 1), d.splice(f, 0, m);
  const g = new H(x.fromArray(d), 0, 0);
  l.step(new Oe(h, p, g, !1)), l.setSelection(q.near(l.doc.resolve(r))), t.dispatch(l);
}, ES = function({ view: t, dir: e, currentResolved: n }) {
  if (!n)
    return !1;
  let r = t.state.tr;
  const i = e === "DOWN", s = n.node(1) || n.nodeAfter, o = 0, l = n.node(o), a = n.start(o), c = Wp(l, (g) => g);
  let d = c.indexOf(s);
  if (d == -1)
    return !1;
  let u = i ? d + 1 : d - 1;
  if (u >= c.length || u < 0)
    return !1;
  const f = c[u].nodeSize;
  [c[d], c[u]] = [c[u], c[d]];
  let h = a, p = n.end(o);
  const m = new H(x.fromArray(c), 0, 0);
  r.step(new Oe(h, p, m, !1)), r.setSelection(
    q.near(
      r.doc.resolve(
        i ? n.pos + f : n.pos - f
      )
    )
  ), t.dispatch(r);
}, vS = be.create({
  name: "blockWidth",
  addOptions() {
    return {
      types: [],
      alignments: ["normal", "wide", "full"],
      defaultAlignment: "normal"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          blockWidth: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => t.dataset.blockWidth || this.options.defaultAlignment,
            renderHTML: (t) => t.blockWidth === this.options.defaultAlignment ? {} : { "data-block-width": t.blockWidth }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBlockWidth: (t) => ({ commands: e, view: n }) => this.options.alignments.includes(t) ? (this.options.types.forEach((r) => {
        r == $p(n).type.name && e.updateAttributes(r, {
          blockWidth: t
        });
      }), !0) : !1,
      unsetBlockWidth: () => ({ commands: t }) => this.options.types.every(
        (e) => t.resetAttributes(e, "blockWidth")
      )
    };
  },
  addKeyboardShortcuts() {
    return {
      // 'Mod-Shift-l': () => this.editor.commands.setTextAlign('left'),
      // 'Mod-Shift-e': () => this.editor.commands.setTextAlign('center'),
      // 'Mod-Shift-r': () => this.editor.commands.setTextAlign('right'),
      // 'Mod-Shift-j': () => this.editor.commands.setTextAlign('justify'),
    };
  }
});
const bS = {
  components: {
    NodeViewWrapper: bp,
    NodeViewContent: vp
  },
  props: Tp,
  methods: {
    increase() {
      this.updateAttributes({
        count: this.node.attrs.count + 1
      });
    }
  }
}, wS = /* @__PURE__ */ He("span", {
  class: "label",
  contenteditable: "false"
}, "Vue Component", -1), TS = {
  contenteditable: "false",
  class: "content"
};
function SS(t, e, n, r, i, s) {
  const o = Vt("node-view-content"), l = Vt("node-view-wrapper");
  return Z(), st(l, { class: "vue-component" }, {
    default: De(() => [
      wS,
      He("div", TS, [
        He("button", {
          onClick: e[0] || (e[0] = (...a) => s.increase && s.increase(...a))
        }, " This button has been clicked " + Sf(t.node.attrs.count) + " times. ", 1)
      ]),
      $e(o, { class: "content" })
    ]),
    _: 1
  });
}
const IS = /* @__PURE__ */ ar(bS, [["render", SS]]), CS = oe.create({
  name: "vueComponent",
  group: "block",
  content: "inline*",
  // atom: true,
  addAttributes() {
    return {
      count: {
        default: 0
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "vue-component"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["vue-component", ne(t)];
  },
  addNodeView() {
    return Sp(IS);
  }
});
/*!
 * FilePond 4.30.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const MS = (t) => t instanceof HTMLElement, OS = (t, e = [], n = []) => {
  const r = {
    ...t
  }, i = [], s = [], o = () => ({ ...r }), l = () => {
    const p = [...i];
    return i.length = 0, p;
  }, a = () => {
    const p = [...s];
    s.length = 0, p.forEach(({ type: m, data: g }) => {
      c(m, g);
    });
  }, c = (p, m, g) => {
    if (g && !document.hidden) {
      s.push({ type: p, data: m });
      return;
    }
    h[p] && h[p](m), i.push({
      type: p,
      data: m
    });
  }, d = (p, ...m) => f[p] ? f[p](...m) : null, u = {
    getState: o,
    processActionQueue: l,
    processDispatchQueue: a,
    dispatch: c,
    query: d
  };
  let f = {};
  e.forEach((p) => {
    f = {
      ...p(r),
      ...f
    };
  });
  let h = {};
  return n.forEach((p) => {
    h = {
      ...p(c, d, r),
      ...h
    };
  }), u;
}, AS = (t, e, n) => {
  if (typeof n == "function") {
    t[e] = n;
    return;
  }
  Object.defineProperty(t, e, { ...n });
}, pe = (t, e) => {
  for (const n in t)
    t.hasOwnProperty(n) && e(n, t[n]);
}, Mn = (t) => {
  const e = {};
  return pe(t, (n) => {
    AS(e, n, t[n]);
  }), e;
}, ve = (t, e, n = null) => {
  if (n === null)
    return t.getAttribute(e) || t.hasAttribute(e);
  t.setAttribute(e, n);
}, RS = "http://www.w3.org/2000/svg", xS = ["svg", "path"], Tu = (t) => xS.includes(t), uo = (t, e, n = {}) => {
  typeof e == "object" && (n = e, e = null);
  const r = Tu(t) ? document.createElementNS(RS, t) : document.createElement(t);
  return e && (Tu(t) ? ve(r, "class", e) : r.className = e), pe(n, (i, s) => {
    ve(r, i, s);
  }), r;
}, _S = (t) => (e, n) => {
  typeof n < "u" && t.children[n] ? t.insertBefore(e, t.children[n]) : t.appendChild(e);
}, kS = (t, e) => (n, r) => (typeof r < "u" ? e.splice(r, 0, n) : e.push(n), n), DS = (t, e) => (n) => (e.splice(e.indexOf(n), 1), n.element.parentNode && t.removeChild(n.element), n), NS = (() => typeof window < "u" && typeof window.document < "u")(), qp = () => NS, LS = qp() ? uo("svg") : {}, PS = "children" in LS ? (t) => t.children.length : (t) => t.childNodes.length, jp = (t, e, n, r) => {
  const i = n[0] || t.left, s = n[1] || t.top, o = i + t.width, l = s + t.height * (r[1] || 1), a = {
    // the rectangle of the element itself
    element: {
      ...t
    },
    // the rectangle of the element expanded to contain its children, does not include any margins
    inner: {
      left: t.left,
      top: t.top,
      right: t.right,
      bottom: t.bottom
    },
    // the rectangle of the element expanded to contain its children including own margin and child margins
    // margins will be added after we've recalculated the size
    outer: {
      left: i,
      top: s,
      right: o,
      bottom: l
    }
  };
  return e.filter((c) => !c.isRectIgnored()).map((c) => c.rect).forEach((c) => {
    Su(a.inner, { ...c.inner }), Su(a.outer, { ...c.outer });
  }), Iu(a.inner), a.outer.bottom += a.element.marginBottom, a.outer.right += a.element.marginRight, Iu(a.outer), a;
}, Su = (t, e) => {
  e.top += t.top, e.right += t.left, e.bottom += t.top, e.left += t.left, e.bottom > t.bottom && (t.bottom = e.bottom), e.right > t.right && (t.right = e.right);
}, Iu = (t) => {
  t.width = t.right - t.left, t.height = t.bottom - t.top;
}, $n = (t) => typeof t == "number", BS = (t, e, n, r = 1e-3) => Math.abs(t - e) < r && Math.abs(n) < r, HS = (
  // default options
  ({ stiffness: t = 0.5, damping: e = 0.75, mass: n = 10 } = {}) => {
    let r = null, i = null, s = 0, o = !1;
    const c = Mn({
      interpolate: (d, u) => {
        if (o)
          return;
        if (!($n(r) && $n(i))) {
          o = !0, s = 0;
          return;
        }
        const f = -(i - r) * t;
        s += f / n, i += s, s *= e, BS(i, r, s) || u ? (i = r, s = 0, o = !0, c.onupdate(i), c.oncomplete(i)) : c.onupdate(i);
      },
      target: {
        set: (d) => {
          if ($n(d) && !$n(i) && (i = d), r === null && (r = d, i = d), r = d, i === r || typeof r > "u") {
            o = !0, s = 0, c.onupdate(i), c.oncomplete(i);
            return;
          }
          o = !1;
        },
        get: () => r
      },
      resting: {
        get: () => o
      },
      onupdate: (d) => {
      },
      oncomplete: (d) => {
      }
    });
    return c;
  }
), VS = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t, FS = (
  // default values
  ({ duration: t = 500, easing: e = VS, delay: n = 0 } = {}) => {
    let r = null, i, s, o = !0, l = !1, a = null;
    const d = Mn({
      interpolate: (u, f) => {
        o || a === null || (r === null && (r = u), !(u - r < n) && (i = u - r - n, i >= t || f ? (i = 1, s = l ? 0 : 1, d.onupdate(s * a), d.oncomplete(s * a), o = !0) : (s = i / t, d.onupdate((i >= 0 ? e(l ? 1 - s : s) : 0) * a))));
      },
      target: {
        get: () => l ? 0 : a,
        set: (u) => {
          if (a === null) {
            a = u, d.onupdate(u), d.oncomplete(u);
            return;
          }
          u < a ? (a = 1, l = !0) : (l = !1, a = u), o = !1, r = null;
        }
      },
      resting: {
        get: () => o
      },
      onupdate: (u) => {
      },
      oncomplete: (u) => {
      }
    });
    return d;
  }
), Cu = {
  spring: HS,
  tween: FS
}, zS = (t, e, n) => {
  const r = t[e] && typeof t[e][n] == "object" ? t[e][n] : t[e] || t, i = typeof r == "string" ? r : r.type, s = typeof r == "object" ? { ...r } : {};
  return Cu[i] ? Cu[i](s) : null;
}, ac = (t, e, n, r = !1) => {
  e = Array.isArray(e) ? e : [e], e.forEach((i) => {
    t.forEach((s) => {
      let o = s, l = () => n[s], a = (c) => n[s] = c;
      typeof s == "object" && (o = s.key, l = s.getter || l, a = s.setter || a), !(i[o] && !r) && (i[o] = {
        get: l,
        set: a
      });
    });
  });
}, GS = ({ mixinConfig: t, viewProps: e, viewInternalAPI: n, viewExternalAPI: r }) => {
  const i = { ...e }, s = [];
  return pe(t, (o, l) => {
    const a = zS(l);
    if (!a)
      return;
    a.onupdate = (d) => {
      e[o] = d;
    }, a.target = i[o], ac([{
      key: o,
      setter: (d) => {
        a.target !== d && (a.target = d);
      },
      getter: () => e[o]
    }], [n, r], e, !0), s.push(a);
  }), {
    write: (o) => {
      let l = document.hidden, a = !0;
      return s.forEach((c) => {
        c.resting || (a = !1), c.interpolate(o, l);
      }), a;
    },
    destroy: () => {
    }
  };
}, US = (t) => (e, n) => {
  t.addEventListener(e, n);
}, $S = (t) => (e, n) => {
  t.removeEventListener(e, n);
}, WS = ({
  mixinConfig: t,
  viewProps: e,
  viewInternalAPI: n,
  viewExternalAPI: r,
  viewState: i,
  view: s
}) => {
  const o = [], l = US(s.element), a = $S(s.element);
  return r.on = (c, d) => {
    o.push({
      type: c,
      fn: d
    }), l(c, d);
  }, r.off = (c, d) => {
    o.splice(o.findIndex((u) => u.type === c && u.fn === d), 1), a(c, d);
  }, {
    write: () => !0,
    destroy: () => {
      o.forEach((c) => {
        a(c.type, c.fn);
      });
    }
  };
}, qS = ({ mixinConfig: t, viewProps: e, viewExternalAPI: n }) => {
  ac(t, n, e);
}, Ue = (t) => t != null, jS = {
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  originX: 0,
  originY: 0
}, YS = ({ mixinConfig: t, viewProps: e, viewInternalAPI: n, viewExternalAPI: r, view: i }) => {
  const s = { ...e }, o = {};
  ac(t, [n, r], e);
  const l = () => [e.translateX || 0, e.translateY || 0], a = () => [e.scaleX || 0, e.scaleY || 0], c = () => i.rect ? jp(i.rect, i.childViews, l(), a()) : null;
  return n.rect = { get: c }, r.rect = { get: c }, t.forEach((d) => {
    e[d] = typeof s[d] > "u" ? jS[d] : s[d];
  }), {
    write: () => {
      if (KS(o, e))
        return XS(i.element, e), Object.assign(o, { ...e }), !0;
    },
    destroy: () => {
    }
  };
}, KS = (t, e) => {
  if (Object.keys(t).length !== Object.keys(e).length)
    return !0;
  for (const n in e)
    if (e[n] !== t[n])
      return !0;
  return !1;
}, XS = (t, {
  opacity: e,
  perspective: n,
  translateX: r,
  translateY: i,
  scaleX: s,
  scaleY: o,
  rotateX: l,
  rotateY: a,
  rotateZ: c,
  originX: d,
  originY: u,
  width: f,
  height: h
}) => {
  let p = "", m = "";
  (Ue(d) || Ue(u)) && (m += `transform-origin: ${d || 0}px ${u || 0}px;`), Ue(n) && (p += `perspective(${n}px) `), (Ue(r) || Ue(i)) && (p += `translate3d(${r || 0}px, ${i || 0}px, 0) `), (Ue(s) || Ue(o)) && (p += `scale3d(${Ue(s) ? s : 1}, ${Ue(o) ? o : 1}, 1) `), Ue(c) && (p += `rotateZ(${c}rad) `), Ue(l) && (p += `rotateX(${l}rad) `), Ue(a) && (p += `rotateY(${a}rad) `), p.length && (m += `transform:${p};`), Ue(e) && (m += `opacity:${e};`, e === 0 && (m += "visibility:hidden;"), e < 1 && (m += "pointer-events:none;")), Ue(h) && (m += `height:${h}px;`), Ue(f) && (m += `width:${f}px;`);
  const g = t.elementCurrentStyle || "";
  (m.length !== g.length || m !== g) && (t.style.cssText = m, t.elementCurrentStyle = m);
}, JS = {
  styles: YS,
  listeners: WS,
  animations: GS,
  apis: qS
}, Mu = (t = {}, e = {}, n = {}) => (e.layoutCalculated || (t.paddingTop = parseInt(n.paddingTop, 10) || 0, t.marginTop = parseInt(n.marginTop, 10) || 0, t.marginRight = parseInt(n.marginRight, 10) || 0, t.marginBottom = parseInt(n.marginBottom, 10) || 0, t.marginLeft = parseInt(n.marginLeft, 10) || 0, e.layoutCalculated = !0), t.left = e.offsetLeft || 0, t.top = e.offsetTop || 0, t.width = e.offsetWidth || 0, t.height = e.offsetHeight || 0, t.right = t.left + t.width, t.bottom = t.top + t.height, t.scrollTop = e.scrollTop, t.hidden = e.offsetParent === null, t), we = (
  // default view definition
  ({
    // element definition
    tag: t = "div",
    name: e = null,
    attributes: n = {},
    // view interaction
    read: r = () => {
    },
    write: i = () => {
    },
    create: s = () => {
    },
    destroy: o = () => {
    },
    // hooks
    filterFrameActionsForChild: l = (h, p) => p,
    didCreateView: a = () => {
    },
    didWriteView: c = () => {
    },
    // rect related
    ignoreRect: d = !1,
    ignoreRectUpdate: u = !1,
    // mixins
    mixins: f = []
  } = {}) => (h, p = {}) => {
    const m = uo(t, `filepond--${e}`, n), g = window.getComputedStyle(m, null), v = Mu();
    let E = null, b = !1;
    const y = [], T = [], w = {}, C = {}, S = [
      i
      // default writer
    ], O = [
      r
      // default reader
    ], P = [
      o
      // default destroy
    ], k = () => m, D = () => y.concat(), F = () => w, R = (X) => (le, Te) => le(X, Te), G = () => E || (E = jp(v, y, [0, 0], [1, 1]), E), I = () => g, A = () => {
      E = null, y.forEach((Te) => Te._read()), !(u && v.width && v.height) && Mu(v, m, g);
      const le = { root: ge, props: p, rect: v };
      O.forEach((Te) => Te(le));
    }, L = (X, le, Te) => {
      let it = le.length === 0;
      return S.forEach((ae) => {
        ae({
          props: p,
          root: ge,
          actions: le,
          timestamp: X,
          shouldOptimize: Te
        }) === !1 && (it = !1);
      }), T.forEach((ae) => {
        ae.write(X) === !1 && (it = !1);
      }), y.filter((ae) => !!ae.element.parentNode).forEach((ae) => {
        ae._write(
          X,
          l(ae, le),
          Te
        ) || (it = !1);
      }), y.forEach((ae, St) => {
        ae.element.parentNode || (ge.appendChild(ae.element, St), ae._read(), ae._write(
          X,
          l(ae, le),
          Te
        ), it = !1);
      }), b = it, c({
        props: p,
        root: ge,
        actions: le,
        timestamp: X
      }), it;
    }, B = () => {
      T.forEach((X) => X.destroy()), P.forEach((X) => {
        X({ root: ge, props: p });
      }), y.forEach((X) => X._destroy());
    }, $ = {
      element: {
        get: k
      },
      style: {
        get: I
      },
      childViews: {
        get: D
      }
    }, K = {
      ...$,
      rect: {
        get: G
      },
      // access to custom children references
      ref: {
        get: F
      },
      // dom modifiers
      is: (X) => e === X,
      appendChild: _S(m),
      createChildView: R(h),
      linkView: (X) => (y.push(X), X),
      unlinkView: (X) => {
        y.splice(y.indexOf(X), 1);
      },
      appendChildView: kS(m, y),
      removeChildView: DS(m, y),
      registerWriter: (X) => S.push(X),
      registerReader: (X) => O.push(X),
      registerDestroyer: (X) => P.push(X),
      invalidateLayout: () => m.layoutCalculated = !1,
      // access to data store
      dispatch: h.dispatch,
      query: h.query
    }, ue = {
      element: {
        get: k
      },
      childViews: {
        get: D
      },
      rect: {
        get: G
      },
      resting: {
        get: () => b
      },
      isRectIgnored: () => d,
      _read: A,
      _write: L,
      _destroy: B
    }, ke = {
      ...$,
      rect: {
        get: () => v
      }
    };
    Object.keys(f).sort((X, le) => X === "styles" ? 1 : le === "styles" ? -1 : 0).forEach((X) => {
      const le = JS[X]({
        mixinConfig: f[X],
        viewProps: p,
        viewState: C,
        viewInternalAPI: K,
        viewExternalAPI: ue,
        view: Mn(ke)
      });
      le && T.push(le);
    });
    const ge = Mn(K);
    s({
      root: ge,
      props: p
    });
    const ze = PS(m);
    return y.forEach((X, le) => {
      ge.appendChild(X.element, ze + le);
    }), a(ge), Mn(ue);
  }
), QS = (t, e, n = 60) => {
  const r = "__framePainter";
  if (window[r]) {
    window[r].readers.push(t), window[r].writers.push(e);
    return;
  }
  window[r] = {
    readers: [t],
    writers: [e]
  };
  const i = window[r], s = 1e3 / n;
  let o = null, l = null, a = null, c = null;
  const d = () => {
    document.hidden ? (a = () => window.setTimeout(() => u(performance.now()), s), c = () => window.clearTimeout(l)) : (a = () => window.requestAnimationFrame(u), c = () => window.cancelAnimationFrame(l));
  };
  document.addEventListener("visibilitychange", () => {
    c && c(), d(), u(performance.now());
  });
  const u = (f) => {
    l = a(u), o || (o = f);
    const h = f - o;
    h <= s || (o = f - h % s, i.readers.forEach((p) => p()), i.writers.forEach((p) => p(f)));
  };
  return d(), u(performance.now()), {
    pause: () => {
      c(l);
    }
  };
}, Ke = (t, e) => ({ root: n, props: r, actions: i = [], timestamp: s, shouldOptimize: o }) => {
  i.filter((l) => t[l.type]).forEach(
    (l) => t[l.type]({ root: n, props: r, action: l.data, timestamp: s, shouldOptimize: o })
  ), e && e({ root: n, props: r, actions: i, timestamp: s, shouldOptimize: o });
}, Ou = (t, e) => e.parentNode.insertBefore(t, e), Au = (t, e) => e.parentNode.insertBefore(t, e.nextSibling), No = (t) => Array.isArray(t), on = (t) => t == null, ZS = (t) => t.trim(), Lo = (t) => "" + t, eI = (t, e = ",") => on(t) ? [] : No(t) ? t : Lo(t).split(e).map(ZS).filter((n) => n.length), Yp = (t) => typeof t == "boolean", Kp = (t) => Yp(t) ? t : t === "true", Ye = (t) => typeof t == "string", Xp = (t) => $n(t) ? t : Ye(t) ? Lo(t).replace(/[a-z]+/gi, "") : 0, xs = (t) => parseInt(Xp(t), 10), Ru = (t) => parseFloat(Xp(t)), Xr = (t) => $n(t) && isFinite(t) && Math.floor(t) === t, xu = (t, e = 1e3) => {
  if (Xr(t))
    return t;
  let n = Lo(t).trim();
  return /MB$/i.test(n) ? (n = n.replace(/MB$i/, "").trim(), xs(n) * e * e) : /KB/i.test(n) ? (n = n.replace(/KB$i/, "").trim(), xs(n) * e) : xs(n);
}, Wn = (t) => typeof t == "function", tI = (t) => {
  let e = self, n = t.split("."), r = null;
  for (; r = n.shift(); )
    if (e = e[r], !e)
      return null;
  return e;
}, _u = {
  process: "POST",
  patch: "PATCH",
  revert: "DELETE",
  fetch: "GET",
  restore: "GET",
  load: "GET"
}, nI = (t) => {
  const e = {};
  return e.url = Ye(t) ? t : t.url || "", e.timeout = t.timeout ? parseInt(t.timeout, 10) : 0, e.headers = t.headers ? t.headers : {}, pe(_u, (n) => {
    e[n] = rI(n, t[n], _u[n], e.timeout, e.headers);
  }), e.process = t.process || Ye(t) || t.url ? e.process : null, e.remove = t.remove || null, delete e.headers, e;
}, rI = (t, e, n, r, i) => {
  if (e === null)
    return null;
  if (typeof e == "function")
    return e;
  const s = {
    url: n === "GET" || n === "PATCH" ? `?${t}=` : "",
    method: n,
    headers: i,
    withCredentials: !1,
    timeout: r,
    onload: null,
    ondata: null,
    onerror: null
  };
  if (Ye(e))
    return s.url = e, s;
  if (Object.assign(s, e), Ye(s.headers)) {
    const o = s.headers.split(/:(.+)/);
    s.headers = {
      header: o[0],
      value: o[1]
    };
  }
  return s.withCredentials = Kp(s.withCredentials), s;
}, iI = (t) => nI(t), sI = (t) => t === null, Ae = (t) => typeof t == "object" && t !== null, oI = (t) => Ae(t) && Ye(t.url) && Ae(t.process) && Ae(t.revert) && Ae(t.restore) && Ae(t.fetch), pa = (t) => No(t) ? "array" : sI(t) ? "null" : Xr(t) ? "int" : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(t) ? "bytes" : oI(t) ? "api" : typeof t, lI = (t) => t.replace(/{\s*'/g, '{"').replace(/'\s*}/g, '"}').replace(/'\s*:/g, '":').replace(/:\s*'/g, ':"').replace(/,\s*'/g, ',"').replace(/'\s*,/g, '",'), aI = {
  array: eI,
  boolean: Kp,
  int: (t) => pa(t) === "bytes" ? xu(t) : xs(t),
  number: Ru,
  float: Ru,
  bytes: xu,
  string: (t) => Wn(t) ? t : Lo(t),
  function: (t) => tI(t),
  serverapi: iI,
  object: (t) => {
    try {
      return JSON.parse(lI(t));
    } catch {
      return null;
    }
  }
}, cI = (t, e) => aI[e](t), Jp = (t, e, n) => {
  if (t === e)
    return t;
  let r = pa(t);
  if (r !== n) {
    const i = cI(t, n);
    if (r = pa(i), i === null)
      throw `Trying to assign value with incorrect type to "${option}", allowed type: "${n}"`;
    t = i;
  }
  return t;
}, dI = (t, e) => {
  let n = t;
  return {
    enumerable: !0,
    get: () => n,
    set: (r) => {
      n = Jp(r, t, e);
    }
  };
}, uI = (t) => {
  const e = {};
  return pe(t, (n) => {
    const r = t[n];
    e[n] = dI(r[0], r[1]);
  }), Mn(e);
}, fI = (t) => ({
  // model
  items: [],
  // timeout used for calling update items
  listUpdateTimeout: null,
  // timeout used for stacking metadata updates
  itemUpdateTimeout: null,
  // queue of items waiting to be processed
  processingQueue: [],
  // options
  options: uI(t)
}), Po = (t, e = "-") => t.split(/(?=[A-Z])/).map((n) => n.toLowerCase()).join(e), hI = (t, e) => {
  const n = {};
  return pe(e, (r) => {
    n[r] = {
      get: () => t.getState().options[r],
      set: (i) => {
        t.dispatch(`SET_${Po(r, "_").toUpperCase()}`, {
          value: i
        });
      }
    };
  }), n;
}, pI = (t) => (e, n, r) => {
  const i = {};
  return pe(t, (s) => {
    const o = Po(s, "_").toUpperCase();
    i[`SET_${o}`] = (l) => {
      try {
        r.options[s] = l.value;
      } catch {
      }
      e(`DID_SET_${o}`, { value: r.options[s] });
    };
  }), i;
}, mI = (t) => (e) => {
  const n = {};
  return pe(t, (r) => {
    n[`GET_${Po(r, "_").toUpperCase()}`] = (i) => e.options[r];
  }), n;
}, Et = {
  API: 1,
  DROP: 2,
  BROWSE: 3,
  PASTE: 4,
  NONE: 5
}, cc = () => Math.random().toString(36).substring(2, 11), dc = (t, e) => t.splice(e, 1), gI = (t, e) => {
  e ? t() : document.hidden ? Promise.resolve(1).then(t) : setTimeout(t, 0);
}, Bo = () => {
  const t = [], e = (r, i) => {
    dc(
      t,
      t.findIndex((s) => s.event === r && (s.cb === i || !i))
    );
  }, n = (r, i, s) => {
    t.filter((o) => o.event === r).map((o) => o.cb).forEach((o) => gI(() => o(...i), s));
  };
  return {
    fireSync: (r, ...i) => {
      n(r, i, !0);
    },
    fire: (r, ...i) => {
      n(r, i, !1);
    },
    on: (r, i) => {
      t.push({ event: r, cb: i });
    },
    onOnce: (r, i) => {
      t.push({
        event: r,
        cb: (...s) => {
          e(r, i), i(...s);
        }
      });
    },
    off: e
  };
}, Qp = (t, e, n) => {
  Object.getOwnPropertyNames(t).filter((r) => !n.includes(r)).forEach(
    (r) => Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  );
}, yI = [
  "fire",
  "process",
  "revert",
  "load",
  "on",
  "off",
  "onOnce",
  "retryLoad",
  "extend",
  "archive",
  "archived",
  "release",
  "released",
  "requestProcessing",
  "freeze"
], Xe = (t) => {
  const e = {};
  return Qp(t, e, yI), e;
}, EI = (t) => {
  t.forEach((e, n) => {
    e.released && dc(t, n);
  });
}, J = {
  INIT: 1,
  IDLE: 2,
  PROCESSING_QUEUED: 9,
  PROCESSING: 3,
  PROCESSING_COMPLETE: 5,
  PROCESSING_ERROR: 6,
  PROCESSING_REVERT_ERROR: 10,
  LOADING: 7,
  LOAD_ERROR: 8
}, Me = {
  INPUT: 1,
  LIMBO: 2,
  LOCAL: 3
}, Zp = (t) => /[^0-9]+/.exec(t), em = () => Zp(1.1.toLocaleString())[0], vI = () => {
  const t = em(), e = 1e3.toLocaleString(), n = 1e3.toString();
  return e !== n ? Zp(e)[0] : t === "." ? "," : ".";
}, _ = {
  BOOLEAN: "boolean",
  INT: "int",
  NUMBER: "number",
  STRING: "string",
  ARRAY: "array",
  OBJECT: "object",
  FUNCTION: "function",
  ACTION: "action",
  SERVER_API: "serverapi",
  REGEX: "regex"
}, uc = [], It = (t, e, n) => new Promise((r, i) => {
  const s = uc.filter((l) => l.key === t).map((l) => l.cb);
  if (s.length === 0) {
    r(e);
    return;
  }
  const o = s.shift();
  s.reduce(
    // loop over promises passing value to next promise
    (l, a) => l.then((c) => a(c, n)),
    // call initial filter, will return a promise
    o(e, n)
    // all executed
  ).then((l) => r(l)).catch((l) => i(l));
}), dr = (t, e, n) => uc.filter((r) => r.key === t).map((r) => r.cb(e, n)), bI = (t, e) => uc.push({ key: t, cb: e }), wI = (t) => Object.assign(Mr, t), fo = () => ({ ...Mr }), TI = (t) => {
  pe(t, (e, n) => {
    Mr[e] && (Mr[e][0] = Jp(
      n,
      Mr[e][0],
      Mr[e][1]
    ));
  });
}, Mr = {
  // the id to add to the root element
  id: [null, _.STRING],
  // input field name to use
  name: ["filepond", _.STRING],
  // disable the field
  disabled: [!1, _.BOOLEAN],
  // classname to put on wrapper
  className: [null, _.STRING],
  // is the field required
  required: [!1, _.BOOLEAN],
  // Allow media capture when value is set
  captureMethod: [null, _.STRING],
  // - "camera", "microphone" or "camcorder",
  // - Does not work with multiple on apple devices
  // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"
  // sync `acceptedFileTypes` property with `accept` attribute
  allowSyncAcceptAttribute: [!0, _.BOOLEAN],
  // Feature toggles
  allowDrop: [!0, _.BOOLEAN],
  // Allow dropping of files
  allowBrowse: [!0, _.BOOLEAN],
  // Allow browsing the file system
  allowPaste: [!0, _.BOOLEAN],
  // Allow pasting files
  allowMultiple: [!1, _.BOOLEAN],
  // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
  allowReplace: [!0, _.BOOLEAN],
  // Allow dropping a file on other file to replace it (only works when multiple is set to false)
  allowRevert: [!0, _.BOOLEAN],
  // Allows user to revert file upload
  allowRemove: [!0, _.BOOLEAN],
  // Allow user to remove a file
  allowProcess: [!0, _.BOOLEAN],
  // Allows user to process a file, when set to false, this removes the file upload button
  allowReorder: [!1, _.BOOLEAN],
  // Allow reordering of files
  allowDirectoriesOnly: [!1, _.BOOLEAN],
  // Allow only selecting directories with browse (no support for filtering dnd at this point)
  // Try store file if `server` not set
  storeAsFile: [!1, _.BOOLEAN],
  // Revert mode
  forceRevert: [!1, _.BOOLEAN],
  // Set to 'force' to require the file to be reverted before removal
  // Input requirements
  maxFiles: [null, _.INT],
  // Max number of files
  checkValidity: [!1, _.BOOLEAN],
  // Enables custom validity messages
  // Where to put file
  itemInsertLocationFreedom: [!0, _.BOOLEAN],
  // Set to false to always add items to begin or end of list
  itemInsertLocation: ["before", _.STRING],
  // Default index in list to add items that have been dropped at the top of the list
  itemInsertInterval: [75, _.INT],
  // Drag 'n Drop related
  dropOnPage: [!1, _.BOOLEAN],
  // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
  dropOnElement: [!0, _.BOOLEAN],
  // Drop needs to happen on element (set to false to also load drops outside of Up)
  dropValidation: [!1, _.BOOLEAN],
  // Enable or disable validating files on drop
  ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], _.ARRAY],
  // Upload related
  instantUpload: [!0, _.BOOLEAN],
  // Should upload files immediately on drop
  maxParallelUploads: [2, _.INT],
  // Maximum files to upload in parallel
  allowMinimumUploadDuration: [!0, _.BOOLEAN],
  // if true uploads take at least 750 ms, this ensures the user sees the upload progress giving trust the upload actually happened
  // Chunks
  chunkUploads: [!1, _.BOOLEAN],
  // Enable chunked uploads
  chunkForce: [!1, _.BOOLEAN],
  // Force use of chunk uploads even for files smaller than chunk size
  chunkSize: [5e6, _.INT],
  // Size of chunks (5MB default)
  chunkRetryDelays: [[500, 1e3, 3e3], _.ARRAY],
  // Amount of times to retry upload of a chunk when it fails
  // The server api end points to use for uploading (see docs)
  server: [null, _.SERVER_API],
  // File size calculations, can set to 1024, this is only used for display, properties use file size base 1000
  fileSizeBase: [1e3, _.INT],
  // Labels and status messages
  labelFileSizeBytes: ["bytes", _.STRING],
  labelFileSizeKilobytes: ["KB", _.STRING],
  labelFileSizeMegabytes: ["MB", _.STRING],
  labelFileSizeGigabytes: ["GB", _.STRING],
  labelDecimalSeparator: [em(), _.STRING],
  // Default is locale separator
  labelThousandsSeparator: [vI(), _.STRING],
  // Default is locale separator
  labelIdle: [
    'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
    _.STRING
  ],
  labelInvalidField: ["Field contains invalid files", _.STRING],
  labelFileWaitingForSize: ["Waiting for size", _.STRING],
  labelFileSizeNotAvailable: ["Size not available", _.STRING],
  labelFileCountSingular: ["file in list", _.STRING],
  labelFileCountPlural: ["files in list", _.STRING],
  labelFileLoading: ["Loading", _.STRING],
  labelFileAdded: ["Added", _.STRING],
  // assistive only
  labelFileLoadError: ["Error during load", _.STRING],
  labelFileRemoved: ["Removed", _.STRING],
  // assistive only
  labelFileRemoveError: ["Error during remove", _.STRING],
  labelFileProcessing: ["Uploading", _.STRING],
  labelFileProcessingComplete: ["Upload complete", _.STRING],
  labelFileProcessingAborted: ["Upload cancelled", _.STRING],
  labelFileProcessingError: ["Error during upload", _.STRING],
  labelFileProcessingRevertError: ["Error during revert", _.STRING],
  labelTapToCancel: ["tap to cancel", _.STRING],
  labelTapToRetry: ["tap to retry", _.STRING],
  labelTapToUndo: ["tap to undo", _.STRING],
  labelButtonRemoveItem: ["Remove", _.STRING],
  labelButtonAbortItemLoad: ["Abort", _.STRING],
  labelButtonRetryItemLoad: ["Retry", _.STRING],
  labelButtonAbortItemProcessing: ["Cancel", _.STRING],
  labelButtonUndoItemProcessing: ["Undo", _.STRING],
  labelButtonRetryItemProcessing: ["Retry", _.STRING],
  labelButtonProcessItem: ["Upload", _.STRING],
  // make sure width and height plus viewpox are even numbers so icons are nicely centered
  iconRemove: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  iconProcess: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
    _.STRING
  ],
  iconRetry: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  iconUndo: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  iconDone: [
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
    _.STRING
  ],
  // event handlers
  oninit: [null, _.FUNCTION],
  onwarning: [null, _.FUNCTION],
  onerror: [null, _.FUNCTION],
  onactivatefile: [null, _.FUNCTION],
  oninitfile: [null, _.FUNCTION],
  onaddfilestart: [null, _.FUNCTION],
  onaddfileprogress: [null, _.FUNCTION],
  onaddfile: [null, _.FUNCTION],
  onprocessfilestart: [null, _.FUNCTION],
  onprocessfileprogress: [null, _.FUNCTION],
  onprocessfileabort: [null, _.FUNCTION],
  onprocessfilerevert: [null, _.FUNCTION],
  onprocessfile: [null, _.FUNCTION],
  onprocessfiles: [null, _.FUNCTION],
  onremovefile: [null, _.FUNCTION],
  onpreparefile: [null, _.FUNCTION],
  onupdatefiles: [null, _.FUNCTION],
  onreorderfiles: [null, _.FUNCTION],
  // hooks
  beforeDropFile: [null, _.FUNCTION],
  beforeAddFile: [null, _.FUNCTION],
  beforeRemoveFile: [null, _.FUNCTION],
  beforePrepareFile: [null, _.FUNCTION],
  // styles
  stylePanelLayout: [null, _.STRING],
  // null 'integrated', 'compact', 'circle'
  stylePanelAspectRatio: [null, _.STRING],
  // null or '3:2' or 1
  styleItemPanelAspectRatio: [null, _.STRING],
  styleButtonRemoveItemPosition: ["left", _.STRING],
  styleButtonProcessItemPosition: ["right", _.STRING],
  styleLoadIndicatorPosition: ["right", _.STRING],
  styleProgressIndicatorPosition: ["right", _.STRING],
  styleButtonRemoveItemAlign: [!1, _.BOOLEAN],
  // custom initial files array
  files: [[], _.ARRAY],
  // show support by displaying credits
  credits: [["https://pqina.nl/", "Powered by PQINA"], _.ARRAY]
}, qn = (t, e) => on(e) ? t[0] || null : Xr(e) ? t[e] || null : (typeof e == "object" && (e = e.id), t.find((n) => n.id === e) || null), tm = (t) => {
  if (on(t))
    return t;
  if (/:/.test(t)) {
    const e = t.split(":");
    return e[1] / e[0];
  }
  return parseFloat(t);
}, Ot = (t) => t.filter((e) => !e.archived), SI = {
  EMPTY: 0,
  IDLE: 1,
  // waiting
  ERROR: 2,
  // a file is in error state
  BUSY: 3,
  // busy processing or loading
  READY: 4
  // all files uploaded
};
let hs = null;
const II = () => {
  if (hs === null)
    try {
      const t = new DataTransfer();
      t.items.add(new File(["hello world"], "This_Works.txt"));
      const e = document.createElement("input");
      e.setAttribute("type", "file"), e.files = t.files, hs = e.files.length === 1;
    } catch {
      hs = !1;
    }
  return hs;
}, CI = [
  J.LOAD_ERROR,
  J.PROCESSING_ERROR,
  J.PROCESSING_REVERT_ERROR
], MI = [
  J.LOADING,
  J.PROCESSING,
  J.PROCESSING_QUEUED,
  J.INIT
], OI = [J.PROCESSING_COMPLETE], AI = (t) => CI.includes(t.status), RI = (t) => MI.includes(t.status), xI = (t) => OI.includes(t.status), ku = (t) => Ae(t.options.server) && (Ae(t.options.server.process) || Wn(t.options.server.process)), _I = (t) => ({
  GET_STATUS: () => {
    const e = Ot(t.items), { EMPTY: n, ERROR: r, BUSY: i, IDLE: s, READY: o } = SI;
    return e.length === 0 ? n : e.some(AI) ? r : e.some(RI) ? i : e.some(xI) ? o : s;
  },
  GET_ITEM: (e) => qn(t.items, e),
  GET_ACTIVE_ITEM: (e) => qn(Ot(t.items), e),
  GET_ACTIVE_ITEMS: () => Ot(t.items),
  GET_ITEMS: () => t.items,
  GET_ITEM_NAME: (e) => {
    const n = qn(t.items, e);
    return n ? n.filename : null;
  },
  GET_ITEM_SIZE: (e) => {
    const n = qn(t.items, e);
    return n ? n.fileSize : null;
  },
  GET_STYLES: () => Object.keys(t.options).filter((e) => /^style/.test(e)).map((e) => ({
    name: e,
    value: t.options[e]
  })),
  GET_PANEL_ASPECT_RATIO: () => /circle/.test(t.options.stylePanelLayout) ? 1 : tm(t.options.stylePanelAspectRatio),
  GET_ITEM_PANEL_ASPECT_RATIO: () => t.options.styleItemPanelAspectRatio,
  GET_ITEMS_BY_STATUS: (e) => Ot(t.items).filter((n) => n.status === e),
  GET_TOTAL_ITEMS: () => Ot(t.items).length,
  SHOULD_UPDATE_FILE_INPUT: () => t.options.storeAsFile && II() && !ku(t),
  IS_ASYNC: () => ku(t),
  GET_FILE_SIZE_LABELS: (e) => ({
    labelBytes: e("GET_LABEL_FILE_SIZE_BYTES") || void 0,
    labelKilobytes: e("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
    labelMegabytes: e("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
    labelGigabytes: e("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0
  })
}), kI = (t) => {
  const e = Ot(t.items).length;
  if (!t.options.allowMultiple)
    return e === 0;
  const n = t.options.maxFiles;
  return n === null || e < n;
}, nm = (t, e, n) => Math.max(Math.min(n, t), e), DI = (t, e, n) => t.splice(e, 0, n), NI = (t, e, n) => on(e) ? null : typeof n > "u" ? (t.push(e), e) : (n = nm(n, 0, t.length), DI(t, n, e), e), ma = (t) => /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
  t
), zi = (t) => t.split("/").pop().split("?").shift(), Ho = (t) => t.split(".").pop(), LI = (t) => {
  if (typeof t != "string")
    return "";
  const e = t.split("/").pop();
  return /svg/.test(e) ? "svg" : /zip|compressed/.test(e) ? "zip" : /plain/.test(e) ? "txt" : /msword/.test(e) ? "doc" : /[a-z]+/.test(e) ? e === "jpeg" ? "jpg" : e : "";
}, si = (t, e = "") => (e + t).slice(-e.length), rm = (t = /* @__PURE__ */ new Date()) => `${t.getFullYear()}-${si(t.getMonth() + 1, "00")}-${si(
  t.getDate(),
  "00"
)}_${si(t.getHours(), "00")}-${si(t.getMinutes(), "00")}-${si(
  t.getSeconds(),
  "00"
)}`, Wr = (t, e, n = null, r = null) => {
  const i = typeof n == "string" ? t.slice(0, t.size, n) : t.slice(0, t.size, t.type);
  return i.lastModifiedDate = /* @__PURE__ */ new Date(), t._relativePath && (i._relativePath = t._relativePath), Ye(e) || (e = rm()), e && r === null && Ho(e) ? i.name = e : (r = r || LI(i.type), i.name = e + (r ? "." + r : "")), i;
}, PI = () => window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, im = (t, e) => {
  const n = PI();
  if (n) {
    const r = new n();
    return r.append(t), r.getBlob(e);
  }
  return new Blob([t], {
    type: e
  });
}, BI = (t, e) => {
  const n = new ArrayBuffer(t.length), r = new Uint8Array(n);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return im(n, e);
}, sm = (t) => (/^data:(.+);/.exec(t) || [])[1] || null, HI = (t) => t.split(",")[1].replace(/\s/g, ""), VI = (t) => atob(HI(t)), FI = (t) => {
  const e = sm(t), n = VI(t);
  return BI(n, e);
}, zI = (t, e, n) => Wr(FI(t), e, null, n), GI = (t) => {
  if (!/^content-disposition:/i.test(t))
    return null;
  const e = t.split(/filename=|filename\*=.+''/).splice(1).map((n) => n.trim().replace(/^["']|[;"']{0,2}$/g, "")).filter((n) => n.length);
  return e.length ? decodeURI(e[e.length - 1]) : null;
}, UI = (t) => {
  if (/content-length:/i.test(t)) {
    const e = t.match(/[0-9]+/)[0];
    return e ? parseInt(e, 10) : null;
  }
  return null;
}, $I = (t) => /x-content-transfer-id:/i.test(t) && (t.split(":")[1] || "").trim() || null, fc = (t) => {
  const e = {
    source: null,
    name: null,
    size: null
  }, n = t.split(`
`);
  for (let r of n) {
    const i = GI(r);
    if (i) {
      e.name = i;
      continue;
    }
    const s = UI(r);
    if (s) {
      e.size = s;
      continue;
    }
    const o = $I(r);
    if (o) {
      e.source = o;
      continue;
    }
  }
  return e;
}, WI = (t) => {
  const e = {
    source: null,
    complete: !1,
    progress: 0,
    size: null,
    timestamp: null,
    duration: 0,
    request: null
  }, n = () => e.progress, r = () => {
    e.request && e.request.abort && e.request.abort();
  }, i = () => {
    const l = e.source;
    o.fire("init", l), l instanceof File ? o.fire("load", l) : l instanceof Blob ? o.fire("load", Wr(l, l.name)) : ma(l) ? o.fire("load", zI(l)) : s(l);
  }, s = (l) => {
    if (!t) {
      o.fire("error", {
        type: "error",
        body: "Can't load URL",
        code: 400
      });
      return;
    }
    e.timestamp = Date.now(), e.request = t(
      l,
      (a) => {
        e.duration = Date.now() - e.timestamp, e.complete = !0, a instanceof Blob && (a = Wr(a, a.name || zi(l))), o.fire(
          "load",
          // if has received blob, we go with blob, if no response, we return null
          a instanceof Blob ? a : a ? a.body : null
        );
      },
      (a) => {
        o.fire(
          "error",
          typeof a == "string" ? {
            type: "error",
            code: 0,
            body: a
          } : a
        );
      },
      (a, c, d) => {
        if (d && (e.size = d), e.duration = Date.now() - e.timestamp, !a) {
          e.progress = null;
          return;
        }
        e.progress = c / d, o.fire("progress", e.progress);
      },
      () => {
        o.fire("abort");
      },
      (a) => {
        const c = fc(
          typeof a == "string" ? a : a.headers
        );
        o.fire("meta", {
          size: e.size || c.size,
          filename: c.name,
          source: c.source
        });
      }
    );
  }, o = {
    ...Bo(),
    setSource: (l) => e.source = l,
    getProgress: n,
    // file load progress
    abort: r,
    // abort file load
    load: i
    // start load
  };
  return o;
}, Du = (t) => /GET|HEAD/.test(t), Zn = (t, e, n) => {
  const r = {
    onheaders: () => {
    },
    onprogress: () => {
    },
    onload: () => {
    },
    ontimeout: () => {
    },
    onerror: () => {
    },
    onabort: () => {
    },
    abort: () => {
      i = !0, o.abort();
    }
  };
  let i = !1, s = !1;
  n = {
    method: "POST",
    headers: {},
    withCredentials: !1,
    ...n
  }, e = encodeURI(e), Du(n.method) && t && (e = `${e}${encodeURIComponent(typeof t == "string" ? t : JSON.stringify(t))}`);
  const o = new XMLHttpRequest(), l = Du(n.method) ? o : o.upload;
  return l.onprogress = (a) => {
    i || r.onprogress(a.lengthComputable, a.loaded, a.total);
  }, o.onreadystatechange = () => {
    o.readyState < 2 || o.readyState === 4 && o.status === 0 || s || (s = !0, r.onheaders(o));
  }, o.onload = () => {
    o.status >= 200 && o.status < 300 ? r.onload(o) : r.onerror(o);
  }, o.onerror = () => r.onerror(o), o.onabort = () => {
    i = !0, r.onabort();
  }, o.ontimeout = () => r.ontimeout(o), o.open(n.method, e, !0), Xr(n.timeout) && (o.timeout = n.timeout), Object.keys(n.headers).forEach((a) => {
    const c = unescape(encodeURIComponent(n.headers[a]));
    o.setRequestHeader(a, c);
  }), n.responseType && (o.responseType = n.responseType), n.withCredentials && (o.withCredentials = !0), o.send(t), r;
}, ye = (t, e, n, r) => ({
  type: t,
  code: e,
  body: n,
  headers: r
}), er = (t) => (e) => {
  t(ye("error", 0, "Timeout", e.getAllResponseHeaders()));
}, Nu = (t) => /\?/.test(t), Ti = (...t) => {
  let e = "";
  return t.forEach((n) => {
    e += Nu(e) && Nu(n) ? n.replace(/\?/, "&") : n;
  }), e;
}, wl = (t = "", e) => {
  if (typeof e == "function")
    return e;
  if (!e || !Ye(e.url))
    return null;
  const n = e.onload || ((i) => i), r = e.onerror || ((i) => null);
  return (i, s, o, l, a, c) => {
    const d = Zn(i, Ti(t, e.url), {
      ...e,
      responseType: "blob"
    });
    return d.onload = (u) => {
      const f = u.getAllResponseHeaders(), h = fc(f).name || zi(i);
      s(
        ye(
          "load",
          u.status,
          e.method === "HEAD" ? null : Wr(n(u.response), h),
          f
        )
      );
    }, d.onerror = (u) => {
      o(
        ye(
          "error",
          u.status,
          r(u.response) || u.statusText,
          u.getAllResponseHeaders()
        )
      );
    }, d.onheaders = (u) => {
      c(ye("headers", u.status, null, u.getAllResponseHeaders()));
    }, d.ontimeout = er(o), d.onprogress = l, d.onabort = a, d;
  };
}, ft = {
  QUEUED: 0,
  COMPLETE: 1,
  PROCESSING: 2,
  ERROR: 3,
  WAITING: 4
}, qI = (t, e, n, r, i, s, o, l, a, c, d) => {
  const u = [], { chunkTransferId: f, chunkServer: h, chunkSize: p, chunkRetryDelays: m } = d, g = {
    serverId: f,
    aborted: !1
  }, v = e.ondata || ((R) => R), E = e.onload || ((R, G) => G === "HEAD" ? R.getResponseHeader("Upload-Offset") : R.response), b = e.onerror || ((R) => null), y = (R) => {
    const G = new FormData();
    Ae(i) && G.append(n, JSON.stringify(i));
    const I = typeof e.headers == "function" ? e.headers(r, i) : {
      ...e.headers,
      "Upload-Length": r.size
    }, A = {
      ...e,
      headers: I
    }, L = Zn(v(G), Ti(t, e.url), A);
    L.onload = (B) => R(E(B, A.method)), L.onerror = (B) => o(
      ye(
        "error",
        B.status,
        b(B.response) || B.statusText,
        B.getAllResponseHeaders()
      )
    ), L.ontimeout = er(o);
  }, T = (R) => {
    const G = Ti(t, h.url, g.serverId), A = {
      headers: typeof e.headers == "function" ? e.headers(g.serverId) : {
        ...e.headers
      },
      method: "HEAD"
    }, L = Zn(null, G, A);
    L.onload = (B) => R(E(B, A.method)), L.onerror = (B) => o(
      ye(
        "error",
        B.status,
        b(B.response) || B.statusText,
        B.getAllResponseHeaders()
      )
    ), L.ontimeout = er(o);
  }, w = Math.floor(r.size / p);
  for (let R = 0; R <= w; R++) {
    const G = R * p, I = r.slice(G, G + p, "application/offset+octet-stream");
    u[R] = {
      index: R,
      size: I.size,
      offset: G,
      data: I,
      file: r,
      progress: 0,
      retries: [...m],
      status: ft.QUEUED,
      error: null,
      request: null,
      timeout: null
    };
  }
  const C = () => s(g.serverId), S = (R) => R.status === ft.QUEUED || R.status === ft.ERROR, O = (R) => {
    if (g.aborted)
      return;
    if (R = R || u.find(S), !R) {
      u.every(($) => $.status === ft.COMPLETE) && C();
      return;
    }
    R.status = ft.PROCESSING, R.progress = null;
    const G = h.ondata || (($) => $), I = h.onerror || (($) => null), A = Ti(t, h.url, g.serverId), L = typeof h.headers == "function" ? h.headers(R) : {
      ...h.headers,
      "Content-Type": "application/offset+octet-stream",
      "Upload-Offset": R.offset,
      "Upload-Length": r.size,
      "Upload-Name": r.name
    }, B = R.request = Zn(G(R.data), A, {
      ...h,
      headers: L
    });
    B.onload = () => {
      R.status = ft.COMPLETE, R.request = null, D();
    }, B.onprogress = ($, K, ue) => {
      R.progress = $ ? K : null, k();
    }, B.onerror = ($) => {
      R.status = ft.ERROR, R.request = null, R.error = I($.response) || $.statusText, P(R) || o(
        ye(
          "error",
          $.status,
          I($.response) || $.statusText,
          $.getAllResponseHeaders()
        )
      );
    }, B.ontimeout = ($) => {
      R.status = ft.ERROR, R.request = null, P(R) || er(o)($);
    }, B.onabort = () => {
      R.status = ft.QUEUED, R.request = null, a();
    };
  }, P = (R) => R.retries.length === 0 ? !1 : (R.status = ft.WAITING, clearTimeout(R.timeout), R.timeout = setTimeout(() => {
    O(R);
  }, R.retries.shift()), !0), k = () => {
    const R = u.reduce((I, A) => I === null || A.progress === null ? null : I + A.progress, 0);
    if (R === null)
      return l(!1, 0, 0);
    const G = u.reduce((I, A) => I + A.size, 0);
    l(!0, R, G);
  }, D = () => {
    u.filter((G) => G.status === ft.PROCESSING).length >= 1 || O();
  }, F = () => {
    u.forEach((R) => {
      clearTimeout(R.timeout), R.request && R.request.abort();
    });
  };
  return g.serverId ? T((R) => {
    g.aborted || (u.filter((G) => G.offset < R).forEach((G) => {
      G.status = ft.COMPLETE, G.progress = G.size;
    }), D());
  }) : y((R) => {
    g.aborted || (c(R), g.serverId = R, D());
  }), {
    abort: () => {
      g.aborted = !0, F();
    }
  };
}, jI = (t, e, n, r) => (i, s, o, l, a, c, d) => {
  if (!i)
    return;
  const u = r.chunkUploads, f = u && i.size > r.chunkSize, h = u && (f || r.chunkForce);
  if (i instanceof Blob && h)
    return qI(
      t,
      e,
      n,
      i,
      s,
      o,
      l,
      a,
      c,
      d,
      r
    );
  const p = e.ondata || ((T) => T), m = e.onload || ((T) => T), g = e.onerror || ((T) => null), v = typeof e.headers == "function" ? e.headers(i, s) || {} : {
    ...e.headers
  }, E = {
    ...e,
    headers: v
  };
  var b = new FormData();
  Ae(s) && b.append(n, JSON.stringify(s)), (i instanceof Blob ? [{ name: null, file: i }] : i).forEach((T) => {
    b.append(
      n,
      T.file,
      T.name === null ? T.file.name : `${T.name}${T.file.name}`
    );
  });
  const y = Zn(p(b), Ti(t, e.url), E);
  return y.onload = (T) => {
    o(ye("load", T.status, m(T.response), T.getAllResponseHeaders()));
  }, y.onerror = (T) => {
    l(
      ye(
        "error",
        T.status,
        g(T.response) || T.statusText,
        T.getAllResponseHeaders()
      )
    );
  }, y.ontimeout = er(l), y.onprogress = a, y.onabort = c, y;
}, YI = (t = "", e, n, r) => typeof e == "function" ? (...i) => e(n, ...i, r) : !e || !Ye(e.url) ? null : jI(t, e, n, r), oi = (t = "", e) => {
  if (typeof e == "function")
    return e;
  if (!e || !Ye(e.url))
    return (i, s) => s();
  const n = e.onload || ((i) => i), r = e.onerror || ((i) => null);
  return (i, s, o) => {
    const l = Zn(
      i,
      t + e.url,
      e
      // contains method, headers and withCredentials properties
    );
    return l.onload = (a) => {
      s(
        ye(
          "load",
          a.status,
          n(a.response),
          a.getAllResponseHeaders()
        )
      );
    }, l.onerror = (a) => {
      o(
        ye(
          "error",
          a.status,
          r(a.response) || a.statusText,
          a.getAllResponseHeaders()
        )
      );
    }, l.ontimeout = er(o), l;
  };
}, om = (t = 0, e = 1) => t + Math.random() * (e - t), KI = (t, e = 1e3, n = 0, r = 25, i = 250) => {
  let s = null;
  const o = Date.now(), l = () => {
    let a = Date.now() - o, c = om(r, i);
    a + c > e && (c = a + c - e);
    let d = a / e;
    if (d >= 1 || document.hidden) {
      t(1);
      return;
    }
    t(d), s = setTimeout(l, c);
  };
  return e > 0 && l(), {
    clear: () => {
      clearTimeout(s);
    }
  };
}, XI = (t, e) => {
  const n = {
    complete: !1,
    perceivedProgress: 0,
    perceivedPerformanceUpdater: null,
    progress: null,
    timestamp: null,
    perceivedDuration: 0,
    duration: 0,
    request: null,
    response: null
  }, { allowMinimumUploadDuration: r } = e, i = (d, u) => {
    const f = () => {
      n.duration === 0 || n.progress === null || c.fire("progress", c.getProgress());
    }, h = () => {
      n.complete = !0, c.fire("load-perceived", n.response.body);
    };
    c.fire("start"), n.timestamp = Date.now(), n.perceivedPerformanceUpdater = KI(
      (p) => {
        n.perceivedProgress = p, n.perceivedDuration = Date.now() - n.timestamp, f(), n.response && n.perceivedProgress === 1 && !n.complete && h();
      },
      // random delay as in a list of files you start noticing
      // files uploading at the exact same speed
      r ? om(750, 1500) : 0
    ), n.request = t(
      // the file to process
      d,
      // the metadata to send along
      u,
      // callbacks (load, error, progress, abort, transfer)
      // load expects the body to be a server id if
      // you want to make use of revert
      (p) => {
        n.response = Ae(p) ? p : {
          type: "load",
          code: 200,
          body: `${p}`,
          headers: {}
        }, n.duration = Date.now() - n.timestamp, n.progress = 1, c.fire("load", n.response.body), (!r || r && n.perceivedProgress === 1) && h();
      },
      // error is expected to be an object with type, code, body
      (p) => {
        n.perceivedPerformanceUpdater.clear(), c.fire(
          "error",
          Ae(p) ? p : {
            type: "error",
            code: 0,
            body: `${p}`
          }
        );
      },
      // actual processing progress
      (p, m, g) => {
        n.duration = Date.now() - n.timestamp, n.progress = p ? m / g : null, f();
      },
      // abort does not expect a value
      () => {
        n.perceivedPerformanceUpdater.clear(), c.fire("abort", n.response ? n.response.body : null);
      },
      // register the id for this transfer
      (p) => {
        c.fire("transfer", p);
      }
    );
  }, s = () => {
    n.request && (n.perceivedPerformanceUpdater.clear(), n.request.abort && n.request.abort(), n.complete = !0);
  }, o = () => {
    s(), n.complete = !1, n.perceivedProgress = 0, n.progress = 0, n.timestamp = null, n.perceivedDuration = 0, n.duration = 0, n.request = null, n.response = null;
  }, l = r ? () => n.progress ? Math.min(n.progress, n.perceivedProgress) : null : () => n.progress || null, a = r ? () => Math.min(n.duration, n.perceivedDuration) : () => n.duration, c = {
    ...Bo(),
    process: i,
    // start processing file
    abort: s,
    // abort active process request
    getProgress: l,
    getDuration: a,
    reset: o
  };
  return c;
}, lm = (t) => t.substring(0, t.lastIndexOf(".")) || t, JI = (t) => {
  let e = [t.name, t.size, t.type];
  return t instanceof Blob || ma(t) ? e[0] = t.name || rm() : ma(t) ? (e[1] = t.length, e[2] = sm(t)) : Ye(t) && (e[0] = zi(t), e[1] = 0, e[2] = "application/octet-stream"), {
    name: e[0],
    size: e[1],
    type: e[2]
  };
}, qr = (t) => !!(t instanceof File || t instanceof Blob && t.name), am = (t) => {
  if (!Ae(t))
    return t;
  const e = No(t) ? [] : {};
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n];
    e[n] = r && Ae(r) ? am(r) : r;
  }
  return e;
}, QI = (t = null, e = null, n = null) => {
  const r = cc(), i = {
    // is archived
    archived: !1,
    // if is frozen, no longer fires events
    frozen: !1,
    // removed from view
    released: !1,
    // original source
    source: null,
    // file model reference
    file: n,
    // id of file on server
    serverFileReference: e,
    // id of file transfer on server
    transferId: null,
    // is aborted
    processingAborted: !1,
    // current item status
    status: e ? J.PROCESSING_COMPLETE : J.INIT,
    // active processes
    activeLoader: null,
    activeProcessor: null
  };
  let s = null;
  const o = {}, l = (S) => i.status = S, a = (S, ...O) => {
    i.released || i.frozen || w.fire(S, ...O);
  }, c = () => Ho(i.file.name), d = () => i.file.type, u = () => i.file.size, f = () => i.file, h = (S, O, P) => {
    if (i.source = S, w.fireSync("init"), i.file) {
      w.fireSync("load-skip");
      return;
    }
    i.file = JI(S), O.on("init", () => {
      a("load-init");
    }), O.on("meta", (k) => {
      i.file.size = k.size, i.file.filename = k.filename, k.source && (t = Me.LIMBO, i.serverFileReference = k.source, i.status = J.PROCESSING_COMPLETE), a("load-meta");
    }), O.on("progress", (k) => {
      l(J.LOADING), a("load-progress", k);
    }), O.on("error", (k) => {
      l(J.LOAD_ERROR), a("load-request-error", k);
    }), O.on("abort", () => {
      l(J.INIT), a("load-abort");
    }), O.on("load", (k) => {
      i.activeLoader = null;
      const D = (R) => {
        i.file = qr(R) ? R : i.file, t === Me.LIMBO && i.serverFileReference ? l(J.PROCESSING_COMPLETE) : l(J.IDLE), a("load");
      }, F = (R) => {
        i.file = k, a("load-meta"), l(J.LOAD_ERROR), a("load-file-error", R);
      };
      if (i.serverFileReference) {
        D(k);
        return;
      }
      P(k, D, F);
    }), O.setSource(S), i.activeLoader = O, O.load();
  }, p = () => {
    i.activeLoader && i.activeLoader.load();
  }, m = () => {
    if (i.activeLoader) {
      i.activeLoader.abort();
      return;
    }
    l(J.INIT), a("load-abort");
  }, g = (S, O) => {
    if (i.processingAborted) {
      i.processingAborted = !1;
      return;
    }
    if (l(J.PROCESSING), s = null, !(i.file instanceof Blob)) {
      w.on("load", () => {
        g(S, O);
      });
      return;
    }
    S.on("load", (D) => {
      i.transferId = null, i.serverFileReference = D;
    }), S.on("transfer", (D) => {
      i.transferId = D;
    }), S.on("load-perceived", (D) => {
      i.activeProcessor = null, i.transferId = null, i.serverFileReference = D, l(J.PROCESSING_COMPLETE), a("process-complete", D);
    }), S.on("start", () => {
      a("process-start");
    }), S.on("error", (D) => {
      i.activeProcessor = null, l(J.PROCESSING_ERROR), a("process-error", D);
    }), S.on("abort", (D) => {
      i.activeProcessor = null, i.serverFileReference = D, l(J.IDLE), a("process-abort"), s && s();
    }), S.on("progress", (D) => {
      a("process-progress", D);
    });
    const P = (D) => {
      i.archived || S.process(D, { ...o });
    }, k = console.error;
    O(i.file, P, k), i.activeProcessor = S;
  }, v = () => {
    i.processingAborted = !1, l(J.PROCESSING_QUEUED);
  }, E = () => new Promise((S) => {
    if (!i.activeProcessor) {
      i.processingAborted = !0, l(J.IDLE), a("process-abort"), S();
      return;
    }
    s = () => {
      S();
    }, i.activeProcessor.abort();
  }), b = (S, O) => new Promise((P, k) => {
    const D = i.serverFileReference !== null ? i.serverFileReference : i.transferId;
    if (D === null) {
      P();
      return;
    }
    S(
      D,
      () => {
        i.serverFileReference = null, i.transferId = null, P();
      },
      (F) => {
        if (!O) {
          P();
          return;
        }
        l(J.PROCESSING_REVERT_ERROR), a("process-revert-error"), k(F);
      }
    ), l(J.IDLE), a("process-revert");
  }), y = (S, O, P) => {
    const k = S.split("."), D = k[0], F = k.pop();
    let R = o;
    k.forEach((G) => R = R[G]), JSON.stringify(R[F]) !== JSON.stringify(O) && (R[F] = O, a("metadata-update", {
      key: D,
      value: o[D],
      silent: P
    }));
  }, w = {
    id: { get: () => r },
    origin: { get: () => t, set: (S) => t = S },
    serverId: { get: () => i.serverFileReference },
    transferId: { get: () => i.transferId },
    status: { get: () => i.status },
    filename: { get: () => i.file.name },
    filenameWithoutExtension: { get: () => lm(i.file.name) },
    fileExtension: { get: c },
    fileType: { get: d },
    fileSize: { get: u },
    file: { get: f },
    relativePath: { get: () => i.file._relativePath },
    source: { get: () => i.source },
    getMetadata: (S) => am(S ? o[S] : o),
    setMetadata: (S, O, P) => {
      if (Ae(S)) {
        const k = S;
        return Object.keys(k).forEach((D) => {
          y(D, k[D], O);
        }), S;
      }
      return y(S, O, P), O;
    },
    extend: (S, O) => C[S] = O,
    abortLoad: m,
    retryLoad: p,
    requestProcessing: v,
    abortProcessing: E,
    load: h,
    process: g,
    revert: b,
    ...Bo(),
    freeze: () => i.frozen = !0,
    release: () => i.released = !0,
    released: { get: () => i.released },
    archive: () => i.archived = !0,
    archived: { get: () => i.archived }
  }, C = Mn(w);
  return C;
}, ZI = (t, e) => on(e) ? 0 : Ye(e) ? t.findIndex((n) => n.id === e) : -1, Lu = (t, e) => {
  const n = ZI(t, e);
  if (!(n < 0))
    return t[n] || null;
}, Pu = (t, e, n, r, i, s) => {
  const o = Zn(null, t, {
    method: "GET",
    responseType: "blob"
  });
  return o.onload = (l) => {
    const a = l.getAllResponseHeaders(), c = fc(a).name || zi(t);
    e(ye("load", l.status, Wr(l.response, c), a));
  }, o.onerror = (l) => {
    n(ye("error", l.status, l.statusText, l.getAllResponseHeaders()));
  }, o.onheaders = (l) => {
    s(ye("headers", l.status, null, l.getAllResponseHeaders()));
  }, o.ontimeout = er(n), o.onprogress = r, o.onabort = i, o;
}, Bu = (t) => (t.indexOf("//") === 0 && (t = location.protocol + t), t.toLowerCase().replace("blob:", "").replace(/([a-z])?:\/\//, "$1").split("/")[0]), eC = (t) => (t.indexOf(":") > -1 || t.indexOf("//") > -1) && Bu(location.href) !== Bu(t), ps = (t) => (...e) => Wn(t) ? t(...e) : t, tC = (t) => !qr(t.file), Tl = (t, e) => {
  clearTimeout(e.listUpdateTimeout), e.listUpdateTimeout = setTimeout(() => {
    t("DID_UPDATE_ITEMS", { items: Ot(e.items) });
  }, 0);
}, Hu = (t, ...e) => new Promise((n) => {
  if (!t)
    return n(!0);
  const r = t(...e);
  if (r == null)
    return n(!0);
  if (typeof r == "boolean")
    return n(r);
  typeof r.then == "function" && r.then(n);
}), Sl = (t, e) => {
  t.items.sort((n, r) => e(Xe(n), Xe(r)));
}, ht = (t, e) => ({
  query: n,
  success: r = () => {
  },
  failure: i = () => {
  },
  ...s
} = {}) => {
  const o = qn(t.items, n);
  if (!o) {
    i({
      error: ye("error", 0, "Item not found"),
      file: null
    });
    return;
  }
  e(o, r, i, s || {});
}, nC = (t, e, n) => ({
  /**
   * Aborts all ongoing processes
   */
  ABORT_ALL: () => {
    Ot(n.items).forEach((r) => {
      r.freeze(), r.abortLoad(), r.abortProcessing();
    });
  },
  /**
   * Sets initial files
   */
  DID_SET_FILES: ({ value: r = [] }) => {
    const i = r.map((o) => ({
      source: o.source ? o.source : o,
      options: o.options
    }));
    let s = Ot(n.items);
    s.forEach((o) => {
      i.find((l) => l.source === o.source || l.source === o.file) || t("REMOVE_ITEM", { query: o, remove: !1 });
    }), s = Ot(n.items), i.forEach((o, l) => {
      s.find((a) => a.source === o.source || a.file === o.source) || t("ADD_ITEM", {
        ...o,
        interactionMethod: Et.NONE,
        index: l
      });
    });
  },
  DID_UPDATE_ITEM_METADATA: ({ id: r, action: i, change: s }) => {
    s.silent || (clearTimeout(n.itemUpdateTimeout), n.itemUpdateTimeout = setTimeout(() => {
      const o = Lu(n.items, r);
      if (!e("IS_ASYNC")) {
        It("SHOULD_PREPARE_OUTPUT", !1, {
          item: o,
          query: e,
          action: i,
          change: s
        }).then((d) => {
          const u = e("GET_BEFORE_PREPARE_FILE");
          u && (d = u(o, d)), d && t(
            "REQUEST_PREPARE_OUTPUT",
            {
              query: r,
              item: o,
              success: (f) => {
                t("DID_PREPARE_OUTPUT", { id: r, file: f });
              }
            },
            !0
          );
        });
        return;
      }
      o.origin === Me.LOCAL && t("DID_LOAD_ITEM", {
        id: o.id,
        error: null,
        serverFileReference: o.source
      });
      const l = () => {
        setTimeout(() => {
          t("REQUEST_ITEM_PROCESSING", { query: r });
        }, 32);
      }, a = (d) => {
        o.revert(
          oi(n.options.server.url, n.options.server.revert),
          e("GET_FORCE_REVERT")
        ).then(d ? l : () => {
        }).catch(() => {
        });
      }, c = (d) => {
        o.abortProcessing().then(d ? l : () => {
        });
      };
      if (o.status === J.PROCESSING_COMPLETE)
        return a(n.options.instantUpload);
      if (o.status === J.PROCESSING)
        return c(n.options.instantUpload);
      n.options.instantUpload && l();
    }, 0));
  },
  MOVE_ITEM: ({ query: r, index: i }) => {
    const s = qn(n.items, r);
    if (!s)
      return;
    const o = n.items.indexOf(s);
    i = nm(i, 0, n.items.length - 1), o !== i && n.items.splice(i, 0, n.items.splice(o, 1)[0]);
  },
  SORT: ({ compare: r }) => {
    Sl(n, r), t("DID_SORT_ITEMS", {
      items: e("GET_ACTIVE_ITEMS")
    });
  },
  ADD_ITEMS: ({ items: r, index: i, interactionMethod: s, success: o = () => {
  }, failure: l = () => {
  } }) => {
    let a = i;
    if (i === -1 || typeof i > "u") {
      const h = e("GET_ITEM_INSERT_LOCATION"), p = e("GET_TOTAL_ITEMS");
      a = h === "before" ? 0 : p;
    }
    const c = e("GET_IGNORED_FILES"), d = (h) => qr(h) ? !c.includes(h.name.toLowerCase()) : !on(h), f = r.filter(d).map(
      (h) => new Promise((p, m) => {
        t("ADD_ITEM", {
          interactionMethod: s,
          source: h.source || h,
          success: p,
          failure: m,
          index: a++,
          options: h.options || {}
        });
      })
    );
    Promise.all(f).then(o).catch(l);
  },
  /**
   * @param source
   * @param index
   * @param interactionMethod
   */
  ADD_ITEM: ({
    source: r,
    index: i = -1,
    interactionMethod: s,
    success: o = () => {
    },
    failure: l = () => {
    },
    options: a = {}
  }) => {
    if (on(r)) {
      l({
        error: ye("error", 0, "No source"),
        file: null
      });
      return;
    }
    if (qr(r) && n.options.ignoredFiles.includes(r.name.toLowerCase()))
      return;
    if (!kI(n)) {
      if (n.options.allowMultiple || !n.options.allowMultiple && !n.options.allowReplace) {
        const E = ye("warning", 0, "Max files");
        t("DID_THROW_MAX_FILES", {
          source: r,
          error: E
        }), l({ error: E, file: null });
        return;
      }
      const v = Ot(n.items)[0];
      if (v.status === J.PROCESSING_COMPLETE || v.status === J.PROCESSING_REVERT_ERROR) {
        const E = e("GET_FORCE_REVERT");
        if (v.revert(
          oi(n.options.server.url, n.options.server.revert),
          E
        ).then(() => {
          E && t("ADD_ITEM", {
            source: r,
            index: i,
            interactionMethod: s,
            success: o,
            failure: l,
            options: a
          });
        }).catch(() => {
        }), E)
          return;
      }
      t("REMOVE_ITEM", { query: v.id });
    }
    const c = a.type === "local" ? Me.LOCAL : a.type === "limbo" ? Me.LIMBO : Me.INPUT, d = QI(
      // where did this file come from
      c,
      // an input file never has a server file reference
      c === Me.INPUT ? null : r,
      // file mock data, if defined
      a.file
    );
    Object.keys(a.metadata || {}).forEach((v) => {
      d.setMetadata(v, a.metadata[v]);
    }), dr("DID_CREATE_ITEM", d, { query: e, dispatch: t });
    const u = e("GET_ITEM_INSERT_LOCATION");
    n.options.itemInsertLocationFreedom || (i = u === "before" ? -1 : n.items.length), NI(n.items, d, i), Wn(u) && r && Sl(n, u);
    const f = d.id;
    d.on("init", () => {
      t("DID_INIT_ITEM", { id: f });
    }), d.on("load-init", () => {
      t("DID_START_ITEM_LOAD", { id: f });
    }), d.on("load-meta", () => {
      t("DID_UPDATE_ITEM_META", { id: f });
    }), d.on("load-progress", (v) => {
      t("DID_UPDATE_ITEM_LOAD_PROGRESS", { id: f, progress: v });
    }), d.on("load-request-error", (v) => {
      const E = ps(n.options.labelFileLoadError)(v);
      if (v.code >= 400 && v.code < 500) {
        t("DID_THROW_ITEM_INVALID", {
          id: f,
          error: v,
          status: {
            main: E,
            sub: `${v.code} (${v.body})`
          }
        }), l({ error: v, file: Xe(d) });
        return;
      }
      t("DID_THROW_ITEM_LOAD_ERROR", {
        id: f,
        error: v,
        status: {
          main: E,
          sub: n.options.labelTapToRetry
        }
      });
    }), d.on("load-file-error", (v) => {
      t("DID_THROW_ITEM_INVALID", {
        id: f,
        error: v.status,
        status: v.status
      }), l({ error: v.status, file: Xe(d) });
    }), d.on("load-abort", () => {
      t("REMOVE_ITEM", { query: f });
    }), d.on("load-skip", () => {
      t("COMPLETE_LOAD_ITEM", {
        query: f,
        item: d,
        data: {
          source: r,
          success: o
        }
      });
    }), d.on("load", () => {
      const v = (E) => {
        if (!E) {
          t("REMOVE_ITEM", {
            query: f
          });
          return;
        }
        d.on("metadata-update", (b) => {
          t("DID_UPDATE_ITEM_METADATA", { id: f, change: b });
        }), It("SHOULD_PREPARE_OUTPUT", !1, { item: d, query: e }).then(
          (b) => {
            const y = e("GET_BEFORE_PREPARE_FILE");
            y && (b = y(d, b));
            const T = () => {
              t("COMPLETE_LOAD_ITEM", {
                query: f,
                item: d,
                data: {
                  source: r,
                  success: o
                }
              }), Tl(t, n);
            };
            if (b) {
              t(
                "REQUEST_PREPARE_OUTPUT",
                {
                  query: f,
                  item: d,
                  success: (w) => {
                    t("DID_PREPARE_OUTPUT", { id: f, file: w }), T();
                  }
                },
                !0
              );
              return;
            }
            T();
          }
        );
      };
      It("DID_LOAD_ITEM", d, { query: e, dispatch: t }).then(() => {
        Hu(e("GET_BEFORE_ADD_FILE"), Xe(d)).then(
          v
        );
      }).catch((E) => {
        if (!E || !E.error || !E.status)
          return v(!1);
        t("DID_THROW_ITEM_INVALID", {
          id: f,
          error: E.error,
          status: E.status
        });
      });
    }), d.on("process-start", () => {
      t("DID_START_ITEM_PROCESSING", { id: f });
    }), d.on("process-progress", (v) => {
      t("DID_UPDATE_ITEM_PROCESS_PROGRESS", { id: f, progress: v });
    }), d.on("process-error", (v) => {
      t("DID_THROW_ITEM_PROCESSING_ERROR", {
        id: f,
        error: v,
        status: {
          main: ps(n.options.labelFileProcessingError)(v),
          sub: n.options.labelTapToRetry
        }
      });
    }), d.on("process-revert-error", (v) => {
      t("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
        id: f,
        error: v,
        status: {
          main: ps(n.options.labelFileProcessingRevertError)(v),
          sub: n.options.labelTapToRetry
        }
      });
    }), d.on("process-complete", (v) => {
      t("DID_COMPLETE_ITEM_PROCESSING", {
        id: f,
        error: null,
        serverFileReference: v
      }), t("DID_DEFINE_VALUE", { id: f, value: v });
    }), d.on("process-abort", () => {
      t("DID_ABORT_ITEM_PROCESSING", { id: f });
    }), d.on("process-revert", () => {
      t("DID_REVERT_ITEM_PROCESSING", { id: f }), t("DID_DEFINE_VALUE", { id: f, value: null });
    }), t("DID_ADD_ITEM", { id: f, index: i, interactionMethod: s }), Tl(t, n);
    const { url: h, load: p, restore: m, fetch: g } = n.options.server || {};
    d.load(
      r,
      // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
      WI(
        c === Me.INPUT ? (
          // input, if is remote, see if should use custom fetch, else use default fetchBlob
          Ye(r) && eC(r) && g ? wl(h, g) : Pu
        ) : (
          // limbo or local
          c === Me.LIMBO ? wl(h, m) : wl(h, p)
        )
        // local
      ),
      // called when the file is loaded so it can be piped through the filters
      (v, E, b) => {
        It("LOAD_FILE", v, { query: e }).then(E).catch(b);
      }
    );
  },
  REQUEST_PREPARE_OUTPUT: ({ item: r, success: i, failure: s = () => {
  } }) => {
    const o = {
      error: ye("error", 0, "Item not found"),
      file: null
    };
    if (r.archived)
      return s(o);
    It("PREPARE_OUTPUT", r.file, { query: e, item: r }).then((l) => {
      It("COMPLETE_PREPARE_OUTPUT", l, { query: e, item: r }).then((a) => {
        if (r.archived)
          return s(o);
        i(a);
      });
    });
  },
  COMPLETE_LOAD_ITEM: ({ item: r, data: i }) => {
    const { success: s, source: o } = i, l = e("GET_ITEM_INSERT_LOCATION");
    if (Wn(l) && o && Sl(n, l), t("DID_LOAD_ITEM", {
      id: r.id,
      error: null,
      serverFileReference: r.origin === Me.INPUT ? null : o
    }), s(Xe(r)), r.origin === Me.LOCAL) {
      t("DID_LOAD_LOCAL_ITEM", { id: r.id });
      return;
    }
    if (r.origin === Me.LIMBO) {
      t("DID_COMPLETE_ITEM_PROCESSING", {
        id: r.id,
        error: null,
        serverFileReference: o
      }), t("DID_DEFINE_VALUE", {
        id: r.id,
        value: r.serverId || o
      });
      return;
    }
    e("IS_ASYNC") && n.options.instantUpload && t("REQUEST_ITEM_PROCESSING", { query: r.id });
  },
  RETRY_ITEM_LOAD: ht(n, (r) => {
    r.retryLoad();
  }),
  REQUEST_ITEM_PREPARE: ht(n, (r, i, s) => {
    t(
      "REQUEST_PREPARE_OUTPUT",
      {
        query: r.id,
        item: r,
        success: (o) => {
          t("DID_PREPARE_OUTPUT", { id: r.id, file: o }), i({
            file: r,
            output: o
          });
        },
        failure: s
      },
      !0
    );
  }),
  REQUEST_ITEM_PROCESSING: ht(n, (r, i, s) => {
    if (!// waiting for something
    (r.status === J.IDLE || // processing went wrong earlier
    r.status === J.PROCESSING_ERROR)) {
      const l = () => t("REQUEST_ITEM_PROCESSING", { query: r, success: i, failure: s }), a = () => document.hidden ? l() : setTimeout(l, 32);
      r.status === J.PROCESSING_COMPLETE || r.status === J.PROCESSING_REVERT_ERROR ? r.revert(
        oi(n.options.server.url, n.options.server.revert),
        e("GET_FORCE_REVERT")
      ).then(a).catch(() => {
      }) : r.status === J.PROCESSING && r.abortProcessing().then(a);
      return;
    }
    r.status !== J.PROCESSING_QUEUED && (r.requestProcessing(), t("DID_REQUEST_ITEM_PROCESSING", { id: r.id }), t("PROCESS_ITEM", { query: r, success: i, failure: s }, !0));
  }),
  PROCESS_ITEM: ht(n, (r, i, s) => {
    const o = e("GET_MAX_PARALLEL_UPLOADS");
    if (e("GET_ITEMS_BY_STATUS", J.PROCESSING).length === o) {
      n.processingQueue.push({
        id: r.id,
        success: i,
        failure: s
      });
      return;
    }
    if (r.status === J.PROCESSING)
      return;
    const a = () => {
      const d = n.processingQueue.shift();
      if (!d)
        return;
      const { id: u, success: f, failure: h } = d, p = qn(n.items, u);
      if (!p || p.archived) {
        a();
        return;
      }
      t("PROCESS_ITEM", { query: u, success: f, failure: h }, !0);
    };
    r.onOnce("process-complete", () => {
      i(Xe(r)), a();
      const d = n.options.server;
      if (n.options.instantUpload && r.origin === Me.LOCAL && Wn(d.remove)) {
        const h = () => {
        };
        r.origin = Me.LIMBO, n.options.server.remove(r.source, h, h);
      }
      e("GET_ITEMS_BY_STATUS", J.PROCESSING_COMPLETE).length === n.items.length && t("DID_COMPLETE_ITEM_PROCESSING_ALL");
    }), r.onOnce("process-error", (d) => {
      s({ error: d, file: Xe(r) }), a();
    });
    const c = n.options;
    r.process(
      XI(
        YI(c.server.url, c.server.process, c.name, {
          chunkTransferId: r.transferId,
          chunkServer: c.server.patch,
          chunkUploads: c.chunkUploads,
          chunkForce: c.chunkForce,
          chunkSize: c.chunkSize,
          chunkRetryDelays: c.chunkRetryDelays
        }),
        {
          allowMinimumUploadDuration: e("GET_ALLOW_MINIMUM_UPLOAD_DURATION")
        }
      ),
      // called when the file is about to be processed so it can be piped through the transform filters
      (d, u, f) => {
        It("PREPARE_OUTPUT", d, { query: e, item: r }).then((h) => {
          t("DID_PREPARE_OUTPUT", { id: r.id, file: h }), u(h);
        }).catch(f);
      }
    );
  }),
  RETRY_ITEM_PROCESSING: ht(n, (r) => {
    t("REQUEST_ITEM_PROCESSING", { query: r });
  }),
  REQUEST_REMOVE_ITEM: ht(n, (r) => {
    Hu(e("GET_BEFORE_REMOVE_FILE"), Xe(r)).then((i) => {
      i && t("REMOVE_ITEM", { query: r });
    });
  }),
  RELEASE_ITEM: ht(n, (r) => {
    r.release();
  }),
  REMOVE_ITEM: ht(n, (r, i, s, o) => {
    const l = () => {
      const c = r.id;
      Lu(n.items, c).archive(), t("DID_REMOVE_ITEM", { error: null, id: c, item: r }), Tl(t, n), i(Xe(r));
    }, a = n.options.server;
    r.origin === Me.LOCAL && a && Wn(a.remove) && o.remove !== !1 ? (t("DID_START_ITEM_REMOVE", { id: r.id }), a.remove(
      r.source,
      () => l(),
      (c) => {
        t("DID_THROW_ITEM_REMOVE_ERROR", {
          id: r.id,
          error: ye("error", 0, c, null),
          status: {
            main: ps(n.options.labelFileRemoveError)(c),
            sub: n.options.labelTapToRetry
          }
        });
      }
    )) : ((o.revert && r.origin !== Me.LOCAL && r.serverId !== null || // if chunked uploads are enabled and we're uploading in chunks for this specific file
    // or if the file isn't big enough for chunked uploads but chunkForce is set then call
    // revert before removing from the view...
    n.options.chunkUploads && r.file.size > n.options.chunkSize || n.options.chunkUploads && n.options.chunkForce) && r.revert(
      oi(n.options.server.url, n.options.server.revert),
      e("GET_FORCE_REVERT")
    ), l());
  }),
  ABORT_ITEM_LOAD: ht(n, (r) => {
    r.abortLoad();
  }),
  ABORT_ITEM_PROCESSING: ht(n, (r) => {
    if (r.serverId) {
      t("REVERT_ITEM_PROCESSING", { id: r.id });
      return;
    }
    r.abortProcessing().then(() => {
      n.options.instantUpload && t("REMOVE_ITEM", { query: r.id });
    });
  }),
  REQUEST_REVERT_ITEM_PROCESSING: ht(n, (r) => {
    if (!n.options.instantUpload) {
      t("REVERT_ITEM_PROCESSING", { query: r });
      return;
    }
    const i = (l) => {
      l && t("REVERT_ITEM_PROCESSING", { query: r });
    }, s = e("GET_BEFORE_REMOVE_FILE");
    if (!s)
      return i(!0);
    const o = s(Xe(r));
    if (o == null)
      return i(!0);
    if (typeof o == "boolean")
      return i(o);
    typeof o.then == "function" && o.then(i);
  }),
  REVERT_ITEM_PROCESSING: ht(n, (r) => {
    r.revert(
      oi(n.options.server.url, n.options.server.revert),
      e("GET_FORCE_REVERT")
    ).then(() => {
      (n.options.instantUpload || tC(r)) && t("REMOVE_ITEM", { query: r.id });
    }).catch(() => {
    });
  }),
  SET_OPTIONS: ({ options: r }) => {
    const i = Object.keys(r), s = rC.filter((l) => i.includes(l));
    [
      // add prioritized first if passed to options, else remove
      ...s,
      // prevent duplicate keys
      ...Object.keys(r).filter((l) => !s.includes(l))
    ].forEach((l) => {
      t(`SET_${Po(l, "_").toUpperCase()}`, {
        value: r[l]
      });
    });
  }
}), rC = [
  "server"
  // must be processed before "files"
], hc = (t) => t, ln = (t) => document.createElement(t), Ee = (t, e) => {
  let n = t.childNodes[0];
  n ? e !== n.nodeValue && (n.nodeValue = e) : (n = document.createTextNode(e), t.appendChild(n));
}, Vu = (t, e, n, r) => {
  const i = (r % 360 - 90) * Math.PI / 180;
  return {
    x: t + n * Math.cos(i),
    y: e + n * Math.sin(i)
  };
}, iC = (t, e, n, r, i, s) => {
  const o = Vu(t, e, n, i), l = Vu(t, e, n, r);
  return ["M", o.x, o.y, "A", n, n, 0, s, 0, l.x, l.y].join(" ");
}, sC = (t, e, n, r, i) => {
  let s = 1;
  return i > r && i - r <= 0.5 && (s = 0), r > i && r - i >= 0.5 && (s = 0), iC(
    t,
    e,
    n,
    Math.min(0.9999, r) * 360,
    Math.min(0.9999, i) * 360,
    s
  );
}, oC = ({ root: t, props: e }) => {
  e.spin = !1, e.progress = 0, e.opacity = 0;
  const n = uo("svg");
  t.ref.path = uo("path", {
    "stroke-width": 2,
    "stroke-linecap": "round"
  }), n.appendChild(t.ref.path), t.ref.svg = n, t.appendChild(n);
}, lC = ({ root: t, props: e }) => {
  if (e.opacity === 0)
    return;
  e.align && (t.element.dataset.align = e.align);
  const n = parseInt(ve(t.ref.path, "stroke-width"), 10), r = t.rect.element.width * 0.5;
  let i = 0, s = 0;
  e.spin ? (i = 0, s = 0.5) : (i = 0, s = e.progress);
  const o = sC(r, r, r - n, i, s);
  ve(t.ref.path, "d", o), ve(t.ref.path, "stroke-opacity", e.spin || e.progress > 0 ? 1 : 0);
}, Fu = we({
  tag: "div",
  name: "progress-indicator",
  ignoreRectUpdate: !0,
  ignoreRect: !0,
  create: oC,
  write: lC,
  mixins: {
    apis: ["progress", "spin", "align"],
    styles: ["opacity"],
    animations: {
      opacity: { type: "tween", duration: 500 },
      progress: {
        type: "spring",
        stiffness: 0.95,
        damping: 0.65,
        mass: 10
      }
    }
  }
}), aC = ({ root: t, props: e }) => {
  t.element.innerHTML = (e.icon || "") + `<span>${e.label}</span>`, e.isDisabled = !1;
}, cC = ({ root: t, props: e }) => {
  const { isDisabled: n } = e, r = t.query("GET_DISABLED") || e.opacity === 0;
  r && !n ? (e.isDisabled = !0, ve(t.element, "disabled", "disabled")) : !r && n && (e.isDisabled = !1, t.element.removeAttribute("disabled"));
}, cm = we({
  tag: "button",
  attributes: {
    type: "button"
  },
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  name: "file-action-button",
  mixins: {
    apis: ["label"],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    },
    listeners: !0
  },
  create: aC,
  write: cC
}), dm = (t, e = ".", n = 1e3, r = {}) => {
  const {
    labelBytes: i = "bytes",
    labelKilobytes: s = "KB",
    labelMegabytes: o = "MB",
    labelGigabytes: l = "GB"
  } = r;
  t = Math.round(Math.abs(t));
  const a = n, c = n * n, d = n * n * n;
  return t < a ? `${t} ${i}` : t < c ? `${Math.floor(t / a)} ${s}` : t < d ? `${zu(t / c, 1, e)} ${o}` : `${zu(t / d, 2, e)} ${l}`;
}, zu = (t, e, n) => t.toFixed(e).split(".").filter((r) => r !== "0").join(n), dC = ({ root: t, props: e }) => {
  const n = ln("span");
  n.className = "filepond--file-info-main", ve(n, "aria-hidden", "true"), t.appendChild(n), t.ref.fileName = n;
  const r = ln("span");
  r.className = "filepond--file-info-sub", t.appendChild(r), t.ref.fileSize = r, Ee(r, t.query("GET_LABEL_FILE_WAITING_FOR_SIZE")), Ee(n, hc(t.query("GET_ITEM_NAME", e.id)));
}, ga = ({ root: t, props: e }) => {
  Ee(
    t.ref.fileSize,
    dm(
      t.query("GET_ITEM_SIZE", e.id),
      ".",
      t.query("GET_FILE_SIZE_BASE"),
      t.query("GET_FILE_SIZE_LABELS", t.query)
    )
  ), Ee(t.ref.fileName, hc(t.query("GET_ITEM_NAME", e.id)));
}, Gu = ({ root: t, props: e }) => {
  if (Xr(t.query("GET_ITEM_SIZE", e.id))) {
    ga({ root: t, props: e });
    return;
  }
  Ee(t.ref.fileSize, t.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
}, uC = we({
  name: "file-info",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: Ke({
    DID_LOAD_ITEM: ga,
    DID_UPDATE_ITEM_META: ga,
    DID_THROW_ITEM_LOAD_ERROR: Gu,
    DID_THROW_ITEM_INVALID: Gu
  }),
  didCreateView: (t) => {
    dr("CREATE_VIEW", { ...t, view: t });
  },
  create: dC,
  mixins: {
    styles: ["translateX", "translateY"],
    animations: {
      translateX: "spring",
      translateY: "spring"
    }
  }
}), um = (t) => Math.round(t * 100), fC = ({ root: t }) => {
  const e = ln("span");
  e.className = "filepond--file-status-main", t.appendChild(e), t.ref.main = e;
  const n = ln("span");
  n.className = "filepond--file-status-sub", t.appendChild(n), t.ref.sub = n, fm({ root: t, action: { progress: null } });
}, fm = ({ root: t, action: e }) => {
  const n = e.progress === null ? t.query("GET_LABEL_FILE_LOADING") : `${t.query("GET_LABEL_FILE_LOADING")} ${um(e.progress)}%`;
  Ee(t.ref.main, n), Ee(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
}, hC = ({ root: t, action: e }) => {
  const n = e.progress === null ? t.query("GET_LABEL_FILE_PROCESSING") : `${t.query("GET_LABEL_FILE_PROCESSING")} ${um(e.progress)}%`;
  Ee(t.ref.main, n), Ee(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
}, pC = ({ root: t }) => {
  Ee(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING")), Ee(t.ref.sub, t.query("GET_LABEL_TAP_TO_CANCEL"));
}, mC = ({ root: t }) => {
  Ee(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING_ABORTED")), Ee(t.ref.sub, t.query("GET_LABEL_TAP_TO_RETRY"));
}, gC = ({ root: t }) => {
  Ee(t.ref.main, t.query("GET_LABEL_FILE_PROCESSING_COMPLETE")), Ee(t.ref.sub, t.query("GET_LABEL_TAP_TO_UNDO"));
}, Uu = ({ root: t }) => {
  Ee(t.ref.main, ""), Ee(t.ref.sub, "");
}, li = ({ root: t, action: e }) => {
  Ee(t.ref.main, e.status.main), Ee(t.ref.sub, e.status.sub);
}, yC = we({
  name: "file-status",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: Ke({
    DID_LOAD_ITEM: Uu,
    DID_REVERT_ITEM_PROCESSING: Uu,
    DID_REQUEST_ITEM_PROCESSING: pC,
    DID_ABORT_ITEM_PROCESSING: mC,
    DID_COMPLETE_ITEM_PROCESSING: gC,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: hC,
    DID_UPDATE_ITEM_LOAD_PROGRESS: fm,
    DID_THROW_ITEM_LOAD_ERROR: li,
    DID_THROW_ITEM_INVALID: li,
    DID_THROW_ITEM_PROCESSING_ERROR: li,
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: li,
    DID_THROW_ITEM_REMOVE_ERROR: li
  }),
  didCreateView: (t) => {
    dr("CREATE_VIEW", { ...t, view: t });
  },
  create: fC,
  mixins: {
    styles: ["translateX", "translateY", "opacity"],
    animations: {
      opacity: { type: "tween", duration: 250 },
      translateX: "spring",
      translateY: "spring"
    }
  }
}), ya = {
  AbortItemLoad: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
    action: "ABORT_ITEM_LOAD",
    className: "filepond--action-abort-item-load",
    align: "LOAD_INDICATOR_POSITION"
    // right
  },
  RetryItemLoad: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
    action: "RETRY_ITEM_LOAD",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-load",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RemoveItem: {
    label: "GET_LABEL_BUTTON_REMOVE_ITEM",
    action: "REQUEST_REMOVE_ITEM",
    icon: "GET_ICON_REMOVE",
    className: "filepond--action-remove-item",
    align: "BUTTON_REMOVE_ITEM_POSITION"
    // left
  },
  ProcessItem: {
    label: "GET_LABEL_BUTTON_PROCESS_ITEM",
    action: "REQUEST_ITEM_PROCESSING",
    icon: "GET_ICON_PROCESS",
    className: "filepond--action-process-item",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  AbortItemProcessing: {
    label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
    action: "ABORT_ITEM_PROCESSING",
    className: "filepond--action-abort-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RetryItemProcessing: {
    label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
    action: "RETRY_ITEM_PROCESSING",
    icon: "GET_ICON_RETRY",
    className: "filepond--action-retry-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  },
  RevertItemProcessing: {
    label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
    action: "REQUEST_REVERT_ITEM_PROCESSING",
    icon: "GET_ICON_UNDO",
    className: "filepond--action-revert-item-processing",
    align: "BUTTON_PROCESS_ITEM_POSITION"
    // right
  }
}, Ea = [];
pe(ya, (t) => {
  Ea.push(t);
});
const ot = (t) => {
  if (va(t) === "right")
    return 0;
  const e = t.ref.buttonRemoveItem.rect.element;
  return e.hidden ? null : e.width + e.left;
}, EC = (t) => t.ref.buttonAbortItemLoad.rect.element.width, ms = (t) => Math.floor(t.ref.buttonRemoveItem.rect.element.height / 4), vC = (t) => Math.floor(t.ref.buttonRemoveItem.rect.element.left / 2), bC = (t) => t.query("GET_STYLE_LOAD_INDICATOR_POSITION"), wC = (t) => t.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"), va = (t) => t.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"), TC = {
  buttonAbortItemLoad: { opacity: 0 },
  buttonRetryItemLoad: { opacity: 0 },
  buttonRemoveItem: { opacity: 0 },
  buttonProcessItem: { opacity: 0 },
  buttonAbortItemProcessing: { opacity: 0 },
  buttonRetryItemProcessing: { opacity: 0 },
  buttonRevertItemProcessing: { opacity: 0 },
  loadProgressIndicator: { opacity: 0, align: bC },
  processProgressIndicator: { opacity: 0, align: wC },
  processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
  info: { translateX: 0, translateY: 0, opacity: 0 },
  status: { translateX: 0, translateY: 0, opacity: 0 }
}, $u = {
  buttonRemoveItem: { opacity: 1 },
  buttonProcessItem: { opacity: 1 },
  info: { translateX: ot },
  status: { translateX: ot }
}, Il = {
  buttonAbortItemProcessing: { opacity: 1 },
  processProgressIndicator: { opacity: 1 },
  status: { opacity: 1 }
}, Or = {
  DID_THROW_ITEM_INVALID: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ot },
    status: { translateX: ot, opacity: 1 }
  },
  DID_START_ITEM_LOAD: {
    buttonAbortItemLoad: { opacity: 1 },
    loadProgressIndicator: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_LOAD_ERROR: {
    buttonRetryItemLoad: { opacity: 1 },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ot },
    status: { opacity: 1 }
  },
  DID_START_ITEM_REMOVE: {
    processProgressIndicator: { opacity: 1, align: va },
    info: { translateX: ot },
    status: { opacity: 0 }
  },
  DID_THROW_ITEM_REMOVE_ERROR: {
    processProgressIndicator: { opacity: 0, align: va },
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ot },
    status: { opacity: 1, translateX: ot }
  },
  DID_LOAD_ITEM: $u,
  DID_LOAD_LOCAL_ITEM: {
    buttonRemoveItem: { opacity: 1 },
    info: { translateX: ot },
    status: { translateX: ot }
  },
  DID_START_ITEM_PROCESSING: Il,
  DID_REQUEST_ITEM_PROCESSING: Il,
  DID_UPDATE_ITEM_PROCESS_PROGRESS: Il,
  DID_COMPLETE_ITEM_PROCESSING: {
    buttonRevertItemProcessing: { opacity: 1 },
    info: { opacity: 1 },
    status: { opacity: 1 }
  },
  DID_THROW_ITEM_PROCESSING_ERROR: {
    buttonRemoveItem: { opacity: 1 },
    buttonRetryItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { translateX: ot }
  },
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
    buttonRevertItemProcessing: { opacity: 1 },
    status: { opacity: 1 },
    info: { opacity: 1 }
  },
  DID_ABORT_ITEM_PROCESSING: {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: ot },
    status: { opacity: 1 }
  },
  DID_REVERT_ITEM_PROCESSING: $u
}, SC = we({
  create: ({ root: t }) => {
    t.element.innerHTML = t.query("GET_ICON_DONE");
  },
  name: "processing-complete-indicator",
  ignoreRect: !0,
  mixins: {
    styles: ["scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
}), IC = ({ root: t, props: e }) => {
  const n = Object.keys(ya).reduce((p, m) => (p[m] = { ...ya[m] }, p), {}), { id: r } = e, i = t.query("GET_ALLOW_REVERT"), s = t.query("GET_ALLOW_REMOVE"), o = t.query("GET_ALLOW_PROCESS"), l = t.query("GET_INSTANT_UPLOAD"), a = t.query("IS_ASYNC"), c = t.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
  let d;
  a ? o && !i ? d = (p) => !/RevertItemProcessing/.test(p) : !o && i ? d = (p) => !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(p) : !o && !i && (d = (p) => !/Process/.test(p)) : d = (p) => !/Process/.test(p);
  const u = d ? Ea.filter(d) : Ea.concat();
  if (l && i && (n.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM", n.RevertItemProcessing.icon = "GET_ICON_REMOVE"), a && !i) {
    const p = Or.DID_COMPLETE_ITEM_PROCESSING;
    p.info.translateX = vC, p.info.translateY = ms, p.status.translateY = ms, p.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  if (a && !o && ([
    "DID_START_ITEM_PROCESSING",
    "DID_REQUEST_ITEM_PROCESSING",
    "DID_UPDATE_ITEM_PROCESS_PROGRESS",
    "DID_THROW_ITEM_PROCESSING_ERROR"
  ].forEach((p) => {
    Or[p].status.translateY = ms;
  }), Or.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = EC), c && i) {
    n.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
    const p = Or.DID_COMPLETE_ITEM_PROCESSING;
    p.info.translateX = ot, p.status.translateY = ms, p.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
  }
  s || (n.RemoveItem.disabled = !0), pe(n, (p, m) => {
    const g = t.createChildView(cm, {
      label: t.query(m.label),
      icon: t.query(m.icon),
      opacity: 0
    });
    u.includes(p) && t.appendChildView(g), m.disabled && (g.element.setAttribute("disabled", "disabled"), g.element.setAttribute("hidden", "hidden")), g.element.dataset.align = t.query(`GET_STYLE_${m.align}`), g.element.classList.add(m.className), g.on("click", (v) => {
      v.stopPropagation(), !m.disabled && t.dispatch(m.action, { query: r });
    }), t.ref[`button${p}`] = g;
  }), t.ref.processingCompleteIndicator = t.appendChildView(
    t.createChildView(SC)
  ), t.ref.processingCompleteIndicator.element.dataset.align = t.query(
    "GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"
  ), t.ref.info = t.appendChildView(t.createChildView(uC, { id: r })), t.ref.status = t.appendChildView(t.createChildView(yC, { id: r }));
  const f = t.appendChildView(
    t.createChildView(Fu, {
      opacity: 0,
      align: t.query("GET_STYLE_LOAD_INDICATOR_POSITION")
    })
  );
  f.element.classList.add("filepond--load-indicator"), t.ref.loadProgressIndicator = f;
  const h = t.appendChildView(
    t.createChildView(Fu, {
      opacity: 0,
      align: t.query("GET_STYLE_PROGRESS_INDICATOR_POSITION")
    })
  );
  h.element.classList.add("filepond--process-indicator"), t.ref.processProgressIndicator = h, t.ref.activeStyles = [];
}, CC = ({ root: t, actions: e, props: n }) => {
  MC({ root: t, actions: e, props: n });
  let r = e.concat().filter((i) => /^DID_/.test(i.type)).reverse().find((i) => Or[i.type]);
  if (r) {
    t.ref.activeStyles = [];
    const i = Or[r.type];
    pe(TC, (s, o) => {
      const l = t.ref[s];
      pe(o, (a, c) => {
        const d = i[s] && typeof i[s][a] < "u" ? i[s][a] : c;
        t.ref.activeStyles.push({ control: l, key: a, value: d });
      });
    });
  }
  t.ref.activeStyles.forEach(({ control: i, key: s, value: o }) => {
    i[s] = typeof o == "function" ? o(t) : o;
  });
}, MC = Ke({
  DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: t, action: e }) => {
    t.ref.buttonAbortItemProcessing.label = e.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: t, action: e }) => {
    t.ref.buttonAbortItemLoad.label = e.value;
  },
  DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: t, action: e }) => {
    t.ref.buttonAbortItemRemoval.label = e.value;
  },
  DID_REQUEST_ITEM_PROCESSING: ({ root: t }) => {
    t.ref.processProgressIndicator.spin = !0, t.ref.processProgressIndicator.progress = 0;
  },
  DID_START_ITEM_LOAD: ({ root: t }) => {
    t.ref.loadProgressIndicator.spin = !0, t.ref.loadProgressIndicator.progress = 0;
  },
  DID_START_ITEM_REMOVE: ({ root: t }) => {
    t.ref.processProgressIndicator.spin = !0, t.ref.processProgressIndicator.progress = 0;
  },
  DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: t, action: e }) => {
    t.ref.loadProgressIndicator.spin = !1, t.ref.loadProgressIndicator.progress = e.progress;
  },
  DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: t, action: e }) => {
    t.ref.processProgressIndicator.spin = !1, t.ref.processProgressIndicator.progress = e.progress;
  }
}), OC = we({
  create: IC,
  write: CC,
  didCreateView: (t) => {
    dr("CREATE_VIEW", { ...t, view: t });
  },
  name: "file"
}), AC = ({ root: t, props: e }) => {
  t.ref.fileName = ln("legend"), t.appendChild(t.ref.fileName), t.ref.file = t.appendChildView(t.createChildView(OC, { id: e.id })), t.ref.data = !1;
}, RC = ({ root: t, props: e }) => {
  Ee(t.ref.fileName, hc(t.query("GET_ITEM_NAME", e.id)));
}, xC = we({
  create: AC,
  ignoreRect: !0,
  write: Ke({
    DID_LOAD_ITEM: RC
  }),
  didCreateView: (t) => {
    dr("CREATE_VIEW", { ...t, view: t });
  },
  tag: "fieldset",
  name: "file-wrapper"
}), Wu = { type: "spring", damping: 0.6, mass: 7 }, _C = ({ root: t, props: e }) => {
  [
    {
      name: "top"
    },
    {
      name: "center",
      props: {
        translateY: null,
        scaleY: null
      },
      mixins: {
        animations: {
          scaleY: Wu
        },
        styles: ["translateY", "scaleY"]
      }
    },
    {
      name: "bottom",
      props: {
        translateY: null
      },
      mixins: {
        animations: {
          translateY: Wu
        },
        styles: ["translateY"]
      }
    }
  ].forEach((n) => {
    kC(t, n, e.name);
  }), t.element.classList.add(`filepond--${e.name}`), t.ref.scalable = null;
}, kC = (t, e, n) => {
  const r = we({
    name: `panel-${e.name} filepond--${n}`,
    mixins: e.mixins,
    ignoreRectUpdate: !0
  }), i = t.createChildView(r, e.props);
  t.ref[e.name] = t.appendChildView(i);
}, DC = ({ root: t, props: e }) => {
  if ((t.ref.scalable === null || e.scalable !== t.ref.scalable) && (t.ref.scalable = Yp(e.scalable) ? e.scalable : !0, t.element.dataset.scalable = t.ref.scalable), !e.height)
    return;
  const n = t.ref.top.rect.element, r = t.ref.bottom.rect.element, i = Math.max(n.height + r.height, e.height);
  t.ref.center.translateY = n.height, t.ref.center.scaleY = (i - n.height - r.height) / 100, t.ref.bottom.translateY = i - r.height;
}, hm = we({
  name: "panel",
  read: ({ root: t, props: e }) => e.heightCurrent = t.ref.bottom.translateY,
  write: DC,
  create: _C,
  ignoreRect: !0,
  mixins: {
    apis: ["height", "heightCurrent", "scalable"]
  }
}), NC = (t) => {
  const e = t.map((r) => r.id);
  let n;
  return {
    setIndex: (r) => {
      n = r;
    },
    getIndex: () => n,
    getItemIndex: (r) => e.indexOf(r.id)
  };
}, qu = {
  type: "spring",
  stiffness: 0.75,
  damping: 0.45,
  mass: 10
}, ju = "spring", Yu = {
  DID_START_ITEM_LOAD: "busy",
  DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
  DID_THROW_ITEM_INVALID: "load-invalid",
  DID_THROW_ITEM_LOAD_ERROR: "load-error",
  DID_LOAD_ITEM: "idle",
  DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
  DID_START_ITEM_REMOVE: "busy",
  DID_START_ITEM_PROCESSING: "busy processing",
  DID_REQUEST_ITEM_PROCESSING: "busy processing",
  DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
  DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
  DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
  DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
  DID_ABORT_ITEM_PROCESSING: "cancelled",
  DID_REVERT_ITEM_PROCESSING: "idle"
}, LC = ({ root: t, props: e }) => {
  if (t.ref.handleClick = (r) => t.dispatch("DID_ACTIVATE_ITEM", { id: e.id }), t.element.id = `filepond--item-${e.id}`, t.element.addEventListener("click", t.ref.handleClick), t.ref.container = t.appendChildView(t.createChildView(xC, { id: e.id })), t.ref.panel = t.appendChildView(t.createChildView(hm, { name: "item-panel" })), t.ref.panel.height = null, e.markedForRemoval = !1, !t.query("GET_ALLOW_REORDER"))
    return;
  t.element.dataset.dragState = "idle";
  const n = (r) => {
    if (!r.isPrimary)
      return;
    let i = !1;
    const s = {
      x: r.pageX,
      y: r.pageY
    };
    e.dragOrigin = {
      x: t.translateX,
      y: t.translateY
    }, e.dragCenter = {
      x: r.offsetX,
      y: r.offsetY
    };
    const o = NC(t.query("GET_ACTIVE_ITEMS"));
    t.dispatch("DID_GRAB_ITEM", { id: e.id, dragState: o });
    const l = (c) => {
      if (!c.isPrimary)
        return;
      c.stopPropagation(), c.preventDefault(), e.dragOffset = {
        x: c.pageX - s.x,
        y: c.pageY - s.y
      }, e.dragOffset.x * e.dragOffset.x + e.dragOffset.y * e.dragOffset.y > 16 && !i && (i = !0, t.element.removeEventListener("click", t.ref.handleClick)), t.dispatch("DID_DRAG_ITEM", { id: e.id, dragState: o });
    }, a = (c) => {
      c.isPrimary && (document.removeEventListener("pointermove", l), document.removeEventListener("pointerup", a), e.dragOffset = {
        x: c.pageX - s.x,
        y: c.pageY - s.y
      }, t.dispatch("DID_DROP_ITEM", { id: e.id, dragState: o }), i && setTimeout(() => t.element.addEventListener("click", t.ref.handleClick), 0));
    };
    document.addEventListener("pointermove", l), document.addEventListener("pointerup", a);
  };
  t.element.addEventListener("pointerdown", n);
}, PC = Ke({
  DID_UPDATE_PANEL_HEIGHT: ({ root: t, action: e }) => {
    t.height = e.height;
  }
}), BC = Ke(
  {
    DID_GRAB_ITEM: ({ root: t, props: e }) => {
      e.dragOrigin = {
        x: t.translateX,
        y: t.translateY
      };
    },
    DID_DRAG_ITEM: ({ root: t }) => {
      t.element.dataset.dragState = "drag";
    },
    DID_DROP_ITEM: ({ root: t, props: e }) => {
      e.dragOffset = null, e.dragOrigin = null, t.element.dataset.dragState = "drop";
    }
  },
  ({ root: t, actions: e, props: n, shouldOptimize: r }) => {
    t.element.dataset.dragState === "drop" && t.scaleX <= 1 && (t.element.dataset.dragState = "idle");
    let i = e.concat().filter((o) => /^DID_/.test(o.type)).reverse().find((o) => Yu[o.type]);
    i && i.type !== n.currentState && (n.currentState = i.type, t.element.dataset.filepondItemState = Yu[n.currentState] || "");
    const s = t.query("GET_ITEM_PANEL_ASPECT_RATIO") || t.query("GET_PANEL_ASPECT_RATIO");
    s ? r || (t.height = t.rect.element.width * s) : (PC({ root: t, actions: e, props: n }), !t.height && t.ref.container.rect.element.height > 0 && (t.height = t.ref.container.rect.element.height)), r && (t.ref.panel.height = null), t.ref.panel.height = t.height;
  }
), HC = we({
  create: LC,
  write: BC,
  destroy: ({ root: t, props: e }) => {
    t.element.removeEventListener("click", t.ref.handleClick), t.dispatch("RELEASE_ITEM", { query: e.id });
  },
  tag: "li",
  name: "item",
  mixins: {
    apis: [
      "id",
      "interactionMethod",
      "markedForRemoval",
      "spawnDate",
      "dragCenter",
      "dragOrigin",
      "dragOffset"
    ],
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity", "height"],
    animations: {
      scaleX: ju,
      scaleY: ju,
      translateX: qu,
      translateY: qu,
      opacity: { type: "tween", duration: 150 }
    }
  }
});
var pc = (t, e) => Math.max(1, Math.floor((t + 1) / e));
const mc = (t, e, n) => {
  if (!n)
    return;
  const r = t.rect.element.width, i = e.length;
  let s = null;
  if (i === 0 || n.top < e[0].rect.element.top)
    return -1;
  const l = e[0].rect.element, a = l.marginLeft + l.marginRight, c = l.width + a, d = pc(r, c);
  if (d === 1) {
    for (let h = 0; h < i; h++) {
      const p = e[h], m = p.rect.outer.top + p.rect.element.height * 0.5;
      if (n.top < m)
        return h;
    }
    return i;
  }
  const u = l.marginTop + l.marginBottom, f = l.height + u;
  for (let h = 0; h < i; h++) {
    const p = h % d, m = Math.floor(h / d), g = p * c, v = m * f, E = v - l.marginTop, b = g + c, y = v + f + l.marginBottom;
    if (n.top < y && n.top > E) {
      if (n.left < b)
        return h;
      h !== i - 1 ? s = h : s = null;
    }
  }
  return s !== null ? s : i;
}, gs = {
  height: 0,
  width: 0,
  get getHeight() {
    return this.height;
  },
  set setHeight(t) {
    (this.height === 0 || t === 0) && (this.height = t);
  },
  get getWidth() {
    return this.width;
  },
  set setWidth(t) {
    (this.width === 0 || t === 0) && (this.width = t);
  },
  setDimensions: function(t, e) {
    (this.height === 0 || t === 0) && (this.height = t), (this.width === 0 || e === 0) && (this.width = e);
  }
}, VC = ({ root: t }) => {
  ve(t.element, "role", "list"), t.ref.lastItemSpanwDate = Date.now();
}, FC = ({ root: t, action: e }) => {
  const { id: n, index: r, interactionMethod: i } = e;
  t.ref.addIndex = r;
  const s = Date.now();
  let o = s, l = 1;
  if (i !== Et.NONE) {
    l = 0;
    const a = t.query("GET_ITEM_INSERT_INTERVAL"), c = s - t.ref.lastItemSpanwDate;
    o = c < a ? s + (a - c) : s;
  }
  t.ref.lastItemSpanwDate = o, t.appendChildView(
    t.createChildView(
      // view type
      HC,
      // props
      {
        spawnDate: o,
        id: n,
        opacity: l,
        interactionMethod: i
      }
    ),
    r
  );
}, Ku = (t, e, n, r = 0, i = 1) => {
  t.dragOffset ? (t.translateX = null, t.translateY = null, t.translateX = t.dragOrigin.x + t.dragOffset.x, t.translateY = t.dragOrigin.y + t.dragOffset.y, t.scaleX = 1.025, t.scaleY = 1.025) : (t.translateX = e, t.translateY = n, Date.now() > t.spawnDate && (t.opacity === 0 && zC(t, e, n, r, i), t.scaleX = 1, t.scaleY = 1, t.opacity = 1));
}, zC = (t, e, n, r, i) => {
  t.interactionMethod === Et.NONE ? (t.translateX = null, t.translateX = e, t.translateY = null, t.translateY = n) : t.interactionMethod === Et.DROP ? (t.translateX = null, t.translateX = e - r * 20, t.translateY = null, t.translateY = n - i * 10, t.scaleX = 0.8, t.scaleY = 0.8) : t.interactionMethod === Et.BROWSE ? (t.translateY = null, t.translateY = n - 30) : t.interactionMethod === Et.API && (t.translateX = null, t.translateX = e - 30, t.translateY = null);
}, GC = ({ root: t, action: e }) => {
  const { id: n } = e, r = t.childViews.find((i) => i.id === n);
  r && (r.scaleX = 0.9, r.scaleY = 0.9, r.opacity = 0, r.markedForRemoval = !0);
}, Cl = (t) => t.rect.element.height + t.rect.element.marginBottom * 0.5 + t.rect.element.marginTop * 0.5, UC = (t) => t.rect.element.width + t.rect.element.marginLeft * 0.5 + t.rect.element.marginRight * 0.5, $C = ({ root: t, action: e }) => {
  const { id: n, dragState: r } = e, i = t.query("GET_ITEM", { id: n }), s = t.childViews.find((g) => g.id === n), o = t.childViews.length, l = r.getItemIndex(i);
  if (!s)
    return;
  const a = {
    x: s.dragOrigin.x + s.dragOffset.x + s.dragCenter.x,
    y: s.dragOrigin.y + s.dragOffset.y + s.dragCenter.y
  }, c = Cl(s), d = UC(s);
  let u = Math.floor(t.rect.outer.width / d);
  u > o && (u = o);
  const f = Math.floor(o / u + 1);
  gs.setHeight = c * f, gs.setWidth = d * u;
  var h = {
    y: Math.floor(a.y / c),
    x: Math.floor(a.x / d),
    getGridIndex: function() {
      return a.y > gs.getHeight || a.y < 0 || a.x > gs.getWidth || a.x < 0 ? l : this.y * u + this.x;
    },
    getColIndex: function() {
      const v = t.query("GET_ACTIVE_ITEMS"), E = t.childViews.filter((k) => k.rect.element.height), b = v.map(
        (k) => E.find((D) => D.id === k.id)
      ), y = b.findIndex((k) => k === s), T = Cl(s), w = b.length;
      let C = w, S = 0, O = 0, P = 0;
      for (let k = 0; k < w; k++)
        if (S = Cl(b[k]), P = O, O = P + S, a.y < O) {
          if (y > k) {
            if (a.y < P + T) {
              C = k;
              break;
            }
            continue;
          }
          C = k;
          break;
        }
      return C;
    }
  };
  const p = u > 1 ? h.getGridIndex() : h.getColIndex();
  t.dispatch("MOVE_ITEM", { query: s, index: p });
  const m = r.getIndex();
  if (m === void 0 || m !== p) {
    if (r.setIndex(p), m === void 0)
      return;
    t.dispatch("DID_REORDER_ITEMS", {
      items: t.query("GET_ACTIVE_ITEMS"),
      origin: l,
      target: p
    });
  }
}, WC = Ke({
  DID_ADD_ITEM: FC,
  DID_REMOVE_ITEM: GC,
  DID_DRAG_ITEM: $C
}), qC = ({ root: t, props: e, actions: n, shouldOptimize: r }) => {
  WC({ root: t, props: e, actions: n });
  const { dragCoordinates: i } = e, s = t.rect.element.width, o = t.childViews.filter((b) => b.rect.element.height), l = t.query("GET_ACTIVE_ITEMS").map((b) => o.find((y) => y.id === b.id)).filter((b) => b), a = i ? mc(t, l, i) : null, c = t.ref.addIndex || null;
  t.ref.addIndex = null;
  let d = 0, u = 0, f = 0;
  if (l.length === 0)
    return;
  const h = l[0].rect.element, p = h.marginTop + h.marginBottom, m = h.marginLeft + h.marginRight, g = h.width + m, v = h.height + p, E = pc(s, g);
  if (E === 1) {
    let b = 0, y = 0;
    l.forEach((T, w) => {
      if (a) {
        let O = w - a;
        O === -2 ? y = -p * 0.25 : O === -1 ? y = -p * 0.75 : O === 0 ? y = p * 0.75 : O === 1 ? y = p * 0.25 : y = 0;
      }
      r && (T.translateX = null, T.translateY = null), T.markedForRemoval || Ku(T, 0, b + y);
      let S = (T.rect.element.height + p) * (T.markedForRemoval ? T.opacity : 1);
      b += S;
    });
  } else {
    let b = 0, y = 0;
    l.forEach((T, w) => {
      w === a && (d = 1), w === c && (f += 1), T.markedForRemoval && T.opacity < 0.5 && (u -= 1);
      const C = w + f + d + u, S = C % E, O = Math.floor(C / E), P = S * g, k = O * v, D = Math.sign(P - b), F = Math.sign(k - y);
      b = P, y = k, !T.markedForRemoval && (r && (T.translateX = null, T.translateY = null), Ku(T, P, k, D, F));
    });
  }
}, jC = (t, e) => e.filter((n) => n.data && n.data.id ? t.id === n.data.id : !0), YC = we({
  create: VC,
  write: qC,
  tag: "ul",
  name: "list",
  didWriteView: ({ root: t }) => {
    t.childViews.filter((e) => e.markedForRemoval && e.opacity === 0 && e.resting).forEach((e) => {
      e._destroy(), t.removeChildView(e);
    });
  },
  filterFrameActionsForChild: jC,
  mixins: {
    apis: ["dragCoordinates"]
  }
}), KC = ({ root: t, props: e }) => {
  t.ref.list = t.appendChildView(t.createChildView(YC)), e.dragCoordinates = null, e.overflowing = !1;
}, XC = ({ root: t, props: e, action: n }) => {
  t.query("GET_ITEM_INSERT_LOCATION_FREEDOM") && (e.dragCoordinates = {
    left: n.position.scopeLeft - t.ref.list.rect.element.left,
    top: n.position.scopeTop - (t.rect.outer.top + t.rect.element.marginTop + t.rect.element.scrollTop)
  });
}, JC = ({ props: t }) => {
  t.dragCoordinates = null;
}, QC = Ke({
  DID_DRAG: XC,
  DID_END_DRAG: JC
}), ZC = ({ root: t, props: e, actions: n }) => {
  if (QC({ root: t, props: e, actions: n }), t.ref.list.dragCoordinates = e.dragCoordinates, e.overflowing && !e.overflow && (e.overflowing = !1, t.element.dataset.state = "", t.height = null), e.overflow) {
    const r = Math.round(e.overflow);
    r !== t.height && (e.overflowing = !0, t.element.dataset.state = "overflow", t.height = r);
  }
}, eM = we({
  create: KC,
  write: ZC,
  name: "list-scroller",
  mixins: {
    apis: ["overflow", "dragCoordinates"],
    styles: ["height", "translateY"],
    animations: {
      translateY: "spring"
    }
  }
}), At = (t, e, n, r = "") => {
  n ? ve(t, e, r) : t.removeAttribute(e);
}, tM = (t) => {
  if (!(!t || t.value === "")) {
    try {
      t.value = "";
    } catch {
    }
    if (t.value) {
      const e = ln("form"), n = t.parentNode, r = t.nextSibling;
      e.appendChild(t), e.reset(), r ? n.insertBefore(t, r) : n.appendChild(t);
    }
  }
}, nM = ({ root: t, props: e }) => {
  t.element.id = `filepond--browser-${e.id}`, ve(t.element, "name", t.query("GET_NAME")), ve(t.element, "aria-controls", `filepond--assistant-${e.id}`), ve(t.element, "aria-labelledby", `filepond--drop-label-${e.id}`), pm({ root: t, action: { value: t.query("GET_ACCEPTED_FILE_TYPES") } }), mm({ root: t, action: { value: t.query("GET_ALLOW_MULTIPLE") } }), gm({ root: t, action: { value: t.query("GET_ALLOW_DIRECTORIES_ONLY") } }), ba({ root: t }), ym({ root: t, action: { value: t.query("GET_REQUIRED") } }), Em({ root: t, action: { value: t.query("GET_CAPTURE_METHOD") } }), t.ref.handleChange = (n) => {
    if (!t.element.value)
      return;
    const r = Array.from(t.element.files).map((i) => (i._relativePath = i.webkitRelativePath, i));
    setTimeout(() => {
      e.onload(r), tM(t.element);
    }, 250);
  }, t.element.addEventListener("change", t.ref.handleChange);
}, pm = ({ root: t, action: e }) => {
  t.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") && At(t.element, "accept", !!e.value, e.value ? e.value.join(",") : "");
}, mm = ({ root: t, action: e }) => {
  At(t.element, "multiple", e.value);
}, gm = ({ root: t, action: e }) => {
  At(t.element, "webkitdirectory", e.value);
}, ba = ({ root: t }) => {
  const e = t.query("GET_DISABLED"), n = t.query("GET_ALLOW_BROWSE"), r = e || !n;
  At(t.element, "disabled", r);
}, ym = ({ root: t, action: e }) => {
  e.value ? t.query("GET_TOTAL_ITEMS") === 0 && At(t.element, "required", !0) : At(t.element, "required", !1);
}, Em = ({ root: t, action: e }) => {
  At(t.element, "capture", !!e.value, e.value === !0 ? "" : e.value);
}, Xu = ({ root: t }) => {
  const { element: e } = t;
  t.query("GET_TOTAL_ITEMS") > 0 ? (At(e, "required", !1), At(e, "name", !1)) : (At(e, "name", !0, t.query("GET_NAME")), t.query("GET_CHECK_VALIDITY") && e.setCustomValidity(""), t.query("GET_REQUIRED") && At(e, "required", !0));
}, rM = ({ root: t }) => {
  t.query("GET_CHECK_VALIDITY") && t.element.setCustomValidity(t.query("GET_LABEL_INVALID_FIELD"));
}, iM = we({
  tag: "input",
  name: "browser",
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  attributes: {
    type: "file"
  },
  create: nM,
  destroy: ({ root: t }) => {
    t.element.removeEventListener("change", t.ref.handleChange);
  },
  write: Ke({
    DID_LOAD_ITEM: Xu,
    DID_REMOVE_ITEM: Xu,
    DID_THROW_ITEM_INVALID: rM,
    DID_SET_DISABLED: ba,
    DID_SET_ALLOW_BROWSE: ba,
    DID_SET_ALLOW_DIRECTORIES_ONLY: gm,
    DID_SET_ALLOW_MULTIPLE: mm,
    DID_SET_ACCEPTED_FILE_TYPES: pm,
    DID_SET_CAPTURE_METHOD: Em,
    DID_SET_REQUIRED: ym
  })
}), Ju = {
  ENTER: 13,
  SPACE: 32
}, sM = ({ root: t, props: e }) => {
  const n = ln("label");
  ve(n, "for", `filepond--browser-${e.id}`), ve(n, "id", `filepond--drop-label-${e.id}`), ve(n, "aria-hidden", "true"), t.ref.handleKeyDown = (r) => {
    (r.keyCode === Ju.ENTER || r.keyCode === Ju.SPACE) && (r.preventDefault(), t.ref.label.click());
  }, t.ref.handleClick = (r) => {
    r.target === n || n.contains(r.target) || t.ref.label.click();
  }, n.addEventListener("keydown", t.ref.handleKeyDown), t.element.addEventListener("click", t.ref.handleClick), vm(n, e.caption), t.appendChild(n), t.ref.label = n;
}, vm = (t, e) => {
  t.innerHTML = e;
  const n = t.querySelector(".filepond--label-action");
  return n && ve(n, "tabindex", "0"), e;
}, oM = we({
  name: "drop-label",
  ignoreRect: !0,
  create: sM,
  destroy: ({ root: t }) => {
    t.ref.label.addEventListener("keydown", t.ref.handleKeyDown), t.element.removeEventListener("click", t.ref.handleClick);
  },
  write: Ke({
    DID_SET_LABEL_IDLE: ({ root: t, action: e }) => {
      vm(t.ref.label, e.value);
    }
  }),
  mixins: {
    styles: ["opacity", "translateX", "translateY"],
    animations: {
      opacity: { type: "tween", duration: 150 },
      translateX: "spring",
      translateY: "spring"
    }
  }
}), lM = we({
  name: "drip-blob",
  ignoreRect: !0,
  mixins: {
    styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: "spring",
      scaleY: "spring",
      translateX: "spring",
      translateY: "spring",
      opacity: { type: "tween", duration: 250 }
    }
  }
}), aM = ({ root: t }) => {
  const e = t.rect.element.width * 0.5, n = t.rect.element.height * 0.5;
  t.ref.blob = t.appendChildView(
    t.createChildView(lM, {
      opacity: 0,
      scaleX: 2.5,
      scaleY: 2.5,
      translateX: e,
      translateY: n
    })
  );
}, cM = ({ root: t, action: e }) => {
  if (!t.ref.blob) {
    aM({ root: t });
    return;
  }
  t.ref.blob.translateX = e.position.scopeLeft, t.ref.blob.translateY = e.position.scopeTop, t.ref.blob.scaleX = 1, t.ref.blob.scaleY = 1, t.ref.blob.opacity = 1;
}, dM = ({ root: t }) => {
  t.ref.blob && (t.ref.blob.opacity = 0);
}, uM = ({ root: t }) => {
  t.ref.blob && (t.ref.blob.scaleX = 2.5, t.ref.blob.scaleY = 2.5, t.ref.blob.opacity = 0);
}, fM = ({ root: t, props: e, actions: n }) => {
  hM({ root: t, props: e, actions: n });
  const { blob: r } = t.ref;
  n.length === 0 && r && r.opacity === 0 && (t.removeChildView(r), t.ref.blob = null);
}, hM = Ke({
  DID_DRAG: cM,
  DID_DROP: uM,
  DID_END_DRAG: dM
}), pM = we({
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  name: "drip",
  write: fM
}), bm = (t, e) => {
  try {
    const n = new DataTransfer();
    e.forEach((r) => {
      r instanceof File ? n.items.add(r) : n.items.add(
        new File([r], r.name, {
          type: r.type
        })
      );
    }), t.files = n.files;
  } catch {
    return !1;
  }
  return !0;
}, mM = ({ root: t }) => t.ref.fields = {}, Vo = (t, e) => t.ref.fields[e], gc = (t) => {
  t.query("GET_ACTIVE_ITEMS").forEach((e) => {
    t.ref.fields[e.id] && t.element.appendChild(t.ref.fields[e.id]);
  });
}, Qu = ({ root: t }) => gc(t), gM = ({ root: t, action: e }) => {
  const i = !(t.query("GET_ITEM", e.id).origin === Me.LOCAL) && t.query("SHOULD_UPDATE_FILE_INPUT"), s = ln("input");
  s.type = i ? "file" : "hidden", s.name = t.query("GET_NAME"), s.disabled = t.query("GET_DISABLED"), t.ref.fields[e.id] = s, gc(t);
}, yM = ({ root: t, action: e }) => {
  const n = Vo(t, e.id);
  if (!n || (e.serverFileReference !== null && (n.value = e.serverFileReference), !t.query("SHOULD_UPDATE_FILE_INPUT")))
    return;
  const r = t.query("GET_ITEM", e.id);
  bm(n, [r.file]);
}, EM = ({ root: t, action: e }) => {
  t.query("SHOULD_UPDATE_FILE_INPUT") && setTimeout(() => {
    const n = Vo(t, e.id);
    n && bm(n, [e.file]);
  }, 0);
}, vM = ({ root: t }) => {
  t.element.disabled = t.query("GET_DISABLED");
}, bM = ({ root: t, action: e }) => {
  const n = Vo(t, e.id);
  n && (n.parentNode && n.parentNode.removeChild(n), delete t.ref.fields[e.id]);
}, wM = ({ root: t, action: e }) => {
  const n = Vo(t, e.id);
  n && (e.value === null ? n.removeAttribute("value") : n.value = e.value, gc(t));
}, TM = Ke({
  DID_SET_DISABLED: vM,
  DID_ADD_ITEM: gM,
  DID_LOAD_ITEM: yM,
  DID_REMOVE_ITEM: bM,
  DID_DEFINE_VALUE: wM,
  DID_PREPARE_OUTPUT: EM,
  DID_REORDER_ITEMS: Qu,
  DID_SORT_ITEMS: Qu
}), SM = we({
  tag: "fieldset",
  name: "data",
  create: mM,
  write: TM,
  ignoreRect: !0
}), IM = (t) => "getRootNode" in t ? t.getRootNode() : document, CM = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"], MM = ["css", "csv", "html", "txt"], OM = {
  zip: "zip|compressed",
  epub: "application/epub+zip"
}, wm = (t = "") => (t = t.toLowerCase(), CM.includes(t) ? "image/" + (t === "jpg" ? "jpeg" : t === "svg" ? "svg+xml" : t) : MM.includes(t) ? "text/" + t : OM[t] || ""), yc = (t) => new Promise((e, n) => {
  const r = LM(t);
  if (r.length && !AM(t))
    return e(r);
  RM(t).then(e);
}), AM = (t) => t.files ? t.files.length > 0 : !1, RM = (t) => new Promise((e, n) => {
  const r = (t.items ? Array.from(t.items) : []).filter((i) => xM(i)).map((i) => _M(i));
  if (!r.length) {
    e(t.files ? Array.from(t.files) : []);
    return;
  }
  Promise.all(r).then((i) => {
    const s = [];
    i.forEach((o) => {
      s.push.apply(s, o);
    }), e(
      s.filter((o) => o).map((o) => (o._relativePath || (o._relativePath = o.webkitRelativePath), o))
    );
  }).catch(console.error);
}), xM = (t) => {
  if (Tm(t)) {
    const e = Ec(t);
    if (e)
      return e.isFile || e.isDirectory;
  }
  return t.kind === "file";
}, _M = (t) => new Promise((e, n) => {
  if (NM(t)) {
    kM(Ec(t)).then(e).catch(n);
    return;
  }
  e([t.getAsFile()]);
}), kM = (t) => new Promise((e, n) => {
  const r = [];
  let i = 0, s = 0;
  const o = () => {
    s === 0 && i === 0 && e(r);
  }, l = (a) => {
    i++;
    const c = a.createReader(), d = () => {
      c.readEntries((u) => {
        if (u.length === 0) {
          i--, o();
          return;
        }
        u.forEach((f) => {
          f.isDirectory ? l(f) : (s++, f.file((h) => {
            const p = DM(h);
            f.fullPath && (p._relativePath = f.fullPath), r.push(p), s--, o();
          }));
        }), d();
      }, n);
    };
    d();
  };
  l(t);
}), DM = (t) => {
  if (t.type.length)
    return t;
  const e = t.lastModifiedDate, n = t.name, r = wm(Ho(t.name));
  return r.length && (t = t.slice(0, t.size, r), t.name = n, t.lastModifiedDate = e), t;
}, NM = (t) => Tm(t) && (Ec(t) || {}).isDirectory, Tm = (t) => "webkitGetAsEntry" in t, Ec = (t) => t.webkitGetAsEntry(), LM = (t) => {
  let e = [];
  try {
    if (e = BM(t), e.length)
      return e;
    e = PM(t);
  } catch {
  }
  return e;
}, PM = (t) => {
  let e = t.getData("url");
  return typeof e == "string" && e.length ? [e] : [];
}, BM = (t) => {
  let e = t.getData("text/html");
  if (typeof e == "string" && e.length) {
    const n = e.match(/src\s*=\s*"(.+?)"/);
    if (n)
      return [n[1]];
  }
  return [];
}, ho = [], tr = (t) => ({
  pageLeft: t.pageX,
  pageTop: t.pageY,
  scopeLeft: t.offsetX || t.layerX,
  scopeTop: t.offsetY || t.layerY
}), HM = (t, e, n) => {
  const r = VM(e), i = {
    element: t,
    filterElement: n,
    state: null,
    ondrop: () => {
    },
    onenter: () => {
    },
    ondrag: () => {
    },
    onexit: () => {
    },
    onload: () => {
    },
    allowdrop: () => {
    }
  };
  return i.destroy = r.addListener(i), i;
}, VM = (t) => {
  const e = ho.find((r) => r.element === t);
  if (e)
    return e;
  const n = FM(t);
  return ho.push(n), n;
}, FM = (t) => {
  const e = [], n = {
    dragenter: GM,
    dragover: UM,
    dragleave: WM,
    drop: $M
  }, r = {};
  pe(n, (s, o) => {
    r[s] = o(t, e), t.addEventListener(s, r[s], !1);
  });
  const i = {
    element: t,
    addListener: (s) => (e.push(s), () => {
      e.splice(e.indexOf(s), 1), e.length === 0 && (ho.splice(ho.indexOf(i), 1), pe(n, (o) => {
        t.removeEventListener(o, r[o], !1);
      }));
    })
  };
  return i;
}, zM = (t, e) => ("elementFromPoint" in t || (t = document), t.elementFromPoint(e.x, e.y)), vc = (t, e) => {
  const n = IM(e), r = zM(n, {
    x: t.pageX - window.pageXOffset,
    y: t.pageY - window.pageYOffset
  });
  return r === e || e.contains(r);
};
let Sm = null;
const ys = (t, e) => {
  try {
    t.dropEffect = e;
  } catch {
  }
}, GM = (t, e) => (n) => {
  n.preventDefault(), Sm = n.target, e.forEach((r) => {
    const { element: i, onenter: s } = r;
    vc(n, i) && (r.state = "enter", s(tr(n)));
  });
}, UM = (t, e) => (n) => {
  n.preventDefault();
  const r = n.dataTransfer;
  yc(r).then((i) => {
    let s = !1;
    e.some((o) => {
      const { filterElement: l, element: a, onenter: c, onexit: d, ondrag: u, allowdrop: f } = o;
      ys(r, "copy");
      const h = f(i);
      if (!h) {
        ys(r, "none");
        return;
      }
      if (vc(n, a)) {
        if (s = !0, o.state === null) {
          o.state = "enter", c(tr(n));
          return;
        }
        if (o.state = "over", l && !h) {
          ys(r, "none");
          return;
        }
        u(tr(n));
      } else
        l && !s && ys(r, "none"), o.state && (o.state = null, d(tr(n)));
    });
  });
}, $M = (t, e) => (n) => {
  n.preventDefault();
  const r = n.dataTransfer;
  yc(r).then((i) => {
    e.forEach((s) => {
      const { filterElement: o, element: l, ondrop: a, onexit: c, allowdrop: d } = s;
      if (s.state = null, !(o && !vc(n, l))) {
        if (!d(i))
          return c(tr(n));
        a(tr(n), i);
      }
    });
  });
}, WM = (t, e) => (n) => {
  Sm === n.target && e.forEach((r) => {
    const { onexit: i } = r;
    r.state = null, i(tr(n));
  });
}, qM = (t, e, n) => {
  t.classList.add("filepond--hopper");
  const { catchesDropsOnPage: r, requiresDropOnElement: i, filterItems: s = (d) => d } = n, o = HM(
    t,
    r ? document.documentElement : t,
    i
  );
  let l = "", a = "";
  o.allowdrop = (d) => e(s(d)), o.ondrop = (d, u) => {
    const f = s(u);
    if (!e(f)) {
      c.ondragend(d);
      return;
    }
    a = "drag-drop", c.onload(f, d);
  }, o.ondrag = (d) => {
    c.ondrag(d);
  }, o.onenter = (d) => {
    a = "drag-over", c.ondragstart(d);
  }, o.onexit = (d) => {
    a = "drag-exit", c.ondragend(d);
  };
  const c = {
    updateHopperState: () => {
      l !== a && (t.dataset.hopperState = a, l = a);
    },
    onload: () => {
    },
    ondragstart: () => {
    },
    ondrag: () => {
    },
    ondragend: () => {
    },
    destroy: () => {
      o.destroy();
    }
  };
  return c;
};
let wa = !1;
const Dr = [], Im = (t) => {
  const e = document.activeElement;
  if (e && /textarea|input/i.test(e.nodeName)) {
    let n = !1, r = e;
    for (; r !== document.body; ) {
      if (r.classList.contains("filepond--root")) {
        n = !0;
        break;
      }
      r = r.parentNode;
    }
    if (!n)
      return;
  }
  yc(t.clipboardData).then((n) => {
    n.length && Dr.forEach((r) => r(n));
  });
}, jM = (t) => {
  Dr.includes(t) || (Dr.push(t), !wa && (wa = !0, document.addEventListener("paste", Im)));
}, YM = (t) => {
  dc(Dr, Dr.indexOf(t)), Dr.length === 0 && (document.removeEventListener("paste", Im), wa = !1);
}, KM = () => {
  const t = (n) => {
    e.onload(n);
  }, e = {
    destroy: () => {
      YM(t);
    },
    onload: () => {
    }
  };
  return jM(t), e;
}, XM = ({ root: t, props: e }) => {
  t.element.id = `filepond--assistant-${e.id}`, ve(t.element, "role", "status"), ve(t.element, "aria-live", "polite"), ve(t.element, "aria-relevant", "additions");
};
let Zu = null, ef = null;
const Ml = [], Fo = (t, e) => {
  t.element.textContent = e;
}, JM = (t) => {
  t.element.textContent = "";
}, Cm = (t, e, n) => {
  const r = t.query("GET_TOTAL_ITEMS");
  Fo(
    t,
    `${n} ${e}, ${r} ${r === 1 ? t.query("GET_LABEL_FILE_COUNT_SINGULAR") : t.query("GET_LABEL_FILE_COUNT_PLURAL")}`
  ), clearTimeout(ef), ef = setTimeout(() => {
    JM(t);
  }, 1500);
}, Mm = (t) => t.element.parentNode.contains(document.activeElement), QM = ({ root: t, action: e }) => {
  if (!Mm(t))
    return;
  t.element.textContent = "";
  const n = t.query("GET_ITEM", e.id);
  Ml.push(n.filename), clearTimeout(Zu), Zu = setTimeout(() => {
    Cm(t, Ml.join(", "), t.query("GET_LABEL_FILE_ADDED")), Ml.length = 0;
  }, 750);
}, ZM = ({ root: t, action: e }) => {
  if (!Mm(t))
    return;
  const n = e.item;
  Cm(t, n.filename, t.query("GET_LABEL_FILE_REMOVED"));
}, eO = ({ root: t, action: e }) => {
  const r = t.query("GET_ITEM", e.id).filename, i = t.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
  Fo(t, `${r} ${i}`);
}, tf = ({ root: t, action: e }) => {
  const r = t.query("GET_ITEM", e.id).filename, i = t.query("GET_LABEL_FILE_PROCESSING_ABORTED");
  Fo(t, `${r} ${i}`);
}, Es = ({ root: t, action: e }) => {
  const r = t.query("GET_ITEM", e.id).filename;
  Fo(t, `${e.status.main} ${r} ${e.status.sub}`);
}, tO = we({
  create: XM,
  ignoreRect: !0,
  ignoreRectUpdate: !0,
  write: Ke({
    DID_LOAD_ITEM: QM,
    DID_REMOVE_ITEM: ZM,
    DID_COMPLETE_ITEM_PROCESSING: eO,
    DID_ABORT_ITEM_PROCESSING: tf,
    DID_REVERT_ITEM_PROCESSING: tf,
    DID_THROW_ITEM_REMOVE_ERROR: Es,
    DID_THROW_ITEM_LOAD_ERROR: Es,
    DID_THROW_ITEM_INVALID: Es,
    DID_THROW_ITEM_PROCESSING_ERROR: Es
  }),
  tag: "span",
  name: "assistant"
}), Om = (t, e = "-") => t.replace(new RegExp(`${e}.`, "g"), (n) => n.charAt(1).toUpperCase()), Am = (t, e = 16, n = !0) => {
  let r = Date.now(), i = null;
  return (...s) => {
    clearTimeout(i);
    const o = Date.now() - r, l = () => {
      r = Date.now(), t(...s);
    };
    o < e ? n || (i = setTimeout(l, e - o)) : l();
  };
}, nO = 1e6, po = (t) => t.preventDefault(), rO = ({ root: t, props: e }) => {
  const n = t.query("GET_ID");
  n && (t.element.id = n);
  const r = t.query("GET_CLASS_NAME");
  r && r.split(" ").filter((a) => a.length).forEach((a) => {
    t.element.classList.add(a);
  }), t.ref.label = t.appendChildView(
    t.createChildView(oM, {
      ...e,
      translateY: null,
      caption: t.query("GET_LABEL_IDLE")
    })
  ), t.ref.list = t.appendChildView(t.createChildView(eM, { translateY: null })), t.ref.panel = t.appendChildView(t.createChildView(hm, { name: "panel-root" })), t.ref.assistant = t.appendChildView(t.createChildView(tO, { ...e })), t.ref.data = t.appendChildView(t.createChildView(SM, { ...e })), t.ref.measure = ln("div"), t.ref.measure.style.height = "100%", t.element.appendChild(t.ref.measure), t.ref.bounds = null, t.query("GET_STYLES").filter((a) => !on(a.value)).map(({ name: a, value: c }) => {
    t.element.dataset[a] = c;
  }), t.ref.widthPrevious = null, t.ref.widthUpdated = Am(() => {
    t.ref.updateHistory = [], t.dispatch("DID_RESIZE_ROOT");
  }, 250), t.ref.previousAspectRatio = null, t.ref.updateHistory = [];
  const i = window.matchMedia("(pointer: fine) and (hover: hover)").matches, s = "PointerEvent" in window;
  t.query("GET_ALLOW_REORDER") && s && !i && (t.element.addEventListener("touchmove", po, { passive: !1 }), t.element.addEventListener("gesturestart", po));
  const o = t.query("GET_CREDITS");
  if (o.length === 2) {
    const a = document.createElement("a");
    a.className = "filepond--credits", a.setAttribute("aria-hidden", "true"), a.href = o[0], a.tabindex = -1, a.target = "_blank", a.rel = "noopener noreferrer", a.textContent = o[1], t.element.appendChild(a), t.ref.credits = a;
  }
}, iO = ({ root: t, props: e, actions: n }) => {
  if (cO({ root: t, props: e, actions: n }), n.filter((w) => /^DID_SET_STYLE_/.test(w.type)).filter((w) => !on(w.data.value)).map(({ type: w, data: C }) => {
    const S = Om(w.substring(8).toLowerCase(), "_");
    t.element.dataset[S] = C.value, t.invalidateLayout();
  }), t.rect.element.hidden)
    return;
  t.rect.element.width !== t.ref.widthPrevious && (t.ref.widthPrevious = t.rect.element.width, t.ref.widthUpdated());
  let r = t.ref.bounds;
  r || (r = t.ref.bounds = lO(t), t.element.removeChild(t.ref.measure), t.ref.measure = null);
  const { hopper: i, label: s, list: o, panel: l } = t.ref;
  i && i.updateHopperState();
  const a = t.query("GET_PANEL_ASPECT_RATIO"), c = t.query("GET_ALLOW_MULTIPLE"), d = t.query("GET_TOTAL_ITEMS"), u = c ? t.query("GET_MAX_FILES") || nO : 1, f = d === u, h = n.find((w) => w.type === "DID_ADD_ITEM");
  if (f && h) {
    const w = h.data.interactionMethod;
    s.opacity = 0, c ? s.translateY = -40 : w === Et.API ? s.translateX = 40 : w === Et.BROWSE ? s.translateY = 40 : s.translateY = 30;
  } else
    f || (s.opacity = 1, s.translateX = 0, s.translateY = 0);
  const p = sO(t), m = oO(t), g = s.rect.element.height, v = !c || f ? 0 : g, E = f ? o.rect.element.marginTop : 0, b = d === 0 ? 0 : o.rect.element.marginBottom, y = v + E + m.visual + b, T = v + E + m.bounds + b;
  if (o.translateY = Math.max(0, v - o.rect.element.marginTop) - p.top, a) {
    const w = t.rect.element.width, C = w * a;
    a !== t.ref.previousAspectRatio && (t.ref.previousAspectRatio = a, t.ref.updateHistory = []);
    const S = t.ref.updateHistory;
    S.push(w);
    const O = 2;
    if (S.length > O * 2) {
      const k = S.length, D = k - 10;
      let F = 0;
      for (let R = k; R >= D; R--)
        if (S[R] === S[R - 2] && F++, F >= O)
          return;
    }
    l.scalable = !1, l.height = C;
    const P = (
      // the height of the panel minus the label height
      C - v - // the room we leave open between the end of the list and the panel bottom
      (b - p.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (f ? E : 0)
    );
    m.visual > P ? o.overflow = P : o.overflow = null, t.height = C;
  } else if (r.fixedHeight) {
    l.scalable = !1;
    const w = (
      // the height of the panel minus the label height
      r.fixedHeight - v - // the room we leave open between the end of the list and the panel bottom
      (b - p.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (f ? E : 0)
    );
    m.visual > w ? o.overflow = w : o.overflow = null;
  } else if (r.cappedHeight) {
    const w = y >= r.cappedHeight, C = Math.min(r.cappedHeight, y);
    l.scalable = !0, l.height = w ? C : C - p.top - p.bottom;
    const S = (
      // the height of the panel minus the label height
      C - v - // the room we leave open between the end of the list and the panel bottom
      (b - p.bottom) - // if we're full we need to leave some room between the top of the panel and the list
      (f ? E : 0)
    );
    y > r.cappedHeight && m.visual > S ? o.overflow = S : o.overflow = null, t.height = Math.min(
      r.cappedHeight,
      T - p.top - p.bottom
    );
  } else {
    const w = d > 0 ? p.top + p.bottom : 0;
    l.scalable = !0, l.height = Math.max(g, y - w), t.height = Math.max(g, T - w);
  }
  t.ref.credits && l.heightCurrent && (t.ref.credits.style.transform = `translateY(${l.heightCurrent}px)`);
}, sO = (t) => {
  const e = t.ref.list.childViews[0].childViews[0];
  return e ? {
    top: e.rect.element.marginTop,
    bottom: e.rect.element.marginBottom
  } : {
    top: 0,
    bottom: 0
  };
}, oO = (t) => {
  let e = 0, n = 0;
  const r = t.ref.list, i = r.childViews[0], s = i.childViews.filter((E) => E.rect.element.height), o = t.query("GET_ACTIVE_ITEMS").map((E) => s.find((b) => b.id === E.id)).filter((E) => E);
  if (o.length === 0)
    return { visual: e, bounds: n };
  const l = i.rect.element.width, a = mc(i, o, r.dragCoordinates), c = o[0].rect.element, d = c.marginTop + c.marginBottom, u = c.marginLeft + c.marginRight, f = c.width + u, h = c.height + d, p = typeof a < "u" && a >= 0 ? 1 : 0, m = o.find((E) => E.markedForRemoval && E.opacity < 0.45) ? -1 : 0, g = o.length + p + m, v = pc(l, f);
  return v === 1 ? o.forEach((E) => {
    const b = E.rect.element.height + d;
    n += b, e += b * E.opacity;
  }) : (n = Math.ceil(g / v) * h, e = n), { visual: e, bounds: n };
}, lO = (t) => {
  const e = t.ref.measureHeight || null;
  return {
    cappedHeight: parseInt(t.style.maxHeight, 10) || null,
    fixedHeight: e === 0 ? null : e
  };
}, bc = (t, e) => {
  const n = t.query("GET_ALLOW_REPLACE"), r = t.query("GET_ALLOW_MULTIPLE"), i = t.query("GET_TOTAL_ITEMS");
  let s = t.query("GET_MAX_FILES");
  const o = e.length;
  return !r && o > 1 ? (t.dispatch("DID_THROW_MAX_FILES", {
    source: e,
    error: ye("warning", 0, "Max files")
  }), !0) : (s = r ? s : 1, !r && n ? !1 : Xr(s) && i + o > s ? (t.dispatch("DID_THROW_MAX_FILES", {
    source: e,
    error: ye("warning", 0, "Max files")
  }), !0) : !1);
}, aO = (t, e, n) => {
  const r = t.childViews[0];
  return mc(r, e, {
    left: n.scopeLeft - r.rect.element.left,
    top: n.scopeTop - (t.rect.outer.top + t.rect.element.marginTop + t.rect.element.scrollTop)
  });
}, nf = (t) => {
  const e = t.query("GET_ALLOW_DROP"), n = t.query("GET_DISABLED"), r = e && !n;
  if (r && !t.ref.hopper) {
    const i = qM(
      t.element,
      (s) => {
        const o = t.query("GET_BEFORE_DROP_FILE") || (() => !0);
        return t.query("GET_DROP_VALIDATION") ? s.every(
          (a) => dr("ALLOW_HOPPER_ITEM", a, {
            query: t.query
          }).every((c) => c === !0) && o(a)
        ) : !0;
      },
      {
        filterItems: (s) => {
          const o = t.query("GET_IGNORED_FILES");
          return s.filter((l) => qr(l) ? !o.includes(l.name.toLowerCase()) : !0);
        },
        catchesDropsOnPage: t.query("GET_DROP_ON_PAGE"),
        requiresDropOnElement: t.query("GET_DROP_ON_ELEMENT")
      }
    );
    i.onload = (s, o) => {
      const a = t.ref.list.childViews[0].childViews.filter((d) => d.rect.element.height), c = t.query("GET_ACTIVE_ITEMS").map((d) => a.find((u) => u.id === d.id)).filter((d) => d);
      It("ADD_ITEMS", s, { dispatch: t.dispatch }).then((d) => {
        if (bc(t, d))
          return !1;
        t.dispatch("ADD_ITEMS", {
          items: d,
          index: aO(t.ref.list, c, o),
          interactionMethod: Et.DROP
        });
      }), t.dispatch("DID_DROP", { position: o }), t.dispatch("DID_END_DRAG", { position: o });
    }, i.ondragstart = (s) => {
      t.dispatch("DID_START_DRAG", { position: s });
    }, i.ondrag = Am((s) => {
      t.dispatch("DID_DRAG", { position: s });
    }), i.ondragend = (s) => {
      t.dispatch("DID_END_DRAG", { position: s });
    }, t.ref.hopper = i, t.ref.drip = t.appendChildView(t.createChildView(pM));
  } else
    !r && t.ref.hopper && (t.ref.hopper.destroy(), t.ref.hopper = null, t.removeChildView(t.ref.drip));
}, rf = (t, e) => {
  const n = t.query("GET_ALLOW_BROWSE"), r = t.query("GET_DISABLED"), i = n && !r;
  i && !t.ref.browser ? t.ref.browser = t.appendChildView(
    t.createChildView(iM, {
      ...e,
      onload: (s) => {
        It("ADD_ITEMS", s, {
          dispatch: t.dispatch
        }).then((o) => {
          if (bc(t, o))
            return !1;
          t.dispatch("ADD_ITEMS", {
            items: o,
            index: -1,
            interactionMethod: Et.BROWSE
          });
        });
      }
    }),
    0
  ) : !i && t.ref.browser && (t.removeChildView(t.ref.browser), t.ref.browser = null);
}, sf = (t) => {
  const e = t.query("GET_ALLOW_PASTE"), n = t.query("GET_DISABLED"), r = e && !n;
  r && !t.ref.paster ? (t.ref.paster = KM(), t.ref.paster.onload = (i) => {
    It("ADD_ITEMS", i, { dispatch: t.dispatch }).then((s) => {
      if (bc(t, s))
        return !1;
      t.dispatch("ADD_ITEMS", {
        items: s,
        index: -1,
        interactionMethod: Et.PASTE
      });
    });
  }) : !r && t.ref.paster && (t.ref.paster.destroy(), t.ref.paster = null);
}, cO = Ke({
  DID_SET_ALLOW_BROWSE: ({ root: t, props: e }) => {
    rf(t, e);
  },
  DID_SET_ALLOW_DROP: ({ root: t }) => {
    nf(t);
  },
  DID_SET_ALLOW_PASTE: ({ root: t }) => {
    sf(t);
  },
  DID_SET_DISABLED: ({ root: t, props: e }) => {
    nf(t), sf(t), rf(t, e), t.query("GET_DISABLED") ? t.element.dataset.disabled = "disabled" : t.element.removeAttribute("data-disabled");
  }
}), dO = we({
  name: "root",
  read: ({ root: t }) => {
    t.ref.measure && (t.ref.measureHeight = t.ref.measure.offsetHeight);
  },
  create: rO,
  write: iO,
  destroy: ({ root: t }) => {
    t.ref.paster && t.ref.paster.destroy(), t.ref.hopper && t.ref.hopper.destroy(), t.element.removeEventListener("touchmove", po), t.element.removeEventListener("gesturestart", po);
  },
  mixins: {
    styles: ["height"]
  }
}), uO = (t = {}) => {
  let e = null;
  const n = fo(), r = OS(
    // initial state (should be serializable)
    fI(n),
    // queries
    [_I, mI(n)],
    // action handlers
    [nC, pI(n)]
  );
  r.dispatch("SET_OPTIONS", { options: t });
  const i = () => {
    document.hidden || r.dispatch("KICK");
  };
  document.addEventListener("visibilitychange", i);
  let s = null, o = !1, l = !1, a = null, c = null;
  const d = () => {
    o || (o = !0), clearTimeout(s), s = setTimeout(() => {
      o = !1, a = null, c = null, l && (l = !1, r.dispatch("DID_STOP_RESIZE"));
    }, 500);
  };
  window.addEventListener("resize", d);
  const u = dO(r, { id: cc() });
  let f = !1, h = !1;
  const p = {
    // necessary for update loop
    /**
     * Reads from dom (never call manually)
     * @private
     */
    _read: () => {
      o && (c = window.innerWidth, a || (a = c), !l && c !== a && (r.dispatch("DID_START_RESIZE"), l = !0)), h && f && (f = u.element.offsetParent === null), !f && (u._read(), h = u.rect.element.hidden);
    },
    /**
     * Writes to dom (never call manually)
     * @private
     */
    _write: (I) => {
      const A = r.processActionQueue().filter((L) => !/^SET_/.test(L.type));
      f && !A.length || (E(A), f = u._write(I, A, l), EI(r.query("GET_ITEMS")), f && r.processDispatchQueue());
    }
  }, m = (I) => (A) => {
    const L = {
      type: I
    };
    if (!A)
      return L;
    if (A.hasOwnProperty("error") && (L.error = A.error ? { ...A.error } : null), A.status && (L.status = { ...A.status }), A.file && (L.output = A.file), A.source)
      L.file = A.source;
    else if (A.item || A.id) {
      const B = A.item ? A.item : r.query("GET_ITEM", A.id);
      L.file = B ? Xe(B) : null;
    }
    return A.items && (L.items = A.items.map(Xe)), /progress/.test(I) && (L.progress = A.progress), A.hasOwnProperty("origin") && A.hasOwnProperty("target") && (L.origin = A.origin, L.target = A.target), L;
  }, g = {
    DID_DESTROY: m("destroy"),
    DID_INIT: m("init"),
    DID_THROW_MAX_FILES: m("warning"),
    DID_INIT_ITEM: m("initfile"),
    DID_START_ITEM_LOAD: m("addfilestart"),
    DID_UPDATE_ITEM_LOAD_PROGRESS: m("addfileprogress"),
    DID_LOAD_ITEM: m("addfile"),
    DID_THROW_ITEM_INVALID: [m("error"), m("addfile")],
    DID_THROW_ITEM_LOAD_ERROR: [m("error"), m("addfile")],
    DID_THROW_ITEM_REMOVE_ERROR: [m("error"), m("removefile")],
    DID_PREPARE_OUTPUT: m("preparefile"),
    DID_START_ITEM_PROCESSING: m("processfilestart"),
    DID_UPDATE_ITEM_PROCESS_PROGRESS: m("processfileprogress"),
    DID_ABORT_ITEM_PROCESSING: m("processfileabort"),
    DID_COMPLETE_ITEM_PROCESSING: m("processfile"),
    DID_COMPLETE_ITEM_PROCESSING_ALL: m("processfiles"),
    DID_REVERT_ITEM_PROCESSING: m("processfilerevert"),
    DID_THROW_ITEM_PROCESSING_ERROR: [m("error"), m("processfile")],
    DID_REMOVE_ITEM: m("removefile"),
    DID_UPDATE_ITEMS: m("updatefiles"),
    DID_ACTIVATE_ITEM: m("activatefile"),
    DID_REORDER_ITEMS: m("reorderfiles")
  }, v = (I) => {
    const A = { pond: G, ...I };
    delete A.type, u.element.dispatchEvent(
      new CustomEvent(`FilePond:${I.type}`, {
        // event info
        detail: A,
        // event behaviour
        bubbles: !0,
        cancelable: !0,
        composed: !0
        // triggers listeners outside of shadow root
      })
    );
    const L = [];
    I.hasOwnProperty("error") && L.push(I.error), I.hasOwnProperty("file") && L.push(I.file);
    const B = ["type", "error", "file"];
    Object.keys(I).filter((K) => !B.includes(K)).forEach((K) => L.push(I[K])), G.fire(I.type, ...L);
    const $ = r.query(`GET_ON${I.type.toUpperCase()}`);
    $ && $(...L);
  }, E = (I) => {
    I.length && I.filter((A) => g[A.type]).forEach((A) => {
      const L = g[A.type];
      (Array.isArray(L) ? L : [L]).forEach((B) => {
        A.type === "DID_INIT_ITEM" ? v(B(A.data)) : setTimeout(() => {
          v(B(A.data));
        }, 0);
      });
    });
  }, b = (I) => r.dispatch("SET_OPTIONS", { options: I }), y = (I) => r.query("GET_ACTIVE_ITEM", I), T = (I) => new Promise((A, L) => {
    r.dispatch("REQUEST_ITEM_PREPARE", {
      query: I,
      success: (B) => {
        A(B);
      },
      failure: (B) => {
        L(B);
      }
    });
  }), w = (I, A = {}) => new Promise((L, B) => {
    O([{ source: I, options: A }], { index: A.index }).then(($) => L($ && $[0])).catch(B);
  }), C = (I) => I.file && I.id, S = (I, A) => (typeof I == "object" && !C(I) && !A && (A = I, I = void 0), r.dispatch("REMOVE_ITEM", { ...A, query: I }), r.query("GET_ACTIVE_ITEM", I) === null), O = (...I) => new Promise((A, L) => {
    const B = [], $ = {};
    if (No(I[0]))
      B.push.apply(B, I[0]), Object.assign($, I[1] || {});
    else {
      const K = I[I.length - 1];
      typeof K == "object" && !(K instanceof Blob) && Object.assign($, I.pop()), B.push(...I);
    }
    r.dispatch("ADD_ITEMS", {
      items: B,
      index: $.index,
      interactionMethod: Et.API,
      success: A,
      failure: L
    });
  }), P = () => r.query("GET_ACTIVE_ITEMS"), k = (I) => new Promise((A, L) => {
    r.dispatch("REQUEST_ITEM_PROCESSING", {
      query: I,
      success: (B) => {
        A(B);
      },
      failure: (B) => {
        L(B);
      }
    });
  }), D = (...I) => {
    const A = Array.isArray(I[0]) ? I[0] : I, L = A.length ? A : P();
    return Promise.all(L.map(T));
  }, F = (...I) => {
    const A = Array.isArray(I[0]) ? I[0] : I;
    if (!A.length) {
      const L = P().filter(
        (B) => !(B.status === J.IDLE && B.origin === Me.LOCAL) && B.status !== J.PROCESSING && B.status !== J.PROCESSING_COMPLETE && B.status !== J.PROCESSING_REVERT_ERROR
      );
      return Promise.all(L.map(k));
    }
    return Promise.all(A.map(k));
  }, R = (...I) => {
    const A = Array.isArray(I[0]) ? I[0] : I;
    let L;
    typeof A[A.length - 1] == "object" ? L = A.pop() : Array.isArray(I[0]) && (L = I[1]);
    const B = P();
    return A.length ? A.map((K) => $n(K) ? B[K] ? B[K].id : null : K).filter((K) => K).map((K) => S(K, L)) : Promise.all(B.map((K) => S(K, L)));
  }, G = {
    // supports events
    ...Bo(),
    // inject private api methods
    ...p,
    // inject all getters and setters
    ...hI(r, n),
    /**
     * Override options defined in options object
     * @param options
     */
    setOptions: b,
    /**
     * Load the given file
     * @param source - the source of the file (either a File, base64 data uri or url)
     * @param options - object, { index: 0 }
     */
    addFile: w,
    /**
     * Load the given files
     * @param sources - the sources of the files to load
     * @param options - object, { index: 0 }
     */
    addFiles: O,
    /**
     * Returns the file objects matching the given query
     * @param query { string, number, null }
     */
    getFile: y,
    /**
     * Upload file with given name
     * @param query { string, number, null  }
     */
    processFile: k,
    /**
     * Request prepare output for file with given name
     * @param query { string, number, null  }
     */
    prepareFile: T,
    /**
     * Removes a file by its name
     * @param query { string, number, null  }
     */
    removeFile: S,
    /**
     * Moves a file to a new location in the files list
     */
    moveFile: (I, A) => r.dispatch("MOVE_ITEM", { query: I, index: A }),
    /**
     * Returns all files (wrapped in public api)
     */
    getFiles: P,
    /**
     * Starts uploading all files
     */
    processFiles: F,
    /**
     * Clears all files from the files list
     */
    removeFiles: R,
    /**
     * Starts preparing output of all files
     */
    prepareFiles: D,
    /**
     * Sort list of files
     */
    sort: (I) => r.dispatch("SORT", { compare: I }),
    /**
     * Browse the file system for a file
     */
    browse: () => {
      var I = u.element.querySelector("input[type=file]");
      I && I.click();
    },
    /**
     * Destroys the app
     */
    destroy: () => {
      G.fire("destroy", u.element), r.dispatch("ABORT_ALL"), u._destroy(), window.removeEventListener("resize", d), document.removeEventListener("visibilitychange", i), r.dispatch("DID_DESTROY");
    },
    /**
     * Inserts the plugin before the target element
     */
    insertBefore: (I) => Ou(u.element, I),
    /**
     * Inserts the plugin after the target element
     */
    insertAfter: (I) => Au(u.element, I),
    /**
     * Appends the plugin to the target element
     */
    appendTo: (I) => I.appendChild(u.element),
    /**
     * Replaces an element with the app
     */
    replaceElement: (I) => {
      Ou(u.element, I), I.parentNode.removeChild(I), e = I;
    },
    /**
     * Restores the original element
     */
    restoreElement: () => {
      e && (Au(e, u.element), u.element.parentNode.removeChild(u.element), e = null);
    },
    /**
     * Returns true if the app root is attached to given element
     * @param element
     */
    isAttachedTo: (I) => u.element === I || e === I,
    /**
     * Returns the root element
     */
    element: {
      get: () => u.element
    },
    /**
     * Returns the current pond status
     */
    status: {
      get: () => r.query("GET_STATUS")
    }
  };
  return r.dispatch("DID_INIT"), Mn(G);
}, Rm = (t = {}) => {
  const e = {};
  return pe(fo(), (r, i) => {
    e[r] = i[0];
  }), uO({
    // default options
    ...e,
    // custom options
    ...t
  });
}, fO = (t) => t.charAt(0).toLowerCase() + t.slice(1), hO = (t) => Om(t.replace(/^data-/, "")), xm = (t, e) => {
  pe(e, (n, r) => {
    pe(t, (i, s) => {
      const o = new RegExp(n);
      if (!o.test(i) || (delete t[i], r === !1))
        return;
      if (Ye(r)) {
        t[r] = s;
        return;
      }
      const a = r.group;
      Ae(r) && !t[a] && (t[a] = {}), t[a][fO(i.replace(o, ""))] = s;
    }), r.mapping && xm(t[r.group], r.mapping);
  });
}, pO = (t, e = {}) => {
  const n = [];
  pe(t.attributes, (i) => {
    n.push(t.attributes[i]);
  });
  const r = n.filter((i) => i.name).reduce((i, s) => {
    const o = ve(t, s.name);
    return i[hO(s.name)] = o === s.name ? !0 : o, i;
  }, {});
  return xm(r, e), r;
}, mO = (t, e = {}) => {
  const n = {
    // translate to other name
    "^class$": "className",
    "^multiple$": "allowMultiple",
    "^capture$": "captureMethod",
    "^webkitdirectory$": "allowDirectoriesOnly",
    // group under single property
    "^server": {
      group: "server",
      mapping: {
        "^process": {
          group: "process"
        },
        "^revert": {
          group: "revert"
        },
        "^fetch": {
          group: "fetch"
        },
        "^restore": {
          group: "restore"
        },
        "^load": {
          group: "load"
        }
      }
    },
    // don't include in object
    "^type$": !1,
    "^files$": !1
  };
  dr("SET_ATTRIBUTE_TO_OPTION_MAP", n);
  const r = {
    ...e
  }, i = pO(
    t.nodeName === "FIELDSET" ? t.querySelector("input[type=file]") : t,
    n
  );
  Object.keys(i).forEach((o) => {
    Ae(i[o]) ? (Ae(r[o]) || (r[o] = {}), Object.assign(r[o], i[o])) : r[o] = i[o];
  }), r.files = (e.files || []).concat(
    Array.from(t.querySelectorAll("input:not([type=file])")).map((o) => ({
      source: o.value,
      options: {
        type: o.dataset.type
      }
    }))
  );
  const s = Rm(r);
  return t.files && Array.from(t.files).forEach((o) => {
    s.addFile(o);
  }), s.replaceElement(t), s;
}, gO = (...t) => MS(t[0]) ? mO(...t) : Rm(...t), yO = ["fire", "_read", "_write"], of = (t) => {
  const e = {};
  return Qp(t, e, yO), e;
}, EO = (t, e) => t.replace(/(?:{([a-zA-Z]+)})/g, (n, r) => e[r]), vO = (t) => {
  const e = new Blob(["(", t.toString(), ")()"], {
    type: "application/javascript"
  }), n = URL.createObjectURL(e), r = new Worker(n);
  return {
    transfer: (i, s) => {
    },
    post: (i, s, o) => {
      const l = cc();
      r.onmessage = (a) => {
        a.data.id === l && s(a.data.message);
      }, r.postMessage(
        {
          id: l,
          message: i
        },
        o
      );
    },
    terminate: () => {
      r.terminate(), URL.revokeObjectURL(n);
    }
  };
}, bO = (t) => new Promise((e, n) => {
  const r = new Image();
  r.onload = () => {
    e(r);
  }, r.onerror = (i) => {
    n(i);
  }, r.src = t;
}), _m = (t, e) => {
  const n = t.slice(0, t.size, t.type);
  return n.lastModifiedDate = t.lastModifiedDate, n.name = e, n;
}, wO = (t) => _m(t, t.name), lf = [], TO = (t) => {
  if (lf.includes(t))
    return;
  lf.push(t);
  const e = t({
    addFilter: bI,
    utils: {
      Type: _,
      forin: pe,
      isString: Ye,
      isFile: qr,
      toNaturalFileSize: dm,
      replaceInString: EO,
      getExtensionFromFilename: Ho,
      getFilenameWithoutExtension: lm,
      guesstimateMimeType: wm,
      getFileFromBlob: Wr,
      getFilenameFromURL: zi,
      createRoute: Ke,
      createWorker: vO,
      createView: we,
      createItemAPI: Xe,
      loadImage: bO,
      copyFile: wO,
      renameFile: _m,
      createBlob: im,
      applyFilterChain: It,
      text: Ee,
      getNumericAspectRatioFromString: tm
    },
    views: {
      fileActionButton: cm
    }
  });
  wI(e.options);
}, SO = () => Object.prototype.toString.call(window.operamini) === "[object OperaMini]", IO = () => "Promise" in window, CO = () => "slice" in Blob.prototype, MO = () => "URL" in window && "createObjectURL" in window.URL, OO = () => "visibilityState" in document, AO = () => "performance" in window, RO = () => "supports" in (window.CSS || {}), xO = () => /MSIE|Trident/.test(window.navigator.userAgent), Ta = (() => {
  const t = (
    // Has to be a browser
    qp() && // Can't run on Opera Mini due to lack of everything
    !SO() && // Require these APIs to feature detect a modern browser
    OO() && IO() && CO() && MO() && AO() && // doesn't need CSSSupports but is a good way to detect Safari 9+ (we do want to support IE11 though)
    (RO() || xO())
  );
  return () => t;
})(), un = {
  // active app instances, used to redraw the apps and to find the later
  apps: []
}, _O = "filepond", ur = () => {
};
let mo = {}, _s = ur, Ol = ur, af = ur, cf = ur, Sa = ur, df = ur, uf = ur;
if (Ta()) {
  QS(
    () => {
      un.apps.forEach((n) => n._read());
    },
    (n) => {
      un.apps.forEach((r) => r._write(n));
    }
  );
  const t = () => {
    document.dispatchEvent(
      new CustomEvent("FilePond:loaded", {
        detail: {
          supported: Ta,
          create: _s,
          destroy: Ol,
          parse: af,
          find: cf,
          registerPlugin: Sa,
          setOptions: uf
        }
      })
    ), document.removeEventListener("DOMContentLoaded", t);
  };
  document.readyState !== "loading" ? setTimeout(() => t(), 0) : document.addEventListener("DOMContentLoaded", t);
  const e = () => pe(fo(), (n, r) => {
    mo[n] = r[1];
  });
  mo = {}, e(), _s = (...n) => {
    const r = gO(...n);
    return r.on("destroy", Ol), un.apps.push(r), of(r);
  }, Ol = (n) => {
    const r = un.apps.findIndex((i) => i.isAttachedTo(n));
    return r >= 0 ? (un.apps.splice(r, 1)[0].restoreElement(), !0) : !1;
  }, af = (n) => Array.from(n.querySelectorAll(`.${_O}`)).filter(
    (s) => !un.apps.find((o) => o.isAttachedTo(s))
  ).map((s) => _s(s)), cf = (n) => {
    const r = un.apps.find((i) => i.isAttachedTo(n));
    return r ? of(r) : null;
  }, Sa = (...n) => {
    n.forEach(TO), e();
  }, df = () => {
    const n = {};
    return pe(fo(), (r, i) => {
      n[r] = i[0];
    }), n;
  }, uf = (n) => (Ae(n) && (un.apps.forEach((r) => {
    r.setOptions(n);
  }), TI(n)), df());
}
/*!
 * vue-filepond v7.0.3
 * A handy FilePond adapter component for Vue
 * 
 * Copyright (c) 2022 PQINA
 * https://pqina.nl/filepond
 * 
 * Licensed under the MIT license.
 */
const kO = [
  "setOptions",
  "on",
  "off",
  "onOnce",
  "appendTo",
  "insertAfter",
  "insertBefore",
  "isAttachedTo",
  "replaceElement",
  "restoreElement",
  "destroy"
], DO = Ta(), NO = (t) => ({
  string: String,
  boolean: Boolean,
  array: Array,
  function: Function,
  int: Number,
  serverapi: Object,
  object: Object
})[t], vs = {}, Al = [], Rl = [];
let LO = {};
const PO = (...t) => {
  Sa(...t), Al.length = 0;
  for (const e in mo) {
    if (/^on/.test(e)) {
      Al.push(e);
      continue;
    }
    let n = [String, NO(mo[e])];
    e == "labelFileProcessingError" && n.push(Function), vs[e] = {
      type: n,
      // set this default value so we know which props have been explicitely set by user on component
      default: void 0
    };
  }
  return {
    name: "FilePond",
    props: vs,
    render() {
      const e = Object.entries({
        id: this.id,
        name: this.name,
        type: "file",
        class: this.className,
        required: this.required,
        multiple: this.allowMultiple,
        accept: this.acceptedFileTypes,
        capture: this.captureMethod
      }).reduce((n, [r, i]) => (i !== void 0 && (n[r] = i), n), {});
      return nn(
        "div",
        {
          class: {
            "filepond--wrapper": !0
          }
        },
        [nn("input", e)]
      );
    },
    created() {
      this.watchers = Object.keys(vs).map((e) => this.$watch(e, (n) => {
        this._pond[e] = n;
      }));
    },
    // Will setup FilePond instance when mounted
    mounted() {
      if (!DO)
        return;
      this._element = this.$el.querySelector("input");
      const e = Al.reduce((r, i) => (r[i] = (...s) => {
        this.$emit("input", this._pond ? this._pond.getFiles() : []), this.$emit(i.substr(2), ...s);
      }, r), {}), n = {};
      Object.keys(vs).forEach((r) => {
        this[r] !== void 0 && (n[r] = this[r]);
      }), this._pond = _s(
        this._element,
        Object.assign({}, LO, e, n)
      ), Object.keys(this._pond).filter((r) => !kO.includes(r)).forEach((r) => {
        this[r] = this._pond[r];
      }), Rl.push(this._pond);
    },
    // Will clean up FilePond instance when unmounted
    beforeUnmount() {
      const { detached: e } = this.$options;
      if (!this.$el.offsetParent) {
        e.call(this);
        return;
      }
      const n = (i, s) => {
        const l = ((i[0] || {}).removedNodes || [])[0];
        !l || !l.contains(this.$el) || (s.disconnect(), e.call(this));
      };
      new MutationObserver(n).observe(document.documentElement, {
        childList: !0,
        subtree: !0
      });
    },
    // called when the component root node has been detached
    detached() {
      if (this.watchers.forEach((n) => n()), !this._pond)
        return;
      this._pond.destroy();
      const e = Rl.indexOf(this._pond);
      e >= 0 && Rl.splice(e, 1), this._pond = null;
    }
  };
};
/*!
 * FilePondPluginFileValidateType 1.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const km = ({ addFilter: t, utils: e }) => {
  const {
    Type: n,
    isString: r,
    replaceInString: i,
    guesstimateMimeType: s,
    getExtensionFromFilename: o,
    getFilenameFromURL: l
  } = e, a = (h, p) => {
    const m = (/^[^/]+/.exec(h) || []).pop(), g = p.slice(0, -2);
    return m === g;
  }, c = (h, p) => h.some((m) => /\*$/.test(m) ? a(p, m) : m === p), d = (h) => {
    let p = "";
    if (r(h)) {
      const m = l(h), g = o(m);
      g && (p = s(g));
    } else
      p = h.type;
    return p;
  }, u = (h, p, m) => {
    if (p.length === 0)
      return !0;
    const g = d(h);
    return m ? new Promise((v, E) => {
      m(h, g).then((b) => {
        c(p, b) ? v() : E();
      }).catch(E);
    }) : c(p, g);
  }, f = (h) => (p) => h[p] === null ? !1 : h[p] || p;
  return t(
    "SET_ATTRIBUTE_TO_OPTION_MAP",
    (h) => Object.assign(h, {
      accept: "acceptedFileTypes"
    })
  ), t("ALLOW_HOPPER_ITEM", (h, { query: p }) => p("GET_ALLOW_FILE_TYPE_VALIDATION") ? u(h, p("GET_ACCEPTED_FILE_TYPES")) : !0), t(
    "LOAD_FILE",
    (h, { query: p }) => new Promise((m, g) => {
      if (!p("GET_ALLOW_FILE_TYPE_VALIDATION")) {
        m(h);
        return;
      }
      const v = p("GET_ACCEPTED_FILE_TYPES"), E = p("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"), b = u(
        h,
        v,
        E
      ), y = () => {
        const T = v.map(
          f(
            p("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP")
          )
        ).filter((C) => C !== !1), w = T.filter(
          function(C, S) {
            return T.indexOf(C) === S;
          }
        );
        g({
          status: {
            main: p("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),
            sub: i(
              p("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),
              {
                allTypes: w.join(", "),
                allButLastType: w.slice(0, -1).join(", "),
                lastType: w[T.length - 1]
              }
            )
          }
        });
      };
      if (typeof b == "boolean")
        return b ? m(h) : y();
      b.then(() => {
        m(h);
      }).catch(y);
    })
  ), {
    // default options
    options: {
      // Enable or disable file type validation
      allowFileTypeValidation: [!0, n.BOOLEAN],
      // What file types to accept
      acceptedFileTypes: [[], n.ARRAY],
      // - must be comma separated
      // - mime types: image/png, image/jpeg, image/gif
      // - extensions: .png, .jpg, .jpeg ( not enabled yet )
      // - wildcards: image/*
      // label to show when a type is not allowed
      labelFileTypeNotAllowed: ["File is of invalid type", n.STRING],
      // nicer label
      fileValidateTypeLabelExpectedTypes: [
        "Expects {allButLastType} or {lastType}",
        n.STRING
      ],
      // map mime types to extensions
      fileValidateTypeLabelExpectedTypesMap: [{}, n.OBJECT],
      // Custom function to detect type of file
      fileValidateTypeDetectType: [null, n.FUNCTION]
    }
  };
}, BO = typeof window < "u" && typeof window.document < "u";
BO && document.dispatchEvent(
  new CustomEvent("FilePond:pluginloaded", { detail: km })
);
/*!
 * FilePondPluginImagePreview 4.6.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */
const HO = (t) => /^image/.test(t.type), ff = (t, e) => Bi(t.x * e, t.y * e), hf = (t, e) => Bi(t.x + e.x, t.y + e.y), VO = (t) => {
  const e = Math.sqrt(t.x * t.x + t.y * t.y);
  return e === 0 ? {
    x: 0,
    y: 0
  } : Bi(t.x / e, t.y / e);
}, bs = (t, e, n) => {
  const r = Math.cos(e), i = Math.sin(e), s = Bi(t.x - n.x, t.y - n.y);
  return Bi(
    n.x + r * s.x - i * s.y,
    n.y + i * s.x + r * s.y
  );
}, Bi = (t = 0, e = 0) => ({ x: t, y: e }), Je = (t, e, n = 1, r) => {
  if (typeof t == "string")
    return parseFloat(t) * n;
  if (typeof t == "number")
    return t * (r ? e[r] : Math.min(e.width, e.height));
}, FO = (t, e, n) => {
  const r = t.borderStyle || t.lineStyle || "solid", i = t.backgroundColor || t.fontColor || "transparent", s = t.borderColor || t.lineColor || "transparent", o = Je(
    t.borderWidth || t.lineWidth,
    e,
    n
  ), l = t.lineCap || "round", a = t.lineJoin || "round", c = typeof r == "string" ? "" : r.map((u) => Je(u, e, n)).join(","), d = t.opacity || 1;
  return {
    "stroke-linecap": l,
    "stroke-linejoin": a,
    "stroke-width": o || 0,
    "stroke-dasharray": c,
    stroke: s,
    fill: i,
    opacity: d
  };
}, pt = (t) => t != null, zO = (t, e, n = 1) => {
  let r = Je(t.x, e, n, "width") || Je(t.left, e, n, "width"), i = Je(t.y, e, n, "height") || Je(t.top, e, n, "height"), s = Je(t.width, e, n, "width"), o = Je(t.height, e, n, "height"), l = Je(t.right, e, n, "width"), a = Je(t.bottom, e, n, "height");
  return pt(i) || (pt(o) && pt(a) ? i = e.height - o - a : i = a), pt(r) || (pt(s) && pt(l) ? r = e.width - s - l : r = l), pt(s) || (pt(r) && pt(l) ? s = e.width - r - l : s = 0), pt(o) || (pt(i) && pt(a) ? o = e.height - i - a : o = 0), {
    x: r || 0,
    y: i || 0,
    width: s || 0,
    height: o || 0
  };
}, GO = (t) => t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" "), Ut = (t, e) => Object.keys(e).forEach((n) => t.setAttribute(n, e[n])), UO = "http://www.w3.org/2000/svg", Ar = (t, e) => {
  const n = document.createElementNS(UO, t);
  return e && Ut(n, e), n;
}, $O = (t) => Ut(t, {
  ...t.rect,
  ...t.styles
}), WO = (t) => {
  const e = t.rect.x + t.rect.width * 0.5, n = t.rect.y + t.rect.height * 0.5, r = t.rect.width * 0.5, i = t.rect.height * 0.5;
  return Ut(t, {
    cx: e,
    cy: n,
    rx: r,
    ry: i,
    ...t.styles
  });
}, qO = {
  contain: "xMidYMid meet",
  cover: "xMidYMid slice"
}, jO = (t, e) => {
  Ut(t, {
    ...t.rect,
    ...t.styles,
    preserveAspectRatio: qO[e.fit] || "none"
  });
}, YO = {
  left: "start",
  center: "middle",
  right: "end"
}, KO = (t, e, n, r) => {
  const i = Je(e.fontSize, n, r), s = e.fontFamily || "sans-serif", o = e.fontWeight || "normal", l = YO[e.textAlign] || "start";
  Ut(t, {
    ...t.rect,
    ...t.styles,
    "stroke-width": 0,
    "font-weight": o,
    "font-size": i,
    "font-family": s,
    "text-anchor": l
  }), t.text !== e.text && (t.text = e.text, t.textContent = e.text.length ? e.text : " ");
}, XO = (t, e, n, r) => {
  Ut(t, {
    ...t.rect,
    ...t.styles,
    fill: "none"
  });
  const i = t.childNodes[0], s = t.childNodes[1], o = t.childNodes[2], l = t.rect, a = {
    x: t.rect.x + t.rect.width,
    y: t.rect.y + t.rect.height
  };
  if (Ut(i, {
    x1: l.x,
    y1: l.y,
    x2: a.x,
    y2: a.y
  }), !e.lineDecoration)
    return;
  s.style.display = "none", o.style.display = "none";
  const c = VO({
    x: a.x - l.x,
    y: a.y - l.y
  }), d = Je(0.05, n, r);
  if (e.lineDecoration.indexOf("arrow-begin") !== -1) {
    const u = ff(c, d), f = hf(l, u), h = bs(l, 2, f), p = bs(l, -2, f);
    Ut(s, {
      style: "display:block;",
      d: `M${h.x},${h.y} L${l.x},${l.y} L${p.x},${p.y}`
    });
  }
  if (e.lineDecoration.indexOf("arrow-end") !== -1) {
    const u = ff(c, -d), f = hf(a, u), h = bs(a, 2, f), p = bs(a, -2, f);
    Ut(o, {
      style: "display:block;",
      d: `M${h.x},${h.y} L${a.x},${a.y} L${p.x},${p.y}`
    });
  }
}, JO = (t, e, n, r) => {
  Ut(t, {
    ...t.styles,
    fill: "none",
    d: GO(
      e.points.map((i) => ({
        x: Je(i.x, n, r, "width"),
        y: Je(i.y, n, r, "height")
      }))
    )
  });
}, ws = (t) => (e) => Ar(t, { id: e.id }), QO = (t) => {
  const e = Ar("image", {
    id: t.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    opacity: "0"
  });
  return e.onload = () => {
    e.setAttribute("opacity", t.opacity || 1);
  }, e.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    t.src
  ), e;
}, ZO = (t) => {
  const e = Ar("g", {
    id: t.id,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), n = Ar("line");
  e.appendChild(n);
  const r = Ar("path");
  e.appendChild(r);
  const i = Ar("path");
  return e.appendChild(i), e;
}, e2 = {
  image: QO,
  rect: ws("rect"),
  ellipse: ws("ellipse"),
  text: ws("text"),
  path: ws("path"),
  line: ZO
}, t2 = {
  rect: $O,
  ellipse: WO,
  image: jO,
  text: KO,
  path: JO,
  line: XO
}, n2 = (t, e) => e2[t](e), r2 = (t, e, n, r, i) => {
  e !== "path" && (t.rect = zO(n, r, i)), t.styles = FO(n, r, i), t2[e](t, n, r, i);
}, i2 = [
  "x",
  "y",
  "left",
  "top",
  "right",
  "bottom",
  "width",
  "height"
], s2 = (t) => typeof t == "string" && /%/.test(t) ? parseFloat(t) / 100 : t, o2 = (t) => {
  const [e, n] = t, r = n.points ? {} : i2.reduce((i, s) => (i[s] = s2(n[s]), i), {});
  return [
    e,
    {
      zIndex: 0,
      ...n,
      ...r
    }
  ];
}, l2 = (t, e) => t[1].zIndex > e[1].zIndex ? 1 : t[1].zIndex < e[1].zIndex ? -1 : 0, a2 = (t) => t.utils.createView({
  name: "image-preview-markup",
  tag: "svg",
  ignoreRect: !0,
  mixins: {
    apis: ["width", "height", "crop", "markup", "resize", "dirty"]
  },
  write: ({ root: e, props: n }) => {
    if (!n.dirty)
      return;
    const { crop: r, resize: i, markup: s } = n, o = n.width, l = n.height;
    let a = r.width, c = r.height;
    if (i) {
      const { size: h } = i;
      let p = h && h.width, m = h && h.height;
      const g = i.mode, v = i.upscale;
      p && !m && (m = p), m && !p && (p = m);
      const E = a < p && c < m;
      if (!E || E && v) {
        let b = p / a, y = m / c;
        if (g === "force")
          a = p, c = m;
        else {
          let T;
          g === "cover" ? T = Math.max(b, y) : g === "contain" && (T = Math.min(b, y)), a = a * T, c = c * T;
        }
      }
    }
    const d = {
      width: o,
      height: l
    };
    e.element.setAttribute("width", d.width), e.element.setAttribute("height", d.height);
    const u = Math.min(o / a, l / c);
    e.element.innerHTML = "";
    const f = e.query("GET_IMAGE_PREVIEW_MARKUP_FILTER");
    s.filter(f).map(o2).sort(l2).forEach((h) => {
      const [p, m] = h, g = n2(p, m);
      r2(g, p, m, d, u), e.element.appendChild(g);
    });
  }
}), Si = (t, e) => ({ x: t, y: e }), c2 = (t, e) => t.x * e.x + t.y * e.y, pf = (t, e) => Si(t.x - e.x, t.y - e.y), d2 = (t, e) => c2(pf(t, e), pf(t, e)), mf = (t, e) => Math.sqrt(d2(t, e)), gf = (t, e) => {
  const n = t, r = 1.5707963267948966, i = e, s = 1.5707963267948966 - e, o = Math.sin(r), l = Math.sin(i), a = Math.sin(s), c = Math.cos(s), d = n / o, u = d * l, f = d * a;
  return Si(c * u, c * f);
}, u2 = (t, e) => {
  const n = t.width, r = t.height, i = gf(n, e), s = gf(r, e), o = Si(t.x + Math.abs(i.x), t.y - Math.abs(i.y)), l = Si(
    t.x + t.width + Math.abs(s.y),
    t.y + Math.abs(s.x)
  ), a = Si(
    t.x - Math.abs(s.y),
    t.y + t.height - Math.abs(s.x)
  );
  return {
    width: mf(o, l),
    height: mf(o, a)
  };
}, f2 = (t, e, n = 1) => {
  const r = t.height / t.width;
  let i = 1, s = e, o = 1, l = r;
  l > s && (l = s, o = l / r);
  const a = Math.max(i / o, s / l), c = t.width / (n * a * o), d = c * e;
  return {
    width: c,
    height: d
  };
}, Dm = (t, e, n, r) => {
  const i = r.x > 0.5 ? 1 - r.x : r.x, s = r.y > 0.5 ? 1 - r.y : r.y, o = i * 2 * t.width, l = s * 2 * t.height, a = u2(e, n);
  return Math.max(
    a.width / o,
    a.height / l
  );
}, Nm = (t, e) => {
  let n = t.width, r = n * e;
  r > t.height && (r = t.height, n = r / e);
  const i = (t.width - n) * 0.5, s = (t.height - r) * 0.5;
  return {
    x: i,
    y: s,
    width: n,
    height: r
  };
}, h2 = (t, e = {}) => {
  let { zoom: n, rotation: r, center: i, aspectRatio: s } = e;
  s || (s = t.height / t.width);
  const o = f2(t, s, n), l = {
    x: o.width * 0.5,
    y: o.height * 0.5
  }, a = {
    x: 0,
    y: 0,
    width: o.width,
    height: o.height,
    center: l
  }, c = typeof e.scaleToFit > "u" || e.scaleToFit, d = Dm(
    t,
    Nm(a, s),
    r,
    c ? i : { x: 0.5, y: 0.5 }
  ), u = n * d;
  return {
    widthFloat: o.width / u,
    heightFloat: o.height / u,
    width: Math.round(o.width / u),
    height: Math.round(o.height / u)
  };
}, Bt = {
  type: "spring",
  stiffness: 0.5,
  damping: 0.45,
  mass: 10
}, p2 = (t) => t.utils.createView({
  name: "image-bitmap",
  ignoreRect: !0,
  mixins: { styles: ["scaleX", "scaleY"] },
  create: ({ root: e, props: n }) => {
    e.appendChild(n.image);
  }
}), m2 = (t) => t.utils.createView({
  name: "image-canvas-wrapper",
  tag: "div",
  ignoreRect: !0,
  mixins: {
    apis: ["crop", "width", "height"],
    styles: [
      "originX",
      "originY",
      "translateX",
      "translateY",
      "scaleX",
      "scaleY",
      "rotateZ"
    ],
    animations: {
      originX: Bt,
      originY: Bt,
      scaleX: Bt,
      scaleY: Bt,
      translateX: Bt,
      translateY: Bt,
      rotateZ: Bt
    }
  },
  create: ({ root: e, props: n }) => {
    n.width = n.image.width, n.height = n.image.height, e.ref.bitmap = e.appendChildView(
      e.createChildView(p2(t), { image: n.image })
    );
  },
  write: ({ root: e, props: n }) => {
    const { flip: r } = n.crop, { bitmap: i } = e.ref;
    i.scaleX = r.horizontal ? -1 : 1, i.scaleY = r.vertical ? -1 : 1;
  }
}), g2 = (t) => t.utils.createView({
  name: "image-clip",
  tag: "div",
  ignoreRect: !0,
  mixins: {
    apis: [
      "crop",
      "markup",
      "resize",
      "width",
      "height",
      "dirty",
      "background"
    ],
    styles: ["width", "height", "opacity"],
    animations: {
      opacity: { type: "tween", duration: 250 }
    }
  },
  didWriteView: function({ root: e, props: n }) {
    n.background && (e.element.style.backgroundColor = n.background);
  },
  create: ({ root: e, props: n }) => {
    e.ref.image = e.appendChildView(
      e.createChildView(
        m2(t),
        Object.assign({}, n)
      )
    ), e.ref.createMarkup = () => {
      e.ref.markup || (e.ref.markup = e.appendChildView(
        e.createChildView(a2(t), Object.assign({}, n))
      ));
    }, e.ref.destroyMarkup = () => {
      e.ref.markup && (e.removeChildView(e.ref.markup), e.ref.markup = null);
    };
    const r = e.query(
      "GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR"
    );
    r !== null && (r === "grid" ? e.element.dataset.transparencyIndicator = r : e.element.dataset.transparencyIndicator = "color");
  },
  write: ({ root: e, props: n, shouldOptimize: r }) => {
    const { crop: i, markup: s, resize: o, dirty: l, width: a, height: c } = n;
    e.ref.image.crop = i;
    const d = {
      x: 0,
      y: 0,
      width: a,
      height: c,
      center: {
        x: a * 0.5,
        y: c * 0.5
      }
    }, u = {
      width: e.ref.image.width,
      height: e.ref.image.height
    }, f = {
      x: i.center.x * u.width,
      y: i.center.y * u.height
    }, h = {
      x: d.center.x - u.width * i.center.x,
      y: d.center.y - u.height * i.center.y
    }, p = Math.PI * 2 + i.rotation % (Math.PI * 2), m = i.aspectRatio || u.height / u.width, g = typeof i.scaleToFit > "u" || i.scaleToFit, v = Dm(
      u,
      Nm(d, m),
      p,
      g ? i.center : { x: 0.5, y: 0.5 }
    ), E = i.zoom * v;
    s && s.length ? (e.ref.createMarkup(), e.ref.markup.width = a, e.ref.markup.height = c, e.ref.markup.resize = o, e.ref.markup.dirty = l, e.ref.markup.markup = s, e.ref.markup.crop = h2(u, i)) : e.ref.markup && e.ref.destroyMarkup();
    const b = e.ref.image;
    if (r) {
      b.originX = null, b.originY = null, b.translateX = null, b.translateY = null, b.rotateZ = null, b.scaleX = null, b.scaleY = null;
      return;
    }
    b.originX = f.x, b.originY = f.y, b.translateX = h.x, b.translateY = h.y, b.rotateZ = p, b.scaleX = E, b.scaleY = E;
  }
}), y2 = (t) => t.utils.createView({
  name: "image-preview",
  tag: "div",
  ignoreRect: !0,
  mixins: {
    apis: ["image", "crop", "markup", "resize", "dirty", "background"],
    styles: ["translateY", "scaleX", "scaleY", "opacity"],
    animations: {
      scaleX: Bt,
      scaleY: Bt,
      translateY: Bt,
      opacity: { type: "tween", duration: 400 }
    }
  },
  create: ({ root: e, props: n }) => {
    e.ref.clip = e.appendChildView(
      e.createChildView(g2(t), {
        id: n.id,
        image: n.image,
        crop: n.crop,
        markup: n.markup,
        resize: n.resize,
        dirty: n.dirty,
        background: n.background
      })
    );
  },
  write: ({ root: e, props: n, shouldOptimize: r }) => {
    const { clip: i } = e.ref, { image: s, crop: o, markup: l, resize: a, dirty: c } = n;
    if (i.crop = o, i.markup = l, i.resize = a, i.dirty = c, i.opacity = r ? 0 : 1, r || e.rect.element.hidden)
      return;
    const d = s.height / s.width;
    let u = o.aspectRatio || d;
    const f = e.rect.inner.width, h = e.rect.inner.height;
    let p = e.query("GET_IMAGE_PREVIEW_HEIGHT");
    const m = e.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"), g = e.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"), v = e.query("GET_PANEL_ASPECT_RATIO"), E = e.query("GET_ALLOW_MULTIPLE");
    v && !E && (p = f * v, u = v);
    let b = p !== null ? p : Math.max(
      m,
      Math.min(f * u, g)
    ), y = b / u;
    y > f && (y = f, b = y * u), b > h && (b = h, y = h / u), i.width = y, i.height = b;
  }
});
let E2 = `<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
    <defs>
        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">
            <stop offset='50%' stop-color='#000000'/>
            <stop offset='56%' stop-color='#0a0a0a'/>
            <stop offset='63%' stop-color='#262626'/>
            <stop offset='69%' stop-color='#4f4f4f'/>
            <stop offset='75%' stop-color='#808080'/>
            <stop offset='81%' stop-color='#b1b1b1'/>
            <stop offset='88%' stop-color='#dadada'/>
            <stop offset='94%' stop-color='#f6f6f6'/>
            <stop offset='100%' stop-color='#ffffff'/>
        </radialGradient>
        <mask id="mask-__UID__">
            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>
        </mask>
    </defs>
    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>
</svg>`, yf = 0;
const v2 = (t) => t.utils.createView({
  name: "image-preview-overlay",
  tag: "div",
  ignoreRect: !0,
  create: ({ root: e, props: n }) => {
    let r = E2;
    if (document.querySelector("base")) {
      const i = new URL(
        window.location.href.replace(window.location.hash, "")
      ).href;
      r = r.replace(/url\(\#/g, "url(" + i + "#");
    }
    yf++, e.element.classList.add(
      `filepond--image-preview-overlay-${n.status}`
    ), e.element.innerHTML = r.replace(/__UID__/g, yf);
  },
  mixins: {
    styles: ["opacity"],
    animations: {
      opacity: { type: "spring", mass: 25 }
    }
  }
}), b2 = function() {
  self.onmessage = (t) => {
    createImageBitmap(t.data.message.file).then((e) => {
      self.postMessage({ id: t.data.id, message: e }, [e]);
    });
  };
}, w2 = function() {
  self.onmessage = (t) => {
    const e = t.data.message.imageData, n = t.data.message.colorMatrix, r = e.data, i = r.length, s = n[0], o = n[1], l = n[2], a = n[3], c = n[4], d = n[5], u = n[6], f = n[7], h = n[8], p = n[9], m = n[10], g = n[11], v = n[12], E = n[13], b = n[14], y = n[15], T = n[16], w = n[17], C = n[18], S = n[19];
    let O = 0, P = 0, k = 0, D = 0, F = 0;
    for (; O < i; O += 4)
      P = r[O] / 255, k = r[O + 1] / 255, D = r[O + 2] / 255, F = r[O + 3] / 255, r[O] = Math.max(
        0,
        Math.min((P * s + k * o + D * l + F * a + c) * 255, 255)
      ), r[O + 1] = Math.max(
        0,
        Math.min((P * d + k * u + D * f + F * h + p) * 255, 255)
      ), r[O + 2] = Math.max(
        0,
        Math.min((P * m + k * g + D * v + F * E + b) * 255, 255)
      ), r[O + 3] = Math.max(
        0,
        Math.min((P * y + k * T + D * w + F * C + S) * 255, 255)
      );
    self.postMessage({ id: t.data.id, message: e }, [
      e.data.buffer
    ]);
  };
}, T2 = (t, e) => {
  let n = new Image();
  n.onload = () => {
    const r = n.naturalWidth, i = n.naturalHeight;
    n = null, e(r, i);
  }, n.src = t;
}, S2 = {
  1: () => [1, 0, 0, 1, 0, 0],
  2: (t) => [-1, 0, 0, 1, t, 0],
  3: (t, e) => [-1, 0, 0, -1, t, e],
  4: (t, e) => [1, 0, 0, -1, 0, e],
  5: () => [0, 1, 1, 0, 0, 0],
  6: (t, e) => [0, 1, -1, 0, e, 0],
  7: (t, e) => [0, -1, -1, 0, e, t],
  8: (t) => [0, -1, 1, 0, 0, t]
}, I2 = (t, e, n, r) => {
  r !== -1 && t.transform.apply(t, S2[r](e, n));
}, C2 = (t, e, n, r) => {
  e = Math.round(e), n = Math.round(n);
  const i = document.createElement("canvas");
  i.width = e, i.height = n;
  const s = i.getContext("2d");
  return r >= 5 && r <= 8 && ([e, n] = [n, e]), I2(s, e, n, r), s.drawImage(t, 0, 0, e, n), i;
}, Lm = (t) => /^image/.test(t.type) && !/svg/.test(t.type), M2 = 10, O2 = 10, A2 = (t) => {
  const e = Math.min(M2 / t.width, O2 / t.height), n = document.createElement("canvas"), r = n.getContext("2d"), i = n.width = Math.ceil(t.width * e), s = n.height = Math.ceil(t.height * e);
  r.drawImage(t, 0, 0, i, s);
  let o = null;
  try {
    o = r.getImageData(0, 0, i, s).data;
  } catch {
    return null;
  }
  const l = o.length;
  let a = 0, c = 0, d = 0, u = 0;
  for (; u < l; u += 4)
    a += o[u] * o[u], c += o[u + 1] * o[u + 1], d += o[u + 2] * o[u + 2];
  return a = xl(a, l), c = xl(c, l), d = xl(d, l), { r: a, g: c, b: d };
}, xl = (t, e) => Math.floor(Math.sqrt(t / (e / 4))), R2 = (t, e) => (e = e || document.createElement("canvas"), e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0), e), x2 = (t) => {
  let e;
  try {
    e = new ImageData(t.width, t.height);
  } catch {
    e = document.createElement("canvas").getContext("2d").createImageData(t.width, t.height);
  }
  return e.data.set(new Uint8ClampedArray(t.data)), e;
}, _2 = (t) => new Promise((e, n) => {
  const r = new Image();
  r.crossOrigin = "Anonymous", r.onload = () => {
    e(r);
  }, r.onerror = (i) => {
    n(i);
  }, r.src = t;
}), k2 = (t) => {
  const e = v2(t), n = y2(t), { createWorker: r } = t.utils, i = (E, b, y) => new Promise((T) => {
    E.ref.imageData || (E.ref.imageData = y.getContext("2d").getImageData(0, 0, y.width, y.height));
    const w = x2(E.ref.imageData);
    if (!b || b.length !== 20)
      return y.getContext("2d").putImageData(w, 0, 0), T();
    const C = r(w2);
    C.post(
      {
        imageData: w,
        colorMatrix: b
      },
      (S) => {
        y.getContext("2d").putImageData(S, 0, 0), C.terminate(), T();
      },
      [w.data.buffer]
    );
  }), s = (E, b) => {
    E.removeChildView(b), b.image.width = 1, b.image.height = 1, b._destroy();
  }, o = ({ root: E }) => {
    const b = E.ref.images.shift();
    return b.opacity = 0, b.translateY = -15, E.ref.imageViewBin.push(b), b;
  }, l = ({ root: E, props: b, image: y }) => {
    const T = b.id, w = E.query("GET_ITEM", { id: T });
    if (!w)
      return;
    const C = w.getMetadata("crop") || {
      center: {
        x: 0.5,
        y: 0.5
      },
      flip: {
        horizontal: !1,
        vertical: !1
      },
      zoom: 1,
      rotation: 0,
      aspectRatio: null
    }, S = E.query(
      "GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"
    );
    let O, P, k = !1;
    E.query("GET_IMAGE_PREVIEW_MARKUP_SHOW") && (O = w.getMetadata("markup") || [], P = w.getMetadata("resize"), k = !0);
    const D = E.appendChildView(
      E.createChildView(n, {
        id: T,
        image: y,
        crop: C,
        resize: P,
        markup: O,
        dirty: k,
        background: S,
        opacity: 0,
        scaleX: 1.15,
        scaleY: 1.15,
        translateY: 15
      }),
      E.childViews.length
    );
    E.ref.images.push(D), D.opacity = 1, D.scaleX = 1, D.scaleY = 1, D.translateY = 0, setTimeout(() => {
      E.dispatch("DID_IMAGE_PREVIEW_SHOW", { id: T });
    }, 250);
  }, a = ({ root: E, props: b }) => {
    const y = E.query("GET_ITEM", { id: b.id });
    if (!y)
      return;
    const T = E.ref.images[E.ref.images.length - 1];
    T.crop = y.getMetadata("crop"), T.background = E.query(
      "GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR"
    ), E.query("GET_IMAGE_PREVIEW_MARKUP_SHOW") && (T.dirty = !0, T.resize = y.getMetadata("resize"), T.markup = y.getMetadata("markup"));
  }, c = ({ root: E, props: b, action: y }) => {
    if (!/crop|filter|markup|resize/.test(y.change.key) || !E.ref.images.length)
      return;
    const T = E.query("GET_ITEM", { id: b.id });
    if (T) {
      if (/filter/.test(y.change.key)) {
        const w = E.ref.images[E.ref.images.length - 1];
        i(E, y.change.value, w.image);
        return;
      }
      if (/crop|markup|resize/.test(y.change.key)) {
        const w = T.getMetadata("crop"), C = E.ref.images[E.ref.images.length - 1];
        if (w && w.aspectRatio && C.crop && C.crop.aspectRatio && Math.abs(w.aspectRatio - C.crop.aspectRatio) > 1e-5) {
          const S = o({ root: E });
          l({ root: E, props: b, image: R2(S.image) });
        } else
          a({ root: E, props: b });
      }
    }
  }, d = (E) => {
    const y = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    return (y ? parseInt(y[1]) : null) <= 58 ? !1 : "createImageBitmap" in window && Lm(E);
  }, u = ({ root: E, props: b }) => {
    const { id: y } = b, T = E.query("GET_ITEM", y);
    if (!T)
      return;
    const w = URL.createObjectURL(T.file);
    T2(w, (C, S) => {
      E.dispatch("DID_IMAGE_PREVIEW_CALCULATE_SIZE", {
        id: y,
        width: C,
        height: S
      });
    });
  }, f = ({ root: E, props: b }) => {
    const { id: y } = b, T = E.query("GET_ITEM", y);
    if (!T)
      return;
    const w = URL.createObjectURL(T.file), C = () => {
      _2(w).then(S);
    }, S = (O) => {
      URL.revokeObjectURL(w);
      const k = (T.getMetadata("exif") || {}).orientation || -1;
      let { width: D, height: F } = O;
      if (!D || !F)
        return;
      k >= 5 && k <= 8 && ([D, F] = [F, D]);
      const R = Math.max(1, window.devicePixelRatio * 0.75), I = E.query("GET_IMAGE_PREVIEW_ZOOM_FACTOR") * R, A = F / D, L = E.rect.element.width, B = E.rect.element.height;
      let $ = L, K = $ * A;
      A > 1 ? ($ = Math.min(D, L * I), K = $ * A) : (K = Math.min(F, B * I), $ = K / A);
      const ue = C2(
        O,
        $,
        K,
        k
      ), ke = () => {
        const ze = E.query(
          "GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR"
        ) ? A2(data) : null;
        T.setMetadata("color", ze, !0), "close" in O && O.close(), E.ref.overlayShadow.opacity = 1, l({ root: E, props: b, image: ue });
      }, ge = T.getMetadata("filter");
      ge ? i(E, ge, ue).then(ke) : ke();
    };
    if (d(T.file)) {
      const O = r(b2);
      O.post(
        {
          file: T.file
        },
        (P) => {
          if (O.terminate(), !P) {
            C();
            return;
          }
          S(P);
        }
      );
    } else
      C();
  }, h = ({ root: E }) => {
    const b = E.ref.images[E.ref.images.length - 1];
    b.translateY = 0, b.scaleX = 1, b.scaleY = 1, b.opacity = 1;
  }, p = ({ root: E }) => {
    E.ref.overlayShadow.opacity = 1, E.ref.overlayError.opacity = 0, E.ref.overlaySuccess.opacity = 0;
  }, m = ({ root: E }) => {
    E.ref.overlayShadow.opacity = 0.25, E.ref.overlayError.opacity = 1;
  }, g = ({ root: E }) => {
    E.ref.overlayShadow.opacity = 0.25, E.ref.overlaySuccess.opacity = 1;
  }, v = ({ root: E }) => {
    E.ref.images = [], E.ref.imageData = null, E.ref.imageViewBin = [], E.ref.overlayShadow = E.appendChildView(
      E.createChildView(e, {
        opacity: 0,
        status: "idle"
      })
    ), E.ref.overlaySuccess = E.appendChildView(
      E.createChildView(e, {
        opacity: 0,
        status: "success"
      })
    ), E.ref.overlayError = E.appendChildView(
      E.createChildView(e, {
        opacity: 0,
        status: "failure"
      })
    );
  };
  return t.utils.createView({
    name: "image-preview-wrapper",
    create: v,
    styles: ["height"],
    apis: ["height"],
    destroy: ({ root: E }) => {
      E.ref.images.forEach((b) => {
        b.image.width = 1, b.image.height = 1;
      });
    },
    didWriteView: ({ root: E }) => {
      E.ref.images.forEach((b) => {
        b.dirty = !1;
      });
    },
    write: t.utils.createRoute(
      {
        // image preview stated
        DID_IMAGE_PREVIEW_DRAW: h,
        DID_IMAGE_PREVIEW_CONTAINER_CREATE: u,
        DID_FINISH_CALCULATE_PREVIEWSIZE: f,
        DID_UPDATE_ITEM_METADATA: c,
        // file states
        DID_THROW_ITEM_LOAD_ERROR: m,
        DID_THROW_ITEM_PROCESSING_ERROR: m,
        DID_THROW_ITEM_INVALID: m,
        DID_COMPLETE_ITEM_PROCESSING: g,
        DID_START_ITEM_PROCESSING: p,
        DID_REVERT_ITEM_PROCESSING: p
      },
      ({ root: E }) => {
        const b = E.ref.imageViewBin.filter(
          (y) => y.opacity === 0
        );
        E.ref.imageViewBin = E.ref.imageViewBin.filter(
          (y) => y.opacity > 0
        ), b.forEach((y) => s(E, y)), b.length = 0;
      }
    )
  });
}, Pm = (t) => {
  const { addFilter: e, utils: n } = t, { Type: r, createRoute: i, isFile: s } = n, o = k2(t);
  return e("CREATE_VIEW", (l) => {
    const { is: a, view: c, query: d } = l;
    if (!a("file") || !d("GET_ALLOW_IMAGE_PREVIEW"))
      return;
    const u = ({ root: g, props: v }) => {
      const { id: E } = v, b = d("GET_ITEM", E);
      if (!b || !s(b.file) || b.archived)
        return;
      const y = b.file;
      if (!HO(y) || !d("GET_IMAGE_PREVIEW_FILTER_ITEM")(b))
        return;
      const T = "createImageBitmap" in (window || {}), w = d("GET_IMAGE_PREVIEW_MAX_FILE_SIZE");
      if (!T && w && y.size > w)
        return;
      g.ref.imagePreview = c.appendChildView(
        c.createChildView(o, { id: E })
      );
      const C = g.query("GET_IMAGE_PREVIEW_HEIGHT");
      C && g.dispatch("DID_UPDATE_PANEL_HEIGHT", {
        id: b.id,
        height: C
      });
      const S = !T && y.size > d("GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE");
      g.dispatch("DID_IMAGE_PREVIEW_CONTAINER_CREATE", { id: E }, S);
    }, f = (g, v) => {
      if (!g.ref.imagePreview)
        return;
      let { id: E } = v;
      const b = g.query("GET_ITEM", { id: E });
      if (!b)
        return;
      const y = g.query("GET_PANEL_ASPECT_RATIO"), T = g.query("GET_ITEM_PANEL_ASPECT_RATIO"), w = g.query("GET_IMAGE_PREVIEW_HEIGHT");
      if (y || T || w)
        return;
      let { imageWidth: C, imageHeight: S } = g.ref;
      if (!C || !S)
        return;
      const O = g.query("GET_IMAGE_PREVIEW_MIN_HEIGHT"), P = g.query("GET_IMAGE_PREVIEW_MAX_HEIGHT"), D = (b.getMetadata("exif") || {}).orientation || -1;
      if (D >= 5 && D <= 8 && ([C, S] = [S, C]), !Lm(b.file) || g.query("GET_IMAGE_PREVIEW_UPSCALE")) {
        const L = 2048 / C;
        C *= L, S *= L;
      }
      const F = S / C, R = (b.getMetadata("crop") || {}).aspectRatio || F;
      let G = Math.max(
        O,
        Math.min(S, P)
      );
      const I = g.rect.element.width, A = Math.min(
        I * R,
        G
      );
      g.dispatch("DID_UPDATE_PANEL_HEIGHT", {
        id: b.id,
        height: A
      });
    }, h = ({ root: g }) => {
      g.ref.shouldRescale = !0;
    }, p = ({ root: g, action: v }) => {
      v.change.key === "crop" && (g.ref.shouldRescale = !0);
    }, m = ({ root: g, action: v }) => {
      g.ref.imageWidth = v.width, g.ref.imageHeight = v.height, g.ref.shouldRescale = !0, g.ref.shouldDrawPreview = !0, g.dispatch("KICK");
    };
    c.registerWriter(
      i(
        {
          DID_RESIZE_ROOT: h,
          DID_STOP_RESIZE: h,
          DID_LOAD_ITEM: u,
          DID_IMAGE_PREVIEW_CALCULATE_SIZE: m,
          DID_UPDATE_ITEM_METADATA: p
        },
        ({ root: g, props: v }) => {
          g.ref.imagePreview && (g.rect.element.hidden || (g.ref.shouldRescale && (f(g, v), g.ref.shouldRescale = !1), g.ref.shouldDrawPreview && (requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              g.dispatch("DID_FINISH_CALCULATE_PREVIEWSIZE", {
                id: v.id
              });
            });
          }), g.ref.shouldDrawPreview = !1)));
        }
      )
    );
  }), {
    options: {
      // Enable or disable image preview
      allowImagePreview: [!0, r.BOOLEAN],
      // filters file items to determine which are shown as preview
      imagePreviewFilterItem: [() => !0, r.FUNCTION],
      // Fixed preview height
      imagePreviewHeight: [null, r.INT],
      // Min image height
      imagePreviewMinHeight: [44, r.INT],
      // Max image height
      imagePreviewMaxHeight: [256, r.INT],
      // Max size of preview file for when createImageBitmap is not supported
      imagePreviewMaxFileSize: [null, r.INT],
      // The amount of extra pixels added to the image preview to allow comfortable zooming
      imagePreviewZoomFactor: [2, r.INT],
      // Should we upscale small images to fit the max bounding box of the preview area
      imagePreviewUpscale: [!1, r.BOOLEAN],
      // Max size of preview file that we allow to try to instant preview if createImageBitmap is not supported, else image is queued for loading
      imagePreviewMaxInstantPreviewFileSize: [1e6, r.INT],
      // Style of the transparancy indicator used behind images
      imagePreviewTransparencyIndicator: [null, r.STRING],
      // Enables or disables reading average image color
      imagePreviewCalculateAverageImageColor: [!1, r.BOOLEAN],
      // Enables or disables the previewing of markup
      imagePreviewMarkupShow: [!0, r.BOOLEAN],
      // Allows filtering of markup to only show certain shapes
      imagePreviewMarkupFilter: [() => !0, r.FUNCTION]
    }
  };
}, D2 = typeof window < "u" && typeof window.document < "u";
D2 && document.dispatchEvent(
  new CustomEvent("FilePond:pluginloaded", { detail: Pm })
);
const N2 = PO(
  km,
  Pm
), L2 = {
  components: {
    NodeViewWrapper: bp,
    NodeViewContent: vp,
    FilePond: N2
  },
  data() {
    return { myFiles: ["index.html"] };
  },
  props: Tp,
  mounted() {
  },
  methods: {
    handleFilePondInit: function() {
    }
  }
}, P2 = { class: "content" };
function B2(t, e, n, r, i, s) {
  const o = Vt("file-pond"), l = Vt("node-view-content"), a = Vt("node-view-wrapper");
  return Z(), st(a, { class: "relative border-2 border-slate-400 rounded p-6" }, {
    default: De(() => [
      He("div", P2, [
        $e(o, {
          name: "test",
          ref: "pond",
          "class-name": "my-pond",
          "label-idle": "Drop files here...",
          "allow-multiple": "true",
          "allow-reorder": "true",
          "accepted-file-types": "image/jpeg, image/png",
          modelValue: i.myFiles,
          "onUpdate:modelValue": e[0] || (e[0] = (c) => i.myFiles = c),
          onInit: s.handleFilePondInit
        }, null, 8, ["modelValue", "onInit"]),
        $e(l, { class: "bg-white p-2 border-2 rounded h-14" })
      ])
    ]),
    _: 1
  });
}
const H2 = /* @__PURE__ */ ar(L2, [["render", B2]]), V2 = oe.create({
  name: "filepondGallery",
  group: "block",
  // atom: false,
  content: "inline*",
  addAttributes() {
    return {
      files: {
        default: []
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "filepond-gallery"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["filepond-gallery", ne(t)];
  },
  addNodeView() {
    return Sp(H2);
  }
}), F2 = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/, z2 = oe.create({
  name: "figure",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  draggable: !0,
  isolating: !0,
  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (t) => {
          var e;
          return (e = t.querySelector("img")) == null ? void 0 : e.getAttribute("src");
        }
      },
      alt: {
        default: null,
        parseHTML: (t) => {
          var e;
          return (e = t.querySelector("img")) == null ? void 0 : e.getAttribute("alt");
        }
      },
      title: {
        default: null,
        parseHTML: (t) => {
          var e;
          return (e = t.querySelector("img")) == null ? void 0 : e.getAttribute("title");
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "figure",
        contentElement: "figcaption"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "figure",
      ne(this.options.HTMLAttributes, {
        class: "border border-slate-100"
      }),
      [
        "img",
        ne(t, {
          draggable: !1,
          contenteditable: !1
        })
      ],
      [
        "figcaption",
        ne(this.options.HTMLAttributes, {
          class: "p-2"
        })
      ]
    ];
  },
  addCommands() {
    return {
      setFigure: ({ caption: t, ...e }) => ({ chain: n }) => n().insertContent({
        type: this.name,
        attrs: e,
        content: t ? [{ type: "text", text: t }] : []
      }).command(({ tr: r, commands: i }) => {
        const { doc: s, selection: o } = r, l = s.resolve(o.to - 2).end();
        return i.setTextSelection(l);
      }).run(),
      imageToFigure: () => ({ tr: t, commands: e }) => {
        const { doc: n, selection: r } = t, { from: i, to: s } = r, o = Yl(
          n,
          { from: i, to: s },
          (a) => a.type.name === "image"
        );
        if (!o.length)
          return !1;
        const l = new Md(t);
        return e.forEach(o, ({ node: a, pos: c }) => {
          const d = l.map(c);
          if (d.deleted)
            return !1;
          const u = {
            from: d.position,
            to: d.position + a.nodeSize
          };
          return e.insertContentAt(u, {
            type: this.name,
            attrs: {
              src: a.attrs.src
            }
          });
        });
      },
      figureToImage: () => ({ tr: t, commands: e }) => {
        const { doc: n, selection: r } = t, { from: i, to: s } = r, o = Yl(
          n,
          { from: i, to: s },
          (a) => a.type.name === this.name
        );
        if (!o.length)
          return !1;
        const l = new Md(t);
        return e.forEach(o, ({ node: a, pos: c }) => {
          const d = l.map(c);
          if (d.deleted)
            return !1;
          const u = {
            from: d.position,
            to: d.position + a.nodeSize
          };
          return e.insertContentAt(u, {
            type: "image",
            attrs: {
              src: a.attrs.src
            }
          });
        });
      }
    };
  },
  addInputRules() {
    return [
      Kh({
        find: F2,
        type: this.type,
        getAttributes: (t) => {
          const [, e, n, r] = t;
          return { src: e, alt: n, title: r };
        }
      })
    ];
  }
}), G2 = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/, U2 = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/g, $2 = (t) => t.match(G2), Ef = (t) => t ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/", W2 = (t) => {
  const {
    url: e,
    allowFullscreen: n,
    autoplay: r,
    ccLanguage: i,
    ccLoadPolicy: s,
    controls: o,
    disableKBcontrols: l,
    enableIFrameApi: a,
    endTime: c,
    interfaceLanguage: d,
    ivLoadPolicy: u,
    loop: f,
    modestBranding: h,
    nocookie: p,
    origin: m,
    playlist: g,
    progressBarColor: v,
    startAt: E
  } = t;
  if (e.includes("/embed/"))
    return e;
  if (e.includes("youtu.be")) {
    const C = e.split("/").pop();
    return C ? `${Ef(p)}${C}` : null;
  }
  const y = /v=([-\w]+)/gm.exec(e);
  if (!y || !y[1])
    return null;
  let T = `${Ef(p)}${y[1]}`;
  const w = [];
  return n === !1 && w.push("fs=0"), r && w.push("autoplay=1"), i && w.push(`cc_lang_pref=${i}`), s && w.push("cc_load_policy=1"), o || w.push("controls=0"), l && w.push("disablekb=1"), a && w.push("enablejsapi=1"), c && w.push(`end=${c}`), d && w.push(`hl=${d}`), u && w.push(`iv_load_policy=${u}`), f && w.push("loop=1"), h && w.push("modestbranding=1"), m && w.push(`origin=${m}`), g && w.push(`playlist=${g}`), E && w.push(`start=${E}`), v && w.push(`color=${v}`), w.length && (T += `?${w.join("&")}`), T;
}, q2 = oe.create({
  name: "youtube",
  addOptions() {
    return {
      addPasteHandler: !0,
      allowFullscreen: !0,
      autoplay: !1,
      ccLanguage: void 0,
      ccLoadPolicy: void 0,
      controls: !0,
      disableKBcontrols: !1,
      enableIFrameApi: !1,
      endTime: 0,
      height: 480,
      interfaceLanguage: void 0,
      ivLoadPolicy: 0,
      loop: !1,
      modestBranding: !1,
      HTMLAttributes: {},
      inline: !1,
      nocookie: !1,
      origin: "",
      playlist: "",
      progressBarColor: void 0,
      width: 640
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  content: "inline*",
  draggable: !0,
  isolating: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      start: {
        default: 0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: this.options.height
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "figure[data-youtube-video]",
        contentElement: "figcaption"
      }
    ];
  },
  addCommands() {
    return {
      setYoutubeVideo: (t) => ({ commands: e }) => $2(t.src) ? e.insertContent({
        type: this.name,
        attrs: t
      }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      JE({
        find: U2,
        type: this.type,
        getAttributes: (t) => ({ src: t.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: t }) {
    const e = W2({
      url: t.src,
      allowFullscreen: this.options.allowFullscreen,
      autoplay: this.options.autoplay,
      ccLanguage: this.options.ccLanguage,
      ccLoadPolicy: this.options.ccLoadPolicy,
      controls: this.options.controls,
      disableKBcontrols: this.options.disableKBcontrols,
      enableIFrameApi: this.options.enableIFrameApi,
      endTime: this.options.endTime,
      interfaceLanguage: this.options.interfaceLanguage,
      ivLoadPolicy: this.options.ivLoadPolicy,
      loop: this.options.loop,
      modestBranding: this.options.modestBranding,
      nocookie: this.options.nocookie,
      origin: this.options.origin,
      playlist: this.options.playlist,
      progressBarColor: this.options.progressBarColor,
      startAt: t.start || 0
    }), n = t["data-block-width"];
    return t["data-block-width"] = null, t.src = e, [
      "figure",
      {
        "data-youtube-video": "",
        "data-block-width": n,
        class: "bg-slate-100 pb-4 text-center"
      },
      [
        "iframe",
        ne(
          this.options.HTMLAttributes,
          {
            contenteditable: !1,
            draggable: !1,
            width: this.options.width,
            height: this.options.height,
            allowfullscreen: this.options.allowFullscreen,
            autoplay: this.options.autoplay,
            ccLanguage: this.options.ccLanguage,
            ccLoadPolicy: this.options.ccLoadPolicy,
            disableKBcontrols: this.options.disableKBcontrols,
            enableIFrameApi: this.options.enableIFrameApi,
            endTime: this.options.endTime,
            interfaceLanguage: this.options.interfaceLanguage,
            ivLoadPolicy: this.options.ivLoadPolicy,
            loop: this.options.loop,
            modestBranding: this.options.modestBranding,
            origin: this.options.origin,
            playlist: this.options.playlist,
            progressBarColor: this.options.progressBarColor
          },
          t
        )
      ],
      ["figcaption", 0]
    ];
  }
});
function vf({ types: t, node: e }) {
  return Array.isArray(t) && t.includes(e.type) || e.type === t;
}
const j2 = be.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const t = new Ie(this.name), e = Object.entries(this.editor.schema.nodes).map(([, n]) => n).filter((n) => this.options.notAfter.includes(n.name));
    return [
      new me({
        key: t,
        appendTransaction: (n, r, i) => {
          const { doc: s, tr: o, schema: l } = i, a = t.getState(i), c = s.content.size, d = l.nodes[this.options.node];
          if (a)
            return o.insert(c, d.create());
        },
        state: {
          init: (n, r) => {
            const i = r.tr.doc.lastChild;
            return !vf({ node: i, types: e });
          },
          apply: (n, r) => {
            if (!n.docChanged)
              return r;
            const i = n.doc.lastChild;
            return !vf({ node: i, types: e });
          }
        }
      })
    ];
  }
});
function Y2(t) {
  var e;
  const { char: n, allowSpaces: r, allowedPrefixes: i, startOfLine: s, $position: o } = t, l = XE(n), a = new RegExp(`\\s${l}$`), c = s ? "^" : "", d = r ? new RegExp(`${c}${l}.*?(?=\\s${l}|$)`, "gm") : new RegExp(`${c}(?:^)?${l}[^\\s${l}]*`, "gm"), u = ((e = o.nodeBefore) === null || e === void 0 ? void 0 : e.isText) && o.nodeBefore.text;
  if (!u)
    return null;
  const f = o.pos - u.length, h = Array.from(u.matchAll(d)).pop();
  if (!h || h.input === void 0 || h.index === void 0)
    return null;
  const p = h.input.slice(Math.max(0, h.index - 1), h.index), m = new RegExp(`^[${i == null ? void 0 : i.join("")}\0]?$`).test(p);
  if (i !== null && !m)
    return null;
  const g = f + h.index;
  let v = g + h[0].length;
  return r && a.test(u.slice(v - 1, v + 1)) && (h[0] += " ", v += 1), g < o.pos && v >= o.pos ? {
    range: {
      from: g,
      to: v
    },
    query: h[0].slice(n.length),
    text: h[0]
  } : null;
}
const K2 = new Ie("suggestion");
function X2({ pluginKey: t = K2, editor: e, char: n = "@", allowSpaces: r = !1, allowedPrefixes: i = [" "], startOfLine: s = !1, decorationTag: o = "span", decorationClass: l = "suggestion", command: a = () => null, items: c = () => [], render: d = () => ({}), allow: u = () => !0 }) {
  let f;
  const h = d == null ? void 0 : d(), p = new me({
    key: t,
    view() {
      return {
        update: async (m, g) => {
          var v, E, b, y, T, w, C;
          const S = (v = this.key) === null || v === void 0 ? void 0 : v.getState(g), O = (E = this.key) === null || E === void 0 ? void 0 : E.getState(m.state), P = S.active && O.active && S.range.from !== O.range.from, k = !S.active && O.active, D = S.active && !O.active, F = !k && !D && S.query !== O.query, R = k || P, G = F && !P, I = D || P;
          if (!R && !G && !I)
            return;
          const A = I && !R ? S : O, L = m.dom.querySelector(`[data-decoration-id="${A.decorationId}"]`);
          f = {
            editor: e,
            range: A.range,
            query: A.query,
            text: A.text,
            items: [],
            command: (B) => {
              a({
                editor: e,
                range: A.range,
                props: B
              });
            },
            decorationNode: L,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: L ? () => {
              var B;
              const { decorationId: $ } = (B = this.key) === null || B === void 0 ? void 0 : B.getState(e.state), K = m.dom.querySelector(`[data-decoration-id="${$}"]`);
              return (K == null ? void 0 : K.getBoundingClientRect()) || null;
            } : null
          }, R && ((b = h == null ? void 0 : h.onBeforeStart) === null || b === void 0 || b.call(h, f)), G && ((y = h == null ? void 0 : h.onBeforeUpdate) === null || y === void 0 || y.call(h, f)), (G || R) && (f.items = await c({
            editor: e,
            query: A.query
          })), I && ((T = h == null ? void 0 : h.onExit) === null || T === void 0 || T.call(h, f)), G && ((w = h == null ? void 0 : h.onUpdate) === null || w === void 0 || w.call(h, f)), R && ((C = h == null ? void 0 : h.onStart) === null || C === void 0 || C.call(h, f));
        },
        destroy: () => {
          var m;
          f && ((m = h == null ? void 0 : h.onExit) === null || m === void 0 || m.call(h, f));
        }
      };
    },
    state: {
      // Initialize the plugin's internal state.
      init() {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      // Apply changes to the plugin state from a view transaction.
      apply(m, g, v, E) {
        const { isEditable: b } = e, { composing: y } = e.view, { selection: T } = m, { empty: w, from: C } = T, S = { ...g };
        if (S.composing = y, b && (w || e.view.composing)) {
          (C < g.range.from || C > g.range.to) && !y && !g.composing && (S.active = !1);
          const O = Y2({
            char: n,
            allowSpaces: r,
            allowedPrefixes: i,
            startOfLine: s,
            $position: T.$from
          }), P = `id_${Math.floor(Math.random() * 4294967295)}`;
          O && u({ editor: e, state: E, range: O.range }) ? (S.active = !0, S.decorationId = g.decorationId ? g.decorationId : P, S.range = O.range, S.query = O.query, S.text = O.text) : S.active = !1;
        } else
          S.active = !1;
        return S.active || (S.decorationId = null, S.range = { from: 0, to: 0 }, S.query = null, S.text = null), S;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(m, g) {
        var v;
        const { active: E, range: b } = p.getState(m.state);
        return E && ((v = h == null ? void 0 : h.onKeyDown) === null || v === void 0 ? void 0 : v.call(h, { view: m, event: g, range: b })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(m) {
        const { active: g, range: v, decorationId: E } = p.getState(m);
        return g ? se.create(m.doc, [
          Ve.inline(v.from, v.to, {
            nodeName: o,
            class: l,
            "data-decoration-id": E
          })
        ]) : null;
      }
    }
  });
  return p;
}
const J2 = be.create({
  name: "commands",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        startOfLine: !0,
        command: ({ editor: t, range: e, props: n }) => {
          n.insertCommand({ editor: t, range: e });
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      X2({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}), Q2 = {
  props: {
    items: {
      type: Array,
      required: !0
    },
    command: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  watch: {
    items() {
      this.selectedIndex = 0;
    }
  },
  computed: {
    itemsWithInsertCommand() {
      return this.items.filter((t) => t.insertCommand);
    }
  },
  methods: {
    onKeyDown({ event: t }) {
      return t.key === "ArrowUp" ? (this.upHandler(), !0) : t.key === "ArrowDown" ? (this.downHandler(), !0) : t.key === "Enter" ? (this.enterHandler(), !0) : !1;
    },
    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
    },
    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },
    enterHandler() {
      this.selectItem(this.selectedIndex);
    },
    selectItem(t) {
      const e = this.items[t];
      e && this.command(e);
    }
  }
}, Z2 = { class: "bg-white border border-slate-400 rounded overflow-hidden shadow" }, eA = ["onClick"], tA = ["innerHTML"], nA = {
  key: 1,
  class: "p-2 text-slate-600 text-sm w-full"
};
function rA(t, e, n, r, i, s) {
  return Z(), ce("div", Z2, [
    n.items.length ? (Z(!0), ce(Xt, { key: 0 }, Jt(s.itemsWithInsertCommand, (o, l) => (Z(), ce("button", {
      class: En(["flex flex-row gap-2 items-center w-full p-2 pr-12 text-slate-600 hover:bg-slate-50 text-sm", { "bg-slate-100": l === i.selectedIndex }]),
      key: l,
      onClick: (a) => s.selectItem(l)
    }, [
      He("span", {
        innerHTML: o.icon
      }, null, 8, tA),
      Xm(" " + Sf(o.title), 1)
    ], 10, eA))), 128)) : (Z(), ce("div", nA, "No result"))
  ]);
}
const iA = /* @__PURE__ */ ar(Q2, [["render", rA]]);
function Bm() {
  return [
    {
      name: "paragraph",
      title: "Paragraph",
      icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"></path></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).setNode("paragraph").run();
      },
      convertCommand: (t) => {
        t.chain().focus().setParagraph().run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (t) => t.isActive("paragraph")
    },
    {
      title: "Heading",
      name: "heading",
      icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"></path></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).setNode("heading", { level: 2 }).run();
      },
      convertCommand: (t) => {
        t.chain().focus().toggleHeading({ level: 2 }).run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (t) => t.isActive("heading"),
      tools: [
        {
          title: "Heading 1",
          name: "heading1",
          icon: '<svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z"></path></svg>',
          command: (t) => {
            t.chain().focus().toggleHeading({ level: 1 }).run();
          },
          isActiveTest: (t) => t.isActive("heading", { level: 1 })
        },
        {
          title: "Heading 2",
          name: "heading2",
          icon: '<svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z"></path></svg>',
          command: (t) => {
            t.chain().focus().toggleHeading({ level: 2 }).run();
          },
          isActiveTest: (t) => t.isActive("heading", { level: 2 })
        },
        {
          title: "Heading 3",
          name: "heading3",
          icon: '<svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z"></path></svg>',
          command: (t) => {
            t.chain().focus().toggleHeading({ level: 3 }).run();
          },
          isActiveTest: (t) => t.isActive("heading", { level: 3 })
        }
      ]
    },
    {
      title: "List",
      name: "list",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="0" stroke="currentColor" fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).toggleBulletList().run();
      },
      convertCommand: (t) => {
        t.chain().focus().toggleBulletList().run();
      },
      hasInlineTools: !0,
      isActiveTest: (t) => t.isActive("bulletList") || t.isActive("orderedList"),
      tools: [
        {
          title: "Bullet list",
          name: "bulletList",
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1"  fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
          command: (t) => {
            t.chain().focus().toggleBulletList().run();
          },
          isActiveTest: (t) => t.isActive("bulletList")
        },
        {
          title: "Ordered list",
          name: "orderedList",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M11 6h9M11 12h9M12 18h8M4 16a2 2 0 114 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6"/></svg>',
          command: (t) => {
            t.chain().focus().toggleOrderedList().run();
          },
          isActiveTest: (t) => t.isActive("orderedList")
        },
        {
          title: "Sink list item",
          name: "sinklistitem",
          icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"></path></svg>',
          command: (t) => {
            t.chain().focus().sinkListItem("listItem").run();
          },
          isDisabledTest: (t) => !t.can().sinkListItem("listItem")
        },
        {
          title: "Lift list item",
          name: "liftlistitem",
          icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"></path></svg>',
          command: (t) => {
            t.chain().focus().liftListItem("listItem").run();
          },
          isDisabledTest: (t) => !t.can().liftListItem("listItem")
        }
      ]
    },
    {
      title: "Code block",
      name: "codeBlock",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).toggleCodeBlock().run();
      },
      hasInlineTools: !1,
      convertCommand: (t) => {
        t.chain().focus().toggleCodeBlock().run();
      },
      isActiveTest: (t) => t.isActive("codeBlock")
    },
    {
      title: "Blockquote",
      name: "blockquote",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).toggleBlockquote().run();
      },
      hasInlineTools: !0,
      canBeConverted: !0,
      convertCommand: (t) => {
        t.chain().focus().toggleBlockquote().run();
      },
      isActiveTest: (t) => t.isActive("blockquote")
    },
    {
      title: "Horizontal rule",
      name: "horizontalRule",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"></path></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).setHorizontalRule().run();
      },
      hasInlineTools: !1,
      isActiveTest: (t) => t.isActive("horizontalRule")
    },
    {
      title: "Table",
      name: "table",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"></path></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run();
      },
      hasInlineTools: !0,
      isActiveTest: (t) => t.isActive("table"),
      tools: [
        {
          title: "Toggle header row",
          name: "toggleHeaderRow",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H20.212V4.182H.737z" /></svg>',
          command: (t) => {
            t.commands.toggleHeaderRow();
          }
        },
        {
          title: "Toggle header column",
          name: "toggleHeaderColumn",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H7.042V15.369000000000002H.737z" /></svg>',
          command: (t) => {
            t.commands.toggleHeaderColumn();
          }
        },
        {
          title: "Merge or split cells",
          name: "mergeOrSplit",
          icon: '<svg fill="none" height="21" width="21" viewBox="0 0 48 48" stroke="currentColor" width="48" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-width="4"><path d="m20 14v-9c0-.55228-.4477-1-1-1h-14c-.55228 0-1 .44772-1 1v38c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1v-9"/><path d="m28 34v9c0 .5523.4477 1 1 1h14c.5523 0 1-.4477 1-1v-38c0-.55228-.4477-1-1-1h-14c-.5523 0-1 .44772-1 1v9"/><path d="m28 24h16"/><path d="m5 24h15"/><path d="m32.7485 28.8183-1.591-1.5909-3.1819-3.182 3.1819-3.182 1.591-1.591" stroke-linejoin="round"/><path d="m15.375 28.8183 1.591-1.5909 3.182-3.182-3.182-3.182-1.591-1.591" stroke-linejoin="round"/></g></svg>',
          command: (t) => {
            t.commands.mergeOrSplit();
          }
        }
      ]
    },
    {
      name: "vueComponent",
      title: "Sample Vue component",
      icon: '<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M24.3,4h-4.8L16,9.6L13,4H2l14,24L30,4L24.3,4z M5.5,6h3.4L16,18.4L23.1,6h3.4L16,24L5.5,6z"/></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).insertContent('<div><vue-component count="0"></vue-component></div>').run();
      },
      //   convertCommand: (editor) => {
      //     editor.chain().focus().setParagraph().run();
      //   },
      hasInlineTools: !1,
      isActiveTest: (t) => t.isActive("vueComponent")
    },
    {
      name: "filepondGallery",
      title: "Gallery",
      icon: '<svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M24.3,4h-4.8L16,9.6L13,4H2l14,24L30,4L24.3,4z M5.5,6h3.4L16,18.4L23.1,6h3.4L16,24L5.5,6z"/></svg>',
      insertCommand: ({ editor: t, range: e }) => {
        t.chain().focus().deleteRange(e).insertContent("<div><filepond-gallery></filepond-gallery></div>").run();
      }
    },
    {
      title: "YouTube",
      name: "youtube",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" version="1.1" viewBox="0 0 461.001 461.001"><path fill="currentColor" d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"/></svg>',
      hasInlineTools: !1,
      canBeConverted: !1,
      isActiveTest: (t) => t.isActive("youtube")
    }
  ];
}
const sA = {
  items: ({ query: t }) => Bm().filter(
    (e) => e.title.toLowerCase().startsWith(t.toLowerCase())
  ),
  render: () => {
    let t, e;
    return {
      onStart: (n) => {
        t = new wp(iA, {
          // using vue 2:
          // parent: this,
          // propsData: props,
          props: n,
          editor: n.editor
        }), n.clientRect && (e = cr("body", {
          getReferenceClientRect: n.clientRect,
          appendTo: () => document.body,
          content: t.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        }));
      },
      onUpdate(n) {
        t.updateProps(n), n.clientRect && e[0].setProps({
          getReferenceClientRect: n.clientRect
        });
      },
      onKeyDown(n) {
        var r;
        return n.event.key === "Escape" ? (e[0].hide(), !0) : (r = t.ref) == null ? void 0 : r.onKeyDown(n);
      },
      onExit() {
        e[0].destroy(), t.destroy();
      }
    };
  }
};
function oA() {
  return [
    {
      title: "Bold",
      icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"></path></svg>',
      command: (t) => {
        t.chain().focus().toggleBold().run();
      },
      isActiveTest: (t) => t.isActive("bold")
    },
    {
      title: "Italic",
      icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.5 5L10 19h1.9l2.5-14z"></path></svg>',
      command: (t) => {
        t.chain().focus().toggleItalic().run();
      },
      isActiveTest: (t) => t.isActive("italic")
    },
    {
      title: "Link",
      icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"></path></svg>',
      command: (t) => {
        const e = t.getAttributes("link").href, n = window.prompt("URL", e);
        if (n !== null) {
          if (n === "") {
            t.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
          }
          t.chain().focus().extendMarkRange("link").setLink({ href: n }).run();
        }
      },
      isActiveTest: (t) => t.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "Unlink",
      icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"></path></svg>',
      command: (t) => t.chain().focus().unsetLink().run(),
      isActiveTest: (t) => !t.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "More",
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path></svg>',
      isActiveTest: () => !1,
      command: () => null,
      tools: [
        {
          title: "Strikethrough",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"></path></svg>',
          command: (t) => t.commands.toggleStrike(),
          isActiveTest: (t) => t.isActive("strike")
        },
        {
          title: "Inline code",
          icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"></path></svg>',
          command: (t) => t.commands.toggleCode(),
          isActiveTest: (t) => t.isActive("code")
        },
        {
          title: "Highlight",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
          command: (t) => t.commands.toggleHighlight(),
          isActiveTest: (t) => t.isActive("highlight")
        },
        {
          title: "Subscript",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (t) => t.commands.toggleSubscript(),
          isActiveTest: (t) => t.isActive("subscript")
        },
        {
          title: "Superscript",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (t) => t.commands.toggleSuperscript(),
          isActiveTest: (t) => t.isActive("superscript")
        }
      ]
    }
  ];
}
function lA() {
  return [
    {
      title: "Add row before",
      name: "addRowBefore",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (t) => {
        t.commands.addRowBefore();
      }
    },
    {
      title: "Add row after",
      name: "addRowAfter",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"></path></svg>',
      command: (t) => {
        t.commands.addRowAfter();
      }
    },
    {
      title: "Delete row",
      name: "deleteRow",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"></path></svg>',
      command: (t) => {
        t.commands.deleteRow();
      }
    }
  ];
}
function aA() {
  return [
    {
      title: "Add column before",
      name: "addColumnBefore",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (t) => {
        t.commands.addColumnBefore();
      }
    },
    {
      title: "Add column after",
      name: "addColumnAfter",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"></path></svg>',
      command: (t) => {
        t.commands.addColumnAfter();
      }
    },
    {
      title: "Delete column",
      name: "deleteColumn",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"></path></svg>',
      command: (t) => {
        t.commands.deleteColumn();
      }
    }
  ];
}
function cA() {
  return [
    [
      {
        title: "Align text left",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"></path></svg>',
        command: (t) => {
          t.chain().focus().setTextAlign("left").run();
        },
        isActiveTest: (t) => t.isActive({ textAlign: "left" })
      },
      {
        title: "Align text centre",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"></path></svg>',
        command: (t) => {
          t.chain().focus().setTextAlign("center").run();
        },
        isActiveTest: (t) => t.isActive({ textAlign: "center" })
      },
      {
        title: "Align text right",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"></path></svg>',
        command: (t) => {
          t.chain().focus().setTextAlign("right").run();
        },
        isActiveTest: (t) => t.isActive({ textAlign: "right" })
      }
    ],
    [
      {
        title: "Normal width",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"></path></svg>',
        command: (t) => {
          t.chain().focus().setBlockWidth("normal").run();
        },
        isActiveTest: (t, e) => t.isActive(e, { blockWidth: "normal" })
      },
      {
        title: "Wide width",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"></path></svg>',
        command: (t) => {
          t.chain().focus().setBlockWidth("wide").run();
        },
        isActiveTest: (t, e) => t.isActive(e, { blockWidth: "wide" })
      },
      {
        title: "Full width",
        icon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"></path></svg>',
        command: (t) => {
          t.chain().focus().setBlockWidth("full").run();
        },
        isActiveTest: (t, e) => t.isActive(e, { blockWidth: "full" })
      }
    ]
  ];
}
const dA = {
  props: ["modelValue", "editorClass", "mode"],
  components: {
    BubbleMenu: Db,
    EditorContent: Lb,
    MenuButton: ng,
    MenuItem: og,
    MenuDropdownButton: dg
  },
  data() {
    return {
      dragging: !1,
      draggedNodePosition: null,
      editor: null,
      blockTools: Bm(),
      inlineTools: oA(),
      alignmentTools: cA(),
      tableRowTools: lA(),
      tableColumnTools: aA(),
      topLevelNodeType: null,
      currentBlockTool: null,
      isTyping: !1,
      showMainToolbar: !1,
      moreIcon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/></svg>',
      deleteIcon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>',
      moreIconRound: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    };
  },
  created: function() {
    window.addEventListener("mousemove", () => this.cancelTyping());
  },
  unmounted: function() {
    window.removeEventListener("mousemove", () => this.cancelTyping());
  },
  mounted() {
    this.editor = new Nb({
      extensions: [
        Nw.configure({
          blockquote: !1
        }),
        Ip.extend({
          content: "paragraph"
        }),
        CS,
        V2,
        j2,
        cS,
        dS,
        hS,
        z2,
        J2.configure({
          suggestion: sA
        }),
        nT.configure({
          openOnClick: !1
        }),
        rT.configure({
          placeholder: "Type / to choose a block"
        }),
        vS.configure({
          types: ["horizontalRule", "blockquote", "youtube"]
        }),
        aS.configure({
          types: ["heading", "paragraph"]
        }),
        iS.configure({
          resizable: !0
        }),
        lS.extend({
          allowGapCursor: !1
        }),
        oS.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        sS.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        q2.configure({
          inline: !1,
          HTMLAttributes: {
            class: "aspect-video h-auto w-full"
          }
        })
      ],
      onUpdate: () => {
        this.updateToolbar(), this.$emit(
          "update:modelValue",
          this.mode == "json" ? this.editor.getJSON().content : this.editor.getHTML()
        );
      },
      onSelectionUpdate: () => {
        this.updateToolbar();
      }
    }), this.editor.commands.setContent(
      this.mode == "json" ? {
        type: "doc",
        content: this.modelValue
      } : this.modelValue
    );
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  watch: {
    topLevelNodeType() {
      this.currentBlockTool = this.getCurrentBlockTool();
    }
  },
  computed: {
    activeAlignmentTools() {
      return this.topLevelNodeType ? this.alignmentTools.filter(
        (t) => t.find(
          (e) => e.isActiveTest(this.editor, this.topLevelNodeType)
        )
      ) : null;
    }
  },
  methods: {
    cancelTyping() {
      this.$nextTick(() => this.isTyping = !1);
    },
    shouldShowMainToolbar() {
      return this.editor.isActive() && this.modelValue;
    },
    updateToolbar() {
      this.topLevelNodeType = this.getTopLevelNodeType();
    },
    getCurrentBlockTool() {
      return this.blockTools.find(
        (t) => {
          var e;
          return t.name == this.topLevelNodeType || ((e = t.tools) == null ? void 0 : e.find((n) => n.name == this.topLevelNodeType));
        }
      );
    },
    deleteNode(t) {
      this.editor.commands.deleteNode(t), this.$refs.deleteButton.$el.blur();
    },
    getMenuCoords() {
      return pS(this.editor.view);
    },
    getTableRowMenuCoords() {
      return mS(this.editor.view);
    },
    getTableColumnMenuCoords() {
      return gS(this.editor.view);
    },
    startDragging(t) {
      let e = { left: t.clientX, top: t.clientY + 48 };
      this.draggedNodePosition = this.editor.view.posAtCoords(e).pos, this.dragging = !0;
    },
    endDragging(t) {
      let e = this.editor.view.posAtCoords({
        left: t.clientX,
        top: t.clientY + 20
      });
      e && yS({
        view: this.editor.view,
        state: this.editor.state,
        draggedNodePosition: this.draggedNodePosition,
        targetNodePosition: e.pos
      }), this.dragging = !1, this.draggedNode = null;
    },
    tableIsActive() {
      return this.getTopLevelNodeType() == "table";
    },
    moveNode(t = "UP") {
      ES({
        view: this.editor.view,
        dir: t,
        currentResolved: this.editor.view.state.selection.$from
      });
    },
    getTopLevelNodeType() {
      var t;
      return (t = $p(this.editor.view)) == null ? void 0 : t.type.name;
    },
    canMoveNodeDown() {
      const t = this.editor.view.state.selection.$from;
      return t.index(0) < t.node(0).childCount - 1;
    },
    canMoveNodeUp() {
      return this.editor.view.state.selection.$from.index(0) > 0;
    }
  }
}, uA = { class: "flex flex-row" }, fA = /* @__PURE__ */ He("svg", {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  focusable: "false"
}, [
  /* @__PURE__ */ He("path", { d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z" })
], -1), hA = [
  fA
], pA = {
  key: 0,
  class: "py-2 group relative"
}, mA = /* @__PURE__ */ He("div", { class: "p-3 uppercase text-gray-600 text-xs pb-1 tracking-wide" }, " Transform to ", -1), gA = {
  key: 1,
  class: "pr-2 flex flex-col"
}, yA = ["disabled"], EA = /* @__PURE__ */ He("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
}, [
  /* @__PURE__ */ He("path", { d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" })
], -1), vA = [
  EA
], bA = ["disabled"], wA = /* @__PURE__ */ He("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ He("path", { d: "M17.5 11.6 12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" })
], -1), TA = [
  wA
], SA = {
  key: 0,
  class: "flex gap-1 items-center hide-empty flex-row p-2"
}, IA = {
  key: 1,
  class: "gap-1 flex flex-row items-center p-2"
}, CA = {
  key: 2,
  class: "p-2 gap-1 flex relative flex-row items-center"
}, MA = {
  key: 3,
  class: "p-2 gap-1 flex group flex-row items-center relative"
};
function OA(t, e, n, r, i, s) {
  const o = Vt("menu-button"), l = Vt("menu-dropdown-button"), a = Vt("menu-item"), c = Vt("bubble-menu"), d = Vt("editor-content");
  return Z(), ce("div", null, [
    i.editor && i.tableRowTools ? (Z(), st(c, {
      key: 0,
      editor: i.editor,
      pluginKey: "tableRowMenu",
      "should-show": s.tableIsActive,
      "tippy-options": {
        placement: "left",
        getReferenceClientRect: s.getTableRowMenuCoords
      }
    }, {
      default: De(() => [
        $e(a, null, {
          dropdown: De(() => [
            (Z(!0), ce(Xt, null, Jt(i.tableRowTools, (u) => (Z(), st(l, {
              innerHTML: u.icon + " " + u.title,
              key: u.title,
              label: u.title,
              onClick: (f) => u.command(i.editor)
            }, null, 8, ["innerHTML", "label", "onClick"]))), 128))
          ]),
          default: De(() => [
            $e(o, {
              title: "Row tools",
              class: "rounded-full text-slate-400 hover:text-slate-800",
              content: i.moreIconRound
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : kt("", !0),
    i.editor && i.tableColumnTools ? (Z(), st(c, {
      key: 1,
      editor: i.editor,
      pluginKey: "tableColumnMenu",
      "should-show": s.tableIsActive,
      "tippy-options": {
        placement: "bottom",
        getReferenceClientRect: s.getTableColumnMenuCoords
      }
    }, {
      default: De(() => [
        $e(a, null, {
          dropdown: De(() => [
            (Z(!0), ce(Xt, null, Jt(i.tableColumnTools, (u) => (Z(), st(l, {
              content: u.icon + " " + u.title,
              key: u.title,
              label: u.title,
              onClick: (f) => u.command(i.editor)
            }, null, 8, ["content", "label", "onClick"]))), 128))
          ]),
          default: De(() => [
            $e(o, {
              title: "Column tools",
              content: i.moreIconRound,
              class: "rounded-full text-slate-400 hover:text-slate-800"
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : kt("", !0),
    i.editor ? (Z(), st(c, {
      key: 2,
      pluginKey: "mainMenu",
      onDragend: e[5] || (e[5] = (u) => s.endDragging(u)),
      draggable: i.dragging,
      "should-show": s.shouldShowMainToolbar,
      class: En(["text-sm bg-white max-w-screen flex divide-x divide-slate-400 flex-row border-slate-400 md:rounded border", {
        "pointer-events-none opacity-0": i.isTyping
      }]),
      editor: i.editor,
      "tippy-options": {
        maxWidth: "none",
        placement: "top-start",
        getReferenceClientRect: s.getMenuCoords
      }
    }, {
      default: De(() => {
        var u, f, h, p, m;
        return [
          He("div", uA, [
            He("button", {
              onMousedown: e[0] || (e[0] = (g) => s.startDragging(g)),
              onMouseup: e[1] || (e[1] = (g) => {
                i.draggedNodePosition = !1, i.dragging = !1;
              }),
              class: En(["hidden md:block ml-1 my-2 w-6 h-8 hover:bg-slate-100 rounded", {
                "cursor-grab": !i.dragging,
                "cursor-grabbing mr-1": i.dragging
              }]),
              "aria-label": "Drag",
              "data-tooltip": "Drag"
            }, hA, 34),
            !i.dragging && i.currentBlockTool ? (Z(), ce("div", pA, [
              $e(a, null, Jm({
                default: De(() => {
                  var g, v, E;
                  return [
                    $e(o, {
                      title: (g = i.currentBlockTool) == null ? void 0 : g.name,
                      content: (v = i.currentBlockTool) == null ? void 0 : v.icon,
                      class: En(
                        ((E = i.currentBlockTool) == null ? void 0 : E.canBeConverted) && "group-focus-within:bg-slate-600 !cursor-pointer group-focus-within:text-white hover:bg-slate-50"
                      )
                    }, null, 8, ["title", "content", "class"])
                  ];
                }),
                _: 2
              }, [
                (u = i.currentBlockTool) != null && u.canBeConverted ? {
                  name: "dropdown",
                  fn: De(() => [
                    mA,
                    (Z(!0), ce(Xt, null, Jt(i.blockTools.filter((g) => g.convertCommand), (g) => (Z(), st(l, {
                      content: g.icon + " " + g.title,
                      key: g.title,
                      label: g.title,
                      onClick: (v) => g.convertCommand(i.editor),
                      activeClass: "hidden",
                      active: g.isActiveTest(i.editor)
                    }, null, 8, ["content", "label", "onClick", "active"]))), 128))
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ])) : kt("", !0),
            i.dragging ? kt("", !0) : (Z(), ce("div", gA, [
              He("button", {
                onClick: e[2] || (e[2] = (g) => s.moveNode("UP")),
                disabled: !s.canMoveNodeUp(),
                "data-tooltip": "Move up",
                class: "mt-2"
              }, vA, 8, yA),
              He("button", {
                onClick: e[3] || (e[3] = (g) => s.moveNode("DOWN")),
                disabled: !s.canMoveNodeDown(),
                "data-tooltip": "Move down",
                class: "-mt-3.5"
              }, TA, 8, bA)
            ]))
          ]),
          i.dragging ? kt("", !0) : (Z(), ce("div", SA, [
            (Z(!0), ce(Xt, null, Jt(s.activeAlignmentTools, (g, v) => (Z(), st(a, { key: v }, {
              dropdown: De(() => [
                (Z(!0), ce(Xt, null, Jt(g, (E) => (Z(), st(l, {
                  key: E.title,
                  content: E.icon + " " + E.title,
                  label: E.title,
                  onClick: (b) => E.command(i.editor),
                  active: E.isActiveTest(i.editor, i.topLevelNodeType)
                }, null, 8, ["content", "label", "onClick", "active"]))), 128))
              ]),
              default: De(() => {
                var E, b;
                return [
                  $e(o, {
                    title: (E = g.find(
                      (y) => y.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : E.title,
                    content: (b = g.find(
                      (y) => y.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : b.icon
                  }, null, 8, ["title", "content"])
                ];
              }),
              _: 2
            }, 1024))), 128))
          ])),
          !i.dragging && ((h = (f = i.currentBlockTool) == null ? void 0 : f.tools) != null && h.length) ? (Z(), ce("div", IA, [
            (Z(!0), ce(Xt, null, Jt((p = i.currentBlockTool) == null ? void 0 : p.tools, (g) => {
              var v, E;
              return Z(), st(o, {
                key: g.name,
                content: g.icon,
                label: g.title,
                activeClass: g.isActiveClass,
                onClick: (b) => g.command.call(0, i.editor),
                disabled: (v = g.isDisabledTest) == null ? void 0 : v.call(0, i.editor),
                active: (E = g.isActiveTest) == null ? void 0 : E.call(0, i.editor)
              }, null, 8, ["content", "label", "activeClass", "onClick", "disabled", "active"]);
            }), 128))
          ])) : kt("", !0),
          (m = i.currentBlockTool) != null && m.hasInlineTools && !i.dragging ? (Z(), ce("div", CA, [
            (Z(!0), ce(Xt, null, Jt(i.inlineTools, (g) => (Z(), st(a, {
              align: "right",
              key: g.title
            }, {
              dropdown: De(() => [
                (Z(!0), ce(Xt, null, Jt(g.tools, (v) => (Z(), st(l, {
                  key: v.name,
                  content: v.icon + " " + v.title,
                  onClick: (E) => v.command(i.editor),
                  active: v.isActiveTest(i.editor)
                }, null, 8, ["content", "onClick", "active"]))), 128))
              ]),
              default: De(() => [
                $e(o, {
                  content: g.icon,
                  label: g.title,
                  activeClass: g.isActiveClass,
                  onClick: (v) => g.command(i.editor),
                  active: g.isActiveTest(i.editor)
                }, null, 8, ["content", "label", "activeClass", "onClick", "active"])
              ]),
              _: 2
            }, 1024))), 128))
          ])) : kt("", !0),
          i.editor && i.editor.can().deleteNode(i.topLevelNodeType) && !i.dragging ? (Z(), ce("div", MA, [
            $e(a, { align: "right" }, {
              dropdown: De(() => [
                $e(l, {
                  ref: "deleteButton",
                  content: i.deleteIcon + " Delete",
                  label: "Delete block",
                  onClick: e[4] || (e[4] = (g) => s.deleteNode(i.topLevelNodeType))
                }, null, 8, ["content"])
              ]),
              default: De(() => [
                $e(o, {
                  content: i.moreIcon,
                  label: "More"
                }, null, 8, ["content"])
              ]),
              _: 1
            })
          ])) : kt("", !0)
        ];
      }),
      _: 1
    }, 8, ["draggable", "should-show", "editor", "class", "tippy-options"])) : kt("", !0),
    $e(d, {
      class: En(n.editorClass ?? "prose"),
      onKeydown: e[6] || (e[6] = (u) => i.isTyping = !0),
      onKeyup: e[7] || (e[7] = Qm((u) => i.isTyping = !1, ["esc"])),
      ref: "editor",
      editor: i.editor
    }, null, 8, ["class", "editor"])
  ]);
}
const AA = /* @__PURE__ */ ar(dA, [["render", OA]]), kA = AA;
export {
  kA as GutenTap
};
