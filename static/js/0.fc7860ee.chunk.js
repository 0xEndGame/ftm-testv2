(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [0], {
        680: function(e, t, r) {
            (function(t) {
                e.exports = function e(t, r, n) {
                    function i(s, a) {
                        if (!r[s]) {
                            if (!t[s]) {
                                if (o) return o(s, !0);
                                var u = new Error("Cannot find module '" + s + "'");
                                throw u.code = "MODULE_NOT_FOUND", u
                            }
                            var l = r[s] = {
                                exports: {}
                            };
                            t[s][0].call(l.exports, (function(e) {
                                return i(t[s][1][e] || e)
                            }), l, l.exports, e, t, r, n)
                        }
                        return r[s].exports
                    }
                    for (var o = !1, s = 0; s < n.length; s++) i(n[s]);
                    return i
                }({
                    1: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        }), r.version = "4.0.47"
                    }, {}],
                    2: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./utils/properties"),
                            i = (o.isSigner = function(e) {
                                return n.isType(e, "Signer")
                            }, o);

                        function o() {
                            n.setType(this, "Signer")
                        }
                        r.Signer = i
                    }, {
                        "./utils/properties": 74
                    }],
                    3: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./utils/bignumber");
                        r.AddressZero = "0x0000000000000000000000000000000000000000", r.HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000", r.EtherSymbol = "\u039e";
                        var i = n.bigNumberify(-1);
                        r.NegativeOne = i;
                        var o = n.bigNumberify(0);
                        r.Zero = o;
                        var s = n.bigNumberify(1);
                        r.One = s;
                        var a = n.bigNumberify(2);
                        r.Two = a;
                        var u = n.bigNumberify("1000000000000000000");
                        r.WeiPerEther = u;
                        var l = n.bigNumberify("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
                        r.MaxUint256 = l
                    }, {
                        "./utils/bignumber": 63
                    }],
                    4: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s, a = e("./constants"),
                            u = o(e("./errors")),
                            l = e("./utils/abi-coder"),
                            h = e("./utils/address"),
                            f = e("./utils/bignumber"),
                            c = e("./utils/bytes"),
                            d = e("./utils/interface"),
                            p = e("./utils/properties"),
                            v = e("./providers/abstract-provider"),
                            y = e("./abstract-signer"),
                            m = (i(g, s = y.Signer), g.prototype.getAddress = function() {
                                return Promise.resolve(this.address)
                            }, g.prototype._fail = function(e, t) {
                                return Promise.resolve().then((function() {
                                    u.throwError(e, u.UNSUPPORTED_OPERATION, {
                                        operation: t
                                    })
                                }))
                            }, g.prototype.signMessage = function(e) {
                                return this._fail("VoidSigner cannot sign messages", "signMessage")
                            }, g.prototype.sendTransaction = function(e) {
                                return this._fail("VoidSigner cannot sign transactions", "sendTransaction")
                            }, g.prototype.connect = function(e) {
                                return new g(this.address, e)
                            }, g);

                        function g(e, t) {
                            var r = s.call(this) || this;
                            return p.defineReadOnly(r, "address", e), p.defineReadOnly(r, "provider", t), r
                        }
                        r.VoidSigner = m;
                        var b = {
                            chainId: !0,
                            data: !0,
                            from: !0,
                            gasLimit: !0,
                            gasPrice: !0,
                            nonce: !0,
                            to: !0,
                            value: !0
                        };

                        function w(e, t, r) {
                            var n = e.interface.functions[t];
                            return function() {
                                for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                var o = {},
                                    s = null;
                                if (t.length === n.inputs.length + 1 && "object" == typeof t[t.length - 1])
                                    for (var h in null != (o = p.shallowCopy(t.pop())).blockTag && (s = o.blockTag), delete o.blockTag, o)
                                        if (!b[h]) throw new Error("unknown transaction override " + h);
                                if (t.length != n.inputs.length) throw new Error("incorrect number of arguments");
                                return ["data", "to"].forEach((function(e) {
                                        null != o[e] && u.throwError("cannot override " + e, u.UNSUPPORTED_OPERATION, {
                                            operation: e
                                        })
                                    })), o.to = e._deployed(s).then((function() {
                                        return e.addressPromise
                                    })),
                                    function e(t, r, n) {
                                        if (Array.isArray(n)) {
                                            var i = [];
                                            return n.forEach((function(n, o) {
                                                var s = null;
                                                s = Array.isArray(r) ? r[o] : r[n.name], i.push(e(t, s, n))
                                            })), Promise.all(i)
                                        }
                                        if ("address" === n.type) return t.resolveName(r);
                                        if ("tuple" === n.type) return e(t, r, n.components);
                                        var o = n.type.match(/(.*)(\[[0-9]*\]$)/);
                                        if (o) {
                                            if (!Array.isArray(r)) throw new Error("invalid value for array");
                                            var s = [],
                                                a = {
                                                    components: n.components,
                                                    type: o[1]
                                                };
                                            return r.forEach((function(r) {
                                                s.push(e(t, r, a))
                                            })), Promise.all(s)
                                        }
                                        return Promise.resolve(r)
                                    }(e.provider, t, n.inputs).then((function(t) {
                                        if (o.data = n.encode(t), "call" === n.type) return r ? Promise.resolve(a.Zero) : (e.provider || u.throwError("call (constant functions) require a provider or a signer with a provider", u.UNSUPPORTED_OPERATION, {
                                            operation: "call"
                                        }), ["gasLimit", "gasPrice", "value"].forEach((function(e) {
                                            if (null != o[e]) throw new Error("call cannot override " + e)
                                        })), null == o.from && e.signer && (o.from = e.signer.getAddress()), e.provider.call(o, s).then((function(r) {
                                            if (c.hexDataLength(r) % 32 == 4 && "0x08c379a0" === c.hexDataSlice(r, 0, 4)) {
                                                var i = l.defaultAbiCoder.decode(["string"], c.hexDataSlice(r, 4));
                                                u.throwError("call revert exception", u.CALL_EXCEPTION, {
                                                    address: e.address,
                                                    args: t,
                                                    method: n.signature,
                                                    errorSignature: "Error(string)",
                                                    errorArgs: [i],
                                                    reason: i,
                                                    transaction: o
                                                })
                                            }
                                            try {
                                                var s = n.decode(r);
                                                return 1 === n.outputs.length && (s = s[0]), s
                                            } catch (i) {
                                                throw "0x" === r && 0 < n.outputs.length && u.throwError("call exception", u.CALL_EXCEPTION, {
                                                    address: e.address,
                                                    method: n.signature,
                                                    args: t
                                                }), i
                                            }
                                        })));
                                        if ("transaction" === n.type) return r ? (e.provider || u.throwError("estimate gas require a provider or a signer with a provider", u.UNSUPPORTED_OPERATION, {
                                            operation: "estimateGas"
                                        }), null == o.from && e.signer && (o.from = e.signer.getAddress()), e.provider.estimateGas(o)) : (null == o.gasLimit && null != n.gas && (o.gasLimit = f.bigNumberify(n.gas).add(21e3)), e.signer || u.throwError("sending a transaction requires a signer", u.UNSUPPORTED_OPERATION, {
                                            operation: "sendTransaction"
                                        }), null != o.from && u.throwError("cannot override from in a transaction", u.UNSUPPORTED_OPERATION, {
                                            operation: "sendTransaction"
                                        }), e.signer.sendTransaction(o).then((function(t) {
                                            var r = t.wait.bind(t);
                                            return t.wait = function(t) {
                                                return r(t).then((function(t) {
                                                    return t.events = t.logs.map((function(r) {
                                                        var n = p.deepCopy(r),
                                                            i = e.interface.parseLog(r);
                                                        return i && (n.args = i.values, n.decode = i.decode, n.event = i.name, n.eventSignature = i.signature), n.removeListener = function() {
                                                            return e.provider
                                                        }, n.getBlock = function() {
                                                            return e.provider.getBlock(t.blockHash)
                                                        }, n.getTransaction = function() {
                                                            return e.provider.getTransaction(t.transactionHash)
                                                        }, n.getTransactionReceipt = function() {
                                                            return Promise.resolve(t)
                                                        }, n
                                                    })), t
                                                }))
                                            }, t
                                        })));
                                        throw new Error("invalid type - " + n.type)
                                    }))
                            }
                        }

                        function _(e) {
                            return !e.address || null != e.topics && 0 !== e.topics.length ? (e.address || "*") + "@" + (e.topics ? e.topics.join(":") : "") : "*"
                        }
                        var M = (A.prototype.deployed = function() {
                            return this._deployed()
                        }, A.prototype._deployed = function(e) {
                            var t = this;
                            return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then((function() {
                                return t
                            })) : this._deployedPromise = this.provider.getCode(this.address, e).then((function(e) {
                                return "0x" === e && u.throwError("contract not deployed", u.UNSUPPORTED_OPERATION, {
                                    contractAddress: t.address,
                                    operation: "getDeployed"
                                }), t
                            }))), this._deployedPromise
                        }, A.prototype.fallback = function(e) {
                            var t = this;
                            this.signer || u.throwError("sending a transaction requires a signer", u.UNSUPPORTED_OPERATION, {
                                operation: "sendTransaction(fallback)"
                            });
                            var r = p.shallowCopy(e || {});
                            return ["from", "to"].forEach((function(e) {
                                null != r[e] && u.throwError("cannot override " + e, u.UNSUPPORTED_OPERATION, {
                                    operation: e
                                })
                            })), r.to = this.addressPromise, this.deployed().then((function() {
                                return t.signer.sendTransaction(r)
                            }))
                        }, A.prototype.connect = function(e) {
                            "string" == typeof e && (e = new m(e, this.provider));
                            var t = new A(this.address, this.interface, e);
                            return this.deployTransaction && p.defineReadOnly(t, "deployTransaction", this.deployTransaction), t
                        }, A.prototype.attach = function(e) {
                            return new A(e, this.interface, this.signer || this.provider)
                        }, A.isIndexed = function(e) {
                            return d.Interface.isIndexed(e)
                        }, A.prototype._getEventFilter = function(e) {
                            var t = this;
                            if ("string" == typeof e) {
                                if ("*" === e) return {
                                    prepareEvent: function(e) {
                                        var r = t.interface.parseLog(e);
                                        return r && (e.args = r.values, e.decode = r.decode, e.event = r.name, e.eventSignature = r.signature), [e]
                                    },
                                    eventTag: "*",
                                    filter: {
                                        address: this.address
                                    }
                                }; - 1 !== e.indexOf("(") && (e = l.formatSignature(l.parseSignature("event " + e)));
                                var r = this.interface.events[e];
                                r || u.throwError("unknown event - " + e, u.INVALID_ARGUMENT, {
                                    argumnet: "eventName",
                                    value: e
                                });
                                var n = {
                                    address: this.address,
                                    topics: [r.topic]
                                };
                                return {
                                    prepareEvent: function(e) {
                                        var t = r.decode(e.data, e.topics);
                                        e.args = t;
                                        var n = Array.prototype.slice.call(t);
                                        return n.push(e), n
                                    },
                                    event: r,
                                    eventTag: _(n),
                                    filter: n
                                }
                            }
                            var i = {
                                    address: this.address
                                },
                                o = null;
                            if (e.topics && e.topics[0])
                                for (var s in i.topics = e.topics, this.interface.events)
                                    if (-1 !== s.indexOf("(")) {
                                        var a = this.interface.events[s];
                                        if (a.topic === e.topics[0].toLowerCase()) {
                                            o = a;
                                            break
                                        }
                                    }
                            return {
                                prepareEvent: function(e) {
                                    if (!o) return [e];
                                    var t = o.decode(e.data, e.topics);
                                    e.args = t;
                                    var r = Array.prototype.slice.call(t);
                                    return r.push(e), r
                                },
                                event: o,
                                eventTag: _(i),
                                filter: i
                            }
                        }, A.prototype._addEventListener = function(e, t, r) {
                            var n = this;

                            function i(r) {
                                var i = p.deepCopy(r),
                                    o = e.prepareEvent(i);
                                e.event && (i.decode = e.event.decode, i.event = e.event.name, i.eventSignature = e.event.signature), i.removeListener = function() {
                                    n.removeListener(e.filter, t)
                                }, i.getBlock = function() {
                                    return n.provider.getBlock(r.blockHash)
                                }, i.getTransaction = function() {
                                    return n.provider.getTransaction(r.transactionHash)
                                }, i.getTransactionReceipt = function() {
                                    return n.provider.getTransactionReceipt(r.transactionHash)
                                }, n.emit.apply(n, [e.filter].concat(o))
                            }
                            this.provider || u.throwError("events require a provider or a signer with a provider", u.UNSUPPORTED_OPERATION, {
                                operation: "once"
                            }), this.provider.on(e.filter, i), this._events.push({
                                eventFilter: e,
                                listener: t,
                                wrappedListener: i,
                                once: r
                            })
                        }, A.prototype.on = function(e, t) {
                            return this._addEventListener(this._getEventFilter(e), t, !1), this
                        }, A.prototype.once = function(e, t) {
                            return this._addEventListener(this._getEventFilter(e), t, !0), this
                        }, A.prototype.addListener = function(e, t) {
                            return this.on(e, t)
                        }, A.prototype.emit = function(e) {
                            for (var t = this, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                            if (!this.provider) return !1;
                            var i = !1,
                                o = this._getEventFilter(e);
                            return this._events = this._events.filter((function(e) {
                                return e.eventFilter.eventTag !== o.eventTag || (setTimeout((function() {
                                    e.listener.apply(t, r)
                                }), 0), i = !0, !e.once)
                            })), i
                        }, A.prototype.listenerCount = function(e) {
                            if (!this.provider) return 0;
                            var t = this._getEventFilter(e);
                            return this._events.filter((function(e) {
                                return e.eventFilter.eventTag === t.eventTag
                            })).length
                        }, A.prototype.listeners = function(e) {
                            if (!this.provider) return [];
                            var t = this._getEventFilter(e);
                            return this._events.filter((function(e) {
                                return e.eventFilter.eventTag === t.eventTag
                            })).map((function(e) {
                                return e.listener
                            }))
                        }, A.prototype.removeAllListeners = function(e) {
                            var t = this;
                            if (!this.provider) return this;
                            var r = this._getEventFilter(e);
                            return this._events = this._events.filter((function(e) {
                                return e.eventFilter.eventTag !== r.eventTag || (t.provider.removeListener(e.eventFilter.filter, e.wrappedListener), !1)
                            })), this
                        }, A.prototype.removeListener = function(e, t) {
                            var r = this;
                            if (!this.provider) return this;
                            var n = !1,
                                i = this._getEventFilter(e);
                            return this._events = this._events.filter((function(e) {
                                return e.eventFilter.eventTag !== i.eventTag || e.listener !== t || (r.provider.removeListener(e.eventFilter.filter, e.wrappedListener), !!n || !(n = !0))
                            })), this
                        }, A);

                        function A(e, t, r) {
                            var n = this;
                            if (u.checkNew(this, A), d.Interface.isInterface(t) ? p.defineReadOnly(this, "interface", t) : p.defineReadOnly(this, "interface", new d.Interface(t)), y.Signer.isSigner(r) ? (p.defineReadOnly(this, "provider", r.provider), p.defineReadOnly(this, "signer", r)) : v.Provider.isProvider(r) ? (p.defineReadOnly(this, "provider", r), p.defineReadOnly(this, "signer", null)) : u.throwError("invalid signer or provider", u.INVALID_ARGUMENT, {
                                    arg: "signerOrProvider",
                                    value: r
                                }), p.defineReadOnly(this, "estimate", {}), p.defineReadOnly(this, "functions", {}), p.defineReadOnly(this, "filters", {}), Object.keys(this.interface.events).forEach((function(e) {
                                    var t = n.interface.events[e];
                                    p.defineReadOnly(n.filters, e, (function() {
                                        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                        return {
                                            address: n.address,
                                            topics: t.encodeTopics(e)
                                        }
                                    }))
                                })), this._events = [], p.defineReadOnly(this, "address", e), this.provider) p.defineReadOnly(this, "addressPromise", this.provider.resolveName(e).then((function(e) {
                                if (null == e) throw new Error("name not found");
                                return e
                            })).catch((function(e) {
                                throw e
                            })));
                            else try {
                                p.defineReadOnly(this, "addressPromise", Promise.resolve(h.getAddress(e)))
                            } catch (t) {
                                u.throwError("provider is required to use non-address contract address", u.INVALID_ARGUMENT, {
                                    argument: "addressOrName",
                                    value: e
                                })
                            }
                            Object.keys(this.interface.functions).forEach((function(e) {
                                var t = w(n, e, !1);
                                null == n[e] ? p.defineReadOnly(n, e, t) : u.warn("WARNING: Multiple definitions for " + e), null == n.functions[e] && (p.defineReadOnly(n.functions, e, t), p.defineReadOnly(n.estimate, e, w(n, e, !0)))
                            }))
                        }
                        r.Contract = M;
                        var E = (S.prototype.getDeployTransaction = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            var r = {};
                            if (e.length === this.interface.deployFunction.inputs.length + 1)
                                for (var n in r = p.shallowCopy(e.pop()))
                                    if (!b[n]) throw new Error("unknown transaction override " + n);
                            return ["data", "from", "to"].forEach((function(e) {
                                null != r[e] && u.throwError("cannot override " + e, u.UNSUPPORTED_OPERATION, {
                                    operation: e
                                })
                            })), u.checkArgumentCount(e.length, this.interface.deployFunction.inputs.length, " in Contract constructor"), r.data = this.interface.deployFunction.encode(this.bytecode, e), r
                        }, S.prototype.deploy = function() {
                            for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                            var n = this.getDeployTransaction.apply(this, t);
                            return this.signer.sendTransaction(n).then((function(t) {
                                var r = new M(h.getContractAddress(t), e.interface, e.signer);
                                return p.defineReadOnly(r, "deployTransaction", t), r
                            }))
                        }, S.prototype.attach = function(e) {
                            return new M(e, this.interface, this.signer)
                        }, S.prototype.connect = function(e) {
                            return new S(this.interface, this.bytecode, e)
                        }, S.fromSolidity = function(e, t) {
                            null == e && u.throwError("missing compiler output", u.MISSING_ARGUMENT, {
                                argument: "compilerOutput"
                            }), "string" == typeof e && (e = JSON.parse(e));
                            var r = e.abi,
                                n = null;
                            return e.bytecode ? n = e.bytecode : e.evm && e.evm.bytecode && (n = e.evm.bytecode), new S(r, n, t)
                        }, S);

                        function S(e, t, r) {
                            var n = null;
                            "string" == typeof t ? n = t : c.isArrayish(t) ? n = c.hexlify(t) : "string" == typeof t.object ? n = t.object : u.throwError("bytecode must be a valid hex string", u.INVALID_ARGUMENT, {
                                arg: "bytecode",
                                value: t
                            }), "0x" !== n.substring(0, 2) && (n = "0x" + n), c.isHexString(n) || u.throwError("bytecode must be a valid hex string", u.INVALID_ARGUMENT, {
                                arg: "bytecode",
                                value: t
                            }), n.length % 2 != 0 && u.throwError("bytecode must be valid data (even length)", u.INVALID_ARGUMENT, {
                                arg: "bytecode",
                                value: t
                            }), p.defineReadOnly(this, "bytecode", n), d.Interface.isInterface(e) ? p.defineReadOnly(this, "interface", e) : p.defineReadOnly(this, "interface", new d.Interface(e)), r && !y.Signer.isSigner(r) && u.throwError("invalid signer", u.INVALID_ARGUMENT, {
                                arg: "signer",
                                value: null
                            }), p.defineReadOnly(this, "signer", r || null)
                        }
                        r.ContractFactory = E
                    }, {
                        "./abstract-signer": 2,
                        "./constants": 3,
                        "./errors": 5,
                        "./providers/abstract-provider": 50,
                        "./utils/abi-coder": 59,
                        "./utils/address": 60,
                        "./utils/bignumber": 63,
                        "./utils/bytes": 64,
                        "./utils/interface": 69,
                        "./utils/properties": 74
                    }],
                    5: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./_version");
                        r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.MISSING_NEW = "MISSING_NEW", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED";
                        var i = !(r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
                            o = !1;

                        function s(e, t, i) {
                            if (o) throw new Error("unknown error");
                            t = t || r.UNKNOWN_ERROR, i = i || {};
                            var s = [];
                            Object.keys(i).forEach((function(t) {
                                try {
                                    s.push(t + "=" + JSON.stringify(i[t]))
                                } catch (e) {
                                    s.push(t + "=" + JSON.stringify(i[t].toString()))
                                }
                            })), s.push("version=" + n.version);
                            var a = e;
                            s.length && (e += " (" + s.join(", ") + ")");
                            var u = new Error(e);
                            throw u.reason = a, u.code = t, Object.keys(i).forEach((function(e) {
                                u[e] = i[e]
                            })), u
                        }
                        r.throwError = s, r.checkNew = function(e, t) {
                            e instanceof t || s("missing new", r.MISSING_NEW, {
                                name: t.name
                            })
                        }, r.checkArgumentCount = function(e, t, n) {
                            n = n || "", e < t && s("missing argument" + n, r.MISSING_ARGUMENT, {
                                count: e,
                                expectedCount: t
                            }), t < e && s("too many arguments" + n, r.UNEXPECTED_ARGUMENT, {
                                count: e,
                                expectedCount: t
                            })
                        }, r.setCensorship = function(e, t) {
                            i && s("error censorship permanent", r.UNSUPPORTED_OPERATION, {
                                operation: "setCensorship"
                            }), o = !!e, i = !!t
                        }, r.checkNormalize = function() {
                            try {
                                if (["NFD", "NFC", "NFKD", "NFKC"].forEach((function(t) {
                                        try {
                                            "test".normalize(t)
                                        } catch (e) {
                                            throw new Error("missing " + t)
                                        }
                                    })), String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                            } catch (e) {
                                s("platform missing String.prototype.normalize", r.UNSUPPORTED_OPERATION, {
                                    operation: "String.prototype.normalize",
                                    form: e.message
                                })
                            }
                        };
                        var a = {
                                debug: 1,
                                default: 2,
                                info: 2,
                                warn: 3,
                                error: 4,
                                off: 5
                            },
                            u = a.default;

                        function l(e, t) {
                            u > a[e] || console.log.apply(console, t)
                        }

                        function h() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            l("warn", e)
                        }
                        r.setLogLevel = function(e) {
                            var t = a[e];
                            null != t ? u = t : h("invliad log level - " + e)
                        }, r.warn = h, r.info = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            l("info", e)
                        }
                    }, {
                        "./_version": 1
                    }],
                    6: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = e("./contract");
                        r.Contract = i.Contract, r.ContractFactory = i.ContractFactory, r.VoidSigner = i.VoidSigner;
                        var o = e("./abstract-signer");
                        r.Signer = o.Signer;
                        var s = e("./wallet");
                        r.Wallet = s.Wallet;
                        var a = n(e("./constants"));
                        r.constants = a;
                        var u = n(e("./errors"));
                        r.errors = u;
                        var l = n(e("./providers"));
                        r.providers = l;
                        var h = n(e("./utils"));
                        r.utils = h;
                        var f = n(e("./wordlists"));
                        r.wordlists = f;
                        var c = e("./utils/shims");
                        r.platform = c.platform;
                        var d = e("./_version");
                        r.version = d.version, r.getDefaultProvider = function(e) {
                            null == e && (e = "homestead");
                            var t = h.getNetwork(e);
                            return t && t._defaultProvider || u.throwError("unsupported getDefaultProvider network", u.UNSUPPORTED_OPERATION, {
                                operation: "getDefaultProvider",
                                network: e
                            }), t._defaultProvider(l)
                        }
                    }, {
                        "./_version": 1,
                        "./abstract-signer": 2,
                        "./constants": 3,
                        "./contract": 4,
                        "./errors": 5,
                        "./providers": 54,
                        "./utils": 68,
                        "./utils/shims": 80,
                        "./wallet": 88,
                        "./wordlists": 89
                    }],
                    7: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("./ethers"));
                        r.ethers = i,
                            function(e) {
                                for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t])
                            }(e("./ethers"))
                    }, {
                        "./ethers": 6
                    }],
                    8: [function(e, t, r) {
                        "use strict";
                        ! function(e) {
                            function n(e) {
                                return parseInt(e) === e
                            }

                            function i(e) {
                                if (!n(e.length)) return !1;
                                for (var t = 0; t < e.length; t++)
                                    if (!n(e[t]) || e[t] < 0 || 255 < e[t]) return !1;
                                return !0
                            }

                            function o(e, t) {
                                if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
                                if (Array.isArray(e)) {
                                    if (!i(e)) throw new Error("Array contains invalid value: " + e);
                                    return new Uint8Array(e)
                                }
                                if (n(e.length) && i(e)) return new Uint8Array(e);
                                throw new Error("unsupported array-like object")
                            }

                            function s(e) {
                                return new Uint8Array(e)
                            }

                            function a(e, t, r, n, i) {
                                null == n && null == i || (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)), t.set(e, r)
                            }
                            var u, l = {
                                    toBytes: function(e) {
                                        var t = [],
                                            r = 0;
                                        for (e = encodeURI(e); r < e.length;) {
                                            var n = e.charCodeAt(r++);
                                            37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(n)
                                        }
                                        return o(t)
                                    },
                                    fromBytes: function(e) {
                                        for (var t = [], r = 0; r < e.length;) {
                                            var n = e[r];
                                            n < 128 ? (t.push(String.fromCharCode(n)), r++) : 191 < n && n < 224 ? (t.push(String.fromCharCode((31 & n) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & n) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3)
                                        }
                                        return t.join("")
                                    }
                                },
                                h = (u = "0123456789abcdef", {
                                    toBytes: function(e) {
                                        for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                                        return t
                                    },
                                    fromBytes: function(e) {
                                        for (var t = [], r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            t.push(u[(240 & n) >> 4] + u[15 & n])
                                        }
                                        return t.join("")
                                    }
                                }),
                                f = {
                                    16: 10,
                                    24: 12,
                                    32: 14
                                },
                                c = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
                                d = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
                                p = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
                                v = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
                                y = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
                                m = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
                                g = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
                                b = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
                                w = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
                                _ = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
                                M = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
                                A = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
                                E = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
                                S = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
                                k = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

                            function N(e) {
                                for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
                                return t
                            }
                            var x = function e(t) {
                                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                                Object.defineProperty(this, "key", {
                                    value: o(t, !0)
                                }), this._prepare()
                            };
                            x.prototype._prepare = function() {
                                var e = f[this.key.length];
                                if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
                                this._Ke = [], this._Kd = [];
                                for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
                                var r, n = 4 * (e + 1),
                                    i = this.key.length / 4,
                                    o = N(this.key);
                                for (t = 0; t < i; t++) r = t >> 2, this._Ke[r][t % 4] = o[t], this._Kd[e - r][t % 4] = o[t];
                                for (var s, a = 0, u = i; u < n;) {
                                    if (s = o[i - 1], o[0] ^= d[s >> 16 & 255] << 24 ^ d[s >> 8 & 255] << 16 ^ d[255 & s] << 8 ^ d[s >> 24 & 255] ^ c[a] << 24, a += 1, 8 != i)
                                        for (t = 1; t < i; t++) o[t] ^= o[t - 1];
                                    else {
                                        for (t = 1; t < i / 2; t++) o[t] ^= o[t - 1];
                                        for (s = o[i / 2 - 1], o[i / 2] ^= d[255 & s] ^ d[s >> 8 & 255] << 8 ^ d[s >> 16 & 255] << 16 ^ d[s >> 24 & 255] << 24, t = i / 2 + 1; t < i; t++) o[t] ^= o[t - 1]
                                    }
                                    for (t = 0; t < i && u < n;) l = u >> 2, h = u % 4, this._Ke[l][h] = o[t], this._Kd[e - l][h] = o[t++], u++
                                }
                                for (var l = 1; l < e; l++)
                                    for (var h = 0; h < 4; h++) s = this._Kd[l][h], this._Kd[l][h] = A[s >> 24 & 255] ^ E[s >> 16 & 255] ^ S[s >> 8 & 255] ^ k[255 & s]
                            }, x.prototype.encrypt = function(e) {
                                if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
                                for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = N(e), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i];
                                for (var o = 1; o < t; o++) {
                                    for (i = 0; i < 4; i++) r[i] = v[n[i] >> 24 & 255] ^ y[n[(i + 1) % 4] >> 16 & 255] ^ m[n[(i + 2) % 4] >> 8 & 255] ^ g[255 & n[(i + 3) % 4]] ^ this._Ke[o][i];
                                    n = r.slice()
                                }
                                var a, u = s(16);
                                for (i = 0; i < 4; i++) a = this._Ke[t][i], u[4 * i] = 255 & (d[n[i] >> 24 & 255] ^ a >> 24), u[4 * i + 1] = 255 & (d[n[(i + 1) % 4] >> 16 & 255] ^ a >> 16), u[4 * i + 2] = 255 & (d[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), u[4 * i + 3] = 255 & (d[255 & n[(i + 3) % 4]] ^ a);
                                return u
                            }, x.prototype.decrypt = function(e) {
                                if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
                                for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = N(e), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i];
                                for (var o = 1; o < t; o++) {
                                    for (i = 0; i < 4; i++) r[i] = b[n[i] >> 24 & 255] ^ w[n[(i + 3) % 4] >> 16 & 255] ^ _[n[(i + 2) % 4] >> 8 & 255] ^ M[255 & n[(i + 1) % 4]] ^ this._Kd[o][i];
                                    n = r.slice()
                                }
                                var a, u = s(16);
                                for (i = 0; i < 4; i++) a = this._Kd[t][i], u[4 * i] = 255 & (p[n[i] >> 24 & 255] ^ a >> 24), u[4 * i + 1] = 255 & (p[n[(i + 3) % 4] >> 16 & 255] ^ a >> 16), u[4 * i + 2] = 255 & (p[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), u[4 * i + 3] = 255 & (p[255 & n[(i + 1) % 4]] ^ a);
                                return u
                            };
                            var P = function e(t) {
                                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                                this.description = "Electronic Code Block", this.name = "ecb", this._aes = new x(t)
                            };
                            P.prototype.encrypt = function(e) {
                                if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                                for (var t = s(e.length), r = s(16), n = 0; n < e.length; n += 16) a(e, r, 0, n, n + 16), a(r = this._aes.encrypt(r), t, n);
                                return t
                            }, P.prototype.decrypt = function(e) {
                                if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                                for (var t = s(e.length), r = s(16), n = 0; n < e.length; n += 16) a(e, r, 0, n, n + 16), a(r = this._aes.decrypt(r), t, n);
                                return t
                            };
                            var I = function e(t, r) {
                                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                                if (this.description = "Cipher Block Chaining", this.name = "cbc", r) {
                                    if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                                } else r = s(16);
                                this._lastCipherblock = o(r, !0), this._aes = new x(t)
                            };
                            I.prototype.encrypt = function(e) {
                                if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                                for (var t = s(e.length), r = s(16), n = 0; n < e.length; n += 16) {
                                    a(e, r, 0, n, n + 16);
                                    for (var i = 0; i < 16; i++) r[i] ^= this._lastCipherblock[i];
                                    this._lastCipherblock = this._aes.encrypt(r), a(this._lastCipherblock, t, n)
                                }
                                return t
                            }, I.prototype.decrypt = function(e) {
                                if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                                for (var t = s(e.length), r = s(16), n = 0; n < e.length; n += 16) {
                                    a(e, r, 0, n, n + 16), r = this._aes.decrypt(r);
                                    for (var i = 0; i < 16; i++) t[n + i] = r[i] ^ this._lastCipherblock[i];
                                    a(e, this._lastCipherblock, 0, n, n + 16)
                                }
                                return t
                            };
                            var T = function e(t, r, n) {
                                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                                if (this.description = "Cipher Feedback", this.name = "cfb", r) {
                                    if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 size)")
                                } else r = s(16);
                                n = n || 1, this.segmentSize = n, this._shiftRegister = o(r, !0), this._aes = new x(t)
                            };
                            T.prototype.encrypt = function(e) {
                                if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
                                for (var t, r = o(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                                    t = this._aes.encrypt(this._shiftRegister);
                                    for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
                                    a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                                }
                                return r
                            }, T.prototype.decrypt = function(e) {
                                if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
                                for (var t, r = o(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                                    t = this._aes.encrypt(this._shiftRegister);
                                    for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= t[i];
                                    a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                                }
                                return r
                            };
                            var R = function e(t, r) {
                                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                                if (this.description = "Output Feedback", this.name = "ofb", r) {
                                    if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                                } else r = s(16);
                                this._lastPrecipher = o(r, !0), this._lastPrecipherIndex = 16, this._aes = new x(t)
                            };
                            R.prototype.encrypt = function(e) {
                                for (var t = o(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
                                return t
                            }, R.prototype.decrypt = R.prototype.encrypt;
                            var O = function e(t) {
                                if (!(this instanceof e)) throw Error("Counter must be instanitated with `new`");
                                0 === t || t || (t = 1), "number" == typeof t ? (this._counter = s(16), this.setValue(t)) : this.setBytes(t)
                            };
                            O.prototype.setValue = function(e) {
                                if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
                                for (var t = 15; 0 <= t; --t) this._counter[t] = e % 256, e >>= 8
                            }, O.prototype.setBytes = function(e) {
                                if (16 != (e = o(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
                                this._counter = e
                            }, O.prototype.increment = function() {
                                for (var e = 15; 0 <= e; e--) {
                                    if (255 !== this._counter[e]) {
                                        this._counter[e]++;
                                        break
                                    }
                                    this._counter[e] = 0
                                }
                            };
                            var C = function e(t, r) {
                                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                                this.description = "Counter", this.name = "ctr", r instanceof O || (r = new O(r)), this._counter = r, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new x(t)
                            };
                            C.prototype.encrypt = function(e) {
                                for (var t = o(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
                                return t
                            }, C.prototype.decrypt = C.prototype.encrypt;
                            var L = {
                                AES: x,
                                Counter: O,
                                ModeOfOperation: {
                                    ecb: P,
                                    cbc: I,
                                    cfb: T,
                                    ofb: R,
                                    ctr: C
                                },
                                utils: {
                                    hex: h,
                                    utf8: l
                                },
                                padding: {
                                    pkcs7: {
                                        pad: function(e) {
                                            var t = 16 - (e = o(e, !0)).length % 16,
                                                r = s(e.length + t);
                                            a(e, r);
                                            for (var n = e.length; n < r.length; n++) r[n] = t;
                                            return r
                                        },
                                        strip: function(e) {
                                            if ((e = o(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
                                            var t = e[e.length - 1];
                                            if (16 < t) throw new Error("PKCS#7 padding byte out of range");
                                            for (var r = e.length - t, n = 0; n < t; n++)
                                                if (e[r + n] !== t) throw new Error("PKCS#7 invalid padding byte");
                                            var i = s(r);
                                            return a(e, i, 0, 0, r), i
                                        }
                                    }
                                },
                                _arrayTest: {
                                    coerceArray: o,
                                    createArray: s,
                                    copyArray: a
                                }
                            };
                            void 0 !== r ? t.exports = L : (e.aesjs && (L._aesjs = e.aesjs), e.aesjs = L)
                        }(this)
                    }, {}],
                    9: [function(e, t, r) {
                        ! function(t, r) {
                            "use strict";

                            function n(e, t) {
                                if (!e) throw new Error(t || "Assertion failed")
                            }

                            function i(e, t) {
                                function r() {}
                                e.super_ = t, r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                            }

                            function o(e, t, r) {
                                if (o.isBN(e)) return e;
                                this.negative = 0, this.words = null, this.length = 0, (this.red = null) !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                            }
                            var s;
                            "object" == typeof t ? t.exports = o : r.BN = o, (o.BN = o).wordSize = 26;
                            try {
                                s = e("buffer").Buffer
                            } catch (t) {}

                            function a(e, t, r) {
                                for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
                                    var s = e.charCodeAt(o) - 48;
                                    n <<= 4, n |= 49 <= s && s <= 54 ? s - 49 + 10 : 17 <= s && s <= 22 ? s - 17 + 10 : 15 & s
                                }
                                return n
                            }

                            function u(e, t, r, n) {
                                for (var i = 0, o = Math.min(e.length, r), s = t; s < o; s++) {
                                    var a = e.charCodeAt(s) - 48;
                                    i *= n, i += 49 <= a ? a - 49 + 10 : 17 <= a ? a - 17 + 10 : a
                                }
                                return i
                            }
                            o.isBN = function(e) {
                                return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                            }, o.max = function(e, t) {
                                return 0 < e.cmp(t) ? e : t
                            }, o.min = function(e, t) {
                                return e.cmp(t) < 0 ? e : t
                            }, o.prototype._init = function(e, t, r) {
                                if ("number" == typeof e) return this._initNumber(e, t, r);
                                if ("object" == typeof e) return this._initArray(e, t, r);
                                "hex" === t && (t = 16), n(t === (0 | t) && 2 <= t && t <= 36);
                                var i = 0;
                                "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r)
                            }, o.prototype._initNumber = function(e, t, r) {
                                e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                            }, o.prototype._initArray = function(e, t, r) {
                                if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                                this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                                for (var i = 0; i < this.length; i++) this.words[i] = 0;
                                var o, s, a = 0;
                                if ("be" === r)
                                    for (i = e.length - 1, o = 0; 0 <= i; i -= 3) s = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, 26 <= (a += 24) && (a -= 26, o++);
                                else if ("le" === r)
                                    for (o = i = 0; i < e.length; i += 3) s = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, 26 <= (a += 24) && (a -= 26, o++);
                                return this.strip()
                            }, o.prototype._parseHex = function(e, t) {
                                this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                                for (var r = 0; r < this.length; r++) this.words[r] = 0;
                                var n, i, o = 0;
                                for (r = e.length - 6, n = 0; t <= r; r -= 6) i = a(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, 26 <= (o += 24) && (o -= 26, n++);
                                r + 6 !== t && (i = a(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
                            }, o.prototype._parseBase = function(e, t, r) {
                                this.words = [0];
                                for (var n = 0, i = this.length = 1; i <= 67108863; i *= t) n++;
                                n--, i = i / t | 0;
                                for (var o = e.length - r, s = o % n, a = Math.min(o, o - s) + r, l = 0, h = r; h < a; h += n) l = u(e, h, h + n, t), this.imuln(i), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
                                if (0 != s) {
                                    var f = 1;
                                    for (l = u(e, h, e.length, t), h = 0; h < s; h++) f *= t;
                                    this.imuln(f), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l)
                                }
                            }, o.prototype.copy = function(e) {
                                e.words = new Array(this.length);
                                for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                                e.length = this.length, e.negative = this.negative, e.red = this.red
                            }, o.prototype.clone = function() {
                                var e = new o(null);
                                return this.copy(e), e
                            }, o.prototype._expand = function(e) {
                                for (; this.length < e;) this.words[this.length++] = 0;
                                return this
                            }, o.prototype.strip = function() {
                                for (; 1 < this.length && 0 === this.words[this.length - 1];) this.length--;
                                return this._normSign()
                            }, o.prototype._normSign = function() {
                                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                            }, o.prototype.inspect = function() {
                                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                            };
                            var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                                h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                                f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                            function c(e, t, r) {
                                r.negative = t.negative ^ e.negative;
                                var n = e.length + t.length | 0;
                                n = (r.length = n) - 1 | 0;
                                var i = 0 | e.words[0],
                                    o = 0 | t.words[0],
                                    s = i * o,
                                    a = 67108863 & s,
                                    u = s / 67108864 | 0;
                                r.words[0] = a;
                                for (var l = 1; l < n; l++) {
                                    for (var h = u >>> 26, f = 67108863 & u, c = Math.min(l, t.length - 1), d = Math.max(0, l - e.length + 1); d <= c; d++) {
                                        var p = l - d | 0;
                                        h += (s = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + f) / 67108864 | 0, f = 67108863 & s
                                    }
                                    r.words[l] = 0 | f, u = 0 | h
                                }
                                return 0 !== u ? r.words[l] = 0 | u : r.length--, r.strip()
                            }
                            o.prototype.toString = function(e, t) {
                                var r;
                                if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                                    r = "";
                                    for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                        var a = this.words[s],
                                            u = (16777215 & (a << i | o)).toString(16);
                                        r = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? l[6 - u.length] + u + r : u + r, 26 <= (i += 2) && (i -= 26, s--)
                                    }
                                    for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
                                    return 0 !== this.negative && (r = "-" + r), r
                                }
                                if (e === (0 | e) && 2 <= e && e <= 36) {
                                    var c = h[e],
                                        d = f[e];
                                    r = "";
                                    var p = this.clone();
                                    for (p.negative = 0; !p.isZero();) {
                                        var v = p.modn(d).toString(e);
                                        r = (p = p.idivn(d)).isZero() ? v + r : l[c - v.length] + v + r
                                    }
                                    for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                                    return 0 !== this.negative && (r = "-" + r), r
                                }
                                n(!1, "Base should be between 2 and 36")
                            }, o.prototype.toNumber = function() {
                                var e = this.words[0];
                                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : 2 < this.length && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                            }, o.prototype.toJSON = function() {
                                return this.toString(16)
                            }, o.prototype.toBuffer = function(e, t) {
                                return n(void 0 !== s), this.toArrayLike(s, e, t)
                            }, o.prototype.toArray = function(e, t) {
                                return this.toArrayLike(Array, e, t)
                            }, o.prototype.toArrayLike = function(e, t, r) {
                                var i = this.byteLength(),
                                    o = r || Math.max(1, i);
                                n(i <= o, "byte array longer than desired length"), n(0 < o, "Requested array length <= 0"), this.strip();
                                var s, a, u = "le" === t,
                                    l = new e(o),
                                    h = this.clone();
                                if (u) {
                                    for (a = 0; !h.isZero(); a++) s = h.andln(255), h.iushrn(8), l[a] = s;
                                    for (; a < o; a++) l[a] = 0
                                } else {
                                    for (a = 0; a < o - i; a++) l[a] = 0;
                                    for (a = 0; !h.isZero(); a++) s = h.andln(255), h.iushrn(8), l[o - a - 1] = s
                                }
                                return l
                            }, o.prototype._countBits = Math.clz32 ? function(e) {
                                return 32 - Math.clz32(e)
                            } : function(e) {
                                var t = e,
                                    r = 0;
                                return 4096 <= t && (r += 13, t >>>= 13), 64 <= t && (r += 7, t >>>= 7), 8 <= t && (r += 4, t >>>= 4), 2 <= t && (r += 2, t >>>= 2), r + t
                            }, o.prototype._zeroBits = function(e) {
                                if (0 === e) return 26;
                                var t = e,
                                    r = 0;
                                return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
                            }, o.prototype.bitLength = function() {
                                var e = this.words[this.length - 1],
                                    t = this._countBits(e);
                                return 26 * (this.length - 1) + t
                            }, o.prototype.zeroBits = function() {
                                if (this.isZero()) return 0;
                                for (var e = 0, t = 0; t < this.length; t++) {
                                    var r = this._zeroBits(this.words[t]);
                                    if (e += r, 26 !== r) break
                                }
                                return e
                            }, o.prototype.byteLength = function() {
                                return Math.ceil(this.bitLength() / 8)
                            }, o.prototype.toTwos = function(e) {
                                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                            }, o.prototype.fromTwos = function(e) {
                                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                            }, o.prototype.isNeg = function() {
                                return 0 !== this.negative
                            }, o.prototype.neg = function() {
                                return this.clone().ineg()
                            }, o.prototype.ineg = function() {
                                return this.isZero() || (this.negative ^= 1), this
                            }, o.prototype.iuor = function(e) {
                                for (; this.length < e.length;) this.words[this.length++] = 0;
                                for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                                return this.strip()
                            }, o.prototype.ior = function(e) {
                                return n(0 == (this.negative | e.negative)), this.iuor(e)
                            }, o.prototype.or = function(e) {
                                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                            }, o.prototype.uor = function(e) {
                                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                            }, o.prototype.iuand = function(e) {
                                var t;
                                t = this.length > e.length ? e : this;
                                for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                                return this.length = t.length, this.strip()
                            }, o.prototype.iand = function(e) {
                                return n(0 == (this.negative | e.negative)), this.iuand(e)
                            }, o.prototype.and = function(e) {
                                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                            }, o.prototype.uand = function(e) {
                                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                            }, o.prototype.iuxor = function(e) {
                                var t, r;
                                r = this.length > e.length ? (t = this, e) : (t = e, this);
                                for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                                if (this !== t)
                                    for (; n < t.length; n++) this.words[n] = t.words[n];
                                return this.length = t.length, this.strip()
                            }, o.prototype.ixor = function(e) {
                                return n(0 == (this.negative | e.negative)), this.iuxor(e)
                            }, o.prototype.xor = function(e) {
                                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                            }, o.prototype.uxor = function(e) {
                                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                            }, o.prototype.inotn = function(e) {
                                n("number" == typeof e && 0 <= e);
                                var t = 0 | Math.ceil(e / 26),
                                    r = e % 26;
                                this._expand(t), 0 < r && t--;
                                for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                                return 0 < r && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                            }, o.prototype.notn = function(e) {
                                return this.clone().inotn(e)
                            }, o.prototype.setn = function(e, t) {
                                n("number" == typeof e && 0 <= e);
                                var r = e / 26 | 0,
                                    i = e % 26;
                                return this._expand(1 + r), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                            }, o.prototype.iadd = function(e) {
                                var t, r, n;
                                if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                                if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                                n = this.length > e.length ? (r = this, e) : (r = e, this);
                                for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                                for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                                if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                                else if (r !== this)
                                    for (; o < r.length; o++) this.words[o] = r.words[o];
                                return this
                            }, o.prototype.add = function(e) {
                                var t;
                                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                            }, o.prototype.isub = function(e) {
                                if (0 !== e.negative) {
                                    e.negative = 0;
                                    var t = this.iadd(e);
                                    return e.negative = 1, t._normSign()
                                }
                                if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                                var r, n, i = this.cmp(e);
                                if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                                n = 0 < i ? (r = this, e) : (r = e, this);
                                for (var o = 0, s = 0; s < n.length; s++) o = (t = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
                                for (; 0 !== o && s < r.length; s++) o = (t = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & t;
                                if (0 === o && s < r.length && r !== this)
                                    for (; s < r.length; s++) this.words[s] = r.words[s];
                                return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip()
                            }, o.prototype.sub = function(e) {
                                return this.clone().isub(e)
                            };
                            var d = function(e, t, r) {
                                var n, i, o, s = e.words,
                                    a = t.words,
                                    u = r.words,
                                    l = 0,
                                    h = 0 | s[0],
                                    f = 8191 & h,
                                    c = h >>> 13,
                                    d = 0 | s[1],
                                    p = 8191 & d,
                                    v = d >>> 13,
                                    y = 0 | s[2],
                                    m = 8191 & y,
                                    g = y >>> 13,
                                    b = 0 | s[3],
                                    w = 8191 & b,
                                    _ = b >>> 13,
                                    M = 0 | s[4],
                                    A = 8191 & M,
                                    E = M >>> 13,
                                    S = 0 | s[5],
                                    k = 8191 & S,
                                    N = S >>> 13,
                                    x = 0 | s[6],
                                    P = 8191 & x,
                                    I = x >>> 13,
                                    T = 0 | s[7],
                                    R = 8191 & T,
                                    O = T >>> 13,
                                    C = 0 | s[8],
                                    L = 8191 & C,
                                    D = C >>> 13,
                                    B = 0 | s[9],
                                    U = 8191 & B,
                                    F = B >>> 13,
                                    j = 0 | a[0],
                                    G = 8191 & j,
                                    H = j >>> 13,
                                    z = 0 | a[1],
                                    V = 8191 & z,
                                    K = z >>> 13,
                                    q = 0 | a[2],
                                    W = 8191 & q,
                                    Z = q >>> 13,
                                    J = 0 | a[3],
                                    X = 8191 & J,
                                    $ = J >>> 13,
                                    Q = 0 | a[4],
                                    Y = 8191 & Q,
                                    ee = Q >>> 13,
                                    te = 0 | a[5],
                                    re = 8191 & te,
                                    ne = te >>> 13,
                                    ie = 0 | a[6],
                                    oe = 8191 & ie,
                                    se = ie >>> 13,
                                    ae = 0 | a[7],
                                    ue = 8191 & ae,
                                    le = ae >>> 13,
                                    he = 0 | a[8],
                                    fe = 8191 & he,
                                    ce = he >>> 13,
                                    de = 0 | a[9],
                                    pe = 8191 & de,
                                    ve = de >>> 13;
                                r.negative = e.negative ^ t.negative, r.length = 19;
                                var ye = (l + (n = Math.imul(f, G)) | 0) + ((8191 & (i = (i = Math.imul(f, H)) + Math.imul(c, G) | 0)) << 13) | 0;
                                l = ((o = Math.imul(c, H)) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(p, G), i = (i = Math.imul(p, H)) + Math.imul(v, G) | 0, o = Math.imul(v, H);
                                var me = (l + (n = n + Math.imul(f, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, K) | 0) + Math.imul(c, V) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, K) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(m, G), i = (i = Math.imul(m, H)) + Math.imul(g, G) | 0, o = Math.imul(g, H), n = n + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(v, V) | 0, o = o + Math.imul(v, K) | 0;
                                var ge = (l + (n = n + Math.imul(f, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, Z) | 0) + Math.imul(c, W) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, Z) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(w, G), i = (i = Math.imul(w, H)) + Math.imul(_, G) | 0, o = Math.imul(_, H), n = n + Math.imul(m, V) | 0, i = (i = i + Math.imul(m, K) | 0) + Math.imul(g, V) | 0, o = o + Math.imul(g, K) | 0, n = n + Math.imul(p, W) | 0, i = (i = i + Math.imul(p, Z) | 0) + Math.imul(v, W) | 0, o = o + Math.imul(v, Z) | 0;
                                var be = (l + (n = n + Math.imul(f, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, $) | 0) + Math.imul(c, X) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, $) | 0) + (i >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(A, G), i = (i = Math.imul(A, H)) + Math.imul(E, G) | 0, o = Math.imul(E, H), n = n + Math.imul(w, V) | 0, i = (i = i + Math.imul(w, K) | 0) + Math.imul(_, V) | 0, o = o + Math.imul(_, K) | 0, n = n + Math.imul(m, W) | 0, i = (i = i + Math.imul(m, Z) | 0) + Math.imul(g, W) | 0, o = o + Math.imul(g, Z) | 0, n = n + Math.imul(p, X) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(v, X) | 0, o = o + Math.imul(v, $) | 0;
                                var we = (l + (n = n + Math.imul(f, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ee) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, ee) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(k, G), i = (i = Math.imul(k, H)) + Math.imul(N, G) | 0, o = Math.imul(N, H), n = n + Math.imul(A, V) | 0, i = (i = i + Math.imul(A, K) | 0) + Math.imul(E, V) | 0, o = o + Math.imul(E, K) | 0, n = n + Math.imul(w, W) | 0, i = (i = i + Math.imul(w, Z) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, Z) | 0, n = n + Math.imul(m, X) | 0, i = (i = i + Math.imul(m, $) | 0) + Math.imul(g, X) | 0, o = o + Math.imul(g, $) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(v, Y) | 0, o = o + Math.imul(v, ee) | 0;
                                var _e = (l + (n = n + Math.imul(f, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ne) | 0) + Math.imul(c, re) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, ne) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(P, G), i = (i = Math.imul(P, H)) + Math.imul(I, G) | 0, o = Math.imul(I, H), n = n + Math.imul(k, V) | 0, i = (i = i + Math.imul(k, K) | 0) + Math.imul(N, V) | 0, o = o + Math.imul(N, K) | 0, n = n + Math.imul(A, W) | 0, i = (i = i + Math.imul(A, Z) | 0) + Math.imul(E, W) | 0, o = o + Math.imul(E, Z) | 0, n = n + Math.imul(w, X) | 0, i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, X) | 0, o = o + Math.imul(_, $) | 0, n = n + Math.imul(m, Y) | 0, i = (i = i + Math.imul(m, ee) | 0) + Math.imul(g, Y) | 0, o = o + Math.imul(g, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(v, re) | 0, o = o + Math.imul(v, ne) | 0;
                                var Me = (l + (n = n + Math.imul(f, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, se) | 0) + Math.imul(c, oe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, se) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(R, G), i = (i = Math.imul(R, H)) + Math.imul(O, G) | 0, o = Math.imul(O, H), n = n + Math.imul(P, V) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(I, V) | 0, o = o + Math.imul(I, K) | 0, n = n + Math.imul(k, W) | 0, i = (i = i + Math.imul(k, Z) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, Z) | 0, n = n + Math.imul(A, X) | 0, i = (i = i + Math.imul(A, $) | 0) + Math.imul(E, X) | 0, o = o + Math.imul(E, $) | 0, n = n + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, ee) | 0, n = n + Math.imul(m, re) | 0, i = (i = i + Math.imul(m, ne) | 0) + Math.imul(g, re) | 0, o = o + Math.imul(g, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, se) | 0) + Math.imul(v, oe) | 0, o = o + Math.imul(v, se) | 0;
                                var Ae = (l + (n = n + Math.imul(f, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, le) | 0) + Math.imul(c, ue) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, le) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(L, G), i = (i = Math.imul(L, H)) + Math.imul(D, G) | 0, o = Math.imul(D, H), n = n + Math.imul(R, V) | 0, i = (i = i + Math.imul(R, K) | 0) + Math.imul(O, V) | 0, o = o + Math.imul(O, K) | 0, n = n + Math.imul(P, W) | 0, i = (i = i + Math.imul(P, Z) | 0) + Math.imul(I, W) | 0, o = o + Math.imul(I, Z) | 0, n = n + Math.imul(k, X) | 0, i = (i = i + Math.imul(k, $) | 0) + Math.imul(N, X) | 0, o = o + Math.imul(N, $) | 0, n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, ee) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, ee) | 0, n = n + Math.imul(w, re) | 0, i = (i = i + Math.imul(w, ne) | 0) + Math.imul(_, re) | 0, o = o + Math.imul(_, ne) | 0, n = n + Math.imul(m, oe) | 0, i = (i = i + Math.imul(m, se) | 0) + Math.imul(g, oe) | 0, o = o + Math.imul(g, se) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, le) | 0) + Math.imul(v, ue) | 0, o = o + Math.imul(v, le) | 0;
                                var Ee = (l + (n = n + Math.imul(f, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ce) | 0) + Math.imul(c, fe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, ce) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(U, G), i = (i = Math.imul(U, H)) + Math.imul(F, G) | 0, o = Math.imul(F, H), n = n + Math.imul(L, V) | 0, i = (i = i + Math.imul(L, K) | 0) + Math.imul(D, V) | 0, o = o + Math.imul(D, K) | 0, n = n + Math.imul(R, W) | 0, i = (i = i + Math.imul(R, Z) | 0) + Math.imul(O, W) | 0, o = o + Math.imul(O, Z) | 0, n = n + Math.imul(P, X) | 0, i = (i = i + Math.imul(P, $) | 0) + Math.imul(I, X) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(k, Y) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(N, Y) | 0, o = o + Math.imul(N, ee) | 0, n = n + Math.imul(A, re) | 0, i = (i = i + Math.imul(A, ne) | 0) + Math.imul(E, re) | 0, o = o + Math.imul(E, ne) | 0, n = n + Math.imul(w, oe) | 0, i = (i = i + Math.imul(w, se) | 0) + Math.imul(_, oe) | 0, o = o + Math.imul(_, se) | 0, n = n + Math.imul(m, ue) | 0, i = (i = i + Math.imul(m, le) | 0) + Math.imul(g, ue) | 0, o = o + Math.imul(g, le) | 0, n = n + Math.imul(p, fe) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(v, fe) | 0, o = o + Math.imul(v, ce) | 0;
                                var Se = (l + (n = n + Math.imul(f, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ve) | 0) + Math.imul(c, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(c, ve) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(U, V), i = (i = Math.imul(U, K)) + Math.imul(F, V) | 0, o = Math.imul(F, K), n = n + Math.imul(L, W) | 0, i = (i = i + Math.imul(L, Z) | 0) + Math.imul(D, W) | 0, o = o + Math.imul(D, Z) | 0, n = n + Math.imul(R, X) | 0, i = (i = i + Math.imul(R, $) | 0) + Math.imul(O, X) | 0, o = o + Math.imul(O, $) | 0, n = n + Math.imul(P, Y) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(N, re) | 0, o = o + Math.imul(N, ne) | 0, n = n + Math.imul(A, oe) | 0, i = (i = i + Math.imul(A, se) | 0) + Math.imul(E, oe) | 0, o = o + Math.imul(E, se) | 0, n = n + Math.imul(w, ue) | 0, i = (i = i + Math.imul(w, le) | 0) + Math.imul(_, ue) | 0, o = o + Math.imul(_, le) | 0, n = n + Math.imul(m, fe) | 0, i = (i = i + Math.imul(m, ce) | 0) + Math.imul(g, fe) | 0, o = o + Math.imul(g, ce) | 0;
                                var ke = (l + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, ve) | 0) + Math.imul(v, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(v, ve) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(U, W), i = (i = Math.imul(U, Z)) + Math.imul(F, W) | 0, o = Math.imul(F, Z), n = n + Math.imul(L, X) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(D, X) | 0, o = o + Math.imul(D, $) | 0, n = n + Math.imul(R, Y) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(O, Y) | 0, o = o + Math.imul(O, ee) | 0, n = n + Math.imul(P, re) | 0, i = (i = i + Math.imul(P, ne) | 0) + Math.imul(I, re) | 0, o = o + Math.imul(I, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, se) | 0) + Math.imul(N, oe) | 0, o = o + Math.imul(N, se) | 0, n = n + Math.imul(A, ue) | 0, i = (i = i + Math.imul(A, le) | 0) + Math.imul(E, ue) | 0, o = o + Math.imul(E, le) | 0, n = n + Math.imul(w, fe) | 0, i = (i = i + Math.imul(w, ce) | 0) + Math.imul(_, fe) | 0, o = o + Math.imul(_, ce) | 0;
                                var Ne = (l + (n = n + Math.imul(m, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, ve) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(g, ve) | 0) + (i >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, n = Math.imul(U, X), i = (i = Math.imul(U, $)) + Math.imul(F, X) | 0, o = Math.imul(F, $), n = n + Math.imul(L, Y) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(D, Y) | 0, o = o + Math.imul(D, ee) | 0, n = n + Math.imul(R, re) | 0, i = (i = i + Math.imul(R, ne) | 0) + Math.imul(O, re) | 0, o = o + Math.imul(O, ne) | 0, n = n + Math.imul(P, oe) | 0, i = (i = i + Math.imul(P, se) | 0) + Math.imul(I, oe) | 0, o = o + Math.imul(I, se) | 0, n = n + Math.imul(k, ue) | 0, i = (i = i + Math.imul(k, le) | 0) + Math.imul(N, ue) | 0, o = o + Math.imul(N, le) | 0, n = n + Math.imul(A, fe) | 0, i = (i = i + Math.imul(A, ce) | 0) + Math.imul(E, fe) | 0, o = o + Math.imul(E, ce) | 0;
                                var xe = (l + (n = n + Math.imul(w, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, ve) | 0) + Math.imul(_, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(_, ve) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(U, Y), i = (i = Math.imul(U, ee)) + Math.imul(F, Y) | 0, o = Math.imul(F, ee), n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(D, re) | 0, o = o + Math.imul(D, ne) | 0, n = n + Math.imul(R, oe) | 0, i = (i = i + Math.imul(R, se) | 0) + Math.imul(O, oe) | 0, o = o + Math.imul(O, se) | 0, n = n + Math.imul(P, ue) | 0, i = (i = i + Math.imul(P, le) | 0) + Math.imul(I, ue) | 0, o = o + Math.imul(I, le) | 0, n = n + Math.imul(k, fe) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(N, fe) | 0, o = o + Math.imul(N, ce) | 0;
                                var Pe = (l + (n = n + Math.imul(A, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, ve) | 0) + Math.imul(E, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(E, ve) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(U, re), i = (i = Math.imul(U, ne)) + Math.imul(F, re) | 0, o = Math.imul(F, ne), n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, se) | 0) + Math.imul(D, oe) | 0, o = o + Math.imul(D, se) | 0, n = n + Math.imul(R, ue) | 0, i = (i = i + Math.imul(R, le) | 0) + Math.imul(O, ue) | 0, o = o + Math.imul(O, le) | 0, n = n + Math.imul(P, fe) | 0, i = (i = i + Math.imul(P, ce) | 0) + Math.imul(I, fe) | 0, o = o + Math.imul(I, ce) | 0;
                                var Ie = (l + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, ve) | 0) + Math.imul(N, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(N, ve) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(U, oe), i = (i = Math.imul(U, se)) + Math.imul(F, oe) | 0, o = Math.imul(F, se), n = n + Math.imul(L, ue) | 0, i = (i = i + Math.imul(L, le) | 0) + Math.imul(D, ue) | 0, o = o + Math.imul(D, le) | 0, n = n + Math.imul(R, fe) | 0, i = (i = i + Math.imul(R, ce) | 0) + Math.imul(O, fe) | 0, o = o + Math.imul(O, ce) | 0;
                                var Te = (l + (n = n + Math.imul(P, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, ve) | 0) + Math.imul(I, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(I, ve) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(U, ue), i = (i = Math.imul(U, le)) + Math.imul(F, ue) | 0, o = Math.imul(F, le), n = n + Math.imul(L, fe) | 0, i = (i = i + Math.imul(L, ce) | 0) + Math.imul(D, fe) | 0, o = o + Math.imul(D, ce) | 0;
                                var Re = (l + (n = n + Math.imul(R, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, ve) | 0) + Math.imul(O, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(O, ve) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(U, fe), i = (i = Math.imul(U, ce)) + Math.imul(F, fe) | 0, o = Math.imul(F, ce);
                                var Oe = (l + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, ve) | 0) + Math.imul(D, pe) | 0)) << 13) | 0;
                                l = ((o = o + Math.imul(D, ve) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863;
                                var Ce = (l + (n = Math.imul(U, pe)) | 0) + ((8191 & (i = (i = Math.imul(U, ve)) + Math.imul(F, pe) | 0)) << 13) | 0;
                                return l = ((o = Math.imul(F, ve)) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, u[0] = ye, u[1] = me, u[2] = ge, u[3] = be, u[4] = we, u[5] = _e, u[6] = Me, u[7] = Ae, u[8] = Ee, u[9] = Se, u[10] = ke, u[11] = Ne, u[12] = xe, u[13] = Pe, u[14] = Ie, u[15] = Te, u[16] = Re, u[17] = Oe, u[18] = Ce, 0 !== l && (u[19] = l, r.length++), r
                            };

                            function p(e, t, r) {
                                return (new v).mulp(e, t, r)
                            }

                            function v(e, t) {
                                this.x = e, this.y = t
                            }
                            Math.imul || (d = c), o.prototype.mulTo = function(e, t) {
                                var r = this.length + e.length;
                                return 10 === this.length && 10 === e.length ? d(this, e, t) : r < 63 ? c(this, e, t) : r < 1024 ? function(e, t, r) {
                                    r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                                        var s = i;
                                        i = 0;
                                        for (var a = 67108863 & n, u = Math.min(o, t.length - 1), l = Math.max(0, o - e.length + 1); l <= u; l++) {
                                            var h = o - l,
                                                f = (0 | e.words[h]) * (0 | t.words[l]),
                                                c = 67108863 & f;
                                            a = 67108863 & (c = c + a | 0), i += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863
                                        }
                                        r.words[o] = a, n = s, s = i
                                    }
                                    return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                                }(this, e, t) : p(this, e, t)
                            }, v.prototype.makeRBT = function(e) {
                                for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                                return t
                            }, v.prototype.revBin = function(e, t, r) {
                                if (0 === e || e === r - 1) return e;
                                for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                                return n
                            }, v.prototype.permute = function(e, t, r, n, i, o) {
                                for (var s = 0; s < o; s++) n[s] = t[e[s]], i[s] = r[e[s]]
                            }, v.prototype.transform = function(e, t, r, n, i, o) {
                                this.permute(o, e, t, r, n, i);
                                for (var s = 1; s < i; s <<= 1)
                                    for (var a = s << 1, u = Math.cos(2 * Math.PI / a), l = Math.sin(2 * Math.PI / a), h = 0; h < i; h += a)
                                        for (var f = u, c = l, d = 0; d < s; d++) {
                                            var p = r[h + d],
                                                v = n[h + d],
                                                y = r[h + d + s],
                                                m = n[h + d + s],
                                                g = f * y - c * m;
                                            m = f * m + c * y, y = g, r[h + d] = p + y, n[h + d] = v + m, r[h + d + s] = p - y, n[h + d + s] = v - m, d !== a && (g = u * f - l * c, c = u * c + l * f, f = g)
                                        }
                            }, v.prototype.guessLen13b = function(e, t) {
                                var r = 1 | Math.max(t, e),
                                    n = 1 & r,
                                    i = 0;
                                for (r = r / 2 | 0; r; r >>>= 1) i++;
                                return 1 << i + 1 + n
                            }, v.prototype.conjugate = function(e, t, r) {
                                if (!(r <= 1))
                                    for (var n = 0; n < r / 2; n++) {
                                        var i = e[n];
                                        e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                                    }
                            }, v.prototype.normalize13b = function(e, t) {
                                for (var r = 0, n = 0; n < t / 2; n++) {
                                    var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                                    e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                                }
                                return e
                            }, v.prototype.convert13b = function(e, t, r, i) {
                                for (var o = 0, s = 0; s < t; s++) o += 0 | e[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
                                for (s = 2 * t; s < i; ++s) r[s] = 0;
                                n(0 === o), n(0 == (-8192 & o))
                            }, v.prototype.stub = function(e) {
                                for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                                return t
                            }, v.prototype.mulp = function(e, t, r) {
                                var n = 2 * this.guessLen13b(e.length, t.length),
                                    i = this.makeRBT(n),
                                    o = this.stub(n),
                                    s = new Array(n),
                                    a = new Array(n),
                                    u = new Array(n),
                                    l = new Array(n),
                                    h = new Array(n),
                                    f = new Array(n),
                                    c = r.words;
                                c.length = n, this.convert13b(e.words, e.length, s, n), this.convert13b(t.words, t.length, l, n), this.transform(s, o, a, u, n, i), this.transform(l, o, h, f, n, i);
                                for (var d = 0; d < n; d++) {
                                    var p = a[d] * h[d] - u[d] * f[d];
                                    u[d] = a[d] * f[d] + u[d] * h[d], a[d] = p
                                }
                                return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                            }, o.prototype.mul = function(e) {
                                var t = new o(null);
                                return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                            }, o.prototype.mulf = function(e) {
                                var t = new o(null);
                                return t.words = new Array(this.length + e.length), p(this, e, t)
                            }, o.prototype.imul = function(e) {
                                return this.clone().mulTo(e, this)
                            }, o.prototype.imuln = function(e) {
                                n("number" == typeof e), n(e < 67108864);
                                for (var t = 0, r = 0; r < this.length; r++) {
                                    var i = (0 | this.words[r]) * e,
                                        o = (67108863 & i) + (67108863 & t);
                                    t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o
                                }
                                return 0 !== t && (this.words[r] = t, this.length++), this
                            }, o.prototype.muln = function(e) {
                                return this.clone().imuln(e)
                            }, o.prototype.sqr = function() {
                                return this.mul(this)
                            }, o.prototype.isqr = function() {
                                return this.imul(this.clone())
                            }, o.prototype.pow = function(e) {
                                var t = function(e) {
                                    for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                                        var n = r / 26 | 0,
                                            i = r % 26;
                                        t[r] = (e.words[n] & 1 << i) >>> i
                                    }
                                    return t
                                }(e);
                                if (0 === t.length) return new o(1);
                                for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                                if (++n < t.length)
                                    for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                                return r
                            }, o.prototype.iushln = function(e) {
                                n("number" == typeof e && 0 <= e);
                                var t, r = e % 26,
                                    i = (e - r) / 26,
                                    o = 67108863 >>> 26 - r << 26 - r;
                                if (0 != r) {
                                    var s = 0;
                                    for (t = 0; t < this.length; t++) {
                                        var a = this.words[t] & o,
                                            u = (0 | this.words[t]) - a << r;
                                        this.words[t] = u | s, s = a >>> 26 - r
                                    }
                                    s && (this.words[t] = s, this.length++)
                                }
                                if (0 != i) {
                                    for (t = this.length - 1; 0 <= t; t--) this.words[t + i] = this.words[t];
                                    for (t = 0; t < i; t++) this.words[t] = 0;
                                    this.length += i
                                }
                                return this.strip()
                            }, o.prototype.ishln = function(e) {
                                return n(0 === this.negative), this.iushln(e)
                            }, o.prototype.iushrn = function(e, t, r) {
                                var i;
                                n("number" == typeof e && 0 <= e), i = t ? (t - t % 26) / 26 : 0;
                                var o = e % 26,
                                    s = Math.min((e - o) / 26, this.length),
                                    a = 67108863 ^ 67108863 >>> o << o,
                                    u = r;
                                if (i -= s, i = Math.max(0, i), u) {
                                    for (var l = 0; l < s; l++) u.words[l] = this.words[l];
                                    u.length = s
                                }
                                if (0 === s);
                                else if (this.length > s)
                                    for (this.length -= s, l = 0; l < this.length; l++) this.words[l] = this.words[l + s];
                                else this.words[0] = 0, this.length = 1;
                                var h = 0;
                                for (l = this.length - 1; 0 <= l && (0 !== h || i <= l); l--) {
                                    var f = 0 | this.words[l];
                                    this.words[l] = h << 26 - o | f >>> o, h = f & a
                                }
                                return u && 0 !== h && (u.words[u.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                            }, o.prototype.ishrn = function(e, t, r) {
                                return n(0 === this.negative), this.iushrn(e, t, r)
                            }, o.prototype.shln = function(e) {
                                return this.clone().ishln(e)
                            }, o.prototype.ushln = function(e) {
                                return this.clone().iushln(e)
                            }, o.prototype.shrn = function(e) {
                                return this.clone().ishrn(e)
                            }, o.prototype.ushrn = function(e) {
                                return this.clone().iushrn(e)
                            }, o.prototype.testn = function(e) {
                                n("number" == typeof e && 0 <= e);
                                var t = e % 26,
                                    r = (e - t) / 26,
                                    i = 1 << t;
                                return !(this.length <= r) && !!(this.words[r] & i)
                            }, o.prototype.imaskn = function(e) {
                                n("number" == typeof e && 0 <= e);
                                var t = e % 26,
                                    r = (e - t) / 26;
                                if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                                if (0 != t && r++, this.length = Math.min(r, this.length), 0 != t) {
                                    var i = 67108863 ^ 67108863 >>> t << t;
                                    this.words[this.length - 1] &= i
                                }
                                return this.strip()
                            }, o.prototype.maskn = function(e) {
                                return this.clone().imaskn(e)
                            }, o.prototype.iaddn = function(e) {
                                return n("number" == typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this) : this._iaddn(e)
                            }, o.prototype._iaddn = function(e) {
                                this.words[0] += e;
                                for (var t = 0; t < this.length && 67108864 <= this.words[t]; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                                return this.length = Math.max(this.length, t + 1), this
                            }, o.prototype.isubn = function(e) {
                                if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                                if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                                if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                                else
                                    for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                                return this.strip()
                            }, o.prototype.addn = function(e) {
                                return this.clone().iaddn(e)
                            }, o.prototype.subn = function(e) {
                                return this.clone().isubn(e)
                            }, o.prototype.iabs = function() {
                                return this.negative = 0, this
                            }, o.prototype.abs = function() {
                                return this.clone().iabs()
                            }, o.prototype._ishlnsubmul = function(e, t, r) {
                                var i, o, s = e.length + r;
                                this._expand(s);
                                var a = 0;
                                for (i = 0; i < e.length; i++) {
                                    o = (0 | this.words[i + r]) + a;
                                    var u = (0 | e.words[i]) * t;
                                    a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                                }
                                for (; i < this.length - r; i++) a = (o = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & o;
                                if (0 === a) return this.strip();
                                for (n(-1 === a), i = a = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                                return this.negative = 1, this.strip()
                            }, o.prototype._wordDiv = function(e, t) {
                                var r = (this.length, e.length),
                                    n = this.clone(),
                                    i = e,
                                    s = 0 | i.words[i.length - 1];
                                0 != (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
                                var a, u = n.length - i.length;
                                if ("mod" !== t) {
                                    (a = new o(null)).length = 1 + u, a.words = new Array(a.length);
                                    for (var l = 0; l < a.length; l++) a.words[l] = 0
                                }
                                var h = n.clone()._ishlnsubmul(i, 1, u);
                                0 === h.negative && (n = h, a && (a.words[u] = 1));
                                for (var f = u - 1; 0 <= f; f--) {
                                    var c = 67108864 * (0 | n.words[i.length + f]) + (0 | n.words[i.length + f - 1]);
                                    for (c = Math.min(c / s | 0, 67108863), n._ishlnsubmul(i, c, f); 0 !== n.negative;) c--, n.negative = 0, n._ishlnsubmul(i, 1, f), n.isZero() || (n.negative ^= 1);
                                    a && (a.words[f] = c)
                                }
                                return a && a.strip(), n.strip(), "div" !== t && 0 != r && n.iushrn(r), {
                                    div: a || null,
                                    mod: n
                                }
                            }, o.prototype.divmod = function(e, t, r) {
                                return n(!e.isZero()), this.isZero() ? {
                                    div: new o(0),
                                    mod: new o(0)
                                } : 0 !== this.negative && 0 === e.negative ? (a = this.neg().divmod(e, t), "mod" !== t && (i = a.div.neg()), "div" !== t && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(e)), {
                                    div: i,
                                    mod: s
                                }) : 0 === this.negative && 0 !== e.negative ? (a = this.divmod(e.neg(), t), "mod" !== t && (i = a.div.neg()), {
                                    div: i,
                                    mod: a.mod
                                }) : 0 != (this.negative & e.negative) ? (a = this.neg().divmod(e.neg(), t), "div" !== t && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(e)), {
                                    div: a.div,
                                    mod: s
                                }) : e.length > this.length || this.cmp(e) < 0 ? {
                                    div: new o(0),
                                    mod: this
                                } : 1 === e.length ? "div" === t ? {
                                    div: this.divn(e.words[0]),
                                    mod: null
                                } : "mod" === t ? {
                                    div: null,
                                    mod: new o(this.modn(e.words[0]))
                                } : {
                                    div: this.divn(e.words[0]),
                                    mod: new o(this.modn(e.words[0]))
                                } : this._wordDiv(e, t);
                                var i, s, a
                            }, o.prototype.div = function(e) {
                                return this.divmod(e, "div", !1).div
                            }, o.prototype.mod = function(e) {
                                return this.divmod(e, "mod", !1).mod
                            }, o.prototype.umod = function(e) {
                                return this.divmod(e, "mod", !0).mod
                            }, o.prototype.divRound = function(e) {
                                var t = this.divmod(e);
                                if (t.mod.isZero()) return t.div;
                                var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                                    n = e.ushrn(1),
                                    i = e.andln(1),
                                    o = r.cmp(n);
                                return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                            }, o.prototype.modn = function(e) {
                                n(e <= 67108863);
                                for (var t = (1 << 26) % e, r = 0, i = this.length - 1; 0 <= i; i--) r = (t * r + (0 | this.words[i])) % e;
                                return r
                            }, o.prototype.idivn = function(e) {
                                n(e <= 67108863);
                                for (var t = 0, r = this.length - 1; 0 <= r; r--) {
                                    var i = (0 | this.words[r]) + 67108864 * t;
                                    this.words[r] = i / e | 0, t = i % e
                                }
                                return this.strip()
                            }, o.prototype.divn = function(e) {
                                return this.clone().idivn(e)
                            }, o.prototype.egcd = function(e) {
                                n(0 === e.negative), n(!e.isZero());
                                var t = this,
                                    r = e.clone();
                                t = 0 !== t.negative ? t.umod(e) : t.clone();
                                for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), l = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++l;
                                for (var h = r.clone(), f = t.clone(); !t.isZero();) {
                                    for (var c = 0, d = 1; 0 == (t.words[0] & d) && c < 26; ++c, d <<= 1);
                                    if (0 < c)
                                        for (t.iushrn(c); 0 < c--;)(i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(f)), i.iushrn(1), s.iushrn(1);
                                    for (var p = 0, v = 1; 0 == (r.words[0] & v) && p < 26; ++p, v <<= 1);
                                    if (0 < p)
                                        for (r.iushrn(p); 0 < p--;)(a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(f)), a.iushrn(1), u.iushrn(1);
                                    0 <= t.cmp(r) ? (t.isub(r), i.isub(a), s.isub(u)) : (r.isub(t), a.isub(i), u.isub(s))
                                }
                                return {
                                    a: a,
                                    b: u,
                                    gcd: r.iushln(l)
                                }
                            }, o.prototype._invmp = function(e) {
                                n(0 === e.negative), n(!e.isZero());
                                var t = this,
                                    r = e.clone();
                                t = 0 !== t.negative ? t.umod(e) : t.clone();
                                for (var i, s = new o(1), a = new o(0), u = r.clone(); 0 < t.cmpn(1) && 0 < r.cmpn(1);) {
                                    for (var l = 0, h = 1; 0 == (t.words[0] & h) && l < 26; ++l, h <<= 1);
                                    if (0 < l)
                                        for (t.iushrn(l); 0 < l--;) s.isOdd() && s.iadd(u), s.iushrn(1);
                                    for (var f = 0, c = 1; 0 == (r.words[0] & c) && f < 26; ++f, c <<= 1);
                                    if (0 < f)
                                        for (r.iushrn(f); 0 < f--;) a.isOdd() && a.iadd(u), a.iushrn(1);
                                    0 <= t.cmp(r) ? (t.isub(r), s.isub(a)) : (r.isub(t), a.isub(s))
                                }
                                return (i = 0 === t.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(e), i
                            }, o.prototype.gcd = function(e) {
                                if (this.isZero()) return e.abs();
                                if (e.isZero()) return this.abs();
                                var t = this.clone(),
                                    r = e.clone();
                                t.negative = 0;
                                for (var n = r.negative = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                                for (;;) {
                                    for (; t.isEven();) t.iushrn(1);
                                    for (; r.isEven();) r.iushrn(1);
                                    var i = t.cmp(r);
                                    if (i < 0) {
                                        var o = t;
                                        t = r, r = o
                                    } else if (0 === i || 0 === r.cmpn(1)) break;
                                    t.isub(r)
                                }
                                return r.iushln(n)
                            }, o.prototype.invm = function(e) {
                                return this.egcd(e).a.umod(e)
                            }, o.prototype.isEven = function() {
                                return 0 == (1 & this.words[0])
                            }, o.prototype.isOdd = function() {
                                return 1 == (1 & this.words[0])
                            }, o.prototype.andln = function(e) {
                                return this.words[0] & e
                            }, o.prototype.bincn = function(e) {
                                n("number" == typeof e);
                                var t = e % 26,
                                    r = (e - t) / 26,
                                    i = 1 << t;
                                if (this.length <= r) return this._expand(1 + r), this.words[r] |= i, this;
                                for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                                    var a = 0 | this.words[s];
                                    o = (a += o) >>> 26, a &= 67108863, this.words[s] = a
                                }
                                return 0 !== o && (this.words[s] = o, this.length++), this
                            }, o.prototype.isZero = function() {
                                return 1 === this.length && 0 === this.words[0]
                            }, o.prototype.cmpn = function(e) {
                                var t, r = e < 0;
                                if (0 !== this.negative && !r) return -1;
                                if (0 === this.negative && r) return 1;
                                if (this.strip(), 1 < this.length) t = 1;
                                else {
                                    r && (e = -e), n(e <= 67108863, "Number is too big");
                                    var i = 0 | this.words[0];
                                    t = i === e ? 0 : i < e ? -1 : 1
                                }
                                return 0 !== this.negative ? 0 | -t : t
                            }, o.prototype.cmp = function(e) {
                                if (0 !== this.negative && 0 === e.negative) return -1;
                                if (0 === this.negative && 0 !== e.negative) return 1;
                                var t = this.ucmp(e);
                                return 0 !== this.negative ? 0 | -t : t
                            }, o.prototype.ucmp = function(e) {
                                if (this.length > e.length) return 1;
                                if (this.length < e.length) return -1;
                                for (var t = 0, r = this.length - 1; 0 <= r; r--) {
                                    var n = 0 | this.words[r],
                                        i = 0 | e.words[r];
                                    if (n != i) {
                                        n < i ? t = -1 : i < n && (t = 1);
                                        break
                                    }
                                }
                                return t
                            }, o.prototype.gtn = function(e) {
                                return 1 === this.cmpn(e)
                            }, o.prototype.gt = function(e) {
                                return 1 === this.cmp(e)
                            }, o.prototype.gten = function(e) {
                                return 0 <= this.cmpn(e)
                            }, o.prototype.gte = function(e) {
                                return 0 <= this.cmp(e)
                            }, o.prototype.ltn = function(e) {
                                return -1 === this.cmpn(e)
                            }, o.prototype.lt = function(e) {
                                return -1 === this.cmp(e)
                            }, o.prototype.lten = function(e) {
                                return this.cmpn(e) <= 0
                            }, o.prototype.lte = function(e) {
                                return this.cmp(e) <= 0
                            }, o.prototype.eqn = function(e) {
                                return 0 === this.cmpn(e)
                            }, o.prototype.eq = function(e) {
                                return 0 === this.cmp(e)
                            }, o.red = function(e) {
                                return new M(e)
                            }, o.prototype.toRed = function(e) {
                                return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                            }, o.prototype.fromRed = function() {
                                return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                            }, o.prototype._forceRed = function(e) {
                                return this.red = e, this
                            }, o.prototype.forceRed = function(e) {
                                return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
                            }, o.prototype.redAdd = function(e) {
                                return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                            }, o.prototype.redIAdd = function(e) {
                                return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                            }, o.prototype.redSub = function(e) {
                                return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                            }, o.prototype.redISub = function(e) {
                                return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                            }, o.prototype.redShl = function(e) {
                                return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                            }, o.prototype.redMul = function(e) {
                                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                            }, o.prototype.redIMul = function(e) {
                                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                            }, o.prototype.redSqr = function() {
                                return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                            }, o.prototype.redISqr = function() {
                                return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                            }, o.prototype.redSqrt = function() {
                                return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                            }, o.prototype.redInvm = function() {
                                return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                            }, o.prototype.redNeg = function() {
                                return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                            }, o.prototype.redPow = function(e) {
                                return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                            };
                            var y = {
                                k256: null,
                                p224: null,
                                p192: null,
                                p25519: null
                            };

                            function m(e, t) {
                                this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                            }

                            function g() {
                                m.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                            }

                            function b() {
                                m.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                            }

                            function w() {
                                m.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                            }

                            function _() {
                                m.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                            }

                            function M(e) {
                                if ("string" == typeof e) {
                                    var t = o._prime(e);
                                    this.m = t.p, this.prime = t
                                } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                            }

                            function A(e) {
                                M.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                            }
                            m.prototype._tmp = function() {
                                var e = new o(null);
                                return e.words = new Array(Math.ceil(this.n / 13)), e
                            }, m.prototype.ireduce = function(e) {
                                for (var t, r = e; this.split(r, this.tmp), (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()) > this.n;);
                                var n = t < this.n ? -1 : r.ucmp(this.p);
                                return 0 === n ? (r.words[0] = 0, r.length = 1) : 0 < n ? r.isub(this.p) : r.strip(), r
                            }, m.prototype.split = function(e, t) {
                                e.iushrn(this.n, 0, t)
                            }, m.prototype.imulK = function(e) {
                                return e.imul(this.k)
                            }, i(g, m), g.prototype.split = function(e, t) {
                                for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
                                if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                                var i = e.words[9];
                                for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
                                    var o = 0 | e.words[n];
                                    e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                                }
                                i >>>= 22, 0 === (e.words[n - 10] = i) && 10 < e.length ? e.length -= 10 : e.length -= 9
                            }, g.prototype.imulK = function(e) {
                                e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                                for (var t = 0, r = 0; r < e.length; r++) {
                                    var n = 0 | e.words[r];
                                    t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                                }
                                return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                            }, i(b, m), i(w, m), i(_, m), _.prototype.imulK = function(e) {
                                for (var t = 0, r = 0; r < e.length; r++) {
                                    var n = 19 * (0 | e.words[r]) + t,
                                        i = 67108863 & n;
                                    n >>>= 26, e.words[r] = i, t = n
                                }
                                return 0 !== t && (e.words[e.length++] = t), e
                            }, o._prime = function(e) {
                                if (y[e]) return y[e];
                                var t;
                                if ("k256" === e) t = new g;
                                else if ("p224" === e) t = new b;
                                else if ("p192" === e) t = new w;
                                else {
                                    if ("p25519" !== e) throw new Error("Unknown prime " + e);
                                    t = new _
                                }
                                return y[e] = t
                            }, M.prototype._verify1 = function(e) {
                                n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
                            }, M.prototype._verify2 = function(e, t) {
                                n(0 == (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
                            }, M.prototype.imod = function(e) {
                                return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                            }, M.prototype.neg = function(e) {
                                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                            }, M.prototype.add = function(e, t) {
                                this._verify2(e, t);
                                var r = e.add(t);
                                return 0 <= r.cmp(this.m) && r.isub(this.m), r._forceRed(this)
                            }, M.prototype.iadd = function(e, t) {
                                this._verify2(e, t);
                                var r = e.iadd(t);
                                return 0 <= r.cmp(this.m) && r.isub(this.m), r
                            }, M.prototype.sub = function(e, t) {
                                this._verify2(e, t);
                                var r = e.sub(t);
                                return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                            }, M.prototype.isub = function(e, t) {
                                this._verify2(e, t);
                                var r = e.isub(t);
                                return r.cmpn(0) < 0 && r.iadd(this.m), r
                            }, M.prototype.shl = function(e, t) {
                                return this._verify1(e), this.imod(e.ushln(t))
                            }, M.prototype.imul = function(e, t) {
                                return this._verify2(e, t), this.imod(e.imul(t))
                            }, M.prototype.mul = function(e, t) {
                                return this._verify2(e, t), this.imod(e.mul(t))
                            }, M.prototype.isqr = function(e) {
                                return this.imul(e, e.clone())
                            }, M.prototype.sqr = function(e) {
                                return this.mul(e, e)
                            }, M.prototype.sqrt = function(e) {
                                if (e.isZero()) return e.clone();
                                var t = this.m.andln(3);
                                if (n(t % 2 == 1), 3 === t) {
                                    var r = this.m.add(new o(1)).iushrn(2);
                                    return this.pow(e, r)
                                }
                                for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
                                n(!i.isZero());
                                var a = new o(1).toRed(this),
                                    u = a.redNeg(),
                                    l = this.m.subn(1).iushrn(1),
                                    h = this.m.bitLength();
                                for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, l).cmp(u);) h.redIAdd(u);
                                for (var f = this.pow(h, i), c = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = s; 0 !== d.cmp(a);) {
                                    for (var v = d, y = 0; 0 !== v.cmp(a); y++) v = v.redSqr();
                                    n(y < p);
                                    var m = this.pow(f, new o(1).iushln(p - y - 1));
                                    c = c.redMul(m), f = m.redSqr(), d = d.redMul(f), p = y
                                }
                                return c
                            }, M.prototype.invm = function(e) {
                                var t = e._invmp(this.m);
                                return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                            }, M.prototype.pow = function(e, t) {
                                if (t.isZero()) return new o(1).toRed(this);
                                if (0 === t.cmpn(1)) return e.clone();
                                var r = new Array(16);
                                r[0] = new o(1).toRed(this), r[1] = e;
                                for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                                var i = r[0],
                                    s = 0,
                                    a = 0,
                                    u = t.bitLength() % 26;
                                for (0 === u && (u = 26), n = t.length - 1; 0 <= n; n--) {
                                    for (var l = t.words[n], h = u - 1; 0 <= h; h--) {
                                        var f = l >> h & 1;
                                        i !== r[0] && (i = this.sqr(i)), 0 != f || 0 !== s ? (s <<= 1, s |= f, (4 === ++a || 0 === n && 0 === h) && (i = this.mul(i, r[s]), s = a = 0)) : a = 0
                                    }
                                    u = 26
                                }
                                return i
                            }, M.prototype.convertTo = function(e) {
                                var t = e.umod(this.m);
                                return t === e ? t.clone() : t
                            }, M.prototype.convertFrom = function(e) {
                                var t = e.clone();
                                return t.red = null, t
                            }, o.mont = function(e) {
                                return new A(e)
                            }, i(A, M), A.prototype.convertTo = function(e) {
                                return this.imod(e.ushln(this.shift))
                            }, A.prototype.convertFrom = function(e) {
                                var t = this.imod(e.mul(this.rinv));
                                return t.red = null, t
                            }, A.prototype.imul = function(e, t) {
                                if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                                var r = e.imul(t),
                                    n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    i = r.isub(n).iushrn(this.shift),
                                    o = i;
                                return 0 <= i.cmp(this.m) ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                            }, A.prototype.mul = function(e, t) {
                                if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                                var r = e.mul(t),
                                    n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                    i = r.isub(n).iushrn(this.shift),
                                    s = i;
                                return 0 <= i.cmp(this.m) ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this)
                            }, A.prototype.invm = function(e) {
                                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                            }
                        }(void 0 === t || t, this)
                    }, {
                        buffer: 11
                    }],
                    10: [function(e, r, n) {
                        (function(e) {
                            r.exports = function(t) {
                                var r = new Uint8Array(t);
                                return (e.crypto || e.msCrypto).getRandomValues(r), r
                            }
                        }).call(this, "undefined" != typeof t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    11: [function(e, t, r) {}, {}],
                    12: [function(e, t, r) {
                        "use strict";
                        var n = r;
                        n.version = e("../package.json").version, n.utils = e("./elliptic/utils"), n.rand = e("brorand"), n.curve = e("./elliptic/curve"), n.curves = e("./elliptic/curves"), n.ec = e("./elliptic/ec"), n.eddsa = e("./elliptic/eddsa")
                    }, {
                        "../package.json": 25,
                        "./elliptic/curve": 15,
                        "./elliptic/curves": 18,
                        "./elliptic/ec": 19,
                        "./elliptic/eddsa": 22,
                        "./elliptic/utils": 24,
                        brorand: 10
                    }],
                    13: [function(e, t, r) {
                        "use strict";
                        var n = e("bn.js"),
                            i = e("../utils"),
                            o = i.getNAF,
                            s = i.getJSF,
                            a = i.assert;

                        function u(e, t) {
                            this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                            var r = this.n && this.p.div(this.n);
                            !r || 0 < r.cmpn(100) ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                        }

                        function l(e, t) {
                            this.curve = e, this.type = t, this.precomputed = null
                        }(t.exports = u).prototype.point = function() {
                            throw new Error("Not implemented")
                        }, u.prototype.validate = function() {
                            throw new Error("Not implemented")
                        }, u.prototype._fixedNafMul = function(e, t) {
                            a(e.precomputed);
                            var r = e._getDoubles(),
                                n = o(t, 1, this._bitLength),
                                i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                            i /= 3;
                            for (var s = [], u = 0; u < n.length; u += r.step) {
                                var l = 0;
                                for (t = u + r.step - 1; u <= t; t--) l = (l << 1) + n[t];
                                s.push(l)
                            }
                            for (var h = this.jpoint(null, null, null), f = this.jpoint(null, null, null), c = i; 0 < c; c--) {
                                for (u = 0; u < s.length; u++)(l = s[u]) === c ? f = f.mixedAdd(r.points[u]) : l === -c && (f = f.mixedAdd(r.points[u].neg()));
                                h = h.add(f)
                            }
                            return h.toP()
                        }, u.prototype._wnafMul = function(e, t) {
                            var r = 4,
                                n = e._getNAFPoints(r);
                            r = n.wnd;
                            for (var i = n.points, s = o(t, r, this._bitLength), u = this.jpoint(null, null, null), l = s.length - 1; 0 <= l; l--) {
                                for (t = 0; 0 <= l && 0 === s[l]; l--) t++;
                                if (0 <= l && t++, u = u.dblp(t), l < 0) break;
                                var h = s[l];
                                a(0 !== h), u = "affine" === e.type ? 0 < h ? u.mixedAdd(i[h - 1 >> 1]) : u.mixedAdd(i[-h - 1 >> 1].neg()) : 0 < h ? u.add(i[h - 1 >> 1]) : u.add(i[-h - 1 >> 1].neg())
                            }
                            return "affine" === e.type ? u.toP() : u
                        }, u.prototype._wnafMulAdd = function(e, t, r, n, i) {
                            for (var a = this._wnafT1, u = this._wnafT2, l = this._wnafT3, h = 0, f = 0; f < n; f++) {
                                var c = (S = t[f])._getNAFPoints(e);
                                a[f] = c.wnd, u[f] = c.points
                            }
                            for (f = n - 1; 1 <= f; f -= 2) {
                                var d = f - 1,
                                    p = f;
                                if (1 === a[d] && 1 === a[p]) {
                                    var v = [t[d], null, null, t[p]];
                                    0 === t[d].y.cmp(t[p].y) ? (v[1] = t[d].add(t[p]), v[2] = t[d].toJ().mixedAdd(t[p].neg())) : 0 === t[d].y.cmp(t[p].y.redNeg()) ? (v[1] = t[d].toJ().mixedAdd(t[p]), v[2] = t[d].add(t[p].neg())) : (v[1] = t[d].toJ().mixedAdd(t[p]), v[2] = t[d].toJ().mixedAdd(t[p].neg()));
                                    var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                        m = s(r[d], r[p]);
                                    h = Math.max(m[0].length, h), l[d] = new Array(h), l[p] = new Array(h);
                                    for (var g = 0; g < h; g++) {
                                        var b = 0 | m[0][g],
                                            w = 0 | m[1][g];
                                        l[d][g] = y[3 * (1 + b) + (1 + w)], l[p][g] = 0, u[d] = v
                                    }
                                } else l[d] = o(r[d], a[d], this._bitLength), l[p] = o(r[p], a[p], this._bitLength), h = Math.max(l[d].length, h), h = Math.max(l[p].length, h)
                            }
                            var _ = this.jpoint(null, null, null),
                                M = this._wnafT4;
                            for (f = h; 0 <= f; f--) {
                                for (var A = 0; 0 <= f;) {
                                    var E = !0;
                                    for (g = 0; g < n; g++) M[g] = 0 | l[g][f], 0 !== M[g] && (E = !1);
                                    if (!E) break;
                                    A++, f--
                                }
                                if (0 <= f && A++, _ = _.dblp(A), f < 0) break;
                                for (g = 0; g < n; g++) {
                                    var S, k = M[g];
                                    0 !== k && (0 < k ? S = u[g][k - 1 >> 1] : k < 0 && (S = u[g][-k - 1 >> 1].neg()), _ = "affine" === S.type ? _.mixedAdd(S) : _.add(S))
                                }
                            }
                            for (f = 0; f < n; f++) u[f] = null;
                            return i ? _ : _.toP()
                        }, (u.BasePoint = l).prototype.eq = function() {
                            throw new Error("Not implemented")
                        }, l.prototype.validate = function() {
                            return this.curve.validate(this)
                        }, u.prototype.decodePoint = function(e, t) {
                            e = i.toArray(e, t);
                            var r = this.p.byteLength();
                            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? a(e[e.length - 1] % 2 == 0) : 7 === e[0] && a(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                            throw new Error("Unknown point format")
                        }, l.prototype.encodeCompressed = function(e) {
                            return this.encode(e, !0)
                        }, l.prototype._encode = function(e) {
                            var t = this.curve.p.byteLength(),
                                r = this.getX().toArray("be", t);
                            return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
                        }, l.prototype.encode = function(e, t) {
                            return i.encode(this._encode(t), e)
                        }, l.prototype.precompute = function(e) {
                            if (this.precomputed) return this;
                            var t = {
                                doubles: null,
                                naf: null,
                                beta: null
                            };
                            return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
                        }, l.prototype._hasDoubles = function(e) {
                            if (!this.precomputed) return !1;
                            var t = this.precomputed.doubles;
                            return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
                        }, l.prototype._getDoubles = function(e, t) {
                            if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                            for (var r = [this], n = this, i = 0; i < t; i += e) {
                                for (var o = 0; o < e; o++) n = n.dbl();
                                r.push(n)
                            }
                            return {
                                step: e,
                                points: r
                            }
                        }, l.prototype._getNAFPoints = function(e) {
                            if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                            for (var t = [this], r = (1 << e) - 1, n = 1 == r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
                            return {
                                wnd: e,
                                points: t
                            }
                        }, l.prototype._getBeta = function() {
                            return null
                        }, l.prototype.dblp = function(e) {
                            for (var t = this, r = 0; r < e; r++) t = t.dbl();
                            return t
                        }
                    }, {
                        "../utils": 24,
                        "bn.js": 9
                    }],
                    14: [function(e, t, r) {
                        t.exports = {}
                    }, {}],
                    15: [function(e, t, r) {
                        "use strict";
                        var n = r;
                        n.base = e("./base"), n.short = e("./short"), n.mont = e("./mont"), n.edwards = e("./edwards")
                    }, {
                        "./base": 13,
                        "./edwards": 14,
                        "./mont": 16,
                        "./short": 17
                    }],
                    16: [function(e, t, r) {
                        arguments[4][14][0].apply(r, arguments)
                    }, {
                        dup: 14
                    }],
                    17: [function(e, t, r) {
                        "use strict";
                        var n = e("../utils"),
                            i = e("bn.js"),
                            o = e("inherits"),
                            s = e("./base"),
                            a = n.assert;

                        function u(e) {
                            s.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                        }

                        function l(e, t, r, n) {
                            s.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                        }

                        function h(e, t, r, n) {
                            s.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                        }
                        o(u, s), (t.exports = u).prototype._getEndomorphism = function(e) {
                            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                                var t, r;
                                if (e.beta) t = new i(e.beta, 16).toRed(this.red);
                                else {
                                    var n = this._getEndoRoots(this.p);
                                    t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                                }
                                if (e.lambda) r = new i(e.lambda, 16);
                                else {
                                    var o = this._getEndoRoots(this.n);
                                    0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], a(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                                }
                                return {
                                    beta: t,
                                    lambda: r,
                                    basis: e.basis ? e.basis.map((function(e) {
                                        return {
                                            a: new i(e.a, 16),
                                            b: new i(e.b, 16)
                                        }
                                    })) : this._getEndoBasis(r)
                                }
                            }
                        }, u.prototype._getEndoRoots = function(e) {
                            var t = e === this.p ? this.red : i.mont(e),
                                r = new i(2).toRed(t).redInvm(),
                                n = r.redNeg(),
                                o = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
                            return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
                        }, u.prototype._getEndoBasis = function(e) {
                            for (var t, r, n, o, s, a, u, l, h, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), c = e, d = this.n.clone(), p = new i(1), v = new i(0), y = new i(0), m = new i(1), g = 0; 0 !== c.cmpn(0);) {
                                var b = d.div(c);
                                l = d.sub(b.mul(c)), h = y.sub(b.mul(p));
                                var w = m.sub(b.mul(v));
                                if (!n && l.cmp(f) < 0) t = u.neg(), r = p, n = l.neg(), o = h;
                                else if (n && 2 == ++g) break;
                                d = c, c = u = l, y = p, p = h, m = v, v = w
                            }
                            s = l.neg(), a = h;
                            var _ = n.sqr().add(o.sqr());
                            return 0 <= s.sqr().add(a.sqr()).cmp(_) && (s = t, a = r), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                                a: n,
                                b: o
                            }, {
                                a: s,
                                b: a
                            }]
                        }, u.prototype._endoSplit = function(e) {
                            var t = this.endo.basis,
                                r = t[0],
                                n = t[1],
                                i = n.b.mul(e).divRound(this.n),
                                o = r.b.neg().mul(e).divRound(this.n),
                                s = i.mul(r.a),
                                a = o.mul(n.a),
                                u = i.mul(r.b),
                                l = o.mul(n.b);
                            return {
                                k1: e.sub(s).sub(a),
                                k2: u.add(l).neg()
                            }
                        }, u.prototype.pointFromX = function(e, t) {
                            (e = new i(e, 16)).red || (e = e.toRed(this.red));
                            var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                                n = r.redSqrt();
                            if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                            var o = n.fromRed().isOdd();
                            return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n)
                        }, u.prototype.validate = function(e) {
                            if (e.inf) return !0;
                            var t = e.x,
                                r = e.y,
                                n = this.a.redMul(t),
                                i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
                            return 0 === r.redSqr().redISub(i).cmpn(0)
                        }, u.prototype._endoWnafMulAdd = function(e, t, r) {
                            for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
                                var s = this._endoSplit(t[o]),
                                    a = e[o],
                                    u = a._getBeta();
                                s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                            }
                            for (var l = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0; h < 2 * o; h++) n[h] = null, i[h] = null;
                            return l
                        }, o(l, s.BasePoint), u.prototype.point = function(e, t, r) {
                            return new l(this, e, t, r)
                        }, u.prototype.pointFromJSON = function(e, t) {
                            return l.fromJSON(this, e, t)
                        }, l.prototype._getBeta = function() {
                            if (this.curve.endo) {
                                var e = this.precomputed;
                                if (e && e.beta) return e.beta;
                                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                                if (e) {
                                    var r = this.curve,
                                        n = function(e) {
                                            return r.point(e.x.redMul(r.endo.beta), e.y)
                                        };
                                    (e.beta = t).precomputed = {
                                        beta: null,
                                        naf: e.naf && {
                                            wnd: e.naf.wnd,
                                            points: e.naf.points.map(n)
                                        },
                                        doubles: e.doubles && {
                                            step: e.doubles.step,
                                            points: e.doubles.points.map(n)
                                        }
                                    }
                                }
                                return t
                            }
                        }, l.prototype.toJSON = function() {
                            return this.precomputed ? [this.x, this.y, this.precomputed && {
                                doubles: this.precomputed.doubles && {
                                    step: this.precomputed.doubles.step,
                                    points: this.precomputed.doubles.points.slice(1)
                                },
                                naf: this.precomputed.naf && {
                                    wnd: this.precomputed.naf.wnd,
                                    points: this.precomputed.naf.points.slice(1)
                                }
                            }] : [this.x, this.y]
                        }, l.fromJSON = function(e, t, r) {
                            "string" == typeof t && (t = JSON.parse(t));
                            var n = e.point(t[0], t[1], r);
                            if (!t[2]) return n;

                            function i(t) {
                                return e.point(t[0], t[1], r)
                            }
                            var o = t[2];
                            return n.precomputed = {
                                beta: null,
                                doubles: o.doubles && {
                                    step: o.doubles.step,
                                    points: [n].concat(o.doubles.points.map(i))
                                },
                                naf: o.naf && {
                                    wnd: o.naf.wnd,
                                    points: [n].concat(o.naf.points.map(i))
                                }
                            }, n
                        }, l.prototype.inspect = function() {
                            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                        }, l.prototype.isInfinity = function() {
                            return this.inf
                        }, l.prototype.add = function(e) {
                            if (this.inf) return e;
                            if (e.inf) return this;
                            if (this.eq(e)) return this.dbl();
                            if (this.neg().eq(e)) return this.curve.point(null, null);
                            if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
                            var t = this.y.redSub(e.y);
                            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
                            var r = t.redSqr().redISub(this.x).redISub(e.x),
                                n = t.redMul(this.x.redSub(r)).redISub(this.y);
                            return this.curve.point(r, n)
                        }, l.prototype.dbl = function() {
                            if (this.inf) return this;
                            var e = this.y.redAdd(this.y);
                            if (0 === e.cmpn(0)) return this.curve.point(null, null);
                            var t = this.curve.a,
                                r = this.x.redSqr(),
                                n = e.redInvm(),
                                i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
                                o = i.redSqr().redISub(this.x.redAdd(this.x)),
                                s = i.redMul(this.x.redSub(o)).redISub(this.y);
                            return this.curve.point(o, s)
                        }, l.prototype.getX = function() {
                            return this.x.fromRed()
                        }, l.prototype.getY = function() {
                            return this.y.fromRed()
                        }, l.prototype.mul = function(e) {
                            return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
                        }, l.prototype.mulAdd = function(e, t, r) {
                            var n = [this, t],
                                i = [e, r];
                            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
                        }, l.prototype.jmulAdd = function(e, t, r) {
                            var n = [this, t],
                                i = [e, r];
                            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
                        }, l.prototype.eq = function(e) {
                            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
                        }, l.prototype.neg = function(e) {
                            if (this.inf) return this;
                            var t = this.curve.point(this.x, this.y.redNeg());
                            if (e && this.precomputed) {
                                var r = this.precomputed,
                                    n = function(e) {
                                        return e.neg()
                                    };
                                t.precomputed = {
                                    naf: r.naf && {
                                        wnd: r.naf.wnd,
                                        points: r.naf.points.map(n)
                                    },
                                    doubles: r.doubles && {
                                        step: r.doubles.step,
                                        points: r.doubles.points.map(n)
                                    }
                                }
                            }
                            return t
                        }, l.prototype.toJ = function() {
                            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
                        }, o(h, s.BasePoint), u.prototype.jpoint = function(e, t, r) {
                            return new h(this, e, t, r)
                        }, h.prototype.toP = function() {
                            if (this.isInfinity()) return this.curve.point(null, null);
                            var e = this.z.redInvm(),
                                t = e.redSqr(),
                                r = this.x.redMul(t),
                                n = this.y.redMul(t).redMul(e);
                            return this.curve.point(r, n)
                        }, h.prototype.neg = function() {
                            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                        }, h.prototype.add = function(e) {
                            if (this.isInfinity()) return e;
                            if (e.isInfinity()) return this;
                            var t = e.z.redSqr(),
                                r = this.z.redSqr(),
                                n = this.x.redMul(t),
                                i = e.x.redMul(r),
                                o = this.y.redMul(t.redMul(e.z)),
                                s = e.y.redMul(r.redMul(this.z)),
                                a = n.redSub(i),
                                u = o.redSub(s);
                            if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                            var l = a.redSqr(),
                                h = l.redMul(a),
                                f = n.redMul(l),
                                c = u.redSqr().redIAdd(h).redISub(f).redISub(f),
                                d = u.redMul(f.redISub(c)).redISub(o.redMul(h)),
                                p = this.z.redMul(e.z).redMul(a);
                            return this.curve.jpoint(c, d, p)
                        }, h.prototype.mixedAdd = function(e) {
                            if (this.isInfinity()) return e.toJ();
                            if (e.isInfinity()) return this;
                            var t = this.z.redSqr(),
                                r = this.x,
                                n = e.x.redMul(t),
                                i = this.y,
                                o = e.y.redMul(t).redMul(this.z),
                                s = r.redSub(n),
                                a = i.redSub(o);
                            if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                            var u = s.redSqr(),
                                l = u.redMul(s),
                                h = r.redMul(u),
                                f = a.redSqr().redIAdd(l).redISub(h).redISub(h),
                                c = a.redMul(h.redISub(f)).redISub(i.redMul(l)),
                                d = this.z.redMul(s);
                            return this.curve.jpoint(f, c, d)
                        }, h.prototype.dblp = function(e) {
                            if (0 === e) return this;
                            if (this.isInfinity()) return this;
                            if (!e) return this.dbl();
                            if (this.curve.zeroA || this.curve.threeA) {
                                for (var t = this, r = 0; r < e; r++) t = t.dbl();
                                return t
                            }
                            var n = this.curve.a,
                                i = this.curve.tinv,
                                o = this.x,
                                s = this.y,
                                a = this.z,
                                u = a.redSqr().redSqr(),
                                l = s.redAdd(s);
                            for (r = 0; r < e; r++) {
                                var h = o.redSqr(),
                                    f = l.redSqr(),
                                    c = f.redSqr(),
                                    d = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),
                                    p = o.redMul(f),
                                    v = d.redSqr().redISub(p.redAdd(p)),
                                    y = p.redISub(v),
                                    m = d.redMul(y);
                                m = m.redIAdd(m).redISub(c);
                                var g = l.redMul(a);
                                r + 1 < e && (u = u.redMul(c)), o = v, a = g, l = m
                            }
                            return this.curve.jpoint(o, l.redMul(i), a)
                        }, h.prototype.dbl = function() {
                            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                        }, h.prototype._zeroDbl = function() {
                            var e, t, r;
                            if (this.zOne) {
                                var n = this.x.redSqr(),
                                    i = this.y.redSqr(),
                                    o = i.redSqr(),
                                    s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                                s = s.redIAdd(s);
                                var a = n.redAdd(n).redIAdd(n),
                                    u = a.redSqr().redISub(s).redISub(s),
                                    l = o.redIAdd(o);
                                l = (l = l.redIAdd(l)).redIAdd(l), e = u, t = a.redMul(s.redISub(u)).redISub(l), r = this.y.redAdd(this.y)
                            } else {
                                var h = this.x.redSqr(),
                                    f = this.y.redSqr(),
                                    c = f.redSqr(),
                                    d = this.x.redAdd(f).redSqr().redISub(h).redISub(c);
                                d = d.redIAdd(d);
                                var p = h.redAdd(h).redIAdd(h),
                                    v = p.redSqr(),
                                    y = c.redIAdd(c);
                                y = (y = y.redIAdd(y)).redIAdd(y), e = v.redISub(d).redISub(d), t = p.redMul(d.redISub(e)).redISub(y), r = (r = this.y.redMul(this.z)).redIAdd(r)
                            }
                            return this.curve.jpoint(e, t, r)
                        }, h.prototype._threeDbl = function() {
                            var e, t, r;
                            if (this.zOne) {
                                var n = this.x.redSqr(),
                                    i = this.y.redSqr(),
                                    o = i.redSqr(),
                                    s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                                s = s.redIAdd(s);
                                var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                                    u = a.redSqr().redISub(s).redISub(s);
                                e = u;
                                var l = o.redIAdd(o);
                                l = (l = l.redIAdd(l)).redIAdd(l), t = a.redMul(s.redISub(u)).redISub(l), r = this.y.redAdd(this.y)
                            } else {
                                var h = this.z.redSqr(),
                                    f = this.y.redSqr(),
                                    c = this.x.redMul(f),
                                    d = this.x.redSub(h).redMul(this.x.redAdd(h));
                                d = d.redAdd(d).redIAdd(d);
                                var p = c.redIAdd(c),
                                    v = (p = p.redIAdd(p)).redAdd(p);
                                e = d.redSqr().redISub(v), r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(h);
                                var y = f.redSqr();
                                y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), t = d.redMul(p.redISub(e)).redISub(y)
                            }
                            return this.curve.jpoint(e, t, r)
                        }, h.prototype._dbl = function() {
                            var e = this.curve.a,
                                t = this.x,
                                r = this.y,
                                n = this.z,
                                i = n.redSqr().redSqr(),
                                o = t.redSqr(),
                                s = r.redSqr(),
                                a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
                                u = t.redAdd(t),
                                l = (u = u.redIAdd(u)).redMul(s),
                                h = a.redSqr().redISub(l.redAdd(l)),
                                f = l.redISub(h),
                                c = s.redSqr();
                            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                            var d = a.redMul(f).redISub(c),
                                p = r.redAdd(r).redMul(n);
                            return this.curve.jpoint(h, d, p)
                        }, h.prototype.trpl = function() {
                            if (!this.curve.zeroA) return this.dbl().add(this);
                            var e = this.x.redSqr(),
                                t = this.y.redSqr(),
                                r = this.z.redSqr(),
                                n = t.redSqr(),
                                i = e.redAdd(e).redIAdd(e),
                                o = i.redSqr(),
                                s = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                                a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                                u = n.redIAdd(n);
                            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                            var l = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
                                h = t.redMul(l);
                            h = (h = h.redIAdd(h)).redIAdd(h);
                            var f = this.x.redMul(a).redISub(h);
                            f = (f = f.redIAdd(f)).redIAdd(f);
                            var c = this.y.redMul(l.redMul(u.redISub(l)).redISub(s.redMul(a)));
                            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                            var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                            return this.curve.jpoint(f, c, d)
                        }, h.prototype.mul = function(e, t) {
                            return e = new i(e, t), this.curve._wnafMul(this, e)
                        }, h.prototype.eq = function(e) {
                            if ("affine" === e.type) return this.eq(e.toJ());
                            if (this === e) return !0;
                            var t = this.z.redSqr(),
                                r = e.z.redSqr();
                            if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
                            var n = t.redMul(this.z),
                                i = r.redMul(e.z);
                            return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
                        }, h.prototype.eqXToP = function(e) {
                            var t = this.z.redSqr(),
                                r = e.toRed(this.curve.red).redMul(t);
                            if (0 === this.x.cmp(r)) return !0;
                            for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
                                if (n.iadd(this.curve.n), 0 <= n.cmp(this.curve.p)) return !1;
                                if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                            }
                        }, h.prototype.inspect = function() {
                            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                        }, h.prototype.isInfinity = function() {
                            return 0 === this.z.cmpn(0)
                        }
                    }, {
                        "../utils": 24,
                        "./base": 13,
                        "bn.js": 9,
                        inherits: 39
                    }],
                    18: [function(e, t, r) {
                        "use strict";
                        var n, i = r,
                            o = e("hash.js"),
                            s = e("./curve"),
                            a = e("./utils").assert;

                        function u(e) {
                            "short" === e.type ? this.curve = new s.short(e) : "edwards" === e.type ? this.curve = new s.edwards(e) : this.curve = new s.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, a(this.g.validate(), "Invalid curve"), a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function l(e, t) {
                            Object.defineProperty(i, e, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var r = new u(t);
                                    return Object.defineProperty(i, e, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: r
                                    }), r
                                }
                            })
                        }
                        i.PresetCurve = u, l("p192", {
                            type: "short",
                            prime: "p192",
                            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                            hash: o.sha256,
                            gRed: !1,
                            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                        }), l("p224", {
                            type: "short",
                            prime: "p224",
                            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                            hash: o.sha256,
                            gRed: !1,
                            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                        }), l("p256", {
                            type: "short",
                            prime: null,
                            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                            hash: o.sha256,
                            gRed: !1,
                            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                        }), l("p384", {
                            type: "short",
                            prime: null,
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                            hash: o.sha384,
                            gRed: !1,
                            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                        }), l("p521", {
                            type: "short",
                            prime: null,
                            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                            hash: o.sha512,
                            gRed: !1,
                            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                        }), l("curve25519", {
                            type: "mont",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "76d06",
                            b: "1",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: o.sha256,
                            gRed: !1,
                            g: ["9"]
                        }), l("ed25519", {
                            type: "edwards",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: o.sha256,
                            gRed: !1,
                            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                        });
                        try {
                            n = e("./precomputed/secp256k1")
                        } catch (e) {
                            n = void 0
                        }
                        l("secp256k1", {
                            type: "short",
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            hash: o.sha256,
                            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                            basis: [{
                                a: "3086d221a7d46bcde86c90e49284eb15",
                                b: "-e4437ed6010e88286f547fa90abfe4c3"
                            }, {
                                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                                b: "3086d221a7d46bcde86c90e49284eb15"
                            }],
                            gRed: !1,
                            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
                        })
                    }, {
                        "./curve": 15,
                        "./precomputed/secp256k1": 23,
                        "./utils": 24,
                        "hash.js": 26
                    }],
                    19: [function(e, t, r) {
                        "use strict";
                        var n = e("bn.js"),
                            i = e("hmac-drbg"),
                            o = e("../utils"),
                            s = e("../curves"),
                            a = e("brorand"),
                            u = o.assert,
                            l = e("./key"),
                            h = e("./signature");

                        function f(e) {
                            if (!(this instanceof f)) return new f(e);
                            "string" == typeof e && (u(s.hasOwnProperty(e), "Unknown curve " + e), e = s[e]), e instanceof s.PresetCurve && (e = {
                                curve: e
                            }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
                        }(t.exports = f).prototype.keyPair = function(e) {
                            return new l(this, e)
                        }, f.prototype.keyFromPrivate = function(e, t) {
                            return l.fromPrivate(this, e, t)
                        }, f.prototype.keyFromPublic = function(e, t) {
                            return l.fromPublic(this, e, t)
                        }, f.prototype.genKeyPair = function(e) {
                            e = e || {};
                            for (var t = new i({
                                    hash: this.hash,
                                    pers: e.pers,
                                    persEnc: e.persEnc || "utf8",
                                    entropy: e.entropy || a(this.hash.hmacStrength),
                                    entropyEnc: e.entropy && e.entropyEnc || "utf8",
                                    nonce: this.n.toArray()
                                }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
                                var s = new n(t.generate(r));
                                if (!(0 < s.cmp(o))) return s.iaddn(1), this.keyFromPrivate(s)
                            }
                        }, f.prototype._truncateToN = function(e, t) {
                            var r = 8 * e.byteLength() - this.n.bitLength();
                            return 0 < r && (e = e.ushrn(r)), !t && 0 <= e.cmp(this.n) ? e.sub(this.n) : e
                        }, f.prototype.sign = function(e, t, r, o) {
                            "object" == typeof r && (o = r, r = null), o = o || {}, t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16));
                            for (var s = this.n.byteLength(), a = t.getPrivate().toArray("be", s), u = e.toArray("be", s), l = new i({
                                    hash: this.hash,
                                    entropy: a,
                                    nonce: u,
                                    pers: o.pers,
                                    persEnc: o.persEnc || "utf8"
                                }), f = this.n.sub(new n(1)), c = 0;; c++) {
                                var d = o.k ? o.k(c) : new n(l.generate(this.n.byteLength()));
                                if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || 0 <= d.cmp(f))) {
                                    var p = this.g.mul(d);
                                    if (!p.isInfinity()) {
                                        var v = p.getX(),
                                            y = v.umod(this.n);
                                        if (0 !== y.cmpn(0)) {
                                            var m = d.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
                                            if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                                var g = (p.getY().isOdd() ? 1 : 0) | (0 !== v.cmp(y) ? 2 : 0);
                                                return o.canonical && 0 < m.cmp(this.nh) && (m = this.n.sub(m), g ^= 1), new h({
                                                    r: y,
                                                    s: m,
                                                    recoveryParam: g
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }, f.prototype.verify = function(e, t, r, i) {
                            e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i);
                            var o = (t = new h(t, "hex")).r,
                                s = t.s;
                            if (o.cmpn(1) < 0 || 0 <= o.cmp(this.n)) return !1;
                            if (s.cmpn(1) < 0 || 0 <= s.cmp(this.n)) return !1;
                            var a, u = s.invm(this.n),
                                l = u.mul(e).umod(this.n),
                                f = u.mul(o).umod(this.n);
                            return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(l, r.getPublic(), f)).isInfinity() && a.eqXToP(o) : !(a = this.g.mulAdd(l, r.getPublic(), f)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o)
                        }, f.prototype.recoverPubKey = function(e, t, r, i) {
                            u((3 & r) === r, "The recovery param is more than two bits"), t = new h(t, i);
                            var o = this.n,
                                s = new n(e),
                                a = t.r,
                                l = t.s,
                                f = 1 & r,
                                c = r >> 1;
                            if (0 <= a.cmp(this.curve.p.umod(this.curve.n)) && c) throw new Error("Unable to find sencond key candinate");
                            a = c ? this.curve.pointFromX(a.add(this.curve.n), f) : this.curve.pointFromX(a, f);
                            var d = t.r.invm(o),
                                p = o.sub(s).mul(d).umod(o),
                                v = l.mul(d).umod(o);
                            return this.g.mulAdd(p, a, v)
                        }, f.prototype.getKeyRecoveryParam = function(e, t, r, n) {
                            if (null !== (t = new h(t, n)).recoveryParam) return t.recoveryParam;
                            for (var i = 0; i < 4; i++) {
                                var o;
                                try {
                                    o = this.recoverPubKey(e, t, i)
                                } catch (e) {
                                    continue
                                }
                                if (o.eq(r)) return i
                            }
                            throw new Error("Unable to find valid recovery factor")
                        }
                    }, {
                        "../curves": 18,
                        "../utils": 24,
                        "./key": 20,
                        "./signature": 21,
                        "bn.js": 9,
                        brorand: 10,
                        "hmac-drbg": 38
                    }],
                    20: [function(e, t, r) {
                        "use strict";
                        var n = e("bn.js"),
                            i = e("../utils").assert;

                        function o(e, t) {
                            this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
                        }(t.exports = o).fromPublic = function(e, t, r) {
                            return t instanceof o ? t : new o(e, {
                                pub: t,
                                pubEnc: r
                            })
                        }, o.fromPrivate = function(e, t, r) {
                            return t instanceof o ? t : new o(e, {
                                priv: t,
                                privEnc: r
                            })
                        }, o.prototype.validate = function() {
                            var e = this.getPublic();
                            return e.isInfinity() ? {
                                result: !1,
                                reason: "Invalid public key"
                            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                                result: !0,
                                reason: null
                            } : {
                                result: !1,
                                reason: "Public key * N != O"
                            } : {
                                result: !1,
                                reason: "Public key is not a point"
                            }
                        }, o.prototype.getPublic = function(e, t) {
                            return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
                        }, o.prototype.getPrivate = function(e) {
                            return "hex" === e ? this.priv.toString(16, 2) : this.priv
                        }, o.prototype._importPrivate = function(e, t) {
                            this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
                        }, o.prototype._importPublic = function(e, t) {
                            if (e.x || e.y) return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
                            this.pub = this.ec.curve.decodePoint(e, t)
                        }, o.prototype.derive = function(e) {
                            return e.mul(this.priv).getX()
                        }, o.prototype.sign = function(e, t, r) {
                            return this.ec.sign(e, this, t, r)
                        }, o.prototype.verify = function(e, t) {
                            return this.ec.verify(e, t, this)
                        }, o.prototype.inspect = function() {
                            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                        }
                    }, {
                        "../utils": 24,
                        "bn.js": 9
                    }],
                    21: [function(e, t, r) {
                        "use strict";
                        var n = e("bn.js"),
                            i = e("../utils"),
                            o = i.assert;

                        function s(e, t) {
                            if (e instanceof s) return e;
                            this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
                        }

                        function a() {
                            this.place = 0
                        }

                        function u(e, t) {
                            var r = e[t.place++];
                            if (!(128 & r)) return r;
                            for (var n = 15 & r, i = 0, o = 0, s = t.place; o < n; o++, s++) i <<= 8, i |= e[s];
                            return t.place = s, i
                        }

                        function l(e) {
                            for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
                            return 0 === t ? e : e.slice(t)
                        }

                        function h(e, t) {
                            if (t < 128) e.push(t);
                            else {
                                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                                for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                                e.push(t)
                            }
                        }(t.exports = s).prototype._importDER = function(e, t) {
                            e = i.toArray(e, t);
                            var r = new a;
                            if (48 !== e[r.place++]) return !1;
                            if (u(e, r) + r.place !== e.length) return !1;
                            if (2 !== e[r.place++]) return !1;
                            var o = u(e, r),
                                s = e.slice(r.place, o + r.place);
                            if (r.place += o, 2 !== e[r.place++]) return !1;
                            var l = u(e, r);
                            if (e.length !== l + r.place) return !1;
                            var h = e.slice(r.place, l + r.place);
                            return 0 === s[0] && 128 & s[1] && (s = s.slice(1)), 0 === h[0] && 128 & h[1] && (h = h.slice(1)), this.r = new n(s), this.s = new n(h), !(this.recoveryParam = null)
                        }, s.prototype.toDER = function(e) {
                            var t = this.r.toArray(),
                                r = this.s.toArray();
                            for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = l(t), r = l(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
                            var n = [2];
                            h(n, t.length), (n = n.concat(t)).push(2), h(n, r.length);
                            var o = n.concat(r),
                                s = [48];
                            return h(s, o.length), s = s.concat(o), i.encode(s, e)
                        }
                    }, {
                        "../utils": 24,
                        "bn.js": 9
                    }],
                    22: [function(e, t, r) {
                        arguments[4][14][0].apply(r, arguments)
                    }, {
                        dup: 14
                    }],
                    23: [function(e, t, r) {
                        t.exports = void 0
                    }, {}],
                    24: [function(e, t, r) {
                        "use strict";
                        var n = r,
                            i = e("bn.js"),
                            o = e("minimalistic-assert"),
                            s = e("minimalistic-crypto-utils");
                        n.assert = o, n.toArray = s.toArray, n.zero2 = s.zero2, n.toHex = s.toHex, n.encode = s.encode, n.getNAF = function(e, t, r) {
                            var n = new Array(Math.max(e.bitLength(), r) + 1);
                            n.fill(0);
                            for (var i = 1 << t + 1, o = e.clone(), s = 0; s < n.length; s++) {
                                var a, u = o.andln(i - 1);
                                o.isOdd() ? (a = (i >> 1) - 1 < u ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                            }
                            return n
                        }, n.getJSF = function(e, t) {
                            var r = [
                                [],
                                []
                            ];
                            e = e.clone(), t = t.clone();
                            for (var n = 0, i = 0; 0 < e.cmpn(-n) || 0 < t.cmpn(-i);) {
                                var o, s, a, u = e.andln(3) + n & 3,
                                    l = t.andln(3) + i & 3;
                                3 === u && (u = -1), 3 === l && (l = -1), o = 0 == (1 & u) ? 0 : 3 !== (a = e.andln(7) + n & 7) && 5 !== a || 2 !== l ? u : -u, r[0].push(o), s = 0 == (1 & l) ? 0 : 3 !== (a = t.andln(7) + i & 7) && 5 !== a || 2 !== u ? l : -l, r[1].push(s), 2 * n === o + 1 && (n = 1 - n), 2 * i === s + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
                            }
                            return r
                        }, n.cachedProperty = function(e, t, r) {
                            var n = "_" + t;
                            e.prototype[t] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                            }
                        }, n.parseBytes = function(e) {
                            return "string" == typeof e ? n.toArray(e, "hex") : e
                        }, n.intFromLE = function(e) {
                            return new i(e, "hex", "le")
                        }
                    }, {
                        "bn.js": 9,
                        "minimalistic-assert": 41,
                        "minimalistic-crypto-utils": 42
                    }],
                    25: [function(e, t, r) {
                        t.exports = {
                            version: "6.5.2"
                        }
                    }, {}],
                    26: [function(e, t, r) {
                        var n = r;
                        n.utils = e("./hash/utils"), n.common = e("./hash/common"), n.sha = e("./hash/sha"), n.ripemd = e("./hash/ripemd"), n.hmac = e("./hash/hmac"), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
                    }, {
                        "./hash/common": 27,
                        "./hash/hmac": 28,
                        "./hash/ripemd": 29,
                        "./hash/sha": 30,
                        "./hash/utils": 37
                    }],
                    27: [function(e, t, r) {
                        "use strict";
                        var n = e("./utils"),
                            i = e("minimalistic-assert");

                        function o() {
                            this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
                        }(r.BlockHash = o).prototype.update = function(e, t) {
                            if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                                var r = (e = this.pending).length % this._delta8;
                                this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
                                for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
                            }
                            return this
                        }, o.prototype.digest = function(e) {
                            return this.update(this._pad()), i(null === this.pending), this._digest(e)
                        }, o.prototype._pad = function() {
                            var e = this.pendingTotal,
                                t = this._delta8,
                                r = t - (e + this.padLength) % t,
                                n = new Array(r + this.padLength);
                            n[0] = 128;
                            for (var i = 1; i < r; i++) n[i] = 0;
                            if (e <<= 3, "big" === this.endian) {
                                for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                                n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
                            } else
                                for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
                            return n
                        }
                    }, {
                        "./utils": 37,
                        "minimalistic-assert": 41
                    }],
                    28: [function(e, t, r) {
                        "use strict";
                        var n = e("./utils"),
                            i = e("minimalistic-assert");

                        function o(e, t, r) {
                            if (!(this instanceof o)) return new o(e, t, r);
                            this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r))
                        }(t.exports = o).prototype._init = function(e) {
                            e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize);
                            for (var t = e.length; t < this.blockSize; t++) e.push(0);
                            for (t = 0; t < e.length; t++) e[t] ^= 54;
                            for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
                            this.outer = (new this.Hash).update(e)
                        }, o.prototype.update = function(e, t) {
                            return this.inner.update(e, t), this
                        }, o.prototype.digest = function(e) {
                            return this.outer.update(this.inner.digest()), this.outer.digest(e)
                        }
                    }, {
                        "./utils": 37,
                        "minimalistic-assert": 41
                    }],
                    29: [function(e, t, r) {
                        "use strict";
                        var n = e("./utils"),
                            i = e("./common"),
                            o = n.rotl32,
                            s = n.sum32,
                            a = n.sum32_3,
                            u = n.sum32_4,
                            l = i.BlockHash;

                        function h() {
                            if (!(this instanceof h)) return new h;
                            l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
                        }

                        function f(e, t, r, n) {
                            return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
                        }

                        function c(e) {
                            return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
                        }

                        function d(e) {
                            return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
                        }
                        n.inherits(h, l), (r.ripemd160 = h).blockSize = 512, h.outSize = 160, h.hmacStrength = 192, h.padLength = 64, h.prototype._update = function(e, t) {
                            for (var r = this.h[0], n = this.h[1], i = this.h[2], l = this.h[3], h = this.h[4], g = r, b = n, w = i, _ = l, M = h, A = 0; A < 80; A++) {
                                var E = s(o(u(r, f(A, n, i, l), e[p[A] + t], c(A)), y[A]), h);
                                r = h, h = l, l = o(i, 10), i = n, n = E, E = s(o(u(g, f(79 - A, b, w, _), e[v[A] + t], d(A)), m[A]), M), g = M, M = _, _ = o(w, 10), w = b, b = E
                            }
                            E = a(this.h[1], i, _), this.h[1] = a(this.h[2], l, M), this.h[2] = a(this.h[3], h, g), this.h[3] = a(this.h[4], r, b), this.h[4] = a(this.h[0], n, w), this.h[0] = E
                        }, h.prototype._digest = function(e) {
                            return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
                        };
                        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                            v = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                            y = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                            m = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
                    }, {
                        "./common": 27,
                        "./utils": 37
                    }],
                    30: [function(e, t, r) {
                        "use strict";
                        r.sha1 = e("./sha/1"), r.sha224 = e("./sha/224"), r.sha256 = e("./sha/256"), r.sha384 = e("./sha/384"), r.sha512 = e("./sha/512")
                    }, {
                        "./sha/1": 31,
                        "./sha/224": 32,
                        "./sha/256": 33,
                        "./sha/384": 34,
                        "./sha/512": 35
                    }],
                    31: [function(e, t, r) {
                        arguments[4][14][0].apply(r, arguments)
                    }, {
                        dup: 14
                    }],
                    32: [function(e, t, r) {
                        arguments[4][14][0].apply(r, arguments)
                    }, {
                        dup: 14
                    }],
                    33: [function(e, t, r) {
                        "use strict";
                        var n = e("../utils"),
                            i = e("../common"),
                            o = e("./common"),
                            s = e("minimalistic-assert"),
                            a = n.sum32,
                            u = n.sum32_4,
                            l = n.sum32_5,
                            h = o.ch32,
                            f = o.maj32,
                            c = o.s0_256,
                            d = o.s1_256,
                            p = o.g0_256,
                            v = o.g1_256,
                            y = i.BlockHash,
                            m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                        function g() {
                            if (!(this instanceof g)) return new g;
                            y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = m, this.W = new Array(64)
                        }
                        n.inherits(g, y), (t.exports = g).blockSize = 512, g.outSize = 256, g.hmacStrength = 192, g.padLength = 64, g.prototype._update = function(e, t) {
                            for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
                            for (; n < r.length; n++) r[n] = u(v(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                            var i = this.h[0],
                                o = this.h[1],
                                y = this.h[2],
                                m = this.h[3],
                                g = this.h[4],
                                b = this.h[5],
                                w = this.h[6],
                                _ = this.h[7];
                            for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                                var M = l(_, d(g), h(g, b, w), this.k[n], r[n]),
                                    A = a(c(i), f(i, o, y));
                                _ = w, w = b, b = g, g = a(m, M), m = y, y = o, o = i, i = a(M, A)
                            }
                            this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], y), this.h[3] = a(this.h[3], m), this.h[4] = a(this.h[4], g), this.h[5] = a(this.h[5], b), this.h[6] = a(this.h[6], w), this.h[7] = a(this.h[7], _)
                        }, g.prototype._digest = function(e) {
                            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
                        }
                    }, {
                        "../common": 27,
                        "../utils": 37,
                        "./common": 36,
                        "minimalistic-assert": 41
                    }],
                    34: [function(e, t, r) {
                        arguments[4][14][0].apply(r, arguments)
                    }, {
                        dup: 14
                    }],
                    35: [function(e, t, r) {
                        "use strict";
                        var n = e("../utils"),
                            i = e("../common"),
                            o = e("minimalistic-assert"),
                            s = n.rotr64_hi,
                            a = n.rotr64_lo,
                            u = n.shr64_hi,
                            l = n.shr64_lo,
                            h = n.sum64,
                            f = n.sum64_hi,
                            c = n.sum64_lo,
                            d = n.sum64_4_hi,
                            p = n.sum64_4_lo,
                            v = n.sum64_5_hi,
                            y = n.sum64_5_lo,
                            m = i.BlockHash,
                            g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                        function b() {
                            if (!(this instanceof b)) return new b;
                            m.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = g, this.W = new Array(160)
                        }

                        function w(e, t, r, n, i) {
                            var o = e & r ^ ~e & i;
                            return o < 0 && (o += 4294967296), o
                        }

                        function _(e, t, r, n, i, o) {
                            var s = t & n ^ ~t & o;
                            return s < 0 && (s += 4294967296), s
                        }

                        function M(e, t, r, n, i) {
                            var o = e & r ^ e & i ^ r & i;
                            return o < 0 && (o += 4294967296), o
                        }

                        function A(e, t, r, n, i, o) {
                            var s = t & n ^ t & o ^ n & o;
                            return s < 0 && (s += 4294967296), s
                        }

                        function E(e, t) {
                            var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }

                        function S(e, t) {
                            var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }

                        function k(e, t) {
                            var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
                            return r < 0 && (r += 4294967296), r
                        }

                        function N(e, t) {
                            var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                            return r < 0 && (r += 4294967296), r
                        }

                        function x(e, t) {
                            var r = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }

                        function P(e, t) {
                            var r = a(e, t, 1) ^ a(e, t, 8) ^ l(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }

                        function I(e, t) {
                            var r = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
                            return r < 0 && (r += 4294967296), r
                        }

                        function T(e, t) {
                            var r = a(e, t, 19) ^ a(t, e, 29) ^ l(e, t, 6);
                            return r < 0 && (r += 4294967296), r
                        }
                        n.inherits(b, m), (t.exports = b).blockSize = 1024, b.outSize = 512, b.hmacStrength = 192, b.padLength = 128, b.prototype._prepareBlock = function(e, t) {
                            for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
                            for (; n < r.length; n += 2) {
                                var i = I(r[n - 4], r[n - 3]),
                                    o = T(r[n - 4], r[n - 3]),
                                    s = r[n - 14],
                                    a = r[n - 13],
                                    u = x(r[n - 30], r[n - 29]),
                                    l = P(r[n - 30], r[n - 29]),
                                    h = r[n - 32],
                                    f = r[n - 31];
                                r[n] = d(i, o, s, a, u, l, h, f), r[n + 1] = p(i, o, s, a, u, l, h, f)
                            }
                        }, b.prototype._update = function(e, t) {
                            this._prepareBlock(e, t);
                            var r = this.W,
                                n = this.h[0],
                                i = this.h[1],
                                s = this.h[2],
                                a = this.h[3],
                                u = this.h[4],
                                l = this.h[5],
                                d = this.h[6],
                                p = this.h[7],
                                m = this.h[8],
                                g = this.h[9],
                                b = this.h[10],
                                x = this.h[11],
                                P = this.h[12],
                                I = this.h[13],
                                T = this.h[14],
                                R = this.h[15];
                            o(this.k.length === r.length);
                            for (var O = 0; O < r.length; O += 2) {
                                var C = T,
                                    L = R,
                                    D = k(m, g),
                                    B = N(m, g),
                                    U = w(m, g, b, x, P),
                                    F = _(m, g, b, x, P, I),
                                    j = this.k[O],
                                    G = this.k[O + 1],
                                    H = r[O],
                                    z = r[O + 1],
                                    V = v(C, L, D, B, U, F, j, G, H, z),
                                    K = y(C, L, D, B, U, F, j, G, H, z);
                                C = E(n, i), L = S(n, i), D = M(n, i, s, a, u), B = A(n, i, s, a, u, l);
                                var q = f(C, L, D, B),
                                    W = c(C, L, D, B);
                                T = P, R = I, P = b, I = x, b = m, x = g, m = f(d, p, V, K), g = c(p, p, V, K), d = u, p = l, u = s, l = a, s = n, a = i, n = f(V, K, q, W), i = c(V, K, q, W)
                            }
                            h(this.h, 0, n, i), h(this.h, 2, s, a), h(this.h, 4, u, l), h(this.h, 6, d, p), h(this.h, 8, m, g), h(this.h, 10, b, x), h(this.h, 12, P, I), h(this.h, 14, T, R)
                        }, b.prototype._digest = function(e) {
                            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
                        }
                    }, {
                        "../common": 27,
                        "../utils": 37,
                        "minimalistic-assert": 41
                    }],
                    36: [function(e, t, r) {
                        "use strict";
                        var n = e("../utils").rotr32;

                        function i(e, t, r) {
                            return e & t ^ ~e & r
                        }

                        function o(e, t, r) {
                            return e & t ^ e & r ^ t & r
                        }

                        function s(e, t, r) {
                            return e ^ t ^ r
                        }
                        r.ft_1 = function(e, t, r, n) {
                            return 0 === e ? i(t, r, n) : 1 === e || 3 === e ? s(t, r, n) : 2 === e ? o(t, r, n) : void 0
                        }, r.ch32 = i, r.maj32 = o, r.p32 = s, r.s0_256 = function(e) {
                            return n(e, 2) ^ n(e, 13) ^ n(e, 22)
                        }, r.s1_256 = function(e) {
                            return n(e, 6) ^ n(e, 11) ^ n(e, 25)
                        }, r.g0_256 = function(e) {
                            return n(e, 7) ^ n(e, 18) ^ e >>> 3
                        }, r.g1_256 = function(e) {
                            return n(e, 17) ^ n(e, 19) ^ e >>> 10
                        }
                    }, {
                        "../utils": 37
                    }],
                    37: [function(e, t, r) {
                        "use strict";
                        var n = e("minimalistic-assert"),
                            i = e("inherits");

                        function o(e) {
                            return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
                        }

                        function s(e) {
                            return 1 === e.length ? "0" + e : e
                        }

                        function a(e) {
                            return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
                        }
                        r.inherits = i, r.toArray = function(e, t) {
                            if (Array.isArray(e)) return e.slice();
                            if (!e) return [];
                            var r = [];
                            if ("string" == typeof e)
                                if (t) {
                                    if ("hex" === t)
                                        for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                                } else
                                    for (var n = 0; n < e.length; n++) {
                                        var i = e.charCodeAt(n),
                                            o = i >> 8,
                                            s = 255 & i;
                                        o ? r.push(o, s) : r.push(s)
                                    } else
                                        for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
                            return r
                        }, r.toHex = function(e) {
                            for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
                            return t
                        }, r.htonl = o, r.toHex32 = function(e, t) {
                            for (var r = "", n = 0; n < e.length; n++) {
                                var i = e[n];
                                "little" === t && (i = o(i)), r += a(i.toString(16))
                            }
                            return r
                        }, r.zero2 = s, r.zero8 = a, r.join32 = function(e, t, r, i) {
                            var o = r - t;
                            n(o % 4 == 0);
                            for (var s = new Array(o / 4), a = 0, u = t; a < s.length; a++, u += 4) {
                                var l;
                                l = "big" === i ? e[u] << 24 | e[u + 1] << 16 | e[u + 2] << 8 | e[u + 3] : e[u + 3] << 24 | e[u + 2] << 16 | e[u + 1] << 8 | e[u], s[a] = l >>> 0
                            }
                            return s
                        }, r.split32 = function(e, t) {
                            for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
                                var o = e[n];
                                "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
                            }
                            return r
                        }, r.rotr32 = function(e, t) {
                            return e >>> t | e << 32 - t
                        }, r.rotl32 = function(e, t) {
                            return e << t | e >>> 32 - t
                        }, r.sum32 = function(e, t) {
                            return e + t >>> 0
                        }, r.sum32_3 = function(e, t, r) {
                            return e + t + r >>> 0
                        }, r.sum32_4 = function(e, t, r, n) {
                            return e + t + r + n >>> 0
                        }, r.sum32_5 = function(e, t, r, n, i) {
                            return e + t + r + n + i >>> 0
                        }, r.sum64 = function(e, t, r, n) {
                            var i = e[t],
                                o = n + e[t + 1] >>> 0,
                                s = (o < n ? 1 : 0) + r + i;
                            e[t] = s >>> 0, e[t + 1] = o
                        }, r.sum64_hi = function(e, t, r, n) {
                            return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
                        }, r.sum64_lo = function(e, t, r, n) {
                            return t + n >>> 0
                        }, r.sum64_4_hi = function(e, t, r, n, i, o, s, a) {
                            var u = 0,
                                l = t;
                            return u += (l = l + n >>> 0) < t ? 1 : 0, u += (l = l + o >>> 0) < o ? 1 : 0, e + r + i + s + (u += (l = l + a >>> 0) < a ? 1 : 0) >>> 0
                        }, r.sum64_4_lo = function(e, t, r, n, i, o, s, a) {
                            return t + n + o + a >>> 0
                        }, r.sum64_5_hi = function(e, t, r, n, i, o, s, a, u, l) {
                            var h = 0,
                                f = t;
                            return h += (f = f + n >>> 0) < t ? 1 : 0, h += (f = f + o >>> 0) < o ? 1 : 0, h += (f = f + a >>> 0) < a ? 1 : 0, e + r + i + s + u + (h += (f = f + l >>> 0) < l ? 1 : 0) >>> 0
                        }, r.sum64_5_lo = function(e, t, r, n, i, o, s, a, u, l) {
                            return t + n + o + a + l >>> 0
                        }, r.rotr64_hi = function(e, t, r) {
                            return (t << 32 - r | e >>> r) >>> 0
                        }, r.rotr64_lo = function(e, t, r) {
                            return (e << 32 - r | t >>> r) >>> 0
                        }, r.shr64_hi = function(e, t, r) {
                            return e >>> r
                        }, r.shr64_lo = function(e, t, r) {
                            return (e << 32 - r | t >>> r) >>> 0
                        }
                    }, {
                        inherits: 39,
                        "minimalistic-assert": 41
                    }],
                    38: [function(e, t, r) {
                        "use strict";
                        var n = e("hash.js"),
                            i = e("minimalistic-crypto-utils"),
                            o = e("minimalistic-assert");

                        function s(e) {
                            if (!(this instanceof s)) return new s(e);
                            this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                            var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
                                r = i.toArray(e.nonce, e.nonceEnc || "hex"),
                                n = i.toArray(e.pers, e.persEnc || "hex");
                            o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
                        }(t.exports = s).prototype._init = function(e, t, r) {
                            var n = e.concat(t).concat(r);
                            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                            for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                            this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                        }, s.prototype._hmac = function() {
                            return new n.hmac(this.hash, this.K)
                        }, s.prototype._update = function(e) {
                            var t = this._hmac().update(this.V).update([0]);
                            e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
                        }, s.prototype.reseed = function(e, t, r, n) {
                            "string" != typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
                        }, s.prototype.generate = function(e, t, r, n) {
                            if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                            "string" != typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r));
                            for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
                            var s = o.slice(0, e);
                            return this._update(r), this._reseed++, i.encode(s, t)
                        }
                    }, {
                        "hash.js": 26,
                        "minimalistic-assert": 41,
                        "minimalistic-crypto-utils": 42
                    }],
                    39: [function(e, t, r) {
                        "function" == typeof Object.create ? t.exports = function(e, t) {
                            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function(e, t) {
                            if (t) {
                                function r() {}
                                e.super_ = t, r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                            }
                        }
                    }, {}],
                    40: [function(e, r, n) {
                        (function(e, t) {
                            ! function() {
                                "use strict";
                                var n = "object" == typeof window ? window : {};
                                !n.JS_SHA3_NO_NODE_JS && "object" == typeof e && e.versions && e.versions.node && (n = t);
                                for (var i = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof r && r.exports, o = "0123456789abcdef".split(""), s = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], u = [224, 256, 384, 512], l = ["hex", "buffer", "arrayBuffer", "array"], h = function(e, t, r) {
                                        return function(n) {
                                            return new _(e, t, e).update(n)[r]()
                                        }
                                    }, f = function(e, t, r) {
                                        return function(n, i) {
                                            return new _(e, t, i).update(n)[r]()
                                        }
                                    }, c = function(e, t) {
                                        var r = h(e, t, "hex");
                                        r.create = function() {
                                            return new _(e, t, e)
                                        }, r.update = function(e) {
                                            return r.create().update(e)
                                        };
                                        for (var n = 0; n < l.length; ++n) {
                                            var i = l[n];
                                            r[i] = h(e, t, i)
                                        }
                                        return r
                                    }, d = [{
                                        name: "keccak",
                                        padding: [1, 256, 65536, 16777216],
                                        bits: u,
                                        createMethod: c
                                    }, {
                                        name: "sha3",
                                        padding: [6, 1536, 393216, 100663296],
                                        bits: u,
                                        createMethod: c
                                    }, {
                                        name: "shake",
                                        padding: [31, 7936, 2031616, 520093696],
                                        bits: [128, 256],
                                        createMethod: function(e, t) {
                                            var r = f(e, t, "hex");
                                            r.create = function(r) {
                                                return new _(e, t, r)
                                            }, r.update = function(e, t) {
                                                return r.create(t).update(e)
                                            };
                                            for (var n = 0; n < l.length; ++n) {
                                                var i = l[n];
                                                r[i] = f(e, t, i)
                                            }
                                            return r
                                        }
                                    }], p = {}, v = [], y = 0; y < d.length; ++y)
                                    for (var m = d[y], g = m.bits, b = 0; b < g.length; ++b) {
                                        var w = m.name + "_" + g[b];
                                        v.push(w), p[w] = m.createMethod(g[b], m.padding)
                                    }

                                function _(e, t, r) {
                                    this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                                }
                                _.prototype.update = function(e) {
                                    var t = "string" != typeof e;
                                    t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
                                    for (var r, n, i = e.length, o = this.blocks, a = this.byteCount, u = this.blockCount, l = 0, h = this.s; l < i;) {
                                        if (this.reset)
                                            for (this.reset = !1, o[0] = this.block, r = 1; r < u + 1; ++r) o[r] = 0;
                                        if (t)
                                            for (r = this.start; l < i && r < a; ++l) o[r >> 2] |= e[l] << s[3 & r++];
                                        else
                                            for (r = this.start; l < i && r < a; ++l)(n = e.charCodeAt(l)) < 128 ? o[r >> 2] |= n << s[3 & r++] : (n < 2048 ? o[r >> 2] |= (192 | n >> 6) << s[3 & r++] : (n < 55296 || 57344 <= n ? o[r >> 2] |= (224 | n >> 12) << s[3 & r++] : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++l)), o[r >> 2] |= (240 | n >> 18) << s[3 & r++], o[r >> 2] |= (128 | n >> 12 & 63) << s[3 & r++]), o[r >> 2] |= (128 | n >> 6 & 63) << s[3 & r++]), o[r >> 2] |= (128 | 63 & n) << s[3 & r++]);
                                        if (a <= (this.lastByteIndex = r)) {
                                            for (this.start = r - a, this.block = o[u], r = 0; r < u; ++r) h[r] ^= o[r];
                                            M(h), this.reset = !0
                                        } else this.start = r
                                    }
                                    return this
                                }, _.prototype.finalize = function() {
                                    var e = this.blocks,
                                        t = this.lastByteIndex,
                                        r = this.blockCount,
                                        n = this.s;
                                    if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                                        for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                                    for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                                    M(n)
                                }, _.prototype.toString = _.prototype.hex = function() {
                                    this.finalize();
                                    for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, s = 0, a = 0, u = ""; a < n;) {
                                        for (s = 0; s < t && a < n; ++s, ++a) e = r[s], u += o[e >> 4 & 15] + o[15 & e] + o[e >> 12 & 15] + o[e >> 8 & 15] + o[e >> 20 & 15] + o[e >> 16 & 15] + o[e >> 28 & 15] + o[e >> 24 & 15];
                                        a % t == 0 && (M(r), s = 0)
                                    }
                                    return i && (e = r[s], 0 < i && (u += o[e >> 4 & 15] + o[15 & e]), 1 < i && (u += o[e >> 12 & 15] + o[e >> 8 & 15]), 2 < i && (u += o[e >> 20 & 15] + o[e >> 16 & 15])), u
                                }, _.prototype.buffer = _.prototype.arrayBuffer = function() {
                                    this.finalize();
                                    var e, t = this.blockCount,
                                        r = this.s,
                                        n = this.outputBlocks,
                                        i = this.extraBytes,
                                        o = 0,
                                        s = 0,
                                        a = this.outputBits >> 3;
                                    e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);
                                    for (var u = new Uint32Array(e); s < n;) {
                                        for (o = 0; o < t && s < n; ++o, ++s) u[s] = r[o];
                                        s % t == 0 && M(r)
                                    }
                                    return i && (u[o] = r[o], e = e.slice(0, a)), e
                                }, _.prototype.digest = _.prototype.array = function() {
                                    this.finalize();
                                    for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, u = []; a < i;) {
                                        for (s = 0; s < r && a < i; ++s, ++a) e = a << 2, t = n[s], u[e] = 255 & t, u[e + 1] = t >> 8 & 255, u[e + 2] = t >> 16 & 255, u[e + 3] = t >> 24 & 255;
                                        a % r == 0 && M(n)
                                    }
                                    return o && (e = a << 2, t = n[s], 0 < o && (u[e] = 255 & t), 1 < o && (u[e + 1] = t >> 8 & 255), 2 < o && (u[e + 2] = t >> 16 & 255)), u
                                };
                                var M = function(e) {
                                    var t, r, n, i, o, s, u, l, h, f, c, d, p, v, y, m, g, b, w, _, M, A, E, S, k, N, x, P, I, T, R, O, C, L, D, B, U, F, j, G, H, z, V, K, q, W, Z, J, X, $, Q, Y, ee, te, re, ne, ie, oe, se, ae, ue, le, he;
                                    for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], u = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], h = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | u >>> 31), r = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (u << 1 | s >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (l << 1 | h >>> 31), r = o ^ (h << 1 | l >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = s ^ (f << 1 | c >>> 31), r = u ^ (c << 1 | f >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = l ^ (d << 1 | p >>> 31), r = h ^ (p << 1 | d >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = f ^ (i << 1 | o >>> 31), r = c ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, v = e[0], y = e[1], W = e[11] << 4 | e[10] >>> 28, Z = e[10] << 4 | e[11] >>> 28, P = e[20] << 3 | e[21] >>> 29, I = e[21] << 3 | e[20] >>> 29, ae = e[31] << 9 | e[30] >>> 23, ue = e[30] << 9 | e[31] >>> 23, z = e[40] << 18 | e[41] >>> 14, V = e[41] << 18 | e[40] >>> 14, L = e[2] << 1 | e[3] >>> 31, D = e[3] << 1 | e[2] >>> 31, m = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, J = e[22] << 10 | e[23] >>> 22, X = e[23] << 10 | e[22] >>> 22, T = e[33] << 13 | e[32] >>> 19, R = e[32] << 13 | e[33] >>> 19, le = e[42] << 2 | e[43] >>> 30, he = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, B = e[14] << 6 | e[15] >>> 26, U = e[15] << 6 | e[14] >>> 26, b = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, $ = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, O = e[45] << 29 | e[44] >>> 3, C = e[44] << 29 | e[45] >>> 3, S = e[6] << 28 | e[7] >>> 4, k = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, F = e[26] << 25 | e[27] >>> 7, j = e[27] << 25 | e[26] >>> 7, _ = e[36] << 21 | e[37] >>> 11, M = e[37] << 21 | e[36] >>> 11, Y = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, K = e[8] << 27 | e[9] >>> 5, q = e[9] << 27 | e[8] >>> 5, N = e[18] << 20 | e[19] >>> 12, x = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, G = e[38] << 8 | e[39] >>> 24, H = e[39] << 8 | e[38] >>> 24, A = e[48] << 14 | e[49] >>> 18, E = e[49] << 14 | e[48] >>> 18, e[0] = v ^ ~m & b, e[1] = y ^ ~g & w, e[10] = S ^ ~N & P, e[11] = k ^ ~x & I, e[20] = L ^ ~B & F, e[21] = D ^ ~U & j, e[30] = K ^ ~W & J, e[31] = q ^ ~Z & X, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & se, e[2] = m ^ ~b & _, e[3] = g ^ ~w & M, e[12] = N ^ ~P & T, e[13] = x ^ ~I & R, e[22] = B ^ ~F & G, e[23] = U ^ ~j & H, e[32] = W ^ ~J & $, e[33] = Z ^ ~X & Q, e[42] = ne ^ ~oe & ae, e[43] = ie ^ ~se & ue, e[4] = b ^ ~_ & A, e[5] = w ^ ~M & E, e[14] = P ^ ~T & O, e[15] = I ^ ~R & C, e[24] = F ^ ~G & z, e[25] = j ^ ~H & V, e[34] = J ^ ~$ & Y, e[35] = X ^ ~Q & ee, e[44] = oe ^ ~ae & le, e[45] = se ^ ~ue & he, e[6] = _ ^ ~A & v, e[7] = M ^ ~E & y, e[16] = T ^ ~O & S, e[17] = R ^ ~C & k, e[26] = G ^ ~z & L, e[27] = H ^ ~V & D, e[36] = $ ^ ~Y & K, e[37] = Q ^ ~ee & q, e[46] = ae ^ ~le & te, e[47] = ue ^ ~he & re, e[8] = A ^ ~v & m, e[9] = E ^ ~y & g, e[18] = O ^ ~S & N, e[19] = C ^ ~k & x, e[28] = z ^ ~L & B, e[29] = V ^ ~D & U, e[38] = Y ^ ~K & W, e[39] = ee ^ ~q & Z, e[48] = le ^ ~te & ne, e[49] = he ^ ~re & ie, e[0] ^= a[n], e[1] ^= a[n + 1]
                                };
                                if (i) r.exports = p;
                                else
                                    for (y = 0; y < v.length; ++y) n[v[y]] = p[v[y]]
                            }()
                        }).call(this, e("_process"), "undefined" != typeof t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        _process: 43
                    }],
                    41: [function(e, t, r) {
                        function n(e, t) {
                            if (!e) throw new Error(t || "Assertion failed")
                        }(t.exports = n).equal = function(e, t, r) {
                            if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
                        }
                    }, {}],
                    42: [function(e, t, r) {
                        "use strict";
                        var n = r;

                        function i(e) {
                            return 1 === e.length ? "0" + e : e
                        }

                        function o(e) {
                            for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16));
                            return t
                        }
                        n.toArray = function(e, t) {
                            if (Array.isArray(e)) return e.slice();
                            if (!e) return [];
                            var r = [];
                            if ("string" != typeof e) {
                                for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                                return r
                            }
                            if ("hex" === t)
                                for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16));
                            else
                                for (n = 0; n < e.length; n++) {
                                    var i = e.charCodeAt(n),
                                        o = i >> 8,
                                        s = 255 & i;
                                    o ? r.push(o, s) : r.push(s)
                                }
                            return r
                        }, n.zero2 = i, n.toHex = o, n.encode = function(e, t) {
                            return "hex" === t ? o(e) : e
                        }
                    }, {}],
                    43: [function(e, t, r) {
                        t.exports = {
                            browser: !0
                        }
                    }, {}],
                    44: [function(e, t, r) {
                        (function(e) {
                            "use strict";

                            function n(e) {
                                var t = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                                    r = 1779033703,
                                    n = 3144134277,
                                    i = 1013904242,
                                    o = 2773480762,
                                    s = 1359893119,
                                    a = 2600822924,
                                    u = 528734635,
                                    l = 1541459225,
                                    h = new Array(64);

                                function f(e) {
                                    for (var f = 0, c = e.length; 64 <= c;) {
                                        var d, p, v, y, m, g = r,
                                            b = n,
                                            w = i,
                                            _ = o,
                                            M = s,
                                            A = a,
                                            E = u,
                                            S = l;
                                        for (p = 0; p < 16; p++) v = f + 4 * p, h[p] = (255 & e[v]) << 24 | (255 & e[v + 1]) << 16 | (255 & e[v + 2]) << 8 | 255 & e[v + 3];
                                        for (p = 16; p < 64; p++) y = ((d = h[p - 2]) >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10, m = ((d = h[p - 15]) >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3, h[p] = (y + h[p - 7] | 0) + (m + h[p - 16] | 0) | 0;
                                        for (p = 0; p < 64; p++) y = (((M >>> 6 | M << 26) ^ (M >>> 11 | M << 21) ^ (M >>> 25 | M << 7)) + (M & A ^ ~M & E) | 0) + (S + (t[p] + h[p] | 0) | 0) | 0, m = ((g >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10)) + (g & b ^ g & w ^ b & w) | 0, S = E, E = A, A = M, M = _ + y | 0, _ = w, w = b, b = g, g = y + m | 0;
                                        r = r + g | 0, n = n + b | 0, i = i + w | 0, o = o + _ | 0, s = s + M | 0, a = a + A | 0, u = u + E | 0, l = l + S | 0, f += 64, c -= 64
                                    }
                                }
                                f(e);
                                var c, d = e.length % 64,
                                    p = e.length / 536870912 | 0,
                                    v = e.length << 3,
                                    y = d < 56 ? 56 : 120,
                                    m = e.slice(e.length - d, e.length);
                                for (m.push(128), c = 1 + d; c < y; c++) m.push(0);
                                return m.push(p >>> 24 & 255), m.push(p >>> 16 & 255), m.push(p >>> 8 & 255), m.push(p >>> 0 & 255), m.push(v >>> 24 & 255), m.push(v >>> 16 & 255), m.push(v >>> 8 & 255), m.push(v >>> 0 & 255), f(m), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u >>> 0 & 255, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, l >>> 0 & 255]
                            }

                            function i(e, t, r) {
                                var i;
                                e = e.length <= 64 ? e : n(e);
                                var o = 64 + t.length + 4,
                                    s = new Array(o),
                                    a = new Array(64),
                                    u = [];
                                for (i = 0; i < 64; i++) s[i] = 54;
                                for (i = 0; i < e.length; i++) s[i] ^= e[i];
                                for (i = 0; i < t.length; i++) s[64 + i] = t[i];
                                for (i = o - 4; i < o; i++) s[i] = 0;
                                for (i = 0; i < 64; i++) a[i] = 92;
                                for (i = 0; i < e.length; i++) a[i] ^= e[i];

                                function l() {
                                    for (var e = o - 1; o - 4 <= e; e--) {
                                        if (s[e]++, s[e] <= 255) return;
                                        s[e] = 0
                                    }
                                }
                                for (; 32 <= r;) l(), u = u.concat(n(a.concat(n(s)))), r -= 32;
                                return 0 < r && (l(), u = u.concat(n(a.concat(n(s))).slice(0, r))), u
                            }

                            function o(e, t, r, n, i) {
                                var o;
                                for (l(e, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++) u(e, 16 * o, i, 16), a(i, n), l(i, 0, e, t + 16 * o, 16);
                                for (o = 0; o < r; o++) l(e, t + 2 * o * 16, e, 16 * o, 16);
                                for (o = 0; o < r; o++) l(e, t + 16 * (2 * o + 1), e, 16 * (o + r), 16)
                            }

                            function s(e, t) {
                                return e << t | e >>> 32 - t
                            }

                            function a(e, t) {
                                l(e, 0, t, 0, 16);
                                for (var r = 8; 0 < r; r -= 2) t[4] ^= s(t[0] + t[12], 7), t[8] ^= s(t[4] + t[0], 9), t[12] ^= s(t[8] + t[4], 13), t[0] ^= s(t[12] + t[8], 18), t[9] ^= s(t[5] + t[1], 7), t[13] ^= s(t[9] + t[5], 9), t[1] ^= s(t[13] + t[9], 13), t[5] ^= s(t[1] + t[13], 18), t[14] ^= s(t[10] + t[6], 7), t[2] ^= s(t[14] + t[10], 9), t[6] ^= s(t[2] + t[14], 13), t[10] ^= s(t[6] + t[2], 18), t[3] ^= s(t[15] + t[11], 7), t[7] ^= s(t[3] + t[15], 9), t[11] ^= s(t[7] + t[3], 13), t[15] ^= s(t[11] + t[7], 18), t[1] ^= s(t[0] + t[3], 7), t[2] ^= s(t[1] + t[0], 9), t[3] ^= s(t[2] + t[1], 13), t[0] ^= s(t[3] + t[2], 18), t[6] ^= s(t[5] + t[4], 7), t[7] ^= s(t[6] + t[5], 9), t[4] ^= s(t[7] + t[6], 13), t[5] ^= s(t[4] + t[7], 18), t[11] ^= s(t[10] + t[9], 7), t[8] ^= s(t[11] + t[10], 9), t[9] ^= s(t[8] + t[11], 13), t[10] ^= s(t[9] + t[8], 18), t[12] ^= s(t[15] + t[14], 7), t[13] ^= s(t[12] + t[15], 9), t[14] ^= s(t[13] + t[12], 13), t[15] ^= s(t[14] + t[13], 18);
                                for (r = 0; r < 16; ++r) e[r] += t[r]
                            }

                            function u(e, t, r, n) {
                                for (var i = 0; i < n; i++) r[i] ^= e[t + i]
                            }

                            function l(e, t, r, n, i) {
                                for (; i--;) r[n++] = e[t++]
                            }

                            function h(e) {
                                if (!e || "number" != typeof e.length) return !1;
                                for (var t = 0; t < e.length; t++) {
                                    if ("number" != typeof e[t]) return !1;
                                    var r = parseInt(e[t]);
                                    if (r != e[t] || r < 0 || 256 <= r) return !1
                                }
                                return !0
                            }

                            function f(e, t) {
                                var r = parseInt(e);
                                if (e != r) throw new Error("invalid " + t);
                                return r
                            }

                            function c(t, r, n, s, a, c, d) {
                                if (!d) throw new Error("missing callback");
                                if (n = f(n, "N"), s = f(s, "r"), a = f(a, "p"), c = f(c, "dkLen"), 0 === n || 0 != (n & n - 1)) throw new Error("N must be power of 2");
                                if (p / 128 / s < n) throw new Error("N too large");
                                if (p / 128 / a < s) throw new Error("r too large");
                                if (!h(t)) throw new Error("password must be an array or buffer");
                                if (t = Array.prototype.slice.call(t), !h(r)) throw new Error("salt must be an array or buffer");
                                r = Array.prototype.slice.call(r);
                                for (var v = i(t, r, 128 * a * s), y = new Uint32Array(32 * a * s), m = 0; m < y.length; m++) {
                                    var g = 4 * m;
                                    y[m] = (255 & v[3 + g]) << 24 | (255 & v[2 + g]) << 16 | (255 & v[1 + g]) << 8 | (255 & v[0 + g]) << 0
                                }
                                var b, w, _ = new Uint32Array(64 * s),
                                    M = new Uint32Array(32 * s * n),
                                    A = 32 * s,
                                    E = new Uint32Array(16),
                                    S = new Uint32Array(16),
                                    k = a * n * 2,
                                    N = 0,
                                    x = null,
                                    P = !1,
                                    I = 0,
                                    T = 0,
                                    R = parseInt(1e3 / s),
                                    O = void 0 !== e ? e : setTimeout;
                                ! function e() {
                                    if (P) return d(new Error("cancelled"), N / k);
                                    switch (I) {
                                        case 0:
                                            l(y, w = 32 * T * s, _, 0, A), I = 1, b = 0;
                                        case 1:
                                            R < (h = n - b) && (h = R);
                                            for (var r = 0; r < h; r++) l(_, 0, M, (b + r) * A, A), o(_, A, s, E, S);
                                            if (b += h, N += h, (f = parseInt(1e3 * N / k)) !== x) {
                                                if (P = d(null, N / k)) break;
                                                x = f
                                            }
                                            if (b < n) break;
                                            b = 0, I = 2;
                                        case 2:
                                            var h, f;
                                            for (R < (h = n - b) && (h = R), r = 0; r < h; r++) {
                                                var p = _[16 * (2 * s - 1)] & n - 1;
                                                u(M, p * A, _, A), o(_, A, s, E, S)
                                            }
                                            if (b += h, N += h, (f = parseInt(1e3 * N / k)) !== x) {
                                                if (P = d(null, N / k)) break;
                                                x = f
                                            }
                                            if (b < n) break;
                                            if (l(_, 0, y, w, A), ++T < a) {
                                                I = 0;
                                                break
                                            }
                                            for (v = [], r = 0; r < y.length; r++) v.push(y[r] >> 0 & 255), v.push(y[r] >> 8 & 255), v.push(y[r] >> 16 & 255), v.push(y[r] >> 24 & 255);
                                            var m = i(t, v, c);
                                            return d(null, 1, m)
                                    }
                                    O(e)
                                }()
                            }
                            var d, p;
                            d = this, p = 2147483647, void 0 !== r ? t.exports = c : d && (d.scrypt && (d._scrypt = d.scrypt), d.scrypt = c)
                        }).call(this, e("timers").setImmediate)
                    }, {
                        timers: 46
                    }],
                    45: [function(e, r, n) {
                        (function(e, t, r) {
                            ! function(t, r) {
                                "use strict";
                                if (!t.setImmediate) {
                                    var n, i, o, s, a = 1,
                                        u = {},
                                        l = !1,
                                        h = t.document,
                                        f = Object.getPrototypeOf && Object.getPrototypeOf(t);
                                    f = f && f.setTimeout ? f : t, n = "[object process]" === {}.toString.call(t.process) ? function() {
                                        var t = c(arguments);
                                        return e.nextTick(d(p, t)), t
                                    } : function() {
                                        if (t.postMessage && !t.importScripts) {
                                            var e = !0,
                                                r = t.onmessage;
                                            return t.onmessage = function() {
                                                e = !1
                                            }, t.postMessage("", "*"), t.onmessage = r, e
                                        }
                                    }() ? (s = "setImmediate$" + Math.random() + "$", t.addEventListener ? t.addEventListener("message", y, !1) : t.attachEvent("onmessage", y), function() {
                                        var e = c(arguments);
                                        return t.postMessage(s + e, "*"), e
                                    }) : t.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                                        p(e.data)
                                    }, function() {
                                        var e = c(arguments);
                                        return o.port2.postMessage(e), e
                                    }) : h && "onreadystatechange" in h.createElement("script") ? (i = h.documentElement, function() {
                                        var e = c(arguments),
                                            t = h.createElement("script");
                                        return t.onreadystatechange = function() {
                                            p(e), t.onreadystatechange = null, i.removeChild(t), t = null
                                        }, i.appendChild(t), e
                                    }) : function() {
                                        var e = c(arguments);
                                        return setTimeout(d(p, e), 0), e
                                    }, f.setImmediate = n, f.clearImmediate = v
                                }

                                function c(e) {
                                    return u[a] = d.apply(r, e), a++
                                }

                                function d(e) {
                                    var t = [].slice.call(arguments, 1);
                                    return function() {
                                        "function" == typeof e ? e.apply(r, t) : new Function("" + e)()
                                    }
                                }

                                function p(e) {
                                    if (l) setTimeout(d(p, e), 0);
                                    else {
                                        var t = u[e];
                                        if (t) {
                                            l = !0;
                                            try {
                                                t()
                                            } finally {
                                                v(e), l = !1
                                            }
                                        }
                                    }
                                }

                                function v(e) {
                                    delete u[e]
                                }

                                function y(e) {
                                    e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(s) && p(+e.data.slice(s.length))
                                }
                            }("undefined" == typeof self ? void 0 === t ? this : t : self)
                        }).call(this, e("_process"), "undefined" != typeof t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("timers").clearImmediate)
                    }, {
                        _process: 43,
                        timers: 46
                    }],
                    46: [function(e, r, n) {
                        (function(e) {
                            r.exports = {
                                setImmediate: e.setImmediate
                            }
                        }).call(this, "undefined" != typeof t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    47: [function(e, r, n) {
                        (function(e) {
                            var t;
                            if (e.crypto && crypto.getRandomValues) {
                                var n = new Uint8Array(16);
                                t = function() {
                                    return crypto.getRandomValues(n), n
                                }
                            }
                            if (!t) {
                                var i = new Array(16);
                                t = function() {
                                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                                    return i
                                }
                            }
                            r.exports = t
                        }).call(this, "undefined" != typeof t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    48: [function(e, t, r) {
                        for (var n = e("./rng"), i = [], o = {}, s = 0; s < 256; s++) i[s] = (s + 256).toString(16).substr(1), o[i[s]] = s;

                        function a(e, t) {
                            var r = t || 0,
                                n = i;
                            return n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]]
                        }
                        var u = n(),
                            l = [1 | u[0], u[1], u[2], u[3], u[4], u[5]],
                            h = 16383 & (u[6] << 8 | u[7]),
                            f = 0,
                            c = 0;

                        function d(e, t, r) {
                            var i = t && r || 0;
                            "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                            var o = (e = e || {}).random || (e.rng || n)();
                            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                                for (var s = 0; s < 16; s++) t[i + s] = o[s];
                            return t || a(o)
                        }
                        var p = d;
                        p.v1 = function(e, t, r) {
                            var n = t && r || 0,
                                i = t || [],
                                o = void 0 !== (e = e || {}).clockseq ? e.clockseq : h,
                                s = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                                u = void 0 !== e.nsecs ? e.nsecs : c + 1,
                                d = s - f + (u - c) / 1e4;
                            if (d < 0 && void 0 === e.clockseq && (o = o + 1 & 16383), (d < 0 || f < s) && void 0 === e.nsecs && (u = 0), 1e4 <= u) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                            f = s, h = o;
                            var p = (1e4 * (268435455 & (s += 122192928e5)) + (c = u)) % 4294967296;
                            i[n++] = p >>> 24 & 255, i[n++] = p >>> 16 & 255, i[n++] = p >>> 8 & 255, i[n++] = 255 & p;
                            var v = s / 4294967296 * 1e4 & 268435455;
                            i[n++] = v >>> 8 & 255, i[n++] = 255 & v, i[n++] = v >>> 24 & 15 | 16, i[n++] = v >>> 16 & 255, i[n++] = o >>> 8 | 128, i[n++] = 255 & o;
                            for (var y = e.node || l, m = 0; m < 6; m++) i[n + m] = y[m];
                            return t || a(i)
                        }, p.v4 = d, p.parse = function(e, t, r) {
                            var n = t && r || 0,
                                i = 0;
                            for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, (function(e) {
                                    i < 16 && (t[n + i++] = o[e])
                                })); i < 16;) t[n + i++] = 0;
                            return t
                        }, p.unparse = a, t.exports = p
                    }, {
                        "./rng": 47
                    }],
                    49: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        try {
                            t.exports.XMLHttpRequest = XMLHttpRequest
                        } catch (e) {
                            console.log("Warning: XMLHttpRequest is not defined"), t.exports.XMLHttpRequest = null
                        }
                    }, {}],
                    50: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("../utils/properties"),
                            i = (o.isProvider = function(e) {
                                return n.isType(e, "Provider")
                            }, o);

                        function o() {
                            n.setType(this, "Provider")
                        }
                        r.Provider = i
                    }, {
                        "../utils/properties": 74
                    }],
                    51: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s = e("../utils/address"),
                            a = e("../utils/bignumber"),
                            u = e("../utils/bytes"),
                            l = e("../constants"),
                            h = e("../utils/hash"),
                            f = e("../utils/networks"),
                            c = e("../utils/properties"),
                            d = e("../utils/rlp"),
                            p = e("../utils/transaction"),
                            v = e("../utils/utf8"),
                            y = e("../utils/web"),
                            m = o(e("../errors")),
                            g = e("./abstract-provider");

                        function b(e, t) {
                            var r = {};
                            for (var n in e) try {
                                var i = e[n](t[n]);
                                void 0 !== i && (r[n] = i)
                            } catch (e) {
                                throw e.checkKey = n, e.checkValue = t[n], e
                            }
                            return r
                        }

                        function w(e, t) {
                            return function(r) {
                                return null == r ? t : e(r)
                            }
                        }

                        function _(e) {
                            return function(t) {
                                if (!Array.isArray(t)) throw new Error("not an array");
                                var r = [];
                                return t.forEach((function(t) {
                                    r.push(e(t))
                                })), r
                            }
                        }

                        function M(e, t) {
                            return "string" == typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), 32 === u.hexDataLength(e)) ? e.toLowerCase() : (m.throwError("invalid hash", m.INVALID_ARGUMENT, {
                                arg: "hash",
                                value: e
                            }), null)
                        }

                        function A(e) {
                            return a.bigNumberify(e).toNumber()
                        }

                        function E(e) {
                            if (!u.isHexString(e)) throw new Error("invalid uint256");
                            for (; e.length < 66;) e = "0x0" + e.substring(2);
                            return e
                        }

                        function S(e) {
                            if (null == e) return "latest";
                            if ("earliest" === e) return "0x0";
                            if ("latest" === e || "pending" === e) return e;
                            if ("number" == typeof e) return u.hexStripZeros(u.hexlify(e));
                            if (u.isHexString(e)) return u.hexStripZeros(e);
                            throw new Error("invalid blockTag")
                        }
                        var k = {
                            hash: M,
                            blockHash: w(M, null),
                            blockNumber: w(A, null),
                            transactionIndex: w(A, null),
                            confirmations: w(A, null),
                            from: s.getAddress,
                            gasPrice: a.bigNumberify,
                            gasLimit: a.bigNumberify,
                            to: w(s.getAddress, null),
                            value: a.bigNumberify,
                            nonce: A,
                            data: u.hexlify,
                            r: w(E),
                            s: w(E),
                            v: w(A),
                            creates: w(s.getAddress, null),
                            raw: w(u.hexlify)
                        };

                        function N(e) {
                            if (null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas), e.to && a.bigNumberify(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), null != e.input && null == e.data && (e.data = e.input), null == e.to && null == e.creates && (e.creates = s.getContractAddress(e)), !e.raw && e.v && e.r && e.s) {
                                var t = [u.stripZeros(u.hexlify(e.nonce)), u.stripZeros(u.hexlify(e.gasPrice)), u.stripZeros(u.hexlify(e.gasLimit)), e.to || "0x", u.stripZeros(u.hexlify(e.value || "0x")), u.hexlify(e.data || "0x"), u.stripZeros(u.hexlify(e.v || "0x")), u.stripZeros(u.hexlify(e.r)), u.stripZeros(u.hexlify(e.s))];
                                e.raw = d.encode(t)
                            }
                            var r = b(k, e),
                                n = e.networkId;
                            return null != e.chainId && null == n && null == r.v && (n = e.chainId), u.isHexString(n) && (n = a.bigNumberify(n).toNumber()), "number" != typeof n && null != r.v && ((n = (r.v - 35) / 2) < 0 && (n = 0), n = parseInt(n)), "number" != typeof n && (n = 0), r.networkId = n, null == r.chainId && null != n && (r.chainId = n), r.blockHash && "x" === r.blockHash.replace(/0/g, "") && (r.blockHash = null), r
                        }
                        var x = {
                                hash: M,
                                parentHash: M,
                                number: A,
                                timestamp: A,
                                nonce: w(u.hexlify),
                                difficulty: function(e) {
                                    var t = a.bigNumberify(e);
                                    try {
                                        return t.toNumber()
                                    } catch (e) {}
                                    return null
                                },
                                gasLimit: a.bigNumberify,
                                gasUsed: a.bigNumberify,
                                miner: s.getAddress,
                                extraData: u.hexlify,
                                transactions: w(_(M))
                            },
                            P = c.shallowCopy(x);

                        function I(e, t) {
                            return null != e.author && null == e.miner && (e.miner = e.author), b(t ? P : x, e)
                        }
                        P.transactions = w(_(N));
                        var T = {
                            from: w(s.getAddress),
                            nonce: w(A),
                            gasLimit: w(a.bigNumberify),
                            gasPrice: w(a.bigNumberify),
                            to: w(s.getAddress),
                            value: w(a.bigNumberify),
                            data: w(u.hexlify)
                        };

                        function R(e) {
                            return b(T, e)
                        }
                        var O = {
                                transactionLogIndex: w(A),
                                transactionIndex: A,
                                blockNumber: A,
                                transactionHash: M,
                                address: s.getAddress,
                                topics: _(M),
                                data: u.hexlify,
                                logIndex: A,
                                blockHash: M
                            },
                            C = {
                                to: w(s.getAddress, null),
                                from: w(s.getAddress, null),
                                contractAddress: w(s.getAddress, null),
                                transactionIndex: A,
                                root: w(M),
                                gasUsed: a.bigNumberify,
                                logsBloom: w(u.hexlify),
                                blockHash: M,
                                transactionHash: M,
                                logs: _((function(e) {
                                    return b(O, e)
                                })),
                                blockNumber: A,
                                confirmations: w(A, null),
                                cumulativeGasUsed: a.bigNumberify,
                                status: w(A)
                            };

                        function L(e) {
                            return Array.isArray(e) ? e.forEach((function(e) {
                                L(e)
                            })) : null != e && M(e), e
                        }
                        var D, B, U = {
                                fromBlock: w(S, void 0),
                                toBlock: w(S, void 0),
                                address: w(s.getAddress, void 0),
                                topics: w(L, void 0)
                            },
                            F = {
                                blockHash: w(M, void 0),
                                address: w(s.getAddress, void 0),
                                topics: w(L, void 0)
                            },
                            j = {
                                blockNumber: w(A),
                                blockHash: w(M),
                                transactionIndex: A,
                                removed: w((function(e) {
                                    if ("boolean" == typeof e) return e;
                                    if ("string" == typeof e) {
                                        if ("true" === e) return !0;
                                        if ("false" === e) return !1
                                    }
                                    throw new Error("invaid boolean - " + e)
                                })),
                                address: s.getAddress,
                                data: (D = u.hexlify, B = "0x", function(e) {
                                    return e ? D(e) : B
                                }),
                                topics: _(M),
                                transactionHash: M,
                                logIndex: A
                            };

                        function G(e) {
                            return b(j, e)
                        }

                        function H(e) {
                            return e.map((function(e) {
                                return "string" == typeof e ? e : Array.isArray(e) ? (e.forEach((function(e) {
                                    null !== e && 32 !== u.hexDataLength(e) && m.throwError("invalid topic", m.INVALID_ARGUMENT, {
                                        argument: "topic",
                                        value: e
                                    })
                                })), e.join(",")) : null === e ? "" : m.throwError("invalid topic value", m.INVALID_ARGUMENT, {
                                    argument: "topic",
                                    value: e
                                })
                            })).join("&")
                        }

                        function z(e) {
                            if ("string" == typeof e) {
                                if (20 === u.hexDataLength(e)) return "address:" + s.getAddress(e);
                                if (e = e.toLowerCase(), 32 === u.hexDataLength(e)) return "tx:" + e;
                                if (-1 === e.indexOf(":")) return e
                            } else {
                                if (Array.isArray(e)) return "filter::" + H(e);
                                if (e && "object" == typeof e) return "filter:" + (e.address || "") + ":" + H(e.topics || [])
                            }
                            throw new Error("invalid event - " + e)
                        }

                        function V() {
                            return (new Date).getTime()
                        }
                        var K, q = (i(W, K = g.Provider), W.prototype._doPoll = function() {
                            var e = this;
                            this.getBlockNumber().then((function(t) {
                                if (e.polling && (e._setFastBlockNumber(t), t !== e._lastBlockNumber)) {
                                    -2 === e._emitted.block && (e._emitted.block = t - 1);
                                    for (var r = e._emitted.block + 1; r <= t; r++) e.emit("block", r);
                                    e._emitted.block !== t && (e._emitted.block = t, Object.keys(e._emitted).forEach((function(r) {
                                        if ("block" !== r) {
                                            var n = e._emitted[r];
                                            "pending" !== n && 12 < t - n && delete e._emitted[r]
                                        }
                                    }))), -2 === e._lastBlockNumber && (e._lastBlockNumber = t - 1);
                                    var n = {},
                                        i = {};
                                    return e._events.forEach((function(e) {
                                        i[e.tag] = !0
                                    })), Object.keys(i).forEach((function(r) {
                                        var i = r.split(":");
                                        switch (i[0]) {
                                            case "tx":
                                                var o = i[1];
                                                e.getTransactionReceipt(o).then((function(t) {
                                                    return t && null != t.blockNumber && (e._emitted["t:" + o] = t.blockNumber, e.emit(o, t)), null
                                                })).catch((function(t) {
                                                    e.emit("error", t)
                                                }));
                                                break;
                                            case "address":
                                                var s = i[1];
                                                e._balances[s] && (n[s] = e._balances[s]), e.getBalance(s, "latest").then((function(t) {
                                                    var r = e._balances[s];
                                                    if (!r || !t.eq(r)) return e._balances[s] = t, e.emit(s, t), null
                                                })).catch((function(t) {
                                                    e.emit("error", t)
                                                }));
                                                break;
                                            case "filter":
                                                var a = function(e) {
                                                        return e.split(/&/g).map((function(e) {
                                                            var t = e.split(",");
                                                            return 1 === t.length ? "" === t[0] ? null : e : t.map((function(e) {
                                                                return "" === e ? null : e
                                                            }))
                                                        }))
                                                    }(i[2]),
                                                    u = {
                                                        address: i[1],
                                                        fromBlock: e._lastBlockNumber + 1,
                                                        toBlock: t,
                                                        topics: a
                                                    };
                                                u.address || delete u.address, e.getLogs(u).then((function(t) {
                                                    if (0 !== t.length) return t.forEach((function(t) {
                                                        e._emitted["b:" + t.blockHash] = t.blockNumber, e._emitted["t:" + t.transactionHash] = t.blockNumber, e.emit(u, t)
                                                    })), null
                                                })).catch((function(t) {
                                                    e.emit("error", t)
                                                }))
                                        }
                                    })), e._lastBlockNumber = t, e._balances = n, null
                                }
                            })).catch((function(e) {})), this.doPoll()
                        }, W.prototype.resetEventsBlock = function(e) {
                            this._lastBlockNumber = e - 1, this.polling && this._doPoll()
                        }, Object.defineProperty(W.prototype, "network", {
                            get: function() {
                                return this._network
                            },
                            enumerable: !0,
                            configurable: !0
                        }), W.prototype.getNetwork = function() {
                            return this.ready
                        }, Object.defineProperty(W.prototype, "blockNumber", {
                            get: function() {
                                return this._fastBlockNumber
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(W.prototype, "polling", {
                            get: function() {
                                return null != this._poller
                            },
                            set: function(e) {
                                var t = this;
                                setTimeout((function() {
                                    e && !t._poller ? (t._poller = setInterval(t._doPoll.bind(t), t.pollingInterval), t._doPoll()) : !e && t._poller && (clearInterval(t._poller), t._poller = null)
                                }), 0)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(W.prototype, "pollingInterval", {
                            get: function() {
                                return this._pollingInterval
                            },
                            set: function(e) {
                                var t = this;
                                if ("number" != typeof e || e <= 0 || parseInt(String(e)) != e) throw new Error("invalid polling interval");
                                this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval((function() {
                                    t._doPoll()
                                }), this._pollingInterval))
                            },
                            enumerable: !0,
                            configurable: !0
                        }), W.prototype._getFastBlockNumber = function() {
                            var e = this,
                                t = V();
                            return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then((function(t) {
                                return (null == e._fastBlockNumber || t > e._fastBlockNumber) && (e._fastBlockNumber = t), e._fastBlockNumber
                            }))), this._fastBlockNumberPromise
                        }, W.prototype._setFastBlockNumber = function(e) {
                            null != this._fastBlockNumber && e < this._fastBlockNumber || (this._fastQueryDate = V(), (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)))
                        }, W.prototype.waitForTransaction = function(e, t) {
                            var r = this;
                            return null == t && (t = 1), this.getTransactionReceipt(e).then((function(n) {
                                return 0 === t || n && n.confirmations >= t ? n : new Promise((function(n) {
                                    var i = function i(o) {
                                        o.confirmations < t || (r.removeListener(e, i), n(o))
                                    };
                                    r.on(e, i)
                                }))
                            }))
                        }, W.prototype.getBlockNumber = function() {
                            var e = this;
                            return this.ready.then((function() {
                                return e.perform("getBlockNumber", {}).then((function(t) {
                                    var r = parseInt(t);
                                    if (r != t) throw new Error("invalid response - getBlockNumber");
                                    return e._setFastBlockNumber(r), r
                                }))
                            }))
                        }, W.prototype.getGasPrice = function() {
                            var e = this;
                            return this.ready.then((function() {
                                return e.perform("getGasPrice", {}).then((function(e) {
                                    return a.bigNumberify(e)
                                }))
                            }))
                        }, W.prototype.getBalance = function(e, t) {
                            var r = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    addressOrName: e,
                                    blockTag: t
                                }).then((function(e) {
                                    var t = e.addressOrName,
                                        n = e.blockTag;
                                    return r._getAddress(t).then((function(e) {
                                        var t = {
                                            address: e,
                                            blockTag: S(n)
                                        };
                                        return r.perform("getBalance", t).then((function(e) {
                                            return a.bigNumberify(e)
                                        }))
                                    }))
                                }))
                            }))
                        }, W.prototype.getTransactionCount = function(e, t) {
                            var r = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    addressOrName: e,
                                    blockTag: t
                                }).then((function(e) {
                                    var t = e.addressOrName,
                                        n = e.blockTag;
                                    return r._getAddress(t).then((function(e) {
                                        var t = {
                                            address: e,
                                            blockTag: S(n)
                                        };
                                        return r.perform("getTransactionCount", t).then((function(e) {
                                            return a.bigNumberify(e).toNumber()
                                        }))
                                    }))
                                }))
                            }))
                        }, W.prototype.getCode = function(e, t) {
                            var r = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    addressOrName: e,
                                    blockTag: t
                                }).then((function(e) {
                                    var t = e.addressOrName,
                                        n = e.blockTag;
                                    return r._getAddress(t).then((function(e) {
                                        var t = {
                                            address: e,
                                            blockTag: S(n)
                                        };
                                        return r.perform("getCode", t).then((function(e) {
                                            return u.hexlify(e)
                                        }))
                                    }))
                                }))
                            }))
                        }, W.prototype.getStorageAt = function(e, t, r) {
                            var n = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    addressOrName: e,
                                    position: t,
                                    blockTag: r
                                }).then((function(e) {
                                    var t = e.addressOrName,
                                        r = e.position,
                                        i = e.blockTag;
                                    return n._getAddress(t).then((function(e) {
                                        var t = {
                                            address: e,
                                            blockTag: S(i),
                                            position: u.hexStripZeros(u.hexlify(r))
                                        };
                                        return n.perform("getStorageAt", t).then((function(e) {
                                            return u.hexlify(e)
                                        }))
                                    }))
                                }))
                            }))
                        }, W.prototype.sendTransaction = function(e) {
                            var t = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    signedTransaction: e
                                }).then((function(e) {
                                    var r = e.signedTransaction,
                                        n = {
                                            signedTransaction: u.hexlify(r)
                                        };
                                    return t.perform("sendTransaction", n).then((function(e) {
                                        return t._wrapTransaction(p.parse(r), e)
                                    }), (function(e) {
                                        throw e.transaction = p.parse(r), e.transaction.hash && (e.transactionHash = e.transaction.hash), e
                                    }))
                                }))
                            }))
                        }, W.prototype._wrapTransaction = function(e, t) {
                            var r = this;
                            if (null != t && 32 !== u.hexDataLength(t)) throw new Error("invalid response - sendTransaction");
                            var n = e;
                            return null != t && e.hash !== t && m.throwError("Transaction hash mismatch from Provider.sendTransaction.", m.UNKNOWN_ERROR, {
                                expectedHash: e.hash,
                                returnedHash: t
                            }), n.wait = function(t) {
                                return 0 !== t && (r._emitted["t:" + e.hash] = "pending"), r.waitForTransaction(e.hash, t).then((function(n) {
                                    return null == n && 0 === t ? null : (r._emitted["t:" + e.hash] = n.blockNumber, 0 === n.status && m.throwError("transaction failed", m.CALL_EXCEPTION, {
                                        transactionHash: e.hash,
                                        transaction: e
                                    }), n)
                                }))
                            }, n
                        }, W.prototype.call = function(e, t) {
                            var r = this,
                                n = c.shallowCopy(e);
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    blockTag: t,
                                    tx: n
                                }).then((function(e) {
                                    var t = e.blockTag,
                                        n = e.tx;
                                    return r._resolveNames(n, ["to", "from"]).then((function(e) {
                                        var n = {
                                            blockTag: S(t),
                                            transaction: R(e)
                                        };
                                        return r.perform("call", n).then((function(e) {
                                            return u.hexlify(e)
                                        }))
                                    }))
                                }))
                            }))
                        }, W.prototype.estimateGas = function(e) {
                            var t = this,
                                r = {
                                    to: e.to,
                                    from: e.from,
                                    data: e.data,
                                    gasPrice: e.gasPrice,
                                    value: e.value
                                };
                            return this.ready.then((function() {
                                return c.resolveProperties(r).then((function(e) {
                                    return t._resolveNames(e, ["to", "from"]).then((function(e) {
                                        var r = {
                                            transaction: R(e)
                                        };
                                        return t.perform("estimateGas", r).then((function(e) {
                                            return a.bigNumberify(e)
                                        }))
                                    }))
                                }))
                            }))
                        }, W.prototype.getBlock = function(e, t) {
                            var r = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    blockHashOrBlockTag: e
                                }).then((function(e) {
                                    var n = e.blockHashOrBlockTag;
                                    try {
                                        var i = u.hexlify(n);
                                        if (32 === u.hexDataLength(i)) return y.poll((function() {
                                            return r.perform("getBlock", {
                                                blockHash: i,
                                                includeTransactions: !!t
                                            }).then((function(e) {
                                                return null == e ? null == r._emitted["b:" + i] ? null : void 0 : I(e, t)
                                            }))
                                        }), {
                                            onceBlock: r
                                        })
                                    } catch (e) {}
                                    try {
                                        var o = -128,
                                            s = S(n);
                                        return u.isHexString(s) && (o = parseInt(s.substring(2), 16)), y.poll((function() {
                                            return r.perform("getBlock", {
                                                blockTag: s,
                                                includeTransactions: !!t
                                            }).then((function(e) {
                                                return null != e ? I(e, t) : o <= r._emitted.block ? void 0 : null
                                            }))
                                        }), {
                                            onceBlock: r
                                        })
                                    } catch (e) {}
                                    throw new Error("invalid block hash or block tag")
                                }))
                            }))
                        }, W.prototype.getTransaction = function(e) {
                            var t = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    transactionHash: e
                                }).then((function(e) {
                                    var r = e.transactionHash,
                                        n = {
                                            transactionHash: M(r, !0)
                                        };
                                    return y.poll((function() {
                                        return t.perform("getTransaction", n).then((function(e) {
                                            if (null == e) return null == t._emitted["t:" + r] ? null : void 0;
                                            var n = W.checkTransactionResponse(e);
                                            if (null == n.blockNumber) n.confirmations = 0;
                                            else if (null == n.confirmations) return t._getFastBlockNumber().then((function(e) {
                                                var r = e - n.blockNumber + 1;
                                                return r <= 0 && (r = 1), n.confirmations = r, t._wrapTransaction(n)
                                            }));
                                            return t._wrapTransaction(n)
                                        }))
                                    }), {
                                        onceBlock: t
                                    })
                                }))
                            }))
                        }, W.prototype.getTransactionReceipt = function(e) {
                            var t = this;
                            return this.ready.then((function() {
                                return c.resolveProperties({
                                    transactionHash: e
                                }).then((function(e) {
                                    var r = e.transactionHash,
                                        n = {
                                            transactionHash: M(r, !0)
                                        };
                                    return y.poll((function() {
                                        return t.perform("getTransactionReceipt", n).then((function(e) {
                                            if (null == e) return null == t._emitted["t:" + r] ? null : void 0;
                                            if (null != e.blockHash) {
                                                var n = function(e) {
                                                    var t = b(C, e);
                                                    return t.logs.forEach((function(e, t) {
                                                        null == e.transactionLogIndex && (e.transactionLogIndex = t)
                                                    })), null != e.status && (t.byzantium = !0), t
                                                }(e);
                                                if (null == n.blockNumber) n.confirmations = 0;
                                                else if (null == n.confirmations) return t._getFastBlockNumber().then((function(e) {
                                                    var t = e - n.blockNumber + 1;
                                                    return t <= 0 && (t = 1), n.confirmations = t, n
                                                }));
                                                return n
                                            }
                                        }))
                                    }), {
                                        onceBlock: t
                                    })
                                }))
                            }))
                        }, W.prototype.getLogs = function(e) {
                            var t = this;
                            return this.ready.then((function() {
                                return c.resolveProperties(e).then((function(e) {
                                    return t._resolveNames(e, ["address"]).then((function(e) {
                                        var r = {
                                            filter: function(e) {
                                                return e && e.blockHash ? b(F, e) : b(U, e)
                                            }(e)
                                        };
                                        return t.perform("getLogs", r).then((function(e) {
                                            return _(G)(e)
                                        }))
                                    }))
                                }))
                            }))
                        }, W.prototype.getEtherPrice = function() {
                            var e = this;
                            return this.ready.then((function() {
                                return e.perform("getEtherPrice", {}).then((function(e) {
                                    return e
                                }))
                            }))
                        }, W.prototype._getAddress = function(e) {
                            return this.resolveName(e).then((function(t) {
                                return null == t && m.throwError("ENS name not configured", m.UNSUPPORTED_OPERATION, {
                                    operation: "resolveName(" + JSON.stringify(e) + ")"
                                }), t
                            }))
                        }, W.prototype._resolveNames = function(e, t) {
                            var r = [],
                                n = c.shallowCopy(e);
                            return t.forEach((function(e) {
                                null != n[e] && r.push(this._getAddress(n[e]).then((function(t) {
                                    n[e] = t
                                })))
                            }), this), Promise.all(r).then((function() {
                                return n
                            }))
                        }, W.prototype._getResolver = function(e) {
                            var t = this;
                            return this.getNetwork().then((function(r) {
                                r.ensAddress || m.throwError("network does not support ENS", m.UNSUPPORTED_OPERATION, {
                                    operation: "ENS",
                                    network: r.name
                                });
                                var n = "0x0178b8bf" + h.namehash(e).substring(2),
                                    i = {
                                        to: r.ensAddress,
                                        data: n
                                    };
                                return t.call(i).then((function(e) {
                                    if (32 !== u.hexDataLength(e)) return null;
                                    var t = s.getAddress(u.hexDataSlice(e, 12));
                                    return t === l.AddressZero ? null : t
                                }))
                            }))
                        }, W.prototype.resolveName = function(t) {
                            var r = this;
                            if (t instanceof Promise) return t.then((function(e) {
                                return r.resolveName(e)
                            }));
                            try {
                                return Promise.resolve(s.getAddress(t))
                            } catch (e) {
                                if (u.isHexString(t)) throw e
                            }
                            var n = this,
                                i = h.namehash(t);
                            return this._getResolver(t).then((function(e) {
                                if (null == e) return null;
                                var t = {
                                    to: e,
                                    data: "0x3b3b57de" + i.substring(2)
                                };
                                return n.call(t)
                            })).then((function(e) {
                                if (32 !== u.hexDataLength(e)) return null;
                                var t = s.getAddress(u.hexDataSlice(e, 12));
                                return t === l.AddressZero ? null : t
                            }))
                        }, W.prototype.lookupAddress = function(e) {
                            var t = this;
                            if (e instanceof Promise) return e.then((function(e) {
                                return t.lookupAddress(e)
                            }));
                            var r = (e = s.getAddress(e)).substring(2) + ".addr.reverse",
                                n = h.namehash(r),
                                i = this;
                            return this._getResolver(r).then((function(e) {
                                if (!e) return null;
                                var t = {
                                    to: e,
                                    data: "0x691f3431" + n.substring(2)
                                };
                                return i.call(t)
                            })).then((function(t) {
                                if (null == t) return null;
                                if ((t = t.substring(2)).length < 64) return null;
                                if ((t = t.substring(64)).length < 64) return null;
                                var r = a.bigNumberify("0x" + t.substring(0, 64)).toNumber();
                                if (2 * r > (t = t.substring(64)).length) return null;
                                var n = v.toUtf8String("0x" + t.substring(0, 2 * r));
                                return i.resolveName(n).then((function(t) {
                                    return t != e ? null : n
                                }))
                            }))
                        }, W.checkTransactionResponse = function(e) {
                            return N(e)
                        }, W.prototype.doPoll = function() {}, W.prototype.perform = function(e, t) {
                            return m.throwError(e + " not implemented", m.NOT_IMPLEMENTED, {
                                operation: e
                            }), null
                        }, W.prototype._startPending = function() {
                            m.warn("WARNING: this provider does not support pending events")
                        }, W.prototype._stopPending = function() {}, W.prototype._addEventListener = function(e, t, r) {
                            this._events.push({
                                tag: z(e),
                                listener: t,
                                once: r
                            }), "pending" === e && this._startPending(), this.polling = !0
                        }, W.prototype.on = function(e, t) {
                            return this._addEventListener(e, t, !1), this
                        }, W.prototype.once = function(e, t) {
                            return this._addEventListener(e, t, !0), this
                        }, W.prototype.addEventListener = function(e, t) {
                            return this.on(e, t)
                        }, W.prototype.emit = function(e) {
                            for (var t = this, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                            var i = !1,
                                o = z(e);
                            return this._events = this._events.filter((function(e) {
                                return e.tag !== o || (setTimeout((function() {
                                    e.listener.apply(t, r)
                                }), 0), i = !0, !e.once)
                            })), 0 === this.listenerCount() && (this.polling = !1), i
                        }, W.prototype.listenerCount = function(e) {
                            if (!e) return this._events.length;
                            var t = z(e);
                            return this._events.filter((function(e) {
                                return e.tag === t
                            })).length
                        }, W.prototype.listeners = function(e) {
                            var t = z(e);
                            return this._events.filter((function(e) {
                                return e.tag === t
                            })).map((function(e) {
                                return e.listener
                            }))
                        }, W.prototype.removeAllListeners = function(e) {
                            if (null == e) this._events = [], this._stopPending();
                            else {
                                var t = z(e);
                                this._events = this._events.filter((function(e) {
                                    return e.tag !== t
                                })), "pending" === e && this._stopPending()
                            }
                            return 0 === this._events.length && (this.polling = !1), this
                        }, W.prototype.removeListener = function(e, t) {
                            var r = !1,
                                n = z(e);
                            return this._events = this._events.filter((function(e) {
                                return e.tag !== n || e.listener != t || !!r || !(r = !0)
                            })), "pending" === e && 0 === this.listenerCount("pending") && this._stopPending(), 0 === this.listenerCount() && (this.polling = !1), this
                        }, W);

                        function W(e) {
                            var t = K.call(this) || this;
                            if (m.checkNew(t, g.Provider), e instanceof Promise) c.defineReadOnly(t, "ready", e.then((function(e) {
                                return c.defineReadOnly(t, "_network", e), e
                            }))), t.ready.catch((function(e) {}));
                            else {
                                var r = f.getNetwork(null == e ? "homestead" : e);
                                r ? (c.defineReadOnly(t, "_network", r), c.defineReadOnly(t, "ready", Promise.resolve(t._network))) : m.throwError("invalid network", m.INVALID_ARGUMENT, {
                                    arg: "network",
                                    value: e
                                })
                            }
                            return t._lastBlockNumber = -2, t._balances = {}, t._events = [], t._pollingInterval = 4e3, t._emitted = {
                                block: -2
                            }, t._fastQueryDate = 0, t
                        }
                        r.BaseProvider = q, c.defineReadOnly(g.Provider, "inherits", c.inheritable(g.Provider))
                    }, {
                        "../constants": 3,
                        "../errors": 5,
                        "../utils/address": 60,
                        "../utils/bignumber": 63,
                        "../utils/bytes": 64,
                        "../utils/hash": 65,
                        "../utils/networks": 72,
                        "../utils/properties": 74,
                        "../utils/rlp": 76,
                        "../utils/transaction": 83,
                        "../utils/utf8": 85,
                        "../utils/web": 86,
                        "./abstract-provider": 50
                    }],
                    52: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s = e("./base-provider"),
                            a = e("../utils/bytes"),
                            u = e("../utils/properties"),
                            l = e("../utils/web"),
                            h = o(e("../errors"));

                        function f(e) {
                            var t = [];
                            for (var r in e)
                                if (null != e[r]) {
                                    var n = a.hexlify(e[r]);
                                    !{
                                        gasLimit: !0,
                                        gasPrice: !0,
                                        nonce: !0,
                                        value: !0
                                    }[r] || (n = a.hexStripZeros(n)), t.push(r + "=" + n)
                                }
                            return t.join("&")
                        }

                        function c(e) {
                            if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message)) return e.result;
                            if (1 == e.status && "OK" == e.message) return e.result;
                            var t = new Error("invalid response");
                            throw t.result = JSON.stringify(e), t
                        }

                        function d(e) {
                            if ("2.0" != e.jsonrpc) throw (t = new Error("invalid response")).result = JSON.stringify(e), t;
                            if (e.error) {
                                var t = new Error(e.error.message || "unknown error");
                                throw e.error.code && (t.code = e.error.code), e.error.data && (t.data = e.error.data), t
                            }
                            return e.result
                        }

                        function p(e) {
                            if ("pending" === e) throw new Error("pending not supported");
                            return "latest" === e ? e : parseInt(e.substring(2), 16)
                        }
                        var v, y = (i(m, v = s.BaseProvider), m.prototype.perform = function(e, t) {
                            var r = this,
                                n = this.baseUrl,
                                i = "";

                            function o(e, t) {
                                return l.fetchJson(e, null, t || d).then((function(t) {
                                    return r.emit("debug", {
                                        action: "perform",
                                        request: e,
                                        response: t,
                                        provider: r
                                    }), t
                                }))
                            }
                            switch (this.apiKey && (i += "&apikey=" + this.apiKey), e) {
                                case "getBlockNumber":
                                    return o(n += "/api?module=proxy&action=eth_blockNumber" + i);
                                case "getGasPrice":
                                    return o(n += "/api?module=proxy&action=eth_gasPrice" + i);
                                case "getBalance":
                                    return n += "/api?module=account&action=balance&address=" + t.address, o(n += "&tag=" + t.blockTag + i, c);
                                case "getTransactionCount":
                                    return n += "/api?module=proxy&action=eth_getTransactionCount&address=" + t.address, o(n += "&tag=" + t.blockTag + i);
                                case "getCode":
                                    return n += "/api?module=proxy&action=eth_getCode&address=" + t.address, o(n += "&tag=" + t.blockTag + i, d);
                                case "getStorageAt":
                                    return n += "/api?module=proxy&action=eth_getStorageAt&address=" + t.address, n += "&position=" + t.position, o(n += "&tag=" + t.blockTag + i, d);
                                case "sendTransaction":
                                    return n += "/api?module=proxy&action=eth_sendRawTransaction&hex=" + t.signedTransaction, o(n += i).catch((function(e) {
                                        throw e.responseText && (0 <= e.responseText.toLowerCase().indexOf("insufficient funds") && h.throwError("insufficient funds", h.INSUFFICIENT_FUNDS, {}), 0 <= e.responseText.indexOf("same hash was already imported") && h.throwError("nonce has already been used", h.NONCE_EXPIRED, {}), 0 <= e.responseText.indexOf("another transaction with same nonce") && h.throwError("replacement fee too low", h.REPLACEMENT_UNDERPRICED, {})), e
                                    }));
                                case "getBlock":
                                    return t.blockTag ? (n += "/api?module=proxy&action=eth_getBlockByNumber&tag=" + t.blockTag, t.includeTransactions ? n += "&boolean=true" : n += "&boolean=false", o(n += i)) : Promise.reject(new Error("getBlock by blockHash not implemeneted"));
                                case "getTransaction":
                                    return n += "/api?module=proxy&action=eth_getTransactionByHash&txhash=" + t.transactionHash, o(n += i);
                                case "getTransactionReceipt":
                                    return n += "/api?module=proxy&action=eth_getTransactionReceipt&txhash=" + t.transactionHash, o(n += i);
                                case "call":
                                    return n += "/api?module=proxy&action=eth_call" + (s = (s = f(t.transaction)) && "&" + s), "latest" !== t.blockTag ? Promise.reject(new Error("EtherscanProvider does not support blockTag for call")) : o(n += i);
                                case "estimateGas":
                                    var s;
                                    return n += "/api?module=proxy&action=eth_estimateGas&" + (s = (s = f(t.transaction)) && "&" + s), o(n += i);
                                case "getLogs":
                                    n += "/api?module=logs&action=getLogs";
                                    try {
                                        if (t.filter.fromBlock && (n += "&fromBlock=" + p(t.filter.fromBlock)), t.filter.toBlock && (n += "&toBlock=" + p(t.filter.toBlock)), t.filter.blockHash) try {
                                            h.throwError("Etherscan does not support blockHash filters", h.UNSUPPORTED_OPERATION, {
                                                operation: "getLogs(blockHash)"
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                        if (t.filter.address && (n += "&address=" + t.filter.address), t.filter.topics && 0 < t.filter.topics.length) {
                                            if (1 < t.filter.topics.length) throw new Error("unsupported topic format");
                                            var a = t.filter.topics[0];
                                            if ("string" != typeof a || 66 !== a.length) throw new Error("unsupported topic0 format");
                                            n += "&topic0=" + a
                                        }
                                    } catch (e) {
                                        return Promise.reject(e)
                                    }
                                    var u = this;
                                    return o(n += i, c).then((function(e) {
                                        var t = {},
                                            r = Promise.resolve();
                                        return e.forEach((function(e) {
                                            r = r.then((function() {
                                                return null != e.blockHash ? null : (e.blockHash = t[e.transactionHash], null == e.blockHash ? u.getTransaction(e.transactionHash).then((function(r) {
                                                    return t[e.transactionHash] = r.blockHash, e.blockHash = r.blockHash, null
                                                })) : null)
                                            }))
                                        })), r.then((function() {
                                            return e
                                        }))
                                    }));
                                case "getEtherPrice":
                                    return "homestead" !== this.network.name ? Promise.resolve(0) : (n += "/api?module=stats&action=ethprice", o(n += i, c).then((function(e) {
                                        return parseFloat(e.ethusd)
                                    })))
                            }
                            return v.prototype.perform.call(this, e, t)
                        }, m.prototype.getHistory = function(e, t, r) {
                            var n = this,
                                i = this.baseUrl,
                                o = "";
                            return this.apiKey && (o += "&apikey=" + this.apiKey), null == t && (t = 0), null == r && (r = 99999999), this.resolveName(e).then((function(e) {
                                return i += "/api?module=account&action=txlist&address=" + e, i += "&startblock=" + t, i += "&endblock=" + r, i += "&sort=asc" + o, l.fetchJson(i, null, c).then((function(e) {
                                    n.emit("debug", {
                                        action: "getHistory",
                                        request: i,
                                        response: e,
                                        provider: n
                                    });
                                    var t = [];
                                    return e.forEach((function(e) {
                                        ["contractAddress", "to"].forEach((function(t) {
                                            "" == e[t] && delete e[t]
                                        })), null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
                                        var r = s.BaseProvider.checkTransactionResponse(e);
                                        e.timeStamp && (r.timestamp = parseInt(e.timeStamp)), t.push(r)
                                    })), t
                                }))
                            }))
                        }, m);

                        function m(e, t) {
                            var r = v.call(this, e) || this;
                            h.checkNew(r, m);
                            var n = "invalid";
                            r.network && (n = r.network.name);
                            var i = null;
                            switch (n) {
                                case "homestead":
                                    i = "https://api.etherscan.io";
                                    break;
                                case "ropsten":
                                    i = "https://api-ropsten.etherscan.io";
                                    break;
                                case "rinkeby":
                                    i = "https://api-rinkeby.etherscan.io";
                                    break;
                                case "kovan":
                                    i = "https://api-kovan.etherscan.io";
                                    break;
                                case "goerli":
                                    i = "https://api-goerli.etherscan.io";
                                    break;
                                default:
                                    throw new Error("unsupported network")
                            }
                            return u.defineReadOnly(r, "baseUrl", i), u.defineReadOnly(r, "apiKey", t || "8FG3JMZ9USS4NTA6YKEKHINU56SEPPVBJR"), r
                        }
                        r.EtherscanProvider = y
                    }, {
                        "../errors": 5,
                        "../utils/bytes": 64,
                        "../utils/properties": 74,
                        "../utils/web": 86,
                        "./base-provider": 51
                    }],
                    53: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s = e("./base-provider"),
                            a = o(e("../errors"));

                        function u(e) {
                            var t = !0,
                                r = null;
                            return e.forEach((function(n) {
                                null != n ? null != r ? r.name === n.name && r.chainId === n.chainId && (r.ensAddress === n.ensAddress || null == r.ensAddress && null == n.ensAddress) || a.throwError("provider mismatch", a.INVALID_ARGUMENT, {
                                    arg: "networks",
                                    value: e
                                }) : r = n : t = !1
                            })), t
                        }
                        var l, h = (i(f, l = s.BaseProvider), Object.defineProperty(f.prototype, "providers", {
                            get: function() {
                                return this._providers.slice(0)
                            },
                            enumerable: !0,
                            configurable: !0
                        }), f.prototype.perform = function(e, t) {
                            var r = this.providers;
                            return new Promise((function(n, i) {
                                var o = null;
                                ! function s() {
                                    r.length ? r.shift().perform(e, t).then((function(e) {
                                        return n(e)
                                    })).catch((function(e) {
                                        o = o || e, setTimeout(s, 0)
                                    })) : i(o)
                                }()
                            }))
                        }, f);

                        function f(e) {
                            var t = this;
                            if (0 === e.length) throw new Error("no providers");
                            if (u(e.map((function(e) {
                                    return e.network
                                })))) t = l.call(this, e[0].network) || this;
                            else {
                                var r = Promise.all(e.map((function(e) {
                                    return e.getNetwork()
                                }))).then((function(e) {
                                    return u(e) || a.throwError("getNetwork returned null", a.UNKNOWN_ERROR, {}), e[0]
                                }));
                                t = l.call(this, r) || this
                            }
                            return a.checkNew(t, f), t._providers = e.slice(0), t
                        }
                        r.FallbackProvider = h
                    }, {
                        "../errors": 5,
                        "./base-provider": 51
                    }],
                    54: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./abstract-provider");
                        r.Provider = n.Provider;
                        var i = e("./base-provider");
                        r.BaseProvider = i.BaseProvider;
                        var o = e("./etherscan-provider");
                        r.EtherscanProvider = o.EtherscanProvider;
                        var s = e("./fallback-provider");
                        r.FallbackProvider = s.FallbackProvider;
                        var a = e("./ipc-provider");
                        r.IpcProvider = a.IpcProvider;
                        var u = e("./infura-provider");
                        r.InfuraProvider = u.InfuraProvider;
                        var l = e("./json-rpc-provider");
                        r.JsonRpcProvider = l.JsonRpcProvider, r.JsonRpcSigner = l.JsonRpcSigner;
                        var h = e("./web3-provider");
                        r.Web3Provider = h.Web3Provider
                    }, {
                        "./abstract-provider": 50,
                        "./base-provider": 51,
                        "./etherscan-provider": 52,
                        "./fallback-provider": 53,
                        "./infura-provider": 55,
                        "./ipc-provider": 56,
                        "./json-rpc-provider": 57,
                        "./web3-provider": 58
                    }],
                    55: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s, a = e("./json-rpc-provider"),
                            u = e("../utils/bytes"),
                            l = e("../utils/networks"),
                            h = e("../utils/properties"),
                            f = o(e("../errors")),
                            c = (i(d, s = a.JsonRpcProvider), d.prototype._startPending = function() {
                                f.warn("WARNING: INFURA does not support pending filters")
                            }, d.prototype.getSigner = function(e) {
                                return f.throwError("INFURA does not support signing", f.UNSUPPORTED_OPERATION, {
                                    operation: "getSigner"
                                })
                            }, d.prototype.listAccounts = function() {
                                return Promise.resolve([])
                            }, d);

                        function d(e, t) {
                            var r = this,
                                n = l.getNetwork(null == e ? "homestead" : e);
                            null == t && (t = "7d0d81d0919f4f05b9ab6634be01ee73");
                            var i = null;
                            switch (n.name) {
                                case "homestead":
                                    i = "mainnet.infura.io";
                                    break;
                                case "ropsten":
                                    i = "ropsten.infura.io";
                                    break;
                                case "rinkeby":
                                    i = "rinkeby.infura.io";
                                    break;
                                case "goerli":
                                    i = "goerli.infura.io";
                                    break;
                                case "kovan":
                                    i = "kovan.infura.io";
                                    break;
                                default:
                                    f.throwError("unsupported network", f.INVALID_ARGUMENT, {
                                        argument: "network",
                                        value: e
                                    })
                            }
                            return u.isHexString("0x" + t, 16) ? (r = s.call(this, "https://" + i + "/v3/" + t, n) || this, h.defineReadOnly(r, "apiAccessToken", null), h.defineReadOnly(r, "projectId", t)) : (f.warn("The legacy INFURA apiAccesToken API is deprecated; please upgrade to a Project ID instead (see INFURA dshboard; https://infura.io)"), r = s.call(this, "https://" + i + "/" + t, n) || this, h.defineReadOnly(r, "apiAccessToken", t), h.defineReadOnly(r, "projectId", null)), f.checkNew(r, d), r
                        }
                        r.InfuraProvider = c
                    }, {
                        "../errors": 5,
                        "../utils/bytes": 64,
                        "../utils/networks": 72,
                        "../utils/properties": 74,
                        "./json-rpc-provider": 57
                    }],
                    56: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        })
                    }, {}],
                    57: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s = e("./base-provider"),
                            a = e("../abstract-signer"),
                            u = o(e("../errors")),
                            l = e("../utils/address"),
                            h = e("../utils/bytes"),
                            f = e("../utils/networks"),
                            c = e("../utils/properties"),
                            d = e("../utils/utf8"),
                            p = e("../utils/web");

                        function v(e) {
                            if (e.error) {
                                var t = new Error(e.error.message);
                                throw t.code = e.error.code, t.data = e.error.data, t
                            }
                            return e.result
                        }

                        function y(e) {
                            return e ? e.toLowerCase() : e
                        }
                        var m, g = {},
                            b = 42,
                            w = (i(_, m = a.Signer), _.prototype.getAddress = function() {
                                var e = this;
                                return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((function(t) {
                                    return t.length <= e._index && u.throwError("unknown account #" + e._index, u.UNSUPPORTED_OPERATION, {
                                        operation: "getAddress"
                                    }), e._address = l.getAddress(t[e._index]), e._address
                                }))
                            }, _.prototype.getBalance = function(e) {
                                return this.provider.getBalance(this.getAddress(), e)
                            }, _.prototype.getTransactionCount = function(e) {
                                return this.provider.getTransactionCount(this.getAddress(), e)
                            }, _.prototype.sendUncheckedTransaction = function(e) {
                                var t = this;
                                e = c.shallowCopy(e);
                                var r = this.getAddress().then((function(e) {
                                    return e && e.toLowerCase()
                                }));
                                if (null == e.gasLimit) {
                                    var n = c.shallowCopy(e);
                                    n.from = r, e.gasLimit = this.provider.estimateGas(n)
                                }
                                return Promise.all([c.resolveProperties(e), r]).then((function(e) {
                                    var r = e[0],
                                        n = E.hexlifyTransaction(r);
                                    return n.from = e[1], t.provider.send("eth_sendTransaction", [n]).then((function(e) {
                                        return e
                                    }), (function(e) {
                                        throw e.responseText && (0 <= e.responseText.indexOf("insufficient funds") && u.throwError("insufficient funds", u.INSUFFICIENT_FUNDS, {
                                            transaction: r
                                        }), 0 <= e.responseText.indexOf("nonce too low") && u.throwError("nonce has already been used", u.NONCE_EXPIRED, {
                                            transaction: r
                                        }), 0 <= e.responseText.indexOf("replacement transaction underpriced") && u.throwError("replacement fee too low", u.REPLACEMENT_UNDERPRICED, {
                                            transaction: r
                                        })), e
                                    }))
                                }))
                            }, _.prototype.sendTransaction = function(e) {
                                var t = this;
                                return this.sendUncheckedTransaction(e).then((function(e) {
                                    return p.poll((function() {
                                        return t.provider.getTransaction(e).then((function(r) {
                                            if (null !== r) return t.provider._wrapTransaction(r, e)
                                        }))
                                    }), {
                                        fastRetry: 250,
                                        onceBlock: t.provider
                                    }).catch((function(t) {
                                        throw t.transactionHash = e, t
                                    }))
                                }))
                            }, _.prototype.signMessage = function(e) {
                                var t = this,
                                    r = "string" == typeof e ? d.toUtf8Bytes(e) : e;
                                return this.getAddress().then((function(e) {
                                    return t.provider.send("eth_sign", [e.toLowerCase(), h.hexlify(r)])
                                }))
                            }, _.prototype.unlock = function(e) {
                                var t = this.provider;
                                return this.getAddress().then((function(r) {
                                    return t.send("personal_unlockAccount", [r.toLowerCase(), e, null])
                                }))
                            }, _);

                        function _(e, t, r) {
                            var n = m.call(this) || this;
                            if (u.checkNew(n, _), e !== g) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                            return c.defineReadOnly(n, "provider", t), r ? "string" == typeof r ? c.defineReadOnly(n, "_address", l.getAddress(r)) : "number" == typeof r ? c.defineReadOnly(n, "_index", r) : u.throwError("invalid address or index", u.INVALID_ARGUMENT, {
                                argument: "addressOrIndex",
                                value: r
                            }) : c.defineReadOnly(n, "_index", 0), n
                        }
                        r.JsonRpcSigner = w;
                        var M, A = {
                                chainId: !0,
                                data: !0,
                                gasLimit: !0,
                                gasPrice: !0,
                                nonce: !0,
                                to: !0,
                                value: !0
                            },
                            E = (i(S, M = s.BaseProvider), S.prototype.getSigner = function(e) {
                                return new w(g, this, e)
                            }, S.prototype.listAccounts = function() {
                                return this.send("eth_accounts", []).then((function(e) {
                                    return e.map((function(e) {
                                        return l.getAddress(e)
                                    }))
                                }))
                            }, S.prototype.send = function(e, t) {
                                var r = this,
                                    n = {
                                        method: e,
                                        params: t,
                                        id: b++,
                                        jsonrpc: "2.0"
                                    };
                                return p.fetchJson(this.connection, JSON.stringify(n), v).then((function(e) {
                                    return r.emit("debug", {
                                        action: "send",
                                        request: n,
                                        response: e,
                                        provider: r
                                    }), e
                                }))
                            }, S.prototype.perform = function(e, t) {
                                switch (e) {
                                    case "getBlockNumber":
                                        return this.send("eth_blockNumber", []);
                                    case "getGasPrice":
                                        return this.send("eth_gasPrice", []);
                                    case "getBalance":
                                        return this.send("eth_getBalance", [y(t.address), t.blockTag]);
                                    case "getTransactionCount":
                                        return this.send("eth_getTransactionCount", [y(t.address), t.blockTag]);
                                    case "getCode":
                                        return this.send("eth_getCode", [y(t.address), t.blockTag]);
                                    case "getStorageAt":
                                        return this.send("eth_getStorageAt", [y(t.address), t.position, t.blockTag]);
                                    case "sendTransaction":
                                        return this.send("eth_sendRawTransaction", [t.signedTransaction]).catch((function(e) {
                                            throw e.responseText && (0 < e.responseText.indexOf("insufficient funds") && u.throwError("insufficient funds", u.INSUFFICIENT_FUNDS, {}), 0 < e.responseText.indexOf("nonce too low") && u.throwError("nonce has already been used", u.NONCE_EXPIRED, {}), 0 < e.responseText.indexOf("replacement transaction underpriced") && u.throwError("replacement fee too low", u.REPLACEMENT_UNDERPRICED, {})), e
                                        }));
                                    case "getBlock":
                                        return t.blockTag ? this.send("eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]) : t.blockHash ? this.send("eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]) : Promise.reject(new Error("invalid block tag or block hash"));
                                    case "getTransaction":
                                        return this.send("eth_getTransactionByHash", [t.transactionHash]);
                                    case "getTransactionReceipt":
                                        return this.send("eth_getTransactionReceipt", [t.transactionHash]);
                                    case "call":
                                        return this.send("eth_call", [S.hexlifyTransaction(t.transaction, {
                                            from: !0
                                        }), t.blockTag]);
                                    case "estimateGas":
                                        return this.send("eth_estimateGas", [S.hexlifyTransaction(t.transaction, {
                                            from: !0
                                        })]);
                                    case "getLogs":
                                        return t.filter && null != t.filter.address && (t.filter.address = y(t.filter.address)), this.send("eth_getLogs", [t.filter])
                                }
                                return u.throwError(e + " not implemented", u.NOT_IMPLEMENTED, {
                                    operation: e
                                }), null
                            }, S.prototype._startPending = function() {
                                if (null == this._pendingFilter) {
                                    var e = this,
                                        t = this.send("eth_newPendingTransactionFilter", []);
                                    (this._pendingFilter = t).then((function(r) {
                                        return function n() {
                                            e.send("eth_getFilterChanges", [r]).then((function(r) {
                                                if (e._pendingFilter != t) return null;
                                                var n = Promise.resolve();
                                                return r.forEach((function(t) {
                                                    e._emitted["t:" + t.toLowerCase()] = "pending", n = n.then((function() {
                                                        return e.getTransaction(t).then((function(t) {
                                                            return e.emit("pending", t), null
                                                        }))
                                                    }))
                                                })), n.then((function() {
                                                    return function(e) {
                                                        return new Promise((function(t) {
                                                            setTimeout((function() {
                                                                t()
                                                            }), e)
                                                        }))
                                                    }(1e3)
                                                }))
                                            })).then((function() {
                                                if (e._pendingFilter == t) return setTimeout((function() {
                                                    n()
                                                }), 0), null;
                                                e.send("eth_uninstallFilter", [r])
                                            })).catch((function(e) {}))
                                        }(), r
                                    })).catch((function(e) {}))
                                }
                            }, S.prototype._stopPending = function() {
                                this._pendingFilter = null
                            }, S.hexlifyTransaction = function(e, t) {
                                var r = c.shallowCopy(A);
                                if (t)
                                    for (var n in t) t[n] && (r[n] = !0);
                                c.checkProperties(e, r);
                                var i = {};
                                return ["gasLimit", "gasPrice", "nonce", "value"].forEach((function(t) {
                                    if (null != e[t]) {
                                        var r = h.hexStripZeros(h.hexlify(e[t]));
                                        "gasLimit" === t && (t = "gas"), i[t] = r
                                    }
                                })), ["from", "to", "data"].forEach((function(t) {
                                    null != e[t] && (i[t] = h.hexlify(e[t]))
                                })), i
                            }, S);

                        function S(e, t) {
                            var r = this;
                            if ("string" == typeof e && null === t && f.getNetwork(e) && (t = e, e = null), t) r = M.call(this, t) || this;
                            else {
                                var n = new Promise((function(e, t) {
                                    setTimeout((function() {
                                        r.send("net_version", []).then((function(t) {
                                            return e(f.getNetwork(parseInt(t)))
                                        })).catch((function(e) {
                                            t(e)
                                        }))
                                    }))
                                }));
                                r = M.call(this, n) || this
                            }
                            return u.checkNew(r, S), e = e || "http://localhost:8545", r.connection = "string" == typeof e ? {
                                url: e
                            } : e, r
                        }
                        r.JsonRpcProvider = E
                    }, {
                        "../abstract-signer": 2,
                        "../errors": 5,
                        "../utils/address": 60,
                        "../utils/bytes": 64,
                        "../utils/networks": 72,
                        "../utils/properties": 74,
                        "../utils/utf8": 85,
                        "../utils/web": 86,
                        "./base-provider": 51
                    }],
                    58: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s, a = e("./json-rpc-provider"),
                            u = e("../utils/properties"),
                            l = o(e("../errors")),
                            h = 42,
                            f = (i(c, s = a.JsonRpcProvider), c.prototype.send = function(e, t) {
                                var r = this;
                                return "eth_sign" == e && this._web3Provider.isMetaMask && (e = "personal_sign", t = [t[1], t[0]]), new Promise((function(n, i) {
                                    var o = {
                                        method: e,
                                        params: t,
                                        id: h++,
                                        jsonrpc: "2.0"
                                    };
                                    r._sendAsync(o, (function(e, t) {
                                        if (e) i(e);
                                        else {
                                            if (t.error) {
                                                var r = new Error(t.error.message);
                                                return r.code = t.error.code, r.data = t.error.data, void i(r)
                                            }
                                            n(t.result)
                                        }
                                    }))
                                }))
                            }, c);

                        function c(e, t) {
                            var r = s.call(this, e.host || e.path || "", t) || this;
                            return l.checkNew(r, c), e && (e.sendAsync ? r._sendAsync = e.sendAsync.bind(e) : e.send && (r._sendAsync = e.send.bind(e))), e && r._sendAsync || l.throwError("invalid web3Provider", l.INVALID_ARGUMENT, {
                                arg: "web3Provider",
                                value: e
                            }), u.defineReadOnly(r, "_web3Provider", e), u.defineReadOnly(r, "provider", e), r
                        }
                        r.Web3Provider = f
                    }, {
                        "../errors": 5,
                        "../utils/properties": 74,
                        "./json-rpc-provider": 57
                    }],
                    59: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s = e("../constants"),
                            a = o(e("../errors")),
                            u = e("./address"),
                            l = e("./bignumber"),
                            h = e("./bytes"),
                            f = e("./utf8"),
                            c = e("./properties"),
                            d = new RegExp(/^bytes([0-9]*)$/),
                            p = new RegExp(/^(u?int)([0-9]*)$/),
                            v = new RegExp(/^(.*)\[([0-9]*)\]$/);
                        r.defaultCoerceFunc = function(e, t) {
                            var r = e.match(p);
                            return r && parseInt(r[2]) <= 48 ? t.toNumber() : t
                        };
                        var y = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),
                            m = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");

                        function g(e) {
                            return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
                        }

                        function b(e, t) {
                            var r = e;

                            function n(e) {
                                throw new Error('unexpected character "' + r[e] + '" at position ' + e + ' in "' + r + '"')
                            }
                            e = e.replace(/\s/g, " ");
                            for (var i = {
                                    type: "",
                                    name: "",
                                    state: {
                                        allowType: !0
                                    }
                                }, o = i, s = 0; s < e.length; s++) {
                                var a = e[s];
                                switch (a) {
                                    case "(":
                                        o.state.allowParams || n(s), o.state.allowType = !1, o.type = g(o.type), o.components = [{
                                            type: "",
                                            name: "",
                                            parent: o,
                                            state: {
                                                allowType: !0
                                            }
                                        }], o = o.components[0];
                                        break;
                                    case ")":
                                        delete o.state, t && "indexed" === o.name && (o.indexed = !0, o.name = ""), o.type = g(o.type);
                                        var u = o;
                                        (o = o.parent) || n(s), delete u.parent, o.state.allowParams = !1, o.state.allowName = !0, o.state.allowArray = !0;
                                        break;
                                    case ",":
                                        delete o.state, t && "indexed" === o.name && (o.indexed = !0, o.name = ""), o.type = g(o.type);
                                        var l = {
                                            type: "",
                                            name: "",
                                            parent: o.parent,
                                            state: {
                                                allowType: !0
                                            }
                                        };
                                        o.parent.components.push(l), delete o.parent, o = l;
                                        break;
                                    case " ":
                                        o.state.allowType && "" !== o.type && (o.type = g(o.type), delete o.state.allowType, o.state.allowName = !0, o.state.allowParams = !0), o.state.allowName && "" !== o.name && (t && "indexed" === o.name ? (o.indexed = !0, o.name = "") : o.state.allowName = !1);
                                        break;
                                    case "[":
                                        o.state.allowArray || n(s), o.type += a, o.state.allowArray = !1, o.state.allowName = !1, o.state.readArray = !0;
                                        break;
                                    case "]":
                                        o.state.readArray || n(s), o.type += a, o.state.readArray = !1, o.state.allowArray = !0, o.state.allowName = !0;
                                        break;
                                    default:
                                        o.state.allowType ? (o.type += a, o.state.allowParams = !0, o.state.allowArray = !0) : o.state.allowName ? (o.name += a, delete o.state.allowArray) : o.state.readArray ? o.type += a : n(s)
                                }
                            }
                            if (o.parent) throw new Error("unexpected eof");
                            return delete i.state, t && "indexed" === o.name && (o.indexed = !0, o.name = ""), i.type = g(i.type), i
                        }

                        function w(e) {
                            return se(r.defaultCoerceFunc, e).type
                        }

                        function _(e, t, r, n, i) {
                            this.coerceFunc = e, this.name = t, this.type = r, this.localName = n, this.dynamic = i
                        }
                        r.parseParamType = function(e) {
                            return b(e, !0)
                        }, r.formatParamType = w, r.formatSignature = function(e) {
                            return e.name + "(" + e.inputs.map((function(e) {
                                return w(e)
                            })).join(",") + ")"
                        }, r.parseSignature = function(e) {
                            if ("string" == typeof e) return "event " === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).substring(0, 6) ? function(e) {
                                var t = {
                                        anonymous: !1,
                                        inputs: [],
                                        name: "",
                                        type: "event"
                                    },
                                    r = e.match(y);
                                if (!r) throw new Error("invalid event: " + e);
                                if (t.name = r[1].trim(), ie(r[2]).forEach((function(e) {
                                        (e = b(e, !0)).indexed = !!e.indexed, t.inputs.push(e)
                                    })), r[3].split(" ").forEach((function(e) {
                                        switch (e) {
                                            case "anonymous":
                                                t.anonymous = !0;
                                                break;
                                            case "":
                                                break;
                                            default:
                                                a.info("unknown modifier: " + e)
                                        }
                                    })), t.name && !t.name.match(m)) throw new Error('invalid identifier: "' + t.name + '"');
                                return t
                            }(e.substring(6).trim()) : ("function " === e.substring(0, 9) && (e = e.substring(9)), function(e) {
                                var t = {
                                        constant: !1,
                                        gas: null,
                                        inputs: [],
                                        name: "",
                                        outputs: [],
                                        payable: !1,
                                        stateMutability: null,
                                        type: "function"
                                    },
                                    r = e.split("@");
                                if (1 !== r.length) {
                                    if (2 < r.length) throw new Error("invalid signature");
                                    if (!r[1].match(/^[0-9]+$/)) throw new Error("invalid signature gas");
                                    t.gas = l.bigNumberify(r[1]), e = r[0]
                                }
                                var n = (r = e.split(" returns "))[0].match(y);
                                if (!n) throw new Error("invalid signature");
                                if (t.name = n[1].trim(), !t.name.match(m)) throw new Error('invalid identifier: "' + n[1] + '"');
                                if (ie(n[2]).forEach((function(e) {
                                        t.inputs.push(b(e))
                                    })), n[3].split(" ").forEach((function(e) {
                                        switch (e) {
                                            case "constant":
                                                t.constant = !0;
                                                break;
                                            case "payable":
                                                t.payable = !0, t.stateMutability = "payable";
                                                break;
                                            case "pure":
                                                t.constant = !0, t.stateMutability = "pure";
                                                break;
                                            case "view":
                                                t.constant = !0, t.stateMutability = "view";
                                                break;
                                            case "external":
                                            case "public":
                                            case "":
                                                break;
                                            default:
                                                a.info("unknown modifier: " + e)
                                        }
                                    })), 1 < r.length) {
                                    var i = r[1].match(y);
                                    if ("" != i[1].trim() || "" != i[3].trim()) throw new Error("unexpected tokens");
                                    ie(i[2]).forEach((function(e) {
                                        t.outputs.push(b(e))
                                    }))
                                }
                                if ("constructor" === t.name) {
                                    if (t.type = "constructor", t.outputs.length) throw new Error("constructor may not have outputs");
                                    delete t.name, delete t.outputs
                                }
                                return t
                            }(e.trim()));
                            throw new Error("unknown signature")
                        };
                        var M, A = (i(E, M = _), E.prototype.encode = function(e) {
                            return this.coder.encode(e)
                        }, E.prototype.decode = function(e, t) {
                            return this.coder.decode(e, t)
                        }, E);

                        function E(e) {
                            var t = M.call(this, e.coerceFunc, e.name, e.type, void 0, e.dynamic) || this;
                            return c.defineReadOnly(t, "coder", e), t
                        }
                        var S, k = (i(N, S = _), N.prototype.encode = function(e) {
                            return h.arrayify([])
                        }, N.prototype.decode = function(e, t) {
                            if (t > e.length) throw new Error("invalid null");
                            return {
                                consumed: 0,
                                value: this.coerceFunc("null", void 0)
                            }
                        }, N);

                        function N(e, t) {
                            return S.call(this, e, "null", "", t, !1) || this
                        }
                        var x, P = (i(I, x = _), I.prototype.encode = function(e) {
                            try {
                                var t = l.bigNumberify(e);
                                if (this.signed) {
                                    var r = s.MaxUint256.maskn(8 * this.size - 1);
                                    if (t.gt(r)) throw new Error("out-of-bounds");
                                    if (r = r.add(s.One).mul(s.NegativeOne), t.lt(r)) throw new Error("out-of-bounds")
                                } else if (t.lt(s.Zero) || t.gt(s.MaxUint256.maskn(8 * this.size))) throw new Error("out-of-bounds");
                                return t = t.toTwos(8 * this.size).maskn(8 * this.size), this.signed && (t = t.fromTwos(8 * this.size).toTwos(256)), h.padZeros(h.arrayify(t), 32)
                            } catch (t) {
                                a.throwError("invalid number value", a.INVALID_ARGUMENT, {
                                    arg: this.localName,
                                    coderType: this.name,
                                    value: e
                                })
                            }
                            return null
                        }, I.prototype.decode = function(e, t) {
                            e.length < t + 32 && a.throwError("insufficient data for " + this.name + " type", a.INVALID_ARGUMENT, {
                                arg: this.localName,
                                coderType: this.name,
                                value: h.hexlify(e.slice(t, t + 32))
                            });
                            var r = 32 - this.size,
                                n = l.bigNumberify(e.slice(t + r, t + 32));
                            return n = this.signed ? n.fromTwos(8 * this.size) : n.maskn(8 * this.size), {
                                consumed: 32,
                                value: this.coerceFunc(this.name, n)
                            }
                        }, I);

                        function I(e, t, r, n) {
                            var i = this,
                                o = (r ? "int" : "uint") + 8 * t;
                            return (i = x.call(this, e, o, o, n, !1) || this).size = t, i.signed = r, i
                        }
                        var T, R = new P((function(e, t) {
                                return t
                            }), 32, !1, "none"),
                            O = (i(C, T = _), C.prototype.encode = function(e) {
                                return R.encode(e ? 1 : 0)
                            }, C.prototype.decode = function(e, t) {
                                try {
                                    var r = R.decode(e, t)
                                } catch (e) {
                                    throw "insufficient data for uint256 type" === e.reason && a.throwError("insufficient data for boolean type", a.INVALID_ARGUMENT, {
                                        arg: this.localName,
                                        coderType: "boolean",
                                        value: e.value
                                    }), e
                                }
                                return {
                                    consumed: r.consumed,
                                    value: this.coerceFunc("bool", !r.value.isZero())
                                }
                            }, C);

                        function C(e, t) {
                            return T.call(this, e, "bool", "bool", t, !1) || this
                        }
                        var L, D = (i(B, L = _), B.prototype.encode = function(e) {
                            var t = new Uint8Array(32);
                            try {
                                var r = h.arrayify(e);
                                if (r.length !== this.length) throw new Error("incorrect data length");
                                t.set(r)
                            } catch (t) {
                                a.throwError("invalid " + this.name + " value", a.INVALID_ARGUMENT, {
                                    arg: this.localName,
                                    coderType: this.name,
                                    value: t.value || e
                                })
                            }
                            return t
                        }, B.prototype.decode = function(e, t) {
                            return e.length < t + 32 && a.throwError("insufficient data for " + this.name + " type", a.INVALID_ARGUMENT, {
                                arg: this.localName,
                                coderType: this.name,
                                value: h.hexlify(e.slice(t, t + 32))
                            }), {
                                consumed: 32,
                                value: this.coerceFunc(this.name, h.hexlify(e.slice(t, t + this.length)))
                            }
                        }, B);

                        function B(e, t, r) {
                            var n = this,
                                i = "bytes" + t;
                            return (n = L.call(this, e, i, i, r, !1) || this).length = t, n
                        }
                        var U, F = (i(j, U = _), j.prototype.encode = function(e) {
                            var t = new Uint8Array(32);
                            try {
                                t.set(h.arrayify(u.getAddress(e)), 12)
                            } catch (t) {
                                a.throwError("invalid address", a.INVALID_ARGUMENT, {
                                    arg: this.localName,
                                    coderType: "address",
                                    value: e
                                })
                            }
                            return t
                        }, j.prototype.decode = function(e, t) {
                            return e.length < t + 32 && a.throwError("insufficient data for address type", a.INVALID_ARGUMENT, {
                                arg: this.localName,
                                coderType: "address",
                                value: h.hexlify(e.slice(t, t + 32))
                            }), {
                                consumed: 32,
                                value: this.coerceFunc("address", u.getAddress(h.hexlify(e.slice(t + 12, t + 32))))
                            }
                        }, j);

                        function j(e, t) {
                            return U.call(this, e, "address", "address", t, !1) || this
                        }

                        function G(e) {
                            var t = 32 * Math.ceil(e.length / 32),
                                r = new Uint8Array(t - e.length);
                            return h.concat([R.encode(e.length), e, r])
                        }

                        function H(e, t, r) {
                            e.length < t + 32 && a.throwError("insufficient data for dynamicBytes length", a.INVALID_ARGUMENT, {
                                arg: r,
                                coderType: "dynamicBytes",
                                value: h.hexlify(e.slice(t, t + 32))
                            });
                            var n = R.decode(e, t).value;
                            try {
                                n = n.toNumber()
                            } catch (e) {
                                a.throwError("dynamic bytes count too large", a.INVALID_ARGUMENT, {
                                    arg: r,
                                    coderType: "dynamicBytes",
                                    value: n.toString()
                                })
                            }
                            return e.length < t + 32 + n && a.throwError("insufficient data for dynamicBytes type", a.INVALID_ARGUMENT, {
                                arg: r,
                                coderType: "dynamicBytes",
                                value: h.hexlify(e.slice(t, t + 32 + n))
                            }), {
                                consumed: 32 + 32 * Math.ceil(n / 32),
                                value: e.slice(t + 32, t + 32 + n)
                            }
                        }
                        var z, V = (i(K, z = _), K.prototype.encode = function(e) {
                            try {
                                return G(h.arrayify(e))
                            } catch (e) {
                                a.throwError("invalid bytes value", a.INVALID_ARGUMENT, {
                                    arg: this.localName,
                                    coderType: "bytes",
                                    value: e.value
                                })
                            }
                            return null
                        }, K.prototype.decode = function(e, t) {
                            var r = H(e, t, this.localName);
                            return r.value = this.coerceFunc("bytes", h.hexlify(r.value)), r
                        }, K);

                        function K(e, t) {
                            return z.call(this, e, "bytes", "bytes", t, !0) || this
                        }
                        var q, W = (i(Z, q = _), Z.prototype.encode = function(e) {
                            return "string" != typeof e && a.throwError("invalid string value", a.INVALID_ARGUMENT, {
                                arg: this.localName,
                                coderType: "string",
                                value: e
                            }), G(f.toUtf8Bytes(e))
                        }, Z.prototype.decode = function(e, t) {
                            var r = H(e, t, this.localName);
                            return r.value = this.coerceFunc("string", f.toUtf8String(r.value)), r
                        }, Z);

                        function Z(e, t) {
                            return q.call(this, e, "string", "string", t, !0) || this
                        }

                        function J(e) {
                            return 32 * Math.ceil(e / 32)
                        }

                        function X(e, t) {
                            if (Array.isArray(t));
                            else if (t && "object" == typeof t) {
                                var r = [];
                                e.forEach((function(e) {
                                    r.push(t[e.localName])
                                })), t = r
                            } else a.throwError("invalid tuple value", a.INVALID_ARGUMENT, {
                                coderType: "tuple",
                                value: t
                            });
                            e.length !== t.length && a.throwError("types/value length mismatch", a.INVALID_ARGUMENT, {
                                coderType: "tuple",
                                value: t
                            });
                            var n = [];
                            e.forEach((function(e, r) {
                                n.push({
                                    dynamic: e.dynamic,
                                    value: e.encode(t[r])
                                })
                            }));
                            var i = 0,
                                o = 0;
                            n.forEach((function(e) {
                                e.dynamic ? (i += 32, o += J(e.value.length)) : i += J(e.value.length)
                            }));
                            var s = 0,
                                u = i,
                                l = new Uint8Array(i + o);
                            return n.forEach((function(e) {
                                e.dynamic ? (l.set(R.encode(u), s), s += 32, l.set(e.value, u), u += J(e.value.length)) : (l.set(e.value, s), s += J(e.value.length))
                            })), l
                        }

                        function $(e, t, r) {
                            var n = r,
                                i = 0,
                                o = [];
                            return e.forEach((function(e) {
                                if (e.dynamic) {
                                    var s = R.decode(t, r);
                                    (a = e.decode(t, n + s.value.toNumber())).consumed = s.consumed
                                } else var a = e.decode(t, r);
                                null != a.value && o.push(a.value), r += a.consumed, i += a.consumed
                            })), e.forEach((function(e, t) {
                                var r = e.localName;
                                r && ("length" === r && (r = "_length"), null == o[r] && (o[r] = o[t]))
                            })), {
                                value: o,
                                consumed: i
                            }
                        }
                        var Q, Y = (i(ee, Q = _), ee.prototype.encode = function(e) {
                            Array.isArray(e) || a.throwError("expected array value", a.INVALID_ARGUMENT, {
                                arg: this.localName,
                                coderType: "array",
                                value: e
                            });
                            var t = this.length,
                                r = new Uint8Array(0); - 1 === t && (t = e.length, r = R.encode(t)), a.checkArgumentCount(t, e.length, " in coder array" + (this.localName ? " " + this.localName : ""));
                            for (var n = [], i = 0; i < e.length; i++) n.push(this.coder);
                            return h.concat([r, X(n, e)])
                        }, ee.prototype.decode = function(e, t) {
                            var r = 0,
                                n = this.length;
                            if (-1 === n) {
                                try {
                                    var i = R.decode(e, t)
                                } catch (e) {
                                    a.throwError("insufficient data for dynamic array length", a.INVALID_ARGUMENT, {
                                        arg: this.localName,
                                        coderType: "array",
                                        value: e.value
                                    })
                                }
                                try {
                                    n = i.value.toNumber()
                                } catch (e) {
                                    a.throwError("array count too large", a.INVALID_ARGUMENT, {
                                        arg: this.localName,
                                        coderType: "array",
                                        value: i.value.toString()
                                    })
                                }
                                r += i.consumed, t += i.consumed
                            }
                            for (var o = [], s = 0; s < n; s++) o.push(new A(this.coder));
                            var u = $(o, e, t);
                            return u.consumed += r, u.value = this.coerceFunc(this.type, u.value), u
                        }, ee);

                        function ee(e, t, r, n) {
                            var i = this,
                                o = t.type + "[" + (0 <= r ? r : "") + "]",
                                s = -1 === r || t.dynamic;
                            return (i = Q.call(this, e, "array", o, n, s) || this).coder = t, i.length = r, i
                        }
                        var te, re = (i(ne, te = _), ne.prototype.encode = function(e) {
                            return X(this.coders, e)
                        }, ne.prototype.decode = function(e, t) {
                            var r = $(this.coders, e, t);
                            return r.value = this.coerceFunc(this.type, r.value), r
                        }, ne);

                        function ne(e, t, r) {
                            var n = this,
                                i = !1,
                                o = [];
                            t.forEach((function(e) {
                                e.dynamic && (i = !0), o.push(e.type)
                            }));
                            var s = "tuple(" + o.join(",") + ")";
                            return (n = te.call(this, e, "tuple", s, r, i) || this).coders = t, n
                        }

                        function ie(e) {
                            e = e.trim();
                            for (var t = [], r = "", n = 0, i = 0; i < e.length; i++) {
                                var o = e[i];
                                if ("," === o && 0 === n) t.push(r), r = "";
                                else if (r += o, "(" === o) n++;
                                else if (")" === o && -1 === --n) throw new Error("unbalanced parenthsis")
                            }
                            return r && t.push(r), t
                        }
                        var oe = {
                            address: F,
                            bool: O,
                            string: W,
                            bytes: V
                        };

                        function se(e, t) {
                            var r, n = oe[t.type];
                            if (n) return new n(e, t.name);
                            if (r = t.type.match(p)) return (0 === (i = parseInt(r[2] || "256")) || 256 < i || i % 8 != 0) && a.throwError("invalid " + r[1] + " bit length", a.INVALID_ARGUMENT, {
                                arg: "param",
                                value: t
                            }), new P(e, i / 8, "int" === r[1], t.name);
                            if (r = t.type.match(d)) return (0 === (i = parseInt(r[1])) || 32 < i) && a.throwError("invalid bytes length", a.INVALID_ARGUMENT, {
                                arg: "param",
                                value: t
                            }), new D(e, i, t.name);
                            if (r = t.type.match(v)) {
                                var i = parseInt(r[2] || "-1");
                                return (t = c.shallowCopy(t)).type = r[1], t = c.deepCopy(t), new Y(e, se(e, t), i, t.name)
                            }
                            return "tuple" === t.type.substring(0, 5) ? function(e, t, r) {
                                var n = [];
                                return (t = t || []).forEach((function(t) {
                                    n.push(se(e, t))
                                })), new re(e, n, r)
                            }(e, t.components, t.name) : "" === t.type ? new k(e, t.name) : (a.throwError("invalid type", a.INVALID_ARGUMENT, {
                                arg: "type",
                                value: t.type
                            }), null)
                        }
                        var ae = (ue.prototype.encode = function(e, t) {
                            e.length !== t.length && a.throwError("types/values length mismatch", a.INVALID_ARGUMENT, {
                                count: {
                                    types: e.length,
                                    values: t.length
                                },
                                value: {
                                    types: e,
                                    values: t
                                }
                            });
                            var r = [];
                            return e.forEach((function(e) {
                                var t = null;
                                t = "string" == typeof e ? b(e) : e, r.push(se(this.coerceFunc, t))
                            }), this), h.hexlify(new re(this.coerceFunc, r, "_").encode(t))
                        }, ue.prototype.decode = function(e, t) {
                            var r = [];
                            return e.forEach((function(e) {
                                var t = null;
                                t = "string" == typeof e ? b(e) : c.deepCopy(e), r.push(se(this.coerceFunc, t))
                            }), this), new re(this.coerceFunc, r, "_").decode(h.arrayify(t), 0).value
                        }, ue);

                        function ue(e) {
                            a.checkNew(this, ue), e = e || r.defaultCoerceFunc, c.defineReadOnly(this, "coerceFunc", e)
                        }
                        r.AbiCoder = ae, r.defaultAbiCoder = new ae
                    }, {
                        "../constants": 3,
                        "../errors": 5,
                        "./address": 60,
                        "./bignumber": 63,
                        "./bytes": 64,
                        "./properties": 74,
                        "./utf8": 85
                    }],
                    60: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importDefault || function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("bn.js")),
                            o = e("./bytes"),
                            s = e("./keccak256"),
                            a = e("./rlp"),
                            u = e("../errors");

                        function l(e) {
                            "string" == typeof e && e.match(/^0x[0-9A-Fa-f]{40}$/) || u.throwError("invalid address", u.INVALID_ARGUMENT, {
                                arg: "address",
                                value: e
                            });
                            for (var t = (e = e.toLowerCase()).substring(2).split(""), r = new Uint8Array(40), n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
                            r = o.arrayify(s.keccak256(r));
                            for (var i = 0; i < 40; i += 2) 8 <= r[i >> 1] >> 4 && (t[i] = t[i].toUpperCase()), 8 <= (15 & r[i >> 1]) && (t[i + 1] = t[i + 1].toUpperCase());
                            return "0x" + t.join("")
                        }
                        for (var h = {}, f = 0; f < 10; f++) h[String(f)] = String(f);
                        for (f = 0; f < 26; f++) h[String.fromCharCode(65 + f)] = String(10 + f);
                        var c, d = Math.floor((c = 9007199254740991, Math.log10 ? Math.log10(c) : Math.log(c) / Math.LN10));

                        function p(e) {
                            e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00";
                            var t = "";
                            for (e.split("").forEach((function(e) {
                                    t += h[e]
                                })); t.length >= d;) {
                                var r = t.substring(0, d);
                                t = parseInt(r, 10) % 97 + t.substring(r.length)
                            }
                            for (var n = String(98 - parseInt(t, 10) % 97); n.length < 2;) n = "0" + n;
                            return n
                        }

                        function v(e) {
                            var t = null;
                            if ("string" != typeof e && u.throwError("invalid address", u.INVALID_ARGUMENT, {
                                    arg: "address",
                                    value: e
                                }), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = l(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && u.throwError("bad address checksum", u.INVALID_ARGUMENT, {
                                arg: "address",
                                value: e
                            });
                            else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                                for (e.substring(2, 4) !== p(e) && u.throwError("bad icap checksum", u.INVALID_ARGUMENT, {
                                        arg: "address",
                                        value: e
                                    }), t = new i.default.BN(e.substring(4), 36).toString(16); t.length < 40;) t = "0" + t;
                                t = l("0x" + t)
                            } else u.throwError("invalid address", u.INVALID_ARGUMENT, {
                                arg: "address",
                                value: e
                            });
                            return t
                        }
                        r.getAddress = v, r.getIcapAddress = function(e) {
                            for (var t = new i.default.BN(v(e).substring(2), 16).toString(36).toUpperCase(); t.length < 30;) t = "0" + t;
                            return "XE" + p("XE00" + t) + t
                        }, r.getContractAddress = function(e) {
                            if (!e.from) throw new Error("missing from address");
                            var t = e.nonce;
                            return v("0x" + s.keccak256(a.encode([v(e.from), o.stripZeros(o.hexlify(t))])).substring(26))
                        }, r.getCreate2Address = function(e) {
                            var t = e.initCodeHash;
                            e.initCode && (t ? s.keccak256(e.initCode) !== t && u.throwError("initCode/initCodeHash mismatch", u.INVALID_ARGUMENT, {
                                arg: "options",
                                value: e
                            }) : t = s.keccak256(e.initCode)), t || u.throwError("missing initCode or initCodeHash", u.INVALID_ARGUMENT, {
                                arg: "options",
                                value: e
                            });
                            var r = v(e.from),
                                n = o.arrayify(e.salt);
                            return 32 !== n.length && u.throwError("invalid salt", u.INVALID_ARGUMENT, {
                                arg: "options",
                                value: e
                            }), v("0x" + s.keccak256(o.concat(["0xff", r, n, t])).substring(26))
                        }
                    }, {
                        "../errors": 5,
                        "./bytes": 64,
                        "./keccak256": 71,
                        "./rlp": 76,
                        "bn.js": 9
                    }],
                    61: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("../utils/bytes");
                        t.exports = {
                            decode: function(e) {
                                e = atob(e);
                                for (var t = [], r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
                                return n.arrayify(t)
                            },
                            encode: function(e) {
                                e = n.arrayify(e);
                                for (var t = "", r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                                return btoa(t)
                            }
                        }
                    }, {
                        "../utils/bytes": 64
                    }],
                    62: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./bytes"),
                            i = e("./properties"),
                            o = (s.prototype.encode = function(e) {
                                var t = n.arrayify(e);
                                if (0 === t.length) return "";
                                for (var r = [0], i = 0; i < t.length; ++i) {
                                    for (var o = t[i], s = 0; s < r.length; ++s) o += r[s] << 8, r[s] = o % this.base, o = o / this.base | 0;
                                    for (; 0 < o;) r.push(o % this.base), o = o / this.base | 0
                                }
                                for (var a = "", u = 0; 0 === t[u] && u < t.length - 1; ++u) a += this._leader;
                                for (var l = r.length - 1; 0 <= l; --l) a += this.alphabet[r[l]];
                                return a
                            }, s.prototype.decode = function(e) {
                                if ("string" != typeof e) throw new TypeError("Expected String");
                                var t = [];
                                if (0 === e.length) return new Uint8Array(t);
                                t.push(0);
                                for (var r = 0; r < e.length; r++) {
                                    var i = this._alphabetMap[e[r]];
                                    if (void 0 === i) throw new Error("Non-base" + this.base + " character");
                                    for (var o = i, s = 0; s < t.length; ++s) o += t[s] * this.base, t[s] = 255 & o, o >>= 8;
                                    for (; 0 < o;) t.push(255 & o), o >>= 8
                                }
                                for (var a = 0; e[a] === this._leader && a < e.length - 1; ++a) t.push(0);
                                return n.arrayify(new Uint8Array(t.reverse()))
                            }, s);

                        function s(e) {
                            i.defineReadOnly(this, "alphabet", e), i.defineReadOnly(this, "base", e.length), i.defineReadOnly(this, "_alphabetMap", {}), i.defineReadOnly(this, "_leader", e.charAt(0));
                            for (var t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t
                        }
                        var a = new(r.BaseX = o)("abcdefghijklmnopqrstuvwxyz234567");
                        r.Base32 = a;
                        var u = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
                        r.Base58 = u
                    }, {
                        "./bytes": 64,
                        "./properties": 74
                    }],
                    63: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importDefault || function(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            },
                            i = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var o = n(e("bn.js")),
                            s = e("./bytes"),
                            a = e("./properties"),
                            u = i(e("../errors")),
                            l = new o.default.BN(-1);

                        function h(e) {
                            var t = e.toString(16);
                            return "-" === t[0] ? t.length % 2 == 0 ? "-0x0" + t.substring(1) : "-0x" + t.substring(1) : t.length % 2 == 1 ? "0x0" + t : "0x" + t
                        }

                        function f(e) {
                            return d(y(e))
                        }

                        function c(e) {
                            return new p(h(e))
                        }

                        function d(e) {
                            var t = e._hex;
                            return "-" === t[0] ? new o.default.BN(t.substring(3), 16).mul(l) : new o.default.BN(t.substring(2), 16)
                        }
                        var p = (v.prototype.fromTwos = function(e) {
                            return c(d(this).fromTwos(e))
                        }, v.prototype.toTwos = function(e) {
                            return c(d(this).toTwos(e))
                        }, v.prototype.abs = function() {
                            return "-" === this._hex[0] ? c(d(this).mul(l)) : this
                        }, v.prototype.add = function(e) {
                            return c(d(this).add(f(e)))
                        }, v.prototype.sub = function(e) {
                            return c(d(this).sub(f(e)))
                        }, v.prototype.div = function(e) {
                            return y(e).isZero() && u.throwError("division by zero", u.NUMERIC_FAULT, {
                                operation: "divide",
                                fault: "division by zero"
                            }), c(d(this).div(f(e)))
                        }, v.prototype.mul = function(e) {
                            return c(d(this).mul(f(e)))
                        }, v.prototype.mod = function(e) {
                            return c(d(this).mod(f(e)))
                        }, v.prototype.pow = function(e) {
                            return c(d(this).pow(f(e)))
                        }, v.prototype.maskn = function(e) {
                            return c(d(this).maskn(e))
                        }, v.prototype.eq = function(e) {
                            return d(this).eq(f(e))
                        }, v.prototype.lt = function(e) {
                            return d(this).lt(f(e))
                        }, v.prototype.lte = function(e) {
                            return d(this).lte(f(e))
                        }, v.prototype.gt = function(e) {
                            return d(this).gt(f(e))
                        }, v.prototype.gte = function(e) {
                            return d(this).gte(f(e))
                        }, v.prototype.isZero = function() {
                            return d(this).isZero()
                        }, v.prototype.toNumber = function() {
                            try {
                                return d(this).toNumber()
                            } catch (e) {
                                u.throwError("overflow", u.NUMERIC_FAULT, {
                                    operation: "setValue",
                                    fault: "overflow",
                                    details: e.message
                                })
                            }
                            return null
                        }, v.prototype.toString = function() {
                            return d(this).toString(10)
                        }, v.prototype.toHexString = function() {
                            return this._hex
                        }, v.isBigNumber = function(e) {
                            return a.isType(e, "BigNumber")
                        }, v);

                        function v(e) {
                            if (u.checkNew(this, v), a.setType(this, "BigNumber"), "string" == typeof e) s.isHexString(e) ? ("0x" == e && (e = "0x0"), a.defineReadOnly(this, "_hex", e)) : "-" === e[0] && s.isHexString(e.substring(1)) ? a.defineReadOnly(this, "_hex", e) : e.match(/^-?[0-9]*$/) ? ("" == e && (e = "0"), a.defineReadOnly(this, "_hex", h(new o.default.BN(e)))) : u.throwError("invalid BigNumber string value", u.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            });
                            else if ("number" == typeof e) {
                                parseInt(String(e)) !== e && u.throwError("underflow", u.NUMERIC_FAULT, {
                                    operation: "setValue",
                                    fault: "underflow",
                                    value: e,
                                    outputValue: parseInt(String(e))
                                });
                                try {
                                    a.defineReadOnly(this, "_hex", h(new o.default.BN(e)))
                                } catch (e) {
                                    u.throwError("overflow", u.NUMERIC_FAULT, {
                                        operation: "setValue",
                                        fault: "overflow",
                                        details: e.message
                                    })
                                }
                            } else e instanceof v ? a.defineReadOnly(this, "_hex", e._hex) : e.toHexString ? a.defineReadOnly(this, "_hex", h(f(e.toHexString()))) : e._hex && s.isHexString(e._hex) ? a.defineReadOnly(this, "_hex", e._hex) : s.isArrayish(e) ? a.defineReadOnly(this, "_hex", h(new o.default.BN(s.hexlify(e).substring(2), 16))) : u.throwError("invalid BigNumber value", u.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            })
                        }

                        function y(e) {
                            return p.isBigNumber(e) ? e : new p(e)
                        }
                        r.BigNumber = p, r.bigNumberify = y
                    }, {
                        "../errors": 5,
                        "./bytes": 64,
                        "./properties": 74,
                        "bn.js": 9
                    }],
                    64: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("../errors"));

                        function o(e) {
                            return !!e.toHexString
                        }

                        function s(e) {
                            return e.slice || (e.slice = function() {
                                var t = Array.prototype.slice.call(arguments);
                                return s(new Uint8Array(Array.prototype.slice.apply(e, t)))
                            }), e
                        }

                        function a(e) {
                            if (!e || parseInt(String(e.length)) != e.length || "string" == typeof e) return !1;
                            for (var t = 0; t < e.length; t++) {
                                var r = e[t];
                                if (r < 0 || 256 <= r || parseInt(String(r)) != r) return !1
                            }
                            return !0
                        }

                        function u(e) {
                            if (null == e && i.throwError("cannot convert null value to array", i.INVALID_ARGUMENT, {
                                    arg: "value",
                                    value: e
                                }), o(e) && (e = e.toHexString()), "string" != typeof e) return a(e) ? s(new Uint8Array(e)) : (i.throwError("invalid arrayify value", null, {
                                arg: "value",
                                value: e,
                                type: typeof e
                            }), null);
                            var t = e.match(/^(0x)?[0-9a-fA-F]*$/);
                            t || i.throwError("invalid hexidecimal string", i.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            }), "0x" !== t[1] && i.throwError("hex string must have 0x prefix", i.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            }), (e = e.substring(2)).length % 2 && (e = "0" + e);
                            for (var r = [], n = 0; n < e.length; n += 2) r.push(parseInt(e.substr(n, 2), 16));
                            return s(new Uint8Array(r))
                        }

                        function l(e) {
                            for (var t = [], r = 0, n = 0; n < e.length; n++) {
                                var i = u(e[n]);
                                t.push(i), r += i.length
                            }
                            var o = new Uint8Array(r),
                                a = 0;
                            for (n = 0; n < t.length; n++) o.set(t[n], a), a += t[n].length;
                            return s(o)
                        }

                        function h(e, t) {
                            return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
                        }
                        r.isHexable = o, r.isArrayish = a, r.arrayify = u, r.concat = l, r.stripZeros = function(e) {
                            var t = u(e);
                            if (0 === t.length) return t;
                            for (var r = 0; 0 === t[r];) r++;
                            return r && (t = t.slice(r)), t
                        }, r.padZeros = function(e, t) {
                            if (t < (e = u(e)).length) throw new Error("cannot pad");
                            var r = new Uint8Array(t);
                            return r.set(e, t - e.length), s(r)
                        }, r.isHexString = h;
                        var f = "0123456789abcdef";

                        function c(e) {
                            if (o(e)) return e.toHexString();
                            if ("number" == typeof e) {
                                e < 0 && i.throwError("cannot hexlify negative value", i.INVALID_ARGUMENT, {
                                    arg: "value",
                                    value: e
                                }), 9007199254740991 <= e && i.throwError("out-of-range", i.NUMERIC_FAULT, {
                                    operartion: "hexlify",
                                    fault: "out-of-safe-range"
                                });
                                for (var t = ""; e;) t = f[15 & e] + t, e = Math.floor(e / 16);
                                return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
                            }
                            if ("string" == typeof e) {
                                var r = e.match(/^(0x)?[0-9a-fA-F]*$/);
                                return r || i.throwError("invalid hexidecimal string", i.INVALID_ARGUMENT, {
                                    arg: "value",
                                    value: e
                                }), "0x" !== r[1] && i.throwError("hex string must have 0x prefix", i.INVALID_ARGUMENT, {
                                    arg: "value",
                                    value: e
                                }), e.length % 2 && (e = "0x0" + e.substring(2)), e
                            }
                            if (a(e)) {
                                for (var n = [], s = 0; s < e.length; s++) {
                                    var u = e[s];
                                    n.push(f[(240 & u) >> 4] + f[15 & u])
                                }
                                return "0x" + n.join("")
                            }
                            return i.throwError("invalid hexlify value", null, {
                                arg: "value",
                                value: e
                            }), "never"
                        }

                        function d(e, t) {
                            for (h(e) || i.throwError("invalid hex string", i.INVALID_ARGUMENT, {
                                    arg: "value",
                                    value: e
                                }); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
                            return e
                        }

                        function p(e) {
                            var t = 0,
                                r = "0x",
                                n = "0x";
                            if (function(e) {
                                    return e && null != e.r && null != e.s
                                }(e)) {
                                null == e.v && null == e.recoveryParam && i.throwError("at least on of recoveryParam or v must be specified", i.INVALID_ARGUMENT, {
                                    argument: "signature",
                                    value: e
                                }), r = d(e.r, 32), n = d(e.s, 32), "string" == typeof(t = e.v) && (t = parseInt(t, 16));
                                var o = e.recoveryParam;
                                null == o && null != e.v && (o = 1 - t % 2), t = 27 + o
                            } else {
                                var s = u(e);
                                if (65 !== s.length) throw new Error("invalid signature");
                                r = c(s.slice(0, 32)), n = c(s.slice(32, 64)), 27 !== (t = s[64]) && 28 !== t && (t = 27 + t % 2)
                            }
                            return {
                                r: r,
                                s: n,
                                recoveryParam: t - 27,
                                v: t
                            }
                        }
                        r.hexlify = c, r.hexDataLength = function(e) {
                            return h(e) && e.length % 2 == 0 ? (e.length - 2) / 2 : null
                        }, r.hexDataSlice = function(e, t, r) {
                            return h(e) || i.throwError("invalid hex data", i.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            }), e.length % 2 != 0 && i.throwError("hex data length must be even", i.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            }), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
                        }, r.hexStripZeros = function(e) {
                            for (h(e) || i.throwError("invalid hex string", i.INVALID_ARGUMENT, {
                                    arg: "value",
                                    value: e
                                }); 3 < e.length && "0x0" === e.substring(0, 3);) e = "0x" + e.substring(3);
                            return e
                        }, r.hexZeroPad = d, r.splitSignature = p, r.joinSignature = function(e) {
                            return c(l([(e = p(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
                        }
                    }, {
                        "../errors": 5
                    }],
                    65: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("../errors")),
                            o = e("./bytes"),
                            s = e("./utf8"),
                            a = e("./keccak256"),
                            u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                            l = new RegExp("^((.*)\\.)?([^.]+)$"),
                            h = new RegExp("^[a-z0-9.-]*$");
                        r.namehash = function(e) {
                            "string" != typeof e && i.throwError("invalid address - " + String(e), i.INVALID_ARGUMENT, {
                                argument: "name",
                                value: e
                            }), (e = e.toLowerCase()).match(h) || i.throwError("contains invalid UseSTD3ASCIIRules characters", i.INVALID_ARGUMENT, {
                                argument: "name",
                                value: e
                            });
                            for (var t = u; e.length;) {
                                var r = e.match(l),
                                    n = s.toUtf8Bytes(r[3]);
                                t = a.keccak256(o.concat([t, a.keccak256(n)])), e = r[2] || ""
                            }
                            return o.hexlify(t)
                        }, r.id = function(e) {
                            return a.keccak256(s.toUtf8Bytes(e))
                        }, r.hashMessage = function(e) {
                            return a.keccak256(o.concat([s.toUtf8Bytes("\x19Ethereum Signed Message:\n"), s.toUtf8Bytes(String(e.length)), "string" == typeof e ? s.toUtf8Bytes(e) : e]))
                        }
                    }, {
                        "../errors": 5,
                        "./bytes": 64,
                        "./keccak256": 71,
                        "./utf8": 85
                    }],
                    66: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("../errors")),
                            o = e("../wordlists/lang-en"),
                            s = e("./basex"),
                            a = e("./bytes"),
                            u = e("./bignumber"),
                            l = e("./utf8"),
                            h = e("./pbkdf2"),
                            f = e("./hmac"),
                            c = e("./properties"),
                            d = e("./secp256k1"),
                            p = e("./sha2"),
                            v = u.bigNumberify("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                            y = l.toUtf8Bytes("Bitcoin seed"),
                            m = 2147483648;

                        function g(e) {
                            return (1 << e) - 1 << 8 - e
                        }

                        function b(e) {
                            return a.hexZeroPad(a.hexlify(e), 32)
                        }

                        function w(e) {
                            var t = a.hexDataSlice(p.sha256(p.sha256(e)), 0, 4);
                            return s.Base58.encode(a.concat([e, t]))
                        }
                        var _ = {};
                        r.defaultPath = "m/44'/60'/0'/0/0";
                        var M = (Object.defineProperty(A.prototype, "extendedKey", {
                            get: function() {
                                if (256 <= this.depth) throw new Error("Depth too large!");
                                return w(a.concat([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", a.hexlify(this.depth), this.parentFingerprint, a.hexZeroPad(a.hexlify(this.index), 4), this.chainCode, null != this.privateKey ? a.concat(["0x00", this.privateKey]) : this.publicKey]))
                            },
                            enumerable: !0,
                            configurable: !0
                        }), A.prototype.neuter = function() {
                            return new A(_, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, null, this.path)
                        }, A.prototype._derive = function(e) {
                            if (4294967295 < e) throw new Error("invalid index - " + String(e));
                            var t = this.path;
                            t && (t += "/" + (e & ~m));
                            var r = new Uint8Array(37);
                            if (e & m) {
                                if (!this.privateKey) throw new Error("cannot derive child of neutered node");
                                r.set(a.arrayify(this.privateKey), 1), t && (t += "'")
                            } else r.set(a.arrayify(this.publicKey));
                            for (var n = 24; 0 <= n; n -= 8) r[33 + (n >> 3)] = e >> 24 - n & 255;
                            var i = f.computeHmac(f.SupportedAlgorithms.sha512, this.chainCode, r),
                                o = i.slice(0, 32),
                                s = i.slice(32),
                                l = null,
                                h = null;
                            return this.privateKey ? l = b(u.bigNumberify(o).add(this.privateKey).mod(v)) : h = new d.KeyPair(a.hexlify(o))._addPoint(this.publicKey), new A(_, l, h, this.fingerprint, b(s), e, this.depth + 1, this.mnemonic, t)
                        }, A.prototype.derivePath = function(e) {
                            var t = e.split("/");
                            if (0 === t.length || "m" === t[0] && 0 !== this.depth) throw new Error("invalid path - " + e);
                            "m" === t[0] && t.shift();
                            for (var r = this, n = 0; n < t.length; n++) {
                                var i = t[n];
                                if (i.match(/^[0-9]+'$/)) {
                                    var o = parseInt(i.substring(0, i.length - 1));
                                    if (m <= o) throw new Error("invalid path index - " + i);
                                    r = r._derive(m + o)
                                } else {
                                    if (!i.match(/^[0-9]+$/)) throw new Error("invalid path component - " + i);
                                    if (o = parseInt(i), m <= o) throw new Error("invalid path index - " + i);
                                    r = r._derive(o)
                                }
                            }
                            return r
                        }, A.isHDNode = function(e) {
                            return c.isType(e, "HDNode")
                        }, A);

                        function A(e, t, r, n, o, s, u, l, h) {
                            if (i.checkNew(this, A), e !== _) throw new Error("HDNode constructor cannot be called directly");
                            if (t) {
                                var f = new d.KeyPair(t);
                                c.defineReadOnly(this, "privateKey", f.privateKey), c.defineReadOnly(this, "publicKey", f.compressedPublicKey)
                            } else c.defineReadOnly(this, "privateKey", null), c.defineReadOnly(this, "publicKey", a.hexlify(r));
                            c.defineReadOnly(this, "parentFingerprint", n), c.defineReadOnly(this, "fingerprint", a.hexDataSlice(p.ripemd160(p.sha256(this.publicKey)), 0, 4)), c.defineReadOnly(this, "address", d.computeAddress(this.publicKey)), c.defineReadOnly(this, "chainCode", o), c.defineReadOnly(this, "index", s), c.defineReadOnly(this, "depth", u), c.defineReadOnly(this, "mnemonic", l), c.defineReadOnly(this, "path", h), c.setType(this, "HDNode")
                        }

                        function E(e, t) {
                            var r = a.arrayify(e);
                            if (r.length < 16 || 64 < r.length) throw new Error("invalid seed");
                            var n = a.arrayify(f.computeHmac(f.SupportedAlgorithms.sha512, y, r));
                            return new M(_, b(n.slice(0, 32)), null, "0x00000000", b(n.slice(32)), 0, 0, t, "m")
                        }

                        function S(e, t) {
                            t = t || "";
                            var r = l.toUtf8Bytes("mnemonic" + t, l.UnicodeNormalizationForm.NFKD);
                            return a.hexlify(h.pbkdf2(l.toUtf8Bytes(e, l.UnicodeNormalizationForm.NFKD), r, 2048, 64, "sha512"))
                        }

                        function k(e, t) {
                            t = t || o.langEn, i.checkNormalize();
                            var r = t.split(e);
                            if (r.length % 3 != 0) throw new Error("invalid mnemonic");
                            for (var n = a.arrayify(new Uint8Array(Math.ceil(11 * r.length / 8))), s = 0, u = 0; u < r.length; u++) {
                                var l = t.getWordIndex(r[u].normalize("NFKD"));
                                if (-1 === l) throw new Error("invalid mnemonic");
                                for (var h = 0; h < 11; h++) l & 1 << 10 - h && (n[s >> 3] |= 1 << 7 - s % 8), s++
                            }
                            var f = 32 * r.length / 3,
                                c = g(r.length / 3),
                                d = a.arrayify(p.sha256(n.slice(0, f / 8)))[0];
                            if ((d &= c) != (n[n.length - 1] & c)) throw new Error("invalid checksum");
                            return a.hexlify(n.slice(0, f / 8))
                        }

                        function N(e, t) {
                            if ((e = a.arrayify(e)).length % 4 != 0 || e.length < 16 || 32 < e.length) throw new Error("invalid entropy");
                            for (var r = [0], n = 11, i = 0; i < e.length; i++) 8 < n ? (r[r.length - 1] <<= 8, r[r.length - 1] |= e[i], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= e[i] >> 8 - n, r.push(e[i] & (1 << 8 - n) - 1), n += 3);
                            var s = a.arrayify(p.sha256(e))[0],
                                u = e.length / 4;
                            return s &= g(u), r[r.length - 1] <<= u, r[r.length - 1] |= s >> 8 - u, (t = t || o.langEn).join(r.map((function(e) {
                                return t.getWord(e)
                            })))
                        }
                        r.HDNode = M, r.fromExtendedKey = function(e) {
                            var t = s.Base58.decode(e);
                            82 === t.length && w(t.slice(0, 78)) === e || i.throwError("invalid extended key", i.INVALID_ARGUMENT, {
                                argument: "extendedKey",
                                value: "[REDACTED]"
                            });
                            var r = t[4],
                                n = a.hexlify(t.slice(5, 9)),
                                o = parseInt(a.hexlify(t.slice(9, 13)).substring(2), 16),
                                u = a.hexlify(t.slice(13, 45)),
                                l = t.slice(45, 78);
                            switch (a.hexlify(t.slice(0, 4))) {
                                case "0x0488b21e":
                                case "0x043587cf":
                                    return new M(_, null, a.hexlify(l), n, u, o, r, null, null);
                                case "0x0488ade4":
                                case "0x04358394":
                                    if (0 !== l[0]) break;
                                    return new M(_, a.hexlify(l.slice(1)), null, n, u, o, r, null, null)
                            }
                            return i.throwError("invalid extended key", i.INVALID_ARGUMENT, {
                                argument: "extendedKey",
                                value: "[REDACTED]"
                            })
                        }, r.fromMnemonic = function(e, t, r) {
                            return E(S(e = N(k(e, t), t), r), e)
                        }, r.fromSeed = function(e) {
                            return E(e, null)
                        }, r.mnemonicToSeed = S, r.mnemonicToEntropy = k, r.entropyToMnemonic = N, r.isValidMnemonic = function(e, t) {
                            try {
                                return k(e, t), !0
                            } catch (e) {}
                            return !1
                        }
                    }, {
                        "../errors": 5,
                        "../wordlists/lang-en": 90,
                        "./basex": 62,
                        "./bignumber": 63,
                        "./bytes": 64,
                        "./hmac": 67,
                        "./pbkdf2": 73,
                        "./properties": 74,
                        "./secp256k1": 77,
                        "./sha2": 79,
                        "./utf8": 85
                    }],
                    67: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i, o, s = n(e("hash.js")),
                            a = e("../utils/bytes"),
                            u = n(e("../errors"));
                        (o = i = r.SupportedAlgorithms || (r.SupportedAlgorithms = {})).sha256 = "sha256", o.sha512 = "sha512", r.computeHmac = function(e, t, r) {
                            return i[e] || u.throwError("unsupported algorithm " + e, u.UNSUPPORTED_OPERATION, {
                                operation: "hmac",
                                algorithm: e
                            }), a.arrayify(s.hmac(s[e], a.arrayify(t)).update(a.arrayify(r)).digest())
                        }
                    }, {
                        "../errors": 5,
                        "../utils/bytes": 64,
                        "hash.js": 26
                    }],
                    68: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = e("./abi-coder");
                        r.AbiCoder = i.AbiCoder, r.defaultAbiCoder = i.defaultAbiCoder, r.formatSignature = i.formatSignature, r.formatParamType = i.formatParamType, r.parseSignature = i.parseSignature, r.parseParamType = i.parseParamType;
                        var o = e("./address");
                        r.getAddress = o.getAddress, r.getContractAddress = o.getContractAddress, r.getCreate2Address = o.getCreate2Address, r.getIcapAddress = o.getIcapAddress;
                        var s = n(e("./base64"));
                        r.base64 = s;
                        var a = e("./bignumber");
                        r.BigNumber = a.BigNumber, r.bigNumberify = a.bigNumberify;
                        var u = e("./bytes");
                        r.arrayify = u.arrayify, r.concat = u.concat, r.hexDataSlice = u.hexDataSlice, r.hexDataLength = u.hexDataLength, r.hexlify = u.hexlify, r.hexStripZeros = u.hexStripZeros, r.hexZeroPad = u.hexZeroPad, r.isHexString = u.isHexString, r.joinSignature = u.joinSignature, r.padZeros = u.padZeros, r.splitSignature = u.splitSignature, r.stripZeros = u.stripZeros;
                        var l = e("./hash");
                        r.hashMessage = l.hashMessage, r.id = l.id, r.namehash = l.namehash;
                        var h = n(e("./hdnode"));
                        r.HDNode = h;
                        var f = e("./interface");
                        r.Interface = f.Interface;
                        var c = e("./json-wallet");
                        r.getJsonWalletAddress = c.getJsonWalletAddress;
                        var d = e("./keccak256");
                        r.keccak256 = d.keccak256;
                        var p = e("./sha2");
                        r.sha256 = p.sha256;
                        var v = e("./solidity");
                        r.solidityKeccak256 = v.keccak256, r.solidityPack = v.pack, r.soliditySha256 = v.sha256;
                        var y = e("./random-bytes");
                        r.randomBytes = y.randomBytes;
                        var m = e("./networks");
                        r.getNetwork = m.getNetwork;
                        var g = e("./properties");
                        r.checkProperties = g.checkProperties, r.deepCopy = g.deepCopy, r.defineReadOnly = g.defineReadOnly, r.resolveProperties = g.resolveProperties, r.shallowCopy = g.shallowCopy;
                        var b = n(e("./rlp"));
                        r.RLP = b;
                        var w = e("./secp256k1");
                        r.computeAddress = w.computeAddress, r.computePublicKey = w.computePublicKey, r.recoverAddress = w.recoverAddress, r.recoverPublicKey = w.recoverPublicKey, r.verifyMessage = w.verifyMessage;
                        var _ = e("./signing-key");
                        r.SigningKey = _.SigningKey;
                        var M = e("./transaction");
                        r.populateTransaction = M.populateTransaction;
                        var A = e("./transaction");
                        r.parseTransaction = A.parse, r.serializeTransaction = A.serialize;
                        var E = e("./utf8");
                        r.formatBytes32String = E.formatBytes32String, r.parseBytes32String = E.parseBytes32String, r.toUtf8Bytes = E.toUtf8Bytes, r.toUtf8String = E.toUtf8String;
                        var S = e("./units");
                        r.commify = S.commify, r.formatEther = S.formatEther, r.parseEther = S.parseEther, r.formatUnits = S.formatUnits, r.parseUnits = S.parseUnits;
                        var k = e("./web");
                        r.fetchJson = k.fetchJson, r.poll = k.poll;
                        var N = e("./hmac");
                        r.SupportedAlgorithms = N.SupportedAlgorithms;
                        var x = e("./utf8");
                        r.UnicodeNormalizationForm = x.UnicodeNormalizationForm;
                        var P = e("./wordlist");
                        r.Wordlist = P.Wordlist
                    }, {
                        "./abi-coder": 59,
                        "./address": 60,
                        "./base64": 61,
                        "./bignumber": 63,
                        "./bytes": 64,
                        "./hash": 65,
                        "./hdnode": 66,
                        "./hmac": 67,
                        "./interface": 69,
                        "./json-wallet": 70,
                        "./keccak256": 71,
                        "./networks": 72,
                        "./properties": 74,
                        "./random-bytes": 75,
                        "./rlp": 76,
                        "./secp256k1": 77,
                        "./sha2": 79,
                        "./signing-key": 81,
                        "./solidity": 82,
                        "./transaction": 83,
                        "./units": 84,
                        "./utf8": 85,
                        "./web": 86,
                        "./wordlist": 87
                    }],
                    69: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };

                        function s(e) {
                            for (var t in p.setType(this, "Description"), e) p.defineReadOnly(this, t, p.deepCopy(e[t], !0));
                            Object.freeze(this)
                        }
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var a, u = e("./address"),
                            l = e("./abi-coder"),
                            h = e("./bignumber"),
                            f = e("./bytes"),
                            c = e("./hash"),
                            d = e("./keccak256"),
                            p = e("./properties"),
                            v = o(e("../errors")),
                            y = function(e) {
                                p.setType(this, "Indexed"), p.defineReadOnly(this, "hash", e)
                            },
                            m = (i(g, a = s), g.prototype.encode = function(e, t) {
                                f.isHexString(e) || v.throwError("invalid contract bytecode", v.INVALID_ARGUMENT, {
                                    arg: "bytecode",
                                    value: e
                                }), v.checkArgumentCount(t.length, this.inputs.length, " in Interface constructor");
                                try {
                                    return e + l.defaultAbiCoder.encode(this.inputs, t).substring(2)
                                } catch (e) {
                                    v.throwError("invalid constructor argument", v.INVALID_ARGUMENT, {
                                        arg: e.arg,
                                        reason: e.reason,
                                        value: e.value
                                    })
                                }
                                return null
                            }, g);

                        function g() {
                            return null !== a && a.apply(this, arguments) || this
                        }
                        var b, w = (i(_, b = s), _.prototype.encode = function(e) {
                            v.checkArgumentCount(e.length, this.inputs.length, " in interface function " + this.name);
                            try {
                                return this.sighash + l.defaultAbiCoder.encode(this.inputs, e).substring(2)
                            } catch (e) {
                                v.throwError("invalid input argument", v.INVALID_ARGUMENT, {
                                    arg: e.arg,
                                    reason: e.reason,
                                    value: e.value
                                })
                            }
                            return null
                        }, _.prototype.decode = function(t) {
                            try {
                                return l.defaultAbiCoder.decode(this.outputs, f.arrayify(t))
                            } catch (e) {
                                v.throwError("invalid data for function output", v.INVALID_ARGUMENT, {
                                    arg: "data",
                                    errorArg: e.arg,
                                    errorValue: e.value,
                                    value: t,
                                    reason: e.reason
                                })
                            }
                        }, _);

                        function _() {
                            return null !== b && b.apply(this, arguments) || this
                        }
                        var M, A = (i(E, M = s), E);

                        function E() {
                            return null !== M && M.apply(this, arguments) || this
                        }
                        var S, k = (i(N, S = s), N.prototype.encodeTopics = function(e) {
                            var t = this;
                            e.length > this.inputs.length && v.throwError("too many arguments for " + this.name, v.UNEXPECTED_ARGUMENT, {
                                maxCount: e.length,
                                expectedCount: this.inputs.length
                            });
                            var r = [];
                            for (this.anonymous || r.push(this.topic), e.forEach((function(e, n) {
                                    var i = t.inputs[n];
                                    i.indexed ? null == e ? r.push(null) : "string" === i.type ? r.push(c.id(e)) : "bytes" === i.type ? r.push(d.keccak256(e)) : -1 !== i.type.indexOf("[") || "tuple" === i.type.substring(0, 5) ? v.throwError("filtering with tuples or arrays not implemented yet; bug us on GitHub", v.NOT_IMPLEMENTED, {
                                        operation: "filter(array|tuple)"
                                    }) : ("address" === i.type && u.getAddress(e), r.push(f.hexZeroPad(f.hexlify(e), 32).toLowerCase())) : null != e && v.throwError("cannot filter non-indexed parameters; must be null", v.INVALID_ARGUMENT, {
                                        argument: i.name || n,
                                        value: e
                                    })
                                })); r.length && null === r[r.length - 1];) r.pop();
                            return r
                        }, N.prototype.decode = function(e, t) {
                            null == t || this.anonymous || (t = t.slice(1));
                            var r = [],
                                n = [],
                                i = [];
                            if (this.inputs.forEach((function(e, t) {
                                    e.indexed ? "string" === e.type || "bytes" === e.type || 0 <= e.type.indexOf("[") || "tuple" === e.type.substring(0, 5) ? (r.push({
                                        type: "bytes32",
                                        name: e.name || ""
                                    }), i.push(!0)) : (r.push(e), i.push(!1)) : (n.push(e), i.push(!1))
                                })), null != t) var o = l.defaultAbiCoder.decode(r, f.concat(t));
                            var s = l.defaultAbiCoder.decode(n, f.arrayify(e)),
                                a = {},
                                u = 0,
                                h = 0;
                            return this.inputs.forEach((function(e, r) {
                                e.indexed ? null == t ? a[r] = new y(null) : i[r] ? a[r] = new y(o[h++]) : a[r] = o[h++] : a[r] = s[u++], e.name && (a[e.name] = a[r])
                            })), a.length = this.inputs.length, new A(a)
                        }, N);

                        function N() {
                            return null !== S && S.apply(this, arguments) || this
                        }
                        var x, P = (i(I, x = s), I);

                        function I() {
                            return null !== x && x.apply(this, arguments) || this
                        }
                        var T, R = (i(O, T = s), O);

                        function O() {
                            return null !== T && T.apply(this, arguments) || this
                        }

                        function C(e) {
                            switch (e.type) {
                                case "constructor":
                                    var t = new m({
                                        inputs: e.inputs,
                                        payable: null == e.payable || !!e.payable
                                    });
                                    this.deployFunction || (this.deployFunction = t);
                                    break;
                                case "function":
                                    var r = l.formatSignature(e).replace(/tuple/g, ""),
                                        n = c.id(r).substring(0, 10),
                                        i = !1;
                                    null != e.constant ? i = e.constant : null != e.stateMutability && (i = "view" == e.stateMutability || "pure" == e.stateMutability), t = new w({
                                        inputs: e.inputs,
                                        outputs: e.outputs,
                                        gas: e.gas,
                                        payable: null == e.payable || !!e.payable,
                                        type: i ? "call" : "transaction",
                                        name: e.name,
                                        signature: r,
                                        sighash: n
                                    }), e.name && (null == this.functions[e.name] ? p.defineReadOnly(this.functions, e.name, t) : v.warn("WARNING: Multiple definitions for " + e.name)), null == this.functions[t.signature] && p.defineReadOnly(this.functions, t.signature, t);
                                    break;
                                case "event":
                                    r = l.formatSignature(e).replace(/tuple/g, ""), t = new k({
                                        name: e.name,
                                        signature: r,
                                        inputs: e.inputs,
                                        topic: c.id(r),
                                        anonymous: !!e.anonymous
                                    }), e.name && null == this.events[e.name] && p.defineReadOnly(this.events, e.name, t), null == this.events[t.signature] && p.defineReadOnly(this.events, t.signature, t);
                                    break;
                                case "receive":
                                case "fallback":
                                    break;
                                default:
                                    v.warn("WARNING: unsupported ABI type - " + e.type)
                            }
                        }
                        var L = (D.prototype.parseTransaction = function(e) {
                            var t = e.data.substring(0, 10).toLowerCase();
                            for (var r in this.functions)
                                if (-1 !== r.indexOf("(")) {
                                    var n = this.functions[r];
                                    if (n.sighash === t) {
                                        var i = l.defaultAbiCoder.decode(n.inputs, "0x" + e.data.substring(10));
                                        return new P({
                                            args: i,
                                            decode: n.decode,
                                            name: n.name,
                                            signature: n.signature,
                                            sighash: n.sighash,
                                            value: h.bigNumberify(e.value || "0")
                                        })
                                    }
                                }
                            return null
                        }, D.prototype.parseLog = function(e) {
                            for (var t in this.events)
                                if (-1 !== t.indexOf("(")) {
                                    var r = this.events[t];
                                    if (!r.anonymous && r.topic === e.topics[0]) return new R({
                                        decode: r.decode,
                                        name: r.name,
                                        signature: r.signature,
                                        topic: r.topic,
                                        values: r.decode(e.data, e.topics)
                                    })
                                }
                            return null
                        }, D.isInterface = function(e) {
                            return p.isType(e, "Interface")
                        }, D.isIndexed = function(e) {
                            return p.isType(e, "Indexed")
                        }, D);

                        function D(t) {
                            if (v.checkNew(this, D), "string" == typeof t) {
                                try {
                                    t = JSON.parse(t)
                                } catch (e) {
                                    v.throwError("could not parse ABI JSON", v.INVALID_ARGUMENT, {
                                        arg: "abi",
                                        errorMessage: e.message,
                                        value: t
                                    })
                                }
                                if (!Array.isArray(t)) return v.throwError("invalid abi", v.INVALID_ARGUMENT, {
                                    arg: "abi",
                                    value: t
                                }), null
                            }
                            p.defineReadOnly(this, "functions", {}), p.defineReadOnly(this, "events", {});
                            var r = [];
                            t.forEach((function(e) {
                                "string" == typeof e && (e = l.parseSignature(e)), r.push(e)
                            })), p.defineReadOnly(this, "abi", p.deepCopy(r, !0)), r.forEach(C, this), this.deployFunction || C.call(this, {
                                type: "constructor",
                                inputs: []
                            }), p.setType(this, "Interface")
                        }
                        r.Interface = L
                    }, {
                        "../errors": 5,
                        "./abi-coder": 59,
                        "./address": 60,
                        "./bignumber": 63,
                        "./bytes": 64,
                        "./hash": 65,
                        "./keccak256": 71,
                        "./properties": 74
                    }],
                    70: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./address");

                        function i(e) {
                            try {
                                var t = JSON.parse(e)
                            } catch (e) {
                                return !1
                            }
                            return t.encseed && t.ethaddr
                        }

                        function o(e) {
                            try {
                                var t = JSON.parse(e)
                            } catch (e) {
                                return !1
                            }
                            return !(!t.version || parseInt(t.version) !== t.version || 3 !== parseInt(t.version))
                        }
                        r.isCrowdsaleWallet = i, r.isSecretStorageWallet = o, r.getJsonWalletAddress = function(e) {
                            if (i(e)) try {
                                return n.getAddress(JSON.parse(e).ethaddr)
                            } catch (e) {
                                return null
                            }
                            if (o(e)) try {
                                return n.getAddress(JSON.parse(e).address)
                            } catch (e) {
                                return null
                            }
                            return null
                        }
                    }, {
                        "./address": 60
                    }],
                    71: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("js-sha3"),
                            i = e("./bytes");
                        r.keccak256 = function(e) {
                            return "0x" + n.keccak_256(i.arrayify(e))
                        }
                    }, {
                        "./bytes": 64,
                        "js-sha3": 40
                    }],
                    72: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("../errors"));

                        function o(e) {
                            return function(t) {
                                var r = [];
                                return t.InfuraProvider && r.push(new t.InfuraProvider(e)), t.EtherscanProvider && r.push(new t.EtherscanProvider(e)), 0 === r.length ? null : t.FallbackProvider ? new t.FallbackProvider(r) : r[0]
                            }
                        }

                        function s(e, t) {
                            return function(r) {
                                return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null
                            }
                        }
                        var a = {
                                chainId: 1,
                                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                                name: "homestead",
                                _defaultProvider: o("homestead")
                            },
                            u = {
                                chainId: 3,
                                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                                name: "ropsten",
                                _defaultProvider: o("ropsten")
                            },
                            l = {
                                unspecified: {
                                    chainId: 0,
                                    name: "unspecified"
                                },
                                homestead: a,
                                mainnet: a,
                                morden: {
                                    chainId: 2,
                                    name: "morden"
                                },
                                ropsten: u,
                                testnet: u,
                                rinkeby: {
                                    chainId: 4,
                                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                                    name: "rinkeby",
                                    _defaultProvider: o("rinkeby")
                                },
                                goerli: {
                                    chainId: 5,
                                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                                    name: "goerli",
                                    _defaultProvider: o("goerli")
                                },
                                kovan: {
                                    chainId: 42,
                                    name: "kovan",
                                    _defaultProvider: o("kovan")
                                },
                                classic: {
                                    chainId: 61,
                                    name: "classic",
                                    _defaultProvider: s("https://web3.gastracker.io", "classic")
                                },
                                classicTestnet: {
                                    chainId: 62,
                                    name: "classicTestnet",
                                    _defaultProvider: s("https://web3.gastracker.io/morden", "classicTestnet")
                                }
                            };
                        r.getNetwork = function(e) {
                            if (null == e) return null;
                            if ("number" == typeof e) {
                                for (var t in l) {
                                    var r = l[t];
                                    if (r.chainId === e) return {
                                        name: r.name,
                                        chainId: r.chainId,
                                        ensAddress: r.ensAddress || null,
                                        _defaultProvider: r._defaultProvider || null
                                    }
                                }
                                return {
                                    chainId: e,
                                    name: "unknown"
                                }
                            }
                            if ("string" == typeof e) {
                                var n = l[e];
                                return null == n ? null : {
                                    name: n.name,
                                    chainId: n.chainId,
                                    ensAddress: n.ensAddress,
                                    _defaultProvider: n._defaultProvider || null
                                }
                            }
                            var o = l[e.name];
                            return o ? (0 !== e.chainId && e.chainId !== o.chainId && i.throwError("network chainId mismatch", i.INVALID_ARGUMENT, {
                                arg: "network",
                                value: e
                            }), {
                                name: e.name,
                                chainId: o.chainId,
                                ensAddress: e.ensAddress || o.ensAddress || null,
                                _defaultProvider: e._defaultProvider || o._defaultProvider || null
                            }) : ("number" != typeof e.chainId && i.throwError("invalid network chainId", i.INVALID_ARGUMENT, {
                                arg: "network",
                                value: e
                            }), e)
                        }
                    }, {
                        "../errors": 5
                    }],
                    73: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("../utils/bytes"),
                            i = e("./hmac");
                        r.pbkdf2 = function(e, t, r, o, s) {
                            var a;
                            e = n.arrayify(e), t = n.arrayify(t);
                            var u, l, h = 1,
                                f = new Uint8Array(o),
                                c = new Uint8Array(t.length + 4);
                            c.set(t);
                            for (var d = 1; d <= h; d++) {
                                c[t.length] = d >> 24 & 255, c[t.length + 1] = d >> 16 & 255, c[t.length + 2] = d >> 8 & 255, c[t.length + 3] = 255 & d;
                                var p = i.computeHmac(s, e, c);
                                a || (a = p.length, l = new Uint8Array(a), u = o - ((h = Math.ceil(o / a)) - 1) * a), l.set(p);
                                for (var v = 1; v < r; v++) {
                                    p = i.computeHmac(s, e, p);
                                    for (var y = 0; y < a; y++) l[y] ^= p[y]
                                }
                                var m = (d - 1) * a,
                                    g = d === h ? u : a;
                                f.set(n.arrayify(l).slice(0, g), m)
                            }
                            return n.arrayify(f)
                        }
                    }, {
                        "../utils/bytes": 64,
                        "./hmac": 67
                    }],
                    74: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("../errors"));

                        function o(e, t, r) {
                            Object.defineProperty(e, t, {
                                enumerable: !0,
                                value: r,
                                writable: !1
                            })
                        }

                        function s(e, t) {
                            return e && e._ethersType === t
                        }
                        r.defineReadOnly = o, r.setType = function(e, t) {
                            Object.defineProperty(e, "_ethersType", {
                                configurable: !1,
                                value: t,
                                writable: !1
                            })
                        }, r.isType = s, r.resolveProperties = function(e) {
                            var t = {},
                                r = [];
                            return Object.keys(e).forEach((function(n) {
                                var i = e[n];
                                i instanceof Promise ? r.push(i.then((function(e) {
                                    return t[n] = e, null
                                }))) : t[n] = i
                            })), Promise.all(r).then((function() {
                                return t
                            }))
                        }, r.checkProperties = function(e, t) {
                            e && "object" == typeof e || i.throwError("invalid object", i.INVALID_ARGUMENT, {
                                argument: "object",
                                value: e
                            }), Object.keys(e).forEach((function(r) {
                                t[r] || i.throwError("invalid object key - " + r, i.INVALID_ARGUMENT, {
                                    argument: "transaction",
                                    value: e,
                                    key: r
                                })
                            }))
                        }, r.shallowCopy = function(e) {
                            var t = {};
                            for (var r in e) t[r] = e[r];
                            return t
                        };
                        var a = {
                            boolean: !0,
                            number: !0,
                            string: !0
                        };
                        r.deepCopy = function e(t, r) {
                            if (null == t || a[typeof t]) return t;
                            if (Array.isArray(t)) {
                                var n = t.map((function(t) {
                                    return e(t, r)
                                }));
                                return r && Object.freeze(n), n
                            }
                            if ("object" == typeof t) {
                                if (s(t, "BigNumber")) return t;
                                if (s(t, "Description")) return t;
                                if (s(t, "Indexed")) return t;
                                for (var i in n = {}, t) {
                                    var u = t[i];
                                    void 0 !== u && o(n, i, e(u, r))
                                }
                                return r && Object.freeze(n), n
                            }
                            if ("function" == typeof t) return t;
                            throw new Error("Cannot deepCopy " + typeof t)
                        }, r.inheritable = function e(t) {
                            return function(r) {
                                ! function(e, t) {
                                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    })
                                }(r, t), o(r, "inherits", e(r))
                            }
                        }
                    }, {
                        "../errors": 5
                    }],
                    75: [function(e, r, n) {
                        (function(t) {
                            "use strict";
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = e("../utils/bytes"),
                                i = e("../utils/properties"),
                                o = t.crypto || t.msCrypto;

                            function s(e) {
                                if (e <= 0 || 1024 < e || parseInt(String(e)) != e) throw new Error("invalid length");
                                var t = new Uint8Array(e);
                                return o.getRandomValues(t), r.arrayify(t)
                            }
                            o && o.getRandomValues || (console.log("WARNING: Missing strong random number source; using weak randomBytes"), o = {
                                getRandomValues: function(e) {
                                    for (var t = 0; t < 20; t++)
                                        for (var r = 0; r < e.length; r++) t ? e[r] ^= Math.trunc(256 * Math.random()) : e[r] = Math.trunc(256 * Math.random());
                                    return e
                                },
                                _weakCrypto: !0
                            }), n.randomBytes = s, !0 === o._weakCrypto && i.defineReadOnly(s, "_weakCrypto", !0)
                        }).call(this, "undefined" != typeof t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../utils/bytes": 64,
                        "../utils/properties": 74
                    }],
                    76: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./bytes");

                        function i(e) {
                            for (var t = []; e;) t.unshift(255 & e), e >>= 8;
                            return t
                        }

                        function o(e, t, r) {
                            for (var n = 0, i = 0; i < r; i++) n = 256 * n + e[t + i];
                            return n
                        }

                        function s(e, t, r, n) {
                            for (var i = []; r < t + 1 + n;) {
                                var o = a(e, r);
                                if (i.push(o.result), t + 1 + n < (r += o.consumed)) throw new Error("invalid rlp")
                            }
                            return {
                                consumed: 1 + n,
                                result: i
                            }
                        }

                        function a(e, t) {
                            if (0 === e.length) throw new Error("invalid rlp data");
                            if (248 <= e[t]) {
                                if (t + 1 + (r = e[t] - 247) > e.length) throw new Error("too short");
                                if (t + 1 + r + (i = o(e, t + 1, r)) > e.length) throw new Error("to short");
                                return s(e, t, t + 1 + r, r + i)
                            }
                            if (192 <= e[t]) {
                                if (t + 1 + (i = e[t] - 192) > e.length) throw new Error("invalid rlp data");
                                return s(e, t, t + 1, i)
                            }
                            if (184 <= e[t]) {
                                var r;
                                if (t + 1 + (r = e[t] - 183) > e.length) throw new Error("invalid rlp data");
                                if (t + 1 + r + (i = o(e, t + 1, r)) > e.length) throw new Error("invalid rlp data");
                                return {
                                    consumed: 1 + r + i,
                                    result: n.hexlify(e.slice(t + 1 + r, t + 1 + r + i))
                                }
                            }
                            if (128 <= e[t]) {
                                var i;
                                if (t + 1 + (i = e[t] - 128) > e.length) throw new Error("invalid rlp data");
                                return {
                                    consumed: 1 + i,
                                    result: n.hexlify(e.slice(t + 1, t + 1 + i))
                                }
                            }
                            return {
                                consumed: 1,
                                result: n.hexlify(e[t])
                            }
                        }
                        r.encode = function(e) {
                            return n.hexlify(function e(t) {
                                if (Array.isArray(t)) {
                                    var r = [];
                                    return t.forEach((function(t) {
                                        r = r.concat(e(t))
                                    })), r.length <= 55 ? (r.unshift(192 + r.length), r) : ((o = i(r.length)).unshift(247 + o.length), o.concat(r))
                                }
                                var o, s = Array.prototype.slice.call(n.arrayify(t));
                                return 1 === s.length && s[0] <= 127 ? s : s.length <= 55 ? (s.unshift(128 + s.length), s) : ((o = i(s.length)).unshift(183 + o.length), o.concat(s))
                            }(e))
                        }, r.decode = function(e) {
                            var t = n.arrayify(e),
                                r = a(t, 0);
                            if (r.consumed !== t.length) throw new Error("invalid rlp data");
                            return r.result
                        }
                    }, {
                        "./bytes": 64
                    }],
                    77: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = e("elliptic"),
                            o = e("./address"),
                            s = e("./bytes"),
                            a = e("./hash"),
                            u = e("./keccak256"),
                            l = e("./properties"),
                            h = n(e("../errors")),
                            f = null;

                        function c() {
                            return f = f || new i.ec("secp256k1")
                        }
                        var d = (p.prototype.sign = function(e) {
                            var t = c().keyFromPrivate(s.arrayify(this.privateKey)).sign(s.arrayify(e), {
                                canonical: !0
                            });
                            return {
                                recoveryParam: t.recoveryParam,
                                r: s.hexZeroPad("0x" + t.r.toString(16), 32),
                                s: s.hexZeroPad("0x" + t.s.toString(16), 32),
                                v: 27 + t.recoveryParam
                            }
                        }, p.prototype.computeSharedSecret = function(e) {
                            var t = c().keyFromPrivate(s.arrayify(this.privateKey)),
                                r = c().keyFromPublic(s.arrayify(v(e)));
                            return s.hexZeroPad("0x" + t.derive(r.getPublic()).toString(16), 32)
                        }, p.prototype._addPoint = function(e) {
                            var t = c().keyFromPublic(s.arrayify(this.publicKey)),
                                r = c().keyFromPublic(s.arrayify(e));
                            return "0x" + t.pub.add(r.pub).encodeCompressed("hex")
                        }, p);

                        function p(e) {
                            var t = c().keyFromPrivate(s.arrayify(e));
                            l.defineReadOnly(this, "privateKey", s.hexlify(t.priv.toArray("be", 32))), l.defineReadOnly(this, "publicKey", "0x" + t.getPublic(!1, "hex")), l.defineReadOnly(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), l.defineReadOnly(this, "publicKeyBytes", t.getPublic().encode(null, !0))
                        }

                        function v(e, t) {
                            var r = s.arrayify(e);
                            if (32 !== r.length) return 33 === r.length ? t ? s.hexlify(r) : "0x" + c().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + c().keyFromPublic(r).getPublic(!0, "hex") : s.hexlify(r) : (h.throwError("invalid public or private key", h.INVALID_ARGUMENT, {
                                arg: "key",
                                value: "[REDACTED]"
                            }), null);
                            var n = new d(r);
                            return t ? n.compressedPublicKey : n.publicKey
                        }

                        function y(e) {
                            var t = "0x" + v(e).slice(4);
                            return o.getAddress("0x" + u.keccak256(t).substring(26))
                        }

                        function m(e, t) {
                            var r = s.splitSignature(t),
                                n = {
                                    r: s.arrayify(r.r),
                                    s: s.arrayify(r.s)
                                };
                            return "0x" + c().recoverPubKey(s.arrayify(e), n, r.recoveryParam).encode("hex", !1)
                        }

                        function g(e, t) {
                            return y(m(s.arrayify(e), t))
                        }
                        r.KeyPair = d, r.computePublicKey = v, r.computeAddress = y, r.recoverPublicKey = m, r.recoverAddress = g, r.verifyMessage = function(e, t) {
                            return g(a.hashMessage(e), t)
                        }
                    }, {
                        "../errors": 5,
                        "./address": 60,
                        "./bytes": 64,
                        "./hash": 65,
                        "./keccak256": 71,
                        "./properties": 74,
                        elliptic: 12
                    }],
                    78: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importDefault || function(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            },
                            i = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var o = n(e("aes-js")),
                            s = n(e("scrypt-js")),
                            a = n(e("uuid")),
                            u = e("./signing-key"),
                            l = i(e("./hdnode")),
                            h = e("./address"),
                            f = e("./bytes"),
                            c = e("./pbkdf2"),
                            d = e("./keccak256"),
                            p = e("./utf8"),
                            v = e("./random-bytes");

                        function y(e) {
                            return "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), f.arrayify(e)
                        }

                        function m(e, t) {
                            for (e = String(e); e.length < t;) e = "0" + e;
                            return e
                        }

                        function g(e) {
                            return "string" == typeof e ? p.toUtf8Bytes(e, p.UnicodeNormalizationForm.NFKC) : f.arrayify(e)
                        }

                        function b(e, t) {
                            for (var r = e, n = t.toLowerCase().split("/"), i = 0; i < n.length; i++) {
                                var o = null;
                                for (var s in r)
                                    if (s.toLowerCase() === n[i]) {
                                        o = r[s];
                                        break
                                    }
                                if (null === o) return null;
                                r = o
                            }
                            return r
                        }
                        r.decryptCrowdsale = function(e, t) {
                            var r = JSON.parse(e);
                            t = g(t);
                            var n = h.getAddress(b(r, "ethaddr")),
                                i = y(b(r, "encseed"));
                            if (!i || i.length % 16 != 0) throw new Error("invalid encseed");
                            var s = c.pbkdf2(t, t, 2e3, 32, "sha256").slice(0, 16),
                                a = i.slice(0, 16),
                                l = i.slice(16),
                                v = new o.default.ModeOfOperation.cbc(s, a),
                                m = f.arrayify(v.decrypt(l));
                            m = o.default.padding.pkcs7.strip(m);
                            for (var w = "", _ = 0; _ < m.length; _++) w += String.fromCharCode(m[_]);
                            var M = p.toUtf8Bytes(w),
                                A = new u.SigningKey(d.keccak256(M));
                            if (A.address !== n) throw new Error("corrupt crowdsale wallet");
                            return A
                        }, r.decrypt = function(e, t, r) {
                            function n(e, t) {
                                var r = y(b(i, "crypto/ciphertext"));
                                if (f.hexlify(function(e, t) {
                                        return d.keccak256(f.concat([e, t]))
                                    }(e.slice(16, 32), r)).substring(2) !== b(i, "crypto/mac").toLowerCase()) return t(new Error("invalid password")), null;
                                var n = function(e, t) {
                                        if ("aes-128-ctr" !== b(i, "crypto/cipher")) return null;
                                        var r = y(b(i, "crypto/cipherparams/iv")),
                                            n = new o.default.Counter(r),
                                            s = new o.default.ModeOfOperation.ctr(e, n);
                                        return f.arrayify(s.decrypt(t))
                                    }(e.slice(0, 16), r),
                                    s = e.slice(32, 64);
                                if (!n) return t(new Error("unsupported cipher")), null;
                                var a = new u.SigningKey(n);
                                if (i.address && a.address !== h.getAddress(i.address)) return t(new Error("address mismatch")), null;
                                var c = b(i, "x-ethers/locale");
                                if ("0.1" === b(i, "x-ethers/version") && (null == c || "en" === c)) {
                                    var p = y(b(i, "x-ethers/mnemonicCiphertext")),
                                        v = y(b(i, "x-ethers/mnemonicCounter")),
                                        m = new o.default.Counter(v),
                                        g = new o.default.ModeOfOperation.ctr(s, m),
                                        w = b(i, "x-ethers/path") || l.defaultPath,
                                        _ = f.arrayify(g.decrypt(p)),
                                        M = l.entropyToMnemonic(_),
                                        A = l.fromMnemonic(M).derivePath(w);
                                    if (A.privateKey != f.hexlify(n)) return t(new Error("mnemonic mismatch")), null;
                                    a = new u.SigningKey(A)
                                }
                                return a
                            }
                            var i = JSON.parse(e),
                                a = g(t);
                            return new Promise((function(e, t) {
                                var o = b(i, "crypto/kdf");
                                if (o && "string" == typeof o)
                                    if ("scrypt" === o.toLowerCase()) {
                                        var u = y(b(i, "crypto/kdfparams/salt")),
                                            l = parseInt(b(i, "crypto/kdfparams/n")),
                                            h = parseInt(b(i, "crypto/kdfparams/r")),
                                            d = parseInt(b(i, "crypto/kdfparams/p"));
                                        if (!l || !h || !d) return void t(new Error("unsupported key-derivation function parameters"));
                                        if (0 != (l & l - 1)) return void t(new Error("unsupported key-derivation function parameter value for N"));
                                        if (32 !== (m = parseInt(b(i, "crypto/kdfparams/dklen")))) return void t(new Error("unsupported key-derivation derived-key length"));
                                        r && r(0), s.default(a, u, l, h, d, 64, (function(i, o, s) {
                                            if (i) i.progress = o, t(i);
                                            else if (s) {
                                                var a = n(s = f.arrayify(s), t);
                                                if (!a) return;
                                                r && r(1), e(a)
                                            } else if (r) return r(o)
                                        }))
                                    } else if ("pbkdf2" === o.toLowerCase()) {
                                    u = y(b(i, "crypto/kdfparams/salt"));
                                    var p = null,
                                        v = b(i, "crypto/kdfparams/prf");
                                    if ("hmac-sha256" === v) p = "sha256";
                                    else {
                                        if ("hmac-sha512" !== v) return void t(new Error("unsupported prf"));
                                        p = "sha512"
                                    }
                                    var m, g = parseInt(b(i, "crypto/kdfparams/c"));
                                    if (32 !== (m = parseInt(b(i, "crypto/kdfparams/dklen")))) return void t(new Error("unsupported key-derivation derived-key length"));
                                    var w = n(c.pbkdf2(a, u, g, m, p), t);
                                    if (!w) return;
                                    e(w)
                                } else t(new Error("unsupported key-derivation function"));
                                else t(new Error("unsupported key-derivation function"))
                            }))
                        }, r.encrypt = function(e, t, r, n) {
                            "function" != typeof r || n || (n = r, r = {}), r = r || {};
                            var i = null;
                            if (32 !== (i = u.SigningKey.isSigningKey(e) ? f.arrayify(e.privateKey) : f.arrayify(e)).length) throw new Error("invalid private key");
                            var h = g(t),
                                c = null;
                            if (r.entropy && (c = f.arrayify(r.entropy)), r.mnemonic)
                                if (c) {
                                    if (l.entropyToMnemonic(c) !== r.mnemonic) throw new Error("entropy and mnemonic mismatch")
                                } else c = f.arrayify(l.mnemonicToEntropy(r.mnemonic, r.wordlist));
                            var p = r.path;
                            c && !p && (p = l.defaultPath);
                            var y = r.client;
                            y = y || "ethers.js";
                            var b = null;
                            b = r.salt ? f.arrayify(r.salt) : v.randomBytes(32);
                            var w = null;
                            if (r.iv) {
                                if (16 !== (w = f.arrayify(r.iv)).length) throw new Error("invalid iv")
                            } else w = v.randomBytes(16);
                            var _ = null;
                            if (r.uuid) {
                                if (16 !== (_ = f.arrayify(r.uuid)).length) throw new Error("invalid uuid")
                            } else _ = v.randomBytes(16);
                            var M = 1 << 17,
                                A = 8,
                                E = 1;
                            return r.scrypt && (r.scrypt.N && (M = r.scrypt.N), r.scrypt.r && (A = r.scrypt.r), r.scrypt.p && (E = r.scrypt.p)), new Promise((function(e, t) {
                                n && n(0), s.default(h, b, M, A, E, 64, (function(s, l, h) {
                                    if (s) s.progress = l, t(s);
                                    else if (h) {
                                        var g = (h = f.arrayify(h)).slice(0, 16),
                                            S = h.slice(16, 32),
                                            k = h.slice(32, 64),
                                            N = new u.SigningKey(i).address,
                                            x = new o.default.Counter(w),
                                            P = new o.default.ModeOfOperation.ctr(g, x),
                                            I = f.arrayify(P.encrypt(i)),
                                            T = d.keccak256(f.concat([S, I])),
                                            R = {
                                                address: N.substring(2).toLowerCase(),
                                                id: a.default.v4({
                                                    random: _
                                                }),
                                                version: 3,
                                                Crypto: {
                                                    cipher: "aes-128-ctr",
                                                    cipherparams: {
                                                        iv: f.hexlify(w).substring(2)
                                                    },
                                                    ciphertext: f.hexlify(I).substring(2),
                                                    kdf: "scrypt",
                                                    kdfparams: {
                                                        salt: f.hexlify(b).substring(2),
                                                        n: M,
                                                        dklen: 32,
                                                        p: E,
                                                        r: A
                                                    },
                                                    mac: T.substring(2)
                                                }
                                            };
                                        if (c) {
                                            var O = v.randomBytes(16),
                                                C = new o.default.Counter(O),
                                                L = new o.default.ModeOfOperation.ctr(k, C),
                                                D = f.arrayify(L.encrypt(c)),
                                                B = new Date,
                                                U = B.getUTCFullYear() + "-" + m(B.getUTCMonth() + 1, 2) + "-" + m(B.getUTCDate(), 2) + "T" + m(B.getUTCHours(), 2) + "-" + m(B.getUTCMinutes(), 2) + "-" + m(B.getUTCSeconds(), 2) + ".0Z";
                                            R["x-ethers"] = {
                                                client: y,
                                                gethFilename: "UTC--" + U + "--" + R.address,
                                                mnemonicCounter: f.hexlify(O).substring(2),
                                                mnemonicCiphertext: f.hexlify(D).substring(2),
                                                path: p,
                                                version: "0.1"
                                            }, r.wordlist && "string" == typeof r.wordlist.locale && (R["x-ethers"].locale = r.wordlist.locale)
                                        }
                                        n && n(1), e(JSON.stringify(R))
                                    } else if (n) return n(l)
                                }))
                            }))
                        }
                    }, {
                        "./address": 60,
                        "./bytes": 64,
                        "./hdnode": 66,
                        "./keccak256": 71,
                        "./pbkdf2": 73,
                        "./random-bytes": 75,
                        "./signing-key": 81,
                        "./utf8": 85,
                        "aes-js": 8,
                        "scrypt-js": 44,
                        uuid: 48
                    }],
                    79: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importDefault || function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = n(e("hash.js")),
                            o = e("./bytes");
                        r.ripemd160 = function(e) {
                            return "0x" + i.default.ripemd160().update(o.arrayify(e)).digest("hex")
                        }, r.sha256 = function(e) {
                            return "0x" + i.default.sha256().update(o.arrayify(e)).digest("hex")
                        }, r.sha512 = function(e) {
                            return "0x" + i.default.sha512().update(o.arrayify(e)).digest("hex")
                        }
                    }, {
                        "./bytes": 64,
                        "hash.js": 26
                    }],
                    80: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        }), e("setimmediate"), r.platform = "browser"
                    }, {
                        setimmediate: 45
                    }],
                    81: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = e("./hdnode"),
                            o = e("./bytes"),
                            s = e("./properties"),
                            a = e("./secp256k1"),
                            u = n(e("../errors")),
                            l = (h.prototype.signDigest = function(e) {
                                return this.keyPair.sign(e)
                            }, h.prototype.computeSharedSecret = function(e) {
                                return this.keyPair.computeSharedSecret(o.arrayify(e))
                            }, h.isSigningKey = function(e) {
                                return s.isType(e, "SigningKey")
                            }, h);

                        function h(e) {
                            u.checkNew(this, h);
                            var t = null;
                            t = i.HDNode.isHDNode(e) ? (s.defineReadOnly(this, "mnemonic", e.mnemonic), s.defineReadOnly(this, "path", e.path), o.arrayify(e.privateKey)) : ("string" == typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = "0x" + e), o.arrayify(e));
                            try {
                                32 !== t.length && u.throwError("exactly 32 bytes required", u.INVALID_ARGUMENT, {
                                    arg: "privateKey",
                                    value: "[REDACTED]"
                                })
                            } catch (e) {
                                var r = {
                                    arg: "privateKey",
                                    reason: e.reason,
                                    value: "[REDACTED]"
                                };
                                e.value && ("number" == typeof e.value.length && (r.length = e.value.length), r.type = typeof e.value), u.throwError("invalid private key", e.code, r)
                            }
                            s.defineReadOnly(this, "privateKey", o.hexlify(t)), s.defineReadOnly(this, "keyPair", new a.KeyPair(t)), s.defineReadOnly(this, "publicKey", this.keyPair.publicKey), s.defineReadOnly(this, "address", a.computeAddress(this.keyPair.publicKey)), s.setType(this, "SigningKey")
                        }
                        r.SigningKey = l
                    }, {
                        "../errors": 5,
                        "./bytes": 64,
                        "./hdnode": 66,
                        "./properties": 74,
                        "./secp256k1": 77
                    }],
                    82: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("./bignumber"),
                            i = e("./bytes"),
                            o = e("./utf8"),
                            s = e("./keccak256"),
                            a = e("./sha2"),
                            u = new RegExp("^bytes([0-9]+)$"),
                            l = new RegExp("^(u?int)([0-9]*)$"),
                            h = new RegExp("^(.*)\\[([0-9]*)\\]$"),
                            f = "0000000000000000000000000000000000000000000000000000000000000000";

                        function c(e, t) {
                            if (e.length != t.length) throw new Error("type/value count mismatch");
                            var r = [];
                            return e.forEach((function(e, s) {
                                r.push(function e(t, r, s) {
                                    switch (t) {
                                        case "address":
                                            return s ? i.padZeros(r, 32) : i.arrayify(r);
                                        case "string":
                                            return o.toUtf8Bytes(r);
                                        case "bytes":
                                            return i.arrayify(r);
                                        case "bool":
                                            return r = r ? "0x01" : "0x00", s ? i.padZeros(r, 32) : i.arrayify(r)
                                    }
                                    var a = t.match(l);
                                    if (a) {
                                        if ((c = parseInt(a[2] || "256")) % 8 != 0 || 0 === c || 256 < c) throw new Error("invalid number type - " + t);
                                        return s && (c = 256), r = n.bigNumberify(r).toTwos(c), i.padZeros(r, c / 8)
                                    }
                                    if (a = t.match(u)) {
                                        var c = parseInt(a[1]);
                                        if (String(c) != a[1] || 0 === c || 32 < c) throw new Error("invalid number type - " + t);
                                        if (i.arrayify(r).byteLength !== c) throw new Error("invalid value for " + t);
                                        return s ? i.arrayify((r + f).substring(0, 66)) : r
                                    }
                                    if ((a = t.match(h)) && Array.isArray(r)) {
                                        var d = a[1];
                                        if (parseInt(a[2] || String(r.length)) != r.length) throw new Error("invalid value for " + t);
                                        var p = [];
                                        return r.forEach((function(t) {
                                            p.push(e(d, t, !0))
                                        })), i.concat(p)
                                    }
                                    throw new Error("unknown type - " + t)
                                }(e, t[s]))
                            })), i.hexlify(i.concat(r))
                        }
                        r.pack = c, r.keccak256 = function(e, t) {
                            return s.keccak256(c(e, t))
                        }, r.sha256 = function(e, t) {
                            return a.sha256(c(e, t))
                        }
                    }, {
                        "./bignumber": 63,
                        "./bytes": 64,
                        "./keccak256": 71,
                        "./sha2": 79,
                        "./utf8": 85
                    }],
                    83: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = e("../constants"),
                            o = n(e("../errors")),
                            s = e("./secp256k1"),
                            a = e("./address"),
                            u = e("./bignumber"),
                            l = e("./bytes"),
                            h = e("./keccak256"),
                            f = e("./properties"),
                            c = n(e("./rlp")),
                            d = e("../providers/abstract-provider");

                        function p(e) {
                            return "0x" === e ? i.Zero : u.bigNumberify(e)
                        }
                        var v = [{
                                name: "nonce",
                                maxLength: 32
                            }, {
                                name: "gasPrice",
                                maxLength: 32
                            }, {
                                name: "gasLimit",
                                maxLength: 32
                            }, {
                                name: "to",
                                length: 20
                            }, {
                                name: "value",
                                maxLength: 32
                            }, {
                                name: "data"
                            }],
                            y = {
                                chainId: !0,
                                data: !0,
                                gasLimit: !0,
                                gasPrice: !0,
                                nonce: !0,
                                to: !0,
                                value: !0
                            };
                        r.serialize = function(e, t) {
                            f.checkProperties(e, y);
                            var r = [];
                            v.forEach((function(t) {
                                var n = e[t.name] || [];
                                n = l.arrayify(l.hexlify(n)), t.length && n.length !== t.length && 0 < n.length && o.throwError("invalid length for " + t.name, o.INVALID_ARGUMENT, {
                                    arg: "transaction" + t.name,
                                    value: n
                                }), t.maxLength && (n = l.stripZeros(n)).length > t.maxLength && o.throwError("invalid length for " + t.name, o.INVALID_ARGUMENT, {
                                    arg: "transaction" + t.name,
                                    value: n
                                }), r.push(l.hexlify(n))
                            })), null != e.chainId && 0 !== e.chainId && (r.push(l.hexlify(e.chainId)), r.push("0x"), r.push("0x"));
                            var n = c.encode(r);
                            if (!t) return n;
                            var i = l.splitSignature(t),
                                s = 27 + i.recoveryParam;
                            return 9 === r.length && (r.pop(), r.pop(), r.pop(), s += 2 * e.chainId + 8), r.push(l.hexlify(s)), r.push(l.stripZeros(l.arrayify(i.r))), r.push(l.stripZeros(l.arrayify(i.s))), c.encode(r)
                        }, r.parse = function(e) {
                            var t = c.decode(e);
                            9 !== t.length && 6 !== t.length && o.throwError("invalid raw transaction", o.INVALID_ARGUMENT, {
                                arg: "rawTransactin",
                                value: e
                            });
                            var r = {
                                nonce: p(t[0]).toNumber(),
                                gasPrice: p(t[1]),
                                gasLimit: p(t[2]),
                                to: function(e) {
                                    return "0x" === e ? null : a.getAddress(e)
                                }(t[3]),
                                value: p(t[4]),
                                data: t[5],
                                chainId: 0
                            };
                            if (6 === t.length) return r;
                            try {
                                r.v = u.bigNumberify(t[6]).toNumber()
                            } catch (e) {
                                return o.info(e), r
                            }
                            if (r.r = l.hexZeroPad(t[7], 32), r.s = l.hexZeroPad(t[8], 32), u.bigNumberify(r.r).isZero() && u.bigNumberify(r.s).isZero()) r.chainId = r.v, r.v = 0;
                            else {
                                r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                                var n = r.v - 27,
                                    i = t.slice(0, 6);
                                0 !== r.chainId && (i.push(l.hexlify(r.chainId)), i.push("0x"), i.push("0x"), n -= 2 * r.chainId + 8);
                                var f = h.keccak256(c.encode(i));
                                try {
                                    r.from = s.recoverAddress(f, {
                                        r: l.hexlify(r.r),
                                        s: l.hexlify(r.s),
                                        recoveryParam: n
                                    })
                                } catch (e) {
                                    o.info(e)
                                }
                                r.hash = h.keccak256(e)
                            }
                            return r
                        }, r.populateTransaction = function(e, t, r) {
                            d.Provider.isProvider(t) || o.throwError("missing provider", o.INVALID_ARGUMENT, {
                                argument: "provider",
                                value: t
                            }), f.checkProperties(e, y);
                            var n = f.shallowCopy(e);
                            if (null != n.to && (n.to = t.resolveName(n.to)), null == n.gasPrice && (n.gasPrice = t.getGasPrice()), null == n.nonce && (n.nonce = t.getTransactionCount(r)), null == n.gasLimit) {
                                var i = f.shallowCopy(n);
                                i.from = r, n.gasLimit = t.estimateGas(i)
                            }
                            return null == n.chainId && (n.chainId = t.getNetwork().then((function(e) {
                                return e.chainId
                            }))), f.resolveProperties(n)
                        }
                    }, {
                        "../constants": 3,
                        "../errors": 5,
                        "../providers/abstract-provider": 50,
                        "./address": 60,
                        "./bignumber": 63,
                        "./bytes": 64,
                        "./keccak256": 71,
                        "./properties": 74,
                        "./rlp": 76,
                        "./secp256k1": 77
                    }],
                    84: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i, o = e("../constants"),
                            s = n(e("../errors")),
                            a = e("./bignumber"),
                            u = {};

                        function l(e) {
                            return {
                                decimals: e.length - 1,
                                tenPower: a.bigNumberify(e)
                            }
                        }

                        function h(e) {
                            var t = u[String(e).toLowerCase()];
                            if (!t && "number" == typeof e && parseInt(String(e)) == e && 0 <= e && e <= 256) {
                                for (var r = "1", n = 0; n < e; n++) r += "0";
                                t = l(r)
                            }
                            return t || s.throwError("invalid unitType", s.INVALID_ARGUMENT, {
                                argument: "name",
                                value: e
                            }), t
                        }

                        function f(e, t) {
                            var r = h(t),
                                n = (e = a.bigNumberify(e)).lt(o.Zero);
                            n && (e = e.mul(o.NegativeOne));
                            for (var i = e.mod(r.tenPower).toString(); i.length < r.decimals;) i = "0" + i;
                            return i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1], e = e.div(r.tenPower).toString() + "." + i, n && (e = "-" + e), e
                        }

                        function c(e, t) {
                            null == t && (t = 18);
                            var r = h(t);
                            if ("string" == typeof e && e.match(/^-?[0-9.,]+$/) || s.throwError("invalid decimal value", s.INVALID_ARGUMENT, {
                                    arg: "value",
                                    value: e
                                }), 0 === r.decimals) return a.bigNumberify(e);
                            var n = "-" === e.substring(0, 1);
                            n && (e = e.substring(1)), "." === e && s.throwError("missing value", s.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            });
                            var i = e.split(".");
                            2 < i.length && s.throwError("too many decimal points", s.INVALID_ARGUMENT, {
                                arg: "value",
                                value: e
                            });
                            var u = i[0],
                                l = i[1];
                            for (u = u || "0", (l = l || "0").length > r.decimals && s.throwError("underflow occurred", s.NUMERIC_FAULT, {
                                    operation: "division",
                                    fault: "underflow"
                                }); l.length < r.decimals;) l += "0";
                            var f = a.bigNumberify(u),
                                c = a.bigNumberify(l),
                                d = f.mul(r.tenPower).add(c);
                            return n && (d = d.mul(o.NegativeOne)), d
                        }
                        i = "1", ["wei", "kwei", "Mwei", "Gwei", "szabo", "finney", "ether"].forEach((function(e) {
                            var t = l(i);
                            u[e.toLowerCase()] = t, u[String(t.decimals)] = t, i += "000"
                        })), r.commify = function(e) {
                            var t = String(e).split(".");
                            (2 < t.length || !t[0].match(/^-?[0-9]*$/) || t[1] && !t[1].match(/^[0-9]*$/) || "." === e || "-." === e) && s.throwError("invalid value", s.INVALID_ARGUMENT, {
                                argument: "value",
                                value: e
                            });
                            var r = t[0],
                                n = "";
                            for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1));
                                "0" === r.substring(0, 1);) r = r.substring(1);
                            "" === r && (r = "0");
                            var i = "";
                            2 === t.length && (i = "." + (t[1] || "0"));
                            for (var o = []; r.length;) {
                                if (r.length <= 3) {
                                    o.unshift(r);
                                    break
                                }
                                var a = r.length - 3;
                                o.unshift(r.substring(a)), r = r.substring(0, a)
                            }
                            return n + o.join(",") + i
                        }, r.formatUnits = f, r.parseUnits = c, r.formatEther = function(e) {
                            return f(e, 18)
                        }, r.parseEther = function(e) {
                            return c(e, 18)
                        }
                    }, {
                        "../constants": 3,
                        "../errors": 5,
                        "./bignumber": 63
                    }],
                    85: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n, i, o = e("../constants"),
                            s = e("../errors"),
                            a = e("./bytes");

                        function u(e, t) {
                            void 0 === t && (t = n.current), t != n.current && (s.checkNormalize(), e = e.normalize(t));
                            for (var r = [], i = 0; i < e.length; i++) {
                                var o = e.charCodeAt(i);
                                if (o < 128) r.push(o);
                                else if (o < 2048) r.push(o >> 6 | 192), r.push(63 & o | 128);
                                else if (55296 == (64512 & o)) {
                                    i++;
                                    var u = e.charCodeAt(i);
                                    if (i >= e.length || 56320 != (64512 & u)) throw new Error("invalid utf-8 string");
                                    o = 65536 + ((1023 & o) << 10) + (1023 & u), r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                                } else r.push(o >> 12 | 224), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                            }
                            return a.arrayify(r)
                        }

                        function l(e, t) {
                            e = a.arrayify(e);
                            for (var r = "", n = 0; n < e.length;) {
                                var i = e[n++];
                                if (i >> 7 != 0) {
                                    var o = null,
                                        s = null;
                                    if (192 == (224 & i)) o = 1, s = 127;
                                    else if (224 == (240 & i)) o = 2, s = 2047;
                                    else {
                                        if (240 != (248 & i)) {
                                            if (t) continue;
                                            if (128 == (192 & i)) throw new Error("invalid utf8 byte sequence; unexpected continuation byte");
                                            throw new Error("invalid utf8 byte sequence; invalid prefix")
                                        }
                                        o = 3, s = 65535
                                    }
                                    if (n + o > e.length) {
                                        if (!t) throw new Error("invalid utf8 byte sequence; too short");
                                        for (; n < e.length && e[n] >> 6 == 2; n++);
                                    } else {
                                        for (var u = i & (1 << 8 - o - 1) - 1, l = 0; l < o; l++) {
                                            var h = e[n];
                                            if (128 != (192 & h)) {
                                                u = null;
                                                break
                                            }
                                            u = u << 6 | 63 & h, n++
                                        }
                                        if (null !== u)
                                            if (u <= s) {
                                                if (!t) throw new Error("invalid utf8 byte sequence; overlong")
                                            } else if (1114111 < u) {
                                            if (!t) throw new Error("invalid utf8 byte sequence; out-of-range")
                                        } else if (55296 <= u && u <= 57343) {
                                            if (!t) throw new Error("invalid utf8 byte sequence; utf-16 surrogate")
                                        } else u <= 65535 ? r += String.fromCharCode(u) : (u -= 65536, r += String.fromCharCode(55296 + (u >> 10 & 1023), 56320 + (1023 & u)));
                                        else if (!t) throw new Error("invalid utf8 byte sequence; invalid continuation byte")
                                    }
                                } else r += String.fromCharCode(i)
                            }
                            return r
                        }(i = n = r.UnicodeNormalizationForm || (r.UnicodeNormalizationForm = {})).current = "", i.NFC = "NFC", i.NFD = "NFD", i.NFKC = "NFKC", i.NFKD = "NFKD", r.toUtf8Bytes = u, r.toUtf8String = l, r.formatBytes32String = function(e) {
                            var t = u(e);
                            if (31 < t.length) throw new Error("bytes32 string must be less than 32 bytes");
                            return a.hexlify(a.concat([t, o.HashZero]).slice(0, 32))
                        }, r.parseBytes32String = function(e) {
                            var t = a.arrayify(e);
                            if (32 !== t.length) throw new Error("invalid bytes32 - not 32 bytes long");
                            if (0 !== t[31]) throw new Error("invalid bytes32 string - no null terminator");
                            for (var r = 31; 0 === t[r - 1];) r--;
                            return l(t.slice(0, r))
                        }
                    }, {
                        "../constants": 3,
                        "../errors": 5,
                        "./bytes": 64
                    }],
                    86: [function(e, t, r) {
                        "use strict";
                        var n = this && this.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t.default = e, t
                        };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var i = e("xmlhttprequest"),
                            o = e("./base64"),
                            s = e("./properties"),
                            a = e("./utf8"),
                            u = n(e("../errors"));
                        r.fetchJson = function(e, t, r) {
                            var n = {},
                                s = null,
                                l = 12e4;
                            if ("string" == typeof e) s = e;
                            else if ("object" == typeof e) {
                                if (null == e.url && u.throwError("missing URL", u.MISSING_ARGUMENT, {
                                        arg: "url"
                                    }), s = e.url, "number" == typeof e.timeout && 0 < e.timeout && (l = e.timeout), e.headers)
                                    for (var h in e.headers) n[h.toLowerCase()] = {
                                        key: h,
                                        value: String(e.headers[h])
                                    };
                                if (null != e.user && null != e.password) {
                                    "https:" !== s.substring(0, 6) && !0 !== e.allowInsecure && u.throwError("basic authentication requires a secure https url", u.INVALID_ARGUMENT, {
                                        arg: "url",
                                        url: s,
                                        user: e.user,
                                        password: "[REDACTED]"
                                    });
                                    var f = e.user + ":" + e.password;
                                    n.authorization = {
                                        key: "Authorization",
                                        value: "Basic " + o.encode(a.toUtf8Bytes(f))
                                    }
                                }
                            }
                            return new Promise((function(e, o) {
                                var a = new i.XMLHttpRequest,
                                    u = null;

                                function h() {
                                    null != u && (clearTimeout(u), u = null)
                                }
                                u = setTimeout((function() {
                                    null != u && (u = null, o(new Error("timeout")), setTimeout((function() {
                                        a.abort()
                                    }), 0))
                                }), l), t ? (a.open("POST", s, !0), n["content-type"] = {
                                    key: "Content-Type",
                                    value: "application/json"
                                }) : a.open("GET", s, !0), Object.keys(n).forEach((function(e) {
                                    var t = n[e];
                                    a.setRequestHeader(t.key, t.value)
                                })), a.onreadystatechange = function() {
                                    if (4 === a.readyState) {
                                        if (200 != a.status) {
                                            h();
                                            var n = new Error("invalid response - " + a.status);
                                            return n.statusCode = a.status, a.responseText && (n.responseText = a.responseText), void o(n)
                                        }
                                        var i = null;
                                        try {
                                            i = JSON.parse(a.responseText)
                                        } catch (n) {
                                            h();
                                            var u = new Error("invalid json response");
                                            return u.orginialError = n, u.responseText = a.responseText, null != t && (u.requestBody = t), u.url = s, void o(u)
                                        }
                                        if (r) try {
                                            i = r(i)
                                        } catch (n) {
                                            return h(), n.url = s, n.body = t, n.responseText = a.responseText, void o(n)
                                        }
                                        h(), e(i)
                                    }
                                }, a.onerror = function(e) {
                                    h(), o(e)
                                };
                                try {
                                    null != t ? a.send(t) : a.send()
                                } catch (u) {
                                    h();
                                    var f = new Error("connection error");
                                    f.error = u, o(f)
                                }
                            }))
                        }, r.poll = function(e, t) {
                            return t = t || {}, null == (t = s.shallowCopy(t)).floor && (t.floor = 0), null == t.ceiling && (t.ceiling = 1e4), null == t.interval && (t.interval = 250), new Promise((function(r, n) {
                                var i = null,
                                    o = !1,
                                    s = function() {
                                        return !o && (o = !0, i && clearTimeout(i), !0)
                                    };
                                t.timeout && (i = setTimeout((function() {
                                    s() && n(new Error("timeout"))
                                }), t.timeout));
                                var a = t.fastRetry || null,
                                    u = 0;
                                ! function i() {
                                    return e().then((function(e) {
                                        if (void 0 !== e) s() && r(e);
                                        else if (t.onceBlock) t.onceBlock.once("block", i);
                                        else if (!o) {
                                            u++;
                                            var n = t.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                                            n < t.floor && (n = t.floor), n > t.ceiling && (n = t.ceiling), a && (u--, n = a, a = null), setTimeout(i, n)
                                        }
                                        return null
                                    }), (function(e) {
                                        s() && n(e)
                                    }))
                                }()
                            }))
                        }
                    }, {
                        "../errors": 5,
                        "./base64": 61,
                        "./properties": 74,
                        "./utf8": 85,
                        xmlhttprequest: 49
                    }],
                    87: [function(e, r, n) {
                        (function(t) {
                            "use strict";
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var r = e("../utils/hash"),
                                i = e("../utils/properties");
                            n.check = function(e) {
                                for (var t = [], n = 0; n < 2048; n++) {
                                    var i = e.getWord(n);
                                    if (n !== e.getWordIndex(i)) return "0x";
                                    t.push(i)
                                }
                                return r.id(t.join("\n") + "\n")
                            };
                            var o = (s.prototype.split = function(e) {
                                return e.toLowerCase().split(/ +/g)
                            }, s.prototype.join = function(e) {
                                return e.join(" ")
                            }, s);

                            function s(e) {
                                i.defineReadOnly(this, "locale", e)
                            }
                            n.Wordlist = o, n.register = function(e, t) {
                                t = t || e.locale
                            }
                        }).call(this, "undefined" != typeof t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        "../utils/hash": 65,
                        "../utils/properties": 74
                    }],
                    88: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                                },
                                function(e, t) {
                                    function r() {
                                        this.constructor = e
                                    }
                                    n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                                }),
                            o = this && this.__importStar || function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t.default = e, t
                            };
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var s, a = e("./utils/bytes"),
                            u = e("./utils/hash"),
                            l = e("./utils/hdnode"),
                            h = e("./utils/json-wallet"),
                            f = e("./utils/keccak256"),
                            c = e("./utils/properties"),
                            d = e("./utils/random-bytes"),
                            p = o(e("./utils/secret-storage")),
                            v = e("./utils/signing-key"),
                            y = e("./utils/transaction"),
                            m = e("./abstract-signer"),
                            g = e("./providers/abstract-provider"),
                            b = o(e("./errors")),
                            w = (i(_, s = m.Signer), Object.defineProperty(_.prototype, "address", {
                                get: function() {
                                    return this.signingKey.address
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(_.prototype, "mnemonic", {
                                get: function() {
                                    return this.signingKey.mnemonic
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(_.prototype, "path", {
                                get: function() {
                                    return this.signingKey.path
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(_.prototype, "privateKey", {
                                get: function() {
                                    return this.signingKey.privateKey
                                },
                                enumerable: !0,
                                configurable: !0
                            }), _.prototype.connect = function(e) {
                                return g.Provider.isProvider(e) || b.throwError("invalid provider", b.INVALID_ARGUMENT, {
                                    argument: "provider",
                                    value: e
                                }), new _(this.signingKey, e)
                            }, _.prototype.getAddress = function() {
                                return Promise.resolve(this.address)
                            }, _.prototype.sign = function(e) {
                                var t = this;
                                return c.resolveProperties(e).then((function(e) {
                                    var r = y.serialize(e),
                                        n = t.signingKey.signDigest(f.keccak256(r));
                                    return y.serialize(e, n)
                                }))
                            }, _.prototype.signMessage = function(e) {
                                return Promise.resolve(a.joinSignature(this.signingKey.signDigest(u.hashMessage(e))))
                            }, _.prototype.getBalance = function(e) {
                                if (!this.provider) throw new Error("missing provider");
                                return this.provider.getBalance(this.address, e)
                            }, _.prototype.getTransactionCount = function(e) {
                                if (!this.provider) throw new Error("missing provider");
                                return this.provider.getTransactionCount(this.address, e)
                            }, _.prototype.sendTransaction = function(e) {
                                var t = this;
                                if (!this.provider) throw new Error("missing provider");
                                return null == e.nonce && ((e = c.shallowCopy(e)).nonce = this.getTransactionCount("pending")), y.populateTransaction(e, this.provider, this.address).then((function(e) {
                                    return t.sign(e).then((function(e) {
                                        return t.provider.sendTransaction(e)
                                    }))
                                }))
                            }, _.prototype.encrypt = function(e, t, r) {
                                if ("function" != typeof t || r || (r = t, t = {}), r && "function" != typeof r) throw new Error("invalid callback");
                                return t = t || {}, this.mnemonic && ((t = c.shallowCopy(t)).mnemonic = this.mnemonic, t.path = this.path), p.encrypt(this.privateKey, e, t, r)
                            }, _.createRandom = function(e) {
                                var t = d.randomBytes(16);
                                (e = e || {}).extraEntropy && (t = a.arrayify(f.keccak256(a.concat([t, e.extraEntropy])).substring(0, 34)));
                                var r = l.entropyToMnemonic(t, e.locale);
                                return _.fromMnemonic(r, e.path, e.locale)
                            }, _.fromEncryptedJson = function(e, t, r) {
                                if (h.isCrowdsaleWallet(e)) try {
                                    r && r(0);
                                    var n = p.decryptCrowdsale(e, t);
                                    return r && r(1), Promise.resolve(new _(n))
                                } catch (e) {
                                    return Promise.reject(e)
                                } else if (h.isSecretStorageWallet(e)) return p.decrypt(e, t, r).then((function(e) {
                                    return new _(e)
                                }));
                                return Promise.reject("invalid wallet JSON")
                            }, _.fromMnemonic = function(e, t, r) {
                                return t = t || l.defaultPath, new _(l.fromMnemonic(e, r).derivePath(t))
                            }, _);

                        function _(e, t) {
                            var r = s.call(this) || this;
                            return b.checkNew(r, _), v.SigningKey.isSigningKey(e) ? c.defineReadOnly(r, "signingKey", e) : c.defineReadOnly(r, "signingKey", new v.SigningKey(e)), c.defineReadOnly(r, "provider", t), r
                        }
                        r.Wallet = w
                    }, {
                        "./abstract-signer": 2,
                        "./errors": 5,
                        "./providers/abstract-provider": 50,
                        "./utils/bytes": 64,
                        "./utils/hash": 65,
                        "./utils/hdnode": 66,
                        "./utils/json-wallet": 70,
                        "./utils/keccak256": 71,
                        "./utils/properties": 74,
                        "./utils/random-bytes": 75,
                        "./utils/secret-storage": 78,
                        "./utils/signing-key": 81,
                        "./utils/transaction": 83
                    }],
                    89: [function(e, t, r) {
                        "use strict";
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var n = e("../wordlists/lang-en").langEn;
                        r.en = n
                    }, {
                        "../wordlists/lang-en": 90
                    }],
                    90: [function(e, t, r) {
                        "use strict";
                        var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            },
                            function(e, t) {
                                function r() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            });
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        });
                        var o, s = e("../utils/wordlist"),
                            a = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo",
                            u = null;

                        function l(e) {
                            if (null == u && (u = a.replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== s.check(e))) throw u = null, new Error("BIP39 Wordlist for en (English) FAILED")
                        }

                        function h() {
                            return o.call(this, "en") || this
                        }
                        var f = new(i(h, o = s.Wordlist), h.prototype.getWord = function(e) {
                            return l(this), u[e]
                        }, h.prototype.getWordIndex = function(e) {
                            return l(this), u.indexOf(e)
                        }, h);
                        r.langEn = f, s.register(f)
                    }, {
                        "../utils/wordlist": 87
                    }]
                }, {}, [7])(7)
            }).call(this, r(23))
        }
    }
]);
//# sourceMappingURL=0.fc7860ee.chunk.js.map