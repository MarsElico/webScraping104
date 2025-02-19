window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 1342751,
    "rec_value": 0.0,
    "state_change_listen_mode": "automatic",
    "record": false,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": false,
    "session_capture_console_consent": false,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_all_on_specific_pages": [],
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": null,
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {"tag_recordings": false},
        "abtasty": {"tag_recordings": false},
        "kissmetrics": {"send_user_id": false},
        "mixpanel": {"send_events": false},
        "unbounce": {"tag_recordings": false},
        "hubspot": {"enabled": false, "send_recordings": false, "send_surveys": false}
    },
    "features": ["ask.popover_redesign", "client_script.compression.pc", "csq_theme", "error_reporting", "feedback.embeddable_widget", "feedback.widgetV2", "feedback.widget_telemetry", "settings.billing_v2", "survey.embeddable_widget", "survey.image_question", "survey.screenshots", "survey.type_button"],
    "tracking_code_verified": true,
    "cs_project_id": null,
    "account_id": 378261,
    "account_signature": "6a94e34011047c2131a4e20fb2cfc6884769fa24a01f3a8830cd015744f25deb"
};

!function () {
    "use strict";

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e(t)
    }

    function t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, r(i.key), i)
        }
    }

    function r(t) {
        var r = function (t, r) {
            if ("object" != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != e(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == e(r) ? r : String(r)
    }

    var n, i = function () {
        function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.send = t, this.batchSize = r, this.flushInterval = n, this.buffer = [], this.flushTimer = null
        }

        var r, n;
        return r = e, (n = [{
            key: "getBuffer", value: function () {
                return this.buffer
            }
        }, {
            key: "add", value: function (e) {
                var t = this;
                this.buffer.push(e), this.buffer.length >= this.batchSize ? this.flush() : this.flushTimer || (this.flushTimer = setTimeout((function () {
                    t.flush()
                }), this.flushInterval))
            }
        }, {
            key: "flush", value: function () {
                this.buffer.length > 0 && (this.send(this.buffer), this.buffer = []), this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = null)
            }
        }]) && t(r.prototype, n), Object.defineProperty(r, "prototype", {writable: !1}), e
    }();

    function a() {
        return a = Object.assign ? Object.assign.bind() : function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, a.apply(this, arguments)
    }

    var o, s = function () {
            try {
                return "performance" in window && "now" in window.performance
            } catch (e) {
                return !1
            }
        }, c = {
            version: 6,
            metricsUrl: (null === (n = window._hjSettings) || void 0 === n ? void 0 : n.metricsUrl) || "https://metrics.hotjar.io",
            sampling: {metrics: .1, fieldMetrics: .01, debug: .5, universalDebug: .05 * .1},
            browser: {hasPerformance: !1, shouldLogMetrics: !1, inLab: !1},
            buffer: {bufferSize: 40, flushInterval: 3e3}
        }, l = {isDebugEnabled: !1, isMetricsEnabled: !1, isFieldMetricsEnabled: !1, loggedMetrics: {}, genericTags: {}},
        u = function (e, t, r) {
            var n;
            l.loggedMetrics[e] = a(a({}, l.loggedMetrics[e]), {}, ((n = {})[t] = r || {}, n))
        }, d = function (e) {
            if (!e) return "value";
            var t = Object.keys(e)[0];
            return t && e[t] || "value"
        }, g = function (e) {
            var t, r = null !== (t = e.tag) && void 0 !== t ? t : void 0;
            return l.isDebugEnabled ? a(a(a({}, r), e.extraTags), l.genericTags) : r
        }, f = function (e, t) {
            if (!o) return !1;
            var r = l.isMetricsEnabled || l.isDebugEnabled;
            return "lab" === e && (r = c.browser.inLab), "field" === e && (r = l.isFieldMetricsEnabled), t ? r && t.flush : r
        }, h = function (e) {
            var t = !1, r = "v=".concat(c.version),
                n = "".concat(c.metricsUrl, "?").concat(r, "&site_id=").concat(window.hjSiteSettings.site_id) + (l.isDebugEnabled ? "&debug=true" : ""),
                i = JSON.stringify(e);
            if ("sendBeacon" in navigator) try {
                t = navigator.sendBeacon.bind(navigator)(n, i)
            } catch (e) {
            }
            if (!1 === t) try {
                var a = new XMLHttpRequest;
                a.open("POST", n), a.timeout = 1e4, a.send(i)
            } catch (e) {
            }
            c.browser.shouldLogMetrics && console.debug("New Metrics: ", e)
        }, p = {
            getConfig: function (e) {
                return c[e]
            }, getState: function (e) {
                return l[e]
            }, start: function () {
                try {
                    c.browser = {
                        hasPerformance: s(),
                        shouldLogMetrics: /hjMetrics=1/.test(location.search),
                        inLab: /hjLab=true/.test(location.search)
                    };
                    var e = p.time(), t = window.hjSiteSettings || {}, r = t.features, n = t.site_id, a = new Set(r),
                        u = c.sampling;
                    return l.genericTags = {site_id: n}, l.isDebugEnabled = Math.random() <= u.universalDebug || a.has("client_script.metrics.debug") && Math.random() <= u.debug, l.isMetricsEnabled = Math.random() <= u.metrics, l.isFieldMetricsEnabled = l.isMetricsEnabled && Math.random() <= u.fieldMetrics, o = new i(h, c.buffer.bufferSize, c.buffer.flushInterval), e
                } catch (e) {
                    console.debug("Error in metrics.start", {error: e})
                }
            }, reset: function () {
                l.loggedMetrics = {}
            }, stop: function () {
                l.isDebugEnabled = !1, l.isMetricsEnabled = !1, l.genericTags = {}
            }, count: function (e, t) {
                var r = t.incr, n = t.tag, i = t.extraTags, s = t.type;
                try {
                    var c, u = d(n), h = l.loggedMetrics[e], p = 0;
                    if (r ? (p = (h && h[u] || 0) + (r.value || 1), l.loggedMetrics[e] = a(a({}, h), {}, ((c = {})[u] = null != r && r.flush ? 0 : p, c))) : p = 1, f(s, r)) {
                        var m = {name: e, type: "count", value: p, tags: g({tag: n, extraTags: i})};
                        o.add(m)
                    }
                } catch (e) {
                }
            }, distr: function (e, t) {
                var r = t.task, n = t.value, i = t.extraTags;
                f() && o.add({name: e, type: "distribution", value: n, tags: g({tag: {task: r}, extraTags: i})})
            }, time: function () {
                try {
                    if (!c.browser.hasPerformance) return;
                    return performance.now()
                } catch (e) {
                }
            }, timeEnd: function (e, t) {
                var r = t.tag, n = t.start, i = t.total, a = t.extraTags, s = t.type;
                try {
                    var c = p.time();
                    if (!i && !c) return;
                    var l = d(r), h = i || (n && c ? c - n : void 0);
                    if (u(e, l, {}), h && h > 0 && f(s)) {
                        var m = {name: e, type: "distribution", value: Math.round(h), tags: g({tag: r, extraTags: a})};
                        o.add(m)
                    }
                    return c
                } catch (t) {
                    console.debug("Failed to send timer metric: ", {name: e, tag: r, error: t})
                }
            }, timeIncr: function (e, t) {
                var r, n, i, a, o = t.tag, s = t.start, c = t.flush, g = t.extraTags, f = t.type, h = hj.metrics.time(),
                    m = s && h ? h - s : void 0, v = (r = e, {
                        tagName: n = d(o),
                        start: (a = (i = l.loggedMetrics[r]) && i[n] || {}).start,
                        total: a.total
                    }), w = m ? m + (v.total || 0) : v.total;
                return u(e, v.tagName, {total: w}), c && p.timeEnd(e, {tag: o, total: w, extraTags: g, type: f}), w
            }, timeWatcher: function () {
                var e, t = 0, r = !1, n = function () {
                    var r, n = p.time();
                    return t += null !== (r = e && n && n - e) && void 0 !== r ? r : 0, e = p.time(), t
                };
                return {
                    start: function () {
                        if (!r) return r = !0, e = p.time()
                    }, incr: n, end: function () {
                        var r = n();
                        return t = 0, e = void 0, r
                    }
                }
            }, getErrorMessage: function (e) {
                return e instanceof Error ? e.message : "string" == typeof e ? e : ""
            }
        };

    function m(e, t, r) {
        if (t && !Array.isArray(t) && "number" == typeof t.length) {
            var n = t.length;
            return w(t, void 0 !== r && r < n ? r : n)
        }
        return e(t, r)
    }

    function v(e) {
        return function (e) {
            if (Array.isArray(e)) return w(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function (e, t) {
            if (e) {
                if ("string" == typeof e) return w(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? w(e, t) : void 0
            }
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    var b = function (e) {
        return e.replayRecordingMaskedUrlRegex = "replayRecordingMaskedUrlRegex", e.replayRecordingMaskedUrlRegexRules = "replayRecordingMaskedUrlRegexRules", e
    }(b || {}), y = function (e) {
        return e.START = "start", e.NOT_START = "not-start", e.END = "end", e.NOT_END = "not-end", e.CONTAIN = "contain", e.NOT_CONTAIN = "not-contain", e.EXACT = "exact", e.NOT_EXACT = "not-exact", e
    }(y || {});
    var j, _;
    window.hj = window.hj || function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        (window.hj.q = window.hj.q || []).push(t)
    }, window.hj.metrics = p;
    var S, T, E, R, M, O, x, C, A, I, N, k, U = hj.metrics.start(),
        P = !(!window.CS_CONF || null === (j = window.CS_CONF.voc) || void 0 === j || !j.enabled),
        B = !(window.CS_CONF || !(null !== (_ = window.hjSiteSettings.features) && void 0 !== _ && _.includes("cs_lite") || window._hjSettings.csid));
    if (window.hjLazyModules = window.hjLazyModules || {
        SURVEY_V2: {js: "survey-v2.35391c28507202aa6f40.js"},
        SURVEY_BOOTSTRAPPER: {js: "survey-bootstrapper.31d6cfe0d16ae931b73c.js"},
        SURVEY_ISOLATED: {js: "survey-isolated.31d6cfe0d16ae931b73c.js"},
        HEATMAP_RETAKER: {js: "heatmap-retaker.f79c0c7bb13d8a14bddc.js"},
        SURVEY_INVITATION: {js: "survey-invitation.b7982e012811b2fcf55b.js"},
        NOTIFICATION: {js: "notification.ed2bca043f1d9f8c6b56.js"},
        SENTRY: {js: "sentry.58c81e3e25532810f6fd.js"},
        BROWSER_PERF: {js: "browser-perf.8417c6bba72228fa2e29.js"},
        USER_TEST: {js: "user-test.7c38773017dcc7f46245.js"}
    }, P) window._uxa.push(["start:hotjar", window.hjSiteSettings]), window.hj.scriptLoaded = !0; else if (B) {
        var D = (O = (S = window.hjSiteSettings).suppress_all || S.suppress_text || (null === (T = S.suppress_all_on_specific_pages) || void 0 === T ? void 0 : T.length), x = function (e) {
            var t, r, n, i, a, o = {
                anonymisationMethod: null,
                replayRecordingMaskedUrlRegex: null,
                replayRecordingMaskedUrlRegexRules: null
            };
            if ((e.suppress_all || e.suppress_text) && (o.anonymisationMethod = b.replayRecordingMaskedUrlRegex, o.replayRecordingMaskedUrlRegex = ".*"), null !== (t = e.suppress_all_on_specific_pages) && void 0 !== t && t.length) {
                o.anonymisationMethod = b.replayRecordingMaskedUrlRegexRules;
                var s = (r = e.suppress_all_on_specific_pages, n = {
                    contains: y.CONTAIN,
                    regex: y.CONTAIN,
                    simple: y.CONTAIN,
                    ends_with: y.END,
                    exact: y.EXACT,
                    starts_with: y.START
                }, i = [], a = Object.keys(n), r.forEach((function (e) {
                    if (e.pattern && a.includes(e.match_operation)) {
                        var t = {
                            operator: n[e.match_operation],
                            value: e.pattern,
                            ignoreQueryParams: "simple" === e.match_operation,
                            ignoreURIFragments: "simple" === e.match_operation,
                            ignoreCaseSensitivity: "simple" === e.match_operation,
                            notOperator: e.negate
                        };
                        i.push(t)
                    }
                })), i.length ? i : void 0);
                o.replayRecordingMaskedUrlRegexRules = s || null
            }
            return o
        }(S), C = x.anonymisationMethod, A = x.replayRecordingMaskedUrlRegex, I = x.replayRecordingMaskedUrlRegexRules, N = !(null === (E = _hjSettings) || void 0 === E || !E.environment || "live" === _hjSettings.environment), {
            CS_CONF_BASE: {
                projectId: S.cs_project_id,
                smbConfig: {
                    siteId: S.site_id,
                    record: !!hjSiteSettings.record,
                    useCSTC: !0,
                    useSentry: !0,
                    csLiteDomain: N ? "insights-integration.live.eks.hotjar.com" : "insights.hotjar.com"
                },
                hostnames: [window.location.hostname],
                voc: null !== (R = S.polls) && void 0 !== R && R.length ? {
                    enabled: 1,
                    siteId: S.site_id
                } : {enabled: 0},
                whitelistedAttributes: [],
                anonymizeDigits: !!O || S.anonymize_digits,
                implementations: (M = S, m(v, (k = M.state_change_listen_mode, "manual" === k ? [] : [{
                    template: {
                        name: "ArtificialPageview",
                        args: {}
                    },
                    triggers: [{
                        name: "HistoryChange",
                        args: {
                            listeners: "popstate, pushState, replaceState" + ("automatic_with_fragments" === k ? ", hashchange" : ""),
                            useDebounce: "no",
                            window: 400
                        }
                    }]
                }]))),
                recordTargetingRules: m(v, S.record_targeting_rules),
                anonymisationMethod: C,
                replayRecordingMaskedUrlRegex: A,
                replayRecordingMaskedUrlRegexRules: I
            }, PII_SELECTORS: S.suppress_all ? ["picture, img, video, audio"] : null
        }), L = D.CS_CONF_BASE, F = D.PII_SELECTORS;
        window.CS_CONF_BASE = L, window._uxa = window._uxa || [], F && window._uxa.push(["setPIISelectors", {PIISelectors: F}]);
        var z = window._hjSettings.environment, H = "t.contentsquare.net";
        z && "live" !== z && (window._hjSettings.csid && (window.CS_CONF_BASE.projectId = window._hjSettings.csid), H = "t-staging.contentsquare.net");
        var V = document.createElement("script");
        V.type = "text/javascript", V.async = !0, V.src = "//".concat(H, "/uxa/smb/tag.js"), document.getElementsByTagName("head")[0].appendChild(V)
    } else window.hjBootstrap = window.hjBootstrap || function (e, t, r) {
        var n,
            i = new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot|facebook", "i"),
            a = (null === (n = window.navigator) || void 0 === n ? void 0 : n.userAgent) || "unknown";
        if (i.test(a)) return hj.metrics.count("session-rejection", {tag: {reason: "bot"}}), void console.warn("Hotjar not launching due to suspicious userAgent:", a);
        var o = "http:" === window.location.protocol, s = Boolean(window._hjSettings.preview);
        if (o && !s) return hj.metrics.count("session-rejection", {tag: {reason: "https"}}), void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");
        var c = function (e, t, r) {
            window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(r), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
        };
        c(0, 0, r);
        var l = window.document, u = l.head || l.getElementsByTagName("head")[0];
        hj.scriptDomain = e;
        var d = l.createElement("script");
        d.async = 1, d.src = hj.scriptDomain + t, d.charset = "utf-8", u.appendChild(d), c.revision = "8cdbde3", window.hjBootstrap = c
    }, window.hjBootstrap("https://script.hotjar.com/", "modules.0436d96a0ec6cfd03f7c.js", "1342751"), hj.metrics.timeEnd("resource-blocking-time", {
        tag: {resource: "hotjar-js"},
        start: U,
        type: "lab"
    })
}();
!function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9c57b198-de67-5a65-a06e-9c9c448b8477")
    } catch (e) {
    }
}();
//# debugId=9c57b198-de67-5a65-a06e-9c9c448b8477
