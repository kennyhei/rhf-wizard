(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function r(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rh = { exports: {} }, Po = {}, Nh = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i = Symbol.for("react.element"), Yg = Symbol.for("react.portal"), Xg = Symbol.for("react.fragment"), Zg = Symbol.for("react.strict_mode"), qg = Symbol.for("react.profiler"), Jg = Symbol.for("react.provider"), e0 = Symbol.for("react.context"), t0 = Symbol.for("react.forward_ref"), n0 = Symbol.for("react.suspense"), r0 = Symbol.for("react.memo"), i0 = Symbol.for("react.lazy"), Gc = Symbol.iterator;
function s0(e) {
  return e === null || typeof e != "object" ? null : (e = Gc && e[Gc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Mh = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Lh = Object.assign, jh = {};
function Ir(e, t, n) {
  this.props = e, this.context = t, this.refs = jh, this.updater = n || Mh;
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ir.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ih() {
}
Ih.prototype = Ir.prototype;
function ou(e, t, n) {
  this.props = e, this.context = t, this.refs = jh, this.updater = n || Mh;
}
var lu = ou.prototype = new Ih();
lu.constructor = ou;
Lh(lu, Ir.prototype);
lu.isPureReactComponent = !0;
var Qc = Array.isArray, zh = Object.prototype.hasOwnProperty, au = { current: null }, $h = { key: !0, ref: !0, __self: !0, __source: !0 };
function bh(e, t, n) {
  var r, i = {}, s = null, o = null;
  if (t != null)
    for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t)
      zh.call(t, r) && !$h.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1)
    i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++)
      a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in l = e.defaultProps, l)
      i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: $i, type: e, key: s, ref: o, props: i, _owner: au.current };
}
function o0(e, t) {
  return { $$typeof: $i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function l0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yc = /\/+/g;
function tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? l0("" + e.key) : t.toString(36);
}
function ws(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $i:
          case Yg:
            o = !0;
        }
    }
  if (o)
    return o = e, i = i(o), e = r === "" ? "." + tl(o, 0) : r, Qc(i) ? (n = "", e != null && (n = e.replace(Yc, "$&/") + "/"), ws(i, t, n, "", function(u) {
      return u;
    })) : i != null && (uu(i) && (i = o0(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Yc, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Qc(e))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + tl(s, l);
      o += ws(s, t, n, a, i);
    }
  else if (a = s0(e), typeof a == "function")
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      s = s.value, a = r + tl(s, l++), o += ws(s, t, n, a, i);
  else if (s === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function qi(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return ws(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function a0(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ze = { current: null }, Ss = { transition: null }, u0 = { ReactCurrentDispatcher: ze, ReactCurrentBatchConfig: Ss, ReactCurrentOwner: au };
function Bh() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: qi, forEach: function(e, t, n) {
  qi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return qi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return qi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!uu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = Ir;
G.Fragment = Xg;
G.Profiler = qg;
G.PureComponent = ou;
G.StrictMode = Zg;
G.Suspense = n0;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u0;
G.act = Bh;
G.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Lh({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = au.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var l = e.type.defaultProps;
    for (a in t)
      zh.call(t, a) && !$h.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1)
    r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++)
      l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: $i, type: e.type, key: i, ref: s, props: r, _owner: o };
};
G.createContext = function(e) {
  return e = { $$typeof: e0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Jg, _context: e }, e.Consumer = e;
};
G.createElement = bh;
G.createFactory = function(e) {
  var t = bh.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: t0, render: e };
};
G.isValidElement = uu;
G.lazy = function(e) {
  return { $$typeof: i0, _payload: { _status: -1, _result: e }, _init: a0 };
};
G.memo = function(e, t) {
  return { $$typeof: r0, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = Ss.transition;
  Ss.transition = {};
  try {
    e();
  } finally {
    Ss.transition = t;
  }
};
G.unstable_act = Bh;
G.useCallback = function(e, t) {
  return ze.current.useCallback(e, t);
};
G.useContext = function(e) {
  return ze.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return ze.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return ze.current.useEffect(e, t);
};
G.useId = function() {
  return ze.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return ze.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return ze.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return ze.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return ze.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return ze.current.useRef(e);
};
G.useState = function(e) {
  return ze.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return ze.current.useTransition();
};
G.version = "18.3.1";
Nh.exports = G;
var V = Nh.exports;
const pe = /* @__PURE__ */ Oh(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c0 = V, f0 = Symbol.for("react.element"), d0 = Symbol.for("react.fragment"), h0 = Object.prototype.hasOwnProperty, p0 = c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uh(e, t, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t)
    h0.call(t, r) && !m0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: f0, type: e, key: s, ref: o, props: i, _owner: p0.current };
}
Po.Fragment = d0;
Po.jsx = Uh;
Po.jsxs = Uh;
Rh.exports = Po;
var D = Rh.exports, Ql = {}, Wh = { exports: {} }, tt = {}, Hh = { exports: {} }, Kh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(C, I) {
    var W = C.length;
    C.push(I);
    e:
      for (; 0 < W; ) {
        var ee = W - 1 >>> 1, ne = C[ee];
        if (0 < i(ne, I))
          C[ee] = I, C[W] = ne, W = ee;
        else
          break e;
      }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0)
      return null;
    var I = C[0], W = C.pop();
    if (W !== I) {
      C[0] = W;
      e:
        for (var ee = 0, ne = C.length, An = ne >>> 1; ee < An; ) {
          var kt = 2 * (ee + 1) - 1, Br = C[kt], dt = kt + 1, Fn = C[dt];
          if (0 > i(Br, W))
            dt < ne && 0 > i(Fn, Br) ? (C[ee] = Fn, C[dt] = W, ee = dt) : (C[ee] = Br, C[kt] = W, ee = kt);
          else if (dt < ne && 0 > i(Fn, W))
            C[ee] = Fn, C[dt] = W, ee = dt;
          else
            break e;
        }
    }
    return I;
  }
  function i(C, I) {
    var W = C.sortIndex - I.sortIndex;
    return W !== 0 ? W : C.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, l = o.now();
    e.unstable_now = function() {
      return o.now() - l;
    };
  }
  var a = [], u = [], c = 1, f = null, d = 3, y = !1, v = !1, x = !1, E = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null)
        r(u);
      else if (I.startTime <= C)
        r(u), I.sortIndex = I.expirationTime, t(a, I);
      else
        break;
      I = n(u);
    }
  }
  function w(C) {
    if (x = !1, p(C), !v)
      if (n(a) !== null)
        v = !0, te(k);
      else {
        var I = n(u);
        I !== null && B(w, I.startTime - C);
      }
  }
  function k(C, I) {
    v = !1, x && (x = !1, m(P), P = -1), y = !0;
    var W = d;
    try {
      for (p(I), f = n(a); f !== null && (!(f.expirationTime > I) || C && !H()); ) {
        var ee = f.callback;
        if (typeof ee == "function") {
          f.callback = null, d = f.priorityLevel;
          var ne = ee(f.expirationTime <= I);
          I = e.unstable_now(), typeof ne == "function" ? f.callback = ne : f === n(a) && r(a), p(I);
        } else
          r(a);
        f = n(a);
      }
      if (f !== null)
        var An = !0;
      else {
        var kt = n(u);
        kt !== null && B(w, kt.startTime - I), An = !1;
      }
      return An;
    } finally {
      f = null, d = W, y = !1;
    }
  }
  var A = !1, O = null, P = -1, b = 5, M = -1;
  function H() {
    return !(e.unstable_now() - M < b);
  }
  function z() {
    if (O !== null) {
      var C = e.unstable_now();
      M = C;
      var I = !0;
      try {
        I = O(!0, C);
      } finally {
        I ? K() : (A = !1, O = null);
      }
    } else
      A = !1;
  }
  var K;
  if (typeof h == "function")
    K = function() {
      h(z);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(), Q = X.port2;
    X.port1.onmessage = z, K = function() {
      Q.postMessage(null);
    };
  } else
    K = function() {
      E(z, 0);
    };
  function te(C) {
    O = C, A || (A = !0, K());
  }
  function B(C, I) {
    P = E(function() {
      C(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    v || y || (v = !0, te(k));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(C) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = d;
    }
    var W = d;
    d = I;
    try {
      return C();
    } finally {
      d = W;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, I) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var W = d;
    d = C;
    try {
      return I();
    } finally {
      d = W;
    }
  }, e.unstable_scheduleCallback = function(C, I, W) {
    var ee = e.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ee + W : ee) : W = ee, C) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = W + ne, C = { id: c++, callback: I, priorityLevel: C, startTime: W, expirationTime: ne, sortIndex: -1 }, W > ee ? (C.sortIndex = W, t(u, C), n(a) === null && C === n(u) && (x ? (m(P), P = -1) : x = !0, B(w, W - ee))) : (C.sortIndex = ne, t(a, C), v || y || (v = !0, te(k))), C;
  }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(C) {
    var I = d;
    return function() {
      var W = d;
      d = I;
      try {
        return C.apply(this, arguments);
      } finally {
        d = W;
      }
    };
  };
})(Kh);
Hh.exports = Kh;
var y0 = Hh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0 = V, Je = y0;
function _(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Gh = /* @__PURE__ */ new Set(), vi = {};
function Xn(e, t) {
  Fr(e, t), Fr(e + "Capture", t);
}
function Fr(e, t) {
  for (vi[e] = t, e = 0; e < t.length; e++)
    Gh.add(t[e]);
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yl = Object.prototype.hasOwnProperty, v0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xc = {}, Zc = {};
function x0(e) {
  return Yl.call(Zc, e) ? !0 : Yl.call(Xc, e) ? !1 : v0.test(e) ? Zc[e] = !0 : (Xc[e] = !0, !1);
}
function w0(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function S0(e, t, n, r) {
  if (t === null || typeof t > "u" || w0(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ae[e] = new $e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ae[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ae[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ae[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ae[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ae[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ae[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ae[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ae[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    cu,
    fu
  );
  Ae[t] = new $e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(cu, fu);
  Ae[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(cu, fu);
  Ae[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ae[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ae[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var i = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (S0(t, n, i, r) && (n = null), r || i === null ? x0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ji = Symbol.for("react.element"), sr = Symbol.for("react.portal"), or = Symbol.for("react.fragment"), hu = Symbol.for("react.strict_mode"), Xl = Symbol.for("react.profiler"), Qh = Symbol.for("react.provider"), Yh = Symbol.for("react.context"), pu = Symbol.for("react.forward_ref"), Zl = Symbol.for("react.suspense"), ql = Symbol.for("react.suspense_list"), mu = Symbol.for("react.memo"), Jt = Symbol.for("react.lazy"), Xh = Symbol.for("react.offscreen"), qc = Symbol.iterator;
function Ur(e) {
  return e === null || typeof e != "object" ? null : (e = qc && e[qc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fe = Object.assign, nl;
function Jr(e) {
  if (nl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      nl = t && t[1] || "";
    }
  return `
` + nl + e;
}
var rl = !1;
function il(e, t) {
  if (!e || rl)
    return "";
  rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if (o--, l--, 0 > l || i[o] !== s[l]) {
                var a = `
` + i[o].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    rl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function k0(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = il(e.type, !1), e;
    case 11:
      return e = il(e.type.render, !1), e;
    case 1:
      return e = il(e.type, !0), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case or:
      return "Fragment";
    case sr:
      return "Portal";
    case Xl:
      return "Profiler";
    case hu:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yh:
        return (e.displayName || "Context") + ".Consumer";
      case Qh:
        return (e._context.displayName || "Context") + ".Provider";
      case pu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case mu:
        return t = e.displayName || null, t !== null ? t : Jl(e.type) || "Memo";
      case Jt:
        t = e._payload, e = e._init;
        try {
          return Jl(e(t));
        } catch {
        }
    }
  return null;
}
function T0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(t);
    case 8:
      return t === hu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function E0(e) {
  var t = Zh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, s.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function es(e) {
  e._valueTracker || (e._valueTracker = E0(e));
}
function qh(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Zh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Is(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ea(e, t) {
  var n = t.checked;
  return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Jc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Jh(e, t) {
  t = t.checked, t != null && du(e, "checked", t, !1);
}
function ta(e, t) {
  Jh(e, t);
  var n = wn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? na(e, t.type, n) : t.hasOwnProperty("defaultValue") && na(e, t.type, wn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ef(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function na(e, t, n) {
  (t !== "number" || Is(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ei = Array.isArray;
function Tr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ra(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(_(91));
  return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(_(92));
      if (ei(n)) {
        if (1 < n.length)
          throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wn(n) };
}
function ep(e, t) {
  var n = wn(t.value), r = wn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? tp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ts, np = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (ts = ts || document.createElement("div"), ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ts.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function xi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ii = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, P0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ii).forEach(function(e) {
  P0.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ii[t] = ii[e];
  });
});
function rp(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ii.hasOwnProperty(e) && ii[e] ? ("" + t).trim() : t + "px";
}
function ip(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = rp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var C0 = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function sa(e, t) {
  if (t) {
    if (C0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(_(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(_(62));
  }
}
function oa(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var la = null;
function yu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var aa = null, Er = null, Pr = null;
function rf(e) {
  if (e = Ui(e)) {
    if (typeof aa != "function")
      throw Error(_(280));
    var t = e.stateNode;
    t && (t = Do(t), aa(e.stateNode, e.type, t));
  }
}
function sp(e) {
  Er ? Pr ? Pr.push(e) : Pr = [e] : Er = e;
}
function op() {
  if (Er) {
    var e = Er, t = Pr;
    if (Pr = Er = null, rf(e), t)
      for (e = 0; e < t.length; e++)
        rf(t[e]);
  }
}
function lp(e, t) {
  return e(t);
}
function ap() {
}
var sl = !1;
function up(e, t, n) {
  if (sl)
    return e(t, n);
  sl = !0;
  try {
    return lp(e, t, n);
  } finally {
    sl = !1, (Er !== null || Pr !== null) && (ap(), op());
  }
}
function wi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Do(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(_(231, t, typeof n));
  return n;
}
var ua = !1;
if (Wt)
  try {
    var Wr = {};
    Object.defineProperty(Wr, "passive", { get: function() {
      ua = !0;
    } }), window.addEventListener("test", Wr, Wr), window.removeEventListener("test", Wr, Wr);
  } catch {
    ua = !1;
  }
function _0(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var si = !1, zs = null, $s = !1, ca = null, A0 = { onError: function(e) {
  si = !0, zs = e;
} };
function F0(e, t, n, r, i, s, o, l, a) {
  si = !1, zs = null, _0.apply(A0, arguments);
}
function D0(e, t, n, r, i, s, o, l, a) {
  if (F0.apply(this, arguments), si) {
    if (si) {
      var u = zs;
      si = !1, zs = null;
    } else
      throw Error(_(198));
    $s || ($s = !0, ca = u);
  }
}
function Zn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function sf(e) {
  if (Zn(e) !== e)
    throw Error(_(188));
}
function V0(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Zn(e), t === null)
      throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null)
      break;
    var s = i.alternate;
    if (s === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n)
          return sf(i), e;
        if (s === r)
          return sf(i), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return)
      n = i, r = s;
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          o = !0, n = i, r = s;
          break;
        }
        if (l === r) {
          o = !0, r = i, n = s;
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            o = !0, n = s, r = i;
            break;
          }
          if (l === r) {
            o = !0, r = s, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!o)
          throw Error(_(189));
      }
    }
    if (n.alternate !== r)
      throw Error(_(190));
  }
  if (n.tag !== 3)
    throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function fp(e) {
  return e = V0(e), e !== null ? dp(e) : null;
}
function dp(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = dp(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var hp = Je.unstable_scheduleCallback, of = Je.unstable_cancelCallback, O0 = Je.unstable_shouldYield, R0 = Je.unstable_requestPaint, ye = Je.unstable_now, N0 = Je.unstable_getCurrentPriorityLevel, gu = Je.unstable_ImmediatePriority, pp = Je.unstable_UserBlockingPriority, bs = Je.unstable_NormalPriority, M0 = Je.unstable_LowPriority, mp = Je.unstable_IdlePriority, Co = null, At = null;
function L0(e) {
  if (At && typeof At.onCommitFiberRoot == "function")
    try {
      At.onCommitFiberRoot(Co, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var vt = Math.clz32 ? Math.clz32 : z0, j0 = Math.log, I0 = Math.LN2;
function z0(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (j0(e) / I0 | 0) | 0;
}
var ns = 64, rs = 4194304;
function ti(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Bs(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? r = ti(l) : (s &= o, s !== 0 && (r = ti(s)));
  } else
    o = n & ~i, o !== 0 ? r = ti(o) : s !== 0 && (r = ti(s));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - vt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function $0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function b0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - vt(s), l = 1 << o, a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = $0(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function fa(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function yp() {
  var e = ns;
  return ns <<= 1, !(ns & 4194240) && (ns = 64), e;
}
function ol(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function bi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n;
}
function B0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - vt(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function vu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var J = 0;
function gp(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var vp, xu, xp, wp, Sp, da = !1, is = [], un = null, cn = null, fn = null, Si = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), nn = [], U0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function lf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      fn = null;
      break;
    case "pointerover":
    case "pointerout":
      Si.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ki.delete(t.pointerId);
  }
}
function Hr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = Ui(t), t !== null && xu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function W0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return un = Hr(un, e, t, n, r, i), !0;
    case "dragenter":
      return cn = Hr(cn, e, t, n, r, i), !0;
    case "mouseover":
      return fn = Hr(fn, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return Si.set(s, Hr(Si.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, ki.set(s, Hr(ki.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function kp(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = Zn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = cp(n), t !== null) {
          e.blockedOn = t, Sp(e.priority, function() {
            xp(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ks(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ha(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      la = r, n.target.dispatchEvent(r), la = null;
    } else
      return t = Ui(n), t !== null && xu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function af(e, t, n) {
  ks(e) && n.delete(t);
}
function H0() {
  da = !1, un !== null && ks(un) && (un = null), cn !== null && ks(cn) && (cn = null), fn !== null && ks(fn) && (fn = null), Si.forEach(af), ki.forEach(af);
}
function Kr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, da || (da = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, H0)));
}
function Ti(e) {
  function t(i) {
    return Kr(i, e);
  }
  if (0 < is.length) {
    Kr(is[0], e);
    for (var n = 1; n < is.length; n++) {
      var r = is[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (un !== null && Kr(un, e), cn !== null && Kr(cn, e), fn !== null && Kr(fn, e), Si.forEach(t), ki.forEach(t), n = 0; n < nn.length; n++)
    r = nn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && (n = nn[0], n.blockedOn === null); )
    kp(n), n.blockedOn === null && nn.shift();
}
var Cr = Yt.ReactCurrentBatchConfig, Us = !0;
function K0(e, t, n, r) {
  var i = J, s = Cr.transition;
  Cr.transition = null;
  try {
    J = 1, wu(e, t, n, r);
  } finally {
    J = i, Cr.transition = s;
  }
}
function G0(e, t, n, r) {
  var i = J, s = Cr.transition;
  Cr.transition = null;
  try {
    J = 4, wu(e, t, n, r);
  } finally {
    J = i, Cr.transition = s;
  }
}
function wu(e, t, n, r) {
  if (Us) {
    var i = ha(e, t, n, r);
    if (i === null)
      yl(e, t, r, Ws, n), lf(e, r);
    else if (W0(i, e, t, n, r))
      r.stopPropagation();
    else if (lf(e, r), t & 4 && -1 < U0.indexOf(e)) {
      for (; i !== null; ) {
        var s = Ui(i);
        if (s !== null && vp(s), s = ha(e, t, n, r), s === null && yl(e, t, r, Ws, n), s === i)
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else
      yl(e, t, r, null, n);
  }
}
var Ws = null;
function ha(e, t, n, r) {
  if (Ws = null, e = yu(r), e = Ln(e), e !== null)
    if (t = Zn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = cp(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ws = e, null;
}
function Tp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (N0()) {
        case gu:
          return 1;
        case pp:
          return 4;
        case bs:
        case M0:
          return 16;
        case mp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var on = null, Su = null, Ts = null;
function Ep() {
  if (Ts)
    return Ts;
  var e, t = Su, n = t.length, r, i = "value" in on ? on.value : on.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
    ;
  return Ts = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Es(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ss() {
  return !0;
}
function uf() {
  return !1;
}
function nt(e) {
  function t(n, r, i, s, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var l in e)
      e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ss : uf, this.isPropagationStopped = uf, this;
  }
  return fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ss);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ss);
  }, persist: function() {
  }, isPersistent: ss }), t;
}
var zr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ku = nt(zr), Bi = fe({}, zr, { view: 0, detail: 0 }), Q0 = nt(Bi), ll, al, Gr, _o = fe({}, Bi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Gr && (Gr && e.type === "mousemove" ? (ll = e.screenX - Gr.screenX, al = e.screenY - Gr.screenY) : al = ll = 0, Gr = e), ll);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : al;
} }), cf = nt(_o), Y0 = fe({}, _o, { dataTransfer: 0 }), X0 = nt(Y0), Z0 = fe({}, Bi, { relatedTarget: 0 }), ul = nt(Z0), q0 = fe({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), J0 = nt(q0), ev = fe({}, zr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), tv = nt(ev), nv = fe({}, zr, { data: 0 }), ff = nt(nv), rv = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, iv = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
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
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, sv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ov(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sv[e]) ? !!t[e] : !1;
}
function Tu() {
  return ov;
}
var lv = fe({}, Bi, { key: function(e) {
  if (e.key) {
    var t = rv[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Es(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iv[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tu, charCode: function(e) {
  return e.type === "keypress" ? Es(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Es(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), av = nt(lv), uv = fe({}, _o, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), df = nt(uv), cv = fe({}, Bi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tu }), fv = nt(cv), dv = fe({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hv = nt(dv), pv = fe({}, _o, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mv = nt(pv), yv = [9, 13, 27, 32], Eu = Wt && "CompositionEvent" in window, oi = null;
Wt && "documentMode" in document && (oi = document.documentMode);
var gv = Wt && "TextEvent" in window && !oi, Pp = Wt && (!Eu || oi && 8 < oi && 11 >= oi), hf = " ", pf = !1;
function Cp(e, t) {
  switch (e) {
    case "keyup":
      return yv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _p(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var lr = !1;
function vv(e, t) {
  switch (e) {
    case "compositionend":
      return _p(t);
    case "keypress":
      return t.which !== 32 ? null : (pf = !0, hf);
    case "textInput":
      return e = t.data, e === hf && pf ? null : e;
    default:
      return null;
  }
}
function xv(e, t) {
  if (lr)
    return e === "compositionend" || !Eu && Cp(e, t) ? (e = Ep(), Ts = Su = on = null, lr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Pp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function mf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wv[e.type] : t === "textarea";
}
function Ap(e, t, n, r) {
  sp(r), t = Hs(t, "onChange"), 0 < t.length && (n = new ku("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var li = null, Ei = null;
function Sv(e) {
  zp(e, 0);
}
function Ao(e) {
  var t = cr(e);
  if (qh(t))
    return e;
}
function kv(e, t) {
  if (e === "change")
    return t;
}
var Fp = !1;
if (Wt) {
  var cl;
  if (Wt) {
    var fl = "oninput" in document;
    if (!fl) {
      var yf = document.createElement("div");
      yf.setAttribute("oninput", "return;"), fl = typeof yf.oninput == "function";
    }
    cl = fl;
  } else
    cl = !1;
  Fp = cl && (!document.documentMode || 9 < document.documentMode);
}
function gf() {
  li && (li.detachEvent("onpropertychange", Dp), Ei = li = null);
}
function Dp(e) {
  if (e.propertyName === "value" && Ao(Ei)) {
    var t = [];
    Ap(t, Ei, e, yu(e)), up(Sv, t);
  }
}
function Tv(e, t, n) {
  e === "focusin" ? (gf(), li = t, Ei = n, li.attachEvent("onpropertychange", Dp)) : e === "focusout" && gf();
}
function Ev(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ao(Ei);
}
function Pv(e, t) {
  if (e === "click")
    return Ao(t);
}
function Cv(e, t) {
  if (e === "input" || e === "change")
    return Ao(t);
}
function _v(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var wt = typeof Object.is == "function" ? Object.is : _v;
function Pi(e, t) {
  if (wt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Yl.call(t, i) || !wt(e[i], t[i]))
      return !1;
  }
  return !0;
}
function vf(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function xf(e, t) {
  var n = vf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = vf(n);
  }
}
function Vp(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Op() {
  for (var e = window, t = Is(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Is(e.document);
  }
  return t;
}
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Av(e) {
  var t = Op(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Vp(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = xf(n, s);
        var o = xf(
          n,
          r
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Fv = Wt && "documentMode" in document && 11 >= document.documentMode, ar = null, pa = null, ai = null, ma = !1;
function wf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ma || ar == null || ar !== Is(r) || (r = ar, "selectionStart" in r && Pu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ai && Pi(ai, r) || (ai = r, r = Hs(pa, "onSelect"), 0 < r.length && (t = new ku("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ar)));
}
function os(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ur = { animationend: os("Animation", "AnimationEnd"), animationiteration: os("Animation", "AnimationIteration"), animationstart: os("Animation", "AnimationStart"), transitionend: os("Transition", "TransitionEnd") }, dl = {}, Rp = {};
Wt && (Rp = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition);
function Fo(e) {
  if (dl[e])
    return dl[e];
  if (!ur[e])
    return e;
  var t = ur[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Rp)
      return dl[e] = t[n];
  return e;
}
var Np = Fo("animationend"), Mp = Fo("animationiteration"), Lp = Fo("animationstart"), jp = Fo("transitionend"), Ip = /* @__PURE__ */ new Map(), Sf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function En(e, t) {
  Ip.set(e, t), Xn(t, [e]);
}
for (var hl = 0; hl < Sf.length; hl++) {
  var pl = Sf[hl], Dv = pl.toLowerCase(), Vv = pl[0].toUpperCase() + pl.slice(1);
  En(Dv, "on" + Vv);
}
En(Np, "onAnimationEnd");
En(Mp, "onAnimationIteration");
En(Lp, "onAnimationStart");
En("dblclick", "onDoubleClick");
En("focusin", "onFocus");
En("focusout", "onBlur");
En(jp, "onTransitionEnd");
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
Xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ov = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));
function kf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, D0(r, t, void 0, e), e.currentTarget = null;
}
function zp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o], a = l.instance, u = l.currentTarget;
          if (l = l.listener, a !== s && i.isPropagationStopped())
            break e;
          kf(i, l, u), s = a;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (l = r[o], a = l.instance, u = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped())
            break e;
          kf(i, l, u), s = a;
        }
    }
  }
  if ($s)
    throw e = ca, $s = !1, ca = null, e;
}
function ie(e, t) {
  var n = t[wa];
  n === void 0 && (n = t[wa] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || ($p(t, e, 2, !1), n.add(r));
}
function ml(e, t, n) {
  var r = 0;
  t && (r |= 4), $p(n, e, r, t);
}
var ls = "_reactListening" + Math.random().toString(36).slice(2);
function Ci(e) {
  if (!e[ls]) {
    e[ls] = !0, Gh.forEach(function(n) {
      n !== "selectionchange" && (Ov.has(n) || ml(n, !1, e), ml(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ls] || (t[ls] = !0, ml("selectionchange", !1, t));
  }
}
function $p(e, t, n, r) {
  switch (Tp(t)) {
    case 1:
      var i = K0;
      break;
    case 4:
      i = G0;
      break;
    default:
      i = wu;
  }
  n = i.bind(null, t, n, e), i = void 0, !ua || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function yl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var l = r.stateNode.containerInfo;
          if (l === i || l.nodeType === 8 && l.parentNode === i)
            break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var a = o.tag;
              if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i))
                return;
              o = o.return;
            }
          for (; l !== null; ) {
            if (o = Ln(l), o === null)
              return;
            if (a = o.tag, a === 5 || a === 6) {
              r = s = o;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
  up(function() {
    var u = s, c = yu(n), f = [];
    e: {
      var d = Ip.get(e);
      if (d !== void 0) {
        var y = ku, v = e;
        switch (e) {
          case "keypress":
            if (Es(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = av;
            break;
          case "focusin":
            v = "focus", y = ul;
            break;
          case "focusout":
            v = "blur", y = ul;
            break;
          case "beforeblur":
          case "afterblur":
            y = ul;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = cf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = X0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = fv;
            break;
          case Np:
          case Mp:
          case Lp:
            y = J0;
            break;
          case jp:
            y = hv;
            break;
          case "scroll":
            y = Q0;
            break;
          case "wheel":
            y = mv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = tv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = df;
        }
        var x = (t & 4) !== 0, E = !x && e === "scroll", m = x ? d !== null ? d + "Capture" : null : d;
        x = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, m !== null && (w = wi(h, m), w != null && x.push(_i(h, w, p)))), E)
            break;
          h = h.return;
        }
        0 < x.length && (d = new y(d, v, null, n, c), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && n !== la && (v = n.relatedTarget || n.fromElement) && (Ln(v) || v[Ht]))
          break e;
        if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = u, v = v ? Ln(v) : null, v !== null && (E = Zn(v), v !== E || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
          if (x = cf, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (x = df, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), E = y == null ? d : cr(y), p = v == null ? d : cr(v), d = new x(w, h + "leave", y, n, c), d.target = E, d.relatedTarget = p, w = null, Ln(c) === u && (x = new x(m, h + "enter", v, n, c), x.target = p, x.relatedTarget = E, w = x), E = w, y && v)
            t: {
              for (x = y, m = v, h = 0, p = x; p; p = nr(p))
                h++;
              for (p = 0, w = m; w; w = nr(w))
                p++;
              for (; 0 < h - p; )
                x = nr(x), h--;
              for (; 0 < p - h; )
                m = nr(m), p--;
              for (; h--; ) {
                if (x === m || m !== null && x === m.alternate)
                  break t;
                x = nr(x), m = nr(m);
              }
              x = null;
            }
          else
            x = null;
          y !== null && Tf(f, d, y, x, !1), v !== null && E !== null && Tf(f, E, v, x, !0);
        }
      }
      e: {
        if (d = u ? cr(u) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file")
          var k = kv;
        else if (mf(d))
          if (Fp)
            k = Cv;
          else {
            k = Ev;
            var A = Tv;
          }
        else
          (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = Pv);
        if (k && (k = k(e, u))) {
          Ap(f, k, n, c);
          break e;
        }
        A && A(e, d, u), e === "focusout" && (A = d._wrapperState) && A.controlled && d.type === "number" && na(d, "number", d.value);
      }
      switch (A = u ? cr(u) : window, e) {
        case "focusin":
          (mf(A) || A.contentEditable === "true") && (ar = A, pa = u, ai = null);
          break;
        case "focusout":
          ai = pa = ar = null;
          break;
        case "mousedown":
          ma = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ma = !1, wf(f, n, c);
          break;
        case "selectionchange":
          if (Fv)
            break;
        case "keydown":
        case "keyup":
          wf(f, n, c);
      }
      var O;
      if (Eu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        lr ? Cp(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Pp && n.locale !== "ko" && (lr || P !== "onCompositionStart" ? P === "onCompositionEnd" && lr && (O = Ep()) : (on = c, Su = "value" in on ? on.value : on.textContent, lr = !0)), A = Hs(u, P), 0 < A.length && (P = new ff(P, e, null, n, c), f.push({ event: P, listeners: A }), O ? P.data = O : (O = _p(n), O !== null && (P.data = O)))), (O = gv ? vv(e, n) : xv(e, n)) && (u = Hs(u, "onBeforeInput"), 0 < u.length && (c = new ff("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = O));
    }
    zp(f, t);
  });
}
function _i(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = wi(e, n), s != null && r.unshift(_i(e, s, i)), s = wi(e, t), s != null && r.push(_i(e, s, i))), e = e.return;
  }
  return r;
}
function nr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tf(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r)
      break;
    l.tag === 5 && u !== null && (l = u, i ? (a = wi(n, s), a != null && o.unshift(_i(n, a, l))) : i || (a = wi(n, s), a != null && o.push(_i(n, a, l)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Rv = /\r\n?/g, Nv = /\u0000|\uFFFD/g;
function Ef(e) {
  return (typeof e == "string" ? e : "" + e).replace(Rv, `
`).replace(Nv, "");
}
function as(e, t, n) {
  if (t = Ef(t), Ef(e) !== t && n)
    throw Error(_(425));
}
function Ks() {
}
var ya = null, ga = null;
function va(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xa = typeof setTimeout == "function" ? setTimeout : void 0, Mv = typeof clearTimeout == "function" ? clearTimeout : void 0, Pf = typeof Promise == "function" ? Promise : void 0, Lv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pf < "u" ? function(e) {
  return Pf.resolve(null).then(e).catch(jv);
} : xa;
function jv(e) {
  setTimeout(function() {
    throw e;
  });
}
function gl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Ti(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Ti(t);
}
function dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Cf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + $r, Ai = "__reactProps$" + $r, Ht = "__reactContainer$" + $r, wa = "__reactEvents$" + $r, Iv = "__reactListeners$" + $r, zv = "__reactHandles$" + $r;
function Ln(e) {
  var t = e[Ct];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ht] || n[Ct]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Cf(e); e !== null; ) {
          if (n = e[Ct])
            return n;
          e = Cf(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ui(e) {
  return e = e[Ct] || e[Ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function cr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(_(33));
}
function Do(e) {
  return e[Ai] || null;
}
var Sa = [], fr = -1;
function Pn(e) {
  return { current: e };
}
function oe(e) {
  0 > fr || (e.current = Sa[fr], Sa[fr] = null, fr--);
}
function re(e, t) {
  fr++, Sa[fr] = e.current, e.current = t;
}
var Sn = {}, Me = Pn(Sn), He = Pn(!1), Hn = Sn;
function Dr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n)
    i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ke(e) {
  return e = e.childContextTypes, e != null;
}
function Gs() {
  oe(He), oe(Me);
}
function _f(e, t, n) {
  if (Me.current !== Sn)
    throw Error(_(168));
  re(Me, t), re(He, n);
}
function bp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(_(108, T0(e) || "Unknown", i));
  return fe({}, n, r);
}
function Qs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sn, Hn = Me.current, re(Me, e), re(He, He.current), !0;
}
function Af(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(_(169));
  n ? (e = bp(e, t, Hn), r.__reactInternalMemoizedMergedChildContext = e, oe(He), oe(Me), re(Me, e)) : oe(He), re(He, n);
}
var Mt = null, Vo = !1, vl = !1;
function Bp(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function $v(e) {
  Vo = !0, Bp(e);
}
function Cn() {
  if (!vl && Mt !== null) {
    vl = !0;
    var e = 0, t = J;
    try {
      var n = Mt;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Mt = null, Vo = !1;
    } catch (i) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), hp(gu, Cn), i;
    } finally {
      J = t, vl = !1;
    }
  }
  return null;
}
var dr = [], hr = 0, Ys = null, Xs = 0, ot = [], lt = 0, Kn = null, Lt = 1, jt = "";
function Vn(e, t) {
  dr[hr++] = Xs, dr[hr++] = Ys, Ys = e, Xs = t;
}
function Up(e, t, n) {
  ot[lt++] = Lt, ot[lt++] = jt, ot[lt++] = Kn, Kn = e;
  var r = Lt;
  e = jt;
  var i = 32 - vt(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - vt(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Lt = 1 << 32 - vt(t) + i | n << i | r, jt = s + e;
  } else
    Lt = 1 << s | n << i | r, jt = e;
}
function Cu(e) {
  e.return !== null && (Vn(e, 1), Up(e, 1, 0));
}
function _u(e) {
  for (; e === Ys; )
    Ys = dr[--hr], dr[hr] = null, Xs = dr[--hr], dr[hr] = null;
  for (; e === Kn; )
    Kn = ot[--lt], ot[lt] = null, jt = ot[--lt], ot[lt] = null, Lt = ot[--lt], ot[lt] = null;
}
var qe = null, Ze = null, le = !1, yt = null;
function Wp(e, t) {
  var n = at(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ff(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = dn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Kn !== null ? { id: Lt, overflow: jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = at(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Ze = null, !0) : !1;
    default:
      return !1;
  }
}
function ka(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ta(e) {
  if (le) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!Ff(e, t)) {
        if (ka(e))
          throw Error(_(418));
        t = dn(n.nextSibling);
        var r = qe;
        t && Ff(e, t) ? Wp(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, qe = e);
      }
    } else {
      if (ka(e))
        throw Error(_(418));
      e.flags = e.flags & -4097 | 2, le = !1, qe = e;
    }
  }
}
function Df(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function us(e) {
  if (e !== qe)
    return !1;
  if (!le)
    return Df(e), le = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !va(e.type, e.memoizedProps)), t && (t = Ze)) {
    if (ka(e))
      throw Hp(), Error(_(418));
    for (; t; )
      Wp(e, t), t = dn(t.nextSibling);
  }
  if (Df(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = dn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else
    Ze = qe ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Hp() {
  for (var e = Ze; e; )
    e = dn(e.nextSibling);
}
function Vr() {
  Ze = qe = null, le = !1;
}
function Au(e) {
  yt === null ? yt = [e] : yt.push(e);
}
var bv = Yt.ReactCurrentBatchConfig;
function Qr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(_(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var l = i.refs;
        o === null ? delete l[s] : l[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string")
      throw Error(_(284));
    if (!n._owner)
      throw Error(_(290, e));
  }
  return e;
}
function cs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Vf(e) {
  var t = e._init;
  return t(e._payload);
}
function Kp(e) {
  function t(m, h) {
    if (e) {
      var p = m.deletions;
      p === null ? (m.deletions = [h], m.flags |= 16) : p.push(h);
    }
  }
  function n(m, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function i(m, h) {
    return m = yn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, p) {
    return m.index = p, e ? (p = m.alternate, p !== null ? (p = p.index, p < h ? (m.flags |= 2, h) : p) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, h, p, w) {
    return h === null || h.tag !== 6 ? (h = Pl(p, m.mode, w), h.return = m, h) : (h = i(h, p), h.return = m, h);
  }
  function a(m, h, p, w) {
    var k = p.type;
    return k === or ? c(m, h, p.props.children, w, p.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Jt && Vf(k) === h.type) ? (w = i(h, p.props), w.ref = Qr(m, h, p), w.return = m, w) : (w = Vs(p.type, p.key, p.props, null, m.mode, w), w.ref = Qr(m, h, p), w.return = m, w);
  }
  function u(m, h, p, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = Cl(p, m.mode, w), h.return = m, h) : (h = i(h, p.children || []), h.return = m, h);
  }
  function c(m, h, p, w, k) {
    return h === null || h.tag !== 7 ? (h = Bn(p, m.mode, w, k), h.return = m, h) : (h = i(h, p), h.return = m, h);
  }
  function f(m, h, p) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Pl("" + h, m.mode, p), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ji:
          return p = Vs(h.type, h.key, h.props, null, m.mode, p), p.ref = Qr(m, null, h), p.return = m, p;
        case sr:
          return h = Cl(h, m.mode, p), h.return = m, h;
        case Jt:
          var w = h._init;
          return f(m, w(h._payload), p);
      }
      if (ei(h) || Ur(h))
        return h = Bn(h, m.mode, p, null), h.return = m, h;
      cs(m, h);
    }
    return null;
  }
  function d(m, h, p, w) {
    var k = h !== null ? h.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return k !== null ? null : l(m, h, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ji:
          return p.key === k ? a(m, h, p, w) : null;
        case sr:
          return p.key === k ? u(m, h, p, w) : null;
        case Jt:
          return k = p._init, d(
            m,
            h,
            k(p._payload),
            w
          );
      }
      if (ei(p) || Ur(p))
        return k !== null ? null : c(m, h, p, w, null);
      cs(m, p);
    }
    return null;
  }
  function y(m, h, p, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(p) || null, l(h, m, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ji:
          return m = m.get(w.key === null ? p : w.key) || null, a(h, m, w, k);
        case sr:
          return m = m.get(w.key === null ? p : w.key) || null, u(h, m, w, k);
        case Jt:
          var A = w._init;
          return y(m, h, p, A(w._payload), k);
      }
      if (ei(w) || Ur(w))
        return m = m.get(p) || null, c(h, m, w, k, null);
      cs(h, w);
    }
    return null;
  }
  function v(m, h, p, w) {
    for (var k = null, A = null, O = h, P = h = 0, b = null; O !== null && P < p.length; P++) {
      O.index > P ? (b = O, O = null) : b = O.sibling;
      var M = d(m, O, p[P], w);
      if (M === null) {
        O === null && (O = b);
        break;
      }
      e && O && M.alternate === null && t(m, O), h = s(M, h, P), A === null ? k = M : A.sibling = M, A = M, O = b;
    }
    if (P === p.length)
      return n(m, O), le && Vn(m, P), k;
    if (O === null) {
      for (; P < p.length; P++)
        O = f(m, p[P], w), O !== null && (h = s(O, h, P), A === null ? k = O : A.sibling = O, A = O);
      return le && Vn(m, P), k;
    }
    for (O = r(m, O); P < p.length; P++)
      b = y(O, m, P, p[P], w), b !== null && (e && b.alternate !== null && O.delete(b.key === null ? P : b.key), h = s(b, h, P), A === null ? k = b : A.sibling = b, A = b);
    return e && O.forEach(function(H) {
      return t(m, H);
    }), le && Vn(m, P), k;
  }
  function x(m, h, p, w) {
    var k = Ur(p);
    if (typeof k != "function")
      throw Error(_(150));
    if (p = k.call(p), p == null)
      throw Error(_(151));
    for (var A = k = null, O = h, P = h = 0, b = null, M = p.next(); O !== null && !M.done; P++, M = p.next()) {
      O.index > P ? (b = O, O = null) : b = O.sibling;
      var H = d(m, O, M.value, w);
      if (H === null) {
        O === null && (O = b);
        break;
      }
      e && O && H.alternate === null && t(m, O), h = s(H, h, P), A === null ? k = H : A.sibling = H, A = H, O = b;
    }
    if (M.done)
      return n(
        m,
        O
      ), le && Vn(m, P), k;
    if (O === null) {
      for (; !M.done; P++, M = p.next())
        M = f(m, M.value, w), M !== null && (h = s(M, h, P), A === null ? k = M : A.sibling = M, A = M);
      return le && Vn(m, P), k;
    }
    for (O = r(m, O); !M.done; P++, M = p.next())
      M = y(O, m, P, M.value, w), M !== null && (e && M.alternate !== null && O.delete(M.key === null ? P : M.key), h = s(M, h, P), A === null ? k = M : A.sibling = M, A = M);
    return e && O.forEach(function(z) {
      return t(m, z);
    }), le && Vn(m, P), k;
  }
  function E(m, h, p, w) {
    if (typeof p == "object" && p !== null && p.type === or && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ji:
          e: {
            for (var k = p.key, A = h; A !== null; ) {
              if (A.key === k) {
                if (k = p.type, k === or) {
                  if (A.tag === 7) {
                    n(m, A.sibling), h = i(A, p.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (A.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Jt && Vf(k) === A.type) {
                  n(m, A.sibling), h = i(A, p.props), h.ref = Qr(m, A, p), h.return = m, m = h;
                  break e;
                }
                n(m, A);
                break;
              } else
                t(m, A);
              A = A.sibling;
            }
            p.type === or ? (h = Bn(p.props.children, m.mode, w, p.key), h.return = m, m = h) : (w = Vs(p.type, p.key, p.props, null, m.mode, w), w.ref = Qr(m, h, p), w.return = m, m = w);
          }
          return o(m);
        case sr:
          e: {
            for (A = p.key; h !== null; ) {
              if (h.key === A)
                if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                  n(m, h.sibling), h = i(h, p.children || []), h.return = m, m = h;
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = Cl(p, m.mode, w), h.return = m, m = h;
          }
          return o(m);
        case Jt:
          return A = p._init, E(m, h, A(p._payload), w);
      }
      if (ei(p))
        return v(m, h, p, w);
      if (Ur(p))
        return x(m, h, p, w);
      cs(m, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, h !== null && h.tag === 6 ? (n(m, h.sibling), h = i(h, p), h.return = m, m = h) : (n(m, h), h = Pl(p, m.mode, w), h.return = m, m = h), o(m)) : n(m, h);
  }
  return E;
}
var Or = Kp(!0), Gp = Kp(!1), Zs = Pn(null), qs = null, pr = null, Fu = null;
function Du() {
  Fu = pr = qs = null;
}
function Vu(e) {
  var t = Zs.current;
  oe(Zs), e._currentValue = t;
}
function Ea(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function _r(e, t) {
  qs = e, Fu = pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null);
}
function ct(e) {
  var t = e._currentValue;
  if (Fu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, pr === null) {
      if (qs === null)
        throw Error(_(308));
      pr = e, qs.dependencies = { lanes: 0, firstContext: e };
    } else
      pr = pr.next = e;
  return t;
}
var jn = null;
function Ou(e) {
  jn === null ? jn = [e] : jn.push(e);
}
function Qp(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Ou(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Kt(e, r);
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function Ru(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Yp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function hn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, Y & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Kt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Ou(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Kt(e, n);
}
function Ps(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vu(e, n);
  }
}
function Of(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? i = s = o : s = s.next = o, n = n.next;
      } while (n !== null);
      s === null ? i = s = t : s = s.next = t;
    } else
      i = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Js(e, t, n, r) {
  var i = e.updateQueue;
  en = !1;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, o === null ? s = u : o.next = u, o = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (s !== null) {
    var f = i.baseState;
    o = 0, c = u = a = null, l = s;
    do {
      var d = l.lane, y = l.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: y,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e, x = l;
          switch (d = t, y = n, x.tag) {
            case 1:
              if (v = x.payload, typeof v == "function") {
                f = v.call(y, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = x.payload, d = typeof v == "function" ? v.call(y, f, d) : v, d == null)
                break e;
              f = fe({}, f, d);
              break e;
            case 2:
              en = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l));
      } else
        y = { eventTime: y, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = y, a = f) : c = c.next = y, o |= d;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null)
          break;
        d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else
      s === null && (i.shared.lanes = 0);
    Qn |= o, e.lanes = o, e.memoizedState = f;
  }
}
function Rf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var Wi = {}, Ft = Pn(Wi), Fi = Pn(Wi), Di = Pn(Wi);
function In(e) {
  if (e === Wi)
    throw Error(_(174));
  return e;
}
function Nu(e, t) {
  switch (re(Di, t), re(Fi, e), re(Ft, Wi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ia(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ia(t, e);
  }
  oe(Ft), re(Ft, t);
}
function Rr() {
  oe(Ft), oe(Fi), oe(Di);
}
function Xp(e) {
  In(Di.current);
  var t = In(Ft.current), n = ia(t, e.type);
  t !== n && (re(Fi, e), re(Ft, n));
}
function Mu(e) {
  Fi.current === e && (oe(Ft), oe(Fi));
}
var ae = Pn(0);
function eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var xl = [];
function Lu() {
  for (var e = 0; e < xl.length; e++)
    xl[e]._workInProgressVersionPrimary = null;
  xl.length = 0;
}
var Cs = Yt.ReactCurrentDispatcher, wl = Yt.ReactCurrentBatchConfig, Gn = 0, ce = null, we = null, Te = null, to = !1, ui = !1, Vi = 0, Bv = 0;
function Fe() {
  throw Error(_(321));
}
function ju(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wt(e[n], t[n]))
      return !1;
  return !0;
}
function Iu(e, t, n, r, i, s) {
  if (Gn = s, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cs.current = e === null || e.memoizedState === null ? Kv : Gv, e = n(r, i), ui) {
    s = 0;
    do {
      if (ui = !1, Vi = 0, 25 <= s)
        throw Error(_(301));
      s += 1, Te = we = null, t.updateQueue = null, Cs.current = Qv, e = n(r, i);
    } while (ui);
  }
  if (Cs.current = no, t = we !== null && we.next !== null, Gn = 0, Te = we = ce = null, to = !1, t)
    throw Error(_(300));
  return e;
}
function zu() {
  var e = Vi !== 0;
  return Vi = 0, e;
}
function Et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Te === null ? ce.memoizedState = Te = e : Te = Te.next = e, Te;
}
function ft() {
  if (we === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = we.next;
  var t = Te === null ? ce.memoizedState : Te.next;
  if (t !== null)
    Te = t, we = e;
  else {
    if (e === null)
      throw Error(_(310));
    we = e, e = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }, Te === null ? ce.memoizedState = Te = e : Te = Te.next = e;
  }
  return Te;
}
function Oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sl(e) {
  var t = ft(), n = t.queue;
  if (n === null)
    throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = we, i = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    r.baseQueue = i = s, n.pending = null;
  }
  if (i !== null) {
    s = i.next, r = r.baseState;
    var l = o = null, a = null, u = s;
    do {
      var c = u.lane;
      if ((Gn & c) === c)
        a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, o = r) : a = a.next = f, ce.lanes |= c, Qn |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? o = r : a.next = l, wt(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, ce.lanes |= s, Qn |= s, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function kl(e) {
  var t = ft(), n = t.queue;
  if (n === null)
    throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    wt(s, t.memoizedState) || (We = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Zp() {
}
function qp(e, t) {
  var n = ce, r = ft(), i = t(), s = !wt(r.memoizedState, i);
  if (s && (r.memoizedState = i, We = !0), r = r.queue, $u(tm.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Te !== null && Te.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ri(9, em.bind(null, n, r, i, t), void 0, null), Ee === null)
      throw Error(_(349));
    Gn & 30 || Jp(n, t, i);
  }
  return i;
}
function Jp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function em(e, t, n, r) {
  t.value = n, t.getSnapshot = r, nm(t) && rm(e);
}
function tm(e, t, n) {
  return n(function() {
    nm(t) && rm(e);
  });
}
function nm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function rm(e) {
  var t = Kt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Nf(e) {
  var t = Et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Oi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hv.bind(null, ce, e), [t.memoizedState, e];
}
function Ri(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function im() {
  return ft().memoizedState;
}
function _s(e, t, n, r) {
  var i = Et();
  ce.flags |= e, i.memoizedState = Ri(1 | t, n, void 0, r === void 0 ? null : r);
}
function Oo(e, t, n, r) {
  var i = ft();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (we !== null) {
    var o = we.memoizedState;
    if (s = o.destroy, r !== null && ju(r, o.deps)) {
      i.memoizedState = Ri(t, n, s, r);
      return;
    }
  }
  ce.flags |= e, i.memoizedState = Ri(1 | t, n, s, r);
}
function Mf(e, t) {
  return _s(8390656, 8, e, t);
}
function $u(e, t) {
  return Oo(2048, 8, e, t);
}
function sm(e, t) {
  return Oo(4, 2, e, t);
}
function om(e, t) {
  return Oo(4, 4, e, t);
}
function lm(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function am(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Oo(4, 4, lm.bind(null, t, e), n);
}
function bu() {
}
function um(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function cm(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function fm(e, t, n) {
  return Gn & 21 ? (wt(n, t) || (n = yp(), ce.lanes |= n, Qn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n);
}
function Uv(e, t) {
  var n = J;
  J = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = wl.transition;
  wl.transition = {};
  try {
    e(!1), t();
  } finally {
    J = n, wl.transition = r;
  }
}
function dm() {
  return ft().memoizedState;
}
function Wv(e, t, n) {
  var r = mn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, hm(e))
    pm(t, n);
  else if (n = Qp(e, t, n, r), n !== null) {
    var i = Ie();
    xt(n, e, r, i), mm(n, t, r);
  }
}
function Hv(e, t, n) {
  var r = mn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hm(e))
    pm(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
      try {
        var o = t.lastRenderedState, l = s(o, n);
        if (i.hasEagerState = !0, i.eagerState = l, wt(l, o)) {
          var a = t.interleaved;
          a === null ? (i.next = i, Ou(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Qp(e, t, i, r), n !== null && (i = Ie(), xt(n, e, r, i), mm(n, t, r));
  }
}
function hm(e) {
  var t = e.alternate;
  return e === ce || t !== null && t === ce;
}
function pm(e, t) {
  ui = to = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function mm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vu(e, n);
  }
}
var no = { readContext: ct, useCallback: Fe, useContext: Fe, useEffect: Fe, useImperativeHandle: Fe, useInsertionEffect: Fe, useLayoutEffect: Fe, useMemo: Fe, useReducer: Fe, useRef: Fe, useState: Fe, useDebugValue: Fe, useDeferredValue: Fe, useTransition: Fe, useMutableSource: Fe, useSyncExternalStore: Fe, useId: Fe, unstable_isNewReconciler: !1 }, Kv = { readContext: ct, useCallback: function(e, t) {
  return Et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ct, useEffect: Mf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _s(
    4194308,
    4,
    lm.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return _s(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return _s(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Wv.bind(null, ce, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Et();
  return e = { current: e }, t.memoizedState = e;
}, useState: Nf, useDebugValue: bu, useDeferredValue: function(e) {
  return Et().memoizedState = e;
}, useTransition: function() {
  var e = Nf(!1), t = e[0];
  return e = Uv.bind(null, e[1]), Et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ce, i = Et();
  if (le) {
    if (n === void 0)
      throw Error(_(407));
    n = n();
  } else {
    if (n = t(), Ee === null)
      throw Error(_(349));
    Gn & 30 || Jp(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, Mf(tm.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Ri(9, em.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Et(), t = Ee.identifierPrefix;
  if (le) {
    var n = jt, r = Lt;
    n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Bv++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Gv = {
  readContext: ct,
  useCallback: um,
  useContext: ct,
  useEffect: $u,
  useImperativeHandle: am,
  useInsertionEffect: sm,
  useLayoutEffect: om,
  useMemo: cm,
  useReducer: Sl,
  useRef: im,
  useState: function() {
    return Sl(Oi);
  },
  useDebugValue: bu,
  useDeferredValue: function(e) {
    var t = ft();
    return fm(t, we.memoizedState, e);
  },
  useTransition: function() {
    var e = Sl(Oi)[0], t = ft().memoizedState;
    return [e, t];
  },
  useMutableSource: Zp,
  useSyncExternalStore: qp,
  useId: dm,
  unstable_isNewReconciler: !1
}, Qv = { readContext: ct, useCallback: um, useContext: ct, useEffect: $u, useImperativeHandle: am, useInsertionEffect: sm, useLayoutEffect: om, useMemo: cm, useReducer: kl, useRef: im, useState: function() {
  return kl(Oi);
}, useDebugValue: bu, useDeferredValue: function(e) {
  var t = ft();
  return we === null ? t.memoizedState = e : fm(t, we.memoizedState, e);
}, useTransition: function() {
  var e = kl(Oi)[0], t = ft().memoizedState;
  return [e, t];
}, useMutableSource: Zp, useSyncExternalStore: qp, useId: dm, unstable_isNewReconciler: !1 };
function pt(e, t) {
  if (e && e.defaultProps) {
    t = fe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ro = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ie(), i = mn(e), s = $t(r, i);
  s.payload = t, n != null && (s.callback = n), t = hn(e, s, i), t !== null && (xt(t, e, i, r), Ps(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ie(), i = mn(e), s = $t(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = hn(e, s, i), t !== null && (xt(t, e, i, r), Ps(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ie(), r = mn(e), i = $t(n, r);
  i.tag = 2, t != null && (i.callback = t), t = hn(e, i, r), t !== null && (xt(t, e, r, n), Ps(t, e, r));
} };
function Lf(e, t, n, r, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Pi(n, r) || !Pi(i, s) : !0;
}
function ym(e, t, n) {
  var r = !1, i = Sn, s = t.contextType;
  return typeof s == "object" && s !== null ? s = ct(s) : (i = Ke(t) ? Hn : Me.current, r = t.contextTypes, s = (r = r != null) ? Dr(e, i) : Sn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ro, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function jf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Ru(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = ct(s) : (s = Ke(t) ? Hn : Me.current, i.context = Dr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Pa(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ro.enqueueReplaceState(i, i.state, null), Js(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nr(e, t) {
  try {
    var n = "", r = t;
    do
      n += k0(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _a(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Yv = typeof WeakMap == "function" ? WeakMap : Map;
function gm(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    io || (io = !0, ja = r), _a(e, t);
  }, n;
}
function vm(e, t, n) {
  n = $t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      _a(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    _a(e, t), typeof r != "function" && (pn === null ? pn = /* @__PURE__ */ new Set([this]) : pn.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function If(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yv();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = u1.bind(null, e, t, n), t.then(e, e));
}
function zf(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $f(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, hn(n, t, 1))), n.lanes |= 1), e);
}
var Xv = Yt.ReactCurrentOwner, We = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Gp(t, null, n, r) : Or(t, e.child, n, r);
}
function bf(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return _r(t, i), r = Iu(e, t, n, r, s, i), n = zu(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Gt(e, t, i)) : (le && n && Cu(t), t.flags |= 1, Le(e, t, r, i), t.child);
}
function Bf(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Yu(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, xm(e, t, s, r, i)) : (e = Vs(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pi, n(o, r) && e.ref === t.ref)
      return Gt(e, t, i);
  }
  return t.flags |= 1, e = yn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function xm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Pi(s, r) && e.ref === t.ref)
      if (We = !1, t.pendingProps = r = s, (e.lanes & i) !== 0)
        e.flags & 131072 && (We = !0);
      else
        return t.lanes = e.lanes, Gt(e, t, i);
  }
  return Aa(e, t, n, r, i);
}
function wm(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(yr, Xe), Xe |= n;
    else {
      if (!(n & 1073741824))
        return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(yr, Xe), Xe |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, re(yr, Xe), Xe |= r;
    }
  else
    s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, re(yr, Xe), Xe |= r;
  return Le(e, t, i, n), t.child;
}
function Sm(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Aa(e, t, n, r, i) {
  var s = Ke(n) ? Hn : Me.current;
  return s = Dr(t, s), _r(t, i), n = Iu(e, t, n, r, s, i), r = zu(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Gt(e, t, i)) : (le && r && Cu(t), t.flags |= 1, Le(e, t, n, i), t.child);
}
function Uf(e, t, n, r, i) {
  if (Ke(n)) {
    var s = !0;
    Qs(t);
  } else
    s = !1;
  if (_r(t, i), t.stateNode === null)
    As(e, t), ym(t, n, r), Ca(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, l = t.memoizedProps;
    o.props = l;
    var a = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = ct(u) : (u = Ke(n) ? Hn : Me.current, u = Dr(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && jf(t, o, r, u), en = !1;
    var d = t.memoizedState;
    o.state = d, Js(t, r, o, i), a = t.memoizedState, l !== r || d !== a || He.current || en ? (typeof c == "function" && (Pa(t, n, c, r), a = t.memoizedState), (l = en || Lf(t, n, l, r, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Yp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : pt(t.type, l), o.props = u, f = t.pendingProps, d = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = ct(a) : (a = Ke(n) ? Hn : Me.current, a = Dr(t, a));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && jf(t, o, r, a), en = !1, d = t.memoizedState, o.state = d, Js(t, r, o, i);
    var v = t.memoizedState;
    l !== f || d !== v || He.current || en ? (typeof y == "function" && (Pa(t, n, y, r), v = t.memoizedState), (u = en || Lf(t, n, u, r, d, v, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Fa(e, t, n, r, s, i);
}
function Fa(e, t, n, r, i, s) {
  Sm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o)
    return i && Af(t, n, !1), Gt(e, t, s);
  r = t.stateNode, Xv.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Or(t, e.child, null, s), t.child = Or(t, null, l, s)) : Le(e, t, l, s), t.memoizedState = r.state, i && Af(t, n, !0), t.child;
}
function km(e) {
  var t = e.stateNode;
  t.pendingContext ? _f(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _f(e, t.context, !1), Nu(e, t.containerInfo);
}
function Wf(e, t, n, r, i) {
  return Vr(), Au(i), t.flags |= 256, Le(e, t, n, r), t.child;
}
var Da = { dehydrated: null, treeContext: null, retryLane: 0 };
function Va(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tm(e, t, n) {
  var r = t.pendingProps, i = ae.current, s = !1, o = (t.flags & 128) !== 0, l;
  if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), re(ae, i & 1), e === null)
    return Ta(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Lo(o, r, 0, null), e = Bn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Va(n), t.memoizedState = Da, e) : Bu(t, o));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null))
    return Zv(e, t, o, r, l, i, n);
  if (s) {
    s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = yn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = yn(l, s) : (s = Bn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Va(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Da, r;
  }
  return s = e.child, e = s.sibling, r = yn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Bu(e, t) {
  return t = Lo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function fs(e, t, n, r) {
  return r !== null && Au(r), Or(t, e.child, null, n), e = Bu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Zv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Tl(Error(_(422))), fs(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Lo({ mode: "visible", children: r.children }, i, 0, null), s = Bn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Or(t, e.child, null, o), t.child.memoizedState = Va(o), t.memoizedState = Da, s);
  if (!(t.mode & 1))
    return fs(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var l = r.dgst;
    return r = l, s = Error(_(419)), r = Tl(s, r, void 0), fs(e, t, o, r);
  }
  if (l = (o & e.childLanes) !== 0, We || l) {
    if (r = Ee, r !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Kt(e, i), xt(r, e, i, -1));
    }
    return Qu(), r = Tl(Error(_(421))), fs(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = c1.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ze = dn(i.nextSibling), qe = t, le = !0, yt = null, e !== null && (ot[lt++] = Lt, ot[lt++] = jt, ot[lt++] = Kn, Lt = e.id, jt = e.overflow, Kn = t), t = Bu(t, r.children), t.flags |= 4096, t);
}
function Hf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ea(e.return, t, n);
}
function El(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Em(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (Le(e, t, r.children, n), r = ae.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Hf(e, n, t);
          else if (e.tag === 19)
            Hf(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (re(ae, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && eo(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), El(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && eo(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        El(t, !0, n, null, s);
        break;
      case "together":
        El(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function As(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Qn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(_(153));
  if (t.child !== null) {
    for (e = t.child, n = yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = yn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function qv(e, t, n) {
  switch (t.tag) {
    case 3:
      km(t), Vr();
      break;
    case 5:
      Xp(t);
      break;
    case 1:
      Ke(t.type) && Qs(t);
      break;
    case 4:
      Nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      re(Zs, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (re(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Tm(e, t, n) : (re(ae, ae.current & 1), e = Gt(e, t, n), e !== null ? e.sibling : null);
      re(ae, ae.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Em(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), re(ae, ae.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, wm(e, t, n);
  }
  return Gt(e, t, n);
}
var Pm, Oa, Cm, _m;
Pm = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Oa = function() {
};
Cm = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, In(Ft.current);
    var s = null;
    switch (n) {
      case "input":
        i = ea(e, i), r = ea(e, r), s = [];
        break;
      case "select":
        i = fe({}, i, { value: void 0 }), r = fe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = ra(e, i), r = ra(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ks);
    }
    sa(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l)
            l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (vi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
            for (o in a)
              a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
          } else
            n || (s || (s = []), s.push(
              u,
              n
            )), n = a;
        else
          u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (vi.hasOwnProperty(u) ? (a != null && u === "onScroll" && ie("scroll", e), s || l === a || (s = [])) : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_m = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Jv(e, t, n) {
  var r = t.pendingProps;
  switch (_u(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return De(t), null;
    case 1:
      return Ke(t.type) && Gs(), De(t), null;
    case 3:
      return r = t.stateNode, Rr(), oe(He), oe(Me), Lu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (us(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && ($a(yt), yt = null))), Oa(e, t), De(t), null;
    case 5:
      Mu(t);
      var i = In(Di.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Cm(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(_(166));
          return De(t), null;
        }
        if (e = In(Ft.current), us(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[Ct] = t, r[Ai] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ni.length; i++)
                ie(ni[i], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie(
                "error",
                r
              ), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Jc(r, s), ie("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ie("invalid", r);
              break;
            case "textarea":
              tf(r, s), ie("invalid", r);
          }
          sa(n, s), i = null;
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && as(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && as(
                r.textContent,
                l,
                e
              ), i = ["children", "" + l]) : vi.hasOwnProperty(o) && l != null && o === "onScroll" && ie("scroll", r);
            }
          switch (n) {
            case "input":
              es(r), ef(r, s, !0);
              break;
            case "textarea":
              es(r), nf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ks);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = tp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[Ai] = r, Pm(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = oa(n, r), n) {
              case "dialog":
                ie("cancel", e), ie("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < ni.length; i++)
                  ie(ni[i], e);
                i = r;
                break;
              case "source":
                ie("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                ie(
                  "error",
                  e
                ), ie("load", e), i = r;
                break;
              case "details":
                ie("toggle", e), i = r;
                break;
              case "input":
                Jc(e, r), i = ea(e, r), ie("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = fe({}, r, { value: void 0 }), ie("invalid", e);
                break;
              case "textarea":
                tf(e, r), i = ra(e, r), ie("invalid", e);
                break;
              default:
                i = r;
            }
            sa(n, i), l = i;
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style" ? ip(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && np(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && xi(e, a) : typeof a == "number" && xi(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (vi.hasOwnProperty(s) ? a != null && s === "onScroll" && ie("scroll", e) : a != null && du(e, s, a, o));
              }
            switch (n) {
              case "input":
                es(e), ef(e, r, !1);
                break;
              case "textarea":
                es(e), nf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Tr(e, !!r.multiple, s, !1) : r.defaultValue != null && Tr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ks);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return De(t), null;
    case 6:
      if (e && t.stateNode != null)
        _m(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(_(166));
        if (n = In(Di.current), In(Ft.current), us(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (s = r.nodeValue !== n) && (e = qe, e !== null))
            switch (e.tag) {
              case 3:
                as(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && as(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
      }
      return De(t), null;
    case 13:
      if (oe(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && Ze !== null && t.mode & 1 && !(t.flags & 128))
          Hp(), Vr(), t.flags |= 98560, s = !1;
        else if (s = us(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s)
              throw Error(_(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s)
              throw Error(_(317));
            s[Ct] = t;
          } else
            Vr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          De(t), s = !1;
        } else
          yt !== null && ($a(yt), yt = null), s = !0;
        if (!s)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? Se === 0 && (Se = 3) : Qu())), t.updateQueue !== null && (t.flags |= 4), De(t), null);
    case 4:
      return Rr(), Oa(e, t), e === null && Ci(t.stateNode.containerInfo), De(t), null;
    case 10:
      return Vu(t.type._context), De(t), null;
    case 17:
      return Ke(t.type) && Gs(), De(t), null;
    case 19:
      if (oe(ae), s = t.memoizedState, s === null)
        return De(t), null;
      if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
        if (r)
          Yr(s, !1);
        else {
          if (Se !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (o = eo(e), o !== null) {
                for (t.flags |= 128, Yr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return re(ae, ae.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null && ye() > Mr && (t.flags |= 128, r = !0, Yr(s, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = eo(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !le)
              return De(t), null;
          } else
            2 * ye() - s.renderingStartTime > Mr && n !== 1073741824 && (t.flags |= 128, r = !0, Yr(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ye(), t.sibling = null, n = ae.current, re(ae, r ? n & 1 | 2 : n & 1), t) : (De(t), null);
    case 22:
    case 23:
      return Gu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function e1(e, t) {
  switch (_u(t), t.tag) {
    case 1:
      return Ke(t.type) && Gs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Rr(), oe(He), oe(Me), Lu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Mu(t), null;
    case 13:
      if (oe(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(_(340));
        Vr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return oe(ae), null;
    case 4:
      return Rr(), null;
    case 10:
      return Vu(t.type._context), null;
    case 22:
    case 23:
      return Gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ds = !1, Oe = !1, t1 = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function mr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else
      n.current = null;
}
function Ra(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Kf = !1;
function n1(e, t) {
  if (ya = Us, e = Op(), Pu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, l = -1, a = -1, u = 0, c = 0, f = e, d = null;
          t:
            for (; ; ) {
              for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (a = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (y = f.firstChild) !== null; )
                d = f, f = y;
              for (; ; ) {
                if (f === e)
                  break t;
                if (d === n && ++u === i && (l = o), d === s && ++c === r && (a = o), (y = f.nextSibling) !== null)
                  break;
                f = d, d = f.parentNode;
              }
              f = y;
            }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (ga = { focusedElem: e, selectionRange: n }, Us = !1, j = t; j !== null; )
    if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, j = e;
    else
      for (; j !== null; ) {
        t = j;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps, E = v.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : pt(t.type, x), E);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (w) {
          de(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, j = e;
          break;
        }
        j = t.return;
      }
  return v = Kf, Kf = !1, v;
}
function ci(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && Ra(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function No(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Na(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Am(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Am(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Ai], delete t[wa], delete t[Iv], delete t[zv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gf(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fm(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Ma(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ks));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ma(e, t, n), e = e.sibling; e !== null; )
      Ma(e, t, n), e = e.sibling;
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; )
      La(e, t, n), e = e.sibling;
}
var Pe = null, mt = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; )
    Dm(e, t, n), n = n.sibling;
}
function Dm(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function")
    try {
      At.onCommitFiberUnmount(Co, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Oe || mr(n, t);
    case 6:
      var r = Pe, i = mt;
      Pe = null, Xt(e, t, n), Pe = r, mt = i, Pe !== null && (mt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null && (mt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? gl(e.parentNode, n) : e.nodeType === 1 && gl(e, n), Ti(e)) : gl(Pe, n.stateNode));
      break;
    case 4:
      r = Pe, i = mt, Pe = n.stateNode.containerInfo, mt = !0, Xt(e, t, n), Pe = r, mt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && Ra(n, t, o), i = i.next;
        } while (i !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (!Oe && (mr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (l) {
          de(n, t, l);
        }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null, Xt(e, t, n), Oe = r) : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function Qf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new t1()), t.forEach(function(r) {
      var i = f1.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e, o = t, l = o;
        e:
          for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                Pe = l.stateNode, mt = !1;
                break e;
              case 3:
                Pe = l.stateNode.containerInfo, mt = !0;
                break e;
              case 4:
                Pe = l.stateNode.containerInfo, mt = !0;
                break e;
            }
            l = l.return;
          }
        if (Pe === null)
          throw Error(_(160));
        Dm(s, o, i), Pe = null, mt = !1;
        var a = i.alternate;
        a !== null && (a.return = null), i.return = null;
      } catch (u) {
        de(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Vm(t, e), t = t.sibling;
}
function Vm(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ht(t, e), Tt(e), r & 4) {
        try {
          ci(3, e, e.return), No(3, e);
        } catch (x) {
          de(e, e.return, x);
        }
        try {
          ci(5, e, e.return);
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 1:
      ht(t, e), Tt(e), r & 512 && n !== null && mr(n, n.return);
      break;
    case 5:
      if (ht(t, e), Tt(e), r & 512 && n !== null && mr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          xi(i, "");
        } catch (x) {
          de(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null)
          try {
            l === "input" && s.type === "radio" && s.name != null && Jh(i, s), oa(l, o);
            var u = oa(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o], f = a[o + 1];
              c === "style" ? ip(i, f) : c === "dangerouslySetInnerHTML" ? np(i, f) : c === "children" ? xi(i, f) : du(i, c, f, u);
            }
            switch (l) {
              case "input":
                ta(i, s);
                break;
              case "textarea":
                ep(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null ? Tr(i, !!s.multiple, y, !1) : d !== !!s.multiple && (s.defaultValue != null ? Tr(
                  i,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : Tr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ai] = s;
          } catch (x) {
            de(e, e.return, x);
          }
      }
      break;
    case 6:
      if (ht(t, e), Tt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(_(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (x) {
          de(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ht(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Ti(t.containerInfo);
        } catch (x) {
          de(e, e.return, x);
        }
      break;
    case 4:
      ht(t, e), Tt(e);
      break;
    case 13:
      ht(t, e), Tt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Hu = ye())), r & 4 && Qf(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Oe = (u = Oe) || c, ht(t, e), Oe = u) : ht(t, e), Tt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (j = e, c = e.child; c !== null; ) {
            for (f = j = c; j !== null; ) {
              switch (d = j, y = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ci(4, d, d.return);
                  break;
                case 1:
                  mr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (x) {
                      de(r, n, x);
                    }
                  }
                  break;
                case 5:
                  mr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Xf(f);
                    continue;
                  }
              }
              y !== null ? (y.return = d, j = y) : Xf(f);
            }
            c = c.sibling;
          }
        e:
          for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = rp("display", o));
                } catch (x) {
                  de(e, e.return, x);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (x) {
                  de(e, e.return, x);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === e)
              break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e)
                break e;
              c === f && (c = null), f = f.return;
            }
            c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      ht(t, e), Tt(e), r & 4 && Qf(e);
      break;
    case 21:
      break;
    default:
      ht(
        t,
        e
      ), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (xi(i, ""), r.flags &= -33);
          var s = Gf(e);
          La(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, l = Gf(e);
          Ma(e, l, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      de(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function r1(e, t, n) {
  j = e, Om(e);
}
function Om(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j, s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ds;
      if (!o) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || Oe;
        l = ds;
        var u = Oe;
        if (ds = o, (Oe = a) && !u)
          for (j = i; j !== null; )
            o = j, a = o.child, o.tag === 22 && o.memoizedState !== null ? Zf(i) : a !== null ? (a.return = o, j = a) : Zf(i);
        for (; s !== null; )
          j = s, Om(s), s = s.sibling;
        j = i, ds = l, Oe = u;
      }
      Yf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? (s.return = i, j = s) : Yf(e);
  }
}
function Yf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || No(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var s = t.updateQueue;
              s !== null && Rf(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Rf(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ti(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Oe || t.flags & 512 && Na(t);
      } catch (d) {
        de(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Xf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Zf(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            No(4, t);
          } catch (a) {
            de(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              de(t, i, a);
            }
          }
          var s = t.return;
          try {
            Na(t);
          } catch (a) {
            de(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Na(t);
          } catch (a) {
            de(t, o, a);
          }
      }
    } catch (a) {
      de(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, j = l;
      break;
    }
    j = t.return;
  }
}
var i1 = Math.ceil, ro = Yt.ReactCurrentDispatcher, Uu = Yt.ReactCurrentOwner, ut = Yt.ReactCurrentBatchConfig, Y = 0, Ee = null, ve = null, _e = 0, Xe = 0, yr = Pn(0), Se = 0, Ni = null, Qn = 0, Mo = 0, Wu = 0, fi = null, Be = null, Hu = 0, Mr = 1 / 0, Nt = null, io = !1, ja = null, pn = null, hs = !1, ln = null, so = 0, di = 0, Ia = null, Fs = -1, Ds = 0;
function Ie() {
  return Y & 6 ? ye() : Fs !== -1 ? Fs : Fs = ye();
}
function mn(e) {
  return e.mode & 1 ? Y & 2 && _e !== 0 ? _e & -_e : bv.transition !== null ? (Ds === 0 && (Ds = yp()), Ds) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Tp(e.type)), e) : 1;
}
function xt(e, t, n, r) {
  if (50 < di)
    throw di = 0, Ia = null, Error(_(185));
  bi(e, n, r), (!(Y & 2) || e !== Ee) && (e === Ee && (!(Y & 2) && (Mo |= n), Se === 4 && rn(e, _e)), Ge(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (Mr = ye() + 500, Vo && Cn()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  b0(e, t);
  var r = Bs(e, e === Ee ? _e : 0);
  if (r === 0)
    n !== null && of(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && of(n), t === 1)
      e.tag === 0 ? $v(qf.bind(null, e)) : Bp(qf.bind(null, e)), Lv(function() {
        !(Y & 6) && Cn();
      }), n = null;
    else {
      switch (gp(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = pp;
          break;
        case 16:
          n = bs;
          break;
        case 536870912:
          n = mp;
          break;
        default:
          n = bs;
      }
      n = $m(n, Rm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Rm(e, t) {
  if (Fs = -1, Ds = 0, Y & 6)
    throw Error(_(327));
  var n = e.callbackNode;
  if (Ar() && e.callbackNode !== n)
    return null;
  var r = Bs(e, e === Ee ? _e : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = oo(e, r);
  else {
    t = r;
    var i = Y;
    Y |= 2;
    var s = Mm();
    (Ee !== e || _e !== t) && (Nt = null, Mr = ye() + 500, bn(e, t));
    do
      try {
        l1();
        break;
      } catch (l) {
        Nm(e, l);
      }
    while (!0);
    Du(), ro.current = s, Y = i, ve !== null ? t = 0 : (Ee = null, _e = 0, t = Se);
  }
  if (t !== 0) {
    if (t === 2 && (i = fa(e), i !== 0 && (r = i, t = za(e, i))), t === 1)
      throw n = Ni, bn(e, 0), rn(e, r), Ge(e, ye()), n;
    if (t === 6)
      rn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !s1(i) && (t = oo(e, r), t === 2 && (s = fa(e), s !== 0 && (r = s, t = za(e, s))), t === 1))
        throw n = Ni, bn(e, 0), rn(e, r), Ge(e, ye()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          On(e, Be, Nt);
          break;
        case 3:
          if (rn(e, r), (r & 130023424) === r && (t = Hu + 500 - ye(), 10 < t)) {
            if (Bs(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Ie(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = xa(On.bind(null, e, Be, Nt), t);
            break;
          }
          On(e, Be, Nt);
          break;
        case 4:
          if (rn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - vt(r);
            s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
          }
          if (r = i, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * i1(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xa(On.bind(null, e, Be, Nt), r);
            break;
          }
          On(e, Be, Nt);
          break;
        case 5:
          On(e, Be, Nt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ge(e, ye()), e.callbackNode === n ? Rm.bind(null, e) : null;
}
function za(e, t) {
  var n = fi;
  return e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256), e = oo(e, t), e !== 2 && (t = Be, Be = n, t !== null && $a(t)), e;
}
function $a(e) {
  Be === null ? Be = e : Be.push.apply(Be, e);
}
function s1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], s = i.getSnapshot;
          i = i.value;
          try {
            if (!wt(s(), i))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function rn(e, t) {
  for (t &= ~Wu, t &= ~Mo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - vt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qf(e) {
  if (Y & 6)
    throw Error(_(327));
  Ar();
  var t = Bs(e, 0);
  if (!(t & 1))
    return Ge(e, ye()), null;
  var n = oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fa(e);
    r !== 0 && (t = r, n = za(e, r));
  }
  if (n === 1)
    throw n = Ni, bn(e, 0), rn(e, t), Ge(e, ye()), n;
  if (n === 6)
    throw Error(_(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, On(e, Be, Nt), Ge(e, ye()), null;
}
function Ku(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    Y = n, Y === 0 && (Mr = ye() + 500, Vo && Cn());
  }
}
function Yn(e) {
  ln !== null && ln.tag === 0 && !(Y & 6) && Ar();
  var t = Y;
  Y |= 1;
  var n = ut.transition, r = J;
  try {
    if (ut.transition = null, J = 1, e)
      return e();
  } finally {
    J = r, ut.transition = n, Y = t, !(Y & 6) && Cn();
  }
}
function Gu() {
  Xe = yr.current, oe(yr);
}
function bn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Mv(n)), ve !== null)
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch (_u(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Gs();
          break;
        case 3:
          Rr(), oe(He), oe(Me), Lu();
          break;
        case 5:
          Mu(r);
          break;
        case 4:
          Rr();
          break;
        case 13:
          oe(ae);
          break;
        case 19:
          oe(ae);
          break;
        case 10:
          Vu(r.type._context);
          break;
        case 22:
        case 23:
          Gu();
      }
      n = n.return;
    }
  if (Ee = e, ve = e = yn(e.current, null), _e = Xe = t, Se = 0, Ni = null, Wu = Mo = Qn = 0, Be = fi = null, jn !== null) {
    for (t = 0; t < jn.length; t++)
      if (n = jn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, s = n.pending;
        if (s !== null) {
          var o = s.next;
          s.next = i, r.next = o;
        }
        n.pending = r;
      }
    jn = null;
  }
  return e;
}
function Nm(e, t) {
  do {
    var n = ve;
    try {
      if (Du(), Cs.current = no, to) {
        for (var r = ce.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        to = !1;
      }
      if (Gn = 0, Te = we = ce = null, ui = !1, Vi = 0, Uu.current = null, n === null || n.return === null) {
        Se = 1, Ni = t, ve = null;
        break;
      }
      e: {
        var s = e, o = n.return, l = n, a = t;
        if (t = _e, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var y = zf(o);
          if (y !== null) {
            y.flags &= -257, $f(y, o, l, s, t), y.mode & 1 && If(s, u, t), t = y, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else
              v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              If(s, u, t), Qu();
              break e;
            }
            a = Error(_(426));
          }
        } else if (le && l.mode & 1) {
          var E = zf(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), $f(E, o, l, s, t), Au(Nr(a, l));
            break e;
          }
        }
        s = a = Nr(a, l), Se !== 4 && (Se = 2), fi === null ? fi = [s] : fi.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = gm(s, a, t);
              Of(s, m);
              break e;
            case 1:
              l = a;
              var h = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (pn === null || !pn.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = vm(s, l, t);
                Of(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      jm(n);
    } catch (k) {
      t = k, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mm() {
  var e = ro.current;
  return ro.current = no, e === null ? no : e;
}
function Qu() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4), Ee === null || !(Qn & 268435455) && !(Mo & 268435455) || rn(Ee, _e);
}
function oo(e, t) {
  var n = Y;
  Y |= 2;
  var r = Mm();
  (Ee !== e || _e !== t) && (Nt = null, bn(e, t));
  do
    try {
      o1();
      break;
    } catch (i) {
      Nm(e, i);
    }
  while (!0);
  if (Du(), Y = n, ro.current = r, ve !== null)
    throw Error(_(261));
  return Ee = null, _e = 0, Se;
}
function o1() {
  for (; ve !== null; )
    Lm(ve);
}
function l1() {
  for (; ve !== null && !O0(); )
    Lm(ve);
}
function Lm(e) {
  var t = zm(e.alternate, e, Xe);
  e.memoizedProps = e.pendingProps, t === null ? jm(e) : ve = t, Uu.current = null;
}
function jm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = e1(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Se = 6, ve = null;
        return;
      }
    } else if (n = Jv(n, t, Xe), n !== null) {
      ve = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function On(e, t, n) {
  var r = J, i = ut.transition;
  try {
    ut.transition = null, J = 1, a1(e, t, n, r);
  } finally {
    ut.transition = i, J = r;
  }
  return null;
}
function a1(e, t, n, r) {
  do
    Ar();
  while (ln !== null);
  if (Y & 6)
    throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(_(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (B0(e, s), e === Ee && (ve = Ee = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || hs || (hs = !0, $m(bs, function() {
    return Ar(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ut.transition, ut.transition = null;
    var o = J;
    J = 1;
    var l = Y;
    Y |= 4, Uu.current = null, n1(e, n), Vm(n, e), Av(ga), Us = !!ya, ga = ya = null, e.current = n, r1(n), R0(), Y = l, J = o, ut.transition = s;
  } else
    e.current = n;
  if (hs && (hs = !1, ln = e, so = i), s = e.pendingLanes, s === 0 && (pn = null), L0(n.stateNode), Ge(e, ye()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (io)
    throw io = !1, e = ja, ja = null, e;
  return so & 1 && e.tag !== 0 && Ar(), s = e.pendingLanes, s & 1 ? e === Ia ? di++ : (di = 0, Ia = e) : di = 0, Cn(), null;
}
function Ar() {
  if (ln !== null) {
    var e = gp(so), t = ut.transition, n = J;
    try {
      if (ut.transition = null, J = 16 > e ? 16 : e, ln === null)
        var r = !1;
      else {
        if (e = ln, ln = null, so = 0, Y & 6)
          throw Error(_(331));
        var i = Y;
        for (Y |= 4, j = e.current; j !== null; ) {
          var s = j, o = s.child;
          if (j.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ci(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null)
                    f.return = c, j = f;
                  else
                    for (; j !== null; ) {
                      c = j;
                      var d = c.sibling, y = c.return;
                      if (Am(c), c === u) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = y, j = d;
                        break;
                      }
                      j = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var E = x.sibling;
                    x.sibling = null, x = E;
                  } while (x !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null)
            o.return = s, j = o;
          else
            e:
              for (; j !== null; ) {
                if (s = j, s.flags & 2048)
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ci(9, s, s.return);
                  }
                var m = s.sibling;
                if (m !== null) {
                  m.return = s.return, j = m;
                  break e;
                }
                j = s.return;
              }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          o = j;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null)
            p.return = o, j = p;
          else
            e:
              for (o = h; j !== null; ) {
                if (l = j, l.flags & 2048)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        No(9, l);
                    }
                  } catch (k) {
                    de(l, l.return, k);
                  }
                if (l === o) {
                  j = null;
                  break e;
                }
                var w = l.sibling;
                if (w !== null) {
                  w.return = l.return, j = w;
                  break e;
                }
                j = l.return;
              }
        }
        if (Y = i, Cn(), At && typeof At.onPostCommitFiberRoot == "function")
          try {
            At.onPostCommitFiberRoot(Co, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      J = n, ut.transition = t;
    }
  }
  return !1;
}
function Jf(e, t, n) {
  t = Nr(n, t), t = gm(e, t, 1), e = hn(e, t, 1), t = Ie(), e !== null && (bi(e, 1, t), Ge(e, t));
}
function de(e, t, n) {
  if (e.tag === 3)
    Jf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pn === null || !pn.has(r))) {
          e = Nr(n, e), e = vm(t, e, 1), t = hn(t, e, 1), e = Ie(), t !== null && (bi(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function u1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, Ee === e && (_e & n) === n && (Se === 4 || Se === 3 && (_e & 130023424) === _e && 500 > ye() - Hu ? bn(e, 0) : Wu |= n), Ge(e, t);
}
function Im(e, t) {
  t === 0 && (e.mode & 1 ? (t = rs, rs <<= 1, !(rs & 130023424) && (rs = 4194304)) : t = 1);
  var n = Ie();
  e = Kt(e, t), e !== null && (bi(e, t, n), Ge(e, n));
}
function c1(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Im(e, n);
}
function f1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Im(e, n);
}
var zm;
zm = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || He.current)
      We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return We = !1, qv(e, t, n);
      We = !!(e.flags & 131072);
    }
  else
    We = !1, le && t.flags & 1048576 && Up(t, Xs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      As(e, t), e = t.pendingProps;
      var i = Dr(t, Me.current);
      _r(t, n), i = Iu(null, t, r, e, i, n);
      var s = zu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (s = !0, Qs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ru(t), i.updater = Ro, t.stateNode = i, i._reactInternals = t, Ca(t, r, e, n), t = Fa(null, t, r, !0, s, n)) : (t.tag = 0, le && s && Cu(t), Le(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (As(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = h1(r), e = pt(r, e), i) {
          case 0:
            t = Aa(null, t, r, e, n);
            break e;
          case 1:
            t = Uf(null, t, r, e, n);
            break e;
          case 11:
            t = bf(null, t, r, e, n);
            break e;
          case 14:
            t = Bf(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(_(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), Aa(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), Uf(e, t, r, i, n);
    case 3:
      e: {
        if (km(t), e === null)
          throw Error(_(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, Yp(e, t), Js(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, s.isDehydrated)
          if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
            i = Nr(Error(_(423)), t), t = Wf(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = Nr(Error(_(424)), t), t = Wf(e, t, r, n, i);
            break e;
          } else
            for (Ze = dn(t.stateNode.containerInfo.firstChild), qe = t, le = !0, yt = null, n = Gp(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Vr(), r === i) {
            t = Gt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Xp(t), e === null && Ta(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, va(r, i) ? o = null : s !== null && va(r, s) && (t.flags |= 32), Sm(e, t), Le(e, t, o, n), t.child;
    case 6:
      return e === null && Ta(t), null;
    case 13:
      return Tm(e, t, n);
    case 4:
      return Nu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Or(t, null, r, n) : Le(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), bf(e, t, r, i, n);
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, re(Zs, r._currentValue), r._currentValue = o, s !== null)
          if (wt(s.value, o)) {
            if (s.children === i.children && !He.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      a = $t(-1, n & -n), a.tag = 2;
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                      }
                    }
                    s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Ea(
                      s.return,
                      n,
                      t
                    ), l.lanes |= n;
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10)
                o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (o = s.return, o === null)
                  throw Error(_(341));
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Ea(o, n, t), o = s.sibling;
              } else
                o = s.child;
              if (o !== null)
                o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (s = o.sibling, s !== null) {
                    s.return = o.return, o = s;
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Le(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, _r(t, n), i = ct(i), r = r(i), t.flags |= 1, Le(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = pt(r, t.pendingProps), i = pt(r.type, i), Bf(e, t, r, i, n);
    case 15:
      return xm(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), As(e, t), t.tag = 1, Ke(r) ? (e = !0, Qs(t)) : e = !1, _r(t, n), ym(t, r, i), Ca(t, r, i, n), Fa(null, t, r, !0, e, n);
    case 19:
      return Em(e, t, n);
    case 22:
      return wm(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function $m(e, t) {
  return hp(e, t);
}
function d1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function at(e, t, n, r) {
  return new d1(e, t, n, r);
}
function Yu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function h1(e) {
  if (typeof e == "function")
    return Yu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === pu)
      return 11;
    if (e === mu)
      return 14;
  }
  return 2;
}
function yn(e, t) {
  var n = e.alternate;
  return n === null ? (n = at(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Vs(e, t, n, r, i, s) {
  var o = 2;
  if (r = e, typeof e == "function")
    Yu(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case or:
          return Bn(n.children, i, s, t);
        case hu:
          o = 8, i |= 8;
          break;
        case Xl:
          return e = at(12, n, t, i | 2), e.elementType = Xl, e.lanes = s, e;
        case Zl:
          return e = at(13, n, t, i), e.elementType = Zl, e.lanes = s, e;
        case ql:
          return e = at(19, n, t, i), e.elementType = ql, e.lanes = s, e;
        case Xh:
          return Lo(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Qh:
                o = 10;
                break e;
              case Yh:
                o = 9;
                break e;
              case pu:
                o = 11;
                break e;
              case mu:
                o = 14;
                break e;
              case Jt:
                o = 16, r = null;
                break e;
            }
          throw Error(_(130, e == null ? e : typeof e, ""));
      }
  return t = at(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function Bn(e, t, n, r) {
  return e = at(7, e, r, t), e.lanes = n, e;
}
function Lo(e, t, n, r) {
  return e = at(22, e, r, t), e.elementType = Xh, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Pl(e, t, n) {
  return e = at(6, e, null, t), e.lanes = n, e;
}
function Cl(e, t, n) {
  return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function p1(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ol(0), this.expirationTimes = ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ol(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Xu(e, t, n, r, i, s, o, l, a) {
  return e = new p1(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = at(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ru(s), e;
}
function m1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: sr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function bm(e) {
  if (!e)
    return Sn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1)
      throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n))
      return bp(e, n, t);
  }
  return t;
}
function Bm(e, t, n, r, i, s, o, l, a) {
  return e = Xu(n, r, !0, e, i, s, o, l, a), e.context = bm(null), n = e.current, r = Ie(), i = mn(n), s = $t(r, i), s.callback = t ?? null, hn(n, s, i), e.current.lanes = i, bi(e, i, r), Ge(e, r), e;
}
function jo(e, t, n, r) {
  var i = t.current, s = Ie(), o = mn(i);
  return n = bm(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = hn(i, t, o), e !== null && (xt(e, i, o, s), Ps(e, i, o)), o;
}
function lo(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ed(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  ed(e, t), (e = e.alternate) && ed(e, t);
}
function y1() {
  return null;
}
var Um = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qu(e) {
  this._internalRoot = e;
}
Io.prototype.render = qu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(_(409));
  jo(e, t, null, null);
};
Io.prototype.unmount = qu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yn(function() {
      jo(null, e, null, null);
    }), t[Ht] = null;
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = wp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++)
      ;
    nn.splice(n, 0, e), n === 0 && kp(e);
  }
};
function Ju(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function td() {
}
function g1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = lo(o);
        s.call(u);
      };
    }
    var o = Bm(t, r, e, 0, null, !1, !1, "", td);
    return e._reactRootContainer = o, e[Ht] = o.current, Ci(e.nodeType === 8 ? e.parentNode : e), Yn(), o;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = lo(a);
      l.call(u);
    };
  }
  var a = Xu(e, 0, !1, null, null, !1, !1, "", td);
  return e._reactRootContainer = a, e[Ht] = a.current, Ci(e.nodeType === 8 ? e.parentNode : e), Yn(function() {
    jo(t, a, n, r);
  }), a;
}
function $o(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = lo(o);
        l.call(a);
      };
    }
    jo(t, o, e, i);
  } else
    o = g1(n, t, e, i, r);
  return lo(o);
}
vp = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ti(t.pendingLanes);
        n !== 0 && (vu(t, n | 1), Ge(t, ye()), !(Y & 6) && (Mr = ye() + 500, Cn()));
      }
      break;
    case 13:
      Yn(function() {
        var r = Kt(e, 1);
        if (r !== null) {
          var i = Ie();
          xt(r, e, 1, i);
        }
      }), Zu(e, 1);
  }
};
xu = function(e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      xt(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
xp = function(e) {
  if (e.tag === 13) {
    var t = mn(e), n = Kt(e, t);
    if (n !== null) {
      var r = Ie();
      xt(n, e, t, r);
    }
    Zu(e, t);
  }
};
wp = function() {
  return J;
};
Sp = function(e, t) {
  var n = J;
  try {
    return J = e, t();
  } finally {
    J = n;
  }
};
aa = function(e, t, n) {
  switch (t) {
    case "input":
      if (ta(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Do(r);
            if (!i)
              throw Error(_(90));
            qh(r), ta(r, i);
          }
        }
      }
      break;
    case "textarea":
      ep(e, n);
      break;
    case "select":
      t = n.value, t != null && Tr(e, !!n.multiple, t, !1);
  }
};
lp = Ku;
ap = Yn;
var v1 = { usingClientEntryPoint: !1, Events: [Ui, cr, Do, sp, op, Ku] }, Xr = { findFiberByHostInstance: Ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, x1 = { bundleType: Xr.bundleType, version: Xr.version, rendererPackageName: Xr.rendererPackageName, rendererConfig: Xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = fp(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Xr.findFiberByHostInstance || y1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ps.isDisabled && ps.supportsFiber)
    try {
      Co = ps.inject(x1), At = ps;
    } catch {
    }
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v1;
tt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t))
    throw Error(_(200));
  return m1(e, t, null, n);
};
tt.createRoot = function(e, t) {
  if (!Ju(e))
    throw Error(_(299));
  var n = !1, r = "", i = Um;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Xu(e, 1, !1, null, null, n, !1, r, i), e[Ht] = t.current, Ci(e.nodeType === 8 ? e.parentNode : e), new qu(t);
};
tt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
  return e = fp(t), e = e === null ? null : e.stateNode, e;
};
tt.flushSync = function(e) {
  return Yn(e);
};
tt.hydrate = function(e, t, n) {
  if (!zo(t))
    throw Error(_(200));
  return $o(null, e, t, !0, n);
};
tt.hydrateRoot = function(e, t, n) {
  if (!Ju(e))
    throw Error(_(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", o = Um;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Bm(t, null, e, 1, n ?? null, i, !1, s, o), e[Ht] = t.current, Ci(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new Io(t);
};
tt.render = function(e, t, n) {
  if (!zo(t))
    throw Error(_(200));
  return $o(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function(e) {
  if (!zo(e))
    throw Error(_(40));
  return e._reactRootContainer ? (Yn(function() {
    $o(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ht] = null;
    });
  }), !0) : !1;
};
tt.unstable_batchedUpdates = Ku;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!zo(n))
    throw Error(_(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(_(38));
  return $o(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Wm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wm);
    } catch (e) {
      console.error(e);
    }
}
Wm(), Wh.exports = tt;
var w1 = Wh.exports, nd = w1;
Ql.createRoot = nd.createRoot, Ql.hydrateRoot = nd.hydrateRoot;
function qn(e) {
  this._maxSize = e, this.clear();
}
qn.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
qn.prototype.get = function(e) {
  return this._values[e];
};
qn.prototype.set = function(e, t) {
  return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
};
var S1 = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Hm = /^\d+$/, k1 = /^\d/, T1 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, E1 = /^\s*(['"]?)(.*?)(\1)\s*$/, ec = 512, rd = new qn(ec), id = new qn(ec), sd = new qn(ec), Un = {
  Cache: qn,
  split: ba,
  normalizePath: _l,
  setter: function(e) {
    var t = _l(e);
    return id.get(e) || id.set(e, function(r, i) {
      for (var s = 0, o = t.length, l = r; s < o - 1; ) {
        var a = t[s];
        if (a === "__proto__" || a === "constructor" || a === "prototype")
          return r;
        l = l[t[s++]];
      }
      l[t[s]] = i;
    });
  },
  getter: function(e, t) {
    var n = _l(e);
    return sd.get(e) || sd.set(e, function(i) {
      for (var s = 0, o = n.length; s < o; )
        if (i != null || !t)
          i = i[n[s++]];
        else
          return;
      return i;
    });
  },
  join: function(e) {
    return e.reduce(function(t, n) {
      return t + (tc(n) || Hm.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
    }, "");
  },
  forEach: function(e, t, n) {
    P1(Array.isArray(e) ? e : ba(e), t, n);
  }
};
function _l(e) {
  return rd.get(e) || rd.set(
    e,
    ba(e).map(function(t) {
      return t.replace(E1, "$2");
    })
  );
}
function ba(e) {
  return e.match(S1) || [""];
}
function P1(e, t, n) {
  var r = e.length, i, s, o, l;
  for (s = 0; s < r; s++)
    i = e[s], i && (A1(i) && (i = '"' + i + '"'), l = tc(i), o = !l && /^\d+$/.test(i), t.call(n, i, l, o, s, e));
}
function tc(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function C1(e) {
  return e.match(k1) && !e.match(Hm);
}
function _1(e) {
  return T1.test(e);
}
function A1(e) {
  return !tc(e) && (C1(e) || _1(e));
}
const F1 = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, bo = (e) => e.match(F1) || [], Bo = (e) => e[0].toUpperCase() + e.slice(1), nc = (e, t) => bo(e).join(t).toLowerCase(), Km = (e) => bo(e).reduce(
  (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
  ""
), D1 = (e) => Bo(Km(e)), V1 = (e) => nc(e, "_"), O1 = (e) => nc(e, "-"), R1 = (e) => Bo(nc(e, " ")), N1 = (e) => bo(e).map(Bo).join(" ");
var Al = {
  words: bo,
  upperFirst: Bo,
  camelCase: Km,
  pascalCase: D1,
  snakeCase: V1,
  kebabCase: O1,
  sentenceCase: R1,
  titleCase: N1
}, rc = { exports: {} };
rc.exports = function(e) {
  return Gm(M1(e), e);
};
rc.exports.array = Gm;
function Gm(e, t) {
  var n = e.length, r = new Array(n), i = {}, s = n, o = L1(t), l = j1(e);
  for (t.forEach(function(u) {
    if (!l.has(u[0]) || !l.has(u[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); s--; )
    i[s] || a(e[s], s, /* @__PURE__ */ new Set());
  return r;
  function a(u, c, f) {
    if (f.has(u)) {
      var d;
      try {
        d = ", node was:" + JSON.stringify(u);
      } catch {
        d = "";
      }
      throw new Error("Cyclic dependency" + d);
    }
    if (!l.has(u))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
    if (!i[c]) {
      i[c] = !0;
      var y = o.get(u) || /* @__PURE__ */ new Set();
      if (y = Array.from(y), c = y.length) {
        f.add(u);
        do {
          var v = y[--c];
          a(v, l.get(v), f);
        } while (c);
        f.delete(u);
      }
      r[--n] = u;
    }
  }
}
function M1(e) {
  for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
    var i = e[n];
    t.add(i[0]), t.add(i[1]);
  }
  return Array.from(t);
}
function L1(e) {
  for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
    var i = e[n];
    t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
  }
  return t;
}
function j1(e) {
  for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
    t.set(e[n], n);
  return t;
}
var I1 = rc.exports;
const z1 = /* @__PURE__ */ Oh(I1), $1 = Object.prototype.toString, b1 = Error.prototype.toString, B1 = RegExp.prototype.toString, U1 = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", W1 = /^Symbol\((.*)\)(.*)$/;
function H1(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function od(e, t = !1) {
  if (e == null || e === !0 || e === !1)
    return "" + e;
  const n = typeof e;
  if (n === "number")
    return H1(e);
  if (n === "string")
    return t ? `"${e}"` : e;
  if (n === "function")
    return "[Function " + (e.name || "anonymous") + "]";
  if (n === "symbol")
    return U1.call(e).replace(W1, "Symbol($1)");
  const r = $1.call(e).slice(8, -1);
  return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + b1.call(e) + "]" : r === "RegExp" ? B1.call(e) : null;
}
function gn(e, t) {
  let n = od(e, t);
  return n !== null ? n : JSON.stringify(e, function(r, i) {
    let s = od(this[r], t);
    return s !== null ? s : i;
  }, 2);
}
function Qm(e) {
  return e == null ? [] : [].concat(e);
}
let Ym, Xm, Zm, K1 = /\$\{\s*(\w+)\s*\}/g;
Ym = Symbol.toStringTag;
class ld {
  constructor(t, n, r, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Ym] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], Qm(t).forEach((s) => {
      if (Ue.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Xm = Symbol.hasInstance;
Zm = Symbol.toStringTag;
class Ue extends Error {
  static formatError(t, n) {
    const r = n.label || n.path || "this";
    return r !== n.path && (n = Object.assign({}, n, {
      path: r
    })), typeof t == "string" ? t.replace(K1, (i, s) => gn(n[s])) : typeof t == "function" ? t(n) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, n, r, i, s) {
    const o = new ld(t, n, r, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Zm] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, Ue);
  }
  static [Xm](t) {
    return ld[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let Pt = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: n,
    originalValue: r
  }) => {
    const i = r != null && r !== n ? ` (cast from the value \`${gn(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${gn(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${gn(n, !0)}\`` + i;
  }
}, be = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, Zt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Ba = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, G1 = {
  isValue: "${path} field must be ${value}"
}, Ua = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, Q1 = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Y1 = {
  notType: (e) => {
    const {
      path: t,
      value: n,
      spec: r
    } = e, i = r.types.length;
    if (Array.isArray(n)) {
      if (n.length < i)
        return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${gn(n, !0)}\``;
      if (n.length > i)
        return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${gn(n, !0)}\``;
    }
    return Ue.formatError(Pt.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Pt,
  string: be,
  number: Zt,
  date: Ba,
  object: Ua,
  array: Q1,
  boolean: G1,
  tuple: Y1
});
const ic = (e) => e && e.__isYupSchema__;
class ao {
  static fromOptions(t, n) {
    if (!n.then && !n.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: i,
      otherwise: s
    } = n, o = typeof r == "function" ? r : (...l) => l.every((a) => a === r);
    return new ao(t, (l, a) => {
      var u;
      let c = o(...l) ? i : s;
      return (u = c == null ? void 0 : c(a)) != null ? u : a;
    });
  }
  constructor(t, n) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = n;
  }
  resolve(t, n) {
    let r = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
    )), i = this.fn(r, t, n);
    if (i === void 0 || // @ts-ignore this can be base
    i === t)
      return t;
    if (!ic(i))
      throw new TypeError("conditions must return a schema object");
    return i.resolve(n);
  }
}
const ms = {
  context: "$",
  value: "."
};
class Jn {
  constructor(t, n = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
      throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === ms.context, this.isValue = this.key[0] === ms.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? ms.context : this.isValue ? ms.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && Un.getter(this.path, !0), this.map = n.map;
  }
  getValue(t, n, r) {
    let i = this.isContext ? r : this.isValue ? t : n;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, n) {
    return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Jn.prototype.__isYupRef = !0;
const It = (e) => e == null;
function rr(e) {
  function t({
    value: n,
    path: r = "",
    options: i,
    originalValue: s,
    schema: o
  }, l, a) {
    const {
      name: u,
      test: c,
      params: f,
      message: d,
      skipAbsent: y
    } = e;
    let {
      parent: v,
      context: x,
      abortEarly: E = o.spec.abortEarly,
      disableStackTrace: m = o.spec.disableStackTrace
    } = i;
    function h(H) {
      return Jn.isRef(H) ? H.getValue(n, v, x) : H;
    }
    function p(H = {}) {
      const z = Object.assign({
        value: n,
        originalValue: s,
        label: o.spec.label,
        path: H.path || r,
        spec: o.spec,
        disableStackTrace: H.disableStackTrace || m
      }, f, H.params);
      for (const X of Object.keys(z))
        z[X] = h(z[X]);
      const K = new Ue(Ue.formatError(H.message || d, z), n, z.path, H.type || u, z.disableStackTrace);
      return K.params = z, K;
    }
    const w = E ? l : a;
    let k = {
      path: r,
      parent: v,
      type: u,
      from: i.from,
      createError: p,
      resolve: h,
      options: i,
      originalValue: s,
      schema: o
    };
    const A = (H) => {
      Ue.isError(H) ? w(H) : H ? a(null) : w(p());
    }, O = (H) => {
      Ue.isError(H) ? w(H) : l(H);
    };
    if (y && It(n))
      return A(!0);
    let b;
    try {
      var M;
      if (b = c.call(k, n, k), typeof ((M = b) == null ? void 0 : M.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(b).then(A, O);
      }
    } catch (H) {
      O(H);
      return;
    }
    A(b);
  }
  return t.OPTIONS = e, t;
}
function X1(e, t, n, r = n) {
  let i, s, o;
  return t ? (Un.forEach(t, (l, a, u) => {
    let c = a ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: r,
      parent: i,
      value: n
    });
    let f = e.type === "tuple", d = u ? parseInt(c, 10) : 0;
    if (e.innerType || f) {
      if (f && !u)
        throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (n && d >= n.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      i = n, n = n && n[d], e = f ? e.spec.types[d] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[c])
        throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      i = n, n = n && n[c], e = e.fields[c];
    }
    s = c, o = a ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: i,
    parentPath: s
  }) : {
    parent: i,
    parentPath: t,
    schema: e
  };
}
class uo extends Set {
  describe() {
    const t = [];
    for (const n of this.values())
      t.push(Jn.isRef(n) ? n.describe() : n);
    return t;
  }
  resolveAll(t) {
    let n = [];
    for (const r of this.values())
      n.push(t(r));
    return n;
  }
  clone() {
    return new uo(this.values());
  }
  merge(t, n) {
    const r = this.clone();
    return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
  }
}
function gr(e, t = /* @__PURE__ */ new Map()) {
  if (ic(e) || !e || typeof e != "object")
    return e;
  if (t.has(e))
    return t.get(e);
  let n;
  if (e instanceof Date)
    n = new Date(e.getTime()), t.set(e, n);
  else if (e instanceof RegExp)
    n = new RegExp(e), t.set(e, n);
  else if (Array.isArray(e)) {
    n = new Array(e.length), t.set(e, n);
    for (let r = 0; r < e.length; r++)
      n[r] = gr(e[r], t);
  } else if (e instanceof Map) {
    n = /* @__PURE__ */ new Map(), t.set(e, n);
    for (const [r, i] of e.entries())
      n.set(r, gr(i, t));
  } else if (e instanceof Set) {
    n = /* @__PURE__ */ new Set(), t.set(e, n);
    for (const r of e)
      n.add(gr(r, t));
  } else if (e instanceof Object) {
    n = {}, t.set(e, n);
    for (const [r, i] of Object.entries(e))
      n[r] = gr(i, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return n;
}
class St {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new uo(), this._blacklist = new uo(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Pt.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t == null ? void 0 : t.spec), this.withMutation((n) => {
      n.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const n = Object.create(Object.getPrototypeOf(this));
    return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = gr(Object.assign({}, this.spec, t)), n;
  }
  label(t) {
    let n = this.clone();
    return n.spec.label = t, n;
  }
  meta(...t) {
    if (t.length === 0)
      return this.spec.meta;
    let n = this.clone();
    return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n;
  }
  withMutation(t) {
    let n = this._mutate;
    this._mutate = !0;
    let r = t(this);
    return this._mutate = n, r;
  }
  concat(t) {
    if (!t || t === this)
      return this;
    if (t.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let n = this, r = t.clone();
    const i = Object.assign({}, n.spec, r.spec);
    return r.spec = i, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation((s) => {
      t.tests.forEach((o) => {
        s.test(o.OPTIONS);
      });
    }), r.transforms = [...n.transforms, ...r.transforms], r;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let n = this;
    if (n.conditions.length) {
      let r = n.conditions;
      n = n.clone(), n.conditions = [], n = r.reduce((i, s) => s.resolve(i, t), n), n = n.resolve(t);
    }
    return n;
  }
  resolveOptions(t) {
    var n, r, i, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (n = t.strict) != null ? n : this.spec.strict,
      abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (i = t.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, n = {}) {
    let r = this.resolve(Object.assign({
      value: t
    }, n)), i = n.assert === "ignore-optionality", s = r._cast(t, n);
    if (n.assert !== !1 && !r.isType(s)) {
      if (i && It(s))
        return s;
      let o = gn(t), l = gn(s);
      throw new TypeError(`The value of ${n.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
` + (l !== o ? `result of cast: ${l}` : ""));
    }
    return s;
  }
  _cast(t, n) {
    let r = t === void 0 ? t : this.transforms.reduce((i, s) => s.call(this, i, t, this), t);
    return r === void 0 && (r = this.getDefault(n)), r;
  }
  _validate(t, n = {}, r, i) {
    let {
      path: s,
      originalValue: o = t,
      strict: l = this.spec.strict
    } = n, a = t;
    l || (a = this._cast(a, Object.assign({
      assert: !1
    }, n)));
    let u = [];
    for (let c of Object.values(this.internalTests))
      c && u.push(c);
    this.runTests({
      path: s,
      value: a,
      originalValue: o,
      options: n,
      tests: u
    }, r, (c) => {
      if (c.length)
        return i(c, a);
      this.runTests({
        path: s,
        value: a,
        originalValue: o,
        options: n,
        tests: this.tests
      }, r, i);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, n, r) {
    let i = !1, {
      tests: s,
      value: o,
      originalValue: l,
      path: a,
      options: u
    } = t, c = (x) => {
      i || (i = !0, n(x, o));
    }, f = (x) => {
      i || (i = !0, r(x, o));
    }, d = s.length, y = [];
    if (!d)
      return f([]);
    let v = {
      value: o,
      originalValue: l,
      path: a,
      options: u,
      schema: this
    };
    for (let x = 0; x < s.length; x++) {
      const E = s[x];
      E(v, c, function(h) {
        h && (Array.isArray(h) ? y.push(...h) : y.push(h)), --d <= 0 && f(y);
      });
    }
  }
  asNestedTest({
    key: t,
    index: n,
    parent: r,
    parentPath: i,
    originalParent: s,
    options: o
  }) {
    const l = t ?? n;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const a = typeof l == "number";
    let u = r[l];
    const c = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: u,
      originalValue: s[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [a ? "index" : "key"]: l,
      path: a || l.includes(".") ? `${i || ""}[${a ? l : `"${l}"`}]` : (i ? `${i}.` : "") + t
    });
    return (f, d, y) => this.resolve(c)._validate(u, c, d, y);
  }
  validate(t, n) {
    var r;
    let i = this.resolve(Object.assign({}, n, {
      value: t
    })), s = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
    return new Promise((o, l) => i._validate(t, n, (a, u) => {
      Ue.isError(a) && (a.value = u), l(a);
    }, (a, u) => {
      a.length ? l(new Ue(a, u, void 0, void 0, s)) : o(u);
    }));
  }
  validateSync(t, n) {
    var r;
    let i = this.resolve(Object.assign({}, n, {
      value: t
    })), s, o = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
    return i._validate(t, Object.assign({}, n, {
      sync: !0
    }), (l, a) => {
      throw Ue.isError(l) && (l.value = a), l;
    }, (l, a) => {
      if (l.length)
        throw new Ue(l, t, void 0, void 0, o);
      s = a;
    }), s;
  }
  isValid(t, n) {
    return this.validate(t, n).then(() => !0, (r) => {
      if (Ue.isError(r))
        return !1;
      throw r;
    });
  }
  isValidSync(t, n) {
    try {
      return this.validateSync(t, n), !0;
    } catch (r) {
      if (Ue.isError(r))
        return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let n = this.spec.default;
    return n == null ? n : typeof n == "function" ? n.call(this, t) : gr(n);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, n) {
    const r = this.clone({
      nullable: t
    });
    return r.internalTests.nullable = rr({
      message: n,
      name: "nullable",
      test(i) {
        return i === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(t, n) {
    const r = this.clone({
      optional: t
    });
    return r.internalTests.optionality = rr({
      message: n,
      name: "optionality",
      test(i) {
        return i === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = Pt.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = Pt.notNull) {
    return this.nullability(!1, t);
  }
  required(t = Pt.required) {
    return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let n = this.clone();
    return n.transforms.push(t), n;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let n;
    if (t.length === 1 ? typeof t[0] == "function" ? n = {
      test: t[0]
    } : n = t[0] : t.length === 2 ? n = {
      name: t[0],
      test: t[1]
    } : n = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, n.message === void 0 && (n.message = Pt.default), typeof n.test != "function")
      throw new TypeError("`test` is a required parameters");
    let r = this.clone(), i = rr(n), s = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
    if (n.exclusive && !n.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((o) => !(o.OPTIONS.name === n.name && (s || o.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
  }
  when(t, n) {
    !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
    let r = this.clone(), i = Qm(t).map((s) => new Jn(s));
    return i.forEach((s) => {
      s.isSibling && r.deps.push(s.key);
    }), r.conditions.push(typeof n == "function" ? new ao(i, n) : ao.fromOptions(i, n)), r;
  }
  typeError(t) {
    let n = this.clone();
    return n.internalTests.typeError = rr({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(r) {
        return this.schema._typeCheck(r) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), n;
  }
  oneOf(t, n = Pt.oneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._whitelist.add(i), r._blacklist.delete(i);
    }), r.internalTests.whiteList = rr({
      message: n,
      name: "oneOf",
      skipAbsent: !0,
      test(i) {
        let s = this.schema._whitelist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        });
      }
    }), r;
  }
  notOneOf(t, n = Pt.notOneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._blacklist.add(i), r._whitelist.delete(i);
    }), r.internalTests.blacklist = rr({
      message: n,
      name: "notOneOf",
      test(i) {
        let s = this.schema._blacklist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), r;
  }
  strip(t = !0) {
    let n = this.clone();
    return n.spec.strip = t, n;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(), {
      label: r,
      meta: i,
      optional: s,
      nullable: o
    } = n.spec;
    return {
      meta: i,
      label: r,
      optional: s,
      nullable: o,
      default: n.getDefault(t),
      type: n.type,
      oneOf: n._whitelist.describe(),
      notOneOf: n._blacklist.describe(),
      tests: n.tests.map((a) => ({
        name: a.OPTIONS.name,
        params: a.OPTIONS.params
      })).filter((a, u, c) => c.findIndex((f) => f.name === a.name) === u)
    };
  }
}
St.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  St.prototype[`${e}At`] = function(t, n, r = {}) {
    const {
      parent: i,
      parentPath: s,
      schema: o
    } = X1(this, t, n, r.context);
    return o[e](i && i[s], Object.assign({}, r, {
      parent: i,
      path: t
    }));
  };
for (const e of ["equals", "is"])
  St.prototype[e] = St.prototype.oneOf;
for (const e of ["not", "nope"])
  St.prototype[e] = St.prototype.notOneOf;
const Z1 = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function q1(e) {
  const t = Wa(e);
  if (!t)
    return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let n = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
}
function Wa(e) {
  var t, n;
  const r = Z1.exec(e);
  return r ? {
    year: Ot(r[1]),
    month: Ot(r[2], 1) - 1,
    day: Ot(r[3], 1),
    hour: Ot(r[4]),
    minute: Ot(r[5]),
    second: Ot(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Ot(r[7].substring(0, 3))
    ) : 0,
    precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: Ot(r[10]),
    minuteOffset: Ot(r[11])
  } : null;
}
function Ot(e, t = 0) {
  return Number(e) || t;
}
let J1 = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), ex = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), tx = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, nx = "^\\d{4}-\\d{2}-\\d{2}", rx = "\\d{2}:\\d{2}:\\d{2}", ix = "(([+-]\\d{2}(:?\\d{2})?)|Z)", sx = new RegExp(`${nx}T${rx}(\\.\\d+)?${ix}$`), ox = (e) => It(e) || e === e.trim(), lx = {}.toString();
function Os() {
  return new qm();
}
class qm extends St {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => {
        if (!r.spec.coerce || r.isType(t) || Array.isArray(t))
          return t;
        const i = t != null && t.toString ? t.toString() : t;
        return i === lx ? t : i;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((n) => n.test({
      message: t || Pt.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
  }
  length(t, n = be.length) {
    return this.test({
      message: n,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(t);
      }
    });
  }
  min(t, n = be.min) {
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(t);
      }
    });
  }
  max(t, n = be.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: n,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(t);
      }
    });
  }
  matches(t, n) {
    let r = !1, i, s;
    return n && (typeof n == "object" ? {
      excludeEmptyString: r = !1,
      message: i,
      name: s
    } = n : i = n), this.test({
      name: s || "matches",
      message: i || be.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && r || o.search(t) !== -1
    });
  }
  email(t = be.email) {
    return this.matches(J1, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = be.url) {
    return this.matches(ex, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = be.uuid) {
    return this.matches(tx, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let n = "", r, i;
    return t && (typeof t == "object" ? {
      message: n = "",
      allowOffset: r = !1,
      precision: i = void 0
    } = t : n = t), this.matches(sx, {
      name: "datetime",
      message: n || be.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: n || be.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || r)
          return !0;
        const o = Wa(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: n || be.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i == null)
          return !0;
        const o = Wa(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = be.trim) {
    return this.transform((n) => n != null ? n.trim() : n).test({
      message: t,
      name: "trim",
      test: ox
    });
  }
  lowercase(t = be.lowercase) {
    return this.transform((n) => It(n) ? n : n.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => It(n) || n === n.toLowerCase()
    });
  }
  uppercase(t = be.uppercase) {
    return this.transform((n) => It(n) ? n : n.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => It(n) || n === n.toUpperCase()
    });
  }
}
Os.prototype = qm.prototype;
let ax = (e) => e != +e;
function Jm() {
  return new ey();
}
class ey extends St {
  constructor() {
    super({
      type: "number",
      check(t) {
        return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !ax(t);
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => {
        if (!r.spec.coerce)
          return t;
        let i = t;
        if (typeof i == "string") {
          if (i = i.replace(/\s/g, ""), i === "")
            return NaN;
          i = +i;
        }
        return r.isType(i) || i === null ? i : parseFloat(i);
      });
    });
  }
  min(t, n = Zt.min) {
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(r) {
        return r >= this.resolve(t);
      }
    });
  }
  max(t, n = Zt.max) {
    return this.test({
      message: n,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(r) {
        return r <= this.resolve(t);
      }
    });
  }
  lessThan(t, n = Zt.lessThan) {
    return this.test({
      message: n,
      name: "max",
      exclusive: !0,
      params: {
        less: t
      },
      skipAbsent: !0,
      test(r) {
        return r < this.resolve(t);
      }
    });
  }
  moreThan(t, n = Zt.moreThan) {
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        more: t
      },
      skipAbsent: !0,
      test(r) {
        return r > this.resolve(t);
      }
    });
  }
  positive(t = Zt.positive) {
    return this.moreThan(0, t);
  }
  negative(t = Zt.negative) {
    return this.lessThan(0, t);
  }
  integer(t = Zt.integer) {
    return this.test({
      name: "integer",
      message: t,
      skipAbsent: !0,
      test: (n) => Number.isInteger(n)
    });
  }
  truncate() {
    return this.transform((t) => It(t) ? t : t | 0);
  }
  round(t) {
    var n;
    let r = ["ceil", "floor", "round", "trunc"];
    if (t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round", t === "trunc")
      return this.truncate();
    if (r.indexOf(t.toLowerCase()) === -1)
      throw new TypeError("Only valid options for round() are: " + r.join(", "));
    return this.transform((i) => It(i) ? i : Math[t](i));
  }
}
Jm.prototype = ey.prototype;
let ux = /* @__PURE__ */ new Date(""), cx = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Uo extends St {
  constructor() {
    super({
      type: "date",
      check(t) {
        return cx(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = q1(t), isNaN(t) ? Uo.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, n) {
    let r;
    if (Jn.isRef(t))
      r = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i))
        throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = i;
    }
    return r;
  }
  min(t, n = Ba.min) {
    let r = this.prepareParam(t, "min");
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(r);
      }
    });
  }
  max(t, n = Ba.max) {
    let r = this.prepareParam(t, "max");
    return this.test({
      message: n,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(r);
      }
    });
  }
}
Uo.INVALID_DATE = ux;
Uo.prototype;
function fx(e, t = []) {
  let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([o, l]) => `${o}-${l}`));
  function s(o, l) {
    let a = Un.split(o)[0];
    r.add(a), i.has(`${l}-${a}`) || n.push([l, a]);
  }
  for (const o of Object.keys(e)) {
    let l = e[o];
    r.add(o), Jn.isRef(l) && l.isSibling ? s(l.path, o) : ic(l) && "deps" in l && l.deps.forEach((a) => s(a, o));
  }
  return z1.array(Array.from(r), n).reverse();
}
function ad(e, t) {
  let n = 1 / 0;
  return e.some((r, i) => {
    var s;
    if ((s = t.path) != null && s.includes(r))
      return n = i, !0;
  }), n;
}
function ty(e) {
  return (t, n) => ad(e, t) - ad(e, n);
}
const dx = (e, t, n) => {
  if (typeof e != "string")
    return e;
  let r = e;
  try {
    r = JSON.parse(e);
  } catch {
  }
  return n.isType(r) ? r : e;
};
function Rs(e) {
  if ("fields" in e) {
    const t = {};
    for (const [n, r] of Object.entries(e.fields))
      t[n] = Rs(r);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = Rs(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(Rs)
  }) : "optional" in e ? e.optional() : e;
}
const hx = (e, t) => {
  const n = [...Un.normalizePath(t)];
  if (n.length === 1)
    return n[0] in e;
  let r = n.pop(), i = Un.getter(Un.join(n), !0)(e);
  return !!(i && r in i);
};
let ud = (e) => Object.prototype.toString.call(e) === "[object Object]";
function px(e, t) {
  let n = Object.keys(e.fields);
  return Object.keys(t).filter((r) => n.indexOf(r) === -1);
}
const mx = ty([]);
function ny(e) {
  return new ry(e);
}
class ry extends St {
  constructor(t) {
    super({
      type: "object",
      check(n) {
        return ud(n) || typeof n == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = mx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, n = {}) {
    var r;
    let i = super._cast(t, n);
    if (i === void 0)
      return this.getDefault(n);
    if (!this._typeCheck(i))
      return i;
    let s = this.fields, o = (r = n.stripUnknown) != null ? r : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(i).filter((f) => !this._nodes.includes(f))), a = {}, u = Object.assign({}, n, {
      parent: a,
      __validating: n.__validating || !1
    }), c = !1;
    for (const f of l) {
      let d = s[f], y = f in i;
      if (d) {
        let v, x = i[f];
        u.path = (n.path ? `${n.path}.` : "") + f, d = d.resolve({
          value: x,
          context: n.context,
          parent: a
        });
        let E = d instanceof St ? d.spec : void 0, m = E == null ? void 0 : E.strict;
        if (E != null && E.strip) {
          c = c || f in i;
          continue;
        }
        v = !n.__validating || !m ? (
          // TODO: use _cast, this is double resolving
          d.cast(i[f], u)
        ) : i[f], v !== void 0 && (a[f] = v);
      } else
        y && !o && (a[f] = i[f]);
      (y !== f in a || a[f] !== i[f]) && (c = !0);
    }
    return c ? a : i;
  }
  _validate(t, n = {}, r, i) {
    let {
      from: s = [],
      originalValue: o = t,
      recursive: l = this.spec.recursive
    } = n;
    n.from = [{
      schema: this,
      value: o
    }, ...s], n.__validating = !0, n.originalValue = o, super._validate(t, n, r, (a, u) => {
      if (!l || !ud(u)) {
        i(a, u);
        return;
      }
      o = o || u;
      let c = [];
      for (let f of this._nodes) {
        let d = this.fields[f];
        !d || Jn.isRef(d) || c.push(d.asNestedTest({
          options: n,
          key: f,
          parent: u,
          parentPath: n.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: c,
        value: u,
        originalValue: o,
        options: n
      }, r, (f) => {
        i(f.sort(this._sortErrors).concat(a), u);
      });
    });
  }
  clone(t) {
    const n = super.clone(t);
    return n.fields = Object.assign({}, this.fields), n._nodes = this._nodes, n._excludedEdges = this._excludedEdges, n._sortErrors = this._sortErrors, n;
  }
  concat(t) {
    let n = super.concat(t), r = n.fields;
    for (let [i, s] of Object.entries(this.fields)) {
      const o = r[i];
      r[i] = o === void 0 ? s : o;
    }
    return n.withMutation((i) => (
      // XXX: excludes here is wrong
      i.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let n = {};
    return this._nodes.forEach((r) => {
      var i;
      const s = this.fields[r];
      let o = t;
      (i = o) != null && i.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[r]
      })), n[r] = s && "getDefault" in s ? s.getDefault(o) : void 0;
    }), n;
  }
  setFields(t, n) {
    let r = this.clone();
    return r.fields = t, r._nodes = fx(t, n), r._sortErrors = ty(Object.keys(t)), n && (r._excludedEdges = n), r;
  }
  shape(t, n = []) {
    return this.clone().withMutation((r) => {
      let i = r._excludedEdges;
      return n.length && (Array.isArray(n[0]) || (n = [n]), i = [...r._excludedEdges, ...n]), r.setFields(Object.assign(r.fields, t), i);
    });
  }
  partial() {
    const t = {};
    for (const [n, r] of Object.entries(this.fields))
      t[n] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(t);
  }
  deepPartial() {
    return Rs(this);
  }
  pick(t) {
    const n = {};
    for (const r of t)
      this.fields[r] && (n[r] = this.fields[r]);
    return this.setFields(n, this._excludedEdges.filter(([r, i]) => t.includes(r) && t.includes(i)));
  }
  omit(t) {
    const n = [];
    for (const r of Object.keys(this.fields))
      t.includes(r) || n.push(r);
    return this.pick(n);
  }
  from(t, n, r) {
    let i = Un.getter(t, !0);
    return this.transform((s) => {
      if (!s)
        return s;
      let o = s;
      return hx(s, t) && (o = Object.assign({}, s), r || delete o[t], o[n] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(dx);
  }
  noUnknown(t = !0, n = Ua.noUnknown) {
    typeof t != "boolean" && (n = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: n,
      test(i) {
        if (i == null)
          return !0;
        const s = px(this.schema, i);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, n = Ua.noUnknown) {
    return this.noUnknown(!t, n);
  }
  transformKeys(t) {
    return this.transform((n) => {
      if (!n)
        return n;
      const r = {};
      for (const i of Object.keys(n))
        r[t(i)] = n[i];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(Al.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Al.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Al.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
    r.fields = {};
    for (const [s, o] of Object.entries(n.fields)) {
      var i;
      let l = t;
      (i = l) != null && i.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[s]
      })), r.fields[s] = o.describe(l);
    }
    return r;
  }
}
ny.prototype = ry.prototype;
const yx = ny({
  firstName: Os().required("This field is required"),
  lastName: Os().required("This field is required"),
  age: Jm().min(0).positive().max(125).required("This field is required"),
  email: Os().email()
});
function gx(e, t) {
  const n = {};
  return e.username ? e.username.toLowerCase().includes(t.ContactInfo.firstName.toLowerCase()) || (n.username = `Username should contain your first name (${t.ContactInfo.firstName})`) : n.username = "This field is required", n;
}
var Hi = (e) => e.type === "checkbox", vr = (e) => e instanceof Date, je = (e) => e == null;
const iy = (e) => typeof e == "object";
var ke = (e) => !je(e) && !Array.isArray(e) && iy(e) && !vr(e), vx = (e) => ke(e) && e.target ? Hi(e.target) ? e.target.checked : e.target.value : e, xx = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, wx = (e, t) => e.has(xx(t)), Sx = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ke(t) && t.hasOwnProperty("isPrototypeOf");
}, sc = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function it(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(sc && (e instanceof Blob || e instanceof FileList)) && (n || ke(e)))
    if (t = n ? [] : {}, !n && !Sx(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = it(e[r]));
  else
    return e;
  return t;
}
var Ki = (e) => Array.isArray(e) ? e.filter(Boolean) : [], me = (e) => e === void 0, L = (e, t, n) => {
  if (!t || !ke(e))
    return n;
  const r = Ki(t.split(/[,[\].]+?/)).reduce((i, s) => je(i) ? i : i[s], e);
  return me(r) || r === e ? me(e[t]) ? n : e[t] : r;
}, sn = (e) => typeof e == "boolean", oc = (e) => /^\w*$/.test(e), sy = (e) => Ki(e.replace(/["|']|\]/g, "").split(/\.|\[/)), se = (e, t, n) => {
  let r = -1;
  const i = oc(t) ? [t] : sy(t), s = i.length, o = s - 1;
  for (; ++r < s; ) {
    const l = i[r];
    let a = n;
    if (r !== o) {
      const u = e[l];
      a = ke(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
    }
    if (l === "__proto__")
      return;
    e[l] = a, e = e[l];
  }
  return e;
};
const cd = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, gt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Rt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, oy = pe.createContext(null), lc = () => pe.useContext(oy), kx = (e) => {
  const { children: t, ...n } = e;
  return pe.createElement(oy.Provider, { value: n }, t);
};
var Tx = (e, t, n, r = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const o = s;
        return t._proxyFormState[o] !== gt.all && (t._proxyFormState[o] = !r || gt.all), e[o];
      }
    });
  return i;
}, Ye = (e) => ke(e) && !Object.keys(e).length, Ex = (e, t, n, r) => {
  n(e);
  const { name: i, ...s } = e;
  return Ye(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((o) => t[o] === gt.all);
}, Fl = (e) => Array.isArray(e) ? e : [e];
function Px(e) {
  const t = pe.useRef(e);
  t.current = e, pe.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
var _t = (e) => typeof e == "string", Cx = (e, t, n, r, i) => _t(e) ? (r && t.watch.add(e), L(n, e, i)) : Array.isArray(e) ? e.map((s) => (r && t.watch.add(s), L(n, s))) : (r && (t.watchAll = !0), n), ly = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: i || !0
  }
} : {}, fd = (e) => ({
  isOnSubmit: !e || e === gt.onSubmit,
  isOnBlur: e === gt.onBlur,
  isOnChange: e === gt.onChange,
  isOnAll: e === gt.all,
  isOnTouch: e === gt.onTouched
}), dd = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const hi = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const s = L(e, i);
    if (s) {
      const { _f: o, ...l } = s;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], i) && !r)
          break;
        if (o.ref && t(o.ref, o.name) && !r)
          break;
        hi(l, t);
      } else
        ke(l) && hi(l, t);
    }
  }
};
var _x = (e, t, n) => {
  const r = Ki(L(e, n));
  return se(r, "root", t[n]), se(e, n, r), e;
}, ac = (e) => e.type === "file", an = (e) => typeof e == "function", co = (e) => {
  if (!sc)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ns = (e) => _t(e), uc = (e) => e.type === "radio", fo = (e) => e instanceof RegExp;
const hd = {
  value: !1,
  isValid: !1
}, pd = { value: !0, isValid: !0 };
var ay = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !me(e[0].attributes.value) ? me(e[0].value) || e[0].value === "" ? pd : { value: e[0].value, isValid: !0 } : pd
    ) : hd;
  }
  return hd;
};
const md = {
  isValid: !1,
  value: null
};
var uy = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, md) : md;
function yd(e, t, n = "validate") {
  if (Ns(e) || Array.isArray(e) && e.every(Ns) || sn(e) && !e)
    return {
      type: n,
      message: Ns(e) ? e : "",
      ref: t
    };
}
var ir = (e) => ke(e) && !fo(e) ? e : {
  value: e,
  message: ""
}, gd = async (e, t, n, r, i) => {
  const { ref: s, refs: o, required: l, maxLength: a, minLength: u, min: c, max: f, pattern: d, validate: y, name: v, valueAsNumber: x, mount: E, disabled: m } = e._f, h = L(t, v);
  if (!E || m)
    return {};
  const p = o ? o[0] : s, w = (z) => {
    r && p.reportValidity && (p.setCustomValidity(sn(z) ? "" : z || ""), p.reportValidity());
  }, k = {}, A = uc(s), O = Hi(s), P = A || O, b = (x || ac(s)) && me(s.value) && me(h) || co(s) && s.value === "" || h === "" || Array.isArray(h) && !h.length, M = ly.bind(null, v, n, k), H = (z, K, X, Q = Rt.maxLength, te = Rt.minLength) => {
    const B = z ? K : X;
    k[v] = {
      type: z ? Q : te,
      message: B,
      ref: s,
      ...M(z ? Q : te, B)
    };
  };
  if (i ? !Array.isArray(h) || !h.length : l && (!P && (b || je(h)) || sn(h) && !h || O && !ay(o).isValid || A && !uy(o).isValid)) {
    const { value: z, message: K } = Ns(l) ? { value: !!l, message: l } : ir(l);
    if (z && (k[v] = {
      type: Rt.required,
      message: K,
      ref: p,
      ...M(Rt.required, K)
    }, !n))
      return w(K), k;
  }
  if (!b && (!je(c) || !je(f))) {
    let z, K;
    const X = ir(f), Q = ir(c);
    if (!je(h) && !isNaN(h)) {
      const te = s.valueAsNumber || h && +h;
      je(X.value) || (z = te > X.value), je(Q.value) || (K = te < Q.value);
    } else {
      const te = s.valueAsDate || new Date(h), B = (W) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + W), C = s.type == "time", I = s.type == "week";
      _t(X.value) && h && (z = C ? B(h) > B(X.value) : I ? h > X.value : te > new Date(X.value)), _t(Q.value) && h && (K = C ? B(h) < B(Q.value) : I ? h < Q.value : te < new Date(Q.value));
    }
    if ((z || K) && (H(!!z, X.message, Q.message, Rt.max, Rt.min), !n))
      return w(k[v].message), k;
  }
  if ((a || u) && !b && (_t(h) || i && Array.isArray(h))) {
    const z = ir(a), K = ir(u), X = !je(z.value) && h.length > +z.value, Q = !je(K.value) && h.length < +K.value;
    if ((X || Q) && (H(X, z.message, K.message), !n))
      return w(k[v].message), k;
  }
  if (d && !b && _t(h)) {
    const { value: z, message: K } = ir(d);
    if (fo(z) && !h.match(z) && (k[v] = {
      type: Rt.pattern,
      message: K,
      ref: s,
      ...M(Rt.pattern, K)
    }, !n))
      return w(K), k;
  }
  if (y) {
    if (an(y)) {
      const z = await y(h, t), K = yd(z, p);
      if (K && (k[v] = {
        ...K,
        ...M(Rt.validate, K.message)
      }, !n))
        return w(K.message), k;
    } else if (ke(y)) {
      let z = {};
      for (const K in y) {
        if (!Ye(z) && !n)
          break;
        const X = yd(await y[K](h, t), p, K);
        X && (z = {
          ...X,
          ...M(K, X.message)
        }, w(X.message), n && (k[v] = z));
      }
      if (!Ye(z) && (k[v] = {
        ref: p,
        ...z
      }, !n))
        return k;
    }
  }
  return w(!0), k;
};
function Ax(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = me(e) ? r++ : e[t[r++]];
  return e;
}
function Fx(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !me(e[t]))
      return !1;
  return !0;
}
function xe(e, t) {
  const n = Array.isArray(t) ? t : oc(t) ? [t] : sy(t), r = n.length === 1 ? e : Ax(e, n), i = n.length - 1, s = n[i];
  return r && delete r[s], i !== 0 && (ke(r) && Ye(r) || Array.isArray(r) && Fx(r)) && xe(e, n.slice(0, -1)), e;
}
var Dl = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const s of e)
        s.next && s.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((s) => s !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, ho = (e) => je(e) || !iy(e);
function zn(e, t) {
  if (ho(e) || ho(t))
    return e === t;
  if (vr(e) && vr(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const i of n) {
    const s = e[i];
    if (!r.includes(i))
      return !1;
    if (i !== "ref") {
      const o = t[i];
      if (vr(s) && vr(o) || ke(s) && ke(o) || Array.isArray(s) && Array.isArray(o) ? !zn(s, o) : s !== o)
        return !1;
    }
  }
  return !0;
}
var cy = (e) => e.type === "select-multiple", Dx = (e) => uc(e) || Hi(e), Vl = (e) => co(e) && e.isConnected, fy = (e) => {
  for (const t in e)
    if (an(e[t]))
      return !0;
  return !1;
};
function po(e, t = {}) {
  const n = Array.isArray(e);
  if (ke(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || ke(e[r]) && !fy(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, po(e[r], t[r])) : je(e[r]) || (t[r] = !0);
  return t;
}
function dy(e, t, n) {
  const r = Array.isArray(e);
  if (ke(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || ke(e[i]) && !fy(e[i]) ? me(t) || ho(n[i]) ? n[i] = Array.isArray(e[i]) ? po(e[i], []) : { ...po(e[i]) } : dy(e[i], je(t) ? {} : t[i], n[i]) : n[i] = !zn(e[i], t[i]);
  return n;
}
var ys = (e, t) => dy(e, t, po(t)), hy = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => me(e) ? e : t ? e === "" ? NaN : e && +e : n && _t(e) ? new Date(e) : r ? r(e) : e;
function Ol(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return ac(t) ? t.files : uc(t) ? uy(e.refs).value : cy(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Hi(t) ? ay(e.refs).value : hy(me(t.value) ? e.ref.value : t.value, e);
}
var Vx = (e, t, n, r) => {
  const i = {};
  for (const s of e) {
    const o = L(t, s);
    o && se(i, s, o._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: r
  };
}, Zr = (e) => me(e) ? e : fo(e) ? e.source : ke(e) ? fo(e.value) ? e.value.source : e.value : e, Ox = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function vd(e, t, n) {
  const r = L(e, n);
  if (r || oc(n))
    return {
      error: r,
      name: n
    };
  const i = n.split(".");
  for (; i.length; ) {
    const s = i.join("."), o = L(t, s), l = L(e, s);
    if (o && !Array.isArray(o) && n !== s)
      return { name: n };
    if (l && l.type)
      return {
        name: s,
        error: l
      };
    i.pop();
  }
  return {
    name: n
  };
}
var Rx = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, Nx = (e, t) => !Ki(L(e, t)).length && xe(e, t);
const Mx = {
  mode: gt.onSubmit,
  reValidateMode: gt.onChange,
  shouldFocusError: !0
};
function Lx(e = {}) {
  let t = {
    ...Mx,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: an(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, i = ke(t.defaultValues) || ke(t.values) ? it(t.defaultValues || t.values) || {} : {}, s = t.shouldUnregister ? {} : it(i), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, a, u = 0;
  const c = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: Dl(),
    array: Dl(),
    state: Dl()
  }, d = fd(t.mode), y = fd(t.reValidateMode), v = t.criteriaMode === gt.all, x = (g) => (S) => {
    clearTimeout(u), u = setTimeout(g, S);
  }, E = async (g) => {
    if (c.isValid || g) {
      const S = t.resolver ? Ye((await P()).errors) : await M(r, !0);
      S !== n.isValid && f.state.next({
        isValid: S
      });
    }
  }, m = (g, S) => {
    (c.isValidating || c.validatingFields) && ((g || Array.from(l.mount)).forEach((T) => {
      T && (S ? se(n.validatingFields, T, S) : xe(n.validatingFields, T));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Ye(n.validatingFields)
    }));
  }, h = (g, S = [], T, N, R = !0, F = !0) => {
    if (N && T) {
      if (o.action = !0, F && Array.isArray(L(r, g))) {
        const $ = T(L(r, g), N.argA, N.argB);
        R && se(r, g, $);
      }
      if (F && Array.isArray(L(n.errors, g))) {
        const $ = T(L(n.errors, g), N.argA, N.argB);
        R && se(n.errors, g, $), Nx(n.errors, g);
      }
      if (c.touchedFields && F && Array.isArray(L(n.touchedFields, g))) {
        const $ = T(L(n.touchedFields, g), N.argA, N.argB);
        R && se(n.touchedFields, g, $);
      }
      c.dirtyFields && (n.dirtyFields = ys(i, s)), f.state.next({
        name: g,
        isDirty: z(g, S),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      se(s, g, S);
  }, p = (g, S) => {
    se(n.errors, g, S), f.state.next({
      errors: n.errors
    });
  }, w = (g) => {
    n.errors = g, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, k = (g, S, T, N) => {
    const R = L(r, g);
    if (R) {
      const F = L(s, g, me(T) ? L(i, g) : T);
      me(F) || N && N.defaultChecked || S ? se(s, g, S ? F : Ol(R._f)) : Q(g, F), o.mount && E();
    }
  }, A = (g, S, T, N, R) => {
    let F = !1, $ = !1;
    const Z = {
      name: g
    }, ge = !!(L(r, g) && L(r, g)._f.disabled);
    if (!T || N) {
      c.isDirty && ($ = n.isDirty, n.isDirty = Z.isDirty = z(), F = $ !== Z.isDirty);
      const Qe = ge || zn(L(i, g), S);
      $ = !!(!ge && L(n.dirtyFields, g)), Qe || ge ? xe(n.dirtyFields, g) : se(n.dirtyFields, g, !0), Z.dirtyFields = n.dirtyFields, F = F || c.dirtyFields && $ !== !Qe;
    }
    if (T) {
      const Qe = L(n.touchedFields, g);
      Qe || (se(n.touchedFields, g, T), Z.touchedFields = n.touchedFields, F = F || c.touchedFields && Qe !== T);
    }
    return F && R && f.state.next(Z), F ? Z : {};
  }, O = (g, S, T, N) => {
    const R = L(n.errors, g), F = c.isValid && sn(S) && n.isValid !== S;
    if (e.delayError && T ? (a = x(() => p(g, T)), a(e.delayError)) : (clearTimeout(u), a = null, T ? se(n.errors, g, T) : xe(n.errors, g)), (T ? !zn(R, T) : R) || !Ye(N) || F) {
      const $ = {
        ...N,
        ...F && sn(S) ? { isValid: S } : {},
        errors: n.errors,
        name: g
      };
      n = {
        ...n,
        ...$
      }, f.state.next($);
    }
  }, P = async (g) => {
    m(g, !0);
    const S = await t.resolver(s, t.context, Vx(g || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return m(g), S;
  }, b = async (g) => {
    const { errors: S } = await P(g);
    if (g)
      for (const T of g) {
        const N = L(S, T);
        N ? se(n.errors, T, N) : xe(n.errors, T);
      }
    else
      n.errors = S;
    return S;
  }, M = async (g, S, T = {
    valid: !0
  }) => {
    for (const N in g) {
      const R = g[N];
      if (R) {
        const { _f: F, ...$ } = R;
        if (F) {
          const Z = l.array.has(F.name);
          m([N], !0);
          const ge = await gd(R, s, v, t.shouldUseNativeValidation && !S, Z);
          if (m([N]), ge[F.name] && (T.valid = !1, S))
            break;
          !S && (L(ge, F.name) ? Z ? _x(n.errors, ge, F.name) : se(n.errors, F.name, ge[F.name]) : xe(n.errors, F.name));
        }
        $ && await M($, S, T);
      }
    }
    return T.valid;
  }, H = () => {
    for (const g of l.unMount) {
      const S = L(r, g);
      S && (S._f.refs ? S._f.refs.every((T) => !Vl(T)) : !Vl(S._f.ref)) && dt(g);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, z = (g, S) => (g && S && se(s, g, S), !zn(ee(), i)), K = (g, S, T) => Cx(g, l, {
    ...o.mount ? s : me(S) ? i : _t(g) ? { [g]: S } : S
  }, T, S), X = (g) => Ki(L(o.mount ? s : i, g, e.shouldUnregister ? L(i, g, []) : [])), Q = (g, S, T = {}) => {
    const N = L(r, g);
    let R = S;
    if (N) {
      const F = N._f;
      F && (!F.disabled && se(s, g, hy(S, F)), R = co(F.ref) && je(S) ? "" : S, cy(F.ref) ? [...F.ref.options].forEach(($) => $.selected = R.includes($.value)) : F.refs ? Hi(F.ref) ? F.refs.length > 1 ? F.refs.forEach(($) => (!$.defaultChecked || !$.disabled) && ($.checked = Array.isArray(R) ? !!R.find((Z) => Z === $.value) : R === $.value)) : F.refs[0] && (F.refs[0].checked = !!R) : F.refs.forEach(($) => $.checked = $.value === R) : ac(F.ref) ? F.ref.value = "" : (F.ref.value = R, F.ref.type || f.values.next({
        name: g,
        values: { ...s }
      })));
    }
    (T.shouldDirty || T.shouldTouch) && A(g, R, T.shouldTouch, T.shouldDirty, !0), T.shouldValidate && W(g);
  }, te = (g, S, T) => {
    for (const N in S) {
      const R = S[N], F = `${g}.${N}`, $ = L(r, F);
      (l.array.has(g) || !ho(R) || $ && !$._f) && !vr(R) ? te(F, R, T) : Q(F, R, T);
    }
  }, B = (g, S, T = {}) => {
    const N = L(r, g), R = l.array.has(g), F = it(S);
    se(s, g, F), R ? (f.array.next({
      name: g,
      values: { ...s }
    }), (c.isDirty || c.dirtyFields) && T.shouldDirty && f.state.next({
      name: g,
      dirtyFields: ys(i, s),
      isDirty: z(g, F)
    })) : N && !N._f && !je(F) ? te(g, F, T) : Q(g, F, T), dd(g, l) && f.state.next({ ...n }), f.values.next({
      name: o.mount ? g : void 0,
      values: { ...s }
    });
  }, C = async (g) => {
    o.mount = !0;
    const S = g.target;
    let T = S.name, N = !0;
    const R = L(r, T), F = () => S.type ? Ol(R._f) : vx(g), $ = (Z) => {
      N = Number.isNaN(Z) || Z === L(s, T, Z);
    };
    if (R) {
      let Z, ge;
      const Qe = F(), tr = g.type === cd.BLUR || g.type === cd.FOCUS_OUT, Kg = !Ox(R._f) && !t.resolver && !L(n.errors, T) && !R._f.deps || Rx(tr, L(n.touchedFields, T), n.isSubmitted, y, d), Jo = dd(T, l, tr);
      se(s, T, Qe), tr ? (R._f.onBlur && R._f.onBlur(g), a && a(0)) : R._f.onChange && R._f.onChange(g);
      const el = A(T, Qe, tr, !1), Gg = !Ye(el) || Jo;
      if (!tr && f.values.next({
        name: T,
        type: g.type,
        values: { ...s }
      }), Kg)
        return c.isValid && E(), Gg && f.state.next({ name: T, ...Jo ? {} : el });
      if (!tr && Jo && f.state.next({ ...n }), t.resolver) {
        const { errors: Hc } = await P([T]);
        if ($(Qe), N) {
          const Qg = vd(n.errors, r, T), Kc = vd(Hc, r, Qg.name || T);
          Z = Kc.error, T = Kc.name, ge = Ye(Hc);
        }
      } else
        m([T], !0), Z = (await gd(R, s, v, t.shouldUseNativeValidation))[T], m([T]), $(Qe), N && (Z ? ge = !1 : c.isValid && (ge = await M(r, !0)));
      N && (R._f.deps && W(R._f.deps), O(T, ge, Z, el));
    }
  }, I = (g, S) => {
    if (L(n.errors, S) && g.focus)
      return g.focus(), 1;
  }, W = async (g, S = {}) => {
    let T, N;
    const R = Fl(g);
    if (t.resolver) {
      const F = await b(me(g) ? g : R);
      T = Ye(F), N = g ? !R.some(($) => L(F, $)) : T;
    } else
      g ? (N = (await Promise.all(R.map(async (F) => {
        const $ = L(r, F);
        return await M($ && $._f ? { [F]: $ } : $);
      }))).every(Boolean), !(!N && !n.isValid) && E()) : N = T = await M(r);
    return f.state.next({
      ...!_t(g) || c.isValid && T !== n.isValid ? {} : { name: g },
      ...t.resolver || !g ? { isValid: T } : {},
      errors: n.errors
    }), S.shouldFocus && !N && hi(r, I, g ? R : l.mount), N;
  }, ee = (g) => {
    const S = {
      ...o.mount ? s : i
    };
    return me(g) ? S : _t(g) ? L(S, g) : g.map((T) => L(S, T));
  }, ne = (g, S) => ({
    invalid: !!L((S || n).errors, g),
    isDirty: !!L((S || n).dirtyFields, g),
    isTouched: !!L((S || n).touchedFields, g),
    isValidating: !!L((S || n).validatingFields, g),
    error: L((S || n).errors, g)
  }), An = (g) => {
    g && Fl(g).forEach((S) => xe(n.errors, S)), f.state.next({
      errors: g ? n.errors : {}
    });
  }, kt = (g, S, T) => {
    const N = (L(r, g, { _f: {} })._f || {}).ref, R = L(n.errors, g) || {}, { ref: F, message: $, type: Z, ...ge } = R;
    se(n.errors, g, {
      ...ge,
      ...S,
      ref: N
    }), f.state.next({
      name: g,
      errors: n.errors,
      isValid: !1
    }), T && T.shouldFocus && N && N.focus && N.focus();
  }, Br = (g, S) => an(g) ? f.values.subscribe({
    next: (T) => g(K(void 0, S), T)
  }) : K(g, S, !0), dt = (g, S = {}) => {
    for (const T of g ? Fl(g) : l.mount)
      l.mount.delete(T), l.array.delete(T), S.keepValue || (xe(r, T), xe(s, T)), !S.keepError && xe(n.errors, T), !S.keepDirty && xe(n.dirtyFields, T), !S.keepTouched && xe(n.touchedFields, T), !S.keepIsValidating && xe(n.validatingFields, T), !t.shouldUnregister && !S.keepDefaultValue && xe(i, T);
    f.values.next({
      values: { ...s }
    }), f.state.next({
      ...n,
      ...S.keepDirty ? { isDirty: z() } : {}
    }), !S.keepIsValid && E();
  }, Fn = ({ disabled: g, name: S, field: T, fields: N, value: R }) => {
    if (sn(g) && o.mount || g) {
      const F = g ? void 0 : me(R) ? Ol(T ? T._f : L(N, S)._f) : R;
      se(s, S, F), A(S, F, !1, !1, !0);
    }
  }, qo = (g, S = {}) => {
    let T = L(r, g);
    const N = sn(S.disabled);
    return se(r, g, {
      ...T || {},
      _f: {
        ...T && T._f ? T._f : { ref: { name: g } },
        name: g,
        mount: !0,
        ...S
      }
    }), l.mount.add(g), T ? Fn({
      field: T,
      disabled: S.disabled,
      name: g,
      value: S.value
    }) : k(g, !0, S.value), {
      ...N ? { disabled: S.disabled } : {},
      ...t.progressive ? {
        required: !!S.required,
        min: Zr(S.min),
        max: Zr(S.max),
        minLength: Zr(S.minLength),
        maxLength: Zr(S.maxLength),
        pattern: Zr(S.pattern)
      } : {},
      name: g,
      onChange: C,
      onBlur: C,
      ref: (R) => {
        if (R) {
          qo(g, S), T = L(r, g);
          const F = me(R.value) && R.querySelectorAll && R.querySelectorAll("input,select,textarea")[0] || R, $ = Dx(F), Z = T._f.refs || [];
          if ($ ? Z.find((ge) => ge === F) : F === T._f.ref)
            return;
          se(r, g, {
            _f: {
              ...T._f,
              ...$ ? {
                refs: [
                  ...Z.filter(Vl),
                  F,
                  ...Array.isArray(L(i, g)) ? [{}] : []
                ],
                ref: { type: F.type, name: g }
              } : { ref: F }
            }
          }), k(g, !1, void 0, F);
        } else
          T = L(r, g, {}), T._f && (T._f.mount = !1), (t.shouldUnregister || S.shouldUnregister) && !(wx(l.array, g) && o.action) && l.unMount.add(g);
      }
    };
  }, bc = () => t.shouldFocusError && hi(r, I, l.mount), Wg = (g) => {
    sn(g) && (f.state.next({ disabled: g }), hi(r, (S, T) => {
      const N = L(r, T);
      N && (S.disabled = N._f.disabled || g, Array.isArray(N._f.refs) && N._f.refs.forEach((R) => {
        R.disabled = N._f.disabled || g;
      }));
    }, 0, !1));
  }, Bc = (g, S) => async (T) => {
    let N;
    T && (T.preventDefault && T.preventDefault(), T.persist && T.persist());
    let R = it(s);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: F, values: $ } = await P();
      n.errors = F, R = $;
    } else
      await M(r);
    if (xe(n.errors, "root"), Ye(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await g(R, T);
      } catch (F) {
        N = F;
      }
    } else
      S && await S({ ...n.errors }, T), bc(), setTimeout(bc);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ye(n.errors) && !N,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), N)
      throw N;
  }, Hg = (g, S = {}) => {
    L(r, g) && (me(S.defaultValue) ? B(g, it(L(i, g))) : (B(g, S.defaultValue), se(i, g, it(S.defaultValue))), S.keepTouched || xe(n.touchedFields, g), S.keepDirty || (xe(n.dirtyFields, g), n.isDirty = S.defaultValue ? z(g, it(L(i, g))) : z()), S.keepError || (xe(n.errors, g), c.isValid && E()), f.state.next({ ...n }));
  }, Uc = (g, S = {}) => {
    const T = g ? it(g) : i, N = it(T), R = Ye(g), F = R ? i : N;
    if (S.keepDefaultValues || (i = T), !S.keepValues) {
      if (S.keepDirtyValues)
        for (const $ of l.mount)
          L(n.dirtyFields, $) ? se(F, $, L(s, $)) : B($, L(F, $));
      else {
        if (sc && me(g))
          for (const $ of l.mount) {
            const Z = L(r, $);
            if (Z && Z._f) {
              const ge = Array.isArray(Z._f.refs) ? Z._f.refs[0] : Z._f.ref;
              if (co(ge)) {
                const Qe = ge.closest("form");
                if (Qe) {
                  Qe.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      s = e.shouldUnregister ? S.keepDefaultValues ? it(i) : {} : it(F), f.array.next({
        values: { ...F }
      }), f.values.next({
        values: { ...F }
      });
    }
    l = {
      mount: S.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !c.isValid || !!S.keepIsValid || !!S.keepDirtyValues, o.watch = !!e.shouldUnregister, f.state.next({
      submitCount: S.keepSubmitCount ? n.submitCount : 0,
      isDirty: R ? !1 : S.keepDirty ? n.isDirty : !!(S.keepDefaultValues && !zn(g, i)),
      isSubmitted: S.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: R ? [] : S.keepDirtyValues ? S.keepDefaultValues && s ? ys(i, s) : n.dirtyFields : S.keepDefaultValues && g ? ys(i, g) : {},
      touchedFields: S.keepTouched ? n.touchedFields : {},
      errors: S.keepErrors ? n.errors : {},
      isSubmitSuccessful: S.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Wc = (g, S) => Uc(an(g) ? g(s) : g, S);
  return {
    control: {
      register: qo,
      unregister: dt,
      getFieldState: ne,
      handleSubmit: Bc,
      setError: kt,
      _executeSchema: P,
      _getWatch: K,
      _getDirty: z,
      _updateValid: E,
      _removeUnmounted: H,
      _updateFieldArray: h,
      _updateDisabledField: Fn,
      _getFieldArray: X,
      _reset: Uc,
      _resetDefaultValues: () => an(t.defaultValues) && t.defaultValues().then((g) => {
        Wc(g, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (g) => {
        n = {
          ...n,
          ...g
        };
      },
      _disableForm: Wg,
      _subjects: f,
      _proxyFormState: c,
      _setErrors: w,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return o;
      },
      set _state(g) {
        o = g;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return l;
      },
      set _names(g) {
        l = g;
      },
      get _formState() {
        return n;
      },
      set _formState(g) {
        n = g;
      },
      get _options() {
        return t;
      },
      set _options(g) {
        t = {
          ...t,
          ...g
        };
      }
    },
    trigger: W,
    register: qo,
    handleSubmit: Bc,
    watch: Br,
    setValue: B,
    getValues: ee,
    reset: Wc,
    resetField: Hg,
    clearErrors: An,
    unregister: dt,
    setError: kt,
    setFocus: (g, S = {}) => {
      const T = L(r, g), N = T && T._f;
      if (N) {
        const R = N.refs ? N.refs[0] : N.ref;
        R.focus && (R.focus(), S.shouldSelect && R.select());
      }
    },
    getFieldState: ne
  };
}
function jx(e = {}) {
  const t = pe.useRef(), n = pe.useRef(), [r, i] = pe.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: an(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: an(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Lx(e),
    formState: r
  });
  const s = t.current.control;
  return s._options = e, Px({
    subject: s._subjects.state,
    next: (o) => {
      Ex(o, s._proxyFormState, s._updateFormState) && i({ ...s._formState });
    }
  }), pe.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), pe.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const o = s._getDirty();
      o !== r.isDirty && s._subjects.state.next({
        isDirty: o
      });
    }
  }, [s, r.isDirty]), pe.useEffect(() => {
    e.values && !zn(e.values, n.current) ? (s._reset(e.values, s._options.resetOptions), n.current = e.values, i((o) => ({ ...o }))) : s._resetDefaultValues();
  }, [e.values, s]), pe.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), pe.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), pe.useEffect(() => {
    e.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [e.shouldUnregister, s]), t.current.formState = Tx(r, s), t.current;
}
var xd = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = L(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, py = function(e, t) {
  var n = function(i) {
    var s = t.fields[i];
    s && s.ref && "reportValidity" in s.ref ? xd(s.ref, i, e) : s.refs && s.refs.forEach(function(o) {
      return xd(o, i, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, Ix = function(e) {
  return e instanceof Date;
}, zx = function(e) {
  return e == null;
}, $x = function(e) {
  return typeof e == "object";
}, bx = function(e) {
  return !zx(e) && !Array.isArray(e) && $x(e) && !Ix(e);
}, Bx = function(e) {
  return /^\w*$/.test(e);
}, Rl = function(e, t, n) {
  for (var r = -1, i = Bx(t) ? [t] : function(c) {
    return f = c.replace(/["|']|\]/g, "").split(/\.|\[/), Array.isArray(f) ? f.filter(Boolean) : [];
    var f;
  }(t), s = i.length, o = s - 1; ++r < s; ) {
    var l = i[r], a = n;
    if (r !== o) {
      var u = e[l];
      a = bx(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
    }
    e[l] = a, e = e[l];
  }
  return e;
}, Ux = function(e, t) {
  t.shouldUseNativeValidation && py(e, t);
  var n = {};
  for (var r in e) {
    var i = L(t.fields, r), s = Object.assign(e[r] || {}, { ref: i && i.ref });
    if (Wx(t.names || Object.keys(e), r)) {
      var o = Object.assign({}, L(n, r));
      Rl(o, "root", s), Rl(n, r, o);
    } else
      Rl(n, r, s);
  }
  return n;
}, Wx = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
};
function Hx(e, t, n) {
  return t === void 0 && (t = {}), n === void 0 && (n = {}), function(r, i, s) {
    try {
      return Promise.resolve(function(o, l) {
        try {
          var a = (t.context, Promise.resolve(e[n.mode === "sync" ? "validateSync" : "validate"](r, Object.assign({ abortEarly: !1 }, t, { context: i }))).then(function(u) {
            return s.shouldUseNativeValidation && py({}, s), { values: n.raw ? r : u, errors: {} };
          }));
        } catch (u) {
          return l(u);
        }
        return a && a.then ? a.then(void 0, l) : a;
      }(0, function(o) {
        if (!o.inner)
          throw o;
        return { values: {}, errors: Ux((l = o, a = !s.shouldUseNativeValidation && s.criteriaMode === "all", (l.inner || []).reduce(function(u, c) {
          if (u[c.path] || (u[c.path] = { message: c.message, type: c.type }), a) {
            var f = u[c.path].types, d = f && f[c.type];
            u[c.path] = ly(c.path, a, u, c.type, d ? [].concat(d, c.message) : c.message);
          }
          return u;
        }, {})), s) };
        var l, a;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
}
function Kx(e) {
  const t = e.validateOnChange ?? !0, n = e.validateOnBlur ?? !0;
  return t && n ? "all" : t ? "onChange" : n ? "onBlur" : "onSubmit";
}
function Gx(e, t) {
  return (n) => {
    const r = e(n, t);
    if (Object.keys(r).length === 0)
      return {
        values: n,
        errors: {}
      };
    const s = Object.keys(r).reduce((o, l) => ({ ...o, [l]: { message: r[l] } }), {});
    return {
      values: {},
      errors: s
    };
  };
}
function Qx(e, t) {
  if (e.validationSchema)
    return Hx(e.validationSchema);
  if (e.validate)
    return Gx(e.validate, t);
}
const my = V.createContext(
  void 0
);
function Gi() {
  const e = V.useContext(my);
  if (e === void 0)
    throw new Error("useWizard must be used within the Wizard app!");
  return e;
}
function Yx(e) {
  const t = {};
  return e.forEach((n) => {
    const r = n.id.replace(/[A-Z]/g, (i, s) => (s > 0 ? "-" : "") + i.toLowerCase());
    t[r] = n;
  }), t;
}
function wd(e) {
  const t = window.location.hash.slice(1);
  return e[t];
}
function Xx(e, t) {
  const n = Object.keys(e).find(
    (r) => e[r].id === t.id
  );
  window.location.hash = n || window.location.hash;
}
function Zx({
  steps: e,
  onCompleted: t,
  onStepChanged: n,
  enableHash: r,
  // Components
  header: i,
  wrapper: s,
  footer: o
}) {
  let l = e[0], a = {};
  r && (a = Yx(e), l = wd(a) || l);
  const [u, c] = V.useState(l), [f, d] = V.useState(!1), [y, v] = V.useState({}), x = V.useMemo(() => Q(u), [u]), E = jx({
    defaultValues: x,
    mode: Kx(u),
    resolver: Qx(u, y),
    shouldUnregister: !0
  }), { reset: m } = E, h = e.findIndex((B) => B.id === u.id), p = h + 1, w = e.length, k = p === 1, A = p === w;
  V.useEffect(() => {
    m(x);
  }, [x]), V.useEffect(() => {
    if (r)
      return window.addEventListener("hashchange", O), Xx(a, u), () => window.removeEventListener("hashchange", O);
  }, [u]);
  function O() {
    const B = wd(a);
    (B == null ? void 0 : B.id) !== u.id && c(B);
  }
  async function P(B, C, I) {
    let W;
    for (let ee = 0; ee < B.length; ++ee) {
      const ne = B[ee];
      if (ne.shouldSkip === void 0) {
        W = ne;
        break;
      }
      if (!await ne.shouldSkip(C, I)) {
        W = ne;
        break;
      }
    }
    return W;
  }
  async function b(B) {
    const C = e.slice(h + 1);
    return await P(C, B, 1);
  }
  async function M(B) {
    const C = e.slice(0, h).reverse();
    return await P(
      C,
      B,
      -1
    );
  }
  function H(B) {
    if (!t)
      return;
    let C = {};
    Object.keys(B).forEach((I) => {
      C = { ...C, ...B[I] };
    }), t(C);
  }
  async function z(B) {
    try {
      u.onSubmit && (d(!0), B = await u.onSubmit(B, y), d(!1));
      const C = {
        ...y,
        [u.id]: { ...B }
      };
      v(C);
      const I = await b(C);
      if (!I) {
        H(C);
        return;
      }
      n && n(u, I, C), c(I);
    } catch (C) {
      console.log(C), d(!1);
    }
  }
  async function K(B) {
    let C = null;
    (u.keepValuesOnPrevious ?? !0) && (C = {
      ...y,
      [u.id]: { ...B }
    }, v(C)), C = C || y;
    const I = await M(C);
    I && (n && n(u, I, C), c(I));
  }
  function X(B, C) {
    c({ ...u, [B]: C });
  }
  function Q(B) {
    return y[B.id] || B.initialValues || {};
  }
  const te = {
    values: y,
    setValues: v,
    setIsLoading: d,
    updateStep: X,
    goToPreviousStep: () => K(E.getValues()),
    goToNextStep: () => z(E.getValues()),
    goToStep: (B) => c(e[B]),
    activeStep: u,
    stepNumber: p,
    totalSteps: w,
    isLoading: f,
    isFirstStep: k,
    isLastStep: A
  };
  return /* @__PURE__ */ D.jsx(my.Provider, { value: te, children: /* @__PURE__ */ D.jsx(kx, { ...E, children: /* @__PURE__ */ D.jsxs("form", { onSubmit: E.handleSubmit(z), children: [
    i,
    s || u.component,
    o
  ] }) }) });
}
function qx() {
  const { goToStep: e } = Gi();
  return /* @__PURE__ */ D.jsxs("div", { className: "prose max-w-none", children: [
    /* @__PURE__ */ D.jsx("h2", { children: "Warning" }),
    /* @__PURE__ */ D.jsx("p", { children: "Seems like you did not fill your email. Would you like to do it?" }),
    /* @__PURE__ */ D.jsxs("p", { children: [
      /* @__PURE__ */ D.jsx("b", { children: "Note:" }),
      " This step is automatically skipped if user filled their email in the first step."
    ] }),
    /* @__PURE__ */ D.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ D.jsx("button", { className: "btn", type: "submit", children: "No" }),
      /* @__PURE__ */ D.jsx("button", { className: "btn", type: "button", onClick: () => e(0), children: "Yes" })
    ] })
  ] });
}
function Jx() {
  return /* @__PURE__ */ D.jsxs("div", { className: "prose max-w-none", children: [
    /* @__PURE__ */ D.jsx("h2", { children: "Async" }),
    /* @__PURE__ */ D.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
  ] });
}
function ew() {
  const { values: e, updateStep: t } = Gi(), [n, r] = V.useState(!0);
  function i() {
    const o = !n;
    r(o), t("hideNext", o);
  }
  let s = {};
  return Object.keys(e).forEach((o) => {
    s = {
      ...s,
      ...e[o]
    };
  }), /* @__PURE__ */ D.jsxs("div", { className: "prose prose-neutral max-w-none", children: [
    /* @__PURE__ */ D.jsx("h2", { children: "Congratulations!" }),
    /* @__PURE__ */ D.jsxs("div", { className: "flex flex-wrap gap-4 justify-between", children: [
      /* @__PURE__ */ D.jsxs("p", { className: "my-0", children: [
        "You did it ",
        /* @__PURE__ */ D.jsx("b", { children: e.Username.username }),
        "! 🎉",
        /* @__PURE__ */ D.jsx("br", {}),
        "Here's your input:"
      ] }),
      /* @__PURE__ */ D.jsx("button", { className: "btn", onClick: i, type: "button", children: "Toggle hideNext" })
    ] }),
    /* @__PURE__ */ D.jsx("code", { className: "text-sm sm:text-base bg-transparent", children: /* @__PURE__ */ D.jsx("pre", { className: "mt-0", children: JSON.stringify(s, null, 2) }) })
  ] });
}
const tw = [
  {
    id: "ContactInfo",
    initialValues: {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      email: ""
    },
    // attrs defined under "fields" are for custom step renderer made
    // just for this demo folder, otherwise these aren't part of
    // the step config object
    fields: {
      inputTypes: {
        firstName: "text",
        lastName: "text",
        age: "number",
        email: "email"
      },
      placeholders: {
        firstName: "e.g. John",
        lastName: "e.g. Doe",
        age: "e.g. 18",
        email: "e.g. john@doe.com"
      }
    },
    validationSchema: yx,
    disableNextOnErrors: !0
  },
  {
    id: "Username",
    helpText: "Username should include your first name. This step is to demonstrate that we can validate field based on what user typed in the previous step.",
    initialValues: {
      username: ""
    },
    fields: {
      inputTypes: {
        username: "text"
      }
    },
    validate: gx,
    disableNextOnErrors: !0
  },
  {
    id: "EmailCheck",
    component: /* @__PURE__ */ D.jsx(qx, {}),
    hideNext: !0,
    hidePrevious: !0,
    shouldSkip: (e, t) => t === -1 ? !0 : !!e.ContactInfo.email
  },
  {
    id: "Async",
    component: /* @__PURE__ */ D.jsx(Jx, {}),
    onSubmit: async (e, t) => (await ((r) => new Promise((i) => setTimeout(i, r)))(2e3), e)
  },
  {
    id: "Final",
    component: /* @__PURE__ */ D.jsx(ew, {}),
    hideNext: !0,
    hidePrevious: !1
  }
], cc = V.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Wo = V.createContext({}), Ho = V.createContext(null), fc = typeof document < "u", dc = fc ? V.useLayoutEffect : V.useEffect, yy = V.createContext({ strict: !1 }), hc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), nw = "framerAppearId", gy = "data-" + hc(nw), rw = {
  skipAnimations: !1,
  useManualTiming: !1
};
class Sd {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function iw(e) {
  let t = new Sd(), n = new Sd(), r = 0, i = !1, s = !1;
  const o = /* @__PURE__ */ new WeakSet(), l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (a, u = !1, c = !1) => {
      const f = c && i, d = f ? t : n;
      return u && o.add(a), d.add(a) && f && i && (r = t.order.length), a;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (a) => {
      n.remove(a), o.delete(a);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (a) => {
      if (i) {
        s = !0;
        return;
      }
      if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
        for (let u = 0; u < r; u++) {
          const c = t.order[u];
          o.has(c) && (l.schedule(c), e()), c(a);
        }
      i = !1, s && (s = !1, l.process(a));
    }
  };
  return l;
}
const gs = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], sw = 40;
function vy(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = gs.reduce((f, d) => (f[d] = iw(() => n = !0), f), {}), o = (f) => {
    s[f].process(i);
  }, l = () => {
    const f = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, sw), 1), i.timestamp = f, i.isProcessing = !0, gs.forEach(o), i.isProcessing = !1, n && t && (r = !1, e(l));
  }, a = () => {
    n = !0, r = !0, i.isProcessing || e(l);
  };
  return { schedule: gs.reduce((f, d) => {
    const y = s[d];
    return f[d] = (v, x = !1, E = !1) => (n || a(), y.schedule(v, x, E)), f;
  }, {}), cancel: (f) => gs.forEach((d) => s[d].cancel(f)), state: i, steps: s };
}
const { schedule: pc, cancel: JE } = vy(queueMicrotask, !1);
function ow(e, t, n, r) {
  const { visualElement: i } = V.useContext(Wo), s = V.useContext(yy), o = V.useContext(Ho), l = V.useContext(cc).reducedMotion, a = V.useRef();
  r = r || s.renderer, !a.current && r && (a.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = a.current;
  V.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = V.useRef(!!(n[gy] && !window.HandoffComplete));
  return dc(() => {
    u && (pc.render(u.render), c.current && u.animationState && u.animationState.animateChanges());
  }), V.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
  }), u;
}
function xr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function lw(e, t, n) {
  return V.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : xr(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Mi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ko(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const mc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], yc = ["initial", ...mc];
function Go(e) {
  return Ko(e.animate) || yc.some((t) => Mi(e[t]));
}
function xy(e) {
  return !!(Go(e) || e.variants);
}
function aw(e, t) {
  if (Go(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Mi(n) ? n : void 0,
      animate: Mi(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function uw(e) {
  const { initial: t, animate: n } = aw(e, V.useContext(Wo));
  return V.useMemo(() => ({ initial: t, animate: n }), [kd(t), kd(n)]);
}
function kd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Td = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Li = {};
for (const e in Td)
  Li[e] = {
    isEnabled: (t) => Td[e].some((n) => !!t[n])
  };
function cw(e) {
  for (const t in e)
    Li[t] = {
      ...Li[t],
      ...e[t]
    };
}
const gc = V.createContext({}), wy = V.createContext({}), fw = Symbol.for("motionComponentSymbol");
function dw({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  e && cw(e);
  function s(l, a) {
    let u;
    const c = {
      ...V.useContext(cc),
      ...l,
      layoutId: hw(l)
    }, { isStatic: f } = c, d = uw(l), y = r(l, f);
    if (!f && fc) {
      d.visualElement = ow(i, y, c, t);
      const v = V.useContext(wy), x = V.useContext(yy).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        x,
        e,
        v
      ));
    }
    return D.jsxs(Wo.Provider, { value: d, children: [u && d.visualElement ? D.jsx(u, { visualElement: d.visualElement, ...c }) : null, n(i, l, lw(y, d.visualElement, a), y, f, d.visualElement)] });
  }
  const o = V.forwardRef(s);
  return o[fw] = i, o;
}
function hw({ layoutId: e }) {
  const t = V.useContext(gc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function pw(e) {
  function t(r, i = {}) {
    return dw(e(r, i));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
  });
}
const mw = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function vc(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(mw.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const mo = {};
function yw(e) {
  Object.assign(mo, e);
}
const Qi = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], er = new Set(Qi);
function Sy(e, { layout: t, layoutId: n }) {
  return er.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!mo[e] || e === "opacity");
}
const Re = (e) => !!(e && e.getVelocity), gw = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, vw = Qi.length;
function xw(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
  let s = "";
  for (let o = 0; o < vw; o++) {
    const l = Qi[o];
    if (e[l] !== void 0) {
      const a = gw[l] || l;
      s += `${a}(${e[l]}) `;
    }
  }
  return t && !e.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(e, r ? "" : s) : n && r && (s = "none"), s;
}
const ky = (e) => (t) => typeof t == "string" && t.startsWith(e), Ty = ky("--"), ww = ky("var(--"), xc = (e) => ww(e) ? Sw.test(e.split("/*")[0].trim()) : !1, Sw = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, kw = (e, t) => t && typeof e == "number" ? t.transform(e) : e, kn = (e, t, n) => n > t ? t : n < e ? e : n, br = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, pi = {
  ...br,
  transform: (e) => kn(0, 1, e)
}, vs = {
  ...br,
  default: 1
}, mi = (e) => Math.round(e * 1e5) / 1e5, wc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, Tw = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Ew = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Yi(e) {
  return typeof e == "string";
}
const Xi = (e) => ({
  test: (t) => Yi(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), qt = Xi("deg"), Dt = Xi("%"), U = Xi("px"), Pw = Xi("vh"), Cw = Xi("vw"), Ed = {
  ...Dt,
  parse: (e) => Dt.parse(e) / 100,
  transform: (e) => Dt.transform(e * 100)
}, Pd = {
  ...br,
  transform: Math.round
}, Ey = {
  // Border props
  borderWidth: U,
  borderTopWidth: U,
  borderRightWidth: U,
  borderBottomWidth: U,
  borderLeftWidth: U,
  borderRadius: U,
  radius: U,
  borderTopLeftRadius: U,
  borderTopRightRadius: U,
  borderBottomRightRadius: U,
  borderBottomLeftRadius: U,
  // Positioning props
  width: U,
  maxWidth: U,
  height: U,
  maxHeight: U,
  size: U,
  top: U,
  right: U,
  bottom: U,
  left: U,
  // Spacing props
  padding: U,
  paddingTop: U,
  paddingRight: U,
  paddingBottom: U,
  paddingLeft: U,
  margin: U,
  marginTop: U,
  marginRight: U,
  marginBottom: U,
  marginLeft: U,
  // Transform props
  rotate: qt,
  rotateX: qt,
  rotateY: qt,
  rotateZ: qt,
  scale: vs,
  scaleX: vs,
  scaleY: vs,
  scaleZ: vs,
  skew: qt,
  skewX: qt,
  skewY: qt,
  distance: U,
  translateX: U,
  translateY: U,
  translateZ: U,
  x: U,
  y: U,
  z: U,
  perspective: U,
  transformPerspective: U,
  opacity: pi,
  originX: Ed,
  originY: Ed,
  originZ: U,
  // Misc
  zIndex: Pd,
  backgroundPositionX: U,
  backgroundPositionY: U,
  // SVG
  fillOpacity: pi,
  strokeOpacity: pi,
  numOctaves: Pd
};
function Sc(e, t, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: l } = e;
  let a = !1, u = !1, c = !0;
  for (const f in t) {
    const d = t[f];
    if (Ty(f)) {
      s[f] = d;
      continue;
    }
    const y = Ey[f], v = kw(d, y);
    if (er.has(f)) {
      if (a = !0, o[f] = v, !c)
        continue;
      d !== (y.default || 0) && (c = !1);
    } else
      f.startsWith("origin") ? (u = !0, l[f] = v) : i[f] = v;
  }
  if (t.transform || (a || r ? i.transform = xw(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
    const { originX: f = "50%", originY: d = "50%", originZ: y = 0 } = l;
    i.transformOrigin = `${f} ${d} ${y}`;
  }
}
const kc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Py(e, t, n) {
  for (const r in t)
    !Re(t[r]) && !Sy(r, n) && (e[r] = t[r]);
}
function _w({ transformTemplate: e }, t, n) {
  return V.useMemo(() => {
    const r = kc();
    return Sc(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Aw(e, t, n) {
  const r = e.style || {}, i = {};
  return Py(i, r, e), Object.assign(i, _w(e, t, n)), i;
}
function Fw(e, t, n) {
  const r = {}, i = Aw(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
}
const Dw = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function yo(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Dw.has(e);
}
let Cy = (e) => !yo(e);
function Vw(e) {
  e && (Cy = (t) => t.startsWith("on") ? !yo(t) : e(t));
}
try {
  Vw(require("@emotion/is-prop-valid").default);
} catch {
}
function Ow(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (Cy(i) || n === !0 && yo(i) || !t && !yo(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function Cd(e, t, n) {
  return typeof e == "string" ? e : U.transform(t + n * e);
}
function Rw(e, t, n) {
  const r = Cd(t, e.x, e.width), i = Cd(n, e.y, e.height);
  return `${r} ${i}`;
}
const Nw = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Mw = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Lw(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Nw : Mw;
  e[s.offset] = U.transform(-r);
  const o = U.transform(t), l = U.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Tc(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: s,
  pathLength: o,
  pathSpacing: l = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f, d) {
  if (Sc(e, u, c, d), f) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: y, style: v, dimensions: x } = e;
  y.transform && (x && (v.transform = y.transform), delete y.transform), x && (i !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = Rw(x, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (y.x = t), n !== void 0 && (y.y = n), r !== void 0 && (y.scale = r), o !== void 0 && Lw(y, o, l, a, !1);
}
const _y = () => ({
  ...kc(),
  attrs: {}
}), Ec = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function jw(e, t, n, r) {
  const i = V.useMemo(() => {
    const s = _y();
    return Tc(s, t, { enableHardwareAcceleration: !1 }, Ec(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Py(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
function Iw(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (vc(n) ? jw : Fw)(r, s, o, n), u = Ow(r, typeof n == "string", e), c = n !== V.Fragment ? { ...u, ...a, ref: i } : {}, { children: f } = r, d = V.useMemo(() => Re(f) ? f.get() : f, [f]);
    return V.createElement(n, {
      ...c,
      children: d
    });
  };
}
function Ay(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Fy = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Dy(e, t, n, r) {
  Ay(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(Fy.has(i) ? i : hc(i), t.attrs[i]);
}
function Pc(e, t, n) {
  var r;
  const { style: i } = e, s = {};
  for (const o in i)
    (Re(i[o]) || t.style && Re(t.style[o]) || Sy(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
  return s;
}
function Vy(e, t, n) {
  const r = Pc(e, t, n);
  for (const i in e)
    if (Re(e[i]) || Re(t[i])) {
      const s = Qi.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function _d(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Cc(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = _d(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = _d(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Oy(e) {
  const t = V.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ha = (e) => Array.isArray(e), zw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), $w = (e) => Ha(e) ? e[e.length - 1] || 0 : e;
function Ms(e) {
  const t = Re(e) ? e.get() : e;
  return zw(t) ? t.toValue() : t;
}
function bw({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, s) {
  const o = {
    latestValues: Bw(r, i, s, e),
    renderState: t()
  };
  return n && (o.mount = (l) => n(r, l, o)), o;
}
const Ry = (e) => (t, n) => {
  const r = V.useContext(Wo), i = V.useContext(Ho), s = () => bw(e, t, r, i);
  return n ? s() : Oy(s);
};
function Bw(e, t, n, r) {
  const i = {}, s = r(e, {});
  for (const d in s)
    i[d] = Ms(s[d]);
  let { initial: o, animate: l } = e;
  const a = Go(e), u = xy(e);
  t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? l : o;
  return f && typeof f != "boolean" && !Ko(f) && (Array.isArray(f) ? f : [f]).forEach((y) => {
    const v = Cc(e, y);
    if (!v)
      return;
    const { transitionEnd: x, transition: E, ...m } = v;
    for (const h in m) {
      let p = m[h];
      if (Array.isArray(p)) {
        const w = c ? p.length - 1 : 0;
        p = p[w];
      }
      p !== null && (i[h] = p);
    }
    for (const h in x)
      i[h] = x[h];
  }), i;
}
const Ne = (e) => e, { schedule: q, cancel: Qt, state: Ce, steps: Nl } = vy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, !0), Uw = {
  useVisualState: Ry({
    scrapeMotionValuesFromProps: Vy,
    createRenderState: _y,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      q.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), q.render(() => {
        Tc(n, r, { enableHardwareAcceleration: !1 }, Ec(t.tagName), e.transformTemplate), Dy(t, n);
      });
    }
  })
}, Ww = {
  useVisualState: Ry({
    scrapeMotionValuesFromProps: Pc,
    createRenderState: kc
  })
};
function Hw(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...vc(e) ? Uw : Ww,
    preloadedFeatures: n,
    useRender: Iw(t),
    createVisualElement: r,
    Component: e
  };
}
function zt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Ny = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Qo(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const Kw = (e) => (t) => Ny(t) && e(t, Qo(t));
function bt(e, t, n, r) {
  return zt(e, t, Kw(n), r);
}
const Gw = (e, t) => (n) => t(e(n)), Bt = (...e) => e.reduce(Gw);
function My(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Ad = My("dragHorizontal"), Fd = My("dragVertical");
function Ly(e) {
  let t = !1;
  if (e === "y")
    t = Fd();
  else if (e === "x")
    t = Ad();
  else {
    const n = Ad(), r = Fd();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function jy() {
  const e = Ly(!0);
  return e ? (e(), !1) : !0;
}
class _n {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Dd(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (s, o) => {
    if (s.pointerType === "touch" || jy())
      return;
    const l = e.getProps();
    e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
    const a = l[r];
    a && q.postRender(() => a(s, o));
  };
  return bt(e.current, n, i, {
    passive: !e.getProps()[r]
  });
}
class Qw extends _n {
  mount() {
    this.unmount = Bt(Dd(this.node, !0), Dd(this.node, !1));
  }
  unmount() {
  }
}
class Yw extends _n {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Bt(zt(this.node.current, "focus", () => this.onFocus()), zt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Iy = (e, t) => t ? e === t ? !0 : Iy(e, t.parentElement) : !1;
function Ml(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Qo(n));
}
class Xw extends _n {
  constructor() {
    super(...arguments), this.removeStartListeners = Ne, this.removeEndListeners = Ne, this.removeAccessibleListeners = Ne, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), s = bt(window, "pointerup", (l, a) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c, globalTapTarget: f } = this.node.getProps(), d = !f && !Iy(this.node.current, l.target) ? c : u;
        d && q.update(() => d(l, a));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), o = bt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = Bt(s, o), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (s) => {
        if (s.key !== "Enter" || this.isPressing)
          return;
        const o = (l) => {
          l.key !== "Enter" || !this.checkPressEnd() || Ml("up", (a, u) => {
            const { onTap: c } = this.node.getProps();
            c && q.postRender(() => c(a, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = zt(this.node.current, "keyup", o), Ml("down", (l, a) => {
          this.startPress(l, a);
        });
      }, n = zt(this.node.current, "keydown", t), r = () => {
        this.isPressing && Ml("cancel", (s, o) => this.cancelPress(s, o));
      }, i = zt(this.node.current, "blur", r);
      this.removeAccessibleListeners = Bt(n, i);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && q.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !jy();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && q.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = bt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = zt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Bt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ka = /* @__PURE__ */ new WeakMap(), Ll = /* @__PURE__ */ new WeakMap(), Zw = (e) => {
  const t = Ka.get(e.target);
  t && t(e);
}, qw = (e) => {
  e.forEach(Zw);
};
function Jw({ root: e, ...t }) {
  const n = e || document;
  Ll.has(n) || Ll.set(n, {});
  const r = Ll.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(qw, { root: e, ...t })), r[i];
}
function eS(e, t, n) {
  const r = Jw(t);
  return Ka.set(e, n), r.observe(e), () => {
    Ka.delete(e), r.unobserve(e);
  };
}
const tS = {
  some: 0,
  all: 1
};
class nS extends _n {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : tS[i]
    }, l = (a) => {
      const { isIntersecting: u } = a;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(a);
    };
    return eS(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(rS(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function rS({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const iS = {
  inView: {
    Feature: nS
  },
  tap: {
    Feature: Xw
  },
  focus: {
    Feature: Yw
  },
  hover: {
    Feature: Qw
  }
};
function zy(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Yo(e, t, n) {
  const r = e.getProps();
  return Cc(r, t, n !== void 0 ? n : r.custom, e);
}
const vn = (e) => e * 1e3, Ut = (e) => e / 1e3, sS = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, oS = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), lS = {
  type: "keyframes",
  duration: 0.8
}, aS = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, uS = (e, { keyframes: t }) => t.length > 2 ? lS : er.has(e) ? e.startsWith("scale") ? oS(t[1]) : sS : aS;
function cS({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function _c(e, t) {
  return e[t] || e.default || e;
}
const fS = (e) => e !== null;
function Xo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(fS), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let Ls;
function dS() {
  Ls = void 0;
}
const xn = {
  now: () => (Ls === void 0 && xn.set(Ce.isProcessing || rw.useManualTiming ? Ce.timestamp : performance.now()), Ls),
  set: (e) => {
    Ls = e, queueMicrotask(dS);
  }
}, $y = (e) => /^0[^.\s]+$/u.test(e);
function hS(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || $y(e) : !0;
}
let Ga = Ne;
const by = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), pS = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function mS(e) {
  const t = pS.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function By(e, t, n = 1) {
  const [r, i] = mS(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return by(o) ? parseFloat(o) : o;
  }
  return xc(i) ? By(i, t, n + 1) : i;
}
const yS = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Vd = (e) => e === br || e === U, Od = (e, t) => parseFloat(e.split(", ")[t]), Rd = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Od(i[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? Od(s[1], e) : 0;
  }
}, gS = /* @__PURE__ */ new Set(["x", "y", "z"]), vS = Qi.filter((e) => !gS.has(e));
function xS(e) {
  const t = [];
  return vS.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Lr = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Rd(4, 13),
  y: Rd(5, 14)
};
Lr.translateX = Lr.x;
Lr.translateY = Lr.y;
const Uy = (e) => (t) => t.test(e), wS = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Wy = [br, U, Dt, qt, Cw, Pw, wS], Nd = (e) => Wy.find(Uy(e)), Wn = /* @__PURE__ */ new Set();
let Qa = !1, Ya = !1;
function Hy() {
  if (Ya) {
    const e = Array.from(Wn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = xS(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([s, o]) => {
        var l;
        (l = r.getValue(s)) === null || l === void 0 || l.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Ya = !1, Qa = !1, Wn.forEach((e) => e.complete()), Wn.clear();
}
function Ky() {
  Wn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ya = !0);
  });
}
function SS() {
  Ky(), Hy();
}
class Ac {
  constructor(t, n, r, i, s, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Wn.add(this), Qa || (Qa = !0, q.read(Ky), q.resolveKeyframes(Hy))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(), l = t[t.length - 1];
          if (o !== void 0)
            t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else
          t[s] = t[s - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Wn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Wn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Fc = (e, t) => (n) => !!(Yi(n) && Ew.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Gy = (e, t, n) => (r) => {
  if (!Yi(r))
    return r;
  const [i, s, o, l] = r.match(wc);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, kS = (e) => kn(0, 255, e), jl = {
  ...br,
  transform: (e) => Math.round(kS(e))
}, $n = {
  test: Fc("rgb", "red"),
  parse: Gy("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + jl.transform(e) + ", " + jl.transform(t) + ", " + jl.transform(n) + ", " + mi(pi.transform(r)) + ")"
};
function TS(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Xa = {
  test: Fc("#"),
  parse: TS,
  transform: $n.transform
}, wr = {
  test: Fc("hsl", "hue"),
  parse: Gy("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Dt.transform(mi(t)) + ", " + Dt.transform(mi(n)) + ", " + mi(pi.transform(r)) + ")"
}, Ve = {
  test: (e) => $n.test(e) || Xa.test(e) || wr.test(e),
  parse: (e) => $n.test(e) ? $n.parse(e) : wr.test(e) ? wr.parse(e) : Xa.parse(e),
  transform: (e) => Yi(e) ? e : e.hasOwnProperty("red") ? $n.transform(e) : wr.transform(e)
};
function ES(e) {
  var t, n;
  return isNaN(e) && Yi(e) && (((t = e.match(wc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Tw)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Qy = "number", Yy = "color", PS = "var", CS = "var(", Md = "${}", _S = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ji(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const l = t.replace(_S, (a) => (Ve.test(a) ? (r.color.push(s), i.push(Yy), n.push(Ve.parse(a))) : a.startsWith(CS) ? (r.var.push(s), i.push(PS), n.push(a)) : (r.number.push(s), i.push(Qy), n.push(parseFloat(a))), ++s, Md)).split(Md);
  return { values: n, split: l, indexes: r, types: i };
}
function Xy(e) {
  return ji(e).values;
}
function Zy(e) {
  const { split: t, types: n } = ji(e), r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (s += t[o], i[o] !== void 0) {
        const l = n[o];
        l === Qy ? s += mi(i[o]) : l === Yy ? s += Ve.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
const AS = (e) => typeof e == "number" ? 0 : e;
function FS(e) {
  const t = Xy(e);
  return Zy(e)(t.map(AS));
}
const Tn = {
  test: ES,
  parse: Xy,
  createTransformer: Zy,
  getAnimatableNone: FS
}, DS = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function VS(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(wc) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = DS.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const OS = /\b([a-z-]*)\(.*?\)/gu, Za = {
  ...Tn,
  getAnimatableNone: (e) => {
    const t = e.match(OS);
    return t ? t.map(VS).join(" ") : e;
  }
}, RS = {
  ...Ey,
  // Color props
  color: Ve,
  backgroundColor: Ve,
  outlineColor: Ve,
  fill: Ve,
  stroke: Ve,
  // Border props
  borderColor: Ve,
  borderTopColor: Ve,
  borderRightColor: Ve,
  borderBottomColor: Ve,
  borderLeftColor: Ve,
  filter: Za,
  WebkitFilter: Za
}, Dc = (e) => RS[e];
function qy(e, t) {
  let n = Dc(e);
  return n !== Za && (n = Tn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const NS = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function MS(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !NS.has(s) && ji(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = qy(n, i);
}
class Jy extends Ac {
  constructor(t, n, r, i) {
    super(t, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current)
      return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && (u = u.trim(), xc(u))) {
        const c = By(u, n.current);
        c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !yS.has(r) || t.length !== 2)
      return;
    const [i, s] = t, o = Nd(i), l = Nd(s);
    if (o !== l)
      if (Vd(o) && Vd(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      hS(t[i]) && r.push(i);
    r.length && MS(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Lr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current)
      return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, l = i[o];
    i[o] = Lr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, u]) => {
      n.getValue(a).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function eg(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ld = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Tn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function LS(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function jS(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], o = Ld(i, t), l = Ld(s, t);
  return !o || !l ? !1 : LS(e) || n === "spring" && r;
}
class tg {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: o,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && SS(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a, isGenerator: u } = this.options;
    if (!u && !jS(t, r, i, s))
      if (o)
        this.options.duration = 0;
      else {
        a == null || a(Xo(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function ng(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const IS = 5;
function rg(e, t, n) {
  const r = Math.max(t - IS, 0);
  return ng(n - e(r), t - r);
}
const Il = 1e-3, zS = 0.01, $S = 10, bS = 0.05, BS = 1;
function US({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, s, o = 1 - t;
  o = kn(bS, BS, o), e = kn(zS, $S, Ut(e)), o < 1 ? (i = (u) => {
    const c = u * o, f = c * e, d = c - n, y = qa(u, o), v = Math.exp(-f);
    return Il - d / y * v;
  }, s = (u) => {
    const f = u * o * e, d = f * n + n, y = Math.pow(o, 2) * Math.pow(u, 2) * e, v = Math.exp(-f), x = qa(Math.pow(u, 2), o);
    return (-i(u) + Il > 0 ? -1 : 1) * ((d - y) * v) / x;
  }) : (i = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Il + c * f;
  }, s = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const l = 5 / e, a = HS(i, s, l);
  if (e = vn(e), isNaN(a))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(a, 2) * r;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const WS = 12;
function HS(e, t, n) {
  let r = n;
  for (let i = 1; i < WS; i++)
    r = r - e(r) / t(r);
  return r;
}
function qa(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const KS = ["duration", "bounce"], GS = ["stiffness", "damping", "mass"];
function jd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function QS(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!jd(e, GS) && jd(e, KS)) {
    const n = US(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function ig({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0], s = e[e.length - 1], o = { done: !1, value: i }, { stiffness: l, damping: a, mass: u, duration: c, velocity: f, isResolvedFromDuration: d } = QS({
    ...r,
    velocity: -Ut(r.velocity || 0)
  }), y = f || 0, v = a / (2 * Math.sqrt(l * u)), x = s - i, E = Ut(Math.sqrt(l / u)), m = Math.abs(x) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (v < 1) {
    const p = qa(E, v);
    h = (w) => {
      const k = Math.exp(-v * E * w);
      return s - k * ((y + v * E * x) / p * Math.sin(p * w) + x * Math.cos(p * w));
    };
  } else if (v === 1)
    h = (p) => s - Math.exp(-E * p) * (x + (y + E * x) * p);
  else {
    const p = E * Math.sqrt(v * v - 1);
    h = (w) => {
      const k = Math.exp(-v * E * w), A = Math.min(p * w, 300);
      return s - k * ((y + v * E * x) * Math.sinh(A) + p * x * Math.cosh(A)) / p;
    };
  }
  return {
    calculatedDuration: d && c || null,
    next: (p) => {
      const w = h(p);
      if (d)
        o.done = p >= c;
      else {
        let k = y;
        p !== 0 && (v < 1 ? k = rg(h, p, w) : k = 0);
        const A = Math.abs(k) <= n, O = Math.abs(s - w) <= t;
        o.done = A && O;
      }
      return o.value = o.done ? s : w, o;
    }
  };
}
function Id({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: a, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, y = (P) => l !== void 0 && P < l || a !== void 0 && P > a, v = (P) => l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a;
  let x = n * t;
  const E = f + x, m = o === void 0 ? E : o(E);
  m !== E && (x = m - f);
  const h = (P) => -x * Math.exp(-P / r), p = (P) => m + h(P), w = (P) => {
    const b = h(P), M = p(P);
    d.done = Math.abs(b) <= u, d.value = d.done ? m : M;
  };
  let k, A;
  const O = (P) => {
    y(d.value) && (k = P, A = ig({
      keyframes: [d.value, v(d.value)],
      velocity: rg(p, P, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return O(0), {
    calculatedDuration: null,
    next: (P) => {
      let b = !1;
      return !A && k === void 0 && (b = !0, w(P), O(P)), k !== void 0 && P >= k ? A.next(P - k) : (!b && w(P), d);
    }
  };
}
const sg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, YS = 1e-7, XS = 12;
function ZS(e, t, n, r, i) {
  let s, o, l = 0;
  do
    o = t + (n - t) / 2, s = sg(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > YS && ++l < XS);
  return o;
}
function Zi(e, t, n, r) {
  if (e === t && n === r)
    return Ne;
  const i = (s) => ZS(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : sg(i(s), t, r);
}
const qS = Zi(0.42, 0, 1, 1), JS = Zi(0, 0, 0.58, 1), og = Zi(0.42, 0, 0.58, 1), ek = (e) => Array.isArray(e) && typeof e[0] != "number", lg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ag = (e) => (t) => 1 - e(1 - t), Vc = (e) => 1 - Math.sin(Math.acos(e)), ug = ag(Vc), tk = lg(Vc), cg = Zi(0.33, 1.53, 0.69, 0.99), Oc = ag(cg), nk = lg(Oc), rk = (e) => (e *= 2) < 1 ? 0.5 * Oc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), zd = {
  linear: Ne,
  easeIn: qS,
  easeInOut: og,
  easeOut: JS,
  circIn: Vc,
  circInOut: tk,
  circOut: ug,
  backIn: Oc,
  backInOut: nk,
  backOut: cg,
  anticipate: rk
}, $d = (e) => {
  if (Array.isArray(e)) {
    Ga(e.length === 4);
    const [t, n, r, i] = e;
    return Zi(t, n, r, i);
  } else if (typeof e == "string")
    return Ga(zd[e] !== void 0), zd[e];
  return e;
}, Ii = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, ue = (e, t, n) => e + (t - e) * n;
function zl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ik({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!t)
    i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
    i = zl(a, l, e + 1 / 3), s = zl(a, l, e), o = zl(a, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function go(e, t) {
  return (n) => n > 0 ? t : e;
}
const $l = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, sk = [Xa, $n, wr], ok = (e) => sk.find((t) => t.test(e));
function bd(e) {
  const t = ok(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === wr && (n = ik(n)), n;
}
const Bd = (e, t) => {
  const n = bd(e), r = bd(t);
  if (!n || !r)
    return go(e, t);
  const i = { ...n };
  return (s) => (i.red = $l(n.red, r.red, s), i.green = $l(n.green, r.green, s), i.blue = $l(n.blue, r.blue, s), i.alpha = ue(n.alpha, r.alpha, s), $n.transform(i));
}, Ja = /* @__PURE__ */ new Set(["none", "hidden"]);
function lk(e, t) {
  return Ja.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function ak(e, t) {
  return (n) => ue(e, t, n);
}
function Rc(e) {
  return typeof e == "number" ? ak : typeof e == "string" ? xc(e) ? go : Ve.test(e) ? Bd : fk : Array.isArray(e) ? fg : typeof e == "object" ? Ve.test(e) ? Bd : uk : go;
}
function fg(e, t) {
  const n = [...e], r = n.length, i = e.map((s, o) => Rc(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}
function uk(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Rc(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function ck(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s], l = e.indexes[o][i[o]], a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[s] = a, i[o]++;
  }
  return r;
}
const fk = (e, t) => {
  const n = Tn.createTransformer(t), r = ji(e), i = ji(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ja.has(e) && !i.values.length || Ja.has(t) && !r.values.length ? lk(e, t) : Bt(fg(ck(r, i), i.values), n) : go(e, t);
};
function dg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ue(e, t, n) : Rc(e)(e, t);
}
function dk(e, t, n) {
  const r = [], i = n || dg, s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || Ne : t;
      l = Bt(a, l);
    }
    r.push(l);
  }
  return r;
}
function hk(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (Ga(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const o = dk(t, r, i), l = o.length, a = (u) => {
    let c = 0;
    if (l > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const f = Ii(e[c], e[c + 1], u);
    return o[c](f);
  };
  return n ? (u) => a(kn(e[0], e[s - 1], u)) : a;
}
function pk(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Ii(0, t, r);
    e.push(ue(n, 1, i));
  }
}
function mk(e) {
  const t = [0];
  return pk(t, e.length - 1), t;
}
function yk(e, t) {
  return e.map((n) => n * t);
}
function gk(e, t) {
  return e.map(() => t || og).splice(0, e.length - 1);
}
function vo({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = ek(r) ? r.map($d) : $d(r), s = {
    done: !1,
    value: t[0]
  }, o = yk(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : mk(t),
    e
  ), l = hk(o, t, {
    ease: Array.isArray(i) ? i : gk(t, i)
  });
  return {
    calculatedDuration: e,
    next: (a) => (s.value = l(a), s.done = a >= e, s)
  };
}
const Ud = 2e4;
function vk(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ud; )
    t += n, r = e.next(t);
  return t >= Ud ? 1 / 0 : t;
}
const xk = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => q.update(t, !0),
    stop: () => Qt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ce.isProcessing ? Ce.timestamp : xn.now()
  };
}, wk = {
  decay: Id,
  inertia: Id,
  tween: vo,
  keyframes: vo,
  spring: ig
}, Sk = (e) => e / 100;
class Nc extends tg {
  constructor({ KeyframeResolver: t = Ac, ...n }) {
    super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: r, motionValue: i, keyframes: s } = this.options, o = (l, a) => this.onKeyframesResolved(l, a);
    r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(s, o, r, i) : this.resolver = new t(s, o, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = this.options, l = wk[n] || vo;
    let a, u;
    l !== vo && typeof t[0] != "number" && (a = Bt(Sk, dg(t[0], t[1])), t = [0, 100]);
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), c.calculatedDuration === null && (c.calculatedDuration = vk(c));
    const { calculatedDuration: f } = c, d = f + i, y = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: y
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const { finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: d, repeat: y, repeatType: v, repeatDelay: x, onUpdate: E } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? m < 0 : m > c;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let p = this.currentTime, w = s;
    if (y) {
      const P = Math.min(this.currentTime, c) / f;
      let b = Math.floor(P), M = P % 1;
      !M && P >= 1 && (M = 1), M === 1 && b--, b = Math.min(b, y + 1), !!(b % 2) && (v === "reverse" ? (M = 1 - M, x && (M -= x / f)) : v === "mirror" && (w = o)), p = kn(0, 1, M) * f;
    }
    const k = h ? { done: !1, value: a[0] } : w.next(p);
    l && (k.value = l(k.value));
    let { done: A } = k;
    !h && u !== null && (A = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const O = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return O && i !== void 0 && (k.value = Xo(a, this.options, i)), E && E(k.value), O && this.finish(), k;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ut(t.calculatedDuration) : 0;
  }
  get time() {
    return Ut(this.currentTime);
  }
  set time(t) {
    t = vn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Ut(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = xk, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const hg = (e) => Array.isArray(e) && typeof e[0] == "number";
function pg(e) {
  return !!(!e || typeof e == "string" && e in Mc || hg(e) || Array.isArray(e) && e.every(pg));
}
const ri = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Mc = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ri([0, 0.65, 0.55, 1]),
  circOut: ri([0.55, 0, 1, 0.45]),
  backIn: ri([0.31, 0.01, 0.66, -0.59]),
  backOut: ri([0.33, 1.53, 0.69, 0.99])
};
function kk(e) {
  return mg(e) || Mc.easeOut;
}
function mg(e) {
  if (e)
    return hg(e) ? ri(e) : Array.isArray(e) ? e.map(kk) : Mc[e];
}
function Tk(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: l, times: a } = {}) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = mg(l);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const Ek = eg(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Pk = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), xo = 10, Ck = 2e4;
function _k(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !pg(e.ease);
}
function Ak(e, t) {
  const n = new Nc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < Ck; )
    r = n.sample(s), i.push(r.value), s += xo;
  return {
    times: void 0,
    keyframes: i,
    duration: s - xo,
    ease: "linear"
  };
}
class Wd extends tg {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    this.resolver = new Jy(i, (s, o) => this.onKeyframesResolved(s, o), n, r), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: i = 300, times: s, ease: o, type: l, motionValue: a, name: u } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current))
      return !1;
    if (_k(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: y, ...v } = this.options, x = Ak(t, v);
      t = x.keyframes, t.length === 1 && (t[1] = t[0]), i = x.duration, s = x.times, o = x.ease, l = "keyframes";
    }
    const c = Tk(a.owner.current, u, t, { ...this.options, duration: i, times: s, ease: o });
    return c.startTime = xn.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(Xo(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: i,
      times: s,
      type: l,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return Ut(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Ut(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = vn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Ne;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return Ne;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: l } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const { motionValue: a, onUpdate: u, onComplete: c, ...f } = this.options, d = new Nc({
          ...f,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: l,
          isGenerator: !0
        }), y = vn(this.time);
        a.setWithVelocity(d.sample(y - xo).value, d.sample(y).value, xo);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: l } = t;
    return Ek() && r && Pk.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !i && s !== "mirror" && o !== 0 && l !== "inertia";
  }
}
function Fk(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t, o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), n = o;
  };
  return q.update(r, !0), () => Qt(r);
}
const Dk = eg(() => window.ScrollTimeline !== void 0);
class Vk {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (Dk() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), Fk((i) => {
          r.time = r.duration * i;
        }, t);
    });
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Lc = (e, t, n, r = {}, i, s) => (o) => {
  const l = _c(r, e) || {}, a = l.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - vn(a);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -u,
    onUpdate: (d) => {
      t.set(d), l.onUpdate && l.onUpdate(d);
    },
    onComplete: () => {
      o(), l.onComplete && l.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : i
  };
  cS(l) || (c = {
    ...c,
    ...uS(e, c)
  }), c.duration && (c.duration = vn(c.duration)), c.repeatDelay && (c.repeatDelay = vn(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = Xo(c.keyframes, l);
    if (d !== void 0)
      return q.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new Vk([]);
  }
  return !s && Wd.supports(c) ? new Wd(c) : new Nc(c);
};
function wo(e) {
  return !!(Re(e) && e.add);
}
function jc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ic(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class zc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return jc(this.subscriptions, t), () => Ic(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Hd = 30, Ok = (e) => !isNaN(parseFloat(e));
class Rk {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.2.10", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const s = xn.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = xn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Ok(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new zc());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), q.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = xn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Hd)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Hd);
    return ng(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function zi(e, t) {
  return new Rk(e, t);
}
function Nk(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zi(n));
}
function Mk(e, t) {
  const n = Yo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = $w(s[o]);
    Nk(e, o, l);
  }
}
function yg(e) {
  return e.getProps()[gy];
}
function Lk({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function gg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  const u = e.getValue("willChange");
  r && (o = r);
  const c = [], f = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const y = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null), v = a[d];
    if (v === void 0 || f && Lk(f, d))
      continue;
    const x = {
      delay: n,
      elapsed: 0,
      ..._c(o || {}, d)
    };
    let E = !1;
    if (window.HandoffAppearAnimations) {
      const h = yg(e);
      if (h) {
        const p = window.HandoffAppearAnimations(h, d, y, q);
        p !== null && (x.elapsed = p, E = !0);
      }
    }
    y.start(Lc(d, y, v, e.shouldReduceMotion && er.has(d) ? { type: !1 } : x, e, E));
    const m = y.animation;
    m && (wo(u) && (u.add(d), m.then(() => u.remove(d))), c.push(m));
  }
  return l && Promise.all(c).then(() => {
    q.update(() => {
      l && Mk(e, l);
    });
  }), c;
}
function eu(e, t, n = {}) {
  var r;
  const i = Yo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(gg(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = s;
    return jk(e, t, c + u, f, d, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), l(n.delay)]);
}
function jk(e, t, n = 0, r = 0, i = 1, s) {
  const o = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(Ik).forEach((u, c) => {
    u.notify("AnimationStart", t), o.push(eu(u, t, {
      ...s,
      delay: n + a(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function Ik(e, t) {
  return e.sortNodePosition(t);
}
function zk(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => eu(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = eu(e, t, n);
  else {
    const i = typeof t == "function" ? Yo(e, t, n.custom) : t;
    r = Promise.all(gg(e, i, n));
  }
  return r.then(() => {
    q.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const $k = [...mc].reverse(), bk = mc.length;
function Bk(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => zk(e, n, r)));
}
function Uk(e) {
  let t = Bk(e);
  const n = Hk();
  let r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = Yo(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: y, transitionEnd: v, ...x } = d;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const u = e.getProps(), c = e.getVariantContext(!0) || {}, f = [], d = /* @__PURE__ */ new Set();
    let y = {}, v = 1 / 0;
    for (let E = 0; E < bk; E++) {
      const m = $k[E], h = n[m], p = u[m] !== void 0 ? u[m] : c[m], w = Mi(p), k = m === a ? h.isActive : null;
      k === !1 && (v = E);
      let A = p === c[m] && p !== u[m] && w;
      if (A && r && e.manuallyAnimateOnMount && (A = !1), h.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !p && !h.prevProp || // Or if the prop doesn't define an animation
      Ko(p) || typeof p == "boolean")
        continue;
      let P = Wk(h.prevProp, p) || // If we're making this variant active, we want to always make it active
      m === a && h.isActive && !A && w || // If we removed a higher-priority variant (i is in reverse order)
      E > v && w, b = !1;
      const M = Array.isArray(p) ? p : [p];
      let H = M.reduce(i(m), {});
      k === !1 && (H = {});
      const { prevResolvedValues: z = {} } = h, K = {
        ...z,
        ...H
      }, X = (Q) => {
        P = !0, d.has(Q) && (b = !0, d.delete(Q)), h.needsAnimating[Q] = !0;
        const te = e.getValue(Q);
        te && (te.liveStyle = !1);
      };
      for (const Q in K) {
        const te = H[Q], B = z[Q];
        if (y.hasOwnProperty(Q))
          continue;
        let C = !1;
        Ha(te) && Ha(B) ? C = !zy(te, B) : C = te !== B, C ? te != null ? X(Q) : d.add(Q) : te !== void 0 && d.has(Q) ? X(Q) : h.protectedKeys[Q] = !0;
      }
      h.prevProp = p, h.prevResolvedValues = H, h.isActive && (y = { ...y, ...H }), r && e.blockInitialAnimation && (P = !1), P && (!A || b) && f.push(...M.map((Q) => ({
        animation: Q,
        options: { type: m }
      })));
    }
    if (d.size) {
      const E = {};
      d.forEach((m) => {
        const h = e.getBaseTarget(m), p = e.getValue(m);
        p && (p.liveStyle = !0), E[m] = h ?? null;
      }), f.push({ animation: E });
    }
    let x = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(f) : Promise.resolve();
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u)
      return Promise.resolve();
    (c = e.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var y;
      return (y = d.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u);
    }), n[a].isActive = u;
    const f = o(a);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n
  };
}
function Wk(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !zy(t, e) : !1;
}
function Dn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Hk() {
  return {
    animate: Dn(!0),
    whileInView: Dn(),
    whileHover: Dn(),
    whileTap: Dn(),
    whileDrag: Dn(),
    whileFocus: Dn(),
    exit: Dn()
  };
}
class Kk extends _n {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Uk(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ko(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let Gk = 0;
class Qk extends _n {
  constructor() {
    super(...arguments), this.id = Gk++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Yk = {
  animation: {
    Feature: Kk
  },
  exit: {
    Feature: Qk
  }
}, Kd = (e, t) => Math.abs(e - t);
function Xk(e, t) {
  const n = Kd(e.x, t.x), r = Kd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class vg {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Bl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, y = Xk(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !y)
        return;
      const { point: v } = f, { timestamp: x } = Ce;
      this.history.push({ ...v, timestamp: x });
      const { onStart: E, onMove: m } = this.handlers;
      d || (E && E(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = bl(d, this.transformPagePoint), q.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
      if (this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const E = Bl(f.type === "pointercancel" ? this.lastMoveEventInfo : bl(d, this.transformPagePoint), this.history);
      this.startEvent && y && y(f, E), v && v(f, E);
    }, !Ny(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = Qo(t), l = bl(o, this.transformPagePoint), { point: a } = l, { timestamp: u } = Ce;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Bl(l, this.history)), this.removeListeners = Bt(bt(this.contextWindow, "pointermove", this.handlePointerMove), bt(this.contextWindow, "pointerup", this.handlePointerUp), bt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Qt(this.updatePoint);
  }
}
function bl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bl({ point: e }, t) {
  return {
    point: e,
    delta: Gd(e, xg(t)),
    offset: Gd(e, Zk(t)),
    velocity: qk(t, 0.1)
  };
}
function Zk(e) {
  return e[0];
}
function xg(e) {
  return e[e.length - 1];
}
function qk(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = xg(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > vn(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = Ut(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function et(e) {
  return e.max - e.min;
}
function tu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Qd(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ue(t.min, t.max, e.origin), e.scale = et(n) / et(t), (tu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ue(n.min, n.max, e.origin) - e.originPoint, (tu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function yi(e, t, n, r) {
  Qd(e.x, t.x, n.x, r ? r.originX : void 0), Qd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Yd(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + et(t);
}
function Jk(e, t, n) {
  Yd(e.x, t.x, n.x), Yd(e.y, t.y, n.y);
}
function Xd(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + et(t);
}
function gi(e, t, n) {
  Xd(e.x, t.x, n.x), Xd(e.y, t.y, n.y);
}
function eT(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ue(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ue(n, e, r.max) : Math.min(e, n)), e;
}
function Zd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function tT(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Zd(e.x, n, i),
    y: Zd(e.y, t, r)
  };
}
function qd(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function nT(e, t) {
  return {
    x: qd(e.x, t.x),
    y: qd(e.y, t.y)
  };
}
function rT(e, t) {
  let n = 0.5;
  const r = et(e), i = et(t);
  return i > r ? n = Ii(t.min, t.max - r, e.min) : r > i && (n = Ii(e.min, e.max - i, t.min)), kn(0, 1, n);
}
function iT(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const nu = 0.35;
function sT(e = nu) {
  return e === !1 ? e = 0 : e === !0 && (e = nu), {
    x: Jd(e, "left", "right"),
    y: Jd(e, "top", "bottom")
  };
}
function Jd(e, t, n) {
  return {
    min: eh(e, t),
    max: eh(e, n)
  };
}
function eh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const th = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Sr = () => ({
  x: th(),
  y: th()
}), nh = () => ({ min: 0, max: 0 }), he = () => ({
  x: nh(),
  y: nh()
});
function st(e) {
  return [e("x"), e("y")];
}
function wg({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function oT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lT(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Ul(e) {
  return e === void 0 || e === 1;
}
function ru({ scale: e, scaleX: t, scaleY: n }) {
  return !Ul(e) || !Ul(t) || !Ul(n);
}
function Rn(e) {
  return ru(e) || Sg(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Sg(e) {
  return rh(e.x) || rh(e.y);
}
function rh(e) {
  return e && e !== "0%";
}
function So(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function ih(e, t, n, r, i) {
  return i !== void 0 && (e = So(e, i, r)), So(e, n, r) + t;
}
function iu(e, t = 0, n = 1, r, i) {
  e.min = ih(e.min, t, n, r, i), e.max = ih(e.max, t, n, r, i);
}
function kg(e, { x: t, y: n }) {
  iu(e.x, t.translate, t.scale, t.originPoint), iu(e.y, n.translate, n.scale, n.originPoint);
}
function aT(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    s = n[l], o = s.projectionDelta;
    const a = s.instance;
    a && a.style && a.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && kr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, kg(e, o)), r && Rn(s.latestValues) && kr(e, s.latestValues));
  }
  t.x = sh(t.x), t.y = sh(t.y);
}
function sh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function tn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function oh(e, t, [n, r, i]) {
  const s = t[i] !== void 0 ? t[i] : 0.5, o = ue(e.min, e.max, s);
  iu(e, t[n], t[r], o, t.scale);
}
const uT = ["x", "scaleX", "originX"], cT = ["y", "scaleY", "originY"];
function kr(e, t) {
  oh(e.x, t, uT), oh(e.y, t, cT);
}
function Tg(e, t) {
  return wg(lT(e.getBoundingClientRect(), t));
}
function fT(e, t, n) {
  const r = Tg(e, n), { scroll: i } = t;
  return i && (tn(r.x, i.offset.x), tn(r.y, i.offset.y)), r;
}
const Eg = ({ current: e }) => e ? e.ownerDocument.defaultView : null, dT = /* @__PURE__ */ new WeakMap();
class hT {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = he(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Qo(c, "page").point);
    }, s = (c, f) => {
      const { drag: d, dragPropagation: y, onDragStart: v } = this.getProps();
      if (d && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ly(d), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), st((E) => {
        let m = this.getAxisMotionValue(E).get() || 0;
        if (Dt.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const p = h.layout.layoutBox[E];
            p && (m = et(p) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[E] = m;
      }), v && q.postRender(() => v(c, f));
      const { animationState: x } = this.visualElement;
      x && x.setActive("whileDrag", !0);
    }, o = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: y, onDirectionLock: v, onDrag: x } = this.getProps();
      if (!d && !this.openGlobalLock)
        return;
      const { offset: E } = f;
      if (y && this.currentDirection === null) {
        this.currentDirection = pT(E), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, E), this.updateAxis("y", f.point, E), this.visualElement.render(), x && x(c, f);
    }, l = (c, f) => this.stop(c, f), a = () => st((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new vg(t, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Eg(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && q.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !xs(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = eT(o, this.constraints[t], this.elastic[t])), s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && xr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = tT(i.layoutBox, n) : this.constraints = !1, this.elastic = sT(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && st((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = iT(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !xr(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = fT(r, i.root, this.visualElement.getTransformPagePoint());
    let o = nT(i.layout.layoutBox, s);
    if (n) {
      const l = n(oT(o));
      this.hasMutatedConstraints = !!l, l && (o = wg(l));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps(), a = this.constraints || {}, u = st((c) => {
      if (!xs(c, n, this.currentDirection))
        return;
      let f = a && a[c] || {};
      o && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, y = i ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: d,
        bounceDamping: y,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(c, v);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Lc(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    st((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    st((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    st((n) => {
      const { drag: r } = this.getProps();
      if (!xs(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - ue(o, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!xr(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    st((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = rT({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), st((o) => {
      if (!xs(o, t, null))
        return;
      const l = this.getAxisMotionValue(o), { min: a, max: u } = this.constraints[o];
      l.set(ue(a, u, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    dT.set(this.visualElement, this);
    const t = this.visualElement.current, n = bt(t, "pointerdown", (a) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(a);
    }), r = () => {
      const { dragConstraints: a } = this.getProps();
      xr(a) && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = zt(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
      this.isDragging && u && (st((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = nu, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l
    };
  }
}
function xs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function pT(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class mT extends _n {
  constructor(t) {
    super(t), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new hT(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const lh = (e) => (t, n) => {
  e && q.postRender(() => e(t, n));
};
class yT extends _n {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ne;
  }
  onPointerDown(t) {
    this.session = new vg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Eg(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: lh(t),
      onStart: lh(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && q.postRender(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = bt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function gT() {
  const e = V.useContext(Ho);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, i = V.useId();
  return V.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const js = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function ah(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const qr = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (U.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = ah(e, t.target.x), r = ah(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, vT = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = Tn.parse(e);
    if (i.length > 5)
      return r;
    const s = Tn.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a = n.y.scale * t.y;
    i[0 + o] /= l, i[1 + o] /= a;
    const u = ue(l, a, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i);
  }
};
class xT extends V.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    yw(wT), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), js.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || q.postRender(() => {
      const l = o.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), pc.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Pg(e) {
  const [t, n] = gT(), r = V.useContext(gc);
  return D.jsx(xT, { ...e, layoutGroup: r, switchLayoutGroup: V.useContext(wy), isPresent: t, safeToRemove: n });
}
const wT = {
  borderRadius: {
    ...qr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: qr,
  borderTopRightRadius: qr,
  borderBottomLeftRadius: qr,
  borderBottomRightRadius: qr,
  boxShadow: vT
}, Cg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ST = Cg.length, uh = (e) => typeof e == "string" ? parseFloat(e) : e, ch = (e) => typeof e == "number" || U.test(e);
function kT(e, t, n, r, i, s) {
  i ? (e.opacity = ue(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    TT(r)
  ), e.opacityExit = ue(t.opacity !== void 0 ? t.opacity : 1, 0, ET(r))) : s && (e.opacity = ue(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < ST; o++) {
    const l = `border${Cg[o]}Radius`;
    let a = fh(t, l), u = fh(n, l);
    if (a === void 0 && u === void 0)
      continue;
    a || (a = 0), u || (u = 0), a === 0 || u === 0 || ch(a) === ch(u) ? (e[l] = Math.max(ue(uh(a), uh(u), r), 0), (Dt.test(u) || Dt.test(a)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r));
}
function fh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const TT = _g(0, 0.5, ug), ET = _g(0.5, 0.95, Ne);
function _g(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Ii(e, t, r));
}
function dh(e, t) {
  e.min = t.min, e.max = t.max;
}
function rt(e, t) {
  dh(e.x, t.x), dh(e.y, t.y);
}
function hh(e, t, n, r, i) {
  return e -= t, e = So(e, 1 / n, r), i !== void 0 && (e = So(e, 1 / i, r)), e;
}
function PT(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (Dt.test(t) && (t = parseFloat(t), t = ue(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let l = ue(s.min, s.max, r);
  e === s && (l -= t), e.min = hh(e.min, t, n, l, i), e.max = hh(e.max, t, n, l, i);
}
function ph(e, t, [n, r, i], s, o) {
  PT(e, t[n], t[r], t[i], t.scale, s, o);
}
const CT = ["x", "scaleX", "originX"], _T = ["y", "scaleY", "originY"];
function mh(e, t, n, r) {
  ph(e.x, t, CT, n ? n.x : void 0, r ? r.x : void 0), ph(e.y, t, _T, n ? n.y : void 0, r ? r.y : void 0);
}
function yh(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ag(e) {
  return yh(e.x) && yh(e.y);
}
function AT(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Fg(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function gh(e) {
  return et(e.x) / et(e.y);
}
class FT {
  constructor() {
    this.members = [];
  }
  add(t) {
    jc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ic(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vh(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: v } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), y && (r += `skewX(${y}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x, a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const DT = (e, t) => e.depth - t.depth;
class VT {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    jc(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ic(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(DT), this.isDirty = !1, this.children.forEach(t);
  }
}
function OT(e, t) {
  const n = xn.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (Qt(r), e(s - t));
  };
  return q.read(r, !0), () => Qt(r);
}
function RT(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function NT(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function MT(e, t, n) {
  const r = Re(e) ? e : zi(e);
  return r.start(Lc("", r, t, n)), r.animation;
}
const Wl = ["", "X", "Y", "Z"], LT = { visibility: "hidden" }, xh = 1e3;
let jT = 0;
const Nn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Hl(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Dg(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return !1;
  const { visualElement: t } = e.options;
  return t ? yg(t) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? Dg(e.parent) : !1 : !1;
}
function Vg({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      this.id = jT++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Nn.totalNodes = Nn.resolvedTargetDeltas = Nn.recalculatedProjection = 0, this.nodes.forEach($T), this.nodes.forEach(HT), this.nodes.forEach(KT), this.nodes.forEach(bT), RT(Nn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new VT());
    }
    addEventListener(o, l) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new zc()), this.eventHandlers.get(o).add(l);
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = NT(o), this.instance = o;
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = OT(d, 250), js.hasAnimatedSinceResize && (js.hasAnimatedSinceResize = !1, this.nodes.forEach(Sh));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: y, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const x = this.options.transition || c.getDefaultTransition() || ZT, { onLayoutAnimationStart: E, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !Fg(this.targetLayout, v) || y, p = !d && y;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || d && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, p);
          const w = {
            ..._c(x, "layout"),
            onPlay: E,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          d || Sh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Qt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(GT), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.HandoffCancelAllAnimations && Dg(this) && window.HandoffCancelAllAnimations(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(wh);
        return;
      }
      this.isUpdating || this.nodes.forEach(UT), this.isUpdating = !1, this.nodes.forEach(WT), this.nodes.forEach(IT), this.nodes.forEach(zT), this.clearAllSnapshots();
      const l = xn.now();
      Ce.delta = kn(0, 1e3 / 60, l - Ce.timestamp), Ce.timestamp = l, Ce.isProcessing = !0, Nl.update.process(Ce), Nl.preRender.process(Ce), Nl.render.process(Ce), Ce.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, pc.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(BT), this.sharedNodes.forEach(QT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = he(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1), l && (this.scroll = {
        animationId: this.root.animationId,
        phase: o,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform, l = this.projectionDelta && !Ag(this.projectionDelta), a = this.getTransformTemplate(), u = a ? a(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && (l || Rn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return o && (a = this.removeTransform(a)), qT(a), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: a,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o)
        return he();
      const l = o.measureViewportBox(), { scroll: a } = this.root;
      return a && (tn(l.x, a.offset.x), tn(l.y, a.offset.y)), l;
    }
    removeElementScroll(o) {
      const l = he();
      rt(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a], { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            rt(l, o);
            const { scroll: d } = this.root;
            d && (tn(l.x, -d.offset.x), tn(l.y, -d.offset.y));
          }
          tn(l.x, c.offset.x), tn(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(o, l = !1) {
      const a = he();
      rt(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l && c.options.layoutScroll && c.scroll && c !== c.root && kr(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Rn(c.latestValues) && kr(a, c.latestValues);
      }
      return Rn(this.latestValues) && kr(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = he();
      rt(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Rn(u.latestValues))
          continue;
        ru(u.latestValues) && u.updateSnapshot();
        const c = he(), f = u.measurePageBox();
        rt(c, f), mh(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Rn(this.latestValues) && mh(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ce.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = Ce.timestamp, !this.targetDelta && !this.relativeTarget) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), gi(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = he(), this.targetWithTransforms = he()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Jk(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rt(this.target, this.layout.layoutBox), kg(this.target, this.targetDelta)) : rt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), gi(this.relativeTargetOrigin, this.target, y.target), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Nn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ru(this.parent.latestValues) || Sg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const l = this.getLead(), a = !!this.resumingFrom || this !== l;
      let u = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ce.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
        return;
      rt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, y = this.treeScale.y;
      aT(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = he());
      const { target: v } = l;
      if (!v) {
        this.projectionTransform && (this.projectionDelta = Sr(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Sr(), this.projectionDeltaWithTransform = Sr());
      const x = this.projectionTransform;
      yi(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = vh(this.projectionDelta, this.treeScale), (this.projectionTransform !== x || this.treeScale.x !== d || this.treeScale.y !== y) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), Nn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), o) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot, u = a ? a.latestValues : {}, c = { ...this.latestValues }, f = Sr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const d = he(), y = a ? a.source : void 0, v = this.layout ? this.layout.source : void 0, x = y !== v, E = this.getStack(), m = !E || E.members.length <= 1, h = !!(x && !m && this.options.crossfade === !0 && !this.path.some(XT));
      this.animationProgress = 0;
      let p;
      this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        kh(f.x, o.x, k), kh(f.y, o.y, k), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (gi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), YT(this.relativeTarget, this.relativeTargetOrigin, d, k), p && AT(this.relativeTarget, p) && (this.isProjectionDirty = !1), p || (p = he()), rt(p, this.relativeTarget)), x && (this.animationValues = c, kT(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Qt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = q.update(() => {
        js.hasAnimatedSinceResize = !0, this.currentAnimation = MT(0, xh, {
          ...o,
          onUpdate: (l) => {
            this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = o;
      if (!(!l || !a || !u)) {
        if (this !== o && this.layout && u && Og(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || he();
          const f = et(this.layout.layoutBox.x);
          a.x.min = o.target.x.min, a.x.max = a.x.min + f;
          const d = et(this.layout.layoutBox.y);
          a.y.min = o.target.y.min, a.y.max = a.y.min + d;
        }
        rt(l, a), kr(l, c), yi(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new FT()), this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a), o && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let l = !1;
      const { latestValues: a } = o;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l)
        return;
      const u = {};
      a.z && Hl("z", o, u, this.animationValues);
      for (let c = 0; c < Wl.length; c++)
        Hl(`rotate${Wl[c]}`, o, u, this.animationValues), Hl(`skew${Wl[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return LT;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ms(o == null ? void 0 : o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, x.pointerEvents = Ms(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !Rn(this.latestValues) && (x.transform = c ? c({}, "") : "none", this.hasProjected = !1), x;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = vh(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const x in mo) {
        if (d[x] === void 0)
          continue;
        const { correct: E, applyTo: m } = mo[x], h = u.transform === "none" ? d[x] : E(d[x], f);
        if (m) {
          const p = m.length;
          for (let w = 0; w < p; w++)
            u[m[w]] = h;
        } else
          u[x] = h;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Ms(o == null ? void 0 : o.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(wh), this.root.sharedNodes.clear();
    }
  };
}
function IT(e) {
  e.updateLayout();
}
function zT(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: s } = e.options, o = n.source !== e.layout.source;
    s === "size" ? st((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], y = et(d);
      d.min = r[f].min, d.max = d.min + y;
    }) : Og(s, n.layoutBox, r) && st((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], y = et(r[f]);
      d.max = d.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y);
    });
    const l = Sr();
    yi(l, r, n.layoutBox);
    const a = Sr();
    o ? yi(a, e.applyTransform(i, !0), n.measuredBox) : yi(a, r, n.layoutBox);
    const u = !Ag(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: y } = f;
        if (d && y) {
          const v = he();
          gi(v, n.layoutBox, d.layoutBox);
          const x = he();
          gi(x, r, y.layoutBox), Fg(v, x) || (c = !0), f.options.layoutRoot && (e.relativeTarget = x, e.relativeTargetOrigin = v, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function $T(e) {
  Nn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function bT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function BT(e) {
  e.clearSnapshot();
}
function wh(e) {
  e.clearMeasurements();
}
function UT(e) {
  e.isLayoutDirty = !1;
}
function WT(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Sh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function HT(e) {
  e.resolveTargetDelta();
}
function KT(e) {
  e.calcProjection();
}
function GT(e) {
  e.resetSkewAndRotation();
}
function QT(e) {
  e.removeLeadSnapshot();
}
function kh(e, t, n) {
  e.translate = ue(t.translate, 0, n), e.scale = ue(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Th(e, t, n, r) {
  e.min = ue(t.min, n.min, r), e.max = ue(t.max, n.max, r);
}
function YT(e, t, n, r) {
  Th(e.x, t.x, n.x, r), Th(e.y, t.y, n.y, r);
}
function XT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ZT = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Eh = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ph = Eh("applewebkit/") && !Eh("chrome/") ? Math.round : Ne;
function Ch(e) {
  e.min = Ph(e.min), e.max = Ph(e.max);
}
function qT(e) {
  Ch(e.x), Ch(e.y);
}
function Og(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !tu(gh(t), gh(n), 0.2);
}
const JT = Vg({
  attachResizeListener: (e, t) => zt(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Kl = {
  current: void 0
}, Rg = Vg({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Kl.current) {
      const e = new JT({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Kl.current = e;
    }
    return Kl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), eE = {
  pan: {
    Feature: yT
  },
  drag: {
    Feature: mT,
    ProjectionNode: Rg,
    MeasureLayout: Pg
  }
}, su = { current: null }, Ng = { current: !1 };
function tE() {
  if (Ng.current = !0, !!fc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => su.current = e.matches;
      e.addListener(t), t();
    } else
      su.current = !1;
}
function nE(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const s = t[i], o = n[i];
    if (Re(s))
      e.addValue(i, s), wo(r) && r.add(i);
    else if (Re(o))
      e.addValue(i, zi(s, { owner: e })), wo(r) && r.remove(i);
    else if (o !== s)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        l.liveStyle === !0 ? l.jump(s) : l.hasAnimated || l.set(s);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, zi(l !== void 0 ? l : s, { owner: e }));
      }
  }
  for (const i in n)
    t[i] === void 0 && e.removeValue(i);
  return t;
}
const _h = /* @__PURE__ */ new WeakMap(), rE = [...Wy, Ve, Tn], iE = (e) => rE.find(Uy(e)), Mg = Object.keys(Li), sE = Mg.length, Ah = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], oE = yc.length;
function Lg(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Lg(e.parent);
}
class lE {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o }, l = {}) {
    this.resolveKeyframes = (d, y, v, x) => new this.KeyframeResolver(d, y, v, x, this), this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ac, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => q.render(this.render, !1, !0);
    const { latestValues: a, renderState: u } = o;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = Go(n), this.isVariantNode = xy(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const y = f[d];
      a[d] !== void 0 && Re(y) && (y.set(a[d], !1), wo(c) && c.add(d));
    }
  }
  mount(t) {
    this.current = t, _h.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Ng.current || tE(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : su.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    _h.delete(this.current), this.projection && this.projection.unmount(), Qt(this.notifyUpdate), Qt(this.render), this.valueSubscriptions.forEach((n) => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features)
      (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = er.has(t), i = n.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && q.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, s) {
    let o, l;
    for (let a = 0; a < sE; a++) {
      const u = Mg[a], { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: y } = Li[u];
      d && (o = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), y && (l = y));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
      const { layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: y } = n;
      this.projection = new o(this.latestValues, n["data-framer-portal-id"] ? void 0 : Lg(this.parent)), this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || f && xr(f),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: d,
        layoutRoot: y
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : he();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Ah.length; r++) {
      const i = Ah[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = nE(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < oE; r++) {
      const i = yc[r], s = this.props[i];
      (Mi(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = zi(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (by(i) || $y(i)) ? i = parseFloat(i) : !iE(i) && Tn.test(n) && (i = qy(t, n)), this.setBaseTarget(t, Re(i) ? i.get() : i)), Re(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Cc(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[t]);
    }
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Re(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new zc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class jg extends lE {
  constructor() {
    super(...arguments), this.KeyframeResolver = Jy;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function aE(e) {
  return window.getComputedStyle(e);
}
class uE extends jg {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(t, n) {
    if (er.has(n)) {
      const r = Dc(n);
      return r && r.default || 0;
    } else {
      const r = aE(t), i = (Ty(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Tg(t, n);
  }
  build(t, n, r, i) {
    Sc(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Pc(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Re(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, i) {
    Ay(t, n, r, i);
  }
}
class cE extends jg {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (er.has(n)) {
      const r = Dc(n);
      return r && r.default || 0;
    }
    return n = Fy.has(n) ? n : hc(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return he();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Vy(t, n, r);
  }
  build(t, n, r, i) {
    Tc(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Dy(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Ec(t.tagName), super.mount(t);
  }
}
const fE = (e, t) => vc(e) ? new cE(t, { enableHardwareAcceleration: !1 }) : new uE(t, {
  allowProjection: e !== V.Fragment,
  enableHardwareAcceleration: !0
}), dE = {
  layout: {
    ProjectionNode: Rg,
    MeasureLayout: Pg
  }
}, hE = {
  ...Yk,
  ...iS,
  ...eE,
  ...dE
}, pE = /* @__PURE__ */ pw((e, t) => Hw(e, t, hE, fE));
function Ig() {
  const e = V.useRef(!1);
  return dc(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function mE() {
  const e = Ig(), [t, n] = V.useState(0), r = V.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [V.useCallback(() => q.postRender(r), [r]), t];
}
class yE extends V.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function gE({ children: e, isPresent: t }) {
  const n = V.useId(), r = V.useRef(null), i = V.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = V.useContext(cc);
  return V.useInsertionEffect(() => {
    const { width: o, height: l, top: a, left: u } = i.current;
    if (t || !r.current || !o || !l)
      return;
    r.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return s && (c.nonce = s), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), D.jsx(yE, { isPresent: t, childRef: r, sizeRef: i, children: V.cloneElement(e, { ref: r }) });
}
const Gl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
  const l = Oy(vE), a = V.useId(), u = V.useMemo(
    () => ({
      id: a,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: (c) => {
        l.set(c, !0);
        for (const f of l.values())
          if (!f)
            return;
        r && r();
      },
      register: (c) => (l.set(c, !1), () => l.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random()] : [n]
  );
  return V.useMemo(() => {
    l.forEach((c, f) => l.set(f, !1));
  }, [n]), V.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), o === "popLayout" && (e = D.jsx(gE, { isPresent: n, children: e })), D.jsx(Ho.Provider, { value: u, children: e });
};
function vE() {
  return /* @__PURE__ */ new Map();
}
function xE(e) {
  return V.useEffect(() => () => e(), []);
}
const Mn = (e) => e.key || "";
function wE(e, t) {
  e.forEach((n) => {
    const r = Mn(n);
    t.set(r, n);
  });
}
function SE(e) {
  const t = [];
  return V.Children.forEach(e, (n) => {
    V.isValidElement(n) && t.push(n);
  }), t;
}
const kE = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: s = !0, mode: o = "sync" }) => {
  const l = V.useContext(gc).forceRender || mE()[0], a = Ig(), u = SE(e);
  let c = u;
  const f = V.useRef(/* @__PURE__ */ new Map()).current, d = V.useRef(c), y = V.useRef(/* @__PURE__ */ new Map()).current, v = V.useRef(!0);
  if (dc(() => {
    v.current = !1, wE(u, y), d.current = c;
  }), xE(() => {
    v.current = !0, y.clear(), f.clear();
  }), v.current)
    return D.jsx(D.Fragment, { children: c.map((h) => D.jsx(Gl, { isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: o, children: h }, Mn(h))) });
  c = [...c];
  const x = d.current.map(Mn), E = u.map(Mn), m = x.length;
  for (let h = 0; h < m; h++) {
    const p = x[h];
    E.indexOf(p) === -1 && !f.has(p) && f.set(p, void 0);
  }
  return o === "wait" && f.size && (c = []), f.forEach((h, p) => {
    if (E.indexOf(p) !== -1)
      return;
    const w = y.get(p);
    if (!w)
      return;
    const k = x.indexOf(p);
    let A = h;
    if (!A) {
      const O = () => {
        f.delete(p);
        const P = Array.from(y.keys()).filter((b) => !E.includes(b));
        if (P.forEach((b) => y.delete(b)), d.current = u.filter((b) => {
          const M = Mn(b);
          return (
            // filter out the node exiting
            M === p || // filter out the leftover children
            P.includes(M)
          );
        }), !f.size) {
          if (a.current === !1)
            return;
          l(), r && r();
        }
      };
      A = D.jsx(Gl, { isPresent: !1, onExitComplete: O, custom: t, presenceAffectsLayout: s, mode: o, children: w }, Mn(w)), f.set(p, A);
    }
    c.splice(k, 0, A);
  }), c = c.map((h) => {
    const p = h.key;
    return f.has(p) ? h : D.jsx(Gl, { isPresent: !0, presenceAffectsLayout: s, mode: o, children: h }, Mn(h));
  }), D.jsx(D.Fragment, { children: f.size ? c : c.map((h) => V.cloneElement(h)) });
};
var TE = function(e) {
  var t = e.as, n = e.errors, r = e.name, i = e.message, s = e.render, o = function(d, y) {
    if (d == null)
      return {};
    var v, x, E = {}, m = Object.keys(d);
    for (x = 0; x < m.length; x++)
      y.indexOf(v = m[x]) >= 0 || (E[v] = d[v]);
    return E;
  }(e, ["as", "errors", "name", "message", "render"]), l = lc(), a = L(n || l.formState.errors, r);
  if (!a)
    return null;
  var u = a.message, c = a.types, f = Object.assign({}, o, { children: u || i });
  return V.isValidElement(t) ? V.cloneElement(t, f) : s ? s({ message: u || i, messages: c }) : V.createElement(t || V.Fragment, f);
};
function EE({
  register: e,
  activeStep: t,
  initialValues: n
}) {
  function r(l) {
    return l = l[0].toUpperCase() + l.slice(1), l.replace(/[A-Z]/g, " $&");
  }
  function i(l, a) {
    const u = {};
    return a === "number" && (u.onKeyDown = (f) => {
      ["e", "E", "+", "-", ".", ","].includes(f.key) && f.preventDefault();
    }), ((l == null ? void 0 : l.tests) || []).forEach((f) => {
      switch (f.OPTIONS.name) {
        case "min":
          u.min = f.OPTIONS.params.min || f.OPTIONS.params.more;
          break;
        case "max":
          u.max = f.OPTIONS.params.max;
          break;
      }
    }), u;
  }
  const { validationSchema: s, fields: o } = t;
  return /* @__PURE__ */ D.jsxs("div", { id: "default", className: "prose max-w-none", children: [
    /* @__PURE__ */ D.jsx("h2", { children: r(t.id) }),
    /* @__PURE__ */ D.jsx("p", { children: t.helpText }),
    /* @__PURE__ */ D.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(n || {}).map((l) => {
      var a, u;
      return /* @__PURE__ */ D.jsxs("div", { className: "grow shrink-0 basis-72", children: [
        /* @__PURE__ */ D.jsx(
          "label",
          {
            htmlFor: l,
            className: "block mb-2 text-sm font-medium text-white",
            children: r(l)
          }
        ),
        /* @__PURE__ */ D.jsx(
          "input",
          {
            id: l,
            type: o == null ? void 0 : o.inputTypes[l],
            placeholder: (a = o == null ? void 0 : o.placeholders) == null ? void 0 : a[l],
            ...i(
              (u = s == null ? void 0 : s.fields) == null ? void 0 : u[l],
              o == null ? void 0 : o.inputTypes[l]
            ),
            ...e(l),
            className: "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
          }
        ),
        /* @__PURE__ */ D.jsx(
          TE,
          {
            name: l,
            render: ({ message: c }) => /* @__PURE__ */ D.jsx("div", { className: "text-red-400", children: c })
          }
        )
      ] }, l);
    }) })
  ] });
}
function PE() {
  const { isAnimated: e } = V.useContext($c), { activeStep: t } = Gi(), { register: n, formState: r } = lc();
  let i = {};
  return e && (i = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }), /* @__PURE__ */ D.jsx(kE, { initial: !1, mode: "wait", children: /* @__PURE__ */ D.jsx(
    pE.div,
    {
      variants: i,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      transition: { type: "tween", duration: 0.25 },
      children: /* @__PURE__ */ D.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ D.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ D.jsx(
        EE,
        {
          register: n,
          activeStep: t,
          initialValues: r.defaultValues
        }
      ) }) })
    },
    t.id
  ) });
}
var zg = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Fh = pe.createContext && /* @__PURE__ */ pe.createContext(zg), CE = ["attr", "size", "title"];
function _E(e, t) {
  if (e == null)
    return {};
  var n = AE(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      r = s[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function AE(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ko.apply(this, arguments);
}
function Dh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function To(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dh(Object(n), !0).forEach(function(r) {
      FE(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function FE(e, t, n) {
  return t = DE(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function DE(e) {
  var t = VE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VE(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $g(e) {
  return e && e.map((t, n) => /* @__PURE__ */ pe.createElement(t.tag, To({
    key: n
  }, t.attr), $g(t.child)));
}
function bg(e) {
  return (t) => /* @__PURE__ */ pe.createElement(OE, ko({
    attr: To({}, e.attr)
  }, t), $g(e.child));
}
function OE(e) {
  var t = (n) => {
    var {
      attr: r,
      size: i,
      title: s
    } = e, o = _E(e, CE), l = i || n.size || "1em", a;
    return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), /* @__PURE__ */ pe.createElement("svg", ko({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, o, {
      className: a,
      style: To(To({
        color: e.color || n.color
      }, n.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ pe.createElement("title", null, s), e.children);
  };
  return Fh !== void 0 ? /* @__PURE__ */ pe.createElement(Fh.Consumer, null, (n) => t(n)) : t(zg);
}
function RE(e) {
  return bg({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" }, child: [] }] })(e);
}
function NE(e) {
  return bg({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" }, child: [] }] })(e);
}
var Bg = {}, jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.cssValue = jr.parseLengthAndUnit = void 0;
var ME = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0
};
function Ug(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return ME[r] ? {
    value: t,
    unit: r
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
jr.parseLengthAndUnit = Ug;
function LE(e) {
  var t = Ug(e);
  return "".concat(t.value).concat(t.unit);
}
jr.cssValue = LE;
var Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.createAnimation = void 0;
var jE = function(e, t, n) {
  var r = "react-spinners-".concat(e, "-").concat(n);
  if (typeof window > "u" || !window.document)
    return r;
  var i = document.createElement("style");
  document.head.appendChild(i);
  var s = i.sheet, o = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
  return s && s.insertRule(o, 0), r;
};
Zo.createAnimation = jE;
var Eo = Vt && Vt.__assign || function() {
  return Eo = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Eo.apply(this, arguments);
}, IE = Vt && Vt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var i = Object.getOwnPropertyDescriptor(t, n);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), zE = Vt && Vt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), $E = Vt && Vt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && IE(t, e, n);
  return zE(t, e), t;
}, bE = Vt && Vt.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
Object.defineProperty(Bg, "__esModule", { value: !0 });
var BE = $E(V), Vh = jr, UE = Zo, WE = (0, UE.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function HE(e) {
  var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, s = e.speedMultiplier, o = s === void 0 ? 1 : s, l = e.cssOverride, a = l === void 0 ? {} : l, u = e.size, c = u === void 0 ? 35 : u, f = bE(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = Eo({ background: "transparent !important", width: (0, Vh.cssValue)(c), height: (0, Vh.cssValue)(c), borderRadius: "100%", border: "2px solid", borderTopColor: i, borderBottomColor: "transparent", borderLeftColor: i, borderRightColor: i, display: "inline-block", animation: "".concat(WE, " ").concat(0.75 / o, "s 0s infinite linear"), animationFillMode: "both" }, a);
  return n ? BE.createElement("span", Eo({ style: d }, f)) : null;
}
var KE = Bg.default = HE;
function GE() {
  let {
    goToPreviousStep: e,
    isFirstStep: t,
    isLoading: n,
    activeStep: { hidePrevious: r, hideNext: i, disableNext: s, disableNextOnErrors: o }
  } = Gi();
  const {
    formState: { isValid: l },
    trigger: a
  } = lc();
  return s = n || s || o && !l, /* @__PURE__ */ D.jsx("div", { className: "navigation", children: /* @__PURE__ */ D.jsxs(
    "div",
    {
      className: "navigation-wrapper " + (r ? "justify-end" : "justify-between"),
      children: [
        !r && /* @__PURE__ */ D.jsxs(
          "button",
          {
            className: "btn",
            onClick: e,
            disabled: t,
            type: "button",
            children: [
              /* @__PURE__ */ D.jsx(RE, { className: "w-8 h-8 fill-current" }),
              /* @__PURE__ */ D.jsx("span", { children: "Previous" })
            ]
          }
        ),
        !i && // Still possible to trigger submit even though button is disabled.
        // Main reason is to display validation errors.
        /* @__PURE__ */ D.jsx(
          "div",
          {
            onClick: s ? () => {
              a();
            } : void 0,
            children: /* @__PURE__ */ D.jsxs("button", { className: "btn", disabled: s, type: "submit", children: [
              n && /* @__PURE__ */ D.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ D.jsx(KE, { size: 11, color: "#757575" }) }),
              /* @__PURE__ */ D.jsx("span", { children: "Next" }),
              /* @__PURE__ */ D.jsx(NE, { className: "w-8 h-8 fill-current" })
            ] })
          }
        )
      ]
    }
  ) });
}
function QE() {
  const { isAnimated: e, setIsAnimated: t } = V.useContext($c), { stepNumber: n, totalSteps: r } = Gi(), i = `${(n - 1) / (r - 1) * 100}%`;
  return /* @__PURE__ */ D.jsxs("header", { className: "pt-4 pb-3", children: [
    /* @__PURE__ */ D.jsxs("div", { className: "px-5 flex justify-between items-center prose max-w-none", children: [
      /* @__PURE__ */ D.jsx("h3", { className: "mb-0 text-sm xs:text-base sm:text-xl", children: "rhf-wizard" }),
      /* @__PURE__ */ D.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ D.jsxs("div", { className: "mr-3 text-sm", children: [
          /* @__PURE__ */ D.jsx("span", { className: "hidden min-[400px]:inline", children: "Step" }),
          " ",
          n,
          " ",
          "/ ",
          r
        ] }),
        /* @__PURE__ */ D.jsx("a", { href: "https://github.com/kennyhei/rhf-wizard", target: "_blank", children: /* @__PURE__ */ D.jsx(
          "img",
          {
            src: "/rhf-wizard/github-mark-white.svg",
            className: "rounded-md w-9 my-0"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: "w-full bg-gray-600 h-1 mt-[17px]", children: /* @__PURE__ */ D.jsx(
      "div",
      {
        style: { width: i },
        className: "h-full bg-success transition-all " + (e ? "duration-500" : "")
      }
    ) }),
    /* @__PURE__ */ D.jsx("div", { className: "flex justify-end pr-5 prose max-w-none pt-1", children: /* @__PURE__ */ D.jsxs("label", { className: "label cursor-pointer px-0", children: [
      /* @__PURE__ */ D.jsx(
        "span",
        {
          className: "label-text pr-2 " + (e ? "text-success" : "text-gray-300"),
          children: "Animate"
        }
      ),
      /* @__PURE__ */ D.jsx(
        "input",
        {
          type: "checkbox",
          className: "toggle toggle-sm bg-gray-300 toggle-success",
          checked: e,
          onChange: () => t(!e)
        }
      )
    ] }) })
  ] });
}
const $c = V.createContext(
  {}
);
function YE() {
  const [e, t] = V.useState(!0);
  return /* @__PURE__ */ D.jsx($c.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ D.jsx(
    Zx,
    {
      enableHash: !0,
      steps: tw,
      onStepChanged: (n, r, i) => {
        console.log("step changed", n.id, r.id, i);
      },
      header: /* @__PURE__ */ D.jsx(QE, {}),
      wrapper: /* @__PURE__ */ D.jsx(PE, {}),
      footer: /* @__PURE__ */ D.jsx(GE, {})
    }
  ) });
}
Ql.createRoot(document.getElementById("root")).render(/* @__PURE__ */ D.jsx(YE, {}));
