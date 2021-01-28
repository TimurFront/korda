! function() {
    function h(t) {
        return t.split("").reverse().join("")
    }

    function o(t, e, n) {
        if ((t[e] || t[n]) && t[e] === t[n]) throw Error(e)
    }

    function n(t, e, n, r, i, o, s, a, l, u, c, p) {
        s = p;
        var f, d = c = "";
        return o && (p = o(p)), !("number" != typeof p || !isFinite(p)) && (t && 0 === parseFloat(p.toFixed(t)) && (p = 0), p < 0 && (f = !0, p = Math.abs(p)), t && (o = Math.pow(10, t), p = (Math.round(p * o) / o).toFixed(t)), -1 !== (p = p.toString()).indexOf(".") && (p = (t = p.split("."))[0], n && (c = n + t[1])), e && (p = h((p = h(p).match(/.{1,3}/g)).join(h(e)))), f && a && (d += a), r && (d += r), f && l && (d += l), d = d + p + c, i && (d += i), u && (d = u(d, s)), d)
    }

    function r(t, e, n, r, i, o, s, a, l, u, c, p) {
        var f;
        return t = "", c && (p = c(p)), !(!p || "string" != typeof p) && (a && p.substring(0, a.length) === a && (p = p.replace(a, ""), f = !0), r && p.substring(0, r.length) === r && (p = p.replace(r, "")), l && p.substring(0, l.length) === l && (p = p.replace(l, ""), f = !0), i && p.slice(-1 * i.length) === i && (p = p.slice(0, -1 * i.length)), e && (p = p.split(e).join("")), n && (p = p.replace(n, ".")), f && (t += "-"), t = Number((t + p).replace(/[^0-9\.\-.]/g, "")), s && (t = s(t)), !("number" != typeof t || !isFinite(t)) && t)
    }

    function i(t, e, n) {
        var r, i = [];
        for (r = 0; r < s.length; r += 1) i.push(t[s[r]]);
        return i.push(n), e.apply("", i)
    }
    var s = "decimals thousand mark prefix postfix encoder decoder negativeBefore negative edit undo".split(" ");
    window.wNumb = function t(e) {
        if (!(this instanceof t)) return new t(e);
        "object" == typeof e && (e = function(t) {
            var e, n, r, i = {};
            for (e = 0; e < s.length; e += 1) void 0 === (r = t[n = s[e]]) ? i[n] = "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand && "." : "-" : "decimals" === n ? 0 < r && r < 8 && (i[n] = r) : "encoder" === n || "decoder" === n || "edit" === n || "undo" === n ? "function" == typeof r && (i[n] = r) : "string" == typeof r && (i[n] = r);
            return o(i, "mark", "thousand"), o(i, "prefix", "negative"), o(i, "prefix", "negativeBefore"), i
        }(e), this.to = function(t) {
            return i(e, n, t)
        }, this.from = function(t) {
            return i(e, r, t)
        })
    }
}(),
function(t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
    "use strict";

    function B(t, e) {
        var n = document.createElement("div");
        return I(n, e), t.appendChild(n), n
    }

    function i(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function X(t, e, n) {
        0 < n && (I(t, e), setTimeout(function() {
            _(t, e)
        }, n))
    }

    function Y(t) {
        return Array.isArray(t) ? t : [t]
    }

    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0
    }

    function I(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }

    function _(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function W() {
        var t = void 0 !== window.pageXOffset,
            e = "CSS1Compat" === (document.compatMode || "");
        return {
            x: t ? window.pageXOffset : e ? document.documentElement.scrollLeft : document.body.scrollLeft,
            y: t ? window.pageYOffset : e ? document.documentElement.scrollTop : document.body.scrollTop
        }
    }

    function c(t, e) {
        return 100 / (e - t)
    }

    function p(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function f(t, e) {
        for (var n = 1; t >= e[n];) n += 1;
        return n
    }

    function n(t, e, n) {
        if (n >= t.slice(-1)[0]) return 100;
        var r, i, o, s, a, l, u = f(n, t);
        return r = t[u - 1], i = t[u], o = e[u - 1], s = e[u], o + (l = n, p(a = [r, i], a[0] < 0 ? l + Math.abs(a[0]) : l - a[0]) / c(o, s))
    }

    function r(t, e, n, r) {
        if (100 === r) return r;
        var i, o, s, a, l = f(r, t);
        return n ? (i = t[l - 1], ((o = t[l]) - i) / 2 < r - i ? o : i) : e[l - 1] ? t[l - 1] + (s = r - t[l - 1], a = e[l - 1], Math.round(s / a) * a) : r
    }

    function s(t, e, n) {
        var r;
        if ("number" == typeof e && (e = [e]), "[object Array]" !== Object.prototype.toString.call(e)) throw new Error("noUiSlider: 'range' contains invalid value.");
        if (!i(r = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        n.xPct.push(r), n.xVal.push(e[0]), r ? n.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (n.xSteps[0] = e[1]), n.xHighestCompleteStep.push(0)
    }

    function a(t, e, n) {
        if (!e) return !0;
        n.xSteps[t] = p([n.xVal[t], n.xVal[t + 1]], e) / c(n.xPct[t], n.xPct[t + 1]);
        var r = (n.xVal[t + 1] - n.xVal[t]) / n.xNumSteps[t],
            i = Math.ceil(Number(r.toFixed(3)) - 1),
            o = n.xVal[t] + n.xNumSteps[t] * i;
        n.xHighestCompleteStep[t] = o
    }

    function o(t, e, n, r) {
        this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e, this.direction = n;
        var i, o = [];
        for (i in t) t.hasOwnProperty(i) && o.push([t[i], i]);
        for (o.length && "object" == typeof o[0][0] ? o.sort(function(t, e) {
                return t[0][0] - e[0][0]
            }) : o.sort(function(t, e) {
                return t[0] - e[0]
            }), i = 0; i < o.length; i++) s(o[i][1], o[i][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++) a(i, this.xNumSteps[i], this)
    }
    o.prototype.getMargin = function(t) {
        var e = this.xNumSteps[0];
        if (e && t / e % 1 != 0) throw new Error("noUiSlider: 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && p(this.xVal, t)
    }, o.prototype.toStepping = function(t) {
        return t = n(this.xVal, this.xPct, t)
    }, o.prototype.fromStepping = function(t) {
        return function(t, e, n) {
            if (100 <= n) return t.slice(-1)[0];
            var r, i, o, s, a, l = f(n, e);
            return r = t[l - 1], i = t[l], o = e[l - 1], s = e[l], a = [r, i], (n - o) * c(o, s) * (a[1] - a[0]) / 100 + a[0]
        }(this.xVal, this.xPct, t)
    }, o.prototype.getStep = function(t) {
        return t = r(this.xPct, this.xSteps, this.snap, t)
    }, o.prototype.getNearbySteps = function(t) {
        var e = f(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e - 0],
                step: this.xNumSteps[e - 0],
                highestStep: this.xHighestCompleteStep[e - 0]
            }
        }
    }, o.prototype.countStepDecimals = function() {
        var t = this.xNumSteps.map(e);
        return Math.max.apply(null, t)
    }, o.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    };
    var l = {
        to: function(t) {
            return void 0 !== t && t.toFixed(2)
        },
        from: Number
    };

    function u(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'step' is not numeric.");
        t.singleStep = e
    }

    function d(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new o(e, t.snap, t.dir, t.singleStep)
    }

    function h(t, e) {
        if (e = Y(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider: 'start' option is incorrect.");
        t.handles = e.length, t.start = e
    }

    function m(t, e) {
        if ("boolean" != typeof(t.snap = e)) throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function g(t, e) {
        if ("boolean" != typeof(t.animate = e)) throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }

    function v(t, e) {
        if ("number" != typeof(t.animationDuration = e)) throw new Error("noUiSlider: 'animationDuration' option must be a number.")
    }

    function b(t, e) {
        var n, r = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
            for (n = 1; n < t.handles; n++) r.push(e);
            r.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            r = e
        }
        t.connect = r
    }

    function w(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function S(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }

    function x(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function y(t, e) {
        if (!i(e)) throw new Error("noUiSlider: 'padding' option must be numeric.");
        if (0 !== e) {
            if (t.padding = t.spectrum.getMargin(e), !t.padding) throw new Error("noUiSlider: 'padding' option is only supported on linear sliders.");
            if (t.padding < 0) throw new Error("noUiSlider: 'padding' option must be a positive number.");
            if (50 <= t.padding) throw new Error("noUiSlider: 'padding' option must be less than half the range.")
        }
    }

    function E(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function C(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var n = 0 <= e.indexOf("tap"),
            r = 0 <= e.indexOf("drag"),
            i = 0 <= e.indexOf("fixed"),
            o = 0 <= e.indexOf("snap"),
            s = 0 <= e.indexOf("hover");
        if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            S(t, t.start[1] - t.start[0])
        }
        t.events = {
            tap: n || o,
            drag: r,
            fixed: i,
            snap: o,
            hover: s
        }
    }

    function N(t, e) {
        if (!1 !== e)
            if (!0 === e) {
                t.tooltips = [];
                for (var n = 0; n < t.handles; n++) t.tooltips.push(!0)
            } else {
                if (t.tooltips = Y(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                t.tooltips.forEach(function(t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }

    function U(t, e) {
        if ("function" == typeof(t.format = e).to && "function" == typeof e.from) return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function M(t, e) {
        if (void 0 !== e && "string" != typeof e && !1 !== e) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }

    function P(t, e) {
        if (void 0 !== e && "object" != typeof e) throw new Error("noUiSlider: 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix)
            for (var n in t.cssClasses = {}, e) e.hasOwnProperty(n) && (t.cssClasses[n] = t.cssPrefix + e[n]);
        else t.cssClasses = e
    }

    function k(t, e) {
        if (!0 !== e && !1 !== e) throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");
        t.useRequestAnimationFrame = e
    }

    function $(e) {
        var n = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: !0,
                animationDuration: 300,
                format: l
            },
            r = {
                step: {
                    r: !1,
                    t: u
                },
                start: {
                    r: !0,
                    t: h
                },
                connect: {
                    r: !0,
                    t: b
                },
                direction: {
                    r: !0,
                    t: E
                },
                snap: {
                    r: !1,
                    t: m
                },
                animate: {
                    r: !1,
                    t: g
                },
                animationDuration: {
                    r: !1,
                    t: v
                },
                range: {
                    r: !0,
                    t: d
                },
                orientation: {
                    r: !1,
                    t: w
                },
                margin: {
                    r: !1,
                    t: S
                },
                limit: {
                    r: !1,
                    t: x
                },
                padding: {
                    r: !1,
                    t: y
                },
                behaviour: {
                    r: !0,
                    t: C
                },
                format: {
                    r: !1,
                    t: U
                },
                tooltips: {
                    r: !1,
                    t: N
                },
                cssPrefix: {
                    r: !1,
                    t: M
                },
                cssClasses: {
                    r: !1,
                    t: P
                },
                useRequestAnimationFrame: {
                    r: !1,
                    t: k
                }
            },
            i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleTouchArea: "handle-touch-area",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    ltr: "ltr",
                    rtl: "rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                },
                useRequestAnimationFrame: !0
            };
        Object.keys(r).forEach(function(t) {
            if (void 0 === e[t] && void 0 === i[t]) {
                if (r[t].r) throw new Error("noUiSlider: '" + t + "' is required.");
                return !0
            }
            r[t].t(n, void 0 === e[t] ? i[t] : e[t])
        }), n.pips = e.pips;
        var t = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        return n.style = t[n.dir][n.ort], n.styleOposite = t[n.dir ? 0 : 1][n.ort], n
    }

    function O(t, f, o) {
        var a, l, s, u, e, c, i, p = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            S = t,
            d = [],
            h = [],
            m = !1,
            x = f.spectrum,
            g = [],
            v = {};

        function b(t, e) {
            return !!e && B(t, f.cssClasses.connect)
        }

        function n(t, e) {
            return !!f.tooltips[e] && B(t.firstChild, f.cssClasses.tooltip)
        }

        function y(r, i, o) {
            var t = document.createElement("div"),
                s = "",
                a = [f.cssClasses.valueNormal, f.cssClasses.valueLarge, f.cssClasses.valueSub],
                l = [f.cssClasses.markerNormal, f.cssClasses.markerLarge, f.cssClasses.markerSub],
                u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
                c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];

            function p(t, e, n) {
                return 'class="' + (r = n[1], o = (i = e) === f.cssClasses.value, s = o ? a : l, i + " " + (o ? u : c)[f.ort] + " " + s[r]) + '" style="' + f.style + ": " + t + '%"';
                var r, i, o, s
            }
            return I(t, f.cssClasses.pips), I(t, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical), Object.keys(r).forEach(function(t) {
                var e, n;
                (n = r[e = t])[1] = n[1] && i ? i(n[0], n[1]) : n[1], s += "<div " + p(e, f.cssClasses.marker, n) + "></div>", n[1] && (s += "<div " + p(e, f.cssClasses.value, n) + ">" + o.to(n[0]) + "</div>")
            }), t.innerHTML = s, t
        }

        function r(t) {
            var d, h, m, g, e, n, v, b, w, r = t.mode,
                i = t.density || 1,
                o = t.filter || !1,
                s = function(t, e, n) {
                    if ("range" === t || "steps" === t) return x.xVal;
                    if ("count" === t) {
                        var r, i = 100 / (e - 1),
                            o = 0;
                        for (e = [];
                            (r = o++ * i) <= 100;) e.push(r);
                        t = "positions"
                    }
                    return "positions" === t ? e.map(function(t) {
                        return x.fromStepping(n ? x.getStep(t) : t)
                    }) : "values" === t ? n ? e.map(function(t) {
                        return x.fromStepping(x.getStep(x.toStepping(t)))
                    }) : e : void 0
                }(r, t.values || !1, t.stepped || !1),
                a = (d = i, h = r, m = s, g = {}, e = x.xVal[0], n = x.xVal[x.xVal.length - 1], b = v = !1, w = 0, (m = m.slice().sort(function(t, e) {
                    return t - e
                }).filter(function(t) {
                    return !this[t] && (this[t] = !0)
                }, {}))[0] !== e && (m.unshift(e), v = !0), m[m.length - 1] !== n && (m.push(n), b = !0), m.forEach(function(t, e) {
                    var n, r, i, o, s, a, l, u, c, p = t,
                        f = m[e + 1];
                    if ("steps" === h && (n = x.xNumSteps[e]), n || (n = f - p), !1 !== p && void 0 !== f)
                        for (n = Math.max(n, 1e-7), r = p; r <= f; r = (r + n).toFixed(7) / 1) {
                            for (l = (s = (o = x.toStepping(r)) - w) / d, c = s / (u = Math.round(l)), i = 1; i <= u; i += 1) g[(w + i * c).toFixed(5)] = ["x", 0];
                            a = -1 < m.indexOf(r) ? 1 : "steps" === h ? 2 : 0, !e && v && (a = 0), r === f && b || (g[o.toFixed(5)] = [r, a]), w = o
                        }
                }), g),
                l = t.format || {
                    to: Math.round
                };
            return S.appendChild(y(a, o, l))
        }

        function w() {
            var t = a.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][f.ort];
            return 0 === f.ort ? t.width || a[e] : t.height || a[e]
        }

        function E(r, e, i, o) {
            var n = function(t) {
                    return !S.hasAttribute("disabled") && (e = S, n = f.cssClasses.tap, (e.classList ? !e.classList.contains(n) : !new RegExp("\\b" + n + "\\b").test(e.className)) && (!!(t = function(t, e) {
                        t.preventDefault();
                        var n, r, i = 0 === t.type.indexOf("touch"),
                            o = 0 === t.type.indexOf("mouse"),
                            s = 0 === t.type.indexOf("pointer");
                        0 === t.type.indexOf("MSPointer") && (s = !0);
                        if (i) {
                            if (1 < t.touches.length) return !1;
                            n = t.changedTouches[0].pageX, r = t.changedTouches[0].pageY
                        }
                        e = e || W(), (o || s) && (n = t.clientX + e.x, r = t.clientY + e.y);
                        return t.pageOffset = e, t.points = [n, r], t.cursor = o || s, t
                    }(t, o.pageOffset)) && (!(r === p.start && void 0 !== t.buttons && 1 < t.buttons) && ((!o.hover || !t.buttons) && (t.calcPoint = t.points[f.ort], void i(t, o))))));
                    var e, n
                },
                s = [];
            return r.split(" ").forEach(function(t) {
                e.addEventListener(t, n, !1), s.push([t, n])
            }), s
        }

        function C(t) {
            var e, n, r, i, o, s = 100 * (t - (e = a, n = f.ort, r = e.getBoundingClientRect(), i = e.ownerDocument.documentElement, o = W(), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0), n ? r.top + o.y - i.clientTop : r.left + o.x - i.clientLeft)) / w();
            return f.dir ? 100 - s : s
        }

        function N(t, r, n, e) {
            var i = n.slice(),
                o = [!t, t],
                s = [t, !t];
            e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function(t, e) {
                var n = L(i, t, i[t] + r, o[e], s[e]);
                !1 === n ? r = 0 : (r = n - i[t], i[t] = n)
            }) : o = s = [!0];
            var a = !1;
            e.forEach(function(t, e) {
                a = z(t, n[t] + r, o[e], s[e]) || a
            }), a && e.forEach(function(t) {
                U("update", t), U("slide", t)
            })
        }

        function U(n, r, i) {
            Object.keys(v).forEach(function(t) {
                var e = t.split(".")[0];
                n === e && v[t].forEach(function(t) {
                    t.call(u, g.map(f.format.to), r, g.slice(), i || !1, d.slice())
                })
            })
        }

        function M(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && k(t, e)
        }

        function P(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return k(t, e);
            var n = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            N(0 < n, 100 * n / e.baseSize, e.locations, e.handleNumbers)
        }

        function k(t, e) {
            m && (_(m, f.cssClasses.active), m = !1), t.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)), document.documentElement.noUiListeners.forEach(function(t) {
                document.documentElement.removeEventListener(t[0], t[1])
            }), _(S, f.cssClasses.drag), j(), e.handleNumbers.forEach(function(t) {
                U("set", t), U("change", t), U("end", t)
            })
        }

        function O(t, e) {
            if (1 === e.handleNumbers.length) {
                var n = l[e.handleNumbers[0]];
                if (n.hasAttribute("disabled")) return !1;
                I(m = n.children[0], f.cssClasses.active)
            }
            t.preventDefault(), t.stopPropagation();
            var r = E(p.move, document.documentElement, P, {
                    startCalcPoint: t.calcPoint,
                    baseSize: w(),
                    pageOffset: t.pageOffset,
                    handleNumbers: e.handleNumbers,
                    buttonsProperty: t.buttons,
                    locations: d.slice()
                }),
                i = E(p.end, document.documentElement, k, {
                    handleNumbers: e.handleNumbers
                }),
                o = E("mouseout", document.documentElement, M, {
                    handleNumbers: e.handleNumbers
                });
            if (document.documentElement.noUiListeners = r.concat(i, o), t.cursor) {
                document.body.style.cursor = getComputedStyle(t.target).cursor, 1 < l.length && I(S, f.cssClasses.drag);
                var s = function() {
                    return !1
                };
                document.body.noUiListener = s, document.body.addEventListener("selectstart", s, !1)
            }
            e.handleNumbers.forEach(function(t) {
                U("start", t)
            })
        }

        function V(t) {
            t.stopPropagation();
            var r, i, o, e = C(t.calcPoint),
                n = (r = e, o = !(i = 100), l.forEach(function(t, e) {
                    if (!t.hasAttribute("disabled")) {
                        var n = Math.abs(d[e] - r);
                        n < i && (o = e, i = n)
                    }
                }), o);
            if (!1 === n) return !1;
            f.events.snap || X(S, f.cssClasses.tap, f.animationDuration), z(n, e, !0, !0), j(), U("slide", n, !0), U("set", n, !0), U("change", n, !0), U("update", n, !0), f.events.snap && O(t, {
                handleNumbers: [n]
            })
        }

        function A(t) {
            var e = C(t.calcPoint),
                n = x.getStep(e),
                r = x.fromStepping(n);
            Object.keys(v).forEach(function(t) {
                "hover" === t.split(".")[0] && v[t].forEach(function(t) {
                    t.call(u, r)
                })
            })
        }

        function L(t, e, n, r, i) {
            var o;
            return 1 < l.length && (r && 0 < e && (n = Math.max(n, t[e - 1] + f.margin)), i && e < l.length - 1 && (n = Math.min(n, t[e + 1] - f.margin))), 1 < l.length && f.limit && (r && 0 < e && (n = Math.min(n, t[e - 1] + f.limit)), i && e < l.length - 1 && (n = Math.max(n, t[e + 1] - f.limit))), f.padding && (0 === e && (n = Math.max(n, f.padding)), e === l.length - 1 && (n = Math.min(n, 100 - f.padding))), n = x.getStep(n), o = n, (n = Math.max(Math.min(o, 100), 0)) !== t[e] && n
        }

        function F(t) {
            return t + "%"
        }

        function j() {
            h.forEach(function(t) {
                var e = 50 < d[t] ? -1 : 1,
                    n = 3 + (l.length + e * t);
                l[t].childNodes[0].style.zIndex = n
            })
        }

        function z(t, e, n, r) {
            return !1 !== (e = L(d, t, e, n, r)) && (function(t, e) {
                d[t] = e, g[t] = x.fromStepping(e);
                var n = function() {
                    l[t].style[f.style] = F(e), H(t), H(t + 1)
                };
                window.requestAnimationFrame && f.useRequestAnimationFrame ? window.requestAnimationFrame(n) : n()
            }(t, e), !0)
        }

        function H(t) {
            if (s[t]) {
                var e = 0,
                    n = 100;
                0 !== t && (e = d[t - 1]), t !== s.length - 1 && (n = d[t]), s[t].style[f.style] = F(e), s[t].style[f.styleOposite] = F(100 - n)
            }
        }

        function D(t, e) {
            null !== t && !1 !== t && ("number" == typeof t && (t = String(t)), !1 === (t = f.format.from(t)) || isNaN(t) || z(e, x.toStepping(t), !1, !1))
        }

        function T(t, e) {
            var n = Y(t),
                r = void 0 === d[0];
            e = void 0 === e || !!e, n.forEach(D), f.animate && !r && X(S, f.cssClasses.tap, f.animationDuration), h.forEach(function(t) {
                z(t, d[t], !0, !1)
            }), j(), h.forEach(function(t) {
                U("update", t), null !== n[t] && e && U("set", t)
            })
        }

        function q() {
            var t = g.map(f.format.to);
            return 1 === t.length ? t[0] : t
        }

        function R(t, e) {
            v[t] = v[t] || [], v[t].push(e), "update" === t.split(".")[0] && l.forEach(function(t, e) {
                U("update", e)
            })
        }
        if (S.noUiSlider) throw new Error("Slider was already initialized.");
        return I(e = S, f.cssClasses.target), 0 === f.dir ? I(e, f.cssClasses.ltr) : I(e, f.cssClasses.rtl), 0 === f.ort ? I(e, f.cssClasses.horizontal) : I(e, f.cssClasses.vertical), a = B(e, f.cssClasses.base),
            function(t, e) {
                l = [], (s = []).push(b(e, t[0]));
                for (var n = 0; n < f.handles; n++) l.push((r = n, o = void 0, i = B(e, f.cssClasses.origin), B(o = B(i, f.cssClasses.handle), f.cssClasses.handleTouchArea), o.setAttribute("data-handle", r), 0 === r ? I(o, f.cssClasses.handleLower) : r === f.handles - 1 && I(o, f.cssClasses.handleUpper), i)), h[n] = n, s.push(b(e, t[n + 1]));
                var r, i, o
            }(f.connect, a), u = {
                destroy: function() {
                    for (var t in f.cssClasses) f.cssClasses.hasOwnProperty(t) && _(S, f.cssClasses[t]);
                    for (; S.firstChild;) S.removeChild(S.firstChild);
                    delete S.noUiSlider
                },
                steps: function() {
                    return d.map(function(t, e) {
                        var n = x.getNearbySteps(t),
                            r = g[e],
                            i = n.thisStep.step,
                            o = null;
                        !1 !== i && r + i > n.stepAfter.startValue && (i = n.stepAfter.startValue - r), o = r > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && r - n.stepBefore.highestStep, 100 === t ? i = null : 0 === t && (o = null);
                        var s = x.countStepDecimals();
                        return null !== i && !1 !== i && (i = Number(i.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, i]
                    })
                },
                on: R,
                off: function(t) {
                    var r = t && t.split(".")[0],
                        i = r && t.substring(r.length);
                    Object.keys(v).forEach(function(t) {
                        var e = t.split(".")[0],
                            n = t.substring(e.length);
                        r && r !== e || i && i !== n || delete v[t]
                    })
                },
                get: q,
                set: T,
                reset: function(t) {
                    T(f.start, t)
                },
                __moveHandles: function(t, e, n) {
                    N(t, e, d, n)
                },
                options: o,
                updateOptions: function(e, t) {
                    var n = q(),
                        r = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                    r.forEach(function(t) {
                        void 0 !== e[t] && (o[t] = e[t])
                    });
                    var i = $(o);
                    r.forEach(function(t) {
                        void 0 !== e[t] && (f[t] = i[t])
                    }), i.spectrum.direction = x.direction, x = i.spectrum, f.margin = i.margin, f.limit = i.limit, f.padding = i.padding, d = [], T(e.start || n, t)
                },
                target: S,
                pips: r
            }, (c = f.events).fixed || l.forEach(function(t, e) {
                E(p.start, t.children[0], O, {
                    handleNumbers: [e]
                })
            }), c.tap && E(p.start, a, V, {}), c.hover && E(p.move, a, A, {
                hover: !0
            }), c.drag && s.forEach(function(t, e) {
                if (!1 !== t && 0 !== e && e !== s.length - 1) {
                    var n = l[e - 1],
                        r = l[e],
                        i = [t];
                    I(t, f.cssClasses.draggable), c.fixed && (i.push(n.children[0]), i.push(r.children[0])), i.forEach(function(t) {
                        E(p.start, t, O, {
                            handles: [n, r],
                            handleNumbers: [e - 1, e]
                        })
                    })
                }
            }), T(f.start), f.pips && r(f.pips), f.tooltips && (i = l.map(n), R("update", function(t, e, n) {
                if (i[e]) {
                    var r = t[e];
                    !0 !== f.tooltips[e] && (r = f.tooltips[e].to(n[e])), i[e].innerHTML = "<span>" + r + "</span>"
                }
            })), u
    }
    return {
        create: function(t, e) {
            if (!t.nodeName) throw new Error("noUiSlider.create requires a single element.");
            void 0 === e.tooltips && (e.tooltips = !0);
            var n = O(t, $(e), e);
            return t.noUiSlider = n
        }
    }
});