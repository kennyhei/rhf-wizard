(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function i(l) {
    const c = {};
    return l.integrity && (c.integrity = l.integrity), l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function o(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = i(l);
    fetch(l.href, c);
  }
})();
function sa(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var eu = { exports: {} }, ts = {}, tu = { exports: {} }, Se = {};
var kh;
function v0() {
  if (kh) return Se;
  kh = 1;
  var n = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), l = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.provider"), f = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), v = Symbol.iterator;
  function x(C) {
    return C === null || typeof C != "object" ? null : (C = v && C[v] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var E = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, F = {};
  function N(C, I, ge) {
    this.props = C, this.context = I, this.refs = F, this.updater = ge || E;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(C, I) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, I, "setState");
  }, N.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function O() {
  }
  O.prototype = N.prototype;
  function R(C, I, ge) {
    this.props = C, this.context = I, this.refs = F, this.updater = ge || E;
  }
  var j = R.prototype = new O();
  j.constructor = R, _(j, N.prototype), j.isPureReactComponent = !0;
  var H = Array.isArray, b = Object.prototype.hasOwnProperty, Y = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(C, I, ge) {
    var ve, Te = {}, ke = null, Fe = null;
    if (I != null) for (ve in I.ref !== void 0 && (Fe = I.ref), I.key !== void 0 && (ke = "" + I.key), I) b.call(I, ve) && !te.hasOwnProperty(ve) && (Te[ve] = I[ve]);
    var _e = arguments.length - 2;
    if (_e === 1) Te.children = ge;
    else if (1 < _e) {
      for (var Re = Array(_e), ot = 0; ot < _e; ot++) Re[ot] = arguments[ot + 2];
      Te.children = Re;
    }
    if (C && C.defaultProps) for (ve in _e = C.defaultProps, _e) Te[ve] === void 0 && (Te[ve] = _e[ve]);
    return { $$typeof: n, type: C, key: ke, ref: Fe, props: Te, _owner: Y.current };
  }
  function de(C, I) {
    return { $$typeof: n, type: C.type, key: I, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function xe(C) {
    return typeof C == "object" && C !== null && C.$$typeof === n;
  }
  function me(C) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(ge) {
      return I[ge];
    });
  }
  var ue = /\/+/g;
  function he(C, I) {
    return typeof C == "object" && C !== null && C.key != null ? me("" + C.key) : I.toString(36);
  }
  function we(C, I, ge, ve, Te) {
    var ke = typeof C;
    (ke === "undefined" || ke === "boolean") && (C = null);
    var Fe = !1;
    if (C === null) Fe = !0;
    else switch (ke) {
      case "string":
      case "number":
        Fe = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case n:
          case r:
            Fe = !0;
        }
    }
    if (Fe) return Fe = C, Te = Te(Fe), C = ve === "" ? "." + he(Fe, 0) : ve, H(Te) ? (ge = "", C != null && (ge = C.replace(ue, "$&/") + "/"), we(Te, I, ge, "", function(ot) {
      return ot;
    })) : Te != null && (xe(Te) && (Te = de(Te, ge + (!Te.key || Fe && Fe.key === Te.key ? "" : ("" + Te.key).replace(ue, "$&/") + "/") + C)), I.push(Te)), 1;
    if (Fe = 0, ve = ve === "" ? "." : ve + ":", H(C)) for (var _e = 0; _e < C.length; _e++) {
      ke = C[_e];
      var Re = ve + he(ke, _e);
      Fe += we(ke, I, ge, Re, Te);
    }
    else if (Re = x(C), typeof Re == "function") for (C = Re.call(C), _e = 0; !(ke = C.next()).done; ) ke = ke.value, Re = ve + he(ke, _e++), Fe += we(ke, I, ge, Re, Te);
    else if (ke === "object") throw I = String(C), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return Fe;
  }
  function De(C, I, ge) {
    if (C == null) return C;
    var ve = [], Te = 0;
    return we(C, ve, "", "", function(ke) {
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
  var X = { current: null }, L = { transition: null }, Z = { ReactCurrentDispatcher: X, ReactCurrentBatchConfig: L, ReactCurrentOwner: Y };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Se.Children = { map: De, forEach: function(C, I, ge) {
    De(C, function() {
      I.apply(this, arguments);
    }, ge);
  }, count: function(C) {
    var I = 0;
    return De(C, function() {
      I++;
    }), I;
  }, toArray: function(C) {
    return De(C, function(I) {
      return I;
    }) || [];
  }, only: function(C) {
    if (!xe(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, Se.Component = N, Se.Fragment = i, Se.Profiler = l, Se.PureComponent = R, Se.StrictMode = o, Se.Suspense = p, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, Se.act = K, Se.cloneElement = function(C, I, ge) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var ve = _({}, C.props), Te = C.key, ke = C.ref, Fe = C._owner;
    if (I != null) {
      if (I.ref !== void 0 && (ke = I.ref, Fe = Y.current), I.key !== void 0 && (Te = "" + I.key), C.type && C.type.defaultProps) var _e = C.type.defaultProps;
      for (Re in I) b.call(I, Re) && !te.hasOwnProperty(Re) && (ve[Re] = I[Re] === void 0 && _e !== void 0 ? _e[Re] : I[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) ve.children = ge;
    else if (1 < Re) {
      _e = Array(Re);
      for (var ot = 0; ot < Re; ot++) _e[ot] = arguments[ot + 2];
      ve.children = _e;
    }
    return { $$typeof: n, type: C.type, key: Te, ref: ke, props: ve, _owner: Fe };
  }, Se.createContext = function(C) {
    return C = { $$typeof: f, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: c, _context: C }, C.Consumer = C;
  }, Se.createElement = J, Se.createFactory = function(C) {
    var I = J.bind(null, C);
    return I.type = C, I;
  }, Se.createRef = function() {
    return { current: null };
  }, Se.forwardRef = function(C) {
    return { $$typeof: h, render: C };
  }, Se.isValidElement = xe, Se.lazy = function(C) {
    return { $$typeof: m, _payload: { _status: -1, _result: C }, _init: Pe };
  }, Se.memo = function(C, I) {
    return { $$typeof: g, type: C, compare: I === void 0 ? null : I };
  }, Se.startTransition = function(C) {
    var I = L.transition;
    L.transition = {};
    try {
      C();
    } finally {
      L.transition = I;
    }
  }, Se.unstable_act = K, Se.useCallback = function(C, I) {
    return X.current.useCallback(C, I);
  }, Se.useContext = function(C) {
    return X.current.useContext(C);
  }, Se.useDebugValue = function() {
  }, Se.useDeferredValue = function(C) {
    return X.current.useDeferredValue(C);
  }, Se.useEffect = function(C, I) {
    return X.current.useEffect(C, I);
  }, Se.useId = function() {
    return X.current.useId();
  }, Se.useImperativeHandle = function(C, I, ge) {
    return X.current.useImperativeHandle(C, I, ge);
  }, Se.useInsertionEffect = function(C, I) {
    return X.current.useInsertionEffect(C, I);
  }, Se.useLayoutEffect = function(C, I) {
    return X.current.useLayoutEffect(C, I);
  }, Se.useMemo = function(C, I) {
    return X.current.useMemo(C, I);
  }, Se.useReducer = function(C, I, ge) {
    return X.current.useReducer(C, I, ge);
  }, Se.useRef = function(C) {
    return X.current.useRef(C);
  }, Se.useState = function(C) {
    return X.current.useState(C);
  }, Se.useSyncExternalStore = function(C, I, ge) {
    return X.current.useSyncExternalStore(C, I, ge);
  }, Se.useTransition = function() {
    return X.current.useTransition();
  }, Se.version = "18.3.1", Se;
}
var Eh;
function oa() {
  return Eh || (Eh = 1, tu.exports = v0()), tu.exports;
}
var Ch;
function x0() {
  if (Ch) return ts;
  Ch = 1;
  var n = oa(), r = /* @__PURE__ */ Symbol.for("react.element"), i = /* @__PURE__ */ Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, p, g) {
    var m, v = {}, x = null, E = null;
    g !== void 0 && (x = "" + g), p.key !== void 0 && (x = "" + p.key), p.ref !== void 0 && (E = p.ref);
    for (m in p) o.call(p, m) && !c.hasOwnProperty(m) && (v[m] = p[m]);
    if (h && h.defaultProps) for (m in p = h.defaultProps, p) v[m] === void 0 && (v[m] = p[m]);
    return { $$typeof: r, type: h, key: x, ref: E, props: v, _owner: l.current };
  }
  return ts.Fragment = i, ts.jsx = f, ts.jsxs = f, ts;
}
var Ph;
function w0() {
  return Ph || (Ph = 1, eu.exports = x0()), eu.exports;
}
var q = w0(), Q = oa();
const We = /* @__PURE__ */ sa(Q);
var Ro = {}, nu = { exports: {} }, _t = {}, ru = { exports: {} }, iu = {};
var _h;
function S0() {
  return _h || (_h = 1, (function(n) {
    function r(L, Z) {
      var K = L.length;
      L.push(Z);
      e: for (; 0 < K; ) {
        var C = K - 1 >>> 1, I = L[C];
        if (0 < l(I, Z)) L[C] = Z, L[K] = I, K = C;
        else break e;
      }
    }
    function i(L) {
      return L.length === 0 ? null : L[0];
    }
    function o(L) {
      if (L.length === 0) return null;
      var Z = L[0], K = L.pop();
      if (K !== Z) {
        L[0] = K;
        e: for (var C = 0, I = L.length, ge = I >>> 1; C < ge; ) {
          var ve = 2 * (C + 1) - 1, Te = L[ve], ke = ve + 1, Fe = L[ke];
          if (0 > l(Te, K)) ke < I && 0 > l(Fe, Te) ? (L[C] = Fe, L[ke] = K, C = ke) : (L[C] = Te, L[ve] = K, C = ve);
          else if (ke < I && 0 > l(Fe, K)) L[C] = Fe, L[ke] = K, C = ke;
          else break e;
        }
      }
      return Z;
    }
    function l(L, Z) {
      var K = L.sortIndex - Z.sortIndex;
      return K !== 0 ? K : L.id - Z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, h = f.now();
      n.unstable_now = function() {
        return f.now() - h;
      };
    }
    var p = [], g = [], m = 1, v = null, x = 3, E = !1, _ = !1, F = !1, N = typeof setTimeout == "function" ? setTimeout : null, O = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function j(L) {
      for (var Z = i(g); Z !== null; ) {
        if (Z.callback === null) o(g);
        else if (Z.startTime <= L) o(g), Z.sortIndex = Z.expirationTime, r(p, Z);
        else break;
        Z = i(g);
      }
    }
    function H(L) {
      if (F = !1, j(L), !_) if (i(p) !== null) _ = !0, Pe(b);
      else {
        var Z = i(g);
        Z !== null && X(H, Z.startTime - L);
      }
    }
    function b(L, Z) {
      _ = !1, F && (F = !1, O(J), J = -1), E = !0;
      var K = x;
      try {
        for (j(Z), v = i(p); v !== null && (!(v.expirationTime > Z) || L && !me()); ) {
          var C = v.callback;
          if (typeof C == "function") {
            v.callback = null, x = v.priorityLevel;
            var I = C(v.expirationTime <= Z);
            Z = n.unstable_now(), typeof I == "function" ? v.callback = I : v === i(p) && o(p), j(Z);
          } else o(p);
          v = i(p);
        }
        if (v !== null) var ge = !0;
        else {
          var ve = i(g);
          ve !== null && X(H, ve.startTime - Z), ge = !1;
        }
        return ge;
      } finally {
        v = null, x = K, E = !1;
      }
    }
    var Y = !1, te = null, J = -1, de = 5, xe = -1;
    function me() {
      return !(n.unstable_now() - xe < de);
    }
    function ue() {
      if (te !== null) {
        var L = n.unstable_now();
        xe = L;
        var Z = !0;
        try {
          Z = te(!0, L);
        } finally {
          Z ? he() : (Y = !1, te = null);
        }
      } else Y = !1;
    }
    var he;
    if (typeof R == "function") he = function() {
      R(ue);
    };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), De = we.port2;
      we.port1.onmessage = ue, he = function() {
        De.postMessage(null);
      };
    } else he = function() {
      N(ue, 0);
    };
    function Pe(L) {
      te = L, Y || (Y = !0, he());
    }
    function X(L, Z) {
      J = N(function() {
        L(n.unstable_now());
      }, Z);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, n.unstable_continueExecution = function() {
      _ || E || (_ = !0, Pe(b));
    }, n.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : de = 0 < L ? Math.floor(1e3 / L) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, n.unstable_getFirstCallbackNode = function() {
      return i(p);
    }, n.unstable_next = function(L) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = x;
      }
      var K = x;
      x = Z;
      try {
        return L();
      } finally {
        x = K;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(L, Z) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var K = x;
      x = L;
      try {
        return Z();
      } finally {
        x = K;
      }
    }, n.unstable_scheduleCallback = function(L, Z, K) {
      var C = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? C + K : C) : K = C, L) {
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
      return I = K + I, L = { id: m++, callback: Z, priorityLevel: L, startTime: K, expirationTime: I, sortIndex: -1 }, K > C ? (L.sortIndex = K, r(g, L), i(p) === null && L === i(g) && (F ? (O(J), J = -1) : F = !0, X(H, K - C))) : (L.sortIndex = I, r(p, L), _ || E || (_ = !0, Pe(b))), L;
    }, n.unstable_shouldYield = me, n.unstable_wrapCallback = function(L) {
      var Z = x;
      return function() {
        var K = x;
        x = Z;
        try {
          return L.apply(this, arguments);
        } finally {
          x = K;
        }
      };
    };
  })(iu)), iu;
}
var Ah;
function T0() {
  return Ah || (Ah = 1, ru.exports = S0()), ru.exports;
}
var Dh;
function k0() {
  if (Dh) return _t;
  Dh = 1;
  var n = oa(), r = T0();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++) t += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), l = {};
  function c(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, m = {}, v = {};
  function x(e) {
    return p.call(v, e) ? !0 : p.call(m, e) ? !1 : g.test(e) ? v[e] = !0 : (m[e] = !0, !1);
  }
  function E(e, t, s, a) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _(e, t, s, a) {
    if (t === null || typeof t > "u" || E(e, t, s, a)) return !0;
    if (a) return !1;
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
  function F(e, t, s, a, u, d, y) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = u, this.mustUseProperty = s, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = y;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new F(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new F(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new F(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new F(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new F(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new F(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var O = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      O,
      R
    );
    N[t] = new F(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(O, R);
    N[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(O, R);
    N[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function j(e, t, s, a) {
    var u = N.hasOwnProperty(t) ? N[t] : null;
    (u !== null ? u.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_(t, s, u, a) && (s = null), a || u === null ? x(t) && (s === null ? e.removeAttribute(t) : e.setAttribute(t, "" + s)) : u.mustUseProperty ? e[u.propertyName] = s === null ? u.type === 3 ? !1 : "" : s : (t = u.attributeName, a = u.attributeNamespace, s === null ? e.removeAttribute(t) : (u = u.type, s = u === 3 || u === 4 && s === !0 ? "" : "" + s, a ? e.setAttributeNS(a, t, s) : e.setAttribute(t, s))));
  }
  var H = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = /* @__PURE__ */ Symbol.for("react.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), de = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.provider"), me = /* @__PURE__ */ Symbol.for("react.context"), ue = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), we = /* @__PURE__ */ Symbol.for("react.suspense_list"), De = /* @__PURE__ */ Symbol.for("react.memo"), Pe = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.offscreen"), L = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var K = Object.assign, C;
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
        } catch (V) {
          var a = V;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (V) {
          a = V;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (V) {
          a = V;
        }
        e();
      }
    } catch (V) {
      if (V && a && typeof V.stack == "string") {
        for (var u = V.stack.split(`
`), d = a.stack.split(`
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
      case te:
        return "Fragment";
      case Y:
        return "Portal";
      case de:
        return "Profiler";
      case J:
        return "StrictMode";
      case he:
        return "Suspense";
      case we:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case me:
        return (e.displayName || "Context") + ".Consumer";
      case xe:
        return (e._context.displayName || "Context") + ".Provider";
      case ue:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case De:
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
  function Fe(e) {
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
        return t === J ? "StrictMode" : "Mode";
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
  function ot(e) {
    var t = Re(e) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var u = s.get, d = s.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(y) {
        a = "" + y, d.call(this, y);
      } }), Object.defineProperty(e, t, { enumerable: s.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(y) {
        a = "" + y;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Tr(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function mi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var s = t.getValue(), a = "";
    return e && (a = Re(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== s ? (t.setValue(e), !0) : !1;
  }
  function kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Er(e, t) {
    var s = t.checked;
    return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? e._wrapperState.initialChecked });
  }
  function yi(e, t) {
    var s = t.defaultValue == null ? "" : t.defaultValue, a = t.checked != null ? t.checked : t.defaultChecked;
    s = _e(t.value != null ? t.value : s), e._wrapperState = { initialChecked: a, initialValue: s, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Es(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function gi(e, t) {
    Es(e, t);
    var s = _e(t.value), a = t.type;
    if (s != null) a === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Cr(e, t.type, s) : t.hasOwnProperty("defaultValue") && Cr(e, t.type, _e(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function da(e, t, s) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, s || t === e.value || (e.value = t), e.defaultValue = t;
    }
    s = e.name, s !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, s !== "" && (e.name = s);
  }
  function Cr(e, t, s) {
    (t !== "number" || kr(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var S = Array.isArray;
  function A(e, t, s, a) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < s.length; u++) t["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++) u = t.hasOwnProperty("$" + e[s].value), e[s].selected !== u && (e[s].selected = u), u && a && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + _e(s), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          e[u].selected = !0, a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function M(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ee(e, t) {
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
  function G(e, t) {
    var s = _e(t.value), a = _e(t.defaultValue);
    s != null && (s = "" + s, s !== e.value && (e.value = s), t.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)), a != null && (e.defaultValue = "" + a);
  }
  function $(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function le(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? le(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ve, mt = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, s, a, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, s, a, u);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ve = Ve || document.createElement("div"), Ve.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ve.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function sn(e, t) {
    if (t) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var St = {
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
  }, ha = ["Webkit", "ms", "Moz", "O"];
  Object.keys(St).forEach(function(e) {
    ha.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), St[t] = St[e];
    });
  });
  function Pr(e, t, s) {
    return t == null || typeof t == "boolean" || t === "" ? "" : s || typeof t != "number" || t === 0 || St.hasOwnProperty(e) && St[e] ? ("" + t).trim() : t + "px";
  }
  function _r(e, t) {
    e = e.style;
    for (var s in t) if (t.hasOwnProperty(s)) {
      var a = s.indexOf("--") === 0, u = Pr(s, t[s], a);
      s === "float" && (s = "cssFloat"), a ? e.setProperty(s, u) : e[s] = u;
    }
  }
  var pa = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ar(e, t) {
    if (t) {
      if (pa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function vi(e, t) {
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
  var Dr = null;
  function ma(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ya = null, Vr = null, Fr = null;
  function bc(e) {
    if (e = zi(e)) {
      if (typeof ya != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Gs(t), ya(e.stateNode, e.type, t));
    }
  }
  function zc(e) {
    Vr ? Fr ? Fr.push(e) : Fr = [e] : Vr = e;
  }
  function Bc() {
    if (Vr) {
      var e = Vr, t = Fr;
      if (Fr = Vr = null, bc(e), t) for (e = 0; e < t.length; e++) bc(t[e]);
    }
  }
  function Uc(e, t) {
    return e(t);
  }
  function $c() {
  }
  var ga = !1;
  function Wc(e, t, s) {
    if (ga) return e(t, s);
    ga = !0;
    try {
      return Uc(e, t, s);
    } finally {
      ga = !1, (Vr !== null || Fr !== null) && ($c(), Bc());
    }
  }
  function xi(e, t) {
    var s = e.stateNode;
    if (s === null) return null;
    var a = Gs(s);
    if (a === null) return null;
    s = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(i(231, t, typeof s));
    return s;
  }
  var va = !1;
  if (h) try {
    var wi = {};
    Object.defineProperty(wi, "passive", { get: function() {
      va = !0;
    } }), window.addEventListener("test", wi, wi), window.removeEventListener("test", wi, wi);
  } catch {
    va = !1;
  }
  function Eg(e, t, s, a, u, d, y, w, T) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(s, V);
    } catch (B) {
      this.onError(B);
    }
  }
  var Si = !1, Cs = null, Ps = !1, xa = null, Cg = { onError: function(e) {
    Si = !0, Cs = e;
  } };
  function Pg(e, t, s, a, u, d, y, w, T) {
    Si = !1, Cs = null, Eg.apply(Cg, arguments);
  }
  function _g(e, t, s, a, u, d, y, w, T) {
    if (Pg.apply(this, arguments), Si) {
      if (Si) {
        var V = Cs;
        Si = !1, Cs = null;
      } else throw Error(i(198));
      Ps || (Ps = !0, xa = V);
    }
  }
  function er(e) {
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
  function Hc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Kc(e) {
    if (er(e) !== e) throw Error(i(188));
  }
  function Ag(e) {
    var t = e.alternate;
    if (!t) {
      if (t = er(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var s = e, a = t; ; ) {
      var u = s.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (a = u.return, a !== null) {
          s = a;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === s) return Kc(u), e;
          if (d === a) return Kc(u), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== a.return) s = u, a = d;
      else {
        for (var y = !1, w = u.child; w; ) {
          if (w === s) {
            y = !0, s = u, a = d;
            break;
          }
          if (w === a) {
            y = !0, a = u, s = d;
            break;
          }
          w = w.sibling;
        }
        if (!y) {
          for (w = d.child; w; ) {
            if (w === s) {
              y = !0, s = d, a = u;
              break;
            }
            if (w === a) {
              y = !0, a = d, s = u;
              break;
            }
            w = w.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (s.alternate !== a) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? e : t;
  }
  function Gc(e) {
    return e = Ag(e), e !== null ? Yc(e) : null;
  }
  function Yc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Yc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Qc = r.unstable_scheduleCallback, Xc = r.unstable_cancelCallback, Dg = r.unstable_shouldYield, Vg = r.unstable_requestPaint, Ke = r.unstable_now, Fg = r.unstable_getCurrentPriorityLevel, wa = r.unstable_ImmediatePriority, qc = r.unstable_UserBlockingPriority, _s = r.unstable_NormalPriority, Og = r.unstable_LowPriority, Zc = r.unstable_IdlePriority, As = null, on = null;
  function Rg(e) {
    if (on && typeof on.onCommitFiberRoot == "function") try {
      on.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Kt = Math.clz32 ? Math.clz32 : Lg, Mg = Math.log, Ng = Math.LN2;
  function Lg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Mg(e) / Ng | 0) | 0;
  }
  var Ds = 64, Vs = 4194304;
  function Ti(e) {
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
    var a = 0, u = e.suspendedLanes, d = e.pingedLanes, y = s & 268435455;
    if (y !== 0) {
      var w = y & ~u;
      w !== 0 ? a = Ti(w) : (d &= y, d !== 0 && (a = Ti(d)));
    } else y = s & ~u, y !== 0 ? a = Ti(y) : d !== 0 && (a = Ti(d));
    if (a === 0) return 0;
    if (t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, d = t & -t, u >= d || u === 16 && (d & 4194240) !== 0)) return t;
    if ((a & 4) !== 0 && (a |= s & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= a; 0 < t; ) s = 31 - Kt(t), u = 1 << s, a |= e[s], t &= ~u;
    return a;
  }
  function jg(e, t) {
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
  function Ig(e, t) {
    for (var s = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
      var y = 31 - Kt(d), w = 1 << y, T = u[y];
      T === -1 ? ((w & s) === 0 || (w & a) !== 0) && (u[y] = jg(w, t)) : T <= t && (e.expiredLanes |= w), d &= ~w;
    }
  }
  function Sa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jc() {
    var e = Ds;
    return Ds <<= 1, (Ds & 4194240) === 0 && (Ds = 64), e;
  }
  function Ta(e) {
    for (var t = [], s = 0; 31 > s; s++) t.push(e);
    return t;
  }
  function ki(e, t, s) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Kt(t), e[t] = s;
  }
  function bg(e, t) {
    var s = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var u = 31 - Kt(s), d = 1 << u;
      t[u] = 0, a[u] = -1, e[u] = -1, s &= ~d;
    }
  }
  function ka(e, t) {
    var s = e.entangledLanes |= t;
    for (e = e.entanglements; s; ) {
      var a = 31 - Kt(s), u = 1 << a;
      u & t | e[a] & t && (e[a] |= t), s &= ~u;
    }
  }
  var Oe = 0;
  function ef(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var tf, Ea, nf, rf, sf, Ca = !1, Os = [], An = null, Dn = null, Vn = null, Ei = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), Fn = [], zg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function of(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        An = null;
        break;
      case "dragenter":
      case "dragleave":
        Dn = null;
        break;
      case "mouseover":
      case "mouseout":
        Vn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ei.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ci.delete(t.pointerId);
    }
  }
  function Pi(e, t, s, a, u, d) {
    return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: s, eventSystemFlags: a, nativeEvent: d, targetContainers: [u] }, t !== null && (t = zi(t), t !== null && Ea(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function Bg(e, t, s, a, u) {
    switch (t) {
      case "focusin":
        return An = Pi(An, e, t, s, a, u), !0;
      case "dragenter":
        return Dn = Pi(Dn, e, t, s, a, u), !0;
      case "mouseover":
        return Vn = Pi(Vn, e, t, s, a, u), !0;
      case "pointerover":
        var d = u.pointerId;
        return Ei.set(d, Pi(Ei.get(d) || null, e, t, s, a, u)), !0;
      case "gotpointercapture":
        return d = u.pointerId, Ci.set(d, Pi(Ci.get(d) || null, e, t, s, a, u)), !0;
    }
    return !1;
  }
  function af(e) {
    var t = tr(e.target);
    if (t !== null) {
      var s = er(t);
      if (s !== null) {
        if (t = s.tag, t === 13) {
          if (t = Hc(s), t !== null) {
            e.blockedOn = t, sf(e.priority, function() {
              nf(s);
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
      var s = _a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var a = new s.constructor(s.type, s);
        Dr = a, s.target.dispatchEvent(a), Dr = null;
      } else return t = zi(s), t !== null && Ea(t), e.blockedOn = s, !1;
      t.shift();
    }
    return !0;
  }
  function lf(e, t, s) {
    Rs(e) && s.delete(t);
  }
  function Ug() {
    Ca = !1, An !== null && Rs(An) && (An = null), Dn !== null && Rs(Dn) && (Dn = null), Vn !== null && Rs(Vn) && (Vn = null), Ei.forEach(lf), Ci.forEach(lf);
  }
  function _i(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ca || (Ca = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ug)));
  }
  function Ai(e) {
    function t(u) {
      return _i(u, e);
    }
    if (0 < Os.length) {
      _i(Os[0], e);
      for (var s = 1; s < Os.length; s++) {
        var a = Os[s];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (An !== null && _i(An, e), Dn !== null && _i(Dn, e), Vn !== null && _i(Vn, e), Ei.forEach(t), Ci.forEach(t), s = 0; s < Fn.length; s++) a = Fn[s], a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < Fn.length && (s = Fn[0], s.blockedOn === null); ) af(s), s.blockedOn === null && Fn.shift();
  }
  var Or = H.ReactCurrentBatchConfig, Ms = !0;
  function $g(e, t, s, a) {
    var u = Oe, d = Or.transition;
    Or.transition = null;
    try {
      Oe = 1, Pa(e, t, s, a);
    } finally {
      Oe = u, Or.transition = d;
    }
  }
  function Wg(e, t, s, a) {
    var u = Oe, d = Or.transition;
    Or.transition = null;
    try {
      Oe = 4, Pa(e, t, s, a);
    } finally {
      Oe = u, Or.transition = d;
    }
  }
  function Pa(e, t, s, a) {
    if (Ms) {
      var u = _a(e, t, s, a);
      if (u === null) Wa(e, t, a, Ns, s), of(e, a);
      else if (Bg(u, e, t, s, a)) a.stopPropagation();
      else if (of(e, a), t & 4 && -1 < zg.indexOf(e)) {
        for (; u !== null; ) {
          var d = zi(u);
          if (d !== null && tf(d), d = _a(e, t, s, a), d === null && Wa(e, t, a, Ns, s), d === u) break;
          u = d;
        }
        u !== null && a.stopPropagation();
      } else Wa(e, t, a, null, s);
    }
  }
  var Ns = null;
  function _a(e, t, s, a) {
    if (Ns = null, e = ma(a), e = tr(e), e !== null) if (t = er(e), t === null) e = null;
    else if (s = t.tag, s === 13) {
      if (e = Hc(t), e !== null) return e;
      e = null;
    } else if (s === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ns = e, null;
  }
  function uf(e) {
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
        switch (Fg()) {
          case wa:
            return 1;
          case qc:
            return 4;
          case _s:
          case Og:
            return 16;
          case Zc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null, Aa = null, Ls = null;
  function cf() {
    if (Ls) return Ls;
    var e, t = Aa, s = t.length, a, u = "value" in On ? On.value : On.textContent, d = u.length;
    for (e = 0; e < s && t[e] === u[e]; e++) ;
    var y = s - e;
    for (a = 1; a <= y && t[s - a] === u[d - a]; a++) ;
    return Ls = u.slice(e, 1 < a ? 1 - a : void 0);
  }
  function js(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Is() {
    return !0;
  }
  function ff() {
    return !1;
  }
  function Ot(e) {
    function t(s, a, u, d, y) {
      this._reactName = s, this._targetInst = u, this.type = a, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var w in e) e.hasOwnProperty(w) && (s = e[w], this[w] = s ? s(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Is : ff, this.isPropagationStopped = ff, this;
    }
    return K(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Is);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Is);
    }, persist: function() {
    }, isPersistent: Is }), t;
  }
  var Rr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Da = Ot(Rr), Di = K({}, Rr, { view: 0, detail: 0 }), Hg = Ot(Di), Va, Fa, Vi, bs = K({}, Di, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ra, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Vi && (Vi && e.type === "mousemove" ? (Va = e.screenX - Vi.screenX, Fa = e.screenY - Vi.screenY) : Fa = Va = 0, Vi = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Fa;
  } }), df = Ot(bs), Kg = K({}, bs, { dataTransfer: 0 }), Gg = Ot(Kg), Yg = K({}, Di, { relatedTarget: 0 }), Oa = Ot(Yg), Qg = K({}, Rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xg = Ot(Qg), qg = K({}, Rr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Zg = Ot(qg), Jg = K({}, Rr, { data: 0 }), hf = Ot(Jg), ev = {
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
  }, tv = {
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
  }, nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function rv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nv[e]) ? !!t[e] : !1;
  }
  function Ra() {
    return rv;
  }
  var iv = K({}, Di, { key: function(e) {
    if (e.key) {
      var t = ev[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tv[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ra, charCode: function(e) {
    return e.type === "keypress" ? js(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), sv = Ot(iv), ov = K({}, bs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pf = Ot(ov), av = K({}, Di, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ra }), lv = Ot(av), uv = K({}, Rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cv = Ot(uv), fv = K({}, bs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dv = Ot(fv), hv = [9, 13, 27, 32], Ma = h && "CompositionEvent" in window, Fi = null;
  h && "documentMode" in document && (Fi = document.documentMode);
  var pv = h && "TextEvent" in window && !Fi, mf = h && (!Ma || Fi && 8 < Fi && 11 >= Fi), yf = " ", gf = !1;
  function vf(e, t) {
    switch (e) {
      case "keyup":
        return hv.indexOf(t.keyCode) !== -1;
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
  function xf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Mr = !1;
  function mv(e, t) {
    switch (e) {
      case "compositionend":
        return xf(t);
      case "keypress":
        return t.which !== 32 ? null : (gf = !0, yf);
      case "textInput":
        return e = t.data, e === yf && gf ? null : e;
      default:
        return null;
    }
  }
  function yv(e, t) {
    if (Mr) return e === "compositionend" || !Ma && vf(e, t) ? (e = cf(), Ls = Aa = On = null, Mr = !1, e) : null;
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
        return mf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function wf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gv[e.type] : t === "textarea";
  }
  function Sf(e, t, s, a) {
    zc(a), t = Ws(t, "onChange"), 0 < t.length && (s = new Da("onChange", "change", null, s, a), e.push({ event: s, listeners: t }));
  }
  var Oi = null, Ri = null;
  function vv(e) {
    bf(e, 0);
  }
  function zs(e) {
    var t = br(e);
    if (mi(t)) return e;
  }
  function xv(e, t) {
    if (e === "change") return t;
  }
  var Tf = !1;
  if (h) {
    var Na;
    if (h) {
      var La = "oninput" in document;
      if (!La) {
        var kf = document.createElement("div");
        kf.setAttribute("oninput", "return;"), La = typeof kf.oninput == "function";
      }
      Na = La;
    } else Na = !1;
    Tf = Na && (!document.documentMode || 9 < document.documentMode);
  }
  function Ef() {
    Oi && (Oi.detachEvent("onpropertychange", Cf), Ri = Oi = null);
  }
  function Cf(e) {
    if (e.propertyName === "value" && zs(Ri)) {
      var t = [];
      Sf(t, Ri, e, ma(e)), Wc(vv, t);
    }
  }
  function wv(e, t, s) {
    e === "focusin" ? (Ef(), Oi = t, Ri = s, Oi.attachEvent("onpropertychange", Cf)) : e === "focusout" && Ef();
  }
  function Sv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zs(Ri);
  }
  function Tv(e, t) {
    if (e === "click") return zs(t);
  }
  function kv(e, t) {
    if (e === "input" || e === "change") return zs(t);
  }
  function Ev(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Gt = typeof Object.is == "function" ? Object.is : Ev;
  function Mi(e, t) {
    if (Gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var s = Object.keys(e), a = Object.keys(t);
    if (s.length !== a.length) return !1;
    for (a = 0; a < s.length; a++) {
      var u = s[a];
      if (!p.call(t, u) || !Gt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Pf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _f(e, t) {
    var s = Pf(e);
    e = 0;
    for (var a; s; ) {
      if (s.nodeType === 3) {
        if (a = e + s.textContent.length, e <= t && a >= t) return { node: s, offset: t - e };
        e = a;
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
      s = Pf(s);
    }
  }
  function Af(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Af(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Df() {
    for (var e = window, t = kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof t.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = t.contentWindow;
      else break;
      t = kr(e.document);
    }
    return t;
  }
  function ja(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Cv(e) {
    var t = Df(), s = e.focusedElem, a = e.selectionRange;
    if (t !== s && s && s.ownerDocument && Af(s.ownerDocument.documentElement, s)) {
      if (a !== null && ja(s)) {
        if (t = a.start, e = a.end, e === void 0 && (e = t), "selectionStart" in s) s.selectionStart = t, s.selectionEnd = Math.min(e, s.value.length);
        else if (e = (t = s.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var u = s.textContent.length, d = Math.min(a.start, u);
          a = a.end === void 0 ? d : Math.min(a.end, u), !e.extend && d > a && (u = a, a = d, d = u), u = _f(s, d);
          var y = _f(
            s,
            a
          );
          u && y && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), d > a ? (e.addRange(t), e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = s; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < t.length; s++) e = t[s], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Pv = h && "documentMode" in document && 11 >= document.documentMode, Nr = null, Ia = null, Ni = null, ba = !1;
  function Vf(e, t, s) {
    var a = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    ba || Nr == null || Nr !== kr(a) || (a = Nr, "selectionStart" in a && ja(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ni && Mi(Ni, a) || (Ni = a, a = Ws(Ia, "onSelect"), 0 < a.length && (t = new Da("onSelect", "select", null, t, s), e.push({ event: t, listeners: a }), t.target = Nr)));
  }
  function Bs(e, t) {
    var s = {};
    return s[e.toLowerCase()] = t.toLowerCase(), s["Webkit" + e] = "webkit" + t, s["Moz" + e] = "moz" + t, s;
  }
  var Lr = { animationend: Bs("Animation", "AnimationEnd"), animationiteration: Bs("Animation", "AnimationIteration"), animationstart: Bs("Animation", "AnimationStart"), transitionend: Bs("Transition", "TransitionEnd") }, za = {}, Ff = {};
  h && (Ff = document.createElement("div").style, "AnimationEvent" in window || (delete Lr.animationend.animation, delete Lr.animationiteration.animation, delete Lr.animationstart.animation), "TransitionEvent" in window || delete Lr.transitionend.transition);
  function Us(e) {
    if (za[e]) return za[e];
    if (!Lr[e]) return e;
    var t = Lr[e], s;
    for (s in t) if (t.hasOwnProperty(s) && s in Ff) return za[e] = t[s];
    return e;
  }
  var Of = Us("animationend"), Rf = Us("animationiteration"), Mf = Us("animationstart"), Nf = Us("transitionend"), Lf = /* @__PURE__ */ new Map(), jf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Rn(e, t) {
    Lf.set(e, t), c(t, [e]);
  }
  for (var Ba = 0; Ba < jf.length; Ba++) {
    var Ua = jf[Ba], _v = Ua.toLowerCase(), Av = Ua[0].toUpperCase() + Ua.slice(1);
    Rn(_v, "on" + Av);
  }
  Rn(Of, "onAnimationEnd"), Rn(Rf, "onAnimationIteration"), Rn(Mf, "onAnimationStart"), Rn("dblclick", "onDoubleClick"), Rn("focusin", "onFocus"), Rn("focusout", "onBlur"), Rn(Nf, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Li = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));
  function If(e, t, s) {
    var a = e.type || "unknown-event";
    e.currentTarget = s, _g(a, t, void 0, e), e.currentTarget = null;
  }
  function bf(e, t) {
    t = (t & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var a = e[s], u = a.event;
      a = a.listeners;
      e: {
        var d = void 0;
        if (t) for (var y = a.length - 1; 0 <= y; y--) {
          var w = a[y], T = w.instance, V = w.currentTarget;
          if (w = w.listener, T !== d && u.isPropagationStopped()) break e;
          If(u, w, V), d = T;
        }
        else for (y = 0; y < a.length; y++) {
          if (w = a[y], T = w.instance, V = w.currentTarget, w = w.listener, T !== d && u.isPropagationStopped()) break e;
          If(u, w, V), d = T;
        }
      }
    }
    if (Ps) throw e = xa, Ps = !1, xa = null, e;
  }
  function Le(e, t) {
    var s = t[Xa];
    s === void 0 && (s = t[Xa] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    s.has(a) || (zf(t, e, 2, !1), s.add(a));
  }
  function $a(e, t, s) {
    var a = 0;
    t && (a |= 4), zf(s, e, a, t);
  }
  var $s = "_reactListening" + Math.random().toString(36).slice(2);
  function ji(e) {
    if (!e[$s]) {
      e[$s] = !0, o.forEach(function(s) {
        s !== "selectionchange" && (Dv.has(s) || $a(s, !1, e), $a(s, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$s] || (t[$s] = !0, $a("selectionchange", !1, t));
    }
  }
  function zf(e, t, s, a) {
    switch (uf(t)) {
      case 1:
        var u = $g;
        break;
      case 4:
        u = Wg;
        break;
      default:
        u = Pa;
    }
    s = u.bind(null, t, s, e), u = void 0, !va || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? e.addEventListener(t, s, { capture: !0, passive: u }) : e.addEventListener(t, s, !0) : u !== void 0 ? e.addEventListener(t, s, { passive: u }) : e.addEventListener(t, s, !1);
  }
  function Wa(e, t, s, a, u) {
    var d = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
      if (a === null) return;
      var y = a.tag;
      if (y === 3 || y === 4) {
        var w = a.stateNode.containerInfo;
        if (w === u || w.nodeType === 8 && w.parentNode === u) break;
        if (y === 4) for (y = a.return; y !== null; ) {
          var T = y.tag;
          if ((T === 3 || T === 4) && (T = y.stateNode.containerInfo, T === u || T.nodeType === 8 && T.parentNode === u)) return;
          y = y.return;
        }
        for (; w !== null; ) {
          if (y = tr(w), y === null) return;
          if (T = y.tag, T === 5 || T === 6) {
            a = d = y;
            continue e;
          }
          w = w.parentNode;
        }
      }
      a = a.return;
    }
    Wc(function() {
      var V = d, B = ma(s), U = [];
      e: {
        var z = Lf.get(e);
        if (z !== void 0) {
          var ne = Da, se = e;
          switch (e) {
            case "keypress":
              if (js(s) === 0) break e;
            case "keydown":
            case "keyup":
              ne = sv;
              break;
            case "focusin":
              se = "focus", ne = Oa;
              break;
            case "focusout":
              se = "blur", ne = Oa;
              break;
            case "beforeblur":
            case "afterblur":
              ne = Oa;
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
              ne = df;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = Gg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = lv;
              break;
            case Of:
            case Rf:
            case Mf:
              ne = Xg;
              break;
            case Nf:
              ne = cv;
              break;
            case "scroll":
              ne = Hg;
              break;
            case "wheel":
              ne = dv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = Zg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = pf;
          }
          var oe = (t & 4) !== 0, Ge = !oe && e === "scroll", P = oe ? z !== null ? z + "Capture" : null : z;
          oe = [];
          for (var k = V, D; k !== null; ) {
            D = k;
            var W = D.stateNode;
            if (D.tag === 5 && W !== null && (D = W, P !== null && (W = xi(k, P), W != null && oe.push(Ii(k, W, D)))), Ge) break;
            k = k.return;
          }
          0 < oe.length && (z = new ne(z, se, null, s, B), U.push({ event: z, listeners: oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", ne = e === "mouseout" || e === "pointerout", z && s !== Dr && (se = s.relatedTarget || s.fromElement) && (tr(se) || se[mn])) break e;
          if ((ne || z) && (z = B.window === B ? B : (z = B.ownerDocument) ? z.defaultView || z.parentWindow : window, ne ? (se = s.relatedTarget || s.toElement, ne = V, se = se ? tr(se) : null, se !== null && (Ge = er(se), se !== Ge || se.tag !== 5 && se.tag !== 6) && (se = null)) : (ne = null, se = V), ne !== se)) {
            if (oe = df, W = "onMouseLeave", P = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (oe = pf, W = "onPointerLeave", P = "onPointerEnter", k = "pointer"), Ge = ne == null ? z : br(ne), D = se == null ? z : br(se), z = new oe(W, k + "leave", ne, s, B), z.target = Ge, z.relatedTarget = D, W = null, tr(B) === V && (oe = new oe(P, k + "enter", se, s, B), oe.target = D, oe.relatedTarget = Ge, W = oe), Ge = W, ne && se) t: {
              for (oe = ne, P = se, k = 0, D = oe; D; D = jr(D)) k++;
              for (D = 0, W = P; W; W = jr(W)) D++;
              for (; 0 < k - D; ) oe = jr(oe), k--;
              for (; 0 < D - k; ) P = jr(P), D--;
              for (; k--; ) {
                if (oe === P || P !== null && oe === P.alternate) break t;
                oe = jr(oe), P = jr(P);
              }
              oe = null;
            }
            else oe = null;
            ne !== null && Bf(U, z, ne, oe, !1), se !== null && Ge !== null && Bf(U, Ge, se, oe, !0);
          }
        }
        e: {
          if (z = V ? br(V) : window, ne = z.nodeName && z.nodeName.toLowerCase(), ne === "select" || ne === "input" && z.type === "file") var ae = xv;
          else if (wf(z)) if (Tf) ae = kv;
          else {
            ae = Sv;
            var ce = wv;
          }
          else (ne = z.nodeName) && ne.toLowerCase() === "input" && (z.type === "checkbox" || z.type === "radio") && (ae = Tv);
          if (ae && (ae = ae(e, V))) {
            Sf(U, ae, s, B);
            break e;
          }
          ce && ce(e, z, V), e === "focusout" && (ce = z._wrapperState) && ce.controlled && z.type === "number" && Cr(z, "number", z.value);
        }
        switch (ce = V ? br(V) : window, e) {
          case "focusin":
            (wf(ce) || ce.contentEditable === "true") && (Nr = ce, Ia = V, Ni = null);
            break;
          case "focusout":
            Ni = Ia = Nr = null;
            break;
          case "mousedown":
            ba = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ba = !1, Vf(U, s, B);
            break;
          case "selectionchange":
            if (Pv) break;
          case "keydown":
          case "keyup":
            Vf(U, s, B);
        }
        var fe;
        if (Ma) e: {
          switch (e) {
            case "compositionstart":
              var ye = "onCompositionStart";
              break e;
            case "compositionend":
              ye = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ye = "onCompositionUpdate";
              break e;
          }
          ye = void 0;
        }
        else Mr ? vf(e, s) && (ye = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (ye = "onCompositionStart");
        ye && (mf && s.locale !== "ko" && (Mr || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Mr && (fe = cf()) : (On = B, Aa = "value" in On ? On.value : On.textContent, Mr = !0)), ce = Ws(V, ye), 0 < ce.length && (ye = new hf(ye, e, null, s, B), U.push({ event: ye, listeners: ce }), fe ? ye.data = fe : (fe = xf(s), fe !== null && (ye.data = fe)))), (fe = pv ? mv(e, s) : yv(e, s)) && (V = Ws(V, "onBeforeInput"), 0 < V.length && (B = new hf("onBeforeInput", "beforeinput", null, s, B), U.push({ event: B, listeners: V }), B.data = fe));
      }
      bf(U, t);
    });
  }
  function Ii(e, t, s) {
    return { instance: e, listener: t, currentTarget: s };
  }
  function Ws(e, t) {
    for (var s = t + "Capture", a = []; e !== null; ) {
      var u = e, d = u.stateNode;
      u.tag === 5 && d !== null && (u = d, d = xi(e, s), d != null && a.unshift(Ii(e, d, u)), d = xi(e, t), d != null && a.push(Ii(e, d, u))), e = e.return;
    }
    return a;
  }
  function jr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Bf(e, t, s, a, u) {
    for (var d = t._reactName, y = []; s !== null && s !== a; ) {
      var w = s, T = w.alternate, V = w.stateNode;
      if (T !== null && T === a) break;
      w.tag === 5 && V !== null && (w = V, u ? (T = xi(s, d), T != null && y.unshift(Ii(s, T, w))) : u || (T = xi(s, d), T != null && y.push(Ii(s, T, w)))), s = s.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var Vv = /\r\n?/g, Fv = /\u0000|\uFFFD/g;
  function Uf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vv, `
`).replace(Fv, "");
  }
  function Hs(e, t, s) {
    if (t = Uf(t), Uf(e) !== t && s) throw Error(i(425));
  }
  function Ks() {
  }
  var Ha = null, Ka = null;
  function Ga(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ya = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, $f = typeof Promise == "function" ? Promise : void 0, Rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof $f < "u" ? function(e) {
    return $f.resolve(null).then(e).catch(Mv);
  } : Ya;
  function Mv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qa(e, t) {
    var s = t, a = 0;
    do {
      var u = s.nextSibling;
      if (e.removeChild(s), u && u.nodeType === 8) if (s = u.data, s === "/$") {
        if (a === 0) {
          e.removeChild(u), Ai(t);
          return;
        }
        a--;
      } else s !== "$" && s !== "$?" && s !== "$!" || a++;
      s = u;
    } while (s);
    Ai(t);
  }
  function Mn(e) {
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
  function Wf(e) {
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
  var Ir = Math.random().toString(36).slice(2), an = "__reactFiber$" + Ir, bi = "__reactProps$" + Ir, mn = "__reactContainer$" + Ir, Xa = "__reactEvents$" + Ir, Nv = "__reactListeners$" + Ir, Lv = "__reactHandles$" + Ir;
  function tr(e) {
    var t = e[an];
    if (t) return t;
    for (var s = e.parentNode; s; ) {
      if (t = s[mn] || s[an]) {
        if (s = t.alternate, t.child !== null || s !== null && s.child !== null) for (e = Wf(e); e !== null; ) {
          if (s = e[an]) return s;
          e = Wf(e);
        }
        return t;
      }
      e = s, s = e.parentNode;
    }
    return null;
  }
  function zi(e) {
    return e = e[an] || e[mn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function br(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Gs(e) {
    return e[bi] || null;
  }
  var qa = [], zr = -1;
  function Nn(e) {
    return { current: e };
  }
  function je(e) {
    0 > zr || (e.current = qa[zr], qa[zr] = null, zr--);
  }
  function Ne(e, t) {
    zr++, qa[zr] = e.current, e.current = t;
  }
  var Ln = {}, ct = Nn(Ln), Tt = Nn(!1), nr = Ln;
  function Br(e, t) {
    var s = e.type.contextTypes;
    if (!s) return Ln;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
    var u = {}, d;
    for (d in s) u[d] = t[d];
    return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
  }
  function kt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ys() {
    je(Tt), je(ct);
  }
  function Hf(e, t, s) {
    if (ct.current !== Ln) throw Error(i(168));
    Ne(ct, t), Ne(Tt, s);
  }
  function Kf(e, t, s) {
    var a = e.stateNode;
    if (t = t.childContextTypes, typeof a.getChildContext != "function") return s;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(i(108, Fe(e) || "Unknown", u));
    return K({}, s, a);
  }
  function Qs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ln, nr = ct.current, Ne(ct, e), Ne(Tt, Tt.current), !0;
  }
  function Gf(e, t, s) {
    var a = e.stateNode;
    if (!a) throw Error(i(169));
    s ? (e = Kf(e, t, nr), a.__reactInternalMemoizedMergedChildContext = e, je(Tt), je(ct), Ne(ct, e)) : je(Tt), Ne(Tt, s);
  }
  var yn = null, Xs = !1, Za = !1;
  function Yf(e) {
    yn === null ? yn = [e] : yn.push(e);
  }
  function jv(e) {
    Xs = !0, Yf(e);
  }
  function jn() {
    if (!Za && yn !== null) {
      Za = !0;
      var e = 0, t = Oe;
      try {
        var s = yn;
        for (Oe = 1; e < s.length; e++) {
          var a = s[e];
          do
            a = a(!0);
          while (a !== null);
        }
        yn = null, Xs = !1;
      } catch (u) {
        throw yn !== null && (yn = yn.slice(e + 1)), Qc(wa, jn), u;
      } finally {
        Oe = t, Za = !1;
      }
    }
    return null;
  }
  var Ur = [], $r = 0, qs = null, Zs = 0, jt = [], It = 0, rr = null, gn = 1, vn = "";
  function ir(e, t) {
    Ur[$r++] = Zs, Ur[$r++] = qs, qs = e, Zs = t;
  }
  function Qf(e, t, s) {
    jt[It++] = gn, jt[It++] = vn, jt[It++] = rr, rr = e;
    var a = gn;
    e = vn;
    var u = 32 - Kt(a) - 1;
    a &= ~(1 << u), s += 1;
    var d = 32 - Kt(t) + u;
    if (30 < d) {
      var y = u - u % 5;
      d = (a & (1 << y) - 1).toString(32), a >>= y, u -= y, gn = 1 << 32 - Kt(t) + u | s << u | a, vn = d + e;
    } else gn = 1 << d | s << u | a, vn = e;
  }
  function Ja(e) {
    e.return !== null && (ir(e, 1), Qf(e, 1, 0));
  }
  function el(e) {
    for (; e === qs; ) qs = Ur[--$r], Ur[$r] = null, Zs = Ur[--$r], Ur[$r] = null;
    for (; e === rr; ) rr = jt[--It], jt[It] = null, vn = jt[--It], jt[It] = null, gn = jt[--It], jt[It] = null;
  }
  var Rt = null, Mt = null, Ie = !1, Yt = null;
  function Xf(e, t) {
    var s = Ut(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = t, s.return = e, t = e.deletions, t === null ? (e.deletions = [s], e.flags |= 16) : t.push(s);
  }
  function qf(e, t) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return t = t.nodeType !== 1 || s.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Rt = e, Mt = Mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Rt = e, Mt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (s = rr !== null ? { id: gn, overflow: vn } : null, e.memoizedState = { dehydrated: t, treeContext: s, retryLane: 1073741824 }, s = Ut(18, null, null, 0), s.stateNode = t, s.return = e, e.child = s, Rt = e, Mt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function tl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function nl(e) {
    if (Ie) {
      var t = Mt;
      if (t) {
        var s = t;
        if (!qf(e, t)) {
          if (tl(e)) throw Error(i(418));
          t = Mn(s.nextSibling);
          var a = Rt;
          t && qf(e, t) ? Xf(a, s) : (e.flags = e.flags & -4097 | 2, Ie = !1, Rt = e);
        }
      } else {
        if (tl(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Ie = !1, Rt = e;
      }
    }
  }
  function Zf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Rt = e;
  }
  function Js(e) {
    if (e !== Rt) return !1;
    if (!Ie) return Zf(e), Ie = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps)), t && (t = Mt)) {
      if (tl(e)) throw Jf(), Error(i(418));
      for (; t; ) Xf(e, t), t = Mn(t.nextSibling);
    }
    if (Zf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (t === 0) {
                Mt = Mn(e.nextSibling);
                break e;
              }
              t--;
            } else s !== "$" && s !== "$!" && s !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Mt = null;
      }
    } else Mt = Rt ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Jf() {
    for (var e = Mt; e; ) e = Mn(e.nextSibling);
  }
  function Wr() {
    Mt = Rt = null, Ie = !1;
  }
  function rl(e) {
    Yt === null ? Yt = [e] : Yt.push(e);
  }
  var Iv = H.ReactCurrentBatchConfig;
  function Bi(e, t, s) {
    if (e = s.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(i(309));
          var a = s.stateNode;
        }
        if (!a) throw Error(i(147, e));
        var u = a, d = "" + e;
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
  function ed(e) {
    var t = e._init;
    return t(e._payload);
  }
  function td(e) {
    function t(P, k) {
      if (e) {
        var D = P.deletions;
        D === null ? (P.deletions = [k], P.flags |= 16) : D.push(k);
      }
    }
    function s(P, k) {
      if (!e) return null;
      for (; k !== null; ) t(P, k), k = k.sibling;
      return null;
    }
    function a(P, k) {
      for (P = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? P.set(k.key, k) : P.set(k.index, k), k = k.sibling;
      return P;
    }
    function u(P, k) {
      return P = Hn(P, k), P.index = 0, P.sibling = null, P;
    }
    function d(P, k, D) {
      return P.index = D, e ? (D = P.alternate, D !== null ? (D = D.index, D < k ? (P.flags |= 2, k) : D) : (P.flags |= 2, k)) : (P.flags |= 1048576, k);
    }
    function y(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function w(P, k, D, W) {
      return k === null || k.tag !== 6 ? (k = Yl(D, P.mode, W), k.return = P, k) : (k = u(k, D), k.return = P, k);
    }
    function T(P, k, D, W) {
      var ae = D.type;
      return ae === te ? B(P, k, D.props.children, W, D.key) : k !== null && (k.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Pe && ed(ae) === k.type) ? (W = u(k, D.props), W.ref = Bi(P, k, D), W.return = P, W) : (W = Co(D.type, D.key, D.props, null, P.mode, W), W.ref = Bi(P, k, D), W.return = P, W);
    }
    function V(P, k, D, W) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== D.containerInfo || k.stateNode.implementation !== D.implementation ? (k = Ql(D, P.mode, W), k.return = P, k) : (k = u(k, D.children || []), k.return = P, k);
    }
    function B(P, k, D, W, ae) {
      return k === null || k.tag !== 7 ? (k = dr(D, P.mode, W, ae), k.return = P, k) : (k = u(k, D), k.return = P, k);
    }
    function U(P, k, D) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Yl("" + k, P.mode, D), k.return = P, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case b:
            return D = Co(k.type, k.key, k.props, null, P.mode, D), D.ref = Bi(P, null, k), D.return = P, D;
          case Y:
            return k = Ql(k, P.mode, D), k.return = P, k;
          case Pe:
            var W = k._init;
            return U(P, W(k._payload), D);
        }
        if (S(k) || Z(k)) return k = dr(k, P.mode, D, null), k.return = P, k;
        eo(P, k);
      }
      return null;
    }
    function z(P, k, D, W) {
      var ae = k !== null ? k.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return ae !== null ? null : w(P, k, "" + D, W);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return D.key === ae ? T(P, k, D, W) : null;
          case Y:
            return D.key === ae ? V(P, k, D, W) : null;
          case Pe:
            return ae = D._init, z(
              P,
              k,
              ae(D._payload),
              W
            );
        }
        if (S(D) || Z(D)) return ae !== null ? null : B(P, k, D, W, null);
        eo(P, D);
      }
      return null;
    }
    function ne(P, k, D, W, ae) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return P = P.get(D) || null, w(k, P, "" + W, ae);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case b:
            return P = P.get(W.key === null ? D : W.key) || null, T(k, P, W, ae);
          case Y:
            return P = P.get(W.key === null ? D : W.key) || null, V(k, P, W, ae);
          case Pe:
            var ce = W._init;
            return ne(P, k, D, ce(W._payload), ae);
        }
        if (S(W) || Z(W)) return P = P.get(D) || null, B(k, P, W, ae, null);
        eo(k, W);
      }
      return null;
    }
    function se(P, k, D, W) {
      for (var ae = null, ce = null, fe = k, ye = k = 0, it = null; fe !== null && ye < D.length; ye++) {
        fe.index > ye ? (it = fe, fe = null) : it = fe.sibling;
        var Ae = z(P, fe, D[ye], W);
        if (Ae === null) {
          fe === null && (fe = it);
          break;
        }
        e && fe && Ae.alternate === null && t(P, fe), k = d(Ae, k, ye), ce === null ? ae = Ae : ce.sibling = Ae, ce = Ae, fe = it;
      }
      if (ye === D.length) return s(P, fe), Ie && ir(P, ye), ae;
      if (fe === null) {
        for (; ye < D.length; ye++) fe = U(P, D[ye], W), fe !== null && (k = d(fe, k, ye), ce === null ? ae = fe : ce.sibling = fe, ce = fe);
        return Ie && ir(P, ye), ae;
      }
      for (fe = a(P, fe); ye < D.length; ye++) it = ne(fe, P, ye, D[ye], W), it !== null && (e && it.alternate !== null && fe.delete(it.key === null ? ye : it.key), k = d(it, k, ye), ce === null ? ae = it : ce.sibling = it, ce = it);
      return e && fe.forEach(function(Kn) {
        return t(P, Kn);
      }), Ie && ir(P, ye), ae;
    }
    function oe(P, k, D, W) {
      var ae = Z(D);
      if (typeof ae != "function") throw Error(i(150));
      if (D = ae.call(D), D == null) throw Error(i(151));
      for (var ce = ae = null, fe = k, ye = k = 0, it = null, Ae = D.next(); fe !== null && !Ae.done; ye++, Ae = D.next()) {
        fe.index > ye ? (it = fe, fe = null) : it = fe.sibling;
        var Kn = z(P, fe, Ae.value, W);
        if (Kn === null) {
          fe === null && (fe = it);
          break;
        }
        e && fe && Kn.alternate === null && t(P, fe), k = d(Kn, k, ye), ce === null ? ae = Kn : ce.sibling = Kn, ce = Kn, fe = it;
      }
      if (Ae.done) return s(
        P,
        fe
      ), Ie && ir(P, ye), ae;
      if (fe === null) {
        for (; !Ae.done; ye++, Ae = D.next()) Ae = U(P, Ae.value, W), Ae !== null && (k = d(Ae, k, ye), ce === null ? ae = Ae : ce.sibling = Ae, ce = Ae);
        return Ie && ir(P, ye), ae;
      }
      for (fe = a(P, fe); !Ae.done; ye++, Ae = D.next()) Ae = ne(fe, P, ye, Ae.value, W), Ae !== null && (e && Ae.alternate !== null && fe.delete(Ae.key === null ? ye : Ae.key), k = d(Ae, k, ye), ce === null ? ae = Ae : ce.sibling = Ae, ce = Ae);
      return e && fe.forEach(function(g0) {
        return t(P, g0);
      }), Ie && ir(P, ye), ae;
    }
    function Ge(P, k, D, W) {
      if (typeof D == "object" && D !== null && D.type === te && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            e: {
              for (var ae = D.key, ce = k; ce !== null; ) {
                if (ce.key === ae) {
                  if (ae = D.type, ae === te) {
                    if (ce.tag === 7) {
                      s(P, ce.sibling), k = u(ce, D.props.children), k.return = P, P = k;
                      break e;
                    }
                  } else if (ce.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === Pe && ed(ae) === ce.type) {
                    s(P, ce.sibling), k = u(ce, D.props), k.ref = Bi(P, ce, D), k.return = P, P = k;
                    break e;
                  }
                  s(P, ce);
                  break;
                } else t(P, ce);
                ce = ce.sibling;
              }
              D.type === te ? (k = dr(D.props.children, P.mode, W, D.key), k.return = P, P = k) : (W = Co(D.type, D.key, D.props, null, P.mode, W), W.ref = Bi(P, k, D), W.return = P, P = W);
            }
            return y(P);
          case Y:
            e: {
              for (ce = D.key; k !== null; ) {
                if (k.key === ce) if (k.tag === 4 && k.stateNode.containerInfo === D.containerInfo && k.stateNode.implementation === D.implementation) {
                  s(P, k.sibling), k = u(k, D.children || []), k.return = P, P = k;
                  break e;
                } else {
                  s(P, k);
                  break;
                }
                else t(P, k);
                k = k.sibling;
              }
              k = Ql(D, P.mode, W), k.return = P, P = k;
            }
            return y(P);
          case Pe:
            return ce = D._init, Ge(P, k, ce(D._payload), W);
        }
        if (S(D)) return se(P, k, D, W);
        if (Z(D)) return oe(P, k, D, W);
        eo(P, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, k !== null && k.tag === 6 ? (s(P, k.sibling), k = u(k, D), k.return = P, P = k) : (s(P, k), k = Yl(D, P.mode, W), k.return = P, P = k), y(P)) : s(P, k);
    }
    return Ge;
  }
  var Hr = td(!0), nd = td(!1), to = Nn(null), no = null, Kr = null, il = null;
  function sl() {
    il = Kr = no = null;
  }
  function ol(e) {
    var t = to.current;
    je(to), e._currentValue = t;
  }
  function al(e, t, s) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === s) break;
      e = e.return;
    }
  }
  function Gr(e, t) {
    no = e, il = Kr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Et = !0), e.firstContext = null);
  }
  function bt(e) {
    var t = e._currentValue;
    if (il !== e) if (e = { context: e, memoizedValue: t, next: null }, Kr === null) {
      if (no === null) throw Error(i(308));
      Kr = e, no.dependencies = { lanes: 0, firstContext: e };
    } else Kr = Kr.next = e;
    return t;
  }
  var sr = null;
  function ll(e) {
    sr === null ? sr = [e] : sr.push(e);
  }
  function rd(e, t, s, a) {
    var u = t.interleaved;
    return u === null ? (s.next = s, ll(t)) : (s.next = u.next, u.next = s), t.interleaved = s, xn(e, a);
  }
  function xn(e, t) {
    e.lanes |= t;
    var s = e.alternate;
    for (s !== null && (s.lanes |= t), s = e, e = e.return; e !== null; ) e.childLanes |= t, s = e.alternate, s !== null && (s.childLanes |= t), s = e, e = e.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var In = !1;
  function ul(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function id(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function wn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(e, t, s) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ce & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, xn(e, s);
    }
    return u = a.interleaved, u === null ? (t.next = t, ll(a)) : (t.next = u.next, u.next = t), a.interleaved = t, xn(e, s);
  }
  function ro(e, t, s) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (s & 4194240) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, s |= a, t.lanes = s, ka(e, s);
    }
  }
  function sd(e, t) {
    var s = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, s === a)) {
      var u = null, d = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var y = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          d === null ? u = d = y : d = d.next = y, s = s.next;
        } while (s !== null);
        d === null ? u = d = t : d = d.next = t;
      } else u = d = t;
      s = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: d, shared: a.shared, effects: a.effects }, e.updateQueue = s;
      return;
    }
    e = s.lastBaseUpdate, e === null ? s.firstBaseUpdate = t : e.next = t, s.lastBaseUpdate = t;
  }
  function io(e, t, s, a) {
    var u = e.updateQueue;
    In = !1;
    var d = u.firstBaseUpdate, y = u.lastBaseUpdate, w = u.shared.pending;
    if (w !== null) {
      u.shared.pending = null;
      var T = w, V = T.next;
      T.next = null, y === null ? d = V : y.next = V, y = T;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, w = B.lastBaseUpdate, w !== y && (w === null ? B.firstBaseUpdate = V : w.next = V, B.lastBaseUpdate = T));
    }
    if (d !== null) {
      var U = u.baseState;
      y = 0, B = V = T = null, w = d;
      do {
        var z = w.lane, ne = w.eventTime;
        if ((a & z) === z) {
          B !== null && (B = B.next = {
            eventTime: ne,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var se = e, oe = w;
            switch (z = t, ne = s, oe.tag) {
              case 1:
                if (se = oe.payload, typeof se == "function") {
                  U = se.call(ne, U, z);
                  break e;
                }
                U = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = oe.payload, z = typeof se == "function" ? se.call(ne, U, z) : se, z == null) break e;
                U = K({}, U, z);
                break e;
              case 2:
                In = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (e.flags |= 64, z = u.effects, z === null ? u.effects = [w] : z.push(w));
        } else ne = { eventTime: ne, lane: z, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, B === null ? (V = B = ne, T = U) : B = B.next = ne, y |= z;
        if (w = w.next, w === null) {
          if (w = u.shared.pending, w === null) break;
          z = w, w = z.next, z.next = null, u.lastBaseUpdate = z, u.shared.pending = null;
        }
      } while (!0);
      if (B === null && (T = U), u.baseState = T, u.firstBaseUpdate = V, u.lastBaseUpdate = B, t = u.shared.interleaved, t !== null) {
        u = t;
        do
          y |= u.lane, u = u.next;
        while (u !== t);
      } else d === null && (u.shared.lanes = 0);
      lr |= y, e.lanes = y, e.memoizedState = U;
    }
  }
  function od(e, t, s) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var a = e[t], u = a.callback;
      if (u !== null) {
        if (a.callback = null, a = s, typeof u != "function") throw Error(i(191, u));
        u.call(a);
      }
    }
  }
  var Ui = {}, ln = Nn(Ui), $i = Nn(Ui), Wi = Nn(Ui);
  function or(e) {
    if (e === Ui) throw Error(i(174));
    return e;
  }
  function cl(e, t) {
    switch (Ne(Wi, t), Ne($i, e), Ne(ln, Ui), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ee(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ee(t, e);
    }
    je(ln), Ne(ln, t);
  }
  function Yr() {
    je(ln), je($i), je(Wi);
  }
  function ad(e) {
    or(Wi.current);
    var t = or(ln.current), s = Ee(t, e.type);
    t !== s && (Ne($i, e), Ne(ln, s));
  }
  function fl(e) {
    $i.current === e && (je(ln), je($i));
  }
  var ze = Nn(0);
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
  var dl = [];
  function hl() {
    for (var e = 0; e < dl.length; e++) dl[e]._workInProgressVersionPrimary = null;
    dl.length = 0;
  }
  var oo = H.ReactCurrentDispatcher, pl = H.ReactCurrentBatchConfig, ar = 0, Be = null, Je = null, nt = null, ao = !1, Hi = !1, Ki = 0, bv = 0;
  function ft() {
    throw Error(i(321));
  }
  function ml(e, t) {
    if (t === null) return !1;
    for (var s = 0; s < t.length && s < e.length; s++) if (!Gt(e[s], t[s])) return !1;
    return !0;
  }
  function yl(e, t, s, a, u, d) {
    if (ar = d, Be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, oo.current = e === null || e.memoizedState === null ? $v : Wv, e = s(a, u), Hi) {
      d = 0;
      do {
        if (Hi = !1, Ki = 0, 25 <= d) throw Error(i(301));
        d += 1, nt = Je = null, t.updateQueue = null, oo.current = Hv, e = s(a, u);
      } while (Hi);
    }
    if (oo.current = co, t = Je !== null && Je.next !== null, ar = 0, nt = Je = Be = null, ao = !1, t) throw Error(i(300));
    return e;
  }
  function gl() {
    var e = Ki !== 0;
    return Ki = 0, e;
  }
  function un() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return nt === null ? Be.memoizedState = nt = e : nt = nt.next = e, nt;
  }
  function zt() {
    if (Je === null) {
      var e = Be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = nt === null ? Be.memoizedState : nt.next;
    if (t !== null) nt = t, Je = e;
    else {
      if (e === null) throw Error(i(310));
      Je = e, e = { memoizedState: Je.memoizedState, baseState: Je.baseState, baseQueue: Je.baseQueue, queue: Je.queue, next: null }, nt === null ? Be.memoizedState = nt = e : nt = nt.next = e;
    }
    return nt;
  }
  function Gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function vl(e) {
    var t = zt(), s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var a = Je, u = a.baseQueue, d = s.pending;
    if (d !== null) {
      if (u !== null) {
        var y = u.next;
        u.next = d.next, d.next = y;
      }
      a.baseQueue = u = d, s.pending = null;
    }
    if (u !== null) {
      d = u.next, a = a.baseState;
      var w = y = null, T = null, V = d;
      do {
        var B = V.lane;
        if ((ar & B) === B) T !== null && (T = T.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), a = V.hasEagerState ? V.eagerState : e(a, V.action);
        else {
          var U = {
            lane: B,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          T === null ? (w = T = U, y = a) : T = T.next = U, Be.lanes |= B, lr |= B;
        }
        V = V.next;
      } while (V !== null && V !== d);
      T === null ? y = a : T.next = w, Gt(a, t.memoizedState) || (Et = !0), t.memoizedState = a, t.baseState = y, t.baseQueue = T, s.lastRenderedState = a;
    }
    if (e = s.interleaved, e !== null) {
      u = e;
      do
        d = u.lane, Be.lanes |= d, lr |= d, u = u.next;
      while (u !== e);
    } else u === null && (s.lanes = 0);
    return [t.memoizedState, s.dispatch];
  }
  function xl(e) {
    var t = zt(), s = t.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = e;
    var a = s.dispatch, u = s.pending, d = t.memoizedState;
    if (u !== null) {
      s.pending = null;
      var y = u = u.next;
      do
        d = e(d, y.action), y = y.next;
      while (y !== u);
      Gt(d, t.memoizedState) || (Et = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), s.lastRenderedState = d;
    }
    return [d, a];
  }
  function ld() {
  }
  function ud(e, t) {
    var s = Be, a = zt(), u = t(), d = !Gt(a.memoizedState, u);
    if (d && (a.memoizedState = u, Et = !0), a = a.queue, wl(dd.bind(null, s, a, e), [e]), a.getSnapshot !== t || d || nt !== null && nt.memoizedState.tag & 1) {
      if (s.flags |= 2048, Yi(9, fd.bind(null, s, a, u, t), void 0, null), rt === null) throw Error(i(349));
      (ar & 30) !== 0 || cd(s, t, u);
    }
    return u;
  }
  function cd(e, t, s) {
    e.flags |= 16384, e = { getSnapshot: t, value: s }, t = Be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Be.updateQueue = t, t.stores = [e]) : (s = t.stores, s === null ? t.stores = [e] : s.push(e));
  }
  function fd(e, t, s, a) {
    t.value = s, t.getSnapshot = a, hd(t) && pd(e);
  }
  function dd(e, t, s) {
    return s(function() {
      hd(t) && pd(e);
    });
  }
  function hd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var s = t();
      return !Gt(e, s);
    } catch {
      return !0;
    }
  }
  function pd(e) {
    var t = xn(e, 1);
    t !== null && Zt(t, e, 1, -1);
  }
  function md(e) {
    var t = un();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Uv.bind(null, Be, e), [t.memoizedState, e];
  }
  function Yi(e, t, s, a) {
    return e = { tag: e, create: t, destroy: s, deps: a, next: null }, t = Be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Be.updateQueue = t, t.lastEffect = e.next = e) : (s = t.lastEffect, s === null ? t.lastEffect = e.next = e : (a = s.next, s.next = e, e.next = a, t.lastEffect = e)), e;
  }
  function yd() {
    return zt().memoizedState;
  }
  function lo(e, t, s, a) {
    var u = un();
    Be.flags |= e, u.memoizedState = Yi(1 | t, s, void 0, a === void 0 ? null : a);
  }
  function uo(e, t, s, a) {
    var u = zt();
    a = a === void 0 ? null : a;
    var d = void 0;
    if (Je !== null) {
      var y = Je.memoizedState;
      if (d = y.destroy, a !== null && ml(a, y.deps)) {
        u.memoizedState = Yi(t, s, d, a);
        return;
      }
    }
    Be.flags |= e, u.memoizedState = Yi(1 | t, s, d, a);
  }
  function gd(e, t) {
    return lo(8390656, 8, e, t);
  }
  function wl(e, t) {
    return uo(2048, 8, e, t);
  }
  function vd(e, t) {
    return uo(4, 2, e, t);
  }
  function xd(e, t) {
    return uo(4, 4, e, t);
  }
  function wd(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Sd(e, t, s) {
    return s = s != null ? s.concat([e]) : null, uo(4, 4, wd.bind(null, t, e), s);
  }
  function Sl() {
  }
  function Td(e, t) {
    var s = zt();
    t = t === void 0 ? null : t;
    var a = s.memoizedState;
    return a !== null && t !== null && ml(t, a[1]) ? a[0] : (s.memoizedState = [e, t], e);
  }
  function kd(e, t) {
    var s = zt();
    t = t === void 0 ? null : t;
    var a = s.memoizedState;
    return a !== null && t !== null && ml(t, a[1]) ? a[0] : (e = e(), s.memoizedState = [e, t], e);
  }
  function Ed(e, t, s) {
    return (ar & 21) === 0 ? (e.baseState && (e.baseState = !1, Et = !0), e.memoizedState = s) : (Gt(s, t) || (s = Jc(), Be.lanes |= s, lr |= s, e.baseState = !0), t);
  }
  function zv(e, t) {
    var s = Oe;
    Oe = s !== 0 && 4 > s ? s : 4, e(!0);
    var a = pl.transition;
    pl.transition = {};
    try {
      e(!1), t();
    } finally {
      Oe = s, pl.transition = a;
    }
  }
  function Cd() {
    return zt().memoizedState;
  }
  function Bv(e, t, s) {
    var a = $n(e);
    if (s = { lane: a, action: s, hasEagerState: !1, eagerState: null, next: null }, Pd(e)) _d(t, s);
    else if (s = rd(e, t, s, a), s !== null) {
      var u = gt();
      Zt(s, e, a, u), Ad(s, t, a);
    }
  }
  function Uv(e, t, s) {
    var a = $n(e), u = { lane: a, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Pd(e)) _d(t, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null)) try {
        var y = t.lastRenderedState, w = d(y, s);
        if (u.hasEagerState = !0, u.eagerState = w, Gt(w, y)) {
          var T = t.interleaved;
          T === null ? (u.next = u, ll(t)) : (u.next = T.next, T.next = u), t.interleaved = u;
          return;
        }
      } catch {
      }
      s = rd(e, t, u, a), s !== null && (u = gt(), Zt(s, e, a, u), Ad(s, t, a));
    }
  }
  function Pd(e) {
    var t = e.alternate;
    return e === Be || t !== null && t === Be;
  }
  function _d(e, t) {
    Hi = ao = !0;
    var s = e.pending;
    s === null ? t.next = t : (t.next = s.next, s.next = t), e.pending = t;
  }
  function Ad(e, t, s) {
    if ((s & 4194240) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, s |= a, t.lanes = s, ka(e, s);
    }
  }
  var co = { readContext: bt, useCallback: ft, useContext: ft, useEffect: ft, useImperativeHandle: ft, useInsertionEffect: ft, useLayoutEffect: ft, useMemo: ft, useReducer: ft, useRef: ft, useState: ft, useDebugValue: ft, useDeferredValue: ft, useTransition: ft, useMutableSource: ft, useSyncExternalStore: ft, useId: ft, unstable_isNewReconciler: !1 }, $v = { readContext: bt, useCallback: function(e, t) {
    return un().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: bt, useEffect: gd, useImperativeHandle: function(e, t, s) {
    return s = s != null ? s.concat([e]) : null, lo(
      4194308,
      4,
      wd.bind(null, t, e),
      s
    );
  }, useLayoutEffect: function(e, t) {
    return lo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return lo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var s = un();
    return t = t === void 0 ? null : t, e = e(), s.memoizedState = [e, t], e;
  }, useReducer: function(e, t, s) {
    var a = un();
    return t = s !== void 0 ? s(t) : t, a.memoizedState = a.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, a.queue = e, e = e.dispatch = Bv.bind(null, Be, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var t = un();
    return e = { current: e }, t.memoizedState = e;
  }, useState: md, useDebugValue: Sl, useDeferredValue: function(e) {
    return un().memoizedState = e;
  }, useTransition: function() {
    var e = md(!1), t = e[0];
    return e = zv.bind(null, e[1]), un().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, s) {
    var a = Be, u = un();
    if (Ie) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else {
      if (s = t(), rt === null) throw Error(i(349));
      (ar & 30) !== 0 || cd(a, t, s);
    }
    u.memoizedState = s;
    var d = { value: s, getSnapshot: t };
    return u.queue = d, gd(dd.bind(
      null,
      a,
      d,
      e
    ), [e]), a.flags |= 2048, Yi(9, fd.bind(null, a, d, s, t), void 0, null), s;
  }, useId: function() {
    var e = un(), t = rt.identifierPrefix;
    if (Ie) {
      var s = vn, a = gn;
      s = (a & ~(1 << 32 - Kt(a) - 1)).toString(32) + s, t = ":" + t + "R" + s, s = Ki++, 0 < s && (t += "H" + s.toString(32)), t += ":";
    } else s = bv++, t = ":" + t + "r" + s.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Wv = {
    readContext: bt,
    useCallback: Td,
    useContext: bt,
    useEffect: wl,
    useImperativeHandle: Sd,
    useInsertionEffect: vd,
    useLayoutEffect: xd,
    useMemo: kd,
    useReducer: vl,
    useRef: yd,
    useState: function() {
      return vl(Gi);
    },
    useDebugValue: Sl,
    useDeferredValue: function(e) {
      var t = zt();
      return Ed(t, Je.memoizedState, e);
    },
    useTransition: function() {
      var e = vl(Gi)[0], t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: ld,
    useSyncExternalStore: ud,
    useId: Cd,
    unstable_isNewReconciler: !1
  }, Hv = { readContext: bt, useCallback: Td, useContext: bt, useEffect: wl, useImperativeHandle: Sd, useInsertionEffect: vd, useLayoutEffect: xd, useMemo: kd, useReducer: xl, useRef: yd, useState: function() {
    return xl(Gi);
  }, useDebugValue: Sl, useDeferredValue: function(e) {
    var t = zt();
    return Je === null ? t.memoizedState = e : Ed(t, Je.memoizedState, e);
  }, useTransition: function() {
    var e = xl(Gi)[0], t = zt().memoizedState;
    return [e, t];
  }, useMutableSource: ld, useSyncExternalStore: ud, useId: Cd, unstable_isNewReconciler: !1 };
  function Qt(e, t) {
    if (e && e.defaultProps) {
      t = K({}, t), e = e.defaultProps;
      for (var s in e) t[s] === void 0 && (t[s] = e[s]);
      return t;
    }
    return t;
  }
  function Tl(e, t, s, a) {
    t = e.memoizedState, s = s(a, t), s = s == null ? t : K({}, t, s), e.memoizedState = s, e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var fo = { isMounted: function(e) {
    return (e = e._reactInternals) ? er(e) === e : !1;
  }, enqueueSetState: function(e, t, s) {
    e = e._reactInternals;
    var a = gt(), u = $n(e), d = wn(a, u);
    d.payload = t, s != null && (d.callback = s), t = bn(e, d, u), t !== null && (Zt(t, e, u, a), ro(t, e, u));
  }, enqueueReplaceState: function(e, t, s) {
    e = e._reactInternals;
    var a = gt(), u = $n(e), d = wn(a, u);
    d.tag = 1, d.payload = t, s != null && (d.callback = s), t = bn(e, d, u), t !== null && (Zt(t, e, u, a), ro(t, e, u));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var s = gt(), a = $n(e), u = wn(s, a);
    u.tag = 2, t != null && (u.callback = t), t = bn(e, u, a), t !== null && (Zt(t, e, a, s), ro(t, e, a));
  } };
  function Dd(e, t, s, a, u, d, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, d, y) : t.prototype && t.prototype.isPureReactComponent ? !Mi(s, a) || !Mi(u, d) : !0;
  }
  function Vd(e, t, s) {
    var a = !1, u = Ln, d = t.contextType;
    return typeof d == "object" && d !== null ? d = bt(d) : (u = kt(t) ? nr : ct.current, a = t.contextTypes, d = (a = a != null) ? Br(e, u) : Ln), t = new t(s, d), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fo, e.stateNode = t, t._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = d), t;
  }
  function Fd(e, t, s, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(s, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(s, a), t.state !== e && fo.enqueueReplaceState(t, t.state, null);
  }
  function kl(e, t, s, a) {
    var u = e.stateNode;
    u.props = s, u.state = e.memoizedState, u.refs = {}, ul(e);
    var d = t.contextType;
    typeof d == "object" && d !== null ? u.context = bt(d) : (d = kt(t) ? nr : ct.current, u.context = Br(e, d)), u.state = e.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (Tl(e, t, d, s), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && fo.enqueueReplaceState(u, u.state, null), io(e, s, u, a), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qr(e, t) {
    try {
      var s = "", a = t;
      do
        s += Te(a), a = a.return;
      while (a);
      var u = s;
    } catch (d) {
      u = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function El(e, t, s) {
    return { value: e, source: null, stack: s ?? null, digest: t ?? null };
  }
  function Cl(e, t) {
    try {
      console.error(t.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var Kv = typeof WeakMap == "function" ? WeakMap : Map;
  function Od(e, t, s) {
    s = wn(-1, s), s.tag = 3, s.payload = { element: null };
    var a = t.value;
    return s.callback = function() {
      xo || (xo = !0, zl = a), Cl(e, t);
    }, s;
  }
  function Rd(e, t, s) {
    s = wn(-1, s), s.tag = 3;
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = t.value;
      s.payload = function() {
        return a(u);
      }, s.callback = function() {
        Cl(e, t);
      };
    }
    var d = e.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (s.callback = function() {
      Cl(e, t), typeof a != "function" && (Bn === null ? Bn = /* @__PURE__ */ new Set([this]) : Bn.add(this));
      var y = t.stack;
      this.componentDidCatch(t.value, { componentStack: y !== null ? y : "" });
    }), s;
  }
  function Md(e, t, s) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Kv();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(s) || (u.add(s), e = o0.bind(null, e, t, s), t.then(e, e));
  }
  function Nd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ld(e, t, s, a, u) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (t = wn(-1, 1), t.tag = 2, bn(s, t, 1))), s.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
  }
  var Gv = H.ReactCurrentOwner, Et = !1;
  function yt(e, t, s, a) {
    t.child = e === null ? nd(t, null, s, a) : Hr(t, e.child, s, a);
  }
  function jd(e, t, s, a, u) {
    s = s.render;
    var d = t.ref;
    return Gr(t, u), a = yl(e, t, s, a, d, u), s = gl(), e !== null && !Et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Sn(e, t, u)) : (Ie && s && Ja(t), t.flags |= 1, yt(e, t, a, u), t.child);
  }
  function Id(e, t, s, a, u) {
    if (e === null) {
      var d = s.type;
      return typeof d == "function" && !Gl(d) && d.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (t.tag = 15, t.type = d, bd(e, t, d, a, u)) : (e = Co(s.type, null, a, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, (e.lanes & u) === 0) {
      var y = d.memoizedProps;
      if (s = s.compare, s = s !== null ? s : Mi, s(y, a) && e.ref === t.ref) return Sn(e, t, u);
    }
    return t.flags |= 1, e = Hn(d, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function bd(e, t, s, a, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Mi(d, a) && e.ref === t.ref) if (Et = !1, t.pendingProps = a = d, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (Et = !0);
      else return t.lanes = e.lanes, Sn(e, t, u);
    }
    return Pl(e, t, s, a, u);
  }
  function zd(e, t, s) {
    var a = t.pendingProps, u = a.children, d = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(qr, Nt), Nt |= s;
    else {
      if ((s & 1073741824) === 0) return e = d !== null ? d.baseLanes | s : s, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(qr, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = d !== null ? d.baseLanes : s, Ne(qr, Nt), Nt |= a;
    }
    else d !== null ? (a = d.baseLanes | s, t.memoizedState = null) : a = s, Ne(qr, Nt), Nt |= a;
    return yt(e, t, u, s), t.child;
  }
  function Bd(e, t) {
    var s = t.ref;
    (e === null && s !== null || e !== null && e.ref !== s) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Pl(e, t, s, a, u) {
    var d = kt(s) ? nr : ct.current;
    return d = Br(t, d), Gr(t, u), s = yl(e, t, s, a, d, u), a = gl(), e !== null && !Et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Sn(e, t, u)) : (Ie && a && Ja(t), t.flags |= 1, yt(e, t, s, u), t.child);
  }
  function Ud(e, t, s, a, u) {
    if (kt(s)) {
      var d = !0;
      Qs(t);
    } else d = !1;
    if (Gr(t, u), t.stateNode === null) po(e, t), Vd(t, s, a), kl(t, s, a, u), a = !0;
    else if (e === null) {
      var y = t.stateNode, w = t.memoizedProps;
      y.props = w;
      var T = y.context, V = s.contextType;
      typeof V == "object" && V !== null ? V = bt(V) : (V = kt(s) ? nr : ct.current, V = Br(t, V));
      var B = s.getDerivedStateFromProps, U = typeof B == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      U || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (w !== a || T !== V) && Fd(t, y, a, V), In = !1;
      var z = t.memoizedState;
      y.state = z, io(t, a, y, u), T = t.memoizedState, w !== a || z !== T || Tt.current || In ? (typeof B == "function" && (Tl(t, s, B, a), T = t.memoizedState), (w = In || Dd(t, s, w, a, z, T, V)) ? (U || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = T), y.props = a, y.state = T, y.context = V, a = w) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      y = t.stateNode, id(e, t), w = t.memoizedProps, V = t.type === t.elementType ? w : Qt(t.type, w), y.props = V, U = t.pendingProps, z = y.context, T = s.contextType, typeof T == "object" && T !== null ? T = bt(T) : (T = kt(s) ? nr : ct.current, T = Br(t, T));
      var ne = s.getDerivedStateFromProps;
      (B = typeof ne == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (w !== U || z !== T) && Fd(t, y, a, T), In = !1, z = t.memoizedState, y.state = z, io(t, a, y, u);
      var se = t.memoizedState;
      w !== U || z !== se || Tt.current || In ? (typeof ne == "function" && (Tl(t, s, ne, a), se = t.memoizedState), (V = In || Dd(t, s, V, a, z, se, T) || !1) ? (B || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(a, se, T), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(a, se, T)), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = se), y.props = a, y.state = se, y.context = T, a = V) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return _l(e, t, s, a, d, u);
  }
  function _l(e, t, s, a, u, d) {
    Bd(e, t);
    var y = (t.flags & 128) !== 0;
    if (!a && !y) return u && Gf(t, s, !1), Sn(e, t, d);
    a = t.stateNode, Gv.current = t;
    var w = y && typeof s.getDerivedStateFromError != "function" ? null : a.render();
    return t.flags |= 1, e !== null && y ? (t.child = Hr(t, e.child, null, d), t.child = Hr(t, null, w, d)) : yt(e, t, w, d), t.memoizedState = a.state, u && Gf(t, s, !0), t.child;
  }
  function $d(e) {
    var t = e.stateNode;
    t.pendingContext ? Hf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hf(e, t.context, !1), cl(e, t.containerInfo);
  }
  function Wd(e, t, s, a, u) {
    return Wr(), rl(u), t.flags |= 256, yt(e, t, s, a), t.child;
  }
  var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hd(e, t, s) {
    var a = t.pendingProps, u = ze.current, d = !1, y = (t.flags & 128) !== 0, w;
    if ((w = y) || (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), w ? (d = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), Ne(ze, u & 1), e === null)
      return nl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (y = a.children, e = a.fallback, d ? (a = t.mode, d = t.child, y = { mode: "hidden", children: y }, (a & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = y) : d = Po(y, a, 0, null), e = dr(e, a, s, null), d.return = t, e.return = t, d.sibling = e, t.child = d, t.child.memoizedState = Dl(s), t.memoizedState = Al, e) : Vl(t, y));
    if (u = e.memoizedState, u !== null && (w = u.dehydrated, w !== null)) return Yv(e, t, y, a, w, u, s);
    if (d) {
      d = a.fallback, y = t.mode, u = e.child, w = u.sibling;
      var T = { mode: "hidden", children: a.children };
      return (y & 1) === 0 && t.child !== u ? (a = t.child, a.childLanes = 0, a.pendingProps = T, t.deletions = null) : (a = Hn(u, T), a.subtreeFlags = u.subtreeFlags & 14680064), w !== null ? d = Hn(w, d) : (d = dr(d, y, s, null), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, a = d, d = t.child, y = e.child.memoizedState, y = y === null ? Dl(s) : { baseLanes: y.baseLanes | s, cachePool: null, transitions: y.transitions }, d.memoizedState = y, d.childLanes = e.childLanes & ~s, t.memoizedState = Al, a;
    }
    return d = e.child, e = d.sibling, a = Hn(d, { mode: "visible", children: a.children }), (t.mode & 1) === 0 && (a.lanes = s), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a;
  }
  function Vl(e, t) {
    return t = Po({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ho(e, t, s, a) {
    return a !== null && rl(a), Hr(t, e.child, null, s), e = Vl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Yv(e, t, s, a, u, d, y) {
    if (s)
      return t.flags & 256 ? (t.flags &= -257, a = El(Error(i(422))), ho(e, t, y, a)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (d = a.fallback, u = t.mode, a = Po({ mode: "visible", children: a.children }, u, 0, null), d = dr(d, u, y, null), d.flags |= 2, a.return = t, d.return = t, a.sibling = d, t.child = a, (t.mode & 1) !== 0 && Hr(t, e.child, null, y), t.child.memoizedState = Dl(y), t.memoizedState = Al, d);
    if ((t.mode & 1) === 0) return ho(e, t, y, null);
    if (u.data === "$!") {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var w = a.dgst;
      return a = w, d = Error(i(419)), a = El(d, a, void 0), ho(e, t, y, a);
    }
    if (w = (y & e.childLanes) !== 0, Et || w) {
      if (a = rt, a !== null) {
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
        u = (u & (a.suspendedLanes | y)) !== 0 ? 0 : u, u !== 0 && u !== d.retryLane && (d.retryLane = u, xn(e, u), Zt(a, e, u, -1));
      }
      return Kl(), a = El(Error(i(421))), ho(e, t, y, a);
    }
    return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = a0.bind(null, e), u._reactRetry = t, null) : (e = d.treeContext, Mt = Mn(u.nextSibling), Rt = t, Ie = !0, Yt = null, e !== null && (jt[It++] = gn, jt[It++] = vn, jt[It++] = rr, gn = e.id, vn = e.overflow, rr = t), t = Vl(t, a.children), t.flags |= 4096, t);
  }
  function Kd(e, t, s) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), al(e.return, t, s);
  }
  function Fl(e, t, s, a, u) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: s, tailMode: u } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = s, d.tailMode = u);
  }
  function Gd(e, t, s) {
    var a = t.pendingProps, u = a.revealOrder, d = a.tail;
    if (yt(e, t, a.children, s), a = ze.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Kd(e, s, t);
        else if (e.tag === 19) Kd(e, s, t);
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
      a &= 1;
    }
    if (Ne(ze, a), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (u) {
      case "forwards":
        for (s = t.child, u = null; s !== null; ) e = s.alternate, e !== null && so(e) === null && (u = s), s = s.sibling;
        s = u, s === null ? (u = t.child, t.child = null) : (u = s.sibling, s.sibling = null), Fl(t, !1, u, s, d);
        break;
      case "backwards":
        for (s = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && so(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = s, s = u, u = e;
        }
        Fl(t, !0, s, null, d);
        break;
      case "together":
        Fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function po(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Sn(e, t, s) {
    if (e !== null && (t.dependencies = e.dependencies), lr |= t.lanes, (s & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, s = Hn(e, e.pendingProps), t.child = s, s.return = t; e.sibling !== null; ) e = e.sibling, s = s.sibling = Hn(e, e.pendingProps), s.return = t;
      s.sibling = null;
    }
    return t.child;
  }
  function Qv(e, t, s) {
    switch (t.tag) {
      case 3:
        $d(t), Wr();
        break;
      case 5:
        ad(t);
        break;
      case 1:
        kt(t.type) && Qs(t);
        break;
      case 4:
        cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context, u = t.memoizedProps.value;
        Ne(to, a._currentValue), a._currentValue = u;
        break;
      case 13:
        if (a = t.memoizedState, a !== null)
          return a.dehydrated !== null ? (Ne(ze, ze.current & 1), t.flags |= 128, null) : (s & t.child.childLanes) !== 0 ? Hd(e, t, s) : (Ne(ze, ze.current & 1), e = Sn(e, t, s), e !== null ? e.sibling : null);
        Ne(ze, ze.current & 1);
        break;
      case 19:
        if (a = (s & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (a) return Gd(e, t, s);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Ne(ze, ze.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, zd(e, t, s);
    }
    return Sn(e, t, s);
  }
  var Yd, Ol, Qd, Xd;
  Yd = function(e, t) {
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
  }, Ol = function() {
  }, Qd = function(e, t, s, a) {
    var u = e.memoizedProps;
    if (u !== a) {
      e = t.stateNode, or(ln.current);
      var d = null;
      switch (s) {
        case "input":
          u = Er(e, u), a = Er(e, a), d = [];
          break;
        case "select":
          u = K({}, u, { value: void 0 }), a = K({}, a, { value: void 0 }), d = [];
          break;
        case "textarea":
          u = M(e, u), a = M(e, a), d = [];
          break;
        default:
          typeof u.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Ks);
      }
      Ar(s, a);
      var y;
      s = null;
      for (V in u) if (!a.hasOwnProperty(V) && u.hasOwnProperty(V) && u[V] != null) if (V === "style") {
        var w = u[V];
        for (y in w) w.hasOwnProperty(y) && (s || (s = {}), s[y] = "");
      } else V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (l.hasOwnProperty(V) ? d || (d = []) : (d = d || []).push(V, null));
      for (V in a) {
        var T = a[V];
        if (w = u?.[V], a.hasOwnProperty(V) && T !== w && (T != null || w != null)) if (V === "style") if (w) {
          for (y in w) !w.hasOwnProperty(y) || T && T.hasOwnProperty(y) || (s || (s = {}), s[y] = "");
          for (y in T) T.hasOwnProperty(y) && w[y] !== T[y] && (s || (s = {}), s[y] = T[y]);
        } else s || (d || (d = []), d.push(
          V,
          s
        )), s = T;
        else V === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, w = w ? w.__html : void 0, T != null && w !== T && (d = d || []).push(V, T)) : V === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(V, "" + T) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (l.hasOwnProperty(V) ? (T != null && V === "onScroll" && Le("scroll", e), d || w === T || (d = [])) : (d = d || []).push(V, T));
      }
      s && (d = d || []).push("style", s);
      var V = d;
      (t.updateQueue = V) && (t.flags |= 4);
    }
  }, Xd = function(e, t, s, a) {
    s !== a && (t.flags |= 4);
  };
  function Qi(e, t) {
    if (!Ie) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var s = null; t !== null; ) t.alternate !== null && (s = t), t = t.sibling;
        s === null ? e.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = e.tail;
        for (var a = null; s !== null; ) s.alternate !== null && (a = s), s = s.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
    }
  }
  function dt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, s = 0, a = 0;
    if (t) for (var u = e.child; u !== null; ) s |= u.lanes | u.childLanes, a |= u.subtreeFlags & 14680064, a |= u.flags & 14680064, u.return = e, u = u.sibling;
    else for (u = e.child; u !== null; ) s |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= a, e.childLanes = s, t;
  }
  function Xv(e, t, s) {
    var a = t.pendingProps;
    switch (el(t), t.tag) {
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
        return dt(t), null;
      case 1:
        return kt(t.type) && Ys(), dt(t), null;
      case 3:
        return a = t.stateNode, Yr(), je(Tt), je(ct), hl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Js(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yt !== null && ($l(Yt), Yt = null))), Ol(e, t), dt(t), null;
      case 5:
        fl(t);
        var u = or(Wi.current);
        if (s = t.type, e !== null && t.stateNode != null) Qd(e, t, s, a, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return dt(t), null;
          }
          if (e = or(ln.current), Js(t)) {
            a = t.stateNode, s = t.type;
            var d = t.memoizedProps;
            switch (a[an] = t, a[bi] = d, e = (t.mode & 1) !== 0, s) {
              case "dialog":
                Le("cancel", a), Le("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Li.length; u++) Le(Li[u], a);
                break;
              case "source":
                Le("error", a);
                break;
              case "img":
              case "image":
              case "link":
                Le(
                  "error",
                  a
                ), Le("load", a);
                break;
              case "details":
                Le("toggle", a);
                break;
              case "input":
                yi(a, d), Le("invalid", a);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple }, Le("invalid", a);
                break;
              case "textarea":
                ee(a, d), Le("invalid", a);
            }
            Ar(s, d), u = null;
            for (var y in d) if (d.hasOwnProperty(y)) {
              var w = d[y];
              y === "children" ? typeof w == "string" ? a.textContent !== w && (d.suppressHydrationWarning !== !0 && Hs(a.textContent, w, e), u = ["children", w]) : typeof w == "number" && a.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && Hs(
                a.textContent,
                w,
                e
              ), u = ["children", "" + w]) : l.hasOwnProperty(y) && w != null && y === "onScroll" && Le("scroll", a);
            }
            switch (s) {
              case "input":
                Tr(a), da(a, d, !0);
                break;
              case "textarea":
                Tr(a), $(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (a.onclick = Ks);
            }
            a = u, t.updateQueue = a, a !== null && (t.flags |= 4);
          } else {
            y = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = le(s)), e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = y.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = y.createElement(s, { is: a.is }) : (e = y.createElement(s), s === "select" && (y = e, a.multiple ? y.multiple = !0 : a.size && (y.size = a.size))) : e = y.createElementNS(e, s), e[an] = t, e[bi] = a, Yd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (y = vi(s, a), s) {
                case "dialog":
                  Le("cancel", e), Le("close", e), u = a;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", e), u = a;
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Li.length; u++) Le(Li[u], e);
                  u = a;
                  break;
                case "source":
                  Le("error", e), u = a;
                  break;
                case "img":
                case "image":
                case "link":
                  Le(
                    "error",
                    e
                  ), Le("load", e), u = a;
                  break;
                case "details":
                  Le("toggle", e), u = a;
                  break;
                case "input":
                  yi(e, a), u = Er(e, a), Le("invalid", e);
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!a.multiple }, u = K({}, a, { value: void 0 }), Le("invalid", e);
                  break;
                case "textarea":
                  ee(e, a), u = M(e, a), Le("invalid", e);
                  break;
                default:
                  u = a;
              }
              Ar(s, u), w = u;
              for (d in w) if (w.hasOwnProperty(d)) {
                var T = w[d];
                d === "style" ? _r(e, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && mt(e, T)) : d === "children" ? typeof T == "string" ? (s !== "textarea" || T !== "") && sn(e, T) : typeof T == "number" && sn(e, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (l.hasOwnProperty(d) ? T != null && d === "onScroll" && Le("scroll", e) : T != null && j(e, d, T, y));
              }
              switch (s) {
                case "input":
                  Tr(e), da(e, a, !1);
                  break;
                case "textarea":
                  Tr(e), $(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + _e(a.value));
                  break;
                case "select":
                  e.multiple = !!a.multiple, d = a.value, d != null ? A(e, !!a.multiple, d, !1) : a.defaultValue != null && A(
                    e,
                    !!a.multiple,
                    a.defaultValue,
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
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return dt(t), null;
      case 6:
        if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (s = or(Wi.current), or(ln.current), Js(t)) {
            if (a = t.stateNode, s = t.memoizedProps, a[an] = t, (d = a.nodeValue !== s) && (e = Rt, e !== null)) switch (e.tag) {
              case 3:
                Hs(a.nodeValue, s, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hs(a.nodeValue, s, (e.mode & 1) !== 0);
            }
            d && (t.flags |= 4);
          } else a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a), a[an] = t, t.stateNode = a;
        }
        return dt(t), null;
      case 13:
        if (je(ze), a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ie && Mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Jf(), Wr(), t.flags |= 98560, d = !1;
          else if (d = Js(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[an] = t;
            } else Wr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dt(t), d = !1;
          } else Yt !== null && ($l(Yt), Yt = null), d = !0;
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = s, t) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ze.current & 1) !== 0 ? et === 0 && (et = 3) : Kl())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
      case 4:
        return Yr(), Ol(e, t), e === null && ji(t.stateNode.containerInfo), dt(t), null;
      case 10:
        return ol(t.type._context), dt(t), null;
      case 17:
        return kt(t.type) && Ys(), dt(t), null;
      case 19:
        if (je(ze), d = t.memoizedState, d === null) return dt(t), null;
        if (a = (t.flags & 128) !== 0, y = d.rendering, y === null) if (a) Qi(d, !1);
        else {
          if (et !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (y = so(e), y !== null) {
              for (t.flags |= 128, Qi(d, !1), a = y.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = s, s = t.child; s !== null; ) d = s, e = a, d.flags &= 14680066, y = d.alternate, y === null ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = y.childLanes, d.lanes = y.lanes, d.child = y.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = y.memoizedProps, d.memoizedState = y.memoizedState, d.updateQueue = y.updateQueue, d.type = y.type, e = y.dependencies, d.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), s = s.sibling;
              return Ne(ze, ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          d.tail !== null && Ke() > Zr && (t.flags |= 128, a = !0, Qi(d, !1), t.lanes = 4194304);
        }
        else {
          if (!a) if (e = so(y), e !== null) {
            if (t.flags |= 128, a = !0, s = e.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), Qi(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !Ie) return dt(t), null;
          } else 2 * Ke() - d.renderingStartTime > Zr && s !== 1073741824 && (t.flags |= 128, a = !0, Qi(d, !1), t.lanes = 4194304);
          d.isBackwards ? (y.sibling = t.child, t.child = y) : (s = d.last, s !== null ? s.sibling = y : t.child = y, d.last = y);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Ke(), t.sibling = null, s = ze.current, Ne(ze, a ? s & 1 | 2 : s & 1), t) : (dt(t), null);
      case 22:
      case 23:
        return Hl(), a = t.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (t.flags |= 8192), a && (t.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function qv(e, t) {
    switch (el(t), t.tag) {
      case 1:
        return kt(t.type) && Ys(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yr(), je(Tt), je(ct), hl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return fl(t), null;
      case 13:
        if (je(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Wr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return je(ze), null;
      case 4:
        return Yr(), null;
      case 10:
        return ol(t.type._context), null;
      case 22:
      case 23:
        return Hl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mo = !1, ht = !1, Zv = typeof WeakSet == "function" ? WeakSet : Set, re = null;
  function Xr(e, t) {
    var s = e.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (a) {
      $e(e, t, a);
    }
    else s.current = null;
  }
  function Rl(e, t, s) {
    try {
      s();
    } catch (a) {
      $e(e, t, a);
    }
  }
  var qd = !1;
  function Jv(e, t) {
    if (Ha = Ms, e = Df(), ja(e)) {
      if ("selectionStart" in e) var s = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        s = (s = e.ownerDocument) && s.defaultView || window;
        var a = s.getSelection && s.getSelection();
        if (a && a.rangeCount !== 0) {
          s = a.anchorNode;
          var u = a.anchorOffset, d = a.focusNode;
          a = a.focusOffset;
          try {
            s.nodeType, d.nodeType;
          } catch {
            s = null;
            break e;
          }
          var y = 0, w = -1, T = -1, V = 0, B = 0, U = e, z = null;
          t: for (; ; ) {
            for (var ne; U !== s || u !== 0 && U.nodeType !== 3 || (w = y + u), U !== d || a !== 0 && U.nodeType !== 3 || (T = y + a), U.nodeType === 3 && (y += U.nodeValue.length), (ne = U.firstChild) !== null; )
              z = U, U = ne;
            for (; ; ) {
              if (U === e) break t;
              if (z === s && ++V === u && (w = y), z === d && ++B === a && (T = y), (ne = U.nextSibling) !== null) break;
              U = z, z = U.parentNode;
            }
            U = ne;
          }
          s = w === -1 || T === -1 ? null : { start: w, end: T };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Ka = { focusedElem: e, selectionRange: s }, Ms = !1, re = t; re !== null; ) if (t = re, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, re = e;
    else for (; re !== null; ) {
      t = re;
      try {
        var se = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (se !== null) {
              var oe = se.memoizedProps, Ge = se.memoizedState, P = t.stateNode, k = P.getSnapshotBeforeUpdate(t.elementType === t.type ? oe : Qt(t.type, oe), Ge);
              P.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var D = t.stateNode.containerInfo;
            D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
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
        e.return = t.return, re = e;
        break;
      }
      re = t.return;
    }
    return se = qd, qd = !1, se;
  }
  function Xi(e, t, s) {
    var a = t.updateQueue;
    if (a = a !== null ? a.lastEffect : null, a !== null) {
      var u = a = a.next;
      do {
        if ((u.tag & e) === e) {
          var d = u.destroy;
          u.destroy = void 0, d !== void 0 && Rl(t, s, d);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function yo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var s = t = t.next;
      do {
        if ((s.tag & e) === e) {
          var a = s.create;
          s.destroy = a();
        }
        s = s.next;
      } while (s !== t);
    }
  }
  function Ml(e) {
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
  function Zd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[an], delete t[bi], delete t[Xa], delete t[Nv], delete t[Lv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Jd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function eh(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Jd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Nl(e, t, s) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? s.nodeType === 8 ? s.parentNode.insertBefore(e, t) : s.insertBefore(e, t) : (s.nodeType === 8 ? (t = s.parentNode, t.insertBefore(e, s)) : (t = s, t.appendChild(e)), s = s._reactRootContainer, s != null || t.onclick !== null || (t.onclick = Ks));
    else if (a !== 4 && (e = e.child, e !== null)) for (Nl(e, t, s), e = e.sibling; e !== null; ) Nl(e, t, s), e = e.sibling;
  }
  function Ll(e, t, s) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? s.insertBefore(e, t) : s.appendChild(e);
    else if (a !== 4 && (e = e.child, e !== null)) for (Ll(e, t, s), e = e.sibling; e !== null; ) Ll(e, t, s), e = e.sibling;
  }
  var at = null, Xt = !1;
  function zn(e, t, s) {
    for (s = s.child; s !== null; ) th(e, t, s), s = s.sibling;
  }
  function th(e, t, s) {
    if (on && typeof on.onCommitFiberUnmount == "function") try {
      on.onCommitFiberUnmount(As, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        ht || Xr(s, t);
      case 6:
        var a = at, u = Xt;
        at = null, zn(e, t, s), at = a, Xt = u, at !== null && (Xt ? (e = at, s = s.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : at.removeChild(s.stateNode));
        break;
      case 18:
        at !== null && (Xt ? (e = at, s = s.stateNode, e.nodeType === 8 ? Qa(e.parentNode, s) : e.nodeType === 1 && Qa(e, s), Ai(e)) : Qa(at, s.stateNode));
        break;
      case 4:
        a = at, u = Xt, at = s.stateNode.containerInfo, Xt = !0, zn(e, t, s), at = a, Xt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ht && (a = s.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
          u = a = a.next;
          do {
            var d = u, y = d.destroy;
            d = d.tag, y !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Rl(s, t, y), u = u.next;
          } while (u !== a);
        }
        zn(e, t, s);
        break;
      case 1:
        if (!ht && (Xr(s, t), a = s.stateNode, typeof a.componentWillUnmount == "function")) try {
          a.props = s.memoizedProps, a.state = s.memoizedState, a.componentWillUnmount();
        } catch (w) {
          $e(s, t, w);
        }
        zn(e, t, s);
        break;
      case 21:
        zn(e, t, s);
        break;
      case 22:
        s.mode & 1 ? (ht = (a = ht) || s.memoizedState !== null, zn(e, t, s), ht = a) : zn(e, t, s);
        break;
      default:
        zn(e, t, s);
    }
  }
  function nh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new Zv()), t.forEach(function(a) {
        var u = l0.bind(null, e, a);
        s.has(a) || (s.add(a), a.then(u, u));
      });
    }
  }
  function qt(e, t) {
    var s = t.deletions;
    if (s !== null) for (var a = 0; a < s.length; a++) {
      var u = s[a];
      try {
        var d = e, y = t, w = y;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              at = w.stateNode, Xt = !1;
              break e;
            case 3:
              at = w.stateNode.containerInfo, Xt = !0;
              break e;
            case 4:
              at = w.stateNode.containerInfo, Xt = !0;
              break e;
          }
          w = w.return;
        }
        if (at === null) throw Error(i(160));
        th(d, y, u), at = null, Xt = !1;
        var T = u.alternate;
        T !== null && (T.return = null), u.return = null;
      } catch (V) {
        $e(u, t, V);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) rh(t, e), t = t.sibling;
  }
  function rh(e, t) {
    var s = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (qt(t, e), cn(e), a & 4) {
          try {
            Xi(3, e, e.return), yo(3, e);
          } catch (oe) {
            $e(e, e.return, oe);
          }
          try {
            Xi(5, e, e.return);
          } catch (oe) {
            $e(e, e.return, oe);
          }
        }
        break;
      case 1:
        qt(t, e), cn(e), a & 512 && s !== null && Xr(s, s.return);
        break;
      case 5:
        if (qt(t, e), cn(e), a & 512 && s !== null && Xr(s, s.return), e.flags & 32) {
          var u = e.stateNode;
          try {
            sn(u, "");
          } catch (oe) {
            $e(e, e.return, oe);
          }
        }
        if (a & 4 && (u = e.stateNode, u != null)) {
          var d = e.memoizedProps, y = s !== null ? s.memoizedProps : d, w = e.type, T = e.updateQueue;
          if (e.updateQueue = null, T !== null) try {
            w === "input" && d.type === "radio" && d.name != null && Es(u, d), vi(w, y);
            var V = vi(w, d);
            for (y = 0; y < T.length; y += 2) {
              var B = T[y], U = T[y + 1];
              B === "style" ? _r(u, U) : B === "dangerouslySetInnerHTML" ? mt(u, U) : B === "children" ? sn(u, U) : j(u, B, U, V);
            }
            switch (w) {
              case "input":
                gi(u, d);
                break;
              case "textarea":
                G(u, d);
                break;
              case "select":
                var z = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!d.multiple;
                var ne = d.value;
                ne != null ? A(u, !!d.multiple, ne, !1) : z !== !!d.multiple && (d.defaultValue != null ? A(
                  u,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : A(u, !!d.multiple, d.multiple ? [] : "", !1));
            }
            u[bi] = d;
          } catch (oe) {
            $e(e, e.return, oe);
          }
        }
        break;
      case 6:
        if (qt(t, e), cn(e), a & 4) {
          if (e.stateNode === null) throw Error(i(162));
          u = e.stateNode, d = e.memoizedProps;
          try {
            u.nodeValue = d;
          } catch (oe) {
            $e(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (qt(t, e), cn(e), a & 4 && s !== null && s.memoizedState.isDehydrated) try {
          Ai(t.containerInfo);
        } catch (oe) {
          $e(e, e.return, oe);
        }
        break;
      case 4:
        qt(t, e), cn(e);
        break;
      case 13:
        qt(t, e), cn(e), u = e.child, u.flags & 8192 && (d = u.memoizedState !== null, u.stateNode.isHidden = d, !d || u.alternate !== null && u.alternate.memoizedState !== null || (bl = Ke())), a & 4 && nh(e);
        break;
      case 22:
        if (B = s !== null && s.memoizedState !== null, e.mode & 1 ? (ht = (V = ht) || B, qt(t, e), ht = V) : qt(t, e), cn(e), a & 8192) {
          if (V = e.memoizedState !== null, (e.stateNode.isHidden = V) && !B && (e.mode & 1) !== 0) for (re = e, B = e.child; B !== null; ) {
            for (U = re = B; re !== null; ) {
              switch (z = re, ne = z.child, z.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xi(4, z, z.return);
                  break;
                case 1:
                  Xr(z, z.return);
                  var se = z.stateNode;
                  if (typeof se.componentWillUnmount == "function") {
                    a = z, s = z.return;
                    try {
                      t = a, se.props = t.memoizedProps, se.state = t.memoizedState, se.componentWillUnmount();
                    } catch (oe) {
                      $e(a, s, oe);
                    }
                  }
                  break;
                case 5:
                  Xr(z, z.return);
                  break;
                case 22:
                  if (z.memoizedState !== null) {
                    oh(U);
                    continue;
                  }
              }
              ne !== null ? (ne.return = z, re = ne) : oh(U);
            }
            B = B.sibling;
          }
          e: for (B = null, U = e; ; ) {
            if (U.tag === 5) {
              if (B === null) {
                B = U;
                try {
                  u = U.stateNode, V ? (d = u.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = U.stateNode, T = U.memoizedProps.style, y = T != null && T.hasOwnProperty("display") ? T.display : null, w.style.display = Pr("display", y));
                } catch (oe) {
                  $e(e, e.return, oe);
                }
              }
            } else if (U.tag === 6) {
              if (B === null) try {
                U.stateNode.nodeValue = V ? "" : U.memoizedProps;
              } catch (oe) {
                $e(e, e.return, oe);
              }
            } else if ((U.tag !== 22 && U.tag !== 23 || U.memoizedState === null || U === e) && U.child !== null) {
              U.child.return = U, U = U.child;
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              B === U && (B = null), U = U.return;
            }
            B === U && (B = null), U.sibling.return = U.return, U = U.sibling;
          }
        }
        break;
      case 19:
        qt(t, e), cn(e), a & 4 && nh(e);
        break;
      case 21:
        break;
      default:
        qt(
          t,
          e
        ), cn(e);
    }
  }
  function cn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (Jd(s)) {
              var a = s;
              break e;
            }
            s = s.return;
          }
          throw Error(i(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (sn(u, ""), a.flags &= -33);
            var d = eh(e);
            Ll(e, d, u);
            break;
          case 3:
          case 4:
            var y = a.stateNode.containerInfo, w = eh(e);
            Nl(e, w, y);
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
  function e0(e, t, s) {
    re = e, ih(e);
  }
  function ih(e, t, s) {
    for (var a = (e.mode & 1) !== 0; re !== null; ) {
      var u = re, d = u.child;
      if (u.tag === 22 && a) {
        var y = u.memoizedState !== null || mo;
        if (!y) {
          var w = u.alternate, T = w !== null && w.memoizedState !== null || ht;
          w = mo;
          var V = ht;
          if (mo = y, (ht = T) && !V) for (re = u; re !== null; ) y = re, T = y.child, y.tag === 22 && y.memoizedState !== null ? ah(u) : T !== null ? (T.return = y, re = T) : ah(u);
          for (; d !== null; ) re = d, ih(d), d = d.sibling;
          re = u, mo = w, ht = V;
        }
        sh(e);
      } else (u.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = u, re = d) : sh(e);
    }
  }
  function sh(e) {
    for (; re !== null; ) {
      var t = re;
      if ((t.flags & 8772) !== 0) {
        var s = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || yo(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !ht) if (s === null) a.componentDidMount();
              else {
                var u = t.elementType === t.type ? s.memoizedProps : Qt(t.type, s.memoizedProps);
                a.componentDidUpdate(u, s.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
              }
              var d = t.updateQueue;
              d !== null && od(t, d, a);
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
                od(t, y, s);
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
                var V = t.alternate;
                if (V !== null) {
                  var B = V.memoizedState;
                  if (B !== null) {
                    var U = B.dehydrated;
                    U !== null && Ai(U);
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
          ht || t.flags & 512 && Ml(t);
        } catch (z) {
          $e(t, t.return, z);
        }
      }
      if (t === e) {
        re = null;
        break;
      }
      if (s = t.sibling, s !== null) {
        s.return = t.return, re = s;
        break;
      }
      re = t.return;
    }
  }
  function oh(e) {
    for (; re !== null; ) {
      var t = re;
      if (t === e) {
        re = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        s.return = t.return, re = s;
        break;
      }
      re = t.return;
    }
  }
  function ah(e) {
    for (; re !== null; ) {
      var t = re;
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
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (T) {
                $e(t, u, T);
              }
            }
            var d = t.return;
            try {
              Ml(t);
            } catch (T) {
              $e(t, d, T);
            }
            break;
          case 5:
            var y = t.return;
            try {
              Ml(t);
            } catch (T) {
              $e(t, y, T);
            }
        }
      } catch (T) {
        $e(t, t.return, T);
      }
      if (t === e) {
        re = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        w.return = t.return, re = w;
        break;
      }
      re = t.return;
    }
  }
  var t0 = Math.ceil, go = H.ReactCurrentDispatcher, jl = H.ReactCurrentOwner, Bt = H.ReactCurrentBatchConfig, Ce = 0, rt = null, Qe = null, lt = 0, Nt = 0, qr = Nn(0), et = 0, qi = null, lr = 0, vo = 0, Il = 0, Zi = null, Ct = null, bl = 0, Zr = 1 / 0, Tn = null, xo = !1, zl = null, Bn = null, wo = !1, Un = null, So = 0, Ji = 0, Bl = null, To = -1, ko = 0;
  function gt() {
    return (Ce & 6) !== 0 ? Ke() : To !== -1 ? To : To = Ke();
  }
  function $n(e) {
    return (e.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && lt !== 0 ? lt & -lt : Iv.transition !== null ? (ko === 0 && (ko = Jc()), ko) : (e = Oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : uf(e.type)), e);
  }
  function Zt(e, t, s, a) {
    if (50 < Ji) throw Ji = 0, Bl = null, Error(i(185));
    ki(e, s, a), ((Ce & 2) === 0 || e !== rt) && (e === rt && ((Ce & 2) === 0 && (vo |= s), et === 4 && Wn(e, lt)), Pt(e, a), s === 1 && Ce === 0 && (t.mode & 1) === 0 && (Zr = Ke() + 500, Xs && jn()));
  }
  function Pt(e, t) {
    var s = e.callbackNode;
    Ig(e, t);
    var a = Fs(e, e === rt ? lt : 0);
    if (a === 0) s !== null && Xc(s), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = a & -a, e.callbackPriority !== t) {
      if (s != null && Xc(s), t === 1) e.tag === 0 ? jv(uh.bind(null, e)) : Yf(uh.bind(null, e)), Rv(function() {
        (Ce & 6) === 0 && jn();
      }), s = null;
      else {
        switch (ef(a)) {
          case 1:
            s = wa;
            break;
          case 4:
            s = qc;
            break;
          case 16:
            s = _s;
            break;
          case 536870912:
            s = Zc;
            break;
          default:
            s = _s;
        }
        s = gh(s, lh.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = s;
    }
  }
  function lh(e, t) {
    if (To = -1, ko = 0, (Ce & 6) !== 0) throw Error(i(327));
    var s = e.callbackNode;
    if (Jr() && e.callbackNode !== s) return null;
    var a = Fs(e, e === rt ? lt : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = Eo(e, a);
    else {
      t = a;
      var u = Ce;
      Ce |= 2;
      var d = fh();
      (rt !== e || lt !== t) && (Tn = null, Zr = Ke() + 500, cr(e, t));
      do
        try {
          i0();
          break;
        } catch (w) {
          ch(e, w);
        }
      while (!0);
      sl(), go.current = d, Ce = u, Qe !== null ? t = 0 : (rt = null, lt = 0, t = et);
    }
    if (t !== 0) {
      if (t === 2 && (u = Sa(e), u !== 0 && (a = u, t = Ul(e, u))), t === 1) throw s = qi, cr(e, 0), Wn(e, a), Pt(e, Ke()), s;
      if (t === 6) Wn(e, a);
      else {
        if (u = e.current.alternate, (a & 30) === 0 && !n0(u) && (t = Eo(e, a), t === 2 && (d = Sa(e), d !== 0 && (a = d, t = Ul(e, d))), t === 1)) throw s = qi, cr(e, 0), Wn(e, a), Pt(e, Ke()), s;
        switch (e.finishedWork = u, e.finishedLanes = a, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            fr(e, Ct, Tn);
            break;
          case 3:
            if (Wn(e, a), (a & 130023424) === a && (t = bl + 500 - Ke(), 10 < t)) {
              if (Fs(e, 0) !== 0) break;
              if (u = e.suspendedLanes, (u & a) !== a) {
                gt(), e.pingedLanes |= e.suspendedLanes & u;
                break;
              }
              e.timeoutHandle = Ya(fr.bind(null, e, Ct, Tn), t);
              break;
            }
            fr(e, Ct, Tn);
            break;
          case 4:
            if (Wn(e, a), (a & 4194240) === a) break;
            for (t = e.eventTimes, u = -1; 0 < a; ) {
              var y = 31 - Kt(a);
              d = 1 << y, y = t[y], y > u && (u = y), a &= ~d;
            }
            if (a = u, a = Ke() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * t0(a / 1960)) - a, 10 < a) {
              e.timeoutHandle = Ya(fr.bind(null, e, Ct, Tn), a);
              break;
            }
            fr(e, Ct, Tn);
            break;
          case 5:
            fr(e, Ct, Tn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Pt(e, Ke()), e.callbackNode === s ? lh.bind(null, e) : null;
  }
  function Ul(e, t) {
    var s = Zi;
    return e.current.memoizedState.isDehydrated && (cr(e, t).flags |= 256), e = Eo(e, t), e !== 2 && (t = Ct, Ct = s, t !== null && $l(t)), e;
  }
  function $l(e) {
    Ct === null ? Ct = e : Ct.push.apply(Ct, e);
  }
  function n0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var s = t.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var a = 0; a < s.length; a++) {
          var u = s[a], d = u.getSnapshot;
          u = u.value;
          try {
            if (!Gt(d(), u)) return !1;
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
  function Wn(e, t) {
    for (t &= ~Il, t &= ~vo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var s = 31 - Kt(t), a = 1 << s;
      e[s] = -1, t &= ~a;
    }
  }
  function uh(e) {
    if ((Ce & 6) !== 0) throw Error(i(327));
    Jr();
    var t = Fs(e, 0);
    if ((t & 1) === 0) return Pt(e, Ke()), null;
    var s = Eo(e, t);
    if (e.tag !== 0 && s === 2) {
      var a = Sa(e);
      a !== 0 && (t = a, s = Ul(e, a));
    }
    if (s === 1) throw s = qi, cr(e, 0), Wn(e, t), Pt(e, Ke()), s;
    if (s === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, fr(e, Ct, Tn), Pt(e, Ke()), null;
  }
  function Wl(e, t) {
    var s = Ce;
    Ce |= 1;
    try {
      return e(t);
    } finally {
      Ce = s, Ce === 0 && (Zr = Ke() + 500, Xs && jn());
    }
  }
  function ur(e) {
    Un !== null && Un.tag === 0 && (Ce & 6) === 0 && Jr();
    var t = Ce;
    Ce |= 1;
    var s = Bt.transition, a = Oe;
    try {
      if (Bt.transition = null, Oe = 1, e) return e();
    } finally {
      Oe = a, Bt.transition = s, Ce = t, (Ce & 6) === 0 && jn();
    }
  }
  function Hl() {
    Nt = qr.current, je(qr);
  }
  function cr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var s = e.timeoutHandle;
    if (s !== -1 && (e.timeoutHandle = -1, Ov(s)), Qe !== null) for (s = Qe.return; s !== null; ) {
      var a = s;
      switch (el(a), a.tag) {
        case 1:
          a = a.type.childContextTypes, a != null && Ys();
          break;
        case 3:
          Yr(), je(Tt), je(ct), hl();
          break;
        case 5:
          fl(a);
          break;
        case 4:
          Yr();
          break;
        case 13:
          je(ze);
          break;
        case 19:
          je(ze);
          break;
        case 10:
          ol(a.type._context);
          break;
        case 22:
        case 23:
          Hl();
      }
      s = s.return;
    }
    if (rt = e, Qe = e = Hn(e.current, null), lt = Nt = t, et = 0, qi = null, Il = vo = lr = 0, Ct = Zi = null, sr !== null) {
      for (t = 0; t < sr.length; t++) if (s = sr[t], a = s.interleaved, a !== null) {
        s.interleaved = null;
        var u = a.next, d = s.pending;
        if (d !== null) {
          var y = d.next;
          d.next = u, a.next = y;
        }
        s.pending = a;
      }
      sr = null;
    }
    return e;
  }
  function ch(e, t) {
    do {
      var s = Qe;
      try {
        if (sl(), oo.current = co, ao) {
          for (var a = Be.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), a = a.next;
          }
          ao = !1;
        }
        if (ar = 0, nt = Je = Be = null, Hi = !1, Ki = 0, jl.current = null, s === null || s.return === null) {
          et = 1, qi = t, Qe = null;
          break;
        }
        e: {
          var d = e, y = s.return, w = s, T = t;
          if (t = lt, w.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var V = T, B = w, U = B.tag;
            if ((B.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var z = B.alternate;
              z ? (B.updateQueue = z.updateQueue, B.memoizedState = z.memoizedState, B.lanes = z.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var ne = Nd(y);
            if (ne !== null) {
              ne.flags &= -257, Ld(ne, y, w, d, t), ne.mode & 1 && Md(d, V, t), t = ne, T = V;
              var se = t.updateQueue;
              if (se === null) {
                var oe = /* @__PURE__ */ new Set();
                oe.add(T), t.updateQueue = oe;
              } else se.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                Md(d, V, t), Kl();
                break e;
              }
              T = Error(i(426));
            }
          } else if (Ie && w.mode & 1) {
            var Ge = Nd(y);
            if (Ge !== null) {
              (Ge.flags & 65536) === 0 && (Ge.flags |= 256), Ld(Ge, y, w, d, t), rl(Qr(T, w));
              break e;
            }
          }
          d = T = Qr(T, w), et !== 4 && (et = 2), Zi === null ? Zi = [d] : Zi.push(d), d = y;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, t &= -t, d.lanes |= t;
                var P = Od(d, T, t);
                sd(d, P);
                break e;
              case 1:
                w = T;
                var k = d.type, D = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (Bn === null || !Bn.has(D)))) {
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var W = Rd(d, w, t);
                  sd(d, W);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        hh(s);
      } catch (ae) {
        t = ae, Qe === s && s !== null && (Qe = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fh() {
    var e = go.current;
    return go.current = co, e === null ? co : e;
  }
  function Kl() {
    (et === 0 || et === 3 || et === 2) && (et = 4), rt === null || (lr & 268435455) === 0 && (vo & 268435455) === 0 || Wn(rt, lt);
  }
  function Eo(e, t) {
    var s = Ce;
    Ce |= 2;
    var a = fh();
    (rt !== e || lt !== t) && (Tn = null, cr(e, t));
    do
      try {
        r0();
        break;
      } catch (u) {
        ch(e, u);
      }
    while (!0);
    if (sl(), Ce = s, go.current = a, Qe !== null) throw Error(i(261));
    return rt = null, lt = 0, et;
  }
  function r0() {
    for (; Qe !== null; ) dh(Qe);
  }
  function i0() {
    for (; Qe !== null && !Dg(); ) dh(Qe);
  }
  function dh(e) {
    var t = yh(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? hh(e) : Qe = t, jl.current = null;
  }
  function hh(e) {
    var t = e;
    do {
      var s = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (s = Xv(s, t, Nt), s !== null) {
          Qe = s;
          return;
        }
      } else {
        if (s = qv(s, t), s !== null) {
          s.flags &= 32767, Qe = s;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          et = 6, Qe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Qe = t;
        return;
      }
      Qe = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function fr(e, t, s) {
    var a = Oe, u = Bt.transition;
    try {
      Bt.transition = null, Oe = 1, s0(e, t, s, a);
    } finally {
      Bt.transition = u, Oe = a;
    }
    return null;
  }
  function s0(e, t, s, a) {
    do
      Jr();
    while (Un !== null);
    if ((Ce & 6) !== 0) throw Error(i(327));
    s = e.finishedWork;
    var u = e.finishedLanes;
    if (s === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, s === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var d = s.lanes | s.childLanes;
    if (bg(e, d), e === rt && (Qe = rt = null, lt = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || wo || (wo = !0, gh(_s, function() {
      return Jr(), null;
    })), d = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || d) {
      d = Bt.transition, Bt.transition = null;
      var y = Oe;
      Oe = 1;
      var w = Ce;
      Ce |= 4, jl.current = null, Jv(e, s), rh(s, e), Cv(Ka), Ms = !!Ha, Ka = Ha = null, e.current = s, e0(s), Vg(), Ce = w, Oe = y, Bt.transition = d;
    } else e.current = s;
    if (wo && (wo = !1, Un = e, So = u), d = e.pendingLanes, d === 0 && (Bn = null), Rg(s.stateNode), Pt(e, Ke()), t !== null) for (a = e.onRecoverableError, s = 0; s < t.length; s++) u = t[s], a(u.value, { componentStack: u.stack, digest: u.digest });
    if (xo) throw xo = !1, e = zl, zl = null, e;
    return (So & 1) !== 0 && e.tag !== 0 && Jr(), d = e.pendingLanes, (d & 1) !== 0 ? e === Bl ? Ji++ : (Ji = 0, Bl = e) : Ji = 0, jn(), null;
  }
  function Jr() {
    if (Un !== null) {
      var e = ef(So), t = Bt.transition, s = Oe;
      try {
        if (Bt.transition = null, Oe = 16 > e ? 16 : e, Un === null) var a = !1;
        else {
          if (e = Un, Un = null, So = 0, (Ce & 6) !== 0) throw Error(i(331));
          var u = Ce;
          for (Ce |= 4, re = e.current; re !== null; ) {
            var d = re, y = d.child;
            if ((re.flags & 16) !== 0) {
              var w = d.deletions;
              if (w !== null) {
                for (var T = 0; T < w.length; T++) {
                  var V = w[T];
                  for (re = V; re !== null; ) {
                    var B = re;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xi(8, B, d);
                    }
                    var U = B.child;
                    if (U !== null) U.return = B, re = U;
                    else for (; re !== null; ) {
                      B = re;
                      var z = B.sibling, ne = B.return;
                      if (Zd(B), B === V) {
                        re = null;
                        break;
                      }
                      if (z !== null) {
                        z.return = ne, re = z;
                        break;
                      }
                      re = ne;
                    }
                  }
                }
                var se = d.alternate;
                if (se !== null) {
                  var oe = se.child;
                  if (oe !== null) {
                    se.child = null;
                    do {
                      var Ge = oe.sibling;
                      oe.sibling = null, oe = Ge;
                    } while (oe !== null);
                  }
                }
                re = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && y !== null) y.return = d, re = y;
            else e: for (; re !== null; ) {
              if (d = re, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Xi(9, d, d.return);
              }
              var P = d.sibling;
              if (P !== null) {
                P.return = d.return, re = P;
                break e;
              }
              re = d.return;
            }
          }
          var k = e.current;
          for (re = k; re !== null; ) {
            y = re;
            var D = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && D !== null) D.return = y, re = D;
            else e: for (y = k; re !== null; ) {
              if (w = re, (w.flags & 2048) !== 0) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yo(9, w);
                }
              } catch (ae) {
                $e(w, w.return, ae);
              }
              if (w === y) {
                re = null;
                break e;
              }
              var W = w.sibling;
              if (W !== null) {
                W.return = w.return, re = W;
                break e;
              }
              re = w.return;
            }
          }
          if (Ce = u, jn(), on && typeof on.onPostCommitFiberRoot == "function") try {
            on.onPostCommitFiberRoot(As, e);
          } catch {
          }
          a = !0;
        }
        return a;
      } finally {
        Oe = s, Bt.transition = t;
      }
    }
    return !1;
  }
  function ph(e, t, s) {
    t = Qr(s, t), t = Od(e, t, 1), e = bn(e, t, 1), t = gt(), e !== null && (ki(e, 1, t), Pt(e, t));
  }
  function $e(e, t, s) {
    if (e.tag === 3) ph(e, e, s);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ph(t, e, s);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Bn === null || !Bn.has(a))) {
          e = Qr(s, e), e = Rd(t, e, 1), t = bn(t, e, 1), e = gt(), t !== null && (ki(t, 1, e), Pt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function o0(e, t, s) {
    var a = e.pingCache;
    a !== null && a.delete(t), t = gt(), e.pingedLanes |= e.suspendedLanes & s, rt === e && (lt & s) === s && (et === 4 || et === 3 && (lt & 130023424) === lt && 500 > Ke() - bl ? cr(e, 0) : Il |= s), Pt(e, t);
  }
  function mh(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Vs, Vs <<= 1, (Vs & 130023424) === 0 && (Vs = 4194304)));
    var s = gt();
    e = xn(e, t), e !== null && (ki(e, t, s), Pt(e, s));
  }
  function a0(e) {
    var t = e.memoizedState, s = 0;
    t !== null && (s = t.retryLane), mh(e, s);
  }
  function l0(e, t) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, u = e.memoizedState;
        u !== null && (s = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(t), mh(e, s);
  }
  var yh;
  yh = function(e, t, s) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Tt.current) Et = !0;
    else {
      if ((e.lanes & s) === 0 && (t.flags & 128) === 0) return Et = !1, Qv(e, t, s);
      Et = (e.flags & 131072) !== 0;
    }
    else Et = !1, Ie && (t.flags & 1048576) !== 0 && Qf(t, Zs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var a = t.type;
        po(e, t), e = t.pendingProps;
        var u = Br(t, ct.current);
        Gr(t, s), u = yl(null, t, a, e, u, s);
        var d = gl();
        return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, kt(a) ? (d = !0, Qs(t)) : d = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, ul(t), u.updater = fo, t.stateNode = u, u._reactInternals = t, kl(t, a, e, s), t = _l(null, t, a, !0, d, s)) : (t.tag = 0, Ie && d && Ja(t), yt(null, t, u, s), t = t.child), t;
      case 16:
        a = t.elementType;
        e: {
          switch (po(e, t), e = t.pendingProps, u = a._init, a = u(a._payload), t.type = a, u = t.tag = c0(a), e = Qt(a, e), u) {
            case 0:
              t = Pl(null, t, a, e, s);
              break e;
            case 1:
              t = Ud(null, t, a, e, s);
              break e;
            case 11:
              t = jd(null, t, a, e, s);
              break e;
            case 14:
              t = Id(null, t, a, Qt(a.type, e), s);
              break e;
          }
          throw Error(i(
            306,
            a,
            ""
          ));
        }
        return t;
      case 0:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Qt(a, u), Pl(e, t, a, u, s);
      case 1:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Qt(a, u), Ud(e, t, a, u, s);
      case 3:
        e: {
          if ($d(t), e === null) throw Error(i(387));
          a = t.pendingProps, d = t.memoizedState, u = d.element, id(e, t), io(t, a, null, s);
          var y = t.memoizedState;
          if (a = y.element, d.isDehydrated) if (d = { element: a, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
            u = Qr(Error(i(423)), t), t = Wd(e, t, a, s, u);
            break e;
          } else if (a !== u) {
            u = Qr(Error(i(424)), t), t = Wd(e, t, a, s, u);
            break e;
          } else for (Mt = Mn(t.stateNode.containerInfo.firstChild), Rt = t, Ie = !0, Yt = null, s = nd(t, null, a, s), t.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Wr(), a === u) {
              t = Sn(e, t, s);
              break e;
            }
            yt(e, t, a, s);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ad(t), e === null && nl(t), a = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, y = u.children, Ga(a, u) ? y = null : d !== null && Ga(a, d) && (t.flags |= 32), Bd(e, t), yt(e, t, y, s), t.child;
      case 6:
        return e === null && nl(t), null;
      case 13:
        return Hd(e, t, s);
      case 4:
        return cl(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Hr(t, null, a, s) : yt(e, t, a, s), t.child;
      case 11:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Qt(a, u), jd(e, t, a, u, s);
      case 7:
        return yt(e, t, t.pendingProps, s), t.child;
      case 8:
        return yt(e, t, t.pendingProps.children, s), t.child;
      case 12:
        return yt(e, t, t.pendingProps.children, s), t.child;
      case 10:
        e: {
          if (a = t.type._context, u = t.pendingProps, d = t.memoizedProps, y = u.value, Ne(to, a._currentValue), a._currentValue = y, d !== null) if (Gt(d.value, y)) {
            if (d.children === u.children && !Tt.current) {
              t = Sn(e, t, s);
              break e;
            }
          } else for (d = t.child, d !== null && (d.return = t); d !== null; ) {
            var w = d.dependencies;
            if (w !== null) {
              y = d.child;
              for (var T = w.firstContext; T !== null; ) {
                if (T.context === a) {
                  if (d.tag === 1) {
                    T = wn(-1, s & -s), T.tag = 2;
                    var V = d.updateQueue;
                    if (V !== null) {
                      V = V.shared;
                      var B = V.pending;
                      B === null ? T.next = T : (T.next = B.next, B.next = T), V.pending = T;
                    }
                  }
                  d.lanes |= s, T = d.alternate, T !== null && (T.lanes |= s), al(
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
              y.lanes |= s, w = y.alternate, w !== null && (w.lanes |= s), al(y, s, t), y = d.sibling;
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
        return u = t.type, a = t.pendingProps.children, Gr(t, s), u = bt(u), a = a(u), t.flags |= 1, yt(e, t, a, s), t.child;
      case 14:
        return a = t.type, u = Qt(a, t.pendingProps), u = Qt(a.type, u), Id(e, t, a, u, s);
      case 15:
        return bd(e, t, t.type, t.pendingProps, s);
      case 17:
        return a = t.type, u = t.pendingProps, u = t.elementType === a ? u : Qt(a, u), po(e, t), t.tag = 1, kt(a) ? (e = !0, Qs(t)) : e = !1, Gr(t, s), Vd(t, a, u), kl(t, a, u, s), _l(null, t, a, !0, e, s);
      case 19:
        return Gd(e, t, s);
      case 22:
        return zd(e, t, s);
    }
    throw Error(i(156, t.tag));
  };
  function gh(e, t) {
    return Qc(e, t);
  }
  function u0(e, t, s, a) {
    this.tag = e, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ut(e, t, s, a) {
    return new u0(e, t, s, a);
  }
  function Gl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function c0(e) {
    if (typeof e == "function") return Gl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ue) return 11;
      if (e === De) return 14;
    }
    return 2;
  }
  function Hn(e, t) {
    var s = e.alternate;
    return s === null ? (s = Ut(e.tag, t, e.key, e.mode), s.elementType = e.elementType, s.type = e.type, s.stateNode = e.stateNode, s.alternate = e, e.alternate = s) : (s.pendingProps = t, s.type = e.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = e.flags & 14680064, s.childLanes = e.childLanes, s.lanes = e.lanes, s.child = e.child, s.memoizedProps = e.memoizedProps, s.memoizedState = e.memoizedState, s.updateQueue = e.updateQueue, t = e.dependencies, s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, s.sibling = e.sibling, s.index = e.index, s.ref = e.ref, s;
  }
  function Co(e, t, s, a, u, d) {
    var y = 2;
    if (a = e, typeof e == "function") Gl(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else e: switch (e) {
      case te:
        return dr(s.children, u, d, t);
      case J:
        y = 8, u |= 8;
        break;
      case de:
        return e = Ut(12, s, t, u | 2), e.elementType = de, e.lanes = d, e;
      case he:
        return e = Ut(13, s, t, u), e.elementType = he, e.lanes = d, e;
      case we:
        return e = Ut(19, s, t, u), e.elementType = we, e.lanes = d, e;
      case X:
        return Po(s, u, d, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            y = 10;
            break e;
          case me:
            y = 9;
            break e;
          case ue:
            y = 11;
            break e;
          case De:
            y = 14;
            break e;
          case Pe:
            y = 16, a = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Ut(y, s, t, u), t.elementType = e, t.type = a, t.lanes = d, t;
  }
  function dr(e, t, s, a) {
    return e = Ut(7, e, a, t), e.lanes = s, e;
  }
  function Po(e, t, s, a) {
    return e = Ut(22, e, a, t), e.elementType = X, e.lanes = s, e.stateNode = { isHidden: !1 }, e;
  }
  function Yl(e, t, s) {
    return e = Ut(6, e, null, t), e.lanes = s, e;
  }
  function Ql(e, t, s) {
    return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = s, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function f0(e, t, s, a, u) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ta(0), this.expirationTimes = Ta(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ta(0), this.identifierPrefix = a, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
  }
  function Xl(e, t, s, a, u, d, y, w, T) {
    return e = new f0(e, t, s, w, T), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = Ut(3, null, null, t), e.current = d, d.stateNode = e, d.memoizedState = { element: a, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ul(d), e;
  }
  function d0(e, t, s) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: s };
  }
  function vh(e) {
    if (!e) return Ln;
    e = e._reactInternals;
    e: {
      if (er(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (kt(t.type)) {
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
      if (kt(s)) return Kf(e, s, t);
    }
    return t;
  }
  function xh(e, t, s, a, u, d, y, w, T) {
    return e = Xl(s, a, !0, e, u, d, y, w, T), e.context = vh(null), s = e.current, a = gt(), u = $n(s), d = wn(a, u), d.callback = t ?? null, bn(s, d, u), e.current.lanes = u, ki(e, u, a), Pt(e, a), e;
  }
  function _o(e, t, s, a) {
    var u = t.current, d = gt(), y = $n(u);
    return s = vh(s), t.context === null ? t.context = s : t.pendingContext = s, t = wn(d, y), t.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (t.callback = a), e = bn(u, t, y), e !== null && (Zt(e, u, y, d), ro(e, u, y)), y;
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
  function wh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < t ? s : t;
    }
  }
  function ql(e, t) {
    wh(e, t), (e = e.alternate) && wh(e, t);
  }
  function h0() {
    return null;
  }
  var Sh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Zl(e) {
    this._internalRoot = e;
  }
  Do.prototype.render = Zl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    _o(e, t, null, null);
  }, Do.prototype.unmount = Zl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ur(function() {
        _o(null, e, null, null);
      }), t[mn] = null;
    }
  };
  function Do(e) {
    this._internalRoot = e;
  }
  Do.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = rf();
      e = { blockedOn: null, target: e, priority: t };
      for (var s = 0; s < Fn.length && t !== 0 && t < Fn[s].priority; s++) ;
      Fn.splice(s, 0, e), s === 0 && af(e);
    }
  };
  function Jl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Vo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Th() {
  }
  function p0(e, t, s, a, u) {
    if (u) {
      if (typeof a == "function") {
        var d = a;
        a = function() {
          var V = Ao(y);
          d.call(V);
        };
      }
      var y = xh(t, a, e, 0, null, !1, !1, "", Th);
      return e._reactRootContainer = y, e[mn] = y.current, ji(e.nodeType === 8 ? e.parentNode : e), ur(), y;
    }
    for (; u = e.lastChild; ) e.removeChild(u);
    if (typeof a == "function") {
      var w = a;
      a = function() {
        var V = Ao(T);
        w.call(V);
      };
    }
    var T = Xl(e, 0, !1, null, null, !1, !1, "", Th);
    return e._reactRootContainer = T, e[mn] = T.current, ji(e.nodeType === 8 ? e.parentNode : e), ur(function() {
      _o(t, T, s, a);
    }), T;
  }
  function Fo(e, t, s, a, u) {
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
    } else y = p0(s, t, e, u, a);
    return Ao(y);
  }
  tf = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var s = Ti(t.pendingLanes);
          s !== 0 && (ka(t, s | 1), Pt(t, Ke()), (Ce & 6) === 0 && (Zr = Ke() + 500, jn()));
        }
        break;
      case 13:
        ur(function() {
          var a = xn(e, 1);
          if (a !== null) {
            var u = gt();
            Zt(a, e, 1, u);
          }
        }), ql(e, 1);
    }
  }, Ea = function(e) {
    if (e.tag === 13) {
      var t = xn(e, 134217728);
      if (t !== null) {
        var s = gt();
        Zt(t, e, 134217728, s);
      }
      ql(e, 134217728);
    }
  }, nf = function(e) {
    if (e.tag === 13) {
      var t = $n(e), s = xn(e, t);
      if (s !== null) {
        var a = gt();
        Zt(s, e, t, a);
      }
      ql(e, t);
    }
  }, rf = function() {
    return Oe;
  }, sf = function(e, t) {
    var s = Oe;
    try {
      return Oe = e, t();
    } finally {
      Oe = s;
    }
  }, ya = function(e, t, s) {
    switch (t) {
      case "input":
        if (gi(e, s), t = s.name, s.type === "radio" && t != null) {
          for (s = e; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < s.length; t++) {
            var a = s[t];
            if (a !== e && a.form === e.form) {
              var u = Gs(a);
              if (!u) throw Error(i(90));
              mi(a), gi(a, u);
            }
          }
        }
        break;
      case "textarea":
        G(e, s);
        break;
      case "select":
        t = s.value, t != null && A(e, !!s.multiple, t, !1);
    }
  }, Uc = Wl, $c = ur;
  var m0 = { usingClientEntryPoint: !1, Events: [zi, br, Gs, zc, Bc, Wl] }, es = { findFiberByHostInstance: tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, y0 = { bundleType: es.bundleType, version: es.version, rendererPackageName: es.rendererPackageName, rendererConfig: es.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Gc(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: es.findFiberByHostInstance || h0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Oo.isDisabled && Oo.supportsFiber) try {
      As = Oo.inject(y0), on = Oo;
    } catch {
    }
  }
  return _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0, _t.createPortal = function(e, t) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jl(t)) throw Error(i(200));
    return d0(e, t, null, s);
  }, _t.createRoot = function(e, t) {
    if (!Jl(e)) throw Error(i(299));
    var s = !1, a = "", u = Sh;
    return t != null && (t.unstable_strictMode === !0 && (s = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Xl(e, 1, !1, null, null, s, !1, a, u), e[mn] = t.current, ji(e.nodeType === 8 ? e.parentNode : e), new Zl(t);
  }, _t.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Gc(t), e = e === null ? null : e.stateNode, e;
  }, _t.flushSync = function(e) {
    return ur(e);
  }, _t.hydrate = function(e, t, s) {
    if (!Vo(t)) throw Error(i(200));
    return Fo(null, e, t, !0, s);
  }, _t.hydrateRoot = function(e, t, s) {
    if (!Jl(e)) throw Error(i(405));
    var a = s != null && s.hydratedSources || null, u = !1, d = "", y = Sh;
    if (s != null && (s.unstable_strictMode === !0 && (u = !0), s.identifierPrefix !== void 0 && (d = s.identifierPrefix), s.onRecoverableError !== void 0 && (y = s.onRecoverableError)), t = xh(t, null, e, 1, s ?? null, u, !1, d, y), e[mn] = t.current, ji(e), a) for (e = 0; e < a.length; e++) s = a[e], u = s._getVersion, u = u(s._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [s, u] : t.mutableSourceEagerHydrationData.push(
      s,
      u
    );
    return new Do(t);
  }, _t.render = function(e, t, s) {
    if (!Vo(t)) throw Error(i(200));
    return Fo(null, e, t, !1, s);
  }, _t.unmountComponentAtNode = function(e) {
    if (!Vo(e)) throw Error(i(40));
    return e._reactRootContainer ? (ur(function() {
      Fo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[mn] = null;
      });
    }), !0) : !1;
  }, _t.unstable_batchedUpdates = Wl, _t.unstable_renderSubtreeIntoContainer = function(e, t, s, a) {
    if (!Vo(s)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Fo(e, t, s, !1, a);
  }, _t.version = "18.3.1-next-f1338f8080-20240426", _t;
}
var Vh;
function E0() {
  if (Vh) return nu.exports;
  Vh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), nu.exports = k0(), nu.exports;
}
var Fh;
function C0() {
  if (Fh) return Ro;
  Fh = 1;
  var n = E0();
  return Ro.createRoot = n.createRoot, Ro.hydrateRoot = n.hydrateRoot, Ro;
}
var P0 = C0();
const _0 = /* @__PURE__ */ sa(P0);
var su, Oh;
function A0() {
  if (Oh) return su;
  Oh = 1;
  function n(O) {
    this._maxSize = O, this.clear();
  }
  n.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, n.prototype.get = function(O) {
    return this._values[O];
  }, n.prototype.set = function(O, R) {
    return this._size >= this._maxSize && this.clear(), O in this._values || this._size++, this._values[O] = R;
  };
  var r = /[^.^\]^[]+|(?=\[\]|\.\.)/g, i = /^\d+$/, o = /^\d/, l = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, c = /^\s*(['"]?)(.*?)(\1)\s*$/, f = 512, h = new n(f), p = new n(f), g = new n(f);
  su = {
    Cache: n,
    split: v,
    normalizePath: m,
    setter: function(O) {
      var R = m(O);
      return p.get(O) || p.set(O, function(H, b) {
        for (var Y = 0, te = R.length, J = H; Y < te - 1; ) {
          var de = R[Y];
          if (de === "__proto__" || de === "constructor" || de === "prototype")
            return H;
          J = J[R[Y++]];
        }
        J[R[Y]] = b;
      });
    },
    getter: function(O, R) {
      var j = m(O);
      return g.get(O) || g.set(O, function(b) {
        for (var Y = 0, te = j.length; Y < te; )
          if (b != null || !R) b = b[j[Y++]];
          else return;
        return b;
      });
    },
    join: function(O) {
      return O.reduce(function(R, j) {
        return R + (E(j) || i.test(j) ? "[" + j + "]" : (R ? "." : "") + j);
      }, "");
    },
    forEach: function(O, R, j) {
      x(Array.isArray(O) ? O : v(O), R, j);
    }
  };
  function m(O) {
    return h.get(O) || h.set(
      O,
      v(O).map(function(R) {
        return R.replace(c, "$2");
      })
    );
  }
  function v(O) {
    return O.match(r) || [""];
  }
  function x(O, R, j) {
    var H = O.length, b, Y, te, J;
    for (Y = 0; Y < H; Y++)
      b = O[Y], b && (N(b) && (b = '"' + b + '"'), J = E(b), te = !J && /^\d+$/.test(b), R.call(j, b, J, te, Y, O));
  }
  function E(O) {
    return typeof O == "string" && O && ["'", '"'].indexOf(O.charAt(0)) !== -1;
  }
  function _(O) {
    return O.match(o) && !O.match(i);
  }
  function F(O) {
    return l.test(O);
  }
  function N(O) {
    return !E(O) && (_(O) || F(O));
  }
  return su;
}
var vr = A0(), ou, Rh;
function D0() {
  if (Rh) return ou;
  Rh = 1;
  const n = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, r = (m) => m.match(n) || [], i = (m) => m[0].toUpperCase() + m.slice(1), o = (m, v) => r(m).join(v).toLowerCase(), l = (m) => r(m).reduce(
    (v, x) => `${v}${v ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()}`,
    ""
  );
  return ou = {
    words: r,
    upperFirst: i,
    camelCase: l,
    pascalCase: (m) => i(l(m)),
    snakeCase: (m) => o(m, "_"),
    kebabCase: (m) => o(m, "-"),
    sentenceCase: (m) => i(o(m, " ")),
    titleCase: (m) => r(m).map(i).join(" ")
  }, ou;
}
var au = D0(), Mo = { exports: {} }, Mh;
function V0() {
  if (Mh) return Mo.exports;
  Mh = 1, Mo.exports = function(l) {
    return n(r(l), l);
  }, Mo.exports.array = n;
  function n(l, c) {
    var f = l.length, h = new Array(f), p = {}, g = f, m = i(c), v = o(l);
    for (c.forEach(function(E) {
      if (!v.has(E[0]) || !v.has(E[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); g--; )
      p[g] || x(l[g], g, /* @__PURE__ */ new Set());
    return h;
    function x(E, _, F) {
      if (F.has(E)) {
        var N;
        try {
          N = ", node was:" + JSON.stringify(E);
        } catch {
          N = "";
        }
        throw new Error("Cyclic dependency" + N);
      }
      if (!v.has(E))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(E));
      if (!p[_]) {
        p[_] = !0;
        var O = m.get(E) || /* @__PURE__ */ new Set();
        if (O = Array.from(O), _ = O.length) {
          F.add(E);
          do {
            var R = O[--_];
            x(R, v.get(R), F);
          } while (_);
          F.delete(E);
        }
        h[--f] = E;
      }
    }
  }
  function r(l) {
    for (var c = /* @__PURE__ */ new Set(), f = 0, h = l.length; f < h; f++) {
      var p = l[f];
      c.add(p[0]), c.add(p[1]);
    }
    return Array.from(c);
  }
  function i(l) {
    for (var c = /* @__PURE__ */ new Map(), f = 0, h = l.length; f < h; f++) {
      var p = l[f];
      c.has(p[0]) || c.set(p[0], /* @__PURE__ */ new Set()), c.has(p[1]) || c.set(p[1], /* @__PURE__ */ new Set()), c.get(p[0]).add(p[1]);
    }
    return c;
  }
  function o(l) {
    for (var c = /* @__PURE__ */ new Map(), f = 0, h = l.length; f < h; f++)
      c.set(l[f], f);
    return c;
  }
  return Mo.exports;
}
var F0 = V0();
const O0 = /* @__PURE__ */ sa(F0), R0 = Object.prototype.toString, M0 = Error.prototype.toString, N0 = RegExp.prototype.toString, L0 = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", j0 = /^Symbol\((.*)\)(.*)$/;
function I0(n) {
  return n != +n ? "NaN" : n === 0 && 1 / n < 0 ? "-0" : "" + n;
}
function Nh(n, r = !1) {
  if (n == null || n === !0 || n === !1) return "" + n;
  const i = typeof n;
  if (i === "number") return I0(n);
  if (i === "string") return r ? `"${n}"` : n;
  if (i === "function") return "[Function " + (n.name || "anonymous") + "]";
  if (i === "symbol") return L0.call(n).replace(j0, "Symbol($1)");
  const o = R0.call(n).slice(8, -1);
  return o === "Date" ? isNaN(n.getTime()) ? "" + n : n.toISOString(n) : o === "Error" || n instanceof Error ? "[" + M0.call(n) + "]" : o === "RegExp" ? N0.call(n) : null;
}
function Xn(n, r) {
  let i = Nh(n, r);
  return i !== null ? i : JSON.stringify(n, function(o, l) {
    let c = Nh(this[o], r);
    return c !== null ? c : l;
  }, 2);
}
function xm(n) {
  return n == null ? [] : [].concat(n);
}
let wm, Sm, Tm, b0 = /\$\{\s*(\w+)\s*\}/g;
wm = Symbol.toStringTag;
class Lh {
  constructor(r, i, o, l) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[wm] = "Error", this.name = "ValidationError", this.value = i, this.path = o, this.type = l, this.errors = [], this.inner = [], xm(r).forEach((c) => {
      if (xt.isError(c)) {
        this.errors.push(...c.errors);
        const f = c.inner.length ? c.inner : [c];
        this.inner.push(...f);
      } else
        this.errors.push(c);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Sm = Symbol.hasInstance;
Tm = Symbol.toStringTag;
class xt extends Error {
  static formatError(r, i) {
    const o = i.label || i.path || "this";
    return i = Object.assign({}, i, {
      path: o,
      originalPath: i.path
    }), typeof r == "string" ? r.replace(b0, (l, c) => Xn(i[c])) : typeof r == "function" ? r(i) : r;
  }
  static isError(r) {
    return r && r.name === "ValidationError";
  }
  constructor(r, i, o, l, c) {
    const f = new Lh(r, i, o, l);
    if (c)
      return f;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Tm] = "Error", this.name = f.name, this.message = f.message, this.type = f.type, this.value = f.value, this.path = f.path, this.errors = f.errors, this.inner = f.inner, Error.captureStackTrace && Error.captureStackTrace(this, xt);
  }
  static [Sm](r) {
    return Lh[Symbol.hasInstance](r) || super[Symbol.hasInstance](r);
  }
}
let fn = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: n,
    type: r,
    value: i,
    originalValue: o
  }) => {
    const l = o != null && o !== i ? ` (cast from the value \`${Xn(o, !0)}\`).` : ".";
    return r !== "mixed" ? `${n} must be a \`${r}\` type, but the final value was: \`${Xn(i, !0)}\`` + l : `${n} must match the configured type. The validated value was: \`${Xn(i, !0)}\`` + l;
  }
}, Dt = {
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
}, Gn = {
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
}, z0 = {
  isValue: "${path} field must be ${value}"
}, zo = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, B0 = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, U0 = {
  notType: (n) => {
    const {
      path: r,
      value: i,
      spec: o
    } = n, l = o.types.length;
    if (Array.isArray(i)) {
      if (i.length < l) return `${r} tuple value has too few items, expected a length of ${l} but got ${i.length} for value: \`${Xn(i, !0)}\``;
      if (i.length > l) return `${r} tuple value has too many items, expected a length of ${l} but got ${i.length} for value: \`${Xn(i, !0)}\``;
    }
    return xt.formatError(fn.notType, n);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: fn,
  string: Dt,
  number: Gn,
  date: Eu,
  object: zo,
  array: B0,
  boolean: z0,
  tuple: U0
});
const Xu = (n) => n && n.__isYupSchema__;
class Go {
  static fromOptions(r, i) {
    if (!i.then && !i.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: o,
      then: l,
      otherwise: c
    } = i, f = typeof o == "function" ? o : (...h) => h.every((p) => p === o);
    return new Go(r, (h, p) => {
      var g;
      let m = f(...h) ? l : c;
      return (g = m?.(p)) != null ? g : p;
    });
  }
  constructor(r, i) {
    this.fn = void 0, this.refs = r, this.refs = r, this.fn = i;
  }
  resolve(r, i) {
    let o = this.refs.map((c) => (
      // TODO: ? operator here?
      c.getValue(i?.value, i?.parent, i?.context)
    )), l = this.fn(o, r, i);
    if (l === void 0 || // @ts-ignore this can be base
    l === r)
      return r;
    if (!Xu(l)) throw new TypeError("conditions must return a schema object");
    return l.resolve(i);
  }
}
const No = {
  context: "$",
  value: "."
};
class Sr {
  constructor(r, i = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof r != "string") throw new TypeError("ref must be a string, got: " + r);
    if (this.key = r.trim(), r === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === No.context, this.isValue = this.key[0] === No.value, this.isSibling = !this.isContext && !this.isValue;
    let o = this.isContext ? No.context : this.isValue ? No.value : "";
    this.path = this.key.slice(o.length), this.getter = this.path && vr.getter(this.path, !0), this.map = i.map;
  }
  getValue(r, i, o) {
    let l = this.isContext ? o : this.isValue ? r : i;
    return this.getter && (l = this.getter(l || {})), this.map && (l = this.map(l)), l;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(r, i) {
    return this.getValue(r, i?.parent, i?.context);
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
  static isRef(r) {
    return r && r.__isYupRef;
  }
}
Sr.prototype.__isYupRef = !0;
const Cn = (n) => n == null;
function ei(n) {
  function r({
    value: i,
    path: o = "",
    options: l,
    originalValue: c,
    schema: f
  }, h, p) {
    const {
      name: g,
      test: m,
      params: v,
      message: x,
      skipAbsent: E
    } = n;
    let {
      parent: _,
      context: F,
      abortEarly: N = f.spec.abortEarly,
      disableStackTrace: O = f.spec.disableStackTrace
    } = l;
    const R = {
      value: i,
      parent: _,
      context: F
    };
    function j(me = {}) {
      const ue = km(Object.assign({
        value: i,
        originalValue: c,
        label: f.spec.label,
        path: me.path || o,
        spec: f.spec,
        disableStackTrace: me.disableStackTrace || O
      }, v, me.params), R), he = new xt(xt.formatError(me.message || x, ue), i, ue.path, me.type || g, ue.disableStackTrace);
      return he.params = ue, he;
    }
    const H = N ? h : p;
    let b = {
      path: o,
      parent: _,
      type: g,
      from: l.from,
      createError: j,
      resolve(me) {
        return Em(me, R);
      },
      options: l,
      originalValue: c,
      schema: f
    };
    const Y = (me) => {
      xt.isError(me) ? H(me) : me ? p(null) : H(j());
    }, te = (me) => {
      xt.isError(me) ? H(me) : h(me);
    };
    if (E && Cn(i))
      return Y(!0);
    let de;
    try {
      var xe;
      if (de = m.call(b, i, b), typeof ((xe = de) == null ? void 0 : xe.then) == "function") {
        if (l.sync)
          throw new Error(`Validation test of type: "${b.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(de).then(Y, te);
      }
    } catch (me) {
      te(me);
      return;
    }
    Y(de);
  }
  return r.OPTIONS = n, r;
}
function km(n, r) {
  if (!n) return n;
  for (const i of Object.keys(n))
    n[i] = Em(n[i], r);
  return n;
}
function Em(n, r) {
  return Sr.isRef(n) ? n.getValue(r.value, r.parent, r.context) : n;
}
function $0(n, r, i, o = i) {
  let l, c, f;
  return r ? (vr.forEach(r, (h, p, g) => {
    let m = p ? h.slice(1, h.length - 1) : h;
    n = n.resolve({
      context: o,
      parent: l,
      value: i
    });
    let v = n.type === "tuple", x = g ? parseInt(m, 10) : 0;
    if (n.innerType || v) {
      if (v && !g) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${f}" must contain an index to the tuple element, e.g. "${f}[0]"`);
      if (i && x >= i.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${h}, in the path: ${r}. because there is no value at that index. `);
      l = i, i = i && i[x], n = v ? n.spec.types[x] : n.innerType;
    }
    if (!g) {
      if (!n.fields || !n.fields[m]) throw new Error(`The schema does not contain the path: ${r}. (failed at: ${f} which is a type: "${n.type}")`);
      l = i, i = i && i[m], n = n.fields[m];
    }
    c = m, f = p ? "[" + h + "]" : "." + h;
  }), {
    schema: n,
    parent: l,
    parentPath: c
  }) : {
    parent: l,
    parentPath: r,
    schema: n
  };
}
class Yo extends Set {
  describe() {
    const r = [];
    for (const i of this.values())
      r.push(Sr.isRef(i) ? i.describe() : i);
    return r;
  }
  resolveAll(r) {
    let i = [];
    for (const o of this.values())
      i.push(r(o));
    return i;
  }
  clone() {
    return new Yo(this.values());
  }
  merge(r, i) {
    const o = this.clone();
    return r.forEach((l) => o.add(l)), i.forEach((l) => o.delete(l)), o;
  }
}
function ri(n, r = /* @__PURE__ */ new Map()) {
  if (Xu(n) || !n || typeof n != "object") return n;
  if (r.has(n)) return r.get(n);
  let i;
  if (n instanceof Date)
    i = new Date(n.getTime()), r.set(n, i);
  else if (n instanceof RegExp)
    i = new RegExp(n), r.set(n, i);
  else if (Array.isArray(n)) {
    i = new Array(n.length), r.set(n, i);
    for (let o = 0; o < n.length; o++) i[o] = ri(n[o], r);
  } else if (n instanceof Map) {
    i = /* @__PURE__ */ new Map(), r.set(n, i);
    for (const [o, l] of n.entries()) i.set(o, ri(l, r));
  } else if (n instanceof Set) {
    i = /* @__PURE__ */ new Set(), r.set(n, i);
    for (const o of n) i.add(ri(o, r));
  } else if (n instanceof Object) {
    i = {}, r.set(n, i);
    for (const [o, l] of Object.entries(n)) i[o] = ri(l, r);
  } else
    throw Error(`Unable to clone ${n}`);
  return i;
}
function W0(n) {
  if (!(n != null && n.length))
    return;
  const r = [];
  let i = "", o = !1, l = !1;
  for (let c = 0; c < n.length; c++) {
    const f = n[c];
    if (f === "[" && !l) {
      i && (r.push(...i.split(".").filter(Boolean)), i = ""), o = !0;
      continue;
    }
    if (f === "]" && !l) {
      i && (/^\d+$/.test(i) ? r.push(i) : r.push(i.replace(/^"|"$/g, "")), i = ""), o = !1;
      continue;
    }
    if (f === '"') {
      l = !l;
      continue;
    }
    if (f === "." && !o && !l) {
      i && (r.push(i), i = "");
      continue;
    }
    i += f;
  }
  return i && r.push(...i.split(".").filter(Boolean)), r;
}
function H0(n, r) {
  const i = r ? `${r}.${n.path}` : n.path;
  return n.errors.map((o) => ({
    message: o,
    path: W0(i)
  }));
}
function Cm(n, r) {
  var i;
  if (!((i = n.inner) != null && i.length) && n.errors.length)
    return H0(n, r);
  const o = r ? `${r}.${n.path}` : n.path;
  return n.inner.flatMap((l) => Cm(l, o));
}
class rn {
  constructor(r) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Yo(), this._blacklist = new Yo(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(fn.notType);
    }), this.type = r.type, this._typeCheck = r.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, r?.spec), this.withMutation((i) => {
      i.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(r) {
    if (this._mutate)
      return r && Object.assign(this.spec, r), this;
    const i = Object.create(Object.getPrototypeOf(this));
    return i.type = this.type, i._typeCheck = this._typeCheck, i._whitelist = this._whitelist.clone(), i._blacklist = this._blacklist.clone(), i.internalTests = Object.assign({}, this.internalTests), i.exclusiveTests = Object.assign({}, this.exclusiveTests), i.deps = [...this.deps], i.conditions = [...this.conditions], i.tests = [...this.tests], i.transforms = [...this.transforms], i.spec = ri(Object.assign({}, this.spec, r)), i;
  }
  label(r) {
    let i = this.clone();
    return i.spec.label = r, i;
  }
  meta(...r) {
    if (r.length === 0) return this.spec.meta;
    let i = this.clone();
    return i.spec.meta = Object.assign(i.spec.meta || {}, r[0]), i;
  }
  withMutation(r) {
    let i = this._mutate;
    this._mutate = !0;
    let o = r(this);
    return this._mutate = i, o;
  }
  concat(r) {
    if (!r || r === this) return this;
    if (r.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${r.type}`);
    let i = this, o = r.clone();
    const l = Object.assign({}, i.spec, o.spec);
    return o.spec = l, o.internalTests = Object.assign({}, i.internalTests, o.internalTests), o._whitelist = i._whitelist.merge(r._whitelist, r._blacklist), o._blacklist = i._blacklist.merge(r._blacklist, r._whitelist), o.tests = i.tests, o.exclusiveTests = i.exclusiveTests, o.withMutation((c) => {
      r.tests.forEach((f) => {
        c.test(f.OPTIONS);
      });
    }), o.transforms = [...i.transforms, ...o.transforms], o;
  }
  isType(r) {
    return r == null ? !!(this.spec.nullable && r === null || this.spec.optional && r === void 0) : this._typeCheck(r);
  }
  resolve(r) {
    let i = this;
    if (i.conditions.length) {
      let o = i.conditions;
      i = i.clone(), i.conditions = [], i = o.reduce((l, c) => c.resolve(l, r), i), i = i.resolve(r);
    }
    return i;
  }
  resolveOptions(r) {
    var i, o, l, c;
    return Object.assign({}, r, {
      from: r.from || [],
      strict: (i = r.strict) != null ? i : this.spec.strict,
      abortEarly: (o = r.abortEarly) != null ? o : this.spec.abortEarly,
      recursive: (l = r.recursive) != null ? l : this.spec.recursive,
      disableStackTrace: (c = r.disableStackTrace) != null ? c : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(r, i = {}) {
    let o = this.resolve(Object.assign({}, i, {
      value: r
      // parent: options.parent,
      // context: options.context,
    })), l = i.assert === "ignore-optionality", c = o._cast(r, i);
    if (i.assert !== !1 && !o.isType(c)) {
      if (l && Cn(c))
        return c;
      let f = Xn(r), h = Xn(c);
      throw new TypeError(`The value of ${i.path || "field"} could not be cast to a value that satisfies the schema type: "${o.type}". 

attempted value: ${f} 
` + (h !== f ? `result of cast: ${h}` : ""));
    }
    return c;
  }
  _cast(r, i) {
    let o = r === void 0 ? r : this.transforms.reduce((l, c) => c.call(this, l, r, this, i), r);
    return o === void 0 && (o = this.getDefault(i)), o;
  }
  _validate(r, i = {}, o, l) {
    let {
      path: c,
      originalValue: f = r,
      strict: h = this.spec.strict
    } = i, p = r;
    h || (p = this._cast(p, Object.assign({
      assert: !1
    }, i)));
    let g = [];
    for (let m of Object.values(this.internalTests))
      m && g.push(m);
    this.runTests({
      path: c,
      value: p,
      originalValue: f,
      options: i,
      tests: g
    }, o, (m) => {
      if (m.length)
        return l(m, p);
      this.runTests({
        path: c,
        value: p,
        originalValue: f,
        options: i,
        tests: this.tests
      }, o, l);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(r, i, o) {
    let l = !1, {
      tests: c,
      value: f,
      originalValue: h,
      path: p,
      options: g
    } = r, m = (F) => {
      l || (l = !0, i(F, f));
    }, v = (F) => {
      l || (l = !0, o(F, f));
    }, x = c.length, E = [];
    if (!x) return v([]);
    let _ = {
      value: f,
      originalValue: h,
      path: p,
      options: g,
      schema: this
    };
    for (let F = 0; F < c.length; F++) {
      const N = c[F];
      N(_, m, function(R) {
        R && (Array.isArray(R) ? E.push(...R) : E.push(R)), --x <= 0 && v(E);
      });
    }
  }
  asNestedTest({
    key: r,
    index: i,
    parent: o,
    parentPath: l,
    originalParent: c,
    options: f
  }) {
    const h = r ?? i;
    if (h == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const p = typeof h == "number";
    let g = o[h];
    const m = Object.assign({}, f, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: o,
      value: g,
      originalValue: c[h],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [p ? "index" : "key"]: h,
      path: p || h.includes(".") ? `${l || ""}[${p ? h : `"${h}"`}]` : (l ? `${l}.` : "") + r
    });
    return (v, x, E) => this.resolve(m)._validate(g, m, x, E);
  }
  validate(r, i) {
    var o;
    let l = this.resolve(Object.assign({}, i, {
      value: r
    })), c = (o = i?.disableStackTrace) != null ? o : l.spec.disableStackTrace;
    return new Promise((f, h) => l._validate(r, i, (p, g) => {
      xt.isError(p) && (p.value = g), h(p);
    }, (p, g) => {
      p.length ? h(new xt(p, g, void 0, void 0, c)) : f(g);
    }));
  }
  validateSync(r, i) {
    var o;
    let l = this.resolve(Object.assign({}, i, {
      value: r
    })), c, f = (o = i?.disableStackTrace) != null ? o : l.spec.disableStackTrace;
    return l._validate(r, Object.assign({}, i, {
      sync: !0
    }), (h, p) => {
      throw xt.isError(h) && (h.value = p), h;
    }, (h, p) => {
      if (h.length) throw new xt(h, r, void 0, void 0, f);
      c = p;
    }), c;
  }
  isValid(r, i) {
    return this.validate(r, i).then(() => !0, (o) => {
      if (xt.isError(o)) return !1;
      throw o;
    });
  }
  isValidSync(r, i) {
    try {
      return this.validateSync(r, i), !0;
    } catch (o) {
      if (xt.isError(o)) return !1;
      throw o;
    }
  }
  _getDefault(r) {
    let i = this.spec.default;
    return i == null ? i : typeof i == "function" ? i.call(this, r) : ri(i);
  }
  getDefault(r) {
    return this.resolve(r || {})._getDefault(r);
  }
  default(r) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: r
    });
  }
  strict(r = !0) {
    return this.clone({
      strict: r
    });
  }
  nullability(r, i) {
    const o = this.clone({
      nullable: r
    });
    return o.internalTests.nullable = ei({
      message: i,
      name: "nullable",
      test(l) {
        return l === null ? this.schema.spec.nullable : !0;
      }
    }), o;
  }
  optionality(r, i) {
    const o = this.clone({
      optional: r
    });
    return o.internalTests.optionality = ei({
      message: i,
      name: "optionality",
      test(l) {
        return l === void 0 ? this.schema.spec.optional : !0;
      }
    }), o;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(r = fn.defined) {
    return this.optionality(!1, r);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(r = fn.notNull) {
    return this.nullability(!1, r);
  }
  required(r = fn.required) {
    return this.clone().withMutation((i) => i.nonNullable(r).defined(r));
  }
  notRequired() {
    return this.clone().withMutation((r) => r.nullable().optional());
  }
  transform(r) {
    let i = this.clone();
    return i.transforms.push(r), i;
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
  test(...r) {
    let i;
    if (r.length === 1 ? typeof r[0] == "function" ? i = {
      test: r[0]
    } : i = r[0] : r.length === 2 ? i = {
      name: r[0],
      test: r[1]
    } : i = {
      name: r[0],
      message: r[1],
      test: r[2]
    }, i.message === void 0 && (i.message = fn.default), typeof i.test != "function") throw new TypeError("`test` is a required parameters");
    let o = this.clone(), l = ei(i), c = i.exclusive || i.name && o.exclusiveTests[i.name] === !0;
    if (i.exclusive && !i.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return i.name && (o.exclusiveTests[i.name] = !!i.exclusive), o.tests = o.tests.filter((f) => !(f.OPTIONS.name === i.name && (c || f.OPTIONS.test === l.OPTIONS.test))), o.tests.push(l), o;
  }
  when(r, i) {
    !Array.isArray(r) && typeof r != "string" && (i = r, r = ".");
    let o = this.clone(), l = xm(r).map((c) => new Sr(c));
    return l.forEach((c) => {
      c.isSibling && o.deps.push(c.key);
    }), o.conditions.push(typeof i == "function" ? new Go(l, i) : Go.fromOptions(l, i)), o;
  }
  typeError(r) {
    let i = this.clone();
    return i.internalTests.typeError = ei({
      message: r,
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
  oneOf(r, i = fn.oneOf) {
    let o = this.clone();
    return r.forEach((l) => {
      o._whitelist.add(l), o._blacklist.delete(l);
    }), o.internalTests.whiteList = ei({
      message: i,
      name: "oneOf",
      skipAbsent: !0,
      test(l) {
        let c = this.schema._whitelist, f = c.resolveAll(this.resolve);
        return f.includes(l) ? !0 : this.createError({
          params: {
            values: Array.from(c).join(", "),
            resolved: f
          }
        });
      }
    }), o;
  }
  notOneOf(r, i = fn.notOneOf) {
    let o = this.clone();
    return r.forEach((l) => {
      o._blacklist.add(l), o._whitelist.delete(l);
    }), o.internalTests.blacklist = ei({
      message: i,
      name: "notOneOf",
      test(l) {
        let c = this.schema._blacklist, f = c.resolveAll(this.resolve);
        return f.includes(l) ? this.createError({
          params: {
            values: Array.from(c).join(", "),
            resolved: f
          }
        }) : !0;
      }
    }), o;
  }
  strip(r = !0) {
    let i = this.clone();
    return i.spec.strip = r, i;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(r) {
    const i = (r ? this.resolve(r) : this).clone(), {
      label: o,
      meta: l,
      optional: c,
      nullable: f
    } = i.spec;
    return {
      meta: l,
      label: o,
      optional: c,
      nullable: f,
      default: i.getDefault(r),
      type: i.type,
      oneOf: i._whitelist.describe(),
      notOneOf: i._blacklist.describe(),
      tests: i.tests.filter((p, g, m) => m.findIndex((v) => v.OPTIONS.name === p.OPTIONS.name) === g).map((p) => {
        const g = p.OPTIONS.params && r ? km(Object.assign({}, p.OPTIONS.params), r) : p.OPTIONS.params;
        return {
          name: p.OPTIONS.name,
          params: g
        };
      })
    };
  }
  get "~standard"() {
    const r = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(o) {
        try {
          return {
            value: await r.validate(o, {
              abortEarly: !1
            })
          };
        } catch (l) {
          if (l instanceof xt)
            return {
              issues: Cm(l)
            };
          throw l;
        }
      }
    };
  }
}
rn.prototype.__isYupSchema__ = !0;
for (const n of ["validate", "validateSync"]) rn.prototype[`${n}At`] = function(r, i, o = {}) {
  const {
    parent: l,
    parentPath: c,
    schema: f
  } = $0(this, r, i, o.context);
  return f[n](l && l[c], Object.assign({}, o, {
    parent: l,
    path: r
  }));
};
for (const n of ["equals", "is"]) rn.prototype[n] = rn.prototype.oneOf;
for (const n of ["not", "nope"]) rn.prototype[n] = rn.prototype.notOneOf;
const K0 = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function G0(n) {
  const r = Cu(n);
  if (!r) return Date.parse ? Date.parse(n) : Number.NaN;
  if (r.z === void 0 && r.plusMinus === void 0)
    return new Date(r.year, r.month, r.day, r.hour, r.minute, r.second, r.millisecond).valueOf();
  let i = 0;
  return r.z !== "Z" && r.plusMinus !== void 0 && (i = r.hourOffset * 60 + r.minuteOffset, r.plusMinus === "+" && (i = 0 - i)), Date.UTC(r.year, r.month, r.day, r.hour, r.minute + i, r.second, r.millisecond);
}
function Cu(n) {
  var r, i;
  const o = K0.exec(n);
  return o ? {
    year: kn(o[1]),
    month: kn(o[2], 1) - 1,
    day: kn(o[3], 1),
    hour: kn(o[4]),
    minute: kn(o[5]),
    second: kn(o[6]),
    millisecond: o[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      kn(o[7].substring(0, 3))
    ) : 0,
    precision: (r = (i = o[7]) == null ? void 0 : i.length) != null ? r : void 0,
    z: o[8] || void 0,
    plusMinus: o[9] || void 0,
    hourOffset: kn(o[10]),
    minuteOffset: kn(o[11])
  } : null;
}
function kn(n, r = 0) {
  return Number(n) || r;
}
let Y0 = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Q0 = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), X0 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, q0 = "^\\d{4}-\\d{2}-\\d{2}", Z0 = "\\d{2}:\\d{2}:\\d{2}", J0 = "(([+-]\\d{2}(:?\\d{2})?)|Z)", ex = new RegExp(`${q0}T${Z0}(\\.\\d+)?${J0}$`), tx = (n) => Cn(n) || n === n.trim(), nx = {}.toString();
function Bo() {
  return new Pm();
}
class Pm extends rn {
  constructor() {
    super({
      type: "string",
      check(r) {
        return r instanceof String && (r = r.valueOf()), typeof r == "string";
      }
    }), this.withMutation(() => {
      this.transform((r, i) => {
        if (!this.spec.coerce || this.isType(r) || Array.isArray(r)) return r;
        const o = r != null && r.toString ? r.toString() : r;
        return o === nx ? r : o;
      });
    });
  }
  required(r) {
    return super.required(r).withMutation((i) => i.test({
      message: r || fn.required,
      name: "required",
      skipAbsent: !0,
      test: (o) => !!o.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((r) => (r.tests = r.tests.filter((i) => i.OPTIONS.name !== "required"), r));
  }
  length(r, i = Dt.length) {
    return this.test({
      message: i,
      name: "length",
      exclusive: !0,
      params: {
        length: r
      },
      skipAbsent: !0,
      test(o) {
        return o.length === this.resolve(r);
      }
    });
  }
  min(r, i = Dt.min) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        min: r
      },
      skipAbsent: !0,
      test(o) {
        return o.length >= this.resolve(r);
      }
    });
  }
  max(r, i = Dt.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: i,
      params: {
        max: r
      },
      skipAbsent: !0,
      test(o) {
        return o.length <= this.resolve(r);
      }
    });
  }
  matches(r, i) {
    let o = !1, l, c;
    return i && (typeof i == "object" ? {
      excludeEmptyString: o = !1,
      message: l,
      name: c
    } = i : l = i), this.test({
      name: c || "matches",
      message: l || Dt.matches,
      params: {
        regex: r
      },
      skipAbsent: !0,
      test: (f) => f === "" && o || f.search(r) !== -1
    });
  }
  email(r = Dt.email) {
    return this.matches(Y0, {
      name: "email",
      message: r,
      excludeEmptyString: !0
    });
  }
  url(r = Dt.url) {
    return this.matches(Q0, {
      name: "url",
      message: r,
      excludeEmptyString: !0
    });
  }
  uuid(r = Dt.uuid) {
    return this.matches(X0, {
      name: "uuid",
      message: r,
      excludeEmptyString: !1
    });
  }
  datetime(r) {
    let i = "", o, l;
    return r && (typeof r == "object" ? {
      message: i = "",
      allowOffset: o = !1,
      precision: l = void 0
    } = r : i = r), this.matches(ex, {
      name: "datetime",
      message: i || Dt.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: i || Dt.datetime_offset,
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
      message: i || Dt.datetime_precision,
      params: {
        precision: l
      },
      skipAbsent: !0,
      test: (c) => {
        if (!c || l == null) return !0;
        const f = Cu(c);
        return f ? f.precision === l : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((r) => r === null ? "" : r);
  }
  trim(r = Dt.trim) {
    return this.transform((i) => i != null ? i.trim() : i).test({
      message: r,
      name: "trim",
      test: tx
    });
  }
  lowercase(r = Dt.lowercase) {
    return this.transform((i) => Cn(i) ? i : i.toLowerCase()).test({
      message: r,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => Cn(i) || i === i.toLowerCase()
    });
  }
  uppercase(r = Dt.uppercase) {
    return this.transform((i) => Cn(i) ? i : i.toUpperCase()).test({
      message: r,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (i) => Cn(i) || i === i.toUpperCase()
    });
  }
}
Bo.prototype = Pm.prototype;
let rx = (n) => n != +n;
function _m() {
  return new Am();
}
class Am extends rn {
  constructor() {
    super({
      type: "number",
      check(r) {
        return r instanceof Number && (r = r.valueOf()), typeof r == "number" && !rx(r);
      }
    }), this.withMutation(() => {
      this.transform((r, i) => {
        if (!this.spec.coerce) return r;
        let o = r;
        if (typeof o == "string") {
          if (o = o.replace(/\s/g, ""), o === "") return NaN;
          o = +o;
        }
        return this.isType(o) || o === null ? o : parseFloat(o);
      });
    });
  }
  min(r, i = Gn.min) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        min: r
      },
      skipAbsent: !0,
      test(o) {
        return o >= this.resolve(r);
      }
    });
  }
  max(r, i = Gn.max) {
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: {
        max: r
      },
      skipAbsent: !0,
      test(o) {
        return o <= this.resolve(r);
      }
    });
  }
  lessThan(r, i = Gn.lessThan) {
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: {
        less: r
      },
      skipAbsent: !0,
      test(o) {
        return o < this.resolve(r);
      }
    });
  }
  moreThan(r, i = Gn.moreThan) {
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        more: r
      },
      skipAbsent: !0,
      test(o) {
        return o > this.resolve(r);
      }
    });
  }
  positive(r = Gn.positive) {
    return this.moreThan(0, r);
  }
  negative(r = Gn.negative) {
    return this.lessThan(0, r);
  }
  integer(r = Gn.integer) {
    return this.test({
      name: "integer",
      message: r,
      skipAbsent: !0,
      test: (i) => Number.isInteger(i)
    });
  }
  truncate() {
    return this.transform((r) => Cn(r) ? r : r | 0);
  }
  round(r) {
    var i;
    let o = ["ceil", "floor", "round", "trunc"];
    if (r = ((i = r) == null ? void 0 : i.toLowerCase()) || "round", r === "trunc") return this.truncate();
    if (o.indexOf(r.toLowerCase()) === -1) throw new TypeError("Only valid options for round() are: " + o.join(", "));
    return this.transform((l) => Cn(l) ? l : Math[r](l));
  }
}
_m.prototype = Am.prototype;
let ix = /* @__PURE__ */ new Date(""), sx = (n) => Object.prototype.toString.call(n) === "[object Date]";
class qu extends rn {
  constructor() {
    super({
      type: "date",
      check(r) {
        return sx(r) && !isNaN(r.getTime());
      }
    }), this.withMutation(() => {
      this.transform((r, i) => !this.spec.coerce || this.isType(r) || r === null ? r : (r = G0(r), isNaN(r) ? qu.INVALID_DATE : new Date(r)));
    });
  }
  prepareParam(r, i) {
    let o;
    if (Sr.isRef(r))
      o = r;
    else {
      let l = this.cast(r);
      if (!this._typeCheck(l)) throw new TypeError(`\`${i}\` must be a Date or a value that can be \`cast()\` to a Date`);
      o = l;
    }
    return o;
  }
  min(r, i = Eu.min) {
    let o = this.prepareParam(r, "min");
    return this.test({
      message: i,
      name: "min",
      exclusive: !0,
      params: {
        min: r
      },
      skipAbsent: !0,
      test(l) {
        return l >= this.resolve(o);
      }
    });
  }
  max(r, i = Eu.max) {
    let o = this.prepareParam(r, "max");
    return this.test({
      message: i,
      name: "max",
      exclusive: !0,
      params: {
        max: r
      },
      skipAbsent: !0,
      test(l) {
        return l <= this.resolve(o);
      }
    });
  }
}
qu.INVALID_DATE = ix;
function ox(n, r = []) {
  let i = [], o = /* @__PURE__ */ new Set(), l = new Set(r.map(([f, h]) => `${f}-${h}`));
  function c(f, h) {
    let p = vr.split(f)[0];
    o.add(p), l.has(`${h}-${p}`) || i.push([h, p]);
  }
  for (const f of Object.keys(n)) {
    let h = n[f];
    o.add(f), Sr.isRef(h) && h.isSibling ? c(h.path, f) : Xu(h) && "deps" in h && h.deps.forEach((p) => c(p, f));
  }
  return O0.array(Array.from(o), i).reverse();
}
function jh(n, r) {
  let i = 1 / 0;
  return n.some((o, l) => {
    var c;
    if ((c = r.path) != null && c.includes(o))
      return i = l, !0;
  }), i;
}
function Dm(n) {
  return (r, i) => jh(n, r) - jh(n, i);
}
const ax = (n, r, i) => {
  if (typeof n != "string")
    return n;
  let o = n;
  try {
    o = JSON.parse(n);
  } catch {
  }
  return i.isType(o) ? o : n;
};
function Uo(n) {
  if ("fields" in n) {
    const r = {};
    for (const [i, o] of Object.entries(n.fields))
      r[i] = Uo(o);
    return n.setFields(r);
  }
  if (n.type === "array") {
    const r = n.optional();
    return r.innerType && (r.innerType = Uo(r.innerType)), r;
  }
  return n.type === "tuple" ? n.optional().clone({
    types: n.spec.types.map(Uo)
  }) : "optional" in n ? n.optional() : n;
}
const lx = (n, r) => {
  const i = [...vr.normalizePath(r)];
  if (i.length === 1) return i[0] in n;
  let o = i.pop(), l = vr.getter(vr.join(i), !0)(n);
  return !!(l && o in l);
};
let Ih = (n) => Object.prototype.toString.call(n) === "[object Object]";
function bh(n, r) {
  let i = Object.keys(n.fields);
  return Object.keys(r).filter((o) => i.indexOf(o) === -1);
}
const ux = Dm([]);
function Vm(n) {
  return new Fm(n);
}
class Fm extends rn {
  constructor(r) {
    super({
      type: "object",
      check(i) {
        return Ih(i) || typeof i == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = ux, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      r && this.shape(r);
    });
  }
  _cast(r, i = {}) {
    var o;
    let l = super._cast(r, i);
    if (l === void 0) return this.getDefault(i);
    if (!this._typeCheck(l)) return l;
    let c = this.fields, f = (o = i.stripUnknown) != null ? o : this.spec.noUnknown, h = [].concat(this._nodes, Object.keys(l).filter((v) => !this._nodes.includes(v))), p = {}, g = Object.assign({}, i, {
      parent: p,
      __validating: i.__validating || !1
    }), m = !1;
    for (const v of h) {
      let x = c[v], E = v in l, _ = l[v];
      if (x) {
        let F;
        g.path = (i.path ? `${i.path}.` : "") + v, x = x.resolve({
          value: _,
          context: i.context,
          parent: p
        });
        let N = x instanceof rn ? x.spec : void 0, O = N?.strict;
        if (N != null && N.strip) {
          m = m || v in l;
          continue;
        }
        F = !i.__validating || !O ? x.cast(_, g) : _, F !== void 0 && (p[v] = F);
      } else E && !f && (p[v] = _);
      (E !== v in p || p[v] !== _) && (m = !0);
    }
    return m ? p : l;
  }
  _validate(r, i = {}, o, l) {
    let {
      from: c = [],
      originalValue: f = r,
      recursive: h = this.spec.recursive
    } = i;
    i.from = [{
      schema: this,
      value: f
    }, ...c], i.__validating = !0, i.originalValue = f, super._validate(r, i, o, (p, g) => {
      if (!h || !Ih(g)) {
        l(p, g);
        return;
      }
      f = f || g;
      let m = [];
      for (let v of this._nodes) {
        let x = this.fields[v];
        !x || Sr.isRef(x) || m.push(x.asNestedTest({
          options: i,
          key: v,
          parent: g,
          parentPath: i.path,
          originalParent: f
        }));
      }
      this.runTests({
        tests: m,
        value: g,
        originalValue: f,
        options: i
      }, o, (v) => {
        l(v.sort(this._sortErrors).concat(p), g);
      });
    });
  }
  clone(r) {
    const i = super.clone(r);
    return i.fields = Object.assign({}, this.fields), i._nodes = this._nodes, i._excludedEdges = this._excludedEdges, i._sortErrors = this._sortErrors, i;
  }
  concat(r) {
    let i = super.concat(r), o = i.fields;
    for (let [l, c] of Object.entries(this.fields)) {
      const f = o[l];
      o[l] = f === void 0 ? c : f;
    }
    return i.withMutation((l) => (
      // XXX: excludes here is wrong
      l.setFields(o, [...this._excludedEdges, ...r._excludedEdges])
    ));
  }
  _getDefault(r) {
    if ("default" in this.spec)
      return super._getDefault(r);
    if (!this._nodes.length)
      return;
    let i = {};
    return this._nodes.forEach((o) => {
      var l;
      const c = this.fields[o];
      let f = r;
      (l = f) != null && l.value && (f = Object.assign({}, f, {
        parent: f.value,
        value: f.value[o]
      })), i[o] = c && "getDefault" in c ? c.getDefault(f) : void 0;
    }), i;
  }
  setFields(r, i) {
    let o = this.clone();
    return o.fields = r, o._nodes = ox(r, i), o._sortErrors = Dm(Object.keys(r)), i && (o._excludedEdges = i), o;
  }
  shape(r, i = []) {
    return this.clone().withMutation((o) => {
      let l = o._excludedEdges;
      return i.length && (Array.isArray(i[0]) || (i = [i]), l = [...o._excludedEdges, ...i]), o.setFields(Object.assign(o.fields, r), l);
    });
  }
  partial() {
    const r = {};
    for (const [i, o] of Object.entries(this.fields))
      r[i] = "optional" in o && o.optional instanceof Function ? o.optional() : o;
    return this.setFields(r);
  }
  deepPartial() {
    return Uo(this);
  }
  pick(r) {
    const i = {};
    for (const o of r)
      this.fields[o] && (i[o] = this.fields[o]);
    return this.setFields(i, this._excludedEdges.filter(([o, l]) => r.includes(o) && r.includes(l)));
  }
  omit(r) {
    const i = [];
    for (const o of Object.keys(this.fields))
      r.includes(o) || i.push(o);
    return this.pick(i);
  }
  from(r, i, o) {
    let l = vr.getter(r, !0);
    return this.transform((c) => {
      if (!c) return c;
      let f = c;
      return lx(c, r) && (f = Object.assign({}, c), o || delete f[r], f[i] = l(c)), f;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(ax);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(r) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: r || zo.exact,
      test(i) {
        if (i == null) return !0;
        const o = bh(this.schema, i);
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
  noUnknown(r = !0, i = zo.noUnknown) {
    typeof r != "boolean" && (i = r, r = !0);
    let o = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: i,
      test(l) {
        if (l == null) return !0;
        const c = bh(this.schema, l);
        return !r || c.length === 0 || this.createError({
          params: {
            unknown: c.join(", ")
          }
        });
      }
    });
    return o.spec.noUnknown = r, o;
  }
  unknown(r = !0, i = zo.noUnknown) {
    return this.noUnknown(!r, i);
  }
  transformKeys(r) {
    return this.transform((i) => {
      if (!i) return i;
      const o = {};
      for (const l of Object.keys(i)) o[r(l)] = i[l];
      return o;
    });
  }
  camelCase() {
    return this.transformKeys(au.camelCase);
  }
  snakeCase() {
    return this.transformKeys(au.snakeCase);
  }
  constantCase() {
    return this.transformKeys((r) => au.snakeCase(r).toUpperCase());
  }
  describe(r) {
    const i = (r ? this.resolve(r) : this).clone(), o = super.describe(r);
    o.fields = {};
    for (const [c, f] of Object.entries(i.fields)) {
      var l;
      let h = r;
      (l = h) != null && l.value && (h = Object.assign({}, h, {
        parent: h.value,
        value: h.value[c]
      })), o.fields[c] = f.describe(h);
    }
    return o;
  }
}
Vm.prototype = Fm.prototype;
const cx = Vm({
  firstName: Bo().required("This field is required"),
  lastName: Bo().required("This field is required"),
  age: _m().min(0).positive().max(125).required("This field is required"),
  email: Bo().email()
});
function fx(n, r) {
  const i = {};
  return n.username ? n.username.toLowerCase().includes(r.ContactInfo.firstName.toLowerCase()) || (i.username = `Username should contain your first name (${r.ContactInfo.firstName})`) : i.username = "This field is required", i;
}
var vs = (n) => n.type === "checkbox", mr = (n) => n instanceof Date, Vt = (n) => n == null;
const Om = (n) => typeof n == "object";
var Ze = (n) => !Vt(n) && !Array.isArray(n) && Om(n) && !mr(n), dx = (n) => Ze(n) && n.target ? vs(n.target) ? n.target.checked : n.target.value : n, hx = (n) => n.substring(0, n.search(/\.\d+(\.|$)/)) || n, px = (n, r) => n.has(hx(r)), mx = (n) => {
  const r = n.constructor && n.constructor.prototype;
  return Ze(r) && r.hasOwnProperty("isPrototypeOf");
}, Zu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function st(n) {
  let r;
  const i = Array.isArray(n), o = typeof FileList < "u" ? n instanceof FileList : !1;
  if (n instanceof Date)
    r = new Date(n);
  else if (!(Zu && (n instanceof Blob || o)) && (i || Ze(n)))
    if (r = i ? [] : Object.create(Object.getPrototypeOf(n)), !i && !mx(n))
      r = n;
    else
      for (const l in n)
        n.hasOwnProperty(l) && (r[l] = st(n[l]));
  else
    return n;
  return r;
}
var aa = (n) => /^\w*$/.test(n), Ye = (n) => n === void 0, Ju = (n) => Array.isArray(n) ? n.filter(Boolean) : [], ec = (n) => Ju(n.replace(/["|']|\]/g, "").split(/\.|\[/)), ie = (n, r, i) => {
  if (!r || !Ze(n))
    return i;
  const o = (aa(r) ? [r] : ec(r)).reduce((l, c) => Vt(l) ? l : l[c], n);
  return Ye(o) || o === n ? Ye(n[r]) ? i : n[r] : o;
}, dn = (n) => typeof n == "boolean", Me = (n, r, i) => {
  let o = -1;
  const l = aa(r) ? [r] : ec(r), c = l.length, f = c - 1;
  for (; ++o < c; ) {
    const h = l[o];
    let p = i;
    if (o !== f) {
      const g = n[h];
      p = Ze(g) || Array.isArray(g) ? g : isNaN(+l[o + 1]) ? {} : [];
    }
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return;
    n[h] = p, n = n[h];
  }
};
const zh = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
}, tn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, En = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, tc = We.createContext(null);
tc.displayName = "HookFormContext";
const nc = () => We.useContext(tc), yx = (n) => {
  const { children: r, ...i } = n;
  return We.createElement(tc.Provider, { value: i }, r);
};
var gx = (n, r, i, o = !0) => {
  const l = {
    defaultValues: r._defaultValues
  };
  for (const c in n)
    Object.defineProperty(l, c, {
      get: () => {
        const f = c;
        return r._proxyFormState[f] !== tn.all && (r._proxyFormState[f] = !o || tn.all), n[f];
      }
    });
  return l;
};
const vx = typeof window < "u" ? We.useLayoutEffect : We.useEffect;
var Lt = (n) => typeof n == "string", xx = (n, r, i, o, l) => Lt(n) ? (o && r.watch.add(n), ie(i, n, l)) : Array.isArray(n) ? n.map((c) => (o && r.watch.add(c), ie(i, c))) : (o && (r.watchAll = !0), i), Pu = (n) => Vt(n) || !Om(n);
function Qn(n, r, i = /* @__PURE__ */ new WeakSet()) {
  if (Pu(n) || Pu(r))
    return Object.is(n, r);
  if (mr(n) && mr(r))
    return n.getTime() === r.getTime();
  const o = Object.keys(n), l = Object.keys(r);
  if (o.length !== l.length)
    return !1;
  if (i.has(n) || i.has(r))
    return !0;
  i.add(n), i.add(r);
  for (const c of o) {
    const f = n[c];
    if (!l.includes(c))
      return !1;
    if (c !== "ref") {
      const h = r[c];
      if (mr(f) && mr(h) || Ze(f) && Ze(h) || Array.isArray(f) && Array.isArray(h) ? !Qn(f, h, i) : !Object.is(f, h))
        return !1;
    }
  }
  return !0;
}
var Rm = (n, r, i, o, l) => r ? {
  ...i[n],
  types: {
    ...i[n] && i[n].types ? i[n].types : {},
    [o]: l || !0
  }
} : {}, as = (n) => Array.isArray(n) ? n : [n], Bh = () => {
  let n = [];
  return {
    get observers() {
      return n;
    },
    next: (l) => {
      for (const c of n)
        c.next && c.next(l);
    },
    subscribe: (l) => (n.push(l), {
      unsubscribe: () => {
        n = n.filter((c) => c !== l);
      }
    }),
    unsubscribe: () => {
      n = [];
    }
  };
};
function Mm(n, r) {
  const i = {};
  for (const o in n)
    if (n.hasOwnProperty(o)) {
      const l = n[o], c = r[o];
      if (l && Ze(l) && c) {
        const f = Mm(l, c);
        Ze(f) && (i[o] = f);
      } else n[o] && (i[o] = c);
    }
  return i;
}
var vt = (n) => Ze(n) && !Object.keys(n).length, rc = (n) => n.type === "file", nn = (n) => typeof n == "function", Qo = (n) => {
  if (!Zu)
    return !1;
  const r = n ? n.ownerDocument : 0;
  return n instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
}, Nm = (n) => n.type === "select-multiple", ic = (n) => n.type === "radio", wx = (n) => ic(n) || vs(n), lu = (n) => Qo(n) && n.isConnected;
function Sx(n, r) {
  const i = r.slice(0, -1).length;
  let o = 0;
  for (; o < i; )
    n = Ye(n) ? o++ : n[r[o++]];
  return n;
}
function Tx(n) {
  for (const r in n)
    if (n.hasOwnProperty(r) && !Ye(n[r]))
      return !1;
  return !0;
}
function Xe(n, r) {
  const i = Array.isArray(r) ? r : aa(r) ? [r] : ec(r), o = i.length === 1 ? n : Sx(n, i), l = i.length - 1, c = i[l];
  return o && delete o[c], l !== 0 && (Ze(o) && vt(o) || Array.isArray(o) && Tx(o)) && Xe(n, i.slice(0, -1)), n;
}
var kx = (n) => {
  for (const r in n)
    if (nn(n[r]))
      return !0;
  return !1;
};
function Lm(n) {
  return Array.isArray(n) || Ze(n) && !kx(n);
}
function _u(n, r = {}) {
  for (const i in n) {
    const o = n[i];
    Lm(o) ? (r[i] = Array.isArray(o) ? [] : {}, _u(o, r[i])) : Ye(o) || (r[i] = !0);
  }
  return r;
}
function ni(n, r, i) {
  i || (i = _u(r));
  for (const o in n) {
    const l = n[o];
    if (Lm(l))
      Ye(r) || Pu(i[o]) ? i[o] = _u(l, Array.isArray(l) ? [] : {}) : ni(l, Vt(r) ? {} : r[o], i[o]);
    else {
      const c = r[o];
      i[o] = !Qn(l, c);
    }
  }
  return i;
}
const Uh = {
  value: !1,
  isValid: !1
}, $h = { value: !0, isValid: !0 };
var jm = (n) => {
  if (Array.isArray(n)) {
    if (n.length > 1) {
      const r = n.filter((i) => i && i.checked && !i.disabled).map((i) => i.value);
      return { value: r, isValid: !!r.length };
    }
    return n[0].checked && !n[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      n[0].attributes && !Ye(n[0].attributes.value) ? Ye(n[0].value) || n[0].value === "" ? $h : { value: n[0].value, isValid: !0 } : $h
    ) : Uh;
  }
  return Uh;
}, Im = (n, { valueAsNumber: r, valueAsDate: i, setValueAs: o }) => Ye(n) ? n : r ? n === "" ? NaN : n && +n : i && Lt(n) ? new Date(n) : o ? o(n) : n;
const Wh = {
  isValid: !1,
  value: null
};
var bm = (n) => Array.isArray(n) ? n.reduce((r, i) => i && i.checked && !i.disabled ? {
  isValid: !0,
  value: i.value
} : r, Wh) : Wh;
function Hh(n) {
  const r = n.ref;
  return rc(r) ? r.files : ic(r) ? bm(n.refs).value : Nm(r) ? [...r.selectedOptions].map(({ value: i }) => i) : vs(r) ? jm(n.refs).value : Im(Ye(r.value) ? n.ref.value : r.value, n);
}
var Ex = (n, r, i, o) => {
  const l = {};
  for (const c of n) {
    const f = ie(r, c);
    f && Me(l, c, f._f);
  }
  return {
    criteriaMode: i,
    names: [...n],
    fields: l,
    shouldUseNativeValidation: o
  };
}, Xo = (n) => n instanceof RegExp, ns = (n) => Ye(n) ? n : Xo(n) ? n.source : Ze(n) ? Xo(n.value) ? n.value.source : n.value : n, Kh = (n) => ({
  isOnSubmit: !n || n === tn.onSubmit,
  isOnBlur: n === tn.onBlur,
  isOnChange: n === tn.onChange,
  isOnAll: n === tn.all,
  isOnTouch: n === tn.onTouched
});
const Gh = "AsyncFunction";
var Cx = (n) => !!n && !!n.validate && !!(nn(n.validate) && n.validate.constructor.name === Gh || Ze(n.validate) && Object.values(n.validate).find((r) => r.constructor.name === Gh)), Px = (n) => n.mount && (n.required || n.min || n.max || n.maxLength || n.minLength || n.pattern || n.validate), Yh = (n, r, i) => !i && (r.watchAll || r.watch.has(n) || [...r.watch].some((o) => n.startsWith(o) && /^\.\w+/.test(n.slice(o.length))));
const ls = (n, r, i, o) => {
  for (const l of i || Object.keys(n)) {
    const c = ie(n, l);
    if (c) {
      const { _f: f, ...h } = c;
      if (f) {
        if (f.refs && f.refs[0] && r(f.refs[0], l) && !o)
          return !0;
        if (f.ref && r(f.ref, f.name) && !o)
          return !0;
        if (ls(h, r))
          break;
      } else if (Ze(h) && ls(h, r))
        break;
    }
  }
};
function Qh(n, r, i) {
  const o = ie(n, i);
  if (o || aa(i))
    return {
      error: o,
      name: i
    };
  const l = i.split(".");
  for (; l.length; ) {
    const c = l.join("."), f = ie(r, c), h = ie(n, c);
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
    l.pop();
  }
  return {
    name: i
  };
}
var _x = (n, r, i, o) => {
  i(n);
  const { name: l, ...c } = n;
  return vt(c) || Object.keys(c).length >= Object.keys(r).length || Object.keys(c).find((f) => r[f] === (!o || tn.all));
}, Ax = (n, r, i) => !n || !r || n === r || as(n).some((o) => o && (i ? o === r : o.startsWith(r) || r.startsWith(o))), Dx = (n, r, i, o, l) => l.isOnAll ? !1 : !i && l.isOnTouch ? !(r || n) : (i ? o.isOnBlur : l.isOnBlur) ? !n : (i ? o.isOnChange : l.isOnChange) ? n : !0, Vx = (n, r) => !Ju(ie(n, r)).length && Xe(n, r), Fx = (n, r, i) => {
  const o = as(ie(n, i));
  return Me(o, "root", r[i]), Me(n, i, o), n;
};
function Xh(n, r, i = "validate") {
  if (Lt(n) || Array.isArray(n) && n.every(Lt) || dn(n) && !n)
    return {
      type: i,
      message: Lt(n) ? n : "",
      ref: r
    };
}
var ti = (n) => Ze(n) && !Xo(n) ? n : {
  value: n,
  message: ""
}, qh = async (n, r, i, o, l, c) => {
  const { ref: f, refs: h, required: p, maxLength: g, minLength: m, min: v, max: x, pattern: E, validate: _, name: F, valueAsNumber: N, mount: O } = n._f, R = ie(i, F);
  if (!O || r.has(F))
    return {};
  const j = h ? h[0] : f, H = (ue) => {
    l && j.reportValidity && (j.setCustomValidity(dn(ue) ? "" : ue || ""), j.reportValidity());
  }, b = {}, Y = ic(f), te = vs(f), J = Y || te, de = (N || rc(f)) && Ye(f.value) && Ye(R) || Qo(f) && f.value === "" || R === "" || Array.isArray(R) && !R.length, xe = Rm.bind(null, F, o, b), me = (ue, he, we, De = En.maxLength, Pe = En.minLength) => {
    const X = ue ? he : we;
    b[F] = {
      type: ue ? De : Pe,
      message: X,
      ref: f,
      ...xe(ue ? De : Pe, X)
    };
  };
  if (c ? !Array.isArray(R) || !R.length : p && (!J && (de || Vt(R)) || dn(R) && !R || te && !jm(h).isValid || Y && !bm(h).isValid)) {
    const { value: ue, message: he } = Lt(p) ? { value: !!p, message: p } : ti(p);
    if (ue && (b[F] = {
      type: En.required,
      message: he,
      ref: j,
      ...xe(En.required, he)
    }, !o))
      return H(he), b;
  }
  if (!de && (!Vt(v) || !Vt(x))) {
    let ue, he;
    const we = ti(x), De = ti(v);
    if (!Vt(R) && !isNaN(R)) {
      const Pe = f.valueAsNumber || R && +R;
      Vt(we.value) || (ue = Pe > we.value), Vt(De.value) || (he = Pe < De.value);
    } else {
      const Pe = f.valueAsDate || new Date(R), X = (K) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + K), L = f.type == "time", Z = f.type == "week";
      Lt(we.value) && R && (ue = L ? X(R) > X(we.value) : Z ? R > we.value : Pe > new Date(we.value)), Lt(De.value) && R && (he = L ? X(R) < X(De.value) : Z ? R < De.value : Pe < new Date(De.value));
    }
    if ((ue || he) && (me(!!ue, we.message, De.message, En.max, En.min), !o))
      return H(b[F].message), b;
  }
  if ((g || m) && !de && (Lt(R) || c && Array.isArray(R))) {
    const ue = ti(g), he = ti(m), we = !Vt(ue.value) && R.length > +ue.value, De = !Vt(he.value) && R.length < +he.value;
    if ((we || De) && (me(we, ue.message, he.message), !o))
      return H(b[F].message), b;
  }
  if (E && !de && Lt(R)) {
    const { value: ue, message: he } = ti(E);
    if (Xo(ue) && !R.match(ue) && (b[F] = {
      type: En.pattern,
      message: he,
      ref: f,
      ...xe(En.pattern, he)
    }, !o))
      return H(he), b;
  }
  if (_) {
    if (nn(_)) {
      const ue = await _(R, i), he = Xh(ue, j);
      if (he && (b[F] = {
        ...he,
        ...xe(En.validate, he.message)
      }, !o))
        return H(he.message), b;
    } else if (Ze(_)) {
      let ue = {};
      for (const he in _) {
        if (!vt(ue) && !o)
          break;
        const we = Xh(await _[he](R, i), j, he);
        we && (ue = {
          ...we,
          ...xe(he, we.message)
        }, H(we.message), o && (b[F] = ue));
      }
      if (!vt(ue) && (b[F] = {
        ref: j,
        ...ue
      }, !o))
        return b;
    }
  }
  return H(!0), b;
};
const Ox = {
  mode: tn.onSubmit,
  reValidateMode: tn.onChange,
  shouldFocusError: !0
};
function Rx(n = {}) {
  let r = {
    ...Ox,
    ...n
  }, i = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: nn(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, o = {}, l = Ze(r.defaultValues) || Ze(r.values) ? st(r.defaultValues || r.values) || {} : {}, c = r.shouldUnregister ? {} : st(l), f = {
    action: !1,
    mount: !1,
    watch: !1
  }, h = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, p, g = 0;
  const m = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let v = {
    ...m
  };
  const x = {
    array: Bh(),
    state: Bh()
  }, E = r.criteriaMode === tn.all, _ = (S) => (A) => {
    clearTimeout(g), g = setTimeout(S, A);
  }, F = async (S) => {
    if (!r.disabled && (m.isValid || v.isValid || S)) {
      const A = r.resolver ? vt((await te()).errors) : await de(o, !0);
      A !== i.isValid && x.state.next({
        isValid: A
      });
    }
  }, N = (S, A) => {
    !r.disabled && (m.isValidating || m.validatingFields || v.isValidating || v.validatingFields) && ((S || Array.from(h.mount)).forEach((M) => {
      M && (A ? Me(i.validatingFields, M, A) : Xe(i.validatingFields, M));
    }), x.state.next({
      validatingFields: i.validatingFields,
      isValidating: !vt(i.validatingFields)
    }));
  }, O = (S, A = [], M, ee, G = !0, $ = !0) => {
    if (ee && M && !r.disabled) {
      if (f.action = !0, $ && Array.isArray(ie(o, S))) {
        const le = M(ie(o, S), ee.argA, ee.argB);
        G && Me(o, S, le);
      }
      if ($ && Array.isArray(ie(i.errors, S))) {
        const le = M(ie(i.errors, S), ee.argA, ee.argB);
        G && Me(i.errors, S, le), Vx(i.errors, S);
      }
      if ((m.touchedFields || v.touchedFields) && $ && Array.isArray(ie(i.touchedFields, S))) {
        const le = M(ie(i.touchedFields, S), ee.argA, ee.argB);
        G && Me(i.touchedFields, S, le);
      }
      (m.dirtyFields || v.dirtyFields) && (i.dirtyFields = ni(l, c)), x.state.next({
        name: S,
        isDirty: me(S, A),
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
  }, j = (S) => {
    i.errors = S, x.state.next({
      errors: i.errors,
      isValid: !1
    });
  }, H = (S, A, M, ee) => {
    const G = ie(o, S);
    if (G) {
      const $ = ie(c, S, Ye(M) ? ie(l, S) : M);
      Ye($) || ee && ee.defaultChecked || A ? Me(c, S, A ? $ : Hh(G._f)) : we(S, $), f.mount && !f.action && F();
    }
  }, b = (S, A, M, ee, G) => {
    let $ = !1, le = !1;
    const Ee = {
      name: S
    };
    if (!r.disabled) {
      if (!M || ee) {
        (m.isDirty || v.isDirty) && (le = i.isDirty, i.isDirty = Ee.isDirty = me(), $ = le !== Ee.isDirty);
        const Ve = Qn(ie(l, S), A);
        le = !!ie(i.dirtyFields, S), Ve ? Xe(i.dirtyFields, S) : Me(i.dirtyFields, S, !0), Ee.dirtyFields = i.dirtyFields, $ = $ || (m.dirtyFields || v.dirtyFields) && le !== !Ve;
      }
      if (M) {
        const Ve = ie(i.touchedFields, S);
        Ve || (Me(i.touchedFields, S, M), Ee.touchedFields = i.touchedFields, $ = $ || (m.touchedFields || v.touchedFields) && Ve !== M);
      }
      $ && G && x.state.next(Ee);
    }
    return $ ? Ee : {};
  }, Y = (S, A, M, ee) => {
    const G = ie(i.errors, S), $ = (m.isValid || v.isValid) && dn(A) && i.isValid !== A;
    if (r.delayError && M ? (p = _(() => R(S, M)), p(r.delayError)) : (clearTimeout(g), p = null, M ? Me(i.errors, S, M) : Xe(i.errors, S)), (M ? !Qn(G, M) : G) || !vt(ee) || $) {
      const le = {
        ...ee,
        ...$ && dn(A) ? { isValid: A } : {},
        errors: i.errors,
        name: S
      };
      i = {
        ...i,
        ...le
      }, x.state.next(le);
    }
  }, te = async (S) => {
    N(S, !0);
    const A = await r.resolver(c, r.context, Ex(S || h.mount, o, r.criteriaMode, r.shouldUseNativeValidation));
    return N(S), A;
  }, J = async (S) => {
    const { errors: A } = await te(S);
    if (S)
      for (const M of S) {
        const ee = ie(A, M);
        ee ? Me(i.errors, M, ee) : Xe(i.errors, M);
      }
    else
      i.errors = A;
    return A;
  }, de = async (S, A, M = {
    valid: !0
  }) => {
    for (const ee in S) {
      const G = S[ee];
      if (G) {
        const { _f: $, ...le } = G;
        if ($) {
          const Ee = h.array.has($.name), Ve = G._f && Cx(G._f);
          Ve && m.validatingFields && N([$.name], !0);
          const mt = await qh(G, h.disabled, c, E, r.shouldUseNativeValidation && !A, Ee);
          if (Ve && m.validatingFields && N([$.name]), mt[$.name] && (M.valid = !1, A))
            break;
          !A && (ie(mt, $.name) ? Ee ? Fx(i.errors, mt, $.name) : Me(i.errors, $.name, mt[$.name]) : Xe(i.errors, $.name));
        }
        !vt(le) && await de(le, A, M);
      }
    }
    return M.valid;
  }, xe = () => {
    for (const S of h.unMount) {
      const A = ie(o, S);
      A && (A._f.refs ? A._f.refs.every((M) => !lu(M)) : !lu(A._f.ref)) && Fe(S);
    }
    h.unMount = /* @__PURE__ */ new Set();
  }, me = (S, A) => !r.disabled && (S && A && Me(c, S, A), !Qn(K(), l)), ue = (S, A, M) => xx(S, h, {
    ...f.mount ? c : Ye(A) ? l : Lt(S) ? { [S]: A } : A
  }, M, A), he = (S) => Ju(ie(f.mount ? c : l, S, r.shouldUnregister ? ie(l, S, []) : [])), we = (S, A, M = {}) => {
    const ee = ie(o, S);
    let G = A;
    if (ee) {
      const $ = ee._f;
      $ && (!$.disabled && Me(c, S, Im(A, $)), G = Qo($.ref) && Vt(A) ? "" : A, Nm($.ref) ? [...$.ref.options].forEach((le) => le.selected = G.includes(le.value)) : $.refs ? vs($.ref) ? $.refs.forEach((le) => {
        (!le.defaultChecked || !le.disabled) && (Array.isArray(G) ? le.checked = !!G.find((Ee) => Ee === le.value) : le.checked = G === le.value || !!G);
      }) : $.refs.forEach((le) => le.checked = le.value === G) : rc($.ref) ? $.ref.value = "" : ($.ref.value = G, $.ref.type || x.state.next({
        name: S,
        values: st(c)
      })));
    }
    (M.shouldDirty || M.shouldTouch) && b(S, G, M.shouldTouch, M.shouldDirty, !0), M.shouldValidate && Z(S);
  }, De = (S, A, M) => {
    for (const ee in A) {
      if (!A.hasOwnProperty(ee))
        return;
      const G = A[ee], $ = S + "." + ee, le = ie(o, $);
      (h.array.has(S) || Ze(G) || le && !le._f) && !mr(G) ? De($, G, M) : we($, G, M);
    }
  }, Pe = (S, A, M = {}) => {
    const ee = ie(o, S), G = h.array.has(S), $ = st(A);
    Me(c, S, $), G ? (x.array.next({
      name: S,
      values: st(c)
    }), (m.isDirty || m.dirtyFields || v.isDirty || v.dirtyFields) && M.shouldDirty && x.state.next({
      name: S,
      dirtyFields: ni(l, c),
      isDirty: me(S, $)
    })) : ee && !ee._f && !Vt($) ? De(S, $, M) : we(S, $, M), Yh(S, h) && x.state.next({ ...i, name: S }), x.state.next({
      name: f.mount ? S : void 0,
      values: st(c)
    });
  }, X = async (S) => {
    f.mount = !0;
    const A = S.target;
    let M = A.name, ee = !0;
    const G = ie(o, M), $ = (Ve) => {
      ee = Number.isNaN(Ve) || mr(Ve) && isNaN(Ve.getTime()) || Qn(Ve, ie(c, M, Ve));
    }, le = Kh(r.mode), Ee = Kh(r.reValidateMode);
    if (G) {
      let Ve, mt;
      const sn = A.type ? Hh(G._f) : dx(S), St = S.type === zh.BLUR || S.type === zh.FOCUS_OUT, ha = !Px(G._f) && !r.resolver && !ie(i.errors, M) && !G._f.deps || Dx(St, ie(i.touchedFields, M), i.isSubmitted, Ee, le), Pr = Yh(M, h, St);
      Me(c, M, sn), St ? (!A || !A.readOnly) && (G._f.onBlur && G._f.onBlur(S), p && p(0)) : G._f.onChange && G._f.onChange(S);
      const _r = b(M, sn, St), pa = !vt(_r) || Pr;
      if (!St && x.state.next({
        name: M,
        type: S.type,
        values: st(c)
      }), ha)
        return (m.isValid || v.isValid) && (r.mode === "onBlur" ? St && F() : St || F()), pa && x.state.next({ name: M, ...Pr ? {} : _r });
      if (!St && Pr && x.state.next({ ...i }), r.resolver) {
        const { errors: Ar } = await te([M]);
        if ($(sn), ee) {
          const vi = Qh(i.errors, o, M), Dr = Qh(Ar, o, vi.name || M);
          Ve = Dr.error, M = Dr.name, mt = vt(Ar);
        }
      } else
        N([M], !0), Ve = (await qh(G, h.disabled, c, E, r.shouldUseNativeValidation))[M], N([M]), $(sn), ee && (Ve ? mt = !1 : (m.isValid || v.isValid) && (mt = await de(o, !0)));
      ee && (G._f.deps && (!Array.isArray(G._f.deps) || G._f.deps.length > 0) && Z(G._f.deps), Y(M, mt, Ve, _r));
    }
  }, L = (S, A) => {
    if (ie(i.errors, A) && S.focus)
      return S.focus(), 1;
  }, Z = async (S, A = {}) => {
    let M, ee;
    const G = as(S);
    if (r.resolver) {
      const $ = await J(Ye(S) ? S : G);
      M = vt($), ee = S ? !G.some((le) => ie($, le)) : M;
    } else S ? (ee = (await Promise.all(G.map(async ($) => {
      const le = ie(o, $);
      return await de(le && le._f ? { [$]: le } : le);
    }))).every(Boolean), !(!ee && !i.isValid) && F()) : ee = M = await de(o);
    return x.state.next({
      ...!Lt(S) || (m.isValid || v.isValid) && M !== i.isValid ? {} : { name: S },
      ...r.resolver || !S ? { isValid: M } : {},
      errors: i.errors
    }), A.shouldFocus && !ee && ls(o, L, S ? G : h.mount), ee;
  }, K = (S, A) => {
    let M = {
      ...f.mount ? c : l
    };
    return A && (M = Mm(A.dirtyFields ? i.dirtyFields : i.touchedFields, M)), Ye(S) ? M : Lt(S) ? ie(M, S) : S.map((ee) => ie(M, ee));
  }, C = (S, A) => ({
    invalid: !!ie((A || i).errors, S),
    isDirty: !!ie((A || i).dirtyFields, S),
    error: ie((A || i).errors, S),
    isValidating: !!ie(i.validatingFields, S),
    isTouched: !!ie((A || i).touchedFields, S)
  }), I = (S) => {
    S && as(S).forEach((A) => Xe(i.errors, A)), x.state.next({
      errors: S ? i.errors : {}
    });
  }, ge = (S, A, M) => {
    const ee = (ie(o, S, { _f: {} })._f || {}).ref, G = ie(i.errors, S) || {}, { ref: $, message: le, type: Ee, ...Ve } = G;
    Me(i.errors, S, {
      ...Ve,
      ...A,
      ref: ee
    }), x.state.next({
      name: S,
      errors: i.errors,
      isValid: !1
    }), M && M.shouldFocus && ee && ee.focus && ee.focus();
  }, ve = (S, A) => nn(S) ? x.state.subscribe({
    next: (M) => "values" in M && S(ue(void 0, A), M)
  }) : ue(S, A, !0), Te = (S) => x.state.subscribe({
    next: (A) => {
      Ax(S.name, A.name, S.exact) && _x(A, S.formState || m, gi, S.reRenderRoot) && S.callback({
        values: { ...c },
        ...i,
        ...A,
        defaultValues: l
      });
    }
  }).unsubscribe, ke = (S) => (f.mount = !0, v = {
    ...v,
    ...S.formState
  }, Te({
    ...S,
    formState: v
  })), Fe = (S, A = {}) => {
    for (const M of S ? as(S) : h.mount)
      h.mount.delete(M), h.array.delete(M), A.keepValue || (Xe(o, M), Xe(c, M)), !A.keepError && Xe(i.errors, M), !A.keepDirty && Xe(i.dirtyFields, M), !A.keepTouched && Xe(i.touchedFields, M), !A.keepIsValidating && Xe(i.validatingFields, M), !r.shouldUnregister && !A.keepDefaultValue && Xe(l, M);
    x.state.next({
      values: st(c)
    }), x.state.next({
      ...i,
      ...A.keepDirty ? { isDirty: me() } : {}
    }), !A.keepIsValid && F();
  }, _e = ({ disabled: S, name: A }) => {
    (dn(S) && f.mount || S || h.disabled.has(A)) && (S ? h.disabled.add(A) : h.disabled.delete(A));
  }, Re = (S, A = {}) => {
    let M = ie(o, S);
    const ee = dn(A.disabled) || dn(r.disabled);
    return Me(o, S, {
      ...M || {},
      _f: {
        ...M && M._f ? M._f : { ref: { name: S } },
        name: S,
        mount: !0,
        ...A
      }
    }), h.mount.add(S), M ? _e({
      disabled: dn(A.disabled) ? A.disabled : r.disabled,
      name: S
    }) : H(S, !0, A.value), {
      ...ee ? { disabled: A.disabled || r.disabled } : {},
      ...r.progressive ? {
        required: !!A.required,
        min: ns(A.min),
        max: ns(A.max),
        minLength: ns(A.minLength),
        maxLength: ns(A.maxLength),
        pattern: ns(A.pattern)
      } : {},
      name: S,
      onChange: X,
      onBlur: X,
      ref: (G) => {
        if (G) {
          Re(S, A), M = ie(o, S);
          const $ = Ye(G.value) && G.querySelectorAll && G.querySelectorAll("input,select,textarea")[0] || G, le = wx($), Ee = M._f.refs || [];
          if (le ? Ee.find((Ve) => Ve === $) : $ === M._f.ref)
            return;
          Me(o, S, {
            _f: {
              ...M._f,
              ...le ? {
                refs: [
                  ...Ee.filter(lu),
                  $,
                  ...Array.isArray(ie(l, S)) ? [{}] : []
                ],
                ref: { type: $.type, name: S }
              } : { ref: $ }
            }
          }), H(S, !1, void 0, $);
        } else
          M = ie(o, S, {}), M._f && (M._f.mount = !1), (r.shouldUnregister || A.shouldUnregister) && !(px(h.array, S) && f.action) && h.unMount.add(S);
      }
    };
  }, ot = () => r.shouldFocusError && ls(o, L, h.mount), Tr = (S) => {
    dn(S) && (x.state.next({ disabled: S }), ls(o, (A, M) => {
      const ee = ie(o, M);
      ee && (A.disabled = ee._f.disabled || S, Array.isArray(ee._f.refs) && ee._f.refs.forEach((G) => {
        G.disabled = ee._f.disabled || S;
      }));
    }, 0, !1));
  }, mi = (S, A) => async (M) => {
    let ee;
    M && (M.preventDefault && M.preventDefault(), M.persist && M.persist());
    let G = st(c);
    if (x.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: $, values: le } = await te();
      i.errors = $, G = st(le);
    } else
      await de(o);
    if (h.disabled.size)
      for (const $ of h.disabled)
        Xe(G, $);
    if (Xe(i.errors, "root"), vt(i.errors)) {
      x.state.next({
        errors: {}
      });
      try {
        await S(G, M);
      } catch ($) {
        ee = $;
      }
    } else
      A && await A({ ...i.errors }, M), ot(), setTimeout(ot);
    if (x.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: vt(i.errors) && !ee,
      submitCount: i.submitCount + 1,
      errors: i.errors
    }), ee)
      throw ee;
  }, kr = (S, A = {}) => {
    ie(o, S) && (Ye(A.defaultValue) ? Pe(S, st(ie(l, S))) : (Pe(S, A.defaultValue), Me(l, S, st(A.defaultValue))), A.keepTouched || Xe(i.touchedFields, S), A.keepDirty || (Xe(i.dirtyFields, S), i.isDirty = A.defaultValue ? me(S, st(ie(l, S))) : me()), A.keepError || (Xe(i.errors, S), m.isValid && F()), x.state.next({ ...i }));
  }, Er = (S, A = {}) => {
    const M = S ? st(S) : l, ee = st(M), G = vt(S), $ = G ? l : ee;
    if (A.keepDefaultValues || (l = M), !A.keepValues) {
      if (A.keepDirtyValues) {
        const le = /* @__PURE__ */ new Set([
          ...h.mount,
          ...Object.keys(ni(l, c))
        ]);
        for (const Ee of Array.from(le))
          ie(i.dirtyFields, Ee) ? Me($, Ee, ie(c, Ee)) : Pe(Ee, ie($, Ee));
      } else {
        if (Zu && Ye(S))
          for (const le of h.mount) {
            const Ee = ie(o, le);
            if (Ee && Ee._f) {
              const Ve = Array.isArray(Ee._f.refs) ? Ee._f.refs[0] : Ee._f.ref;
              if (Qo(Ve)) {
                const mt = Ve.closest("form");
                if (mt) {
                  mt.reset();
                  break;
                }
              }
            }
          }
        if (A.keepFieldsRef)
          for (const le of h.mount)
            Pe(le, ie($, le));
        else
          o = {};
      }
      c = r.shouldUnregister ? A.keepDefaultValues ? st(l) : {} : st($), x.array.next({
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
    }, f.mount = !m.isValid || !!A.keepIsValid || !!A.keepDirtyValues || !r.shouldUnregister && !vt($), f.watch = !!r.shouldUnregister, f.action = !1, A.keepErrors || (i.errors = {}), x.state.next({
      submitCount: A.keepSubmitCount ? i.submitCount : 0,
      isDirty: G ? !1 : A.keepDirty ? i.isDirty : !!(A.keepDefaultValues && !Qn(S, l)),
      isSubmitted: A.keepIsSubmitted ? i.isSubmitted : !1,
      dirtyFields: G ? {} : A.keepDirtyValues ? A.keepDefaultValues && c ? ni(l, c) : i.dirtyFields : A.keepDefaultValues && S ? ni(l, S) : A.keepDirty ? i.dirtyFields : {},
      touchedFields: A.keepTouched ? i.touchedFields : {},
      errors: A.keepErrors ? i.errors : {},
      isSubmitSuccessful: A.keepIsSubmitSuccessful ? i.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: l
    });
  }, yi = (S, A) => Er(nn(S) ? S(c) : S, A), Es = (S, A = {}) => {
    const M = ie(o, S), ee = M && M._f;
    if (ee) {
      const G = ee.refs ? ee.refs[0] : ee.ref;
      G.focus && (G.focus(), A.shouldSelect && nn(G.select) && G.select());
    }
  }, gi = (S) => {
    i = {
      ...i,
      ...S
    };
  }, Cr = {
    control: {
      register: Re,
      unregister: Fe,
      getFieldState: C,
      handleSubmit: mi,
      setError: ge,
      _subscribe: Te,
      _runSchema: te,
      _focusError: ot,
      _getWatch: ue,
      _getDirty: me,
      _setValid: F,
      _setFieldArray: O,
      _setDisabledField: _e,
      _setErrors: j,
      _getFieldArray: he,
      _reset: Er,
      _resetDefaultValues: () => nn(r.defaultValues) && r.defaultValues().then((S) => {
        yi(S, r.resetOptions), x.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: xe,
      _disableForm: Tr,
      _subjects: x,
      _proxyFormState: m,
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
        return l;
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
        return r;
      },
      set _options(S) {
        r = {
          ...r,
          ...S
        };
      }
    },
    subscribe: ke,
    trigger: Z,
    register: Re,
    handleSubmit: mi,
    watch: ve,
    setValue: Pe,
    getValues: K,
    reset: yi,
    resetField: kr,
    clearErrors: I,
    unregister: Fe,
    setError: ge,
    setFocus: Es,
    getFieldState: C
  };
  return {
    ...Cr,
    formControl: Cr
  };
}
function Mx(n = {}) {
  const r = We.useRef(void 0), i = We.useRef(void 0), [o, l] = We.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: nn(n.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1,
    isReady: !1,
    defaultValues: nn(n.defaultValues) ? void 0 : n.defaultValues
  });
  if (!r.current)
    if (n.formControl)
      r.current = {
        ...n.formControl,
        formState: o
      }, n.defaultValues && !nn(n.defaultValues) && n.formControl.reset(n.defaultValues, n.resetOptions);
    else {
      const { formControl: f, ...h } = Rx(n);
      r.current = {
        ...h,
        formState: o
      };
    }
  const c = r.current.control;
  return c._options = n, vx(() => {
    const f = c._subscribe({
      formState: c._proxyFormState,
      callback: () => l({ ...c._formState }),
      reRenderRoot: !0
    });
    return l((h) => ({
      ...h,
      isReady: !0
    })), c._formState.isReady = !0, f;
  }, [c]), We.useEffect(() => c._disableForm(n.disabled), [c, n.disabled]), We.useEffect(() => {
    n.mode && (c._options.mode = n.mode), n.reValidateMode && (c._options.reValidateMode = n.reValidateMode);
  }, [c, n.mode, n.reValidateMode]), We.useEffect(() => {
    n.errors && (c._setErrors(n.errors), c._focusError());
  }, [c, n.errors]), We.useEffect(() => {
    n.shouldUnregister && c._subjects.state.next({
      values: c._getWatch()
    });
  }, [c, n.shouldUnregister]), We.useEffect(() => {
    if (c._proxyFormState.isDirty) {
      const f = c._getDirty();
      f !== o.isDirty && c._subjects.state.next({
        isDirty: f
      });
    }
  }, [c, o.isDirty]), We.useEffect(() => {
    var f;
    n.values && !Qn(n.values, i.current) ? (c._reset(n.values, {
      keepFieldsRef: !0,
      ...c._options.resetOptions
    }), !((f = c._options.resetOptions) === null || f === void 0) && f.keepIsValid || c._setValid(), i.current = n.values, l((h) => ({ ...h }))) : c._resetDefaultValues();
  }, [c, n.values]), We.useEffect(() => {
    c._state.mount || (c._setValid(), c._state.mount = !0), c._state.watch && (c._state.watch = !1, c._subjects.state.next({ ...c._formState })), c._removeUnmounted();
  }), r.current.formState = gx(o, c), r.current;
}
const Zh = (n, r, i) => {
  if (n && "reportValidity" in n) {
    const o = ie(i, r);
    n.setCustomValidity(o && o.message || ""), n.reportValidity();
  }
}, zm = (n, r) => {
  for (const i in r.fields) {
    const o = r.fields[i];
    o && o.ref && "reportValidity" in o.ref ? Zh(o.ref, i, n) : o && o.refs && o.refs.forEach((l) => Zh(l, i, n));
  }
}, Nx = (n, r) => {
  r.shouldUseNativeValidation && zm(n, r);
  const i = {};
  for (const o in n) {
    const l = ie(r.fields, o), c = Object.assign(n[o] || {}, { ref: l && l.ref });
    if (Lx(r.names || Object.keys(n), o)) {
      const f = Object.assign({}, ie(i, o));
      Me(f, "root", c), Me(i, o, f);
    } else Me(i, o, c);
  }
  return i;
}, Lx = (n, r) => {
  const i = Jh(r);
  return n.some((o) => Jh(o).match(`^${i}\\.\\d+`));
};
function Jh(n) {
  return n.replace(/\]|\[/g, "");
}
function jx(n, r, i) {
  return i === void 0 && (i = {}), function(o, l, c) {
    try {
      return Promise.resolve((function(f, h) {
        try {
          var p = (r?.context, Promise.resolve(n[i.mode === "sync" ? "validateSync" : "validate"](o, Object.assign({ abortEarly: !1 }, r, { context: l }))).then(function(g) {
            return c.shouldUseNativeValidation && zm({}, c), { values: i.raw ? Object.assign({}, o) : g, errors: {} };
          }));
        } catch (g) {
          return h(g);
        }
        return p && p.then ? p.then(void 0, h) : p;
      })(0, function(f) {
        if (!f.inner) throw f;
        return { values: {}, errors: Nx((h = f, p = !c.shouldUseNativeValidation && c.criteriaMode === "all", (h.inner || []).reduce(function(g, m) {
          if (g[m.path] || (g[m.path] = { message: m.message, type: m.type }), p) {
            var v = g[m.path].types, x = v && v[m.type];
            g[m.path] = Rm(m.path, p, g, m.type, x ? [].concat(x, m.message) : m.message);
          }
          return g;
        }, {})), c) };
        var h, p;
      }));
    } catch (f) {
      return Promise.reject(f);
    }
  };
}
function Ix(n) {
  const r = n.validateOnChange ?? !0, i = n.validateOnBlur ?? !0;
  return r && i ? "all" : r ? "onChange" : i ? "onBlur" : "onSubmit";
}
function bx(n, r) {
  return (i) => {
    const o = n(i, r);
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
function zx(n, r) {
  if (n.validationSchema)
    return jx(n.validationSchema);
  if (n.validate)
    return bx(n.validate, r);
}
const Bm = Q.createContext(
  void 0
);
function xs() {
  const n = Q.useContext(Bm);
  if (n === void 0)
    throw new Error("useWizard must be used within the Wizard app!");
  return n;
}
function Bx(n) {
  const r = {};
  return n.forEach((i) => {
    const o = i.id.replace(/[A-Z]/g, (l, c) => (c > 0 ? "-" : "") + l.toLowerCase());
    r[o] = i;
  }), r;
}
function ep(n) {
  const r = window.location.hash.slice(1);
  return n[r];
}
function Ux(n, r) {
  const i = Object.keys(n).find(
    (o) => n[o].id === r.id
  );
  window.location.hash = i || window.location.hash;
}
function $x({
  steps: n,
  onCompleted: r,
  onStepChanged: i,
  enableHash: o,
  // Components
  header: l,
  wrapper: c,
  footer: f
}) {
  const h = Q.useMemo(() => o ? Bx(n) : {}, [o, n]), p = ep(h) || n[0], [g, m] = Q.useState(p), [v, x] = Q.useState(!1), [E, _] = Q.useState({}), F = Q.useMemo(() => De(g), [g]), N = Mx({
    defaultValues: F,
    mode: Ix(g),
    resolver: zx(g, E),
    shouldUnregister: !0
  }), { reset: O } = N, R = n.findIndex((X) => X.id === g.id), j = R + 1, H = n.length, b = j === 1, Y = j === H;
  Q.useEffect(() => {
    O(F);
  }, [F]), Q.useEffect(() => {
    if (o)
      return window.addEventListener("hashchange", te), Ux(h, g), () => window.removeEventListener("hashchange", te);
  }, [g]);
  function te() {
    const X = ep(h);
    X?.id !== g.id && m(X);
  }
  async function J(X, L, Z) {
    let K;
    for (let C = 0; C < X.length; ++C) {
      const I = X[C];
      if (I.shouldSkip === void 0) {
        K = I;
        break;
      }
      if (!await I.shouldSkip(L, Z)) {
        K = I;
        break;
      }
    }
    return K;
  }
  async function de(X) {
    const L = n.slice(R + 1);
    return await J(L, X, 1);
  }
  async function xe(X) {
    const L = n.slice(0, R).reverse();
    return await J(
      L,
      X,
      -1
    );
  }
  function me(X) {
    if (!r)
      return;
    let L = {};
    Object.keys(X).forEach((Z) => {
      L = { ...L, ...X[Z] };
    }), r(L);
  }
  async function ue(X) {
    try {
      g.onSubmit && (x(!0), X = await g.onSubmit(X, E), x(!1));
      const L = {
        ...E,
        [g.id]: { ...X }
      };
      _(L);
      const Z = await de(L);
      if (!Z) {
        me(L);
        return;
      }
      i && i(g, Z, L), m(Z);
    } catch (L) {
      console.log(L), x(!1);
    }
  }
  async function he(X) {
    let L = null;
    (g.keepValuesOnPrevious ?? !0) && (L = {
      ...E,
      [g.id]: { ...X }
    }, _(L)), L = L || E;
    const Z = await xe(L);
    Z && (i && i(g, Z, L), m(Z));
  }
  function we(X, L) {
    m({ ...g, [X]: L });
  }
  function De(X) {
    return E[X.id] || X.initialValues || {};
  }
  const Pe = {
    values: E,
    setValues: _,
    setIsLoading: x,
    updateStep: we,
    goToPreviousStep: () => he(N.getValues()),
    goToNextStep: () => ue(N.getValues()),
    goToStep: (X) => m(n[X]),
    activeStep: g,
    stepNumber: j,
    totalSteps: H,
    isLoading: v,
    isFirstStep: b,
    isLastStep: Y
  };
  return /* @__PURE__ */ q.jsx(Bm.Provider, { value: Pe, children: /* @__PURE__ */ q.jsx(yx, { ...N, children: /* @__PURE__ */ q.jsxs("form", { onSubmit: N.handleSubmit(ue), children: [
    l,
    c || g.component,
    f
  ] }) }) });
}
function Wx() {
  const { goToStep: n } = xs();
  return /* @__PURE__ */ q.jsxs("div", { className: "prose max-w-none", children: [
    /* @__PURE__ */ q.jsx("h2", { children: "Warning" }),
    /* @__PURE__ */ q.jsx("p", { children: "Seems like you did not fill your email. Would you like to do it?" }),
    /* @__PURE__ */ q.jsxs("p", { children: [
      /* @__PURE__ */ q.jsx("b", { children: "Note:" }),
      " This step is automatically skipped if user filled their email in the first step."
    ] }),
    /* @__PURE__ */ q.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ q.jsx("button", { className: "btn", type: "submit", children: "No" }),
      /* @__PURE__ */ q.jsx("button", { className: "btn", type: "button", onClick: () => n(0), children: "Yes" })
    ] })
  ] });
}
function Hx() {
  return /* @__PURE__ */ q.jsxs("div", { className: "prose max-w-none", children: [
    /* @__PURE__ */ q.jsx("h2", { children: "Async" }),
    /* @__PURE__ */ q.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
  ] });
}
function Kx() {
  const { values: n, updateStep: r } = xs(), [i, o] = Q.useState(!0);
  function l() {
    const f = !i;
    o(f), r("hideNext", f);
  }
  let c = {};
  return Object.keys(n).forEach((f) => {
    c = { ...c, ...n[f] };
  }), /* @__PURE__ */ q.jsxs("div", { className: "prose prose-neutral max-w-none", children: [
    /* @__PURE__ */ q.jsx("h2", { children: "Congratulations!" }),
    /* @__PURE__ */ q.jsxs("div", { className: "flex flex-wrap gap-4 justify-between", children: [
      /* @__PURE__ */ q.jsxs("p", { className: "!mt-0", children: [
        "You did it ",
        /* @__PURE__ */ q.jsx("b", { children: n.Username.username }),
        "! 🎉",
        /* @__PURE__ */ q.jsx("br", {}),
        "Here's your input:"
      ] }),
      /* @__PURE__ */ q.jsx("button", { className: "btn", onClick: l, type: "button", children: "Toggle hideNext" })
    ] }),
    /* @__PURE__ */ q.jsx("pre", { className: "mt-0 text-sm sm:text-base", children: JSON.stringify(c, null, 2) })
  ] });
}
const Gx = [
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
    validationSchema: cx,
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
    validate: fx,
    disableNextOnErrors: !0
  },
  {
    id: "EmailCheck",
    component: /* @__PURE__ */ q.jsx(Wx, {}),
    hideNext: !0,
    hidePrevious: !0,
    shouldSkip: (n, r) => r === -1 ? !0 : !!n.ContactInfo.email
  },
  {
    id: "Async",
    component: /* @__PURE__ */ q.jsx(Hx, {}),
    onSubmit: async (n, r) => (await ((o) => new Promise((l) => setTimeout(l, o)))(2e3), n)
  },
  {
    id: "Final",
    component: /* @__PURE__ */ q.jsx(Kx, {}),
    hideNext: !0,
    hidePrevious: !1
  }
], sc = Q.createContext({});
function oc(n) {
  const r = Q.useRef(null);
  return r.current === null && (r.current = n()), r.current;
}
const ac = typeof window < "u", Um = ac ? Q.useLayoutEffect : Q.useEffect, la = /* @__PURE__ */ Q.createContext(null);
function lc(n, r) {
  n.indexOf(r) === -1 && n.push(r);
}
function uc(n, r) {
  const i = n.indexOf(r);
  i > -1 && n.splice(i, 1);
}
const Pn = (n, r, i) => i > r ? r : i < n ? n : i;
let cc = () => {
};
const _n = {}, $m = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function Wm(n) {
  return typeof n == "object" && n !== null;
}
const Hm = (n) => /^0[^.\s]+$/u.test(n);
// @__NO_SIDE_EFFECTS__
function fc(n) {
  let r;
  return () => (r === void 0 && (r = n()), r);
}
const Ht = /* @__NO_SIDE_EFFECTS__ */ (n) => n, Yx = (n, r) => (i) => r(n(i)), ws = (...n) => n.reduce(Yx), hs = /* @__NO_SIDE_EFFECTS__ */ (n, r, i) => {
  const o = r - n;
  return o === 0 ? 1 : (i - n) / o;
};
class dc {
  constructor() {
    this.subscriptions = [];
  }
  add(r) {
    return lc(this.subscriptions, r), () => uc(this.subscriptions, r);
  }
  notify(r, i, o) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1)
        this.subscriptions[0](r, i, o);
      else
        for (let c = 0; c < l; c++) {
          const f = this.subscriptions[c];
          f && f(r, i, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const hn = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, Wt = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3;
function Km(n, r) {
  return r ? n * (1e3 / r) : 0;
}
const Gm = (n, r, i) => (((1 - 3 * i + 3 * r) * n + (3 * i - 6 * r)) * n + 3 * r) * n, Qx = 1e-7, Xx = 12;
function qx(n, r, i, o, l) {
  let c, f, h = 0;
  do
    f = r + (i - r) / 2, c = Gm(f, o, l) - n, c > 0 ? i = f : r = f;
  while (Math.abs(c) > Qx && ++h < Xx);
  return f;
}
function Ss(n, r, i, o) {
  if (n === r && i === o)
    return Ht;
  const l = (c) => qx(c, 0, 1, n, i);
  return (c) => c === 0 || c === 1 ? c : Gm(l(c), r, o);
}
const Ym = (n) => (r) => r <= 0.5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2, Qm = (n) => (r) => 1 - n(1 - r), Xm = /* @__PURE__ */ Ss(0.33, 1.53, 0.69, 0.99), hc = /* @__PURE__ */ Qm(Xm), qm = /* @__PURE__ */ Ym(hc), Zm = (n) => (n *= 2) < 1 ? 0.5 * hc(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))), pc = (n) => 1 - Math.sin(Math.acos(n)), Jm = Qm(pc), ey = Ym(pc), Zx = /* @__PURE__ */ Ss(0.42, 0, 1, 1), Jx = /* @__PURE__ */ Ss(0, 0, 0.58, 1), ty = /* @__PURE__ */ Ss(0.42, 0, 0.58, 1), ew = (n) => Array.isArray(n) && typeof n[0] != "number", ny = (n) => Array.isArray(n) && typeof n[0] == "number", tw = {
  linear: Ht,
  easeIn: Zx,
  easeInOut: ty,
  easeOut: Jx,
  circIn: pc,
  circInOut: ey,
  circOut: Jm,
  backIn: hc,
  backInOut: qm,
  backOut: Xm,
  anticipate: Zm
}, nw = (n) => typeof n == "string", tp = (n) => {
  if (ny(n)) {
    cc(n.length === 4);
    const [r, i, o, l] = n;
    return Ss(r, i, o, l);
  } else if (nw(n))
    return tw[n];
  return n;
}, Lo = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function rw(n, r) {
  let i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), l = !1, c = !1;
  const f = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function p(m) {
    f.has(m) && (g.schedule(m), n()), m(h);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (m, v = !1, x = !1) => {
      const _ = x && l ? i : o;
      return v && f.add(m), _.has(m) || _.add(m), m;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (m) => {
      o.delete(m), f.delete(m);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (m) => {
      if (h = m, l) {
        c = !0;
        return;
      }
      l = !0, [i, o] = [o, i], i.forEach(p), i.clear(), l = !1, c && (c = !1, g.process(m));
    }
  };
  return g;
}
const iw = 40;
function ry(n, r) {
  let i = !1, o = !0;
  const l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, c = () => i = !0, f = Lo.reduce((j, H) => (j[H] = rw(c), j), {}), { setup: h, read: p, resolveKeyframes: g, preUpdate: m, update: v, preRender: x, render: E, postRender: _ } = f, F = () => {
    const j = _n.useManualTiming ? l.timestamp : performance.now();
    i = !1, _n.useManualTiming || (l.delta = o ? 1e3 / 60 : Math.max(Math.min(j - l.timestamp, iw), 1)), l.timestamp = j, l.isProcessing = !0, h.process(l), p.process(l), g.process(l), m.process(l), v.process(l), x.process(l), E.process(l), _.process(l), l.isProcessing = !1, i && r && (o = !1, n(F));
  }, N = () => {
    i = !0, o = !0, l.isProcessing || n(F);
  };
  return { schedule: Lo.reduce((j, H) => {
    const b = f[H];
    return j[H] = (Y, te = !1, J = !1) => (i || N(), b.schedule(Y, te, J)), j;
  }, {}), cancel: (j) => {
    for (let H = 0; H < Lo.length; H++)
      f[Lo[H]].cancel(j);
  }, state: l, steps: f };
}
const { schedule: be, cancel: qn, state: ut, steps: uu } = /* @__PURE__ */ ry(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ht, !0);
let $o;
function sw() {
  $o = void 0;
}
const Ft = {
  now: () => ($o === void 0 && Ft.set(ut.isProcessing || _n.useManualTiming ? ut.timestamp : performance.now()), $o),
  set: (n) => {
    $o = n, queueMicrotask(sw);
  }
}, iy = (n) => (r) => typeof r == "string" && r.startsWith(n), sy = /* @__PURE__ */ iy("--"), ow = /* @__PURE__ */ iy("var(--"), mc = (n) => ow(n) ? aw.test(n.split("/*")[0].trim()) : !1, aw = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, di = {
  test: (n) => typeof n == "number",
  parse: parseFloat,
  transform: (n) => n
}, ps = {
  ...di,
  transform: (n) => Pn(0, 1, n)
}, jo = {
  ...di,
  default: 1
}, us = (n) => Math.round(n * 1e5) / 1e5, yc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function lw(n) {
  return n == null;
}
const uw = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, gc = (n, r) => (i) => !!(typeof i == "string" && uw.test(i) && i.startsWith(n) || r && !lw(i) && Object.prototype.hasOwnProperty.call(i, r)), oy = (n, r, i) => (o) => {
  if (typeof o != "string")
    return o;
  const [l, c, f, h] = o.match(yc);
  return {
    [n]: parseFloat(l),
    [r]: parseFloat(c),
    [i]: parseFloat(f),
    alpha: h !== void 0 ? parseFloat(h) : 1
  };
}, cw = (n) => Pn(0, 255, n), cu = {
  ...di,
  transform: (n) => Math.round(cw(n))
}, yr = {
  test: /* @__PURE__ */ gc("rgb", "red"),
  parse: /* @__PURE__ */ oy("red", "green", "blue"),
  transform: ({ red: n, green: r, blue: i, alpha: o = 1 }) => "rgba(" + cu.transform(n) + ", " + cu.transform(r) + ", " + cu.transform(i) + ", " + us(ps.transform(o)) + ")"
};
function fw(n) {
  let r = "", i = "", o = "", l = "";
  return n.length > 5 ? (r = n.substring(1, 3), i = n.substring(3, 5), o = n.substring(5, 7), l = n.substring(7, 9)) : (r = n.substring(1, 2), i = n.substring(2, 3), o = n.substring(3, 4), l = n.substring(4, 5), r += r, i += i, o += o, l += l), {
    red: parseInt(r, 16),
    green: parseInt(i, 16),
    blue: parseInt(o, 16),
    alpha: l ? parseInt(l, 16) / 255 : 1
  };
}
const Au = {
  test: /* @__PURE__ */ gc("#"),
  parse: fw,
  transform: yr.transform
}, Ts = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
  test: (r) => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
  parse: parseFloat,
  transform: (r) => `${r}${n}`
}), Yn = /* @__PURE__ */ Ts("deg"), pn = /* @__PURE__ */ Ts("%"), pe = /* @__PURE__ */ Ts("px"), dw = /* @__PURE__ */ Ts("vh"), hw = /* @__PURE__ */ Ts("vw"), np = {
  ...pn,
  parse: (n) => pn.parse(n) / 100,
  transform: (n) => pn.transform(n * 100)
}, ii = {
  test: /* @__PURE__ */ gc("hsl", "hue"),
  parse: /* @__PURE__ */ oy("hue", "saturation", "lightness"),
  transform: ({ hue: n, saturation: r, lightness: i, alpha: o = 1 }) => "hsla(" + Math.round(n) + ", " + pn.transform(us(r)) + ", " + pn.transform(us(i)) + ", " + us(ps.transform(o)) + ")"
}, qe = {
  test: (n) => yr.test(n) || Au.test(n) || ii.test(n),
  parse: (n) => yr.test(n) ? yr.parse(n) : ii.test(n) ? ii.parse(n) : Au.parse(n),
  transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? yr.transform(n) : ii.transform(n),
  getAnimatableNone: (n) => {
    const r = qe.parse(n);
    return r.alpha = 0, qe.transform(r);
  }
}, pw = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function mw(n) {
  return isNaN(n) && typeof n == "string" && (n.match(yc)?.length || 0) + (n.match(pw)?.length || 0) > 0;
}
const ay = "number", ly = "color", yw = "var", gw = "var(", rp = "${}", vw = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ms(n) {
  const r = n.toString(), i = [], o = {
    color: [],
    number: [],
    var: []
  }, l = [];
  let c = 0;
  const h = r.replace(vw, (p) => (qe.test(p) ? (o.color.push(c), l.push(ly), i.push(qe.parse(p))) : p.startsWith(gw) ? (o.var.push(c), l.push(yw), i.push(p)) : (o.number.push(c), l.push(ay), i.push(parseFloat(p))), ++c, rp)).split(rp);
  return { values: i, split: h, indexes: o, types: l };
}
function uy(n) {
  return ms(n).values;
}
function cy(n) {
  const { split: r, types: i } = ms(n), o = r.length;
  return (l) => {
    let c = "";
    for (let f = 0; f < o; f++)
      if (c += r[f], l[f] !== void 0) {
        const h = i[f];
        h === ay ? c += us(l[f]) : h === ly ? c += qe.transform(l[f]) : c += l[f];
      }
    return c;
  };
}
const xw = (n) => typeof n == "number" ? 0 : qe.test(n) ? qe.getAnimatableNone(n) : n;
function ww(n) {
  const r = uy(n);
  return cy(n)(r.map(xw));
}
const Zn = {
  test: mw,
  parse: uy,
  createTransformer: cy,
  getAnimatableNone: ww
};
function fu(n, r, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? n + (r - n) * 6 * i : i < 1 / 2 ? r : i < 2 / 3 ? n + (r - n) * (2 / 3 - i) * 6 : n;
}
function Sw({ hue: n, saturation: r, lightness: i, alpha: o }) {
  n /= 360, r /= 100, i /= 100;
  let l = 0, c = 0, f = 0;
  if (!r)
    l = c = f = i;
  else {
    const h = i < 0.5 ? i * (1 + r) : i + r - i * r, p = 2 * i - h;
    l = fu(p, h, n + 1 / 3), c = fu(p, h, n), f = fu(p, h, n - 1 / 3);
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
function qo(n, r) {
  return (i) => i > 0 ? r : n;
}
const Ue = (n, r, i) => n + (r - n) * i, du = (n, r, i) => {
  const o = n * n, l = i * (r * r - o) + o;
  return l < 0 ? 0 : Math.sqrt(l);
}, Tw = [Au, yr, ii], kw = (n) => Tw.find((r) => r.test(n));
function ip(n) {
  const r = kw(n);
  if (!r)
    return !1;
  let i = r.parse(n);
  return r === ii && (i = Sw(i)), i;
}
const sp = (n, r) => {
  const i = ip(n), o = ip(r);
  if (!i || !o)
    return qo(n, r);
  const l = { ...i };
  return (c) => (l.red = du(i.red, o.red, c), l.green = du(i.green, o.green, c), l.blue = du(i.blue, o.blue, c), l.alpha = Ue(i.alpha, o.alpha, c), yr.transform(l));
}, Du = /* @__PURE__ */ new Set(["none", "hidden"]);
function Ew(n, r) {
  return Du.has(n) ? (i) => i <= 0 ? n : r : (i) => i >= 1 ? r : n;
}
function Cw(n, r) {
  return (i) => Ue(n, r, i);
}
function vc(n) {
  return typeof n == "number" ? Cw : typeof n == "string" ? mc(n) ? qo : qe.test(n) ? sp : Aw : Array.isArray(n) ? fy : typeof n == "object" ? qe.test(n) ? sp : Pw : qo;
}
function fy(n, r) {
  const i = [...n], o = i.length, l = n.map((c, f) => vc(c)(c, r[f]));
  return (c) => {
    for (let f = 0; f < o; f++)
      i[f] = l[f](c);
    return i;
  };
}
function Pw(n, r) {
  const i = { ...n, ...r }, o = {};
  for (const l in i)
    n[l] !== void 0 && r[l] !== void 0 && (o[l] = vc(n[l])(n[l], r[l]));
  return (l) => {
    for (const c in o)
      i[c] = o[c](l);
    return i;
  };
}
function _w(n, r) {
  const i = [], o = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < r.values.length; l++) {
    const c = r.types[l], f = n.indexes[c][o[c]], h = n.values[f] ?? 0;
    i[l] = h, o[c]++;
  }
  return i;
}
const Aw = (n, r) => {
  const i = Zn.createTransformer(r), o = ms(n), l = ms(r);
  return o.indexes.var.length === l.indexes.var.length && o.indexes.color.length === l.indexes.color.length && o.indexes.number.length >= l.indexes.number.length ? Du.has(n) && !l.values.length || Du.has(r) && !o.values.length ? Ew(n, r) : ws(fy(_w(o, l), l.values), i) : qo(n, r);
};
function dy(n, r, i) {
  return typeof n == "number" && typeof r == "number" && typeof i == "number" ? Ue(n, r, i) : vc(n)(n, r);
}
const Dw = (n) => {
  const r = ({ timestamp: i }) => n(i);
  return {
    start: (i = !0) => be.update(r, i),
    stop: () => qn(r),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ut.isProcessing ? ut.timestamp : Ft.now()
  };
}, hy = (n, r, i = 10) => {
  let o = "";
  const l = Math.max(Math.round(r / i), 2);
  for (let c = 0; c < l; c++)
    o += Math.round(n(c / (l - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, Zo = 2e4;
function xc(n) {
  let r = 0;
  const i = 50;
  let o = n.next(r);
  for (; !o.done && r < Zo; )
    r += i, o = n.next(r);
  return r >= Zo ? 1 / 0 : r;
}
function Vw(n, r = 100, i) {
  const o = i({ ...n, keyframes: [0, r] }), l = Math.min(xc(o), Zo);
  return {
    type: "keyframes",
    ease: (c) => o.next(l * c).value / r,
    duration: /* @__PURE__ */ Wt(l)
  };
}
const Fw = 5;
function py(n, r, i) {
  const o = Math.max(r - Fw, 0);
  return Km(i - n(o), r - o);
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
}, hu = 1e-3;
function Ow({ duration: n = He.duration, bounce: r = He.bounce, velocity: i = He.velocity, mass: o = He.mass }) {
  let l, c, f = 1 - r;
  f = Pn(He.minDamping, He.maxDamping, f), n = Pn(He.minDuration, He.maxDuration, /* @__PURE__ */ Wt(n)), f < 1 ? (l = (g) => {
    const m = g * f, v = m * n, x = m - i, E = Vu(g, f), _ = Math.exp(-v);
    return hu - x / E * _;
  }, c = (g) => {
    const v = g * f * n, x = v * i + i, E = Math.pow(f, 2) * Math.pow(g, 2) * n, _ = Math.exp(-v), F = Vu(Math.pow(g, 2), f);
    return (-l(g) + hu > 0 ? -1 : 1) * ((x - E) * _) / F;
  }) : (l = (g) => {
    const m = Math.exp(-g * n), v = (g - i) * n + 1;
    return -hu + m * v;
  }, c = (g) => {
    const m = Math.exp(-g * n), v = (i - g) * (n * n);
    return m * v;
  });
  const h = 5 / n, p = Mw(l, c, h);
  if (n = /* @__PURE__ */ hn(n), isNaN(p))
    return {
      stiffness: He.stiffness,
      damping: He.damping,
      duration: n
    };
  {
    const g = Math.pow(p, 2) * o;
    return {
      stiffness: g,
      damping: f * 2 * Math.sqrt(o * g),
      duration: n
    };
  }
}
const Rw = 12;
function Mw(n, r, i) {
  let o = i;
  for (let l = 1; l < Rw; l++)
    o = o - n(o) / r(o);
  return o;
}
function Vu(n, r) {
  return n * Math.sqrt(1 - r * r);
}
const Nw = ["duration", "bounce"], Lw = ["stiffness", "damping", "mass"];
function op(n, r) {
  return r.some((i) => n[i] !== void 0);
}
function jw(n) {
  let r = {
    velocity: He.velocity,
    stiffness: He.stiffness,
    damping: He.damping,
    mass: He.mass,
    isResolvedFromDuration: !1,
    ...n
  };
  if (!op(n, Lw) && op(n, Nw))
    if (n.visualDuration) {
      const i = n.visualDuration, o = 2 * Math.PI / (i * 1.2), l = o * o, c = 2 * Pn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(l);
      r = {
        ...r,
        mass: He.mass,
        stiffness: l,
        damping: c
      };
    } else {
      const i = Ow(n);
      r = {
        ...r,
        ...i,
        mass: He.mass
      }, r.isResolvedFromDuration = !0;
    }
  return r;
}
function Jo(n = He.visualDuration, r = He.bounce) {
  const i = typeof n != "object" ? {
    visualDuration: n,
    keyframes: [0, 1],
    bounce: r
  } : n;
  let { restSpeed: o, restDelta: l } = i;
  const c = i.keyframes[0], f = i.keyframes[i.keyframes.length - 1], h = { done: !1, value: c }, { stiffness: p, damping: g, mass: m, duration: v, velocity: x, isResolvedFromDuration: E } = jw({
    ...i,
    velocity: -/* @__PURE__ */ Wt(i.velocity || 0)
  }), _ = x || 0, F = g / (2 * Math.sqrt(p * m)), N = f - c, O = /* @__PURE__ */ Wt(Math.sqrt(p / m)), R = Math.abs(N) < 5;
  o || (o = R ? He.restSpeed.granular : He.restSpeed.default), l || (l = R ? He.restDelta.granular : He.restDelta.default);
  let j;
  if (F < 1) {
    const b = Vu(O, F);
    j = (Y) => {
      const te = Math.exp(-F * O * Y);
      return f - te * ((_ + F * O * N) / b * Math.sin(b * Y) + N * Math.cos(b * Y));
    };
  } else if (F === 1)
    j = (b) => f - Math.exp(-O * b) * (N + (_ + O * N) * b);
  else {
    const b = O * Math.sqrt(F * F - 1);
    j = (Y) => {
      const te = Math.exp(-F * O * Y), J = Math.min(b * Y, 300);
      return f - te * ((_ + F * O * N) * Math.sinh(J) + b * N * Math.cosh(J)) / b;
    };
  }
  const H = {
    calculatedDuration: E && v || null,
    next: (b) => {
      const Y = j(b);
      if (E)
        h.done = b >= v;
      else {
        let te = b === 0 ? _ : 0;
        F < 1 && (te = b === 0 ? /* @__PURE__ */ hn(_) : py(j, b, Y));
        const J = Math.abs(te) <= o, de = Math.abs(f - Y) <= l;
        h.done = J && de;
      }
      return h.value = h.done ? f : Y, h;
    },
    toString: () => {
      const b = Math.min(xc(H), Zo), Y = hy((te) => H.next(b * te).value, b, 30);
      return b + "ms " + Y;
    },
    toTransition: () => {
    }
  };
  return H;
}
Jo.applyToOptions = (n) => {
  const r = Vw(n, 100, Jo);
  return n.ease = r.ease, n.duration = /* @__PURE__ */ hn(r.duration), n.type = "keyframes", n;
};
function Fu({ keyframes: n, velocity: r = 0, power: i = 0.8, timeConstant: o = 325, bounceDamping: l = 10, bounceStiffness: c = 500, modifyTarget: f, min: h, max: p, restDelta: g = 0.5, restSpeed: m }) {
  const v = n[0], x = {
    done: !1,
    value: v
  }, E = (J) => h !== void 0 && J < h || p !== void 0 && J > p, _ = (J) => h === void 0 ? p : p === void 0 || Math.abs(h - J) < Math.abs(p - J) ? h : p;
  let F = i * r;
  const N = v + F, O = f === void 0 ? N : f(N);
  O !== N && (F = O - v);
  const R = (J) => -F * Math.exp(-J / o), j = (J) => O + R(J), H = (J) => {
    const de = R(J), xe = j(J);
    x.done = Math.abs(de) <= g, x.value = x.done ? O : xe;
  };
  let b, Y;
  const te = (J) => {
    E(x.value) && (b = J, Y = Jo({
      keyframes: [x.value, _(x.value)],
      velocity: py(j, J, x.value),
      // TODO: This should be passing * 1000
      damping: l,
      stiffness: c,
      restDelta: g,
      restSpeed: m
    }));
  };
  return te(0), {
    calculatedDuration: null,
    next: (J) => {
      let de = !1;
      return !Y && b === void 0 && (de = !0, H(J), te(J)), b !== void 0 && J >= b ? Y.next(J - b) : (!de && H(J), x);
    }
  };
}
function Iw(n, r, i) {
  const o = [], l = i || _n.mix || dy, c = n.length - 1;
  for (let f = 0; f < c; f++) {
    let h = l(n[f], n[f + 1]);
    if (r) {
      const p = Array.isArray(r) ? r[f] || Ht : r;
      h = ws(p, h);
    }
    o.push(h);
  }
  return o;
}
function bw(n, r, { clamp: i = !0, ease: o, mixer: l } = {}) {
  const c = n.length;
  if (cc(c === r.length), c === 1)
    return () => r[0];
  if (c === 2 && r[0] === r[1])
    return () => r[1];
  const f = n[0] === n[1];
  n[0] > n[c - 1] && (n = [...n].reverse(), r = [...r].reverse());
  const h = Iw(r, o, l), p = h.length, g = (m) => {
    if (f && m < n[0])
      return r[0];
    let v = 0;
    if (p > 1)
      for (; v < n.length - 2 && !(m < n[v + 1]); v++)
        ;
    const x = /* @__PURE__ */ hs(n[v], n[v + 1], m);
    return h[v](x);
  };
  return i ? (m) => g(Pn(n[0], n[c - 1], m)) : g;
}
function zw(n, r) {
  const i = n[n.length - 1];
  for (let o = 1; o <= r; o++) {
    const l = /* @__PURE__ */ hs(0, r, o);
    n.push(Ue(i, 1, l));
  }
}
function Bw(n) {
  const r = [0];
  return zw(r, n.length - 1), r;
}
function Uw(n, r) {
  return n.map((i) => i * r);
}
function $w(n, r) {
  return n.map(() => r || ty).splice(0, n.length - 1);
}
function cs({ duration: n = 300, keyframes: r, times: i, ease: o = "easeInOut" }) {
  const l = ew(o) ? o.map(tp) : tp(o), c = {
    done: !1,
    value: r[0]
  }, f = Uw(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === r.length ? i : Bw(r),
    n
  ), h = bw(f, r, {
    ease: Array.isArray(l) ? l : $w(r, l)
  });
  return {
    calculatedDuration: n,
    next: (p) => (c.value = h(p), c.done = p >= n, c)
  };
}
const Ww = (n) => n !== null;
function wc(n, { repeat: r, repeatType: i = "loop" }, o, l = 1) {
  const c = n.filter(Ww), h = l < 0 || r && i !== "loop" && r % 2 === 1 ? 0 : c.length - 1;
  return !h || o === void 0 ? c[h] : o;
}
const Hw = {
  decay: Fu,
  inertia: Fu,
  tween: cs,
  keyframes: cs,
  spring: Jo
};
function my(n) {
  typeof n.type == "string" && (n.type = Hw[n.type]);
}
class Sc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((r) => {
      this.resolve = r;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(r, i) {
    return this.finished.then(r, i);
  }
}
const Kw = (n) => n / 100;
class Tc extends Sc {
  constructor(r) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: i } = this.options;
      i && i.updatedAt !== Ft.now() && this.tick(Ft.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = r, this.initAnimation(), this.play(), r.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: r } = this;
    my(r);
    const { type: i = cs, repeat: o = 0, repeatDelay: l = 0, repeatType: c, velocity: f = 0 } = r;
    let { keyframes: h } = r;
    const p = i || cs;
    p !== cs && typeof h[0] != "number" && (this.mixKeyframes = ws(Kw, dy(h[0], h[1])), h = [0, 100]);
    const g = p({ ...r, keyframes: h });
    c === "mirror" && (this.mirroredGenerator = p({
      ...r,
      keyframes: [...h].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = xc(g));
    const { calculatedDuration: m } = g;
    this.calculatedDuration = m, this.resolvedDuration = m + l, this.totalDuration = this.resolvedDuration * (o + 1) - l, this.generator = g;
  }
  updateTime(r) {
    const i = Math.round(r - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i;
  }
  tick(r, i = !1) {
    const { generator: o, totalDuration: l, mixKeyframes: c, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: p } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: g = 0, keyframes: m, repeat: v, repeatType: x, repeatDelay: E, type: _, onUpdate: F, finalKeyframe: N } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, r) : this.speed < 0 && (this.startTime = Math.min(r - l / this.speed, this.startTime)), i ? this.currentTime = r : this.updateTime(r);
    const O = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1), R = this.playbackSpeed >= 0 ? O < 0 : O > l;
    this.currentTime = Math.max(O, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let j = this.currentTime, H = o;
    if (v) {
      const J = Math.min(this.currentTime, l) / h;
      let de = Math.floor(J), xe = J % 1;
      !xe && J >= 1 && (xe = 1), xe === 1 && de--, de = Math.min(de, v + 1), de % 2 && (x === "reverse" ? (xe = 1 - xe, E && (xe -= E / h)) : x === "mirror" && (H = f)), j = Pn(0, 1, xe) * h;
    }
    const b = R ? { done: !1, value: m[0] } : H.next(j);
    c && (b.value = c(b.value));
    let { done: Y } = b;
    !R && p !== null && (Y = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const te = this.holdTime === null && (this.state === "finished" || this.state === "running" && Y);
    return te && _ !== Fu && (b.value = wc(m, this.options, N, this.speed)), F && F(b.value), te && this.finish(), b;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(r, i) {
    return this.finished.then(r, i);
  }
  get duration() {
    return /* @__PURE__ */ Wt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Wt(r);
  }
  get time() {
    return /* @__PURE__ */ Wt(this.currentTime);
  }
  set time(r) {
    r = /* @__PURE__ */ hn(r), this.currentTime = r, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = r : this.driver && (this.startTime = this.driver.now() - r / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(r) {
    this.updateTime(Ft.now());
    const i = this.playbackSpeed !== r;
    this.playbackSpeed = r, i && (this.time = /* @__PURE__ */ Wt(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: r = Dw, startTime: i } = this.options;
    this.driver || (this.driver = r((l) => this.tick(l))), this.options.onPlay?.();
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = i ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ft.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(r) {
    return this.startTime = 0, this.tick(r, !0);
  }
  attachTimeline(r) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), r.observe(this);
  }
}
function Gw(n) {
  for (let r = 1; r < n.length; r++)
    n[r] ?? (n[r] = n[r - 1]);
}
const gr = (n) => n * 180 / Math.PI, Ou = (n) => {
  const r = gr(Math.atan2(n[1], n[0]));
  return Ru(r);
}, Yw = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
  rotate: Ou,
  rotateZ: Ou,
  skewX: (n) => gr(Math.atan(n[1])),
  skewY: (n) => gr(Math.atan(n[2])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, Ru = (n) => (n = n % 360, n < 0 && (n += 360), n), ap = Ou, lp = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), up = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), Qw = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: lp,
  scaleY: up,
  scale: (n) => (lp(n) + up(n)) / 2,
  rotateX: (n) => Ru(gr(Math.atan2(n[6], n[5]))),
  rotateY: (n) => Ru(gr(Math.atan2(-n[2], n[0]))),
  rotateZ: ap,
  rotate: ap,
  skewX: (n) => gr(Math.atan(n[4])),
  skewY: (n) => gr(Math.atan(n[1])),
  skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Mu(n) {
  return n.includes("scale") ? 1 : 0;
}
function Nu(n, r) {
  if (!n || n === "none")
    return Mu(r);
  const i = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, l;
  if (i)
    o = Qw, l = i;
  else {
    const h = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = Yw, l = h;
  }
  if (!l)
    return Mu(r);
  const c = o[r], f = l[1].split(",").map(qw);
  return typeof c == "function" ? c(f) : f[c];
}
const Xw = (n, r) => {
  const { transform: i = "none" } = getComputedStyle(n);
  return Nu(i, r);
};
function qw(n) {
  return parseFloat(n.trim());
}
const hi = [
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
], pi = new Set(hi), cp = (n) => n === di || n === pe, Zw = /* @__PURE__ */ new Set(["x", "y", "z"]), Jw = hi.filter((n) => !Zw.has(n));
function e1(n) {
  const r = [];
  return Jw.forEach((i) => {
    const o = n.getValue(i);
    o !== void 0 && (r.push([i, o.get()]), o.set(i.startsWith("scale") ? 1 : 0));
  }), r;
}
const xr = {
  // Dimensions
  width: ({ x: n }, { paddingLeft: r = "0", paddingRight: i = "0" }) => n.max - n.min - parseFloat(r) - parseFloat(i),
  height: ({ y: n }, { paddingTop: r = "0", paddingBottom: i = "0" }) => n.max - n.min - parseFloat(r) - parseFloat(i),
  top: (n, { top: r }) => parseFloat(r),
  left: (n, { left: r }) => parseFloat(r),
  bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
  right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
  // Transform
  x: (n, { transform: r }) => Nu(r, "x"),
  y: (n, { transform: r }) => Nu(r, "y")
};
xr.translateX = xr.x;
xr.translateY = xr.y;
const wr = /* @__PURE__ */ new Set();
let Lu = !1, ju = !1, Iu = !1;
function yy() {
  if (ju) {
    const n = Array.from(wr).filter((o) => o.needsMeasurement), r = new Set(n.map((o) => o.element)), i = /* @__PURE__ */ new Map();
    r.forEach((o) => {
      const l = e1(o);
      l.length && (i.set(o, l), o.render());
    }), n.forEach((o) => o.measureInitialState()), r.forEach((o) => {
      o.render();
      const l = i.get(o);
      l && l.forEach(([c, f]) => {
        o.getValue(c)?.set(f);
      });
    }), n.forEach((o) => o.measureEndState()), n.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  ju = !1, Lu = !1, wr.forEach((n) => n.complete(Iu)), wr.clear();
}
function gy() {
  wr.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (ju = !0);
  });
}
function t1() {
  Iu = !0, gy(), yy(), Iu = !1;
}
class kc {
  constructor(r, i, o, l, c, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...r], this.onComplete = i, this.name = o, this.motionValue = l, this.element = c, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (wr.add(this), Lu || (Lu = !0, be.read(gy), be.resolveKeyframes(yy))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, name: i, element: o, motionValue: l } = this;
    if (r[0] === null) {
      const c = l?.get(), f = r[r.length - 1];
      if (c !== void 0)
        r[0] = c;
      else if (o && i) {
        const h = o.readValue(i, f);
        h != null && (r[0] = h);
      }
      r[0] === void 0 && (r[0] = f), l && c === void 0 && l.set(r[0]);
    }
    Gw(r);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(r = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r), wr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (wr.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const n1 = (n) => n.startsWith("--");
function r1(n, r, i) {
  n1(r) ? n.style.setProperty(r, i) : n.style[r] = i;
}
const i1 = /* @__PURE__ */ fc(() => window.ScrollTimeline !== void 0), s1 = {};
function o1(n, r) {
  const i = /* @__PURE__ */ fc(n);
  return () => s1[r] ?? i();
}
const vy = /* @__PURE__ */ o1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), os = ([n, r, i, o]) => `cubic-bezier(${n}, ${r}, ${i}, ${o})`, fp = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ os([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ os([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ os([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ os([0.33, 1.53, 0.69, 0.99])
};
function xy(n, r) {
  if (n)
    return typeof n == "function" ? vy() ? hy(n, r) : "ease-out" : ny(n) ? os(n) : Array.isArray(n) ? n.map((i) => xy(i, r) || fp.easeOut) : fp[n];
}
function a1(n, r, i, { delay: o = 0, duration: l = 300, repeat: c = 0, repeatType: f = "loop", ease: h = "easeOut", times: p } = {}, g = void 0) {
  const m = {
    [r]: i
  };
  p && (m.offset = p);
  const v = xy(h, l);
  Array.isArray(v) && (m.easing = v);
  const x = {
    delay: o,
    duration: l,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: c + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return g && (x.pseudoElement = g), n.animate(m, x);
}
function wy(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function l1({ type: n, ...r }) {
  return wy(n) && vy() ? n.applyToOptions(r) : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r);
}
class u1 extends Sc {
  constructor(r) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !r)
      return;
    const { element: i, name: o, keyframes: l, pseudoElement: c, allowFlatten: f = !1, finalKeyframe: h, onComplete: p } = r;
    this.isPseudoElement = !!c, this.allowFlatten = f, this.options = r, cc(typeof r.type != "string");
    const g = l1(r);
    this.animation = a1(i, o, l, g, c), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !c) {
        const m = wc(l, this.options, h, this.speed);
        this.updateMotionValue ? this.updateMotionValue(m) : r1(i, o, m), this.animation.cancel();
      }
      p?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: r } = this;
    r === "idle" || r === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const r = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Wt(Number(r));
  }
  get iterationDuration() {
    const { delay: r = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Wt(r);
  }
  get time() {
    return /* @__PURE__ */ Wt(Number(this.animation.currentTime) || 0);
  }
  set time(r) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ hn(r);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(r) {
    r < 0 && (this.finishedTime = null), this.animation.playbackRate = r;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(r) {
    this.animation.startTime = r;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: r, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, r && i1() ? (this.animation.timeline = r, Ht) : i(this);
  }
}
const Sy = {
  anticipate: Zm,
  backInOut: qm,
  circInOut: ey
};
function c1(n) {
  return n in Sy;
}
function f1(n) {
  typeof n.ease == "string" && c1(n.ease) && (n.ease = Sy[n.ease]);
}
const dp = 10;
class d1 extends u1 {
  constructor(r) {
    f1(r), my(r), super(r), r.startTime && (this.startTime = r.startTime), this.options = r;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(r) {
    const { motionValue: i, onUpdate: o, onComplete: l, element: c, ...f } = this.options;
    if (!i)
      return;
    if (r !== void 0) {
      i.set(r);
      return;
    }
    const h = new Tc({
      ...f,
      autoplay: !1
    }), p = /* @__PURE__ */ hn(this.finishedTime ?? this.time);
    i.setWithVelocity(h.sample(p - dp).value, h.sample(p).value, dp), h.stop();
  }
}
const hp = (n, r) => r === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && // It's animatable if we have a string
(Zn.test(n) || n === "0") && // And it contains numbers and/or colors
!n.startsWith("url("));
function h1(n) {
  const r = n[0];
  if (n.length === 1)
    return !0;
  for (let i = 0; i < n.length; i++)
    if (n[i] !== r)
      return !0;
}
function p1(n, r, i, o) {
  const l = n[0];
  if (l === null)
    return !1;
  if (r === "display" || r === "visibility")
    return !0;
  const c = n[n.length - 1], f = hp(l, r), h = hp(c, r);
  return !f || !h ? !1 : h1(n) || (i === "spring" || wy(i)) && o;
}
function bu(n) {
  n.duration = 0, n.type = "keyframes";
}
const m1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), y1 = /* @__PURE__ */ fc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function g1(n) {
  const { motionValue: r, name: i, repeatDelay: o, repeatType: l, damping: c, type: f } = n;
  if (!(r?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: p, transformTemplate: g } = r.owner.getProps();
  return y1() && i && m1.has(i) && (i !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !o && l !== "mirror" && c !== 0 && f !== "inertia";
}
const v1 = 40;
class x1 extends Sc {
  constructor({ autoplay: r = !0, delay: i = 0, type: o = "keyframes", repeat: l = 0, repeatDelay: c = 0, repeatType: f = "loop", keyframes: h, name: p, motionValue: g, element: m, ...v }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ft.now();
    const x = {
      autoplay: r,
      delay: i,
      type: o,
      repeat: l,
      repeatDelay: c,
      repeatType: f,
      name: p,
      motionValue: g,
      element: m,
      ...v
    }, E = m?.KeyframeResolver || kc;
    this.keyframeResolver = new E(h, (_, F, N) => this.onKeyframesResolved(_, F, x, !N), p, g, m), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(r, i, o, l) {
    this.keyframeResolver = void 0;
    const { name: c, type: f, velocity: h, delay: p, isHandoff: g, onUpdate: m } = o;
    this.resolvedAt = Ft.now(), p1(r, c, f, h) || ((_n.instantAnimations || !p) && m?.(wc(r, o, i)), r[0] = r[r.length - 1], bu(o), o.repeat = 0);
    const x = {
      startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > v1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: i,
      ...o,
      keyframes: r
    }, E = !g && g1(x) ? new d1({
      ...x,
      element: x.motionValue.owner.current
    }) : new Tc(x);
    E.finished.then(() => this.notifyFinished()).catch(Ht), this.pendingTimeline && (this.stopTimeline = E.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = E;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(r, i) {
    return this.finished.finally(r).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), t1()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(r) {
    this.animation.time = r;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(r) {
    this.animation.speed = r;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(r) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(r) : this.pendingTimeline = r, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const w1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function S1(n) {
  const r = w1.exec(n);
  if (!r)
    return [,];
  const [, i, o, l] = r;
  return [`--${i ?? o}`, l];
}
function Ty(n, r, i = 1) {
  const [o, l] = S1(n);
  if (!o)
    return;
  const c = window.getComputedStyle(r).getPropertyValue(o);
  if (c) {
    const f = c.trim();
    return $m(f) ? parseFloat(f) : f;
  }
  return mc(l) ? Ty(l, r, i + 1) : l;
}
function Ec(n, r) {
  return n?.[r] ?? n?.default ?? n;
}
const ky = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...hi
]), T1 = {
  test: (n) => n === "auto",
  parse: (n) => n
}, Ey = (n) => (r) => r.test(n), Cy = [di, pe, pn, Yn, hw, dw, T1], pp = (n) => Cy.find(Ey(n));
function k1(n) {
  return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Hm(n) : !0;
}
const E1 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function C1(n) {
  const [r, i] = n.slice(0, -1).split("(");
  if (r === "drop-shadow")
    return n;
  const [o] = i.match(yc) || [];
  if (!o)
    return n;
  const l = i.replace(o, "");
  let c = E1.has(r) ? 1 : 0;
  return o !== i && (c *= 100), r + "(" + c + l + ")";
}
const P1 = /\b([a-z-]*)\(.*?\)/gu, zu = {
  ...Zn,
  getAnimatableNone: (n) => {
    const r = n.match(P1);
    return r ? r.map(C1).join(" ") : n;
  }
}, mp = {
  ...di,
  transform: Math.round
}, _1 = {
  rotate: Yn,
  rotateX: Yn,
  rotateY: Yn,
  rotateZ: Yn,
  scale: jo,
  scaleX: jo,
  scaleY: jo,
  scaleZ: jo,
  skew: Yn,
  skewX: Yn,
  skewY: Yn,
  distance: pe,
  translateX: pe,
  translateY: pe,
  translateZ: pe,
  x: pe,
  y: pe,
  z: pe,
  perspective: pe,
  transformPerspective: pe,
  opacity: ps,
  originX: np,
  originY: np,
  originZ: pe
}, Cc = {
  // Border props
  borderWidth: pe,
  borderTopWidth: pe,
  borderRightWidth: pe,
  borderBottomWidth: pe,
  borderLeftWidth: pe,
  borderRadius: pe,
  radius: pe,
  borderTopLeftRadius: pe,
  borderTopRightRadius: pe,
  borderBottomRightRadius: pe,
  borderBottomLeftRadius: pe,
  // Positioning props
  width: pe,
  maxWidth: pe,
  height: pe,
  maxHeight: pe,
  top: pe,
  right: pe,
  bottom: pe,
  left: pe,
  // Spacing props
  padding: pe,
  paddingTop: pe,
  paddingRight: pe,
  paddingBottom: pe,
  paddingLeft: pe,
  margin: pe,
  marginTop: pe,
  marginRight: pe,
  marginBottom: pe,
  marginLeft: pe,
  // Misc
  backgroundPositionX: pe,
  backgroundPositionY: pe,
  ..._1,
  zIndex: mp,
  // SVG
  fillOpacity: ps,
  strokeOpacity: ps,
  numOctaves: mp
}, A1 = {
  ...Cc,
  // Color props
  color: qe,
  backgroundColor: qe,
  outlineColor: qe,
  fill: qe,
  stroke: qe,
  // Border props
  borderColor: qe,
  borderTopColor: qe,
  borderRightColor: qe,
  borderBottomColor: qe,
  borderLeftColor: qe,
  filter: zu,
  WebkitFilter: zu
}, Py = (n) => A1[n];
function _y(n, r) {
  let i = Py(n);
  return i !== zu && (i = Zn), i.getAnimatableNone ? i.getAnimatableNone(r) : void 0;
}
const D1 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function V1(n, r, i) {
  let o = 0, l;
  for (; o < n.length && !l; ) {
    const c = n[o];
    typeof c == "string" && !D1.has(c) && ms(c).values.length && (l = n[o]), o++;
  }
  if (l && i)
    for (const c of r)
      n[c] = _y(i, l);
}
class F1 extends kc {
  constructor(r, i, o, l, c) {
    super(r, i, o, l, c, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: r, element: i, name: o } = this;
    if (!i || !i.current)
      return;
    super.readKeyframes();
    for (let p = 0; p < r.length; p++) {
      let g = r[p];
      if (typeof g == "string" && (g = g.trim(), mc(g))) {
        const m = Ty(g, i.current);
        m !== void 0 && (r[p] = m), p === r.length - 1 && (this.finalKeyframe = g);
      }
    }
    if (this.resolveNoneKeyframes(), !ky.has(o) || r.length !== 2)
      return;
    const [l, c] = r, f = pp(l), h = pp(c);
    if (f !== h)
      if (cp(f) && cp(h))
        for (let p = 0; p < r.length; p++) {
          const g = r[p];
          typeof g == "string" && (r[p] = parseFloat(g));
        }
      else xr[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: r, name: i } = this, o = [];
    for (let l = 0; l < r.length; l++)
      (r[l] === null || k1(r[l])) && o.push(l);
    o.length && V1(r, o, i);
  }
  measureInitialState() {
    const { element: r, unresolvedKeyframes: i, name: o } = this;
    if (!r || !r.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = xr[o](r.measureViewportBox(), window.getComputedStyle(r.current)), i[0] = this.measuredOrigin;
    const l = i[i.length - 1];
    l !== void 0 && r.getValue(o, l).jump(l, !1);
  }
  measureEndState() {
    const { element: r, name: i, unresolvedKeyframes: o } = this;
    if (!r || !r.current)
      return;
    const l = r.getValue(i);
    l && l.jump(this.measuredOrigin, !1);
    const c = o.length - 1, f = o[c];
    o[c] = xr[i](r.measureViewportBox(), window.getComputedStyle(r.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), this.removedTransforms?.length && this.removedTransforms.forEach(([h, p]) => {
      r.getValue(h).set(p);
    }), this.resolveNoneKeyframes();
  }
}
function O1(n, r, i) {
  if (n instanceof EventTarget)
    return [n];
  if (typeof n == "string") {
    let o = document;
    const l = i?.[n] ?? o.querySelectorAll(n);
    return l ? Array.from(l) : [];
  }
  return Array.from(n);
}
const Ay = (n, r) => r && typeof n == "number" ? r.transform(n) : n;
function Dy(n) {
  return Wm(n) && "offsetHeight" in n;
}
const yp = 30, R1 = (n) => !isNaN(parseFloat(n));
class M1 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(r, i = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      const l = Ft.now();
      if (this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const c of this.dependents)
          c.dirty();
    }, this.hasAnimated = !1, this.setCurrent(r), this.owner = i.owner;
  }
  setCurrent(r) {
    this.current = r, this.updatedAt = Ft.now(), this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = R1(this.current));
  }
  setPrevFrameValue(r = this.current) {
    this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt;
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
  onChange(r) {
    return this.on("change", r);
  }
  on(r, i) {
    this.events[r] || (this.events[r] = new dc());
    const o = this.events[r].add(i);
    return r === "change" ? () => {
      o(), be.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const r in this.events)
      this.events[r].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(r, i) {
    this.passiveEffect = r, this.stopPassiveEffect = i;
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
  set(r) {
    this.passiveEffect ? this.passiveEffect(r, this.updateAndNotify) : this.updateAndNotify(r);
  }
  setWithVelocity(r, i, o) {
    this.set(i), this.prev = void 0, this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(r, i = !0) {
    this.updateAndNotify(r), this.prev = r, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(r) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(r);
  }
  removeDependent(r) {
    this.dependents && this.dependents.delete(r);
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
    const r = Ft.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > yp)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, yp);
    return Km(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
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
   */
  start(r) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = r(i), this.events.animationStart && this.events.animationStart.notify();
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
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ci(n, r) {
  return new M1(n, r);
}
const { schedule: Pc } = /* @__PURE__ */ ry(queueMicrotask, !1), en = {
  x: !1,
  y: !1
};
function Vy() {
  return en.x || en.y;
}
function N1(n) {
  return n === "x" || n === "y" ? en[n] ? null : (en[n] = !0, () => {
    en[n] = !1;
  }) : en.x || en.y ? null : (en.x = en.y = !0, () => {
    en.x = en.y = !1;
  });
}
function Fy(n, r) {
  const i = O1(n), o = new AbortController(), l = {
    passive: !0,
    ...r,
    signal: o.signal
  };
  return [i, l, () => o.abort()];
}
function gp(n) {
  return !(n.pointerType === "touch" || Vy());
}
function L1(n, r, i = {}) {
  const [o, l, c] = Fy(n, i), f = (h) => {
    if (!gp(h))
      return;
    const { target: p } = h, g = r(p, h);
    if (typeof g != "function" || !p)
      return;
    const m = (v) => {
      gp(v) && (g(v), p.removeEventListener("pointerleave", m));
    };
    p.addEventListener("pointerleave", m, l);
  };
  return o.forEach((h) => {
    h.addEventListener("pointerenter", f, l);
  }), c;
}
const Oy = (n, r) => r ? n === r ? !0 : Oy(n, r.parentElement) : !1, _c = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, j1 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function I1(n) {
  return j1.has(n.tagName) || n.tabIndex !== -1;
}
const Wo = /* @__PURE__ */ new WeakSet();
function vp(n) {
  return (r) => {
    r.key === "Enter" && n(r);
  };
}
function pu(n, r) {
  n.dispatchEvent(new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }));
}
const b1 = (n, r) => {
  const i = n.currentTarget;
  if (!i)
    return;
  const o = vp(() => {
    if (Wo.has(i))
      return;
    pu(i, "down");
    const l = vp(() => {
      pu(i, "up");
    }), c = () => pu(i, "cancel");
    i.addEventListener("keyup", l, r), i.addEventListener("blur", c, r);
  });
  i.addEventListener("keydown", o, r), i.addEventListener("blur", () => i.removeEventListener("keydown", o), r);
};
function xp(n) {
  return _c(n) && !Vy();
}
function z1(n, r, i = {}) {
  const [o, l, c] = Fy(n, i), f = (h) => {
    const p = h.currentTarget;
    if (!xp(h))
      return;
    Wo.add(p);
    const g = r(p, h), m = (E, _) => {
      window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", x), Wo.has(p) && Wo.delete(p), xp(E) && typeof g == "function" && g(E, { success: _ });
    }, v = (E) => {
      m(E, p === window || p === document || i.useGlobalTarget || Oy(p, E.target));
    }, x = (E) => {
      m(E, !1);
    };
    window.addEventListener("pointerup", v, l), window.addEventListener("pointercancel", x, l);
  };
  return o.forEach((h) => {
    (i.useGlobalTarget ? window : h).addEventListener("pointerdown", f, l), Dy(h) && (h.addEventListener("focus", (g) => b1(g, l)), !I1(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0));
  }), c;
}
function Ry(n) {
  return Wm(n) && "ownerSVGElement" in n;
}
function B1(n) {
  return Ry(n) && n.tagName === "svg";
}
const pt = (n) => !!(n && n.getVelocity), U1 = [...Cy, qe, Zn], $1 = (n) => U1.find(Ey(n)), Ac = Q.createContext({
  transformPagePoint: (n) => n,
  isStatic: !1,
  reducedMotion: "never"
});
function wp(n, r) {
  if (typeof n == "function")
    return n(r);
  n != null && (n.current = r);
}
function W1(...n) {
  return (r) => {
    let i = !1;
    const o = n.map((l) => {
      const c = wp(l, r);
      return !i && typeof c == "function" && (i = !0), c;
    });
    if (i)
      return () => {
        for (let l = 0; l < o.length; l++) {
          const c = o[l];
          typeof c == "function" ? c() : wp(n[l], null);
        }
      };
  };
}
function H1(...n) {
  return Q.useCallback(W1(...n), n);
}
class K1 extends Q.Component {
  getSnapshotBeforeUpdate(r) {
    const i = this.props.childRef.current;
    if (i && r.isPresent && !this.props.isPresent) {
      const o = i.offsetParent, l = Dy(o) && o.offsetWidth || 0, c = this.props.sizeRef.current;
      c.height = i.offsetHeight || 0, c.width = i.offsetWidth || 0, c.top = i.offsetTop, c.left = i.offsetLeft, c.right = l - c.width - c.left;
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
function G1({ children: n, isPresent: r, anchorX: i, root: o }) {
  const l = Q.useId(), c = Q.useRef(null), f = Q.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: h } = Q.useContext(Ac), p = H1(c, n?.ref);
  return Q.useInsertionEffect(() => {
    const { width: g, height: m, top: v, left: x, right: E } = f.current;
    if (r || !c.current || !g || !m)
      return;
    const _ = i === "left" ? `left: ${x}` : `right: ${E}`;
    c.current.dataset.motionPopId = l;
    const F = document.createElement("style");
    h && (F.nonce = h);
    const N = o ?? document.head;
    return N.appendChild(F), F.sheet && F.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${m}px !important;
            ${_}px !important;
            top: ${v}px !important;
          }
        `), () => {
      N.contains(F) && N.removeChild(F);
    };
  }, [r]), q.jsx(K1, { isPresent: r, childRef: c, sizeRef: f, children: Q.cloneElement(n, { ref: p }) });
}
const Y1 = ({ children: n, initial: r, isPresent: i, onExitComplete: o, custom: l, presenceAffectsLayout: c, mode: f, anchorX: h, root: p }) => {
  const g = oc(Q1), m = Q.useId();
  let v = !0, x = Q.useMemo(() => (v = !1, {
    id: m,
    initial: r,
    isPresent: i,
    custom: l,
    onExitComplete: (E) => {
      g.set(E, !0);
      for (const _ of g.values())
        if (!_)
          return;
      o && o();
    },
    register: (E) => (g.set(E, !1), () => g.delete(E))
  }), [i, g, o]);
  return c && v && (x = { ...x }), Q.useMemo(() => {
    g.forEach((E, _) => g.set(_, !1));
  }, [i]), Q.useEffect(() => {
    !i && !g.size && o && o();
  }, [i]), f === "popLayout" && (n = q.jsx(G1, { isPresent: i, anchorX: h, root: p, children: n })), q.jsx(la.Provider, { value: x, children: n });
};
function Q1() {
  return /* @__PURE__ */ new Map();
}
function My(n = !0) {
  const r = Q.useContext(la);
  if (r === null)
    return [!0, null];
  const { isPresent: i, onExitComplete: o, register: l } = r, c = Q.useId();
  Q.useEffect(() => {
    if (n)
      return l(c);
  }, [n]);
  const f = Q.useCallback(() => n && o && o(c), [c, o, n]);
  return !i && o ? [!1, f] : [!0];
}
const Io = (n) => n.key || "";
function Sp(n) {
  const r = [];
  return Q.Children.forEach(n, (i) => {
    Q.isValidElement(i) && r.push(i);
  }), r;
}
const X1 = ({ children: n, custom: r, initial: i = !0, onExitComplete: o, presenceAffectsLayout: l = !0, mode: c = "sync", propagate: f = !1, anchorX: h = "left", root: p }) => {
  const [g, m] = My(f), v = Q.useMemo(() => Sp(n), [n]), x = f && !g ? [] : v.map(Io), E = Q.useRef(!0), _ = Q.useRef(v), F = oc(() => /* @__PURE__ */ new Map()), [N, O] = Q.useState(v), [R, j] = Q.useState(v);
  Um(() => {
    E.current = !1, _.current = v;
    for (let Y = 0; Y < R.length; Y++) {
      const te = Io(R[Y]);
      x.includes(te) ? F.delete(te) : F.get(te) !== !0 && F.set(te, !1);
    }
  }, [R, x.length, x.join("-")]);
  const H = [];
  if (v !== N) {
    let Y = [...v];
    for (let te = 0; te < R.length; te++) {
      const J = R[te], de = Io(J);
      x.includes(de) || (Y.splice(te, 0, J), H.push(J));
    }
    return c === "wait" && H.length && (Y = H), j(Sp(Y)), O(v), null;
  }
  const { forceRender: b } = Q.useContext(sc);
  return q.jsx(q.Fragment, { children: R.map((Y) => {
    const te = Io(Y), J = f && !g ? !1 : v === R || x.includes(te), de = () => {
      if (F.has(te))
        F.set(te, !0);
      else
        return;
      let xe = !0;
      F.forEach((me) => {
        me || (xe = !1);
      }), xe && (b?.(), j(_.current), f && m?.(), o && o());
    };
    return q.jsx(Y1, { isPresent: J, initial: !E.current || i ? void 0 : !1, custom: r, presenceAffectsLayout: l, mode: c, root: p, onExitComplete: J ? void 0 : de, anchorX: h, children: Y }, te);
  }) });
}, Ny = Q.createContext({ strict: !1 }), Tp = {
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
}, fi = {};
for (const n in Tp)
  fi[n] = {
    isEnabled: (r) => Tp[n].some((i) => !!r[i])
  };
function q1(n) {
  for (const r in n)
    fi[r] = {
      ...fi[r],
      ...n[r]
    };
}
const Z1 = /* @__PURE__ */ new Set([
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
function ea(n) {
  return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || Z1.has(n);
}
let Ly = (n) => !ea(n);
function J1(n) {
  typeof n == "function" && (Ly = (r) => r.startsWith("on") ? !ea(r) : n(r));
}
try {
  J1(require("@emotion/is-prop-valid").default);
} catch {
}
function eS(n, r, i) {
  const o = {};
  for (const l in n)
    l === "values" && typeof n.values == "object" || (Ly(l) || i === !0 && ea(l) || !r && !ea(l) || // If trying to use native HTML drag events, forward drag listeners
    n.draggable && l.startsWith("onDrag")) && (o[l] = n[l]);
  return o;
}
const ua = /* @__PURE__ */ Q.createContext({});
function ca(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function ys(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Dc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Vc = ["initial", ...Dc];
function fa(n) {
  return ca(n.animate) || Vc.some((r) => ys(n[r]));
}
function jy(n) {
  return !!(fa(n) || n.variants);
}
function tS(n, r) {
  if (fa(n)) {
    const { initial: i, animate: o } = n;
    return {
      initial: i === !1 || ys(i) ? i : void 0,
      animate: ys(o) ? o : void 0
    };
  }
  return n.inherit !== !1 ? r : {};
}
function nS(n) {
  const { initial: r, animate: i } = tS(n, Q.useContext(ua));
  return Q.useMemo(() => ({ initial: r, animate: i }), [kp(r), kp(i)]);
}
function kp(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
function Ep(n, r) {
  return r.max === r.min ? 0 : n / (r.max - r.min) * 100;
}
const rs = {
  correct: (n, r) => {
    if (!r.target)
      return n;
    if (typeof n == "string")
      if (pe.test(n))
        n = parseFloat(n);
      else
        return n;
    const i = Ep(n, r.target.x), o = Ep(n, r.target.y);
    return `${i}% ${o}%`;
  }
}, rS = {
  correct: (n, { treeScale: r, projectionDelta: i }) => {
    const o = n, l = Zn.parse(n);
    if (l.length > 5)
      return o;
    const c = Zn.createTransformer(n), f = typeof l[0] != "number" ? 1 : 0, h = i.x.scale * r.x, p = i.y.scale * r.y;
    l[0 + f] /= h, l[1 + f] /= p;
    const g = Ue(h, p, 0.5);
    return typeof l[2 + f] == "number" && (l[2 + f] /= g), typeof l[3 + f] == "number" && (l[3 + f] /= g), c(l);
  }
}, Bu = {
  borderRadius: {
    ...rs,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: rs,
  borderTopRightRadius: rs,
  borderBottomLeftRadius: rs,
  borderBottomRightRadius: rs,
  boxShadow: rS
};
function Iy(n, { layout: r, layoutId: i }) {
  return pi.has(n) || n.startsWith("origin") || (r || i !== void 0) && (!!Bu[n] || n === "opacity");
}
const iS = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, sS = hi.length;
function oS(n, r, i) {
  let o = "", l = !0;
  for (let c = 0; c < sS; c++) {
    const f = hi[c], h = n[f];
    if (h === void 0)
      continue;
    let p = !0;
    if (typeof h == "number" ? p = h === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(h) === 0, !p || i) {
      const g = Ay(h, Cc[f]);
      if (!p) {
        l = !1;
        const m = iS[f] || f;
        o += `${m}(${g}) `;
      }
      i && (r[f] = g);
    }
  }
  return o = o.trim(), i ? o = i(r, l ? "" : o) : l && (o = "none"), o;
}
function Fc(n, r, i) {
  const { style: o, vars: l, transformOrigin: c } = n;
  let f = !1, h = !1;
  for (const p in r) {
    const g = r[p];
    if (pi.has(p)) {
      f = !0;
      continue;
    } else if (sy(p)) {
      l[p] = g;
      continue;
    } else {
      const m = Ay(g, Cc[p]);
      p.startsWith("origin") ? (h = !0, c[p] = m) : o[p] = m;
    }
  }
  if (r.transform || (f || i ? o.transform = oS(r, n.transform, i) : o.transform && (o.transform = "none")), h) {
    const { originX: p = "50%", originY: g = "50%", originZ: m = 0 } = c;
    o.transformOrigin = `${p} ${g} ${m}`;
  }
}
const Oc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function by(n, r, i) {
  for (const o in r)
    !pt(r[o]) && !Iy(o, i) && (n[o] = r[o]);
}
function aS({ transformTemplate: n }, r) {
  return Q.useMemo(() => {
    const i = Oc();
    return Fc(i, r, n), Object.assign({}, i.vars, i.style);
  }, [r]);
}
function lS(n, r) {
  const i = n.style || {}, o = {};
  return by(o, i, n), Object.assign(o, aS(n, r)), o;
}
function uS(n, r) {
  const i = {}, o = lS(n, r);
  return n.drag && n.dragListener !== !1 && (i.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (i.tabIndex = 0), i.style = o, i;
}
const cS = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, fS = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function dS(n, r, i = 1, o = 0, l = !0) {
  n.pathLength = 1;
  const c = l ? cS : fS;
  n[c.offset] = pe.transform(-o);
  const f = pe.transform(r), h = pe.transform(i);
  n[c.array] = `${f} ${h}`;
}
function zy(n, {
  attrX: r,
  attrY: i,
  attrScale: o,
  pathLength: l,
  pathSpacing: c = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...h
}, p, g, m) {
  if (Fc(n, h, g), p) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  n.attrs = n.style, n.style = {};
  const { attrs: v, style: x } = n;
  v.transform && (x.transform = v.transform, delete v.transform), (x.transform || v.transformOrigin) && (x.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), x.transform && (x.transformBox = m?.transformBox ?? "fill-box", delete v.transformBox), r !== void 0 && (v.x = r), i !== void 0 && (v.y = i), o !== void 0 && (v.scale = o), l !== void 0 && dS(v, l, c, f, !1);
}
const By = () => ({
  ...Oc(),
  attrs: {}
}), Uy = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function hS(n, r, i, o) {
  const l = Q.useMemo(() => {
    const c = By();
    return zy(c, r, Uy(o), n.transformTemplate, n.style), {
      ...c.attrs,
      style: { ...c.style }
    };
  }, [r]);
  if (n.style) {
    const c = {};
    by(c, n.style, n), l.style = { ...c, ...l.style };
  }
  return l;
}
const pS = [
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
function Rc(n) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof n != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    n.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(pS.indexOf(n) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(n))
    )
  );
}
function mS(n, r, i, { latestValues: o }, l, c = !1) {
  const h = (Rc(n) ? hS : uS)(r, o, l, n), p = eS(r, typeof n == "string", c), g = n !== Q.Fragment ? { ...p, ...h, ref: i } : {}, { children: m } = r, v = Q.useMemo(() => pt(m) ? m.get() : m, [m]);
  return Q.createElement(n, {
    ...g,
    children: v
  });
}
function Cp(n) {
  const r = [{}, {}];
  return n?.values.forEach((i, o) => {
    r[0][o] = i.get(), r[1][o] = i.getVelocity();
  }), r;
}
function Mc(n, r, i, o) {
  if (typeof r == "function") {
    const [l, c] = Cp(o);
    r = r(i !== void 0 ? i : n.custom, l, c);
  }
  if (typeof r == "string" && (r = n.variants && n.variants[r]), typeof r == "function") {
    const [l, c] = Cp(o);
    r = r(i !== void 0 ? i : n.custom, l, c);
  }
  return r;
}
function Ho(n) {
  return pt(n) ? n.get() : n;
}
function yS({ scrapeMotionValuesFromProps: n, createRenderState: r }, i, o, l) {
  return {
    latestValues: gS(i, o, l, n),
    renderState: r()
  };
}
function gS(n, r, i, o) {
  const l = {}, c = o(n, {});
  for (const x in c)
    l[x] = Ho(c[x]);
  let { initial: f, animate: h } = n;
  const p = fa(n), g = jy(n);
  r && g && !p && n.inherit !== !1 && (f === void 0 && (f = r.initial), h === void 0 && (h = r.animate));
  let m = i ? i.initial === !1 : !1;
  m = m || f === !1;
  const v = m ? h : f;
  if (v && typeof v != "boolean" && !ca(v)) {
    const x = Array.isArray(v) ? v : [v];
    for (let E = 0; E < x.length; E++) {
      const _ = Mc(n, x[E]);
      if (_) {
        const { transitionEnd: F, transition: N, ...O } = _;
        for (const R in O) {
          let j = O[R];
          if (Array.isArray(j)) {
            const H = m ? j.length - 1 : 0;
            j = j[H];
          }
          j !== null && (l[R] = j);
        }
        for (const R in F)
          l[R] = F[R];
      }
    }
  }
  return l;
}
const $y = (n) => (r, i) => {
  const o = Q.useContext(ua), l = Q.useContext(la), c = () => yS(n, r, o, l);
  return i ? c() : oc(c);
};
function Nc(n, r, i) {
  const { style: o } = n, l = {};
  for (const c in o)
    (pt(o[c]) || r.style && pt(r.style[c]) || Iy(c, n) || i?.getValue(c)?.liveStyle !== void 0) && (l[c] = o[c]);
  return l;
}
const vS = /* @__PURE__ */ $y({
  scrapeMotionValuesFromProps: Nc,
  createRenderState: Oc
});
function Wy(n, r, i) {
  const o = Nc(n, r, i);
  for (const l in n)
    if (pt(n[l]) || pt(r[l])) {
      const c = hi.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      o[c] = n[l];
    }
  return o;
}
const xS = /* @__PURE__ */ $y({
  scrapeMotionValuesFromProps: Wy,
  createRenderState: By
}), wS = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function si(n) {
  return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function SS(n, r, i) {
  return Q.useCallback(
    (o) => {
      o && n.onMount && n.onMount(o), r && (o ? r.mount(o) : r.unmount()), i && (typeof i == "function" ? i(o) : si(i) && (i.current = o));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [r]
  );
}
const Lc = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), TS = "framerAppearId", Hy = "data-" + Lc(TS), Ky = Q.createContext({});
function kS(n, r, i, o, l) {
  const { visualElement: c } = Q.useContext(ua), f = Q.useContext(Ny), h = Q.useContext(la), p = Q.useContext(Ac).reducedMotion, g = Q.useRef(null);
  o = o || f.renderer, !g.current && o && (g.current = o(n, {
    visualState: r,
    parent: c,
    props: i,
    presenceContext: h,
    blockInitialAnimation: h ? h.initial === !1 : !1,
    reducedMotionConfig: p
  }));
  const m = g.current, v = Q.useContext(Ky);
  m && !m.projection && l && (m.type === "html" || m.type === "svg") && ES(g.current, i, l, v);
  const x = Q.useRef(!1);
  Q.useInsertionEffect(() => {
    m && x.current && m.update(i, h);
  });
  const E = i[Hy], _ = Q.useRef(!!E && !window.MotionHandoffIsComplete?.(E) && window.MotionHasOptimisedAnimation?.(E));
  return Um(() => {
    m && (x.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), _.current && m.animationState && m.animationState.animateChanges());
  }), Q.useEffect(() => {
    m && (!_.current && m.animationState && m.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(E);
    }), _.current = !1), m.enteringChildren = void 0);
  }), m;
}
function ES(n, r, i, o) {
  const { layoutId: l, layout: c, drag: f, dragConstraints: h, layoutScroll: p, layoutRoot: g, layoutCrossfade: m } = r;
  n.projection = new i(n.latestValues, r["data-framer-portal-id"] ? void 0 : Gy(n.parent)), n.projection.setOptions({
    layoutId: l,
    layout: c,
    alwaysMeasureLayout: !!f || h && si(h),
    visualElement: n,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof c == "string" ? c : "both",
    initialPromotionConfig: o,
    crossfade: m,
    layoutScroll: p,
    layoutRoot: g
  });
}
function Gy(n) {
  if (n)
    return n.options.allowProjection !== !1 ? n.projection : Gy(n.parent);
}
function mu(n, { forwardMotionProps: r = !1 } = {}, i, o) {
  i && q1(i);
  const l = Rc(n) ? xS : vS;
  function c(h, p) {
    let g;
    const m = {
      ...Q.useContext(Ac),
      ...h,
      layoutId: CS(h)
    }, { isStatic: v } = m, x = nS(h), E = l(h, v);
    if (!v && ac) {
      PS();
      const _ = _S(m);
      g = _.MeasureLayout, x.visualElement = kS(n, E, m, o, _.ProjectionNode);
    }
    return q.jsxs(ua.Provider, { value: x, children: [g && x.visualElement ? q.jsx(g, { visualElement: x.visualElement, ...m }) : null, mS(n, h, SS(E, x.visualElement, p), E, v, r)] });
  }
  c.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const f = Q.forwardRef(c);
  return f[wS] = n, f;
}
function CS({ layoutId: n }) {
  const r = Q.useContext(sc).id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function PS(n, r) {
  Q.useContext(Ny).strict;
}
function _S(n) {
  const { drag: r, layout: i } = fi;
  if (!r && !i)
    return {};
  const o = { ...r, ...i };
  return {
    MeasureLayout: r?.isEnabled(n) || i?.isEnabled(n) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode
  };
}
function AS(n, r) {
  if (typeof Proxy > "u")
    return mu;
  const i = /* @__PURE__ */ new Map(), o = (c, f) => mu(c, f, n, r), l = (c, f) => o(c, f);
  return new Proxy(l, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (c, f) => f === "create" ? o : (i.has(f) || i.set(f, mu(f, void 0, n, r)), i.get(f))
  });
}
function Yy({ top: n, left: r, right: i, bottom: o }) {
  return {
    x: { min: r, max: i },
    y: { min: n, max: o }
  };
}
function DS({ x: n, y: r }) {
  return { top: r.min, right: n.max, bottom: r.max, left: n.min };
}
function VS(n, r) {
  if (!r)
    return n;
  const i = r({ x: n.left, y: n.top }), o = r({ x: n.right, y: n.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: o.y,
    right: o.x
  };
}
function yu(n) {
  return n === void 0 || n === 1;
}
function Uu({ scale: n, scaleX: r, scaleY: i }) {
  return !yu(n) || !yu(r) || !yu(i);
}
function pr(n) {
  return Uu(n) || Qy(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function Qy(n) {
  return Pp(n.x) || Pp(n.y);
}
function Pp(n) {
  return n && n !== "0%";
}
function ta(n, r, i) {
  const o = n - i, l = r * o;
  return i + l;
}
function _p(n, r, i, o, l) {
  return l !== void 0 && (n = ta(n, l, o)), ta(n, i, o) + r;
}
function $u(n, r = 0, i = 1, o, l) {
  n.min = _p(n.min, r, i, o, l), n.max = _p(n.max, r, i, o, l);
}
function Xy(n, { x: r, y: i }) {
  $u(n.x, r.translate, r.scale, r.originPoint), $u(n.y, i.translate, i.scale, i.originPoint);
}
const Ap = 0.999999999999, Dp = 1.0000000000001;
function FS(n, r, i, o = !1) {
  const l = i.length;
  if (!l)
    return;
  r.x = r.y = 1;
  let c, f;
  for (let h = 0; h < l; h++) {
    c = i[h], f = c.projectionDelta;
    const { visualElement: p } = c.options;
    p && p.props.style && p.props.style.display === "contents" || (o && c.options.layoutScroll && c.scroll && c !== c.root && ai(n, {
      x: -c.scroll.offset.x,
      y: -c.scroll.offset.y
    }), f && (r.x *= f.x.scale, r.y *= f.y.scale, Xy(n, f)), o && pr(c.latestValues) && ai(n, c.latestValues));
  }
  r.x < Dp && r.x > Ap && (r.x = 1), r.y < Dp && r.y > Ap && (r.y = 1);
}
function oi(n, r) {
  n.min = n.min + r, n.max = n.max + r;
}
function Vp(n, r, i, o, l = 0.5) {
  const c = Ue(n.min, n.max, l);
  $u(n, r, i, c, o);
}
function ai(n, r) {
  Vp(n.x, r.x, r.scaleX, r.scale, r.originX), Vp(n.y, r.y, r.scaleY, r.scale, r.originY);
}
function qy(n, r) {
  return Yy(VS(n.getBoundingClientRect(), r));
}
function OS(n, r, i) {
  const o = qy(n, i), { scroll: l } = r;
  return l && (oi(o.x, l.offset.x), oi(o.y, l.offset.y)), o;
}
const Fp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), li = () => ({
  x: Fp(),
  y: Fp()
}), Op = () => ({ min: 0, max: 0 }), tt = () => ({
  x: Op(),
  y: Op()
}), Wu = { current: null }, Zy = { current: !1 };
function RS() {
  if (Zy.current = !0, !!ac)
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"), r = () => Wu.current = n.matches;
      n.addEventListener("change", r), r();
    } else
      Wu.current = !1;
}
const MS = /* @__PURE__ */ new WeakMap();
function NS(n, r, i) {
  for (const o in r) {
    const l = r[o], c = i[o];
    if (pt(l))
      n.addValue(o, l);
    else if (pt(c))
      n.addValue(o, ci(l, { owner: n }));
    else if (c !== l)
      if (n.hasValue(o)) {
        const f = n.getValue(o);
        f.liveStyle === !0 ? f.jump(l) : f.hasAnimated || f.set(l);
      } else {
        const f = n.getStaticValue(o);
        n.addValue(o, ci(f !== void 0 ? f : l, { owner: n }));
      }
  }
  for (const o in i)
    r[o] === void 0 && n.removeValue(o);
  return r;
}
const Rp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class LS {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(r, i, o) {
    return {};
  }
  constructor({ parent: r, props: i, presenceContext: o, reducedMotionConfig: l, blockInitialAnimation: c, visualState: f }, h = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = kc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = Ft.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, be.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: g } = f;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = i.initial ? { ...p } : {}, this.renderState = g, this.parent = r, this.props = i, this.presenceContext = o, this.depth = r ? r.depth + 1 : 0, this.reducedMotionConfig = l, this.options = h, this.blockInitialAnimation = !!c, this.isControllingVariants = fa(i), this.isVariantNode = jy(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(r && r.current);
    const { willChange: m, ...v } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const x in v) {
      const E = v[x];
      p[x] !== void 0 && pt(E) && E.set(p[x]);
    }
  }
  mount(r) {
    this.current = r, MS.set(r, this), this.projection && !this.projection.instance && this.projection.mount(r), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, o) => this.bindToMotionValue(o, i)), Zy.current || RS(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Wu.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), qn(this.notifyUpdate), qn(this.render), this.valueSubscriptions.forEach((r) => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const r in this.events)
      this.events[r].clear();
    for (const r in this.features) {
      const i = this.features[r];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(r) {
    this.children.add(r), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(r);
  }
  removeChild(r) {
    this.children.delete(r), this.enteringChildren && this.enteringChildren.delete(r);
  }
  bindToMotionValue(r, i) {
    this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
    const o = pi.has(r);
    o && this.onBindTransform && this.onBindTransform();
    const l = i.on("change", (f) => {
      this.latestValues[r] = f, this.props.onUpdate && be.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let c;
    window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, r, i)), this.valueSubscriptions.set(r, () => {
      l(), c && c(), i.owner && i.stop();
    });
  }
  sortNodePosition(r) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== r.type ? 0 : this.sortInstanceNodePosition(this.current, r.current);
  }
  updateFeatures() {
    let r = "animation";
    for (r in fi) {
      const i = fi[r];
      if (!i)
        continue;
      const { isEnabled: o, Feature: l } = i;
      if (!this.features[r] && l && o(this.props) && (this.features[r] = new l(this)), this.features[r]) {
        const c = this.features[r];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tt();
  }
  getStaticValue(r) {
    return this.latestValues[r];
  }
  setStaticValue(r, i) {
    this.latestValues[r] = i;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(r, i) {
    (r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = r, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let o = 0; o < Rp.length; o++) {
      const l = Rp[o];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
      const c = "on" + l, f = r[c];
      f && (this.propEventSubscriptions[l] = this.on(l, f));
    }
    this.prevMotionValues = NS(this, this.scrapeMotionValuesFromProps(r, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(r) {
    return this.props.variants ? this.props.variants[r] : void 0;
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
  addVariantChild(r) {
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(r), () => i.variantChildren.delete(r);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(r, i) {
    const o = this.values.get(r);
    i !== o && (o && this.removeValue(r), this.bindToMotionValue(r, i), this.values.set(r, i), this.latestValues[r] = i.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(r) {
    this.values.delete(r);
    const i = this.valueSubscriptions.get(r);
    i && (i(), this.valueSubscriptions.delete(r)), delete this.latestValues[r], this.removeValueFromRenderState(r, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(r) {
    return this.values.has(r);
  }
  getValue(r, i) {
    if (this.props.values && this.props.values[r])
      return this.props.values[r];
    let o = this.values.get(r);
    return o === void 0 && i !== void 0 && (o = ci(i === null ? void 0 : i, { owner: this }), this.addValue(r, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(r, i) {
    let o = this.latestValues[r] !== void 0 || !this.current ? this.latestValues[r] : this.getBaseTargetFromProps(this.props, r) ?? this.readValueFromInstance(this.current, r, this.options);
    return o != null && (typeof o == "string" && ($m(o) || Hm(o)) ? o = parseFloat(o) : !$1(o) && Zn.test(i) && (o = _y(r, i)), this.setBaseTarget(r, pt(o) ? o.get() : o)), pt(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(r, i) {
    this.baseTarget[r] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(r) {
    const { initial: i } = this.props;
    let o;
    if (typeof i == "string" || typeof i == "object") {
      const c = Mc(this.props, i, this.presenceContext?.custom);
      c && (o = c[r]);
    }
    if (i && o !== void 0)
      return o;
    const l = this.getBaseTargetFromProps(this.props, r);
    return l !== void 0 && !pt(l) ? l : this.initialValues[r] !== void 0 && o === void 0 ? void 0 : this.baseTarget[r];
  }
  on(r, i) {
    return this.events[r] || (this.events[r] = new dc()), this.events[r].add(i);
  }
  notify(r, ...i) {
    this.events[r] && this.events[r].notify(...i);
  }
  scheduleRenderMicrotask() {
    Pc.render(this.render);
  }
}
class Jy extends LS {
  constructor() {
    super(...arguments), this.KeyframeResolver = F1;
  }
  sortInstanceNodePosition(r, i) {
    return r.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(r, i) {
    return r.style ? r.style[i] : void 0;
  }
  removeValueFromRenderState(r, { vars: i, style: o }) {
    delete i[r], delete o[r];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: r } = this.props;
    pt(r) && (this.childSubscription = r.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
function eg(n, { style: r, vars: i }, o, l) {
  const c = n.style;
  let f;
  for (f in r)
    c[f] = r[f];
  l?.applyProjectionStyles(c, o);
  for (f in i)
    c.setProperty(f, i[f]);
}
function jS(n) {
  return window.getComputedStyle(n);
}
class IS extends Jy {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = eg;
  }
  readValueFromInstance(r, i) {
    if (pi.has(i))
      return this.projection?.isProjecting ? Mu(i) : Xw(r, i);
    {
      const o = jS(r), l = (sy(i) ? o.getPropertyValue(i) : o[i]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(r, { transformPagePoint: i }) {
    return qy(r, i);
  }
  build(r, i, o) {
    Fc(r, i, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(r, i, o) {
    return Nc(r, i, o);
  }
}
const tg = /* @__PURE__ */ new Set([
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
function bS(n, r, i, o) {
  eg(n, r, void 0, o);
  for (const l in r.attrs)
    n.setAttribute(tg.has(l) ? l : Lc(l), r.attrs[l]);
}
class zS extends Jy {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = tt;
  }
  getBaseTargetFromProps(r, i) {
    return r[i];
  }
  readValueFromInstance(r, i) {
    if (pi.has(i)) {
      const o = Py(i);
      return o && o.default || 0;
    }
    return i = tg.has(i) ? i : Lc(i), r.getAttribute(i);
  }
  scrapeMotionValuesFromProps(r, i, o) {
    return Wy(r, i, o);
  }
  build(r, i, o) {
    zy(r, i, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(r, i, o, l) {
    bS(r, i, o, l);
  }
  mount(r) {
    this.isSVGTag = Uy(r.tagName), super.mount(r);
  }
}
const BS = (n, r) => Rc(n) ? new zS(r) : new IS(r, {
  allowProjection: n !== Q.Fragment
});
function ui(n, r, i) {
  const o = n.getProps();
  return Mc(o, r, i !== void 0 ? i : o.custom, n);
}
const Hu = (n) => Array.isArray(n);
function US(n, r, i) {
  n.hasValue(r) ? n.getValue(r).set(i) : n.addValue(r, ci(i));
}
function $S(n) {
  return Hu(n) ? n[n.length - 1] || 0 : n;
}
function WS(n, r) {
  const i = ui(n, r);
  let { transitionEnd: o = {}, transition: l = {}, ...c } = i || {};
  c = { ...c, ...o };
  for (const f in c) {
    const h = $S(c[f]);
    US(n, f, h);
  }
}
function HS(n) {
  return !!(pt(n) && n.add);
}
function Ku(n, r) {
  const i = n.getValue("willChange");
  if (HS(i))
    return i.add(r);
  if (!i && _n.WillChange) {
    const o = new _n.WillChange("auto");
    n.addValue("willChange", o), o.add(r);
  }
}
function ng(n) {
  return n.props[Hy];
}
const KS = (n) => n !== null;
function GS(n, { repeat: r, repeatType: i = "loop" }, o) {
  const l = n.filter(KS), c = r && i !== "loop" && r % 2 === 1 ? 0 : l.length - 1;
  return l[c];
}
const YS = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, QS = (n) => ({
  type: "spring",
  stiffness: 550,
  damping: n === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), XS = {
  type: "keyframes",
  duration: 0.8
}, qS = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ZS = (n, { keyframes: r }) => r.length > 2 ? XS : pi.has(n) ? n.startsWith("scale") ? QS(r[1]) : YS : qS;
function JS({ when: n, delay: r, delayChildren: i, staggerChildren: o, staggerDirection: l, repeat: c, repeatType: f, repeatDelay: h, from: p, elapsed: g, ...m }) {
  return !!Object.keys(m).length;
}
const jc = (n, r, i, o = {}, l, c) => (f) => {
  const h = Ec(o, n) || {}, p = h.delay || o.delay || 0;
  let { elapsed: g = 0 } = o;
  g = g - /* @__PURE__ */ hn(p);
  const m = {
    keyframes: Array.isArray(i) ? i : [null, i],
    ease: "easeOut",
    velocity: r.getVelocity(),
    ...h,
    delay: -g,
    onUpdate: (x) => {
      r.set(x), h.onUpdate && h.onUpdate(x);
    },
    onComplete: () => {
      f(), h.onComplete && h.onComplete();
    },
    name: n,
    motionValue: r,
    element: c ? void 0 : l
  };
  JS(h) || Object.assign(m, ZS(n, m)), m.duration && (m.duration = /* @__PURE__ */ hn(m.duration)), m.repeatDelay && (m.repeatDelay = /* @__PURE__ */ hn(m.repeatDelay)), m.from !== void 0 && (m.keyframes[0] = m.from);
  let v = !1;
  if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (bu(m), m.delay === 0 && (v = !0)), (_n.instantAnimations || _n.skipAnimations) && (v = !0, bu(m), m.delay = 0), m.allowFlatten = !h.type && !h.ease, v && !c && r.get() !== void 0) {
    const x = GS(m.keyframes, h);
    if (x !== void 0) {
      be.update(() => {
        m.onUpdate(x), m.onComplete();
      });
      return;
    }
  }
  return h.isSync ? new Tc(m) : new x1(m);
};
function eT({ protectedKeys: n, needsAnimating: r }, i) {
  const o = n.hasOwnProperty(i) && r[i] !== !0;
  return r[i] = !1, o;
}
function rg(n, r, { delay: i = 0, transitionOverride: o, type: l } = {}) {
  let { transition: c = n.getDefaultTransition(), transitionEnd: f, ...h } = r;
  o && (c = o);
  const p = [], g = l && n.animationState && n.animationState.getState()[l];
  for (const m in h) {
    const v = n.getValue(m, n.latestValues[m] ?? null), x = h[m];
    if (x === void 0 || g && eT(g, m))
      continue;
    const E = {
      delay: i,
      ...Ec(c || {}, m)
    }, _ = v.get();
    if (_ !== void 0 && !v.isAnimating && !Array.isArray(x) && x === _ && !E.velocity)
      continue;
    let F = !1;
    if (window.MotionHandoffAnimation) {
      const O = ng(n);
      if (O) {
        const R = window.MotionHandoffAnimation(O, m, be);
        R !== null && (E.startTime = R, F = !0);
      }
    }
    Ku(n, m), v.start(jc(m, v, x, n.shouldReduceMotion && ky.has(m) ? { type: !1 } : E, n, F));
    const N = v.animation;
    N && p.push(N);
  }
  return f && Promise.all(p).then(() => {
    be.update(() => {
      f && WS(n, f);
    });
  }), p;
}
function ig(n, r, i, o = 0, l = 1) {
  const c = Array.from(n).sort((g, m) => g.sortNodePosition(m)).indexOf(r), f = n.size, h = (f - 1) * o;
  return typeof i == "function" ? i(c, f) : l === 1 ? c * o : h - c * o;
}
function Gu(n, r, i = {}) {
  const o = ui(n, r, i.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: l = n.getDefaultTransition() || {} } = o || {};
  i.transitionOverride && (l = i.transitionOverride);
  const c = o ? () => Promise.all(rg(n, o, i)) : () => Promise.resolve(), f = n.variantChildren && n.variantChildren.size ? (p = 0) => {
    const { delayChildren: g = 0, staggerChildren: m, staggerDirection: v } = l;
    return tT(n, r, p, g, m, v, i);
  } : () => Promise.resolve(), { when: h } = l;
  if (h) {
    const [p, g] = h === "beforeChildren" ? [c, f] : [f, c];
    return p().then(() => g());
  } else
    return Promise.all([c(), f(i.delay)]);
}
function tT(n, r, i = 0, o = 0, l = 0, c = 1, f) {
  const h = [];
  for (const p of n.variantChildren)
    p.notify("AnimationStart", r), h.push(Gu(p, r, {
      ...f,
      delay: i + (typeof o == "function" ? 0 : o) + ig(n.variantChildren, p, o, l, c)
    }).then(() => p.notify("AnimationComplete", r)));
  return Promise.all(h);
}
function nT(n, r, i = {}) {
  n.notify("AnimationStart", r);
  let o;
  if (Array.isArray(r)) {
    const l = r.map((c) => Gu(n, c, i));
    o = Promise.all(l);
  } else if (typeof r == "string")
    o = Gu(n, r, i);
  else {
    const l = typeof r == "function" ? ui(n, r, i.custom) : r;
    o = Promise.all(rg(n, l, i));
  }
  return o.then(() => {
    n.notify("AnimationComplete", r);
  });
}
function sg(n, r) {
  if (!Array.isArray(r))
    return !1;
  const i = r.length;
  if (i !== n.length)
    return !1;
  for (let o = 0; o < i; o++)
    if (r[o] !== n[o])
      return !1;
  return !0;
}
const rT = Vc.length;
function og(n) {
  if (!n)
    return;
  if (!n.isControllingVariants) {
    const i = n.parent ? og(n.parent) || {} : {};
    return n.props.initial !== void 0 && (i.initial = n.props.initial), i;
  }
  const r = {};
  for (let i = 0; i < rT; i++) {
    const o = Vc[i], l = n.props[o];
    (ys(l) || l === !1) && (r[o] = l);
  }
  return r;
}
const iT = [...Dc].reverse(), sT = Dc.length;
function oT(n) {
  return (r) => Promise.all(r.map(({ animation: i, options: o }) => nT(n, i, o)));
}
function aT(n) {
  let r = oT(n), i = Mp(), o = !0;
  const l = (p) => (g, m) => {
    const v = ui(n, m, p === "exit" ? n.presenceContext?.custom : void 0);
    if (v) {
      const { transition: x, transitionEnd: E, ..._ } = v;
      g = { ...g, ..._, ...E };
    }
    return g;
  };
  function c(p) {
    r = p(n);
  }
  function f(p) {
    const { props: g } = n, m = og(n.parent) || {}, v = [], x = /* @__PURE__ */ new Set();
    let E = {}, _ = 1 / 0;
    for (let N = 0; N < sT; N++) {
      const O = iT[N], R = i[O], j = g[O] !== void 0 ? g[O] : m[O], H = ys(j), b = O === p ? R.isActive : null;
      b === !1 && (_ = N);
      let Y = j === m[O] && j !== g[O] && H;
      if (Y && o && n.manuallyAnimateOnMount && (Y = !1), R.protectedKeys = { ...E }, // If it isn't active and hasn't *just* been set as inactive
      !R.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !j && !R.prevProp || // Or if the prop doesn't define an animation
      ca(j) || typeof j == "boolean")
        continue;
      const te = lT(R.prevProp, j);
      let J = te || // If we're making this variant active, we want to always make it active
      O === p && R.isActive && !Y && H || // If we removed a higher-priority variant (i is in reverse order)
      N > _ && H, de = !1;
      const xe = Array.isArray(j) ? j : [j];
      let me = xe.reduce(l(O), {});
      b === !1 && (me = {});
      const { prevResolvedValues: ue = {} } = R, he = {
        ...ue,
        ...me
      }, we = (X) => {
        J = !0, x.has(X) && (de = !0, x.delete(X)), R.needsAnimating[X] = !0;
        const L = n.getValue(X);
        L && (L.liveStyle = !1);
      };
      for (const X in he) {
        const L = me[X], Z = ue[X];
        if (E.hasOwnProperty(X))
          continue;
        let K = !1;
        Hu(L) && Hu(Z) ? K = !sg(L, Z) : K = L !== Z, K ? L != null ? we(X) : x.add(X) : L !== void 0 && x.has(X) ? we(X) : R.protectedKeys[X] = !0;
      }
      R.prevProp = j, R.prevResolvedValues = me, R.isActive && (E = { ...E, ...me }), o && n.blockInitialAnimation && (J = !1);
      const De = Y && te;
      J && (!De || de) && v.push(...xe.map((X) => {
        const L = { type: O };
        if (typeof X == "string" && o && !De && n.manuallyAnimateOnMount && n.parent) {
          const { parent: Z } = n, K = ui(Z, X);
          if (Z.enteringChildren && K) {
            const { delayChildren: C } = K.transition || {};
            L.delay = ig(Z.enteringChildren, n, C);
          }
        }
        return {
          animation: X,
          options: L
        };
      }));
    }
    if (x.size) {
      const N = {};
      if (typeof g.initial != "boolean") {
        const O = ui(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        O && O.transition && (N.transition = O.transition);
      }
      x.forEach((O) => {
        const R = n.getBaseTarget(O), j = n.getValue(O);
        j && (j.liveStyle = !0), N[O] = R ?? null;
      }), v.push({ animation: N });
    }
    let F = !!v.length;
    return o && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (F = !1), o = !1, F ? r(v) : Promise.resolve();
  }
  function h(p, g) {
    if (i[p].isActive === g)
      return Promise.resolve();
    n.variantChildren?.forEach((v) => v.animationState?.setActive(p, g)), i[p].isActive = g;
    const m = f(p);
    for (const v in i)
      i[v].protectedKeys = {};
    return m;
  }
  return {
    animateChanges: f,
    setActive: h,
    setAnimateFunction: c,
    getState: () => i,
    reset: () => {
      i = Mp();
    }
  };
}
function lT(n, r) {
  return typeof r == "string" ? r !== n : Array.isArray(r) ? !sg(r, n) : !1;
}
function hr(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Mp() {
  return {
    animate: hr(!0),
    whileInView: hr(),
    whileHover: hr(),
    whileTap: hr(),
    whileDrag: hr(),
    whileFocus: hr(),
    exit: hr()
  };
}
class Jn {
  constructor(r) {
    this.isMounted = !1, this.node = r;
  }
  update() {
  }
}
class uT extends Jn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(r) {
    super(r), r.animationState || (r.animationState = aT(r));
  }
  updateAnimationControlsSubscription() {
    const { animate: r } = this.node.getProps();
    ca(r) && (this.unmountControls = r.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: r } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    r !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let cT = 0;
class fT extends Jn {
  constructor() {
    super(...arguments), this.id = cT++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: r, onExitComplete: i } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || r === o)
      return;
    const l = this.node.animationState.setActive("exit", !r);
    i && !r && l.then(() => {
      i(this.id);
    });
  }
  mount() {
    const { register: r, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), r && (this.unmount = r(this.id));
  }
  unmount() {
  }
}
const dT = {
  animation: {
    Feature: uT
  },
  exit: {
    Feature: fT
  }
};
function gs(n, r, i, o = { passive: !0 }) {
  return n.addEventListener(r, i, o), () => n.removeEventListener(r, i);
}
function ks(n) {
  return {
    point: {
      x: n.pageX,
      y: n.pageY
    }
  };
}
const hT = (n) => (r) => _c(r) && n(r, ks(r));
function fs(n, r, i, o) {
  return gs(n, r, hT(i), o);
}
const ag = 1e-4, pT = 1 - ag, mT = 1 + ag, lg = 0.01, yT = 0 - lg, gT = 0 + lg;
function wt(n) {
  return n.max - n.min;
}
function vT(n, r, i) {
  return Math.abs(n - r) <= i;
}
function Np(n, r, i, o = 0.5) {
  n.origin = o, n.originPoint = Ue(r.min, r.max, n.origin), n.scale = wt(i) / wt(r), n.translate = Ue(i.min, i.max, n.origin) - n.originPoint, (n.scale >= pT && n.scale <= mT || isNaN(n.scale)) && (n.scale = 1), (n.translate >= yT && n.translate <= gT || isNaN(n.translate)) && (n.translate = 0);
}
function ds(n, r, i, o) {
  Np(n.x, r.x, i.x, o ? o.originX : void 0), Np(n.y, r.y, i.y, o ? o.originY : void 0);
}
function Lp(n, r, i) {
  n.min = i.min + r.min, n.max = n.min + wt(r);
}
function xT(n, r, i) {
  Lp(n.x, r.x, i.x), Lp(n.y, r.y, i.y);
}
function jp(n, r, i) {
  n.min = r.min - i.min, n.max = n.min + wt(r);
}
function na(n, r, i) {
  jp(n.x, r.x, i.x), jp(n.y, r.y, i.y);
}
function $t(n) {
  return [n("x"), n("y")];
}
const ug = ({ current: n }) => n ? n.ownerDocument.defaultView : null, Ip = (n, r) => Math.abs(n - r);
function wT(n, r) {
  const i = Ip(n.x, r.x), o = Ip(n.y, r.y);
  return Math.sqrt(i ** 2 + o ** 2);
}
class cg {
  constructor(r, i, { transformPagePoint: o, contextWindow: l = window, dragSnapToOrigin: c = !1, distanceThreshold: f = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = vu(this.lastMoveEventInfo, this.history), E = this.startEvent !== null, _ = wT(x.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!E && !_)
        return;
      const { point: F } = x, { timestamp: N } = ut;
      this.history.push({ ...F, timestamp: N });
      const { onStart: O, onMove: R } = this.handlers;
      E || (O && O(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), R && R(this.lastMoveEvent, x);
    }, this.handlePointerMove = (x, E) => {
      this.lastMoveEvent = x, this.lastMoveEventInfo = gu(E, this.transformPagePoint), be.update(this.updatePoint, !0);
    }, this.handlePointerUp = (x, E) => {
      this.end();
      const { onEnd: _, onSessionEnd: F, resumeAnimation: N } = this.handlers;
      if (this.dragSnapToOrigin && N && N(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const O = vu(x.type === "pointercancel" ? this.lastMoveEventInfo : gu(E, this.transformPagePoint), this.history);
      this.startEvent && _ && _(x, O), F && F(x, O);
    }, !_c(r))
      return;
    this.dragSnapToOrigin = c, this.handlers = i, this.transformPagePoint = o, this.distanceThreshold = f, this.contextWindow = l || window;
    const h = ks(r), p = gu(h, this.transformPagePoint), { point: g } = p, { timestamp: m } = ut;
    this.history = [{ ...g, timestamp: m }];
    const { onSessionStart: v } = i;
    v && v(r, vu(p, this.history)), this.removeListeners = ws(fs(this.contextWindow, "pointermove", this.handlePointerMove), fs(this.contextWindow, "pointerup", this.handlePointerUp), fs(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(r) {
    this.handlers = r;
  }
  end() {
    this.removeListeners && this.removeListeners(), qn(this.updatePoint);
  }
}
function gu(n, r) {
  return r ? { point: r(n.point) } : n;
}
function bp(n, r) {
  return { x: n.x - r.x, y: n.y - r.y };
}
function vu({ point: n }, r) {
  return {
    point: n,
    delta: bp(n, fg(r)),
    offset: bp(n, ST(r)),
    velocity: TT(r, 0.1)
  };
}
function ST(n) {
  return n[0];
}
function fg(n) {
  return n[n.length - 1];
}
function TT(n, r) {
  if (n.length < 2)
    return { x: 0, y: 0 };
  let i = n.length - 1, o = null;
  const l = fg(n);
  for (; i >= 0 && (o = n[i], !(l.timestamp - o.timestamp > /* @__PURE__ */ hn(r))); )
    i--;
  if (!o)
    return { x: 0, y: 0 };
  const c = /* @__PURE__ */ Wt(l.timestamp - o.timestamp);
  if (c === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (l.x - o.x) / c,
    y: (l.y - o.y) / c
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function kT(n, { min: r, max: i }, o) {
  return r !== void 0 && n < r ? n = o ? Ue(r, n, o.min) : Math.max(n, r) : i !== void 0 && n > i && (n = o ? Ue(i, n, o.max) : Math.min(n, i)), n;
}
function zp(n, r, i) {
  return {
    min: r !== void 0 ? n.min + r : void 0,
    max: i !== void 0 ? n.max + i - (n.max - n.min) : void 0
  };
}
function ET(n, { top: r, left: i, bottom: o, right: l }) {
  return {
    x: zp(n.x, i, l),
    y: zp(n.y, r, o)
  };
}
function Bp(n, r) {
  let i = r.min - n.min, o = r.max - n.max;
  return r.max - r.min < n.max - n.min && ([i, o] = [o, i]), { min: i, max: o };
}
function CT(n, r) {
  return {
    x: Bp(n.x, r.x),
    y: Bp(n.y, r.y)
  };
}
function PT(n, r) {
  let i = 0.5;
  const o = wt(n), l = wt(r);
  return l > o ? i = /* @__PURE__ */ hs(r.min, r.max - o, n.min) : o > l && (i = /* @__PURE__ */ hs(n.min, n.max - l, r.min)), Pn(0, 1, i);
}
function _T(n, r) {
  const i = {};
  return r.min !== void 0 && (i.min = r.min - n.min), r.max !== void 0 && (i.max = r.max - n.min), i;
}
const Yu = 0.35;
function AT(n = Yu) {
  return n === !1 ? n = 0 : n === !0 && (n = Yu), {
    x: Up(n, "left", "right"),
    y: Up(n, "top", "bottom")
  };
}
function Up(n, r, i) {
  return {
    min: $p(n, r),
    max: $p(n, i)
  };
}
function $p(n, r) {
  return typeof n == "number" ? n : n[r] || 0;
}
const DT = /* @__PURE__ */ new WeakMap();
class VT {
  constructor(r) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = tt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = r;
  }
  start(r, { snapToCursor: i = !1, distanceThreshold: o } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1)
      return;
    const c = (v) => {
      const { dragSnapToOrigin: x } = this.getProps();
      x ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(ks(v).point);
    }, f = (v, x) => {
      const { drag: E, dragPropagation: _, onDragStart: F } = this.getProps();
      if (E && !_ && (this.openDragLock && this.openDragLock(), this.openDragLock = N1(E), !this.openDragLock))
        return;
      this.latestPointerEvent = v, this.latestPanInfo = x, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $t((O) => {
        let R = this.getAxisMotionValue(O).get() || 0;
        if (pn.test(R)) {
          const { projection: j } = this.visualElement;
          if (j && j.layout) {
            const H = j.layout.layoutBox[O];
            H && (R = wt(H) * (parseFloat(R) / 100));
          }
        }
        this.originPoint[O] = R;
      }), F && be.postRender(() => F(v, x)), Ku(this.visualElement, "transform");
      const { animationState: N } = this.visualElement;
      N && N.setActive("whileDrag", !0);
    }, h = (v, x) => {
      this.latestPointerEvent = v, this.latestPanInfo = x;
      const { dragPropagation: E, dragDirectionLock: _, onDirectionLock: F, onDrag: N } = this.getProps();
      if (!E && !this.openDragLock)
        return;
      const { offset: O } = x;
      if (_ && this.currentDirection === null) {
        this.currentDirection = FT(O), this.currentDirection !== null && F && F(this.currentDirection);
        return;
      }
      this.updateAxis("x", x.point, O), this.updateAxis("y", x.point, O), this.visualElement.render(), N && N(v, x);
    }, p = (v, x) => {
      this.latestPointerEvent = v, this.latestPanInfo = x, this.stop(v, x), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => $t((v) => this.getAnimationState(v) === "paused" && this.getAxisMotionValue(v).animation?.play()), { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new cg(r, {
      onSessionStart: c,
      onStart: f,
      onMove: h,
      onSessionEnd: p,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: m,
      distanceThreshold: o,
      contextWindow: ug(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(r, i) {
    const o = r || this.latestPointerEvent, l = i || this.latestPanInfo, c = this.isDragging;
    if (this.cancel(), !c || !l || !o)
      return;
    const { velocity: f } = l;
    this.startAnimation(f);
    const { onDragEnd: h } = this.getProps();
    h && be.postRender(() => h(o, l));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: r, animationState: i } = this.visualElement;
    r && (r.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1);
  }
  updateAxis(r, i, o) {
    const { drag: l } = this.getProps();
    if (!o || !bo(r, l, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(r);
    let f = this.originPoint[r] + o[r];
    this.constraints && this.constraints[r] && (f = kT(f, this.constraints[r], this.elastic[r])), c.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: r, dragElastic: i } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, l = this.constraints;
    r && si(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = ET(o.layoutBox, r) : this.constraints = !1, this.elastic = AT(i), l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && $t((c) => {
      this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = _T(o.layoutBox[c], this.constraints[c]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: r, onMeasureDragConstraints: i } = this.getProps();
    if (!r || !si(r))
      return !1;
    const o = r.current, { projection: l } = this.visualElement;
    if (!l || !l.layout)
      return !1;
    const c = OS(o, l.root, this.visualElement.getTransformPagePoint());
    let f = CT(l.layout.layoutBox, c);
    if (i) {
      const h = i(DS(f));
      this.hasMutatedConstraints = !!h, h && (f = Yy(h));
    }
    return f;
  }
  startAnimation(r) {
    const { drag: i, dragMomentum: o, dragElastic: l, dragTransition: c, dragSnapToOrigin: f, onDragTransitionEnd: h } = this.getProps(), p = this.constraints || {}, g = $t((m) => {
      if (!bo(m, i, this.currentDirection))
        return;
      let v = p && p[m] || {};
      f && (v = { min: 0, max: 0 });
      const x = l ? 200 : 1e6, E = l ? 40 : 1e7, _ = {
        type: "inertia",
        velocity: o ? r[m] : 0,
        bounceStiffness: x,
        bounceDamping: E,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...c,
        ...v
      };
      return this.startAxisValueAnimation(m, _);
    });
    return Promise.all(g).then(h);
  }
  startAxisValueAnimation(r, i) {
    const o = this.getAxisMotionValue(r);
    return Ku(this.visualElement, r), o.start(jc(r, o, 0, i, this.visualElement, !1));
  }
  stopAnimation() {
    $t((r) => this.getAxisMotionValue(r).stop());
  }
  pauseAnimation() {
    $t((r) => this.getAxisMotionValue(r).animation?.pause());
  }
  getAnimationState(r) {
    return this.getAxisMotionValue(r).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(r) {
    const i = `_drag${r.toUpperCase()}`, o = this.visualElement.getProps(), l = o[i];
    return l || this.visualElement.getValue(r, (o.initial ? o.initial[r] : void 0) || 0);
  }
  snapToCursor(r) {
    $t((i) => {
      const { drag: o } = this.getProps();
      if (!bo(i, o, this.currentDirection))
        return;
      const { projection: l } = this.visualElement, c = this.getAxisMotionValue(i);
      if (l && l.layout) {
        const { min: f, max: h } = l.layout.layoutBox[i];
        c.set(r[i] - Ue(f, h, 0.5));
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
    const { drag: r, dragConstraints: i } = this.getProps(), { projection: o } = this.visualElement;
    if (!si(i) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const l = { x: 0, y: 0 };
    $t((f) => {
      const h = this.getAxisMotionValue(f);
      if (h && this.constraints !== !1) {
        const p = h.get();
        l[f] = PT({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), $t((f) => {
      if (!bo(f, r, null))
        return;
      const h = this.getAxisMotionValue(f), { min: p, max: g } = this.constraints[f];
      h.set(Ue(p, g, l[f]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    DT.set(this.visualElement, this);
    const r = this.visualElement.current, i = fs(r, "pointerdown", (p) => {
      const { drag: g, dragListener: m = !0 } = this.getProps();
      g && m && this.start(p);
    }), o = () => {
      const { dragConstraints: p } = this.getProps();
      si(p) && p.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: l } = this.visualElement, c = l.addEventListener("measure", o);
    l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()), be.read(o);
    const f = gs(window, "resize", () => this.scalePositionWithinConstraints()), h = l.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: g }) => {
      this.isDragging && g && ($t((m) => {
        const v = this.getAxisMotionValue(m);
        v && (this.originPoint[m] += p[m].translate, v.set(v.get() + p[m].translate));
      }), this.visualElement.render());
    }));
    return () => {
      f(), i(), c(), h && h();
    };
  }
  getProps() {
    const r = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: o = !1, dragPropagation: l = !1, dragConstraints: c = !1, dragElastic: f = Yu, dragMomentum: h = !0 } = r;
    return {
      ...r,
      drag: i,
      dragDirectionLock: o,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: f,
      dragMomentum: h
    };
  }
}
function bo(n, r, i) {
  return (r === !0 || r === n) && (i === null || i === n);
}
function FT(n, r = 10) {
  let i = null;
  return Math.abs(n.y) > r ? i = "y" : Math.abs(n.x) > r && (i = "x"), i;
}
class OT extends Jn {
  constructor(r) {
    super(r), this.removeGroupControls = Ht, this.removeListeners = Ht, this.controls = new VT(r);
  }
  mount() {
    const { dragControls: r } = this.node.getProps();
    r && (this.removeGroupControls = r.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ht;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Wp = (n) => (r, i) => {
  n && be.postRender(() => n(r, i));
};
class RT extends Jn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ht;
  }
  onPointerDown(r) {
    this.session = new cg(r, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ug(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: r, onPanStart: i, onPan: o, onPanEnd: l } = this.node.getProps();
    return {
      onSessionStart: Wp(r),
      onStart: Wp(i),
      onMove: o,
      onEnd: (c, f) => {
        delete this.session, l && be.postRender(() => l(c, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = fs(this.node.current, "pointerdown", (r) => this.onPointerDown(r));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ko = {
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
let xu = !1;
class MT extends Q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: r, layoutGroup: i, switchLayoutGroup: o, layoutId: l } = this.props, { projection: c } = r;
    c && (i.group && i.group.add(c), o && o.register && l && o.register(c), xu && c.root.didUpdate(), c.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), c.setOptions({
      ...c.options,
      onExitComplete: () => this.safeToRemove()
    })), Ko.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(r) {
    const { layoutDependency: i, visualElement: o, drag: l, isPresent: c } = this.props, { projection: f } = o;
    return f && (f.isPresent = c, xu = !0, l || r.layoutDependency !== i || i === void 0 || r.isPresent !== c ? f.willUpdate() : this.safeToRemove(), r.isPresent !== c && (c ? f.promote() : f.relegate() || be.postRender(() => {
      const h = f.getStack();
      (!h || !h.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: r } = this.props.visualElement;
    r && (r.root.didUpdate(), Pc.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: r, layoutGroup: i, switchLayoutGroup: o } = this.props, { projection: l } = r;
    xu = !0, l && (l.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(l), o && o.deregister && o.deregister(l));
  }
  safeToRemove() {
    const { safeToRemove: r } = this.props;
    r && r();
  }
  render() {
    return null;
  }
}
function dg(n) {
  const [r, i] = My(), o = Q.useContext(sc);
  return q.jsx(MT, { ...n, layoutGroup: o, switchLayoutGroup: Q.useContext(Ky), isPresent: r, safeToRemove: i });
}
function NT(n, r, i) {
  const o = pt(n) ? n : ci(n);
  return o.start(jc("", o, r, i)), o.animation;
}
const LT = (n, r) => n.depth - r.depth;
class jT {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(r) {
    lc(this.children, r), this.isDirty = !0;
  }
  remove(r) {
    uc(this.children, r), this.isDirty = !0;
  }
  forEach(r) {
    this.isDirty && this.children.sort(LT), this.isDirty = !1, this.children.forEach(r);
  }
}
function IT(n, r) {
  const i = Ft.now(), o = ({ timestamp: l }) => {
    const c = l - i;
    c >= r && (qn(o), n(c - r));
  };
  return be.setup(o, !0), () => qn(o);
}
const hg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], bT = hg.length, Hp = (n) => typeof n == "string" ? parseFloat(n) : n, Kp = (n) => typeof n == "number" || pe.test(n);
function zT(n, r, i, o, l, c) {
  l ? (n.opacity = Ue(0, i.opacity ?? 1, BT(o)), n.opacityExit = Ue(r.opacity ?? 1, 0, UT(o))) : c && (n.opacity = Ue(r.opacity ?? 1, i.opacity ?? 1, o));
  for (let f = 0; f < bT; f++) {
    const h = `border${hg[f]}Radius`;
    let p = Gp(r, h), g = Gp(i, h);
    if (p === void 0 && g === void 0)
      continue;
    p || (p = 0), g || (g = 0), p === 0 || g === 0 || Kp(p) === Kp(g) ? (n[h] = Math.max(Ue(Hp(p), Hp(g), o), 0), (pn.test(g) || pn.test(p)) && (n[h] += "%")) : n[h] = g;
  }
  (r.rotate || i.rotate) && (n.rotate = Ue(r.rotate || 0, i.rotate || 0, o));
}
function Gp(n, r) {
  return n[r] !== void 0 ? n[r] : n.borderRadius;
}
const BT = /* @__PURE__ */ pg(0, 0.5, Jm), UT = /* @__PURE__ */ pg(0.5, 0.95, Ht);
function pg(n, r, i) {
  return (o) => o < n ? 0 : o > r ? 1 : i(/* @__PURE__ */ hs(n, r, o));
}
function Yp(n, r) {
  n.min = r.min, n.max = r.max;
}
function Jt(n, r) {
  Yp(n.x, r.x), Yp(n.y, r.y);
}
function Qp(n, r) {
  n.translate = r.translate, n.scale = r.scale, n.originPoint = r.originPoint, n.origin = r.origin;
}
function Xp(n, r, i, o, l) {
  return n -= r, n = ta(n, 1 / i, o), l !== void 0 && (n = ta(n, 1 / l, o)), n;
}
function $T(n, r = 0, i = 1, o = 0.5, l, c = n, f = n) {
  if (pn.test(r) && (r = parseFloat(r), r = Ue(f.min, f.max, r / 100) - f.min), typeof r != "number")
    return;
  let h = Ue(c.min, c.max, o);
  n === c && (h -= r), n.min = Xp(n.min, r, i, h, l), n.max = Xp(n.max, r, i, h, l);
}
function qp(n, r, [i, o, l], c, f) {
  $T(n, r[i], r[o], r[l], r.scale, c, f);
}
const WT = ["x", "scaleX", "originX"], HT = ["y", "scaleY", "originY"];
function Zp(n, r, i, o) {
  qp(n.x, r, WT, i ? i.x : void 0, o ? o.x : void 0), qp(n.y, r, HT, i ? i.y : void 0, o ? o.y : void 0);
}
function Jp(n) {
  return n.translate === 0 && n.scale === 1;
}
function mg(n) {
  return Jp(n.x) && Jp(n.y);
}
function em(n, r) {
  return n.min === r.min && n.max === r.max;
}
function KT(n, r) {
  return em(n.x, r.x) && em(n.y, r.y);
}
function tm(n, r) {
  return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max);
}
function yg(n, r) {
  return tm(n.x, r.x) && tm(n.y, r.y);
}
function nm(n) {
  return wt(n.x) / wt(n.y);
}
function rm(n, r) {
  return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint;
}
class GT {
  constructor() {
    this.members = [];
  }
  add(r) {
    lc(this.members, r), r.scheduleRender();
  }
  remove(r) {
    if (uc(this.members, r), r === this.prevLead && (this.prevLead = void 0), r === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(r) {
    const i = this.members.findIndex((l) => r === l);
    if (i === 0)
      return !1;
    let o;
    for (let l = i; l >= 0; l--) {
      const c = this.members[l];
      if (c.isPresent !== !1) {
        o = c;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(r, i) {
    const o = this.lead;
    if (r !== o && (this.prevLead = o, this.lead = r, r.show(), o)) {
      o.instance && o.scheduleRender(), r.scheduleRender(), r.resumeFrom = o, i && (r.resumeFrom.preserveOpacity = !0), o.snapshot && (r.snapshot = o.snapshot, r.snapshot.latestValues = o.animationValues || o.latestValues), r.root && r.root.isUpdating && (r.isLayoutDirty = !0);
      const { crossfade: l } = r.options;
      l === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((r) => {
      const { options: i, resumingFrom: o } = r;
      i.onExitComplete && i.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((r) => {
      r.instance && r.scheduleRender(!1);
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
function YT(n, r, i) {
  let o = "";
  const l = n.x.translate / r.x, c = n.y.translate / r.y, f = i?.z || 0;
  if ((l || c || f) && (o = `translate3d(${l}px, ${c}px, ${f}px) `), (r.x !== 1 || r.y !== 1) && (o += `scale(${1 / r.x}, ${1 / r.y}) `), i) {
    const { transformPerspective: g, rotate: m, rotateX: v, rotateY: x, skewX: E, skewY: _ } = i;
    g && (o = `perspective(${g}px) ${o}`), m && (o += `rotate(${m}deg) `), v && (o += `rotateX(${v}deg) `), x && (o += `rotateY(${x}deg) `), E && (o += `skewX(${E}deg) `), _ && (o += `skewY(${_}deg) `);
  }
  const h = n.x.scale * r.x, p = n.y.scale * r.y;
  return (h !== 1 || p !== 1) && (o += `scale(${h}, ${p})`), o || "none";
}
const wu = ["", "X", "Y", "Z"], QT = 1e3;
let XT = 0;
function Su(n, r, i, o) {
  const { latestValues: l } = r;
  l[n] && (i[n] = l[n], r.setStaticValue(n, 0), o && (o[n] = 0));
}
function gg(n) {
  if (n.hasCheckedOptimisedAppear = !0, n.root === n)
    return;
  const { visualElement: r } = n.options;
  if (!r)
    return;
  const i = ng(r);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: l, layoutId: c } = n.options;
    window.MotionCancelOptimisedAnimation(i, "transform", be, !(l || c));
  }
  const { parent: o } = n;
  o && !o.hasCheckedOptimisedAppear && gg(o);
}
function vg({ attachResizeListener: n, defaultParent: r, measureScroll: i, checkIsScrollRoot: o, resetTransform: l }) {
  return class {
    constructor(f = {}, h = r?.()) {
      this.id = XT++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(JT), this.nodes.forEach(rk), this.nodes.forEach(ik), this.nodes.forEach(ek);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jT());
    }
    addEventListener(f, h) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new dc()), this.eventHandlers.get(f).add(h);
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
    mount(f) {
      if (this.instance)
        return;
      this.isSVG = Ry(f) && !B1(f), this.instance = f;
      const { layoutId: h, layout: p, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0), n) {
        let m, v = 0;
        const x = () => this.root.updateBlockedByResize = !1;
        be.read(() => {
          v = window.innerWidth;
        }), n(f, () => {
          const E = window.innerWidth;
          E !== v && (v = E, this.root.updateBlockedByResize = !0, m && m(), m = IT(x, 250), Ko.hasAnimatedSinceResize && (Ko.hasAnimatedSinceResize = !1, this.nodes.forEach(om)));
        });
      }
      h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || p) && this.addEventListener("didUpdate", ({ delta: m, hasLayoutChanged: v, hasRelativeLayoutChanged: x, layout: E }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const _ = this.options.transition || g.getDefaultTransition() || uk, { onLayoutAnimationStart: F, onLayoutAnimationComplete: N } = g.getProps(), O = !this.targetLayout || !yg(this.targetLayout, E), R = !v && x;
        if (this.options.layoutRoot || this.resumeFrom || R || v && (O || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const j = {
            ...Ec(_, "layout"),
            onPlay: F,
            onComplete: N
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0, j.type = !1), this.startAnimation(j), this.setAnimationOrigin(m, R);
        } else
          v || om(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = E;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), qn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(sk), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && gg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        v.shouldResetTransform = !0, v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p)
        return;
      const g = this.getTransformTemplate();
      this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(im);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(sm);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(nk), this.nodes.forEach(qT), this.nodes.forEach(ZT)) : this.nodes.forEach(sm), this.clearAllSnapshots();
      const h = Ft.now();
      ut.delta = Pn(0, 1e3 / 60, h - ut.timestamp), ut.timestamp = h, ut.isProcessing = !0, uu.update.process(ut), uu.preRender.process(ut), uu.render.process(ut), ut.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Pc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(tk), this.sharedNodes.forEach(ok);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, be.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      be.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !wt(this.snapshot.measuredBox.x) && !wt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = tt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1), h && this.instance) {
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
      if (!l)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, h = this.projectionDelta && !mg(this.projectionDelta), p = this.getTransformTemplate(), g = p ? p(this.latestValues, "") : void 0, m = g !== this.prevTransformTemplateValue;
      f && this.instance && (h || pr(this.latestValues) || m) && (l(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return f && (p = this.removeTransform(p)), ck(p), {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: p,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f)
        return tt();
      const h = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(fk))) {
        const { scroll: g } = this.root;
        g && (oi(h.x, g.offset.x), oi(h.y, g.offset.y));
      }
      return h;
    }
    removeElementScroll(f) {
      const h = tt();
      if (Jt(h, f), this.scroll?.wasRoot)
        return h;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p], { scroll: m, options: v } = g;
        g !== this.root && m && v.layoutScroll && (m.wasRoot && Jt(h, f), oi(h.x, m.offset.x), oi(h.y, m.offset.y));
      }
      return h;
    }
    applyTransform(f, h = !1) {
      const p = tt();
      Jt(p, f);
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g];
        !h && m.options.layoutScroll && m.scroll && m !== m.root && ai(p, {
          x: -m.scroll.offset.x,
          y: -m.scroll.offset.y
        }), pr(m.latestValues) && ai(p, m.latestValues);
      }
      return pr(this.latestValues) && ai(p, this.latestValues), p;
    }
    removeTransform(f) {
      const h = tt();
      Jt(h, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!g.instance || !pr(g.latestValues))
          continue;
        Uu(g.latestValues) && g.updateSnapshot();
        const m = tt(), v = g.measurePageBox();
        Jt(m, v), Zp(h, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, m);
      }
      return pr(this.latestValues) && Zp(h, this.latestValues), h;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ut.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== h;
      if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: m, layoutId: v } = this.options;
      if (!this.layout || !(m || v))
        return;
      this.resolvedRelativeTargetAt = ut.timestamp;
      const x = this.getClosestProjectingParent();
      x && this.linkedParentVersion !== x.layoutVersion && !x.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (x && x.layout ? this.createRelativeTarget(x, this.layout.layoutBox, x.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = tt(), this.targetWithTransforms = tt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xT(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Jt(this.target, this.layout.layoutBox), Xy(this.target, this.targetDelta)) : Jt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? this.createRelativeTarget(x, this.target, x.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Uu(this.parent.latestValues) || Qy(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, h, p) {
      this.relativeParent = f, this.linkedParentVersion = f.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tt(), this.relativeTargetOrigin = tt(), na(this.relativeTargetOrigin, h, p), Jt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(), h = !!this.resumingFrom || this !== f;
      let p = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === ut.timestamp && (p = !1), p)
        return;
      const { layout: g, layoutId: m } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || m))
        return;
      Jt(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x, x = this.treeScale.y;
      FS(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = tt());
      const { target: E } = f;
      if (!E) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Qp(this.prevProjectionDelta.x, this.projectionDelta.x), Qp(this.prevProjectionDelta.y, this.projectionDelta.y)), ds(this.projectionDelta, this.layoutCorrected, E, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== x || !rm(this.projectionDelta.x, this.prevProjectionDelta.x) || !rm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", E));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if (this.options.visualElement?.scheduleRender(), f) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = li(), this.projectionDelta = li(), this.projectionDeltaWithTransform = li();
    }
    setAnimationOrigin(f, h = !1) {
      const p = this.snapshot, g = p ? p.latestValues : {}, m = { ...this.latestValues }, v = li();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
      const x = tt(), E = p ? p.source : void 0, _ = this.layout ? this.layout.source : void 0, F = E !== _, N = this.getStack(), O = !N || N.members.length <= 1, R = !!(F && !O && this.options.crossfade === !0 && !this.path.some(lk));
      this.animationProgress = 0;
      let j;
      this.mixTargetDelta = (H) => {
        const b = H / 1e3;
        am(v.x, f.x, b), am(v.y, f.y, b), this.setTargetDelta(v), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (na(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox), ak(this.relativeTarget, this.relativeTargetOrigin, x, b), j && KT(this.relativeTarget, j) && (this.isProjectionDirty = !1), j || (j = tt()), Jt(j, this.relativeTarget)), F && (this.animationValues = m, zT(m, g, this.latestValues, b, R, O)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (qn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = be.update(() => {
        Ko.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = ci(0)), this.currentAnimation = NT(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (h) => {
            this.mixTargetDelta(h), f.onUpdate && f.onUpdate(h);
          },
          onStop: () => {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(QT), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: h, target: p, layout: g, latestValues: m } = f;
      if (!(!h || !p || !g)) {
        if (this !== f && this.layout && g && xg(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          p = this.target || tt();
          const v = wt(this.layout.layoutBox.x);
          p.x.min = f.target.x.min, p.x.max = p.x.min + v;
          const x = wt(this.layout.layoutBox.y);
          p.y.min = f.target.y.min, p.y.max = p.y.min + x;
        }
        Jt(h, p), ai(h, m), ds(this.projectionDeltaWithTransform, this.layoutCorrected, h, m);
      }
    }
    registerSharedNode(f, h) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new GT()), this.sharedNodes.get(f).add(h);
      const g = h.options.initialPromotionConfig;
      h.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(h) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: h, preserveFollowOpacity: p } = {}) {
      const g = this.getStack();
      g && g.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({ transition: h });
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
      const g = {};
      p.z && Su("z", f, g, this.animationValues);
      for (let m = 0; m < wu.length; m++)
        Su(`rotate${wu[m]}`, f, g, this.animationValues), Su(`skew${wu[m]}`, f, g, this.animationValues);
      f.render();
      for (const m in g)
        f.setStaticValue(m, g[m]), this.animationValues && (this.animationValues[m] = g[m]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, h) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = Ho(h?.pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = Ho(h?.pointerEvents) || ""), this.hasProjected && !pr(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const m = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let v = YT(this.projectionDeltaWithTransform, this.treeScale, m);
      p && (v = p(m, v)), f.transform = v;
      const { x, y: E } = this.projectionDelta;
      f.transformOrigin = `${x.origin * 100}% ${E.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? m.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : m.opacityExit : f.opacity = g === this ? m.opacity !== void 0 ? m.opacity : "" : m.opacityExit !== void 0 ? m.opacityExit : 0;
      for (const _ in Bu) {
        if (m[_] === void 0)
          continue;
        const { correct: F, applyTo: N, isCSSVariable: O } = Bu[_], R = v === "none" ? m[_] : F(m[_], g);
        if (N) {
          const j = N.length;
          for (let H = 0; H < j; H++)
            f[N[H]] = R;
        } else
          O ? this.options.visualElement.renderState.vars[_] = R : f[_] = R;
      }
      this.options.layoutId && (f.pointerEvents = g === this ? Ho(h?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(im), this.root.sharedNodes.clear();
    }
  };
}
function qT(n) {
  n.updateLayout();
}
function ZT(n) {
  const r = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: o } = n.layout, { animationType: l } = n.options, c = r.source !== n.layout.source;
    l === "size" ? $t((m) => {
      const v = c ? r.measuredBox[m] : r.layoutBox[m], x = wt(v);
      v.min = i[m].min, v.max = v.min + x;
    }) : xg(l, r.layoutBox, i) && $t((m) => {
      const v = c ? r.measuredBox[m] : r.layoutBox[m], x = wt(i[m]);
      v.max = v.min + x, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[m].max = n.relativeTarget[m].min + x);
    });
    const f = li();
    ds(f, i, r.layoutBox);
    const h = li();
    c ? ds(h, n.applyTransform(o, !0), r.measuredBox) : ds(h, i, r.layoutBox);
    const p = !mg(f);
    let g = !1;
    if (!n.resumeFrom) {
      const m = n.getClosestProjectingParent();
      if (m && !m.resumeFrom) {
        const { snapshot: v, layout: x } = m;
        if (v && x) {
          const E = tt();
          na(E, r.layoutBox, v.layoutBox);
          const _ = tt();
          na(_, i, x.layoutBox), yg(E, _) || (g = !0), m.options.layoutRoot && (n.relativeTarget = _, n.relativeTargetOrigin = E, n.relativeParent = m);
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: i,
      snapshot: r,
      delta: h,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: g
    });
  } else if (n.isLead()) {
    const { onExitComplete: i } = n.options;
    i && i();
  }
  n.options.transition = void 0;
}
function JT(n) {
  n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function ek(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function tk(n) {
  n.clearSnapshot();
}
function im(n) {
  n.clearMeasurements();
}
function sm(n) {
  n.isLayoutDirty = !1;
}
function nk(n) {
  const { visualElement: r } = n.options;
  r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function om(n) {
  n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function rk(n) {
  n.resolveTargetDelta();
}
function ik(n) {
  n.calcProjection();
}
function sk(n) {
  n.resetSkewAndRotation();
}
function ok(n) {
  n.removeLeadSnapshot();
}
function am(n, r, i) {
  n.translate = Ue(r.translate, 0, i), n.scale = Ue(r.scale, 1, i), n.origin = r.origin, n.originPoint = r.originPoint;
}
function lm(n, r, i, o) {
  n.min = Ue(r.min, i.min, o), n.max = Ue(r.max, i.max, o);
}
function ak(n, r, i, o) {
  lm(n.x, r.x, i.x, o), lm(n.y, r.y, i.y, o);
}
function lk(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const uk = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, um = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), cm = um("applewebkit/") && !um("chrome/") ? Math.round : Ht;
function fm(n) {
  n.min = cm(n.min), n.max = cm(n.max);
}
function ck(n) {
  fm(n.x), fm(n.y);
}
function xg(n, r, i) {
  return n === "position" || n === "preserve-aspect" && !vT(nm(r), nm(i), 0.2);
}
function fk(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const dk = vg({
  attachResizeListener: (n, r) => gs(n, "resize", r),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Tu = {
  current: void 0
}, wg = vg({
  measureScroll: (n) => ({
    x: n.scrollLeft,
    y: n.scrollTop
  }),
  defaultParent: () => {
    if (!Tu.current) {
      const n = new dk({});
      n.mount(window), n.setOptions({ layoutScroll: !0 }), Tu.current = n;
    }
    return Tu.current;
  },
  resetTransform: (n, r) => {
    n.style.transform = r !== void 0 ? r : "none";
  },
  checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), hk = {
  pan: {
    Feature: RT
  },
  drag: {
    Feature: OT,
    ProjectionNode: wg,
    MeasureLayout: dg
  }
};
function dm(n, r, i) {
  const { props: o } = n;
  n.animationState && o.whileHover && n.animationState.setActive("whileHover", i === "Start");
  const l = "onHover" + i, c = o[l];
  c && be.postRender(() => c(r, ks(r)));
}
class pk extends Jn {
  mount() {
    const { current: r } = this.node;
    r && (this.unmount = L1(r, (i, o) => (dm(this.node, o, "Start"), (l) => dm(this.node, l, "End"))));
  }
  unmount() {
  }
}
class mk extends Jn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let r = !1;
    try {
      r = this.node.current.matches(":focus-visible");
    } catch {
      r = !0;
    }
    !r || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ws(gs(this.node.current, "focus", () => this.onFocus()), gs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function hm(n, r, i) {
  const { props: o } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled)
    return;
  n.animationState && o.whileTap && n.animationState.setActive("whileTap", i === "Start");
  const l = "onTap" + (i === "End" ? "" : i), c = o[l];
  c && be.postRender(() => c(r, ks(r)));
}
class yk extends Jn {
  mount() {
    const { current: r } = this.node;
    r && (this.unmount = z1(r, (i, o) => (hm(this.node, o, "Start"), (l, { success: c }) => hm(this.node, l, c ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Qu = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), gk = (n) => {
  const r = Qu.get(n.target);
  r && r(n);
}, vk = (n) => {
  n.forEach(gk);
};
function xk({ root: n, ...r }) {
  const i = n || document;
  ku.has(i) || ku.set(i, {});
  const o = ku.get(i), l = JSON.stringify(r);
  return o[l] || (o[l] = new IntersectionObserver(vk, { root: n, ...r })), o[l];
}
function wk(n, r, i) {
  const o = xk(r);
  return Qu.set(n, i), o.observe(n), () => {
    Qu.delete(n), o.unobserve(n);
  };
}
const Sk = {
  some: 0,
  all: 1
};
class Tk extends Jn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: r = {} } = this.node.getProps(), { root: i, margin: o, amount: l = "some", once: c } = r, f = {
      root: i ? i.current : void 0,
      rootMargin: o,
      threshold: typeof l == "number" ? l : Sk[l]
    }, h = (p) => {
      const { isIntersecting: g } = p;
      if (this.isInView === g || (this.isInView = g, c && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: m, onViewportLeave: v } = this.node.getProps(), x = g ? m : v;
      x && x(p);
    };
    return wk(this.node.current, f, h);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: r, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(kk(r, i)) && this.startObserver();
  }
  unmount() {
  }
}
function kk({ viewport: n = {} }, { viewport: r = {} } = {}) {
  return (i) => n[i] !== r[i];
}
const Ek = {
  inView: {
    Feature: Tk
  },
  tap: {
    Feature: yk
  },
  focus: {
    Feature: mk
  },
  hover: {
    Feature: pk
  }
}, Ck = {
  layout: {
    ProjectionNode: wg,
    MeasureLayout: dg
  }
}, Pk = {
  ...dT,
  ...Ek,
  ...hk,
  ...Ck
}, _k = /* @__PURE__ */ AS(Pk, BS);
var Ak = function(n) {
  var r = n.as, i = n.errors, o = n.name, l = n.message, c = n.render, f = (function(x, E) {
    if (x == null) return {};
    var _, F, N = {}, O = Object.keys(x);
    for (F = 0; F < O.length; F++) E.indexOf(_ = O[F]) >= 0 || (N[_] = x[_]);
    return N;
  })(n, ["as", "errors", "name", "message", "render"]), h = nc(), p = ie(i || h.formState.errors, o);
  if (!p) return null;
  var g = p.message, m = p.types, v = Object.assign({}, f, { children: g || l });
  return Q.isValidElement(r) ? Q.cloneElement(r, v) : c ? c({ message: g || l, messages: m }) : Q.createElement(r || Q.Fragment, v);
};
function Dk({
  register: n,
  activeStep: r,
  initialValues: i
}) {
  function o(h) {
    return h = h[0].toUpperCase() + h.slice(1), h.replace(/[A-Z]/g, " $&");
  }
  function l(h, p) {
    const g = {};
    return p === "number" && (g.onKeyDown = (v) => {
      ["e", "E", "+", "-", ".", ","].includes(v.key) && v.preventDefault();
    }), (h?.tests || []).forEach((v) => {
      switch (v.OPTIONS.name) {
        case "min":
          g.min = v.OPTIONS.params.min || v.OPTIONS.params.more;
          break;
        case "max":
          g.max = v.OPTIONS.params.max;
          break;
      }
    }), g;
  }
  const { validationSchema: c, fields: f } = r;
  return /* @__PURE__ */ q.jsxs("div", { id: "default", className: "prose max-w-none", children: [
    /* @__PURE__ */ q.jsx("h2", { children: o(r.id) }),
    /* @__PURE__ */ q.jsx("p", { children: r.helpText }),
    /* @__PURE__ */ q.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(i || {}).map((h) => /* @__PURE__ */ q.jsxs("div", { className: "grow shrink-0 basis-72", children: [
      /* @__PURE__ */ q.jsx(
        "label",
        {
          htmlFor: h,
          className: "block mb-2 text-sm font-medium text-white",
          children: o(h)
        }
      ),
      /* @__PURE__ */ q.jsx(
        "input",
        {
          id: h,
          type: f?.inputTypes[h],
          placeholder: f?.placeholders?.[h],
          ...l(
            c?.fields?.[h],
            f?.inputTypes[h]
          ),
          ...n(h),
          className: "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
        }
      ),
      /* @__PURE__ */ q.jsx(
        Ak,
        {
          name: h,
          render: ({ message: p }) => /* @__PURE__ */ q.jsx("div", { className: "text-red-400", children: p })
        }
      )
    ] }, h)) })
  ] });
}
function Vk() {
  const { isAnimated: n } = Q.useContext(Ic), { activeStep: r } = xs(), { register: i, formState: o } = nc();
  let l = {};
  return n && (l = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }), /* @__PURE__ */ q.jsx(X1, { initial: !1, mode: "wait", children: /* @__PURE__ */ q.jsx(
    _k.div,
    {
      variants: l,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      transition: { type: "tween", duration: 0.25 },
      children: /* @__PURE__ */ q.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ q.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: r.component || /* @__PURE__ */ q.jsx(
        Dk,
        {
          register: i,
          activeStep: r,
          initialValues: o.defaultValues
        }
      ) }) })
    },
    r.id
  ) });
}
var Sg = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, pm = We.createContext && /* @__PURE__ */ We.createContext(Sg), Fk = ["attr", "size", "title"];
function Ok(n, r) {
  if (n == null) return {};
  var i = Rk(n, r), o, l;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (l = 0; l < c.length; l++)
      o = c[l], !(r.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(n, o) && (i[o] = n[o]);
  }
  return i;
}
function Rk(n, r) {
  if (n == null) return {};
  var i = {};
  for (var o in n)
    if (Object.prototype.hasOwnProperty.call(n, o)) {
      if (r.indexOf(o) >= 0) continue;
      i[o] = n[o];
    }
  return i;
}
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
    }
    return n;
  }, ra.apply(this, arguments);
}
function mm(n, r) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    r && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(n, l).enumerable;
    })), i.push.apply(i, o);
  }
  return i;
}
function ia(n) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? mm(Object(i), !0).forEach(function(o) {
      Mk(n, o, i[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : mm(Object(i)).forEach(function(o) {
      Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(i, o));
    });
  }
  return n;
}
function Mk(n, r, i) {
  return r = Nk(r), r in n ? Object.defineProperty(n, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = i, n;
}
function Nk(n) {
  var r = Lk(n, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Lk(n, r) {
  if (typeof n != "object" || !n) return n;
  var i = n[Symbol.toPrimitive];
  if (i !== void 0) {
    var o = i.call(n, r);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function Tg(n) {
  return n && n.map((r, i) => /* @__PURE__ */ We.createElement(r.tag, ia({
    key: i
  }, r.attr), Tg(r.child)));
}
function kg(n) {
  return (r) => /* @__PURE__ */ We.createElement(jk, ra({
    attr: ia({}, n.attr)
  }, r), Tg(n.child));
}
function jk(n) {
  var r = (i) => {
    var {
      attr: o,
      size: l,
      title: c
    } = n, f = Ok(n, Fk), h = l || i.size || "1em", p;
    return i.className && (p = i.className), n.className && (p = (p ? p + " " : "") + n.className), /* @__PURE__ */ We.createElement("svg", ra({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, o, f, {
      className: p,
      style: ia(ia({
        color: n.color || i.color
      }, i.style), n.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ We.createElement("title", null, c), n.children);
  };
  return pm !== void 0 ? /* @__PURE__ */ We.createElement(pm.Consumer, null, (i) => r(i)) : r(Sg);
}
function Ik(n) {
  return kg({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" }, child: [] }] })(n);
}
function bk(n) {
  return kg({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" }, child: [] }] })(n);
}
var At = {}, is = {}, ym;
function zk() {
  if (ym) return is;
  ym = 1, Object.defineProperty(is, "__esModule", { value: !0 }), is.parseLengthAndUnit = r, is.cssValue = i;
  var n = {
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
  function r(o) {
    if (typeof o == "number")
      return {
        value: o,
        unit: "px"
      };
    var l, c = (o.match(/^[0-9.]*/) || "").toString();
    c.includes(".") ? l = parseFloat(c) : l = parseInt(c, 10);
    var f = (o.match(/[^0-9]*$/) || "").toString();
    return n[f] ? {
      value: l,
      unit: f
    } : (console.warn("React Spinners: ".concat(o, " is not a valid css value. Defaulting to ").concat(l, "px.")), {
      value: l,
      unit: "px"
    });
  }
  function i(o) {
    var l = r(o);
    return "".concat(l.value).concat(l.unit);
  }
  return is;
}
var ss = {}, gm;
function Bk() {
  if (gm) return ss;
  gm = 1, Object.defineProperty(ss, "__esModule", { value: !0 }), ss.createAnimation = void 0;
  var n = function(r, i, o) {
    var l = "react-spinners-".concat(r, "-").concat(o);
    if (typeof window > "u" || !window.document)
      return l;
    var c = document.createElement("style");
    document.head.appendChild(c);
    var f = c.sheet, h = `
    @keyframes `.concat(l, ` {
      `).concat(i, `
    }
  `);
    return f && f.insertRule(h, 0), l;
  };
  return ss.createAnimation = n, ss;
}
var vm;
function Uk() {
  if (vm) return At;
  vm = 1;
  var n = At && At.__assign || function() {
    return n = Object.assign || function(m) {
      for (var v, x = 1, E = arguments.length; x < E; x++) {
        v = arguments[x];
        for (var _ in v) Object.prototype.hasOwnProperty.call(v, _) && (m[_] = v[_]);
      }
      return m;
    }, n.apply(this, arguments);
  }, r = At && At.__createBinding || (Object.create ? (function(m, v, x, E) {
    E === void 0 && (E = x);
    var _ = Object.getOwnPropertyDescriptor(v, x);
    (!_ || ("get" in _ ? !v.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
      return v[x];
    } }), Object.defineProperty(m, E, _);
  }) : (function(m, v, x, E) {
    E === void 0 && (E = x), m[E] = v[x];
  })), i = At && At.__setModuleDefault || (Object.create ? (function(m, v) {
    Object.defineProperty(m, "default", { enumerable: !0, value: v });
  }) : function(m, v) {
    m.default = v;
  }), o = At && At.__importStar || /* @__PURE__ */ (function() {
    var m = function(v) {
      return m = Object.getOwnPropertyNames || function(x) {
        var E = [];
        for (var _ in x) Object.prototype.hasOwnProperty.call(x, _) && (E[E.length] = _);
        return E;
      }, m(v);
    };
    return function(v) {
      if (v && v.__esModule) return v;
      var x = {};
      if (v != null) for (var E = m(v), _ = 0; _ < E.length; _++) E[_] !== "default" && r(x, v, E[_]);
      return i(x, v), x;
    };
  })(), l = At && At.__rest || function(m, v) {
    var x = {};
    for (var E in m) Object.prototype.hasOwnProperty.call(m, E) && v.indexOf(E) < 0 && (x[E] = m[E]);
    if (m != null && typeof Object.getOwnPropertySymbols == "function")
      for (var _ = 0, E = Object.getOwnPropertySymbols(m); _ < E.length; _++)
        v.indexOf(E[_]) < 0 && Object.prototype.propertyIsEnumerable.call(m, E[_]) && (x[E[_]] = m[E[_]]);
    return x;
  };
  Object.defineProperty(At, "__esModule", { value: !0 });
  var c = o(oa()), f = /* @__PURE__ */ zk(), h = /* @__PURE__ */ Bk(), p = (0, h.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function g(m) {
    var v = m.loading, x = v === void 0 ? !0 : v, E = m.color, _ = E === void 0 ? "#000000" : E, F = m.speedMultiplier, N = F === void 0 ? 1 : F, O = m.cssOverride, R = O === void 0 ? {} : O, j = m.size, H = j === void 0 ? 35 : j, b = l(m, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), Y = n({ background: "transparent !important", width: (0, f.cssValue)(H), height: (0, f.cssValue)(H), borderRadius: "100%", border: "2px solid", borderTopColor: _, borderBottomColor: "transparent", borderLeftColor: _, borderRightColor: _, display: "inline-block", animation: "".concat(p, " ").concat(0.75 / N, "s 0s infinite linear"), animationFillMode: "both" }, R);
    return x ? c.createElement("span", n({ style: Y }, b)) : null;
  }
  return At.default = g, At;
}
var $k = /* @__PURE__ */ Uk();
const Wk = /* @__PURE__ */ sa($k);
function Hk() {
  let {
    goToPreviousStep: n,
    isFirstStep: r,
    isLoading: i,
    activeStep: { hidePrevious: o, hideNext: l, disableNext: c, disableNextOnErrors: f }
  } = xs();
  const {
    formState: { isValid: h },
    trigger: p
  } = nc();
  return c = i || c || f && !h, /* @__PURE__ */ q.jsx("div", { className: "navigation", children: /* @__PURE__ */ q.jsxs(
    "div",
    {
      className: "navigation-wrapper " + (o ? "justify-end" : "justify-between"),
      children: [
        !o && /* @__PURE__ */ q.jsxs(
          "button",
          {
            className: "btn btn-primary sm:w-34",
            onClick: n,
            disabled: r,
            type: "button",
            children: [
              /* @__PURE__ */ q.jsx(Ik, { className: "w-6 h-6 fill-current" }),
              /* @__PURE__ */ q.jsx("span", { children: "Previous" })
            ]
          }
        ),
        !l && // Still possible to trigger submit even though button is disabled.
        // Main reason is to display validation errors.
        /* @__PURE__ */ q.jsx(
          "div",
          {
            onClick: c ? () => {
              p();
            } : void 0,
            children: /* @__PURE__ */ q.jsxs("button", { className: "btn btn-primary sm:w-34", disabled: c, type: "submit", children: [
              i && /* @__PURE__ */ q.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ q.jsx(Wk, { size: 11, color: "#757575" }) }),
              /* @__PURE__ */ q.jsx("span", { children: "Next" }),
              /* @__PURE__ */ q.jsx(bk, { className: "w-6 h-6 fill-current" })
            ] })
          }
        )
      ]
    }
  ) });
}
function Kk() {
  const { isAnimated: n, setIsAnimated: r } = Q.useContext(Ic), { stepNumber: i, totalSteps: o } = xs(), l = `${(i - 1) / (o - 1) * 100}%`;
  return /* @__PURE__ */ q.jsxs("header", { className: "pt-4 pb-3", children: [
    /* @__PURE__ */ q.jsxs("div", { className: "px-5 flex justify-between items-center prose max-w-none", children: [
      /* @__PURE__ */ q.jsx("h3", { className: "mb-0 text-sm xs:text-base sm:text-xl", children: "rhf-wizard" }),
      /* @__PURE__ */ q.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ q.jsxs("div", { className: "mr-3 text-sm", children: [
          /* @__PURE__ */ q.jsx("span", { className: "hidden min-[400px]:inline", children: "Step" }),
          " ",
          i,
          " ",
          "/ ",
          o
        ] }),
        /* @__PURE__ */ q.jsx("a", { href: "https://github.com/kennyhei/rhf-wizard", target: "_blank", children: /* @__PURE__ */ q.jsx(
          "img",
          {
            src: "/rhf-wizard/github-mark-white.svg",
            className: "rounded-md w-9 !my-0"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ q.jsx("div", { className: "w-full bg-gray-600 h-1 mt-[17px]", children: /* @__PURE__ */ q.jsx(
      "div",
      {
        style: { width: l },
        className: "h-full bg-success transition-all " + (n ? "duration-500" : "")
      }
    ) }),
    /* @__PURE__ */ q.jsx("div", { className: "flex justify-end pr-5 prose max-w-none pt-1", children: /* @__PURE__ */ q.jsxs("label", { className: "label cursor-pointer px-0 py-2", children: [
      /* @__PURE__ */ q.jsx(
        "span",
        {
          className: "label-text pr-0.5 " + (n ? "text-success" : "text-gray-300"),
          children: "Animate"
        }
      ),
      /* @__PURE__ */ q.jsx(
        "input",
        {
          type: "checkbox",
          className: "toggle toggle-sm toggle-success",
          checked: n,
          onChange: () => {
            r(!n);
          }
        }
      )
    ] }) })
  ] });
}
const Ic = Q.createContext(
  {}
);
function Gk() {
  const [n, r] = Q.useState(!0);
  return /* @__PURE__ */ q.jsx(Ic.Provider, { value: { isAnimated: n, setIsAnimated: r }, children: /* @__PURE__ */ q.jsx(
    $x,
    {
      enableHash: !0,
      steps: Gx,
      onStepChanged: (i, o, l) => {
        console.log("step changed", i.id, o.id, l);
      },
      header: /* @__PURE__ */ q.jsx(Kk, {}),
      wrapper: /* @__PURE__ */ q.jsx(Vk, {}),
      footer: /* @__PURE__ */ q.jsx(Hk, {})
    }
  ) });
}
_0.createRoot(document.getElementById("root")).render(/* @__PURE__ */ q.jsx(Gk, {}));
