! function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Lenis = i()
}(this, function() {
    "use strict";

    function t(t, i, e) {
        return Math.max(t, Math.min(i, e))
    }
    class i {
        constructor() {
            this.isRunning = !1, this.value = 0, this.from = 0, this.to = 0, this.currentTime = 0
        }
        advance(i) {
            var e;
            if (!this.isRunning) return;
            let s = !1;
            if (this.duration && this.easing) {
                this.currentTime += i;
                const e = t(0, this.currentTime / this.duration, 1),
                    o = (s = e >= 1) ? 1 : this.easing(e);
                this.value = this.from + (this.to - this.from) * o
            } else this.lerp ? (this.value = function(t, i, e, s) {
                return function(t, i, e) {
                    return (1 - e) * t + e * i
                }(t, i, 1 - Math.exp(-e * s))
            }(this.value, this.to, 60 * this.lerp, i), Math.round(this.value) === this.to && (this.value = this.to, s = !0)) : (this.value = this.to, s = !0);
            s && this.stop(), null === (e = this.onUpdate) || void 0 === e || e.call(this, this.value, s)
        }
        stop() {
            this.isRunning = !1
        }
        fromTo(t, i, {
            lerp: e,
            duration: s,
            easing: o,
            onStart: n,
            onUpdate: r
        }) {
            this.from = this.value = t, this.to = i, this.lerp = e, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, null == n || n(), this.onUpdate = r
        }
    }
    class e {
        constructor(t, i, {
            autoResize: e = !0,
            debounce: s = 250
        } = {}) {
            this.wrapper = t, this.content = i, this.width = 0, this.height = 0, this.scrollHeight = 0, this.scrollWidth = 0, this.resize = (() => {
                this.onWrapperResize(), this.onContentResize()
            }), this.onWrapperResize = (() => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            }), this.onContentResize = (() => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            }), e && (this.debouncedResize = function(t, i) {
                let e;
                return function(...s) {
                    let o = this;
                    clearTimeout(e), e = setTimeout(() => {
                        e = void 0, t.apply(o, s)
                    }, i)
                }
            }(this.resize, s), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        destroy() {
            var t, i;
            null === (t = this.wrapperResizeObserver) || void 0 === t || t.disconnect(), null === (i = this.contentResizeObserver) || void 0 === i || i.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
        }
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    }
    class s {
        constructor() {
            this.events = {}
        }
        emit(t, ...i) {
            var e;
            let s = this.events[t] || [];
            for (let t = 0, o = s.length; t < o; t++) null === (e = s[t]) || void 0 === e || e.call(s, ...i)
        }
        on(t, i) {
            var e;
            return (null === (e = this.events[t]) || void 0 === e ? void 0 : e.push(i)) || (this.events[t] = [i]), () => {
                var e;
                this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter(t => i !== t)
            }
        }
        off(t, i) {
            var e;
            this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter(t => i !== t)
        }
        destroy() {
            this.events = {}
        }
    }
    const o = 100 / 6,
        n = {
            passive: !1
        };
    class r {
        constructor(t, i = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            this.element = t, this.options = i, this.touchStart = {
                x: 0,
                y: 0
            }, this.lastDelta = {
                x: 0,
                y: 0
            }, this.window = {
                width: 0,
                height: 0
            }, this.emitter = new s, this.onTouchStart = (t => {
                const {
                    clientX: i,
                    clientY: e
                } = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStart.x = i, this.touchStart.y = e, this.lastDelta = {
                    x: 0,
                    y: 0
                }, this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: t
                })
            }), this.onTouchMove = (t => {
                const {
                    clientX: i,
                    clientY: e
                } = t.targetTouches ? t.targetTouches[0] : t, s = -(i - this.touchStart.x) * this.options.touchMultiplier, o = -(e - this.touchStart.y) * this.options.touchMultiplier;
                this.touchStart.x = i, this.touchStart.y = e, this.lastDelta = {
                    x: s,
                    y: o
                }, this.emitter.emit("scroll", {
                    deltaX: s,
                    deltaY: o,
                    event: t
                })
            }), this.onTouchEnd = (t => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: t
                })
            }), this.onWheel = (t => {
                let {
                    deltaX: i,
                    deltaY: e,
                    deltaMode: s
                } = t;
                i *= 1 === s ? o : 2 === s ? this.window.width : 1, e *= 1 === s ? o : 2 === s ? this.window.height : 1, i *= this.options.wheelMultiplier, e *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                    deltaX: i,
                    deltaY: e,
                    event: t
                })
            }), this.onWindowResize = (() => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }), window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, n), this.element.addEventListener("touchstart", this.onTouchStart, n), this.element.addEventListener("touchmove", this.onTouchMove, n), this.element.addEventListener("touchend", this.onTouchEnd, n)
        }
        on(t, i) {
            return this.emitter.on(t, i)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, n), this.element.removeEventListener("touchstart", this.onTouchStart, n), this.element.removeEventListener("touchmove", this.onTouchMove, n), this.element.removeEventListener("touchend", this.onTouchEnd, n)
        }
    }
    return class {
        constructor({
            wrapper: t = window,
            content: o = document.documentElement,
            eventsTarget: n = t,
            smoothWheel: l = !0,
            syncTouch: h = !1,
            syncTouchLerp: a = .075,
            touchInertiaMultiplier: c = 35,
            duration: d,
            easing: u = (t => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
            lerp: p = .1,
            infinite: m = !1,
            orientation: v = "vertical",
            gestureOrientation: g = "vertical",
            touchMultiplier: w = 1,
            wheelMultiplier: S = 1,
            autoResize: f = !0,
            prevent: y,
            virtualScroll: T,
            __experimental__naiveDimensions: E = !1
        } = {}) {
            this._isScrolling = !1, this._isStopped = !1, this._isLocked = !1, this._preventNextNativeScrollEvent = !1, this._resetVelocityTimeout = null, this.time = 0, this.userData = {}, this.lastVelocity = 0, this.velocity = 0, this.direction = 0, this.animate = new i, this.emitter = new s, this.onPointerDown = (t => {
                1 === t.button && this.reset()
            }), this.onVirtualScroll = (t => {
                if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
                const {
                    deltaX: i,
                    deltaY: e,
                    event: s
                } = t;
                if (this.emitter.emit("virtual-scroll", {
                        deltaX: i,
                        deltaY: e,
                        event: s
                    }), s.ctrlKey) return;
                const o = s.type.includes("touch"),
                    n = s.type.includes("wheel");
                if (this.isTouching = "touchstart" === s.type || "touchmove" === s.type, this.options.syncTouch && o && "touchstart" === s.type && !this.isStopped && !this.isLocked) return void this.reset();
                const r = 0 === i && 0 === e,
                    l = "vertical" === this.options.gestureOrientation && 0 === e || "horizontal" === this.options.gestureOrientation && 0 === i;
                if (r || l) return;
                let h = s.composedPath();
                h = h.slice(0, h.indexOf(this.rootElement));
                const a = this.options.prevent;
                if (h.find(t => {
                        var i, e, s, r, l;
                        return t instanceof HTMLElement && ("function" == typeof a && (null == a ? void 0 : a(t)) || (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent")) || o && (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent-touch")) || n && (null === (s = t.hasAttribute) || void 0 === s ? void 0 : s.call(t, "data-lenis-prevent-wheel")) || (null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis")) && !(null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis-stopped")))
                    })) return;
                if (this.isStopped || this.isLocked) return void s.preventDefault();
                if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) return this.isScrolling = "native", void this.animate.stop();
                s.preventDefault();
                let c = e;
                "both" === this.options.gestureOrientation ? c = Math.abs(e) > Math.abs(i) ? e : i : "horizontal" === this.options.gestureOrientation && (c = i);
                const d = o && this.options.syncTouch,
                    u = o && "touchend" === s.type && Math.abs(c) > 5;
                u && (c = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c, Object.assign({
                    programmatic: !1
                }, d ? {
                    lerp: u ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }))
            }), this.onNativeScroll = (() => {
                if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) this._preventNextNativeScrollEvent = !1;
                else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                    const t = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isScrolling = "native", this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            }), window.lenisVersion = "1.1.13", t && t !== document.documentElement && t !== document.body || (t = window), this.options = {
                wrapper: t,
                content: o,
                eventsTarget: n,
                smoothWheel: l,
                syncTouch: h,
                syncTouchLerp: a,
                touchInertiaMultiplier: c,
                duration: d,
                easing: u,
                lerp: p,
                infinite: m,
                gestureOrientation: g,
                orientation: v,
                touchMultiplier: w,
                wheelMultiplier: S,
                autoResize: f,
                prevent: y,
                virtualScroll: T,
                __experimental__naiveDimensions: E
            }, this.dimensions = new e(t, o, {
                autoResize: f
            }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new r(n, {
                touchMultiplier: w,
                wheelMultiplier: S
            }), this.virtualScroll.on("scroll", this.onVirtualScroll)
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName()
        }
        on(t, i) {
            return this.emitter.on(t, i)
        }
        off(t, i) {
            return this.emitter.off(t, i)
        }
        setScroll(t) {
            this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
        }
        resize() {
            this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.isStopped = !1, this.reset())
        }
        stop() {
            this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
        }
        raf(t) {
            const i = t - (this.time || t);
            this.time = t, this.animate.advance(.001 * i)
        }
        scrollTo(i, {
            offset: e = 0,
            immediate: s = !1,
            lock: o = !1,
            duration: n = this.options.duration,
            easing: r = this.options.easing,
            lerp: l = this.options.lerp,
            onStart: h,
            onComplete: a,
            force: c = !1,
            programmatic: d = !0,
            userData: u
        } = {}) {
            if (!this.isStopped && !this.isLocked || c) {
                if ("string" == typeof i && ["top", "left", "start"].includes(i)) i = 0;
                else if ("string" == typeof i && ["bottom", "right", "end"].includes(i)) i = this.limit;
                else {
                    let t;
                    if ("string" == typeof i ? t = document.querySelector(i) : i instanceof HTMLElement && (null == i ? void 0 : i.nodeType) && (t = i), t) {
                        if (this.options.wrapper !== window) {
                            const t = this.rootElement.getBoundingClientRect();
                            e -= this.isHorizontal ? t.left : t.top
                        }
                        const s = t.getBoundingClientRect();
                        i = (this.isHorizontal ? s.left : s.top) + this.animatedScroll
                    }
                }
                if ("number" == typeof i) {
                    if (i += e, i = Math.round(i), this.options.infinite ? d && (this.targetScroll = this.animatedScroll = this.scroll) : i = t(0, i, this.limit), i === this.targetScroll) return null == h || h(this), void(null == a || a(this));
                    if (this.userData = null != u ? u : {}, s) return this.animatedScroll = this.targetScroll = i, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), null == a || a(this), void(this.userData = {});
                    d || (this.targetScroll = i), this.animate.fromTo(this.animatedScroll, i, {
                        duration: n,
                        easing: r,
                        lerp: l,
                        onStart: () => {
                            o && (this.isLocked = !0), this.isScrolling = "smooth", null == h || h(this)
                        },
                        onUpdate: (t, i) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), d && (this.targetScroll = t), i || this.emit(), i && (this.reset(), this.emit(), null == a || a(this), this.userData = {}, this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
        }
        preventNextNativeScrollEvent() {
            this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1
            })
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return "horizontal" === this.options.orientation
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
        }
        get scroll() {
            return this.options.infinite ? (t = this.animatedScroll, i = this.limit, (t % i + i) % i) : this.animatedScroll;
            var t, i
        }
        get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this._isScrolling
        }
        set isScrolling(t) {
            this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
        }
        get isStopped() {
            return this._isStopped
        }
        set isStopped(t) {
            this._isStopped !== t && (this._isStopped = t, this.updateClassName())
        }
        get isLocked() {
            return this._isLocked
        }
        set isLocked(t) {
            this._isLocked !== t && (this._isLocked = t, this.updateClassName())
        }
        get isSmooth() {
            return "smooth" === this.isScrolling
        }
        get className() {
            let t = "lenis";
            return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t
        }
        updateClassName() {
            this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
        }
        cleanUpClassName() {
            this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
        }
    }
}),
function() {
    var t = !(!window.nectarOptions || !window.nectarOptions.smooth_scroll || "true" !== window.nectarOptions.smooth_scroll),
        i = window.nectarOptions && window.nectarOptions.smooth_scroll_strength ? window.nectarOptions.smooth_scroll_strength : "50";
    i = parseInt(i);
    var e = navigator.userAgent.match(/(iPod|iPhone|iPad)/) || navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2,
        s = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 1,
        o = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i);
    if (!s && !o && !e && t) {
        const t = new Lenis({
            lerp: .17 * (1.5 - i / 100),
            prevent: function(t) {
                return t.classList.contains("nectar-modal") || t.classList.contains("select2-container") || t.classList.contains("widget_shopping_cart") || "slide-out-widget-area" === t.id
            }
        });
        t.on("scroll", t => {
            window.nectarDOMInfo && (window.nectarDOMInfo.scrollTop = t.animatedScroll)
        }), requestAnimationFrame(function i(e) {
            t.raf(e), requestAnimationFrame(i)
        })
    }
}();