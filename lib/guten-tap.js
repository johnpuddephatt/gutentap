import { openBlock as V, createElementBlock as te, normalizeClass as Vt, renderSlot as Cl, createCommentVNode as rt, defineComponent as $r, ref as Bs, onMounted as Cc, onBeforeUnmount as zs, h as un, reactive as Sc, markRaw as Mc, getCurrentInstance as Gu, watchEffect as Yu, nextTick as Xu, unref as Qu, Teleport as Zu, customRef as ef, Fragment as kt, renderList as xt, createElementVNode as Ke, createTextVNode as tf, toDisplayString as nf, resolveComponent as dr, createBlock as Xe, withCtx as Me, createVNode as Fe, createSlots as rf, withKeys as of } from "vue";
const jr = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, sf = {
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
}, lf = ["aria-label", "data-tooltip", "title", "innerHTML"];
function af(n, e, t, r, i, o) {
  return V(), te("button", {
    class: Vt(["w-full flex p-1 flex-row items-center text-slate-600 rounded gap-2 hover:bg-slate-100", t.active ? t.activeClass : ""]),
    "aria-label": t.label,
    "data-tooltip": t.label,
    title: t.label,
    innerHTML: t.content
  }, null, 10, lf);
}
const cf = /* @__PURE__ */ jr(sf, [["render", af]]), df = {
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
}, uf = { class: "group text-sm relative" };
function ff(n, e, t, r, i, o) {
  return V(), te("div", uf, [
    Cl(n.$slots, "default"),
    o.hasDropdown ? (V(), te("div", {
      key: 0,
      class: Vt(["z-10 bg-white shadow py-2 group-focus-within:block hidden overflow-hidden whitespace-nowrap absolute bottom-full sm:bottom-auto sm:top-full mt-4 rounded border border-slate-400", t.align == "left" ? "left-0" : "right-0"])
    }, [
      Cl(n.$slots, "dropdown")
    ], 2)) : rt("", !0)
  ]);
}
const hf = /* @__PURE__ */ jr(df, [["render", ff]]), pf = {
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
}, mf = ["aria-label", "title", "innerHTML"];
function gf(n, e, t, r, i, o) {
  return V(), te("button", {
    class: Vt(["w-full flex py-1 pl-2 pr-6 flex-row items-center text-slate-600 gap-2 hover:bg-slate-100", t.active ? t.activeClass : ""]),
    "aria-label": t.label,
    title: t.label,
    innerHTML: t.content
  }, null, 10, mf);
}
const yf = /* @__PURE__ */ jr(pf, [["render", gf]]);
function ge(n) {
  this.content = n;
}
ge.prototype = {
  constructor: ge,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new ge(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new ge(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new ge([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new ge(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new ge(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = ge.from(n), n.size ? new ge(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = ge.from(n), n.size ? new ge(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = ge.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
ge.from = function(n) {
  if (n instanceof ge)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new ge(e);
};
function Tc(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let s = Tc(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function Ac(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let s = n.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      t -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: t, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, d = Math.min(s.text.length, l.text.length);
      for (; c < d && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = Ac(s.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class x {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, o) {
    for (let s = 0, l = 0; l < t; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, t - d), r, i + d);
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
  textBetween(e, t, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (l, a) => {
      l.isText ? (o += l.text.slice(Math.max(e, a) - a, t - a), s = !r) : l.isLeaf ? (i ? o += typeof i == "function" ? i(l) : i : l.type.spec.leafText && (o += l.type.spec.leafText(l)), s = !r) : !s && l.isBlock && (o += r, s = !0);
    }, 0), o;
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
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new x(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, t - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, t - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new x(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? x.empty : e == 0 && t == this.content.length ? this : new x(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new x(i, o);
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
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
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
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
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
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Tc(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Ac(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return ri(0, e);
    if (e == this.size)
      return ri(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || t > 0 ? ri(r + 1, s) : ri(r, i);
      i = s;
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
  static fromJSON(e, t) {
    if (!t)
      return x.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new x(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return x.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new x(t || e, r);
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
const ko = { index: 0, offset: 0 };
function ri(n, e) {
  return ko.index = n, ko.offset = e, ko;
}
function Si(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Si(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Si(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let J = class Zo {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Si(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Zo.none;
    if (e instanceof Zo)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
J.none = [];
class Mi extends Error {
}
class A {
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
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
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
  insertAt(e, t) {
    let r = Ec(this.content, e + this.openStart, t);
    return r && new A(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new A(Oc(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
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
  static fromJSON(e, t) {
    if (!t)
      return A.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new A(x.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new A(e, r, i);
  }
}
A.empty = new A(x.empty, 0, 0);
function Oc(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: l } = n.findIndex(t);
  if (i == e || o.isText) {
    if (l != t && !n.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(Oc(o.content, e - i - 1, t - i - 1)));
}
function Ec(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
  if (o == e || s.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = Ec(s.content, e - o - 1, t);
  return l && n.replaceChild(i, s.copy(l));
}
function vf(n, e, t) {
  if (t.openStart > n.depth)
    throw new Mi("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Mi("Inconsistent open depths");
  return Nc(n, e, t, 0);
}
function Nc(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let s = Nc(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let s = n.parent, l = s.content;
      return hn(s, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = bf(t, n);
      return hn(o, Rc(n, s, l, e, r));
    }
  else
    return hn(o, Ti(n, e, r));
}
function Dc(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Mi("Cannot join " + e.type.name + " onto " + n.type.name);
}
function es(n, e, t) {
  let r = n.node(t);
  return Dc(r, e.node(t)), r;
}
function fn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function yr(n, e, t, r) {
  let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (fn(n.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    fn(i.child(l), r);
  e && e.depth == t && e.textOffset && fn(e.nodeBefore, r);
}
function hn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Rc(n, e, t, r, i) {
  let o = n.depth > i && es(n, e, i + 1), s = r.depth > i && es(t, r, i + 1), l = [];
  return yr(null, n, i, l), o && s && e.index(i) == t.index(i) ? (Dc(o, s), fn(hn(o, Rc(n, e, t, r, i + 1)), l)) : (o && fn(hn(o, Ti(n, e, i + 1)), l), yr(e, t, i, l), s && fn(hn(s, Ti(t, r, i + 1)), l)), yr(r, null, i, l), new x(l);
}
function Ti(n, e, t) {
  let r = [];
  if (yr(null, n, t, r), n.depth > t) {
    let i = es(n, e, t + 1);
    fn(hn(i, Ti(n, e, t + 1)), r);
  }
  return yr(e, null, t, r), new x(r);
}
function bf(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(x.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Or {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
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
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return J.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
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
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
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
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Ai(this, e, r);
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
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new Or(t, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    for (let i = 0; i < xo.length; i++) {
      let o = xo[i];
      if (o.pos == t && o.doc == e)
        return o;
    }
    let r = xo[Co] = Or.resolve(e, t);
    return Co = (Co + 1) % wf, r;
  }
}
let xo = [], Co = 0, wf = 12;
class Ai {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
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
const kf = /* @__PURE__ */ Object.create(null);
let pn = class ts {
  /**
  @internal
  */
  constructor(e, t, r, i = J.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || x.empty;
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
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
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
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
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
  hasMarkup(e, t, r) {
    return this.type == e && Si(this.attrs, t || e.defaultAttrs || kf) && J.sameSet(this.marks, r || J.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new ts(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new ts(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return A.empty;
    let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new A(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return vf(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Or.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Or.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Lc(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = x.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
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
    let e = J.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!J.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = x.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, r);
  }
};
pn.prototype.text = void 0;
class Oi extends pn {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Lc(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Oi(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Oi(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Lc(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class vn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new xf(e, t);
    if (r.next == null)
      return vn.empty;
    let i = Ic(r);
    r.next && r.err("Unexpected trailing text");
    let o = Ef(Of(i));
    return Nf(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
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
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
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
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return x.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: d, next: u } = s.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && i.indexOf(u) == -1) {
          i.push(u);
          let f = o(u, l.concat(d));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
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
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
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
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
vn.empty = new vn(!0);
class xf {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
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
function Ic(n) {
  let e = [];
  do
    e.push(Cf(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Cf(n) {
  let e = [];
  do
    e.push(Sf(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Sf(n) {
  let e = Af(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = Mf(n, e);
    else
      break;
  return e;
}
function Sl(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function Mf(n, e) {
  let t = Sl(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Sl(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function Tf(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.groups.indexOf(e) > -1 && i.push(s);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function Af(n) {
  if (n.eat("(")) {
    let e = Ic(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = Tf(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Of(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (s.type == "star") {
      let a = t();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = t();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let d = t();
          i(o(s.expr, a), d), a = d;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let d = t();
            r(a, d), i(o(s.expr, a), d), a = d;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Pc(n, e) {
  return e - n;
}
function Ml(n, e) {
  let t = [];
  return r(e), t.sort(Pc);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function Ef(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Ml(n, 0));
  function t(r) {
    let i = [];
    r.forEach((s) => {
      n[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let d = 0; d < i.length; d++)
          i[d][0] == l && (c = i[d][1]);
        Ml(n, a).forEach((d) => {
          c || i.push([l, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let o = e[r.join(",")] = new vn(r.indexOf(n.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(Pc);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || t(l) });
    }
    return o;
  }
}
function Nf(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Bc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function zc(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Hc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  if (n)
    for (let t in n)
      e[t] = new Df(n[t]);
  return e;
}
let Tl = class Vc {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Hc(r.attrs), this.defaultAttrs = Bc(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == vn.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : zc(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new pn(this, this.computeAttrs(e), x.from(t), J.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = x.from(t), this.checkContent(t), new pn(this, this.computeAttrs(e), t, J.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = x.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(x.empty, !0);
    return o ? new pn(this, e, t.append(o), J.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
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
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : J.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new Vc(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
class Df {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class no {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Hc(i.attrs), this.excluded = null;
    let o = Bc(this.attrs);
    this.instance = o ? new J(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new J(this, zc(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new no(o, i++, t, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Rf {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = ge.from(e.nodes), t.marks = ge.from(e.marks || {}), this.nodes = Tl.compile(this.spec.nodes, this), this.marks = no.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      o.contentMatch = r[s] || (r[s] = vn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.markSet = l == "_" ? null : l ? Al(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : Al(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Tl) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Oi(r, r.defaultAttrs, e, J.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return pn.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return J.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Al(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
class qn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [], t.forEach((r) => {
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
  parse(e, t = {}) {
    let r = new El(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new El(this, t, !0);
    return r.addAll(e, t.from, t.to), A.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (Pf(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let a = s.getAttrs(t);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let l = t[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Nl(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Nl(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new qn(e, qn.schemaRules(e)));
  }
}
const Fc = {
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
}, Lf = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, $c = { ol: !0, ul: !0 }, Ei = 1, Ni = 2, vr = 4;
function Ol(n, e, t) {
  return e != null ? (e ? Ei : 0) | (e === "full" ? Ni : 0) : n && n.whitespace == "pre" ? Ei | Ni : t & ~vr;
}
class ii {
  constructor(e, t, r, i, o, s, l) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = o, this.options = l, this.content = [], this.activeMarks = J.none, this.stashMarks = [], this.match = s || (l & vr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(x.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Ei)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = x.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(x.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : zf(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Fc.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class El {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, o, s = Ol(null, t.preserveWhitespace, 0) | (r ? vr : 0);
    i ? o = new ii(i.type, i.attrs, J.none, J.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new ii(null, null, J.none, J.none, !0, null, s) : o = new ii(e.schema.topNodeType, null, J.none, J.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
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
      let t = e.getAttribute("style");
      if (!t)
        this.addElement(e);
      else {
        let r = this.readStyles(Bf(t));
        if (!r)
          return;
        let [i, o] = r, s = this.top;
        for (let l = 0; l < o.length; l++)
          this.removePendingMark(o[l], s);
        for (let l = 0; l < i.length; l++)
          this.addPendingMark(i[l]);
        this.addElement(e);
        for (let l = 0; l < i.length; l++)
          this.removePendingMark(i[l], s);
        for (let l = 0; l < o.length; l++)
          this.addPendingMark(o[l]);
      }
    }
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & Ni || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & Ei)
        r.options & Ni ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], o = e.previousSibling;
        (!i || o && o.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    $c.hasOwnProperty(r) && this.parser.normalizeLists && If(e);
    let o = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (o ? o.ignore : Lf.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!o || o.skip || o.closeParent) {
      o && o.closeParent ? this.open = Math.max(0, this.open - 1) : o && o.skip.nodeType && (e = o.skip);
      let s, l = this.top, a = this.needsBlock;
      if (Fc.hasOwnProperty(r))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), s = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      this.addAll(e), s && this.sync(l), this.needsBlock = a;
    } else
      this.addElementByRule(e, o, o.consuming === !1 ? i : void 0);
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
    let t = J.none, r = J.none;
    for (let i = 0; i < e.length; i += 2)
      for (let o = void 0; ; ) {
        let s = this.parser.matchStyle(e[i], e[i + 1], this, o);
        if (!s)
          break;
        if (s.ignore)
          return null;
        if (s.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((l) => {
          s.clearMark(l) && (r = l.addToSet(r));
        }) : t = this.parser.schema.marks[s.mark].create(s.attrs).addToSet(t), s.consuming === !1)
          o = s;
        else
          break;
      }
    return [t, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r) {
    let i, o, s;
    t.node ? (o = this.parser.schema.nodes[t.node], o.isLeaf ? this.insertNode(o.create(t.attrs)) || this.leafFallback(e) : i = this.enter(o, t.attrs || null, t.preserveWhitespace)) : (s = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(s));
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, s && this.removePendingMark(s, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r) {
    let i = t || 0;
    for (let o = t ? e.childNodes[t] : e.firstChild, s = r == null ? null : e.childNodes[r]; o != s; o = o.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(o);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let o = this.nodes[i], s = o.findWrapping(e);
      if (s && (!t || t.length > s.length) && (t = s, r = o, !s.length) || o.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(r);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let r = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return t.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, t = null, r = !1, i) {
    this.closeExtra();
    let o = this.top;
    o.applyPending(e), o.match = o.match && o.match.matchType(e);
    let s = Ol(e, i, o.options);
    o.options & vr && o.content.length == 0 && (s |= vr), this.nodes.push(new ii(e, t, o.activeMarks, o.pendingMarks, r, null, s)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!d || d.name != c && d.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let t = Hf(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let s = i.popFromStashMark(e);
        s && i.type && i.type.allowsMarkType(s.type) && (i.activeMarks = s.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function If(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && $c.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Pf(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Bf(n) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
  for (; t = e.exec(n); )
    r.push(t[1], t[2].trim());
  return r;
}
function Nl(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function zf(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: d } = l.edge(a);
        if (c == e || o.indexOf(d) < 0 && s(d))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
function Hf(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class dt {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = So(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], d = this.serializeMark(c, s.isInline, t);
          d && (o.push([c, i]), i.appendChild(d.dom), i = d.contentDOM || d.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = dt.renderSpec(So(t), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
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
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && dt.renderSpec(So(r), i(e, t));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, t, r = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], o = i.indexOf(" ");
    o > 0 && (r = i.slice(0, o), i = i.slice(o + 1));
    let s, l = r ? e.createElementNS(r, i) : e.createElement(i), a = t[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let d in a)
        if (a[d] != null) {
          let u = d.indexOf(" ");
          u > 0 ? l.setAttributeNS(d.slice(0, u), d.slice(u + 1), a[d]) : l.setAttribute(d, a[d]);
        }
    }
    for (let d = c; d < t.length; d++) {
      let u = t[d];
      if (u === 0) {
        if (d < t.length - 1 || d > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: f, contentDOM: h } = dt.renderSpec(e, u, r);
        if (l.appendChild(f), h) {
          if (s)
            throw new RangeError("Multiple content holes");
          s = h;
        }
      }
    }
    return { dom: l, contentDOM: s };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new dt(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Dl(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Dl(e.marks);
  }
}
function Dl(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function So(n) {
  return n.document || window.document;
}
const jc = 65535, Wc = Math.pow(2, 16);
function Vf(n, e) {
  return n + e * Wc;
}
function Rl(n) {
  return n & jc;
}
function Ff(n) {
  return (n - (n & jc)) / Wc;
}
const _c = 1, Kc = 2, gi = 4, qc = 8;
class ns {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & qc) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (_c | gi)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Kc | gi)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & gi) > 0;
  }
}
class We {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && We.empty)
      return We.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = Rl(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + Ff(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = this.ranges[l + s], u = a + c;
      if (e <= u) {
        let f = c ? e == a ? -1 : e == u ? 1 : t : t, h = a + i + (f < 0 ? 0 : d);
        if (r)
          return h;
        let p = e == (t < 0 ? a : u) ? null : Vf(l / 3, e - a), m = e == a ? Kc : e == u ? _c : gi;
        return (t < 0 ? e != a : e != u) && (m |= qc), new ns(h, m, p);
      }
      i += d - c;
    }
    return r ? e + i : new ns(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = Rl(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], d = a + c;
      if (e <= d && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + t], d = this.ranges[i + r];
      e(l, l + c, a, a + d), o += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new We(this.ranges, !this.inverted);
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
    return e == 0 ? We.empty : new We(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
We.empty = new We([]);
class jn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new jn(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new jn(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new jn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this.maps[o], l = s.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new ns(e, i, null);
  }
}
const Mo = /* @__PURE__ */ Object.create(null);
class Ie {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return We.empty;
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
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Mo[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Mo)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Mo[e] = t, t.prototype.jsonID = e, t;
  }
}
class ae {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new ae(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new ae(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return ae.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof Mi)
        return ae.fail(o.message);
      throw o;
    }
  }
}
function Hs(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(Hs(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return x.fromArray(r);
}
class Ft extends Ie {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new A(Hs(t.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return ae.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new ut(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Ft(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ft && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ft(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Ft(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Ie.jsonID("addMark", Ft);
class ut extends Ie {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new A(Hs(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return ae.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Ft(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new ut(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ut && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ut(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new ut(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Ie.jsonID("removeMark", ut);
class $t extends Ie {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ae.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ae.fromReplace(e, this.pos, this.pos + 1, new A(x.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new $t(this.pos, t.marks[i]);
        return new $t(this.pos, this.mark);
      }
    }
    return new Un(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new $t(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new $t(t.pos, e.markFromJSON(t.mark));
  }
}
Ie.jsonID("addNodeMark", $t);
class Un extends Ie {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ae.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ae.fromReplace(e, this.pos, this.pos + 1, new A(x.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new $t(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Un(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Un(t.pos, e.markFromJSON(t.mark));
  }
}
Ie.jsonID("removeNodeMark", Un);
class fe extends Ie {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && rs(e, this.from, this.to) ? ae.fail("Structure replace would overwrite content") : ae.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new We([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new fe(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new fe(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof fe) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? A.empty : new A(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new fe(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? A.empty : new A(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new fe(e.from, this.to, t, this.structure);
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
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new fe(t.from, t.to, A.fromJSON(e, t.slice), !!t.structure);
  }
}
Ie.jsonID("replace", fe);
class he extends Ie {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (rs(e, this.from, this.gapFrom) || rs(e, this.gapTo, this.to)))
      return ae.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return ae.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? ae.fromReplace(e, this.from, this.to, r) : ae.fail("Content does not fit in gap");
  }
  getMap() {
    return new We([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new he(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), o = e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new he(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
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
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new he(t.from, t.to, t.gapFrom, t.gapTo, A.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
Ie.jsonID("replaceAround", he);
function rs(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function $f(n, e, t, r) {
  let i = [], o = [], s, l;
  n.doc.nodesBetween(e, t, (a, c, d) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && d.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(u);
      for (let m = 0; m < u.length; m++)
        u[m].isInSet(p) || (s && s.to == f && s.mark.eq(u[m]) ? s.to = h : i.push(s = new ut(f, h, u[m])));
      l && l.to == f ? l.to = h : o.push(l = new Ft(f, h, r));
    }
  }), i.forEach((a) => n.step(a)), o.forEach((a) => n.step(a));
}
function jf(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof no) {
      let c = s.marks, d;
      for (; d = r.isInSet(c); )
        (a || (a = [])).push(d), c = d.removeFromSet(c);
    } else
      r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, t);
      for (let d = 0; d < a.length; d++) {
        let u = a[d], f;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == o - 1 && u.eq(i[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = o) : i.push({ style: u, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => n.step(new ut(s.from, s.to, s.style)));
}
function Wf(n, e, t, r = t.contentMatch) {
  let i = n.doc.nodeAt(e), o = [], s = e + 1;
  for (let l = 0; l < i.childCount; l++) {
    let a = i.child(l), c = s + a.nodeSize, d = r.matchType(a.type);
    if (!d)
      o.push(new fe(s, c, A.empty));
    else {
      r = d;
      for (let u = 0; u < a.marks.length; u++)
        t.allowsMarkType(a.marks[u].type) || n.step(new ut(s, c, a.marks[u]));
    }
    s = c;
  }
  if (!r.validEnd) {
    let l = r.fillBefore(x.empty, !0);
    n.replace(s, s, new A(l, 0, 0));
  }
  for (let l = o.length - 1; l >= 0; l--)
    n.step(o[l]);
}
function _f(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function rr(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, s, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !_f(i, o, s))
      break;
  }
  return null;
}
function Kf(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, d = x.empty, u = 0;
  for (let p = o, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, d = x.from(r.node(p).copy(d)), u++) : a--;
  let f = x.empty, h = 0;
  for (let p = o, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, f = x.from(i.node(p).copy(f)), h++) : c++;
  n.step(new he(a, c, s, l, new A(d.append(f), u, h), d.size - u, !0));
}
function Vs(n, e, t = null, r = n) {
  let i = qf(n, e), o = i && Uf(r, e);
  return o ? i.map(Ll).concat({ type: e, attrs: t }).concat(o.map(Ll)) : null;
}
function Ll(n) {
  return { type: n, attrs: null };
}
function qf(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, s) ? o : null;
}
function Uf(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function Jf(n, e, t) {
  let r = x.empty;
  for (let s = t.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = t[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = x.from(t[s].type.create(t[s].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new he(i, o, i, o, new A(r, 0, 0), t.length, !0));
}
function Gf(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (s.isTextblock && !s.hasMarkup(r, i) && Yf(n.doc, n.mapping.slice(o).map(l), r)) {
      n.clearIncompatible(n.mapping.slice(o).map(l, 1), r);
      let a = n.mapping.slice(o), c = a.map(l, 1), d = a.map(l + s.nodeSize, 1);
      return n.step(new he(c, d, c + 1, d - 1, new A(x.from(r.create(i, null, s.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function Yf(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function Xf(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let s = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, s);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new he(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new A(x.from(s), 0, 0), 1, !0));
}
function Wn(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, d = t - 2; c > o; c--, d--) {
    let u = i.node(c), f = i.index(c);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(f, u.childCount), p = r && r[d + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[d] || u;
    if (!u.canReplace(f + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function Qf(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = x.empty, s = x.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    o = x.from(i.node(l).copy(o));
    let d = r && r[c];
    s = x.from(d ? d.type.create(d.attrs, s) : i.node(l).copy(s));
  }
  n.step(new fe(e, e, new A(o.append(s), t, t), !0));
}
function Gt(n, e) {
  let t = n.resolve(e), r = t.index();
  return Uc(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Uc(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function Jc(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && Uc(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function Zf(n, e, t) {
  let r = new fe(e - t, e + t, A.empty, !0);
  n.step(r);
}
function eh(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function Gc(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), d = !1;
      if (o == 1)
        d = c.canReplace(a, a, i);
      else {
        let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        d = u && c.canReplaceWith(a, a, u[0]);
      }
      if (d)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function Fs(n, e, t = e, r = A.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return Yc(i, o, r) ? new fe(e, t, r) : new th(i, o, r).fit();
}
function Yc(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class th {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = x.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
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
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new A(o, s, l);
    return e > -1 ? new he(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new fe(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = To(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], d, u = null;
          if (t == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(x.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: u };
          if (t == 2 && s && (d = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: d };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = To(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new A(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = To(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new A(pr(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new A(pr(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, d = [], { match: u, type: f } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        d.push(i.child(m));
      u = u.matchFragment(i);
    }
    let h = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = g, d.push(Xc(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = mr(this.placed, t, x.from(d)), this.frontier[t].match = u, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let v = g.lastChild;
      this.frontier.push({ type: v.type, match: v.contentMatchAt(v.childCount) }), g = v.content;
    }
    this.unplaced = p ? e == 0 ? A.empty : new A(pr(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new A(pr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Ao(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = Ao(e, t, i, r, o);
        if (s) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], d = Ao(e, l, c, a, !0);
            if (!d || d.childCount)
              continue e;
          }
          return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = mr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = mr(this.placed, this.depth, x.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(x.empty, !0);
    t.childCount && (this.placed = mr(this.placed, this.frontier.length, t));
  }
}
function pr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(pr(n.firstChild.content, e - 1, t)));
}
function mr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(mr(n.lastChild.content, e - 1, t)));
}
function To(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Xc(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Xc(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(x.empty, !0)))), n.copy(r);
}
function Ao(n, e, t, r, i) {
  let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !nh(t, o.content, s) ? l : null;
}
function nh(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function rh(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function ih(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (Yc(i, o, r))
    return n.step(new fe(e, t, r));
  let s = Zc(i, n.doc.resolve(t));
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : i.before(f) == h && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], d = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = d - 1; f >= 0; f--) {
    let h = c[f].type, p = rh(h);
    if (p && i.node(a).type != h)
      d = f;
    else if (p || !h.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + d + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + a) % s.length], v = !0;
        g < 0 && (v = !1, g = -g);
        let w = i.node(g - 1), C = i.index(g - 1);
        if (w.canReplaceWith(C, C, p.type, p.marks))
          return n.replace(i.before(g), v ? o.after(g) : t, new A(Qc(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let u = n.steps.length;
  for (let f = s.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > u)); f--) {
    let h = s[f];
    h < 0 || (e = i.before(h), t = o.after(h));
  }
}
function Qc(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(Qc(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
    n = s.append(o.matchFragment(s).fillBefore(x.empty, !0));
  }
  return n;
}
function oh(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = eh(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new A(x.from(r), 0, 0));
}
function sh(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = Zc(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s)
      return n.delete(r.before(s), t);
  n.delete(e, t);
}
function Zc(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class _n extends Ie {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ae.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return ae.fromReplace(e, this.pos, this.pos + 1, new A(x.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return We.empty;
  }
  invert(e) {
    return new _n(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new _n(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _n(t.pos, t.attr, t.value);
  }
}
Ie.jsonID("attr", _n);
let Jn = class extends Error {
};
Jn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Jn.prototype = Object.create(Error.prototype);
Jn.prototype.constructor = Jn;
Jn.prototype.name = "TransformError";
class $s {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new jn();
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
    let t = this.maybeStep(e);
    if (t.failed)
      throw new Jn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
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
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = A.empty) {
    let i = Fs(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new A(x.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, A.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
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
  replaceRange(e, t, r) {
    return ih(this, e, t, r), this;
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
  replaceRangeWith(e, t, r) {
    return oh(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return sh(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Kf(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Zf(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Jf(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Gf(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return Xf(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new _n(e, t, r)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new $t(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof J)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new Un(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return Qf(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return $f(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return jf(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return Wf(this, e, t, r), this;
  }
}
const Oo = /* @__PURE__ */ Object.create(null);
class R {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new ed(e.min(t), e.max(t))];
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
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
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
  replace(e, t = A.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], d = e.mapping.slice(o);
      e.replaceRange(d.map(a.pos), d.map(c.pos), l ? A.empty : t), l == 0 && Bl(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), d = a.map(l.pos);
      o ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, t), Bl(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new P(e) : Ln(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? Ln(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : Ln(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new et(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Ln(e, e, 0, 0, 1) || new et(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Ln(e, e, e.content.size, e.childCount, -1) || new et(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Oo[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in Oo)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Oo[e] = t, t.prototype.jsonID = e, t;
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
    return P.between(this.$anchor, this.$head).getBookmark();
  }
}
R.prototype.visible = !0;
class ed {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let Il = !1;
function Pl(n) {
  !Il && !n.parent.inlineContent && (Il = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class P extends R {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Pl(e), Pl(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return R.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new P(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = A.empty) {
    if (super.replace(e, t), t == A.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof P && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new ro(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new P(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = R.findFrom(t, r, !0) || R.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return R.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (R.findFrom(e, -r, !0) || R.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new P(e, t);
  }
}
R.jsonID("text", P);
class ro {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new ro(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return P.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class L extends R {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? R.near(o) : new L(o);
  }
  content() {
    return new A(x.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof L && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new js(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new L(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new L(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
L.prototype.visible = !1;
R.jsonID("node", L);
class js {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new ro(r, r) : new js(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && L.isSelectable(r) ? new L(t) : R.near(t);
  }
}
class et extends R {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = A.empty) {
    if (t == A.empty) {
      e.delete(0, e.doc.content.size);
      let r = R.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new et(e);
  }
  map(e) {
    return new et(e);
  }
  eq(e) {
    return e instanceof et;
  }
  getBookmark() {
    return lh;
  }
}
R.jsonID("all", et);
const lh = {
  map() {
    return this;
  },
  resolve(n) {
    return new et(n);
  }
};
function Ln(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return P.create(n, t);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && L.isSelectable(l))
        return L.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = Ln(n, l, t + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function Bl(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof fe || i instanceof he))
    return;
  let o = n.mapping.maps[r], s;
  o.forEach((l, a, c, d) => {
    s == null && (s = d);
  }), n.setSelection(R.near(n.doc.resolve(s), t));
}
const zl = 1, oi = 2, Hl = 4;
class ah extends $s {
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
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | zl) & ~oi, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & zl) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= oi, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return J.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
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
    return (this.updated & oi) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~oi, this.storedMarks = null;
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
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || J.none))), r.replaceWith(this, e), this;
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
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(t);
        o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(R.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
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
    return this.updated |= Hl, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Hl) > 0;
  }
}
function Vl(n, e) {
  return !e || !n ? n : n.bind(e);
}
class gr {
  constructor(e, t, r) {
    this.name = e, this.init = Vl(t.init, r), this.apply = Vl(t.apply, r);
  }
}
const ch = [
  new gr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new gr("selection", {
    init(n, e) {
      return n.selection || R.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new gr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new gr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Eo {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ch.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new gr(r.key, r.spec.state, r));
    });
  }
}
class zn {
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
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
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
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, d = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (d && r.filterTransaction(d, s)) {
            if (d.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                i.push(u < s ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(d), r = r.applyInner(d), o = !0;
          }
          i && (i[s] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new zn(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new ah(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new Eo(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new zn(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
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
    let t = new Eo(this.schema, e.plugins), r = t.fields, i = new zn(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
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
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Eo(e.schema, e.plugins), o = new zn(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = pn.fromJSON(e.schema, t.doc);
      else if (s.name == "selection")
        o.selection = R.fromJSON(o.doc, t.selection);
      else if (s.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              o[s.name] = c.fromJSON.call(a, e, t[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function td(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = td(i, e, {})), t[r] = i;
  }
  return t;
}
class oe {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && td(e.props, this, this.props), this.key = e.key ? e.key.key : nd("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const No = /* @__PURE__ */ Object.create(null);
function nd(n) {
  return n in No ? n + "$" + ++No[n] : (No[n] = 0, n + "$");
}
class ce {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = nd(e);
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
const Pe = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Er = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Fl = null;
const St = function(n, e, t) {
  let r = Fl || (Fl = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, bn = function(n, e, t, r) {
  return t && ($l(n, e, t, r, -1) || $l(n, e, t, r, 1));
}, dh = /^(img|br|input|textarea|hr)$/i;
function $l(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : ct(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || fh(n) || dh.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = Pe(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? ct(n) : 0;
    } else
      return !1;
  }
}
function ct(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function uh(n, e, t) {
  for (let r = e == 0, i = e == ct(n); r || i; ) {
    if (n == t)
      return !0;
    let o = Pe(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == ct(n);
  }
}
function fh(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const io = function(n) {
  return n.focusNode && bn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function rn(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function hh(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function ph(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: r.offset };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: r.startOffset };
  }
}
const ht = typeof navigator < "u" ? navigator : null, jl = typeof document < "u" ? document : null, Yt = ht && ht.userAgent || "", is = /Edge\/(\d+)/.exec(Yt), rd = /MSIE \d/.exec(Yt), ss = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Yt), Ne = !!(rd || ss || is), Wt = rd ? document.documentMode : ss ? +ss[1] : is ? +is[1] : 0, tt = !Ne && /gecko\/(\d+)/i.test(Yt);
tt && +(/Firefox\/(\d+)/.exec(Yt) || [0, 0])[1];
const ls = !Ne && /Chrome\/(\d+)/.exec(Yt), we = !!ls, mh = ls ? +ls[1] : 0, Te = !Ne && !!ht && /Apple Computer/.test(ht.vendor), Gn = Te && (/Mobile\/\w+/.test(Yt) || !!ht && ht.maxTouchPoints > 2), je = Gn || (ht ? /Mac/.test(ht.platform) : !1), gh = ht ? /Win/.test(ht.platform) : !1, Qe = /Android \d/.test(Yt), oo = !!jl && "webkitFontSmoothing" in jl.documentElement.style, yh = oo ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function vh(n) {
  return {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function Dt(n, e) {
  return typeof n == "number" ? n : n[e];
}
function bh(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Wl(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let s = t || n.dom; s; s = Er(s)) {
    if (s.nodeType != 1)
      continue;
    let l = s, a = l == o.body, c = a ? vh(o) : bh(l), d = 0, u = 0;
    if (e.top < c.top + Dt(r, "top") ? u = -(c.top - e.top + Dt(i, "top")) : e.bottom > c.bottom - Dt(r, "bottom") && (u = e.bottom - c.bottom + Dt(i, "bottom")), e.left < c.left + Dt(r, "left") ? d = -(c.left - e.left + Dt(i, "left")) : e.right > c.right - Dt(r, "right") && (d = e.right - c.right + Dt(i, "right")), d || u)
      if (a)
        o.defaultView.scrollBy(d, u);
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
function wh(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = n.root.elementFromPoint(o, s);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: id(n.dom) };
}
function id(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Er(r))
    ;
  return e;
}
function kh({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  od(t, r == 0 ? 0 : r - e);
}
function od(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let Nn = null;
function xh(n) {
  if (n.setActive)
    return n.setActive();
  if (Nn)
    return n.focus(Nn);
  let e = id(n);
  n.focus(Nn == null ? {
    get preventScroll() {
      return Nn = { preventScroll: !0 }, !0;
    }
  } : void 0), Nn || (Nn = !1, od(e, 0));
}
function sd(n, e) {
  let t, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let d = n.firstChild, u = 0; d; d = d.nextSibling, u++) {
    let f;
    if (d.nodeType == 1)
      f = d.getClientRects();
    else if (d.nodeType == 3)
      f = St(d).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = d, r = m, i = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, d.nodeType == 1 && m && (o = u + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = d, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = u + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? Ch(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : sd(t, i);
}
function Ch(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = Lt(r, 1);
    if (o.top != o.bottom && Ws(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function Ws(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function Sh(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function Mh(n, e, t) {
  let { node: r, offset: i } = sd(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function Th(n, e, t, r) {
  let i = -1;
  for (let o = e, s = !1; o != n.dom; ) {
    let l = n.docView.nearestDesc(o, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent && !s || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && !s && (s = !0, a.left > r.left || a.top > r.top ? i = l.posBefore : (a.right < r.left || a.bottom < r.top) && (i = l.posAfter)), !l.contentDOM && i < 0)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    o = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function ld(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let s = n.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (Ws(e, c))
            return ld(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function Ah(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = ph(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = n.dom.getBoundingClientRect();
    if (!Ws(e, c) || (s = ld(n.dom, e, c), !s))
      return null;
  }
  if (Te)
    for (let c = s; r && c; c = Er(c))
      c.draggable && (r = void 0);
  if (s = Sh(s, e), r) {
    if (tt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let c = r.childNodes[i], d;
      c.nodeName == "IMG" && (d = c.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++;
    }
    r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Th(n, r, i, e));
  }
  l == null && (l = Mh(n, s, e));
  let a = n.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function _l(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Lt(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (_l(r))
      return r;
  }
  return Array.prototype.find.call(t, _l) || n.getBoundingClientRect();
}
const Oh = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function ad(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = oo || tt;
  if (r.nodeType == 3)
    if (s && (Oh.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = Lt(St(r, i, i), t);
      if (tt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = Lt(St(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let d = Lt(St(r, i, i + 1), -1);
          if (d.top != a.top)
            return ur(d, d.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, d = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, d = -1) : t >= 0 && i == r.nodeValue.length ? (a--, d = 1) : t < 0 ? a-- : c++, ur(Lt(St(r, a, c), d), d < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == ct(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return Do(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < ct(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return Do(a.getBoundingClientRect(), !0);
    }
    return Do(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == ct(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? St(a, ct(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return ur(Lt(c, 1), !1);
  }
  if (o == null && i < ct(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? St(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return ur(Lt(c, -1), !0);
  }
  return ur(Lt(r.nodeType == 3 ? St(r) : r, -t), t >= 0);
}
function ur(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Do(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function cd(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function Eh(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return cd(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = ad(n, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = St(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d.bottom > d.top + 1 && (t == "up" ? s.top - d.top > (d.bottom - s.top) * 2 : d.bottom - s.bottom > (s.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Nh = /[\u0590-\u08ac]/;
function Dh(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = n.domSelection();
  return !Nh.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? o : s : cd(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: d, anchorOffset: u } = n.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(d, u), a && (a != d || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  });
}
let Kl = null, ql = null, Ul = !1;
function Rh(n, e, t) {
  return Kl == e && ql == t ? Ul : (Kl = e, ql = t, Ul = t == "up" || t == "down" ? Eh(n, e, t) : Dh(n, e, t));
}
const qe = 0, Jl = 1, an = 2, pt = 3;
class Wr {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = qe, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
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
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
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
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
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
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > Pe(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!t || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof ud) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof dd && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? Pe(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? Pe(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let d = s + a.border;
        if (e >= d && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, d);
        e = s;
        for (let u = l; u > 0; u--) {
          let f = this.children[u - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = Pe(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let d = l + 1; d < this.children.length; d++) {
          let u = this.children[d];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            o = Pe(u.dom);
            break;
          }
          t += u.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let o = Math.min(e, t), s = Math.max(e, t);
    for (let f = 0, h = 0; f < this.children.length; f++) {
      let p = this.children[f], m = h + p.size;
      if (o > h && s < m)
        return p.setSelection(e - h - p.border, t - h - p.border, r, i);
      h = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), d = !1;
    if ((tt || Te) && e == t) {
      let { node: f, offset: h } = l;
      if (f.nodeType == 3) {
        if (d = !!(h && f.nodeValue[h - 1] == `
`), d && h == f.nodeValue.length)
          for (let p = f, m; p; p = p.parentNode) {
            if (m = p.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: Pe(m) + 1 });
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
    if (tt && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let f = c.focusNode.childNodes[c.focusOffset];
      f && f.contentEditable == "false" && (i = !0);
    }
    if (!(i || d && Te) && bn(l.node, l.offset, c.anchorNode, c.anchorOffset) && bn(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let u = !1;
    if ((c.extend || e == t) && !d) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), u = !0;
      } catch {
      }
    }
    if (!u) {
      if (e > t) {
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
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && t >= r : e < s && t > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == s ? an : Jl, e == l && t == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = pt : o.markDirty(e - l, t - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? an : pt;
      }
      r = s;
    }
    this.dirty = an;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? an : Jl;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
}
class dd extends Wr {
  constructor(e, t, r, i) {
    let o, s = t.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == qe && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
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
class Lh extends Wr {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class wn extends Wr {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
    return (!s || !s.dom) && (s = dt.renderSpec(document, t.type.spec.toDOM(t, r))), new wn(e, t, s.dom, s.contentDOM || s.dom);
  }
  parseRule() {
    return this.dirty & pt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM || void 0 };
  }
  matchesMark(e) {
    return this.dirty != pt && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != qe) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = qe;
    }
  }
  slice(e, t, r) {
    let i = wn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    t < s && (o = ds(o, t, s, r)), e > 0 && (o = ds(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
}
class _t extends Wr {
  constructor(e, t, r, i, o, s, l, a, c) {
    super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
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
  static create(e, t, r, i, o, s) {
    let l = o.nodeViews[t.type.name], a, c = l && l(t, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), d = c && c.dom, u = c && c.contentDOM;
    if (t.isText) {
      if (!d)
        d = document.createTextNode(t.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      d || ({ dom: d, contentDOM: u } = dt.renderSpec(document, t.type.spec.toDOM(t)));
    !u && !t.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), t.type.spec.draggable && (d.draggable = !0));
    let f = d;
    return d = pd(d, r, t), c ? a = new Ih(e, t, r, i, d, u || null, f, c, o, s + 1) : t.isText ? new so(e, t, r, i, d, f, o) : new _t(e, t, r, i, d, u || null, f, o, s + 1);
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
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => x.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == qe && e.eq(this.node) && cs(t, this.outerDeco) && r.eq(this.innerDeco);
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
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new Bh(this, s && s.node, e);
    Vh(this.node, this.innerDeco, (c, d, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(d == this.node.childCount ? J.none : this.node.child(d).marks, r, e), a.placeWidget(c, e, i);
    }, (c, d, u, f) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, d, u, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, d, u, h, e) || a.updateNextNode(c, d, u, e, f, i) || a.addNode(c, d, u, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == an) && (s && this.protectLocalComposition(e, s), fd(this.contentDOM, this.children, e), Gn && Fh(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof P) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.domSelectionRange(), s = $h(o.focusNode, o.focusOffset);
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let l = s.nodeValue, a = jh(this.node.content, l, r - t, i - t);
      return a < 0 ? null : { node: s, pos: a, text: l };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new Lh(this, o, t, i);
    e.input.compositionNodes.push(s), this.children = ds(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == pt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = qe;
  }
  updateOuterDeco(e) {
    if (cs(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = hd(this.dom, this.nodeDOM, as(this.outerDeco, this.node, t), as(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
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
function Gl(n, e, t, r, i) {
  pd(r, e, n);
  let o = new _t(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class so extends _t {
  constructor(e, t, r, i, o, s, l) {
    super(e, t, r, i, o, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == pt || this.dirty != qe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != qe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = qe, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new so(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = pt);
  }
  get domAtom() {
    return !1;
  }
}
class ud extends Wr {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == qe && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Ih extends _t {
  constructor(e, t, r, i, o, s, l, a, c, d) {
    super(e, t, r, i, o, s, l, c, d), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == pt)
      return !1;
    if (this.spec.update) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
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
function fd(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Yl(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (s instanceof wn) {
      let a = r ? r.previousSibling : n.lastChild;
      fd(s.contentDOM, s.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Yl(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const br = function(n) {
  n && (this.nodeName = n);
};
br.prototype = /* @__PURE__ */ Object.create(null);
const cn = [new br()];
function as(n, e, t) {
  if (n.length == 0)
    return cn;
  let r = t ? cn[0] : new br(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let s = n[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new br(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (t && i.length == 1 && i.push(r = new br(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function hd(n, e, t, r) {
  if (t == cn && r == cn)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = t[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = cn[0]), i = a;
    }
    Ph(i, l || cn[0], s);
  }
  return i;
}
function Ph(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function pd(n, e, t) {
  return hd(n, n, cn, as(e, t, n.nodeType != 1));
}
function cs(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Yl(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Bh {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = zh(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = qe, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = wn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == pt && s.dom == s.contentDOM && (s.dirty = an), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof _t) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let d = a.dom, u, f = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != pt && cs(t, a.outerDeco));
        if (!f && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!f && (u = this.recreateWrapper(a, e, t, r, i, s)))
          return this.top.children[this.index] = u, u.dirty = an, u.updateChildren(i, s + 1), u.dirty = qe, this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, o, s) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
      return null;
    let l = _t.create(this.top, t, r, i, o, s);
    if (!l.contentDOM)
      return null;
    l.children = e.children, e.children = [], e.destroy();
    for (let a of l.children)
      a.parent = l;
    return l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, o) {
    let s = _t.create(this.top, e, t, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new dd(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof wn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof so) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Te || we) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new ud(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function zh(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = t.children[r - 1];
          if (c instanceof wn)
            t = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (a) {
        if (a != n.child(i - 1))
          break;
        --i, o.set(l, i), s.push(l);
      }
    }
  return { index: i, matched: o, matches: s.reverse() };
}
function Hh(n, e) {
  return n.type.side - e.type.side;
}
function Vh(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let d = n.child(c);
      r(d, i, e.forChild(o, d), c), o += d.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    if (s < i.length && i[s].to == o) {
      let p = i[s++], m;
      for (; s < i.length && i[s].to == o; )
        (m || (m = [p])).push(i[s++]);
      if (m) {
        m.sort(Hh);
        for (let g = 0; g < m.length; g++)
          t(m[g], c, !!a);
      } else
        t(p, c, !!a);
    }
    let d, u;
    if (a)
      u = -1, d = a, a = null;
    else if (c < n.childCount)
      u = c, d = n.child(c++);
    else
      break;
    for (let p = 0; p < l.length; p++)
      l[p].to <= o && l.splice(p--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let f = o + d.nodeSize;
    if (d.isText) {
      let p = f;
      s < i.length && i[s].from < p && (p = i[s].from);
      for (let m = 0; m < l.length; m++)
        l[m].to < p && (p = l[m].to);
      p < f && (a = d.cut(p - o), d = d.cut(0, p - o), f = p, u = -1);
    }
    let h = d.isInline && !d.isLeaf ? l.filter((p) => !p.inline) : l.slice();
    r(d, h, e.forChild(o, d), u), o = f;
  }
}
function Fh(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function $h(n, e) {
  for (; ; ) {
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.childNodes.length > e && n.childNodes[e].nodeType == 3)
        return n.childNodes[e];
      n = n.childNodes[e - 1], e = ct(n);
    } else if (n.nodeType == 1 && e < n.childNodes.length)
      n = n.childNodes[e], e = 0;
    else
      return null;
  }
}
function jh(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let s = n.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= t) {
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function ds(n, e, t, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < n.length; s++) {
    let a = n[s], c = l, d = l += a.size;
    c >= t || d <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), d > t && o.push(a.slice(t - c, a.size, r)));
  }
  return o;
}
function _s(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (io(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let d = i.node;
    if (i && d.isAtom && L.isSelectable(d) && i.parent && !(d.isInline && uh(t.focusNode, t.focusOffset, i.dom))) {
      let u = i.posBefore;
      c = new L(s == u ? l : r.resolve(u));
    }
  } else {
    let d = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (d < 0)
      return null;
    a = r.resolve(d);
  }
  if (!c) {
    let d = e == "pointer" || n.state.selection.head < l.pos && !o ? 1 : -1;
    c = Ks(n, a, l, d);
  }
  return c;
}
function md(n) {
  return n.editable ? n.hasFocus() : yd(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function At(n, e = !1) {
  let t = n.state.selection;
  if (gd(n, t), !!md(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && we) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && bn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      _h(n);
    else {
      let { anchor: r, head: i } = t, o, s;
      Xl && !(t instanceof P) && (t.$from.parent.inlineContent || (o = Ql(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = Ql(n, t.to))), n.docView.setSelection(r, i, n.root, e), Xl && (o && Zl(o), s && Zl(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Wh(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Xl = Te || we && mh < 63;
function Ql(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (Te && i && i.contentEditable == "false")
    return Ro(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return Ro(i);
    if (o)
      return Ro(o);
  }
}
function Ro(n) {
  return n.contentEditable = "true", Te && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Zl(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Wh(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!md(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function _h(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, Pe(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && Ne && Wt <= 11 && (r.disabled = !0, r.disabled = !1);
}
function gd(n, e) {
  if (e instanceof L) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (ea(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    ea(n);
}
function ea(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Ks(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || P.between(e, t, r);
}
function ta(n) {
  return n.editable && !n.hasFocus() ? !1 : yd(n);
}
function yd(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Kh(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return bn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function us(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && R.findFrom(o, e);
}
function on(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function na(n, e, t) {
  let r = n.state.selection;
  if (r instanceof P) {
    if (!r.empty || t.indexOf("s") > -1)
      return !1;
    if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
      let i = us(n.state, e);
      return i && i instanceof L ? on(n, i) : !1;
    } else if (!(je && t.indexOf("m") > -1)) {
      let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
      if (!o || o.isText)
        return !1;
      let l = e < 0 ? i.pos - o.nodeSize : i.pos;
      return o.isAtom || (s = n.docView.descAt(l)) && !s.contentDOM ? L.isSelectable(o) ? on(n, new L(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : oo ? on(n, new P(n.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
    }
  } else {
    if (r instanceof L && r.node.isInline)
      return on(n, new P(e > 0 ? r.$to : r.$from));
    {
      let i = us(n.state, e);
      return i ? on(n, i) : !1;
    }
  }
}
function Di(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function wr(n) {
  let e = n.pmViewDesc;
  return e && e.size == 0 && (n.nextSibling || n.nodeName != "BR");
}
function fr(n, e) {
  return e < 0 ? qh(n) : vd(n);
}
function qh(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, s = !1;
  for (tt && t.nodeType == 1 && r < Di(t) && wr(t.childNodes[r]) && (s = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (wr(l))
          i = t, o = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (bd(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && wr(l); )
          i = t.parentNode, o = Pe(l), l = l.previousSibling;
        if (l)
          t = l, r = Di(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  s ? fs(n, t, r) : i && fs(n, i, o);
}
function vd(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Di(t), o, s;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (wr(l))
        o = t, s = ++r;
      else
        break;
    } else {
      if (bd(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && wr(l); )
          o = l.parentNode, s = Pe(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Di(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && fs(n, o, s);
}
function bd(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function fs(n, e, t) {
  let r = n.domSelection();
  if (io(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && At(n);
  }, 50);
}
function ra(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(we || gh) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function ia(n, e, t) {
  let r = n.state.selection;
  if (r instanceof P && !r.empty || t.indexOf("s") > -1 || je && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = us(n.state, e);
    if (s && s instanceof L)
      return on(n, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof et ? R.near(s, e) : R.findFrom(s, e);
    return l ? on(n, l) : !1;
  }
  return !1;
}
function oa(n, e) {
  if (!(n.state.selection instanceof P))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let s = n.state.tr;
    return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
  }
  return !1;
}
function sa(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Uh(n) {
  if (!Te || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    sa(n, r, "true"), setTimeout(() => sa(n, r, "false"), 20);
  }
  return !1;
}
function Jh(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Gh(n, e) {
  let t = e.keyCode, r = Jh(e);
  if (t == 8 || je && t == 72 && r == "c")
    return oa(n, -1) || fr(n, -1);
  if (t == 46 && !e.shiftKey || je && t == 68 && r == "c")
    return oa(n, 1) || fr(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || je && t == 66 && r == "c") {
    let i = t == 37 ? ra(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return na(n, i, r) || fr(n, i);
  } else if (t == 39 || je && t == 70 && r == "c") {
    let i = t == 39 ? ra(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return na(n, i, r) || fr(n, i);
  } else {
    if (t == 38 || je && t == 80 && r == "c")
      return ia(n, -1, r) || fr(n, -1);
    if (t == 40 || je && t == 78 && r == "c")
      return Uh(n) || ia(n, 1, r) || vd(n);
    if (r == (je ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function wd(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let s = n.someProp("clipboardSerializer") || dt.fromSchema(n.state.schema), l = Td(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, d, u = 0;
  for (; c && c.nodeType == 1 && (d = Md[c.nodeName.toLowerCase()]); ) {
    for (let h = d.length - 1; h >= 0; h--) {
      let p = l.createElement(d[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${u ? ` -${u}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f };
}
function kd(n, e, t, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!t && !e)
    return null;
  let a = e && (r || o || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, o || r, n);
    }), o)
      return e ? new A(x.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : A.empty;
    let u = n.someProp("clipboardTextParser", (f) => f(e, i, r, n));
    if (u)
      l = u;
    else {
      let f = i.marks(), { schema: h } = n.state, p = dt.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (u) => {
      t = u(t, n);
    }), s = Qh(t), oo && Zh(s);
  let c = s && s.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || qn.fromSchema(n.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || d),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Yh.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = ep(la(l, +d[1], +d[2]), d[4]);
  else if (l = A.maxOpen(Xh(l.content, i), !0), l.openStart || l.openEnd) {
    let u = 0, f = 0;
    for (let h = l.content.firstChild; u < l.openStart && !h.type.spec.isolating; u++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = la(l, u, f);
  }
  return n.someProp("transformPasted", (u) => {
    l = u(l, n);
  }), l;
}
const Yh = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Xh(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
    if (n.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && Cd(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Sd(s[s.length - 1], o.length));
        let d = xd(l, a);
        s.push(d), i = i.matchType(d.type), o = a;
      }
    }), s)
      return x.from(s);
  }
  return n;
}
function xd(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, x.from(n));
  return n;
}
function Cd(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = Cd(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(x.from(xd(t, n, i + 1))));
  }
}
function Sd(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Sd(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(x.empty, !0);
  return n.copy(t.append(r));
}
function hs(n, e, t, r, i, o) {
  let s = e < 0 ? n.firstChild : n.lastChild, l = s.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (l = hs(l, e, t, r, i + 1, o)), i >= t && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(x.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(l));
}
function la(n, e, t) {
  return e < n.openStart && (n = new A(hs(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new A(hs(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Md = {
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
let aa = null;
function Td() {
  return aa || (aa = document.implementation.createHTMLDocument("title"));
}
function Qh(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Td().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Md[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = n, i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function Zh(n) {
  let e = n.querySelectorAll(we ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function ep(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: s } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = x.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new A(i, o, s);
}
const Ae = {}, Oe = {}, tp = { touchstart: !0, touchmove: !0 };
class np {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function rp(n) {
  for (let e in Ae) {
    let t = Ae[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      op(n, r) && !qs(n, r) && (n.editable || !(r.type in Oe)) && t(n, r);
    }, tp[e] ? { passive: !0 } : void 0);
  }
  Te && n.dom.addEventListener("input", () => null), ps(n);
}
function jt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function ip(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function ps(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => qs(n, r));
  });
}
function qs(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function op(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function sp(n, e) {
  !qs(n, e) && Ae[e.type] && (n.editable || !(e.type in Oe)) && Ae[e.type](n, e);
}
Oe.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Od(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Qe && we && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Gn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, rn(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || Gh(n, t) ? t.preventDefault() : jt(n, "key");
};
Oe.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Oe.keypress = (n, e) => {
  let t = e;
  if (Od(n, t) || !t.charCode || t.ctrlKey && !t.altKey || je && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof P) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function lo(n) {
  return { left: n.clientX, top: n.clientY };
}
function lp(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Us(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (n.someProp(e, (l) => s > o.depth ? l(n, t, o.nodeAfter, o.before(s), i, !0) : l(n, t, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function Kn(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function ap(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && L.isSelectable(r) ? (Kn(n, new L(t), "pointer"), !0) : !1;
}
function cp(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof L && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (L.isSelectable(l)) {
      r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (Kn(n, L.create(n.state.doc, i), "pointer"), !0) : !1;
}
function dp(n, e, t, r, i) {
  return Us(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? cp(n, t) : ap(n, t));
}
function up(n, e, t, r) {
  return Us(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function fp(n, e, t, r) {
  return Us(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || hp(n, t, r);
}
function hp(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Kn(n, P.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      Kn(n, P.create(r, l + 1, l + 1 + s.content.size), "pointer");
    else if (L.isSelectable(s))
      Kn(n, L.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function Js(n) {
  return Ri(n);
}
const Ad = je ? "metaKey" : "ctrlKey";
Ae.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Js(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && lp(t, n.input.lastClick) && !t[Ad] && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o };
  let s = n.posAtCoords(lo(t));
  s && (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new pp(n, s, t, !!r)) : (o == "doubleClick" ? up : fp)(n, s.pos, s.inside, t) ? t.preventDefault() : jt(n, "pointer"));
};
class pp {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Ad], this.allowDefault = r.shiftKey;
    let o, s;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), s = t.inside;
    else {
      let d = e.state.doc.resolve(t.pos);
      o = d.parent, s = d.depth ? d.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof L && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && tt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), jt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => At(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(lo(e))), this.updateAllowDefault(e), this.allowDefault || !t ? jt(this.view, "pointer") : dp(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Te && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    we && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Kn(this.view, R.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : jt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), jt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Ae.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Js(n), jt(n, "pointer");
};
Ae.touchmove = (n) => {
  n.input.lastTouch = Date.now(), jt(n, "pointer");
};
Ae.contextmenu = (n) => Js(n);
function Od(n, e) {
  return n.composing ? !0 : Te && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const mp = Qe ? 5e3 : -1;
Oe.compositionstart = Oe.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Ri(n, !0), n.markCursor = null;
    else if (Ri(n), tt && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          n.domSelection().collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    n.input.composing = !0;
  }
  Ed(n, mp);
};
Oe.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionID++, Ed(n, 20));
};
function Ed(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Ri(n), e));
}
function Nd(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = gp()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function gp() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Ri(n, e = !1) {
  if (!(Qe && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Nd(n), e || n.docView && n.docView.dirty) {
      let t = _s(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function yp(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Yn = Ne && Wt < 15 || Gn && yh < 604;
Ae.copy = Oe.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = Yn ? null : t.clipboardData, s = r.content(), { dom: l, text: a } = wd(n, s);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : yp(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function vp(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function bp(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Nr(n, r.value, null, i, e) : Nr(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Nr(n, e, t, r, i) {
  let o = kd(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, o || A.empty)))
    return !0;
  if (!o)
    return !1;
  let s = vp(o), l = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
Oe.paste = (n, e) => {
  let t = e;
  if (n.composing && !Qe)
    return;
  let r = Yn ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Nr(n, r.getData("text/plain"), r.getData("text/html"), i, t) ? t.preventDefault() : bp(n, t);
};
class wp {
  constructor(e, t) {
    this.slice = e, this.move = t;
  }
}
const Dd = je ? "altKey" : "ctrlKey";
Ae.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords(lo(t));
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof L ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      n.dispatch(n.state.tr.setSelection(L.create(n.state.doc, r.mightDrag.pos)));
    else if (t.target && t.target.nodeType == 1) {
      let c = n.docView.nearestDesc(t.target, !0);
      c && c.node.type.spec.draggable && c != n.docView && n.dispatch(n.state.tr.setSelection(L.create(n.state.doc, c.posBefore)));
    }
  }
  let s = n.state.selection.content(), { dom: l, text: a } = wd(n, s);
  t.dataTransfer.clearData(), t.dataTransfer.setData(Yn ? "Text" : "text/html", l.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Yn || t.dataTransfer.setData("text/plain", a), n.dragging = new wp(s, !t[Dd]);
};
Ae.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Oe.dragover = Oe.dragenter = (n, e) => e.preventDefault();
Oe.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(lo(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), s = r && r.slice;
  s ? n.someProp("transformPasted", (p) => {
    s = p(s, n);
  }) : s = kd(n, t.dataTransfer.getData(Yn ? "Text" : "text/plain"), Yn ? null : t.dataTransfer.getData("text/html"), !1, o);
  let l = !!(r && !t[Dd]);
  if (n.someProp("handleDrop", (p) => p(n, t, s || A.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!s)
    return;
  t.preventDefault();
  let a = s ? Gc(n.state.doc, o.pos, s) : o.pos;
  a == null && (a = o.pos);
  let c = n.state.tr;
  l && c.deleteSelection();
  let d = c.mapping.map(a), u = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, f = c.doc;
  if (u ? c.replaceRangeWith(d, d, s.content.firstChild) : c.replaceRange(d, d, s), c.doc.eq(f))
    return;
  let h = c.doc.resolve(d);
  if (u && L.isSelectable(s.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new L(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, v, w) => p = w), c.setSelection(Ks(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
Ae.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && At(n);
  }, 20));
};
Ae.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Ae.beforeinput = (n, e) => {
  if (we && Qe && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, rn(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Oe)
  Ae[n] = Oe[n];
function Dr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Gs {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || mn, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new ke(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Gs && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Dr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Kt {
  constructor(e, t) {
    this.attrs = e, this.spec = t || mn;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new ke(o, s, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Kt && Dr(this.attrs, e.attrs) && Dr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Kt;
  }
  destroy() {
  }
}
class Ys {
  constructor(e, t) {
    this.attrs = e, this.spec = t || mn;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(t.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new ke(o.pos - r, s.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Ys && Dr(this.attrs, e.attrs) && Dr(this.spec, e.spec);
  }
  destroy() {
  }
}
class ke {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new ke(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new ke(e, e, new Gs(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new ke(e, t, new Kt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new ke(e, t, new Ys(r, i));
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
    return this.type instanceof Kt;
  }
}
const In = [], mn = {};
class Z {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : In, this.children = t.length ? t : In;
  }
  /**
  Create a set of decorations, using the structure of the given
  document.
  */
  static create(e, t) {
    return t.length ? Li(t, e, 0, mn) : be;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= t && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < t && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, t - l, r, i + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == be || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || mn);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? kp(this.children, s || [], e, t, r, i, o) : s ? new Z(s.sort(gn), In) : be;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Needs access to the current document to
  create the appropriate tree structure.
  */
  add(e, t) {
    return t.length ? this == be ? Z.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, d;
      if (d = Ld(t, l, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, d, c + 1) : i.splice(o, 0, a, a + l.nodeSize, Li(d, l, c + 1, mn)), o += 3;
      }
    });
    let s = Rd(o ? Id(t) : t, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new Z(s.length ? this.local.concat(s).sort(gn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == be ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + t, a = r[o + 1] + t;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > l && u.to < a && (e[d] = null, (s || (s = [])).push(u));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != be ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new Z(i, r) : be;
  }
  /**
  @internal
  */
  forChild(e, t) {
    if (this == be)
      return this;
    if (t.isLeaf)
      return Z.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof Kt) {
        let c = Math.max(o, a.from) - o, d = Math.min(s, a.to) - o;
        c < d && (i || (i = [])).push(a.copy(c, d));
      }
    }
    if (i) {
      let l = new Z(i.sort(gn), In);
      return r ? new Bt([l, r]) : l;
    }
    return r || be;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Z) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Xs(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == be)
      return In;
    if (e.inlineContent || !this.local.some(Kt.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Kt || t.push(this.local[r]);
    return t;
  }
}
Z.empty = new Z([], []);
Z.removeOverlap = Xs;
const be = Z.empty;
class Bt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, mn));
    return Bt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return Z.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != be && (o instanceof Bt ? r = r.concat(o.members) : r.push(o));
    }
    return Bt.from(r);
  }
  eq(e) {
    if (!(e instanceof Bt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            t.push(o[s]);
        }
    }
    return t ? Xs(r ? t : t.sort(gn)) : In;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return be;
      case 1:
        return e[0];
      default:
        return new Bt(e.every((t) => t instanceof Z) ? e : e.reduce((t, r) => t.concat(r instanceof Z ? r : r.members), []));
    }
  }
}
function kp(n, e, t, r, i, o, s) {
  let l = n.slice();
  for (let c = 0, d = o; c < t.maps.length; c++) {
    let u = 0;
    t.maps[c].forEach((f, h, p, m) => {
      let g = m - p - (h - f);
      for (let v = 0; v < l.length; v += 3) {
        let w = l[v + 1];
        if (w < 0 || f > w + d - u)
          continue;
        let C = l[v] + d - u;
        h >= C ? l[v + 1] = f <= C ? -2 : -1 : p >= i && g && (l[v] += g, l[v + 1] += g);
      }
      u += g;
    }), d = t.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = t.map(n[c] + o), u = d - i;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + o, -1), h = f - i, { index: p, offset: m } = r.content.findIndex(u), g = r.maybeChild(p);
      if (g && m == u && m + g.nodeSize == h) {
        let v = l[c + 2].mapInner(t, g, d + 1, n[c] + o + 1, s);
        v != be ? (l[c] = u, l[c + 1] = h, l[c + 2] = v) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = xp(l, n, e, t, i, o, s), d = Li(c, r, 0, s);
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
  return new Z(e.sort(gn), l);
}
function Rd(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new ke(i.from + e, i.to + e, i.type));
  }
  return t;
}
function xp(n, e, t, r, i, o, s) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let u = a.local[d].map(r, i, c);
      u ? t.push(u) : s.onRemove && s.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + o + 1);
  return t;
}
function Ld(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, s; o < n.length; o++)
    (s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
  return i;
}
function Id(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Li(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = Ld(n, l, a + t);
    if (c) {
      o = !0;
      let d = Li(c, l, t + a + 1, r);
      d != be && i.push(a, a + l.nodeSize, d);
    }
  });
  let s = Rd(o ? Id(n) : n, -t).sort(gn);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new Z(s, i) : be;
}
function gn(n, e) {
  return n.from - e.from || n.to - e.to;
}
function Xs(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), ca(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), ca(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function ca(n, e, t) {
  for (; e < n.length && gn(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function Lo(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != be && e.push(r);
  }), n.cursorWrapper && e.push(Z.create(n.state.doc, [n.cursorWrapper.deco])), Bt.from(e);
}
const Cp = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Sp = Ne && Wt <= 11;
class Mp {
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
class Tp {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Mp(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Ne && Wt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Sp && (this.onCharData = (r) => {
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
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Cp)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
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
    if (ta(this.view)) {
      if (this.suppressingSelectionUpdates)
        return At(this.view);
      if (Ne && Wt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && bn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
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
    let t = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Er(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = Er(o))
      if (t.has(o)) {
        r = o;
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
    let t = this.observer ? this.observer.takeRecords() : [];
    this.queue.length && (t = this.queue.concat(t), this.queue.length = 0);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && ta(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < t.length; d++) {
        let u = this.registerMutation(t[d], a);
        u && (o = o < 0 ? u.from : Math.min(u.from, o), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
      }
    if (tt && a.length > 1) {
      let d = a.filter((u) => u.nodeName == "BR");
      if (d.length == 2) {
        let u = d[0], f = d[1];
        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove();
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && io(r) && (c = _s(e)) && c.eq(R.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, At(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), Ap(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || At(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++)
        t.push(e.addedNodes[d]);
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (Ne && Wt <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: u, nextSibling: f } = e.addedNodes[d];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = i && i.parentNode == e.target ? Pe(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? Pe(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
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
let da = /* @__PURE__ */ new WeakMap(), ua = !1;
function Ap(n) {
  if (!da.has(n) && (da.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = tt, ua)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), ua = !0;
  }
}
function Op(n) {
  let e;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  n.dom.addEventListener("beforeinput", t, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", t, !0);
  let r = e.startContainer, i = e.startOffset, o = e.endContainer, s = e.endOffset, l = n.domAtPos(n.state.selection.anchor);
  return bn(l.node, l.offset, o, s) && ([r, i, o, s] = [o, s, r, i]), { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: s };
}
function Ep(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, d = a.anchorNode;
  if (d && n.dom.contains(d.nodeType == 1 ? d : d.parentNode) && (c = [{ node: d, offset: a.anchorOffset }], io(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), we && n.input.lastKeyCode === 8)
    for (let g = o; g > i; g--) {
      let v = r.childNodes[g - 1], w = v.pmViewDesc;
      if (v.nodeName == "BR" && !w) {
        o = g;
        break;
      }
      if (!w || w.size)
        break;
    }
  let u = n.state.doc, f = n.someProp("domParser") || qn.fromSchema(n.state.schema), h = u.resolve(s), p = null, m = f.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Np,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, v = c[1] && c[1].pos;
    v == null && (v = g), p = { anchor: g + s, head: v + s };
  }
  return { doc: m, sel: p, from: s, to: l };
}
function Np(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Te && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Te && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Dp = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Rp(n, e, t, r, i) {
  if (e < 0) {
    let S = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, B = _s(n, S);
    if (B && !n.state.selection.eq(B)) {
      if (we && Qe && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (q) => q(n, rn(13, "Enter"))))
        return;
      let H = n.state.tr.setSelection(B);
      S == "pointer" ? H.setMeta("pointer", !0) : S == "key" && H.scrollIntoView(), n.composing && H.setMeta("composition", n.input.compositionID), n.dispatch(H);
    }
    return;
  }
  let o = n.state.doc.resolve(e), s = o.sharedDepth(t);
  e = o.before(s + 1), t = n.state.doc.resolve(t).after(s + 1);
  let l = n.state.selection, a = Ep(n, e, t), c = n.state.doc, d = c.slice(a.from, a.to), u, f;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (u = n.state.selection.to, f = "end") : (u = n.state.selection.from, f = "start"), n.input.lastKeyCode = null;
  let h = Pp(d.content, a.doc.content, a.from, u, f);
  if ((Gn && n.input.lastIOSEnter > Date.now() - 225 || Qe) && i.some((S) => S.nodeType == 1 && !Dp.test(S.nodeName)) && (!h || h.endA >= h.endB) && n.someProp("handleKeyDown", (S) => S(n, rn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && l instanceof P && !l.empty && l.$head.sameParent(l.$anchor) && !n.composing && !(a.sel && a.sel.anchor != a.sel.head))
      h = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (a.sel) {
        let S = fa(n, n.state.doc, a.sel);
        if (S && !S.eq(n.state.selection)) {
          let B = n.state.tr.setSelection(S);
          n.composing && B.setMeta("composition", n.input.compositionID), n.dispatch(B);
        }
      }
      return;
    }
  if (we && n.cursorWrapper && a.sel && a.sel.anchor == n.cursorWrapper.deco.from && a.sel.head == a.sel.anchor) {
    let S = h.endB - h.start;
    a.sel = { anchor: a.sel.anchor + S, head: a.sel.anchor + S };
  }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && h.start == h.endB && n.state.selection instanceof P && (h.start > n.state.selection.from && h.start <= n.state.selection.from + 2 && n.state.selection.from >= a.from ? h.start = n.state.selection.from : h.endA < n.state.selection.to && h.endA >= n.state.selection.to - 2 && n.state.selection.to <= a.to && (h.endB += n.state.selection.to - h.endA, h.endA = n.state.selection.to)), Ne && Wt <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > a.from && a.doc.textBetween(h.start - a.from - 1, h.start - a.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let p = a.doc.resolveNoCache(h.start - a.from), m = a.doc.resolveNoCache(h.endB - a.from), g = c.resolve(h.start), v = p.sameParent(m) && p.parent.inlineContent && g.end() >= h.endA, w;
  if ((Gn && n.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((S) => S.nodeName == "DIV" || S.nodeName == "P")) || !v && p.pos < a.doc.content.size && !p.sameParent(m) && (w = R.findFrom(a.doc.resolve(p.pos + 1), 1, !0)) && w.head == m.pos) && n.someProp("handleKeyDown", (S) => S(n, rn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > h.start && Ip(c, h.start, h.endA, p, m) && n.someProp("handleKeyDown", (S) => S(n, rn(8, "Backspace")))) {
    Qe && we && n.domObserver.suppressSelectionUpdates();
    return;
  }
  we && Qe && h.endB == h.start && (n.input.lastAndroidDelete = Date.now()), Qe && !v && p.start() != m.start() && m.parentOffset == 0 && p.depth == m.depth && a.sel && a.sel.anchor == a.sel.head && a.sel.head == h.endA && (h.endB -= 2, m = a.doc.resolveNoCache(h.endB - a.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(S) {
      return S(n, rn(13, "Enter"));
    });
  }, 20));
  let C = h.start, y = h.endA, T, b, O;
  if (v) {
    if (p.pos == m.pos)
      Ne && Wt <= 11 && p.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => At(n), 20)), T = n.state.tr.delete(C, y), b = c.resolve(h.start).marksAcross(c.resolve(h.endA));
    else if (
      // Adding or removing a mark
      h.endA == h.endB && (O = Lp(p.parent.content.cut(p.parentOffset, m.parentOffset), g.parent.content.cut(g.parentOffset, h.endA - g.start())))
    )
      T = n.state.tr, O.type == "add" ? T.addMark(C, y, O.mark) : T.removeMark(C, y, O.mark);
    else if (p.parent.child(p.index()).isText && p.index() == m.index() - (m.textOffset ? 0 : 1)) {
      let S = p.parent.textBetween(p.parentOffset, m.parentOffset);
      if (n.someProp("handleTextInput", (B) => B(n, C, y, S)))
        return;
      T = n.state.tr.insertText(S, C, y);
    }
  }
  if (T || (T = n.state.tr.replace(C, y, a.doc.slice(h.start - a.from, h.endB - a.from))), a.sel) {
    let S = fa(n, T.doc, a.sel);
    S && !(we && Qe && n.composing && S.empty && (h.start != h.endB || n.input.lastAndroidDelete < Date.now() - 100) && (S.head == C || S.head == T.mapping.map(y) - 1) || Ne && S.empty && S.head == C) && T.setSelection(S);
  }
  b && T.ensureMarks(b), n.composing && T.setMeta("composition", n.input.compositionID), n.dispatch(T.scrollIntoView());
}
function fa(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Ks(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Lp(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, l, a;
  for (let d = 0; d < r.length; d++)
    i = r[d].removeFromSet(i);
  for (let d = 0; d < t.length; d++)
    o = t[d].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let c = [];
  for (let d = 0; d < e.childCount; d++)
    c.push(a(e.child(d)));
  if (x.from(c).eq(n))
    return { mark: l, type: s };
}
function Ip(n, e, t, r, i) {
  if (!r.parent.isTextblock || // The content must have shrunk
  t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
  Io(r, !0, !1) < i.pos)
    return !1;
  let o = n.resolve(e);
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = n.resolve(Io(o, !0, !0));
  return !s.parent.isTextblock || s.pos > t || Io(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function Io(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function Pp(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a: s, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    r -= s + a - o;
  }
  if (s < o && n.size < e.size) {
    let a = r <= o && r >= s ? o - r : 0;
    o -= a, l = o + (l - s), s = o;
  } else if (l < o) {
    let a = r <= o && r >= l ? o - r : 0;
    o -= a, s = o + (s - l), l = o;
  }
  return { start: o, endA: s, endB: l };
}
class Bp {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new np(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(ya), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = ma(this), pa(this), this.nodeViews = ga(this), this.docView = Gl(this.state.doc, ha(this), Lo(this), this.dom, this), this.domObserver = new Tp(this, (r, i, o, s) => Rp(this, r, i, o, s)), this.domObserver.start(), rp(this), this.updatePluginViews();
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
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && ps(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(ya), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let r = this.state, i = !1, o = !1;
    e.storedMarks && this.composing && (Nd(this), o = !0), this.state = e;
    let s = r.plugins != e.plugins || this._props.plugins != t.plugins;
    if (s || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let f = ga(this);
      Hp(f, this.nodeViews) && (this.nodeViews = f, i = !0);
    }
    (s || t.handleDOMEvents != this._props.handleDOMEvents) && ps(this), this.editable = ma(this), pa(this);
    let l = Lo(this), a = ha(this), c = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", d = i || !this.docView.matchesNode(e.doc, a, l);
    (d || !e.selection.eq(r.selection)) && (o = !0);
    let u = c == "preserve" && o && this.dom.style.overflowAnchor == null && wh(this);
    if (o) {
      this.domObserver.stop();
      let f = d && (Ne || we) && !this.composing && !r.selection.empty && !e.selection.empty && zp(r.selection, e.selection);
      if (d) {
        let h = we ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, a, l, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Gl(e.doc, a, l, this.dom, this)), h && !this.trackWrites && (f = !0);
      }
      f || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Kh(this)) ? At(this, f) : (gd(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && kh(u);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof L) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Wl(this, t.getBoundingClientRect(), e);
      } else
        Wl(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Ne) {
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
    this.domObserver.stop(), this.editable && xh(this.dom), At(this), this.domObserver.start();
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
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
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
    return Ah(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return ad(this, e, t);
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
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
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
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
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
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
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
  endOfTextblock(e, t) {
    return Rh(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Nr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Nr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (ip(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Lo(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
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
    return sp(this, e);
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
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    return Te && this.root.nodeType === 11 && hh(this.dom.ownerDocument) == this.dom ? Op(this) : this.domSelection();
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function ha(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [ke.node(0, n.state.doc.content.size, e)];
}
function pa(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: ke.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function ma(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function zp(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function ga(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Hp(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function ya(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Ut = {
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
}, Ii = {
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
}, Vp = typeof navigator < "u" && /Mac/.test(navigator.platform), Fp = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ye = 0; ye < 10; ye++)
  Ut[48 + ye] = Ut[96 + ye] = String(ye);
for (var ye = 1; ye <= 24; ye++)
  Ut[ye + 111] = "F" + ye;
for (var ye = 65; ye <= 90; ye++)
  Ut[ye] = String.fromCharCode(ye + 32), Ii[ye] = String.fromCharCode(ye);
for (var Po in Ut)
  Ii.hasOwnProperty(Po) || (Ii[Po] = Ut[Po]);
function $p(n) {
  var e = Vp && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Fp && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Ii : Ut)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const jp = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Wp(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      jp ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function _p(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Wp(t)] = n[t];
  return e;
}
function Bo(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function Kp(n) {
  return new oe({ props: { handleKeyDown: Qs(n) } });
}
function Qs(n) {
  let e = _p(n);
  return function(t, r) {
    let i = $p(r), o, s = e[Bo(i, r)];
    if (s && s(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[Bo(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = Ut[r.keyCode]) && o != i) {
        let l = e[Bo(o, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const qp = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Up(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Jp = (n, e, t) => {
  let r = Up(n, t);
  if (!r)
    return !1;
  let i = Pd(r);
  if (!i) {
    let s = r.blockRange(), l = s && rr(s);
    return l == null ? !1 : (e && e(n.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (!o.type.spec.isolating && Hd(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Xn(o, "end") || L.isSelectable(o))) {
    let s = Fs(n.doc, r.before(), r.after(), A.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = n.tr.step(s);
        l.setSelection(Xn(o, "end") ? R.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : L.create(l.doc, i.pos - o.nodeSize)), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function Xn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Gp = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = Pd(r);
  }
  let s = o && o.nodeBefore;
  return !s || !L.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(L.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Pd(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Yp(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Xp = (n, e, t) => {
  let r = Yp(n, t);
  if (!r)
    return !1;
  let i = Bd(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (Hd(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Xn(o, "start") || L.isSelectable(o))) {
    let s = Fs(n.doc, r.before(), r.after(), A.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = n.tr.step(s);
        l.setSelection(Xn(o, "start") ? R.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : L.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, Qp = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Bd(r);
  }
  let s = o && o.nodeAfter;
  return !s || !L.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(L.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function Bd(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Zp = (n, e) => {
  let t = n.selection, r = t instanceof L, i;
  if (r) {
    if (t.node.isTextblock || !Gt(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Jc(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(L.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, em = (n, e) => {
  let t = n.selection, r;
  if (t instanceof L) {
    if (t.node.isTextblock || !Gt(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Jc(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, tm = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && rr(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, nm = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function zd(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const rm = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = zd(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(R.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, im = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof et || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = zd(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(s, o.createAndFill());
    l.setSelection(P.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, om = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (Wn(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && rr(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, sm = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(L.create(n.doc, i))), !0);
};
function lm(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || Gt(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function Hd(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o, s;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (lm(n, e, t))
    return !0;
  let l = e.parent.canReplace(e.index(), e.index() + 1);
  if (l && (o = (s = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && s.matchType(o[0] || i.type).validEnd) {
    if (t) {
      let u = e.pos + i.nodeSize, f = x.empty;
      for (let m = o.length - 1; m >= 0; m--)
        f = x.from(o[m].create(null, f));
      f = x.from(r.copy(f));
      let h = n.tr.step(new he(e.pos - 1, u, e.pos, u, new A(f, 1, 0), o.length, !0)), p = u + 2 * o.length;
      Gt(h.doc, p) && h.join(p), t(h.scrollIntoView());
    }
    return !0;
  }
  let a = R.findFrom(e, 1), c = a && a.$from.blockRange(a.$to), d = c && rr(c);
  if (d != null && d >= e.depth)
    return t && t(n.tr.lift(c, d).scrollIntoView()), !0;
  if (l && Xn(i, "start", !0) && Xn(r, "end")) {
    let u = r, f = [];
    for (; f.push(u), !u.isTextblock; )
      u = u.lastChild;
    let h = i, p = 1;
    for (; !h.isTextblock; h = h.firstChild)
      p++;
    if (u.canReplace(u.childCount, u.childCount, h.content)) {
      if (t) {
        let m = x.empty;
        for (let v = f.length - 1; v >= 0; v--)
          m = x.from(f[v].copy(m));
        let g = n.tr.step(new he(e.pos - f.length, e.pos + i.nodeSize, e.pos + p, e.pos + i.nodeSize - p, new A(m, f.length, 0), 0, !0));
        t(g.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Vd(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(P.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const am = Vd(-1), cm = Vd(1);
function dm(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = s && Vs(s, n, e);
    return l ? (r && r(t.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function va(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let d = t.doc.resolve(c), u = d.index();
            i = d.parent.canReplaceWith(u, u + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[s];
        o.setBlockType(l, a, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function um(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = !1, a = s;
    if (!s)
      return !1;
    if (s.depth >= 2 && i.node(s.depth - 1).type.compatibleContent(n) && s.startIndex == 0) {
      if (i.index(s.depth - 1) == 0)
        return !1;
      let d = t.doc.resolve(s.start - 2);
      a = new Ai(d, d, s.depth), s.endIndex < s.parent.childCount && (s = new Ai(i, t.doc.resolve(o.end(s.depth)), s.depth)), l = !0;
    }
    let c = Vs(a, n, e, s);
    return c ? (r && r(fm(t.tr, s, c, l, n).scrollIntoView()), !0) : !1;
  };
}
function fm(n, e, t, r, i) {
  let o = x.empty;
  for (let d = t.length - 1; d >= 0; d--)
    o = x.from(t[d].type.create(t[d].attrs, o));
  n.step(new he(e.start - (r ? 2 : 0), e.end, e.start, e.end, new A(o, 0, 0), t.length, !0));
  let s = 0;
  for (let d = 0; d < t.length; d++)
    t[d].type == i && (s = d + 1);
  let l = t.length - s, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, f = !0; d < u; d++, f = !1)
    !f && Wn(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(d).nodeSize;
  return n;
}
function hm(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? pm(e, t, n, o) : mm(e, t, o) : !0 : !1;
  };
}
function pm(n, e, t, r) {
  let i = n.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new he(o - 1, s, o, s, new A(x.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Ai(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = rr(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(o, -1) - 1;
  return Gt(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function mm(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(t.start), s = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = o.node(-1), d = o.index(-1);
  if (!c.canReplace(d + (l ? 0 : 1), d + 1, s.content.append(a ? x.empty : x.from(i))))
    return !1;
  let u = o.pos, f = u + s.nodeSize;
  return r.step(new he(u - (l ? 1 : 0), f + (a ? 1 : 0), u + 1, f - 1, new A((l ? x.empty : x.from(i.copy(x.empty))).append(a ? x.empty : x.from(i.copy(x.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function gm(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, d = x.from(c ? n.create() : null), u = new A(x.from(n.create(null, x.from(l.type.create(null, d)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      t(e.tr.step(new he(f - (c ? 3 : 1), h, f, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function ao(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: o } = t;
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
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class co {
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
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...d) => {
      const u = a(...d)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = [], a = !!e, c = e || o.tr, d = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), l.every((f) => f === !0)), u = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...m) => {
        const g = this.buildProps(c, t), v = h(...m)(g);
        return l.push(v), u;
      }])),
      run: d
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...d) => c(...d)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i;
    o.storedMarks && e.setStoredMarks(o.storedMarks);
    const l = {
      tr: e,
      editor: i,
      view: s,
      state: ao({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
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
class ym {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function E(n, e, t) {
  return n.config[e] === void 0 && n.parent ? E(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? E(n.parent, e, t) : null
  }) : n.config[e];
}
function uo(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Fd(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = uo(n), i = [...t, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = E(s, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((d) => {
      d.types.forEach((u) => {
        Object.entries(d.attributes).forEach(([f, h]) => {
          e.push({
            type: u,
            name: f,
            attribute: {
              ...o,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = E(s, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([d, u]) => {
      const f = {
        ...o,
        ...u
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: s.name,
        name: d,
        attribute: f
      });
    });
  }), e;
}
function me(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function G(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      i === "class" ? r[i] = [r[i], o].join(" ") : i === "style" ? r[i] = [r[i], o].join("; ") : r[i] = o;
    }), r;
  }, {});
}
function ms(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => G(t, r), {});
}
function $d(n) {
  return typeof n == "function";
}
function z(n, e = void 0, ...t) {
  return $d(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function vm(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function bm(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function ba(n, e) {
  return n.style ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(t) : bm(t.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function wa(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && vm(t) ? !1 : t != null)
  );
}
function wm(n, e) {
  var t;
  const r = Fd(n), { nodeExtensions: i, markExtensions: o } = uo(n), s = (t = i.find((c) => E(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const d = r.filter((v) => v.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((v, w) => {
      const C = E(w, "extendNodeSchema", u);
      return {
        ...v,
        ...C ? C(c) : {}
      };
    }, {}), h = wa({
      ...f,
      content: z(E(c, "content", u)),
      marks: z(E(c, "marks", u)),
      group: z(E(c, "group", u)),
      inline: z(E(c, "inline", u)),
      atom: z(E(c, "atom", u)),
      selectable: z(E(c, "selectable", u)),
      draggable: z(E(c, "draggable", u)),
      code: z(E(c, "code", u)),
      defining: z(E(c, "defining", u)),
      isolating: z(E(c, "isolating", u)),
      attrs: Object.fromEntries(d.map((v) => {
        var w;
        return [v.name, { default: (w = v == null ? void 0 : v.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), p = z(E(c, "parseHTML", u));
    p && (h.parseDOM = p.map((v) => ba(v, d)));
    const m = E(c, "renderHTML", u);
    m && (h.toDOM = (v) => m({
      node: v,
      HTMLAttributes: ms(v, d)
    }));
    const g = E(c, "renderText", u);
    return g && (h.toText = g), [c.name, h];
  })), a = Object.fromEntries(o.map((c) => {
    const d = r.filter((g) => g.type === c.name), u = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((g, v) => {
      const w = E(v, "extendMarkSchema", u);
      return {
        ...g,
        ...w ? w(c) : {}
      };
    }, {}), h = wa({
      ...f,
      inclusive: z(E(c, "inclusive", u)),
      excludes: z(E(c, "excludes", u)),
      group: z(E(c, "group", u)),
      spanning: z(E(c, "spanning", u)),
      code: z(E(c, "code", u)),
      attrs: Object.fromEntries(d.map((g) => {
        var v;
        return [g.name, { default: (v = g == null ? void 0 : g.attribute) === null || v === void 0 ? void 0 : v.default }];
      }))
    }), p = z(E(c, "parseHTML", u));
    p && (h.parseDOM = p.map((g) => ba(g, d)));
    const m = E(c, "renderHTML", u);
    return m && (h.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: ms(g, d)
    })), [c.name, h];
  }));
  return new Rf({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function zo(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function ka(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const km = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, l) => {
    var a, c;
    const d = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: o,
      parent: s,
      index: l
    })) || i.textContent || "%leaf%";
    t += d.slice(0, Math.max(0, r - o));
  }), t;
};
function Zs(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class fo {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const xm = (n, e) => {
  if (Zs(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Ho(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: s, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let d = !1;
  const u = km(c) + o;
  return s.forEach((f) => {
    if (d)
      return;
    const h = xm(u, f.find);
    if (!h)
      return;
    const p = a.state.tr, m = ao({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - o.length),
      to: i
    }, { commands: v, chain: w, can: C } = new co({
      editor: t,
      state: m
    });
    f.handler({
      state: m,
      range: g,
      match: h,
      commands: v,
      chain: w,
      can: C
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: o
    }), a.dispatch(p), d = !0);
  }), d;
}
function Cm(n) {
  const { editor: e, rules: t } = n, r = new oe({
    state: {
      init() {
        return null;
      },
      apply(i, o) {
        const s = i.getMeta(r);
        return s || (i.selectionSet || i.docChanged ? null : o);
      }
    },
    props: {
      handleTextInput(i, o, s, l) {
        return Ho({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && Ho({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? Ho({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function Sm(n) {
  return typeof n == "number";
}
class jd {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Mm = (n, e) => {
  if (Zs(e))
    return [...n.matchAll(e)];
  const t = e(n);
  return t ? t.map((r) => {
    const i = [r.text];
    return i.index = r.index, i.input = n, i.data = r.data, r.replaceWith && (r.text.includes(r.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(r.replaceWith)), i;
  }) : [];
};
function Tm(n) {
  const { editor: e, state: t, from: r, to: i, rule: o } = n, { commands: s, chain: l, can: a } = new co({
    editor: e,
    state: t
  }), c = [];
  return t.doc.nodesBetween(r, i, (u, f) => {
    if (!u.isTextblock || u.type.spec.code)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + u.content.size), m = u.textBetween(h - f, p - f, void 0, "￼");
    Mm(m, o.find).forEach((v) => {
      if (v.index === void 0)
        return;
      const w = h + v.index + 1, C = w + v[0].length, y = {
        from: t.tr.mapping.map(w),
        to: t.tr.mapping.map(C)
      }, T = o.handler({
        state: t,
        range: y,
        match: v,
        commands: s,
        chain: l,
        can: a
      });
      c.push(T);
    });
  }), c.every((u) => u !== null);
}
function Am(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1;
  return t.map((l) => new oe({
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
        drop: (a) => (o = r === a.dom.parentElement, !1),
        paste: (a, c) => {
          var d;
          const u = (d = c.clipboardData) === null || d === void 0 ? void 0 : d.getData("text/html");
          return i = !!(u != null && u.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (a, c, d) => {
      const u = a[0], f = u.getMeta("uiEvent") === "paste" && !i, h = u.getMeta("uiEvent") === "drop" && !o;
      if (!f && !h)
        return;
      const p = c.doc.content.findDiffStart(d.doc.content), m = c.doc.content.findDiffEnd(d.doc.content);
      if (!Sm(p) || !m || p === m.b)
        return;
      const g = d.tr, v = ao({
        state: d,
        transaction: g
      });
      if (!(!Tm({
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
function Om(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class Hn {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = Hn.resolve(e), this.schema = wm(this.extensions, t), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: zo(r.name, this.schema)
      };
      r.type === "mark" && (!((i = z(E(r, "keepOnSplit", o))) !== null && i !== void 0) || i) && this.splittableMarks.push(r.name);
      const s = E(r, "onBeforeCreate", o);
      s && this.editor.on("beforeCreate", s);
      const l = E(r, "onCreate", o);
      l && this.editor.on("create", l);
      const a = E(r, "onUpdate", o);
      a && this.editor.on("update", a);
      const c = E(r, "onSelectionUpdate", o);
      c && this.editor.on("selectionUpdate", c);
      const d = E(r, "onTransaction", o);
      d && this.editor.on("transaction", d);
      const u = E(r, "onFocus", o);
      u && this.editor.on("focus", u);
      const f = E(r, "onBlur", o);
      f && this.editor.on("blur", f);
      const h = E(r, "onDestroy", o);
      h && this.editor.on("destroy", h);
    });
  }
  static resolve(e) {
    const t = Hn.sort(Hn.flatten(e)), r = Om(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = E(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const o = E(r, "priority") || 100, s = E(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: zo(t.name, this.schema)
      }, i = E(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, t = Hn.sort([...this.extensions].reverse()), r = [], i = [], o = t.map((s) => {
      const l = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: zo(s.name, this.schema)
      }, a = [], c = E(s, "addKeyboardShortcuts", l);
      let d = {};
      if (s.type === "mark" && s.config.exitable && (d.ArrowRight = () => Le.handleExit({ editor: e, mark: s })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([g, v]) => [g, () => v({ editor: e })]));
        d = { ...d, ...m };
      }
      const u = Kp(d);
      a.push(u);
      const f = E(s, "addInputRules", l);
      ka(s, e.options.enableInputRules) && f && r.push(...f());
      const h = E(s, "addPasteRules", l);
      ka(s, e.options.enablePasteRules) && h && i.push(...h());
      const p = E(s, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      Cm({
        editor: e,
        rules: r
      }),
      ...Am({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  get attributes() {
    return Fd(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = uo(this.extensions);
    return Object.fromEntries(t.filter((r) => !!E(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: me(r.name, this.schema)
      }, s = E(r, "addNodeView", o);
      if (!s)
        return [];
      const l = (a, c, d, u) => {
        const f = ms(a, i);
        return s()({
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
function Em(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Vo(n) {
  return Em(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function ho(n, e) {
  const t = { ...n };
  return Vo(n) && Vo(e) && Object.keys(e).forEach((r) => {
    Vo(e[r]) ? r in n ? t[r] = ho(n[r], e[r]) : Object.assign(t, { [r]: e[r] }) : Object.assign(t, { [r]: e[r] });
  }), t;
}
class le {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = z(E(this, "addOptions", {
      name: this.name
    }))), this.storage = z(E(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new le(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ho(this.options, e), t.storage = z(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new le(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = z(E(t, "addOptions", {
      name: t.name
    })), t.storage = z(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Wd(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = t || {};
  let l = "", a = !0;
  return n.nodesBetween(r, i, (c, d, u, f) => {
    var h;
    const p = s == null ? void 0 : s[c.type.name];
    p ? (c.isBlock && !a && (l += o, a = !0), u && (l += p({
      node: c,
      pos: d,
      parent: u,
      index: f,
      range: e
    }))) : c.isText ? (l += (h = c == null ? void 0 : c.text) === null || h === void 0 ? void 0 : h.slice(Math.max(r, d) - d, i - d), a = !1) : c.isBlock && !a && (l += o, a = !0);
  }), l;
}
function _d(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const Nm = le.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new ce("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((d) => d.$from.pos)), l = Math.max(...o.map((d) => d.$to.pos)), a = _d(t);
            return Wd(r, { from: s, to: l }, {
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Dm = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), Rm = (n = !1) => ({ commands: e }) => e.setContent("", n), Lm = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: o, $to: s }) => {
    n.doc.nodesBetween(o.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: d } = e, u = c.resolve(d.map(a)), f = c.resolve(d.map(a + l.nodeSize)), h = u.blockRange(f);
      if (!h)
        return;
      const p = rr(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, Im = (n) => (e) => n(e), Pm = () => ({ state: n, dispatch: e }) => im(n, e), Bm = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const l = i.before(o), a = i.after(o);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, zm = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = me(n, t.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const a = o.before(s), c = o.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Hm = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Vm = () => ({ state: n, dispatch: e }) => qp(n, e), Fm = () => ({ commands: n }) => n.keyboardShortcut("Enter"), $m = () => ({ state: n, dispatch: e }) => rm(n, e);
function Pi(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Zs(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function gs(n, e, t = {}) {
  return n.find((r) => r.type === e && Pi(r.attrs, t));
}
function jm(n, e, t = {}) {
  return !!gs(n, e, t);
}
function el(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = gs([...r.node.marks], e, t);
  if (!i)
    return;
  let o = r.index, s = n.start() + r.offset, l = o + 1, a = s + r.node.nodeSize;
  for (gs([...r.node.marks], e, t); o > 0 && i.isInSet(n.parent.child(o - 1).marks); )
    o -= 1, s -= n.parent.child(o).nodeSize;
  for (; l < n.parent.childCount && jm([...n.parent.child(l).marks], e, t); )
    a += n.parent.child(l).nodeSize, l += 1;
  return {
    from: s,
    to: a
  };
}
function Xt(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const Wm = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = Xt(n, r.schema), { doc: s, selection: l } = t, { $from: a, from: c, to: d } = l;
  if (i) {
    const u = el(a, o, e);
    if (u && u.from <= c && u.to >= d) {
      const f = P.create(s, u.from, u.to);
      t.setSelection(f);
    }
  }
  return !0;
}, _m = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function tl(n) {
  return n instanceof P;
}
function Tt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Kd(n, e = null) {
  if (!e)
    return null;
  const t = R.atStart(n), r = R.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? P.create(n, Tt(0, i, o), Tt(n.content.size, i, o)) : P.create(n, Tt(e, i, o), Tt(e, i, o));
}
function nl() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Km = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    nl() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !tl(t.state.selection))
    return s(), !0;
  const l = Kd(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return o && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, qm = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Um = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e);
function xa(n) {
  const e = `<body>${n}</body>`;
  return new window.DOMParser().parseFromString(e, "text/html").body;
}
function Bi(n, e, t) {
  if (t = {
    slice: !0,
    parseOptions: {},
    ...t
  }, typeof n == "object" && n !== null)
    try {
      return Array.isArray(n) && n.length > 0 ? x.fromArray(n.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(n);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r), Bi("", e, t);
    }
  if (typeof n == "string") {
    const r = qn.fromSchema(e);
    return t.slice ? r.parseSlice(xa(n), t.parseOptions).content : r.parse(xa(n), t.parseOptions);
  }
  return Bi("", e, t);
}
function Jm(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof fe || i instanceof he))
    return;
  const o = n.mapping.maps[r];
  let s = 0;
  o.forEach((l, a, c, d) => {
    s === 0 && (s = d);
  }), n.setSelection(R.near(n.doc.resolve(s), t));
}
const Gm = (n) => n.toString().startsWith("<"), Ym = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      ...t
    };
    const s = Bi(e, o.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...t.parseOptions
      }
    });
    if (s.toString() === "<>")
      return !0;
    let { from: l, to: a } = typeof n == "number" ? { from: n, to: n } : n, c = !0, d = !0;
    if ((Gm(s) ? s : [s]).forEach((f) => {
      f.check(), c = c ? f.isText && f.marks.length === 0 : !1, d = d ? f.isBlock : !1;
    }), l === a && d) {
      const { parent: f } = r.doc.resolve(l);
      f.isTextblock && !f.type.spec.code && !f.childCount && (l -= 1, a += 1);
    }
    c ? Array.isArray(e) ? r.insertText(e.map((f) => f.text || "").join(""), l, a) : typeof e == "object" && e && e.text ? r.insertText(e.text, l, a) : r.insertText(e, l, a) : r.replaceWith(l, a, s), t.updateSelection && Jm(r, r.steps.length - 1, -1);
  }
  return !0;
}, Xm = () => ({ state: n, dispatch: e }) => Zp(n, e), Qm = () => ({ state: n, dispatch: e }) => em(n, e), Zm = () => ({ state: n, dispatch: e }) => Jp(n, e), eg = () => ({ state: n, dispatch: e }) => Xp(n, e);
function qd() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function tg(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      nl() || qd() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), s && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const ng = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = tg(n).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const d = c.map(r.mapping);
    d && i && r.maybeStep(d);
  }), !0;
};
function Rr(n, e, t = {}) {
  const { from: r, to: i, empty: o } = n.selection, s = e ? me(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (u, f) => {
    if (u.isText)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + u.nodeSize);
    l.push({
      node: u,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((u) => s ? s.name === u.node.type.name : !0).filter((u) => Pi(u.node.attrs, t, { strict: !1 }));
  return o ? !!c.length : c.reduce((u, f) => u + f.to - f.from, 0) >= a;
}
const rg = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = me(n, t.schema);
  return Rr(t, i, e) ? tm(t, r) : !1;
}, ig = () => ({ state: n, dispatch: e }) => om(n, e), og = (n) => ({ state: e, dispatch: t }) => {
  const r = me(n, e.schema);
  return hm(r)(e, t);
}, sg = () => ({ state: n, dispatch: e }) => nm(n, e);
function po(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Ca(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const lg = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = po(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = me(n, r.schema)), l === "mark" && (s = Xt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, d) => {
      o && o === c.type && t.setNodeMarkup(d, void 0, Ca(c.attrs, e)), s && c.marks.length && c.marks.forEach((u) => {
        s === u.type && t.addMark(d, d + c.nodeSize, s.create(Ca(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, ag = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), cg = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), dg = () => ({ state: n, dispatch: e }) => Gp(n, e), ug = () => ({ state: n, dispatch: e }) => Qp(n, e), fg = () => ({ state: n, dispatch: e }) => sm(n, e), hg = () => ({ state: n, dispatch: e }) => cm(n, e), pg = () => ({ state: n, dispatch: e }) => am(n, e);
function Ud(n, e, t = {}) {
  return Bi(n, e, { slice: !1, parseOptions: t });
}
const mg = (n, e = !1, t = {}) => ({ tr: r, editor: i, dispatch: o }) => {
  const { doc: s } = r, l = Ud(n, i.schema, t);
  return o && r.replaceWith(0, s.content.size, l).setMeta("preventUpdate", !e), !0;
};
function gg(n, e) {
  const t = new $s(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function yg(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function vg(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, o) => {
    t(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function Jd(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function rl(n) {
  return (e) => Jd(e.$from, n);
}
function bg(n, e) {
  const t = dt.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function wg(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Wd(n, t, e);
}
function mo(n, e) {
  const t = Xt(e, n.schema), { from: r, to: i, empty: o } = n.selection, s = [];
  o ? (n.storedMarks && s.push(...n.storedMarks), s.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function kg(n, e) {
  const t = me(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === t.name);
  return s ? { ...s.attrs } : {};
}
function Gd(n, e) {
  const t = po(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? kg(n, e) : t === "mark" ? mo(n, e) : {};
}
function xg(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function Cg(n) {
  const e = xg(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((o, s) => s !== r).some((o) => t.oldRange.from >= o.oldRange.from && t.oldRange.to <= o.oldRange.to && t.newRange.from >= o.newRange.from && t.newRange.to <= o.newRange.to));
}
function Sg(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[o];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), d = e.slice(o).map(a), u = e.invert().map(c, -1), f = e.invert().map(d);
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
  }), Cg(r);
}
function zi(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const o = t.resolve(n - 1), s = el(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : t.nodesBetween(n, e, (i, o) => {
    r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function yi(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function ys(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? Xt(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((u) => o ? o.name === u.type.name : !0).find((u) => Pi(u.attrs, t, { strict: !1 }));
  let s = 0;
  const l = [];
  if (i.forEach(({ $from: u, $to: f }) => {
    const h = u.pos, p = f.pos;
    n.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const v = Math.max(h, g), w = Math.min(p, g + m.nodeSize), C = w - v;
      s += C, l.push(...m.marks.map((y) => ({
        mark: y,
        from: v,
        to: w
      })));
    });
  }), s === 0)
    return !1;
  const a = l.filter((u) => o ? o.name === u.mark.type.name : !0).filter((u) => Pi(u.mark.attrs, t, { strict: !1 })).reduce((u, f) => u + f.to - f.from, 0), c = l.filter((u) => o ? u.mark.type !== o && u.mark.type.excludes(o) : !0).reduce((u, f) => u + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function Mg(n, e, t = {}) {
  if (!e)
    return Rr(n, null, t) || ys(n, null, t);
  const r = po(e, n.schema);
  return r === "node" ? Rr(n, e, t) : r === "mark" ? ys(n, e, t) : !1;
}
function Sa(n, e) {
  const { nodeExtensions: t } = uo(e), r = t.find((s) => s.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = z(E(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Tg(n) {
  var e;
  const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = n.toJSON();
  return JSON.stringify(t) === JSON.stringify(r);
}
function Ag(n) {
  return n instanceof L;
}
function Yd(n, e, t) {
  const i = n.state.doc.content.size, o = Tt(e, 0, i), s = Tt(t, 0, i), l = n.coordsAtPos(o), a = n.coordsAtPos(s, -1), c = Math.min(l.top, a.top), d = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - u, p = d - c, v = {
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
function Og(n, e, t) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (tl(i) && (o = i.$cursor), o) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (d, u, f) => {
      if (c)
        return !1;
      if (d.isInline) {
        const h = !f || f.type.allowsMarkType(t), p = !!t.isInSet(d.marks) || !d.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const Eg = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: s, ranges: l } = o, a = Xt(n, r.schema);
  if (i)
    if (s) {
      const c = mo(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const d = c.$from.pos, u = c.$to.pos;
        r.doc.nodesBetween(d, u, (f, h) => {
          const p = Math.max(h, d), m = Math.min(h + f.nodeSize, u);
          f.marks.find((v) => v.type === a) ? f.marks.forEach((v) => {
            a === v.type && t.addMark(p, m, a.create({
              ...v.attrs,
              ...e
            }));
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return Og(r, t, a);
}, Ng = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), Dg = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = me(n, t.schema);
  return o.isTextblock ? i().command(({ commands: s }) => va(o, e)(t) ? !0 : s.clearNodes()).command(({ state: s }) => va(o, e)(s, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Rg = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Tt(n, 0, r.content.size), o = L.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, Lg = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, s = P.atStart(r).from, l = P.atEnd(r).to, a = Tt(i, s, l), c = Tt(o, s, l), d = P.create(r, a, c);
    e.setSelection(d);
  }
  return !0;
}, Ig = (n) => ({ state: e, dispatch: t }) => {
  const r = me(n, e.schema);
  return gm(r)(e, t);
};
function Ma(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Pg = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = i.extensionManager.attributes, d = yi(c, l.node().type.name, l.node().attrs);
  if (o instanceof L && o.node.isBlock)
    return !l.parentOffset || !Wn(s, l.pos) ? !1 : (r && (n && Ma(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  if (r) {
    const u = a.parentOffset === a.parent.content.size;
    o instanceof P && e.deleteSelection();
    const f = l.depth === 0 ? void 0 : yg(l.node(-1).contentMatchAt(l.indexAfter(-1)));
    let h = u && f ? [
      {
        type: f,
        attrs: d
      }
    ] : void 0, p = Wn(e.doc, e.mapping.map(l.pos), 1, h);
    if (!h && !p && Wn(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
      {
        type: f,
        attrs: d
      }
    ] : void 0), p && (e.split(e.mapping.map(l.pos), 1, h), f && !u && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    n && Ma(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, Bg = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var o;
  const s = me(n, t.schema), { $from: l, $to: a } = t.selection, c = t.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const d = l.node(-1);
  if (d.type !== s)
    return !1;
  const u = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== s || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (r) {
      let g = x.empty;
      const v = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let O = l.depth - v; O >= l.depth - 3; O -= 1)
        g = x.from(l.node(O).copy(g));
      const w = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, C = yi(u, l.node().type.name, l.node().attrs), y = ((o = s.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(C)) || void 0;
      g = g.append(x.from(s.createAndFill(null, y) || void 0));
      const T = l.before(l.depth - (v - 1));
      e.replace(T, l.after(-w), new A(g, 4 - v, 0));
      let b = -1;
      e.doc.nodesBetween(T, e.doc.content.size, (O, S) => {
        if (b > -1)
          return !1;
        O.isTextblock && O.content.size === 0 && (b = S + 1);
      }), b > -1 && e.setSelection(P.near(e.doc.resolve(b))), e.scrollIntoView();
    }
    return !0;
  }
  const f = a.pos === l.end() ? d.contentMatchAt(0).defaultType : null, h = yi(u, d.type.name, d.attrs), p = yi(u, l.node().type.name, l.node().attrs);
  e.delete(l.pos, a.pos);
  const m = f ? [
    { type: s, attrs: h },
    { type: f, attrs: p }
  ] : [{ type: s, attrs: h }];
  if (!Wn(e.doc, l.pos, 2))
    return !1;
  if (r) {
    const { selection: g, storedMarks: v } = t, { splittableMarks: w } = i.extensionManager, C = v || g.$to.parentOffset && g.$from.marks();
    if (e.split(l.pos, 2, m).scrollIntoView(), !C || !r)
      return !0;
    const y = C.filter((T) => w.includes(T.type.name));
    e.ensureMarks(y);
  }
  return !0;
}, Fo = (n, e) => {
  const t = rl((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Gt(n.doc, t.pos) && n.join(t.pos), !0;
}, $o = (n, e) => {
  const t = rl((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && Gt(n.doc, r) && n.join(r), !0;
}, zg = (n, e, t, r = {}) => ({ editor: i, tr: o, state: s, dispatch: l, chain: a, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: f } = i.extensionManager, h = me(n, s.schema), p = me(e, s.schema), { selection: m, storedMarks: g } = s, { $from: v, $to: w } = m, C = v.blockRange(w), y = g || m.$to.parentOffset && m.$from.marks();
  if (!C)
    return !1;
  const T = rl((b) => Sa(b.type.name, u))(m);
  if (C.depth >= 1 && T && C.depth - T.depth <= 1) {
    if (T.node.type === h)
      return c.liftListItem(p);
    if (Sa(T.node.type.name, u) && h.validContent(T.node.content) && l)
      return a().command(() => (o.setNodeMarkup(T.pos, h), !0)).command(() => Fo(o, h)).command(() => $o(o, h)).run();
  }
  return !t || !y || !l ? a().command(() => d().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => Fo(o, h)).command(() => $o(o, h)).run() : a().command(() => {
    const b = d().wrapInList(h, r), O = y.filter((S) => f.includes(S.type.name));
    return o.ensureMarks(O), b ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => Fo(o, h)).command(() => $o(o, h)).run();
}, Hg = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, s = Xt(n, r.schema);
  return ys(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, Vg = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = me(n, r.schema), s = me(e, r.schema);
  return Rr(r, o, t) ? i.setNode(s) : i.setNode(o, t);
}, Fg = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = me(n, t.schema);
  return Rr(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, $g = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(n))) {
      if (e) {
        const s = n.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, n.schema.text(o.text, a));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, jg = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, Wg = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = t, a = Xt(n, r.schema), { $from: c, empty: d, ranges: u } = l;
  if (!i)
    return !0;
  if (d && s) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((g) => g.type === a)) === null || o === void 0 ? void 0 : o.attrs, m = el(c, a, p);
    m && (f = m.from, h = m.to), t.removeMark(f, h, a);
  } else
    u.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, _g = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = po(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = me(n, r.schema)), l === "mark" && (s = Xt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, d = a.$to.pos;
    r.doc.nodesBetween(c, d, (u, f) => {
      o && o === u.type && t.setNodeMarkup(f, void 0, {
        ...u.attrs,
        ...e
      }), s && u.marks.length && u.marks.forEach((h) => {
        if (s === h.type) {
          const p = Math.max(f, c), m = Math.min(f + u.nodeSize, d);
          t.addMark(p, m, s.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, Kg = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = me(n, t.schema);
  return dm(i, e)(t, r);
}, qg = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = me(n, t.schema);
  return um(i, e)(t, r);
};
var Ug = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Dm,
  clearContent: Rm,
  clearNodes: Lm,
  command: Im,
  createParagraphNear: Pm,
  deleteCurrentNode: Bm,
  deleteNode: zm,
  deleteRange: Hm,
  deleteSelection: Vm,
  enter: Fm,
  exitCode: $m,
  extendMarkRange: Wm,
  first: _m,
  focus: Km,
  forEach: qm,
  insertContent: Um,
  insertContentAt: Ym,
  joinUp: Xm,
  joinDown: Qm,
  joinBackward: Zm,
  joinForward: eg,
  keyboardShortcut: ng,
  lift: rg,
  liftEmptyBlock: ig,
  liftListItem: og,
  newlineInCode: sg,
  resetAttributes: lg,
  scrollIntoView: ag,
  selectAll: cg,
  selectNodeBackward: dg,
  selectNodeForward: ug,
  selectParentNode: fg,
  selectTextblockEnd: hg,
  selectTextblockStart: pg,
  setContent: mg,
  setMark: Eg,
  setMeta: Ng,
  setNode: Dg,
  setNodeSelection: Rg,
  setTextSelection: Lg,
  sinkListItem: Ig,
  splitBlock: Pg,
  splitListItem: Bg,
  toggleList: zg,
  toggleMark: Hg,
  toggleNode: Vg,
  toggleWrap: Fg,
  undoInputRule: $g,
  unsetAllMarks: jg,
  unsetMark: Wg,
  updateAttributes: _g,
  wrapIn: Kg,
  wrapInList: qg
});
const Jg = le.create({
  name: "commands",
  addCommands() {
    return {
      ...Ug
    };
  }
}), Gg = le.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new ce("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Yg = le.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new oe({
        key: new ce("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Xg = le.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: d, $anchor: u } = a, { pos: f, parent: h } = u, p = R.atStart(c).from === f;
        return !d || !p || !h.type.isTextblock || h.textContent.length ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return nl() || qd() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new oe({
        key: new ce("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((p) => p.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: o, to: s } = e.selection, l = R.atStart(e.doc).from, a = R.atEnd(e.doc).to;
          if (i || !(o === l && s === a) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
            return;
          const u = t.tr, f = ao({
            state: t,
            transaction: u
          }), { commands: h } = new co({
            editor: this.editor,
            state: f
          });
          if (h.clearNodes(), !!u.steps.length)
            return u;
        }
      })
    ];
  }
}), Qg = le.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new oe({
        key: new ce("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var Zg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: Nm,
  Commands: Jg,
  Editable: Gg,
  FocusEvents: Yg,
  Keymap: Xg,
  Tabindex: Qg
});
const e1 = `.ProseMirror {
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
function t1(n, e) {
  const t = document.querySelector("style[data-tiptap-style]");
  if (t !== null)
    return t;
  const r = document.createElement("style");
  return e && r.setAttribute("nonce", e), r.setAttribute("data-tiptap-style", ""), r.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(r), r;
}
let n1 = class extends ym {
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
    this.options.injectCSS && document && (this.css = t1(e1, this.options.injectNonce));
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
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
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
  registerPlugin(e, t) {
    const r = $d(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
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
    const t = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    const t = [...this.options.enableCoreExtensions ? Object.values(Zg) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
    this.extensionManager = new Hn(t, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new co({
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
    const e = Ud(this.options.content, this.schema, this.options.parseOptions), t = Kd(e, this.options.autofocus);
    this.view = new Bp(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: zn.create({
        doc: e,
        selection: t || void 0
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
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
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
      e.steps.forEach((s) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(s);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
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
    return Gd(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return Mg(this.state, r, i);
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
    return bg(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return wg(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ..._d(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Tg(this.state.doc);
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
function kn(n) {
  return new fo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = z(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      let a = t.to;
      if (s) {
        const c = l.search(/\S/), d = t.from + l.indexOf(s), u = d + s.length;
        if (zi(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > d).length)
          return null;
        u < t.to && o.delete(u, t.to), d > t.from && o.delete(t.from + c, d), a = t.from + c + s.length, o.addMark(t.from + c, a, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function r1(n) {
  return new fo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = z(n.getAttributes, void 0, r) || {}, { tr: o } = e, s = t.from;
      let l = t.to;
      if (r[1]) {
        const a = r[0].lastIndexOf(r[1]);
        let c = s + a;
        c > l ? c = l : l = c + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, s + r[0].length - 1), o.replaceWith(c, l, n.type.create(i));
      } else
        r[0] && o.replaceWith(s, l, n.type.create(i));
    }
  });
}
function vs(n) {
  return new fo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), o = z(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, o);
    }
  });
}
function Lr(n) {
  return new fo({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const o = z(n.getAttributes, void 0, r) || {}, s = e.tr.delete(t.from, t.to), a = s.doc.resolve(t.from).blockRange(), c = a && Vs(a, n.type, o);
      if (!c)
        return null;
      if (s.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: u, storedMarks: f } = e, { splittableMarks: h } = n.editor.extensionManager, p = f || u.$to.parentOffset && u.$from.marks();
        if (p) {
          const m = p.filter((g) => h.includes(g.type.name));
          s.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const u = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(u, o).run();
      }
      const d = s.doc.resolve(t.from - 1).nodeBefore;
      d && d.type === n.type && Gt(s.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, d)) && s.join(t.from - 1);
    }
  });
}
class Le {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = z(E(this, "addOptions", {
      name: this.name
    }))), this.storage = z(E(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Le(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ho(this.options, e), t.storage = z(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Le(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = z(E(t, "addOptions", {
      name: t.name
    })), t.storage = z(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = s.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class se {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = z(E(this, "addOptions", {
      name: this.name
    }))), this.storage = z(E(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new se(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = ho(this.options, e), t.storage = z(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new se(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = z(E(t, "addOptions", {
      name: t.name
    })), t.storage = z(E(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Jt(n) {
  return new jd({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = z(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      let a = t.to;
      if (s) {
        const c = l.search(/\S/), d = t.from + l.indexOf(s), u = d + s.length;
        if (zi(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > d).length)
          return null;
        u < t.to && o.delete(u, t.to), d > t.from && o.delete(t.from + c, d), a = t.from + c + s.length, o.addMark(t.from + c, a, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function i1(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function o1(n) {
  return new jd({
    find: n.find,
    handler({ match: e, chain: t, range: r }) {
      const i = z(n.getAttributes, void 0, e);
      if (i === !1 || i === null)
        return null;
      e.input && t().deleteRange(r).insertContentAt(r.from, {
        type: n.type.name,
        attrs: i
      });
    }
  });
}
var De = "top", Je = "bottom", Ge = "right", Re = "left", il = "auto", _r = [De, Je, Ge, Re], Qn = "start", Ir = "end", s1 = "clippingParents", Xd = "viewport", hr = "popper", l1 = "reference", Ta = /* @__PURE__ */ _r.reduce(function(n, e) {
  return n.concat([e + "-" + Qn, e + "-" + Ir]);
}, []), Qd = /* @__PURE__ */ [].concat(_r, [il]).reduce(function(n, e) {
  return n.concat([e, e + "-" + Qn, e + "-" + Ir]);
}, []), a1 = "beforeRead", c1 = "read", d1 = "afterRead", u1 = "beforeMain", f1 = "main", h1 = "afterMain", p1 = "beforeWrite", m1 = "write", g1 = "afterWrite", y1 = [a1, c1, d1, u1, f1, h1, p1, m1, g1];
function mt(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function ze(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function xn(n) {
  var e = ze(n).Element;
  return n instanceof e || n instanceof Element;
}
function Ue(n) {
  var e = ze(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function ol(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = ze(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function v1(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !Ue(o) || !mt(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? o.removeAttribute(s) : o.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function b1(n) {
  var e = n.state, t = {
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
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), l = s.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !Ue(i) || !mt(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const Zd = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: v1,
  effect: b1,
  requires: ["computeStyles"]
};
function ft(n) {
  return n.split("-")[0];
}
var yn = Math.max, Hi = Math.min, Zn = Math.round;
function bs() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function eu() {
  return !/^((?!chrome|android).)*safari/i.test(bs());
}
function er(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && Ue(n) && (i = n.offsetWidth > 0 && Zn(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && Zn(r.height) / n.offsetHeight || 1);
  var s = xn(n) ? ze(n) : window, l = s.visualViewport, a = !eu() && t, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, d = (r.top + (a && l ? l.offsetTop : 0)) / o, u = r.width / i, f = r.height / o;
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
function sl(n) {
  var e = er(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function tu(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && ol(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ot(n) {
  return ze(n).getComputedStyle(n);
}
function w1(n) {
  return ["table", "td", "th"].indexOf(mt(n)) >= 0;
}
function Qt(n) {
  return ((xn(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function go(n) {
  return mt(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (ol(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Qt(n)
  );
}
function Aa(n) {
  return !Ue(n) || // https://github.com/popperjs/popper-core/issues/837
  Ot(n).position === "fixed" ? null : n.offsetParent;
}
function k1(n) {
  var e = /firefox/i.test(bs()), t = /Trident/i.test(bs());
  if (t && Ue(n)) {
    var r = Ot(n);
    if (r.position === "fixed")
      return null;
  }
  var i = go(n);
  for (ol(i) && (i = i.host); Ue(i) && ["html", "body"].indexOf(mt(i)) < 0; ) {
    var o = Ot(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Kr(n) {
  for (var e = ze(n), t = Aa(n); t && w1(t) && Ot(t).position === "static"; )
    t = Aa(t);
  return t && (mt(t) === "html" || mt(t) === "body" && Ot(t).position === "static") ? e : t || k1(n) || e;
}
function ll(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function kr(n, e, t) {
  return yn(n, Hi(e, t));
}
function x1(n, e, t) {
  var r = kr(n, e, t);
  return r > t ? t : r;
}
function nu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ru(n) {
  return Object.assign({}, nu(), n);
}
function iu(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var C1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, ru(typeof e != "number" ? e : iu(e, _r));
};
function S1(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, s = t.modifiersData.popperOffsets, l = ft(t.placement), a = ll(l), c = [Re, Ge].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!o || !s)) {
    var u = C1(i.padding, t), f = sl(o), h = a === "y" ? De : Re, p = a === "y" ? Je : Ge, m = t.rects.reference[d] + t.rects.reference[a] - s[a] - t.rects.popper[d], g = s[a] - t.rects.reference[a], v = Kr(o), w = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, C = m / 2 - g / 2, y = u[h], T = w - f[d] - u[p], b = w / 2 - f[d] / 2 + C, O = kr(y, b, T), S = a;
    t.modifiersData[r] = (e = {}, e[S] = O, e.centerOffset = O - b, e);
  }
}
function M1(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || tu(e.elements.popper, i) && (e.elements.arrow = i));
}
const T1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: S1,
  effect: M1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function tr(n) {
  return n.split("-")[1];
}
var A1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function O1(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: Zn(t * i) / i || 0,
    y: Zn(r * i) / i || 0
  };
}
function Oa(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, s = n.offsets, l = n.position, a = n.gpuAcceleration, c = n.adaptive, d = n.roundOffsets, u = n.isFixed, f = s.x, h = f === void 0 ? 0 : f, p = s.y, m = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = g.x, m = g.y;
  var v = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), C = Re, y = De, T = window;
  if (c) {
    var b = Kr(t), O = "clientHeight", S = "clientWidth";
    if (b === ze(t) && (b = Qt(t), Ot(b).position !== "static" && l === "absolute" && (O = "scrollHeight", S = "scrollWidth")), b = b, i === De || (i === Re || i === Ge) && o === Ir) {
      y = Je;
      var B = u && b === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[O]
      );
      m -= B - r.height, m *= a ? 1 : -1;
    }
    if (i === Re || (i === De || i === Je) && o === Ir) {
      C = Ge;
      var H = u && b === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[S]
      );
      h -= H - r.width, h *= a ? 1 : -1;
    }
  }
  var q = Object.assign({
    position: l
  }, c && A1), j = d === !0 ? O1({
    x: h,
    y: m
  }, ze(t)) : {
    x: h,
    y: m
  };
  if (h = j.x, m = j.y, a) {
    var _;
    return Object.assign({}, q, (_ = {}, _[y] = w ? "0" : "", _[C] = v ? "0" : "", _.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", _));
  }
  return Object.assign({}, q, (e = {}, e[y] = w ? m + "px" : "", e[C] = v ? h + "px" : "", e.transform = "", e));
}
function E1(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, s = o === void 0 ? !0 : o, l = t.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: ft(e.placement),
    variation: tr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Oa(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Oa(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const N1 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: E1,
  data: {}
};
var si = {
  passive: !0
};
function D1(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, a = ze(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && c.forEach(function(d) {
    d.addEventListener("scroll", t.update, si);
  }), l && a.addEventListener("resize", t.update, si), function() {
    o && c.forEach(function(d) {
      d.removeEventListener("scroll", t.update, si);
    }), l && a.removeEventListener("resize", t.update, si);
  };
}
const R1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: D1,
  data: {}
};
var L1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function vi(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return L1[e];
  });
}
var I1 = {
  start: "end",
  end: "start"
};
function Ea(n) {
  return n.replace(/start|end/g, function(e) {
    return I1[e];
  });
}
function al(n) {
  var e = ze(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function cl(n) {
  return er(Qt(n)).left + al(n).scrollLeft;
}
function P1(n, e) {
  var t = ze(n), r = Qt(n), i = t.visualViewport, o = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (i) {
    o = i.width, s = i.height;
    var c = eu();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: l + cl(n),
    y: a
  };
}
function B1(n) {
  var e, t = Qt(n), r = al(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = yn(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = yn(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + cl(n), a = -r.scrollTop;
  return Ot(i || t).direction === "rtl" && (l += yn(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: l,
    y: a
  };
}
function dl(n) {
  var e = Ot(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function ou(n) {
  return ["html", "body", "#document"].indexOf(mt(n)) >= 0 ? n.ownerDocument.body : Ue(n) && dl(n) ? n : ou(go(n));
}
function xr(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = ou(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = ze(r), s = i ? [o].concat(o.visualViewport || [], dl(r) ? r : []) : r, l = e.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(xr(go(s)))
  );
}
function ws(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function z1(n, e) {
  var t = er(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Na(n, e, t) {
  return e === Xd ? ws(P1(n, t)) : xn(e) ? z1(e, t) : ws(B1(Qt(n)));
}
function H1(n) {
  var e = xr(go(n)), t = ["absolute", "fixed"].indexOf(Ot(n).position) >= 0, r = t && Ue(n) ? Kr(n) : n;
  return xn(r) ? e.filter(function(i) {
    return xn(i) && tu(i, r) && mt(i) !== "body";
  }) : [];
}
function V1(n, e, t, r) {
  var i = e === "clippingParents" ? H1(n) : [].concat(e), o = [].concat(i, [t]), s = o[0], l = o.reduce(function(a, c) {
    var d = Na(n, c, r);
    return a.top = yn(d.top, a.top), a.right = Hi(d.right, a.right), a.bottom = Hi(d.bottom, a.bottom), a.left = yn(d.left, a.left), a;
  }, Na(n, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function su(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? ft(r) : null, o = r ? tr(r) : null, s = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, a;
  switch (i) {
    case De:
      a = {
        x: s,
        y: e.y - t.height
      };
      break;
    case Je:
      a = {
        x: s,
        y: e.y + e.height
      };
      break;
    case Ge:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Re:
      a = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? ll(i) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (o) {
      case Qn:
        a[c] = a[c] - (e[d] / 2 - t[d] / 2);
        break;
      case Ir:
        a[c] = a[c] + (e[d] / 2 - t[d] / 2);
        break;
    }
  }
  return a;
}
function Pr(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, s = o === void 0 ? n.strategy : o, l = t.boundary, a = l === void 0 ? s1 : l, c = t.rootBoundary, d = c === void 0 ? Xd : c, u = t.elementContext, f = u === void 0 ? hr : u, h = t.altBoundary, p = h === void 0 ? !1 : h, m = t.padding, g = m === void 0 ? 0 : m, v = ru(typeof g != "number" ? g : iu(g, _r)), w = f === hr ? l1 : hr, C = n.rects.popper, y = n.elements[p ? w : f], T = V1(xn(y) ? y : y.contextElement || Qt(n.elements.popper), a, d, s), b = er(n.elements.reference), O = su({
    reference: b,
    element: C,
    strategy: "absolute",
    placement: i
  }), S = ws(Object.assign({}, C, O)), B = f === hr ? S : b, H = {
    top: T.top - B.top + v.top,
    bottom: B.bottom - T.bottom + v.bottom,
    left: T.left - B.left + v.left,
    right: B.right - T.right + v.right
  }, q = n.modifiersData.offset;
  if (f === hr && q) {
    var j = q[i];
    Object.keys(H).forEach(function(_) {
      var X = [Ge, Je].indexOf(_) >= 0 ? 1 : -1, ee = [De, Je].indexOf(_) >= 0 ? "y" : "x";
      H[_] += j[ee] * X;
    });
  }
  return H;
}
function F1(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, s = t.padding, l = t.flipVariations, a = t.allowedAutoPlacements, c = a === void 0 ? Qd : a, d = tr(r), u = d ? l ? Ta : Ta.filter(function(p) {
    return tr(p) === d;
  }) : _r, f = u.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = u);
  var h = f.reduce(function(p, m) {
    return p[m] = Pr(n, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[ft(m)], p;
  }, {});
  return Object.keys(h).sort(function(p, m) {
    return h[p] - h[m];
  });
}
function $1(n) {
  if (ft(n) === il)
    return [];
  var e = vi(n);
  return [Ea(n), e, Ea(e)];
}
function j1(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !0 : s, a = t.fallbackPlacements, c = t.padding, d = t.boundary, u = t.rootBoundary, f = t.altBoundary, h = t.flipVariations, p = h === void 0 ? !0 : h, m = t.allowedAutoPlacements, g = e.options.placement, v = ft(g), w = v === g, C = a || (w || !p ? [vi(g)] : $1(g)), y = [g].concat(C).reduce(function(yt, Ye) {
      return yt.concat(ft(Ye) === il ? F1(e, {
        placement: Ye,
        boundary: d,
        rootBoundary: u,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: m
      }) : Ye);
    }, []), T = e.rects.reference, b = e.rects.popper, O = /* @__PURE__ */ new Map(), S = !0, B = y[0], H = 0; H < y.length; H++) {
      var q = y[H], j = ft(q), _ = tr(q) === Qn, X = [De, Je].indexOf(j) >= 0, ee = X ? "width" : "height", Y = Pr(e, {
        placement: q,
        boundary: d,
        rootBoundary: u,
        altBoundary: f,
        padding: c
      }), W = X ? _ ? Ge : Re : _ ? Je : De;
      T[ee] > b[ee] && (W = vi(W));
      var U = vi(W), Q = [];
      if (o && Q.push(Y[j] <= 0), l && Q.push(Y[W] <= 0, Y[U] <= 0), Q.every(function(yt) {
        return yt;
      })) {
        B = q, S = !1;
        break;
      }
      O.set(q, Q);
    }
    if (S)
      for (var de = p ? 3 : 1, ve = function(Ye) {
        var vt = y.find(function(Mn) {
          var bt = O.get(Mn);
          if (bt)
            return bt.slice(0, Ye).every(function(Tn) {
              return Tn;
            });
        });
        if (vt)
          return B = vt, "break";
      }, Ce = de; Ce > 0; Ce--) {
        var He = ve(Ce);
        if (He === "break")
          break;
      }
    e.placement !== B && (e.modifiersData[r]._skip = !0, e.placement = B, e.reset = !0);
  }
}
const W1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: j1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Da(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function Ra(n) {
  return [De, Ge, Je, Re].some(function(e) {
    return n[e] >= 0;
  });
}
function _1(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, s = Pr(e, {
    elementContext: "reference"
  }), l = Pr(e, {
    altBoundary: !0
  }), a = Da(s, r), c = Da(l, i, o), d = Ra(a), u = Ra(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": u
  });
}
const K1 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _1
};
function q1(n, e, t) {
  var r = ft(n), i = [Re, De].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, s = o[0], l = o[1];
  return s = s || 0, l = (l || 0) * i, [Re, Ge].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function U1(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, s = Qd.reduce(function(d, u) {
    return d[u] = q1(u, e.rects, o), d;
  }, {}), l = s[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = s;
}
const J1 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: U1
};
function G1(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = su({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Y1 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: G1,
  data: {}
};
function X1(n) {
  return n === "x" ? "y" : "x";
}
function Q1(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !1 : s, a = t.boundary, c = t.rootBoundary, d = t.altBoundary, u = t.padding, f = t.tether, h = f === void 0 ? !0 : f, p = t.tetherOffset, m = p === void 0 ? 0 : p, g = Pr(e, {
    boundary: a,
    rootBoundary: c,
    padding: u,
    altBoundary: d
  }), v = ft(e.placement), w = tr(e.placement), C = !w, y = ll(v), T = X1(y), b = e.modifiersData.popperOffsets, O = e.rects.reference, S = e.rects.popper, B = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, H = typeof B == "number" ? {
    mainAxis: B,
    altAxis: B
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, B), q = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (b) {
    if (o) {
      var _, X = y === "y" ? De : Re, ee = y === "y" ? Je : Ge, Y = y === "y" ? "height" : "width", W = b[y], U = W + g[X], Q = W - g[ee], de = h ? -S[Y] / 2 : 0, ve = w === Qn ? O[Y] : S[Y], Ce = w === Qn ? -S[Y] : -O[Y], He = e.elements.arrow, yt = h && He ? sl(He) : {
        width: 0,
        height: 0
      }, Ye = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : nu(), vt = Ye[X], Mn = Ye[ee], bt = kr(0, O[Y], yt[Y]), Tn = C ? O[Y] / 2 - de - bt - vt - H.mainAxis : ve - bt - vt - H.mainAxis, Et = C ? -O[Y] / 2 + de + bt + Mn + H.mainAxis : Ce + bt + Mn + H.mainAxis, An = e.elements.arrow && Kr(e.elements.arrow), qr = An ? y === "y" ? An.clientTop || 0 : An.clientLeft || 0 : 0, or = (_ = q == null ? void 0 : q[y]) != null ? _ : 0, Ur = W + Tn - or - qr, Jr = W + Et - or, sr = kr(h ? Hi(U, Ur) : U, W, h ? yn(Q, Jr) : Q);
      b[y] = sr, j[y] = sr - W;
    }
    if (l) {
      var lr, Gr = y === "x" ? De : Re, Yr = y === "x" ? Je : Ge, wt = b[T], Nt = T === "y" ? "height" : "width", ar = wt + g[Gr], Zt = wt - g[Yr], cr = [De, Re].indexOf(v) !== -1, Xr = (lr = q == null ? void 0 : q[T]) != null ? lr : 0, Qr = cr ? ar : wt - O[Nt] - S[Nt] - Xr + H.altAxis, Zr = cr ? wt + O[Nt] + S[Nt] - Xr - H.altAxis : Zt, ei = h && cr ? x1(Qr, wt, Zr) : kr(h ? Qr : ar, wt, h ? Zr : Zt);
      b[T] = ei, j[T] = ei - wt;
    }
    e.modifiersData[r] = j;
  }
}
const Z1 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Q1,
  requiresIfExists: ["offset"]
};
function e0(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function t0(n) {
  return n === ze(n) || !Ue(n) ? al(n) : e0(n);
}
function n0(n) {
  var e = n.getBoundingClientRect(), t = Zn(e.width) / n.offsetWidth || 1, r = Zn(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function r0(n, e, t) {
  t === void 0 && (t = !1);
  var r = Ue(e), i = Ue(e) && n0(e), o = Qt(e), s = er(n, i, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((mt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  dl(o)) && (l = t0(e)), Ue(e) ? (a = er(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : o && (a.x = cl(o))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function i0(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    t.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(l) {
      if (!t.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(o);
  }
  return n.forEach(function(o) {
    t.has(o.name) || i(o);
  }), r;
}
function o0(n) {
  var e = i0(n);
  return y1.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function s0(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function l0(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var La = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ia() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function a0(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? La : i;
  return function(l, a, c) {
    c === void 0 && (c = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, La, o),
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
        var w = typeof v == "function" ? v(d.options) : v;
        m(), d.options = Object.assign({}, o, d.options, w), d.scrollParents = {
          reference: xn(l) ? xr(l) : l.contextElement ? xr(l.contextElement) : [],
          popper: xr(a)
        };
        var C = o0(l0([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = C.filter(function(y) {
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
          var v = d.elements, w = v.reference, C = v.popper;
          if (Ia(w, C)) {
            d.rects = {
              reference: r0(w, Kr(C), d.options.strategy === "fixed"),
              popper: sl(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(H) {
              return d.modifiersData[H.name] = Object.assign({}, H.data);
            });
            for (var y = 0; y < d.orderedModifiers.length; y++) {
              if (d.reset === !0) {
                d.reset = !1, y = -1;
                continue;
              }
              var T = d.orderedModifiers[y], b = T.fn, O = T.options, S = O === void 0 ? {} : O, B = T.name;
              typeof b == "function" && (d = b({
                state: d,
                options: S,
                name: B,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: s0(function() {
        return new Promise(function(g) {
          h.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!Ia(l, a))
      return h;
    h.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var v = g.name, w = g.options, C = w === void 0 ? {} : w, y = g.effect;
        if (typeof y == "function") {
          var T = y({
            state: d,
            name: v,
            instance: h,
            options: C
          }), b = function() {
          };
          u.push(T || b);
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
var c0 = [R1, Y1, N1, Zd, J1, W1, Z1, T1, K1], d0 = /* @__PURE__ */ a0({
  defaultModifiers: c0
}), u0 = "tippy-box", lu = "tippy-content", f0 = "tippy-backdrop", au = "tippy-arrow", cu = "tippy-svg-arrow", nn = {
  passive: !0,
  capture: !0
}, du = function() {
  return document.body;
};
function h0(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function jo(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r ?? (Array.isArray(t) ? t[e] : t);
  }
  return n;
}
function ul(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function uu(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function Pa(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function p0(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function m0(n) {
  return n.split(/\s+/).filter(Boolean);
}
function Pn(n) {
  return [].concat(n);
}
function Ba(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function g0(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function y0(n) {
  return n.split("-")[0];
}
function Vi(n) {
  return [].slice.call(n);
}
function za(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function Cr() {
  return document.createElement("div");
}
function Br(n) {
  return ["Element", "Fragment"].some(function(e) {
    return ul(n, e);
  });
}
function v0(n) {
  return ul(n, "NodeList");
}
function b0(n) {
  return ul(n, "MouseEvent");
}
function w0(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function k0(n) {
  return Br(n) ? [n] : v0(n) ? Vi(n) : Array.isArray(n) ? n : Vi(document.querySelectorAll(n));
}
function Wo(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Ha(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function x0(n) {
  var e, t = Pn(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function C0(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, s = i.popperState, l = i.props, a = l.interactiveBorder, c = y0(s.placement), d = s.modifiersData.offset;
    if (!d)
      return !0;
    var u = c === "bottom" ? d.top.y : 0, f = c === "top" ? d.bottom.y : 0, h = c === "right" ? d.left.x : 0, p = c === "left" ? d.right.x : 0, m = o.top - r + u > a, g = r - o.bottom - f > a, v = o.left - t + h > a, w = t - o.right - p > a;
    return m || g || v || w;
  });
}
function _o(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function Va(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var at = {
  isTouch: !1
}, Fa = 0;
function S0() {
  at.isTouch || (at.isTouch = !0, window.performance && document.addEventListener("mousemove", fu));
}
function fu() {
  var n = performance.now();
  n - Fa < 20 && (at.isTouch = !1, document.removeEventListener("mousemove", fu)), Fa = n;
}
function M0() {
  var n = document.activeElement;
  if (w0(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function T0() {
  document.addEventListener("touchstart", S0, nn), window.addEventListener("blur", M0);
}
var A0 = typeof window < "u" && typeof document < "u", O0 = A0 ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function Dn(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function $a(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function E0(n) {
  return $a(`
  %ctippy.js

  %c` + $a(n) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function hu(n) {
  return [
    E0(n),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var zr;
process.env.NODE_ENV !== "production" && N0();
function N0() {
  zr = /* @__PURE__ */ new Set();
}
function Mt(n, e) {
  if (n && !zr.has(e)) {
    var t;
    zr.add(e), (t = console).warn.apply(t, hu(e));
  }
}
function ks(n, e) {
  if (n && !zr.has(e)) {
    var t;
    zr.add(e), (t = console).error.apply(t, hu(e));
  }
}
function D0(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  ks(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), ks(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var pu = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, R0 = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Be = Object.assign({
  appendTo: du,
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
}, pu, R0), L0 = Object.keys(Be), I0 = function(e) {
  process.env.NODE_ENV !== "production" && gu(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    Be[r] = e[r];
  });
};
function mu(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, s = i.defaultValue;
    if (o) {
      var l;
      r[o] = n[o] !== void 0 ? n[o] : (l = Be[o]) != null ? l : s;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function P0(n, e) {
  var t = e ? Object.keys(mu(Object.assign({}, Be, {
    plugins: e
  }))) : L0, r = t.reduce(function(i, o) {
    var s = (n.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return i;
    if (o === "content")
      i[o] = s;
    else
      try {
        i[o] = JSON.parse(s);
      } catch {
        i[o] = s;
      }
    return i;
  }, {});
  return r;
}
function ja(n, e) {
  var t = Object.assign({}, e, {
    content: uu(e.content, [n])
  }, e.ignoreAttributes ? {} : P0(n, e.plugins));
  return t.aria = Object.assign({}, Be.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function gu(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = p0(Be, Object.keys(pu)), o = !h0(i, r);
    o && (o = e.filter(function(s) {
      return s.name === r;
    }).length === 0), Mt(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var B0 = function() {
  return "innerHTML";
};
function xs(n, e) {
  n[B0()] = e;
}
function Wa(n) {
  var e = Cr();
  return n === !0 ? e.className = au : (e.className = cu, Br(n) ? e.appendChild(n) : xs(e, n)), e;
}
function _a(n, e) {
  Br(e.content) ? (xs(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? xs(n, e.content) : n.textContent = e.content);
}
function Cs(n) {
  var e = n.firstElementChild, t = Vi(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(lu);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(au) || r.classList.contains(cu);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(f0);
    })
  };
}
function yu(n) {
  var e = Cr(), t = Cr();
  t.className = u0, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = Cr();
  r.className = lu, r.setAttribute("data-state", "hidden"), _a(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, s) {
    var l = Cs(e), a = l.box, c = l.content, d = l.arrow;
    s.theme ? a.setAttribute("data-theme", s.theme) : a.removeAttribute("data-theme"), typeof s.animation == "string" ? a.setAttribute("data-animation", s.animation) : a.removeAttribute("data-animation"), s.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? a.setAttribute("role", s.role) : a.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && _a(c, n.props), s.arrow ? d ? o.arrow !== s.arrow && (a.removeChild(d), a.appendChild(Wa(s.arrow))) : a.appendChild(Wa(s.arrow)) : d && a.removeChild(d);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
yu.$$tippy = !0;
var z0 = 1, li = [], Ko = [];
function H0(n, e) {
  var t = ja(n, Object.assign({}, Be, mu(za(e)))), r, i, o, s = !1, l = !1, a = !1, c = !1, d, u, f, h = [], p = Pa(Ur, t.interactiveDebounce), m, g = z0++, v = null, w = g0(t.plugins), C = {
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
    reference: n,
    popper: Cr(),
    popperInstance: v,
    props: t,
    state: C,
    plugins: w,
    // methods
    clearDelayTimeouts: Qr,
    setProps: Zr,
    setContent: ei,
    show: Wu,
    hide: _u,
    hideWithInteractivity: Ku,
    enable: cr,
    disable: Xr,
    unmount: qu,
    destroy: Uu
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && ks(!0, "render() function has not been supplied."), y;
  var T = t.render(y), b = T.popper, O = T.onUpdate;
  b.setAttribute("data-tippy-root", ""), b.id = "tippy-" + y.id, y.popper = b, n._tippy = y, b._tippy = y;
  var S = w.map(function(k) {
    return k.fn(y);
  }), B = n.hasAttribute("aria-expanded");
  return An(), de(), W(), U("onCreate", [y]), t.showOnCreate && ar(), b.addEventListener("mouseenter", function() {
    y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
  }), b.addEventListener("mouseleave", function() {
    y.props.interactive && y.props.trigger.indexOf("mouseenter") >= 0 && X().addEventListener("mousemove", p);
  }), y;
  function H() {
    var k = y.props.touch;
    return Array.isArray(k) ? k : [k, 0];
  }
  function q() {
    return H()[0] === "hold";
  }
  function j() {
    var k;
    return !!((k = y.props.render) != null && k.$$tippy);
  }
  function _() {
    return m || n;
  }
  function X() {
    var k = _().parentNode;
    return k ? x0(k) : document;
  }
  function ee() {
    return Cs(b);
  }
  function Y(k) {
    return y.state.isMounted && !y.state.isVisible || at.isTouch || d && d.type === "focus" ? 0 : jo(y.props.delay, k ? 0 : 1, Be.delay);
  }
  function W(k) {
    k === void 0 && (k = !1), b.style.pointerEvents = y.props.interactive && !k ? "" : "none", b.style.zIndex = "" + y.props.zIndex;
  }
  function U(k, N, I) {
    if (I === void 0 && (I = !0), S.forEach(function($) {
      $[k] && $[k].apply($, N);
    }), I) {
      var K;
      (K = y.props)[k].apply(K, N);
    }
  }
  function Q() {
    var k = y.props.aria;
    if (k.content) {
      var N = "aria-" + k.content, I = b.id, K = Pn(y.props.triggerTarget || n);
      K.forEach(function($) {
        var Se = $.getAttribute(N);
        if (y.state.isVisible)
          $.setAttribute(N, Se ? Se + " " + I : I);
        else {
          var Ve = Se && Se.replace(I, "").trim();
          Ve ? $.setAttribute(N, Ve) : $.removeAttribute(N);
        }
      });
    }
  }
  function de() {
    if (!(B || !y.props.aria.expanded)) {
      var k = Pn(y.props.triggerTarget || n);
      k.forEach(function(N) {
        y.props.interactive ? N.setAttribute("aria-expanded", y.state.isVisible && N === _() ? "true" : "false") : N.removeAttribute("aria-expanded");
      });
    }
  }
  function ve() {
    X().removeEventListener("mousemove", p), li = li.filter(function(k) {
      return k !== p;
    });
  }
  function Ce(k) {
    if (!(at.isTouch && (a || k.type === "mousedown"))) {
      var N = k.composedPath && k.composedPath()[0] || k.target;
      if (!(y.props.interactive && Va(b, N))) {
        if (Pn(y.props.triggerTarget || n).some(function(I) {
          return Va(I, N);
        })) {
          if (at.isTouch || y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
            return;
        } else
          U("onClickOutside", [y, k]);
        y.props.hideOnClick === !0 && (y.clearDelayTimeouts(), y.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), y.state.isMounted || vt());
      }
    }
  }
  function He() {
    a = !0;
  }
  function yt() {
    a = !1;
  }
  function Ye() {
    var k = X();
    k.addEventListener("mousedown", Ce, !0), k.addEventListener("touchend", Ce, nn), k.addEventListener("touchstart", yt, nn), k.addEventListener("touchmove", He, nn);
  }
  function vt() {
    var k = X();
    k.removeEventListener("mousedown", Ce, !0), k.removeEventListener("touchend", Ce, nn), k.removeEventListener("touchstart", yt, nn), k.removeEventListener("touchmove", He, nn);
  }
  function Mn(k, N) {
    Tn(k, function() {
      !y.state.isVisible && b.parentNode && b.parentNode.contains(b) && N();
    });
  }
  function bt(k, N) {
    Tn(k, N);
  }
  function Tn(k, N) {
    var I = ee().box;
    function K($) {
      $.target === I && (_o(I, "remove", K), N());
    }
    if (k === 0)
      return N();
    _o(I, "remove", u), _o(I, "add", K), u = K;
  }
  function Et(k, N, I) {
    I === void 0 && (I = !1);
    var K = Pn(y.props.triggerTarget || n);
    K.forEach(function($) {
      $.addEventListener(k, N, I), h.push({
        node: $,
        eventType: k,
        handler: N,
        options: I
      });
    });
  }
  function An() {
    q() && (Et("touchstart", or, {
      passive: !0
    }), Et("touchend", Jr, {
      passive: !0
    })), m0(y.props.trigger).forEach(function(k) {
      if (k !== "manual")
        switch (Et(k, or), k) {
          case "mouseenter":
            Et("mouseleave", Jr);
            break;
          case "focus":
            Et(O0 ? "focusout" : "blur", sr);
            break;
          case "focusin":
            Et("focusout", sr);
            break;
        }
    });
  }
  function qr() {
    h.forEach(function(k) {
      var N = k.node, I = k.eventType, K = k.handler, $ = k.options;
      N.removeEventListener(I, K, $);
    }), h = [];
  }
  function or(k) {
    var N, I = !1;
    if (!(!y.state.isEnabled || lr(k) || l)) {
      var K = ((N = d) == null ? void 0 : N.type) === "focus";
      d = k, m = k.currentTarget, de(), !y.state.isVisible && b0(k) && li.forEach(function($) {
        return $(k);
      }), k.type === "click" && (y.props.trigger.indexOf("mouseenter") < 0 || s) && y.props.hideOnClick !== !1 && y.state.isVisible ? I = !0 : ar(k), k.type === "click" && (s = !I), I && !K && Zt(k);
    }
  }
  function Ur(k) {
    var N = k.target, I = _().contains(N) || b.contains(N);
    if (!(k.type === "mousemove" && I)) {
      var K = Nt().concat(b).map(function($) {
        var Se, Ve = $._tippy, On = (Se = Ve.popperInstance) == null ? void 0 : Se.state;
        return On ? {
          popperRect: $.getBoundingClientRect(),
          popperState: On,
          props: t
        } : null;
      }).filter(Boolean);
      C0(K, k) && (ve(), Zt(k));
    }
  }
  function Jr(k) {
    var N = lr(k) || y.props.trigger.indexOf("click") >= 0 && s;
    if (!N) {
      if (y.props.interactive) {
        y.hideWithInteractivity(k);
        return;
      }
      Zt(k);
    }
  }
  function sr(k) {
    y.props.trigger.indexOf("focusin") < 0 && k.target !== _() || y.props.interactive && k.relatedTarget && b.contains(k.relatedTarget) || Zt(k);
  }
  function lr(k) {
    return at.isTouch ? q() !== k.type.indexOf("touch") >= 0 : !1;
  }
  function Gr() {
    Yr();
    var k = y.props, N = k.popperOptions, I = k.placement, K = k.offset, $ = k.getReferenceClientRect, Se = k.moveTransition, Ve = j() ? Cs(b).arrow : null, On = $ ? {
      getBoundingClientRect: $,
      contextElement: $.contextElement || _()
    } : n, xl = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(ti) {
        var En = ti.state;
        if (j()) {
          var Ju = ee(), wo = Ju.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(ni) {
            ni === "placement" ? wo.setAttribute("data-placement", En.placement) : En.attributes.popper["data-popper-" + ni] ? wo.setAttribute("data-" + ni, "") : wo.removeAttribute("data-" + ni);
          }), En.attributes.popper = {};
        }
      }
    }, en = [{
      name: "offset",
      options: {
        offset: K
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
        adaptive: !Se
      }
    }, xl];
    j() && Ve && en.push({
      name: "arrow",
      options: {
        element: Ve,
        padding: 3
      }
    }), en.push.apply(en, (N == null ? void 0 : N.modifiers) || []), y.popperInstance = d0(On, b, Object.assign({}, N, {
      placement: I,
      onFirstUpdate: f,
      modifiers: en
    }));
  }
  function Yr() {
    y.popperInstance && (y.popperInstance.destroy(), y.popperInstance = null);
  }
  function wt() {
    var k = y.props.appendTo, N, I = _();
    y.props.interactive && k === du || k === "parent" ? N = I.parentNode : N = uu(k, [I]), N.contains(b) || N.appendChild(b), y.state.isMounted = !0, Gr(), process.env.NODE_ENV !== "production" && Mt(y.props.interactive && k === Be.appendTo && I.nextElementSibling !== b, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function Nt() {
    return Vi(b.querySelectorAll("[data-tippy-root]"));
  }
  function ar(k) {
    y.clearDelayTimeouts(), k && U("onTrigger", [y, k]), Ye();
    var N = Y(!0), I = H(), K = I[0], $ = I[1];
    at.isTouch && K === "hold" && $ && (N = $), N ? r = setTimeout(function() {
      y.show();
    }, N) : y.show();
  }
  function Zt(k) {
    if (y.clearDelayTimeouts(), U("onUntrigger", [y, k]), !y.state.isVisible) {
      vt();
      return;
    }
    if (!(y.props.trigger.indexOf("mouseenter") >= 0 && y.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(k.type) >= 0 && s)) {
      var N = Y(!1);
      N ? i = setTimeout(function() {
        y.state.isVisible && y.hide();
      }, N) : o = requestAnimationFrame(function() {
        y.hide();
      });
    }
  }
  function cr() {
    y.state.isEnabled = !0;
  }
  function Xr() {
    y.hide(), y.state.isEnabled = !1;
  }
  function Qr() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function Zr(k) {
    if (process.env.NODE_ENV !== "production" && Mt(y.state.isDestroyed, Dn("setProps")), !y.state.isDestroyed) {
      U("onBeforeUpdate", [y, k]), qr();
      var N = y.props, I = ja(n, Object.assign({}, N, za(k), {
        ignoreAttributes: !0
      }));
      y.props = I, An(), N.interactiveDebounce !== I.interactiveDebounce && (ve(), p = Pa(Ur, I.interactiveDebounce)), N.triggerTarget && !I.triggerTarget ? Pn(N.triggerTarget).forEach(function(K) {
        K.removeAttribute("aria-expanded");
      }) : I.triggerTarget && n.removeAttribute("aria-expanded"), de(), W(), O && O(N, I), y.popperInstance && (Gr(), Nt().forEach(function(K) {
        requestAnimationFrame(K._tippy.popperInstance.forceUpdate);
      })), U("onAfterUpdate", [y, k]);
    }
  }
  function ei(k) {
    y.setProps({
      content: k
    });
  }
  function Wu() {
    process.env.NODE_ENV !== "production" && Mt(y.state.isDestroyed, Dn("show"));
    var k = y.state.isVisible, N = y.state.isDestroyed, I = !y.state.isEnabled, K = at.isTouch && !y.props.touch, $ = jo(y.props.duration, 0, Be.duration);
    if (!(k || N || I || K) && !_().hasAttribute("disabled") && (U("onShow", [y], !1), y.props.onShow(y) !== !1)) {
      if (y.state.isVisible = !0, j() && (b.style.visibility = "visible"), W(), Ye(), y.state.isMounted || (b.style.transition = "none"), j()) {
        var Se = ee(), Ve = Se.box, On = Se.content;
        Wo([Ve, On], 0);
      }
      f = function() {
        var en;
        if (!(!y.state.isVisible || c)) {
          if (c = !0, b.offsetHeight, b.style.transition = y.props.moveTransition, j() && y.props.animation) {
            var bo = ee(), ti = bo.box, En = bo.content;
            Wo([ti, En], $), Ha([ti, En], "visible");
          }
          Q(), de(), Ba(Ko, y), (en = y.popperInstance) == null || en.forceUpdate(), U("onMount", [y]), y.props.animation && j() && bt($, function() {
            y.state.isShown = !0, U("onShown", [y]);
          });
        }
      }, wt();
    }
  }
  function _u() {
    process.env.NODE_ENV !== "production" && Mt(y.state.isDestroyed, Dn("hide"));
    var k = !y.state.isVisible, N = y.state.isDestroyed, I = !y.state.isEnabled, K = jo(y.props.duration, 1, Be.duration);
    if (!(k || N || I) && (U("onHide", [y], !1), y.props.onHide(y) !== !1)) {
      if (y.state.isVisible = !1, y.state.isShown = !1, c = !1, s = !1, j() && (b.style.visibility = "hidden"), ve(), vt(), W(!0), j()) {
        var $ = ee(), Se = $.box, Ve = $.content;
        y.props.animation && (Wo([Se, Ve], K), Ha([Se, Ve], "hidden"));
      }
      Q(), de(), y.props.animation ? j() && Mn(K, y.unmount) : y.unmount();
    }
  }
  function Ku(k) {
    process.env.NODE_ENV !== "production" && Mt(y.state.isDestroyed, Dn("hideWithInteractivity")), X().addEventListener("mousemove", p), Ba(li, p), p(k);
  }
  function qu() {
    process.env.NODE_ENV !== "production" && Mt(y.state.isDestroyed, Dn("unmount")), y.state.isVisible && y.hide(), y.state.isMounted && (Yr(), Nt().forEach(function(k) {
      k._tippy.unmount();
    }), b.parentNode && b.parentNode.removeChild(b), Ko = Ko.filter(function(k) {
      return k !== y;
    }), y.state.isMounted = !1, U("onHidden", [y]));
  }
  function Uu() {
    process.env.NODE_ENV !== "production" && Mt(y.state.isDestroyed, Dn("destroy")), !y.state.isDestroyed && (y.clearDelayTimeouts(), y.unmount(), qr(), delete n._tippy, y.state.isDestroyed = !0, U("onDestroy", [y]));
  }
}
function Sn(n, e) {
  e === void 0 && (e = {});
  var t = Be.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (D0(n), gu(e, t)), T0();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = k0(n);
  if (process.env.NODE_ENV !== "production") {
    var o = Br(r.content), s = i.length > 1;
    Mt(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var d = c && H0(c, r);
    return d && a.push(d), a;
  }, []);
  return Br(n) ? l[0] : l;
}
Sn.defaultProps = Be;
Sn.setDefaultProps = I0;
Sn.currentInput = at;
Object.assign({}, Zd, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
Sn.setDefaultProps({
  render: yu
});
class V0 {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: d }) => {
      const { doc: u, selection: f } = a, { empty: h } = f, p = !u.textBetween(c, d).length && tl(a.selection), m = this.element.contains(document.activeElement);
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
      const { ranges: w } = g, C = Math.min(...w.map((b) => b.$from.pos)), y = Math.max(...w.map((b) => b.$to.pos));
      if (!((u = this.shouldShow) === null || u === void 0 ? void 0 : u.call(this, {
        editor: this.editor,
        view: l,
        state: p,
        oldState: d,
        from: C,
        to: y
      }))) {
        this.hide();
        return;
      }
      (f = this.tippy) === null || f === void 0 || f.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (Ag(p.selection)) {
            let b = l.nodeDOM(C);
            const O = b.dataset.nodeViewWrapper ? b : b.querySelector("[data-node-view-wrapper]");
            if (O && (b = O.firstChild), b)
              return b.getBoundingClientRect();
          }
          return Yd(l, C, y);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Sn(e, {
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
  update(e, t) {
    const { state: r } = e, i = r.selection.$from.pos !== r.selection.$to.pos;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), s = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, s, t);
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
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const vu = (n) => new oe({
  key: typeof n.pluginKey == "string" ? new ce(n.pluginKey) : n.pluginKey,
  view: (e) => new V0({ view: e, ...n })
});
le.create({
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
      vu({
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
class F0 {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: d } = a, u = c.depth === 1, f = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!s.hasFocus() || !d || !u || !f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(s.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.editor = e, this.element = t, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Sn(e, {
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
  update(e, t) {
    var r, i, o;
    const { state: s } = e, { doc: l, selection: a } = s, { from: c, to: d } = a;
    if (t && t.doc.eq(l) && t.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: s,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => Yd(e, c, d))
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
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const bu = (n) => new oe({
  key: typeof n.pluginKey == "string" ? new ce(n.pluginKey) : n.pluginKey,
  view: (e) => new F0({ view: e, ...n })
});
le.create({
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
      bu({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
const $0 = $r({
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
  setup(n, { slots: e }) {
    const t = Bs(null);
    return Cc(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: s, tippyOptions: l } = n;
      i.registerPlugin(vu({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: o,
        shouldShow: s,
        tippyOptions: l
      }));
    }), zs(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return un("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function Ka(n) {
  return ef((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class j0 extends n1 {
  constructor(e = {}) {
    return super(e), this.vueRenderers = Sc(/* @__PURE__ */ new Map()), this.contentComponent = null, this.reactiveState = Ka(this.view.state), this.reactiveExtensionStorage = Ka(this.extensionStorage), this.on("transaction", () => {
      this.reactiveState.value = this.view.state, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Mc(this);
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
  registerPlugin(e, t) {
    super.registerPlugin(e, t), this.reactiveState.value = this.view.state;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    super.unregisterPlugin(e), this.reactiveState.value = this.view.state;
  }
}
const W0 = $r({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = Bs(), t = Gu();
    return Yu(() => {
      const r = n.editor;
      r && r.options.element && e.value && Xu(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = Qu(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), zs(() => {
      const r = n.editor;
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
    const n = [];
    return this.editor && this.editor.vueRenderers.forEach((e) => {
      const t = un(Zu, {
        to: e.teleportElement,
        key: e.id
      }, un(e.component, {
        ref: e.id,
        ...e.props
      }));
      n.push(t);
    }), un("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    }, ...n);
  }
});
$r({
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
  setup(n, { slots: e }) {
    const t = Bs(null);
    return Cc(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: s } = n;
      i.registerPlugin(bu({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: o,
        shouldShow: s
      }));
    }), zs(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return un("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
$r({
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return un(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
$r({
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return un(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
class _0 {
  constructor(e, { props: t = {}, editor: r }) {
    if (this.id = Math.floor(Math.random() * 4294967295).toString(), this.editor = r, this.component = Mc(e), this.teleportElement = document.createElement("div"), this.element = this.teleportElement, this.props = Sc(t), this.editor.vueRenderers.set(this.id, this), this.editor.contentComponent) {
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
    Object.entries(e).forEach(([t, r]) => {
      this.props[t] = r;
    });
  }
  destroy() {
    this.editor.vueRenderers.delete(this.id);
  }
}
const K0 = /^\s*>\s$/, wu = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Lr({
        find: K0,
        type: this.type
      })
    ];
  }
}), q0 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, U0 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, J0 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, G0 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, Y0 = Le.create({
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
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
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
      kn({
        find: q0,
        type: this.type
      }),
      kn({
        find: J0,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Jt({
        find: U0,
        type: this.type
      }),
      Jt({
        find: G0,
        type: this.type
      })
    ];
  }
}), X0 = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["li", G(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), qa = Le.create({
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
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = mo(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), Ua = /^\s*([-+*])\s$/, Q0 = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(X0.name, this.editor.getAttributes(qa.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Lr({
      find: Ua,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Lr({
      find: Ua,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(qa.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), Z0 = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/, ey = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g, ty = Le.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["code", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      kn({
        find: Z0,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Jt({
        find: ey,
        type: this.type
      })
    ];
  }
}), ny = /^```([a-z]+)?[\s\n]$/, ry = /^~~~([a-z]+)?[\s\n]$/, iy = se.create({
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
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, o = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((s) => s.startsWith(t)).map((s) => s.replace(t, ""))[0];
          return o || null;
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
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      G(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: o } = t;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 || r.nodeAt(l) ? !1 : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      vs({
        find: ny,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      vs({
        find: ry,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new oe({
        key: new ce("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!t || !o)
              return !1;
            const { tr: s } = n.state;
            return s.replaceSelectionWith(this.type.create({ language: o })), s.setSelection(P.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.insertText(t.replace(/\r\n?/g, `
`)), s.setMeta("paste", !0), n.dispatch(s), !0;
          }
        }
      })
    ];
  }
}), oy = se.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function sy(n = {}) {
  return new oe({
    view(e) {
      return new ly(e, n);
    }
  });
}
class ly {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
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
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let o, s;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, s = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      o = l.left - i.scrollLeft, s = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !o) {
      let s = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = Gc(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
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
const ay = le.create({
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
      sy(this.options)
    ];
  }
});
class re extends R {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return re.valid(r) ? new re(r) : R.near(r);
  }
  content() {
    return A.empty;
  }
  eq(e) {
    return e instanceof re && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new re(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new fl(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !cy(e) || !dy(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e:
      for (; ; ) {
        if (!r && re.valid(e))
          return e;
        let i = e.pos, o = null;
        for (let s = e.depth; ; s--) {
          let l = e.node(s);
          if (t > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
            o = l.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
            break;
          } else if (s == 0)
            return null;
          i += t;
          let a = e.doc.resolve(i);
          if (re.valid(a))
            return a;
        }
        for (; ; ) {
          let s = t > 0 ? o.firstChild : o.lastChild;
          if (!s) {
            if (o.isAtom && !o.isText && !L.isSelectable(o)) {
              e = e.doc.resolve(i + o.nodeSize * t), r = !1;
              continue e;
            }
            break;
          }
          o = s, i += t;
          let l = e.doc.resolve(i);
          if (re.valid(l))
            return l;
        }
        return null;
      }
  }
}
re.prototype.visible = !1;
re.findFrom = re.findGapCursorFrom;
R.jsonID("gapcursor", re);
class fl {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new fl(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return re.valid(t) ? new re(t) : R.near(t);
  }
}
function cy(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function dy(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function uy() {
  return new oe({
    props: {
      decorations: my,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && re.valid(t) ? new re(t) : null;
      },
      handleClick: hy,
      handleKeyDown: fy,
      handleDOMEvents: { beforeinput: py }
    }
  });
}
const fy = Qs({
  ArrowLeft: ai("horiz", -1),
  ArrowRight: ai("horiz", 1),
  ArrowUp: ai("vert", -1),
  ArrowDown: ai("vert", 1)
});
function ai(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof P) {
      if (!o.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = re.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new re(c))), !0) : !1;
  };
}
function hy(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!re.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && L.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new re(r))), !0);
}
function py(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof re))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = x.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = x.from(r[s].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new A(i, 0, 0));
  return o.setSelection(P.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function my(n) {
  if (!(n.selection instanceof re))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Z.create(n.doc, [ke.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const gy = le.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      uy()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = z(E(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), yy = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["br", G(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: o } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: l } = r.extensionManager, a = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
            if (d && a && s) {
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
}), vy = se.create({
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
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, G(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => vs({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Fi = 200, pe = function() {
};
pe.prototype.append = function(e) {
  return e.length ? (e = pe.from(e), !this.length && e || e.length < Fi && this.leafAppend(e) || this.length < Fi && e.leafPrepend(this) || this.appendInner(e)) : this;
};
pe.prototype.prepend = function(e) {
  return e.length ? pe.from(e).append(this) : this;
};
pe.prototype.appendInner = function(e) {
  return new by(this, e);
};
pe.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? pe.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
pe.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
pe.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
pe.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, t, r), i;
};
pe.from = function(e) {
  return e instanceof pe ? e : e && e.length ? new ku(e) : pe.empty;
};
var ku = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Fi)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Fi)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(pe);
pe.empty = new ku([]);
var by = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
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
}(pe);
const wy = 500;
class Ze {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], d = [];
    return this.items.forEach((u, f) => {
      if (!u.step) {
        i || (i = this.remapping(r, f + 1), o = i.maps.length), o--, d.push(u);
        return;
      }
      if (i) {
        d.push(new it(u.map));
        let h = u.step.map(i.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new it(p, void 0, void 0, c.length + d.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(u.step);
      if (u.selection)
        return l = i ? u.selection.map(i.slice(o)) : u.selection, a = new Ze(this.items.slice(0, r).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), f = new it(e.mapping.maps[d], u, t), h;
      (h = a && a.merge(f)) && (f = h, d ? o.pop() : l = l.slice(0, l.length - 1)), o.push(f), t && (s++, t = void 0), i || (a = f);
    }
    let c = s - r.depth;
    return c > xy && (l = ky(l, c), s -= c), new Ze(l.append(o), s);
  }
  remapping(e, t) {
    let r = new jn();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ze(this.items.append(e.map((t) => new it(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((f) => {
      let h = o.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (f.step) {
        let m = e.steps[h].invert(e.docs[h]), g = f.selection && f.selection.map(o.slice(a + 1, h));
        g && l++, r.push(new it(p, m, g));
      } else
        r.push(new it(p));
    }, i);
    let c = [];
    for (let f = t; f < s; f++)
      c.push(new it(o.maps[f]));
    let d = this.items.slice(0, i).append(c).append(r), u = new Ze(d, l);
    return u.emptyItemCount() > wy && (u = u.compress(this.items.length - r.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let d = s.selection && s.selection.map(t.slice(r));
          d && o++;
          let u = new it(c.invert(), a, d), f, h = i.length - 1;
          (f = i.length && i[h].merge(u)) ? i[h] = f : i.push(u);
        }
      } else
        s.map && r--;
    }, this.items.length, 0), new Ze(pe.from(i.reverse()), o);
  }
}
Ze.empty = new Ze(pe.empty, 0);
function ky(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class it {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new it(t.getMap().invert(), t, this.selection);
    }
  }
}
class It {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const xy = 20;
function Cy(n, e, t, r) {
  let i = t.getMeta(qt), o;
  if (i)
    return i.historyState;
  t.getMeta(My) && (n = new It(n.done, n.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (s && s.getMeta(qt))
    return s.getMeta(qt).redo ? new It(n.done.addTransform(t, void 0, r, bi(e)), n.undone, Ja(t.mapping.maps[t.steps.length - 1]), n.prevTime, n.prevComposition) : new It(n.done, n.undone.addTransform(t, void 0, r, bi(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !s && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Sy(t, n.prevRanges)), c = s ? qo(n.prevRanges, t.mapping) : Ja(t.mapping.maps[t.steps.length - 1]);
    return new It(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, bi(e)), Ze.empty, c, t.time, l ?? n.prevComposition);
  } else
    return (o = t.getMeta("rebased")) ? new It(n.done.rebased(t, o), n.undone.rebased(t, o), qo(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new It(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), qo(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function Sy(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function Ja(n) {
  let e = [];
  return n.forEach((t, r, i, o) => e.push(i, o)), e;
}
function qo(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function xu(n, e, t, r) {
  let i = bi(e), o = qt.get(e).spec.config, s = (r ? n.undone : n.done).popEvent(e, i);
  if (!s)
    return;
  let l = s.selection.resolve(s.transform.doc), a = (r ? n.done : n.undone).addTransform(s.transform, e.selection.getBookmark(), o, i), c = new It(r ? a : s.remaining, r ? s.remaining : a, null, 0, -1);
  t(s.transform.setSelection(l).setMeta(qt, { redo: r, historyState: c }).scrollIntoView());
}
let Uo = !1, Ga = null;
function bi(n) {
  let e = n.plugins;
  if (Ga != e) {
    Uo = !1, Ga = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Uo = !0;
        break;
      }
  }
  return Uo;
}
const qt = new ce("history"), My = new ce("closeHistory");
function Ty(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new oe({
    key: qt,
    state: {
      init() {
        return new It(Ze.empty, Ze.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Cy(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Cu : r == "historyRedo" ? Su : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const Cu = (n, e) => {
  let t = qt.getState(n);
  return !t || t.done.eventCount == 0 ? !1 : (e && xu(t, n, e, !1), !0);
}, Su = (n, e) => {
  let t = qt.getState(n);
  return !t || t.undone.eventCount == 0 ? !1 : (e && xu(t, n, e, !0), !0);
}, Ay = le.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Cu(n, e),
      redo: () => ({ state: n, dispatch: e }) => Su(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      Ty(this.options)
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
}), Oy = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", G(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n }) => n().insertContent({ type: this.name }).command(({ tr: e, dispatch: t }) => {
        var r;
        if (t) {
          const { $to: i } = e.selection, o = i.end();
          if (i.nodeAfter)
            e.setSelection(P.create(e.doc, i.pos));
          else {
            const s = (r = i.parent.type.contentMatch.defaultType) === null || r === void 0 ? void 0 : r.create();
            s && (e.insert(o, s), e.setSelection(P.create(e.doc, o)));
          }
          e.scrollIntoView();
        }
        return !0;
      }).run()
    };
  },
  addInputRules() {
    return [
      r1({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), Ey = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, Ny = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, Dy = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, Ry = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, Ly = Le.create({
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
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
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
      kn({
        find: Ey,
        type: this.type
      }),
      kn({
        find: Dy,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Jt({
        find: Ny,
        type: this.type
      }),
      Jt({
        find: Ry,
        type: this.type
      })
    ];
  }
}), Iy = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["li", G(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Py = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["li", G(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Ya = Le.create({
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
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = mo(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), Xa = /^(\d+)\.\s$/, By = se.create({
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
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
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
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", G(this.options.HTMLAttributes, t), 0] : ["ol", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Py.name, this.editor.getAttributes(Ya.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Lr({
      find: Xa,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Lr({
      find: Xa,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Ya.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), zy = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["p", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Hy = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/, Vy = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g, Fy = Le.create({
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
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-x": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      kn({
        find: Hy,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Jt({
        find: Vy,
        type: this.type
      })
    ];
  }
}), $y = se.create({
  name: "text",
  group: "inline"
}), jy = le.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, o, s, l, a, c, d, u, f, h, p, m, g, v;
    const w = [];
    return this.options.blockquote !== !1 && w.push(wu.configure((n = this.options) === null || n === void 0 ? void 0 : n.blockquote)), this.options.bold !== !1 && w.push(Y0.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && w.push(Q0.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && w.push(ty.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && w.push(iy.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && w.push(oy.configure((o = this.options) === null || o === void 0 ? void 0 : o.document)), this.options.dropcursor !== !1 && w.push(ay.configure((s = this.options) === null || s === void 0 ? void 0 : s.dropcursor)), this.options.gapcursor !== !1 && w.push(gy.configure((l = this.options) === null || l === void 0 ? void 0 : l.gapcursor)), this.options.hardBreak !== !1 && w.push(yy.configure((a = this.options) === null || a === void 0 ? void 0 : a.hardBreak)), this.options.heading !== !1 && w.push(vy.configure((c = this.options) === null || c === void 0 ? void 0 : c.heading)), this.options.history !== !1 && w.push(Ay.configure((d = this.options) === null || d === void 0 ? void 0 : d.history)), this.options.horizontalRule !== !1 && w.push(Oy.configure((u = this.options) === null || u === void 0 ? void 0 : u.horizontalRule)), this.options.italic !== !1 && w.push(Ly.configure((f = this.options) === null || f === void 0 ? void 0 : f.italic)), this.options.listItem !== !1 && w.push(Iy.configure((h = this.options) === null || h === void 0 ? void 0 : h.listItem)), this.options.orderedList !== !1 && w.push(By.configure((p = this.options) === null || p === void 0 ? void 0 : p.orderedList)), this.options.paragraph !== !1 && w.push(zy.configure((m = this.options) === null || m === void 0 ? void 0 : m.paragraph)), this.options.strike !== !1 && w.push(Fy.configure((g = this.options) === null || g === void 0 ? void 0 : g.strike)), this.options.text !== !1 && w.push($y.configure((v = this.options) === null || v === void 0 ? void 0 : v.text)), w;
  }
}), Wy = "aaa1rp3barth4b0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0faromeo7ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re2s2c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y0eats7k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking0channel11l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t0isalat7u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0at2delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d0network8tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntdoor4ier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5gtv3iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0eles2s3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1nder2le4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster5ia3d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4de2k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0cys3drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7serati6ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic3tual5v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rthwesternmutual14on4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3ssagens7y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cher3ks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w0time7i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ffany5ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0channel7ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lkswagen7vo3te1ing3o2yage5u0elos6wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _y = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5تصالات6رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", nr = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, Ss = "numeric", Ms = "ascii", Ts = "alpha", wi = "asciinumeric", ci = "alphanumeric", As = "domain", Mu = "emoji", Ky = "scheme", qy = "slashscheme", Qa = "whitespace";
function Uy(n, e) {
  return n in e || (e[n] = []), e[n];
}
function dn(n, e, t) {
  e[Ss] && (e[wi] = !0, e[ci] = !0), e[Ms] && (e[wi] = !0, e[Ts] = !0), e[wi] && (e[ci] = !0), e[Ts] && (e[ci] = !0), e[ci] && (e[As] = !0), e[Mu] && (e[As] = !0);
  for (const r in e) {
    const i = Uy(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function Jy(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function Ee(n) {
  n === void 0 && (n = null), this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
Ee.groups = {};
Ee.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(n))
        return o;
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
  has(n, e) {
    return e === void 0 && (e = !1), e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
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
  tr(n, e, t, r) {
    r = r || Ee.groups;
    let i;
    return e && e.j ? i = e : (i = new Ee(e), t && r && dn(e, t, r)), this.jr.push([n, i]), i;
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
  ts(n, e, t, r) {
    let i = this;
    const o = n.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(n[s]);
    return i.tt(n[o - 1], e, t, r);
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
  tt(n, e, t, r) {
    r = r || Ee.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const o = e;
    let s, l = i.go(n);
    if (l ? (s = new Ee(), nr(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new Ee(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = nr(Jy(s.t, r), t);
          dn(o, a, r);
        } else
          t && dn(o, t, r);
      s.t = o;
    }
    return i.j[n] = s, s;
  }
};
const D = (n, e, t, r, i) => n.ta(e, t, r, i), $e = (n, e, t, r, i) => n.tr(e, t, r, i), Za = (n, e, t, r, i) => n.ts(e, t, r, i), M = (n, e, t, r, i) => n.tt(e, t, r, i), Ct = "WORD", Os = "UWORD", Hr = "LOCALHOST", Es = "TLD", Ns = "UTLD", ki = "SCHEME", Bn = "SLASH_SCHEME", hl = "NUM", Tu = "WS", pl = "NL", Vn = "OPENBRACE", Sr = "OPENBRACKET", Mr = "OPENANGLEBRACKET", Tr = "OPENPAREN", sn = "CLOSEBRACE", Fn = "CLOSEBRACKET", $n = "CLOSEANGLEBRACKET", ln = "CLOSEPAREN", $i = "AMPERSAND", ji = "APOSTROPHE", Wi = "ASTERISK", Pt = "AT", _i = "BACKSLASH", Ki = "BACKTICK", qi = "CARET", zt = "COLON", ml = "COMMA", Ui = "DOLLAR", ot = "DOT", Ji = "EQUALS", gl = "EXCLAMATION", st = "HYPHEN", Gi = "PERCENT", Yi = "PIPE", Xi = "PLUS", Qi = "POUND", Zi = "QUERY", yl = "QUOTE", vl = "SEMI", lt = "SLASH", Ar = "TILDE", eo = "UNDERSCORE", Au = "EMOJI", to = "SYM";
var Ou = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: Ct,
  UWORD: Os,
  LOCALHOST: Hr,
  TLD: Es,
  UTLD: Ns,
  SCHEME: ki,
  SLASH_SCHEME: Bn,
  NUM: hl,
  WS: Tu,
  NL: pl,
  OPENBRACE: Vn,
  OPENBRACKET: Sr,
  OPENANGLEBRACKET: Mr,
  OPENPAREN: Tr,
  CLOSEBRACE: sn,
  CLOSEBRACKET: Fn,
  CLOSEANGLEBRACKET: $n,
  CLOSEPAREN: ln,
  AMPERSAND: $i,
  APOSTROPHE: ji,
  ASTERISK: Wi,
  AT: Pt,
  BACKSLASH: _i,
  BACKTICK: Ki,
  CARET: qi,
  COLON: zt,
  COMMA: ml,
  DOLLAR: Ui,
  DOT: ot,
  EQUALS: Ji,
  EXCLAMATION: gl,
  HYPHEN: st,
  PERCENT: Gi,
  PIPE: Yi,
  PLUS: Xi,
  POUND: Qi,
  QUERY: Zi,
  QUOTE: yl,
  SEMI: vl,
  SLASH: lt,
  TILDE: Ar,
  UNDERSCORE: eo,
  EMOJI: Au,
  SYM: to
});
const Rn = /[a-z]/, Jo = /\p{L}/u, Go = /\p{Emoji}/u, Yo = /\d/, ec = /\s/, tc = `
`, Gy = "️", Yy = "‍";
let di = null, ui = null;
function Xy(n) {
  n === void 0 && (n = []);
  const e = {};
  Ee.groups = e;
  const t = new Ee();
  di == null && (di = nc(Wy)), ui == null && (ui = nc(_y)), M(t, "'", ji), M(t, "{", Vn), M(t, "[", Sr), M(t, "<", Mr), M(t, "(", Tr), M(t, "}", sn), M(t, "]", Fn), M(t, ">", $n), M(t, ")", ln), M(t, "&", $i), M(t, "*", Wi), M(t, "@", Pt), M(t, "`", Ki), M(t, "^", qi), M(t, ":", zt), M(t, ",", ml), M(t, "$", Ui), M(t, ".", ot), M(t, "=", Ji), M(t, "!", gl), M(t, "-", st), M(t, "%", Gi), M(t, "|", Yi), M(t, "+", Xi), M(t, "#", Qi), M(t, "?", Zi), M(t, '"', yl), M(t, "/", lt), M(t, ";", vl), M(t, "~", Ar), M(t, "_", eo), M(t, "\\", _i);
  const r = $e(t, Yo, hl, {
    [Ss]: !0
  });
  $e(r, Yo, r);
  const i = $e(t, Rn, Ct, {
    [Ms]: !0
  });
  $e(i, Rn, i);
  const o = $e(t, Jo, Os, {
    [Ts]: !0
  });
  $e(o, Rn), $e(o, Jo, o);
  const s = $e(t, ec, Tu, {
    [Qa]: !0
  });
  M(t, tc, pl, {
    [Qa]: !0
  }), M(s, tc), $e(s, ec, s);
  const l = $e(t, Go, Au, {
    [Mu]: !0
  });
  $e(l, Go, l), M(l, Gy, l);
  const a = M(l, Yy);
  $e(a, Go, l);
  const c = [[Rn, i]], d = [[Rn, null], [Jo, o]];
  for (let u = 0; u < di.length; u++)
    Rt(t, di[u], Es, Ct, c);
  for (let u = 0; u < ui.length; u++)
    Rt(t, ui[u], Ns, Os, d);
  dn(Es, {
    tld: !0,
    ascii: !0
  }, e), dn(Ns, {
    utld: !0,
    alpha: !0
  }, e), Rt(t, "file", ki, Ct, c), Rt(t, "mailto", ki, Ct, c), Rt(t, "http", Bn, Ct, c), Rt(t, "https", Bn, Ct, c), Rt(t, "ftp", Bn, Ct, c), Rt(t, "ftps", Bn, Ct, c), dn(ki, {
    scheme: !0,
    ascii: !0
  }, e), dn(Bn, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((u, f) => u[0] > f[0] ? 1 : -1);
  for (let u = 0; u < n.length; u++) {
    const f = n[u][0], p = n[u][1] ? {
      [Ky]: !0
    } : {
      [qy]: !0
    };
    f.indexOf("-") >= 0 ? p[As] = !0 : Rn.test(f) ? Yo.test(f) ? p[wi] = !0 : p[Ms] = !0 : p[Ss] = !0, Za(t, f, f, p);
  }
  return Za(t, "localhost", Hr, {
    ascii: !0
  }), t.jd = new Ee(to), {
    start: t,
    tokens: nr({
      groups: e
    }, Ou)
  };
}
function Qy(n, e) {
  const t = Zy(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = n, a = null, c = 0, d = null, u = -1, f = -1;
    for (; s < r && (a = l.go(t[s])); )
      l = a, l.accepts() ? (u = 0, f = 0, d = l) : u >= 0 && (u += t[s].length, f++), c += t[s].length, o += t[s].length, s++;
    o -= u, s -= f, c -= u, i.push({
      t: d.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function Zy(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === t || (o = n.charCodeAt(r + 1)) < 56320 || o > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function Rt(n, e, t, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    n.j[a] ? o = n.j[a] : (o = new Ee(r), o.jr = i.slice(), n.j[a] = o), n = o;
  }
  return o = new Ee(t), o.jr = i.slice(), n.j[e[s - 1]] = o, o;
}
function nc(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let o = 0;
    for (; i.indexOf(n[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(t.join(""));
      for (let s = parseInt(n.substring(r, r + o), 10); s > 0; s--)
        t.pop();
      r += o;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const Vr = {
  defaultProtocol: "http",
  events: null,
  format: rc,
  formatHref: rc,
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
function bl(n, e) {
  e === void 0 && (e = null);
  let t = nr({}, Vr);
  n && (t = nr(t, n instanceof bl ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
bl.prototype = {
  o: Vr,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
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
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : Vr[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function rc(n) {
  return n;
}
function Eu(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Eu.prototype = {
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
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
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
  toObject(n) {
    return n === void 0 && (n = Vr.defaultProtocol), {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), o = this.toFormattedString(n), s = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), d = n.getObj("attributes", t, e), u = n.getObj("events", t, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), d && nr(s, d), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: u
    };
  }
};
function yo(n, e) {
  class t extends Eu {
    constructor(i, o) {
      super(i, o), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const ic = yo("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), oc = yo("text"), ev = yo("nl"), tn = yo("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n) {
    return n === void 0 && (n = Vr.defaultProtocol), this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Hr && n[1].t === zt;
  }
}), ue = (n) => new Ee(n);
function tv(n) {
  let {
    groups: e
  } = n;
  const t = e.domain.concat([$i, Wi, Pt, _i, Ki, qi, Ui, Ji, st, hl, Gi, Yi, Xi, Qi, lt, to, Ar, eo]), r = [ji, $n, sn, Fn, ln, zt, ml, ot, gl, Mr, Vn, Sr, Tr, Zi, yl, vl], i = [$i, ji, Wi, _i, Ki, qi, sn, Ui, Ji, st, Vn, Gi, Yi, Xi, Qi, Zi, lt, to, Ar, eo], o = ue(), s = M(o, Ar);
  D(s, i, s), D(s, e.domain, s);
  const l = ue(), a = ue(), c = ue();
  D(o, e.domain, l), D(o, e.scheme, a), D(o, e.slashscheme, c), D(l, i, s), D(l, e.domain, l);
  const d = M(l, Pt);
  M(s, Pt, d), M(a, Pt, d), M(c, Pt, d);
  const u = M(s, ot);
  D(u, i, s), D(u, e.domain, s);
  const f = ue();
  D(d, e.domain, f), D(f, e.domain, f);
  const h = M(f, ot);
  D(h, e.domain, f);
  const p = ue(ic);
  D(h, e.tld, p), D(h, e.utld, p), M(d, Hr, p);
  const m = M(f, st);
  D(m, e.domain, f), D(p, e.domain, f), M(p, ot, h), M(p, st, m);
  const g = M(p, zt);
  D(g, e.numeric, ic);
  const v = M(l, st), w = M(l, ot);
  D(v, e.domain, l), D(w, i, s), D(w, e.domain, l);
  const C = ue(tn);
  D(w, e.tld, C), D(w, e.utld, C), D(C, e.domain, l), D(C, i, s), M(C, ot, w), M(C, st, v), M(C, Pt, d);
  const y = M(C, zt), T = ue(tn);
  D(y, e.numeric, T);
  const b = ue(tn), O = ue();
  D(b, t, b), D(b, r, O), D(O, t, b), D(O, r, O), M(C, lt, b), M(T, lt, b);
  const S = M(a, zt), B = M(c, zt), H = M(B, lt), q = M(H, lt);
  D(a, e.domain, l), M(a, ot, w), M(a, st, v), D(c, e.domain, l), M(c, ot, w), M(c, st, v), D(S, e.domain, b), M(S, lt, b), D(q, e.domain, b), D(q, t, b), M(q, lt, b);
  const j = M(b, Vn), _ = M(b, Sr), X = M(b, Mr), ee = M(b, Tr);
  M(O, Vn, j), M(O, Sr, _), M(O, Mr, X), M(O, Tr, ee), M(j, sn, b), M(_, Fn, b), M(X, $n, b), M(ee, ln, b), M(j, sn, b);
  const Y = ue(tn), W = ue(tn), U = ue(tn), Q = ue(tn);
  D(j, t, Y), D(_, t, W), D(X, t, U), D(ee, t, Q);
  const de = ue(), ve = ue(), Ce = ue(), He = ue();
  return D(j, r), D(_, r), D(X, r), D(ee, r), D(Y, t, Y), D(W, t, W), D(U, t, U), D(Q, t, Q), D(Y, r, Y), D(W, r, W), D(U, r, U), D(Q, r, Q), D(de, t, de), D(ve, t, W), D(Ce, t, U), D(He, t, Q), D(de, r, de), D(ve, r, ve), D(Ce, r, Ce), D(He, r, He), M(W, Fn, b), M(U, $n, b), M(Q, ln, b), M(Y, sn, b), M(ve, Fn, b), M(Ce, $n, b), M(He, ln, b), M(de, ln, b), M(o, Hr, C), M(o, pl, ev), {
    start: o,
    tokens: Ou
  };
}
function nv(n, e, t) {
  let r = t.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, d = 0, u = null, f = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      s.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, u = l) : f >= 0 && f++, i++, d++;
    if (f < 0)
      i -= d, i < r && (s.push(t[i]), i++);
    else {
      s.length > 0 && (o.push(Xo(oc, e, s)), s = []), i -= f, d -= f;
      const h = u.t, p = t.slice(i - d, i);
      o.push(Xo(h, e, p));
    }
  }
  return s.length > 0 && o.push(Xo(oc, e, s)), o;
}
function Xo(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, o = e.slice(r, i);
  return new n(o, t);
}
const rv = typeof console < "u" && console && console.warn || (() => {
}), iv = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ne = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function ov() {
  Ee.groups = {}, ne.scanner = null, ne.parser = null, ne.tokenQueue = [], ne.pluginQueue = [], ne.customSchemes = [], ne.initialized = !1;
}
function sc(n, e) {
  if (e === void 0 && (e = !1), ne.initialized && rv(`linkifyjs: already initialized - will not register custom scheme "${n}" ${iv}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
 1. Must only contain digits, lowercase ASCII letters or "-"
 2. Cannot start or end with "-"
 3. "-" cannot repeat`);
  ne.customSchemes.push([n, e]);
}
function sv() {
  ne.scanner = Xy(ne.customSchemes);
  for (let n = 0; n < ne.tokenQueue.length; n++)
    ne.tokenQueue[n][1]({
      scanner: ne.scanner
    });
  ne.parser = tv(ne.scanner.tokens);
  for (let n = 0; n < ne.pluginQueue.length; n++)
    ne.pluginQueue[n][1]({
      scanner: ne.scanner,
      parser: ne.parser
    });
  ne.initialized = !0;
}
function Nu(n) {
  return ne.initialized || sv(), nv(ne.parser.start, n, Qy(ne.scanner.start, n));
}
function wl(n, e, t) {
  if (e === void 0 && (e = null), t === void 0 && (t = null), e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new bl(t), i = Nu(n), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && o.push(l.toFormattedObject(r));
  }
  return o;
}
function lc(n, e) {
  e === void 0 && (e = null);
  const t = Nu(n);
  return t.length === 1 && t[0].isLink && (!e || t[0].t === e);
}
function lv(n) {
  return new oe({
    key: new ce("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((d) => d.docChanged) && !t.doc.eq(r.doc), o = e.some((d) => d.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, l = gg(t.doc, [...e]), { mapping: a } = l;
      if (Sg(l).forEach(({ oldRange: d, newRange: u }) => {
        zi(d.from, d.to, t.doc).filter((m) => m.mark.type === n.type).forEach((m) => {
          const g = a.map(m.from), v = a.map(m.to), w = zi(g, v, r.doc).filter((S) => S.mark.type === n.type);
          if (!w.length)
            return;
          const C = w[0], y = t.doc.textBetween(m.from, m.to, void 0, " "), T = r.doc.textBetween(C.from, C.to, void 0, " "), b = lc(y), O = lc(T);
          b && !O && s.removeMark(C.from, C.to, n.type);
        });
        const f = vg(r.doc, u, (m) => m.isTextblock);
        let h, p;
        if (f.length > 1 ? (h = f[0], p = r.doc.textBetween(h.pos, h.pos + h.node.nodeSize, void 0, " ")) : f.length && r.doc.textBetween(u.from, u.to, " ", " ").endsWith(" ") && (h = f[0], p = r.doc.textBetween(h.pos, u.to, void 0, " ")), h && p) {
          const m = p.split(" ").filter((w) => w !== "");
          if (m.length <= 0)
            return !1;
          const g = m[m.length - 1], v = h.pos + p.lastIndexOf(g);
          if (!g)
            return !1;
          wl(g).filter((w) => w.isLink).filter((w) => n.validate ? n.validate(w.value) : !0).map((w) => ({
            ...w,
            from: v + w.start + 1,
            to: v + w.end + 1
          })).forEach((w) => {
            s.addMark(w.from, w.to, n.type.create({
              href: w.href
            }));
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function av(n) {
  return new oe({
    key: new ce("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, o, s;
        if (r.button !== 0)
          return !1;
        const l = Gd(e.state, n.type.name), a = (i = r.target) === null || i === void 0 ? void 0 : i.closest("a"), c = (o = a == null ? void 0 : a.href) !== null && o !== void 0 ? o : l.href, d = (s = a == null ? void 0 : a.target) !== null && s !== void 0 ? s : l.target;
        return a && c ? (window.open(c, d), !0) : !1;
      }
    }
  });
}
function cv(n) {
  return new oe({
    key: new ce("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: o } = i, { empty: s } = o;
        if (s)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = wl(l).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : (n.editor.commands.setMark(n.type, {
          href: a.href
        }), !0);
      }
    }
  });
}
const dv = Le.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  onCreate() {
    this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        sc(n);
        return;
      }
      sc(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    ov();
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
  renderHTML({ HTMLAttributes: n }) {
    return ["a", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => e().setMark(this.name, n).setMeta("preventAutolink", !0).run(),
      toggleLink: (n) => ({ chain: e }) => e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(),
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Jt({
        find: (n) => wl(n).filter((e) => this.options.validate ? this.options.validate(e.value) : !0).filter((e) => e.isLink).map((e) => ({
          text: e.value,
          index: e.start,
          data: e
        })),
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [];
    return this.options.autolink && n.push(lv({
      type: this.type,
      validate: this.options.validate
    })), this.options.openOnClick && n.push(av({
      type: this.type
    })), this.options.linkOnPaste && n.push(cv({
      editor: this.editor,
      type: this.type
    })), n;
  }
}), uv = le.create({
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
      new oe({
        key: new ce("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const o = n.type.createAndFill(), s = (o == null ? void 0 : o.sameMarkup(n)) && o.content.findDiffStart(n.content) === null;
            return n.descendants((l, a) => {
              const c = r >= a && r <= a + l.nodeSize, d = !l.isLeaf && !l.childCount;
              if ((c || !this.options.showOnlyCurrent) && d) {
                const u = [this.options.emptyNodeClass];
                s && u.push(this.options.emptyEditorClass);
                const f = ke.node(a, a + l.nodeSize, {
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
            }), Z.create(n, i);
          }
        }
      })
    ];
  }
});
var Ds, Rs;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  Ds = (e) => n.get(e), Rs = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  Ds = (r) => {
    for (let i = 0; i < n.length; i += 2)
      if (n[i] == r)
        return n[i + 1];
  }, Rs = (r, i) => (t == 10 && (t = 0), n[t++] = r, n[t++] = i);
}
var ie = class {
  constructor(n, e, t, r) {
    this.width = n, this.height = e, this.map = t, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n)
        continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let l = 1; o < this.width && this.map[e + l] == t; l++)
        o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == t; l++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(n) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == n)
        return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(n, e, t) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (t < 0 ? r - 1 : i)] : (t < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (t < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(n, e) {
    const {
      left: t,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(n), {
      left: s,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(t, s),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(n) {
    const e = [], t = {};
    for (let r = n.top; r < n.bottom; r++)
      for (let i = n.left; i < n.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        t[s] || (t[s] = !0, !(i == n.left && i && this.map[o - 1] == s || r == n.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(n, e, t) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + t.child(r).nodeSize;
      if (r == n) {
        let s = e + n * this.width;
        const l = (n + 1) * this.width;
        for (; s < l && this.map[s] < i; )
          s++;
        return s == l ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(n) {
    return Ds(n) || Rs(n, fv(n));
  }
};
function fv(n) {
  if (n.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + n.type.name);
  const e = hv(n), t = n.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let c = 0, d = e * t; c < d; c++)
    r[c] = 0;
  for (let c = 0, d = 0; c < t; c++) {
    const u = n.child(c);
    d++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; )
        i++;
      if (p == u.childCount)
        break;
      const m = u.child(p), { colspan: g, rowspan: v, colwidth: w } = m.attrs;
      for (let C = 0; C < v; C++) {
        if (C + c >= t) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: v - C
          });
          break;
        }
        const y = i + C * e;
        for (let T = 0; T < g; T++) {
          r[y + T] == 0 ? r[y + T] = d : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: g - T
          });
          const b = w && w[T];
          if (b) {
            const O = (y + T) % e * 2, S = s[O];
            S == null || S != b && s[O + 1] == 1 ? (s[O] = b, s[O + 1] = 1) : S == b && s[O + 1]++;
          }
        }
      }
      i += g, d += m.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; i < f; )
      r[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: c, n: h }), d++;
  }
  const l = new ie(e, t, r, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2)
    s[c] != null && s[c + 1] < t && (a = !0);
  return a && pv(l, s, n), l;
}
function hv(n) {
  let e = -1, t = !1;
  for (let r = 0; r < n.childCount; r++) {
    const i = n.child(r);
    let o = 0;
    if (t)
      for (let s = 0; s < r; s++) {
        const l = n.child(s);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          s + c.attrs.rowspan > r && (o += c.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const l = i.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function pv(n, e, t) {
  n.problems || (n.problems = []);
  const r = {};
  for (let i = 0; i < n.map.length; i++) {
    const o = n.map[i];
    if (r[o])
      continue;
    r[o] = !0;
    const s = t.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const d = (i + c) % n.width, u = e[d * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = mv(a)))[c] = u);
    }
    l && n.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function mv(n) {
  if (n.colwidth)
    return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++)
    e.push(0);
  return e;
}
function xe(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const r = n.nodes[t], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var Ht = new ce("selectingCells");
function ir(n) {
  for (let e = n.depth - 1; e > 0; e--)
    if (n.node(e).type.spec.tableRole == "row")
      return n.node(0).resolve(n.before(e + 1));
  return null;
}
function gv(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell")
      return n.node(e);
  }
  return null;
}
function nt(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row")
      return !0;
  return !1;
}
function vo(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const t = ir(e.$head) || yv(e.$head);
  if (t)
    return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function yv(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t - e.nodeSize);
  }
}
function Ls(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function vv(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function kl(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function Du(n, e, t) {
  const r = n.node(-1), i = ie.get(r), o = n.start(-1), s = i.nextCell(n.pos - o, e, t);
  return s == null ? null : n.node(0).resolve(o + s);
}
function Cn(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan - t };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function Ru(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan + t };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < t; i++)
      r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function bv(n, e, t) {
  const r = xe(e.type.schema).header_cell;
  for (let i = 0; i < n.height; i++)
    if (e.nodeAt(n.map[t + i * n.width]).type != r)
      return !1;
  return !0;
}
var F = class extends R {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(n, e = n) {
    const t = n.node(-1), r = ie.get(t), i = n.start(-1), o = r.rectBetween(
      n.pos - i,
      e.pos - i
    ), s = n.node(0), l = r.cellsInRect(o).filter((c) => c != e.pos - i);
    l.unshift(e.pos - i);
    const a = l.map((c) => {
      const d = t.nodeAt(c);
      if (!d)
        throw RangeError(`No cell with offset ${c} found`);
      const u = i + c + 1;
      return new ed(
        s.resolve(u),
        s.resolve(u + d.content.size)
      );
    });
    super(a[0].$from, a[0].$to, a), this.$anchorCell = n, this.$headCell = e;
  }
  map(n, e) {
    const t = n.resolve(e.map(this.$anchorCell.pos)), r = n.resolve(e.map(this.$headCell.pos));
    if (Ls(t) && Ls(r) && kl(t, r)) {
      const i = this.$anchorCell.node(-1) != t.node(-1);
      return i && this.isRowSelection() ? F.rowSelection(t, r) : i && this.isColSelection() ? F.colSelection(t, r) : new F(t, r);
    }
    return P.between(t, r);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const n = this.$anchorCell.node(-1), e = ie.get(n), t = this.$anchorCell.start(-1), r = e.rectBetween(
      this.$anchorCell.pos - t,
      this.$headCell.pos - t
    ), i = {}, o = [];
    for (let l = r.top; l < r.bottom; l++) {
      const a = [];
      for (let c = l * e.width + r.left, d = r.left; d < r.right; d++, c++) {
        const u = e.map[c];
        if (i[u])
          continue;
        i[u] = !0;
        const f = e.findCell(u);
        let h = n.nodeAt(u);
        if (!h)
          throw RangeError(`No cell with offset ${u} found`);
        const p = r.left - f.left, m = f.right - r.right;
        if (p > 0 || m > 0) {
          let g = h.attrs;
          if (p > 0 && (g = Cn(g, 0, p)), m > 0 && (g = Cn(
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
      o.push(n.child(l).copy(x.from(a)));
    }
    const s = this.isColSelection() && this.isRowSelection() ? n : o;
    return new A(x.from(s), 1, 1);
  }
  replace(n, e = A.empty) {
    const t = n.steps.length, r = this.ranges;
    for (let o = 0; o < r.length; o++) {
      const { $from: s, $to: l } = r[o], a = n.mapping.slice(t);
      n.replace(
        a.map(s.pos),
        a.map(l.pos),
        o ? A.empty : e
      );
    }
    const i = R.findFrom(
      n.doc.resolve(n.mapping.slice(t).map(this.to)),
      -1
    );
    i && n.setSelection(i);
  }
  replaceWith(n, e) {
    this.replace(n, new A(x.from(e), 0, 0));
  }
  forEachCell(n) {
    const e = this.$anchorCell.node(-1), t = ie.get(e), r = this.$anchorCell.start(-1), i = t.cellsInRect(
      t.rectBetween(
        this.$anchorCell.pos - r,
        this.$headCell.pos - r
      )
    );
    for (let o = 0; o < i.length; o++)
      n(e.nodeAt(i[o]), r + i[o]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const n = this.$anchorCell.index(-1), e = this.$headCell.index(-1);
    if (Math.min(n, e) > 0)
      return !1;
    const t = n + this.$anchorCell.nodeAfter.attrs.rowspan, r = e + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(t, r) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(n, e = n) {
    const t = n.node(-1), r = ie.get(t), i = n.start(-1), o = r.findCell(n.pos - i), s = r.findCell(e.pos - i), l = n.node(0);
    return o.top <= s.top ? (o.top > 0 && (n = l.resolve(i + r.map[o.left])), s.bottom < r.height && (e = l.resolve(
      i + r.map[r.width * (r.height - 1) + s.right - 1]
    ))) : (s.top > 0 && (e = l.resolve(i + r.map[s.left])), o.bottom < r.height && (n = l.resolve(
      i + r.map[r.width * (r.height - 1) + o.right - 1]
    ))), new F(n, e);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const n = this.$anchorCell.node(-1), e = ie.get(n), t = this.$anchorCell.start(-1), r = e.colCount(this.$anchorCell.pos - t), i = e.colCount(this.$headCell.pos - t);
    if (Math.min(r, i) > 0)
      return !1;
    const o = r + this.$anchorCell.nodeAfter.attrs.colspan, s = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, s) == e.width;
  }
  eq(n) {
    return n instanceof F && n.$anchorCell.pos == this.$anchorCell.pos && n.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(n, e = n) {
    const t = n.node(-1), r = ie.get(t), i = n.start(-1), o = r.findCell(n.pos - i), s = r.findCell(e.pos - i), l = n.node(0);
    return o.left <= s.left ? (o.left > 0 && (n = l.resolve(
      i + r.map[o.top * r.width]
    )), s.right < r.width && (e = l.resolve(
      i + r.map[r.width * (s.top + 1) - 1]
    ))) : (s.left > 0 && (e = l.resolve(i + r.map[s.top * r.width])), o.right < r.width && (n = l.resolve(
      i + r.map[r.width * (o.top + 1) - 1]
    ))), new F(n, e);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(n, e) {
    return new F(n.resolve(e.anchor), n.resolve(e.head));
  }
  static create(n, e, t = e) {
    return new F(n.resolve(e), n.resolve(t));
  }
  getBookmark() {
    return new Lu(this.$anchorCell.pos, this.$headCell.pos);
  }
};
F.prototype.visible = !1;
R.jsonID("cell", F);
var Lu = class {
  constructor(n, e) {
    this.anchor = n, this.head = e;
  }
  map(n) {
    return new Lu(n.map(this.anchor), n.map(this.head));
  }
  resolve(n) {
    const e = n.resolve(this.anchor), t = n.resolve(this.head);
    return e.parent.type.spec.tableRole == "row" && t.parent.type.spec.tableRole == "row" && e.index() < e.parent.childCount && t.index() < t.parent.childCount && kl(e, t) ? new F(e, t) : R.near(t, 1);
  }
};
function wv(n) {
  if (!(n.selection instanceof F))
    return null;
  const e = [];
  return n.selection.forEachCell((t, r) => {
    e.push(
      ke.node(r, r + t.nodeSize, { class: "selectedCell" })
    );
  }), Z.create(n.doc, e);
}
function kv({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < n.pos - 6)
    return !1;
  let t = n.pos, r = e.pos, i = n.depth;
  for (; i >= 0 && !(n.after(i + 1) < n.end(i)); i--, t++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return t == r && /row|table/.test(n.node(i).type.spec.tableRole);
}
function xv({ $from: n, $to: e }) {
  let t, r;
  for (let i = n.depth; i > 0; i--) {
    const o = n.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      t = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return t !== r && e.parentOffset === 0;
}
function Cv(n, e, t) {
  const r = (e || n).selection, i = (e || n).doc;
  let o, s;
  if (r instanceof L && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = F.create(i, r.from);
    else if (s == "row") {
      const l = i.resolve(r.from + 1);
      o = F.rowSelection(l, l);
    } else if (!t) {
      const l = ie.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = F.create(i, a + 1, c);
    }
  } else
    r instanceof P && kv(r) ? o = P.create(i, r.from) : r instanceof P && xv(r) && (o = P.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = n.tr)).setSelection(o), e;
}
var Sv = new ce("fix-tables");
function Iu(n, e, t, r) {
  const i = n.childCount, o = e.childCount;
  e:
    for (let s = 0, l = 0; s < o; s++) {
      const a = e.child(s);
      for (let c = l, d = Math.min(i, s + 3); c < d; c++)
        if (n.child(c) == a) {
          l = c + 1, t += a.nodeSize;
          continue e;
        }
      r(a, t), l < i && n.child(l).sameMarkup(a) ? Iu(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
    }
}
function Pu(n, e) {
  let t;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (t = Mv(n, i, o, t));
  };
  return e ? e.doc != n.doc && Iu(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function Mv(n, e, t, r) {
  const i = ie.get(e);
  if (!i.problems)
    return r;
  r || (r = n.tr);
  const o = [];
  for (let a = 0; a < i.height; a++)
    o.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      const u = d.attrs;
      for (let f = 0; f < u.rowspan; f++)
        o[c.row + f] += c.n;
      r.setNodeMarkup(
        r.mapping.map(t + 1 + c.pos),
        null,
        Cn(u, u.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      if (!d)
        continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...d.attrs,
        colwidth: c.colwidth
      });
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++)
    o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = t + 1; a < i.height; a++) {
    const d = e.child(a), u = c + d.nodeSize, f = o[a];
    if (f > 0) {
      let h = "cell";
      d.firstChild && (h = d.firstChild.type.spec.tableRole);
      const p = [];
      for (let g = 0; g < f; g++) {
        const v = xe(n.schema)[h].createAndFill();
        v && p.push(v);
      }
      const m = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
      r.insert(r.mapping.map(m), p);
    }
    c = u;
  }
  return r.setMeta(Sv, { fixTables: !0 });
}
function Tv(n) {
  if (!n.size)
    return null;
  let { content: e, openStart: t, openEnd: r } = n;
  for (; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
  if (o == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const d = a ? 0 : Math.max(0, t - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (d || u) && (c = Is(
        xe(s).row,
        new A(c, d, u)
      ).content), l.push(c);
    }
  else if (o == "cell" || o == "header_cell")
    l.push(
      t || r ? Is(
        xe(s).row,
        new A(e, t, r)
      ).content : e
    );
  else
    return null;
  return Av(s, l);
}
function Av(n, e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = i; c < i + l; c++)
        t[c] = (t[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < t.length; i++)
    r = Math.max(r, t[i]);
  for (let i = 0; i < t.length; i++)
    if (i >= e.length && e.push(x.empty), t[i] < r) {
      const o = xe(n).cell.createAndFill(), s = [];
      for (let l = t[i]; l < r; l++)
        s.push(o);
      e[i] = e[i].append(x.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function Is(n, e) {
  const t = n.createAndFill();
  return new $s(t).replace(0, t.content.size, e).doc;
}
function Ov({ width: n, height: e, rows: t }, r, i) {
  if (n != r) {
    const o = [], s = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], c = [];
      for (let d = o[l] || 0, u = 0; d < r; u++) {
        let f = a.child(u % a.childCount);
        d + f.attrs.colspan > r && (f = f.type.createChecked(
          Cn(
            f.attrs,
            f.attrs.colspan,
            d + f.attrs.colspan - r
          ),
          f.content
        )), c.push(f), d += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      s.push(x.from(c));
    }
    t = s, n = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, l = 0; s < i; s++, l++) {
      const a = [], c = t[l % e];
      for (let d = 0; d < c.childCount; d++) {
        let u = c.child(d);
        s + u.attrs.rowspan > i && (u = u.type.create(
          {
            ...u.attrs,
            rowspan: Math.max(1, i - u.attrs.rowspan)
          },
          u.content
        )), a.push(u);
      }
      o.push(x.from(a));
    }
    t = o, e = i;
  }
  return { width: n, height: e, rows: t };
}
function Ev(n, e, t, r, i, o, s) {
  const l = n.doc.type.schema, a = xe(l);
  let c, d;
  if (i > e.width)
    for (let u = 0, f = 0; u < e.height; u++) {
      const h = t.child(u);
      f += h.nodeSize;
      const p = [];
      let m;
      h.lastChild == null || h.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = d || (d = a.header_cell.createAndFill());
      for (let g = e.width; g < i; g++)
        p.push(m);
      n.insert(n.mapping.slice(s).map(f - 1 + r), p);
    }
  if (o > e.height) {
    const u = [];
    for (let p = 0, m = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const g = p >= e.width ? !1 : t.nodeAt(e.map[m + p]).type == a.header_cell;
      u.push(
        g ? d || (d = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const f = a.row.create(null, x.from(u)), h = [];
    for (let p = e.height; p < o; p++)
      h.push(f);
    n.insert(n.mapping.slice(s).map(r + t.nodeSize - 2), h);
  }
  return !!(c || d);
}
function ac(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.height)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = s * e.width + c, u = e.map[d];
    if (e.map[d - e.width] == u) {
      a = !0;
      const f = t.nodeAt(u), { top: h, left: p } = e.findCell(u);
      n.setNodeMarkup(n.mapping.slice(l).map(u + r), null, {
        ...f.attrs,
        rowspan: s - h
      }), n.insert(
        n.mapping.slice(l).map(e.positionAt(s, p, t)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - s
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function cc(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.width)
    return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const d = c * e.width + s, u = e.map[d];
    if (e.map[d - 1] == u) {
      a = !0;
      const f = t.nodeAt(u), h = e.colCount(u), p = n.mapping.slice(l).map(u + r);
      n.setNodeMarkup(
        p,
        null,
        Cn(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), n.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          Cn(f.attrs, 0, s - h)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function dc(n, e, t, r, i) {
  let o = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!o)
    throw new Error("No table found");
  let s = ie.get(o);
  const { top: l, left: a } = r, c = a + i.width, d = l + i.height, u = n.tr;
  let f = 0;
  function h() {
    if (o = t ? u.doc.nodeAt(t - 1) : u.doc, !o)
      throw new Error("No table found");
    s = ie.get(o), f = u.mapping.maps.length;
  }
  Ev(u, s, o, t, c, d, f) && h(), ac(u, s, o, t, a, c, l, f) && h(), ac(u, s, o, t, a, c, d, f) && h(), cc(u, s, o, t, l, d, a, f) && h(), cc(u, s, o, t, l, d, c, f) && h();
  for (let p = l; p < d; p++) {
    const m = s.positionAt(p, a, o), g = s.positionAt(p, c, o);
    u.replace(
      u.mapping.slice(f).map(m + t),
      u.mapping.slice(f).map(g + t),
      new A(i.rows[p - l], 0, 0)
    );
  }
  h(), u.setSelection(
    new F(
      u.doc.resolve(t + s.positionAt(l, a, o)),
      u.doc.resolve(t + s.positionAt(d - 1, c - 1, o))
    )
  ), e(u);
}
var Nv = Qs({
  ArrowLeft: fi("horiz", -1),
  ArrowRight: fi("horiz", 1),
  ArrowUp: fi("vert", -1),
  ArrowDown: fi("vert", 1),
  "Shift-ArrowLeft": hi("horiz", -1),
  "Shift-ArrowRight": hi("horiz", 1),
  "Shift-ArrowUp": hi("vert", -1),
  "Shift-ArrowDown": hi("vert", 1),
  Backspace: pi,
  "Mod-Backspace": pi,
  Delete: pi,
  "Mod-Delete": pi
});
function xi(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function fi(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    if (o instanceof F)
      return xi(
        t,
        r,
        R.near(o.$headCell, e)
      );
    if (n != "horiz" && !o.empty)
      return !1;
    const s = Bu(i, n, e);
    if (s == null)
      return !1;
    if (n == "horiz")
      return xi(
        t,
        r,
        R.near(t.doc.resolve(o.head + e), e)
      );
    {
      const l = t.doc.resolve(s), a = Du(l, n, e);
      let c;
      return a ? c = R.near(a, 1) : e < 0 ? c = R.near(t.doc.resolve(l.before(-1)), -1) : c = R.near(t.doc.resolve(l.after(-1)), 1), xi(t, r, c);
    }
  };
}
function hi(n, e) {
  return (t, r, i) => {
    if (!i)
      return !1;
    const o = t.selection;
    let s;
    if (o instanceof F)
      s = o;
    else {
      const a = Bu(i, n, e);
      if (a == null)
        return !1;
      s = new F(t.doc.resolve(a));
    }
    const l = Du(s.$headCell, n, e);
    return l ? xi(
      t,
      r,
      new F(s.$anchorCell, l)
    ) : !1;
  };
}
function pi(n, e) {
  const t = n.selection;
  if (!(t instanceof F))
    return !1;
  if (e) {
    const r = n.tr, i = xe(n.schema).cell.createAndFill().content;
    t.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new A(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function Dv(n, e) {
  const t = n.state.doc, r = ir(t.resolve(e));
  return r ? (n.dispatch(n.state.tr.setSelection(new F(r))), !0) : !1;
}
function Rv(n, e, t) {
  if (!nt(n.state))
    return !1;
  let r = Tv(t);
  const i = n.state.selection;
  if (i instanceof F) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        x.from(
          Is(xe(n.state.schema).cell, t)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = ie.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = Ov(r, l.right - l.left, l.bottom - l.top), dc(n.state, n.dispatch, s, l, r), !0;
  } else if (r) {
    const o = vo(n.state), s = o.start(-1);
    return dc(
      n.state,
      n.dispatch,
      s,
      ie.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function Lv(n, e) {
  var t;
  if (e.ctrlKey || e.metaKey)
    return;
  const r = uc(n, e.target);
  let i;
  if (e.shiftKey && n.state.selection instanceof F)
    o(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = ir(n.state.selection.$anchor)) != null && ((t = Qo(n, e)) == null ? void 0 : t.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(a, c) {
    let d = Qo(n, c);
    const u = Ht.getState(n.state) == null;
    if (!d || !kl(a, d))
      if (u)
        d = a;
      else
        return;
    const f = new F(a, d);
    if (u || !n.state.selection.eq(f)) {
      const h = n.state.tr.setSelection(f);
      u && h.setMeta(Ht, a.pos), n.dispatch(h);
    }
  }
  function s() {
    n.root.removeEventListener("mouseup", s), n.root.removeEventListener("dragstart", s), n.root.removeEventListener("mousemove", l), Ht.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(Ht, -1));
  }
  function l(a) {
    const c = a, d = Ht.getState(n.state);
    let u;
    if (d != null)
      u = n.state.doc.resolve(d);
    else if (uc(n, c.target) != r && (u = Qo(n, e), !u))
      return s();
    u && o(u, c);
  }
  n.root.addEventListener("mouseup", s), n.root.addEventListener("dragstart", s), n.root.addEventListener("mousemove", l);
}
function Bu(n, e, t) {
  if (!(n.state.selection instanceof P))
    return null;
  const { $head: r } = n.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((t < 0 ? r.index(i) : r.indexAfter(i)) != (t < 0 ? 0 : o.childCount))
      return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const l = r.before(i), a = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function uc(n, e) {
  for (; e && e != n.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Qo(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return t && t ? ir(n.state.doc.resolve(t.pos)) : null;
}
var Iv = class {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ps(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Ps(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Ps(n, e, t, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const d = n.firstChild;
  if (d) {
    for (let u = 0, f = 0; u < d.childCount; u++) {
      const { colspan: h, colwidth: p } = d.child(u).attrs;
      for (let m = 0; m < h; m++, f++) {
        const g = i == f ? o : p && p[m], v = g ? g + "px" : "";
        l += g || r, g || (a = !1), c ? (c.style.width != v && (c.style.width = v), c = c.nextSibling) : e.appendChild(document.createElement("col")).style.width = v;
      }
    }
    for (; c; ) {
      const u = c.nextSibling;
      (s = c.parentNode) == null || s.removeChild(c), c = u;
    }
    a ? (t.style.width = l + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = l + "px");
  }
}
var _e = new ce(
  "tableColumnResizing"
);
function Pv({
  handleWidth: n = 5,
  cellMinWidth: e = 25,
  View: t = Iv,
  lastColumnResizable: r = !0
} = {}) {
  const i = new oe({
    key: _e,
    state: {
      init(o, s) {
        return i.spec.props.nodeViews[xe(s.schema).table.name] = (l, a) => new t(l, e, a), new Ci(-1, !1);
      },
      apply(o, s) {
        return s.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const s = _e.getState(o);
        return s && s.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, s) => {
          Bv(
            o,
            s,
            n,
            e,
            r
          );
        },
        mouseleave: (o) => {
          zv(o);
        },
        mousedown: (o, s) => {
          Hv(o, s, e);
        }
      },
      decorations: (o) => {
        const s = _e.getState(o);
        if (s && s.activeHandle > -1)
          return _v(o, s.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var Ci = class {
  constructor(n, e) {
    this.activeHandle = n, this.dragging = e;
  }
  apply(n) {
    const e = this, t = n.getMeta(_e);
    if (t && t.setHandle != null)
      return new Ci(t.setHandle, !1);
    if (t && t.setDragging !== void 0)
      return new Ci(e.activeHandle, t.setDragging);
    if (e.activeHandle > -1 && n.docChanged) {
      let r = n.mapping.map(e.activeHandle, -1);
      return Ls(n.doc.resolve(r)) || (r = -1), new Ci(r, e.dragging);
    }
    return e;
  }
};
function Bv(n, e, t, r, i) {
  const o = _e.getState(n.state);
  if (o && !o.dragging) {
    const s = Fv(e.target);
    let l = -1;
    if (s) {
      const { left: a, right: c } = s.getBoundingClientRect();
      e.clientX - a <= t ? l = fc(n, e, "left", t) : c - e.clientX <= t && (l = fc(n, e, "right", t));
    }
    if (l != o.activeHandle) {
      if (!i && l !== -1) {
        const a = n.state.doc.resolve(l), c = a.node(-1), d = ie.get(c), u = a.start(-1);
        if (d.colCount(a.pos - u) + a.nodeAfter.attrs.colspan - 1 == d.width - 1)
          return;
      }
      zu(n, l);
    }
  }
}
function zv(n) {
  const e = _e.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && zu(n, -1);
}
function Hv(n, e, t) {
  const r = _e.getState(n.state);
  if (!r || r.activeHandle == -1 || r.dragging)
    return !1;
  const i = n.state.doc.nodeAt(r.activeHandle), o = Vv(n, r.activeHandle, i.attrs);
  n.dispatch(
    n.state.tr.setMeta(_e, {
      setDragging: { startX: e.clientX, startWidth: o }
    })
  );
  function s(a) {
    window.removeEventListener("mouseup", s), window.removeEventListener("mousemove", l);
    const c = _e.getState(n.state);
    c != null && c.dragging && ($v(
      n,
      c.activeHandle,
      hc(c.dragging, a, t)
    ), n.dispatch(
      n.state.tr.setMeta(_e, { setDragging: null })
    ));
  }
  function l(a) {
    if (!a.which)
      return s(a);
    const c = _e.getState(n.state);
    if (c && c.dragging) {
      const d = hc(c.dragging, a, t);
      jv(n, c.activeHandle, d, t);
    }
  }
  return window.addEventListener("mouseup", s), window.addEventListener("mousemove", l), e.preventDefault(), !0;
}
function Vv(n, e, { colspan: t, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i)
    return i;
  const o = n.domAtPos(e);
  let l = o.node.childNodes[o.offset].offsetWidth, a = t;
  if (r)
    for (let c = 0; c < t; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function Fv(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; )
    n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function fc(n, e, t, r) {
  const i = t == "right" ? -r : r, o = n.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o)
    return -1;
  const { pos: s } = o, l = ir(n.state.doc.resolve(s));
  if (!l)
    return -1;
  if (t == "right")
    return l.pos;
  const a = ie.get(l.node(-1)), c = l.start(-1), d = a.map.indexOf(l.pos - c);
  return d % a.width == 0 ? -1 : c + a.map[d - 1];
}
function hc(n, e, t) {
  const r = e.clientX - n.startX;
  return Math.max(t, n.startWidth + r);
}
function zu(n, e) {
  n.dispatch(
    n.state.tr.setMeta(_e, { setHandle: e })
  );
}
function $v(n, e, t) {
  const r = n.state.doc.resolve(e), i = r.node(-1), o = ie.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
  for (let c = 0; c < o.height; c++) {
    const d = c * o.width + l;
    if (c && o.map[d] == o.map[d - o.width])
      continue;
    const u = o.map[d], f = i.nodeAt(u).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(u);
    if (f.colwidth && f.colwidth[h] == t)
      continue;
    const p = f.colwidth ? f.colwidth.slice() : Wv(f.colspan);
    p[h] = t, a.setNodeMarkup(s + u, null, { ...f, colwidth: p });
  }
  a.docChanged && n.dispatch(a);
}
function jv(n, e, t, r) {
  const i = n.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = ie.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let a = n.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && Ps(
    o,
    a.firstChild,
    a,
    r,
    l,
    t
  );
}
function Wv(n) {
  return Array(n).fill(0);
}
function _v(n, e) {
  const t = [], r = n.doc.resolve(e), i = r.node(-1);
  if (!i)
    return Z.empty;
  const o = ie.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan;
  for (let a = 0; a < o.height; a++) {
    const c = l + a * o.width - 1;
    if ((l == o.width || o.map[c] != o.map[c + 1]) && (a == 0 || o.map[c] != o.map[c - o.width])) {
      const d = o.map[c], u = s + d + i.nodeAt(d).nodeSize - 1, f = document.createElement("div");
      f.className = "column-resize-handle", t.push(ke.widget(u, f));
    }
  }
  return Z.create(n.doc, t);
}
function gt(n) {
  const e = n.selection, t = vo(n), r = t.node(-1), i = t.start(-1), o = ie.get(r);
  return { ...e instanceof F ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(t.pos - i), tableStart: i, map: o, table: r };
}
function Hu(n, { map: e, tableStart: t, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  bv(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      n.setNodeMarkup(
        n.mapping.map(t + a),
        null,
        Ru(c.attrs, i - e.colCount(a))
      ), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? xe(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
      n.insert(n.mapping.map(t + c), a.createAndFill());
    }
  }
  return n;
}
function Kv(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = gt(n);
    e(Hu(n.tr, t, t.left));
  }
  return !0;
}
function qv(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = gt(n);
    e(Hu(n.tr, t, t.right));
  }
  return !0;
}
function Uv(n, { map: e, table: t, tableStart: r }, i) {
  const o = n.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + i, a = e.map[l], c = t.nodeAt(a), d = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a)
      n.setNodeMarkup(
        n.mapping.slice(o).map(r + a),
        null,
        Cn(d, i - e.colCount(a))
      );
    else {
      const u = n.mapping.slice(o).map(r + a);
      n.delete(u, u + c.nodeSize);
    }
    s += d.rowspan;
  }
}
function Jv(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = gt(n), r = n.tr;
    if (t.left == 0 && t.right == t.map.width)
      return !1;
    for (let i = t.right - 1; Uv(r, t, i), i != t.left; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = ie.get(o);
    }
    e(r);
  }
  return !0;
}
function Gv(n, e, t) {
  var r;
  const i = xe(e.type.schema).header_cell;
  for (let o = 0; o < n.width; o++)
    if (((r = e.nodeAt(n.map[o + t * n.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Vu(n, { map: e, tableStart: t, table: r }, i) {
  var o;
  let s = t;
  for (let c = 0; c < i; c++)
    s += r.child(c).nodeSize;
  const l = [];
  let a = i > 0 ? -1 : 0;
  Gv(e, r, i + a) && (a = i == 0 || i == e.height ? null : 0);
  for (let c = 0, d = e.width * i; c < e.width; c++, d++)
    if (i > 0 && i < e.height && e.map[d] == e.map[d - e.width]) {
      const u = e.map[d], f = r.nodeAt(u).attrs;
      n.setNodeMarkup(t + u, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const u = a == null ? xe(r.type.schema).cell : (o = r.nodeAt(e.map[d + a * e.width])) == null ? void 0 : o.type, f = u == null ? void 0 : u.createAndFill();
      f && l.push(f);
    }
  return n.insert(s, xe(r.type.schema).row.create(null, l)), n;
}
function Yv(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = gt(n);
    e(Vu(n.tr, t, t.top));
  }
  return !0;
}
function Xv(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = gt(n);
    e(Vu(n.tr, t, t.bottom));
  }
  return !0;
}
function Qv(n, { map: e, table: t, tableStart: r }, i) {
  let o = 0;
  for (let a = 0; a < i; a++)
    o += t.child(a).nodeSize;
  const s = o + t.child(i).nodeSize, l = n.mapping.maps.length;
  n.delete(o + r, s + r);
  for (let a = 0, c = i * e.width; a < e.width; a++, c++) {
    const d = e.map[c];
    if (i > 0 && d == e.map[c - e.width]) {
      const u = t.nodeAt(d).attrs;
      n.setNodeMarkup(n.mapping.slice(l).map(d + r), null, {
        ...u,
        rowspan: u.rowspan - 1
      }), a += u.colspan - 1;
    } else if (i < e.width && d == e.map[c + e.width]) {
      const u = t.nodeAt(d), f = u.attrs, h = u.type.create(
        { ...f, rowspan: u.attrs.rowspan - 1 },
        u.content
      ), p = e.positionAt(i + 1, a, t);
      n.insert(n.mapping.slice(l).map(r + p), h), a += f.colspan - 1;
    }
  }
}
function Zv(n, e) {
  if (!nt(n))
    return !1;
  if (e) {
    const t = gt(n), r = n.tr;
    if (t.top == 0 && t.bottom == t.map.height)
      return !1;
    for (let i = t.bottom - 1; Qv(r, t, i), i != t.top; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = ie.get(t.table);
    }
    e(r);
  }
  return !0;
}
function pc(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function eb({ width: n, height: e, map: t }, r) {
  let i = r.top * n + r.left, o = i, s = (r.bottom - 1) * n + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && t[o] == t[o - 1] || r.right < n && t[l] == t[l + 1])
      return !0;
    o += n, l += n;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && t[i] == t[i - n] || r.bottom < e && t[s] == t[s + n])
      return !0;
    i++, s++;
  }
  return !1;
}
function mc(n, e) {
  const t = n.selection;
  if (!(t instanceof F) || t.$anchorCell.pos == t.$headCell.pos)
    return !1;
  const r = gt(n), { map: i } = r;
  if (eb(i, r))
    return !1;
  if (e) {
    const o = n.tr, s = {};
    let l = x.empty, a, c;
    for (let d = r.top; d < r.bottom; d++)
      for (let u = r.left; u < r.right; u++) {
        const f = i.map[d * i.width + u], h = r.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, a == null)
            a = f, c = h;
          else {
            pc(h) || (l = l.append(h.content));
            const p = o.mapping.map(f + r.tableStart);
            o.delete(p, p + h.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...Ru(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const d = a + 1 + c.content.size, u = pc(c) ? a + 1 : d;
      o.replaceWith(u + r.tableStart, d + r.tableStart, l);
    }
    o.setSelection(
      new F(o.doc.resolve(a + r.tableStart))
    ), e(o);
  }
  return !0;
}
function gc(n, e) {
  const t = xe(n.schema);
  return tb(({ node: r }) => t[r.type.spec.tableRole])(n, e);
}
function tb(n) {
  return (e, t) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof F) {
      if (i.$anchorCell.pos != i.$headCell.pos)
        return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = gv(i.$from), !o)
        return !1;
      s = (r = ir(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (t) {
      let l = o.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const d = gt(e), u = e.tr;
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
        h == d.top && (p += o.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          m == d.left && h == d.top || u.insert(
            f = u.mapping.map(p + d.tableStart, 1),
            n({ node: o, row: h, col: m }).createAndFill(a[g])
          );
      }
      u.setNodeMarkup(
        s,
        n({ node: o, row: d.top, col: d.left }),
        a[0]
      ), i instanceof F && u.setSelection(
        new F(
          u.doc.resolve(i.$anchorCell.pos),
          f ? u.doc.resolve(f) : void 0
        )
      ), t(u);
    }
    return !0;
  };
}
function nb(n, e) {
  return function(t, r) {
    if (!nt(t))
      return !1;
    const i = vo(t);
    if (i.nodeAfter.attrs[n] === e)
      return !1;
    if (r) {
      const o = t.tr;
      t.selection instanceof F ? t.selection.forEachCell((s, l) => {
        s.attrs[n] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [n]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [n]: e
      }), r(o);
    }
    return !0;
  };
}
function rb(n) {
  return function(e, t) {
    if (!nt(e))
      return !1;
    if (t) {
      const r = xe(e.schema), i = gt(e), o = e.tr, s = i.map.cellsInRect(
        n == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : n == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), l = s.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < s.length; a++)
        l[a].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[a],
          r.cell,
          l[a].attrs
        );
      if (o.steps.length == 0)
        for (let a = 0; a < s.length; a++)
          o.setNodeMarkup(
            i.tableStart + s[a],
            r.header_cell,
            l[a].attrs
          );
      t(o);
    }
    return !0;
  };
}
function yc(n, e, t) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== t.header_cell)
      return !1;
  }
  return !0;
}
function Fr(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? rb(n) : function(t, r) {
    if (!nt(t))
      return !1;
    if (r) {
      const i = xe(t.schema), o = gt(t), s = t.tr, l = yc("row", o, i), a = yc(
        "column",
        o,
        i
      ), d = (n === "column" ? l : n === "row" ? a : !1) ? 1 : 0, u = n == "column" ? {
        left: 0,
        top: d,
        right: 1,
        bottom: o.map.height
      } : n == "row" ? {
        left: d,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, f = n == "column" ? a ? i.cell : i.header_cell : n == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(u).forEach((h) => {
        const p = h + o.tableStart, m = s.doc.nodeAt(p);
        m && s.setNodeMarkup(p, f, m.attrs);
      }), r(s);
    }
    return !0;
  };
}
Fr("row", {
  useDeprecatedLogic: !0
});
Fr("column", {
  useDeprecatedLogic: !0
});
var ib = Fr("cell", {
  useDeprecatedLogic: !0
});
function ob(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t)
      return n.pos - t.nodeSize;
    for (let r = n.index(-1) - 1, i = n.before(); r >= 0; r--) {
      const o = n.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1)
      return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let r = n.indexAfter(-1), i = n.after(); r < t.childCount; r++) {
      const o = t.child(r);
      if (o.childCount)
        return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function vc(n) {
  return function(e, t) {
    if (!nt(e))
      return !1;
    const r = ob(vo(e), n);
    if (r == null)
      return !1;
    if (t) {
      const i = e.doc.resolve(r);
      t(
        e.tr.setSelection(P.between(i, vv(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function sb(n, e) {
  const t = n.selection.$anchor;
  for (let r = t.depth; r > 0; r--)
    if (t.node(r).type.spec.tableRole == "table")
      return e && e(
        n.tr.delete(t.before(r), t.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function lb({
  allowTableNodeSelection: n = !1
} = {}) {
  return new oe({
    key: Ht,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const r = e.getMeta(Ht);
        if (r != null)
          return r == -1 ? null : r;
        if (t == null || !e.docChanged)
          return t;
        const { deleted: i, pos: o } = e.mapping.mapResult(t);
        return i ? null : o;
      }
    },
    props: {
      decorations: wv,
      handleDOMEvents: {
        mousedown: Lv
      },
      createSelectionBetween(e) {
        return Ht.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Dv,
      handleKeyDown: Nv,
      handlePaste: Rv
    },
    appendTransaction(e, t, r) {
      return Cv(
        r,
        Pu(r, t),
        n
      );
    }
  });
}
function bc(n, e, t, r, i, o) {
  let s = 0, l = !0, a = e.firstChild;
  const c = n.firstChild;
  for (let d = 0, u = 0; d < c.childCount; d += 1) {
    const { colspan: f, colwidth: h } = c.child(d).attrs;
    for (let p = 0; p < f; p += 1, u += 1) {
      const m = i === u ? o : h && h[p], g = m ? `${m}px` : "";
      s += m || r, m || (l = !1), a ? (a.style.width !== g && (a.style.width = g), a = a.nextSibling) : e.appendChild(document.createElement("col")).style.width = g;
    }
  }
  for (; a; ) {
    const d = a.nextSibling;
    a.parentNode.removeChild(a), a = d;
  }
  l ? (t.style.width = `${s}px`, t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = `${s}px`);
}
class ab {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), bc(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, bc(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function wc(n, e) {
  return e ? n.createChecked(null, e) : n.createAndFill();
}
function cb(n) {
  if (n.cached.tableNodeTypes)
    return n.cached.tableNodeTypes;
  const e = {};
  return Object.keys(n.nodes).forEach((t) => {
    const r = n.nodes[t];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), n.cached.tableNodeTypes = e, e;
}
function db(n, e, t, r, i) {
  const o = cb(n), s = [], l = [];
  for (let c = 0; c < t; c += 1) {
    const d = wc(o.cell, i);
    if (d && l.push(d), r) {
      const u = wc(o.header_cell, i);
      u && s.push(u);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? s : l));
  return o.table.createChecked(null, a);
}
function ub(n) {
  return n instanceof F;
}
const mi = ({ editor: n }) => {
  const { selection: e } = n.state;
  if (!ub(e))
    return !1;
  let t = 0;
  const r = Jd(e.ranges[0].$from, (o) => o.type.name === "table");
  return r == null || r.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (t += 1);
  }), t === e.ranges.length ? (n.commands.deleteTable(), !0) : !1;
}, fb = se.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: ab,
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
  renderHTML({ HTMLAttributes: n }) {
    return ["table", G(this.options.HTMLAttributes, n), ["tbody", 0]];
  },
  addCommands() {
    return {
      insertTable: ({ rows: n = 3, cols: e = 3, withHeaderRow: t = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = db(o.schema, n, e, t);
        if (i) {
          const l = r.selection.anchor + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(P.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: n, dispatch: e }) => Kv(n, e),
      addColumnAfter: () => ({ state: n, dispatch: e }) => qv(n, e),
      deleteColumn: () => ({ state: n, dispatch: e }) => Jv(n, e),
      addRowBefore: () => ({ state: n, dispatch: e }) => Yv(n, e),
      addRowAfter: () => ({ state: n, dispatch: e }) => Xv(n, e),
      deleteRow: () => ({ state: n, dispatch: e }) => Zv(n, e),
      deleteTable: () => ({ state: n, dispatch: e }) => sb(n, e),
      mergeCells: () => ({ state: n, dispatch: e }) => mc(n, e),
      splitCell: () => ({ state: n, dispatch: e }) => gc(n, e),
      toggleHeaderColumn: () => ({ state: n, dispatch: e }) => Fr("column")(n, e),
      toggleHeaderRow: () => ({ state: n, dispatch: e }) => Fr("row")(n, e),
      toggleHeaderCell: () => ({ state: n, dispatch: e }) => ib(n, e),
      mergeOrSplit: () => ({ state: n, dispatch: e }) => mc(n, e) ? !0 : gc(n, e),
      setCellAttribute: (n, e) => ({ state: t, dispatch: r }) => nb(n, e)(t, r),
      goToNextCell: () => ({ state: n, dispatch: e }) => vc(1)(n, e),
      goToPreviousCell: () => ({ state: n, dispatch: e }) => vc(-1)(n, e),
      fixTables: () => ({ state: n, dispatch: e }) => (e && Pu(n), !0),
      setCellSelection: (n) => ({ tr: e, dispatch: t }) => {
        if (t) {
          const r = F.create(e.doc, n.anchorCell, n.headCell);
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
      Backspace: mi,
      "Mod-Backspace": mi,
      Delete: mi,
      "Mod-Delete": mi
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Pv({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          // @ts-ignore (incorrect type)
          View: this.options.View,
          // TODO: PR for @types/prosemirror-tables
          // @ts-ignore (incorrect type)
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      lb({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(n) {
    const e = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      tableRole: z(E(n, "tableRole", e))
    };
  }
}), hb = se.create({
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
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
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
  renderHTML({ HTMLAttributes: n }) {
    return ["td", G(this.options.HTMLAttributes, n), 0];
  }
}), pb = se.create({
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
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
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
  renderHTML({ HTMLAttributes: n }) {
    return ["th", G(this.options.HTMLAttributes, n), 0];
  }
}), mb = se.create({
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
  renderHTML({ HTMLAttributes: n }) {
    return ["tr", G(this.options.HTMLAttributes, n), 0];
  }
}), gb = le.create({
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
            parseHTML: (n) => n.style.textAlign || this.options.defaultAlignment,
            renderHTML: (n) => n.textAlign === this.options.defaultAlignment ? {} : { style: `text-align: ${n.textAlign}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.every((t) => e.updateAttributes(t, { textAlign: n })) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.every((e) => n.resetAttributes(e, "textAlign"))
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
}), yb = Le.create({
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
        getAttrs(n) {
          return n !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sub", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSubscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSubscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), vb = Le.create({
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
        getAttrs(n) {
          return n !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sup", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSuperscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
}), bb = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/, wb = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g, kb = Le.create({
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
        parseHTML: (n) => n.getAttribute("data-color") || n.style.backgroundColor,
        renderHTML: (n) => n.color ? {
          "data-color": n.color,
          style: `background-color: ${n.color}; color: inherit`
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
  renderHTML({ HTMLAttributes: n }) {
    return ["mark", G(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setHighlight: (n) => ({ commands: e }) => e.setMark(this.name, n),
      toggleHighlight: (n) => ({ commands: e }) => e.toggleMark(this.name, n),
      unsetHighlight: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      kn({
        find: bb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Jt({
        find: wb,
        type: this.type
      })
    ];
  }
}), xb = function(n) {
  let t = n.state.selection.$from.before(1), r = n.coordsAtPos(t);
  return new DOMRect(r.left, r.top, 0, 0);
}, Cb = function(n) {
  const e = n.state.selection.$from;
  let t = e.depth;
  for (; t > 1 && e.node(t).type.name != "tableRow"; )
    t--;
  let r = e.before(t), i = n.nodeDOM(r).getBoundingClientRect();
  return new DOMRect(i.x, i.y, i.width, i.height);
}, Sb = function(n) {
  const e = n.state.selection.$from;
  let t = e.depth, r = 0, i = 0;
  for (; t > 0; ) {
    if ((e.node(t).type.name == "tableCell" || e.node(t).type.name == "tableHeader") && (r = t), e.node(t).type.name == "table") {
      i = t;
      break;
    }
    t--;
  }
  if (!(i && r))
    return !1;
  let o = n.nodeDOM(e.before(r)).getBoundingClientRect(), s = n.nodeDOM(e.before(i)).getBoundingClientRect();
  return new DOMRect(o.x, s.y, o.width, s.height);
}, Fu = function(n) {
  const e = n.state.selection.$from;
  return e.node(1) == null && n.lastSelectedViewDesc ? n.lastSelectedViewDesc.node : e.node(1);
};
let $u = function(n, e) {
  const t = [];
  for (let r = 0; r < n.childCount; r++)
    t.push(
      e(n.child(r), r, n instanceof x ? n : n.content)
    );
  return t;
};
const Mb = function({
  view: n,
  state: e,
  draggedNodePosition: t,
  targetNodePosition: r
}) {
  let i = e.doc.resolve(r), o = e.doc.resolve(t).node(1), s = i.node(1), l = n.state.tr;
  const a = i.node(0), c = i.start(0), d = $u(a, (v) => v);
  let u = d.indexOf(o), f = d.indexOf(s), h = c, p = i.end(0), m = d[u];
  d.splice(u, 1), d.splice(f, 0, m);
  const g = new A(x.fromArray(d), 0, 0);
  l.step(new fe(h, p, g, !1)), l.setSelection(R.near(l.doc.resolve(r))), n.dispatch(l);
}, Tb = function({ view: n, dir: e, currentResolved: t }) {
  if (!t)
    return !1;
  let r = n.state.tr;
  const i = e === "DOWN", o = t.node(1) || t.nodeAfter, s = 0, l = t.node(s), a = t.start(s), c = $u(l, (g) => g);
  let d = c.indexOf(o);
  if (d == -1)
    return !1;
  let u = i ? d + 1 : d - 1;
  if (u >= c.length || u < 0)
    return !1;
  const f = c[u].nodeSize;
  [c[d], c[u]] = [c[u], c[d]];
  let h = a, p = t.end(s);
  const m = new A(x.fromArray(c), 0, 0);
  r.step(new fe(h, p, m, !1)), r.setSelection(
    R.near(
      r.doc.resolve(
        i ? t.pos + f : t.pos - f
      )
    )
  ), n.dispatch(r);
}, Ab = le.create({
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
            parseHTML: (n) => n.dataset.blockWidth || this.options.defaultAlignment,
            renderHTML: (n) => n.blockWidth === this.options.defaultAlignment ? {} : { "data-block-width": n.blockWidth }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBlockWidth: (n) => ({ commands: e, view: t }) => this.options.alignments.includes(n) ? (this.options.types.forEach((r) => {
        r == Fu(t).type.name && e.updateAttributes(r, {
          blockWidth: n
        });
      }), !0) : !1,
      unsetBlockWidth: () => ({ commands: n }) => this.options.types.every(
        (e) => n.resetAttributes(e, "blockWidth")
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
}), Ob = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/, Eb = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/g, Nb = (n) => n.match(Ob), kc = (n) => n ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/", Db = (n) => {
  const {
    url: e,
    allowFullscreen: t,
    autoplay: r,
    ccLanguage: i,
    ccLoadPolicy: o,
    controls: s,
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
    startAt: w
  } = n;
  if (e.includes("/embed/"))
    return e;
  if (e.includes("youtu.be")) {
    const O = e.split("/").pop();
    return O ? `${kc(p)}${O}` : null;
  }
  const y = /v=([-\w]+)/gm.exec(e);
  if (!y || !y[1])
    return null;
  let T = `${kc(p)}${y[1]}`;
  const b = [];
  return t === !1 && b.push("fs=0"), r && b.push("autoplay=1"), i && b.push(`cc_lang_pref=${i}`), o && b.push("cc_load_policy=1"), s || b.push("controls=0"), l && b.push("disablekb=1"), a && b.push("enablejsapi=1"), c && b.push(`end=${c}`), d && b.push(`hl=${d}`), u && b.push(`iv_load_policy=${u}`), f && b.push("loop=1"), h && b.push("modestbranding=1"), m && b.push(`origin=${m}`), g && b.push(`playlist=${g}`), w && b.push(`start=${w}`), v && b.push(`color=${v}`), b.length && (T += `?${b.join("&")}`), T;
}, Rb = se.create({
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
      setYoutubeVideo: (n) => ({ commands: e }) => Nb(n.src) ? e.insertContent({
        type: this.name,
        attrs: n
      }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      o1({
        find: Eb,
        type: this.type,
        getAttributes: (n) => ({ src: n.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: n }) {
    const e = Db({
      url: n.src,
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
      startAt: n.start || 0
    }), t = n["data-block-width"];
    return n["data-block-width"] = null, n.src = e, [
      "figure",
      {
        "data-youtube-video": "",
        "data-block-width": t,
        class: "bg-slate-100 pb-4 text-center"
      },
      [
        "iframe",
        G(
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
          n
        )
      ],
      ["figcaption", 0]
    ];
  }
});
function xc({ types: n, node: e }) {
  return Array.isArray(n) && n.includes(e.type) || e.type === n;
}
const Lb = le.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const n = new ce(this.name), e = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter((t) => this.options.notAfter.includes(t.name));
    return [
      new oe({
        key: n,
        appendTransaction: (t, r, i) => {
          const { doc: o, tr: s, schema: l } = i, a = n.getState(i), c = o.content.size, d = l.nodes[this.options.node];
          if (a)
            return s.insert(c, d.create());
        },
        state: {
          init: (t, r) => {
            const i = r.tr.doc.lastChild;
            return !xc({ node: i, types: e });
          },
          apply: (t, r) => {
            if (!t.docChanged)
              return r;
            const i = t.doc.lastChild;
            return !xc({ node: i, types: e });
          }
        }
      })
    ];
  }
});
function Ib(n) {
  var e;
  const { char: t, allowSpaces: r, allowedPrefixes: i, startOfLine: o, $position: s } = n, l = i1(t), a = new RegExp(`\\s${l}$`), c = o ? "^" : "", d = r ? new RegExp(`${c}${l}.*?(?=\\s${l}|$)`, "gm") : new RegExp(`${c}(?:^)?${l}[^\\s${l}]*`, "gm"), u = ((e = s.nodeBefore) === null || e === void 0 ? void 0 : e.isText) && s.nodeBefore.text;
  if (!u)
    return null;
  const f = s.pos - u.length, h = Array.from(u.matchAll(d)).pop();
  if (!h || h.input === void 0 || h.index === void 0)
    return null;
  const p = h.input.slice(Math.max(0, h.index - 1), h.index), m = new RegExp(`^[${i == null ? void 0 : i.join("")}\0]?$`).test(p);
  if (i !== null && !m)
    return null;
  const g = f + h.index;
  let v = g + h[0].length;
  return r && a.test(u.slice(v - 1, v + 1)) && (h[0] += " ", v += 1), g < s.pos && v >= s.pos ? {
    range: {
      from: g,
      to: v
    },
    query: h[0].slice(t.length),
    text: h[0]
  } : null;
}
const Pb = new ce("suggestion");
function Bb({ pluginKey: n = Pb, editor: e, char: t = "@", allowSpaces: r = !1, allowedPrefixes: i = [" "], startOfLine: o = !1, decorationTag: s = "span", decorationClass: l = "suggestion", command: a = () => null, items: c = () => [], render: d = () => ({}), allow: u = () => !0 }) {
  let f;
  const h = d == null ? void 0 : d(), p = new oe({
    key: n,
    view() {
      return {
        update: async (m, g) => {
          var v, w, C, y, T, b, O;
          const S = (v = this.key) === null || v === void 0 ? void 0 : v.getState(g), B = (w = this.key) === null || w === void 0 ? void 0 : w.getState(m.state), H = S.active && B.active && S.range.from !== B.range.from, q = !S.active && B.active, j = S.active && !B.active, _ = !q && !j && S.query !== B.query, X = q || H, ee = _ && !H, Y = j || H;
          if (!X && !ee && !Y)
            return;
          const W = Y && !X ? S : B, U = m.dom.querySelector(`[data-decoration-id="${W.decorationId}"]`);
          f = {
            editor: e,
            range: W.range,
            query: W.query,
            text: W.text,
            items: [],
            command: (Q) => {
              a({
                editor: e,
                range: W.range,
                props: Q
              });
            },
            decorationNode: U,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: U ? () => {
              var Q;
              const { decorationId: de } = (Q = this.key) === null || Q === void 0 ? void 0 : Q.getState(e.state), ve = m.dom.querySelector(`[data-decoration-id="${de}"]`);
              return (ve == null ? void 0 : ve.getBoundingClientRect()) || null;
            } : null
          }, X && ((C = h == null ? void 0 : h.onBeforeStart) === null || C === void 0 || C.call(h, f)), ee && ((y = h == null ? void 0 : h.onBeforeUpdate) === null || y === void 0 || y.call(h, f)), (ee || X) && (f.items = await c({
            editor: e,
            query: W.query
          })), Y && ((T = h == null ? void 0 : h.onExit) === null || T === void 0 || T.call(h, f)), ee && ((b = h == null ? void 0 : h.onUpdate) === null || b === void 0 || b.call(h, f)), X && ((O = h == null ? void 0 : h.onStart) === null || O === void 0 || O.call(h, f));
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
      apply(m, g, v, w) {
        const { isEditable: C } = e, { composing: y } = e.view, { selection: T } = m, { empty: b, from: O } = T, S = { ...g };
        if (S.composing = y, C && (b || e.view.composing)) {
          (O < g.range.from || O > g.range.to) && !y && !g.composing && (S.active = !1);
          const B = Ib({
            char: t,
            allowSpaces: r,
            allowedPrefixes: i,
            startOfLine: o,
            $position: T.$from
          }), H = `id_${Math.floor(Math.random() * 4294967295)}`;
          B && u({ editor: e, state: w, range: B.range }) ? (S.active = !0, S.decorationId = g.decorationId ? g.decorationId : H, S.range = B.range, S.query = B.query, S.text = B.text) : S.active = !1;
        } else
          S.active = !1;
        return S.active || (S.decorationId = null, S.range = { from: 0, to: 0 }, S.query = null, S.text = null), S;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(m, g) {
        var v;
        const { active: w, range: C } = p.getState(m.state);
        return w && ((v = h == null ? void 0 : h.onKeyDown) === null || v === void 0 ? void 0 : v.call(h, { view: m, event: g, range: C })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(m) {
        const { active: g, range: v, decorationId: w } = p.getState(m);
        return g ? Z.create(m.doc, [
          ke.inline(v.from, v.to, {
            nodeName: s,
            class: l,
            "data-decoration-id": w
          })
        ]) : null;
      }
    }
  });
  return p;
}
const zb = le.create({
  name: "commands",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        startOfLine: !0,
        command: ({ editor: n, range: e, props: t }) => {
          t.insertCommand({ editor: n, range: e });
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      Bb({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}), Hb = {
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
      return this.items.filter((n) => n.insertCommand);
    }
  },
  methods: {
    onKeyDown({ event: n }) {
      return n.key === "ArrowUp" ? (this.upHandler(), !0) : n.key === "ArrowDown" ? (this.downHandler(), !0) : n.key === "Enter" ? (this.enterHandler(), !0) : !1;
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
    selectItem(n) {
      const e = this.items[n];
      e && this.command(e);
    }
  }
}, Vb = { class: "bg-white border border-slate-400 rounded overflow-hidden shadow" }, Fb = ["onClick"], $b = ["innerHTML"], jb = {
  key: 1,
  class: "p-2 text-slate-600 text-sm w-full"
};
function Wb(n, e, t, r, i, o) {
  return V(), te("div", Vb, [
    t.items.length ? (V(!0), te(kt, { key: 0 }, xt(o.itemsWithInsertCommand, (s, l) => (V(), te("button", {
      class: Vt(["flex flex-row gap-2 items-center w-full p-2 pr-12 text-slate-600 hover:bg-slate-50 text-sm", { "bg-slate-100": l === i.selectedIndex }]),
      key: l,
      onClick: (a) => o.selectItem(l)
    }, [
      Ke("span", {
        innerHTML: s.icon
      }, null, 8, $b),
      tf(" " + nf(s.title), 1)
    ], 10, Fb))), 128)) : (V(), te("div", jb, "No result"))
  ]);
}
const _b = /* @__PURE__ */ jr(Hb, [["render", Wb]]);
function ju() {
  return [
    {
      name: "paragraph",
      title: "Paragraph",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setNode("paragraph").run();
      },
      convertCommand: (n) => {
        n.chain().focus().setParagraph().run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("paragraph")
    },
    {
      title: "Heading",
      name: "heading",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setNode("heading", { level: 2 }).run();
      },
      convertCommand: (n) => {
        n.chain().focus().toggleHeading({ level: 2 }).run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("heading"),
      tools: [
        {
          title: "Heading 1",
          name: "heading1",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z"></path></svg>',
          command: (n) => {
            n.chain().focus().toggleHeading({ level: 1 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 1 })
        },
        {
          title: "Heading 2",
          name: "heading2",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z"></path></svg>',
          command: (n) => {
            n.chain().focus().toggleHeading({ level: 2 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 2 })
        },
        {
          title: "Heading 3",
          name: "heading3",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z"></path></svg>',
          command: (n) => {
            n.chain().focus().toggleHeading({ level: 3 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 3 })
        }
      ]
    },
    {
      title: "List",
      name: "list",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="0" stroke="currentColor" fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleBulletList().run();
      },
      convertCommand: (n) => {
        n.chain().focus().toggleBulletList().run();
      },
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("bulletList") || n.isActive("orderedList"),
      tools: [
        {
          title: "Bullet list",
          name: "bulletList",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1"  fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
          command: (n) => {
            n.chain().focus().toggleBulletList().run();
          },
          isActiveTest: (n) => n.isActive("bulletList")
        },
        {
          title: "Ordered list",
          name: "orderedList",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M11 6h9M11 12h9M12 18h8M4 16a2 2 0 114 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6"/></svg>',
          command: (n) => {
            n.chain().focus().toggleOrderedList().run();
          },
          isActiveTest: (n) => n.isActive("orderedList")
        },
        {
          title: "Sink list item",
          name: "sinklistitem",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"></path></svg>',
          command: (n) => {
            n.chain().focus().sinkListItem("listItem").run();
          },
          isDisabledTest: (n) => !n.can().sinkListItem("listItem")
        },
        {
          title: "Lift list item",
          name: "liftlistitem",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"></path></svg>',
          command: (n) => {
            n.chain().focus().liftListItem("listItem").run();
          },
          isDisabledTest: (n) => !n.can().liftListItem("listItem")
        }
      ]
    },
    {
      title: "Code block",
      name: "codeBlock",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleCodeBlock().run();
      },
      hasInlineTools: !1,
      convertCommand: (n) => {
        n.chain().focus().toggleCodeBlock().run();
      },
      isActiveTest: (n) => n.isActive("codeBlock")
    },
    {
      title: "Blockquote",
      name: "blockquote",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleBlockquote().run();
      },
      hasInlineTools: !0,
      canBeConverted: !0,
      convertCommand: (n) => {
        n.chain().focus().toggleBlockquote().run();
      },
      isActiveTest: (n) => n.isActive("blockquote")
    },
    {
      title: "Horizontal rule",
      name: "horizontalRule",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setHorizontalRule().run();
      },
      hasInlineTools: !1,
      isActiveTest: (n) => n.isActive("horizontalRule")
    },
    {
      title: "Table",
      name: "table",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run();
      },
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("table"),
      tools: [
        {
          title: "Toggle header row",
          name: "toggleHeaderRow",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H20.212V4.182H.737z" /></svg>',
          command: (n) => {
            n.commands.toggleHeaderRow();
          }
        },
        {
          title: "Toggle header column",
          name: "toggleHeaderColumn",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H7.042V15.369000000000002H.737z" /></svg>',
          command: (n) => {
            n.commands.toggleHeaderColumn();
          }
        },
        {
          title: "Merge or split cells",
          name: "mergeOrSplit",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" fill="none" height="21" width="21" viewBox="0 0 48 48" stroke="currentColor" width="48" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-width="4"><path d="m20 14v-9c0-.55228-.4477-1-1-1h-14c-.55228 0-1 .44772-1 1v38c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1v-9"/><path d="m28 34v9c0 .5523.4477 1 1 1h14c.5523 0 1-.4477 1-1v-38c0-.55228-.4477-1-1-1h-14c-.5523 0-1 .44772-1 1v9"/><path d="m28 24h16"/><path d="m5 24h15"/><path d="m32.7485 28.8183-1.591-1.5909-3.1819-3.182 3.1819-3.182 1.591-1.591" stroke-linejoin="round"/><path d="m15.375 28.8183 1.591-1.5909 3.182-3.182-3.182-3.182-1.591-1.591" stroke-linejoin="round"/></g></svg>',
          command: (n) => {
            n.commands.mergeOrSplit();
          }
        }
      ]
    },
    {
      title: "YouTube",
      name: "youtube",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" version="1.1" viewBox="0 0 461.001 461.001"><path fill="currentColor" d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"/></svg>',
      hasInlineTools: !1,
      canBeConverted: !1,
      isActiveTest: (n) => n.isActive("youtube")
    }
  ];
}
const Kb = {
  items: ({ query: n }) => ju().filter(
    (e) => e.title.toLowerCase().startsWith(n.toLowerCase())
  ),
  render: () => {
    let n, e;
    return {
      onStart: (t) => {
        n = new _0(_b, {
          // using vue 2:
          // parent: this,
          // propsData: props,
          props: t,
          editor: t.editor
        }), t.clientRect && (e = Sn("body", {
          getReferenceClientRect: t.clientRect,
          appendTo: () => document.getElementById("gutentap"),
          content: n.element,
          showOnCreate: !0,
          interactive: !0,
          trigger: "manual",
          placement: "bottom-start"
        }));
      },
      onUpdate(t) {
        n.updateProps(t), t.clientRect && e[0].setProps({
          getReferenceClientRect: t.clientRect
        });
      },
      onKeyDown(t) {
        var r;
        return t.event.key === "Escape" ? (e[0].hide(), !0) : (r = n.ref) == null ? void 0 : r.onKeyDown(t);
      },
      onExit() {
        e[0].destroy(), n.destroy();
      }
    };
  }
};
function qb() {
  return [
    {
      title: "Bold",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"></path></svg>',
      command: (n) => {
        n.chain().focus().toggleBold().run();
      },
      isActiveTest: (n) => n.isActive("bold")
    },
    {
      title: "Italic",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.5 5L10 19h1.9l2.5-14z"></path></svg>',
      command: (n) => {
        n.chain().focus().toggleItalic().run();
      },
      isActiveTest: (n) => n.isActive("italic")
    },
    {
      title: "Link",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"></path></svg>',
      command: (n) => {
        const e = n.getAttributes("link").href, t = window.prompt("URL", e);
        if (t !== null) {
          if (t === "") {
            n.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
          }
          n.chain().focus().extendMarkRange("link").setLink({ href: t }).run();
        }
      },
      isActiveTest: (n) => n.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "Unlink",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"></path></svg>',
      command: (n) => n.chain().focus().unsetLink().run(),
      isActiveTest: (n) => !n.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "More inline tool",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path></svg>',
      isActiveTest: () => !1,
      command: () => null,
      tools: [
        {
          title: "Strikethrough",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"></path></svg>',
          command: (n) => n.commands.toggleStrike(),
          isActiveTest: (n) => n.isActive("strike")
        },
        {
          title: "Inline code",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"></path></svg>',
          command: (n) => n.commands.toggleCode(),
          isActiveTest: (n) => n.isActive("code")
        },
        {
          title: "Highlight",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
          command: (n) => n.commands.toggleHighlight(),
          isActiveTest: (n) => n.isActive("highlight")
        },
        {
          title: "Subscript",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (n) => n.commands.toggleSubscript(),
          isActiveTest: (n) => n.isActive("subscript")
        },
        {
          title: "Superscript",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (n) => n.commands.toggleSuperscript(),
          isActiveTest: (n) => n.isActive("superscript")
        }
      ]
    }
  ];
}
function Ub() {
  return [
    {
      title: "Add row before",
      name: "addRowBefore",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.addRowBefore();
      }
    },
    {
      title: "Add row after",
      name: "addRowAfter",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"></path></svg>',
      command: (n) => {
        n.commands.addRowAfter();
      }
    },
    {
      title: "Delete row",
      name: "deleteRow",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.deleteRow();
      }
    }
  ];
}
function Jb() {
  return [
    {
      title: "Add column before",
      name: "addColumnBefore",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.addColumnBefore();
      }
    },
    {
      title: "Add column after",
      name: "addColumnAfter",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"></path></svg>',
      command: (n) => {
        n.commands.addColumnAfter();
      }
    },
    {
      title: "Delete column",
      name: "deleteColumn",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"></path></svg>',
      command: (n) => {
        n.commands.deleteColumn();
      }
    }
  ];
}
function Gb() {
  return [
    [
      {
        title: "Align text left",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("left").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "left" })
      },
      {
        title: "Align text centre",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("center").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "center" })
      },
      {
        title: "Align text right",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("right").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "right" })
      }
    ],
    [
      {
        title: "Normal width",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("normal").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "normal" })
      },
      {
        title: "Wide width",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("wide").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "wide" })
      },
      {
        title: "Full width",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("full").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "full" })
      }
    ]
  ];
}
const Yb = {
  props: ["modelValue", "editorClass", "mode", "extensions"],
  components: {
    BubbleMenu: $0,
    EditorContent: W0,
    MenuButton: cf,
    MenuItem: hf,
    MenuDropdownButton: yf
  },
  data() {
    return {
      dragging: !1,
      draggedNodePosition: null,
      editor: null,
      blockTools: ju(),
      inlineTools: qb(),
      alignmentTools: Gb(),
      tableRowTools: Ub(),
      tableColumnTools: Jb(),
      topLevelNodeType: null,
      currentBlockTool: null,
      isTyping: !1,
      showMainToolbar: !1,
      moreIcon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/></svg>',
      deleteIcon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>',
      moreIconRound: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    };
  },
  created: function() {
    window.addEventListener("mousemove", () => this.cancelTyping());
  },
  unmounted: function() {
    window.removeEventListener("mousemove", () => this.cancelTyping());
  },
  mounted() {
    this.editor = new j0({
      extensions: [
        jy.configure({
          blockquote: !1
        }),
        wu.extend({
          content: "paragraph"
        }),
        Lb,
        yb,
        vb,
        kb,
        zb.configure({
          suggestion: Kb
        }),
        dv.configure({
          openOnClick: !1
        }),
        uv.configure({
          placeholder: "Type / to choose a block"
        }),
        Ab.configure({
          types: ["horizontalRule", "blockquote", "youtube"]
        }),
        gb.configure({
          types: ["heading", "paragraph"]
        }),
        fb.configure({
          resizable: !0
        }),
        mb.extend({
          allowGapCursor: !1
        }),
        pb.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        hb.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        Rb.configure({
          inline: !1,
          HTMLAttributes: {
            class: "aspect-video h-auto w-full"
          }
        }),
        ...this.extensions ?? []
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
        (n) => n.find(
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
        (n) => {
          var e;
          return n.name == this.topLevelNodeType || ((e = n.tools) == null ? void 0 : e.find((t) => t.name == this.topLevelNodeType));
        }
      );
    },
    deleteNode(n) {
      this.editor.commands.deleteNode(n), this.$refs.deleteButton.$el.blur();
    },
    getMenuCoords() {
      return xb(this.editor.view);
    },
    getTableRowMenuCoords() {
      return Cb(this.editor.view);
    },
    getTableColumnMenuCoords() {
      return Sb(this.editor.view);
    },
    startDragging(n) {
      let e = { left: n.clientX, top: n.clientY + 48 };
      this.draggedNodePosition = this.editor.view.posAtCoords(e).pos, this.dragging = !0;
    },
    endDragging(n) {
      let e = this.editor.view.posAtCoords({
        left: n.clientX,
        top: n.clientY + 20
      });
      e && Mb({
        view: this.editor.view,
        state: this.editor.state,
        draggedNodePosition: this.draggedNodePosition,
        targetNodePosition: e.pos
      }), this.dragging = !1, this.draggedNode = null;
    },
    tableIsActive() {
      return this.getTopLevelNodeType() == "table";
    },
    moveNode(n = "UP") {
      Tb({
        view: this.editor.view,
        dir: n,
        currentResolved: this.editor.view.state.selection.$from
      });
    },
    getTopLevelNodeType() {
      var n;
      return (n = Fu(this.editor.view)) == null ? void 0 : n.type.name;
    },
    canMoveNodeDown() {
      const n = this.editor.view.state.selection.$from;
      return n.index(0) < n.node(0).childCount - 1;
    },
    canMoveNodeUp() {
      return this.editor.view.state.selection.$from.index(0) > 0;
    }
  }
}, Xb = { id: "gutentap" }, Qb = { class: "flex flex-row" }, Zb = /* @__PURE__ */ Ke("svg", {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  focusable: "false",
  class: "w-5 h-5 md:w-6 md:h-6"
}, [
  /* @__PURE__ */ Ke("path", { d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z" })
], -1), ew = [
  Zb
], tw = {
  key: 0,
  class: "py-1 md:py-2 group relative"
}, nw = /* @__PURE__ */ Ke("div", { class: "p-3 uppercase text-gray-600 text-xs pb-1 tracking-wide" }, " Transform to ", -1), rw = {
  key: 1,
  class: "pr-2 flex flex-col"
}, iw = ["disabled"], ow = /* @__PURE__ */ Ke("svg", {
  width: "24",
  height: "24",
  class: "w-5 h-5 md:w-6 md:h-6",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
}, [
  /* @__PURE__ */ Ke("path", { d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" })
], -1), sw = [
  ow
], lw = ["disabled"], aw = /* @__PURE__ */ Ke("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  class: "w-5 h-5 md:w-6 md:h-6"
}, [
  /* @__PURE__ */ Ke("path", { d: "M17.5 11.6 12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" })
], -1), cw = [
  aw
], dw = {
  key: 0,
  class: "flex gap-1 items-center hide-empty flex-row p-1 md:p-2"
}, uw = {
  key: 1,
  class: "gap-1 flex flex-row items-center p-1 md:p-2"
}, fw = {
  key: 2,
  class: "p-1 gap-0.5 md:p-2 md:gap-1 flex relative flex-row items-center"
}, hw = {
  key: 3,
  class: "p-1 gap-0.5 md:p-2 md:gap-1 flex group flex-row items-center relative"
};
function pw(n, e, t, r, i, o) {
  const s = dr("menu-button"), l = dr("menu-dropdown-button"), a = dr("menu-item"), c = dr("bubble-menu"), d = dr("editor-content");
  return V(), te("div", Xb, [
    i.editor && i.tableRowTools ? (V(), Xe(c, {
      key: 0,
      editor: i.editor,
      pluginKey: "tableRowMenu",
      "should-show": o.tableIsActive,
      "tippy-options": {
        placement: "left",
        getReferenceClientRect: o.getTableRowMenuCoords
      }
    }, {
      default: Me(() => [
        Fe(a, null, {
          dropdown: Me(() => [
            (V(!0), te(kt, null, xt(i.tableRowTools, (u) => (V(), Xe(l, {
              innerHTML: u.icon + " " + u.title,
              key: u.title,
              label: u.title,
              onClick: (f) => u.command(i.editor)
            }, null, 8, ["innerHTML", "label", "onClick"]))), 128))
          ]),
          default: Me(() => [
            Fe(s, {
              title: "Row tools",
              class: "rounded-full text-slate-400 hover:text-slate-800",
              content: i.moreIconRound
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : rt("", !0),
    i.editor && i.tableColumnTools ? (V(), Xe(c, {
      key: 1,
      editor: i.editor,
      pluginKey: "tableColumnMenu",
      "should-show": o.tableIsActive,
      "tippy-options": {
        placement: "bottom",
        getReferenceClientRect: o.getTableColumnMenuCoords
      }
    }, {
      default: Me(() => [
        Fe(a, null, {
          dropdown: Me(() => [
            (V(!0), te(kt, null, xt(i.tableColumnTools, (u) => (V(), Xe(l, {
              content: u.icon + " " + u.title,
              key: u.title,
              label: u.title,
              onClick: (f) => u.command(i.editor)
            }, null, 8, ["content", "label", "onClick"]))), 128))
          ]),
          default: Me(() => [
            Fe(s, {
              title: "Column tools",
              content: i.moreIconRound,
              class: "rounded-full text-slate-400 hover:text-slate-800"
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : rt("", !0),
    i.editor ? (V(), Xe(c, {
      key: 2,
      pluginKey: "mainMenu",
      onDragend: e[5] || (e[5] = (u) => o.endDragging(u)),
      draggable: i.dragging,
      "should-show": o.shouldShowMainToolbar,
      class: Vt(["text-sm bg-white max-w-screen flex divide-x max-w-full divide-slate-400 flex-row border-slate-400 md:rounded border-t md:border", {
        "mouse:pointer-events-none mouse:opacity-0": i.isTyping
      }]),
      editor: i.editor,
      "tippy-options": {
        maxWidth: "none",
        placement: "top-start",
        getReferenceClientRect: o.getMenuCoords,
        onCreate: (u) => u.popper.classList.add(
          "max-md:!sticky",
          "max-md:!bottom-0",
          "max-md:!top-auto",
          "max-md:!transform-none"
        )
      }
    }, {
      default: Me(() => {
        var u, f, h, p, m;
        return [
          Ke("div", Qb, [
            Ke("button", {
              onMousedown: e[0] || (e[0] = (g) => o.startDragging(g)),
              onMouseup: e[1] || (e[1] = (g) => {
                i.draggedNodePosition = !1, i.dragging = !1;
              }),
              class: Vt(["hidden md:block ml-1 my-2 hover:bg-slate-100 rounded", {
                "cursor-grab": !i.dragging,
                "cursor-grabbing mr-1": i.dragging
              }]),
              "aria-label": "Drag",
              "data-tooltip": "Drag"
            }, ew, 34),
            !i.dragging && i.currentBlockTool ? (V(), te("div", tw, [
              Fe(a, null, rf({
                default: Me(() => {
                  var g, v, w;
                  return [
                    Fe(s, {
                      title: (g = i.currentBlockTool) == null ? void 0 : g.name,
                      content: (v = i.currentBlockTool) == null ? void 0 : v.icon,
                      class: Vt(
                        ((w = i.currentBlockTool) == null ? void 0 : w.canBeConverted) && "group-focus-within:bg-slate-600 !cursor-pointer group-focus-within:text-white hover:bg-slate-50"
                      )
                    }, null, 8, ["title", "content", "class"])
                  ];
                }),
                _: 2
              }, [
                (u = i.currentBlockTool) != null && u.canBeConverted ? {
                  name: "dropdown",
                  fn: Me(() => [
                    nw,
                    (V(!0), te(kt, null, xt(i.blockTools.filter((g) => g.convertCommand), (g) => (V(), Xe(l, {
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
            ])) : rt("", !0),
            i.dragging ? rt("", !0) : (V(), te("div", rw, [
              Ke("button", {
                onClick: e[2] || (e[2] = (g) => o.moveNode("UP")),
                disabled: !o.canMoveNodeUp(),
                "data-tooltip": "Move up",
                class: "mt-1 md:mt-2"
              }, sw, 8, iw),
              Ke("button", {
                onClick: e[3] || (e[3] = (g) => o.moveNode("DOWN")),
                disabled: !o.canMoveNodeDown(),
                "data-tooltip": "Move down",
                class: "-mt-3.5"
              }, cw, 8, lw)
            ]))
          ]),
          i.dragging ? rt("", !0) : (V(), te("div", dw, [
            (V(!0), te(kt, null, xt(o.activeAlignmentTools, (g, v) => (V(), Xe(a, { key: v }, {
              dropdown: Me(() => [
                (V(!0), te(kt, null, xt(g, (w) => (V(), Xe(l, {
                  key: w.title,
                  content: w.icon + " " + w.title,
                  label: w.title,
                  onClick: (C) => w.command(i.editor),
                  active: w.isActiveTest(i.editor, i.topLevelNodeType)
                }, null, 8, ["content", "label", "onClick", "active"]))), 128))
              ]),
              default: Me(() => {
                var w, C;
                return [
                  Fe(s, {
                    title: (w = g.find(
                      (y) => y.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : w.title,
                    content: (C = g.find(
                      (y) => y.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : C.icon
                  }, null, 8, ["title", "content"])
                ];
              }),
              _: 2
            }, 1024))), 128))
          ])),
          !i.dragging && ((h = (f = i.currentBlockTool) == null ? void 0 : f.tools) != null && h.length) ? (V(), te("div", uw, [
            (V(!0), te(kt, null, xt((p = i.currentBlockTool) == null ? void 0 : p.tools, (g) => {
              var v, w;
              return V(), Xe(s, {
                key: g.name,
                content: g.icon,
                label: g.title,
                activeClass: g.isActiveClass,
                onClick: (C) => g.command.call(0, i.editor),
                disabled: (v = g.isDisabledTest) == null ? void 0 : v.call(0, i.editor),
                active: (w = g.isActiveTest) == null ? void 0 : w.call(0, i.editor)
              }, null, 8, ["content", "label", "activeClass", "onClick", "disabled", "active"]);
            }), 128))
          ])) : rt("", !0),
          (m = i.currentBlockTool) != null && m.hasInlineTools && !i.dragging ? (V(), te("div", fw, [
            (V(!0), te(kt, null, xt(i.inlineTools, (g) => (V(), Xe(a, {
              align: "right",
              key: g.title
            }, {
              dropdown: Me(() => [
                (V(!0), te(kt, null, xt(g.tools, (v) => (V(), Xe(l, {
                  key: v.name,
                  content: v.icon + " " + v.title,
                  onClick: (w) => v.command(i.editor),
                  active: v.isActiveTest(i.editor)
                }, null, 8, ["content", "onClick", "active"]))), 128))
              ]),
              default: Me(() => [
                Fe(s, {
                  content: g.icon,
                  label: g.title,
                  activeClass: g.isActiveClass,
                  onClick: (v) => g.command(i.editor),
                  active: g.isActiveTest(i.editor)
                }, null, 8, ["content", "label", "activeClass", "onClick", "active"])
              ]),
              _: 2
            }, 1024))), 128))
          ])) : rt("", !0),
          i.editor && i.editor.can().deleteNode(i.topLevelNodeType) && !i.dragging ? (V(), te("div", hw, [
            Fe(a, { align: "right" }, {
              dropdown: Me(() => [
                Fe(l, {
                  ref: "deleteButton",
                  content: i.deleteIcon + " Delete",
                  label: "Delete block",
                  onClick: e[4] || (e[4] = (g) => o.deleteNode(i.topLevelNodeType))
                }, null, 8, ["content"])
              ]),
              default: Me(() => [
                Fe(s, {
                  content: i.moreIcon,
                  label: "More options"
                }, null, 8, ["content"])
              ]),
              _: 1
            })
          ])) : rt("", !0)
        ];
      }),
      _: 1
    }, 8, ["draggable", "should-show", "editor", "class", "tippy-options"])) : rt("", !0),
    Fe(d, {
      class: Vt(t.editorClass ?? "prose"),
      onKeydown: e[6] || (e[6] = (u) => i.isTyping = !0),
      onKeyup: e[7] || (e[7] = of((u) => i.isTyping = !1, ["esc"])),
      ref: "editor",
      editor: i.editor
    }, null, 8, ["class", "editor"])
  ]);
}
const mw = /* @__PURE__ */ jr(Yb, [["render", pw]]), bw = mw;
export {
  bw as GutenTap
};
