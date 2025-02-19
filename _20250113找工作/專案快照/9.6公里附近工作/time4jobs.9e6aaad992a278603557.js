(function (t) {
    function e(e) {
        for (var o, s, r = e[0], l = e[1], c = e[2], p = 0, m = []; p < r.length; p++) s = r[p], Object.prototype.hasOwnProperty.call(a, s) && a[s] && m.push(a[s][0]), a[s] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o]);
        u && u(e);
        while (m.length) m.shift()();
        return i.push.apply(i, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], o = !0, r = 1; r < n.length; r++) {
                var l = n[r];
                0 !== a[l] && (o = !1)
            }
            o && (i.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }

    var o = {}, a = {time4jobs: 0}, i = [];

    function s(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {i: e, l: !1, exports: {}};
        return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.m = t, s.c = o, s.d = function (t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, s.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) s.d(n, o, function (e) {
            return t[e]
        }.bind(null, o));
        return n
    }, s.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "//cdn.104.com.tw/time4jobs/";
    var r = window["time4jobs"] = window["time4jobs"] || [], l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var u = l;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("1b7b")
    }, "0a4b": function (t, e, n) {
        "use strict";
        var o = n("54fb"), a = n.n(o);
        a.a
    }, "0dab": function (t, e, n) {
        "use strict";
        var o = n("c1f0"), a = n.n(o);
        a.a
    }, "0ebc": function (t, e, n) {
    }, "0fc6": function (t, e, n) {
    }, "10f0": function (t, e, n) {
        "use strict";
        var o = n("ad19"), a = n.n(o);
        a.a
    }, 1240: function (t, e, n) {
        "use strict";
        var o = n("0ebc"), a = n.n(o);
        a.a
    }, "12dd": function (t, e, n) {
        "use strict";
        var o = n("b54f"), a = n.n(o);
        a.a
    }, 1429: function (t, e, n) {
    }, "1b7b": function (t, e, n) {
        "use strict";
        n.r(e);
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("54ba");
        var o = n("8bbf"), a = n.n(o), i = n("8c4f"), s = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "w-100 min-w-auto pb-0 overflow-hidden",
                    class: {"has-m104App": t.hasM104App},
                    attrs: {id: "app"}
                }, [n("structured-data"), n("bread-crumb", {
                    staticClass: "d-none",
                    attrs: {"have-structure-data": !0, bread: t.breadcrumbList}
                }), n("search-main", {
                    ref: "main-search",
                    on: {"time4jobs-event": t.onSearchEvent}
                }), n("sub-filter-tabs-bar", t._b({
                    ref: "sub-search",
                    on: {"search-event": t.onSearchEvent}
                }, "sub-filter-tabs-bar", t.subFilterSetting, !1)), n("sub-filter-content-area", {
                    ref: "sub-filter-content-area",
                    staticClass: "position-absolute d-none d-md-block",
                    on: {"search-event": t.onSearchEvent}
                }), n("sub-filter-mobile-content-area", {
                    ref: "sub-filter-mobile-content-area",
                    staticClass: "d-md-none",
                    on: {"search-event": t.onSearchEvent}
                }), n("cluster-map", {
                    ref: "cluster-map",
                    staticClass: "map",
                    class: {
                        "map--with-nav": !("chromium-webview" === t.browser.name || "ios-webview" === t.browser.name),
                        "has-m104App": t.hasM104App
                    },
                    attrs: {dist: t.timeToDist}
                }), t.showRecommendation ? n("SidebarRecommendation", {
                    ref: "sidebar-recommendation",
                    on: {"search-event": t.onSearchEvent}
                }) : t._e(), n("joblist-pc", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.showRecommendation,
                        expression: "!showRecommendation"
                    }], ref: "joblist-pc"
                }), n("joblist-mobile", {
                    ref: "joblist-mobile",
                    on: {cancelSearch: t.cancelSearch}
                }), n("c-loading", {attrs: {mask: !0}})], 1)
            }, r = [], l = (n("b0c0"), n("ade3")), c = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "search-main",
                    class: {"search-main--with-nav": !("chromium-webview" === t.browser.name || "ios-webview" === t.browser.name)}
                }, [n("div", {
                    staticClass: "search-main__mobile p-3 bg-white d-md-none",
                    class: {"pb-5": t.$v.locationInput.$error}
                }, [n("div", {staticClass: "search-main__mobile-outline bg-gray-score rounded"}, [n("div", {staticClass: "row position-relative"}, [n("div", {staticClass: "col"}, [n("input", {
                    staticClass: "form-control border-0 bg-gray-score p-3 text-truncate",
                    attrs: {type: "text", placeholder: "居住地址或地標"},
                    domProps: {value: t.locationInput.text},
                    on: {
                        click: function (e) {
                            t.popupMobileInputOpen = !t.popupMobileInputOpen
                        }
                    }
                }), t.$v.locationInput.$error ? n("span", {
                    staticClass: "position-absolute",
                    domProps: {textContent: t._s("請填寫")}
                }) : t._e()]), n("category-picker-opener-main", {
                    staticClass: "col input-right",
                    class: {"text-gray-deep-dark": !t.isJobCatEmpty},
                    attrs: {"category-text": t.jobCatText},
                    nativeOn: {
                        click: function (e) {
                            return t.openCategoryTool("JobCat", !0)
                        }
                    }
                })], 1)]), t.popupMobileInputOpen ? n("popup-mobile-full-input", {
                    staticClass: "search-main__mobile-input",
                    attrs: {
                        title: "設定出發點",
                        "input-data": t.locationInput,
                        "select-option": t.locationOptions,
                        "tag-option": t.locationTags,
                        "not-update-input-data-text": ["找捷運附近", "找學校附近"]
                    },
                    on: {
                        "update:inputData": function (e) {
                            t.locationInput = e
                        },
                        "update:input-data": function (e) {
                            t.locationInput = e
                        },
                        inputEnter: t.searchJobs,
                        inputSelect: t.mobileInputSelect,
                        tagSelect: t.mobileTagSelect,
                        inputBlur: function (e) {
                            return t.$v.locationInput.$touch()
                        },
                        close: t.close
                    }
                }) : t._e()], 1), n("div", {staticClass: "search-main__pc bg-white p-5 d-none d-md-block"}, [n("div", {staticClass: "container jb-container m-auto"}, [n("div", {staticClass: "row align-items-center"}, [n("div", {
                    staticClass: "col-auto pr-1 position-relative search-main__lat-input",
                    class: {"error-msg": t.$v.locationInput.$error}
                }, [n("form-element-cinput-searchsingle", {
                    staticClass: "location-input position-relative",
                    attrs: {
                        "select-value": t.$v.locationInput.$model,
                        "select-options": t.locationTags.concat(t.locationOptions),
                        "select-is-loading": !1,
                        "select-placeholder": "居住地址、地標",
                        "open-delete-handl": !0,
                        "icon-option": {
                            iconDefault: "jb_icon_history",
                            iconFirst: "jb_icon_address",
                            iconSecond: "jb_icon_location",
                            iconThird: "jb_icon_location",
                            iconForth: "jb_icon_location"
                        },
                        "drop-down-gtm": {name: "gtm-param", value: "地址輸入欄"},
                        "input-max-length": 50,
                        "input-truncate": !0,
                        "is-focus-select-text": !0,
                        "not-update-select-value-text": ["找捷運附近", "找學校附近"],
                        "complete-show-on-focus": ""
                    },
                    on: {
                        "update:selectValue": function (e) {
                            return t.$set(t.$v.locationInput, "$model", e)
                        },
                        "update:select-value": function (e) {
                            return t.$set(t.$v.locationInput, "$model", e)
                        },
                        focus: t.resetMarker,
                        selectSearchBlur: function (e) {
                            return t.$v.locationInput.$touch()
                        },
                        inputDelete: t.resetMarker,
                        autoCompleteMenuClick: t.autoCompleteMenuClick,
                        inputEnter: t.searchJobs
                    }
                }), t.$v.locationInput.$error ? n("span", {
                    staticClass: "position-absolute search-main__lat-input__error-msg",
                    domProps: {textContent: t._s("請填寫")}
                }) : t._e()], 1), n("div", {staticClass: "col pr-1"}, [n("div", {staticClass: "bg-gray-score rounded position-relative"}, [n("form-element-cinput-searchsingle", {
                    ref: "keywordInput",
                    staticClass: "form-control position-relative location-input border-0 bg-gray-score p-0",
                    class: {"search-main__keyword-text": !t.isKeywordFocus},
                    attrs: {
                        "select-value": t.keywordInput,
                        "select-options": t.keywordOptions,
                        "select-is-loading": t.keywordLoading,
                        "select-placeholder": "關鍵字(職稱/公司/技能...)",
                        "drop-down-gtm": {name: "gtm-param", value: "關鍵字輸入欄"},
                        "input-max-length": 50
                    },
                    on: {
                        "update:selectValue": function (e) {
                            t.keywordInput = e
                        },
                        "update:select-value": function (e) {
                            t.keywordInput = e
                        },
                        selectSearchChange: t.getKeywords,
                        autoCompleteMenuClick: t.autoCompleteMenuClick,
                        blur: t.keywordsBlur,
                        inputEnter: t.searchJobs
                    }
                }), t.isKeywordFocus ? t._e() : n("div", {staticClass: "position-absolute d-flex justify-content-end search-main__keyword w-100"}, [n("div", {
                    staticClass: "col-7 text-truncate",
                    class: {"text-gray-dark": !t.keywordInput.text},
                    domProps: {textContent: t._s(t.keywordInput.text ? t.keywordInput.text : "關鍵字(職稱/公司/技能...)")},
                    on: {click: t.keywordInputFocus}
                }), n("category-picker-opener-main", {
                    staticClass: "pl-3 input-right col-5",
                    class: {"text-gray-deep-dark": !t.isJobCatEmpty},
                    attrs: {"category-text": t.jobCatText, "data-gtm-param": "職務類別"},
                    nativeOn: {
                        click: function (e) {
                            return t.openCategoryTool("JobCat")
                        }
                    }
                })], 1)], 1)]), n("div", {staticClass: "col flex-grow-0 search-main__btn"}, [n("button", {
                    staticClass: "btn btn-secondary btn-xl",
                    attrs: {"data-gtm-search": "主搜尋列-找工作"},
                    domProps: {textContent: t._s("找工作")},
                    on: {click: t.searchJobs}
                })])])])])])
            }, u = [],
            p = (n("99af"), n("4de4"), n("a15b"), n("d81d"), n("fb6a"), n("b680"), n("b64b"), n("ac1f"), n("1276"), n("498a"), n("96cf"), n("1da1")),
// TODO: 下拉選單
            m = n("2909"), d = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("dropdown", {
                    ref: "dropdown",
                    attrs: {
                        "list-show": t.autoCompleteShow && t.isActive,
                        "is-loading": t.selectIsLoading && t.isActive,
                        options: t.selectOptions,
                        "select-type": "search-single",
                        "drop-down-gtm": t.dropDownGtm,
                        "slot-more-option-has-data": t.slotMoreOptionHasData
                    },
                    on: {select: t.autoCompleteMenuClick},
                    scopedSlots: t._u([{
                        key: "commonOption", fn: function (e) {
                            return [n("span", t._b({
                                staticClass: "multiselect__option text-truncate d-flex align-items-center",
                                class: {"pr-5": t.iconOption.iconDefault},
                                domProps: {innerHTML: t._s(e.option.text)},
                                on: {
                                    click: function (n) {
                                        return t.autoCompleteMenuClick(e.option)
                                    }
                                }
                            }, "span", e.option.gtm, !1)), t.iconOption.iconDefault ? n("i", {
                                staticClass: "text-gray-darker t3 position-absolute multiselect__icon",
                                class: [0 === e.index ? t.iconOption.iconFirst : "", 1 === e.index ? t.iconOption.iconSecond : "", 2 === e.index ? t.iconOption.iconThird : "", 3 === e.index ? t.iconOption.iconForth : "", 0 !== e.index && 1 !== e.index ? t.iconOption.iconDefault : ""]
                            }) : t._e()]
                        }
                    }])
                }, [n("template", {slot: "inputSpace"}, [n("input", t._b({
                    ref: "input",
                    staticClass: "form-control multiselect py-3",
                    class: {
                        placeholderFont: t.isEmptySelectValue,
                        "multiselect--active": t.isActive,
                        "text-truncate": t.inputTruncate,
                        "pr-7": t.openDeleteHandl
                    },
                    attrs: {placeholder: t.selectPlaceholder, maxlength: t.inputMaxLength, enterkeyhint: "search"},
                    domProps: {value: t.selectValue.text},
                    on: {
                        focus: t.inputSearchFocus,
                        blur: t.inputSearchBlur,
                        input: t.inputSearchTyping,
                        keydown: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.stopPropagation(), e.preventDefault(), t.inputEnter(e))
                        }
                    }
                }, "input", t.inputGtm, !1)), t.openDeleteHandl && !t.isEmpty(t.selectValue.text) ? n("i", {
                    staticClass: "jb_icon_delete position-absolute t3 text-gray-darker",
                    on: {
                        mousedown: function (e) {
                            return e.stopPropagation(), e.preventDefault(), t.deleteInput(e)
                        }
                    }
                }) : t.showSearchIcon ? n("i", {
                    staticClass: "jb_icon_search position-absolute t3 text-gray-darker",
                    on: {
                        mousedown: function (e) {
                            return e.stopPropagation(), e.preventDefault(), t.inputEnter(e)
                        }
                    }
                }) : t._e()]), n("template", {slot: "customSpace"}, [t._t("customSpace")], 2), n("template", {slot: "moreOption"}, [t._t("moreOption")], 2)], 2)
            }, h = [], b = (n("c975"), n("5397")), f = n("13ea"), g = n.n(f), y = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", t._b({
                    staticClass: "form-element-tag-region",
                    class: {"form-element-tag-region__highlight": t.listShow && (t.isSelectType || t.isSelectMultipleType) && t.highLight},
                    on: {keydown: t.onKeyUp}
                }, "div", t.rootGtm, !1), [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.listShow && t.isLoading,
                        expression: "listShow && isLoading"
                    }], staticClass: "multiselect__spinner"
                }), t._t("inputSpace"), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.listShow,
                        expression: "listShow"
                    }]
                }, [t._t("customSpace")], 2), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.listShow && (t.options.length > 0 || t.slotMoreOptionHasData),
                        expression: "listShow && (options.length > 0 || slotMoreOptionHasData)"
                    }], ref: "lister", class: t.listClass
                }, [t.maxAlertShow && t.maxHintStyle ? n("div", {staticClass: "multiselect__hint position-sticky"}, [n("p", {staticClass: "multiselect__hint__text position-absolute rounded py-2 px-4"}, [t._v(" " + t._s(t.maxAlertText) + " ")])]) : t._e(), t.isMenuShow ? n("ul", {
                    staticClass: "multiselect__content w-100",
                    on: {
                        mousedown: function (t) {
                            t.preventDefault()
                        }
                    }
                }, [t._l(t.options, (function (e, o) {
                    return n("li", {
                        key: o,
                        staticClass: "multiselect__element position-relative",
                        class: {"border-bottom": e.underlined},
                        on: {
                            mouseover: function (e) {
                                return t.onHover(o)
                            }
                        }
                    }, [t.isSelectMultipleType ? n("span", t._b(t._b({
                        staticClass: "multiselect__option d-flex align-items-center",
                        class: {"multiselect__option--hover": t.orderHover == o},
                        style: {fontSize: !!t.fontSizeIsSmaller && "14px"},
                        on: {
                            click: function (n) {
                                return t.autoCompleteMenuClick(e)
                            }
                        }
                    }, "span", t._d({}, [t.gtm, e.gtm])), "span", Object.assign({}, t.optionGTM(e)), !1), [n("form-element-checkbox", [n("input", {
                        ref: "checkboxEl",
                        refInFor: !0,
                        attrs: {type: "checkbox"},
                        domProps: {
                            checked: t.find(t.multiValue, (function (t) {
                                return t.value === e.value
                            }))
                        },
                        on: {
                            change: t.change, click: function (n) {
                                return t.autoCompleteMenuClick(e)
                            }
                        }
                    }), n("span", [t._v(t._s(e.text))])])], 1) : t._t("commonOption", [n("span", t._b({
                        staticClass: "multiselect__option d-flex align-items-center",
                        class: {"multiselect__option--hover": t.orderHover == o},
                        style: {fontSize: !!t.fontSizeIsSmaller && "14px"},
                        attrs: {"data-nosnippet": ""},
                        domProps: {innerHTML: t._s(t.highlightText(e.text))},
                        on: {
                            click: function (n) {
                                return t.autoCompleteMenuClick(e)
                            }, keydown: function (n) {
                                return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : t.autoCompleteMenuClick(e)
                            }
                        }
                    }, "span", Object.assign({}, t.optionGTM(e)), !1))], {
                        option: e,
                        index: o,
                        orderHover: t.orderHover
                    })], 2)
                })), t._t("moreOption")], 2) : t._e(), t.maxAlertShow && !t.maxHintStyle ? n("ul", {staticClass: "multiselect__content"}, [n("li", {staticClass: "multiselect__element"}, [n("span", {staticClass: "multiselect__option d-flex align-items-center"}, [n("span", [t._v(t._s(t.maxAlertText))])])])]) : t._e()]), t.listShow && t.noOptionsTips && 0 === t.options.length ? n("div", {class: t.listClass}, [n("ul", {staticClass: "multiselect__content"}, [n("li", {staticClass: "multiselect__element"}, [n("span", {staticClass: "multiselect__option d-flex align-items-center"}, [n("span", [t._v(t._s(t.noOptionsTips))])])])])]) : t._e()], 2)
            }, _ = [], T = n("2769"), S = n.n(T), P = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("label", {staticClass: "form-element-checkbox"}, [t._t("default"), t._m(0)], 2)
            }, C = [function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("span", {staticClass: "checkbox"}, [n("span", {staticClass: "check-container"})])
            }], O = {
                name: "FormElementCheckBox", props: {}, computed: {}, mounted: function () {
                }
            }, v = O, j = (n("8f2a"), n("2877")), w = Object(j["a"])(v, P, C, !1, null, "7e567922", null), L = w.exports,
            R = {
                name: "Dropdown",
                components: {FormElementCheckbox: L},
                props: {
                    highLight: b["a"].bool.def(!0),
                    positionRelative: b["a"].bool.def(!1),
                    listShow: b["a"].bool.def(!1),
                    isLoading: b["a"].bool.def(!1),
                    options: b["a"].array.def([]),
                    selectType: b["a"].string.def("single"),
                    max: b["a"].number.def(100),
                    multiValue: b["a"].any.def([]),
                    dropDownGtm: b["a"].shape({name: b["a"].string, value: b["a"].string}),
                    fontSizeIsSmaller: b["a"].bool.def(!1),
                    gtm: b["a"].string.def(""),
                    menuAlwaysShow: b["a"].bool.def(!1),
                    maxTipText: b["a"].string.def(""),
                    maxAlertNoShow: b["a"].bool.def(!1),
                    maxHintStyle: b["a"].bool.def(!1),
                    noOptionsTips: b["a"].string.def(""),
                    slotMoreOptionHasData: b["a"].bool.def(!1)
                },
                data: function () {
                    return {orderHover: 0, checkedPass: !0}
                },
                computed: {
                    isMenuShow: function () {
                        return this.multiValue.length < this.max || this.menuAlwaysShow
                    }, isSelectType: function () {
                        return "select" == this.selectType
                    }, isSelectMultipleType: function () {
                        return "select-multiple" == this.selectType
                    }, rootGtm: function () {
                        return this.dropDownGtm ? Object(l["a"])({}, "data-".concat(this.dropDownGtm.name), this.dropDownGtm.value) : ""
                    }, maxAlertText: function () {
                        return this.maxTipText ? this.maxTipText : "最多 ".concat(this.max, " 項")
                    }, maxAlertShow: function () {
                        return !this.maxAlertNoShow && this.isSelectMultipleType && this.multiValue.length >= this.max
                    }, listClass: function () {
                        return {
                            "high-light": this.highLight,
                            "position-relative": this.positionRelative,
                            "multiselect__content-wrapper": !0
                        }
                    }
                },
                watch: {
                    options: function () {
                        this.orderHover = -1
                    }
                },
                mounted: function () {
                },
                methods: {
                    change: function (t) {
                        var e = t.target.checked;
                        e && !this.checkedPass && (t.target.checked = !1)
                    }, autoCompleteMenuClick: function (t) {
                        this.checkedPass = this.multiValue.length < this.max, this.$emit("select", t)
                    }, highlightText: function (t) {
                        return t
                    }, onKeyUp: function (t) {
                        if (this.listShow) switch (t.key) {
                            case"ArrowUp":
                                t.preventDefault(), this.orderHover > 0 && (this.orderHover = this.orderHover - 1, this.detectScroller());
                                break;
                            case"ArrowDown":
                                t.preventDefault(), this.orderHover < this.options.length - 1 && (this.orderHover = this.orderHover + 1, this.detectScroller());
                                break;
                            case"Enter":
                                if (!this.isMenuShow) return;
                                if (this.orderHover < 0) return;
                                this.$emit("select", this.options[this.orderHover]), this.orderHoverStatus(!1), this.orderHover = -1;
                                break;
                            case"Escape":
                                this.$emit("select", null), this.orderHoverStatus(!1), this.orderHover = -1;
                                break;
                            default:
                                break
                        }
                    }, orderHoverStatus: function (t) {
                        this.$emit("orderHoverStatus", t)
                    }, onHover: function (t) {
                        this.orderHover = t
                    }, detectScroller: function () {
                        this.orderHoverStatus(!0);
                        var t = Math.floor(this.orderHover / 7);
                        this.$refs.lister.scrollTop = this.$refs.lister.clientHeight * t
                    }, find: S.a, optionGTM: function (t) {
                        return "string" === typeof t.gtm ? {} : t.gtm
                    }
                }
            }, I = R, x = (n("399b"), Object(j["a"])(I, y, _, !1, null, "2854ddb5", null)), k = x.exports, E = {
                name: "SearchTags",
                components: {Dropdown: k},
                props: {
                    selectValue: b["a"].any.def({}),
                    selectOptions: b["a"].array.def([]),
                    selectPlaceholder: b["a"].string.def(""),
                    selectIsLoading: b["a"].bool.def(!1),
                    openDeleteHandl: b["a"].bool.def(!1),
                    showSearchIcon: b["a"].bool.def(!1),
                    iconOption: b["a"].shape({
                        iconDefault: b["a"].string.def(""),
                        iconFirst: b["a"].string.def(""),
                        iconSecond: b["a"].string.def(""),
                        iconThird: b["a"].string.def(""),
                        iconForth: b["a"].string.def("")
                    }).def({iconDefault: "", iconFirst: "", iconSecond: "", iconThird: "", iconForth: ""}),
                    completeShowOnFocus: b["a"].bool.def(!1),
                    dropDownGtm: b["a"].shape({name: b["a"].string, value: b["a"].string}),
                    inputGtm: b["a"].object.def({}),
                    inputMaxLength: b["a"].number.def(200),
                    inputTruncate: b["a"].bool.def(!1),
                    isFocusSelectText: b["a"].bool.def(!1),
                    notUpdateSelectValueText: b["a"].array.def([]),
                    slotMoreOptionHasData: b["a"].bool.def(!1)
                },
                data: function () {
                    return {autoCompleteShow: !1, isActive: !1, checkKeyIn: !1, isEmpty: g.a}
                },
                computed: {
                    isEmptySelectValue: function () {
                        return g()(this.selectValue) || "" == this.selectValue.text
                    }
                },
                updated: function () {
                    this.$emit("setDropdownPosition", this.$refs.dropdown, this.$refs.input)
                },
                mounted: function () {
                },
                methods: {
                    getRealText: function (t) {
                        return t.trim().length > 0 ? t : ""
                    }, inputSearchTyping: function (t) {
                        var e = this.getRealText(t.target.value);
                        "" !== e ? (this.autoCompleteShow = !0, this.$emit("selectSearchChange", e), this.$emit("update:selectValue", {text: e})) : (this.$emit("update:selectValue", {text: ""}), this.$emit("selectSearchChange", ""), this.autoCompleteShow = this.completeShowOnFocus)
                    }, inputSearchFocus: function (t) {
                        this.isFocusSelectText && this.$refs.input.select(), this.isActive = !0, this.autoCompleteShow = !!this.completeShowOnFocus || "" != t.target.value;
                        var e = this.getRealText(t.target.value);
                        this.$emit("focus", e)
                    }, deleteInput: function () {
                        this.$emit("update:selectValue", {text: ""}), this.$emit("inputDelete")
                    }, inputSearchBlur: function () {
                        var t = this;
                        this.isEmptySelectValue && this.$emit("update:selectValue", {text: ""}), this.$emit("blur"), setTimeout((function () {
                            t.autoCompleteShow = !1, t.isActive = !1, t.$emit("selectSearchBlur")
                        }), 0)
                    }, autoCompleteMenuClick: function (t) {
                        var e = this;
                        this.$emit("click", t), t && (-1 == this.notUpdateSelectValueText.indexOf(t.text) && this.$emit("update:selectValue", t), this.$emit("autoCompleteMenuClick", t), this.autoCompleteShow = !1, setTimeout((function () {
                            e.$refs.input.blur()
                        }), 0))
                    }, inputEnter: function (t) {
                        229 !== t.keyCode && (this.$emit("inputEnter"), this.autoCompleteShow = !1)
                    }
                }
            }, A = E, U = (n("a1e5"), Object(j["a"])(A, d, h, !1, null, "01fa4a57", null)), D = U.exports, M = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "popup-mobile position-fixed h-100 w-100 bg-gray-score d-flex flex-column"}, [n("div", {staticClass: "popup-mobile__header position-relative bg-white"}, [n("div", {staticClass: "popup-mobile__header-title p-3 text-center t4 font-weight-bold"}, [t._v(" " + t._s(t.title) + " "), n("i", {
                    staticClass: "jb_icon_delete position-absolute t1 mx-4 my-2 text-gray-darker",
                    on: {click: t.close}
                })]), n("div", {staticClass: "popup-mobile__header-input p-3"}, [n("div", {staticClass: "popup-mobile__header-input-wrapper position-relative d-flex bg-gray-score rounded"}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.popupInputVal,
                        expression: "popupInputVal",
                        modifiers: {trim: !0}
                    }],
                    ref: "popup-mobile-input",
                    staticClass: "form-control border-0 flex-grow-1 bg-gray-score position-relative",
                    attrs: {type: "text", placeholder: "居住地址或地標", maxLength: "50"},
                    domProps: {value: t.popupInputVal},
                    on: {
                        keydown: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.inputEnter(e)
                        }, blur: [function (e) {
                            return t.$emit("inputBlur")
                        }, function (e) {
                            return t.$forceUpdate()
                        }], input: function (e) {
                            e.target.composing || (t.popupInputVal = e.target.value.trim())
                        }
                    }
                }), n("span", {staticClass: "d-flex align-items-center flex-row-reverse h2 pr-2"}, [n("i", {
                    staticClass: "jb_icon_search text-gray-dark",
                    on: {click: t.inputEnter}
                }), n("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.popupInputVal,
                        expression: "popupInputVal"
                    }], staticClass: "jb_icon_delete mr-3 text-gray-dark", on: {click: t.inputDelete}
                })])]), t.popupInputVal ? t._e() : n("span", {staticClass: "position-absolute"}, [t._v(" 請填寫 ")])])]), n("div", {staticClass: "popup-mobile__content"}, [t.tagOption.length > 0 ? n("div", {staticClass: "search-main__mobile-tags px-4 pt-2"}, t._l(t.tagOption, (function (e, o) {
                    return n("border-button", t._b({
                        key: o,
                        staticClass: "mt-2 search-main__mobile-tags__tag",
                        attrs: {text: e.text, size: "middle", "data-nosnippet": ""},
                        nativeOn: {
                            click: function (n) {
                                return t.selectTagUpdate(e)
                            }
                        }
                    }, "border-button", e.gtm, !1))
                })), 1) : t._e(), n("ul", {staticClass: "search-main__mobile-list list-group"}, t._l(t.selectOption, (function (e, o) {
                    return n("li", {
                        key: o,
                        staticClass: "p-4",
                        domProps: {textContent: t._s(e.text)},
                        on: {
                            click: function (n) {
                                return t.selectOptionUpdate(e)
                            }
                        }
                    })
                })), 0)])])
            }, N = [], B = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("span", {
                    staticClass: "border-button mr-3 mb-3 text-truncate px-2 text-blue-lake d-inline-block text-center",
                    class: [{"bg-blue-lake text-white": t.active}, "small" === t.size ? "t4" : t.fontSize, t.size]
                }, [t._v(" " + t._s(t.text) + " ")])
            }, $ = [], V = {
                name: "BorderButton",
                props: {
                    size: b["a"].oneOf(["large", "small", "middle", "auto"]).def("small"),
                    active: b["a"].bool.def(!1),
                    text: b["a"].string.def(""),
                    fontSize: b["a"].oneOf(["t4", "t5"]).def("t5")
                },
                mounted: function () {
                }
            }, q = V, G = (n("1e22"), Object(j["a"])(q, B, $, !1, null, "659d1515", null)), F = G.exports;
        n("4160"), n("5319"), n("159b");

        function H(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return e ? n.replace(/"/g, "&quot;").replace(/'/g, "&#039;") : n
        }

        function J(t) {
            return t.replace(/(\\r\\n|\\n)/g, "<br>").replace(/(\\r\\n|\\n)/g, "<br />")
        }

        function K(t) {
            return /[\\!():^[\]{}~?%*><'"]/.test(t)
        }

        var Q = {
                name: "PopupMobileFullInput",
                components: {BorderButton: F},
                props: {
                    title: b["a"].string.def(""),
                    selectOption: b["a"].array.def([]),
                    tagOption: b["a"].array.def([]),
                    inputData: b["a"].shape({text: b["a"].string.def("")}),
                    notUpdateInputDataText: b["a"].array.def([])
                },
                data: function () {
                    return {popupInputVal: ""}
                },
                mounted: function () {
                    this.popupInputVal = this.inputData.text, this.$refs["popup-mobile-input"].focus()
                },
                methods: {
                    close: function () {
                        this.$emit("close")
                    }, inputEnter: function (t) {
                        if (229 !== t.keyCode && this.popupInputVal) {
                            if (K(this.popupInputVal)) return alert('請勿輸入以下特殊符號\\’<>!():^[]{}~?%*"');
                            this.$emit("update:inputData", {text: this.popupInputVal}), this.$emit("inputEnter"), this.close()
                        }
                    }, inputDelete: function () {
                        this.popupInputVal = ""
                    }, selectOptionUpdate: function (t) {
                        this.close(), -1 == this.notUpdateInputDataText.indexOf(t.text) && this.$emit("update:inputData", t), this.$emit("inputSelect", t)
                    }, selectTagUpdate: function (t) {
                        this.close(), -1 == this.notUpdateInputDataText.indexOf(t.text) && this.$emit("update:inputData", t), this.$emit("tagSelect", t)
                    }
                }
            }, Y = Q, z = (n("6803"), Object(j["a"])(Y, M, N, !1, null, "3c3f0e26", null)), Z = z.exports, X = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "category-picker-opener-main text-truncate t3 position-relative pr-7 text-gray-dark"}, [t._v(" " + t._s(t.categoryText) + " "), n("i", {staticClass: "jb_icon_right position-absolute"})])
            }, W = [], tt = {name: "CategoryPickerOpenerMain", props: {categoryText: b["a"].string.def("")}}, et = tt,
            nt = (n("696d"), Object(j["a"])(et, X, W, !1, null, "77d27d11", null)), ot = nt.exports, at = n("b0a5"),
            it = n("bc55"), st = n("2f62"), rt = n("b047"), lt = n.n(rt), ct = (n("0644"), "getMeaningfulQuery"),
            ut = "updateQuery", pt = {GET_MEANINGFUL_QUERY: ct, UPDATE_QUERY: ut}, mt = "getMeaningfulQuery",
            dt = "getMobileSubFilterMoreQuery", ht = "getMobileSubFilterQuery", bt = "getSubFilterStatus",
            ft = "getMobileSubFilterMoreStatus", gt = "updateQuery", yt = "updateEnabledTab", _t = "clearSubFilter",
            Tt = "clearMobileSubFilterMore", St = {
                GET_MEANINGFUL_QUERY: mt,
                GET_MOBILE_SUB_FILTER_MORE_QUERY: dt,
                GET_MOBILE_SUB_FILTER_QUERY: ht,
                GET_SUB_FILTER_STATUS: bt,
                GET_MOBILE_SUB_FILTER_MORE_STATUS: ft,
                UPDATE_QUERY: gt,
                UPDATE_ENABLED_TAB: yt,
                CLEAR_SUB_FILTER: _t,
                CLEAR_MOBILE_SUB_FILTER_MORE: Tt
            }, Pt = n("b5ae"), Ct = (n("13d5"), function () {
                return Boolean(window.categoryPicker && !g()(window.categoryPicker))
            }), Ot = function () {
                alert("喔～喔～系統目前發生了小狀況，無法正常提供資訊，請稍後再試！")
            }, vt = {
                open: function (t) {
                    Ct() ? window.categoryPicker.open(t) : Ot()
                }, close: function () {
                    Ct() ? window.categoryPicker.close() : Ot()
                }
            }, jt = n("d4ec"), wt = function t(e, n) {
                Object(jt["a"])(this, t), Object(l["a"])(this, "event", void 0), Object(l["a"])(this, "param", void 0), this.event = e, this.param = n
            }, Lt = "time4jobs-event", Rt = {SUBMIT_MAIN: "submit-main"}, It = n("634a"), xt = n("aa90"), kt = n("7b46"),
            Et = {
                methods: {
                    isMobile: function () {
                        return !Object(xt["mq"])("(min-width: ".concat(It["md"], ")"))
                    }, browserDetect: function () {
                        return Object(kt["a"])()
                    }
                }
            };

        function At(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ut(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? At(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Dt, Mt, Nt = function (t) {
                return !!t.text
            }, Bt = {
                name: "SearchMain",
                components: {FormElementCinputSearchsingle: D, PopupMobileFullInput: Z, CategoryPickerOpenerMain: ot},
                mixins: [Et],
                data: function () {
                    return {
                        keywordOptions: [],
                        popupMobileInputOpen: !1,
                        keywordLoading: !1,
                        userPosition: {lat: 0, lon: 0},
                        isKeywordFocus: !1,
                        browser: this.browserDetect(),
                        isClickTag: {mrt: !1, school: !1}
                    }
                },
                validations: {locationInput: {required: Pt["required"], customValidator: Nt}},
                computed: Ut({
                    locationInputIsCoordinate: function () {
                        var t = this.locationInput.text.split(",");
                        return 2 === t.length && t.filter((function (t) {
                            return !isNaN(t.trim())
                        }))
                    }, locationOptions: function () {
                        var t = {"data-gtm-param": "地址輸入欄預設選項"};
                        return Object(m["a"])(this.centerHistory).map((function (e) {
                            return Ut({gtm: t}, e)
                        }))
                    }, locationTags: function () {
                        var t = {"data-gtm-param": "地址輸入欄預設選項"},
                            e = this.$root.isMobile() ? [{text: "目前所在位置"}, {text: "找捷運附近"}, {text: "找學校附近"}] : [{text: "目前所在位置"}, {text: "在地圖上點選"}, {text: "找捷運附近"}, {text: "找學校附近"}];
                        return [].concat(e).map((function (e) {
                            return Ut({gtm: t}, e)
                        }))
                    }
                }, Object(st["f"])("isoline", {
                    centerHistory: function (t) {
                        return t.centerHistory.slice(1, 4).map((function (t) {
                            return {text: t.address}
                        }))
                    }
                }), {}, Object(st["f"])("api", {
                    _staApiKeywordSuggestMain: function (t) {
                        return t.keywordSuggestMain.data
                    }
                }), {
                    locationInput: {
                        get: function () {
                            return {text: this.$store.state.searchmain.locationInput}
                        }, set: function (t) {
                            var e = t.text ? t.text : "";
                            this.setLocationInput(e), this.cSearchUpdateQuery({
                                inputCategoryId: "",
                                isLookingAround: "",
                                dist: this.timeToDist
                            })
                        }
                    }, keywordInput: {
                        get: function () {
                            return {text: this.$store.state.searchmain.keywordInput}
                        }, set: function (t) {
                            this.setKeywordInput(t.text ? t.text : "")
                        }
                    }, calcUserPosition: {
                        get: function () {
                            return this.userPosition.lat || this.userPosition.lon ? this.userPosition : {
                                lat: 1 * this.isolineQueries.tLat,
                                lon: 1 * this.isolineQueries.tLon
                            }
                        }, set: function (t) {
                            this.userPosition = t
                        }
                    }, timeToDist: function () {
                        var t = [1.5, .25, .75, 2, .875],
                            e = parseInt(this.isolineQueries.time) / 5 * t[parseInt(this.isolineQueries.transType) - 1];
                        return e
                    }, areaSchBlacklist: function () {
                        return Object.keys(this._getAreaSch).filter((function (t) {
                            return /^[0-9]{4}00[1-9]000$/.test(t)
                        })).join(",")
                    }
                }, Object(st["f"])("marker", {
                    currentMarker: function (t) {
                        return t.currentMarker
                    }, tempMarker: function (t) {
                        return t.tempMarker
                    }
                }), {}, Object(st["f"])("cSearch", {
                    searchQueries: function (t) {
                        return t.query
                    }
                }), {}, Object(st["f"])("cIsoline", {
                    isolineQueries: function (t) {
                        return t.query
                    }
                }), {}, Object(st["f"])("searchmain", ["categorySelectedItems"]), {}, Object(st["d"])("searchmain", ["isJobCatEmpty", "jobCatText", "categoryItems"]), {}, Object(st["d"])("marker", ["isTempMarkerOnMap"]), {}, Object(st["d"])("api", {_getAreaSch: "catelogAreaSch/dataToObj"})),
                mounted: function () {
                    var t = this;
                    this.$nextTick().then((function () {
                        t.isolineQueries.address ? t.setLocationInput(t.isolineQueries.address) : t.isolineQueries.tLat && t.isolineQueries.tLon && t.setLocationInput("上次查詢位置"), t.searchQueries.keyword && t.setKeywordInput(t.searchQueries.keyword)
                    }))
                },
                methods: Ut({
                    keywordInputFocus: function () {
                        this.$refs.keywordInput.$refs.input.focus(), this.isKeywordFocus = !0
                    }, keywordsBlur: function () {
                        this.isKeywordFocus = !1
                    }, getKeywords: lt()((function (t) {
                        var e = this;
                        if (t) {
                            this.keywordLoading = !0;
                            var n = {"data-gtm-param": "關鍵字輸入欄AC"};
                            this._actGetKeywordSuggestMain(t).then((function (t) {
                                e.keywordOptions = e._staApiKeywordSuggestMain.suggestions.map((function (t) {
                                    return {gtm: n, text: t.value}
                                })), e.keywordLoading = !1
                            }))
                        } else this.keywordOptions = []
                    }), 300), searchJobs: function () {
                        if (this.$v.locationInput.$touch(), !this.$v.locationInput.$error) return K(this.locationInput.text) ? alert('請勿輸入以下特殊符號\\’<>!():^[]{}~?%*"') : this.currentMarker.lat && !this.currentMarker.lon || "在地圖上點選" === this.locationInput.text ? alert("請先在地圖上點選出發位置") : void ("找捷運附近" === this.locationInput.text || this.isClickTag.mrt ? this.openCategoryTool("Mrt", !0) : "找學校附近" === this.locationInput.text || this.isClickTag.school ? this.openCategoryTool("AreaSch", !0) : ("目前所在位置" === this.locationInput.text || "上次查詢位置" === this.locationInput.text ? this.isolineUpdateQuery({
                            address: "",
                            tLat: this.calcUserPosition.lat,
                            tLon: this.calcUserPosition.lon,
                            rsm: ""
                        }) : this.searchQueries.inputCategoryId ? this.isolineUpdateQuery({
                            address: this.locationInput.text,
                            tLat: this.currentMarker.lat,
                            tLon: this.currentMarker.lon,
                            rsm: ""
                        }) : this.locationInputIsCoordinate ? this.isolineUpdateQuery({
                            address: "",
                            tLat: this.locationInput.text.split(",")[0].trim(),
                            tLon: this.locationInput.text.split(",")[1].trim(),
                            rsm: ""
                        }) : (this.isolineUpdateQuery({
                            address: this.locationInput.text,
                            tLat: "",
                            tLon: "",
                            rsm: ""
                        }), this.cSearchUpdateQuery({
                            inputCategoryId: "",
                            isLookingAround: "",
                            dist: this.timeToDist
                        })), this.cSearchUpdateQuery({
                            keyword: encodeURIComponent(this.keywordInput.text),
                            dist: this.timeToDist
                        }), this.$emit(Lt, new wt(Rt.SUBMIT_MAIN))))
                    }, close: function () {
                        this.popupMobileInputOpen = !this.popupMobileInputOpen
                    }, openCategoryTool: function () {
                        var t = Object(p["a"])(regeneratorRuntime.mark((function t(e) {
                            var n, o = this, a = arguments;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = a.length > 1 && void 0 !== a[1] && a[1], t.t0 = e, t.next = "Mrt" === t.t0 ? 4 : "AreaSch" === t.t0 ? 6 : 10;
                                        break;
                                    case 4:
                                        return vt.open({
                                            dataSource: e,
                                            theme: "customer-theme",
                                            recommendation: !1,
                                            maxSelectedNumber: 1,
                                            searchLevel: 1,
                                            unselectableList: "[0-9]{8}000",
                                            onSubmit: function (t) {
                                                var e = t.selectedItems[0];
                                                o.setLocationInput("".concat(e.des, "捷運")), n ? (o.isolineUpdateQuery({
                                                    address: o.locationInput.text,
                                                    tLat: at[e.no].lat,
                                                    tLon: at[e.no].lon,
                                                    rsm: ""
                                                }), o.cSearchUpdateQuery({
                                                    inputCategoryId: at[e.no].opendata_id,
                                                    isLookingAround: "",
                                                    dist: o.timeToDist
                                                }), o.$emit(Lt, new wt(Rt.SUBMIT_MAIN))) : (o.setMarkerPosition({
                                                    type: "temp",
                                                    position: o.currentMarker
                                                }), o.setMarkerPosition({
                                                    type: "current",
                                                    position: {lat: at[e.no].lat, lon: at[e.no].lon}
                                                }), o.cSearchUpdateQuery({
                                                    inputCategoryId: at[e.no].opendata_id,
                                                    isLookingAround: "",
                                                    dist: o.timeToDist
                                                })), o.isClickTag.mrt = !1
                                            },
                                            onClose: function (t) {
                                                o.isClickTag.mrt = !1
                                            }
                                        }), t.abrupt("break", 12);
                                    case 6:
                                        return t.next = 8, this._actGetApiCatelogAreaSch();
                                    case 8:
                                        return vt.open({
                                            dataSource: e,
                                            theme: "customer-theme",
                                            title: "學校列表",
                                            recommendation: !1,
                                            maxSelectedNumber: 1,
                                            blacklist: this.areaSchBlacklist,
                                            unselectableList: "6[0-9]{9}",
                                            searchable: !0,
                                            searchLevel: 1,
                                            onSubmit: function (t) {
                                                var e = t.selectedItems[0];
                                                o.setLocationInput(e.des), n ? (o.isolineUpdateQuery({
                                                    address: o.locationInput.text,
                                                    tLat: it[e.no].lat,
                                                    tLon: it[e.no].lon,
                                                    rsm: ""
                                                }), o.cSearchUpdateQuery({
                                                    inputCategoryId: e.no,
                                                    isLookingAround: "",
                                                    dist: o.timeToDist
                                                }), o.$emit(Lt, new wt(Rt.SUBMIT_MAIN))) : (o.setMarkerPosition({
                                                    type: "temp",
                                                    position: o.currentMarker
                                                }), o.setMarkerPosition({
                                                    type: "current",
                                                    position: {lat: it[e.no].lat, lon: it[e.no].lon}
                                                }), o.cSearchUpdateQuery({
                                                    inputCategoryId: e.no,
                                                    isLookingAround: "",
                                                    dist: o.timeToDist
                                                })), o.isClickTag.school = !1
                                            },
                                            onClose: function (t) {
                                                o.isClickTag.school = !1
                                            }
                                        }), t.abrupt("break", 12);
                                    case 10:
                                        return vt.open({
                                            dataSource: e,
                                            theme: "customer-theme",
                                            searchable: !0,
                                            maxSelectedNumber: 5,
                                            recommendByKeywords: "",
                                            backdropClose: !0,
                                            selectedItems: this.categoryItems,
                                            onSubmit: function (t) {
                                                o.setCategorySelectedItems(t.selectedItems), o.cSearchUpdateQuery({
                                                    jobcat: o.categorySelectedItems.jobCat.map((function (t) {
                                                        return t.no
                                                    })).join(","), dist: o.timeToDist
                                                }), n && o.searchJobs()
                                            }
                                        }), t.abrupt("break", 12);
                                    case 12:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e(e) {
                            return t.apply(this, arguments)
                        }

                        return e
                    }(), resetMarker: function () {
                        this.isTempMarkerOnMap && (this.setMarkerPosition({
                            type: "current",
                            position: this.tempMarker
                        }), this.setMarkerPosition({
                            type: "temp",
                            position: {lat: null, lon: null}
                        })), this.updateMapClickAble(!1), this.$v.locationInput.$touch()
                    }, autoCompleteMenuClick: function (t) {
                        var e = this;
                        this.keywordsBlur(), "目前所在位置" === t.text && navigator.geolocation ? (this.$CLoading.show(), navigator.geolocation.getCurrentPosition((function (t) {
                            e.calcUserPosition = {
                                lat: t.coords.latitude.toFixed(6),
                                lon: t.coords.longitude.toFixed(6)
                            }, !e.isTempMarkerOnMap && e.searchQueries.lat && e.searchQueries.lon && e.setMarkerPosition({
                                type: "temp",
                                position: e.currentMarker
                            }), e.setMarkerPosition({type: "current", position: e.userPosition}), e.$CLoading.hide()
                        }), (function (t) {
                            return e.$CLoading.hide(), t.code === t.PERMISSION_DENIED ? alert("請先允許網站取用你的裝置定位，或選擇其他定位方式") : alert("很抱歉，裝置定位發生錯誤，請先改以地址定位或於地圖上點選")
                        }))) : "在地圖上點選" === t.text ? (!this.isTempMarkerOnMap && this.searchQueries.lat && this.searchQueries.lon && (this.setMarkerPosition({
                            type: "temp",
                            position: this.currentMarker
                        }), this.setMarkerPosition({
                            type: "current",
                            position: {lat: null, lon: null}
                        })), this.updateMapClickAble(!0)) : "找捷運附近" === t.text ? (this.isClickTag.mrt = !0, this.openCategoryTool("Mrt")) : "找學校附近" === t.text && (this.isClickTag.school = !0, this.openCategoryTool("AreaSch"))
                    }, mobileTagSelect: function (t) {
                        var e = this;
                        "目前所在位置" === t.text ? (this.$CLoading.show(), navigator.geolocation.getCurrentPosition((function (t) {
                            e.calcUserPosition = {
                                lat: t.coords.latitude.toFixed(6),
                                lon: t.coords.longitude.toFixed(6)
                            }, e.searchJobs()
                        }), (function (t) {
                            return e.$CLoading.hide(), t.code === t.PERMISSION_DENIED ? alert("請先允許網站取用你的裝置定位，或選擇其他定位方式") : alert("很抱歉，裝置定位發生錯誤，請先改以地址定位或於地圖上點選")
                        }))) : "找捷運附近" === t.text ? (this.isClickTag.mrt = !0, this.searchJobs()) : "找學校附近" === t.text && (this.isClickTag.school = !0, this.searchJobs())
                    }, mobileInputSelect: function () {
                        this.searchJobs()
                    }, openPopupMobileInput: function () {
                        this.popupMobileInputOpen = !0
                    }
                }, Object(st["e"])("marker", ["setMarkerPosition"]), {}, Object(st["e"])("cIsoline", {isolineUpdateQuery: ut}), {}, Object(st["e"])("cSearch", {cSearchUpdateQuery: gt}), {}, Object(st["e"])("cSearch", [yt]), {}, Object(st["e"])("searchmain", ["setLocationInput", "setKeywordInput", "setCategorySelectedItems"]), {}, Object(st["e"])("ui", ["updateMapClickAble"]), {}, Object(st["c"])("api", {
                    _actGetKeywordSuggestMain: "keywordSuggestMain/get",
                    _actGetApiCatelogAreaSch: "catelogAreaSch/get"
                }))
            }, $t = Bt, Vt = (n("f0bb"), Object(j["a"])($t, c, u, !1, null, "7b66aea1", null)), qt = Vt.exports,
            Gt = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "bg-white m-0 search-sub position-relative"}, [n("div", {staticClass: "row mx-auto container jb-container p-0"}, [n("div", {staticClass: "col flex-grow-1"}, [n("ul", {staticClass: "search-tabs row mb-0 p-0 px-md-3"}, t._l(t.tabs, (function (e, o) {
                    return n("li", {
                        key: o,
                        staticClass: "col-4 col-md-auto search-tab p-3 pr-7 text-center",
                        class: {active: t.enabledTab === e, "d-md-block d-none": -1 === t.tabsForMobile.indexOf(e)},
                        on: {
                            click: [function (n) {
                                return t.onClickTab(e)
                            }, function (t) {
                                t.stopPropagation()
                            }]
                        }
                    }, [n("span", {
                        class: {"text-secondary font-weight-bold": t.tab[e] !== t.tabsText[e] && t.enabledTab !== e},
                        domProps: {textContent: t._s(t.tabsText[e])}
                    }), n("i", {staticClass: "jb_icon_down ml-1 text-gray-dark position-absolute"})])
                })), 0)]), n("div", {staticClass: "col-auto d-none d-md-flex"}, [n("ul", {staticClass: "tool-tabs row mb-0 p-0"}, t._l(t.tools, (function (e, o) {
                    return n("li", {
                        key: o,
                        staticClass: "col-auto tool-tab py-3 font-weight-bold",
                        class: {
                            "px-5 tool-tab__left": 0 === o,
                            "pl-5 pr-0": 1 === o,
                            "text-gray-dark": e <= 1 && !t.subFilterEnabled,
                            "text-gray-darker tool-tab--active": e <= 1 && t.subFilterEnabled || 2 === e
                        },
                        attrs: {"data-gtm-button": "" + t.enumData.tool[e]},
                        on: {
                            click: function (n) {
                                return t.onClickTool(e)
                            }
                        }
                    }, [2 === e ? [n("v-popover", {
                        attrs: {
                            open: !1,
                            placement: "top",
                            trigger: "hover"
                        }
                    }, [n("i", {staticClass: "jb_icon_sharing"}), t._v(" " + t._s(t.enumData.tool[e]) + " "), n("div", {
                        attrs: {slot: "popover"},
                        slot: "popover"
                    }, [t._v(" 點此複製網址 ")])])] : [n("i", {staticClass: "jb_icon_clear"}), t._v(" " + t._s(t.enumData.tool[e]) + " ")]], 2)
                })), 0)])])])
            }, Ft = [];
        n("7db0"), n("a9e3");
        (function (t) {
            t[t["更新日期"] = 0] = "更新日期", t[t["上班時段"] = 1] = "上班時段", t[t["薪資待遇"] = 2] = "薪資待遇", t[t["經歷要求"] = 3] = "經歷要求", t[t["公司相關"] = 4] = "公司相關", t[t["更多條件"] = 5] = "更多條件", t[t["排除條件"] = 6] = "排除條件", t[t["通勤範圍"] = 7] = "通勤範圍", t[t["工作性質"] = 8] = "工作性質"
        })(Dt || (Dt = {})), function (t) {
            t[t["清空條件"] = 0] = "清空條件", t[t["檢視或訂閱條件"] = 1] = "檢視或訂閱條件", t[t["分享結果"] = 2] = "分享結果"
        }(Mt || (Mt = {}));
        var Ht, Jt, Kt, Qt, Yt, zt, Zt, Xt, Wt, te, ee, ne, oe, ae, ie, se, re = "search-event", le = {
            SELECT_OPTION: "select-option",
            UPDATE_TAB: "select-tab",
            CLICK_MOBILE_TAB: "select-mobile-tab",
            CLICK_SHARE: "click-share",
            CLEAR_OPTIONS: "clear-options",
            SUBMIT_TRANSFER: "submit-transfer",
            SUBMIT_MOBILE_MORE: "submit-mobile-more",
            SUBMIT_MOBILE_BASIC: "submit-mobile-basic",
            SUBMIT_MOBILE_TRANSFER: "submit-mobile-transfer",
            SUBMIT_SIDEBAR_RECOMMENDATION: "submit-sidebar-recommendation"
        };
        (function (t) {
            t[t["機車"] = 1] = "機車", t[t["走路"] = 2] = "走路", t[t["腳踏車"] = 3] = "腳踏車", t[t["汽車"] = 4] = "汽車", t[t["捷運"] = 5] = "捷運"
        })(Ht || (Ht = {})), function (t) {
            t[t["本日最新"] = 0] = "本日最新", t[t["三日內"] = 3] = "三日內", t[t["一週內"] = 7] = "一週內", t[t["兩週內"] = 14] = "兩週內", t[t["一個月內"] = 30] = "一個月內"
        }(Jt || (Jt = {})), function (t) {
            t[t["全部"] = 0] = "全部", t[t["全職"] = 1] = "全職", t[t["兼職"] = 2] = "兼職", t[t["高階"] = 3] = "高階", t[t["派遣"] = 4] = "派遣"
        }(Kt || (Kt = {})), function (t) {
            t[t["日班"] = 1] = "日班", t[t["晚班"] = 2] = "晚班", t[t["大夜班"] = 4] = "大夜班", t[t["假日班"] = 8] = "假日班"
        }(Qt || (Qt = {})), function (t) {
            t[t["不需輪班"] = 0] = "不需輪班", t[t["輪班"] = 256] = "輪班"
        }(Yt || (Yt = {})), function (t) {
            t[t["週休二日"] = 1] = "週休二日"
        }(zt || (zt = {})), function (t) {
            t[t["包含面議"] = 1] = "包含面議"
        }(Zt || (Zt = {})), function (t) {
            t[t["1年以下"] = 1] = "1年以下", t[t["1-3年"] = 3] = "1-3年", t[t["3-5年"] = 5] = "3-5年", t[t["5-10年"] = 10] = "5-10年", t[t["10年以上"] = 99] = "10年以上"
        }(Xt || (Xt = {})), function (t) {
            t[t["長期工讀"] = 1] = "長期工讀", t[t["短期工讀"] = 2] = "短期工讀", t[t["假日工讀"] = 4] = "假日工讀", t[t["寒假工讀"] = 8] = "寒假工讀", t[t["暑假工讀"] = 16] = "暑假工讀"
        }(Wt || (Wt = {})), function (t) {
            t[t["高中職以下"] = 1] = "高中職以下", t[t["高中職"] = 2] = "高中職", t[t["專科"] = 3] = "專科", t[t["大學"] = 4] = "大學", t[t["碩士"] = 5] = "碩士", t[t["博士"] = 6] = "博士"
        }(te || (te = {})), function (t) {
            t[t["年終獎金"] = 1] = "年終獎金", t[t["三節獎金/禮品"] = 2] = "三節獎金/禮品", t[t["員工旅遊"] = 3] = "員工旅遊", t[t["分紅配股"] = 4] = "分紅配股", t[t["設施類福利"] = 5] = "設施類福利", t[t["休假福利"] = 6] = "休假福利", t[t["津貼/補助"] = 7] = "津貼/補助", t[t["彈性上下班"] = 8] = "彈性上下班", t[t["健康檢查"] = 9] = "健康檢查", t[t["團體保險"] = 10] = "團體保險"
        }(ee || (ee = {})), function (t) {
            t[t["視覺障礙"] = 1] = "視覺障礙", t[t["聽覺或平衡機能障礙"] = 2] = "聽覺或平衡機能障礙", t[t["自閉症"] = 3] = "自閉症", t[t["慢性精神病"] = 4] = "慢性精神病", t[t["肢體障礙(上肢)"] = 5] = "肢體障礙(上肢)", t[t["肢體障礙(下肢)"] = 6] = "肢體障礙(下肢)", t[t["肢體障礙(軀幹)"] = 7] = "肢體障礙(軀幹)", t[t["聲音或語言機能障礙"] = 8] = "聲音或語言機能障礙", t[t["顏面損傷"] = 9] = "顏面損傷", t[t["其他障礙"] = 10] = "其他障礙", t[t["不拘"] = 99] = "不拘"
        }(ne || (ne = {})), function (t) {
            t[t["有寫薪資"] = 0] = "有寫薪資", t[t["月薪3萬up"] = 1] = "月薪3萬up", t[t["月薪4萬up"] = 2] = "月薪4萬up", t[t["月薪5萬up"] = 3] = "月薪5萬up"
        }(oe || (oe = {})), function (t) {
            t[t["符合度排序"] = 0] = "符合度排序", t[t["日期排序"] = 1] = "日期排序", t[t["學歷 高→低"] = 2] = "學歷 高→低", t[t["學歷 低→高"] = 3] = "學歷 低→高", t[t["經歷 多→少"] = 4] = "經歷 多→少", t[t["經歷 少→多"] = 5] = "經歷 少→多", t[t["應徵人數 多→少"] = 6] = "應徵人數 多→少", t[t["應徵人數 少→多"] = 7] = "應徵人數 少→多", t[t["待遇 高→低"] = 8] = "待遇 高→低", t[t["待遇 低→高"] = 9] = "待遇 低→高"
        }(ae || (ae = {})), function (t) {
            t[t["二度就業"] = 0] = "二度就業", t[t["中壯齡(45~54歲)"] = 1] = "中壯齡(45~54歲)", t[t["中高齡(55~64歲)"] = 2] = "中高齡(55~64歲)", t[t["高齡(65歲以上)"] = 3] = "高齡(65歲以上)", t[t["管理職"] = 4] = "管理職", t[t["實習工作"] = 5] = "實習工作", t[t["研發替代役"] = 6] = "研發替代役", t[t["更生人"] = 7] = "更生人", t[t["外籍人士"] = 8] = "外籍人士"
        }(ie || (ie = {})), function (t) {
            t[t["上市上櫃"] = 16] = "上市上櫃", t[t["外商一般"] = 5] = "外商一般", t[t["外商資訊"] = 4] = "外商資訊"
        }(se || (se = {}));
        var ce = {
            transType: Ht,
            isnew: Jt,
            ro: Kt,
            s9: Qt,
            s5: Yt,
            wktm: zt,
            scneg: Zt,
            jobexp: Xt,
            wt: Wt,
            edu: te,
            RoleStatus: ie,
            dis_role: ne,
            wf: ee,
            CustomSalary: oe,
            zone: se
        }, ue = n("e37d");

        function pe(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function me(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pe(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var de = {
                name: "SubFilterTabsBar",
                components: {VPopover: ue["a"]},
                props: {
                    tabs: b["a"].arrayOf(Number).def([]),
                    tabsForMobile: b["a"].arrayOf(Number).def([]),
                    tools: b["a"].arrayOf(Number).def([])
                },
                data: function () {
                    return {
                        enumData: {tool: Mt},
                        transType: Ht,
                        tab: Dt,
                        closeEventList: ["#map", ".job-list-pc", ".job-list-m"]
                    }
                },
                computed: me({
                    tabsText: function () {
                        var t = this;
                        return Object.keys(Dt).filter((function (t) {
                            return !isNaN(t)
                        })).map((function (e) {
                            var n = Dt[e], o = 0;
                            if (t.enabledTab === 1 * e) return n;
                            switch (e) {
                                case"0":
                                    t.query.isnew && (n = Jt[t.query.isnew]);
                                    break;
                                case"1":
                                    var a = [t.query.s9 || t.query.s5, t.query.wktm];
                                    o = a.filter((function (t) {
                                        return t
                                    })).length, o && (n = "".concat(Dt[e], "(").concat(o, ")"));
                                    break;
                                case"2":
                                    if ("99" === t.query.sr) n = oe[0]; else if (t.query.sctp) {
                                        var i = [{text: "時薪", value: "H"}, {text: "日薪", value: "D"}, {
                                            text: "月薪",
                                            value: "M"
                                        }, {text: "年薪", value: "Y"}], s = i.find((function (e) {
                                            return t.query.sctp === e.value
                                        }));
                                        switch (t.query.sctp) {
                                            case"H":
                                                n = "" === t.query.scmax && "160" === t.query.scmin ? oe[1] : "自訂".concat(s.text);
                                                break;
                                            case"M":
                                                if ("" === t.query.scmax) switch (t.query.scmin) {
                                                    case"30000":
                                                        n = oe[1];
                                                        break;
                                                    case"40000":
                                                        n = oe[2];
                                                        break;
                                                    case"50000":
                                                        n = oe[3];
                                                        break;
                                                    default:
                                                        n = "自訂".concat(s.text);
                                                        break
                                                } else n = "自訂".concat(s.text);
                                                break;
                                            default:
                                                n = "自訂".concat(s.text);
                                                break
                                        }
                                    }
                                    break;
                                case"3":
                                    o = t.query.jobexp ? t.query.jobexp.split(",").length : 0, 1 === o ? n = Xt[t.query.jobexp] : o > 1 && (n = "".concat(Dt[e], "(").concat(o, ")"));
                                    break;
                                case"4":
                                    break;
                                case"5":
                                    var r = [t.query.rostatus || t.query.manage, t.query.wt, t.query.wf, t.query.edu, t.query.dis_role];
                                    t.$root.isMobile() && (r = [].concat(Object(m["a"])(r), [t.query.wktm, t.query.jobexp, t.query.isnew, t.query.s9, t.query.s5, t.query.sr || t.query.sctp])), o = r.filter((function (t) {
                                        return t
                                    })).length, o && (n = "".concat(Dt[e], "(").concat(o, ")"));
                                    break;
                                case"6":
                                    break;
                                case"7":
                                    t.isoLineQuery.transType && t.isoLineQuery.time && (n = "".concat(Ht[t.isoLineQuery.transType], ",").concat(t.isoLineQuery.time, "分"));
                                    break;
                                case"8":
                                    t.query.ro && "0" !== t.query.ro && (n = Kt[t.query.ro]);
                                    break
                            }
                            return n
                        }))
                    }
                }, Object(st["f"])("cSearch", ["query", "enabledTab"]), {}, Object(st["f"])("cIsoline", {
                    isoLineQuery: function (t) {
                        return t.query
                    }
                }), {}, Object(st["d"])("cSearch", {subFilterEnabled: bt}), {}, Object(st["f"])("ui", ["jobListStep"])),
                mounted: function () {
                    var t = this;
                    this.closeEventList.forEach((function (e) {
                        document.querySelector(e).addEventListener("click", t.closeSub)
                    }))
                },
                destroyed: function () {
                    var t = this;
                    this.closeEventList.forEach((function (e) {
                        document.querySelector(e).removeEventListener("click", t.closeSub)
                    }))
                },
                methods: me({
                    closeSub: function (t) {
                        t.currentTarget.classList.contains("basic-map") || t.currentTarget.classList.contains("job-list-m") || this.$emit(re, new wt(le.UPDATE_TAB, [{
                            type: "tab",
                            value: [null, this.enabledTab]
                        }])), this[yt](null)
                    }, onClickTab: function (t) {
                        var e = this.enabledTab !== t ? t : null;
                        this[yt](e), this.$emit(re, new wt(le.UPDATE_TAB, [{type: "tab", value: [e, t]}]))
                    }, onClickTool: function (t) {
                        switch (t) {
                            case 0:
                                this[_t](), this.$emit(re, new wt(le.CLEAR_OPTIONS, []));
                                break;
                            case 2:
                                this.$copyText(location.href + "&utm_source=104&utm_medium=time4jobs&utm_campaign=share"), this.$emit(re, new wt(le.CLICK_SHARE, []));
                                break;
                            default:
                                break
                        }
                    }
                }, Object(st["e"])("cSearch", [yt, _t]))
            }, he = de, be = (n("9cd7"), n("93bc"), Object(j["a"])(he, Gt, Ft, !1, null, "3b6e1fb0", null)),
            fe = be.exports, ge = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "sub-filter-content-area bg-white w-100",
                    class: [7 === t.enabledTab ? "sub-filter-content-area--trans-type" : ""],
                    on: {
                        click: function (t) {
                            t.stopPropagation()
                        }
                    }
                }, [n("div", {staticClass: "container jb-container"}, [n("div", {staticClass: "sub-filter-content-area__width"}, [n("search-sub-trans-type", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 7 === t.enabledTab,
                        expression: "enabledTab === 7"
                    }], ref: "sub-trans-type", staticClass: "pt-7 pb-3", on: {"search-event": t.onSearchEvent}
                }), n("search-sub-working-type", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.enabledTab,
                        expression: "enabledTab === 1"
                    }], staticClass: "pt-7 pb-3", on: {"search-event": t.onSearchEvent}
                }), n("search-sub-basic", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === t.enabledTab,
                        expression: "enabledTab === 0"
                    }], staticClass: "pt-7 pb-3", attrs: {category: "isnew"}, on: {"search-event": t.onSearchEvent}
                }), n("search-sub-basic", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 3 === t.enabledTab,
                        expression: "enabledTab === 3"
                    }],
                    staticClass: "pt-7 pb-3",
                    attrs: {category: "jobexp", "multiple-select": !0},
                    on: {"search-event": t.onSearchEvent}
                }), n("search-sub-basic", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 8 === t.enabledTab,
                        expression: "enabledTab === 8"
                    }],
                    staticClass: "pt-7 pb-3",
                    attrs: {category: "ro", "parameter-blacklist": [0]},
                    on: {"search-event": t.onSearchEvent}
                }), n("search-sub-salary", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 2 === t.enabledTab,
                        expression: "enabledTab === 2"
                    }], staticClass: "pt-7 pb-3", on: {"search-event": t.onSearchEvent}
                }), n("search-sub-more", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 5 === t.enabledTab,
                        expression: "enabledTab === 5"
                    }], staticClass: "py-7", on: {"search-event": t.onSearchEvent}
                })], 1)]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 7 === t.enabledTab,
                        expression: "enabledTab === 7"
                    }], staticClass: "sub-filter-content-area__mask w-100 vh-100 position-fixed", on: {click: t.closeTab}
                })])
            }, ye = [], _e = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "search-subrange"}, [n("div", {
                    staticClass: "search-subrange__title mb-6",
                    domProps: {textContent: t._s("搜尋範圍：" + t.timeRange + "分鐘內可抵達(" + t.transType[t.selectedTags[0]] + ")")}
                }), n("div", {
                    staticClass: "search-subrange__options p-0 m-0 mb-6",
                    attrs: {"data-gtm-param": "篩選-通勤範圍"}
                }, t._l(Object.keys(t.transType).filter((function (t) {
                    return !isNaN(t)
                })), (function (e, o) {
                    return n("border-button", {
                        key: o,
                        attrs: {
                            text: t.transType[e],
                            size: t.isMobile ? "middle" : "small",
                            active: -1 !== t.selectedTags.indexOf(e),
                            "data-nosnippet": ""
                        },
                        nativeOn: {
                            click: function (n) {
                                return t.onSelectTag(e)
                            }
                        }
                    })
                })), 1), n("div", {staticClass: "search-subrange__time-range pt-8"}, [n("vue-slider", {
                    ref: "vue-slider",
                    staticClass: "d-inline-block align-middle",
                    attrs: {
                        "dot-size": 20,
                        width: 300,
                        height: 8,
                        tooltip: "always",
                        min: 5,
                        max: 60,
                        interval: 5,
                        lazy: !0,
                        "tooltip-formatter": function (t) {
                            return t + "分鐘"
                        }
                    },
                    on: {change: t.timeSubmit},
                    model: {
                        value: t.timeRange, callback: function (e) {
                            t.timeRange = e
                        }, expression: "timeRange"
                    }
                }), n("button", {
                    staticClass: "btn btn-outline-secondary ml-8 btn-sm search-subrange__condition-btn d-none d-md-inline-block",
                    attrs: {"data-gtm-search": "通勤範圍-搜尋"},
                    domProps: {textContent: t._s("確定")},
                    on: {click: t.onSubmit}
                })], 1)])
            }, Te = [], Se = n("4971"), Pe = n.n(Se);
        n("24df");

        function Ce(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Oe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ce(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ve = Object(st["a"])("cIsoline"), je = ve.mapState, we = ve.mapMutations, Le = {
                name: "SearchSubRange",
                components: {VueSlider: Pe.a, BorderButton: F},
                props: {
                    isMobile: b["a"].bool.def(!1),
                    defaultParam: b["a"].shape({timeRange: b["a"].number, selectedTags: b["a"].string}).def((function () {
                        return {timeRange: 15, selectedTags: "2"}
                    }))
                },
                data: function () {
                    return {
                        transType: Ht,
                        timeRange: this.defaultParam.timeRange,
                        selectedTags: [this.defaultParam.selectedTags]
                    }
                },
                computed: Oe({}, je(["query"])),
                mounted: function () {
                    this.$refs["vue-slider"].$el.dataset.gtmParam = "篩選-通勤時間"
                },
                methods: Oe({
                    onSelectTag: function (t) {
                        this.selectedTags = [t], this.$emit(re, new wt(le.SELECT_OPTION, [{
                            type: "transType",
                            value: this.selectedTags
                        }]))
                    }, timeSubmit: function () {
                        this.$emit(re, new wt(le.SELECT_OPTION, [{type: "time", value: ["".concat(this.timeRange)]}]))
                    }, onSubmit: function () {
                        this.$emit(re, new wt(le.SUBMIT_TRANSFER))
                    }, syncStoreData: function () {
                        this.selectedTags = [this.query.transType], this.timeRange = this.query.time
                    }
                }, we([ut]))
            }, Re = Le, Ie = (n("dbaf"), Object(j["a"])(Re, _e, Te, !1, null, "0beb927f", null)), xe = Ie.exports,
            ke = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "search-subsalary"}, [n("form-row", {attrs: {title: t.OptionTitle.CustomSalary + "："}}, [n("sub-filter-options", {
                    attrs: {
                        category: "CustomSalary",
                        "data-nosnippet": "",
                        "selected-tags": t.customSalaryTags
                    }, on: {
                        "update:selectedTags": function (e) {
                            t.customSalaryTags = e
                        }, "update:selected-tags": function (e) {
                            t.customSalaryTags = e
                        }, selectSubFilter: t.selectCustomSalaryOption
                    }
                })], 1), n("form-row", {attrs: {title: "自訂條件："}}, [n("custom-salary", {
                    ref: "inputSalaryField",
                    attrs: {"is-mobile": !1, "salary-inputed-tag-text": t.inputedSalaryTagText},
                    on: {
                        "update:salaryInputedTagText": function (e) {
                            t.inputedSalaryTagText = e
                        }, "update:salary-inputed-tag-text": function (e) {
                            t.inputedSalaryTagText = e
                        }, selectSubFilter: t.inputCustomSalaryOption, removeInputedTag: t.inputCustomSalaryOption
                    }
                })], 1), t._e()], 1)
            }, Ee = [], Ae = (n("d3b7"), n("25f0"), function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "row",
                    class: {"align-items-center": "center" === t.align, "align-items-start": "center" !== t.align}
                }, [t.title ? n("div", {
                    staticClass: "col-auto font-weight-bold py-2",
                    domProps: {textContent: t._s(t.title)}
                }) : t._e(), n("div", {staticClass: "col"}, [t._t("default")], 2)])])
            }), Ue = [], De = {
                name: "FormRow",
                props: {title: b["a"].string.def(""), align: b["a"].oneOf(["top", "center"]).def("top")}
            }, Me = De, Ne = (n("8388"), Object(j["a"])(Me, Ae, Ue, !1, null, null, null)), Be = Ne.exports,
            $e = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [t.isMobile ? t._l(Object.keys(t.SearchParameter[t.category]).filter((function (e) {
                    return !isNaN(e) && -1 === t.parameterBlacklist.indexOf(+e)
                })), (function (e, o) {
                    return n("border-button", {
                        key: o,
                        staticClass: "sub-filter-option t5 tag-width",
                        attrs: {
                            size: "auto",
                            text: t.SearchParameter[t.category][e],
                            active: -1 !== t.selectedTags.indexOf(e),
                            "data-gtm-param": t.gtmContext,
                            "data-nosnippet": ""
                        },
                        nativeOn: {
                            click: function (n) {
                                return t.onSelectTag(e)
                            }
                        }
                    })
                })) : t._l(Object.keys(t.SearchParameter[t.category]).filter((function (e) {
                    return !isNaN(e) && -1 === t.parameterBlacklist.indexOf(+e)
                })), (function (e, o) {
                    return n("form-element-tag", {
                        key: o,
                        staticClass: "sub-filter-option col-auto mb-4",
                        class: {"option-active": -1 !== t.selectedTags.indexOf(e)},
                        attrs: {
                            text: t.SearchParameter[t.category][e],
                            index: e,
                            "style-select": "gray",
                            "show-icon": -1 !== t.selectedTags.indexOf(e),
                            "data-gtm-param": t.gtmContext
                        },
                        on: {
                            deleteTag: function (n) {
                                return t.onSelectTag(e)
                            }, click: function (t) {
                                t.preventDefault()
                            }
                        }
                    })
                }))], 2)
            }, Ve = [], qe = (n("a434"), function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("span", {staticClass: "form-element-tag d-inline-block p-1"}, [n("span", {
                    staticClass: "d-flex align-items-center position-relative form-element-tag__item pr-6 d-inline-block",
                    class: t.styleClassName,
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.deleteTag(e)
                        }
                    }
                }, [n("span", t._b({
                    staticClass: "text-truncate t4 d-inline-block",
                    attrs: {"data-nosnippet": ""}
                }, "span", t.gtm, !1), [t._v(" " + t._s(t.text) + " ")]), t.showIcon ? n("i", {staticClass: "jb_icon_delete position-absolute vertical-align-middle t3"}) : t._e()])])
            }), Ge = [], Fe = {
                name: "FormElementTag",
                props: {
                    text: b["a"].string.def(""),
                    showIcon: b["a"].bool.def(!0),
                    index: b["a"].oneOfType([b["a"].string, b["a"].integer]).def(-1),
                    styleSelect: b["a"].oneOf(["blue", "gray"]).def("blue"),
                    gtm: b["a"].object.def({})
                },
                computed: {
                    styleClassName: function () {
                        return "form-element-tag__".concat(this.styleSelect)
                    }
                },
                mounted: function () {
                },
                methods: {
                    deleteTag: function () {
                        this.$emit("deleteTag", this.index), this.$emit("deleteTagByText", this.text)
                    }
                }
            }, He = Fe, Je = (n("76a9"), Object(j["a"])(He, qe, Ge, !1, null, "34f1ddd6", null)), Ke = Je.exports, Qe = {
                isnew: "更新日期",
                ro: "工作性質",
                s9: "上班時段",
                s5: "輪班制度",
                wktm: "休假制度",
                jobexp: "經歷要求",
                edu: "學歷要求",
                wf: "福利制度",
                wt: "工讀性質",
                RoleStatus: "身份類型",
                dis_role: "接受身障",
                CustomSalary: "薪資待遇"
            }, Ye = {
                name: "SubFilterOptions",
                components: {FormElementTag: Ke, BorderButton: F},
                props: {
                    category: b["a"].string.isRequired.def(""),
                    multipleSelect: b["a"].bool.def(!1),
                    parameterBlacklist: b["a"].arrayOf(Number).def([]),
                    isMobile: b["a"].bool.def(!1),
                    selectedTags: b["a"].any.def([])
                },
                data: function () {
                    return {SearchParameter: ce}
                },
                computed: {
                    gtmContext: function () {
                        return "篩選-".concat(Qe[this.category])
                    }
                },
                methods: {
                    onSelectTag: function (t) {
                        var e = this.selectedTags.indexOf(t), n = Object(m["a"])(this.selectedTags);
                        this.multipleSelect || this.selectedTags[0] === t ? -1 === e ? n.push(t) : n.splice(e, 1) : n = [t], this.$emit("selectSubFilter", [{
                            type: this.category,
                            value: n
                        }]), this.$emit("update:selectedTags", n)
                    }
                }
            }, ze = Ye, Ze = (n("47a2"), Object(j["a"])(ze, $e, Ve, !1, null, "60c616bc", null)), Xe = Ze.exports,
            We = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "custom-salary row no-gutters"}, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.hasTag,
                        expression: "hasTag"
                    }], staticClass: "tag w-100"
                }, [t.isMobile ? [n("border-button", {
                    staticClass: "sub-filter-option t5 tag-width",
                    attrs: {size: "auto", text: t.salaryInputedTagText, active: t.hasTag},
                    nativeOn: {
                        click: function (e) {
                            return t.removeInputedTag(e)
                        }
                    }
                })] : [n("form-element-tag", {
                    staticClass: "sub-filter-option col-auto mb-4",
                    class: {"option-active": t.hasTag},
                    attrs: {text: t.salaryInputedTagText, "style-select": "gray", "show-icon": t.hasTag},
                    on: {
                        deleteTag: t.removeInputedTag, click: function (t) {
                            t.preventDefault()
                        }
                    }
                })]], 2), n("div", {staticClass: "mb-4 mb-md-0 custom-salary__element"}, [n("form-element-cinput-select", {
                    staticClass: "position-relative custom-salary__select",
                    attrs: {
                        "high-light": !0,
                        "select-value": t.selectedTags,
                        "select-options": [{text: "時薪", value: "H"}, {text: "日薪", value: "D"}, {
                            text: "月薪",
                            value: "M"
                        }, {text: "年薪", value: "Y"}],
                        "font-size-is-smaller": !0
                    },
                    on: {
                        "update:selectValue": function (e) {
                            t.selectedTags = e
                        }, "update:select-value": function (e) {
                            t.selectedTags = e
                        }, selectChange: t.selectChange
                    }
                })], 1), n("div", {staticClass: "d-flex mb-0"}, [n("div", {staticClass: "col-6 col-md-auto pl-0 pr-2 left"}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.scmin,
                        expression: "scmin"
                    }],
                    ref: "scminInput",
                    staticClass: "form-control border-0 custom-salary__min number-max",
                    attrs: {type: "number", placeholder: t.salaryMinPlaceholder},
                    domProps: {value: t.scmin},
                    on: {
                        change: t.inputChange, input: function (e) {
                            e.target.composing || (t.scmin = e.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "col-auto py-2 px-0",
                    domProps: {textContent: t._s("-")}
                }), n("div", {staticClass: "col-6 col-md-auto pl-2 pr-1"}, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.scmax,
                        expression: "scmax"
                    }],
                    ref: "scmaxInput",
                    staticClass: "form-control border-0 number-max",
                    attrs: {type: "number", placeholder: "可不填"},
                    domProps: {value: t.scmax},
                    on: {
                        change: t.inputChange, input: function (e) {
                            e.target.composing || (t.scmax = e.target.value)
                        }
                    }
                })]), n("div", {staticClass: "d-none d-md-block col-auto p-0 ml-2"}, [n("button", {
                    staticClass: "btn btn-outline-light btn-sm custom-salary__condition-btn",
                    attrs: {"data-gtm-param": t.gtmContext, disabled: !t.submitEnabled},
                    domProps: {textContent: t._s("送出")},
                    on: {click: t.submit}
                })])])])
            }, tn = [], en = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("dropdown", {
                    ref: "dropdown",
                    attrs: {
                        "list-show": t.dropdownShow,
                        options: t.selectOptions,
                        "high-light": t.highLight,
                        "font-size-is-smaller": t.fontSizeIsSmaller,
                        gtm: t.gtm,
                        "position-relative": t.isAtBottom,
                        "select-type": "select",
                        tabindex: "0"
                    },
                    on: {select: t.MenuSelect},
                    nativeOn: {
                        blur: function (e) {
                            return t.onBlur(e)
                        }, click: function (e) {
                            return t.onFocus(e)
                        }
                    }
                }, [n("template", {slot: "inputSpace"}, [n("div", t._b({
                    ref: "input",
                    staticClass: "form-control form-control--category-menu d-flex flex-wrap form-element-tag-input d-flex align-items-center",
                    class: [{"input-disabled": t.selectDisabled}],
                    style: {fontSize: !!t.fontSizeIsSmaller && "14px"}
                }, "div", t.selectGtm, !1), [n("span", {
                    staticClass: "text-region",
                    class: [{placeholder: t.isEmpty(t.selectValue)}],
                    domProps: {textContent: t._s(t.isEmpty(t.selectValue) ? t.selectPlaceholder : t.selectValue.text)}
                }), n("i", {staticClass: "jb_icon_down"})])])], 2)
            }, nn = [], on = {
                name: "Select",
                components: {Dropdown: k},
                props: {
                    highLight: b["a"].bool.def(!0),
                    selectValue: b["a"].any.def(""),
                    selectOptions: b["a"].array.def([]),
                    selectPlaceholder: b["a"].string.def(""),
                    selectDisabled: b["a"].bool.def(!1),
                    fontSizeIsSmaller: b["a"].bool.def(!1),
                    gtm: b["a"].string.def(""),
                    selectGtm: b["a"].object.def({}),
                    isAtBottom: b["a"].bool.def(!1)
                },
                data: function () {
                    return {dropdownShow: !1}
                },
                watch: {
                    dropdownShow: function (t) {
                        t ? document.body.addEventListener("click", this.clickDownHandler) : document.body.removeEventListener("click", this.clickDownHandler)
                    }
                },
                updated: function () {
                    this.$emit("setDropdownPosition", this.$refs.dropdown, this.$refs.input)
                },
                mounted: function () {
                },
                beforeDestroy: function () {
                    document.body.removeEventListener("click", this.clickDownHandler)
                },
                methods: {
                    onFocus: function () {
                        this.selectDisabled || (this.dropdownShow = !this.dropdownShow)
                    }, onBlur: function () {
                        this.dropdownShow = !1, this.$emit("blur")
                    }, clickDownHandler: function (t) {
                        var e = this;
                        this.$nextTick((function () {
                            e.$refs["dropdown"].$el.contains(t.target) || (e.dropdownShow = !1)
                        }))
                    }, MenuSelect: function (t) {
                        var e = this;
                        t && (null == t.value ? this.$emit("update:selectValue", null) : this.$emit("update:selectValue", t), setTimeout((function () {
                            e.dropdownShow = !1, e.$emit("selectChange")
                        }), 0))
                    }, isEmpty: g.a
                }
            }, an = on, sn = (n("44e3"), Object(j["a"])(an, en, nn, !1, null, "2424fee8", null)), rn = sn.exports, ln = {
                name: "CustomSalary",
                components: {FormElementCinputSelect: rn, FormElementTag: Ke, BorderButton: F},
                props: {salaryInputedTagText: b["a"].string.def(""), isMobile: b["a"].bool.def(!1)},
                data: function () {
                    return {selectedTags: {text: "時薪", value: "H"}, scmin: "", scmax: ""}
                },
                computed: {
                    hasTag: function () {
                        return "" !== this.salaryInputedTagText
                    }, salaryMinPlaceholder: function () {
                        switch (this.selectedTags.value) {
                            case"H":
                                return "如190";
                            case"D":
                                return "如2000";
                            case"M":
                                return "如30000";
                            case"Y":
                                return "如1000000";
                            default:
                                return ""
                        }
                    }, submitEnabled: function () {
                        return this.scmin || this.scmax
                    }, gtmContext: function () {
                        return "篩選-".concat(Qe.CustomSalary)
                    }
                },
                methods: {
                    removeInputedTag: function () {
                        this.$emit("removeInputedTag", [{type: "sctp", value: [""]}, {
                            type: "scmin",
                            value: [""]
                        }, {type: "scmax", value: [""]}, {type: "scstrict", value: [""]}, {
                            type: "scneg",
                            value: [""]
                        }]), this.$emit("update:salaryInputedTagText", ""), this.resetInputs()
                    }, resetInputs: function () {
                        this.scmin = "", this.scmax = "", this.$refs.scminInput.value = "", this.$refs.scmaxInput.value = ""
                    }, formatNumber: function (t) {
                        return parseInt(t)
                    }, formatNumberText: function (t) {
                        return t ? this.formatNumber(t).toString().replace(/([0-9])(?=([0-9]{3})+$)/g, "$1,") : ""
                    }, isEqualAfterFormat: function (t) {
                        return !t || this.formatNumber(t).toString() === t
                    }, isPositiveNumber: function (t) {
                        return !t || this.formatNumber(t) >= 0
                    }, submit: function () {
                        var t = !this.isEqualAfterFormat(this.scmin) || !this.isEqualAfterFormat(this.scmax) || !this.isPositiveNumber(this.scmin) || !this.isPositiveNumber(this.scmax),
                            e = this.scmax && 0 === this.formatNumber(this.scmax),
                            n = !!this.scmax && this.formatNumber(this.scmin) > this.formatNumber(this.scmax);
                        if (t) alert("請輸入數字,最多可查詢七位數"); else if (e) alert("薪資上限不可為0"); else if (n) alert("薪資上限不得低於薪資下限"); else if (this.submitEnabled) {
                            this.$emit("selectSubFilter", [{type: "sctp", value: [this.selectedTags.value]}, {
                                type: "scmin",
                                value: [this.scmin]
                            }, {type: "scmax", value: [this.scmax]}, {type: "scstrict", value: ["1"]}, {
                                type: "scneg",
                                value: ["0"]
                            }]);
                            var o = this.formatNumberText(this.scmin), a = this.formatNumberText(this.scmax), i = "";
                            i = this.scmin && this.scmax ? "".concat(this.selectedTags.text, " ").concat(o, " - ").concat(a) : this.scmin ? "".concat(this.selectedTags.text, " ").concat(o) : "".concat(this.selectedTags.text, " ").concat(a), this.$emit("update:salaryInputedTagText", i)
                        }
                        this.resetInputs()
                    }, selectChange: function () {
                        this.$emit("selectChange", [{type: "sctp", value: [this.selectedTags.value]}, {
                            type: "scmin",
                            value: [this.scmin]
                        }, {type: "scmax", value: [this.scmax]}, {
                            type: "scstrict",
                            value: [this.scmin || this.scmax ? "1" : "0"]
                        }, {type: "scneg", value: ["0"]}])
                    }, inputChange: function () {
                        if (this.isMobile) {
                            var t = !this.isEqualAfterFormat(this.scmin) || !this.isEqualAfterFormat(this.scmax) || !this.isPositiveNumber(this.scmin) || !this.isPositiveNumber(this.scmax),
                                e = !!this.scmax && this.formatNumber(this.scmin) > this.formatNumber(this.scmax),
                                n = this.scmax && 0 === this.formatNumber(this.scmax);
                            t ? (alert("請輸入數字,最多可查詢七位數"), this.resetInputs()) : n ? (alert("薪資上限不可為0"), this.resetInputs()) : e ? (alert("薪資上限不得低於薪資下限"), this.resetInputs()) : this.submitEnabled && this.$emit("inputChange", [{
                                type: "sctp",
                                value: [this.selectedTags.value]
                            }, {type: "scmin", value: [this.scmin]}, {
                                type: "scmax",
                                value: [this.scmax]
                            }, {type: "scstrict", value: ["1"]}, {type: "scneg", value: ["0"]}])
                        }
                    }
                }
            }, cn = ln, un = (n("10f0"), Object(j["a"])(cn, We, tn, !1, null, "4ec9823e", null)), pn = un.exports,
            mn = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [void 0 !== t.checkbox.text ? n("form-element-checkbox", {staticClass: "mr-4"}, [n("input", {
                    attrs: {
                        id: t.checkbox.id,
                        type: "checkbox",
                        disabled: t.checkbox.disabled
                    }, domProps: {value: 1, checked: t.checkbox.checked}, on: {change: t.check}
                }), n("span", {domProps: {textContent: t._s(t.checkbox.text)}})]) : t._e()], 1)
            }, dn = [];

        function hn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function bn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? hn(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hn(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var fn = {
                name: "SalaryResultCheckbox",
                components: {FormElementCheckbox: L},
                props: {
                    category: b["a"].string.isRequired.def(""),
                    parameterBlacklist: b["a"].arrayOf(Number).def([]),
                    checkboxSetting: b["a"].object.def({})
                },
                data: function () {
                    return {
                        checkboxs: [{
                            text: "有寫薪資的工作",
                            id: "hasSalaryJob",
                            disabled: !0,
                            checked: !0
                        }, {text: "包含面議", id: "negotiableJob", disabled: !1, checked: !1}, {
                            text: "全部工作",
                            id: "allJob",
                            disabled: !0,
                            checked: !0
                        }]
                    }
                },
                computed: {
                    checkbox: function () {
                        var t = this, e = this.checkboxs.find((function (e) {
                            return e.text === t.checkboxSetting.text
                        }));
                        return bn({}, e, {}, this.checkboxSetting)
                    }
                },
                methods: {
                    check: function (t) {
                        switch (t.target.id) {
                            case"negotiableJob":
                                this.$emit("selectSubFilter", [{type: this.category, value: [t.target.checked ? 1 : 0]}]);
                                break;
                            default:
                                break
                        }
                    }
                }
            }, gn = fn, yn = Object(j["a"])(gn, mn, dn, !1, null, "161f51fc", null), _n = yn.exports, Tn = {
                methods: {
                    selectSubFilter: function (t) {
                        this.$emit(re, new wt(le.SELECT_OPTION, t))
                    }
                }
            }, Sn = (n("a4d3"), n("e01a"), n("d28b"), n("4fad"), n("3ca3"), n("ddb0"), n("3835")), Pn = n("63ea"),
            Cn = n.n(Pn), On = function (t, e) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o = 0, a = Object.entries(t); o < a.length; o++) {
                    var i = Object(Sn["a"])(a[o], 2), s = i[0], r = i[1], l = Object.assign({}, r);
                    if (n && delete l[n], Cn()(l, e)) return [s.toString()]
                }
                return []
            }, vn = function (t) {
                var e = [];
                if (Cn()(t.manage, ["9"]) && (e = [].concat(Object(m["a"])(e), ["4"])), t.rostatus) {
                    var n = !0, o = !1, a = void 0;
                    try {
                        for (var i, s = t.rostatus[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                            var r = i.value, l = On(wn, {rostatus: r});
                            l.length && (e = [].concat(Object(m["a"])(e), Object(m["a"])(l)))
                        }
                    } catch (c) {
                        o = !0, a = c
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                }
                return e
            }, jn = [{order: "15", asc: "0"}, {order: "11", asc: "0"}, {order: "4", asc: "0"}, {
                order: "4",
                asc: "1"
            }, {order: "3", asc: "0"}, {order: "3", asc: "1"}, {order: "7", asc: "0"}, {order: "7", asc: "1"}, {
                order: "13",
                asc: "0"
            }, {order: "13", asc: "1"}],
            wn = [{rostatus: 2048..toString()}, {rostatus: 32768..toString()}, {rostatus: 4096..toString()}, {rostatus: 8192..toString()}, {manage: "9"}, {rostatus: 1024..toString()}, {rostatus: 16..toString()}, {rostatus: 16384..toString()}, {rostatus: 32..toString()}],
            Ln = [{sr: "99", scstrict: "", sctp: "", scmin: "", scmax: "", scneg: ""}, {
                sr: "",
                scstrict: "1",
                sctp: "M",
                scmin: "30000",
                scmax: "",
                scneg: "0"
            }, {sr: "", scstrict: "1", sctp: "M", scmin: "40000", scmax: "", scneg: "0"}, {
                sr: "",
                scstrict: "1",
                sctp: "M",
                scmin: "50000",
                scmax: "",
                scneg: "0"
            }];

        function Rn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function In(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Rn(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rn(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var xn = Object(st["a"])("cSearch"), kn = xn.mapState, En = xn.mapMutations, An = {
                name: "SearchSubSalary",
                components: {FormRow: Be, SubFilterOptions: Xe, CustomSalary: pn, SalaryResultCheckbox: _n},
                mixins: [Tn],
                data: function () {
                    return {
                        OptionTitle: Qe,
                        kindOfSalaryCheckbox: {
                            hasSalaryJob: {
                                text: "有寫薪資的工作",
                                id: "hasSalaryJob",
                                disabled: !1,
                                checked: !1
                            },
                            negotiableJob: {text: "包含面議", id: "negotiableJob", disabled: !1, checked: !1},
                            allJob: {text: "全部工作", id: "allJob", disabled: !1, checked: !1}
                        }
                    }
                },
                computed: In({
                    customSalaryTags: {
                        get: function () {
                            if (this.isSelectedCustomSalaryTags()) {
                                var t = {
                                    sr: this.query.sr,
                                    scstrict: this.query.scstrict,
                                    sctp: this.query.sctp,
                                    scmin: this.query.scmin,
                                    scmax: this.query.scmax
                                };
                                return On(Ln, t, "scneg")
                            }
                            return []
                        }, set: function (t) {
                            var e = this.getQuery(t[0]);
                            this[gt](e)
                        }
                    }, inputedSalaryTagText: {
                        get: function () {
                            var t = this;

                            function e(t) {
                                return parseInt(t)
                            }

                            function n(t) {
                                var n = e(t).toString() === t, o = e(t) >= 0;
                                return n && o ? e(t).toString().replace(/([0-9])(?=([0-9]{3})+$)/g, "$1,") : ""
                            }

                            var o = [{text: "時薪", value: "H"}, {text: "日薪", value: "D"}, {
                                text: "月薪",
                                value: "M"
                            }, {text: "年薪", value: "Y"}], a = n(this.query.scmin), i = n(this.query.scmax);
                            if (!this.isSelectedCustomSalaryTags() && this.query.sctp) {
                                var s = o.find((function (e) {
                                    return t.query.sctp === e.value
                                }));
                                return a && i ? "".concat(s.text, " ").concat(a, " - ").concat(i) : a ? "".concat(s.text, " ").concat(a) : i ? "".concat(s.text, " ").concat(i) : ""
                            }
                            return ""
                        }, set: function (t) {
                        }
                    }, salaryCheckbox: {
                        get: function () {
                            var t = {};
                            if (this.customSalaryTags.length > 0) switch (this.customSalaryTags[0]) {
                                case"0":
                                    Object.assign(t, {text: "有寫薪資的工作"});
                                    break;
                                case"1":
                                    break;
                                case"2":
                                case"3":
                                    Object.assign(t, {text: "包含面議", checked: 1 === parseInt(this.query.scneg)});
                                    break;
                                case"4":
                                    break;
                                default:
                                    break
                            } else if ("" === this.query.sctp || "" === this.query.scmin && "" === this.query.scmax) Object.assign(t, {text: "全部工作"}); else if ("M" === this.query.sctp) {
                                var e = 4e4, n = this.query.scmin ? parseInt(this.query.scmin) : "",
                                    o = this.query.scmax ? parseInt(this.query.scmax) : "";
                                (n <= e && o >= e || n <= e && !o || !n && o >= e) && Object.assign(t, {
                                    text: "包含面議",
                                    checked: 1 === parseInt(this.query.scneg)
                                })
                            }
                            return t
                        }, set: function (t) {
                        }
                    }
                }, kn(["query"])),
                mounted: function () {
                },
                methods: In({
                    isSelectedCustomSalaryTags: function () {
                        var t = {
                            sr: this.query.sr,
                            scstrict: this.query.scstrict,
                            sctp: this.query.sctp,
                            scmin: this.query.scmin,
                            scmax: this.query.scmax
                        }, e = On(Ln, t, "scneg");
                        return e.length > 0
                    }, getQuery: function (t) {
                        var e = {sr: "", sctp: "", scmin: "", scmax: "", scstrict: "", scneg: ""};
                        return In({}, e, {}, Ln[t])
                    }, selectCustomSalaryOption: function (t) {
                        var e = this.getQuery(t[0].value[0]);
                        this.$emit(re, new wt(le.SELECT_OPTION, [{type: "sr", value: [e.sr]}, {
                            type: "sctp",
                            value: [e.sctp]
                        }, {type: "scmin", value: [e.scmin]}, {type: "scmax", value: [e.scmax]}, {
                            type: "scneg",
                            value: [e.scneg]
                        }])), this.$refs.inputSalaryField.resetInputs()
                    }, inputCustomSalaryOption: function (t) {
                        var e = {sr: "", sctp: "", scmin: "", scmax: "", scstrict: "", scneg: ""};
                        t.forEach((function (t) {
                            e[t.type] = t.value.join(",")
                        })), this.$store.commit("cSearch/".concat(gt), e), this.$emit(re, new wt(le.SELECT_OPTION, [{
                            type: "sr",
                            value: [e.sr]
                        }, {type: "sctp", value: [e.sctp]}, {type: "scmin", value: [e.scmin]}, {
                            type: "scmax",
                            value: [e.scmax]
                        }, {type: "scneg", value: [e.scneg]}]))
                    }, selectResultOption: function (t) {
                        var e = {scneg: ""};
                        t.forEach((function (t) {
                            e[t.type] = t.value.join(",")
                        })), this.$store.commit("cSearch/".concat(gt), e), this.$emit(re, new wt(le.SELECT_OPTION, [{
                            type: "scneg",
                            value: [e.scneg]
                        }]))
                    }
                }, En([gt]))
            }, Un = An, Dn = (n("8b25"), Object(j["a"])(Un, ke, Ee, !1, null, "19dd2f1b", null)), Mn = Dn.exports,
            Nn = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "search-sub-working-type"}, [n("form-row", {attrs: {title: t.OptionTitle.s9 + "："}}, [n("div", {staticClass: "search-sub-working-type__tags-col"}, [n("sub-filter-options", {
                    staticClass: "left d-inline-block position-relative",
                    attrs: {"multiple-select": !0, "selected-tags": t.s9Tags, category: "s9"},
                    on: {
                        "update:selectedTags": function (e) {
                            t.s9Tags = e
                        }, "update:selected-tags": function (e) {
                            t.s9Tags = e
                        }, selectSubFilter: t.selectSubFilter
                    }
                }), n("sub-filter-options", {
                    staticClass: "d-inline-block",
                    attrs: {category: "s5", "selected-tags": t.s5Tags},
                    on: {
                        "update:selectedTags": function (e) {
                            t.s5Tags = e
                        }, "update:selected-tags": function (e) {
                            t.s5Tags = e
                        }, selectSubFilter: t.selectSubFilter
                    }
                })], 1)]), n("form-row", {attrs: {title: t.OptionTitle.wktm + "："}}, [n("sub-filter-options", {
                    staticClass: "search-sub-working-type__tags-col",
                    attrs: {category: "wktm", "selected-tags": t.wktmTags},
                    on: {
                        "update:selectedTags": function (e) {
                            t.wktmTags = e
                        }, "update:selected-tags": function (e) {
                            t.wktmTags = e
                        }, selectSubFilter: t.selectSubFilter
                    }
                })], 1)], 1)
            }, Bn = [];

        function $n(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Vn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? $n(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $n(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var qn = Object(st["a"])("cSearch"), Gn = qn.mapState, Fn = qn.mapMutations, Hn = {
                name: "SearchSubTime",
                components: {FormRow: Be, SubFilterOptions: Xe},
                mixins: [Tn],
                data: function () {
                    return {OptionTitle: Qe}
                },
                computed: Vn({
                    s9Tags: {
                        get: function () {
                            return this.query.s9.split(",")
                        }, set: function (t) {
                            this[gt]({s9: t.join(",")})
                        }
                    }, s5Tags: {
                        get: function () {
                            return this.query.s5.split(",")
                        }, set: function (t) {
                            this[gt]({s5: t.join(",")})
                        }
                    }, wktmTags: {
                        get: function () {
                            return this.query.wktm.split(",")
                        }, set: function (t) {
                            this[gt]({wktm: t.join(",")})
                        }
                    }
                }, Gn(["query"])),
                methods: Vn({}, Fn([gt]))
            }, Jn = Hn, Kn = (n("8d2c"), Object(j["a"])(Jn, Nn, Bn, !1, null, "4390ac1b", null)), Qn = Kn.exports,
            Yn = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "search-sub-more"}, [n("form-row", {attrs: {title: t.OptionTitle.edu + "："}}, [n("sub-filter-options", {
                    attrs: {
                        category: "edu",
                        "multiple-select": !0,
                        "selected-tags": t.eduTags
                    }, on: {
                        "update:selectedTags": function (e) {
                            t.eduTags = e
                        }, "update:selected-tags": function (e) {
                            t.eduTags = e
                        }, selectSubFilter: t.selectSubFilter
                    }
                })], 1), n("form-row", {
                    attrs: {
                        title: t.OptionTitle.wf + "：",
                        align: "top"
                    }
                }, [n("sub-filter-options", {
                    attrs: {category: "wf", "multiple-select": !0, "selected-tags": t.wfTags},
                    on: {
                        "update:selectedTags": function (e) {
                            t.wfTags = e
                        }, "update:selected-tags": function (e) {
                            t.wfTags = e
                        }, selectSubFilter: t.selectSubFilter
                    }
                })], 1), n("form-row", {attrs: {title: t.OptionTitle.wt + "："}}, [n("sub-filter-options", {
                    attrs: {
                        category: "wt",
                        "multiple-select": !0,
                        "selected-tags": t.wtTags
                    }, on: {
                        "update:selectedTags": function (e) {
                            t.wtTags = e
                        }, "update:selected-tags": function (e) {
                            t.wtTags = e
                        }, selectSubFilter: t.selectSubFilter
                    }
                })], 1), n("form-row", {
                    attrs: {
                        title: t.OptionTitle.RoleStatus + "：",
                        align: "top"
                    }
                }, [n("sub-filter-options", {
                    attrs: {
                        category: "RoleStatus",
                        "multiple-select": !0,
                        "selected-tags": t.rostatusTags
                    }, on: {
                        "update:selectedTags": function (e) {
                            t.rostatusTags = e
                        }, "update:selected-tags": function (e) {
                            t.rostatusTags = e
                        }, selectSubFilter: t.onSelectRoleStatus
                    }
                })], 1), n("form-row", {attrs: {title: t.OptionTitle.dis_role + "："}}, [n("form-element-cinput-select", {
                    staticClass: "position-relative search-sub-more__dis-role",
                    attrs: {
                        "select-placeholder": "選擇身障類型",
                        "high-light": !1,
                        "select-value": t.disRoleTags,
                        "select-options": t.disRoleOptions,
                        "font-size-is-smaller": !0
                    },
                    on: {
                        "update:selectValue": function (e) {
                            t.disRoleTags = e
                        }, "update:select-value": function (e) {
                            t.disRoleTags = e
                        }
                    }
                })], 1)], 1)
            }, zn = [];

        function Zn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Xn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Zn(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Wn = Object(st["a"])("cSearch"), to = Wn.mapState, eo = Wn.mapMutations, no = {
                name: "SearchSubMore",
                components: {FormRow: Be, SubFilterOptions: Xe, FormElementCinputSelect: rn},
                mixins: [Tn],
                data: function () {
                    return {OptionTitle: Qe}
                },
                computed: Xn({
                    eduTags: {
                        get: function () {
                            return this.query.edu.split(",")
                        }, set: function (t) {
                            this[gt]({edu: t.join(",")})
                        }
                    }, wfTags: {
                        get: function () {
                            return this.query.wf.split(",")
                        }, set: function (t) {
                            this[gt]({wf: t.join(",")})
                        }
                    }, wtTags: {
                        get: function () {
                            return this.query.wt.split(",")
                        }, set: function (t) {
                            this[gt]({wt: t.join(",")})
                        }
                    }, rostatusTags: {
                        get: function () {
                            var t = {rostatus: this.query.rostatus.split(","), manage: this.query.manage.split(",")};
                            return vn(t)
                        }, set: function (t) {
                            var e = [], n = [], o = !0, a = !1, i = void 0;
                            try {
                                for (var s, r = t[Symbol.iterator](); !(o = (s = r.next()).done); o = !0) {
                                    var l = s.value;
                                    "4" !== l ? e = [].concat(Object(m["a"])(e), [wn[l].rostatus]) : n = [wn[l].manage]
                                }
                            } catch (c) {
                                a = !0, i = c
                            } finally {
                                try {
                                    o || null == r.return || r.return()
                                } finally {
                                    if (a) throw i
                                }
                            }
                            this[gt]({rostatus: e.join(","), manage: n.join(",")})
                        }
                    }, disRoleTags: {
                        get: function () {
                            return "99" !== this.query.dis_role ? this.disRoleOptions[this.query.dis_role] : this.disRoleOptions[this.disRoleOptions.length - 1]
                        }, set: function (t) {
                            var e = t.value;
                            this.selectSubFilter([{type: "dis_role", value: [e]}]), this[gt]({dis_role: e})
                        }
                    }, disRoleOptions: function () {
                        return [{
                            text: "選擇身障類型",
                            value: ""
                        }].concat(Object(m["a"])(Object.keys(ne).filter((function (t) {
                            return !isNaN(t)
                        })).map((function (t) {
                            return {text: ne[t], value: t}
                        }))))
                    }
                }, to(["query"])),
                methods: Xn({
                    onSelectRoleStatus: function (t) {
                        var e = [], n = [], o = !0, a = !1, i = void 0;
                        try {
                            for (var s, r = t[0].value[Symbol.iterator](); !(o = (s = r.next()).done); o = !0) {
                                var l = s.value;
                                "4" !== l ? e = [].concat(Object(m["a"])(e), [wn[l].rostatus]) : n = wn[l].manage
                            }
                        } catch (c) {
                            a = !0, i = c
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        this.$emit(re, new wt(le.SELECT_OPTION, [{type: "rostatus", value: e}, {type: "manage", value: n}]))
                    }
                }, eo([gt]))
            }, oo = no, ao = (n("57b3"), Object(j["a"])(oo, Yn, zn, !1, null, "3ae1438c", null)), io = ao.exports,
            so = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "search-sub-basic"}, [n("form-row", [n("sub-filter-options", {
                    attrs: {
                        category: t.category,
                        "selected-tags": t.selectedTags,
                        "multiple-select": t.multipleSelect,
                        "parameter-blacklist": t.parameterBlacklist
                    }, on: {
                        "update:selectedTags": function (e) {
                            t.selectedTags = e
                        }, "update:selected-tags": function (e) {
                            t.selectedTags = e
                        }, selectSubFilter: t.selectSubFilter
                    }
                })], 1)], 1)
            }, ro = [];

        function lo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function co(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? lo(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var uo = Object(st["a"])("cSearch"), po = uo.mapState, mo = uo.mapMutations, ho = {
            name: "SearchSubBasic",
            components: {FormRow: Be, SubFilterOptions: Xe},
            mixins: [Tn],
            props: {
                category: b["a"].string.isRequired.def(""),
                multipleSelect: b["a"].bool.def(!1),
                parameterBlacklist: b["a"].arrayOf(Number).def([])
            },
            computed: co({
                selectedTags: {
                    get: function () {
                        return this.query[this.category].split(",")
                    }, set: function (t) {
                        this[gt](Object(l["a"])({}, this.category, t.join(",")))
                    }
                }
            }, po(["query"])),
            methods: co({}, mo([gt]))
        }, bo = ho, fo = (n("d8ab"), Object(j["a"])(bo, so, ro, !1, null, "ef1a607a", null)), go = fo.exports;

        function yo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function _o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? yo(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yo(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var To = Object(st["a"])("cSearch"), So = To.mapState, Po = To.mapMutations, Co = {
                name: "SubFilterContentArea",
                components: {
                    SearchSubWorkingType: Qn,
                    SearchSubTransType: xe,
                    SearchSubSalary: Mn,
                    SearchSubMore: io,
                    SearchSubBasic: go
                },
                data: function () {
                    return {}
                },
                computed: _o({}, So(["enabledTab"])),
                methods: _o({}, Po([yt]), {
                    onSearchEvent: function (t) {
                        this.$emit(re, t)
                    }, closeTab: function () {
                        this.$emit(re, new wt(le.UPDATE_TAB, [{
                            type: "tab",
                            value: [null, this.enabledTab]
                        }])), this[yt](null)
                    }
                })
            }, Oo = Co, vo = (n("289c"), Object(j["a"])(Oo, ge, ye, !1, null, "6686bd28", null)), jo = vo.exports,
            wo = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("custom-map", {
                    ref: "cluster-map",
                    staticClass: "cluster-map",
                    attrs: {"map-setting": t.MAP_SETTING},
                    on: {
                        click: t.onMapClick,
                        dragend: t.onMapDragEnd,
                        zoomstart: t.onMapZoomStart,
                        zoomend: t.updateMetroIcon,
                        mapReady: t.onMapReady
                    }
                }, [t.showCircleAndMarker ? n("circle-layer", {
                    ref: "polygon-layer",
                    attrs: {"lat-lon": [t.currentMarker.lat, t.currentMarker.lon], map: t.map, dist: t.dist}
                }) : t._e(), n("cluster-layer", {
                    ref: "cluster-layer",
                    attrs: {"cluster-setting": t.CLUSTER_SETTING, clusters: t.clusterData},
                    on: {
                        clusterLayerReady: t.onClusterLayerReady,
                        singleClusterClick: t.onSingleClusterClick,
                        clusterClick: t.onClusterClick
                    }
                }), t.showCircleAndMarker ? n("marker-layer", {
                    ref: "current-marker-layer",
                    attrs: {
                        "lat-lon": [t.currentMarker.lat, t.currentMarker.lon],
                        "icon-setting": t.CURRENT_ICON_SETTING
                    }
                }) : t._e(), t.showCircleAndMarker ? n("marker-layer", {
                    ref: "temp-marker-layer",
                    attrs: {"lat-lon": [t.tempMarker.lat, t.tempMarker.lon], "icon-setting": t.TEMP_ICON_SETTING}
                }) : t._e(), n("div", {staticClass: "d-none d-md-flex cluster-map__range position-fixed bg-white align-items-center t4 p-3 rounded"}, [n("div", {staticClass: "cluster-map__range-status mr-2"}), n("p", {
                    staticClass: "m-0",
                    domProps: {textContent: t._s(t.searchRangeText)}
                })]), t.searchHintText ? n("div", {
                    staticClass: "text-center bg-gray-deep-dark text-white px-4 position-absolute m-0 cluster-map__hint",
                    style: t.searchHintPosition,
                    domProps: {textContent: t._s(t.searchHintText)}
                }) : t._e(), t.isMapMove ? n("button", {
                    staticClass: "text-center bg-white py-2 px-3 text-gray-deep-dark position-absolute cluster-map__research-btn",
                    attrs: {"data-gtm-search": "重新搜尋此區域"},
                    domProps: {textContent: t._s("搜尋視窗範圍")},
                    on: {click: t.reSearchJobs}
                }) : t._e(), n("cluster-layer", {
                    attrs: {
                        "cluster-setting": t.METRO_CLUSTER_SETTING,
                        clusters: t.metroClusterData
                    }, on: {clusterLayerReady: t.onMetroClusterLayerReady, singleClusterClick: t.onMetroMarkerClick}
                })], 1)
            }, Lo = [], Ro = (n("4ec9"), n("cd1f"), n("60dc"), n("e11e")), Io = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {style: t.mapSize, attrs: {id: "map"}}, [t._t("default")], 2)
            }, xo = [];
        n("6cc5");

        function ko(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Eo(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ko(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Ao = {zoom: 14, center: [25.033964, 121.564468], maxZoom: 18, minZoom: 7}, Uo = {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            options: {attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributor"}
        }, Do = ["mousedown", "dragstart", "dragend", "click", "zoom", "zoomstart", "zoomend", "movestart"], Mo = {
            props: {
                mapHeight: b["a"].string.def(""),
                mapWidth: b["a"].string.def(""),
                mapSetting: b["a"].object.def(Eo({}, Ao)),
                layerSetting: b["a"].object.def(Eo({}, Uo))
            }, data: function () {
                return {map: null, tileLayer: null}
            }, computed: {
                mapSize: function () {
                    var t = {};
                    return this.mapHeight && (t.height = this.mapHeight), this.mapWidth && (t.width = this.mapWidth), t
                }
            }, mounted: function () {
                this.map = new Ro["map"]("map", this.mapSetting), this.tileLayer = new Ro["tileLayer"](this.layerSetting.url, this.layerSetting.options), this.tileLayer.addTo(this.map), this.map.invalidateSize(), this.map.attributionControl.setPosition("bottomleft"), this.bindMapEmitEvent(), this.$emit("mapReady", this.map)
            }, methods: {
                bindMapEmitEvent: function () {
                    var t = this;
                    this.map instanceof Ro["Map"] && Do.forEach((function (e) {
                        t.map.on(e, (function (n) {
                            return t.$emit(e, n)
                        }))
                    }))
                }
            }
        }, No = Mo, Bo = Object(j["a"])(No, Io, xo, !1, null, null, null), $o = Bo.exports, Vo = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "d-none"})
        }, qo = [];

        function Go(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Fo(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Go(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Go(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Ho = {color: "#4e91ff", fillColor: "#4e91ff", weight: 2, fillOpacity: .12}, Jo = {
            props: {
                latLon: b["a"].array.def([]),
                dist: b["a"].number.def(0),
                circleSetting: b["a"].object.def(Fo({}, Ho)),
                map: b["a"].object.def(null)
            }, data: function () {
                return {circleLayer: null}
            }, watch: {
                latLon: {
                    deep: !0, handler: function (t, e) {
                        if (this.map && this.map instanceof Ro["Map"]) {
                            var n = Object(Sn["a"])(t, 2), o = n[0], a = n[1];
                            null != o && null != a && null != this.dist && (this.circleLayer ? this.circleLayer.setLatLng(t) : this.drawCircle(t, this.dist))
                        }
                    }
                }, dist: {
                    handler: function (t, e) {
                        if (this.map && this.map instanceof Ro["Map"]) {
                            var n = Object(Sn["a"])(this.latLon, 2), o = n[0], a = n[1];
                            null != t && null != o && null != a && (this.circleLayer ? this.circleLayer.setRadius(1e3 * t) : this.drawCircle(this.latLon, t))
                        }
                    }
                }
            }, methods: {
                drawCircle: function (t, e) {
                    this.circleLayer = Object(Ro["circle"])(t, {radius: 1e3 * e}, this.circleSetting).addTo(this.map)
                }
            }
        }, Ko = Jo, Qo = Object(j["a"])(Ko, Vo, qo, !1, null, null, null), Yo = Qo.exports, zo = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "d-none"})
        }, Zo = [];
        n("2573"), n("8243");

        function Xo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Wo(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Xo(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ta = {
            iconCreateFunction: function () {
            }, spiderfyOnMaxZoom: !1, zoomToBoundsOnClick: !1, showCoverageOnHover: !1, singleMarkerMode: !1
        }, ea = {
            props: {clusters: b["a"].array.def([]), clusterSetting: b["a"].object.def(Wo({}, ta))},
            data: function () {
                return {clusterLayer: null}
            },
            watch: {
                clusters: {
                    deep: !0, handler: function (t) {
                        var e = this;
                        this.$parent.map && this.$parent.map instanceof Ro["Map"] && this.clusterLayer && (this.clearLastClusterLayer(), t.forEach((function (t) {
                            var n = Object(Ro["marker"])([t.lat, t.lon], Wo({}, t.options));
                            n.on("click", (function (t) {
                                return e.$emit("singleClusterClick", t)
                            })), e.clusterLayer.addLayer(n)
                        })), this.clusterLayer.on("clusterclick", (function (t) {
                            e.$emit("clusterClick", t)
                        })), this.$parent.map.addLayer(this.clusterLayer))
                    }
                }
            },
            created: function () {
                this.clusterLayer = Object(Ro["markerClusterGroup"])(Wo({}, this.clusterSetting))
            },
            mounted: function () {
                this.clusterLayer && this.$emit("clusterLayerReady", this.clusterLayer)
            },
            methods: {
                clearLastClusterLayer: function () {
                    this.clusterLayer && this.clusterLayer.getLayers().length > 0 && (this.clusterLayer.clearLayers(), this.$parent.map.removeLayer(this.clusterLayer))
                }
            }
        }, na = ea, oa = Object(j["a"])(na, zo, Zo, !1, null, null, null), aa = oa.exports, ia = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "d-none"})
        }, sa = [];

        function ra(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function la(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ra(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ca = {}, ua = {
            props: {
                latLon: b["a"].any.def([]),
                iconSetting: b["a"].object.def({}),
                markerSetting: b["a"].object.def(la({}, ca))
            }, data: function () {
                return {markerLayer: null}
            }, computed: {
                calcMarkerSetting: function () {
                    return g()(this.iconSetting) ? la({}, this.markerSetting) : la({icon: this.iconSetting}, this.markerSetting)
                }
            }, watch: {
                latLon: {
                    deep: !0, handler: function (t) {
                        this.$parent.map && this.$parent.map instanceof Ro["Map"] && (null !== t[0] || null !== t[1] ? this.markerLayer ? this.markerLayer.setLatLng(t) : this.markerLayer = Object(Ro["marker"])(t, la({}, this.calcMarkerSetting)).addTo(this.$parent.map) : this.markerLayer && (this.$parent.map.removeLayer(this.markerLayer), this.markerLayer = null))
                    }
                }
            }
        }, pa = ua, ma = Object(j["a"])(pa, ia, sa, !1, null, null, null), da = ma.exports;

        function ha(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ba(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ha(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ha(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var fa = ba({}, Object({
            VUE_APP_ENV: "production",
            VUE_APP_GOOGLE_MAP_KEY: "AIzaSyCEtx5-CJR_85qrCaFDEWzsUtVVi-byD58",
            VUE_APP_DOMAIN: "104",
            VUE_APP_COOKIE_SHARED_DOMAIN: ".104.com.tw",
            VUE_APP_DOMAIN_URL: "//www.104.com.tw/",
            VUE_APP_PRO_URL: "//vip.104.com.tw/",
            VUE_APP_LOGIN_URL: "//login.104.com.tw/login",
            VUE_APP_LOGOUT_URL: "//login.104.com.tw/logout",
            VUE_APP_MY104_URL: "//pda.104.com.tw/",
            VUE_APP_MY104_API: "//pda.104.com.tw/",
            VUE_APP_STATIC_URL: "//static.104.com.tw/",
            VUE_APP_CDN_URL: "//cdn.104.com.tw/",
            VUE_APP_CDN_STATIC_URL: "//cdn.104.com.tw/static/",
            VUE_APP_AUTOCOMPLETE_API: "//pda.104.com.tw/",
            VUE_APP_AUTOCOMPLETE_MORE_API: "//www.104.com.tw/company/search/",
            VUE_APP_AUTOCOMPLETE_CUST_API: "//www.104.com.tw/company/",
            VUE_APP_ACCOUNT_URL: "//accounts.104.com.tw/",
            VUE_APP_CINDEX_API: "//www.104.com.tw/",
            VUE_APP_CMAIN_API: "https://www.104.com.tw/jobs/main/",
            VUE_APP_CMAIN_API_ORIGIN: "https://www.104.com.tw/",
            VUE_APP_CAPPLY_API: "https://www.104.com.tw/jobs/apply/",
            VUE_APP_RESUME_CLINIC_URL: "//resume-clinic.104.com.tw/",
            VUE_APP_GIVER_URL: "//giver.104.com.tw/",
            VUE_APP_REVIEWS_URL: "//reviews.104.com.tw/",
            VUE_APP_REVIEWS_PROXY_API: "//be.reviews.104.com.tw/api/companies/",
            VUE_APP_REVIEWS_API: "//be.reviews.104.com.tw/api/companies/",
            VUE_APP_MOBILE_DOMAIN_URL: "https://m.104.com.tw/",
            VUE_APP_TIME4JOBS_API: "https://time4jobs.104.com.tw/ajax/",
            VUE_APP_TIME4JOBS_URL: "https://time4jobs.104.com.tw/",
            VUE_APP_104I_PROXY_API: "https://www.104.com.tw/jb/104i/",
            VUE_APP_104I_API: "https://www.104.com.tw/jb/104i/",
            VUE_APP_BLOG_URL: "https://blog.104.com.tw/",
            VUE_APP_BLOG_PROXY_API: "https://blog.104.com.tw/",
            VUE_APP_BLOG_API: "https://blog.104.com.tw/",
            VUE_APP_GIVER_PROXY_API: "https://api.giver.104dc.com/api/",
            VUE_APP_GIVER_API: "https://api.giver.104dc.com/api/",
            VUE_APP_FRESH_PROXY_API: "https://fresh.104.com.tw/",
            VUE_APP_FRESH_API: "https://freshman.104.com.tw/",
            VUE_APP_FRESH_URL: "https://fresh.104.com.tw/",
            VUE_APP_EBAWARDS_URL: "https://eb-awards.events.104.com.tw/",
            VUE_APP_SEMICONDUCTOR_URL: "https://semiconductor.events.104.com.tw/",
            VUE_APP_ADSMART_COMPONENT: "https://msc.adsmart.104.com.tw/",
            VUE_APP_ADSMART_COMPONENT_VERSION: "3/5/0/",
            VUE_APP_CATEGORY_PROXY_API: "https://www.104.com.tw/jb/104i/Keyword2Category/JobCat/",
            VUE_APP_CATEGORY_API: "https://www.104.com.tw/jb/104i/Keyword2Category/JobCat/",
            VUE_APP_NOTIFICATION_API: "//notification.104.com.tw/",
            VUE_APP_CRM_URL: "https://104.widget.custhelp.com/",
            VUE_APP_NABI_URL: "https://nabi.104.com.tw/",
            VUE_APP_SENIOR_URL: "https://senior.104.com.tw/",
            VUE_APP_SENIOR_API: "https://api.senior.104.com.tw/",
            VUE_APP_HEYBAR_URL: "https://heybar.an9.104.com.tw/",
            VUE_APP_PROFILE_URL: "//profile.104.com.tw/",
            VUE_APP_PROFILE_API: "//api.profile.104.com.tw/",
            VUE_APP_PROFILE_LOGIN_URL: "//login.104.com.tw/personal-brand/login",
            VUE_APP_PROFILE_LOGOUT_URL: "//login.104.com.tw/personal-brand/logout",
            VUE_APP_TANJI_URL: "https://tanji.104.com.tw/",
            VUE_APP_GUIDE_URL: "https://guide.104.com.tw/",
            VUE_APP_MARKETING_URL: "https://marketing.pro.104.com.tw/",
            VUE_APP_ORI_DOC: "https://ori.doc.104.com.tw/",
            VUE_APP_ACTIVITY_URL: "https://meet.104.com.tw/",
            VUE_APP_PRIVACY_URL: "https://privacy.104.com.tw/",
            VUE_APP_MOBILE_URL: "https://mobile.104.com.tw/",
            VUE_APP_SERVICE_INDUSTRY_URL: "https://serviceindustry.events.104.com.tw/",
            VUE_APP_STUDENT_URL: "https://student.104.com.tw/",
            VUE_APP_COLLEGE_URL: "https://college.104.com.tw/",
            VUE_APP_TALENT_URL: "https://talent.104.com.tw/",
            VUE_APP_BEAGIVER_URL: "https://beagiver.104.com.tw/",
            VUE_APP_CAREER_URL: "https://career.104.com.tw/",
            VUE_APP_EVENTS_URL: "https://events.104.com.tw/",
            VUE_APP_KAD_EVENTS_URL: "https://kad.events.104.com.tw/",
            VUE_APP_JOB_NOTIFY_API: "//job-notify.104.com.tw/",
            VUE_APP_BUBBLE_API: "//bubble.104.com.tw/",
            VUE_APP_EXPATS_URL: "//go.104.com.tw/",
            VUE_APP_AI_URL: "https://ai.104.com.tw/",
            VUE_APP_CHATBOT_WC_PATH: "https://cdn.104.com.tw/lib/chatbot/1.0.25/wc-104-chatbot.js",
            VUE_APP_LIB_CHAT_PATH: "https://cdn.104.com.tw/lib/chat/1.0.29/Lib104_Chat.umd.min.js",
            NODE_ENV: "production",
            BASE_URL: "//cdn.104.com.tw/time4jobs/"
        }), {dev: "development", lab: "lab", staging: "staging", prod: "production"});
        n("1c35");

        function ga(t) {
            return t ? "".concat(parseInt(t, 36)) : ""
        }

        function ya(t) {
            return t ? (+t).toString(36) : ""
        }

        var _a, Ta = n("96c6"), Sa = n("90e5"), Pa = n("b2dc"), Ca = n("8dd8"), Oa = n("2322");

        function va(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ja(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? va(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : va(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var wa = {zoom: 15, center: [25.033964, 121.564468], maxZoom: 18, minZoom: 7}, La = {
                spiderfyOnMaxZoom: !1,
                zoomToBoundsOnClick: !1,
                showCoverageOnHover: !1,
                singleMarkerMode: !0,
                maxClusterRadius: 50
            }, Ra = Object(Ro["icon"])({
                iconUrl: "".concat(fa.VUE_APP_CDN_STATIC_URL, "svgs/icon_current_marker.svg"),
                className: "custom-icon",
                iconSize: [50, 50],
                iconAnchor: [25, 50]
            }), Ia = Object(Ro["icon"])({
                iconUrl: "".concat(fa.VUE_APP_CDN_STATIC_URL, "svgs/icon_temp_marker.svg"),
                className: "custom-icon",
                iconSize: [50, 50],
                iconAnchor: [25, 50]
            }), xa = {
                spiderfyOnMaxZoom: !1,
                zoomToBoundsOnClick: !1,
                showCoverageOnHover: !1,
                singleMarkerMode: !0,
                maxClusterRadius: 1,
                disableClusteringAtZoom: 18
            }, ka = {TRTC: "taipei", TYMC: "taoyuan", KRTC: "kaohsiung", TZTC: "taichung"},
            Ea = {TRTC: "台北捷運", TYMC: "桃園捷運", KRTC: "高雄捷運", TZTC: "台中捷運"}, Aa = {
                name: "ClusterMap",
                components: {CustomMap: $o, CircleLayer: Yo, MarkerLayer: da, ClusterLayer: aa},
                props: {dist: b["a"].number.def(0)},
                data: function () {
                    return {
                        CLUSTER_SETTING: La,
                        MAP_SETTING: wa,
                        CURRENT_ICON_SETTING: Ra,
                        TEMP_ICON_SETTING: Ia,
                        METRO_CLUSTER_SETTING: xa,
                        map: null,
                        markerCluster: null,
                        markerGruopLength: 0,
                        temp: {
                            clickedMarkerSnapShot: [],
                            hoverMarkerLayer: null,
                            hoverMarker: null,
                            allMarkerData: new Map
                        },
                        isMobile: !1,
                        isMapMove: !1,
                        prevMapCenter: {lat: "", lon: ""},
                        searchHintText: "",
                        metroData: [],
                        metroShow: "",
                        metroCluster: null
                    }
                },
                computed: ja({}, Object(st["d"])("joblist", ["getJoblist"]), {}, Object(st["f"])("joblist", ["jobNoList"]), {}, Object(st["f"])("ui", ["jobListStep", "userTouchCluster", "mapClickAble"]), {}, Object(st["f"])("apiIsoline", {
                    nearMetro: function (t) {
                        return t.data.nearMetro
                    }
                }), {}, Object(st["f"])("cIsoline", {
                    isolineQuery: function (t) {
                        return t.query
                    }
                }), {}, Object(st["f"])("marker", {
                    currentMarker: function (t) {
                        return t.currentMarker
                    }, tempMarker: function (t) {
                        return t.tempMarker
                    }
                }), {}, Object(st["f"])("cSearch", {
                    cSearchLatLon: function (t) {
                        return {lat: t.query.lat, lon: t.query.lon}
                    }, cSearchIsLookingAround: function (t) {
                        return t.query.isLookingAround
                    }
                }), {}, Object(st["f"])("searchmain", ["locationInput"]), {
                    filterMarker: function () {
                        var t = ga(this.userTouchCluster.jobNo[this.userTouchCluster.type]);
                        return this.temp.allMarkerData.get(t)
                    }, searchHintPosition: function () {
                        if (this.isMobile) {
                            var t = this.$parent.$refs["joblist-mobile"].jobListPosition,
                                e = this.jobListStep.now > 0 ? 0 : this.jobListStep.now, n = 40, o = 20;
                            return {top: "".concat(t[e] - 1 * Ta["mobileTopGap"] - (o + n), "px")}
                        }
                        return {top: this.isMapMove ? "50px" : "24px"}
                    }, searchRangeText: function () {
                        var t = Ht[this.isolineQuery.transType];
                        return this.nearMetro || "5" !== this.isolineQuery.transType || (t = "走路"), "".concat(t + this.isolineQuery.time, "分鐘可達範圍")
                    }, jobList: function () {
                        return this.getJoblist()
                    }, clusterData: function () {
                        var t = this;
                        return this.jobList.map((function (e) {
                            return {
                                lat: e.lat,
                                lon: e.lon,
                                options: {
                                    markerId: e.jobNo,
                                    isClick: t.temp.clickedMarkerSnapShot.indexOf(e.jobNo) > -1,
                                    isHover: !1
                                }
                            }
                        }))
                    }, metroClusterData: function () {
                        return this.metroData.map((function (t) {
                            return {
                                lat: t.StationPosition.PositionLat,
                                lon: t.StationPosition.PositionLon,
                                options: {name: t.StationName.substr(2), metroCode: t.StationUID.substr(0, 4)}
                            }
                        }))
                    }, showCircleAndMarker: function () {
                        return !this.cSearchIsLookingAround || 0 == this.cSearchIsLookingAround
                    }
                }),
                watch: {
                    userTouchCluster: {
                        deep: !0, handler: function (t) {
                            var e = t.type;
                            "mouseover" === e ? this.filterMarker ? this.onMarkerHover(this.filterMarker) : this.clearLastHoverMarker() : "mouseclick" === e && this.map.setView(this.filterMarker._latlng)
                        }
                    }
                },
                created: function () {
                    var t = this;
                    this.CLUSTER_SETTING.iconCreateFunction = function (e) {
                        for (var n = "root-click-children-cluster", o = "", a = e.getAllChildMarkers(), i = a.length > 99 ? 12 : 14, s = 0; s < a.length; s++) a[s].options.isClick && a.length === t.markerGruopLength ? n = "root-click-cluster" : a[s].options.isClick || (n = "custom-cluster"), a[s].options.isMouseOver && (o = "mouse-over"), t.temp.allMarkerData.set(a[s].options.markerId, a[s]);
                        return Object(Ro["divIcon"])({
                            html: '<div\n                 data-gtm-joblist="點擊cluster"\n                 style="font-size:'.concat(i, 'px"\n               >\n                ').concat(a.length, "筆\n               </div>"),
                            className: "".concat(n, " ").concat(o),
                            iconSize: [44, 44],
                            iconAnchor: [22, 44]
                        })
                    }, this.METRO_CLUSTER_SETTING.iconCreateFunction = function (e) {
                        var n = e.getAllChildMarkers()[0].options.name, o = e.getAllChildMarkers()[0].options.metroCode,
                            a = 12 * n.length + 4 + 20;
                        return Object(Ro["divIcon"])({
                            html: '\n          <div\n           class="d-flex"\n           data-gtm-joblist="點擊圖標"\n           data-nosnippet\n          >\n            <img\n              width="20"\n              height="20"\n              src="'.concat(fa.VUE_APP_CDN_STATIC_URL, "svgs/icon_metro_").concat(ka[o], '.svg"\n            >\n            <span class="ml-1 text-nowrap text-gray-deep-dark font-weight-bold">').concat(n, "</span>\n          </div>"),
                            className: "metro-icon ".concat(t.metroShow),
                            iconSize: [a, 20],
                            iconAnchor: [a / 2, 20]
                        })
                    };
                    var e = JSON.parse(localStorage.getItem("lastSearch")) || this.$route.query || {}, n = e.lat, o = e.lon;
                    if (n && o) {
                        this.MAP_SETTING = ja({}, this.MAP_SETTING, {center: [1 * n, 1 * o]});
                        var a = this.$route.query.isLookingAround && 1 == this.$route.query.isLookingAround;
                        a && (this.MAP_SETTING.zoom = 14)
                    }
                },
                mounted: function () {
                    window.addEventListener("resize", this.onResize), this.onResize(), this.metroData = [].concat(Object(m["a"])(Sa), Object(m["a"])(Pa), Object(m["a"])(Ca), Object(m["a"])(Oa)), this.$nextTick(this.updateMetroIcon)
                },
                beforeDestroy: function () {
                    window.removeEventListener("resize", this.onResize)
                },
                methods: ja({}, Object(st["e"])("joblist", ["setJobNoList", "setJobListPage"]), {}, Object(st["e"])("ui", ["setJobListStep"]), {}, Object(st["e"])("marker", ["setMarkerPosition"]), {}, Object(st["e"])("cSearch", {cSearchUpdateQuery: gt}), {}, Object(st["e"])("searchmain", ["setLocationInput"]), {
                    onMapReady: function (t) {
                        this.map = t, this.prevZoomLevel = this.map.getZoom()
                    }, onClusterLayerReady: function (t) {
                        this.markerCluster = t
                    }, onMetroClusterLayerReady: function (t) {
                        this.metroCluster = t
                    }, onMapClick: function (t) {
                        var e = t.latlng;
                        if (this.mapClickAble) {
                            var n = {lat: e.lat.toFixed(5), lon: e.lng.toFixed(5)};
                            this.setMarkerPosition({
                                type: "current",
                                position: n
                            }), this.setLocationInput("".concat(n.lat, ",").concat(n.lon))
                        }
                    }, onMapDragEnd: function () {
                        var t = this.map.distance(this.map.getCenter(), this.currentMarker);
                        this.isMapMove = t > 0
                    }, onMapZoomStart: function () {
                        if (!Cn()(this.prevMapCenter, this.cSearchLatLon)) return this.prevMapCenter = this.cSearchLatLon, void (this.isMapMove = !1);
                        this.isMapMove = !0
                    }, onClusterClick: function (t) {
                        this.clearLastClickMarker();
                        var e = t.layer.getAllChildMarkers();
                        this.markerGruopLength = e.length, e.forEach((function (t) {
                            return t.options.isClick = !0
                        })), this.markerCluster.refreshClusters(t.layer), this.temp.markerLayer = t.layer, this.temp.clickedMarkerSnapShot = e.map((function (t) {
                            return t.options.markerId
                        })), this.setJobNoList(e.map((function (t) {
                            return t.options.markerId
                        }))), this.$root.resetJobList()
                    }, onSingleClusterClick: function (t) {
                        this.clearLastClickMarker(), this.markerGruopLength = 1, t.target.options.isClick = !0, this.markerCluster.refreshClusters(t.target), this.temp.markerLayer = t.target, this.temp.clickedMarkerSnapShot = [t.target.options.markerId], this.setJobNoList([t.target.options.markerId]), this.$root.resetJobList()
                    }, clearLastClickMarker: function () {
                        this.markerCluster._topClusterLevel && (this.temp.allMarkerData.forEach((function (t) {
                            t.options.isClick = !1, t.options.isMouseOver = !1
                        })), this.markerCluster.refreshClusters())
                    }, onMarkerHover: function (t) {
                        this.clearLastHoverMarker(), t.options.isMouseOver = !0, this.markerCluster.refreshClusters(t.__parent), this.temp.hoverMarker = t, this.temp.hoverMarkerLayer = t.__parent
                    }, clearLastHoverMarker: function () {
                        this.temp.hoverMarker && (this.temp.hoverMarker.options.isMouseOver = !1), this.temp.hoverMarkerLayer && this.markerCluster.refreshClusters(this.temp.hoverMarkerLayer)
                    }, onResize: function () {
                        this.isMobile = this.$root.isMobile()
                    }, onMetroMarkerClick: function (t) {
                        this.setLocationInput(Ea[t.target.options.metroCode] + t.target.options.name)
                    }, reSearchJobs: function () {
                        this.$root.resetAll();
                        var t = this.map.getCenter();
                        this.cSearchUpdateQuery({
                            cacheId: "",
                            dist: this.dist,
                            lat: "".concat(t.lat.toFixed(5)),
                            lon: "".concat(t.lng.toFixed(5))
                        }), this.prevMapCenter = this.cSearchLatLon, this.$root.getJobs(!0), this.isMapMove = !1
                    }, updateSearchHintText: function () {
                        var t = this;
                        clearTimeout(_a), this.nearMetro || "5" !== this.isolineQuery.transType || (this.searchHintText = "此地區沒有捷運，目前搜尋走路".concat(this.isolineQuery.time, "分鐘可達範圍")), _a = setTimeout((function () {
                            return t.searchHintText = ""
                        }), 3e3)
                    }, flyToApiLatLonBounds: function () {
                        this.map.flyTo([this.currentMarker.lat, this.currentMarker.lon])
                    }, updateMetroIcon: function () {
                        var t = this.metroShow;
                        this.metroShow = this.map.getZoom() >= 15 ? "d-block" : "d-none", this.metroCluster && t !== this.metroShow && this.metroCluster.refreshClusters()
                    }
                })
            }, Ua = Aa, Da = (n("429e"), Object(j["a"])(Ua, wo, Lo, !1, null, "5ff8a214", null)), Ma = Da.exports,
            Na = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "sub-filter-mobile-content-area"}, [7 === t.enabledTab ? n("search-sub-mobile-trans-type", t._g({}, t.$listeners)) : t._e(), 8 === t.enabledTab ? n("search-sub-mobile-basic", t._g({
                    attrs: {
                        "close-tab": 8,
                        category: "ro"
                    }
                }, t.$listeners)) : t._e(), 5 == t.enabledTab ? n("search-sub-mobile-more", t._g({}, t.$listeners)) : t._e()], 1)
            }, Ba = [], $a = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("search-sub-mobile-layout", {
                    staticClass: "bg-white",
                    attrs: {title: "通勤範圍", "confirm-btn": {text: "確定", disabled: !1}},
                    on: {confirmBtnClick: t.confirmBtnClick, close: t.close}
                }, [n("template", {slot: "content"}, [n("search-sub-trans-type", t._g({
                    ref: "sub-trans-type",
                    staticClass: "p-3",
                    attrs: {category: "transType", "is-mobile": !0}
                }, t.$listeners))], 1)], 2)
            }, Va = [], qa = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "search-sub-mobile-popup position-fixed h-100 w-100"}, [t.showHeader ? n("div", {staticClass: "search-sub-mobile-popup__header"}, [n("div", {staticClass: "serach-sub-popup__header-title p-3 text-center t3 font-weight-bold"}, [t._v(" " + t._s(t.title) + " "), n("i", {
                    staticClass: "jb_icon_delete position-absolute t1 mx-4 my-2 text-gray-darker",
                    on: {click: t.close}
                })])]) : t._e(), n("div", {staticClass: "search-sub-mobile-popup__content"}, [t._t("content")], 2), t.hideFooterBtn ? t._e() : n("div", {staticClass: "search-sub-mobile-popup__footer d-flex py-3 px-4 w-100 bg-white align-items-center"}, [t.cancelBtn ? n("button", t._b({
                    staticClass: "btn btn-outline-light btn-block btn-lg mr-4 flex-grow-1",
                    attrs: {disabled: t.cancelBtn.disabled},
                    domProps: {textContent: t._s(t.cancelBtn.text)},
                    on: {click: t.cancelBtnClick}
                }, "button", t.cancelBtn.gtm, !1)) : t._e(), n("button", t._b({
                    staticClass: "btn btn-secondary btn-block btn-lg m-0 flex-grow-1",
                    domProps: {textContent: t._s(t.confirmBtn.text)},
                    on: {click: t.confirmBtnClick}
                }, "button", t.confirmBtn.gtm, !1))])])
            }, Ga = [], Fa = {
                props: {
                    title: b["a"].string.def(""),
                    showHeader: b["a"].bool.def(!0),
                    cancelBtn: b["a"].shape({
                        text: b["a"].string.def(""),
                        gtm: b["a"].object.def({}),
                        disabled: b["a"].bool.def(!1)
                    }),
                    confirmBtn: b["a"].shape({
                        text: b["a"].string.def(""),
                        gtm: b["a"].object.def({}),
                        disabled: b["a"].bool.def(!1)
                    }),
                    hideFooterBtn: b["a"].bool.def(!1)
                }, methods: {
                    cancelBtnClick: function () {
                        this.$emit("cancelBtnClick")
                    }, confirmBtnClick: function () {
                        this.$emit("confirmBtnClick")
                    }, close: function () {
                        this.$emit("close")
                    }
                }
            }, Ha = Fa, Ja = (n("0a4b"), Object(j["a"])(Ha, qa, Ga, !1, null, "5fced75a", null)), Ka = Ja.exports;

        function Qa(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ya(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Qa(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qa(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var za = Object(st["a"])("cSearch"), Za = za.mapMutations, Xa = {
            components: {SearchSubTransType: xe, SearchSubMobileLayout: Ka}, mounted: function () {
                this.$refs["sub-trans-type"].syncStoreData()
            }, methods: Ya({}, Za([yt]), {
                close: function () {
                    this[yt](null), this.$emit(re, new wt(le.UPDATE_TAB, [{type: "tab", value: [null, 7]}]))
                }, confirmBtnClick: function () {
                    this[yt](null), this.$emit(re, new wt(le.SUBMIT_MOBILE_TRANSFER))
                }
            })
        }, Wa = Xa, ti = Object(j["a"])(Wa, $a, Va, !1, null, null, null), ei = ti.exports, ni = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("search-sub-mobile-layout", {
                staticClass: "search-sub-mobile bg-gray-score",
                attrs: {
                    title: "更多條件",
                    "confirm-btn": {text: "確定", disabled: !1},
                    "cancel-btn": {text: "清空條件", disabled: !t.getMobileSubFilterMoreStatus}
                },
                on: {close: t.close, confirmBtnClick: t.onClickSubmit, cancelBtnClick: t.onClickClean}
            }, [n("template", {slot: "content"}, [n("div", {staticClass: "search-sub-mobile__input p-3 bg-white"}, [n("form-element-cinput-searchsingle", {
                staticClass: "popup-more__input position-relative",
                attrs: {
                    "select-value": t.keywordInput,
                    "select-options": t.keywordOptions,
                    "select-is-loading": t.cmultiselectSearching,
                    "select-placeholder": "關鍵字(職稱/公司/技能...)",
                    "input-max-length": 50
                },
                on: {
                    "update:selectValue": function (e) {
                        t.keywordInput = e
                    }, "update:select-value": function (e) {
                        t.keywordInput = e
                    }, inputEnter: t.onClickSubmit, selectSearchChange: t.getKeyword
                }
            })], 1), n("div", {staticClass: "search-sub-mobile__filter"}, [n("form-row-mobile", {
                attrs: {
                    "is-show": "isnew" === t.nowSub,
                    title: t.OptionTitle.isnew,
                    "select-text": t.parameterMapList.isnew
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("isnew")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {category: "isnew", "is-mobile": !0, "selected-tags": t.isnewTags},
                on: {
                    "update:selectedTags": function (e) {
                        t.isnewTags = e
                    }, "update:selected-tags": function (e) {
                        t.isnewTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "s9" === t.nowSub,
                    title: t.OptionTitle.s9,
                    "select-text": t.parameterMapList.s9
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("s9")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {
                    category: "s9",
                    "multiple-select": !0,
                    "is-mobile": !0,
                    "selected-tags": t.s9Tags
                }, on: {
                    "update:selectedTags": function (e) {
                        t.s9Tags = e
                    }, "update:selected-tags": function (e) {
                        t.s9Tags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "s5" === t.nowSub,
                    title: t.OptionTitle.s5,
                    "select-text": t.parameterMapList.s5
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("s5")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {category: "s5", "is-mobile": !0, "selected-tags": t.s5Tags},
                on: {
                    "update:selectedTags": function (e) {
                        t.s5Tags = e
                    }, "update:selected-tags": function (e) {
                        t.s5Tags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "wktm" === t.nowSub,
                    title: t.OptionTitle.wktm,
                    "select-text": t.parameterMapList.wktm
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("wktm")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {category: "wktm", "is-mobile": !0, "selected-tags": t.wktmTags},
                on: {
                    "update:selectedTags": function (e) {
                        t.wktmTags = e
                    }, "update:selected-tags": function (e) {
                        t.wktmTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "sr" === t.nowSub,
                    "select-text": t.customSalary,
                    title: t.OptionTitle.CustomSalary
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("sr")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {
                    category: "CustomSalary",
                    "is-mobile": !0,
                    "selected-tags": t.customSalaryTags
                }, on: {
                    "update:selectedTags": function (e) {
                        t.customSalaryTags = e
                    }, "update:selected-tags": function (e) {
                        t.customSalaryTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            }), n("div", {staticClass: "border-bottom border-top border-white py-4 mb-4"}, [n("div", {
                staticClass: "mb-4",
                domProps: {textContent: t._s("自訂薪資")}
            }), n("custom-salary", {
                ref: "inputSalaryField",
                attrs: {"is-mobile": !0, category: "sctp", "salary-inputed-tag-text": t.inputedSalaryTagText},
                on: {
                    "update:salaryInputedTagText": function (e) {
                        t.inputedSalaryTagText = e
                    },
                    "update:salary-inputed-tag-text": function (e) {
                        t.inputedSalaryTagText = e
                    },
                    selectChange: t.inputCustomSalaryOption,
                    inputChange: t.inputCustomSalaryOption,
                    removeInputedTag: t.inputCustomSalaryOption
                }
            })], 1), t._e()], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "wf" === t.nowSub,
                    title: t.OptionTitle.wf,
                    "select-text": t.parameterMapList.wf
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("wf")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {
                    category: "wf",
                    "multiple-select": !0,
                    "is-mobile": !0,
                    "selected-tags": t.wfTags
                }, on: {
                    "update:selectedTags": function (e) {
                        t.wfTags = e
                    }, "update:selected-tags": function (e) {
                        t.wfTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "wt" === t.nowSub,
                    title: t.OptionTitle.wt,
                    "select-text": t.parameterMapList.wt
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("wt")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {
                    category: "wt",
                    "multiple-select": !0,
                    "is-mobile": !0,
                    "selected-tags": t.wtTags
                }, on: {
                    "update:selectedTags": function (e) {
                        t.wtTags = e
                    }, "update:selected-tags": function (e) {
                        t.wtTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "edu" === t.nowSub,
                    title: t.OptionTitle.edu,
                    "select-text": t.parameterMapList.edu
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("edu")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {
                    category: "edu",
                    "multiple-select": !0,
                    "is-mobile": !0,
                    "selected-tags": t.eduTags
                }, on: {
                    "update:selectedTags": function (e) {
                        t.eduTags = e
                    }, "update:selected-tags": function (e) {
                        t.eduTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "jobexp" === t.nowSub,
                    title: t.OptionTitle.jobexp,
                    "select-text": t.parameterMapList.jobexp
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("jobexp")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {
                    category: "jobexp",
                    "multiple-select": !0,
                    "is-mobile": !0,
                    "selected-tags": t.jobexpTags
                }, on: {
                    "update:selectedTags": function (e) {
                        t.jobexpTags = e
                    }, "update:selected-tags": function (e) {
                        t.jobexpTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "rostatus" === t.nowSub,
                    title: t.OptionTitle.RoleStatus,
                    "select-text": t.customRoleStatus
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("rostatus")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {
                    category: "RoleStatus",
                    "multiple-select": !0,
                    "is-mobile": !0,
                    "selected-tags": t.rostatusTags
                }, on: {
                    "update:selectedTags": function (e) {
                        t.rostatusTags = e
                    }, "update:selected-tags": function (e) {
                        t.rostatusTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1), n("form-row-mobile", {
                attrs: {
                    "is-show": "dis_role" === t.nowSub,
                    title: t.OptionTitle.dis_role,
                    "select-text": t.parameterMapList.dis_role
                }, on: {
                    changeSub: function (e) {
                        return t.changeSub("dis_role")
                    }
                }
            }, [n("sub-filter-options", {
                attrs: {category: "dis_role", "is-mobile": !0, "selected-tags": t.disroleTags},
                on: {
                    "update:selectedTags": function (e) {
                        t.disroleTags = e
                    }, "update:selected-tags": function (e) {
                        t.disroleTags = e
                    }, selectSubFilter: t.selectSubFilter
                }
            })], 1)], 1)])], 2)
        }, oi = [], ai = n("e9a8"), ii = n.n(ai), si = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "mobile-more"}, [n("div", {
                staticClass: "mobile-more__type p-4 position-relative bg-white d-flex",
                on: {click: t.changeSub}
            }, [n("div", {
                staticClass: "mobile-more__type-title",
                domProps: {textContent: t._s(t.title)}
            }), n("div", {staticClass: "mobile-more__type-select-title pr-5 text-right"}, t._l(t.selectText, (function (e, o) {
                return n("span", {key: o, staticClass: "text-primary"}, [t._v(" " + t._s(e) + " ")])
            })), 0), n("i", {
                staticClass: "jb_icon_down position-absolute t4 m-3 text-gray-dark",
                style: {transform: "rotate(" + (t.isShow ? 180 : 0) + "deg)"}
            })]), n("div", {
                directives: [{name: "show", rawName: "v-show", value: t.isShow, expression: "isShow"}],
                staticClass: "px-4 pt-4"
            }, [t._t("default")], 2)])
        }, ri = [], li = {
            name: "FormRowMobile",
            components: {},
            props: {title: b["a"].string.def(""), selectText: b["a"].array.def([]), isShow: b["a"].bool.def(!1)},
            methods: {
                changeSub: function () {
                    this.$emit("changeSub")
                }
            }
        }, ci = li, ui = (n("9765"), Object(j["a"])(ci, si, ri, !1, null, null, null)), pi = ui.exports;

        function mi(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function di(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? mi(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mi(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var hi = function (t, e) {
                return t.reduce((function (t, n) {
                    return n && t.push(ce[e][n]), t
                }), [])
            }, bi = {
                name: "PopupMobileFullMore",
                components: {
                    FormElementCinputSearchsingle: D,
                    FormRowMobile: pi,
                    SubFilterOptions: Xe,
                    CustomSalary: pn,
                    SalaryResultCheckbox: _n,
                    SearchSubMobileLayout: Ka
                },
                data: function () {
                    return {
                        keywordOptions: [],
                        cmultiselectSearching: !1,
                        nowSub: "",
                        OptionTitle: Qe,
                        searchParametersQueue: [],
                        cachedSubFilterOption: {},
                        parameterMapList: {
                            isnew: [],
                            ro: [],
                            s9: [],
                            s5: [],
                            wktm: [],
                            jobexp: [],
                            edu: [],
                            wf: [],
                            wt: [],
                            dis_role: []
                        },
                        kindOfSalaryCheckbox: {
                            hasSalaryJob: {
                                text: "有寫薪資的工作",
                                id: "hasSalaryJob",
                                disabled: !1,
                                checked: !1
                            },
                            negotiableJob: {text: "包含面議", id: "negotiableJob", disabled: !1, checked: !1},
                            allJob: {text: "全部工作", id: "allJob", disabled: !1, checked: !1}
                        }
                    }
                },
                computed: di({
                    keywordInput: {
                        get: function () {
                            return {text: this.$store.state.searchmain.keywordInput}
                        }, set: function (t) {
                            var e = t.text ? t.text : "";
                            this.setKeywordInput(e)
                        }
                    }, locationInput: {
                        get: function () {
                            return {text: this.$store.state.searchmain.locationInput}
                        }
                    }, isnewTags: {
                        get: function () {
                            return this.query.isnew.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({isnew: [ce.isnew[t]]}), this[gt]({isnew: t.join(",")})
                        }
                    }, s9Tags: {
                        get: function () {
                            return this.query.s9.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({s9: hi(t, "s9")}), this[gt]({s9: t.join(",")})
                        }
                    }, s5Tags: {
                        get: function () {
                            return this.query.s5.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({s5: [ce.s5[t]]}), this[gt]({s5: t.join(",")})
                        }
                    }, wktmTags: {
                        get: function () {
                            return this.query.wktm.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({wktm: [ce.wktm[t]]}), this[gt]({wktm: t.join(",")})
                        }
                    }, customSalaryTags: {
                        get: function () {
                            if (this.isSelectedCustomSalaryTags()) {
                                var t = {
                                    sr: this.query.sr,
                                    scstrict: this.query.scstrict,
                                    sctp: this.query.sctp,
                                    scmin: this.query.scmin,
                                    scmax: this.query.scmax
                                };
                                return On(Ln, t, "scneg")
                            }
                            return []
                        }, set: function (t) {
                            var e = this.getSalaryOptions(t[0]), n = {};
                            e.forEach((function (t) {
                                n[t.type] = t.value.join(",")
                            })), this[gt](n)
                        }
                    }, inputedSalaryTagText: {
                        get: function () {
                            var t = this;

                            function e(t) {
                                return parseInt(t)
                            }

                            function n(t) {
                                var n = e(t).toString() === t, o = e(t) >= 0;
                                return n && o ? e(t).toString().replace(/([0-9])(?=([0-9]{3})+$)/g, "$1,") : ""
                            }

                            var o = [{text: "時薪", value: "H"}, {text: "日薪", value: "D"}, {
                                text: "月薪",
                                value: "M"
                            }, {text: "年薪", value: "Y"}], a = n(this.query.scmin), i = n(this.query.scmax);
                            if (!this.isSelectedCustomSalaryTags() && this.query.sctp) {
                                var s = o.find((function (e) {
                                    return t.query.sctp === e.value
                                }));
                                return a && i ? "".concat(s.text, " ").concat(a, " - ").concat(i) : a ? "".concat(s.text, " ").concat(a) : i ? "".concat(s.text, " ").concat(i) : ""
                            }
                            return ""
                        }, set: function (t) {
                        }
                    }, salaryCheckbox: {
                        get: function () {
                            var t = {};
                            if (this.customSalaryTags.length > 0) switch (this.customSalaryTags[0]) {
                                case"0":
                                    Object.assign(t, {text: "有寫薪資的工作"});
                                    break;
                                case"1":
                                    break;
                                case"2":
                                case"3":
                                    Object.assign(t, {text: "包含面議", checked: 1 === parseInt(this.query.scneg)});
                                    break;
                                case"4":
                                    break;
                                default:
                                    break
                            } else if ("" === this.query.sctp || "" === this.query.scmin && "" === this.query.scmax) Object.assign(t, {text: "全部工作"}); else if ("M" === this.query.sctp) {
                                var e = 4e4, n = this.query.scmin ? parseInt(this.query.scmin) : "",
                                    o = this.query.scmax ? parseInt(this.query.scmax) : "";
                                (n <= e && o >= e || n <= e && !o || !n && o >= e) && Object.assign(t, {
                                    text: "包含面議",
                                    checked: 1 === parseInt(this.query.scneg)
                                })
                            }
                            return t
                        }, set: function (t) {
                        }
                    }, wfTags: {
                        get: function () {
                            return this.query.wf.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({wf: hi(t, "wf")}), this[gt]({wf: t.join(",")})
                        }
                    }, wtTags: {
                        get: function () {
                            return this.query.wt.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({wt: hi(t, "wt")}), this[gt]({wt: t.join(",")})
                        }
                    }, eduTags: {
                        get: function () {
                            return this.query.edu.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({edu: hi(t, "edu")}), this[gt]({edu: t.join(",")})
                        }
                    }, jobexpTags: {
                        get: function () {
                            return this.query.jobexp.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({jobexp: hi(t, "jobexp")}), this[gt]({jobexp: t.join(",")})
                        }
                    }, rostatusTags: {
                        get: function () {
                            var t = {rostatus: this.query.rostatus.split(","), manage: this.query.manage.split(",")};
                            return vn(t)
                        }, set: function (t) {
                            var e = [], n = [], o = !0, a = !1, i = void 0;
                            try {
                                for (var s, r = t[Symbol.iterator](); !(o = (s = r.next()).done); o = !0) {
                                    var l = s.value;
                                    "4" !== l ? e = [].concat(Object(m["a"])(e), [wn[l].rostatus]) : n = [wn[l].manage]
                                }
                            } catch (c) {
                                a = !0, i = c
                            } finally {
                                try {
                                    o || null == r.return || r.return()
                                } finally {
                                    if (a) throw i
                                }
                            }
                            this[gt]({rostatus: e.join(","), manage: n.join(",")})
                        }
                    }, disroleTags: {
                        get: function () {
                            return this.query.dis_role.split(",")
                        }, set: function (t) {
                            this.updateParameterMapList({dis_role: [ce.dis_role[t]]}), this[gt]({dis_role: t.join(",")})
                        }
                    }, customRoleStatus: function () {
                        return hi(this.rostatusTags, "RoleStatus")
                    }, customSalary: function () {
                        var t, e = {
                            H: {unit: "時", specialValue: ["160"]},
                            D: {unit: "日", specialValue: []},
                            M: {unit: "月", specialValue: ["30000", "40000", "50000"]},
                            Y: {unit: "年", specialValue: []}
                        }, n = this.query, o = n.scmax, a = n.scmin, i = n.sr, s = n.sctp;
                        return s && (t = e[s].specialValue.indexOf(a) > -1), "99" == i ? [ce.CustomSalary[0]] : o || a && !t ? ["自訂".concat(e[s].unit, "薪")] : t ? ["".concat(e[s].unit, "薪").concat(a, "up")] : []
                    }
                }, Object(st["f"])("cSearch", ["query"]), {}, Object(st["f"])("api", {
                    _staKeywordSuggestMain: function (t) {
                        return t.keywordSuggestMain.data
                    }
                }), {}, Object(st["d"])("cSearch", [dt, ft])),
                mounted: function () {
                    var t = this;
                    this.$nextTick().then((function () {
                        t.cachedSubFilterOption = di({}, t[dt]), Object.keys(t.parameterMapList).forEach((function (e) {
                            if (t.query[e]) {
                                var n = t.query[e].split(",");
                                n.length > 1 ? t.parameterMapList[e] = hi(n, e) : t.parameterMapList[e] = [ce[e][t.query[e]]]
                            }
                        }))
                    }))
                },
                methods: di({
                    isSelectedCustomSalaryTags: function () {
                        var t = {
                            sr: this.query.sr,
                            scstrict: this.query.scstrict,
                            sctp: this.query.sctp,
                            scmin: this.query.scmin,
                            scmax: this.query.scmax
                        }, e = On(Ln, t, "scneg");
                        return e.length > 0
                    }, close: function () {
                        this[gt](this.cachedSubFilterOption), this[yt](null)
                    }, selectOptionUpdate: function (t) {
                        this.$emit("update:inputData", t), this.close()
                    }, changeSub: function (t) {
                        this.nowSub === t ? this.nowSub = "" : this.nowSub = t
                    }, getSalaryOptions: function (t) {
                        var e = {sr: "", sctp: "", scmin: "", scmax: "", scstrict: "", scneg: ""};
                        return e = di({}, e, {}, Ln[t]), [{type: "sr", value: [e.sr]}, {
                            type: "sctp",
                            value: [e.sctp]
                        }, {type: "scmin", value: [e.scmin]}, {type: "scmax", value: [e.scmax]}, {
                            type: "scstrict",
                            value: [e.scstrict]
                        }, {type: "scneg", value: [e.scneg]}]
                    }, selectSubFilter: function (t) {
                        if ("CustomSalary" === t[0].type) {
                            var e = this.getSalaryOptions(t[0].value[0]);
                            this.searchParametersQueue = ii()([].concat(Object(m["a"])(this.searchParametersQueue), [e])), this.$refs.inputSalaryField.resetInputs()
                        } else this.searchParametersQueue = ii()([].concat(Object(m["a"])(this.searchParametersQueue), [t]))
                    }, inputCustomSalaryOption: function (t) {
                        var e = {sr: "", sctp: "", scmin: "", scmax: "", scstrict: "", scneg: ""};
                        t.forEach((function (t) {
                            e[t.type] = t.value.join(",")
                        })), this.$store.commit("cSearch/".concat(gt), e), this.searchParametersQueue = ii()([].concat(Object(m["a"])(this.searchParametersQueue), [t]))
                    }, selectResultOption: function (t) {
                        var e = {scneg: ""};
                        t.forEach((function (t) {
                            e[t.type] = t.value.join(",")
                        })), this.$store.commit("cSearch/".concat(gt), e)
                    }, onClickSubmit: function () {
                        if (!this.locationInput.text) return this[yt](null);
                        if (K(this.locationInput.text)) return alert('請勿輸入以下特殊符號\\’<>!():^[]{}~?%*"');
                        var t = {};
                        this.searchParametersQueue.map((function (e) {
                            var n = Object(l["a"])({}, e.type, e.value.join(","));
                            return Object.assign(t, n), n
                        })), this.$store.commit("cSearch/".concat(gt), {keyword: encodeURIComponent(this.keywordInput.text)}), this.$emit(re, new wt(le.SUBMIT_MOBILE_MORE, [])), this[yt](null)
                    }, updateParameterMapList: function (t) {
                        this.parameterMapList = di({}, this.parameterMapList, {}, t)
                    }, onClickClean: function () {
                        for (var t in this[Tt](), this.parameterMapList) this.parameterMapList[t] = []
                    }, getKeyword: lt()((function (t) {
                        var e = this;
                        t ? (this.cmultiselectSearching = !0, this._actGetKeywordSuggestMain(t).then((function (t) {
                            e.keywordOptions = e._staKeywordSuggestMain.suggestions.map((function (t) {
                                return {text: t.value}
                            })), e.cmultiselectSearching = !1
                        }))) : this.keywordOptions = []
                    }), 300)
                }, Object(st["e"])("cSearch", [gt, Tt, yt]), {}, Object(st["e"])("searchmain", ["setKeywordInput"]), {}, Object(st["c"])("api", {_actGetKeywordSuggestMain: "keywordSuggestMain/get"}))
            }, fi = bi, gi = (n("8290"), Object(j["a"])(fi, ni, oi, !1, null, "499aeb45", null)), yi = gi.exports,
            _i = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("search-sub-mobile-layout", {
                    staticClass: "bg-white",
                    attrs: {title: "工作性質", "confirm-btn": {text: "確定", disabled: !1}},
                    on: {confirmBtnClick: t.confirmBtnClick, close: t.close}
                }, [n("template", {slot: "content"}, [n("div", {staticClass: "p-3"}, t._l(Object.keys(t.SearchParameter[t.category]).filter((function (e) {
                    return !isNaN(e) && -1 === t.parameterBlacklist.indexOf(e)
                })), (function (e, o) {
                    return n("border-button", {
                        key: o,
                        attrs: {
                            "data-gtm-param": t.gtmContext,
                            size: "middle",
                            active: -1 !== t.selectedTags.indexOf(e),
                            "data-nosnippet": ""
                        },
                        domProps: {textContent: t._s(t.SearchParameter[t.category][e])},
                        nativeOn: {
                            click: function (n) {
                                return t.onSelectTag(e)
                            }
                        }
                    })
                })), 1)])], 2)
            }, Ti = [];

        function Si(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Pi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Si(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Si(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Ci = Object(st["a"])("cSearch"), Oi = Ci.mapState, vi = Ci.mapMutations, ji = Ci.mapGetters, wi = {
            name: "SubfilterOptions",
            components: {BorderButton: F, SearchSubMobileLayout: Ka},
            props: {
                category: b["a"].string.isRequired.def(""),
                multipleSelect: b["a"].bool.def(!1),
                parameterBlacklist: b["a"].arrayOf(Number).def([]),
                closeTab: b["a"].number.def(0)
            },
            data: function () {
                return {SearchParameter: ce, cachedQuery: {}}
            },
            computed: Pi({
                selectedTags: {
                    get: function () {
                        return this.query[this.category].split(",")
                    }, set: function (t) {
                        this[gt](Object(l["a"])({}, this.category, t.join(",")))
                    }
                }, gtmContext: function () {
                    return "篩選-".concat(Qe[this.category])
                }
            }, Oi(["query"]), {}, ji([ht])),
            mounted: function () {
                this.cachedQuery = Pi({}, this[ht])
            },
            methods: Pi({
                onSelectTag: function (t) {
                    var e = this.selectedTags.indexOf(t);
                    this.multipleSelect ? -1 === e ? this.selectedTags.push(t) : this.selectedTags.splice(e, 1) : this.selectedTags = [t], this.$emit(re, {
                        event: le.SELECT_OPTION,
                        param: [{type: this.category, value: this.selectedTags}]
                    })
                }, close: function () {
                    this[gt](this.cachedQuery), this[yt](null)
                }, confirmBtnClick: function () {
                    this[yt](null), this.$emit(re, new wt(le.SUBMIT_MOBILE_BASIC))
                }
            }, vi([gt, yt]))
        }, Li = wi, Ri = Object(j["a"])(Li, _i, Ti, !1, null, null, null), Ii = Ri.exports;

        function xi(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ki(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? xi(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xi(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Ei = Object(st["a"])("cSearch"), Ai = Ei.mapState, Ui = {
                name: "SubFilterMobileContentArea",
                components: {SearchSubMobileMore: yi, SearchSubMobileTransType: ei, SearchSubMobileBasic: Ii},
                mixins: [Tn],
                computed: ki({}, Ai(["enabledTab"]))
            }, Di = Ui, Mi = (n("4cd5"), Object(j["a"])(Di, Na, Ba, !1, null, "672bee66", null)), Ni = Mi.exports,
            Bi = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    ref: "job-list-m",
                    staticClass: "job-list-m rounded-lg rounded-top  overflow-hidden position-fixed bg-white w-100",
                    style: {
                        top: (t.touchStatus.movingY > 0 ? t.touchStatus.movingY : t.slideTop) + "px",
                        transition: t.touchStatus.movingY > 0 ? "" : t.transitionType
                    },
                    on: {
                        touchstart: function (e) {
                            return e.stopPropagation(), t.onTouchStart(e, !0)
                        }, touchmove: function (e) {
                            return e.stopPropagation(), t.onTouchMove(e, !0)
                        }, touchend: function (e) {
                            return e.stopPropagation(), t.onTouchEnd(e, !0)
                        }
                    }
                }, [n("div", {
                    ref: "job-list-header",
                    staticClass: "job-list-m__header d-flex position-relative justify-content-between border-bottom pt-5 px-4 pb-3",
                    on: {
                        touchstart: t.onTouchStart, touchmove: function (e) {
                            return e.preventDefault(), t.onTouchMove(e)
                        }, touchend: function (e) {
                            return e.stopPropagation(), t.onTouchEnd(e)
                        }, click: t.onClick
                    }
                }, [t.jobListFixed ? t._e() : n("span", {staticClass: "job-list-m__header-slide-sign position-absolute bg-gray-score rounded"}), n("timefor-job-title", {
                    class: {"clear-content": -1 === t.jobListStep.now},
                    attrs: {"job-total": t.jobList.length}
                }, [n("select", {
                    staticClass: "text-primary bg-transparent border-0",
                    domProps: {value: t.selectOrderVal},
                    on: {
                        change: function (e) {
                            return e.stopPropagation(), t.onSelect(e)
                        }, click: function (t) {
                            t.stopPropagation()
                        }
                    }
                }, t._l(t.optionArray, (function (e, o) {
                    return n("option", {key: o, domProps: {value: e.value, textContent: t._s(e.text)}})
                })), 0)])], 1), n("div", {
                    ref: "job-list-body",
                    staticClass: "job-list-m__list",
                    class: t.jobListOverflow,
                    on: {scroll: t.scrollHandler, touchstart: t.listTouchStart, touchmove: t.listTouchMove}
                }, [t.currentJobList.length > 0 ? n("div", {staticClass: "job-list-pc__list-items"}, [t._l(t.currentJobList, (function (e, o) {
                    return [n("TimeforJobSummery", {
                        key: o,
                        attrs: {
                            "job-name": e.jobNameRaw,
                            "job-href": e.link.job,
                            "job-no": t.base10to36(e.jobNo),
                            "cust-name": e.custNameRaw,
                            "cust-no": t.base10to36(e.custNo),
                            salary: e.salaryDesc,
                            "period-desc": e.periodDesc,
                            "appear-date-desc": e.appearDateDesc,
                            edu: e.optionEdu,
                            "job-description": e.description,
                            "lat-lon": {lat: 1 * e.lat, lon: 1 * e.lon},
                            "is-save": !!(1 * e.isSave)
                        }
                    })]
                }))], 2) : n("div", {
                    ref: "job-list-noresult",
                    staticClass: "p-5 job-list-pc__list-noresult"
                }, [n("p", {staticClass: "text-gray-dark"}, [t._v(" 沒有搜尋結果，請試試放寬條件或尋找其他地點 ")])])])])
            }, $i = [], Vi = null, qi = {
                data: function () {
                    return {isScroll: !0, pageNum: 20, childrenIndex: 14}
                }, computed: {
                    jobListPage: function () {
                        return this.$store.state.joblist.jobListPage
                    }
                }, mounted: function () {
                    var t = this;
                    Vi = this.$store.subscribe((function (e) {
                        "joblist/setJobListPage" == e.type && 1 == e.payload && (t.$refs["job-list-body"].scrollTop = 0)
                    }))
                }, beforeDestroy: function () {
                    Vi()
                }, methods: {
                    onScroll: function () {
                        var t = this;
                        if (this.isScroll && !(this.jobListPage * this.pageNum > this.jobList.length)) {
                            var e = this.$refs["job-list-body"], n = e.querySelector(".job-list-pc__list-items"),
                                o = n.children[(this.jobListPage - 1) * this.pageNum + this.childrenIndex].getBoundingClientRect(),
                                a = o.top - e.getBoundingClientRect().top, i = e.getBoundingClientRect().height - o.height;
                            a < i && (this.isScroll = !1, setTimeout((function () {
                                t.$store.commit("joblist/setJobListPage", t.jobListPage + 1), t.isScroll = !0
                            }), 1e3))
                        }
                    }
                }
            }, Gi = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "summery p-4 position-relative overflow-hidden",
                    class: {active: t.isClick},
                    on: {
                        mouseenter: function (e) {
                            return t.debounceUserTouch({jobNo: t.jobNo, type: "mouseover"})
                        }, mouseleave: function (e) {
                            return t.debounceUserTouch({jobNo: "", type: "mouseover"})
                        }, click: function (e) {
                            return t.debounceUserTouch({jobNo: t.jobNo, type: "mouseclick"})
                        }
                    }
                }, [n("div", {staticClass: "row"}, [n("job-info", t._b({
                    staticClass: "col-10 pr-0",
                    attrs: {
                        "job-name": t.jobName,
                        "job-href": t.time4JobsHref,
                        "cust-name": t.custName,
                        info: [t.salary, t.periodDesc, t.edu],
                        "job-description": t.jobDescription,
                        "ui-status": {
                            isJobAnchor: !0,
                            isCustAnchor: !1,
                            isHighlightFirstInfoTag: !0,
                            isJobNameSingleLineEllipsis: !0,
                            isCustNameSingleLineEllipsis: !0,
                            isDespMiltLineEllipsis: !0
                        }
                    }
                }, "job-info", t.jobGtmData, !1)), n("div", {staticClass: "summery__save col-2"}, [t._e(), n("p", {
                    staticClass: "summery__save-date h4 text-right font-weight-normal text-gray-dark",
                    domProps: {textContent: t._s(t.appearDateDesc)}
                }), n("button", {
                    staticClass: "position-absolute border-0 bg-transparent",
                    attrs: {"data-gtm-joblist": "儲存職缺", disabled: t.isSaveJobProcessing},
                    on: {
                        click: function (e) {
                            return e.stopPropagation(), t.saveJob(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "jb_icon_favor_filled",
                    class: t.isSave ? "text-primary" : "text-gray-dark"
                })])])], 1)])
            }, Fi = [], Hi = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "info"}, [n("div", {staticClass: "info-container"}, [n("div", {
                    staticClass: "info-job text-break mb-2",
                    on: {click: t.jobClick}
                }, [t.uiStatus.isJobAnchor ? n("a", t._b({
                    staticClass: "info-job__text jb-link jb-link-blue jb-link-blue--visited",
                    class: {
                        "text-truncate": t.uiStatus.isJobNameSingleLineEllipsis,
                        "d-inline-block": t.uiStatus.isJobNameSingleLineEllipsis,
                        t2: t.jobIsRead,
                        h2: !t.jobIsRead
                    },
                    attrs: {target: "_blank", rel: "noopener", href: t.jobHref, title: t.jobName},
                    domProps: {innerHTML: t._s(t.jobNameHighlight), textContent: t._s(t.jobName)},
                    on: {
                        click: function (e) {
                            return t.$emit("onClickJobUrl")
                        }
                    }
                }, "a", t.jobGtm, !1)) : n("p", {
                    staticClass: "info-job__text",
                    class: {
                        "text-truncate": t.uiStatus.isJobNameSingleLineEllipsis,
                        "d-block": t.uiStatus.isJobNameSingleLineEllipsis,
                        t2: t.jobIsRead,
                        h2: !t.jobIsRead
                    },
                    attrs: {title: t.jobName},
                    domProps: {textContent: t._s(t.jobName)}
                }), t._t("titleTag")], 2), t.custName ? n("div", {staticClass: "info-company mb-1"}, [t.uiStatus.isCustAnchor ? n("a", t._b({
                    staticClass: "info-company__text jb-link jb-link-blue jb-link-blue--visited",
                    class: {
                        "text-truncate": t.uiStatus.isCustNameSingleLineEllipsis,
                        "d-inline-block": t.uiStatus.isCustNameSingleLineEllipsis,
                        t4: t.jobIsRead,
                        h4: !t.jobIsRead
                    },
                    attrs: {target: "_blank", rel: "noopener", href: t.custHref},
                    domProps: {textContent: t._s(t.custName)}
                }, "a", t.custGtm, !1)) : n("p", {
                    staticClass: "info-company__text",
                    class: {"text-truncate": t.uiStatus.isCustNameSingleLineEllipsis, t4: t.jobIsRead, h4: !t.jobIsRead},
                    domProps: {textContent: t._s(t.custName)}
                }), t.custIndustryDesc ? n("span", {
                    staticClass: "info-company-addon-type text-gray-darker",
                    class: {"font-weight-bold": !t.jobIsRead},
                    domProps: {textContent: t._s(t.custIndustryDesc)}
                }) : t._e()]) : t._e(), n("div", {staticClass: "info-tags gray-deep-dark"}, t._l(t.info, (function (e, o) {
                    return n("span", {
                        key: o,
                        staticClass: "info-tags__text",
                        class: {
                            "text-primary": 0 == o && t.uiStatus.isHighlightFirstInfoTag,
                            "font-weight-bold": !t.jobIsRead
                        },
                        domProps: {innerHTML: t._s(e)}
                    })
                })), 0), t.jobDescriptionEllipsis ? n("div", {
                    ref: "description",
                    staticClass: "info-description text-gray-darker t4 text-break mt-2 position-relative",
                    class: {"info-description__line2": t.uiStatus.isDespMiltLineEllipsis},
                    domProps: {innerHTML: t._s(t.jobDescriptionEllipsis)}
                }) : t._e(), t._t("default"), t.jobTags.length > 0 ? n("div", {staticClass: "info-othertags"}, t._l(t.jobValidTags, (function (e, o) {
                    return n("span", {
                        key: o,
                        staticClass: "info-othertags__text text-gray-darker py-1 px-2 mb-2 mx-1 d-inline-block"
                    }, [t.isTagLink ? n("a", {
                        attrs: {
                            href: t.env.VUE_APP_DOMAIN_URL + "company/search/?keyword=" + e + "&jobsource=tag_link",
                            title: "看更多有「" + e + "」福利的公司",
                            target: "_blank"
                        }
                    }, [t._v(" " + t._s(e) + " ")]) : [t._v(" " + t._s(e) + " ")]], 2)
                })), 0) : t._e()], 2)])
            }, Ji = [];

        function Ki(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Qi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ki(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ki(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Yi = Qi({}, Object({
                VUE_APP_ENV: "production",
                VUE_APP_GOOGLE_MAP_KEY: "AIzaSyCEtx5-CJR_85qrCaFDEWzsUtVVi-byD58",
                VUE_APP_DOMAIN: "104",
                VUE_APP_COOKIE_SHARED_DOMAIN: ".104.com.tw",
                VUE_APP_DOMAIN_URL: "//www.104.com.tw/",
                VUE_APP_PRO_URL: "//vip.104.com.tw/",
                VUE_APP_LOGIN_URL: "//login.104.com.tw/login",
                VUE_APP_LOGOUT_URL: "//login.104.com.tw/logout",
                VUE_APP_MY104_URL: "//pda.104.com.tw/",
                VUE_APP_MY104_API: "//pda.104.com.tw/",
                VUE_APP_STATIC_URL: "//static.104.com.tw/",
                VUE_APP_CDN_URL: "//cdn.104.com.tw/",
                VUE_APP_CDN_STATIC_URL: "//cdn.104.com.tw/static/",
                VUE_APP_AUTOCOMPLETE_API: "//pda.104.com.tw/",
                VUE_APP_AUTOCOMPLETE_MORE_API: "//www.104.com.tw/company/search/",
                VUE_APP_AUTOCOMPLETE_CUST_API: "//www.104.com.tw/company/",
                VUE_APP_ACCOUNT_URL: "//accounts.104.com.tw/",
                VUE_APP_CINDEX_API: "//www.104.com.tw/",
                VUE_APP_CMAIN_API: "https://www.104.com.tw/jobs/main/",
                VUE_APP_CMAIN_API_ORIGIN: "https://www.104.com.tw/",
                VUE_APP_CAPPLY_API: "https://www.104.com.tw/jobs/apply/",
                VUE_APP_RESUME_CLINIC_URL: "//resume-clinic.104.com.tw/",
                VUE_APP_GIVER_URL: "//giver.104.com.tw/",
                VUE_APP_REVIEWS_URL: "//reviews.104.com.tw/",
                VUE_APP_REVIEWS_PROXY_API: "//be.reviews.104.com.tw/api/companies/",
                VUE_APP_REVIEWS_API: "//be.reviews.104.com.tw/api/companies/",
                VUE_APP_MOBILE_DOMAIN_URL: "https://m.104.com.tw/",
                VUE_APP_TIME4JOBS_API: "https://time4jobs.104.com.tw/ajax/",
                VUE_APP_TIME4JOBS_URL: "https://time4jobs.104.com.tw/",
                VUE_APP_104I_PROXY_API: "https://www.104.com.tw/jb/104i/",
                VUE_APP_104I_API: "https://www.104.com.tw/jb/104i/",
                VUE_APP_BLOG_URL: "https://blog.104.com.tw/",
                VUE_APP_BLOG_PROXY_API: "https://blog.104.com.tw/",
                VUE_APP_BLOG_API: "https://blog.104.com.tw/",
                VUE_APP_GIVER_PROXY_API: "https://api.giver.104dc.com/api/",
                VUE_APP_GIVER_API: "https://api.giver.104dc.com/api/",
                VUE_APP_FRESH_PROXY_API: "https://fresh.104.com.tw/",
                VUE_APP_FRESH_API: "https://freshman.104.com.tw/",
                VUE_APP_FRESH_URL: "https://fresh.104.com.tw/",
                VUE_APP_EBAWARDS_URL: "https://eb-awards.events.104.com.tw/",
                VUE_APP_SEMICONDUCTOR_URL: "https://semiconductor.events.104.com.tw/",
                VUE_APP_ADSMART_COMPONENT: "https://msc.adsmart.104.com.tw/",
                VUE_APP_ADSMART_COMPONENT_VERSION: "3/5/0/",
                VUE_APP_CATEGORY_PROXY_API: "https://www.104.com.tw/jb/104i/Keyword2Category/JobCat/",
                VUE_APP_CATEGORY_API: "https://www.104.com.tw/jb/104i/Keyword2Category/JobCat/",
                VUE_APP_NOTIFICATION_API: "//notification.104.com.tw/",
                VUE_APP_CRM_URL: "https://104.widget.custhelp.com/",
                VUE_APP_NABI_URL: "https://nabi.104.com.tw/",
                VUE_APP_SENIOR_URL: "https://senior.104.com.tw/",
                VUE_APP_SENIOR_API: "https://api.senior.104.com.tw/",
                VUE_APP_HEYBAR_URL: "https://heybar.an9.104.com.tw/",
                VUE_APP_PROFILE_URL: "//profile.104.com.tw/",
                VUE_APP_PROFILE_API: "//api.profile.104.com.tw/",
                VUE_APP_PROFILE_LOGIN_URL: "//login.104.com.tw/personal-brand/login",
                VUE_APP_PROFILE_LOGOUT_URL: "//login.104.com.tw/personal-brand/logout",
                VUE_APP_TANJI_URL: "https://tanji.104.com.tw/",
                VUE_APP_GUIDE_URL: "https://guide.104.com.tw/",
                VUE_APP_MARKETING_URL: "https://marketing.pro.104.com.tw/",
                VUE_APP_ORI_DOC: "https://ori.doc.104.com.tw/",
                VUE_APP_ACTIVITY_URL: "https://meet.104.com.tw/",
                VUE_APP_PRIVACY_URL: "https://privacy.104.com.tw/",
                VUE_APP_MOBILE_URL: "https://mobile.104.com.tw/",
                VUE_APP_SERVICE_INDUSTRY_URL: "https://serviceindustry.events.104.com.tw/",
                VUE_APP_STUDENT_URL: "https://student.104.com.tw/",
                VUE_APP_COLLEGE_URL: "https://college.104.com.tw/",
                VUE_APP_TALENT_URL: "https://talent.104.com.tw/",
                VUE_APP_BEAGIVER_URL: "https://beagiver.104.com.tw/",
                VUE_APP_CAREER_URL: "https://career.104.com.tw/",
                VUE_APP_EVENTS_URL: "https://events.104.com.tw/",
                VUE_APP_KAD_EVENTS_URL: "https://kad.events.104.com.tw/",
                VUE_APP_JOB_NOTIFY_API: "//job-notify.104.com.tw/",
                VUE_APP_BUBBLE_API: "//bubble.104.com.tw/",
                VUE_APP_EXPATS_URL: "//go.104.com.tw/",
                VUE_APP_AI_URL: "https://ai.104.com.tw/",
                VUE_APP_CHATBOT_WC_PATH: "https://cdn.104.com.tw/lib/chatbot/1.0.25/wc-104-chatbot.js",
                VUE_APP_LIB_CHAT_PATH: "https://cdn.104.com.tw/lib/chat/1.0.29/Lib104_Chat.umd.min.js",
                NODE_ENV: "production",
                BASE_URL: "//cdn.104.com.tw/time4jobs/"
            }), {dev: "development", lab: "lab", staging: "staging", prod: "production"}), zi = Yi, Zi = {
                name: "JobInfo",
                props: {
                    jobNo: b["a"].string.def(""),
                    jobName: b["a"].string.def(""),
                    jobNameSnippet: b["a"].string.def(""),
                    jobHref: b["a"].string.def(""),
                    jobGtmData: b["a"].shape({name: b["a"].string, value: b["a"].string}).def({}),
                    custName: b["a"].string.def(""),
                    custHref: b["a"].string.def(""),
                    custIndustryDesc: b["a"].string.def(""),
                    custGtmData: b["a"].shape({name: b["a"].string, value: b["a"].string}).def({}),
                    info: b["a"].array.def([]),
                    jobDescription: b["a"].string.def(""),
                    descSnippet: b["a"].string.def(""),
                    jobTags: b["a"].array.def([]),
                    uiStatus: b["a"].shape({
                        isJobAnchor: b["a"].bool.def(!0),
                        isCustAnchor: b["a"].bool.def(!1),
                        isHighlightFirstInfoTag: b["a"].bool.def(!1),
                        isJobNameSingleLineEllipsis: b["a"].bool.def(!1),
                        isCustNameSingleLineEllipsis: b["a"].bool.def(!1),
                        isDespMiltLineEllipsis: b["a"].bool.def(!0)
                    }).def({}),
                    keywordHighlight: b["a"].bool.def(!1),
                    jobDescriptionSize: b["a"].number.def(114),
                    jobIsRead: b["a"].bool.def(!1),
                    isTagLink: b["a"].bool.def(!1)
                },
                data: function () {
                    return {env: zi}
                },
                computed: {
                    jobNameHighlight: function () {
                        return this.keywordHighlight ? this.jobNameSnippet : this.jobName
                    }, jobGtm: function () {
                        return this.jobGtmData.name && this.jobGtmData.value ? Object(l["a"])({}, "data-".concat(this.jobGtmData.name), this.jobGtmData.value) : ""
                    }, custGtm: function () {
                        return this.custGtmData.name && this.custGtmData.value ? Object(l["a"])({}, "data-".concat(this.custGtmData.name), this.custGtmData.value) : ""
                    }, jobDescriptionEllipsis: function () {
                        return this.keywordHighlight ? this.descSnippet : this.jobDescription
                    }, jobValidTags: function () {
                        return this.jobTags.filter((function (t) {
                            return "" !== t
                        }))
                    }
                },
                methods: {
                    jobClick: function () {
                        this.$emit("jobClick", {
                            jobName: this.jobName,
                            jobHref: this.jobHref,
                            jobNo: this.jobNo,
                            custName: this.custName
                        })
                    }
                }
            }, Xi = Zi, Wi = (n("8004"), Object(j["a"])(Xi, Hi, Ji, !1, null, "5a5a3513", null)), ts = Wi.exports,
            es = (n("841c"), n("2b3d"), n("0b16")), ns = n("b383"), os = (n("72bf"), n("8ff8"));

        function as(t) {
            return Object(os["sanitizeUrl"])(t.replace(/^(.*?)\/\//g, "https://"))
        }

        function is(t, e) {
            if (!e) return as(t);
            var n = Object(es["parse"])(as(t), !0);
            return n.query.jobsource = e, n.search = "?".concat(Object(ns["encode"])(n.query)), Object(es["format"])(n)
        }

        function ss(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = as(t);
            return "".concat(as(zi.VUE_APP_LOGIN_URL), "?return_url=").concat(encodeURIComponent(n)).concat(e ? "&checkService=1" : "")
        }

        function rs(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ls(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? rs(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rs(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var cs = {
                name: "TimeforJobSummery",
                components: {JobInfo: ts},
                props: {
                    jobName: b["a"].string.def(""),
                    jobHref: b["a"].string.def(""),
                    jobNo: b["a"].string.def(""),
                    custName: b["a"].string.def(""),
                    custNo: b["a"].string.def(""),
                    salary: b["a"].string.def(""),
                    periodDesc: b["a"].string.def(""),
                    edu: b["a"].string.def(""),
                    jobDescription: b["a"].string.def(""),
                    latLon: b["a"].shape({lat: b["a"].number.def(0), lon: b["a"].number.def(0)}),
                    appearDateDesc: b["a"].string.def(""),
                    isSave: b["a"].bool.def(!1)
                },
                data: function () {
                    return {env: fa, isSaveJobProcessing: !1}
                },
                computed: ls({
                    isClick: function () {
                        return this.userTouchCluster.jobNo.mouseclick === this.jobNo
                    }, time4JobsHref: function () {
                        var t = this.$route.query.jobsource ? this.$route.query.jobsource : "new_map";
                        return is(this.jobHref + "&app_jobsource=m_time4jobs", t)
                    }, jobGtmData: function () {
                        var t = this.jobNoList.length > 0 ? "cluster" : "default";
                        return {jobGtmData: {name: "gtm-joblist", value: "前往職缺_".concat(t)}}
                    }
                }, Object(st["f"])("ui", ["userTouchCluster"]), {}, Object(st["f"])("cSearch", {
                    lat: function (t) {
                        return t.query.lat
                    }, lon: function (t) {
                        return t.query.lon
                    }
                }), {}, Object(st["f"])("joblist", ["jobNoList"]), {}, Object(st["f"])("api", {
                    _staApiSaveJob: function (t) {
                        return t.saveJob.data
                    }, _staApiRemoveSavedJob: function (t) {
                        return t.removeSavedJob.data
                    }
                })),
                mounted: function () {
                },
                methods: ls({
                    debounceUserTouch: lt()((function (t) {
                        var e = t.jobNo, n = t.type;
                        this.$root.isMobile() || this.setUserTouchCluster({jobNo: e, type: n})
                    }), 150), saveJob: function () {
                        var t = this;
                        this.isSaveJobProcessing = !0;
                        var e = {custNo: this.custNo, jobNo: this.jobNo},
                            n = this.isSave ? this._actRemoveSavedJob : this._actSaveJob,
                            o = this.isSave ? this._staApiRemoveSavedJob : this._staApiSaveJob;
                        n(e).then((function (e) {
                            o && (t.savePoolListJob({
                                jobNo: ga(t.jobNo),
                                status: t.isSave ? "0" : "1"
                            }), !t.isSave && t.$root.eLogSaveJob(ga(t.jobNo), {
                                jobSource: "new_map",
                                userLocationLng: t.lon,
                                userLocationLat: t.lat,
                                JobLng: t.latLon.lon,
                                JobLat: t.latLon.lat
                            })), t.isSaveJobProcessing = !1
                        })).catch((function (e) {
                            20002 === e.response.data.error.code ? t.savePoolListJob({
                                jobNo: ga(t.jobNo),
                                status: "1"
                            }) : 20003 === e.response.data.error.code && t.savePoolListJob({
                                jobNo: ga(t.jobNo),
                                status: "0"
                            }), t.isSaveJobProcessing = !1
                        }))
                    }
                }, Object(st["e"])("ui", ["setUserTouchCluster"]), {}, Object(st["c"])("joblist", ["savePoolListJob"]), {}, Object(st["c"])("api", {
                    _actSaveJob: "saveJob/post",
                    _actRemoveSavedJob: "removeSavedJob/post"
                }))
            }, us = cs, ps = (n("75cf"), Object(j["a"])(us, Gi, Fi, !1, null, "709441e5", null)), ms = ps.exports,
            ds = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "job-list-title d-flex justify-content-between w-100"}, [n("div", {staticClass: "job-list-title__total align-items-center t4"}, [t._v(" " + t._s(t.jobTotal) + "筆職缺 ")]), n("div", {staticClass: "job-list-title__select position-relative"}, [t._t("default")], 2)])
            }, hs = [], bs = {props: {jobTotal: b["a"].number.def(0)}}, fs = bs,
            gs = (n("647f"), Object(j["a"])(fs, ds, hs, !1, null, "0f30fb62", null)), ys = gs.exports;

        function _s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Ts(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? _s(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _s(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Ss = 224, Ps = 16, Cs = {
                name: "JobListMobile",
                components: {TimeforJobSummery: ms, TimeforJobTitle: ys},
                mixins: [qi],
                data: function () {
                    return {
                        isScrollable: !1,
                        transitionType: "",
                        jobListTitleHeight: 0,
                        touchStatus: {startY: 0, endY: 0, movingY: 0},
                        listTouchStatus: {from: 0},
                        jobListOrder: "0",
                        windowHeight: 0,
                        noResultHeight: 0,
                        jobListScrollTop: 0
                    }
                },
                computed: Ts({
                    jobListPosition: function () {
                        return this.hasResult ? {
                            1: 1 * Ta["mobileTopGap"] + Ps,
                            0: this.windowHeight - Ss,
                            "-1": this.windowHeight - this.jobListTitleHeight
                        } : {
                            0: this.windowHeight - this.jobListTitleHeight - this.noResultHeight,
                            "-1": this.windowHeight - this.jobListTitleHeight
                        }
                    }, jobListFixed: function () {
                        return this.jobListPosition["0"] < this.jobListPosition["1"]
                    }, slideTop: function () {
                        return this.jobListFixed && -1 == this.jobListStep.now ? this.jobListPosition["-1"] : this.jobListFixed && -1 != this.jobListStep.now ? this.jobListPosition["1"] : this.jobListPosition["".concat(this.jobListStep.now)]
                    }, clickDirection: function () {
                        return (this.jobListStep.now - this.jobListStep.last < 0 || this.jobListStep.now == this.fullSize) && -1 != this.jobListStep.now ? -1 : 1
                    }, jobList: function () {
                        return this.getJoblist(this.jobNoList, this.cSearchQuery.order, this.cSearchQuery.asc)
                    }, currentJobList: function () {
                        return this.jobList.slice(0, this.jobListPage * this.pageNum)
                    }, optionArray: function () {
                        var t = ["6", "7"], e = [], n = !0, o = !1, a = void 0;
                        try {
                            for (var i, s = Object.keys(ae).filter((function (t) {
                                return !isNaN(t)
                            }))[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                var r = i.value;
                                -1 === t.indexOf(r) && e.push({text: ae[r], value: r})
                            }
                        } catch (l) {
                            o = !0, a = l
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return e
                    }, hasResult: function () {
                        return this.jobList.length > 0
                    }, fullSize: function () {
                        return this.hasResult ? 1 : 0
                    }, selectOrderVal: {
                        get: function () {
                            var t = On(jn, {order: this.cSearchQuery.order, asc: this.cSearchQuery.asc});
                            return t.length ? t[0] : "0"
                        }, set: function (t) {
                            this.$store.commit("cSearch/".concat(gt), jn[t]), this.$root.getJobs()
                        }
                    }, jobListOverflow: function () {
                        return 1 === this.jobListStep.now ? "overflow-auto" : "overflow-hidden"
                    }
                }, Object(st["f"])("ui", ["jobListStep"]), {}, Object(st["f"])("joblist", ["jobNoList"]), {}, Object(st["d"])("joblist", ["getJoblist"]), {}, Object(st["f"])("cSearch", {
                    cSearchQuery: function (t) {
                        return t.query
                    }
                })),
                mounted: function () {
                    var t = this;
                    this.jobListTitleHeight = this.$refs["job-list-header"].getBoundingClientRect().height, this.noResultHeight = this.$refs["job-list-noresult"].getBoundingClientRect().height, this.$nextTick((function () {
                        return t.transitionType = ".3s all ease-in-out"
                    })), this.onResize(), window.addEventListener("resize", this.onResize), this.$refs["job-list-m"].addEventListener("transitionend", this.onTransitionend)
                },
                beforeDestroy: function () {
                    window.removeEventListener("resize", this.onResize), this.$refs["job-list-m"].removeEventListener("transitionend", this.onTransitionend)
                },
                methods: Ts({
                    scrollHandler: function (t) {
                        this.jobListScrollTop = t.target.scrollTop, this.onScroll()
                    }, onTransitionend: function () {
                        -1 === this.jobListStep.now && (this.$refs["job-list-body"].scrollTop = 0)
                    }, onTouchStart: function (t, e) {
                        e && 1 === this.jobListStep.now || (this.touchStatus.startY = t.touches[0].clientY)
                    }, onTouchMove: function (t, e) {
                        if (e) {
                            if (1 === this.jobListStep.now) return;
                            t.preventDefault()
                        }
                        var n = this.jobListPosition["".concat(this.jobListStep.now)] + (t.changedTouches[0].clientY - this.touchStatus.startY);
                        n > this.jobListPosition["1"] && (this.touchStatus.movingY = n)
                    }, onTouchEnd: function (t, e) {
                        e && 1 === this.jobListStep.now || (this.touchStatus.movingY = 0, this.touchStatus.endY = t.changedTouches[0].clientY, Math.abs(this.touchStatus.startY - this.touchStatus.endY) < 1 || (this.touchStatus.endY < this.jobListPosition["0"] - .2 * this.windowHeight && this.jobListStep.now < 1 ? this.setJobListStep({
                            now: 1,
                            last: this.jobListStep.now
                        }) : this.touchStatus.endY > this.jobListPosition["0"] + .2 * this.windowHeight && this.jobListStep.now > -1 ? this.setJobListStep({
                            now: -1,
                            last: this.jobListStep.now
                        }) : this.touchStatus.startY - this.touchStatus.endY > 0 && this.jobListStep.now < this.fullSize ? this.setJobListStep({
                            now: this.jobListStep.now + 1,
                            last: this.jobListStep.now
                        }) : this.touchStatus.startY - this.touchStatus.endY < 0 && this.jobListStep.now > -1 && this.setJobListStep({
                            now: this.jobListStep.now - 1,
                            last: this.jobListStep.now
                        }), -1 == this.jobListStep.now && this.$emit("cancelSearch")))
                    }, onSelect: function (t) {
                        this.selectOrderVal = t.target.value
                    }, onClick: function () {
                        this.setJobListStep({
                            now: this.jobListStep.now + this.clickDirection,
                            last: this.jobListStep.now
                        }), -1 == this.jobListStep.now && this.$emit("cancelSearch")
                    }, onResize: function () {
                        this.windowHeight = window.innerHeight
                    }, listTouchStart: function (t) {
                        this.listTouchStatus.from = t.touches[0].clientY
                    }, listTouchMove: function (t) {
                        t.touches[0].clientY > this.listTouchStatus.from && !this.$refs["job-list-body"].scrollTop && t.preventDefault()
                    }, base10to36: ya
                }, Object(st["e"])("ui", ["setJobListStep"]))
            }, Os = Cs, vs = (n("1240"), Object(j["a"])(Os, Bi, $i, !1, null, "316ec2ac", null)), js = vs.exports,
            ws = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "job-list-pc position-absolute bg-white"}, [n("div", {
                    ref: "job-list-header",
                    staticClass: "job-list-pc__header d-flex justify-content-between py-3 px-4 border-bottom"
                }, [n("timefor-job-title", {attrs: {"job-total": t.jobList.length}}, [n("form-element-cinput-select", {
                    staticClass: "bg-gray w-100",
                    attrs: {
                        "select-options": t.optionArray,
                        "select-value": t.selectOrderVal,
                        "select-placeholder": "符合度排序"
                    },
                    on: {
                        "update:selectValue": function (e) {
                            t.selectOrderVal = e
                        }, "update:select-value": function (e) {
                            t.selectOrderVal = e
                        }
                    }
                })], 1)], 1), n("div", {
                    ref: "job-list-body",
                    staticClass: "job-list-pc__list w-100",
                    on: {scroll: t.onScroll}
                }, [t.currentJobList.length > 0 ? n("div", {staticClass: "job-list-pc__list-items"}, [t._l(t.currentJobList, (function (e, o) {
                    return [n("TimeforJobSummery", {
                        key: o,
                        attrs: {
                            "job-name": e.jobNameRaw,
                            "job-no": t.base10to36(e.jobNo),
                            "job-href": e.link.job,
                            "cust-name": e.custNameRaw,
                            "cust-no": t.base10to36(e.custNo),
                            salary: e.salaryDesc,
                            "period-desc": e.periodDesc,
                            "appear-date-desc": e.appearDateDesc,
                            edu: e.optionEdu,
                            "job-description": e.description,
                            "lat-lon": {lat: 1 * e.lat, lon: 1 * e.lon},
                            "is-save": !!(1 * e.isSave)
                        }
                    })]
                }))], 2) : n("div", {staticClass: "p-5 job-list-pc__list-noresult"}, [n("p", {
                    staticClass: "mb-2 h2",
                    domProps: {textContent: t._s(t.noResultText.mainText)}
                }), n("p", {staticClass: "text-gray-dark", domProps: {textContent: t._s(t.noResultText.subText)}})])])])
            }, Ls = [];

        function Rs(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Is(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Rs(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rs(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var xs = {
                name: "JobListPc",
                components: {TimeforJobSummery: ms, TimeforJobTitle: ys, FormElementCinputSelect: rn},
                mixins: [qi],
                data: function () {
                    return {jobTitleHeight: 0, windowHeight: 0}
                },
                computed: Is({
                    jobList: function () {
                        return this.getJoblist(this.jobNoList)
                    }, currentJobList: function () {
                        return this.jobList.slice(0, this.jobListPage * this.pageNum)
                    }, optionArray: function () {
                        var t = ["6", "7"], e = [], n = {"data-gtm-filter": "排序"}, o = !0, a = !1, i = void 0;
                        try {
                            for (var s, r = Object.keys(ae).filter((function (t) {
                                return !isNaN(t)
                            }))[Symbol.iterator](); !(o = (s = r.next()).done); o = !0) {
                                var l = s.value;
                                -1 === t.indexOf(l) && e.push({gtm: n, text: ae[l], value: l})
                            }
                        } catch (c) {
                            a = !0, i = c
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return e
                    }, selectOrderVal: {
                        get: function () {
                            var t = On(jn, {order: this.cSearchQuery.order, asc: this.cSearchQuery.asc}) || "0";
                            return t.length ? {value: t[0], text: ae[t[0]]} : {value: "0", text: ae[0]}
                        }, set: function (t) {
                            var e = t.value;
                            this.$store.commit("cSearch/".concat(gt), jn[e]), this.$root.getJobs()
                        }
                    }, jobNoItems: function () {
                        return this.jobList.slice((this.jobListPage - 1) * this.pageNum, this.jobListPage * this.pageNum).map((function (t) {
                            return t.jobNo
                        })).join(",")
                    }, noResultText: function () {
                        return this.isPoolListFirstUpdate ? {
                            mainText: "拍謝，搜尋結果好像很少",
                            subText: "搜尋條件沒有符合的工作機會，請試試放寬條件或尋找其他地點"
                        } : {mainText: "查看附近的工作機會", subText: "試試看輸入『你家地址』，看看離家近的工作機會"}
                    }
                }, Object(st["f"])("cSearch", {
                    cSearchQuery: function (t) {
                        return t.query
                    }
                }), {}, Object(st["f"])("joblist", ["jobNoList", "isPoolListFirstUpdate"]), {}, Object(st["d"])("joblist", ["getJoblist"])),
                watch: {
                    jobNoItems: {
                        handler: function (t) {
                            this.$root.eLogViewJoblist(t, {jobSource: "new_map", viewPage: this.jobListPage})
                        }
                    }
                },
                mounted: function () {
                    this.jobTitleHeight = this.$refs["job-list-header"].getBoundingClientRect().height, this.onResize(), window.addEventListener("resize", this.onResize)
                },
                methods: {
                    onResize: function () {
                        this.windowHeight = window.innerHeight
                    }, base10to36: ya
                }
            }, ks = xs, Es = (n("12dd"), Object(j["a"])(ks, ws, Ls, !1, null, "43d1d8aa", null)), As = Es.exports,
            Us = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("script", {
                    attrs: {type: "application/ld+json"},
                    domProps: {textContent: t._s(t.structuredData)}
                })
            }, Ds = [], Ms = {
                name: "Time4jobsStructuredData", computed: {
                    structuredData: function () {
                        return H(J(JSON.stringify([{
                            "@context": "http://schema.org",
                            "@type": "Organization",
                            name: "104通勤地圖找工作",
                            url: zi.VUE_APP_TIME4JOBS_URL,
                            logo: "https:".concat(zi.VUE_APP_CDN_STATIC_URLimages, "/og/time4jobs.jpg"),
                            description: "104人力銀行首創求職新功能：通勤地圖找工作，透過交通工具、通勤時間，學校附近打工兼職、離家近好工作一手掌握，開車、騎車、搭捷運一鍵查詢。全台最多工作機會，找高薪、福利優工作請上104人力銀行。",
                            contactPoint: [{
                                "@type": "ContactPoint",
                                telephone: "+886-02-2912-6104",
                                contactType: "Customer Service",
                                areaServed: ["TW"],
                                availableLanguage: ["Chinese"]
                            }]
                        }, {
                            "@context": "http://schema.org",
                            "@type": "WebPage",
                            url: zi.VUE_APP_TIME4JOBS_URL,
                            name: "104通勤地圖找工作 ",
                            publisher: {"@type": "Organization", name: "104 人力銀行"}
                        }, {
                            "@context": "http://schema.org",
                            "@type": "WebSite",
                            url: "https:".concat(zi.VUE_APP_DOMAIN_URL),
                            name: "104通勤地圖找工作"
                        }])))
                    }
                }
            }, Ns = Ms, Bs = Object(j["a"])(Ns, Us, Ds, !1, null, null, null), $s = Bs.exports, Vs = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "breadcrumb"}, [t.haveStructureData ? n("script", {
                    attrs: {type: "application/ld+json"},
                    domProps: {textContent: t._s(t.breadCrumbData)}
                }) : t._e(), n("div", {staticClass: "d-flex justify-content-between align-items-center"}, [n("ol", {staticClass: "p-0 m-0 d-flex flex-wrap breadcrumb-list"}, t._l(t.bread, (function (e, o) {
                    return n("li", {
                        key: o,
                        staticClass: "t4 align-bottom mx-2 breadcrumb-list__item"
                    }, [n("div", {staticClass: "text-truncate d-inline-block align-bottom"}, [o !== t.bread.length - 1 ? n("a", {
                        staticClass: "btn-link font-weight-normal",
                        attrs: {href: e.url, title: e.name, "data-gtm-breadcrumb": e.name},
                        domProps: {textContent: t._s(e.name)}
                    }) : n("span", {
                        attrs: {title: e.name, "data-gtm-breadcrumb": e.name},
                        domProps: {textContent: t._s(e.name)}
                    })])])
                })), 0), t.haveGoogleTranslate ? n("div", [n("google-translater")], 1) : t._e()])])
            }, qs = [], Gs = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {attrs: {id: "google_translate_element"}})
            }, Fs = [], Hs = {
                init: function (t) {
                    var e = t.includedlanguage, n = void 0 === e ? [] : e;
                    window.googleTranslateElementInit = function () {
                        var t = Boolean(google.translate && !g()(google.translate));
                        t && new google.translate.TranslateElement({
                            pageLanguage: "zh-TW",
                            includedLanguages: n.join(",")
                        }, "google_translate_element")
                    };
                    var o = document.createElement("script");
                    o.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", document.body.appendChild(o)
                }
            }, Js = {
                name: "GoogleTranslater",
                props: {includedlanguage: b["a"].array.def(["ja", "vi", "zh-TW", "en"])},
                mounted: function () {
                    Hs.init({includedlanguage: this.includedlanguage})
                }
            }, Ks = Js, Qs = Object(j["a"])(Ks, Gs, Fs, !1, null, null, null), Ys = Qs.exports, zs = {
                name: "BreadCrumb",
                components: {GoogleTranslater: Ys},
                props: {
                    bread: b["a"].arrayOf(b["a"].shape({
                        name: b["a"].string.isRequired,
                        url: b["a"].string,
                        gtm: b["a"].object.def({})
                    })).isRequired.def([]), haveStructureData: b["a"].bool.def(!1), haveGoogleTranslate: b["a"].bool.def(!1)
                },
                computed: {
                    breadCrumbData: function () {
                        return H(J(JSON.stringify({
                            "@context": "http://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: this.bread.map((function (t, e) {
                                return {"@type": "ListItem", position: e + 1, name: t.name, item: as(t.url)}
                            }))
                        })))
                    }
                }
            }, Zs = zs, Xs = (n("ea1a"), Object(j["a"])(Zs, Vs, qs, !1, null, "fe813f82", null)), Ws = Xs.exports,
            tr = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "sidebar-recommendation position-absolute bg-white d-none d-md-block border-left"}, [n("div", {
                    staticClass: "sidebar-recommendation_header d-flex align-items-center mt-4 p-4",
                    class: {"sidebar-recommendation_header_hover": t.data.isLogin && t.data.address},
                    attrs: {"data-gtm-joblist": t.data.isLogin ? "取得履歷地址" : ""},
                    on: {click: t.insertAddress}
                }, [t._m(0), n("div", {staticClass: "ml-2"}, [n("p", {staticClass: "h3 text-gray-deep-dark"}, [t._v(" 尋找住家附近的工作 ")]), n("p", {staticClass: "t4 text-truncate mb-0"}, [t.loginFetched ? t.data.isLogin ? t.data.address ? n("span", {staticClass: "text-gray-darker"}, [t._v(t._s(t.data.address))]) : n("a", {
                    attrs: {
                        href: t.my104URL,
                        "data-gtm-joblist": "取得履歷地址"
                    }
                }, [t._v("請先到My104建立履歷")]) : n("a", {
                    attrs: {
                        href: t.loginURL,
                        "data-gtm-joblist": "取得履歷地址"
                    }
                }, [t._v("登入取得住家地址")]) : n("span", {staticClass: "text-gray-darker"}, [t._v("『請稍等一下，取得履歷地址中...』")])])])]), n("div", {staticClass: "sidebar-recommendation_tag-container p-4"}, [n("h3", {staticClass: "mb-3"}, [t._v(" 大家都在搜 ")]), n("div", t._l(t.randomTags, (function (e) {
                    return n("BorderButton", {
                        key: "button-" + e,
                        attrs: {text: e, active: t.selectedTag === e, "data-gtm-joblist": "推薦地標"},
                        nativeOn: {
                            click: function (n) {
                                return t.selectTag(e)
                            }
                        }
                    })
                })), 1)])])
            }, er = [function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "icon-container d-flex justify-content-center align-items-center rounded-circle"}, [n("span", {staticClass: "jb_icon_userhome text-white"})])
            }], nr = {
                GET: "get",
                POST: "post",
                DELETE: "delete",
                PUT: "put",
                PATCH: "patch",
                HEAD: "head",
                OPTIONS: "options",
                TRACE: "trace",
                CONNECT: "connect"
            }, or = {
                namespaced: !0, state: function () {
                    return {data: {isLogin: !1, address: ""}, metadata: {}}
                }, getters: {}, actions: {
                    get: function (t) {
                        var e = t.commit;
                        return this.$http({
                            method: nr.GET,
                            url: "".concat(fa.VUE_APP_TIME4JOBS_API, "userInfo")
                        }).then((function (t) {
                            return e("updateData", t.data.data), e("updateMetadata", t.data.metadata), t
                        })).catch((function (t) {
                        }))
                    }
                }, mutations: {
                    updateData: function (t, e) {
                        t.data = e
                    }, updateMetadata: function (t, e) {
                        t.metadata = e
                    }
                }
            };

        function ar(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function ir(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ar(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ar(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var sr = {
            name: "SidebarRecommendation", components: {BorderButton: F}, data: function () {
                return {
                    tags: ["桃園機場", "天母SOGO", "新竹科學園區", "板橋車站", "松山機場", "台北車站", "西門町", "新竹巨城百貨", "捷運三重站", "捷運古亭站"],
                    coordinate: {
                        "桃園機場": {lat: 25.0796514, lon: 121.234217},
                        "天母SOGO": {lat: 25.1053498, lon: 121.5246797},
                        "新竹科學園區": {lat: 24.7823005, lon: 121.0062859},
                        "板橋車站": {lat: 25.0144408, lon: 121.4632745},
                        "松山機場": {lat: 25.067566, lon: 121.552699},
                        "台北車站": {lat: 25.067566, lon: 121.552699},
                        "西門町": {lat: 25.0446664, lon: 121.5063096},
                        "新竹巨城百貨": {lat: 24.8098161, lon: 120.9751319},
                        "捷運三重站": {lat: 25.0545947, lon: 121.482874},
                        "捷運古亭站": {lat: 25.0265508, lon: 121.5228141}
                    },
                    selectedTag: null,
                    headerHover: !1,
                    loginFetched: !1
                }
            }, computed: ir({
                randomTags: function () {
                    for (var t = Object(m["a"])(this.tags), e = 0; e < 5; e++) t.splice(Math.floor(Math.random() * t.length), 1);
                    return t
                }, loginURL: function () {
                    return ss(zi.VUE_APP_TIME4JOBS_URL)
                }, my104URL: function () {
                    return zi.VUE_APP_MY104_URL + "profile"
                }
            }, Object(st["f"])("api/UserInfo", ["data"])), created: function () {
                this.$store.registerModule("api/UserInfo", or)
            }, destroyed: function () {
                this.$store.unregisterModule("api/UserInfo")
            }, mounted: function () {
                var t = this;
                this.get().then((function (e) {
                    t.loginFetched = !0
                }))
            }, methods: ir({
                selectTag: function (t) {
                    var e = this;
                    this.isolineUpdateQuery({
                        address: t,
                        tLat: this.coordinate[t].lat.toString(),
                        tLon: this.coordinate[t].lon.toString(),
                        rsm: ""
                    }), this.$root.getIsolineAndJobs().then((function (n) {
                        e.selectedTag = t, e.setLocationInput(t), e.$emit(re, new wt(le.SUBMIT_SIDEBAR_RECOMMENDATION))
                    }))
                }, insertAddress: function () {
                    var t = this;
                    this.data.isLogin && this.data.address && (this.isolineUpdateQuery({
                        address: this.data.address,
                        tLat: "",
                        tLon: "",
                        rsm: "1"
                    }), this.$root.getIsolineAndJobs().then((function (e) {
                        t.setLocationInput(t.data.address), t.$emit(re, new wt(le.SUBMIT_SIDEBAR_RECOMMENDATION))
                    })))
                }
            }, Object(st["e"])("searchmain", ["setLocationInput"]), {}, Object(st["e"])("cIsoline", {isolineUpdateQuery: ut}), {}, Object(st["c"])("api/UserInfo", ["get"]))
        }, rr = sr, lr = (n("5e7d"), Object(j["a"])(rr, tr, er, !1, null, "088a439c", null)), cr = lr.exports;
        n("45fc");

        function ur(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function pr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ur(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ur(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var mr, dr = {
            mounted: function () {
                var t = this;
                this.isolineUpdateQuery(pr({
                    transType: "2",
                    time: "15"
                }, this.$route.query)), this.cSearchUpdateQuery(pr({
                    showLatLon: "1",
                    order: "12",
                    asc: "0",
                    dist: this.timeToDist
                }, this.$route.query)), this.time4jobsUpdateQuery(this.$route.query), this.$root.isMobile() || (this.$root.syncSubTransTypeData(), this.cSearchUpdateEnabledTab(7)), "1" !== localStorage.getItem("time4jobs_storage_version") && (localStorage.removeItem("lastSearch"), localStorage.removeItem("locationSearchHistory"), localStorage.removeItem("geocodeHistory"), localStorage.setItem("time4jobs_storage_version", "1"));
                var e = null, n = null, o = null;
                try {
                    e = JSON.parse(localStorage.getItem("lastSearch")), n = JSON.parse(localStorage.getItem("locationSearchHistory")), o = JSON.parse(localStorage.getItem("geocodeHistory"))
                } catch (s) {
                }
                if (n && this.setLocationHistory(n), o && this.setCenterHistory(o), this.urlValidate) this.cSearchIsLookingAround && 1 == this.cSearchIsLookingAround ? (this.$refs["cluster-map"].reSearchJobs(), localStorage.setItem("lastSearch", JSON.stringify(this.query))) : this.$root.getIsolineAndJobs(!0); else if (e && this.queryValidationHelper(e)) this.isolineUpdateQuery(e), this.cSearchUpdateQuery(e), g()(this.time4jobsGetMeaningfulQuery) && this.time4jobsUpdateQuery(e), this.$root.syncSubTransTypeData(), this.$root.getIsolineAndJobs(!0); else if (this.$root.isMobile()) {
                    if (navigator.geolocation && this.isGetUserPosition) {
                        var a = 0;
                        this.$CLoading.show();
                        var i = {dist: "15", transType: "2"};
                        navigator.geolocation.getCurrentPosition((function (e) {
                            a = 1, t.setLocationInput("目前所在位置"), t.isolineUpdateQuery(pr({}, i, {
                                tLat: e.coords.latitude.toFixed(6),
                                tLon: e.coords.longitude.toFixed(6)
                            })), t.$root.eLogDenyLct({isDeny: !1}), t.$root.getIsolineAndJobs(!0)
                        }), (function (t) {
                            a = 2
                        })), 2 !== a && 0 !== a || (this.$root.eLogDenyLct({isDeny: !0}), this.$root.getIsolineAndJobs(!0), this.$root.searchMain.openPopupMobileInput(), this.$CLoading.hide())
                    }
                } else this.showRecommendation = !0
            },
            computed: pr({
                urlValidate: function () {
                    return this.queryValidationHelper(this.$route.query)
                }, isGetUserPosition: function () {
                    if (this.$root.isMobile()) return !0;
                    var t = "MZFh34JgTASgG7dBQrRmVA", e = window.$cookies.get("_gaexp");
                    return !!e && e.substr(7).split("!").map((function (t) {
                        return t.split(".")
                    })).some((function (e) {
                        return e[0] === t && "1" === e[2]
                    }))
                }, query: function () {
                    return pr({}, this.cIsolineGetMeaningfulQuery, {}, this.cSearchGetMeaningfulQuery, {}, this.time4jobsGetMeaningfulQuery)
                }, timeToDist: function () {
                    var t = [1.5, .25, .75, 2, .875],
                        e = parseInt(this.$route.query.time) / 5 * t[parseInt(this.$route.query.transType) - 1];
                    return e
                }
            }, Object(st["f"])("cSearch", {
                cSearchIsLookingAround: function (t) {
                    return t.query.isLookingAround
                }
            }), {}, Object(st["d"])("query", {time4jobsGetMeaningfulQuery: "getMeaningfulQuery"}), {}, Object(st["d"])("cIsoline", {cIsolineGetMeaningfulQuery: ct}), {}, Object(st["d"])("cSearch", {cSearchGetMeaningfulQuery: mt})),
            methods: pr({
                queryValidationHelper: function (t) {
                    var e = ["time", "transType"].reduce((function (e, n) {
                        return e && t[n]
                    })), n = t.tLat && t.tLon || t.address;
                    return Boolean(e && n)
                }
            }, Object(st["e"])("cIsoline", {isolineUpdateQuery: ut}), {}, Object(st["e"])("cSearch", {
                cSearchUpdateQuery: gt,
                cSearchUpdateEnabledTab: yt
            }), {}, Object(st["e"])("query", {time4jobsUpdateQuery: "updateQuery"}), {}, Object(st["e"])("searchmain", ["setLocationInput"]), {}, Object(st["e"])("isoline", ["setLocationHistory", "setCenterHistory"]))
        };

        function hr(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function br(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? hr(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hr(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var fr = "104人力銀行首創求職新功能：通勤地圖找工作，透過定位與交通工具、通勤時間，學校附近打工兼職、離家近好工作、二度就業工作一手掌握，開車、騎車、搭捷運一鍵查詢。找附近工作請上104通勤地圖找工作。",
            gr = {1: "工作", 2: "打工、兼職、工讀"}, yr = {1: "騎車", 4: "開車"}, _r = {
                mounted: function () {
                    var t = this, e = this.$watch("isPoolListFirstUpdate", (function (n) {
                        document.head.querySelector("meta[name=description]").content = t.metaDescription, document.head.querySelector("meta[property='og:description']").content = t.metaDescription, document.head.querySelector("meta[property='og:webscraper']").content = window.location.href, document.head.querySelector("link[rel=canonical]").href = window.location.href, document.head.querySelector("meta[property='og:title']").content = t.metaTitle, e()
                    }));
                    mr = this.$store.subscribe((function (e) {
                        ["joblist/updatePoolList", "apiIsoline/updateResponse"].indexOf(e.type) > -1 && (document.title = t.metaTitle)
                    }))
                },
                beforeDestroy: function () {
                    mr()
                },
                computed: br({}, Object(st["d"])("searchmain", ["jobCatText"]), {}, Object(st["f"])("joblist", {
                    isPoolListFirstUpdate: function (t) {
                        return t.isPoolListFirstUpdate
                    }, joblist: function (t) {
                        return t.apiData.pool.data.list
                    }
                }), {}, Object(st["f"])("cSearch", {
                    keyword: function (t) {
                        return t.query.keyword
                    }, ro: function (t) {
                        return t.query.ro
                    }
                }), {}, Object(st["f"])("cIsoline", {
                    transType: function (t) {
                        return t.query.transType
                    }, time: function (t) {
                        return t.query.time
                    }, address: function (t) {
                        return t.query.address
                    }
                }), {}, Object(st["f"])("apiIsoline", {
                    nearMetro: function (t) {
                        return t.data.nearMetro
                    }
                }), {
                    decRoText: function () {
                        return this.ro ? gr[this.ro] ? gr[this.ro] : Kt[this.ro] : gr["1"]
                    }, decAddressText: function () {
                        return this.address ? "".concat(this.address, "附近") : "附近"
                    }, decTransTypeText: function () {
                        return yr[this.transType] ? yr[this.transType] : Ht[this.transType]
                    }, jobAndCatsNameList: function () {
                        return H(this.joblist.slice(0, 10).map((function (t) {
                            return "".concat(t.jobName, "【").concat(t.custName, "】")
                        })).join("、"))
                    }, metaTitle: function () {
                        var t = this.jobCatText && "職務類別" !== this.jobCatText ? "｜" + this.jobCatText : "",
                            e = this.decAddressText + this.keyword + this.decRoText + t;
                        return e + "｜104通勤地圖找工作"
                    }, metaDescription: function () {
                        var t = "";
                        return this.joblist.length > 0 ? (t = "【".concat(this.decAddressText, "：").concat(this.decTransTypeText + this.time, "分鐘內，共").concat(this.joblist.length, "個工作機會】"), t + this.jobAndCatsNameList) : (t = "【".concat(this.decAddressText, "：").concat(this.decTransTypeText + this.time, "分鐘內】的").concat(this.decRoText, "機會。"), t + fr)
                    }
                })
            };
        var Tr = function () {
            return window.navigator.userAgent.indexOf("M104app") > -1
        };

        function Sr() {
            var t = document.getElementById("global-white-bar");
            t && (t.style.display = Tr() ? "none" : "block")
        }

        function Pr(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Cr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Pr(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Or = {
                name: "Index",
                components: {
                    ClusterMap: Ma,
                    SearchMain: qt,
                    JoblistMobile: js,
                    JoblistPc: As,
                    SubFilterContentArea: jo,
                    SubFilterMobileContentArea: Ni,
                    SubFilterTabsBar: fe,
                    StructuredData: $s,
                    BreadCrumb: Ws,
                    SidebarRecommendation: cr
                },
                mixins: [_r, dr, Et],
                data: function () {
                    return {
                        subFilterSetting: {tabs: [7, 0, 8, 1, 2, 3, 5], tabsForMobile: [7, 8, 5], tools: [0, 2]},
                        breadcrumbList: [{
                            name: "104 人力銀行",
                            url: "https:".concat(zi.VUE_APP_DOMAIN_URL)
                        }, {name: "104通勤地圖找工作", url: zi.VUE_APP_TIME4JOBS_URL}, {
                            name: "附近工作列表",
                            url: window.location.href
                        }],
                        transData: {transType: "", time: ""},
                        showRecommendation: !1,
                        browser: this.browserDetect(),
                        hasM104App: Tr()
                    }
                },
                computed: Cr({}, Object(st["f"])("ui", ["jobListStep"]), {}, Object(st["f"])("cSearch", {
                    keyword: function (t) {
                        return t.query.keyword
                    }
                }), {}, Object(st["f"])("cIsoline", {
                    cIsolineQuery: function (t) {
                        return t.query
                    }, address: function (t) {
                        return t.query.address
                    }
                }), {}, Object(st["f"])("joblist", {
                    joblistApi: function (t) {
                        return t.apiData.pool
                    }
                }), {}, Object(st["d"])("searchmain", ["jobCatText"]), {
                    calcTransTypeData: {
                        get: function () {
                            return this.transData.transType || this.transData.time ? this.transData : {
                                transType: this.cIsolineQuery.transType,
                                time: this.cIsolineQuery.time
                            }
                        }, set: function (t) {
                            this.transData = Cr({
                                transType: this.transData.transType || this.cIsolineQuery.transType,
                                time: this.transData.time || this.cIsolineQuery.time
                            }, t)
                        }
                    }, timeToDist: function () {
                        var t = [1.5, .25, .75, 2, .875],
                            e = parseInt(this.calcTransTypeData.time) / 5 * t[parseInt(this.calcTransTypeData.transType) - 1];
                        return this.isolineUpdateQuery({dist: e}), e
                    }
                }),
                mounted: function () {
                    var t = this;
                    Sr(), this._actFetchLogin();
                    var e = this.$watch("joblistApi", (function (n) {
                        var o = "職務類別" !== t.jobCatText ? t.jobCatText : "", a = o && t.keyword ? "、" : "",
                            i = o || t.keyword ? "｜" : "";
                        t.breadcrumbList[2].name = "".concat(t.keyword + a + o + i + t.address, "附近工作列表"), e()
                    }))
                },
                methods: Cr({}, Object(st["c"])({_actFetchLogin: "api/examLogin/get"}), {
                    cancelSearch: function () {
                        this.$root.resetCluster()
                    }, onSearchEvent: function (t) {
                        switch (t.event) {
                            case le.SELECT_OPTION:
                                t.param && t.param[0] && ("time" === t.param[0].type || "transType" === t.param[0].type) ? this.calcTransTypeData = Object(l["a"])({}, t.param[0].type, t.param[0].value[0]) : this.$root.isMobile() && t.param && t.param[0] && "ro" === t.param[0].type || (this.$root.resetAll(), this.$root.getJobs());
                                break;
                            case le.SUBMIT_TRANSFER:
                                this.$refs["main-search"].searchJobs(), this[yt](null);
                                break;
                            case le.SUBMIT_MOBILE_MORE:
                                this.$root.getIsolineAndJobs();
                                break;
                            case le.SUBMIT_MOBILE_BASIC:
                                this.$root.resetAll(), this.$root.getJobs();
                                break;
                            case le.SUBMIT_MOBILE_TRANSFER:
                                this.$refs["main-search"].searchJobs();
                                break;
                            case le.UPDATE_TAB:
                                7 != t.param[0].value[0] && (this.calcTransTypeData = {
                                    transType: "",
                                    time: ""
                                }, this.$root.syncSubTransTypeData());
                                break;
                            case le.CLEAR_OPTIONS:
                                this.$root.resetAll(), this.$root.getJobs();
                                break;
                            case Rt.SUBMIT_MAIN:
                                this.onSearchMainSend();
                                break;
                            case le.CLICK_SHARE:
                                break;
                            case le.SUBMIT_SIDEBAR_RECOMMENDATION:
                                this.showRecommendation = !1;
                                break;
                            default:
                                break
                        }
                    }, onSearchMainSend: function () {
                        this.isolineUpdateQuery({
                            transType: this.calcTransTypeData.transType,
                            time: this.calcTransTypeData.time
                        }), this.$root.getIsolineAndJobs(), this.showRecommendation = !1, this[yt](null)
                    }
                }, Object(st["e"])("cSearch", [yt]), {}, Object(st["e"])("searchmain", ["setLocationInput", "setKeywordInput"]), {}, Object(st["e"])("ui", ["setJobListStep"]), {}, Object(st["e"])("cIsoline", {isolineUpdateQuery: ut}))
            }, vr = Or, jr = (n("5ed0"), n("2575"), Object(j["a"])(vr, s, r, !1, null, "08ea928b", null)), wr = jr.exports,
            Lr = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "landing"}, [n("div", {staticClass: "landing__content"}, [n("div", {
                    staticClass: "landing__content-input px-4",
                    class: {"has-m104App": t.hasM104App}
                }, [n("p", {
                    staticClass: "mb-2",
                    domProps: {textContent: t._s("離家近的工作")}
                }), n("p", {
                    staticClass: "t3",
                    domProps: {textContent: t._s("通勤時間短一點，讓你賴床久一點")}
                }), n("form-element-input-box", {attrs: {error: !!t.errorMsg}}, [n("template", {slot: "input"}, [n("input", {
                    ref: "inputSection",
                    staticClass: "form-control bg-white",
                    attrs: {type: "text", placeholder: "居住地址、地標"},
                    domProps: {value: t.inputText},
                    on: {
                        input: t.inputTying, keydown: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.inputEnter(e)
                        }
                    }
                }), n("i", {
                    staticClass: "jb_icon_edit position-absolute text-gray-darker", on: {
                        click: function (e) {
                            return t.$refs.inputSection.select()
                        }
                    }
                })]), n("template", {slot: "valid"}, [t.errorMsg ? n("div", [t._v(" " + t._s(t.errorMsg) + " ")]) : t._e()])], 2), n("div", {staticClass: "mt-6"}, [n("div", {staticClass: "row mx-0"}, [n("time4jobs-btn", {
                    staticClass: "col-4 landing__content-input-btn",
                    attrs: {
                        "icon-class-name": "jb_icon_mapmetro",
                        text: "用捷運找",
                        gtm: {"data-gtm-param": "landing-定位選項"}
                    },
                    on: {
                        click: function (e) {
                            return t.openCategory("Mrt")
                        }
                    }
                }), n("time4jobs-btn", {
                    staticClass: "col-4 landing__content-input-btn",
                    attrs: {
                        "icon-class-name": "jb_icon_map_school",
                        text: "用學校找",
                        gtm: {"data-gtm-param": "landing-定位選項"}
                    },
                    on: {
                        click: function (e) {
                            return t.openCategory("AreaSch")
                        }
                    }
                }), n("time4jobs-btn", {
                    staticClass: "col-4 landing__content-input-btn",
                    attrs: {
                        "icon-class-name": "jb_icon_mapwalk",
                        text: "到處看看",
                        gtm: {"data-gtm-param": "landing-定位選項"}
                    },
                    on: {click: t.getUserGeolocation}
                })], 1)])], 1), n("div", {
                    staticClass: "landing__content-filter bg-white p-4 pt-5 position-absolute",
                    class: {"has-m104App": t.hasM104App}
                }, [n("search-sub-trans-type", {
                    attrs: {
                        "is-mobile": !0,
                        "default-param": {timeRange: 15, selectedTags: "1"}
                    }, on: {"search-event": t.onSearchEvent}
                })], 1)]), n("div", {staticClass: "landing__footer p-3 w-100 position-fixed bg-white d-flex align-items-center justify-content-center"}, [n("button", {
                    staticClass: "btn-sm btn-secondary btn-block t4",
                    domProps: {textContent: t._s("搜尋工作")},
                    on: {click: t.navigateToIndex}
                })]), n("c-loading", {attrs: {mask: !0}})], 1)
            }, Rr = [], Ir = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "form-element-inputbox",
                    class: {
                        "form-element-inputbox--error": t.error,
                        "form-element-inputbox--has-tips": t.hasTipsSlot && t.showTipsRule,
                        "form-element-inputbox--tag-active": t.isTagInputActive && !t.disabled,
                        "form-element-inputbox--errorSpace": t.errorSpace,
                        "form-element-inputbox--disabled": t.disabled,
                        "form-element-inputbox--textarea-resize": t.textAreaResize
                    }
                }, [t._t("input"), t.hasTipsSlot && t.showTipsRule ? n("div", {staticClass: "t3 form-element-inputbox__textarea-tips"}, [t._t("textarea-tips")], 2) : t._e(), n("div", {staticClass: "t3 form-element-inputbox__valid"}, [t._t("valid")], 2)], 2)
            }, xr = [], kr = 108, Er = 231, Ar = {
                name: "FormElementInputbox",
                props: {
                    error: b["a"].bool.def(!1),
                    showTipsRule: b["a"].bool.def(!0),
                    errorSpace: b["a"].bool.def(!1),
                    disabled: b["a"].bool.def(!1),
                    textAreaMinHeight: b["a"].number.def(kr),
                    textAreaMaxHeight: b["a"].number.def(Er),
                    textAreaResize: b["a"].bool.def(!0)
                },
                data: function () {
                    return {isTagInputActive: !1}
                },
                computed: {
                    hasTipsSlot: function () {
                        return !!this.$slots["textarea-tips"]
                    }, hasValidSlot: function () {
                        return !!this.$slots["valid"]
                    }
                },
                mounted: function () {
                    var t = this;
                    this.$slots["input"] && "textarea" === this.$slots["input"][0].tag && setTimeout((function () {
                        t.setTextAreaHeight()
                    }))
                },
                updated: function () {
                    this.$slots["input"] && "textarea" === this.$slots["input"][0].tag && this.setTextAreaHeight()
                },
                methods: {
                    setTextAreaHeight: function () {
                        this.textAreaOnInput(this.$slots["input"][0].elm)
                    }, textAreaOnInput: function (t) {
                        this.textAreaResize || (t.style.height = "0px");
                        var e = t.scrollHeight + 2;
                        !this.textAreaResize && e > this.textAreaMaxHeight ? t.style.height = this.textAreaMaxHeight + "px" : e > this.textAreaMinHeight && (t.style.height = e + "px")
                    }, triggerActive: lt()((function (t) {
                        this.isTagInputActive = t
                    }), 50)
                }
            }, Ur = Ar, Dr = (n("2f03"), Object(j["a"])(Ur, Ir, xr, !1, null, "5fa5e61b", null)), Mr = Dr.exports,
            Nr = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "time4jobs-btn"}, [n("div", t._b({
                    staticClass: "d-inline-block time4jobs-btn__wrap",
                    on: {
                        click: function (e) {
                            return t.$emit("click")
                        }
                    }
                }, "div", t.gtm, !1), [n("div", {staticClass: "d-flex align-items-center justify-content-center time4jobs-btn__wrap__content"}, [n("i", {
                    staticClass: "d-inline-block text-gray-darker t3 time4jobs-btn__wrap__content__icon",
                    class: t.iconClassName
                }), n("div", {
                    staticClass: "h4 text-gray-darker d-inline-block ml-1",
                    domProps: {textContent: t._s(t.text)}
                })])])])
            }, Br = [], $r = {
                name: "Time4jobsBtn",
                props: {iconClassName: b["a"].string.def(""), text: b["a"].string.def(""), gtm: b["a"].object.def({})}
            }, Vr = $r, qr = (n("68f9"), Object(j["a"])(Vr, Nr, Br, !1, null, "6a66c3f0", null)), Gr = qr.exports;
        n("6062"), n("c740"), n("a630"), n("caad"), n("2532");

        function Fr(t) {
            t.forEach((function (t) {
                var e = t.attr, n = t.attrName, o = t.content, a = t.allowReplace, i = void 0 === a || a,
                    s = document.head.querySelector("meta[".concat(e, "='").concat(n, "']"));
                if (s && i) s.content = o; else {
                    var r = document.createElement("meta");
                    r.setAttribute(e, n), r.content = o, document.head.appendChild(r)
                }
            }))
        }

        function Hr(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Jr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Hr(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Kr, Qr, Yr = {utm_source: "104", utm_medium: "app", utm_campaign: "nearmyhome_2"}, zr = {
                name: "Landing",
                components: {SearchSubTransType: xe, FormElementInputBox: Mr, Time4jobsBtn: Gr},
                data: function () {
                    return {
                        env: zi,
                        inputText: "",
                        errorMsg: "",
                        transData: {transType: "1", time: "15"},
                        baseQuery: Jr({}, this.$route.query, {
                            utm_source: this.$route.query.utm_source ? this.$route.query.utm_source : Yr.utm_source,
                            utm_medium: this.$route.query.utm_medium ? this.$route.query.utm_medium : Yr.utm_medium,
                            utm_campaign: this.$route.query.utm_campaign ? this.$route.query.utm_campaign : Yr.utm_campaign
                        }),
                        inputCategory: {id: "", lat: "", lon: ""},
                        isClickLookingAround: !1,
                        hasM104App: Tr()
                    }
                },
                created: function () {
                    var t = this, e = function () {
                        t.$store.registerModule("api/UserInfo", or), t.$store.dispatch("api/UserInfo/get").then((function (e) {
                            t.inputText = t.$store.state["api/UserInfo"].data.address, t.$store.unregisterModule("api/UserInfo")
                        }))
                    };
                    Fr([{
                        attr: "name",
                        attrName: "robots",
                        content: "noindex,nofollow,noarchive"
                    }]), this.$root.isMobile() || this.$router.push({path: "/"}), e()
                },
                mounted: function () {
                    Sr(), window.$cookies.get("landingQuery") && window.$cookies.set("isLandingSearched", "1", "1y");
                    var t = window.$cookies.get("isLandingSearched");
                    t && this.$router.push({path: "/", query: this.baseQuery})
                },
                beforeDestroy: function () {
                    var t = document.head.querySelector("meta[content='noindex,nofollow,noarchive']");
                    document.head.removeChild(t)
                },
                methods: {
                    onSearchEvent: function (t) {
                        this.transData = Jr({}, this.transData, Object(l["a"])({}, t.param[0].type, t.param[0].value[0]))
                    }, inputEnter: function (t) {
                        229 != t.keyCode && this.navigateToIndex()
                    }, inputTying: function (t) {
                        this.inputText = t.target.value.trim(), this.errorMsg = this.inputText ? "" : "請填寫", this.inputCategory = {
                            id: "",
                            lat: "",
                            lon: ""
                        }
                    }, navigateToIndex: function () {
                        if (!this.inputText && !this.isClickLookingAround) return this.errorMsg = "請填寫";
                        if (K(this.inputText)) return this.errorMsg = '請勿輸入以下特殊符號\\’<>!():^[]{}~?%*"';
                        var t = {transType: this.transData.transType, time: this.transData.time, address: this.inputText};
                        window.$cookies.set("isLandingSearched", "1", "1y");
                        var e = Jr({}, t, {}, this.baseQuery);
                        this.inputCategory.lat && this.inputCategory.lon && (this.inputCategory.id && (e.inputCategoryId = this.inputCategory.id), this.isClickLookingAround && (e.isLookingAround = 1), e.tLat = this.inputCategory.lat, e.tLon = this.inputCategory.lon), this.$router.push({
                            path: "/",
                            query: e
                        })
                    }, openCategory: function (t) {
                        var e = this;
                        "Mrt" == t ? vt.open({
                            dataSource: t,
                            theme: "customer-theme",
                            recommendation: !1,
                            maxSelectedNumber: 1,
                            searchLevel: 1,
                            unselectableList: "[0-9]{8}000",
                            onSubmit: function (t) {
                                var n = t.selectedItems[0];
                                e.inputText = "".concat(n.des, "捷運"), e.inputCategory = {
                                    id: at[n.no].opendata_id,
                                    lat: at[n.no].lat,
                                    lon: at[n.no].lon
                                }
                            }
                        }) : vt.open({
                            dataSource: t,
                            theme: "customer-theme",
                            title: "學校列表",
                            recommendation: !1,
                            maxSelectedNumber: 1,
                            blacklist: "[0-9]{4}00[1-9]000",
                            unselectableList: "6[0-9]{9}",
                            searchable: !0,
                            responsiveMode: "mobile",
                            onSubmit: function (t) {
                                var n = t.selectedItems[0];
                                e.inputText = n.des, e.inputCategory = {lat: it[n.no].lat, lon: it[n.no].lon}
                            }
                        })
                    }, getUserGeolocation: function () {
                        var t = this;
                        this.isClickLookingAround = !0, this.inputCategory = {
                            lat: 25.04937,
                            lon: 121.54158
                        }, navigator.geolocation ? (this.$CLoading.show(), navigator.geolocation.getCurrentPosition((function (e) {
                            t.inputCategory = {
                                lat: e.coords.latitude.toFixed(6),
                                lon: e.coords.longitude.toFixed(6)
                            }, t.$CLoading.hide(), t.navigateToIndex()
                        }), (function (e) {
                            t.$CLoading.hide(), t.navigateToIndex()
                        }))) : (this.$CLoading.hide(), this.navigateToIndex())
                    }
                }
            }, Zr = zr, Xr = (n("6521"), Object(j["a"])(Zr, Lr, Rr, !1, null, "1c995646", null)), Wr = Xr.exports,
            tl = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("router-view", {ref: "root"})
            }, el = [], nl = {name: "App"}, ol = nl, al = Object(j["a"])(ol, tl, el, !1, null, null, null),
            il = al.exports, sl = {
                namespaced: !0,
                state: {locationHistory: [], centerHistory: []},
                mutations: {
                    setLocationHistory: function (t, e) {
                        t.locationHistory = Object(m["a"])(e)
                    }, setCenterHistory: function (t, e) {
                        t.centerHistory = Object(m["a"])(e)
                    }
                },
                actions: {
                    updateLocationHistory: function (t, e) {
                        var n = t.commit;
                        n("setLocationHistory", [e]), localStorage.setItem("locationSearchHistory", JSON.stringify([e]))
                    }, updateCenterHistory: function (t, e) {
                        var n = t.commit, o = JSON.parse(localStorage.getItem("geocodeHistory")) || [];
                        o = o.filter((function (t) {
                            return t.address !== e.address
                        })), o.unshift(e), o.length > 10 && o.pop(), n("setCenterHistory", o), localStorage.setItem("geocodeHistory", JSON.stringify(o))
                    }
                }
            }, rl = {
                namespaced: !0,
                state: {
                    apiData: {
                        pool: {
                            status: 0,
                            action: [],
                            data: {cacheId: 0, list: [], filterDesc: {jobcat: []}, statusMsg: "", errorMsg: ""}
                        }
                    }, jobNoList: [], jobListPage: 1, isPoolListFirstUpdate: !1
                },
                getters: {
                    getJoblist: function (t) {
                        return function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return e.length ? t.apiData.pool.data.list.filter((function (t) {
                                return -1 !== e.indexOf(t.jobNo)
                            })) : t.apiData.pool.data.list
                        }
                    }
                },
                mutations: {
                    setJobNoList: function (t, e) {
                        t.jobNoList = e
                    }, updatePoolList: function (t, e) {
                        t.apiData.pool = e
                    }, setJobListPage: function (t, e) {
                        t.jobListPage = e
                    }, setSaveJobItem: function (t, e) {
                        var n = e.index, o = e.status;
                        t.apiData.pool.data.list[n].isSave = o
                    }, setIsPoolListFirstUpdate: function (t, e) {
                        t.isPoolListFirstUpdate = e
                    }
                },
                actions: {
                    fetchPoolList: function (t) {
                        var e = t.dispatch, n = t.commit, o = t.rootGetters, a = t.state, i = t.rootState,
                            s = o["cSearch/".concat(mt)], r = Object.keys(s).reduce((function (t, e) {
                                return t[e] = encodeURIComponent(s[e]), t
                            }), {}), l = Object.entries(r).map((function (t) {
                                return t.join("=")
                            })).join("&");
                        return e("api/pool/get", l, {root: !0}).then((function (t) {
                            n("updatePoolList", i.api.pool.data), a.isPoolListFirstUpdate || n("setIsPoolListFirstUpdate", !0)
                        }))
                    }, savePoolListJob: function (t, e) {
                        var n = t.state, o = t.commit, a = e.jobNo, i = e.status;
                        n.apiData.pool.data.list.forEach((function (t, e) {
                            t.jobNo === a && o("setSaveJobItem", {index: e, status: i})
                        }))
                    }
                }
            };

        function ll(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function cl(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ll(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ll(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var ul = {jobcat: "", keyword: "", lat: "", lon: "", inputCategoryId: "", isLookingAround: ""}, pl = {
            isnew: "",
            ro: "",
            s5: "",
            s9: "",
            wktm: "",
            sr: "",
            sctp: "",
            scmin: "",
            scmax: "",
            scstrict: "",
            scneg: "",
            jobexp: "",
            edu: "",
            wf: "",
            wt: "",
            rostatus: "",
            dis_role: "",
            manage: ""
        }, ml = {
            keyword: "",
            isnew: "",
            s5: "",
            s9: "",
            wktm: "",
            sr: "",
            sctp: "",
            scmin: "",
            scmax: "",
            scstrict: "",
            scneg: "",
            jobexp: "",
            edu: "",
            wf: "",
            wt: "",
            rostatus: "",
            dis_role: "",
            manage: ""
        }, dl = {
            namespaced: !0,
            state: {
                query: cl({}, ul, {}, pl, {
                    kwop: "",
                    excludeKeyword: "",
                    area: "",
                    indcat: "",
                    expcate: "",
                    order: "",
                    asc: "",
                    zone: "",
                    dep: "",
                    lang: "",
                    excludeJobKeyword: "",
                    excludeCompanyKeyword: "",
                    excludeCompanyByCustno: "",
                    excludeIndustryCat: "",
                    startby: "",
                    page: "",
                    mode: "",
                    jobsource: "",
                    c: "",
                    custNo: "",
                    jobNo: "",
                    dist: "",
                    indArea: "",
                    newZone: "",
                    searchTempExclude: "",
                    showLatLon: "",
                    cacheId: ""
                }), enabledTab: null
            },
            getters: (Kr = {}, Object(l["a"])(Kr, St.GET_MEANINGFUL_QUERY, (function (t) {
                for (var e = {}, n = 0, o = Object.keys(t.query); n < o.length; n++) {
                    var a = o[n];
                    t.query[a] && (e[a] = t.query[a])
                }
                return e
            })), Object(l["a"])(Kr, St.GET_MOBILE_SUB_FILTER_MORE_QUERY, (function (t) {
                for (var e = {}, n = 0, o = Object.keys(ml); n < o.length; n++) {
                    var a = o[n];
                    e[a] = encodeURIComponent(t.query[a])
                }
                return e
            })), Object(l["a"])(Kr, St.GET_MOBILE_SUB_FILTER_QUERY, (function (t) {
                for (var e = {}, n = 0, o = Object.keys(pl); n < o.length; n++) {
                    var a = o[n];
                    e[a] = t.query[a]
                }
                return e
            })), Object(l["a"])(Kr, St.GET_SUB_FILTER_STATUS, (function (t) {
                for (var e = 0, n = Object.keys(pl); e < n.length; e++) {
                    var o = n[e];
                    if (t.query[o] && "0" !== t.query.ro) return !0
                }
                return !1
            })), Object(l["a"])(Kr, St.GET_MOBILE_SUB_FILTER_MORE_STATUS, (function (t) {
                for (var e = ["keyword"], n = 0, o = Object.keys(ml); n < o.length; n++) {
                    var a = o[n];
                    if (-1 == e.indexOf(a) && t.query[a]) return !0
                }
                return !1
            })), Kr),
            mutations: (Qr = {}, Object(l["a"])(Qr, St.UPDATE_QUERY, (function (t, e) {
                for (var n = 0, o = Object.keys(e); n < o.length; n++) {
                    var a = o[n];
                    -1 !== Object.keys(t.query).indexOf(a) && (t.query = cl({}, t.query, Object(l["a"])({}, a, decodeURIComponent(e[a]).split(",").filter(Boolean).sort().join(","))))
                }
            })), Object(l["a"])(Qr, St.CLEAR_SUB_FILTER, (function (t) {
                t.query = cl({}, t.query, {}, pl, {cacheId: ""})
            })), Object(l["a"])(Qr, St.CLEAR_MOBILE_SUB_FILTER_MORE, (function (t) {
                t.query = cl({}, t.query, {}, ml)
            })), Object(l["a"])(Qr, St.UPDATE_ENABLED_TAB, (function (t, e) {
                t.enabledTab = e
            })), Qr),
            actions: {}
        };

        function hl(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function bl(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? hl(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hl(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var fl = {
            namespaced: !0,
            state: {query: {transType: "", tLat: "", tLon: "", time: "", address: "", rsm: ""}},
            getters: Object(l["a"])({}, pt.GET_MEANINGFUL_QUERY, (function (t) {
                for (var e = {}, n = 0, o = Object.keys(t.query); n < o.length; n++) {
                    var a = o[n];
                    t.query[a] && "rsm" !== a && (e[a] = t.query[a])
                }
                return e
            })),
            mutations: Object(l["a"])({}, pt.UPDATE_QUERY, (function (t, e) {
                for (var n = 0, o = Object.keys(e); n < o.length; n++) {
                    var a = o[n];
                    -1 !== Object.keys(t.query).indexOf(a) && (t.query = bl({}, t.query, Object(l["a"])({}, a, decodeURIComponent(e[a]))))
                }
            }))
        };

        function gl(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function yl(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? gl(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gl(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var _l = {
            namespaced: !0,
            state: {
                jobListStep: {now: -1, last: -1},
                subSearchIndex: null,
                userTouchCluster: {jobNo: {mouseover: "", mouseclick: ""}, type: ""},
                componentWidth: {jobListPc: 0},
                mapClickAble: !1
            },
            getters: {},
            mutations: {
                setJobListStep: function (t, e) {
                    t.jobListStep = yl({}, e)
                }, updateSubSearchIndex: function (t, e) {
                    t.subSearchIndex = e
                }, setUserTouchCluster: function (t, e) {
                    t.userTouchCluster.jobNo[e.type] = e.jobNo, t.userTouchCluster.type = e.type
                }, updateMapClickAble: function (t, e) {
                    t.mapClickAble = e
                }
            },
            actions: {}
        }, Tl = {
            namespaced: !0,
            state: {currentMarker: {lat: null, lon: null}, tempMarker: {lat: null, lon: null}},
            getters: {
                isCurrentMarkerOnMap: function (t) {
                    return null !== t.currentMarker.lat && null !== t.currentMarker.lon
                }, isTempMarkerOnMap: function (t) {
                    return null !== t.tempMarker.lat && null !== t.tempMarker.lon
                }
            },
            mutations: {
                setMarkerPosition: function (t, e) {
                    t["".concat(e.type, "Marker")] = e.position
                }
            },
            actions: {}
        };

        function Sl(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Pl(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Sl(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sl(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Cl = {utm_source: "", utm_medium: "", utm_campaign: ""}, Ol = {
            namespaced: !0, state: {query: Pl({}, Cl)}, getters: {
                getMeaningfulQuery: function (t) {
                    for (var e = {}, n = 0, o = Object.keys(t.query); n < o.length; n++) {
                        var a = o[n];
                        t.query[a] && (e[a] = t.query[a])
                    }
                    return e
                }
            }, mutations: {
                updateQuery: function (t, e) {
                    for (var n = 0, o = Object.keys(e); n < o.length; n++) {
                        var a = o[n];
                        -1 !== Object.keys(t.query).indexOf(a) && (t.query = Pl({}, t.query, Object(l["a"])({}, a, decodeURIComponent(e[a]))))
                    }
                }
            }
        }, vl = {
            namespaced: !0,
            state: {locationInput: "", keywordInput: "", categorySelectedItems: {jobCat: []}},
            getters: {
                isJobCatEmpty: function (t, e, n) {
                    return !t.categorySelectedItems.jobCat.length && !n.cSearch.query.jobcat
                }, jobCatText: function (t, e, n) {
                    return e.isJobCatEmpty ? "職務類別" : t.categorySelectedItems.jobCat.length ? t.categorySelectedItems.jobCat.map((function (t) {
                        return t.des
                    })).join("、") : n.joblist.apiData.pool.data.filterDesc.jobcat.map((function (t) {
                        return t.des
                    })).join("、")
                }, categoryItems: function (t, e, n) {
                    return 0 !== t.categorySelectedItems.jobCat.length || e.isJobCatEmpty ? t.categorySelectedItems.jobCat.map((function (t) {
                        return {no: t.no}
                    })) : n.joblist.apiData.pool.data.filterDesc.jobcat.map((function (t) {
                        return {no: "".concat(t.no)}
                    }))
                }
            },
            mutations: {
                setLocationInput: function (t, e) {
                    t.locationInput = e
                }, setKeywordInput: function (t, e) {
                    t.keywordInput = e
                }, setCategorySelectedItems: function (t, e) {
                    t.categorySelectedItems.jobCat = e
                }
            },
            action: {}
        }, jl = {
            namespaced: !0, state: function () {
                return {data: {error: "", status: !1, suggestions: []}}
            }, getters: {}, actions: {
                get: function (t, e) {
                    var n = t.commit, o = "?kw=".concat(encodeURI(e));
                    return this.$http({
                        method: nr.GET,
                        url: "".concat(fa.VUE_APP_CMAIN_API, "ajax/KeywordSuggest/main").concat(o)
                    }).then((function (t) {
                        return n("updateData", t.data), t
                    })).catch((function (t) {
                    }))
                }
            }, mutations: {
                updateData: function (t, e) {
                    t.data = e
                }
            }
        }, wl = {
            namespaced: !0, state: function () {
                return {
                    data: {
                        status: 0,
                        action: [],
                        data: {cacheId: 0, list: [], filterDesc: {jobcat: []}, statusMsg: "", errorMsg: ""}
                    }
                }
            }, getters: {}, actions: {
                get: function (t, e) {
                    var n = t.commit;
                    return this.$http({
                        method: nr.GET,
                        url: "".concat(fa.VUE_APP_CINDEX_API, "jobs/search/ajax/list/pool?").concat(e),
                        withCredentials: !0,
                        responseType: "json"
                    }).then((function (t) {
                        if (t.data.status < 300) return n("updateData", t.data), t;
                        throw new Error("ERROR: ".concat(t.data.status, " ").concat(fa.VUE_APP_CINDEX_API, "jobs/search/ajax/list/pool"))
                    })).catch((function (t) {
                    }))
                }
            }, mutations: {
                updateData: function (t, e) {
                    t.data = e
                }
            }
        };
        n("99de"), n("7e84"), n("262e"), n("bee2");
        nr.GET, Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "job/ajax/content/"), nr.GET, Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "job/ajax/similarJobs/"), nr.GET, Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "job/ajax/exam/"), nr.GET, Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "job/ajax/recommendJobs"), nr.POST, Object(es["resolve"])(zi.VUE_APP_CAPPLY_API, "ajax/saveJob"), nr.POST, Object(es["resolve"])(zi.VUE_APP_CAPPLY_API, "ajax/removeSavedJob"), nr.POST, Object(es["resolve"])(zi.VUE_APP_DOMAIN_URL, "jobs/apply/form"), nr.GET, Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "job/ajax/apply/");
        var Ll = {
                saveJob: {method: nr.POST, endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/saveJob")},
                removeSavedJob: {
                    method: nr.POST,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/removeSavedJob")
                },
                jobList: {method: nr.GET, endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/joblist/")},
                jobListOptions: {
                    method: nr.GET,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/joblist/options/")
                },
                similarCust: {
                    method: nr.GET,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/similarCust")
                },
                saveCust: {
                    method: nr.POST,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/saveCust")
                },
                removeSavedCust: {
                    method: nr.POST,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/removeSavedCust")
                },
                custData: {method: nr.GET, endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/content")},
                trackCust: {
                    method: nr.POST,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/trackCust")
                },
                removeTrackedCust: {
                    method: nr.POST,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/removeTrackedCust")
                },
                reviews: {method: nr.GET, endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "company/ajax/reviews")}
            }, Rl = {
                login: {method: nr.GET, endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "job/ajax/examLogin")},
                keywordSuggest: {
                    method: nr.GET,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/KeywordSuggest/main")
                },
                keywordSuggestMixSearch: {
                    method: nr.GET,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/KeywordSuggest/mixSearch")
                },
                keywordSuggestAutoComplete: {
                    method: nr.GET,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/KeywordSuggest/autoComplete")
                },
                personalityTest: {
                    method: nr.GET,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/personality-test/report")
                },
                userEducation: {method: nr.GET, endpoint: Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/user")},
                giverQuestions: {
                    method: nr.GET,
                    endpoint: Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "jobs/search/ajax/giver/questions")
                }
            },
            Il = (nr.GET, Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "jobs/search/ajax/list/pool"), nr.GET, "".concat(zi.VUE_APP_CINDEX_API, "jobs/search/proxy/blog/jobTagMapping"), nr.GET, "".concat(zi.VUE_APP_CINDEX_API, "jobs/search/proxy/blog/posts"), nr.GET, Object(es["resolve"])(zi.VUE_APP_CINDEX_API, "profile/ajax/websiteThumbnail"), nr.GET, Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/famous-companies/list"), nr.PUT, Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/famous-companies/count"), nr.GET, Object(es["resolve"])(zi.VUE_APP_CMAIN_API, "ajax/resume-clinic/givers"), {
                namespaced: !0,
                state: function () {
                    return {data: !0, metadata: {}}
                },
                getters: {},
                actions: {
                    post: function (t, e) {
                        var n = this, o = t.commit;
                        return new Promise((function (t, a) {
                            n.$http({
                                method: Ll.saveJob.method,
                                url: Ll.saveJob.endpoint,
                                data: e,
                                withCredentials: !0
                            }).then((function (e) {
                                o("updateData", e.data.data), o("updateMetadata", e.data.metadata), t(e)
                            })).catch((function (t) {
                                a(t)
                            }))
                        }))
                    }
                },
                mutations: {
                    updateData: function (t, e) {
                        t.data = e
                    }, updateMetadata: function (t, e) {
                        t.metadata = e
                    }
                }
            }), xl = {
                namespaced: !0, state: function () {
                    return {data: !0, metadata: {}}
                }, getters: {}, actions: {
                    post: function (t, e) {
                        var n = this, o = (t.dispatch, t.commit);
                        t.state, t.getters, t.rootGetters;
                        return new Promise((function (t, a) {
                            n.$http({
                                method: Ll.removeSavedJob.method,
                                url: Ll.removeSavedJob.endpoint,
                                data: e,
                                withCredentials: !0
                            }).then((function (e) {
                                o("updateData", e.data.data), o("updateMetadata", e.data.metadata), t(e)
                            })).catch((function (t) {
                                a(t)
                            }))
                        }))
                    }
                }, mutations: {
                    updateData: function (t, e) {
                        t.data = e
                    }, updateMetadata: function (t, e) {
                        t.metadata = e
                    }
                }
            };

        function kl(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function El(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? kl(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : kl(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Al = {
                namespaced: !0,
                state: {data: {isLogin: !1, isMy104Enabled: !1}, metadata: {}},
                actions: {
                    get: function (t) {
                        t.dispatch;
                        var e = t.commit;
                        t.state, t.getters, t.rootGetters;
                        return this.$http({
                            method: Rl.login.method,
                            url: Rl.login.endpoint,
                            withCredentials: !0
                        }).then((function (t) {
                            e("updateData", t.data.data), e("updateMetadata", t.data.metadata)
                        }))
                    }
                },
                mutations: {
                    updateData: function (t, e) {
                        t.data = El({}, e)
                    }, updateMetadata: function (t, e) {
                        t.metadata = e
                    }
                }
            }, Ul = {
                namespaced: !0, state: function () {
                    return {data: []}
                }, getters: {
                    dataToObj: function (t) {
                        var e = {};

                        function n(t) {
                            t.forEach((function (t) {
                                e[t.no] = t.des, t.n && n(t.n)
                            }))
                        }

                        return n(t.data), e
                    }
                }, actions: {
                    get: function (t) {
                        var e = t.commit;
                        return this.$http({
                            method: nr.GET,
                            url: "".concat(fa.VUE_APP_STATIC_URL, "category-tool/json/AreaSch.json")
                        }).then((function (t) {
                            e("updateData", t.data)
                        })).catch((function (t) {
                        }))
                    }
                }, mutations: {
                    updateData: function (t, e) {
                        t.data = e
                    }
                }
            }, Dl = (n("4d63"), n("bc3a")), Ml = n.n(Dl), Nl = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("popup-medium", {
                    attrs: {
                        "header-align": "left",
                        show: t.status,
                        title: t.message.title,
                        "primary-button": {text: "確定"}
                    }, on: {
                        "cancel-click": function (e) {
                            t.status = !1
                        }, "primary-button-click": function (e) {
                            t.status = !1
                        }
                    }
                }, [t.message.body ? n("div", [t._v(" " + t._s(t.message.body) + " ")]) : t._e()])
            }, Bl = [], $l = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("transition", {
                    attrs: {name: "popupShow", appear: ""},
                    on: {enter: t.scrollCalc}
                }, [t.show ? n("div", {
                    staticClass: "popup",
                    class: [t.styles.popup]
                }, [t.backdrop ? n("div", {
                    class: t.styles.popupBackdrop,
                    on: {click: t.backdropClickHandler}
                }) : t._e(), n("div", {
                    ref: "popupBox",
                    class: [t.styles.popupBox, "popup-box"]
                }, [t._t("icon", [t.isNormalBoundary ? n("div", t._b({
                    staticClass: "popup-icon-click",
                    class: [t.styles.popupIconClick],
                    on: {click: t.iconClickHandler}
                }, "div", [t.icon.gtm], !1), [n("i", {staticClass: "jb_icon_delete"})]) : t._e()]), n("div", {
                    ref: "popupWrapper",
                    class: [t.styles.popupWrapper, "popup-wrapper"]
                }, [t.hasHeader ? n("div", {
                    ref: "header",
                    staticClass: "popup-header",
                    class: [t.styles.popupHeader, "text-" + t.headerAlign, {"py-0": t.isHideUpload}]
                }, [t._t("header", [n("div", {staticClass: "popup-header-title"}, [n("h2", {
                    staticClass: "title",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [t._v(t._s(t.title))])]), n("div", {staticClass: "popup-header-addons"})])], 2) : t._e(), n("div", t._b({
                    ref: "body",
                    staticClass: "popup-body",
                    class: [t.styles.popupBody, {"popup-body-has-footer": t.hasFooter}]
                }, "div", [t.body.gtm], !1), [n("div", {
                    ref: "bodyInner",
                    staticClass: "popup-body-inner t4"
                }, [t._t("default")], 2)]), t.hasFooter && t.isNormalBoundary ? n("div", {
                    ref: "footer",
                    staticClass: "popup-footer",
                    class: [t.styles.popupFooter]
                }, [t._t("footer", [n("div", {staticClass: "popup-footer-row row justify-content-center"}, [t.hasSecondaryButton ? n("div", {staticClass: "popup-footer-col col-6 col-md-auto"}, [n("button", t._b({
                    staticClass: "btn btn-sm btn-outline-secondary",
                    on: {click: t.secondaryButtonClick}
                }, "button", Object.assign({}, t.secondaryButton.gtm, {disabled: t.secondaryButton.disabled}), !1), [t._v(t._s(t.secondaryButton.text))])]) : t._e(), t.hasPrimaryButton ? n("div", {staticClass: "popup-footer-col col-6 col-md-auto"}, [n("button", t._b({
                    staticClass: "btn btn-sm btn-secondary",
                    on: {click: t.primaryButtonClick}
                }, "button", Object.assign({}, t.primaryButton.gtm, {disabled: t.primaryButton.disabled}), !1), [t._v(t._s(t.primaryButton.text))])]) : t._e()])])], 2) : t._e()])], 2)]) : t._e()])
            }, Vl = [], ql = n("a19e"), Gl = n.n(ql),
            Fl = {text: b["a"].string, value: b["a"].any, gtm: b["a"].object.def({}), active: b["a"].bool},
            Hl = {gtm: b["a"].object.def({})}, Jl = {gtm: b["a"].object.def({})}, Kl = {
                props: {
                    title: b["a"].string.def(""),
                    headerAlign: b["a"].oneOf(["left", "center", "right"]).def("center"),
                    show: b["a"].bool.def(!1),
                    backdrop: b["a"].bool.def(!0),
                    primaryButton: b["a"].shape(Fl).loose.def({}),
                    secondaryButton: b["a"].shape(Fl).loose.def({}),
                    isNormalBoundary: b["a"].bool.def(!0),
                    isHideUpload: b["a"].bool.def(!1),
                    icon: b["a"].shape(Hl).loose.def({}),
                    body: b["a"].shape(Jl).loose.def({}),
                    backdropClick: b["a"].bool.def(!0)
                }, data: function () {
                    return {styles: Gl.a}
                }, computed: {
                    hasHeaderSlot: function () {
                        return !!this.$slots["header"]
                    }, hasFooterSlot: function () {
                        return !!this.$slots["footer"]
                    }, hasTitle: function () {
                        return !!this.title
                    }, hasHeader: function () {
                        return this.hasHeaderSlot || this.hasTitle
                    }, hasPrimaryButton: function () {
                        return !g()(this.primaryButton)
                    }, hasCopyLinkButtonSlot: function () {
                        return !!this.$slots["copyLinkButton"]
                    }, hasSecondaryButton: function () {
                        return !g()(this.secondaryButton)
                    }, hasFooter: function () {
                        return this.hasFooterSlot || this.hasPrimaryButton || this.hasSecondaryButton
                    }
                }, methods: {
                    iconClickHandler: function (t) {
                        this.$emit("cancel-click", !1)
                    }, backdropClickHandler: function (t) {
                        this.backdropClick && this.$emit("cancel-click", !1)
                    }, secondaryButtonClick: function (t) {
                        this.$emit("secondary-button-click", t)
                    }, primaryButtonClick: function (t) {
                        this.$emit("primary-button-click", t)
                    }, scrollCalc: function () {
                    }
                }
            }, Ql = {name: "PopupMedium", extends: Kl}, Yl = Ql,
            zl = (n("cba4"), Object(j["a"])(Yl, $l, Vl, !1, null, "78a76a9a", null)), Zl = zl.exports, Xl = {
                name: "CAlert", components: {PopupMedium: Zl}, data: function () {
                    return {status: !1, message: {title: "", body: ""}}
                }
            }, Wl = Xl, tc = (n("53ed"), Object(j["a"])(Wl, Nl, Bl, !1, null, "6b9e0778", null)), ec = tc.exports,
            nc = a.a.extend(ec), oc = new nc({el: document.createElement("div")}), ac = {
                show: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.title, n = t.body;
                    oc.message = {title: e, body: n}, oc.status = !0
                }, hide: function () {
                    oc.hide()
                }
            };

        function ic(t, e) {
            t ? t() : e()
        }

        function sc(t) {
            var e = t.status, n = t.handlerNetworkError, o = t.handler400, a = t.handler401, i = t.handler403,
                s = t.handler404, r = t.handler429, l = t.handler500, c = t.handlerDefault;
            switch (e) {
                case 0:
                    ic(n, c);
                    break;
                case 400:
                    ic(o, c);
                    break;
                case 401:
                    ic(a, c);
                    break;
                case 403:
                    ic(i, c);
                    break;
                case 404:
                    ic(s, c);
                    break;
                case 429:
                    ic(r, c);
                    break;
                case 500:
                    ic(l, c);
                    break;
                default:
                    c();
                    break
            }
        }

        function rc(t) {
            switch (t.code) {
                case 401:
                    t.handler401 ? t.handler401() : window.location.href = ss(window.location.href);
                    break;
                case 10007:
                    window.location.href = ss(window.location.href);
                    break;
                case 4011:
                case 4012:
                    window.location.href = t.details.redirect;
                    break;
                case 10001:
                    t.handler10001 && t.handler10001();
                    break;
                case 11001:
                    t.handler11001 && t.handler11001();
                    break;
                case 11002:
                    t.handler11002 && t.handler11002();
                    break;
                case 11201:
                    break;
                case 11202:
                    break;
                case 20001:
                    alert("儲存工作上限為200筆，請先刪除部分工作後再儲存");
                    break;
                case 20002:
                    t.handler20002 && t.handler20002();
                    break;
                case 20003:
                    t.handler20003 && t.handler20003();
                    break;
                case 20101:
                    alert("儲存公司上限為200筆，請先刪除部分公司後再儲存");
                    break;
                case 20102:
                    break;
                case 20103:
                    break;
                case 20201:
                    break;
                case 20202:
                    break;
                case 20502:
                    t.handler20502 && t.handler20502();
                    break;
                case 20503:
                    t.handler20503 && t.handler20503();
                    break;
                case 20505:
                    t.handler20505 && t.handler20505();
                    break;
                case 31007:
                    break;
                case 32001:
                    break;
                case 35001:
                    t.handler35001 && t.handler35001();
                    break;
                case 35003:
                    t.handler35003 && t.handler35003();
                    break;
                case 35009:
                    t.handler35009 && t.handler35009();
                    break;
                case 33111:
                    t.handler33111 && t.handler33111();
                    break;
                case 33112:
                    t.handler33112 && t.handler33112();
                    break;
                case 33113:
                    t.handler33113 && t.handler33113();
                    break;
                case 33201:
                    t.handler33201 && t.handler33201();
                    break;
                case 33202:
                    t.handler33202 && t.handler33202();
                    break;
                case 33203:
                case 33204:
                    t.handler33203 && t.handler33203();
                    break;
                case 40001:
                    t.handler40001 && t.handler40001();
                    break;
                case 40401:
                    t.handler40401 && t.handler40401();
                    break;
                case 50001:
                    t.handler50001 && t.handler50001();
                    break;
                case 40030:
                    t.handler40030 && t.handler40030();
                    break;
                case 40031:
                    t.handler40031 && t.handler40031;
                    break;
                case 40032:
                    t.handler40032 && t.handler40032();
                    break;
                case 40033:
                    t.handler40033 && t.handler40033();
                    break;
                case 40034:
                    t.handler40034 && t.handler40034();
                    break;
                case 50024:
                    t.handler50024 && t.handler50024();
                    break;
                case 40035:
                    t.handler40035 && t.handler40035();
                    break;
                default:
                    break;
                case 40037:
                    t.handler40037 && t.handler40037();
                    break;
                case 40038:
                    t.handler40038 && t.handler40038();
                    break;
                case 40042:
                    t.handler40042 && t.handler40042();
                    break;
                case 40420:
                    t.handler40420 && t.handler40420();
                    break
            }
        }

        var lc = {
                errorHandler: {
                    exception: {
                        title: "異動資料失敗",
                        body: "喔～喔～系統目前發生了小狀況，無法正常提供資訊，請稍後再試！"
                    },
                    readError: {title: "讀取資料失敗", body: "喔～喔～系統目前發生了小狀況，無法正常提供資訊，請稍後再試！"},
                    network: {title: "網路連線失敗", body: "喔～喔～系統目前發生了小狀況，無法正常提供資訊，請稍後再試！"},
                    relogin: {title: "請重新登入", body: "無法取得登入狀態，請重新登入！"},
                    limit: {title: "載入頁面失敗", body: "系統目前發生了小狀況，無法正常提供資訊，請重新整理頁面或稍後再試！"}
                }
            }, cc = {zhTW: lc}, uc = (n("dca8"), n("2b27")), pc = n.n(uc), mc = pc.a.get("locale"),
            dc = mc || navigator.language || navigator.browserLanguage || "zh-TW",
            hc = Object.freeze({en: "en", "en-US": "en", zh: "zhTW", "zh-TW": "zhTW"}), bc = hc[dc] || dc, fc = bc,
            gc = {withCredentials: !1, responseType: "json"}, yc = Ml.a.create(gc);
        yc.interceptors.response.use((function (t) {
            return t
        }), (function (t) {
            if (t.response) {
                var e = t.response.status;
                return sc({
                    status: e, handler429: function () {
                        ac.show({title: cc[fc].errorHandler.limit.title, body: cc[fc].errorHandler.limit.body})
                    }, handlerDefault: function () {
                    }
                }), Promise.reject(t)
            }
        }));
        var _c, Tc = yc,
            Sc = {SHOW: "show", HIDE: "hide", INCREASE_QUEUE: "increaseQueue", DECREASE_QUEUE: "decreaseQueue"},
            Pc = (_c = {}, Object(l["a"])(_c, Sc.SHOW, (function (t) {
                t.status = !0
            })), Object(l["a"])(_c, Sc.HIDE, (function (t) {
                t.status = !1
            })), Object(l["a"])(_c, Sc.INCREASE_QUEUE, (function (t, e) {
                var n = e.method, o = e.url, a = "".concat(n, "@").concat(o);
                -1 === t.queue.indexOf(a) && t.queue.push(a)
            })), Object(l["a"])(_c, Sc.DECREASE_QUEUE, (function (t, e) {
                var n = e.method, o = e.url, a = "".concat(n, "@").concat(o);
                t.queue = t.queue.filter((function (t) {
                    return t != a
                }))
            })), _c), Cc = ["(time4jobs)?\\/ajax\\/userInfo"];
        Tc.interceptors.request.use((function (t) {
            var e = Cc.filter((function (e) {
                return new RegExp(e).test(t.url)
            }));
            return t && e.length && vc.commit("CLoading/".concat(Sc.INCREASE_QUEUE), {method: t.method, url: t.url}), t
        }), (function (t) {
            return Promise.reject(t)
        })), Tc.interceptors.response.use((function (t) {
            t.data, t.status, t.statusText, t.headers;
            var e = t.config;
            t.request;
            return e && vc.commit("CLoading/".concat(Sc.DECREASE_QUEUE), {method: e.method, url: e.url}), t
        }), (function (t) {
            var e, n = t.config, o = (t.request, t.response);
            try {
                o.status, e = o.data.error
            } catch (a) {
                0
            }
            return n && vc.commit("CLoading/".concat(Sc.DECREASE_QUEUE), {
                method: n.method,
                url: n.url
            }), e && rc(e), Promise.reject(t)
        }));
        var Oc = Tc;
        st["b"].Store.prototype.$http = Oc, a.a.use(st["b"]);
        var vc = new st["b"].Store({
                modules: {
                    isoline: sl,
                    joblist: rl,
                    cSearch: dl,
                    cIsoline: fl,
                    ui: _l,
                    marker: Tl,
                    query: Ol,
                    searchmain: vl,
                    api: {
                        namespaced: !0,
                        modules: {
                            keywordSuggestMain: jl,
                            pool: wl,
                            saveJob: Il,
                            removeSavedJob: xl,
                            examLogin: Al,
                            catelogAreaSch: Ul
                        }
                    }
                }
            }), jc = n("51f5"), wc = n.n(jc), Lc = {}, Rc = Object(es["resolve"])(zi.VUE_APP_TIME4JOBS_API, "isoline"),
            Ic = {
                get: function (t) {
                    t.state;
                    var e = t.commit, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = Object.entries(n).filter((function (t) {
                            return Boolean(t[1].trim())
                        })).map((function (t) {
                            return t[0] + "=" + encodeURIComponent(t[1])
                        })).join("&");
                    return this.$http({
                        method: nr.GET,
                        url: Rc + "?" + o,
                        withCredentials: !1,
                        responseType: "json"
                    }).then((function (t) {
                        return e("updateData", t.data.data), e("updateMetadata", t.data.metadata), t
                    })).catch((function (t) {
                        throw t
                    }))
                }
            }, xc = {
                updateData: function (t, e) {
                    t.data = e
                }, updateMetadata: function (t, e) {
                    t.metadata = e
                }
            }, kc = {
                data: {center: {dist: 0, lat: 0, lon: 0}, isoline: [], metroIsoline: null, nearMetro: null},
                metadata: {mapCost: !1, msg: ""}
            }, Ec = !0, Ac = {namespaced: Ec, state: kc, getters: Lc, actions: Ic, mutations: xc};

        function Uc(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Dc(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Uc(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Uc(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Mc = {
            namespaced: !0,
            modules: {api: {namespaced: !0, modules: {isoline: Ac}}},
            state: {
                data: {center: {dist: 0, lat: 0, lon: 0}, metroIsoline: null, nearMetro: null},
                metadata: {mapCost: !1, msg: ""},
                query: {
                    address: "",
                    tLat: "",
                    tLon: "",
                    time: "",
                    transType: "",
                    rsm: "",
                    inputCategoryId: "",
                    isLookingAround: ""
                }
            },
            mutations: {
                updateResponse: function (t, e) {
                    var n = e.data, o = e.metadata;
                    t.data = n, t.metadata = o
                }, updateData: function (t, e) {
                    t.data = e
                }, updateMetadata: function (t, e) {
                    t.metadata = e
                }, updateQuery: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = Object.keys(e).filter((function (e) {
                            return -1 === Object.keys(t.query).indexOf(e)
                        }));
                    if (n.length) throw new Error("ERROR: 不合法的 query ".concat(e));
                    t.query = Dc({}, t.query, {}, e)
                }, rollbackQuery: function (t, e) {
                    t.query = e
                }
            },
            actions: {
                get: function (t) {
                    var e = t.state, n = t.commit, o = t.dispatch,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.query;
                    return n("updateQuery", a), o("api/isoline/get", a).then((function (t) {
                        return n("updateData", e.api.isoline.data), n("updateMetadata", e.api.isoline.metadata), t
                    })).catch((function (t) {
                        throw n("rollbackQuery", i), t
                    }))
                }
            }
        };

        function Nc(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Bc(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nc(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Nc(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var $c = "很抱歉，通勤地圖找不到您輸入的地址", Vc = {
            created: function () {
                this.$store.state["apiIsoline"] || this.$store.registerModule("apiIsoline", Mc)
            }, mounted: function () {
            }, destroyed: function () {
                this.$store.unregisterModule("apiIsoline")
            }, computed: Bc({
                query: function () {
                    return Bc({}, this.cIsolineGetMeaningfulQuery, {}, this.cSearchGetMeaningfulQuery, {}, this.time4jobsGetMeaningfulQuery)
                }
            }, Object(st["f"])("joblist", {
                cacheId: function (t) {
                    return t.apiData.pool.data.cacheId
                }
            }), {}, Object(st["f"])("apiIsoline", {
                apiIsolineData: function (t) {
                    return t.data
                }, apiIsolineMetadata: function (t) {
                    return t.metadata
                }
            }), {}, Object(st["f"])("cIsoline", {
                cIsolineQuery: function (t) {
                    return t.query
                }
            }), {}, Object(st["f"])("isoline", ["locationHistory", "centerHistory"]), {}, Object(st["d"])("cSearch", {cSearchGetMeaningfulQuery: mt}), {}, Object(st["d"])("cIsoline", {cIsolineGetMeaningfulQuery: ct}), {}, Object(st["d"])("query", {time4jobsGetMeaningfulQuery: "getMeaningfulQuery"}), {
                timeToDist: function () {
                    var t = [1.5, .25, .75, 2, .875],
                        e = parseInt(this.cIsolineGetMeaningfulQuery.time) / 5 * t[parseInt(this.cIsolineGetMeaningfulQuery.transType) - 1];
                    return e
                }
            }), methods: Bc({
                updateURL: function () {
                    return !Cn()(this.query, this.$route.query) && (this.$router.push({query: this.query}), !0)
                }, getIsolineAndJobs: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = !1;
                    return this.$nextTick().then((function () {
                        return t.$CLoading.show(), new Promise(function () {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(o, a) {
                                var i, s;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (i = wc()(t.locationHistory.map((function (t) {
                                                return t.query
                                            })), t.cIsolineGetMeaningfulQuery), s = t.centerHistory.map((function (t) {
                                                return t.address
                                            })).indexOf(t.cIsolineGetMeaningfulQuery.address), i < 0 && s >= 0 && t.centerHistory[s].lat > -90 && t.centerHistory[s].lat < 90 && t.centerHistory[s].lon > -180 && t.centerHistory[s].lon < 180 && t.cIsolineUpdateQuery({
                                                tLat: t.centerHistory[s].lat,
                                                tLon: t.centerHistory[s].lon
                                            }), !(i < 0)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.prev = 4, e.next = 7, t.isolineGet(t.cIsolineQuery);
                                        case 7:
                                            e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e["catch"](4), a(e.t0);
                                        case 12:
                                            e.next = 16;
                                            break;
                                        case 14:
                                            t.isolineUpdateResponse(t.locationHistory[i].apiData.isoline), n = !0;
                                        case 16:
                                            o();
                                        case 17:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e, null, [[4, 9]])
                            })));
                            return function (t, n) {
                                return e.apply(this, arguments)
                            }
                        }()).then((function () {
                            t.cSearchUpdateQuery(Bc({
                                cacheId: "",
                                dist: t.timeToDist
                            }, t.apiIsolineData.center)), t.setMarkerPosition({
                                type: "temp",
                                position: {lat: null, lon: null}
                            }), t.setMarkerPosition({
                                type: "current",
                                position: {lat: t.apiIsolineData.center.lat, lon: t.apiIsolineData.center.lon}
                            });
                            var o = t.query.isLookingAround && 1 == t.query.isLookingAround;
                            o || t.$root.clusterMap.flyToApiLatLonBounds(), t.cIsolineQuery.tLat || t.cIsolineQuery.tLon || t.cIsolineUpdateQuery({
                                tLat: t.apiIsolineData.center.lat,
                                tLon: t.apiIsolineData.center.lon
                            });
                            var a = {map_cost: n ? "0" : t.apiIsolineMetadata.mapCost ? "3" : "2"};
                            return t.query.inputCategoryId && (a.paramlist_locatetype = t.query.inputCategoryId), t.query.isLookingAround && (a.paramlist_locatetype = "around"), t.$root.eLogMapSearch(a), {isFetchPoolList: e || t.updateURL()}
                        })).catch((function (e) {
                            return t.cIsolineQuery.tLat && t.cIsolineQuery.tLon ? (t.cSearchUpdateQuery({
                                lat: t.cIsolineQuery.tLat,
                                lon: t.cIsolineQuery.tLon,
                                dist: t.timeToDist
                            }), {isFetchPoolList: !0}) : (t.$CLoading.hide(), alert($c), {isFetchPoolList: !1})
                        })).then((function (e) {
                            var n = e.isFetchPoolList;
                            n ? (t.$root.clusterMap.$refs["cluster-layer"].clearLastClusterLayer(), t.fetchPoolList().then((function () {
                                t.cIsolineGetMeaningfulQuery.address && (t.updateLocationHistory({
                                    query: Bc({}, t.cIsolineGetMeaningfulQuery, {address: decodeURIComponent(t.cIsolineGetMeaningfulQuery.address)}),
                                    apiData: {
                                        isoline: {
                                            data: Bc({}, t.apiIsolineData),
                                            metadata: Bc({}, t.apiIsolineMetadata)
                                        }
                                    }
                                }), t.updateCenterHistory({
                                    address: decodeURIComponent(t.cIsolineGetMeaningfulQuery.address),
                                    lat: t.apiIsolineData.center.lat,
                                    lon: t.apiIsolineData.center.lon
                                })), t.updateURL()
                            })).finally((function () {
                                t.$root.resetAll(), localStorage.setItem("lastSearch", JSON.stringify(t.query)), t.$root.clusterMap.updateSearchHintText(), t.$CLoading.hide()
                            })).catch((function (e) {
                                t.$CLoading.hide()
                            }))) : t.$CLoading.hide()
                        }))
                    }))
                }, getJobs: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.$nextTick().then((function () {
                        t.cacheId && !e && t.cSearchUpdateQuery({cacheId: t.cacheId.toString(), dist: t.timeToDist});
                        var n = t.query.isLookingAround && 1 == t.query.isLookingAround;
                        (t.updateURL() || n) && (t.$CLoading.show(), t.fetchPoolList().then((function () {
                            t.updateURL()
                        })).finally((function () {
                            t.setJobListStep({now: 0, last: -1});
                            var e = {map_cost: "0"};
                            t.query.inputCategoryId && (e.paramlist_locatetype = t.query.inputCategoryId), n && (e.paramlist_locatetype = "around"), t.$root.eLogMapSearch(e), t.$CLoading.hide()
                        })))
                    }))
                }
            }, Object(st["e"])("cIsoline", {cIsolineUpdateQuery: ut}), {}, Object(st["e"])("cSearch", {cSearchUpdateQuery: gt}), {}, Object(st["e"])("marker", ["setMarkerPosition"]), {}, Object(st["e"])("ui", ["setJobListStep"]), {}, Object(st["e"])("apiIsoline", {isolineUpdateResponse: "updateResponse"}), {}, Object(st["c"])("joblist", ["fetchPoolList"]), {}, Object(st["c"])("isoline", ["updateLocationHistory", "updateCenterHistory"]), {}, Object(st["c"])("apiIsoline", {isolineGet: "get"}))
        }, qc = function () {
            return Boolean(window._elog && !g()(window._elog))
        };
        window._elog = qc() ? window._elog : [];
        var Gc = {
            push: function (t) {
                window._elog.push(t)
            }
        };

        function Fc(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Hc(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Fc(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fc(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Jc = {
            methods: {
                eLogViewPage: function (t) {
                    Gc.push({web: "104_bank", track: ["viewPage"], ext: Hc({s: Date.now()}, t)})
                }, eLogMapSearch: function (t) {
                    Gc.push({web: "104_bank", track: ["mapSearch"], ext: Hc({s: Date.now()}, t)})
                }, eLogViewJoblist: function (t, e) {
                    Gc.push({web: "104_bank", track: ["viewJoblist", t], ext: Hc({s: Date.now()}, e)})
                }, eLogDenyLct: function (t) {
                    Gc.push({web: "104_bank", track: ["denyLct"], ext: Hc({s: Date.now()}, t)})
                }, eLogSaveJob: function (t, e) {
                    Gc.push({web: "104_bank", track: ["saveJob", t], ext: Hc({s: Date.now()}, e)})
                }, eLogMapGeolct: function (t) {
                    Gc.push({web: "104_bank", track: ["mapGeolct"], ext: Hc({s: Date.now()}, t)})
                }
            }
        };

        function Kc(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function Qc(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Kc(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Kc(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var Yc, zc = {
                methods: Qc({}, Object(st["e"])("joblist", ["setJobListPage", "setJobNoList"]), {}, Object(st["e"])("ui", ["setJobListStep", "updateMapClickAble"]), {
                    resetAll: function (t) {
                        this.resetCluster(), this.resetJobList(), this.resetUiStatus()
                    }, resetJobList: function () {
                        this.setJobListStep({now: 0, last: -1}), this.setJobListPage(1)
                    }, resetCluster: function () {
                        this.clusterMap.temp.clickedMarkerSnapShot = [], this.clusterMap.clearLastClickMarker(), this.setJobNoList([])
                    }, resetUiStatus: function () {
                        this.updateMapClickAble(!1)
                    }, syncSubTransTypeData: function () {
                        this.subTransType.syncStoreData()
                    }
                }), computed: {
                    root: function () {
                        return this.$children[0].$refs.root
                    }, clusterMap: function () {
                        return this.root.$refs["cluster-map"] ? this.root.$refs["cluster-map"] : null
                    }, subTransType: function () {
                        return this.root.$refs["sub-filter-content-area"] && this.root.$refs["sub-filter-content-area"].$refs["sub-trans-type"] ? this.root.$refs["sub-filter-content-area"].$refs["sub-trans-type"] : null
                    }, searchMain: function () {
                        return this.root.$refs["main-search"] ? this.root.$refs["main-search"] : null
                    }
                }
            }, Zc = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("loading", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 != t._getQueueCounter || t._getStatus,
                        expression: "_getQueueCounter != 0 || _getStatus"
                    }], staticClass: "c-loading", attrs: {mask: t.$attrs.mask}
                })
            }, Xc = [], Wc = function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("transition", {attrs: {name: "loading-animate"}}, [n("div", {
                    staticClass: "loading-mask",
                    class: [{"loading-mask--disabled": !t.mask}]
                }, [n("div", {staticClass: "loading"}, [n("loading-icon")], 1)])])
            }, tu = [], eu = function () {
                var t = this, e = t.$createElement;
                t._self._c;
                return t._m(0)
            }, nu = [function () {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {staticClass: "loading-icon"}, [n("img", {
                    staticClass: "w-100 h-100",
                    attrs: {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABjxJREFUeNrsXX1olVUYP/fuqm3WZkm51ErSiih0lNUfheuPoA/QCozClmGfkCD2yag/yj+qkQkRlMSCoA9BggqFvoOKIBqpLbIyyKY5lU3XnBmz1dbv2T2D6+2+2znPee7e9973+cHD0fE+L+f8fs95zse99xxjFAqFIjZkklahkVYzFcVpsDNh9bAG2AxrWVhNkRX+bQB2BHYcdhC2H9adaTOHVYBowqegmAObBWu0pJcit8ZBgKi//WHF6ITtgiCHUi2AJb3RRvlcDyK5AhT/fx/sK9g2iNGbGgFA/Kk22s8SIlLCbzvscwjRUbUCgHhKL7NhM8tIZKgfpaXNEOKzqhEAxFM+Px9WN4lEhvqREJsgxCcVKwCIn4biXDtziYvIUL/fYBshRGdFCQDyG22eTwqRoX7vwl6DEH8mWgAQf5IdXKcnlMgQvx7YsxBhu7QAWSHyaeE0H1ZbpQtWmi6/hHbem6gegAqRgGcU5PqkR7KE3w7YI+gNR2PtAZZ8mlqekrLtm0th7Wj/BbH1ALtfQ5E/jRltrhFJWwjHbHnUWqag3oX/ri1Ya8wtWuyVo+f8BbsbPeHnSRXAbiMQ+VMCyI16ZhDWa7cKDqJxfwemyPNQLII12TpLBwoFx6oQETIM8mcWkC8hwLDdudyDhvSUcVFIPeJK2BKbNqV6KolwJ+r+U1kFQAPo2dNhOYFKZy3xXbDdqPzQJO5H1dk8vtzuwEqkShKhhSNCxoN8mulMFYgaIv53In8yiY9oVzOlkIIt8JDZE4mwFG3aVw4B6iMGXN9K98F2opL/JGVKg7bRwvFW2I0C09ddsNvQvgExAVDBWjvDCBm4KOp/SdIHISXaeTGKB+2iK2T29A7a+ZDIOgCVqrFpJwT9sI4kkz8aiW3mBxRrYF8HvuoW8HZPcA+weX964AznMBr2a6WttND2m1GsDlg/0MbdcrR9Z0gPCI383ZVIvu0NtAO6PuAVNGa+yE5BdpshZKOuK+kpx0GEj1A8F/CKi8Dj/d4CwMnYuT4Xe5P8NRBPET5E0RbwikfBZ4NvD8gG7JL2otJ91bTzhvZ8gOIZpjuR/7SzADb6ualnAJU9UI3bn2jX+yg2M91XgNezXXsAN/JpE22/qWJAhBeMYX8i1spaB3jgACr4r6l+rLNTTF/cHtULJASguf7xFJBvbIrdwHR/vBwCDFXboOsgwlYU3zJ7QYO0AD0mnXie6dciKcAgomEwjeyj3bTruYXhesdEAox4vKzfpBsvM3wWIg0tihQgk1/zDTu8qC+t0V/AFU2732O4Lh03BeHFJMBQRG+gqeYhPHPMKAxTgGXOC6/iTbkkfZKVFIAj+jp78e8dJtqyngUuR1N4boJuNuyYktKM12FPePosGRvEs8pfMD5l+DRLb0WkeTDuRtHt6dakAsiiQ3tAvPiGMXjPUwHkwPla4jkqgNw4wBGgSQWItxfMUAFkMcBxUgHig6agmGdCmoKSABVABVABFDK4wvP5LhUgXqgAwqjXFBQvLvR8vl8FEMJIqzf5hO9UgPiin7BHBYhvBkQ7qDoIC+Jyz+e/0EFYLv/T8WxzOPlfBZDBNQwf7QGCWMnw+VIFkEk/lzHST+fYt+JUgHDcxPDZoithmeifzRRgqwoggwcYPt8Xn8SrAvCjfxnD9Y3iP6gAPKxj+r2pAoRHP/3CZTHD9S2knyMqQBj5dJrWw0z3kudNqAB+eBJ2MjP696oAYdG/FsUlTPfII29UADfybzD5kxU52BQV/SqAG/nXm4hzHhxAg+64vx9TAcYn/zozzlEzDlhfauajAriRfy2KxwJeQQfUvjLRQzmluiT5Y8dWckFfVV/j8qAKcCLxdE4qnXp7VeCrNricGaoCnEh+4dHFIXgb5L/q+nBOif/f4d0h+BH2lI9DTskfJWy+wOso79/nc3K6zoLyn+fOE3gP3W2zwvfugFQLgOin20CahSK/hXuFSZp7wGIh8ldyyU+7AHUCaWdV6DVWuhLmgQ7tuyuU/LTPgrhXmW8zglcZplkAOnyVbsPzuYqxHcS3S1YitSkIRBL5Gx0fpyOLV0uTP1oPXQmbq01+46yyL3SucBHonkn6tgMdqrrA5H/BSFeaf1zuK80VCoUiRvwnwAAmZ3gAXa2ycAAAAABJRU5ErkJggg=="}
                })])
            }], ou = {name: "LoadingIcon", props: {}}, au = ou,
            iu = (n("2f6a"), Object(j["a"])(au, eu, nu, !1, null, "94a6dbdc", null)), su = iu.exports, ru = {
                name: "Loading",
                components: {LoadingIcon: su},
                props: {label: b["a"].string.def("資料處理中..."), mask: b["a"].bool.def(!1)}
            }, lu = ru, cu = (n("e3d0"), Object(j["a"])(lu, Wc, tu, !1, null, "ef79d780", null)), uu = cu.exports,
            pu = {GET_QUEUE_COUNTER: "getQueueCounter", GET_STATUS: "getStatus"},
            mu = (Yc = {}, Object(l["a"])(Yc, pu.GET_QUEUE_COUNTER, (function (t) {
                return t.queue.length
            })), Object(l["a"])(Yc, pu.GET_STATUS, (function (t) {
                return t.status
            })), Yc);

        function du(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function hu(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? du(Object(n), !0).forEach((function (e) {
                    Object(l["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : du(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        var bu = {
                name: "CLoading",
                components: {Loading: uu},
                props: {},
                computed: hu({}, Object(st["d"])({
                    _getQueueCounter: "CLoading/".concat(pu.GET_QUEUE_COUNTER),
                    _getStatus: "CLoading/".concat(pu.GET_STATUS)
                })),
                mounted: function () {
                }
            }, fu = bu, gu = (n("0dab"), Object(j["a"])(fu, Zc, Xc, !1, null, "6453a440", null)), yu = gu.exports,
            _u = {queue: [], status: !1}, Tu = {},
            Su = {namespaced: !0, state: _u, mutations: Pc, getters: mu, actions: Tu}, Pu = {
                install: function (t, e) {
                    if (!e.store) throw new Error("請加入 vuex store.");
                    e.store.registerModule("CLoading", Su), t.component("CLoading", yu), t.prototype.$CLoading = {
                        show: function () {
                            e.store.commit("CLoading/".concat(Sc.SHOW))
                        }, hide: function () {
                            e.store.commit("CLoading/".concat(Sc.HIDE))
                        }, increaseQueue: function (t) {
                            e.store.commit("CLoading/".concat(Sc.INCREASE_QUEUE), t)
                        }, decreaseQueue: function (t) {
                            e.store.commit("CLoading/".concat(Sc.DECREASE_QUEUE), t)
                        }
                    }
                }
            }, Cu = n("1dce"), Ou = n.n(Cu), vu = n("4eb5"), ju = n.n(vu);
        a.a.config.productionTip = !1, a.a.use(i["a"]), a.a.use(Pu, {store: vc}), a.a.use(Ou.a), a.a.use(ju.a), a.a.use(pc.a);
        var wu = new i["a"]({
            mode: zi.NODE_ENV === zi.dev ? "hash" : "history",
            routes: [{path: "/landing", name: "Landing", component: Wr}, {
                path: "/",
                name: "Index",
                component: wr
            }, {path: "*", redirect: "/"}]
        });
        new a.a({
            mixins: [Vc, Et, Jc, zc], store: vc, router: wu, render: function (t) {
                return t(il)
            }
        }).$mount("#app")
    }, "1e22": function (t, e, n) {
        "use strict";
        var o = n("995b"), a = n.n(o);
        a.a
    }, 2252: function (t, e, n) {
    }, 2322: function (t) {
        t.exports = JSON.parse('[{"StationUID":"TZTC-G103a","StationName":"捷運北屯總站","StationPosition":{"PositionLat":24.1885115,"PositionLon":120.708665}},{"StationUID":"TZTC-G103","StationName":"捷運舊社站","StationPosition":{"PositionLat":24.1825032,"PositionLon":120.7075335}},{"StationUID":"TZTC-G104","StationName":"捷運松竹站","StationPosition":{"PositionLat":24.1806064,"PositionLon":120.701574}},{"StationUID":"TZTC-G105","StationName":"捷運四維國小站","StationPosition":{"PositionLat":24.171038,"PositionLon":120.6932793}},{"StationUID":"TZTC-G106","StationName":"捷運文心崇德站","StationPosition":{"PositionLat":24.1721105,"PositionLon":120.6850564}},{"StationUID":"TZTC-G107","StationName":"捷運文心中清站","StationPosition":{"PositionLat":24.1734811,"PositionLon":120.6712073}},{"StationUID":"TZTC-G108","StationName":"捷運文華高中站","StationPosition":{"PositionLat":24.171762,"PositionLon":120.660693}},{"StationUID":"TZTC-G109","StationName":"捷運文心櫻花站","StationPosition":{"PositionLat":24.167679,"PositionLon":120.653327}},{"StationUID":"TZTC-G110","StationName":"捷運市政府站","StationPosition":{"PositionLat":24.1619375,"PositionLon":120.6490315}},{"StationUID":"TZTC-G111","StationName":"捷運水安宮站","StationPosition":{"PositionLat":24.153509,"PositionLon":120.646497}},{"StationUID":"TZTC-G112","StationName":"捷運文心森林公園站","StationPosition":{"PositionLat":24.1450119,"PositionLon":120.6466238}},{"StationUID":"TZTC-G113","StationName":"捷運南屯站","StationPosition":{"PositionLat":24.140204,"PositionLon":120.6472176}},{"StationUID":"TZTC-G114","StationName":"捷運豐樂公園站","StationPosition":{"PositionLat":24.1324874,"PositionLon":120.6466984}},{"StationUID":"TZTC-G115","StationName":"捷運大慶站","StationPosition":{"PositionLat":24.1202443,"PositionLon":120.6494637}},{"StationUID":"TZTC-G116","StationName":"捷運九張犁站","StationPosition":{"PositionLat":24.114971,"PositionLon":120.64044}},{"StationUID":"TZTC-G117","StationName":"捷運九德站","StationPosition":{"PositionLat":24.110993,"PositionLon":120.634418}},{"StationUID":"TZTC-G118","StationName":"捷運烏日站","StationPosition":{"PositionLat":24.1088914,"PositionLon":120.6252416}},{"StationUID":"TZTC-G119","StationName":"捷運高鐵台中站","StationPosition":{"PositionLat":24.11003,"PositionLon":120.613676}}]')
    }, 2575: function (t, e, n) {
        "use strict";
        var o = n("281b"), a = n.n(o);
        a.a
    }, "281b": function (t, e, n) {
    }, "289c": function (t, e, n) {
        "use strict";
        var o = n("8f00"), a = n.n(o);
        a.a
    }, "2c08": function (t, e, n) {
    }, "2da5": function (t, e, n) {
    }, "2f03": function (t, e, n) {
        "use strict";
        var o = n("8c19"), a = n.n(o);
        a.a
    }, "2f6a": function (t, e, n) {
        "use strict";
        var o = n("b0c5"), a = n.n(o);
        a.a
    }, 3293: function (t, e, n) {
    }, "332c": function (t, e, n) {
    }, "399b": function (t, e, n) {
        "use strict";
        var o = n("2252"), a = n.n(o);
        a.a
    }, "429e": function (t, e, n) {
        "use strict";
        var o = n("7d8c"), a = n.n(o);
        a.a
    }, "44e3": function (t, e, n) {
        "use strict";
        var o = n("332c"), a = n.n(o);
        a.a
    }, "47a2": function (t, e, n) {
        "use strict";
        var o = n("68d2"), a = n.n(o);
        a.a
    }, 4806: function (t, e, n) {
    }, "499a": function (t, e, n) {
    }, "49fd": function (t, e, n) {
    }, "4cd5": function (t, e, n) {
        "use strict";
        var o = n("f10b"), a = n.n(o);
        a.a
    }, 5018: function (t, e, n) {
    }, "53ed": function (t, e, n) {
        "use strict";
        var o = n("ce6d"), a = n.n(o);
        a.a
    }, "54fb": function (t, e, n) {
    }, "57b3": function (t, e, n) {
        "use strict";
        var o = n("49fd"), a = n.n(o);
        a.a
    }, "5a93": function (t, e, n) {
    }, "5e7d": function (t, e, n) {
        "use strict";
        var o = n("cd89"), a = n.n(o);
        a.a
    }, "5ed0": function (t, e, n) {
        "use strict";
        var o = n("8866"), a = n.n(o);
        a.a
    }, "634a": function (t, e, n) {
        t.exports = {xs: "0", sm: "768px", md: "1024px", lg: "1366px", xl: "1680px"}
    }, "647f": function (t, e, n) {
        "use strict";
        var o = n("fdc5"), a = n.n(o);
        a.a
    }, 6521: function (t, e, n) {
        "use strict";
        var o = n("499a"), a = n.n(o);
        a.a
    }, 6803: function (t, e, n) {
        "use strict";
        var o = n("2c08"), a = n.n(o);
        a.a
    }, "68d2": function (t, e, n) {
    }, "68f9": function (t, e, n) {
        "use strict";
        var o = n("e3d9"), a = n.n(o);
        a.a
    }, "696d": function (t, e, n) {
        "use strict";
        var o = n("934a"), a = n.n(o);
        a.a
    }, "75cf": function (t, e, n) {
        "use strict";
        var o = n("0fc6"), a = n.n(o);
        a.a
    }, "76a9": function (t, e, n) {
        "use strict";
        var o = n("e07c"), a = n.n(o);
        a.a
    }, "7d8c": function (t, e, n) {
    }, 8004: function (t, e, n) {
        "use strict";
        var o = n("4806"), a = n.n(o);
        a.a
    }, 8290: function (t, e, n) {
        "use strict";
        var o = n("9ddc"), a = n.n(o);
        a.a
    }, 8388: function (t, e, n) {
        "use strict";
        var o = n("2da5"), a = n.n(o);
        a.a
    }, 8468: function (t, e, n) {
    }, 8866: function (t, e, n) {
        t.exports = {desktopTopGap: "170", mobileTopGap: "152"}
    }, "8b25": function (t, e, n) {
        "use strict";
        var o = n("c097"), a = n.n(o);
        a.a
    }, "8bbf": function (t, e) {
        t.exports = Vue
    }, "8c19": function (t, e, n) {
    }, "8d2c": function (t, e, n) {
        "use strict";
        var o = n("5a93"), a = n.n(o);
        a.a
    }, "8dd8": function (t) {
        t.exports = JSON.parse('[{"StationUID":"TYMC-A4","StationName":"捷運新莊副都心站","StationPosition":{"PositionLat":25.059,"PositionLon":121.445}},{"StationUID":"TYMC-A5","StationName":"捷運泰山站","StationPosition":{"PositionLat":25.052,"PositionLon":121.439}},{"StationUID":"TYMC-A6","StationName":"捷運泰山貴和站","StationPosition":{"PositionLat":25.033,"PositionLon":121.422}},{"StationUID":"TYMC-A7","StationName":"捷運體育大學站","StationPosition":{"PositionLat":25.041,"PositionLon":121.385}},{"StationUID":"TYMC-A8","StationName":"捷運長庚醫院站","StationPosition":{"PositionLat":25.061,"PositionLon":121.37}},{"StationUID":"TYMC-A9","StationName":"捷運林口站","StationPosition":{"PositionLat":25.066,"PositionLon":121.362}},{"StationUID":"TYMC-A10","StationName":"捷運山鼻站","StationPosition":{"PositionLat":25.081,"PositionLon":121.286}},{"StationUID":"TYMC-A11","StationName":"捷運坑口站","StationPosition":{"PositionLat":25.086,"PositionLon":121.266}},{"StationUID":"TYMC-A12","StationName":"捷運機場第一航廈站","StationPosition":{"PositionLat":25.082,"PositionLon":121.239}},{"StationUID":"TYMC-A13","StationName":"捷運機場第二航廈站","StationPosition":{"PositionLat":25.077,"PositionLon":121.232}},{"StationUID":"TYMC-A14a","StationName":"捷運機場旅館站","StationPosition":{"PositionLat":25.069,"PositionLon":121.221}},{"StationUID":"TYMC-A15","StationName":"捷運大園站","StationPosition":{"PositionLat":25.056,"PositionLon":121.211}},{"StationUID":"TYMC-A16","StationName":"捷運橫山站","StationPosition":{"PositionLat":25.037,"PositionLon":121.216}},{"StationUID":"TYMC-A17","StationName":"捷運領航站","StationPosition":{"PositionLat":25.024,"PositionLon":121.221}},{"StationUID":"TYMC-A18","StationName":"捷運高鐵桃園站","StationPosition":{"PositionLat":25.014,"PositionLon":121.214}},{"StationUID":"TYMC-A19","StationName":"捷運桃園體育園區站","StationPosition":{"PositionLat":25.002,"PositionLon":121.203}},{"StationUID":"TYMC-A20","StationName":"捷運興南站","StationPosition":{"PositionLat":24.98,"PositionLon":121.216}},{"StationUID":"TYMC-A21","StationName":"捷運環北站","StationPosition":{"PositionLat":24.967,"PositionLon":121.221}}]')
    }, "8f00": function (t, e, n) {
    }, "8f2a": function (t, e, n) {
        "use strict";
        var o = n("3293"), a = n.n(o);
        a.a
    }, "90e5": function (t) {
        t.exports = JSON.parse('[{"StationUID":"TRTC-BR01","StationName":"捷運動物園站","StationPosition":{"PositionLat":24.998205,"PositionLon":121.579501}},{"StationUID":"TRTC-BR02","StationName":"捷運木柵站","StationPosition":{"PositionLat":24.99824,"PositionLon":121.573127}},{"StationUID":"TRTC-BR03","StationName":"捷運萬芳社區站","StationPosition":{"PositionLat":24.99857,"PositionLon":121.568088}},{"StationUID":"TRTC-BR04","StationName":"捷運萬芳醫院站","StationPosition":{"PositionLat":24.99932,"PositionLon":121.558092}},{"StationUID":"TRTC-BR05","StationName":"捷運辛亥站","StationPosition":{"PositionLat":25.005455,"PositionLon":121.557046}},{"StationUID":"TRTC-BR06","StationName":"捷運麟光站","StationPosition":{"PositionLat":25.018495,"PositionLon":121.558834}},{"StationUID":"TRTC-BR07","StationName":"捷運六張犁站","StationPosition":{"PositionLat":25.02381,"PositionLon":121.55302}},{"StationUID":"TRTC-BR08","StationName":"捷運科技大樓站","StationPosition":{"PositionLat":25.02612,"PositionLon":121.543462}},{"StationUID":"TRTC-BR09","StationName":"捷運大安站","StationPosition":{"PositionLat":25.033311,"PositionLon":121.54237}},{"StationUID":"TRTC-BR10","StationName":"捷運忠孝復興站","StationPosition":{"PositionLat":25.041749,"PositionLon":121.545026}},{"StationUID":"TRTC-BR11","StationName":"捷運南京復興站","StationPosition":{"PositionLat":25.052044,"PositionLon":121.544303}},{"StationUID":"TRTC-BR12","StationName":"捷運中山國中站","StationPosition":{"PositionLat":25.06085,"PositionLon":121.544215}},{"StationUID":"TRTC-BR13","StationName":"捷運松山機場站","StationPosition":{"PositionLat":25.062908,"PositionLon":121.55201}},{"StationUID":"TRTC-BR14","StationName":"捷運大直站","StationPosition":{"PositionLat":25.07943,"PositionLon":121.54679}},{"StationUID":"TRTC-BR15","StationName":"捷運劍南路站","StationPosition":{"PositionLat":25.08483,"PositionLon":121.555582}},{"StationUID":"TRTC-BR16","StationName":"捷運西湖站","StationPosition":{"PositionLat":25.08216,"PositionLon":121.567227}},{"StationUID":"TRTC-BR17","StationName":"捷運港墘站","StationPosition":{"PositionLat":25.08007,"PositionLon":121.57516}},{"StationUID":"TRTC-BR18","StationName":"捷運文德站","StationPosition":{"PositionLat":25.078455,"PositionLon":121.584999}},{"StationUID":"TRTC-BR19","StationName":"捷運內湖站","StationPosition":{"PositionLat":25.083675,"PositionLon":121.594363}},{"StationUID":"TRTC-BR20","StationName":"捷運大湖公園站","StationPosition":{"PositionLat":25.083805,"PositionLon":121.602214}},{"StationUID":"TRTC-BR21","StationName":"捷運葫洲站","StationPosition":{"PositionLat":25.07271,"PositionLon":121.607146}},{"StationUID":"TRTC-BR22","StationName":"捷運東湖站","StationPosition":{"PositionLat":25.067455,"PositionLon":121.611535}},{"StationUID":"TRTC-BR23","StationName":"捷運南港軟體園區站","StationPosition":{"PositionLat":25.05992,"PositionLon":121.615}},{"StationUID":"TRTC-BR24","StationName":"捷運南港展覽館站","StationPosition":{"PositionLat":25.054919,"PositionLon":121.616861}},{"StationUID":"TRTC-R02","StationName":"捷運象山站","StationPosition":{"PositionLat":25.032395,"PositionLon":121.570116}},{"StationUID":"TRTC-R03","StationName":"捷運台北101/世貿站","StationPosition":{"PositionLat":25.032865,"PositionLon":121.563667}},{"StationUID":"TRTC-R04","StationName":"捷運信義安和站","StationPosition":{"PositionLat":25.033015,"PositionLon":121.552326}},{"StationUID":"TRTC-R06","StationName":"捷運大安森林公園站","StationPosition":{"PositionLat":25.033225,"PositionLon":121.536151}},{"StationUID":"TRTC-R07","StationName":"捷運東門站","StationPosition":{"PositionLat":25.033894,"PositionLon":121.528766}},{"StationUID":"TRTC-R08","StationName":"捷運中正紀念堂站","StationPosition":{"PositionLat":25.032767,"PositionLon":121.518273}},{"StationUID":"TRTC-R09","StationName":"捷運台大醫院站","StationPosition":{"PositionLat":25.041399,"PositionLon":121.51602}},{"StationUID":"TRTC-R10","StationName":"捷運台北車站","StationPosition":{"PositionLat":25.04631,"PositionLon":121.517415}},{"StationUID":"TRTC-R11","StationName":"捷運中山站","StationPosition":{"PositionLat":25.052621,"PositionLon":121.520364}},{"StationUID":"TRTC-R12","StationName":"捷運雙連站","StationPosition":{"PositionLat":25.057575,"PositionLon":121.520685}},{"StationUID":"TRTC-R13","StationName":"捷運民權西路站","StationPosition":{"PositionLat":25.06235,"PositionLon":121.519585}},{"StationUID":"TRTC-R14","StationName":"捷運圓山站","StationPosition":{"PositionLat":25.071409,"PositionLon":121.520074}},{"StationUID":"TRTC-R15","StationName":"捷運劍潭站","StationPosition":{"PositionLat":25.084201,"PositionLon":121.524955}},{"StationUID":"TRTC-R16","StationName":"捷運士林站","StationPosition":{"PositionLat":25.093492,"PositionLon":121.52623}},{"StationUID":"TRTC-R17","StationName":"捷運芝山站","StationPosition":{"PositionLat":25.102718,"PositionLon":121.522546}},{"StationUID":"TRTC-R18","StationName":"捷運明德站","StationPosition":{"PositionLat":25.109815,"PositionLon":121.518785}},{"StationUID":"TRTC-R19","StationName":"捷運石牌站","StationPosition":{"PositionLat":25.114455,"PositionLon":121.515572}},{"StationUID":"TRTC-R20","StationName":"捷運唭哩岸站","StationPosition":{"PositionLat":25.120852,"PositionLon":121.506234}},{"StationUID":"TRTC-R21","StationName":"捷運奇岩站","StationPosition":{"PositionLat":25.12547,"PositionLon":121.50114}},{"StationUID":"TRTC-R22","StationName":"捷運北投站","StationPosition":{"PositionLat":25.131819,"PositionLon":121.498648}},{"StationUID":"TRTC-R22A","StationName":"捷運新北投站","StationPosition":{"PositionLat":25.136931,"PositionLon":121.502595}},{"StationUID":"TRTC-R23","StationName":"捷運復興崗站","StationPosition":{"PositionLat":25.137497,"PositionLon":121.485456}},{"StationUID":"TRTC-R24","StationName":"捷運忠義站","StationPosition":{"PositionLat":25.130923,"PositionLon":121.473298}},{"StationUID":"TRTC-R25","StationName":"捷運關渡站","StationPosition":{"PositionLat":25.12551,"PositionLon":121.467}},{"StationUID":"TRTC-R26","StationName":"捷運竹圍站","StationPosition":{"PositionLat":25.1369,"PositionLon":121.45955}},{"StationUID":"TRTC-R27","StationName":"捷運紅樹林站","StationPosition":{"PositionLat":25.15399,"PositionLon":121.4588}},{"StationUID":"TRTC-R28","StationName":"捷運淡水站","StationPosition":{"PositionLat":25.167745,"PositionLon":121.445805}},{"StationUID":"TRTC-G01","StationName":"捷運新店站","StationPosition":{"PositionLat":24.95761,"PositionLon":121.53746}},{"StationUID":"TRTC-G02","StationName":"捷運新店區公所站","StationPosition":{"PositionLat":24.96744,"PositionLon":121.5413}},{"StationUID":"TRTC-G03","StationName":"捷運七張站","StationPosition":{"PositionLat":24.97545,"PositionLon":121.542985}},{"StationUID":"TRTC-G03A","StationName":"捷運小碧潭站","StationPosition":{"PositionLat":24.97188,"PositionLon":121.53058}},{"StationUID":"TRTC-G04","StationName":"捷運大坪林站","StationPosition":{"PositionLat":24.98272,"PositionLon":121.54134}},{"StationUID":"TRTC-G05","StationName":"捷運景美站","StationPosition":{"PositionLat":24.992824,"PositionLon":121.540697}},{"StationUID":"TRTC-G06","StationName":"捷運萬隆站","StationPosition":{"PositionLat":25.001978,"PositionLon":121.539008}},{"StationUID":"TRTC-G07","StationName":"捷運公館站","StationPosition":{"PositionLat":25.014781,"PositionLon":121.534358}},{"StationUID":"TRTC-G08","StationName":"捷運台電大樓站","StationPosition":{"PositionLat":25.020733,"PositionLon":121.528143}},{"StationUID":"TRTC-G09","StationName":"捷運古亭站","StationPosition":{"PositionLat":25.026373,"PositionLon":121.522868}},{"StationUID":"TRTC-G11","StationName":"捷運小南門站","StationPosition":{"PositionLat":25.035585,"PositionLon":121.51088}},{"StationUID":"TRTC-G12","StationName":"捷運西門站","StationPosition":{"PositionLat":25.042025,"PositionLon":121.508175}},{"StationUID":"TRTC-G13","StationName":"捷運北門站","StationPosition":{"PositionLat":25.049554,"PositionLon":121.510184}},{"StationUID":"TRTC-G15","StationName":"捷運松江南京站","StationPosition":{"PositionLat":25.052693,"PositionLon":121.53285}},{"StationUID":"TRTC-G17","StationName":"捷運台北小巨蛋站","StationPosition":{"PositionLat":25.05152,"PositionLon":121.552549}},{"StationUID":"TRTC-G18","StationName":"捷運南京三民站","StationPosition":{"PositionLat":25.051588,"PositionLon":121.56471}},{"StationUID":"TRTC-G19","StationName":"捷運松山站","StationPosition":{"PositionLat":25.050118,"PositionLon":121.577706}},{"StationUID":"TRTC-O01","StationName":"捷運南勢角站","StationPosition":{"PositionLat":24.990065,"PositionLon":121.509237}},{"StationUID":"TRTC-O02","StationName":"捷運景安站","StationPosition":{"PositionLat":24.993918,"PositionLon":121.504587}},{"StationUID":"TRTC-O03","StationName":"捷運永安市場站","StationPosition":{"PositionLat":25.002895,"PositionLon":121.511225}},{"StationUID":"TRTC-O04","StationName":"捷運頂溪站","StationPosition":{"PositionLat":25.013858,"PositionLon":121.515462}},{"StationUID":"TRTC-O07","StationName":"捷運忠孝新生站","StationPosition":{"PositionLat":25.042498,"PositionLon":121.53321}},{"StationUID":"TRTC-O09","StationName":"捷運行天宮站","StationPosition":{"PositionLat":25.05924,"PositionLon":121.53315}},{"StationUID":"TRTC-O10","StationName":"捷運中山國小站","StationPosition":{"PositionLat":25.062665,"PositionLon":121.526609}},{"StationUID":"TRTC-O12","StationName":"捷運大橋頭站","StationPosition":{"PositionLat":25.06322,"PositionLon":121.513003}},{"StationUID":"TRTC-O13","StationName":"捷運台北橋站","StationPosition":{"PositionLat":25.063075,"PositionLon":121.500575}},{"StationUID":"TRTC-O14","StationName":"捷運菜寮站","StationPosition":{"PositionLat":25.059451,"PositionLon":121.491421}},{"StationUID":"TRTC-O15","StationName":"捷運三重站","StationPosition":{"PositionLat":25.05571,"PositionLon":121.48422}},{"StationUID":"TRTC-O16","StationName":"捷運先嗇宮站","StationPosition":{"PositionLat":25.04632,"PositionLon":121.47165}},{"StationUID":"TRTC-O17","StationName":"捷運頭前庄站","StationPosition":{"PositionLat":25.039735,"PositionLon":121.461655}},{"StationUID":"TRTC-O18","StationName":"捷運新莊站","StationPosition":{"PositionLat":25.03608,"PositionLon":121.45218}},{"StationUID":"TRTC-O19","StationName":"捷運輔大站","StationPosition":{"PositionLat":25.03279,"PositionLon":121.435735}},{"StationUID":"TRTC-O20","StationName":"捷運丹鳳站","StationPosition":{"PositionLat":25.029073,"PositionLon":121.422422}},{"StationUID":"TRTC-O21","StationName":"捷運迴龍站","StationPosition":{"PositionLat":25.022107,"PositionLon":121.411757}},{"StationUID":"TRTC-O50","StationName":"捷運三重國小站","StationPosition":{"PositionLat":25.070275,"PositionLon":121.49701}},{"StationUID":"TRTC-O51","StationName":"捷運三和國中站","StationPosition":{"PositionLat":25.07646,"PositionLon":121.486795}},{"StationUID":"TRTC-O52","StationName":"捷運徐匯中學站","StationPosition":{"PositionLat":25.080485,"PositionLon":121.479945}},{"StationUID":"TRTC-O53","StationName":"捷運三民高中站","StationPosition":{"PositionLat":25.085425,"PositionLon":121.473365}},{"StationUID":"TRTC-O54","StationName":"捷運蘆洲站","StationPosition":{"PositionLat":25.09152,"PositionLon":121.46471}},{"StationUID":"TRTC-BL01","StationName":"捷運頂埔站","StationPosition":{"PositionLat":24.96012,"PositionLon":121.4205}},{"StationUID":"TRTC-BL02","StationName":"捷運永寧站","StationPosition":{"PositionLat":24.96682,"PositionLon":121.43613}},{"StationUID":"TRTC-BL03","StationName":"捷運土城站","StationPosition":{"PositionLat":24.97313,"PositionLon":121.44432}},{"StationUID":"TRTC-BL04","StationName":"捷運海山站","StationPosition":{"PositionLat":24.985305,"PositionLon":121.44873}},{"StationUID":"TRTC-BL05","StationName":"捷運亞東醫院站","StationPosition":{"PositionLat":24.99828,"PositionLon":121.452465}},{"StationUID":"TRTC-BL06","StationName":"捷運府中站","StationPosition":{"PositionLat":25.008465,"PositionLon":121.459276}},{"StationUID":"TRTC-BL07","StationName":"捷運板橋站","StationPosition":{"PositionLat":25.013825,"PositionLon":121.462305}},{"StationUID":"TRTC-BL08","StationName":"捷運新埔站","StationPosition":{"PositionLat":25.02327,"PositionLon":121.468055}},{"StationUID":"TRTC-BL09","StationName":"捷運江子翠站","StationPosition":{"PositionLat":25.030265,"PositionLon":121.47257}},{"StationUID":"TRTC-BL10","StationName":"捷運龍山寺站","StationPosition":{"PositionLat":25.03528,"PositionLon":121.500325}},{"StationUID":"TRTC-BL13","StationName":"捷運善導寺站","StationPosition":{"PositionLat":25.04468,"PositionLon":121.523885}},{"StationUID":"TRTC-BL16","StationName":"捷運忠孝敦化站","StationPosition":{"PositionLat":25.041505,"PositionLon":121.55045}},{"StationUID":"TRTC-BL17","StationName":"捷運國父紀念館站","StationPosition":{"PositionLat":25.04137,"PositionLon":121.557815}},{"StationUID":"TRTC-BL18","StationName":"捷運市政府站","StationPosition":{"PositionLat":25.041135,"PositionLon":121.565685}},{"StationUID":"TRTC-BL19","StationName":"捷運永春站","StationPosition":{"PositionLat":25.040855,"PositionLon":121.5762}},{"StationUID":"TRTC-BL20","StationName":"捷運後山埤站","StationPosition":{"PositionLat":25.044715,"PositionLon":121.58227}},{"StationUID":"TRTC-BL21","StationName":"捷運昆陽站","StationPosition":{"PositionLat":25.050459,"PositionLon":121.593228}},{"StationUID":"TRTC-BL22","StationName":"捷運南港站","StationPosition":{"PositionLat":25.052035,"PositionLon":121.60697}},{"StationUID":"TRTC-Y08","StationName":"捷運十四張站","StationPosition":{"PositionLat":24.984316,"PositionLon":121.52771}},{"StationUID":"TRTC-Y09","StationName":"捷運秀朗橋站","StationPosition":{"PositionLat":24.990334,"PositionLon":121.524931}},{"StationUID":"TRTC-Y10","StationName":"捷運景平站","StationPosition":{"PositionLat":24.992192,"PositionLon":121.51628}},{"StationUID":"TRTC-Y12","StationName":"捷運中和站","StationPosition":{"PositionLat":25.002097,"PositionLon":121.496423}},{"StationUID":"TRTC-Y13","StationName":"捷運橋和站","StationPosition":{"PositionLat":25.004306,"PositionLon":121.490518}},{"StationUID":"TRTC-Y14","StationName":"捷運中原站","StationPosition":{"PositionLat":25.008083,"PositionLon":121.484446}},{"StationUID":"TRTC-Y15","StationName":"捷運板新站","StationPosition":{"PositionLat":25.014449,"PositionLon":121.472542}},{"StationUID":"TRTC-Y17","StationName":"捷運新埔民生站","StationPosition":{"PositionLat":25.025992,"PositionLon":121.466821}},{"StationUID":"TRTC-Y19","StationName":"捷運幸福站","StationPosition":{"PositionLat":25.050059,"PositionLon":121.459994}},{"StationUID":"TRTC-Y20","StationName":"捷運新北產業園區站","StationPosition":{"PositionLat":25.061643,"PositionLon":121.459004}}]')
    }, "934a": function (t, e, n) {
    }, "93bc": function (t, e, n) {
        "use strict";
        var o = n("8468"), a = n.n(o);
        a.a
    }, "96c6": function (t, e, n) {
        t.exports = {desktopTopGap: "170", mobileTopGap: "152"}
    }, 9765: function (t, e, n) {
        "use strict";
        var o = n("b87d"), a = n.n(o);
        a.a
    }, "995b": function (t, e, n) {
    }, "9a5e": function (t, e, n) {
    }, "9cd7": function (t, e, n) {
        "use strict";
        var o = n("1429"), a = n.n(o);
        a.a
    }, "9ddc": function (t, e, n) {
    }, a19e: function (t, e, n) {
        t.exports = {
            popup: "popup-module_popup_2Wf4s",
            popupBackdrop: "popup-module_popupBackdrop_3XUMn",
            popupBox: "popup-module_popupBox_Y78Uv",
            popupWrapper: "popup-module_popupWrapper_2Plub",
            popupHeader: "popup-module_popupHeader_2jvRd",
            popupBody: "popup-module_popupBody_eXoNS",
            "popup-body-inner": "popup-module_popup-body-inner_3uJl7",
            popupIconClick: "popup-module_popupIconClick_2dyOL"
        }
    }, a1e5: function (t, e, n) {
        "use strict";
        var o = n("c3dc"), a = n.n(o);
        a.a
    }, aa90: function (t, e) {
        (function (e) {
            var n = "Modernizr" in e, o = e.Modernizr;
            !function (t, e, n) {
                function o(t, e) {
                    return typeof t === e
                }

                function a() {
                    return "function" != typeof e.createElement ? e.createElement(arguments[0]) : S ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
                }

                function i() {
                    var t = e.body;
                    return t || (t = a(S ? "svg" : "body"), t.fake = !0), t
                }

                function s(t, n, o, s) {
                    var r, l, c, u, p = "modernizr", m = a("div"), d = i();
                    if (parseInt(o, 10)) for (; o--;) c = a("div"), c.id = s ? s[o] : p + (o + 1), m.appendChild(c);
                    return r = a("style"), r.type = "text/css", r.id = "s" + p, (d.fake ? d : m).appendChild(r), d.appendChild(m), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), m.id = p, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = T.style.overflow, T.style.overflow = "hidden", T.appendChild(d)), l = n(m, t), d.fake ? (d.parentNode.removeChild(d), T.style.overflow = u, T.offsetHeight) : m.parentNode.removeChild(m), !!l
                }

                function r(t, e) {
                    return !!~("" + t).indexOf(e)
                }

                function l(t) {
                    return t.replace(/([A-Z])/g, (function (t, e) {
                        return "-" + e.toLowerCase()
                    })).replace(/^ms-/, "-ms-")
                }

                function c(e, n, o) {
                    var a;
                    if ("getComputedStyle" in t) {
                        a = getComputedStyle.call(t, e, n);
                        var i = t.console;
                        if (null !== a) o && (a = a.getPropertyValue(o)); else if (i) {
                            var s = i.error ? "error" : "log";
                            i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        }
                    } else a = !n && e.currentStyle && e.currentStyle[o];
                    return a
                }

                function u(e, o) {
                    var a = e.length;
                    if ("CSS" in t && "supports" in t.CSS) {
                        for (; a--;) if (t.CSS.supports(l(e[a]), o)) return !0;
                        return !1
                    }
                    if ("CSSSupportsRule" in t) {
                        for (var i = []; a--;) i.push("(" + l(e[a]) + ":" + o + ")");
                        return i = i.join(" or "), s("@supports (" + i + ") { #modernizr { position: absolute; } }", (function (t) {
                            return "absolute" === c(t, null, "position")
                        }))
                    }
                    return n
                }

                function p(t) {
                    return t.replace(/([a-z])-([a-z])/g, (function (t, e, n) {
                        return e + n.toUpperCase()
                    })).replace(/^-/, "")
                }

                function m(t, e, i, s) {
                    function l() {
                        m && (delete j.style, delete j.modElem)
                    }

                    if (s = !o(s, "undefined") && s, !o(i, "undefined")) {
                        var c = u(t, i);
                        if (!o(c, "undefined")) return c
                    }
                    for (var m, d, h, b, f, g = ["modernizr", "tspan", "samp"]; !j.style && g.length;) m = !0, j.modElem = a(g.shift()), j.style = j.modElem.style;
                    for (h = t.length, d = 0; d < h; d++) if (b = t[d], f = j.style[b], r(b, "-") && (b = p(b)), j.style[b] !== n) {
                        if (s || o(i, "undefined")) return l(), "pfx" !== e || b;
                        try {
                            j.style[b] = i
                        } catch (t) {
                        }
                        if (j.style[b] !== f) return l(), "pfx" !== e || b
                    }
                    return l(), !1
                }

                function d(t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }

                function h(t, e, n) {
                    var a;
                    for (var i in t) if (t[i] in e) return !1 === n ? t[i] : (a = e[t[i]], o(a, "function") ? d(a, n || e) : a);
                    return !1
                }

                function b(t, e, n, a, i) {
                    var s = t.charAt(0).toUpperCase() + t.slice(1), r = (t + " " + O.join(s + " ") + s).split(" ");
                    return o(e, "string") || o(e, "undefined") ? m(r, e, a, i) : (r = (t + " " + w.join(s + " ") + s).split(" "), h(r, e, n))
                }

                var f = [], g = {
                    _version: "3.8.0",
                    _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
                    _q: [],
                    on: function (t, e) {
                        var n = this;
                        setTimeout((function () {
                            e(n[t])
                        }), 0)
                    },
                    addTest: function (t, e, n) {
                        f.push({name: t, fn: e, options: n})
                    },
                    addAsyncTest: function (t) {
                        f.push({name: null, fn: t})
                    }
                }, y = function () {
                };
                y.prototype = g, y = new y;
                var _ = [], T = e.documentElement, S = "svg" === T.nodeName.toLowerCase(), P = function () {
                    var e = t.matchMedia || t.msMatchMedia;
                    return e ? function (t) {
                        var n = e(t);
                        return n && n.matches || !1
                    } : function (e) {
                        var n = !1;
                        return s("@media " + e + " { #modernizr { position: absolute; } }", (function (e) {
                            n = "absolute" === (t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle).position
                        })), n
                    }
                }();
                g.mq = P;
                var C = "Moz O ms Webkit", O = g._config.usePrefixes ? C.split(" ") : [];
                g._cssomPrefixes = O;
                var v = {elem: a("modernizr")};
                y._q.push((function () {
                    delete v.elem
                }));
                var j = {style: v.elem.style};
                y._q.unshift((function () {
                    delete j.style
                }));
                var w = g._config.usePrefixes ? C.toLowerCase().split(" ") : [];
                g._domPrefixes = w, g.testAllProps = b;
                var L = function (e) {
                    var o, a = prefixes.length, i = t.CSSRule;
                    if (void 0 === i) return n;
                    if (!e) return !1;
                    if (e = e.replace(/^@/, ""), (o = e.replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + e;
                    for (var s = 0; s < a; s++) {
                        var r = prefixes[s];
                        if (r.toUpperCase() + "_" + o in i) return "@-" + r.toLowerCase() + "-" + e
                    }
                    return !1
                };
                g.atRule = L, g.prefixed = function (t, e, n) {
                    return 0 === t.indexOf("@") ? L(t) : (-1 !== t.indexOf("-") && (t = p(t)), e ? b(t, e, n) : b(t, "pfx"))
                }, function () {
                    var t, e, n, a, i, s, r;
                    for (var l in f) if (f.hasOwnProperty(l)) {
                        if (t = [], e = f[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                        for (a = o(e.fn, "function") ? e.fn() : e.fn, i = 0; i < t.length; i++) s = t[i], r = s.split("."), 1 === r.length ? y[r[0]] = a : (y[r[0]] && (!y[r[0]] || y[r[0]] instanceof Boolean) || (y[r[0]] = new Boolean(y[r[0]])), y[r[0]][r[1]] = a), _.push((a ? "" : "no-") + r.join("-"))
                    }
                }(), delete g.addTest, delete g.addAsyncTest;
                for (var R = 0; R < y._q.length; R++) y._q[R]();
                t.Modernizr = y
            }(e, document), t.exports = e.Modernizr, n ? e.Modernizr = o : delete e.Modernizr
        })(window)
    }, ad19: function (t, e, n) {
    }, b0a5: function (t) {
        t.exports = JSON.parse('{"99001001001":{"name":"動物園","lat":24.9981742,"lon":121.5794887,"opendata_id":"TRTC-BR01"},"99001001002":{"name":"木柵","lat":24.99824,"lon":121.573145,"opendata_id":"TRTC-BR02"},"99001001003":{"name":"萬芳社區","lat":24.998585,"lon":121.568102,"opendata_id":"TRTC-BR03"},"99001001004":{"name":"萬芳醫院","lat":24.999418,"lon":121.5580924,"opendata_id":"TRTC-BR04"},"99001001005":{"name":"辛亥","lat":25.0053806,"lon":121.5569625,"opendata_id":"TRTC-BR05"},"99001001006":{"name":"麟光","lat":25.01851,"lon":121.5588237,"opendata_id":"TRTC-BR06"},"99001001007":{"name":"六張犁","lat":25.0238086,"lon":121.5531523,"opendata_id":"TRTC-BR07"},"99001001008":{"name":"科技大樓","lat":25.0260787,"lon":121.5434607,"opendata_id":"TRTC-BR08"},"99001001009":{"name":"大安","lat":25.0329936,"lon":121.5435968,"opendata_id":"TRTC-BR09"},"99001001010":{"name":"忠孝復興","lat":25.0416216,"lon":121.5437808,"opendata_id":"TRTC-BR10"},"99001001011":{"name":"南京復興","lat":25.0519292,"lon":121.5440212,"opendata_id":"TRTC-BR11"},"99001001012":{"name":"中山國中","lat":25.0606995,"lon":121.5442076,"opendata_id":"TRTC-BR12"},"99001001013":{"name":"松山機場","lat":25.0636811,"lon":121.5518476,"opendata_id":"TRTC-BR13"},"99001001014":{"name":"大直","lat":25.0797237,"lon":121.5470748,"opendata_id":"TRTC-BR14"},"99001001015":{"name":"劍南路","lat":25.0848112,"lon":121.5557099,"opendata_id":"TRTC-BR15"},"99001001016":{"name":"西湖","lat":25.0821969,"lon":121.5672547,"opendata_id":"TRTC-BR16"},"99001001017":{"name":"港墘","lat":25.0800994,"lon":121.5751496,"opendata_id":"TRTC-BR17"},"99001001018":{"name":"文德","lat":25.0786084,"lon":121.5849812,"opendata_id":"TRTC-BR18"},"99001001019":{"name":"內湖","lat":25.08355633,"lon":121.5941762,"opendata_id":"TRTC-BR19"},"99001001020":{"name":"大湖公園","lat":25.0838993,"lon":121.6022007,"opendata_id":"TRTC-BR20"},"99001001021":{"name":"葫洲","lat":25.0728024,"lon":121.6070809,"opendata_id":"TRTC-BR21"},"99001001022":{"name":"東湖","lat":25.0675213,"lon":121.6116271,"opendata_id":"TRTC-BR22"},"99001001023":{"name":"南港軟體園區","lat":25.0600781,"lon":121.6159153,"opendata_id":"TRTC-BR23"},"99001001024":{"name":"南港展覽館","lat":25.0563886,"lon":121.6161057,"opendata_id":"TRTC-BR24"},"99001002001":{"name":"象山","lat":25.0328146,"lon":121.5700821,"opendata_id":"TRTC-R02"},"99001002002":{"name":"台北101/世貿","lat":25.0330304,"lon":121.5627598,"opendata_id":"TRTC-R03"},"99001002003":{"name":"信義安和","lat":25.0331403,"lon":121.5530053,"opendata_id":"TRTC-R04"},"99001002004":{"name":"大安","lat":25.0329936,"lon":121.5435968,"opendata_id":"TRTC-BR09"},"99001002005":{"name":"大安森林公園","lat":25.0335652,"lon":121.5357355,"opendata_id":"TRTC-R06"},"99001002006":{"name":"東門","lat":25.0339334,"lon":121.528504,"opendata_id":"TRTC-R07"},"99001002007":{"name":"中正紀念堂","lat":25.0326494,"lon":121.5183115,"opendata_id":"TRTC-R08"},"99001002008":{"name":"台大醫院","lat":25.0420743,"lon":121.5162786,"opendata_id":"TRTC-R09"},"99001002009":{"name":"台北車站","lat":25.0478072,"lon":121.5170185,"opendata_id":"TRTC-R10"},"99001002010":{"name":"中山","lat":25.052685,"lon":121.520391,"opendata_id":"TRTC-R11"},"99001002011":{"name":"雙連","lat":25.0577788,"lon":121.5206671,"opendata_id":"TRTC-R12"},"99001002012":{"name":"民權西路","lat":25.0628965,"lon":121.5197218,"opendata_id":"TRTC-R13"},"99001002013":{"name":"圓山","lat":25.0713909,"lon":121.5201222,"opendata_id":"TRTC-R14"},"99001002014":{"name":"劍潭","lat":25.0844575,"lon":121.5250393,"opendata_id":"TRTC-R15"},"99001002015":{"name":"士林","lat":25.093492,"lon":121.52623,"opendata_id":"TRTC-R16"},"99001002016":{"name":"芝山","lat":25.103059,"lon":121.522513,"opendata_id":"TRTC-R17"},"99001002017":{"name":"明德","lat":25.1098526,"lon":121.5187719,"opendata_id":"TRTC-R18"},"99001002018":{"name":"石牌","lat":25.1144046,"lon":121.515609,"opendata_id":"TRTC-R19"},"99001002019":{"name":"唭哩岸","lat":25.1208333,"lon":121.5061653,"opendata_id":"TRTC-R20"},"99001002020":{"name":"奇岩","lat":25.1255353,"lon":121.5011094,"opendata_id":"TRTC-R21"},"99001002021":{"name":"北投","lat":25.1317795,"lon":121.4986418,"opendata_id":"TRTC-R22"},"99001002022":{"name":"新北投","lat":25.1369109,"lon":121.502462,"opendata_id":"TRTC-R22A"},"99001002023":{"name":"復興崗","lat":25.1375116,"lon":121.4854519,"opendata_id":"TRTC-R23"},"99001002024":{"name":"忠義","lat":25.1309691,"lon":121.4732889,"opendata_id":"TRTC-R24"},"99001002025":{"name":"關渡","lat":25.1254892,"lon":121.4671976,"opendata_id":"TRTC-R25"},"99001002026":{"name":"竹圍","lat":25.1369143,"lon":121.4595256,"opendata_id":"TRTC-R26"},"99001002028":{"name":"淡水","lat":25.16771849,"lon":121.4456756,"opendata_id":"TRTC-R28"},"99001003001":{"name":"新店","lat":24.9582012,"lon":121.5380692,"opendata_id":"TRTC-G01"},"99001003002":{"name":"新店區公所","lat":24.9678581,"lon":121.5415249,"opendata_id":"TRTC-G02"},"99001003003":{"name":"七張","lat":24.9757873,"lon":121.5429078,"opendata_id":"TRTC-G03"},"99001003004":{"name":"小碧潭","lat":24.9717316,"lon":121.5307062,"opendata_id":"TRTC-G03A"},"99001003005":{"name":"大坪林","lat":24.982899,"lon":121.541351,"opendata_id":"TRTC-G04"},"99001003006":{"name":"景美","lat":24.9928277,"lon":121.5408272,"opendata_id":"TRTC-G05"},"99001003007":{"name":"萬隆","lat":25.0016902,"lon":121.5390895,"opendata_id":"TRTC-G06"},"99001003008":{"name":"公館","lat":25.0148296,"lon":121.534228,"opendata_id":"TRTC-G07"},"99001003009":{"name":"台電大樓","lat":25.0206055,"lon":121.528357,"opendata_id":"TRTC-G08"},"99001003010":{"name":"古亭","lat":25.0265508,"lon":121.5228141,"opendata_id":"TRTC-G09"},"99001003011":{"name":"中正紀念堂","lat":25.0326494,"lon":121.5183115,"opendata_id":"TRTC-R08"},"99001003012":{"name":"小南門","lat":25.0355361,"lon":121.5111932,"opendata_id":"TRTC-G11"},"99001003013":{"name":"西門","lat":25.04219164304454,"lon":121.5082999822834,"opendata_id":"TRTC-G12"},"99001003014":{"name":"北門","lat":25.0492666,"lon":121.5102369,"opendata_id":"TRTC-G13"},"99001003015":{"name":"中山","lat":25.052685,"lon":121.520391,"opendata_id":"TRTC-R11"},"99001003016":{"name":"松江南京","lat":25.052086,"lon":121.533002,"opendata_id":"TRTC-G15"},"99001003017":{"name":"南京復興","lat":25.0519292,"lon":121.5440212,"opendata_id":"TRTC-BR11"},"99001003018":{"name":"台北小巨蛋","lat":25.051668,"lon":121.551879,"opendata_id":"TRTC-G17"},"99001003019":{"name":"南京三民","lat":25.051429,"lon":121.563858,"opendata_id":"TRTC-G18"},"99001003020":{"name":"松山","lat":25.0501298,"lon":121.5776848,"opendata_id":"TRTC-G19"},"99001004001":{"name":"南勢角","lat":24.9899168,"lon":121.5090114,"opendata_id":"TRTC-O01"},"99001004002":{"name":"景安","lat":24.9939033,"lon":121.5046091,"opendata_id":"TRTC-O02"},"99001004003":{"name":"永安市場","lat":25.0022878,"lon":121.5109906,"opendata_id":"TRTC-O03"},"99001004004":{"name":"頂溪","lat":25.0134703,"lon":121.5154441,"opendata_id":"TRTC-O04"},"99001004005":{"name":"古亭","lat":25.0265508,"lon":121.5228141,"opendata_id":"TRTC-G09"},"99001004006":{"name":"東門","lat":25.0339334,"lon":121.528504,"opendata_id":"TRTC-R07"},"99001004007":{"name":"忠孝新生","lat":25.0417882,"lon":121.5328524,"opendata_id":"TRTC-O07"},"99001004008":{"name":"松江南京","lat":25.052086,"lon":121.533002,"opendata_id":"TRTC-G15"},"99001004009":{"name":"行天宮","lat":25.059717,"lon":121.533184,"opendata_id":"TRTC-O09"},"99001004010":{"name":"中山國小","lat":25.0627109,"lon":121.5264567,"opendata_id":"TRTC-O10"},"99001004011":{"name":"民權西路","lat":25.0628965,"lon":121.5197218,"opendata_id":"TRTC-R13"},"99001004012":{"name":"大橋頭","lat":25.0630909,"lon":121.5135996,"opendata_id":"TRTC-O12"},"99001004013":{"name":"台北橋","lat":25.0630582,"lon":121.5001375,"opendata_id":"TRTC-O13"},"99001004014":{"name":"菜寮","lat":25.0601428,"lon":121.4920792,"opendata_id":"TRTC-O14"},"99001004015":{"name":"三重","lat":25.0545947,"lon":121.482874,"opendata_id":"TRTC-O15"},"99001004016":{"name":"先嗇宮","lat":25.0462948,"lon":121.4713921,"opendata_id":"TRTC-O16"},"99001004017":{"name":"頭前庄","lat":25.0396163,"lon":121.461594,"opendata_id":"TRTC-O17"},"99001004018":{"name":"新莊","lat":25.036125,"lon":121.452468,"opendata_id":"TRTC-O18"},"99001004019":{"name":"輔大","lat":25.0327256,"lon":121.4356136,"opendata_id":"TRTC-O19"},"99001004020":{"name":"丹鳳","lat":25.0288671,"lon":121.422435,"opendata_id":"TRTC-O20"},"99001004021":{"name":"迴龍","lat":25.0219364,"lon":121.4116256,"opendata_id":"TRTC-O21"},"99001004022":{"name":"三重國小","lat":25.0706729,"lon":121.4967621,"opendata_id":"TRTC-O50"},"99001004023":{"name":"三和國中","lat":25.0767991,"lon":121.486462,"opendata_id":"TRTC-O51"},"99001004024":{"name":"徐匯中學","lat":25.0806424,"lon":121.479723,"opendata_id":"TRTC-O52"},"99001004025":{"name":"三民高中","lat":25.0856776,"lon":121.4731025,"opendata_id":"TRTC-O53"},"99001004026":{"name":"蘆洲","lat":25.0913687,"lon":121.4642461,"opendata_id":"TRTC-O54"},"99001005001":{"name":"頂埔","lat":24.9593586,"lon":121.4198177,"opendata_id":"TRTC-BL01"},"99001005002":{"name":"永寧","lat":24.9669358,"lon":121.4362613,"opendata_id":"TRTC-BL02"},"99001005003":{"name":"土城","lat":24.9730355,"lon":121.444286,"opendata_id":"TRTC-BL03"},"99001005004":{"name":"海山","lat":24.9853715,"lon":121.4487807,"opendata_id":"TRTC-BL04"},"99001005005":{"name":"亞東醫院","lat":24.9984977,"lon":121.4525477,"opendata_id":"TRTC-BL05"},"99001005006":{"name":"府中","lat":25.0085455,"lon":121.4594333,"opendata_id":"TRTC-BL06"},"99001005007":{"name":"板橋","lat":25.0138225,"lon":121.4624431,"opendata_id":"TRTC-BL07"},"99001005008":{"name":"新埔","lat":25.0242359,"lon":121.468174,"opendata_id":"TRTC-BL08"},"99001005009":{"name":"江子翠","lat":25.03000746,"lon":121.4723869,"opendata_id":"TRTC-BL09"},"99001005010":{"name":"龍山寺","lat":25.0352501,"lon":121.5004297,"opendata_id":"TRTC-BL10"},"99001005011":{"name":"西門","lat":25.04219164304454,"lon":121.5082999822834,"opendata_id":"TRTC-G12"},"99001005012":{"name":"台北車站","lat":25.0478072,"lon":121.5170185,"opendata_id":"TRTC-R10"},"99001005013":{"name":"善導寺","lat":25.0448491,"lon":121.5233604,"opendata_id":"TRTC-BL13"},"99001005014":{"name":"忠孝新生","lat":25.0417882,"lon":121.5328524,"opendata_id":"TRTC-O07"},"99001005015":{"name":"忠孝復興","lat":25.0416216,"lon":121.5437808,"opendata_id":"TRTC-BR10"},"99001005016":{"name":"忠孝敦化","lat":25.0413698,"lon":121.5504928,"opendata_id":"TRTC-BL16"},"99001005017":{"name":"國父紀念館","lat":25.0413783,"lon":121.5575216,"opendata_id":"TRTC-BL17"},"99001005018":{"name":"市政府","lat":25.0411163,"lon":121.5663248,"opendata_id":"TRTC-BL18"},"99001005019":{"name":"永春","lat":25.0408565,"lon":121.5760231,"opendata_id":"TRTC-BL19"},"99001005020":{"name":"後山埤","lat":25.0450096,"lon":121.5824999,"opendata_id":"TRTC-BL20"},"99001005021":{"name":"昆陽","lat":25.0505197,"lon":121.5932486,"opendata_id":"TRTC-BL21"},"99001005022":{"name":"南港","lat":25.05214483,"lon":121.6070319,"opendata_id":"TRTC-BL22"},"99001005023":{"name":"南港展覽館","lat":25.0563886,"lon":121.6161057,"opendata_id":"TRTC-BL23"},"99001006001":{"name":"大坪林","lat":24.982899,"lon":121.541351,"opendata_id":"TRTC-G04"},"99001006002":{"name":"十四張","lat":24.984316,"lon":121.52771,"opendata_id":"TRTC-Y08"},"99001006003":{"name":"秀朗橋","lat":24.990334,"lon":121.524931,"opendata_id":"TRTC-Y09"},"99001006004":{"name":"景平","lat":24.992192,"lon":121.51628,"opendata_id":"TRTC-Y10"},"99001006005":{"name":"景安","lat":24.9939033,"lon":121.5046091,"opendata_id":"TRTC-O02"},"99001006006":{"name":"中和","lat":25.002097,"lon":121.496423,"opendata_id":"TRTC-Y12"},"99001006007":{"name":"橋和","lat":25.004306,"lon":121.490518,"opendata_id":"TRTC-Y13"},"99001006008":{"name":"中原","lat":25.008083,"lon":121.484446,"opendata_id":"TRTC-Y14"},"99001006009":{"name":"板新","lat":25.014449,"lon":121.472542,"opendata_id":"TRTC-Y15"},"99001006010":{"name":"板橋","lat":25.0138225,"lon":121.4624431,"opendata_id":"TRTC-BL07"},"99001006011":{"name":"新埔民生","lat":25.02608851,"lon":121.4666616,"opendata_id":"TRTC-Y17"},"99001006012":{"name":"頭前庄","lat":25.0396163,"lon":121.461594,"opendata_id":"TRTC-O17"},"99001006013":{"name":"幸福","lat":25.050048,"lon":121.459999,"opendata_id":"TRTC-Y19"},"99001006014":{"name":"新北產業園區","lat":25.0617153,"lon":121.458816,"opendata_id":"TRTC-Y20"},"99001007001":{"name":"紅樹林","lat":25.155597,"lon":121.458851,"opendata_id":"TRTC-V01"},"99001007002":{"name":"竿蓁林","lat":25.162415,"lon":121.456232,"opendata_id":"TRTC-V02"},"99001007003":{"name":"淡金鄧公","lat":25.169363,"lon":121.460813,"opendata_id":"TRTC-V03"},"99001007004":{"name":"淡江大學","lat":25.17719,"lon":121.455953,"opendata_id":"TRTC-V04"},"99001007005":{"name":"淡金北新","lat":25.181131,"lon":121.452366,"opendata_id":"TRTC-V05"},"99001007006":{"name":"新市一路","lat":25.183817,"lon":121.448258,"opendata_id":"TRTC-V06"},"99001007007":{"name":"淡水行政中心","lat":25.189017,"lon":121.444482,"opendata_id":"TRTC-V07"},"99001007008":{"name":"濱海義山","lat":25.18977,"lon":121.43738,"opendata_id":"TRTC-V08"},"99001007009":{"name":"濱海沙崙","lat":25.190501,"lon":121.431589,"opendata_id":"TRTC-V09"},"99001007010":{"name":"淡海新市鎮","lat":25.19569,"lon":121.432471,"opendata_id":"TRTC-V10"},"99001007011":{"name":"崁頂","lat":25.200994,"lon":121.434651,"opendata_id":"TRTC-V11"},"99001007012":{"name":"淡水漁人碼頭","lat":25.182015,"lon":121.418627,"opendata_id":"TRTC-V26"},"99001007013":{"name":"沙崙","lat":25.18753,"lon":121.417312,"opendata_id":"TRTC-V27"},"99001007014":{"name":"台北海洋大學","lat":25.19131,"lon":121.42682,"opendata_id":"TRTC-V28"},"99001008001":{"name":"雙城","lat":24.94635,"lon":121.48967,"opendata_id":"TRTC-K01"},"99001008002":{"name":"玫瑰中國城","lat":24.9509,"lon":121.49407,"opendata_id":"TRTC-K02"},"99001008003":{"name":"台北小城","lat":24.95375,"lon":121.49953,"opendata_id":"TRTC-K03"},"99001008004":{"name":"耕莘安康院區","lat":24.95444,"lon":121.50469,"opendata_id":"TRTC-K04"},"99001008005":{"name":"景文科大","lat":24.95551,"lon":121.51041,"opendata_id":"TRTC-K05"},"99001008006":{"name":"安康","lat":24.96513,"lon":121.51721,"opendata_id":"TRTC-K06"},"99001008007":{"name":"陽光運動公園","lat":24.97229,"lon":121.5195,"opendata_id":"TRTC-K07"},"99001008008":{"name":"新和國小","lat":24.97231,"lon":121.51951,"opendata_id":"TRTC-K08"},"99001008009":{"name":"十四張","lat":24.98437,"lon":121.52731,"opendata_id":"TRTC-K09"},"99002001001":{"name":"台北車站","lat":25.04882,"lon":121.51375,"opendata_id":"TYMC-A1"},"99002001002":{"name":"三重","lat":25.0545947,"lon":121.482874,"opendata_id":"TRTC-O15"},"99002001003":{"name":"新北產業園區","lat":25.0617153,"lon":121.458816,"opendata_id":"TRTC-Y20"},"99002001004":{"name":"新莊副都心","lat":25.0592476,"lon":121.4463191,"opendata_id":"TYMC-A4"},"99002001005":{"name":"泰山","lat":25.0532726,"lon":121.4395294,"opendata_id":"TYMC-A5"},"99002001006":{"name":"泰山貴和","lat":25.033503,"lon":121.4223097,"opendata_id":"TYMC-A6"},"99002001007":{"name":"體育大學","lat":25.041246,"lon":121.385434,"opendata_id":"TYMC-A7"},"99002001008":{"name":"長庚醫院","lat":25.0605355,"lon":121.3707398,"opendata_id":"TYMC-A8"},"99002001009":{"name":"林口","lat":25.0658742,"lon":121.3614006,"opendata_id":"TYMC-A9"},"99002001010":{"name":"山鼻","lat":25.0807591,"lon":121.2848289,"opendata_id":"TYMC-A10"},"99002001011":{"name":"坑口","lat":25.086516,"lon":121.2664488,"opendata_id":"TYMC-A11"},"99002001012":{"name":"機場第一航廈","lat":25.081746,"lon":121.2391751,"opendata_id":"TYMC-A12"},"99002001013":{"name":"機場第二航廈","lat":25.07707,"lon":121.231885,"opendata_id":"TYMC-A13"},"99002001014":{"name":"機場旅館","lat":25.0692598,"lon":121.220939,"opendata_id":"TYMC-A14a"},"99002001015":{"name":"大園","lat":25.0560015,"lon":121.2105677,"opendata_id":"TYMC-A15"},"99002001016":{"name":"橫山","lat":25.0366078,"lon":121.2157284,"opendata_id":"TYMC-A16"},"99002001017":{"name":"領航","lat":25.0241743,"lon":121.2211115,"opendata_id":"TYMC-A17"},"99002001018":{"name":"高鐵桃園","lat":25.013762,"lon":121.214162,"opendata_id":"TYMC-A18"},"99002001019":{"name":"桃園體育園區","lat":25.001996,"lon":121.203495,"opendata_id":"TYMC-A19"},"99002001020":{"name":"興南","lat":24.980184,"lon":121.216266,"opendata_id":"TYMC-A20"},"99002001021":{"name":"環北","lat":24.967197,"lon":121.22113,"opendata_id":"TYMC-A21"},"99002001022":{"name":"老街溪","lat":24.959537,"lon":121.21934,"opendata_id":"TYMC-A22"},"99003001001":{"name":"北屯總站","lat":24.1885115,"lon":120.708665,"opendata_id":"TZTC-G103a"},"99003001002":{"name":"舊社","lat":24.1825032,"lon":120.7075335,"opendata_id":"TZTC-G103"},"99003001003":{"name":"松竹","lat":24.1806064,"lon":120.701574,"opendata_id":"TZTC-G104"},"99003001004":{"name":"四維國小","lat":24.171038,"lon":120.6932793,"opendata_id":"TZTC-G105"},"99003001005":{"name":"文心崇德","lat":24.1721105,"lon":120.6850564,"opendata_id":"TZTC-G106"},"99003001006":{"name":"文心中清","lat":24.1734811,"lon":120.6712073,"opendata_id":"TZTC-G107"},"99003001007":{"name":"文華高中","lat":24.171762,"lon":120.660693,"opendata_id":"TZTC-G108"},"99003001008":{"name":"文心櫻花","lat":24.167679,"lon":120.653327,"opendata_id":"TZTC-G109"},"99003001009":{"name":"市政府","lat":24.1619375,"lon":120.6490315,"opendata_id":"TZTC-G110"},"99003001010":{"name":"水安宮","lat":24.153509,"lon":120.646497,"opendata_id":"TZTC-G111"},"99003001011":{"name":"文心森林公園","lat":24.1450119,"lon":120.6466238,"opendata_id":"TZTC-G112"},"99003001012":{"name":"南屯","lat":24.140204,"lon":120.6472176,"opendata_id":"TZTC-G113"},"99003001013":{"name":"豐樂公園","lat":24.1324874,"lon":120.6466984,"opendata_id":"TZTC-G114"},"99003001014":{"name":"大慶","lat":24.1202443,"lon":120.6494637,"opendata_id":"TZTC-G115"},"99003001015":{"name":"九張犁","lat":24.114971,"lon":120.64044,"opendata_id":"TZTC-G116"},"99003001016":{"name":"九德","lat":24.110993,"lon":120.634418,"opendata_id":"TZTC-G117"},"99003001017":{"name":"烏日","lat":24.1088914,"lon":120.6252416,"opendata_id":"TZTC-G118"},"99003001018":{"name":"高鐵臺中站","lat":24.11003,"lon":120.613676,"opendata_id":"TZTC-G119"},"99004001001":{"name":"小港","lat":22.5648099,"lon":120.353813,"opendata_id":"KRTC-R3"},"99004001002":{"name":"高雄國際機場","lat":22.5700814,"lon":120.3417417,"opendata_id":"KRTC-R4"},"99004001003":{"name":"草衙","lat":22.5803727,"lon":120.3287608,"opendata_id":"KRTC-R4A"},"99004001004":{"name":"前鎮高中","lat":22.588351,"lon":120.321745,"opendata_id":"KRTC-R5"},"99004001005":{"name":"凱旋","lat":22.5967915,"lon":120.3154363,"opendata_id":"KRTC-R6"},"99004001006":{"name":"獅甲","lat":22.6060459,"lon":120.308084,"opendata_id":"KRTC-R7"},"99004001007":{"name":"三多商圈","lat":22.6139575,"lon":120.304587,"opendata_id":"KRTC-R8"},"99004001008":{"name":"中央公園","lat":22.6248481,"lon":120.3011078,"opendata_id":"KRTC-R9"},"99004001009":{"name":"美麗島","lat":22.6313887,"lon":120.3019131,"opendata_id":"KRTC-R10"},"99004001010":{"name":"高雄車站","lat":22.6393937,"lon":120.3025404,"opendata_id":"KRTC-R11"},"99004001011":{"name":"後驛","lat":22.6484962,"lon":120.3033595,"opendata_id":"KRTC-R12"},"99004001012":{"name":"凹子底","lat":22.6570745,"lon":120.3032583,"opendata_id":"KRTC-R13"},"99004001013":{"name":"巨蛋","lat":22.6663552,"lon":120.3031353,"opendata_id":"KRTC-R14"},"99004001014":{"name":"生態園區","lat":22.6767048,"lon":120.3065758,"opendata_id":"KRTC-R15"},"99004001015":{"name":"左營","lat":22.6878495,"lon":120.3091251,"opendata_id":"KRTC-R16"},"99004001016":{"name":"世運","lat":22.7018678,"lon":120.3024907,"opendata_id":"KRTC-R17"},"99004001017":{"name":"油廠國小","lat":22.7086863,"lon":120.3021979,"opendata_id":"KRTC-R18"},"99004001018":{"name":"楠梓加工區","lat":22.7186939,"lon":120.3070681,"opendata_id":"KRTC-R19"},"99004001019":{"name":"後勁","lat":22.722348,"lon":120.316309,"opendata_id":"KRTC-R20"},"99004001020":{"name":"都會公園","lat":22.72933,"lon":120.321029,"opendata_id":"KRTC-R21"},"99004001021":{"name":"青埔","lat":22.7443837,"lon":120.3176179,"opendata_id":"KRTC-R22"},"99004001022":{"name":"橋頭糖廠","lat":22.7534905,"lon":120.314455,"opendata_id":"KRTC-R22A"},"99004001023":{"name":"橋頭火車站","lat":22.76024117,"lon":120.3109701,"opendata_id":"KRTC-R23"},"99004001024":{"name":"南岡山","lat":22.780544,"lon":120.301774,"opendata_id":"KRTC-R24"},"99004002001":{"name":"西子灣","lat":22.6213249,"lon":120.2753799,"opendata_id":"KRTC-O1"},"99004002002":{"name":"鹽埕埔","lat":22.6235014,"lon":120.2837767,"opendata_id":"KRTC-O2"},"99004002003":{"name":"市議會","lat":22.628918678477728,"lon":120.29456533838399,"opendata_id":"KRTC-O4"},"99004002004":{"name":"美麗島","lat":22.6313887,"lon":120.3019131,"opendata_id":"KRTC-R10"},"99004002005":{"name":"信義國小","lat":22.6307325,"lon":120.311447,"opendata_id":"KRTC-O6"},"99004002006":{"name":"文化中心","lat":22.6302687,"lon":120.3177662,"opendata_id":"KRTC-O7"},"99004002007":{"name":"五塊厝","lat":22.629565,"lon":120.327695,"opendata_id":"KRTC-O8"},"99004002008":{"name":"技擊館","lat":22.627309,"lon":120.334587,"opendata_id":"KRTC-O9"},"99004002009":{"name":"衛武營","lat":22.6252094,"lon":120.3408883,"opendata_id":"KRTC-O10"},"99004002010":{"name":"鳳山西站","lat":22.6252748,"lon":120.3482696,"opendata_id":"KRTC-O11"},"99004002011":{"name":"鳳山","lat":22.625986,"lon":120.3558572,"opendata_id":"KRTC-O12"},"99004002012":{"name":"大東","lat":22.6252805,"lon":120.3631601,"opendata_id":"KRTC-O13"},"99004002013":{"name":"鳳山國中","lat":22.62491,"lon":120.372485,"opendata_id":"KRTC-O14"},"99004002014":{"name":"大寮","lat":22.6222201,"lon":120.3904302,"opendata_id":"KRTC-OT1"},"99004003001":{"name":"籬仔內","lat":22.604625,"lon":120.324651,"opendata_id":"KRTC-C1"},"99004003002":{"name":"凱旋瑞田","lat":22.599533,"lon":120.319799,"opendata_id":"KRTC-C2"},"99004003003":{"name":"前鎮之星","lat":22.595503,"lon":120.315368,"opendata_id":"KRTC-C3"},"99004003004":{"name":"凱旋中華","lat":22.593656,"lon":120.310517,"opendata_id":"KRTC-C4"},"99004003005":{"name":"夢時代","lat":22.594886,"lon":120.305004,"opendata_id":"KRTC-C5"},"99004003006":{"name":"經貿園區","lat":22.60096,"lon":120.30266,"opendata_id":"KRTC-C6"},"99004003007":{"name":"軟體園區","lat":22.605684,"lon":120.300832,"opendata_id":"KRTC-C7"},"99004003008":{"name":"高雄展覽館","lat":22.610133,"lon":120.298022,"opendata_id":"KRTC-C8"},"99004003009":{"name":"旅運中心","lat":22.611643,"lon":120.293438,"opendata_id":"KRTC-C9"},"99004003010":{"name":"光榮碼頭","lat":22.61685,"lon":120.293234,"opendata_id":"KRTC-C10"},"99004003011":{"name":"真愛碼頭","lat":22.619315,"lon":120.289466,"opendata_id":"KRTC-C11"},"99004003012":{"name":"駁二大義","lat":22.618562,"lon":120.284204,"opendata_id":"KRTC-C12"},"99004003013":{"name":"駁二蓬萊","lat":22.6205,"lon":120.279923,"opendata_id":"KRTC-C13"},"99004003014":{"name":"哈瑪星","lat":22.621617,"lon":120.275849,"opendata_id":"KRTC-C14"},"99004003015":{"name":"壽山公園","lat":22.626541,"lon":120.278601,"opendata_id":"KRTC-C15"},"99004003016":{"name":"文武聖殿","lat":22.62959,"lon":120.2807,"opendata_id":"KRTC-C16"},"99004003017":{"name":"鼓山區公所","lat":22.6359,"lon":120.2826,"opendata_id":"KRTC-C17"},"99004003018":{"name":"鼓山","lat":22.64202,"lon":120.2811,"opendata_id":"KRTC-C18"},"99004003019":{"name":"馬卡道","lat":22.64704,"lon":120.28143,"opendata_id":"KRTC-C19"},"99004003020":{"name":"臺鐵美術館","lat":22.65198,"lon":120.28156,"opendata_id":"KRTC-C20"},"99004003021":{"name":"內惟藝術中心","lat":22.65498,"lon":120.28285,"opendata_id":"KRTC-C21A"},"99004003022":{"name":"美術館","lat":22.65497,"lon":120.28727,"opendata_id":"KRTC-C21"},"99004003023":{"name":"聯合醫院","lat":22.65479,"lon":120.29108,"opendata_id":"KRTC-C22"},"99004003024":{"name":"龍華國小","lat":22.65444,"lon":120.29511,"opendata_id":"KRTC-C23"},"99004003025":{"name":"愛河之心","lat":22.65618,"lon":120.30325,"opendata_id":"KRTC-C24"},"99004003026":{"name":"新上國小","lat":22.65663,"lon":120.30881,"opendata_id":"KRTC-C25"},"99004003027":{"name":"大順民族","lat":22.65548,"lon":120.31542,"opendata_id":"KRTC-C26"},"99004003028":{"name":"灣仔內","lat":22.65354,"lon":120.31888,"opendata_id":"KRTC-C27"},"99004003029":{"name":"高雄高工","lat":22.64979,"lon":120.32416,"opendata_id":"KRTC-C28"},"99004003030":{"name":"樹德家商","lat":22.64381,"lon":120.32633,"opendata_id":"KRTC-C29"},"99004003031":{"name":"科工館","lat":22.63691,"lon":120.32715,"opendata_id":"KRTC-C30"},"99004003032":{"name":"聖工醫院","lat":22.6328,"lon":120.32562,"opendata_id":"KRTC-C31"},"99004003033":{"name":"凱旋公園","lat":22.62945,"lon":120.3228,"opendata_id":"KRTC-C32"},"99004003034":{"name":"衛生局","lat":22.6252,"lon":120.3237,"opendata_id":"KRTC-C33"},"99004003035":{"name":"五權國小","lat":22.62121,"lon":120.3252,"opendata_id":"KRTC-C34"},"99004003036":{"name":"凱旋武昌","lat":22.61693,"lon":120.3269,"opendata_id":"KRTC-C35"},"99004003037":{"name":"凱旋二聖","lat":22.61253,"lon":120.3272,"opendata_id":"KRTC-C36"},"99004003038":{"name":"輕軌機廠","lat":22.6085,"lon":120.3261,"opendata_id":"KRTC-C37"}}')
    }, b0c5: function (t, e, n) {
    }, b2dc: function (t) {
        t.exports = JSON.parse('[{"StationUID":"KRTC-R3","StationName":"捷運小港站","StationPosition":{"PositionLat":22.564822,"PositionLon":120.35384}},{"StationUID":"KRTC-R4","StationName":"捷運高雄國際機場站","StationPosition":{"PositionLat":22.570199,"PositionLon":120.342125}},{"StationUID":"KRTC-R4A","StationName":"捷運草衙站","StationPosition":{"PositionLat":22.580363,"PositionLon":120.328443}},{"StationUID":"KRTC-R5","StationName":"捷運前鎮高中站","StationPosition":{"PositionLat":22.588356,"PositionLon":120.319551}},{"StationUID":"KRTC-R6","StationName":"捷運凱旋站","StationPosition":{"PositionLat":22.596856,"PositionLon":120.315142}},{"StationUID":"KRTC-R7","StationName":"捷運獅甲站","StationPosition":{"PositionLat":22.60587,"PositionLon":120.308189}},{"StationUID":"KRTC-R8","StationName":"捷運三多商圈站","StationPosition":{"PositionLat":22.614011,"PositionLon":120.304499}},{"StationUID":"KRTC-R9","StationName":"捷運中央公園站","StationPosition":{"PositionLat":22.624628,"PositionLon":120.301151}},{"StationUID":"KRTC-R10","StationName":"捷運美麗島站","StationPosition":{"PositionLat":22.631387,"PositionLon":120.301957}},{"StationUID":"KRTC-R11","StationName":"捷運高雄車站","StationPosition":{"PositionLat":22.639769,"PositionLon":120.302664}},{"StationUID":"KRTC-R12","StationName":"捷運後驛站","StationPosition":{"PositionLat":22.648314,"PositionLon":120.303361}},{"StationUID":"KRTC-R13","StationName":"捷運凹子底站","StationPosition":{"PositionLat":22.657126,"PositionLon":120.303104}},{"StationUID":"KRTC-R14","StationName":"捷運巨蛋站","StationPosition":{"PositionLat":22.666135,"PositionLon":120.303308}},{"StationUID":"KRTC-R15","StationName":"捷運生態園區站","StationPosition":{"PositionLat":22.676738,"PositionLon":120.306618}},{"StationUID":"KRTC-R16","StationName":"捷運左營站","StationPosition":{"PositionLat":22.688073,"PositionLon":120.309219}},{"StationUID":"KRTC-R17","StationName":"捷運世運站","StationPosition":{"PositionLat":22.701622,"PositionLon":120.302526}},{"StationUID":"KRTC-R18","StationName":"捷運油廠國小站","StationPosition":{"PositionLat":22.708479,"PositionLon":120.302325}},{"StationUID":"KRTC-R19","StationName":"捷運楠梓加工區站","StationPosition":{"PositionLat":22.718671,"PositionLon":120.307133}},{"StationUID":"KRTC-R20","StationName":"捷運後勁站","StationPosition":{"PositionLat":22.7223,"PositionLon":120.316236}},{"StationUID":"KRTC-R21","StationName":"捷運都會公園站","StationPosition":{"PositionLat":22.729403,"PositionLon":120.320978}},{"StationUID":"KRTC-R22","StationName":"捷運青埔站","StationPosition":{"PositionLat":22.744399,"PositionLon":120.317679}},{"StationUID":"KRTC-R22A","StationName":"捷運橋頭糖廠站","StationPosition":{"PositionLat":22.753398,"PositionLon":120.314466}},{"StationUID":"KRTC-R23","StationName":"捷運橋頭火車站","StationPosition":{"PositionLat":22.760452,"PositionLon":120.310936}},{"StationUID":"KRTC-R24","StationName":"捷運南岡山站","StationPosition":{"PositionLat":22.780544,"PositionLon":120.301774}},{"StationUID":"KRTC-O1","StationName":"捷運西子灣站","StationPosition":{"PositionLat":22.621544,"PositionLon":120.274541}},{"StationUID":"KRTC-O2","StationName":"捷運鹽埕埔站","StationPosition":{"PositionLat":22.623538,"PositionLon":120.283728}},{"StationUID":"KRTC-O4","StationName":"捷運市議會站","StationPosition":{"PositionLat":22.629002,"PositionLon":120.294886}},{"StationUID":"KRTC-O6","StationName":"捷運信義國小站","StationPosition":{"PositionLat":22.630745,"PositionLon":120.311622}},{"StationUID":"KRTC-O7","StationName":"捷運文化中心站","StationPosition":{"PositionLat":22.630292,"PositionLon":120.317599}},{"StationUID":"KRTC-O8","StationName":"捷運五塊厝站","StationPosition":{"PositionLat":22.629331,"PositionLon":120.328381}},{"StationUID":"KRTC-O9","StationName":"捷運技擊館站","StationPosition":{"PositionLat":22.627291,"PositionLon":120.334523}},{"StationUID":"KRTC-O10","StationName":"捷運衛武營站","StationPosition":{"PositionLat":22.625162,"PositionLon":120.34095}},{"StationUID":"KRTC-O11","StationName":"捷運鳳山西站","StationPosition":{"PositionLat":22.625331,"PositionLon":120.348267}},{"StationUID":"KRTC-O12","StationName":"捷運鳳山站","StationPosition":{"PositionLat":22.625994,"PositionLon":120.355262}},{"StationUID":"KRTC-O13","StationName":"捷運大東站","StationPosition":{"PositionLat":22.625197,"PositionLon":120.363384}},{"StationUID":"KRTC-O14","StationName":"捷運鳳山國中站","StationPosition":{"PositionLat":22.624915,"PositionLon":120.372477}},{"StationUID":"KRTC-OT1","StationName":"捷運大寮站","StationPosition":{"PositionLat":22.622423,"PositionLon":120.389773}}]')
    }, b525: function (t, e, n) {
    }, b54f: function (t, e, n) {
    }, b87d: function (t, e, n) {
    }, bc55: function (t) {
        t.exports = JSON.parse('{"5048000000":{"name":"國立臺北商業大學","lat":25.0418903,"lon":121.5256203},"5048001000":{"name":"臺北市立商業專科學校","lat":25.0418903,"lon":121.5256203},"5048002000":{"name":"國立臺北商業專科學校","lat":25.042046,"lon":121.525468},"5048003000":{"name":"國立臺北商業技術學院","lat":25.0418903,"lon":121.5256203},"5048004000":{"name":"國立臺北商業大學","lat":25.0418903,"lon":121.5256203},"5050000000":{"name":"臺北市立教育大學","lat":25.035423,"lon":121.513702},"5050001000":{"name":"省立臺北女子師範專科學校","lat":25.0355926,"lon":121.5140027},"5050002000":{"name":"臺北市立女子師範專科學校","lat":25.0355926,"lon":121.5140027},"5050003000":{"name":"臺北市立師範專科學校","lat":25.0355926,"lon":121.5140027},"5050004000":{"name":"臺北市立師範學院","lat":25.035423,"lon":121.513702},"5050005000":{"name":"臺北市立教育大學","lat":25.035423,"lon":121.513702},"5178000000":{"name":"臺北市立大學","lat":25.0355926,"lon":121.5140027},"5178001000":{"name":"臺北市立大學","lat":25.0355926,"lon":121.5140027},"5073000000":{"name":"私立實踐大學","lat":25.083982,"lon":121.5459518},"5073001000":{"name":"私立實踐家政專校","lat":25.083982,"lon":121.5459518},"5073002000":{"name":"私立實踐家政經濟專校","lat":25.083982,"lon":121.5459518},"5073003000":{"name":"私立實踐設計管理學院","lat":25.084012,"lon":121.54643},"5073004000":{"name":"私立實踐大學","lat":25.083982,"lon":121.5459518},"5078000000":{"name":"私立大同大學","lat":25.0671544,"lon":121.521804},"5078001000":{"name":"私立大同工業專校","lat":25.066043,"lon":121.5215221},"5078002000":{"name":"私立大同工學院","lat":25.0671544,"lon":121.521804},"5078003000":{"name":"私立大同大學","lat":25.0671544,"lon":121.521804},"5051000000":{"name":"臺北市立體育學院","lat":25.1159064,"lon":121.5361787},"5051001000":{"name":"臺北體專","lat":25.051306,"lon":121.552083},"5051002000":{"name":"臺北市立體育學院","lat":25.1159064,"lon":121.5361787},"5003000000":{"name":"國立臺灣大學","lat":25.0173405,"lon":121.5397518},"5003001000":{"name":"國立臺灣大學","lat":25.0173405,"lon":121.5397518},"5004000000":{"name":"國立臺灣師範大學","lat":25.0261899,"lon":121.5275476},"5004001000":{"name":"省立師範學院","lat":25.0261899,"lon":121.5275476},"5004002000":{"name":"省立師範大學","lat":25.0261899,"lon":121.5275476},"5004003000":{"name":"國立臺灣師範大學","lat":25.0261899,"lon":121.5275476},"5020000000":{"name":"國立臺灣科技大學","lat":25.0132583,"lon":121.5405609},"5020001000":{"name":"國立臺灣工業技術學院","lat":25.0132583,"lon":121.5405609},"5020002000":{"name":"國立臺灣科技大學","lat":25.0132583,"lon":121.5405609},"5023000000":{"name":"國立臺北科技大學","lat":25.0420718,"lon":121.5354746},"5023001000":{"name":"省立臺北工業專科學校","lat":25.0420718,"lon":121.5354746},"5023002000":{"name":"國立臺北工業專科學校","lat":25.0420718,"lon":121.5354746},"5023003000":{"name":"國立臺北技術學院","lat":25.0420718,"lon":121.5354746},"5023004000":{"name":"國立臺北科技大學","lat":25.0420718,"lon":121.5354746},"5038000000":{"name":"國立臺北教育大學","lat":25.023387,"lon":121.5453446},"5038001000":{"name":"臺灣省立臺北師範專科學校","lat":25.023387,"lon":121.5453446},"5038002000":{"name":"臺灣省立師範學院","lat":25.0261899,"lon":121.5275476},"5038003000":{"name":"國立臺北師範學院","lat":25.023387,"lon":121.5453446},"5038004000":{"name":"國立臺北教育大學","lat":25.023387,"lon":121.5453446},"5084000000":{"name":"私立臺北醫學大學","lat":25.0253584,"lon":121.5616235},"5084001000":{"name":"私立臺北醫學院","lat":25.0253584,"lon":121.5616235},"5084002000":{"name":"私立臺北醫學大學","lat":25.0253584,"lon":121.5616235},"5176000000":{"name":"基督教台灣浸會神學院","lat":25.023742,"lon":121.566763},"5176001000":{"name":"基督教台灣浸會神學院","lat":25.023742,"lon":121.566763},"5059000000":{"name":"私立東吳大學","lat":25.0950243,"lon":121.5460024},"5059001000":{"name":"私立東吳大學","lat":25.0950243,"lon":121.5460024},"5062000000":{"name":"私立中國文化大學","lat":25.1362803,"lon":121.5394591},"5062001000":{"name":"私立中國文化學院","lat":25.1362803,"lon":121.5394591},"5062002000":{"name":"私立中國文化大學","lat":25.1362803,"lon":121.5394591},"5072000000":{"name":"私立銘傳大學","lat":25.0890026,"lon":121.5228862},"5072001000":{"name":"私立銘傳女子商專","lat":25.0890026,"lon":121.5228862},"5072002000":{"name":"私立銘傳管理學院","lat":25.0890026,"lon":121.5228862},"5072003000":{"name":"私立銘傳大學","lat":25.0890026,"lon":121.5228862},"5151000000":{"name":"台北海洋科技大學","lat":25.1087585,"lon":121.471524},"5151001000":{"name":"私立中國海事專科學校","lat":25.1087585,"lon":121.471524},"5151002000":{"name":"私立中國海事商業專校","lat":25.1087585,"lon":121.471524},"5151003000":{"name":"中國海事商業專科學校附進修專校","lat":25.1921692,"lon":121.4267044},"5151004000":{"name":"臺北海洋技術學院","lat":25.1921692,"lon":121.4267044},"5014000000":{"name":"國立陽明大學","lat":25.123002,"lon":121.513702},"5014001000":{"name":"國立陽明醫學院","lat":25.123002,"lon":121.513702},"5014002000":{"name":"國立陽明大學","lat":25.123002,"lon":121.513702},"5026000000":{"name":"國立臺北藝術大學","lat":25.1325182,"lon":121.4696818},"5026001000":{"name":"國立藝術學院","lat":25.1325182,"lon":121.4696818},"5026002000":{"name":"國立臺北藝術大學","lat":25.1325182,"lon":121.4696818},"5037000000":{"name":"國立臺北護理健康大學","lat":25.1175924,"lon":121.5210676},"5037001000":{"name":"省立護理專科學校","lat":25.1175924,"lon":121.5210676},"5037002000":{"name":"國立臺北護理專科學校","lat":25.1175924,"lon":121.5210676},"5037003000":{"name":"國立臺北護理學院","lat":25.1175924,"lon":121.5210676},"5037004000":{"name":"國立臺北護理健康大學","lat":25.1175924,"lon":121.5210676},"5122000000":{"name":"臺北城市科技大學","lat":25.133617,"lon":121.468879},"5122001000":{"name":"私立光武工業專校","lat":25.133617,"lon":121.468879},"5122002000":{"name":"私立光武工商專校","lat":25.133617,"lon":121.468879},"5122003000":{"name":"私立光武技術學院","lat":25.133617,"lon":121.468879},"5122004000":{"name":"私立北台科學技術學院","lat":25.133617,"lon":121.468879},"5122005000":{"name":"北台灣科學技術學院","lat":25.133617,"lon":121.468879},"5122006000":{"name":"臺北城市科技大學","lat":25.133617,"lon":121.468879},"5154000000":{"name":"私立馬偕醫學院","lat":25.1222891,"lon":121.4644703},"5154001000":{"name":"私立馬偕護理專校","lat":25.1222891,"lon":121.4644703},"5154002000":{"name":"私立馬偕醫護管理專校","lat":25.1222891,"lon":121.4644703},"5170000000":{"name":"政治作戰學校","lat":25.1380863,"lon":121.4928649},"5170001000":{"name":"政治作戰學校","lat":25.1380863,"lon":121.4928649},"5052000000":{"name":"國立臺灣戲曲學院","lat":25.0819234,"lon":121.586525},"5052001000":{"name":"國立臺灣戲曲專科學校","lat":25.0819234,"lon":121.586525},"5052002000":{"name":"國立臺灣戲曲學院","lat":25.0819234,"lon":121.586525},"5120000000":{"name":"私立德明財經科技大學","lat":25.0865509,"lon":121.5654923},"5120001000":{"name":"私立德明行政管理專校","lat":25.0865509,"lon":121.5654923},"5120002000":{"name":"私立德明商業專校","lat":25.0865509,"lon":121.5654923},"5120003000":{"name":"私立德明技術學院","lat":25.0865509,"lon":121.5654923},"5120004000":{"name":"私立德明財經科技大學","lat":25.0865509,"lon":121.5654923},"5153000000":{"name":"私立康寧醫護暨管理專校","lat":25.0758234,"lon":121.6100509},"5153001000":{"name":"私立康寧護專","lat":25.0758234,"lon":121.6100509},"5153002000":{"name":"私立康寧醫護暨管理專校","lat":25.0758234,"lon":121.6100509},"5173000000":{"name":"國防醫學院","lat":25.0708927,"lon":121.5960386},"5173001000":{"name":"國防醫學院","lat":25.0708927,"lon":121.5960386},"5107000000":{"name":"私立中華科技大學","lat":25.0336217,"lon":121.6099098},"5107001000":{"name":"私立中華工業專校","lat":25.0336217,"lon":121.6099098},"5107002000":{"name":"私立中華工商專校","lat":25.0336217,"lon":121.6099098},"5107003000":{"name":"私立中華技術學院","lat":25.0336217,"lon":121.6099098},"5107004000":{"name":"私立中華科技大學","lat":25.0336217,"lon":121.6099098},"5001000000":{"name":"國立政治大學","lat":24.9862328,"lon":121.5771294},"5001001000":{"name":"國立政治大學","lat":24.9862328,"lon":121.5771294},"5071000000":{"name":"私立世新大學","lat":24.988664,"lon":121.543984},"5071001000":{"name":"私立世界新聞專校","lat":24.988664,"lon":121.543984},"5071002000":{"name":"私立世界新聞傳播學院","lat":24.988664,"lon":121.543984},"5071003000":{"name":"私立世新大學","lat":24.988664,"lon":121.543984},"5121000000":{"name":"私立中國科技大學","lat":24.9991318,"lon":121.5554004},"5121001000":{"name":"私立中國市政專校","lat":24.9991318,"lon":121.5554004},"5121002000":{"name":"私立中國工商專校","lat":24.9991318,"lon":121.5554004},"5121003000":{"name":"私立中國技術學院","lat":24.9991318,"lon":121.5554004},"5121004000":{"name":"私立中國科技大學","lat":24.9991318,"lon":121.5554004},"5166000000":{"name":"臺灣警察專科學校","lat":24.9993369,"lon":121.5610354},"5166001000":{"name":"臺灣警察專科學校","lat":24.9993369,"lon":121.5610354},"5175000000":{"name":"法鼓文理學院","lat":25.245412,"lon":121.6169569},"5175001000":{"name":"法鼓佛教研修學院","lat":25.2398272,"lon":121.614898},"5175002000":{"name":"法鼓文理學院","lat":25.245412,"lon":121.6169569},"5027000000":{"name":"國立臺灣藝術大學","lat":25.0059488,"lon":121.4476306},"5027001000":{"name":"國立臺灣藝術專科學校","lat":25.0059488,"lon":121.4476306},"5027002000":{"name":"國立臺灣藝術學院","lat":25.0059488,"lon":121.4476306},"5027003000":{"name":"國立臺灣藝術大學","lat":25.0059488,"lon":121.4476306},"5123000000":{"name":"私立致理科技大學","lat":25.0210986,"lon":121.4651279},"5123001000":{"name":"私立私立致理商業專校","lat":25.0210986,"lon":121.4651279},"5123002000":{"name":"私立致理技術學院","lat":25.0210986,"lon":121.4651279},"5123003000":{"name":"私立致理科技大學","lat":25.0210986,"lon":121.4651279},"5125000000":{"name":"私立亞東技術學院","lat":24.9955728,"lon":121.4529488},"5125001000":{"name":"私立亞東工業專校","lat":24.9955728,"lon":121.4529488},"5125002000":{"name":"私立亞東技術學院","lat":24.9955728,"lon":121.4529488},"5126000000":{"name":"私立東南科技大學","lat":25.0034002,"lon":121.6044633},"5126001000":{"name":"私立東南工業專校","lat":25.0034002,"lon":121.6044633},"5126002000":{"name":"私立東南技術學院","lat":25.0034002,"lon":121.6044633},"5126003000":{"name":"東南技術學院附設進修學院","lat":25.0034002,"lon":121.6044633},"5126004000":{"name":"私立東南科技大學","lat":25.0034002,"lon":121.6044633},"5069000000":{"name":"私立華梵大學","lat":24.9808468,"lon":121.6910371},"5069001000":{"name":"私立華梵工學院","lat":24.9808468,"lon":121.6910371},"5069002000":{"name":"私立華梵人文科技學院","lat":24.9808468,"lon":121.6910371},"5069003000":{"name":"私立華梵大學","lat":24.9808468,"lon":121.6910371},"5106000000":{"name":"私立景文科技大學","lat":24.952911,"lon":121.509176},"5106001000":{"name":"私立景文工商專校","lat":24.952911,"lon":121.509176},"5106002000":{"name":"私立景文技術學院","lat":24.952911,"lon":121.509176},"5106003000":{"name":"私立景文科技大學","lat":24.952911,"lon":121.509176},"5158000000":{"name":"私立耕莘健康管理專科學校","lat":24.9770572,"lon":121.5368906},"5158001000":{"name":"私立耕莘護理專科學校","lat":24.9770572,"lon":121.5368906},"5158002000":{"name":"私立耕莘健康管理專科學校","lat":24.9770572,"lon":121.5368906},"5150000000":{"name":"華夏科技大學","lat":24.982984,"lon":121.509353},"5150001000":{"name":"私立華夏工專","lat":24.9812421,"lon":121.5074181},"5150002000":{"name":"私立華夏技術學院","lat":24.9812421,"lon":121.5074181},"5150003000":{"name":"華夏技術學院附進修學院","lat":24.9813393,"lon":121.5074758},"5150004000":{"name":"華夏工商專科學校","lat":24.9812421,"lon":121.5074181},"5150005000":{"name":"華夏技術學院","lat":24.9812421,"lon":121.5074181},"5150006000":{"name":"華夏科技大學","lat":24.982984,"lon":121.509353},"5138000000":{"name":"宏國德霖科技大學","lat":24.972325,"lon":121.4557677},"5138001000":{"name":"私立四海工商專校","lat":24.972325,"lon":121.4557677},"5138002000":{"name":"私立德霖技術學院","lat":24.972325,"lon":121.4557677},"5015000000":{"name":"國立臺北大學","lat":24.9438411,"lon":121.370802},"5015001000":{"name":"省立行政專科學校","lat":24.9438411,"lon":121.370802},"5015002000":{"name":"省立法商學院","lat":24.9438411,"lon":121.370802},"5015003000":{"name":"省立中興大學法商學院","lat":24.9438411,"lon":121.370802},"5015004000":{"name":"國立中興大學法商學院","lat":24.9438411,"lon":121.370802},"5015005000":{"name":"國立臺北大學","lat":24.9438411,"lon":121.370802},"5058000000":{"name":"私立輔仁大學","lat":25.0336491,"lon":121.433255},"5058001000":{"name":"私立輔仁大學","lat":25.0336491,"lon":121.433255},"5097000000":{"name":"私立明志科技大學","lat":25.0410187,"lon":121.4222651},"5097001000":{"name":"私立明志工業專校","lat":25.0410187,"lon":121.4222651},"5097002000":{"name":"私立明志技術學院","lat":25.0410187,"lon":121.4222651},"5097003000":{"name":"私立明志科技大學","lat":25.0410187,"lon":121.4222651},"5142000000":{"name":"私立黎明技術學院","lat":25.0657734,"lon":121.4204431},"5142001000":{"name":"私立黎明工專","lat":25.0657734,"lon":121.4204431},"5142002000":{"name":"私立黎明技術學院","lat":25.0657734,"lon":121.4204431},"5124000000":{"name":"私立醒吾科技大學","lat":25.0816023,"lon":121.3955081},"5124001000":{"name":"私立醒吾商業專校","lat":25.0816023,"lon":121.3955081},"5124002000":{"name":"私立醒吾技術學院","lat":25.0816023,"lon":121.3955081},"5124003000":{"name":"私立醒吾科技大學","lat":25.0816023,"lon":121.3955081},"5055000000":{"name":"國立空中大學","lat":25.08711,"lon":121.4678281},"5055001000":{"name":"國立空中大學","lat":25.08711,"lon":121.4678281},"5061000000":{"name":"私立淡江大學","lat":25.1740706,"lon":121.4473008},"5061001000":{"name":"私立淡江英語專校","lat":25.1740706,"lon":121.4473008},"5061002000":{"name":"私立淡江大學","lat":25.1740706,"lon":121.4473008},"5077000000":{"name":"私立真理大學(淡水工商)","lat":25.1751773,"lon":121.4344775},"5077001000":{"name":"私立淡水工商管理專校","lat":25.1751773,"lon":121.4344775},"5077002000":{"name":"私立淡水工商管理學院","lat":25.1751773,"lon":121.4344775},"5077003000":{"name":"私立真理大學","lat":25.1751773,"lon":121.4344775},"5112000000":{"name":"私立聖約翰科技大學(新埔)","lat":25.2273378,"lon":121.4510391},"5112001000":{"name":"私立新埔工業專校","lat":25.2273378,"lon":121.4510391},"5112002000":{"name":"私立新埔工商專校","lat":25.2278938,"lon":121.4516482},"5112003000":{"name":"私立新埔技術學院","lat":25.2273378,"lon":121.4510391},"5112004000":{"name":"私立聖約翰技術學院","lat":25.2273378,"lon":121.4510391},"5112005000":{"name":"私立聖約翰科技大學","lat":25.2273378,"lon":121.4510391},"5154003000":{"name":"私立馬偕醫學院","lat":25.254377,"lon":121.4950804},"5029001000":{"name":"國立宜蘭農工專科學校","lat":24.7462462,"lon":121.7477007},"5029002000":{"name":"國立宜蘭技術學院","lat":24.7462462,"lon":121.7477007},"5029003000":{"name":"國立宜蘭大學","lat":24.7462462,"lon":121.7477007},"5141000000":{"name":"私立蘭陽技術學院(復興)","lat":24.864987,"lon":121.817719},"5141001000":{"name":"私立復興工專","lat":24.864987,"lon":121.817719},"5141002000":{"name":"私立復興工商專校","lat":24.864987,"lon":121.817719},"5141003000":{"name":"私立蘭陽技術學院","lat":24.864987,"lon":121.817719},"5134000000":{"name":"私立佛光大學","lat":24.8164113,"lon":121.7236181},"5134001000":{"name":"私立佛光人文社會學院","lat":24.8164113,"lon":121.7236181},"5134002000":{"name":"私立佛光大學","lat":24.8164113,"lon":121.7236181},"5163000000":{"name":"私立聖母護理專科學校","lat":24.6650043,"lon":121.7034259},"5163001000":{"name":"私立聖母護理專科學校","lat":24.6650043,"lon":121.7034259},"5146000000":{"name":"崇右影藝科技大學","lat":25.1318797,"lon":121.7540071},"5146001000":{"name":"私立崇右企業管理專校","lat":25.1318797,"lon":121.7540071},"5146002000":{"name":"私立崇右技術學院","lat":25.1318797,"lon":121.7540071},"5146003000":{"name":"私立崇右技術學院附設進修學院","lat":25.1318797,"lon":121.7540071},"5010000000":{"name":"國立臺灣海洋大學","lat":25.1505447,"lon":121.7757756},"5010001000":{"name":"省立海事專科學校","lat":25.147706,"lon":121.771736},"5010002000":{"name":"省立海洋學院","lat":25.1505447,"lon":121.7757756},"5010003000":{"name":"國立臺灣海洋學院","lat":25.1505447,"lon":121.7757756},"5010004000":{"name":"國立臺灣海洋大學","lat":25.1505447,"lon":121.7757756},"5144000000":{"name":"經國管理暨健康學院","lat":25.1500306,"lon":121.7277801},"5144001000":{"name":"私立德育護理專科學校","lat":25.1500306,"lon":121.7277801},"5144002000":{"name":"私立德育醫護管理專科學校","lat":25.1500306,"lon":121.7277801},"5144003000":{"name":"私立德育技術學院","lat":25.1500306,"lon":121.7277801},"5144004000":{"name":"私立經國管理暨健康學院","lat":25.1500306,"lon":121.7277801},"5144005000":{"name":"經國管理暨健康學院附設進修學院","lat":25.1500306,"lon":121.7277801},"5144006000":{"name":"經國管理暨健康學院","lat":25.1500306,"lon":121.7277801},"5008000000":{"name":"國立中央大學","lat":24.9678305,"lon":121.1949833},"5008001000":{"name":"國立中央大學","lat":24.9678305,"lon":121.1949833},"5060000000":{"name":"私立中原大學","lat":24.9575771,"lon":121.2410252},"5060001000":{"name":"私立中原理工學院","lat":24.9575771,"lon":121.2410252},"5060002000":{"name":"私立中原大學","lat":24.9575771,"lon":121.2410252},"5066000000":{"name":"私立元智大學","lat":24.9701632,"lon":121.2674614},"5066001000":{"name":"私立元智工學院","lat":24.9701632,"lon":121.2674614},"5066002000":{"name":"私立元智大學","lat":24.9701632,"lon":121.2674614},"5092000000":{"name":"健行科技大學","lat":24.9471936,"lon":121.2291201},"5092001000":{"name":"私立健行工業專校","lat":24.9471936,"lon":121.2291201},"5092002000":{"name":"私立健行工商專校","lat":24.9471936,"lon":121.2291201},"5092003000":{"name":"私立健行技術學院","lat":24.9471936,"lon":121.2291201},"5092004000":{"name":"私立清雲技術學院","lat":24.9471936,"lon":121.2291201},"5092005000":{"name":"私立清雲科技大學","lat":24.9471936,"lon":121.2291201},"5092006000":{"name":"健行科技大學","lat":24.9471936,"lon":121.2291201},"5094000000":{"name":"私立萬能科技大學","lat":24.9902321,"lon":121.2321395},"5094001000":{"name":"私立萬能工業技藝專校","lat":24.9902321,"lon":121.2321395},"5094002000":{"name":"私立萬能工業專校","lat":24.9902321,"lon":121.2321395},"5094003000":{"name":"私立萬能技術學院","lat":24.9902321,"lon":121.2321395},"5094004000":{"name":"私立萬能科技大學","lat":24.9902321,"lon":121.2321395},"5127000000":{"name":"南亞技術學院","lat":24.9369569,"lon":121.2516879},"5127001000":{"name":"私立南亞工業技藝專校","lat":24.9369569,"lon":121.2516879},"5127002000":{"name":"私立南亞工業專校","lat":24.9369569,"lon":121.2516879},"5127003000":{"name":"私立南亞工商專校","lat":24.9369569,"lon":121.2516879},"5127004000":{"name":"私立南亞技術學院","lat":24.9369569,"lon":121.2516879},"5127005000":{"name":"桃園創新技術學院","lat":24.9369569,"lon":121.2516879},"5164000000":{"name":"新生醫護管理專科學校","lat":24.8315598,"lon":121.2102087},"5164001000":{"name":"新生醫護管理專科學校","lat":24.8315598,"lon":121.2102087},"5172000000":{"name":"國防大學","lat":24.875452,"lon":121.238647},"5172001000":{"name":"三軍大學","lat":24.9347793,"lon":121.3030591},"5172002000":{"name":"中正理工學院","lat":24.878564,"lon":121.266463},"5172003000":{"name":"國防管理學院","lat":24.9347793,"lon":121.3030591},"5172004000":{"name":"國防大學","lat":24.875452,"lon":121.238647},"5035000000":{"name":"國立體育大學","lat":25.0313551,"lon":121.3878128},"5035001000":{"name":"國立體育學院","lat":25.0313551,"lon":121.3878128},"5035002000":{"name":"國立體育大學","lat":25.0313551,"lon":121.3878128},"5065000000":{"name":"私立長庚大學","lat":25.0337925,"lon":121.3898682},"5065001000":{"name":"私立長庚醫學院","lat":25.0337925,"lon":121.3898682},"5065002000":{"name":"私立長庚大學","lat":25.0337925,"lon":121.3898682},"5086000000":{"name":"私立龍華科技大學","lat":25.0175193,"lon":121.4028529},"5086001000":{"name":"私立龍華技藝專校","lat":25.0175193,"lon":121.4028529},"5086002000":{"name":"私立龍華工業專校","lat":25.0175193,"lon":121.4028529},"5086003000":{"name":"私立龍華工商專校","lat":25.0175193,"lon":121.4028529},"5086004000":{"name":"私立龍華技術學院","lat":25.0175193,"lon":121.4028529},"5086005000":{"name":"私立龍華科技大學","lat":25.0175193,"lon":121.4028529},"5145000000":{"name":"長庚科技大學","lat":25.0309548,"lon":121.3901949},"5145001000":{"name":"私立長庚護理專校","lat":25.0309866,"lon":121.3901211},"5145002000":{"name":"私立長庚技術學院","lat":25.0309866,"lon":121.3901211},"5145003000":{"name":"私立長庚科技大學","lat":25.0309866,"lon":121.3901211},"5145004000":{"name":"長庚科技大學","lat":25.0309548,"lon":121.3901949},"5165000000":{"name":"中央警察大學","lat":25.045668,"lon":121.35242},"5165001000":{"name":"中央警官學校","lat":25.045668,"lon":121.35242},"5165002000":{"name":"中央警察大學","lat":25.045668,"lon":121.35242},"5098000000":{"name":"開南大學","lat":25.010728,"lon":121.270332},"5098001000":{"name":"開南管理學院","lat":25.0112224,"lon":121.2698598},"5098002000":{"name":"開南大學","lat":25.010728,"lon":121.270332},"5002000000":{"name":"國立清華大學","lat":24.7961217,"lon":120.9966699},"5002001000":{"name":"國立清華大學","lat":24.7961217,"lon":120.9966699},"5007000000":{"name":"國立交通大學","lat":24.7868862,"lon":120.9974969},"5007001000":{"name":"國立交通大學","lat":24.7868862,"lon":120.9974969},"5039000000":{"name":"國立清華大學南大校區","lat":24.794295,"lon":120.9653557},"5039001000":{"name":"臺灣省立新竹師範專科學校","lat":24.794295,"lon":120.9653557},"5039002000":{"name":"臺灣省立新竹師範學院","lat":24.794295,"lon":120.9653557},"5039003000":{"name":"國立新竹師範學院","lat":24.794295,"lon":120.9653557},"5039004000":{"name":"國立新竹教育大學","lat":24.794295,"lon":120.9653557},"5039005000":{"name":"國立清華大學南大校區","lat":24.794295,"lon":120.9653557},"5067000000":{"name":"私立中華大學","lat":24.7598187,"lon":120.9529895},"5067001000":{"name":"私立中華工學院","lat":24.785993,"lon":120.9973034},"5067002000":{"name":"私立中華大學","lat":24.7598187,"lon":120.9529895},"5095000000":{"name":"私立玄奘大學","lat":24.7743891,"lon":120.9434509},"5095001000":{"name":"私立玄奘人文社會學院","lat":24.7743891,"lon":120.9434509},"5095002000":{"name":"私立玄奘大學","lat":24.7743891,"lon":120.9434509},"5116000000":{"name":"元培醫事科技大學","lat":24.776337,"lon":120.9428296},"5116001000":{"name":"私立元培醫專","lat":24.776337,"lon":120.9428296},"5116002000":{"name":"私立元培科學技術學院","lat":24.776337,"lon":120.9428296},"5116003000":{"name":"私立元培科技大學","lat":24.776337,"lon":120.9428296},"5116004000":{"name":"元培醫事科技大學","lat":24.776337,"lon":120.9428296},"5088000000":{"name":"私立明新科技大學","lat":24.8641986,"lon":120.9906648},"5088001000":{"name":"私立明新工商專校","lat":24.8641986,"lon":120.9906648},"5088002000":{"name":"私立明新技術學院","lat":24.8641986,"lon":120.9906648},"5088003000":{"name":"私立明新科技大學","lat":24.8641986,"lon":120.9906648},"5102000000":{"name":"大華科技大學","lat":24.7775247,"lon":121.0900718},"5102001000":{"name":"私立大華農業專校","lat":24.7775247,"lon":121.0900718},"5102002000":{"name":"私立大華工業專校","lat":24.7775247,"lon":121.0900718},"5102003000":{"name":"私立大華工商專校","lat":24.7775247,"lon":121.0900718},"5102004000":{"name":"私立大華技術學院","lat":24.7775247,"lon":121.0900718},"5102005000":{"name":"大華科技大學","lat":24.7775247,"lon":121.0900718},"5148000000":{"name":"亞太創意技術學院","lat":24.682719,"lon":120.9703038},"5148001000":{"name":"私立親民工專","lat":24.682719,"lon":120.9703038},"5148002000":{"name":"私立親民技術學院","lat":24.682719,"lon":120.9703038},"5148003000":{"name":"親民技術學院附設進修學院","lat":24.682719,"lon":120.9703038},"5148004000":{"name":"亞太創意技術學院","lat":24.682719,"lon":120.9703038},"5155001000":{"name":"私立仁德醫護管理專校","lat":24.622188,"lon":120.780827},"5030000000":{"name":"國立聯合大學","lat":24.5458273,"lon":120.8123649},"5030001000":{"name":"私立聯合工專","lat":24.5458273,"lon":120.8123649},"5030002000":{"name":"國立聯合工專","lat":24.5458273,"lon":120.8123649},"5030003000":{"name":"國立聯合技術學院","lat":24.5458273,"lon":120.8123649},"5030004000":{"name":"國立聯合大學","lat":24.5458273,"lon":120.8123649},"5119000000":{"name":"育達科技大學","lat":24.6509745,"lon":120.8422629},"5119001000":{"name":"私立育達商業技術學院","lat":24.6509745,"lon":120.8422629},"5119002000":{"name":"私立育達商業科技大學","lat":24.6509745,"lon":120.8422629},"5119003000":{"name":"育達科技大學","lat":24.6509745,"lon":120.8422629},"5006000000":{"name":"國立中興大學","lat":24.123552,"lon":120.675326},"5006001000":{"name":"省立農學院","lat":24.123552,"lon":120.675326},"5006002000":{"name":"省立中興大學","lat":24.123552,"lon":120.675326},"5006003000":{"name":"國立中興大學","lat":24.123552,"lon":120.675326},"5085000000":{"name":"私立中山醫學大學","lat":24.1217043,"lon":120.651197},"5085001000":{"name":"私立中山牙醫專校","lat":24.1217043,"lon":120.651197},"5085002000":{"name":"私立中山醫學專校","lat":24.1217043,"lon":120.651197},"5085003000":{"name":"私立中山醫學院","lat":24.1217043,"lon":120.651197},"5085004000":{"name":"私立中山醫學大學","lat":24.1217043,"lon":120.651197},"5040000000":{"name":"國立臺中教育大學","lat":24.1426434,"lon":120.6721416},"5040001000":{"name":"臺灣省立臺中師範專科學校","lat":24.1426434,"lon":120.6721416},"5040002000":{"name":"臺灣省立臺中師範學院","lat":24.1426434,"lon":120.6721416},"5040003000":{"name":"國立臺中師範學院","lat":24.1426434,"lon":120.6721416},"5040004000":{"name":"國立臺中教育大學","lat":24.1426434,"lon":120.6721416},"5053000000":{"name":"國立臺中護理專科學校","lat":24.1390849,"lon":120.67574},"5053001000":{"name":"國立臺中護理專科學校","lat":24.1390849,"lon":120.67574},"5036000000":{"name":"國立臺灣體育運動大學","lat":24.1486798,"lon":120.6876707},"5036001000":{"name":"省立體育專科學校","lat":24.1486798,"lon":120.6876707},"5036002000":{"name":"國立臺灣體育學院","lat":24.1486798,"lon":120.6876707},"5036003000":{"name":"國立臺灣體育運動大學","lat":24.1486798,"lon":120.6876707},"5044000000":{"name":"國立臺中科技大學","lat":24.1493401,"lon":120.6840144},"5044001000":{"name":"省立臺中商業專科學校","lat":24.1497433,"lon":120.6837712},"5044002000":{"name":"國立臺中商業專科學校","lat":24.1497433,"lon":120.6837712},"5044003000":{"name":"國立臺中技術學院","lat":24.1497433,"lon":120.6837712},"5044004000":{"name":"國立臺中科技大學","lat":24.1493401,"lon":120.6840144},"5091000000":{"name":"私立中國醫藥大學","lat":24.1560757,"lon":120.6803671},"5091001000":{"name":"私立中國醫藥學院","lat":24.1560757,"lon":120.6803671},"5091002000":{"name":"私立中國醫藥大學","lat":24.1560757,"lon":120.6803671},"5104000000":{"name":"中臺科技大學","lat":24.1746073,"lon":120.7350665},"5104001000":{"name":"私立中臺醫事技術專科學校","lat":24.173734,"lon":120.7351321},"5104002000":{"name":"私立中臺醫護技術學院","lat":24.173734,"lon":120.7351321},"5104003000":{"name":"中臺科技大學","lat":24.1746073,"lon":120.7350665},"5057000000":{"name":"私立東海大學","lat":24.1804426,"lon":120.5985321},"5057001000":{"name":"私立東海大學","lat":24.1804426,"lon":120.5985321},"5063000000":{"name":"私立逢甲大學","lat":24.1786547,"lon":120.6467411},"5063001000":{"name":"私立逢甲工商學院","lat":24.1786547,"lon":120.6467411},"5063002000":{"name":"私立逢甲大學","lat":24.1786547,"lon":120.6467411},"5128000000":{"name":"私立僑光科技大學","lat":24.1891508,"lon":120.6441215},"5128001000":{"name":"私立僑光商業專校","lat":24.1891508,"lon":120.6441215},"5128002000":{"name":"私立僑光技術學院","lat":24.1891508,"lon":120.6441215},"5128003000":{"name":"私立僑光科技大學","lat":24.1891508,"lon":120.6441215},"5108000000":{"name":"私立嶺東科技大學","lat":24.1378074,"lon":120.6096728},"5108001000":{"name":"私立嶺東會計專校","lat":24.1378074,"lon":120.6096728},"5108002000":{"name":"私立嶺東商業專校","lat":24.1378074,"lon":120.6096728},"5108003000":{"name":"私立嶺東技術學院","lat":24.1378074,"lon":120.6096728},"5108004000":{"name":"私立嶺東科技大學","lat":24.1378074,"lon":120.6096728},"5045000000":{"name":"國立勤益科技大學","lat":24.1436055,"lon":120.7317181},"5045001000":{"name":"私立勤益工業技藝專科學校","lat":24.1436055,"lon":120.7317181},"5045002000":{"name":"私立勤益工業專科學校","lat":24.1436055,"lon":120.7317181},"5045003000":{"name":"私立勤益工商專科學校","lat":24.1436055,"lon":120.7317181},"5045004000":{"name":"國立勤益工商專科學校","lat":24.1436055,"lon":120.7317181},"5045005000":{"name":"國立勤益科技大學","lat":24.1436055,"lon":120.7317181},"5045006000":{"name":"國立勤益技術學院","lat":24.1436055,"lon":120.7317181},"5133000000":{"name":"私立修平科技大學","lat":24.0953128,"lon":120.7138722},"5133001000":{"name":"私立樹德家政專校","lat":24.0953128,"lon":120.7138722},"5133002000":{"name":"私立樹德工業專校","lat":24.0953128,"lon":120.7138722},"5133003000":{"name":"私立樹德工商專校","lat":24.0953128,"lon":120.7138722},"5133004000":{"name":"私立修平技術學院","lat":24.0953128,"lon":120.7138722},"5133005000":{"name":"私立修平科技大學","lat":24.0953128,"lon":120.7138722},"5074000000":{"name":"私立朝陽科技大學","lat":24.0685714,"lon":120.7147579},"5074001000":{"name":"私立朝陽技術學院","lat":24.0685714,"lon":120.7147579},"5074002000":{"name":"私立朝陽科技大學","lat":24.0685714,"lon":120.7147579},"5137000000":{"name":"私立亞洲大學(臺中健管)","lat":24.046532,"lon":120.686421},"5137001000":{"name":"私立臺中健康暨管理學院","lat":24.046532,"lon":120.686421},"5137002000":{"name":"私立亞洲大學","lat":24.046532,"lon":120.686421},"5064000000":{"name":"私立靜宜大學","lat":24.2258027,"lon":120.5771913},"5064001000":{"name":"私立靜宜女子英語專校","lat":24.2258027,"lon":120.5771913},"5064002000":{"name":"私立靜宜女子文理學院","lat":24.2258027,"lon":120.5771913},"5064003000":{"name":"私立靜宜女子大學","lat":24.2258027,"lon":120.5771913},"5064004000":{"name":"私立靜宜大學","lat":24.2258027,"lon":120.5771913},"5090000000":{"name":"私立弘光科技大學","lat":24.230822,"lon":120.565298},"5090001000":{"name":"私立弘光護理專校","lat":24.2172822,"lon":120.5807518},"5090002000":{"name":"私立弘光醫事護專","lat":24.2172822,"lon":120.5807518},"5090003000":{"name":"私立弘光技術學院","lat":24.2172822,"lon":120.5807518},"5090004000":{"name":"私立弘光科技大學","lat":24.230822,"lon":120.565298},"5013000000":{"name":"國立彰化師範大學","lat":24.0812771,"lon":120.5587377},"5013001000":{"name":"省立教育學院","lat":24.0825516,"lon":120.5580626},"5013002000":{"name":"國立臺灣教育學院","lat":24.0812771,"lon":120.5587377},"5013003000":{"name":"國立彰化師範大學","lat":24.0812771,"lon":120.5587377},"5096000000":{"name":"私立建國科技大學","lat":24.0662822,"lon":120.549876},"5096001000":{"name":"私立建國商專","lat":24.0662822,"lon":120.549876},"5096002000":{"name":"私立建國工專","lat":24.0662822,"lon":120.549876},"5096003000":{"name":"私立建國工商專校","lat":24.0662822,"lon":120.549876},"5096004000":{"name":"私立建國技術學院","lat":24.0662822,"lon":120.549876},"5096005000":{"name":"私立建國科技大學","lat":24.0662822,"lon":120.549876},"5129000000":{"name":"私立中州科技大學","lat":23.9576199,"lon":120.6040587},"5129001000":{"name":"私立中州工商專校","lat":23.9576199,"lon":120.6040587},"5129002000":{"name":"私立中州工商專校","lat":23.9576199,"lon":120.6040587},"5129003000":{"name":"私立中州技術學院","lat":23.9576199,"lon":120.6040587},"5129004000":{"name":"私立中州科技大學","lat":23.9576199,"lon":120.6040587},"5068000000":{"name":"私立大葉大學","lat":23.999843,"lon":120.5956004},"5068001000":{"name":"私立大葉工學院","lat":23.999843,"lon":120.5956004},"5068002000":{"name":"私立大葉大學","lat":23.999843,"lon":120.5956004},"5136000000":{"name":"私立明道大學","lat":23.8681411,"lon":120.4949742},"5136001000":{"name":"私立明道管理學院","lat":23.8681411,"lon":120.4949742},"5136002000":{"name":"私立明道大學","lat":23.8681411,"lon":120.4949742},"5139000000":{"name":"私立南開科技大學","lat":23.9792111,"lon":120.6967226},"5139001000":{"name":"私立南開工業專校","lat":23.9792111,"lon":120.6967226},"5139002000":{"name":"私立南開工商專校","lat":23.9792111,"lon":120.6967226},"5139003000":{"name":"私立南開技術學院","lat":23.9792111,"lon":120.6967226},"5139004000":{"name":"南開技術學院附設進修學院","lat":23.9792111,"lon":120.6967226},"5139005000":{"name":"南開科技大學","lat":23.979171,"lon":120.69625},"5019000000":{"name":"國立暨南國際大學","lat":23.9511431,"lon":120.9306649},"5019001000":{"name":"國立暨南國際大學","lat":23.9511431,"lon":120.9306649},"5031000000":{"name":"國立虎尾科技大學","lat":23.7026129,"lon":120.4294895},"5031001000":{"name":"省立雲林工專","lat":23.7026129,"lon":120.4294895},"5031002000":{"name":"國立雲林工專","lat":23.7026129,"lon":120.4294895},"5031003000":{"name":"國立虎尾技術學院","lat":23.7026129,"lon":120.4294895},"5031004000":{"name":"國立虎尾科技大學","lat":23.7026129,"lon":120.4294895},"5021000000":{"name":"國立雲林科技大學","lat":23.6959835,"lon":120.5340648},"5021001000":{"name":"國立雲林技術學院","lat":23.6959835,"lon":120.5340648},"5021002000":{"name":"國立雲林科技大學","lat":23.6959835,"lon":120.5340648},"5130000000":{"name":"私立環球科技大學","lat":23.6798529,"lon":120.5531411},"5130001000":{"name":"私立環球商業專科學校","lat":23.6805906,"lon":120.5555291},"5130002000":{"name":"私立環球技術學院","lat":23.6798529,"lon":120.5531411},"5130003000":{"name":"私立環球科技大學","lat":23.6798529,"lon":120.5531411},"5016000000":{"name":"國立嘉義大學","lat":23.4681944,"lon":120.484174},"5016001000":{"name":"省立嘉義農業職業學校","lat":23.4824119,"lon":120.4624409},"5016002000":{"name":"省立嘉義農業專科學校","lat":23.4637468,"lon":120.4427052},"5016003000":{"name":"國立嘉義農業專科學校","lat":23.4637468,"lon":120.4427052},"5016004000":{"name":"國立嘉義技術學院","lat":23.4681944,"lon":120.484174},"5016005000":{"name":"省立嘉義師範專科學校","lat":23.4637468,"lon":120.4427052},"5016006000":{"name":"省立嘉義師範學院","lat":23.4637468,"lon":120.4427052},"5016007000":{"name":"國立嘉義師範學院","lat":23.4637468,"lon":120.4427052},"5016008000":{"name":"國立嘉義大學","lat":23.4681944,"lon":120.484174},"5147000000":{"name":"私立大同技術學院","lat":23.4693911,"lon":120.4641706},"5147001000":{"name":"私立大同商業專校","lat":23.4693911,"lon":120.4641706},"5147002000":{"name":"私立大同技術學院","lat":23.4693911,"lon":120.4641706},"5162000000":{"name":"私立崇仁護理專科學校","lat":23.478052,"lon":120.483115},"5162001000":{"name":"私立崇仁護理專科學校","lat":23.478052,"lon":120.483115},"5135000000":{"name":"私立稻江科技暨管理學院","lat":23.4488003,"lon":120.2897636},"5135001000":{"name":"私立稻江科技暨管理學院","lat":23.4488003,"lon":120.2897636},"5011000000":{"name":"國立中正大學","lat":23.5633761,"lon":120.4728831},"5011001000":{"name":"國立中正大學","lat":23.5633761,"lon":120.4728831},"5131000000":{"name":"私立吳鳳科技大學","lat":23.5360798,"lon":120.434112},"5131001000":{"name":"私立吳鳳商業專校","lat":23.5360798,"lon":120.434112},"5131002000":{"name":"私立吳鳳工業專校","lat":23.5360798,"lon":120.434112},"5131003000":{"name":"私立吳鳳工商專校","lat":23.5360798,"lon":120.434112},"5131004000":{"name":"私立吳鳳技術學院","lat":23.5360798,"lon":120.434112},"5131005000":{"name":"私立吳鳳科技大學","lat":23.5360798,"lon":120.434112},"5076000000":{"name":"私立南華大學","lat":23.5700796,"lon":120.4941991},"5076001000":{"name":"私立南華管理學院","lat":23.5700796,"lon":120.4941991},"5076002000":{"name":"私立南華大學","lat":23.5700796,"lon":120.4941991},"5034000000":{"name":"國立臺南大學","lat":22.9841139,"lon":120.2077999},"5034001000":{"name":"省立臺南師範專科學校","lat":22.9841139,"lon":120.2077999},"5034002000":{"name":"省立臺南師範學院","lat":22.9841139,"lon":120.2077999},"5034003000":{"name":"國立臺南師範學院","lat":22.9841139,"lon":120.2077999},"5034004000":{"name":"國立臺南大學","lat":22.9841139,"lon":120.2077999},"5005000000":{"name":"國立成功大學","lat":22.9988945,"lon":120.216945},"5005001000":{"name":"省立臺南工業專校","lat":22.9988945,"lon":120.216945},"5005002000":{"name":"省立工學院","lat":22.9988945,"lon":120.216945},"5005003000":{"name":"省立成功大學","lat":22.9988945,"lon":120.216945},"5005004000":{"name":"國立成功大學","lat":22.9988945,"lon":120.216945},"5054000000":{"name":"國立臺南護理專科學校","lat":22.9956656,"lon":120.207567},"5054001000":{"name":"國立臺南護理專科學校","lat":22.9956656,"lon":120.207567},"5100000000":{"name":"康寧大學","lat":23.0590248,"lon":120.1542518},"5100001000":{"name":"立德管理學院","lat":23.0590248,"lon":120.1542518},"5100002000":{"name":"立德大學","lat":23.0590248,"lon":120.1542518},"5100003000":{"name":"康寧大學","lat":23.0590248,"lon":120.1542518},"5101000000":{"name":"中信金融管理學院","lat":23.063856,"lon":120.161598},"5101001000":{"name":"興國管理學院","lat":23.0639485,"lon":120.1621807},"5101002000":{"name":"中信金融管理學院","lat":23.063856,"lon":120.161598},"5079000000":{"name":"南臺科技大學","lat":23.025072,"lon":120.225929},"5079001000":{"name":"私立南台工專","lat":23.0254548,"lon":120.2264886},"5079002000":{"name":"私立南台工商專校","lat":23.0254548,"lon":120.2264886},"5079003000":{"name":"私立南台技術學院","lat":23.0254548,"lon":120.2264886},"5079004000":{"name":"私立南台科技大學","lat":23.0254548,"lon":120.2264886},"5079005000":{"name":"南臺科技大學","lat":23.025072,"lon":120.225929},"5080000000":{"name":"私立崑山科技大學","lat":22.9977586,"lon":120.2530937},"5080001000":{"name":"私立崑山工業專校","lat":22.9977586,"lon":120.2530937},"5080002000":{"name":"私立崑山工商專校","lat":22.9977586,"lon":120.2530937},"5080003000":{"name":"私立崑山科技大學","lat":22.9977586,"lon":120.2530937},"5080004000":{"name":"私立崑山技術學院","lat":22.9977586,"lon":120.2530937},"5103000000":{"name":"台南應用科技大學","lat":23.0393401,"lon":120.2391669},"5103001000":{"name":"私立台南家政專校","lat":23.0393401,"lon":120.2391669},"5103002000":{"name":"私立台南女子技術學院","lat":23.0393401,"lon":120.2391669},"5103003000":{"name":"台南女子技術學院","lat":23.0393401,"lon":120.2391669},"5103004000":{"name":"台南科技大學","lat":23.0393401,"lon":120.2391669},"5103005000":{"name":"台南應用科技大學","lat":23.0393401,"lon":120.2391669},"5089000000":{"name":"私立長榮大學","lat":22.905029,"lon":120.27265},"5089001000":{"name":"私立長榮管理學院","lat":22.9053916,"lon":120.2727629},"5089002000":{"name":"私立長榮大學","lat":22.905029,"lon":120.27265},"5081000000":{"name":"嘉南藥理大學","lat":22.9209971,"lon":120.2253459},"5081001000":{"name":"私立嘉南藥學專校","lat":22.9209971,"lon":120.2253459},"5081002000":{"name":"私立嘉南藥理學院","lat":22.9195715,"lon":120.2283076},"5081003000":{"name":"私立嘉南藥理科技大學","lat":22.9209971,"lon":120.2253459},"5081004000":{"name":"嘉南藥理科技大學附設進修學院","lat":22.9209971,"lon":120.2253459},"5081005000":{"name":"嘉南藥理科技大學","lat":22.9209971,"lon":120.2253459},"5081006000":{"name":"嘉南藥理大學","lat":22.9209971,"lon":120.2253459},"5117000000":{"name":"私立中華醫事科技大學","lat":22.9608918,"lon":120.2436327},"5117001000":{"name":"私立中華醫專技術專科學校","lat":22.9608918,"lon":120.2436327},"5117002000":{"name":"私立中華醫事學院","lat":22.9608918,"lon":120.2436327},"5117003000":{"name":"私立中華醫事科技大學","lat":22.9608918,"lon":120.2436327},"5033000000":{"name":"國立臺南藝術大學","lat":23.1860115,"lon":120.3743165},"5033001000":{"name":"國立臺南藝術學院","lat":23.1860115,"lon":120.3743165},"5033002000":{"name":"國立臺南藝術大學","lat":23.1860115,"lon":120.3743165},"5099000000":{"name":"台灣首府大學","lat":23.1930936,"lon":120.2683743},"5099001000":{"name":"致遠管理學院","lat":23.1950148,"lon":120.2656955},"5099002000":{"name":"台灣首府大學","lat":23.1930936,"lon":120.2683743},"5159000000":{"name":"私立敏惠醫護管理專校","lat":23.2799158,"lon":120.3287761},"5159001000":{"name":"私立敏惠醫護管理專校","lat":23.2799158,"lon":120.3287761},"5140000000":{"name":"南榮科技大學","lat":23.324842,"lon":120.274765},"5140001000":{"name":"私立南榮工業專校","lat":23.3240358,"lon":120.2743372},"5140002000":{"name":"私立南榮工商專校","lat":23.3250887,"lon":120.2758677},"5140003000":{"name":"私立南榮技術學院","lat":23.3240358,"lon":120.2743372},"5140004000":{"name":"南榮科技大學","lat":23.324842,"lon":120.274765},"5113000000":{"name":"遠東科技大學","lat":23.063667,"lon":120.294715},"5113001000":{"name":"私立遠東工業專科學校","lat":23.0646068,"lon":120.2943546},"5113002000":{"name":"私立遠東技術學院","lat":23.0646068,"lon":120.2943546},"5113003000":{"name":"遠東科技大學","lat":23.063667,"lon":120.294715},"5012000000":{"name":"國立高雄師範大學","lat":22.6258602,"lon":120.3207058},"5012001000":{"name":"省立高雄師範學院","lat":22.6258602,"lon":120.3207058},"5012002000":{"name":"國立高雄師範學院","lat":22.6236618,"lon":120.3210567},"5012003000":{"name":"國立高雄師範大學","lat":22.6258602,"lon":120.3207058},"5009000000":{"name":"國立中山大學","lat":22.6283384,"lon":120.2647299},"5009001000":{"name":"國立中山大學","lat":22.6283384,"lon":120.2647299},"5025000000":{"name":"國立高雄應用科技大學","lat":22.6499133,"lon":120.3283013},"5025001000":{"name":"省立高雄工業專科學校","lat":22.6503468,"lon":120.3264388},"5025002000":{"name":"高雄市立工業專科學校","lat":22.6503468,"lon":120.3264388},"5025003000":{"name":"國立高雄工商專科學校","lat":22.6499133,"lon":120.3283013},"5025004000":{"name":"國立高雄科學技術學院","lat":22.6499133,"lon":120.3283013},"5025005000":{"name":"國立高雄應用科技大學","lat":22.6499133,"lon":120.3283013},"5075000000":{"name":"私立高雄醫學大學","lat":22.64727,"lon":120.3107468},"5075001000":{"name":"私立高雄醫學院","lat":22.64727,"lon":120.3107468},"5075002000":{"name":"私立高雄醫學大學","lat":22.64727,"lon":120.3107468},"5109000000":{"name":"文藻外語大學","lat":22.6704065,"lon":120.3191351},"5109001000":{"name":"私立文藻女子外國語文專校","lat":22.6704065,"lon":120.3191351},"5109002000":{"name":"私立文藻外國語文專校","lat":22.6702207,"lon":120.3182568},"5109003000":{"name":"私立文藻外語學院","lat":22.6704065,"lon":120.3191351},"5109004000":{"name":"文藻外語大學","lat":22.6704065,"lon":120.3191351},"5161000000":{"name":"私立育英醫護管理專校","lat":22.6500691,"lon":120.3332807},"5161001000":{"name":"私立育英醫護管理專校","lat":22.6500691,"lon":120.3332807},"5017000000":{"name":"國立高雄大學","lat":22.7333814,"lon":120.2845572},"5017001000":{"name":"國立高雄大學","lat":22.7333814,"lon":120.2845572},"5032000000":{"name":"國立高雄海洋科技大學","lat":22.7247326,"lon":120.314603},"5032001000":{"name":"省立高雄海事專科學校","lat":22.7247326,"lon":120.314603},"5032002000":{"name":"高雄市立海事專科學校","lat":22.7247326,"lon":120.314603},"5032003000":{"name":"國立高雄海事專科學校","lat":22.7247326,"lon":120.314603},"5032004000":{"name":"國立高雄海洋技術學院","lat":22.7247326,"lon":120.314603},"5032005000":{"name":"國立高雄海洋科技大學","lat":22.7247326,"lon":120.314603},"5179000000":{"name":"國立高雄科技大學","lat":22.7247326,"lon":120.314603},"5046000000":{"name":"國立高雄餐旅大學","lat":22.5632539,"lon":120.3723822},"5046001000":{"name":"國立高雄餐旅專科學校","lat":22.5632539,"lon":120.3723822},"5046002000":{"name":"國立高雄餐旅學院","lat":22.5632539,"lon":120.3723822},"5046003000":{"name":"國立高雄餐旅大學","lat":22.5632539,"lon":120.3723822},"5056000000":{"name":"高雄市立空中大學","lat":22.5662543,"lon":120.3461152},"5056001000":{"name":"高雄市立空中大學","lat":22.5662543,"lon":120.3461152},"5168000000":{"name":"海軍軍官學校","lat":22.7057392,"lon":120.2905709},"5168001000":{"name":"海軍軍官學校","lat":22.7057392,"lon":120.2905709},"5167000000":{"name":"空軍軍官學校","lat":22.7834793,"lon":120.2707306},"5167001000":{"name":"空軍軍官學校","lat":22.7834793,"lon":120.2707306},"5171000000":{"name":"空軍航空技術學院","lat":22.7860693,"lon":120.2784898},"5171001000":{"name":"空軍航空技術學院","lat":22.7860693,"lon":120.2784898},"5105000000":{"name":"私立高苑科技大學","lat":22.8409222,"lon":120.2646319},"5105001000":{"name":"私立高苑工業專校","lat":22.8409222,"lon":120.2646319},"5105002000":{"name":"私立高苑工商專校","lat":22.8409222,"lon":120.2646319},"5105003000":{"name":"私立高苑技術學院","lat":22.8409222,"lon":120.2646319},"5105004000":{"name":"私立高苑科技大學","lat":22.8409222,"lon":120.2646319},"5156003000":{"name":"樹人醫護管理專科學校","lat":22.8835175,"lon":120.261403},"5024000000":{"name":"國立高雄第一科技大學","lat":22.7562212,"lon":120.3348449},"5024001000":{"name":"國立高雄技術學院","lat":22.7723279,"lon":120.4001477},"5024002000":{"name":"國立高雄第一科技大學","lat":22.7562212,"lon":120.3348449},"5082000000":{"name":"樹德科技大學","lat":22.7638734,"lon":120.3761881},"5082001000":{"name":"私立樹德技術學院","lat":22.7638734,"lon":120.3761881},"5082002000":{"name":"私立樹德科技大學","lat":22.7638734,"lon":120.3761881},"5082003000":{"name":"樹德科技大學附進修專校","lat":22.7638734,"lon":120.3761881},"5082004000":{"name":"樹德科技大學","lat":22.7638734,"lon":120.3761881},"5143000000":{"name":"東方設計大學","lat":22.880716,"lon":120.2453799},"5143001000":{"name":"私立東方工藝專校","lat":22.880716,"lon":120.2453799},"5143002000":{"name":"私立東方工業專校","lat":22.880716,"lon":120.2453799},"5143003000":{"name":"私立東方工商專校","lat":22.880716,"lon":120.2453799},"5143004000":{"name":"私立東方技術學院","lat":22.880716,"lon":120.2453799},"5143005000":{"name":"東方技術學院附進修學院","lat":22.880716,"lon":120.2453799},"5143006000":{"name":"東方設計學院","lat":22.880716,"lon":120.2453799},"5143007000":{"name":"東方設計大學","lat":22.880716,"lon":120.2453799},"5155000000":{"name":"私立仁德醫護管理專校","lat":22.8834931,"lon":120.2613927},"5155002000":{"name":" ","lat":22.8954184,"lon":120.2224227},"5156000000":{"name":"樹人醫護管理專科學校","lat":22.8834931,"lon":120.2613927},"5156001000":{"name":"私立樹人醫護管理專校","lat":22.8834931,"lon":120.2613927},"5169000000":{"name":"陸軍軍官學校","lat":22.6193004,"lon":120.3658592},"5169001000":{"name":"陸軍軍官學校","lat":22.6193004,"lon":120.3658592},"5174000000":{"name":"陸軍專科學校","lat":22.6193004,"lon":120.3658592},"5174001000":{"name":"陸軍專科學校","lat":22.6193004,"lon":120.3658592},"5087000000":{"name":"私立輔英科技大學","lat":22.6026893,"lon":120.3896885},"5087001000":{"name":"私立護理助產專校","lat":22.6026893,"lon":120.3896885},"5087002000":{"name":"私立輔英醫事護專","lat":22.6026893,"lon":120.3896885},"5087003000":{"name":"私立輔英技術學院","lat":22.6026893,"lon":120.3896885},"5087004000":{"name":"私立輔英科技大學","lat":22.6026893,"lon":120.3896885},"5093000000":{"name":"私立正修科技大學","lat":22.650984,"lon":120.3489274},"5093001000":{"name":"私立正修工專","lat":22.650984,"lon":120.3489274},"5093002000":{"name":"私立正修工商專校","lat":22.650984,"lon":120.3489274},"5093003000":{"name":"私立正修技術學院","lat":22.650984,"lon":120.3489274},"5093004000":{"name":"私立正修科技大學","lat":22.650984,"lon":120.3489274},"5070000000":{"name":"私立義守大學","lat":22.7271472,"lon":120.4058239},"5070001000":{"name":"私立高雄工學院","lat":22.7271472,"lon":120.4058239},"5070002000":{"name":"私立義守大學","lat":22.7271472,"lon":120.4058239},"5118000000":{"name":"私立和春技術學院","lat":22.900104,"lon":120.4768145},"5118001000":{"name":"私立和春工專","lat":22.6339055,"lon":120.392001},"5118002000":{"name":"私立和春技術學院","lat":22.900104,"lon":120.4768145},"5160000000":{"name":"私立高美醫護管理專校","lat":22.884854,"lon":120.5195241},"5160001000":{"name":"私立高美醫護管理專校","lat":22.884854,"lon":120.5195241},"5041000000":{"name":"國立屏東大學","lat":22.669124,"lon":120.5030387},"5041001000":{"name":"臺灣省立屏東師範專科學校","lat":22.658112,"lon":120.5115692},"5041002000":{"name":"臺灣省立屏東師範學院","lat":22.658112,"lon":120.5115692},"5041003000":{"name":"國立屏東師範學院","lat":22.658112,"lon":120.5115692},"5041004000":{"name":"國立屏東教育大學","lat":22.6659053,"lon":120.5048409},"5041005000":{"name":"國立屏東商業專科學校","lat":22.658112,"lon":120.5115692},"5041006000":{"name":"國立屏東商業技術學院","lat":22.658112,"lon":120.5115692},"5041007000":{"name":"國立屏東大學","lat":22.669124,"lon":120.5030387},"5115000000":{"name":"大仁科技大學","lat":22.726916,"lon":120.542329},"5115001000":{"name":"私立大仁藥學專科學校","lat":22.726916,"lon":120.542329},"5115002000":{"name":"私立大仁技術學院","lat":22.726916,"lon":120.542329},"5115003000":{"name":"大仁科技大學","lat":22.726916,"lon":120.542329},"5149000000":{"name":"高鳳數位內容學院","lat":22.6819734,"lon":120.5472735},"5149001000":{"name":"私立高鳳技術學院","lat":22.6805486,"lon":120.5471813},"5149002000":{"name":"高鳳數位內容學院","lat":22.6819734,"lon":120.5472735},"5114000000":{"name":"永達技術學院","lat":22.6549875,"lon":120.5234312},"5114001000":{"name":"私立永達工專","lat":22.6549875,"lon":120.5234312},"5114002000":{"name":"私立永達工商專校","lat":22.6549875,"lon":120.5234312},"5114003000":{"name":"私立永達技術學院","lat":22.6549875,"lon":120.5234312},"5114004000":{"name":"永達技術學院附設進修學院","lat":22.6549875,"lon":120.5234312},"5114005000":{"name":"永達技術學院","lat":22.6549875,"lon":120.5234312},"5022000000":{"name":"國立屏東科技大學","lat":22.6433454,"lon":120.6098266},"5022001000":{"name":"省立農業專科學校","lat":22.6433454,"lon":120.6098266},"5022002000":{"name":"省立屏東農業專科學校","lat":22.6433454,"lon":120.6098266},"5022003000":{"name":"國立屏東農業專科學校","lat":22.6433454,"lon":120.6098266},"5022004000":{"name":"國立屏東技術學院","lat":22.6433454,"lon":120.6098266},"5022005000":{"name":"國立屏東科技大學","lat":22.6433454,"lon":120.6098266},"5132000000":{"name":"私立美和科技大學","lat":22.6006974,"lon":120.5593044},"5132001000":{"name":"私立美和護理專校","lat":22.603895,"lon":120.560668},"5132002000":{"name":"私立美和技術學院","lat":22.603895,"lon":120.560668},"5132003000":{"name":"私立美和科技大學","lat":22.6006974,"lon":120.5593044},"5157000000":{"name":"私立慈惠醫護管理專校","lat":22.486071,"lon":120.4894273},"5157001000":{"name":"私立慈惠醫護管理專校","lat":22.486071,"lon":120.4894273},"5028000000":{"name":"國立臺東大學","lat":22.736571,"lon":121.067897},"5028001000":{"name":"省立臺東師範專科學校","lat":22.7586954,"lon":121.1226973},"5028002000":{"name":"省立臺東師範學院","lat":22.753033,"lon":121.158788},"5028003000":{"name":"國立臺東師範學院","lat":22.736571,"lon":121.067897},"5028004000":{"name":"國立臺東大學","lat":22.736571,"lon":121.067897},"5029000000":{"name":"國立宜蘭大學","lat":22.736571,"lon":121.067897},"5177000000":{"name":"國立台東專科學校","lat":22.7586954,"lon":121.1226973},"5177001000":{"name":"國立台東專科學校","lat":22.7586954,"lon":121.1226973},"5042000000":{"name":"國立花蓮教育大學","lat":24.0102752,"lon":121.6180179},"5042001000":{"name":"臺灣省立花蓮師範專科學校","lat":24.0102752,"lon":121.6180179},"5042002000":{"name":"臺灣省立花蓮師範學院","lat":24.0102752,"lon":121.6180179},"5042003000":{"name":"國立花蓮師範學院","lat":24.0102752,"lon":121.6180179},"5042004000":{"name":"國立花蓮教育大學","lat":24.0102752,"lon":121.6180179},"5083000000":{"name":"私立慈濟大學","lat":23.9928054,"lon":121.5912448},"5083001000":{"name":"私立慈濟醫學院","lat":23.9928054,"lon":121.5912448},"5083002000":{"name":"私立慈濟大學","lat":23.9928054,"lon":121.5912448},"5111000000":{"name":"私立慈濟技術學院","lat":23.9967593,"lon":121.5647535},"5111001000":{"name":"私立慈濟護專","lat":23.9928054,"lon":121.5912448},"5111002000":{"name":"私立慈濟技術學院","lat":23.9967593,"lon":121.5647535},"5110000000":{"name":"私立大漢技術學院","lat":24.0392272,"lon":121.6057039},"5110001000":{"name":"私立大漢工專","lat":24.0392272,"lon":121.6057039},"5110002000":{"name":"私立大漢工商專校","lat":24.0392272,"lon":121.6057039},"5110003000":{"name":"私立大漢技術學院","lat":24.0392272,"lon":121.6057039},"5018000000":{"name":"國立東華大學","lat":23.8975385,"lon":121.5418018},"5018001000":{"name":"國立東華大學","lat":23.8975385,"lon":121.5418018},"5152000000":{"name":"臺灣觀光學院","lat":23.8586595,"lon":121.4865128},"5152001000":{"name":"私立精鍾商業專校","lat":23.8586595,"lon":121.4865128},"5152002000":{"name":"私立臺灣觀光經營管理專校","lat":23.8586595,"lon":121.4865128},"5152003000":{"name":"臺灣觀光學院","lat":23.8586595,"lon":121.4865128},"5047000000":{"name":"國立澎湖科技大學","lat":23.5745619,"lon":119.5809839},"5047001000":{"name":"國立澎湖海事管理專科學校","lat":23.5702986,"lon":119.5653356},"5047002000":{"name":"國立澎湖技術學院","lat":23.5745619,"lon":119.5809839},"5047003000":{"name":"國立澎湖科技大學","lat":23.5745619,"lon":119.5809839},"5049000000":{"name":"國立金門大學","lat":24.4481499,"lon":118.322535},"5049001000":{"name":"國立金門技術學院","lat":24.4481499,"lon":118.322535},"5049002000":{"name":"國立金門大學","lat":24.4481499,"lon":118.322535}}')
    }, c097: function (t, e, n) {
    }, c143: function (t, e, n) {
    }, c1f0: function (t, e, n) {
    }, c3dc: function (t, e, n) {
    }, cba4: function (t, e, n) {
        "use strict";
        var o = n("de3a"), a = n.n(o);
        a.a
    }, cd89: function (t, e, n) {
    }, ce6d: function (t, e, n) {
    }, d8ab: function (t, e, n) {
        "use strict";
        var o = n("c143"), a = n.n(o);
        a.a
    }, dbaf: function (t, e, n) {
        "use strict";
        var o = n("ed88"), a = n.n(o);
        a.a
    }, de3a: function (t, e, n) {
    }, e07c: function (t, e, n) {
    }, e3d0: function (t, e, n) {
        "use strict";
        var o = n("b525"), a = n.n(o);
        a.a
    }, e3d9: function (t, e, n) {
    }, ea1a: function (t, e, n) {
        "use strict";
        var o = n("5018"), a = n.n(o);
        a.a
    }, ed88: function (t, e, n) {
    }, f0bb: function (t, e, n) {
        "use strict";
        var o = n("9a5e"), a = n.n(o);
        a.a
    }, f10b: function (t, e, n) {
    }, fdc5: function (t, e, n) {
    }
});