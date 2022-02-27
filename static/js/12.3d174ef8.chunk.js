(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [12], {
        684: function(n, e, t) {
            "use strict";

            function r(n) {
                return n && "object" === typeof n && "default" in n ? n.default : n
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = r(t(321)),
                i = t(0),
                o = r(i),
                c = r(t(685)),
                u = r(t(686));

            function s(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }

            function l(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function f(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function d(n) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                })(n)
            }

            function m(n, e) {
                return (m = Object.setPrototypeOf || function(n, e) {
                    return n.__proto__ = e, n
                })(n, e)
            }

            function b(n) {
                if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return n
            }

            function x(n, e) {
                return !e || "object" !== typeof e && "function" !== typeof e ? b(n) : e
            }

            function j(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    if (!(Symbol.iterator in Object(n)) && "[object Arguments]" !== Object.prototype.toString.call(n)) return;
                    var t = [],
                        r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, c = n[Symbol.iterator](); !(r = (o = c.next()).done) && (t.push(o.value), !e || t.length !== e); r = !0);
                    } catch (u) {
                        a = !0, i = u
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return t
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var g = function(n, e) {
                    var t = e.decimal,
                        r = e.decimals,
                        a = e.duration,
                        i = e.easingFn,
                        o = e.end,
                        c = e.formattingFn,
                        s = e.prefix,
                        p = e.separator,
                        l = e.start,
                        f = e.suffix,
                        d = e.useEasing;
                    return new u(n, l, o, r, a, {
                        decimal: t,
                        easingFn: i,
                        formattingFn: c,
                        separator: p,
                        prefix: s,
                        suffix: f,
                        useEasing: d,
                        useGrouping: !!p
                    })
                },
                O = function(n) {
                    function e() {
                        var n, t;
                        s(this, e);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return l(b(t = x(this, (n = d(e)).call.apply(n, [this].concat(a)))), "createInstance", (function() {
                            return "function" === typeof t.props.children && c(t.containerRef.current && (t.containerRef.current instanceof HTMLElement || t.containerRef.current instanceof SVGTextElement || t.containerRef.current instanceof SVGTSpanElement), 'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'), g(t.containerRef.current, t.props)
                        })), l(b(t), "pauseResume", (function() {
                            var n = b(t),
                                e = n.reset,
                                r = n.restart,
                                a = n.update,
                                i = t.props.onPauseResume;
                            t.instance.pauseResume(), i({
                                reset: e,
                                start: r,
                                update: a
                            })
                        })), l(b(t), "reset", (function() {
                            var n = b(t),
                                e = n.pauseResume,
                                r = n.restart,
                                a = n.update,
                                i = t.props.onReset;
                            t.instance.reset(), i({
                                pauseResume: e,
                                start: r,
                                update: a
                            })
                        })), l(b(t), "restart", (function() {
                            t.reset(), t.start()
                        })), l(b(t), "start", (function() {
                            var n = b(t),
                                e = n.pauseResume,
                                r = n.reset,
                                a = n.restart,
                                i = n.update,
                                o = t.props,
                                c = o.delay,
                                u = o.onEnd,
                                s = o.onStart,
                                p = function() {
                                    return t.instance.start((function() {
                                        return u({
                                            pauseResume: e,
                                            reset: r,
                                            start: a,
                                            update: i
                                        })
                                    }))
                                };
                            c > 0 ? t.timeoutId = setTimeout(p, 1e3 * c) : p(), s({
                                pauseResume: e,
                                reset: r,
                                update: i
                            })
                        })), l(b(t), "update", (function(n) {
                            var e = b(t),
                                r = e.pauseResume,
                                a = e.reset,
                                i = e.restart,
                                o = t.props.onUpdate;
                            t.instance.update(n), o({
                                pauseResume: r,
                                reset: a,
                                start: i
                            })
                        })), l(b(t), "containerRef", o.createRef()), t
                    }
                    var t, r, a;
                    return function(n, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        n.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: n,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && m(n, e)
                    }(e, n), t = e, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var n = this.props,
                                e = n.children,
                                t = n.delay;
                            this.instance = this.createInstance(), "function" === typeof e && 0 !== t || this.start()
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(n) {
                            var e = this.props,
                                t = e.end,
                                r = e.start,
                                a = e.suffix,
                                i = e.prefix,
                                o = e.redraw,
                                c = e.duration,
                                u = e.separator,
                                s = e.decimals,
                                p = e.decimal;
                            return c !== n.duration || t !== n.end || r !== n.start || a !== n.suffix || i !== n.prefix || u !== n.separator || s !== n.decimals || p !== n.decimal || o
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(n) {
                            var e = this.props,
                                t = e.end,
                                r = e.start,
                                a = e.suffix,
                                i = e.prefix,
                                o = e.duration,
                                c = e.separator,
                                u = e.decimals,
                                s = e.decimal,
                                p = e.preserveValue;
                            o === n.duration && r === n.start && a === n.suffix && i === n.prefix && c === n.separator && u === n.decimals && s === n.decimal || (this.instance.reset(), this.instance = this.createInstance(), this.start()), t !== n.end && (p || this.instance.reset(), this.instance.update(t))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.timeoutId && clearTimeout(this.timeoutId), this.instance.reset()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var n = this.props,
                                e = n.children,
                                t = n.className,
                                r = n.style,
                                a = this.containerRef,
                                i = this.pauseResume,
                                c = this.reset,
                                u = this.restart,
                                s = this.update;
                            return "function" === typeof e ? e({
                                countUpRef: a,
                                pauseResume: i,
                                reset: c,
                                start: u,
                                update: s
                            }) : o.createElement("span", {
                                className: t,
                                ref: a,
                                style: r
                            })
                        }
                    }]) && p(t.prototype, r), a && p(t, a), e
                }(i.Component);
            l(O, "propTypes", {
                decimal: a.string,
                decimals: a.number,
                delay: a.number,
                easingFn: a.func,
                end: a.number.isRequired,
                formattingFn: a.func,
                onEnd: a.func,
                onStart: a.func,
                prefix: a.string,
                redraw: a.bool,
                separator: a.string,
                start: a.number,
                startOnMount: a.bool,
                suffix: a.string,
                style: a.object,
                useEasing: a.bool,
                preserveValue: a.bool
            }), l(O, "defaultProps", {
                decimal: ".",
                decimals: 0,
                delay: null,
                duration: null,
                easingFn: null,
                formattingFn: null,
                onEnd: function() {},
                onPauseResume: function() {},
                onReset: function() {},
                onStart: function() {},
                onUpdate: function() {},
                prefix: "",
                redraw: !1,
                separator: "",
                start: 0,
                startOnMount: !0,
                suffix: "",
                style: void 0,
                useEasing: !0,
                preserveValue: !1
            });
            var h = {
                innerHTML: null
            };
            e.default = O, e.useCountUp = function(n) {
                var e = function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? f(Object(t), !0).forEach((function(e) {
                                l(n, e, t[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                            }))
                        }
                        return n
                    }({}, O.defaultProps, {}, n),
                    t = e.start,
                    r = e.formattingFn,
                    a = j(i.useState("function" === typeof r ? r(t) : t), 2),
                    o = a[0],
                    c = a[1],
                    u = i.useRef(null),
                    s = function() {
                        var n = u.current;
                        if (null !== n) return n;
                        var t = function() {
                            var n = g(h, e),
                                t = n.options.formattingFn;
                            return n.options.formattingFn = function() {
                                var n = t.apply(void 0, arguments);
                                c(n)
                            }, n
                        }();
                        return u.current = t, t
                    },
                    p = function() {
                        var n = e.onReset;
                        s().reset(), n({
                            pauseResume: m,
                            start: d,
                            update: b
                        })
                    },
                    d = function n() {
                        var t = e.onStart,
                            r = e.onEnd;
                        s().reset(), s().start((function() {
                            r({
                                pauseResume: m,
                                reset: p,
                                start: n,
                                update: b
                            })
                        })), t({
                            pauseResume: m,
                            reset: p,
                            update: b
                        })
                    },
                    m = function() {
                        var n = e.onPauseResume;
                        s().pauseResume(), n({
                            reset: p,
                            start: d,
                            update: b
                        })
                    },
                    b = function(n) {
                        var t = e.onUpdate;
                        s().update(n), t({
                            pauseResume: m,
                            reset: p,
                            start: d
                        })
                    };
                return i.useEffect((function() {
                    var n = e.delay,
                        t = e.onStart,
                        r = e.onEnd;
                    if (e.startOnMount) var a = setTimeout((function() {
                        t({
                            pauseResume: m,
                            reset: p,
                            update: b
                        }), s().start((function() {
                            clearTimeout(a), r({
                                pauseResume: m,
                                reset: p,
                                start: d,
                                update: b
                            })
                        }))
                    }), 1e3 * n);
                    return p
                }), []), {
                    countUp: o,
                    start: d,
                    pauseResume: m,
                    reset: p,
                    update: b
                }
            }
        },
        685: function(n, e, t) {
            "use strict";
            var r = function() {};
            n.exports = r
        },
        686: function(n, e, t) {
            var r, a;
            void 0 === (a = "function" === typeof(r = function(n, e, t) {
                return function(n, e, t, r, a, i) {
                    function o(n) {
                        var e, t, r, a, i, o, c = n < 0;
                        if (n = Math.abs(n).toFixed(s.decimals), t = (e = (n += "").split("."))[0], r = e.length > 1 ? s.options.decimal + e[1] : "", s.options.useGrouping) {
                            for (a = "", i = 0, o = t.length; i < o; ++i) 0 !== i && i % 3 === 0 && (a = s.options.separator + a), a = t[o - i - 1] + a;
                            t = a
                        }
                        return s.options.numerals.length && (t = t.replace(/[0-9]/g, (function(n) {
                            return s.options.numerals[+n]
                        })), r = r.replace(/[0-9]/g, (function(n) {
                            return s.options.numerals[+n]
                        }))), (c ? "-" : "") + s.options.prefix + t + r + s.options.suffix
                    }

                    function c(n, e, t, r) {
                        return t * (1 - Math.pow(2, -10 * n / r)) * 1024 / 1023 + e
                    }

                    function u(n) {
                        return "number" == typeof n && !isNaN(n)
                    }
                    var s = this;
                    if (s.version = function() {
                            return "1.9.3"
                        }, s.options = {
                            useEasing: !0,
                            useGrouping: !0,
                            separator: ",",
                            decimal: ".",
                            easingFn: c,
                            formattingFn: o,
                            prefix: "",
                            suffix: "",
                            numerals: []
                        }, i && "object" == typeof i)
                        for (var p in s.options) i.hasOwnProperty(p) && null !== i[p] && (s.options[p] = i[p]);
                    "" === s.options.separator ? s.options.useGrouping = !1 : s.options.separator = "" + s.options.separator;
                    for (var l = 0, f = ["webkit", "moz", "ms", "o"], d = 0; d < f.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[f[d] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[f[d] + "CancelAnimationFrame"] || window[f[d] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(n, e) {
                        var t = (new Date).getTime(),
                            r = Math.max(0, 16 - (t - l)),
                            a = window.setTimeout((function() {
                                n(t + r)
                            }), r);
                        return l = t + r, a
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
                        clearTimeout(n)
                    }), s.initialize = function() {
                        return !!s.initialized || (s.error = "", s.d = "string" == typeof n ? document.getElementById(n) : n, s.d ? (s.startVal = Number(e), s.endVal = Number(t), u(s.startVal) && u(s.endVal) ? (s.decimals = Math.max(0, r || 0), s.dec = Math.pow(10, s.decimals), s.duration = 1e3 * Number(a) || 2e3, s.countDown = s.startVal > s.endVal, s.frameVal = s.startVal, s.initialized = !0, !0) : (s.error = "[CountUp] startVal (" + e + ") or endVal (" + t + ") is not a number", !1)) : (s.error = "[CountUp] target is null or undefined", !1))
                    }, s.printValue = function(n) {
                        var e = s.options.formattingFn(n);
                        "INPUT" === s.d.tagName ? this.d.value = e : "text" === s.d.tagName || "tspan" === s.d.tagName ? this.d.textContent = e : this.d.innerHTML = e
                    }, s.count = function(n) {
                        s.startTime || (s.startTime = n), s.timestamp = n;
                        var e = n - s.startTime;
                        s.remaining = s.duration - e, s.options.useEasing ? s.countDown ? s.frameVal = s.startVal - s.options.easingFn(e, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.options.easingFn(e, s.startVal, s.endVal - s.startVal, s.duration) : s.countDown ? s.frameVal = s.startVal - (s.startVal - s.endVal) * (e / s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (e / s.duration), s.countDown ? s.frameVal = s.frameVal < s.endVal ? s.endVal : s.frameVal : s.frameVal = s.frameVal > s.endVal ? s.endVal : s.frameVal, s.frameVal = Math.round(s.frameVal * s.dec) / s.dec, s.printValue(s.frameVal), e < s.duration ? s.rAF = requestAnimationFrame(s.count) : s.callback && s.callback()
                    }, s.start = function(n) {
                        s.initialize() && (s.callback = n, s.rAF = requestAnimationFrame(s.count))
                    }, s.pauseResume = function() {
                        s.paused ? (s.paused = !1, delete s.startTime, s.duration = s.remaining, s.startVal = s.frameVal, requestAnimationFrame(s.count)) : (s.paused = !0, cancelAnimationFrame(s.rAF))
                    }, s.reset = function() {
                        s.paused = !1, delete s.startTime, s.initialized = !1, s.initialize() && (cancelAnimationFrame(s.rAF), s.printValue(s.startVal))
                    }, s.update = function(n) {
                        if (s.initialize()) {
                            if (!u(n = Number(n))) return void(s.error = "[CountUp] update() - new endVal is not a number: " + n);
                            s.error = "", n !== s.frameVal && (cancelAnimationFrame(s.rAF), s.paused = !1, delete s.startTime, s.startVal = s.frameVal, s.endVal = n, s.countDown = s.startVal > s.endVal, s.rAF = requestAnimationFrame(s.count))
                        }
                    }, s.initialize() && s.printValue(s.startVal)
                }
            }) ? r.call(e, t, e, n) : r) || (n.exports = a)
        },
        687: function(n, e, t) {
            "use strict";
            t.d(e, "a", (function() {
                return s
            })), t.d(e, "b", (function() {
                return p
            }));
            var r = t(4),
                a = t.n(r),
                i = t(15),
                o = t(116),
                c = t.n(o),
                u = t(63),
                s = function(n, e) {
                    return new(new c.a(n).eth.Contract)(u, e)
                },
                p = function() {
                    var n = Object(i.a)(a.a.mark((function n(e, t, r) {
                        var i, o;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return i = s(e, t), n.prev = 1, n.next = 4, i.methods.balanceOf(r).call();
                                case 4:
                                    return o = n.sent, n.abrupt("return", o);
                                case 8:
                                    return n.prev = 8, n.t0 = n.catch(1), n.abrupt("return", "0");
                                case 11:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [1, 8]
                        ])
                    })));
                    return function(e, t, r) {
                        return n.apply(this, arguments)
                    }
                }()
        },
        792: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, "default", (function() {
                return fe
            }));
            var r = t(13),
                a = t(20),
                i = t(51),
                o = t(0),
                c = t(3),
                u = t(707),
                s = t(36),
                p = t(172),
                l = t(176),
                f = t(308),
                d = t(78),
                m = t(4),
                b = t.n(m),
                x = t(15),
                j = t(66),
                g = t(11),
                O = t.n(g),
                h = t(683),
                F = t(16),
                v = t(31),
                w = t(38),
                y = t(74),
                V = t(693),
                S = t(133),
                R = function() {
                    var n = Object(o.useState)([]),
                        e = Object(a.a)(n, 2),
                        t = e[0],
                        r = e[1],
                        i = Object(j.m)().account,
                        c = Object(S.a)().fastRefresh;
                    return Object(o.useEffect)((function() {
                        i && function() {
                            var n = Object(x.a)(b.a.mark((function n() {
                                var e, t, a;
                                return b.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e = V.a.map((function(n) {
                                                return {
                                                    address: Object(w.d)(),
                                                    name: "pendingCoal",
                                                    params: [n.pid, i]
                                                }
                                            })), n.next = 3, Object(v.a)(y, e);
                                        case 3:
                                            t = n.sent, a = V.a.map((function(n, e) {
                                                return Object(F.a)(Object(F.a)({}, n), {}, {
                                                    balance: new O.a(t[e])
                                                })
                                            })), r(a);
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }()()
                    }), [i, c]), t
                },
                z = t(675),
                k = t(684);

            function A() {
                var n = Object(i.a)(["\n  font-size: 1.75rem;\n  color: #98bec3;\n  font-weight: 400px;\n"]);
                return A = function() {
                    return n
                }, n
            }
            var T = Object(c.e)(s.C)(A()),
                E = function(n) {
                    var e = n.value,
                        t = n.decimals,
                        a = (n.fontSize, n.prefix),
                        i = Object(k.useCountUp)({
                            start: 0,
                            end: e,
                            duration: 1,
                            separator: ",",
                            decimals: void 0 !== t ? t : e < 0 ? 4 : e > 1e5 ? 0 : 3
                        }),
                        c = i.countUp,
                        u = i.update,
                        s = Object(o.useRef)(u);
                    return Object(o.useEffect)((function() {
                        s.current(e)
                    }), [e, s]), Object(r.jsxs)(T, {
                        children: [a, c]
                    })
                };

            function P() {
                var n = Object(i.a)(["\n  font-size: 1.75rem;\n  color: #98bec3;\n  font-weight: 400px;\n"]);
                return P = function() {
                    return n
                }, n
            }
            var C = Object(c.e)(s.C)(P()),
                L = function(n) {
                    var e = n.earningsSum,
                        t = Object(p.a)();
                    return Object(j.m)().account ? Object(r.jsx)(E, {
                        value: e
                    }) : Object(r.jsx)(C, {
                        style: {
                            lineHeight: "60px"
                        },
                        children: t(298, "Locked")
                    })
                },
                D = t(108),
                U = t(273),
                N = t(687),
                M = function(n) {
                    var e = Object(o.useState)(new O.a(0)),
                        t = Object(a.a)(e, 2),
                        r = t[0],
                        i = t[1],
                        c = Object(j.m)(),
                        u = c.account,
                        s = c.ethereum,
                        p = Object(S.a)().fastRefresh;
                    return Object(o.useEffect)((function() {
                        u && s && function() {
                            var e = Object(x.a)(b.a.mark((function e() {
                                var t;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(N.b)(s, n, u);
                                        case 2:
                                            t = e.sent, i(new O.a(t));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                    }), [u, s, n, p]), r
                },
                q = function() {
                    var n = Object(o.useState)([]),
                        e = Object(a.a)(n, 2),
                        t = e[0],
                        r = e[1],
                        i = Object(j.m)().account,
                        c = Object(S.a)().fastRefresh;
                    return Object(o.useEffect)((function() {
                        i && function() {
                            var n = Object(x.a)(b.a.mark((function n() {
                                var e, t;
                                return b.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return e = V.a.map((function(n) {
                                                return {
                                                    address: Object(w.d)(),
                                                    name: "pendingCoal",
                                                    params: [n.pid, i]
                                                }
                                            })), n.next = 3, Object(v.a)(y, e);
                                        case 3:
                                            t = n.sent, r(t);
                                        case 5:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }()()
                    }), [i, c]), t
                },
                G = t(670);

            function Q() {
                var n = Object(i.a)(["\n  align-items: center;\n  margin-right: 25px;\n"]);
                return Q = function() {
                    return n
                }, n
            }

            function _() {
                var n = Object(i.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
                return _ = function() {
                    return n
                }, n
            }

            function I() {
                var n = Object(i.a)(["\n  margin-bottom: 16px;\n"]);
                return I = function() {
                    return n
                }, n
            }

            function H() {
                var n = Object(i.a)(["\n\n\n\n  align-items: center;\n"]);
                return H = function() {
                    return n
                }, n
            }

            function B() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  padding: 10px 10px;\n"]);
                return B = function() {
                    return n
                }, n
            }

            function $() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  margin-top: 9px;\n  margin-left: 5px;\n"]);
                return $ = function() {
                    return n
                }, n
            }

            function J() {
                var n = Object(i.a)(["\n  font-size: 1.5rem;\n  color: #FFFFFF;\n  font-weight: 400px;\n\n"]);
                return J = function() {
                    return n
                }, n
            }

            function Y() {
                var n = Object(i.a)(['\n  width: fit-content;\n  background-color: #000000;\n  color: #FFFFFF;\n  line-height: "16px";\n  box-shadow:-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF;\n  margin-left: 25px;\n  margin-top: 20px;\n  border-radius: 8px;\n\n']);
                return Y = function() {
                    return n
                }, n
            }

            function W() {
                var n = Object(i.a)(["\n  display: flex;\n  flex: 1;\n"]);
                return W = function() {
                    return n
                }, n
            }

            function X() {
                var n = Object(i.a)(["\n  font-size: 1.75rem;\n  color: #98bec3;\n  font-weight: 400px;\n  margin-bottom: 6px;\n  margin-top: 20px;\n  margin-left: 25px;\n"]);
                return X = function() {
                    return n
                }, n
            }

            function K() {
                var n = Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1.5fr 1fr;\n  border-radius: 8px;\n  align-items: center;\n  background-color: rgba(52, 60, 76, 0.4);\n  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;\n  padding-bottom: 25px;\n\n  ", " {\n    & #include {\n      grid-column:  span 3;\n      align-items: center;\n      text-align: center;\n    }\n  }\n  ", " {\n    & #include {\n      grid-column:  span 1;\n      align-items: center;\n    }\n  }\n\n\n  ", " {\n    & #include {\n      grid-column: span 1;\n    }\n  }\n  "]);
                return K = function() {
                    return n
                }, n
            }
            var Z = Object(c.e)(s.h)(K(), (function(n) {
                    return n.theme.mediaQueries.xs
                }), (function(n) {
                    return n.theme.mediaQueries.sm
                }), (function(n) {
                    return n.theme.mediaQueries.lg
                })),
                nn = Object(c.e)(s.n)(X()),
                en = (c.e.div(W()), c.e.div(Y()), Object(c.e)(s.n)(J())),
                tn = Object(c.e)(s.n)($()),
                rn = (Object(c.e)(s.n)(B()), c.e.div(H())),
                an = (c.e.img(I()), c.e.div(_(), (function(n) {
                    return n.theme.colors.textSubtle
                })), c.e.div(Q())),
                on = function() {
                    var n = Object(o.useState)(!1),
                        e = Object(a.a)(n, 2),
                        t = e[0],
                        i = e[1],
                        c = Object(j.m)().account,
                        u = Object(p.a)(),
                        l = R(),
                        f = (Object(G.a)(M(Object(w.a)())), Object(D.g)().toNumber()),
                        d = q().reduce((function(n, e) {
                            return n + new O.a(e).div(new O.a(10).pow(18)).toNumber()
                        }), 0),
                        m = l.filter((function(n) {
                            return n.balance.toNumber() > 0
                        })),
                        g = Object(h.a)(m.map((function(n) {
                            return n.pid
                        }))).onReward,
                        F = Object(o.useCallback)(Object(x.a)(b.a.mark((function n() {
                            return b.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return i(!0), n.prev = 1, n.next = 4, g();
                                    case 4:
                                        n.next = 8;
                                        break;
                                    case 6:
                                        n.prev = 6, n.t0 = n.catch(1);
                                    case 8:
                                        return n.prev = 8, i(!1), n.finish(8);
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 6, 8, 11]
                            ])
                        }))), [g]);
                    return Object(r.jsxs)(Z, {
                        children: [Object(r.jsx)(rn, {
                            id: "include",
                            children: Object(r.jsx)(nn, {
                                children: "Your Staking Reward"
                            })
                        }), Object(r.jsxs)(rn, {
                            style: {
                                textAlign: "center",
                                marginTop: "10px"
                            },
                            id: "include",
                            children: [Object(r.jsx)(tn, {
                                children: u(544, "EGG to Harvest")
                            }), Object(r.jsx)(L, {
                                earningsSum: d
                            }), Object(r.jsxs)(en, {
                                children: ["$", (f * d).toFixed(2)]
                            })]
                        }), Object(r.jsx)(an, {
                            id: "include",
                            children: c ? Object(r.jsx)(s.d, {
                                id: "harvest-all",
                                disabled: m.length <= 0 || t,
                                onClick: F,
                                style: {
                                    boxShadow: "-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF",
                                    background: "#000000"
                                },
                                children: t ? u(548, "Collecting EGG") : u(999, "Harvest all (".concat(m.length, ")"))
                            }) : Object(r.jsx)(z.a, {
                                style: {
                                    boxShadow: "-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF",
                                    background: "#000000"
                                }
                            })
                        })]
                    })
                },
                cn = t(681),
                un = t(676);

            function sn() {
                var n = Object(i.a)(["\n  width: 100%; \n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 8px;\n  padding: 20px\n\n"]);
                return sn = function() {
                    return n
                }, n
            }

            function pn() {
                var n = Object(i.a)(["\n  font-size: 0.75rem;\n  color: #FFFFFF;\n  margin-top: 9px;\n"]);
                return pn = function() {
                    return n
                }, n
            }

            function ln() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  font-weight: 400px;\n  margin-top: 9px;\n"]);
                return ln = function() {
                    return n
                }, n
            }

            function fn() {
                var n = Object(i.a)(["\n  font-size: 1.75rem;\n  color: #98bec3;\n  font-weight: 400px;\n  margin-bottom: 6px;\n"]);
                return fn = function() {
                    return n
                }, n
            }

            function dn() {
                var n = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 16px;\n  background-color: rgba(52, 60, 76, 0.4);\n  border-radius: 8px;\n  display: grid;\n  grid-template-columns: repeat(3,minmax(0,1fr));\n  margin-bottom: 50px;\n  margin-top: 5px;\n  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;\n\n  ", " {\n    & #include {\n      grid-column:  span 3;\n    }\n  }\n  ", " {\n    & #include {\n      grid-column:  span 3;\n    }\n  }\n\n  ", " {\n    & #include {\n      grid-column: span 1;\n    }\n  }\n"]);
                return dn = function() {
                    return n
                }, n
            }
            var mn = Object(c.e)(s.h)(dn(), (function(n) {
                    return n.theme.mediaQueries.sm
                }), (function(n) {
                    return n.theme.mediaQueries.xs
                }), (function(n) {
                    return n.theme.mediaQueries.lg
                })),
                bn = Object(c.e)(s.n)(fn()),
                xn = Object(c.e)(s.n)(ln()),
                jn = Object(c.e)(s.n)(pn()),
                gn = c.e.div(sn()),
                On = function() {
                    Object(p.a)();
                    var n = function() {
                            var n = Object(S.a)().slowRefresh,
                                e = Object(o.useState)(),
                                t = Object(a.a)(e, 2),
                                r = t[0],
                                i = t[1];
                            return Object(o.useEffect)((function() {
                                function n() {
                                    return (n = Object(x.a)(b.a.mark((function n() {
                                        var e, t;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return e = Object(d.a)(U, Object(w.a)()), n.next = 3, e.methods.totalSupply().call();
                                                case 3:
                                                    t = n.sent, i(new O.a(t));
                                                case 5:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))).apply(this, arguments)
                                }! function() {
                                    n.apply(this, arguments)
                                }()
                            }), [n]), r
                        }(),
                        e = function(n) {
                            var e = Object(o.useState)(new O.a(0)),
                                t = Object(a.a)(e, 2),
                                r = t[0],
                                i = t[1],
                                c = Object(S.a)().slowRefresh;
                            return Object(o.useEffect)((function() {
                                ! function() {
                                    var n = Object(x.a)(b.a.mark((function n() {
                                        var e, t;
                                        return b.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return e = Object(d.a)(U, Object(w.a)()), n.next = 3, e.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                                case 3:
                                                    t = n.sent, i(new O.a(t));
                                                case 5:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() {
                                        return n.apply(this, arguments)
                                    }
                                }()()
                            }), [n, c]), r
                        }(Object(w.a)()),
                        t = Object(D.c)(),
                        i = Object(D.g)(),
                        c = n ? n.minus(e) : new un.a(0),
                        u = (Object(G.a)(c), i.times(c)),
                        s = Object(D.h)(),
                        l = 0;
                    return t && t[0] && t[0].eggPerBlock && (l = new un.a(t[0].eggPerBlock).div(new un.a(10).pow(18)).toNumber()), Object(r.jsxs)(mn, {
                        children: [Object(r.jsxs)(gn, {
                            id: "include",
                            children: [Object(r.jsxs)(bn, {
                                fontSize: "20px",
                                children: ["$", Object(G.a)(u).toLocaleString("en-US", {
                                    maximumFractionDigits: 0
                                })]
                            }), Object(r.jsx)(xn, {
                                fontSize: "18px",
                                children: "Market Cap"
                            }), Object(r.jsx)(jn, {
                                fontSize: "10px",
                                children: "(Total Supply X Price)"
                            })]
                        }), Object(r.jsxs)(gn, {
                            id: "include",
                            children: [Object(r.jsx)(bn, {
                                fontSize: "20px",
                                children: Object(G.a)(c).toLocaleString("en-US", {
                                    maximumFractionDigits: 0
                                })
                            }), Object(r.jsx)(xn, {
                                fontSize: "18px",
                                children: "Circulating Supply"
                            }), Object(r.jsx)(jn, {
                                fontSize: "10px",
                                children: "(Total - Burnt)"
                            })]
                        }), Object(r.jsxs)(gn, {
                            id: "include",
                            children: [Object(r.jsxs)(bn, {
                                fontSize: "20px",
                                children: ["$", s.toNumber().toLocaleString("en-US", {
                                    maximumFractionDigits: 0
                                })]
                            }), Object(r.jsx)(xn, {
                                fontSize: "18px",
                                children: "Total Locked Value"
                            }), Object(r.jsx)(jn, {
                                fontSize: "10px",
                                children: "(Across All Pools and Farms)"
                            })]
                        }), Object(r.jsxs)(gn, {
                            id: "include",
                            children: [Object(r.jsxs)(bn, {
                                fontSize: "20px",
                                children: ["$", i.toNumber().toLocaleString("en-US", {
                                    maximumFractionDigits: 3
                                })]
                            }), Object(r.jsx)(xn, {
                                fontSize: "18px",
                                children: "COAL Price"
                            })]
                        }), Object(r.jsxs)(gn, {
                            id: "include",
                            children: [Object(r.jsxs)(bn, {
                                fontSize: "20px",
                                children: [l, "/second"]
                            }), Object(r.jsx)(xn, {
                                fontSize: "18px",
                                children: "Emission Rate"
                            })]
                        }), Object(r.jsxs)(gn, {
                            id: "include",
                            children: [Object(r.jsxs)(bn, {
                                fontSize: "20px",
                                children: [Object(G.a)(e).toLocaleString("en-US", {
                                    maximumFractionDigits: 0
                                }), " COAL"]
                            }), Object(r.jsx)(xn, {
                                fontSize: "18px",
                                children: "Burnt"
                            })]
                        })]
                    })
                };

            function hn() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  padding: 10px 10px;\n"]);
                return hn = function() {
                    return n
                }, n
            }

            function Fn() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  margin-top: 9px;\n  margin-left: 5px;\n"]);
                return Fn = function() {
                    return n
                }, n
            }

            function vn() {
                var n = Object(i.a)(["\n  font-size: 3rem;\n  color: #FFFFFF;\n  font-weight: 400px;\n  margin-top: 9px;\n  margin-left: 25px;\n"]);
                return vn = function() {
                    return n
                }, n
            }

            function wn() {
                var n = Object(i.a)(['\n  width: fit-content;\n  background-color: #000000;\n  color: #FFFFFF;\n  line-height: "16px";\n  box-shadow:-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF;\n  margin-left: 25px;\n  margin-top: 20px;\n  border-radius: 8px;\n\n']);
                return wn = function() {
                    return n
                }, n
            }

            function yn() {
                var n = Object(i.a)(["\n  display: flex;\n  flex: 1;\n"]);
                return yn = function() {
                    return n
                }, n
            }

            function Vn() {
                var n = Object(i.a)(["\n  font-size: 1.75rem;\n  color: #98bec3;\n  font-weight: 400px;\n  margin-bottom: 6px;\n  margin-top: 20px;\n  margin-left: 25px;\n"]);
                return Vn = function() {
                    return n
                }, n
            }

            function Sn() {
                var n = Object(i.a)(["\n  align-items: left;\n  border-radius: 8px;\n  padding-bottom: 25px;\n  background-color: rgba(52, 60, 76, 0.4);\n  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;\n"]);
                return Sn = function() {
                    return n
                }, n
            }
            var Rn = Object(c.e)(s.h)(Sn()),
                zn = Object(c.e)(s.n)(Vn()),
                kn = c.e.div(yn()),
                An = c.e.div(wn()),
                Tn = Object(c.e)(s.n)(vn()),
                En = Object(c.e)(s.n)(Fn()),
                Pn = Object(c.e)(s.n)(hn()),
                Cn = function() {
                    Object(p.a)(), Object(D.h)();
                    return Object(r.jsxs)(Rn, {
                        children: [Object(r.jsx)(zn, {
                            children: "Join the Revolution."
                        }), Object(r.jsxs)(kn, {
                            children: [Object(r.jsx)(Tn, {
                                children: "COAL"
                            }), Object(r.jsx)(En, {
                                children: "Token"
                            })]
                        }), Object(r.jsx)(An, {
                            children: Object(r.jsx)(Pn, {
                                children: Object(r.jsx)("a", {
                                    href: "/",
                                    children: "Get Yours Now!"
                                })
                            })
                        })]
                    })
                };

            function Ln() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  padding: 10px 10px;\n"]);
                return Ln = function() {
                    return n
                }, n
            }

            function Dn() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  margin-top: 9px;\n  margin-left: 5px;\n"]);
                return Dn = function() {
                    return n
                }, n
            }

            function Un() {
                var n = Object(i.a)(["\n  font-size: 3rem;\n  color: #FFFFFF;\n  font-weight: 400px;\n  margin-top: 9px;\n  margin-left: 25px;\n"]);
                return Un = function() {
                    return n
                }, n
            }

            function Nn() {
                var n = Object(i.a)(['\n  width: fit-content;\n  background-color: #000000;\n  color: #FFFFFF;\n  line-height: "16px";\n  box-shadow:-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF;\n  margin-left: 25px;\n  margin-top: 20px;\n  border-radius: 8px;\n\n']);
                return Nn = function() {
                    return n
                }, n
            }

            function Mn() {
                var n = Object(i.a)(["\n  display: flex;\n  flex: 1;\n"]);
                return Mn = function() {
                    return n
                }, n
            }

            function qn() {
                var n = Object(i.a)(["\n  font-size: 1.75rem;\n  color: #98bec3;\n  font-weight: 400px;\n  margin-bottom: 6px;\n  margin-top: 20px;\n  margin-left: 25px;\n"]);
                return qn = function() {
                    return n
                }, n
            }

            function Gn() {
                var n = Object(i.a)(["\n  align-items: left;\n  border-radius: 8px;\n  padding-bottom: 25px;\n  background-color: rgba(52, 60, 76, 0.4);\n  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;\n"]);
                return Gn = function() {
                    return n
                }, n
            }
            var Qn = Object(c.e)(s.h)(Gn()),
                _n = Object(c.e)(s.n)(qn()),
                In = c.e.div(Mn()),
                Hn = c.e.div(Nn()),
                Bn = Object(c.e)(s.n)(Un()),
                $n = Object(c.e)(s.n)(Dn()),
                Jn = Object(c.e)(s.n)(Ln()),
                Yn = function() {
                    Object(p.a)(), Object(D.h)();
                    return Object(r.jsxs)(Qn, {
                        children: [Object(r.jsx)(_n, {
                            children: "Referral Commission"
                        }), Object(r.jsx)($n, {
                            style: {
                                marginLeft: "25px"
                            },
                            children: "Refer your friends and earn up to "
                        }), Object(r.jsxs)(In, {
                            children: [Object(r.jsx)(Bn, {
                                children: "5%"
                            }), Object(r.jsx)($n, {
                                style: {
                                    color: "#98bec3"
                                },
                                children: "of your friend rewards"
                            })]
                        }), Object(r.jsx)(Hn, {
                            children: Object(r.jsx)(Jn, {
                                children: Object(r.jsx)("a", {
                                    href: "/",
                                    children: "Get your Referral Code"
                                })
                            })
                        })]
                    })
                };

            function Wn() {
                var n = Object(i.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);
                return Wn = function() {
                    return n
                }, n
            }

            function Xn() {
                var n = Object(i.a)(["\n  border-radius: 8px;\n  align-items: center;\n  background-color: rgba(52, 60, 76, 0.4);\n  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;\n  padding-bottom: 25px;\n  margin-bottom: 25px;\n  margin-left: 10px;\n  margin-right: 10px;\n  min-height: 200px;\n  "]);
                return Xn = function() {
                    return n
                }, n
            }

            function Kn() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  padding: 10px 10px;\n"]);
                return Kn = function() {
                    return n
                }, n
            }

            function Zn() {
                var n = Object(i.a)(["\n  font-size: 1rem;\n  color: #FFFFFF;\n  margin-top: 9px;\n  text-align: center;\n  padding:  0px 25px;\n  font-weight: 50px;\n  line-height: 20px;\n"]);
                return Zn = function() {
                    return n
                }, n
            }

            function ne() {
                var n = Object(i.a)(["\n  font-size: 1.5rem;\n  color: #FFFFFF;\n  font-weight: 400px;\n\n"]);
                return ne = function() {
                    return n
                }, n
            }

            function ee() {
                var n = Object(i.a)(["\n  font-size: 1.25rem;\n  color: #98bec3;\n  font-weight: 400px;\n  margin-bottom: 15px;\n  margin-top: 20px;\n  padding:  0px 25px;\n  text-align: center;\n"]);
                return ee = function() {
                    return n
                }, n
            }

            function te() {
                var n = Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-radius: 8px;\n  align-items: center;\n  padding-bottom: 25px;\n\n  ", " {\n    & #include {\n      grid-column:  span 3;\n\n    }\n  }\n  ", " {\n    & #include {\n      grid-column:  span 1;\n    }\n  }\n\n\n  ", " {\n    & #include {\n      grid-column: span 1;\n    }\n  }\n  "]);
                return te = function() {
                    return n
                }, n
            }

            function re() {
                var n = Object(i.a)(["\n  background-image: url('/images/egg/mining.png');\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: contain;\n  margin: auto;\n  padding-top: 32px;\n  text-align: center;\n  height: 300px;\n"]);
                return re = function() {
                    return n
                }, n
            }

            function ae() {
                var n = Object(i.a)(["\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 32px;\n  text-align: center;\n"]);
                return ae = function() {
                    return n
                }, n
            }
            var ie = c.e.div(ae()),
                oe = (c.e.div(re()), c.e.div(te(), (function(n) {
                    return n.theme.mediaQueries.xs
                }), (function(n) {
                    return n.theme.mediaQueries.sm
                }), (function(n) {
                    return n.theme.mediaQueries.lg
                }))),
                ce = Object(c.e)(s.n)(ee()),
                ue = Object(c.e)(s.n)(ne()),
                se = Object(c.e)(s.C)(Zn()),
                pe = (Object(c.e)(s.n)(Kn()), Object(c.e)(s.h)(Xn())),
                le = Object(c.e)(s.b)(Wn(), (function(n) {
                    return n.theme.mediaQueries.sm
                }), (function(n) {
                    return n.theme.mediaQueries.lg
                })),
                fe = function() {
                    Object(p.a)();
                    var n = new u.a,
                        e = Object(f.c)("ref", f.b),
                        t = Object(a.a)(e, 2),
                        i = t[0];
                    t[1];
                    return i && Object(d.c)(Object(cn.a)(i)) && n.set("ref", i), Object(r.jsxs)(l.a, {
                        children: [Object(r.jsx)(on, {}), Object(r.jsxs)(ie, {
                            children: [Object(r.jsx)(s.n, {
                                as: "h1",
                                size: "xl",
                                mb: "24px",
                                color: "secondary",
                                children: "The Coal Farm"
                            }), Object(r.jsx)(ue, {
                                children: "The Coal Farm Tokenomics Explained"
                            }), Object(r.jsx)(ue, {
                                style: {
                                    marginTop: " 10px",
                                    fontSize: "1.25rem",
                                    textDecoration: "underline"
                                },
                                children: "DeFi First Liquidity Oriented Liquidity Pooling Farm"
                            })]
                        }), Object(r.jsxs)(oe, {
                            children: [Object(r.jsxs)(pe, {
                                id: "include",
                                children: [Object(r.jsx)(ce, {
                                    children: "Dividends Pools"
                                }), Object(r.jsx)(se, {
                                    children: "Deflationary Mechanism for Locking COAL from Harvest to earn Stables"
                                })]
                            }), Object(r.jsxs)(pe, {
                                id: "include",
                                children: [Object(r.jsx)(ce, {
                                    children: "TVL-Based APR"
                                }), Object(r.jsx)(se, {
                                    children: "APR Boost at TVL Milestones. Enabling Profitable APR Throughout "
                                })]
                            }), Object(r.jsxs)(pe, {
                                id: "include",
                                children: [Object(r.jsx)(ce, {
                                    children: "Automatic LP"
                                }), Object(r.jsx)(se, {
                                    children: "5% of all Purchases and Sells are Taxed for Automatic LP"
                                })]
                            })]
                        }), Object(r.jsx)(On, {}), Object(r.jsx)("div", {
                            children: Object(r.jsxs)(le, {
                                children: [Object(r.jsx)(Cn, {}), Object(r.jsx)(Yn, {})]
                            })
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=12.3d174ef8.chunk.js.map