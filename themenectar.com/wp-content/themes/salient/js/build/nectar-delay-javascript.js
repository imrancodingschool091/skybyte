! function(e, t, a) {
    "use strict";

    function n() {
        this.scripts = [], this.eventListeners = ["click", "scroll", "touchstart", "touchmove", "keydown", "mousemove"], this.windowWidth = t.innerWidth, this.windowHeight = t.innerHeight, this.noClick = this.preventClick.bind(this), this.load = this.triggerLoad.bind(this), this.shouldDelayForViewTransition = this.shouldDelayForViewTransition(), this.pageCritical(), this.lazyLoadCriticalMedia(), this.loadCriticalAnimations(), this.gatherElements(), this.addEvents()
    }
    const i = n.prototype;
    i.gatherElements = function() {
        a.querySelectorAll('script[type="salientlazyscript"]').forEach(e => {
            this.scripts.push(e)
        })
    }, i.aboveTheFoldElements = function(e) {
        let t = [];
        const n = this;
        a.querySelectorAll(".container-wrap .vc_row:not(.inner_row)").forEach((a, i) => {
            if (i < 2) {
                if (1 == i) {
                    if (a.getBoundingClientRect().top > n.windowHeight) return
                }
                a.querySelectorAll(e).forEach(e => {
                    t.push(e)
                })
            }
        });
        const i = a.querySelectorAll(".woocommerce.archive .products, .archive .posts-container, .nectar_hook_global_section_after_header_navigation, .nectar_hook_before_secondary_header");
        return i && i.forEach((a, n) => {
            a.querySelectorAll(e).forEach(e => {
                t.push(e)
            })
        }), t
    }, i.maybeAddAnimationEasing = function(e) {
        let t = "";
        if (this.windowWidth > 1e3 || this.shouldDelayForViewTransition) {
            let n = "cubic-bezier(0.33, 1, 0.68, 1)",
                i = "0s",
                r = "1s";
            if (e.hasAttribute("data-animation-easing")) {
                const t = e.getAttribute("data-animation-easing");
                void 0 !== this.easings[t] && (n = "cubic-bezier(" + this.easings[t] + ")")
            }
            a.body.hasAttribute("data-cad") && (r = parseInt(a.body.getAttribute("data-cad")) + "ms"), e.hasAttribute("data-delay") && "" !== e.getAttribute("data-delay") && (i = parseInt(e.getAttribute("data-delay")) + "ms"), t = "transform " + r + " " + n + " " + i + ", clip-path " + r + " " + n + " " + i + ", opacity " + r + " " + n + " " + i
        }
        return t
    }, i.pageCritical = function() {
        const e = a.querySelector(".container-wrap > .main-content > .row");
        if (e) {
            const t = e.children;
            if (t.length > 0) {
                const e = t[t.length - 1];
                (e.classList.contains("full-width-section") || e.classList.contains("full-width-content")) && (a.querySelector(".container-wrap").style.paddingBottom = "0")
            }
        }
        const n = a.getElementById("header-outer");
        if (n) {
            n.querySelectorAll("a[href*='" + location.pathname + "']").forEach(function(e) {
                const t = e.getAttribute("href");
                if (t && -1 !== t.indexOf("#")) {
                    const n = t.substring(t.indexOf("#")).replace(/[^a-zA-Z0-9-]/g, "");
                    if (n.length > 0 && "#" !== n && a.querySelector("div#" + n)) {
                        const t = e.parentNode;
                        t.classList.add("no-pseudo-after-transition"), t.classList.remove("current_page_item"), t.classList.remove("current-menu-item"), setTimeout(() => {
                            t.classList.remove("no-pseudo-after-transition")
                        }, 100)
                    }
                    a.querySelector('div[data-fullscreen-anchor-id="' + t.substring(t.indexOf("#") + 1) + '"]') && (e.parentNode.classList.remove("current_page_item"), e.parentNode.classList.remove("current-menu-item"))
                }
            })
        }
        if (t.innerWidth < 1e3 && null !== a.querySelector('#header-outer[data-mobile-fixed="1"]') && null === a.querySelector('#header-outer[data-transparent-header="true"]')) {
            var i = a.querySelector("#header-outer"),
                r = a.querySelector("#header-space");
            i && r && (r.style.height = i.offsetHeight + "px")
        }
        const o = a.querySelector(".container.main-content");
        if (o) {
            var s = this.stickyOffsetCalc();
            o.style.setProperty("--nectar-sticky-top-distance", s + "px")
        }
        if (a.querySelector("#nectar_fullscreen_rows")) {
            const e = null !== a.querySelector('#nectar_fullscreen_rows[data-mobile-disable="off"]'),
                n = this.aboveTheFoldElements('.nectar-split-heading[data-text-effect="letter-reveal-bottom"]');
            t.innerWidth < 1e3 && e ? n.forEach(e => {
                e.setAttribute("data-text-effect", "default")
            }) : t.innerWidth >= 1e3 && n.forEach(e => {
                e.setAttribute("data-text-effect", "default")
            })
        }
        this.wooCommerce(), this.parallaxPositioning(), this.backdropFilters()
    }, i.backdropFilters = function() {
        a.querySelectorAll(".wpb_column").forEach(function(e) {
            if (e.classList.contains("backdrop_filter_blur")) {
                var t = e.closest(".wpb_row");
                if (t) {
                    t.classList.add("row-col-gap");
                    var a = t.getAttribute("data-column-margin") || "default";
                    if ("default" !== a) {
                        var n = t.querySelector(".span_12");
                        n && (n.style.columnGap = a)
                    }
                }
            }
        })
    }, i.stickyOffsetCalc = function() {
        var e = 50,
            n = a.querySelector('#header-outer[data-remove-fixed="0"]'),
            i = null === a.querySelector('#header-outer[data-format="left-header"]'),
            r = "true" === a.body.getAttribute("data-contained-header"),
            o = t.innerWidth < 1e3,
            s = a.querySelector("#wpadminbar"),
            l = a.querySelector('#header-outer[data-shrink-num][data-header-resize="1"]'),
            c = a.querySelector('#header-outer[data-condense="true"]');
        if (n && i) {
            if (e += n.offsetHeight, r && (e += parseInt(getComputedStyle(n).marginTop)), l) {
                var d = parseInt(n.getAttribute("data-padding")) - parseInt(n.getAttribute("data-padding")) / 1.8;
                e -= parseInt(n.getAttribute("data-shrink-num")) || 0, e -= 2 * d
            }
            if (!o && c) {
                var u = a.querySelector('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
                    h = a.querySelector("#header-outer #logo"),
                    m = a.querySelector("#header-secondary-outer"),
                    f = m && m.length > 0 && "none" !== m.style.display ? m.offsetHeight : 0;
                e = 50, e += n.offsetHeight - (u.offsetTop - parseInt(getComputedStyle(h).marginTop)) - parseInt(f)
            }
        }
        return s && (e += s.offsetHeight), e
    }, i.parallaxPositioning = function() {
        a.querySelectorAll('.wpb_column[data-scroll-animation="true"], .nectar-el-parallax-scroll[data-scroll-animation="true"]').forEach(function(e, n) {
            if ("true" === e.getAttribute("data-scroll-animation") && null === a.getElementById("nectar_fullscreen_rows") && null === e.closest(".n-sticky") && null === e.closest(".nectar-global-section-megamenu")) {
                let n = e,
                    i = n.querySelector(":scope > .vc_column-inner"),
                    r = n.getAttribute("data-scroll-animation-intensity") ? Math.max(Math.min(parseFloat(n.getAttribute("data-scroll-animation-intensity")), 8), -8) : 3;
                r /= 10;
                const o = !(!n.hasAttribute("data-scroll-animation-mobile") || "true" !== n.getAttribute("data-scroll-animation-mobile"));
                e.classList.contains("wpb_column") || null !== e.closest(".cell") || (i = e, n = e.parentNode, e.hasAttribute("data-scroll-animation-movement") && n.setAttribute("data-scroll-animation-movement", e.getAttribute("data-scroll-animation-movement")));
                const s = t.scrollY,
                    l = t.innerWidth,
                    c = t.innerHeight,
                    d = n.closest(".col.has-animation");
                let u = 0;
                if (d) {
                    const e = t.getComputedStyle(d).transform.split(",")[5];
                    e && (u = parseInt(e))
                }
                const h = n.getBoundingClientRect().top + s - u,
                    m = n.offsetHeight,
                    f = c / 2 - m / 2;
                let p = "translateY";
                "transform_x" === n.getAttribute("data-scroll-animation-movement") && (p = "translateX");
                let y = !1;
                n.closest(".top-level") && (y = !0, n.getBoundingClientRect().top + s > c && (y = !1));
                let g = !1;
                a.querySelector(".nectar_hook_global_section_parallax_footer") && (g = !0);
                let b = r;
                l < 1025 && (b /= 1.2), l < 690 && (b /= 1.35), i.style.transform = !0 === y && l > 1e3 || !0 === y && o ? p + "(" + -s * b + "px) translateZ(0)" : !0 === g && l > 1e3 || !0 === g && o ? p + "(" + -(s - (h + m) + c) * b + "px) translateZ(0)" : l > 1e3 || o ? p + "(" + -(s - h + f) * b + "px) translateZ(0)" : p + "(0px) translateZ(0)"
            }
        })
    }, i.wooCommerce = function() {
        if (!a.querySelector("body.woocommerce-account #customer_login")) return;
        const e = a.querySelector(".woocommerce-account .woocommerce > #customer_login");
        if (!e) return;
        const t = a.createElement("div");
        t.className = "nectar-form-controls", e.prepend(t), a.querySelectorAll(".woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)").forEach(function(e, n) {
            const i = e.querySelector(":scope > h2");
            if (i) {
                const e = i.textContent,
                    r = a.createElement("div");
                r.className = 0 === n ? "control active" : "control", r.textContent = e, t.appendChild(r)
            }
        });
        const n = a.querySelector(".woocommerce-account .woocommerce > #customer_login .u-column1");
        n && n.classList.add("visible")
    }, i.splitLineHeadingAnimation = function(e) {
        const t = e.hasAttribute("data-animation-delay") ? parseInt(e.getAttribute("data-animation-delay")) : 0,
            a = Array.from(e.children),
            n = e.hasAttribute("data-text-effect") ? e.getAttribute("data-text-effect") : "default";
        if ("none" === n || "scroll-opacity-reveal" === n) return;
        let i = "opacity 1s cubic-bezier(0.33, 1, 0.68, 1), transform 1s cubic-bezier(0.33, 1, 0.68, 1)";
        e.closest(".nectar-post-grid-item") && (i = ""), a.forEach(e => {
            let t = e.textContent;
            const a = (t = t ? t.trim() : "").split(" "),
                i = n.includes("letter-reveal");
            e.innerHTML = "";
            for (var r = 0; r < a.length; r++) e.innerHTML += i ? "<span>" + a[r] + "</span> " : '<span><span class="inner" style="transition: none;">' + a[r] + "</span></span> ";
            i && e.querySelectorAll("span").forEach(e => {
                let t = e.textContent;
                e.innerHTML = "";
                for (var a = 0; a < t.length; a++) e.innerHTML += '<span class="inner" style="transition: none;">' + t[a] + "</span>"
            })
        });
        const r = this.shouldDelayForViewTransition ? 450 : 0;
        setTimeout(() => {
            setTimeout(() => {
                e.querySelectorAll(".inner").forEach((t, a) => {
                    const r = e.hasAttribute("data-stagger") && "true" === e.getAttribute("data-stagger") ? 40 : 0;
                    setTimeout(() => {
                        t.style = "", "twist-bottom-2" === n && (t.style.transition = "transform 1100ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 1100ms cubic-bezier(0.165, 0.84, 0.44, 1)"), 0 == r && (t.style.transition = i), t.style.transform = "translateY(0em)", t.style.opacity = "1"
                    }, r * a)
                })
            }, t + 10)
        }, r), e.classList.add("animated-in", "markup-generated"), e.setAttribute("data-stored-text-effect", n), e.setAttribute("data-text-effect", "none")
    }, i.loadCriticalAnimations = function() {
        const n = this.shouldDelayForViewTransition ? 450 : 0;
        this.easings = {
            linear: "0,0,1,1",
            easeInSine: "0.12, 0, 0.39, 0",
            easeOutSine: "0.61, 1, 0.88, 1",
            easeInOutSine: "0.37, 0, 0.63, 1",
            easeInQuad: "0.11, 0, 0.5, 0",
            easeOutQuad: "0.5, 1, 0.89, 1",
            easeInOutQuad: "0.45, 0, 0.55, 1",
            easeInCubic: "0.32, 0, 0.67, 0",
            easeOutCubic: "0.33, 1, 0.68, 1",
            easeInOutCubic: "0.65, 0, 0.35, 1",
            easeInQuart: "0.5, 0, 0.75, 0",
            easeOutQuart: "0.25, 1, 0.5, 1",
            easeInOutQuart: "0.76, 0, 0.24, 1",
            easeInQuint: "0.64, 0, 0.78, 0",
            easeOutQuint: "0.22, 1, 0.36, 1",
            easeInOutQuint: "0.83, 0, 0.17, 1",
            easeInExpo: "0.8, 0, 0.2, 0",
            easeOutExpo: "0.19, 1, 0.22, 1",
            easeInOutExpo: "0.87, 0, 0.13, 1",
            easeInCirc: "0.6, 0, 0.98, 0",
            easeOutCirc: "0, 0.55, 0.45, 1",
            easeInOutCirc: "0.85, 0, 0.15, 1"
        };
        const i = a.getElementById("ajax-loading-screen");
        if (i && i.classList.add("loaded"), t.nectarOptions && t.nectarOptions.header_entrance && "true" == t.nectarOptions.header_entrance && a.querySelector("#header-outer") && a.querySelector("#header-outer").classList.add("entrance-animation"), t.NectarBoxRollHelper && a.querySelector(".nectar-box-roll")) {
            (new NectarBoxRollHelper).setInitialSize(), a.querySelectorAll("body, html, #ajax-content-wrap, .container-wrap, .blurred-wrap").forEach(e => {
                e.classList.add("no-scroll")
            })
        }
        const r = a.querySelector("#page-header-bg .nectar-particles .inner-wrap >*:not(.top-heading)");
        r && (r.style.transform = "translate3d(0,0,0)", r.style.opacity = "1"), setTimeout(() => {
            const e = a.querySelector(".widget_shopping_cart .cart_list .empty"),
                t = a.querySelector(".widget_shopping_cart .cart_list"),
                n = a.querySelector("#mobile-cart-link"),
                i = a.querySelector(".cart-menu-wrap.static");
            !e && !i && n && t && n.classList.add("first-load")
        }, 80), a.querySelectorAll(".vc_row.top-level").forEach(e => {
            e.classList.add("loaded")
        }), this.aboveTheFoldElements('.img-with-aniamtion-wrap:not([data-animation="none"])').forEach(e => {
            const t = e.querySelector(".hover-wrap"),
                a = e.querySelector(".inner"),
                i = e.querySelector(".img-with-animation"),
                r = [e, a, t, i];
            i && t && (t.style.transition = this.maybeAddAnimationEasing(i)), this.windowWidth < 1e3 && r.forEach(e => {
                e && (e.style.transition = "none")
            }), setTimeout(() => {
                r.forEach(e => {
                    e && (e.style.opacity = "1", e.style.transform = "translate3d(0,0,0)")
                })
            }, n), i && i.classList.add("animated-in")
        }), this.aboveTheFoldElements('.wpb_column.has-animation:not([data-animation*="reveal"]), .nectar-fancy-box.has-animation').forEach(e => {
            e.style.transition = this.maybeAddAnimationEasing(e), setTimeout(() => {
                e.style.transform = "translate3d(0,0,0)", e.style.opacity = "1"
            }, n), e.classList.add("animated-in")
        }), this.aboveTheFoldElements('.wpb_column.has-animation[data-animation*="reveal"]').forEach(e => {
            [e, e.querySelector(".vc_column-inner")].forEach(t => {
                t && (t.style.transition = this.maybeAddAnimationEasing(e), setTimeout(() => {
                    t.style.opacity = "1", t.style.transform = "translate3d(0,0,0)"
                }, n))
            }), e.classList.add("animated-in")
        });
        const o = this.aboveTheFoldElements(".nectar_cascading_images");
        setTimeout(() => {
            o.forEach(e => {
                e.querySelectorAll(".inner-wrap, .inner-wrap img").forEach(e => {
                    e.style.transition = "none", e.style.transform = "translate3d(0,0,0)", e.style.opacity = "1"
                })
            })
        }, n);
        const s = this.aboveTheFoldElements('.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"])'),
            l = this.aboveTheFoldElements('.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"])'),
            c = this.aboveTheFoldElements('.nectar-post-grid:not([data-animation="none"])'),
            d = this.aboveTheFoldElements(".wpb_animate_when_almost_visible"),
            u = this.aboveTheFoldElements(".nectar-waypoint-el");
        if (setTimeout(() => {
                s.forEach(e => {
                    e.parentElement.classList.add("animated-in"), e.classList.add("animated-in"), e.querySelectorAll(".row-bg, .inner-wrap").forEach(e => {
                        e.classList.add("animated-in")
                    })
                }), l.forEach(e => {
                    e.parentElement.classList.add("revealed-bg"), e.classList.add("animated-in"), e.parentElement.querySelectorAll(".column-bg-layer").forEach(e => {
                        e.classList.add("animated-in")
                    }), e.querySelectorAll(".column-image-bg, .inner-wrap").forEach(e => {
                        e.classList.add("animated-in")
                    })
                }), c.forEach(e => {
                    const t = e.hasAttribute("data-animation-stagger") ? e.getAttribute("data-animation-stagger") : 90,
                        a = e.querySelectorAll(".nectar-post-grid-item");
                    e.parentElement.classList.add("delay-js-loaded"), a.forEach((e, a) => {
                        setTimeout(() => {
                            e.classList.add("animated-in")
                        }, a * t)
                    });
                    const n = e.parentElement.querySelector(".nectar-post-grid-filters");
                    n && n.classList.add("animated-in"), setTimeout(function() {
                        e.classList.add("finished-animating")
                    }, 950)
                }), d.forEach(e => {
                    e.classList.add("wpb_start_animation"), e.classList.add("animated")
                }), u.forEach(e => {
                    e.classList.add("animated-in")
                })
            }, n), this.aboveTheFoldElements(".nectar-split-heading").forEach(e => {
                "line-reveal-by-space" === e.getAttribute("data-animation-type") && this.windowWidth >= 1e3 ? this.splitLineHeadingAnimation(e) : setTimeout(() => {
                    e.setAttribute("data-text-effect", "none"), e.classList.add("animated-in"), e.querySelectorAll(".heading-line > div").forEach(e => {
                        e.style.transform = "translate3d(0,0,0)"
                    })
                }, n)
            }), setTimeout(() => {
                this.aboveTheFoldElements(".nectar-text-inline-images__marker").forEach(e => {
                    e.classList.add("animated-in")
                }), this.aboveTheFoldElements(".nectar-highlighted-text em").forEach(e => {
                    e.classList.add("animated")
                }), this.aboveTheFoldElements(".nectar-animated-title").forEach(e => {
                    e.classList.add("completed")
                }), this.aboveTheFoldElements('.nectar-icon-list[data-animate="true"]').forEach(e => {
                    e.classList.add("completed"), e.querySelectorAll(".nectar-icon-list-item").forEach(e => {
                        e.classList.add("animated")
                    })
                }), this.aboveTheFoldElements('.nectar-fancy-ul[data-animation="true"]').forEach(e => {
                    e.classList.add("animated-in");
                    const t = e.getAttribute("data-list-icon"),
                        n = t.split(" "),
                        i = e.getAttribute("data-color");
                    e.querySelectorAll("ul li").forEach(e => {
                        const r = a.createElement("i");
                        t && i && (r.classList.add("icon-default-style", i), n.forEach(e => {
                            r.classList.add(e)
                        })), e.style.left = "0", e.style.opacity = "1", e.prepend(r)
                    })
                }), this.aboveTheFoldElements('.divider-border[data-animate="yes"], .divider-small-border[data-animate="yes"]').forEach(e => {
                    e.style.visibility = "visible", e.classList.add("completed")
                })
            }, n), this.aboveTheFoldElements(".nectar-rotating-words-title").forEach(e => {
                e.style.opacity = "1", e.classList.add("animated-in"), e.classList.add("delay-js-loaded");
                const t = e.querySelectorAll(".text-wrap > span");
                setTimeout(() => {
                    t.forEach(e => {
                        e.style.transform = "translate3d(0,0,0)"
                    })
                }, n)
            }), "undefined" != typeof SalientRecentProjectsFullScreen) {
            this.aboveTheFoldElements(".nectar_fullscreen_zoom_recent_projects").forEach(t => {
                new SalientRecentProjectsFullScreen(e(t))
            })
        }
        this.aboveTheFoldElements(".wpb_gallery_slidesflickity_static_height_style .item-meta").forEach(e => {
            const t = e.parentElement.querySelector("img");
            t && (e.style.width = t.offsetWidth + "px")
        }), this.aboveTheFoldElements('.nectar-woo-flickity[data-animation*="fade"]').forEach(e => {
            e.classList.add("animated-in");
            const t = e.querySelectorAll(".product");
            setTimeout(() => {
                t.forEach(e => {
                    e.style.opacity = "1", e.style.transform = "translate3d(0,0,0)"
                })
            }, n)
        });
        const h = a.querySelectorAll(".vc_row-o-full-height:not(.top-level)"),
            m = this.windowHeight;
        h.forEach(e => {
            e.style.minHeight = parseInt(m) + "px";
            const t = e.querySelector(".col.span_12");
            t && (t.style.minHeight = parseInt(m) + "px")
        });
        const f = a.querySelectorAll('.row > .top-level:not(.has-global-section) .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .row > .top-level:not(.has-global-section) .portfolio-items[data-col-num="elastic"]'),
            p = a.querySelectorAll('#page-header-bg, .page-header-no-bg, .project-title, .body[data-bg-header="true"], body.single'),
            y = a.querySelectorAll("#portfolio-extra"),
            g = a.querySelectorAll("#full_width_portfolio"),
            b = y.length > 0 && 0 == g.length;
        if (f.length > 0 && 0 == p.length && !1 === b) {
            const e = a.querySelector(".container-wrap");
            e && (e.style.paddingTop = "0px")
        }
        const v = a.querySelector(".blog-fullwidth-wrap");
        if (!!(v && v.querySelectorAll(".span_12.masonry.meta_overlaid").length > 0)) {
            v.classList.add("meta-overlaid");
            const e = a.querySelector(".container-wrap");
            e && e.classList.add("meta_overlaid_blog")
        }
        t.innerWidth > 470 && setTimeout(() => {
            const e = function() {};
            a.querySelectorAll(".portfolio-items:not(.carousel)").forEach(t => {
                "undefined" != typeof SalientPortfolio && "undefined" != typeof jQuery && new SalientPortfolio(jQuery(t), e, "", e)
            }), a.querySelectorAll(".masonry:not(.auto_meta_overlaid_spaced) > .posts-container").forEach(t => {
                if ("undefined" != typeof NectarMasonryBlog && "undefined" != typeof jQuery) {
                    new NectarMasonryBlog(jQuery(t), e, e), t.querySelectorAll(".masonry-blog-item").forEach(e => {
                        e.classList.add("animated-in")
                    })
                }
            })
        }, 200);
        const E = a.querySelector("body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close");
        E && E.classList.add("hide_until_rendered")
    }, i.shouldDelayForViewTransition = function() {
        if (!a.startViewTransition) return !1;
        if (t.innerWidth < 1e3) return !1;
        if ("reveal-from-bottom" !== (t.nectarOptions && t.nectarOptions.view_transitions_effect ? t.nectarOptions.view_transitions_effect : "")) return !1;
        if ("undefined" == typeof performance || !performance.getEntriesByType) return !1;
        const e = performance.getEntriesByType("navigation");
        if (e.length > 0) {
            const n = e[0].type,
                i = a.referrer,
                r = t.location.origin;
            if (!i || i.includes("wp-admin")) return !1;
            if ("reload" === n) return !1;
            if ("navigate" === n) return !0;
            if ("back_forward" === n) return new URL(i).origin === r
        }
        return !1
    }, i.pageLoadHashCheck = function() {
        let e = t.location.hash;
        if (e && e.length > 0) {
            e = e.replace(/[^a-zA-Z0-9-]/g, ""), a.getElementById(e) && this.load()
        }
    }, i.lazyLoadCriticalMedia = function() {
        let e = this.aboveTheFoldElements("[data-nectar-img-src]");
        (e = e.filter(e => !e.closest(".nectar-post-grid[data-lazy-skip]"))).forEach(e => {
            var t = e.getAttribute("data-nectar-img-src");
            if (t)
                if (e.classList.contains("nectar-lazy")) {
                    e.addEventListener("load", function() {
                        e.classList.add("loaded"), e.removeAttribute("data-nectar-img-src")
                    }), e.src = t;
                    var a = e.getAttribute("data-nectar-img-srcset");
                    a && (e.setAttribute("srcset", a), e.removeAttribute("data-nectar-img-srcset")), e.parentNode.classList.add("img-loaded")
                } else e.style.backgroundImage = "url('" + t + "')", e.classList.add("loaded"), e.removeAttribute("data-nectar-img-src")
        }), this.aboveTheFoldElements(".nectar-lazy-video").forEach(e => {
            for (var t in e.children) {
                const a = e.children[t];
                "string" == typeof a.tagName && "SOURCE" === a.tagName && (a.src = a.dataset.nectarVideoSrc)
            }
            e.load(), e.classList.remove("lazy"), e.classList.add("loaded")
        })
    }, i.addEvents = function() {
        this.ocmLinks = a.querySelectorAll(".slide-out-widget-area-toggle a"), this.ocmLinks && this.ocmLinks.forEach(e => {
            e.addEventListener("click", () => {
                t.nectarOcmOpen = !0
            }, {
                once: !0
            }), e.addEventListener("touchend", () => {
                t.nectarOcmOpen = !0
            }, {
                once: !0
            })
        }), setTimeout(() => {
            this.linksToPrevent = a.querySelectorAll("a.nectar_video_lightbox, a.pp, a[data-fancybox], a.pretty_photo, .wpb_gallery_slidesflickity_style .cell > a:not(.ext-url-link), .wpb_gallery_slidesflickity_static_height_style .cell > a:not(.ext-url-link), #mobile-cart-link, .mobile-search");
            let e = this;
            this.eventListeners.forEach(a => {
                t.addEventListener(a, e.load)
            }), this.linksToPrevent && this.linksToPrevent.forEach(t => {
                t.addEventListener("click", e.noClick)
            }), this.pageLoadHashCheck()
        }, 80)
    }, i.preventClick = function(e) {
        if (!a.body.classList.contains("nectar-delay-js-loaded")) return e.preventDefault(), !1
    }, i.removeEvents = function() {
        let e = this;
        this.eventListeners.forEach(a => {
            t.removeEventListener(a, e.load)
        })
    }, i.triggerLoad = async function(e) {
        var t = this;
        this.removeEvents(), await new Promise(e => setTimeout(e, 30)), this.preloadScripts(), await this.sequentialScripts(), this.dispatchEvents(), (e && "click" === e.type || e && "touchstart" === e.type) && (e.target && e.target.matches("a") || e.target.closest("a")) && setTimeout(() => {
            this.linksToPrevent && this.linksToPrevent.forEach(a => {
                if (a.removeEventListener("click", t.noClick), a === e.target || a.contains(e.target)) {
                    "absolute" !== getComputedStyle(e.target).position && e.target.click()
                }
            })
        }, 90), a.body.classList.add("nectar-delay-js-loaded")
    }, i.preloadScripts = function() {
        this.scripts.forEach(function(e) {
            const t = e.getAttribute("src");
            if (t) {
                const e = a.createElement("link");
                e.href = t, e.rel = "preload", e.as = "script", a.head.appendChild(e)
            }
        })
    }, i.sequentialScripts = async function() {
        const e = this.scripts.shift();
        return e ? (await this.loadScript(e), this.sequentialScripts(e)) : Promise.resolve()
    }, i.loadScript = async function(e) {
        if (e.hasAttribute("src")) return new Promise(function(t, n) {
            const i = a.createElement("script");
            [...e.attributes].forEach(e => {
                const t = e.nodeName,
                    a = e.nodeValue;
                "type" !== t ? "data-salient-lazy-type" !== t ? "data-nowprocket" !== t && "data-pagespeed-no-defer" !== t && i.setAttribute(t, a) : i.setAttribute("type", a) : i.setAttribute("data-salient-delayed-js-loaded", "true")
            }), i.addEventListener("load", () => {
                t()
            }), i.addEventListener("error", () => {
                t()
            }), e.parentNode.replaceChild(i, e)
        })
    }, i.dispatchEvents = function() {
        t.dispatchEvent(new Event("load")), t.dispatchEvent(new Event("salient-delayed-js-loaded"))
    }, new n
}(window.jQuery, window, document);