!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("@popperjs/core")))
    : "function" == typeof define && define.amd
    ? define(["@popperjs/core"], e)
    : ((t = t || self).tippy = e(t.Popper));
})(this, function (t) {
  "use strict";
  var e = "undefined" != typeof window && "undefined" != typeof document,
    n = e ? navigator.userAgent : "",
    r = /MSIE |Trident\//.test(n),
    i = { passive: !0, capture: !0 };
  function o(t, e, n) {
    if (Array.isArray(t)) {
      var r = t[e];
      return null == r ? (Array.isArray(n) ? n[e] : n) : r;
    }
    return t;
  }
  function a(t, e) {
    var n = {}.toString.call(t);
    return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1;
  }
  function s(t, e) {
    return "function" == typeof t ? t.apply(void 0, e) : t;
  }
  function p(t, e) {
    return 0 === e
      ? t
      : function (r) {
          clearTimeout(n),
            (n = setTimeout(function () {
              t(r);
            }, e));
        };
    var n;
  }
  function u(t, e) {
    var n = Object.assign({}, t);
    return (
      e.forEach(function (t) {
        delete n[t];
      }),
      n
    );
  }
  function c(t) {
    return [].concat(t);
  }
  function f(t, e) {
    -1 === t.indexOf(e) && t.push(e);
  }
  function l(t) {
    return t.split("-")[0];
  }
  function d(t) {
    return [].slice.call(t);
  }
  function v() {
    return document.createElement("div");
  }
  function m(t) {
    return ["Element", "Fragment"].some(function (e) {
      return a(t, e);
    });
  }
  function g(t) {
    return a(t, "MouseEvent");
  }
  function h(t) {
    return !(!t || !t._tippy || t._tippy.reference !== t);
  }
  function b(t) {
    return m(t)
      ? [t]
      : (function (t) {
          return a(t, "NodeList");
        })(t)
      ? d(t)
      : Array.isArray(t)
      ? t
      : d(document.querySelectorAll(t));
  }
  function y(t, e) {
    t.forEach(function (t) {
      t && (t.style.transitionDuration = e + "ms");
    });
  }
  function w(t, e) {
    t.forEach(function (t) {
      t && t.setAttribute("data-state", e);
    });
  }
  function x(t) {
    var e,
      n = c(t)[0];
    return (null == n || null == (e = n.ownerDocument) ? void 0 : e.body)
      ? n.ownerDocument
      : document;
  }
  function E(t, e, n) {
    var r = e + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
      t[r](e, n);
    });
  }
  var O = { isTouch: !1 },
    C = 0;
  function T() {
    O.isTouch ||
      ((O.isTouch = !0),
      window.performance && document.addEventListener("mousemove", A));
  }
  function A() {
    var t = performance.now();
    t - C < 20 &&
      ((O.isTouch = !1), document.removeEventListener("mousemove", A)),
      (C = t);
  }
  function L() {
    var t = document.activeElement;
    if (h(t)) {
      var e = t._tippy;
      t.blur && !e.state.isVisible && t.blur();
    }
  }
  var D = Object.assign(
      {
        appendTo: function () {
          return document.body;
        },
        aria: { content: "auto", expanded: "auto" },
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
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null,
      },
      { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
      {},
      {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999,
      }
    ),
    k = Object.keys(D);
  function R(t) {
    var e = (t.plugins || []).reduce(function (e, n) {
      var r = n.name,
        i = n.defaultValue;
      return r && (e[r] = void 0 !== t[r] ? t[r] : i), e;
    }, {});
    return Object.assign({}, t, {}, e);
  }
  function j(t, e) {
    var n = Object.assign(
      {},
      e,
      { content: s(e.content, [t]) },
      e.ignoreAttributes
        ? {}
        : (function (t, e) {
            return (
              e ? Object.keys(R(Object.assign({}, D, { plugins: e }))) : k
            ).reduce(function (e, n) {
              var r = (t.getAttribute("data-tippy-" + n) || "").trim();
              if (!r) return e;
              if ("content" === n) e[n] = r;
              else
                try {
                  e[n] = JSON.parse(r);
                } catch (t) {
                  e[n] = r;
                }
              return e;
            }, {});
          })(t, e.plugins)
    );
    return (
      (n.aria = Object.assign({}, D.aria, {}, n.aria)),
      (n.aria = {
        expanded: "auto" === n.aria.expanded ? e.interactive : n.aria.expanded,
        content:
          "auto" === n.aria.content
            ? e.interactive
              ? null
              : "describedby"
            : n.aria.content,
      }),
      n
    );
  }
  function M(t, e) {
    t.innerHTML = e;
  }
  function P(t) {
    var e = v();
    return (
      !0 === t
        ? (e.className = "tippy-arrow")
        : ((e.className = "tippy-svg-arrow"),
          m(t) ? e.appendChild(t) : M(e, t)),
      e
    );
  }
  function V(t, e) {
    m(e.content)
      ? (M(t, ""), t.appendChild(e.content))
      : "function" != typeof e.content &&
        (e.allowHTML ? M(t, e.content) : (t.textContent = e.content));
  }
  function I(t) {
    var e = t.firstElementChild,
      n = d(e.children);
    return {
      box: e,
      content: n.find(function (t) {
        return t.classList.contains("tippy-content");
      }),
      arrow: n.find(function (t) {
        return (
          t.classList.contains("tippy-arrow") ||
          t.classList.contains("tippy-svg-arrow")
        );
      }),
      backdrop: n.find(function (t) {
        return t.classList.contains("tippy-backdrop");
      }),
    };
  }
  function S(t) {
    var e = v(),
      n = v();
    (n.className = "tippy-box"),
      n.setAttribute("data-state", "hidden"),
      n.setAttribute("tabindex", "-1");
    var r = v();
    function i(n, r) {
      var i = I(e),
        o = i.box,
        a = i.content,
        s = i.arrow;
      r.theme
        ? o.setAttribute("data-theme", r.theme)
        : o.removeAttribute("data-theme"),
        "string" == typeof r.animation
          ? o.setAttribute("data-animation", r.animation)
          : o.removeAttribute("data-animation"),
        r.inertia
          ? o.setAttribute("data-inertia", "")
          : o.removeAttribute("data-inertia"),
        (o.style.maxWidth =
          "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
        r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"),
        (n.content === r.content && n.allowHTML === r.allowHTML) ||
          V(a, t.props),
        r.arrow
          ? s
            ? n.arrow !== r.arrow &&
              (o.removeChild(s), o.appendChild(P(r.arrow)))
            : o.appendChild(P(r.arrow))
          : s && o.removeChild(s);
    }
    return (
      (r.className = "tippy-content"),
      r.setAttribute("data-state", "hidden"),
      V(r, t.props),
      e.appendChild(n),
      n.appendChild(r),
      i(t.props, t.props),
      { popper: e, onUpdate: i }
    );
  }
  S.$$tippy = !0;
  var B = 1,
    H = [],
    N = [];
  function U(e, n) {
    var a,
      u,
      m,
      h,
      b,
      C,
      T,
      A,
      L,
      k = j(
        e,
        Object.assign(
          {},
          D,
          {},
          R(
            ((a = n),
            Object.keys(a).reduce(function (t, e) {
              return void 0 !== a[e] && (t[e] = a[e]), t;
            }, {}))
          )
        )
      ),
      M = !1,
      P = !1,
      V = !1,
      S = !1,
      U = [],
      _ = p(bt, k.interactiveDebounce),
      z = B++,
      F = (L = k.plugins).filter(function (t, e) {
        return L.indexOf(t) === e;
      }),
      W = {
        id: z,
        reference: e,
        popper: v(),
        popperInstance: null,
        props: k,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1,
        },
        plugins: F,
        clearDelayTimeouts: function () {
          clearTimeout(u), clearTimeout(m), cancelAnimationFrame(h);
        },
        setProps: function (t) {
          if (W.state.isDestroyed) return;
          it("onBeforeUpdate", [W, t]), gt();
          var n = W.props,
            r = j(
              e,
              Object.assign({}, W.props, {}, t, { ignoreAttributes: !0 })
            );
          (W.props = r),
            mt(),
            n.interactiveDebounce !== r.interactiveDebounce &&
              (st(), (_ = p(bt, r.interactiveDebounce)));
          n.triggerTarget && !r.triggerTarget
            ? c(n.triggerTarget).forEach(function (t) {
                t.removeAttribute("aria-expanded");
              })
            : r.triggerTarget && e.removeAttribute("aria-expanded");
          at(), rt(), q && q(n, r);
          W.popperInstance &&
            (Et(),
            Ct().forEach(function (t) {
              requestAnimationFrame(t._tippy.popperInstance.forceUpdate);
            }));
          it("onAfterUpdate", [W, t]);
        },
        setContent: function (t) {
          W.setProps({ content: t });
        },
        show: function () {
          var t = W.state.isVisible,
            e = W.state.isDestroyed,
            n = !W.state.isEnabled,
            r = O.isTouch && !W.props.touch,
            i = o(W.props.duration, 0, D.duration);
          if (t || e || n || r) return;
          if (Z().hasAttribute("disabled")) return;
          if ((it("onShow", [W], !1), !1 === W.props.onShow(W))) return;
          (W.state.isVisible = !0), Q() && (Y.style.visibility = "visible");
          rt(), ft(), W.state.isMounted || (Y.style.transition = "none");
          if (Q()) {
            var a = et(),
              p = a.box,
              u = a.content;
            y([p, u], 0);
          }
          (T = function () {
            var t;
            if (W.state.isVisible && !S) {
              if (
                ((S = !0),
                Y.offsetHeight,
                (Y.style.transition = W.props.moveTransition),
                Q() && W.props.animation)
              ) {
                var e = et(),
                  n = e.box,
                  r = e.content;
                y([n, r], i), w([n, r], "visible");
              }
              ot(),
                at(),
                f(N, W),
                null == (t = W.popperInstance) || t.forceUpdate(),
                (W.state.isMounted = !0),
                it("onMount", [W]),
                W.props.animation &&
                  Q() &&
                  (function (t, e) {
                    dt(t, e);
                  })(i, function () {
                    (W.state.isShown = !0), it("onShown", [W]);
                  });
            }
          }),
            (function () {
              var t,
                e = W.props.appendTo,
                n = Z();
              t =
                (W.props.interactive && e === D.appendTo) || "parent" === e
                  ? n.parentNode
                  : s(e, [n]);
              t.contains(Y) || t.appendChild(Y);
              Et();
            })();
        },
        hide: function () {
          var t = !W.state.isVisible,
            e = W.state.isDestroyed,
            n = !W.state.isEnabled,
            r = o(W.props.duration, 1, D.duration);
          if (t || e || n) return;
          if ((it("onHide", [W], !1), !1 === W.props.onHide(W))) return;
          (W.state.isVisible = !1),
            (W.state.isShown = !1),
            (S = !1),
            (M = !1),
            Q() && (Y.style.visibility = "hidden");
          if ((st(), lt(), rt(), Q())) {
            var i = et(),
              a = i.box,
              s = i.content;
            W.props.animation && (y([a, s], r), w([a, s], "hidden"));
          }
          ot(),
            at(),
            W.props.animation
              ? Q() &&
                (function (t, e) {
                  dt(t, function () {
                    !W.state.isVisible &&
                      Y.parentNode &&
                      Y.parentNode.contains(Y) &&
                      e();
                  });
                })(r, W.unmount)
              : W.unmount();
        },
        hideWithInteractivity: function (t) {
          tt().addEventListener("mousemove", _), f(H, _), _(t);
        },
        enable: function () {
          W.state.isEnabled = !0;
        },
        disable: function () {
          W.hide(), (W.state.isEnabled = !1);
        },
        unmount: function () {
          W.state.isVisible && W.hide();
          if (!W.state.isMounted) return;
          Ot(),
            Ct().forEach(function (t) {
              t._tippy.unmount();
            }),
            Y.parentNode && Y.parentNode.removeChild(Y);
          (N = N.filter(function (t) {
            return t !== W;
          })),
            (W.state.isMounted = !1),
            it("onHidden", [W]);
        },
        destroy: function () {
          if (W.state.isDestroyed) return;
          W.clearDelayTimeouts(),
            W.unmount(),
            gt(),
            delete e._tippy,
            (W.state.isDestroyed = !0),
            it("onDestroy", [W]);
        },
      };
    if (!k.render) return W;
    var X = k.render(W),
      Y = X.popper,
      q = X.onUpdate;
    Y.setAttribute("data-tippy-root", ""),
      (Y.id = "tippy-" + W.id),
      (W.popper = Y),
      (e._tippy = W),
      (Y._tippy = W);
    var $ = F.map(function (t) {
        return t.fn(W);
      }),
      J = e.hasAttribute("aria-expanded");
    return (
      mt(),
      at(),
      rt(),
      it("onCreate", [W]),
      k.showOnCreate && Tt(),
      Y.addEventListener("mouseenter", function () {
        W.props.interactive && W.state.isVisible && W.clearDelayTimeouts();
      }),
      Y.addEventListener("mouseleave", function (t) {
        W.props.interactive &&
          W.props.trigger.indexOf("mouseenter") >= 0 &&
          (tt().addEventListener("mousemove", _), _(t));
      }),
      W
    );
    function G() {
      var t = W.props.touch;
      return Array.isArray(t) ? t : [t, 0];
    }
    function K() {
      return "hold" === G()[0];
    }
    function Q() {
      var t;
      return !!(null == (t = W.props.render) ? void 0 : t.$$tippy);
    }
    function Z() {
      return A || e;
    }
    function tt() {
      var t = Z().parentNode;
      return t ? x(t) : document;
    }
    function et() {
      return I(Y);
    }
    function nt(t) {
      return (W.state.isMounted && !W.state.isVisible) ||
        O.isTouch ||
        (b && "focus" === b.type)
        ? 0
        : o(W.props.delay, t ? 0 : 1, D.delay);
    }
    function rt() {
      (Y.style.pointerEvents =
        W.props.interactive && W.state.isVisible ? "" : "none"),
        (Y.style.zIndex = "" + W.props.zIndex);
    }
    function it(t, e, n) {
      var r;
      (void 0 === n && (n = !0),
      $.forEach(function (n) {
        n[t] && n[t].apply(void 0, e);
      }),
      n) && (r = W.props)[t].apply(r, e);
    }
    function ot() {
      var t = W.props.aria;
      if (t.content) {
        var n = "aria-" + t.content,
          r = Y.id;
        c(W.props.triggerTarget || e).forEach(function (t) {
          var e = t.getAttribute(n);
          if (W.state.isVisible) t.setAttribute(n, e ? e + " " + r : r);
          else {
            var i = e && e.replace(r, "").trim();
            i ? t.setAttribute(n, i) : t.removeAttribute(n);
          }
        });
      }
    }
    function at() {
      !J &&
        W.props.aria.expanded &&
        c(W.props.triggerTarget || e).forEach(function (t) {
          W.props.interactive
            ? t.setAttribute(
                "aria-expanded",
                W.state.isVisible && t === Z() ? "true" : "false"
              )
            : t.removeAttribute("aria-expanded");
        });
    }
    function st() {
      tt().removeEventListener("mousemove", _),
        (H = H.filter(function (t) {
          return t !== _;
        }));
    }
    function pt(t) {
      if (
        !(
          (O.isTouch && (V || "mousedown" === t.type)) ||
          (W.props.interactive && Y.contains(t.target))
        )
      ) {
        if (Z().contains(t.target)) {
          if (O.isTouch) return;
          if (W.state.isVisible && W.props.trigger.indexOf("click") >= 0)
            return;
        } else it("onClickOutside", [W, t]);
        !0 === W.props.hideOnClick &&
          (W.clearDelayTimeouts(),
          W.hide(),
          (P = !0),
          setTimeout(function () {
            P = !1;
          }),
          W.state.isMounted || lt());
      }
    }
    function ut() {
      V = !0;
    }
    function ct() {
      V = !1;
    }
    function ft() {
      var t = tt();
      t.addEventListener("mousedown", pt, !0),
        t.addEventListener("touchend", pt, i),
        t.addEventListener("touchstart", ct, i),
        t.addEventListener("touchmove", ut, i);
    }
    function lt() {
      var t = tt();
      t.removeEventListener("mousedown", pt, !0),
        t.removeEventListener("touchend", pt, i),
        t.removeEventListener("touchstart", ct, i),
        t.removeEventListener("touchmove", ut, i);
    }
    function dt(t, e) {
      var n = et().box;
      function r(t) {
        t.target === n && (E(n, "remove", r), e());
      }
      if (0 === t) return e();
      E(n, "remove", C), E(n, "add", r), (C = r);
    }
    function vt(t, n, r) {
      void 0 === r && (r = !1),
        c(W.props.triggerTarget || e).forEach(function (e) {
          e.addEventListener(t, n, r),
            U.push({ node: e, eventType: t, handler: n, options: r });
        });
    }
    function mt() {
      var t;
      K() &&
        (vt("touchstart", ht, { passive: !0 }),
        vt("touchend", yt, { passive: !0 })),
        ((t = W.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(
          function (t) {
            if ("manual" !== t)
              switch ((vt(t, ht), t)) {
                case "mouseenter":
                  vt("mouseleave", yt);
                  break;
                case "focus":
                  vt(r ? "focusout" : "blur", wt);
                  break;
                case "focusin":
                  vt("focusout", wt);
              }
          }
        );
    }
    function gt() {
      U.forEach(function (t) {
        var e = t.node,
          n = t.eventType,
          r = t.handler,
          i = t.options;
        e.removeEventListener(n, r, i);
      }),
        (U = []);
    }
    function ht(t) {
      var e,
        n = !1;
      if (W.state.isEnabled && !xt(t) && !P) {
        var r = "focus" === (null == (e = b) ? void 0 : e.type);
        (b = t),
          (A = t.currentTarget),
          at(),
          !W.state.isVisible &&
            g(t) &&
            H.forEach(function (e) {
              return e(t);
            }),
          "click" === t.type &&
          (W.props.trigger.indexOf("mouseenter") < 0 || M) &&
          !1 !== W.props.hideOnClick &&
          W.state.isVisible
            ? (n = !0)
            : Tt(t),
          "click" === t.type && (M = !n),
          n && !r && At(t);
      }
    }
    function bt(t) {
      var e = t.target,
        n = Z().contains(e) || Y.contains(e);
      ("mousemove" === t.type && n) ||
        ((function (t, e) {
          var n = e.clientX,
            r = e.clientY;
          return t.every(function (t) {
            var e = t.popperRect,
              i = t.popperState,
              o = t.props.interactiveBorder,
              a = l(i.placement),
              s = i.modifiersData.offset;
            if (!s) return !0;
            var p = "bottom" === a ? s.top.y : 0,
              u = "top" === a ? s.bottom.y : 0,
              c = "right" === a ? s.left.x : 0,
              f = "left" === a ? s.right.x : 0,
              d = e.top - r + p > o,
              v = r - e.bottom - u > o,
              m = e.left - n + c > o,
              g = n - e.right - f > o;
            return d || v || m || g;
          });
        })(
          Ct()
            .concat(Y)
            .map(function (t) {
              var e,
                n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
              return n
                ? {
                    popperRect: t.getBoundingClientRect(),
                    popperState: n,
                    props: k,
                  }
                : null;
            })
            .filter(Boolean),
          t
        ) &&
          (st(), At(t)));
    }
    function yt(t) {
      xt(t) ||
        (W.props.trigger.indexOf("click") >= 0 && M) ||
        (W.props.interactive ? W.hideWithInteractivity(t) : At(t));
    }
    function wt(t) {
      (W.props.trigger.indexOf("focusin") < 0 && t.target !== Z()) ||
        (W.props.interactive &&
          t.relatedTarget &&
          Y.contains(t.relatedTarget)) ||
        At(t);
    }
    function xt(t) {
      return !!O.isTouch && K() !== t.type.indexOf("touch") >= 0;
    }
    function Et() {
      Ot();
      var n = W.props,
        r = n.popperOptions,
        i = n.placement,
        o = n.offset,
        a = n.getReferenceClientRect,
        s = n.moveTransition,
        p = Q() ? I(Y).arrow : null,
        u = a
          ? {
              getBoundingClientRect: a,
              contextElement: a.contextElement || Z(),
            }
          : e,
        c = [
          { name: "offset", options: { offset: o } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !s } },
          {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (t) {
              var e = t.state;
              if (Q()) {
                var n = et().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (
                  t
                ) {
                  "placement" === t
                    ? n.setAttribute("data-placement", e.placement)
                    : e.attributes.popper["data-popper-" + t]
                    ? n.setAttribute("data-" + t, "")
                    : n.removeAttribute("data-" + t);
                }),
                  (e.attributes.popper = {});
              }
            },
          },
        ];
      Q() &&
        p &&
        c.push({ name: "arrow", options: { element: p, padding: 3 } }),
        c.push.apply(c, (null == r ? void 0 : r.modifiers) || []),
        (W.popperInstance = t.createPopper(
          u,
          Y,
          Object.assign({}, r, { placement: i, onFirstUpdate: T, modifiers: c })
        ));
    }
    function Ot() {
      W.popperInstance &&
        (W.popperInstance.destroy(), (W.popperInstance = null));
    }
    function Ct() {
      return d(Y.querySelectorAll("[data-tippy-root]"));
    }
    function Tt(t) {
      W.clearDelayTimeouts(), t && it("onTrigger", [W, t]), ft();
      var e = nt(!0),
        n = G(),
        r = n[0],
        i = n[1];
      O.isTouch && "hold" === r && i && (e = i),
        e
          ? (u = setTimeout(function () {
              W.show();
            }, e))
          : W.show();
    }
    function At(t) {
      if (
        (W.clearDelayTimeouts(), it("onUntrigger", [W, t]), W.state.isVisible)
      ) {
        if (
          !(
            W.props.trigger.indexOf("mouseenter") >= 0 &&
            W.props.trigger.indexOf("click") >= 0 &&
            ["mouseleave", "mousemove"].indexOf(t.type) >= 0 &&
            M
          )
        ) {
          var e = nt(!1);
          e
            ? (m = setTimeout(function () {
                W.state.isVisible && W.hide();
              }, e))
            : (h = requestAnimationFrame(function () {
                W.hide();
              }));
        }
      } else lt();
    }
  }
  function _(t, e) {
    void 0 === e && (e = {});
    var n = D.plugins.concat(e.plugins || []);
    document.addEventListener("touchstart", T, i),
      window.addEventListener("blur", L);
    var r = Object.assign({}, e, { plugins: n }),
      o = b(t).reduce(function (t, e) {
        var n = e && U(e, r);
        return n && t.push(n), t;
      }, []);
    return m(t) ? o[0] : o;
  }
  (_.defaultProps = D),
    (_.setDefaultProps = function (t) {
      Object.keys(t).forEach(function (e) {
        D[e] = t[e];
      });
    }),
    (_.currentInput = O);
  var z = Object.assign({}, t.applyStyles, {
      effect: function (t) {
        var e = t.state,
          n = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(e.elements.popper.style, n.popper),
          (e.styles = n),
          e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
      },
    }),
    F = { mouseover: "mouseenter", focusin: "focus", click: "click" };
  var W = {
    name: "animateFill",
    defaultValue: !1,
    fn: function (t) {
      var e;
      if (!(null == (e = t.props.render) ? void 0 : e.$$tippy)) return {};
      var n = I(t.popper),
        r = n.box,
        i = n.content,
        o = t.props.animateFill
          ? (function () {
              var t = v();
              return (t.className = "tippy-backdrop"), w([t], "hidden"), t;
            })()
          : null;
      return {
        onCreate: function () {
          o &&
            (r.insertBefore(o, r.firstElementChild),
            r.setAttribute("data-animatefill", ""),
            (r.style.overflow = "hidden"),
            t.setProps({ arrow: !1, animation: "shift-away" }));
        },
        onMount: function () {
          if (o) {
            var t = r.style.transitionDuration,
              e = Number(t.replace("ms", ""));
            (i.style.transitionDelay = Math.round(e / 10) + "ms"),
              (o.style.transitionDuration = t),
              w([o], "visible");
          }
        },
        onShow: function () {
          o && (o.style.transitionDuration = "0ms");
        },
        onHide: function () {
          o && w([o], "hidden");
        },
      };
    },
  };
  var X = { clientX: 0, clientY: 0 },
    Y = [];
  function q(t) {
    var e = t.clientX,
      n = t.clientY;
    X = { clientX: e, clientY: n };
  }
  var $ = {
    name: "followCursor",
    defaultValue: !1,
    fn: function (t) {
      var e = t.reference,
        n = x(t.props.triggerTarget || e),
        r = !1,
        i = !1,
        o = !0,
        a = t.props;
      function s() {
        return "initial" === t.props.followCursor && t.state.isVisible;
      }
      function p() {
        n.addEventListener("mousemove", f);
      }
      function u() {
        n.removeEventListener("mousemove", f);
      }
      function c() {
        (r = !0), t.setProps({ getReferenceClientRect: null }), (r = !1);
      }
      function f(n) {
        var r = !n.target || e.contains(n.target),
          i = t.props.followCursor,
          o = n.clientX,
          a = n.clientY,
          s = e.getBoundingClientRect(),
          p = o - s.left,
          u = a - s.top;
        (!r && t.props.interactive) ||
          t.setProps({
            getReferenceClientRect: function () {
              var t = e.getBoundingClientRect(),
                n = o,
                r = a;
              "initial" === i && ((n = t.left + p), (r = t.top + u));
              var s = "horizontal" === i ? t.top : r,
                c = "vertical" === i ? t.right : n,
                f = "horizontal" === i ? t.bottom : r,
                l = "vertical" === i ? t.left : n;
              return {
                width: c - l,
                height: f - s,
                top: s,
                right: c,
                bottom: f,
                left: l,
              };
            },
          });
      }
      function l() {
        t.props.followCursor &&
          (Y.push({ instance: t, doc: n }),
          (function (t) {
            t.addEventListener("mousemove", q);
          })(n));
      }
      function d() {
        0 ===
          (Y = Y.filter(function (e) {
            return e.instance !== t;
          })).filter(function (t) {
            return t.doc === n;
          }).length &&
          (function (t) {
            t.removeEventListener("mousemove", q);
          })(n);
      }
      return {
        onCreate: l,
        onDestroy: d,
        onBeforeUpdate: function () {
          a = t.props;
        },
        onAfterUpdate: function (e, n) {
          var o = n.followCursor;
          r ||
            (void 0 !== o &&
              a.followCursor !== o &&
              (d(),
              o ? (l(), !t.state.isMounted || i || s() || p()) : (u(), c())));
        },
        onMount: function () {
          t.props.followCursor && !i && (o && (f(X), (o = !1)), s() || p());
        },
        onTrigger: function (t, e) {
          g(e) && (X = { clientX: e.clientX, clientY: e.clientY }),
            (i = "focus" === e.type);
        },
        onHidden: function () {
          t.props.followCursor && (c(), u(), (o = !0));
        },
      };
    },
  };
  var J = {
    name: "inlinePositioning",
    defaultValue: !1,
    fn: function (t) {
      var e,
        n = t.reference;
      var r = -1,
        i = !1,
        o = {
          name: "tippyInlinePositioning",
          enabled: !0,
          phase: "afterWrite",
          fn: function (i) {
            var o = i.state;
            t.props.inlinePositioning &&
              (e !== o.placement &&
                t.setProps({
                  getReferenceClientRect: function () {
                    return (function (t) {
                      return (function (t, e, n, r) {
                        if (n.length < 2 || null === t) return e;
                        if (2 === n.length && r >= 0 && n[0].left > n[1].right)
                          return n[r] || e;
                        switch (t) {
                          case "top":
                          case "bottom":
                            var i = n[0],
                              o = n[n.length - 1],
                              a = "top" === t,
                              s = i.top,
                              p = o.bottom,
                              u = a ? i.left : o.left,
                              c = a ? i.right : o.right;
                            return {
                              top: s,
                              bottom: p,
                              left: u,
                              right: c,
                              width: c - u,
                              height: p - s,
                            };
                          case "left":
                          case "right":
                            var f = Math.min.apply(
                                Math,
                                n.map(function (t) {
                                  return t.left;
                                })
                              ),
                              l = Math.max.apply(
                                Math,
                                n.map(function (t) {
                                  return t.right;
                                })
                              ),
                              d = n.filter(function (e) {
                                return "left" === t
                                  ? e.left === f
                                  : e.right === l;
                              }),
                              v = d[0].top,
                              m = d[d.length - 1].bottom;
                            return {
                              top: v,
                              bottom: m,
                              left: f,
                              right: l,
                              width: l - f,
                              height: m - v,
                            };
                          default:
                            return e;
                        }
                      })(
                        l(t),
                        n.getBoundingClientRect(),
                        d(n.getClientRects()),
                        r
                      );
                    })(o.placement);
                  },
                }),
              (e = o.placement));
          },
        };
      function a() {
        var e;
        i ||
          ((e = (function (t, e) {
            var n;
            return {
              popperOptions: Object.assign({}, t.popperOptions, {
                modifiers: [].concat(
                  (
                    (null == (n = t.popperOptions) ? void 0 : n.modifiers) || []
                  ).filter(function (t) {
                    return t.name !== e.name;
                  }),
                  [e]
                ),
              }),
            };
          })(t.props, o)),
          (i = !0),
          t.setProps(e),
          (i = !1));
      }
      return {
        onCreate: a,
        onAfterUpdate: a,
        onTrigger: function (e, n) {
          if (g(n)) {
            var i = d(t.reference.getClientRects()),
              o = i.find(function (t) {
                return (
                  t.left - 2 <= n.clientX &&
                  t.right + 2 >= n.clientX &&
                  t.top - 2 <= n.clientY &&
                  t.bottom + 2 >= n.clientY
                );
              });
            r = i.indexOf(o);
          }
        },
        onUntrigger: function () {
          r = -1;
        },
      };
    },
  };
  var G = {
    name: "sticky",
    defaultValue: !1,
    fn: function (t) {
      var e = t.reference,
        n = t.popper;
      function r(e) {
        return !0 === t.props.sticky || t.props.sticky === e;
      }
      var i = null,
        o = null;
      function a() {
        var s = r("reference")
            ? (t.popperInstance
                ? t.popperInstance.state.elements.reference
                : e
              ).getBoundingClientRect()
            : null,
          p = r("popper") ? n.getBoundingClientRect() : null;
        ((s && K(i, s)) || (p && K(o, p))) &&
          t.popperInstance &&
          t.popperInstance.update(),
          (i = s),
          (o = p),
          t.state.isMounted && requestAnimationFrame(a);
      }
      return {
        onMount: function () {
          t.props.sticky && a();
        },
      };
    },
  };
  function K(t, e) {
    return (
      !t ||
      !e ||
      t.top !== e.top ||
      t.right !== e.right ||
      t.bottom !== e.bottom ||
      t.left !== e.left
    );
  }
  return (
    e &&
      (function (t) {
        var e = document.createElement("style");
        (e.textContent = t), e.setAttribute("data-tippy-stylesheet", "");
        var n = document.head,
          r = document.querySelector("head>style,head>link");
        r ? n.insertBefore(e, r) : n.appendChild(e);
      })(
        '.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'
      ),
    _.setDefaultProps({ plugins: [W, $, J, G], render: S }),
    (_.createSingleton = function (t, e) {
      var n;
      void 0 === e && (e = {});
      var r,
        i = t,
        o = [],
        a = e.overrides,
        s = [],
        p = !1;
      function c() {
        o = i.map(function (t) {
          return t.reference;
        });
      }
      function f(t) {
        i.forEach(function (e) {
          t ? e.enable() : e.disable();
        });
      }
      function l(t) {
        return i.map(function (e) {
          var n = e.setProps;
          return (
            (e.setProps = function (i) {
              n(i), e.reference === r && t.setProps(i);
            }),
            function () {
              e.setProps = n;
            }
          );
        });
      }
      function d(t, e) {
        var n = o.indexOf(e);
        if (e !== r) {
          r = e;
          var s = (a || []).concat("content").reduce(function (t, e) {
            return (t[e] = i[n].props[e]), t;
          }, {});
          t.setProps(
            Object.assign({}, s, {
              getReferenceClientRect:
                "function" == typeof s.getReferenceClientRect
                  ? s.getReferenceClientRect
                  : function () {
                      return e.getBoundingClientRect();
                    },
            })
          );
        }
      }
      f(!1), c();
      var m = {
          fn: function () {
            return {
              onDestroy: function () {
                f(!0);
              },
              onHidden: function () {
                r = null;
              },
              onClickOutside: function (t) {
                t.props.showOnCreate && !p && ((p = !0), (r = null));
              },
              onShow: function (t) {
                t.props.showOnCreate && !p && ((p = !0), d(t, o[0]));
              },
              onTrigger: function (t, e) {
                d(t, e.currentTarget);
              },
            };
          },
        },
        g = _(
          v(),
          Object.assign({}, u(e, ["overrides"]), {
            plugins: [m].concat(e.plugins || []),
            triggerTarget: o,
            popperOptions: Object.assign({}, e.popperOptions, {
              modifiers: [].concat(
                (null == (n = e.popperOptions) ? void 0 : n.modifiers) || [],
                [z]
              ),
            }),
          })
        ),
        h = g.show;
      (g.show = function (t) {
        if ((h(), !r && null == t)) return d(g, o[0]);
        if (!r || null != t) {
          if ("number" == typeof t) return o[t] && d(g, o[t]);
          if (i.includes(t)) {
            var e = t.reference;
            return d(g, e);
          }
          return o.includes(t) ? d(g, t) : void 0;
        }
      }),
        (g.showNext = function () {
          var t = o[0];
          if (!r) return g.show(0);
          var e = o.indexOf(r);
          g.show(o[e + 1] || t);
        }),
        (g.showPrevious = function () {
          var t = o[o.length - 1];
          if (!r) return g.show(t);
          var e = o.indexOf(r),
            n = o[e - 1] || t;
          g.show(n);
        });
      var b = g.setProps;
      return (
        (g.setProps = function (t) {
          (a = t.overrides || a), b(t);
        }),
        (g.setInstances = function (t) {
          f(!0),
            s.forEach(function (t) {
              return t();
            }),
            (i = t),
            f(!1),
            c(),
            l(g),
            g.setProps({ triggerTarget: o });
        }),
        (s = l(g)),
        g
      );
    }),
    (_.delegate = function (t, e) {
      var n = [],
        r = [],
        o = !1,
        a = e.target,
        s = u(e, ["target"]),
        p = Object.assign({}, s, { trigger: "manual", touch: !1 }),
        f = Object.assign({}, s, { showOnCreate: !0 }),
        l = _(t, p);
      function d(t) {
        if (t.target && !o) {
          var n = t.target.closest(a);
          if (n) {
            var i =
              n.getAttribute("data-tippy-trigger") || e.trigger || D.trigger;
            if (
              !n._tippy &&
              !(
                ("touchstart" === t.type && "boolean" == typeof f.touch) ||
                ("touchstart" !== t.type && i.indexOf(F[t.type]) < 0)
              )
            ) {
              var s = _(n, f);
              s && (r = r.concat(s));
            }
          }
        }
      }
      function v(t, e, r, i) {
        void 0 === i && (i = !1),
          t.addEventListener(e, r, i),
          n.push({ node: t, eventType: e, handler: r, options: i });
      }
      return (
        c(l).forEach(function (t) {
          var e = t.destroy,
            a = t.enable,
            s = t.disable;
          (t.destroy = function (t) {
            void 0 === t && (t = !0),
              t &&
                r.forEach(function (t) {
                  t.destroy();
                }),
              (r = []),
              n.forEach(function (t) {
                var e = t.node,
                  n = t.eventType,
                  r = t.handler,
                  i = t.options;
                e.removeEventListener(n, r, i);
              }),
              (n = []),
              e();
          }),
            (t.enable = function () {
              a(),
                r.forEach(function (t) {
                  return t.enable();
                }),
                (o = !1);
            }),
            (t.disable = function () {
              s(),
                r.forEach(function (t) {
                  return t.disable();
                }),
                (o = !0);
            }),
            (function (t) {
              var e = t.reference;
              v(e, "touchstart", d, i),
                v(e, "mouseover", d),
                v(e, "focusin", d),
                v(e, "click", d);
            })(t);
        }),
        l
      );
    }),
    (_.hideAll = function (t) {
      var e = void 0 === t ? {} : t,
        n = e.exclude,
        r = e.duration;
      N.forEach(function (t) {
        var e = !1;
        if ((n && (e = h(n) ? t.reference === n : t.popper === n.popper), !e)) {
          var i = t.props.duration;
          t.setProps({ duration: r }),
            t.hide(),
            t.state.isDestroyed || t.setProps({ duration: i });
        }
      });
    }),
    (_.roundArrow =
      '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>'),
    _
  );
});
//# sourceMappingURL=tippy-bundle.umd.min.js.map
