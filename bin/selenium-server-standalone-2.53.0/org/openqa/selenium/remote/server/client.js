'use strict';var f, aa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global ? global : this;
function ba() {
  aa.Symbol || (aa.Symbol = ca);
  ba = function() {
  };
}
var da = 0;
function ca(a) {
  return "jscomp_symbol_" + a + da++;
}
function ea() {
  ba();
  aa.Symbol.iterator || (aa.Symbol.iterator = aa.Symbol("iterator"));
  ea = function() {
  };
}
function fa(a) {
  ea();
  if (a[aa.Symbol.iterator]) {
    return a[aa.Symbol.iterator]();
  }
  if (!(a instanceof Array || "string" == typeof a || a instanceof String)) {
    throw new TypeError(a + " is not iterable");
  }
  var b = 0;
  return {next:function() {
    return b == a.length ? {done:!0} : {done:!1, value:a[b++]};
  }};
}
var m = this;
function n(a) {
  return void 0 !== a;
}
function ga() {
}
function ha(a) {
  a.Ha = function() {
    return a.Oc ? a.Oc : a.Oc = new a;
  };
}
function ia(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function p(a) {
  return "array" == ia(a);
}
function ja(a) {
  var b = ia(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function r(a) {
  return "string" == typeof a;
}
function u(a) {
  return "function" == ia(a);
}
function ka(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
function w(a) {
  return a[ma] || (a[ma] = ++na);
}
var ma = "closure_uid_" + (1E9 * Math.random() >>> 0), na = 0;
function oa(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function pa(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function x(a, b, c) {
  x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
  return x.apply(null, arguments);
}
function qa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
var ra = Date.now || function() {
  return +new Date;
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.m = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.be = function(a, c, g) {
    for (var h = Array(arguments.length - 2), k = 2;k < arguments.length;k++) {
      h[k - 2] = arguments[k];
    }
    return b.prototype[c].apply(a, h);
  };
}
;function sa(a, b) {
  this.code = a;
  this.state = z[a] || ta;
  this.message = b || "";
  var c = this.state.replace(/((?:^|\s+)[a-z])/g, function(a) {
    return a.toUpperCase().replace(/^[\s\xa0]+/g, "");
  }), d = c.length - 5;
  if (0 > d || c.indexOf("Error", d) != d) {
    c += "Error";
  }
  this.name = c;
  c = Error(this.message);
  c.name = this.name;
  this.stack = c.stack || "";
}
y(sa, Error);
var ta = "unknown error", z = {15:"element not selectable", 11:"element not visible"};
z[31] = ta;
z[30] = ta;
z[24] = "invalid cookie domain";
z[29] = "invalid element coordinates";
z[12] = "invalid element state";
z[32] = "invalid selector";
z[51] = "invalid selector";
z[52] = "invalid selector";
z[17] = "javascript error";
z[405] = "unsupported operation";
z[34] = "move target out of bounds";
z[27] = "no such alert";
z[7] = "no such element";
z[8] = "no such frame";
z[23] = "no such window";
z[28] = "script timeout";
z[33] = "session not created";
z[10] = "stale element reference";
z[21] = "timeout";
z[25] = "unable to set cookie";
z[26] = "unexpected alert open";
z[13] = ta;
z[9] = "unknown command";
sa.prototype.toString = function() {
  return this.name + ": " + this.message;
};
function ua(a) {
  var b = a.status;
  if (0 == b) {
    return a;
  }
  b = b || 13;
  a = a.value;
  if (!a || !ka(a)) {
    throw new sa(b, a + "");
  }
  throw new sa(b, a.message + "");
}
;function A() {
  0 != va && (wa[w(this)] = this);
  this.Da = this.Da;
  this.Ea = this.Ea;
}
var va = 0, wa = {};
A.prototype.Da = !1;
A.prototype.O = function() {
  if (!this.Da && (this.Da = !0, this.v(), 0 != va)) {
    var a = w(this);
    delete wa[a];
  }
};
function xa(a, b) {
  a.Da ? b.call(void 0) : (a.Ea || (a.Ea = []), a.Ea.push(n(void 0) ? x(b, void 0) : b));
}
A.prototype.v = function() {
  if (this.Ea) {
    for (;this.Ea.length;) {
      this.Ea.shift()();
    }
  }
};
function B(a) {
  a && "function" == typeof a.O && a.O();
}
;function ya(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ya);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
y(ya, Error);
ya.prototype.name = "CustomError";
var Ba;
function Ca(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
var Da = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function Ea(a) {
  if (!Fa.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(Ga, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ha, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ia, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ja, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Ka, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(La, "&#0;"));
  return a;
}
var Ga = /&/g, Ha = /</g, Ia = />/g, Ja = /"/g, Ka = /'/g, La = /\x00/g, Fa = /[\x00&<>"']/, Ma = String.prototype.repeat ? function(a, b) {
  return a.repeat(b);
} : function(a, b) {
  return Array(b + 1).join(a);
};
function Na(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function Oa(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function Pa(a) {
  var b = r(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;function Qa(a, b) {
  b.unshift(a);
  ya.call(this, Ca.apply(null, b));
  b.shift();
}
y(Qa, ya);
Qa.prototype.name = "AssertionError";
function Ra(a, b) {
  throw new Qa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;function Sa() {
  var a = Ta;
  return a[a.length - 1];
}
var Ua = Array.prototype.indexOf ? function(a, b, c) {
  return Array.prototype.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (r(a)) {
    return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, C = Array.prototype.forEach ? function(a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = r(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a);
  }
}, Va = Array.prototype.filter ? function(a, b, c) {
  return Array.prototype.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], g = 0, h = r(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[g++] = l);
    }
  }
  return e;
}, Wa = Array.prototype.map ? function(a, b, c) {
  return Array.prototype.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), g = r(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a));
  }
  return e;
}, Xa = Array.prototype.some ? function(a, b, c) {
  return Array.prototype.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = r(a) ? a.split("") : a, g = 0;g < d;g++) {
    if (g in e && b.call(c, e[g], g, a)) {
      return !0;
    }
  }
  return !1;
}, Ya = Array.prototype.every ? function(a, b, c) {
  return Array.prototype.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = r(a) ? a.split("") : a, g = 0;g < d;g++) {
    if (g in e && !b.call(c, e[g], g, a)) {
      return !1;
    }
  }
  return !0;
};
function Za(a, b) {
  return 0 <= Ua(a, b);
}
function $a(a, b) {
  var c = Ua(a, b), d;
  (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
  return d;
}
function ab(a) {
  return Array.prototype.concat.apply(Array.prototype, arguments);
}
function bb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
function cb(a, b, c, d) {
  Array.prototype.splice.apply(a, db(arguments, 1));
}
function db(a, b, c) {
  return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
}
;function fb(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
}
function gb(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
var hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ib(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < hb.length;g++) {
      c = hb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function jb(a) {
  var b = arguments.length;
  if (1 == b && p(arguments[0])) {
    return jb.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
}
;function kb(a) {
  if (a.ja && "function" == typeof a.ja) {
    return a.ja();
  }
  if (r(a)) {
    return a.split("");
  }
  if (ja(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return gb(a);
}
;function lb(a, b) {
  this.b = {};
  this.a = [];
  this.j = this.c = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.ra(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      if (a instanceof lb) {
        d = a.cb(), c = a.ja();
      } else {
        var c = [], e = 0;
        for (d in a) {
          c[e++] = d;
        }
        d = c;
        c = gb(a);
      }
      for (e = 0;e < d.length;e++) {
        this.ra(d[e], c[e]);
      }
    }
  }
}
f = lb.prototype;
f.ja = function() {
  mb(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.b[this.a[b]]);
  }
  return a;
};
f.cb = function() {
  mb(this);
  return this.a.concat();
};
f.clear = function() {
  this.b = {};
  this.j = this.c = this.a.length = 0;
};
function nb(a, b) {
  ob(a.b, b) && (delete a.b[b], a.c--, a.j++, a.a.length > 2 * a.c && mb(a));
}
function mb(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      ob(a.b, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.c != a.a.length) {
    for (var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], ob(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
function pb(a, b) {
  return ob(a.b, b) ? a.b[b] : void 0;
}
f.ra = function(a, b) {
  ob(this.b, a) || (this.c++, this.a.push(a), this.j++);
  this.b[a] = b;
};
f.forEach = function(a, b) {
  for (var c = this.cb(), d = 0;d < c.length;d++) {
    var e = c[d];
    a.call(b, pb(this, e), e, this);
  }
};
f.clone = function() {
  return new lb(this);
};
function ob(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;var qb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function rb(a, b) {
  if (a) {
    for (var c = a.split("&"), d = 0;d < c.length;d++) {
      var e = c[d].indexOf("="), g = null, h = null;
      0 <= e ? (g = c[d].substring(0, e), h = c[d].substring(e + 1)) : g = c[d];
      b(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
    }
  }
}
;function sb(a, b) {
  this.j = this.L = this.c = "";
  this.o = null;
  this.l = this.h = "";
  this.a = !1;
  var c;
  a instanceof sb ? (this.a = n(b) ? b : a.a, tb(this, a.c), this.L = a.L, this.j = a.j, ub(this, a.o), this.h = a.h, vb(this, a.b.clone()), this.l = a.l) : a && (c = String(a).match(qb)) ? (this.a = !!b, tb(this, c[1] || "", !0), this.L = wb(c[2] || ""), this.j = wb(c[3] || "", !0), ub(this, c[4]), this.h = wb(c[5] || "", !0), vb(this, c[6] || "", !0), this.l = wb(c[7] || "")) : (this.a = !!b, this.b = new xb(null, 0, this.a));
}
sb.prototype.toString = function() {
  var a = [], b = this.c;
  b && a.push(yb(b, zb, !0), ":");
  var c = this.j;
  if (c || "file" == b) {
    a.push("//"), (b = this.L) && a.push(yb(b, zb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.o, null != c && a.push(":", String(c));
  }
  if (c = this.h) {
    this.j && "/" != c.charAt(0) && a.push("/"), a.push(yb(c, "/" == c.charAt(0) ? Ab : Bb, !0));
  }
  (c = this.b.toString()) && a.push("?", c);
  (c = this.l) && a.push("#", yb(c, Cb));
  return a.join("");
};
sb.prototype.clone = function() {
  return new sb(this);
};
function tb(a, b, c) {
  a.c = c ? wb(b, !0) : b;
  a.c && (a.c = a.c.replace(/:$/, ""));
}
function ub(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.o = b;
  } else {
    a.o = null;
  }
}
function vb(a, b, c) {
  b instanceof xb ? (a.b = b, Db(a.b, a.a)) : (c || (b = yb(b, Eb)), a.b = new xb(b, 0, a.a));
}
function wb(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function yb(a, b, c) {
  return r(a) ? (a = encodeURI(a).replace(b, Fb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Fb(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var zb = /[#\/\?@]/g, Bb = /[\#\?:]/g, Ab = /[\#\?]/g, Eb = /[\#\?@]/g, Cb = /#/g;
function xb(a, b, c) {
  this.c = this.a = null;
  this.b = a || null;
  this.j = !!c;
}
function Gb(a) {
  a.a || (a.a = new lb, a.c = 0, a.b && rb(a.b, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
f = xb.prototype;
f.add = function(a, b) {
  Gb(this);
  this.b = null;
  a = Hb(this, a);
  var c = pb(this.a, a);
  c || this.a.ra(a, c = []);
  c.push(b);
  this.c = this.c + 1;
  return this;
};
function Ib(a, b) {
  Gb(a);
  b = Hb(a, b);
  ob(a.a.b, b) && (a.b = null, a.c = a.c - pb(a.a, b).length, nb(a.a, b));
}
f.clear = function() {
  this.a = this.b = null;
  this.c = 0;
};
f.cb = function() {
  Gb(this);
  for (var a = this.a.ja(), b = this.a.cb(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], g = 0;g < e.length;g++) {
      c.push(b[d]);
    }
  }
  return c;
};
f.ja = function(a) {
  Gb(this);
  var b = [];
  if (r(a)) {
    var c = a;
    Gb(this);
    c = Hb(this, c);
    ob(this.a.b, c) && (b = ab(b, pb(this.a, Hb(this, a))));
  } else {
    for (a = this.a.ja(), c = 0;c < a.length;c++) {
      b = ab(b, a[c]);
    }
  }
  return b;
};
f.toString = function() {
  if (this.b) {
    return this.b;
  }
  if (!this.a) {
    return "";
  }
  for (var a = [], b = this.a.cb(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ja(d), g = 0;g < d.length;g++) {
      var h = e;
      "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
      a.push(h);
    }
  }
  return this.b = a.join("&");
};
f.clone = function() {
  var a = new xb;
  a.b = this.b;
  this.a && (a.a = this.a.clone(), a.c = this.c);
  return a;
};
function Hb(a, b) {
  var c = String(b);
  a.j && (c = c.toLowerCase());
  return c;
}
function Db(a, b) {
  b && !a.j && (Gb(a), a.b = null, a.a.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (Ib(this, b), Ib(this, e), 0 < a.length && (this.b = null, this.a.ra(Hb(this, e), bb(a)), this.c = this.c + a.length));
  }, a));
  a.j = b;
}
;function Jb() {
  this.a = "";
}
Jb.prototype.Nc = !0;
Jb.prototype.Xb = function() {
  return this.a;
};
Jb.prototype.toString = function() {
  return "SafeStyle{" + this.a + "}";
};
function Kb(a) {
  var b = new Jb;
  b.a = a;
  return b;
}
Kb("");
var Lb;
a: {
  var Mb = m.navigator;
  if (Mb) {
    var Nb = Mb.userAgent;
    if (Nb) {
      Lb = Nb;
      break a;
    }
  }
  Lb = "";
}
function D(a) {
  return -1 != Lb.indexOf(a);
}
;function Ob() {
  this.a = "";
  this.b = Pb;
  this.Ub = null;
}
Ob.prototype.Gd = !0;
Ob.prototype.Nc = !0;
Ob.prototype.Xb = function() {
  return this.a;
};
Ob.prototype.toString = function() {
  return "SafeHtml{" + this.a + "}";
};
function Qb(a) {
  if (a instanceof Ob && a.constructor === Ob && a.b === Pb) {
    return a.a;
  }
  Ra("expected object of type SafeHtml, got '" + a + "' of type " + ia(a));
  return "type_error:SafeHtml";
}
function Rb(a) {
  if (a instanceof Ob) {
    return a;
  }
  var b;
  a instanceof Ob ? b = a : (b = null, a.Gd && (b = a.Ub), a = Ea(a.Nc ? a.Xb() : String(a)), b = Sb(a, b));
  a = Qb(b).replace(/(\r\n|\r|\n)/g, "<br>");
  return Sb(a, b.Ub);
}
var Pb = {};
function Sb(a, b) {
  var c = new Ob;
  c.a = a;
  c.Ub = b;
  return c;
}
Sb("<!DOCTYPE html>", 0);
var Tb = Sb("", 0);
Sb("<br>", 0);
function Ub(a) {
  this.a = new lb;
  if (a) {
    a = kb(a);
    for (var b = a.length, c = 0;c < b;c++) {
      this.add(a[c]);
    }
  }
}
function Vb(a) {
  var b = typeof a;
  return "object" == b && a || "function" == b ? "o" + w(a) : b.substr(0, 1) + a;
}
f = Ub.prototype;
f.add = function(a) {
  this.a.ra(Vb(a), a);
};
f.clear = function() {
  this.a.clear();
};
f.contains = function(a) {
  a = Vb(a);
  return ob(this.a.b, a);
};
f.ja = function() {
  return this.a.ja();
};
f.clone = function() {
  return new Ub(this);
};
var Wb = D("Opera") || D("OPR"), E = D("Trident") || D("MSIE"), Xb = D("Edge"), Yb = Xb || E, G = D("Gecko") && !(-1 != Lb.toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"), H = -1 != Lb.toLowerCase().indexOf("webkit") && !D("Edge"), Zb = D("Macintosh");
function $b() {
  var a = Lb;
  if (G) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (Xb) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (E) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (H) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function ac() {
  var a = m.document;
  return a ? a.documentMode : void 0;
}
var bc = function() {
  if (Wb && m.opera) {
    var a;
    var b = m.opera.version;
    try {
      a = b();
    } catch (c) {
      a = b;
    }
    return a;
  }
  a = "";
  (b = $b()) && (a = b ? b[1] : "");
  return E && (b = ac(), null != b && b > parseFloat(a)) ? String(b) : a;
}(), cc = {};
function I(a) {
  var b;
  if (!(b = cc[a])) {
    b = 0;
    for (var c = Da(String(bc)).split("."), d = Da(String(a)).split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var h = c[g] || "", k = d[g] || "", l = /(\d*)(\D*)/g, q = /(\d*)(\D*)/g;
      do {
        var t = l.exec(h) || ["", "", ""], v = q.exec(k) || ["", "", ""];
        if (0 == t[0].length && 0 == v[0].length) {
          break;
        }
        b = Na(0 == t[1].length ? 0 : parseInt(t[1], 10), 0 == v[1].length ? 0 : parseInt(v[1], 10)) || Na(0 == t[2].length, 0 == v[2].length) || Na(t[2], v[2]);
      } while (0 == b);
    }
    b = cc[a] = 0 <= b;
  }
  return b;
}
function dc(a) {
  return Number(ec) >= a;
}
var fc = m.document, ec = fc && E ? ac() || ("CSS1Compat" == fc.compatMode ? parseInt(bc, 10) : 5) : void 0;
function gc(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
gc.prototype.a = null;
var hc = 0;
gc.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || hc++;
  this.j = d || ra();
  this.l = a;
  this.c = b;
  this.b = c;
  delete this.a;
};
function ic(a) {
  this.l = a;
  this.a = this.c = this.j = this.b = null;
}
function jc(a, b) {
  this.name = a;
  this.value = b;
}
jc.prototype.toString = function() {
  return this.name;
};
var kc = new jc("SHOUT", 1200), lc = new jc("SEVERE", 1E3), mc = new jc("WARNING", 900), nc = new jc("INFO", 800), oc = new jc("CONFIG", 700), pc = new jc("FINE", 500), qc = new jc("FINER", 400), rc = new jc("FINEST", 300);
function sc(a) {
  if (a.j) {
    return a.j;
  }
  if (a.b) {
    return sc(a.b);
  }
  Ra("Root logger has no level set.");
  return null;
}
ic.prototype.log = function(a, b, c) {
  if (a.value >= sc(this).value) {
    for (u(b) && (b = b()), a = new gc(a, String(b), this.l), c && (a.a = c), c = "log:" + a.c, m.console && (m.console.timeStamp ? m.console.timeStamp(c) : m.console.markTimeline && m.console.markTimeline(c)), m.msWriteProfilerMark && m.msWriteProfilerMark(c), c = this;c;) {
      b = c;
      var d = a;
      if (b.a) {
        for (var e = 0, g = void 0;g = b.a[e];e++) {
          g(d);
        }
      }
      c = c.b;
    }
  }
};
function tc(a, b) {
  a.log(qc, b, void 0);
}
var uc = {}, vc = null;
function wc() {
  vc || (vc = new ic(""), uc[""] = vc, vc.j = oc);
}
function xc(a) {
  wc();
  var b;
  if (!(b = uc[a])) {
    b = new ic(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = xc(a.substr(0, c));
    c.c || (c.c = {});
    c.c[d] = b;
    b.b = c;
    uc[a] = b;
  }
  return b;
}
;function yc() {
  this.a = ra();
}
var zc = new yc;
yc.prototype.reset = function() {
  this.a = ra();
};
function Ac(a) {
  this.j = a || "";
  this.l = zc;
}
Ac.prototype.a = !0;
Ac.prototype.b = !0;
Ac.prototype.c = !1;
function Bc(a) {
  return 10 > a ? "0" + a : String(a);
}
function Cc(a) {
  Ac.call(this, a);
}
y(Cc, Ac);
function Dc() {
  this.j = x(this.l, this);
  this.a = new Cc;
  this.a.b = !1;
  this.a.c = !1;
  this.b = this.a.a = !1;
  this.c = "";
  this.h = {};
}
function Ec(a, b) {
  if (b != a.b) {
    var c;
    wc();
    c = vc;
    if (b) {
      var d = a.j;
      c.a || (c.a = []);
      c.a.push(d);
    } else {
      (c = c.a) && $a(c, a.j);
    }
    a.b = b;
  }
}
Dc.prototype.l = function(a) {
  if (!this.h[a.b]) {
    var b;
    b = this.a;
    var c = [];
    c.push(b.j, " ");
    if (b.b) {
      var d = new Date(a.j);
      c.push("[", Bc(d.getFullYear() - 2E3) + Bc(d.getMonth() + 1) + Bc(d.getDate()) + " " + Bc(d.getHours()) + ":" + Bc(d.getMinutes()) + ":" + Bc(d.getSeconds()) + "." + Bc(Math.floor(d.getMilliseconds() / 10)), "] ");
    }
    var d = (a.j - b.l.a) / 1E3, e = d.toFixed(3), g = 0;
    if (1 > d) {
      g = 2;
    } else {
      for (;100 > d;) {
        g++, d *= 10;
      }
    }
    for (;0 < g--;) {
      e = " " + e;
    }
    c.push("[", e, "s] ");
    c.push("[", a.b, "] ");
    c.push(a.c);
    b.c && (d = a.a) && c.push("\n", d instanceof Error ? d.message : d.toString());
    b.a && c.push("\n");
    b = c.join("");
    if (c = Fc) {
      switch(a.l) {
        case kc:
          Gc(c, "info", b);
          break;
        case lc:
          Gc(c, "error", b);
          break;
        case mc:
          Gc(c, "warn", b);
          break;
        default:
          Gc(c, "debug", b);
      }
    } else {
      this.c += b;
    }
  }
};
var Fc = m.console;
function Gc(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
}
;var Hc = !E || dc(9), Ic = !E || dc(9), Jc = E && !I("9");
!H || I("528");
G && I("1.9b") || E && I("8") || Wb && I("9.5") || H && I("528");
G && !I("8") || E && I("9");
function J(a, b) {
  this.type = a;
  this.l = this.target = b;
  this.h = !1;
  this.Xc = !0;
}
J.prototype.o = function() {
  this.h = !0;
};
J.prototype.b = function() {
  this.Xc = !1;
};
function Kc(a) {
  Kc[" "](a);
  return a;
}
Kc[" "] = ga;
function Lc(a, b) {
  try {
    return Kc(a[b]), !0;
  } catch (c) {
  }
  return !1;
}
;function K(a, b) {
  J.call(this, a ? a.type : "");
  this.j = this.l = this.target = null;
  this.a = this.clientY = this.clientX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.L = !1;
  this.c = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.l = b;
    var e = a.relatedTarget;
    e ? G && (Lc(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.j = e;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY);
    this.a = a.keyCode || 0;
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.L = Zb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.c = a;
    a.defaultPrevented && this.b();
  }
}
y(K, J);
var Mc = [1, 4, 2];
function Nc(a) {
  return (Hc ? 0 == a.c.button : "click" == a.type ? !0 : !!(a.c.button & Mc[0])) && !(H && Zb && a.ctrlKey);
}
K.prototype.o = function() {
  K.m.o.call(this);
  this.c.stopPropagation ? this.c.stopPropagation() : this.c.cancelBubble = !0;
};
K.prototype.b = function() {
  K.m.b.call(this);
  var a = this.c;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Jc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Oc = "closure_listenable_" + (1E6 * Math.random() | 0);
function Pc(a) {
  return !(!a || !a[Oc]);
}
var Qc = 0;
function Rc(a, b, c, d, e) {
  this.listener = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.sb = !!d;
  this.Eb = e;
  this.key = ++Qc;
  this.Ya = this.rb = !1;
}
function Sc(a) {
  a.Ya = !0;
  a.listener = null;
  a.a = null;
  a.src = null;
  a.Eb = null;
}
;function Tc(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
Tc.prototype.add = function(a, b, c, d, e) {
  var g = a.toString();
  a = this.a[g];
  a || (a = this.a[g] = [], this.b++);
  var h = Uc(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.rb = !1)) : (b = new Rc(b, this.src, g, !!d, e), b.rb = c, a.push(b));
  return b;
};
function Vc(a, b) {
  var c = b.type;
  if (!(c in a.a)) {
    return !1;
  }
  var d = $a(a.a[c], b);
  d && (Sc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  return d;
}
function Wc(a, b, c, d, e) {
  a = a.a[b.toString()];
  b = -1;
  a && (b = Uc(a, c, d, e));
  return -1 < b ? a[b] : null;
}
function Uc(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.Ya && g.listener == b && g.sb == !!c && g.Eb == d) {
      return e;
    }
  }
  return -1;
}
;var Xc = "closure_lm_" + (1E6 * Math.random() | 0), Yc = {}, Zc = 0;
function L(a, b, c, d, e) {
  if (p(b)) {
    for (var g = 0;g < b.length;g++) {
      L(a, b[g], c, d, e);
    }
    return null;
  }
  c = $c(c);
  return Pc(a) ? a.w(b, c, d, e) : ad(a, b, c, !1, d, e);
}
function ad(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, k = bd(a);
  k || (a[Xc] = k = new Tc(a));
  c = k.add(b, c, d, e, g);
  if (c.a) {
    return c;
  }
  d = cd();
  c.a = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), d, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(dd(b.toString()), d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  Zc++;
  return c;
}
function cd() {
  var a = ed, b = Ic ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function fd(a, b, c, d, e) {
  if (p(b)) {
    for (var g = 0;g < b.length;g++) {
      fd(a, b[g], c, d, e);
    }
  } else {
    c = $c(c), Pc(a) ? a.L.add(String(b), c, !0, d, e) : ad(a, b, c, !0, d, e);
  }
}
function gd(a, b, c, d, e) {
  if (p(b)) {
    for (var g = 0;g < b.length;g++) {
      gd(a, b[g], c, d, e);
    }
  } else {
    c = $c(c), Pc(a) ? a.na(b, c, d, e) : a && (a = bd(a)) && (b = Wc(a, b, c, !!d, e)) && hd(b);
  }
}
function hd(a) {
  if ("number" == typeof a || !a || a.Ya) {
    return !1;
  }
  var b = a.src;
  if (Pc(b)) {
    return Vc(b.L, a);
  }
  var c = a.type, d = a.a;
  b.removeEventListener ? b.removeEventListener(c, d, a.sb) : b.detachEvent && b.detachEvent(dd(c), d);
  Zc--;
  (c = bd(b)) ? (Vc(c, a), 0 == c.b && (c.src = null, b[Xc] = null)) : Sc(a);
  return !0;
}
function id(a) {
  if (a) {
    if (Pc(a)) {
      a.lb(void 0);
    } else {
      if (a = bd(a)) {
        var b = 0, c;
        for (c in a.a) {
          for (var d = a.a[c].concat(), e = 0;e < d.length;++e) {
            hd(d[e]) && ++b;
          }
        }
      }
    }
  }
}
function dd(a) {
  return a in Yc ? Yc[a] : Yc[a] = "on" + a;
}
function jd(a, b, c, d) {
  var e = !0;
  if (a = bd(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.sb == c && !g.Ya && (g = kd(g, d), e = e && !1 !== g);
      }
    }
  }
  return e;
}
function kd(a, b) {
  var c = a.listener, d = a.Eb || a.src;
  a.rb && hd(a);
  return c.call(d, b);
}
function ed(a, b) {
  if (a.Ya) {
    return !0;
  }
  if (!Ic) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = m, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new K(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var g = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (l) {
            g = !0;
          }
        }
        if (g || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (g = c.l;g;g = g.parentNode) {
        e.push(g);
      }
      for (var g = a.type, h = e.length - 1;!c.h && 0 <= h;h--) {
        c.l = e[h];
        var k = jd(e[h], g, !0, c), d = d && k;
      }
      for (h = 0;!c.h && h < e.length;h++) {
        c.l = e[h], k = jd(e[h], g, !1, c), d = d && k;
      }
    }
    return d;
  }
  return kd(a, new K(b, this));
}
function bd(a) {
  a = a[Xc];
  return a instanceof Tc ? a : null;
}
var ld = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function $c(a) {
  if (u(a)) {
    return a;
  }
  a[ld] || (a[ld] = function(b) {
    return a.handleEvent(b);
  });
  return a[ld];
}
;function md(a, b) {
  a && a.log(mc, b, void 0);
}
function nd(a, b) {
  a && a.log(nc, b, void 0);
}
;var od = !E || dc(9), pd = !G && !E || E && dc(9) || G && I("1.9.1"), qd = E && !I("9");
function M(a, b) {
  this.x = n(a) ? a : 0;
  this.y = n(b) ? b : 0;
}
f = M.prototype;
f.clone = function() {
  return new M(this.x, this.y);
};
f.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
};
function rd(a, b) {
  return new M(a.x - b.x, a.y - b.y);
}
f.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
f.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
f.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
function sd(a, b) {
  this.width = a;
  this.height = b;
}
f = sd.prototype;
f.clone = function() {
  return new sd(this.width, this.height);
};
f.toString = function() {
  return "(" + this.width + " x " + this.height + ")";
};
f.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
f.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
f.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function N(a) {
  return a ? new td(O(a)) : Ba || (Ba = new td);
}
function ud(a, b) {
  fb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : vd.hasOwnProperty(d) ? a.setAttribute(vd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var vd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function wd(a) {
  a = a.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new sd(a.clientWidth, a.clientHeight);
}
function xd(a) {
  return a.scrollingElement ? a.scrollingElement : H || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
}
function yd(a) {
  return a ? zd(a) : window;
}
function zd(a) {
  return a.parentWindow || a.defaultView;
}
function Ad(a, b, c) {
  return Bd(document, arguments);
}
function Bd(a, b) {
  var c = b[0], d = b[1];
  if (!od && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ea(d.name), '"');
    if (d.type) {
      c.push(' type="', Ea(d.type), '"');
      var e = {};
      ib(e, d);
      delete e.type;
      d = e;
    }
    c.push(">");
    c = c.join("");
  }
  c = a.createElement(c);
  d && (r(d) ? c.className = d : p(d) ? c.className = d.join(" ") : ud(c, d));
  2 < b.length && Cd(a, c, b, 2);
  return c;
}
function Cd(a, b, c, d) {
  function e(c) {
    c && b.appendChild(r(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var g = c[d];
    !ja(g) || ka(g) && 0 < g.nodeType ? e(g) : C(Dd(g) ? bb(g) : g, e);
  }
}
function Ed(a, b) {
  Cd(O(a), a, arguments, 1);
}
function Fd(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
}
function Gd(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}
function Hd(a, b) {
  if (!a || !b) {
    return !1;
  }
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || !!(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
}
function O(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
}
function Id(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        Fd(a), a.appendChild(O(a).createTextNode(String(b)));
      }
    }
  }
}
var Jd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Kd = {IMG:" ", BR:"\n"};
function Ld(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"));
}
function Md(a) {
  a = a.getAttributeNode("tabindex");
  return null != a && a.specified;
}
function Nd(a) {
  a = a.tabIndex;
  return "number" == typeof a && 0 <= a && 32768 > a;
}
function Od(a) {
  var b = [];
  Pd(a, b, !1);
  return b.join("");
}
function Pd(a, b, c) {
  if (!(a.nodeName in Jd)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in Kd) {
        b.push(Kd[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          Pd(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}
function Dd(a) {
  if (a && "number" == typeof a.length) {
    if (ka(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (u(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}
function td(a) {
  this.a = a || m.document || document;
}
f = td.prototype;
f.g = function(a) {
  return r(a) ? this.a.getElementById(a) : a;
};
f.C = function(a, b, c) {
  return Bd(this.a, arguments);
};
function Qd(a) {
  return "CSS1Compat" == a.a.compatMode;
}
function Rd(a) {
  var b = a.a;
  a = xd(b);
  b = zd(b);
  return E && I("10") && b.pageYOffset != a.scrollTop ? new M(a.scrollLeft, a.scrollTop) : new M(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
}
f.yc = Gd;
function Sd(a) {
  return pd && void 0 != a.children ? a.children : Va(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
}
f.contains = Hd;
f.fd = Id;
function P(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
}
f = P.prototype;
f.clone = function() {
  return new P(this.top, this.right, this.bottom, this.left);
};
f.toString = function() {
  return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
};
f.contains = function(a) {
  return this && a ? a instanceof P ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
};
function Td(a, b) {
  var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0, d = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
  return Math.sqrt(c * c + d * d);
}
f.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
f.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
f.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
function Ud(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
}
f = Ud.prototype;
f.clone = function() {
  return new Ud(this.left, this.top, this.width, this.height);
};
function Vd(a) {
  return new P(a.top, a.left + a.width, a.top + a.height, a.left);
}
f.toString = function() {
  return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)";
};
f.contains = function(a) {
  return a instanceof Ud ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height;
};
f.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
f.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
f.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Wd(a, b, c) {
  if (r(b)) {
    (b = Xd(a, b)) && (a.style[b] = c);
  } else {
    for (var d in b) {
      c = a;
      var e = b[d], g = Xd(c, d);
      g && (c.style[g] = e);
    }
  }
}
var Yd = {};
function Xd(a, b) {
  var c = Yd[b];
  if (!c) {
    var d = Oa(b), c = d;
    void 0 === a.style[d] && (d = (H ? "Webkit" : G ? "Moz" : E ? "ms" : Wb ? "O" : null) + Pa(d), void 0 !== a.style[d] && (c = d));
    Yd[b] = c;
  }
  return c;
}
function Zd(a, b) {
  var c = O(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
}
function $d(a, b) {
  return Zd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
}
function ae(a, b, c) {
  var d;
  b instanceof M ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = be(d, !1);
  a.style.top = be(b, !1);
}
function ce(a) {
  a = a ? O(a) : document;
  return !E || dc(9) || Qd(N(a)) ? a.documentElement : a.body;
}
function de(a) {
  var b;
  try {
    b = a.getBoundingClientRect();
  } catch (c) {
    return {left:0, top:0, right:0, bottom:0};
  }
  E && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b;
}
function ee(a) {
  if (E && !dc(8)) {
    return a.offsetParent;
  }
  var b = O(a), c = $d(a, "position"), d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode;a && a != b;a = a.parentNode) {
    if (11 == a.nodeType && a.host && (a = a.host), c = $d(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a;
    }
  }
  return null;
}
function fe(a) {
  for (var b = new P(0, Infinity, Infinity, 0), c = N(a), d = c.a.body, e = c.a.documentElement, g = xd(c.a);a = ee(a);) {
    if (!(E && 0 == a.clientWidth || H && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != $d(a, "overflow")) {
      var h = ge(a), k = new M(a.clientLeft, a.clientTop);
      h.x += k.x;
      h.y += k.y;
      b.top = Math.max(b.top, h.y);
      b.right = Math.min(b.right, h.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
      b.left = Math.max(b.left, h.x);
    }
  }
  d = g.scrollLeft;
  g = g.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, g);
  c = wd(zd(c.a) || window);
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, g + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
}
function ge(a) {
  var b = O(a), c = new M(0, 0), d = ce(b);
  if (a == d) {
    return c;
  }
  a = de(a);
  b = Rd(N(b));
  c.x = a.left + b.x;
  c.y = a.top + b.y;
  return c;
}
function he(a, b, c) {
  if (b instanceof sd) {
    c = b.height, b = b.width;
  } else {
    if (void 0 == c) {
      throw Error("missing height argument");
    }
  }
  a.style.width = be(b, !0);
  a.style.height = be(c, !0);
}
function be(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a;
}
function ie(a) {
  var b = je;
  if ("none" != $d(a, "display")) {
    return b(a);
  }
  var c = a.style, d = c.display, e = c.visibility, g = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = g;
  c.visibility = e;
  return a;
}
function je(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = H && !b && !c;
  return n(b) && !d || !a.getBoundingClientRect ? new sd(b, c) : (a = de(a), new sd(a.right - a.left, a.bottom - a.top));
}
function ke(a) {
  var b = ge(a);
  a = ie(a);
  return new Ud(b.x, b.y, a.width, a.height);
}
function le(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")");
}
function Q(a, b) {
  a.style.display = b ? "" : "none";
}
function me(a) {
  return "rtl" == $d(a, "direction");
}
var ne = G ? "MozUserSelect" : H || Xb ? "WebkitUserSelect" : null;
function oe(a, b, c) {
  c = c ? null : a.getElementsByTagName("*");
  if (ne) {
    if (b = b ? "none" : "", a.style && (a.style[ne] = b), c) {
      a = 0;
      for (var d;d = c[a];a++) {
        d.style && (d.style[ne] = b);
      }
    }
  } else {
    if (E || Wb) {
      if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for (a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b);
        }
      }
    }
  }
}
function pe(a, b) {
  if (/^\d+px?$/.test(b)) {
    return parseInt(b, 10);
  }
  var c = a.style.left, d = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var e = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = d;
  return e;
}
function qe(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null;
  return c ? pe(a, c) : 0;
}
var re = {thin:2, medium:4, thick:6};
function se(a, b) {
  if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) {
    return 0;
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
  return c in re ? re[c] : pe(a, c);
}
;function te(a) {
  A.call(this);
  this.b = a;
  this.a = {};
}
y(te, A);
var ue = [];
te.prototype.w = function(a, b, c, d) {
  p(b) || (b && (ue[0] = b.toString()), b = ue);
  for (var e = 0;e < b.length;e++) {
    var g = L(a, b[e], c || this.handleEvent, d || !1, this.b || this);
    if (!g) {
      break;
    }
    this.a[g.key] = g;
  }
  return this;
};
te.prototype.na = function(a, b, c, d, e) {
  if (p(b)) {
    for (var g = 0;g < b.length;g++) {
      this.na(a, b[g], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.b || this, c = $c(c), d = !!d, b = Pc(a) ? Wc(a.L, String(b), c, d, e) : a ? (a = bd(a)) ? Wc(a, b, c, d, e) : null : null, b && (hd(b), delete this.a[b.key]);
  }
  return this;
};
function ve(a) {
  fb(a.a, function(a, c) {
    this.a.hasOwnProperty(c) && hd(a);
  }, a);
  a.a = {};
}
te.prototype.v = function() {
  te.m.v.call(this);
  ve(this);
};
te.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function R() {
  A.call(this);
  this.L = new Tc(this);
  this.cd = this;
  this.pb = null;
}
y(R, A);
R.prototype[Oc] = !0;
f = R.prototype;
f.nc = function(a) {
  this.pb = a;
};
f.removeEventListener = function(a, b, c, d) {
  gd(this, a, b, c, d);
};
f.D = function(a) {
  var b, c = this.pb;
  if (c) {
    for (b = [];c;c = c.pb) {
      b.push(c);
    }
  }
  var c = this.cd, d = a.type || a;
  if (r(a)) {
    a = new J(a, c);
  } else {
    if (a instanceof J) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new J(d, c);
      ib(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.h && 0 <= h;h--) {
      g = a.l = b[h], e = we(g, d, !0, a) && e;
    }
  }
  a.h || (g = a.l = c, e = we(g, d, !0, a) && e, a.h || (e = we(g, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.h && h < b.length;h++) {
      g = a.l = b[h], e = we(g, d, !1, a) && e;
    }
  }
  return e;
};
f.v = function() {
  R.m.v.call(this);
  this.lb();
  this.pb = null;
};
f.w = function(a, b, c, d) {
  return this.L.add(String(a), b, !1, c, d);
};
f.na = function(a, b, c, d) {
  var e;
  e = this.L;
  a = String(a).toString();
  if (a in e.a) {
    var g = e.a[a];
    b = Uc(g, b, c, d);
    -1 < b ? (Sc(g[b]), Array.prototype.splice.call(g, b, 1), 0 == g.length && (delete e.a[a], e.b--), e = !0) : e = !1;
  } else {
    e = !1;
  }
  return e;
};
f.lb = function(a) {
  var b;
  if (this.L) {
    b = this.L;
    a = a && a.toString();
    var c = 0, d;
    for (d in b.a) {
      if (!a || d == a) {
        for (var e = b.a[d], g = 0;g < e.length;g++) {
          ++c, Sc(e[g]);
        }
        delete b.a[d];
        b.b--;
      }
    }
    b = c;
  } else {
    b = 0;
  }
  return b;
};
function we(a, b, c, d) {
  b = a.L.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, g = 0;g < b.length;++g) {
    var h = b[g];
    if (h && !h.Ya && h.sb == c) {
      var k = h.listener, l = h.Eb || h.src;
      h.rb && Vc(a.L, h);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && 0 != d.Xc;
}
;function xe() {
}
ha(xe);
xe.prototype.a = 0;
function S(a) {
  R.call(this);
  this.a = a || N();
  this.Fa = ye;
  this.pa = null;
  this.J = !1;
  this.b = null;
  this.T = void 0;
  this.M = this.j = this.l = null;
}
y(S, R);
S.prototype.ab = xe.Ha();
var ye = null;
function Ae(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close";
  }
  throw Error("Invalid component state");
}
f = S.prototype;
f.P = function() {
  return this.pa || (this.pa = ":" + (this.ab.a++).toString(36));
};
f.g = function() {
  return this.b;
};
function T(a) {
  a.T || (a.T = new te(a));
  return a.T;
}
function Be(a, b) {
  if (a == b) {
    throw Error("Unable to set parent component");
  }
  if (b && a.l && a.pa && Ce(a.l, a.pa) && a.l != b) {
    throw Error("Unable to set parent component");
  }
  a.l = b;
  S.m.nc.call(a, b);
}
f.nc = function(a) {
  if (this.l && this.l != a) {
    throw Error("Method not supported");
  }
  S.m.nc.call(this, a);
};
f.I = function() {
  this.b = this.a.a.createElement("DIV");
};
function De(a, b, c) {
  if (a.J) {
    throw Error("Component already rendered");
  }
  a.b || a.I();
  b ? b.insertBefore(a.b, c || null) : a.a.a.body.appendChild(a.b);
  a.l && !a.l.J || a.V();
}
f.V = function() {
  this.J = !0;
  Ee(this, function(a) {
    !a.J && a.g() && a.V();
  });
};
f.ea = function() {
  Ee(this, function(a) {
    a.J && a.ea();
  });
  this.T && ve(this.T);
  this.J = !1;
};
f.v = function() {
  this.J && this.ea();
  this.T && (this.T.O(), delete this.T);
  Ee(this, function(a) {
    a.O();
  });
  this.b && Gd(this.b);
  this.l = this.b = this.M = this.j = null;
  S.m.v.call(this);
};
f.la = function(a, b) {
  this.qb(a, Fe(this), b);
};
f.qb = function(a, b, c) {
  if (a.J && (c || !this.J)) {
    throw Error("Component already rendered");
  }
  if (0 > b || b > Fe(this)) {
    throw Error("Child component index out of bounds");
  }
  this.M && this.j || (this.M = {}, this.j = []);
  if (a.l == this) {
    var d = a.P();
    this.M[d] = a;
    $a(this.j, a);
  } else {
    var d = this.M, e = a.P();
    if (null !== d && e in d) {
      throw Error('The object already contains the key "' + e + '"');
    }
    d[e] = a;
  }
  Be(a, this);
  cb(this.j, b, 0, a);
  a.J && this.J && a.l == this ? (c = this.Ia(), b = c.childNodes[b] || null, b != a.g() && c.insertBefore(a.g(), b)) : c ? (this.b || this.I(), b = U(this, b + 1), De(a, this.Ia(), b ? b.b : null)) : this.J && !a.J && a.b && a.b.parentNode && 1 == a.b.parentNode.nodeType && a.V();
};
f.Ia = function() {
  return this.b;
};
function Ge(a) {
  null == a.Fa && (a.Fa = me(a.J ? a.b : a.a.a.body));
  return a.Fa;
}
function Fe(a) {
  return a.j ? a.j.length : 0;
}
function Ce(a, b) {
  var c;
  a.M && b ? (c = a.M, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
  return c;
}
function U(a, b) {
  return a.j ? a.j[b] || null : null;
}
function Ee(a, b, c) {
  a.j && C(a.j, b, c);
}
function He(a, b) {
  return a.j && b ? Ua(a.j, b) : -1;
}
f.removeChild = function(a, b) {
  if (a) {
    var c = r(a) ? a : a.P();
    a = Ce(this, c);
    if (c && a) {
      var d = this.M;
      c in d && delete d[c];
      $a(this.j, a);
      b && (a.ea(), a.b && Gd(a.b));
      Be(a, null);
    }
  }
  if (!a) {
    throw Error("Child is not in parent component");
  }
  return a;
};
function Ie() {
  S.call(this);
}
y(Ie, S);
f = Ie.prototype;
f.jc = null;
f.v = function() {
  id(this.g());
  hd(this.jc);
  this.jc = null;
  Ie.m.v.call(this);
};
f.I = function() {
  var a = this.a.C("DIV", "banner");
  Wd(a, "position", "absolute");
  Wd(a, "top", "0");
  L(a, "click", x(this.Kb, this, !1));
  this.b = a;
  this.Lb();
  this.jc = L(yd(this.a.a) || window, "resize", this.Lb, !1, this);
};
f.Kb = function(a) {
  Q(this.g(), a);
  this.Lb();
};
f.Lb = function() {
  if (!this.g().style.display) {
    var a = yd(this.a.a) || window, b = Rd(this.a).x, c = ie(this.g());
    ae(this.g(), Math.max(b + wd(a || window).width / 2 - c.width / 2, 0), 0);
  }
};
function Je(a, b, c) {
  J.call(this, a, b);
  this.data = c;
}
y(Je, J);
var Ke;
function Le(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role");
}
function Me(a, b, c) {
  p(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || void 0 == c ? (Ke || (Ke = {atomic:!1, autocomplete:"none", dropeffect:"none", haspopup:!1, live:"off", multiline:!1, multiselectable:!1, orientation:"vertical", readonly:!1, relevant:"additions text", required:!1, sort:"none", busy:!1, disabled:!1, hidden:!1, invalid:"false"}), c = Ke, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c);
}
;function Ne(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return r(a) && a.match(/\S+/g) || [];
}
function Oe(a, b) {
  return a.classList ? a.classList.contains(b) : Za(Ne(a), b);
}
function Pe(a, b) {
  a.classList ? a.classList.add(b) : Oe(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function Qe(a, b) {
  if (a.classList) {
    C(b, function(b) {
      Pe(a, b);
    });
  } else {
    var c = {};
    C(Ne(a), function(a) {
      c[a] = !0;
    });
    C(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var d in c) {
      a.className += 0 < a.className.length ? " " + d : d;
    }
  }
}
function Re(a, b) {
  a.classList ? a.classList.remove(b) : Oe(a, b) && (a.className = Va(Ne(a), function(a) {
    return a != b;
  }).join(" "));
}
function Se(a, b) {
  a.classList ? C(b, function(b) {
    Re(a, b);
  }) : a.className = Va(Ne(a), function(a) {
    return !Za(b, a);
  }).join(" ");
}
;function Te(a, b, c, d, e) {
  if (!(E || Xb || H && I("525"))) {
    return !0;
  }
  if (Zb && e) {
    return Ue(a);
  }
  if (e && !d) {
    return !1;
  }
  "number" == typeof b && (b = Ve(b));
  if (!c && (17 == b || 18 == b || Zb && 91 == b)) {
    return !1;
  }
  if ((H || Xb) && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return !1;
    }
  }
  if (E && d && b == a) {
    return !1;
  }
  switch(a) {
    case 13:
      return !0;
    case 27:
      return !(H || Xb);
  }
  return Ue(a);
}
function Ue(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (H || Xb) && 0 == a) {
    return !0;
  }
  switch(a) {
    case 32:
    ;
    case 43:
    ;
    case 63:
    ;
    case 64:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return !0;
    default:
      return !1;
  }
}
function Ve(a) {
  if (G) {
    a = We(a);
  } else {
    if (Zb && H) {
      a: {
        switch(a) {
          case 93:
            a = 91;
            break a;
        }
      }
    }
  }
  return a;
}
function We(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a;
  }
}
;function Xe(a, b, c) {
  R.call(this);
  this.target = a;
  this.M = b || a;
  this.h = c || new Ud(NaN, NaN, NaN, NaN);
  this.l = O(a);
  this.a = new te(this);
  xa(this, qa(B, this.a));
  this.j = this.c = this.F = this.B = this.clientY = this.clientX = 0;
  this.o = !0;
  this.b = !1;
  L(this.M, ["touchstart", "mousedown"], this.Zc, !1, this);
}
y(Xe, R);
var Ye = m.document && m.document.documentElement && !!m.document.documentElement.setCapture;
f = Xe.prototype;
f.ka = function(a) {
  this.o = a;
};
f.v = function() {
  Xe.m.v.call(this);
  gd(this.M, ["touchstart", "mousedown"], this.Zc, !1, this);
  ve(this.a);
  Ye && this.l.releaseCapture();
  this.M = this.target = null;
};
f.Zc = function(a) {
  var b = "mousedown" == a.type;
  if (!this.o || this.b || b && !Nc(a)) {
    this.D("earlycancel");
  } else {
    if (this.D(new Ze("start", this, a.clientX, a.clientY))) {
      this.b = !0;
      a.b();
      var b = this.l, c = b.documentElement, d = !Ye;
      this.a.w(b, ["touchmove", "mousemove"], this.xd, d);
      this.a.w(b, ["touchend", "mouseup"], this.tb, d);
      Ye ? (c.setCapture(!1), this.a.w(c, "losecapture", this.tb)) : this.a.w(yd(b), "blur", this.tb);
      this.G && this.a.w(this.G, "scroll", this.Qd, d);
      this.clientX = this.B = a.clientX;
      this.clientY = this.F = a.clientY;
      this.c = this.target.offsetLeft;
      this.j = this.target.offsetTop;
      this.T = Rd(N(this.l));
    }
  }
};
f.tb = function(a) {
  ve(this.a);
  Ye && this.l.releaseCapture();
  this.b ? (this.b = !1, this.D(new Ze("end", this, a.clientX, a.clientY, 0, $e(this, this.c), af(this, this.j)))) : this.D("earlycancel");
};
f.xd = function(a) {
  if (this.o) {
    var b = 1 * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    if (!this.b) {
      var d = this.B - this.clientX, e = this.F - this.clientY;
      if (0 < d * d + e * e) {
        if (this.D(new Ze("start", this, a.clientX, a.clientY))) {
          this.b = !0;
        } else {
          this.Da || this.tb(a);
          return;
        }
      }
    }
    c = bf(this, b, c);
    b = c.x;
    c = c.y;
    this.b && this.D(new Ze("beforedrag", this, a.clientX, a.clientY, 0, b, c)) && (cf(this, a, b, c), a.b());
  }
};
function bf(a, b, c) {
  var d = Rd(N(a.l));
  b += d.x - a.T.x;
  c += d.y - a.T.y;
  a.T = d;
  a.c += b;
  a.j += c;
  return new M($e(a, a.c), af(a, a.j));
}
f.Qd = function(a) {
  var b = bf(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  cf(this, a, b.x, b.y);
};
function cf(a, b, c, d) {
  a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.D(new Ze("drag", a, b.clientX, b.clientY, 0, c, d));
}
function $e(a, b) {
  var c = a.h, d = isNaN(c.left) ? null : c.left, c = isNaN(c.width) ? 0 : c.width;
  return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b));
}
function af(a, b) {
  var c = a.h, d = isNaN(c.top) ? null : c.top, c = isNaN(c.height) ? 0 : c.height;
  return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : -Infinity, b));
}
function Ze(a, b, c, d, e, g, h) {
  J.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.left = n(g) ? g : b.c;
  this.top = n(h) ? h : b.j;
}
y(Ze, J);
function df(a, b, c) {
  this.j = c;
  this.c = a;
  this.l = b;
  this.b = 0;
  this.a = null;
}
df.prototype.put = function(a) {
  this.l(a);
  this.b < this.j && (this.b++, a.next = this.a, this.a = a);
};
function ef() {
  this.b = this.a = null;
}
var gf = new df(function() {
  return new ff;
}, function(a) {
  a.reset();
}, 100);
ef.prototype.add = function(a, b) {
  var c;
  0 < gf.b ? (gf.b--, c = gf.a, gf.a = c.next, c.next = null) : c = gf.c();
  c.Ra = a;
  c.scope = b;
  c.next = null;
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};
function hf() {
  var a = jf, b = null;
  a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
  return b;
}
function ff() {
  this.next = this.scope = this.Ra = null;
}
ff.prototype.reset = function() {
  this.next = this.scope = this.Ra = null;
};
function kf(a) {
  m.setTimeout(function() {
    throw a;
  }, 0);
}
var lf;
function mf() {
  var a = m.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !D("Presto") && (a = function() {
    var a = document.createElement("IFRAME");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = x(function(a) {
      if (("*" == d || a.origin == d) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && !D("Trident") && !D("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (n(c.next)) {
        c = c.next;
        var a = c.rc;
        c.rc = null;
        a();
      }
    };
    return function(a) {
      d.next = {rc:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
    var b = document.createElement("SCRIPT");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    m.setTimeout(a, 0);
  };
}
;function nf(a, b) {
  of || pf();
  qf || (of(), qf = !0);
  jf.add(a, b);
}
var of;
function pf() {
  if (m.Promise && m.Promise.resolve) {
    var a = m.Promise.resolve(void 0);
    of = function() {
      a.then(rf);
    };
  } else {
    of = function() {
      var a = rf;
      !u(m.setImmediate) || m.Window && m.Window.prototype && !D("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (lf || (lf = mf()), lf(a)) : m.setImmediate(a);
    };
  }
}
var qf = !1, jf = new ef;
function rf() {
  for (var a = null;a = hf();) {
    try {
      a.Ra.call(a.scope);
    } catch (b) {
      kf(b);
    }
    gf.put(a);
  }
  qf = !1;
}
;function sf(a, b, c) {
  if (u(a)) {
    c && (a = x(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = x(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < Number(b) ? -1 : m.setTimeout(a, b || 0);
}
;var tf = E ? 'javascript:""' : "about:blank";
function uf(a) {
  R.call(this);
  this.a = a;
  a = E ? "focusout" : "blur";
  this.b = L(this.a, E ? "focusin" : "focus", this, !E);
  this.c = L(this.a, a, this, !E);
}
y(uf, R);
uf.prototype.handleEvent = function(a) {
  var b = new K(a.c);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.D(b);
};
uf.prototype.v = function() {
  uf.m.v.call(this);
  hd(this.b);
  hd(this.c);
  delete this.a;
};
function vf(a, b) {
  this.c = a;
  this.b = b;
}
;function wf(a, b) {
  R.call(this);
  this.c = new te(this);
  this.lc(a || null);
  b && (this.$a = b);
}
y(wf, R);
f = wf.prototype;
f.fa = null;
f.qc = null;
f.ba = !1;
f.hc = -1;
f.$a = "toggle_display";
f.g = function() {
  return this.fa;
};
f.lc = function(a) {
  if (this.ba) {
    throw Error("Can not change this state of the popup while showing.");
  }
  this.fa = a;
};
f.za = function(a) {
  this.G && this.G.stop();
  this.B && this.B.stop();
  if (a) {
    if (!this.ba && this.ic()) {
      if (!this.fa) {
        throw Error("Caller must call setElement before trying to show the popup");
      }
      this.ib();
      a = O(this.fa);
      this.c.w(a, "mousedown", this.Tc, !0);
      if (E) {
        var b;
        try {
          b = a.activeElement;
        } catch (d) {
        }
        for (;b && "IFRAME" == b.nodeName;) {
          try {
            var c = b.contentDocument || b.contentWindow.document;
          } catch (d) {
            break;
          }
          a = c;
          b = a.activeElement;
        }
        this.c.w(a, "mousedown", this.Tc, !0);
        this.c.w(a, "deactivate", this.Sc);
      } else {
        this.c.w(a, "blur", this.Sc);
      }
      "toggle_display" == this.$a ? (this.fa.style.visibility = "visible", Q(this.fa, !0)) : "move_offscreen" == this.$a && this.ib();
      this.ba = !0;
      this.hc = ra();
      this.G ? (fd(this.G, "end", this.Bb, !1, this), this.G.play()) : this.Bb();
    }
  } else {
    xf(this);
  }
};
f.ib = ga;
function xf(a, b) {
  a.ba && a.D({type:"beforehide", target:b}) && (a.c && ve(a.c), a.ba = !1, ra(), a.B ? (fd(a.B, "end", qa(a.sc, b), !1, a), a.B.play()) : a.sc(b));
}
f.sc = function(a) {
  "toggle_display" == this.$a ? this.Fd() : "move_offscreen" == this.$a && (this.fa.style.top = "-10000px");
  this.hb(a);
};
f.Fd = function() {
  this.fa.style.visibility = "hidden";
  Q(this.fa, !1);
};
f.ic = function() {
  return this.D("beforeshow");
};
f.Bb = function() {
  this.D("show");
};
f.hb = function(a) {
  this.D({type:"hide", target:a});
};
f.Tc = function(a) {
  a = a.target;
  Hd(this.fa, a) || yf(this, a) || 150 > ra() - this.hc || xf(this, a);
};
f.Sc = function(a) {
  var b = O(this.fa);
  if ("undefined" != typeof document.activeElement) {
    if (a = b.activeElement, !a || Hd(this.fa, a) || "BODY" == a.tagName) {
      return;
    }
  } else {
    if (a.target != b) {
      return;
    }
  }
  150 > ra() - this.hc || xf(this);
};
function yf(a, b) {
  return Xa(a.qc || [], function(a) {
    return b === a || Hd(a, b);
  });
}
f.v = function() {
  wf.m.v.call(this);
  this.c.O();
  B(this.G);
  B(this.B);
  delete this.fa;
  delete this.c;
  delete this.qc;
};
function zf(a, b) {
  S.call(this, b);
  this.Pa = !!a;
  this.B = null;
}
y(zf, S);
f = zf.prototype;
f.Vb = null;
f.ya = !1;
f.da = null;
f.X = null;
f.ma = null;
f.Rb = !1;
f.Y = function() {
  return "goog-modalpopup";
};
f.ub = function() {
  return this.da;
};
f.I = function() {
  zf.m.I.call(this);
  var a = this.g(), b = Da(this.Y()).split(" ");
  Qe(a, b);
  Ld(a, !0);
  Q(a, !1);
  this.Pa && !this.X && (a = this.a, b = r(void 0) ? Kb(void 0).Xb() : "", this.X = a.C("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;" + b, src:tf}), this.X.className = this.Y() + "-bg", Q(this.X, !1), le(this.X, 0));
  this.da || (this.da = this.a.C("DIV", this.Y() + "-bg"), Q(this.da, !1));
  this.ma || (this.ma = this.a.a.createElement("SPAN"), Q(this.ma, !1), Ld(this.ma, !0), this.ma.style.position = "absolute");
};
f.Wc = function() {
  this.Rb = !1;
};
f.V = function() {
  if (this.X) {
    var a = this.g();
    a.parentNode && a.parentNode.insertBefore(this.X, a);
  }
  a = this.g();
  a.parentNode && a.parentNode.insertBefore(this.da, a);
  zf.m.V.call(this);
  a = this.g();
  a.parentNode && a.parentNode.insertBefore(this.ma, a.nextSibling);
  this.Vb = new uf(this.a.a);
  T(this).w(this.Vb, "focusin", this.Md);
  Af(this, !1);
};
f.ea = function() {
  this.ya && this.Z(!1);
  B(this.Vb);
  zf.m.ea.call(this);
  Gd(this.X);
  Gd(this.da);
  Gd(this.ma);
};
f.Z = function(a) {
  if (a != this.ya) {
    if (this.G && this.G.stop(), this.U && this.U.stop(), this.F && this.F.stop(), this.K && this.K.stop(), this.J && Af(this, a), a) {
      if (this.D("beforeshow")) {
        try {
          this.B = this.a.a.activeElement;
        } catch (e) {
        }
        this.kc();
        Bf(this);
        T(this).w(zd(this.a.a), "resize", this.kc);
        Cf(this, !0);
        this.xc();
        this.ya = !0;
        this.G && this.U ? (fd(this.G, "end", this.Ab, !1, this), this.U.play(), this.G.play()) : this.Ab();
      }
    } else {
      if (this.D("beforehide")) {
        T(this).na(zd(this.a.a), "resize", this.kc);
        this.ya = !1;
        this.F && this.K ? (fd(this.F, "end", this.zb, !1, this), this.K.play(), this.F.play()) : this.zb();
        a: {
          try {
            var b = this.a, c = b.a.body, d = b.a.activeElement || c;
            if (!this.B || this.B == c) {
              this.B = null;
              break a;
            }
            (d == c || b.contains(this.g(), d)) && this.B.focus();
          } catch (e) {
          }
          this.B = null;
        }
      }
    }
  }
};
function Af(a, b) {
  a.ca || (a.ca = new vf(a.b, a.a));
  var c = a.ca;
  if (b) {
    c.a || (c.a = []);
    for (var d = Sd(c.b.a.body), e = 0;e < d.length;e++) {
      var g = d[e], h;
      if (h = g != c.c) {
        h = g.getAttribute("aria-hidden"), h = !(null == h || void 0 == h ? 0 : String(h));
      }
      h && (Me(g, "hidden", !0), c.a.push(g));
    }
  } else {
    if (c.a) {
      for (e = 0;e < c.a.length;e++) {
        c.a[e].removeAttribute("aria-hidden");
      }
      c.a = null;
    }
  }
}
function Cf(a, b) {
  a.X && Q(a.X, b);
  a.da && Q(a.da, b);
  Q(a.g(), b);
  Q(a.ma, b);
}
f.Ab = function() {
  this.D("show");
};
f.zb = function() {
  Cf(this, !1);
  this.D("hide");
};
f.kc = function() {
  this.X && Q(this.X, !1);
  this.da && Q(this.da, !1);
  var a = this.a.a, b = wd(yd(a) || window || window), c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)), a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
  this.X && (Q(this.X, !0), he(this.X, c, a));
  this.da && (Q(this.da, !0), he(this.da, c, a));
};
function Bf(a) {
  var b = yd(a.a.a) || window;
  if ("fixed" == $d(a.g(), "position")) {
    var c = 0, d = 0
  } else {
    d = Rd(a.a), c = d.x, d = d.y;
  }
  var e = ie(a.g()), b = wd(b || window), c = Math.max(c + b.width / 2 - e.width / 2, 0), d = Math.max(d + b.height / 2 - e.height / 2, 0);
  ae(a.g(), c, d);
  ae(a.ma, c, d);
}
f.Md = function(a) {
  this.Rb ? this.Wc() : a.target == this.ma && sf(this.xc, 0, this);
};
f.xc = function() {
  try {
    E && this.a.a.body.focus(), this.g().focus();
  } catch (a) {
  }
};
f.v = function() {
  B(this.G);
  this.G = null;
  B(this.F);
  this.F = null;
  B(this.U);
  this.U = null;
  B(this.K);
  this.K = null;
  zf.m.v.call(this);
};
function V(a, b, c) {
  zf.call(this, b, c);
  this.o = a || "modal-dialog";
  this.c = W(W(new Df, Ef, !0), Ff, !1, !0);
}
y(V, zf);
f = V.prototype;
f.Rc = !0;
f.Qb = .5;
f.ad = "";
f.bc = null;
f.va = null;
f.Za = null;
f.Ma = null;
f.$c = null;
f.ta = null;
f.bb = null;
f.oa = null;
f.Y = function() {
  return this.o;
};
function Gf(a, b) {
  a.ad = b;
  a.Ma && Id(a.Ma, b);
}
function Hf(a, b) {
  a.bc = b;
  a.bb && (a.bb.innerHTML = Qb(b));
}
f.Ia = function() {
  this.g() || De(this, void 0);
  return this.bb;
};
f.ub = function() {
  this.g() || De(this, void 0);
  return V.m.ub.call(this);
};
function If(a, b) {
  var c = Da(a.o + "-title-draggable").split(" ");
  a.g() && (b ? Qe(a.Za, c) : Se(a.Za, c));
  b && !a.va ? (a.va = new Xe(a.g(), a.Za), Qe(a.Za, c), L(a.va, "start", a.Yd, !1, a)) : !b && a.va && (a.va.O(), a.va = null);
}
f.I = function() {
  V.m.I.call(this);
  var a = this.g(), b = this.a;
  this.Za = b.C("DIV", this.o + "-title", this.Ma = b.C("SPAN", {className:this.o + "-title-text", id:this.P()}, this.ad), this.ta = b.C("SPAN", this.o + "-title-close"));
  Ed(a, this.Za, this.bb = b.C("DIV", this.o + "-content"), this.oa = b.C("DIV", this.o + "-buttons"));
  Le(this.Ma, "heading");
  Le(this.ta, "button");
  Ld(this.ta, !0);
  Me(this.ta, "label", Jf);
  this.$c = this.Ma.id;
  Le(a, "dialog");
  Me(a, "labelledby", this.$c || "");
  this.bc && (this.bb.innerHTML = Qb(this.bc));
  Q(this.ta, !0);
  this.c && (a = this.c, a.xa = this.oa, Kf(a));
  Q(this.oa, !!this.c);
  this.Qb = this.Qb;
  this.g() && (a = this.ub()) && le(a, this.Qb);
};
f.V = function() {
  V.m.V.call(this);
  T(this).w(this.g(), "keydown", this.Uc).w(this.g(), "keypress", this.Uc);
  T(this).w(this.oa, "click", this.Id);
  If(this, !0);
  T(this).w(this.ta, "click", this.Sd);
  var a = this.g();
  Le(a, "dialog");
  "" !== this.Ma.id && Me(a, "labelledby", this.Ma.id);
  if (!this.Rc) {
    this.Rc = !1;
    if (this.J) {
      var a = this.a, b = this.ub();
      a.yc(this.X);
      a.yc(b);
    }
    this.ya && Af(this, !1);
  }
};
f.ea = function() {
  this.ya && this.Z(!1);
  If(this, !1);
  V.m.ea.call(this);
};
f.Z = function(a) {
  a != this.ya && (this.J || De(this, void 0), V.m.Z.call(this, a));
};
f.Ab = function() {
  V.m.Ab.call(this);
  this.D(Lf);
};
f.zb = function() {
  V.m.zb.call(this);
  this.D(Mf);
};
f.Yd = function() {
  var a = this.a.a, b = wd(yd(a) || window || window), c = Math.max(a.body.scrollWidth, b.width), a = Math.max(a.body.scrollHeight, b.height), d = ie(this.g());
  "fixed" == $d(this.g(), "position") ? this.va.h = new Ud(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.va.h = new Ud(0, 0, c - d.width, a - d.height);
};
f.Sd = function() {
  Nf(this);
};
function Nf(a) {
  var b = a.c, c = b && b.Sb;
  c ? a.D(new Of(c, pb(b, c))) && a.Z(!1) : a.Z(!1);
}
f.v = function() {
  this.oa = this.ta = null;
  V.m.v.call(this);
};
f.Id = function(a) {
  a: {
    for (a = a.target;null != a && a != this.oa;) {
      if ("BUTTON" == a.tagName) {
        break a;
      }
      a = a.parentNode;
    }
    a = null;
  }
  a && !a.disabled && (a = a.name, this.D(new Of(a, pb(this.c, a))) && this.Z(!1));
};
f.Uc = function(a) {
  var b = !1, c = !1, d = this.c, e = a.target;
  if ("keydown" == a.type) {
    if (27 == a.a) {
      var g = d && d.Sb, e = "SELECT" == e.tagName && !e.disabled;
      g && !e ? (c = !0, b = this.D(new Of(g, pb(d, g)))) : e || (b = !0);
    } else {
      if (9 == a.a && a.shiftKey && e == this.g()) {
        this.Rb = !0;
        try {
          this.ma.focus();
        } catch (t) {
        }
        sf(this.Wc, 0, this);
      }
    }
  } else {
    if (13 == a.a) {
      if ("BUTTON" == e.tagName && !e.disabled) {
        g = e.name;
      } else {
        if (e == this.ta) {
          Nf(this);
        } else {
          if (d) {
            var h = d.Tb, k;
            if (k = h) {
              a: {
                k = d.xa.getElementsByTagName("BUTTON");
                for (var l = 0, q;q = k[l];l++) {
                  if (q.name == h || q.id == h) {
                    k = q;
                    break a;
                  }
                }
                k = null;
              }
            }
            e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
            !k || k.disabled || e || (g = h);
          }
        }
      }
      g && d && (c = !0, b = this.D(new Of(g, String(pb(d, g)))));
    } else {
      e == this.ta && 32 == a.a && Nf(this);
    }
  }
  if (b || c) {
    a.o(), a.b();
  }
  b && this.Z(!1);
};
function Of(a, b) {
  this.type = Pf;
  this.key = a;
  this.caption = b;
}
y(Of, J);
var Pf = "dialogselect", Mf = "afterhide", Lf = "aftershow";
function Df(a) {
  a || N();
  lb.call(this);
}
y(Df, lb);
f = Df.prototype;
f.Tb = null;
f.xa = null;
f.Sb = null;
f.ra = function(a, b, c, d) {
  lb.prototype.ra.call(this, a, b);
  c && (this.Tb = a);
  d && (this.Sb = a);
  return this;
};
function W(a, b, c, d) {
  return a.ra(b.key, b.caption, c, d);
}
function Kf(a) {
  if (a.xa) {
    a.xa.innerHTML = Qb(Tb);
    var b = N(a.xa);
    a.forEach(function(a, d) {
      var e = b.C("BUTTON", {name:d}, a);
      d == this.Tb && (e.className = "goog-buttonset-default");
      this.xa.appendChild(e);
    }, a);
  }
}
f.g = function() {
  return this.xa;
};
var Jf = "Close", Ef = {key:"ok", caption:"OK"}, Ff = {key:"cancel", caption:"Cancel"}, Qf = {key:"yes", caption:"Yes"}, Rf = {key:"no", caption:"No"}, Sf = {key:"save", caption:"Save"}, Tf = {key:"continue", caption:"Continue"};
"undefined" != typeof document && (W(new Df, Ef, !0, !0), W(W(new Df, Ef, !0), Ff, !1, !0), W(W(new Df, Qf, !0), Rf, !1, !0), W(W(W(new Df, Qf), Rf, !0), Ff, !1, !0), W(W(W(new Df, Tf), Sf), Ff, !0, !0));
function Uf() {
  V.call(this, void 0, !0);
  this.c = W(new Df, Ef, !0, !0);
  if (this.oa) {
    if (this.c) {
      var a = this.c;
      a.xa = this.oa;
      Kf(a);
    } else {
      this.oa.innerHTML = Qb(Tb);
    }
    Q(this.oa, !!this.c);
  }
  Vf(this, Wf);
}
y(Uf, V);
var Wf = 0;
Uf.prototype.A = Wf;
Uf.prototype.v = function() {
  delete this.A;
  Uf.m.v.call(this);
};
function Vf(a, b) {
  a.A = b;
  switch(b) {
    case 1:
      Gf(a, "Screenshot");
      break;
    default:
      Gf(a, "Taking Screenshot..."), Hf(a, Rb(""));
  }
}
;function Xf() {
  S.call(this);
}
y(Xf, S);
Xf.prototype.I = function() {
  this.b = this.a.C("DIV", "server-info");
  Yf(this);
};
function Yf(a, b, c, d) {
  var e = [];
  b && e.push(b);
  c && e.push("v" + c);
  d && e.push("r" + d);
  Id(a.g(), e.length ? e.join("\u00a0\u00a0|\u00a0\u00a0") : "Server info unavailable");
}
;function Zf(a, b) {
  R.call(this);
  a && $f(this, a, b);
}
y(Zf, R);
f = Zf.prototype;
f.Ta = null;
f.Ib = null;
f.fc = null;
f.Jb = null;
f.ga = -1;
f.Aa = -1;
f.Ob = !1;
var ag = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, bg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, cg = E || 
Xb || H && I("525"), dg = Zb && G;
f = Zf.prototype;
f.vd = function(a) {
  if (H || Xb) {
    if (17 == this.ga && !a.ctrlKey || 18 == this.ga && !a.altKey || Zb && 91 == this.ga && !a.metaKey) {
      this.Aa = this.ga = -1;
    }
  }
  -1 == this.ga && (a.ctrlKey && 17 != a.a ? this.ga = 17 : a.altKey && 18 != a.a ? this.ga = 18 : a.metaKey && 91 != a.a && (this.ga = 91));
  cg && !Te(a.a, this.ga, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Aa = Ve(a.a), dg && (this.Ob = a.altKey));
};
f.wd = function(a) {
  this.Aa = this.ga = -1;
  this.Ob = a.altKey;
};
f.handleEvent = function(a) {
  var b = a.c, c, d, e = b.altKey;
  E && "keypress" == a.type ? c = this.Aa : (H || Xb) && "keypress" == a.type ? c = this.Aa : Wb && !H ? c = this.Aa : (c = b.keyCode || this.Aa, d = b.charCode || 0, dg && (e = this.Ob), Zb && 63 == d && 224 == c && (c = 191));
  d = c = Ve(c);
  var g = b.keyIdentifier;
  c ? 63232 <= c && c in ag ? d = ag[c] : 25 == c && a.shiftKey && (d = 9) : g && g in bg && (d = bg[g]);
  a = d == this.ga;
  this.ga = d;
  b = new eg(d, 0, a, b);
  b.altKey = e;
  this.D(b);
};
f.g = function() {
  return this.Ta;
};
function $f(a, b, c) {
  a.Jb && fg(a);
  a.Ta = b;
  a.Ib = L(a.Ta, "keypress", a, c);
  a.fc = L(a.Ta, "keydown", a.vd, c, a);
  a.Jb = L(a.Ta, "keyup", a.wd, c, a);
}
function fg(a) {
  a.Ib && (hd(a.Ib), hd(a.fc), hd(a.Jb), a.Ib = null, a.fc = null, a.Jb = null);
  a.Ta = null;
  a.ga = -1;
  a.Aa = -1;
}
f.v = function() {
  Zf.m.v.call(this);
  fg(this);
};
function eg(a, b, c, d) {
  K.call(this, d);
  this.type = "key";
  this.a = a;
  this.repeat = c;
}
y(eg, K);
function gg() {
}
var hg;
ha(gg);
var ig = {button:"pressed", checkbox:"checked", menuitem:"selected", menuitemcheckbox:"checked", menuitemradio:"checked", radio:"checked", tab:"selected", treeitem:"selected"};
f = gg.prototype;
f.wb = function() {
};
f.Va = function(a) {
  return a.a.C("DIV", jg(this, a).join(" "), a.Ja);
};
function kg(a, b, c) {
  if (a = a.g ? a.g() : a) {
    var d = [b];
    E && !I("7") && (d = lg(Ne(a), b), d.push(b));
    (c ? Qe : Se)(a, d);
  }
}
f.Bc = function(a) {
  Ge(a) && this.Ec(a.g(), !0);
  a.isEnabled() && this.xb(a, !0);
};
f.Dc = function(a, b) {
  oe(a, !b, !E && !Wb);
};
f.Ec = function(a, b) {
  kg(a, this.Y() + "-rtl", b);
};
f.Cc = function(a) {
  var b;
  return a.W & 32 && (b = a.g()) ? Md(b) && Nd(b) : !1;
};
f.xb = function(a, b) {
  var c;
  if (a.W & 32 && (c = a.g())) {
    if (!b && a.A & 32) {
      try {
        c.blur();
      } catch (d) {
      }
      a.A & 32 && a.Fc();
    }
    (Md(c) && Nd(c)) != b && Ld(c, b);
  }
};
f.Zb = function(a, b, c) {
  var d = a.g();
  if (d) {
    var e = mg(this, b);
    e && kg(a, e, c);
    this.ua(d, b, c);
  }
};
f.ua = function(a, b, c) {
  hg || (hg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  b = hg[b];
  var d = a.getAttribute("role") || null;
  d && (d = ig[d] || b, b = "checked" == b || "selected" == b ? d : b);
  b && Me(a, b, c);
};
function ng(a, b) {
  if (a && (Fd(a), b)) {
    if (r(b)) {
      Id(a, b);
    } else {
      var c = function(b) {
        if (b) {
          var c = O(a);
          a.appendChild(r(b) ? c.createTextNode(b) : b);
        }
      };
      p(b) ? C(b, c) : !ja(b) || "nodeType" in b ? c(b) : C(bb(b), c);
    }
  }
}
f.Y = function() {
  return "goog-control";
};
function jg(a, b) {
  var c = a.Y(), d = [c], e = a.Y();
  e != c && d.push(e);
  c = b.A;
  for (e = [];c;) {
    var g = c & -c;
    e.push(mg(a, g));
    c &= ~g;
  }
  d.push.apply(d, e);
  (c = b.wc) && d.push.apply(d, c);
  E && !I("7") && d.push.apply(d, lg(d));
  return d;
}
function lg(a, b) {
  var c = [];
  b && (a = ab(a, [b]));
  C([], function(d) {
    !Ya(d, qa(Za, a)) || b && !Za(d, b) || c.push(d.join("_"));
  });
  return c;
}
function mg(a, b) {
  if (!a.a) {
    var c = a.Y();
    c.replace(/\xa0|\s/g, " ");
    a.a = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"};
  }
  return a.a[b];
}
;function og(a, b) {
  if (!a) {
    throw Error("Invalid class name " + a);
  }
  if (!u(b)) {
    throw Error("Invalid decorator function " + b);
  }
}
var pg = {};
function X(a, b, c) {
  S.call(this, c);
  if (!b) {
    b = this.constructor;
    for (var d;b;) {
      d = w(b);
      if (d = pg[d]) {
        break;
      }
      b = b.m ? b.m.constructor : null;
    }
    b = d ? u(d.Ha) ? d.Ha() : new d : null;
  }
  this.c = b;
  this.Ja = n(a) ? a : null;
}
y(X, S);
f = X.prototype;
f.Ja = null;
f.A = 0;
f.W = 39;
f.Pb = 255;
f.La = 0;
f.wc = null;
f.cc = !0;
function qg(a, b) {
  a.J && b != a.cc && rg(a, b);
  a.cc = b;
}
f.I = function() {
  var a = this.c.Va(this);
  this.b = a;
  var b = this.c.wb();
  if (b) {
    var c = a.getAttribute("role") || null;
    b != c && Le(a, b);
  }
  this.c.Dc(a, !1);
};
f.Ia = function() {
  return this.g();
};
f.V = function() {
  X.m.V.call(this);
  var a = this.c, b = this.b;
  this.isEnabled() || a.ua(b, 1, !this.isEnabled());
  this.W & 8 && a.ua(b, 8, !!(this.A & 8));
  this.W & 16 && a.ua(b, 16, !!(this.A & 16));
  this.W & 64 && a.ua(b, 64, !!(this.A & 64));
  this.c.Bc(this);
  this.W & -2 && (this.cc && rg(this, !0), this.W & 32 && (a = this.g())) && (b = this.h || (this.h = new Zf), $f(b, a), T(this).w(b, "key", this.gb).w(a, "focus", this.kd).w(a, "blur", this.Fc));
};
function rg(a, b) {
  var c = T(a), d = a.g();
  b ? (c.w(d, "mouseover", a.ac).w(d, "mousedown", a.yb).w(d, "mouseup", a.Db).w(d, "mouseout", a.dc), a.jb != ga && c.w(d, "contextmenu", a.jb), E && (c.w(d, "dblclick", a.Ic), a.B || (a.B = new sg(a), xa(a, qa(B, a.B))))) : (c.na(d, "mouseover", a.ac).na(d, "mousedown", a.yb).na(d, "mouseup", a.Db).na(d, "mouseout", a.dc), a.jb != ga && c.na(d, "contextmenu", a.jb), E && (c.na(d, "dblclick", a.Ic), B(a.B), a.B = null));
}
f.ea = function() {
  X.m.ea.call(this);
  this.h && fg(this.h);
  this.isEnabled() && this.c.xb(this, !1);
};
f.v = function() {
  X.m.v.call(this);
  this.h && (this.h.O(), delete this.h);
  delete this.c;
  this.B = this.wc = this.Ja = null;
};
function tg(a) {
  a = a.Ja;
  if (!a) {
    return "";
  }
  if (!r(a)) {
    if (p(a)) {
      a = Wa(a, Od).join("");
    } else {
      if (qd && null !== a && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
      } else {
        var b = [];
        Pd(a, b, !0);
        a = b.join("");
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      qd || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""));
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
}
f.isEnabled = function() {
  return !(this.A & 1);
};
f.ka = function(a) {
  var b = this.l;
  b && "function" == typeof b.isEnabled && !b.isEnabled() || !ug(this, 1, !a) || (a || (vg(this, !1), wg(this, !1)), this.c.xb(this, a), xg(this, 1, !a, !0));
};
function wg(a, b) {
  ug(a, 2, b) && xg(a, 2, b);
}
function vg(a, b) {
  ug(a, 4, b) && xg(a, 4, b);
}
function yg(a, b) {
  ug(a, 8, b) && xg(a, 8, b);
}
function zg(a, b) {
  ug(a, 64, b) && xg(a, 64, b);
}
function xg(a, b, c, d) {
  d || 1 != b ? a.W & b && c != !!(a.A & b) && (a.c.Zb(a, b, c), a.A = c ? a.A | b : a.A & ~b) : a.ka(!c);
}
function Ag(a, b, c) {
  if (a.J && a.A & b && !c) {
    throw Error("Component already rendered");
  }
  !c && a.A & b && xg(a, b, !1);
  a.W = c ? a.W | b : a.W & ~b;
}
function Y(a, b) {
  return !!(a.Pb & b) && !!(a.W & b);
}
function ug(a, b, c) {
  return !!(a.W & b) && !!(a.A & b) != c && (!(a.La & b) || a.D(Ae(b, c))) && !a.Da;
}
f.ac = function(a) {
  (!a.j || !Hd(this.g(), a.j)) && this.D("enter") && this.isEnabled() && Y(this, 2) && wg(this, !0);
};
f.dc = function(a) {
  a.j && Hd(this.g(), a.j) || !this.D("leave") || (Y(this, 4) && vg(this, !1), Y(this, 2) && wg(this, !1));
};
f.jb = ga;
f.yb = function(a) {
  this.isEnabled() && (Y(this, 2) && wg(this, !0), Nc(a) && (Y(this, 4) && vg(this, !0), this.c && this.c.Cc(this) && this.g().focus()));
  Nc(a) && a.b();
};
f.Db = function(a) {
  this.isEnabled() && (Y(this, 2) && wg(this, !0), this.A & 4 && this.kb(a) && Y(this, 4) && vg(this, !1));
};
f.Ic = function(a) {
  this.isEnabled() && this.kb(a);
};
f.kb = function(a) {
  if (Y(this, 16)) {
    var b = !(this.A & 16);
    ug(this, 16, b) && xg(this, 16, b);
  }
  Y(this, 8) && yg(this, !0);
  Y(this, 64) && zg(this, !(this.A & 64));
  b = new J("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.L = a.L);
  return this.D(b);
};
f.kd = function() {
  Y(this, 32) && ug(this, 32, !0) && xg(this, 32, !0);
};
f.Fc = function() {
  Y(this, 4) && vg(this, !1);
  Y(this, 32) && ug(this, 32, !1) && xg(this, 32, !1);
};
f.gb = function(a) {
  return this.isEnabled() && this.$b(a) ? (a.b(), a.o(), !0) : !1;
};
f.$b = function(a) {
  return 13 == a.a && this.kb(a);
};
if (!u(X)) {
  throw Error("Invalid component class " + X);
}
if (!u(gg)) {
  throw Error("Invalid renderer class " + gg);
}
var Bg = w(X);
pg[Bg] = gg;
og("goog-control", function() {
  return new X(null);
});
function sg(a) {
  A.call(this);
  this.b = a;
  this.a = !1;
  this.c = new te(this);
  xa(this, qa(B, this.c));
  a = this.b.b;
  this.c.w(a, "mousedown", this.l).w(a, "mouseup", this.h).w(a, "click", this.j);
}
y(sg, A);
var Cg = !E || dc(9);
sg.prototype.l = function() {
  this.a = !1;
};
sg.prototype.h = function() {
  this.a = !0;
};
function Dg(a, b) {
  if (!Cg) {
    return a.button = 0, a.type = b, a;
  }
  var c = document.createEvent("MouseEvents");
  c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
  return c;
}
sg.prototype.j = function(a) {
  if (this.a) {
    this.a = !1;
  } else {
    var b = a.c, c = b.button, d = b.type, e = Dg(b, "mousedown");
    this.b.yb(new K(e, a.l));
    e = Dg(b, "mouseup");
    this.b.Db(new K(e, a.l));
    Cg || (b.button = c, b.type = d);
  }
};
sg.prototype.v = function() {
  this.b = null;
  sg.m.v.call(this);
};
function Eg() {
}
y(Eg, gg);
ha(Eg);
f = Eg.prototype;
f.Y = function() {
  return "goog-tab";
};
f.wb = function() {
  return "tab";
};
f.Va = function(a) {
  var b = Eg.m.Va.call(this, a);
  (a = a.Sa()) && this.sa(b, a);
  return b;
};
f.Sa = function(a) {
  return a.title || "";
};
f.sa = function(a, b) {
  a && (a.title = b || "");
};
function Fg(a, b, c) {
  X.call(this, a, b || Eg.Ha(), c);
  Ag(this, 8, !0);
  this.La |= 9;
}
y(Fg, X);
Fg.prototype.Sa = function() {
  return this.o;
};
Fg.prototype.sa = function(a) {
  this.c.sa(this.g(), a);
  this.Yc(a);
};
Fg.prototype.Yc = function(a) {
  this.o = a;
};
og("goog-tab", function() {
  return new Fg(null);
});
function Gg(a) {
  this.b = a;
}
ha(Gg);
function Hg(a, b) {
  a && (a.tabIndex = b ? 0 : -1);
}
function Ig(a, b) {
  var c = b.g();
  oe(c, !0, G);
  E && (c.hideFocus = !0);
  var d = a.b;
  d && Le(c, d);
}
Gg.prototype.Y = function() {
  return "goog-container";
};
Gg.prototype.a = function(a) {
  var b = this.Y(), c = [b, a.Ba == Jg ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c;
};
function Kg(a, b, c) {
  S.call(this, c);
  this.vb = b || Gg.Ha();
  this.Ba = a || Lg;
}
y(Kg, S);
var Jg = "horizontal", Lg = "vertical";
f = Kg.prototype;
f.gc = null;
f.eb = null;
f.vb = null;
f.Ba = null;
f.fb = !0;
f.Ua = !0;
f.H = -1;
f.R = null;
f.Xa = !1;
f.qa = null;
function Mg(a) {
  return a.gc || a.g();
}
f.I = function() {
  this.b = this.a.C("DIV", this.vb.a(this).join(" "));
};
f.Ia = function() {
  return this.g();
};
f.V = function() {
  Kg.m.V.call(this);
  Ee(this, function(a) {
    a.J && Ng(this, a);
  }, this);
  var a = this.g();
  Ig(this.vb, this);
  Og(this, this.fb);
  T(this).w(this, "enter", this.rd).w(this, "highlight", this.ud).w(this, "unhighlight", this.Dd).w(this, "open", this.yd).w(this, "close", this.pd).w(a, "mousedown", this.jd).w(O(a), "mouseup", this.qd).w(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.od);
  Pg(this);
};
function Pg(a) {
  var b = T(a), c = Mg(a);
  b.w(c, "focus", a.Ac).w(c, "blur", a.gd).w(a.eb || (a.eb = new Zf(Mg(a))), "key", a.hd);
}
f.ea = function() {
  Qg(this, -1);
  this.R && zg(this.R, !1);
  this.Xa = !1;
  Kg.m.ea.call(this);
};
f.v = function() {
  Kg.m.v.call(this);
  this.eb && (this.eb.O(), this.eb = null);
  this.vb = this.R = this.qa = this.gc = null;
};
f.rd = function() {
  return !0;
};
f.ud = function(a) {
  var b = He(this, a.target);
  if (-1 < b && b != this.H) {
    var c = U(this, this.H);
    c && wg(c, !1);
    this.H = b;
    c = U(this, this.H);
    this.Xa && vg(c, !0);
    this.R && c != this.R && (c.W & 64 ? zg(c, !0) : zg(this.R, !1));
  }
  b = this.g();
  null != a.target.g() && Me(b, "activedescendant", a.target.g().id);
};
f.Dd = function(a) {
  a.target == U(this, this.H) && (this.H = -1);
  this.g().removeAttribute("aria-activedescendant");
};
f.yd = function(a) {
  (a = a.target) && a != this.R && a.l == this && (this.R && zg(this.R, !1), this.R = a);
};
f.pd = function(a) {
  a.target == this.R && (this.R = null);
  var b = this.g(), c = a.target.g();
  b && a.target.A & 2 && c && (a = "", c && (a = c.id), Me(b, "activedescendant", a));
};
f.jd = function(a) {
  this.Ua && (this.Xa = !0);
  var b = Mg(this);
  b && Md(b) && Nd(b) ? b.focus() : a.b();
};
f.qd = function() {
  this.Xa = !1;
};
f.od = function(a) {
  var b;
  a: {
    b = a.target;
    if (this.qa) {
      for (var c = this.g();b && b !== c;) {
        var d = b.id;
        if (d in this.qa) {
          b = this.qa[d];
          break a;
        }
        b = b.parentNode;
      }
    }
    b = null;
  }
  if (b) {
    switch(a.type) {
      case "mousedown":
        b.yb(a);
        break;
      case "mouseup":
        b.Db(a);
        break;
      case "mouseover":
        b.ac(a);
        break;
      case "mouseout":
        b.dc(a);
        break;
      case "contextmenu":
        b.jb(a);
    }
  }
};
f.Ac = function() {
};
f.gd = function() {
  Qg(this, -1);
  this.Xa = !1;
  this.R && zg(this.R, !1);
};
f.hd = function(a) {
  return this.isEnabled() && this.fb && (0 != Fe(this) || this.gc) && Rg(this, a) ? (a.b(), a.o(), !0) : !1;
};
function Rg(a, b) {
  var c = U(a, a.H);
  if (c && "function" == typeof c.gb && c.gb(b) || a.R && a.R != c && "function" == typeof a.R.gb && a.R.gb(b)) {
    return !0;
  }
  if (b.shiftKey || b.ctrlKey || b.metaKey || b.altKey) {
    return !1;
  }
  switch(b.a) {
    case 27:
      Mg(a).blur();
      break;
    case 36:
      Sg(a);
      break;
    case 35:
      Tg(a);
      break;
    case 38:
      if (a.Ba == Lg) {
        Ug(a);
      } else {
        return !1;
      }
      break;
    case 37:
      if (a.Ba == Jg) {
        Ge(a) ? Vg(a) : Ug(a);
      } else {
        return !1;
      }
      break;
    case 40:
      if (a.Ba == Lg) {
        Vg(a);
      } else {
        return !1;
      }
      break;
    case 39:
      if (a.Ba == Jg) {
        Ge(a) ? Ug(a) : Vg(a);
      } else {
        return !1;
      }
      break;
    default:
      return !1;
  }
  return !0;
}
function Ng(a, b) {
  var c = b.g(), c = c.id || (c.id = b.P());
  a.qa || (a.qa = {});
  a.qa[c] = b;
}
f.la = function(a, b) {
  Kg.m.la.call(this, a, b);
};
f.qb = function(a, b, c) {
  a.La |= 2;
  a.La |= 64;
  Ag(a, 32, !1);
  qg(a, !1);
  var d = a.l == this ? He(this, a) : -1;
  Kg.m.qb.call(this, a, b, c);
  a.J && this.J && Ng(this, a);
  a = d;
  -1 == a && (a = Fe(this));
  a == this.H ? this.H = Math.min(Fe(this) - 1, b) : a > this.H && b <= this.H ? this.H++ : a < this.H && b > this.H && this.H--;
};
f.removeChild = function(a, b) {
  if (a = r(a) ? Ce(this, a) : a) {
    var c = He(this, a);
    -1 != c && (c == this.H ? (wg(a, !1), this.H = -1) : c < this.H && this.H--);
    var d = a.g();
    d && d.id && this.qa && (c = this.qa, d = d.id, d in c && delete c[d]);
  }
  a = Kg.m.removeChild.call(this, a, b);
  qg(a, !0);
  return a;
};
function Og(a, b) {
  a.fb = b;
  var c = a.g();
  c && (Q(c, b), Hg(Mg(a), a.Ua && a.fb));
}
f.isEnabled = function() {
  return this.Ua;
};
f.ka = function(a) {
  this.Ua != a && this.D(a ? "enable" : "disable") && (a ? (this.Ua = !0, Ee(this, function(a) {
    a.bd ? delete a.bd : a.ka(!0);
  })) : (Ee(this, function(a) {
    a.isEnabled() ? a.ka(!1) : a.bd = !0;
  }), this.Xa = this.Ua = !1), Hg(Mg(this), a && this.fb));
};
function Qg(a, b) {
  var c = U(a, b);
  c ? wg(c, !0) : -1 < a.H && wg(U(a, a.H), !1);
}
function Sg(a) {
  Wg(a, function(a, c) {
    return (a + 1) % c;
  }, Fe(a) - 1);
}
function Tg(a) {
  Wg(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, 0);
}
function Vg(a) {
  Wg(a, function(a, c) {
    return (a + 1) % c;
  }, a.H);
}
function Ug(a) {
  Wg(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a;
  }, a.H);
}
function Wg(a, b, c) {
  c = 0 > c ? He(a, a.R) : c;
  var d = Fe(a);
  c = b.call(a, c, d);
  for (var e = 0;e <= d;) {
    var g = U(a, c);
    if (g && g.isEnabled() && g.W & 2) {
      a.mc(c);
      break;
    }
    e++;
    c = b.call(a, c, d);
  }
}
f.mc = function(a) {
  Qg(this, a);
};
function Xg() {
  this.b = "tablist";
}
y(Xg, Gg);
ha(Xg);
Xg.prototype.Y = function() {
  return "goog-tab-bar";
};
Xg.prototype.a = function(a) {
  var b = Xg.m.a.call(this, a);
  if (!this.c) {
    var c = this.Y();
    this.c = jb(Yg, c + "-top", Zg, c + "-bottom", $g, c + "-start", ah, c + "-end");
  }
  b.push(this.c[a.c]);
  return b;
};
function bh(a, b, c) {
  a = a || Yg;
  if (this.g()) {
    throw Error("Component already rendered");
  }
  this.Ba = a == $g || a == ah ? Lg : Jg;
  this.c = a;
  Kg.call(this, this.Ba, b || Xg.Ha(), c);
  ch(this);
}
y(bh, Kg);
var Yg = "top", Zg = "bottom", $g = "start", ah = "end";
f = bh.prototype;
f.aa = null;
f.V = function() {
  bh.m.V.call(this);
  ch(this);
};
f.v = function() {
  bh.m.v.call(this);
  this.aa = null;
};
f.removeChild = function(a, b) {
  dh(this, a);
  return bh.m.removeChild.call(this, a, b);
};
f.mc = function(a) {
  bh.m.mc.call(this, a);
  eh(this, U(this, a));
};
function eh(a, b) {
  b ? yg(b, !0) : a.aa && yg(a.aa, !1);
}
function dh(a, b) {
  if (b && b == a.aa) {
    for (var c = He(a, b), d = c - 1;b = U(a, d);d--) {
      if (b.isEnabled()) {
        eh(a, b);
        return;
      }
    }
    for (c += 1;b = U(a, c);c++) {
      if (b.isEnabled()) {
        eh(a, b);
        return;
      }
    }
    eh(a, null);
  }
}
f.Bd = function(a) {
  this.aa && this.aa != a.target && yg(this.aa, !1);
  this.aa = a.target;
};
f.Cd = function(a) {
  a.target == this.aa && (this.aa = null);
};
f.zd = function(a) {
  dh(this, a.target);
};
f.Ad = function(a) {
  dh(this, a.target);
};
f.Ac = function() {
  U(this, this.H) || Qg(this, He(this, this.aa || U(this, 0)));
};
function ch(a) {
  T(a).w(a, "select", a.Bd).w(a, "unselect", a.Cd).w(a, "disable", a.zd).w(a, "hide", a.Ad);
}
og("goog-tab-bar", function() {
  return new bh;
});
function fh() {
  S.call(this);
}
y(fh, S);
fh.prototype.h = null;
fh.prototype.v = function() {
  delete this.h;
  fh.m.v.call(this);
};
fh.prototype.I = function() {
  this.b = this.a.C("DIV", "control-block");
  this.h && (C(this.h, this.c, this), this.h = null);
};
fh.prototype.c = function(a) {
  var b = this.g();
  b ? (b.childNodes.length && b.appendChild(this.a.a.createTextNode("\u00a0\u00a0|\u00a0\u00a0")), b.appendChild(a)) : (this.h || (this.h = []), this.h.push(a));
};
function gh(a) {
  V.call(this, void 0, !0);
  Gf(this, a);
  L(this, Pf, this.Oa, !1, this);
}
y(gh, V);
gh.prototype.I = function() {
  gh.m.I.call(this);
  var a = this.Ia(), b = this.tc();
  a.appendChild(b);
};
gh.prototype.Z = function(a) {
  gh.m.Z.call(this, a);
  a && this.D("show");
};
gh.prototype.Oa = function(a) {
  "ok" == a.key && this.Lc() && this.D("action");
};
function hh(a) {
  gh.call(this, "Create a New Session");
  this.h = Wa(a, function(a) {
    return r(a) ? {browserName:a} : a;
  });
  L(this, "show", this.Vd, !1, this);
}
y(hh, gh);
f = hh.prototype;
f.Ga = null;
f.v = function() {
  delete this.h;
  delete this.Ga;
  hh.m.v.call(this);
};
f.tc = function() {
  function a(a) {
    var d = a.browserName;
    (a = a.version) && (d += " " + a);
    return b.C("OPTION", null, d);
  }
  var b = this.a;
  this.Ga = b.C("SELECT", null, a(""));
  C(this.h, function(b) {
    b = a(b);
    this.Ga.appendChild(b);
  }, this);
  return b.C("LABEL", null, "Browser:\u00a0", this.Ga);
};
f.Yb = function() {
  return this.h[this.Ga.selectedIndex - 1];
};
f.Lc = function() {
  return !!this.Ga.selectedIndex;
};
f.Vd = function() {
  this.Ga.selectedIndex = 0;
};
function ih(a) {
  S.call(this);
  this.U = a;
}
y(ih, S);
ih.prototype.v = function() {
  delete this.U;
  ih.m.v.call(this);
};
ih.prototype.I = function() {
  var a = this.a;
  this.b = a.C("FIELDSET", null, a.C("LEGEND", null, this.U), this.uc());
};
ih.prototype.uc = function() {
  return null;
};
function jh() {
}
y(jh, gg);
ha(jh);
f = jh.prototype;
f.wb = function() {
  return "button";
};
f.ua = function(a, b, c) {
  switch(b) {
    case 8:
    ;
    case 16:
      Me(a, "pressed", c);
      break;
    default:
    ;
    case 64:
    ;
    case 1:
      jh.m.ua.call(this, a, b, c);
  }
};
f.Va = function(a) {
  var b = jh.m.Va.call(this, a);
  this.sa(b, a.Sa());
  var c = a.ia;
  c && this.zc(b, c);
  a.W & 16 && this.ua(b, 16, !!(a.A & 16));
  return b;
};
f.zc = ga;
f.Sa = function(a) {
  return a.title;
};
f.sa = function(a, b) {
  a && (b ? a.title = b : a.removeAttribute("title"));
};
f.Y = function() {
  return "goog-button";
};
function kh() {
}
y(kh, jh);
ha(kh);
f = kh.prototype;
f.wb = function() {
};
f.Va = function(a) {
  qg(a, !1);
  a.Pb &= -256;
  Ag(a, 32, !1);
  return a.a.C("BUTTON", {"class":jg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Sa() || "", value:a.ia || ""}, tg(a) || "");
};
f.Bc = function(a) {
  T(a).w(a.g(), "click", a.kb);
};
f.Dc = ga;
f.Ec = ga;
f.Cc = function(a) {
  return a.isEnabled();
};
f.xb = ga;
f.Zb = function(a, b, c) {
  kh.m.Zb.call(this, a, b, c);
  (a = a.g()) && 1 == b && (a.disabled = c);
};
f.zc = function(a, b) {
  a && (a.value = b);
};
f.ua = ga;
function lh(a, b, c) {
  X.call(this, a, b || kh.Ha(), c);
}
y(lh, X);
f = lh.prototype;
f.Sa = function() {
  return this.F;
};
f.sa = function(a) {
  this.F = a;
  this.c.sa(this.g(), a);
};
f.Yc = function(a) {
  this.F = a;
};
f.v = function() {
  lh.m.v.call(this);
  delete this.ia;
  delete this.F;
};
f.V = function() {
  lh.m.V.call(this);
  if (this.W & 32) {
    var a = this.g();
    a && T(this).w(a, "keyup", this.$b);
  }
};
f.$b = function(a) {
  return 13 == a.a && "key" == a.type || 32 == a.a && "keyup" == a.type ? this.kb(a) : 32 == a.a;
};
og("goog-button", function() {
  return new lh(null);
});
function mh(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function nh() {
}
function oh(a, b) {
  var c = [];
  ph(a, b, c);
  return c.join("");
}
function ph(a, b, c) {
  if (null == b) {
    c.push("null");
  } else {
    if ("object" == typeof b) {
      if (p(b)) {
        var d = b;
        b = d.length;
        c.push("[");
        for (var e = "", g = 0;g < b;g++) {
          c.push(e), ph(a, d[g], c), e = ",";
        }
        c.push("]");
        return;
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean) {
        b = b.valueOf();
      } else {
        c.push("{");
        e = "";
        for (d in b) {
          Object.prototype.hasOwnProperty.call(b, d) && (g = b[d], "function" != typeof g && (c.push(e), qh(d, c), c.push(":"), ph(a, g, c), e = ","));
        }
        c.push("}");
        return;
      }
    }
    switch(typeof b) {
      case "string":
        qh(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
        break;
      case "boolean":
        c.push(String(b));
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof b);;
    }
  }
}
var rh = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, sh = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function qh(a, b) {
  b.push('"', a.replace(sh, function(a) {
    var b = rh[a];
    b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), rh[a] = b);
    return b;
  }), '"');
}
;function th(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, l, q, t, v) {
    if ("%" == q) {
      return "%";
    }
    var F = c.shift();
    if ("undefined" == typeof F) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = F;
    return uh[q].apply(null, arguments);
  });
}
var uh = {s:function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Ma(" ", Number(c) - a.length) : Ma(" ", Number(c) - a.length) + a;
}, f:function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
  var g;
  g = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= Number(a) && (d = g + d);
  if (isNaN(c) || d.length >= Number(c)) {
    return d;
  }
  d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
  a = Number(c) - d.length - g.length;
  return d = 0 <= b.indexOf("-", 0) ? g + d + Ma(" ", a) : g + Ma(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d;
}, d:function(a, b, c, d, e, g, h, k) {
  return uh.f(parseInt(a, 10), b, c, d, 0, g, h, k);
}};
uh.i = uh.d;
uh.u = uh.d;
function vh() {
  this.a = new nh;
}
function wh(a) {
  var b = new vh;
  if (null == a) {
    return [];
  }
  if (r(a)) {
    if (/^[\s\xa0]*$/.test(a)) {
      return [];
    }
    a = mh(a);
  }
  var c = [];
  xh(b, a, c, 0);
  return c;
}
function xh(a, b, c, d) {
  var e = ia(b);
  switch(e) {
    case "null":
    ;
    case "boolean":
    ;
    case "number":
    ;
    case "string":
      a = oh(a.a, b);
      c.push(yh(a, e));
      break;
    case "array":
      c.push("[");
      for (e = e = 0;e < b.length;e++) {
        0 < e && c.push(","), c.push("\n"), c.push(Ma(" ", d + 2)), xh(a, b[e], c, d + 2);
      }
      0 < e && (c.push("\n"), c.push(Ma(" ", d)));
      c.push("]");
      break;
    case "object":
      c.push("{");
      var e = 0, g;
      for (g in b) {
        b.hasOwnProperty(g) && (0 < e && c.push(","), c.push("\n"), c.push(Ma(" ", d + 2)), c.push(zh(oh(a.a, g))), c.push(":", " "), xh(a, b[g], c, d + 2), e++);
      }
      0 < e && (c.push("\n"), c.push(Ma(" ", d)));
      c.push("}");
      break;
    default:
      a = oh(a.a, ""), c.push(yh(a, "unknown"));
  }
}
function zh(a) {
  return "" + a + "";
}
function yh(a, b) {
  return th("", b) + a + "";
}
;function Ah(a, b, c, d, e, g, h, k) {
  var l, q;
  if (l = c.offsetParent) {
    var t = "HTML" == l.tagName || "BODY" == l.tagName;
    t && "static" == $d(l, "position") || (q = ge(l), t || (t = (t = me(l)) && G ? -l.scrollLeft : !t || Yb && I("8") || "visible" == $d(l, "overflowX") ? l.scrollLeft : l.scrollWidth - l.clientWidth - l.scrollLeft, q = rd(q, new M(t, l.scrollTop))));
  }
  l = q || new M;
  q = ke(a);
  if (t = fe(a)) {
    var v = new Ud(t.left, t.top, t.right - t.left, t.bottom - t.top), t = Math.max(q.left, v.left), F = Math.min(q.left + q.width, v.left + v.width);
    if (t <= F) {
      var za = Math.max(q.top, v.top), v = Math.min(q.top + q.height, v.top + v.height);
      za <= v && (q.left = t, q.top = za, q.width = F - t, q.height = v - za);
    }
  }
  t = N(a);
  za = N(c);
  if (t.a != za.a) {
    F = t.a.body;
    var za = zd(za.a), v = new M(0, 0), Aa = yd(O(F));
    if (Lc(Aa, "parent")) {
      var ze = F;
      do {
        var eb;
        Aa == za ? eb = ge(ze) : (eb = de(ze), eb = new M(eb.left, eb.top));
        v.x += eb.x;
        v.y += eb.y;
      } while (Aa && Aa != za && Aa != Aa.parent && (ze = Aa.frameElement) && (Aa = Aa.parent));
    }
    F = rd(v, ge(F));
    !E || dc(9) || Qd(t) || (F = rd(F, Rd(t)));
    q.left += F.x;
    q.top += F.y;
  }
  a = Bh(a, b);
  b = q.left;
  a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
  b = new M(b, q.top + (a & 1 ? q.height : 0));
  b = rd(b, l);
  e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
  var la;
  h && (la = fe(c)) && (la.top -= l.y, la.right -= l.x, la.bottom -= l.y, la.left -= l.x);
  return Ch(b, c, d, g, la, h, k);
}
function Ch(a, b, c, d, e, g, h) {
  a = a.clone();
  var k = Bh(b, c);
  c = ie(b);
  h = h ? h.clone() : c.clone();
  a = a.clone();
  h = h.clone();
  var l = 0;
  if (d || 0 != k) {
    k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
  }
  if (g) {
    if (e) {
      d = a;
      k = h;
      l = 0;
      65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
      132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
      d.x < e.left && g & 1 && (d.x = e.left, l |= 1);
      if (g & 16) {
        var q = d.x;
        d.x < e.left && (d.x = e.left, l |= 4);
        d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, q + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4);
      }
      d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
      g & 2 && (l = l | (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
      d.y < e.top && g & 4 && (d.y = e.top, l |= 2);
      g & 32 && (q = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, q + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
      d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
      g & 8 && (l = l | (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
      e = l;
    } else {
      e = 256;
    }
    l = e;
  }
  g = new Ud(0, 0, 0, 0);
  g.left = a.x;
  g.top = a.y;
  g.width = h.width;
  g.height = h.height;
  e = l;
  if (e & 496) {
    return e;
  }
  ae(b, new M(g.left, g.top));
  h = new sd(g.width, g.height);
  c == h || c && h && c.width == h.width && c.height == h.height || (c = h, a = Qd(N(O(b))), !E || I("10") || a && I("8") ? (b = b.style, G ? b.MozBoxSizing = "border-box" : H ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (E ? (a = qe(b, "paddingLeft"), g = qe(b, "paddingRight"), d = qe(b, "paddingTop"), k = qe(b, "paddingBottom"), a = new P(d, g, k, a)) : (a = Zd(b, "paddingLeft"), 
  g = Zd(b, "paddingRight"), d = Zd(b, "paddingTop"), k = Zd(b, "paddingBottom"), a = new P(parseFloat(d), parseFloat(g), parseFloat(k), parseFloat(a))), E && !dc(9) ? (g = se(b, "borderLeft"), d = se(b, "borderRight"), k = se(b, "borderTop"), b = se(b, "borderBottom"), b = new P(k, d, b, g)) : (g = Zd(b, "borderLeftWidth"), d = Zd(b, "borderRightWidth"), k = Zd(b, "borderTopWidth"), b = Zd(b, "borderBottomWidth"), b = new P(parseFloat(k), parseFloat(d), parseFloat(b), parseFloat(g))), h.pixelWidth = 
  c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = c.width, h.pixelHeight = c.height)));
  return e;
}
function Bh(a, b) {
  return (b & 8 && me(a) ? b ^ 4 : b) & -9;
}
;function Dh() {
}
Dh.prototype.a = function() {
};
function Eh(a, b, c) {
  this.b = a;
  this.c = b;
  this.j = c;
}
y(Eh, Dh);
Eh.prototype.a = function(a, b, c) {
  Ah(this.b, this.c, a, b, void 0, c, this.j);
};
function Fh(a, b) {
  this.b = a instanceof M ? a : new M(a, b);
}
y(Fh, Dh);
Fh.prototype.a = function(a, b, c, d) {
  Ah(ce(a), 0, a, b, this.b, c, null, d);
};
function Gh(a, b) {
  this.ab = b || void 0;
  wf.call(this, a);
}
y(Gh, wf);
Gh.prototype.ib = function() {
  if (this.ab) {
    var a = !this.ba && "move_offscreen" != this.$a, b = this.g();
    a && (b.style.visibility = "hidden", Q(b, !0));
    this.ab.a(b, 8, this.Oa);
    a && Q(b, !1);
  }
};
function Hh(a, b, c) {
  this.b = c || (a ? N(r(a) ? document.getElementById(a) : a) : N());
  Gh.call(this, this.b.C("DIV", {style:"position:absolute;display:none;"}));
  this.l = new M(1, 1);
  this.M = new Ub;
  this.h = null;
  a && Ih(this, a);
  null != b && Id(this.g(), b);
}
y(Hh, Gh);
var Jh = [];
f = Hh.prototype;
f.N = null;
f.ld = "goog-tooltip";
f.Mc = 0;
function Ih(a, b) {
  b = r(b) ? document.getElementById(b) : b;
  a.M.add(b);
  L(b, "mouseover", a.Hc, !1, a);
  L(b, "mouseout", a.Cb, !1, a);
  L(b, "mousemove", a.Wa, !1, a);
  L(b, "focus", a.Gc, !1, a);
  L(b, "blur", a.Cb, !1, a);
}
f.Wb = function() {
  return this.Mc;
};
f.lc = function(a) {
  var b = this.g();
  b && Gd(b);
  Hh.m.lc.call(this, a);
  a ? (b = this.b.a.body, b.insertBefore(a, b.lastChild), B(this.h), this.h = new uf(this.g()), xa(this, qa(B, this.h)), L(this.h, "focusin", this.Qa, void 0, this), L(this.h, "focusout", this.mb, void 0, this)) : (B(this.h), this.h = null);
};
function Kh(a) {
  return a.j ? a.ba ? 4 : 1 : a.T ? 3 : a.ba ? 2 : 0;
}
f.Gb = function(a) {
  if (!this.ba) {
    return !1;
  }
  var b = ge(this.g()), c = ie(this.g());
  return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height;
};
f.ic = function() {
  if (!wf.prototype.ic.call(this)) {
    return !1;
  }
  if (this.a) {
    for (var a, b = 0;a = Jh[b];b++) {
      Hd(a.g(), this.a) || a.za(!1);
    }
  }
  Za(Jh, this) || Jh.push(this);
  a = this.g();
  a.className = this.ld;
  this.Qa();
  L(a, "mouseover", this.ec, !1, this);
  L(a, "mouseout", this.Kc, !1, this);
  Lh(this);
  return !0;
};
f.hb = function() {
  $a(Jh, this);
  for (var a = this.g(), b, c = 0;b = Jh[c];c++) {
    b.a && Hd(a, b.a) && b.za(!1);
  }
  this.Pa && this.Pa.mb();
  gd(a, "mouseover", this.ec, !1, this);
  gd(a, "mouseout", this.Kc, !1, this);
  this.a = void 0;
  0 == Kh(this) && (this.pa = !1);
  wf.prototype.hb.call(this);
};
f.Qc = function(a, b) {
  this.a == a && this.M.contains(this.a) && (this.pa || !this.ae ? (this.za(!1), this.ba || (this.a = a, this.ab = b || Mh(this, 0) || void 0, this.ba && this.ib(), this.za(!0))) : this.a = void 0);
  this.j = void 0;
};
f.Pc = function(a) {
  this.T = void 0;
  if (a == this.a) {
    a = this.b;
    var b;
    a: {
      var c = a.a;
      try {
        b = c && c.activeElement;
        break a;
      } catch (d) {
      }
      b = null;
    }
    b = b && this.g() && a.contains(this.g(), b);
    null != this.N && (this.N == this.g() || this.M.contains(this.N)) || b || this.o && this.o.N || this.za(!1);
  }
};
function Nh(a, b) {
  var c = Rd(a.b);
  a.l.x = b.clientX + c.x;
  a.l.y = b.clientY + c.y;
}
f.Hc = function(a) {
  var b = Oh(this, a.target);
  this.N = b;
  this.Qa();
  b != this.a && (this.a = b, this.j || (this.j = sf(x(this.Qc, this, b, void 0), 500)), Ph(this), Nh(this, a));
};
function Oh(a, b) {
  try {
    for (;b && !a.M.contains(b);) {
      b = b.parentNode;
    }
    return b;
  } catch (c) {
    return null;
  }
}
f.Wa = function(a) {
  Nh(this, a);
  this.pa = !0;
};
f.Gc = function(a) {
  this.N = a = Oh(this, a.target);
  this.pa = !0;
  if (this.a != a) {
    this.a = a;
    var b = Mh(this, 1);
    this.Qa();
    this.j || (this.j = sf(x(this.Qc, this, a, b), 500));
    Ph(this);
  }
};
function Mh(a, b) {
  if (0 == b) {
    var c = a.l.clone();
    return new Qh(c);
  }
  return new Rh(a.N);
}
function Ph(a) {
  if (a.a) {
    for (var b, c = 0;b = Jh[c];c++) {
      Hd(b.g(), a.a) && (b.o = a, a.Pa = b);
    }
  }
}
f.Cb = function(a) {
  var b = Oh(this, a.target), c = Oh(this, a.j);
  b != c && (b == this.N && (this.N = null), Lh(this), this.pa = !1, !this.ba || a.j && Hd(this.g(), a.j) ? this.a = void 0 : this.mb());
};
f.ec = function() {
  var a = this.g();
  this.N != a && (this.Qa(), this.N = a);
};
f.Kc = function(a) {
  var b = this.g();
  this.N != b || a.j && Hd(b, a.j) || (this.N = null, this.mb());
};
function Lh(a) {
  a.j && (m.clearTimeout(a.j), a.j = void 0);
}
f.mb = function() {
  2 == Kh(this) && (this.T = sf(x(this.Pc, this, this.a), this.Wb()));
};
f.Qa = function() {
  this.T && (m.clearTimeout(this.T), this.T = void 0);
};
f.v = function() {
  var a;
  this.za(!1);
  Lh(this);
  for (var b = this.M.ja(), c = 0;a = b[c];c++) {
    gd(a, "mouseover", this.Hc, !1, this), gd(a, "mouseout", this.Cb, !1, this), gd(a, "mousemove", this.Wa, !1, this), gd(a, "focus", this.Gc, !1, this), gd(a, "blur", this.Cb, !1, this);
  }
  this.M.clear();
  this.g() && Gd(this.g());
  this.N = null;
  delete this.b;
  Hh.m.v.call(this);
};
function Qh(a, b) {
  Fh.call(this, a, b);
}
y(Qh, Fh);
Qh.prototype.a = function(a, b, c) {
  b = ce(a);
  b = fe(b);
  c = c ? new P(c.top + 10, c.right, c.bottom, c.left + 10) : new P(10, 0, 0, 10);
  Ch(this.b, a, 8, c, b, 9) & 496 && Ch(this.b, a, 8, c, b, 5);
};
function Rh(a) {
  Eh.call(this, a, 5);
}
y(Rh, Eh);
Rh.prototype.a = function(a, b, c) {
  var d = new M(10, 0);
  Ah(this.b, this.c, a, b, d, c, 9) & 496 && Ah(this.b, 4, a, 1, d, c, 5);
};
function Sh(a, b, c) {
  Hh.call(this, a, b, c);
}
y(Sh, Hh);
f = Sh.prototype;
f.vc = !1;
f.nb = !1;
f.Bb = function() {
  Sh.m.Bb.call(this);
  this.K = Vd(ke(this.g()));
  this.a && (this.Fa = Vd(ke(this.a)));
  this.nb = this.vc;
  L(this.b.a, "mousemove", this.Wa, !1, this);
};
f.hb = function() {
  gd(this.b.a, "mousemove", this.Wa, !1, this);
  this.Fa = this.K = null;
  this.nb = !1;
  Sh.m.hb.call(this);
};
f.Gb = function(a) {
  if (this.F) {
    var b = ge(this.g()), c = ie(this.g());
    return b.x - this.F.left <= a.x && a.x <= b.x + c.width + this.F.right && b.y - this.F.top <= a.y && a.y <= b.y + c.height + this.F.bottom;
  }
  return Sh.m.Gb.call(this, a);
};
function Th(a, b) {
  if (a.Fa && a.Fa.contains(b) || a.Gb(b)) {
    return !0;
  }
  var c = a.o;
  return !!c && c.Gb(b);
}
f.Pc = function(a) {
  this.T = void 0;
  a != this.a || Th(this, this.l) || this.N || this.o && this.o.N || G && 0 == this.l.x && 0 == this.l.y || this.za(!1);
};
f.Wa = function(a) {
  var b = this.ba;
  if (this.K) {
    var c = Rd(this.b), c = new M(a.clientX + c.x, a.clientY + c.y);
    Th(this, c) ? b = !1 : this.nb && (b = Td(this.K, c) >= Td(this.K, this.l));
  }
  if (b) {
    if (this.mb(), this.N = null, b = this.o) {
      b.N = null;
    }
  } else {
    3 == Kh(this) && this.Qa();
  }
  Sh.m.Wa.call(this, a);
};
f.ec = function() {
  this.N != this.g() && (this.nb = !1, this.N = this.g());
};
f.Wb = function() {
  return this.nb ? 100 : Sh.m.Wb.call(this);
};
function Uh() {
  Hh.call(this, void 0, void 0, void 0);
  var a = this.b;
  this.ca = a.a.createElement("PRE");
  this.U = a.C("BUTTON", null, "Close");
  L(this.U, "click", x(this.za, this, !1));
  a = a.C("DIV", null, this.ca, a.a.createElement("HR"), a.C("DIV", {style:"text-align: center;"}, this.U));
  this.g().appendChild(a);
}
y(Uh, Sh);
Uh.prototype.v = function() {
  id(this.U);
  delete this.U;
  delete this.ca;
  Uh.m.v.call(this);
};
function Vh() {
  S.call(this);
  this.c = new fh;
  this.la(this.c);
  this.B = new V(void 0, !0);
  Gf(this.B, "Delete session?");
  Hf(this.B, Rb("Are you sure you want to delete this session?"));
  L(this.B, Pf, this.Oa, !1, this);
  this.F = new lh("Delete Session");
  this.la(this.F);
  L(this.F, "action", x(this.B.Z, this.B, !0));
  this.h = new lh("Take Screenshot");
  this.la(this.h);
  L(this.h, "action", this.Pa, !1, this);
  this.o = new Uh;
  this.o.F = new P(5, 5, 5, 5);
  this.o.vc = !0;
  var a = this.o, b = new P(10, 0, 0, 0);
  null == b || b instanceof P ? a.Oa = b : a.Oa = new P(b, void 0, void 0, void 0);
  a.ba && a.ib();
  this.o.Mc = 250;
}
y(Vh, S);
Vh.prototype.v = function() {
  this.o.O();
  this.B.O();
  delete this.c;
  delete this.G;
  delete this.K;
  delete this.U;
  delete this.B;
  delete this.o;
  delete this.h;
  delete this.F;
  delete this.ca;
  Vh.m.v.call(this);
};
Vh.prototype.I = function() {
  this.h.I();
  this.F.I();
  this.c.I();
  var a = this.a;
  this.G = a.C("DIV", "goog-tab-content empty-view", "No Sessions");
  this.U = a.a.createElement("SPAN");
  this.ca = a.C("DIV", "todo", "\u00a0");
  this.ca.disabled = !0;
  this.c.c(this.U);
  var b;
  this.c.c(b = a.C("SPAN", "session-capabilities", "Capabilities"));
  this.c.c(this.h.g());
  this.c.c(this.F.g());
  this.K = a.C("DIV", "goog-tab-content", this.c.g(), this.ca);
  this.b = a.C("DIV", null, this.G, this.K, a.C("DIV", "goog-tab-bar-clear"));
  Wh(this, null);
  Ih(this.o, b);
};
function Wh(a, b) {
  var c = !!b;
  Q(a.G, !c);
  Q(a.K, c);
  if (b) {
    Id(a.U, b.P());
    for (var c = a.o.ca, d = wh(b.a || {}), e = "", g = 0;g < d.length;g++) {
      var h = d[g], e = e + (h instanceof Ob ? Qb(h) : h)
    }
    c.innerHTML = e;
    Xh(b.a, "takesScreenshot") ? (a.h.ka(!0), a.h.sa("")) : (a.h.ka(!1), a.h.sa("Screenshots not supported"));
  }
}
Vh.prototype.Oa = function(a) {
  "ok" == a.key && this.D("delete");
};
Vh.prototype.Pa = function() {
  this.D("screenshot");
};
function Yh(a) {
  ih.call(this, "Sessions");
  this.c = new bh($g, null);
  this.o = new Vh;
  this.B = new hh(a);
  this.G = this.a.C("BUTTON", null, "Create Session");
  this.K = this.a.C("BUTTON", null, "Refresh Sessions");
  this.F = new fh;
  this.h = [];
  this.ca = setInterval(x(this.$d, this), 300);
  this.la(this.c);
  this.la(this.o);
  this.la(this.F);
  this.ka(!1);
  this.F.c(this.G);
  this.F.c(this.K);
  L(this.G, "click", x(this.B.Z, this.B, !0));
  L(this.K, "click", x(this.D, this, "refresh"));
  L(this.c, "select", this.Rd, !1, this);
  L(this.B, "action", this.Jd, !1, this);
}
y(Yh, ih);
f = Yh.prototype;
f.v = function() {
  id(this.G);
  id(this.K);
  clearInterval(this.ca);
  this.B.O();
  delete this.B;
  delete this.c;
  delete this.o;
  delete this.F;
  delete this.h;
  delete this.ca;
  Yh.m.v.call(this);
};
f.uc = function() {
  this.c.I();
  this.o.I();
  this.F.I();
  return this.a.C("DIV", "session-container", this.F.g(), this.c.g(), this.o.g());
};
f.ka = function(a) {
  a ? (this.G.removeAttribute("disabled"), this.K.removeAttribute("disabled")) : (this.G.setAttribute("disabled", "disabled"), this.K.setAttribute("disabled", "disabled"));
};
function Zh(a) {
  return (a = a.c.aa) ? a.Ka : null;
}
f.$d = function() {
  if (this.h.length) {
    var a = this.h[0].Ja, a = 5 === a.length ? "." : a + ".";
    C(this.h, function(b) {
      var c = a;
      ng(b.g(), c);
      b.Ja = c;
    });
  }
};
function $h(a) {
  var b = ie(a.c.g());
  a = a.o;
  b = b.height + 20;
  Wd(a.G, "height", b + "px");
  Wd(a.K, "height", b + "px");
}
f.pc = function(a) {
  a = new ai(a);
  var b = this.h.shift(), c = He(this.c, b);
  0 > c ? this.c.la(a, !0) : (this.c.qb(a, c, !0), this.c.removeChild(b, !0));
  $h(this);
  eh(this.c, a);
};
function bi(a, b) {
  var c = new lb;
  C(b, function(a) {
    c.ra(a.P(), a);
  });
  for (var d = a.c, e = d.aa, g = [], h = Fe(d) - a.h.length, k = 0;k < h;++k) {
    g.push(U(d, k));
  }
  C(g, function(a) {
    var b = a.Ka.P(), g = pb(c, b);
    g ? (nb(c, b), a.Ka = g) : (d.removeChild(a, !0), e === a && (e = null));
  }, a);
  C(a.h, function(a) {
    d.removeChild(a, !0);
  });
  a.h = [];
  C(c.ja(), a.pc, a);
  e ? (Wh(a.o, e.Ka), eh(d, e)) : Fe(d) ? eh(d, U(d, 0)) : Wh(a.o, null);
}
f.Jd = function() {
  var a = ".";
  this.h.length && (a = this.h[0].Ja);
  a = new Fg(a, null, this.a);
  a.ka(!1);
  this.h.push(a);
  this.c.la(a, !0);
  $h(this);
  this.D(new Je("create", this, this.B.Yb()));
};
f.Rd = function() {
  var a = this.c.aa;
  Wh(this.o, a ? a.Ka : null);
};
function ai(a) {
  var b = Xh(a.a, "browserName") || "unknown browser", b = b.toLowerCase().replace(/(^|\b)[a-z]/g, function(a) {
    return a.toUpperCase();
  });
  Fg.call(this, b);
  this.Ka = a;
}
y(ai, Fg);
ai.prototype.v = function() {
  delete this.Ka;
  ai.m.v.call(this);
};
function ci(a, b) {
  S.call(this, b);
  this.h = a || "";
}
var di;
y(ci, S);
f = ci.prototype;
f.wa = null;
function ei() {
  null != di || (di = "placeholder" in document.createElement("INPUT"));
  return di;
}
f.Fb = !1;
f.I = function() {
  this.b = this.a.C("INPUT", {type:"text"});
};
f.V = function() {
  ci.m.V.call(this);
  var a = new te(this);
  a.w(this.g(), "focus", this.Jc);
  a.w(this.g(), "blur", this.nd);
  ei() ? this.c = a : (G && a.w(this.g(), ["keypress", "keydown", "keyup"], this.sd), a.w(yd(O(this.g())), "load", this.Ed), this.c = a, fi(this));
  gi(this);
  this.g().a = this;
};
f.ea = function() {
  ci.m.ea.call(this);
  this.c && (this.c.O(), this.c = null);
  this.g().a = null;
};
function fi(a) {
  !a.o && a.c && a.g().form && (a.c.w(a.g().form, "submit", a.td), a.o = !0);
}
f.v = function() {
  ci.m.v.call(this);
  this.c && (this.c.O(), this.c = null);
};
f.Jc = function() {
  this.Fb = !0;
  Re(this.g(), "label-input-label");
  if (!ei() && !hi(this) && !this.B) {
    var a = this, b = function() {
      a.g() && (a.g().value = "");
    };
    E ? sf(b, 10) : b();
  }
};
f.nd = function() {
  ei() || (this.c.na(this.g(), "click", this.Jc), this.wa = null);
  this.Fb = !1;
  gi(this);
};
f.sd = function(a) {
  27 == a.a && ("keydown" == a.type ? this.wa = this.g().value : "keypress" == a.type ? this.g().value = this.wa : "keyup" == a.type && (this.wa = null), a.b());
};
f.td = function() {
  hi(this) || (this.g().value = "", sf(this.md, 10, this));
};
f.md = function() {
  hi(this) || (this.g().value = this.h);
};
f.Ed = function() {
  gi(this);
};
function hi(a) {
  return !!a.g() && "" != a.g().value && a.g().value != a.h;
}
f.clear = function() {
  this.g().value = "";
  null != this.wa && (this.wa = "");
};
f.reset = function() {
  hi(this) && (this.clear(), gi(this));
};
function gi(a) {
  var b = a.g();
  ei() ? a.g().placeholder != a.h && (a.g().placeholder = a.h) : fi(a);
  Me(b, "label", a.h);
  hi(a) ? (b = a.g(), Re(b, "label-input-label")) : (a.B || a.Fb || (b = a.g(), Pe(b, "label-input-label")), ei() || sf(a.Xd, 10, a));
}
f.ka = function(a) {
  this.g().disabled = !a;
  var b = this.g();
  a ? Re(b, "label-input-label-disabled") : Pe(b, "label-input-label-disabled");
};
f.isEnabled = function() {
  return !this.g().disabled;
};
f.Xd = function() {
  !this.g() || hi(this) || this.Fb || (this.g().value = this.h);
};
function ii() {
  gh.call(this, "Open WebDriverJS Script");
  L(this, "show", this.Wd, !1, this);
  this.h = new ci("Script URL");
  this.la(this.h);
}
y(ii, gh);
f = ii.prototype;
f.v = function() {
  delete this.h;
  ii.m.v.call(this);
};
f.tc = function() {
  var a = Ad("A", {href:"https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs", target:"_blank"}, "WebDriverJS");
  this.h.I();
  Pe(this.h.g(), "url-input");
  var b = this.a;
  return b.C("DIV", null, b.C("P", null, "Open a page that has the ", a, " client. The page will be opened with the query parameters required to communicate with the server."), this.h.g());
};
f.Wd = function() {
  this.h.clear();
  this.h.g().focus();
  this.h.g().blur();
};
f.Yb = function() {
  var a = this.h;
  return null != a.wa ? a.wa : hi(a) ? a.g().value : "";
};
f.Lc = function() {
  return hi(this.h);
};
function ji() {
  lh.call(this, "Load Script");
  this.o = new ii;
  L(this.o, "action", this.G, !1, this);
  L(this, "action", x(this.o.Z, this.o, !0));
}
y(ji, lh);
ji.prototype.v = function() {
  this.o.O();
  delete this.o;
  ji.m.v.call(this);
};
ji.prototype.G = function() {
  this.D(new Je("loadscript", this, this.o.Yb()));
};
function ki(a) {
  this.a = a;
  this.b = {};
}
function li(a, b, c) {
  a.b[b] = c;
  return a;
}
;function mi() {
}
;function ni(a) {
  this.a = {};
  a && oi(this, a);
}
y(ni, mi);
function oi(a, b) {
  var c = b instanceof ni ? b.a : b, d;
  for (d in c) {
    if (c.hasOwnProperty(d)) {
      var e = a, g = d, h = c[d];
      null != h ? e.a[g] = h : delete e.a[g];
    }
  }
  return a;
}
function Xh(a, b) {
  var c = null;
  a.a.hasOwnProperty(b) && (c = a.a[b]);
  return null != c ? c : null;
}
ni.prototype.has = function(a) {
  return !!Xh(this, a);
};
function pi(a, b) {
  this.b = a;
  this.a = oi(new ni, b);
}
pi.prototype.P = function() {
  return this.b;
};
pi.prototype.toJSON = function() {
  return this.P();
};
function qi() {
  this.j = {};
}
qi.prototype.h = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1), d = this.j[a];
  if (d) {
    for (var e = 0;e < d.length;) {
      var g = d[e];
      g.Ra.apply(g.scope, c);
      d[e] === g && (d[e].Td ? d.splice(e, 1) : e += 1);
    }
  }
};
function ri(a, b) {
  var c = a.j[b];
  c || (c = a.j[b] = []);
  return c;
}
function si(a, b, c, d) {
  b = ri(a, b);
  for (var e = b.length, g = 0;g < e;++g) {
    if (b[g].Ra == c) {
      return a;
    }
  }
  b.push({Ra:c, scope:d, Td:!0});
  return a;
}
function ti(a, b, c, d) {
  return si(a, b, c, d);
}
qi.prototype.lb = function(a) {
  n(a) ? delete this.j[a] : this.j = {};
  return this;
};
if (!u(Error.captureStackTrace)) {
  try {
    throw Error();
  } catch (a) {
  }
}
;/*
 Portions of this code are from the Dojo toolkit, received under the
 BSD License:
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

   * Redistributions of source code must retain the above copyright notice,
     this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above copyright notice,
     this list of conditions and the following disclaimer in the documentation
     and/or other materials provided with the distribution.
   * Neither the name of the Dojo Foundation nor the names of its contributors
     may be used to endorse or promote products derived from this software
     without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
*/
function Z(a, b, c) {
  var d = pc;
  1 < a ? d = rc : 0 < a && (d = qc);
  "function" === typeof b && (b = b.bind(c));
  (a = ui) && a.log(d, b, void 0);
}
var ui = xc("webdriver.promise");
function vi(a) {
  ya.call(this, a);
  this.name = "CancellationError";
  this.a = !1;
}
y(vi, ya);
function wi(a, b) {
  var c;
  if (a instanceof vi) {
    return new vi(b ? b + ": " + a.message : a.message);
  }
  if (b) {
    return c = b, a && (c += ": " + a), new vi(c);
  }
  a && (c = a + "");
  return new vi(c);
}
function xi() {
  vi.call(this, "ControlFlow was reset");
  this.name = "FlowResetError";
  this.a = !0;
}
y(xi, vi);
function yi(a) {
  if (a instanceof yi) {
    return a;
  }
  var b = "";
  a && (b = ": " + ("string" === typeof a.message ? a.message : a));
  vi.call(this, "Task was discarded due to a previous failure" + b);
  this.name = "DiscardedTaskError";
  this.a = !0;
}
y(yi, vi);
function zi() {
  ya.call(this, "Multiple unhandled promise rejections reported");
  this.name = "MultipleUnhandledRejectionError";
}
y(zi, ya);
function Ai(a) {
  a.prototype.then = a.prototype.then;
  try {
    Object.defineProperty(a.prototype, "$webdriver_Thenable", {value:!0, enumerable:!1});
  } catch (b) {
    a.prototype.$webdriver_Thenable = !0;
  }
}
function Bi(a) {
  if (!a) {
    return !1;
  }
  try {
    return !!a.$webdriver_Thenable;
  } catch (b) {
    return !1;
  }
}
ba();
var Ci = Symbol("on cancel");
function Di(a, b) {
  w(this);
  this.j = b || Sa() || Ei;
  this.b = this.c = this.Mb = null;
  this.A = "pending";
  this.l = !1;
  this.ia = void 0;
  this.a = null;
  this[Ci] = null;
  try {
    var c = this;
    a(function(a) {
      Fi(c, "fulfilled", a);
    }, function(a) {
      Fi(c, "rejected", a);
    });
  } catch (d) {
    Fi(this, "rejected", d);
  }
}
f = Di.prototype;
f.toString = function() {
  return "Promise::" + w(this) + ' {[[PromiseStatus]]: "' + this.A + '"}';
};
function Fi(a, b, c) {
  if ("pending" === a.A) {
    c === a && (c = new TypeError("A promise may not resolve to itself"), b = "rejected");
    a.c = null;
    a.A = "blocked";
    if ("rejected" !== b) {
      if (Bi(c)) {
        c.then(a.ob.bind(a, "fulfilled"), a.ob.bind(a, "rejected"));
        return;
      }
      if (ka(c)) {
        try {
          var d = c.then;
        } catch (e) {
          a.A = "rejected";
          a.ia = e;
          Gi(a);
          return;
        }
        if ("function" === typeof d) {
          Hi(a, c, d);
          return;
        }
      }
    }
    "rejected" === b && (c instanceof Error || ka(c) && (r(c.message) || c.ce)) && c.stack && a.Mb && (c.stack += "\nFrom: " + (a.Mb.stack || a.Mb));
    a.A = b;
    a.ia = c;
    Gi(a);
  }
}
function Hi(a, b, c) {
  function d(b) {
    g || (g = !0, a.ob("rejected", b));
  }
  function e(b) {
    g || (g = !0, a.ob("fulfilled", b));
  }
  var g = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
}
f.ob = function(a, b) {
  "blocked" === this.A && (this.A = "pending", Fi(this, a, b));
};
function Gi(a) {
  Z(2, function() {
    return a + " scheduling notifications";
  }, a);
  a[Ci] = null;
  a.ia instanceof vi && a.ia.a && (a.b = null);
  a.a || (a.a = Ii(a.j));
  a.l || "rejected" !== a.A || a.ia instanceof vi || Ji(a.a, a);
  Ki(a.a, a);
}
f.cancel = function(a) {
  function b(a) {
    return "pending" === a.A || "blocked" === a.A;
  }
  b(this) && (this.c && b(this.c) ? this.c.cancel(a) : (a = wi(a), this[Ci] && (this[Ci](a), this[Ci] = null), "blocked" === this.A ? this.ob("rejected", a) : Fi(this, "rejected", a)));
};
f.Hb = function() {
  return "pending" === this.A;
};
f.then = function(a, b) {
  return Li(this, a, b, "then");
};
f.oc = function(a) {
  return Li(this, null, a, "catch");
};
f.Na = function(a) {
  return this.oc(a);
};
function Li(a, b, c, d) {
  if (!u(b) && !u(c)) {
    return a;
  }
  a.l = !0;
  a.a && Mi(a.a, a);
  b = new Ni(a.j, a.Hd.bind(a, b, c), d, void 0);
  b.a.c = a;
  if ("pending" === a.A || "blocked" === a.A) {
    a.b || (a.b = []), a.b.push(b), b.j = !0;
  }
  Oi(Ii(a.j), b);
  return b.a;
}
f.Hd = function(a, b) {
  var c = a;
  "rejected" === this.A && (c = b);
  if (u(c)) {
    return "GeneratorFunction" === c.constructor.name ? Pi(c, null, this.ia) : c(this.ia);
  }
  if ("rejected" === this.A) {
    throw this.ia;
  }
  return this.ia;
};
Ai(Di);
function Qi(a) {
  function b(a) {
    if (a === e) {
      throw new TypeError("May not resolve a Deferred with itself");
    }
  }
  var c, d;
  this.a = new Di(function(a, b) {
    c = a;
    d = b;
  }, a);
  var e = this;
  this.h = function(a) {
    b(a);
    c(a);
  };
  this.c = function(a) {
    b(a);
    d(a);
  };
}
f = Qi.prototype;
f.Hb = function() {
  return this.a.Hb();
};
f.cancel = function(a) {
  this.a.cancel(a);
};
f.then = function(a, b) {
  return this.a.then(a, b);
};
f.oc = function(a) {
  return this.a.oc(a);
};
f.Na = function(a) {
  return this.a.Na(a);
};
Ai(Qi);
function Ri() {
  this.j = {};
  this.l = this.c = this.a = this.b = null;
}
y(Ri, qi);
f = Ri.prototype;
f.toString = function() {
  return Si(this);
};
f.reset = function() {
  Ti(this, new xi);
  this.h(Ui);
  this.lb();
  this.c && (this.c.cancel(), this.c = null);
};
function Si(a) {
  function b(a, c) {
    var e = a.toString();
    a === d && (e = "(active) " + e);
    var l = c + "| ";
    a.S && (a.S.q.A !== Vi ? (e += "\n" + l + "(pending) " + a.S.Ca, e += "\n" + b(a.S.q, l + "| ")) : e += "\n" + l + "(blocked) " + a.S.Ca);
    a.$ && a.$.forEach(function(a) {
      e += "\n" + l + a;
    });
    a.ha && a.ha.forEach(function(a) {
      return e += "\n" + l + a;
    });
    return c + e;
  }
  var c = "ControlFlow::" + w(a), d = a.b;
  if (!a.a || !a.a.size) {
    return c;
  }
  a = fa(a.a);
  for (var e = a.next();!e.done;e = a.next()) {
    c += "\n" + b(e.value, "| ");
  }
  return c;
}
function Ii(a) {
  if (a.b) {
    return a.b;
  }
  a.b = new Wi(a);
  a.a || (a.a = new Set);
  a.a.add(a.b);
  ti(si(a.b, "end", a.Od, a), "error", a.Pd, a);
  nf(function() {
    return a.b = null;
  }, a);
  Xi(a.b);
  return a.b;
}
f.async = function(a, b, c) {
  nf(function() {
    this.b = null;
    var d = Ii(this);
    try {
      Yi(d, a.bind(b, c));
    } catch (g) {
      var e = wi(g, "Function passed to ControlFlow.async() threw");
      e.a = !0;
      Zi(d, e);
    } finally {
      this.b = null;
    }
  }, this);
};
f.Od = function(a) {
  var b = this;
  this.a && (this.a.delete(a), Z(1, function() {
    return a + " has finished";
  }), Z(1, function() {
    return b.a.size + " queues remain\n" + b;
  }, this), this.a.size || (this.c = new $i(this.Zd, this)));
};
f.Pd = function(a, b) {
  this.a && this.a.delete(b);
  Ti(this, wi(a, "There was an uncaught error in the control flow"));
  this.c && (this.c.cancel(), this.c = null);
  this.l && (clearInterval(this.l), this.l = null);
  ri(this, aj).length ? this.h(aj, a) : kf(a);
};
function Ti(a, b) {
  b.a = !0;
  if (a.a) {
    for (var c = fa(a.a), d = c.next();!d.done;d = c.next()) {
      d = d.value, d.lb(), Zi(d, b);
    }
    a.a.clear();
    a.a = null;
  }
}
f.Zd = function() {
  var a = this;
  Z(1, function() {
    return "Going idle: " + a;
  });
  this.l && (clearInterval(this.l), this.l = null);
  this.c = null;
  this.h(bj);
};
var bj = "idle", Ui = "reset", aj = "uncaughtException";
function $i(a, b) {
  this.a = !1;
  nf(function() {
    this.a || a.call(b);
  }, this);
}
$i.prototype.cancel = function() {
  this.a = !0;
};
function Ni(a, b, c, d) {
  Qi.call(this, a);
  this.o = b;
  this.l = c;
  this.b = null;
  this.j = !1;
  d && (a = this.a, c = d.top, b = Error(this.l), b.name = d.name, Error.captureStackTrace ? Error.captureStackTrace(b, c) : (b ? (d = b.stack || b.b || "", c = b + "\n", 0 == d.lastIndexOf(c, 0) && (d = d.substring(c.length))) : d = "", b.stack = b.toString(), d && (b.stack += "\n" + d)), a.Mb = b);
}
y(Ni, Qi);
Ni.prototype.toString = function() {
  return "Task::" + w(this) + "<" + this.l + ">";
};
var Vi = "finished";
function Wi(a) {
  this.j = {};
  w(this);
  w(this);
  this.a = a;
  this.ha = [];
  this.S = this.$ = null;
  this.A = "new";
  this.b = new Set;
}
y(Wi, qi);
Wi.prototype.toString = function() {
  return "TaskQueue::" + w(this);
};
function Ji(a, b) {
  Z(2, function() {
    return a + " registering unhandled rejection: " + b;
  }, a);
  a.b.add(b);
}
function Mi(a, b) {
  a.b.delete(b) && Z(2, function() {
    return a + " clearing unhandled rejection: " + b;
  }, a);
}
function Oi(a, b) {
  if ("new" !== a.A) {
    throw Error("TaskQueue has started: " + a);
  }
  if (b.b) {
    throw Error("Task is already scheduled in another queue");
  }
  a.ha.push(b);
  b.b = a;
  b.a[Ci] = a.l.bind(a, b);
  Z(1, function() {
    return a + ".enqueue(" + b + ")";
  }, a);
  Z(2, function() {
    return a.a.toString();
  }, a);
}
function Ki(a, b) {
  if (a.A === Vi) {
    throw Error("cannot interrupt a finished q(" + a + ")");
  }
  a.S && a.S.Ca.a === b && (a.S.Ca.a.a = null, a.S = null, nf(a.c, a));
  b.b && (b.b.forEach(function(a) {
    a.j = !1;
    a.b || (a.a[Ci] = this.l.bind(this, a), a.b === this && -1 !== this.ha.indexOf(a)) || (a.b && cj(a.b, a), a.b = this, this.$ || (this.$ = []), this.$.push(a));
  }, a), b.b = null, Z(2, function() {
    return a + " interrupted\n" + a.a;
  }, a));
}
function Xi(a) {
  if ("new" !== a.A) {
    throw Error("TaskQueue has already started");
  }
  nf(a.c, a);
}
function Zi(a, b) {
  var c;
  b instanceof xi ? c = b : c = new yi(b);
  a.$ && a.$.length && (a.$.forEach(function(a) {
    return a.c(c);
  }), a.$ = []);
  a.ha && a.ha.length && (a.ha.forEach(function(a) {
    return a.c(c);
  }), a.ha = []);
  a.S ? (Z(2, function() {
    return a + ".abort(); cancelling pending task";
  }, a), a.S.Ca.cancel(b)) : (Z(2, function() {
    return a + ".abort(); emitting error event";
  }, a), a.h("error", b, a));
}
Wi.prototype.c = function() {
  if (this.A !== Vi && (this.A = "started", null == this.S && !dj(this))) {
    var a;
    do {
      a = ej(this);
    } while (a && !a.a.Hb());
    if (a) {
      var b = this, c = new Wi(this.a);
      ti(ti(c, "end", function() {
        b.S && b.S.Ca.h(d);
      }), "error", function(a) {
        Bi(d) && d.cancel(wi(a));
        b.S.Ca.c(a);
      });
      Z(2, function() {
        return b + " created " + c + " for " + a;
      });
      var d = void 0;
      try {
        this.S = {Ca:a, q:c}, a.a.a = this, d = Yi(c, a.o), Xi(c);
      } catch (g) {
        Zi(c, g);
      }
    } else {
      var e = this;
      this.A = Vi;
      this.ha = [];
      this.$ = null;
      Z(2, function() {
        return e + ".emit(end)";
      }, this);
      this.h("end", this);
    }
  }
};
function Yi(a, b) {
  try {
    return Ta.push(a.a), a.a.b = a, b();
  } finally {
    a.a.b = null, Ta.pop();
  }
}
function dj(a) {
  if (!a.b.size) {
    return !1;
  }
  for (var b = new Set, c = fa(a.b), d = c.next();!d.done;d = c.next()) {
    b.add(d.value.ia);
  }
  a.b.clear();
  b = 1 === b.size ? b.values().next().value : new zi;
  Z(1, function() {
    return a + " aborting due to unhandled rejections";
  }, a);
  Zi(a, b);
  return !0;
}
function cj(a, b) {
  var c;
  if (a.$ && (c = a.$.indexOf(b), -1 != c)) {
    b.b = null;
    a.$.splice(c, 1);
    return;
  }
  c = a.ha.indexOf(b);
  -1 != c && (b.b = null, a.ha.splice(c, 1));
}
Wi.prototype.l = function(a, b) {
  this.S && this.S.Ca === a ? Zi(this.S.q, b) : cj(this, a);
};
function ej(a) {
  for (var b = void 0, c = {};;) {
    a.$ && (b = a.$.shift());
    !b && a.ha && (b = a.ha.shift());
    if (b && b.j) {
      c.Nb = a, Z(2, function(a) {
        return function() {
          return a.Nb + " skipping blocked task " + b;
        };
      }(c), a), b = b.b = null;
    } else {
      break;
    }
    c = {Nb:c.Nb};
  }
  return b;
}
var Ei = new Ri, Ta = [];
function Pi(a, b, c) {
  function d(a) {
    g(k.next, a);
  }
  function e(a) {
    g(k["throw"], a);
  }
  function g(a, b) {
    if (h.Hb()) {
      try {
        var c = a.call(k, b);
      } catch (g) {
        h.c(g);
        return;
      }
      if (c.done) {
        h.h(c.value);
      } else {
        var c = c.value, v = d, F = e;
        c && ka(c) && "function" === typeof c.then ? c.then(v, F) : c && ka(c) && u(c.dd) ? c.dd(v, F) : v && v(c);
      }
    }
  }
  if ("GeneratorFunction" !== a.constructor.name) {
    throw new TypeError("Input is not a GeneratorFunction: " + a.constructor.name);
  }
  var h = new Qi, k = a.apply(b, db(arguments, 2));
  d();
  return h.a;
}
;function fj(a, b) {
  A.call(this);
  this.b = xc("remote.ui.Client");
  this.h = new Dc;
  Ec(this.h, !0);
  this.M = a;
  this.o = b;
  this.c = new Ie;
  this.L = new Xf;
  this.a = new Yh(gj);
  this.j = new Uf;
  this.l = new ji;
  L(this.a, "create", this.Kd, !1, this);
  L(this.a, "delete", this.Ld, !1, this);
  L(this.a, "refresh", this.Vc, !1, this);
  L(this.a, "screenshot", this.Ud, !1, this);
  L(this.l, "loadscript", this.Nd, !1, this);
}
y(fj, A);
var gj = "android;chrome;firefox;internet explorer;iphone;opera".split(";");
f = fj.prototype;
f.v = function() {
  this.c.O();
  this.a.O();
  this.j.O();
  this.l.O();
  Ec(this.h, !1);
  delete this.b;
  delete this.o;
  delete this.h;
  delete this.a;
  delete this.c;
  delete this.j;
  delete this.l;
  fj.m.v.call(this);
};
function hj(a) {
  De(a.c, void 0);
  a.c.Kb(!1);
  De(a.a, void 0);
  De(a.L, void 0);
  De(a.l, void 0);
  a.a.o.c.c(a.l.g());
  ij(a).then(x(function() {
    this.a.ka(!0);
    this.Vc();
  }, a));
}
function jj(a, b) {
  a.c.Kb(!1);
  return kj(a.o, b).then(ua);
}
function lj(a, b, c) {
  var d = a.b;
  d && d.log(lc, b + "\n" + c, void 0);
  c = a.c;
  c.a.fd(c.g(), b);
  c.Lb();
  a.c.Kb(!0);
}
function ij(a) {
  nd(a.b, "Retrieving server status...");
  return jj(a, new ki("getStatus")).then(x(function(a) {
    var c = a.value || {};
    (a = c.os) && a.name && (a = a.name + (a.version ? " " + a.version : ""));
    c = c.build;
    Yf(this.L, a, c && c.version, c && c.revision);
  }, a));
}
f.Vc = function() {
  nd(this.b, "Refreshing sessions...");
  var a = this;
  jj(this, new ki("getSessions")).then(function(b) {
    b = b.value;
    b = Wa(b, function(a) {
      return new pi(a.id, a.capabilities);
    });
    bi(a.a, b);
  }).Na(function(b) {
    lj(a, "Unable to refresh session list.", b);
  });
};
f.Kd = function(a) {
  nd(this.b, "Creating new session for " + a.data.browserName);
  a = li(new ki("newSession"), "desiredCapabilities", a.data);
  var b = this;
  jj(this, a).then(function(a) {
    a = new pi(a.sessionId, a.value);
    b.a.pc(a);
  }).Na(function(a) {
    lj(b, "Unable to create new session.", a);
    a = b.a;
    var d = a.h.shift();
    d && (a.c.removeChild(d, !0), $h(a));
  });
};
f.Ld = function() {
  var a = Zh(this.a);
  if (a) {
    nd(this.b, "Deleting session: " + a.P());
    var b = li(new ki("quit"), "sessionId", a.P()), c = this;
    jj(this, b).then(function() {
      for (var b = c.a, e = b.c.aa, g, h = Fe(b.c), k = 0;k < h;++k) {
        var l = U(b.c, k);
        if (l.Ka.P() == a.P()) {
          g = l;
          break;
        }
      }
      g && (b.c.removeChild(g, !0), g.O(), e == g && Fe(b.c) ? (b = b.c, eh(b, U(b, 0))) : Wh(b.o, null));
    }).Na(function(a) {
      lj(c, "Unable to delete session.", a);
    });
  } else {
    md(this.b, "Cannot delete session; no session selected!");
  }
};
f.Nd = function(a) {
  var b = Zh(this.a);
  if (b) {
    a = new sb(a.data);
    a.b.add("wdsid", b.P());
    a.b.add("wdurl", this.M);
    var c = li(li(new ki("get"), "sessionId", b.P()), "url", a.toString());
    nd(this.b, "In session(" + b.P() + "), loading " + a);
    jj(this, c).Na(x(function(a) {
      lj(this, "Unable to load URL", a);
    }, this));
  } else {
    md(this.b, "Cannot load url: " + a.data + "; no session selected!");
  }
};
f.Ud = function() {
  var a = Zh(this.a);
  if (a) {
    nd(this.b, "Taking screenshot: " + a.P());
    a = li(new ki("screenshot"), "sessionId", a.P());
    Vf(this.j, Wf);
    this.j.Z(!0);
    var b = this;
    jj(this, a).then(function(a) {
      var d = b.j;
      a = a.value;
      if (d.ya) {
        Vf(d, 1);
        a = "data:image/png;base64," + a;
        var e = d.a;
        a = e.C("A", {href:a, target:"_blank"}, e.C("IMG", {src:a}));
        Hf(d, Rb(""));
        d.Ia().appendChild(a);
        Bf(d);
      }
    }).Na(function(a) {
      b.j.Z(!1);
      lj(b, "Unable to take screenshot.", a);
    });
  } else {
    md(this.b, "Cannot take screenshot; no session selected!");
  }
};
function mj(a) {
  this.a = a;
  this.b = {};
  this.c = xc("webdriver.http.Executor");
}
function kj(a, b) {
  var c = a.b[b.a] || nj[b.a];
  if (!c) {
    throw Error("Unrecognized command: " + b.a);
  }
  var d = b.b, e = oj(c.path, d), g = new pj(c.method, e, d), h = a.c;
  tc(h, function() {
    return ">>>\n" + g;
  });
  return qj(a.a, g).then(function(a) {
    tc(h, function() {
      return "<<<\n" + a;
    });
    return rj(a);
  });
}
function oj(a, b) {
  var c = a.match(/\/:(\w+)\b/g);
  if (c) {
    for (var d = 0;d < c.length;++d) {
      var e = c[d].substring(2);
      if (e in b) {
        var g = b[e];
        g && g.ELEMENT && (g = g.ELEMENT);
        a = a.replace(c[d], "/" + g);
        delete b[e];
      } else {
        throw Error("Missing required parameter: " + e);
      }
    }
  }
  return a;
}
function rj(a) {
  try {
    return JSON.parse(a.a);
  } catch (c) {
  }
  var b = {status:0, value:a.a.replace(/\r\n/g, "\n")};
  199 < a.status && 300 > a.status || (b.status = 404 == a.status ? 9 : 13);
  return b;
}
var nj = function() {
  function a(a) {
    return c("POST", a);
  }
  function b(a) {
    return c("GET", a);
  }
  function c(a, b) {
    return {method:a, path:b};
  }
  return (new function() {
    var a = {};
    this.put = function(b, c) {
      a[b] = c;
      return this;
    };
    this.ed = function() {
      return a;
    };
  }).put("getStatus", b("/status")).put("newSession", a("/session")).put("getSessions", b("/sessions")).put("getSessionCapabilities", b("/session/:sessionId")).put("quit", c("DELETE", "/session/:sessionId")).put("close", c("DELETE", "/session/:sessionId/window")).put("getCurrentWindowHandle", b("/session/:sessionId/window_handle")).put("getWindowHandles", b("/session/:sessionId/window_handles")).put("getCurrentUrl", b("/session/:sessionId/url")).put("get", a("/session/:sessionId/url")).put("goBack", 
  a("/session/:sessionId/back")).put("goForward", a("/session/:sessionId/forward")).put("refresh", a("/session/:sessionId/refresh")).put("addCookie", a("/session/:sessionId/cookie")).put("getCookies", b("/session/:sessionId/cookie")).put("deleteAllCookies", c("DELETE", "/session/:sessionId/cookie")).put("deleteCookie", c("DELETE", "/session/:sessionId/cookie/:name")).put("findElement", a("/session/:sessionId/element")).put("findElements", a("/session/:sessionId/elements")).put("getActiveElement", 
  a("/session/:sessionId/element/active")).put("findChildElement", a("/session/:sessionId/element/:id/element")).put("findChildElements", a("/session/:sessionId/element/:id/elements")).put("clearElement", a("/session/:sessionId/element/:id/clear")).put("clickElement", a("/session/:sessionId/element/:id/click")).put("sendKeysToElement", a("/session/:sessionId/element/:id/value")).put("submitElement", a("/session/:sessionId/element/:id/submit")).put("getElementText", b("/session/:sessionId/element/:id/text")).put("getElementTagName", 
  b("/session/:sessionId/element/:id/name")).put("isElementSelected", b("/session/:sessionId/element/:id/selected")).put("isElementEnabled", b("/session/:sessionId/element/:id/enabled")).put("isElementDisplayed", b("/session/:sessionId/element/:id/displayed")).put("getElementLocation", b("/session/:sessionId/element/:id/location")).put("getElementSize", b("/session/:sessionId/element/:id/size")).put("getElementAttribute", b("/session/:sessionId/element/:id/attribute/:name")).put("getElementValueOfCssProperty", 
  b("/session/:sessionId/element/:id/css/:propertyName")).put("elementEquals", b("/session/:sessionId/element/:id/equals/:other")).put("takeElementScreenshot", b("/session/:sessionId/element/:id/screenshot")).put("switchToWindow", a("/session/:sessionId/window")).put("maximizeWindow", a("/session/:sessionId/window/:windowHandle/maximize")).put("getWindowPosition", b("/session/:sessionId/window/:windowHandle/position")).put("setWindowPosition", a("/session/:sessionId/window/:windowHandle/position")).put("getWindowSize", 
  b("/session/:sessionId/window/:windowHandle/size")).put("setWindowSize", a("/session/:sessionId/window/:windowHandle/size")).put("switchToFrame", a("/session/:sessionId/frame")).put("getPageSource", b("/session/:sessionId/source")).put("getTitle", b("/session/:sessionId/title")).put("executeScript", a("/session/:sessionId/execute")).put("executeAsyncScript", a("/session/:sessionId/execute_async")).put("screenshot", b("/session/:sessionId/screenshot")).put("setTimeout", a("/session/:sessionId/timeouts")).put("setScriptTimeout", 
  a("/session/:sessionId/timeouts/async_script")).put("implicitlyWait", a("/session/:sessionId/timeouts/implicit_wait")).put("mouseMoveTo", a("/session/:sessionId/moveto")).put("mouseClick", a("/session/:sessionId/click")).put("mouseDoubleClick", a("/session/:sessionId/doubleclick")).put("mouseButtonDown", a("/session/:sessionId/buttondown")).put("mouseButtonUp", a("/session/:sessionId/buttonup")).put("mouseMoveTo", a("/session/:sessionId/moveto")).put("sendKeysToActiveElement", a("/session/:sessionId/keys")).put("touchSingleTap", 
  a("/session/:sessionId/touch/click")).put("touchDoubleTap", a("/session/:sessionId/touch/doubleclick")).put("touchDown", a("/session/:sessionId/touch/down")).put("touchUp", a("/session/:sessionId/touch/up")).put("touchMove", a("/session/:sessionId/touch/move")).put("touchScroll", a("/session/:sessionId/touch/scroll")).put("touchLongPress", a("/session/:sessionId/touch/longclick")).put("touchFlick", a("/session/:sessionId/touch/flick")).put("acceptAlert", a("/session/:sessionId/accept_alert")).put("dismissAlert", 
  a("/session/:sessionId/dismiss_alert")).put("getAlertText", b("/session/:sessionId/alert_text")).put("setAlertValue", a("/session/:sessionId/alert_text")).put("getLog", a("/session/:sessionId/log")).put("getAvailableLogTypes", b("/session/:sessionId/log/types")).put("getSessionLogs", a("/logs")).put("uploadFile", a("/session/:sessionId/file")).ed();
}();
function sj(a) {
  var b = [], c;
  for (c in a) {
    b.push(c + ": " + a[c]);
  }
  return b.join("\n");
}
function pj(a, b, c) {
  this.method = a;
  this.path = b;
  this.data = c || {};
  this.a = {Accept:"application/json; charset=utf-8"};
}
pj.prototype.toString = function() {
  return [this.method + " " + this.path + " HTTP/1.1", sj(this.a), "", JSON.stringify(this.data)].join("\n");
};
function tj(a, b, c) {
  this.status = a;
  this.a = c;
  this.b = {};
  for (var d in b) {
    this.b[d.toLowerCase()] = b[d];
  }
}
function uj(a) {
  var b = {};
  if (a.getAllResponseHeaders) {
    var c = a.getAllResponseHeaders();
    c && (c = c.replace(/\r\n/g, "\n").split("\n"), C(c, function(a) {
      a = a.split(/\s*:\s*/, 2);
      a[0] && (b[a[0]] = a[1] || "");
    }));
  }
  return new tj(a.status || 200, b, a.responseText.replace(/\0/g, ""));
}
tj.prototype.toString = function() {
  var a = sj(this.b), b = ["HTTP/1.1 " + this.status, a];
  a && b.push("");
  this.a && b.push(this.a);
  return b.join("\n");
};
function vj() {
}
;var wj;
function xj() {
}
y(xj, vj);
function yj() {
  var a;
  a: {
    var b = wj;
    if (!b.a && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0;d < c.length;d++) {
        var e = c[d];
        try {
          new ActiveXObject(e);
          a = b.a = e;
          break a;
        } catch (g) {
        }
      }
      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    a = b.a;
  }
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
}
wj = new xj;
function zj(a) {
  this.a = a;
}
function qj(a, b) {
  var c = a.a + b.path;
  return new Di(function(a, e) {
    var g = yj();
    g.open(b.method, c, !0);
    g.onload = function() {
      a(uj(g));
    };
    g.onerror = function() {
      e(Error(["Unable to send request: ", b.method, " ", c, "\nOriginal request:\n", b].join("")));
    };
    for (var h in b.a) {
      g.setRequestHeader(h, b.a[h] + "");
    }
    g.send(JSON.stringify(b.data));
  });
}
;function Aj() {
  var a = window.location, a = [a.protocol, "//", a.host, a.pathname.replace(/\/static\/resource(?:\/[^\/]*)?$/, "")].join(""), b = new mj(new zj(a));
  hj(new fj(a, b));
}
var Bj = ["init"], Cj = m;
Bj[0] in Cj || !Cj.execScript || Cj.execScript("var " + Bj[0]);
for (var Dj;Bj.length && (Dj = Bj.shift());) {
  !Bj.length && n(Aj) ? Cj[Dj] = Aj : Cj[Dj] ? Cj = Cj[Dj] : Cj = Cj[Dj] = {};
}
;
