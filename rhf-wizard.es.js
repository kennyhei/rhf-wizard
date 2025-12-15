(function() {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
  new MutationObserver((a) => {
    for (const c of a)
      if (c.type === "childList")
        for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function i(a) {
    const c = {};
    return a.integrity && (c.integrity = a.integrity), a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function o(a) {
    if (a.ep) return;
    a.ep = !0;
    const c = i(a);
    fetch(a.href, c);
  }
})();
function sl(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var nu = { exports: {} }, Ji = {}, ru = { exports: {} }, we = {};
var vh;
function f0() {
  if (vh) return we;
  vh = 1;
  var r = /* @__PURE__ */ Symbol.for("react.element"), n = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.provider"), f = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), v = Symbol.iterator;
  function x(C) {
    return C === null || typeof C != "object" ? null : (C = v && C[v] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var k = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, D = {};
  function M(C, I, ge) {
    this.props = C, this.context = I, this.refs = D, this.updater = ge || k;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(C, I) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, I, "setState");
  }, M.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function F() {
  }
  F.prototype = M.prototype;
  function R(C, I, ge) {
    this.props = C, this.context = I, this.refs = D, this.updater = ge || k;
  }
  var U = R.prototype = new F();
  U.constructor = R, _(U, M.prototype), U.isPureReactComponent = !0;
  var H = Array.isArray, L = Object.prototype.hasOwnProperty, q = { current: null }, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(C, I, ge) {
    var ve, Te = {}, ke = null, Ve = null;
    if (I != null) for (ve in I.ref !== void 0 && (Ve = I.ref), I.key !== void 0 && (ke = "" + I.key), I) L.call(I, ve) && !le.hasOwnProperty(ve) && (Te[ve] = I[ve]);
    var _e = arguments.length - 2;
    if (_e === 1) Te.children = ge;
    else if (1 < _e) {
      for (var Re = Array(_e), st = 0; st < _e; st++) Re[st] = arguments[st + 2];
      Te.children = Re;
    }
    if (C && C.defaultProps) for (ve in _e = C.defaultProps, _e) Te[ve] === void 0 && (Te[ve] = _e[ve]);
    return { $$typeof: r, type: C, key: ke, ref: Ve, props: Te, _owner: q.current };
  }
  function pe(C, I) {
    return { $$typeof: r, type: C.type, key: I, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function Se(C) {
    return typeof C == "object" && C !== null && C.$$typeof === r;
  }
  function ye(C) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(ge) {
      return I[ge];
    });
  }
  var ue = /\/+/g;
  function he(C, I) {
    return typeof C == "object" && C !== null && C.key != null ? ye("" + C.key) : I.toString(36);
  }
  function xe(C, I, ge, ve, Te) {
    var ke = typeof C;
    (ke === "undefined" || ke === "boolean") && (C = null);
    var Ve = !1;
    if (C === null) Ve = !0;
    else switch (ke) {
      case "string":
      case "number":
        Ve = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case r:
          case n:
            Ve = !0;
        }
    }
    if (Ve) return Ve = C, Te = Te(Ve), C = ve === "" ? "." + he(Ve, 0) : ve, H(Te) ? (ge = "", C != null && (ge = C.replace(ue, "$&/") + "/"), xe(Te, I, ge, "", function(st) {
      return st;
    })) : Te != null && (Se(Te) && (Te = pe(Te, ge + (!Te.key || Ve && Ve.key === Te.key ? "" : ("" + Te.key).replace(ue, "$&/") + "/") + C)), I.push(Te)), 1;
    if (Ve = 0, ve = ve === "" ? "." : ve + ":", H(C)) for (var _e = 0; _e < C.length; _e++) {
      ke = C[_e];
      var Re = ve + he(ke, _e);
      Ve += xe(ke, I, ge, Re, Te);
    }
    else if (Re = x(C), typeof Re == "function") for (C = Re.call(C), _e = 0; !(ke = C.next()).done; ) ke = ke.value, Re = ve + he(ke, _e++), Ve += xe(ke, I, ge, Re, Te);
    else if (ke === "object") throw I = String(C), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return Ve;
  }
  function Fe(C, I, ge) {
    if (C == null) return C;
    var ve = [], Te = 0;
    return xe(C, ve, "", "", function(ke) {
      return I.call(ge, ke, Te++);
    }), ve;
  }
  function Pe(C) {
    if (C._status === -1) {
      var I = C._result;
      I = I(), I.then(function(ge) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = ge);
      }, function(ge) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = ge);
      }), C._status === -1 && (C._status = 0, C._result = I);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var X = { current: null }, j = { transition: null }, Z = { ReactCurrentDispatcher: X, ReactCurrentBatchConfig: j, ReactCurrentOwner: q };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return we.Children = { map: Fe, forEach: function(C, I, ge) {
    Fe(C, function() {
      I.apply(this, arguments);
    }, ge);
  }, count: function(C) {
    var I = 0;
    return Fe(C, function() {
      I++;
    }), I;
  }, toArray: function(C) {
    return Fe(C, function(I) {
      return I;
    }) || [];
  }, only: function(C) {
    if (!Se(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, we.Component = M, we.Fragment = i, we.Profiler = a, we.PureComponent = R, we.StrictMode = o, we.Suspense = p, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, we.act = Y, we.cloneElement = function(C, I, ge) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var ve = _({}, C.props), Te = C.key, ke = C.ref, Ve = C._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ke = I.ref, Ve = q.current), I.key !== void 0 && (Te = "" + I.key), C.type && C.type.defaultProps) var _e = C.type.defaultProps;
      for (Re in I) L.call(I, Re) && !le.hasOwnProperty(Re) && (ve[Re] = I[Re] === void 0 && _e !== void 0 ? _e[Re] : I[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) ve.children = ge;
    else if (1 < Re) {
      _e = Array(Re);
      for (var st = 0; st < Re; st++) _e[st] = arguments[st + 2];
      ve.children = _e;
    }
    return { $$typeof: r, type: C.type, key: Te, ref: ke, props: ve, _owner: Ve };
  }, we.createContext = function(C) {
    return C = { $$typeof: f, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: c, _context: C }, C.Consumer = C;
  }, we.createElement = te, we.createFactory = function(C) {
    var I = te.bind(null, C);
    return I.type = C, I;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(C) {
    return { $$typeof: h, render: C };
  }, we.isValidElement = Se, we.lazy = function(C) {
    return { $$typeof: g, _payload: { _status: -1, _result: C }, _init: Pe };
  }, we.memo = function(C, I) {
    return { $$typeof: m, type: C, compare: I === void 0 ? null : I };
  }, we.startTransition = function(C) {
    var I = j.transition;
    j.transition = {};
    try {
      C();
    } finally {
      j.transition = I;
    }
  }, we.unstable_act = Y, we.useCallback = function(C, I) {
    return X.current.useCallback(C, I);
  }, we.useContext = function(C) {
    return X.current.useContext(C);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(C) {
    return X.current.useDeferredValue(C);
  }, we.useEffect = function(C, I) {
    return X.current.useEffect(C, I);
  }, we.useId = function() {
    return X.current.useId();
  }, we.useImperativeHandle = function(C, I, ge) {
    return X.current.useImperativeHandle(C, I, ge);
  }, we.useInsertionEffect = function(C, I) {
    return X.current.useInsertionEffect(C, I);
  }, we.useLayoutEffect = function(C, I) {
    return X.current.useLayoutEffect(C, I);
  }, we.useMemo = function(C, I) {
    return X.current.useMemo(C, I);
  }, we.useReducer = function(C, I, ge) {
    return X.current.useReducer(C, I, ge);
  }, we.useRef = function(C) {
    return X.current.useRef(C);
  }, we.useState = function(C) {
    return X.current.useState(C);
  }, we.useSyncExternalStore = function(C, I, ge) {
    return X.current.useSyncExternalStore(C, I, ge);
  }, we.useTransition = function() {
    return X.current.useTransition();
  }, we.version = "18.3.1", we;
}
var xh;
function ol() {
  return xh || (xh = 1, ru.exports = f0()), ru.exports;
}
var wh;
function d0() {
  if (wh) return Ji;
  wh = 1;
  var r = ol(), n = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, p, m) {
    var g, v = {}, x = null, k = null;
    m !== void 0 && (x = "" + m), p.key !== void 0 && (x = "" + p.key), p.ref !== void 0 && (k = p.ref);
    for (g in p) o.call(p, g) && !c.hasOwnProperty(g) && (v[g] = p[g]);
    if (h && h.defaultProps) for (g in p = h.defaultProps, p) v[g] === void 0 && (v[g] = p[g]);
    return { $$typeof: n, type: h, key: x, ref: k, props: v, _owner: a.current };
  }
  return Ji.Fragment = i, Ji.jsx = f, Ji.jsxs = f, Ji;
}
var Sh;
function h0() {
  return Sh || (Sh = 1, nu.exports = d0()), nu.exports;
}
var Q = h0(), G = ol();
const We = /* @__PURE__ */ sl(G);
var Ro = {}, iu = { exports: {} }, Pt = {}, su = { exports: {} }, ou = {};
var Th;
function p0() {
  return Th || (Th = 1, (function(r) {
    function n(j, Z) {
      var Y = j.length;
      j.push(Z);
      e: for (; 0 < Y; ) {
        var C = Y - 1 >>> 1, I = j[C];
        if (0 < a(I, Z)) j[C] = Z, j[Y] = I, Y = C;
        else break e;
      }
    }
    function i(j) {
      return j.length === 0 ? null : j[0];
    }
    function o(j) {
      if (j.length === 0) return null;
      var Z = j[0], Y = j.pop();
      if (Y !== Z) {
        j[0] = Y;
        e: for (var C = 0, I = j.length, ge = I >>> 1; C < ge; ) {
          var ve = 2 * (C + 1) - 1, Te = j[ve], ke = ve + 1, Ve = j[ke];
          if (0 > a(Te, Y)) ke < I && 0 > a(Ve, Te) ? (j[C] = Ve, j[ke] = Y, C = ke) : (j[C] = Te, j[ve] = Y, C = ve);
          else if (ke < I && 0 > a(Ve, Y)) j[C] = Ve, j[ke] = Y, C = ke;
          else break e;
        }
      }
      return Z;
    }
    function a(j, Z) {
      var Y = j.sortIndex - Z.sortIndex;
      return Y !== 0 ? Y : j.id - Z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      r.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, h = f.now();
      r.unstable_now = function() {
        return f.now() - h;
      };
    }
    var p = [], m = [], g = 1, v = null, x = 3, k = !1, _ = !1, D = !1, M = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(j) {
      for (var Z = i(m); Z !== null; ) {
        if (Z.callback === null) o(m);
        else if (Z.startTime <= j) o(m), Z.sortIndex = Z.expirationTime, n(p, Z);
        else break;
        Z = i(m);
      }
    }
    function H(j) {
      if (D = !1, U(j), !_) if (i(p) !== null) _ = !0, Pe(L);
      else {
        var Z = i(m);
        Z !== null && X(H, Z.startTime - j);
      }
    }
    function L(j, Z) {
      _ = !1, D && (D = !1, F(te), te = -1), k = !0;
      var Y = x;
      try {
        for (U(Z), v = i(p); v !== null && (!(v.expirationTime > Z) || j && !ye()); ) {
          var C = v.callback;
          if (typeof C == "function") {
            v.callback = null, x = v.priorityLevel;
            var I = C(v.expirationTime <= Z);
            Z = r.unstable_now(), typeof I == "function" ? v.callback = I : v === i(p) && o(p), U(Z);
          } else o(p);
          v = i(p);
        }
        if (v !== null) var ge = !0;
        else {
          var ve = i(m);
          ve !== null && X(H, ve.startTime - Z), ge = !1;
        }
        return ge;
      } finally {
        v = null, x = Y, k = !1;
      }
    }
    var q = !1, le = null, te = -1, pe = 5, Se = -1;
    function ye() {
      return !(r.unstable_now() - Se < pe);
    }
    function ue() {
      if (le !== null) {
        var j = r.unstable_now();
        Se = j;
        var Z = !0;
        try {
          Z = le(!0, j);
        } finally {
          Z ? he() : (q = !1, le = null);
        }
      } else q = !1;
    }
    var he;
    if (typeof R == "function") he = function() {
      R(ue);
    };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), Fe = xe.port2;
      xe.port1.onmessage = ue, he = function() {
        Fe.postMessage(null);
      };
    } else he = function() {
      M(ue, 0);
    };
    function Pe(j) {
      le = j, q || (q = !0, he());
    }
    function X(j, Z) {
      te = M(function() {
        j(r.unstable_now());
      }, Z);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, r.unstable_continueExecution = function() {
      _ || k || (_ = !0, Pe(L));
    }, r.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < j ? Math.floor(1e3 / j) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, r.unstable_getFirstCallbackNode = function() {
      return i(p);
    }, r.unstable_next = function(j) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = x;
      }
      var Y = x;
      x = Z;
      try {
        return j();
      } finally {
        x = Y;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(j, Z) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var Y = x;
      x = j;
      try {
        return Z();
      } finally {
        x = Y;
      }
    }, r.unstable_scheduleCallback = function(j, Z, Y) {
      var C = r.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? C + Y : C) : Y = C, j) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = Y + I, j = { id: g++, callback: Z, priorityLevel: j, startTime: Y, expirationTime: I, sortIndex: -1 }, Y > C ? (j.sortIndex = Y, n(m, j), i(p) === null && j === i(m) && (D ? (F(te), te = -1) : D = !0, X(H, Y - C))) : (j.sortIndex = I, n(p, j), _ || k || (_ = !0, Pe(L))), j;
    }, r.unstable_shouldYield = ye, r.unstable_wrapCallback = function(j) {
      var Z = x;
      return function() {
        var Y = x;
        x = Z;
        try {
          return j.apply(this, arguments);
        } finally {
          x = Y;
        }
      };
    };
  })(ou)), ou;
}
var kh;
function m0() {
  return kh || (kh = 1, su.exports = p0()), su.exports;
}
var Eh;
function y0() {
  if (Eh) return Pt;
  Eh = 1;
  var r = ol(), n = m0();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++) t += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), a = {};
  function c(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, v = {};
  function x(e) {
    return p.call(v, e) ? !0 : p.call(g, e) ? !1 : m.test(e) ? v[e] = !0 : (g[e] = !0, !1);
  }
  function k(e, t, s, l) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _(e, t, s, l) {
    if (t === null || typeof t > "u" || k(e, t, s, l)) return !0;
    if (l) return !1;
    if (s !== null) switch (s.type) {
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
  function D(e, t, s, l, u, d, y) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = l, this.attributeNamespace = u, this.mustUseProperty = s, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = y;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    M[e] = new D(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    M[t] = new D(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    M[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    M[e] = new D(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    M[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    M[e] = new D(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    M[e] = new D(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    M[e] = new D(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    M[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var F = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      F,
      R
    );
    M[t] = new D(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(F, R);
    M[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(F, R);
    M[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    M[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    M[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function U(e, t, s, l) {
    var u = M.hasOwnProperty(t) ? M[t] : null;
    (u !== null ? u.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_(t, s, u, l) && (s = null), l || u === null ? x(t) && (s === null ? e.removeAttribute(t) : e.setAttribute(t, "" + s)) : u.mustUseProperty ? e[u.propertyName] = s === null ? u.type === 3 ? !1 : "" : s : (t = u.attributeName, l = u.attributeNamespace, s === null ? e.removeAttribute(t) : (u = u.type, s = u === 3 || u === 4 && s === !0 ? "" : "" + s, l ? e.setAttributeNS(l, t, s) : e.setAttribute(t, s))));
  }
  var H = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, L = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.portal"), le = /* @__PURE__ */ Symbol.for("react.fragment"), te = /* @__PURE__ */ Symbol.for("react.strict_mode"), pe = /* @__PURE__ */ Symbol.for("react.profiler"), Se = /* @__PURE__ */ Symbol.for("react.provider"), ye = /* @__PURE__ */ Symbol.for("react.context"), ue = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), xe = /* @__PURE__ */ Symbol.for("react.suspense_list"), Fe = /* @__PURE__ */ Symbol.for("react.memo"), Pe = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.offscreen"), j = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, C;
  function I(e) {
    if (C === void 0) try {
      throw Error();
    } catch (s) {
      var t = s.stack.trim().match(/\n( *(at )?)/);
      C = t && t[1] || "";
    }
    return `
` + C + e;
  }
  var ge = !1;
  function ve(e, t) {
    if (!e || ge) return "";
    ge = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (O) {
          var l = O;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (O) {
          l = O;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (O) {
          l = O;
        }
        e();
      }
    } catch (O) {
      if (O && l && typeof O.stack == "string") {
        for (var u = O.stack.split(`
`), d = l.stack.split(`
`), y = u.length - 1, w = d.length - 1; 1 <= y && 0 <= w && u[y] !== d[w]; ) w--;
        for (; 1 <= y && 0 <= w; y--, w--) if (u[y] !== d[w]) {
          if (y !== 1 || w !== 1)
            do
              if (y--, w--, 0 > w || u[y] !== d[w]) {
                var T = `
` + u[y].replace(" at new ", " at ");
                return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), T;
              }
            while (1 <= y && 0 <= w);
          break;
        }
      }
    } finally {
      ge = !1, Error.prepareStackTrace = s;
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function Te(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ve(e.type, !1), e;
      case 11:
        return e = ve(e.type.render, !1), e;
      case 1:
        return e = ve(e.type, !0), e;
      default:
        return "";
    }
  }
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case le:
        return "Fragment";
      case q:
        return "Portal";
      case pe:
        return "Profiler";
      case te:
        return "StrictMode";
      case he:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ye:
        return (e.displayName || "Context") + ".Consumer";
      case Se:
        return (e._context.displayName || "Context") + ".Provider";
      case ue:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Fe:
        return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
      case Pe:
        t = e._payload, e = e._init;
        try {
          return ke(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ve(e) {
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
        return ke(t);
      case 8:
        return t === te ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function _e(e) {
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
  function Re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function st(e) {
    var t = Re(e) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var u = s.get, d = s.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(y) {
        l = "" + y, d.call(this, y);
      } }), Object.defineProperty(e, t, { enumerable: s.enumerable }), { getValue: function() {
        return l;
      }, setValue: function(y) {
        l = "" + y;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = st(e));
  }
  function hi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(), l = "";
    return e && (l = Re(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== s ? (t.setValue(e), !0) : !1;
  }
  function Tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function kr(e, t) {
    var s = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? e._wrapperState.initialChecked });
  }
  function pi(e, t) {
    var s = t.defaultValue == null ? "" : t.defaultValue, l = t.checked != null ? t.checked : t.defaultChecked;
    s = _e(t.value != null ? t.value : s), e._wrapperState = { initialChecked: l, initialValue: s, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Es(e, t) {
    t = t.checked, t != null && U(e, "checked", t, !1);
  }
  function mi(e, t) {
    Es(e, t);
    var s = _e(t.value), l = t.type;
    if (s != null) l === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Er(e, t.type, s) : t.hasOwnProperty("defaultValue") && Er(e, t.type, _e(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function pl(e, t, s) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = e.name, s !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, s !== "" && (e.name = s);
  }
  function Er(e, t, s) {
    (t !== "number" || Tr(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var S = Array.isArray;
  function A(e, t, s, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < s.length; u++) t["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++) u = t.hasOwnProperty("$" + e[s].value), e[s].selected !== u && (e[s].selected = u), u && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + _e(s), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function N(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function J(e, t) {
    var s = t.value;
    if (s == null) {
      if (s = t.children, t = t.defaultValue, s != null) {
        if (t != null) throw Error(i(92));
        if (S(s)) {
          if (1 < s.length) throw Error(i(93));
          s = s[0];
        }
        t = s;
      }
      t == null && (t = ""), s = t;
    }
    e._wrapperState = { initialValue: _e(s) };
  }
  function K(e, t) {
    var s = _e(t.value), l = _e(t.defaultValue);
    s != null && (s = "" + s, s !== e.value && (e.value = s), t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)), l != null && (e.defaultValue = "" + l);
  }
  function $(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ae(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ee(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ae(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var De, mt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, s, l, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, s, l, u);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (De = De || document.createElement("div"), De.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = De.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function nn(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wt = {
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
  }, ml = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wt).forEach(function(e) {
    ml.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), wt[t] = wt[e];
    });
  });
  function Cr(e, t, s) {
    return t == null || typeof t == "boolean" || t === "" ? "" : s || typeof t != "number" || t === 0 || wt.hasOwnProperty(e) && wt[e] ? ("" + t).trim() : t + "px";
  }
  function Pr(e, t) {
    e = e.style;
    for (var s in t) if (t.hasOwnProperty(s)) {
      var l = s.indexOf("--") === 0, u = Cr(s, t[s], l);
      s === "float" && (s = "cssFloat"), l ? e.setProperty(s, u) : e[s] = u;
    }
  }
  var yl = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function _r(e, t) {
    if (t) {
      if (yl[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function yi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
  var Ar = null;
  function gl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vl = null, Dr = null, Vr = null;
  function Mc(e) {
    if (e = Ii(e)) {
      if (typeof vl != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Gs(t), vl(e.stateNode, e.type, t));
    }
  }
  function Nc(e) {
    Dr ? Vr ? Vr.push(e) : Vr = [e] : Dr = e;
  }
  function Lc() {
    if (Dr) {
      var e = Dr, t = Vr;
      if (Vr = Dr = null, Mc(e), t) for (e = 0; e < t.length; e++) Mc(t[e]);
    }
  }
  function jc(e, t) {
    return e(t);
  }
  function Ic() {
  }
  var xl = !1;
  function bc(e, t, s) {
    if (xl) return e(t, s);
    xl = !0;
    try {
      return jc(e, t, s);
    } finally {
      xl = !1, (Dr !== null || Vr !== null) && (Ic(), Lc());
    }
  }
  function gi(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var l = Gs(s);
    if (l === null) return null;
    s = l[t];
    e: switch (t) {
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(i(231, t, typeof s));
    return s;
  }
  var wl = !1;
  if (h) try {
    var vi = {};
    Object.defineProperty(vi, "passive", { get: function() {
      wl = !0;
    } }), window.addEventListener("test", vi, vi), window.removeEventListener("test", vi, vi);
  } catch {
    wl = !1;
  }
  function gg(e, t, s, l, u, d, y, w, T) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(s, O);
    } catch (z) {
      this.onError(z);
    }
  }
  var xi = !1, Cs = null, Ps = !1, Sl = null, vg = { onError: function(e) {
    xi = !0, Cs = e;
  } };
  function xg(e, t, s, l, u, d, y, w, T) {
    xi = !1, Cs = null, gg.apply(vg, arguments);
  }
  function wg(e, t, s, l, u, d, y, w, T) {
    if (xg.apply(this, arguments), xi) {
      if (xi) {
        var O = Cs;
        xi = !1, Cs = null;
      } else throw Error(i(198));
      Ps || (Ps = !0, Sl = O);
    }
  }
  function Jn(e) {
    var t = e, s = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (s = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? s : null;
  }
  function zc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Uc(e) {
    if (Jn(e) !== e) throw Error(i(188));
  }
  function Sg(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Jn(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var s = e, l = t; ; ) {
      var u = s.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (l = u.return, l !== null) {
          s = l;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === s) return Uc(u), e;
          if (d === l) return Uc(u), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== l.return) s = u, l = d;
      else {
        for (var y = !1, w = u.child; w; ) {
          if (w === s) {
            y = !0, s = u, l = d;
            break;
          }
          if (w === l) {
            y = !0, l = u, s = d;
            break;
          }
          w = w.sibling;
        }
        if (!y) {
          for (w = d.child; w; ) {
            if (w === s) {
              y = !0, s = d, l = u;
              break;
            }
            if (w === l) {
              y = !0, l = d, s = u;
              break;
            }
            w = w.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (s.alternate !== l) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? e : t;
  }
  function Bc(e) {
    return e = Sg(e), e !== null ? $c(e) : null;
  }
  function $c(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = $c(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Wc = n.unstable_scheduleCallback, Hc = n.unstable_cancelCallback, Tg = n.unstable_shouldYield, kg = n.unstable_requestPaint, Ke = n.unstable_now, Eg = n.unstable_getCurrentPriorityLevel, Tl = n.unstable_ImmediatePriority, Kc = n.unstable_UserBlockingPriority, _s = n.unstable_NormalPriority, Cg = n.unstable_LowPriority, Gc = n.unstable_IdlePriority, As = null, rn = null;
  function Pg(e) {
    if (rn && typeof rn.onCommitFiberRoot == "function") try {
      rn.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ht = Math.clz32 ? Math.clz32 : Dg, _g = Math.log, Ag = Math.LN2;
  function Dg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_g(e) / Ag | 0) | 0;
  }
  var Ds = 64, Vs = 4194304;
  function wi(e) {
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
  function Fs(e, t) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var l = 0, u = e.suspendedLanes, d = e.pingedLanes, y = s & 268435455;
    if (y !== 0) {
      var w = y & ~u;
      w !== 0 ? l = wi(w) : (d &= y, d !== 0 && (l = wi(d)));
    } else y = s & ~u, y !== 0 ? l = wi(y) : d !== 0 && (l = wi(d));
    if (l === 0) return 0;
    if (t !== 0 && t !== l && (t & u) === 0 && (u = l & -l, d = t & -t, u >= d || u === 16 && (d & 4194240) !== 0)) return t;
    if ((l & 4) !== 0 && (l |= s & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= l; 0 < t; ) s = 31 - Ht(t), u = 1 << s, l |= e[s], t &= ~u;
    return l;
  }
  function Vg(e, t) {
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
  function Fg(e, t) {
    for (var s = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
      var y = 31 - Ht(d), w = 1 << y, T = u[y];
      T === -1 ? ((w & s) === 0 || (w & l) !== 0) && (u[y] = Vg(w, t)) : T <= t && (e.expiredLanes |= w), d &= ~w;
    }
  }
  function kl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Qc() {
    var e = Ds;
    return Ds <<= 1, (Ds & 4194240) === 0 && (Ds = 64), e;
  }
  function El(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function Si(e, t, s) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ht(t), e[t] = s;
  }
  function Og(e, t) {
    var s = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var u = 31 - Ht(s), d = 1 << u;
      t[u] = 0, l[u] = -1, e[u] = -1, s &= ~d;
    }
  }
  function Cl(e, t) {
    var s = e.entangledLanes |= t;
    for (e = e.entanglements; s; ) {
      var l = 31 - Ht(s), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), s &= ~u;
    }
  }
  var Oe = 0;
  function Yc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var qc, Pl, Xc, Zc, Jc, _l = !1, Os = [], _n = null, An = null, Dn = null, Ti = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), Vn = [], Rg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ef(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _n = null;
        break;
      case "dragenter":
      case "dragleave":
        An = null;
        break;
      case "mouseover":
      case "mouseout":
        Dn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ti.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ki.delete(t.pointerId);
    }
  }
  function Ei(e, t, s, l, u, d) {
    return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: s, eventSystemFlags: l, nativeEvent: d, targetContainers: [u] }, t !== null && (t = Ii(t), t !== null && Pl(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function Mg(e, t, s, l, u) {
    switch (t) {
      case "focusin":
        return _n = Ei(_n, e, t, s, l, u), !0;
      case "dragenter":
        return An = Ei(An, e, t, s, l, u), !0;
      case "mouseover":
        return Dn = Ei(Dn, e, t, s, l, u), !0;
      case "pointerover":
        var d = u.pointerId;
        return Ti.set(d, Ei(Ti.get(d) || null, e, t, s, l, u)), !0;
      case "gotpointercapture":
        return d = u.pointerId, ki.set(d, Ei(ki.get(d) || null, e, t, s, l, u)), !0;
    }
    return !1;
  }
  function tf(e) {
    var t = er(e.target);
    if (t !== null) {
      var s = Jn(t);
      if (s !== null) {
        if (t = s.tag, t === 13) {
          if (t = zc(s), t !== null) {
            e.blockedOn = t, Jc(e.priority, function() {
              Xc(s);
            });
            return;
          }
        } else if (t === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var s = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        Ar = l, s.target.dispatchEvent(l), Ar = null;
      } else return t = Ii(s), t !== null && Pl(t), e.blockedOn = s, !1;
      t.shift();
    }
    return !0;
  }
  function nf(e, t, s) {
    Rs(e) && s.delete(t);
  }
  function Ng() {
    _l = !1, _n !== null && Rs(_n) && (_n = null), An !== null && Rs(An) && (An = null), Dn !== null && Rs(Dn) && (Dn = null), Ti.forEach(nf), ki.forEach(nf);
  }
  function Ci(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _l || (_l = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, Ng)));
  }
  function Pi(e) {
    function t(u) {
      return Ci(u, e);
    }
    if (0 < Os.length) {
      Ci(Os[0], e);
      for (var s = 1; s < Os.length; s++) {
        var l = Os[s];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (_n !== null && Ci(_n, e), An !== null && Ci(An, e), Dn !== null && Ci(Dn, e), Ti.forEach(t), ki.forEach(t), s = 0; s < Vn.length; s++) l = Vn[s], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Vn.length && (s = Vn[0], s.blockedOn === null); ) tf(s), s.blockedOn === null && Vn.shift();
  }
  var Fr = H.ReactCurrentBatchConfig, Ms = !0;
  function Lg(e, t, s, l) {
    var u = Oe, d = Fr.transition;
    Fr.transition = null;
    try {
      Oe = 1, Al(e, t, s, l);
    } finally {
      Oe = u, Fr.transition = d;
    }
  }
  function jg(e, t, s, l) {
    var u = Oe, d = Fr.transition;
    Fr.transition = null;
    try {
      Oe = 4, Al(e, t, s, l);
    } finally {
      Oe = u, Fr.transition = d;
    }
  }
  function Al(e, t, s, l) {
    if (Ms) {
      var u = Dl(e, t, s, l);
      if (u === null) Kl(e, t, l, Ns, s), ef(e, l);
      else if (Mg(u, e, t, s, l)) l.stopPropagation();
      else if (ef(e, l), t & 4 && -1 < Rg.indexOf(e)) {
        for (; u !== null; ) {
          var d = Ii(u);
          if (d !== null && qc(d), d = Dl(e, t, s, l), d === null && Kl(e, t, l, Ns, s), d === u) break;
          u = d;
        }
        u !== null && l.stopPropagation();
      } else Kl(e, t, l, null, s);
    }
  }
  var Ns = null;
  function Dl(e, t, s, l) {
    if (Ns = null, e = gl(l), e = er(e), e !== null) if (t = Jn(e), t === null) e = null;
    else if (s = t.tag, s === 13) {
      if (e = zc(t), e !== null) return e;
      e = null;
    } else if (s === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ns = e, null;
  }
  function rf(e) {
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
        switch (Eg()) {
          case Tl:
            return 1;
          case Kc:
            return 4;
          case _s:
          case Cg:
            return 16;
          case Gc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Fn = null, Vl = null, Ls = null;
  function sf() {
    if (Ls) return Ls;
    var e, t = Vl, s = t.length, l, u = "value" in Fn ? Fn.value : Fn.textContent, d = u.length;
    for (e = 0; e < s && t[e] === u[e]; e++) ;
    var y = s - e;
    for (l = 1; l <= y && t[s - l] === u[d - l]; l++) ;
    return Ls = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function js(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Is() {
    return !0;
  }
  function of() {
    return !1;
  }
  function Vt(e) {
    function t(s, l, u, d, y) {
      this._reactName = s, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var w in e) e.hasOwnProperty(w) && (s = e[w], this[w] = s ? s(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Is : of, this.isPropagationStopped = of, this;
    }
    return Y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Is);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Is);
    }, persist: function() {
    }, isPersistent: Is }), t;
  }
  var Or = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Fl = Vt(Or), _i = Y({}, Or, { view: 0, detail: 0 }), Ig = Vt(_i), Ol, Rl, Ai, bs = Y({}, _i, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ai && (Ai && e.type === "mousemove" ? (Ol = e.screenX - Ai.screenX, Rl = e.screenY - Ai.screenY) : Rl = Ol = 0, Ai = e), Ol);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Rl;
  } }), lf = Vt(bs), bg = Y({}, bs, { dataTransfer: 0 }), zg = Vt(bg), Ug = Y({}, _i, { relatedTarget: 0 }), Ml = Vt(Ug), Bg = Y({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $g = Vt(Bg), Wg = Y({}, Or, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Hg = Vt(Wg), Kg = Y({}, Or, { data: 0 }), af = Vt(Kg), Gg = {
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
  }, Qg = {
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
  }, Yg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yg[e]) ? !!t[e] : !1;
  }
  function Nl() {
    return qg;
  }
  var Xg = Y({}, _i, { key: function(e) {
    if (e.key) {
      var t = Gg[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qg[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nl, charCode: function(e) {
    return e.type === "keypress" ? js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Zg = Vt(Xg), Jg = Y({}, bs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uf = Vt(Jg), ev = Y({}, _i, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nl }), tv = Vt(ev), nv = Y({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rv = Vt(nv), iv = Y({}, bs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sv = Vt(iv), ov = [9, 13, 27, 32], Ll = h && "CompositionEvent" in window, Di = null;
  h && "documentMode" in document && (Di = document.documentMode);
  var lv = h && "TextEvent" in window && !Di, cf = h && (!Ll || Di && 8 < Di && 11 >= Di), ff = " ", df = !1;
  function hf(e, t) {
    switch (e) {
      case "keyup":
        return ov.indexOf(t.keyCode) !== -1;
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
  function pf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rr = !1;
  function av(e, t) {
    switch (e) {
      case "compositionend":
        return pf(t);
      case "keypress":
        return t.which !== 32 ? null : (df = !0, ff);
      case "textInput":
        return e = t.data, e === ff && df ? null : e;
      default:
        return null;
    }
  }
  function uv(e, t) {
    if (Rr) return e === "compositionend" || !Ll && hf(e, t) ? (e = sf(), Ls = Vl = Fn = null, Rr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return cf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var cv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function mf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cv[e.type] : t === "textarea";
  }
  function yf(e, t, s, l) {
    Nc(l), t = Ws(t, "onChange"), 0 < t.length && (s = new Fl("onChange", "change", null, s, l), e.push({ event: s, listeners: t }));
  }
  var Vi = null, Fi = null;
  function fv(e) {
    Mf(e, 0);
  }
  function zs(e) {
    var t = Ir(e);
    if (hi(t)) return e;
  }
  function dv(e, t) {
    if (e === "change") return t;
  }
  var gf = !1;
  if (h) {
    var jl;
    if (h) {
      var Il = "oninput" in document;
      if (!Il) {
        var vf = document.createElement("div");
        vf.setAttribute("oninput", "return;"), Il = typeof vf.oninput == "function";
      }
      jl = Il;
    } else jl = !1;
    gf = jl && (!document.documentMode || 9 < document.documentMode);
  }
  function xf() {
    Vi && (Vi.detachEvent("onpropertychange", wf), Fi = Vi = null);
  }
  function wf(e) {
    if (e.propertyName === "value" && zs(Fi)) {
      var t = [];
      yf(t, Fi, e, gl(e)), bc(fv, t);
    }
  }
  function hv(e, t, s) {
    e === "focusin" ? (xf(), Vi = t, Fi = s, Vi.attachEvent("onpropertychange", wf)) : e === "focusout" && xf();
  }
  function pv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zs(Fi);
  }
  function mv(e, t) {
    if (e === "click") return zs(t);
  }
  function yv(e, t) {
    if (e === "input" || e === "change") return zs(t);
  }
  function gv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Kt = typeof Object.is == "function" ? Object.is : gv;
  function Oi(e, t) {
    if (Kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var s = Object.keys(e), l = Object.keys(t);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var u = s[l];
      if (!p.call(t, u) || !Kt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Sf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Tf(e, t) {
    var s = Sf(e);
    e = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (l = e + s.textContent.length, e <= t && l >= t) return { node: s, offset: t - e };
        e = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Sf(s);
    }
  }
  function kf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ef() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = Tr(e.document);
    }
    return t;
  }
  function bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function vv(e) {
    var t = Ef(), s = e.focusedElem, l = e.selectionRange;
    if (t !== s && s && s.ownerDocument && kf(s.ownerDocument.documentElement, s)) {
      if (l !== null && bl(s)) {
        if (t = l.start, e = l.end, e === void 0 && (e = t), "selectionStart" in s) s.selectionStart = t, s.selectionEnd = Math.min(e, s.value.length);
        else if (e = (t = s.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var u = s.textContent.length, d = Math.min(l.start, u);
          l = l.end === void 0 ? d : Math.min(l.end, u), !e.extend && d > l && (u = l, l = d, d = u), u = Tf(s, d);
          var y = Tf(
            s,
            l
          );
          u && y && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), d > l ? (e.addRange(t), e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = s; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < t.length; s++) e = t[s], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var xv = h && "documentMode" in document && 11 >= document.documentMode, Mr = null, zl = null, Ri = null, Ul = !1;
  function Cf(e, t, s) {
    var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Ul || Mr == null || Mr !== Tr(l) || (l = Mr, "selectionStart" in l && bl(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Ri && Oi(Ri, l) || (Ri = l, l = Ws(zl, "onSelect"), 0 < l.length && (t = new Fl("onSelect", "select", null, t, s), e.push({ event: t, listeners: l }), t.target = Mr)));
  }
  function Us(e, t) {
    var s = {};
    return s[e.toLowerCase()] = t.toLowerCase(), s["Webkit" + e] = "webkit" + t, s["Moz" + e] = "moz" + t, s;
  }
  var Nr = { animationend: Us("Animation", "AnimationEnd"), animationiteration: Us("Animation", "AnimationIteration"), animationstart: Us("Animation", "AnimationStart"), transitionend: Us("Transition", "TransitionEnd") }, Bl = {}, Pf = {};
  h && (Pf = document.createElement("div").style, "AnimationEvent" in window || (delete Nr.animationend.animation, delete Nr.animationiteration.animation, delete Nr.animationstart.animation), "TransitionEvent" in window || delete Nr.transitionend.transition);
  function Bs(e) {
    if (Bl[e]) return Bl[e];
    if (!Nr[e]) return e;
    var t = Nr[e], s;
    for (s in t) if (t.hasOwnProperty(s) && s in Pf) return Bl[e] = t[s];
    return e;
  }
  var _f = Bs("animationend"), Af = Bs("animationiteration"), Df = Bs("animationstart"), Vf = Bs("transitionend"), Ff = /* @__PURE__ */ new Map(), Of = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, t) {
    Ff.set(e, t), c(t, [e]);
  }
  for (var $l = 0; $l < Of.length; $l++) {
    var Wl = Of[$l], wv = Wl.toLowerCase(), Sv = Wl[0].toUpperCase() + Wl.slice(1);
    On(wv, "on" + Sv);
  }
  On(_f, "onAnimationEnd"), On(Af, "onAnimationIteration"), On(Df, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Vf, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));
  function Rf(e, t, s) {
    var l = e.type || "unknown-event";
    e.currentTarget = s, wg(l, t, void 0, e), e.currentTarget = null;
  }
  function Mf(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var l = e[s], u = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (t) for (var y = l.length - 1; 0 <= y; y--) {
          var w = l[y], T = w.instance, O = w.currentTarget;
          if (w = w.listener, T !== d && u.isPropagationStopped()) break e;
          Rf(u, w, O), d = T;
        }
        else for (y = 0; y < l.length; y++) {
          if (w = l[y], T = w.instance, O = w.currentTarget, w = w.listener, T !== d && u.isPropagationStopped()) break e;
          Rf(u, w, O), d = T;
        }
      }
    }
    if (Ps) throw e = Sl, Ps = !1, Sl = null, e;
  }
  function Le(e, t) {
    var s = t[Zl];
    s === void 0 && (s = t[Zl] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    s.has(l) || (Nf(t, e, 2, !1), s.add(l));
  }
  function Hl(e, t, s) {
    var l = 0;
    t && (l |= 4), Nf(s, e, l, t);
  }
  var $s = "_reactListening" + Math.random().toString(36).slice(2);
  function Ni(e) {
    if (!e[$s]) {
      e[$s] = !0, o.forEach(function(s) {
        s !== "selectionchange" && (Tv.has(s) || Hl(s, !1, e), Hl(s, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$s] || (t[$s] = !0, Hl("selectionchange", !1, t));
    }
  }
  function Nf(e, t, s, l) {
    switch (rf(t)) {
      case 1:
        var u = Lg;
        break;
      case 4:
        u = jg;
        break;
      default:
        u = Al;
    }
    s = u.bind(null, t, s, e), u = void 0, !wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, s, { capture: !0, passive: u }) : e.addEventListener(t, s, !0) : u !== void 0 ? e.addEventListener(t, s, { passive: u }) : e.addEventListener(t, s, !1);
  }
  function Kl(e, t, s, l, u) {
    var d = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var y = l.tag;
      if (y === 3 || y === 4) {
        var w = l.stateNode.containerInfo;
        if (w === u || w.nodeType === 8 && w.parentNode === u) break;
        if (y === 4) for (y = l.return; y !== null; ) {
          var T = y.tag;
          if ((T === 3 || T === 4) && (T = y.stateNode.containerInfo, T === u || T.nodeType === 8 && T.parentNode === u)) return;
          y = y.return;
        }
        for (; w !== null; ) {
          if (y = er(w), y === null) return;
          if (T = y.tag, T === 5 || T === 6) {
            l = d = y;
            continue e;
          }
          w = w.parentNode;
        }
      }
      l = l.return;
    }
    bc(function() {
      var O = d, z = gl(s), B = [];
      e: {
        var b = Ff.get(e);
        if (b !== void 0) {
          var ee = Fl, ie = e;
          switch (e) {
            case "keypress":
              if (js(s) === 0) break e;
            case "keydown":
            case "keyup":
              ee = Zg;
              break;
            case "focusin":
              ie = "focus", ee = Ml;
              break;
            case "focusout":
              ie = "blur", ee = Ml;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Ml;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = lf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = zg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = tv;
              break;
            case _f:
            case Af:
            case Df:
              ee = $g;
              break;
            case Vf:
              ee = rv;
              break;
            case "scroll":
              ee = Ig;
              break;
            case "wheel":
              ee = sv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = Hg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = uf;
          }
          var se = (t & 4) !== 0, Ge = !se && e === "scroll", P = se ? b !== null ? b + "Capture" : null : b;
          se = [];
          for (var E = O, V; E !== null; ) {
            V = E;
            var W = V.stateNode;
            if (V.tag === 5 && W !== null && (V = W, P !== null && (W = gi(E, P), W != null && se.push(Li(E, W, V)))), Ge) break;
            E = E.return;
          }
          0 < se.length && (b = new ee(b, ie, null, s, z), B.push({ event: b, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (b = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", b && s !== Ar && (ie = s.relatedTarget || s.fromElement) && (er(ie) || ie[hn])) break e;
          if ((ee || b) && (b = z.window === z ? z : (b = z.ownerDocument) ? b.defaultView || b.parentWindow : window, ee ? (ie = s.relatedTarget || s.toElement, ee = O, ie = ie ? er(ie) : null, ie !== null && (Ge = Jn(ie), ie !== Ge || ie.tag !== 5 && ie.tag !== 6) && (ie = null)) : (ee = null, ie = O), ee !== ie)) {
            if (se = lf, W = "onMouseLeave", P = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (se = uf, W = "onPointerLeave", P = "onPointerEnter", E = "pointer"), Ge = ee == null ? b : Ir(ee), V = ie == null ? b : Ir(ie), b = new se(W, E + "leave", ee, s, z), b.target = Ge, b.relatedTarget = V, W = null, er(z) === O && (se = new se(P, E + "enter", ie, s, z), se.target = V, se.relatedTarget = Ge, W = se), Ge = W, ee && ie) t: {
              for (se = ee, P = ie, E = 0, V = se; V; V = Lr(V)) E++;
              for (V = 0, W = P; W; W = Lr(W)) V++;
              for (; 0 < E - V; ) se = Lr(se), E--;
              for (; 0 < V - E; ) P = Lr(P), V--;
              for (; E--; ) {
                if (se === P || P !== null && se === P.alternate) break t;
                se = Lr(se), P = Lr(P);
              }
              se = null;
            }
            else se = null;
            ee !== null && Lf(B, b, ee, se, !1), ie !== null && Ge !== null && Lf(B, Ge, ie, se, !0);
          }
        }
        e: {
          if (b = O ? Ir(O) : window, ee = b.nodeName && b.nodeName.toLowerCase(), ee === "select" || ee === "input" && b.type === "file") var oe = dv;
          else if (mf(b)) if (gf) oe = yv;
          else {
            oe = pv;
            var ce = hv;
          }
          else (ee = b.nodeName) && ee.toLowerCase() === "input" && (b.type === "checkbox" || b.type === "radio") && (oe = mv);
          if (oe && (oe = oe(e, O))) {
            yf(B, oe, s, z);
            break e;
          }
          ce && ce(e, b, O), e === "focusout" && (ce = b._wrapperState) && ce.controlled && b.type === "number" && Er(b, "number", b.value);
        }
        switch (ce = O ? Ir(O) : window, e) {
          case "focusin":
            (mf(ce) || ce.contentEditable === "true") && (Mr = ce, zl = O, Ri = null);
            break;
          case "focusout":
            Ri = zl = Mr = null;
            break;
          case "mousedown":
            Ul = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ul = !1, Cf(B, s, z);
            break;
          case "selectionchange":
            if (xv) break;
          case "keydown":
          case "keyup":
            Cf(B, s, z);
        }
        var fe;
        if (Ll) e: {
          switch (e) {
            case "compositionstart":
              var me = "onCompositionStart";
              break e;
            case "compositionend":
              me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              me = "onCompositionUpdate";
              break e;
          }
          me = void 0;
        }
        else Rr ? hf(e, s) && (me = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (me = "onCompositionStart");
        me && (cf && s.locale !== "ko" && (Rr || me !== "onCompositionStart" ? me === "onCompositionEnd" && Rr && (fe = sf()) : (Fn = z, Vl = "value" in Fn ? Fn.value : Fn.textContent, Rr = !0)), ce = Ws(O, me), 0 < ce.length && (me = new af(me, e, null, s, z), B.push({ event: me, listeners: ce }), fe ? me.data = fe : (fe = pf(s), fe !== null && (me.data = fe)))), (fe = lv ? av(e, s) : uv(e, s)) && (O = Ws(O, "onBeforeInput"), 0 < O.length && (z = new af("onBeforeInput", "beforeinput", null, s, z), B.push({ event: z, listeners: O }), z.data = fe));
      }
      Mf(B, t);
    });
  }
  function Li(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function Ws(e, t) {
    for (var s = t + "Capture", l = []; e !== null; ) {
      var u = e, d = u.stateNode;
      u.tag === 5 && d !== null && (u = d, d = gi(e, s), d != null && l.unshift(Li(e, d, u)), d = gi(e, t), d != null && l.push(Li(e, d, u))), e = e.return;
    }
    return l;
  }
  function Lr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Lf(e, t, s, l, u) {
    for (var d = t._reactName, y = []; s !== null && s !== l; ) {
      var w = s, T = w.alternate, O = w.stateNode;
      if (T !== null && T === l) break;
      w.tag === 5 && O !== null && (w = O, u ? (T = gi(s, d), T != null && y.unshift(Li(s, T, w))) : u || (T = gi(s, d), T != null && y.push(Li(s, T, w)))), s = s.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var kv = /\r\n?/g, Ev = /\u0000|\uFFFD/g;
  function jf(e) {
    return (typeof e == "string" ? e : "" + e).replace(kv, `
`).replace(Ev, "");
  }
  function Hs(e, t, s) {
    if (t = jf(t), jf(e) !== t && s) throw Error(i(425));
  }
  function Ks() {
  }
  var Gl = null, Ql = null;
  function Yl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ql = typeof setTimeout == "function" ? setTimeout : void 0, Cv = typeof clearTimeout == "function" ? clearTimeout : void 0, If = typeof Promise == "function" ? Promise : void 0, Pv = typeof queueMicrotask == "function" ? queueMicrotask : typeof If < "u" ? function(e) {
    return If.resolve(null).then(e).catch(_v);
  } : ql;
  function _v(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Xl(e, t) {
    var s = t, l = 0;
    do {
      var u = s.nextSibling;
      if (e.removeChild(s), u && u.nodeType === 8) if (s = u.data, s === "/$") {
        if (l === 0) {
          e.removeChild(u), Pi(t);
          return;
        }
        l--;
      } else s !== "$" && s !== "$?" && s !== "$!" || l++;
      s = u;
    } while (s);
    Pi(t);
  }
  function Rn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function bf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (t === 0) return e;
          t--;
        } else s === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var jr = Math.random().toString(36).slice(2), sn = "__reactFiber$" + jr, ji = "__reactProps$" + jr, hn = "__reactContainer$" + jr, Zl = "__reactEvents$" + jr, Av = "__reactListeners$" + jr, Dv = "__reactHandles$" + jr;
  function er(e) {
    var t = e[sn];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if (t = s[hn] || s[sn]) {
        if (s = t.alternate, t.child !== null || s !== null && s.child !== null) for (e = bf(e); e !== null; ) {
          if (s = e[sn]) return s;
          e = bf(e);
        }
        return t;
      }
      e = s, s = e.parentNode;
    }
    return null;
  }
  function Ii(e) {
    return e = e[sn] || e[hn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Gs(e) {
    return e[ji] || null;
  }
  var Jl = [], br = -1;
  function Mn(e) {
    return { current: e };
  }
  function je(e) {
    0 > br || (e.current = Jl[br], Jl[br] = null, br--);
  }
  function Ne(e, t) {
    br++, Jl[br] = e.current, e.current = t;
  }
  var Nn = {}, ut = Mn(Nn), St = Mn(!1), tr = Nn;
  function zr(e, t) {
    var s = e.type.contextTypes;
    if (!s) return Nn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t) return l.__reactInternalMemoizedMaskedChildContext;
    var u = {}, d;
    for (d in s) u[d] = t[d];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
  }
  function Tt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qs() {
    je(St), je(ut);
  }
  function zf(e, t, s) {
    if (ut.current !== Nn) throw Error(i(168));
    Ne(ut, t), Ne(St, s);
  }
  function Uf(e, t, s) {
    var l = e.stateNode;
    if (t = t.childContextTypes, typeof l.getChildContext != "function") return s;
    l = l.getChildContext();
    for (var u in l) if (!(u in t)) throw Error(i(108, Ve(e) || "Unknown", u));
    return Y({}, s, l);
  }
  function Ys(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn, tr = ut.current, Ne(ut, e), Ne(St, St.current), !0;
  }
  function Bf(e, t, s) {
    var l = e.stateNode;
    if (!l) throw Error(i(169));
    s ? (e = Uf(e, t, tr), l.__reactInternalMemoizedMergedChildContext = e, je(St), je(ut), Ne(ut, e)) : je(St), Ne(St, s);
  }
  var pn = null, qs = !1, ea = !1;
  function $f(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  function Vv(e) {
    qs = !0, $f(e);
  }
  function Ln() {
    if (!ea && pn !== null) {
      ea = !0;
      var e = 0, t = Oe;
      try {
        var s = pn;
        for (Oe = 1; e < s.length; e++) {
          var l = s[e];
          do
            l = l(!0);
          while (l !== null);
        }
        pn = null, qs = !1;
      } catch (u) {
        throw pn !== null && (pn = pn.slice(e + 1)), Wc(Tl, Ln), u;
      } finally {
        Oe = t, ea = !1;
      }
    }
    return null;
  }
  var Ur = [], Br = 0, Xs = null, Zs = 0, jt = [], It = 0, nr = null, mn = 1, yn = "";
  function rr(e, t) {
    Ur[Br++] = Zs, Ur[Br++] = Xs, Xs = e, Zs = t;
  }
  function Wf(e, t, s) {
    jt[It++] = mn, jt[It++] = yn, jt[It++] = nr, nr = e;
    var l = mn;
    e = yn;
    var u = 32 - Ht(l) - 1;
    l &= ~(1 << u), s += 1;
    var d = 32 - Ht(t) + u;
    if (30 < d) {
      var y = u - u % 5;
      d = (l & (1 << y) - 1).toString(32), l >>= y, u -= y, mn = 1 << 32 - Ht(t) + u | s << u | l, yn = d + e;
    } else mn = 1 << d | s << u | l, yn = e;
  }
  function ta(e) {
    e.return !== null && (rr(e, 1), Wf(e, 1, 0));
  }
  function na(e) {
    for (; e === Xs; ) Xs = Ur[--Br], Ur[Br] = null, Zs = Ur[--Br], Ur[Br] = null;
    for (; e === nr; ) nr = jt[--It], jt[It] = null, yn = jt[--It], jt[It] = null, mn = jt[--It], jt[It] = null;
  }
  var Ft = null, Ot = null, be = !1, Gt = null;
  function Hf(e, t) {
    var s = Bt(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = t, s.return = e, t = e.deletions, t === null ? (e.deletions = [s], e.flags |= 16) : t.push(s);
  }
  function Kf(e, t) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return t = t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ft = e, Ot = Rn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ft = e, Ot = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (s = nr !== null ? { id: mn, overflow: yn } : null, e.memoizedState = { dehydrated: t, treeContext: s, retryLane: 1073741824 }, s = Bt(18, null, null, 0), s.stateNode = t, s.return = e, e.child = s, Ft = e, Ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ra(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ia(e) {
    if (be) {
      var t = Ot;
      if (t) {
        var s = t;
        if (!Kf(e, t)) {
          if (ra(e)) throw Error(i(418));
          t = Rn(s.nextSibling);
          var l = Ft;
          t && Kf(e, t) ? Hf(l, s) : (e.flags = e.flags & -4097 | 2, be = !1, Ft = e);
        }
      } else {
        if (ra(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, be = !1, Ft = e;
      }
    }
  }
  function Gf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ft = e;
  }
  function Js(e) {
    if (e !== Ft) return !1;
    if (!be) return Gf(e), be = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yl(e.type, e.memoizedProps)), t && (t = Ot)) {
      if (ra(e)) throw Qf(), Error(i(418));
      for (; t; ) Hf(e, t), t = Rn(t.nextSibling);
    }
    if (Gf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (t === 0) {
                Ot = Rn(e.nextSibling);
                break e;
              }
              t--;
            } else s !== "$" && s !== "$!" && s !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ot = null;
      }
    } else Ot = Ft ? Rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Qf() {
    for (var e = Ot; e; ) e = Rn(e.nextSibling);
  }
  function $r() {
    Ot = Ft = null, be = !1;
  }
  function sa(e) {
    Gt === null ? Gt = [e] : Gt.push(e);
  }
  var Fv = H.ReactCurrentBatchConfig;
  function bi(e, t, s) {
    if (e = s.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(i(309));
          var l = s.stateNode;
        }
        if (!l) throw Error(i(147, e));
        var u = l, d = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(y) {
          var w = u.refs;
          y === null ? delete w[d] : w[d] = y;
        }, t._stringRef = d, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!s._owner) throw Error(i(290, e));
    }
    return e;
  }
  function eo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Yf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function qf(e) {
    function t(P, E) {
      if (e) {
        var V = P.deletions;
        V === null ? (P.deletions = [E], P.flags |= 16) : V.push(E);
      }
    }
    function s(P, E) {
      if (!e) return null;
      for (; E !== null; ) t(P, E), E = E.sibling;
      return null;
    }
    function l(P, E) {
      for (P = /* @__PURE__ */ new Map(); E !== null; ) E.key !== null ? P.set(E.key, E) : P.set(E.index, E), E = E.sibling;
      return P;
    }
    function u(P, E) {
      return P = Wn(P, E), P.index = 0, P.sibling = null, P;
    }
    function d(P, E, V) {
      return P.index = V, e ? (V = P.alternate, V !== null ? (V = V.index, V < E ? (P.flags |= 2, E) : V) : (P.flags |= 2, E)) : (P.flags |= 1048576, E);
    }
    function y(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function w(P, E, V, W) {
      return E === null || E.tag !== 6 ? (E = qa(V, P.mode, W), E.return = P, E) : (E = u(E, V), E.return = P, E);
    }
    function T(P, E, V, W) {
      var oe = V.type;
      return oe === le ? z(P, E, V.props.children, W, V.key) : E !== null && (E.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Pe && Yf(oe) === E.type) ? (W = u(E, V.props), W.ref = bi(P, E, V), W.return = P, W) : (W = Co(V.type, V.key, V.props, null, P.mode, W), W.ref = bi(P, E, V), W.return = P, W);
    }
    function O(P, E, V, W) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== V.containerInfo || E.stateNode.implementation !== V.implementation ? (E = Xa(V, P.mode, W), E.return = P, E) : (E = u(E, V.children || []), E.return = P, E);
    }
    function z(P, E, V, W, oe) {
      return E === null || E.tag !== 7 ? (E = fr(V, P.mode, W, oe), E.return = P, E) : (E = u(E, V), E.return = P, E);
    }
    function B(P, E, V) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return E = qa("" + E, P.mode, V), E.return = P, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case L:
            return V = Co(E.type, E.key, E.props, null, P.mode, V), V.ref = bi(P, null, E), V.return = P, V;
          case q:
            return E = Xa(E, P.mode, V), E.return = P, E;
          case Pe:
            var W = E._init;
            return B(P, W(E._payload), V);
        }
        if (S(E) || Z(E)) return E = fr(E, P.mode, V, null), E.return = P, E;
        eo(P, E);
      }
      return null;
    }
    function b(P, E, V, W) {
      var oe = E !== null ? E.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number") return oe !== null ? null : w(P, E, "" + V, W);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case L:
            return V.key === oe ? T(P, E, V, W) : null;
          case q:
            return V.key === oe ? O(P, E, V, W) : null;
          case Pe:
            return oe = V._init, b(
              P,
              E,
              oe(V._payload),
              W
            );
        }
        if (S(V) || Z(V)) return oe !== null ? null : z(P, E, V, W, null);
        eo(P, V);
      }
      return null;
    }
    function ee(P, E, V, W, oe) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return P = P.get(V) || null, w(E, P, "" + W, oe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case L:
            return P = P.get(W.key === null ? V : W.key) || null, T(E, P, W, oe);
          case q:
            return P = P.get(W.key === null ? V : W.key) || null, O(E, P, W, oe);
          case Pe:
            var ce = W._init;
            return ee(P, E, V, ce(W._payload), oe);
        }
        if (S(W) || Z(W)) return P = P.get(V) || null, z(E, P, W, oe, null);
        eo(E, W);
      }
      return null;
    }
    function ie(P, E, V, W) {
      for (var oe = null, ce = null, fe = E, me = E = 0, rt = null; fe !== null && me < V.length; me++) {
        fe.index > me ? (rt = fe, fe = null) : rt = fe.sibling;
        var Ae = b(P, fe, V[me], W);
        if (Ae === null) {
          fe === null && (fe = rt);
          break;
        }
        e && fe && Ae.alternate === null && t(P, fe), E = d(Ae, E, me), ce === null ? oe = Ae : ce.sibling = Ae, ce = Ae, fe = rt;
      }
      if (me === V.length) return s(P, fe), be && rr(P, me), oe;
      if (fe === null) {
        for (; me < V.length; me++) fe = B(P, V[me], W), fe !== null && (E = d(fe, E, me), ce === null ? oe = fe : ce.sibling = fe, ce = fe);
        return be && rr(P, me), oe;
      }
      for (fe = l(P, fe); me < V.length; me++) rt = ee(fe, P, me, V[me], W), rt !== null && (e && rt.alternate !== null && fe.delete(rt.key === null ? me : rt.key), E = d(rt, E, me), ce === null ? oe = rt : ce.sibling = rt, ce = rt);
      return e && fe.forEach(function(Hn) {
        return t(P, Hn);
      }), be && rr(P, me), oe;
    }
    function se(P, E, V, W) {
      var oe = Z(V);
      if (typeof oe != "function") throw Error(i(150));
      if (V = oe.call(V), V == null) throw Error(i(151));
      for (var ce = oe = null, fe = E, me = E = 0, rt = null, Ae = V.next(); fe !== null && !Ae.done; me++, Ae = V.next()) {
        fe.index > me ? (rt = fe, fe = null) : rt = fe.sibling;
        var Hn = b(P, fe, Ae.value, W);
        if (Hn === null) {
          fe === null && (fe = rt);
          break;
        }
        e && fe && Hn.alternate === null && t(P, fe), E = d(Hn, E, me), ce === null ? oe = Hn : ce.sibling = Hn, ce = Hn, fe = rt;
      }
      if (Ae.done) return s(
        P,
        fe
      ), be && rr(P, me), oe;
      if (fe === null) {
        for (; !Ae.done; me++, Ae = V.next()) Ae = B(P, Ae.value, W), Ae !== null && (E = d(Ae, E, me), ce === null ? oe = Ae : ce.sibling = Ae, ce = Ae);
        return be && rr(P, me), oe;
      }
      for (fe = l(P, fe); !Ae.done; me++, Ae = V.next()) Ae = ee(fe, P, me, Ae.value, W), Ae !== null && (e && Ae.alternate !== null && fe.delete(Ae.key === null ? me : Ae.key), E = d(Ae, E, me), ce === null ? oe = Ae : ce.sibling = Ae, ce = Ae);
      return e && fe.forEach(function(c0) {
        return t(P, c0);
      }), be && rr(P, me), oe;
    }
    function Ge(P, E, V, W) {
      if (typeof V == "object" && V !== null && V.type === le && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case L:
            e: {
              for (var oe = V.key, ce = E; ce !== null; ) {
                if (ce.key === oe) {
                  if (oe = V.type, oe === le) {
                    if (ce.tag === 7) {
                      s(P, ce.sibling), E = u(ce, V.props.children), E.return = P, P = E;
                      break e;
                    }
                  } else if (ce.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Pe && Yf(oe) === ce.type) {
                    s(P, ce.sibling), E = u(ce, V.props), E.ref = bi(P, ce, V), E.return = P, P = E;
                    break e;
                  }
                  s(P, ce);
                  break;
                } else t(P, ce);
                ce = ce.sibling;
              }
              V.type === le ? (E = fr(V.props.children, P.mode, W, V.key), E.return = P, P = E) : (W = Co(V.type, V.key, V.props, null, P.mode, W), W.ref = bi(P, E, V), W.return = P, P = W);
            }
            return y(P);
          case q:
            e: {
              for (ce = V.key; E !== null; ) {
                if (E.key === ce) if (E.tag === 4 && E.stateNode.containerInfo === V.containerInfo && E.stateNode.implementation === V.implementation) {
                  s(P, E.sibling), E = u(E, V.children || []), E.return = P, P = E;
                  break e;
                } else {
                  s(P, E);
                  break;
                }
                else t(P, E);
                E = E.sibling;
              }
              E = Xa(V, P.mode, W), E.return = P, P = E;
            }
            return y(P);
          case Pe:
            return ce = V._init, Ge(P, E, ce(V._payload), W);
        }
        if (S(V)) return ie(P, E, V, W);
        if (Z(V)) return se(P, E, V, W);
        eo(P, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, E !== null && E.tag === 6 ? (s(P, E.sibling), E = u(E, V), E.return = P, P = E) : (s(P, E), E = qa(V, P.mode, W), E.return = P, P = E), y(P)) : s(P, E);
    }
    return Ge;
  }
  var Wr = qf(!0), Xf = qf(!1), to = Mn(null), no = null, Hr = null, oa = null;
  function la() {
    oa = Hr = no = null;
  }
  function aa(e) {
    var t = to.current;
    je(to), e._currentValue = t;
  }
  function ua(e, t, s) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === s) break;
      e = e.return;
    }
  }
  function Kr(e, t) {
    no = e, oa = Hr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (kt = !0), e.firstContext = null);
  }
  function bt(e) {
    var t = e._currentValue;
    if (oa !== e) if (e = { context: e, memoizedValue: t, next: null }, Hr === null) {
      if (no === null) throw Error(i(308));
      Hr = e, no.dependencies = { lanes: 0, firstContext: e };
    } else Hr = Hr.next = e;
    return t;
  }
  var ir = null;
  function ca(e) {
    ir === null ? ir = [e] : ir.push(e);
  }
  function Zf(e, t, s, l) {
    var u = t.interleaved;
    return u === null ? (s.next = s, ca(t)) : (s.next = u.next, u.next = s), t.interleaved = s, gn(e, l);
  }
  function gn(e, t) {
    e.lanes |= t;
    var s = e.alternate;
    for (s !== null && (s.lanes |= t), s = e, e = e.return; e !== null; ) e.childLanes |= t, s = e.alternate, s !== null && (s.childLanes |= t), s = e, e = e.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var jn = !1;
  function fa(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Jf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function vn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function In(e, t, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ce & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, gn(e, s);
    }
    return u = l.interleaved, u === null ? (t.next = t, ca(l)) : (t.next = u.next, u.next = t), l.interleaved = t, gn(e, s);
  }
  function ro(e, t, s) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (s & 4194240) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, s |= l, t.lanes = s, Cl(e, s);
    }
  }
  function ed(e, t) {
    var s = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, s === l)) {
      var u = null, d = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var y = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          d === null ? u = d = y : d = d.next = y, s = s.next;
        } while (s !== null);
        d === null ? u = d = t : d = d.next = t;
      } else u = d = t;
      s = { baseState: l.baseState, firstBaseUpdate: u, lastBaseUpdate: d, shared: l.shared, effects: l.effects }, e.updateQueue = s;
      return;
    }
    e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = t : e.next = t, s.lastBaseUpdate = t;
  }
  function io(e, t, s, l) {
    var u = e.updateQueue;
    jn = !1;
    var d = u.firstBaseUpdate, y = u.lastBaseUpdate, w = u.shared.pending;
    if (w !== null) {
      u.shared.pending = null;
      var T = w, O = T.next;
      T.next = null, y === null ? d = O : y.next = O, y = T;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, w = z.lastBaseUpdate, w !== y && (w === null ? z.firstBaseUpdate = O : w.next = O, z.lastBaseUpdate = T));
    }
    if (d !== null) {
      var B = u.baseState;
      y = 0, z = O = T = null, w = d;
      do {
        var b = w.lane, ee = w.eventTime;
        if ((l & b) === b) {
          z !== null && (z = z.next = {
            eventTime: ee,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var ie = e, se = w;
            switch (b = t, ee = s, se.tag) {
              case 1:
                if (ie = se.payload, typeof ie == "function") {
                  B = ie.call(ee, B, b);
                  break e;
                }
                B = ie;
                break e;
              case 3:
                ie.flags = ie.flags & -65537 | 128;
              case 0:
                if (ie = se.payload, b = typeof ie == "function" ? ie.call(ee, B, b) : ie, b == null) break e;
                B = Y({}, B, b);
                break e;
              case 2:
                jn = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (e.flags |= 64, b = u.effects, b === null ? u.effects = [w] : b.push(w));
        } else ee = { eventTime: ee, lane: b, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, z === null ? (O = z = ee, T = B) : z = z.next = ee, y |= b;
        if (w = w.next, w === null) {
          if (w = u.shared.pending, w === null) break;
          b = w, w = b.next, b.next = null, u.lastBaseUpdate = b, u.shared.pending = null;
        }
      } while (!0);
      if (z === null && (T = B), u.baseState = T, u.firstBaseUpdate = O, u.lastBaseUpdate = z, t = u.shared.interleaved, t !== null) {
        u = t;
        do
          y |= u.lane, u = u.next;
        while (u !== t);
      } else d === null && (u.shared.lanes = 0);
      lr |= y, e.lanes = y, e.memoizedState = B;
    }
  }
  function td(e, t, s) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var l = e[t], u = l.callback;
      if (u !== null) {
        if (l.callback = null, l = s, typeof u != "function") throw Error(i(191, u));
        u.call(l);
      }
    }
  }
  var zi = {}, on = Mn(zi), Ui = Mn(zi), Bi = Mn(zi);
  function sr(e) {
    if (e === zi) throw Error(i(174));
    return e;
  }
  function da(e, t) {
    switch (Ne(Bi, t), Ne(Ui, e), Ne(on, zi), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ee(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ee(t, e);
    }
    je(on), Ne(on, t);
  }
  function Gr() {
    je(on), je(Ui), je(Bi);
  }
  function nd(e) {
    sr(Bi.current);
    var t = sr(on.current), s = Ee(t, e.type);
    t !== s && (Ne(Ui, e), Ne(on, s));
  }
  function ha(e) {
    Ui.current === e && (je(on), je(Ui));
  }
  var ze = Mn(0);
  function so(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var s = t.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var pa = [];
  function ma() {
    for (var e = 0; e < pa.length; e++) pa[e]._workInProgressVersionPrimary = null;
    pa.length = 0;
  }
  var oo = H.ReactCurrentDispatcher, ya = H.ReactCurrentBatchConfig, or = 0, Ue = null, Je = null, tt = null, lo = !1, $i = !1, Wi = 0, Ov = 0;
  function ct() {
    throw Error(i(321));
  }
  function ga(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++) if (!Kt(e[s], t[s])) return !1;
    return !0;
  }
  function va(e, t, s, l, u, d) {
    if (or = d, Ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, oo.current = e === null || e.memoizedState === null ? Lv : jv, e = s(l, u), $i) {
      d = 0;
      do {
        if ($i = !1, Wi = 0, 25 <= d) throw Error(i(301));
        d += 1, tt = Je = null, t.updateQueue = null, oo.current = Iv, e = s(l, u);
      } while ($i);
    }
    if (oo.current = co, t = Je !== null && Je.next !== null, or = 0, tt = Je = Ue = null, lo = !1, t) throw Error(i(300));
    return e;
  }
  function xa() {
    var e = Wi !== 0;
    return Wi = 0, e;
  }
  function ln() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return tt === null ? Ue.memoizedState = tt = e : tt = tt.next = e, tt;
  }
  function zt() {
    if (Je === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = tt === null ? Ue.memoizedState : tt.next;
    if (t !== null) tt = t, Je = e;
    else {
      if (e === null) throw Error(i(310));
      Je = e, e = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, tt === null ? Ue.memoizedState = tt = e : tt = tt.next = e;
    }
    return tt;
  }
  function Hi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function wa(e) {
    var t = zt(), s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var l = Je, u = l.baseQueue, d = s.pending;
    if (d !== null) {
      if (u !== null) {
        var y = u.next;
        u.next = d.next, d.next = y;
      }
      l.baseQueue = u = d, s.pending = null;
    }
    if (u !== null) {
      d = u.next, l = l.baseState;
      var w = y = null, T = null, O = d;
      do {
        var z = O.lane;
        if ((or & z) === z) T !== null && (T = T.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), l = O.hasEagerState ? O.eagerState : e(l, O.action);
        else {
          var B = {
            lane: z,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          T === null ? (w = T = B, y = l) : T = T.next = B, Ue.lanes |= z, lr |= z;
        }
        O = O.next;
      } while (O !== null && O !== d);
      T === null ? y = l : T.next = w, Kt(l, t.memoizedState) || (kt = !0), t.memoizedState = l, t.baseState = y, t.baseQueue = T, s.lastRenderedState = l;
    }
    if (e = s.interleaved, e !== null) {
      u = e;
      do
        d = u.lane, Ue.lanes |= d, lr |= d, u = u.next;
      while (u !== e);
    } else u === null && (s.lanes = 0);
    return [t.memoizedState, s.dispatch];
  }
  function Sa(e) {
    var t = zt(), s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var l = s.dispatch, u = s.pending, d = t.memoizedState;
    if (u !== null) {
      s.pending = null;
      var y = u = u.next;
      do
        d = e(d, y.action), y = y.next;
      while (y !== u);
      Kt(d, t.memoizedState) || (kt = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), s.lastRenderedState = d;
    }
    return [d, l];
  }
  function rd() {
  }
  function id(e, t) {
    var s = Ue, l = zt(), u = t(), d = !Kt(l.memoizedState, u);
    if (d && (l.memoizedState = u, kt = !0), l = l.queue, Ta(ld.bind(null, s, l, e), [e]), l.getSnapshot !== t || d || tt !== null && tt.memoizedState.tag & 1) {
      if (s.flags |= 2048, Ki(9, od.bind(null, s, l, u, t), void 0, null), nt === null) throw Error(i(349));
      (or & 30) !== 0 || sd(s, t, u);
    }
    return u;
  }
  function sd(e, t, s) {
    e.flags |= 16384, e = { getSnapshot: t, value: s }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.stores = [e]) : (s = t.stores, s === null ? t.stores = [e] : s.push(e));
  }
  function od(e, t, s, l) {
    t.value = s, t.getSnapshot = l, ad(t) && ud(e);
  }
  function ld(e, t, s) {
    return s(function() {
      ad(t) && ud(e);
    });
  }
  function ad(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !Kt(e, s);
    } catch {
      return !0;
    }
  }
  function ud(e) {
    var t = gn(e, 1);
    t !== null && Xt(t, e, 1, -1);
  }
  function cd(e) {
    var t = ln();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Nv.bind(null, Ue, e), [t.memoizedState, e];
  }
  function Ki(e, t, s, l) {
    return e = { tag: e, create: t, destroy: s, deps: l, next: null }, t = Ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ue.updateQueue = t, t.lastEffect = e.next = e) : (s = t.lastEffect, s === null ? t.lastEffect = e.next = e : (l = s.next, s.next = e, e.next = l, t.lastEffect = e)), e;
  }
  function fd() {
    return zt().memoizedState;
  }
  function ao(e, t, s, l) {
    var u = ln();
    Ue.flags |= e, u.memoizedState = Ki(1 | t, s, void 0, l === void 0 ? null : l);
  }
  function uo(e, t, s, l) {
    var u = zt();
    l = l === void 0 ? null : l;
    var d = void 0;
    if (Je !== null) {
      var y = Je.memoizedState;
      if (d = y.destroy, l !== null && ga(l, y.deps)) {
        u.memoizedState = Ki(t, s, d, l);
        return;
      }
    }
    Ue.flags |= e, u.memoizedState = Ki(1 | t, s, d, l);
  }
  function dd(e, t) {
    return ao(8390656, 8, e, t);
  }
  function Ta(e, t) {
    return uo(2048, 8, e, t);
  }
  function hd(e, t) {
    return uo(4, 2, e, t);
  }
  function pd(e, t) {
    return uo(4, 4, e, t);
  }
  function md(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function yd(e, t, s) {
    return s = s != null ? s.concat([e]) : null, uo(4, 4, md.bind(null, t, e), s);
  }
  function ka() {
  }
  function gd(e, t) {
    var s = zt();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && ga(t, l[1]) ? l[0] : (s.memoizedState = [e, t], e);
  }
  function vd(e, t) {
    var s = zt();
    t = t === void 0 ? null : t;
    var l = s.memoizedState;
    return l !== null && t !== null && ga(t, l[1]) ? l[0] : (e = e(), s.memoizedState = [e, t], e);
  }
  function xd(e, t, s) {
    return (or & 21) === 0 ? (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = s) : (Kt(s, t) || (s = Qc(), Ue.lanes |= s, lr |= s, e.baseState = !0), t);
  }
  function Rv(e, t) {
    var s = Oe;
    Oe = s !== 0 && 4 > s ? s : 4, e(!0);
    var l = ya.transition;
    ya.transition = {};
    try {
      e(!1), t();
    } finally {
      Oe = s, ya.transition = l;
    }
  }
  function wd() {
    return zt().memoizedState;
  }
  function Mv(e, t, s) {
    var l = Bn(e);
    if (s = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null }, Sd(e)) Td(t, s);
    else if (s = Zf(e, t, s, l), s !== null) {
      var u = gt();
      Xt(s, e, l, u), kd(s, t, l);
    }
  }
  function Nv(e, t, s) {
    var l = Bn(e), u = { lane: l, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Sd(e)) Td(t, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null)) try {
        var y = t.lastRenderedState, w = d(y, s);
        if (u.hasEagerState = !0, u.eagerState = w, Kt(w, y)) {
          var T = t.interleaved;
          T === null ? (u.next = u, ca(t)) : (u.next = T.next, T.next = u), t.interleaved = u;
          return;
        }
      } catch {
      }
      s = Zf(e, t, u, l), s !== null && (u = gt(), Xt(s, e, l, u), kd(s, t, l));
    }
  }
  function Sd(e) {
    var t = e.alternate;
    return e === Ue || t !== null && t === Ue;
  }
  function Td(e, t) {
    $i = lo = !0;
    var s = e.pending;
    s === null ? t.next = t : (t.next = s.next, s.next = t), e.pending = t;
  }
  function kd(e, t, s) {
    if ((s & 4194240) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, s |= l, t.lanes = s, Cl(e, s);
    }
  }
  var co = { readContext: bt, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useInsertionEffect: ct, useLayoutEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useMutableSource: ct, useSyncExternalStore: ct, useId: ct, unstable_isNewReconciler: !1 }, Lv = { readContext: bt, useCallback: function(e, t) {
    return ln().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: bt, useEffect: dd, useImperativeHandle: function(e, t, s) {
    return s = s != null ? s.concat([e]) : null, ao(
      4194308,
      4,
      md.bind(null, t, e),
      s
    );
  }, useLayoutEffect: function(e, t) {
    return ao(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ao(4, 2, e, t);
  }, useMemo: function(e, t) {
    var s = ln();
    return t = t === void 0 ? null : t, e = e(), s.memoizedState = [e, t], e;
  }, useReducer: function(e, t, s) {
    var l = ln();
    return t = s !== void 0 ? s(t) : t, l.memoizedState = l.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, l.queue = e, e = e.dispatch = Mv.bind(null, Ue, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var t = ln();
    return e = { current: e }, t.memoizedState = e;
  }, useState: cd, useDebugValue: ka, useDeferredValue: function(e) {
    return ln().memoizedState = e;
  }, useTransition: function() {
    var e = cd(!1), t = e[0];
    return e = Rv.bind(null, e[1]), ln().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, s) {
    var l = Ue, u = ln();
    if (be) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else {
      if (s = t(), nt === null) throw Error(i(349));
      (or & 30) !== 0 || sd(l, t, s);
    }
    u.memoizedState = s;
    var d = { value: s, getSnapshot: t };
    return u.queue = d, dd(ld.bind(
      null,
      l,
      d,
      e
    ), [e]), l.flags |= 2048, Ki(9, od.bind(null, l, d, s, t), void 0, null), s;
  }, useId: function() {
    var e = ln(), t = nt.identifierPrefix;
    if (be) {
      var s = yn, l = mn;
      s = (l & ~(1 << 32 - Ht(l) - 1)).toString(32) + s, t = ":" + t + "R" + s, s = Wi++, 0 < s && (t += "H" + s.toString(32)), t += ":";
    } else s = Ov++, t = ":" + t + "r" + s.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, jv = {
    readContext: bt,
    useCallback: gd,
    useContext: bt,
    useEffect: Ta,
    useImperativeHandle: yd,
    useInsertionEffect: hd,
    useLayoutEffect: pd,
    useMemo: vd,
    useReducer: wa,
    useRef: fd,
    useState: function() {
      return wa(Hi);
    },
    useDebugValue: ka,
    useDeferredValue: function(e) {
      var t = zt();
      return xd(t, Je.memoizedState, e);
    },
    useTransition: function() {
      var e = wa(Hi)[0], t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: rd,
    useSyncExternalStore: id,
    useId: wd,
    unstable_isNewReconciler: !1
  }, Iv = { readContext: bt, useCallback: gd, useContext: bt, useEffect: Ta, useImperativeHandle: yd, useInsertionEffect: hd, useLayoutEffect: pd, useMemo: vd, useReducer: Sa, useRef: fd, useState: function() {
    return Sa(Hi);
  }, useDebugValue: ka, useDeferredValue: function(e) {
    var t = zt();
    return Je === null ? t.memoizedState = e : xd(t, Je.memoizedState, e);
  }, useTransition: function() {
    var e = Sa(Hi)[0], t = zt().memoizedState;
    return [e, t];
  }, useMutableSource: rd, useSyncExternalStore: id, useId: wd, unstable_isNewReconciler: !1 };
  function Qt(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var s in e) t[s] === void 0 && (t[s] = e[s]);
      return t;
    }
    return t;
  }
  function Ea(e, t, s, l) {
    t = e.memoizedState, s = s(l, t), s = s == null ? t : Y({}, t, s), e.memoizedState = s, e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var fo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Jn(e) === e : !1;
  }, enqueueSetState: function(e, t, s) {
    e = e._reactInternals;
    var l = gt(), u = Bn(e), d = vn(l, u);
    d.payload = t, s != null && (d.callback = s), t = In(e, d, u), t !== null && (Xt(t, e, u, l), ro(t, e, u));
  }, enqueueReplaceState: function(e, t, s) {
    e = e._reactInternals;
    var l = gt(), u = Bn(e), d = vn(l, u);
    d.tag = 1, d.payload = t, s != null && (d.callback = s), t = In(e, d, u), t !== null && (Xt(t, e, u, l), ro(t, e, u));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var s = gt(), l = Bn(e), u = vn(s, l);
    u.tag = 2, t != null && (u.callback = t), t = In(e, u, l), t !== null && (Xt(t, e, l, s), ro(t, e, l));
  } };
  function Ed(e, t, s, l, u, d, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, y) : t.prototype && t.prototype.isPureReactComponent ? !Oi(s, l) || !Oi(u, d) : !0;
  }
  function Cd(e, t, s) {
    var l = !1, u = Nn, d = t.contextType;
    return typeof d == "object" && d !== null ? d = bt(d) : (u = Tt(t) ? tr : ut.current, l = t.contextTypes, d = (l = l != null) ? zr(e, u) : Nn), t = new t(s, d), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fo, e.stateNode = t, t._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = d), t;
  }
  function Pd(e, t, s, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(s, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(s, l), t.state !== e && fo.enqueueReplaceState(t, t.state, null);
  }
  function Ca(e, t, s, l) {
    var u = e.stateNode;
    u.props = s, u.state = e.memoizedState, u.refs = {}, fa(e);
    var d = t.contextType;
    typeof d == "object" && d !== null ? u.context = bt(d) : (d = Tt(t) ? tr : ut.current, u.context = zr(e, d)), u.state = e.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (Ea(e, t, d, s), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && fo.enqueueReplaceState(u, u.state, null), io(e, s, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qr(e, t) {
    try {
      var s = "", l = t;
      do
        s += Te(l), l = l.return;
      while (l);
      var u = s;
    } catch (d) {
      u = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Pa(e, t, s) {
    return { value: e, source: null, stack: s ?? null, digest: t ?? null };
  }
  function _a(e, t) {
    try {
      console.error(t.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var bv = typeof WeakMap == "function" ? WeakMap : Map;
  function _d(e, t, s) {
    s = vn(-1, s), s.tag = 3, s.payload = { element: null };
    var l = t.value;
    return s.callback = function() {
      xo || (xo = !0, Ba = l), _a(e, t);
    }, s;
  }
  function Ad(e, t, s) {
    s = vn(-1, s), s.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = t.value;
      s.payload = function() {
        return l(u);
      }, s.callback = function() {
        _a(e, t);
      };
    }
    var d = e.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (s.callback = function() {
      _a(e, t), typeof l != "function" && (zn === null ? zn = /* @__PURE__ */ new Set([this]) : zn.add(this));
      var y = t.stack;
      this.componentDidCatch(t.value, { componentStack: y !== null ? y : "" });
    }), s;
  }
  function Dd(e, t, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new bv();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(s) || (u.add(s), e = Jv.bind(null, e, t, s), t.then(e, e));
  }
  function Vd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fd(e, t, s, l, u) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (t = vn(-1, 1), t.tag = 2, In(s, t, 1))), s.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
  }
  var zv = H.ReactCurrentOwner, kt = !1;
  function yt(e, t, s, l) {
    t.child = e === null ? Xf(t, null, s, l) : Wr(t, e.child, s, l);
  }
  function Od(e, t, s, l, u) {
    s = s.render;
    var d = t.ref;
    return Kr(t, u), l = va(e, t, s, l, d, u), s = xa(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, xn(e, t, u)) : (be && s && ta(t), t.flags |= 1, yt(e, t, l, u), t.child);
  }
  function Rd(e, t, s, l, u) {
    if (e === null) {
      var d = s.type;
      return typeof d == "function" && !Ya(d) && d.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (t.tag = 15, t.type = d, Md(e, t, d, l, u)) : (e = Co(s.type, null, l, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, (e.lanes & u) === 0) {
      var y = d.memoizedProps;
      if (s = s.compare, s = s !== null ? s : Oi, s(y, l) && e.ref === t.ref) return xn(e, t, u);
    }
    return t.flags |= 1, e = Wn(d, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Md(e, t, s, l, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Oi(d, l) && e.ref === t.ref) if (kt = !1, t.pendingProps = l = d, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (kt = !0);
      else return t.lanes = e.lanes, xn(e, t, u);
    }
    return Aa(e, t, s, l, u);
  }
  function Nd(e, t, s) {
    var l = t.pendingProps, u = l.children, d = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(qr, Rt), Rt |= s;
    else {
      if ((s & 1073741824) === 0) return e = d !== null ? d.baseLanes | s : s, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(qr, Rt), Rt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = d !== null ? d.baseLanes : s, Ne(qr, Rt), Rt |= l;
    }
    else d !== null ? (l = d.baseLanes | s, t.memoizedState = null) : l = s, Ne(qr, Rt), Rt |= l;
    return yt(e, t, u, s), t.child;
  }
  function Ld(e, t) {
    var s = t.ref;
    (e === null && s !== null || e !== null && e.ref !== s) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Aa(e, t, s, l, u) {
    var d = Tt(s) ? tr : ut.current;
    return d = zr(t, d), Kr(t, u), s = va(e, t, s, l, d, u), l = xa(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, xn(e, t, u)) : (be && l && ta(t), t.flags |= 1, yt(e, t, s, u), t.child);
  }
  function jd(e, t, s, l, u) {
    if (Tt(s)) {
      var d = !0;
      Ys(t);
    } else d = !1;
    if (Kr(t, u), t.stateNode === null) po(e, t), Cd(t, s, l), Ca(t, s, l, u), l = !0;
    else if (e === null) {
      var y = t.stateNode, w = t.memoizedProps;
      y.props = w;
      var T = y.context, O = s.contextType;
      typeof O == "object" && O !== null ? O = bt(O) : (O = Tt(s) ? tr : ut.current, O = zr(t, O));
      var z = s.getDerivedStateFromProps, B = typeof z == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      B || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (w !== l || T !== O) && Pd(t, y, l, O), jn = !1;
      var b = t.memoizedState;
      y.state = b, io(t, l, y, u), T = t.memoizedState, w !== l || b !== T || St.current || jn ? (typeof z == "function" && (Ea(t, s, z, l), T = t.memoizedState), (w = jn || Ed(t, s, w, l, b, T, O)) ? (B || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = T), y.props = l, y.state = T, y.context = O, l = w) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      y = t.stateNode, Jf(e, t), w = t.memoizedProps, O = t.type === t.elementType ? w : Qt(t.type, w), y.props = O, B = t.pendingProps, b = y.context, T = s.contextType, typeof T == "object" && T !== null ? T = bt(T) : (T = Tt(s) ? tr : ut.current, T = zr(t, T));
      var ee = s.getDerivedStateFromProps;
      (z = typeof ee == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (w !== B || b !== T) && Pd(t, y, l, T), jn = !1, b = t.memoizedState, y.state = b, io(t, l, y, u);
      var ie = t.memoizedState;
      w !== B || b !== ie || St.current || jn ? (typeof ee == "function" && (Ea(t, s, ee, l), ie = t.memoizedState), (O = jn || Ed(t, s, O, l, b, ie, T) || !1) ? (z || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, ie, T), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(l, ie, T)), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = ie), y.props = l, y.state = ie, y.context = T, l = O) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return Da(e, t, s, l, d, u);
  }
  function Da(e, t, s, l, u, d) {
    Ld(e, t);
    var y = (t.flags & 128) !== 0;
    if (!l && !y) return u && Bf(t, s, !1), xn(e, t, d);
    l = t.stateNode, zv.current = t;
    var w = y && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return t.flags |= 1, e !== null && y ? (t.child = Wr(t, e.child, null, d), t.child = Wr(t, null, w, d)) : yt(e, t, w, d), t.memoizedState = l.state, u && Bf(t, s, !0), t.child;
  }
  function Id(e) {
    var t = e.stateNode;
    t.pendingContext ? zf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zf(e, t.context, !1), da(e, t.containerInfo);
  }
  function bd(e, t, s, l, u) {
    return $r(), sa(u), t.flags |= 256, yt(e, t, s, l), t.child;
  }
  var Va = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function zd(e, t, s) {
    var l = t.pendingProps, u = ze.current, d = !1, y = (t.flags & 128) !== 0, w;
    if ((w = y) || (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), w ? (d = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), Ne(ze, u & 1), e === null)
      return ia(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (y = l.children, e = l.fallback, d ? (l = t.mode, d = t.child, y = { mode: "hidden", children: y }, (l & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = y) : d = Po(y, l, 0, null), e = fr(e, l, s, null), d.return = t, e.return = t, d.sibling = e, t.child = d, t.child.memoizedState = Fa(s), t.memoizedState = Va, e) : Oa(t, y));
    if (u = e.memoizedState, u !== null && (w = u.dehydrated, w !== null)) return Uv(e, t, y, l, w, u, s);
    if (d) {
      d = l.fallback, y = t.mode, u = e.child, w = u.sibling;
      var T = { mode: "hidden", children: l.children };
      return (y & 1) === 0 && t.child !== u ? (l = t.child, l.childLanes = 0, l.pendingProps = T, t.deletions = null) : (l = Wn(u, T), l.subtreeFlags = u.subtreeFlags & 14680064), w !== null ? d = Wn(w, d) : (d = fr(d, y, s, null), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, l = d, d = t.child, y = e.child.memoizedState, y = y === null ? Fa(s) : { baseLanes: y.baseLanes | s, cachePool: null, transitions: y.transitions }, d.memoizedState = y, d.childLanes = e.childLanes & ~s, t.memoizedState = Va, l;
    }
    return d = e.child, e = d.sibling, l = Wn(d, { mode: "visible", children: l.children }), (t.mode & 1) === 0 && (l.lanes = s), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l;
  }
  function Oa(e, t) {
    return t = Po({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ho(e, t, s, l) {
    return l !== null && sa(l), Wr(t, e.child, null, s), e = Oa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Uv(e, t, s, l, u, d, y) {
    if (s)
      return t.flags & 256 ? (t.flags &= -257, l = Pa(Error(i(422))), ho(e, t, y, l)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (d = l.fallback, u = t.mode, l = Po({ mode: "visible", children: l.children }, u, 0, null), d = fr(d, u, y, null), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, (t.mode & 1) !== 0 && Wr(t, e.child, null, y), t.child.memoizedState = Fa(y), t.memoizedState = Va, d);
    if ((t.mode & 1) === 0) return ho(e, t, y, null);
    if (u.data === "$!") {
      if (l = u.nextSibling && u.nextSibling.dataset, l) var w = l.dgst;
      return l = w, d = Error(i(419)), l = Pa(d, l, void 0), ho(e, t, y, l);
    }
    if (w = (y & e.childLanes) !== 0, kt || w) {
      if (l = nt, l !== null) {
        switch (y & -y) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
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
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        u = (u & (l.suspendedLanes | y)) !== 0 ? 0 : u, u !== 0 && u !== d.retryLane && (d.retryLane = u, gn(e, u), Xt(l, e, u, -1));
      }
      return Qa(), l = Pa(Error(i(421))), ho(e, t, y, l);
    }
    return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = e0.bind(null, e), u._reactRetry = t, null) : (e = d.treeContext, Ot = Rn(u.nextSibling), Ft = t, be = !0, Gt = null, e !== null && (jt[It++] = mn, jt[It++] = yn, jt[It++] = nr, mn = e.id, yn = e.overflow, nr = t), t = Oa(t, l.children), t.flags |= 4096, t);
  }
  function Ud(e, t, s) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ua(e.return, t, s);
  }
  function Ra(e, t, s, l, u) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: s, tailMode: u } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = s, d.tailMode = u);
  }
  function Bd(e, t, s) {
    var l = t.pendingProps, u = l.revealOrder, d = l.tail;
    if (yt(e, t, l.children, s), l = ze.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ud(e, s, t);
        else if (e.tag === 19) Ud(e, s, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      l &= 1;
    }
    if (Ne(ze, l), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (u) {
      case "forwards":
        for (s = t.child, u = null; s !== null; ) e = s.alternate, e !== null && so(e) === null && (u = s), s = s.sibling;
        s = u, s === null ? (u = t.child, t.child = null) : (u = s.sibling, s.sibling = null), Ra(t, !1, u, s, d);
        break;
      case "backwards":
        for (s = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && so(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = s, s = u, u = e;
        }
        Ra(t, !0, s, null, d);
        break;
      case "together":
        Ra(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function po(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function xn(e, t, s) {
    if (e !== null && (t.dependencies = e.dependencies), lr |= t.lanes, (s & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, s = Wn(e, e.pendingProps), t.child = s, s.return = t; e.sibling !== null; ) e = e.sibling, s = s.sibling = Wn(e, e.pendingProps), s.return = t;
      s.sibling = null;
    }
    return t.child;
  }
  function Bv(e, t, s) {
    switch (t.tag) {
      case 3:
        Id(t), $r();
        break;
      case 5:
        nd(t);
        break;
      case 1:
        Tt(t.type) && Ys(t);
        break;
      case 4:
        da(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context, u = t.memoizedProps.value;
        Ne(to, l._currentValue), l._currentValue = u;
        break;
      case 13:
        if (l = t.memoizedState, l !== null)
          return l.dehydrated !== null ? (Ne(ze, ze.current & 1), t.flags |= 128, null) : (s & t.child.childLanes) !== 0 ? zd(e, t, s) : (Ne(ze, ze.current & 1), e = xn(e, t, s), e !== null ? e.sibling : null);
        Ne(ze, ze.current & 1);
        break;
      case 19:
        if (l = (s & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (l) return Bd(e, t, s);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Ne(ze, ze.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Nd(e, t, s);
    }
    return xn(e, t, s);
  }
  var $d, Ma, Wd, Hd;
  $d = function(e, t) {
    for (var s = t.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === t) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === t) return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, Ma = function() {
  }, Wd = function(e, t, s, l) {
    var u = e.memoizedProps;
    if (u !== l) {
      e = t.stateNode, sr(on.current);
      var d = null;
      switch (s) {
        case "input":
          u = kr(e, u), l = kr(e, l), d = [];
          break;
        case "select":
          u = Y({}, u, { value: void 0 }), l = Y({}, l, { value: void 0 }), d = [];
          break;
        case "textarea":
          u = N(e, u), l = N(e, l), d = [];
          break;
        default:
          typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = Ks);
      }
      _r(s, l);
      var y;
      s = null;
      for (O in u) if (!l.hasOwnProperty(O) && u.hasOwnProperty(O) && u[O] != null) if (O === "style") {
        var w = u[O];
        for (y in w) w.hasOwnProperty(y) && (s || (s = {}), s[y] = "");
      } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (a.hasOwnProperty(O) ? d || (d = []) : (d = d || []).push(O, null));
      for (O in l) {
        var T = l[O];
        if (w = u?.[O], l.hasOwnProperty(O) && T !== w && (T != null || w != null)) if (O === "style") if (w) {
          for (y in w) !w.hasOwnProperty(y) || T && T.hasOwnProperty(y) || (s || (s = {}), s[y] = "");
          for (y in T) T.hasOwnProperty(y) && w[y] !== T[y] && (s || (s = {}), s[y] = T[y]);
        } else s || (d || (d = []), d.push(
          O,
          s
        )), s = T;
        else O === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, w = w ? w.__html : void 0, T != null && w !== T && (d = d || []).push(O, T)) : O === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(O, "" + T) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (a.hasOwnProperty(O) ? (T != null && O === "onScroll" && Le("scroll", e), d || w === T || (d = [])) : (d = d || []).push(O, T));
      }
      s && (d = d || []).push("style", s);
      var O = d;
      (t.updateQueue = O) && (t.flags |= 4);
    }
  }, Hd = function(e, t, s, l) {
    s !== l && (t.flags |= 4);
  };
  function Gi(e, t) {
    if (!be) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var s = null; t !== null; ) t.alternate !== null && (s = t), t = t.sibling;
        s === null ? e.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = e.tail;
        for (var l = null; s !== null; ) s.alternate !== null && (l = s), s = s.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, s = 0, l = 0;
    if (t) for (var u = e.child; u !== null; ) s |= u.lanes | u.childLanes, l |= u.subtreeFlags & 14680064, l |= u.flags & 14680064, u.return = e, u = u.sibling;
    else for (u = e.child; u !== null; ) s |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = s, t;
  }
  function $v(e, t, s) {
    var l = t.pendingProps;
    switch (na(t), t.tag) {
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
        return ft(t), null;
      case 1:
        return Tt(t.type) && Qs(), ft(t), null;
      case 3:
        return l = t.stateNode, Gr(), je(St), je(ut), ma(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Js(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Gt !== null && (Ha(Gt), Gt = null))), Ma(e, t), ft(t), null;
      case 5:
        ha(t);
        var u = sr(Bi.current);
        if (s = t.type, e !== null && t.stateNode != null) Wd(e, t, s, l, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return ft(t), null;
          }
          if (e = sr(on.current), Js(t)) {
            l = t.stateNode, s = t.type;
            var d = t.memoizedProps;
            switch (l[sn] = t, l[ji] = d, e = (t.mode & 1) !== 0, s) {
              case "dialog":
                Le("cancel", l), Le("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", l);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Mi.length; u++) Le(Mi[u], l);
                break;
              case "source":
                Le("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Le(
                  "error",
                  l
                ), Le("load", l);
                break;
              case "details":
                Le("toggle", l);
                break;
              case "input":
                pi(l, d), Le("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!d.multiple }, Le("invalid", l);
                break;
              case "textarea":
                J(l, d), Le("invalid", l);
            }
            _r(s, d), u = null;
            for (var y in d) if (d.hasOwnProperty(y)) {
              var w = d[y];
              y === "children" ? typeof w == "string" ? l.textContent !== w && (d.suppressHydrationWarning !== !0 && Hs(l.textContent, w, e), u = ["children", w]) : typeof w == "number" && l.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && Hs(
                l.textContent,
                w,
                e
              ), u = ["children", "" + w]) : a.hasOwnProperty(y) && w != null && y === "onScroll" && Le("scroll", l);
            }
            switch (s) {
              case "input":
                Sr(l), pl(l, d, !0);
                break;
              case "textarea":
                Sr(l), $(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (l.onclick = Ks);
            }
            l = u, t.updateQueue = l, l !== null && (t.flags |= 4);
          } else {
            y = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ae(s)), e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = y.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = y.createElement(s, { is: l.is }) : (e = y.createElement(s), s === "select" && (y = e, l.multiple ? y.multiple = !0 : l.size && (y.size = l.size))) : e = y.createElementNS(e, s), e[sn] = t, e[ji] = l, $d(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (y = yi(s, l), s) {
                case "dialog":
                  Le("cancel", e), Le("close", e), u = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", e), u = l;
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Mi.length; u++) Le(Mi[u], e);
                  u = l;
                  break;
                case "source":
                  Le("error", e), u = l;
                  break;
                case "img":
                case "image":
                case "link":
                  Le(
                    "error",
                    e
                  ), Le("load", e), u = l;
                  break;
                case "details":
                  Le("toggle", e), u = l;
                  break;
                case "input":
                  pi(e, l), u = kr(e, l), Le("invalid", e);
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, u = Y({}, l, { value: void 0 }), Le("invalid", e);
                  break;
                case "textarea":
                  J(e, l), u = N(e, l), Le("invalid", e);
                  break;
                default:
                  u = l;
              }
              _r(s, u), w = u;
              for (d in w) if (w.hasOwnProperty(d)) {
                var T = w[d];
                d === "style" ? Pr(e, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && mt(e, T)) : d === "children" ? typeof T == "string" ? (s !== "textarea" || T !== "") && nn(e, T) : typeof T == "number" && nn(e, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (a.hasOwnProperty(d) ? T != null && d === "onScroll" && Le("scroll", e) : T != null && U(e, d, T, y));
              }
              switch (s) {
                case "input":
                  Sr(e), pl(e, l, !1);
                  break;
                case "textarea":
                  Sr(e), $(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + _e(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, d = l.value, d != null ? A(e, !!l.multiple, d, !1) : l.defaultValue != null && A(
                    e,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Ks);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return ft(t), null;
      case 6:
        if (e && t.stateNode != null) Hd(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (s = sr(Bi.current), sr(on.current), Js(t)) {
            if (l = t.stateNode, s = t.memoizedProps, l[sn] = t, (d = l.nodeValue !== s) && (e = Ft, e !== null)) switch (e.tag) {
              case 3:
                Hs(l.nodeValue, s, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hs(l.nodeValue, s, (e.mode & 1) !== 0);
            }
            d && (t.flags |= 4);
          } else l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l), l[sn] = t, t.stateNode = l;
        }
        return ft(t), null;
      case 13:
        if (je(ze), l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (be && Ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Qf(), $r(), t.flags |= 98560, d = !1;
          else if (d = Js(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[sn] = t;
            } else $r(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ft(t), d = !1;
          } else Gt !== null && (Ha(Gt), Gt = null), d = !0;
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = s, t) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ze.current & 1) !== 0 ? et === 0 && (et = 3) : Qa())), t.updateQueue !== null && (t.flags |= 4), ft(t), null);
      case 4:
        return Gr(), Ma(e, t), e === null && Ni(t.stateNode.containerInfo), ft(t), null;
      case 10:
        return aa(t.type._context), ft(t), null;
      case 17:
        return Tt(t.type) && Qs(), ft(t), null;
      case 19:
        if (je(ze), d = t.memoizedState, d === null) return ft(t), null;
        if (l = (t.flags & 128) !== 0, y = d.rendering, y === null) if (l) Gi(d, !1);
        else {
          if (et !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (y = so(e), y !== null) {
              for (t.flags |= 128, Gi(d, !1), l = y.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), t.subtreeFlags = 0, l = s, s = t.child; s !== null; ) d = s, e = l, d.flags &= 14680066, y = d.alternate, y === null ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = y.childLanes, d.lanes = y.lanes, d.child = y.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = y.memoizedProps, d.memoizedState = y.memoizedState, d.updateQueue = y.updateQueue, d.type = y.type, e = y.dependencies, d.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), s = s.sibling;
              return Ne(ze, ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          d.tail !== null && Ke() > Xr && (t.flags |= 128, l = !0, Gi(d, !1), t.lanes = 4194304);
        }
        else {
          if (!l) if (e = so(y), e !== null) {
            if (t.flags |= 128, l = !0, s = e.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), Gi(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !be) return ft(t), null;
          } else 2 * Ke() - d.renderingStartTime > Xr && s !== 1073741824 && (t.flags |= 128, l = !0, Gi(d, !1), t.lanes = 4194304);
          d.isBackwards ? (y.sibling = t.child, t.child = y) : (s = d.last, s !== null ? s.sibling = y : t.child = y, d.last = y);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Ke(), t.sibling = null, s = ze.current, Ne(ze, l ? s & 1 | 2 : s & 1), t) : (ft(t), null);
      case 22:
      case 23:
        return Ga(), l = t.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (t.flags |= 8192), l && (t.mode & 1) !== 0 ? (Rt & 1073741824) !== 0 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ft(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Wv(e, t) {
    switch (na(t), t.tag) {
      case 1:
        return Tt(t.type) && Qs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Gr(), je(St), je(ut), ma(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ha(t), null;
      case 13:
        if (je(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          $r();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return je(ze), null;
      case 4:
        return Gr(), null;
      case 10:
        return aa(t.type._context), null;
      case 22:
      case 23:
        return Ga(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mo = !1, dt = !1, Hv = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
  function Yr(e, t) {
    var s = e.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (l) {
      $e(e, t, l);
    }
    else s.current = null;
  }
  function Na(e, t, s) {
    try {
      s();
    } catch (l) {
      $e(e, t, l);
    }
  }
  var Kd = !1;
  function Kv(e, t) {
    if (Gl = Ms, e = Ef(), bl(e)) {
      if ("selectionStart" in e) var s = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        s = (s = e.ownerDocument) && s.defaultView || window;
        var l = s.getSelection && s.getSelection();
        if (l && l.rangeCount !== 0) {
          s = l.anchorNode;
          var u = l.anchorOffset, d = l.focusNode;
          l = l.focusOffset;
          try {
            s.nodeType, d.nodeType;
          } catch {
            s = null;
            break e;
          }
          var y = 0, w = -1, T = -1, O = 0, z = 0, B = e, b = null;
          t: for (; ; ) {
            for (var ee; B !== s || u !== 0 && B.nodeType !== 3 || (w = y + u), B !== d || l !== 0 && B.nodeType !== 3 || (T = y + l), B.nodeType === 3 && (y += B.nodeValue.length), (ee = B.firstChild) !== null; )
              b = B, B = ee;
            for (; ; ) {
              if (B === e) break t;
              if (b === s && ++O === u && (w = y), b === d && ++z === l && (T = y), (ee = B.nextSibling) !== null) break;
              B = b, b = B.parentNode;
            }
            B = ee;
          }
          s = w === -1 || T === -1 ? null : { start: w, end: T };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Ql = { focusedElem: e, selectionRange: s }, Ms = !1, ne = t; ne !== null; ) if (t = ne, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ne = e;
    else for (; ne !== null; ) {
      t = ne;
      try {
        var ie = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ie !== null) {
              var se = ie.memoizedProps, Ge = ie.memoizedState, P = t.stateNode, E = P.getSnapshotBeforeUpdate(t.elementType === t.type ? se : Qt(t.type, se), Ge);
              P.__reactInternalSnapshotBeforeUpdate = E;
            }
            break;
          case 3:
            var V = t.stateNode.containerInfo;
            V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (W) {
        $e(t, t.return, W);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ne = e;
        break;
      }
      ne = t.return;
    }
    return ie = Kd, Kd = !1, ie;
  }
  function Qi(e, t, s) {
    var l = t.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var u = l = l.next;
      do {
        if ((u.tag & e) === e) {
          var d = u.destroy;
          u.destroy = void 0, d !== void 0 && Na(t, s, d);
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function yo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var s = t = t.next;
      do {
        if ((s.tag & e) === e) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== t);
    }
  }
  function La(e) {
    var t = e.ref;
    if (t !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Gd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[sn], delete t[ji], delete t[Zl], delete t[Av], delete t[Dv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Qd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Yd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ja(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? s.nodeType === 8 ? s.parentNode.insertBefore(e, t) : s.insertBefore(e, t) : (s.nodeType === 8 ? (t = s.parentNode, t.insertBefore(e, s)) : (t = s, t.appendChild(e)), s = s._reactRootContainer, s != null || t.onclick !== null || (t.onclick = Ks));
    else if (l !== 4 && (e = e.child, e !== null)) for (ja(e, t, s), e = e.sibling; e !== null; ) ja(e, t, s), e = e.sibling;
  }
  function Ia(e, t, s) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (l !== 4 && (e = e.child, e !== null)) for (Ia(e, t, s), e = e.sibling; e !== null; ) Ia(e, t, s), e = e.sibling;
  }
  var ot = null, Yt = !1;
  function bn(e, t, s) {
    for (s = s.child; s !== null; ) qd(e, t, s), s = s.sibling;
  }
  function qd(e, t, s) {
    if (rn && typeof rn.onCommitFiberUnmount == "function") try {
      rn.onCommitFiberUnmount(As, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        dt || Yr(s, t);
      case 6:
        var l = ot, u = Yt;
        ot = null, bn(e, t, s), ot = l, Yt = u, ot !== null && (Yt ? (e = ot, s = s.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : ot.removeChild(s.stateNode));
        break;
      case 18:
        ot !== null && (Yt ? (e = ot, s = s.stateNode, e.nodeType === 8 ? Xl(e.parentNode, s) : e.nodeType === 1 && Xl(e, s), Pi(e)) : Xl(ot, s.stateNode));
        break;
      case 4:
        l = ot, u = Yt, ot = s.stateNode.containerInfo, Yt = !0, bn(e, t, s), ot = l, Yt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dt && (l = s.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          u = l = l.next;
          do {
            var d = u, y = d.destroy;
            d = d.tag, y !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Na(s, t, y), u = u.next;
          } while (u !== l);
        }
        bn(e, t, s);
        break;
      case 1:
        if (!dt && (Yr(s, t), l = s.stateNode, typeof l.componentWillUnmount == "function")) try {
          l.props = s.memoizedProps, l.state = s.memoizedState, l.componentWillUnmount();
        } catch (w) {
          $e(s, t, w);
        }
        bn(e, t, s);
        break;
      case 21:
        bn(e, t, s);
        break;
      case 22:
        s.mode & 1 ? (dt = (l = dt) || s.memoizedState !== null, bn(e, t, s), dt = l) : bn(e, t, s);
        break;
      default:
        bn(e, t, s);
    }
  }
  function Xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new Hv()), t.forEach(function(l) {
        var u = t0.bind(null, e, l);
        s.has(l) || (s.add(l), l.then(u, u));
      });
    }
  }
  function qt(e, t) {
    var s = t.deletions;
    if (s !== null) for (var l = 0; l < s.length; l++) {
      var u = s[l];
      try {
        var d = e, y = t, w = y;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              ot = w.stateNode, Yt = !1;
              break e;
            case 3:
              ot = w.stateNode.containerInfo, Yt = !0;
              break e;
            case 4:
              ot = w.stateNode.containerInfo, Yt = !0;
              break e;
          }
          w = w.return;
        }
        if (ot === null) throw Error(i(160));
        qd(d, y, u), ot = null, Yt = !1;
        var T = u.alternate;
        T !== null && (T.return = null), u.return = null;
      } catch (O) {
        $e(u, t, O);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Zd(t, e), t = t.sibling;
  }
  function Zd(e, t) {
    var s = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (qt(t, e), an(e), l & 4) {
          try {
            Qi(3, e, e.return), yo(3, e);
          } catch (se) {
            $e(e, e.return, se);
          }
          try {
            Qi(5, e, e.return);
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        break;
      case 1:
        qt(t, e), an(e), l & 512 && s !== null && Yr(s, s.return);
        break;
      case 5:
        if (qt(t, e), an(e), l & 512 && s !== null && Yr(s, s.return), e.flags & 32) {
          var u = e.stateNode;
          try {
            nn(u, "");
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        if (l & 4 && (u = e.stateNode, u != null)) {
          var d = e.memoizedProps, y = s !== null ? s.memoizedProps : d, w = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            w === "input" && d.type === "radio" && d.name != null && Es(u, d), yi(w, y);
            var O = yi(w, d);
            for (y = 0; y < T.length; y += 2) {
              var z = T[y], B = T[y + 1];
              z === "style" ? Pr(u, B) : z === "dangerouslySetInnerHTML" ? mt(u, B) : z === "children" ? nn(u, B) : U(u, z, B, O);
            }
            switch (w) {
              case "input":
                mi(u, d);
                break;
              case "textarea":
                K(u, d);
                break;
              case "select":
                var b = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!d.multiple;
                var ee = d.value;
                ee != null ? A(u, !!d.multiple, ee, !1) : b !== !!d.multiple && (d.defaultValue != null ? A(
                  u,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : A(u, !!d.multiple, d.multiple ? [] : "", !1));
            }
            u[ji] = d;
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        break;
      case 6:
        if (qt(t, e), an(e), l & 4) {
          if (e.stateNode === null) throw Error(i(162));
          u = e.stateNode, d = e.memoizedProps;
          try {
            u.nodeValue = d;
          } catch (se) {
            $e(e, e.return, se);
          }
        }
        break;
      case 3:
        if (qt(t, e), an(e), l & 4 && s !== null && s.memoizedState.isDehydrated) try {
          Pi(t.containerInfo);
        } catch (se) {
          $e(e, e.return, se);
        }
        break;
      case 4:
        qt(t, e), an(e);
        break;
      case 13:
        qt(t, e), an(e), u = e.child, u.flags & 8192 && (d = u.memoizedState !== null, u.stateNode.isHidden = d, !d || u.alternate !== null && u.alternate.memoizedState !== null || (Ua = Ke())), l & 4 && Xd(e);
        break;
      case 22:
        if (z = s !== null && s.memoizedState !== null, e.mode & 1 ? (dt = (O = dt) || z, qt(t, e), dt = O) : qt(t, e), an(e), l & 8192) {
          if (O = e.memoizedState !== null, (e.stateNode.isHidden = O) && !z && (e.mode & 1) !== 0) for (ne = e, z = e.child; z !== null; ) {
            for (B = ne = z; ne !== null; ) {
              switch (b = ne, ee = b.child, b.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qi(4, b, b.return);
                  break;
                case 1:
                  Yr(b, b.return);
                  var ie = b.stateNode;
                  if (typeof ie.componentWillUnmount == "function") {
                    l = b, s = b.return;
                    try {
                      t = l, ie.props = t.memoizedProps, ie.state = t.memoizedState, ie.componentWillUnmount();
                    } catch (se) {
                      $e(l, s, se);
                    }
                  }
                  break;
                case 5:
                  Yr(b, b.return);
                  break;
                case 22:
                  if (b.memoizedState !== null) {
                    th(B);
                    continue;
                  }
              }
              ee !== null ? (ee.return = b, ne = ee) : th(B);
            }
            z = z.sibling;
          }
          e: for (z = null, B = e; ; ) {
            if (B.tag === 5) {
              if (z === null) {
                z = B;
                try {
                  u = B.stateNode, O ? (d = u.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = B.stateNode, T = B.memoizedProps.style, y = T != null && T.hasOwnProperty("display") ? T.display : null, w.style.display = Cr("display", y));
                } catch (se) {
                  $e(e, e.return, se);
                }
              }
            } else if (B.tag === 6) {
              if (z === null) try {
                B.stateNode.nodeValue = O ? "" : B.memoizedProps;
              } catch (se) {
                $e(e, e.return, se);
              }
            } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === e) && B.child !== null) {
              B.child.return = B, B = B.child;
              continue;
            }
            if (B === e) break e;
            for (; B.sibling === null; ) {
              if (B.return === null || B.return === e) break e;
              z === B && (z = null), B = B.return;
            }
            z === B && (z = null), B.sibling.return = B.return, B = B.sibling;
          }
        }
        break;
      case 19:
        qt(t, e), an(e), l & 4 && Xd(e);
        break;
      case 21:
        break;
      default:
        qt(
          t,
          e
        ), an(e);
    }
  }
  function an(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (Qd(s)) {
              var l = s;
              break e;
            }
            s = s.return;
          }
          throw Error(i(160));
        }
        switch (l.tag) {
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (nn(u, ""), l.flags &= -33);
            var d = Yd(e);
            Ia(e, d, u);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo, w = Yd(e);
            ja(e, w, y);
            break;
          default:
            throw Error(i(161));
        }
      } catch (T) {
        $e(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Gv(e, t, s) {
    ne = e, Jd(e);
  }
  function Jd(e, t, s) {
    for (var l = (e.mode & 1) !== 0; ne !== null; ) {
      var u = ne, d = u.child;
      if (u.tag === 22 && l) {
        var y = u.memoizedState !== null || mo;
        if (!y) {
          var w = u.alternate, T = w !== null && w.memoizedState !== null || dt;
          w = mo;
          var O = dt;
          if (mo = y, (dt = T) && !O) for (ne = u; ne !== null; ) y = ne, T = y.child, y.tag === 22 && y.memoizedState !== null ? nh(u) : T !== null ? (T.return = y, ne = T) : nh(u);
          for (; d !== null; ) ne = d, Jd(d), d = d.sibling;
          ne = u, mo = w, dt = O;
        }
        eh(e);
      } else (u.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = u, ne = d) : eh(e);
    }
  }
  function eh(e) {
    for (; ne !== null; ) {
      var t = ne;
      if ((t.flags & 8772) !== 0) {
        var s = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              dt || yo(5, t);
              break;
            case 1:
              var l = t.stateNode;
              if (t.flags & 4 && !dt) if (s === null) l.componentDidMount();
              else {
                var u = t.elementType === t.type ? s.memoizedProps : Qt(t.type, s.memoizedProps);
                l.componentDidUpdate(u, s.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
              }
              var d = t.updateQueue;
              d !== null && td(t, d, l);
              break;
            case 3:
              var y = t.updateQueue;
              if (y !== null) {
                if (s = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    s = t.child.stateNode;
                    break;
                  case 1:
                    s = t.child.stateNode;
                }
                td(t, y, s);
              }
              break;
            case 5:
              var w = t.stateNode;
              if (s === null && t.flags & 4) {
                s = w;
                var T = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && s.focus();
                    break;
                  case "img":
                    T.src && (s.src = T.src);
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
                var O = t.alternate;
                if (O !== null) {
                  var z = O.memoizedState;
                  if (z !== null) {
                    var B = z.dehydrated;
                    B !== null && Pi(B);
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
              throw Error(i(163));
          }
          dt || t.flags & 512 && La(t);
        } catch (b) {
          $e(t, t.return, b);
        }
      }
      if (t === e) {
        ne = null;
        break;
      }
      if (s = t.sibling, s !== null) {
        s.return = t.return, ne = s;
        break;
      }
      ne = t.return;
    }
  }
  function th(e) {
    for (; ne !== null; ) {
      var t = ne;
      if (t === e) {
        ne = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, ne = s;
        break;
      }
      ne = t.return;
    }
  }
  function nh(e) {
    for (; ne !== null; ) {
      var t = ne;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var s = t.return;
            try {
              yo(4, t);
            } catch (T) {
              $e(t, s, T);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = t.return;
              try {
                l.componentDidMount();
              } catch (T) {
                $e(t, u, T);
              }
            }
            var d = t.return;
            try {
              La(t);
            } catch (T) {
              $e(t, d, T);
            }
            break;
          case 5:
            var y = t.return;
            try {
              La(t);
            } catch (T) {
              $e(t, y, T);
            }
        }
      } catch (T) {
        $e(t, t.return, T);
      }
      if (t === e) {
        ne = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        w.return = t.return, ne = w;
        break;
      }
      ne = t.return;
    }
  }
  var Qv = Math.ceil, go = H.ReactCurrentDispatcher, ba = H.ReactCurrentOwner, Ut = H.ReactCurrentBatchConfig, Ce = 0, nt = null, qe = null, lt = 0, Rt = 0, qr = Mn(0), et = 0, Yi = null, lr = 0, vo = 0, za = 0, qi = null, Et = null, Ua = 0, Xr = 1 / 0, wn = null, xo = !1, Ba = null, zn = null, wo = !1, Un = null, So = 0, Xi = 0, $a = null, To = -1, ko = 0;
  function gt() {
    return (Ce & 6) !== 0 ? Ke() : To !== -1 ? To : To = Ke();
  }
  function Bn(e) {
    return (e.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && lt !== 0 ? lt & -lt : Fv.transition !== null ? (ko === 0 && (ko = Qc()), ko) : (e = Oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rf(e.type)), e);
  }
  function Xt(e, t, s, l) {
    if (50 < Xi) throw Xi = 0, $a = null, Error(i(185));
    Si(e, s, l), ((Ce & 2) === 0 || e !== nt) && (e === nt && ((Ce & 2) === 0 && (vo |= s), et === 4 && $n(e, lt)), Ct(e, l), s === 1 && Ce === 0 && (t.mode & 1) === 0 && (Xr = Ke() + 500, qs && Ln()));
  }
  function Ct(e, t) {
    var s = e.callbackNode;
    Fg(e, t);
    var l = Fs(e, e === nt ? lt : 0);
    if (l === 0) s !== null && Hc(s), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = l & -l, e.callbackPriority !== t) {
      if (s != null && Hc(s), t === 1) e.tag === 0 ? Vv(ih.bind(null, e)) : $f(ih.bind(null, e)), Pv(function() {
        (Ce & 6) === 0 && Ln();
      }), s = null;
      else {
        switch (Yc(l)) {
          case 1:
            s = Tl;
            break;
          case 4:
            s = Kc;
            break;
          case 16:
            s = _s;
            break;
          case 536870912:
            s = Gc;
            break;
          default:
            s = _s;
        }
        s = dh(s, rh.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = s;
    }
  }
  function rh(e, t) {
    if (To = -1, ko = 0, (Ce & 6) !== 0) throw Error(i(327));
    var s = e.callbackNode;
    if (Zr() && e.callbackNode !== s) return null;
    var l = Fs(e, e === nt ? lt : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Eo(e, l);
    else {
      t = l;
      var u = Ce;
      Ce |= 2;
      var d = oh();
      (nt !== e || lt !== t) && (wn = null, Xr = Ke() + 500, ur(e, t));
      do
        try {
          Xv();
          break;
        } catch (w) {
          sh(e, w);
        }
      while (!0);
      la(), go.current = d, Ce = u, qe !== null ? t = 0 : (nt = null, lt = 0, t = et);
    }
    if (t !== 0) {
      if (t === 2 && (u = kl(e), u !== 0 && (l = u, t = Wa(e, u))), t === 1) throw s = Yi, ur(e, 0), $n(e, l), Ct(e, Ke()), s;
      if (t === 6) $n(e, l);
      else {
        if (u = e.current.alternate, (l & 30) === 0 && !Yv(u) && (t = Eo(e, l), t === 2 && (d = kl(e), d !== 0 && (l = d, t = Wa(e, d))), t === 1)) throw s = Yi, ur(e, 0), $n(e, l), Ct(e, Ke()), s;
        switch (e.finishedWork = u, e.finishedLanes = l, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            cr(e, Et, wn);
            break;
          case 3:
            if ($n(e, l), (l & 130023424) === l && (t = Ua + 500 - Ke(), 10 < t)) {
              if (Fs(e, 0) !== 0) break;
              if (u = e.suspendedLanes, (u & l) !== l) {
                gt(), e.pingedLanes |= e.suspendedLanes & u;
                break;
              }
              e.timeoutHandle = ql(cr.bind(null, e, Et, wn), t);
              break;
            }
            cr(e, Et, wn);
            break;
          case 4:
            if ($n(e, l), (l & 4194240) === l) break;
            for (t = e.eventTimes, u = -1; 0 < l; ) {
              var y = 31 - Ht(l);
              d = 1 << y, y = t[y], y > u && (u = y), l &= ~d;
            }
            if (l = u, l = Ke() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Qv(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = ql(cr.bind(null, e, Et, wn), l);
              break;
            }
            cr(e, Et, wn);
            break;
          case 5:
            cr(e, Et, wn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Ct(e, Ke()), e.callbackNode === s ? rh.bind(null, e) : null;
  }
  function Wa(e, t) {
    var s = qi;
    return e.current.memoizedState.isDehydrated && (ur(e, t).flags |= 256), e = Eo(e, t), e !== 2 && (t = Et, Et = s, t !== null && Ha(t)), e;
  }
  function Ha(e) {
    Et === null ? Et = e : Et.push.apply(Et, e);
  }
  function Yv(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var s = t.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var l = 0; l < s.length; l++) {
          var u = s[l], d = u.getSnapshot;
          u = u.value;
          try {
            if (!Kt(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (s = t.child, t.subtreeFlags & 16384 && s !== null) s.return = t, t = s;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function $n(e, t) {
    for (t &= ~za, t &= ~vo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var s = 31 - Ht(t), l = 1 << s;
      e[s] = -1, t &= ~l;
    }
  }
  function ih(e) {
    if ((Ce & 6) !== 0) throw Error(i(327));
    Zr();
    var t = Fs(e, 0);
    if ((t & 1) === 0) return Ct(e, Ke()), null;
    var s = Eo(e, t);
    if (e.tag !== 0 && s === 2) {
      var l = kl(e);
      l !== 0 && (t = l, s = Wa(e, l));
    }
    if (s === 1) throw s = Yi, ur(e, 0), $n(e, t), Ct(e, Ke()), s;
    if (s === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, cr(e, Et, wn), Ct(e, Ke()), null;
  }
  function Ka(e, t) {
    var s = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      Ce = s, Ce === 0 && (Xr = Ke() + 500, qs && Ln());
    }
  }
  function ar(e) {
    Un !== null && Un.tag === 0 && (Ce & 6) === 0 && Zr();
    var t = Ce;
    Ce |= 1;
    var s = Ut.transition, l = Oe;
    try {
      if (Ut.transition = null, Oe = 1, e) return e();
    } finally {
      Oe = l, Ut.transition = s, Ce = t, (Ce & 6) === 0 && Ln();
    }
  }
  function Ga() {
    Rt = qr.current, je(qr);
  }
  function ur(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var s = e.timeoutHandle;
    if (s !== -1 && (e.timeoutHandle = -1, Cv(s)), qe !== null) for (s = qe.return; s !== null; ) {
      var l = s;
      switch (na(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && Qs();
          break;
        case 3:
          Gr(), je(St), je(ut), ma();
          break;
        case 5:
          ha(l);
          break;
        case 4:
          Gr();
          break;
        case 13:
          je(ze);
          break;
        case 19:
          je(ze);
          break;
        case 10:
          aa(l.type._context);
          break;
        case 22:
        case 23:
          Ga();
      }
      s = s.return;
    }
    if (nt = e, qe = e = Wn(e.current, null), lt = Rt = t, et = 0, Yi = null, za = vo = lr = 0, Et = qi = null, ir !== null) {
      for (t = 0; t < ir.length; t++) if (s = ir[t], l = s.interleaved, l !== null) {
        s.interleaved = null;
        var u = l.next, d = s.pending;
        if (d !== null) {
          var y = d.next;
          d.next = u, l.next = y;
        }
        s.pending = l;
      }
      ir = null;
    }
    return e;
  }
  function sh(e, t) {
    do {
      var s = qe;
      try {
        if (la(), oo.current = co, lo) {
          for (var l = Ue.memoizedState; l !== null; ) {
            var u = l.queue;
            u !== null && (u.pending = null), l = l.next;
          }
          lo = !1;
        }
        if (or = 0, tt = Je = Ue = null, $i = !1, Wi = 0, ba.current = null, s === null || s.return === null) {
          et = 1, Yi = t, qe = null;
          break;
        }
        e: {
          var d = e, y = s.return, w = s, T = t;
          if (t = lt, w.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var O = T, z = w, B = z.tag;
            if ((z.mode & 1) === 0 && (B === 0 || B === 11 || B === 15)) {
              var b = z.alternate;
              b ? (z.updateQueue = b.updateQueue, z.memoizedState = b.memoizedState, z.lanes = b.lanes) : (z.updateQueue = null, z.memoizedState = null);
            }
            var ee = Vd(y);
            if (ee !== null) {
              ee.flags &= -257, Fd(ee, y, w, d, t), ee.mode & 1 && Dd(d, O, t), t = ee, T = O;
              var ie = t.updateQueue;
              if (ie === null) {
                var se = /* @__PURE__ */ new Set();
                se.add(T), t.updateQueue = se;
              } else ie.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                Dd(d, O, t), Qa();
                break e;
              }
              T = Error(i(426));
            }
          } else if (be && w.mode & 1) {
            var Ge = Vd(y);
            if (Ge !== null) {
              (Ge.flags & 65536) === 0 && (Ge.flags |= 256), Fd(Ge, y, w, d, t), sa(Qr(T, w));
              break e;
            }
          }
          d = T = Qr(T, w), et !== 4 && (et = 2), qi === null ? qi = [d] : qi.push(d), d = y;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, t &= -t, d.lanes |= t;
                var P = _d(d, T, t);
                ed(d, P);
                break e;
              case 1:
                w = T;
                var E = d.type, V = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof E.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (zn === null || !zn.has(V)))) {
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var W = Ad(d, w, t);
                  ed(d, W);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(s);
      } catch (oe) {
        t = oe, qe === s && s !== null && (qe = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function oh() {
    var e = go.current;
    return go.current = co, e === null ? co : e;
  }
  function Qa() {
    (et === 0 || et === 3 || et === 2) && (et = 4), nt === null || (lr & 268435455) === 0 && (vo & 268435455) === 0 || $n(nt, lt);
  }
  function Eo(e, t) {
    var s = Ce;
    Ce |= 2;
    var l = oh();
    (nt !== e || lt !== t) && (wn = null, ur(e, t));
    do
      try {
        qv();
        break;
      } catch (u) {
        sh(e, u);
      }
    while (!0);
    if (la(), Ce = s, go.current = l, qe !== null) throw Error(i(261));
    return nt = null, lt = 0, et;
  }
  function qv() {
    for (; qe !== null; ) lh(qe);
  }
  function Xv() {
    for (; qe !== null && !Tg(); ) lh(qe);
  }
  function lh(e) {
    var t = fh(e.alternate, e, Rt);
    e.memoizedProps = e.pendingProps, t === null ? ah(e) : qe = t, ba.current = null;
  }
  function ah(e) {
    var t = e;
    do {
      var s = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (s = $v(s, t, Rt), s !== null) {
          qe = s;
          return;
        }
      } else {
        if (s = Wv(s, t), s !== null) {
          s.flags &= 32767, qe = s;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          et = 6, qe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function cr(e, t, s) {
    var l = Oe, u = Ut.transition;
    try {
      Ut.transition = null, Oe = 1, Zv(e, t, s, l);
    } finally {
      Ut.transition = u, Oe = l;
    }
    return null;
  }
  function Zv(e, t, s, l) {
    do
      Zr();
    while (Un !== null);
    if ((Ce & 6) !== 0) throw Error(i(327));
    s = e.finishedWork;
    var u = e.finishedLanes;
    if (s === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, s === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var d = s.lanes | s.childLanes;
    if (Og(e, d), e === nt && (qe = nt = null, lt = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || wo || (wo = !0, dh(_s, function() {
      return Zr(), null;
    })), d = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || d) {
      d = Ut.transition, Ut.transition = null;
      var y = Oe;
      Oe = 1;
      var w = Ce;
      Ce |= 4, ba.current = null, Kv(e, s), Zd(s, e), vv(Ql), Ms = !!Gl, Ql = Gl = null, e.current = s, Gv(s), kg(), Ce = w, Oe = y, Ut.transition = d;
    } else e.current = s;
    if (wo && (wo = !1, Un = e, So = u), d = e.pendingLanes, d === 0 && (zn = null), Pg(s.stateNode), Ct(e, Ke()), t !== null) for (l = e.onRecoverableError, s = 0; s < t.length; s++) u = t[s], l(u.value, { componentStack: u.stack, digest: u.digest });
    if (xo) throw xo = !1, e = Ba, Ba = null, e;
    return (So & 1) !== 0 && e.tag !== 0 && Zr(), d = e.pendingLanes, (d & 1) !== 0 ? e === $a ? Xi++ : (Xi = 0, $a = e) : Xi = 0, Ln(), null;
  }
  function Zr() {
    if (Un !== null) {
      var e = Yc(So), t = Ut.transition, s = Oe;
      try {
        if (Ut.transition = null, Oe = 16 > e ? 16 : e, Un === null) var l = !1;
        else {
          if (e = Un, Un = null, So = 0, (Ce & 6) !== 0) throw Error(i(331));
          var u = Ce;
          for (Ce |= 4, ne = e.current; ne !== null; ) {
            var d = ne, y = d.child;
            if ((ne.flags & 16) !== 0) {
              var w = d.deletions;
              if (w !== null) {
                for (var T = 0; T < w.length; T++) {
                  var O = w[T];
                  for (ne = O; ne !== null; ) {
                    var z = ne;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qi(8, z, d);
                    }
                    var B = z.child;
                    if (B !== null) B.return = z, ne = B;
                    else for (; ne !== null; ) {
                      z = ne;
                      var b = z.sibling, ee = z.return;
                      if (Gd(z), z === O) {
                        ne = null;
                        break;
                      }
                      if (b !== null) {
                        b.return = ee, ne = b;
                        break;
                      }
                      ne = ee;
                    }
                  }
                }
                var ie = d.alternate;
                if (ie !== null) {
                  var se = ie.child;
                  if (se !== null) {
                    ie.child = null;
                    do {
                      var Ge = se.sibling;
                      se.sibling = null, se = Ge;
                    } while (se !== null);
                  }
                }
                ne = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && y !== null) y.return = d, ne = y;
            else e: for (; ne !== null; ) {
              if (d = ne, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Qi(9, d, d.return);
              }
              var P = d.sibling;
              if (P !== null) {
                P.return = d.return, ne = P;
                break e;
              }
              ne = d.return;
            }
          }
          var E = e.current;
          for (ne = E; ne !== null; ) {
            y = ne;
            var V = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && V !== null) V.return = y, ne = V;
            else e: for (y = E; ne !== null; ) {
              if (w = ne, (w.flags & 2048) !== 0) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yo(9, w);
                }
              } catch (oe) {
                $e(w, w.return, oe);
              }
              if (w === y) {
                ne = null;
                break e;
              }
              var W = w.sibling;
              if (W !== null) {
                W.return = w.return, ne = W;
                break e;
              }
              ne = w.return;
            }
          }
          if (Ce = u, Ln(), rn && typeof rn.onPostCommitFiberRoot == "function") try {
            rn.onPostCommitFiberRoot(As, e);
          } catch {
          }
          l = !0;
        }
        return l;
      } finally {
        Oe = s, Ut.transition = t;
      }
    }
    return !1;
  }
  function uh(e, t, s) {
    t = Qr(s, t), t = _d(e, t, 1), e = In(e, t, 1), t = gt(), e !== null && (Si(e, 1, t), Ct(e, t));
  }
  function $e(e, t, s) {
    if (e.tag === 3) uh(e, e, s);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        uh(t, e, s);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (zn === null || !zn.has(l))) {
          e = Qr(s, e), e = Ad(t, e, 1), t = In(t, e, 1), e = gt(), t !== null && (Si(t, 1, e), Ct(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Jv(e, t, s) {
    var l = e.pingCache;
    l !== null && l.delete(t), t = gt(), e.pingedLanes |= e.suspendedLanes & s, nt === e && (lt & s) === s && (et === 4 || et === 3 && (lt & 130023424) === lt && 500 > Ke() - Ua ? ur(e, 0) : za |= s), Ct(e, t);
  }
  function ch(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Vs, Vs <<= 1, (Vs & 130023424) === 0 && (Vs = 4194304)));
    var s = gt();
    e = gn(e, t), e !== null && (Si(e, t, s), Ct(e, s));
  }
  function e0(e) {
    var t = e.memoizedState, s = 0;
    t !== null && (s = t.retryLane), ch(e, s);
  }
  function t0(e, t) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (s = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(t), ch(e, s);
  }
  var fh;
  fh = function(e, t, s) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || St.current) kt = !0;
    else {
      if ((e.lanes & s) === 0 && (t.flags & 128) === 0) return kt = !1, Bv(e, t, s);
      kt = (e.flags & 131072) !== 0;
    }
    else kt = !1, be && (t.flags & 1048576) !== 0 && Wf(t, Zs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var l = t.type;
        po(e, t), e = t.pendingProps;
        var u = zr(t, ut.current);
        Kr(t, s), u = va(null, t, l, e, u, s);
        var d = xa();
        return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Tt(l) ? (d = !0, Ys(t)) : d = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, fa(t), u.updater = fo, t.stateNode = u, u._reactInternals = t, Ca(t, l, e, s), t = Da(null, t, l, !0, d, s)) : (t.tag = 0, be && d && ta(t), yt(null, t, u, s), t = t.child), t;
      case 16:
        l = t.elementType;
        e: {
          switch (po(e, t), e = t.pendingProps, u = l._init, l = u(l._payload), t.type = l, u = t.tag = r0(l), e = Qt(l, e), u) {
            case 0:
              t = Aa(null, t, l, e, s);
              break e;
            case 1:
              t = jd(null, t, l, e, s);
              break e;
            case 11:
              t = Od(null, t, l, e, s);
              break e;
            case 14:
              t = Rd(null, t, l, Qt(l.type, e), s);
              break e;
          }
          throw Error(i(
            306,
            l,
            ""
          ));
        }
        return t;
      case 0:
        return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), Aa(e, t, l, u, s);
      case 1:
        return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), jd(e, t, l, u, s);
      case 3:
        e: {
          if (Id(t), e === null) throw Error(i(387));
          l = t.pendingProps, d = t.memoizedState, u = d.element, Jf(e, t), io(t, l, null, s);
          var y = t.memoizedState;
          if (l = y.element, d.isDehydrated) if (d = { element: l, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
            u = Qr(Error(i(423)), t), t = bd(e, t, l, s, u);
            break e;
          } else if (l !== u) {
            u = Qr(Error(i(424)), t), t = bd(e, t, l, s, u);
            break e;
          } else for (Ot = Rn(t.stateNode.containerInfo.firstChild), Ft = t, be = !0, Gt = null, s = Xf(t, null, l, s), t.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if ($r(), l === u) {
              t = xn(e, t, s);
              break e;
            }
            yt(e, t, l, s);
          }
          t = t.child;
        }
        return t;
      case 5:
        return nd(t), e === null && ia(t), l = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, y = u.children, Yl(l, u) ? y = null : d !== null && Yl(l, d) && (t.flags |= 32), Ld(e, t), yt(e, t, y, s), t.child;
      case 6:
        return e === null && ia(t), null;
      case 13:
        return zd(e, t, s);
      case 4:
        return da(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = Wr(t, null, l, s) : yt(e, t, l, s), t.child;
      case 11:
        return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), Od(e, t, l, u, s);
      case 7:
        return yt(e, t, t.pendingProps, s), t.child;
      case 8:
        return yt(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return yt(e, t, t.pendingProps.children, s), t.child;
      case 10:
        e: {
          if (l = t.type._context, u = t.pendingProps, d = t.memoizedProps, y = u.value, Ne(to, l._currentValue), l._currentValue = y, d !== null) if (Kt(d.value, y)) {
            if (d.children === u.children && !St.current) {
              t = xn(e, t, s);
              break e;
            }
          } else for (d = t.child, d !== null && (d.return = t); d !== null; ) {
            var w = d.dependencies;
            if (w !== null) {
              y = d.child;
              for (var T = w.firstContext; T !== null; ) {
                if (T.context === l) {
                  if (d.tag === 1) {
                    T = vn(-1, s & -s), T.tag = 2;
                    var O = d.updateQueue;
                    if (O !== null) {
                      O = O.shared;
                      var z = O.pending;
                      z === null ? T.next = T : (T.next = z.next, z.next = T), O.pending = T;
                    }
                  }
                  d.lanes |= s, T = d.alternate, T !== null && (T.lanes |= s), ua(
                    d.return,
                    s,
                    t
                  ), w.lanes |= s;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) y = d.type === t.type ? null : d.child;
            else if (d.tag === 18) {
              if (y = d.return, y === null) throw Error(i(341));
              y.lanes |= s, w = y.alternate, w !== null && (w.lanes |= s), ua(y, s, t), y = d.sibling;
            } else y = d.child;
            if (y !== null) y.return = d;
            else for (y = d; y !== null; ) {
              if (y === t) {
                y = null;
                break;
              }
              if (d = y.sibling, d !== null) {
                d.return = y.return, y = d;
                break;
              }
              y = y.return;
            }
            d = y;
          }
          yt(e, t, u.children, s), t = t.child;
        }
        return t;
      case 9:
        return u = t.type, l = t.pendingProps.children, Kr(t, s), u = bt(u), l = l(u), t.flags |= 1, yt(e, t, l, s), t.child;
      case 14:
        return l = t.type, u = Qt(l, t.pendingProps), u = Qt(l.type, u), Rd(e, t, l, u, s);
      case 15:
        return Md(e, t, t.type, t.pendingProps, s);
      case 17:
        return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), po(e, t), t.tag = 1, Tt(l) ? (e = !0, Ys(t)) : e = !1, Kr(t, s), Cd(t, l, u), Ca(t, l, u, s), Da(null, t, l, !0, e, s);
      case 19:
        return Bd(e, t, s);
      case 22:
        return Nd(e, t, s);
    }
    throw Error(i(156, t.tag));
  };
  function dh(e, t) {
    return Wc(e, t);
  }
  function n0(e, t, s, l) {
    this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Bt(e, t, s, l) {
    return new n0(e, t, s, l);
  }
  function Ya(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function r0(e) {
    if (typeof e == "function") return Ya(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ue) return 11;
      if (e === Fe) return 14;
    }
    return 2;
  }
  function Wn(e, t) {
    var s = e.alternate;
    return s === null ? (s = Bt(e.tag, t, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = t, s.type = e.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 14680064, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue, t = e.dependencies, s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s;
  }
  function Co(e, t, s, l, u, d) {
    var y = 2;
    if (l = e, typeof e == "function") Ya(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else e: switch (e) {
      case le:
        return fr(s.children, u, d, t);
      case te:
        y = 8, u |= 8;
        break;
      case pe:
        return e = Bt(12, s, t, u | 2), e.elementType = pe, e.lanes = d, e;
      case he:
        return e = Bt(13, s, t, u), e.elementType = he, e.lanes = d, e;
      case xe:
        return e = Bt(19, s, t, u), e.elementType = xe, e.lanes = d, e;
      case X:
        return Po(s, u, d, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Se:
            y = 10;
            break e;
          case ye:
            y = 9;
            break e;
          case ue:
            y = 11;
            break e;
          case Fe:
            y = 14;
            break e;
          case Pe:
            y = 16, l = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Bt(y, s, t, u), t.elementType = e, t.type = l, t.lanes = d, t;
  }
  function fr(e, t, s, l) {
    return e = Bt(7, e, l, t), e.lanes = s, e;
  }
  function Po(e, t, s, l) {
    return e = Bt(22, e, l, t), e.elementType = X, e.lanes = s, e.stateNode = { isHidden: !1 }, e;
  }
  function qa(e, t, s) {
    return e = Bt(6, e, null, t), e.lanes = s, e;
  }
  function Xa(e, t, s) {
    return t = Bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = s, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function i0(e, t, s, l, u) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = El(0), this.expirationTimes = El(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = El(0), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
  }
  function Za(e, t, s, l, u, d, y, w, T) {
    return e = new i0(e, t, s, w, T), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = Bt(3, null, null, t), e.current = d, d.stateNode = e, d.memoizedState = { element: l, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fa(d), e;
  }
  function s0(e, t, s) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: l == null ? null : "" + l, children: e, containerInfo: t, implementation: s };
  }
  function hh(e) {
    if (!e) return Nn;
    e = e._reactInternals;
    e: {
      if (Jn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Tt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (Tt(s)) return Uf(e, s, t);
    }
    return t;
  }
  function ph(e, t, s, l, u, d, y, w, T) {
    return e = Za(s, l, !0, e, u, d, y, w, T), e.context = hh(null), s = e.current, l = gt(), u = Bn(s), d = vn(l, u), d.callback = t ?? null, In(s, d, u), e.current.lanes = u, Si(e, u, l), Ct(e, l), e;
  }
  function _o(e, t, s, l) {
    var u = t.current, d = gt(), y = Bn(u);
    return s = hh(s), t.context === null ? t.context = s : t.pendingContext = s, t = vn(d, y), t.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (t.callback = l), e = In(u, t, y), e !== null && (Xt(e, u, y, d), ro(e, u, y)), y;
  }
  function Ao(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function mh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function Ja(e, t) {
    mh(e, t), (e = e.alternate) && mh(e, t);
  }
  function o0() {
    return null;
  }
  var yh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function eu(e) {
    this._internalRoot = e;
  }
  Do.prototype.render = eu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    _o(e, t, null, null);
  }, Do.prototype.unmount = eu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ar(function() {
        _o(null, e, null, null);
      }), t[hn] = null;
    }
  };
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Zc();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < Vn.length && t !== 0 && t < Vn[s].priority; s++) ;
      Vn.splice(s, 0, e), s === 0 && tf(e);
    }
  };
  function tu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Vo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function gh() {
  }
  function l0(e, t, s, l, u) {
    if (u) {
      if (typeof l == "function") {
        var d = l;
        l = function() {
          var O = Ao(y);
          d.call(O);
        };
      }
      var y = ph(t, l, e, 0, null, !1, !1, "", gh);
      return e._reactRootContainer = y, e[hn] = y.current, Ni(e.nodeType === 8 ? e.parentNode : e), ar(), y;
    }
    for (; u = e.lastChild; ) e.removeChild(u);
    if (typeof l == "function") {
      var w = l;
      l = function() {
        var O = Ao(T);
        w.call(O);
      };
    }
    var T = Za(e, 0, !1, null, null, !1, !1, "", gh);
    return e._reactRootContainer = T, e[hn] = T.current, Ni(e.nodeType === 8 ? e.parentNode : e), ar(function() {
      _o(t, T, s, l);
    }), T;
  }
  function Fo(e, t, s, l, u) {
    var d = s._reactRootContainer;
    if (d) {
      var y = d;
      if (typeof u == "function") {
        var w = u;
        u = function() {
          var T = Ao(y);
          w.call(T);
        };
      }
      _o(t, y, e, u);
    } else y = l0(s, t, e, u, l);
    return Ao(y);
  }
  qc = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var s = wi(t.pendingLanes);
          s !== 0 && (Cl(t, s | 1), Ct(t, Ke()), (Ce & 6) === 0 && (Xr = Ke() + 500, Ln()));
        }
        break;
      case 13:
        ar(function() {
          var l = gn(e, 1);
          if (l !== null) {
            var u = gt();
            Xt(l, e, 1, u);
          }
        }), Ja(e, 1);
    }
  }, Pl = function(e) {
    if (e.tag === 13) {
      var t = gn(e, 134217728);
      if (t !== null) {
        var s = gt();
        Xt(t, e, 134217728, s);
      }
      Ja(e, 134217728);
    }
  }, Xc = function(e) {
    if (e.tag === 13) {
      var t = Bn(e), s = gn(e, t);
      if (s !== null) {
        var l = gt();
        Xt(s, e, t, l);
      }
      Ja(e, t);
    }
  }, Zc = function() {
    return Oe;
  }, Jc = function(e, t) {
    var s = Oe;
    try {
      return Oe = e, t();
    } finally {
      Oe = s;
    }
  }, vl = function(e, t, s) {
    switch (t) {
      case "input":
        if (mi(e, s), t = s.name, s.type === "radio" && t != null) {
          for (s = e; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < s.length; t++) {
            var l = s[t];
            if (l !== e && l.form === e.form) {
              var u = Gs(l);
              if (!u) throw Error(i(90));
              hi(l), mi(l, u);
            }
          }
        }
        break;
      case "textarea":
        K(e, s);
        break;
      case "select":
        t = s.value, t != null && A(e, !!s.multiple, t, !1);
    }
  }, jc = Ka, Ic = ar;
  var a0 = { usingClientEntryPoint: !1, Events: [Ii, Ir, Gs, Nc, Lc, Ka] }, Zi = { findFiberByHostInstance: er, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, u0 = { bundleType: Zi.bundleType, version: Zi.version, rendererPackageName: Zi.rendererPackageName, rendererConfig: Zi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bc(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Zi.findFiberByHostInstance || o0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Oo.isDisabled && Oo.supportsFiber) try {
      As = Oo.inject(u0), rn = Oo;
    } catch {
    }
  }
  return Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a0, Pt.createPortal = function(e, t) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tu(t)) throw Error(i(200));
    return s0(e, t, null, s);
  }, Pt.createRoot = function(e, t) {
    if (!tu(e)) throw Error(i(299));
    var s = !1, l = "", u = yh;
    return t != null && (t.unstable_strictMode === !0 && (s = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Za(e, 1, !1, null, null, s, !1, l, u), e[hn] = t.current, Ni(e.nodeType === 8 ? e.parentNode : e), new eu(t);
  }, Pt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Bc(t), e = e === null ? null : e.stateNode, e;
  }, Pt.flushSync = function(e) {
    return ar(e);
  }, Pt.hydrate = function(e, t, s) {
    if (!Vo(t)) throw Error(i(200));
    return Fo(null, e, t, !0, s);
  }, Pt.hydrateRoot = function(e, t, s) {
    if (!tu(e)) throw Error(i(405));
    var l = s != null && s.hydratedSources || null, u = !1, d = "", y = yh;
    if (s != null && (s.unstable_strictMode === !0 && (u = !0), s.identifierPrefix !== void 0 && (d = s.identifierPrefix), s.onRecoverableError !== void 0 && (y = s.onRecoverableError)), t = ph(t, null, e, 1, s ?? null, u, !1, d, y), e[hn] = t.current, Ni(e), l) for (e = 0; e < l.length; e++) s = l[e], u = s._getVersion, u = u(s._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [s, u] : t.mutableSourceEagerHydrationData.push(
      s,
      u
    );
    return new Do(t);
  }, Pt.render = function(e, t, s) {
    if (!Vo(t)) throw Error(i(200));
    return Fo(null, e, t, !1, s);
  }, Pt.unmountComponentAtNode = function(e) {
    if (!Vo(e)) throw Error(i(40));
    return e._reactRootContainer ? (ar(function() {
      Fo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[hn] = null;
      });
    }), !0) : !1;
  }, Pt.unstable_batchedUpdates = Ka, Pt.unstable_renderSubtreeIntoContainer = function(e, t, s, l) {
    if (!Vo(s)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Fo(e, t, s, !1, l);
  }, Pt.version = "18.3.1-next-f1338f8080-20240426", Pt;
}
var Ch;
function g0() {
  if (Ch) return iu.exports;
  Ch = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (n) {
        console.error(n);
      }
  }
  return r(), iu.exports = y0(), iu.exports;
}
var Ph;
function v0() {
  if (Ph) return Ro;
  Ph = 1;
  var r = g0();
  return Ro.createRoot = r.createRoot, Ro.hydrateRoot = r.hydrateRoot, Ro;
}
var x0 = v0();
const w0 = /* @__PURE__ */ sl(x0);
var lu, _h;
function S0() {
  if (_h) return lu;
  _h = 1;
  function r(F) {
    this._maxSize = F, this.clear();
  }
  r.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, r.prototype.get = function(F) {
    return this._values[F];
  }, r.prototype.set = function(F, R) {
    return this._size >= this._maxSize && this.clear(), F in this._values || this._size++, this._values[F] = R;
  };
  var n = /[^.^\]^[]+|(?=\[\]|\.\.)/g, i = /^\d+$/, o = /^\d/, a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, c = /^\s*(['"]?)(.*?)(\1)\s*$/, f = 512, h = new r(f), p = new r(f), m = new r(f);
  lu = {
    Cache: r,
    split: v,
    normalizePath: g,
    setter: function(F) {
      var R = g(F);
      return p.get(F) || p.set(F, function(H, L) {
        for (var q = 0, le = R.length, te = H; q < le - 1; ) {
          var pe = R[q];
          if (pe === "__proto__" || pe === "constructor" || pe === "prototype")
            return H;
          te = te[R[q++]];
        }
        te[R[q]] = L;
      });
    },
    getter: function(F, R) {
      var U = g(F);
      return m.get(F) || m.set(F, function(L) {
        for (var q = 0, le = U.length; q < le; )
          if (L != null || !R) L = L[U[q++]];
          else return;
        return L;
      });
    },
    join: function(F) {
      return F.reduce(function(R, U) {
        return R + (k(U) || i.test(U) ? "[" + U + "]" : (R ? "." : "") + U);
      }, "");
    },
    forEach: function(F, R, U) {
      x(Array.isArray(F) ? F : v(F), R, U);
    }
  };
  function g(F) {
    return h.get(F) || h.set(
      F,
      v(F).map(function(R) {
        return R.replace(c, "$2");
      })
    );
  }
  function v(F) {
    return F.match(n) || [""];
  }
  function x(F, R, U) {
    var H = F.length, L, q, le, te;
    for (q = 0; q < H; q++)
      L = F[q], L && (M(L) && (L = '"' + L + '"'), te = k(L), le = !te && /^\d+$/.test(L), R.call(U, L, te, le, q, F));
  }
  function k(F) {
    return typeof F == "string" && F && ["'", '"'].indexOf(F.charAt(0)) !== -1;
  }
  function _(F) {
    return F.match(o) && !F.match(i);
  }
  function D(F) {
    return a.test(F);
  }
  function M(F) {
    return !k(F) && (_(F) || D(F));
  }
  return lu;
}
var gr = S0(), au, Ah;
function T0() {
  if (Ah) return au;
  Ah = 1;
  const r = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, n = (g) => g.match(r) || [], i = (g) => g[0].toUpperCase() + g.slice(1), o = (g, v) => n(g).join(v).toLowerCase(), a = (g) => n(g).reduce(
    (v, x) => `${v}${v ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()}`,
    ""
  );
  return au = {
    words: n,
    upperFirst: i,
    camelCase: a,
    pascalCase: (g) => i(a(g)),
    snakeCase: (g) => o(g, "_"),
    kebabCase: (g) => o(g, "-"),
    sentenceCase: (g) => i(o(g, " ")),
    titleCase: (g) => n(g).map(i).join(" ")
  }, au;
}
var uu = T0(), Mo = { exports: {} }, Dh;
function k0() {
  if (Dh) return Mo.exports;
  Dh = 1, Mo.exports = function(a) {
    return r(n(a), a);
  }, Mo.exports.array = r;
  function r(a, c) {
    var f = a.length, h = new Array(f), p = {}, m = f, g = i(c), v = o(a);
    for (c.forEach(function(k) {
      if (!v.has(k[0]) || !v.has(k[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); m--; )
      p[m] || x(a[m], m, /* @__PURE__ */ new Set());
    return h;
    function x(k, _, D) {
      if (D.has(k)) {
        var M;
        try {
          M = ", node was:" + JSON.stringify(k);
        } catch {
          M = "";
        }
        throw new Error("Cyclic dependency" + M);
      }
      if (!v.has(k))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(k));
      if (!p[_]) {
        p[_] = !0;
        var F = g.get(k) || /* @__PURE__ */ new Set();
        if (F = Array.from(F), _ = F.length) {
          D.add(k);
          do {
            var R = F[--_];
            x(R, v.get(R), D);
          } while (_);
          D.delete(k);
        }
        h[--f] = k;
      }
    }
  }
  function n(a) {
    for (var c = /* @__PURE__ */ new Set(), f = 0, h = a.length; f < h; f++) {
      var p = a[f];
      c.add(p[0]), c.add(p[1]);
    }
    return Array.from(c);
  }
  function i(a) {
    for (var c = /* @__PURE__ */ new Map(), f = 0, h = a.length; f < h; f++) {
      var p = a[f];
      c.has(p[0]) || c.set(p[0], /* @__PURE__ */ new Set()), c.has(p[1]) || c.set(p[1], /* @__PURE__ */ new Set()), c.get(p[0]).add(p[1]);
    }
    return c;
  }
  function o(a) {
    for (var c = /* @__PURE__ */ new Map(), f = 0, h = a.length; f < h; f++)
      c.set(a[f], f);
    return c;
  }
  return Mo.exports;
}
var E0 = k0();
const C0 = /* @__PURE__ */ sl(E0), P0 = Object.prototype.toString, _0 = Error.prototype.toString, A0 = RegExp.prototype.toString, D0 = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", V0 = /^Symbol\((.*)\)(.*)$/;
function F0(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function Vh(r, n = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const i = typeof r;
  if (i === "number") return F0(r);
  if (i === "string") return n ? `"${r}"` : r;
  if (i === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (i === "symbol") return D0.call(r).replace(V0, "Symbol($1)");
  const o = P0.call(r).slice(8, -1);
  return o === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : o === "Error" || r instanceof Error ? "[" + _0.call(r) + "]" : o === "RegExp" ? A0.call(r) : null;
}
function Yn(r, n) {
  let i = Vh(r, n);
  return i !== null ? i : JSON.stringify(r, function(o, a) {
    let c = Vh(this[o], n);
    return c !== null ? c : a;
  }, 2);
}
function ym(r) {
  return r == null ? [] : [].concat(r);
}
let gm, vm, xm, O0 = /\$\{\s*(\w+)\s*\}/g;
gm = Symbol.toStringTag;
class Fh {
  constructor(n, i, o, a) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[gm] = "Error", this.name = "ValidationError", this.value = i, this.path = o, this.type = a, this.errors = [], this.inner = [], ym(n).forEach((c) => {
      if (xt.isError(c)) {
        this.errors.push(...c.errors);
        const f = c.inner.length ? c.inner : [c];
        this.inner.push(...f);
      } else
        this.errors.push(c);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
vm = Symbol.hasInstance;
xm = Symbol.toStringTag;
class xt extends Error {
  static formatError(n, i) {
    const o = i.label || i.path || "this";
    return i = Object.assign({}, i, {
      path: o,
      originalPath: i.path
    }), typeof n == "string" ? n.replace(O0, (a, c) => Yn(i[c])) : typeof n == "function" ? n(i) : n;
  }
  static isError(n) {
    return n && n.name === "ValidationError";
  }
  constructor(n, i, o, a, c) {
    const f = new Fh(n, i, o, a);
    if (c)
      return f;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[xm] = "Error", this.name = f.name, this.message = f.message, this.type = f.type, this.value = f.value, this.path = f.path, this.errors = f.errors, this.inner = f.inner, Error.captureStackTrace && Error.captureStackTrace(this, xt);
  }
  static [vm](n) {
    return Fh[Symbol.hasInstance](n) || super[Symbol.hasInstance](n);
  }
}
let un = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: r,
    type: n,
    value: i,
    originalValue: o
  }) => {
    const a = o != null && o !== i ? ` (cast from the value \`${Yn(o, !0)}\`).` : ".";
    return n !== "mixed" ? `${r} must be a \`${n}\` type, but the final value was: \`${Yn(i, !0)}\`` + a : `${r} must match the configured type. The validated value was: \`${Yn(i, !0)}\`` + a;
  }
}, At = {
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
}, Kn = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Eu = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, R0 = {
  isValue: "${path} field must be ${value}"
}, zo = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, M0 = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, N0 = {
  notType: (r) => {
    const {
      path: n,
      value: i,
      spec: o
    } = r, a = o.types.length;
    if (Array.isArray(i)) {
      if (i.length < a) return `${n} tuple value has too few items, expected a length of ${a} but got ${i.length} for value: \`${Yn(i, !0)}\``;
      if (i.length > a) return `${n} tuple value has too many items, expected a length of ${a} but got ${i.length} for value: \`${Yn(i, !0)}\``;
    }
    return xt.formatError(un.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: un,
  string: At,
  number: Kn,
  date: Eu,
  object: zo,
  array: M0,
  boolean: R0,
  tuple: N0
});
const Wu = (r) => r && r.__isYupSchema__;
class Ko {
  static fromOptions(n, i) {
    if (!i.then && !i.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: o,
      then: a,
      otherwise: c
    } = i, f = typeof o == "function" ? o : (...h) => h.every((p) => p === o);
    return new Ko(n, (h, p) => {
      var m;
      let g = f(...h) ? a : c;
      return (m = g?.(p)) != null ? m : p;
    });
  }
  constructor(n, i) {
    this.fn = void 0, this.refs = n, this.refs = n, this.fn = i;
  }
  resolve(n, i) {
    let o = this.refs.map((c) => (
      // TODO: ? operator here?
      c.getValue(i?.value, i?.parent, i?.context)
    )), a = this.fn(o, n, i);
    if (a === void 0 || // @ts-ignore this can be base
    a === n)
      return n;
    if (!Wu(a)) throw new TypeError("conditions must return a schema object");
    return a.resolve(i);
  }
}
const No = {
  context: "$",
  value: "."
};
class xr {
  constructor(n, i = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof n != "string") throw new TypeError("ref must be a string, got: " + n);
    if (this.key = n.trim(), n === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === No.context, this.isValue = this.key[0] === No.value, this.isSibling = !this.isContext && !this.isValue;
    let o = this.isContext ? No.context : this.isValue ? No.value : "";
    this.path = this.key.slice(o.length), this.getter = this.path && gr.getter(this.path, !0), this.map = i.map;
  }
  getValue(n, i, o) {
    let a = this.isContext ? o : this.isValue ? n : i;
    return this.getter && (a = this.getter(a || {})), this.map && (a = this.map(a)), a;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(n, i) {
    return this.getValue(n, i?.parent, i?.context);
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
  static isRef(n) {
    return n && n.__isYupRef;
  }
}
xr.prototype.__isYupRef = !0;
const kn = (r) => r == null;
function Jr(r) {
  function n({
    value: i,
    path: o = "",
    options: a,
    originalValue: c,
    schema: f
  }, h, p) {
    const {
      name: m,
      test: g,
      params: v,
      message: x,
      skipAbsent: k
    } = r;
    let {
      parent: _,
      context: D,
      abortEarly: M = f.spec.abortEarly,
      disableStackTrace: F = f.spec.disableStackTrace
    } = a;
    const R = {
      value: i,
      parent: _,
      context: D
    };
    function U(ye = {}) {
      const ue = wm(Object.assign({
        value: i,
        originalValue: c,
        label: f.spec.label,
        path: ye.path || o,
        spec: f.spec,
        disableStackTrace: ye.disableStackTrace || F
      }, v, ye.params), R), he = new xt(xt.formatError(ye.message || x, ue), i, ue.path, ye.type || m, ue.disableStackTrace);
      return he.params = ue, he;
    }
    const H = M ? h : p;
    let L = {
      path: o,
      parent: _,
      type: m,
      from: a.from,
      createError: U,
      resolve(ye) {
        return Sm(ye, R);
      },
      options: a,
      originalValue: c,
      schema: f
    };
    const q = (ye) => {
      xt.isError(ye) ? H(ye) : ye ? p(null) : H(U());
    }, le = (ye) => {
      xt.isError(ye) ? H(ye) : h(ye);
    };
    if (k && kn(i))
      return q(!0);
    let pe;
    try {
      var Se;
      if (pe = g.call(L, i, L), typeof ((Se = pe) == null ? void 0 : Se.then) == "function") {
        if (a.sync)
          throw new Error(`Validation test of type: "${L.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(pe).then(q, le);
      }
    } catch (ye) {
      le(ye);
      return;
    }
    q(pe);
  }
  return n.OPTIONS = r, n;
}
function wm(r, n) {
  if (!r) return r;
  for (const i of Object.keys(r))
    r[i] = Sm(r[i], n);
  return r;
}
function Sm(r, n) {
  return xr.isRef(r) ? r.getValue(n.value, n.parent, n.context) : r;
}
function L0(r, n, i, o = i) {
  let a, c, f;
  return n ? (gr.forEach(n, (h, p, m) => {
    let g = p ? h.slice(1, h.length - 1) : h;
    r = r.resolve({
      context: o,
      parent: a,
      value: i
    });
    let v = r.type === "tuple", x = m ? parseInt(g, 10) : 0;
    if (r.innerType || v) {
      if (v && !m) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${f}" must contain an index to the tuple element, e.g. "${f}[0]"`);
      if (i && x >= i.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${h}, in the path: ${n}. because there is no value at that index. `);
      a = i, i = i && i[x], r = v ? r.spec.types[x] : r.innerType;
    }
    if (!m) {
      if (!r.fields || !r.fields[g]) throw new Error(`The schema does not contain the path: ${n}. (failed at: ${f} which is a type: "${r.type}")`);
      a = i, i = i && i[g], r = r.fields[g];
    }
    c = g, f = p ? "[" + h + "]" : "." + h;
  }), {
    schema: r,
    parent: a,
    parentPath: c
  }) : {
    parent: a,
    parentPath: n,
    schema: r
  };
}
class Go extends Set {
  describe() {
    const n = [];
    for (const i of this.values())
      n.push(xr.isRef(i) ? i.describe() : i);
    return n;
  }
  resolveAll(n) {
    let i = [];
    for (const o of this.values())
      i.push(n(o));
    return i;
  }
  clone() {
    return new Go(this.values());
  }
  merge(n, i) {
    const o = this.clone();
    return n.forEach((a) => o.add(a)), i.forEach((a) => o.delete(a)), o;
  }
}
function ni(r, n = /* @__PURE__ */ new Map()) {
  if (Wu(r) || !r || typeof r != "object") return r;
  if (n.has(r)) return n.get(r);
  let i;
  if (r instanceof Date)
    i = new Date(r.getTime()), n.set(r, i);
  else if (r instanceof RegExp)
    i = new RegExp(r), n.set(r, i);
  else if (Array.isArray(r)) {
    i = new Array(r.length), n.set(r, i);
    for (let o = 0; o < r.length; o++) i[o] = ni(r[o], n);
  } else if (r instanceof Map) {
    i = /* @__PURE__ */ new Map(), n.set(r, i);
    for (const [o, a] of r.entries()) i.set(o, ni(a, n));
  } else if (r instanceof Set) {
    i = /* @__PURE__ */ new Set(), n.set(r, i);
    for (const o of r) i.add(ni(o, n));
  } else if (r instanceof Object) {
    i = {}, n.set(r, i);
    for (const [o, a] of Object.entries(r)) i[o] = ni(a, n);
  } else
    throw Error(`Unable to clone ${r}`);
  return i;
}
function j0(r) {
  if (!(r != null && r.length))
    return;
  const n = [];
  let i = "", o = !1, a = !1;
  for (let c = 0; c < r.length; c++) {
    const f = r[c];
    if (f === "[" && !a) {
      i && (n.push(...i.split(".").filter(Boolean)), i = ""), o = !0;
      continue;
    }
    if (f === "]" && !a) {
      i && (/^\d+$/.test(i) ? n.push(i) : n.push(i.replace(/^"|"$/g, "")), i = ""), o = !1;
      continue;
    }
    if (f === '"') {
      a = !a;
      continue;
    }
    if (f === "." && !o && !a) {
      i && (n.push(i), i = "");
      continue;
    }
    i += f;
  }
  return i && n.push(...i.split(".").filter(Boolean)), n;
}
function I0(r, n) {
  const i = n ? `${n}.${r.path}` : r.path;
  return r.errors.map((o) => ({
    message: o,
    path: j0(i)
  }));
}
function Tm(r, n) {
  var i;
  if (!((i = r.inner) != null && i.length) && r.errors.length)
    return I0(r, n);
  const o = n ? `${n}.${r.path}` : r.path;
  return r.inner.flatMap((a) => Tm(a, o));
}
class tn {
  constructor(n) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Go(), this._blacklist = new Go(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(un.notType);
    }), this.type = n.type, this._typeCheck = n.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, n?.spec), this.withMutation((i) => {
      i.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(n) {
    if (this._mutate)
      return n && Object.assign(this.spec, n), this;
    const i = Object.create(Object.getPrototypeOf(this));
    return i.type = this.type, i._typeCheck = this._typeCheck, i._whitelist = this._whitelist.clone(), i._blacklist = this._blacklist.clone(), i.internalTests = Object.assign({}, this.internalTests), i.exclusiveTests = Object.assign({}, this.exclusiveTests), i.deps = [...this.deps], i.conditions = [...this.conditions], i.tests = [...this.tests], i.transforms = [...this.transforms], i.spec = ni(Object.assign({}, this.spec, n)), i;
  }
  label(n) {
    let i = this.clone();
    return i.spec.label = n, i;
  }
  meta(...n) {
    if (n.length === 0) return this.spec.meta;
    let i = this.clone();
    return i.spec.meta = Object.assign(i.spec.meta || {}, n[0]), i;
  }
  withMutation(n) {
    let i = this._mutate;
    this._mutate = !0;
    let o = n(this);
    return this._mutate = i, o;
  }
  concat(n) {
    if (!n || n === this) return this;
    if (n.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${n.type}`);
    let i = this, o = n.clone();
    const a = Object.assign({}, i.spec, o.spec);
    return o.spec = a, o.internalTests = Object.assign({}, i.internalTests, o.internalTests), o._whitelist = i._whitelist.merge(n._whitelist, n._blacklist), o._blacklist = i._blacklist.merge(n._blacklist, n._whitelist), o.tests = i.tests, o.exclusiveTests = i.exclusiveTests, o.withMutation((c) => {
      n.tests.forEach((f) => {
        c.test(f.OPTIONS);
      });
    }), o.transforms = [...i.transforms, ...o.transforms], o;
  }
  isType(n) {
    return n == null ? !!(this.spec.nullable && n === null || this.spec.optional && n === void 0) : this._typeCheck(n);
  }
  resolve(n) {
    let i = this;
    if (i.conditions.length) {
      let o = i.conditions;
      i = i.clone(), i.conditions = [], i = o.reduce((a, c) => c.resolve(a, n), i), i = i.resolve(n);
    }
    return i;
  }
  resolveOptions(n) {
    var i, o, a, c;
    return Object.assign({}, n, {
      from: n.from || [],
      strict: (i = n.strict) != null ? i : this.spec.strict,
      abortEarly: (o = n.abortEarly) != null ? o : this.spec.abortEarly,
      recursive: (a = n.recursive) != null ? a : this.spec.recursive,
      disableStackTrace: (c = n.disableStackTrace) != null ? c : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(n, i = {}) {
    let o = this.resolve(Object.assign({}, i, {
      value: n
      // parent: options.parent,
      // context: options.context,
    })), a = i.assert === "ignore-optionality", c = o._cast(n, i);
    if (i.assert !== !1 && !o.isType(c)) {
      if (a && kn(c))
        return c;
      let f = Yn(n), h = Yn(c);
      throw new TypeError(`The value of ${i.path || "field"} could not be cast to a value that satisfies the schema type: "${o.type}". 

attempted value: ${f} 
` + (h !== f ? `result of cast: ${h}` : ""));
    }
    return c;
  }
  _cast(n, i) {
    let o = n === void 0 ? n : this.transforms.reduce((a, c) => c.call(this, a, n, this, i), n);
    return o === void 0 && (o = this.getDefault(i)), o;
  }
  _validate(n, i = {}, o, a) {
    let {
      path: c,
      originalValue: f = n,
      strict: h = this.spec.strict
    } = i, p = n;
    h || (p = this._cast(p, Object.assign({
      assert: !1
    }, i)));
    let m = [];
    for (let g of Object.values(this.internalTests))
      g && m.push(g);
    this.runTests({
      path: c,
      value: p,
      originalValue: f,
      options: i,
      tests: m
    }, o, (g) => {
      if (g.length)
        return a(g, p);
      this.runTests({
        path: c,
        value: p,
        originalValue: f,
        options: i,
        tests: this.tests
      }, o, a);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(n, i, o) {
    let a = !1, {
      tests: c,
      value: f,
      originalValue: h,
      path: p,
      options: m
    } = n, g = (D) => {
      a || (a = !0, i(D, f));
    }, v = (D) => {
      a || (a = !0, o(D, f));
    }, x = c.length, k = [];
    if (!x) return v([]);
    let _ = {
      value: f,
      originalValue: h,
      path: p,
      options: m,
      schema: this
    };
    for (let D = 0; D < c.length; D++) {
      const M = c[D];
      M(_, g, function(R) {
        R && (Array.isArray(R) ? k.push(...R) : k.push(R)), --x <= 0 && v(k);
      });
    }
  }
  asNestedTest({
    key: n,
    index: i,
    parent: o,
    parentPath: a,
    originalParent: c,
    options: f
  }) {
    const h = n ?? i;
    if (h == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const p = typeof h == "number";
    let m = o[h];
    const g = Object.assign({}, f, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: o,
      value: m,
      originalValue: c[h],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [p ? "index" : "key"]: h,
      path: p || h.includes(".") ? `${a || ""}[${p ? h : `"${h}"`}]` : (a ? `${a}.` : "") + n
    });
    return (v, x, k) => this.resolve(g)._validate(m, g, x, k);
  }
  validate(n, i) {
    var o;
    let a = this.resolve(Object.assign({}, i, {
      value: n
    })), c = (o = i?.disableStackTrace) != null ? o : a.spec.disableStackTrace;
    return new Promise((f, h) => a._validate(n, i, (p, m) => {
      xt.isError(p) && (p.value = m), h(p);
    }, (p, m) => {
      p.length ? h(new xt(p, m, void 0, void 0, c)) : f(m);
    }));
  }
  validateSync(n, i) {
    var o;
    let a = this.resolve(Object.assign({}, i, {
      value: n
    })), c, f = (o = i?.disableStackTrace) != null ? o : a.spec.disableStackTrace;
    return a._validate(n, Object.assign({}, i, {
      sync: !0
    }), (h, p) => {
      throw xt.isError(h) && (h.value = p), h;
    }, (h, p) => {
      if (h.length) throw new xt(h, n, void 0, void 0, f);
      c = p;
    }), c;
  }
  isValid(n, i) {
    return this.validate(n, i).then(() => !0, (o) => {
      if (xt.isError(o)) return !1;
      throw o;
    });
  }
  isValidSync(n, i) {
    try {
      return this.validateSync(n, i), !0;
    } catch (o) {
      if (xt.isError(o)) return !1;
      throw o;
    }
  }
  _getDefault(n) {
    let i = this.spec.default;
    return i == null ? i : typeof i == "function" ? i.call(this, n) : ni(i);
  }
  getDefault(n) {
    return this.resolve(n || {})._getDefault(n);
  }
  default(n) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: n
    });
  }
  strict(n = !0) {
    return this.clone({
      strict: n
    });
  }
  nullability(n, i) {
    const o = this.clone({
      nullable: n
    });
    return o.internalTests.nullable = Jr({
      message: i,
      name: "nullable",
      test(a) {
        return a === null ? this.schema.spec.nullable : !0;
      }
    }), o;
  }
  optionality(n, i) {
    const o = this.clone({
      optional: n
    });
    return o.internalTests.optionality = Jr({
      message: i,
      name: "optionality",
      test(a) {
        return a === void 0 ? this.schema.spec.optional : !0;
      }
    }), o;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(n = un.defined) {
    return this.optionality(!1, n);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(n = un.notNull) {
    return this.nullability(!1, n);
  }
  required(n = un.required) {
    return this.clone().withMutation((i) => i.nonNullable(n).defined(n));
  }
  notRequired() {
    return this.clone().withMutation((n) => n.nullable().optional());
  }
  transform(n) {
    let i = this.clone();
    return i.transforms.push(n), i;
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
  test(...n) {
    let i;
    if (n.length === 1 ? typeof n[0] == "function" ? i = {
      test: n[0]
    } : i = n[0] : n.length === 2 ? i = {
      name: n[0],
      test: n[1]
    } : i = {
      name: n[0],
      message: n[1],
      test: n[2]
    }, i.message === void 0 && (i.message = un.default), typeof i.test != "function") throw new TypeError("`test` is a required parameters");
    let o = this.clone(), a = Jr(i), c = i.exclusive || i.name && o.exclusiveTests[i.name] === !0;
    if (i.exclusive && !i.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return i.name && (o.exclusiveTests[i.name] = !!i.exclusive), o.tests = o.tests.filter((f) => !(f.OPTIONS.name === i.name && (c || f.OPTIONS.test === a.OPTIONS.test))), o.tests.push(a), o;
  }
  when(n, i) {
    !Array.isArray(n) && typeof n != "string" && (i = n, n = ".");
    let o = this.clone(), a = ym(n).map((c) => new xr(c));
    return a.forEach((c) => {
      c.isSibling && o.deps.push(c.key);
    }), o.conditions.push(typeof i == "function" ? new Ko(a, i) : Ko.fromOptions(a, i)), o;
  }
  typeError(n) {
    let i = this.clone();
    return i.internalTests.typeError = Jr({
      message: n,
      name: "typeError",
      skipAbsent: !0,
      test(o) {
        return this.schema._typeCheck(o) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), i;
  }
  oneOf(n, i = un.oneOf) {
    let o = this.clone();
    return n.forEach((a) => {
      o._whitelist.add(a), o._blacklist.delete(a);
    }), o.internalTests.whiteList = Jr({
      message: i,
      name: "oneOf",
      skipAbsent: !0,
      test(a) {
        let c = this.schema._whitelist, f = c.resolveAll(this.resolve);
        return f.includes(a) ? !0 : this.createError({
          params: {
            values: Array.from(c).join(", "),
            resolved: f
          }
        });
      }
    }), o;
  }
  notOneOf(n, i = un.notOneOf) {
    let o = this.clone();
    return n.forEach((a) => {
      o._blacklist.add(a), o._whitelist.delete(a);
    }), o.internalTests.blacklist = Jr({
      message: i,
      name: "notOneOf",
      test(a) {
        let c = this.schema._blacklist, f = c.resolveAll(this.resolve);
        return f.includes(a) ? this.createError({
          params: {
            values: Array.from(c).join(", "),
            resolved: f
          }
        }) : !0;
      }
    }), o;
  }
  strip(n = !0) {
    let i = this.clone();
    return i.spec.strip = n, i;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(n) {
    const i = (n ? this.resolve(n) : this).clone(), {
      label: o,
      meta: a,
      optional: c,
      nullable: f
    } = i.spec;
    return {
      meta: a,
      label: o,
      optional: c,
      nullable: f,
      default: i.getDefault(n),
      type: i.type,
      oneOf: i._whitelist.describe(),
      notOneOf: i._blacklist.describe(),
      tests: i.tests.filter((p, m, g) => g.findIndex((v) => v.OPTIONS.name === p.OPTIONS.name) === m).map((p) => {
        const m = p.OPTIONS.params && n ? wm(Object.assign({}, p.OPTIONS.params), n) : p.OPTIONS.params;
        return {
          name: p.OPTIONS.name,
          params: m
        };
      })
    };
  }
  get "~standard"() {
    const n = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(o) {
        try {
          return {
            value: await n.validate(o, {
              abortEarly: !1
            })
          };
        } catch (a) {
          if (a instanceof xt)
            return {
              issues: Tm(a)
            };
          throw a;
        }
      }
    };
  }
}
tn.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) tn.prototype[`${r}At`] = function(n, i, o = {}) {
  const {
    parent: a,
    parentPath: c,
    schema: f
  } = L0(this, n, i, o.context);
  return f[r](a && a[c], Object.assign({}, o, {
    parent: a,
    path: n
  }));
};
for (const r of ["equals", "is"]) tn.prototype[r] = tn.prototype.oneOf;
for (const r of ["not", "nope"]) tn.prototype[r] = tn.prototype.notOneOf;
const b0 = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function z0(r) {
  const n = Cu(r);
  if (!n) return Date.parse ? Date.parse(r) : Number.NaN;
  if (n.z === void 0 && n.plusMinus === void 0)
    return new Date(n.year, n.month, n.day, n.hour, n.minute, n.second, n.millisecond).valueOf();
  let i = 0;
  return n.z !== "Z" && n.plusMinus !== void 0 && (i = n.hourOffset * 60 + n.minuteOffset, n.plusMinus === "+" && (i = 0 - i)), Date.UTC(n.year, n.month, n.day, n.hour, n.minute + i, n.second, n.millisecond);
}
function Cu(r) {
  var n, i;
  const o = b0.exec(r);
  return o ? {
    year: Sn(o[1]),
    month: Sn(o[2], 1) - 1,
    day: Sn(o[3], 1),
    hour: Sn(o[4]),
    minute: Sn(o[5]),
    second: Sn(o[6]),
    millisecond: o[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Sn(o[7].substring(0, 3))
    ) : 0,
    precision: (n = (i = o[7]) == null ? void 0 : i.length) != null ? n : void 0,
    z: o[8] || void 0,
    plusMinus: o[9] || void 0,
    hourOffset: Sn(o[10]),
    minuteOffset: Sn(o[11])
  } : null;
}
function Sn(r, n = 0) {
  return Number(r) || n;
}
let U0 = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), B0 = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), $0 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, W0 = "^\\d{4}-\\d{2}-\\d{2}", H0 = "\\d{2}:\\d{2}:\\d{2}", K0 = "(([+-]\\d{2}(:?\\d{2})?)|Z)", G0 = new RegExp(`${W0}T${H0}(\\.\\d+)?${K0}$`), Q0 = (r) => kn(r) || r === r.trim(), Y0 = {}.toString();
function Uo() {
  return new km();
}
class km extends tn {
  constructor() {
    super({
      type: "string",
      check(n) {
        return n instanceof String && (n = n.valueOf()), typeof n == "string";
      }
    }), this.withMutation(() => {
      this.transform((n, i) => {
        if (!this.spec.coerce || this.isType(n) || Array.isArray(n)) return n;
        const o = n != null && n.toString ? n.toString() : n;
        return o === Y0 ? n : o;
      });
    });
  }
  required(n) {
    return super.required(n).withMutation((i) => i.test({
      message: n || un.required,
      name: "required",
      skipAbsent: !0,
      test: (o) => !!o.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((n) => (n.tests = n.tests.filter((i) => i.OPTIONS.name !== "required"), n));
  }
  length(n, i = At.length) {
    return this.test({
      message: i,
      name: "length",
      exclusive: !0,
      params: {
        length: n
      },
      skipAbsent: !0,
      test(o) {
        return o.length === this.resolve(n);
      }
    });
  }
  min(n, i = At.min) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        min: n
      },
      skipAbsent: !0,
      test(o) {
        return o.length >= this.resolve(n);
      }
    });
  }
  max(n, i = At.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: i,
      params: {
        max: n
      },
      skipAbsent: !0,
      test(o) {
        return o.length <= this.resolve(n);
      }
    });
  }
  matches(n, i) {
    let o = !1, a, c;
    return i && (typeof i == "object" ? {
      excludeEmptyString: o = !1,
      message: a,
      name: c
    } = i : a = i), this.test({
      name: c || "matches",
      message: a || At.matches,
      params: {
        regex: n
      },
      skipAbsent: !0,
      test: (f) => f === "" && o || f.search(n) !== -1
    });
  }
  email(n = At.email) {
    return this.matches(U0, {
      name: "email",
      message: n,
      excludeEmptyString: !0
    });
  }
  url(n = At.url) {
    return this.matches(B0, {
      name: "url",
      message: n,
      excludeEmptyString: !0
    });
  }
  uuid(n = At.uuid) {
    return this.matches($0, {
      name: "uuid",
      message: n,
      excludeEmptyString: !1
    });
  }
  datetime(n) {
    let i = "", o, a;
    return n && (typeof n == "object" ? {
      message: i = "",
      allowOffset: o = !1,
      precision: a = void 0
    } = n : i = n), this.matches(G0, {
      name: "datetime",
      message: i || At.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: i || At.datetime_offset,
      params: {
        allowOffset: o
      },
      skipAbsent: !0,
      test: (c) => {
        if (!c || o) return !0;
        const f = Cu(c);
        return f ? !!f.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: i || At.datetime_precision,
      params: {
        precision: a
      },
      skipAbsent: !0,
      test: (c) => {
        if (!c || a == null) return !0;
        const f = Cu(c);
        return f ? f.precision === a : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((n) => n === null ? "" : n);
  }
  trim(n = At.trim) {
    return this.transform((i) => i != null ? i.trim() : i).test({
      message: n,
      name: "trim",
      test: Q0
    });
  }
  lowercase(n = At.lowercase) {
    return this.transform((i) => kn(i) ? i : i.toLowerCase()).test({
      message: n,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => kn(i) || i === i.toLowerCase()
    });
  }
  uppercase(n = At.uppercase) {
    return this.transform((i) => kn(i) ? i : i.toUpperCase()).test({
      message: n,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => kn(i) || i === i.toUpperCase()
    });
  }
}
Uo.prototype = km.prototype;
let q0 = (r) => r != +r;
function Em() {
  return new Cm();
}
class Cm extends tn {
  constructor() {
    super({
      type: "number",
      check(n) {
        return n instanceof Number && (n = n.valueOf()), typeof n == "number" && !q0(n);
      }
    }), this.withMutation(() => {
      this.transform((n, i) => {
        if (!this.spec.coerce) return n;
        let o = n;
        if (typeof o == "string") {
          if (o = o.replace(/\s/g, ""), o === "") return NaN;
          o = +o;
        }
        return this.isType(o) || o === null ? o : parseFloat(o);
      });
    });
  }
  min(n, i = Kn.min) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        min: n
      },
      skipAbsent: !0,
      test(o) {
        return o >= this.resolve(n);
      }
    });
  }
  max(n, i = Kn.max) {
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: {
        max: n
      },
      skipAbsent: !0,
      test(o) {
        return o <= this.resolve(n);
      }
    });
  }
  lessThan(n, i = Kn.lessThan) {
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: {
        less: n
      },
      skipAbsent: !0,
      test(o) {
        return o < this.resolve(n);
      }
    });
  }
  moreThan(n, i = Kn.moreThan) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        more: n
      },
      skipAbsent: !0,
      test(o) {
        return o > this.resolve(n);
      }
    });
  }
  positive(n = Kn.positive) {
    return this.moreThan(0, n);
  }
  negative(n = Kn.negative) {
    return this.lessThan(0, n);
  }
  integer(n = Kn.integer) {
    return this.test({
      name: "integer",
      message: n,
      skipAbsent: !0,
      test: (i) => Number.isInteger(i)
    });
  }
  truncate() {
    return this.transform((n) => kn(n) ? n : n | 0);
  }
  round(n) {
    var i;
    let o = ["ceil", "floor", "round", "trunc"];
    if (n = ((i = n) == null ? void 0 : i.toLowerCase()) || "round", n === "trunc") return this.truncate();
    if (o.indexOf(n.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + o.join(", "));
    return this.transform((a) => kn(a) ? a : Math[n](a));
  }
}
Em.prototype = Cm.prototype;
let X0 = /* @__PURE__ */ new Date(""), Z0 = (r) => Object.prototype.toString.call(r) === "[object Date]";
class Hu extends tn {
  constructor() {
    super({
      type: "date",
      check(n) {
        return Z0(n) && !isNaN(n.getTime());
      }
    }), this.withMutation(() => {
      this.transform((n, i) => !this.spec.coerce || this.isType(n) || n === null ? n : (n = z0(n), isNaN(n) ? Hu.INVALID_DATE : new Date(n)));
    });
  }
  prepareParam(n, i) {
    let o;
    if (xr.isRef(n))
      o = n;
    else {
      let a = this.cast(n);
      if (!this._typeCheck(a)) throw new TypeError(`\`${i}\` must be a Date or a value that can be \`cast()\` to a Date`);
      o = a;
    }
    return o;
  }
  min(n, i = Eu.min) {
    let o = this.prepareParam(n, "min");
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        min: n
      },
      skipAbsent: !0,
      test(a) {
        return a >= this.resolve(o);
      }
    });
  }
  max(n, i = Eu.max) {
    let o = this.prepareParam(n, "max");
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: {
        max: n
      },
      skipAbsent: !0,
      test(a) {
        return a <= this.resolve(o);
      }
    });
  }
}
Hu.INVALID_DATE = X0;
function J0(r, n = []) {
  let i = [], o = /* @__PURE__ */ new Set(), a = new Set(n.map(([f, h]) => `${f}-${h}`));
  function c(f, h) {
    let p = gr.split(f)[0];
    o.add(p), a.has(`${h}-${p}`) || i.push([h, p]);
  }
  for (const f of Object.keys(r)) {
    let h = r[f];
    o.add(f), xr.isRef(h) && h.isSibling ? c(h.path, f) : Wu(h) && "deps" in h && h.deps.forEach((p) => c(p, f));
  }
  return C0.array(Array.from(o), i).reverse();
}
function Oh(r, n) {
  let i = 1 / 0;
  return r.some((o, a) => {
    var c;
    if ((c = n.path) != null && c.includes(o))
      return i = a, !0;
  }), i;
}
function Pm(r) {
  return (n, i) => Oh(r, n) - Oh(r, i);
}
const ex = (r, n, i) => {
  if (typeof r != "string")
    return r;
  let o = r;
  try {
    o = JSON.parse(r);
  } catch {
  }
  return i.isType(o) ? o : r;
};
function Bo(r) {
  if ("fields" in r) {
    const n = {};
    for (const [i, o] of Object.entries(r.fields))
      n[i] = Bo(o);
    return r.setFields(n);
  }
  if (r.type === "array") {
    const n = r.optional();
    return n.innerType && (n.innerType = Bo(n.innerType)), n;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(Bo)
  }) : "optional" in r ? r.optional() : r;
}
const tx = (r, n) => {
  const i = [...gr.normalizePath(n)];
  if (i.length === 1) return i[0] in r;
  let o = i.pop(), a = gr.getter(gr.join(i), !0)(r);
  return !!(a && o in a);
};
let Rh = (r) => Object.prototype.toString.call(r) === "[object Object]";
function Mh(r, n) {
  let i = Object.keys(r.fields);
  return Object.keys(n).filter((o) => i.indexOf(o) === -1);
}
const nx = Pm([]);
function _m(r) {
  return new Am(r);
}
class Am extends tn {
  constructor(n) {
    super({
      type: "object",
      check(i) {
        return Rh(i) || typeof i == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = nx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      n && this.shape(n);
    });
  }
  _cast(n, i = {}) {
    var o;
    let a = super._cast(n, i);
    if (a === void 0) return this.getDefault(i);
    if (!this._typeCheck(a)) return a;
    let c = this.fields, f = (o = i.stripUnknown) != null ? o : this.spec.noUnknown, h = [].concat(this._nodes, Object.keys(a).filter((v) => !this._nodes.includes(v))), p = {}, m = Object.assign({}, i, {
      parent: p,
      __validating: i.__validating || !1
    }), g = !1;
    for (const v of h) {
      let x = c[v], k = v in a, _ = a[v];
      if (x) {
        let D;
        m.path = (i.path ? `${i.path}.` : "") + v, x = x.resolve({
          value: _,
          context: i.context,
          parent: p
        });
        let M = x instanceof tn ? x.spec : void 0, F = M?.strict;
        if (M != null && M.strip) {
          g = g || v in a;
          continue;
        }
        D = !i.__validating || !F ? x.cast(_, m) : _, D !== void 0 && (p[v] = D);
      } else k && !f && (p[v] = _);
      (k !== v in p || p[v] !== _) && (g = !0);
    }
    return g ? p : a;
  }
  _validate(n, i = {}, o, a) {
    let {
      from: c = [],
      originalValue: f = n,
      recursive: h = this.spec.recursive
    } = i;
    i.from = [{
      schema: this,
      value: f
    }, ...c], i.__validating = !0, i.originalValue = f, super._validate(n, i, o, (p, m) => {
      if (!h || !Rh(m)) {
        a(p, m);
        return;
      }
      f = f || m;
      let g = [];
      for (let v of this._nodes) {
        let x = this.fields[v];
        !x || xr.isRef(x) || g.push(x.asNestedTest({
          options: i,
          key: v,
          parent: m,
          parentPath: i.path,
          originalParent: f
        }));
      }
      this.runTests({
        tests: g,
        value: m,
        originalValue: f,
        options: i
      }, o, (v) => {
        a(v.sort(this._sortErrors).concat(p), m);
      });
    });
  }
  clone(n) {
    const i = super.clone(n);
    return i.fields = Object.assign({}, this.fields), i._nodes = this._nodes, i._excludedEdges = this._excludedEdges, i._sortErrors = this._sortErrors, i;
  }
  concat(n) {
    let i = super.concat(n), o = i.fields;
    for (let [a, c] of Object.entries(this.fields)) {
      const f = o[a];
      o[a] = f === void 0 ? c : f;
    }
    return i.withMutation((a) => (
      // XXX: excludes here is wrong
      a.setFields(o, [...this._excludedEdges, ...n._excludedEdges])
    ));
  }
  _getDefault(n) {
    if ("default" in this.spec)
      return super._getDefault(n);
    if (!this._nodes.length)
      return;
    let i = {};
    return this._nodes.forEach((o) => {
      var a;
      const c = this.fields[o];
      let f = n;
      (a = f) != null && a.value && (f = Object.assign({}, f, {
        parent: f.value,
        value: f.value[o]
      })), i[o] = c && "getDefault" in c ? c.getDefault(f) : void 0;
    }), i;
  }
  setFields(n, i) {
    let o = this.clone();
    return o.fields = n, o._nodes = J0(n, i), o._sortErrors = Pm(Object.keys(n)), i && (o._excludedEdges = i), o;
  }
  shape(n, i = []) {
    return this.clone().withMutation((o) => {
      let a = o._excludedEdges;
      return i.length && (Array.isArray(i[0]) || (i = [i]), a = [...o._excludedEdges, ...i]), o.setFields(Object.assign(o.fields, n), a);
    });
  }
  partial() {
    const n = {};
    for (const [i, o] of Object.entries(this.fields))
      n[i] = "optional" in o && o.optional instanceof Function ? o.optional() : o;
    return this.setFields(n);
  }
  deepPartial() {
    return Bo(this);
  }
  pick(n) {
    const i = {};
    for (const o of n)
      this.fields[o] && (i[o] = this.fields[o]);
    return this.setFields(i, this._excludedEdges.filter(([o, a]) => n.includes(o) && n.includes(a)));
  }
  omit(n) {
    const i = [];
    for (const o of Object.keys(this.fields))
      n.includes(o) || i.push(o);
    return this.pick(i);
  }
  from(n, i, o) {
    let a = gr.getter(n, !0);
    return this.transform((c) => {
      if (!c) return c;
      let f = c;
      return tx(c, n) && (f = Object.assign({}, c), o || delete f[n], f[i] = a(c)), f;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(ex);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(n) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: n || zo.exact,
      test(i) {
        if (i == null) return !0;
        const o = Mh(this.schema, i);
        return o.length === 0 || this.createError({
          params: {
            properties: o.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(n = !0, i = zo.noUnknown) {
    typeof n != "boolean" && (i = n, n = !0);
    let o = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: i,
      test(a) {
        if (a == null) return !0;
        const c = Mh(this.schema, a);
        return !n || c.length === 0 || this.createError({
          params: {
            unknown: c.join(", ")
          }
        });
      }
    });
    return o.spec.noUnknown = n, o;
  }
  unknown(n = !0, i = zo.noUnknown) {
    return this.noUnknown(!n, i);
  }
  transformKeys(n) {
    return this.transform((i) => {
      if (!i) return i;
      const o = {};
      for (const a of Object.keys(i)) o[n(a)] = i[a];
      return o;
    });
  }
  camelCase() {
    return this.transformKeys(uu.camelCase);
  }
  snakeCase() {
    return this.transformKeys(uu.snakeCase);
  }
  constantCase() {
    return this.transformKeys((n) => uu.snakeCase(n).toUpperCase());
  }
  describe(n) {
    const i = (n ? this.resolve(n) : this).clone(), o = super.describe(n);
    o.fields = {};
    for (const [c, f] of Object.entries(i.fields)) {
      var a;
      let h = n;
      (a = h) != null && a.value && (h = Object.assign({}, h, {
        parent: h.value,
        value: h.value[c]
      })), o.fields[c] = f.describe(h);
    }
    return o;
  }
}
_m.prototype = Am.prototype;
const rx = _m({
  firstName: Uo().required("This field is required"),
  lastName: Uo().required("This field is required"),
  age: Em().min(0).positive().max(125).required("This field is required"),
  email: Uo().email()
});
function ix(r, n) {
  const i = {};
  return r.username ? r.username.toLowerCase().includes(n.ContactInfo.firstName.toLowerCase()) || (i.username = `Username should contain your first name (${n.ContactInfo.firstName})`) : i.username = "This field is required", i;
}
var vs = (r) => r.type === "checkbox", mr = (r) => r instanceof Date, Dt = (r) => r == null;
const Dm = (r) => typeof r == "object";
var Ze = (r) => !Dt(r) && !Array.isArray(r) && Dm(r) && !mr(r), sx = (r) => Ze(r) && r.target ? vs(r.target) ? r.target.checked : r.target.value : r, ox = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, lx = (r, n) => r.has(ox(n)), ax = (r) => {
  const n = r.constructor && r.constructor.prototype;
  return Ze(n) && n.hasOwnProperty("isPrototypeOf");
}, Ku = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function it(r) {
  let n;
  const i = Array.isArray(r), o = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date)
    n = new Date(r);
  else if (!(Ku && (r instanceof Blob || o)) && (i || Ze(r)))
    if (n = i ? [] : Object.create(Object.getPrototypeOf(r)), !i && !ax(r))
      n = r;
    else
      for (const a in r)
        r.hasOwnProperty(a) && (n[a] = it(r[a]));
  else
    return r;
  return n;
}
var ll = (r) => /^\w*$/.test(r), Ye = (r) => r === void 0, Gu = (r) => Array.isArray(r) ? r.filter(Boolean) : [], Qu = (r) => Gu(r.replace(/["|']|\]/g, "").split(/\.|\[/)), re = (r, n, i) => {
  if (!n || !Ze(r))
    return i;
  const o = (ll(n) ? [n] : Qu(n)).reduce((a, c) => Dt(a) ? a : a[c], r);
  return Ye(o) || o === r ? Ye(r[n]) ? i : r[n] : o;
}, cn = (r) => typeof r == "boolean", Me = (r, n, i) => {
  let o = -1;
  const a = ll(n) ? [n] : Qu(n), c = a.length, f = c - 1;
  for (; ++o < c; ) {
    const h = a[o];
    let p = i;
    if (o !== f) {
      const m = r[h];
      p = Ze(m) || Array.isArray(m) ? m : isNaN(+a[o + 1]) ? {} : [];
    }
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return;
    r[h] = p, r = r[h];
  }
};
const Nh = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, Jt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Tn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Yu = We.createContext(null);
Yu.displayName = "HookFormContext";
const qu = () => We.useContext(Yu), ux = (r) => {
  const { children: n, ...i } = r;
  return We.createElement(Yu.Provider, { value: i }, n);
};
var cx = (r, n, i, o = !0) => {
  const a = {
    defaultValues: n._defaultValues
  };
  for (const c in r)
    Object.defineProperty(a, c, {
      get: () => {
        const f = c;
        return n._proxyFormState[f] !== Jt.all && (n._proxyFormState[f] = !o || Jt.all), r[f];
      }
    });
  return a;
};
const fx = typeof window < "u" ? We.useLayoutEffect : We.useEffect;
var Mt = (r) => typeof r == "string", dx = (r, n, i, o, a) => Mt(r) ? (o && n.watch.add(r), re(i, r, a)) : Array.isArray(r) ? r.map((c) => (o && n.watch.add(c), re(i, c))) : (o && (n.watchAll = !0), i), Pu = (r) => Dt(r) || !Dm(r);
function Qn(r, n, i = /* @__PURE__ */ new WeakSet()) {
  if (Pu(r) || Pu(n))
    return Object.is(r, n);
  if (mr(r) && mr(n))
    return r.getTime() === n.getTime();
  const o = Object.keys(r), a = Object.keys(n);
  if (o.length !== a.length)
    return !1;
  if (i.has(r) || i.has(n))
    return !0;
  i.add(r), i.add(n);
  for (const c of o) {
    const f = r[c];
    if (!a.includes(c))
      return !1;
    if (c !== "ref") {
      const h = n[c];
      if (mr(f) && mr(h) || Ze(f) && Ze(h) || Array.isArray(f) && Array.isArray(h) ? !Qn(f, h, i) : !Object.is(f, h))
        return !1;
    }
  }
  return !0;
}
var Vm = (r, n, i, o, a) => n ? {
  ...i[r],
  types: {
    ...i[r] && i[r].types ? i[r].types : {},
    [o]: a || !0
  }
} : {}, ls = (r) => Array.isArray(r) ? r : [r], Lh = () => {
  let r = [];
  return {
    get observers() {
      return r;
    },
    next: (a) => {
      for (const c of r)
        c.next && c.next(a);
    },
    subscribe: (a) => (r.push(a), {
      unsubscribe: () => {
        r = r.filter((c) => c !== a);
      }
    }),
    unsubscribe: () => {
      r = [];
    }
  };
};
function Fm(r, n) {
  const i = {};
  for (const o in r)
    if (r.hasOwnProperty(o)) {
      const a = r[o], c = n[o];
      if (a && Ze(a) && c) {
        const f = Fm(a, c);
        Ze(f) && (i[o] = f);
      } else r[o] && (i[o] = c);
    }
  return i;
}
var vt = (r) => Ze(r) && !Object.keys(r).length, Xu = (r) => r.type === "file", en = (r) => typeof r == "function", Qo = (r) => {
  if (!Ku)
    return !1;
  const n = r ? r.ownerDocument : 0;
  return r instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, Om = (r) => r.type === "select-multiple", Zu = (r) => r.type === "radio", hx = (r) => Zu(r) || vs(r), cu = (r) => Qo(r) && r.isConnected;
function px(r, n) {
  const i = n.slice(0, -1).length;
  let o = 0;
  for (; o < i; )
    r = Ye(r) ? o++ : r[n[o++]];
  return r;
}
function mx(r) {
  for (const n in r)
    if (r.hasOwnProperty(n) && !Ye(r[n]))
      return !1;
  return !0;
}
function Xe(r, n) {
  const i = Array.isArray(n) ? n : ll(n) ? [n] : Qu(n), o = i.length === 1 ? r : px(r, i), a = i.length - 1, c = i[a];
  return o && delete o[c], a !== 0 && (Ze(o) && vt(o) || Array.isArray(o) && mx(o)) && Xe(r, i.slice(0, -1)), r;
}
var yx = (r) => {
  for (const n in r)
    if (en(r[n]))
      return !0;
  return !1;
};
function Rm(r) {
  return Array.isArray(r) || Ze(r) && !yx(r);
}
function _u(r, n = {}) {
  for (const i in r) {
    const o = r[i];
    Rm(o) ? (n[i] = Array.isArray(o) ? [] : {}, _u(o, n[i])) : Ye(o) || (n[i] = !0);
  }
  return n;
}
function ti(r, n, i) {
  i || (i = _u(n));
  for (const o in r) {
    const a = r[o];
    if (Rm(a))
      Ye(n) || Pu(i[o]) ? i[o] = _u(a, Array.isArray(a) ? [] : {}) : ti(a, Dt(n) ? {} : n[o], i[o]);
    else {
      const c = n[o];
      i[o] = !Qn(a, c);
    }
  }
  return i;
}
const jh = {
  value: !1,
  isValid: !1
}, Ih = { value: !0, isValid: !0 };
var Mm = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const n = r.filter((i) => i && i.checked && !i.disabled).map((i) => i.value);
      return { value: n, isValid: !!n.length };
    }
    return r[0].checked && !r[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      r[0].attributes && !Ye(r[0].attributes.value) ? Ye(r[0].value) || r[0].value === "" ? Ih : { value: r[0].value, isValid: !0 } : Ih
    ) : jh;
  }
  return jh;
}, Nm = (r, { valueAsNumber: n, valueAsDate: i, setValueAs: o }) => Ye(r) ? r : n ? r === "" ? NaN : r && +r : i && Mt(r) ? new Date(r) : o ? o(r) : r;
const bh = {
  isValid: !1,
  value: null
};
var Lm = (r) => Array.isArray(r) ? r.reduce((n, i) => i && i.checked && !i.disabled ? {
  isValid: !0,
  value: i.value
} : n, bh) : bh;
function zh(r) {
  const n = r.ref;
  return Xu(n) ? n.files : Zu(n) ? Lm(r.refs).value : Om(n) ? [...n.selectedOptions].map(({ value: i }) => i) : vs(n) ? Mm(r.refs).value : Nm(Ye(n.value) ? r.ref.value : n.value, r);
}
var gx = (r, n, i, o) => {
  const a = {};
  for (const c of r) {
    const f = re(n, c);
    f && Me(a, c, f._f);
  }
  return {
    criteriaMode: i,
    names: [...r],
    fields: a,
    shouldUseNativeValidation: o
  };
}, Yo = (r) => r instanceof RegExp, es = (r) => Ye(r) ? r : Yo(r) ? r.source : Ze(r) ? Yo(r.value) ? r.value.source : r.value : r, Uh = (r) => ({
  isOnSubmit: !r || r === Jt.onSubmit,
  isOnBlur: r === Jt.onBlur,
  isOnChange: r === Jt.onChange,
  isOnAll: r === Jt.all,
  isOnTouch: r === Jt.onTouched
});
const Bh = "AsyncFunction";
var vx = (r) => !!r && !!r.validate && !!(en(r.validate) && r.validate.constructor.name === Bh || Ze(r.validate) && Object.values(r.validate).find((n) => n.constructor.name === Bh)), xx = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate), $h = (r, n, i) => !i && (n.watchAll || n.watch.has(r) || [...n.watch].some((o) => r.startsWith(o) && /^\.\w+/.test(r.slice(o.length))));
const as = (r, n, i, o) => {
  for (const a of i || Object.keys(r)) {
    const c = re(r, a);
    if (c) {
      const { _f: f, ...h } = c;
      if (f) {
        if (f.refs && f.refs[0] && n(f.refs[0], a) && !o)
          return !0;
        if (f.ref && n(f.ref, f.name) && !o)
          return !0;
        if (as(h, n))
          break;
      } else if (Ze(h) && as(h, n))
        break;
    }
  }
};
function Wh(r, n, i) {
  const o = re(r, i);
  if (o || ll(i))
    return {
      error: o,
      name: i
    };
  const a = i.split(".");
  for (; a.length; ) {
    const c = a.join("."), f = re(n, c), h = re(r, c);
    if (f && !Array.isArray(f) && i !== c)
      return { name: i };
    if (h && h.type)
      return {
        name: c,
        error: h
      };
    if (h && h.root && h.root.type)
      return {
        name: `${c}.root`,
        error: h.root
      };
    a.pop();
  }
  return {
    name: i
  };
}
var wx = (r, n, i, o) => {
  i(r);
  const { name: a, ...c } = r;
  return vt(c) || Object.keys(c).length >= Object.keys(n).length || Object.keys(c).find((f) => n[f] === (!o || Jt.all));
}, Sx = (r, n, i) => !r || !n || r === n || ls(r).some((o) => o && (i ? o === n : o.startsWith(n) || n.startsWith(o))), Tx = (r, n, i, o, a) => a.isOnAll ? !1 : !i && a.isOnTouch ? !(n || r) : (i ? o.isOnBlur : a.isOnBlur) ? !r : (i ? o.isOnChange : a.isOnChange) ? r : !0, kx = (r, n) => !Gu(re(r, n)).length && Xe(r, n), Ex = (r, n, i) => {
  const o = ls(re(r, i));
  return Me(o, "root", n[i]), Me(r, i, o), r;
};
function Hh(r, n, i = "validate") {
  if (Mt(r) || Array.isArray(r) && r.every(Mt) || cn(r) && !r)
    return {
      type: i,
      message: Mt(r) ? r : "",
      ref: n
    };
}
var ei = (r) => Ze(r) && !Yo(r) ? r : {
  value: r,
  message: ""
}, Kh = async (r, n, i, o, a, c) => {
  const { ref: f, refs: h, required: p, maxLength: m, minLength: g, min: v, max: x, pattern: k, validate: _, name: D, valueAsNumber: M, mount: F } = r._f, R = re(i, D);
  if (!F || n.has(D))
    return {};
  const U = h ? h[0] : f, H = (ue) => {
    a && U.reportValidity && (U.setCustomValidity(cn(ue) ? "" : ue || ""), U.reportValidity());
  }, L = {}, q = Zu(f), le = vs(f), te = q || le, pe = (M || Xu(f)) && Ye(f.value) && Ye(R) || Qo(f) && f.value === "" || R === "" || Array.isArray(R) && !R.length, Se = Vm.bind(null, D, o, L), ye = (ue, he, xe, Fe = Tn.maxLength, Pe = Tn.minLength) => {
    const X = ue ? he : xe;
    L[D] = {
      type: ue ? Fe : Pe,
      message: X,
      ref: f,
      ...Se(ue ? Fe : Pe, X)
    };
  };
  if (c ? !Array.isArray(R) || !R.length : p && (!te && (pe || Dt(R)) || cn(R) && !R || le && !Mm(h).isValid || q && !Lm(h).isValid)) {
    const { value: ue, message: he } = Mt(p) ? { value: !!p, message: p } : ei(p);
    if (ue && (L[D] = {
      type: Tn.required,
      message: he,
      ref: U,
      ...Se(Tn.required, he)
    }, !o))
      return H(he), L;
  }
  if (!pe && (!Dt(v) || !Dt(x))) {
    let ue, he;
    const xe = ei(x), Fe = ei(v);
    if (!Dt(R) && !isNaN(R)) {
      const Pe = f.valueAsNumber || R && +R;
      Dt(xe.value) || (ue = Pe > xe.value), Dt(Fe.value) || (he = Pe < Fe.value);
    } else {
      const Pe = f.valueAsDate || new Date(R), X = (Y) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Y), j = f.type == "time", Z = f.type == "week";
      Mt(xe.value) && R && (ue = j ? X(R) > X(xe.value) : Z ? R > xe.value : Pe > new Date(xe.value)), Mt(Fe.value) && R && (he = j ? X(R) < X(Fe.value) : Z ? R < Fe.value : Pe < new Date(Fe.value));
    }
    if ((ue || he) && (ye(!!ue, xe.message, Fe.message, Tn.max, Tn.min), !o))
      return H(L[D].message), L;
  }
  if ((m || g) && !pe && (Mt(R) || c && Array.isArray(R))) {
    const ue = ei(m), he = ei(g), xe = !Dt(ue.value) && R.length > +ue.value, Fe = !Dt(he.value) && R.length < +he.value;
    if ((xe || Fe) && (ye(xe, ue.message, he.message), !o))
      return H(L[D].message), L;
  }
  if (k && !pe && Mt(R)) {
    const { value: ue, message: he } = ei(k);
    if (Yo(ue) && !R.match(ue) && (L[D] = {
      type: Tn.pattern,
      message: he,
      ref: f,
      ...Se(Tn.pattern, he)
    }, !o))
      return H(he), L;
  }
  if (_) {
    if (en(_)) {
      const ue = await _(R, i), he = Hh(ue, U);
      if (he && (L[D] = {
        ...he,
        ...Se(Tn.validate, he.message)
      }, !o))
        return H(he.message), L;
    } else if (Ze(_)) {
      let ue = {};
      for (const he in _) {
        if (!vt(ue) && !o)
          break;
        const xe = Hh(await _[he](R, i), U, he);
        xe && (ue = {
          ...xe,
          ...Se(he, xe.message)
        }, H(xe.message), o && (L[D] = ue));
      }
      if (!vt(ue) && (L[D] = {
        ref: U,
        ...ue
      }, !o))
        return L;
    }
  }
  return H(!0), L;
};
const Cx = {
  mode: Jt.onSubmit,
  reValidateMode: Jt.onChange,
  shouldFocusError: !0
};
function Px(r = {}) {
  let n = {
    ...Cx,
    ...r
  }, i = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: en(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1
  }, o = {}, a = Ze(n.defaultValues) || Ze(n.values) ? it(n.defaultValues || n.values) || {} : {}, c = n.shouldUnregister ? {} : it(a), f = {
    action: !1,
    mount: !1,
    watch: !1
  }, h = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, p, m = 0;
  const g = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let v = {
    ...g
  };
  const x = {
    array: Lh(),
    state: Lh()
  }, k = n.criteriaMode === Jt.all, _ = (S) => (A) => {
    clearTimeout(m), m = setTimeout(S, A);
  }, D = async (S) => {
    if (!n.disabled && (g.isValid || v.isValid || S)) {
      const A = n.resolver ? vt((await le()).errors) : await pe(o, !0);
      A !== i.isValid && x.state.next({
        isValid: A
      });
    }
  }, M = (S, A) => {
    !n.disabled && (g.isValidating || g.validatingFields || v.isValidating || v.validatingFields) && ((S || Array.from(h.mount)).forEach((N) => {
      N && (A ? Me(i.validatingFields, N, A) : Xe(i.validatingFields, N));
    }), x.state.next({
      validatingFields: i.validatingFields,
      isValidating: !vt(i.validatingFields)
    }));
  }, F = (S, A = [], N, J, K = !0, $ = !0) => {
    if (J && N && !n.disabled) {
      if (f.action = !0, $ && Array.isArray(re(o, S))) {
        const ae = N(re(o, S), J.argA, J.argB);
        K && Me(o, S, ae);
      }
      if ($ && Array.isArray(re(i.errors, S))) {
        const ae = N(re(i.errors, S), J.argA, J.argB);
        K && Me(i.errors, S, ae), kx(i.errors, S);
      }
      if ((g.touchedFields || v.touchedFields) && $ && Array.isArray(re(i.touchedFields, S))) {
        const ae = N(re(i.touchedFields, S), J.argA, J.argB);
        K && Me(i.touchedFields, S, ae);
      }
      (g.dirtyFields || v.dirtyFields) && (i.dirtyFields = ti(a, c)), x.state.next({
        name: S,
        isDirty: ye(S, A),
        dirtyFields: i.dirtyFields,
        errors: i.errors,
        isValid: i.isValid
      });
    } else
      Me(c, S, A);
  }, R = (S, A) => {
    Me(i.errors, S, A), x.state.next({
      errors: i.errors
    });
  }, U = (S) => {
    i.errors = S, x.state.next({
      errors: i.errors,
      isValid: !1
    });
  }, H = (S, A, N, J) => {
    const K = re(o, S);
    if (K) {
      const $ = re(c, S, Ye(N) ? re(a, S) : N);
      Ye($) || J && J.defaultChecked || A ? Me(c, S, A ? $ : zh(K._f)) : xe(S, $), f.mount && !f.action && D();
    }
  }, L = (S, A, N, J, K) => {
    let $ = !1, ae = !1;
    const Ee = {
      name: S
    };
    if (!n.disabled) {
      if (!N || J) {
        (g.isDirty || v.isDirty) && (ae = i.isDirty, i.isDirty = Ee.isDirty = ye(), $ = ae !== Ee.isDirty);
        const De = Qn(re(a, S), A);
        ae = !!re(i.dirtyFields, S), De ? Xe(i.dirtyFields, S) : Me(i.dirtyFields, S, !0), Ee.dirtyFields = i.dirtyFields, $ = $ || (g.dirtyFields || v.dirtyFields) && ae !== !De;
      }
      if (N) {
        const De = re(i.touchedFields, S);
        De || (Me(i.touchedFields, S, N), Ee.touchedFields = i.touchedFields, $ = $ || (g.touchedFields || v.touchedFields) && De !== N);
      }
      $ && K && x.state.next(Ee);
    }
    return $ ? Ee : {};
  }, q = (S, A, N, J) => {
    const K = re(i.errors, S), $ = (g.isValid || v.isValid) && cn(A) && i.isValid !== A;
    if (n.delayError && N ? (p = _(() => R(S, N)), p(n.delayError)) : (clearTimeout(m), p = null, N ? Me(i.errors, S, N) : Xe(i.errors, S)), (N ? !Qn(K, N) : K) || !vt(J) || $) {
      const ae = {
        ...J,
        ...$ && cn(A) ? { isValid: A } : {},
        errors: i.errors,
        name: S
      };
      i = {
        ...i,
        ...ae
      }, x.state.next(ae);
    }
  }, le = async (S) => {
    M(S, !0);
    const A = await n.resolver(c, n.context, gx(S || h.mount, o, n.criteriaMode, n.shouldUseNativeValidation));
    return M(S), A;
  }, te = async (S) => {
    const { errors: A } = await le(S);
    if (S)
      for (const N of S) {
        const J = re(A, N);
        J ? Me(i.errors, N, J) : Xe(i.errors, N);
      }
    else
      i.errors = A;
    return A;
  }, pe = async (S, A, N = {
    valid: !0
  }) => {
    for (const J in S) {
      const K = S[J];
      if (K) {
        const { _f: $, ...ae } = K;
        if ($) {
          const Ee = h.array.has($.name), De = K._f && vx(K._f);
          De && g.validatingFields && M([$.name], !0);
          const mt = await Kh(K, h.disabled, c, k, n.shouldUseNativeValidation && !A, Ee);
          if (De && g.validatingFields && M([$.name]), mt[$.name] && (N.valid = !1, A))
            break;
          !A && (re(mt, $.name) ? Ee ? Ex(i.errors, mt, $.name) : Me(i.errors, $.name, mt[$.name]) : Xe(i.errors, $.name));
        }
        !vt(ae) && await pe(ae, A, N);
      }
    }
    return N.valid;
  }, Se = () => {
    for (const S of h.unMount) {
      const A = re(o, S);
      A && (A._f.refs ? A._f.refs.every((N) => !cu(N)) : !cu(A._f.ref)) && Ve(S);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, ye = (S, A) => !n.disabled && (S && A && Me(c, S, A), !Qn(Y(), a)), ue = (S, A, N) => dx(S, h, {
    ...f.mount ? c : Ye(A) ? a : Mt(S) ? { [S]: A } : A
  }, N, A), he = (S) => Gu(re(f.mount ? c : a, S, n.shouldUnregister ? re(a, S, []) : [])), xe = (S, A, N = {}) => {
    const J = re(o, S);
    let K = A;
    if (J) {
      const $ = J._f;
      $ && (!$.disabled && Me(c, S, Nm(A, $)), K = Qo($.ref) && Dt(A) ? "" : A, Om($.ref) ? [...$.ref.options].forEach((ae) => ae.selected = K.includes(ae.value)) : $.refs ? vs($.ref) ? $.refs.forEach((ae) => {
        (!ae.defaultChecked || !ae.disabled) && (Array.isArray(K) ? ae.checked = !!K.find((Ee) => Ee === ae.value) : ae.checked = K === ae.value || !!K);
      }) : $.refs.forEach((ae) => ae.checked = ae.value === K) : Xu($.ref) ? $.ref.value = "" : ($.ref.value = K, $.ref.type || x.state.next({
        name: S,
        values: it(c)
      })));
    }
    (N.shouldDirty || N.shouldTouch) && L(S, K, N.shouldTouch, N.shouldDirty, !0), N.shouldValidate && Z(S);
  }, Fe = (S, A, N) => {
    for (const J in A) {
      if (!A.hasOwnProperty(J))
        return;
      const K = A[J], $ = S + "." + J, ae = re(o, $);
      (h.array.has(S) || Ze(K) || ae && !ae._f) && !mr(K) ? Fe($, K, N) : xe($, K, N);
    }
  }, Pe = (S, A, N = {}) => {
    const J = re(o, S), K = h.array.has(S), $ = it(A);
    Me(c, S, $), K ? (x.array.next({
      name: S,
      values: it(c)
    }), (g.isDirty || g.dirtyFields || v.isDirty || v.dirtyFields) && N.shouldDirty && x.state.next({
      name: S,
      dirtyFields: ti(a, c),
      isDirty: ye(S, $)
    })) : J && !J._f && !Dt($) ? Fe(S, $, N) : xe(S, $, N), $h(S, h) && x.state.next({ ...i, name: S }), x.state.next({
      name: f.mount ? S : void 0,
      values: it(c)
    });
  }, X = async (S) => {
    f.mount = !0;
    const A = S.target;
    let N = A.name, J = !0;
    const K = re(o, N), $ = (De) => {
      J = Number.isNaN(De) || mr(De) && isNaN(De.getTime()) || Qn(De, re(c, N, De));
    }, ae = Uh(n.mode), Ee = Uh(n.reValidateMode);
    if (K) {
      let De, mt;
      const nn = A.type ? zh(K._f) : sx(S), wt = S.type === Nh.BLUR || S.type === Nh.FOCUS_OUT, ml = !xx(K._f) && !n.resolver && !re(i.errors, N) && !K._f.deps || Tx(wt, re(i.touchedFields, N), i.isSubmitted, Ee, ae), Cr = $h(N, h, wt);
      Me(c, N, nn), wt ? (!A || !A.readOnly) && (K._f.onBlur && K._f.onBlur(S), p && p(0)) : K._f.onChange && K._f.onChange(S);
      const Pr = L(N, nn, wt), yl = !vt(Pr) || Cr;
      if (!wt && x.state.next({
        name: N,
        type: S.type,
        values: it(c)
      }), ml)
        return (g.isValid || v.isValid) && (n.mode === "onBlur" ? wt && D() : wt || D()), yl && x.state.next({ name: N, ...Cr ? {} : Pr });
      if (!wt && Cr && x.state.next({ ...i }), n.resolver) {
        const { errors: _r } = await le([N]);
        if ($(nn), J) {
          const yi = Wh(i.errors, o, N), Ar = Wh(_r, o, yi.name || N);
          De = Ar.error, N = Ar.name, mt = vt(_r);
        }
      } else
        M([N], !0), De = (await Kh(K, h.disabled, c, k, n.shouldUseNativeValidation))[N], M([N]), $(nn), J && (De ? mt = !1 : (g.isValid || v.isValid) && (mt = await pe(o, !0)));
      J && (K._f.deps && (!Array.isArray(K._f.deps) || K._f.deps.length > 0) && Z(K._f.deps), q(N, mt, De, Pr));
    }
  }, j = (S, A) => {
    if (re(i.errors, A) && S.focus)
      return S.focus(), 1;
  }, Z = async (S, A = {}) => {
    let N, J;
    const K = ls(S);
    if (n.resolver) {
      const $ = await te(Ye(S) ? S : K);
      N = vt($), J = S ? !K.some((ae) => re($, ae)) : N;
    } else S ? (J = (await Promise.all(K.map(async ($) => {
      const ae = re(o, $);
      return await pe(ae && ae._f ? { [$]: ae } : ae);
    }))).every(Boolean), !(!J && !i.isValid) && D()) : J = N = await pe(o);
    return x.state.next({
      ...!Mt(S) || (g.isValid || v.isValid) && N !== i.isValid ? {} : { name: S },
      ...n.resolver || !S ? { isValid: N } : {},
      errors: i.errors
    }), A.shouldFocus && !J && as(o, j, S ? K : h.mount), J;
  }, Y = (S, A) => {
    let N = {
      ...f.mount ? c : a
    };
    return A && (N = Fm(A.dirtyFields ? i.dirtyFields : i.touchedFields, N)), Ye(S) ? N : Mt(S) ? re(N, S) : S.map((J) => re(N, J));
  }, C = (S, A) => ({
    invalid: !!re((A || i).errors, S),
    isDirty: !!re((A || i).dirtyFields, S),
    error: re((A || i).errors, S),
    isValidating: !!re(i.validatingFields, S),
    isTouched: !!re((A || i).touchedFields, S)
  }), I = (S) => {
    S && ls(S).forEach((A) => Xe(i.errors, A)), x.state.next({
      errors: S ? i.errors : {}
    });
  }, ge = (S, A, N) => {
    const J = (re(o, S, { _f: {} })._f || {}).ref, K = re(i.errors, S) || {}, { ref: $, message: ae, type: Ee, ...De } = K;
    Me(i.errors, S, {
      ...De,
      ...A,
      ref: J
    }), x.state.next({
      name: S,
      errors: i.errors,
      isValid: !1
    }), N && N.shouldFocus && J && J.focus && J.focus();
  }, ve = (S, A) => en(S) ? x.state.subscribe({
    next: (N) => "values" in N && S(ue(void 0, A), N)
  }) : ue(S, A, !0), Te = (S) => x.state.subscribe({
    next: (A) => {
      Sx(S.name, A.name, S.exact) && wx(A, S.formState || g, mi, S.reRenderRoot) && S.callback({
        values: { ...c },
        ...i,
        ...A,
        defaultValues: a
      });
    }
  }).unsubscribe, ke = (S) => (f.mount = !0, v = {
    ...v,
    ...S.formState
  }, Te({
    ...S,
    formState: v
  })), Ve = (S, A = {}) => {
    for (const N of S ? ls(S) : h.mount)
      h.mount.delete(N), h.array.delete(N), A.keepValue || (Xe(o, N), Xe(c, N)), !A.keepError && Xe(i.errors, N), !A.keepDirty && Xe(i.dirtyFields, N), !A.keepTouched && Xe(i.touchedFields, N), !A.keepIsValidating && Xe(i.validatingFields, N), !n.shouldUnregister && !A.keepDefaultValue && Xe(a, N);
    x.state.next({
      values: it(c)
    }), x.state.next({
      ...i,
      ...A.keepDirty ? { isDirty: ye() } : {}
    }), !A.keepIsValid && D();
  }, _e = ({ disabled: S, name: A }) => {
    (cn(S) && f.mount || S || h.disabled.has(A)) && (S ? h.disabled.add(A) : h.disabled.delete(A));
  }, Re = (S, A = {}) => {
    let N = re(o, S);
    const J = cn(A.disabled) || cn(n.disabled);
    return Me(o, S, {
      ...N || {},
      _f: {
        ...N && N._f ? N._f : { ref: { name: S } },
        name: S,
        mount: !0,
        ...A
      }
    }), h.mount.add(S), N ? _e({
      disabled: cn(A.disabled) ? A.disabled : n.disabled,
      name: S
    }) : H(S, !0, A.value), {
      ...J ? { disabled: A.disabled || n.disabled } : {},
      ...n.progressive ? {
        required: !!A.required,
        min: es(A.min),
        max: es(A.max),
        minLength: es(A.minLength),
        maxLength: es(A.maxLength),
        pattern: es(A.pattern)
      } : {},
      name: S,
      onChange: X,
      onBlur: X,
      ref: (K) => {
        if (K) {
          Re(S, A), N = re(o, S);
          const $ = Ye(K.value) && K.querySelectorAll && K.querySelectorAll("input,select,textarea")[0] || K, ae = hx($), Ee = N._f.refs || [];
          if (ae ? Ee.find((De) => De === $) : $ === N._f.ref)
            return;
          Me(o, S, {
            _f: {
              ...N._f,
              ...ae ? {
                refs: [
                  ...Ee.filter(cu),
                  $,
                  ...Array.isArray(re(a, S)) ? [{}] : []
                ],
                ref: { type: $.type, name: S }
              } : { ref: $ }
            }
          }), H(S, !1, void 0, $);
        } else
          N = re(o, S, {}), N._f && (N._f.mount = !1), (n.shouldUnregister || A.shouldUnregister) && !(lx(h.array, S) && f.action) && h.unMount.add(S);
      }
    };
  }, st = () => n.shouldFocusError && as(o, j, h.mount), Sr = (S) => {
    cn(S) && (x.state.next({ disabled: S }), as(o, (A, N) => {
      const J = re(o, N);
      J && (A.disabled = J._f.disabled || S, Array.isArray(J._f.refs) && J._f.refs.forEach((K) => {
        K.disabled = J._f.disabled || S;
      }));
    }, 0, !1));
  }, hi = (S, A) => async (N) => {
    let J;
    N && (N.preventDefault && N.preventDefault(), N.persist && N.persist());
    let K = it(c);
    if (x.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: $, values: ae } = await le();
      i.errors = $, K = it(ae);
    } else
      await pe(o);
    if (h.disabled.size)
      for (const $ of h.disabled)
        Xe(K, $);
    if (Xe(i.errors, "root"), vt(i.errors)) {
      x.state.next({
        errors: {}
      });
      try {
        await S(K, N);
      } catch ($) {
        J = $;
      }
    } else
      A && await A({ ...i.errors }, N), st(), setTimeout(st);
    if (x.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: vt(i.errors) && !J,
      submitCount: i.submitCount + 1,
      errors: i.errors
    }), J)
      throw J;
  }, Tr = (S, A = {}) => {
    re(o, S) && (Ye(A.defaultValue) ? Pe(S, it(re(a, S))) : (Pe(S, A.defaultValue), Me(a, S, it(A.defaultValue))), A.keepTouched || Xe(i.touchedFields, S), A.keepDirty || (Xe(i.dirtyFields, S), i.isDirty = A.defaultValue ? ye(S, it(re(a, S))) : ye()), A.keepError || (Xe(i.errors, S), g.isValid && D()), x.state.next({ ...i }));
  }, kr = (S, A = {}) => {
    const N = S ? it(S) : a, J = it(N), K = vt(S), $ = K ? a : J;
    if (A.keepDefaultValues || (a = N), !A.keepValues) {
      if (A.keepDirtyValues) {
        const ae = /* @__PURE__ */ new Set([
          ...h.mount,
          ...Object.keys(ti(a, c))
        ]);
        for (const Ee of Array.from(ae))
          re(i.dirtyFields, Ee) ? Me($, Ee, re(c, Ee)) : Pe(Ee, re($, Ee));
      } else {
        if (Ku && Ye(S))
          for (const ae of h.mount) {
            const Ee = re(o, ae);
            if (Ee && Ee._f) {
              const De = Array.isArray(Ee._f.refs) ? Ee._f.refs[0] : Ee._f.ref;
              if (Qo(De)) {
                const mt = De.closest("form");
                if (mt) {
                  mt.reset();
                  break;
                }
              }
            }
          }
        if (A.keepFieldsRef)
          for (const ae of h.mount)
            Pe(ae, re($, ae));
        else
          o = {};
      }
      c = n.shouldUnregister ? A.keepDefaultValues ? it(a) : {} : it($), x.array.next({
        values: { ...$ }
      }), x.state.next({
        values: { ...$ }
      });
    }
    h = {
      mount: A.keepDirtyValues ? h.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, f.mount = !g.isValid || !!A.keepIsValid || !!A.keepDirtyValues || !n.shouldUnregister && !vt($), f.watch = !!n.shouldUnregister, f.action = !1, A.keepErrors || (i.errors = {}), x.state.next({
      submitCount: A.keepSubmitCount ? i.submitCount : 0,
      isDirty: K ? !1 : A.keepDirty ? i.isDirty : !!(A.keepDefaultValues && !Qn(S, a)),
      isSubmitted: A.keepIsSubmitted ? i.isSubmitted : !1,
      dirtyFields: K ? {} : A.keepDirtyValues ? A.keepDefaultValues && c ? ti(a, c) : i.dirtyFields : A.keepDefaultValues && S ? ti(a, S) : A.keepDirty ? i.dirtyFields : {},
      touchedFields: A.keepTouched ? i.touchedFields : {},
      errors: A.keepErrors ? i.errors : {},
      isSubmitSuccessful: A.keepIsSubmitSuccessful ? i.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: a
    });
  }, pi = (S, A) => kr(en(S) ? S(c) : S, A), Es = (S, A = {}) => {
    const N = re(o, S), J = N && N._f;
    if (J) {
      const K = J.refs ? J.refs[0] : J.ref;
      K.focus && (K.focus(), A.shouldSelect && en(K.select) && K.select());
    }
  }, mi = (S) => {
    i = {
      ...i,
      ...S
    };
  }, Er = {
    control: {
      register: Re,
      unregister: Ve,
      getFieldState: C,
      handleSubmit: hi,
      setError: ge,
      _subscribe: Te,
      _runSchema: le,
      _focusError: st,
      _getWatch: ue,
      _getDirty: ye,
      _setValid: D,
      _setFieldArray: F,
      _setDisabledField: _e,
      _setErrors: U,
      _getFieldArray: he,
      _reset: kr,
      _resetDefaultValues: () => en(n.defaultValues) && n.defaultValues().then((S) => {
        pi(S, n.resetOptions), x.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: Se,
      _disableForm: Sr,
      _subjects: x,
      _proxyFormState: g,
      get _fields() {
        return o;
      },
      get _formValues() {
        return c;
      },
      get _state() {
        return f;
      },
      set _state(S) {
        f = S;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return h;
      },
      set _names(S) {
        h = S;
      },
      get _formState() {
        return i;
      },
      get _options() {
        return n;
      },
      set _options(S) {
        n = {
          ...n,
          ...S
        };
      }
    },
    subscribe: ke,
    trigger: Z,
    register: Re,
    handleSubmit: hi,
    watch: ve,
    setValue: Pe,
    getValues: Y,
    reset: pi,
    resetField: Tr,
    clearErrors: I,
    unregister: Ve,
    setError: ge,
    setFocus: Es,
    getFieldState: C
  };
  return {
    ...Er,
    formControl: Er
  };
}
function _x(r = {}) {
  const n = We.useRef(void 0), i = We.useRef(void 0), [o, a] = We.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: en(r.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1,
    isReady: !1,
    defaultValues: en(r.defaultValues) ? void 0 : r.defaultValues
  });
  if (!n.current)
    if (r.formControl)
      n.current = {
        ...r.formControl,
        formState: o
      }, r.defaultValues && !en(r.defaultValues) && r.formControl.reset(r.defaultValues, r.resetOptions);
    else {
      const { formControl: f, ...h } = Px(r);
      n.current = {
        ...h,
        formState: o
      };
    }
  const c = n.current.control;
  return c._options = r, fx(() => {
    const f = c._subscribe({
      formState: c._proxyFormState,
      callback: () => a({ ...c._formState }),
      reRenderRoot: !0
    });
    return a((h) => ({
      ...h,
      isReady: !0
    })), c._formState.isReady = !0, f;
  }, [c]), We.useEffect(() => c._disableForm(r.disabled), [c, r.disabled]), We.useEffect(() => {
    r.mode && (c._options.mode = r.mode), r.reValidateMode && (c._options.reValidateMode = r.reValidateMode);
  }, [c, r.mode, r.reValidateMode]), We.useEffect(() => {
    r.errors && (c._setErrors(r.errors), c._focusError());
  }, [c, r.errors]), We.useEffect(() => {
    r.shouldUnregister && c._subjects.state.next({
      values: c._getWatch()
    });
  }, [c, r.shouldUnregister]), We.useEffect(() => {
    if (c._proxyFormState.isDirty) {
      const f = c._getDirty();
      f !== o.isDirty && c._subjects.state.next({
        isDirty: f
      });
    }
  }, [c, o.isDirty]), We.useEffect(() => {
    var f;
    r.values && !Qn(r.values, i.current) ? (c._reset(r.values, {
      keepFieldsRef: !0,
      ...c._options.resetOptions
    }), !((f = c._options.resetOptions) === null || f === void 0) && f.keepIsValid || c._setValid(), i.current = r.values, a((h) => ({ ...h }))) : c._resetDefaultValues();
  }, [c, r.values]), We.useEffect(() => {
    c._state.mount || (c._setValid(), c._state.mount = !0), c._state.watch && (c._state.watch = !1, c._subjects.state.next({ ...c._formState })), c._removeUnmounted();
  }), n.current.formState = cx(o, c), n.current;
}
const Gh = (r, n, i) => {
  if (r && "reportValidity" in r) {
    const o = re(i, n);
    r.setCustomValidity(o && o.message || ""), r.reportValidity();
  }
}, jm = (r, n) => {
  for (const i in n.fields) {
    const o = n.fields[i];
    o && o.ref && "reportValidity" in o.ref ? Gh(o.ref, i, r) : o && o.refs && o.refs.forEach((a) => Gh(a, i, r));
  }
}, Ax = (r, n) => {
  n.shouldUseNativeValidation && jm(r, n);
  const i = {};
  for (const o in r) {
    const a = re(n.fields, o), c = Object.assign(r[o] || {}, { ref: a && a.ref });
    if (Dx(n.names || Object.keys(r), o)) {
      const f = Object.assign({}, re(i, o));
      Me(f, "root", c), Me(i, o, f);
    } else Me(i, o, c);
  }
  return i;
}, Dx = (r, n) => {
  const i = Qh(n);
  return r.some((o) => Qh(o).match(`^${i}\\.\\d+`));
};
function Qh(r) {
  return r.replace(/\]|\[/g, "");
}
function Vx(r, n, i) {
  return i === void 0 && (i = {}), function(o, a, c) {
    try {
      return Promise.resolve((function(f, h) {
        try {
          var p = (n?.context, Promise.resolve(r[i.mode === "sync" ? "validateSync" : "validate"](o, Object.assign({ abortEarly: !1 }, n, { context: a }))).then(function(m) {
            return c.shouldUseNativeValidation && jm({}, c), { values: i.raw ? Object.assign({}, o) : m, errors: {} };
          }));
        } catch (m) {
          return h(m);
        }
        return p && p.then ? p.then(void 0, h) : p;
      })(0, function(f) {
        if (!f.inner) throw f;
        return { values: {}, errors: Ax((h = f, p = !c.shouldUseNativeValidation && c.criteriaMode === "all", (h.inner || []).reduce(function(m, g) {
          if (m[g.path] || (m[g.path] = { message: g.message, type: g.type }), p) {
            var v = m[g.path].types, x = v && v[g.type];
            m[g.path] = Vm(g.path, p, m, g.type, x ? [].concat(x, g.message) : g.message);
          }
          return m;
        }, {})), c) };
        var h, p;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
}
function Fx(r) {
  const n = r.validateOnChange ?? !0, i = r.validateOnBlur ?? !0;
  return n && i ? "all" : n ? "onChange" : i ? "onBlur" : "onSubmit";
}
function Ox(r, n) {
  return (i) => {
    const o = r(i, n);
    if (Object.keys(o).length === 0)
      return {
        values: i,
        errors: {}
      };
    const c = Object.keys(o).reduce((f, h) => ({ ...f, [h]: { message: o[h] } }), {});
    return {
      values: {},
      errors: c
    };
  };
}
function Rx(r, n) {
  if (r.validationSchema)
    return Vx(r.validationSchema);
  if (r.validate)
    return Ox(r.validate, n);
}
const Im = G.createContext(
  void 0
);
function xs() {
  const r = G.useContext(Im);
  if (r === void 0)
    throw new Error("useWizard must be used within the Wizard app!");
  return r;
}
function Mx(r) {
  const n = {};
  return r.forEach((i) => {
    const o = i.id.replace(/[A-Z]/g, (a, c) => (c > 0 ? "-" : "") + a.toLowerCase());
    n[o] = i;
  }), n;
}
function Yh(r) {
  const n = window.location.hash.slice(1);
  return r[n];
}
function Nx(r, n) {
  const i = Object.keys(r).find(
    (o) => r[o].id === n.id
  );
  window.location.hash = i || window.location.hash;
}
function Lx({
  steps: r,
  onCompleted: n,
  onStepChanged: i,
  enableHash: o,
  // Components
  header: a,
  wrapper: c,
  footer: f
}) {
  const h = G.useMemo(() => o ? Mx(r) : {}, [o, r]), p = Yh(h) || r[0], [m, g] = G.useState(p), [v, x] = G.useState(!1), [k, _] = G.useState({}), D = G.useMemo(() => Fe(m), [m]), M = _x({
    defaultValues: D,
    mode: Fx(m),
    resolver: Rx(m, k),
    shouldUnregister: !0
  }), { reset: F } = M, R = r.findIndex((X) => X.id === m.id), U = R + 1, H = r.length, L = U === 1, q = U === H;
  G.useEffect(() => {
    F(D);
  }, [D]), G.useEffect(() => {
    if (o)
      return window.addEventListener("hashchange", le), Nx(h, m), () => window.removeEventListener("hashchange", le);
  }, [m]);
  function le() {
    const X = Yh(h);
    X?.id !== m.id && g(X);
  }
  async function te(X, j, Z) {
    let Y;
    for (let C = 0; C < X.length; ++C) {
      const I = X[C];
      if (I.shouldSkip === void 0) {
        Y = I;
        break;
      }
      if (!await I.shouldSkip(j, Z)) {
        Y = I;
        break;
      }
    }
    return Y;
  }
  async function pe(X) {
    const j = r.slice(R + 1);
    return await te(j, X, 1);
  }
  async function Se(X) {
    const j = r.slice(0, R).reverse();
    return await te(
      j,
      X,
      -1
    );
  }
  function ye(X) {
    if (!n)
      return;
    let j = {};
    Object.keys(X).forEach((Z) => {
      j = { ...j, ...X[Z] };
    }), n(j);
  }
  async function ue(X) {
    try {
      m.onSubmit && (x(!0), X = await m.onSubmit(X, k), x(!1));
      const j = {
        ...k,
        [m.id]: { ...X }
      };
      _(j);
      const Z = await pe(j);
      if (!Z) {
        ye(j);
        return;
      }
      i && i(m, Z, j), g(Z);
    } catch (j) {
      console.log(j), x(!1);
    }
  }
  async function he(X) {
    let j = null;
    (m.keepValuesOnPrevious ?? !0) && (j = {
      ...k,
      [m.id]: { ...X }
    }, _(j)), j = j || k;
    const Z = await Se(j);
    Z && (i && i(m, Z, j), g(Z));
  }
  function xe(X, j) {
    g({ ...m, [X]: j });
  }
  function Fe(X) {
    return k[X.id] || X.initialValues || {};
  }
  const Pe = {
    values: k,
    setValues: _,
    setIsLoading: x,
    updateStep: xe,
    goToPreviousStep: () => he(M.getValues()),
    goToNextStep: () => ue(M.getValues()),
    goToStep: (X) => g(r[X]),
    activeStep: m,
    stepNumber: U,
    totalSteps: H,
    isLoading: v,
    isFirstStep: L,
    isLastStep: q
  };
  return /* @__PURE__ */ Q.jsx(Im.Provider, { value: Pe, children: /* @__PURE__ */ Q.jsx(ux, { ...M, children: /* @__PURE__ */ Q.jsxs("form", { onSubmit: M.handleSubmit(ue), children: [
    a,
    c || m.component,
    f
  ] }) }) });
}
function jx() {
  const { goToStep: r } = xs();
  return /* @__PURE__ */ Q.jsxs("div", { className: "prose max-w-none", children: [
    /* @__PURE__ */ Q.jsx("h2", { children: "Warning" }),
    /* @__PURE__ */ Q.jsx("p", { children: "Seems like you did not fill your email. Would you like to do it?" }),
    /* @__PURE__ */ Q.jsxs("p", { children: [
      /* @__PURE__ */ Q.jsx("b", { children: "Note:" }),
      " This step is automatically skipped if user filled their email in the first step."
    ] }),
    /* @__PURE__ */ Q.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ Q.jsx("button", { className: "btn", type: "submit", children: "No" }),
      /* @__PURE__ */ Q.jsx("button", { className: "btn", type: "button", onClick: () => r(0), children: "Yes" })
    ] })
  ] });
}
function Ix() {
  return /* @__PURE__ */ Q.jsxs("div", { className: "prose max-w-none", children: [
    /* @__PURE__ */ Q.jsx("h2", { children: "Async" }),
    /* @__PURE__ */ Q.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
  ] });
}
function bx() {
  const { values: r, updateStep: n } = xs(), [i, o] = G.useState(!0);
  function a() {
    const f = !i;
    o(f), n("hideNext", f);
  }
  let c = {};
  return Object.keys(r).forEach((f) => {
    c = { ...c, ...r[f] };
  }), /* @__PURE__ */ Q.jsxs("div", { className: "prose prose-neutral max-w-none", children: [
    /* @__PURE__ */ Q.jsx("h2", { children: "Congratulations!" }),
    /* @__PURE__ */ Q.jsxs("div", { className: "flex flex-wrap gap-4 justify-between", children: [
      /* @__PURE__ */ Q.jsxs("p", { className: "!mt-0", children: [
        "You did it ",
        /* @__PURE__ */ Q.jsx("b", { children: r.Username.username }),
        "! 🎉",
        /* @__PURE__ */ Q.jsx("br", {}),
        "Here's your input:"
      ] }),
      /* @__PURE__ */ Q.jsx("button", { className: "btn", onClick: a, type: "button", children: "Toggle hideNext" })
    ] }),
    /* @__PURE__ */ Q.jsx("pre", { className: "mt-0 text-sm sm:text-base", children: JSON.stringify(c, null, 2) })
  ] });
}
const zx = [
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
    validationSchema: rx,
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
    validate: ix,
    disableNextOnErrors: !0
  },
  {
    id: "EmailCheck",
    component: /* @__PURE__ */ Q.jsx(jx, {}),
    hideNext: !0,
    hidePrevious: !0,
    shouldSkip: (r, n) => n === -1 ? !0 : !!r.ContactInfo.email
  },
  {
    id: "Async",
    component: /* @__PURE__ */ Q.jsx(Ix, {}),
    onSubmit: async (r, n) => (await ((o) => new Promise((a) => setTimeout(a, o)))(2e3), r)
  },
  {
    id: "Final",
    component: /* @__PURE__ */ Q.jsx(bx, {}),
    hideNext: !0,
    hidePrevious: !1
  }
], Ju = G.createContext({});
function ec(r) {
  const n = G.useRef(null);
  return n.current === null && (n.current = r()), n.current;
}
const al = G.createContext(null), tc = G.createContext({
  transformPagePoint: (r) => r,
  isStatic: !1,
  reducedMotion: "never"
});
class Ux extends G.Component {
  getSnapshotBeforeUpdate(n) {
    const i = this.props.childRef.current;
    if (i && n.isPresent && !this.props.isPresent) {
      const o = this.props.sizeRef.current;
      o.height = i.offsetHeight || 0, o.width = i.offsetWidth || 0, o.top = i.offsetTop, o.left = i.offsetLeft;
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
function Bx({ children: r, isPresent: n }) {
  const i = G.useId(), o = G.useRef(null), a = G.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: c } = G.useContext(tc);
  return G.useInsertionEffect(() => {
    const { width: f, height: h, top: p, left: m } = a.current;
    if (n || !o.current || !f || !h)
      return;
    o.current.dataset.motionPopId = i;
    const g = document.createElement("style");
    return c && (g.nonce = c), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            top: ${p}px !important;
            left: ${m}px !important;
          }
        `), () => {
      document.head.removeChild(g);
    };
  }, [n]), Q.jsx(Ux, { isPresent: n, childRef: o, sizeRef: a, children: G.cloneElement(r, { ref: o }) });
}
const $x = ({ children: r, initial: n, isPresent: i, onExitComplete: o, custom: a, presenceAffectsLayout: c, mode: f }) => {
  const h = ec(Wx), p = G.useId(), m = G.useCallback((v) => {
    h.set(v, !0);
    for (const x of h.values())
      if (!x)
        return;
    o && o();
  }, [h, o]), g = G.useMemo(
    () => ({
      id: p,
      initial: n,
      isPresent: i,
      custom: a,
      onExitComplete: m,
      register: (v) => (h.set(v, !1), () => h.delete(v))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    c ? [Math.random(), m] : [i, m]
  );
  return G.useMemo(() => {
    h.forEach((v, x) => h.set(x, !1));
  }, [i]), G.useEffect(() => {
    !i && !h.size && o && o();
  }, [i]), f === "popLayout" && (r = Q.jsx(Bx, { isPresent: i, children: r })), Q.jsx(al.Provider, { value: g, children: r });
};
function Wx() {
  return /* @__PURE__ */ new Map();
}
function bm(r = !0) {
  const n = G.useContext(al);
  if (n === null)
    return [!0, null];
  const { isPresent: i, onExitComplete: o, register: a } = n, c = G.useId();
  G.useEffect(() => {
    r && a(c);
  }, [r]);
  const f = G.useCallback(() => r && o && o(c), [c, o, r]);
  return !i && o ? [!1, f] : [!0];
}
const Lo = (r) => r.key || "";
function qh(r) {
  const n = [];
  return G.Children.forEach(r, (i) => {
    G.isValidElement(i) && n.push(i);
  }), n;
}
const nc = typeof window < "u", zm = nc ? G.useLayoutEffect : G.useEffect, Hx = ({ children: r, custom: n, initial: i = !0, onExitComplete: o, presenceAffectsLayout: a = !0, mode: c = "sync", propagate: f = !1 }) => {
  const [h, p] = bm(f), m = G.useMemo(() => qh(r), [r]), g = f && !h ? [] : m.map(Lo), v = G.useRef(!0), x = G.useRef(m), k = ec(() => /* @__PURE__ */ new Map()), [_, D] = G.useState(m), [M, F] = G.useState(m);
  zm(() => {
    v.current = !1, x.current = m;
    for (let H = 0; H < M.length; H++) {
      const L = Lo(M[H]);
      g.includes(L) ? k.delete(L) : k.get(L) !== !0 && k.set(L, !1);
    }
  }, [M, g.length, g.join("-")]);
  const R = [];
  if (m !== _) {
    let H = [...m];
    for (let L = 0; L < M.length; L++) {
      const q = M[L], le = Lo(q);
      g.includes(le) || (H.splice(L, 0, q), R.push(q));
    }
    c === "wait" && R.length && (H = R), F(qh(H)), D(m);
    return;
  }
  const { forceRender: U } = G.useContext(Ju);
  return Q.jsx(Q.Fragment, { children: M.map((H) => {
    const L = Lo(H), q = f && !h ? !1 : m === M || g.includes(L), le = () => {
      if (k.has(L))
        k.set(L, !0);
      else
        return;
      let te = !0;
      k.forEach((pe) => {
        pe || (te = !1);
      }), te && (U?.(), F(x.current), f && p?.(), o && o());
    };
    return Q.jsx($x, { isPresent: q, initial: !v.current || i ? void 0 : !1, custom: q ? void 0 : n, presenceAffectsLayout: a, mode: c, onExitComplete: q ? void 0 : le, children: H }, L);
  }) });
}, Nt = /* @__NO_SIDE_EFFECTS__ */ (r) => r;
let Um = Nt;
// @__NO_SIDE_EFFECTS__
function rc(r) {
  let n;
  return () => (n === void 0 && (n = r()), n);
}
const ai = /* @__NO_SIDE_EFFECTS__ */ (r, n, i) => {
  const o = n - r;
  return o === 0 ? 1 : (i - r) / o;
}, En = /* @__NO_SIDE_EFFECTS__ */ (r) => r * 1e3, Cn = /* @__NO_SIDE_EFFECTS__ */ (r) => r / 1e3, Kx = {
  useManualTiming: !1
};
function Gx(r) {
  let n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), o = !1, a = !1;
  const c = /* @__PURE__ */ new WeakSet();
  let f = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function h(m) {
    c.has(m) && (p.schedule(m), r()), m(f);
  }
  const p = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (m, g = !1, v = !1) => {
      const k = v && o ? n : i;
      return g && c.add(m), k.has(m) || k.add(m), m;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (m) => {
      i.delete(m), c.delete(m);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (m) => {
      if (f = m, o) {
        a = !0;
        return;
      }
      o = !0, [n, i] = [i, n], n.forEach(h), n.clear(), o = !1, a && (a = !1, p.process(m));
    }
  };
  return p;
}
const jo = [
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
], Qx = 40;
function Bm(r, n) {
  let i = !1, o = !0;
  const a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => i = !0, f = jo.reduce((F, R) => (F[R] = Gx(c), F), {}), { read: h, resolveKeyframes: p, update: m, preRender: g, render: v, postRender: x } = f, k = () => {
    const F = performance.now();
    i = !1, a.delta = o ? 1e3 / 60 : Math.max(Math.min(F - a.timestamp, Qx), 1), a.timestamp = F, a.isProcessing = !0, h.process(a), p.process(a), m.process(a), g.process(a), v.process(a), x.process(a), a.isProcessing = !1, i && n && (o = !1, r(k));
  }, _ = () => {
    i = !0, o = !0, a.isProcessing || r(k);
  };
  return { schedule: jo.reduce((F, R) => {
    const U = f[R];
    return F[R] = (H, L = !1, q = !1) => (i || _(), U.schedule(H, L, q)), F;
  }, {}), cancel: (F) => {
    for (let R = 0; R < jo.length; R++)
      f[jo[R]].cancel(F);
  }, state: a, steps: f };
}
const { schedule: Ie, cancel: qn, state: at, steps: fu } = Bm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Nt, !0), $m = G.createContext({ strict: !1 }), Xh = {
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
}, ui = {};
for (const r in Xh)
  ui[r] = {
    isEnabled: (n) => Xh[r].some((i) => !!n[i])
  };
function Yx(r) {
  for (const n in r)
    ui[n] = {
      ...ui[n],
      ...r[n]
    };
}
const qx = /* @__PURE__ */ new Set([
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
function qo(r) {
  return r.startsWith("while") || r.startsWith("drag") && r !== "draggable" || r.startsWith("layout") || r.startsWith("onTap") || r.startsWith("onPan") || r.startsWith("onLayout") || qx.has(r);
}
let Wm = (r) => !qo(r);
function Xx(r) {
  r && (Wm = (n) => n.startsWith("on") ? !qo(n) : r(n));
}
try {
  Xx(require("@emotion/is-prop-valid").default);
} catch {
}
function Zx(r, n, i) {
  const o = {};
  for (const a in r)
    a === "values" && typeof r.values == "object" || (Wm(a) || i === !0 && qo(a) || !n && !qo(a) || // If trying to use native HTML drag events, forward drag listeners
    r.draggable && a.startsWith("onDrag")) && (o[a] = r[a]);
  return o;
}
function Jx(r) {
  if (typeof Proxy > "u")
    return r;
  const n = /* @__PURE__ */ new Map(), i = (...o) => r(...o);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, a) => a === "create" ? r : (n.has(a) || n.set(a, r(a)), n.get(a))
  });
}
const ul = G.createContext({});
function hs(r) {
  return typeof r == "string" || Array.isArray(r);
}
function cl(r) {
  return r !== null && typeof r == "object" && typeof r.start == "function";
}
const ic = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], sc = ["initial", ...ic];
function fl(r) {
  return cl(r.animate) || sc.some((n) => hs(r[n]));
}
function Hm(r) {
  return !!(fl(r) || r.variants);
}
function ew(r, n) {
  if (fl(r)) {
    const { initial: i, animate: o } = r;
    return {
      initial: i === !1 || hs(i) ? i : void 0,
      animate: hs(o) ? o : void 0
    };
  }
  return r.inherit !== !1 ? n : {};
}
function tw(r) {
  const { initial: n, animate: i } = ew(r, G.useContext(ul));
  return G.useMemo(() => ({ initial: n, animate: i }), [Zh(n), Zh(i)]);
}
function Zh(r) {
  return Array.isArray(r) ? r.join(" ") : r;
}
const nw = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function ri(r) {
  return r && typeof r == "object" && Object.prototype.hasOwnProperty.call(r, "current");
}
function rw(r, n, i) {
  return G.useCallback(
    (o) => {
      o && r.onMount && r.onMount(o), n && (o ? n.mount(o) : n.unmount()), i && (typeof i == "function" ? i(o) : ri(i) && (i.current = o));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [n]
  );
}
const oc = (r) => r.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), iw = "framerAppearId", Km = "data-" + oc(iw), { schedule: lc } = Bm(queueMicrotask, !1), Gm = G.createContext({});
function sw(r, n, i, o, a) {
  var c, f;
  const { visualElement: h } = G.useContext(ul), p = G.useContext($m), m = G.useContext(al), g = G.useContext(tc).reducedMotion, v = G.useRef(null);
  o = o || p.renderer, !v.current && o && (v.current = o(r, {
    visualState: n,
    parent: h,
    props: i,
    presenceContext: m,
    blockInitialAnimation: m ? m.initial === !1 : !1,
    reducedMotionConfig: g
  }));
  const x = v.current, k = G.useContext(Gm);
  x && !x.projection && a && (x.type === "html" || x.type === "svg") && ow(v.current, i, a, k);
  const _ = G.useRef(!1);
  G.useInsertionEffect(() => {
    x && _.current && x.update(i, m);
  });
  const D = i[Km], M = G.useRef(!!D && !(!((c = window.MotionHandoffIsComplete) === null || c === void 0) && c.call(window, D)) && ((f = window.MotionHasOptimisedAnimation) === null || f === void 0 ? void 0 : f.call(window, D)));
  return zm(() => {
    x && (_.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), lc.render(x.render), M.current && x.animationState && x.animationState.animateChanges());
  }), G.useEffect(() => {
    x && (!M.current && x.animationState && x.animationState.animateChanges(), M.current && (queueMicrotask(() => {
      var F;
      (F = window.MotionHandoffMarkAsComplete) === null || F === void 0 || F.call(window, D);
    }), M.current = !1));
  }), x;
}
function ow(r, n, i, o) {
  const { layoutId: a, layout: c, drag: f, dragConstraints: h, layoutScroll: p, layoutRoot: m } = n;
  r.projection = new i(r.latestValues, n["data-framer-portal-id"] ? void 0 : Qm(r.parent)), r.projection.setOptions({
    layoutId: a,
    layout: c,
    alwaysMeasureLayout: !!f || h && ri(h),
    visualElement: r,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof c == "string" ? c : "both",
    initialPromotionConfig: o,
    layoutScroll: p,
    layoutRoot: m
  });
}
function Qm(r) {
  if (r)
    return r.options.allowProjection !== !1 ? r.projection : Qm(r.parent);
}
function lw({ preloadedFeatures: r, createVisualElement: n, useRender: i, useVisualState: o, Component: a }) {
  var c, f;
  r && Yx(r);
  function h(m, g) {
    let v;
    const x = {
      ...G.useContext(tc),
      ...m,
      layoutId: aw(m)
    }, { isStatic: k } = x, _ = tw(m), D = o(m, k);
    if (!k && nc) {
      uw();
      const M = cw(x);
      v = M.MeasureLayout, _.visualElement = sw(a, D, x, n, M.ProjectionNode);
    }
    return Q.jsxs(ul.Provider, { value: _, children: [v && _.visualElement ? Q.jsx(v, { visualElement: _.visualElement, ...x }) : null, i(a, m, rw(D, _.visualElement, g), D, k, _.visualElement)] });
  }
  h.displayName = `motion.${typeof a == "string" ? a : `create(${(f = (c = a.displayName) !== null && c !== void 0 ? c : a.name) !== null && f !== void 0 ? f : ""})`}`;
  const p = G.forwardRef(h);
  return p[nw] = a, p;
}
function aw({ layoutId: r }) {
  const n = G.useContext(Ju).id;
  return n && r !== void 0 ? n + "-" + r : r;
}
function uw(r, n) {
  G.useContext($m).strict;
}
function cw(r) {
  const { drag: n, layout: i } = ui;
  if (!n && !i)
    return {};
  const o = { ...n, ...i };
  return {
    MeasureLayout: n?.isEnabled(r) || i?.isEnabled(r) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
const fw = [
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
function ac(r) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof r != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    r.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(fw.indexOf(r) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(r))
    )
  );
}
function Jh(r) {
  const n = [{}, {}];
  return r?.values.forEach((i, o) => {
    n[0][o] = i.get(), n[1][o] = i.getVelocity();
  }), n;
}
function uc(r, n, i, o) {
  if (typeof n == "function") {
    const [a, c] = Jh(o);
    n = n(i !== void 0 ? i : r.custom, a, c);
  }
  if (typeof n == "string" && (n = r.variants && r.variants[n]), typeof n == "function") {
    const [a, c] = Jh(o);
    n = n(i !== void 0 ? i : r.custom, a, c);
  }
  return n;
}
const Au = (r) => Array.isArray(r), dw = (r) => !!(r && typeof r == "object" && r.mix && r.toValue), hw = (r) => Au(r) ? r[r.length - 1] || 0 : r, pt = (r) => !!(r && r.getVelocity);
function $o(r) {
  const n = pt(r) ? r.get() : r;
  return dw(n) ? n.toValue() : n;
}
function pw({ scrapeMotionValuesFromProps: r, createRenderState: n, onUpdate: i }, o, a, c) {
  const f = {
    latestValues: mw(o, a, c, r),
    renderState: n()
  };
  return i && (f.onMount = (h) => i({ props: o, current: h, ...f }), f.onUpdate = (h) => i(h)), f;
}
const Ym = (r) => (n, i) => {
  const o = G.useContext(ul), a = G.useContext(al), c = () => pw(r, n, o, a);
  return i ? c() : ec(c);
};
function mw(r, n, i, o) {
  const a = {}, c = o(r, {});
  for (const x in c)
    a[x] = $o(c[x]);
  let { initial: f, animate: h } = r;
  const p = fl(r), m = Hm(r);
  n && m && !p && r.inherit !== !1 && (f === void 0 && (f = n.initial), h === void 0 && (h = n.animate));
  let g = i ? i.initial === !1 : !1;
  g = g || f === !1;
  const v = g ? h : f;
  if (v && typeof v != "boolean" && !cl(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let k = 0; k < x.length; k++) {
      const _ = uc(r, x[k]);
      if (_) {
        const { transitionEnd: D, transition: M, ...F } = _;
        for (const R in F) {
          let U = F[R];
          if (Array.isArray(U)) {
            const H = g ? U.length - 1 : 0;
            U = U[H];
          }
          U !== null && (a[R] = U);
        }
        for (const R in D)
          a[R] = D[R];
      }
    }
  }
  return a;
}
const fi = [
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
], wr = new Set(fi), qm = (r) => (n) => typeof n == "string" && n.startsWith(r), Xm = /* @__PURE__ */ qm("--"), yw = /* @__PURE__ */ qm("var(--"), cc = (r) => yw(r) ? gw.test(r.split("/*")[0].trim()) : !1, gw = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Zm = (r, n) => n && typeof r == "number" ? n.transform(r) : r, Pn = (r, n, i) => i > n ? n : i < r ? r : i, di = {
  test: (r) => typeof r == "number",
  parse: parseFloat,
  transform: (r) => r
}, ps = {
  ...di,
  transform: (r) => Pn(0, 1, r)
}, Io = {
  ...di,
  default: 1
}, ws = (r) => ({
  test: (n) => typeof n == "string" && n.endsWith(r) && n.split(" ").length === 1,
  parse: parseFloat,
  transform: (n) => `${n}${r}`
}), Gn = /* @__PURE__ */ ws("deg"), fn = /* @__PURE__ */ ws("%"), de = /* @__PURE__ */ ws("px"), vw = /* @__PURE__ */ ws("vh"), xw = /* @__PURE__ */ ws("vw"), ep = {
  ...fn,
  parse: (r) => fn.parse(r) / 100,
  transform: (r) => fn.transform(r * 100)
}, ww = {
  // Border props
  borderWidth: de,
  borderTopWidth: de,
  borderRightWidth: de,
  borderBottomWidth: de,
  borderLeftWidth: de,
  borderRadius: de,
  radius: de,
  borderTopLeftRadius: de,
  borderTopRightRadius: de,
  borderBottomRightRadius: de,
  borderBottomLeftRadius: de,
  // Positioning props
  width: de,
  maxWidth: de,
  height: de,
  maxHeight: de,
  top: de,
  right: de,
  bottom: de,
  left: de,
  // Spacing props
  padding: de,
  paddingTop: de,
  paddingRight: de,
  paddingBottom: de,
  paddingLeft: de,
  margin: de,
  marginTop: de,
  marginRight: de,
  marginBottom: de,
  marginLeft: de,
  // Misc
  backgroundPositionX: de,
  backgroundPositionY: de
}, Sw = {
  rotate: Gn,
  rotateX: Gn,
  rotateY: Gn,
  rotateZ: Gn,
  scale: Io,
  scaleX: Io,
  scaleY: Io,
  scaleZ: Io,
  skew: Gn,
  skewX: Gn,
  skewY: Gn,
  distance: de,
  translateX: de,
  translateY: de,
  translateZ: de,
  x: de,
  y: de,
  z: de,
  perspective: de,
  transformPerspective: de,
  opacity: ps,
  originX: ep,
  originY: ep,
  originZ: de
}, tp = {
  ...di,
  transform: Math.round
}, fc = {
  ...ww,
  ...Sw,
  zIndex: tp,
  size: de,
  // SVG
  fillOpacity: ps,
  strokeOpacity: ps,
  numOctaves: tp
}, Tw = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, kw = fi.length;
function Ew(r, n, i) {
  let o = "", a = !0;
  for (let c = 0; c < kw; c++) {
    const f = fi[c], h = r[f];
    if (h === void 0)
      continue;
    let p = !0;
    if (typeof h == "number" ? p = h === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(h) === 0, !p || i) {
      const m = Zm(h, fc[f]);
      if (!p) {
        a = !1;
        const g = Tw[f] || f;
        o += `${g}(${m}) `;
      }
      i && (n[f] = m);
    }
  }
  return o = o.trim(), i ? o = i(n, a ? "" : o) : a && (o = "none"), o;
}
function dc(r, n, i) {
  const { style: o, vars: a, transformOrigin: c } = r;
  let f = !1, h = !1;
  for (const p in n) {
    const m = n[p];
    if (wr.has(p)) {
      f = !0;
      continue;
    } else if (Xm(p)) {
      a[p] = m;
      continue;
    } else {
      const g = Zm(m, fc[p]);
      p.startsWith("origin") ? (h = !0, c[p] = g) : o[p] = g;
    }
  }
  if (n.transform || (f || i ? o.transform = Ew(n, r.transform, i) : o.transform && (o.transform = "none")), h) {
    const { originX: p = "50%", originY: m = "50%", originZ: g = 0 } = c;
    o.transformOrigin = `${p} ${m} ${g}`;
  }
}
const Cw = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Pw = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function _w(r, n, i = 1, o = 0, a = !0) {
  r.pathLength = 1;
  const c = a ? Cw : Pw;
  r[c.offset] = de.transform(-o);
  const f = de.transform(n), h = de.transform(i);
  r[c.array] = `${f} ${h}`;
}
function np(r, n, i) {
  return typeof r == "string" ? r : de.transform(n + i * r);
}
function Aw(r, n, i) {
  const o = np(n, r.x, r.width), a = np(i, r.y, r.height);
  return `${o} ${a}`;
}
function hc(r, {
  attrX: n,
  attrY: i,
  attrScale: o,
  originX: a,
  originY: c,
  pathLength: f,
  pathSpacing: h = 1,
  pathOffset: p = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, g, v) {
  if (dc(r, m, v), g) {
    r.style.viewBox && (r.attrs.viewBox = r.style.viewBox);
    return;
  }
  r.attrs = r.style, r.style = {};
  const { attrs: x, style: k, dimensions: _ } = r;
  x.transform && (_ && (k.transform = x.transform), delete x.transform), _ && (a !== void 0 || c !== void 0 || k.transform) && (k.transformOrigin = Aw(_, a !== void 0 ? a : 0.5, c !== void 0 ? c : 0.5)), n !== void 0 && (x.x = n), i !== void 0 && (x.y = i), o !== void 0 && (x.scale = o), f !== void 0 && _w(x, f, h, p, !1);
}
const pc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Jm = () => ({
  ...pc(),
  attrs: {}
}), mc = (r) => typeof r == "string" && r.toLowerCase() === "svg";
function ey(r, { style: n, vars: i }, o, a) {
  Object.assign(r.style, n, a && a.getProjectionStyles(o));
  for (const c in i)
    r.style.setProperty(c, i[c]);
}
const ty = /* @__PURE__ */ new Set([
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
function ny(r, n, i, o) {
  ey(r, n, void 0, o);
  for (const a in n.attrs)
    r.setAttribute(ty.has(a) ? a : oc(a), n.attrs[a]);
}
const Xo = {};
function Dw(r) {
  Object.assign(Xo, r);
}
function ry(r, { layout: n, layoutId: i }) {
  return wr.has(r) || r.startsWith("origin") || (n || i !== void 0) && (!!Xo[r] || r === "opacity");
}
function yc(r, n, i) {
  var o;
  const { style: a } = r, c = {};
  for (const f in a)
    (pt(a[f]) || n.style && pt(n.style[f]) || ry(f, r) || ((o = i?.getValue(f)) === null || o === void 0 ? void 0 : o.liveStyle) !== void 0) && (c[f] = a[f]);
  return c;
}
function iy(r, n, i) {
  const o = yc(r, n, i);
  for (const a in r)
    if (pt(r[a]) || pt(n[a])) {
      const c = fi.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
      o[c] = r[a];
    }
  return o;
}
function Vw(r, n) {
  try {
    n.dimensions = typeof r.getBBox == "function" ? r.getBBox() : r.getBoundingClientRect();
  } catch {
    n.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const rp = ["x", "y", "width", "height", "cx", "cy", "r"], Fw = {
  useVisualState: Ym({
    scrapeMotionValuesFromProps: iy,
    createRenderState: Jm,
    onUpdate: ({ props: r, prevProps: n, current: i, renderState: o, latestValues: a }) => {
      if (!i)
        return;
      let c = !!r.drag;
      if (!c) {
        for (const h in a)
          if (wr.has(h)) {
            c = !0;
            break;
          }
      }
      if (!c)
        return;
      let f = !n;
      if (n)
        for (let h = 0; h < rp.length; h++) {
          const p = rp[h];
          r[p] !== n[p] && (f = !0);
        }
      f && Ie.read(() => {
        Vw(i, o), Ie.render(() => {
          hc(o, a, mc(i.tagName), r.transformTemplate), ny(i, o);
        });
      });
    }
  })
}, Ow = {
  useVisualState: Ym({
    scrapeMotionValuesFromProps: yc,
    createRenderState: pc
  })
};
function sy(r, n, i) {
  for (const o in n)
    !pt(n[o]) && !ry(o, i) && (r[o] = n[o]);
}
function Rw({ transformTemplate: r }, n) {
  return G.useMemo(() => {
    const i = pc();
    return dc(i, n, r), Object.assign({}, i.vars, i.style);
  }, [n]);
}
function Mw(r, n) {
  const i = r.style || {}, o = {};
  return sy(o, i, r), Object.assign(o, Rw(r, n)), o;
}
function Nw(r, n) {
  const i = {}, o = Mw(r, n);
  return r.drag && r.dragListener !== !1 && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = r.drag === !0 ? "none" : `pan-${r.drag === "x" ? "y" : "x"}`), r.tabIndex === void 0 && (r.onTap || r.onTapStart || r.whileTap) && (i.tabIndex = 0), i.style = o, i;
}
function Lw(r, n, i, o) {
  const a = G.useMemo(() => {
    const c = Jm();
    return hc(c, n, mc(o), r.transformTemplate), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [n]);
  if (r.style) {
    const c = {};
    sy(c, r.style, r), a.style = { ...c, ...a.style };
  }
  return a;
}
function jw(r = !1) {
  return (i, o, a, { latestValues: c }, f) => {
    const p = (ac(i) ? Lw : Nw)(o, c, f, i), m = Zx(o, typeof i == "string", r), g = i !== G.Fragment ? { ...m, ...p, ref: a } : {}, { children: v } = o, x = G.useMemo(() => pt(v) ? v.get() : v, [v]);
    return G.createElement(i, {
      ...g,
      children: x
    });
  };
}
function Iw(r, n) {
  return function(o, { forwardMotionProps: a } = { forwardMotionProps: !1 }) {
    const f = {
      ...ac(o) ? Fw : Ow,
      preloadedFeatures: r,
      useRender: jw(a),
      createVisualElement: n,
      Component: o
    };
    return lw(f);
  };
}
function oy(r, n) {
  if (!Array.isArray(n))
    return !1;
  const i = n.length;
  if (i !== r.length)
    return !1;
  for (let o = 0; o < i; o++)
    if (n[o] !== r[o])
      return !1;
  return !0;
}
function dl(r, n, i) {
  const o = r.getProps();
  return uc(o, n, i !== void 0 ? i : o.custom, r);
}
const bw = /* @__PURE__ */ rc(() => window.ScrollTimeline !== void 0);
class zw {
  constructor(n) {
    this.stop = () => this.runAll("stop"), this.animations = n.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((n) => "finished" in n ? n.finished : n));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(n) {
    return this.animations[0][n];
  }
  setAll(n, i) {
    for (let o = 0; o < this.animations.length; o++)
      this.animations[o][n] = i;
  }
  attachTimeline(n, i) {
    const o = this.animations.map((a) => {
      if (bw() && a.attachTimeline)
        return a.attachTimeline(n);
      if (typeof i == "function")
        return i(a);
    });
    return () => {
      o.forEach((a, c) => {
        a && a(), this.animations[c].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(n) {
    this.setAll("time", n);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(n) {
    this.setAll("speed", n);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let n = 0;
    for (let i = 0; i < this.animations.length; i++)
      n = Math.max(n, this.animations[i].duration);
    return n;
  }
  runAll(n) {
    this.animations.forEach((i) => i[n]());
  }
  flatten() {
    this.runAll("flatten");
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
class Uw extends zw {
  then(n, i) {
    return Promise.all(this.animations).then(n).catch(i);
  }
}
function gc(r, n) {
  return r ? r[n] || r.default || r : void 0;
}
const Du = 2e4;
function ly(r) {
  let n = 0;
  const i = 50;
  let o = r.next(n);
  for (; !o.done && n < Du; )
    n += i, o = r.next(n);
  return n >= Du ? 1 / 0 : n;
}
function vc(r) {
  return typeof r == "function";
}
function ip(r, n) {
  r.timeline = n, r.onfinish = null;
}
const xc = (r) => Array.isArray(r) && typeof r[0] == "number", Bw = {
  linearEasing: void 0
};
function $w(r, n) {
  const i = /* @__PURE__ */ rc(r);
  return () => {
    var o;
    return (o = Bw[n]) !== null && o !== void 0 ? o : i();
  };
}
const Zo = /* @__PURE__ */ $w(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ay = (r, n, i = 10) => {
  let o = "";
  const a = Math.max(Math.round(n / i), 2);
  for (let c = 0; c < a; c++)
    o += r(/* @__PURE__ */ ai(0, a - 1, c)) + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
};
function uy(r) {
  return !!(typeof r == "function" && Zo() || !r || typeof r == "string" && (r in Vu || Zo()) || xc(r) || Array.isArray(r) && r.every(uy));
}
const is = ([r, n, i, o]) => `cubic-bezier(${r}, ${n}, ${i}, ${o})`, Vu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ is([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ is([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ is([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ is([0.33, 1.53, 0.69, 0.99])
};
function cy(r, n) {
  if (r)
    return typeof r == "function" && Zo() ? ay(r, n) : xc(r) ? is(r) : Array.isArray(r) ? r.map((i) => cy(i, n) || Vu.easeOut) : Vu[r];
}
const Zt = {
  x: !1,
  y: !1
};
function fy() {
  return Zt.x || Zt.y;
}
function Ww(r, n, i) {
  var o;
  if (r instanceof Element)
    return [r];
  if (typeof r == "string") {
    let a = document;
    const c = (o = void 0) !== null && o !== void 0 ? o : a.querySelectorAll(r);
    return c ? Array.from(c) : [];
  }
  return Array.from(r);
}
function dy(r, n) {
  const i = Ww(r), o = new AbortController(), a = {
    passive: !0,
    ...n,
    signal: o.signal
  };
  return [i, a, () => o.abort()];
}
function sp(r) {
  return (n) => {
    n.pointerType === "touch" || fy() || r(n);
  };
}
function Hw(r, n, i = {}) {
  const [o, a, c] = dy(r, i), f = sp((h) => {
    const { target: p } = h, m = n(h);
    if (typeof m != "function" || !p)
      return;
    const g = sp((v) => {
      m(v), p.removeEventListener("pointerleave", g);
    });
    p.addEventListener("pointerleave", g, a);
  });
  return o.forEach((h) => {
    h.addEventListener("pointerenter", f, a);
  }), c;
}
const hy = (r, n) => n ? r === n ? !0 : hy(r, n.parentElement) : !1, wc = (r) => r.pointerType === "mouse" ? typeof r.button != "number" || r.button <= 0 : r.isPrimary !== !1, Kw = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Gw(r) {
  return Kw.has(r.tagName) || r.tabIndex !== -1;
}
const ss = /* @__PURE__ */ new WeakSet();
function op(r) {
  return (n) => {
    n.key === "Enter" && r(n);
  };
}
function du(r, n) {
  r.dispatchEvent(new PointerEvent("pointer" + n, { isPrimary: !0, bubbles: !0 }));
}
const Qw = (r, n) => {
  const i = r.currentTarget;
  if (!i)
    return;
  const o = op(() => {
    if (ss.has(i))
      return;
    du(i, "down");
    const a = op(() => {
      du(i, "up");
    }), c = () => du(i, "cancel");
    i.addEventListener("keyup", a, n), i.addEventListener("blur", c, n);
  });
  i.addEventListener("keydown", o, n), i.addEventListener("blur", () => i.removeEventListener("keydown", o), n);
};
function lp(r) {
  return wc(r) && !fy();
}
function Yw(r, n, i = {}) {
  const [o, a, c] = dy(r, i), f = (h) => {
    const p = h.currentTarget;
    if (!lp(h) || ss.has(p))
      return;
    ss.add(p);
    const m = n(h), g = (k, _) => {
      window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", x), !(!lp(k) || !ss.has(p)) && (ss.delete(p), typeof m == "function" && m(k, { success: _ }));
    }, v = (k) => {
      g(k, i.useGlobalTarget || hy(p, k.target));
    }, x = (k) => {
      g(k, !1);
    };
    window.addEventListener("pointerup", v, a), window.addEventListener("pointercancel", x, a);
  };
  return o.forEach((h) => {
    !Gw(h) && h.getAttribute("tabindex") === null && (h.tabIndex = 0), (i.useGlobalTarget ? window : h).addEventListener("pointerdown", f, a), h.addEventListener("focus", (m) => Qw(m, a), a);
  }), c;
}
function qw(r) {
  return r === "x" || r === "y" ? Zt[r] ? null : (Zt[r] = !0, () => {
    Zt[r] = !1;
  }) : Zt.x || Zt.y ? null : (Zt.x = Zt.y = !0, () => {
    Zt.x = Zt.y = !1;
  });
}
const py = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...fi
]);
let Wo;
function Xw() {
  Wo = void 0;
}
const dn = {
  now: () => (Wo === void 0 && dn.set(at.isProcessing || Kx.useManualTiming ? at.timestamp : performance.now()), Wo),
  set: (r) => {
    Wo = r, queueMicrotask(Xw);
  }
};
function Sc(r, n) {
  r.indexOf(n) === -1 && r.push(n);
}
function Tc(r, n) {
  const i = r.indexOf(n);
  i > -1 && r.splice(i, 1);
}
class kc {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return Sc(this.subscriptions, n), () => Tc(this.subscriptions, n);
  }
  notify(n, i, o) {
    const a = this.subscriptions.length;
    if (a)
      if (a === 1)
        this.subscriptions[0](n, i, o);
      else
        for (let c = 0; c < a; c++) {
          const f = this.subscriptions[c];
          f && f(n, i, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function my(r, n) {
  return n ? r * (1e3 / n) : 0;
}
const ap = 30, Zw = (r) => !isNaN(parseFloat(r));
class Jw {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(n, i = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o, a = !0) => {
      const c = dn.now();
      this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(n), this.owner = i.owner;
  }
  setCurrent(n) {
    this.current = n, this.updatedAt = dn.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = Zw(this.current));
  }
  setPrevFrameValue(n = this.current) {
    this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt;
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
  onChange(n) {
    return this.on("change", n);
  }
  on(n, i) {
    this.events[n] || (this.events[n] = new kc());
    const o = this.events[n].add(i);
    return n === "change" ? () => {
      o(), Ie.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const n in this.events)
      this.events[n].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(n, i) {
    this.passiveEffect = n, this.stopPassiveEffect = i;
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
  set(n, i = !0) {
    !i || !this.passiveEffect ? this.updateAndNotify(n, i) : this.passiveEffect(n, this.updateAndNotify);
  }
  setWithVelocity(n, i, o) {
    this.set(i), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(n, i = !0) {
    this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    const n = dn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > ap)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, ap);
    return my(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
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
  start(n) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = n(i), this.events.animationStart && this.events.animationStart.notify();
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
function ms(r, n) {
  return new Jw(r, n);
}
function eS(r, n, i) {
  r.hasValue(n) ? r.getValue(n).set(i) : r.addValue(n, ms(i));
}
function tS(r, n) {
  const i = dl(r, n);
  let { transitionEnd: o = {}, transition: a = {}, ...c } = i || {};
  c = { ...c, ...o };
  for (const f in c) {
    const h = hw(c[f]);
    eS(r, f, h);
  }
}
function nS(r) {
  return !!(pt(r) && r.add);
}
function Fu(r, n) {
  const i = r.getValue("willChange");
  if (nS(i))
    return i.add(n);
}
function yy(r) {
  return r.props[Km];
}
const gy = (r, n, i) => (((1 - 3 * i + 3 * n) * r + (3 * i - 6 * n)) * r + 3 * n) * r, rS = 1e-7, iS = 12;
function sS(r, n, i, o, a) {
  let c, f, h = 0;
  do
    f = n + (i - n) / 2, c = gy(f, o, a) - r, c > 0 ? i = f : n = f;
  while (Math.abs(c) > rS && ++h < iS);
  return f;
}
function Ss(r, n, i, o) {
  if (r === n && i === o)
    return Nt;
  const a = (c) => sS(c, 0, 1, r, i);
  return (c) => c === 0 || c === 1 ? c : gy(a(c), n, o);
}
const vy = (r) => (n) => n <= 0.5 ? r(2 * n) / 2 : (2 - r(2 * (1 - n))) / 2, xy = (r) => (n) => 1 - r(1 - n), wy = /* @__PURE__ */ Ss(0.33, 1.53, 0.69, 0.99), Ec = /* @__PURE__ */ xy(wy), Sy = /* @__PURE__ */ vy(Ec), Ty = (r) => (r *= 2) < 1 ? 0.5 * Ec(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1))), Cc = (r) => 1 - Math.sin(Math.acos(r)), ky = xy(Cc), Ey = vy(Cc), Cy = (r) => /^0[^.\s]+$/u.test(r);
function oS(r) {
  return typeof r == "number" ? r === 0 : r !== null ? r === "none" || r === "0" || Cy(r) : !0;
}
const us = (r) => Math.round(r * 1e5) / 1e5, Pc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function lS(r) {
  return r == null;
}
const aS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, _c = (r, n) => (i) => !!(typeof i == "string" && aS.test(i) && i.startsWith(r) || n && !lS(i) && Object.prototype.hasOwnProperty.call(i, n)), Py = (r, n, i) => (o) => {
  if (typeof o != "string")
    return o;
  const [a, c, f, h] = o.match(Pc);
  return {
    [r]: parseFloat(a),
    [n]: parseFloat(c),
    [i]: parseFloat(f),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, uS = (r) => Pn(0, 255, r), hu = {
  ...di,
  transform: (r) => Math.round(uS(r))
}, yr = {
  test: /* @__PURE__ */ _c("rgb", "red"),
  parse: /* @__PURE__ */ Py("red", "green", "blue"),
  transform: ({ red: r, green: n, blue: i, alpha: o = 1 }) => "rgba(" + hu.transform(r) + ", " + hu.transform(n) + ", " + hu.transform(i) + ", " + us(ps.transform(o)) + ")"
};
function cS(r) {
  let n = "", i = "", o = "", a = "";
  return r.length > 5 ? (n = r.substring(1, 3), i = r.substring(3, 5), o = r.substring(5, 7), a = r.substring(7, 9)) : (n = r.substring(1, 2), i = r.substring(2, 3), o = r.substring(3, 4), a = r.substring(4, 5), n += n, i += i, o += o, a += a), {
    red: parseInt(n, 16),
    green: parseInt(i, 16),
    blue: parseInt(o, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const Ou = {
  test: /* @__PURE__ */ _c("#"),
  parse: cS,
  transform: yr.transform
}, ii = {
  test: /* @__PURE__ */ _c("hsl", "hue"),
  parse: /* @__PURE__ */ Py("hue", "saturation", "lightness"),
  transform: ({ hue: r, saturation: n, lightness: i, alpha: o = 1 }) => "hsla(" + Math.round(r) + ", " + fn.transform(us(n)) + ", " + fn.transform(us(i)) + ", " + us(ps.transform(o)) + ")"
}, ht = {
  test: (r) => yr.test(r) || Ou.test(r) || ii.test(r),
  parse: (r) => yr.test(r) ? yr.parse(r) : ii.test(r) ? ii.parse(r) : Ou.parse(r),
  transform: (r) => typeof r == "string" ? r : r.hasOwnProperty("red") ? yr.transform(r) : ii.transform(r)
}, fS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function dS(r) {
  var n, i;
  return isNaN(r) && typeof r == "string" && (((n = r.match(Pc)) === null || n === void 0 ? void 0 : n.length) || 0) + (((i = r.match(fS)) === null || i === void 0 ? void 0 : i.length) || 0) > 0;
}
const _y = "number", Ay = "color", hS = "var", pS = "var(", up = "${}", mS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ys(r) {
  const n = r.toString(), i = [], o = {
    color: [],
    number: [],
    var: []
  }, a = [];
  let c = 0;
  const h = n.replace(mS, (p) => (ht.test(p) ? (o.color.push(c), a.push(Ay), i.push(ht.parse(p))) : p.startsWith(pS) ? (o.var.push(c), a.push(hS), i.push(p)) : (o.number.push(c), a.push(_y), i.push(parseFloat(p))), ++c, up)).split(up);
  return { values: i, split: h, indexes: o, types: a };
}
function Dy(r) {
  return ys(r).values;
}
function Vy(r) {
  const { split: n, types: i } = ys(r), o = n.length;
  return (a) => {
    let c = "";
    for (let f = 0; f < o; f++)
      if (c += n[f], a[f] !== void 0) {
        const h = i[f];
        h === _y ? c += us(a[f]) : h === Ay ? c += ht.transform(a[f]) : c += a[f];
      }
    return c;
  };
}
const yS = (r) => typeof r == "number" ? 0 : r;
function gS(r) {
  const n = Dy(r);
  return Vy(r)(n.map(yS));
}
const Xn = {
  test: dS,
  parse: Dy,
  createTransformer: Vy,
  getAnimatableNone: gS
}, vS = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function xS(r) {
  const [n, i] = r.slice(0, -1).split("(");
  if (n === "drop-shadow")
    return r;
  const [o] = i.match(Pc) || [];
  if (!o)
    return r;
  const a = i.replace(o, "");
  let c = vS.has(n) ? 1 : 0;
  return o !== i && (c *= 100), n + "(" + c + a + ")";
}
const wS = /\b([a-z-]*)\(.*?\)/gu, Ru = {
  ...Xn,
  getAnimatableNone: (r) => {
    const n = r.match(wS);
    return n ? n.map(xS).join(" ") : r;
  }
}, SS = {
  ...fc,
  // Color props
  color: ht,
  backgroundColor: ht,
  outlineColor: ht,
  fill: ht,
  stroke: ht,
  // Border props
  borderColor: ht,
  borderTopColor: ht,
  borderRightColor: ht,
  borderBottomColor: ht,
  borderLeftColor: ht,
  filter: Ru,
  WebkitFilter: Ru
}, Ac = (r) => SS[r];
function Fy(r, n) {
  let i = Ac(r);
  return i !== Ru && (i = Xn), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0;
}
const TS = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function kS(r, n, i) {
  let o = 0, a;
  for (; o < r.length && !a; ) {
    const c = r[o];
    typeof c == "string" && !TS.has(c) && ys(c).values.length && (a = r[o]), o++;
  }
  if (a && i)
    for (const c of n)
      r[c] = Fy(i, a);
}
const cp = (r) => r === di || r === de, fp = (r, n) => parseFloat(r.split(", ")[n]), dp = (r, n) => (i, { transform: o }) => {
  if (o === "none" || !o)
    return 0;
  const a = o.match(/^matrix3d\((.+)\)$/u);
  if (a)
    return fp(a[1], n);
  {
    const c = o.match(/^matrix\((.+)\)$/u);
    return c ? fp(c[1], r) : 0;
  }
}, ES = /* @__PURE__ */ new Set(["x", "y", "z"]), CS = fi.filter((r) => !ES.has(r));
function PS(r) {
  const n = [];
  return CS.forEach((i) => {
    const o = r.getValue(i);
    o !== void 0 && (n.push([i, o.get()]), o.set(i.startsWith("scale") ? 1 : 0));
  }), n;
}
const ci = {
  // Dimensions
  width: ({ x: r }, { paddingLeft: n = "0", paddingRight: i = "0" }) => r.max - r.min - parseFloat(n) - parseFloat(i),
  height: ({ y: r }, { paddingTop: n = "0", paddingBottom: i = "0" }) => r.max - r.min - parseFloat(n) - parseFloat(i),
  top: (r, { top: n }) => parseFloat(n),
  left: (r, { left: n }) => parseFloat(n),
  bottom: ({ y: r }, { top: n }) => parseFloat(n) + (r.max - r.min),
  right: ({ x: r }, { left: n }) => parseFloat(n) + (r.max - r.min),
  // Transform
  x: dp(4, 13),
  y: dp(5, 14)
};
ci.translateX = ci.x;
ci.translateY = ci.y;
const vr = /* @__PURE__ */ new Set();
let Mu = !1, Nu = !1;
function Oy() {
  if (Nu) {
    const r = Array.from(vr).filter((o) => o.needsMeasurement), n = new Set(r.map((o) => o.element)), i = /* @__PURE__ */ new Map();
    n.forEach((o) => {
      const a = PS(o);
      a.length && (i.set(o, a), o.render());
    }), r.forEach((o) => o.measureInitialState()), n.forEach((o) => {
      o.render();
      const a = i.get(o);
      a && a.forEach(([c, f]) => {
        var h;
        (h = o.getValue(c)) === null || h === void 0 || h.set(f);
      });
    }), r.forEach((o) => o.measureEndState()), r.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Nu = !1, Mu = !1, vr.forEach((r) => r.complete()), vr.clear();
}
function Ry() {
  vr.forEach((r) => {
    r.readKeyframes(), r.needsMeasurement && (Nu = !0);
  });
}
function _S() {
  Ry(), Oy();
}
class Dc {
  constructor(n, i, o, a, c, f = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...n], this.onComplete = i, this.name = o, this.motionValue = a, this.element = c, this.isAsync = f;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (vr.add(this), Mu || (Mu = !0, Ie.read(Ry), Ie.resolveKeyframes(Oy))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, name: i, element: o, motionValue: a } = this;
    for (let c = 0; c < n.length; c++)
      if (n[c] === null)
        if (c === 0) {
          const f = a?.get(), h = n[n.length - 1];
          if (f !== void 0)
            n[0] = f;
          else if (o && i) {
            const p = o.readValue(i, h);
            p != null && (n[0] = p);
          }
          n[0] === void 0 && (n[0] = h), a && f === void 0 && a.set(n[0]);
        } else
          n[c] = n[c - 1];
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), vr.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, vr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const My = (r) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r), AS = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function DS(r) {
  const n = AS.exec(r);
  if (!n)
    return [,];
  const [, i, o, a] = n;
  return [`--${i ?? o}`, a];
}
function Ny(r, n, i = 1) {
  const [o, a] = DS(r);
  if (!o)
    return;
  const c = window.getComputedStyle(n).getPropertyValue(o);
  if (c) {
    const f = c.trim();
    return My(f) ? parseFloat(f) : f;
  }
  return cc(a) ? Ny(a, n, i + 1) : a;
}
const Ly = (r) => (n) => n.test(r), VS = {
  test: (r) => r === "auto",
  parse: (r) => r
}, jy = [di, de, fn, Gn, xw, vw, VS], hp = (r) => jy.find(Ly(r));
class Iy extends Dc {
  constructor(n, i, o, a, c) {
    super(n, i, o, a, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, element: i, name: o } = this;
    if (!i || !i.current)
      return;
    super.readKeyframes();
    for (let p = 0; p < n.length; p++) {
      let m = n[p];
      if (typeof m == "string" && (m = m.trim(), cc(m))) {
        const g = Ny(m, i.current);
        g !== void 0 && (n[p] = g), p === n.length - 1 && (this.finalKeyframe = m);
      }
    }
    if (this.resolveNoneKeyframes(), !py.has(o) || n.length !== 2)
      return;
    const [a, c] = n, f = hp(a), h = hp(c);
    if (f !== h)
      if (cp(f) && cp(h))
        for (let p = 0; p < n.length; p++) {
          const m = n[p];
          typeof m == "string" && (n[p] = parseFloat(m));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: n, name: i } = this, o = [];
    for (let a = 0; a < n.length; a++)
      oS(n[a]) && o.push(a);
    o.length && kS(n, o, i);
  }
  measureInitialState() {
    const { element: n, unresolvedKeyframes: i, name: o } = this;
    if (!n || !n.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ci[o](n.measureViewportBox(), window.getComputedStyle(n.current)), i[0] = this.measuredOrigin;
    const a = i[i.length - 1];
    a !== void 0 && n.getValue(o, a).jump(a, !1);
  }
  measureEndState() {
    var n;
    const { element: i, name: o, unresolvedKeyframes: a } = this;
    if (!i || !i.current)
      return;
    const c = i.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const f = a.length - 1, h = a[f];
    a[f] = ci[o](i.measureViewportBox(), window.getComputedStyle(i.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), !((n = this.removedTransforms) === null || n === void 0) && n.length && this.removedTransforms.forEach(([p, m]) => {
      i.getValue(p).set(m);
    }), this.resolveNoneKeyframes();
  }
}
const pp = (r, n) => n === "zIndex" ? !1 : !!(typeof r == "number" || Array.isArray(r) || typeof r == "string" && // It's animatable if we have a string
(Xn.test(r) || r === "0") && // And it contains numbers and/or colors
!r.startsWith("url("));
function FS(r) {
  const n = r[0];
  if (r.length === 1)
    return !0;
  for (let i = 0; i < r.length; i++)
    if (r[i] !== n)
      return !0;
}
function OS(r, n, i, o) {
  const a = r[0];
  if (a === null)
    return !1;
  if (n === "display" || n === "visibility")
    return !0;
  const c = r[r.length - 1], f = pp(a, n), h = pp(c, n);
  return !f || !h ? !1 : FS(r) || (i === "spring" || vc(i)) && o;
}
const RS = (r) => r !== null;
function hl(r, { repeat: n, repeatType: i = "loop" }, o) {
  const a = r.filter(RS), c = n && i !== "loop" && n % 2 === 1 ? 0 : a.length - 1;
  return !c || o === void 0 ? a[c] : o;
}
const MS = 40;
class by {
  constructor({ autoplay: n = !0, delay: i = 0, type: o = "keyframes", repeat: a = 0, repeatDelay: c = 0, repeatType: f = "loop", ...h }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = dn.now(), this.options = {
      autoplay: n,
      delay: i,
      type: o,
      repeat: a,
      repeatDelay: c,
      repeatType: f,
      ...h
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > MS ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && _S(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(n, i) {
    this.resolvedAt = dn.now(), this.hasAttemptedResolve = !0;
    const { name: o, type: a, velocity: c, delay: f, onComplete: h, onUpdate: p, isGenerator: m } = this.options;
    if (!m && !OS(n, o, a, c))
      if (f)
        this.options.duration = 0;
      else {
        p && p(hl(n, this.options, i)), h && h(), this.resolveFinishedPromise();
        return;
      }
    const g = this.initPlayback(n, i);
    g !== !1 && (this._resolved = {
      keyframes: n,
      finalKeyframe: i,
      ...g
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(n, i) {
    return this.currentFinishedPromise.then(n, i);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((n) => {
      this.resolveFinishedPromise = n;
    });
  }
}
const Be = (r, n, i) => r + (n - r) * i;
function pu(r, n, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? r + (n - r) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? r + (n - r) * (2 / 3 - i) * 6 : r;
}
function NS({ hue: r, saturation: n, lightness: i, alpha: o }) {
  r /= 360, n /= 100, i /= 100;
  let a = 0, c = 0, f = 0;
  if (!n)
    a = c = f = i;
  else {
    const h = i < 0.5 ? i * (1 + n) : i + n - i * n, p = 2 * i - h;
    a = pu(p, h, r + 1 / 3), c = pu(p, h, r), f = pu(p, h, r - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
function Jo(r, n) {
  return (i) => i > 0 ? n : r;
}
const mu = (r, n, i) => {
  const o = r * r, a = i * (n * n - o) + o;
  return a < 0 ? 0 : Math.sqrt(a);
}, LS = [Ou, yr, ii], jS = (r) => LS.find((n) => n.test(r));
function mp(r) {
  const n = jS(r);
  if (!n)
    return !1;
  let i = n.parse(r);
  return n === ii && (i = NS(i)), i;
}
const yp = (r, n) => {
  const i = mp(r), o = mp(n);
  if (!i || !o)
    return Jo(r, n);
  const a = { ...i };
  return (c) => (a.red = mu(i.red, o.red, c), a.green = mu(i.green, o.green, c), a.blue = mu(i.blue, o.blue, c), a.alpha = Be(i.alpha, o.alpha, c), yr.transform(a));
}, IS = (r, n) => (i) => n(r(i)), Ts = (...r) => r.reduce(IS), Lu = /* @__PURE__ */ new Set(["none", "hidden"]);
function bS(r, n) {
  return Lu.has(r) ? (i) => i <= 0 ? r : n : (i) => i >= 1 ? n : r;
}
function zS(r, n) {
  return (i) => Be(r, n, i);
}
function Vc(r) {
  return typeof r == "number" ? zS : typeof r == "string" ? cc(r) ? Jo : ht.test(r) ? yp : $S : Array.isArray(r) ? zy : typeof r == "object" ? ht.test(r) ? yp : US : Jo;
}
function zy(r, n) {
  const i = [...r], o = i.length, a = r.map((c, f) => Vc(c)(c, n[f]));
  return (c) => {
    for (let f = 0; f < o; f++)
      i[f] = a[f](c);
    return i;
  };
}
function US(r, n) {
  const i = { ...r, ...n }, o = {};
  for (const a in i)
    r[a] !== void 0 && n[a] !== void 0 && (o[a] = Vc(r[a])(r[a], n[a]));
  return (a) => {
    for (const c in o)
      i[c] = o[c](a);
    return i;
  };
}
function BS(r, n) {
  var i;
  const o = [], a = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < n.values.length; c++) {
    const f = n.types[c], h = r.indexes[f][a[f]], p = (i = r.values[h]) !== null && i !== void 0 ? i : 0;
    o[c] = p, a[f]++;
  }
  return o;
}
const $S = (r, n) => {
  const i = Xn.createTransformer(n), o = ys(r), a = ys(n);
  return o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length ? Lu.has(r) && !a.values.length || Lu.has(n) && !o.values.length ? bS(r, n) : Ts(zy(BS(o, a), a.values), i) : Jo(r, n);
};
function Uy(r, n, i) {
  return typeof r == "number" && typeof n == "number" && typeof i == "number" ? Be(r, n, i) : Vc(r)(r, n);
}
const WS = 5;
function By(r, n, i) {
  const o = Math.max(n - WS, 0);
  return my(i - r(o), n - o);
}
const He = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, yu = 1e-3;
function HS({ duration: r = He.duration, bounce: n = He.bounce, velocity: i = He.velocity, mass: o = He.mass }) {
  let a, c, f = 1 - n;
  f = Pn(He.minDamping, He.maxDamping, f), r = Pn(He.minDuration, He.maxDuration, /* @__PURE__ */ Cn(r)), f < 1 ? (a = (m) => {
    const g = m * f, v = g * r, x = g - i, k = ju(m, f), _ = Math.exp(-v);
    return yu - x / k * _;
  }, c = (m) => {
    const v = m * f * r, x = v * i + i, k = Math.pow(f, 2) * Math.pow(m, 2) * r, _ = Math.exp(-v), D = ju(Math.pow(m, 2), f);
    return (-a(m) + yu > 0 ? -1 : 1) * ((x - k) * _) / D;
  }) : (a = (m) => {
    const g = Math.exp(-m * r), v = (m - i) * r + 1;
    return -yu + g * v;
  }, c = (m) => {
    const g = Math.exp(-m * r), v = (i - m) * (r * r);
    return g * v;
  });
  const h = 5 / r, p = GS(a, c, h);
  if (r = /* @__PURE__ */ En(r), isNaN(p))
    return {
      stiffness: He.stiffness,
      damping: He.damping,
      duration: r
    };
  {
    const m = Math.pow(p, 2) * o;
    return {
      stiffness: m,
      damping: f * 2 * Math.sqrt(o * m),
      duration: r
    };
  }
}
const KS = 12;
function GS(r, n, i) {
  let o = i;
  for (let a = 1; a < KS; a++)
    o = o - r(o) / n(o);
  return o;
}
function ju(r, n) {
  return r * Math.sqrt(1 - n * n);
}
const QS = ["duration", "bounce"], YS = ["stiffness", "damping", "mass"];
function gp(r, n) {
  return n.some((i) => r[i] !== void 0);
}
function qS(r) {
  let n = {
    velocity: He.velocity,
    stiffness: He.stiffness,
    damping: He.damping,
    mass: He.mass,
    isResolvedFromDuration: !1,
    ...r
  };
  if (!gp(r, YS) && gp(r, QS))
    if (r.visualDuration) {
      const i = r.visualDuration, o = 2 * Math.PI / (i * 1.2), a = o * o, c = 2 * Pn(0.05, 1, 1 - (r.bounce || 0)) * Math.sqrt(a);
      n = {
        ...n,
        mass: He.mass,
        stiffness: a,
        damping: c
      };
    } else {
      const i = HS(r);
      n = {
        ...n,
        ...i,
        mass: He.mass
      }, n.isResolvedFromDuration = !0;
    }
  return n;
}
function $y(r = He.visualDuration, n = He.bounce) {
  const i = typeof r != "object" ? {
    visualDuration: r,
    keyframes: [0, 1],
    bounce: n
  } : r;
  let { restSpeed: o, restDelta: a } = i;
  const c = i.keyframes[0], f = i.keyframes[i.keyframes.length - 1], h = { done: !1, value: c }, { stiffness: p, damping: m, mass: g, duration: v, velocity: x, isResolvedFromDuration: k } = qS({
    ...i,
    velocity: -/* @__PURE__ */ Cn(i.velocity || 0)
  }), _ = x || 0, D = m / (2 * Math.sqrt(p * g)), M = f - c, F = /* @__PURE__ */ Cn(Math.sqrt(p / g)), R = Math.abs(M) < 5;
  o || (o = R ? He.restSpeed.granular : He.restSpeed.default), a || (a = R ? He.restDelta.granular : He.restDelta.default);
  let U;
  if (D < 1) {
    const L = ju(F, D);
    U = (q) => {
      const le = Math.exp(-D * F * q);
      return f - le * ((_ + D * F * M) / L * Math.sin(L * q) + M * Math.cos(L * q));
    };
  } else if (D === 1)
    U = (L) => f - Math.exp(-F * L) * (M + (_ + F * M) * L);
  else {
    const L = F * Math.sqrt(D * D - 1);
    U = (q) => {
      const le = Math.exp(-D * F * q), te = Math.min(L * q, 300);
      return f - le * ((_ + D * F * M) * Math.sinh(te) + L * M * Math.cosh(te)) / L;
    };
  }
  const H = {
    calculatedDuration: k && v || null,
    next: (L) => {
      const q = U(L);
      if (k)
        h.done = L >= v;
      else {
        let le = 0;
        D < 1 && (le = L === 0 ? /* @__PURE__ */ En(_) : By(U, L, q));
        const te = Math.abs(le) <= o, pe = Math.abs(f - q) <= a;
        h.done = te && pe;
      }
      return h.value = h.done ? f : q, h;
    },
    toString: () => {
      const L = Math.min(ly(H), Du), q = ay((le) => H.next(L * le).value, L, 30);
      return L + "ms " + q;
    }
  };
  return H;
}
function vp({ keyframes: r, velocity: n = 0, power: i = 0.8, timeConstant: o = 325, bounceDamping: a = 10, bounceStiffness: c = 500, modifyTarget: f, min: h, max: p, restDelta: m = 0.5, restSpeed: g }) {
  const v = r[0], x = {
    done: !1,
    value: v
  }, k = (te) => h !== void 0 && te < h || p !== void 0 && te > p, _ = (te) => h === void 0 ? p : p === void 0 || Math.abs(h - te) < Math.abs(p - te) ? h : p;
  let D = i * n;
  const M = v + D, F = f === void 0 ? M : f(M);
  F !== M && (D = F - v);
  const R = (te) => -D * Math.exp(-te / o), U = (te) => F + R(te), H = (te) => {
    const pe = R(te), Se = U(te);
    x.done = Math.abs(pe) <= m, x.value = x.done ? F : Se;
  };
  let L, q;
  const le = (te) => {
    k(x.value) && (L = te, q = $y({
      keyframes: [x.value, _(x.value)],
      velocity: By(U, te, x.value),
      // TODO: This should be passing * 1000
      damping: a,
      stiffness: c,
      restDelta: m,
      restSpeed: g
    }));
  };
  return le(0), {
    calculatedDuration: null,
    next: (te) => {
      let pe = !1;
      return !q && L === void 0 && (pe = !0, H(te), le(te)), L !== void 0 && te >= L ? q.next(te - L) : (!pe && H(te), x);
    }
  };
}
const XS = /* @__PURE__ */ Ss(0.42, 0, 1, 1), ZS = /* @__PURE__ */ Ss(0, 0, 0.58, 1), Wy = /* @__PURE__ */ Ss(0.42, 0, 0.58, 1), JS = (r) => Array.isArray(r) && typeof r[0] != "number", e1 = {
  linear: Nt,
  easeIn: XS,
  easeInOut: Wy,
  easeOut: ZS,
  circIn: Cc,
  circInOut: Ey,
  circOut: ky,
  backIn: Ec,
  backInOut: Sy,
  backOut: wy,
  anticipate: Ty
}, xp = (r) => {
  if (xc(r)) {
    Um(r.length === 4);
    const [n, i, o, a] = r;
    return Ss(n, i, o, a);
  } else if (typeof r == "string")
    return e1[r];
  return r;
};
function t1(r, n, i) {
  const o = [], a = i || Uy, c = r.length - 1;
  for (let f = 0; f < c; f++) {
    let h = a(r[f], r[f + 1]);
    if (n) {
      const p = Array.isArray(n) ? n[f] || Nt : n;
      h = Ts(p, h);
    }
    o.push(h);
  }
  return o;
}
function n1(r, n, { clamp: i = !0, ease: o, mixer: a } = {}) {
  const c = r.length;
  if (Um(c === n.length), c === 1)
    return () => n[0];
  if (c === 2 && n[0] === n[1])
    return () => n[1];
  const f = r[0] === r[1];
  r[0] > r[c - 1] && (r = [...r].reverse(), n = [...n].reverse());
  const h = t1(n, o, a), p = h.length, m = (g) => {
    if (f && g < r[0])
      return n[0];
    let v = 0;
    if (p > 1)
      for (; v < r.length - 2 && !(g < r[v + 1]); v++)
        ;
    const x = /* @__PURE__ */ ai(r[v], r[v + 1], g);
    return h[v](x);
  };
  return i ? (g) => m(Pn(r[0], r[c - 1], g)) : m;
}
function r1(r, n) {
  const i = r[r.length - 1];
  for (let o = 1; o <= n; o++) {
    const a = /* @__PURE__ */ ai(0, n, o);
    r.push(Be(i, 1, a));
  }
}
function i1(r) {
  const n = [0];
  return r1(n, r.length - 1), n;
}
function s1(r, n) {
  return r.map((i) => i * n);
}
function o1(r, n) {
  return r.map(() => n || Wy).splice(0, r.length - 1);
}
function el({ duration: r = 300, keyframes: n, times: i, ease: o = "easeInOut" }) {
  const a = JS(o) ? o.map(xp) : xp(o), c = {
    done: !1,
    value: n[0]
  }, f = s1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === n.length ? i : i1(n),
    r
  ), h = n1(f, n, {
    ease: Array.isArray(a) ? a : o1(n, a)
  });
  return {
    calculatedDuration: r,
    next: (p) => (c.value = h(p), c.done = p >= r, c)
  };
}
const l1 = (r) => {
  const n = ({ timestamp: i }) => r(i);
  return {
    start: () => Ie.update(n, !0),
    stop: () => qn(n),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => at.isProcessing ? at.timestamp : dn.now()
  };
}, a1 = {
  decay: vp,
  inertia: vp,
  tween: el,
  keyframes: el,
  spring: $y
}, u1 = (r) => r / 100;
class Fc extends by {
  constructor(n) {
    super(n), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: p } = this.options;
      p && p();
    };
    const { name: i, motionValue: o, element: a, keyframes: c } = this.options, f = a?.KeyframeResolver || Dc, h = (p, m) => this.onKeyframesResolved(p, m);
    this.resolver = new f(c, h, i, o, a), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(n) {
    const { type: i = "keyframes", repeat: o = 0, repeatDelay: a = 0, repeatType: c, velocity: f = 0 } = this.options, h = vc(i) ? i : a1[i] || el;
    let p, m;
    h !== el && typeof n[0] != "number" && (p = Ts(u1, Uy(n[0], n[1])), n = [0, 100]);
    const g = h({ ...this.options, keyframes: n });
    c === "mirror" && (m = h({
      ...this.options,
      keyframes: [...n].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = ly(g));
    const { calculatedDuration: v } = g, x = v + a, k = x * (o + 1) - a;
    return {
      generator: g,
      mirroredGenerator: m,
      mapPercentToKeyframes: p,
      calculatedDuration: v,
      resolvedDuration: x,
      totalDuration: k
    };
  }
  onPostResolved() {
    const { autoplay: n = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !n ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(n, i = !1) {
    const { resolved: o } = this;
    if (!o) {
      const { keyframes: te } = this.options;
      return { done: !0, value: te[te.length - 1] };
    }
    const { finalKeyframe: a, generator: c, mirroredGenerator: f, mapPercentToKeyframes: h, keyframes: p, calculatedDuration: m, totalDuration: g, resolvedDuration: v } = o;
    if (this.startTime === null)
      return c.next(0);
    const { delay: x, repeat: k, repeatType: _, repeatDelay: D, onUpdate: M } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - g / this.speed, this.startTime)), i ? this.currentTime = n : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(n - this.startTime) * this.speed;
    const F = this.currentTime - x * (this.speed >= 0 ? 1 : -1), R = this.speed >= 0 ? F < 0 : F > g;
    this.currentTime = Math.max(F, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
    let U = this.currentTime, H = c;
    if (k) {
      const te = Math.min(this.currentTime, g) / v;
      let pe = Math.floor(te), Se = te % 1;
      !Se && te >= 1 && (Se = 1), Se === 1 && pe--, pe = Math.min(pe, k + 1), pe % 2 && (_ === "reverse" ? (Se = 1 - Se, D && (Se -= D / v)) : _ === "mirror" && (H = f)), U = Pn(0, 1, Se) * v;
    }
    const L = R ? { done: !1, value: p[0] } : H.next(U);
    h && (L.value = h(L.value));
    let { done: q } = L;
    !R && m !== null && (q = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
    const le = this.holdTime === null && (this.state === "finished" || this.state === "running" && q);
    return le && a !== void 0 && (L.value = hl(p, this.options, a)), M && M(L.value), le && this.finish(), L;
  }
  get duration() {
    const { resolved: n } = this;
    return n ? /* @__PURE__ */ Cn(n.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ Cn(this.currentTime);
  }
  set time(n) {
    n = /* @__PURE__ */ En(n), this.currentTime = n, this.holdTime !== null || this.speed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(n) {
    const i = this.playbackSpeed !== n;
    this.playbackSpeed = n, i && (this.time = /* @__PURE__ */ Cn(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: n = l1, onPlay: i, startTime: o } = this.options;
    this.driver || (this.driver = n((c) => this.tick(c))), i && i();
    const a = this.driver.now();
    this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = o ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var n;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (n = this.currentTime) !== null && n !== void 0 ? n : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: n } = this.options;
    n && n();
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
  sample(n) {
    return this.startTime = 0, this.tick(n, !0);
  }
}
const c1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function f1(r, n, i, { delay: o = 0, duration: a = 300, repeat: c = 0, repeatType: f = "loop", ease: h = "easeInOut", times: p } = {}) {
  const m = { [n]: i };
  p && (m.offset = p);
  const g = cy(h, a);
  return Array.isArray(g) && (m.easing = g), r.animate(m, {
    delay: o,
    duration: a,
    easing: Array.isArray(g) ? "linear" : g,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  });
}
const d1 = /* @__PURE__ */ rc(() => Object.hasOwnProperty.call(Element.prototype, "animate")), tl = 10, h1 = 2e4;
function p1(r) {
  return vc(r.type) || r.type === "spring" || !uy(r.ease);
}
function m1(r, n) {
  const i = new Fc({
    ...n,
    keyframes: r,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let o = { done: !1, value: r[0] };
  const a = [];
  let c = 0;
  for (; !o.done && c < h1; )
    o = i.sample(c), a.push(o.value), c += tl;
  return {
    times: void 0,
    keyframes: a,
    duration: c - tl,
    ease: "linear"
  };
}
const Hy = {
  anticipate: Ty,
  backInOut: Sy,
  circInOut: Ey
};
function y1(r) {
  return r in Hy;
}
class wp extends by {
  constructor(n) {
    super(n);
    const { name: i, motionValue: o, element: a, keyframes: c } = this.options;
    this.resolver = new Iy(c, (f, h) => this.onKeyframesResolved(f, h), i, o, a), this.resolver.scheduleResolve();
  }
  initPlayback(n, i) {
    let { duration: o = 300, times: a, ease: c, type: f, motionValue: h, name: p, startTime: m } = this.options;
    if (!h.owner || !h.owner.current)
      return !1;
    if (typeof c == "string" && Zo() && y1(c) && (c = Hy[c]), p1(this.options)) {
      const { onComplete: v, onUpdate: x, motionValue: k, element: _, ...D } = this.options, M = m1(n, D);
      n = M.keyframes, n.length === 1 && (n[1] = n[0]), o = M.duration, a = M.times, c = M.ease, f = "keyframes";
    }
    const g = f1(h.owner.current, p, n, { ...this.options, duration: o, times: a, ease: c });
    return g.startTime = m ?? this.calcStartTime(), this.pendingTimeline ? (ip(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
      const { onComplete: v } = this.options;
      h.set(hl(n, this.options, i)), v && v(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: g,
      duration: o,
      times: a,
      type: f,
      ease: c,
      keyframes: n
    };
  }
  get duration() {
    const { resolved: n } = this;
    if (!n)
      return 0;
    const { duration: i } = n;
    return /* @__PURE__ */ Cn(i);
  }
  get time() {
    const { resolved: n } = this;
    if (!n)
      return 0;
    const { animation: i } = n;
    return /* @__PURE__ */ Cn(i.currentTime || 0);
  }
  set time(n) {
    const { resolved: i } = this;
    if (!i)
      return;
    const { animation: o } = i;
    o.currentTime = /* @__PURE__ */ En(n);
  }
  get speed() {
    const { resolved: n } = this;
    if (!n)
      return 1;
    const { animation: i } = n;
    return i.playbackRate;
  }
  set speed(n) {
    const { resolved: i } = this;
    if (!i)
      return;
    const { animation: o } = i;
    o.playbackRate = n;
  }
  get state() {
    const { resolved: n } = this;
    if (!n)
      return "idle";
    const { animation: i } = n;
    return i.playState;
  }
  get startTime() {
    const { resolved: n } = this;
    if (!n)
      return null;
    const { animation: i } = n;
    return i.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(n) {
    if (!this._resolved)
      this.pendingTimeline = n;
    else {
      const { resolved: i } = this;
      if (!i)
        return Nt;
      const { animation: o } = i;
      ip(o, n);
    }
    return Nt;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.playState === "finished" && this.updateFinishedPromise(), i.play();
  }
  pause() {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i, keyframes: o, duration: a, type: c, ease: f, times: h } = n;
    if (i.playState === "idle" || i.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: m, onUpdate: g, onComplete: v, element: x, ...k } = this.options, _ = new Fc({
        ...k,
        keyframes: o,
        duration: a,
        type: c,
        ease: f,
        times: h,
        isGenerator: !0
      }), D = /* @__PURE__ */ En(this.time);
      m.setWithVelocity(_.sample(D - tl).value, _.sample(D).value, tl);
    }
    const { onStop: p } = this.options;
    p && p(), this.cancel();
  }
  complete() {
    const { resolved: n } = this;
    n && n.animation.finish();
  }
  cancel() {
    const { resolved: n } = this;
    n && n.animation.cancel();
  }
  static supports(n) {
    const { motionValue: i, name: o, repeatDelay: a, repeatType: c, damping: f, type: h } = n;
    if (!i || !i.owner || !(i.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: p, transformTemplate: m } = i.owner.getProps();
    return d1() && o && c1.has(o) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !p && !m && !a && c !== "mirror" && f !== 0 && h !== "inertia";
  }
}
const g1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, v1 = (r) => ({
  type: "spring",
  stiffness: 550,
  damping: r === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), x1 = {
  type: "keyframes",
  duration: 0.8
}, w1 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, S1 = (r, { keyframes: n }) => n.length > 2 ? x1 : wr.has(r) ? r.startsWith("scale") ? v1(n[1]) : g1 : w1;
function T1({ when: r, delay: n, delayChildren: i, staggerChildren: o, staggerDirection: a, repeat: c, repeatType: f, repeatDelay: h, from: p, elapsed: m, ...g }) {
  return !!Object.keys(g).length;
}
const Oc = (r, n, i, o = {}, a, c) => (f) => {
  const h = gc(o, r) || {}, p = h.delay || o.delay || 0;
  let { elapsed: m = 0 } = o;
  m = m - /* @__PURE__ */ En(p);
  let g = {
    keyframes: Array.isArray(i) ? i : [null, i],
    ease: "easeOut",
    velocity: n.getVelocity(),
    ...h,
    delay: -m,
    onUpdate: (x) => {
      n.set(x), h.onUpdate && h.onUpdate(x);
    },
    onComplete: () => {
      f(), h.onComplete && h.onComplete();
    },
    name: r,
    motionValue: n,
    element: c ? void 0 : a
  };
  T1(h) || (g = {
    ...g,
    ...S1(r, g)
  }), g.duration && (g.duration = /* @__PURE__ */ En(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ En(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let v = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (v = !0)), v && !c && n.get() !== void 0) {
    const x = hl(g.keyframes, h);
    if (x !== void 0)
      return Ie.update(() => {
        g.onUpdate(x), g.onComplete();
      }), new Uw([]);
  }
  return !c && wp.supports(g) ? new wp(g) : new Fc(g);
};
function k1({ protectedKeys: r, needsAnimating: n }, i) {
  const o = r.hasOwnProperty(i) && n[i] !== !0;
  return n[i] = !1, o;
}
function Ky(r, n, { delay: i = 0, transitionOverride: o, type: a } = {}) {
  var c;
  let { transition: f = r.getDefaultTransition(), transitionEnd: h, ...p } = n;
  o && (f = o);
  const m = [], g = a && r.animationState && r.animationState.getState()[a];
  for (const v in p) {
    const x = r.getValue(v, (c = r.latestValues[v]) !== null && c !== void 0 ? c : null), k = p[v];
    if (k === void 0 || g && k1(g, v))
      continue;
    const _ = {
      delay: i,
      ...gc(f || {}, v)
    };
    let D = !1;
    if (window.MotionHandoffAnimation) {
      const F = yy(r);
      if (F) {
        const R = window.MotionHandoffAnimation(F, v, Ie);
        R !== null && (_.startTime = R, D = !0);
      }
    }
    Fu(r, v), x.start(Oc(v, x, k, r.shouldReduceMotion && py.has(v) ? { type: !1 } : _, r, D));
    const M = x.animation;
    M && m.push(M);
  }
  return h && Promise.all(m).then(() => {
    Ie.update(() => {
      h && tS(r, h);
    });
  }), m;
}
function Iu(r, n, i = {}) {
  var o;
  const a = dl(r, n, i.type === "exit" ? (o = r.presenceContext) === null || o === void 0 ? void 0 : o.custom : void 0);
  let { transition: c = r.getDefaultTransition() || {} } = a || {};
  i.transitionOverride && (c = i.transitionOverride);
  const f = a ? () => Promise.all(Ky(r, a, i)) : () => Promise.resolve(), h = r.variantChildren && r.variantChildren.size ? (m = 0) => {
    const { delayChildren: g = 0, staggerChildren: v, staggerDirection: x } = c;
    return E1(r, n, g + m, v, x, i);
  } : () => Promise.resolve(), { when: p } = c;
  if (p) {
    const [m, g] = p === "beforeChildren" ? [f, h] : [h, f];
    return m().then(() => g());
  } else
    return Promise.all([f(), h(i.delay)]);
}
function E1(r, n, i = 0, o = 0, a = 1, c) {
  const f = [], h = (r.variantChildren.size - 1) * o, p = a === 1 ? (m = 0) => m * o : (m = 0) => h - m * o;
  return Array.from(r.variantChildren).sort(C1).forEach((m, g) => {
    m.notify("AnimationStart", n), f.push(Iu(m, n, {
      ...c,
      delay: i + p(g)
    }).then(() => m.notify("AnimationComplete", n)));
  }), Promise.all(f);
}
function C1(r, n) {
  return r.sortNodePosition(n);
}
function P1(r, n, i = {}) {
  r.notify("AnimationStart", n);
  let o;
  if (Array.isArray(n)) {
    const a = n.map((c) => Iu(r, c, i));
    o = Promise.all(a);
  } else if (typeof n == "string")
    o = Iu(r, n, i);
  else {
    const a = typeof n == "function" ? dl(r, n, i.custom) : n;
    o = Promise.all(Ky(r, a, i));
  }
  return o.then(() => {
    r.notify("AnimationComplete", n);
  });
}
const _1 = sc.length;
function Gy(r) {
  if (!r)
    return;
  if (!r.isControllingVariants) {
    const i = r.parent ? Gy(r.parent) || {} : {};
    return r.props.initial !== void 0 && (i.initial = r.props.initial), i;
  }
  const n = {};
  for (let i = 0; i < _1; i++) {
    const o = sc[i], a = r.props[o];
    (hs(a) || a === !1) && (n[o] = a);
  }
  return n;
}
const A1 = [...ic].reverse(), D1 = ic.length;
function V1(r) {
  return (n) => Promise.all(n.map(({ animation: i, options: o }) => P1(r, i, o)));
}
function F1(r) {
  let n = V1(r), i = Sp(), o = !0;
  const a = (p) => (m, g) => {
    var v;
    const x = dl(r, g, p === "exit" ? (v = r.presenceContext) === null || v === void 0 ? void 0 : v.custom : void 0);
    if (x) {
      const { transition: k, transitionEnd: _, ...D } = x;
      m = { ...m, ...D, ..._ };
    }
    return m;
  };
  function c(p) {
    n = p(r);
  }
  function f(p) {
    const { props: m } = r, g = Gy(r.parent) || {}, v = [], x = /* @__PURE__ */ new Set();
    let k = {}, _ = 1 / 0;
    for (let M = 0; M < D1; M++) {
      const F = A1[M], R = i[F], U = m[F] !== void 0 ? m[F] : g[F], H = hs(U), L = F === p ? R.isActive : null;
      L === !1 && (_ = M);
      let q = U === g[F] && U !== m[F] && H;
      if (q && o && r.manuallyAnimateOnMount && (q = !1), R.protectedKeys = { ...k }, // If it isn't active and hasn't *just* been set as inactive
      !R.isActive && L === null || // If we didn't and don't have any defined prop for this animation type
      !U && !R.prevProp || // Or if the prop doesn't define an animation
      cl(U) || typeof U == "boolean")
        continue;
      const le = O1(R.prevProp, U);
      let te = le || // If we're making this variant active, we want to always make it active
      F === p && R.isActive && !q && H || // If we removed a higher-priority variant (i is in reverse order)
      M > _ && H, pe = !1;
      const Se = Array.isArray(U) ? U : [U];
      let ye = Se.reduce(a(F), {});
      L === !1 && (ye = {});
      const { prevResolvedValues: ue = {} } = R, he = {
        ...ue,
        ...ye
      }, xe = (X) => {
        te = !0, x.has(X) && (pe = !0, x.delete(X)), R.needsAnimating[X] = !0;
        const j = r.getValue(X);
        j && (j.liveStyle = !1);
      };
      for (const X in he) {
        const j = ye[X], Z = ue[X];
        if (k.hasOwnProperty(X))
          continue;
        let Y = !1;
        Au(j) && Au(Z) ? Y = !oy(j, Z) : Y = j !== Z, Y ? j != null ? xe(X) : x.add(X) : j !== void 0 && x.has(X) ? xe(X) : R.protectedKeys[X] = !0;
      }
      R.prevProp = U, R.prevResolvedValues = ye, R.isActive && (k = { ...k, ...ye }), o && r.blockInitialAnimation && (te = !1), te && (!(q && le) || pe) && v.push(...Se.map((X) => ({
        animation: X,
        options: { type: F }
      })));
    }
    if (x.size) {
      const M = {};
      x.forEach((F) => {
        const R = r.getBaseTarget(F), U = r.getValue(F);
        U && (U.liveStyle = !0), M[F] = R ?? null;
      }), v.push({ animation: M });
    }
    let D = !!v.length;
    return o && (m.initial === !1 || m.initial === m.animate) && !r.manuallyAnimateOnMount && (D = !1), o = !1, D ? n(v) : Promise.resolve();
  }
  function h(p, m) {
    var g;
    if (i[p].isActive === m)
      return Promise.resolve();
    (g = r.variantChildren) === null || g === void 0 || g.forEach((x) => {
      var k;
      return (k = x.animationState) === null || k === void 0 ? void 0 : k.setActive(p, m);
    }), i[p].isActive = m;
    const v = f(p);
    for (const x in i)
      i[x].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: f,
    setActive: h,
    setAnimateFunction: c,
    getState: () => i,
    reset: () => {
      i = Sp(), o = !0;
    }
  };
}
function O1(r, n) {
  return typeof n == "string" ? n !== r : Array.isArray(n) ? !oy(n, r) : !1;
}
function dr(r = !1) {
  return {
    isActive: r,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Sp() {
  return {
    animate: dr(!0),
    whileInView: dr(),
    whileHover: dr(),
    whileTap: dr(),
    whileDrag: dr(),
    whileFocus: dr(),
    exit: dr()
  };
}
class Zn {
  constructor(n) {
    this.isMounted = !1, this.node = n;
  }
  update() {
  }
}
class R1 extends Zn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(n) {
    super(n), n.animationState || (n.animationState = F1(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    cl(n) && (this.unmountControls = n.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    n !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var n;
    this.node.animationState.reset(), (n = this.unmountControls) === null || n === void 0 || n.call(this);
  }
}
let M1 = 0;
class N1 extends Zn {
  constructor() {
    super(...arguments), this.id = M1++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: n, onExitComplete: i } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === o)
      return;
    const a = this.node.animationState.setActive("exit", !n);
    i && !n && a.then(() => i(this.id));
  }
  mount() {
    const { register: n } = this.node.presenceContext || {};
    n && (this.unmount = n(this.id));
  }
  unmount() {
  }
}
const L1 = {
  animation: {
    Feature: R1
  },
  exit: {
    Feature: N1
  }
};
function gs(r, n, i, o = { passive: !0 }) {
  return r.addEventListener(n, i, o), () => r.removeEventListener(n, i);
}
function ks(r) {
  return {
    point: {
      x: r.pageX,
      y: r.pageY
    }
  };
}
const j1 = (r) => (n) => wc(n) && r(n, ks(n));
function cs(r, n, i, o) {
  return gs(r, n, j1(i), o);
}
const Tp = (r, n) => Math.abs(r - n);
function I1(r, n) {
  const i = Tp(r.x, n.x), o = Tp(r.y, n.y);
  return Math.sqrt(i ** 2 + o ** 2);
}
class Qy {
  constructor(n, i, { transformPagePoint: o, contextWindow: a, dragSnapToOrigin: c = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = vu(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, k = I1(v.offset, { x: 0, y: 0 }) >= 3;
      if (!x && !k)
        return;
      const { point: _ } = v, { timestamp: D } = at;
      this.history.push({ ..._, timestamp: D });
      const { onStart: M, onMove: F } = this.handlers;
      x || (M && M(this.lastMoveEvent, v), this.startEvent = this.lastMoveEvent), F && F(this.lastMoveEvent, v);
    }, this.handlePointerMove = (v, x) => {
      this.lastMoveEvent = v, this.lastMoveEventInfo = gu(x, this.transformPagePoint), Ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (v, x) => {
      this.end();
      const { onEnd: k, onSessionEnd: _, resumeAnimation: D } = this.handlers;
      if (this.dragSnapToOrigin && D && D(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const M = vu(v.type === "pointercancel" ? this.lastMoveEventInfo : gu(x, this.transformPagePoint), this.history);
      this.startEvent && k && k(v, M), _ && _(v, M);
    }, !wc(n))
      return;
    this.dragSnapToOrigin = c, this.handlers = i, this.transformPagePoint = o, this.contextWindow = a || window;
    const f = ks(n), h = gu(f, this.transformPagePoint), { point: p } = h, { timestamp: m } = at;
    this.history = [{ ...p, timestamp: m }];
    const { onSessionStart: g } = i;
    g && g(n, vu(h, this.history)), this.removeListeners = Ts(cs(this.contextWindow, "pointermove", this.handlePointerMove), cs(this.contextWindow, "pointerup", this.handlePointerUp), cs(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), qn(this.updatePoint);
  }
}
function gu(r, n) {
  return n ? { point: n(r.point) } : r;
}
function kp(r, n) {
  return { x: r.x - n.x, y: r.y - n.y };
}
function vu({ point: r }, n) {
  return {
    point: r,
    delta: kp(r, Yy(n)),
    offset: kp(r, b1(n)),
    velocity: z1(n, 0.1)
  };
}
function b1(r) {
  return r[0];
}
function Yy(r) {
  return r[r.length - 1];
}
function z1(r, n) {
  if (r.length < 2)
    return { x: 0, y: 0 };
  let i = r.length - 1, o = null;
  const a = Yy(r);
  for (; i >= 0 && (o = r[i], !(a.timestamp - o.timestamp > /* @__PURE__ */ En(n))); )
    i--;
  if (!o)
    return { x: 0, y: 0 };
  const c = /* @__PURE__ */ Cn(a.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (a.x - o.x) / c,
    y: (a.y - o.y) / c
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
const qy = 1e-4, U1 = 1 - qy, B1 = 1 + qy, Xy = 0.01, $1 = 0 - Xy, W1 = 0 + Xy;
function Lt(r) {
  return r.max - r.min;
}
function H1(r, n, i) {
  return Math.abs(r - n) <= i;
}
function Ep(r, n, i, o = 0.5) {
  r.origin = o, r.originPoint = Be(n.min, n.max, r.origin), r.scale = Lt(i) / Lt(n), r.translate = Be(i.min, i.max, r.origin) - r.originPoint, (r.scale >= U1 && r.scale <= B1 || isNaN(r.scale)) && (r.scale = 1), (r.translate >= $1 && r.translate <= W1 || isNaN(r.translate)) && (r.translate = 0);
}
function fs(r, n, i, o) {
  Ep(r.x, n.x, i.x, o ? o.originX : void 0), Ep(r.y, n.y, i.y, o ? o.originY : void 0);
}
function Cp(r, n, i) {
  r.min = i.min + n.min, r.max = r.min + Lt(n);
}
function K1(r, n, i) {
  Cp(r.x, n.x, i.x), Cp(r.y, n.y, i.y);
}
function Pp(r, n, i) {
  r.min = n.min - i.min, r.max = r.min + Lt(n);
}
function ds(r, n, i) {
  Pp(r.x, n.x, i.x), Pp(r.y, n.y, i.y);
}
function G1(r, { min: n, max: i }, o) {
  return n !== void 0 && r < n ? r = o ? Be(n, r, o.min) : Math.max(r, n) : i !== void 0 && r > i && (r = o ? Be(i, r, o.max) : Math.min(r, i)), r;
}
function _p(r, n, i) {
  return {
    min: n !== void 0 ? r.min + n : void 0,
    max: i !== void 0 ? r.max + i - (r.max - r.min) : void 0
  };
}
function Q1(r, { top: n, left: i, bottom: o, right: a }) {
  return {
    x: _p(r.x, i, a),
    y: _p(r.y, n, o)
  };
}
function Ap(r, n) {
  let i = n.min - r.min, o = n.max - r.max;
  return n.max - n.min < r.max - r.min && ([i, o] = [o, i]), { min: i, max: o };
}
function Y1(r, n) {
  return {
    x: Ap(r.x, n.x),
    y: Ap(r.y, n.y)
  };
}
function q1(r, n) {
  let i = 0.5;
  const o = Lt(r), a = Lt(n);
  return a > o ? i = /* @__PURE__ */ ai(n.min, n.max - o, r.min) : o > a && (i = /* @__PURE__ */ ai(r.min, r.max - a, n.min)), Pn(0, 1, i);
}
function X1(r, n) {
  const i = {};
  return n.min !== void 0 && (i.min = n.min - r.min), n.max !== void 0 && (i.max = n.max - r.min), i;
}
const bu = 0.35;
function Z1(r = bu) {
  return r === !1 ? r = 0 : r === !0 && (r = bu), {
    x: Dp(r, "left", "right"),
    y: Dp(r, "top", "bottom")
  };
}
function Dp(r, n, i) {
  return {
    min: Vp(r, n),
    max: Vp(r, i)
  };
}
function Vp(r, n) {
  return typeof r == "number" ? r : r[n] || 0;
}
const Fp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), si = () => ({
  x: Fp(),
  y: Fp()
}), Op = () => ({ min: 0, max: 0 }), Qe = () => ({
  x: Op(),
  y: Op()
});
function Wt(r) {
  return [r("x"), r("y")];
}
function Zy({ top: r, left: n, right: i, bottom: o }) {
  return {
    x: { min: n, max: i },
    y: { min: r, max: o }
  };
}
function J1({ x: r, y: n }) {
  return { top: n.min, right: r.max, bottom: n.max, left: r.min };
}
function eT(r, n) {
  if (!n)
    return r;
  const i = n({ x: r.left, y: r.top }), o = n({ x: r.right, y: r.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: o.y,
    right: o.x
  };
}
function xu(r) {
  return r === void 0 || r === 1;
}
function zu({ scale: r, scaleX: n, scaleY: i }) {
  return !xu(r) || !xu(n) || !xu(i);
}
function hr(r) {
  return zu(r) || Jy(r) || r.z || r.rotate || r.rotateX || r.rotateY || r.skewX || r.skewY;
}
function Jy(r) {
  return Rp(r.x) || Rp(r.y);
}
function Rp(r) {
  return r && r !== "0%";
}
function nl(r, n, i) {
  const o = r - i, a = n * o;
  return i + a;
}
function Mp(r, n, i, o, a) {
  return a !== void 0 && (r = nl(r, a, o)), nl(r, i, o) + n;
}
function Uu(r, n = 0, i = 1, o, a) {
  r.min = Mp(r.min, n, i, o, a), r.max = Mp(r.max, n, i, o, a);
}
function eg(r, { x: n, y: i }) {
  Uu(r.x, n.translate, n.scale, n.originPoint), Uu(r.y, i.translate, i.scale, i.originPoint);
}
const Np = 0.999999999999, Lp = 1.0000000000001;
function tT(r, n, i, o = !1) {
  const a = i.length;
  if (!a)
    return;
  n.x = n.y = 1;
  let c, f;
  for (let h = 0; h < a; h++) {
    c = i[h], f = c.projectionDelta;
    const { visualElement: p } = c.options;
    p && p.props.style && p.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && li(r, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), f && (n.x *= f.x.scale, n.y *= f.y.scale, eg(r, f)), o && hr(c.latestValues) && li(r, c.latestValues));
  }
  n.x < Lp && n.x > Np && (n.x = 1), n.y < Lp && n.y > Np && (n.y = 1);
}
function oi(r, n) {
  r.min = r.min + n, r.max = r.max + n;
}
function jp(r, n, i, o, a = 0.5) {
  const c = Be(r.min, r.max, a);
  Uu(r, n, i, c, o);
}
function li(r, n) {
  jp(r.x, n.x, n.scaleX, n.scale, n.originX), jp(r.y, n.y, n.scaleY, n.scale, n.originY);
}
function tg(r, n) {
  return Zy(eT(r.getBoundingClientRect(), n));
}
function nT(r, n, i) {
  const o = tg(r, i), { scroll: a } = n;
  return a && (oi(o.x, a.offset.x), oi(o.y, a.offset.y)), o;
}
const ng = ({ current: r }) => r ? r.ownerDocument.defaultView : null, rT = /* @__PURE__ */ new WeakMap();
class iT {
  constructor(n) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Qe(), this.visualElement = n;
  }
  start(n, { snapToCursor: i = !1 } = {}) {
    const { presenceContext: o } = this.visualElement;
    if (o && o.isPresent === !1)
      return;
    const a = (g) => {
      const { dragSnapToOrigin: v } = this.getProps();
      v ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(ks(g).point);
    }, c = (g, v) => {
      const { drag: x, dragPropagation: k, onDragStart: _ } = this.getProps();
      if (x && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = qw(x), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Wt((M) => {
        let F = this.getAxisMotionValue(M).get() || 0;
        if (fn.test(F)) {
          const { projection: R } = this.visualElement;
          if (R && R.layout) {
            const U = R.layout.layoutBox[M];
            U && (F = Lt(U) * (parseFloat(F) / 100));
          }
        }
        this.originPoint[M] = F;
      }), _ && Ie.postRender(() => _(g, v)), Fu(this.visualElement, "transform");
      const { animationState: D } = this.visualElement;
      D && D.setActive("whileDrag", !0);
    }, f = (g, v) => {
      const { dragPropagation: x, dragDirectionLock: k, onDirectionLock: _, onDrag: D } = this.getProps();
      if (!x && !this.openDragLock)
        return;
      const { offset: M } = v;
      if (k && this.currentDirection === null) {
        this.currentDirection = sT(M), this.currentDirection !== null && _ && _(this.currentDirection);
        return;
      }
      this.updateAxis("x", v.point, M), this.updateAxis("y", v.point, M), this.visualElement.render(), D && D(g, v);
    }, h = (g, v) => this.stop(g, v), p = () => Wt((g) => {
      var v;
      return this.getAnimationState(g) === "paused" && ((v = this.getAxisMotionValue(g).animation) === null || v === void 0 ? void 0 : v.play());
    }), { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new Qy(n, {
      onSessionStart: a,
      onStart: c,
      onMove: f,
      onSessionEnd: h,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: m,
      contextWindow: ng(this.visualElement)
    });
  }
  stop(n, i) {
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: a } = i;
    this.startAnimation(a);
    const { onDragEnd: c } = this.getProps();
    c && Ie.postRender(() => c(n, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: i } = this.visualElement;
    n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1);
  }
  updateAxis(n, i, o) {
    const { drag: a } = this.getProps();
    if (!o || !bo(n, a, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(n);
    let f = this.originPoint[n] + o[n];
    this.constraints && this.constraints[n] && (f = G1(f, this.constraints[n], this.elastic[n])), c.set(f);
  }
  resolveConstraints() {
    var n;
    const { dragConstraints: i, dragElastic: o } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (n = this.visualElement.projection) === null || n === void 0 ? void 0 : n.layout, c = this.constraints;
    i && ri(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && a ? this.constraints = Q1(a.layoutBox, i) : this.constraints = !1, this.elastic = Z1(o), c !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Wt((f) => {
      this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = X1(a.layoutBox[f], this.constraints[f]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: i } = this.getProps();
    if (!n || !ri(n))
      return !1;
    const o = n.current, { projection: a } = this.visualElement;
    if (!a || !a.layout)
      return !1;
    const c = nT(o, a.root, this.visualElement.getTransformPagePoint());
    let f = Y1(a.layout.layoutBox, c);
    if (i) {
      const h = i(J1(f));
      this.hasMutatedConstraints = !!h, h && (f = Zy(h));
    }
    return f;
  }
  startAnimation(n) {
    const { drag: i, dragMomentum: o, dragElastic: a, dragTransition: c, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), p = this.constraints || {}, m = Wt((g) => {
      if (!bo(g, i, this.currentDirection))
        return;
      let v = p && p[g] || {};
      f && (v = { min: 0, max: 0 });
      const x = a ? 200 : 1e6, k = a ? 40 : 1e7, _ = {
        type: "inertia",
        velocity: o ? n[g] : 0,
        bounceStiffness: x,
        bounceDamping: k,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...v
      };
      return this.startAxisValueAnimation(g, _);
    });
    return Promise.all(m).then(h);
  }
  startAxisValueAnimation(n, i) {
    const o = this.getAxisMotionValue(n);
    return Fu(this.visualElement, n), o.start(Oc(n, o, 0, i, this.visualElement, !1));
  }
  stopAnimation() {
    Wt((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    Wt((n) => {
      var i;
      return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.pause();
    });
  }
  getAnimationState(n) {
    var i;
    return (i = this.getAxisMotionValue(n).animation) === null || i === void 0 ? void 0 : i.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(n) {
    const i = `_drag${n.toUpperCase()}`, o = this.visualElement.getProps(), a = o[i];
    return a || this.visualElement.getValue(n, (o.initial ? o.initial[n] : void 0) || 0);
  }
  snapToCursor(n) {
    Wt((i) => {
      const { drag: o } = this.getProps();
      if (!bo(i, o, this.currentDirection))
        return;
      const { projection: a } = this.visualElement, c = this.getAxisMotionValue(i);
      if (a && a.layout) {
        const { min: f, max: h } = a.layout.layoutBox[i];
        c.set(n[i] - Be(f, h, 0.5));
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
    const { drag: n, dragConstraints: i } = this.getProps(), { projection: o } = this.visualElement;
    if (!ri(i) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const a = { x: 0, y: 0 };
    Wt((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const p = h.get();
        a[f] = q1({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), Wt((f) => {
      if (!bo(f, n, null))
        return;
      const h = this.getAxisMotionValue(f), { min: p, max: m } = this.constraints[f];
      h.set(Be(p, m, a[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    rT.set(this.visualElement, this);
    const n = this.visualElement.current, i = cs(n, "pointerdown", (p) => {
      const { drag: m, dragListener: g = !0 } = this.getProps();
      m && g && this.start(p);
    }), o = () => {
      const { dragConstraints: p } = this.getProps();
      ri(p) && p.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: a } = this.visualElement, c = a.addEventListener("measure", o);
    a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Ie.read(o);
    const f = gs(window, "resize", () => this.scalePositionWithinConstraints()), h = a.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: m }) => {
      this.isDragging && m && (Wt((g) => {
        const v = this.getAxisMotionValue(g);
        v && (this.originPoint[g] += p[g].translate, v.set(v.get() + p[g].translate));
      }), this.visualElement.render());
    }));
    return () => {
      f(), i(), c(), h && h();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: o = !1, dragPropagation: a = !1, dragConstraints: c = !1, dragElastic: f = bu, dragMomentum: h = !0 } = n;
    return {
      ...n,
      drag: i,
      dragDirectionLock: o,
      dragPropagation: a,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: h
    };
  }
}
function bo(r, n, i) {
  return (n === !0 || n === r) && (i === null || i === r);
}
function sT(r, n = 10) {
  let i = null;
  return Math.abs(r.y) > n ? i = "y" : Math.abs(r.x) > n && (i = "x"), i;
}
class oT extends Zn {
  constructor(n) {
    super(n), this.removeGroupControls = Nt, this.removeListeners = Nt, this.controls = new iT(n);
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Nt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ip = (r) => (n, i) => {
  r && Ie.postRender(() => r(n, i));
};
class lT extends Zn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Nt;
  }
  onPointerDown(n) {
    this.session = new Qy(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ng(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: n, onPanStart: i, onPan: o, onPanEnd: a } = this.node.getProps();
    return {
      onSessionStart: Ip(n),
      onStart: Ip(i),
      onMove: o,
      onEnd: (c, f) => {
        delete this.session, a && Ie.postRender(() => a(c, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = cs(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ho = {
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
function bp(r, n) {
  return n.max === n.min ? 0 : r / (n.max - n.min) * 100;
}
const ts = {
  correct: (r, n) => {
    if (!n.target)
      return r;
    if (typeof r == "string")
      if (de.test(r))
        r = parseFloat(r);
      else
        return r;
    const i = bp(r, n.target.x), o = bp(r, n.target.y);
    return `${i}% ${o}%`;
  }
}, aT = {
  correct: (r, { treeScale: n, projectionDelta: i }) => {
    const o = r, a = Xn.parse(r);
    if (a.length > 5)
      return o;
    const c = Xn.createTransformer(r), f = typeof a[0] != "number" ? 1 : 0, h = i.x.scale * n.x, p = i.y.scale * n.y;
    a[0 + f] /= h, a[1 + f] /= p;
    const m = Be(h, p, 0.5);
    return typeof a[2 + f] == "number" && (a[2 + f] /= m), typeof a[3 + f] == "number" && (a[3 + f] /= m), c(a);
  }
};
class uT extends G.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: n, layoutGroup: i, switchLayoutGroup: o, layoutId: a } = this.props, { projection: c } = n;
    Dw(cT), c && (i.group && i.group.add(c), o && o.register && a && o.register(c), c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), Ho.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(n) {
    const { layoutDependency: i, visualElement: o, drag: a, isPresent: c } = this.props, f = o.projection;
    return f && (f.isPresent = c, a || n.layoutDependency !== i || i === void 0 ? f.willUpdate() : this.safeToRemove(), n.isPresent !== c && (c ? f.promote() : f.relegate() || Ie.postRender(() => {
      const h = f.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n && (n.root.didUpdate(), lc.postRender(() => {
      !n.currentAnimation && n.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: n, layoutGroup: i, switchLayoutGroup: o } = this.props, { projection: a } = n;
    a && (a.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(a), o && o.deregister && o.deregister(a));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function rg(r) {
  const [n, i] = bm(), o = G.useContext(Ju);
  return Q.jsx(uT, { ...r, layoutGroup: o, switchLayoutGroup: G.useContext(Gm), isPresent: n, safeToRemove: i });
}
const cT = {
  borderRadius: {
    ...ts,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ts,
  borderTopRightRadius: ts,
  borderBottomLeftRadius: ts,
  borderBottomRightRadius: ts,
  boxShadow: aT
};
function fT(r, n, i) {
  const o = pt(r) ? r : ms(r);
  return o.start(Oc("", o, n, i)), o.animation;
}
function dT(r) {
  return r instanceof SVGElement && r.tagName !== "svg";
}
const hT = (r, n) => r.depth - n.depth;
class pT {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(n) {
    Sc(this.children, n), this.isDirty = !0;
  }
  remove(n) {
    Tc(this.children, n), this.isDirty = !0;
  }
  forEach(n) {
    this.isDirty && this.children.sort(hT), this.isDirty = !1, this.children.forEach(n);
  }
}
function mT(r, n) {
  const i = dn.now(), o = ({ timestamp: a }) => {
    const c = a - i;
    c >= n && (qn(o), r(c - n));
  };
  return Ie.read(o, !0), () => qn(o);
}
const ig = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], yT = ig.length, zp = (r) => typeof r == "string" ? parseFloat(r) : r, Up = (r) => typeof r == "number" || de.test(r);
function gT(r, n, i, o, a, c) {
  a ? (r.opacity = Be(
    0,
    // TODO Reinstate this if only child
    i.opacity !== void 0 ? i.opacity : 1,
    vT(o)
  ), r.opacityExit = Be(n.opacity !== void 0 ? n.opacity : 1, 0, xT(o))) : c && (r.opacity = Be(n.opacity !== void 0 ? n.opacity : 1, i.opacity !== void 0 ? i.opacity : 1, o));
  for (let f = 0; f < yT; f++) {
    const h = `border${ig[f]}Radius`;
    let p = Bp(n, h), m = Bp(i, h);
    if (p === void 0 && m === void 0)
      continue;
    p || (p = 0), m || (m = 0), p === 0 || m === 0 || Up(p) === Up(m) ? (r[h] = Math.max(Be(zp(p), zp(m), o), 0), (fn.test(m) || fn.test(p)) && (r[h] += "%")) : r[h] = m;
  }
  (n.rotate || i.rotate) && (r.rotate = Be(n.rotate || 0, i.rotate || 0, o));
}
function Bp(r, n) {
  return r[n] !== void 0 ? r[n] : r.borderRadius;
}
const vT = /* @__PURE__ */ sg(0, 0.5, ky), xT = /* @__PURE__ */ sg(0.5, 0.95, Nt);
function sg(r, n, i) {
  return (o) => o < r ? 0 : o > n ? 1 : i(/* @__PURE__ */ ai(r, n, o));
}
function $p(r, n) {
  r.min = n.min, r.max = n.max;
}
function $t(r, n) {
  $p(r.x, n.x), $p(r.y, n.y);
}
function Wp(r, n) {
  r.translate = n.translate, r.scale = n.scale, r.originPoint = n.originPoint, r.origin = n.origin;
}
function Hp(r, n, i, o, a) {
  return r -= n, r = nl(r, 1 / i, o), a !== void 0 && (r = nl(r, 1 / a, o)), r;
}
function wT(r, n = 0, i = 1, o = 0.5, a, c = r, f = r) {
  if (fn.test(n) && (n = parseFloat(n), n = Be(f.min, f.max, n / 100) - f.min), typeof n != "number")
    return;
  let h = Be(c.min, c.max, o);
  r === c && (h -= n), r.min = Hp(r.min, n, i, h, a), r.max = Hp(r.max, n, i, h, a);
}
function Kp(r, n, [i, o, a], c, f) {
  wT(r, n[i], n[o], n[a], n.scale, c, f);
}
const ST = ["x", "scaleX", "originX"], TT = ["y", "scaleY", "originY"];
function Gp(r, n, i, o) {
  Kp(r.x, n, ST, i ? i.x : void 0, o ? o.x : void 0), Kp(r.y, n, TT, i ? i.y : void 0, o ? o.y : void 0);
}
function Qp(r) {
  return r.translate === 0 && r.scale === 1;
}
function og(r) {
  return Qp(r.x) && Qp(r.y);
}
function Yp(r, n) {
  return r.min === n.min && r.max === n.max;
}
function kT(r, n) {
  return Yp(r.x, n.x) && Yp(r.y, n.y);
}
function qp(r, n) {
  return Math.round(r.min) === Math.round(n.min) && Math.round(r.max) === Math.round(n.max);
}
function lg(r, n) {
  return qp(r.x, n.x) && qp(r.y, n.y);
}
function Xp(r) {
  return Lt(r.x) / Lt(r.y);
}
function Zp(r, n) {
  return r.translate === n.translate && r.scale === n.scale && r.originPoint === n.originPoint;
}
class ET {
  constructor() {
    this.members = [];
  }
  add(n) {
    Sc(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (Tc(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(n) {
    const i = this.members.findIndex((a) => n === a);
    if (i === 0)
      return !1;
    let o;
    for (let a = i; a >= 0; a--) {
      const c = this.members[a];
      if (c.isPresent !== !1) {
        o = c;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(n, i) {
    const o = this.lead;
    if (n !== o && (this.prevLead = o, this.lead = n, n.show(), o)) {
      o.instance && o.scheduleRender(), n.scheduleRender(), n.resumeFrom = o, i && (n.resumeFrom.preserveOpacity = !0), o.snapshot && (n.snapshot = o.snapshot, n.snapshot.latestValues = o.animationValues || o.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
      const { crossfade: a } = n.options;
      a === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: i, resumingFrom: o } = n;
      i.onExitComplete && i.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((n) => {
      n.instance && n.scheduleRender(!1);
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
function CT(r, n, i) {
  let o = "";
  const a = r.x.translate / n.x, c = r.y.translate / n.y, f = i?.z || 0;
  if ((a || c || f) && (o = `translate3d(${a}px, ${c}px, ${f}px) `), (n.x !== 1 || n.y !== 1) && (o += `scale(${1 / n.x}, ${1 / n.y}) `), i) {
    const { transformPerspective: m, rotate: g, rotateX: v, rotateY: x, skewX: k, skewY: _ } = i;
    m && (o = `perspective(${m}px) ${o}`), g && (o += `rotate(${g}deg) `), v && (o += `rotateX(${v}deg) `), x && (o += `rotateY(${x}deg) `), k && (o += `skewX(${k}deg) `), _ && (o += `skewY(${_}deg) `);
  }
  const h = r.x.scale * n.x, p = r.y.scale * n.y;
  return (h !== 1 || p !== 1) && (o += `scale(${h}, ${p})`), o || "none";
}
const pr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, os = typeof window < "u" && window.MotionDebug !== void 0, wu = ["", "X", "Y", "Z"], PT = { visibility: "hidden" }, Jp = 1e3;
let _T = 0;
function Su(r, n, i, o) {
  const { latestValues: a } = n;
  a[r] && (i[r] = a[r], n.setStaticValue(r, 0), o && (o[r] = 0));
}
function ag(r) {
  if (r.hasCheckedOptimisedAppear = !0, r.root === r)
    return;
  const { visualElement: n } = r.options;
  if (!n)
    return;
  const i = yy(n);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: a, layoutId: c } = r.options;
    window.MotionCancelOptimisedAnimation(i, "transform", Ie, !(a || c));
  }
  const { parent: o } = r;
  o && !o.hasCheckedOptimisedAppear && ag(o);
}
function ug({ attachResizeListener: r, defaultParent: n, measureScroll: i, checkIsScrollRoot: o, resetTransform: a }) {
  return class {
    constructor(f = {}, h = n?.()) {
      this.id = _T++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, os && (pr.totalNodes = pr.resolvedTargetDeltas = pr.recalculatedProjection = 0), this.nodes.forEach(VT), this.nodes.forEach(NT), this.nodes.forEach(LT), this.nodes.forEach(FT), os && window.MotionDebug.record(pr);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pT());
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new kc()), this.eventHandlers.get(f).add(h);
    }
    notifyListeners(f, ...h) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...h);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    /**
     * Lifecycles
     */
    mount(f, h = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = dT(f), this.instance = f;
      const { layoutId: p, layout: m, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), h && (m || p) && (this.isLayoutDirty = !0), r) {
        let v;
        const x = () => this.root.updateBlockedByResize = !1;
        r(f, () => {
          this.root.updateBlockedByResize = !0, v && v(), v = mT(x, 250), Ho.hasAnimatedSinceResize && (Ho.hasAnimatedSinceResize = !1, this.nodes.forEach(tm));
        });
      }
      p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && g && (p || m) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: x, hasRelativeTargetChanged: k, layout: _ }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const D = this.options.transition || g.getDefaultTransition() || UT, { onLayoutAnimationStart: M, onLayoutAnimationComplete: F } = g.getProps(), R = !this.targetLayout || !lg(this.targetLayout, _) || k, U = !x && k;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || U || x && (R || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(v, U);
          const H = {
            ...gc(D, "layout"),
            onPlay: M,
            onComplete: F
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H);
        } else
          x || tm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = _;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, qn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(jT), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ag(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p)
        return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(em);
        return;
      }
      this.isUpdating || this.nodes.forEach(RT), this.isUpdating = !1, this.nodes.forEach(MT), this.nodes.forEach(AT), this.nodes.forEach(DT), this.clearAllSnapshots();
      const h = dn.now();
      at.delta = Pn(0, 1e3 / 60, h - at.timestamp), at.timestamp = h, at.isProcessing = !0, fu.update.process(at), fu.preRender.process(at), fu.render.process(at), at.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, lc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(OT), this.sharedNodes.forEach(IT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ie.postRender(() => {
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
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Qe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h) {
        const p = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p
        };
      }
    }
    resetTransform() {
      if (!a)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !og(this.projectionDelta), p = this.getTransformTemplate(), m = p ? p(this.latestValues, "") : void 0, g = m !== this.prevTransformTemplateValue;
      f && (h || hr(this.latestValues) || g) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return f && (p = this.removeTransform(p)), BT(p), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: p,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var f;
      const { visualElement: h } = this.options;
      if (!h)
        return Qe();
      const p = h.measureViewportBox();
      if (!(((f = this.scroll) === null || f === void 0 ? void 0 : f.wasRoot) || this.path.some($T))) {
        const { scroll: g } = this.root;
        g && (oi(p.x, g.offset.x), oi(p.y, g.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      var h;
      const p = Qe();
      if ($t(p, f), !((h = this.scroll) === null || h === void 0) && h.wasRoot)
        return p;
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m], { scroll: v, options: x } = g;
        g !== this.root && v && x.layoutScroll && (v.wasRoot && $t(p, f), oi(p.x, v.offset.x), oi(p.y, v.offset.y));
      }
      return p;
    }
    applyTransform(f, h = !1) {
      const p = Qe();
      $t(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const g = this.path[m];
        !h && g.options.layoutScroll && g.scroll && g !== g.root && li(p, {
          x: -g.scroll.offset.x,
          y: -g.scroll.offset.y
        }), hr(g.latestValues) && li(p, g.latestValues);
      }
      return hr(this.latestValues) && li(p, this.latestValues), p;
    }
    removeTransform(f) {
      const h = Qe();
      $t(h, f);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!m.instance || !hr(m.latestValues))
          continue;
        zu(m.latestValues) && m.updateSnapshot();
        const g = Qe(), v = m.measurePageBox();
        $t(g, v), Gp(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g);
      }
      return hr(this.latestValues) && Gp(h, this.latestValues), h;
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== at.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var h;
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const m = !!this.resumingFrom || this !== p;
      if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((h = this.parent) === null || h === void 0) && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: x } = this.options;
      if (!(!this.layout || !(v || x))) {
        if (this.resolvedRelativeTargetAt = at.timestamp, !this.targetDelta && !this.relativeTarget) {
          const k = this.getClosestProjectingParent();
          k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qe(), this.relativeTargetOrigin = Qe(), ds(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox), $t(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Qe(), this.targetWithTransforms = Qe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), K1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : $t(this.target, this.layout.layoutBox), eg(this.target, this.targetDelta)) : $t(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const k = this.getClosestProjectingParent();
            k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Qe(), this.relativeTargetOrigin = Qe(), ds(this.relativeTargetOrigin, this.target, k.target), $t(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          os && pr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || zu(this.parent.latestValues) || Jy(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var f;
      const h = this.getLead(), p = !!this.resumingFrom || this !== h;
      let m = !0;
      if ((this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty) && (m = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === at.timestamp && (m = !1), m)
        return;
      const { layout: g, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || v))
        return;
      $t(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x, k = this.treeScale.y;
      tT(this.layoutCorrected, this.treeScale, this.path, p), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = Qe());
      const { target: _ } = h;
      if (!_) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Wp(this.prevProjectionDelta.x, this.projectionDelta.x), Wp(this.prevProjectionDelta.y, this.projectionDelta.y)), fs(this.projectionDelta, this.layoutCorrected, _, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== k || !Zp(this.projectionDelta.x, this.prevProjectionDelta.x) || !Zp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", _)), os && pr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var h;
      if ((h = this.options.visualElement) === null || h === void 0 || h.scheduleRender(), f) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = si(), this.projectionDelta = si(), this.projectionDeltaWithTransform = si();
    }
    setAnimationOrigin(f, h = !1) {
      const p = this.snapshot, m = p ? p.latestValues : {}, g = { ...this.latestValues }, v = si();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const x = Qe(), k = p ? p.source : void 0, _ = this.layout ? this.layout.source : void 0, D = k !== _, M = this.getStack(), F = !M || M.members.length <= 1, R = !!(D && !F && this.options.crossfade === !0 && !this.path.some(zT));
      this.animationProgress = 0;
      let U;
      this.mixTargetDelta = (H) => {
        const L = H / 1e3;
        nm(v.x, f.x, L), nm(v.y, f.y, L), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ds(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), bT(this.relativeTarget, this.relativeTargetOrigin, x, L), U && kT(this.relativeTarget, U) && (this.isProjectionDirty = !1), U || (U = Qe()), $t(U, this.relativeTarget)), D && (this.animationValues = g, gT(g, m, this.latestValues, L, R, F)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = L;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (qn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ie.update(() => {
        Ho.hasAnimatedSinceResize = !0, this.currentAnimation = fT(0, Jp, {
          ...f,
          onUpdate: (h) => {
            this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h);
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Jp), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: p, layout: m, latestValues: g } = f;
      if (!(!h || !p || !m)) {
        if (this !== f && this.layout && m && cg(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          p = this.target || Qe();
          const v = Lt(this.layout.layoutBox.x);
          p.x.min = f.target.x.min, p.x.max = p.x.min + v;
          const x = Lt(this.layout.layoutBox.y);
          p.y.min = f.target.y.min, p.y.max = p.y.min + x;
        }
        $t(h, p), li(h, g), fs(this.projectionDeltaWithTransform, this.layoutCorrected, h, g);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new ET()), this.sharedNodes.get(f).add(h);
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var f;
      const { layoutId: h } = this.options;
      return h ? ((f = this.getStack()) === null || f === void 0 ? void 0 : f.lead) || this : this;
    }
    getPrevLead() {
      var f;
      const { layoutId: h } = this.options;
      return h ? (f = this.getStack()) === null || f === void 0 ? void 0 : f.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      m && m.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f)
        return;
      let h = !1;
      const { latestValues: p } = f;
      if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0), !h)
        return;
      const m = {};
      p.z && Su("z", f, m, this.animationValues);
      for (let g = 0; g < wu.length; g++)
        Su(`rotate${wu[g]}`, f, m, this.animationValues), Su(`skew${wu[g]}`, f, m, this.animationValues);
      f.render();
      for (const g in m)
        f.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      var h, p;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return PT;
      const m = {
        visibility: ""
      }, g = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, m.opacity = "", m.pointerEvents = $o(f?.pointerEvents) || "", m.transform = g ? g(this.latestValues, "") : "none", m;
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        const D = {};
        return this.options.layoutId && (D.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, D.pointerEvents = $o(f?.pointerEvents) || ""), this.hasProjected && !hr(this.latestValues) && (D.transform = g ? g({}, "") : "none", this.hasProjected = !1), D;
      }
      const x = v.animationValues || v.latestValues;
      this.applyTransformsToTarget(), m.transform = CT(this.projectionDeltaWithTransform, this.treeScale, x), g && (m.transform = g(x, m.transform));
      const { x: k, y: _ } = this.projectionDelta;
      m.transformOrigin = `${k.origin * 100}% ${_.origin * 100}% 0`, v.animationValues ? m.opacity = v === this ? (p = (h = x.opacity) !== null && h !== void 0 ? h : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : m.opacity = v === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
      for (const D in Xo) {
        if (x[D] === void 0)
          continue;
        const { correct: M, applyTo: F } = Xo[D], R = m.transform === "none" ? x[D] : M(x[D], v);
        if (F) {
          const U = F.length;
          for (let H = 0; H < U; H++)
            m[F[H]] = R;
        } else
          m[D] = R;
      }
      return this.options.layoutId && (m.pointerEvents = v === this ? $o(f?.pointerEvents) || "" : "none"), m;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => {
        var h;
        return (h = f.currentAnimation) === null || h === void 0 ? void 0 : h.stop();
      }), this.root.nodes.forEach(em), this.root.sharedNodes.clear();
    }
  };
}
function AT(r) {
  r.updateLayout();
}
function DT(r) {
  var n;
  const i = ((n = r.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || r.snapshot;
  if (r.isLead() && r.layout && i && r.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: a } = r.layout, { animationType: c } = r.options, f = i.source !== r.layout.source;
    c === "size" ? Wt((v) => {
      const x = f ? i.measuredBox[v] : i.layoutBox[v], k = Lt(x);
      x.min = o[v].min, x.max = x.min + k;
    }) : cg(c, i.layoutBox, o) && Wt((v) => {
      const x = f ? i.measuredBox[v] : i.layoutBox[v], k = Lt(o[v]);
      x.max = x.min + k, r.relativeTarget && !r.currentAnimation && (r.isProjectionDirty = !0, r.relativeTarget[v].max = r.relativeTarget[v].min + k);
    });
    const h = si();
    fs(h, o, i.layoutBox);
    const p = si();
    f ? fs(p, r.applyTransform(a, !0), i.measuredBox) : fs(p, o, i.layoutBox);
    const m = !og(h);
    let g = !1;
    if (!r.resumeFrom) {
      const v = r.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: x, layout: k } = v;
        if (x && k) {
          const _ = Qe();
          ds(_, i.layoutBox, x.layoutBox);
          const D = Qe();
          ds(D, o, k.layoutBox), lg(_, D) || (g = !0), v.options.layoutRoot && (r.relativeTarget = D, r.relativeTargetOrigin = _, r.relativeParent = v);
        }
      }
    }
    r.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: p,
      layoutDelta: h,
      hasLayoutChanged: m,
      hasRelativeTargetChanged: g
    });
  } else if (r.isLead()) {
    const { onExitComplete: o } = r.options;
    o && o();
  }
  r.options.transition = void 0;
}
function VT(r) {
  os && pr.totalNodes++, r.parent && (r.isProjecting() || (r.isProjectionDirty = r.parent.isProjectionDirty), r.isSharedProjectionDirty || (r.isSharedProjectionDirty = !!(r.isProjectionDirty || r.parent.isProjectionDirty || r.parent.isSharedProjectionDirty)), r.isTransformDirty || (r.isTransformDirty = r.parent.isTransformDirty));
}
function FT(r) {
  r.isProjectionDirty = r.isSharedProjectionDirty = r.isTransformDirty = !1;
}
function OT(r) {
  r.clearSnapshot();
}
function em(r) {
  r.clearMeasurements();
}
function RT(r) {
  r.isLayoutDirty = !1;
}
function MT(r) {
  const { visualElement: n } = r.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), r.resetTransform();
}
function tm(r) {
  r.finishAnimation(), r.targetDelta = r.relativeTarget = r.target = void 0, r.isProjectionDirty = !0;
}
function NT(r) {
  r.resolveTargetDelta();
}
function LT(r) {
  r.calcProjection();
}
function jT(r) {
  r.resetSkewAndRotation();
}
function IT(r) {
  r.removeLeadSnapshot();
}
function nm(r, n, i) {
  r.translate = Be(n.translate, 0, i), r.scale = Be(n.scale, 1, i), r.origin = n.origin, r.originPoint = n.originPoint;
}
function rm(r, n, i, o) {
  r.min = Be(n.min, i.min, o), r.max = Be(n.max, i.max, o);
}
function bT(r, n, i, o) {
  rm(r.x, n.x, i.x, o), rm(r.y, n.y, i.y, o);
}
function zT(r) {
  return r.animationValues && r.animationValues.opacityExit !== void 0;
}
const UT = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, im = (r) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(r), sm = im("applewebkit/") && !im("chrome/") ? Math.round : Nt;
function om(r) {
  r.min = sm(r.min), r.max = sm(r.max);
}
function BT(r) {
  om(r.x), om(r.y);
}
function cg(r, n, i) {
  return r === "position" || r === "preserve-aspect" && !H1(Xp(n), Xp(i), 0.2);
}
function $T(r) {
  var n;
  return r !== r.root && ((n = r.scroll) === null || n === void 0 ? void 0 : n.wasRoot);
}
const WT = ug({
  attachResizeListener: (r, n) => gs(r, "resize", n),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Tu = {
  current: void 0
}, fg = ug({
  measureScroll: (r) => ({
    x: r.scrollLeft,
    y: r.scrollTop
  }),
  defaultParent: () => {
    if (!Tu.current) {
      const r = new WT({});
      r.mount(window), r.setOptions({ layoutScroll: !0 }), Tu.current = r;
    }
    return Tu.current;
  },
  resetTransform: (r, n) => {
    r.style.transform = n !== void 0 ? n : "none";
  },
  checkIsScrollRoot: (r) => window.getComputedStyle(r).position === "fixed"
}), HT = {
  pan: {
    Feature: lT
  },
  drag: {
    Feature: oT,
    ProjectionNode: fg,
    MeasureLayout: rg
  }
};
function lm(r, n, i) {
  const { props: o } = r;
  r.animationState && o.whileHover && r.animationState.setActive("whileHover", i === "Start");
  const a = "onHover" + i, c = o[a];
  c && Ie.postRender(() => c(n, ks(n)));
}
class KT extends Zn {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = Hw(n, (i) => (lm(this.node, i, "Start"), (o) => lm(this.node, o, "End"))));
  }
  unmount() {
  }
}
class GT extends Zn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch {
      n = !0;
    }
    !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ts(gs(this.node.current, "focus", () => this.onFocus()), gs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function am(r, n, i) {
  const { props: o } = r;
  r.animationState && o.whileTap && r.animationState.setActive("whileTap", i === "Start");
  const a = "onTap" + (i === "End" ? "" : i), c = o[a];
  c && Ie.postRender(() => c(n, ks(n)));
}
class QT extends Zn {
  mount() {
    const { current: n } = this.node;
    n && (this.unmount = Yw(n, (i) => (am(this.node, i, "Start"), (o, { success: a }) => am(this.node, o, a ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Bu = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), YT = (r) => {
  const n = Bu.get(r.target);
  n && n(r);
}, qT = (r) => {
  r.forEach(YT);
};
function XT({ root: r, ...n }) {
  const i = r || document;
  ku.has(i) || ku.set(i, {});
  const o = ku.get(i), a = JSON.stringify(n);
  return o[a] || (o[a] = new IntersectionObserver(qT, { root: r, ...n })), o[a];
}
function ZT(r, n, i) {
  const o = XT(n);
  return Bu.set(r, i), o.observe(r), () => {
    Bu.delete(r), o.unobserve(r);
  };
}
const JT = {
  some: 0,
  all: 1
};
class ek extends Zn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(), { root: i, margin: o, amount: a = "some", once: c } = n, f = {
      root: i ? i.current : void 0,
      rootMargin: o,
      threshold: typeof a == "number" ? a : JT[a]
    }, h = (p) => {
      const { isIntersecting: m } = p;
      if (this.isInView === m || (this.isInView = m, c && !m && this.hasEnteredView))
        return;
      m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
      const { onViewportEnter: g, onViewportLeave: v } = this.node.getProps(), x = m ? g : v;
      x && x(p);
    };
    return ZT(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: n, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(tk(n, i)) && this.startObserver();
  }
  unmount() {
  }
}
function tk({ viewport: r = {} }, { viewport: n = {} } = {}) {
  return (i) => r[i] !== n[i];
}
const nk = {
  inView: {
    Feature: ek
  },
  tap: {
    Feature: QT
  },
  focus: {
    Feature: GT
  },
  hover: {
    Feature: KT
  }
}, rk = {
  layout: {
    ProjectionNode: fg,
    MeasureLayout: rg
  }
}, $u = { current: null }, dg = { current: !1 };
function ik() {
  if (dg.current = !0, !!nc)
    if (window.matchMedia) {
      const r = window.matchMedia("(prefers-reduced-motion)"), n = () => $u.current = r.matches;
      r.addListener(n), n();
    } else
      $u.current = !1;
}
const sk = [...jy, ht, Xn], ok = (r) => sk.find(Ly(r)), um = /* @__PURE__ */ new WeakMap();
function lk(r, n, i) {
  for (const o in n) {
    const a = n[o], c = i[o];
    if (pt(a))
      r.addValue(o, a);
    else if (pt(c))
      r.addValue(o, ms(a, { owner: r }));
    else if (c !== a)
      if (r.hasValue(o)) {
        const f = r.getValue(o);
        f.liveStyle === !0 ? f.jump(a) : f.hasAnimated || f.set(a);
      } else {
        const f = r.getStaticValue(o);
        r.addValue(o, ms(f !== void 0 ? f : a, { owner: r }));
      }
  }
  for (const o in i)
    n[o] === void 0 && r.removeValue(o);
  return n;
}
const cm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ak {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(n, i, o) {
    return {};
  }
  constructor({ parent: n, props: i, presenceContext: o, reducedMotionConfig: a, blockInitialAnimation: c, visualState: f }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Dc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const k = dn.now();
      this.renderScheduledAt < k && (this.renderScheduledAt = k, Ie.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: m, onUpdate: g } = f;
    this.onUpdate = g, this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = i.initial ? { ...p } : {}, this.renderState = m, this.parent = n, this.props = i, this.presenceContext = o, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = a, this.options = h, this.blockInitialAnimation = !!c, this.isControllingVariants = fl(i), this.isVariantNode = Hm(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
    const { willChange: v, ...x } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const k in x) {
      const _ = x[k];
      p[k] !== void 0 && pt(_) && _.set(p[k], !1);
    }
  }
  mount(n) {
    this.current = n, um.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, o) => this.bindToMotionValue(o, i)), dg.current || ik(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : $u.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    um.delete(this.current), this.projection && this.projection.unmount(), qn(this.notifyUpdate), qn(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const i = this.features[n];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(n, i) {
    this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
    const o = wr.has(n), a = i.on("change", (h) => {
      this.latestValues[n] = h, this.props.onUpdate && Ie.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0);
    }), c = i.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, n, i)), this.valueSubscriptions.set(n, () => {
      a(), c(), f && f(), i.owner && i.stop();
    });
  }
  sortNodePosition(n) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
  }
  updateFeatures() {
    let n = "animation";
    for (n in ui) {
      const i = ui[n];
      if (!i)
        continue;
      const { isEnabled: o, Feature: a } = i;
      if (!this.features[n] && a && o(this.props) && (this.features[n] = new a(this)), this.features[n]) {
        const c = this.features[n];
        c.isMounted ? c.update() : (c.mount(), c.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Qe();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, i) {
    this.latestValues[n] = i;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(n, i) {
    (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let o = 0; o < cm.length; o++) {
      const a = cm[o];
      this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
      const c = "on" + a, f = n[c];
      f && (this.propEventSubscriptions[a] = this.on(a, f));
    }
    this.prevMotionValues = lk(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(n) {
    return this.props.variants ? this.props.variants[n] : void 0;
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
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(n) {
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(n), () => i.variantChildren.delete(n);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(n, i) {
    const o = this.values.get(n);
    i !== o && (o && this.removeValue(n), this.bindToMotionValue(n, i), this.values.set(n, i), this.latestValues[n] = i.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(n) {
    this.values.delete(n);
    const i = this.valueSubscriptions.get(n);
    i && (i(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, i) {
    if (this.props.values && this.props.values[n])
      return this.props.values[n];
    let o = this.values.get(n);
    return o === void 0 && i !== void 0 && (o = ms(i === null ? void 0 : i, { owner: this }), this.addValue(n, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(n, i) {
    var o;
    let a = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : (o = this.getBaseTargetFromProps(this.props, n)) !== null && o !== void 0 ? o : this.readValueFromInstance(this.current, n, this.options);
    return a != null && (typeof a == "string" && (My(a) || Cy(a)) ? a = parseFloat(a) : !ok(a) && Xn.test(i) && (a = Fy(n, i)), this.setBaseTarget(n, pt(a) ? a.get() : a)), pt(a) ? a.get() : a;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(n, i) {
    this.baseTarget[n] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(n) {
    var i;
    const { initial: o } = this.props;
    let a;
    if (typeof o == "string" || typeof o == "object") {
      const f = uc(this.props, o, (i = this.presenceContext) === null || i === void 0 ? void 0 : i.custom);
      f && (a = f[n]);
    }
    if (o && a !== void 0)
      return a;
    const c = this.getBaseTargetFromProps(this.props, n);
    return c !== void 0 && !pt(c) ? c : this.initialValues[n] !== void 0 && a === void 0 ? void 0 : this.baseTarget[n];
  }
  on(n, i) {
    return this.events[n] || (this.events[n] = new kc()), this.events[n].add(i);
  }
  notify(n, ...i) {
    this.events[n] && this.events[n].notify(...i);
  }
}
class hg extends ak {
  constructor() {
    super(...arguments), this.KeyframeResolver = Iy;
  }
  sortInstanceNodePosition(n, i) {
    return n.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, i) {
    return n.style ? n.style[i] : void 0;
  }
  removeValueFromRenderState(n, { vars: i, style: o }) {
    delete i[n], delete o[n];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    pt(n) && (this.childSubscription = n.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
function uk(r) {
  return window.getComputedStyle(r);
}
class ck extends hg {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ey;
  }
  readValueFromInstance(n, i) {
    if (wr.has(i)) {
      const o = Ac(i);
      return o && o.default || 0;
    } else {
      const o = uk(n), a = (Xm(i) ? o.getPropertyValue(i) : o[i]) || 0;
      return typeof a == "string" ? a.trim() : a;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: i }) {
    return tg(n, i);
  }
  build(n, i, o) {
    dc(n, i, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, i, o) {
    return yc(n, i, o);
  }
}
class fk extends hg {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Qe;
  }
  getBaseTargetFromProps(n, i) {
    return n[i];
  }
  readValueFromInstance(n, i) {
    if (wr.has(i)) {
      const o = Ac(i);
      return o && o.default || 0;
    }
    return i = ty.has(i) ? i : oc(i), n.getAttribute(i);
  }
  scrapeMotionValuesFromProps(n, i, o) {
    return iy(n, i, o);
  }
  build(n, i, o) {
    hc(n, i, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(n, i, o, a) {
    ny(n, i, o, a);
  }
  mount(n) {
    this.isSVGTag = mc(n.tagName), super.mount(n);
  }
}
const dk = (r, n) => ac(r) ? new fk(n) : new ck(n, {
  allowProjection: r !== G.Fragment
}), hk = /* @__PURE__ */ Iw({
  ...L1,
  ...nk,
  ...HT,
  ...rk
}, dk), pk = /* @__PURE__ */ Jx(hk);
var mk = function(r) {
  var n = r.as, i = r.errors, o = r.name, a = r.message, c = r.render, f = (function(x, k) {
    if (x == null) return {};
    var _, D, M = {}, F = Object.keys(x);
    for (D = 0; D < F.length; D++) k.indexOf(_ = F[D]) >= 0 || (M[_] = x[_]);
    return M;
  })(r, ["as", "errors", "name", "message", "render"]), h = qu(), p = re(i || h.formState.errors, o);
  if (!p) return null;
  var m = p.message, g = p.types, v = Object.assign({}, f, { children: m || a });
  return G.isValidElement(n) ? G.cloneElement(n, v) : c ? c({ message: m || a, messages: g }) : G.createElement(n || G.Fragment, v);
};
function yk({
  register: r,
  activeStep: n,
  initialValues: i
}) {
  function o(h) {
    return h = h[0].toUpperCase() + h.slice(1), h.replace(/[A-Z]/g, " $&");
  }
  function a(h, p) {
    const m = {};
    return p === "number" && (m.onKeyDown = (v) => {
      ["e", "E", "+", "-", ".", ","].includes(v.key) && v.preventDefault();
    }), (h?.tests || []).forEach((v) => {
      switch (v.OPTIONS.name) {
        case "min":
          m.min = v.OPTIONS.params.min || v.OPTIONS.params.more;
          break;
        case "max":
          m.max = v.OPTIONS.params.max;
          break;
      }
    }), m;
  }
  const { validationSchema: c, fields: f } = n;
  return /* @__PURE__ */ Q.jsxs("div", { id: "default", className: "prose max-w-none", children: [
    /* @__PURE__ */ Q.jsx("h2", { children: o(n.id) }),
    /* @__PURE__ */ Q.jsx("p", { children: n.helpText }),
    /* @__PURE__ */ Q.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(i || {}).map((h) => /* @__PURE__ */ Q.jsxs("div", { className: "grow shrink-0 basis-72", children: [
      /* @__PURE__ */ Q.jsx(
        "label",
        {
          htmlFor: h,
          className: "block mb-2 text-sm font-medium text-white",
          children: o(h)
        }
      ),
      /* @__PURE__ */ Q.jsx(
        "input",
        {
          id: h,
          type: f?.inputTypes[h],
          placeholder: f?.placeholders?.[h],
          ...a(
            c?.fields?.[h],
            f?.inputTypes[h]
          ),
          ...r(h),
          className: "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
        }
      ),
      /* @__PURE__ */ Q.jsx(
        mk,
        {
          name: h,
          render: ({ message: p }) => /* @__PURE__ */ Q.jsx("div", { className: "text-red-400", children: p })
        }
      )
    ] }, h)) })
  ] });
}
function gk() {
  const { isAnimated: r } = G.useContext(Rc), { activeStep: n } = xs(), { register: i, formState: o } = qu();
  let a = {};
  return r && (a = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }), /* @__PURE__ */ Q.jsx(Hx, { initial: !1, mode: "wait", children: /* @__PURE__ */ Q.jsx(
    pk.div,
    {
      variants: a,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      transition: { type: "tween", duration: 0.25 },
      children: /* @__PURE__ */ Q.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ Q.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: n.component || /* @__PURE__ */ Q.jsx(
        yk,
        {
          register: i,
          activeStep: n,
          initialValues: o.defaultValues
        }
      ) }) })
    },
    n.id
  ) });
}
var pg = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, fm = We.createContext && /* @__PURE__ */ We.createContext(pg), vk = ["attr", "size", "title"];
function xk(r, n) {
  if (r == null) return {};
  var i = wk(r, n), o, a;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    for (a = 0; a < c.length; a++)
      o = c[a], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (i[o] = r[o]);
  }
  return i;
}
function wk(r, n) {
  if (r == null) return {};
  var i = {};
  for (var o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      if (n.indexOf(o) >= 0) continue;
      i[o] = r[o];
    }
  return i;
}
function rl() {
  return rl = Object.assign ? Object.assign.bind() : function(r) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
    }
    return r;
  }, rl.apply(this, arguments);
}
function dm(r, n) {
  var i = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    n && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), i.push.apply(i, o);
  }
  return i;
}
function il(r) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2 ? dm(Object(i), !0).forEach(function(o) {
      Sk(r, o, i[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : dm(Object(i)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(i, o));
    });
  }
  return r;
}
function Sk(r, n, i) {
  return n = Tk(n), n in r ? Object.defineProperty(r, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = i, r;
}
function Tk(r) {
  var n = kk(r, "string");
  return typeof n == "symbol" ? n : n + "";
}
function kk(r, n) {
  if (typeof r != "object" || !r) return r;
  var i = r[Symbol.toPrimitive];
  if (i !== void 0) {
    var o = i.call(r, n);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(r);
}
function mg(r) {
  return r && r.map((n, i) => /* @__PURE__ */ We.createElement(n.tag, il({
    key: i
  }, n.attr), mg(n.child)));
}
function yg(r) {
  return (n) => /* @__PURE__ */ We.createElement(Ek, rl({
    attr: il({}, r.attr)
  }, n), mg(r.child));
}
function Ek(r) {
  var n = (i) => {
    var {
      attr: o,
      size: a,
      title: c
    } = r, f = xk(r, vk), h = a || i.size || "1em", p;
    return i.className && (p = i.className), r.className && (p = (p ? p + " " : "") + r.className), /* @__PURE__ */ We.createElement("svg", rl({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, o, f, {
      className: p,
      style: il(il({
        color: r.color || i.color
      }, i.style), r.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ We.createElement("title", null, c), r.children);
  };
  return fm !== void 0 ? /* @__PURE__ */ We.createElement(fm.Consumer, null, (i) => n(i)) : n(pg);
}
function Ck(r) {
  return yg({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" }, child: [] }] })(r);
}
function Pk(r) {
  return yg({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" }, child: [] }] })(r);
}
var _t = {}, ns = {}, hm;
function _k() {
  if (hm) return ns;
  hm = 1, Object.defineProperty(ns, "__esModule", { value: !0 }), ns.parseLengthAndUnit = n, ns.cssValue = i;
  var r = {
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
  function n(o) {
    if (typeof o == "number")
      return {
        value: o,
        unit: "px"
      };
    var a, c = (o.match(/^[0-9.]*/) || "").toString();
    c.includes(".") ? a = parseFloat(c) : a = parseInt(c, 10);
    var f = (o.match(/[^0-9]*$/) || "").toString();
    return r[f] ? {
      value: a,
      unit: f
    } : (console.warn("React Spinners: ".concat(o, " is not a valid css value. Defaulting to ").concat(a, "px.")), {
      value: a,
      unit: "px"
    });
  }
  function i(o) {
    var a = n(o);
    return "".concat(a.value).concat(a.unit);
  }
  return ns;
}
var rs = {}, pm;
function Ak() {
  if (pm) return rs;
  pm = 1, Object.defineProperty(rs, "__esModule", { value: !0 }), rs.createAnimation = void 0;
  var r = function(n, i, o) {
    var a = "react-spinners-".concat(n, "-").concat(o);
    if (typeof window > "u" || !window.document)
      return a;
    var c = document.createElement("style");
    document.head.appendChild(c);
    var f = c.sheet, h = `
    @keyframes `.concat(a, ` {
      `).concat(i, `
    }
  `);
    return f && f.insertRule(h, 0), a;
  };
  return rs.createAnimation = r, rs;
}
var mm;
function Dk() {
  if (mm) return _t;
  mm = 1;
  var r = _t && _t.__assign || function() {
    return r = Object.assign || function(g) {
      for (var v, x = 1, k = arguments.length; x < k; x++) {
        v = arguments[x];
        for (var _ in v) Object.prototype.hasOwnProperty.call(v, _) && (g[_] = v[_]);
      }
      return g;
    }, r.apply(this, arguments);
  }, n = _t && _t.__createBinding || (Object.create ? (function(g, v, x, k) {
    k === void 0 && (k = x);
    var _ = Object.getOwnPropertyDescriptor(v, x);
    (!_ || ("get" in _ ? !v.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
      return v[x];
    } }), Object.defineProperty(g, k, _);
  }) : (function(g, v, x, k) {
    k === void 0 && (k = x), g[k] = v[x];
  })), i = _t && _t.__setModuleDefault || (Object.create ? (function(g, v) {
    Object.defineProperty(g, "default", { enumerable: !0, value: v });
  }) : function(g, v) {
    g.default = v;
  }), o = _t && _t.__importStar || /* @__PURE__ */ (function() {
    var g = function(v) {
      return g = Object.getOwnPropertyNames || function(x) {
        var k = [];
        for (var _ in x) Object.prototype.hasOwnProperty.call(x, _) && (k[k.length] = _);
        return k;
      }, g(v);
    };
    return function(v) {
      if (v && v.__esModule) return v;
      var x = {};
      if (v != null) for (var k = g(v), _ = 0; _ < k.length; _++) k[_] !== "default" && n(x, v, k[_]);
      return i(x, v), x;
    };
  })(), a = _t && _t.__rest || function(g, v) {
    var x = {};
    for (var k in g) Object.prototype.hasOwnProperty.call(g, k) && v.indexOf(k) < 0 && (x[k] = g[k]);
    if (g != null && typeof Object.getOwnPropertySymbols == "function")
      for (var _ = 0, k = Object.getOwnPropertySymbols(g); _ < k.length; _++)
        v.indexOf(k[_]) < 0 && Object.prototype.propertyIsEnumerable.call(g, k[_]) && (x[k[_]] = g[k[_]]);
    return x;
  };
  Object.defineProperty(_t, "__esModule", { value: !0 });
  var c = o(ol()), f = /* @__PURE__ */ _k(), h = /* @__PURE__ */ Ak(), p = (0, h.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function m(g) {
    var v = g.loading, x = v === void 0 ? !0 : v, k = g.color, _ = k === void 0 ? "#000000" : k, D = g.speedMultiplier, M = D === void 0 ? 1 : D, F = g.cssOverride, R = F === void 0 ? {} : F, U = g.size, H = U === void 0 ? 35 : U, L = a(g, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), q = r({ background: "transparent !important", width: (0, f.cssValue)(H), height: (0, f.cssValue)(H), borderRadius: "100%", border: "2px solid", borderTopColor: _, borderBottomColor: "transparent", borderLeftColor: _, borderRightColor: _, display: "inline-block", animation: "".concat(p, " ").concat(0.75 / M, "s 0s infinite linear"), animationFillMode: "both" }, R);
    return x ? c.createElement("span", r({ style: q }, L)) : null;
  }
  return _t.default = m, _t;
}
var Vk = /* @__PURE__ */ Dk();
const Fk = /* @__PURE__ */ sl(Vk);
function Ok() {
  let {
    goToPreviousStep: r,
    isFirstStep: n,
    isLoading: i,
    activeStep: { hidePrevious: o, hideNext: a, disableNext: c, disableNextOnErrors: f }
  } = xs();
  const {
    formState: { isValid: h },
    trigger: p
  } = qu();
  return c = i || c || f && !h, /* @__PURE__ */ Q.jsx("div", { className: "navigation", children: /* @__PURE__ */ Q.jsxs(
    "div",
    {
      className: "navigation-wrapper " + (o ? "justify-end" : "justify-between"),
      children: [
        !o && /* @__PURE__ */ Q.jsxs(
          "button",
          {
            className: "btn btn-primary sm:w-34",
            onClick: r,
            disabled: n,
            type: "button",
            children: [
              /* @__PURE__ */ Q.jsx(Ck, { className: "w-6 h-6 fill-current" }),
              /* @__PURE__ */ Q.jsx("span", { children: "Previous" })
            ]
          }
        ),
        !a && // Still possible to trigger submit even though button is disabled.
        // Main reason is to display validation errors.
        /* @__PURE__ */ Q.jsx(
          "div",
          {
            onClick: c ? () => {
              p();
            } : void 0,
            children: /* @__PURE__ */ Q.jsxs("button", { className: "btn btn-primary sm:w-34", disabled: c, type: "submit", children: [
              i && /* @__PURE__ */ Q.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ Q.jsx(Fk, { size: 11, color: "#757575" }) }),
              /* @__PURE__ */ Q.jsx("span", { children: "Next" }),
              /* @__PURE__ */ Q.jsx(Pk, { className: "w-6 h-6 fill-current" })
            ] })
          }
        )
      ]
    }
  ) });
}
function Rk() {
  const { isAnimated: r, setIsAnimated: n } = G.useContext(Rc), { stepNumber: i, totalSteps: o } = xs(), a = `${(i - 1) / (o - 1) * 100}%`;
  return /* @__PURE__ */ Q.jsxs("header", { className: "pt-4 pb-3", children: [
    /* @__PURE__ */ Q.jsxs("div", { className: "px-5 flex justify-between items-center prose max-w-none", children: [
      /* @__PURE__ */ Q.jsx("h3", { className: "mb-0 text-sm xs:text-base sm:text-xl", children: "rhf-wizard" }),
      /* @__PURE__ */ Q.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ Q.jsxs("div", { className: "mr-3 text-sm", children: [
          /* @__PURE__ */ Q.jsx("span", { className: "hidden min-[400px]:inline", children: "Step" }),
          " ",
          i,
          " ",
          "/ ",
          o
        ] }),
        /* @__PURE__ */ Q.jsx("a", { href: "https://github.com/kennyhei/rhf-wizard", target: "_blank", children: /* @__PURE__ */ Q.jsx(
          "img",
          {
            src: "/rhf-wizard/github-mark-white.svg",
            className: "rounded-md w-9 !my-0"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ Q.jsx("div", { className: "w-full bg-gray-600 h-1 mt-[17px]", children: /* @__PURE__ */ Q.jsx(
      "div",
      {
        style: { width: a },
        className: "h-full bg-success transition-all " + (r ? "duration-500" : "")
      }
    ) }),
    /* @__PURE__ */ Q.jsx("div", { className: "flex justify-end pr-5 prose max-w-none pt-1", children: /* @__PURE__ */ Q.jsxs("label", { className: "label cursor-pointer px-0 py-2", children: [
      /* @__PURE__ */ Q.jsx(
        "span",
        {
          className: "label-text pr-0.5 " + (r ? "text-success" : "text-gray-300"),
          children: "Animate"
        }
      ),
      /* @__PURE__ */ Q.jsx(
        "input",
        {
          type: "checkbox",
          className: "toggle toggle-sm toggle-success",
          checked: r,
          onChange: () => {
            n(!r);
          }
        }
      )
    ] }) })
  ] });
}
const Rc = G.createContext(
  {}
);
function Mk() {
  const [r, n] = G.useState(!0);
  return /* @__PURE__ */ Q.jsx(Rc.Provider, { value: { isAnimated: r, setIsAnimated: n }, children: /* @__PURE__ */ Q.jsx(
    Lx,
    {
      enableHash: !0,
      steps: zx,
      onStepChanged: (i, o, a) => {
        console.log("step changed", i.id, o.id, a);
      },
      header: /* @__PURE__ */ Q.jsx(Rk, {}),
      wrapper: /* @__PURE__ */ Q.jsx(gk, {}),
      footer: /* @__PURE__ */ Q.jsx(Ok, {})
    }
  ) });
}
w0.createRoot(document.getElementById("root")).render(/* @__PURE__ */ Q.jsx(Mk, {}));
