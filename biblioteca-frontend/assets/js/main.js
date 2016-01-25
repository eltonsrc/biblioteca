!function(a, b, c) {
    "use strict";
    function d(a, b) {
        return b = b || Error, function() {
            var c, d, e = 2, f = arguments, g = f[0], h = "[" + (a ? a + ":" : "") + g + "] ", i = f[1];
            for (h += i.replace(/\{\d+\}/g, function(a) {
                var b = +a.slice(1, -1), c = b + e;
                return c < f.length ? ta(f[c]) : a;
            }), h += "\nhttp://errors.angularjs.org/1.4.9/" + (a ? a + "/" : "") + g, d = e, 
            c = "?"; d < f.length; d++, c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(ta(f[d]));
            return new b(h);
        };
    }
    function e(a) {
        if (null == a || C(a)) return !1;
        if (Qd(a) || x(a) || Ed && a instanceof Ed) return !0;
        var b = "length" in Object(a) && a.length;
        return y(b) && (b >= 0 && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
    }
    function f(a, b, c) {
        var d, g;
        if (a) if (A(a)) for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a); else if (Qd(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++) (h || d in a) && b.call(c, a[d], d, a);
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a); else if (w(a)) for (d in a) b.call(c, a[d], d, a); else if ("function" == typeof a.hasOwnProperty) for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a); else for (d in a) zd.call(a, d) && b.call(c, a[d], d, a);
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
        return ++Od;
    }
    function j(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey;
    }
    function k(a, b, c) {
        for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
            var g = b[e];
            if (v(g) || A(g)) for (var h = Object.keys(g), i = 0, l = h.length; l > i; i++) {
                var m = h[i], n = g[m];
                c && v(n) ? z(n) ? a[m] = new Date(n.valueOf()) : B(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : K(n) ? a[m] = n.clone() : (v(a[m]) || (a[m] = Qd(n) ? [] : {}), 
                k(a[m], [ n ], !0)) : a[m] = n;
            }
        }
        return j(a, d), a;
    }
    function l(a) {
        return k(a, Hd.call(arguments, 1), !1);
    }
    function m(a) {
        return k(a, Hd.call(arguments, 1), !0);
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
        return A(a.toString) && a.toString !== Kd;
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
        return null !== a && "object" == typeof a && !Ld(a);
    }
    function x(a) {
        return "string" == typeof a;
    }
    function y(a) {
        return "number" == typeof a;
    }
    function z(a) {
        return "[object Date]" === Kd.call(a);
    }
    function A(a) {
        return "function" == typeof a;
    }
    function B(a) {
        return "[object RegExp]" === Kd.call(a);
    }
    function C(a) {
        return a && a.window === a;
    }
    function D(a) {
        return a && a.$evalAsync && a.$watch;
    }
    function E(a) {
        return "[object File]" === Kd.call(a);
    }
    function F(a) {
        return "[object FormData]" === Kd.call(a);
    }
    function G(a) {
        return "[object Blob]" === Kd.call(a);
    }
    function H(a) {
        return "boolean" == typeof a;
    }
    function I(a) {
        return a && A(a.then);
    }
    function J(a) {
        return a && y(a.length) && Rd.test(Kd.call(a));
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
        return yd(a.nodeName || a[0] && a[0].nodeName);
    }
    function N(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), c;
    }
    function O(a, b) {
        function c(a, b) {
            var c, e = b.$$hashKey;
            if (Qd(a)) for (var f = 0, g = a.length; g > f; f++) b.push(d(a[f])); else if (w(a)) for (c in a) b[c] = d(a[c]); else if (a && "function" == typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && (b[c] = d(a[c])); else for (c in a) zd.call(a, c) && (b[c] = d(a[c]));
            return j(b, e), b;
        }
        function d(a) {
            if (!v(a)) return a;
            var b = e.indexOf(a);
            if (-1 !== b) return g[b];
            if (C(a) || D(a)) throw Md("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var d, f = !1;
            return Qd(a) ? (d = [], f = !0) : J(a) ? d = new a.constructor(a) : z(a) ? d = new Date(a.getTime()) : B(a) ? (d = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), 
            d.lastIndex = a.lastIndex) : A(a.cloneNode) ? d = a.cloneNode(!0) : (d = Object.create(Ld(a)), 
            f = !0), e.push(a), g.push(d), f ? c(a, d) : d;
        }
        var e = [], g = [];
        if (b) {
            if (J(b)) throw Md("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (a === b) throw Md("cpi", "Can't copy! Source and destination are identical.");
            return Qd(b) ? b.length = 0 : f(b, function(a, c) {
                "$$hashKey" !== c && delete b[c];
            }), e.push(a), g.push(b), c(a, b);
        }
        return d(a);
    }
    function P(a, b) {
        if (Qd(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c];
        } else if (v(a)) {
            b = b || {};
            for (var e in a) ("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e]);
        }
        return b || a;
    }
    function Q(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var c, d, e, f = typeof a, g = typeof b;
        if (f == g && "object" == f) {
            if (!Qd(a)) {
                if (z(a)) return z(b) ? Q(a.getTime(), b.getTime()) : !1;
                if (B(a)) return B(b) ? a.toString() == b.toString() : !1;
                if (D(a) || D(b) || C(a) || C(b) || Qd(b) || z(b) || B(b)) return !1;
                e = qa();
                for (d in a) if ("$" !== d.charAt(0) && !A(a[d])) {
                    if (!Q(a[d], b[d])) return !1;
                    e[d] = !0;
                }
                for (d in b) if (!(d in e) && "$" !== d.charAt(0) && u(b[d]) && !A(b[d])) return !1;
                return !0;
            }
            if (!Qd(b)) return !1;
            if ((c = a.length) == b.length) {
                for (d = 0; c > d; d++) if (!Q(a[d], b[d])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function R(a, b, c) {
        return a.concat(Hd.call(b, c));
    }
    function S(a, b) {
        return Hd.call(a, b || 0);
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
        return "undefined" == typeof a ? c : (y(b) || (b = b ? 2 : null), JSON.stringify(a, U, b));
    }
    function W(a) {
        return x(a) ? JSON.parse(a) : a;
    }
    function X(a, b) {
        var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(c) ? b : c;
    }
    function Y(a, b) {
        return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a;
    }
    function Z(a, b, c) {
        c = c ? -1 : 1;
        var d = X(b, a.getTimezoneOffset());
        return Y(a, c * (d - a.getTimezoneOffset()));
    }
    function $(a) {
        a = Ed(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var c = Ed("<div>").append(a).html();
        try {
            return a[0].nodeType === _d ? yd(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + yd(b);
            });
        } catch (b) {
            return yd(c);
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
            e = a.substring(c + 1)), d = _(d), u(d) && (e = u(e) ? _(e) : !0, zd.call(b, d) ? Qd(b[d]) ? b[d].push(e) : b[d] = [ b[d], e ] : b[d] = e));
        }), b;
    }
    function ba(a) {
        var b = [];
        return f(a, function(a, c) {
            Qd(a) ? f(a, function(a) {
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
        var c, d, e = Wd.length;
        for (d = 0; e > d; ++d) if (c = Wd[d] + b, x(c = a.getAttribute(c))) return c;
        return null;
    }
    function fa(a, b) {
        var c, d, e = {};
        f(Wd, function(b) {
            var e = b + "app";
            !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e));
        }), f(Wd, function(b) {
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
            if (c = Ed(c), c.injector()) {
                var a = c[0] === b ? "document" : $(c);
                throw Md("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            d = d || [], d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]), e.debugInfoEnabled && d.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]), d.unshift("ng");
            var f = ab(d, e.strictDi);
            return f.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), f;
        }, i = /^NG_ENABLE_DEBUG_INFO!/, j = /^NG_DEFER_BOOTSTRAP!/;
        return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), 
        a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), Nd.resumeBootstrap = function(a) {
            return f(a, function(a) {
                d.push(a);
            }), h();
        }, void (A(Nd.resumeDeferredBootstrap) && Nd.resumeDeferredBootstrap()));
    }
    function ha() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload();
    }
    function ia(a) {
        var b = Nd.element(a).injector();
        if (!b) throw Md("test", "no injector found for element argument to getTestability");
        return b.get("$$testability");
    }
    function ja(a, b) {
        return b = b || "_", a.replace(Xd, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function ka() {
        var b;
        if (!Yd) {
            var d = Vd();
            Fd = t(d) ? a.jQuery : d ? a[d] : c, Fd && Fd.fn.on ? (Ed = Fd, l(Fd.fn, {
                scope: se.scope,
                isolateScope: se.isolateScope,
                controller: se.controller,
                injector: se.injector,
                inheritedData: se.inheritedData
            }), b = Fd.cleanData, Fd.cleanData = function(a) {
                var c;
                if (Pd) Pd = !1; else for (var d, e = 0; null != (d = a[e]); e++) c = Fd._data(d, "events"), 
                c && c.$destroy && Fd(d).triggerHandler("$destroy");
                b(a);
            }) : Ed = Ca, Nd.element = Ed, Yd = !0;
        }
    }
    function la(a, b, c) {
        if (!a) throw Md("areq", "Argument '{0}' is {1}", b || "?", c || "required");
        return a;
    }
    function ma(a, b, c) {
        return c && Qd(a) && (a = a[a.length - 1]), la(A(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), 
        a;
    }
    function na(a, b) {
        if ("hasOwnProperty" === a) throw Md("badname", "hasOwnProperty is not a valid {0} name", b);
    }
    function oa(a, b, c) {
        if (!b) return a;
        for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], 
        a && (a = (f = a)[d]);
        return !c && A(a) ? T(f, a) : a;
    }
    function pa(a) {
        for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++) (b || a[e] !== c) && (b || (b = Ed(Hd.call(a, 0, e))), 
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
            element: Ed,
            forEach: f,
            injector: ab,
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
            isArray: Qd,
            version: de,
            isDate: z,
            lowercase: yd,
            uppercase: Ad,
            callbacks: {
                counter: 0
            },
            getTestability: ia,
            $$minErr: d,
            $$csp: Ud,
            reloadWithDebugInfo: ha
        }), (Gd = ra(a))("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: sc
            }), a.provider("$compile", kb).directive({
                a: xf,
                input: Of,
                textarea: Of,
                form: Cf,
                script: Gg,
                select: Jg,
                style: Lg,
                option: Kg,
                ngBind: Rf,
                ngBindHtml: Tf,
                ngBindTemplate: Sf,
                ngClass: Vf,
                ngClassEven: Xf,
                ngClassOdd: Wf,
                ngCloak: Yf,
                ngController: Zf,
                ngForm: Df,
                ngHide: Ag,
                ngIf: ag,
                ngInclude: bg,
                ngInit: dg,
                ngNonBindable: rg,
                ngPluralize: vg,
                ngRepeat: wg,
                ngShow: zg,
                ngStyle: Bg,
                ngSwitch: Cg,
                ngSwitchWhen: Dg,
                ngSwitchDefault: Eg,
                ngOptions: ug,
                ngTransclude: Fg,
                ngModel: og,
                ngList: eg,
                ngChange: Uf,
                pattern: Ng,
                ngPattern: Ng,
                required: Mg,
                ngRequired: Mg,
                minlength: Pg,
                ngMinlength: Pg,
                maxlength: Og,
                ngMaxlength: Og,
                ngValue: Qf,
                ngModelOptions: qg
            }).directive({
                ngInclude: cg
            }).directive(yf).directive($f), a.provider({
                $anchorScroll: bb,
                $animate: He,
                $animateCss: Ke,
                $$animateJs: Fe,
                $$animateQueue: Ge,
                $$AnimateRunner: Je,
                $$animateAsyncRun: Ie,
                $browser: hb,
                $cacheFactory: ib,
                $controller: pb,
                $document: qb,
                $exceptionHandler: rb,
                $filter: Gc,
                $$forceReflow: Pe,
                $interpolate: Fb,
                $interval: Gb,
                $http: Bb,
                $httpParamSerializer: tb,
                $httpParamSerializerJQLike: ub,
                $httpBackend: Db,
                $xhrFactory: Cb,
                $location: Ub,
                $log: Vb,
                $parse: mc,
                $rootScope: rc,
                $q: nc,
                $$q: oc,
                $sce: wc,
                $sceDelegate: vc,
                $sniffer: xc,
                $templateCache: jb,
                $templateRequest: yc,
                $$testability: zc,
                $timeout: Ac,
                $window: Dc,
                $$rAF: qc,
                $$jqLite: Xa,
                $$HashMap: we,
                $$cookieReader: Fc
            });
        } ]);
    }
    function va() {
        return ++fe;
    }
    function wa(a) {
        return a.replace(ie, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(je, "Moz$1");
    }
    function xa(a) {
        return !ne.test(a);
    }
    function ya(a) {
        var b = a.nodeType;
        return b === Zd || !b || b === be;
    }
    function za(a) {
        for (var b in ee[a.ng339]) return !0;
        return !1;
    }
    function Aa(a, b) {
        var c, d, e, g, h = b.createDocumentFragment(), i = [];
        if (xa(a)) i.push(b.createTextNode(a)); else {
            for (c = c || h.appendChild(b.createElement("div")), d = (oe.exec(a) || [ "", "" ])[1].toLowerCase(), 
            e = qe[d] || qe._default, c.innerHTML = e[1] + a.replace(pe, "<$1></$2>") + e[2], 
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
        return (d = me.exec(a)) ? [ c.createElement(d[1]) ] : (d = Aa(a, c)) ? d.childNodes : [];
    }
    function Ca(a) {
        if (a instanceof Ca) return a;
        var b;
        if (x(a) && (a = Sd(a), b = !0), !(this instanceof Ca)) {
            if (b && "<" != a.charAt(0)) throw le("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Ca(a);
        }
        b ? Ma(this, Ba(a)) : Ma(this, a);
    }
    function Da(a) {
        return a.cloneNode(!0);
    }
    function Ea(a, b) {
        if (b || Ga(a), a.querySelectorAll) for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ga(c[d]);
    }
    function Fa(a, b, c, d) {
        if (u(d)) throw le("offargs", "jqLite#off() does not support the `selector` argument");
        var e = Ha(a), g = e && e.events, h = e && e.handle;
        if (h) if (b) {
            var i = function(b) {
                var d = g[b];
                u(c) && N(d || [], c), u(c) && d && d.length > 0 || (he(a, b, h), delete g[b]);
            };
            f(b.split(" "), function(a) {
                i(a), ke[a] && i(ke[a]);
            });
        } else for (b in g) "$destroy" !== b && he(a, b, h), delete g[b];
    }
    function Ga(a, b) {
        var d = a.ng339, e = d && ee[d];
        if (e) {
            if (b) return void delete e.data[b];
            e.handle && (e.events.$destroy && e.handle({}, "$destroy"), Fa(a)), delete ee[d], 
            a.ng339 = c;
        }
    }
    function Ha(a, b) {
        var d = a.ng339, e = d && ee[d];
        return b && !e && (a.ng339 = d = va(), e = ee[d] = {
            events: {},
            data: {},
            handle: c
        }), e;
    }
    function Ia(a, b, c) {
        if (ya(a)) {
            var d = u(c), e = !d && b && !v(b), f = !b, g = Ha(a, !e), h = g && g.data;
            if (d) h[b] = c; else {
                if (f) return h;
                if (e) return h && h[b];
                l(h, b);
            }
        }
    }
    function Ja(a, b) {
        return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1;
    }
    function Ka(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", Sd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Sd(b) + " ", " ")));
        });
    }
    function La(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = Sd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), a.setAttribute("class", Sd(c));
        }
    }
    function Ma(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b; else {
            var c = b.length;
            if ("number" == typeof c && b.window !== b) {
                if (c) for (var d = 0; c > d; d++) a[a.length++] = b[d];
            } else a[a.length++] = b;
        }
    }
    function Na(a, b) {
        return Oa(a, "$" + (b || "ngController") + "Controller");
    }
    function Oa(a, b, c) {
        a.nodeType == be && (a = a.documentElement);
        for (var d = Qd(b) ? b : [ b ]; a; ) {
            for (var e = 0, f = d.length; f > e; e++) if (u(c = Ed.data(a, d[e]))) return c;
            a = a.parentNode || a.nodeType === ce && a.host;
        }
    }
    function Pa(a) {
        for (Ea(a, !0); a.firstChild; ) a.removeChild(a.firstChild);
    }
    function Qa(a, b) {
        b || Ea(a);
        var c = a.parentNode;
        c && c.removeChild(a);
    }
    function Ra(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Ed(c).on("load", b);
    }
    function Sa(a, b) {
        var c = te[b.toLowerCase()];
        return c && ue[M(a)] && c;
    }
    function Ta(a) {
        return ve[a];
    }
    function Ua(a, b) {
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
                var h = e.specialHandlerWrapper || Va;
                f > 1 && (e = P(e));
                for (var i = 0; f > i; i++) c.isImmediatePropagationStopped() || h(a, c, e[i]);
            }
        };
        return c.elem = a, c;
    }
    function Va(a, b, c) {
        c.call(a, b);
    }
    function Wa(a, b, c) {
        var d = b.relatedTarget;
        (!d || d !== a && !re.call(a, d)) && c.call(a, b);
    }
    function Xa() {
        this.$get = function() {
            return l(Ca, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), Ja(a, b);
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), La(a, b);
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), Ka(a, b);
                }
            });
        };
    }
    function Ya(a, b) {
        var c = a && a.$$hashKey;
        if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
        var d = typeof a;
        return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || i)() : d + ":" + a;
    }
    function Za(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        f(a, this.put, this);
    }
    function $a(a) {
        var b = a.toString().replace(Ae, ""), c = b.match(xe);
        return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function _a(a, b, c) {
        var d, e, g, h;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw x(c) && c || (c = a.name || $a(a)), Be("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                    e = a.toString().replace(Ae, ""), g = e.match(xe), f(g[1].split(ye), function(a) {
                        a.replace(ze, function(a, b, c) {
                            d.push(c);
                        });
                    });
                }
                a.$inject = d;
            }
        } else Qd(a) ? (h = a.length - 1, ma(a[h], "fn"), d = a.slice(0, h)) : ma(a, "fn", !0);
        return d;
    }
    function ab(a, b) {
        function d(a) {
            return function(b, c) {
                return v(b) ? void f(b, h(a)) : a(b, c);
            };
        }
        function e(a, b) {
            if (na(a, "service"), (A(b) || Qd(b)) && (b = y.instantiate(b)), !b.$get) throw Be("pget", "Provider '{0}' must define $get factory method.", a);
            return w[a + q] = b;
        }
        function g(a, b) {
            return function() {
                var c = B.invoke(b, this);
                if (t(c)) throw Be("undef", "Provider '{0}' must return a value from $get factory method.", a);
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
            la(t(a) || Qd(a), "modulesToLoad", "not an array");
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
                        x(a) ? (b = Gd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), 
                        d(b._configBlocks)) : A(a) ? c.push(y.invoke(a)) : Qd(a) ? c.push(y.invoke(a)) : ma(a, "module");
                    } catch (e) {
                        throw Qd(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        Be("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e);
                    }
                }
            }), c;
        }
        function o(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === p) throw Be("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
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
                var g, h, i, j = [], k = ab.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw Be("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f));
                }
                return Qd(a) && (a = a[g]), a.apply(c, j);
            }
            function f(a, b, c) {
                var d = Object.create((Qd(a) ? a[a.length - 1] : a).prototype || null), f = e(a, d, b, c);
                return v(f) || A(f) ? f : d;
            }
            return {
                invoke: e,
                instantiate: f,
                get: d,
                annotate: ab.$$annotate,
                has: function(b) {
                    return w.hasOwnProperty(b + q) || a.hasOwnProperty(b);
                }
            };
        }
        b = b === !0;
        var p = {}, q = "Provider", s = [], u = new Za([], !0), w = {
            $provide: {
                provider: d(e),
                factory: d(i),
                service: d(j),
                value: d(k),
                constant: d(l),
                decorator: m
            }
        }, y = w.$injector = o(w, function(a, b) {
            throw Nd.isString(b) && s.push(b), Be("unpr", "Unknown provider: {0}", s.join(" <- "));
        }), z = {}, B = z.$injector = o(z, function(a, b) {
            var d = y.get(a + q, b);
            return B.invoke(d.$get, d, c, a);
        });
        return f(n(a), function(a) {
            a && B.invoke(a);
        }), B;
    }
    function bb() {
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
                (a !== b || "" !== a) && Ra(function() {
                    d.$evalAsync(h);
                });
            }), h;
        } ];
    }
    function cb(a, b) {
        return a || b ? a ? b ? (Qd(a) && (a = a.join(" ")), Qd(b) && (b = b.join(" ")), 
        a + " " + b) : a : b : "";
    }
    function db(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.nodeType === De) return c;
        }
    }
    function eb(a) {
        x(a) && (a = a.split(" "));
        var b = qa();
        return f(a, function(a) {
            a.length && (b[a] = !0);
        }), b;
    }
    function fb(a) {
        return v(a) ? a : {};
    }
    function gb(a, b, c, d) {
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
            (x !== l.url() || w !== v) && (x = l.url(), w = v, f(A, function(a) {
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
                var h = x && Lb(x) === Lb(b);
                return x = b, w = e, !d.history || h && f ? ((!h || z) && (z = b), c ? m.replace(b) : h ? m.hash = g(b) : m.href = b, 
                m.href !== b && (z = b)) : (n[c ? "replaceState" : "pushState"](e, "", b), j(), 
                w = v), l;
            }
            return z || m.href.replace(/%27/g, "'");
        }, l.state = function() {
            return v;
        };
        var A = [], B = !1, C = null;
        l.onUrlChange = function(b) {
            return B || (d.history && Ed(a).on("popstate", h), Ed(a).on("hashchange", h), B = !0), 
            A.push(b), b;
        }, l.$$applicationDestroyed = function() {
            Ed(a).off("hashchange popstate", h);
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
    function hb() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new gb(a, d, b, c);
        } ];
    }
    function ib() {
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
    function jb() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function kb(a, d) {
        function e(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            return f(a, function(a, f) {
                var g = a.match(d);
                if (!g) throw Le("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                };
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
                if (!d) throw Le("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
                if (!ob(d, f)) throw Le("noident", "Cannot bind to controller without identifier for directive '{0}'.", b);
            }
            return c;
        }
        function i(a) {
            var b = a.charAt(0);
            if (!b || b !== yd(b)) throw Le("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", a);
            if (a !== a.trim()) throw Le("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a);
        }
        var j = {}, k = "Directive", m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, n = /(([\w\-]+)(?:\:([^;]+))?;?)/, s = L("ngSrc,ngSrcset,src,srcset"), w = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, y = /^(on[a-z]+|formaction)$/;
        this.directive = function B(b, c) {
            return na(b, "directive"), x(b) ? (i(b), la(c, "directiveFactory"), j.hasOwnProperty(b) || (j[b] = [], 
            a.factory(b + k, [ "$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(j[b], function(e, f) {
                    try {
                        var h = a.invoke(e);
                        A(h) ? h = {
                            compile: r(h)
                        } : !h.compile && h.link && (h.compile = r(h.link)), h.priority = h.priority || 0, 
                        h.index = f, h.name = h.name || b, h.require = h.require || h.controller && h.name, 
                        h.restrict = h.restrict || "EA";
                        var i = h.$$bindings = g(h, h.name);
                        v(i.isolateScope) && (h.$$isolateBindings = i.isolateScope), h.$$moduleName = e.$$moduleName, 
                        d.push(h);
                    } catch (j) {
                        c(j);
                    }
                }), d;
            } ])), j[b].push(c)) : f(b, h(B)), this;
        }, this.aHrefSanitizationWhitelist = function(a) {
            return u(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist();
        };
        var z = !0;
        this.debugInfoEnabled = function(a) {
            return u(a) ? (z = a, this) : z;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, g, h, i, r, u, B, C) {
            function E(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function F(a, b, c, d, e) {
                a instanceof Ed || (a = Ed(a)), f(a, function(b, c) {
                    b.nodeType == _d && b.nodeValue.match(/\S+/) && (a[c] = Ed(b).wrap("<span></span>").parent()[0]);
                });
                var g = H(a, b, a, c, d, e);
                F.$$addScopeClass(a);
                var h = null;
                return function(b, c, d) {
                    la(b, "scope"), e && e.needsNewScope && (b = b.$parent.$new()), d = d || {};
                    var f = d.parentBoundTranscludeFn, i = d.transcludeControllers, j = d.futureParentElement;
                    f && f.$$boundTransclude && (f = f.$$boundTransclude), h || (h = G(j));
                    var k;
                    if (k = "html" !== h ? Ed(Z(h, Ed("<div>").append(a).html())) : c ? se.clone.call(a) : a, 
                    i) for (var l in i) k.data("$" + l + "Controller", i[l].instance);
                    return F.$$addScopeInfo(k, b), c && c(k, b), g && g(b, k, k, f), k;
                };
            }
            function G(a) {
                var b = a && a[0];
                return b && "foreignobject" !== M(b) && b.toString().match(/SVG/) ? "svg" : "html";
            }
            function H(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, m, n, q;
                    if (o) {
                        var r = d.length;
                        for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m];
                    } else q = d;
                    for (k = 0, l = p.length; l > k; ) i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), 
                    F.$$addScopeInfo(Ed(i), j)) : j = a, n = g.transcludeOnThisElement ? I(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? I(a, b) : null, 
                    g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f);
                }
                for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new fa(), j = J(a[q], [], i, 0 === q ? e : c, f), 
                k = j.length ? O(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), 
                m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), 
                (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                return n ? h : null;
            }
            function I(a, b, c) {
                var d = function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    });
                };
                return d;
            }
            function J(a, b, c, d, e) {
                var f, g, h = a.nodeType, i = c.$attr;
                switch (h) {
                  case Zd:
                    R(b, lb(M(a)), "E", d, e);
                    for (var j, k, l, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                        var u = !1, w = !1;
                        j = r[s], k = j.name, p = Sd(j.value), o = lb(k), (q = ka.test(o)) && (k = k.replace(Me, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        }));
                        var y = o.match(ma);
                        y && T(y[1]) && (u = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), 
                        l = lb(k.toLowerCase()), i[l] = k, (q || !c.hasOwnProperty(l)) && (c[l] = p, Sa(a, l) && (c[l] = !0)), 
                        aa(a, b, p, l, q), R(b, l, "A", d, e, u, w);
                    }
                    if (g = a.className, v(g) && (g = g.animVal), x(g) && "" !== g) for (;f = n.exec(g); ) l = lb(f[2]), 
                    R(b, l, "C", d, e) && (c[l] = Sd(f[3])), g = g.substr(f.index + f[0].length);
                    break;

                  case _d:
                    if (11 === Dd) for (;a.parentNode && a.nextSibling && a.nextSibling.nodeType === _d; ) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, 
                    a.parentNode.removeChild(a.nextSibling);
                    Y(b, a.nodeValue);
                    break;

                  case ae:
                    try {
                        f = m.exec(a.nodeValue), f && (l = lb(f[1]), R(b, l, "M", d, e) && (c[l] = Sd(f[2])));
                    } catch (z) {}
                }
                return b.sort(W), b;
            }
            function K(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw Le("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                        a.nodeType == Zd && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return Ed(d);
            }
            function L(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = K(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function O(a, d, f, g, h, j, k, l, m) {
                function n(a, b, c, d) {
                    a && (c && (a = L(a, c, d)), a.require = r.require, a.directiveName = s, (E === r || r.$$isolateScope) && (a = ca(a, {
                        isolateScope: !0
                    })), k.push(a)), b && (c && (b = L(b, c, d)), b.require = r.require, b.directiveName = s, 
                    (E === r || r.$$isolateScope) && (b = ca(b, {
                        isolateScope: !0
                    })), l.push(b));
                }
                function o(a, b, c, d) {
                    var e;
                    if (x(b)) {
                        var f = b.match(w), g = b.substring(f[0].length), h = f[1] || f[3], i = "?" === f[2];
                        if ("^^" === h ? c = c.parent() : (e = d && d[g], e = e && e.instance), !e) {
                            var j = "$" + g + "Controller";
                            e = h ? c.inheritedData(j) : c.data(j);
                        }
                        if (!e && !i) throw Le("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", g, a);
                    } else if (Qd(b)) {
                        e = [];
                        for (var k = 0, l = b.length; l > k; k++) e[k] = o(a, b[k], c, d);
                    }
                    return e || null;
                }
                function p(a, b, c, d, e, f) {
                    var g = qa();
                    for (var h in d) {
                        var j = d[h], k = {
                            $scope: j === E || j.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        }, l = j.controller;
                        "@" == l && (l = b[j.name]);
                        var m = i(l, k, !0, j.controllerAs);
                        g[j.name] = m, N || a.data("$" + j.name + "Controller", m.instance);
                    }
                    return g;
                }
                function q(a, b, e, g, h) {
                    function i(a, b, d) {
                        var e;
                        return D(a) || (d = b, b = a, a = c), N && (e = q), d || (d = N ? s.parent() : s), 
                        h(a, b, e, d, H);
                    }
                    var j, m, n, q, r, s, t, u, v;
                    d === e ? (t = f, s = f.$$element) : (s = Ed(e), t = new fa(s, f)), n = b, E ? m = b.$new(!0) : B && (n = b.$parent), 
                    h && (r = i, r.$$boundTransclude = h), C && (q = p(s, t, r, C, m, b)), E && (F.$$addScopeInfo(s, m, !0, !(G && (G === E || G === E.$$originalDirective))), 
                    F.$$addScopeClass(s, !0), m.$$isolateBindings = E.$$isolateBindings, u = ea(b, t, m, m.$$isolateBindings, E), 
                    u && m.$on("$destroy", u));
                    for (var w in q) {
                        var x = C[w], y = q[w], z = x.$$bindings.bindToController;
                        y.identifier && z && (v = ea(n, t, y.instance, z, x));
                        var A = y();
                        A !== y.instance && (y.instance = A, s.data("$" + x.name + "Controller", A), v && v(), 
                        v = ea(n, t, y.instance, z, x));
                    }
                    for (T = 0, W = k.length; W > T; T++) j = k[T], da(j, j.isolateScope ? m : b, s, t, j.require && o(j.directiveName, j.require, s, q), r);
                    var H = b;
                    for (E && (E.template || null === E.templateUrl) && (H = m), a && a(H, e.childNodes, c, h), 
                    T = l.length - 1; T >= 0; T--) j = l[T], da(j, j.isolateScope ? m : b, s, t, j.require && o(j.directiveName, j.require, s, q), r);
                }
                m = m || {};
                for (var r, s, t, u, y, z = -Number.MAX_VALUE, B = m.newScopeDirective, C = m.controllerDirectives, E = m.newIsolateScopeDirective, G = m.templateDirective, H = m.nonTlbTranscludeDirective, I = !1, M = !1, N = m.hasElementTranscludeDirective, O = f.$$element = Ed(d), Q = j, R = g, T = 0, W = a.length; W > T; T++) {
                    r = a[T];
                    var Y = r.$$start, _ = r.$$end;
                    if (Y && (O = K(d, Y, _)), t = c, z > r.priority) break;
                    if ((y = r.scope) && (r.templateUrl || (v(y) ? (X("new/isolated scope", E || B, r, O), 
                    E = r) : X("new/isolated scope", E, r, O)), B = B || r), s = r.name, !r.templateUrl && r.controller && (y = r.controller, 
                    C = C || qa(), X("'" + s + "' controller", C[s], r, O), C[s] = r), (y = r.transclude) && (I = !0, 
                    r.$$tlb || (X("transclusion", H, r, O), H = r), "element" == y ? (N = !0, z = r.priority, 
                    t = O, O = f.$$element = Ed(b.createComment(" " + s + ": " + f[s] + " ")), d = O[0], 
                    ba(h, S(t), d), R = F(t, g, z, Q && Q.name, {
                        nonTlbTranscludeDirective: H
                    })) : (t = Ed(Da(d)).contents(), O.empty(), R = F(t, g, c, c, {
                        needsNewScope: r.$$isolateScope || r.$$newScope
                    }))), r.template) if (M = !0, X("template", G, r, O), G = r, y = A(r.template) ? r.template(O, f) : r.template, 
                    y = ia(y), r.replace) {
                        if (Q = r, t = xa(y) ? [] : nb(Z(r.templateNamespace, Sd(y))), d = t[0], 1 != t.length || d.nodeType !== Zd) throw Le("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", s, "");
                        ba(h, O, d);
                        var aa = {
                            $attr: {}
                        }, ga = J(d, [], aa), ha = a.splice(T + 1, a.length - (T + 1));
                        (E || B) && P(ga, E, B), a = a.concat(ga).concat(ha), U(f, aa), W = a.length;
                    } else O.html(y);
                    if (r.templateUrl) M = !0, X("template", G, r, O), G = r, r.replace && (Q = r), 
                    q = V(a.splice(T, a.length - T), O, f, h, I && R, k, l, {
                        controllerDirectives: C,
                        newScopeDirective: B !== r && B,
                        newIsolateScopeDirective: E,
                        templateDirective: G,
                        nonTlbTranscludeDirective: H
                    }), W = a.length; else if (r.compile) try {
                        u = r.compile(O, f, R), A(u) ? n(null, u, Y, _) : u && n(u.pre, u.post, Y, _);
                    } catch (ja) {
                        e(ja, $(O));
                    }
                    r.terminal && (q.terminal = !0, z = Math.max(z, r.priority));
                }
                return q.scope = B && B.scope === !0, q.transcludeOnThisElement = I, q.templateOnThisElement = M, 
                q.transclude = R, m.hasElementTranscludeDirective = N, q;
            }
            function P(a, b, c) {
                for (var d = 0, e = a.length; e > d; d++) a[d] = o(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                });
            }
            function R(b, c, d, f, g, h, i) {
                if (c === g) return null;
                var l = null;
                if (j.hasOwnProperty(c)) for (var m, n = a.get(c + k), p = 0, q = n.length; q > p; p++) try {
                    m = n[p], (t(f) || f > m.priority) && -1 != m.restrict.indexOf(d) && (h && (m = o(m, {
                        $$start: h,
                        $$end: i
                    })), b.push(m), l = m);
                } catch (r) {
                    e(r);
                }
                return l;
            }
            function T(b) {
                if (j.hasOwnProperty(b)) for (var c, d = a.get(b + k), e = 0, f = d.length; f > e; e++) if (c = d[e], 
                c.multiElement) return !0;
                return !1;
            }
            function U(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), f(b, function(b, f) {
                    "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function V(a, b, c, d, e, h, i, j) {
                var k, l, m = [], n = b[0], p = a.shift(), q = o(p, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: p
                }), r = A(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, s = p.templateNamespace;
                return b.empty(), g(r).then(function(g) {
                    var o, t, u, w;
                    if (g = ia(g), p.replace) {
                        if (u = xa(g) ? [] : nb(Z(s, Sd(g))), o = u[0], 1 != u.length || o.nodeType !== Zd) throw Le("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                        t = {
                            $attr: {}
                        }, ba(d, b, o);
                        var x = J(o, [], t);
                        v(p.scope) && P(x, !0), a = x.concat(a), U(c, t);
                    } else o = n, b.html(g);
                    for (a.unshift(q), k = O(a, o, c, e, b, p, h, i, j), f(d, function(a, c) {
                        a == o && (d[c] = b[0]);
                    }), l = H(b[0].childNodes, e); m.length; ) {
                        var y = m.shift(), z = m.shift(), A = m.shift(), B = m.shift(), C = b[0];
                        if (!y.$$destroyed) {
                            if (z !== n) {
                                var D = z.className;
                                j.hasElementTranscludeDirective && p.replace || (C = Da(o)), ba(A, Ed(z), C), E(Ed(C), D);
                            }
                            w = k.transcludeOnThisElement ? I(y, k.transclude, B) : B, k(l, y, C, d, w);
                        }
                    }
                    m = null;
                }), function(a, b, c, d, e) {
                    var f = e;
                    b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = I(b, k.transclude, e)), 
                    k(l, b, c, d, f)));
                };
            }
            function W(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function X(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : "";
                }
                if (b) throw Le("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, $(d));
            }
            function Y(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent(), d = !!b.length;
                        return d && F.$$addBindingClass(b), function(a, b) {
                            var e = b.parent();
                            d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                b[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function Z(a, c) {
                switch (a = yd(a || "html")) {
                  case "svg":
                  case "math":
                    var d = b.createElement("div");
                    return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;

                  default:
                    return c;
                }
            }
            function _(a, b) {
                if ("srcdoc" == b) return u.HTML;
                var c = M(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? u.RESOURCE_URL : void 0;
            }
            function aa(a, b, c, e, f) {
                var g = _(a, e);
                f = s[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === M(a)) throw Le("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", $(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, b, i) {
                                    var j = i.$$observers || (i.$$observers = qa());
                                    if (y.test(e)) throw Le("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
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
            function ba(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                    a[e++] = d;
                    for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                    a.length -= h - 1, a.context === g && (a.context = d);
                    break;
                }
                i && i.replaceChild(d, g);
                var m = b.createDocumentFragment();
                m.appendChild(g), Ed.hasData(g) && (Ed.data(d, Ed.data(g)), Fd ? (Pd = !0, Fd.cleanData([ g ])) : delete Ed.cache[g[Ed.expando]]);
                for (var n = 1, o = c.length; o > n; n++) {
                    var p = c[n];
                    Ed(p).remove(), m.appendChild(p), delete c[n];
                }
                c[0] = d, c.length = 1;
            }
            function ca(a, b) {
                return l(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function da(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g);
                } catch (h) {
                    e(h, $(c));
                }
            }
            function ea(a, b, c, e, g) {
                var i = [];
                return f(e, function(e, f) {
                    var j, k, l, m, n = e.attrName, o = e.optional, q = e.mode;
                    switch (q) {
                      case "@":
                        o || zd.call(b, n) || (c[f] = b[n] = void 0), b.$observe(n, function(a) {
                            x(a) && (c[f] = a);
                        }), b.$$observers[n].$$scope = a, x(b[n]) && (c[f] = d(b[n])(a));
                        break;

                      case "=":
                        if (!zd.call(b, n)) {
                            if (o) break;
                            b[n] = void 0;
                        }
                        if (o && !b[n]) break;
                        k = h(b[n]), m = k.literal ? Q : function(a, b) {
                            return a === b || a !== a && b !== b;
                        }, l = k.assign || function() {
                            throw j = c[f] = k(a), Le("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", b[n], g.name);
                        }, j = c[f] = k(a);
                        var r = function(b) {
                            return m(b, c[f]) || (m(b, j) ? l(a, b = c[f]) : c[f] = b), j = b;
                        };
                        r.$stateful = !0;
                        var s;
                        s = e.collection ? a.$watchCollection(b[n], r) : a.$watch(h(b[n], r), null, k.literal), 
                        i.push(s);
                        break;

                      case "&":
                        if (k = b.hasOwnProperty(n) ? h(b[n]) : p, k === p && o) break;
                        c[f] = function(b) {
                            return k(a, b);
                        };
                    }
                }), i.length && function() {
                    for (var a = 0, b = i.length; b > a; ++a) i[a]();
                };
            }
            var fa = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e];
                } else this.$attr = {};
                this.$$element = a;
            };
            fa.prototype = {
                $normalize: lb,
                $addClass: function(a) {
                    a && a.length > 0 && B.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && a.length > 0 && B.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = mb(a, b);
                    c && c.length && B.addClass(this.$$element, c);
                    var d = mb(b, a);
                    d && d.length && B.removeClass(this.$$element, d);
                },
                $set: function(a, b, c, d) {
                    var g, h = this.$$element[0], i = Sa(h, a), j = Ta(a), k = a;
                    if (i ? (this.$$element.prop(a, b), d = i) : j && (this[j] = b, k = j), this[a] = b, 
                    d ? this.$attr[a] = d : (d = this.$attr[a], d || (this.$attr[a] = d = ja(a, "-"))), 
                    g = M(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = C(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var l = "", m = Sd(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), r = 0; q > r; r++) {
                            var s = 2 * r;
                            l += C(Sd(p[s]), !0), l += " " + Sd(p[s + 1]);
                        }
                        var u = Sd(p[2 * r]).split(/\s/);
                        l += C(Sd(u[0]), !0), 2 === u.length && (l += " " + Sd(u[1])), this[a] = b = l;
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
                    return e.push(b), r.$evalAsync(function() {
                        e.$$inter || !c.hasOwnProperty(a) || t(c[a]) || b(c[a]);
                    }), function() {
                        N(e, b);
                    };
                }
            };
            var ga = d.startSymbol(), ha = d.endSymbol(), ia = "{{" == ga || "}}" == ha ? q : function(a) {
                return a.replace(/\{\{/g, ga).replace(/}}/g, ha);
            }, ka = /^ngAttr[A-Z]/, ma = /^(.+)Start$/;
            return F.$$addBindingInfo = z ? function(a, b) {
                var c = a.data("$binding") || [];
                Qd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : p, F.$$addBindingClass = z ? function(a) {
                E(a, "ng-binding");
            } : p, F.$$addScopeInfo = z ? function(a, b, c, d) {
                var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                a.data(e, b);
            } : p, F.$$addScopeClass = z ? function(a, b) {
                E(a, b ? "ng-isolate-scope" : "ng-scope");
            } : p, F;
        } ];
    }
    function lb(a) {
        return wa(a.replace(Me, ""));
    }
    function mb(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/);
        a: for (var f = 0; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (c.length > 0 ? " " : "") + g;
        }
        return c;
    }
    function nb(a) {
        a = Ed(a);
        var b = a.length;
        if (1 >= b) return a;
        for (;b--; ) {
            var c = a[b];
            c.nodeType === ae && Id.call(a, b, 1);
        }
        return a;
    }
    function ob(a, b) {
        if (b && x(b)) return b;
        if (x(a)) {
            var c = Oe.exec(a);
            if (c) return c[3];
        }
    }
    function pb() {
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
                    if (m = d.match(Oe), !m) throw Ne("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
                    n = m[1], o = o || m[3], d = a.hasOwnProperty(n) ? a[n] : oa(h.$scope, n, !0) || (b ? oa(f, n, !0) : c), 
                    ma(d, n, !0);
                }
                if (i) {
                    var p = (Qd(d) ? d[d.length - 1] : d).prototype;
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
    function qb() {
        this.$get = [ "$window", function(a) {
            return Ed(a.document);
        } ];
    }
    function rb() {
        this.$get = [ "$log", function(a) {
            return function(b, c) {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function sb(a) {
        return v(a) ? z(a) ? a.toISOString() : V(a) : a;
    }
    function tb() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                return g(a, function(a, c) {
                    null === a || t(a) || (Qd(a) ? f(a, function(a, d) {
                        b.push(da(c) + "=" + da(sb(a)));
                    }) : b.push(da(c) + "=" + da(sb(a))));
                }), b.join("&");
            };
        };
    }
    function ub() {
        this.$get = function() {
            return function(a) {
                function b(a, d, e) {
                    null === a || t(a) || (Qd(a) ? f(a, function(a, c) {
                        b(a, d + "[" + (v(a) ? c : "") + "]");
                    }) : v(a) && !z(a) ? g(a, function(a, c) {
                        b(a, d + (e ? "" : "[") + c + (e ? "" : "]"));
                    }) : c.push(da(d) + "=" + da(sb(a))));
                }
                if (!a) return "";
                var c = [];
                return b(a, "", !0), c.join("&");
            };
        };
    }
    function vb(a, b) {
        if (x(a)) {
            var c = a.replace(Ue, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d && 0 === d.indexOf(Qe) || wb(c)) && (a = W(c));
            }
        }
        return a;
    }
    function wb(a) {
        var b = a.match(Se);
        return b && Te[b[0]].test(a);
    }
    function xb(a) {
        function b(a, b) {
            a && (d[a] = d[a] ? d[a] + ", " + b : b);
        }
        var c, d = qa();
        return x(a) ? f(a.split("\n"), function(a) {
            c = a.indexOf(":"), b(yd(Sd(a.substr(0, c))), Sd(a.substr(c + 1)));
        }) : v(a) && f(a, function(a, c) {
            b(yd(c), Sd(a));
        }), d;
    }
    function yb(a) {
        var b;
        return function(c) {
            if (b || (b = xb(a)), c) {
                var d = b[yd(c)];
                return void 0 === d && (d = null), d;
            }
            return b;
        };
    }
    function zb(a, b, c, d) {
        return A(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c);
        }), a);
    }
    function Ab(a) {
        return a >= 200 && 300 > a;
    }
    function Bb() {
        var a = this.defaults = {
            transformResponse: [ vb ],
            transformRequest: [ function(a) {
                return !v(a) || E(a) || G(a) || F(a) ? a : V(a);
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: P(Re),
                put: P(Re),
                patch: P(Re)
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
                    return b.data = zb(a.data, a.headers, a.status, j.transformResponse), Ab(a.status) ? b : m.reject(b);
                }
                function h(a, b) {
                    var c, d = {};
                    return f(a, function(a, e) {
                        A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
                    }), d;
                }
                function i(b) {
                    var c, d, e, f = a.headers, g = l({}, b.headers);
                    f = l({}, f.common, f[yd(b.method)]);
                    a: for (c in f) {
                        d = yd(c);
                        for (e in g) if (yd(e) === d) continue a;
                        g[c] = f[c];
                    }
                    return h(g, P(b));
                }
                if (!Nd.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                if (!x(b.url)) throw d("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", b.url);
                var j = l({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                j.headers = i(b), j.method = Ad(j.method), j.paramSerializer = x(j.paramSerializer) ? n.get(j.paramSerializer) : j.paramSerializer;
                var k = function(b) {
                    var d = b.headers, e = zb(b.data, yb(d), c, b.transformRequest);
                    return t(e) && f(d, function(a, b) {
                        "content-type" === yd(b) && delete d[b];
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
                }) : (p.success = We("success"), p.error = We("error")), p;
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
                    n && (Ab(a) ? n.put(y, [ a, c, xb(d), e ]) : n.remove(y)), b ? k.$applyAsync(f) : (f(), 
                    k.$$phase || k.$apply());
                }
                function g(a, b, c, e) {
                    b = b >= -1 ? b : 0, (Ab(b) ? q.resolve : q.reject)({
                        data: a,
                        status: b,
                        headers: yb(c),
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
                n && (p = n.get(y), u(p) ? I(p) ? p.then(j, j) : Qd(p) ? g(p[1], p[0], P(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(y, r)), 
                t(p)) {
                    var z = Cc(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c;
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
    function Cb() {
        this.$get = function() {
            return function() {
                return new a.XMLHttpRequest();
            };
        };
    }
    function Db() {
        this.$get = [ "$browser", "$window", "$document", "$xhrFactory", function(a, b, c, d) {
            return Eb(a, d, a.defer, b.angular.callbacks, c[0]);
        } ];
    }
    function Eb(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"), g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                he(f, "load", g), he(f, "error", g), e.body.removeChild(f), f = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i);
            }, ge(f, "load", g), ge(f, "error", g), e.body.appendChild(f), g;
        }
        return function(e, h, i, j, k, l, m, n) {
            function o() {
                s && s(), v && v.abort();
            }
            function q(b, d, e, f, g) {
                u(y) && c.cancel(y), s = v = null, b(d, e, f, g), a.$$completeOutstandingRequest(p);
            }
            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == yd(e)) {
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
                    0 === c && (c = b ? 200 : "file" == Bc(h).protocol ? 404 : 0), q(j, c, b, v.getAllResponseHeaders(), a);
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
    function Fb() {
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
                        d(Xe.interr(f, b));
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
                if (m && y.length > 1 && Xe.throwNoconcat(f), !i || v.length) {
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
                            d(Xe.interr(f, g));
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
    function Gb() {
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
    function Hb(a) {
        for (var b = a.split("/"), c = b.length; c--; ) b[c] = ca(b[c]);
        return b.join("/");
    }
    function Ib(a, b) {
        var c = Bc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = n(c.port) || Ze[c.protocol] || null;
    }
    function Jb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = Bc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), 
        b.$$search = aa(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function Kb(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function Lb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function Mb(a) {
        return a.replace(/(#.+)|#$/, "$1");
    }
    function Nb(a) {
        return a.substr(0, Lb(a).lastIndexOf("/") + 1);
    }
    function Ob(a) {
        return a.substring(0, a.indexOf("/", a.indexOf("//") + 2));
    }
    function Pb(a, b, c) {
        this.$$html5 = !0, c = c || "", Ib(a, this), this.$$parse = function(a) {
            var c = Kb(b, a);
            if (!x(c)) throw $e("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
            Jb(c, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = ba(this.$$search), c = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Hb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g, h;
            return u(f = Kb(a, d)) ? (g = f, h = u(f = Kb(c, f)) ? b + (Kb("/", f) || f) : a + g) : u(f = Kb(b, d)) ? h = b + f : b == d + "/" && (h = b), 
            h && this.$$parse(h), !!h;
        };
    }
    function Qb(a, b, c) {
        Ib(a, this), this.$$parse = function(d) {
            function e(a, b, c) {
                var d, e = /^\/[A-Z]:(\/.*)/;
                return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), 
                d ? d[1] : a);
            }
            var f, g = Kb(a, d) || Kb(b, d);
            t(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", t(g) && (a = d, this.replace())) : (f = Kb(c, g), 
            t(f) && (f = g)), Jb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose();
        }, this.$$compose = function() {
            var b = ba(this.$$search), d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Hb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "");
        }, this.$$parseLinkUrl = function(b, c) {
            return Lb(a) == Lb(b) ? (this.$$parse(b), !0) : !1;
        };
    }
    function Rb(a, b, c) {
        this.$$html5 = !0, Qb.apply(this, arguments), this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == Lb(d) ? f = d : (g = Kb(b, d)) ? f = a + c + g : b === d + "/" && (f = b), 
            f && this.$$parse(f), !!f;
        }, this.$$compose = function() {
            var b = ba(this.$$search), d = this.$$hash ? "#" + ca(this.$$hash) : "";
            this.$$url = Hb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url;
        };
    }
    function Sb(a) {
        return function() {
            return this[a];
        };
    }
    function Tb(a, b) {
        return function(c) {
            return t(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
        };
    }
    function Ub() {
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
                if (!m && b.requireBase) throw $e("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                l = Ob(n) + (m || "/"), k = e.history ? Pb : Rb;
            } else l = Lb(n), k = Qb;
            var o = Nb(l);
            j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = Ed(a.target); "a" !== M(e[0]); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), i = e.attr("href") || e.attr("xlink:href");
                    v(h) && "[object SVGAnimatedString]" === h.toString() && (h = Bc(h.animVal).href), 
                    p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), 
                    j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                }
            }), Mb(j.absUrl()) != Mb(n) && d.url(j.absUrl(), !0);
            var q = !0;
            return d.onUrlChange(function(a, b) {
                return t(Kb(o, a)) ? void (g.location.href = a) : (c.$evalAsync(function() {
                    var d, e = j.absUrl(), f = j.$$state;
                    a = Mb(a), j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, 
                    j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)));
                }), void (c.$$phase || c.$digest()));
            }), c.$watch(function() {
                var a = Mb(d.url()), b = Mb(j.absUrl()), f = d.state(), g = j.$$replace, k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (q || k) && (q = !1, c.$evalAsync(function() {
                    var b = j.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), 
                    i(a, f)));
                })), j.$$replace = !1;
            }), j;
        } ];
    }
    function Vb() {
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
    function Wb(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw af("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
        return a;
    }
    function Xb(a, b) {
        if (a += "", !x(a)) throw af("iseccst", "Cannot convert object to primitive value! Expression: {0}", b);
        return a;
    }
    function Yb(a, b) {
        if (a) {
            if (a.constructor === a) throw af("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a.window === a) throw af("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw af("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
            if (a === Object) throw af("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b);
        }
        return a;
    }
    function Zb(a, b) {
        if (a) {
            if (a.constructor === a) throw af("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
            if (a === bf || a === cf || a === df) throw af("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b);
        }
    }
    function $b(a, b) {
        if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw af("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b);
    }
    function _b(a, b) {
        return "undefined" != typeof a ? a : b;
    }
    function ac(a, b) {
        return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b;
    }
    function bc(a, b) {
        var c = a(b);
        return !c.$stateful;
    }
    function cc(a, b) {
        var c, d;
        switch (a.type) {
          case hf.Program:
            c = !0, f(a.body, function(a) {
                cc(a.expression, b), c = c && a.expression.constant;
            }), a.constant = c;
            break;

          case hf.Literal:
            a.constant = !0, a.toWatch = [];
            break;

          case hf.UnaryExpression:
            cc(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
            break;

          case hf.BinaryExpression:
            cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, 
            a.toWatch = a.left.toWatch.concat(a.right.toWatch);
            break;

          case hf.LogicalExpression:
            cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, 
            a.toWatch = a.constant ? [] : [ a ];
            break;

          case hf.ConditionalExpression:
            cc(a.test, b), cc(a.alternate, b), cc(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, 
            a.toWatch = a.constant ? [] : [ a ];
            break;

          case hf.Identifier:
            a.constant = !1, a.toWatch = [ a ];
            break;

          case hf.MemberExpression:
            cc(a.object, b), a.computed && cc(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), 
            a.toWatch = [ a ];
            break;

          case hf.CallExpression:
            c = a.filter ? bc(b, a.callee.name) : !1, d = [], f(a.arguments, function(a) {
                cc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch);
            }), a.constant = c, a.toWatch = a.filter && bc(b, a.callee.name) ? d : [ a ];
            break;

          case hf.AssignmentExpression:
            cc(a.left, b), cc(a.right, b), a.constant = a.left.constant && a.right.constant, 
            a.toWatch = [ a ];
            break;

          case hf.ArrayExpression:
            c = !0, d = [], f(a.elements, function(a) {
                cc(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch);
            }), a.constant = c, a.toWatch = d;
            break;

          case hf.ObjectExpression:
            c = !0, d = [], f(a.properties, function(a) {
                cc(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch);
            }), a.constant = c, a.toWatch = d;
            break;

          case hf.ThisExpression:
            a.constant = !1, a.toWatch = [];
        }
    }
    function dc(a) {
        if (1 == a.length) {
            var b = a[0].expression, d = b.toWatch;
            return 1 !== d.length ? d : d[0] !== b ? d : c;
        }
    }
    function ec(a) {
        return a.type === hf.Identifier || a.type === hf.MemberExpression;
    }
    function fc(a) {
        return 1 === a.body.length && ec(a.body[0].expression) ? {
            type: hf.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: hf.NGValueParameter
            },
            operator: "="
        } : void 0;
    }
    function gc(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === hf.Literal || a.body[0].expression.type === hf.ArrayExpression || a.body[0].expression.type === hf.ObjectExpression);
    }
    function hc(a) {
        return a.constant;
    }
    function ic(a, b) {
        this.astBuilder = a, this.$filter = b;
    }
    function jc(a, b) {
        this.astBuilder = a, this.$filter = b;
    }
    function kc(a) {
        return "constructor" == a;
    }
    function lc(a) {
        return A(a.valueOf) ? a.valueOf() : kf.call(a);
    }
    function mc() {
        var a = qa(), b = qa();
        this.$get = [ "$filter", function(d) {
            function e(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = lc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b;
            }
            function g(a, b, d, f, g) {
                var h, i = f.inputs;
                if (1 === i.length) {
                    var j = e;
                    return i = i[0], a.$watch(function(a) {
                        var b = i(a);
                        return e(b, j) || (h = f(a, c, c, [ b ]), j = b && lc(b)), h;
                    }, b, d, g);
                }
                for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = e, l[m] = null;
                return a.$watch(function(a) {
                    for (var b = !1, d = 0, g = i.length; g > d; d++) {
                        var j = i[d](a);
                        (b || (b = !e(j, k[d]))) && (l[d] = j, k[d] = j && lc(j));
                    }
                    return b && (h = f(a, c, c, l)), h;
                }, b, d, g);
            }
            function h(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    f = a, A(b) && b.apply(this, arguments), u(a) && d.$$postDigest(function() {
                        u(f) && e();
                    });
                }, c);
            }
            function i(a, b, c, d) {
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
            function j(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    A(b) && b.apply(this, arguments), e();
                }, c);
            }
            function k(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, d = !1, e = c !== i && c !== h, f = e ? function(c, e, f, g) {
                    var h = d && g ? g[0] : a(c, e, f, g);
                    return b(h, c, e);
                } : function(c, d, e, f) {
                    var g = a(c, d, e, f), h = b(g, c, d);
                    return u(g) ? h : g;
                };
                return a.$$watchDelegate && a.$$watchDelegate !== g ? f.$$watchDelegate = a.$$watchDelegate : b.$stateful || (f.$$watchDelegate = g, 
                d = !a.inputs, f.inputs = a.inputs ? a.inputs : [ a ]), f;
            }
            var l = Ud().noUnsafeEval, m = {
                csp: l,
                expensiveChecks: !1
            }, n = {
                csp: l,
                expensiveChecks: !0
            };
            return function(c, e, f) {
                var l, o, q;
                switch (typeof c) {
                  case "string":
                    c = c.trim(), q = c;
                    var r = f ? b : a;
                    if (l = r[q], !l) {
                        ":" === c.charAt(0) && ":" === c.charAt(1) && (o = !0, c = c.substring(2));
                        var s = f ? n : m, t = new gf(s), u = new jf(t, d, s);
                        l = u.parse(c), l.constant ? l.$$watchDelegate = j : o ? l.$$watchDelegate = l.literal ? i : h : l.inputs && (l.$$watchDelegate = g), 
                        r[q] = l;
                    }
                    return k(l, e);

                  case "function":
                    return k(c, e);

                  default:
                    return k(p, e);
                }
            };
        } ];
    }
    function nc() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return pc(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function oc() {
        this.$get = [ "$browser", "$exceptionHandler", function(a, b) {
            return pc(function(b) {
                a.defer(b);
            }, b);
        } ];
    }
    function pc(a, b) {
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
            var b = new k(), c = 0, d = Qd(a) ? [] : {};
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
    function qc() {
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
    function rc() {
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
                9 === Dd && (a.$$childHead && n(a.$$childHead), a.$$nextSibling && n(a.$$nextSibling)), 
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
                                for (c in f) zd.call(f, c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, 
                                d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                if (q > b) {
                                    l++;
                                    for (c in g) zd.call(f, c) || (q--, delete g[c]);
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
                            for (var c in f) zd.call(f, c) && (h[c] = f[c]);
                        } else h = f;
                    }
                    c.$stateful = !0;
                    var f, g, h, i = this, j = b.length > 1, l = 0, m = k(a, c), n = [], o = {}, p = !0, q = 0;
                    return this.$watch(m, d);
                },
                $digest: function() {
                    var a, d, e, f, i, k, m, n, o, p, s = b, t = this, u = [];
                    q("$digest"), l.$$checkUrlChange(), this === z && null !== h && (l.defer.cancel(h), 
                    x()), g = null;
                    do {
                        for (k = !1, n = t; B.length; ) {
                            try {
                                p = B.shift(), p.scope.$eval(p.expression, p.locals);
                            } catch (v) {
                                j(v);
                            }
                            g = null;
                        }
                        a: do {
                            if (f = n.$$watchers) for (i = f.length; i--; ) try {
                                if (a = f[i]) if ((d = a.get(n)) === (e = a.last) || (a.eq ? Q(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                    if (a === g) {
                                        k = !1;
                                        break a;
                                    }
                                } else k = !0, g = a, a.last = a.eq ? O(d, null) : d, a.fn(d, e === w ? d : e, n), 
                                5 > s && (o = 4 - s, u[o] || (u[o] = []), u[o].push({
                                    msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: d,
                                    oldVal: e
                                }));
                            } catch (v) {
                                j(v);
                            }
                            if (!(m = n.$$watchersCount && n.$$childHead || n !== t && n.$$nextSibling)) for (;n !== t && !(m = n.$$nextSibling); ) n = n.$parent;
                        } while (n = m);
                        if ((k || B.length) && !s--) throw r(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, u);
                    } while (k || B.length);
                    for (r(); C.length; ) try {
                        C.shift()();
                    } catch (v) {
                        j(v);
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
                        expression: a,
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
                    a && D.push(b), y();
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
    function sc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return u(b) ? (a = b, this) : a;
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return u(a) ? (b = a, this) : b;
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = Bc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e;
            };
        };
    }
    function tc(a) {
        if ("self" === a) return a;
        if (x(a)) {
            if (a.indexOf("***") > -1) throw lf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
            return a = Td(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$");
        }
        if (B(a)) return new RegExp("^" + a.source + "$");
        throw lf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
    }
    function uc(a) {
        var b = [];
        return u(a) && f(a, function(a) {
            b.push(tc(a));
        }), b;
    }
    function vc() {
        this.SCE_CONTEXTS = mf;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = uc(b)), a;
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = uc(a)), b;
        }, this.$get = [ "$injector", function(c) {
            function d(a, b) {
                return "self" === a ? Cc(b) : !!a.exec(b.href);
            }
            function e(c) {
                var e, f, g = Bc(c.toString()), h = !1;
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
                if (!c) throw lf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                if (null === b || t(b) || "" === b) return b;
                if ("string" != typeof b) throw lf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                return new c(b);
            }
            function h(a) {
                return a instanceof k ? a.$$unwrapTrustedValue() : a;
            }
            function i(a, b) {
                if (null === b || t(b) || "" === b) return b;
                var c = l.hasOwnProperty(a) ? l[a] : null;
                if (c && b instanceof c) return b.$$unwrapTrustedValue();
                if (a === mf.RESOURCE_URL) {
                    if (e(b)) return b;
                    throw lf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString());
                }
                if (a === mf.HTML) return j(b);
                throw lf("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            var j = function(a) {
                throw lf("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            c.has("$sanitize") && (j = c.get("$sanitize"));
            var k = f(), l = {};
            return l[mf.HTML] = f(k), l[mf.CSS] = f(k), l[mf.URL] = f(k), l[mf.JS] = f(k), l[mf.RESOURCE_URL] = f(l[mf.URL]), 
            {
                trustAs: g,
                getTrusted: i,
                valueOf: h
            };
        } ];
    }
    function wc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a;
        }, this.$get = [ "$parse", "$sceDelegate", function(b, c) {
            if (a && 8 > Dd) throw lf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var d = P(mf);
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
            return f(mf, function(a, b) {
                var c = yd(b);
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
    function xc() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c, d, e = {}, f = n((/android (\d+)/.exec(yd((a.navigator || {}).userAgent)) || [])[1]), g = /Boxee/i.test((a.navigator || {}).userAgent), h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/, j = h.body && h.body.style, k = !1, l = !1;
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
                    if ("input" === a && 11 >= Dd) return !1;
                    if (t(e[a])) {
                        var b = h.createElement("div");
                        e[a] = "on" + a in b;
                    }
                    return e[a];
                },
                csp: Ud(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: f
            };
        } ];
    }
    function yc() {
        this.$get = [ "$templateCache", "$http", "$q", "$sce", function(a, b, c, d) {
            function e(f, g) {
                function h(a) {
                    if (!g) throw Le("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", f, a.status, a.statusText);
                    return c.reject(a);
                }
                e.totalPendingRequests++, x(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
                var i = b.defaults && b.defaults.transformResponse;
                Qd(i) ? i = i.filter(function(a) {
                    return a !== vb;
                }) : i === vb && (i = null);
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
    function zc() {
        this.$get = [ "$rootScope", "$browser", "$location", function(a, b, c) {
            var d = {};
            return d.findBindings = function(a, b, c) {
                var d = a.getElementsByClassName("ng-binding"), e = [];
                return f(d, function(a) {
                    var d = Nd.element(a).data("$binding");
                    d && f(d, function(d) {
                        if (c) {
                            var f = new RegExp("(^|\\s)" + Td(b) + "(\\s|\\||$)");
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
    function Ac() {
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
    function Bc(a) {
        var b = a;
        return Dd && (nf.setAttribute("href", b), b = nf.href), nf.setAttribute("href", b), 
        {
            href: nf.href,
            protocol: nf.protocol ? nf.protocol.replace(/:$/, "") : "",
            host: nf.host,
            search: nf.search ? nf.search.replace(/^\?/, "") : "",
            hash: nf.hash ? nf.hash.replace(/^#/, "") : "",
            hostname: nf.hostname,
            port: nf.port,
            pathname: "/" === nf.pathname.charAt(0) ? nf.pathname : "/" + nf.pathname
        };
    }
    function Cc(a) {
        var b = x(a) ? Bc(a) : a;
        return b.protocol === of.protocol && b.host === of.host;
    }
    function Dc() {
        this.$get = r(a);
    }
    function Ec(a) {
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
    function Fc() {
        this.$get = Ec;
    }
    function Gc(a) {
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
        } ], b("currency", Lc), b("date", $c), b("filter", Hc), b("json", _c), b("limitTo", ad), 
        b("lowercase", vf), b("number", Mc), b("orderBy", bd), b("uppercase", wf);
    }
    function Hc() {
        return function(a, b, c) {
            if (!e(a)) {
                if (null == a) return a;
                throw d("filter")("notarray", "Expected array but received: {0}", a);
            }
            var f, g, h = Kc(b);
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
                f = Ic(b, c, g);
                break;

              default:
                return a;
            }
            return Array.prototype.filter.call(a, f);
        };
    }
    function Ic(a, b, c) {
        var d, e = v(a) && "$" in a;
        return b === !0 ? b = Q : A(b) || (b = function(a, b) {
            return t(a) ? !1 : null === a || null === b ? a === b : v(b) || v(a) && !s(a) ? !1 : (a = yd("" + a), 
            b = yd("" + b), -1 !== a.indexOf(b));
        }), d = function(d) {
            return e && !v(d) ? Jc(d, a.$, b, !1) : Jc(d, a, b, c);
        };
    }
    function Jc(a, b, c, d, e) {
        var f = Kc(a), g = Kc(b);
        if ("string" === g && "!" === b.charAt(0)) return !Jc(a, b.substring(1), c, d);
        if (Qd(a)) return a.some(function(a) {
            return Jc(a, b, c, d);
        });
        switch (f) {
          case "object":
            var h;
            if (d) {
                for (h in a) if ("$" !== h.charAt(0) && Jc(a[h], b, c, !0)) return !0;
                return e ? !1 : Jc(a, b, c, !1);
            }
            if ("object" === g) {
                for (h in b) {
                    var i = b[h];
                    if (!A(i) && !t(i)) {
                        var j = "$" === h, k = j ? a : a[h];
                        if (!Jc(k, i, c, j, j)) return !1;
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
    function Kc(a) {
        return null === a ? "null" : typeof a;
    }
    function Lc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return t(c) && (c = b.CURRENCY_SYM), t(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Pc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c);
        };
    }
    function Mc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Pc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function Nc(a) {
        var b, c, d, e, f, g = 0;
        for ((c = a.indexOf(qf)) > -1 && (a = a.replace(qf, "")), (d = a.search(/e/i)) > 0 ? (0 > c && (c = d), 
        c += +a.slice(d + 1), a = a.substring(0, d)) : 0 > c && (c = a.length), d = 0; a.charAt(d) == rf; d++) ;
        if (d == (f = a.length)) b = [ 0 ], c = 1; else {
            for (f--; a.charAt(f) == rf; ) f--;
            for (c -= d, b = [], e = 0; f >= d; d++, e++) b[e] = +a.charAt(d);
        }
        return c > pf && (b = b.splice(0, pf - 1), g = c - 1, c = 1), {
            d: b,
            e: g,
            i: c
        };
    }
    function Oc(a, b, c, d) {
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
    function Pc(a, b, c, d, e) {
        if (!x(a) && !y(a) || isNaN(a)) return "";
        var f, g = !isFinite(a), h = !1, i = Math.abs(a) + "", j = "";
        if (g) j = "∞"; else {
            f = Nc(i), Oc(f, e, b.minFrac, b.maxFrac);
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
    function Qc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; ) a = rf + a;
        return c && (a = a.substr(a.length - b)), d + a;
    }
    function Rc(a, b, c, d) {
        return c = c || 0, function(e) {
            var f = e["get" + a]();
            return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Qc(f, b, d);
        };
    }
    function Sc(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Ad(b ? "SHORT" + a : a);
            return d[f][e];
        };
    }
    function Tc(a, b, c) {
        var d = -1 * c, e = d >= 0 ? "+" : "";
        return e += Qc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Qc(Math.abs(d % 60), 2);
    }
    function Uc(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b);
    }
    function Vc(a) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()));
    }
    function Wc(a) {
        return function(b) {
            var c = Uc(b.getFullYear()), d = Vc(b), e = +d - +c, f = 1 + Math.round(e / 6048e5);
            return Qc(f, a);
        };
    }
    function Xc(a, b) {
        return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
    }
    function Yc(a, b) {
        return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1];
    }
    function Zc(a, b) {
        return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1];
    }
    function $c(a) {
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
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, x(c) && (c = uf.test(c) ? n(c) : b(c)), 
            y(c) && (c = new Date(c)), !z(c) || !isFinite(c.getTime())) return c;
            for (;d; ) h = tf.exec(d), h ? (j = R(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            var k = c.getTimezoneOffset();
            return e && (k = X(e, c.getTimezoneOffset()), c = Z(c, e, !0)), f(j, function(b) {
                g = sf[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), i;
        };
    }
    function _c() {
        return function(a, b) {
            return t(b) && (b = 2), V(a, b);
        };
    }
    function ad() {
        return function(a, b, c) {
            return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : n(b), isNaN(b) ? a : (y(a) && (a = a.toString()), 
            Qd(a) || x(a) ? (c = !c || isNaN(c) ? 0 : n(c), c = 0 > c ? Math.max(0, a.length + c) : c, 
            b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a);
        };
    }
    function bd(a) {
        function b(b, c) {
            return c = c ? -1 : 1, b.map(function(b) {
                var d = 1, e = q;
                if (A(b)) e = b; else if (x(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (d = "-" == b.charAt(0) ? -1 : 1, 
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
            Qd(c) || (c = [ c ]), 0 === c.length && (c = [ "+" ]);
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
    function cd(a) {
        return A(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", r(a);
    }
    function dd(a, b) {
        a.$name = b;
    }
    function ed(a, b, d, e, g) {
        var h = this, i = [];
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), 
        h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, 
        h.$$parentForm = zf, h.$rollbackViewValue = function() {
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
            }), N(i, a), a.$$parentForm = zf;
        }, td({
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
            e.removeClass(a, hg), e.addClass(a, ig), h.$dirty = !0, h.$pristine = !1, h.$$parentForm.$setDirty();
        }, h.$setPristine = function() {
            e.setClass(a, hg, ig + " " + Af), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, 
            f(i, function(a) {
                a.$setPristine();
            });
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched();
            });
        }, h.$setSubmitted = function() {
            e.addClass(a, Af), h.$submitted = !0, h.$$parentForm.$setSubmitted();
        };
    }
    function fd(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString();
        });
    }
    function gd(a, b, c, d, e, f) {
        hd(a, b, c, d, e, f), fd(d);
    }
    function hd(a, b, c, d, e, f) {
        var g = yd(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function(a) {
                h = !0;
            }), b.on("compositionend", function() {
                h = !1, i();
            });
        }
        var i = function(a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val(), i = a && a.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Sd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i);
            }
        };
        if (e.hasEvent("input")) b.on("input", i); else {
            var j, k = function(a, b, c) {
                j || (j = f.defer(function() {
                    j = null, b && b.value === c || i(a);
                }));
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value);
            }), e.hasEvent("paste") && b.on("paste cut", k);
        }
        b.on("change", i), d.$render = function() {
            var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
            b.val() !== a && b.val(a);
        };
    }
    function id(a, b) {
        if (z(a)) return a;
        if (x(a)) {
            Kf.lastIndex = 0;
            var c = Kf.exec(a);
            if (c) {
                var d = +c[1], e = +c[2], f = 0, g = 0, h = 0, i = 0, j = Uc(d), k = 7 * (e - 1);
                return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), 
                new Date(d, 0, j.getDate() + k, f, g, h, i);
            }
        }
        return NaN;
    }
    function jd(a, b) {
        return function(c, d) {
            var e, g;
            if (z(c)) return c;
            if (x(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), 
                Ef.test(c)) return new Date(c);
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
    function kd(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }
            function n(a) {
                return u(a) && !z(a) ? d(a) || c : a;
            }
            ld(f, g, h, i), hd(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                if (i.$isEmpty(a)) return null;
                if (b.test(a)) {
                    var e = d(a, o);
                    return p && (e = Z(e, p)), e;
                }
                return c;
            }), i.$formatters.push(function(a) {
                if (a && !z(a)) throw mg("datefmt", "Expected `{0}` to be a date", a);
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
    function ld(a, b, d, e) {
        var f = b[0], g = e.$$hasNativeValidators = v(f.validity);
        g && e.$parsers.push(function(a) {
            var d = b.prop(xd) || {};
            return d.badInput && !d.typeMismatch ? c : a;
        });
    }
    function md(a, b, d, e, f, g) {
        if (ld(a, b, d, e), hd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
            return e.$isEmpty(a) ? null : Hf.test(a) ? parseFloat(a) : c;
        }), e.$formatters.push(function(a) {
            if (!e.$isEmpty(a)) {
                if (!y(a)) throw mg("numfmt", "Expected `{0}` to be a number", a);
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
    function nd(a, b, c, d, e, f) {
        hd(a, b, c, d, e, f), fd(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Ff.test(c);
        };
    }
    function od(a, b, c, d, e, f) {
        hd(a, b, c, d, e, f), fd(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
            var c = a || b;
            return d.$isEmpty(c) || Gf.test(c);
        };
    }
    function pd(a, b, c, d) {
        t(c.name) && b.attr("name", i());
        var e = function(a) {
            b[0].checked && d.$setViewValue(c.value, a && a.type);
        };
        b.on("click", e), d.$render = function() {
            var a = c.value;
            b[0].checked = a == d.$viewValue;
        }, c.$observe("value", d.$render);
    }
    function qd(a, b, c, d, e) {
        var f;
        if (u(d)) {
            if (f = a(d), !f.constant) throw mg("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
            return f(b);
        }
        return e;
    }
    function rd(a, b, c, d, e, f, g, h) {
        var i = qd(h, a, "ngTrueValue", c.ngTrueValue, !0), j = qd(h, a, "ngFalseValue", c.ngFalseValue, !1), k = function(a) {
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
    function sd(a, b) {
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
                return Qd(a) ? (f(a, function(a) {
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
    function td(a) {
        function b(a, b, i) {
            t(b) ? d("$pending", a, i) : e("$pending", a, i), H(b) ? b ? (l(h.$error, a, i), 
            k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), 
            l(h.$$success, a, i)), h.$pending ? (f(lg, !0), h.$valid = h.$invalid = c, g("", null)) : (f(lg, !1), 
            h.$valid = ud(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
            var j;
            j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, 
            g(a, j), h.$$parentForm.$setValidity(a, j, h);
        }
        function d(a, b, c) {
            h[a] || (h[a] = {}), k(h[a], b, c);
        }
        function e(a, b, d) {
            h[a] && l(h[a], b, d), ud(h[a]) && (h[a] = c);
        }
        function f(a, b) {
            b && !j[a] ? (m.addClass(i, a), j[a] = !0) : !b && j[a] && (m.removeClass(i, a), 
            j[a] = !1);
        }
        function g(a, b) {
            a = a ? "-" + ja(a, "-") : "", f(fg + a, b === !0), f(gg + a, b === !1);
        }
        var h = a.ctrl, i = a.$element, j = {}, k = a.set, l = a.unset, m = a.$animate;
        j[gg] = !(j[fg] = i.hasClass(fg)), h.$setValidity = b;
    }
    function ud(a) {
        if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
        return !0;
    }
    function vd(a) {
        a[0].hasAttribute("selected") && (a[0].selected = !0);
    }
    var wd = /^\/(.+)\/([a-z]*)$/, xd = "validity", yd = function(a) {
        return x(a) ? a.toLowerCase() : a;
    }, zd = Object.prototype.hasOwnProperty, Ad = function(a) {
        return x(a) ? a.toUpperCase() : a;
    }, Bd = function(a) {
        return x(a) ? a.replace(/[A-Z]/g, function(a) {
            return String.fromCharCode(32 | a.charCodeAt(0));
        }) : a;
    }, Cd = function(a) {
        return x(a) ? a.replace(/[a-z]/g, function(a) {
            return String.fromCharCode(-33 & a.charCodeAt(0));
        }) : a;
    };
    "i" !== "I".toLowerCase() && (yd = Bd, Ad = Cd);
    var Dd, Ed, Fd, Gd, Hd = [].slice, Id = [].splice, Jd = [].push, Kd = Object.prototype.toString, Ld = Object.getPrototypeOf, Md = d("ng"), Nd = a.angular || (a.angular = {}), Od = 0;
    Dd = b.documentMode, p.$inject = [], q.$inject = [];
    var Pd, Qd = Array.isArray, Rd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, Sd = function(a) {
        return x(a) ? a.trim() : a;
    }, Td = function(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, Ud = function() {
        function a() {
            try {
                return new Function(""), !1;
            } catch (a) {
                return !0;
            }
        }
        if (!u(Ud.rules)) {
            var c = b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
            if (c) {
                var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
                Ud.rules = {
                    noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
                    noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
                };
            } else Ud.rules = {
                noUnsafeEval: a(),
                noInlineStyle: !1
            };
        }
        return Ud.rules;
    }, Vd = function() {
        if (u(Vd.name_)) return Vd.name_;
        var a, c, d, e, f = Wd.length;
        for (c = 0; f > c; ++c) if (d = Wd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
            e = a.getAttribute(d + "jq");
            break;
        }
        return Vd.name_ = e;
    }, Wd = [ "ng-", "data-ng-", "ng:", "x-ng-" ], Xd = /[A-Z]/g, Yd = !1, Zd = 1, $d = 2, _d = 3, ae = 8, be = 9, ce = 11, de = {
        full: "1.4.9",
        major: 1,
        minor: 4,
        dot: 9,
        codeName: "implicit-superannuation"
    };
    Ca.expando = "ng339";
    var ee = Ca.cache = {}, fe = 1, ge = function(a, b, c) {
        a.addEventListener(b, c, !1);
    }, he = function(a, b, c) {
        a.removeEventListener(b, c, !1);
    };
    Ca._data = function(a) {
        return this.cache[a[this.expando]] || {};
    };
    var ie = /([\:\-\_]+(.))/g, je = /^moz([A-Z])/, ke = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, le = d("jqLite"), me = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ne = /<|&#?\w+;/, oe = /<([\w:-]+)/, pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, qe = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, 
    qe.th = qe.td;
    var re = Node.prototype.contains || function(a) {
        return !!(16 & this.compareDocumentPosition(a));
    }, se = Ca.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c());
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), Ca(a).on("load", d));
        },
        toString: function() {
            var a = [];
            return f(this, function(b) {
                a.push("" + b);
            }), "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return Ed(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: Jd,
        sort: [].sort,
        splice: [].splice
    }, te = {};
    f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
        te[yd(a)] = a;
    });
    var ue = {};
    f("input,select,option,textarea,button,form,details".split(","), function(a) {
        ue[a] = !0;
    });
    var ve = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: Ia,
        removeData: Ga,
        hasData: za
    }, function(a, b) {
        Ca[b] = a;
    }), f({
        data: Ia,
        inheritedData: Oa,
        scope: function(a) {
            return Ed.data(a, "$scope") || Oa(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return Ed.data(a, "$isolateScope") || Ed.data(a, "$isolateScopeNoTemplate");
        },
        controller: Na,
        injector: function(a) {
            return Oa(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: Ja,
        css: function(a, b, c) {
            return b = wa(b), u(c) ? void (a.style[b] = c) : a.style[b];
        },
        attr: function(a, b, d) {
            var e = a.nodeType;
            if (e !== _d && e !== $d && e !== ae) {
                var f = yd(b);
                if (te[f]) {
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
                    return c === Zd || c === _d ? a.textContent : "";
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
            return t(b) ? a.innerHTML : (Ea(a, !0), void (a.innerHTML = b));
        },
        empty: Pa
    }, function(a, b) {
        Ca.prototype[b] = function(b, c) {
            var d, e, f = this.length;
            if (a !== Pa && t(2 == a.length && a !== Ja && a !== Na ? b : c)) {
                if (v(b)) {
                    for (d = 0; f > d; d++) if (a === Ia) a(this[d], b); else for (e in b) a(this[d], e, b[e]);
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
        removeData: Ga,
        on: function(a, b, d, e) {
            if (u(e)) throw le("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (ya(a)) {
                var f = Ha(a, !0), g = f.events, h = f.handle;
                h || (h = f.handle = Ua(a, g));
                for (var i = b.indexOf(" ") >= 0 ? b.split(" ") : [ b ], j = i.length, k = function(b, c, e) {
                    var f = g[b];
                    f || (f = g[b] = [], f.specialHandlerWrapper = c, "$destroy" === b || e || ge(a, b, h)), 
                    f.push(d);
                }; j--; ) b = i[j], ke[b] ? (k(ke[b], Wa), k(b, c, !0)) : k(b);
            }
        },
        off: Fa,
        one: function(a, b, c) {
            a = Ed(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d);
            }), a.on(b, c);
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            Ea(a), f(new Ca(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
            });
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === Zd && b.push(a);
            }), b;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (c === Zd || c === ce) {
                b = new Ca(b);
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d];
                    a.appendChild(f);
                }
            }
        },
        prepend: function(a, b) {
            if (a.nodeType === Zd) {
                var c = a.firstChild;
                f(new Ca(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            b = Ed(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a);
        },
        remove: Qa,
        detach: function(a) {
            Qa(a, !0);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            b = new Ca(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g;
            }
        },
        addClass: La,
        removeClass: Ka,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                t(d) && (d = !Ja(a, b)), (d ? La : Ka)(a, b);
            });
        },
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== ce ? b : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: Da,
        triggerHandler: function(a, b, c) {
            var d, e, g, h = b.type || b, i = Ha(a), j = i && i.events, k = j && j[h];
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
        Ca.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) t(e) ? (e = a(this[f], b, c, d), 
            u(e) && (e = Ed(e))) : Ma(e, a(this[f], b, c, d));
            return u(e) ? e : this;
        }, Ca.prototype.bind = Ca.prototype.on, Ca.prototype.unbind = Ca.prototype.off;
    }), Za.prototype = {
        put: function(a, b) {
            this[Ya(a, this.nextUid)] = b;
        },
        get: function(a) {
            return this[Ya(a, this.nextUid)];
        },
        remove: function(a) {
            var b = this[a = Ya(a, this.nextUid)];
            return delete this[a], b;
        }
    };
    var we = [ function() {
        this.$get = [ function() {
            return Za;
        } ];
    } ], xe = /^[^\(]*\(\s*([^\)]*)\)/m, ye = /,/, ze = /^\s*(_?)(\S+?)\1\s*$/, Ae = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Be = d("$injector");
    ab.$$annotate = _a;
    var Ce = d("$animate"), De = 1, Ee = "ng-animate", Fe = function() {
        this.$get = function() {};
    }, Ge = function() {
        var a = new Za(), b = [];
        this.$get = [ "$$AnimateRunner", "$rootScope", function(c, d) {
            function e(a, b, c) {
                var d = !1;
                return b && (b = x(b) ? b.split(" ") : Qd(b) ? b : [], f(b, function(b) {
                    b && (d = !0, a[b] = c);
                })), d;
            }
            function g() {
                f(b, function(b) {
                    var c = a.get(b);
                    if (c) {
                        var d = eb(b.attr("class")), e = "", g = "";
                        f(c, function(a, b) {
                            var c = !!d[b];
                            a !== c && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b);
                        }), f(b, function(a) {
                            e && La(a, e), g && Ka(a, g);
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
    }, He = [ "$provide", function(a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
            if (c && "." !== c.charAt(0)) throw Ce("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
            var e = c + "-animation";
            b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d);
        }, this.classNameFilter = function(a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, 
            this.$$classNameFilter)) {
                var b = new RegExp("(\\s+|\\/)" + Ee + "(\\s+|\\/)");
                if (b.test(this.$$classNameFilter.toString())) throw Ce("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ee);
            }
            return this.$$classNameFilter;
        }, this.$get = [ "$$animateQueue", function(a) {
            function b(a, b, c) {
                if (c) {
                    var d = db(c);
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
                    return d = d && Ed(d), e = e && Ed(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", fb(f));
                },
                move: function(c, d, e, f) {
                    return d = d && Ed(d), e = e && Ed(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", fb(f));
                },
                leave: function(b, c) {
                    return a.push(b, "leave", fb(c), function() {
                        b.remove();
                    });
                },
                addClass: function(b, c, d) {
                    return d = fb(d), d.addClass = cb(d.addclass, c), a.push(b, "addClass", d);
                },
                removeClass: function(b, c, d) {
                    return d = fb(d), d.removeClass = cb(d.removeClass, c), a.push(b, "removeClass", d);
                },
                setClass: function(b, c, d, e) {
                    return e = fb(e), e.addClass = cb(e.addClass, c), e.removeClass = cb(e.removeClass, d), 
                    a.push(b, "setClass", e);
                },
                animate: function(b, c, d, e, f) {
                    return f = fb(f), f.from = f.from ? l(f.from, c) : c, f.to = f.to ? l(f.to, d) : d, 
                    e = e || "ng-inline-animate", f.tempClasses = cb(f.tempClasses, e), a.push(b, "animate", f);
                }
            };
        } ];
    } ], Ie = function() {
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
    }, Je = function() {
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
    }, Ke = function() {
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
    }, Le = d("$compile");
    kb.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Me = /^((?:x|data)[\:\-_])/i, Ne = d("$controller"), Oe = /^(\S+)(\s+as\s+([\w$]+))?$/, Pe = function() {
        this.$get = [ "$document", function(a) {
            return function(b) {
                return b ? !b.nodeType && b instanceof Ed && (b = b[0]) : b = a[0].body, b.offsetWidth + 1;
            };
        } ];
    }, Qe = "application/json", Re = {
        "Content-Type": Qe + ";charset=utf-8"
    }, Se = /^\[|^\{(?!\{)/, Te = {
        "[": /]$/,
        "{": /}$/
    }, Ue = /^\)\]\}',?\n/, Ve = d("$http"), We = function(a) {
        return function() {
            throw Ve("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a);
        };
    }, Xe = Nd.$interpolateMinErr = d("$interpolate");
    Xe.throwNoconcat = function(a) {
        throw Xe("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a);
    }, Xe.interr = function(a, b) {
        return Xe("interr", "Can't interpolate: {0}\n{1}", a, b.toString());
    };
    var Ye = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Ze = {
        http: 80,
        https: 443,
        ftp: 21
    }, $e = d("$location"), _e = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Sb("$$absUrl"),
        url: function(a) {
            if (t(a)) return this.$$url;
            var b = Ye.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), 
            this.hash(b[5] || ""), this;
        },
        protocol: Sb("$$protocol"),
        host: Sb("$$host"),
        port: Sb("$$port"),
        path: Tb("$$path", function(a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (x(a) || y(a)) a = a.toString(), this.$$search = aa(a); else {
                    if (!v(a)) throw $e("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
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
        hash: Tb("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    f([ Rb, Qb, Pb ], function(a) {
        a.prototype = Object.create(_e), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== Pb || !this.$$html5) throw $e("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = t(b) ? null : b, this;
        };
    });
    var af = d("$parse"), bf = Function.prototype.call, cf = Function.prototype.apply, df = Function.prototype.bind, ef = qa();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        ef[a] = !0;
    });
    var ff = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "\x0B",
        "'": "'",
        '"': '"'
    }, gf = function(a) {
        this.options = a;
    };
    gf.prototype = {
        constructor: gf,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                var b = this.text.charAt(this.index);
                if ('"' === b || "'" === b) this.readString(b); else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(b)) this.readIdent(); else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: b
                }), this.index++; else if (this.isWhitespace(b)) this.index++; else {
                    var c = b + this.peek(), d = c + this.peek(2), e = ef[b], f = ef[c], g = ef[d];
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
            throw af("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = yd(this.text.charAt(this.index));
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
                        var h = ff[f];
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
    var hf = function(a, b) {
        this.lexer = a, this.options = b;
    };
    hf.Program = "Program", hf.ExpressionStatement = "ExpressionStatement", hf.AssignmentExpression = "AssignmentExpression", 
    hf.ConditionalExpression = "ConditionalExpression", hf.LogicalExpression = "LogicalExpression", 
    hf.BinaryExpression = "BinaryExpression", hf.UnaryExpression = "UnaryExpression", 
    hf.CallExpression = "CallExpression", hf.MemberExpression = "MemberExpression", 
    hf.Identifier = "Identifier", hf.Literal = "Literal", hf.ArrayExpression = "ArrayExpression", 
    hf.Property = "Property", hf.ObjectExpression = "ObjectExpression", hf.ThisExpression = "ThisExpression", 
    hf.NGValueParameter = "NGValueParameter", hf.prototype = {
        ast: function(a) {
            this.text = a, this.tokens = this.lexer.lex(a);
            var b = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            b;
        },
        program: function() {
            for (var a = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), 
            !this.expect(";")) return {
                type: hf.Program,
                body: a
            };
        },
        expressionStatement: function() {
            return {
                type: hf.ExpressionStatement,
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
                type: hf.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a;
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), 
            {
                type: hf.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            }) : c;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||"); ) a = {
                type: hf.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a;
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&"); ) a = {
                type: hf.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a;
        },
        equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!=="); ) b = {
                type: hf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b;
        },
        relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">="); ) b = {
                type: hf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b;
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-"); ) b = {
                type: hf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b;
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%"); ) b = {
                type: hf.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b;
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: hf.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary();
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = O(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", "."); ) "(" === b.text ? (a = {
                type: hf.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: hf.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: hf.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a;
        },
        filter: function(a) {
            for (var b = [ a ], c = {
                type: hf.CallExpression,
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
                type: hf.Identifier,
                name: a.text
            };
        },
        constant: function() {
            return {
                type: hf.Literal,
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
                type: hf.ArrayExpression,
                elements: a
            };
        },
        object: function() {
            var a, b = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                a = {
                    type: hf.Property,
                    kind: "init"
                }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), 
                this.consume(":"), a.value = this.expression(), b.push(a);
            } while (this.expect(","));
            return this.consume("}"), {
                type: hf.ObjectExpression,
                properties: b
            };
        },
        throwError: function(a, b) {
            throw af("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw af("ueoe", "Unexpected end of expression: {0}", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), 
            b;
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw af("ueoe", "Unexpected end of expression: {0}", this.text);
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
                type: hf.Literal,
                value: !0
            },
            "false": {
                type: hf.Literal,
                value: !1
            },
            "null": {
                type: hf.Literal,
                value: null
            },
            undefined: {
                type: hf.Literal,
                value: c
            },
            "this": {
                type: hf.ThisExpression
            }
        }
    }, ic.prototype = {
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
            }, cc(e, d.$filter);
            var g, h = "";
            if (this.stage = "assign", g = fc(e)) {
                this.state.computing = "assign";
                var i = this.nextId();
                this.recurse(g, i), this.return_(i), h = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            }
            var j = dc(e.body);
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
            var k = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;", l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", k)(this.$filter, Wb, Yb, Zb, Xb, $b, _b, ac, a);
            return this.state = this.stage = c, l.literal = gc(e), l.constant = hc(e), l;
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
              case hf.Program:
                f(a.body, function(b, d) {
                    m.recurse(b.expression, c, c, function(a) {
                        j = a;
                    }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j);
                });
                break;

              case hf.Literal:
                l = this.escape(a.value), this.assign(b, l), e(l);
                break;

              case hf.UnaryExpression:
                this.recurse(a.argument, c, c, function(a) {
                    j = a;
                }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
                break;

              case hf.BinaryExpression:
                this.recurse(a.left, c, c, function(a) {
                    i = a;
                }), this.recurse(a.right, c, c, function(a) {
                    j = a;
                }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", 
                this.assign(b, l), e(l);
                break;

              case hf.LogicalExpression:
                b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), 
                e(b);
                break;

              case hf.ConditionalExpression:
                b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), 
                e(b);
                break;

              case hf.Identifier:
                b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), 
                d.computed = !1, d.name = a.name), Wb(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
                    m.if_("inputs" === m.stage || "s", function() {
                        g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), 
                        m.assign(b, m.nonComputedMember("s", a.name));
                    });
                }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || kc(a.name)) && m.addEnsureSafeObject(b), 
                e(b);
                break;

              case hf.MemberExpression:
                i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function() {
                    m.if_(m.notNull(i), function() {
                        a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.getStringValue(j), m.addEnsureSafeMemberName(j), 
                        g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), 
                        l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, 
                        d.name = j)) : (Wb(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), 
                        l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || kc(a.property.name)) && (l = m.ensureSafeObject(l)), 
                        m.assign(b, l), d && (d.computed = !1, d.name = a.property.name));
                    }, function() {
                        m.assign(b, "undefined");
                    }), e(b);
                }, !!g);
                break;

              case hf.CallExpression:
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

              case hf.AssignmentExpression:
                if (j = this.nextId(), i = {}, !ec(a.left)) throw af("lval", "Trying to assign a value to a non l-value");
                this.recurse(a.left, c, i, function() {
                    m.if_(m.notNull(i.context), function() {
                        m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), 
                        m.addEnsureSafeAssignContext(i.context), l = m.member(i.context, i.name, i.computed) + a.operator + j, 
                        m.assign(b, l), e(b || l);
                    });
                }, 1);
                break;

              case hf.ArrayExpression:
                k = [], f(a.elements, function(a) {
                    m.recurse(a, m.nextId(), c, function(a) {
                        k.push(a);
                    });
                }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
                break;

              case hf.ObjectExpression:
                k = [], f(a.properties, function(a) {
                    m.recurse(a.value, m.nextId(), c, function(b) {
                        k.push(m.escape(a.key.type === hf.Identifier ? a.key.name : "" + a.key.value) + ":" + b);
                    });
                }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
                break;

              case hf.ThisExpression:
                this.assign(b, "s"), e("s");
                break;

              case hf.NGValueParameter:
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
            throw af("esc", "IMPOSSIBLE");
        },
        nextId: function(a, b) {
            var c = "v" + this.state.nextId++;
            return a || this.current().vars.push(c + (b ? "=" + b : "")), c;
        },
        current: function() {
            return this.state[this.state.computing];
        }
    }, jc.prototype = {
        compile: function(a, b) {
            var c = this, d = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, cc(d, c.$filter);
            var e, g;
            (e = fc(d)) && (g = this.recurse(e));
            var h, i = dc(d.body);
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
            }), h && (k.inputs = h), k.literal = gc(d), k.constant = hc(d), k;
        },
        recurse: function(a, b, d) {
            var e, g, h, i = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
              case hf.Literal:
                return this.value(a.value, b);

              case hf.UnaryExpression:
                return g = this.recurse(a.argument), this["unary" + a.operator](g, b);

              case hf.BinaryExpression:
                return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);

              case hf.LogicalExpression:
                return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);

              case hf.ConditionalExpression:
                return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);

              case hf.Identifier:
                return Wb(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || kc(a.name), b, d, i.expression);

              case hf.MemberExpression:
                return e = this.recurse(a.object, !1, !!d), a.computed || (Wb(a.property.name, i.expression), 
                g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);

              case hf.CallExpression:
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
                        Yb(j.context, i.expression), Zb(j.value, i.expression);
                        for (var k = [], l = 0; l < h.length; ++l) k.push(Yb(h[l](a, c, d, e), i.expression));
                        f = Yb(j.value.apply(j.context, k), i.expression);
                    }
                    return b ? {
                        value: f
                    } : f;
                };

              case hf.AssignmentExpression:
                return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right), function(a, c, d, f) {
                    var h = e(a, c, d, f), j = g(a, c, d, f);
                    return Yb(h.value, i.expression), $b(h.context), h.context[h.name] = j, b ? {
                        value: j
                    } : j;
                };

              case hf.ArrayExpression:
                return h = [], f(a.elements, function(a) {
                    h.push(i.recurse(a));
                }), function(a, c, d, e) {
                    for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                    return b ? {
                        value: f
                    } : f;
                };

              case hf.ObjectExpression:
                return h = [], f(a.properties, function(a) {
                    h.push({
                        key: a.key.type === hf.Identifier ? a.key.name : "" + a.key.value,
                        value: i.recurse(a.value)
                    });
                }), function(a, c, d, e) {
                    for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                    return b ? {
                        value: f
                    } : f;
                };

              case hf.ThisExpression:
                return function(a) {
                    return b ? {
                        value: a
                    } : a;
                };

              case hf.NGValueParameter:
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
                var h = a(d, e, f, g), i = b(d, e, f, g), j = ac(h, i);
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
                return b && Yb(l, f), d ? {
                    context: k,
                    name: a,
                    value: l
                } : l;
            };
        },
        computedMember: function(a, b, c, d, e) {
            return function(f, g, h, i) {
                var j, k, l = a(f, g, h, i);
                return null != l && (j = b(f, g, h, i), j = Xb(j), Wb(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), 
                k = l[j], Yb(k, e)), c ? {
                    context: l,
                    name: j,
                    value: k
                } : k;
            };
        },
        nonComputedMember: function(a, b, d, e, f, g) {
            return function(h, i, j, k) {
                var l = a(h, i, j, k);
                f && 1 !== f && l && !l[b] && (l[b] = {});
                var m = null != l ? l[b] : c;
                return (d || kc(b)) && Yb(m, g), e ? {
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
    var jf = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c, this.ast = new hf(this.lexer), 
        this.astCompiler = c.csp ? new jc(this.ast, b) : new ic(this.ast, b);
    };
    jf.prototype = {
        constructor: jf,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks);
        }
    };
    var kf = Object.prototype.valueOf, lf = d("$sce"), mf = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Le = d("$compile"), nf = b.createElement("a"), of = Bc(a.location.href);
    Ec.$inject = [ "$document" ], Gc.$inject = [ "$provide" ];
    var pf = 22, qf = ".", rf = "0";
    Lc.$inject = [ "$locale" ], Mc.$inject = [ "$locale" ];
    var sf = {
        yyyy: Rc("FullYear", 4),
        yy: Rc("FullYear", 2, 0, !0),
        y: Rc("FullYear", 1),
        MMMM: Sc("Month"),
        MMM: Sc("Month", !0),
        MM: Rc("Month", 2, 1),
        M: Rc("Month", 1, 1),
        dd: Rc("Date", 2),
        d: Rc("Date", 1),
        HH: Rc("Hours", 2),
        H: Rc("Hours", 1),
        hh: Rc("Hours", 2, -12),
        h: Rc("Hours", 1, -12),
        mm: Rc("Minutes", 2),
        m: Rc("Minutes", 1),
        ss: Rc("Seconds", 2),
        s: Rc("Seconds", 1),
        sss: Rc("Milliseconds", 3),
        EEEE: Sc("Day"),
        EEE: Sc("Day", !0),
        a: Xc,
        Z: Tc,
        ww: Wc(2),
        w: Wc(1),
        G: Yc,
        GG: Yc,
        GGG: Yc,
        GGGG: Zc
    }, tf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, uf = /^\-?\d+$/;
    $c.$inject = [ "$locale" ];
    var vf = r(yd), wf = r(Ad);
    bd.$inject = [ "$parse" ];
    var xf = r({
        restrict: "E",
        compile: function(a, b) {
            return b.href || b.xlinkHref ? void 0 : function(a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var c = "[object SVGAnimatedString]" === Kd.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function(a) {
                        b.attr(c) || a.preventDefault();
                    });
                }
            };
        }
    }), yf = {};
    f(te, function(a, b) {
        function c(a, c, e) {
            a.$watch(e[d], function(a) {
                e.$set(b, !!a);
            });
        }
        if ("multiple" != a) {
            var d = lb("ng-" + b), e = c;
            "checked" === a && (e = function(a, b, e) {
                e.ngModel !== e[d] && c(a, b, e);
            }), yf[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                };
            };
        }
    }), f(ve, function(a, b) {
        yf[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                        var e = d.ngPattern.match(wd);
                        if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]));
                    }
                    a.$watch(d[b], function(a) {
                        d.$set(b, a);
                    });
                }
            };
        };
    }), f([ "src", "srcset", "href" ], function(a) {
        var b = lb("ng-" + a);
        yf[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === Kd.call(d.prop("href")) && (g = "xlinkHref", 
                    e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        return b ? (e.$set(g, b), void (Dd && f && d.prop(f, e[g]))) : void ("href" === a && e.$set(g, null));
                    });
                }
            };
        };
    });
    var zf = {
        $addControl: p,
        $$renameControl: dd,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    }, Af = "ng-submitted";
    ed.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var Bf = function(a) {
        return [ "$timeout", "$parse", function(b, d) {
            function e(a) {
                return "" === a ? d('this[""]').assign : d(a).assign || p;
            }
            var f = {
                name: "form",
                restrict: a ? "EAC" : "E",
                require: [ "form", "^^?form" ],
                controller: ed,
                compile: function(d, f) {
                    d.addClass(hg).addClass(fg);
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
                                ge(d[0], "submit", j), d.on("$destroy", function() {
                                    b(function() {
                                        he(d[0], "submit", j);
                                    }, 0, !1);
                                });
                            }
                            var k = h[1] || i.$$parentForm;
                            k.$addControl(i);
                            var m = g ? e(i.$name) : p;
                            g && (m(a, i), f.$observe(g, function(b) {
                                i.$name !== b && (m(a, c), i.$$parentForm.$$renameControl(i, b), (m = e(i.$name))(a, i));
                            })), d.on("$destroy", function() {
                                i.$$parentForm.$removeControl(i), m(a, c), l(i, zf);
                            });
                        }
                    };
                }
            };
            return f;
        } ];
    }, Cf = Bf(), Df = Bf(!0), Ef = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Ff = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Gf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Hf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, If = /^(\d{4})-(\d{2})-(\d{2})$/, Jf = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Kf = /^(\d{4})-W(\d\d)$/, Lf = /^(\d{4})-(\d\d)$/, Mf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Nf = {
        text: gd,
        date: kd("date", If, jd(If, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": kd("datetimelocal", Jf, jd(Jf, [ "yyyy", "MM", "dd", "HH", "mm", "ss", "sss" ]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: kd("time", Mf, jd(Mf, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: kd("week", Kf, id, "yyyy-Www"),
        month: kd("month", Lf, jd(Lf, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: md,
        url: nd,
        email: od,
        radio: pd,
        checkbox: rd,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    }, Of = [ "$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(e, f, g, h) {
                    h[0] && (Nf[yd(g.type)] || Nf.text)(e, f, g, h[0], b, a, c, d);
                }
            }
        };
    } ], Pf = /^(true|false|\d+)$/, Qf = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, b) {
                return Pf.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue));
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a);
                    });
                };
            }
        };
    }, Rf = [ "$compile", function(a) {
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
    } ], Sf = [ "$interpolate", "$compile", function(a, b) {
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
    } ], Tf = [ "$sce", "$parse", "$compile", function(a, b, c) {
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
    } ], Uf = r({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    }), Vf = sd("", !0), Wf = sd("Odd", 0), Xf = sd("Even", 1), Yf = cd({
        compile: function(a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak");
        }
    }), Zf = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], $f = {}, _f = {
        blur: !0,
        focus: !0
    };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = lb("ng-" + a);
        $f[b] = [ "$parse", "$rootScope", function(c, d) {
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
                            _f[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e);
                        });
                    };
                }
            };
        } ];
    });
    var ag = [ "$animate", function(a) {
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
    } ], bg = [ "$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Nd.noop,
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
    } ], cg = [ "$compile", function(a) {
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
    } ], dg = cd({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    }), eg = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = b.attr(d.$attr.ngList) || ", ", h = "false" !== d.ngTrim, i = h ? Sd(g) : g, j = function(a) {
                    if (!t(a)) {
                        var b = [];
                        return a && f(a.split(i), function(a) {
                            a && b.push(h ? Sd(a) : a);
                        }), b;
                    }
                };
                e.$parsers.push(j), e.$formatters.push(function(a) {
                    return Qd(a) ? a.join(g) : c;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, fg = "ng-valid", gg = "ng-invalid", hg = "ng-pristine", ig = "ng-dirty", jg = "ng-untouched", kg = "ng-touched", lg = "ng-pending", mg = d("ngModel"), ng = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, 
        this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], 
        this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, 
        this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, 
        this.$pending = c, this.$name = l(d.name || "", !1)(a), this.$$parentForm = zf;
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
            } else if (!n.assign) throw mg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, $(e));
        }, this.$render = p, this.$isEmpty = function(a) {
            return t(a) || "" === a || null === a || a !== a;
        };
        var w = 0;
        td({
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
            v.$dirty = !1, v.$pristine = !0, h.removeClass(e, ig), h.addClass(e, hg);
        }, this.$setDirty = function() {
            v.$dirty = !0, v.$pristine = !1, h.removeClass(e, hg), h.addClass(e, ig), v.$$parentForm.$setDirty();
        }, this.$setUntouched = function() {
            v.$touched = !1, v.$untouched = !0, h.setClass(e, jg, kg);
        }, this.$setTouched = function() {
            v.$touched = !0, v.$untouched = !1, h.setClass(e, kg, jg);
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
                    if (!I(h)) throw mg("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
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
            v.$viewValue = a, (!v.$options || v.$options.updateOnDefault) && v.$$debounceViewValueCommit(b);
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
    } ], og = [ "$rootScope", function(a) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: ng,
            priority: 1,
            compile: function(b) {
                return b.addClass(hg).addClass(jg).addClass(fg), {
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
    } ], pg = /(\s+|^)default(\s+|$)/, qg = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(a, b) {
                var c = this;
                this.$options = O(a.$eval(b.ngModelOptions)), u(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = Sd(this.$options.updateOn.replace(pg, function() {
                    return c.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, rg = cd({
        terminal: !0,
        priority: 1e3
    }), sg = d("ngOptions"), tg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, ug = [ "$compile", "$parse", function(a, c) {
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
            var h = a.match(tg);
            if (!h) throw sg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, $(b));
            var i = h[5] || h[7], j = h[6], k = / as /.test(h[0]) && h[1], l = h[9], m = c(h[2] ? h[1] : i), n = k && c(k), o = n || m, p = l && c(l), q = l ? function(a, b) {
                return p(d, b);
            } : function(a) {
                return Ya(a);
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
                            return l ? Nd.copy(a.viewValue) : a.viewValue;
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
                return b && yd(b.nodeName) === c ? e = b : (e = d.cloneNode(!1), b ? a.insertBefore(e, b) : a.appendChild(e)), 
                e;
            }
            function l(a) {
                for (var b; a; ) b = a.nextSibling, Qa(a), a = b;
            }
            function m(a) {
                var b = p && p[0], c = w && w[0];
                if (b || c) for (;a && (a === b || a === c || a.nodeType === ae || "option" === M(a) && "" === a.value); ) a = a.nextSibling;
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
                var v = !!p, w = Ed(h.cloneNode(!1));
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
                    return Qd(o.$viewValue) ? o.$viewValue.map(function(a) {
                        return y.getTrackByValue(a);
                    }) : void 0;
                }, function() {
                    o.$render();
                })) : (q.writeValue = function(a) {
                    var b = x.getOptionFromViewValue(a);
                    b && !b.disabled ? c[0].value !== b.selectValue && (C(), A(), c[0].value = b.selectValue, 
                    b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || v ? (C(), 
                    z()) : (A(), B());
                }, q.readValue = function() {
                    var a = x.selectValueMap[c.val()];
                    return a && !a.disabled ? (A(), C(), x.getViewValueFromOption(a)) : null;
                }, y.trackBy && b.$watch(function() {
                    return y.getTrackByValue(o.$viewValue);
                }, function() {
                    o.$render();
                })), v ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = Ed(h.cloneNode(!1)), 
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
    } ], vg = [ "$locale", "$interpolate", "$log", function(a, b, c) {
        var d = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
            link: function(g, h, i) {
                function j(a) {
                    h.text(a || "");
                }
                var k, l = i.count, m = i.$attr.when && h.attr(i.$attr.when), n = i.offset || 0, o = g.$eval(m) || {}, q = {}, r = b.startSymbol(), s = b.endSymbol(), u = r + l + "-" + n + s, v = Nd.noop;
                f(i, function(a, b) {
                    var c = e.exec(b);
                    if (c) {
                        var d = (c[1] ? "-" : "") + yd(c[2]);
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
    } ], wg = [ "$parse", "$animate", function(a, g) {
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
                    $id: Ya
                };
                return t ? w = a(t) : (y = function(a, b) {
                    return Ya(b);
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
                            for (var K in d) zd.call(d, K) && "$" !== K.charAt(0) && E.push(K);
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
                            k(F) != t && g.move(pa(F.clone), null, Ed(I)), I = l(F), j(F.scope, m, u, B, v, A, w);
                        } else p(function(a, b) {
                            F.scope = b;
                            var c = o.cloneNode(!1);
                            a[a.length++] = c, g.enter(a, null, Ed(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w);
                        });
                        q = J;
                    });
                };
            }
        };
    } ], xg = "ng-hide", yg = "ng-hide-animate", zg = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngShow, function(b) {
                    a[b ? "removeClass" : "addClass"](c, xg, {
                        tempClasses: yg
                    });
                });
            }
        };
    } ], Ag = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(b, c, d) {
                b.$watch(d.ngHide, function(b) {
                    a[b ? "addClass" : "removeClass"](c, xg, {
                        tempClasses: yg
                    });
                });
            }
        };
    } ], Bg = cd(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "");
            }), a && b.css(a);
        }, !0);
    }), Cg = [ "$animate", function(a) {
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
    } ], Dg = cd({
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
    }), Eg = cd({
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
    }), Fg = cd({
        restrict: "EAC",
        link: function(a, b, c, e, f) {
            if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", $(b));
            f(function(a) {
                b.empty(), b.append(a);
            });
        }
    }), Gg = [ "$templateCache", function(a) {
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
    } ], Hg = {
        $setViewValue: p,
        $render: p
    }, Ig = [ "$element", "$scope", "$attrs", function(a, d, e) {
        var f = this, g = new Za();
        f.ngModelCtrl = Hg, f.unknownOption = Ed(b.createElement("option")), f.renderUnknownOption = function(b) {
            var c = "? " + Ya(b) + " ?";
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
            na(a, '"option value"'), "" === a && (f.emptyOption = b);
            var c = g.get(a) || 0;
            g.put(a, c + 1), f.ngModelCtrl.$render(), vd(b);
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
    } ], Jg = function() {
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
                        var c = new Za(a);
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
            controller: Ig,
            priority: 1,
            link: {
                pre: a,
                post: b
            }
        };
    }, Kg = [ "$interpolate", function(a) {
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
    } ], Lg = r({
        restrict: "E",
        terminal: !1
    }), Mg = function() {
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
    }, Ng = function() {
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
    }, Og = function() {
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
    }, Pg = function() {
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
    return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ka(), 
    ua(Nd), Nd.module("ngLocale", [], [ "$provide", function(a) {
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
            pluralCat: function(a, b) {
                var c = 0 | a, f = d(a, b);
                return 1 == c && 0 == f.v ? e.ONE : e.OTHER;
            }
        });
    } ]), void Ed(b).ready(function() {
        fa(b, ga);
    }));
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), 
function(a, b, c) {
    "use strict";
    function d() {
        function a(a, c) {
            return b.extend(Object.create(a), c);
        }
        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                var f = "?" === d ? d : null, g = "*" === d ? d : null;
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
                    s = !0, c.$evalAsync(function() {
                        m(), n();
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
}(window, window.angular), angular.module("biblioteca", [ "ngRoute" ]), angular.module("biblioteca").config([ "$routeProvider", function(a) {
    a.when("/", {
        templateUrl: "view/login.html",
        controller: "loginCtrl"
    }), a.otherwise({
        redirectTo: "/"
    });
} ]), angular.module("biblioteca").controller("loginCtrl", [ "$scope", function(a) {} ]);