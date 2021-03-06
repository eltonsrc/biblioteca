"use strict";

!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length, c = fa.type(a);
        return "function" === c || fa.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (fa.isFunction(b)) return fa.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return fa.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (pa.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a);
        }
        return fa.grep(a, function(a) {
            return _.call(b, a) > -1 !== c;
        });
    }
    function e(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function f(a) {
        var b = {};
        return fa.each(a.match(va) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), 
        fa.ready();
    }
    function h() {
        this.expando = fa.expando + h.uid++;
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Ca, "-$&").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c;
            } catch (e) {}
            Aa.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function j(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return fa.css(a, b, "");
        }, i = h(), j = c && c[3] || (fa.cssNumber[b] ? "" : "px"), k = (fa.cssNumber[b] || "px" !== j && +i) && Ea.exec(fa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, fa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    function k(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([ a ], c) : c;
    }
    function l(a, b) {
        for (var c = 0, d = a.length; d > c; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"));
    }
    function m(a, b, c, d, e) {
        for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++) if (f = a[p], 
        f || 0 === f) if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [ f ] : f); else if (La.test(f)) {
            for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--; ) g = g.lastChild;
            fa.merge(o, g.childNodes), g = n.firstChild, g.textContent = "";
        } else o.push(b.createTextNode(f));
        for (n.textContent = "", p = 0; f = o[p++]; ) if (d && fa.inArray(f, d) > -1) e && e.push(f); else if (j = fa.contains(f.ownerDocument, f), 
        g = k(n.appendChild(f), "script"), j && l(g), c) for (m = 0; f = g[m++]; ) Ja.test(f.type || "") && c.push(f);
        return n;
    }
    function n() {
        return !0;
    }
    function o() {
        return !1;
    }
    function p() {
        try {
            return X.activeElement;
        } catch (a) {}
    }
    function q(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) q(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = o; else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return fa().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = fa.guid++)), a.each(function() {
            fa.event.add(this, b, e, d, c);
        });
    }
    function r(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function s(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function t(a) {
        var b = Sa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function u(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (za.hasData(a) && (f = za.access(a), g = za.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c]);
            }
            Aa.hasData(a) && (h = Aa.access(a), i = fa.extend({}, h), Aa.set(b, i));
        }
    }
    function v(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function w(a, b, c, d) {
        b = Z.apply([], b);
        var e, f, g, h, i, j, l = 0, n = a.length, o = n - 1, p = b[0], q = fa.isFunction(p);
        if (q || n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)) return a.each(function(e) {
            var f = a.eq(e);
            q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d);
        });
        if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), 
        f || d)) {
            for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) i = e, l !== o && (i = fa.clone(i, !0, !0), 
            h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
            if (h) for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++) i = g[l], 
            Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")));
        }
        return a;
    }
    function x(a, b, c) {
        for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), 
        d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    function y(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body), d = fa.css(c[0], "display");
        return c.detach(), d;
    }
    function z(a) {
        var b = X, c = Va[a];
        return c || (c = y(a, b), "none" !== c && c || (Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = Ua[0].contentDocument, b.write(), b.close(), c = y(a, b), Ua.detach()), Va[a] = c), 
        c;
    }
    function A(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ya(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), 
        c && !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
    }
    function B(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function C(a) {
        if (a in db) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--; ) if (a = cb[c] + b, 
        a in db) return a;
    }
    function D(a, b, c) {
        var d = Ea.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)), 
        d ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Fa[f], !0, e), 
        "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
        return g;
    }
    function F(b, c, d) {
        var e = !0, f = "width" === c ? b.offsetWidth : b.offsetHeight, g = Ya(b), h = "border-box" === fa.css(b, "boxSizing", !1, g);
        if (X.msFullscreenElement && a.top !== a && b.getClientRects().length && (f = Math.round(100 * b.getBoundingClientRect()[c])), 
        0 >= f || null == f) {
            if (f = A(b, c, g), (0 > f || null == f) && (f = b.style[c]), Xa.test(f)) return f;
            e = h && (da.boxSizingReliable() || f === b.style[c]), f = parseFloat(f) || 0;
        }
        return f + E(b, c, d || (h ? "border" : "content"), e, g) + "px";
    }
    function G(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = za.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName)))) : (e = Ga(d), 
        "none" === c && e || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e);
    }
    function I() {
        return a.setTimeout(function() {
            eb = void 0;
        }), eb = fa.now();
    }
    function J(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Fa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function K(a, b, c) {
        for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function L(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ga(a), p = za.get(a, "fxshow");
        c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, 
        i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, fa.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = fa.css(a, "display"), k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j, 
        "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], gb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || fa.style(a, d);
        } else j = void 0;
        if (fa.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = za.access(a, "fxshow", {}), f && (p.hidden = !o), 
            o ? fa(a).show() : l.done(function() {
                fa(a).hide();
            }), l.done(function() {
                var b;
                za.remove(a, "fxshow");
                for (b in m) fa.style(a, b, m[b]);
            });
            for (d in m) g = K(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function M(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function N(a, b, c) {
        var d, e, f = 0, g = N.prefilters.length, h = fa.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: fa.extend({}, b),
            opts: fa.extend(!0, {
                specialEasing: {},
                easing: fa.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: eb || I(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for (M(k, j.opts.specialEasing); g > f; f++) if (d = N.prefilters[f].call(j, a, k, j.opts)) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), 
        d;
        return fa.map(k, K, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function O(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    function P(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(va) || [];
            if (fa.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Q(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fa.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === Ab;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function R(a, b) {
        var c, d, e = fa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && fa.extend(!0, a, d), a;
    }
    function S(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function T(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function U(a, b, c, d) {
        var e;
        if (fa.isArray(b)) fa.each(b, function(b, e) {
            c || Eb.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== fa.type(b)) d(a, b); else for (e in b) U(a + "[" + e + "]", b[e], c, d);
    }
    function V(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var W = [], X = a.document, Y = W.slice, Z = W.concat, $ = W.push, _ = W.indexOf, aa = {}, ba = aa.toString, ca = aa.hasOwnProperty, da = {}, ea = "2.2.3", fa = function(a, b) {
        return new fa.fn.init(a, b);
    }, ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ha = /^-ms-/, ia = /-([\da-z])/gi, ja = function(a, b) {
        return b.toUpperCase();
    };
    fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this);
        },
        pushStack: function(a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a) {
            return fa.each(this, a);
        },
        map: function(a) {
            return this.pushStack(fa.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: $,
        sort: W.sort,
        splice: W.splice
    }, fa.extend = fa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, 
        f = c && fa.isArray(c) ? c : []) : f = c && fa.isPlainObject(c) ? c : {}, g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === fa.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
            if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a) ;
            return void 0 === b || ca.call(a, b);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), 
            b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(ha, "ms-").replace(ia, ja);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b) {
            var d, e = 0;
            if (c(a)) for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++) ; else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ga, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [ a ] : a) : $.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : _.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f, g = 0, h = [];
            if (c(a)) for (e = a.length; e > g; g++) f = b(a[g], g, d), null != f && h.push(f); else for (g in a) f = b(a[g], g, d), 
            null != f && h.push(f);
            return Z.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), fa.isFunction(a) ? (d = Y.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(Y.call(arguments)));
            }, e.guid = a.guid = a.guid || fa.guid++, e) : void 0;
        },
        now: Date.now,
        support: da
    }), "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]), 
    fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        aa["[object " + b + "]"] = b.toLowerCase();
    });
    var ka = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument, p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a))) if (e = j[1]) {
                    if (9 === p) {
                        if (!(g = b.getElementById(e))) return c;
                        if (g.id === e) return c.push(g), c;
                    } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), 
                    c;
                } else {
                    if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), 
                    c;
                }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b, n = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), 
                        l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--; ) l[f] = i + " " + m(l[f]);
                        n = l.join(","), o = sa.test(a) && k(b.parentNode) || b;
                    }
                    if (n) try {
                        return $.apply(c, o.querySelectorAll(n)), c;
                    } catch (q) {} finally {
                        h === N && b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = [ P, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++]; ) if (m(k, g || G, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r);
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]", fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)", ga = new RegExp(ca + "+", "g"), ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ia = new RegExp("^" + ca + "*," + ca + "*"), ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), la = new RegExp(fa), ma = new RegExp("^" + da + "$"), na = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da + "|[*])"),
            ATTR: new RegExp("^" + ea),
            PSEUDO: new RegExp("^" + fa),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/, ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = /'|\\/g, ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), va = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, wa = function() {
            F();
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (xa) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, 
            I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), 
            v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), 
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), 
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
            }), e(function(a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode; ) h.unshift(c);
                for (c = b; c = c.parentNode; ) i.unshift(c);
                for (;h[d] === i[d]; ) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0;
            }, G) : G;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return D = null, a;
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += x(b);
            return c;
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (m = b; m = m[p]; ) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                                j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop(); ) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ P, n, t ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                            j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1) for (;(m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), 
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [ P, t ]), m !== b)); ) ;
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = aa(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(ua, va), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return pa.test(a.nodeName);
                },
                input: function(a) {
                    return oa.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break;
                }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    fa.find = ka, fa.expr = ka.selectors, fa.expr[":"] = fa.expr.pseudos, fa.uniqueSort = fa.unique = ka.uniqueSort, 
    fa.text = ka.getText, fa.isXMLDoc = ka.isXML, fa.contains = ka.contains;
    var la = function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
            if (e && fa(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, ma = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, na = fa.expr.match.needsContext, oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, pa = /^.[^:#\[\.,]*$/;
    fa.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [ d ] : [] : fa.find.matches(a, fa.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, fa.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(fa(a).filter(function() {
                for (b = 0; c > b; b++) if (fa.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) fa.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? fa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length;
        }
    });
    var qa, ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, sa = fa.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || qa, "string" == typeof a) {
            if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : ra.exec(a), 
            !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), 
                oa.test(d[1]) && fa.isPlainObject(b)) for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this;
            }
            return e = X.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), 
            this.context = X, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), fa.makeArray(a, this));
    };
    sa.prototype = fa.fn, qa = fa(X);
    var ta = /^(?:parents|prev(?:Until|All))/, ua = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fa.fn.extend({
        has: function(a) {
            var b = fa(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (fa.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), fa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return la(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return la(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return la(a, "nextSibling");
        },
        prevAll: function(a) {
            return la(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return la(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return la(a, "previousSibling", c);
        },
        siblings: function(a) {
            return ma((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return ma(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || fa.merge([], a.childNodes);
        }
    }, function(a, b) {
        fa.fn[a] = function(c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), 
            this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var va = /\S+/g;
    fa.Callbacks = function(a) {
        a = "string" == typeof a ? f(a) : fa.extend({}, a);
        var b, c, d, e, g = [], h = [], i = -1, j = function() {
            for (e = a.once, d = b = !0; h.length; i = -1) for (c = h.shift(); ++i < g.length; ) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, 
            c = !1);
            a.memory || (c = !1), b = !1, e && (g = c ? [] : "");
        }, k = {
            add: function() {
                return g && (c && !b && (i = g.length - 1, h.push(c)), function d(b) {
                    fa.each(b, function(b, c) {
                        fa.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== fa.type(c) && d(c);
                    });
                }(arguments), c && !b && j()), this;
            },
            remove: function() {
                return fa.each(arguments, function(a, b) {
                    for (var c; (c = fa.inArray(b, g, c)) > -1; ) g.splice(c, 1), i >= c && i--;
                }), this;
            },
            has: function(a) {
                return a ? fa.inArray(a, g) > -1 : g.length > 0;
            },
            empty: function() {
                return g && (g = []), this;
            },
            disable: function() {
                return e = h = [], g = c = "", this;
            },
            disabled: function() {
                return !g;
            },
            lock: function() {
                return e = h = [], c || (g = c = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [ a, c.slice ? c.slice() : c ], h.push(c), b || j()), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return k;
    }, fa.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", fa.Callbacks("once memory"), "resolved" ], [ "reject", "fail", fa.Callbacks("once memory"), "rejected" ], [ "notify", "progress", fa.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return fa.Deferred(function(c) {
                        fa.each(b, function(b, f) {
                            var g = fa.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? fa.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, fa.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = Y.call(arguments), g = f.length, h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fa.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? Y.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    });
    var wa;
    fa.fn.ready = function(a) {
        return fa.ready.promise().done(a), this;
    }, fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fa.readyWait++ : fa.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(X, [ fa ]), 
            fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))));
        }
    }), fa.ready.promise = function(b) {
        return wa || (wa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), 
        a.addEventListener("load", g))), wa.promise(b);
    }, fa.ready.promise();
    var xa = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === fa.type(c)) {
            e = !0;
            for (h in c) xa(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(fa(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, ya = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    h.uid = 1, h.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando];
        },
        cache: function(a) {
            if (!ya(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, ya(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a); else {
                    fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [ b, e ] : (d = e, 
                    d = d in f ? [ d ] : d.match(va) || [])), c = d.length;
                    for (;c--; ) delete f[d[c]];
                }
                (void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !fa.isEmptyObject(b);
        }
    };
    var za = new h(), Aa = new h(), Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ca = /[A-Z]/g;
    fa.extend({
        hasData: function(a) {
            return Aa.hasData(a) || za.hasData(a);
        },
        data: function(a, b, c) {
            return Aa.access(a, b, c);
        },
        removeData: function(a, b) {
            Aa.remove(a, b);
        },
        _data: function(a, b, c) {
            return za.access(a, b, c);
        },
        _removeData: function(a, b) {
            za.remove(a, b);
        }
    }), fa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Aa.get(f), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    za.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                Aa.set(this, a);
            }) : xa(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = fa.camelCase(a), c = Aa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c;
                } else d = fa.camelCase(a), this.each(function() {
                    var c = Aa.get(this, d);
                    Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                Aa.remove(this, a);
            });
        }
    }), fa.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = za.get(a, b), c && (!d || fa.isArray(c) ? d = za.access(a, b, fa.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fa.queue(a, b), d = c.length, e = c.shift(), f = fa._queueHooks(a, b), g = function() {
                fa.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return za.get(a, c) || za.access(a, c, {
                empty: fa.Callbacks("once memory").add(function() {
                    za.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), fa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = fa.queue(this, a, b);
                fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                fa.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = fa.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = za.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"), Fa = [ "Top", "Right", "Bottom", "Left" ], Ga = function(a, b) {
        return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a);
    }, Ha = /^(?:checkbox|radio)$/i, Ia = /<([\w:-]+)/, Ja = /^$|\/(?:java|ecma)script/i, Ka = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ka.optgroup = Ka.option, Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead, 
    Ka.th = Ka.td;
    var La = /<|&#?\w+;/;
    !function() {
        var a = X.createDocumentFragment(), b = a.appendChild(X.createElement("div")), c = X.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ma = /^key/, Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Oa = /^([^.]*)(?:\.(.+)|)/;
    fa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), 
            (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(va) || [ "" ], j = b.length; j--; ) h = Oa.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = fa.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = fa.event.special[n] || {}, k = fa.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && fa.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            fa.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.hasData(a) && za.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(va) || [ "" ], j = b.length; j--; ) if (h = Oa.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    g = f = m.length; f--; ) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && za.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            a = fa.event.fix(a);
            var b, c, d, e, f, g = [], h = Y.call(arguments), i = (za.get(this, "events") || {})[a.type] || [], j = fa.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = fa.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, 
                a.data = f.data, d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (;i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[fa.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return fa.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, fa.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, fa.Event = function(a, b) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? n : o) : this.type = a, 
        b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void (this[fa.expando] = !0)) : new fa.Event(a, b);
    }, fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = n, a && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = n, a && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = n, a && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || fa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), fa.fn.extend({
        on: function(a, b, c, d) {
            return q(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return q(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = o), 
            this.each(function() {
                fa.event.remove(this, a, c, b);
            });
        }
    });
    var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Qa = /<script|<style|<link/i, Ra = /checked\s*(?:[^=]|=\s*.checked.)/i, Sa = /^true\/(.*)/, Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
        htmlPrefilter: function(a) {
            return a.replace(Pa, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = fa.contains(a.ownerDocument, a);
            if (!(da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a))) for (g = k(h), 
            f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
            if (b) if (c) for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]); else u(a, h);
            return g = k(h, "script"), g.length > 0 && l(g, !i && k(a, "script")), h;
        },
        cleanData: function(a) {
            for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++) if (ya(c)) {
                if (b = c[za.expando]) {
                    if (b.events) for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                    c[za.expando] = void 0;
                }
                c[Aa.expando] && (c[Aa.expando] = void 0);
            }
        }
    }), fa.fn.extend({
        domManip: w,
        detach: function(a) {
            return x(this, a, !0);
        },
        remove: function(a) {
            return x(this, a);
        },
        text: function(a) {
            return xa(this, function(a) {
                return void 0 === a ? fa.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return w(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return w(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return w(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return w(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fa.clone(this, a, b);
            });
        },
        html: function(a) {
            return xa(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = fa.htmlPrefilter(a);
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(k(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return w(this, arguments, function(b) {
                var c = this.parentNode;
                fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fa.fn[a] = function(a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            fa(e[g])[b](c), $.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var Ua, Va = {
        HTML: "block",
        BODY: "block"
    }, Wa = /^margin/, Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"), Ya = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    }, Za = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    }, $a = X.documentElement;
    !function() {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
            h.innerHTML = "", $a.appendChild(g);
            var b = a.getComputedStyle(h);
            c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", 
            e = "4px" === b.marginRight, $a.removeChild(g);
        }
        var c, d, e, f, g = X.createElement("div"), h = X.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", 
        da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        g.appendChild(h), fa.extend(da, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return null == d && b(), d;
            },
            pixelMarginRight: function() {
                return null == d && b(), e;
            },
            reliableMarginLeft: function() {
                return null == d && b(), f;
            },
            reliableMarginRight: function() {
                var b, c = h.appendChild(X.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", h.style.width = "1px", $a.appendChild(g), 
                b = !parseFloat(a.getComputedStyle(c).marginRight), $a.removeChild(g), h.removeChild(c), 
                b;
            }
        }));
    }();
    var _a = /^(none|table(?!-c[ea]).+)/, ab = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bb = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cb = [ "Webkit", "O", "Moz", "ms" ], db = X.createElement("div").style;
    fa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fa.camelCase(b), i = a.style;
                return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ea.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "" : "px")), 
                da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = fa.camelCase(b);
            return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = A(a, b, d)), "normal" === e && b in bb && (e = bb[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), fa.each([ "height", "width" ], function(a, b) {
        fa.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Za(a, ab, function() {
                    return F(a, b, d);
                }) : F(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e, f = d && Ya(a), g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)), 
                D(a, c, g);
            }
        };
    }), fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Za(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), fa.cssHooks.marginRight = B(da.reliableMarginRight, function(a, b) {
        return b ? Za(a, {
            display: "inline-block"
        }, A, [ a, "marginRight" ]) : void 0;
    }), fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Wa.test(a) || (fa.cssHooks[a + b].set = D);
    }), fa.fn.extend({
        css: function(a, b) {
            return xa(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (fa.isArray(b)) {
                    for (d = Ya(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return G(this, !0);
        },
        hide: function() {
            return G(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ga(this) ? fa(this).show() : fa(this).hide();
            });
        }
    }), fa.Tween = H, H.prototype = {
        constructor: H,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || fa.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = H.propHooks[this.prop];
            return a && a.get ? a.get(this) : H.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = H.propHooks[this.prop];
            return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : H.propHooks._default.set(this), this;
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : fa.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, fa.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, fa.fx = H.prototype.init, fa.fx.step = {};
    var eb, fb, gb = /^(?:toggle|show|hide)$/, hb = /queueHooks$/;
    fa.Animation = fa.extend(N, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return j(c.elem, a, Ea.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            fa.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.match(va);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], N.tweeners[c] = N.tweeners[c] || [], 
            N.tweeners[c].unshift(b);
        },
        prefilters: [ L ],
        prefilter: function(a, b) {
            b ? N.prefilters.unshift(a) : N.prefilters.push(a);
        }
    }), fa.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fa.extend({}, a) : {
            complete: c || !c && b || fa.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fa.isFunction(b) && b
        };
        return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, 
        null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue);
        }, d;
    }, fa.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ga).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = fa.isEmptyObject(a), f = fa.speed(b, c, d), g = function() {
                var b = N(this, fa.extend({}, a), f);
                (e || za.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = fa.timers, g = za.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || fa.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = za.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fa.timers, g = d ? d.length : 0;
                for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), fa.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e);
        };
    }), fa.each({
        slideDown: J("show"),
        slideUp: J("hide"),
        slideToggle: J("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fa.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), fa.timers = [], fa.fx.tick = function() {
        var a, b = 0, c = fa.timers;
        for (eb = fa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || fa.fx.stop(), eb = void 0;
    }, fa.fx.timer = function(a) {
        fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop();
    }, fa.fx.interval = 13, fa.fx.start = function() {
        fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval));
    }, fa.fx.stop = function() {
        a.clearInterval(fb), fb = null;
    }, fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fa.fn.delay = function(b, c) {
        return b = fa.fx ? fa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, function() {
        var a = X.createElement("input"), b = X.createElement("select"), c = b.appendChild(X.createElement("option"));
        a.type = "checkbox", da.checkOn = "" !== a.value, da.optSelected = c.selected, b.disabled = !0, 
        da.optDisabled = !c.disabled, a = X.createElement("input"), a.value = "t", a.type = "radio", 
        da.radioValue = "t" === a.value;
    }();
    var ib, jb = fa.expr.attrHandle;
    fa.fn.extend({
        attr: function(a, b) {
            return xa(this, fa.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                fa.removeAttr(this, a);
            });
        }
    }), fa.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), 
            e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = fa.find.attr(a, b), 
            null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(va);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        }
    }), ib = {
        set: function(a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || fa.find.attr;
        jb[b] = function(a, b, d) {
            var e, f;
            return d || (f = jb[b], jb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            jb[b] = f), e;
        };
    });
    var kb = /^(?:input|select|textarea|button)$/i, lb = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function(a, b) {
            return xa(this, fa.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fa.propFix[a] || a];
            });
        }
    }), fa.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, 
            e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = fa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), da.optSelected || (fa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), fa.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        fa.propFix[this.toLowerCase()] = this;
    });
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).addClass(a.call(this, b, O(this)));
            });
            if ("string" == typeof a && a) for (b = a.match(va) || []; c = this[i++]; ) if (e = O(c), 
            d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                for (g = 0; f = b[g++]; ) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                h = fa.trim(d), e !== h && c.setAttribute("class", h);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).removeClass(a.call(this, b, O(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) for (b = a.match(va) || []; c = this[i++]; ) if (e = O(c), 
            d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                for (g = 0; f = b[g++]; ) for (;d.indexOf(" " + f + " ") > -1; ) d = d.replace(" " + f + " ", " ");
                h = fa.trim(d), e !== h && c.setAttribute("class", h);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function(c) {
                fa(this).toggleClass(a.call(this, c, O(this), b), b);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) for (d = 0, e = fa(this), f = a.match(va) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || (b = O(this), 
                b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++]; ) if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var nb = /\r/g, ob = /[\x20\t\r\n\f]+/g;
    fa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = fa.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], 
                b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
            }
        }
    }), fa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = fa.find.attr(a, "value");
                    return null != b ? b : fa.trim(fa.text(a)).replace(ob, " ");
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                        if (b = fa(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), fa.each([ "radio", "checkbox" ], function() {
        fa.valHooks[this] = {
            set: function(a, b) {
                return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) > -1 : void 0;
            }
        }, da.checkOn || (fa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || X ], n = ca.call(b, "type") ? b.type : b, o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !pb.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : fa.makeArray(c, [ b ]), 
            l = fa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !fa.isWindow(d)) {
                    for (i = l.delegateType || n, pb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle"), k && k.apply(g, c), 
                k = j && g[j], k && k.apply && ya(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ya(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], 
                h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, 
                h && (d[j] = h)), b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = fa.extend(new fa.Event(), c, {
                type: a,
                isSimulated: !0
            });
            fa.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
        }
    }), fa.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                fa.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fa.event.trigger(a, b, c, !0) : void 0;
        }
    }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), fa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), da.focusin = "onfocusin" in a, da.focusin || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            fa.event.simulate(b, a.target, fa.event.fix(a));
        };
        fa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = za.access(d, b);
                e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = za.access(d, b) - 1;
                e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b));
            }
        };
    });
    var qb = a.location, rb = fa.now(), sb = /\?/;
    fa.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, fa.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), 
        c;
    };
    var tb = /#.*$/, ub = /([?&])_=[^&]*/, vb = /^(.*?):[ \t]*([^\r\n]*)$/gm, wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, xb = /^(?:GET|HEAD)$/, yb = /^\/\//, zb = {}, Ab = {}, Bb = "*/".concat("*"), Cb = X.createElement("a");
    Cb.href = qb.href, fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: wb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a);
        },
        ajaxPrefilter: P(zb),
        ajaxTransport: P(Ab),
        ajax: function(b, c) {
            function d(b, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, 
                j = b >= 200 && 300 > b || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), 
                j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), 
                v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, j = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), 
                w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), 
                w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [ w, m, j ? l : s ]), 
                q.fireWith(n, [ w, x ]), k && (o.trigger("ajaxComplete", [ w, m ]), --fa.active || fa.event.trigger("ajaxStop")));
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event, p = fa.Deferred(), q = fa.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!h) for (h = {}; b = vb.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [ r[b], a[b] ]; else w.always(a[w.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    return e && e.abort(b), d(0, b), this;
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || qb.href) + "").replace(tb, "").replace(yb, qb.protocol + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(va) || [ "" ], 
            null == m.crossDomain) {
                j = X.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = Cb.protocol + "//" + Cb.host != j.protocol + "//" + j.host;
                } catch (x) {
                    m.crossDomain = !0;
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), 
            Q(zb, m, c, w), 2 === u) return w;
            k = fa.event && m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !xb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (sb.test(f) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = ub.test(f) ? f.replace(ub, "$1_=" + rb++) : f + (sb.test(f) ? "&" : "?") + "_=" + rb++)), 
            m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), 
            fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (e = Q(Ab, m, c, w)) {
                if (w.readyState = 1, k && o.trigger("ajaxSend", [ w, m ]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, e.send(s, d);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return fa.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return fa.get(a, void 0, b, "script");
        }
    }), fa.each([ "get", "post" ], function(a, b) {
        fa[b] = function(a, c, d, e) {
            return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax(fa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, fa.isPlainObject(a) && a));
        };
    }), fa._evalUrl = function(a) {
        return fa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, fa.fn.extend({
        wrapAll: function(a) {
            var b;
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = fa(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = fa.isFunction(a);
            return this.each(function(c) {
                fa(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes);
            }).end();
        }
    }), fa.expr.filters.hidden = function(a) {
        return !fa.expr.filters.visible(a);
    }, fa.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
    };
    var Db = /%20/g, Eb = /\[\]$/, Fb = /\r?\n/g, Gb = /^(?:submit|button|image|reset|file)$/i, Hb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) U(c, a[c], b, e);
        return d.join("&").replace(Db, "+");
    }, fa.fn.extend({
        serialize: function() {
            return fa.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && Hb.test(this.nodeName) && !Gb.test(a) && (this.checked || !Ha.test(a));
            }).map(function(a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Fb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Fb, "\r\n")
                };
            }).get();
        }
    }), fa.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Ib = {
        0: 200,
        1223: 204
    }, Jb = fa.ajaxSettings.xhr();
    da.cors = !!Jb && "withCredentials" in Jb, da.ajax = Jb = !!Jb, fa.ajaxTransport(function(b) {
        var c, d;
        return da.cors || Jb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ib[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    }), fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return fa.globalEval(a), a;
            }
        }
    }), fa.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), fa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), X.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Kb = [], Lb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Kb.pop() || fa.expando + "_" + rb++;
            return this[a] = !0, a;
        }
    }), fa.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Lb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Lb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Lb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || fa.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? fa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Kb.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), fa.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || X;
        var d = oa.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = m([ a ], b, e), e && e.length && fa(e).remove(), 
        fa.merge([], d.childNodes));
    };
    var Mb = fa.fn.load;
    fa.fn.load = function(a, b, c) {
        if ("string" != typeof a && Mb) return Mb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && fa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, fa.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        fa.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), fa.expr.filters.animated = function(a) {
        return fa.grep(fa.timers, function(b) {
            return a === b.elem;
        }).length;
    }, fa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"), l = fa(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), 
            i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, fa.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                fa.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), 
            c = V(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), 
                d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === fa.css(a, "position"); ) a = a.offsetParent;
                return a || $a;
            });
        }
    }), fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        fa.fn[a] = function(d) {
            return xa(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), fa.each([ "top", "left" ], function(a, b) {
        fa.cssHooks[b] = B(da.pixelPosition, function(a, c) {
            return c ? (c = A(a, b), Xa.test(c) ? fa(a).position()[b] + "px" : c) : void 0;
        });
    }), fa.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        fa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            fa.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return xa(this, function(b, c, d) {
                    var e;
                    return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), fa.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        },
        size: function() {
            return this.length;
        }
    }), fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fa;
    });
    var Nb = a.jQuery, Ob = a.$;
    return fa.noConflict = function(b) {
        return a.$ === fa && (a.$ = Ob), b && a.jQuery === fa && (a.jQuery = Nb), fa;
    }, b || (a.jQuery = a.$ = fa), fa;
}), +function(a) {
    function b(b, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), 
        this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, 
        this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, 
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function(b) {
        var d = this, e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), 
        this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), 
            d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), 
        a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), 
        this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function(b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b();
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        });
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), function(a, b, c) {
    function d(a, b) {
        return b = b || Error, function() {
            var c, d, e = 2, f = arguments, g = f[0], h = "[" + (a ? a + ":" : "") + g + "] ", i = f[1];
            for (h += i.replace(/\{\d+\}/g, function(a) {
                var b = +a.slice(1, -1), c = b + e;
                return c < f.length ? ta(f[c]) : a;
            }), h += "\nhttp://errors.angularjs.org/1.4.10/" + (a ? a + "/" : "") + g, d = e, 
            c = "?"; d < f.length; d++, c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(ta(f[d]));
            return new b(h);
        };
    }
    function e(a) {
        if (null == a || C(a)) return !1;
        if (Rd(a) || x(a) || Fd && a instanceof Fd) return !0;
        var b = "length" in Object(a) && a.length;
        return y(b) && (b >= 0 && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
    }
    function f(a, b, c) {
        var d, g;
        if (a) if (A(a)) for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a); else if (Rd(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++) (h || d in a) && b.call(c, a[d], d, a);
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a); else if (w(a)) for (d in a) b.call(c, a[d], d, a); else if ("function" == typeof a.hasOwnProperty) for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a); else for (d in a) Ad.call(a, d) && b.call(c, a[d], d, a);
        return a;
    }
    function g(a, b, c) {
        for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d;
    }
    function h(a) {
        return function(b, c) {
            a(c, b);
        };
    }
    function i() {
        return ++Pd;
    }
    function j(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey;
    }
    function k(a, b, c) {
        for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
            var g = b[e];
            if (v(g) || A(g)) for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
                var m = h[i], n = g[m];
                c && v(n) ? z(n) ? a[m] = new Date(n.valueOf()) : B(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : K(n) ? a[m] = n.clone() : (v(a[m]) || (a[m] = Rd(n) ? [] : {}), 
                k(a[m], [ n ], !0)) : a[m] = n;
            }
        }
        return j(a, d), a;
    }
    function l(a) {
        return k(a, Id.call(arguments, 1), !1);
    }
    function m(a) {
        return k(a, Id.call(arguments, 1), !0);
    }
    function n(a) {
        return parseInt(a, 10);
    }
    function o(a, b) {
        return l(Object.create(a), b);
    }
    function p() {}
    function q(a) {
        return a;
    }
    function r(a) {
        return function() {
            return a;
        };
    }
    function s(a) {
        return A(a.toString) && a.toString !== Ld;
    }
    function t(a) {
        return "undefined" == typeof a;
    }
    function u(a) {
        return "undefined" != typeof a;
    }
    function v(a) {
        return null !== a && "object" == typeof a;
    }
    function w(a) {
        return null !== a && "object" == typeof a && !Md(a);
    }
    function x(a) {
        return "string" == typeof a;
    }
    function y(a) {
        return "number" == typeof a;
    }
    function z(a) {
        return "[object Date]" === Ld.call(a);
    }
    function A(a) {
        return "function" == typeof a;
    }
    function B(a) {
        return "[object RegExp]" === Ld.call(a);
    }
    function C(a) {
        return a && a.window === a;
    }
    function D(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function E(a) {
        return "[object File]" === Ld.call(a);
    }
    function F(a) {
        return "[object FormData]" === Ld.call(a);
    }
    function G(a) {
        return "[object Blob]" === Ld.call(a);
    }
    function H(a) {
        return "boolean" == typeof a;
    }
    function I(a) {
        return a && A(a.then);
    }
    function J(a) {
        return a && y(a.length) && Sd.test(Ld.call(a));
    }
    function K(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
    }
    function L(a) {
        var b, c = {}, d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c;
    }
    function M(a) {
        return zd(a.nodeName || a[0] && a[0].nodeName);
    }
    function N(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), c;
    }
    function O(a, b) {
        function c(a, b) {
            var c, e = b.$$hashKey;
            if (Rd(a)) for (var f = 0, g = a.length; g > f; f++) b.push(d(a[f])); else if (w(a)) for (c in a) b[c] = d(a[c]); else if (a && "function" == typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && (b[c] = d(a[c])); else for (c in a) Ad.call(a, c) && (b[c] = d(a[c]));
            return j(b, e), b;
        }
        function d(a) {
            if (!v(a)) return a;
            var b = e.indexOf(a);
            if (-1 !== b) return g[b];
            if (C(a) || D(a)) throw Nd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var d, f = !1;
            return Rd(a) ? (d = [], f = !0) : J(a) ? d = new a.constructor(a) : z(a) ? d = new Date(a.getTime()) : B(a) ? (d = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), 
            d.lastIndex = a.lastIndex) : G(a) ? d = new a.constructor([ a ], {
                type: a.type
            }) : A(a.cloneNode) ? d = a.cloneNode(!0) : (d = Object.create(Md(a)), f = !0), 
            e.push(a), g.push(d), f ? c(a, d) : d;
        }
        var e = [], g = [];
        if (b) {
            if (J(b)) throw Nd("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (a === b) throw Nd("cpi", "Can't copy! Source and destination are identical.");
            return Rd(b) ? b.length = 0 : f(b, function(a, c) {
                "$$hashKey" !== c && delete b[c];
            }), e.push(a), g.push(b), c(a, b);
        }
        return d(a);
    }
    function P(a, b) {
        if (Rd(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c];
        } else if (v(a)) {
            b = b || {};
            for (var e in a) "$" === e.charAt(0) && "$" === e.charAt(1) || (b[e] = a[e]);
        }
        return b || a;
    }
    function Q(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var c, d, e, f = typeof a, g = typeof b;
        if (f == g && "object" == f) {
            if (!Rd(a)) {
                if (z(a)) return z(b) ? Q(a.getTime(), b.getTime()) : !1;
                if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
                if (D(a) || D(b) || C(a) || C(b) || Rd(b) || z(b) || B(b)) return !1;
                e = qa();
                for (d in a) if ("$" !== d.charAt(0) && !A(a[d])) {
                    if (!Q(a[d], b[d])) return !1;
                    e[d] = !0;
                }
                for (d in b) if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d])) return !1;
                return !0;
            }
            if (!Rd(b)) return !1;
            if ((c = a.length) == b.length) {
                for (d = 0; c > d; d++) if (!Q(a[d], b[d])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function R(a, b, c) {
        return a.concat(Id.call(b, c));
    }
    function S(a, b) {
        return Id.call(a, b || 0);
    }
    function T(a, b) {
        var c = arguments.length > 2 ? S(arguments, 2) : [];
        return !A(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, R(c, arguments, 0)) : b.apply(a, c);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function U(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : C(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : D(d) && (e = "$SCOPE"), 
        e;
    }
    function V(a, b) {
        return t(a) ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, U, b));
    }
    function W(a) {
        return x(a) ? JSON.parse(a) : a;
    }
    function X(a, b) {
        a = a.replace(Xd, "");
        var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(c) ? b : c;
    }
    function Y(a, b) {
        return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a;
    }
    function Z(a, b, c) {
        c = c ? -1 : 1;
        var d = a.getTimezoneOffset(), e = X(b, d);
        return Y(a, c * (e - d));
    }
    function $(a) {
        a = Fd(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var c = Fd("<div>").append(a).html();
        try {
            return a[0].nodeType === be ? zd(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + zd(b);
            });
        } catch (b) {
            return zd(c);
        }
    }
    function _(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function aa(a) {
        var b = {};
        return f((a || "").split("&"), function(a) {
            var c, d, e;
            a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (d = a.substring(0, c), 
            e = a.substring(c + 1)), d = _(d), u(d) && (e = u(e) ? _(e) : !0, Ad.call(b, d) ? Rd(b[d]) ? b[d].push(e) : b[d] = [ b[d], e ] : b[d] = e));
        }), b;
    }
    function ba(a) {
        var b = [];
        return f(a, function(a, c) {
            Rd(a) ? f(a, function(a) {
                b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)));
            }) : b.push(da(c, !0) + (a === !0 ? "" : "=" + da(a, !0)));
        }), b.length ? b.join("&") : "";
    }
    function ca(a) {
        return da(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function da(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
    }
    function ea(a, b) {
        var c, d, e = Yd.length;
        for (d = 0; e > d; ++d) if (c = Yd[d] + b, x(c = a.getAttribute(c))) return c;
        return null;
    }
    function fa(a, b) {
        var c, d, e = {};
        f(Yd, function(b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e));
        }), f(Yd, function(b) {
            var e, f = b + "app";
            !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f));
        }), c && (e.strictDi = null !== ea(c, "strict-di"), b(c, d ? [ d ] : [], e));
    }
    function ga(c, d, e) {
        v(e) || (e = {});
        var g = {
            strictDi: !1
        };
        e = l(g, e);
        var h = function() {
            if (c = Fd(c), c.injector()) {
                var a = c[0] === b ? "document" : $(c);
                throw Nd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            d = d || [], d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]), e.debugInfoEnabled && d.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]), d.unshift("ng");
            var f = bb(d, e.strictDi);
            return f.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), f;
        }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), 
        a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Od.resumeBootstrap = function(a) {
            return f(a, function(a) {
                d.push(a);
            }), h();
        }, void (A(Od.resumeDeferredBootstrap) && Od.resumeDeferredBootstrap()));
    }
    function ha() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload();
    }
    function ia(a) {
        var b = Od.element(a).injector();
        if (!b) throw Nd("test", "no injector found for element argument to getTestability");
        return b.get("$$testability");
    }
    function ja(a, b) {
        return b = b || "_", a.replace(Zd, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function ka() {
        var b;
        if (!$d) {
            var d = Wd();
            Gd = t(d) ? a.jQuery : d ? a[d] : c, Gd && Gd.fn.on ? (Fd = Gd, l(Gd.fn, {
                scope: ue.scope,
                isolateScope: ue.isolateScope,
                controller: ue.controller,
                injector: ue.injector,
                inheritedData: ue.inheritedData
            }), b = Gd.cleanData, Gd.cleanData = function(a) {
                var c;
                if (Qd) Qd = !1; else for (var d, e = 0; null != (d = a[e]); e++) c = Gd._data(d, "events"), 
                c && c.$destroy && Gd(d).triggerHandler("$destroy");
                b(a);
            }) : Fd = Da, Od.element = Fd, $d = !0;
        }
    }
    function la(a, b, c) {
        if (!a) throw Nd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a;
    }
    function ma(a, b, c) {
        return c && Rd(a) && (a = a[a.length - 1]), la(A(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), 
        a;
    }
    function na(a, b) {
        if ("hasOwnProperty" === a) throw Nd("badname", "hasOwnProperty is not a valid {0} name", b);
    }
    function oa(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], 
        a && (a = (f = a)[d]);
        return !c && A(a) ? T(f, a) : a;
    }
    function pa(a) {
        for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++) (b || a[e] !== c) && (b || (b = Fd(Id.call(a, 0, e))), 
        b.push(c));
        return b || a;
    }
    function qa() {
        return Object.create(null);
    }
    function ra(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var c = d("$injector"), e = d("ng"), f = b(a, "angular", Object);
        return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
            var a = {};
            return function(d, f, g) {
                var h = function(a, b) {
                    if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b);
                };
                return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, b, c, d) {
                        return d || (d = e), function() {
                            return d[c || "push"]([ a, b, arguments ]), k;
                        };
                    }
                    function b(a, b) {
                        return function(c, f) {
                            return f && A(f) && (f.$$moduleName = d), e.push([ a, b, arguments ]), k;
                        };
                    }
                    if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                    var e = [], h = [], i = [], j = a("$injector", "invoke", "push", h), k = {
                        _invokeQueue: e,
                        _configBlocks: h,
                        _runBlocks: i,
                        requires: f,
                        name: d,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator"),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        config: j,
                        run: function(a) {
                            return i.push(a), this;
                        }
                    };
                    return g && j(g), k;
                });
            };
        });
    }
    function sa(a) {
        var b = [];
        return JSON.stringify(a, function(a, c) {
            if (c = U(a, c), v(c)) {
                if (b.indexOf(c) >= 0) return "...";
                b.push(c);
            }
            return c;
        });
    }
    function ta(a) {
        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : t(a) ? "undefined" : "string" != typeof a ? sa(a) : a;
    }
    function ua(b) {
        l(b, {
            bootstrap: ga,
            copy: O,
            extend: l,
            merge: m,
            equals: Q,
            element: Fd,
            forEach: f,
            injector: bb,
            noop: p,
            bind: T,
            toJson: V,
            fromJson: W,
            identity: q,
            isUndefined: t,
            isDefined: u,
            isString: x,
            isFunction: A,
            isObject: v,
            isNumber: y,
            isElement: K,
            isArray: Rd,
            version: fe,
            isDate: z,
            lowercase: zd,
            uppercase: Bd,
            callbacks: {
                counter: 0
            },
            getTestability: ia,
            $$minErr: d,
            $$csp: Vd,
            reloadWithDebugInfo: ha
        }), (Hd = ra(a))("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: tc
            }), a.provider("$compile", lb).directive({
                a: zf,
                input: Sf,
                textarea: Sf,
                form: Ef,
                script: Kg,
                select: Ng,
                style: Pg,
                option: Og,
                ngBind: Vf,
                ngBindHtml: Xf,
                ngBindTemplate: Wf,
                ngClass: Zf,
                ngClassEven: _f,
                ngClassOdd: $f,
                ngCloak: ag,
                ngController: bg,
                ngForm: Ff,
                ngHide: Eg,
                ngIf: eg,
                ngInclude: fg,
                ngInit: hg,
                ngNonBindable: vg,
                ngPluralize: zg,
                ngRepeat: Ag,
                ngShow: Dg,
                ngStyle: Fg,
                ngSwitch: Gg,
                ngSwitchWhen: Hg,
                ngSwitchDefault: Ig,
                ngOptions: yg,
                ngTransclude: Jg,
                ngModel: sg,
                ngList: ig,
                ngChange: Yf,
                pattern: Rg,
                ngPattern: Rg,
                required: Qg,
                ngRequired: Qg,
                minlength: Tg,
                ngMinlength: Tg,
                maxlength: Sg,
                ngMaxlength: Sg,
                ngValue: Uf,
                ngModelOptions: ug
            }).directive({
                ngInclude: gg
            }).directive(Af).directive(cg), a.provider({
                $anchorScroll: cb,
                $animate: Je,
                $animateCss: Me,
                $$animateJs: He,
                $$animateQueue: Ie,
                $$AnimateRunner: Le,
                $$animateAsyncRun: Ke,
                $browser: ib,
                $cacheFactory: jb,
                $controller: qb,
                $document: rb,
                $exceptionHandler: sb,
                $filter: Hc,
                $$forceReflow: Re,
                $interpolate: Gb,
                $interval: Hb,
                $http: Cb,
                $httpParamSerializer: ub,
                $httpParamSerializerJQLike: vb,
                $httpBackend: Eb,
                $xhrFactory: Db,
                $location: Vb,
                $log: Wb,
                $parse: nc,
                $rootScope: sc,
                $q: oc,
                $$q: pc,
                $sce: xc,
                $sceDelegate: wc,
                $sniffer: yc,
                $templateCache: kb,
                $templateRequest: zc,
                $$testability: Ac,
                $timeout: Bc,
                $window: Ec,
                $$rAF: rc,
                $$jqLite: Ya,
                $$HashMap: ye,
                $$cookieReader: Gc
            });
        } ]);
    }
    function va() {
        return ++he;
    }
    function wa(a) {
        return a.replace(ke, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(le, "Moz$1");
    }
    function xa(a) {
        return !pe.test(a);
    }
    function ya(a) {
        var b = a.nodeType;
        return b === _d || !b || b === de;
    }
    function za(a) {
        for (var b in ge[a.ng339]) return !0;
        return !1;
    }
    function Aa(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(), i = [];
        if (xa(a)) i.push(b.createTextNode(a)); else {
            for (c = c || h.appendChild(b.createElement("div")), d = (qe.exec(a) || [ "", "" ])[1].toLowerCase(), 
            e = se[d] || se._default, c.innerHTML = e[1] + a.replace(re, "<$1></$2>") + e[2], 
            g = e[0]; g--; ) c = c.lastChild;
            i = R(i, c.childNodes), c = h.firstChild, c.textContent = "";
        }
        return h.textContent = "", h.innerHTML = "", f(i, function(a) {
            h.appendChild(a);
        }), h;
    }
    function Ba(a, c) {
        c = c || b;
        var d;
        return (d = oe.exec(a)) ? [ c.createElement(d[1]) ] : (d = Aa(a, c)) ? d.childNodes : [];
    }
    function Ca(a, b) {
        var c = a.parentNode;
        c && c.replaceChild(b, a), b.appendChild(a);
    }
    function Da(a) {
        if (a instanceof Da) return a;
        var b;
        if (x(a) && (a = Td(a), b = !0), !(this instanceof Da)) {
            if (b && "<" != a.charAt(0)) throw ne("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Da(a);
        }
        b ? Na(this, Ba(a)) : Na(this, a);
    }
    function Ea(a) {
        return a.cloneNode(!0);
    }
    function Fa(a, b) {
        if (b || Ha(a), a.querySelectorAll) for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ha(c[d]);
    }
    function Ga(a, b, c, d) {
        if (u(d)) throw ne("offargs", "jqLite#off() does not support the `selector` argument");
        var e = Ia(a), g = e && e.events, h = e && e.handle;
        if (h) if (b) {
            var i = function(b) {
                var d = g[b];
                u(c) && N(d || [], c), u(c) && d && d.length > 0 || (je(a, b, h), delete g[b]);
            };
            f(b.split(" "), function(a) {
                i(a), me[a] && i(me[a]);
            });
        } else for (b in g) "$destroy" !== b && je(a, b, h), delete g[b];
    }
    function Ha(a, b) {
        var d = a.ng339, e = d && ge[d];
        if (e) {
            if (b) return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Ga(a)), delete ge[d], 
            a.ng339 = c;
        }
    }
    function Ia(a, b) {
        var d = a.ng339, e = d && ge[d];
        return b && !e && (a.ng339 = d = va(), e = ge[d] = {
            events: {},
            data: {},
            handle: c
        }), e;
    }
    function Ja(a, b, c) {
        if (ya(a)) {
            var d = u(c), e = !d && b && !v(b), f = !b, g = Ia(a, !e), h = g && g.data;
            if (d) h[b] = c; else {
                if (f) return h;
                if (e) return h && h[b];
                l(h, b);
            }
        }
    }
    function Ka(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1;
    }
    function La(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", Td((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Td(b) + " ", " ")));
        });
    }
    function Ma(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = Td(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), a.setAttribute("class", Td(c));
        }
    }
    function Na(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b; else {
            var c = b.length;
            if ("number" == typeof c && b.window !== b) {
                if (c) for (var d = 0; c > d; d++) a[a.length++] = b[d];
            } else a[a.length++] = b;
        }
    }
    function Oa(a, b) {
        return Pa(a, "$" + (b || "ngController") + "Controller");
    }
    function Pa(a, b, c) {
        a.nodeType == de && (a = a.documentElement);
        for (var d = Rd(b) ? b : [ b ]; a; ) {
            for (var e = 0, f = d.length; f > e; e++) if (u(c = Fd.data(a, d[e]))) return c;
            a = a.parentNode || a.nodeType === ee && a.host;
        }
    }
    function Qa(a) {
        for (Fa(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Ra(a, b) {
        b || Fa(a);
        var c = a.parentNode;
        c && c.removeChild(a);
    }
    function Sa(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Fd(c).on("load", b);
    }
    function Ta(a, b) {
        var c = ve[b.toLowerCase()];
        return c && we[M(a)] && c;
    }
    function Ua(a) {
        return xe[a];
    }
    function Va(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented;
            };
            var e = b[d || c.type], f = e ? e.length : 0;
            if (f) {
                if (t(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function() {
                    return c.immediatePropagationStopped === !0;
                };
                var h = e.specialHandlerWrapper || Wa;
                f > 1 && (e = P(e));
                for (var i = 0; f > i; i++) c.isImmediatePropagationStopped() || h(a, c, e[i]);
            }
        };
        return c.elem = a, c;
    }
    function Wa(a, b, c) {
        c.call(a, b);
    }
    function Xa(a, b, c) {
        var d = b.relatedTarget;
        d && (d === a || te.call(a, d)) || c.call(a, b);
    }
    function Ya() {
        this.$get = function() {
            return l(Da, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), Ka(a, b);
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), Ma(a, b);
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), La(a, b);
                }
            });
        };
    }
    function Za(a, b) {
        var c = a && a.$$hashKey;
        if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a;
    }
    function $a(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        f(a, this.put, this);
    }
    function _a(a) {
        var b = a.toString().replace(Ce, ""), c = b.match(ze);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function ab(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw x(c) && c || (c = a.name || _a(a)), De("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(Ce, ""), g = e.match(ze), f(g[1].split(Ae), function(a) {
                        a.replace(Be, function(a, b, c) {
                            d.push(c);
                        });
                    });
                }
                a.$inject = d;
            }
        } else Rd(a) ? (h = a.length - 1, ma(a[h], "fn"), d = a.slice(0, h)) : ma(a, "fn", !0);
        return d;
    }
    function bb(a, b) {
        function d(a) {
            return function(b, c) {
                return v(b) ? void f(b, h(a)) : a(b, c);
            };
        }
        function e(a, b) {
            if (na(a, "service"), (A(b) || Rd(b)) && (b = y.instantiate(b)), !b.$get) throw De("pget", "Provider '{0}' must define $get factory method.", a);
            return w[a + q] = b;
        }
        function g(a, b) {
            return function() {
                var c = B.invoke(b, this);
                if (t(c)) throw De("undef", "Provider '{0}' must return a value from $get factory method.", a);
                return c;
            };
        }
        function i(a, b, c) {
            return e(a, {
                $get: c !== !1 ? g(a, b) : b
            });
        }
        function j(a, b) {
            return i(a, [ "$injector", function(a) {
                return a.instantiate(b);
            } ]);
        }
        function k(a, b) {
            return i(a, r(b), !1);
        }
        function l(a, b) {
            na(a, "constant"), w[a] = b, z[a] = b;
        }
        function m(a, b) {
            var c = y.get(a + q), d = c.$get;
            c.$get = function() {
                var a = B.invoke(d, c);
                return B.invoke(b, null, {
                    $delegate: a
                });
            };
        }
        function n(a) {
            la(t(a) || Rd(a), "modulesToLoad", "not an array");
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b], e = y.get(d[0]);
                        e[d[1]].apply(e, d[2]);
                    }
                }
                if (!u.get(a)) {
                    u.put(a, !0);
                    try {
                        x(a) ? (b = Hd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), 
                        d(b._configBlocks)) : A(a) ? c.push(y.invoke(a)) : Rd(a) ? c.push(y.invoke(a)) : ma(a, "module");
                    } catch (e) {
                        throw Rd(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        De("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e);
                    }
                }
            }), c;
        }
        function o(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === p) throw De("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
                    return a[b];
                }
                try {
                    return s.unshift(b), a[b] = p, a[b] = c(b, d);
                } catch (e) {
                    throw a[b] === p && delete a[b], e;
                } finally {
                    s.shift();
                }
            }
            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [], k = bb.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw De("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f));
                }
                return Rd(a) && (a = a[g]), a.apply(c, j);
            }
            function f(a, b, c) {
                var d = Object.create((Rd(a) ? a[a.length - 1] : a).prototype || null), f = e(a, d, b, c);
                return v(f) || A(f) ? f : d;
            }
            return {
                invoke: e,
                instantiate: f,
                get: d,
                annotate: bb.$$annotate,
                has: function(b) {
                    return w.hasOwnProperty(b + q) || a.hasOwnProperty(b);
                }
            };
        }
        b = b === !0;
        var p = {}, q = "Provider", s = [], u = new $a([], !0), w = {
            $provide: {
                provider: d(e),
                factory: d(i),
                service: d(j),
                value: d(k),
                constant: d(l),
                decorator: m
            }
        }, y = w.$injector = o(w, function(a, b) {
            throw Od.isString(b) && s.push(b), De("unpr", "Unknown provider: {0}", s.join(" <- "));
        }), z = {}, B = z.$injector = o(z, function(a, b) {
            var d = y.get(a + q, b);
            return B.invoke(d.$get, d, c, a);
        });
        return f(n(a), function(a) {
            a && B.invoke(a);
        }), B;
    }
    function cb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === M(a) ? (b = a, !0) : void 0;
                }), b;
            }
            function f() {
                var a = h.yOffset;
                if (A(a)) a = a(); else if (K(a)) {
                    var c = a[0], d = b.getComputedStyle(c);
                    a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom;
                } else y(a) || (a = 0);
                return a;
            }
            function g(a) {
                if (a) {
                    a.scrollIntoView();
                    var c = f();
                    if (c) {
                        var d = a.getBoundingClientRect().top;
                        b.scrollBy(0, d - c);
                    }
                } else b.scrollTo(0, 0);
            }
            function h(a) {
                a = x(a) ? a : c.hash();
                var b;
                a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null);
            }
            var i = b.document;
            return a && d.$watch(function() {
                return c.hash();
            }, function(a, b) {
                a === b && "" === a || Sa(function() {
                    d.$evalAsync(h);
                });
            }), h;
        } ];
    }
    function db(a, b) {
        return a || b ? a ? b ? (Rd(a) && (a = a.join(" ")), Rd(b) && (b = b.join(" ")), 
        a + " " + b) : a : b : "";
    }
    function eb(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.nodeType === Fe) return c;
        }
    }
    function fb(a) {
        x(a) && (a = a.split(" "));
        var b = qa();
        return f(a, function(a) {
            a.length && (b[a] = !0);
        }), b;
    }
    function gb(a) {
        return v(a) ? a : {};
    }
    function hb(a, b, c, d) {
        function e(a) {
            try {
                a.apply(null, S(arguments, 1));
            } finally {
                if (s--, 0 === s) for (;u.length; ) try {
                    u.pop()();
                } catch (b) {
                    c.error(b);
                }
            }
        }
        function g(a) {
            var b = a.indexOf("#");
            return -1 === b ? "" : a.substr(b);
        }
        function h() {
            z = null, j(), k();
        }
        function i() {
            try {
                return n.state;
            } catch (a) {}
        }
        function j() {
            v = i(), v = t(v) ? null : v, Q(v, C) && (v = C), C = v;
        }
        function k() {
            x === l.url() && w === v || (x = l.url(), w = v, f(A, function(a) {
                a(l.url(), v);
            }));
        }
        var l = this, m = (b[0], a.location), n = a.history, o = a.setTimeout, q = a.clearTimeout, r = {};
        l.isMock = !1;
        var s = 0, u = [];
        l.$$completeOutstandingRequest = e, l.$$incOutstandingRequestCount = function() {
            s++;
        }, l.notifyWhenNoOutstandingRequests = function(a) {
            0 === s ? a() : u.push(a);
        };
        var v, w, x = m.href, y = b.find("base"), z = null;
        j(), w = v, l.url = function(b, c, e) {
            if (t(e) && (e = null), m !== a.location && (m = a.location), n !== a.history && (n = a.history), 
            b) {
                var f = w === e;
                if (x === b && (!d.history || f)) return l;
                var h = x && Mb(x) === Mb(b);
                return x = b, w = e, !d.history || h && f ? (h && !z || (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b, 
                m.href !== b && (z = b)) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), 
                w = v), l;
            }
            return z || m.href.replace(/%27/g, "'");
        }, l.state = function() {
            return v;
        };
        var A = [], B = !1, C = null;
        l.onUrlChange = function(b) {
            return B || (d.history && Fd(a).on("popstate", h), Fd(a).on("hashchange", h), B = !0), 
            A.push(b), b;
        }, l.$$applicationDestroyed = function() {
            Fd(a).off("hashchange popstate", h);
        }, l.$$checkUrlChange = k, l.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        }, l.defer = function(a, b) {
            var c;
            return s++, c = o(function() {
                delete r[c], e(a);
            }, b || 0), r[c] = !0, c;
        }, l.defer.cancel = function(a) {
            return r[a] ? (delete r[a], q(a), e(p), !0) : !1;
        };
    }
    function ib() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new hb(a, d, b, c);
        } ];
    }
    function jb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                var g = 0, h = l({}, c, {
                    id: a
                }), i = qa(), j = c && c.capacity || Number.MAX_VALUE, k = qa(), m = null, n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (!t(b)) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {
                                    key: a
                                });
                                e(c);
                            }
                            return a in i || g++, i[a] = b, g > j && this.remove(n.key), b;
                        }
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b);
                        }
                        return i[a];
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a];
                        }
                        a in i && (delete i[a], g--);
                    },
                    removeAll: function() {
                        i = qa(), g = 0, k = qa(), m = n = null;
                    },
                    destroy: function() {
                        i = null, h = null, k = null, delete b[a];
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info();
                }), a;
            }, a.get = function(a) {
                return b[a];
            }, a;
        };
    }
    function kb() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function lb(a, d) {
        function e(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            return f(a, function(a, f) {
                if (a in z) return void (e[f] = z[a]);
                var g = a.match(d);
                if (!g) throw Ne("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                }, g[4] && (z[a] = e[f]);
            }), e;
        }
        function g(a, b) {
            var c = {
                isolateScope: null,
                bindToController: null
            };
            if (v(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), 
            c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), v(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), 
            v(c.bindToController)) {
                var d = a.controller, f = a.controllerAs;
                if (!d) throw Ne("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
                if (!pb(d, f)) throw Ne("noident", "Cannot bind to controller without identifier for directive '{0}'.", b);
            }
            return c;
        }
        function i(a) {
            var b = a.charAt(0);
            if (!b || b !== zd(b)) throw Ne("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
            if (a !== a.trim()) throw Ne("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a);
        }
        var j = {}, k = "Directive", m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, n = /(([\w\-]+)(?:\:([^;]+))?;?)/, s = L("ngSrc,ngSrcset,src,srcset"), w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, y = /^(on[a-z]+|formaction)$/, z = qa();
        this.directive = function C(b, c) {
            return na(b, "directive"), x(b) ? (i(b), la(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], 
            a.factory(b + k, [ "$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(j[b], function(e, f) {
                    try {
                        var g = a.invoke(e);
                        A(g) ? g = {
                            compile: r(g)
                        } : !g.compile && g.link && (g.compile = r(g.link)), g.priority = g.priority || 0, 
                        g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, 
                        g.restrict = g.restrict || "EA", g.$$moduleName = e.$$moduleName, d.push(g);
                    } catch (h) {
                        c(h);
                    }
                }), d;
            } ])), j[b].push(c)) : f(b, h(C)), this;
        }, this.aHrefSanitizationWhitelist = function(a) {
            return u(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist();
        };
        var B = !0;
        this.debugInfoEnabled = function(a) {
            return u(a) ? (B = a, this) : B;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, h, i, r, u, z, C, E) {
            function F(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function G(a, c, d, e, f) {
                a instanceof Fd || (a = Fd(a));
                for (var g = /\S+/, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.nodeType === be && j.nodeValue.match(g) && Ca(j, a[h] = b.createElement("span"));
                }
                var k = J(a, c, a, d, e, f);
                G.$$addScopeClass(a);
                var l = null;
                return function(b, c, d) {
                    la(b, "scope"), f && f.needsNewScope && (b = b.$parent.$new()), d = d || {};
                    var e = d.parentBoundTranscludeFn, g = d.transcludeControllers, h = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude), l || (l = I(h));
                    var i;
                    if (i = "html" !== l ? Fd(aa(l, Fd("<div>").append(a).html())) : c ? ue.clone.call(a) : a, 
                    g) for (var j in g) i.data("$" + j + "Controller", g[j].instance);
                    return G.$$addScopeInfo(i, b), c && c(i, b), k && k(b, i, i, e), i;
                };
            }
            function I(a) {
                var b = a && a[0];
                return b && "foreignobject" !== M(b) && b.toString().match(/SVG/) ? "svg" : "html";
            }
            function J(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m];
                    } else q = d;
                    for (k = 0, l = p.length; l > k; ) i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), 
                    G.$$addScopeInfo(Fd(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, 
                    g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f);
                }
                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new ha(), j = L(a[q], [], i, 0 === q ? e : c, f), 
                k = j.length ? R(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && G.$$addScopeClass(i.$$element), 
                m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : J(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), 
                (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null;
            }
            function K(a, b, c) {
                var d = function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    });
                };
                return d;
            }
            function L(a, b, c, d, e) {
                var f, g, h = a.nodeType, i = c.$attr;
                switch (h) {
                  case _d:
                    U(b, mb(M(a)), "E", d, e);
                    for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                        var u = !1, w = !1;
                        j = r[s], k = j.name, p = Td(j.value), o = mb(k), (q = na.test(o)) && (k = k.replace(Oe, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        }));
                        var y = o.match(oa);
                        y && V(y[1]) && (u = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), 
                        l = mb(k.toLowerCase()), i[l] = k, !q && c.hasOwnProperty(l) || (c[l] = p, Ta(a, l) && (c[l] = !0)), 
                        ca(a, b, p, l, q), U(b, l, "A", d, e, u, w);
                    }
                    if (g = a.className, v(g) && (g = g.animVal), x(g) && "" !== g) for (;f = n.exec(g); ) l = mb(f[2]), 
                    U(b, l, "C", d, e) && (c[l] = Td(f[3])), g = g.substr(f.index + f[0].length);
                    break;

                  case be:
                    if (11 === Ed) for (;a.parentNode && a.nextSibling && a.nextSibling.nodeType === be; ) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, 
                    a.parentNode.removeChild(a.nextSibling);
                    _(b, a.nodeValue);
                    break;

                  case ce:
                    try {
                        f = m.exec(a.nodeValue), f && (l = mb(f[1]), U(b, l, "M", d, e) && (c[l] = Td(f[2])));
                    } catch (z) {}
                }
                return b.sort(Y), b;
            }
            function O(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw Ne("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == _d && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return Fd(d);
            }
            function P(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = O(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function R(a, d, f, g, h, i, j, k, l) {
                function m(a, b, c, d) {
                    a && (c && (a = P(a, c, d)), a.require = q.require, a.directiveName = s, (E === q || q.$$isolateScope) && (a = ea(a, {
                        isolateScope: !0
                    })), j.push(a)), b && (c && (b = P(b, c, d)), b.require = q.require, b.directiveName = s, 
                    (E === q || q.$$isolateScope) && (b = ea(b, {
                        isolateScope: !0
                    })), k.push(b));
                }
                function n(a, b, c, d) {
                    var e;
                    if (x(b)) {
                        var f = b.match(w), g = b.substring(f[0].length), h = f[1] || f[3], i = "?" === f[2];
                        if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
                            var j = "$" + g + "Controller";
                            e = h ? c.inheritedData(j) : c.data(j);
                        }
                        if (!e && !i) throw Ne("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a);
                    } else if (Rd(b)) {
                        e = [];
                        for (var k = 0, l = b.length; l > k; k++) e[k] = n(a, b[k], c, d);
                    }
                    return e || null;
                }
                function o(a, b, c, d, e, f) {
                    var g = qa();
                    for (var h in d) {
                        var i = d[h], j = {
                            $scope: i === E || i.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        }, k = i.controller;
                        "@" == k && (k = b[i.name]);
                        var l = r(k, j, !0, i.controllerAs);
                        g[i.name] = l, a.data("$" + i.name + "Controller", l.instance);
                    }
                    return g;
                }
                function p(a, b, e, g, h) {
                    function i(a, b, d) {
                        var e;
                        return D(a) || (d = b, b = a, a = c), K && (e = q), d || (d = K ? s.parent() : s), 
                        h(a, b, e, d, H);
                    }
                    var l, m, p, q, r, s, t, u, v;
                    d === e ? (t = f, s = f.$$element) : (s = Fd(e), t = new ha(s, f)), p = b, E ? m = b.$new(!0) : B && (p = b.$parent), 
                    h && (r = i, r.$$boundTransclude = h), C && (q = o(s, t, r, C, m, b)), E && (G.$$addScopeInfo(s, m, !0, !(F && (F === E || F === E.$$originalDirective))), 
                    G.$$addScopeClass(s, !0), m.$$isolateBindings = E.$$isolateBindings, u = ga(b, t, m, m.$$isolateBindings, E), 
                    u && m.$on("$destroy", u));
                    for (var w in q) {
                        var x = C[w], y = q[w], z = x.$$bindings.bindToController;
                        y.identifier && z && (v = ga(p, t, y.instance, z, x));
                        var A = y();
                        A !== y.instance && (y.instance = A, s.data("$" + x.name + "Controller", A), v && v(), 
                        v = ga(p, t, y.instance, z, x));
                    }
                    for (R = 0, U = j.length; U > R; R++) l = j[R], fa(l, l.isolateScope ? m : b, s, t, l.require && n(l.directiveName, l.require, s, q), r);
                    var H = b;
                    for (E && (E.template || null === E.templateUrl) && (H = m), a && a(H, e.childNodes, c, h), 
                    R = k.length - 1; R >= 0; R--) l = k[R], fa(l, l.isolateScope ? m : b, s, t, l.require && n(l.directiveName, l.require, s, q), r);
                }
                l = l || {};
                for (var q, s, t, u, y, z = -Number.MAX_VALUE, B = l.newScopeDirective, C = l.controllerDirectives, E = l.newIsolateScopeDirective, F = l.templateDirective, H = l.nonTlbTranscludeDirective, I = !1, J = !1, K = l.hasElementTranscludeDirective, M = f.$$element = Fd(d), N = i, Q = g, R = 0, U = a.length; U > R; R++) {
                    q = a[R];
                    var V = q.$$start, Y = q.$$end;
                    if (V && (M = O(d, V, Y)), t = c, z > q.priority) break;
                    if ((y = q.scope) && (q.templateUrl || (v(y) ? (Z("new/isolated scope", E || B, q, M), 
                    E = q) : Z("new/isolated scope", E, q, M)), B = B || q), s = q.name, !q.templateUrl && q.controller && (y = q.controller, 
                    C = C || qa(), Z("'" + s + "' controller", C[s], q, M), C[s] = q), (y = q.transclude) && (I = !0, 
                    q.$$tlb || (Z("transclusion", H, q, M), H = q), "element" == y ? (K = !0, z = q.priority, 
                    t = M, M = f.$$element = Fd(b.createComment(" " + s + ": " + f[s] + " ")), d = M[0], 
                    da(h, S(t), d), Q = G(t, g, z, N && N.name, {
                        nonTlbTranscludeDirective: H
                    })) : (t = Fd(Ea(d)).contents(), M.empty(), Q = G(t, g, c, c, {
                        needsNewScope: q.$$isolateScope || q.$$newScope
                    }))), q.template) if (J = !0, Z("template", F, q, M), F = q, y = A(q.template) ? q.template(M, f) : q.template, 
                    y = ma(y), q.replace) {
                        if (N = q, t = xa(y) ? [] : ob(aa(q.templateNamespace, Td(y))), d = t[0], 1 != t.length || d.nodeType !== _d) throw Ne("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
                        da(h, M, d);
                        var _ = {
                            $attr: {}
                        }, ba = L(d, [], _), ca = a.splice(R + 1, a.length - (R + 1));
                        (E || B) && T(ba, E, B), a = a.concat(ba).concat(ca), W(f, _), U = a.length;
                    } else M.html(y);
                    if (q.templateUrl) J = !0, Z("template", F, q, M), F = q, q.replace && (N = q), 
                    p = X(a.splice(R, a.length - R), M, f, h, I && Q, j, k, {
                        controllerDirectives: C,
                        newScopeDirective: B !== q && B,
                        newIsolateScopeDirective: E,
                        templateDirective: F,
                        nonTlbTranscludeDirective: H
                    }), U = a.length; else if (q.compile) try {
                        u = q.compile(M, f, Q), A(u) ? m(null, u, V, Y) : u && m(u.pre, u.post, V, Y);
                    } catch (ia) {
                        e(ia, $(M));
                    }
                    q.terminal && (p.terminal = !0, z = Math.max(z, q.priority));
                }
                return p.scope = B && B.scope === !0, p.transcludeOnThisElement = I, p.templateOnThisElement = J, 
                p.transclude = Q, l.hasElementTranscludeDirective = K, p;
            }
            function T(a, b, c) {
                for (var d = 0, e = a.length; e > d; d++) a[d] = o(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                });
            }
            function U(b, c, d, f, h, i, l) {
                if (c === h) return null;
                var m = null;
                if (j.hasOwnProperty(c)) for (var n, p = a.get(c + k), q = 0, r = p.length; r > q; q++) try {
                    if (n = p[q], (t(f) || f > n.priority) && -1 != n.restrict.indexOf(d)) {
                        if (i && (n = o(n, {
                            $$start: i,
                            $$end: l
                        })), !n.$$bindings) {
                            var s = n.$$bindings = g(n, n.name);
                            v(s.isolateScope) && (n.$$isolateBindings = s.isolateScope);
                        }
                        b.push(n), m = n;
                    }
                } catch (u) {
                    e(u);
                }
                return m;
            }
            function V(b) {
                if (j.hasOwnProperty(b)) for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++) if (c = d[e], 
                c.multiElement) return !0;
                return !1;
            }
            function W(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), f(b, function(b, f) {
                    "class" == f ? (F(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function X(a, b, c, d, e, g, i, j) {
                var k, l, m = [], n = b[0], p = a.shift(), q = o(p, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: p
                }), r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                return b.empty(), h(r).then(function(h) {
                    var o, t, u, w;
                    if (h = ma(h), p.replace) {
                        if (u = xa(h) ? [] : ob(aa(s, Td(h))), o = u[0], 1 != u.length || o.nodeType !== _d) throw Ne("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                        t = {
                            $attr: {}
                        }, da(d, b, o);
                        var x = L(o, [], t);
                        v(p.scope) && T(x, !0), a = x.concat(a), W(c, t);
                    } else o = n, b.html(h);
                    for (a.unshift(q), k = R(a, o, c, e, b, p, g, i, j), f(d, function(a, c) {
                        a == o && (d[c] = b[0]);
                    }), l = J(b[0].childNodes, e); m.length; ) {
                        var y = m.shift(), z = m.shift(), A = m.shift(), B = m.shift(), C = b[0];
                        if (!y.$$destroyed) {
                            if (z !== n) {
                                var D = z.className;
                                j.hasElementTranscludeDirective && p.replace || (C = Ea(o)), da(A, Fd(z), C), F(Fd(C), D);
                            }
                            w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(l, y, C, d, w);
                        }
                    }
                    m = null;
                }), function(a, b, c, d, e) {
                    var f = e;
                    b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), 
                    k(l, b, c, d, f)));
                };
            }
            function Y(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function Z(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : "";
                }
                if (b) throw Ne("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, $(d));
            }
            function _(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent(), d = !!b.length;
                        return d && G.$$addBindingClass(b), function(a, b) {
                            var e = b.parent();
                            d || G.$$addBindingClass(e), G.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                b[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function aa(a, c) {
                switch (a = zd(a || "html")) {
                  case "svg":
                  case "math":
                    var d = b.createElement("div");
                    return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;

                  default:
                    return c;
                }
            }
            function ba(a, b) {
                if ("srcdoc" == b) return z.HTML;
                var c = M(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? z.RESOURCE_URL : void 0;
            }
            function ca(a, b, c, e, f) {
                var g = ba(a, e);
                f = s[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === M(a)) throw Ne("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", $(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, b, i) {
                                    var j = i.$$observers || (i.$$observers = qa());
                                    if (y.test(e)) throw Ne("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var k = i[e];
                                    k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, 
                                    (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function da(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                    a[e++] = d;
                    for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                    a.length -= h - 1, a.context === g && (a.context = d);
                    break;
                }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), Fd.hasData(g) && (Fd.data(d, Fd.data(g)), Gd ? (Qd = !0, Gd.cleanData([ g ])) : delete Fd.cache[g[Fd.expando]]);
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    Fd(p).remove(), m.appendChild(p), delete c[n];
                }
                c[0] = d, c.length = 1;
            }
            function ea(a, b) {
                return l(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function fa(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g);
                } catch (h) {
                    e(h, $(c));
                }
            }
            function ga(a, b, c, e, g) {
                var h = [];
                return f(e, function(e, f) {
                    var j, k, l, m, n = e.attrName, o = e.optional, q = e.mode;
                    switch (q) {
                      case "@":
                        o || Ad.call(b, n) || (c[f] = b[n] = void 0), b.$observe(n, function(a) {
                            x(a) && (c[f] = a);
                        }), b.$$observers[n].$$scope = a, j = b[n], x(j) ? c[f] = d(j)(a) : H(j) && (c[f] = j);
                        break;

                      case "=":
                        if (!Ad.call(b, n)) {
                            if (o) break;
                            b[n] = void 0;
                        }
                        if (o && !b[n]) break;
                        k = i(b[n]), m = k.literal ? Q : function(a, b) {
                            return a === b || a !== a && b !== b;
                        }, l = k.assign || function() {
                            throw j = c[f] = k(a), Ne("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", b[n], n, g.name);
                        }, j = c[f] = k(a);
                        var r = function(b) {
                            return m(b, c[f]) || (m(b, j) ? l(a, b = c[f]) : c[f] = b), j = b;
                        };
                        r.$stateful = !0;
                        var s;
                        s = e.collection ? a.$watchCollection(b[n], r) : a.$watch(i(b[n], r), null, k.literal), 
                        h.push(s);
                        break;

                      case "&":
                        if (k = b.hasOwnProperty(n) ? i(b[n]) : p, k === p && o) break;
                        c[f] = function(b) {
                            return k(a, b);
                        };
                    }
                }), h.length && function() {
                    for (var a = 0, b = h.length; b > a; ++a) h[a]();
                };
            }
            var ha = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e];
                } else this.$attr = {};
                this.$$element = a;
            };
            ha.prototype = {
                $normalize: mb,
                $addClass: function(a) {
                    a && a.length > 0 && C.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && a.length > 0 && C.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = nb(a, b);
                    c && c.length && C.addClass(this.$$element, c);
                    var d = nb(b, a);
                    d && d.length && C.removeClass(this.$$element, d);
                },
                $set: function(a, b, c, d) {
                    var g, h = this.$$element[0], i = Ta(h, a), j = Ua(a), k = a;
                    if (i ? (this.$$element.prop(a, b), d = i) : j && (this[j] = b, k = j), this[a] = b, 
                    d ? this.$attr[a] = d : (d = this.$attr[a], d || (this.$attr[a] = d = ja(a, "-"))), 
                    g = M(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = E(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var l = "", m = Td(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), r = 0; q > r; r++) {
                            var s = 2 * r;
                            l += E(Td(p[s]), !0), l += " " + Td(p[s + 1]);
                        }
                        var u = Td(p[2 * r]).split(/\s/);
                        l += E(Td(u[0]), !0), 2 === u.length && (l += " " + Td(u[1])), this[a] = b = l;
                    }
                    c !== !1 && (null === b || t(b) ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    var v = this.$$observers;
                    v && f(v[k], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            e(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = qa()), e = d[a] || (d[a] = []);
                    return e.push(b), u.$evalAsync(function() {
                        e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a]);
                    }), function() {
                        N(e, b);
                    };
                }
            };
            var ia = d.startSymbol(), ka = d.endSymbol(), ma = "{{" == ia && "}}" == ka ? q : function(a) {
                return a.replace(/\{\{/g, ia).replace(/}}/g, ka);
            }, na = /^ngAttr[A-Z]/, oa = /^(.+)Start$/;
            return G.$$addBindingInfo = B ? function(a, b) {
                var c = a.data("$binding") || [];
                Rd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : p, G.$$addBindingClass = B ? function(a) {
                F(a, "ng-binding");
            } : p, G.$$addScopeInfo = B ? function(a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b);
            } : p, G.$$addScopeClass = B ? function(a, b) {
                F(a, b ? "ng-isolate-scope" : "ng-scope");
            } : p, G;
        } ];
    }
    function mb(a) {
        return wa(a.replace(Oe, ""));
    }
    function nb(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g;
        }
        return c;
    }
    function ob(a) {
        a = Fd(a);
        var b = a.length;
        if (1 >= b) return a;
        for (;b--; ) {
            var c = a[b];
            c.nodeType === ce && Jd.call(a, b, 1);
        }
        return a;
    }
    function pb(a, b) {
        if (b && x(b)) return b;
        if (x(a)) {
            var c = Qe.exec(a);
            if (c) return c[3];
        }
    }
    function qb() {
        var a = {}, b = !1;
        this.register = function(b, c) {
            na(b, "controller"), v(b) ? l(a, b) : a[b] = c;
        }, this.allowGlobals = function() {
            b = !0;
        }, this.$get = [ "$injector", "$window", function(e, f) {
            function g(a, b, c, e) {
                if (!a || !v(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                a.$scope[b] = c;
            }
            return function(d, h, i, j) {
                var k, m, n, o;
                if (i = i === !0, j && x(j) && (o = j), x(d)) {
                    if (m = d.match(Qe), !m) throw Pe("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
                    n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : oa(h.$scope, n, !0) || (b ? oa(f, n, !0) : c), 
                    ma(d, n, !0);
                }
                if (i) {
                    var p = (Rd(d) ? d[d.length - 1] : d).prototype;
                    k = Object.create(p || null), o && g(h, o, k, n || d.name);
                    var q;
                    return q = l(function() {
                        var a = e.invoke(d, k, h, n);
                        return a !== k && (v(a) || A(a)) && (k = a, o && g(h, o, k, n || d.name)), k;
                    }, {
                        instance: k,
                        identifier: o
                    });
                }
                return k = e.instantiate(d, h, n), o && g(h, o, k, n || d.name), k;
            };
        } ];
    }
    function rb() {
        this.$get = [ "$window", function(a) {
            return Fd(a.document);
        } ];
    }
    function sb() {
        this.$get = [ "$log", function(a) {
            return function(b, c) {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function tb(a) {
        return v(a) ? z(a) ? a.toISOString() : V(a) : a;
    }
    function ub() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                return g(a, function(a, c) {
                    null === a || t(a) || (Rd(a) ? f(a, function(a, d) {
                        b.push(da(c) + "=" + da(tb(a)));
                    }) : b.push(da(c) + "=" + da(tb(a))));
                }), b.join("&");
            };
        };
    }
    function vb() {
        this.$get = function() {
            return function(a) {
                function b(a, d, e) {
                    null === a || t(a) || (Rd(a) ? f(a, function(a, c) {
                        b(a, d + "[" + (v(a) ? c : "") + "]");
                    }) : v(a) && !z(a) ? g(a, function(a, c) {
                        b(a, d + (e ? "" : "[") + c + (e ? "" : "]"));
                    }) : c.push(da(d) + "=" + da(tb(a))));
                }
                if (!a) return "";
                var c = [];
                return b(a, "", !0), c.join("&");
            };
        };
    }
    function wb(a, b) {
        if (x(a)) {
            var c = a.replace(We, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(Se) || xb(c)) && (a = W(c));
            }
        }
        return a;
    }
    function xb(a) {
        var b = a.match(Ue);
        return b && Ve[b[0]].test(a);
    }
    function yb(a) {
        function b(a, b) {
            a && (d[a] = d[a] ? d[a] + ", " + b : b);
        }
        var c, d = qa();
        return x(a) ? f(a.split("\n"), function(a) {
            c = a.indexOf(":"), b(zd(Td(a.substr(0, c))), Td(a.substr(c + 1)));
        }) : v(a) && f(a, function(a, c) {
            b(zd(c), Td(a));
        }), d;
    }
    function zb(a) {
        var b;
        return function(c) {
            if (b || (b = yb(a)), c) {
                var d = b[zd(c)];
                return void 0 === d && (d = null), d;
            }
            return b;
        };
    }
    function Ab(a, b, c, d) {
        return A(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c);
        }), a);
    }
    function Bb(a) {
        return a >= 200 && 300 > a;
    }
    function Cb() {
        var a = this.defaults = {
            transformResponse: [ wb ],
            transformRequest: [ function(a) {
                return !v(a) || E(a) || G(a) || F(a) ? a : V(a);
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: P(Te),
                put: P(Te),
                patch: P(Te)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, b = !1;
        this.useApplyAsync = function(a) {
            return u(a) ? (b = !!a, this) : b;
        };
        var e = !0;
        this.useLegacyPromiseExtensions = function(a) {
            return u(a) ? (e = !!a, this) : e;
        };
        var g = this.interceptors = [];
        this.$get = [ "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(h, i, j, k, m, n) {
            function o(b) {
                function g(a) {
                    var b = l({}, a);
                    return b.data = Ab(a.data, a.headers, a.status, j.transformResponse), Bb(a.status) ? b : m.reject(b);
                }
                function h(a, b) {
                    var c, d = {};
                    return f(a, function(a, e) {
                        A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
                    }), d;
                }
                function i(b) {
                    var c, d, e, f = a.headers, g = l({}, b.headers);
                    f = l({}, f.common, f[zd(b.method)]);
                    a: for (c in f) {
                        d = zd(c);
                        for (e in g) if (zd(e) === d) continue a;
                        g[c] = f[c];
                    }
                    return h(g, P(b));
                }
                if (!Od.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                if (!x(b.url)) throw d("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", b.url);
                var j = l({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                j.headers = i(b), j.method = Bd(j.method), j.paramSerializer = x(j.paramSerializer) ? n.get(j.paramSerializer) : j.paramSerializer;
                var k = function(b) {
                    var d = b.headers, e = Ab(b.data, zb(d), c, b.transformRequest);
                    return t(e) && f(d, function(a, b) {
                        "content-type" === zd(b) && delete d[b];
                    }), t(b.withCredentials) && !t(a.withCredentials) && (b.withCredentials = a.withCredentials), 
                    r(b, e).then(g, g);
                }, o = [ k, c ], p = m.when(j);
                for (f(y, function(a) {
                    (a.request || a.requestError) && o.unshift(a.request, a.requestError), (a.response || a.responseError) && o.push(a.response, a.responseError);
                }); o.length; ) {
                    var q = o.shift(), s = o.shift();
                    p = p.then(q, s);
                }
                return e ? (p.success = function(a) {
                    return ma(a, "fn"), p.then(function(b) {
                        a(b.data, b.status, b.headers, j);
                    }), p;
                }, p.error = function(a) {
                    return ma(a, "fn"), p.then(null, function(b) {
                        a(b.data, b.status, b.headers, j);
                    }), p;
                }) : (p.success = Ye("success"), p.error = Ye("error")), p;
            }
            function p(a) {
                f(arguments, function(a) {
                    o[a] = function(b, c) {
                        return o(l({}, c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }
            function q(a) {
                f(arguments, function(a) {
                    o[a] = function(b, c, d) {
                        return o(l({}, d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }
            function r(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        g(c, a, d, e);
                    }
                    n && (Bb(a) ? n.put(y, [ a, c, yb(d), e ]) : n.remove(y)), b ? k.$applyAsync(f) : (f(), 
                    k.$$phase || k.$apply());
                }
                function g(a, b, c, e) {
                    b = b >= -1 ? b : 0, (Bb(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: zb(c),
                        config: d,
                        statusText: e
                    });
                }
                function j(a) {
                    g(a.data, a.status, P(a.headers()), a.statusText);
                }
                function l() {
                    var a = o.pendingRequests.indexOf(d);
                    -1 !== a && o.pendingRequests.splice(a, 1);
                }
                var n, p, q = m.defer(), r = q.promise, x = d.headers, y = s(d.url, d.paramSerializer(d.params));
                if (o.pendingRequests.push(d), r.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = v(d.cache) ? d.cache : v(a.cache) ? a.cache : w), 
                n && (p = n.get(y), u(p) ? I(p) ? p.then(j, j) : Rd(p) ? g(p[1], p[0], P(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(y, r)), 
                t(p)) {
                    var z = Dc(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
                    z && (x[d.xsrfHeaderName || a.xsrfHeaderName] = z), h(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType);
                }
                return r;
            }
            function s(a, b) {
                return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a;
            }
            var w = j("$http");
            a.paramSerializer = x(a.paramSerializer) ? n.get(a.paramSerializer) : a.paramSerializer;
            var y = [];
            return f(g, function(a) {
                y.unshift(x(a) ? n.get(a) : n.invoke(a));
            }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), 
            o.defaults = a, o;
        } ];
    }
    function Db() {
        this.$get = function() {
            return function() {
                return new a.XMLHttpRequest();
            };
        };
    }
    function Eb() {
        this.$get = [ "$browser", "$window", "$document", "$xhrFactory", function(a, b, c, d) {
            return Fb(a, d, a.defer, b.angular.callbacks, c[0]);
        } ];
    }
    function Fb(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"), g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                je(f, "load", g), je(f, "error", g), e.body.removeChild(f), f = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i);
            }, ie(f, "load", g), ie(f, "error", g), e.body.appendChild(f), g;
        }
        return function(e, h, i, j, k, l, m, n) {
            function o() {
                s && s(), v && v.abort();
            }
            function q(b, d, e, f, g) {
                u(y) && c.cancel(y), s = v = null, b(d, e, f, g), a.$$completeOutstandingRequest(p);
            }
            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == zd(e)) {
                var r = "_" + (d.counter++).toString(36);
                d[r] = function(a) {
                    d[r].data = a, d[r].called = !0;
                };
                var s = g(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function(a, b) {
                    q(j, a, d[r].data, "", b), d[r] = p;
                });
            } else {
                var v = b(e, h);
                v.open(e, h, !0), f(k, function(a, b) {
                    u(a) && v.setRequestHeader(b, a);
                }), v.onload = function() {
                    var a = v.statusText || "", b = "response" in v ? v.response : v.responseText, c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == Cc(h).protocol ? 404 : 0), q(j, c, b, v.getAllResponseHeaders(), a);
                };
                var w = function() {
                    q(j, -1, null, null, "");
                };
                if (v.onerror = w, v.onabort = w, m && (v.withCredentials = !0), n) try {
                    v.responseType = n;
                } catch (x) {
                    if ("json" !== n) throw x;
                }
                v.send(t(i) ? null : i);
            }
            if (l > 0) var y = c(o, l); else I(l) && l.then(o);
        };
    }
    function Gb() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a;
            }
            function g(c) {
                return c.replace(m, a).replace(n, b);
            }
            function h(a) {
                if (null == a) return "";
                switch (typeof a) {
                  case "string":
                    break;

                  case "number":
                    a = "" + a;
                    break;

                  default:
                    a = V(a);
                }
                return a;
            }
            function i(f, i, m, n) {
                function o(a) {
                    try {
                        return a = C(a), n && !u(a) ? a : h(a);
                    } catch (b) {
                        d(Ze.interr(f, b));
                    }
                }
                n = !!n;
                for (var p, q, r, s = 0, v = [], w = [], x = f.length, y = [], z = []; x > s; ) {
                    if (-1 == (p = f.indexOf(a, s)) || -1 == (q = f.indexOf(b, p + j))) {
                        s !== x && y.push(g(f.substring(s)));
                        break;
                    }
                    s !== p && y.push(g(f.substring(s, p))), r = f.substring(p + j, q), v.push(r), w.push(c(r, o)), 
                    s = q + k, z.push(y.length), y.push("");
                }
                if (m && y.length > 1 && Ze.throwNoconcat(f), !i || v.length) {
                    var B = function(a) {
                        for (var b = 0, c = v.length; c > b; b++) {
                            if (n && t(a[b])) return;
                            y[z[b]] = a[b];
                        }
                        return y.join("");
                    }, C = function(a) {
                        return m ? e.getTrusted(m, a) : e.valueOf(a);
                    };
                    return l(function(a) {
                        var b = 0, c = v.length, e = new Array(c);
                        try {
                            for (;c > b; b++) e[b] = w[b](a);
                            return B(e);
                        } catch (g) {
                            d(Ze.interr(f, g));
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(w, function(d, e) {
                                var f = B(d);
                                A(b) && b.call(this, f, d !== e ? c : f, a), c = f;
                            });
                        }
                    });
                }
            }
            var j = a.length, k = b.length, m = new RegExp(a.replace(/./g, f), "g"), n = new RegExp(b.replace(/./g, f), "g");
            return i.startSymbol = function() {
                return a;
            }, i.endSymbol = function() {
                return b;
            }, i;
        } ];
    }
    function Hb() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
            function e(e, g, h, i) {
                var j = arguments.length > 4, k = j ? S(arguments, 4) : [], l = b.setInterval, m = b.clearInterval, n = 0, o = u(i) && !i, p = (o ? d : c).defer(), q = p.promise;
                return h = u(h) ? h : 0, q.then(null, null, j ? function() {
                    e.apply(null, k);
                } : e), q.$$intervalId = l(function() {
                    p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), 
                    o || a.$apply();
                }, g), f[q.$$intervalId] = p, q;
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), 
                delete f[a.$$intervalId], !0) : !1;
            }, e;
        } ];
    }
    function Ib(a) {
        for (var b = a.split("/"), c = b.length; c--; ) b[c] = ca(b[c]);
        return b.join("/");
    }
    function Jb(a, b) {
        var c = Cc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || _e[c.protocol] || null;
    }
    function Kb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = Cc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), 
        b.$$search = aa(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function Lb(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function Mb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function Nb(a) {
        return a.replace(/(#.+)|#$/, "$1");
    }
    function Ob(a) {
        return a.substr(0, Mb(a).lastIndexOf("/") + 1);
    }
    function Pb(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
    }
    function Qb(a, b, c) {
        this.$$html5 = !0, c = c || "", Jb(a, this), this.$$parse = function(a) {
            var c = Lb(b, a);
            if (!x(c)) throw af("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
            Kb(c, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = ba(this.$$search), c = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Ib(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g, h;
            return u(f = Lb(a, d)) ? (g = f, h = u(f = Lb(c, f)) ? b + (Lb("/", f) || f) : a + g) : u(f = Lb(b, d)) ? h = b + f : b == d + "/" && (h = b), 
            h && this.$$parse(h), !!h;
        };
    }
    function Rb(a, b, c) {
        Jb(a, this), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), 
                d ? d[1] : a);
            }
            var f, g = Lb(a, d) || Lb(b, d);
            t(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", t(g) && (a = d, this.replace())) : (f = Lb(c, g), 
            t(f) && (f = g)), Kb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose();
        }, this.$$compose = function() {
            var b = ba(this.$$search), d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Ib(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "");
        }, this.$$parseLinkUrl = function(b, c) {
            return Mb(a) == Mb(b) ? (this.$$parse(b), !0) : !1;
        };
    }
    function Sb(a, b, c) {
        this.$$html5 = !0, Rb.apply(this, arguments), this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == Mb(d) ? f = d : (g = Lb(b, d)) ? f = a + c + g : b === d + "/" && (f = b), 
            f && this.$$parse(f), !!f;
        }, this.$$compose = function() {
            var b = ba(this.$$search), d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Ib(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url;
        };
    }
    function Tb(a) {
        return function() {
            return this[a];
        };
    }
    function Ub(a, b) {
        return function(c) {
            return t(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
        };
    }
    function Vb() {
        var a = "", b = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(b) {
            return u(b) ? (a = b, this) : a;
        }, this.html5Mode = function(a) {
            return H(a) ? (b.enabled = a, this) : v(a) ? (H(a.enabled) && (b.enabled = a.enabled), 
            H(a.requireBase) && (b.requireBase = a.requireBase), H(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), 
            this) : b;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(), f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state();
                } catch (g) {
                    throw j.url(e), j.$$state = f, g;
                }
            }
            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b);
            }
            var j, k, l, m = d.baseHref(), n = d.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw af("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = Pb(n) + (m || "/"), k = e.history ? Qb : Sb;
            } else l = Mb(n), k = Rb;
            var o = Ob(l);
            j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = Fd(a.target); "a" !== M(e[0]); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
                    v(h) && "[object SVGAnimatedString]" === h.toString() && (h = Cc(h.animVal).href), 
                    p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), 
                    j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                }
            }), Nb(j.absUrl()) != Nb(n) && d.url(j.absUrl(), !0);
            var q = !0;
            return d.onUrlChange(function(a, b) {
                return t(Lb(o, a)) ? void (g.location.href = a) : (c.$evalAsync(function() {
                    var d, e = j.absUrl(), f = j.$$state;
                    a = Nb(a), j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, 
                    j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)));
                }), void (c.$$phase || c.$digest()));
            }), c.$watch(function() {
                var a = Nb(d.url()), b = Nb(j.absUrl()), f = d.state(), g = j.$$replace, k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (q || k) && (q = !1, c.$evalAsync(function() {
                    var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), 
                    i(a, f)));
                })), j.$$replace = !1;
            }), j;
        } ];
    }
    function Wb() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return u(b) ? (a = b, this) : a;
        }, this.$get = [ "$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || p, g = !1;
                try {
                    g = !!e.apply;
                } catch (h) {}
                return g ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b));
                    }), e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function Xb(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw cf("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a;
    }
    function Yb(a, b) {
        if (a += "", !x(a)) throw cf("iseccst", "Cannot convert object to primitive value! Expression: {0}", b);
        return a;
    }
    function Zb(a, b) {
        if (a) {
            if (a.constructor === a) throw cf("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a) throw cf("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw cf("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw cf("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b);
        }
        return a;
    }
    function $b(a, b) {
        if (a) {
            if (a.constructor === a) throw cf("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === df || a === ef || a === ff) throw cf("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b);
        }
    }
    function _b(a, b) {
        if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw cf("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b);
    }
    function ac(a, b) {
        return "undefined" != typeof a ? a : b;
    }
    function bc(a, b) {
        return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b;
    }
    function cc(a, b) {
        var c = a(b);
        return !c.$stateful;
    }
    function dc(a, b) {
        var c, d;
        switch (a.type) {
          case kf.Program:
            c = !0, f(a.body, function(a) {
                dc(a.expression, b), c = c && a.expression.constant;
            }), a.constant = c;
            break;

          case kf.Literal:
            a.constant = !0, a.toWatch = [];
            break;

          case kf.UnaryExpression:
            dc(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
            break;

          case kf.BinaryExpression:
            dc(a.left, b), dc(a.right, b), a.constant = a.left.constant && a.right.constant, 
            a.toWatch = a.left.toWatch.concat(a.right.toWatch);
            break;

          case kf.LogicalExpression:
            dc(a.left, b), dc(a.right, b), a.constant = a.left.constant && a.right.constant, 
            a.toWatch = a.constant ? [] : [ a ];
            break;

          case kf.ConditionalExpression:
            dc(a.test, b), dc(a.alternate, b), dc(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, 
            a.toWatch = a.constant ? [] : [ a ];
            break;

          case kf.Identifier:
            a.constant = !1, a.toWatch = [ a ];
            break;

          case kf.MemberExpression:
            dc(a.object, b), a.computed && dc(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), 
            a.toWatch = [ a ];
            break;

          case kf.CallExpression:
            c = a.filter ? cc(b, a.callee.name) : !1, d = [], f(a.arguments, function(a) {
                dc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch);
            }), a.constant = c, a.toWatch = a.filter && cc(b, a.callee.name) ? d : [ a ];
            break;

          case kf.AssignmentExpression:
            dc(a.left, b), dc(a.right, b), a.constant = a.left.constant && a.right.constant, 
            a.toWatch = [ a ];
            break;

          case kf.ArrayExpression:
            c = !0, d = [], f(a.elements, function(a) {
                dc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch);
            }), a.constant = c, a.toWatch = d;
            break;

          case kf.ObjectExpression:
            c = !0, d = [], f(a.properties, function(a) {
                dc(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch);
            }), a.constant = c, a.toWatch = d;
            break;

          case kf.ThisExpression:
            a.constant = !1, a.toWatch = [];
        }
    }
    function ec(a) {
        if (1 == a.length) {
            var b = a[0].expression, d = b.toWatch;
            return 1 !== d.length ? d : d[0] !== b ? d : c;
        }
    }
    function fc(a) {
        return a.type === kf.Identifier || a.type === kf.MemberExpression;
    }
    function gc(a) {
        return 1 === a.body.length && fc(a.body[0].expression) ? {
            type: kf.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: kf.NGValueParameter
            },
            operator: "="
        } : void 0;
    }
    function hc(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === kf.Literal || a.body[0].expression.type === kf.ArrayExpression || a.body[0].expression.type === kf.ObjectExpression);
    }
    function ic(a) {
        return a.constant;
    }
    function jc(a, b) {
        this.astBuilder = a, this.$filter = b;
    }
    function kc(a, b) {
        this.astBuilder = a, this.$filter = b;
    }
    function lc(a) {
        return "constructor" == a;
    }
    function mc(a) {
        return A(a.valueOf) ? a.valueOf() : mf.call(a);
    }
    function nc() {
        var a = qa(), b = qa();
        this.$get = [ "$filter", function(d) {
            function e(c, e, f) {
                var h, n, s;
                switch (f = f || r, typeof c) {
                  case "string":
                    c = c.trim(), s = c;
                    var t = f ? b : a;
                    if (h = t[s], !h) {
                        ":" === c.charAt(0) && ":" === c.charAt(1) && (n = !0, c = c.substring(2));
                        var u = f ? q : o, v = new jf(u), w = new lf(v, d, u);
                        h = w.parse(c), h.constant ? h.$$watchDelegate = l : n ? h.$$watchDelegate = h.literal ? k : j : h.inputs && (h.$$watchDelegate = i), 
                        f && (h = g(h)), t[s] = h;
                    }
                    return m(h, e);

                  case "function":
                    return m(c, e);

                  default:
                    return m(p, e);
                }
            }
            function g(a) {
                function b(b, c, d, e) {
                    var f = r;
                    r = !0;
                    try {
                        return a(b, c, d, e);
                    } finally {
                        r = f;
                    }
                }
                if (!a) return a;
                b.$$watchDelegate = a.$$watchDelegate, b.assign = g(a.assign), b.constant = a.constant, 
                b.literal = a.literal;
                for (var c = 0; a.inputs && c < a.inputs.length; ++c) a.inputs[c] = g(a.inputs[c]);
                return b.inputs = a.inputs, b;
            }
            function h(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = mc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b;
            }
            function i(a, b, d, e, f) {
                var g, i = e.inputs;
                if (1 === i.length) {
                    var j = h;
                    return i = i[0], a.$watch(function(a) {
                        var b = i(a);
                        return h(b, j) || (g = e(a, c, c, [ b ]), j = b && mc(b)), g;
                    }, b, d, f);
                }
                for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = h, l[m] = null;
                return a.$watch(function(a) {
                    for (var b = !1, d = 0, f = i.length; f > d; d++) {
                        var j = i[d](a);
                        (b || (b = !h(j, k[d]))) && (l[d] = j, k[d] = j && mc(j));
                    }
                    return b && (g = e(a, c, c, l)), g;
                }, b, d, f);
            }
            function j(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    f = a, A(b) && b.apply(this, arguments), u(a) && d.$$postDigest(function() {
                        u(f) && e();
                    });
                }, c);
            }
            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function(a) {
                        u(a) || (b = !1);
                    }), b;
                }
                var g, h;
                return g = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    h = a, A(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(h) && g();
                    });
                }, c);
            }
            function l(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    A(b) && b.apply(this, arguments), e();
                }, c);
            }
            function m(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, d = !1, e = c !== k && c !== j, f = e ? function(c, e, f, g) {
                    var h = d && g ? g[0] : a(c, e, f, g);
                    return b(h, c, e);
                } : function(c, d, e, f) {
                    var g = a(c, d, e, f), h = b(g, c, d);
                    return u(g) ? h : g;
                };
                return a.$$watchDelegate && a.$$watchDelegate !== i ? f.$$watchDelegate = a.$$watchDelegate : b.$stateful || (f.$$watchDelegate = i, 
                d = !a.inputs, f.inputs = a.inputs ? a.inputs : [ a ]), f;
            }
            var n = Vd().noUnsafeEval, o = {
                csp: n,
                expensiveChecks: !1
            }, q = {
                csp: n,
                expensiveChecks: !0
            }, r = !1;
            return e.$$runningExpensiveChecks = function() {
                return r;
            }, e;
        } ];
    }
    function oc() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return qc(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function pc() {
        this.$get = [ "$browser", "$exceptionHandler", function(a, b) {
            return qc(function(b) {
                a.defer(b);
            }, b);
        } ];
    }
    function qc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c));
                };
            }
            var e = !1;
            return [ d(b), d(c) ];
        }
        function g() {
            this.$$state = {
                status: 0
            };
        }
        function h(a, b) {
            return function(c) {
                b.call(a, c);
            };
        }
        function i(a) {
            var d, e, f;
            f = a.pending, a.processScheduled = !1, a.pending = c;
            for (var g = 0, h = f.length; h > g; ++g) {
                e = f[g][0], d = f[g][a.status];
                try {
                    A(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value);
                } catch (i) {
                    e.reject(i), b(i);
                }
            }
        }
        function j(b) {
            !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                i(b);
            }));
        }
        function k() {
            this.promise = new g(), this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), 
            this.notify = h(this, this.notify);
        }
        function m(a) {
            var b = new k(), c = 0, d = Rd(a) ? [] : {};
            return f(a, function(a, e) {
                c++, s(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a);
                });
            }), 0 === c && b.resolve(d), b.promise;
        }
        var n = d("$q", TypeError), o = function() {
            return new k();
        };
        l(g.prototype, {
            then: function(a, b, c) {
                if (t(a) && t(b) && t(c)) return this;
                var d = new k();
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ d, a, b, c ]), 
                this.$$state.status > 0 && j(this.$$state), d.promise;
            },
            "catch": function(a) {
                return this.then(null, a);
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return r(b, !0, a);
                }, function(b) {
                    return r(b, !1, a);
                }, b);
            }
        }), l(k.prototype, {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(n("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a));
            },
            $$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (v(a) || A(a)) && (c = a && a.then), A(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, 
                    this.promise.$$state.status = 1, j(this.promise.$$state));
                } catch (f) {
                    d[1](f), b(f);
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a);
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state);
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(A(a) ? a(c) : c);
                        } catch (h) {
                            b(h);
                        }
                    }
                });
            }
        });
        var p = function(a) {
            var b = new k();
            return b.reject(a), b.promise;
        }, q = function(a, b) {
            var c = new k();
            return b ? c.resolve(a) : c.reject(a), c.promise;
        }, r = function(a, b, c) {
            var d = null;
            try {
                A(c) && (d = c());
            } catch (e) {
                return q(e, !1);
            }
            return I(d) ? d.then(function() {
                return q(a, b);
            }, function(a) {
                return q(a, !1);
            }) : q(a, b);
        }, s = function(a, b, c, d) {
            var e = new k();
            return e.resolve(a), e.promise.then(b, c, d);
        }, u = s, w = function x(a) {
            function b(a) {
                d.resolve(a);
            }
            function c(a) {
                d.reject(a);
            }
            if (!A(a)) throw n("norslvr", "Expected resolverFn, got '{0}'", a);
            if (!(this instanceof x)) return new x(a);
            var d = new k();
            return a(b, c), d.promise;
        };
        return w.defer = o, w.reject = p, w.when = s, w.resolve = u, w.all = m, w;
    }
    function rc() {
        this.$get = [ "$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                var b = c(a);
                return function() {
                    d(b);
                };
            } : function(a) {
                var c = b(a, 16.66, !1);
                return function() {
                    b.cancel(c);
                };
            };
            return f.supported = e, f;
        } ];
    }
    function sc() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = i(), 
                this.$$ChildScope = null;
            }
            return b.prototype = a, b;
        }
        var b = 10, c = d("$rootScope"), g = null, h = null;
        this.digestTtl = function(a) {
            return arguments.length && (b = a), b;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(d, j, k, l) {
            function m(a) {
                a.currentScope.$$destroyed = !0;
            }
            function n(a) {
                9 === Ed && (a.$$childHead && n(a.$$childHead), a.$$nextSibling && n(a.$$nextSibling)), 
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
            }
            function o() {
                this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                this.$$watchersCount = 0, this.$$isolateBindings = null;
            }
            function q(a) {
                if (z.$$phase) throw c("inprog", "{0} already in progress", z.$$phase);
                z.$$phase = a;
            }
            function r() {
                z.$$phase = null;
            }
            function s(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent);
            }
            function u(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function w() {}
            function x() {
                for (;D.length; ) try {
                    D.shift()();
                } catch (a) {
                    j(a);
                }
                h = null;
            }
            function y() {
                null === h && (h = l.defer(function() {
                    z.$apply(x);
                }));
            }
            o.prototype = {
                constructor: o,
                $new: function(b, c) {
                    var d;
                    return c = c || this, b ? (d = new o(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), 
                    d = new this.$$ChildScope()), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, 
                    c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), 
                    d;
                },
                $watch: function(a, b, c, d) {
                    var e = k(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
                    var f = this, h = f.$$watchers, i = {
                        fn: b,
                        last: w,
                        get: e,
                        exp: d || a,
                        eq: !!c
                    };
                    return g = null, A(b) || (i.fn = p), h || (h = f.$$watchers = []), h.unshift(i), 
                    s(this, 1), function() {
                        N(h, i) >= 0 && s(f, -1), g = null;
                    };
                },
                $watchGroup: function(a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h);
                    }
                    var d = new Array(a.length), e = new Array(a.length), g = [], h = this, i = !1, j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function() {
                            k && b(e, e, h);
                        }), function() {
                            k = !1;
                        };
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f);
                    }) : (f(a, function(a, b) {
                        var f = h.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c));
                        });
                        g.push(f);
                    }), function() {
                        for (;g.length; ) g.shift()();
                    });
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        f = a;
                        var b, c, d, h, i;
                        if (!t(f)) {
                            if (v(f)) if (e(f)) {
                                g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, 
                                g[j] = h);
                            } else {
                                g !== o && (g = o = {}, q = 0, l++), b = 0;
                                for (c in f) Ad.call(f, c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, 
                                d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                if (q > b) {
                                    l++;
                                    for (c in g) Ad.call(f, c) || (q--, delete g[c]);
                                }
                            } else g !== f && (g = f, l++);
                            return l;
                        }
                    }
                    function d() {
                        if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j) if (v(f)) if (e(f)) {
                            h = new Array(f.length);
                            for (var a = 0; a < f.length; a++) h[a] = f[a];
                        } else {
                            h = {};
                            for (var c in f) Ad.call(f, c) && (h[c] = f[c]);
                        } else h = f;
                    }
                    c.$stateful = !0;
                    var f, g, h, i = this, j = b.length > 1, l = 0, m = k(a, c), n = [], o = {}, p = !0, q = 0;
                    return this.$watch(m, d);
                },
                $digest: function() {
                    var a, d, e, f, i, k, m, n, o, p, s, t, u = b, v = this, y = [];
                    q("$digest"), l.$$checkUrlChange(), this === z && null !== h && (l.defer.cancel(h), 
                    x()), g = null;
                    do {
                        for (n = !1, p = v; B.length; ) {
                            try {
                                t = B.shift(), t.scope.$eval(t.expression, t.locals);
                            } catch (D) {
                                j(D);
                            }
                            g = null;
                        }
                        a: do {
                            if (k = p.$$watchers) for (m = k.length; m--; ) try {
                                if (a = k[m]) if (i = a.get, (d = i(p)) === (e = a.last) || (a.eq ? Q(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                    if (a === g) {
                                        n = !1;
                                        break a;
                                    }
                                } else n = !0, g = a, a.last = a.eq ? O(d, null) : d, f = a.fn, f(d, e === w ? d : e, p), 
                                5 > u && (s = 4 - u, y[s] || (y[s] = []), y[s].push({
                                    msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: d,
                                    oldVal: e
                                }));
                            } catch (D) {
                                j(D);
                            }
                            if (!(o = p.$$watchersCount && p.$$childHead || p !== v && p.$$nextSibling)) for (;p !== v && !(o = p.$$nextSibling); ) p = p.$parent;
                        } while (p = o);
                        if ((n || B.length) && !u--) throw r(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, y);
                    } while (n || B.length);
                    for (r(); C.length; ) try {
                        C.shift()();
                    } catch (D) {
                        j(D);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === z && l.$$applicationDestroyed(), 
                        s(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) u(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, 
                        this.$on = this.$watch = this.$watchGroup = function() {
                            return p;
                        }, this.$$listeners = {}, this.$$nextSibling = null, n(this);
                    }
                },
                $eval: function(a, b) {
                    return k(a)(this, b);
                },
                $evalAsync: function(a, b) {
                    z.$$phase || B.length || l.defer(function() {
                        B.length && z.$digest();
                    }), B.push({
                        scope: this,
                        expression: k(a),
                        locals: b
                    });
                },
                $$postDigest: function(a) {
                    C.push(a);
                },
                $apply: function(a) {
                    try {
                        q("$apply");
                        try {
                            return this.$eval(a);
                        } finally {
                            r();
                        }
                    } catch (b) {
                        j(b);
                    } finally {
                        try {
                            z.$digest();
                        } catch (b) {
                            throw j(b), b;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a);
                    }
                    var c = this;
                    a && D.push(b), a = k(a), y();
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, u(e, 1, a));
                    };
                },
                $emit: function(a, b) {
                    var c, d, e, f = [], g = this, h = !1, i = {
                        name: a,
                        targetScope: g,
                        stopPropagation: function() {
                            h = !0;
                        },
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, k = R([ i ], arguments, 1);
                    do {
                        for (c = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = c.length; e > d; d++) if (c[d]) try {
                            c[d].apply(null, k);
                        } catch (l) {
                            j(l);
                        } else c.splice(d, 1), d--, e--;
                        if (h) return i.currentScope = null, i;
                        g = g.$parent;
                    } while (g);
                    return i.currentScope = null, i;
                },
                $broadcast: function(a, b) {
                    var c = this, d = c, e = c, f = {
                        name: a,
                        targetScope: c,
                        preventDefault: function() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!c.$$listenerCount[a]) return f;
                    for (var g, h, i, k = R([ f ], arguments, 1); d = e; ) {
                        for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, i = g.length; i > h; h++) if (g[h]) try {
                            g[h].apply(null, k);
                        } catch (l) {
                            j(l);
                        } else g.splice(h, 1), h--, i--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling)) for (;d !== c && !(e = d.$$nextSibling); ) d = d.$parent;
                    }
                    return f.currentScope = null, f;
                }
            };
            var z = new o(), B = z.$$asyncQueue = [], C = z.$$postDigestQueue = [], D = z.$$applyAsyncQueue = [];
            return z;
        } ];
    }
    function tc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return u(b) ? (a = b, this) : a;
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (b = a, this) : b;
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = Cc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e;
            };
        };
    }
    function uc(a) {
        if ("self" === a) return a;
        if (x(a)) {
            if (a.indexOf("***") > -1) throw nf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$");
        }
        if (B(a)) return new RegExp("^" + a.source + "$");
        throw nf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
    }
    function vc(a) {
        var b = [];
        return u(a) && f(a, function(a) {
            b.push(uc(a));
        }), b;
    }
    function wc() {
        this.SCE_CONTEXTS = of;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = vc(b)), a;
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = vc(a)), b;
        }, this.$get = [ "$injector", function(c) {
            function d(a, b) {
                return "self" === a ? Dc(b) : !!a.exec(b.href);
            }
            function e(c) {
                var e, f, g = Cc(c.toString()), h = !1;
                for (e = 0, f = a.length; f > e; e++) if (d(a[e], g)) {
                    h = !0;
                    break;
                }
                if (h) for (e = 0, f = b.length; f > e; e++) if (d(b[e], g)) {
                    h = !1;
                    break;
                }
                return h;
            }
            function f(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            function g(a, b) {
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (!c) throw nf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || t(b) || "" === b) return b;
                if ("string" != typeof b) throw nf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new c(b);
            }
            function h(a) {
                return a instanceof k ? a.$$unwrapTrustedValue() : a;
            }
            function i(a, b) {
                if (null === b || t(b) || "" === b) return b;
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (c && b instanceof c) return b.$$unwrapTrustedValue();
                if (a === of.RESOURCE_URL) {
                    if (e(b)) return b;
                    throw nf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString());
                }
                if (a === of.HTML) return j(b);
                throw nf("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            var j = function(a) {
                throw nf("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            c.has("$sanitize") && (j = c.get("$sanitize"));
            var k = f(), l = {};
            return l[of.HTML] = f(k), l[of.CSS] = f(k), l[of.URL] = f(k), l[of.JS] = f(k), l[of.RESOURCE_URL] = f(l[of.URL]), 
            {
                trustAs: g,
                getTrusted: i,
                valueOf: h
            };
        } ];
    }
    function xc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a;
        }, this.$get = [ "$parse", "$sceDelegate", function(b, c) {
            if (a && 8 > Ed) throw nf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var d = P(of);
            d.isEnabled = function() {
                return a;
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                return b;
            }, d.valueOf = q), d.parseAs = function(a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function(b) {
                    return d.getTrusted(a, b);
                });
            };
            var e = d.parseAs, g = d.getTrusted, h = d.trustAs;
            return f(of, function(a, b) {
                var c = zd(b);
                d[wa("parse_as_" + c)] = function(b) {
                    return e(a, b);
                }, d[wa("get_trusted_" + c)] = function(b) {
                    return g(a, b);
                }, d[wa("trust_as_" + c)] = function(b) {
                    return h(a, b);
                };
            }), d;
        } ];
    }
    function yc() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c, d, e = {}, f = n((/android (\d+)/.exec(zd((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
            if (j) {
                for (var m in j) if (d = i.exec(m)) {
                    c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break;
                }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), 
                l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = x(j.webkitTransition), 
                l = x(j.webkitAnimation));
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > f || g),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Ed) return !1;
                    if (t(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b;
                    }
                    return e[a];
                },
                csp: Vd(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            };
        } ];
    }
    function zc() {
        this.$get = [ "$templateCache", "$http", "$q", "$sce", function(a, b, c, d) {
            function e(f, g) {
                function h(a) {
                    if (!g) throw Ne("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", f, a.status, a.statusText);
                    return c.reject(a);
                }
                e.totalPendingRequests++, x(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
                var i = b.defaults && b.defaults.transformResponse;
                Rd(i) ? i = i.filter(function(a) {
                    return a !== wb;
                }) : i === wb && (i = null);
                var j = {
                    cache: a,
                    transformResponse: i
                };
                return b.get(f, j)["finally"](function() {
                    e.totalPendingRequests--;
                }).then(function(b) {
                    return a.put(f, b.data), b.data;
                }, h);
            }
            return e.totalPendingRequests = 0, e;
        } ];
    }
    function Ac() {
        this.$get = [ "$rootScope", "$browser", "$location", function(a, b, c) {
            var d = {};
            return d.findBindings = function(a, b, c) {
                var d = a.getElementsByClassName("ng-binding"), e = [];
                return f(d, function(a) {
                    var d = Od.element(a).data("$binding");
                    d && f(d, function(d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + Ud(b) + "(\\s|\\||$)");
                            f.test(d) && e.push(a);
                        } else -1 != d.indexOf(b) && e.push(a);
                    });
                }), e;
            }, d.findModels = function(a, b, c) {
                for (var d = [ "ng-", "data-ng-", "ng\\:" ], e = 0; e < d.length; ++e) {
                    var f = c ? "=" : "*=", g = "[" + d[e] + "model" + f + '"' + b + '"]', h = a.querySelectorAll(g);
                    if (h.length) return h;
                }
            }, d.getLocation = function() {
                return c.url();
            }, d.setLocation = function(b) {
                b !== c.url() && (c.url(b), a.$digest());
            }, d.whenStable = function(a) {
                b.notifyWhenNoOutstandingRequests(a);
            }, d;
        } ];
    }
    function Bc() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
            function f(f, h, i) {
                A(f) || (i = h, h = f, f = p);
                var j, k = S(arguments, 3), l = u(i) && !i, m = (l ? d : c).defer(), n = m.promise;
                return j = b.defer(function() {
                    try {
                        m.resolve(f.apply(null, k));
                    } catch (b) {
                        m.reject(b), e(b);
                    } finally {
                        delete g[n.$$timeoutId];
                    }
                    l || a.$apply();
                }, h), n.$$timeoutId = j, g[j] = m, n;
            }
            var g = {};
            return f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], 
                b.defer.cancel(a.$$timeoutId)) : !1;
            }, f;
        } ];
    }
    function Cc(a) {
        var b = a;
        return Ed && (pf.setAttribute("href", b), b = pf.href), pf.setAttribute("href", b), 
        {
            href: pf.href,
            protocol: pf.protocol ? pf.protocol.replace(/:$/, "") : "",
            host: pf.host,
            search: pf.search ? pf.search.replace(/^\?/, "") : "",
            hash: pf.hash ? pf.hash.replace(/^#/, "") : "",
            hostname: pf.hostname,
            port: pf.port,
            pathname: "/" === pf.pathname.charAt(0) ? pf.pathname : "/" + pf.pathname
        };
    }
    function Dc(a) {
        var b = x(a) ? Cc(a) : a;
        return b.protocol === qf.protocol && b.host === qf.host;
    }
    function Ec() {
        this.$get = r(a);
    }
    function Fc(a) {
        function b(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }
        var c = a[0] || {}, d = {}, e = "";
        return function() {
            var a, f, g, h, i, j = c.cookie || "";
            if (j !== e) for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++) f = a[g], 
            h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), t(d[i]) && (d[i] = b(f.substring(h + 1))));
            return d;
        };
    }
    function Gc() {
        this.$get = Fc;
    }
    function Hc(a) {
        function b(d, e) {
            if (v(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a);
                }), g;
            }
            return a.factory(d + c, e);
        }
        var c = "Filter";
        this.register = b, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ], b("currency", Mc), b("date", _c), b("filter", Ic), b("json", ad), b("limitTo", bd), 
        b("lowercase", xf), b("number", Nc), b("orderBy", cd), b("uppercase", yf);
    }
    function Ic() {
        return function(a, b, c) {
            if (!e(a)) {
                if (null == a) return a;
                throw d("filter")("notarray", "Expected array but received: {0}", a);
            }
            var f, g, h = Lc(b);
            switch (h) {
              case "function":
                f = b;
                break;

              case "boolean":
              case "null":
              case "number":
              case "string":
                g = !0;

              case "object":
                f = Jc(b, c, g);
                break;

              default:
                return a;
            }
            return Array.prototype.filter.call(a, f);
        };
    }
    function Jc(a, b, c) {
        var d, e = v(a) && "$" in a;
        return b === !0 ? b = Q : A(b) || (b = function(a, b) {
            return t(a) ? !1 : null === a || null === b ? a === b : v(b) || v(a) && !s(a) ? !1 : (a = zd("" + a), 
            b = zd("" + b), -1 !== a.indexOf(b));
        }), d = function(d) {
            return e && !v(d) ? Kc(d, a.$, b, !1) : Kc(d, a, b, c);
        };
    }
    function Kc(a, b, c, d, e) {
        var f = Lc(a), g = Lc(b);
        if ("string" === g && "!" === b.charAt(0)) return !Kc(a, b.substring(1), c, d);
        if (Rd(a)) return a.some(function(a) {
            return Kc(a, b, c, d);
        });
        switch (f) {
          case "object":
            var h;
            if (d) {
                for (h in a) if ("$" !== h.charAt(0) && Kc(a[h], b, c, !0)) return !0;
                return e ? !1 : Kc(a, b, c, !1);
            }
            if ("object" === g) {
                for (h in b) {
                    var i = b[h];
                    if (!A(i) && !t(i)) {
                        var j = "$" === h, k = j ? a : a[h];
                        if (!Kc(k, i, c, j, j)) return !1;
                    }
                }
                return !0;
            }
            return c(a, b);

          case "function":
            return !1;

          default:
            return c(a, b);
        }
    }
    function Lc(a) {
        return null === a ? "null" : typeof a;
    }
    function Mc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return t(c) && (c = b.CURRENCY_SYM), t(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Qc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c);
        };
    }
    function Nc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Qc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function Oc(a) {
        var b, c, d, e, f, g = 0;
        for ((c = a.indexOf(sf)) > -1 && (a = a.replace(sf, "")), (d = a.search(/e/i)) > 0 ? (0 > c && (c = d), 
        c += +a.slice(d + 1), a = a.substring(0, d)) : 0 > c && (c = a.length), d = 0; a.charAt(d) == tf; d++) ;
        if (d == (f = a.length)) b = [ 0 ], c = 1; else {
            for (f--; a.charAt(f) == tf; ) f--;
            for (c -= d, b = [], e = 0; f >= d; d++, e++) b[e] = +a.charAt(d);
        }
        return c > rf && (b = b.splice(0, rf - 1), g = c - 1, c = 1), {
            d: b,
            e: g,
            i: c
        };
    }
    function Pc(a, b, c, d) {
        var e = a.d, f = e.length - a.i;
        b = t(b) ? Math.min(Math.max(c, f), d) : +b;
        var g = b + a.i, h = e[g];
        if (g > 0) e.splice(g); else {
            a.i = 1, e.length = g = b + 1;
            for (var i = 0; g > i; i++) e[i] = 0;
        }
        for (h >= 5 && e[g - 1]++; b > f; f++) e.push(0);
        var j = e.reduceRight(function(a, b, c, d) {
            return b += a, d[c] = b % 10, Math.floor(b / 10);
        }, 0);
        j && (e.unshift(j), a.i++);
    }
    function Qc(a, b, c, d, e) {
        if (!x(a) && !y(a) || isNaN(a)) return "";
        var f, g = !isFinite(a), h = !1, i = Math.abs(a) + "", j = "";
        if (g) j = "∞"; else {
            f = Oc(i), Pc(f, e, b.minFrac, b.maxFrac);
            var k = f.d, l = f.i, m = f.e, n = [];
            for (h = k.reduce(function(a, b) {
                return a && !b;
            }, !0); 0 > l; ) k.unshift(0), l++;
            l > 0 ? n = k.splice(l) : (n = k, k = [ 0 ]);
            var o = [];
            for (k.length > b.lgSize && o.unshift(k.splice(-b.lgSize).join("")); k.length > b.gSize; ) o.unshift(k.splice(-b.gSize).join(""));
            k.length && o.unshift(k.join("")), j = o.join(c), n.length && (j += d + n.join("")), 
            m && (j += "e+" + m);
        }
        return 0 > a && !h ? b.negPre + j + b.negSuf : b.posPre + j + b.posSuf;
    }
    function Rc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; ) a = tf + a;
        return c && (a = a.substr(a.length - b)), d + a;
    }
    function Sc(a, b, c, d) {
        return c = c || 0, function(e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Rc(f, b, d);
        };
    }
    function Tc(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Bd(b ? "SHORT" + a : a);
            return d[f][e];
        };
    }
    function Uc(a, b, c) {
        var d = -1 * c, e = d >= 0 ? "+" : "";
        return e += Rc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Rc(Math.abs(d % 60), 2);
    }
    function Vc(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }
    function Wc(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()));
    }
    function Xc(a) {
        return function(b) {
            var c = Vc(b.getFullYear()), d = Wc(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
            return Rc(f, a);
        };
    }
    function Yc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
    }
    function Zc(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1];
    }
    function $c(a, b) {
        return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1];
    }
    function _c(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                var d = new Date(0), e = 0, f = 0, g = b[8] ? d.setUTCFullYear : d.setFullYear, h = b[8] ? d.setUTCHours : d.setHours;
                b[9] && (e = n(b[9] + b[10]), f = n(b[9] + b[11])), g.call(d, n(b[1]), n(b[2]) - 1, n(b[3]));
                var i = n(b[4] || 0) - e, j = n(b[5] || 0) - f, k = n(b[6] || 0), l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                return h.call(d, i, j, k, l), d;
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "", j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, x(c) && (c = wf.test(c) ? n(c) : b(c)), 
            y(c) && (c = new Date(c)), !z(c) || !isFinite(c.getTime())) return c;
            for (;d; ) h = vf.exec(d), h ? (j = R(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            var k = c.getTimezoneOffset();
            return e && (k = X(e, k), c = Z(c, e, !0)), f(j, function(b) {
                g = uf[b], i += g ? g(c, a.DATETIME_FORMATS, k) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), i;
        };
    }
    function ad() {
        return function(a, b) {
            return t(b) && (b = 2), V(a, b);
        };
    }
    function bd() {
        return function(a, b, c) {
            return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (y(a) && (a = a.toString()), 
            Rd(a) || x(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c ? Math.max(0, a.length + c) : c, 
            b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a);
        };
    }
    function cd(a) {
        function b(b, c) {
            return c = c ? -1 : 1, b.map(function(b) {
                var d = 1, e = q;
                if (A(b)) e = b; else if (x(b) && ("+" != b.charAt(0) && "-" != b.charAt(0) || (d = "-" == b.charAt(0) ? -1 : 1, 
                b = b.substring(1)), "" !== b && (e = a(b), e.constant))) {
                    var f = e();
                    e = function(a) {
                        return a[f];
                    };
                }
                return {
                    get: e,
                    descending: d * c
                };
            });
        }
        function c(a) {
            switch (typeof a) {
              case "number":
              case "boolean":
              case "string":
                return !0;

              default:
                return !1;
            }
        }
        function d(a, b) {
            return "function" == typeof a.valueOf && (a = a.valueOf(), c(a)) ? a : s(a) && (a = a.toString(), 
            c(a)) ? a : b;
        }
        function f(a, b) {
            var c = typeof a;
            return null === a ? (c = "string", a = "null") : "string" === c ? a = a.toLowerCase() : "object" === c && (a = d(a, b)), 
            {
                value: a,
                type: c
            };
        }
        function g(a, b) {
            var c = 0;
            return a.type === b.type ? a.value !== b.value && (c = a.value < b.value ? -1 : 1) : c = a.type < b.type ? -1 : 1, 
            c;
        }
        return function(a, c, d) {
            function h(a, b) {
                return {
                    value: a,
                    predicateValues: j.map(function(c) {
                        return f(c.get(a), b);
                    })
                };
            }
            function i(a, b) {
                for (var c = 0, d = 0, e = j.length; e > d && !(c = g(a.predicateValues[d], b.predicateValues[d]) * j[d].descending); ++d) ;
                return c;
            }
            if (!e(a)) return a;
            Rd(c) || (c = [ c ]), 0 === c.length && (c = [ "+" ]);
            var j = b(c, d);
            j.push({
                get: function() {
                    return {};
                },
                descending: d ? -1 : 1
            });
            var k = Array.prototype.map.call(a, h);
            return k.sort(i), a = k.map(function(a) {
                return a.value;
            });
        };
    }
    function dd(a) {
        return A(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", r(a);
    }
    function ed(a, b) {
        a.$name = b;
    }
    function fd(a, b, d, e, g) {
        var h = this, i = [];
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), 
        h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, 
        h.$$parentForm = Bf, h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue();
            });
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue();
            });
        }, h.$addControl = function(a) {
            na(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a), a.$$parentForm = h;
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b;
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a);
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a);
            }), f(h.$$success, function(b, c) {
                h.$setValidity(c, null, a);
            }), N(i, a), a.$$parentForm = Bf;
        }, ud({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                if (d) {
                    var e = d.indexOf(c);
                    -1 === e && d.push(c);
                } else a[b] = [ c ];
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (N(d, c), 0 === d.length && delete a[b]);
            },
            $animate: e
        }), h.$setDirty = function() {
            e.removeClass(a, lg), e.addClass(a, mg), h.$dirty = !0, h.$pristine = !1, h.$$parentForm.$setDirty();
        }, h.$setPristine = function() {
            e.setClass(a, lg, mg + " " + Cf), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, 
            f(i, function(a) {
                a.$setPristine();
            });
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched();
            });
        }, h.$setSubmitted = function() {
            e.addClass(a, Cf), h.$submitted = !0, h.$$parentForm.$setSubmitted();
        };
    }
    function gd(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString();
        });
    }
    function hd(a, b, c, d, e, f) {
        id(a, b, c, d, e, f), gd(d);
    }
    function id(a, b, c, d, e, f) {
        var g = zd(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function(a) {
                h = !0;
            }), b.on("compositionend", function() {
                h = !1, j();
            });
        }
        var i, j = function(a) {
            if (i && (f.defer.cancel(i), i = null), !h) {
                var e = b.val(), j = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Td(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, j);
            }
        };
        if (e.hasEvent("input")) b.on("input", j); else {
            var k = function(a, b, c) {
                i || (i = f.defer(function() {
                    i = null, b && b.value === c || j(a);
                }));
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value);
            }), e.hasEvent("paste") && b.on("paste cut", k);
        }
        b.on("change", j), Qf[g] && d.$$hasNativeValidators && g === c.type && b.on(Pf, function(a) {
            if (!i) {
                var b = this[yd], c = b.badInput, d = b.typeMismatch;
                i = f.defer(function() {
                    i = null, b.badInput === c && b.typeMismatch === d || j(a);
                });
            }
        }), d.$render = function() {
            var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
            b.val() !== a && b.val(a);
        };
    }
    function jd(a, b) {
        if (z(a)) return a;
        if (x(a)) {
            Mf.lastIndex = 0;
            var c = Mf.exec(a);
            if (c) {
                var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = Vc(d), k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), 
                new Date(d, 0, j.getDate() + k, f, g, h, i);
            }
        }
        return NaN;
    }
    function kd(a, b) {
        return function(c, d) {
            var e, g;
            if (z(c)) return c;
            if (x(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), 
                Gf.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, f(e, function(a, c) {
                    c < b.length && (g[b[c]] = +a);
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0);
            }
            return NaN;
        };
    }
    function ld(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }
            function n(a) {
                return u(a) && !z(a) ? d(a) || c : a;
            }
            md(f, g, h, i), id(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                if (i.$isEmpty(a)) return null;
                if (b.test(a)) {
                    var e = d(a, o);
                    return p && (e = Z(e, p)), e;
                }
                return c;
            }), i.$formatters.push(function(a) {
                if (a && !z(a)) throw qg("datefmt", "Expected `{0}` to be a date", a);
                return m(a) ? (o = a, o && p && (o = Z(o, p, !0)), l("date")(a, e, p)) : (o = null, 
                "");
            }), u(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function(a) {
                    return !m(a) || t(q) || d(a) >= q;
                }, h.$observe("min", function(a) {
                    q = n(a), i.$validate();
                });
            }
            if (u(h.max) || h.ngMax) {
                var r;
                i.$validators.max = function(a) {
                    return !m(a) || t(r) || d(a) <= r;
                }, h.$observe("max", function(a) {
                    r = n(a), i.$validate();
                });
            }
        };
    }
    function md(a, b, d, e) {
        var f = b[0], g = e.$$hasNativeValidators = v(f.validity);
        g && e.$parsers.push(function(a) {
            var d = b.prop(yd) || {};
            return d.badInput && !d.typeMismatch ? c : a;
        });
    }
    function nd(a, b, d, e, f, g) {
        if (md(a, b, d, e), id(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
            return e.$isEmpty(a) ? null : Jf.test(a) ? parseFloat(a) : c;
        }), e.$formatters.push(function(a) {
            if (!e.$isEmpty(a)) {
                if (!y(a)) throw qg("numfmt", "Expected `{0}` to be a number", a);
                a = a.toString();
            }
            return a;
        }), u(d.min) || d.ngMin) {
            var h;
            e.$validators.min = function(a) {
                return e.$isEmpty(a) || t(h) || a >= h;
            }, d.$observe("min", function(a) {
                u(a) && !y(a) && (a = parseFloat(a, 10)), h = y(a) && !isNaN(a) ? a : c, e.$validate();
            });
        }
        if (u(d.max) || d.ngMax) {
            var i;
            e.$validators.max = function(a) {
                return e.$isEmpty(a) || t(i) || i >= a;
            }, d.$observe("max", function(a) {
                u(a) && !y(a) && (a = parseFloat(a, 10)), i = y(a) && !isNaN(a) ? a : c, e.$validate();
            });
        }
    }
    function od(a, b, c, d, e, f) {
        id(a, b, c, d, e, f), gd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Hf.test(c);
        };
    }
    function pd(a, b, c, d, e, f) {
        id(a, b, c, d, e, f), gd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || If.test(c);
        };
    }
    function qd(a, b, c, d) {
        t(c.name) && b.attr("name", i());
        var e = function(a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type);
        };
        b.on("click", e), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue;
        }, c.$observe("value", d.$render);
    }
    function rd(a, b, c, d, e) {
        var f;
        if (u(d)) {
            if (f = a(d), !f.constant) throw qg("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
            return f(b);
        }
        return e;
    }
    function sd(a, b, c, d, e, f, g, h) {
        var i = rd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = rd(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function(a) {
            d.$setViewValue(b[0].checked, a && a.type);
        };
        b.on("click", k), d.$render = function() {
            b[0].checked = d.$viewValue;
        }, d.$isEmpty = function(a) {
            return a === !1;
        }, d.$formatters.push(function(a) {
            return Q(a, i);
        }), d.$parsers.push(function(a) {
            return a ? i : j;
        });
    }
    function td(a, b) {
        return a = "ngClass" + a, [ "$animate", function(c) {
            function d(a, b) {
                var c = [];
                a: for (var d = 0; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++) if (e == b[f]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                var b = [];
                return Rd(a) ? (f(a, function(a) {
                    b = b.concat(e(a));
                }), b) : x(a) ? a.split(" ") : v(a) ? (f(a, function(a, c) {
                    a && (b = b.concat(c.split(" ")));
                }), b) : a;
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a) {
                        var b = l(a, 1);
                        i.$addClass(b);
                    }
                    function k(a) {
                        var b = l(a, -1);
                        i.$removeClass(b);
                    }
                    function l(a, b) {
                        var c = h.data("$classCounts") || qa(), d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a));
                        }), h.data("$classCounts", c), d.join(" ");
                    }
                    function m(a, b) {
                        var e = d(b, a), f = d(a, b);
                        e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f);
                    }
                    function n(a) {
                        if (b === !0 || g.$index % 2 === b) {
                            var c = e(a || []);
                            if (o) {
                                if (!Q(a, o)) {
                                    var d = e(o);
                                    m(d, c);
                                }
                            } else j(c);
                        }
                        o = P(a);
                    }
                    var o;
                    g.$watch(i[a], n, !0), i.$observe("class", function(b) {
                        n(g.$eval(i[a]));
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? j(h) : k(h);
                        }
                    });
                }
            };
        } ];
    }
    function ud(a) {
        function b(a, b, i) {
            t(b) ? d("$pending", a, i) : e("$pending", a, i), H(b) ? b ? (l(h.$error, a, i), 
            k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), 
            l(h.$$success, a, i)), h.$pending ? (f(pg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(pg, !1), 
            h.$valid = vd(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, 
            g(a, j), h.$$parentForm.$setValidity(a, j, h);
        }
        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c);
        }
        function e(a, b, d) {
            h[a] && l(h[a], b, d), vd(h[a]) && (h[a] = c);
        }
        function f(a, b) {
            b && !j[a] ? (m.addClass(i, a), j[a] = !0) : !b && j[a] && (m.removeClass(i, a), 
            j[a] = !1);
        }
        function g(a, b) {
            a = a ? "-" + ja(a, "-") : "", f(jg + a, b === !0), f(kg + a, b === !1);
        }
        var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.$animate;
        j[kg] = !(j[jg] = i.hasClass(jg)), h.$setValidity = b;
    }
    function vd(a) {
        if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
        return !0;
    }
    function wd(a) {
        a[0].hasAttribute("selected") && (a[0].selected = !0);
    }
    var xd = /^\/(.+)\/([a-z]*)$/, yd = "validity", zd = function(a) {
        return x(a) ? a.toLowerCase() : a;
    }, Ad = Object.prototype.hasOwnProperty, Bd = function(a) {
        return x(a) ? a.toUpperCase() : a;
    }, Cd = function(a) {
        return x(a) ? a.replace(/[A-Z]/g, function(a) {
            return String.fromCharCode(32 | a.charCodeAt(0));
        }) : a;
    }, Dd = function(a) {
        return x(a) ? a.replace(/[a-z]/g, function(a) {
            return String.fromCharCode(-33 & a.charCodeAt(0));
        }) : a;
    };
    "i" !== "I".toLowerCase() && (zd = Cd, Bd = Dd);
    var Ed, Fd, Gd, Hd, Id = [].slice, Jd = [].splice, Kd = [].push, Ld = Object.prototype.toString, Md = Object.getPrototypeOf, Nd = d("ng"), Od = a.angular || (a.angular = {}), Pd = 0;
    Ed = b.documentMode, p.$inject = [], q.$inject = [];
    var Qd, Rd = Array.isArray, Sd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, Td = function(a) {
        return x(a) ? a.trim() : a;
    }, Ud = function(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, Vd = function() {
        function a() {
            try {
                return new Function(""), !1;
            } catch (a) {
                return !0;
            }
        }
        if (!u(Vd.rules)) {
            var c = b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
            if (c) {
                var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
                Vd.rules = {
                    noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
                    noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
                };
            } else Vd.rules = {
                noUnsafeEval: a(),
                noInlineStyle: !1
            };
        }
        return Vd.rules;
    }, Wd = function() {
        if (u(Wd.name_)) return Wd.name_;
        var a, c, d, e, f = Yd.length;
        for (c = 0; f > c; ++c) if (d = Yd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
            e = a.getAttribute(d + "jq");
            break;
        }
        return Wd.name_ = e;
    }, Xd = /:/g, Yd = [ "ng-", "data-ng-", "ng:", "x-ng-" ], Zd = /[A-Z]/g, $d = !1, _d = 1, ae = 2, be = 3, ce = 8, de = 9, ee = 11, fe = {
        full: "1.4.10",
        major: 1,
        minor: 4,
        dot: 10,
        codeName: "benignant-oscillation"
    };
    Da.expando = "ng339";
    var ge = Da.cache = {}, he = 1, ie = function(a, b, c) {
        a.addEventListener(b, c, !1);
    }, je = function(a, b, c) {
        a.removeEventListener(b, c, !1);
    };
    Da._data = function(a) {
        return this.cache[a[this.expando]] || {};
    };
    var ke = /([\:\-\_]+(.))/g, le = /^moz([A-Z])/, me = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, ne = d("jqLite"), oe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, pe = /<|&#?\w+;/, qe = /<([\w:-]+)/, re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, se = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, 
    se.th = se.td;
    var te = Node.prototype.contains || function(a) {
        return !!(16 & this.compareDocumentPosition(a));
    }, ue = Da.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c());
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Da(a).on("load", d));
        },
        toString: function() {
            var a = [];
            return f(this, function(b) {
                a.push("" + b);
            }), "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return Fd(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: Kd,
        sort: [].sort,
        splice: [].splice
    }, ve = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        ve[zd(a)] = a;
    });
    var we = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        we[a] = !0;
    });
    var xe = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: Ja,
        removeData: Ha,
        hasData: za
    }, function(a, b) {
        Da[b] = a;
    }), f({
        data: Ja,
        inheritedData: Pa,
        scope: function(a) {
            return Fd.data(a, "$scope") || Pa(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return Fd.data(a, "$isolateScope") || Fd.data(a, "$isolateScopeNoTemplate");
        },
        controller: Oa,
        injector: function(a) {
            return Pa(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: Ka,
        css: function(a, b, c) {
            return b = wa(b), u(c) ? void (a.style[b] = c) : a.style[b];
        },
        attr: function(a, b, d) {
            var e = a.nodeType;
            if (e !== be && e !== ae && e !== ce) {
                var f = zd(b);
                if (ve[f]) {
                    if (!u(d)) return a[b] || (a.attributes.getNamedItem(b) || p).specified ? f : c;
                    d ? (a[b] = !0, a.setAttribute(b, f)) : (a[b] = !1, a.removeAttribute(f));
                } else if (u(d)) a.setAttribute(b, d); else if (a.getAttribute) {
                    var g = a.getAttribute(b, 2);
                    return null === g ? c : g;
                }
            }
        },
        prop: function(a, b, c) {
            return u(c) ? void (a[b] = c) : a[b];
        },
        text: function() {
            function a(a, b) {
                if (t(b)) {
                    var c = a.nodeType;
                    return c === _d || c === be ? a.textContent : "";
                }
                a.textContent = b;
            }
            return a.$dv = "", a;
        }(),
        val: function(a, b) {
            if (t(b)) {
                if (a.multiple && "select" === M(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    }), 0 === c.length ? null : c;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            return t(b) ? a.innerHTML : (Fa(a, !0), void (a.innerHTML = b));
        },
        empty: Qa
    }, function(a, b) {
        Da.prototype[b] = function(b, c) {
            var d, e, f = this.length;
            if (a !== Qa && t(2 == a.length && a !== Ka && a !== Oa ? b : c)) {
                if (v(b)) {
                    for (d = 0; f > d; d++) if (a === Ja) a(this[d], b); else for (e in b) a(this[d], e, b[e]);
                    return this;
                }
                for (var g = a.$dv, h = t(g) ? Math.min(f, 1) : f, i = 0; h > i; i++) {
                    var j = a(this[i], b, c);
                    g = g ? g + j : j;
                }
                return g;
            }
            for (d = 0; f > d; d++) a(this[d], b, c);
            return this;
        };
    }), f({
        removeData: Ha,
        on: function(a, b, d, e) {
            if (u(e)) throw ne("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (ya(a)) {
                var f = Ia(a, !0), g = f.events, h = f.handle;
                h || (h = f.handle = Va(a, g));
                for (var i = b.indexOf(" ") >= 0 ? b.split(" ") : [ b ], j = i.length, k = function(b, c, e) {
                    var f = g[b];
                    f || (f = g[b] = [], f.specialHandlerWrapper = c, "$destroy" === b || e || ie(a, b, h)), 
                    f.push(d);
                }; j--; ) b = i[j], me[b] ? (k(me[b], Xa), k(b, c, !0)) : k(b);
            }
        },
        off: Ga,
        one: function(a, b, c) {
            a = Fd(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d);
            }), a.on(b, c);
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            Fa(a), f(new Da(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
            });
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === _d && b.push(a);
            }), b;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (c === _d || c === ee) {
                b = new Da(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f);
                }
            }
        },
        prepend: function(a, b) {
            if (a.nodeType === _d) {
                var c = a.firstChild;
                f(new Da(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            Ca(a, Fd(b).eq(0).clone()[0]);
        },
        remove: Ra,
        detach: function(a) {
            Ra(a, !0);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            b = new Da(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g;
            }
        },
        addClass: Ma,
        removeClass: La,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                t(d) && (d = !Ka(a, b)), (d ? Ma : La)(a, b);
            });
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== ee ? b : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: Ea,
        triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b, i = Ia(a), j = i && i.events, k = j && j[h];
            k && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0;
                },
                stopPropagation: p,
                type: h,
                target: a
            }, b.type && (d = l(d, b)), e = P(k), g = c ? [ d ].concat(c) : [ d ], f(e, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, g);
            }));
        }
    }, function(a, b) {
        Da.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) t(e) ? (e = a(this[f], b, c, d), 
            u(e) && (e = Fd(e))) : Na(e, a(this[f], b, c, d));
            return u(e) ? e : this;
        }, Da.prototype.bind = Da.prototype.on, Da.prototype.unbind = Da.prototype.off;
    }), $a.prototype = {
        put: function(a, b) {
            this[Za(a, this.nextUid)] = b;
        },
        get: function(a) {
            return this[Za(a, this.nextUid)];
        },
        remove: function(a) {
            var b = this[a = Za(a, this.nextUid)];
            return delete this[a], b;
        }
    };
    var ye = [ function() {
        this.$get = [ function() {
            return $a;
        } ];
    } ], ze = /^[^\(]*\(\s*([^\)]*)\)/m, Ae = /,/, Be = /^\s*(_?)(\S+?)\1\s*$/, Ce = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, De = d("$injector");
    bb.$$annotate = ab;
    var Ee = d("$animate"), Fe = 1, Ge = "ng-animate", He = function() {
        this.$get = function() {};
    }, Ie = function() {
        var a = new $a(), b = [];
        this.$get = [ "$$AnimateRunner", "$rootScope", function(c, d) {
            function e(a, b, c) {
                var d = !1;
                return b && (b = x(b) ? b.split(" ") : Rd(b) ? b : [], f(b, function(b) {
                    b && (d = !0, a[b] = c);
                })), d;
            }
            function g() {
                f(b, function(b) {
                    var c = a.get(b);
                    if (c) {
                        var d = fb(b.attr("class")), e = "", g = "";
                        f(c, function(a, b) {
                            var c = !!d[b];
                            a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b);
                        }), f(b, function(a) {
                            e && Ma(a, e), g && La(a, g);
                        }), a.remove(b);
                    }
                }), b.length = 0;
            }
            function h(c, f, h) {
                var i = a.get(c) || {}, j = e(i, f, !0), k = e(i, h, !1);
                (j || k) && (a.put(c, i), b.push(c), 1 === b.length && d.$$postDigest(g));
            }
            return {
                enabled: p,
                on: p,
                off: p,
                pin: p,
                push: function(a, b, d, e) {
                    e && e(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && h(a, d.addClass, d.removeClass);
                    var f = new c();
                    return f.complete(), f;
                }
            };
        } ];
    }, Je = [ "$provide", function(a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
            if (c && "." !== c.charAt(0)) throw Ee("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
            var e = c + "-animation";
            b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d);
        }, this.classNameFilter = function(a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, 
            this.$$classNameFilter)) {
                var b = new RegExp("(\\s+|\\/)" + Ge + "(\\s+|\\/)");
                if (b.test(this.$$classNameFilter.toString())) throw Ee("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ge);
            }
            return this.$$classNameFilter;
        }, this.$get = [ "$$animateQueue", function(a) {
            function b(a, b, c) {
                if (c) {
                    var d = eb(c);
                    !d || d.parentNode || d.previousElementSibling || (c = null);
                }
                c ? c.after(a) : b.prepend(a);
            }
            return {
                on: a.on,
                off: a.off,
                pin: a.pin,
                enabled: a.enabled,
                cancel: function(a) {
                    a.end && a.end();
                },
                enter: function(c, d, e, f) {
                    return d = d && Fd(d), e = e && Fd(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", gb(f));
                },
                move: function(c, d, e, f) {
                    return d = d && Fd(d), e = e && Fd(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", gb(f));
                },
                leave: function(b, c) {
                    return a.push(b, "leave", gb(c), function() {
                        b.remove();
                    });
                },
                addClass: function(b, c, d) {
                    return d = gb(d), d.addClass = db(d.addclass, c), a.push(b, "addClass", d);
                },
                removeClass: function(b, c, d) {
                    return d = gb(d), d.removeClass = db(d.removeClass, c), a.push(b, "removeClass", d);
                },
                setClass: function(b, c, d, e) {
                    return e = gb(e), e.addClass = db(e.addClass, c), e.removeClass = db(e.removeClass, d), 
                    a.push(b, "setClass", e);
                },
                animate: function(b, c, d, e, f) {
                    return f = gb(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, 
                    e = e || "ng-inline-animate", f.tempClasses = db(f.tempClasses, e), a.push(b, "animate", f);
                }
            };
        } ];
    } ], Ke = function() {
        this.$get = [ "$$rAF", function(a) {
            function b(b) {
                c.push(b), c.length > 1 || a(function() {
                    for (var a = 0; a < c.length; a++) c[a]();
                    c = [];
                });
            }
            var c = [];
            return function() {
                var a = !1;
                return b(function() {
                    a = !0;
                }), function(c) {
                    a ? c() : b(c);
                };
            };
        } ];
    }, Le = function() {
        this.$get = [ "$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(a, b, c, d, e) {
            function g(a) {
                this.setHost(a);
                var b = c(), f = function(a) {
                    e(a, 0, !1);
                };
                this._doneCallbacks = [], this._tick = function(a) {
                    var c = d[0];
                    c && c.hidden ? f(a) : b(a);
                }, this._state = 0;
            }
            var h = 0, i = 1, j = 2;
            return g.chain = function(a, b) {
                function c() {
                    return d === a.length ? void b(!0) : void a[d](function(a) {
                        return a === !1 ? void b(!1) : (d++, void c());
                    });
                }
                var d = 0;
                c();
            }, g.all = function(a, b) {
                function c(c) {
                    e = e && c, ++d === a.length && b(e);
                }
                var d = 0, e = !0;
                f(a, function(a) {
                    a.done(c);
                });
            }, g.prototype = {
                setHost: function(a) {
                    this.host = a || {};
                },
                done: function(a) {
                    this._state === j ? a() : this._doneCallbacks.push(a);
                },
                progress: p,
                getPromise: function() {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function(a, c) {
                            b.done(function(b) {
                                b === !1 ? c() : a();
                            });
                        });
                    }
                    return this.promise;
                },
                then: function(a, b) {
                    return this.getPromise().then(a, b);
                },
                "catch": function(a) {
                    return this.getPromise()["catch"](a);
                },
                "finally": function(a) {
                    return this.getPromise()["finally"](a);
                },
                pause: function() {
                    this.host.pause && this.host.pause();
                },
                resume: function() {
                    this.host.resume && this.host.resume();
                },
                end: function() {
                    this.host.end && this.host.end(), this._resolve(!0);
                },
                cancel: function() {
                    this.host.cancel && this.host.cancel(), this._resolve(!1);
                },
                complete: function(a) {
                    var b = this;
                    b._state === h && (b._state = i, b._tick(function() {
                        b._resolve(a);
                    }));
                },
                _resolve: function(a) {
                    this._state !== j && (f(this._doneCallbacks, function(b) {
                        b(a);
                    }), this._doneCallbacks.length = 0, this._state = j);
                }
            }, g;
        } ];
    }, Me = function() {
        this.$get = [ "$$rAF", "$q", "$$AnimateRunner", function(a, b, c) {
            return function(b, d) {
                function e() {
                    return a(function() {
                        f(), h || i.complete(), h = !0;
                    }), i;
                }
                function f() {
                    g.addClass && (b.addClass(g.addClass), g.addClass = null), g.removeClass && (b.removeClass(g.removeClass), 
                    g.removeClass = null), g.to && (b.css(g.to), g.to = null);
                }
                var g = d || {};
                g.$$prepared || (g = O(g)), g.cleanupStyles && (g.from = g.to = null), g.from && (b.css(g.from), 
                g.from = null);
                var h, i = new c();
                return {
                    start: e,
                    end: e
                };
            };
        } ];
    }, Ne = d("$compile");
    lb.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Oe = /^((?:x|data)[\:\-_])/i, Pe = d("$controller"), Qe = /^(\S+)(\s+as\s+([\w$]+))?$/, Re = function() {
        this.$get = [ "$document", function(a) {
            return function(b) {
                return b ? !b.nodeType && b instanceof Fd && (b = b[0]) : b = a[0].body, b.offsetWidth + 1;
            };
        } ];
    }, Se = "application/json", Te = {
        "Content-Type": Se + ";charset=utf-8"
    }, Ue = /^\[|^\{(?!\{)/, Ve = {
        "[": /]$/,
        "{": /}$/
    }, We = /^\)\]\}',?\n/, Xe = d("$http"), Ye = function(a) {
        return function() {
            throw Xe("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a);
        };
    }, Ze = Od.$interpolateMinErr = d("$interpolate");
    Ze.throwNoconcat = function(a) {
        throw Ze("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a);
    }, Ze.interr = function(a, b) {
        return Ze("interr", "Can't interpolate: {0}\n{1}", a, b.toString());
    };
    var $e = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, _e = {
        http: 80,
        https: 443,
        ftp: 21
    }, af = d("$location"), bf = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Tb("$$absUrl"),
        url: function(a) {
            if (t(a)) return this.$$url;
            var b = $e.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), 
            this.hash(b[5] || ""), this;
        },
        protocol: Tb("$$protocol"),
        host: Tb("$$host"),
        port: Tb("$$port"),
        path: Ub("$$path", function(a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (x(a) || y(a)) a = a.toString(), this.$$search = aa(a); else {
                    if (!v(a)) throw af("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    a = O(a, {}), f(a, function(b, c) {
                        null == b && delete a[c];
                    }), this.$$search = a;
                }
                break;

              default:
                t(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            return this.$$compose(), this;
        },
        hash: Ub("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    f([ Sb, Rb, Qb ], function(a) {
        a.prototype = Object.create(bf), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== Qb || !this.$$html5) throw af("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = t(b) ? null : b, this;
        };
    });
    var cf = d("$parse"), df = Function.prototype.call, ef = Function.prototype.apply, ff = Function.prototype.bind, gf = qa();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        gf[a] = !0;
    });
    var hf = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "\x0B",
        "'": "'",
        '"': '"'
    }, jf = function(a) {
        this.options = a;
    };
    jf.prototype = {
        constructor: jf,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b) this.readString(b); else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(b)) this.readIdent(); else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++; else if (this.isWhitespace(b)) this.index++; else {
                    var c = b + this.peek(), d = c + this.peek(2), e = gf[b], f = gf[c], g = gf[d];
                    if (e || f || g) {
                        var h = g ? d : f ? c : b;
                        this.tokens.push({
                            index: this.index,
                            text: h,
                            operator: !0
                        }), this.index += h.length;
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
            }
            return this.tokens;
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a);
        },
        peek: function(a) {
            var b = a || 1;
            return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1;
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "\x0B" === a || " " === a;
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, c) {
            c = c || this.index;
            var d = u(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
            throw cf("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = zd(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c; else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            });
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++;
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            });
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index);
                if (d += f, e) {
                    if ("u" === f) {
                        var g = this.text.substring(this.index + 1, this.index + 5);
                        g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), 
                        this.index += 4, c += String.fromCharCode(parseInt(g, 16));
                    } else {
                        var h = hf[f];
                        c += h || f;
                    }
                    e = !1;
                } else if ("\\" === f) e = !0; else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                    c += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var kf = function(a, b) {
        this.lexer = a, this.options = b;
    };
    kf.Program = "Program", kf.ExpressionStatement = "ExpressionStatement", kf.AssignmentExpression = "AssignmentExpression", 
    kf.ConditionalExpression = "ConditionalExpression", kf.LogicalExpression = "LogicalExpression", 
    kf.BinaryExpression = "BinaryExpression", kf.UnaryExpression = "UnaryExpression", 
    kf.CallExpression = "CallExpression", kf.MemberExpression = "MemberExpression", 
    kf.Identifier = "Identifier", kf.Literal = "Literal", kf.ArrayExpression = "ArrayExpression", 
    kf.Property = "Property", kf.ObjectExpression = "ObjectExpression", kf.ThisExpression = "ThisExpression", 
    kf.NGValueParameter = "NGValueParameter", kf.prototype = {
        ast: function(a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            b;
        },
        program: function() {
            for (var a = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), 
            !this.expect(";")) return {
                type: kf.Program,
                body: a
            };
        },
        expressionStatement: function() {
            return {
                type: kf.ExpressionStatement,
                expression: this.filterChain()
            };
        },
        filterChain: function() {
            for (var a, b = this.expression(); a = this.expect("|"); ) b = this.filter(b);
            return b;
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: kf.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a;
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), 
            {
                type: kf.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            }) : c;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||"); ) a = {
                type: kf.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a;
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&"); ) a = {
                type: kf.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a;
        },
        equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!=="); ) b = {
                type: kf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b;
        },
        relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">="); ) b = {
                type: kf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b;
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-"); ) b = {
                type: kf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b;
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%"); ) b = {
                type: kf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b;
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: kf.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary();
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = O(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", "."); ) "(" === b.text ? (a = {
                type: kf.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: kf.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: kf.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a;
        },
        filter: function(a) {
            for (var b = [ a ], c = {
                type: kf.CallExpression,
                callee: this.identifier(),
                arguments: b,
                filter: !0
            }; this.expect(":"); ) b.push(this.expression());
            return c;
        },
        parseArguments: function() {
            var a = [];
            if (")" !== this.peekToken().text) do a.push(this.expression()); while (this.expect(","));
            return a;
        },
        identifier: function() {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {
                type: kf.Identifier,
                name: a.text
            };
        },
        constant: function() {
            return {
                type: kf.Literal,
                value: this.consume().value
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                a.push(this.expression());
            } while (this.expect(","));
            return this.consume("]"), {
                type: kf.ArrayExpression,
                elements: a
            };
        },
        object: function() {
            var a, b = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                a = {
                    type: kf.Property,
                    kind: "init"
                }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), 
                this.consume(":"), a.value = this.expression(), b.push(a);
            } while (this.expect(","));
            return this.consume("}"), {
                type: kf.ObjectExpression,
                properties: b
            };
        },
        throwError: function(a, b) {
            throw cf("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw cf("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), 
            b;
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw cf("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, c, d) {
            return this.peekAhead(0, a, b, c, d);
        },
        peekAhead: function(a, b, c, d, e) {
            if (this.tokens.length > a) {
                var f = this.tokens[a], g = f.text;
                if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f;
            }
            return !1;
        },
        expect: function(a, b, c, d) {
            var e = this.peek(a, b, c, d);
            return e ? (this.tokens.shift(), e) : !1;
        },
        constants: {
            "true": {
                type: kf.Literal,
                value: !0
            },
            "false": {
                type: kf.Literal,
                value: !1
            },
            "null": {
                type: kf.Literal,
                value: null
            },
            undefined: {
                type: kf.Literal,
                value: c
            },
            "this": {
                type: kf.ThisExpression
            }
        }
    }, jc.prototype = {
        compile: function(a, b) {
            var d = this, e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, dc(e, d.$filter);
            var g, h = "";
            if (this.stage = "assign", g = gc(e)) {
                this.state.computing = "assign";
                var i = this.nextId();
                this.recurse(g, i), this.return_(i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            }
            var j = ec(e.body);
            d.stage = "inputs", f(j, function(a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                }, d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b;
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
            var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;", l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", k)(this.$filter, Xb, Zb, $b, Yb, _b, ac, bc, a);
            return this.state = this.stage = c, l.literal = hc(e), l.constant = ic(e), l;
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [], b = this.state.inputs, c = this;
            return f(b, function(b) {
                a.push("var " + b + "=" + c.generateFunction(b, "s"));
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("");
        },
        generateFunction: function(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
        },
        filterPrefix: function() {
            var a = [], b = this;
            return f(this.state.filters, function(c, d) {
                a.push(c + "=$filter(" + b.escape(d) + ")");
            }), a.length ? "var " + a.join(",") + ";" : "";
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
        },
        body: function(a) {
            return this.state[a].body.join("");
        },
        recurse: function(a, b, d, e, g, h) {
            var i, j, k, l, m = this;
            if (e = e || p, !h && u(a.watchId)) return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
            switch (a.type) {
              case kf.Program:
                f(a.body, function(b, d) {
                    m.recurse(b.expression, c, c, function(a) {
                        j = a;
                    }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j);
                });
                break;

              case kf.Literal:
                l = this.escape(a.value), this.assign(b, l), e(l);
                break;

              case kf.UnaryExpression:
                this.recurse(a.argument, c, c, function(a) {
                    j = a;
                }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
                break;

              case kf.BinaryExpression:
                this.recurse(a.left, c, c, function(a) {
                    i = a;
                }), this.recurse(a.right, c, c, function(a) {
                    j = a;
                }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", 
                this.assign(b, l), e(l);
                break;

              case kf.LogicalExpression:
                b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), 
                e(b);
                break;

              case kf.ConditionalExpression:
                b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), 
                e(b);
                break;

              case kf.Identifier:
                b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), 
                d.computed = !1, d.name = a.name), Xb(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
                    m.if_("inputs" === m.stage || "s", function() {
                        g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), 
                        m.assign(b, m.nonComputedMember("s", a.name));
                    });
                }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || lc(a.name)) && m.addEnsureSafeObject(b), 
                e(b);
                break;

              case kf.MemberExpression:
                i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function() {
                    m.if_(m.notNull(i), function() {
                        g && 1 !== g && m.addEnsureSafeAssignContext(i), a.computed ? (j = m.nextId(), m.recurse(a.property, j), 
                        m.getStringValue(j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), 
                        l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, 
                        d.name = j)) : (Xb(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), 
                        l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || lc(a.property.name)) && (l = m.ensureSafeObject(l)), 
                        m.assign(b, l), d && (d.computed = !1, d.name = a.property.name));
                    }, function() {
                        m.assign(b, "undefined");
                    }), e(b);
                }, !!g);
                break;

              case kf.CallExpression:
                b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function(a) {
                    var b = m.nextId();
                    m.recurse(a, b), k.push(b);
                }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, 
                k = [], m.recurse(a.callee, j, i, function() {
                    m.if_(m.notNull(j), function() {
                        m.addEnsureSafeFunction(j), f(a.arguments, function(a) {
                            m.recurse(a, m.nextId(), c, function(a) {
                                k.push(m.ensureSafeObject(a));
                            });
                        }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", 
                        l = m.ensureSafeObject(l), m.assign(b, l);
                    }, function() {
                        m.assign(b, "undefined");
                    }), e(b);
                }));
                break;

              case kf.AssignmentExpression:
                if (j = this.nextId(), i = {}, !fc(a.left)) throw cf("lval", "Trying to assign a value to a non l-value");
                this.recurse(a.left, c, i, function() {
                    m.if_(m.notNull(i.context), function() {
                        m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), 
                        m.addEnsureSafeAssignContext(i.context), l = m.member(i.context, i.name, i.computed) + a.operator + j, 
                        m.assign(b, l), e(b || l);
                    });
                }, 1);
                break;

              case kf.ArrayExpression:
                k = [], f(a.elements, function(a) {
                    m.recurse(a, m.nextId(), c, function(a) {
                        k.push(a);
                    });
                }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
                break;

              case kf.ObjectExpression:
                k = [], f(a.properties, function(a) {
                    m.recurse(a.value, m.nextId(), c, function(b) {
                        k.push(m.escape(a.key.type === kf.Identifier ? a.key.name : "" + a.key.value) + ":" + b);
                    });
                }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
                break;

              case kf.ThisExpression:
                this.assign(b, "s"), e("s");
                break;

              case kf.NGValueParameter:
                this.assign(b, "v"), e("v");
            }
        },
        getHasOwnProperty: function(a, b) {
            var c = a + "." + b, d = this.current().own;
            return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), 
            d[c];
        },
        assign: function(a, b) {
            return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0;
        },
        filter: function(a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), 
            this.state.filters[a];
        },
        ifDefined: function(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")";
        },
        plus: function(a, b) {
            return "plus(" + a + "," + b + ")";
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";");
        },
        if_: function(a, b, c) {
            if (a === !0) b(); else {
                var d = this.current().body;
                d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"));
            }
        },
        not: function(a) {
            return "!(" + a + ")";
        },
        notNull: function(a) {
            return a + "!=null";
        },
        nonComputedMember: function(a, b) {
            return a + "." + b;
        },
        computedMember: function(a, b) {
            return a + "[" + b + "]";
        },
        member: function(a, b, c) {
            return c ? this.computedMember(a, b) : this.nonComputedMember(a, b);
        },
        addEnsureSafeObject: function(a) {
            this.current().body.push(this.ensureSafeObject(a), ";");
        },
        addEnsureSafeMemberName: function(a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";");
        },
        addEnsureSafeFunction: function(a) {
            this.current().body.push(this.ensureSafeFunction(a), ";");
        },
        addEnsureSafeAssignContext: function(a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";");
        },
        ensureSafeObject: function(a) {
            return "ensureSafeObject(" + a + ",text)";
        },
        ensureSafeMemberName: function(a) {
            return "ensureSafeMemberName(" + a + ",text)";
        },
        ensureSafeFunction: function(a) {
            return "ensureSafeFunction(" + a + ",text)";
        },
        getStringValue: function(a) {
            this.assign(a, "getStringValue(" + a + ",text)");
        },
        ensureSafeAssignContext: function(a) {
            return "ensureSafeAssignContext(" + a + ",text)";
        },
        lazyRecurse: function(a, b, c, d, e, f) {
            var g = this;
            return function() {
                g.recurse(a, b, c, d, e, f);
            };
        },
        lazyAssign: function(a, b) {
            var c = this;
            return function() {
                c.assign(a, b);
            };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(a) {
            if (x(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (y(a)) return a.toString();
            if (a === !0) return "true";
            if (a === !1) return "false";
            if (null === a) return "null";
            if ("undefined" == typeof a) return "undefined";
            throw cf("esc", "IMPOSSIBLE");
        },
        nextId: function(a, b) {
            var c = "v" + this.state.nextId++;
            return a || this.current().vars.push(c + (b ? "=" + b : "")), c;
        },
        current: function() {
            return this.state[this.state.computing];
        }
    }, kc.prototype = {
        compile: function(a, b) {
            var c = this, d = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, dc(d, c.$filter);
            var e, g;
            (e = gc(d)) && (g = this.recurse(e));
            var h, i = ec(d.body);
            i && (h = [], f(i, function(a, b) {
                var d = c.recurse(a);
                a.input = d, h.push(d), a.watchId = b;
            }));
            var j = [];
            f(d.body, function(a) {
                j.push(c.recurse(a.expression));
            });
            var k = 0 === d.body.length ? function() {} : 1 === d.body.length ? j[0] : function(a, b) {
                var c;
                return f(j, function(d) {
                    c = d(a, b);
                }), c;
            };
            return g && (k.assign = function(a, b, c) {
                return g(a, c, b);
            }), h && (k.inputs = h), k.literal = hc(d), k.constant = ic(d), k;
        },
        recurse: function(a, b, d) {
            var e, g, h, i = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
              case kf.Literal:
                return this.value(a.value, b);

              case kf.UnaryExpression:
                return g = this.recurse(a.argument), this["unary" + a.operator](g, b);

              case kf.BinaryExpression:
                return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);

              case kf.LogicalExpression:
                return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);

              case kf.ConditionalExpression:
                return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);

              case kf.Identifier:
                return Xb(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || lc(a.name), b, d, i.expression);

              case kf.MemberExpression:
                return e = this.recurse(a.object, !1, !!d), a.computed || (Xb(a.property.name, i.expression), 
                g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);

              case kf.CallExpression:
                return h = [], f(a.arguments, function(a) {
                    h.push(i.recurse(a));
                }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), 
                a.filter ? function(a, d, e, f) {
                    for (var i = [], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
                    var k = g.apply(c, i, f);
                    return b ? {
                        context: c,
                        name: c,
                        value: k
                    } : k;
                } : function(a, c, d, e) {
                    var f, j = g(a, c, d, e);
                    if (null != j.value) {
                        Zb(j.context, i.expression), $b(j.value, i.expression);
                        for (var k = [], l = 0; l < h.length; ++l) k.push(Zb(h[l](a, c, d, e), i.expression));
                        f = Zb(j.value.apply(j.context, k), i.expression);
                    }
                    return b ? {
                        value: f
                    } : f;
                };

              case kf.AssignmentExpression:
                return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right), function(a, c, d, f) {
                    var h = e(a, c, d, f), j = g(a, c, d, f);
                    return Zb(h.value, i.expression), _b(h.context), h.context[h.name] = j, b ? {
                        value: j
                    } : j;
                };

              case kf.ArrayExpression:
                return h = [], f(a.elements, function(a) {
                    h.push(i.recurse(a));
                }), function(a, c, d, e) {
                    for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                    return b ? {
                        value: f
                    } : f;
                };

              case kf.ObjectExpression:
                return h = [], f(a.properties, function(a) {
                    h.push({
                        key: a.key.type === kf.Identifier ? a.key.name : "" + a.key.value,
                        value: i.recurse(a.value)
                    });
                }), function(a, c, d, e) {
                    for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                    return b ? {
                        value: f
                    } : f;
                };

              case kf.ThisExpression:
                return function(a) {
                    return b ? {
                        value: a
                    } : a;
                };

              case kf.NGValueParameter:
                return function(a, c, d, e) {
                    return b ? {
                        value: d
                    } : d;
                };
            }
        },
        "unary+": function(a, b) {
            return function(c, d, e, f) {
                var g = a(c, d, e, f);
                return g = u(g) ? +g : 0, b ? {
                    value: g
                } : g;
            };
        },
        "unary-": function(a, b) {
            return function(c, d, e, f) {
                var g = a(c, d, e, f);
                return g = u(g) ? -g : 0, b ? {
                    value: g
                } : g;
            };
        },
        "unary!": function(a, b) {
            return function(c, d, e, f) {
                var g = !a(c, d, e, f);
                return b ? {
                    value: g
                } : g;
            };
        },
        "binary+": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g), i = b(d, e, f, g), j = bc(h, i);
                return c ? {
                    value: j
                } : j;
            };
        },
        "binary-": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g), i = b(d, e, f, g), j = (u(h) ? h : 0) - (u(i) ? i : 0);
                return c ? {
                    value: j
                } : j;
            };
        },
        "binary*": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) * b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary/": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) / b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary%": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) % b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary===": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) === b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary!==": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) !== b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary==": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) == b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary!=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) != b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary<": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) < b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary>": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) > b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary<=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) <= b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary>=": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) >= b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary&&": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) && b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "binary||": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g) || b(d, e, f, g);
                return c ? {
                    value: h
                } : h;
            };
        },
        "ternary?:": function(a, b, c, d) {
            return function(e, f, g, h) {
                var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
                return d ? {
                    value: i
                } : i;
            };
        },
        value: function(a, b) {
            return function() {
                return b ? {
                    context: c,
                    name: c,
                    value: a
                } : a;
            };
        },
        identifier: function(a, b, d, e, f) {
            return function(g, h, i, j) {
                var k = h && a in h ? h : g;
                e && 1 !== e && k && !k[a] && (k[a] = {});
                var l = k ? k[a] : c;
                return b && Zb(l, f), d ? {
                    context: k,
                    name: a,
                    value: l
                } : l;
            };
        },
        computedMember: function(a, b, c, d, e) {
            return function(f, g, h, i) {
                var j, k, l = a(f, g, h, i);
                return null != l && (j = b(f, g, h, i), j = Yb(j), Xb(j, e), d && 1 !== d && (_b(l), 
                l && !l[j] && (l[j] = {})), k = l[j], Zb(k, e)), c ? {
                    context: l,
                    name: j,
                    value: k
                } : k;
            };
        },
        nonComputedMember: function(a, b, d, e, f, g) {
            return function(h, i, j, k) {
                var l = a(h, i, j, k);
                f && 1 !== f && (_b(l), l && !l[b] && (l[b] = {}));
                var m = null != l ? l[b] : c;
                return (d || lc(b)) && Zb(m, g), e ? {
                    context: l,
                    name: b,
                    value: m
                } : m;
            };
        },
        inputs: function(a, b) {
            return function(c, d, e, f) {
                return f ? f[b] : a(c, d, e);
            };
        }
    };
    var lf = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c, this.ast = new kf(this.lexer), 
        this.astCompiler = c.csp ? new kc(this.ast, b) : new jc(this.ast, b);
    };
    lf.prototype = {
        constructor: lf,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks);
        }
    };
    var mf = Object.prototype.valueOf, nf = d("$sce"), of = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Ne = d("$compile"), pf = b.createElement("a"), qf = Cc(a.location.href);
    Fc.$inject = [ "$document" ], Hc.$inject = [ "$provide" ];
    var rf = 22, sf = ".", tf = "0";
    Mc.$inject = [ "$locale" ], Nc.$inject = [ "$locale" ];
    var uf = {
        yyyy: Sc("FullYear", 4),
        yy: Sc("FullYear", 2, 0, !0),
        y: Sc("FullYear", 1),
        MMMM: Tc("Month"),
        MMM: Tc("Month", !0),
        MM: Sc("Month", 2, 1),
        M: Sc("Month", 1, 1),
        dd: Sc("Date", 2),
        d: Sc("Date", 1),
        HH: Sc("Hours", 2),
        H: Sc("Hours", 1),
        hh: Sc("Hours", 2, -12),
        h: Sc("Hours", 1, -12),
        mm: Sc("Minutes", 2),
        m: Sc("Minutes", 1),
        ss: Sc("Seconds", 2),
        s: Sc("Seconds", 1),
        sss: Sc("Milliseconds", 3),
        EEEE: Tc("Day"),
        EEE: Tc("Day", !0),
        a: Yc,
        Z: Uc,
        ww: Xc(2),
        w: Xc(1),
        G: Zc,
        GG: Zc,
        GGG: Zc,
        GGGG: $c
    }, vf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, wf = /^\-?\d+$/;
    _c.$inject = [ "$locale" ];
    var xf = r(zd), yf = r(Bd);
    cd.$inject = [ "$parse" ];
    var zf = r({
        restrict: "E",
        compile: function(a, b) {
            return b.href || b.xlinkHref ? void 0 : function(a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var c = "[object SVGAnimatedString]" === Ld.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function(a) {
                        b.attr(c) || a.preventDefault();
                    });
                }
            };
        }
    }), Af = {};
    f(ve, function(a, b) {
        function c(a, c, e) {
            a.$watch(e[d], function(a) {
                e.$set(b, !!a);
            });
        }
        if ("multiple" != a) {
            var d = mb("ng-" + b), e = c;
            "checked" === a && (e = function(a, b, e) {
                e.ngModel !== e[d] && c(a, b, e);
            }), Af[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                };
            };
        }
    }), f(xe, function(a, b) {
        Af[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(xd);
                        if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]));
                    }
                    a.$watch(d[b], function(a) {
                        d.$set(b, a);
                    });
                }
            };
        };
    }), f([ "src", "srcset", "href" ], function(a) {
        var b = mb("ng-" + a);
        Af[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === Ld.call(d.prop("href")) && (g = "xlinkHref", 
                    e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        return b ? (e.$set(g, b), void (Ed && f && d.prop(f, e[g]))) : void ("href" === a && e.$set(g, null));
                    });
                }
            };
        };
    });
    var Bf = {
        $addControl: p,
        $$renameControl: ed,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    }, Cf = "ng-submitted";
    fd.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var Df = function(a) {
        return [ "$timeout", "$parse", function(b, d) {
            function e(a) {
                return "" === a ? d('this[""]').assign : d(a).assign || p;
            }
            var f = {
                name: "form",
                restrict: a ? "EAC" : "E",
                require: [ "form", "^^?form" ],
                controller: fd,
                compile: function(d, f) {
                    d.addClass(lg).addClass(jg);
                    var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                    return {
                        pre: function(a, d, f, h) {
                            var i = h[0];
                            if (!("action" in f)) {
                                var j = function(b) {
                                    a.$apply(function() {
                                        i.$commitViewValue(), i.$setSubmitted();
                                    }), b.preventDefault();
                                };
                                ie(d[0], "submit", j), d.on("$destroy", function() {
                                    b(function() {
                                        je(d[0], "submit", j);
                                    }, 0, !1);
                                });
                            }
                            var k = h[1] || i.$$parentForm;
                            k.$addControl(i);
                            var m = g ? e(i.$name) : p;
                            g && (m(a, i), f.$observe(g, function(b) {
                                i.$name !== b && (m(a, c), i.$$parentForm.$$renameControl(i, b), (m = e(i.$name))(a, i));
                            })), d.on("$destroy", function() {
                                i.$$parentForm.$removeControl(i), m(a, c), l(i, Bf);
                            });
                        }
                    };
                }
            };
            return f;
        } ];
    }, Ef = Df(), Ff = Df(!0), Gf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Hf = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, If = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Jf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Kf = /^(\d{4})-(\d{2})-(\d{2})$/, Lf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Mf = /^(\d{4})-W(\d\d)$/, Nf = /^(\d{4})-(\d\d)$/, Of = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Pf = "keydown wheel mousedown", Qf = qa();
    f("date,datetime-local,month,time,week".split(","), function(a) {
        Qf[a] = !0;
    });
    var Rf = {
        text: hd,
        date: ld("date", Kf, kd(Kf, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": ld("datetimelocal", Lf, kd(Lf, [ "yyyy", "MM", "dd", "HH", "mm", "ss", "sss" ]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: ld("time", Of, kd(Of, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: ld("week", Mf, jd, "yyyy-Www"),
        month: ld("month", Nf, kd(Nf, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: nd,
        url: od,
        email: pd,
        radio: qd,
        checkbox: sd,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    }, Sf = [ "$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(e, f, g, h) {
                    h[0] && (Rf[zd(g.type)] || Rf.text)(e, f, g, h[0], b, a, c, d);
                }
            }
        };
    } ], Tf = /^(true|false|\d+)$/, Uf = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, b) {
                return Tf.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue));
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a);
                    });
                };
            }
        };
    }, Vf = [ "$compile", function(a) {
        return {
            restrict: "AC",
            compile: function(b) {
                return a.$$addBindingClass(b), function(b, c, d) {
                    a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function(a) {
                        c.textContent = t(a) ? "" : a;
                    });
                };
            }
        };
    } ], Wf = [ "$interpolate", "$compile", function(a, b) {
        return {
            compile: function(c) {
                return b.$$addBindingClass(c), function(c, d, e) {
                    var f = a(d.attr(e.$attr.ngBindTemplate));
                    b.$$addBindingInfo(d, f.expressions), d = d[0], e.$observe("ngBindTemplate", function(a) {
                        d.textContent = t(a) ? "" : a;
                    });
                };
            }
        };
    } ], Xf = [ "$sce", "$parse", "$compile", function(a, b, c) {
        return {
            restrict: "A",
            compile: function(d, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function(a) {
                    return (a || "").toString();
                });
                return c.$$addBindingClass(d), function(b, d, e) {
                    c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                        d.html(a.getTrustedHtml(f(b)) || "");
                    });
                };
            }
        };
    } ], Yf = r({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    }), Zf = td("", !0), $f = td("Odd", 0), _f = td("Even", 1), ag = dd({
        compile: function(a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak");
        }
    }), bg = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], cg = {}, dg = {
        blur: !0,
        focus: !0
    };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = mb("ng-" + a);
        cg[b] = [ "$parse", "$rootScope", function(c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f[b], null, !0);
                    return function(b, c) {
                        c.on(a, function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                });
                            };
                            dg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e);
                        });
                    };
                }
            };
        } ];
    });
    var eg = [ "$animate", function(a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, i, j;
                c.$watch(e.ngIf, function(c) {
                    c ? i || g(function(c, f) {
                        i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d);
                    }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = pa(h.clone), 
                    a.leave(j).then(function() {
                        j = null;
                    }), h = null));
                });
            }
        };
    } ], fg = [ "$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Od.noop,
            compile: function(d, e) {
                var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
                return function(d, e, i, j, k) {
                    var l, m, n, o = 0, p = function() {
                        m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function() {
                            m = null;
                        }), m = n, n = null);
                    };
                    d.$watch(f, function(f) {
                        var i = function() {
                            !u(h) || h && !d.$eval(h) || b();
                        }, m = ++o;
                        f ? (a(f, !0).then(function(a) {
                            if (!d.$$destroyed && m === o) {
                                var b = d.$new();
                                j.template = a;
                                var h = k(b, function(a) {
                                    p(), c.enter(a, null, e).then(i);
                                });
                                l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g);
                            }
                        }, function() {
                            d.$$destroyed || m === o && (p(), d.$emit("$includeContentError", f));
                        }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null);
                    });
                };
            }
        };
    } ], gg = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(c, d, e, f) {
                return /SVG/.test(d[0].toString()) ? (d.empty(), void a(Aa(f.template, b).childNodes)(c, function(a) {
                    d.append(a);
                }, {
                    futureParentElement: d
                })) : (d.html(f.template), void a(d.contents())(c));
            }
        };
    } ], hg = dd({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    }), ig = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? Td(g) : g, j = function(a) {
                    if (!t(a)) {
                        var b = [];
                        return a && f(a.split(i), function(a) {
                            a && b.push(h ? Td(a) : a);
                        }), b;
                    }
                };
                e.$parsers.push(j), e.$formatters.push(function(a) {
                    return Rd(a) ? a.join(g) : c;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, jg = "ng-valid", kg = "ng-invalid", lg = "ng-pristine", mg = "ng-dirty", ng = "ng-untouched", og = "ng-touched", pg = "ng-pending", qg = d("ngModel"), rg = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, 
        this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], 
        this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, 
        this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, 
        this.$pending = c, this.$name = l(d.name || "", !1)(a), this.$$parentForm = Bf;
        var m, n = g(d.ngModel), o = n.assign, q = n, r = o, s = null, v = this;
        this.$$setOptions = function(a) {
            if (v.$options = a, a && a.getterSetter) {
                var b = g(d.ngModel + "()"), c = g(d.ngModel + "($$$p)");
                q = function(a) {
                    var c = n(a);
                    return A(c) && (c = b(a)), c;
                }, r = function(a, b) {
                    A(n(a)) ? c(a, {
                        $$$p: v.$modelValue
                    }) : o(a, v.$modelValue);
                };
            } else if (!n.assign) throw qg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, $(e));
        }, this.$render = p, this.$isEmpty = function(a) {
            return t(a) || "" === a || null === a || a !== a;
        };
        var w = 0;
        ud({
            ctrl: this,
            $element: e,
            set: function(a, b) {
                a[b] = !0;
            },
            unset: function(a, b) {
                delete a[b];
            },
            $animate: h
        }), this.$setPristine = function() {
            v.$dirty = !1, v.$pristine = !0, h.removeClass(e, mg), h.addClass(e, lg);
        }, this.$setDirty = function() {
            v.$dirty = !0, v.$pristine = !1, h.removeClass(e, lg), h.addClass(e, mg), v.$$parentForm.$setDirty();
        }, this.$setUntouched = function() {
            v.$touched = !1, v.$untouched = !0, h.setClass(e, ng, og);
        }, this.$setTouched = function() {
            v.$touched = !0, v.$untouched = !1, h.setClass(e, og, ng);
        }, this.$rollbackViewValue = function() {
            i.cancel(s), v.$viewValue = v.$$lastCommittedViewValue, v.$render();
        }, this.$validate = function() {
            if (!y(v.$modelValue) || !isNaN(v.$modelValue)) {
                var a = v.$$lastCommittedViewValue, b = v.$$rawModelValue, d = v.$valid, e = v.$modelValue, f = v.$options && v.$options.allowInvalid;
                v.$$runValidators(b, a, function(a) {
                    f || d === a || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope());
                });
            }
        }, this.$$runValidators = function(a, b, d) {
            function e() {
                var a = v.$$parserName || "parse";
                return t(m) ? (i(a, null), !0) : (m || (f(v.$validators, function(a, b) {
                    i(b, null);
                }), f(v.$asyncValidators, function(a, b) {
                    i(b, null);
                })), i(a, m), m);
            }
            function g() {
                var c = !0;
                return f(v.$validators, function(d, e) {
                    var f = d(a, b);
                    c = c && f, i(e, f);
                }), c ? !0 : (f(v.$asyncValidators, function(a, b) {
                    i(b, null);
                }), !1);
            }
            function h() {
                var d = [], e = !0;
                f(v.$asyncValidators, function(f, g) {
                    var h = f(a, b);
                    if (!I(h)) throw qg("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                    i(g, c), d.push(h.then(function() {
                        i(g, !0);
                    }, function(a) {
                        e = !1, i(g, !1);
                    }));
                }), d.length ? k.all(d).then(function() {
                    j(e);
                }, p) : j(!0);
            }
            function i(a, b) {
                l === w && v.$setValidity(a, b);
            }
            function j(a) {
                l === w && d(a);
            }
            w++;
            var l = w;
            return e() && g() ? void h() : void j(!1);
        }, this.$commitViewValue = function() {
            var a = v.$viewValue;
            i.cancel(s), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, 
            v.$pristine && this.$setDirty(), this.$$parseAndValidate());
        }, this.$$parseAndValidate = function() {
            function b() {
                v.$modelValue !== g && v.$$writeModelToScope();
            }
            var d = v.$$lastCommittedViewValue, e = d;
            if (m = t(e) ? c : !0) for (var f = 0; f < v.$parsers.length; f++) if (e = v.$parsers[f](e), 
            t(e)) {
                m = !1;
                break;
            }
            y(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
            var g = v.$modelValue, h = v.$options && v.$options.allowInvalid;
            v.$$rawModelValue = e, h && (v.$modelValue = e, b()), v.$$runValidators(e, v.$$lastCommittedViewValue, function(a) {
                h || (v.$modelValue = a ? e : c, b());
            });
        }, this.$$writeModelToScope = function() {
            r(a, v.$modelValue), f(v.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (c) {
                    b(c);
                }
            });
        }, this.$setViewValue = function(a, b) {
            v.$viewValue = a, v.$options && !v.$options.updateOnDefault || v.$$debounceViewValueCommit(b);
        }, this.$$debounceViewValueCommit = function(b) {
            var c, d = 0, e = v.$options;
            e && u(e.debounce) && (c = e.debounce, y(c) ? d = c : y(c[b]) ? d = c[b] : y(c["default"]) && (d = c["default"])), 
            i.cancel(s), d ? s = i(function() {
                v.$commitViewValue();
            }, d) : j.$$phase ? v.$commitViewValue() : a.$apply(function() {
                v.$commitViewValue();
            });
        }, a.$watch(function() {
            var b = q(a);
            if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
                v.$modelValue = v.$$rawModelValue = b, m = c;
                for (var d = v.$formatters, e = d.length, f = b; e--; ) f = d[e](f);
                v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), 
                v.$$runValidators(b, f, p));
            }
            return b;
        });
    } ], sg = [ "$rootScope", function(a) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: rg,
            priority: 1,
            compile: function(b) {
                return b.addClass(lg).addClass(ng).addClass(jg), {
                    pre: function(a, b, c, d) {
                        var e = d[0], f = d[1] || e.$$parentForm;
                        e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                            e.$name !== a && e.$$parentForm.$$renameControl(e, a);
                        }), a.$on("$destroy", function() {
                            e.$$parentForm.$removeControl(e);
                        });
                    },
                    post: function(b, c, d, e) {
                        var f = e[0];
                        f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                            f.$$debounceViewValueCommit(a && a.type);
                        }), c.on("blur", function(c) {
                            f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched));
                        });
                    }
                };
            }
        };
    } ], tg = /(\s+|^)default(\s+|$)/, ug = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(a, b) {
                var c = this;
                this.$options = O(a.$eval(b.ngModelOptions)), u(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = Td(this.$options.updateOn.replace(tg, function() {
                    return c.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, vg = dd({
        terminal: !0,
        priority: 1e3
    }), wg = d("ngOptions"), xg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, yg = [ "$compile", "$parse", function(a, c) {
        function d(a, b, d) {
            function f(a, b, c, d, e) {
                this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e;
            }
            function g(a) {
                var b;
                if (!j && e(a)) b = a; else {
                    b = [];
                    for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
                }
                return b;
            }
            var h = a.match(xg);
            if (!h) throw wg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, $(b));
            var i = h[5] || h[7], j = h[6], k = / as /.test(h[0]) && h[1], l = h[9], m = c(h[2] ? h[1] : i), n = k && c(k), o = n || m, p = l && c(l), q = l ? function(a, b) {
                return p(d, b);
            } : function(a) {
                return Za(a);
            }, r = function(a, b) {
                return q(a, x(a, b));
            }, s = c(h[2] || h[1]), t = c(h[3] || ""), u = c(h[4] || ""), v = c(h[8]), w = {}, x = j ? function(a, b) {
                return w[j] = b, w[i] = a, w;
            } : function(a) {
                return w[i] = a, w;
            };
            return {
                trackBy: l,
                getTrackByValue: r,
                getWatchables: c(v, function(a) {
                    var b = [];
                    a = a || [];
                    for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                        var i = a === c ? f : c[f], j = (a[i], x(a[i], i)), k = q(a[i], j);
                        if (b.push(k), h[2] || h[1]) {
                            var l = s(d, j);
                            b.push(l);
                        }
                        if (h[4]) {
                            var m = u(d, j);
                            b.push(m);
                        }
                    }
                    return b;
                }),
                getOptions: function() {
                    for (var a = [], b = {}, c = v(d) || [], e = g(c), h = e.length, i = 0; h > i; i++) {
                        var j = c === e ? i : e[i], k = c[j], m = x(k, j), n = o(d, m), p = q(n, m), w = s(d, m), y = t(d, m), z = u(d, m), A = new f(p, n, w, y, z);
                        a.push(A), b[p] = A;
                    }
                    return {
                        items: a,
                        selectValueMap: b,
                        getOptionFromViewValue: function(a) {
                            return b[r(a)];
                        },
                        getViewValueFromOption: function(a) {
                            return l ? Od.copy(a.viewValue) : a.viewValue;
                        }
                    };
                }
            };
        }
        function g(b, c, e, g) {
            function j(a, b) {
                a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, 
                b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue);
            }
            function k(a, b, c, d) {
                var e;
                return b && zd(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), 
                e;
            }
            function l(a) {
                for (var b; a; ) b = a.nextSibling, Ra(a), a = b;
            }
            function m(a) {
                var b = p && p[0], c = w && w[0];
                if (b || c) for (;a && (a === b || a === c || a.nodeType === ce || "option" === M(a) && "" === a.value); ) a = a.nextSibling;
                return a;
            }
            function n() {
                var a = x && q.readValue();
                x = y.getOptions();
                var b = {}, d = c[0].firstChild;
                if (v && c.prepend(p), d = m(d), x.items.forEach(function(a) {
                    var e, f, g;
                    a.group ? (e = b[a.group], e || (f = k(c[0], d, "optgroup", i), d = f.nextSibling, 
                    f.label = a.group, e = b[a.group] = {
                        groupElement: f,
                        currentOptionElement: f.firstChild
                    }), g = k(e.groupElement, e.currentOptionElement, "option", h), j(a, g), e.currentOptionElement = g.nextSibling) : (g = k(c[0], d, "option", h), 
                    j(a, g), d = g.nextSibling);
                }), Object.keys(b).forEach(function(a) {
                    l(b[a].currentOptionElement);
                }), l(d), o.$render(), !o.$isEmpty(a)) {
                    var e = q.readValue(), f = y.trackBy || r;
                    (f ? Q(a, e) : a === e) || (o.$setViewValue(e), o.$render());
                }
            }
            var o = g[1];
            if (o) {
                for (var p, q = g[0], r = e.multiple, s = 0, t = c.children(), u = t.length; u > s; s++) if ("" === t[s].value) {
                    p = t.eq(s);
                    break;
                }
                var v = !!p, w = Fd(h.cloneNode(!1));
                w.val("?");
                var x, y = d(e.ngOptions, c, b), z = function() {
                    v || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0);
                }, A = function() {
                    v || p.remove();
                }, B = function() {
                    c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0);
                }, C = function() {
                    w.remove();
                };
                r ? (o.$isEmpty = function(a) {
                    return !a || 0 === a.length;
                }, q.writeValue = function(a) {
                    x.items.forEach(function(a) {
                        a.element.selected = !1;
                    }), a && a.forEach(function(a) {
                        var b = x.getOptionFromViewValue(a);
                        b && !b.disabled && (b.element.selected = !0);
                    });
                }, q.readValue = function() {
                    var a = c.val() || [], b = [];
                    return f(a, function(a) {
                        var c = x.selectValueMap[a];
                        c && !c.disabled && b.push(x.getViewValueFromOption(c));
                    }), b;
                }, y.trackBy && b.$watchCollection(function() {
                    return Rd(o.$viewValue) ? o.$viewValue.map(function(a) {
                        return y.getTrackByValue(a);
                    }) : void 0;
                }, function() {
                    o.$render();
                })) : (q.writeValue = function(a) {
                    var b = x.getOptionFromViewValue(a);
                    b && !b.disabled ? (c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, 
                    b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), 
                    z()) : (A(), B());
                }, q.readValue = function() {
                    var a = x.selectValueMap[c.val()];
                    return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null;
                }, y.trackBy && b.$watch(function() {
                    return y.getTrackByValue(o.$viewValue);
                }, function() {
                    o.$render();
                })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = Fd(h.cloneNode(!1)), 
                n(), b.$watchCollection(y.getWatchables, n);
            }
        }
        var h = b.createElement("option"), i = b.createElement("optgroup");
        return {
            restrict: "A",
            terminal: !0,
            require: [ "select", "?ngModel" ],
            link: {
                pre: function(a, b, c, d) {
                    d[0].registerOption = p;
                },
                post: g
            }
        };
    } ], zg = [ "$locale", "$interpolate", "$log", function(a, b, c) {
        var d = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
            link: function(g, h, i) {
                function j(a) {
                    h.text(a || "");
                }
                var k, l = i.count, m = i.$attr.when && h.attr(i.$attr.when), n = i.offset || 0, o = g.$eval(m) || {}, q = {}, r = b.startSymbol(), s = b.endSymbol(), u = r + l + "-" + n + s, v = Od.noop;
                f(i, function(a, b) {
                    var c = e.exec(b);
                    if (c) {
                        var d = (c[1] ? "-" : "") + zd(c[2]);
                        o[d] = h.attr(i.$attr[b]);
                    }
                }), f(o, function(a, c) {
                    q[c] = b(a.replace(d, u));
                }), g.$watch(l, function(b) {
                    var d = parseFloat(b), e = isNaN(d);
                    if (e || d in o || (d = a.pluralCat(d - n)), d !== k && !(e && y(k) && isNaN(k))) {
                        v();
                        var f = q[d];
                        t(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), 
                        v = p, j()) : v = g.$watch(f, j), k = d;
                    }
                });
            }
        };
    } ], Ag = [ "$parse", "$animate", function(a, g) {
        var h = "$$NG_REMOVED", i = d("ngRepeat"), j = function(a, b, c, d, e, f, g) {
            a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, 
            a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b));
        }, k = function(a) {
            return a.clone[0];
        }, l = function(a) {
            return a.clone[a.clone.length - 1];
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(d, m) {
                var n = m.ngRepeat, o = b.createComment(" end ngRepeat: " + n + " "), p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                var q = p[1], r = p[2], s = p[3], t = p[4];
                if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                var u = p[3] || p[1], v = p[2];
                if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                var w, x, y, z, A = {
                    $id: Za
                };
                return t ? w = a(t) : (y = function(a, b) {
                    return Za(b);
                }, z = function(a) {
                    return a;
                }), function(a, b, d, m, p) {
                    w && (x = function(b, c, d) {
                        return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A);
                    });
                    var q = qa();
                    a.$watchCollection(r, function(d) {
                        var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0], J = qa();
                        if (s && (a[s] = d), e(d)) E = d, D = x || y; else {
                            D = x || z, E = [];
                            for (var K in d) Ad.call(d, K) && "$" !== K.charAt(0) && E.push(K);
                        }
                        for (w = E.length, G = new Array(w), m = 0; w > m; m++) if (A = d === E ? m : E[m], 
                        B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F; else {
                            if (J[C]) throw f(G, function(a) {
                                a && a.scope && (q[a.id] = a);
                            }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                            G[m] = {
                                id: C,
                                scope: c,
                                clone: c
                            }, J[C] = !0;
                        }
                        for (var L in q) {
                            if (F = q[L], H = pa(F.clone), g.leave(H), H[0].parentNode) for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                            F.scope.$destroy();
                        }
                        for (m = 0; w > m; m++) if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                            t = I;
                            do t = t.nextSibling; while (t && t[h]);
                            k(F) != t && g.move(pa(F.clone), null, I), I = l(F), j(F.scope, m, u, B, v, A, w);
                        } else p(function(a, b) {
                            F.scope = b;
                            var c = o.cloneNode(!1);
                            a[a.length++] = c, g.enter(a, null, I), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w);
                        });
                        q = J;
                    });
                };
            }
        };
    } ], Bg = "ng-hide", Cg = "ng-hide-animate", Dg = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngShow, function(b) {
                    a[b ? "removeClass" : "addClass"](c, Bg, {
                        tempClasses: Cg
                    });
                });
            }
        };
    } ], Eg = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngHide, function(b) {
                    a[b ? "addClass" : "removeClass"](c, Bg, {
                        tempClasses: Cg
                    });
                });
            }
        };
    } ], Fg = dd(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "");
            }), a && b.css(a);
        }, !0);
    }), Gg = [ "$animate", function(a) {
        return {
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(c, d, e, g) {
                var h = e.ngSwitch || e.on, i = [], j = [], k = [], l = [], m = function(a, b) {
                    return function() {
                        a.splice(b, 1);
                    };
                };
                c.$watch(h, function(c) {
                    var d, e;
                    for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                    for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                        var h = pa(j[d].clone);
                        l[d].$destroy();
                        var n = k[d] = a.leave(h);
                        n.then(m(k, d));
                    }
                    j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                        c.transclude(function(d, e) {
                            l.push(e);
                            var f = c.element;
                            d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                            var g = {
                                clone: d
                            };
                            j.push(g), a.enter(d, f.parent(), f);
                        });
                    });
                });
            }
        };
    } ], Hg = dd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                transclude: e,
                element: b
            });
        }
    }), Ig = dd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                transclude: e,
                element: b
            });
        }
    }), Jg = dd({
        restrict: "EAC",
        link: function(a, b, c, e, f) {
            if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", $(b));
            f(function(a) {
                b.empty(), b.append(a);
            });
        }
    }), Kg = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
                if ("text/ng-template" == c.type) {
                    var d = c.id, e = b[0].text;
                    a.put(d, e);
                }
            }
        };
    } ], Lg = {
        $setViewValue: p,
        $render: p
    }, Mg = [ "$element", "$scope", "$attrs", function(a, d, e) {
        var f = this, g = new $a();
        f.ngModelCtrl = Lg, f.unknownOption = Fd(b.createElement("option")), f.renderUnknownOption = function(b) {
            var c = "? " + Za(b) + " ?";
            f.unknownOption.val(c), a.prepend(f.unknownOption), a.val(c);
        }, d.$on("$destroy", function() {
            f.renderUnknownOption = p;
        }), f.removeUnknownOption = function() {
            f.unknownOption.parent() && f.unknownOption.remove();
        }, f.readValue = function() {
            return f.removeUnknownOption(), a.val();
        }, f.writeValue = function(b) {
            f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), 
            a.val("")) : f.renderUnknownOption(b);
        }, f.addOption = function(a, b) {
            if (b[0].nodeType !== ce) {
                na(a, '"option value"'), "" === a && (f.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1), f.ngModelCtrl.$render(), wd(b);
            }
        }, f.removeOption = function(a) {
            var b = g.get(a);
            b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1));
        }, f.hasOption = function(a) {
            return !!g.get(a);
        }, f.registerOption = function(a, b, c, d, e) {
            if (d) {
                var g;
                c.$observe("value", function(a) {
                    u(g) && f.removeOption(g), g = a, f.addOption(a, b);
                });
            } else e ? a.$watch(e, function(a, d) {
                c.$set("value", a), d !== a && f.removeOption(d), f.addOption(a, b);
            }) : f.addOption(c.value, b);
            b.on("$destroy", function() {
                f.removeOption(c.value), f.ngModelCtrl.$render();
            });
        };
    } ], Ng = function() {
        function a(a, b, c, d) {
            var e = d[1];
            if (e) {
                var g = d[0];
                if (g.ngModelCtrl = e, b.on("change", function() {
                    a.$apply(function() {
                        e.$setViewValue(g.readValue());
                    });
                }), c.multiple) {
                    g.readValue = function() {
                        var a = [];
                        return f(b.find("option"), function(b) {
                            b.selected && a.push(b.value);
                        }), a;
                    }, g.writeValue = function(a) {
                        var c = new $a(a);
                        f(b.find("option"), function(a) {
                            a.selected = u(c.get(a.value));
                        });
                    };
                    var h, i = NaN;
                    a.$watch(function() {
                        i !== e.$viewValue || Q(h, e.$viewValue) || (h = P(e.$viewValue), e.$render()), 
                        i = e.$viewValue;
                    }), e.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    };
                }
            }
        }
        function b(a, b, c, d) {
            var e = d[1];
            if (e) {
                var f = d[0];
                e.$render = function() {
                    f.writeValue(e.$viewValue);
                };
            }
        }
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: Mg,
            priority: 1,
            link: {
                pre: a,
                post: b
            }
        };
    }, Og = [ "$interpolate", function(a) {
        return {
            restrict: "E",
            priority: 100,
            compile: function(b, c) {
                if (u(c.value)) var d = a(c.value, !0); else {
                    var e = a(b.text(), !0);
                    e || c.$set("value", b.text());
                }
                return function(a, b, c) {
                    var f = "$selectController", g = b.parent(), h = g.data(f) || g.parent().data(f);
                    h && h.registerOption(a, b, c, d, e);
                };
            }
        };
    } ], Pg = r({
        restrict: "E",
        terminal: !1
    }), Qg = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                d && (c.required = !0, d.$validators.required = function(a, b) {
                    return !c.required || !d.$isEmpty(b);
                }, c.$observe("required", function() {
                    d.$validate();
                }));
            }
        };
    }, Rg = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, e, f) {
                if (f) {
                    var g, h = e.ngPattern || e.pattern;
                    e.$observe("pattern", function(a) {
                        if (x(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, $(b));
                        g = a || c, f.$validate();
                    }), f.$validators.pattern = function(a, b) {
                        return f.$isEmpty(b) || t(g) || g.test(b);
                    };
                }
            }
        };
    }, Sg = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    var e = -1;
                    c.$observe("maxlength", function(a) {
                        var b = n(a);
                        e = isNaN(b) ? -1 : b, d.$validate();
                    }), d.$validators.maxlength = function(a, b) {
                        return 0 > e || d.$isEmpty(b) || b.length <= e;
                    };
                }
            }
        };
    }, Tg = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    var e = 0;
                    c.$observe("minlength", function(a) {
                        e = n(a) || 0, d.$validate();
                    }), d.$validators.minlength = function(a, b) {
                        return d.$isEmpty(b) || b.length >= e;
                    };
                }
            }
        };
    };
    return a.angular.bootstrap ? void (a.console && console.log("WARNING: Tried to load angular more than once.")) : (ka(), 
    ua(Od), Od.module("ngLocale", [], [ "$provide", function(a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1;
        }
        function d(a, d) {
            var e = d;
            c === e && (e = Math.min(b(a), 3));
            var f = Math.pow(10, e), g = (a * f | 0) % f;
            return {
                v: e,
                f: g
            };
        }
        var e = {
            ZERO: "zero",
            ONE: "one",
            TWO: "two",
            FEW: "few",
            MANY: "many",
            OTHER: "other"
        };
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: [ "AM", "PM" ],
                DAY: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                ERANAMES: [ "Before Christ", "Anno Domini" ],
                ERAS: [ "BC", "AD" ],
                FIRSTDAYOFWEEK: 6,
                MONTH: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                SHORTDAY: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                SHORTMONTH: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                STANDALONEMONTH: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                WEEKENDRANGE: [ 5, 6 ],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [ {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                } ]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function(a, b) {
                var c = 0 | a, f = d(a, b);
                return 1 == c && 0 == f.v ? e.ONE : e.OTHER;
            }
        });
    } ]), void Fd(b).ready(function() {
        fa(b, ga);
    }));
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), 
function(a, b, c) {
    function d() {
        function a(a, c) {
            return b.extend(Object.create(a), c);
        }
        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g, function(a, b, c, d) {
                var f = "?" === d || "*?" === d ? "?" : null, g = "*" === d || "*?" === d ? "*" : null;
                return e.push({
                    name: c,
                    optional: !!f
                }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "");
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), 
            d;
        }
        var d = {};
        this.when = function(a, e) {
            var f = b.copy(e);
            if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), 
            d[a] = b.extend(f, a && c(a, f)), a) {
                var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[g] = b.extend({
                    redirectTo: a
                }, c(g, f));
            }
            return this;
        }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
            return "string" == typeof a && (a = {
                redirectTo: a
            }), this.when(null, a), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, e, f, g, h, j, k) {
            function l(a, b) {
                var c = b.keys, d = {};
                if (!b.regexp) return null;
                var e = b.regexp.exec(a);
                if (!e) return null;
                for (var f = 1, g = e.length; g > f; ++f) {
                    var h = c[f - 1], i = e[f];
                    h && i && (d[h.name] = i);
                }
                return d;
            }
            function m(a) {
                var d = t.current;
                q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, 
                r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault();
            }
            function n() {
                var a = t.current, d = q;
                r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, 
                t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), 
                g.when(d).then(function() {
                    if (d) {
                        var a, c, e = b.extend({}, d.resolve);
                        return b.forEach(e, function(a, c) {
                            e[c] = b.isString(a) ? h.get(a) : h.invoke(a, null, null, c);
                        }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), 
                        b.isDefined(c) && (d.loadedTemplateUrl = k.valueOf(c), a = j(c))), b.isDefined(a) && (e.$template = a), 
                        g.all(e);
                    }
                }).then(function(e) {
                    d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a));
                }, function(b) {
                    d == t.current && c.$broadcast("$routeChangeError", d, a, b);
                }));
            }
            function o() {
                var c, f;
                return b.forEach(d, function(d, g) {
                    !f && (c = l(e.path(), d)) && (f = a(d, {
                        params: b.extend({}, e.search(), c),
                        pathParams: c
                    }), f.$$route = d);
                }), f || d[null] && a(d[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function p(a, c) {
                var d = [];
                return b.forEach((a || "").split(":"), function(a, b) {
                    if (0 === b) d.push(a); else {
                        var e = a.match(/(\w+)(?:[?*])?(.*)/), f = e[1];
                        d.push(c[f]), d.push(e[2] || ""), delete c[f];
                    }
                }), d.join("");
            }
            var q, r, s = !1, t = {
                routes: d,
                reload: function() {
                    s = !0;
                    var a = {
                        defaultPrevented: !1,
                        preventDefault: function() {
                            this.defaultPrevented = !0, s = !1;
                        }
                    };
                    c.$evalAsync(function() {
                        m(a), a.defaultPrevented || n();
                    });
                },
                updateParams: function(a) {
                    if (!this.current || !this.current.$$route) throw i("norout", "Tried updating route when with no current route");
                    a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), 
                    e.search(a);
                }
            };
            return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t;
        } ];
    }
    function e() {
        this.$get = function() {
            return {};
        };
    }
    function f(a, c, d) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(e, f, g, h, i) {
                function j() {
                    n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), 
                    n.then(function() {
                        n = null;
                    }), m = null);
                }
                function k() {
                    var g = a.current && a.current.locals, h = g && g.$template;
                    if (b.isDefined(h)) {
                        var k = e.$new(), n = a.current, q = i(k, function(a) {
                            d.enter(a, null, m || f).then(function() {
                                !b.isDefined(o) || o && !e.$eval(o) || c();
                            }), j();
                        });
                        m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p);
                    } else j();
                }
                var l, m, n, o = g.autoscroll, p = g.onload || "";
                e.$on("$routeChangeSuccess", k), k();
            }
        };
    }
    function g(a, b, c) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(d, e) {
                var f = c.current, g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                if (f.controller) {
                    g.$scope = d;
                    var i = b(f.controller, g);
                    f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), 
                    e.children().data("$ngControllerController", i);
                }
                h(d);
            }
        };
    }
    var h = b.module("ngRoute", [ "ng" ]).provider("$route", d), i = b.$$minErr("ngRoute");
    h.provider("$routeParams", e), h.directive("ngView", f), h.directive("ngView", g), 
    f.$inject = [ "$route", "$anchorScroll", "$animate" ], g.$inject = [ "$compile", "$controller", "$route" ];
}(window, window.angular), angular.module("ab-base64", []).constant("base64", function() {
    var a = {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        lookup: null,
        ie: /MSIE /.test(navigator.userAgent),
        ieo: /MSIE [67]/.test(navigator.userAgent),
        encode: function(b) {
            var c, d, e, f, g = a.toUtf8(b), h = -1, i = g.length, j = [ , , ,  ];
            if (a.ie) {
                for (c = []; ++h < i; ) d = g[h], e = g[++h], j[0] = d >> 2, j[1] = (3 & d) << 4 | e >> 4, 
                isNaN(e) ? j[2] = j[3] = 64 : (f = g[++h], j[2] = (15 & e) << 2 | f >> 6, j[3] = isNaN(f) ? 64 : 63 & f), 
                c.push(a.alphabet.charAt(j[0]), a.alphabet.charAt(j[1]), a.alphabet.charAt(j[2]), a.alphabet.charAt(j[3]));
                return c.join("");
            }
            for (c = ""; ++h < i; ) d = g[h], e = g[++h], j[0] = d >> 2, j[1] = (3 & d) << 4 | e >> 4, 
            isNaN(e) ? j[2] = j[3] = 64 : (f = g[++h], j[2] = (15 & e) << 2 | f >> 6, j[3] = isNaN(f) ? 64 : 63 & f), 
            c += a.alphabet[j[0]] + a.alphabet[j[1]] + a.alphabet[j[2]] + a.alphabet[j[3]];
            return c;
        },
        decode: function(b) {
            if (b = b.replace(/\s/g, ""), b.length % 4) throw new Error("InvalidLengthError: decode failed: The string to be decoded is not the correct length for a base64 encoded string.");
            if (/[^A-Za-z0-9+\/=\s]/g.test(b)) throw new Error("InvalidCharacterError: decode failed: The string contains characters invalid in a base64 encoded string.");
            var c, d = a.fromUtf8(b), e = 0, f = d.length;
            if (a.ieo) {
                for (c = []; f > e; ) d[e] < 128 ? c.push(String.fromCharCode(d[e++])) : d[e] > 191 && d[e] < 224 ? c.push(String.fromCharCode((31 & d[e++]) << 6 | 63 & d[e++])) : c.push(String.fromCharCode((15 & d[e++]) << 12 | (63 & d[e++]) << 6 | 63 & d[e++]));
                return c.join("");
            }
            for (c = ""; f > e; ) c += d[e] < 128 ? String.fromCharCode(d[e++]) : d[e] > 191 && d[e] < 224 ? String.fromCharCode((31 & d[e++]) << 6 | 63 & d[e++]) : String.fromCharCode((15 & d[e++]) << 12 | (63 & d[e++]) << 6 | 63 & d[e++]);
            return c;
        },
        toUtf8: function(a) {
            var b, c = -1, d = a.length, e = [];
            if (/^[\x00-\x7f]*$/.test(a)) for (;++c < d; ) e.push(a.charCodeAt(c)); else for (;++c < d; ) b = a.charCodeAt(c), 
            128 > b ? e.push(b) : 2048 > b ? e.push(b >> 6 | 192, 63 & b | 128) : e.push(b >> 12 | 224, b >> 6 & 63 | 128, 63 & b | 128);
            return e;
        },
        fromUtf8: function(b) {
            var c, d = -1, e = [], f = [ , , ,  ];
            if (!a.lookup) {
                for (c = a.alphabet.length, a.lookup = {}; ++d < c; ) a.lookup[a.alphabet.charAt(d)] = d;
                d = -1;
            }
            for (c = b.length; ++d < c && (f[0] = a.lookup[b.charAt(d)], f[1] = a.lookup[b.charAt(++d)], 
            e.push(f[0] << 2 | f[1] >> 4), f[2] = a.lookup[b.charAt(++d)], 64 !== f[2]) && (e.push((15 & f[1]) << 4 | f[2] >> 2), 
            f[3] = a.lookup[b.charAt(++d)], 64 !== f[3]); ) e.push((3 & f[2]) << 6 | f[3]);
            return e;
        }
    }, b = {
        decode: function(b) {
            b = b.replace(/-/g, "+").replace(/_/g, "/");
            var c = b.length % 4;
            if (c) {
                if (1 === c) throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");
                b += new Array(5 - c).join("=");
            }
            return a.decode(b);
        },
        encode: function(b) {
            var c = a.encode(b);
            return c.replace(/\+/g, "-").replace(/\//g, "_").split("=", 1)[0];
        }
    };
    return {
        decode: a.decode,
        encode: a.encode,
        urldecode: b.decode,
        urlencode: b.encode
    };
}()), function() {
    angular.module("ui.mask", []).value("uiMaskConfig", {
        maskDefinitions: {
            "9": /\d/,
            A: /[a-zA-Z]/,
            "*": /[a-zA-Z0-9]/
        },
        clearOnBlur: !0,
        clearOnBlurPlaceholder: !1,
        escChar: "\\",
        eventsToHandle: [ "input", "keyup", "click", "focus" ],
        addDefaultPlaceholder: !0
    }).provider("uiMask.Config", function() {
        var a = {};
        this.maskDefinitions = function(b) {
            return a.maskDefinitions = b;
        }, this.clearOnBlur = function(b) {
            return a.clearOnBlur = b;
        }, this.clearOnBlurPlaceholder = function(b) {
            return a.clearOnBlurPlaceholder = b;
        }, this.eventsToHandle = function(b) {
            return a.eventsToHandle = b;
        }, this.addDefaultPlaceholder = function(b) {
            return a.addDefaultPlaceholder = b;
        }, this.$get = [ "uiMaskConfig", function(b) {
            var c = b;
            for (var d in a) angular.isObject(a[d]) && !angular.isArray(a[d]) ? angular.extend(c[d], a[d]) : c[d] = a[d];
            return c;
        } ];
    }).directive("uiMask", [ "uiMask.Config", function(a) {
        function b(a) {
            return a === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }
        return {
            priority: 100,
            require: "ngModel",
            restrict: "A",
            compile: function() {
                var c = a;
                return function(a, d, e, f) {
                    function g(a) {
                        return angular.isDefined(a) ? (u(a), S ? (m(), n(), !0) : l()) : l();
                    }
                    function h(a) {
                        a && (H = a, !S || 0 === d.val().length && angular.isDefined(e.placeholder) || d.val(r(q(d.val()))));
                    }
                    function i() {
                        return g(e.uiMask);
                    }
                    function j(a) {
                        return S ? (K = q(a || ""), M = p(K), f.$setValidity("mask", M), M && K.length ? r(K) : void 0) : a;
                    }
                    function k(a) {
                        return S ? (K = q(a || ""), M = p(K), f.$viewValue = K.length ? r(K) : "", f.$setValidity("mask", M), 
                        M ? X ? f.$viewValue : K : void 0) : a;
                    }
                    function l() {
                        return S = !1, o(), angular.isDefined(U) ? d.attr("placeholder", U) : d.removeAttr("placeholder"), 
                        angular.isDefined(V) ? d.attr("maxlength", V) : d.removeAttr("maxlength"), d.val(f.$modelValue), 
                        f.$viewValue = f.$modelValue, !1;
                    }
                    function m() {
                        K = O = q(f.$modelValue || ""), L = N = r(K), M = p(K), e.maxlength && d.attr("maxlength", 2 * F[F.length - 1]), 
                        !U && Y.addDefaultPlaceholder && d.attr("placeholder", H);
                        for (var a = f.$modelValue, b = f.$formatters.length; b--; ) a = f.$formatters[b](a);
                        f.$viewValue = a || "", f.$render();
                    }
                    function n() {
                        T || (d.bind("blur", v), d.bind("mousedown mouseup", x), d.bind("keydown", z), d.bind(Y.eventsToHandle.join(" "), A), 
                        T = !0);
                    }
                    function o() {
                        T && (d.unbind("blur", v), d.unbind("mousedown", x), d.unbind("mouseup", x), d.unbind("keydown", z), 
                        d.unbind("input", A), d.unbind("keyup", A), d.unbind("click", A), d.unbind("focus", A), 
                        T = !1);
                    }
                    function p(a) {
                        return a.length ? a.length >= J : !0;
                    }
                    function q(a) {
                        var b, c, e = "", f = d[0], g = G.slice(), h = P, i = h + E(f), j = "";
                        return a = a.toString(), b = 0, c = a.length - H.length, angular.forEach(I, function(d) {
                            var e = d.position;
                            e >= h && i > e || (e >= h && (e += c), a.substring(e, e + d.value.length) === d.value && (j += a.slice(b, e), 
                            b = e + d.value.length));
                        }), a = j + a.slice(b), angular.forEach(a.split(""), function(a) {
                            g.length && g[0].test(a) && (e += a, g.shift());
                        }), e;
                    }
                    function r(a) {
                        var b = "", c = F.slice();
                        return angular.forEach(H.split(""), function(d, e) {
                            a.length && e === c[0] ? (b += a.charAt(0) || "_", a = a.substr(1), c.shift()) : b += d;
                        }), b;
                    }
                    function s(a) {
                        var b, c = angular.isDefined(e.uiMaskPlaceholder) ? e.uiMaskPlaceholder : e.placeholder;
                        return angular.isDefined(c) && c[a] ? c[a] : (b = angular.isDefined(e.uiMaskPlaceholderChar) && e.uiMaskPlaceholderChar ? e.uiMaskPlaceholderChar : "_", 
                        "space" === b.toLowerCase() ? " " : b[0]);
                    }
                    function t() {
                        var a, b, c = H.split("");
                        F && !isNaN(F[0]) && angular.forEach(F, function(a) {
                            c[a] = "_";
                        }), a = c.join(""), b = a.replace(/[_]+/g, "_").split("_"), b = b.filter(function(a) {
                            return "" !== a;
                        });
                        var d = 0;
                        return b.map(function(b) {
                            var c = a.indexOf(b, d);
                            return d = c + 1, {
                                value: b,
                                position: c
                            };
                        });
                    }
                    function u(a) {
                        var b = 0;
                        if (F = [], G = [], H = "", angular.isString(a)) {
                            J = 0;
                            var c = !1, d = 0, e = a.split(""), f = !1;
                            angular.forEach(e, function(a, e) {
                                f ? (f = !1, H += a, b++) : Y.escChar === a ? f = !0 : Y.maskDefinitions[a] ? (F.push(b), 
                                H += s(e - d), G.push(Y.maskDefinitions[a]), b++, c || J++, c = !1) : "?" === a ? (c = !0, 
                                d++) : (H += a, b++);
                            });
                        }
                        F.push(F.slice().pop() + 1), I = t(), S = F.length > 1;
                    }
                    function v() {
                        (Y.clearOnBlur || Y.clearOnBlurPlaceholder && 0 === K.length && e.placeholder) && (P = 0, 
                        Q = 0, M && 0 !== K.length || (L = "", d.val(""), a.$apply(function() {
                            f.$pristine || f.$setViewValue("");
                        }))), K !== Z && w(d[0]), Z = K;
                    }
                    function w(a) {
                        var b;
                        angular.isFunction(window.Event) && !a.fireEvent ? (b = new Event("change", {
                            view: window,
                            bubbles: !0,
                            cancelable: !1
                        }), a.dispatchEvent(b)) : "createEvent" in document ? (b = document.createEvent("HTMLEvents"), 
                        b.initEvent("change", !1, !0), a.dispatchEvent(b)) : a.fireEvent && a.fireEvent("onchange");
                    }
                    function x(a) {
                        "mousedown" === a.type ? d.bind("mouseout", y) : d.unbind("mouseout", y);
                    }
                    function y() {
                        Q = E(this), d.unbind("mouseout", y);
                    }
                    function z(a) {
                        var b = 8 === a.which, c = C(this) - 1 || 0;
                        if (b) {
                            for (;c >= 0; ) {
                                if (B(c)) {
                                    D(this, c + 1);
                                    break;
                                }
                                c--;
                            }
                            R = -1 === c;
                        }
                    }
                    function A(b) {
                        b = b || {};
                        var c = b.which, e = b.type;
                        if (16 !== c && 91 !== c) {
                            var g, h = d.val(), i = N, j = !1, k = q(h), l = O, m = C(this) || 0, n = P || 0, o = m - n, p = F[0], s = F[k.length] || F.slice().shift(), t = Q || 0, u = E(this) > 0, v = t > 0, w = h.length > i.length || t && h.length > i.length - t, x = h.length < i.length || t && h.length === i.length - t, y = c >= 37 && 40 >= c && b.shiftKey, z = 37 === c, A = 8 === c || "keyup" !== e && x && -1 === o, G = 46 === c || "keyup" !== e && x && 0 === o && !v, I = (z || A || "click" === e) && m > p;
                            if (Q = E(this), !y && (!u || "click" !== e && "keyup" !== e && "focus" !== e)) {
                                if (A && R) return d.val(H), a.$apply(function() {
                                    f.$setViewValue("");
                                }), void D(this, n);
                                if ("input" === e && x && !v && k === l) {
                                    for (;A && m > p && !B(m); ) m--;
                                    for (;G && s > m && -1 === F.indexOf(m); ) m++;
                                    var J = F.indexOf(m);
                                    k = k.substring(0, J) + k.substring(J + 1), k !== l && (j = !0);
                                }
                                for (g = r(k), N = g, O = k, !j && h.length > g.length && (j = !0), d.val(g), j && a.$apply(function() {
                                    f.$setViewValue(g);
                                }), w && p >= m && (m = p + 1), I && m--, m = m > s ? s : p > m ? p : m; !B(m) && m > p && s > m; ) m += I ? -1 : 1;
                                (I && s > m || w && !B(n)) && m++, P = m, D(this, m);
                            }
                        }
                    }
                    function B(a) {
                        return F.indexOf(a) > -1;
                    }
                    function C(a) {
                        if (!a) return 0;
                        if (void 0 !== a.selectionStart) return a.selectionStart;
                        if (document.selection && b(d[0])) {
                            a.focus();
                            var c = document.selection.createRange();
                            return c.moveStart("character", a.value ? -a.value.length : 0), c.text.length;
                        }
                        return 0;
                    }
                    function D(a, c) {
                        if (!a) return 0;
                        if (0 !== a.offsetWidth && 0 !== a.offsetHeight) if (a.setSelectionRange) b(d[0]) && (a.focus(), 
                        a.setSelectionRange(c, c)); else if (a.createTextRange) {
                            var e = a.createTextRange();
                            e.collapse(!0), e.moveEnd("character", c), e.moveStart("character", c), e.select();
                        }
                    }
                    function E(a) {
                        return a ? void 0 !== a.selectionStart ? a.selectionEnd - a.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0;
                    }
                    var F, G, H, I, J, K, L, M, N, O, P, Q, R, S = !1, T = !1, U = e.placeholder, V = e.maxlength, W = f.$isEmpty;
                    f.$isEmpty = function(a) {
                        return W(S ? q(a || "") : a);
                    };
                    var X = !1;
                    e.$observe("modelViewValue", function(a) {
                        "true" === a && (X = !0);
                    });
                    var Y = {};
                    e.uiOptions ? (Y = a.$eval("[" + e.uiOptions + "]"), Y = angular.isObject(Y[0]) ? function(a, b) {
                        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (void 0 === b[c] ? b[c] = angular.copy(a[c]) : angular.isObject(b[c]) && !angular.isArray(b[c]) && (b[c] = angular.extend({}, a[c], b[c])));
                        return b;
                    }(c, Y[0]) : c) : Y = c, e.$observe("uiMask", g), angular.isDefined(e.uiMaskPlaceholder) ? e.$observe("uiMaskPlaceholder", h) : e.$observe("placeholder", h), 
                    angular.isDefined(e.uiMaskPlaceholderChar) && e.$observe("uiMaskPlaceholderChar", i), 
                    f.$formatters.unshift(j), f.$parsers.unshift(k);
                    var Z = d.val();
                    d.bind("mousedown mouseup", x), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
                        if (null === this) throw new TypeError();
                        var b = Object(this), c = b.length >>> 0;
                        if (0 === c) return -1;
                        var d = 0;
                        if (arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), 
                        d >= c) return -1;
                        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++) if (e in b && b[e] === a) return e;
                        return -1;
                    });
                };
            }
        };
    } ]);
}(), angular.module("biblioteca", [ "ngRoute", "ab-base64" ]), angular.module("biblioteca").config([ "$routeProvider", "$locationProvider", function(a, b) {
    a.when("/", {
        templateUrl: "view/login.html",
        controller: "loginController"
    }), a.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeCtrl"
    }), a.when("/documento/incluir", {
        templateUrl: "view/documentoForm.html",
        controller: "documentoController",
        resolve: {
            generoDocumentalList: [ "documentoService", function(a) {
                return a.getGeneroList(function(a) {
                    return a.data;
                });
            } ],
            documento: function() {}
        }
    }), a.when("/documento/:id", {
        templateUrl: "view/documentoForm.html",
        controller: "documentoController",
        resolve: {
            generoDocumentalList: [ "documentoService", function(a) {
                return a.getGeneroList(function(a) {
                    return a.data;
                });
            } ],
            documento: [ "documentoService", "$route", function(a, b) {
                return a.getDocumento(b.current.params.id, function(a) {
                    return a.data;
                });
            } ]
        }
    }), a.when("/usuario/list", {
        templateUrl: "view/usuarioList.html",
        controller: "usuarioController",
        resolve: {
            usuarioList: [ "usuarioService", function(a) {
                return a.getUsuario(null, function(a) {
                    return a.data;
                });
            } ],
            usuario: function() {}
        }
    }), a.when("/usuario/incluir", {
        templateUrl: "view/usuarioForm.html",
        controller: "usuarioController",
        resolve: {
            usuarioList: function() {},
            usuario: function() {}
        }
    }), a.when("/usuario/:id", {
        templateUrl: "view/usuarioForm.html",
        controller: "usuarioController",
        resolve: {
            usuario: [ "usuarioService", "$route", function(a, b) {
                return a.getUsuario(b.current.params.id, function(a) {
                    return a.data;
                });
            } ],
            usuarioList: function() {}
        }
    }), a.when("/usuario", {
        templateUrl: "view/usuarioList.html",
        controller: "usuarioController"
    }), a.otherwise({
        redirectTo: "/"
    });
} ]), angular.module("biblioteca").value("serverConstants", {
    URL: "http://localhost:8080/biblioteca/rest"
}), angular.module("biblioteca").controller("documentoController", [ "$scope", "$location", "documentoService", "generoDocumentalList", "documento", "$filter", function(a, b, c, d, e, f) {
    var g = function(a) {
        var b = a.split("/");
        return new Date(b[2], b[1] - 1, b[0]);
    }, h = function(a) {
        return f("date")(a, "dd/MM/yyyy");
    };
    a.generoDocumentalList = d, a.documento = e, a.documento && (a.documento.dataProducao && (a.documento.dataProducao = h(a.documento.dataProducao)), 
    a.documento.indexacaoDocumento.dataAcumulacao && (a.documento.indexacaoDocumento.dataAcumulacao = h(a.documento.indexacaoDocumento.dataAcumulacao))), 
    a.saveDocumento = function() {
        var d = angular.copy(a.documento);
        d.dataProducao && (d.dataProducao = g(d.dataProducao)), d.indexacaoDocumento && d.indexacaoDocumento.dataAcumulacao && (d.indexacaoDocumento.dataAcumulacao = g(d.indexacaoDocumento.dataAcumulacao)), 
        c.saveDocumento(d, function(a) {
            var c = a.data;
            c.error ? alert(c.error) : b.path("/home");
        }, function(a) {
            alert("Ocorreu um erro status: " + a.status);
        });
    };
} ]), angular.module("biblioteca").controller("homeCtrl", [ "$scope", "documentoService", function(a, b) {
    function c(c) {
        b.getDocumento(c, function(b) {
            b.data && (a.viewDocumento = b.data);
        }, function(a) {
            console.log(a);
        });
    }
    function d(a) {
        if (!a) return "";
        var b = new Date(a), c = b.getMonth() + 1;
        return c = 10 > c ? "0" + c : c, b.getDate() + "/" + c + "/" + b.getFullYear();
    }
    var e = 10;
    a.formatDate = d, a.getDocumento = c, a.buscar = function(c) {
        c || (c = 1);
        var d = e * (c - 1);
        b.searchDocumento(a.query, e, d, function(b) {
            a.documentos = null, a.total = 0, a.paginate = [], a.actualPage = c, b.data && (a.documentos = b.data.documentoList, 
            a.total = b.data.total, f(e, a.total));
        }, function(a) {
            console.log(a);
        });
    };
    var f = function(b, c) {
        var d = c / b;
        1 > d && (d = 1);
        for (var e = 1; d >= e; e++) a.paginate.push(e);
    };
} ]), angular.module("biblioteca").controller("loginController", [ "$scope", "authService", "$location", function(a, b, c) {
    a.invalidLogin = !1, a.login = function() {
        b.login(a.email, a.senha, function(a) {
            c.path("/home");
        }, function(b) {
            a.invalidLogin = !0;
        });
    }, a.logout = function() {
        b.logout(function(a) {
            c.path("/");
        }, function(a) {
            alert("Erro na comunicação com o servidor.");
        });
    }, a.isAdmin = function() {
        return b.isAdmin();
    };
} ]), angular.module("biblioteca").controller("usuarioController", [ "$scope", "$location", "usuarioService", "usuarioList", "usuario", function(a, b, c, d, e) {
    a.validSenha = !0, a.grupo = [], a.usuarioList = d, a.usuario = e;
    var f = function(a) {
        return a && a.grupoSet ? a.grupoSet.find(function(a) {
            return "admin" == a.nome;
        }) : !1;
    }, g = function() {
        c.getUsuario(void 0, function(b) {
            a.usuarioList = b.data;
        }, function(a) {
            alert("Erro status: " + a.status);
        });
    };
    a.saveUsuario = function() {
        var d = a.usuario;
        a.validSenha = d.senha == a.confSenha, a.validSenha && (a.isAdmin ? d.grupoSet = [ {
            nome: "admin"
        } ] : delete d.grupoSet, c.saveUsuario(d, function(a) {
            var c = a.data;
            c.error ? alert(c.error) : b.path("/usuario/list");
        }, function(a) {
            alert("Ocorreu um erro status: " + a.status);
        }));
    }, a.deleteUsuario = function(a) {
        c.deleteUsuario(a, function(a) {
            g();
        }, function(a) {
            401 == a.status ? alert("Você não tem autorização para excluir este usuário.") : alert("Ocorreu um erro status: " + a.status);
        });
    }, f(a.usuario) && (a.isAdmin = !0);
} ]), function() {
    function a(a, b, c, d) {
        function e(e, f, g, h) {
            a.defaults.headers.common.Authorization = "Basic " + c.encode(e + ":" + f), a.get(b.URL + "/auth/login").then(function(a) {
                d.create(a.data), console.log(a), g(a);
            }, h);
        }
        function f() {
            return !!d.usuario;
        }
        function g() {
            return f() ? d.usuario.grupoSet.find(function(a) {
                return "admin" == a.nome;
            }) : !1;
        }
        function h(c, e) {
            a.get(b.URL + "/auth/logout").then(function(a) {
                d.destroy(), c(a);
            }, e);
        }
        return {
            login: e,
            isAuthenticated: f,
            isAdmin: g,
            logout: h
        };
    }
    angular.module("biblioteca").factory("authService", a), a.$inject = [ "$http", "serverConstants", "base64", "session" ];
}(), angular.module("biblioteca").factory("documentoService", [ "$http", "serverConstants", function(a, b) {
    var c = function(c, d, e) {
        c.id ? a.put(b.URL + "/documento", c).then(d, e) : a.post(b.URL + "/documento", c).then(d, e);
    }, d = function(c, d, e) {
        return c ? a.get(b.URL + "/documento/" + c).then(d, e) : a.get(b.URL + "/documento").then(d, e);
    }, e = function(c, d) {
        return a.get(b.URL + "/documento/generoList").then(c, d);
    }, f = function(c, d, e) {
        a["delete"](b.URL + "/documento/" + c).then(d, e);
    }, g = function(c, d, e, f, g) {
        a.get(b.URL + "/documento/search", {
            params: {
                query: c,
                max: d,
                offset: e
            }
        }).then(f, g);
    };
    return {
        saveDocumento: c,
        getDocumento: d,
        deleteDocumento: f,
        getGeneroList: e,
        searchDocumento: g
    };
} ]), function() {
    function a() {
        this.create = function(a) {
            this.usuario = a;
        }, this.destroy = function() {
            this.usuario = null;
        };
    }
    angular.module("biblioteca").service("session", a), a.$inject = [];
}(), angular.module("biblioteca").factory("usuarioService", [ "$http", "serverConstants", function(a, b) {
    var c = function(c, d, e) {
        c.id ? a.put(b.URL + "/usuario", c).then(d, e) : a.post(b.URL + "/usuario", c).then(d, e);
    }, d = function(c, d, e) {
        return c ? a.get(b.URL + "/usuario/" + c).then(d, e) : a.get(b.URL + "/usuario").then(d, e);
    }, e = function(c, d, e) {
        a["delete"](b.URL + "/usuario/" + c).then(d, e);
    };
    return {
        saveUsuario: c,
        getUsuario: d,
        deleteUsuario: e
    };
} ]);