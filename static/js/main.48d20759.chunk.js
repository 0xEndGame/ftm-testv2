(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [4], {
        105: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return g
            })), n.d(t, "b", (function() {
                return C
            }));
            var a = n(4),
                r = n.n(a),
                s = n(15),
                i = n(16),
                u = n(52),
                o = n(91),
                p = n(59),
                d = n(20),
                c = n(11),
                l = n.n(c),
                y = n(63),
                m = n(74),
                f = n(31),
                b = n(38),
                T = n(21),
                O = function() {
                    var e = Object(s.a)(r.a.mark((function e() {
                        var t;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(p.a.map(function() {
                                        var e = Object(s.a)(r.a.mark((function e(t) {
                                            var n, a, s, u, o, p, c, O, v, w, x, j, k, A, h, S, M, g, C, _, D, E, B, I, P, F;
                                            return r.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = t.lpAddresses[250], a = [{
                                                            address: t.tokenAddresses[250],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.quoteTokenAdresses[250],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.isTokenOnly ? t.tokenAddresses[250] : n,
                                                            name: "balanceOf",
                                                            params: [Object(b.d)()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: t.tokenAddresses[250],
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[250],
                                                            name: "decimals"
                                                        }], e.next = 4, Object(f.a)(y, a);
                                                    case 4:
                                                        return s = e.sent, u = Object(d.a)(s, 6), o = u[0], p = u[1], c = u[2], O = u[3], v = u[4], w = u[5], console.log(t), t.isTokenOnly ? (x = new l.a(c).div(new l.a(10).pow(v)), t.tokenSymbol === T.b.USDT && t.quoteTokenSymbol === T.b.USDT ? k = new l.a(1) : (A = new l.a(p).div(new l.a(10).pow(w)), h = new l.a(o).div(new l.a(10).pow(v)), k = new l.a(A).div(new l.a(h))), j = x.times(k)) : (S = new l.a(c).div(new l.a(O)), j = new l.a(p).div(new l.a(10).pow(w)).times(new l.a(2)).times(S), x = new l.a(o).div(new l.a(10).pow(v)).times(S), M = new l.a(p).div(new l.a(10).pow(w)).times(S), x.comparedTo(0) > 0 ? k = M.div(x) : (g = new l.a(p).div(new l.a(10).pow(w)), C = new l.a(o).div(new l.a(10).pow(v)), k = new l.a(g).div(new l.a(C)))), e.next = 16, Object(f.a)(m, [{
                                                            address: Object(b.d)(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: Object(b.d)(),
                                                            name: "totalAllocPoint"
                                                        }, {
                                                            address: Object(b.d)(),
                                                            name: "coalPerSecond"
                                                        }]);
                                                    case 16:
                                                        return _ = e.sent, D = Object(d.a)(_, 3), E = D[0], B = D[1], I = D[2], P = new l.a(E.allocPoint._hex), F = P.div(new l.a(B)), e.abrupt("return", Object(i.a)(Object(i.a)({}, t), {}, {
                                                            tokenAmount: x.toJSON(),
                                                            lpTotalInQuoteToken: j.toJSON(),
                                                            tokenPriceVsQuote: k.toJSON(),
                                                            poolWeight: F.toNumber(),
                                                            multiplier: "".concat(P.div(100).toString(), "X"),
                                                            depositFeeBP: E.depositFeeBP,
                                                            eggPerBlock: new l.a(I).toNumber()
                                                        }));
                                                    case 24:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(b.d)(), a = p.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[250] : e.lpAddresses[250],
                                            name: "allowance",
                                            params: [t, n]
                                        }
                                    })), e.next = 4, Object(f.a)(y, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = p.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[250] : e.lpAddresses[250],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(f.a)(y, n);
                                case 3:
                                    return a = e.sent, s = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(b.d)(), a = p.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(m, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, i;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(b.d)(), a = p.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "pendingCoal",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(f.a)(m, a);
                                case 4:
                                    return s = e.sent, i = s.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", i);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = {
                    data: Object(u.a)(p.a)
                },
                A = Object(o.b)({
                    name: "Farms",
                    initialState: k,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(i.a)(Object(i.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(i.a)(Object(i.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                h = A.actions,
                S = h.setFarmsPublicData,
                M = h.setFarmUserData,
                g = function() {
                    return function() {
                        var e = Object(s.a)(r.a.mark((function e(t) {
                            var n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, O();
                                    case 2:
                                        n = e.sent, t(S(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                C = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var a, s, i, u, o;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, v(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, w(e);
                                    case 5:
                                        return s = t.sent, t.next = 8, x(e);
                                    case 8:
                                        return i = t.sent, t.next = 11, j(e);
                                    case 11:
                                        u = t.sent, o = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: s[t],
                                                stakedBalance: i[t],
                                                earnings: u[t]
                                            }
                                        })), n(M({
                                            arrayOfUserDataObjects: o
                                        }));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = A.reducer
        },
        108: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "a", (function() {
                return y
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "e", (function() {
                return f
            })), n.d(t, "f", (function() {
                return b
            })), n.d(t, "g", (function() {
                return T
            })), n.d(t, "h", (function() {
                return O
            }));
            var a = n(11),
                r = n.n(a),
                s = n(0),
                i = n(56),
                u = n(133),
                o = n(131),
                p = n(21),
                d = new r.a(0),
                c = function() {
                    var e = Object(i.b)(),
                        t = Object(u.a)().slowRefresh;
                    Object(s.useEffect)((function() {
                        e(Object(o.b)())
                    }), [e, t])
                },
                l = function() {
                    return Object(i.c)((function(e) {
                        return e.farms.data
                    }))
                },
                y = function(e) {
                    return Object(i.c)((function(t) {
                        return t.farms.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                m = function(e) {
                    var t = y(e);
                    return {
                        allowance: t.userData ? new r.a(t.userData.allowance) : new r.a(0),
                        tokenBalance: t.userData ? new r.a(t.userData.tokenBalance) : new r.a(0),
                        stakedBalance: t.userData ? new r.a(t.userData.stakedBalance) : new r.a(0),
                        earnings: t.userData ? new r.a(t.userData.earnings) : new r.a(0)
                    }
                },
                f = function(e) {
                    var t = Object(u.a)().fastRefresh,
                        n = Object(i.b)();
                    return Object(s.useEffect)((function() {
                        e && n(Object(o.c)(e))
                    }), [e, n, t]), Object(i.c)((function(e) {
                        return e.pools.data
                    }))
                },
                b = function() {
                    var e = y(3);
                    return e.tokenPriceVsQuote ? new r.a(e.tokenPriceVsQuote) : d
                },
                T = function() {
                    var e = y(0);
                    return e.tokenPriceVsQuote ? new r.a(e.tokenPriceVsQuote) : d
                },
                O = function() {
                    for (var e = l(), t = b(), n = T(), a = new r.a(0), s = 0; s < e.length; s++) {
                        var i = e[s];
                        if (i.lpTotalInQuoteToken) {
                            var u = void 0;
                            u = i.quoteTokenSymbol === p.b.WFTM ? t.times(i.lpTotalInQuoteToken) : i.quoteTokenSymbol === p.b.CAKE ? n.times(i.lpTotalInQuoteToken) : i.lpTotalInQuoteToken, a = a.plus(u)
                        }
                    }
                    return a
                }
        },
        126: function(e, t, n) {
            "use strict";
            var a = n(316),
                r = n.n(a),
                s = ["https://rpc.ftm.tools/", "https://rpc.ftm.tools/", "https://rpc.ftm.tools/"];
            t.a = function() {
                var e = r()(0, s.length - 1);
                return s[e]
            }
        },
        128: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return d
            }));
            var a = n(13),
                r = n(4),
                s = n.n(r),
                i = n(15),
                u = n(20),
                o = n(0),
                p = n.n(o).a.createContext({
                    slow: 0,
                    fast: 0
                }),
                d = function(e) {
                    var t = e.children,
                        n = Object(o.useState)(0),
                        r = Object(u.a)(n, 2),
                        d = r[0],
                        c = r[1],
                        l = Object(o.useState)(0),
                        y = Object(u.a)(l, 2),
                        m = y[0],
                        f = y[1];
                    return Object(o.useEffect)((function() {
                        var e = setInterval(Object(i.a)(s.a.mark((function e() {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(o.useEffect)((function() {
                        var e = setInterval(Object(i.a)(s.a.mark((function e() {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        c((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(a.jsx)(p.Provider, {
                        value: {
                            slow: d,
                            fast: m
                        },
                        children: t
                    })
                }
        },
        131: function(e, t, n) {
            "use strict";
            var a = n(105);
            n.d(t, "b", (function() {
                return a.c
            })), n.d(t, "a", (function() {
                return a.b
            }));
            var r = n(58);
            n.d(t, "c", (function() {
                return r.b
            })), n.d(t, "d", (function() {
                return r.c
            })), n.d(t, "e", (function() {
                return r.d
            })), n.d(t, "f", (function() {
                return r.e
            })), n.d(t, "g", (function() {
                return r.f
            }))
        },
        133: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(128);
            t.a = function() {
                var e = Object(a.useContext)(r.a);
                return {
                    fastRefresh: e.fast,
                    slowRefresh: e.slow
                }
            }
        },
        172: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n(90),
                s = /%(.*?)%/,
                i = function(e, t, n) {
                    var a = e.find((function(e) {
                        return e.data.stringId === t
                    }));
                    if (a) {
                        var r = a.data.text;
                        return r.includes("%") ? function(e, t) {
                            var n = s.exec(e)[0],
                                a = t.split(" ")[0];
                            return e.replace(n, a)
                        }(r, n) : r
                    }
                    return n
                };
            t.a = function() {
                var e = Object(a.useContext)(r.a).translations;
                return function(t, n) {
                    return "error" === e[0] ? n : e.length > 0 ? i(e, t, n) : n
                }
            }
        },
        176: function(e, t, n) {
            "use strict";
            var a = n(51),
                r = n(3);

            function s() {
                var e = Object(a.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 992px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"]);
                return s = function() {
                    return e
                }, e
            }
            var i = r.e.div(s(), (function(e) {
                return e.theme.mediaQueries.sm
            }));

            function u() {
                var e = Object(a.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"]);
                return u = function() {
                    return e
                }, e
            }
            var o = Object(r.e)(i)(u(), (function(e) {
                return e.theme.mediaQueries.sm
            }), (function(e) {
                return e.theme.mediaQueries.lg
            }));
            t.a = o
        },
        21: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "b", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e.BNB = "BNB", e.SYRUP = "SYRUP", e.BUSD = "BUSD", e.UST = "UST", e.USDT = "USDT", e.USDC = "USDC", e.CAKE = "CAKE", e.WFTM = "WFTM", e.BOO = "BOO"
                }(a || (a = {})),
                function(e) {
                    e.COMMUNITY = "Community", e.CORE = "Core", e.BINANCE = "Binance"
                }(r || (r = {}))
        },
        273: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"MaxTransferAmountRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MinAmountToLiquifyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"accountAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"excluded","type":"bool"}],"name":"SetExcludedFromAntiWhale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"noTaxRecipientAddr","type":"address"},{"indexed":false,"internalType":"bool","name":"_value","type":"bool"}],"name":"SetNoTaxRecipientAddr","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"noTaxSenderAddr","type":"address"},{"indexed":false,"internalType":"bool","name":"_value","type":"bool"}],"name":"SetNoTaxSenderAddr","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"router","type":"address"},{"indexed":true,"internalType":"address","name":"pair","type":"address"}],"name":"SwapRouterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"TransferTaxRateUpdated","type":"event"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"_isIncludedFromBlackList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isExcludedFromAntiWhale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTaxRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmountRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmountToLiquify","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"noTaxRecipient","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"noTaxSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setExcludeFromBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setExcludedFromAntiWhale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setIncludeToBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_noTaxRecipientAddr","type":"address"},{"internalType":"bool","name":"_value","type":"bool"}],"name":"setNoTaxRecipientAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_noTaxSenderAddr","type":"address"},{"internalType":"bool","name":"_value","type":"bool"}],"name":"setNoTaxSenderAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTaxRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_maxTransferAmountRate","type":"uint16"}],"name":"updateMaxTransferAmountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"}],"name":"updateMinAmountToLiquify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"name":"updateSwapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_transferTaxRate","type":"uint16"}],"name":"updateTransferTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        28: function(e, t, n) {
            "use strict";
            t.a = {
                cake: {
                    250: "0x308f5CcF878d8BaA778f2d1f227E3B58E6052B37",
                    97: ""
                },
                masterChef: {
                    250: "0x26cF30DF26991a72e51cD6fA6F3B84178174A2d6",
                    97: ""
                },
                wbnb: {
                    250: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
                    97: ""
                },
                lottery: {
                    250: "",
                    97: ""
                },
                lotteryNFT: {
                    250: "",
                    97: ""
                },
                mulltiCall: {
                    250: "0xBAD2B082e2212DE4B065F636CA4e5e0717623d18",
                    97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412"
                },
                busd: {
                    250: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
                    97: ""
                },
                referral: {
                    250: "0x2d2A1A5996c5426B8e7697a33514E3E695402Efe",
                    97: ""
                },
                wftm: {
                    250: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
                    97: ""
                },
                usdt: {
                    250: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
                    97: ""
                },
                usdc: {
                    250: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
                    97: ""
                }
            }
        },
        306: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_cakePerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"BunnyBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakePerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwnershipNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"countBunniesBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeBunnies","outputs":[{"internalType":"contract PancakeBunnies","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawCake","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        307: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return l
            }));
            var a = n(13),
                r = n(4),
                s = n.n(r),
                i = n(15),
                u = n(20),
                o = n(0),
                p = n.n(o),
                d = n(78),
                c = p.a.createContext(0),
                l = function(e) {
                    var t = e.children,
                        n = Object(o.useRef)(0),
                        r = Object(o.useState)(0),
                        p = Object(u.a)(r, 2),
                        l = p[0],
                        y = p[1];
                    return Object(o.useEffect)((function() {
                        var e = Object(d.b)(),
                            t = setInterval(Object(i.a)(s.a.mark((function t() {
                                var a;
                                return s.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.eth.getBlockNumber();
                                        case 2:
                                            (a = t.sent) !== n.current && (n.current = a, y(a));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), 6e3);
                        return function() {
                            return clearInterval(t)
                        }
                    }), []), Object(a.jsx)(c.Provider, {
                        value: l,
                        children: t
                    })
                }
        },
        31: function(e, t, n) {
            "use strict";
            var a = n(4),
                r = n.n(a),
                s = n(15),
                i = n(656),
                u = n(78),
                o = n(317),
                p = n(38),
                d = function() {
                    var e = Object(s.a)(r.a.mark((function e(t, n) {
                        var a, s, d, c, l, y, m;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(u.b)(), s = new a.eth.Contract(o, Object(p.e)()), d = new i.a(t), c = n.map((function(e) {
                                        return [e.address.toLowerCase(), d.encodeFunctionData(e.name, e.params)]
                                    })), e.next = 6, s.methods.aggregate(c).call();
                                case 6:
                                    return l = e.sent, y = l.returnData, m = y.map((function(e, t) {
                                        return d.decodeFunctionResult(n[t].name, e)
                                    })), e.abrupt("return", m);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            t.a = d
        },
        317: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        318: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        38: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "e", (function() {
                return i
            })), n.d(t, "g", (function() {
                return u
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return p
            })), n.d(t, "f", (function() {
                return d
            }));
            var a = n(28),
                r = function() {
                    return a.a.cake[250]
                },
                s = function() {
                    return a.a.masterChef[250]
                },
                i = function() {
                    return a.a.mulltiCall[250]
                },
                u = function() {
                    return a.a.wbnb[250]
                },
                o = function() {
                    return a.a.lottery[250]
                },
                p = function() {
                    return a.a.lotteryNFT[250]
                },
                d = function() {
                    return a.a.referral[250]
                }
        },
        395: function(e, t) {},
        417: function(e, t) {},
        419: function(e, t) {},
        49: function(e, t, n) {
            "use strict";
            var a = n(21),
                r = [{
                    sousId: 0,
                    tokenName: "fUSDT",
                    stakingTokenName: a.b.CAKE,
                    stakingTokenAddress: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
                    contractAddress: {
                        97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a",
                        250: "0x73feaa1eE314F8c655E354234017bE2193C9E24E"
                    },
                    poolCategory: a.a.CORE,
                    projectLink: "/",
                    harvest: !0,
                    tokenPerBlock: "10",
                    sortOrder: 1,
                    isFinished: !1,
                    tokenDecimals: 18
                }];
            t.a = r
        },
        494: function(e, t) {},
        496: function(e, t) {},
        528: function(e, t) {},
        533: function(e, t) {},
        535: function(e, t) {},
        542: function(e, t) {},
        555: function(e, t) {},
        58: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return I
            })), n.d(t, "c", (function() {
                return P
            })), n.d(t, "d", (function() {
                return F
            })), n.d(t, "f", (function() {
                return R
            })), n.d(t, "e", (function() {
                return N
            }));
            var a = n(4),
                r = n.n(a),
                s = n(15),
                i = n(42),
                u = n(16),
                o = n(52),
                p = n(91),
                d = n(49),
                c = n(89),
                l = (n(273), n(318), n(21)),
                y = n(31),
                m = n(38),
                f = n(11),
                b = n.n(f),
                T = n(74),
                O = n(63),
                v = n(78),
                w = d.a.filter((function(e) {
                    return e.stakingTokenName !== l.b.BNB
                })),
                x = d.a.filter((function(e) {
                    return e.stakingTokenName === l.b.BNB
                })),
                j = d.a.filter((function(e) {
                    return 0 !== e.sousId
                })),
                k = Object(v.b)(),
                A = new k.eth.Contract(T, Object(m.d)()),
                h = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) {
                                        return {
                                            address: e.stakingTokenAddress,
                                            name: "allowance",
                                            params: [t, e.contractAddress[250]]
                                        }
                                    })), e.next = 3, Object(y.a)(O, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", w.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(i.a)({}, t.sousId, new b.a(a[n]).toJSON()))
                                    }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, o, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = w.map((function(e) {
                                        return {
                                            address: e.stakingTokenAddress,
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(O, n);
                                case 3:
                                    return a = e.sent, s = w.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(i.a)({}, t.sousId, new b.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, k.eth.getBalance(t);
                                case 7:
                                    return o = e.sent, p = x.reduce((function(e, t) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(i.a)({}, t.sousId, new b.a(o).toJSON()))
                                    }), {}), e.abrupt("return", Object(u.a)(Object(u.a)({}, s), p));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                M = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, o, p;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = j.map((function(e) {
                                        return {
                                            address: e.contractAddress[250],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(c, n);
                                case 3:
                                    return a = e.sent, s = j.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(i.a)({}, t.sousId, new b.a(a[n].amount._hex).toJSON()))
                                    }), {}), e.next = 7, A.methods.userInfo("0", t).call();
                                case 7:
                                    return o = e.sent, p = o.amount, e.abrupt("return", Object(u.a)(Object(u.a)({}, s), {}, {
                                        0: new b.a(p).toJSON()
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = Object(s.a)(r.a.mark((function e(t) {
                        var n, a, s, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = j.map((function(e) {
                                        return {
                                            address: e.contractAddress[250],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(c, n);
                                case 3:
                                    return a = e.sent, s = j.reduce((function(e, t, n) {
                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(i.a)({}, t.sousId, new b.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, A.methods.pendingCoal("0", t).call();
                                case 7:
                                    return o = e.sent, e.abrupt("return", Object(u.a)(Object(u.a)({}, s), {}, {
                                        0: new b.a(o).toJSON()
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = {
                    data: Object(o.a)(d.a)
                },
                _ = Object(p.b)({
                    name: "Pools",
                    initialState: C,
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(u.a)(Object(u.a)({}, e), t)
                            }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(u.a)(Object(u.a)({}, e), {}, {
                                    userData: t
                                })
                            }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                r = n.value,
                                s = n.sousId,
                                o = e.data.findIndex((function(e) {
                                    return e.sousId === s
                                }));
                            e.data[o] = Object(u.a)(Object(u.a)({}, e.data[o]), {}, {
                                userData: Object(u.a)(Object(u.a)({}, e.data[o].userData), {}, Object(i.a)({}, a, r))
                            })
                        }
                    }
                }),
                D = _.actions,
                E = (D.setPoolsPublicData, D.setPoolsUserData),
                B = D.updatePoolsUserData,
                I = function(e) {
                    return function() {
                        var t = Object(s.a)(r.a.mark((function t(n) {
                            var a, s, i, u, o;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, h(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, S(e);
                                    case 5:
                                        return s = t.sent, t.next = 8, M(e);
                                    case 8:
                                        return i = t.sent, t.next = 11, g(e);
                                    case 11:
                                        u = t.sent, o = d.a.map((function(e) {
                                            return {
                                                sousId: e.sousId,
                                                allowance: a[e.sousId],
                                                stakingTokenBalance: s[e.sousId],
                                                stakedBalance: i[e.sousId],
                                                pendingReward: u[e.sousId]
                                            }
                                        })), n(E(o));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                P = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, h(t);
                                    case 2:
                                        s = n.sent, a(B({
                                            sousId: e,
                                            field: "allowance",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                F = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, S(t);
                                    case 2:
                                        s = n.sent, a(B({
                                            sousId: e,
                                            field: "stakingTokenBalance",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                R = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, M(t);
                                    case 2:
                                        s = n.sent, a(B({
                                            sousId: e,
                                            field: "stakedBalance",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                N = function(e, t) {
                    return function() {
                        var n = Object(s.a)(r.a.mark((function n(a) {
                            var s;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, g(t);
                                    case 2:
                                        s = n.sent, a(B({
                                            sousId: e,
                                            field: "pendingReward",
                                            value: s[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                };
            t.a = _.reducer
        },
        59: function(e, t, n) {
            "use strict";
            var a = n(28),
                r = n(21),
                s = [{
                    pid: 0,
                    risk: 5,
                    lpSymbol: "COAL-USDT",
                    lpAddresses: {
                        250: "0x69f51BD5e2BFAd9d353858958664263D9ab48d8D",
                        97: ""
                    },
                    tokenSymbol: "COAL",
                    tokenAddresses: {
                        250: "0x9373da7861c2d71062c68de3b503c63d3995283f",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.USDT,
                    quoteTokenAdresses: a.a.usdt
                }, {
                    pid: 1,
                    risk: 5,
                    lpSymbol: "COAL-WFTM",
                    lpAddresses: {
                        250: "0xE3F716070Bec6b4f07118f975Db3b15c0F8d41DE",
                        97: ""
                    },
                    tokenSymbol: "COAL",
                    tokenAddresses: {
                        250: "0x9373da7861c2d71062c68de3b503c63d3995283f",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 2,
                    risk: 1,
                    lpSymbol: "WFTM-USDC",
                    lpAddresses: {
                        250: "0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c",
                        97: ""
                    },
                    tokenSymbol: "WFTM",
                    tokenAddresses: {
                        250: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.USDC,
                    quoteTokenAdresses: a.a.usdc
                }, {
                    pid: 3,
                    risk: 3,
                    lpSymbol: "WFTM-USDT",
                    lpAddresses: {
                        250: "0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410",
                        97: ""
                    },
                    tokenSymbol: "WFTM",
                    tokenAddresses: {
                        250: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.USDT,
                    quoteTokenAdresses: a.a.usdt
                }, {
                    pid: 4,
                    risk: 3,
                    lpSymbol: "WFTM-DAI",
                    lpAddresses: {
                        250: "0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428",
                        97: ""
                    },
                    tokenSymbol: "DAI",
                    tokenAddresses: {
                        250: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 5,
                    risk: 2,
                    lpSymbol: "BOO-WFTM",
                    lpAddresses: {
                        250: "0xEc7178F4C41f346b2721907F5cF7628E388A7a58",
                        97: ""
                    },
                    tokenSymbol: "BOO",
                    tokenAddresses: {
                        250: "0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 6,
                    risk: 1,
                    lpSymbol: "WETH-WFTM",
                    lpAddresses: {
                        250: "0xf0702249f4d3a25cd3ded7859a165693685ab577",
                        97: ""
                    },
                    tokenSymbol: "WETH",
                    tokenAddresses: {
                        250: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 7,
                    risk: 4,
                    lpSymbol: "WBTC-WFTM",
                    lpAddresses: {
                        250: "0xFdb9Ab8B9513Ad9E419Cf19530feE49d412C3Ee3",
                        97: ""
                    },
                    tokenSymbol: "WBTC",
                    tokenAddresses: {
                        250: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 8,
                    risk: 5,
                    isTokenOnly: !0,
                    lpSymbol: "COAL",
                    lpAddresses: {
                        250: "0x69f51bd5e2bfad9d353858958664263d9ab48d8d",
                        97: ""
                    },
                    tokenSymbol: "COAL",
                    tokenAddresses: {
                        250: "0x9373da7861C2D71062C68DE3b503C63D3995283F",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.USDT,
                    quoteTokenAdresses: a.a.usdt
                }, {
                    pid: 9,
                    risk: 1,
                    isTokenOnly: !0,
                    lpSymbol: "WFTM",
                    lpAddresses: {
                        250: "0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410",
                        97: ""
                    },
                    tokenSymbol: "WFTM",
                    tokenAddresses: {
                        250: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.USDT,
                    quoteTokenAdresses: a.a.usdt
                }, {
                    pid: 10,
                    risk: 3,
                    isTokenOnly: !0,
                    lpSymbol: "USDC",
                    lpAddresses: {
                        250: "0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c",
                        97: ""
                    },
                    tokenSymbol: "USDC",
                    tokenAddresses: {
                        250: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 11,
                    risk: 1,
                    isTokenOnly: !0,
                    lpSymbol: "USDT",
                    lpAddresses: {
                        250: "0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410",
                        97: ""
                    },
                    tokenSymbol: "USDT",
                    tokenAddresses: {
                        250: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 12,
                    risk: 1,
                    isTokenOnly: !0,
                    lpSymbol: "MIM",
                    lpAddresses: {
                        250: "0x6f86e65b255c9111109d2D2325ca2dFc82456efc",
                        97: ""
                    },
                    tokenSymbol: "MIM",
                    tokenAddresses: {
                        250: "0x82f0B8B456c1A451378467398982d4834b6829c1",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 13,
                    risk: 2,
                    isTokenOnly: !0,
                    lpSymbol: "DAI",
                    lpAddresses: {
                        250: "0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428",
                        97: ""
                    },
                    tokenSymbol: "DAI",
                    tokenAddresses: {
                        250: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 14,
                    risk: 2,
                    isTokenOnly: !0,
                    lpSymbol: "WBTC",
                    lpAddresses: {
                        250: "0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3",
                        97: ""
                    },
                    tokenSymbol: "WBTC",
                    tokenAddresses: {
                        250: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }, {
                    pid: 15,
                    risk: 2,
                    isTokenOnly: !0,
                    lpSymbol: "WETH",
                    lpAddresses: {
                        250: "0xf0702249f4d3a25cd3ded7859a165693685ab577",
                        97: ""
                    },
                    tokenSymbol: "WETH",
                    tokenAddresses: {
                        250: "0x74b23882a30290451A17c44f4F05243b6b58C76d",
                        97: ""
                    },
                    quoteTokenSymbol: r.b.WFTM,
                    quoteTokenAdresses: a.a.wftm
                }];
            t.a = s
        },
        63: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        654: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(13),
                r = n(0),
                s = n.n(r),
                i = n(64),
                u = n.n(i),
                o = n(69),
                p = n(29),
                d = n(66),
                c = n(36),
                l = n(11),
                y = n.n(l),
                m = n(308),
                f = n(108),
                b = n(51),
                T = n(3);

            function O() {
                var e = Object(b.a)(["\n  * {\n    font-family: 'Audiowide', cursive;\n  }\n  body {\n    background-color: #060e24;\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]);
                return O = function() {
                    return e
                }, e
            }
            var v = Object(T.c)(O()),
                w = n(16),
                x = {
                    code: "en",
                    language: "English"
                },
                j = [x, {
                    code: "zh-CN",
                    language: "\u7b80\u4f53\u4e2d\u6587"
                }, {
                    code: "zh-TW",
                    language: "\u7e41\u9ad4\u4e2d\u6587"
                }],
                k = n(20),
                A = n(319),
                h = n(90),
                S = "pancakeSwapLanguage",
                M = s.a.createContext({
                    selectedLanguage: x,
                    setSelectedLanguage: function() {},
                    translatedLanguage: x,
                    setTranslatedLanguage: function() {}
                }),
                g = (parseInt(Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_CHAIN_ID: "250",
                    REACT_APP_NODE_1: "https://rpc.ftm.tools/",
                    REACT_APP_NODE_2: "https://rpc.ftm.tools/",
                    REACT_APP_NODE_3: "https://rpc.ftm.tools/"
                }).REACT_APP_CROWDIN_PROJECTID), new A.StringTranslations({
                    token: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_CHAIN_ID: "250",
                        REACT_APP_NODE_1: "https://rpc.ftm.tools/",
                        REACT_APP_NODE_2: "https://rpc.ftm.tools/",
                        REACT_APP_NODE_3: "https://rpc.ftm.tools/"
                    }).REACT_APP_CROWDIN_APIKEY
                }), function(e) {
                    var t = e.children,
                        n = Object(r.useState)(x),
                        s = Object(k.a)(n, 2),
                        i = s[0],
                        u = s[1],
                        o = Object(r.useState)(x),
                        p = Object(k.a)(o, 2),
                        d = p[0],
                        c = p[1],
                        l = Object(r.useState)([]),
                        y = Object(k.a)(l, 2),
                        m = y[0],
                        f = y[1];
                    Object(r.useEffect)((function() {
                        var e = localStorage.getItem(S);
                        if (e) {
                            var t = function(e) {
                                return j.filter((function(t) {
                                    return t.code === e
                                }))[0]
                            }(e);
                            u(t)
                        } else u(x)
                    }), []), Object(r.useEffect)((function() {
                        i && (console.log("import(`../../../public/i18n/".concat(i.code, ".json`)")), fetch("./i18n/".concat(i.code, ".json")).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            e.data.length < 1 ? f(["error"]) : f(e.data)
                        })).then((function() {
                            return c(i)
                        })).catch((function(e) {
                            console.error("ERROR"), console.error(e), f(["error"])
                        })))
                    }), [i, f]);
                    return Object(a.jsx)(M.Provider, {
                        value: {
                            selectedLanguage: i,
                            setSelectedLanguage: function(e) {
                                u(e), localStorage.setItem(S, e.code)
                            },
                            translatedLanguage: d,
                            setTranslatedLanguage: c
                        },
                        children: Object(a.jsx)(h.a.Provider, {
                            value: {
                                translations: m,
                                setTranslations: f
                            },
                            children: t
                        })
                    })
                }),
                C = "IS_DARK",
                _ = s.a.createContext({
                    isDark: null,
                    toggleTheme: function() {
                        return null
                    }
                }),
                D = function(e) {
                    var t = e.children,
                        n = Object(r.useState)((function() {
                            var e = localStorage.getItem(C);
                            return !!e && JSON.parse(e)
                        })),
                        s = Object(k.a)(n, 2),
                        i = s[0],
                        u = s[1];
                    return Object(a.jsx)(_.Provider, {
                        value: {
                            isDark: i,
                            toggleTheme: function() {
                                u((function(e) {
                                    return localStorage.setItem(C, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(a.jsx)(T.b, {
                            theme: i ? c.G : c.H,
                            children: t
                        })
                    })
                },
                E = function() {
                    var e = Object(r.useContext)(_);
                    return {
                        isDark: e.isDark,
                        toggleTheme: e.toggleTheme,
                        theme: Object(r.useContext)(T.a)
                    }
                },
                B = [{
                    label: "Home",
                    icon: "HomeIcon",
                    href: "/"
                }, {
                    label: "Trade",
                    icon: "TradeIcon",
                    items: [{
                        label: "Exchange",
                        href: "https://spookyswap.finance/swap?outputCurrency=0x308f5CcF878d8BaA778f2d1f227E3B58E6052B37"
                    }, {
                        label: "Liquidity",
                        href: "https://spookyswap.finance/pool"
                    }]
                }, {
                    label: "LP Staking",
                    icon: "FarmIcon",
                    href: "/farms"
                }, {
                    label: "Single Staking",
                    icon: "PoolIcon",
                    href: "/nests"
                }, {
                    label: "Referral Network",
                    icon: "GroupsIcon",
                    href: "/referrals"
                }, {
                    label: "Mineral Mines",
                    icon: "BondsIcon",
                    href: "/pools"
                }, {
                    label: "Listing",
                    icon: "InfoIcon",
                    items: [{
                        label: "Farmscan",
                        href: "/"
                    }, {
                        label: "CoinGecko",
                        href: "/"
                    }, {
                        label: "CoinMarketCap",
                        href: "/"
                    }, {
                        label: "vFat Tools",
                        href: "/"
                    }]
                }, {
                    label: "Socials",
                    icon: "MoreIcon",
                    items: [{
                        label: "Github",
                        href: "https://github.com/TheCoalFarm"
                    }, {
                        label: "Docs",
                        href: "https://coal-farm.gitbook.io/coal-farm/"
                    }]
                }, {
                    label: "KYC/Doxxed",
                    icon: "AuditIcon",
                    href: "/"
                }],
                I = function(e) {
                    var t = Object(d.m)(),
                        n = t.account,
                        s = t.connect,
                        i = t.reset,
                        u = Object(r.useContext)(M),
                        o = u.selectedLanguage,
                        p = u.setSelectedLanguage,
                        l = E(),
                        y = l.isDark,
                        m = l.toggleTheme,
                        b = Object(f.g)();
                    return Object(a.jsx)(c.u, Object(w.a)({
                        account: n,
                        login: s,
                        logout: i,
                        isDark: y,
                        toggleTheme: m,
                        currentLang: o && o.code,
                        langs: j,
                        setLang: p,
                        cakePriceUsd: b.toNumber(),
                        links: B,
                        priceLink: "/"
                    }, e))
                },
                P = n(176);

            function F() {
                var e = Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
                return F = function() {
                    return e
                }, e
            }
            var R = Object(T.e)(P.a)(F()),
                N = function() {
                    return Object(a.jsx)(R, {
                        children: Object(a.jsx)(c.A, {})
                    })
                },
                U = n(4),
                W = n.n(U),
                q = n(15),
                L = n(172),
                J = n(306),
                H = "0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a",
                K = n(31);

            function Q() {
                var e = Object(b.a)(["\n  text-align: center;\n"]);
                return Q = function() {
                    return e
                }, e
            }

            function V() {
                var e = Object(b.a)(["\n  padding: 24px;\n  text-align: center;\n"]);
                return V = function() {
                    return e
                }, e
            }
            var z = T.e.div(V()),
                Y = T.e.div(Q()),
                G = function(e) {
                    var t = e.onDismiss,
                        n = Object(L.a)();
                    return Object(a.jsxs)(c.w, {
                        title: n(999, "Congratulations!"),
                        onDismiss: t,
                        children: [Object(a.jsxs)(z, {
                            children: [Object(a.jsx)("img", {
                                src: "/images/present.svg",
                                alt: "You won present",
                                style: {
                                    height: "64px",
                                    marginBottom: "24px"
                                }
                            }), Object(a.jsx)(c.n, {
                                size: "lg",
                                color: "secondary",
                                children: n(999, "You won an NFT!")
                            })]
                        }), Object(a.jsx)(Y, {
                            children: Object(a.jsx)(c.d, {
                                as: "a",
                                href: "/nft",
                                children: n(999, "Go to claim NFT")
                            })
                        })]
                    })
                },
                X = function() {
                    var e = Object(d.m)().account,
                        t = Object(c.I)(Object(a.jsx)(G, {})),
                        n = Object(k.a)(t, 1)[0],
                        s = Object(r.useRef)((function() {
                            return n()
                        }));
                    return Object(r.useEffect)((function() {
                        var t = function() {
                            var t = Object(q.a)(W.a.mark((function t() {
                                var n, a, r, i, u, o, p, d, c, l, y, m, f, b;
                                return W.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(K.a)(J, [{
                                                address: H,
                                                name: "totalSupplyDistributed"
                                            }, {
                                                address: H,
                                                name: "currentDistributedSupply"
                                            }, {
                                                address: H,
                                                name: "canClaim",
                                                params: [e]
                                            }, {
                                                address: H,
                                                name: "hasClaimed",
                                                params: [e]
                                            }]);
                                        case 2:
                                            n = t.sent, a = Object(k.a)(n, 4), r = a[0], i = a[1], u = a[2], o = a[3], p = Object(k.a)(r, 1), d = p[0], c = Object(k.a)(i, 1), l = c[0], y = Object(k.a)(u, 1), m = y[0], f = Object(k.a)(o, 1), b = f[0], l.lt(d) && m && !b && s.current();
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        e && !document.location.href.includes("/nft") && t()
                    }), [e, s]), Object(a.jsx)("div", {})
                },
                Z = Object(r.lazy)((function() {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(12)]).then(n.bind(null, 792))
                })),
                $ = Object(r.lazy)((function() {
                    return Promise.all([n.e(0), n.e(2), n.e(1), n.e(8)]).then(n.bind(null, 791))
                })),
                ee = Object(r.lazy)((function() {
                    return Promise.all([n.e(0), n.e(2), n.e(7), n.e(1), n.e(10)]).then(n.bind(null, 790))
                })),
                te = Object(r.lazy)((function() {
                    return n.e(16).then(n.bind(null, 789))
                })),
                ne = Object(r.lazy)((function() {
                    return n.e(9).then(n.bind(null, 793))
                }));
            y.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var ae = function() {
                    var e = Object(d.m)(),
                        t = e.account,
                        n = e.connect;
                    return Object(r.useEffect)((function() {
                        !t && window.localStorage.getItem("accountStatus") && n("injected")
                    }), [t, n]), Object(f.d)(), Object(a.jsx)(o.a, {
                        children: Object(a.jsxs)(m.a, {
                            ReactRouterRoute: p.a,
                            children: [Object(a.jsx)(c.y, {}), Object(a.jsx)(v, {}), Object(a.jsx)(I, {
                                children: Object(a.jsx)(r.Suspense, {
                                    fallback: Object(a.jsx)(N, {}),
                                    children: Object(a.jsxs)(p.c, {
                                        children: [Object(a.jsx)(p.a, {
                                            path: "/",
                                            exact: !0,
                                            children: Object(a.jsx)(Z, {})
                                        }), Object(a.jsx)(p.a, {
                                            path: "/farms",
                                            children: Object(a.jsx)($, {})
                                        }), Object(a.jsx)(p.a, {
                                            path: "/nests",
                                            children: Object(a.jsx)($, {
                                                tokenMode: !0
                                            })
                                        }), Object(a.jsx)(p.a, {
                                            path: "/pools",
                                            children: Object(a.jsx)(ee, {})
                                        }), Object(a.jsx)(p.a, {
                                            path: "/referrals",
                                            children: Object(a.jsx)(ne, {})
                                        }), Object(a.jsx)(p.a, {
                                            component: te
                                        })]
                                    })
                                })
                            }), Object(a.jsx)(X, {})]
                        })
                    })
                },
                re = s.a.memo(ae),
                se = n(93),
                ie = n(56),
                ue = n(126),
                oe = n(307),
                pe = n(128),
                de = n(91),
                ce = n(105),
                le = n(58),
                ye = Object(de.a)({
                    devTools: !1,
                    reducer: {
                        farms: ce.a,
                        pools: le.a
                    }
                }),
                me = function(e) {
                    var t = e.children,
                        n = Object(ue.a)(),
                        r = parseInt("250");
                    return Object(a.jsx)(ie.a, {
                        store: ye,
                        children: Object(a.jsx)(D, {
                            children: Object(a.jsx)(g, {
                                children: Object(a.jsx)(d.b, {
                                    chainId: r,
                                    connectors: {
                                        walletconnect: {
                                            rpcUrl: n
                                        },
                                        bsc: se
                                    },
                                    children: Object(a.jsx)(oe.b, {
                                        children: Object(a.jsx)(pe.b, {
                                            children: Object(a.jsx)(c.x, {
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                };
            u.a.render(Object(a.jsx)(s.a.StrictMode, {
                children: Object(a.jsx)(me, {
                    children: Object(a.jsx)(re, {})
                })
            }), document.getElementById("root"))
        },
        74: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract CoalToken","name":"_coalToken","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"commissionAmount","type":"uint256"}],"name":"ReferralCommissionPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetDevAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetFeeAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"coalPerSecond","type":"uint256"}],"name":"UpdateEmissionRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newStartTime","type":"uint256"}],"name":"UpdateStartTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositFeeBP","type":"uint256"}],"name":"addPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"address","name":"lpToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositFeeBP","type":"uint256"}],"name":"setPool","type":"event"},{"inputs":[],"name":"MAXIMUM_REFERRAL_COMMISSION_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"coalPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coalReferral","outputs":[{"internalType":"contract ICoalReferral","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coalToken","outputs":[{"internalType":"contract CoalToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCoal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"name":"poolExistence","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardSecond","type":"uint256"},{"internalType":"uint256","name":"accCoalPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"},{"internalType":"uint256","name":"lpSupply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralCommissionRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ICoalReferral","name":"_coalReferral","type":"address"}],"name":"setCoalReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_referralCommissionRate","type":"uint16"}],"name":"setReferralCommissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coalPerSecond","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartTime","type":"uint256"}],"name":"updateStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        78: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return p
            })), n.d(t, "c", (function() {
                return d
            }));
            var a = n(116),
                r = n.n(a),
                s = n(126),
                i = Object(s.a)(),
                u = new r.a.providers.HttpProvider(i, {
                    timeout: 1e4
                }),
                o = function() {
                    return new r.a(u)
                },
                p = function(e, t, n) {
                    return new(o().eth.Contract)(e, t, n)
                },
                d = function(e) {
                    return r.a.utils.isAddress(e)
                }
        },
        89: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        90: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n(0),
                r = {
                    translations: [],
                    setTranslations: function() {}
                },
                s = Object(a.createContext)(r)
        }
    },
    [
        [654, 5, 6]
    ]
]);
//# sourceMappingURL=main.48d20759.chunk.js.map