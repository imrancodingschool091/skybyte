(() => {
    var t = {
            61: (t, e, i) => {
                t = i.nmd(t);
                var s = "__lodash_hash_undefined__",
                    o = 9007199254740991,
                    n = "[object Arguments]",
                    r = "[object AsyncFunction]",
                    l = "[object Function]",
                    a = "[object GeneratorFunction]",
                    c = "[object Null]",
                    d = "[object Object]",
                    h = "[object Proxy]",
                    g = "[object Undefined]",
                    u = /^\[object .+?Constructor\]$/,
                    m = /^(?:0|[1-9]\d*)$/,
                    p = {};
                p["[object Float32Array]"] = p["[object Float64Array]"] = p["[object Int8Array]"] = p["[object Int16Array]"] = p["[object Int32Array]"] = p["[object Uint8Array]"] = p["[object Uint8ClampedArray]"] = p["[object Uint16Array]"] = p["[object Uint32Array]"] = !0, p[n] = p["[object Array]"] = p["[object ArrayBuffer]"] = p["[object Boolean]"] = p["[object DataView]"] = p["[object Date]"] = p["[object Error]"] = p[l] = p["[object Map]"] = p["[object Number]"] = p[d] = p["[object RegExp]"] = p["[object Set]"] = p["[object String]"] = p["[object WeakMap]"] = !1;
                var f, v, y, b = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                    w = "object" == typeof self && self && self.Object === Object && self,
                    S = b || w || Function("return this")(),
                    I = e && !e.nodeType && e,
                    x = I && t && !t.nodeType && t,
                    C = x && x.exports === I,
                    E = C && b.process,
                    A = function() {
                        try {
                            return x && x.require && x.require("util").types || E && E.binding && E.binding("util")
                        } catch (t) {}
                    }(),
                    z = A && A.isTypedArray,
                    T = Array.prototype,
                    P = Function.prototype,
                    O = Object.prototype,
                    k = S["__core-js_shared__"],
                    _ = P.toString,
                    D = O.hasOwnProperty,
                    L = (f = /[^.]+$/.exec(k && k.keys && k.keys.IE_PROTO || "")) ? "Symbol(src)_1." + f : "",
                    B = O.toString,
                    F = _.call(Object),
                    j = RegExp("^" + _.call(D).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    $ = C ? S.Buffer : void 0,
                    M = S.Symbol,
                    G = S.Uint8Array,
                    V = ($ && $.allocUnsafe, v = Object.getPrototypeOf, y = Object, function(t) {
                        return v(y(t))
                    }),
                    Y = Object.create,
                    X = O.propertyIsEnumerable,
                    H = T.splice,
                    R = M ? M.toStringTag : void 0,
                    N = function() {
                        try {
                            var t = gt(Object, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {}
                    }(),
                    Z = $ ? $.isBuffer : void 0,
                    q = Math.max,
                    W = Date.now,
                    U = gt(S, "Map"),
                    K = gt(Object, "create"),
                    J = function() {
                        function t() {}
                        return function(e) {
                            if (!Ct(e)) return {};
                            if (Y) return Y(e);
                            t.prototype = e;
                            var i = new t;
                            return t.prototype = void 0, i
                        }
                    }();

                function Q(t) {
                    var e = -1,
                        i = null == t ? 0 : t.length;
                    for (this.clear(); ++e < i;) {
                        var s = t[e];
                        this.set(s[0], s[1])
                    }
                }

                function tt(t) {
                    var e = -1,
                        i = null == t ? 0 : t.length;
                    for (this.clear(); ++e < i;) {
                        var s = t[e];
                        this.set(s[0], s[1])
                    }
                }

                function et(t) {
                    var e = -1,
                        i = null == t ? 0 : t.length;
                    for (this.clear(); ++e < i;) {
                        var s = t[e];
                        this.set(s[0], s[1])
                    }
                }

                function it(t) {
                    var e = this.__data__ = new tt(t);
                    this.size = e.size
                }

                function st(t, e, i) {
                    (void 0 !== i && !vt(t[e], i) || void 0 === i && !(e in t)) && rt(t, e, i)
                }

                function ot(t, e, i) {
                    var s = t[e];
                    D.call(t, e) && vt(s, i) && (void 0 !== i || e in t) || rt(t, e, i)
                }

                function nt(t, e) {
                    for (var i = t.length; i--;)
                        if (vt(t[i][0], e)) return i;
                    return -1
                }

                function rt(t, e, i) {
                    "__proto__" == e && N ? N(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: i,
                        writable: !0
                    }) : t[e] = i
                }
                Q.prototype.clear = function() {
                    this.__data__ = K ? K(null) : {}, this.size = 0
                }, Q.prototype.delete = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }, Q.prototype.get = function(t) {
                    var e = this.__data__;
                    if (K) {
                        var i = e[t];
                        return i === s ? void 0 : i
                    }
                    return D.call(e, t) ? e[t] : void 0
                }, Q.prototype.has = function(t) {
                    var e = this.__data__;
                    return K ? void 0 !== e[t] : D.call(e, t)
                }, Q.prototype.set = function(t, e) {
                    var i = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, i[t] = K && void 0 === e ? s : e, this
                }, tt.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, tt.prototype.delete = function(t) {
                    var e = this.__data__,
                        i = nt(e, t);
                    return !(i < 0 || (i == e.length - 1 ? e.pop() : H.call(e, i, 1), --this.size, 0))
                }, tt.prototype.get = function(t) {
                    var e = this.__data__,
                        i = nt(e, t);
                    return i < 0 ? void 0 : e[i][1]
                }, tt.prototype.has = function(t) {
                    return nt(this.__data__, t) > -1
                }, tt.prototype.set = function(t, e) {
                    var i = this.__data__,
                        s = nt(i, t);
                    return s < 0 ? (++this.size, i.push([t, e])) : i[s][1] = e, this
                }, et.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Q,
                        map: new(U || tt),
                        string: new Q
                    }
                }, et.prototype.delete = function(t) {
                    var e = ht(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }, et.prototype.get = function(t) {
                    return ht(this, t).get(t)
                }, et.prototype.has = function(t) {
                    return ht(this, t).has(t)
                }, et.prototype.set = function(t, e) {
                    var i = ht(this, t),
                        s = i.size;
                    return i.set(t, e), this.size += i.size == s ? 0 : 1, this
                }, it.prototype.clear = function() {
                    this.__data__ = new tt, this.size = 0
                }, it.prototype.delete = function(t) {
                    var e = this.__data__,
                        i = e.delete(t);
                    return this.size = e.size, i
                }, it.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, it.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, it.prototype.set = function(t, e) {
                    var i = this.__data__;
                    if (i instanceof tt) {
                        var s = i.__data__;
                        if (!U || s.length < 199) return s.push([t, e]), this.size = ++i.size, this;
                        i = this.__data__ = new et(s)
                    }
                    return i.set(t, e), this.size = i.size, this
                };

                function lt(t) {
                    return null == t ? void 0 === t ? g : c : R && R in Object(t) ? function(t) {
                        var e = D.call(t, R),
                            i = t[R];
                        try {
                            t[R] = void 0;
                            var s = !0
                        } catch (t) {}
                        var o = B.call(t);
                        return s && (e ? t[R] = i : delete t[R]), o
                    }(t) : function(t) {
                        return B.call(t)
                    }(t)
                }

                function at(t) {
                    return Et(t) && lt(t) == n
                }

                function ct(t, e, i, s, o) {
                    t !== e && function(t, e, i) {
                        for (var s = -1, o = Object(t), n = i(t), r = n.length; r--;) {
                            var l = n[++s];
                            if (!1 === e(o[l], l, o)) break
                        }
                    }(e, (function(n, r) {
                        if (o || (o = new it), Ct(n)) ! function(t, e, i, s, o, n, r) {
                            var l = pt(t, i),
                                a = pt(e, i),
                                c = r.get(a);
                            if (c) st(t, i, c);
                            else {
                                var h, g, u, m, p, f = n ? n(l, a, i + "", t, e, r) : void 0,
                                    v = void 0 === f;
                                if (v) {
                                    var y = bt(a),
                                        b = !y && St(a),
                                        w = !y && !b && At(a);
                                    f = a, y || b || w ? bt(l) ? f = l : Et(p = l) && wt(p) ? f = function(t, e) {
                                        var i = -1,
                                            s = t.length;
                                        for (e || (e = Array(s)); ++i < s;) e[i] = t[i];
                                        return e
                                    }(l) : b ? (v = !1, f = function(t, e) {
                                        return t.slice()
                                    }(a)) : w ? (v = !1, m = new(u = (h = a).buffer).constructor(u.byteLength), new G(m).set(new G(u)), g = m, f = new h.constructor(g, h.byteOffset, h.length)) : f = [] : function(t) {
                                        if (!Et(t) || lt(t) != d) return !1;
                                        var e = V(t);
                                        if (null === e) return !0;
                                        var i = D.call(e, "constructor") && e.constructor;
                                        return "function" == typeof i && i instanceof i && _.call(i) == F
                                    }(a) || yt(a) ? (f = l, yt(l) ? f = function(t) {
                                        return function(t, e, i, s) {
                                            var o = !i;
                                            i || (i = {});
                                            for (var n = -1, r = e.length; ++n < r;) {
                                                var l = e[n],
                                                    a = void 0;
                                                void 0 === a && (a = t[l]), o ? rt(i, l, a) : ot(i, l, a)
                                            }
                                            return i
                                        }(t, zt(t))
                                    }(l) : Ct(l) && !It(l) || (f = function(t) {
                                        return "function" != typeof t.constructor || mt(t) ? {} : J(V(t))
                                    }(a))) : v = !1
                                }
                                v && (r.set(a, f), o(f, a, s, n, r), r.delete(a)), st(t, i, f)
                            }
                        }(t, e, r, i, ct, s, o);
                        else {
                            var l = s ? s(pt(t, r), n, r + "", t, e, o) : void 0;
                            void 0 === l && (l = n), st(t, r, l)
                        }
                    }), zt)
                }
                var dt = N ? function(t, e) {
                    return N(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: (i = e, function() {
                            return i
                        }),
                        writable: !0
                    });
                    var i
                } : Ot;

                function ht(t, e) {
                    var i, s, o = t.__data__;
                    return ("string" == (s = typeof(i = e)) || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== i : null === i) ? o["string" == typeof e ? "string" : "hash"] : o.map
                }

                function gt(t, e) {
                    var i = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return function(t) {
                        return !(!Ct(t) || function(t) {
                            return !!L && L in t
                        }(t)) && (It(t) ? j : u).test(function(t) {
                            if (null != t) {
                                try {
                                    return _.call(t)
                                } catch (t) {}
                                try {
                                    return t + ""
                                } catch (t) {}
                            }
                            return ""
                        }(t))
                    }(i) ? i : void 0
                }

                function ut(t, e) {
                    var i = typeof t;
                    return !!(e = null == e ? o : e) && ("number" == i || "symbol" != i && m.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function mt(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || O)
                }

                function pt(t, e) {
                    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                }
                var ft = function(t) {
                    var e = 0,
                        i = 0;
                    return function() {
                        var s = W(),
                            o = 16 - (s - i);
                        if (i = s, o > 0) {
                            if (++e >= 800) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }(dt);

                function vt(t, e) {
                    return t === e || t != t && e != e
                }
                var yt = at(function() {
                        return arguments
                    }()) ? at : function(t) {
                        return Et(t) && D.call(t, "callee") && !X.call(t, "callee")
                    },
                    bt = Array.isArray;

                function wt(t) {
                    return null != t && xt(t.length) && !It(t)
                }
                var St = Z || function() {
                    return !1
                };

                function It(t) {
                    if (!Ct(t)) return !1;
                    var e = lt(t);
                    return e == l || e == a || e == r || e == h
                }

                function xt(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
                }

                function Ct(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function Et(t) {
                    return null != t && "object" == typeof t
                }
                var At = z ? function(t) {
                    return function(e) {
                        return t(e)
                    }
                }(z) : function(t) {
                    return Et(t) && xt(t.length) && !!p[lt(t)]
                };

                function zt(t) {
                    return wt(t) ? function(t, e) {
                        var i = bt(t),
                            s = !i && yt(t),
                            o = !i && !s && St(t),
                            n = !i && !s && !o && At(t),
                            r = i || s || o || n,
                            l = r ? function(t, e) {
                                for (var i = -1, s = Array(t); ++i < t;) s[i] = e(i);
                                return s
                            }(t.length, String) : [],
                            a = l.length;
                        for (var c in t) !e && !D.call(t, c) || r && ("length" == c || o && ("offset" == c || "parent" == c) || n && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ut(c, a)) || l.push(c);
                        return l
                    }(t, !0) : function(t) {
                        if (!Ct(t)) return function(t) {
                            var e = [];
                            if (null != t)
                                for (var i in Object(t)) e.push(i);
                            return e
                        }(t);
                        var e = mt(t),
                            i = [];
                        for (var s in t)("constructor" != s || !e && D.call(t, s)) && i.push(s);
                        return i
                    }(t)
                }
                var Tt, Pt = (Tt = function(t, e, i, s) {
                    ct(t, e, i, s)
                }, function(t, e) {
                    return ft(function(t, e, i) {
                        return e = q(void 0 === e ? t.length - 1 : e, 0),
                            function() {
                                for (var s = arguments, o = -1, n = q(s.length - e, 0), r = Array(n); ++o < n;) r[o] = s[e + o];
                                o = -1;
                                for (var l = Array(e + 1); ++o < e;) l[o] = s[o];
                                return l[e] = i(r),
                                    function(t, e, i) {
                                        switch (i.length) {
                                            case 0:
                                                return t.call(e);
                                            case 1:
                                                return t.call(e, i[0]);
                                            case 2:
                                                return t.call(e, i[0], i[1]);
                                            case 3:
                                                return t.call(e, i[0], i[1], i[2])
                                        }
                                        return t.apply(e, i)
                                    }(t, this, l)
                            }
                    }(t, e, Ot), t + "")
                }((function(t, e) {
                    var i = -1,
                        s = e.length,
                        o = s > 1 ? e[s - 1] : void 0,
                        n = s > 2 ? e[2] : void 0;
                    for (o = Tt.length > 3 && "function" == typeof o ? (s--, o) : void 0, n && function(t, e, i) {
                            if (!Ct(i)) return !1;
                            var s = typeof e;
                            return !!("number" == s ? wt(i) && ut(e, i.length) : "string" == s && e in i) && vt(i[e], t)
                        }(e[0], e[1], n) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++i < s;) {
                        var r = e[i];
                        r && Tt(t, r, i, o)
                    }
                    return t
                })));

                function Ot(t) {
                    return t
                }
                t.exports = Pt
            }
        },
        e = {};

    function i(s) {
        var o = e[s];
        if (void 0 !== o) return o.exports;
        var n = e[s] = {
            id: s,
            loaded: !1,
            exports: {}
        };
        return t[s](n, n.exports, i), n.loaded = !0, n.exports
    }
    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }), e
    }, i.d = (t, e) => {
        for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
            enumerable: !0,
            get: e[s]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.nmd = t => (t.paths = [], t.children || (t.children = []), t), (() => {
        "use strict";
        const t = t => null == t || !(Object.keys(t) || t).length,
            e = /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
            s = (t, e = 1) => {
                const i = [
                        ['"', "'"],
                        ["':", "!"],
                        [",'", "~"],
                        ["}", ")", "\\", "\\"],
                        ["{", "(", "\\", "\\"]
                    ],
                    s = (t, e) => {
                        let i = new RegExp(`${(e[2]?e[2]:"")+e[0]}|${(e[3]?e[3]:"")+e[1]}`, "g");
                        return t.replace(i, (t => t === e[0] ? e[1] : e[0]))
                    };
                if (e)
                    for (let e = 0; e < i.length; ++e) t = s(t, i[e]);
                else
                    for (let e = i.length; e--;) t = s(t, i[e]);
                return t
            },
            o = t => {
                try {
                    return JSON.parse(t), t
                } catch (t) {}
                return /[!~$].*[!~$].*[!~$]/.test(t) ? (t => {
                    const e = (t = t.substring(0, t.length - 1)).split("");
                    let i = e[0];
                    if (e.length > 1) {
                        let t = e[1];
                        for (let e of t) {
                            let t = i.split(e);
                            i = t.join(t.pop())
                        }
                    }
                    return s(i, 0)
                })(t) : t
            },
            n = window.gsap;
        var r = i.n(n);
        const l = window.CustomEase;
        var a = i.n(l);
        const c = window.ScrollTrigger;
        var d = i.n(c);
        const h = (t, e = "", i = !1) => null === t ? .value ? e : "em" === t ? .unit && i ? `${t.value}` : void 0 !== t ? .value ? `${t.value}${t.unit}` : e,
            g = t => t.globalColorData ? .slug ? `var(--${t.globalColorData?.slug})` : t.value;
        var u = i(61),
            m = i.n(u);
        const p = t => t === Object(t),
            f = function(t, e, i) {
                if (i = null == i ? {} : i, !e) throw new Error("mapFn is required");
                if ("function" != typeof e) throw new TypeError("mapFn must be a function");
                if (!p(i)) throw new TypeError("options must be an object");
                return new v(e, i).map(t)
            };
        class v {
            cache = new WeakMap;
            constructor(t, e) {
                this.mapFn = t, this.opts = e
            }
            map(t, e) {
                return Array.isArray(t) ? this.mapArray(t) : p(t) ? this.mapObject(t) : this.mapFn.call(this.opts.thisArg, t, e)
            }
            mapArray(t) {
                return this.mapFn.call(this.opts.thisArg, t)
            }
            mapObject(t) {
                if (this.cache.has(t)) return this.cache.get(t);
                const e = this.opts.inPlace ? t : {};
                this.cache.set(t, e);
                for (const i in t) t.hasOwnProperty(i) && (e[i] = this.map(t[i], i));
                return e
            }
        }

        function y(t, e) {
            if (Array.isArray(t)) return e
        }
        const b = (t, e) => {
            const i = f(e.desktop, (t => ({
                value: t,
                source: "desktop"
            })));
            let s, o;
            if ("desktop" === t) s = [e.desktop], o = [i];
            else if ("hover" === t) {
                const t = f(e.hover, (t => ({
                    value: t,
                    source: "hover"
                })));
                s = [e.desktop, e.hover], o = [i, t]
            } else if ("tablet" === t) s = [e.desktop, e.tablet], o = [i, f(e.tablet, (t => ({
                value: t,
                source: "tablet"
            })))];
            else {
                const t = f(e.tablet, (t => ({
                        value: t,
                        source: "tablet"
                    }))),
                    n = f(e.mobile, (t => ({
                        value: t,
                        source: "mobile"
                    })));
                s = [e.desktop, e.tablet, e.mobile], o = [i, t, n]
            }
            const n = m()({}, ...s, y);
            let r = {};
            return r = m()(r, ...o, y), {
                respAttr: n,
                respSources: r
            }
        };
        r().registerPlugin(d(), a());
        const w = {
            starts_entering: "clamp(top bottom)",
            fully_visible: "clamp(bottom bottom)",
            starts_exiting: "top top",
            top_of_screen: "top top",
            fully_invisible: "bottom top",
            start_center: "center center",
            center: "top center"
        };
        class S {
            TriggerType = "scrollIntoView";
            mode = "frontend";
            constructor(e, i) {
                this.element = e, i ? (this.settings = i, this.mode = "editor") : this.element.dataset.nectarBlockAnimation ? this.settings = JSON.parse(o(this.element.dataset.nectarBlockAnimation)) : this.settings = null, this.scrollPositionElement = this.element, this.intoViewElement = this.element, this.settings && ("self" === this.settings.selector ? "editor" === this.mode ? (this.scrollPositionElement = this.element.querySelector(":scope > .nectar-block"), this.intoViewElement = this.scrollPositionElement) : (this.scrollPositionElement.querySelector(":scope > div") && !t(this.settings.scrollPosition) && (this.intoViewElement = this.scrollPositionElement.querySelector(":scope > div")), this.scrollPositionElement = this.element) : t(this.settings.scrollPosition) || t(this.settings.scrollIntoView) ? this.element.classList.contains(this.settings.selector.replace(/\./g, "")) ? (this.intoViewElement = this.element, this.scrollPositionElement = this.element) : (this.scrollPositionElement = e.querySelector(this.settings.selector), this.intoViewElement = e.querySelector(this.settings.selector)) : this.intoViewElement = e.querySelector(this.settings.selector));
                const s = this.getPresetAnimations();
                this.presetAnimations = s.presetAnimations, this.presetAnimationsDirectional = s.presetAnimationsDirectional, this.events(), this.initAnimations()
            }
            shouldActivateOnDevice(t) {
                if ("frontend" === this.mode) {
                    var e;
                    const i = null !== (e = window ? .nectarBlocksFrontend ? .device) && void 0 !== e ? e : "";
                    if (i && !t.triggerDevices.includes(i)) return !1
                }
                return !0
            }
            onDeviceChange() {
                this.settings && !t(this.settings.scrollIntoView) && this.scrollIntoView()
            }
            initAnimations() {
                this.settings && !t(this.settings.scrollIntoView) && this.scrollIntoView(), this.settings && !t(this.settings.scrollPosition) && "frontend" === this.mode && this.scrollPosition(), this.element.classList.add("animation-initialized")
            }
            getPresetAnimations() {
                return {
                    presetAnimations: {
                        fade: [{
                            opacity: 0
                        }, {
                            opacity: 1
                        }],
                        grow: [{
                            transform: "scale(0.75)"
                        }, {
                            transform: "scale(1)"
                        }],
                        shrink: [{
                            transform: "scale(1)"
                        }, {
                            transform: "scale(0)"
                        }],
                        rotate: [{
                            transform: "rotate(10deg) translateY(100px)"
                        }, {
                            transform: "rotate(0deg) translateY(0px)"
                        }]
                    },
                    presetAnimationsDirectional: {
                        slide: {
                            left: [{
                                x: "-4rem"
                            }, {
                                x: "0rem"
                            }],
                            right: [{
                                x: "4rem"
                            }, {
                                x: "0rem"
                            }],
                            down: [{
                                y: "4rem"
                            }, {
                                y: "0rem"
                            }],
                            up: [{
                                y: "-4rem"
                            }, {
                                y: "0rem"
                            }]
                        },
                        flip: {
                            left: [{
                                transform: "perspective(1200px) rotateY(-40deg) translateX(-50%)"
                            }, {
                                transform: "perspective(1200px) rotateY(0deg) translateX(0%)"
                            }],
                            right: [{
                                transform: "perspective(1200px) rotateY(40deg) translateX(50%)"
                            }, {
                                transform: "perspective(1200px) rotateY(0deg) translateX(0%)"
                            }],
                            down: [{
                                transform: "perspective(1200px) rotateX(-50deg) translateY(50%)"
                            }, {
                                transform: "perspective(1200px) rotateX(0deg) translateY(0%)"
                            }],
                            up: [{
                                transform: "perspective(1200px) rotateX(50deg) translateY(-50%)"
                            }, {
                                transform: "perspective(1200px) rotateX(0deg) translateY(0%)"
                            }]
                        },
                        reveal: {
                            left: [{
                                clipPath: "inset(0 100% 0 0)"
                            }, {
                                clipPath: "inset(0 0% 0 0)"
                            }],
                            right: [{
                                clipPath: "inset(0 0 0 100%)"
                            }, {
                                clipPath: "inset(0 0 0 0%)"
                            }],
                            down: [{
                                clipPath: "inset(100% 0 0 0)"
                            }, {
                                clipPath: "inset(0% 0 0 0)"
                            }],
                            up: [{
                                clipPath: "inset(0 0 100% 0)"
                            }, {
                                clipPath: "inset(0 0 0% 0)"
                            }]
                        }
                    }
                }
            }
            getGroupedSettings(t) {
                const e = {
                    translate: "transform",
                    scale: "transform",
                    rotate: "transform",
                    skew: "transform",
                    perspective: "transform",
                    opacity: "opacity",
                    boxShadow: "boxShadow",
                    blur: "filters",
                    brightness: "filters",
                    contrast: "filters",
                    grayscale: "filters",
                    hueRotate: "filters",
                    saturate: "filters",
                    sepia: "filters",
                    inset: "masks",
                    circle: "masks"
                };
                var i;
                return {
                    transform: [],
                    opacity: [],
                    boxShadow: [],
                    filters: [],
                    masks: [],
                    ...(i = t => e[t.type], t.reduce(((t, e) => {
                        const s = i(e);
                        return t[s] || (t[s] = []), t[s].push(e), t
                    }), {}))
                }
            }
            processSettings(t) {
                const e = {
                        transform: [],
                        opacity: [],
                        filter: [],
                        boxShadow: [],
                        clipPath: []
                    },
                    i = {
                        transform: "",
                        opacity: "",
                        filter: "",
                        boxShadow: "",
                        clipPath: ""
                    };
                return "transform" in t && (t.transform.forEach((t => {
                    e.transform.push(((t, e = "") => {
                        if ("translate" === t.type) return `translate(${h(t.x,e)}, ${h(t.y,e)})`;
                        if ("scale" === t.type) return `scale(${t.x}, ${t.y})`;
                        if ("rotate" === t.type) {
                            const e = [`rotate(${t.degrees}deg)`];
                            return t.xDegrees && 0 !== t.xDegrees && e.push(`rotateX(${t.xDegrees}deg)`), t.yDegrees && 0 !== t.yDegrees && e.push(`rotateY(${t.yDegrees}deg)`), e.join(" ")
                        }
                        if ("skew" === t.type) return `skew(${t.xDegrees}deg, ${t.yDegrees}deg)`;
                        if ("perspective" === t.type) return `perspective(${h(t.perspective)})`;
                        throw new TypeError("Transform value not valid")
                    })(t, "0px"))
                })), e.transform.length > 0 && (i.transform = e.transform.join(" "))), "boxShadow" in t && (t.boxShadow.forEach((t => {
                    e.boxShadow.push((t => {
                        const e = h(t.xAxis),
                            i = h(t.yAxis),
                            s = h(t.blur),
                            o = h(t.spread),
                            n = g(t.color);
                        return e || i || s || o ? `${e} ${i} ${s} ${o} ${n}` : ""
                    })(t))
                })), e.boxShadow.length > 0 && (i.boxShadow = e.boxShadow.join(" "))), "opacity" in t && (t.opacity.forEach((t => {
                    e.opacity.push(t.value.toString())
                })), e.opacity.length > 0 && (i.opacity = e.opacity.join(" "))), t ? .filters && (t.filters.forEach((t => {
                    e.filter.push(((t, e = "") => "blur" === t.type ? `blur(${h(t.value,e)})` : "dropShadow" === t.type ? `drop-shadow(${h(t.value.offsetX,e)} ${h(t.value.offsetY,e)} ${h(t.value.blurRadius,e)} ${g(t.value.color)})` : "hueRotate" === t.type ? `hue-rotate(${t.value}deg)` : "grayscale" === t.type || "brightness" === t.type || "contrast" === t.type || "sepia" === t.type ? `${t.type}(${t.value})` : "saturation" === t.type ? `saturate(${t.value})` : `${t.type}(${t.value}%)`)(t, "0px"))
                })), e.filter.length > 0 && (i.filter = e.filter.join(" "))), t ? .masks && (t.masks.forEach((t => {
                    if ("inset" === t.type) {
                        const i = t.inset,
                            s = `${h(i.top,"0px")} ${h(i.right,"0px")} ${h(i.bottom,"0px")} ${h(i.left,"0px")}`;
                        t.roundness.value ? e.clipPath.push(`inset(${s} round ${h(t.roundness,"0px")})`) : e.clipPath.push(`inset(${s} round 0px)`)
                    } else if ("circle" === t.type) {
                        const i = t.position,
                            s = t.percent;
                        e.clipPath.push(`circle(${s}% at ${i})`)
                    }
                })), e.clipPath.length > 0 && (i.clipPath = e.clipPath.join(" "))), Object.keys(i).forEach((t => {
                    const e = t;
                    "" === i[e] && delete i[e]
                })), i
            }
            presetOverwrites(t, e) {
                return this.element.classList.contains("scale-full-width-to-contained") && (t.transform = () => this.fullWidthToContainedScale(e)), t
            }
            fullWidthToContainedScale(t) {
                return "to" === t ? "scale(1)" : `scale(${window.innerWidth/this.element.offsetWidth})`
            }
            getAnimationSettingsForDevice(t) {
                return {
                    from: this.presetOverwrites(this.processSettings(this.getGroupedSettings(t.map((t => t.start)))), "from"),
                    to: this.presetOverwrites(this.processSettings(this.getGroupedSettings(t.map((t => t.end)))), "to")
                }
            }
            getAnimationSettings(t) {
                const e = {
                        desktop: t.desktop || {},
                        tablet: t.tablet || {},
                        mobile: t.mobile || {}
                    },
                    {
                        respAttr: i
                    } = b("desktop", e),
                    {
                        respAttr: s
                    } = b("tablet", e),
                    {
                        respAttr: o
                    } = b("mobile", e);
                return {
                    desktop: this.getAnimationSettingsForDevice(i.timeline),
                    tablet: this.getAnimationSettingsForDevice(s.timeline),
                    mobile: this.getAnimationSettingsForDevice(o.timeline)
                }
            }
            scrollPosition() {
                var i;
                if (!this.settings || t(this.settings.scrollPosition)) return;
                const s = this.settings.scrollPosition,
                    o = this.getAnimationSettings(s.scrollValues),
                    n = {
                        desktop: {
                            mediaQuery: "(min-width: 1025px)",
                            settings: o.desktop
                        },
                        tablet: {
                            mediaQuery: "(max-width: 1024px) and (min-width: 768px)",
                            settings: o.tablet
                        },
                        mobile: {
                            mediaQuery: "(max-width: 767px)",
                            settings: o.mobile
                        }
                    },
                    l = {
                        trigger: this.scrollPositionElement,
                        start: w[s.animationBoundaries.start],
                        end: w[s.animationBoundaries.end],
                        scrub: s ? .smoothScroll ? .75 : 0,
                        invalidateOnRefresh: !0,
                        onToggle: t => {
                            if (t.isActive) {
                                const t = Object.keys(o.desktop.to).map((t => {
                                    return e = t, e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) ? .map((t => t.toLowerCase())).join("-");
                                    var e
                                }));
                                t.length > 0 && (this.scrollPositionElement.style.willChange = t.join(", "))
                            } else this.scrollPositionElement.style.willChange = ""
                        }
                    },
                    a = this.scrollPositionElement.closest(".nectar-blocks-pin"),
                    c = this.scrollPositionElement.closest(".nectar-blocks-pin-root");
                let h = "in_view";
                if (a) {
                    l.pinnedContainer = a, l.trigger = l.pinnedContainer, l.start = w.starts_entering;
                    const t = c.id,
                        e = this.getInstancePositionData(c),
                        i = this.getTimelineInstance(a);
                    h = i ? i ? .animationStart : "in_view", t && "in_view" === h && e && (l.end = () => this.getInstancePositionData(c) ? this.getInstancePositionData(c) ? .end : "")
                }
                if (s.animationBoundaries.pin) {
                    if (!a) {
                        this.scrollPositionElement.classList.add("nectar-blocks-pin"), this.element.classList.add("nectar-blocks-pin-root"), l.pin = !0, s.animationBoundaries ? .removePinSpacing && (l.pinSpacing = !1), "desktop" !== window ? .nectarBlocksFrontend ? .device && (l.anticipatePin = 1);
                        const t = s.animationBoundaries.endPinOffset;
                        t ? .value && (l.end = `+=${t?.value}${t?.unit}`), "on_pin" === s.animationBoundaries ? .pinAnimationStart && Object.keys(n).forEach((t => {
                            const e = t,
                                i = r().matchMedia();
                            s.triggerDevices.includes(e) && i.add(n[e].mediaQuery, (() => {
                                var t, e;
                                const i = r().timeline({
                                    scrollTrigger: { ...l
                                    }
                                });
                                return this.storeTimelineInstance(i, null !== (t = s.animationBoundaries ? .pinStagger) && void 0 !== t ? t : 0, null !== (e = s.animationBoundaries ? .pinAnimationStart) && void 0 !== e ? e : "in_view"), () => {
                                    i.getChildren().forEach((t => {
                                        t.targets && setTimeout((() => {
                                            r().set(t.targets(), {
                                                clearProps: "all"
                                            })
                                        }), 20)
                                    }))
                                }
                            }))
                        }))
                    }
                } else {
                    const t = s.animationBoundaries.endOffset;
                    t ? .value && !a && (l.end = t ? .value < 0 ? `-${Math.abs(t?.value)}${t?.unit}` : `${t?.value}${t?.unit}`)
                }
                const g = null !== (i = window ? .nectarBlocksFrontend ? .device) && void 0 !== i ? i : "";
                g && s.triggerDevices.includes(g) && t(this.settings.scrollIntoView) && this.removeAwaitInViewDataAttrs(), this.scrollPositionElement.classList.add("no-transition"), Object.keys(n).forEach((t => {
                    const e = t;
                    if (s.triggerDevices.includes(e)) {
                        const {
                            mediaQuery: t,
                            settings: i
                        } = n[e];
                        this.applyMediaQueryAnimation(t, i, l, a, h, s)
                    }
                })), s.animationBoundaries.pin && (e || d().refresh())
            }
            applyMediaQueryAnimation(t, e, i, s, o, n) {
                r().matchMedia().add(t, (() => {
                    const t = s && this.getTimelineInstanceData(s);
                    if (n.animationBoundaries.pin && "on_pin" === n.animationBoundaries ? .pinAnimationStart) r().delayedCall(0, (() => {
                        const t = this.getTimelineInstanceData(this.element);
                        r().fromTo(this.scrollPositionElement, { ...e.from
                        }, { ...e.to,
                            scrollTrigger: { ...i,
                                pin: !1,
                                start: w.starts_entering,
                                end: () => t ? .scrollTrigger ? t.scrollTrigger.start : 0
                            },
                            ease: "linear"
                        })
                    }));
                    else if (t && "on_pin" === o) {
                        const t = this.getTimelineInstanceData(s),
                            i = this.getTimelineInstance(s),
                            o = i ? i ? .stagger : 0;
                        t && t.fromTo(this.scrollPositionElement, { ...e.from
                        }, { ...e.to,
                            ease: "power1"
                        }, `<${o}%`)
                    } else {
                        const t = r().fromTo(this.scrollPositionElement, { ...e.from
                        }, { ...e.to,
                            scrollTrigger: { ...i
                            },
                            ease: n.animationBoundaries.pin ? "power1" : "linear"
                        });
                        this.storeScrollPositionInstance(t)
                    }
                    return () => {
                        r().set(this.scrollPositionElement, {
                            clearProps: !0
                        })
                    }
                }))
            }
            storeTimelineInstance(t, e, i) {
                if (!window.nectarBlocksFrontend.timelineAnimationInstances) return;
                const s = window.nectarBlocksFrontend.timelineAnimationInstances,
                    o = s.find((t => t.key === this.element.id));
                o ? o.instances = { ...o.instances,
                    [window.nectarBlocksFrontend.device]: t
                } : s.push({
                    key: this.element.id,
                    instances: {
                        [window.nectarBlocksFrontend.device]: t
                    },
                    stagger: e,
                    animationStart: i
                })
            }
            getTimelineInstanceData(t) {
                if (!window ? .nectarBlocksFrontend ? .device) return null;
                const e = window.nectarBlocksFrontend.device,
                    i = window.nectarBlocksFrontend.timelineAnimationInstances.find((e => e.key === t.id));
                return i && i.instances[e] ? i.instances[e] : null
            }
            getTimelineInstance(t) {
                if (!window ? .nectarBlocksFrontend ? .device) return 0;
                return window.nectarBlocksFrontend.timelineAnimationInstances.find((e => e.key === t.id)) || 0
            }
            storeScrollPositionInstance(t) {
                if (!window.nectarBlocksFrontend.scrollAnimationInstances) return;
                const e = window.nectarBlocksFrontend.scrollAnimationInstances,
                    i = e.find((t => t.key === this.element.id));
                i ? i.instances = { ...i.instances,
                    [window.nectarBlocksFrontend.device]: t
                } : e.push({
                    key: this.element.id,
                    instances: {
                        [window.nectarBlocksFrontend.device]: t
                    }
                })
            }
            getInstancePositionData(t) {
                if (!window ? .nectarBlocksFrontend ? .device) return null;
                const e = window.nectarBlocksFrontend.device,
                    i = window.nectarBlocksFrontend.scrollAnimationInstances.find((e => e.key === t.id));
                return i ? i.instances[e] ? .scrollTrigger : null
            }
            scrollIntoView() {
                var t;
                const e = null !== (t = window ? .nectarBlocksFrontend ? .device) && void 0 !== t ? t : "";
                if (!this.settings || void 0 === this.settings.scrollIntoView) return;
                if (!this.shouldActivateOnDevice(this.settings.scrollIntoView)) return;
                if ("frontend" === this.mode && !this.element.hasAttribute(`data-await-in-view-${e}`)) return;
                const i = this.settings.scrollIntoView;
                let s;
                s = "slide" === i.animation.type || "flip" === i.animation.type || "reveal" === i.animation.type ? this.presetAnimationsDirectional[i.animation.type][i.animation.fromDirection] : this.presetAnimations[i.animation.type];
                const o = {
                    delay: i.animationDelaySec,
                    duration: i.animationDurationSec
                };
                let n = "power1.out";
                i.animationTimingFunction && (n = a().create("ease", i.animationTimingFunction.join(",")), o.ease = n), "out" === i.animation.playDirection && (o.runBackwards = !0);
                const l = r().timeline();
                l.fromTo(this.intoViewElement, { ...s[0]
                }, { ...s[1],
                    ...o,
                    onComplete: () => {
                        this.intoViewElement.classList.remove("no-transition"), this.intoViewElement.style.willChange = "", this.animationCompleted(), "editor" === this.mode && (this.intoViewElement.style.opacity = "", this.intoViewElement.style.transform = "")
                    }
                }), "fade" !== i.animation.type && "reveal" !== i.animation.type && l.fromTo(this.intoViewElement, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: i.animationDurationSec,
                    ease: n
                }, "<"), d().create({
                    trigger: this.intoViewElement,
                    start: "top bottom -=30px",
                    animation: l,
                    onEnter: () => {
                        this.removeAwaitInViewDataAttrs(), this.intoViewElement.style.willChange = "transform, opacity", this.intoViewElement.classList.add("no-transition")
                    }
                })
            }
            events() {
                "frontend" === this.mode && window.addEventListener("nectar-blocks-changed-device", this.onDeviceChange.bind(this))
            }
            removeAwaitInViewDataAttrs() {
                const t = this.element.dataset;
                for (const e in t) e.startsWith("awaitInView") && delete t[e]
            }
            animationCompleted() {
                window.dispatchEvent(new Event("nectar-blocks-animation-complete"))
            }
        }
        r().registerPlugin(d(), a());
        class I {
            isTopLevel = !1;
            mode = "frontend";
            selector = ":scope > .nectar__bg-layer:not(.nectar__bg-shape):not(.nectar__bg-color)";
            constructor(t, e) {
                if (this.element = t, e) this.settings = e, this.mode = "editor";
                else {
                    if (!this.element.dataset.nectarBgScrollAnimation) return;
                    this.settings = JSON.parse(o(this.element.dataset.nectarBgScrollAnimation))
                }
                this.element.closest(".nectar-global-section-megamenu") || (this.settings ? .selector && (this.selector = this.settings.selector), this.scrollAnimationInstance = null, this.animationElements = t.querySelectorAll(this.selector), this.animationElements.length && (this.element.getBoundingClientRect().top + window.scrollY < window.innerHeight && (this.isTopLevel = !0), this.init()))
            }
            init() {
                const {
                    enabled: t
                } = this.settings;
                t && (this.fitBgLayer(), this.bgScrollAnimationInit(), this.events(), this.element.classList.add("nectar-bg-scroll-animation-initialized"))
            }
            events() {
                "ontouchstart" in window || navigator.maxTouchPoints ? screen.orientation ? screen.orientation.addEventListener("change", this.fitBgLayer.bind(this)) : window.addEventListener("orientationchange", (() => {
                    setTimeout((() => {
                        this.fitBgLayer.bind(this)
                    }), 400)
                })) : window.addEventListener("resize", this.fitBgLayer.bind(this)), "frontend" === this.mode && window.addEventListener("nectar-blocks-changed-device", this.bgScrollAnimationInit.bind(this))
            }
            shouldActivateOnDevice() {
                var t;
                const e = null !== (t = window ? .nectarBlocksFrontend ? .device) && void 0 !== t ? t : "";
                return !(!e || e && !this.settings.triggerDevices.includes(e))
            }
            bgScrollAnimationInit() {
                this.settings && (this.scrollAnimationInstance ? .kill(), this.shouldActivateOnDevice() ? setTimeout((() => {
                    this.bgScrollAnimation()
                }), this.scrollAnimationInstance ? 50 : 0) : this.animationElements.forEach((t => {
                    t.removeAttribute("style")
                })))
            }
            bgScrollAnimation() {
                const {
                    strength: t,
                    effect: e
                } = this.settings, i = {
                    from: {},
                    to: {}
                };
                "parallax" === e ? (i.from = {
                    y: () => this.isTopLevel ? 0 : .85 * -t * this.element.offsetHeight
                }, i.to = {
                    y: () => .85 * t * this.element.offsetHeight
                }) : (i.from = {
                    scale: 1 + Math.abs(t)
                }, i.to = {
                    scale: 1
                });
                const s = {
                    trigger: this.element,
                    start: "clamp(top bottom)",
                    end: "bottom top",
                    scrub: 0,
                    invalidateOnRefresh: !0
                };
                if (this.element.closest(".nectar-blocks-pin")) {
                    s.pinnedContainer = this.element.closest(".nectar-blocks-pin");
                    const t = this.element.closest(".nectar-blocks-pin-root");
                    t.id && this.getInstancePositionData(t) && (s.end = () => this.getInstancePositionData(t) ? this.getInstancePositionData(t) ? .end : "")
                }
                this.scrollAnimationInstance = r().fromTo(this.animationElements, { ...i.from
                }, { ...i.to,
                    scrollTrigger: { ...s
                    },
                    ease: "linear"
                })
            }
            fitBgLayer() {
                this.shouldActivateOnDevice() && setTimeout((() => {
                    this.animationElements.forEach((t => {
                        const e = this.element,
                            {
                                strength: i
                            } = this.settings;
                        r().set(t, {
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0
                        });
                        const s = t.getBoundingClientRect().top + window.scrollY,
                            o = Math.min(e.offsetHeight, window.innerHeight),
                            n = e.offsetWidth / t.offsetWidth;
                        let l = o * (1.1 + Math.abs(i)) / t.offsetHeight;
                        if (this.isTopLevel) {
                            const e = s / window.innerHeight * 100;
                            l = o * (1.2 + Math.abs(i) * (e / 100)) / t.offsetHeight
                        }
                        const a = Math.max(n, l),
                            c = Math.ceil(t.offsetWidth * a),
                            d = Math.ceil(t.offsetHeight * a);
                        r().set(t, {
                            width: c,
                            height: d,
                            top: Math.ceil((e.offsetHeight - d) / 2),
                            left: Math.ceil((e.offsetWidth - c) / 2)
                        })
                    }))
                }), 0)
            }
            getInstancePositionData(t) {
                if (!window ? .nectarBlocksFrontend ? .device) return null;
                const e = window.nectarBlocksFrontend.device,
                    i = window.nectarBlocksFrontend.scrollAnimationInstances.find((e => e.key === t.id));
                return i ? i.instances[e] ? .scrollTrigger : null
            }
            destroy() {
                this.scrollAnimationInstance ? .kill()
            }
        }
        var x = function() {
                return x = Object.assign || function(t) {
                    for (var e, i = 1, s = arguments.length; i < s; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, x.apply(this, arguments)
            },
            C = "lgUpdateSlides",
            E = "lgPosterClick",
            A = "lgBeforeNextSlide",
            z = "lgBeforePrevSlide",
            T = {
                mode: "lg-slide",
                easing: "ease",
                speed: 400,
                licenseKey: "0000-0000-000-0000",
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 300,
                container: "",
                startAnimationDuration: 400,
                zoomFromOrigin: !0,
                hideBarsDelay: 0,
                showBarsAfter: 1e4,
                slideDelay: 0,
                supportLegacyBrowser: !0,
                allowMediaOverlap: !1,
                videoMaxSize: "1280-720",
                loadYouTubePoster: !0,
                defaultCaptionHeight: 0,
                ariaLabelledby: "",
                ariaDescribedby: "",
                resetScrollPosition: !0,
                hideScrollbar: !1,
                closable: !0,
                swipeToClose: !0,
                closeOnTap: !0,
                showCloseIcon: !0,
                showMaximizeIcon: !1,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                trapFocus: !0,
                controls: !0,
                slideEndAnimation: !0,
                hideControlOnEnd: !1,
                mousewheel: !1,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 2,
                numberOfSlideItemsInDom: 10,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: 0,
                iframeWidth: "100%",
                iframeHeight: "100%",
                iframeMaxWidth: "100%",
                iframeMaxHeight: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                extraProps: [],
                exThumbImage: "",
                isMobile: void 0,
                mobileSettings: {
                    controls: !1,
                    showCloseIcon: !1,
                    download: !1
                },
                plugins: [],
                strings: {
                    closeGallery: "Close gallery",
                    toggleMaximize: "Toggle maximize",
                    previousSlide: "Previous slide",
                    nextSlide: "Next slide",
                    download: "Download",
                    playVideo: "Play video",
                    mediaLoadingFailed: "Oops... Failed to load content..."
                }
            },
            P = function() {
                function t(t) {
                    return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"], this.selector = this._getSelector(t), this.firstElement = this._getFirstEl(), this
                }
                return t.generateUUID = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                        var e = 16 * Math.random() | 0;
                        return ("x" == t ? e : 3 & e | 8).toString(16)
                    }))
                }, t.prototype._getSelector = function(t, e) {
                    return void 0 === e && (e = document), "string" != typeof t ? t : (e = e || document, "#" === t.substring(0, 1) ? e.querySelector(t) : e.querySelectorAll(t))
                }, t.prototype._each = function(t) {
                    return this.selector ? (void 0 !== this.selector.length ? [].forEach.call(this.selector, t) : t(this.selector, 0), this) : this
                }, t.prototype._setCssVendorPrefix = function(t, e, i) {
                    var s = e.replace(/-([a-z])/gi, (function(t, e) {
                        return e.toUpperCase()
                    })); - 1 !== this.cssVenderPrefixes.indexOf(s) ? (t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i, t.style["webkit" + s] = i, t.style["moz" + s] = i, t.style["ms" + s] = i, t.style["o" + s] = i) : t.style[s] = i
                }, t.prototype._getFirstEl = function() {
                    return this.selector && void 0 !== this.selector.length ? this.selector[0] : this.selector
                }, t.prototype.isEventMatched = function(t, e) {
                    var i = e.split(".");
                    return t.split(".").filter((function(t) {
                        return t
                    })).every((function(t) {
                        return -1 !== i.indexOf(t)
                    }))
                }, t.prototype.attr = function(t, e) {
                    return void 0 === e ? this.firstElement ? this.firstElement.getAttribute(t) : "" : (this._each((function(i) {
                        i.setAttribute(t, e)
                    })), this)
                }, t.prototype.find = function(t) {
                    return O(this._getSelector(t, this.selector))
                }, t.prototype.first = function() {
                    return this.selector && void 0 !== this.selector.length ? O(this.selector[0]) : O(this.selector)
                }, t.prototype.eq = function(t) {
                    return O(this.selector[t])
                }, t.prototype.parent = function() {
                    return O(this.selector.parentElement)
                }, t.prototype.get = function() {
                    return this._getFirstEl()
                }, t.prototype.removeAttr = function(t) {
                    var e = t.split(" ");
                    return this._each((function(t) {
                        e.forEach((function(e) {
                            return t.removeAttribute(e)
                        }))
                    })), this
                }, t.prototype.wrap = function(t) {
                    if (!this.firstElement) return this;
                    var e = document.createElement("div");
                    return e.className = t, this.firstElement.parentNode.insertBefore(e, this.firstElement), this.firstElement.parentNode.removeChild(this.firstElement), e.appendChild(this.firstElement), this
                }, t.prototype.addClass = function(t) {
                    return void 0 === t && (t = ""), this._each((function(e) {
                        t.split(" ").forEach((function(t) {
                            t && e.classList.add(t)
                        }))
                    })), this
                }, t.prototype.removeClass = function(t) {
                    return this._each((function(e) {
                        t.split(" ").forEach((function(t) {
                            t && e.classList.remove(t)
                        }))
                    })), this
                }, t.prototype.hasClass = function(t) {
                    return !!this.firstElement && this.firstElement.classList.contains(t)
                }, t.prototype.hasAttribute = function(t) {
                    return !!this.firstElement && this.firstElement.hasAttribute(t)
                }, t.prototype.toggleClass = function(t) {
                    return this.firstElement ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this) : this
                }, t.prototype.css = function(t, e) {
                    var i = this;
                    return this._each((function(s) {
                        i._setCssVendorPrefix(s, t, e)
                    })), this
                }, t.prototype.on = function(e, i) {
                    var s = this;
                    return this.selector ? (e.split(" ").forEach((function(e) {
                        Array.isArray(t.eventListeners[e]) || (t.eventListeners[e] = []), t.eventListeners[e].push(i), s.selector.addEventListener(e.split(".")[0], i)
                    })), this) : this
                }, t.prototype.once = function(t, e) {
                    var i = this;
                    return this.on(t, (function() {
                        i.off(t), e(t)
                    })), this
                }, t.prototype.off = function(e) {
                    var i = this;
                    return this.selector ? (Object.keys(t.eventListeners).forEach((function(s) {
                        i.isEventMatched(e, s) && (t.eventListeners[s].forEach((function(t) {
                            i.selector.removeEventListener(s.split(".")[0], t)
                        })), t.eventListeners[s] = [])
                    })), this) : this
                }, t.prototype.trigger = function(t, e) {
                    if (!this.firstElement) return this;
                    var i = new CustomEvent(t.split(".")[0], {
                        detail: e || null
                    });
                    return this.firstElement.dispatchEvent(i), this
                }, t.prototype.load = function(t) {
                    var e = this;
                    return fetch(t).then((function(t) {
                        return t.text()
                    })).then((function(t) {
                        e.selector.innerHTML = t
                    })), this
                }, t.prototype.html = function(t) {
                    return void 0 === t ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each((function(e) {
                        e.innerHTML = t
                    })), this)
                }, t.prototype.append = function(t) {
                    return this._each((function(e) {
                        "string" == typeof t ? e.insertAdjacentHTML("beforeend", t) : e.appendChild(t)
                    })), this
                }, t.prototype.prepend = function(t) {
                    return this._each((function(e) {
                        "string" == typeof t ? e.insertAdjacentHTML("afterbegin", t) : t instanceof HTMLElement && e.insertBefore(t.cloneNode(!0), e.firstChild)
                    })), this
                }, t.prototype.remove = function() {
                    return this._each((function(t) {
                        t.parentNode.removeChild(t)
                    })), this
                }, t.prototype.empty = function() {
                    return this._each((function(t) {
                        t.innerHTML = ""
                    })), this
                }, t.prototype.scrollTop = function(t) {
                    return void 0 !== t ? (document.body.scrollTop = t, document.documentElement.scrollTop = t, this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                }, t.prototype.scrollLeft = function(t) {
                    return void 0 !== t ? (document.body.scrollLeft = t, document.documentElement.scrollLeft = t, this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
                }, t.prototype.offset = function() {
                    if (!this.firstElement) return {
                        left: 0,
                        top: 0
                    };
                    var t = this.firstElement.getBoundingClientRect(),
                        e = O("body").style().marginLeft;
                    return {
                        left: t.left - parseFloat(e) + this.scrollLeft(),
                        top: t.top + this.scrollTop()
                    }
                }, t.prototype.style = function() {
                    return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {}
                }, t.prototype.width = function() {
                    var t = this.style();
                    return this.firstElement.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight)
                }, t.prototype.height = function() {
                    var t = this.style();
                    return this.firstElement.clientHeight - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom)
                }, t.eventListeners = {}, t
            }();

        function O(t) {
            return function() {
                if ("function" == typeof window.CustomEvent) return !1;
                window.CustomEvent = function(t, e) {
                    e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: null
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
                }
            }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), new P(t)
        }
        var k = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"];

        function _(t) {
            return "href" === t ? "src" : t = (t = (t = t.replace("data-", "")).charAt(0).toLowerCase() + t.slice(1)).replace(/-([a-z])/g, (function(t) {
                return t[1].toUpperCase()
            }))
        }
        var D = function(t, e, i) {
                fetch(t).then((function(t) {
                    return t.text()
                })).then((function(t) {
                    if ("append" === i) {
                        var s = '<div class="lg-sub-html">' + t + "</div>";
                        e.append(s)
                    } else e.html(t)
                }))
            },
            L = function(t, e, i, s) {
                void 0 === i && (i = 0);
                var o = O(t).attr("data-lg-size") || s;
                if (o) {
                    var n = o.split(",");
                    if (n[1])
                        for (var r = window.innerWidth, l = 0; l < n.length; l++) {
                            var a = n[l];
                            if (parseInt(a.split("-")[2], 10) > r) {
                                o = a;
                                break
                            }
                            l === n.length - 1 && (o = a)
                        }
                    var c = o.split("-"),
                        d = parseInt(c[0], 10),
                        h = parseInt(c[1], 10),
                        g = e.width(),
                        u = e.height() - i,
                        m = Math.min(g, d),
                        p = Math.min(u, h),
                        f = Math.min(m / d, p / h);
                    return {
                        width: d * f,
                        height: h * f
                    }
                }
            },
            B = function(t, e, i, s, o) {
                if (o) {
                    var n = O(t).find("img").first();
                    if (n.get()) {
                        var r = e.get().getBoundingClientRect(),
                            l = r.width,
                            a = e.height() - (i + s),
                            c = n.width(),
                            d = n.height(),
                            h = n.style(),
                            g = (l - c) / 2 - n.offset().left + (parseFloat(h.paddingLeft) || 0) + (parseFloat(h.borderLeft) || 0) + O(window).scrollLeft() + r.left,
                            u = (a - d) / 2 - n.offset().top + (parseFloat(h.paddingTop) || 0) + (parseFloat(h.borderTop) || 0) + O(window).scrollTop() + i;
                        return "translate3d(" + (g *= -1) + "px, " + (u *= -1) + "px, 0) scale3d(" + c / o.width + ", " + d / o.height + ", 1)"
                    }
                }
            },
            F = function(t, e, i, s, o, n) {
                var r = "<img " + i + " " + (s ? 'srcset="' + s + '"' : "") + "  " + (o ? 'sizes="' + o + '"' : "") + ' class="lg-object lg-image" data-index="' + t + '" src="' + e + '" />',
                    l = "";
                return n && (l = ("string" == typeof n ? JSON.parse(n) : n).map((function(t) {
                    var e = "";
                    return Object.keys(t).forEach((function(i) {
                        e += " " + i + '="' + t[i] + '"'
                    })), "<source " + e + "></source>"
                }))), "" + l + r
            },
            j = 0,
            $ = function() {
                function t(t, e) {
                    if (this.lgOpened = !1, this.index = 0, this.plugins = [], this.lGalleryOn = !1, this.lgBusy = !1, this.currentItemsInDom = [], this.prevScrollTop = 0, this.bodyPaddingRight = 0, this.isDummyImageRemoved = !1, this.dragOrSwipeEnabled = !1, this.mediaContainerPosition = {
                            top: 0,
                            bottom: 0
                        }, !t) return this;
                    if (j++, this.lgId = j, this.el = t, this.LGel = O(t), this.generateSettings(e), this.buildModules(), this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                    return this.galleryItems = this.getItems(), this.normalizeSettings(), this.init(), this.validateLicense(), this
                }
                return t.prototype.generateSettings = function(t) {
                    if (this.settings = x(x({}, T), t), this.settings.isMobile && "function" == typeof this.settings.isMobile ? this.settings.isMobile() : /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                        var e = x(x({}, this.settings.mobileSettings), this.settings.mobileSettings);
                        this.settings = x(x({}, this.settings), e)
                    }
                }, t.prototype.normalizeSettings = function() {
                    if (this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1), this.settings.closable || (this.settings.swipeToClose = !1), this.zoomFromOrigin = this.settings.zoomFromOrigin, this.settings.dynamic && (this.zoomFromOrigin = !1), this.settings.container) {
                        var t = this.settings.container;
                        if ("function" == typeof t) this.settings.container = t();
                        else if ("string" == typeof t) {
                            var e = document.querySelector(t);
                            this.settings.container = null != e ? e : document.body
                        }
                    } else this.settings.container = document.body;
                    this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length)
                }, t.prototype.init = function() {
                    var t = this;
                    this.addSlideVideoInfo(this.galleryItems), this.buildStructure(), this.LGel.trigger("lgInit", {
                        instance: this
                    }), this.settings.keyPress && this.keyPress(), setTimeout((function() {
                        t.enableDrag(), t.enableSwipe(), t.triggerPosterClick()
                    }), 50), this.arrow(), this.settings.mousewheel && this.mousewheel(), this.settings.dynamic || this.openGalleryOnItemClick()
                }, t.prototype.openGalleryOnItemClick = function() {
                    for (var t = this, e = function(e) {
                            var s = i.items[e],
                                o = O(s),
                                n = P.generateUUID();
                            o.attr("data-lg-id", n).on("click.lgcustom-item-" + n, (function(i) {
                                i.preventDefault();
                                var o = t.settings.index || e;
                                t.openGallery(o, s)
                            }))
                        }, i = this, s = 0; s < this.items.length; s++) e(s)
                }, t.prototype.buildModules = function() {
                    var t = this;
                    this.settings.plugins.forEach((function(e) {
                        t.plugins.push(new e(t, O))
                    }))
                }, t.prototype.validateLicense = function() {
                    this.settings.licenseKey ? "0000-0000-000-0000" === this.settings.licenseKey && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key")
                }, t.prototype.getSlideItem = function(t) {
                    return O(this.getSlideItemId(t))
                }, t.prototype.getSlideItemId = function(t) {
                    return "#lg-item-" + this.lgId + "-" + t
                }, t.prototype.getIdName = function(t) {
                    return t + "-" + this.lgId
                }, t.prototype.getElementById = function(t) {
                    return O("#" + this.getIdName(t))
                }, t.prototype.manageSingleSlideClassName = function() {
                    this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item")
                }, t.prototype.buildStructure = function() {
                    var t = this;
                    if (!this.$container || !this.$container.get()) {
                        var e = "",
                            i = "";
                        this.settings.controls && (e = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings.previousSlide + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings.nextSlide + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"), ".lg-item" !== this.settings.appendSubHtmlTo && (i = '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                        var s = "";
                        this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                        var o = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "",
                            n = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "",
                            r = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : ""),
                            l = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings.closeGallery + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "",
                            a = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings.toggleMaximize + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "",
                            c = '\n        <div class="' + r + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + o + " " + n + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + s + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + e + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + a + "\n                    " + l + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                        O(this.settings.container).append(c), document.body !== this.settings.container && O(this.settings.container).css("position", "relative"), this.outer = this.getElementById("lg-outer"), this.$lgComponents = this.getElementById("lg-components"), this.$backdrop = this.getElementById("lg-backdrop"), this.$container = this.getElementById("lg-container"), this.$inner = this.getElementById("lg-inner"), this.$content = this.getElementById("lg-content"), this.$toolbar = this.getElementById("lg-toolbar"), this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                        var d = this.settings.mode + " ";
                        this.manageSingleSlideClassName(), this.settings.enableDrag && (d += "lg-grab "), this.outer.addClass(d), this.$inner.css("transition-timing-function", this.settings.easing), this.$inner.css("transition-duration", this.settings.speed + "ms"), this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings.download + '" download class="lg-download lg-icon"></a>'), this.counter(), O(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                            t.refreshOnResize()
                        })), this.hideBars(), this.manageCloseGallery(), this.toggleMaximize(), this.initModules()
                    }
                }, t.prototype.refreshOnResize = function() {
                    if (this.lgOpened) {
                        var t = this.galleryItems[this.index].__slideVideoInfo;
                        this.mediaContainerPosition = this.getMediaContainerPosition();
                        var e = this.mediaContainerPosition,
                            i = e.top,
                            s = e.bottom;
                        if (this.currentImageSize = L(this.items[this.index], this.outer, i + s, t && this.settings.videoMaxSize), t && this.resizeVideoSlide(this.index, this.currentImageSize), this.zoomFromOrigin && !this.isDummyImageRemoved) {
                            var o = this.getDummyImgStyles(this.currentImageSize);
                            this.outer.find(".lg-current .lg-dummy-img").first().attr("style", o)
                        }
                        this.LGel.trigger("lgContainerResize")
                    }
                }, t.prototype.resizeVideoSlide = function(t, e) {
                    var i = this.getVideoContStyle(e);
                    this.getSlideItem(t).find(".lg-video-cont").attr("style", i)
                }, t.prototype.updateSlides = function(t, e) {
                    if (this.index > t.length - 1 && (this.index = t.length - 1), 1 === t.length && (this.index = 0), t.length) {
                        var i = this.galleryItems[e].src;
                        this.galleryItems = t, this.updateControls(), this.$inner.empty(), this.currentItemsInDom = [];
                        var s = 0;
                        this.galleryItems.some((function(t, e) {
                            return t.src === i && (s = e, !0)
                        })), this.currentItemsInDom = this.organizeSlideItems(s, -1), this.loadContent(s, !0), this.getSlideItem(s).addClass("lg-current"), this.index = s, this.updateCurrentCounter(s), this.LGel.trigger(C)
                    } else this.closeGallery()
                }, t.prototype.getItems = function() {
                    if (this.items = [], this.settings.dynamic) return this.settings.dynamicEl || [];
                    if ("this" === this.settings.selector) this.items.push(this.el);
                    else if (this.settings.selector)
                        if ("string" == typeof this.settings.selector)
                            if (this.settings.selectWithin) {
                                var t = O(this.settings.selectWithin);
                                this.items = t.find(this.settings.selector).get()
                            } else this.items = this.el.querySelectorAll(this.settings.selector);
                    else this.items = this.settings.selector;
                    else this.items = this.el.children;
                    return e = this.items, i = this.settings.extraProps, s = this.settings.getCaptionFromTitleOrAlt, o = this.settings.exThumbImage, n = [], r = function() {
                        for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                        var s = Array(t),
                            o = 0;
                        for (e = 0; e < i; e++)
                            for (var n = arguments[e], r = 0, l = n.length; r < l; r++, o++) s[o] = n[r];
                        return s
                    }(k, i), [].forEach.call(e, (function(t) {
                        for (var e = {}, i = 0; i < t.attributes.length; i++) {
                            var l = t.attributes[i];
                            if (l.specified) {
                                var a = _(l.name),
                                    c = "";
                                r.indexOf(a) > -1 && (c = a), c && (e[c] = l.value)
                            }
                        }
                        var d = O(t),
                            h = d.find("img").first().attr("alt"),
                            g = d.attr("title"),
                            u = o ? d.attr(o) : d.find("img").first().attr("src");
                        e.thumb = u, s && !e.subHtml && (e.subHtml = g || h || ""), e.alt = h || g || "", n.push(e)
                    })), console.log(n, "dynamicElements"), n;
                    var e, i, s, o, n, r
                }, t.prototype.shouldHideScrollbar = function() {
                    return this.settings.hideScrollbar && document.body === this.settings.container
                }, t.prototype.hideScrollbar = function() {
                    if (this.shouldHideScrollbar()) {
                        this.bodyPaddingRight = parseFloat(O("body").style().paddingRight);
                        var t = document.documentElement.getBoundingClientRect(),
                            e = window.innerWidth - t.width;
                        O(document.body).css("padding-right", e + this.bodyPaddingRight + "px"), O(document.body).addClass("lg-overlay-open")
                    }
                }, t.prototype.resetScrollBar = function() {
                    this.shouldHideScrollbar() && (O(document.body).css("padding-right", this.bodyPaddingRight + "px"), O(document.body).removeClass("lg-overlay-open"))
                }, t.prototype.openGallery = function(t, e) {
                    var i = this;
                    if (void 0 === t && (t = this.settings.index), !this.lgOpened) {
                        this.lgOpened = !0, this.outer.removeClass("lg-hide-items"), this.hideScrollbar(), this.$container.addClass("lg-show");
                        var s = this.getItemsToBeInsertedToDom(t, t);
                        this.currentItemsInDom = s;
                        var o = "";
                        s.forEach((function(t) {
                            o = o + '<div id="' + t + '" class="lg-item"></div>'
                        })), this.$inner.append(o), this.addHtml(t);
                        var n = "";
                        this.mediaContainerPosition = this.getMediaContainerPosition();
                        var r = this.mediaContainerPosition,
                            l = r.top,
                            a = r.bottom;
                        this.settings.allowMediaOverlap || this.setMediaContainerPosition(l, a);
                        var c = this.galleryItems[t].__slideVideoInfo;
                        this.zoomFromOrigin && e && (this.currentImageSize = L(e, this.outer, l + a, c && this.settings.videoMaxSize), n = B(e, this.outer, l, a, this.currentImageSize)), this.zoomFromOrigin && n || (this.outer.addClass(this.settings.startClass), this.getSlideItem(t).removeClass("lg-complete"));
                        var d = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                        setTimeout((function() {
                            i.outer.addClass("lg-components-open")
                        }), d), this.index = t, this.LGel.trigger("lgBeforeOpen"), this.getSlideItem(t).addClass("lg-current"), this.lGalleryOn = !1, this.prevScrollTop = O(window).scrollTop(), setTimeout((function() {
                            if (i.zoomFromOrigin && n) {
                                var e = i.getSlideItem(t);
                                e.css("transform", n), setTimeout((function() {
                                    e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"), i.outer.addClass("lg-zoom-from-image")
                                })), setTimeout((function() {
                                    e.css("transform", "translate3d(0, 0, 0)")
                                }), 100)
                            }
                            setTimeout((function() {
                                i.$backdrop.addClass("in"), i.$container.addClass("lg-show-in")
                            }), 10), setTimeout((function() {
                                i.settings.trapFocus && document.body === i.settings.container && i.trapFocus()
                            }), i.settings.backdropDuration + 50), i.zoomFromOrigin && n || setTimeout((function() {
                                i.outer.addClass("lg-visible")
                            }), i.settings.backdropDuration), i.slide(t, !1, !1, !1), i.LGel.trigger("lgAfterOpen")
                        })), document.body === this.settings.container && O("html").addClass("lg-on")
                    }
                }, t.prototype.getMediaContainerPosition = function() {
                    if (this.settings.allowMediaOverlap) return {
                        top: 0,
                        bottom: 0
                    };
                    var t = this.$toolbar.get().clientHeight || 0,
                        e = this.outer.find(".lg-components .lg-sub-html").get(),
                        i = this.settings.defaultCaptionHeight || e && e.clientHeight || 0,
                        s = this.outer.find(".lg-thumb-outer").get();
                    return {
                        top: t,
                        bottom: (s ? s.clientHeight : 0) + i
                    }
                }, t.prototype.setMediaContainerPosition = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this.$content.css("top", t + "px").css("bottom", e + "px")
                }, t.prototype.hideBars = function() {
                    var t = this;
                    setTimeout((function() {
                        t.outer.removeClass("lg-hide-items"), t.settings.hideBarsDelay > 0 && (t.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                            t.outer.removeClass("lg-hide-items"), clearTimeout(t.hideBarTimeout), t.hideBarTimeout = setTimeout((function() {
                                t.outer.addClass("lg-hide-items")
                            }), t.settings.hideBarsDelay)
                        })), t.outer.trigger("mousemove.lg"))
                    }), this.settings.showBarsAfter)
                }, t.prototype.initPictureFill = function(t) {
                    if (this.settings.supportLegacyBrowser) try {
                        picturefill({
                            elements: [t.get()]
                        })
                    } catch (t) {
                        console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")
                    }
                }, t.prototype.counter = function() {
                    if (this.settings.counter) {
                        var t = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                        this.outer.find(this.settings.appendCounterTo).append(t)
                    }
                }, t.prototype.addHtml = function(t) {
                    var e, i;
                    if (this.galleryItems[t].subHtmlUrl ? i = this.galleryItems[t].subHtmlUrl : e = this.galleryItems[t].subHtml, !i)
                        if (e) {
                            var s = e.substring(0, 1);
                            "." !== s && "#" !== s || (e = this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? O(this.items).eq(t).find(e).first().html() : O(e).first().html())
                        } else e = "";
                    if (".lg-item" !== this.settings.appendSubHtmlTo) i ? D(i, this.outer.find(".lg-sub-html"), "replace") : this.outer.find(".lg-sub-html").html(e);
                    else {
                        var o = O(this.getSlideItemId(t));
                        i ? D(i, o, "append") : o.append('<div class="lg-sub-html">' + e + "</div>")
                    }
                    null != e && ("" === e ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")), this.LGel.trigger("lgAfterAppendSubHtml", {
                        index: t
                    })
                }, t.prototype.preload = function(t) {
                    for (var e = 1; e <= this.settings.preload && !(e >= this.galleryItems.length - t); e++) this.loadContent(t + e, !1);
                    for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++) this.loadContent(t - i, !1)
                }, t.prototype.getDummyImgStyles = function(t) {
                    return t ? "width:" + t.width + "px;\n                margin-left: -" + t.width / 2 + "px;\n                margin-top: -" + t.height / 2 + "px;\n                height:" + t.height + "px" : ""
                }, t.prototype.getVideoContStyle = function(t) {
                    return t ? "width:" + t.width + "px;\n                height:" + t.height + "px" : ""
                }, t.prototype.getDummyImageContent = function(t, e, i) {
                    var s;
                    if (this.settings.dynamic || (s = O(this.items).eq(e)), s) {
                        var o;
                        if (!(o = this.settings.exThumbImage ? s.attr(this.settings.exThumbImage) : s.find("img").first().attr("src"))) return "";
                        var n = this.getDummyImgStyles(this.currentImageSize),
                            r = document.createElement("img");
                        return r.alt = i || "", r.src = o, r.className = "lg-dummy-img", r.style.cssText = n, t.addClass("lg-first-slide"), this.outer.addClass("lg-first-slide-loading"), r
                    }
                    return ""
                }, t.prototype.setImgMarkup = function(t, e, i) {
                    var s, o = this.galleryItems[i],
                        n = o.alt,
                        r = o.srcset,
                        l = o.sizes,
                        a = o.sources,
                        c = n ? 'alt="' + n + '"' : "";
                    s = this.isFirstSlideWithZoomAnimation() ? this.getDummyImageContent(e, i, c) : F(i, t, c, r, l, a);
                    var d = document.createElement("picture");
                    d.className = "lg-img-wrap", O(d).append(s), e.prepend(d)
                }, t.prototype.onSlideObjectLoad = function(t, e, i, s) {
                    var o, n = t.find(".lg-object").first();
                    (o = n.get()) && o.complete && 0 !== o.naturalWidth || e ? i() : (n.on("load.lg error.lg", (function() {
                        i && i()
                    })), n.on("error.lg", (function() {
                        s && s()
                    })))
                }, t.prototype.onLgObjectLoad = function(t, e, i, s, o, n) {
                    var r = this;
                    this.onSlideObjectLoad(t, n, (function() {
                        r.triggerSlideItemLoad(t, e, i, s, o)
                    }), (function() {
                        t.addClass("lg-complete lg-complete_"), t.html('<span class="lg-error-msg">' + r.settings.strings.mediaLoadingFailed + "</span>")
                    }))
                }, t.prototype.triggerSlideItemLoad = function(t, e, i, s, o) {
                    var n = this,
                        r = this.galleryItems[e],
                        l = o && "video" === this.getSlideType(r) && !r.poster ? s : 0;
                    setTimeout((function() {
                        t.addClass("lg-complete lg-complete_"), n.LGel.trigger("lgSlideItemLoad", {
                            index: e,
                            delay: i || 0,
                            isFirstSlide: o
                        })
                    }), l)
                }, t.prototype.isFirstSlideWithZoomAnimation = function() {
                    return !(this.lGalleryOn || !this.zoomFromOrigin || !this.currentImageSize)
                }, t.prototype.addSlideVideoInfo = function(t) {
                    var e = this;
                    t.forEach((function(t, i) {
                        t.__slideVideoInfo = function(t, e, i) {
                            if (!t) return e ? {
                                html5: !0
                            } : void console.error("lightGallery :- data-src is not provided on slide item " + (i + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                            var s = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i),
                                o = t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i),
                                n = t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
                            return s ? {
                                youtube: s
                            } : o ? {
                                vimeo: o
                            } : n ? {
                                wistia: n
                            } : void 0
                        }(t.src, !!t.video, i), t.__slideVideoInfo && e.settings.loadYouTubePoster && !t.poster && t.__slideVideoInfo.youtube && (t.poster = "//img.youtube.com/vi/" + t.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg")
                    }))
                }, t.prototype.loadContent = function(t, e) {
                    var i = this,
                        s = this.galleryItems[t],
                        o = O(this.getSlideItemId(t)),
                        n = s.poster,
                        r = s.srcset,
                        l = s.sizes,
                        a = s.sources,
                        c = s.src,
                        d = s.video,
                        h = d && "string" == typeof d ? JSON.parse(d) : d;
                    if (s.responsive) {
                        var g = s.responsive.split(",");
                        c = function(t) {
                            for (var e = [], i = [], s = "", o = 0; o < t.length; o++) {
                                var n = t[o].split(" ");
                                "" === n[0] && n.splice(0, 1), i.push(n[0]), e.push(n[1])
                            }
                            for (var r = window.innerWidth, l = 0; l < e.length; l++)
                                if (parseInt(e[l], 10) > r) {
                                    s = i[l];
                                    break
                                }
                            return s
                        }(g) || c
                    }
                    var u = s.__slideVideoInfo,
                        m = "",
                        p = !!s.iframe,
                        f = !this.lGalleryOn,
                        v = 0;
                    if (f && (v = this.zoomFromOrigin && this.currentImageSize ? this.settings.startAnimationDuration + 10 : this.settings.backdropDuration + 10), !o.hasClass("lg-loaded")) {
                        if (u) {
                            var y = this.mediaContainerPosition,
                                b = y.top,
                                w = y.bottom,
                                S = L(this.items[t], this.outer, b + w, u && this.settings.videoMaxSize);
                            m = this.getVideoContStyle(S)
                        }
                        if (p) {
                            var I = function(t, e, i, s, o, n) {
                                return '<div class="lg-media-cont lg-has-iframe" style="width:' + t + "; max-width:" + i + "; height: " + e + "; max-height:" + s + '">\n                    <iframe class="lg-object" frameborder="0" ' + (n ? 'title="' + n + '"' : "") + ' src="' + o + '"  allowfullscreen="true"></iframe>\n                </div>'
                            }(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, c, s.iframeTitle);
                            o.prepend(I)
                        } else if (n) {
                            var x = "";
                            f && this.zoomFromOrigin && this.currentImageSize && (x = this.getDummyImageContent(o, t, "")), I = function(t, e, i, s, o) {
                                var n;
                                n = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5";
                                var r = e;
                                return "string" != typeof e && (r = e.outerHTML), '<div class="lg-video-cont ' + n + '" style="' + i + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + s + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + s + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + r + '\n            <img class="lg-object lg-video-poster" src="' + t + '" />\n        </div>'
                            }(n, x || "", m, this.settings.strings.playVideo, u), o.prepend(I)
                        } else if (u) I = '<div class="lg-video-cont " style="' + m + '"></div>', o.prepend(I);
                        else if (this.setImgMarkup(c, o, t), r || a) {
                            var C = o.find(".lg-object");
                            this.initPictureFill(C)
                        }(n || u) && this.LGel.trigger("lgHasVideo", {
                            index: t,
                            src: c,
                            html5Video: h,
                            hasPoster: !!n
                        }), this.LGel.trigger("lgAfterAppendSlide", {
                            index: t
                        }), this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo && this.addHtml(t)
                    }
                    var E = 0;
                    v && !O(document.body).hasClass("lg-from-hash") && (E = v), this.isFirstSlideWithZoomAnimation() && (setTimeout((function() {
                        o.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")
                    }), this.settings.startAnimationDuration + 100), o.hasClass("lg-loaded") || setTimeout((function() {
                        if ("image" === i.getSlideType(s)) {
                            var e = s.alt,
                                d = e ? 'alt="' + e + '"' : "";
                            if (o.find(".lg-img-wrap").append(F(t, c, d, r, l, s.sources)), r || a) {
                                var h = o.find(".lg-object");
                                i.initPictureFill(h)
                            }
                        }("image" === i.getSlideType(s) || "video" === i.getSlideType(s) && n) && (i.onLgObjectLoad(o, t, v, E, !0, !1), i.onSlideObjectLoad(o, !(!u || !u.html5 || n), (function() {
                            i.loadContentOnFirstSlideLoad(t, o, E)
                        }), (function() {
                            i.loadContentOnFirstSlideLoad(t, o, E)
                        })))
                    }), this.settings.startAnimationDuration + 100)), o.addClass("lg-loaded"), this.isFirstSlideWithZoomAnimation() && ("video" !== this.getSlideType(s) || n) || this.onLgObjectLoad(o, t, v, E, f, !(!u || !u.html5 || n)), this.zoomFromOrigin && this.currentImageSize || !o.hasClass("lg-complete_") || this.lGalleryOn || setTimeout((function() {
                        o.addClass("lg-complete")
                    }), this.settings.backdropDuration), this.lGalleryOn = !0, !0 === e && (o.hasClass("lg-complete_") ? this.preload(t) : o.find(".lg-object").first().on("load.lg error.lg", (function() {
                        i.preload(t)
                    })))
                }, t.prototype.loadContentOnFirstSlideLoad = function(t, e, i) {
                    var s = this;
                    setTimeout((function() {
                        e.find(".lg-dummy-img").remove(), e.removeClass("lg-first-slide"), s.outer.removeClass("lg-first-slide-loading"), s.isDummyImageRemoved = !0, s.preload(t)
                    }), i + 300)
                }, t.prototype.getItemsToBeInsertedToDom = function(t, e, i) {
                    var s = this;
                    void 0 === i && (i = 0);
                    var o = [],
                        n = Math.max(i, 3);
                    n = Math.min(n, this.galleryItems.length);
                    var r = "lg-item-" + this.lgId + "-" + e;
                    if (this.galleryItems.length <= 3) return this.galleryItems.forEach((function(t, e) {
                        o.push("lg-item-" + s.lgId + "-" + e)
                    })), o;
                    if (t < (this.galleryItems.length - 1) / 2) {
                        for (var l = t; l > t - n / 2 && l >= 0; l--) o.push("lg-item-" + this.lgId + "-" + l);
                        var a = o.length;
                        for (l = 0; l < n - a; l++) o.push("lg-item-" + this.lgId + "-" + (t + l + 1))
                    } else {
                        for (l = t; l <= this.galleryItems.length - 1 && l < t + n / 2; l++) o.push("lg-item-" + this.lgId + "-" + l);
                        for (a = o.length, l = 0; l < n - a; l++) o.push("lg-item-" + this.lgId + "-" + (t - l - 1))
                    }
                    return this.settings.loop && (t === this.galleryItems.length - 1 ? o.push("lg-item-" + this.lgId + "-0") : 0 === t && o.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))), -1 === o.indexOf(r) && o.push("lg-item-" + this.lgId + "-" + e), o
                }, t.prototype.organizeSlideItems = function(t, e) {
                    var i = this,
                        s = this.getItemsToBeInsertedToDom(t, e, this.settings.numberOfSlideItemsInDom);
                    return s.forEach((function(t) {
                        -1 === i.currentItemsInDom.indexOf(t) && i.$inner.append('<div id="' + t + '" class="lg-item"></div>')
                    })), this.currentItemsInDom.forEach((function(t) {
                        -1 === s.indexOf(t) && O("#" + t).remove()
                    })), s
                }, t.prototype.getPreviousSlideIndex = function() {
                    var t = 0;
                    try {
                        var e = this.outer.find(".lg-current").first().attr("id");
                        t = parseInt(e.split("-")[3]) || 0
                    } catch (e) {
                        t = 0
                    }
                    return t
                }, t.prototype.setDownloadValue = function(t) {
                    if (this.settings.download) {
                        var e = this.galleryItems[t];
                        if (!1 === e.downloadUrl || "false" === e.downloadUrl) this.outer.addClass("lg-hide-download");
                        else {
                            var i = this.getElementById("lg-download");
                            this.outer.removeClass("lg-hide-download"), i.attr("href", e.downloadUrl || e.src), e.download && i.attr("download", e.download)
                        }
                    }
                }, t.prototype.makeSlideAnimation = function(t, e, i) {
                    var s = this;
                    this.lGalleryOn && i.addClass("lg-slide-progress"), setTimeout((function() {
                        s.outer.addClass("lg-no-trans"), s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"), "prev" === t ? (e.addClass("lg-prev-slide"), i.addClass("lg-next-slide")) : (e.addClass("lg-next-slide"), i.addClass("lg-prev-slide")), setTimeout((function() {
                            s.outer.find(".lg-item").removeClass("lg-current"), e.addClass("lg-current"), s.outer.removeClass("lg-no-trans")
                        }), 50)
                    }), this.lGalleryOn ? this.settings.slideDelay : 0)
                }, t.prototype.slide = function(t, e, i, s) {
                    var o = this,
                        n = this.getPreviousSlideIndex();
                    if (this.currentItemsInDom = this.organizeSlideItems(t, n), !this.lGalleryOn || n !== t) {
                        var r = this.galleryItems.length;
                        if (!this.lgBusy) {
                            this.settings.counter && this.updateCurrentCounter(t);
                            var l = this.getSlideItem(t),
                                a = this.getSlideItem(n),
                                c = this.galleryItems[t],
                                d = c.__slideVideoInfo;
                            if (this.outer.attr("data-lg-slide-type", this.getSlideType(c)), this.setDownloadValue(t), d) {
                                var h = this.mediaContainerPosition,
                                    g = h.top,
                                    u = h.bottom,
                                    m = L(this.items[t], this.outer, g + u, d && this.settings.videoMaxSize);
                                this.resizeVideoSlide(t, m)
                            }
                            if (this.LGel.trigger("lgBeforeSlide", {
                                    prevIndex: n,
                                    index: t,
                                    fromTouch: !!e,
                                    fromThumb: !!i
                                }), this.lgBusy = !0, clearTimeout(this.hideBarTimeout), this.arrowDisable(t), s || (t < n ? s = "prev" : t > n && (s = "next")), e) {
                                this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                                var p = void 0,
                                    f = void 0;
                                r > 2 ? (p = t - 1, f = t + 1, (0 === t && n === r - 1 || t === r - 1 && 0 === n) && (f = 0, p = r - 1)) : (p = 0, f = 1), "prev" === s ? this.getSlideItem(f).addClass("lg-next-slide") : this.getSlideItem(p).addClass("lg-prev-slide"), l.addClass("lg-current")
                            } else this.makeSlideAnimation(s, l, a);
                            this.lGalleryOn ? setTimeout((function() {
                                o.loadContent(t, !0), ".lg-item" !== o.settings.appendSubHtmlTo && o.addHtml(t)
                            }), this.settings.speed + 50 + (e ? 0 : this.settings.slideDelay)) : this.loadContent(t, !0), setTimeout((function() {
                                o.lgBusy = !1, a.removeClass("lg-slide-progress"), o.LGel.trigger("lgAfterSlide", {
                                    prevIndex: n,
                                    index: t,
                                    fromTouch: e,
                                    fromThumb: i
                                })
                            }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (e ? 0 : this.settings.slideDelay))
                        }
                        this.index = t
                    }
                }, t.prototype.updateCurrentCounter = function(t) {
                    this.getElementById("lg-counter-current").html(t + 1 + "")
                }, t.prototype.updateCounterTotal = function() {
                    this.getElementById("lg-counter-all").html(this.galleryItems.length + "")
                }, t.prototype.getSlideType = function(t) {
                    return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image"
                }, t.prototype.touchMove = function(t, e, i) {
                    var s = e.pageX - t.pageX,
                        o = e.pageY - t.pageY,
                        n = !1;
                    if (this.swipeDirection ? n = !0 : Math.abs(s) > 15 ? (this.swipeDirection = "horizontal", n = !0) : Math.abs(o) > 15 && (this.swipeDirection = "vertical", n = !0), n) {
                        var r = this.getSlideItem(this.index);
                        if ("horizontal" === this.swipeDirection) {
                            null == i || i.preventDefault(), this.outer.addClass("lg-dragging"), this.setTranslate(r, s, 0);
                            var l = r.get().offsetWidth,
                                a = 15 * l / 100 - Math.abs(10 * s / 100);
                            this.setTranslate(this.outer.find(".lg-prev-slide").first(), -l + s - a, 0), this.setTranslate(this.outer.find(".lg-next-slide").first(), l + s + a, 0)
                        } else if ("vertical" === this.swipeDirection && this.settings.swipeToClose) {
                            null == i || i.preventDefault(), this.$container.addClass("lg-dragging-vertical");
                            var c = 1 - Math.abs(o) / window.innerHeight;
                            this.$backdrop.css("opacity", c);
                            var d = 1 - Math.abs(o) / (2 * window.innerWidth);
                            this.setTranslate(r, 0, o, d, d), Math.abs(o) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open")
                        }
                    }
                }, t.prototype.touchEnd = function(t, e, i) {
                    var s, o = this;
                    "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"), setTimeout((function() {
                        o.$container.removeClass("lg-dragging-vertical"), o.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                        var n = !0;
                        if ("horizontal" === o.swipeDirection) {
                            s = t.pageX - e.pageX;
                            var r = Math.abs(t.pageX - e.pageX);
                            s < 0 && r > o.settings.swipeThreshold ? (o.goToNextSlide(!0), n = !1) : s > 0 && r > o.settings.swipeThreshold && (o.goToPrevSlide(!0), n = !1)
                        } else if ("vertical" === o.swipeDirection) {
                            if (s = Math.abs(t.pageY - e.pageY), o.settings.closable && o.settings.swipeToClose && s > 100) return void o.closeGallery();
                            o.$backdrop.css("opacity", 1)
                        }
                        if (o.outer.find(".lg-item").removeAttr("style"), n && Math.abs(t.pageX - e.pageX) < 5) {
                            var l = O(i.target);
                            o.isPosterElement(l) && o.LGel.trigger(E)
                        }
                        o.swipeDirection = void 0
                    })), setTimeout((function() {
                        o.outer.hasClass("lg-dragging") || "lg-slide" === o.settings.mode || o.outer.removeClass("lg-slide")
                    }), this.settings.speed + 100)
                }, t.prototype.enableSwipe = function() {
                    var t = this,
                        e = {},
                        i = {},
                        s = !1,
                        o = !1;
                    this.settings.enableSwipe && (this.$inner.on("touchstart.lg", (function(i) {
                        t.dragOrSwipeEnabled = !0;
                        var s = t.getSlideItem(t.index);
                        !O(i.target).hasClass("lg-item") && !s.get().contains(i.target) || t.outer.hasClass("lg-zoomed") || t.lgBusy || 1 !== i.touches.length || (o = !0, t.touchAction = "swipe", t.manageSwipeClass(), e = {
                            pageX: i.touches[0].pageX,
                            pageY: i.touches[0].pageY
                        })
                    })), this.$inner.on("touchmove.lg", (function(n) {
                        o && "swipe" === t.touchAction && 1 === n.touches.length && (i = {
                            pageX: n.touches[0].pageX,
                            pageY: n.touches[0].pageY
                        }, t.touchMove(e, i, n), s = !0)
                    })), this.$inner.on("touchend.lg", (function(n) {
                        if ("swipe" === t.touchAction) {
                            if (s) s = !1, t.touchEnd(i, e, n);
                            else if (o) {
                                var r = O(n.target);
                                t.isPosterElement(r) && t.LGel.trigger(E)
                            }
                            t.touchAction = void 0, o = !1
                        }
                    })))
                }, t.prototype.enableDrag = function() {
                    var t = this,
                        e = {},
                        i = {},
                        s = !1,
                        o = !1;
                    this.settings.enableDrag && (this.outer.on("mousedown.lg", (function(i) {
                        t.dragOrSwipeEnabled = !0;
                        var o = t.getSlideItem(t.index);
                        (O(i.target).hasClass("lg-item") || o.get().contains(i.target)) && (t.outer.hasClass("lg-zoomed") || t.lgBusy || (i.preventDefault(), t.lgBusy || (t.manageSwipeClass(), e = {
                            pageX: i.pageX,
                            pageY: i.pageY
                        }, s = !0, t.outer.get().scrollLeft += 1, t.outer.get().scrollLeft -= 1, t.outer.removeClass("lg-grab").addClass("lg-grabbing"), t.LGel.trigger("lgDragStart"))))
                    })), O(window).on("mousemove.lg.global" + this.lgId, (function(n) {
                        s && t.lgOpened && (o = !0, i = {
                            pageX: n.pageX,
                            pageY: n.pageY
                        }, t.touchMove(e, i), t.LGel.trigger("lgDragMove"))
                    })), O(window).on("mouseup.lg.global" + this.lgId, (function(n) {
                        if (t.lgOpened) {
                            var r = O(n.target);
                            o ? (o = !1, t.touchEnd(i, e, n), t.LGel.trigger("lgDragEnd")) : t.isPosterElement(r) && t.LGel.trigger(E), s && (s = !1, t.outer.removeClass("lg-grabbing").addClass("lg-grab"))
                        }
                    })))
                }, t.prototype.triggerPosterClick = function() {
                    var t = this;
                    this.$inner.on("click.lg", (function(e) {
                        !t.dragOrSwipeEnabled && t.isPosterElement(O(e.target)) && t.LGel.trigger(E)
                    }))
                }, t.prototype.manageSwipeClass = function() {
                    var t = this.index + 1,
                        e = this.index - 1;
                    this.settings.loop && this.galleryItems.length > 2 && (0 === this.index ? e = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (t = 0)), this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"), e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"), this.getSlideItem(t).addClass("lg-next-slide")
                }, t.prototype.goToNextSlide = function(t) {
                    var e = this,
                        i = this.settings.loop;
                    t && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++, this.LGel.trigger(A, {
                        index: this.index
                    }), this.slide(this.index, !!t, !1, "next")) : i ? (this.index = 0, this.LGel.trigger(A, {
                        index: this.index
                    }), this.slide(this.index, !!t, !1, "next")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-right-end"), setTimeout((function() {
                        e.outer.removeClass("lg-right-end")
                    }), 400)))
                }, t.prototype.goToPrevSlide = function(t) {
                    var e = this,
                        i = this.settings.loop;
                    t && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index > 0 ? (this.index--, this.LGel.trigger(z, {
                        index: this.index,
                        fromTouch: t
                    }), this.slide(this.index, !!t, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1, this.LGel.trigger(z, {
                        index: this.index,
                        fromTouch: t
                    }), this.slide(this.index, !!t, !1, "prev")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-left-end"), setTimeout((function() {
                        e.outer.removeClass("lg-left-end")
                    }), 400)))
                }, t.prototype.keyPress = function() {
                    var t = this;
                    O(window).on("keydown.lg.global" + this.lgId, (function(e) {
                        t.lgOpened && !0 === t.settings.escKey && 27 === e.keyCode && (e.preventDefault(), t.settings.allowMediaOverlap && t.outer.hasClass("lg-can-toggle") && t.outer.hasClass("lg-components-open") ? t.outer.removeClass("lg-components-open") : t.closeGallery()), t.lgOpened && t.galleryItems.length > 1 && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
                    }))
                }, t.prototype.arrow = function() {
                    var t = this;
                    this.getElementById("lg-prev").on("click.lg", (function() {
                        t.goToPrevSlide()
                    })), this.getElementById("lg-next").on("click.lg", (function() {
                        t.goToNextSlide()
                    }))
                }, t.prototype.arrowDisable = function(t) {
                    if (!this.settings.loop && this.settings.hideControlOnEnd) {
                        var e = this.getElementById("lg-prev"),
                            i = this.getElementById("lg-next");
                        t + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"), 0 === t ? e.attr("disabled", "disabled").addClass("disabled") : e.removeAttr("disabled").removeClass("disabled")
                    }
                }, t.prototype.setTranslate = function(t, e, i, s, o) {
                    void 0 === s && (s = 1), void 0 === o && (o = 1), t.css("transform", "translate3d(" + e + "px, " + i + "px, 0px) scale3d(" + s + ", " + o + ", 1)")
                }, t.prototype.mousewheel = function() {
                    var t = this,
                        e = 0;
                    this.outer.on("wheel.lg", (function(i) {
                        if (i.deltaY && !(t.galleryItems.length < 2)) {
                            i.preventDefault();
                            var s = (new Date).getTime();
                            s - e < 1e3 || (e = s, i.deltaY > 0 ? t.goToNextSlide() : i.deltaY < 0 && t.goToPrevSlide())
                        }
                    }))
                }, t.prototype.isSlideElement = function(t) {
                    return t.hasClass("lg-outer") || t.hasClass("lg-item") || t.hasClass("lg-img-wrap") || t.hasClass("lg-img-rotate")
                }, t.prototype.isPosterElement = function(t) {
                    var e = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                    return t.hasClass("lg-video-poster") || t.hasClass("lg-video-play-button") || e && e.contains(t.get())
                }, t.prototype.toggleMaximize = function() {
                    var t = this;
                    this.getElementById("lg-maximize").on("click.lg", (function() {
                        t.$container.toggleClass("lg-inline"), t.refreshOnResize()
                    }))
                }, t.prototype.invalidateItems = function() {
                    for (var t = 0; t < this.items.length; t++) {
                        var e = O(this.items[t]);
                        e.off("click.lgcustom-item-" + e.attr("data-lg-id"))
                    }
                }, t.prototype.trapFocus = function() {
                    var t = this;
                    this.$container.get().focus({
                        preventScroll: !0
                    }), O(window).on("keydown.lg.global" + this.lgId, (function(e) {
                        if (t.lgOpened && ("Tab" === e.key || 9 === e.keyCode)) {
                            var i = (n = t.$container.get(), r = n.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'), [].filter.call(r, (function(t) {
                                    var e = window.getComputedStyle(t);
                                    return "none" !== e.display && "hidden" !== e.visibility
                                }))),
                                s = i[0],
                                o = i[i.length - 1];
                            e.shiftKey ? document.activeElement === s && (o.focus(), e.preventDefault()) : document.activeElement === o && (s.focus(), e.preventDefault())
                        }
                        var n, r
                    }))
                }, t.prototype.manageCloseGallery = function() {
                    var t = this;
                    if (this.settings.closable) {
                        var e = !1;
                        this.getElementById("lg-close").on("click.lg", (function() {
                            t.closeGallery()
                        })), this.settings.closeOnTap && (this.outer.on("mousedown.lg", (function(i) {
                            var s = O(i.target);
                            e = !!t.isSlideElement(s)
                        })), this.outer.on("mousemove.lg", (function() {
                            e = !1
                        })), this.outer.on("mouseup.lg", (function(i) {
                            var s = O(i.target);
                            t.isSlideElement(s) && e && (t.outer.hasClass("lg-dragging") || t.closeGallery())
                        })))
                    }
                }, t.prototype.closeGallery = function(t) {
                    var e = this;
                    if (!this.lgOpened || !this.settings.closable && !t) return 0;
                    this.LGel.trigger("lgBeforeClose"), this.settings.resetScrollPosition && !this.settings.hideScrollbar && O(window).scrollTop(this.prevScrollTop);
                    var i, s = this.items[this.index];
                    if (this.zoomFromOrigin && s) {
                        var o = this.mediaContainerPosition,
                            n = o.top,
                            r = o.bottom,
                            l = this.galleryItems[this.index],
                            a = l.__slideVideoInfo,
                            c = l.poster,
                            d = L(s, this.outer, n + r, a && c && this.settings.videoMaxSize);
                        i = B(s, this.outer, n, r, d)
                    }
                    this.zoomFromOrigin && i ? (this.outer.addClass("lg-closing lg-zoom-from-image"), this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", i)) : (this.outer.addClass("lg-hide-items"), this.outer.removeClass("lg-zoom-from-image")), this.destroyModules(), this.lGalleryOn = !1, this.isDummyImageRemoved = !1, this.zoomFromOrigin = this.settings.zoomFromOrigin, clearTimeout(this.hideBarTimeout), this.hideBarTimeout = !1, O("html").removeClass("lg-on"), this.outer.removeClass("lg-visible lg-components-open"), this.$backdrop.removeClass("in").css("opacity", 0);
                    var h = this.zoomFromOrigin && i ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                    return this.$container.removeClass("lg-show-in"), setTimeout((function() {
                        e.zoomFromOrigin && i && e.outer.removeClass("lg-zoom-from-image"), e.$container.removeClass("lg-show"), e.resetScrollBar(), e.$backdrop.removeAttr("style").css("transition-duration", e.settings.backdropDuration + "ms"), e.outer.removeClass("lg-closing " + e.settings.startClass), e.getSlideItem(e.index).removeClass("lg-start-end-progress"), e.$inner.empty(), e.lgOpened && e.LGel.trigger("lgAfterClose", {
                            instance: e
                        }), e.$container.get() && e.$container.get().blur(), e.lgOpened = !1
                    }), h + 100), h + 100
                }, t.prototype.initModules = function() {
                    this.plugins.forEach((function(t) {
                        try {
                            t.init()
                        } catch (t) {
                            console.warn("lightGallery:- make sure lightGallery module is properly initiated")
                        }
                    }))
                }, t.prototype.destroyModules = function(t) {
                    this.plugins.forEach((function(e) {
                        try {
                            t ? e.destroy() : e.closeGallery && e.closeGallery()
                        } catch (t) {
                            console.warn("lightGallery:- make sure lightGallery module is properly destroyed")
                        }
                    }))
                }, t.prototype.refresh = function(t) {
                    this.settings.dynamic || this.invalidateItems(), this.galleryItems = t || this.getItems(), this.updateControls(), this.openGalleryOnItemClick(), this.LGel.trigger(C)
                }, t.prototype.updateControls = function() {
                    this.addSlideVideoInfo(this.galleryItems), this.updateCounterTotal(), this.manageSingleSlideClassName()
                }, t.prototype.destroyGallery = function() {
                    this.destroyModules(!0), this.settings.dynamic || this.invalidateItems(), O(window).off(".lg.global" + this.lgId), this.LGel.off(".lg"), this.$container.remove()
                }, t.prototype.destroy = function() {
                    var t = this.closeGallery(!0);
                    return t ? setTimeout(this.destroyGallery.bind(this), t) : this.destroyGallery(), t
                }, t
            }();
        var M = function() {
                return M = Object.assign || function(t) {
                    for (var e, i = 1, s = arguments.length; i < s; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, M.apply(this, arguments)
            },
            G = {
                fullScreen: !0,
                fullscreenPluginStrings: {
                    toggleFullscreen: "Toggle Fullscreen"
                }
            },
            V = function() {
                function t(t, e) {
                    return this.core = t, this.$LG = e, this.settings = M(M({}, G), this.core.settings), this
                }
                return t.prototype.init = function() {
                    var t = "";
                    if (this.settings.fullScreen) {
                        if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                        t = '<button type="button" aria-label="' + this.settings.fullscreenPluginStrings.toggleFullscreen + '" class="lg-fullscreen lg-icon"></button>', this.core.$toolbar.append(t), this.fullScreen()
                    }
                }, t.prototype.isFullScreen = function() {
                    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
                }, t.prototype.requestFullscreen = function() {
                    var t = document.documentElement;
                    t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
                }, t.prototype.exitFullscreen = function() {
                    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                }, t.prototype.fullScreen = function() {
                    var t = this;
                    this.$LG(document).on("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId, (function() {
                        t.core.lgOpened && t.core.outer.toggleClass("lg-fullscreen-on")
                    })), this.core.outer.find(".lg-fullscreen").first().on("click.lg", (function() {
                        t.isFullScreen() ? t.exitFullscreen() : t.requestFullscreen()
                    }))
                }, t.prototype.closeGallery = function() {
                    this.isFullScreen() && this.exitFullscreen()
                }, t.prototype.destroy = function() {
                    this.$LG(document).off("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId)
                }, t
            }();
        const Y = V;
        var X = function() {
                return X = Object.assign || function(t) {
                    for (var e, i = 1, s = arguments.length; i < s; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, X.apply(this, arguments)
            },
            H = {
                autoplayFirstVideo: !0,
                youTubePlayerParams: !1,
                vimeoPlayerParams: !1,
                wistiaPlayerParams: !1,
                gotoNextSlideOnVideoEnd: !0,
                autoplayVideoOnSlide: !1,
                videojs: !1,
                videojsTheme: "",
                videojsOptions: {}
            },
            R = function(t) {
                return Object.keys(t).map((function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                })).join("&")
            };
        const N = function() {
            function t(t) {
                return this.core = t, this.settings = X(X({}, H), this.core.settings), this
            }
            return t.prototype.init = function() {
                var t = this;
                this.core.LGel.on("lgHasVideo.video", this.onHasVideo.bind(this)), this.core.LGel.on("lgPosterClick.video", (function() {
                    var e = t.core.getSlideItem(t.core.index);
                    t.loadVideoOnPosterClick(e)
                })), this.core.LGel.on("lgSlideItemLoad.video", this.onSlideItemLoad.bind(this)), this.core.LGel.on("lgBeforeSlide.video", this.onBeforeSlide.bind(this)), this.core.LGel.on("lgAfterSlide.video", this.onAfterSlide.bind(this))
            }, t.prototype.onSlideItemLoad = function(t) {
                var e = this,
                    i = t.detail,
                    s = i.isFirstSlide,
                    o = i.index;
                this.settings.autoplayFirstVideo && s && o === this.core.index && setTimeout((function() {
                    e.loadAndPlayVideo(o)
                }), 200), !s && this.settings.autoplayVideoOnSlide && o === this.core.index && this.loadAndPlayVideo(o)
            }, t.prototype.onHasVideo = function(t) {
                var e = t.detail,
                    i = e.index,
                    s = e.src,
                    o = e.html5Video;
                e.hasPoster || (this.appendVideos(this.core.getSlideItem(i), {
                    src: s,
                    addClass: "lg-object",
                    index: i,
                    html5Video: o
                }), this.gotoNextSlideOnVideoEnd(s, i))
            }, t.prototype.onBeforeSlide = function(t) {
                if (this.core.lGalleryOn) {
                    var e = t.detail.prevIndex;
                    this.pauseVideo(e)
                }
            }, t.prototype.onAfterSlide = function(t) {
                var e = this,
                    i = t.detail,
                    s = i.index,
                    o = i.prevIndex,
                    n = this.core.getSlideItem(s);
                this.settings.autoplayVideoOnSlide && s !== o && n.hasClass("lg-complete") && setTimeout((function() {
                    e.loadAndPlayVideo(s)
                }), 100)
            }, t.prototype.loadAndPlayVideo = function(t) {
                var e = this.core.getSlideItem(t);
                this.core.galleryItems[t].poster ? this.loadVideoOnPosterClick(e, !0) : this.playVideo(t)
            }, t.prototype.playVideo = function(t) {
                this.controlVideo(t, "play")
            }, t.prototype.pauseVideo = function(t) {
                this.controlVideo(t, "pause")
            }, t.prototype.getVideoHtml = function(t, e, i, s) {
                var o = "",
                    n = this.core.galleryItems[i].__slideVideoInfo || {},
                    r = this.core.galleryItems[i],
                    l = r.title || r.alt;
                l = l ? 'title="' + l + '"' : "";
                var a = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
                if (n.youtube) {
                    var c = "lg-youtube" + i,
                        d = function(t, e) {
                            if (!t.youtube) return "";
                            var i = t.youtube[2] ? t.youtube[2].slice(1).split("&").map((function(t) {
                                    return t.split("=")
                                })).reduce((function(t, e) {
                                    var i = e.map(decodeURIComponent),
                                        s = i[0],
                                        o = i[1];
                                    return t[s] = o, t
                                }), {}) : "",
                                s = e || {},
                                o = X(X(X({}, {
                                    wmode: "opaque",
                                    autoplay: 0,
                                    mute: 1,
                                    enablejsapi: 1
                                }), s), i);
                            return "?" + R(o)
                        }(n, this.settings.youTubePlayerParams);
                    o = '<iframe allow="autoplay" id=' + c + ' class="lg-video-object lg-youtube ' + e + '" ' + l + ' src="' + (t.includes("youtube-nocookie.com") ? "//www.youtube-nocookie.com/" : "//www.youtube.com/") + "embed/" + (n.youtube[1] + d) + '" ' + a + "></iframe>"
                } else if (n.vimeo) {
                    c = "lg-vimeo" + i;
                    var h = function(t, e) {
                        if (!e || !e.vimeo) return "";
                        var i = e.vimeo[2] || "",
                            s = Object.assign({}, {
                                autoplay: 0,
                                muted: 1
                            }, t),
                            o = s && 0 !== Object.keys(s).length ? R(s) : "",
                            n = ((e.vimeo[0].split("/").pop() || "").split("?")[0] || "").split("#")[0],
                            r = e.vimeo[1] !== n;
                        r && (i = i.replace("/" + n, ""));
                        var l = r ? "h=" + n : "";
                        return "?" + l + (o = l ? "&" + o : o) + ("?" == i[0] ? "&" + i.slice(1) : i || "")
                    }(this.settings.vimeoPlayerParams, n);
                    o = '<iframe allow="autoplay" id=' + c + ' class="lg-video-object lg-vimeo ' + e + '" ' + l + ' src="//player.vimeo.com/video/' + (n.vimeo[1] + h) + '" ' + a + "></iframe>"
                } else if (n.wistia) {
                    var g = "lg-wistia" + i;
                    h = (h = R(this.settings.wistiaPlayerParams)) ? "?" + h : "", o = '<iframe allow="autoplay" id="' + g + '" src="//fast.wistia.net/embed/iframe/' + (n.wistia[4] + h) + '" ' + l + ' class="wistia_embed lg-video-object lg-wistia ' + e + '" name="wistia_embed" ' + a + "></iframe>"
                } else if (n.html5) {
                    for (var u = "", m = 0; m < s.source.length; m++) {
                        var p = s.source[m].type,
                            f = p ? 'type="' + p + '"' : "";
                        u += '<source src="' + s.source[m].src + '" ' + f + ">"
                    }
                    if (s.tracks) {
                        var v = function(t) {
                            var e = "",
                                i = s.tracks[t];
                            Object.keys(i || {}).forEach((function(t) {
                                e += t + '="' + i[t] + '" '
                            })), u += "<track " + e + ">"
                        };
                        for (m = 0; m < s.tracks.length; m++) v(m)
                    }
                    var y = "",
                        b = s.attributes || {};
                    Object.keys(b || {}).forEach((function(t) {
                        y += t + '="' + b[t] + '" '
                    })), o = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + " " : "") + " " + (this.settings.videojs ? " video-js" : "") + '" ' + y + ">\n                " + u + "\n                Your browser does not support HTML5 video.\n            </video>"
                }
                return o
            }, t.prototype.appendVideos = function(t, e) {
                var i, s = this.getVideoHtml(e.src, e.addClass, e.index, e.html5Video);
                t.find(".lg-video-cont").append(s);
                var o = t.find(".lg-video-object").first();
                if (e.html5Video && o.on("mousedown.lg.video", (function(t) {
                        t.stopPropagation()
                    })), this.settings.videojs && (null === (i = this.core.galleryItems[e.index].__slideVideoInfo) || void 0 === i ? void 0 : i.html5)) try {
                    return videojs(o.get(), this.settings.videojsOptions)
                } catch (t) {
                    console.error("lightGallery:- Make sure you have included videojs")
                }
            }, t.prototype.gotoNextSlideOnVideoEnd = function(t, e) {
                var i = this,
                    s = this.core.getSlideItem(e).find(".lg-video-object").first(),
                    o = this.core.galleryItems[e].__slideVideoInfo || {};
                if (this.settings.gotoNextSlideOnVideoEnd)
                    if (o.html5) s.on("ended", (function() {
                        i.core.goToNextSlide()
                    }));
                    else if (o.vimeo) try {
                    new Vimeo.Player(s.get()).on("ended", (function() {
                        i.core.goToNextSlide()
                    }))
                } catch (t) {
                    console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")
                } else if (o.wistia) try {
                    window._wq = window._wq || [], window._wq.push({
                        id: s.attr("id"),
                        onReady: function(t) {
                            t.bind("end", (function() {
                                i.core.goToNextSlide()
                            }))
                        }
                    })
                } catch (t) {
                    console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")
                }
            }, t.prototype.controlVideo = function(t, e) {
                var i = this.core.getSlideItem(t).find(".lg-video-object").first(),
                    s = this.core.galleryItems[t].__slideVideoInfo || {};
                if (i.get())
                    if (s.youtube) try {
                        i.get().contentWindow.postMessage('{"event":"command","func":"' + e + 'Video","args":""}', "*")
                    } catch (t) {
                        console.error("lightGallery:- " + t)
                    } else if (s.vimeo) try {
                        new Vimeo.Player(i.get())[e]()
                    } catch (t) {
                        console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")
                    } else if (s.html5)
                        if (this.settings.videojs) try {
                            videojs(i.get())[e]()
                        } catch (t) {
                            console.error("lightGallery:- Make sure you have included videojs")
                        } else i.get()[e]();
                        else if (s.wistia) try {
                    window._wq = window._wq || [], window._wq.push({
                        id: i.attr("id"),
                        onReady: function(t) {
                            t[e]()
                        }
                    })
                } catch (t) {
                    console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")
                }
            }, t.prototype.loadVideoOnPosterClick = function(t, e) {
                var i = this;
                if (t.hasClass("lg-video-loaded")) e && this.playVideo(this.core.index);
                else if (t.hasClass("lg-has-video")) this.playVideo(this.core.index);
                else {
                    t.addClass("lg-has-video");
                    var s = void 0,
                        o = this.core.galleryItems[this.core.index].src,
                        n = this.core.galleryItems[this.core.index].video;
                    n && (s = "string" == typeof n ? JSON.parse(n) : n);
                    var r = this.appendVideos(t, {
                        src: o,
                        addClass: "",
                        index: this.core.index,
                        html5Video: s
                    });
                    this.gotoNextSlideOnVideoEnd(o, this.core.index);
                    var l = t.find(".lg-object").first().get();
                    t.find(".lg-video-cont").first().append(l), t.addClass("lg-video-loading"), r && r.ready((function() {
                        r.on("loadedmetadata", (function() {
                            i.onVideoLoadAfterPosterClick(t, i.core.index)
                        }))
                    })), t.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", (function() {
                        setTimeout((function() {
                            i.onVideoLoadAfterPosterClick(t, i.core.index)
                        }), 50)
                    }))
                }
            }, t.prototype.onVideoLoadAfterPosterClick = function(t, e) {
                t.addClass("lg-video-loaded"), this.playVideo(e)
            }, t.prototype.destroy = function() {
                this.core.LGel.off(".lg.video"), this.core.LGel.off(".video")
            }, t
        }();
        var Z = function() {
                return Z = Object.assign || function(t) {
                    for (var e, i = 1, s = arguments.length; i < s; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, Z.apply(this, arguments)
            },
            q = {
                scale: 1,
                zoom: !0,
                infiniteZoom: !0,
                actualSize: !0,
                showZoomInOutIcons: !1,
                actualSizeIcons: {
                    zoomIn: "lg-zoom-in",
                    zoomOut: "lg-zoom-out"
                },
                enableZoomAfter: 300,
                zoomPluginStrings: {
                    zoomIn: "Zoom in",
                    zoomOut: "Zoom out",
                    viewActualSize: "View actual size"
                }
            },
            W = function() {
                function t(t, e) {
                    return this.core = t, this.$LG = e, this.settings = Z(Z({}, q), this.core.settings), this
                }
                return t.prototype.buildTemplates = function() {
                    var t = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomIn + '" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomOut + '" class="lg-zoom-out lg-icon"></button>' : "";
                    this.settings.actualSize && (t += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.viewActualSize + '" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>'), this.core.outer.addClass("lg-use-transition-for-zoom"), this.core.$toolbar.first().append(t)
                }, t.prototype.enableZoom = function(t) {
                    var e = this,
                        i = this.settings.enableZoomAfter + t.detail.delay;
                    this.$LG("body").first().hasClass("lg-from-hash") && t.detail.delay ? i = 0 : this.$LG("body").first().removeClass("lg-from-hash"), this.zoomableTimeout = setTimeout((function() {
                        e.isImageSlide(e.core.index) && (e.core.getSlideItem(t.detail.index).addClass("lg-zoomable"), t.detail.index === e.core.index && e.setZoomEssentials())
                    }), i + 30)
                }, t.prototype.enableZoomOnSlideItemLoad = function() {
                    this.core.LGel.on("lgSlideItemLoad.zoom", this.enableZoom.bind(this))
                }, t.prototype.getDragCords = function(t) {
                    return {
                        x: t.pageX,
                        y: t.pageY
                    }
                }, t.prototype.getSwipeCords = function(t) {
                    return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    }
                }, t.prototype.getDragAllowedAxises = function(t, e) {
                    if (!this.containerRect) return {
                        allowX: !1,
                        allowY: !1
                    };
                    var i = this.core.getSlideItem(this.core.index).find(".lg-image").first().get(),
                        s = 0,
                        o = 0,
                        n = i.getBoundingClientRect();
                    t ? (s = i.offsetHeight * t, o = i.offsetWidth * t) : e ? (s = n.height + e * n.height, o = n.width + e * n.width) : (s = n.height, o = n.width);
                    var r = s > this.containerRect.height;
                    return {
                        allowX: o > this.containerRect.width,
                        allowY: r
                    }
                }, t.prototype.setZoomEssentials = function() {
                    this.containerRect = this.core.$content.get().getBoundingClientRect()
                }, t.prototype.zoomImage = function(t, e, i, s) {
                    if (!(Math.abs(e) <= 0)) {
                        var o, n, r = this.containerRect.width / 2 + this.containerRect.left,
                            l = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop;
                        1 === t && (this.positionChanged = !1);
                        var a = this.getDragAllowedAxises(0, e),
                            c = a.allowY,
                            d = a.allowX;
                        this.positionChanged && (o = this.left / (this.scale - e), n = this.top / (this.scale - e), this.pageX = r - o, this.pageY = l - n, this.positionChanged = !1);
                        var h, g, u = this.getPossibleSwipeDragCords(e),
                            _x = r - this.pageX,
                            m = l - this.pageY;
                        if (t - e > 1) {
                            var p = (t - e) / Math.abs(e);
                            h = (_x = (e < 0 ? -_x : _x) + this.left * (p + (e < 0 ? -1 : 1))) / p, g = (m = (e < 0 ? -m : m) + this.top * (p + (e < 0 ? -1 : 1))) / p
                        } else h = _x * (p = (t - e) * e), g = m * p;
                        i && (d ? this.isBeyondPossibleLeft(h, u.minX) ? h = u.minX : this.isBeyondPossibleRight(h, u.maxX) && (h = u.maxX) : t > 1 && (h < u.minX ? h = u.minX : h > u.maxX && (h = u.maxX)), c ? this.isBeyondPossibleTop(g, u.minY) ? g = u.minY : this.isBeyondPossibleBottom(g, u.maxY) && (g = u.maxY) : t > 1 && (g < u.minY ? g = u.minY : g > u.maxY && (g = u.maxY))), this.setZoomStyles({
                            x: h,
                            y: g,
                            scale: t
                        }), this.left = h, this.top = g, s && this.setZoomImageSize()
                    }
                }, t.prototype.resetImageTranslate = function(t) {
                    if (this.isImageSlide(t)) {
                        var e = this.core.getSlideItem(t).find(".lg-image").first();
                        this.imageReset = !1, e.removeClass("reset-transition reset-transition-y reset-transition-x"), this.core.outer.removeClass("lg-actual-size"), e.css("width", "auto").css("height", "auto"), setTimeout((function() {
                            e.removeClass("no-transition")
                        }), 10)
                    }
                }, t.prototype.setZoomImageSize = function() {
                    var t = this,
                        e = this.core.getSlideItem(this.core.index).find(".lg-image").first();
                    setTimeout((function() {
                        var i = t.getCurrentImageActualSizeScale();
                        t.scale >= i && (e.addClass("no-transition"), t.imageReset = !0)
                    }), 500), setTimeout((function() {
                        var i = t.getCurrentImageActualSizeScale();
                        if (t.scale >= i) {
                            var s = t.getDragAllowedAxises(t.scale);
                            e.css("width", e.get().naturalWidth + "px").css("height", e.get().naturalHeight + "px"), t.core.outer.addClass("lg-actual-size"), s.allowX && s.allowY ? e.addClass("reset-transition") : s.allowX && !s.allowY ? e.addClass("reset-transition-x") : !s.allowX && s.allowY && e.addClass("reset-transition-y")
                        }
                    }), 550)
                }, t.prototype.setZoomStyles = function(t) {
                    var e = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),
                        i = this.core.getSlideItem(this.core.index).find(".lg-image").first(),
                        s = this.core.outer.find(".lg-current .lg-dummy-img").first();
                    this.scale = t.scale, i.css("transform", "scale3d(" + t.scale + ", " + t.scale + ", 1)"), s.css("transform", "scale3d(" + t.scale + ", " + t.scale + ", 1)");
                    var o = "translate3d(" + t.x + "px, " + t.y + "px, 0)";
                    e.css("transform", o)
                }, t.prototype.setActualSize = function(t, e) {
                    var i = this;
                    if (!this.zoomInProgress) {
                        this.zoomInProgress = !0;
                        var s = this.core.galleryItems[this.core.index];
                        this.resetImageTranslate(t), setTimeout((function() {
                            if (s.src && !i.core.outer.hasClass("lg-first-slide-loading")) {
                                var t = i.getCurrentImageActualSizeScale(),
                                    o = i.scale;
                                i.core.outer.hasClass("lg-zoomed") ? i.scale = 1 : i.scale = i.getScale(t), i.setPageCords(e), i.beginZoom(i.scale), i.zoomImage(i.scale, i.scale - o, !0, !0)
                            }
                        }), 50), setTimeout((function() {
                            i.core.outer.removeClass("lg-grabbing").addClass("lg-grab")
                        }), 60), setTimeout((function() {
                            i.zoomInProgress = !1
                        }), 610)
                    }
                }, t.prototype.getNaturalWidth = function(t) {
                    var e = this.core.getSlideItem(t).find(".lg-image").first(),
                        i = this.core.galleryItems[t].width;
                    return i ? parseFloat(i) : e.get().naturalWidth
                }, t.prototype.getActualSizeScale = function(t, e) {
                    return t >= e ? t / e || 2 : 1
                }, t.prototype.getCurrentImageActualSizeScale = function() {
                    var t = this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,
                        e = this.getNaturalWidth(this.core.index) || t;
                    return this.getActualSizeScale(e, t)
                }, t.prototype.getPageCords = function(t) {
                    var e = {};
                    if (t) e.x = t.pageX || t.touches[0].pageX, e.y = t.pageY || t.touches[0].pageY;
                    else {
                        var i = this.core.$content.get().getBoundingClientRect();
                        e.x = i.width / 2 + i.left, e.y = i.height / 2 + this.scrollTop + i.top
                    }
                    return e
                }, t.prototype.setPageCords = function(t) {
                    var e = this.getPageCords(t);
                    this.pageX = e.x, this.pageY = e.y
                }, t.prototype.manageActualPixelClassNames = function() {
                    this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)
                }, t.prototype.beginZoom = function(t) {
                    return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), t > 1 ? (this.core.outer.addClass("lg-zoomed"), this.manageActualPixelClassNames()) : this.resetZoom(), t > 1
                }, t.prototype.getScale = function(t) {
                    var e = this.getCurrentImageActualSizeScale();
                    return t < 1 ? t = 1 : t > e && (t = e), t
                }, t.prototype.init = function() {
                    var t = this;
                    if (this.settings.zoom) {
                        this.buildTemplates(), this.enableZoomOnSlideItemLoad();
                        var e = null;
                        this.core.outer.on("dblclick.lg", (function(e) {
                            t.$LG(e.target).hasClass("lg-image") && t.setActualSize(t.core.index, e)
                        })), this.core.outer.on("touchstart.lg", (function(i) {
                            var s = t.$LG(i.target);
                            1 === i.touches.length && s.hasClass("lg-image") && (e ? (clearTimeout(e), e = null, i.preventDefault(), t.setActualSize(t.core.index, i)) : e = setTimeout((function() {
                                e = null
                            }), 300))
                        })), this.core.LGel.on("lgContainerResize.zoom lgRotateRight.zoom lgRotateLeft.zoom lgFlipHorizontal.zoom lgFlipVertical.zoom", (function() {
                            if (t.core.lgOpened && t.isImageSlide(t.core.index) && !t.core.touchAction) {
                                var e = t.core.getSlideItem(t.core.index).find(".lg-img-wrap").first();
                                t.top = 0, t.left = 0, t.setZoomEssentials(), t.setZoomSwipeStyles(e, {
                                    x: 0,
                                    y: 0
                                }), t.positionChanged = !0
                            }
                        })), this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, (function() {
                            t.core.lgOpened && (t.scrollTop = t.$LG(window).scrollTop())
                        })), this.core.getElementById("lg-zoom-out").on("click.lg", (function() {
                            if (t.isImageSlide(t.core.index)) {
                                var e = 0;
                                t.imageReset && (t.resetImageTranslate(t.core.index), e = 50), setTimeout((function() {
                                    var e = t.scale - t.settings.scale;
                                    e < 1 && (e = 1), t.beginZoom(e), t.zoomImage(e, -t.settings.scale, !0, !t.settings.infiniteZoom)
                                }), e)
                            }
                        })), this.core.getElementById("lg-zoom-in").on("click.lg", (function() {
                            t.zoomIn()
                        })), this.core.getElementById("lg-actual-size").on("click.lg", (function() {
                            t.setActualSize(t.core.index)
                        })), this.core.LGel.on("lgBeforeOpen.zoom", (function() {
                            t.core.outer.find(".lg-item").removeClass("lg-zoomable")
                        })), this.core.LGel.on("lgAfterOpen.zoom", (function() {
                            t.scrollTop = t.$LG(window).scrollTop(), t.pageX = t.core.outer.width() / 2, t.pageY = t.core.outer.height() / 2 + t.scrollTop, t.scale = 1
                        })), this.core.LGel.on("lgAfterSlide.zoom", (function(e) {
                            var i = e.detail.prevIndex;
                            t.scale = 1, t.positionChanged = !1, t.zoomInProgress = !1, t.resetZoom(i), t.resetImageTranslate(i), t.isImageSlide(t.core.index) && t.setZoomEssentials()
                        })), this.zoomDrag(), this.pinchZoom(), this.zoomSwipe(), this.zoomableTimeout = !1, this.positionChanged = !1, this.zoomInProgress = !1
                    }
                }, t.prototype.zoomIn = function() {
                    if (this.isImageSlide(this.core.index)) {
                        var t = this.scale + this.settings.scale;
                        this.settings.infiniteZoom || (t = this.getScale(t)), this.beginZoom(t), this.zoomImage(t, Math.min(this.settings.scale, t - this.scale), !0, !this.settings.infiniteZoom)
                    }
                }, t.prototype.resetZoom = function(t) {
                    this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
                    var e = this.core.getElementById("lg-actual-size"),
                        i = this.core.getSlideItem(void 0 !== t ? t : this.core.index);
                    e.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn), i.find(".lg-img-wrap").first().removeAttr("style"), i.find(".lg-image").first().removeAttr("style"), this.scale = 1, this.left = 0, this.top = 0, this.setPageCords()
                }, t.prototype.getTouchDistance = function(t) {
                    return Math.sqrt((t.touches[0].pageX - t.touches[1].pageX) * (t.touches[0].pageX - t.touches[1].pageX) + (t.touches[0].pageY - t.touches[1].pageY) * (t.touches[0].pageY - t.touches[1].pageY))
                }, t.prototype.pinchZoom = function() {
                    var t = this,
                        e = 0,
                        i = !1,
                        s = 1,
                        o = 0,
                        n = this.core.getSlideItem(this.core.index);
                    this.core.outer.on("touchstart.lg", (function(i) {
                        if (n = t.core.getSlideItem(t.core.index), t.isImageSlide(t.core.index) && 2 === i.touches.length) {
                            if (i.preventDefault(), t.core.outer.hasClass("lg-first-slide-loading")) return;
                            s = t.scale || 1, t.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), t.setPageCords(i), t.resetImageTranslate(t.core.index), t.core.touchAction = "pinch", e = t.getTouchDistance(i)
                        }
                    })), this.core.$inner.on("touchmove.lg", (function(r) {
                        if (2 === r.touches.length && "pinch" === t.core.touchAction && (t.$LG(r.target).hasClass("lg-item") || n.get().contains(r.target))) {
                            r.preventDefault();
                            var l = t.getTouchDistance(r),
                                a = e - l;
                            if (!i && Math.abs(a) > 5 && (i = !0), i) {
                                o = t.scale;
                                var c = Math.max(1, s + .02 * -a);
                                t.scale = Math.round(100 * (c + Number.EPSILON)) / 100;
                                var d = t.scale - o;
                                t.zoomImage(t.scale, Math.round(100 * (d + Number.EPSILON)) / 100, !1, !1)
                            }
                        }
                    })), this.core.$inner.on("touchend.lg", (function(s) {
                        if ("pinch" === t.core.touchAction && (t.$LG(s.target).hasClass("lg-item") || n.get().contains(s.target))) {
                            if (i = !1, e = 0, t.scale <= 1) t.resetZoom();
                            else {
                                var o = t.getCurrentImageActualSizeScale();
                                if (t.scale >= o) {
                                    var r = o - t.scale;
                                    0 === r && (r = .01), t.zoomImage(o, r, !1, !0)
                                }
                                t.manageActualPixelClassNames(), t.core.outer.addClass("lg-zoomed")
                            }
                            t.core.touchAction = void 0
                        }
                    }))
                }, t.prototype.touchendZoom = function(t, e, i, s, o) {
                    var n = e.x - t.x,
                        r = e.y - t.y,
                        l = Math.abs(n) / o + 1,
                        a = Math.abs(r) / o + 1;
                    l > 2 && (l += 1), a > 2 && (a += 1), n *= l, r *= a;
                    var c = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),
                        d = {};
                    d.x = this.left + n, d.y = this.top + r;
                    var h = this.getPossibleSwipeDragCords();
                    (Math.abs(n) > 15 || Math.abs(r) > 15) && (s && (this.isBeyondPossibleTop(d.y, h.minY) ? d.y = h.minY : this.isBeyondPossibleBottom(d.y, h.maxY) && (d.y = h.maxY)), i && (this.isBeyondPossibleLeft(d.x, h.minX) ? d.x = h.minX : this.isBeyondPossibleRight(d.x, h.maxX) && (d.x = h.maxX)), s ? this.top = d.y : d.y = this.top, i ? this.left = d.x : d.x = this.left, this.setZoomSwipeStyles(c, d), this.positionChanged = !0)
                }, t.prototype.getZoomSwipeCords = function(t, e, i, s, o) {
                    var n = {};
                    if (s) {
                        if (n.y = this.top + (e.y - t.y), this.isBeyondPossibleTop(n.y, o.minY)) {
                            var r = o.minY - n.y;
                            n.y = o.minY - r / 6
                        } else if (this.isBeyondPossibleBottom(n.y, o.maxY)) {
                            var l = n.y - o.maxY;
                            n.y = o.maxY + l / 6
                        }
                    } else n.y = this.top;
                    if (i) {
                        if (n.x = this.left + (e.x - t.x), this.isBeyondPossibleLeft(n.x, o.minX)) {
                            var a = o.minX - n.x;
                            n.x = o.minX - a / 6
                        } else if (this.isBeyondPossibleRight(n.x, o.maxX)) {
                            var c = n.x - o.maxX;
                            n.x = o.maxX + c / 6
                        }
                    } else n.x = this.left;
                    return n
                }, t.prototype.isBeyondPossibleLeft = function(t, e) {
                    return t >= e
                }, t.prototype.isBeyondPossibleRight = function(t, e) {
                    return t <= e
                }, t.prototype.isBeyondPossibleTop = function(t, e) {
                    return t >= e
                }, t.prototype.isBeyondPossibleBottom = function(t, e) {
                    return t <= e
                }, t.prototype.isImageSlide = function(t) {
                    var e = this.core.galleryItems[t];
                    return "image" === this.core.getSlideType(e)
                }, t.prototype.getPossibleSwipeDragCords = function(t) {
                    var e = this.core.getSlideItem(this.core.index).find(".lg-image").first(),
                        i = this.core.mediaContainerPosition.bottom,
                        s = e.get().getBoundingClientRect(),
                        o = s.height,
                        n = s.width;
                    return t && (o += t * o, n += t * n), {
                        minY: (o - this.containerRect.height) / 2,
                        maxY: (this.containerRect.height - o) / 2 + i,
                        minX: (n - this.containerRect.width) / 2,
                        maxX: (this.containerRect.width - n) / 2
                    }
                }, t.prototype.setZoomSwipeStyles = function(t, e) {
                    t.css("transform", "translate3d(" + e.x + "px, " + e.y + "px, 0)")
                }, t.prototype.zoomSwipe = function() {
                    var t, e, i = this,
                        s = {},
                        o = {},
                        n = !1,
                        r = !1,
                        l = !1,
                        a = new Date,
                        c = (new Date, this.core.getSlideItem(this.core.index));
                    this.core.$inner.on("touchstart.lg", (function(o) {
                        if (i.isImageSlide(i.core.index) && (c = i.core.getSlideItem(i.core.index), (i.$LG(o.target).hasClass("lg-item") || c.get().contains(o.target)) && 1 === o.touches.length && i.core.outer.hasClass("lg-zoomed"))) {
                            o.preventDefault(), a = new Date, i.core.touchAction = "zoomSwipe", e = i.core.getSlideItem(i.core.index).find(".lg-img-wrap").first();
                            var n = i.getDragAllowedAxises(0);
                            l = n.allowY, ((r = n.allowX) || l) && (s = i.getSwipeCords(o)), t = i.getPossibleSwipeDragCords(), i.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")
                        }
                    })), this.core.$inner.on("touchmove.lg", (function(a) {
                        if (1 === a.touches.length && "zoomSwipe" === i.core.touchAction && (i.$LG(a.target).hasClass("lg-item") || c.get().contains(a.target))) {
                            a.preventDefault(), i.core.touchAction = "zoomSwipe", o = i.getSwipeCords(a);
                            var d = i.getZoomSwipeCords(s, o, r, l, t);
                            (Math.abs(o.x - s.x) > 15 || Math.abs(o.y - s.y) > 15) && (n = !0, i.setZoomSwipeStyles(e, d))
                        }
                    })), this.core.$inner.on("touchend.lg", (function(t) {
                        if ("zoomSwipe" === i.core.touchAction && (i.$LG(t.target).hasClass("lg-item") || c.get().contains(t.target))) {
                            if (t.preventDefault(), i.core.touchAction = void 0, i.core.outer.removeClass("lg-zoom-dragging"), !n) return;
                            n = !1;
                            var e = (new Date).valueOf() - a.valueOf();
                            i.touchendZoom(s, o, r, l, e)
                        }
                    }))
                }, t.prototype.zoomDrag = function() {
                    var t, e, i, s, o = this,
                        n = {},
                        r = {},
                        l = !1,
                        a = !1,
                        c = !1,
                        d = !1;
                    this.core.outer.on("mousedown.lg.zoom", (function(e) {
                        if (o.isImageSlide(o.core.index)) {
                            var r = o.core.getSlideItem(o.core.index);
                            if (o.$LG(e.target).hasClass("lg-item") || r.get().contains(e.target)) {
                                t = new Date, s = o.core.getSlideItem(o.core.index).find(".lg-img-wrap").first();
                                var a = o.getDragAllowedAxises(0);
                                d = a.allowY, c = a.allowX, o.core.outer.hasClass("lg-zoomed") && o.$LG(e.target).hasClass("lg-object") && (c || d) && (e.preventDefault(), n = o.getDragCords(e), i = o.getPossibleSwipeDragCords(), l = !0, o.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))
                            }
                        }
                    })), this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, (function(t) {
                        if (l) {
                            a = !0, r = o.getDragCords(t);
                            var e = o.getZoomSwipeCords(n, r, c, d, i);
                            o.setZoomSwipeStyles(s, e)
                        }
                    })), this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, (function(i) {
                        if (l) {
                            if (e = new Date, l = !1, o.core.outer.removeClass("lg-zoom-dragging"), a && (n.x !== r.x || n.y !== r.y)) {
                                r = o.getDragCords(i);
                                var s = e.valueOf() - t.valueOf();
                                o.touchendZoom(n, r, c, d, s)
                            }
                            a = !1
                        }
                        o.core.outer.removeClass("lg-grabbing").addClass("lg-grab")
                    }))
                }, t.prototype.closeGallery = function() {
                    this.resetZoom(), this.zoomInProgress = !1
                }, t.prototype.destroy = function() {
                    this.$LG(window).off(".lg.zoom.global" + this.core.lgId), this.core.LGel.off(".lg.zoom"), this.core.LGel.off(".zoom"), clearTimeout(this.zoomableTimeout), this.zoomableTimeout = !1
                }, t
            }();
        const U = W;
        class K {
            instance = null;
            isVideoLightbox = !1;
            isIframe = !1;
            isImageGallery = !1;
            constructor(t) {
                this.group = t, this.group ? (this.isImageGallery = this.group.classList.contains("nectar-blocks-image-grid__grid"), this.createSettings(), this.init()) : console.warn("Invalid Lightbox Group.")
            }
            isWebPage = t => /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/.test(t) && !/(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.webp|\.svg|\.mp4|\.webm|\.ogv|\.mov|\.avi|\.avif|\.mp3|\.wav)$/i.test(t);
            createSettings() {
                const t = this.group.querySelectorAll("a:not(.nectar-skip-lightbox)");
                t && t.forEach((t => {
                    t.href.includes("youtube") || t.href.includes("youtu.be") || t.href.includes("vimeo") ? this.isVideoLightbox = !0 : this.isWebPage(t.href) && (t.setAttribute("data-iframe", "true"), this.isIframe = !0)
                }));
                const e = {
                    controls: !0,
                    getCaptionFromTitleOrAlt: !1
                };
                this.group.classList.contains("nectar-blocks-video-lightbox") || this.isVideoLightbox ? (e.plugins = [N, Y], e.videoMaxSize = "1920-1080", e.youTubePlayerParams = {
                    mute: 0
                }, e.vimeoPlayerParams = {
                    autoplay: 1,
                    muted: !1
                }) : this.isIframe && !this.isImageGallery ? e.plugins = [Y] : e.plugins = [U, Y], 1 === this.group.querySelectorAll("a").length && (e.counter = !1), this.settings = {
                    licenseKey: "0381EA3C-AECD-4BD9-BFC5-D508B92EEFB3",
                    speed: 500,
                    download: !1,
                    selector: "a:not(.nectar-skip-lightbox)",
                    ...e
                }
            }
            init() {
                var t, e;
                this.instance = (t = this.group, e = this.settings, new $(t, e))
            }
        }
        class J {
            mode = "frontend";
            lerpAmount = .11;
            enabled = !1;
            effect = "hidden-until-hover";
            constructor(t) {
                this.element = t;
                const e = t.getAttribute("data-nectar-mouse-attract"),
                    i = t.getAttribute("data-nectar-mouse-attract-type");
                e && i ? (this.container = t.closest(e), this.activeEffect = !1, this.effect = i, this.positionData = {
                    elX: 0,
                    elY: 0,
                    lerpX: 0,
                    lerpY: 0,
                    mouseX: 0,
                    mouseY: 0,
                    parentCenterX: 0,
                    parentCenterY: 0,
                    useScrollOffset: !1,
                    startingScrollY: 0,
                    scrollYOffset: 0
                }, this.init()) : console.log("Error: no parent selector found for mouse attract element.")
            }
            init() {
                window.addEventListener("nectar-blocks-changed-device", this.init.bind(this)), this.shouldActivateOnDevice() && !this.enabled && (this.calculatePosition(), this.events(), this.raf(), this.setStartingPosition(), this.enabled = !0)
            }
            shouldActivateOnDevice() {
                var t;
                const e = null !== (t = window ? .nectarBlocksFrontend ? .device) && void 0 !== t ? t : "";
                return !(!e || e && "desktop" !== e)
            }
            events() {
                this.container.addEventListener("mouseenter", this.activateEffect.bind(this)), this.container.addEventListener("mouseleave", this.deactivateEffect.bind(this)), this.container.addEventListener("mousemove", this.updateMousePosition.bind(this)), window.addEventListener("scroll", this.updateScrollPosition.bind(this)), window.addEventListener("resize", this.calculatePosition.bind(this))
            }
            setStartingPosition() {
                this.element.style.top = "0", this.element.style.left = "0", this.positionData.lerpX = this.positionData.parentCenterX, this.positionData.lerpY = this.positionData.parentCenterY
            }
            activateEffect(t) {
                "center-resting" === this.effect ? r().fromTo(this, {
                    lerpAmount: .03
                }, {
                    lerpAmount: .11,
                    duration: 1.5
                }) : (this.positionData.lerpX = t.offsetX - this.positionData.elX, this.positionData.lerpY = t.offsetY - this.positionData.elY), this.element.classList.add("mouse-attract-active")
            }
            deactivateEffect() {
                "center-resting" === this.effect ? (r().fromTo(this, {
                    lerpAmount: .11
                }, {
                    lerpAmount: .03,
                    duration: 1
                }), this.activeEffect = !1) : setTimeout((() => {
                    this.activeEffect = !1
                }), 300), this.element.classList.remove("mouse-attract-active")
            }
            updateScrollPosition() {
                this.positionData.useScrollOffset || (this.positionData.startingScrollY = window.scrollY), this.positionData.useScrollOffset = !0
            }
            updateMousePosition(t) {
                this.positionData.mouseX = t.offsetX, this.positionData.mouseY = t.offsetY, this.activeEffect = !0, this.positionData.useScrollOffset = !1
            }
            calculatePosition() {
                const t = this.element.getBoundingClientRect();
                this.positionData.elX = t.width / 2, this.positionData.elY = t.height / 2, this.positionData.parentCenterX = this.container.offsetWidth / 2 - t.width / 2, this.positionData.parentCenterY = this.container.offsetHeight / 2 - t.height / 2
            }
            lerp(t, e, i) {
                return (1 - i) * t + i * e
            }
            raf() {
                const t = this.positionData;
                if (this.activeEffect) {
                    const e = t.mouseX - t.elX,
                        i = t.mouseY - t.elY;
                    t.useScrollOffset ? t.scrollYOffset = window.scrollY - t.startingScrollY : t.scrollYOffset = 0;
                    const s = i + t.scrollYOffset;
                    t.lerpX = this.lerp(t.lerpX, e, this.lerpAmount), t.lerpY = this.lerp(t.lerpY, s, this.lerpAmount);
                    const {
                        lerpX: o,
                        lerpY: n
                    } = t;
                    this.element.style.transform = `translateX(${o}px) translateY(${n}px) translateZ(0)`
                } else if ("center-resting" === this.effect) {
                    t.lerpX = this.lerp(t.lerpX, t.parentCenterX, this.lerpAmount), t.lerpY = this.lerp(t.lerpY, t.parentCenterY, this.lerpAmount);
                    const {
                        lerpX: e,
                        lerpY: i
                    } = t;
                    this.element.style.transform = `translateX(${e}px) translateY(${i}px) translateZ(0)`
                }
                requestAnimationFrame(this.raf.bind(this))
            }
        }
        window.nectarBlocksFrontend = new class {
            initialLoad = !0;
            constructor() {
                this.winWidth = window.innerWidth, this.winHeight = window.innerHeight, this.device = "desktop", this.scrollAnimationInstances = [], this.timelineAnimationInstances = [], this.init()
            }
            init() {
                this.device = this.calculateDevice(), this.events()
            }
            blockAnimations() {
                const i = {
                        rootMargin: "400px 0px 400px 0px",
                        threshold: 0
                    },
                    s = new IntersectionObserver((function(t) {
                        t.forEach((function(t) {
                            t.isIntersecting && (new S(t.target), s.unobserve(t.target))
                        }))
                    }), i);
                document.querySelectorAll("[data-nectar-block-animation]").forEach((i => {
                    const n = i.dataset.nectarBlockAnimation;
                    if (n) {
                        const e = JSON.parse(o(n));
                        if (!t(e ? .scrollPosition) && e.scrollPosition ? .animationBoundaries ? .pin) return void new S(i)
                    }
                    "desktop" === this.device || e ? new S(i) : s.observe(i)
                }));
                const n = new IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        t.isIntersecting && (new I(t.target), n.unobserve(t.target))
                    }))
                }), i);
                document.querySelectorAll("[data-nectar-bg-scroll-animation]").forEach((t => {
                    n.observe(t)
                })), document.querySelectorAll("[data-nectar-mouse-attract]").forEach((t => {
                    new J(t)
                }))
            }
            blocks() {
                document.querySelectorAll(".nectar__link--lightbox").forEach((t => {
                    if (t.closest(".nectar-blocks-lightbox-group")) return !1;
                    t.parentElement && t.parentElement.classList.add("nectar-blocks-lightbox-group")
                })), document.querySelectorAll(".nectar-blocks-lightbox-group").forEach((t => {
                    new K(t)
                }));
                const t = new IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        if (e.isIntersecting) {
                            const i = e.target;
                            i.style.transform = "translateZ(0)", i.style.transform = "", t.unobserve(e.target)
                        }
                    }))
                }), {
                    rootMargin: "0px",
                    threshold: .05
                });
                document.querySelectorAll(".nectar-blocks-marquee img").forEach((e => {
                    t.observe(e)
                }))
            }
            lazyLoading() {
                const t = document.querySelectorAll(".lazy-load-bg"),
                    e = document.querySelectorAll(".nectar__bg-video video, .nectar-blocks-video-player__video video"),
                    i = {
                        rootMargin: "300px 0px 300px 0px",
                        threshold: 0
                    },
                    s = new IntersectionObserver((t => {
                        t.forEach((t => {
                            if (t.isIntersecting) {
                                const e = t.target;
                                e.classList.remove("lazy-load-bg"), s.unobserve(e)
                            }
                        }))
                    }), i);
                t.forEach((t => s.observe(t)));
                const o = new IntersectionObserver((t => {
                    t.forEach((t => {
                        if (t.isIntersecting) {
                            const e = t.target;
                            e.querySelectorAll("source").forEach((t => {
                                const i = t.getAttribute("data-nectar-lazy-src");
                                i && (t.src = i, t.removeAttribute("data-nectar-lazy-src"), e.load(), o.unobserve(e))
                            }))
                        }
                    }))
                }), i);
                e.forEach((t => o.observe(t)))
            }
            events() {
                document.addEventListener("DOMContentLoaded", (() => {
                    this.blockAnimations(), this.lazyLoading(), this.blocks(), this.scrollElementIntoView()
                })), window.addEventListener("load", (() => {
                    this.scrollElementIntoView()
                })), window.addEventListener("resize", (() => {
                    this.resize()
                })), window.addEventListener("resize", function(t, e) {
                    let i;
                    return (...e) => new Promise(((s, o) => {
                        clearTimeout(i), i = setTimeout((() => {
                            try {
                                const i = t(...e);
                                s(i)
                            } catch (t) {
                                t instanceof Error && o(t), o(new Error(`An error has occurred:${t}`))
                            }
                        }), 100)
                    }))
                }((() => {
                    this.resizeEnd()
                }))), ("ontouchstart" in window || navigator.maxTouchPoints) && (screen.orientation ? screen.orientation.addEventListener("change", (() => {
                    ScrollTrigger.refresh()
                })) : window.addEventListener("orientationchange", (() => {
                    setTimeout((() => {
                        ScrollTrigger.refresh()
                    }), 400)
                }))), window.addEventListener("nectar-theme-state-change", this.onThemeStateChange.bind(this))
            }
            onThemeStateChange() {
                if (!window ? .nectarThemeState) return;
                const t = ScrollTrigger.getAll();
                for (let e = 0; e < t.length; e++) {
                    const i = window ? .nectarThemeState ? .disableScrollAnimations;
                    i ? t[e].disable(!1) : t[e].enable()
                }
            }
            resizeEnd() {
                document.body.classList.remove("nectar-blocks-resizing")
            }
            resize() {
                document.body.classList.add("nectar-blocks-resizing"), this.winWidth = window.innerWidth, this.winHeight = window.innerHeight;
                const t = this.calculateDevice();
                this.device !== t && (this.device = t, window.dispatchEvent(new Event("nectar-blocks-changed-device")))
            }
            scrollElementIntoView() {
                const t = new URLSearchParams(window.location.search).get("block-focus");
                if (!t) return;
                const e = document.querySelector(`#${CSS.escape(t)}`);
                e && setTimeout((() => {
                    e.scrollIntoView({
                        behavior: "auto",
                        block: "center"
                    })
                }), 5)
            }
            calculateDevice() {
                return this.winWidth >= 1025 ? "desktop" : this.winWidth >= 768 ? "tablet" : "mobile"
            }
        }
    })()
})();