/*!
 * purecounter.js - A simple yet configurable native javascript counter which you can count on.
 * Author: Stig Rex
 * Version: 1.1.4
 * Url: https://github.com/srexi/purecounterjs
 * License: MIT
 */ !(function () {
  function e() {
    var e = document.querySelectorAll(".purecounter");
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      var r = new IntersectionObserver(n, {
        root: null,
        rootMargin: "20px",
        threshold: 0.5,
      });
      e.forEach(function (e) {
        r.observe(e);
      });
    } else
      window.addEventListener &&
        (t(e),
        window.addEventListener(
          "scroll",
          function (n) {
            t(e);
          },
          { passive: !0 }
        ));
  }
  function t(e) {
    e.forEach(function (e) {
      !0 === r(e).legacy && a(e) && n([e]);
    });
  }
  function n(e, t) {
    e.forEach(function (e) {
      var n = e.target || e,
        c = r(n);
      if (c.duration <= 0) return (n.innerHTML = o(c.end, c));
      if ((!t && !a(e)) || (t && e.intersectionRatio < 0.5)) {
        var s = c.start > c.end ? c.end : c.start;
        return (n.innerHTML = o(s, c));
      }
      setTimeout(function () {
        return (function (e, t) {
          var n = (t.end - t.start) / (t.duration / t.delay),
            r = "inc";
          t.start > t.end && ((r = "dec"), (n *= -1));
          var a = i(t.start);
          (e.innerHTML = o(a, t)),
            !0 === t.once && e.setAttribute("data-purecounter-duration", 0);
          var c = setInterval(function () {
            var s = (function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "inc";
              return (
                (e = i(e)), (t = i(t)), parseFloat("inc" === n ? e + t : e - t)
              );
            })(a, n, r);
            (e.innerHTML = o(s, t)),
              (((a = s) >= t.end && "inc" == r) ||
                (a <= t.end && "dec" == r)) &&
                ((e.innerHTML = o(t.end, t)), clearInterval(c));
          }, t.delay);
        })(n, c);
      }, c.delay);
    });
  }
  function r(e) {
    var t = [].filter.call(e.attributes, function (e) {
        return /^data-purecounter-/.test(e.name);
      }),
      n = {};
    return (
      t.forEach(function (e) {
        var t = e.name.replace("data-purecounter-", "").toLowerCase(),
          r = "duration" == t ? parseInt(1e3 * i(e.value)) : i(e.value);
        n[t] = r;
      }),
      Object.assign(
        {
          start: 0,
          end: 9001,
          duration: 2e3,
          delay: 10,
          once: !0,
          decimals: 0,
          legacy: !0,
          currency: !1,
          currencysymbol: !1,
          separator: !1,
          separatorsymbol: ",",
        },
        n
      )
    );
  }
  function o(e, t) {
    var n = {
      minimumFractionDigits: t.decimals,
      maximumFractionDigits: t.decimals,
    };
    return (function (e, t) {
      return t.separator
        ? e
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            .replace(new RegExp(/,/gi, "gi"), t.separatorsymbol)
        : e.replace(new RegExp(/,/gi, "gi"), "");
    })(
      (e = t.currency
        ? (function (e, t) {
            var n = t.currencysymbol || "",
              r = t.decimals || 1;
            return (
              n +
              ((e = Math.abs(Number(e))) >= 1e12
                ? "".concat((e / 1e12).toFixed(r), " T")
                : e >= 1e9
                ? "".concat((e / 1e9).toFixed(r), " B")
                : e >= 1e6
                ? "".concat((e / 1e6).toFixed(r), " M")
                : e >= 1e3
                ? "".concat((e / 1e12).toFixed(r), " K")
                : e.toFixed(r))
            );
          })(e, t)
        : parseFloat(e)).toLocaleString(void 0, n),
      t
    );
  }
  function i(e) {
    return /^[0-9]+\.[0-9]+$/.test(e)
      ? parseFloat(e)
      : /^[0-9]+$/.test(e)
      ? parseInt(e)
      : /^true|false/i.test(e)
      ? /^true/i.test(e)
      : e;
  }
  function a(e) {
    for (
      var t = e.offsetTop,
        n = e.offsetLeft,
        r = e.offsetWidth,
        o = e.offsetHeight;
      e.offsetParent;

    )
      (t += (e = e.offsetParent).offsetTop), (n += e.offsetLeft);
    return (
      t >= window.pageYOffset &&
      n >= window.pageXOffset &&
      t + o <= window.pageYOffset + window.innerHeight &&
      n + r <= window.pageXOffset + window.innerWidth
    );
  }
  e();
})();
//# sourceMappingURL=purecounter_vanilla.js.map
