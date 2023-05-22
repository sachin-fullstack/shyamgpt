(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[734], {
    69403: function(e, n, t) {
        "use strict";
        var r, a, i, o, s, l, u, c, d;
        t.d(n, {
            Jq: function() {
                return s
            },
            Os: function() {
                return i
            },
            uU: function() {
                return o
            }
        }),
        (l = r || (r = {})).Default = "default",
        l.Dark = "dark",
        (a || (a = {})).Retrieval = "retrieval",
        (u = i || (i = {})).Next = "next",
        u.Variant = "variant",
        u.Continue = "continue",
        (c = o || (o = {})).Unknown = "unknown",
        c.User = "user",
        c.Assistant = "assistant",
        c.System = "system",
        c.Critic = "critic",
        c.Tool = "tool",
        (d = s || (s = {})).Root = "root",
        d.System = "system",
        d.Prompt = "prompt",
        d.Completion = "completion"
    },
    78042: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return es
            }
        });
        var r = t(22830)
          , a = t(35250)
          , i = t(61888)
          , o = t(70079)
          , s = t(39324)
          , l = t(71209)
          , u = t(3001)
          , c = t(75908)
          , d = t(35290)
          , f = t(82841)
          , h = t(36218)
          , g = t(32787)
          , m = t(85023)
          , p = t(64135)
          , v = t(88038)
          , x = t(55041)
          , b = (0,
        u.vU)({
            welcomeBack: {
                id: "existingUserAgeConfirmationModal.welcomeBack",
                defaultMessage: "Welcome back, Italy!",
                description: "Title for the age confirmation modal for Italian users"
            },
            ageRequirementsButton: {
                id: "existingUserAgeConfirmationModal.ageRequirementsButton",
                defaultMessage: "I meet OpenAI's age requirements",
                description: "Primary button to confirm the user meets the age requirements"
            },
            logoutButton: {
                id: "existingUserAgeConfirmationModal.logoutButton",
                defaultMessage: "Log out",
                description: "Secondary button to log out of the platform"
            },
            announcementParagraph1: {
                id: "existingUserAgeConfirmationModal.announcementParagraph1",
                defaultMessage: "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
                description: "First paragraph of the announcement, explaining the age requirements"
            },
            privacyPolicyLink: {
                id: "existingUserAgeConfirmationModal.privacyPolicyLink",
                defaultMessage: "Privacy policy",
                description: "Link to the privacy policy"
            },
            helpCenterArticleLink: {
                id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
                defaultMessage: "this help center article",
                description: "Link to the help center article about ChatGPT development"
            },
            announcementParagraph2: {
                id: "existingUserAgeConfirmationModal.announcementParagraph2",
                defaultMessage: "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
                description: "Second paragraph of the announcement, providing links to more information"
            }
        })
          , y = "2023-04-25"
          , j = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(y);
        function w(e) {
            var n = e.onClose
              , t = (0,
            c.Z)()
              , r = (0,
            o.useCallback)(function() {
                m.m.setItem(j, !0),
                n()
            }, [n])
              , s = (0,
            f.WS)();
            return (0,
            o.useEffect)(function() {
                s && s(h.s6.ageConfirmationModal, {
                    content: y
                })
            }, []),
            (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: i.noop,
                type: "success",
                title: t.formatMessage(b.welcomeBack),
                primaryButton: (0,
                a.jsx)(x.mH, {
                    title: t.formatMessage(b.ageRequirementsButton),
                    color: "primary",
                    onClick: r
                }),
                secondaryButton: (0,
                a.jsx)(x.mH, {
                    title: t.formatMessage(b.logoutButton),
                    color: "light",
                    onClick: function() {
                        s(h.s6.clickLogOut, {
                            eventSource: "mouse"
                        }),
                        (0,
                        g.w7)()
                    },
                    className: "border-gray-800 hover:border-gray-700"
                }),
                children: (0,
                a.jsx)(k, {})
            })
        }
        var k = function() {
            var e = (0,
            c.Z)();
            return (0,
            a.jsx)("div", {
                className: "mb-6 mt-4 sm:mt-6",
                children: (0,
                a.jsxs)("div", {
                    className: "prose prose-invert text-base text-gray-500",
                    children: [(0,
                    a.jsx)("p", {
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, b.announcementParagraph1))
                    }), (0,
                    a.jsx)("p", {
                        children: (0,
                        a.jsx)(d.Z, (0,
                        l._)((0,
                        s._)({}, b.announcementParagraph2), {
                            values: {
                                privacyPolicyLink: (0,
                                a.jsx)("a", {
                                    href: "https://openai.com/policies/privacy-policy",
                                    target: "_blank",
                                    className: "text-gray-500 underline",
                                    rel: "noreferrer",
                                    children: e.formatMessage(b.privacyPolicyLink)
                                }),
                                helpCenterArticleLink: (0,
                                a.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                                    target: "_blank",
                                    className: "text-gray-500 underline",
                                    rel: "noreferrer",
                                    children: e.formatMessage(b.helpCenterArticleLink)
                                })
                            }
                        }))
                    })]
                })
            })
        }
          , C = t(19208)
          , _ = t.n(C)
          , M = t(68555)
          , T = t(4337)
          , I = t(34303)
          , N = t(53086)
          , P = t(5759)
          , S = t(66958);
        function Z() {
            var e = (0,
            T._)(["flex gap-4 mt-6"]);
            return Z = function() {
                return e
            }
            ,
            e
        }
        function R(e) {
            var n = e.onBack
              , t = e.onNext
              , r = e.onSubmit;
            return (0,
            a.jsxs)(D, {
                children: [n && (0,
                a.jsx)(S.z, {
                    as: "button",
                    color: "neutral",
                    onClick: n,
                    children: "Back"
                }), t && (0,
                a.jsx)(S.z, {
                    as: "button",
                    onClick: t,
                    color: "neutral",
                    className: "ml-auto",
                    children: "Next"
                }), r && (0,
                a.jsx)(S.z, {
                    as: "button",
                    onClick: r,
                    color: "primary",
                    className: "ml-auto",
                    children: "Done"
                })]
            })
        }
        var D = I.Z.div(Z());
        function F() {
            var e = (0,
            T._)(["prose dark:prose-invert"]);
            return F = function() {
                return e
            }
            ,
            e
        }
        function A() {
            var e = (0,
            T._)(["!mt-4 font-normal !mb-2"]);
            return A = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = (0,
            T._)(["mb-4"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function L() {
            var e = (0,
            T._)(["w-full h-[1px] bg-gray-300 opacity-20"]);
            return L = function() {
                return e
            }
            ,
            e
        }
        var B = (0,
        u.vU)({
            pageTitle: {
                id: "onboarding.pageTitle",
                defaultMessage: "Welcome to {name}",
                description: "Page title displayed at the beginning of the onboarding process"
            },
            keepInMind: {
                id: "onboarding.keepInMind",
                defaultMessage: "Here are a few things to keep in mind before we get started:",
                description: "Introduction text for the onboarding process"
            },
            page0Subtitle: {
                id: "onboarding.page0Subtitle",
                defaultMessage: "This is a free research preview.",
                description: "Subtitle for Page 0"
            },
            page0Disclaimer1: {
                id: "onboarding.page0Disclaimer1",
                defaultMessage: "Our goal is to get external feedback in order to improve our systems and make them safer.",
                description: "Disclaimer 1 for Page 0"
            },
            page0Disclaimer2: {
                id: "onboarding.page0Disclaimer2",
                defaultMessage: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                description: "Disclaimer 2 for Page 0"
            },
            page1Subtitle: {
                id: "onboarding.page1Subtitle",
                defaultMessage: "How we collect data",
                description: "Subtitle for Page 1"
            },
            page1Disclaimer1: {
                id: "onboarding.page1Disclaimer1",
                defaultMessage: "Conversations may be reviewed by our AI trainers to improve our systems.",
                description: "Disclaimer 1 for Page 1"
            },
            page1Disclaimer2: {
                id: "onboarding.page1Disclaimer2",
                defaultMessage: "Please don't share any sensitive information in your conversations.",
                description: "Disclaimer 2 for Page 1"
            },
            page2Subtitle: {
                id: "onboarding.page2Subtitle",
                defaultMessage: "We'd love your feedback!",
                description: "Subtitle for Page 2"
            },
            page2Disclaimer1: {
                id: "onboarding.page2Disclaimer1",
                defaultMessage: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
                description: "Disclaimer 1 for Page 2"
            },
            page2Disclaimer2: {
                id: "onboarding.page2Disclaimer2",
                defaultMessage: "Share your feedback in our <link>Discord server</link>.",
                description: "Disclaimer 2 for Page 2, with link to Discord"
            }
        })
          , O = "oai/apps/hasSeenOnboarding"
          , q = N.G.id
          , U = N.G.name
          , z = function() {
            var e = (0,
            o.useCallback)(function() {
                m.m.setItem("".concat(O, "/").concat(q), new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }))
            }, [])
              , n = (0,
            r._)((0,
            o.useState)(null), 2)
              , t = n[0]
              , a = n[1];
            (0,
            o.useEffect)(function() {
                var e = m.m.getItem("".concat(O, "/").concat(q));
                a(!!e && e)
            }, [a]);
            var i = (0,
            o.useCallback)(function() {
                return t ? new Date(!0 === t ? "2022-12-14" : t) : t
            }, [t]);
            return (0,
            o.useMemo)(function() {
                return {
                    setHasSeenOnboarding: e,
                    getHasSeenOnboardingDate: i
                }
            }, [i, e])
        };
        function H(e) {
            var n = e.onClose
              , t = z().setHasSeenOnboarding
              , i = (0,
            r._)((0,
            o.useState)(0), 2)
              , s = i[0]
              , l = i[1]
              , u = (0,
            o.useCallback)(function() {
                n(!0),
                t()
            }, [n, t]);
            return (0,
            a.jsxs)($, {
                children: [0 === s && (0,
                a.jsx)(G, {
                    onChangePage: l
                }), 1 === s && (0,
                a.jsx)(W, {
                    onChangePage: l
                }), 2 === s && (0,
                a.jsx)(Q, {
                    onChangePage: l,
                    onSubmit: u
                })]
            })
        }
        var V = function() {
            return "chat" === q ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "mb-5",
                    children: (0,
                    a.jsx)(J, {
                        children: (0,
                        a.jsx)("b", {
                            children: U
                        })
                    })
                }), (0,
                a.jsx)(X, {})]
            }) : (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(J, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    l._)((0,
                    s._)({}, B.pageTitle), {
                        values: {
                            name: (0,
                            a.jsx)("b", {
                                children: U
                            })
                        }
                    }))
                }), (0,
                a.jsx)("p", {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.keepInMind))
                }), (0,
                a.jsx)(X, {})]
            })
        }
          , G = function(e) {
            var n = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(V, {}), (0,
                a.jsx)(Y, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.page0Subtitle))
                }), (0,
                a.jsxs)(P.I, {
                    children: [(0,
                    a.jsx)(P.Z, {
                        icon: "\uD83D\uDD2C",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page0Disclaimer1))
                    }), (0,
                    a.jsx)(P.Z, {
                        icon: "\uD83D\uDEA8",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page0Disclaimer2))
                    })]
                }), (0,
                a.jsx)(R, {
                    onNext: function() {
                        return n(1)
                    }
                })]
            })
        }
          , W = function(e) {
            var n = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(V, {}), (0,
                a.jsx)(Y, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.page1Subtitle))
                }), (0,
                a.jsxs)(P.I, {
                    children: [(0,
                    a.jsx)(P.Z, {
                        icon: "\uD83E\uDDBE",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page1Disclaimer1))
                    }), (0,
                    a.jsx)(P.Z, {
                        icon: "\uD83D\uDD10",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page1Disclaimer2))
                    })]
                }), (0,
                a.jsx)(R, {
                    onBack: function() {
                        return n(0)
                    },
                    onNext: function() {
                        return n(2)
                    }
                })]
            })
        }
          , Q = function(e) {
            var n = e.onChangePage
              , t = e.onSubmit
              , r = (0,
            o.useRef)(null);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(V, {}), (0,
                a.jsx)(Y, {
                    children: (0,
                    a.jsx)(d.Z, (0,
                    s._)({}, B.page2Subtitle))
                }), (0,
                a.jsxs)(P.I, {
                    children: [(0,
                    a.jsx)(P.Z, {
                        icon: "\uD83D\uDC4D",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        s._)({}, B.page2Disclaimer1))
                    }), (0,
                    a.jsx)(P.Z, {
                        icon: "\uD83D\uDCAC",
                        children: (0,
                        a.jsx)(d.Z, (0,
                        l._)((0,
                        s._)({}, B.page2Disclaimer2), {
                            values: {
                                link: function(e) {
                                    return (0,
                                    a.jsx)("a", {
                                        href: "https://discord.gg/openai",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })]
                }), (0,
                a.jsx)(R, {
                    onBack: function() {
                        return n(1)
                    },
                    onSubmit: function() {
                        return null == t ? void 0 : t(r)
                    }
                })]
            })
        }
          , $ = I.Z.div(F())
          , J = I.Z.h2(A())
          , Y = I.Z.h4(E())
          , X = I.Z.div(L())
          , K = t(5046)
          , ee = (0,
        u.vU)({
            tryGPT4: {
                id: "releaseAnnouncement.tryGPT4",
                defaultMessage: "Try GPT-4",
                description: "Button text to try GPT-4"
            },
            maybeLater: {
                id: "releaseAnnouncement.maybeLater",
                defaultMessage: "Maybe later",
                description: "Button text to dismiss the release announcement"
            },
            introducingGPT4: {
                id: "releaseAnnouncement.introducingGPT4",
                defaultMessage: "Introducing GPT-4",
                description: "Heading for the GPT-4 release announcement"
            },
            ourLatestModel: {
                id: "releaseAnnouncement.ourLatestModel",
                defaultMessage: "Our latest model, <link>GPT-4</link>, is now available to Plus subscribers.",
                description: "Text to introduce GPT-4 and provide a link to its product page"
            },
            advancedReasoning: {
                id: "releaseAnnouncement.advancedReasoning",
                defaultMessage: "Advanced reasoning",
                description: "List item highlighting advanced reasoning in GPT-4"
            },
            complexInstructions: {
                id: "releaseAnnouncement.complexInstructions",
                defaultMessage: "Complex instructions",
                description: "List item highlighting complex instructions in GPT-4"
            },
            moreCreativity: {
                id: "releaseAnnouncement.moreCreativity",
                defaultMessage: "More creativity",
                description: "List item highlighting more creativity in GPT-4"
            },
            dynamicAdjustment: {
                id: "releaseAnnouncement.dynamicAdjustment",
                defaultMessage: "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
                description: "Text explaining the dynamic adjustment of GPT-4 usage based on demand"
            },
            feb13Update: {
                id: "releaseAnnouncement.feb13Update",
                defaultMessage: "Feb 13 update",
                description: "Text for the February 13 update announcement"
            },
            turboToDefault: {
                id: "releaseAnnouncement.turboToDefault",
                defaultMessage: "Turbo",
                description: "Text for Turbo version in the announcement"
            },
            defaultVersion: {
                id: "releaseAnnouncement.defaultVersion",
                defaultMessage: "Default",
                description: "Text for the Default version in the announcement"
            },
            turboDefaultSwitch: {
                id: "releaseAnnouncement.turboDefaultSwitch",
                defaultMessage: "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously known as Turbo. We'll keep the previous version around for a while.",
                description: "Text explaining the switch from Turbo to the Default version based on user feedback"
            },
            gpt4HasEnhancedCapabilities: {
                id: "releaseAnnouncement.gpt4HasEnhancedCapabilities",
                defaultMessage: "GPT-4 has enhanced capabilities in:",
                description: "Text to introduce GPT-4's enhanced capabilities"
            }
        })
          , en = "2023-03-12"
          , et = "".concat("oai/apps/hasSeenReleaseAnnouncement", "/").concat(en);
        function er(e) {
            var n = e.onClose
              , t = (0,
            M.useRouter)()
              , r = (0,
            o.useCallback)(function() {
                m.m.setItem(et, !0),
                n()
            }, [n])
              , i = (0,
            o.useCallback)(function() {
                r(),
                t.replace("/?model=".concat(K.R9))
            }, [r, t])
              , s = (0,
            f.WS)();
            return (0,
            o.useEffect)(function() {
                s && s(h.s6.announcementViewed, {
                    content: en
                })
            }, []),
            (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "",
                theme: "dark",
                fullBleed: !0,
                primaryButton: (0,
                a.jsx)(x.mH, {
                    title: "Try GPT-4",
                    color: "light",
                    onClick: i
                }),
                secondaryButton: (0,
                a.jsx)(x.mH, {
                    title: "Maybe later",
                    color: "dark",
                    onClick: r,
                    className: "border-gray-800 hover:border-gray-700"
                }),
                children: (0,
                a.jsx)(ea, {})
            })
        }
        var ea = function() {
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(_(), {
                    src: "/images/gpt-4-motif.svg",
                    alt: "Gpt-4 announcement banner",
                    width: "480",
                    height: "160",
                    className: "mt-3.5 w-full"
                }), (0,
                a.jsx)("div", {
                    className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
                    children: (0,
                    a.jsxs)("div", {
                        className: "prose prose-invert text-base",
                        children: [(0,
                        a.jsx)("h2", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, ee.introducingGPT4))
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            l._)((0,
                            s._)({}, ee.ourLatestModel), {
                                tagName: "span",
                                values: {
                                    link: function(e) {
                                        return (0,
                                        a.jsx)("a", {
                                            href: "https://openai.com/product/gpt-4",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, ee.gpt4HasEnhancedCapabilities))
                        }), (0,
                        a.jsxs)("ul", {
                            children: [(0,
                            a.jsxs)("li", {
                                children: [(0,
                                a.jsx)(d.Z, (0,
                                s._)({}, ee.advancedReasoning)), " "]
                            }), (0,
                            a.jsx)("li", {
                                children: (0,
                                a.jsx)(d.Z, (0,
                                s._)({}, ee.complexInstructions))
                            }), (0,
                            a.jsx)("li", {
                                children: (0,
                                a.jsx)(d.Z, (0,
                                s._)({}, ee.moreCreativity))
                            })]
                        }), (0,
                        a.jsx)("p", {
                            children: (0,
                            a.jsx)(d.Z, (0,
                            s._)({}, ee.dynamicAdjustment))
                        })]
                    })
                })]
            })
        }
          , ei = function(e) {
            var n = e.onClose;
            return (0,
            a.jsx)(x.ZP, {
                isOpen: !0,
                onModalClose: i.noop,
                type: "success",
                primaryButton: void 0,
                children: (0,
                a.jsx)(H, {
                    onClose: n
                })
            })
        }
          , eo = function(e) {
            var n = e.onClose;
            return (0,
            a.jsx)(er, {
                onClose: n
            })
        };
        function es(e) {
            var n, t, i, s = e.userCountry, l = (0,
            r._)((0,
            o.useState)(0), 2), u = l[0], c = l[1], d = z().getHasSeenOnboardingDate, f = (t = (n = (0,
            p.hz)()).has(v.Vn),
            i = !!m.m.getItem(j),
            0 === n.size ? "loading" : "IT" !== s || i ? "hide" : t ? "show" : "hide"), h = function() {
                var e = z().getHasSeenOnboardingDate
                  , n = (0,
                p.Xj)().isLoading
                  , t = (0,
                p.hz)();
                if (n)
                    return "loading";
                var r = e();
                return m.m.getItem(et) || !r ? "hide" : t.has("model_preview") && r < new Date(en) ? "show" : "hide"
            }(), g = (0,
            o.useMemo)(function() {
                return [{
                    Modal: w,
                    getModalState: function() {
                        return f
                    }
                }, {
                    Modal: ei,
                    getModalState: function() {
                        var e = d();
                        return null === e ? "loading" : !1 === e ? "show" : "hide"
                    }
                }, {
                    Modal: eo,
                    getModalState: function() {
                        return h
                    }
                }]
            }, [d, f, h]);
            (0,
            o.useEffect)(function() {
                g[u] && "hide" === g[u].getModalState() && c(g.findIndex(function(e) {
                    return "hide" !== e.getModalState()
                }))
            }, [u, g]);
            var x = g[u];
            if (!x)
                return null;
            var b = x.getModalState();
            if ("loading" === b)
                return null;
            "hide" === b && c(function(e) {
                return e + 1
            });
            var y = g[u].Modal;
            return (0,
            a.jsx)(y, {
                onClose: function() {
                    c(function(e) {
                        return e + 1
                    })
                }
            })
        }
    },
    21172: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return g
            }
        });
        var r = t(22830)
          , a = t(35250)
          , i = t(70079)
          , o = t(5914)
          , s = t(97688)
          , l = t(87316)
          , u = t(32983)
          , c = t(64135)
          , d = t(75527)
          , f = t(78042)
          , h = t(7983);
        function g(e) {
            var n = e.urlThreadId
              , t = e.clientThreadId
              , g = e.isUserInCanPayGroup
              , m = e.serviceStatus
              , p = e.serviceAnnouncement
              , v = e.userCountry
              , x = (0,
            r._)((0,
            i.useState)(function() {
                return void 0 !== n ? n : void 0 !== t ? t : (0,
                d.OX)()
            }), 2)
              , b = x[0]
              , y = x[1];
            void 0 !== n && b !== n && y(n),
            void 0 !== n || (0,
            d.Zz)(b) || y((0,
            d.OX)());
            var j = (0,
            c.Xj)().data
              , w = null == j ? void 0 : j.accountPlan.hasPaidSubscription
              , k = (0,
            l.g)(function(e) {
                return e.updateFlagValue
            });
            (0,
            i.useEffect)(function() {
                void 0 !== g && k("isUserInCanPayGroup", g)
            }, [k, g]),
            (0,
            i.useEffect)(function() {
                (null == m ? void 0 : m.type) && !1 === w && s.m.warning(m.message, {
                    hasCloseButton: !0,
                    duration: 5
                })
            }, [w, null == m ? void 0 : m.message, null == m ? void 0 : m.type]);
            var C = (0,
            d.GR)(b)
              , _ = (0,
            i.useRef)(!1);
            return (0,
            i.useEffect)(function() {
                if (null != j) {
                    var e = j.accountPlan.hasPaidSubscription ? p.paid : p.public;
                    if ((null == e ? void 0 : e.type) && (null == e ? void 0 : e.message) && !_.current) {
                        _.current = !0;
                        var n = e.message
                          , t = {
                            hasCloseButton: !0,
                            duration: 15
                        };
                        switch (e.type) {
                        case "danger":
                            s.m.danger(n, t);
                            break;
                        case "info":
                            s.m.info(n, t);
                            break;
                        case "warning":
                            s.m.warning(n, t)
                        }
                    }
                }
            }, [p, j]),
            (0,
            a.jsxs)(u.AX.Provider, {
                value: C,
                children: [(0,
                a.jsx)(f.Z, {
                    userCountry: v
                }), (0,
                a.jsx)(o.j, {}), (0,
                a.jsx)(h.Z, {
                    clientThreadId: b,
                    setClientThreadId: y,
                    isStaticSharedThread: !1
                })]
            })
        }
    },
    22208: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            SANDBOX_LINK_PREFIX: function() {
                return y
            },
            default: function() {
                return w
            },
            handleSandboxLinkClick: function() {
                return j
            }
        });
        var r = t(21722)
          , a = t(22830)
          , i = t(39889)
          , o = t(35250)
          , s = t(70079)
          , l = t(24274)
          , u = t(75527)
          , c = t(4337)
          , d = t(1454)
          , f = t(34303)
          , h = t(66958)
          , g = t(38317)
          , m = t(19265);
        function p() {
            var e = (0,
            c._)(["absolute -left-1 top-1 md:left-0 md:top-2"]);
            return p = function() {
                return e
            }
            ,
            e
        }
        function v(e) {
            var n = e.accept
              , t = e.onFilePicked
              , r = e.loading
              , a = e.disabled
              , i = (0,
            s.useRef)(null)
              , l = (0,
            s.useCallback)(function() {
                var e;
                null === (e = i.current) || void 0 === e || e.click()
            }, [])
              , u = (0,
            s.useCallback)(function(e) {
                var n, r = null === (n = e.target.files) || void 0 === n ? void 0 : n[0];
                r && (t(r),
                e.target.value = "")
            }, [t]);
            return (0,
            o.jsxs)(x, {
                children: [(0,
                o.jsx)(h.z, {
                    onClick: l,
                    disabled: a || r,
                    color: "none",
                    children: r ? (0,
                    o.jsx)(m.Z, {}) : (0,
                    o.jsx)(g.ZP, {
                        icon: d.Cje,
                        size: "small"
                    })
                }), (0,
                o.jsx)("input", {
                    type: "file",
                    accept: n,
                    ref: i,
                    className: "hidden",
                    onChange: u
                })]
            })
        }
        var x = f.Z.div(p())
          , b = t(97688)
          , y = "sandbox:";
        function j(e, n) {
            var t;
            return t = (0,
            r._)(function(e, t) {
                var a, o, s, u, c;
                return (0,
                i.Jh)(this, function(d) {
                    switch (d.label) {
                    case 0:
                        var f;
                        a = t.substring(8),
                        o = null,
                        f = 100,
                        s = (0,
                        r._)(function() {
                            return (0,
                            i.Jh)(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    var n;
                                    return f < 1e3 && (f += 100),
                                    [4, (n = f,
                                    new Promise(function(e) {
                                        return setTimeout(e, n)
                                    }
                                    ))];
                                case 1:
                                    return e.sent(),
                                    [2]
                                }
                            })
                        }),
                        d.label = 1;
                    case 1:
                        return [4, l.ZP.downloadFromSandbox(e, n, a)];
                    case 2:
                        if (null == (u = d.sent()) ? void 0 : u.download_url)
                            return o = u.download_url,
                            [3, 6];
                        if ((null == u ? void 0 : u.state) !== "not_ready")
                            return [3, 4];
                        return [4, s()];
                    case 3:
                        return d.sent(),
                        [3, 5];
                    case 4:
                        return b.m.warning("Download failed: ".concat(a)),
                        [2];
                    case 5:
                        return [3, 1];
                    case 6:
                        return (c = document.createElement("a")).href = o,
                        c.click(),
                        [2]
                    }
                })
            }),
            function(e, n) {
                return t.apply(this, arguments)
            }
        }
        function w(e) {
            var n, t = e.onFileUpload, c = e.clientThreadId, d = e.currentLeafId, f = e.modelBackend, h = e.disabled, g = (0,
            a._)((0,
            s.useState)(!1), 2), m = g[0], p = g[1], x = (0,
            s.useCallback)((n = (0,
            r._)(function(e) {
                var n, r, a, o;
                return (0,
                i.Jh)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        p(!0),
                        i.label = 1;
                    case 1:
                        if (i.trys.push([1, , 3, 4]),
                        e.size > 104857600)
                            return r = (e.size / 1024 / 1024).toFixed(0),
                            b.m.warning("File is larger than upload limit: ".concat(r, " MB vs ").concat("100", " MB"), {
                                hasCloseButton: !0,
                                duration: 15
                            }),
                            [2];
                        return o = (null === (n = (a = u.tQ.getTree(c).getNode(d)).message) || void 0 === n ? void 0 : n.id) || a.id,
                        [4, l.ZP.uploadUsingFileService(o, u.tQ.getServerThreadId(c), f, e)];
                    case 2:
                        return t(i.sent()),
                        [3, 4];
                    case 3:
                        return p(!1),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }),
            function(e) {
                return n.apply(this, arguments)
            }
            ), [t, c, d, f]);
            return (0,
            o.jsx)(v, {
                disabled: m || h,
                onFilePicked: x
            })
        }
    },
    37541: function(e, n, t) {
        "use strict";
        var r = t(35250)
          , a = t(70060)
          , i = t.n(a);
        t(70079);
        var o = function(e) {
            var n = e.children;
            return (0,
            r.jsx)(r.Fragment, {
                children: n
            })
        };
        n.Z = i()(function() {
            return Promise.resolve(o)
        }, {
            ssr: !1
        })
    },
    5914: function(e, n, t) {
        "use strict";
        t.d(n, {
            j: function() {
                return f
            }
        });
        var r = t(35250)
          , a = t(70079)
          , i = t(82841)
          , o = t(36218)
          , s = t(85023)
          , l = t(64135)
          , u = t(88038)
          , c = t(97688)
          , d = "oai/apps/hasSeenStatusUpdate/".concat("2023-03-25")
          , f = function() {
            var e = (0,
            l.hz)().has(u.Id)
              , n = (0,
            a.useRef)(!!s.m.getItem(d))
              , t = (0,
            i.WS)();
            return (0,
            a.useEffect)(function() {
                e && !n.current && t && (t(o.s6.oneOffStatusMessageShown),
                c.m.warning("You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.", {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function() {
                        s.m.setItem(d, !0),
                        n.current = !0
                    }
                }))
            }, [n, e, t]),
            (0,
            r.jsx)("div", {})
        }
    },
    7983: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return lZ
            }
        });
        var r, a, i, o, s, l, u, c, d, f, h, g, m, p, v = t(39324), x = t(70216), b = t(22830), y = t(4337), j = t(35250), w = t(35448), k = t(68555), C = t(70079), _ = t(34303), M = t(82841), T = t(36218), I = t(64135), N = t(75527), P = t(81292), S = t(58392), Z = (0,
        P.ZP)((0,
        S.n)(function() {
            return {
                aborters: {}
            }
        })), R = Z.setState, D = {
            addAborter: function(e, n) {
                R(function(t) {
                    null != t.aborters[e] && console.warn("Setting aborter for id ".concat(e, " but it already exists")),
                    t.aborters[e] = n
                })
            },
            abortAndRemoveById: function(e) {
                R(function(n) {
                    var t = n.aborters[e];
                    null != t && (t.abort(),
                    delete n.aborters[e])
                })
            },
            removeAborterById: function(e) {
                R(function(n) {
                    delete n.aborters[e]
                })
            },
            reset: function() {
                R(function() {
                    return {
                        aborters: {}
                    }
                })
            },
            abortAllAndReset: function() {
                R(function(e) {
                    Object.keys(e.aborters).forEach(function(n) {
                        e.aborters[n].abort(),
                        delete e.aborters[n]
                    })
                })
            }
        }, F = {
            isNavigationCollapsed: !1,
            sharingModalThreadId: void 0
        }, A = (0,
        P.ZP)()(function() {
            return (0,
            v._)({}, F)
        }), E = {
            toggleNavigation: function() {
                A.setState(function(e) {
                    return console.log("state", e),
                    {
                        isNavigationCollapsed: !e.isNavigationCollapsed
                    }
                })
            },
            openSharingModal: function(e) {
                A.setState({
                    sharingModalThreadId: e
                })
            },
            closeSharingModal: function() {
                A.setState({
                    sharingModalThreadId: void 0
                })
            }
        }, L = t(32983), B = t(19841), O = t(7851), q = t(26430), U = t(84913), z = t(44043), H = t(82187), V = t(69262), G = t(75861), W = t(70575), Q = t(91530), $ = t.n(Q), J = t(1454), Y = t(3001), X = t(75908), K = t(35290), ee = t(24274), en = t(88038), et = t(77442);
        function er(e, n, t) {
            var r = (0,
            N.XL)(e)
              , a = r.title
              , i = r.titleSource
              , o = (0,
            b._)((0,
            C.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = null != a ? a : n
              , c = (0,
            C.useRef)(u);
            return (0,
            C.useEffect)(function() {
                return t && i === N._L.Generated && u !== c.current && l(!0),
                function() {
                    c.current = u
                }
            }, [t, u, i]),
            {
                isTypingEffect: s,
                resolvedTitle: u
            }
        }
        var ea = t(19051)
          , ei = t(51217)
          , eo = function() {
            var e = (0,
            C.useRef)(!1);
            return (0,
            C.useEffect)(function() {
                return e.current = !0,
                function() {
                    e.current = !1
                }
            }, []),
            (0,
            C.useCallback)(function() {
                return e.current
            }, [])
        };
        function es(e) {
            var n = e.text
              , t = eo()
              , r = (0,
            b._)((0,
            C.useState)(!0), 2)
              , a = r[0]
              , i = r[1]
              , o = (0,
            b._)((0,
            C.useState)(0), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            C.useMemo)(function() {
                return new el().humanTypingDelaysQuertyDistance(n)
            }, [n]);
            return (0,
            C.useEffect)(function() {
                n && a && (i(!0),
                u.forEach(function(e, n) {
                    setTimeout(function() {
                        t() && (l(n),
                        n === u.length - 1 && i(!1))
                    }, e)
                }))
            }, [u, t, a, n]),
            (0,
            j.jsxs)(j.Fragment, {
                children: [n.substring(0, s + 1), a && "▋"]
            })
        }
        var el = function() {
            function e() {
                (0,
                ei._)(this, e)
            }
            var n = e.prototype;
            return n.qwertyDistance = function(e, n) {
                var t, r, a = {
                    q: [0, 0],
                    w: [1, 0],
                    e: [2, 0],
                    r: [3, 0],
                    t: [4, 0],
                    y: [5, 0],
                    u: [6, 0],
                    i: [7, 0],
                    o: [8, 0],
                    p: [9, 0],
                    a: [0, 1],
                    s: [1, 1],
                    d: [2, 1],
                    f: [3, 1],
                    g: [4, 1],
                    h: [5, 1],
                    j: [6, 1],
                    k: [7, 1],
                    l: [8, 1],
                    z: [0, 2],
                    x: [1, 2],
                    c: [2, 2],
                    v: [3, 2],
                    b: [4, 2],
                    n: [5, 2],
                    m: [6, 2]
                }, i = (0,
                b._)(null !== (t = a[e.toLowerCase()]) && void 0 !== t ? t : [0, 0], 2), o = i[0], s = i[1], l = (0,
                b._)(null !== (r = a[n.toLowerCase()]) && void 0 !== r ? r : [0, 0], 2);
                return Math.abs(o - l[0]) + Math.abs(s - l[1])
            }
            ,
            n.humanTypingDelaysQuertyDistance = function(e) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = 0, a = [], i = 0; i < e.length; ++i) {
                    var o = void 0;
                    if (i > 0) {
                        var s = this.qwertyDistance(e[i - 1], e[i]);
                        o = 0 === s ? this.getRandomInt(n, Math.floor(t / 2)) : 1 === s ? this.getRandomInt(n, Math.floor(2 * t / 3)) : this.getRandomInt(n, t)
                    } else
                        o = this.getRandomInt(n, t);
                    a.push(o + r),
                    r += o
                }
                return a
            }
            ,
            n.getRandomInt = function(e, n) {
                return Math.floor(Math.random() * (n - e + 1)) + e
            }
            ,
            e
        }()
          , eu = t(66958)
          , ec = t(38317)
          , ed = t(19265)
          , ef = t(38675)
          , eh = t(32787)
          , eg = t(85023)
          , em = t(97688)
          , ep = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21")
          , ev = "conversationHistory";
        function ex() {
            var e, n = (0,
            I.hz)().has(en.Ud), t = (0,
            I.Xj)().isLoading, r = (0,
            eh.kP)().session, a = null == r ? void 0 : r.accessToken, i = !n && !!a && !t, o = (0,
            ef.N)({
                queryKey: [ev],
                queryFn: function(e) {
                    var n = e.pageParam;
                    return ee.ZP.getConversations(n || 0, 28, null == r ? void 0 : r.accessToken)
                },
                getNextPageParam: function(e) {
                    var n = e.offset + e.limit;
                    return n < e.total ? n : void 0
                },
                enabled: i
            }), s = o.data, l = o.fetchNextPage, u = o.hasNextPage, c = o.isInitialLoading, d = o.isFetchingNextPage, f = o.isError, h = (0,
            C.useMemo)(function() {
                return null !== (e = null == s ? void 0 : s.pages.flatMap(function(e) {
                    return e.items
                })) && void 0 !== e ? e : []
            }, [s]);
            return {
                data: s,
                conversations: h,
                fetchNextPage: l,
                hasNextPage: u,
                isLoading: c,
                isFetchingNextPage: d,
                isError: i && f
            }
        }
        function eb() {
            var e = (0,
            w.NL)();
            return (0,
            C.useCallback)(function() {
                e.invalidateQueries([ev])
            }, [e])
        }
        function ey() {
            var e = (0,
            y._)(["flex flex-col gap-2 pb-2 text-gray-100 text-sm\n", ""]);
            return ey = function() {
                return e
            }
            ,
            e
        }
        function ej() {
            var e = (0,
            y._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n", ")}\n", ")}\n", "\n"]);
            return ej = function() {
                return e
            }
            ,
            e
        }
        function ew() {
            var e = (0,
            y._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
            return ew = function() {
                return e
            }
            ,
            e
        }
        function ek() {
            var e = (0,
            y._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
            return ek = function() {
                return e
            }
            ,
            e
        }
        function eC() {
            var e = (0,
            y._)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]);
            return eC = function() {
                return e
            }
            ,
            e
        }
        function e_() {
            var e = (0,
            y._)(["h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900"]);
            return e_ = function() {
                return e
            }
            ,
            e
        }
        function eM() {
            var e = (0,
            y._)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
            return eM = function() {
                return e
            }
            ,
            e
        }
        function eT() {
            var e = (0,
            y._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
            return eT = function() {
                return e
            }
            ,
            e
        }
        function eI() {
            var e = (0,
            y._)(["p-1 hover:text-white"]);
            return eI = function() {
                return e
            }
            ,
            e
        }
        var eN = (0,
        Y.vU)({
            historyBucketToday: {
                id: "history.bucket.today",
                defaultMessage: "Today",
                description: "Label for today's history bucket"
            },
            historyBucketYesterday: {
                id: "history.bucket.yesterday",
                defaultMessage: "Yesterday",
                description: "Label for yesterday's history bucket"
            },
            historyBucketLastSeven: {
                id: "history.bucket.lastSeven",
                defaultMessage: "Previous 7 Days",
                description: "Label for the history bucket of the previous 7 days"
            },
            historyBucketLastThirty: {
                id: "history.bucket.lastThirty",
                defaultMessage: "Previous 30 Days",
                description: "Label for the history bucket of the previous 30 days"
            },
            unableToLoadHistory: {
                id: "history.unableToLoad",
                defaultMessage: "Unable to load history",
                description: "Error message when history fails to load"
            },
            retryButton: {
                id: "history.retryButton",
                defaultMessage: "Retry",
                description: "Button to retry loading history"
            },
            showMoreButton: {
                id: "history.showMoreButton",
                defaultMessage: "Show more",
                description: "Button to show more history items"
            }
        })
          , eP = {
            initial: function(e) {
                return e.isNew ? {
                    opacity: 0,
                    height: 0,
                    overflow: "hidden"
                } : {}
            },
            animate: function() {
                return {
                    opacity: 1,
                    height: "auto"
                }
            },
            exit: function() {
                return {
                    opacity: 0,
                    height: 0
                }
            }
        };
        function eS(e) {
            var n, t, r, a, i, o, s = e.activeId, l = e.onNewThread, u = e.setActiveRequests, c = (0,
            X.Z)(), d = (0,
            b._)((0,
            C.useState)(!1), 2), f = d[0], h = d[1], g = (0,
            b._)((0,
            C.useState)(0), 2), m = g[0], p = g[1], x = (0,
            ea.Z)(), y = ex(), w = y.conversations, k = y.hasNextPage, _ = y.fetchNextPage, M = y.isLoading, T = y.isFetchingNextPage, N = y.isError, P = (0,
            I.hz)().has(en.DY), S = (0,
            C.useRef)(null), Z = (0,
            C.useCallback)(function(e) {
                var n;
                P && !M && null != e && (null === (n = S.current) || void 0 === n || n.disconnect(),
                S.current = new IntersectionObserver(function(e) {
                    e[0].isIntersecting && k && _()
                }
                ),
                S.current.observe(e))
            }, [P, M, k, _]);
            (0,
            C.useEffect)(function() {
                return function() {
                    var e;
                    null === (e = S.current) || void 0 === e || e.disconnect()
                }
            }, []);
            var R = eb();
            n = (0,
            C.useRef)(!!eg.m.getItem(ep)),
            r = (t = ex()).data,
            a = t.isError,
            (0,
            C.useEffect)(function() {
                var e, t;
                a || (null == r ? void 0 : null === (e = r.pages) || void 0 === e ? void 0 : null === (t = e[0]) || void 0 === t ? void 0 : t.has_missing_conversations) !== !0 || n.current || em.m.warning("We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.", {
                    duration: 0,
                    hasCloseButton: !0,
                    onRemove: function() {
                        eg.m.setItem(ep, !0),
                        n.current = !0
                    }
                })
            }, [null == r ? void 0 : r.pages, a]);
            var D = (i = (0,
            C.useRef)(),
            o = (0,
            C.useRef)(),
            ((0,
            C.useEffect)(function() {
                i.current = o.current,
                o.current = w
            }, [w]),
            w === o.current) ? i.current : o.current);
            (0,
            C.useEffect)(function() {
                x(function() {
                    p(m + 1)
                }, (0,
                q.Z)((0,
                U.Z)(), Date.now()) + 1e3)
            }, [m, x]);
            var F = 0 === w.length
              , A = (0,
            C.useMemo)(function() {
                return w.reduce(function(e, n) {
                    var t, r, a = new Date(null !== (r = null !== (t = n.update_time) && void 0 !== t ? t : n.create_time) && void 0 !== r ? r : 0), i = (0,
                    O.Z)(new Date, a);
                    if (0 === i)
                        e.recent.today.items.push(n);
                    else if (i <= 1)
                        e.recent.yesterday.items.push(n);
                    else if (i <= 7)
                        e.recent.lastSeven.items.push(n);
                    else if (i <= 30)
                        e.recent.lastThirty.items.push(n);
                    else if ((0,
                    V.Z)(a)) {
                        var o = (0,
                        H.Z)(a)
                          , s = (0,
                        z.Z)(a)
                          , l = "".concat(o, "-").concat(s);
                        e.dynamicMonths[l] ? e.dynamicMonths[l].items.push(n) : e.dynamicMonths[l] = {
                            label: c.formatDate(a, {
                                month: "long"
                            }),
                            items: [n]
                        }
                    } else {
                        var u = (0,
                        H.Z)(a)
                          , d = "".concat(u, "-");
                        e.dynamicYears[d] ? e.dynamicYears[d].items.push(n) : e.dynamicYears[d] = {
                            label: c.formatDate(a, {
                                year: "numeric"
                            }),
                            items: [n]
                        }
                    }
                    return e
                }, {
                    recent: {
                        today: {
                            label: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, eN.historyBucketToday)),
                            items: []
                        },
                        yesterday: {
                            label: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, eN.historyBucketYesterday)),
                            items: []
                        },
                        lastSeven: {
                            label: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, eN.historyBucketLastSeven)),
                            items: []
                        },
                        lastThirty: {
                            label: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, eN.historyBucketLastThirty)),
                            items: []
                        }
                    },
                    dynamicMonths: {},
                    dynamicYears: {}
                })
            }, [m, w]);
            return (0,
            j.jsxs)(eZ, {
                $centered: M || N && F,
                children: [F && M && (0,
                j.jsx)(ed.Z, {
                    className: "m-auto"
                }), F && N && (0,
                j.jsxs)("div", {
                    className: "p-3 text-center italic text-gray-500",
                    children: [(0,
                    j.jsx)(K.Z, (0,
                    v._)({}, eN.unableToLoadHistory)), !f && (0,
                    j.jsx)("div", {
                        className: "mt-1",
                        children: (0,
                        j.jsx)(eu.z, {
                            as: "button",
                            color: "dark",
                            size: "small",
                            className: "m-auto mt-2",
                            onClick: function() {
                                h(!0),
                                R()
                            },
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, eN.retryButton))
                        })
                    })]
                }), !M && (0,
                j.jsx)("div", {
                    children: (0,
                    j.jsx)(G.M, {
                        initial: !1,
                        children: [A.recent, A.dynamicMonths, A.dynamicYears].flatMap(function(e, n) {
                            return (0,
                            j.jsx)("span", {
                                children: Object.entries(e).map(function(e) {
                                    var n = (0,
                                    b._)(e, 2)
                                      , t = n[0]
                                      , r = n[1]
                                      , a = r.items
                                      , i = r.label;
                                    if ("today" !== t && !a.length)
                                        return null;
                                    var o = !!a.find(function(e) {
                                        var n;
                                        return w.length > 0 && e.id === (null === (n = w[0]) || void 0 === n ? void 0 : n.id)
                                    });
                                    return (0,
                                    j.jsxs)(W.E.div, {
                                        className: "relative",
                                        layoutId: "bucket-".concat(t),
                                        layout: "position",
                                        initial: {
                                            height: 0,
                                            opacity: 1,
                                            position: "relative"
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                duration: .2,
                                                ease: "easeIn"
                                            }
                                        },
                                        children: [a.length > 0 && (0,
                                        j.jsx)(W.E.div, {
                                            className: (0,
                                            B.Z)("sticky top-0", o ? "z-[16]" : "z-[14]"),
                                            layoutId: "bucketTitle-".concat(t),
                                            layout: "position",
                                            children: (0,
                                            j.jsx)(eL, {
                                                children: i
                                            })
                                        }), (0,
                                        j.jsx)("ol", {
                                            children: a.map(function(e, n) {
                                                var t = s === e.id
                                                  , r = null == D ? void 0 : D.find(function(n) {
                                                    return n.id === e.id
                                                });
                                                return (0,
                                                j.jsx)(W.E.li, {
                                                    className: (0,
                                                    B.Z)("relative", o && 0 === n ? "z-[15]" : ""),
                                                    layoutId: "".concat(e.id),
                                                    layout: "position",
                                                    custom: {
                                                        isNew: !r
                                                    },
                                                    variants: eP,
                                                    initial: "initial",
                                                    animate: "animate",
                                                    exit: "exit",
                                                    children: (0,
                                                    j.jsx)(eR, {
                                                        id: e.id,
                                                        title: e.title,
                                                        active: t,
                                                        onNewThread: l,
                                                        setActiveRequests: u,
                                                        forwardRef: k && w[w.length - 5 - 1].id === e.id ? Z : void 0
                                                    })
                                                }, "history-item-".concat(e.id))
                                            })
                                        })]
                                    }, t)
                                })
                            }, "category-".concat(n))
                        })
                    })
                }), P ? T && (0,
                j.jsx)("div", {
                    className: "m-4 mb-5 flex justify-center",
                    children: (0,
                    j.jsx)(ed.Z, {})
                }) : (0,
                j.jsx)(j.Fragment, {
                    children: k && (0,
                    j.jsx)(eu.z, {
                        as: "button",
                        onClick: function() {
                            return _()
                        },
                        color: "dark",
                        className: "m-auto mb-2",
                        size: "small",
                        loading: T,
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, eN.showMoreButton))
                    })
                })]
            })
        }
        var eZ = _.Z.div(ey(), function(e) {
            return e.$centered && "h-full justify-center items-center"
        });
        function eR(e) {
            var n = e.id
              , t = e.title
              , r = e.active
              , a = e.onNewThread
              , i = e.forwardRef
              , o = e.setActiveRequests
              , s = (0,
            et.w$)()
              , l = (0,
            M.WS)()
              , u = (0,
            k.useRouter)()
              , c = (0,
            b._)((0,
            C.useState)(!1), 2)
              , d = c[0]
              , f = c[1]
              , h = (0,
            C.useRef)(null)
              , g = (0,
            b._)((0,
            C.useState)(!1), 2)
              , m = g[0]
              , p = g[1]
              , v = (0,
            I.hz)().has("shareable_links") && r
              , x = eb()
              , y = (0,
            C.useCallback)(function(e) {
                var r, a;
                if (null == e || e.preventDefault(),
                f(!1),
                (null === (r = h.current) || void 0 === r ? void 0 : r.value) && (null === (a = h.current) || void 0 === a ? void 0 : a.value) !== t) {
                    var i = h.current.value;
                    ee.ZP.patchConversation(n, {
                        title: i
                    }),
                    N.tQ.setTitle(n, i, N._L.User),
                    l(T.s6.renameThread, {
                        threadId: n,
                        content: i
                    }),
                    x()
                }
            }, [l, n, x, t])
              , w = (0,
            C.useCallback)(function(e) {
                "Enter" === e.key && y()
            }, [y])
              , _ = (0,
            C.useCallback)(function() {
                ee.ZP.patchConversation(n, {
                    is_visible: !1
                }).then(function() {
                    x()
                }),
                a()
            }, [n, a, x])
              , P = (0,
            C.useCallback)(function(e) {
                D.abortAllAndReset(),
                o(new Set),
                e.preventDefault(),
                l(T.s6.loadThread, {
                    threadId: n
                }),
                u.push("/c/".concat(n), void 0, {
                    shallow: !0
                })
            }, [l, n, u, o])
              , S = er(n, t, r)
              , Z = S.resolvedTitle
              , R = S.isTypingEffect;
            if (d)
                return (0,
                j.jsxs)(eF, {
                    $active: r,
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.IC0,
                        className: "flex-shrink-0"
                    }), (0,
                    j.jsx)(eA, {
                        ref: h,
                        type: "text",
                        defaultValue: null != Z ? Z : "",
                        autoFocus: !0,
                        onKeyDown: w,
                        className: "mr-0",
                        onBlur: y
                    }), (0,
                    j.jsxs)(eO, {
                        $active: !0,
                        children: [(0,
                        j.jsx)(eq, {
                            onClick: y,
                            children: (0,
                            j.jsx)(ec.ZP, {
                                icon: J.UgA
                            })
                        }), (0,
                        j.jsx)(eq, {
                            onClick: function(e) {
                                e.preventDefault(),
                                f(!1)
                            },
                            children: (0,
                            j.jsx)(ec.ZP, {
                                icon: J.q5L
                            })
                        })]
                    })]
                });
            var F = R && r && s;
            return (0,
            j.jsxs)(eD, {
                onClick: r ? $() : P,
                $active: r,
                $sharing: v,
                className: (0,
                B.Z)("group", F && "animate-flash"),
                ref: i,
                children: [(0,
                j.jsx)(ec.ZP, {
                    icon: m ? J.Ybf : J.IC0
                }), (0,
                j.jsxs)(eE, {
                    children: [F ? (0,
                    j.jsx)(es, {
                        text: null != Z ? Z : ""
                    }) : m ? 'Delete "'.concat(Z, '"?') : Z, (!R || !r) && (0,
                    j.jsx)(eB, {
                        $active: r
                    })]
                }), m && (0,
                j.jsxs)(eO, {
                    $active: !0,
                    children: [(0,
                    j.jsx)(eq, {
                        onClick: _,
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.UgA
                        })
                    }), (0,
                    j.jsx)(eq, {
                        onClick: function() {
                            p(!1)
                        },
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.q5L
                        })
                    })]
                }), r && !m && (0,
                j.jsxs)(eO, {
                    $active: r,
                    children: [(0,
                    j.jsx)(eq, {
                        onClick: function(e) {
                            e.preventDefault(),
                            f(!0)
                        },
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.Nte
                        })
                    }), v && (0,
                    j.jsx)(eq, {
                        onClick: function(e) {
                            e.preventDefault(),
                            E.openSharingModal(n)
                        },
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.A8q
                        })
                    }), (0,
                    j.jsx)(eq, {
                        onClick: function() {
                            return p(!0)
                        },
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.Ybf
                        })
                    })]
                })]
            })
        }
        var eD = _.Z.a(ej(), function(e) {
            var n = e.$active
              , t = e.$sharing;
            return n && t ? "pr-[4.5rem]" : ""
        }, function(e) {
            var n = e.$active
              , t = e.$sharing;
            return n && !t ? "pr-14" : ""
        }, function(e) {
            return e.$active ? "bg-gray-800 hover:bg-gray-800" : "hover:pr-4 bg-gray-900"
        })
          , eF = _.Z.div(ew(), function(e) {
            return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "bg-gray-900"
        })
          , eA = _.Z.input(ek())
          , eE = _.Z.div(eC())
          , eL = _.Z.h3(e_())
          , eB = _.Z.div(eM(), function(e) {
            return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
        })
          , eO = _.Z.div(eT(), function(e) {
            return e.$active ? "visible" : "invisible group-hover:visible"
        })
          , eq = _.Z.button(eI())
          , eU = t(71209)
          , ez = t(9849)
          , eH = t(40638)
          , eV = t(24760)
          , eG = t(37812)
          , eW = t(87316)
          , eQ = t(53086)
          , e$ = t(54887)
          , eJ = t.n(e$)
          , eY = t(13002);
        function eX(e) {
            var n = e.url
              , t = e.name
              , r = e.size
              , a = e.large
              , i = e.className;
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("relative", i),
                style: {
                    width: r,
                    height: r
                },
                children: [(0,
                j.jsx)("img", {
                    src: n,
                    alt: "".concat(t, " logo"),
                    className: (0,
                    B.Z)("h-full w-full bg-white", a ? "rounded-[5px]" : "rounded-sm")
                }), (0,
                j.jsx)("div", {
                    className: (0,
                    B.Z)("absolute inset-0 ring-1 ring-inset ring-black/10", a ? "rounded-[5px]" : "rounded-sm")
                })]
            })
        }
        function eK() {
            var e = (0,
            y._)(["relative p-1 ", " text-white flex items-center justify-center"]);
            return eK = function() {
                return e
            }
            ,
            e
        }
        function e0() {
            var e = (0,
            y._)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ", "\n  ", "\n"]);
            return e0 = function() {
                return e
            }
            ,
            e
        }
        function e1() {
            var e = (0,
            y._)(["text-white flex justify-center items-center relative tracking-widest"]);
            return e1 = function() {
                return e
            }
            ,
            e
        }
        function e2() {
            var e = (0,
            y._)(["relative flex"]);
            return e2 = function() {
                return e
            }
            ,
            e
        }
        var e3 = _.Z.div(eK(), function(e) {
            return e.$isMessageRedesign ? "rounded-full h-7 w-7" : "rounded-sm h-[30px] w-[30px]"
        })
          , e5 = _.Z.span(e0(), function(e) {
            return "warning" === e.$type && "bg-orange-500 text-white"
        }, function(e) {
            return "danger" === e.$type && "bg-red-500 text-white"
        })
          , e4 = function(e) {
            var n = e.iconName
              , t = e.background
              , r = e.notice
              , a = (0,
            I.hz)().has(en.FZ)
              , i = ec.nI;
            switch (n) {
            case "globe":
                i = J.RsK;
                break;
            case "terminal":
                i = J.cDN;
                break;
            case "text":
                i = J.RUS;
                break;
            case "browsing":
                i = J.jRj;
                break;
            case "code":
                i = eY.oT$;
                break;
            case "plugin":
                i = J.yG
            }
            return (0,
            j.jsxs)(e3, {
                $isMessageRedesign: a,
                style: {
                    backgroundColor: t
                },
                children: [(0,
                j.jsx)(ec.ZP, {
                    icon: i,
                    size: "medium",
                    className: a ? "!h-5 !w-5" : ""
                }), r && (0,
                j.jsx)(e5, {
                    $type: r,
                    children: "!"
                })]
            })
        }
          , e6 = function(e) {
            var n = e.plugin
              , t = e.notice
              , r = (0,
            I.hz)().has(en.FZ);
            return (0,
            j.jsxs)(e3, {
                $isMessageRedesign: r,
                className: "p-0",
                children: [(0,
                j.jsx)(eX, {
                    url: n.manifest.logo_url,
                    name: n.manifest.name_for_human,
                    size: "100%"
                }), t && (0,
                j.jsx)(e5, {
                    $type: t,
                    children: "!"
                })]
            })
        }
          , e8 = _.Z.div(e1())
          , e7 = _.Z.div(e2())
          , e9 = {
            small: 20,
            redesign: 28,
            medium: 38
        }
          , ne = function(e) {
            var n, t = e.user, r = e.size, a = e.notice, i = e.backgroundColorForInitials, o = a && (0,
            j.jsx)(e5, {
                $type: a,
                children: "!"
            }), s = (0,
            I.hz)().has(en.FZ);
            if ((null == t ? void 0 : t.picture) != null)
                return (0,
                j.jsxs)(e7, {
                    children: [(0,
                    j.jsx)(eJ(), {
                        src: t.picture,
                        alt: "User",
                        width: e9[r],
                        height: e9[r],
                        className: s ? "rounded-full" : "rounded-sm"
                    }), o]
                });
            var l = (null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "").split(" ").map(function(e) {
                return e[0]
            }).join("");
            return (0,
            j.jsxs)(e8, {
                className: (0,
                B.Z)("redesign" === r ? "h-7 w-7 text-xs" : "small" === r ? "h-5 w-5 text-xs" : "h-[30px] w-[30px] text-lg", s ? "rounded-full" : "rounded-sm"),
                style: {
                    backgroundColor: null != i ? i : "#5436DA"
                },
                children: [l || (0,
                j.jsx)(ec.ZP, {
                    icon: J.fzv,
                    size: "redesign" === r ? "small" : r
                }), o]
            })
        };
        function nn(e) {
            var n = e.children;
            return (0,
            j.jsx)(eH.u, {
                as: C.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                children: n
            })
        }
        var nt = t(24396)
          , nr = t(2827)
          , na = t(55041)
          , ni = (0,
        Y.vU)({
            profilePlaceholder: {
                id: "profile.myprofile.placeholder",
                defaultMessage: "• Where I live: San Francisco\n• My native language is: English\n• What I do for work: Researcher at OpenAI\n• What I do for fun: Hiking, music, and cooking\n• Preferred communication style: concise, simple language\n• I'd like ChatGPT to be: a helpful assistant",
                description: "placeholder for my profile textarea"
            },
            save: {
                id: "profile.myprofile.save",
                defaultMessage: "Save",
                description: "save button for my profile modal"
            },
            close: {
                id: "profile.myprofile.close",
                defaultMessage: "Close",
                description: "close button for my profile modal"
            },
            helpText: {
                id: "profile.myprofile.helptext",
                defaultMessage: "Add any information that you’d like ChatGPT to remember about you and your preferences.",
                description: "help text for my profile modal"
            },
            profileTitle: {
                id: "profile.myprofile.title",
                defaultMessage: "My Profile",
                description: "title for my profile modal"
            }
        })
          , no = (0,
        P.ZP)(function() {
            return {
                isProfileModalOpen: !1,
                userMessage: ""
            }
        })
          , ns = {
            setIsProfileModalOpen: function(e) {
                no.setState({
                    isProfileModalOpen: e
                })
            },
            setUserMessage: function(e) {
                no.setState({
                    userMessage: e
                })
            }
        };
        function nl() {
            var e = no()
              , n = e.isProfileModalOpen
              , t = e.userMessage
              , r = (0,
            C.useCallback)(function() {
                ns.setIsProfileModalOpen(!1)
            }, [])
              , a = (0,
            eh.kP)()
              , i = a.session
              , o = a.loading
              , s = (0,
            C.useCallback)(function() {
                ee.ZP.createOrUpdateUserSystemMessage((null == i ? void 0 : i.accessToken) || "", t),
                ns.setIsProfileModalOpen(!1)
            }, [t, i])
              , l = (0,
            I.hz)();
            (0,
            nt.a)([null == i ? void 0 : i.accessToken], function() {
                return ee.ZP.getUserSystemMessage((null == i ? void 0 : i.accessToken) || "")
            }, {
                enabled: !!(!o && (null == i ? void 0 : i.accessToken) && l.has("system_message2")),
                onSuccess: function(e) {
                    (null == e ? void 0 : e.data) && ns.setUserMessage(e.data)
                },
                onError: function() {
                    em.m.danger("Failed to get the profile")
                }
            });
            var u = (0,
            X.Z)();
            return (0,
            j.jsxs)(na.ZP, {
                isOpen: n,
                onModalClose: function() {
                    ns.setIsProfileModalOpen(!1)
                },
                type: "success",
                title: u.formatMessage(ni.profileTitle),
                closeButton: (0,
                j.jsx)(na.ol, {
                    onClose: r
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    onClick: r,
                    children: (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, ni.close))
                }),
                primaryButton: (0,
                j.jsx)(na.mH, {
                    onClick: s,
                    color: "primary",
                    children: (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, ni.save))
                }),
                children: [(0,
                j.jsx)("p", {
                    className: "text-muted pb-4 pt-2",
                    children: (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, ni.helpText))
                }), (0,
                j.jsx)(nr.ZP, {
                    className: "w-full rounded border-gray-300 p-4 placeholder:text-gray-300  dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                    rows: 8,
                    placeholder: u.formatMessage(ni.profilePlaceholder),
                    value: t,
                    onChange: function(e) {
                        return ns.setUserMessage(e.target.value)
                    }
                })]
            })
        }
        var nu = t(181)
          , nc = t(13451)
          , nd = t(86546)
          , nf = t(21437)
          , nh = t(21722)
          , ng = t(39889)
          , nm = t(14412);
        function np() {
            var e, n, t = (0,
            k.useRouter)(), r = (0,
            eh.kP)().session, a = (null == r ? void 0 : null === (e = r.user) || void 0 === e ? void 0 : e.idp) === "auth0", i = !!(null == r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : n.mfa), o = (0,
            b._)((0,
            C.useState)(!1), 2), s = o[0], l = o[1], u = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e;
                return (0,
                ng.Jh)(this, function(n) {
                    if (e = new URL(t.asPath,window.location.origin).toString(),
                    !a)
                        throw Error("Only username/password users can enable MFA");
                    if (!r)
                        throw Error("No session found, cannot enable MFA");
                    if ("mocked" === r.authProvider)
                        throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                    return (0,
                    nm.signIn)(r.authProvider, {
                        callbackUrl: e
                    }, (0,
                    v._)({
                        prompt: "login"
                    }, r.authProvider === eh.Ho.OpenAI ? {
                        login_hint: (0,
                        eh.W_)({
                            oai_enforce_mfa: !0,
                            idp: "openai"
                        })
                    } : {
                        oai_enforce_mfa: "true"
                    })),
                    [2]
                })
            }), [t.asPath, r, a]), c = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e;
                return (0,
                ng.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        if (!a)
                            throw Error("Only username/password users can disable MFA");
                        if (!r)
                            throw Error("No session found, cannot enable MFA");
                        if ("mocked" === r.authProvider)
                            throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                        return l(!0),
                        [4, ee.ZP.deleteMfa()];
                    case 1:
                        return n.sent(),
                        [4, (0,
                        nm.signOut)({
                            redirect: !1,
                            callbackUrl: "/auth/login?next=".concat(encodeURIComponent(t.asPath))
                        })];
                    case 2:
                        return e = n.sent(),
                        l(!1),
                        t.push(e.url),
                        [2]
                    }
                })
            }), [a, t, r]);
            return {
                setupMfa: u,
                isUsernamePassword: a,
                isLoggedInWithMfa: i,
                removeMfa: c,
                isLoading: s
            }
        }
        function nv() {
            var e = (0,
            y._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
            return nv = function() {
                return e
            }
            ,
            e
        }
        var nx = C.forwardRef(function(e, n) {
            var t = e.name
              , r = e.placeholder
              , a = e.type
              , i = e.displayName
              , o = e.onChange
              , s = e.onBlur
              , l = e.value
              , u = e.saveOnBlur
              , c = e.icon
              , d = e.onInputIconClick
              , f = e.className
              , h = e.autoComplete
              , g = e.autoFocus
              , m = e.onPressEnter
              , p = (0,
            b._)((0,
            C.useState)(l), 2)
              , x = p[0]
              , y = p[1]
              , w = (0,
            C.useCallback)(function(e) {
                null == s || s(e),
                u && y(e.target.value)
            }, [s, u])
              , k = (0,
            C.useCallback)(function(e) {
                null == o || o(e),
                u && y(e.target.value)
            }, [o, u])
              , _ = (0,
            C.useCallback)(function(e) {
                "Enter" === e.key && m && (e.preventDefault(),
                m())
            }, [m]);
            (0,
            C.useEffect)(function() {
                y(l)
            }, [l]);
            var M = (0,
            v._)({}, u ? {} : {
                value: l
            }, u ? {
                value: x
            } : {});
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", f),
                children: [(0,
                j.jsx)("label", {
                    htmlFor: t,
                    className: "block text-xs font-medium text-gray-900 dark:text-gray-100",
                    children: i
                }), (0,
                j.jsxs)("div", {
                    className: (0,
                    B.Z)(i && "mt-1", "relative"),
                    children: [(0,
                    j.jsx)("input", (0,
                    v._)({
                        ref: n,
                        type: a,
                        name: t,
                        id: t,
                        className: (0,
                        B.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", c && "pr-6"),
                        placeholder: r,
                        onBlur: w,
                        onChange: k,
                        onKeyDown: _,
                        autoComplete: h,
                        autoFocus: g
                    }, M)), c && (0,
                    j.jsx)(nb, {
                        onClick: d,
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: c
                        })
                    })]
                })]
            })
        })
          , nb = _.Z.button(nv())
          , ny = t(16681);
        function nj(e) {
            var n = e.onChange
              , t = e.enabled
              , r = e.label
              , a = e.disabled
              , i = (0,
            C.useCallback)(function() {
                n(!t)
            }, [t, n]);
            return (0,
            j.jsx)(ny.fC, {
                checked: t,
                disabled: a,
                onCheckedChange: i,
                "aria-label": r,
                className: (0,
                B.Z)(a && "cursor-not-allowed opacity-30", "bg-gray-200 radix-state-checked:bg-green-600", "relative h-[25px] w-[42px] cursor-pointer rounded-full"),
                children: (0,
                j.jsx)(ny.bU, {
                    className: (0,
                    B.Z)("block h-[21px] w-[21px] rounded-full", "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]", "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]")
                })
            })
        }
        var nw = t(57311);
        function nk() {
            var e = (0,
            y._)(["flex ml-auto gap-2"]);
            return nk = function() {
                return e
            }
            ,
            e
        }
        function nC(e) {
            var n = e.buttonText
              , t = e.onCopy
              , r = e.className
              , a = (0,
            b._)((0,
            C.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = eo()
              , l = (0,
            C.useCallback)(function() {
                t(),
                o(!0),
                setTimeout(function() {
                    s() && o(!1)
                }, 2e3)
            }, [s, t]);
            return (0,
            j.jsxs)(j.Fragment, {
                children: [!i && (0,
                j.jsxs)(n_, {
                    onClick: l,
                    className: r,
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.j4u
                    }), n]
                }), i && (0,
                j.jsxs)(n_, {
                    className: r,
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.UgA
                    }), n && "Copied!"]
                })]
            })
        }
        var n_ = _.Z.button(nk());
        function nM(e) {
            var n = e.children
              , t = e.sidebarOpen
              , r = e.onClose;
            return (0,
            j.jsx)(eH.u.Root, {
                show: t,
                as: C.Fragment,
                children: (0,
                j.jsxs)(eV.V, {
                    as: "div",
                    className: "relative z-10",
                    onClose: r,
                    children: [(0,
                    j.jsx)("div", {
                        className: "fixed inset-0"
                    }), (0,
                    j.jsx)("div", {
                        className: "fixed inset-0 overflow-hidden",
                        children: (0,
                        j.jsx)("div", {
                            className: "absolute inset-0 overflow-hidden",
                            children: (0,
                            j.jsx)("div", {
                                className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                                children: (0,
                                j.jsx)(eH.u.Child, {
                                    as: C.Fragment,
                                    enter: "transform transition ease-in-out duration-100 sm:duration-300",
                                    enterFrom: "translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "translate-x-full",
                                    children: (0,
                                    j.jsx)(eV.V.Panel, {
                                        className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                                        children: (0,
                                        j.jsx)("div", {
                                            className: "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                                            children: n
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            })
        }
        var nT = t(57924);
        function nI() {
            var e = (0,
            y._)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-800"]);
            return nI = function() {
                return e
            }
            ,
            e
        }
        function nN() {
            var e = (0,
            y._)(["whitespace-pre-wrap text-sm"]);
            return nN = function() {
                return e
            }
            ,
            e
        }
        function nP() {
            var e = (0,
            y._)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200"]);
            return nP = function() {
                return e
            }
            ,
            e
        }
        function nS(e) {
            var n = e.children
              , t = e.title
              , r = e.icon
              , a = e.isOpen
              , i = e.slideOver
              , o = e.onClose
              , s = (0,
            j.jsxs)(nD, {
                children: [(0,
                j.jsxs)("div", {
                    className: "flex items-start justify-between",
                    children: [(0,
                    j.jsxs)("div", {
                        className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                        children: [(0,
                        j.jsx)(ec.ZP, {
                            icon: r
                        }), t]
                    }), (0,
                    j.jsx)("div", {
                        className: "mr-2 mt-2 flex h-7 items-center",
                        children: (0,
                        j.jsxs)("button", {
                            type: "button",
                            className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                            onClick: o,
                            children: [(0,
                            j.jsx)("span", {
                                className: "sr-only",
                                children: "Close sidebar"
                            }), (0,
                            j.jsx)(ec.ZP, {
                                icon: J.q5L,
                                size: "medium",
                                "aria-hidden": "true"
                            })]
                        })
                    })]
                }), n]
            });
            return i ? (0,
            j.jsx)(nM, {
                sidebarOpen: a,
                onClose: o,
                children: s
            }) : a ? s : null
        }
        function nZ(e) {
            var n = e.clientThreadId
              , t = e.currentLeafId
              , r = e.isOpen
              , a = e.slideOver
              , i = e.onClose
              , o = (0,
            N.u9)(n, t)
              , s = (0,
            b._)((0,
            C.useState)(), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            I.hz)()
              , d = (0,
            C.useCallback)(function() {
                u(void 0)
            }, [])
              , f = (0,
            C.useCallback)(function() {
                var e = N.tQ.getTree(n);
                navigator.clipboard.writeText(e.getTextFromThread(t))
            }, [t, n]);
            if (!c.has("debug"))
                return null;
            var h = o.map(function(e, n) {
                var t = e.author
                  , r = t.role
                  , a = t.name;
                return (0,
                j.jsxs)(nA, {
                    role: "button",
                    onClick: function() {
                        return u(n)
                    },
                    children: [(0,
                    j.jsxs)("div", {
                        className: "text-xs font-medium uppercase text-gray-400",
                        children: [r, a && a !== r && " (".concat(a, ")"), " -> ", nw.Cv.getRecipientFromMessage(e)]
                    }), (0,
                    j.jsx)("div", {
                        children: nw.Cv.getTextFromMessage(e)
                    })]
                }, e.id)
            });
            return (0,
            j.jsxs)(nS, {
                icon: J.cDN,
                title: "Debug",
                isOpen: r,
                slideOver: a,
                onClose: i,
                children: [(0,
                j.jsxs)("div", {
                    className: "flex items-center justify-between border-y bg-gray-100 px-4 py-1 text-xs font-medium uppercase text-gray-700",
                    children: ["Conversation messages", (0,
                    j.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0,
                        j.jsx)(nT.u, {
                            label: "Copy conversation text to clipboard",
                            children: (0,
                            j.jsx)(nC, {
                                onCopy: f
                            })
                        }), (0,
                        j.jsx)(nT.u, {
                            label: "Download raw conversation",
                            children: (0,
                            j.jsx)(nR, {
                                clientThreadId: n,
                                messages: o
                            })
                        })]
                    })]
                }), (0,
                j.jsx)(nF, {
                    children: h
                }), void 0 !== l && (0,
                j.jsx)(na.ZP, {
                    isOpen: !0,
                    onModalClose: d,
                    type: "success",
                    children: (0,
                    j.jsx)("pre", {
                        className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                        children: JSON.stringify(o[l], null, 2)
                    })
                }, "DebugMessageModal-".concat(l))]
            })
        }
        function nR(e) {
            var n = e.clientThreadId
              , t = e.messages
              , r = (0,
            C.useCallback)(function() {
                var e = JSON.stringify(t) + "\n"
                  , r = new Blob([e],{
                    type: "application/json"
                })
                  , a = URL.createObjectURL(r)
                  , i = document.createElement("a");
                i.href = a,
                i.download = "messages-".concat(N.tQ.getServerThreadId(n), ".jsonl"),
                i.click(),
                URL.revokeObjectURL(a)
            }, [n, t]);
            return (0,
            j.jsx)("button", {
                onClick: r,
                children: (0,
                j.jsx)(ec.ZP, {
                    icon: J._hL
                })
            })
        }
        var nD = _.Z.div(nI())
          , nF = _.Z.pre(nN())
          , nA = _.Z.div(nP());
        function nE(e) {
            var n = e.plugin
              , t = n.manifest.name_for_human;
            return (0,
            j.jsxs)("div", {
                className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
                children: [(0,
                j.jsx)(eX, {
                    url: n.manifest.logo_url,
                    name: t,
                    size: 32,
                    className: "flex-shrink-0"
                }), (0,
                j.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [(0,
                    j.jsx)("h2", {
                        className: "align-top text-base font-medium",
                        children: t
                    }), (0,
                    j.jsx)("div", {
                        className: "text-sm",
                        children: n.manifest.description_for_human
                    })]
                })]
            })
        }
        function nL(e) {
            var n = e.manifestValidationInfo
              , t = (0,
            x._)(e, ["manifestValidationInfo"])
              , r = n.manifest_dict
              , a = n.warnings
              , i = n.errors;
            return (0,
            j.jsx)(nq, (0,
            v._)({
                name: "manifest",
                content: r,
                warnings: a,
                errors: i
            }, t))
        }
        function nB(e) {
            var n = e.apiValidationInfo
              , t = (0,
            x._)(e, ["apiValidationInfo"])
              , r = n.openapi_spec_dict
              , a = n.warnings
              , i = n.errors;
            return (0,
            j.jsx)(nq, (0,
            v._)({
                name: "OpenAPI spec",
                content: r,
                warnings: a,
                errors: i
            }, t))
        }
        function nO(e) {
            var n = e.apiValidationInfo
              , t = (0,
            x._)(e, ["apiValidationInfo"])
              , r = n.api_typescript;
            return r ? (0,
            j.jsx)(nU, (0,
            v._)({
                text: "Prompt for ChatGPT",
                content: r
            }, t)) : null
        }
        function nq(e) {
            var n = e.name
              , t = e.content
              , r = e.warnings
              , a = e.errors
              , i = (0,
            x._)(e, ["name", "content", "warnings", "errors"])
              , o = r && r.length > 0
              , s = a && a.length > 0
              , l = "Validated ".concat(n)
              , u = (0,
            j.jsx)(ec.ZP, {
                icon: J.UgA,
                className: "text-green-500"
            });
            return s ? (l = "Errors in ".concat(n),
            u = (0,
            j.jsx)(ec.ZP, {
                icon: J.q5L,
                className: "text-red-500"
            })) : o && (l = "Warnings in ".concat(n),
            u = (0,
            j.jsx)(ec.ZP, {
                icon: J.bcx,
                className: "text-yellow-500"
            })),
            (0,
            j.jsx)(nU, (0,
            v._)({
                icon: u,
                text: l,
                content: t,
                warnings: r,
                errors: a
            }, i))
        }
        function nU(e) {
            var n = e.icon
              , t = e.text
              , r = e.content
              , a = e.warnings
              , i = e.errors
              , o = e.expanded
              , s = e.onChangeExpanded
              , l = (0,
            b._)((0,
            C.useState)(!1), 2)
              , u = l[0]
              , c = l[1]
              , d = null != o ? o : u
              , f = (0,
            C.useCallback)(function() {
                s ? s(!d) : c(function(e) {
                    return !e
                })
            }, [d, s]);
            return (0,
            j.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: [(0,
                j.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [n && (0,
                    j.jsx)("div", {
                        children: n
                    }), (0,
                    j.jsx)("div", {
                        children: t
                    }), (0,
                    j.jsx)("div", {
                        role: "button",
                        className: "cursor-pointer text-gray-500 hover:text-gray-700",
                        onClick: f,
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: d ? J.rH8 : J.bTu
                        })
                    })]
                }), d && (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsxs)("div", {
                        className: "flex flex-col gap-2 font-semibold",
                        children: [i && i.map(function(e, n) {
                            return (0,
                            j.jsx)("div", {
                                className: "text-red-500",
                                children: e
                            }, n)
                        }), a && a.map(function(e, n) {
                            return (0,
                            j.jsx)("div", {
                                className: "text-yellow-500",
                                children: e
                            }, n)
                        })]
                    }), r && (0,
                    j.jsx)("pre", {
                        className: "overflow-auto whitespace-pre-wrap text-xs",
                        children: "string" == typeof r ? r : JSON.stringify(r, null, 2)
                    })]
                })]
            })
        }
        var nz = t(81949)
          , nH = t(8844)
          , nV = t(22121)
          , nG = t(69403);
        function nW() {
            return (nW = (0,
            nh._)(function(e) {
                var n;
                return (0,
                ng.Jh)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]),
                        [4, function(e) {
                            return nQ.apply(this, arguments)
                        }(e)];
                    case 1:
                        return [2, t.sent()];
                    case 2:
                        return console.error("Error making localhost plugin HTTP call", n = t.sent()),
                        [2, [{
                            id: (0,
                            nH.Z)(),
                            author: {
                                role: nG.uU.Tool,
                                name: "plugin_service"
                            },
                            content: {
                                content_type: "text",
                                parts: ["Error making localhost plugin HTTP call: ".concat(n)]
                            },
                            metadata: {
                                parent_message_id: e.parent_message_id,
                                is_complete: !0
                            },
                            recipient: "all"
                        }]];
                    case 3:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        function nQ() {
            return (nQ = (0,
            nh._)(function(e) {
                var n, t, r, a;
                function i(e) {
                    return Object.keys(e).map(function(e) {
                        return e.toLowerCase()
                    })
                }
                return (0,
                ng.Jh)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        var s;
                        if (n = {
                            "content-type": "application/json"
                        },
                        s = [i(e.headers), i(n)].flat(),
                        new Set(s).size !== s.length)
                            throw Error("Refusing to make localhost plugin HTTP call with duplicate header keys");
                        return t = e.url,
                        e.qs_params.length > 0 && (t = t + "?" + new URLSearchParams(e.qs_params)),
                        r = void 0,
                        null !== e.body && (r = JSON.stringify(e.body)),
                        [4, fetch(t, {
                            method: e.method,
                            headers: (0,
                            v._)({}, n, e.headers),
                            body: r
                        })];
                    case 1:
                        return [4, o.sent().text()];
                    case 2:
                        if (a = o.sent(),
                        "chat" === e.api_function_type)
                            return [2, [JSON.parse(a)]];
                        if ("kwargs" === e.api_function_type)
                            return [2, [{
                                id: (0,
                                nH.Z)(),
                                author: {
                                    role: nG.uU.Tool,
                                    name: "".concat(e.namespace, ".").concat(e.function_name)
                                },
                                content: {
                                    content_type: "text",
                                    parts: [a]
                                },
                                metadata: {
                                    parent_message_id: e.parent_message_id,
                                    is_complete: !0
                                },
                                recipient: "all"
                            }]];
                        throw Error("Not implemented")
                    }
                })
            })).apply(this, arguments)
        }
        function n$(e) {
            return !!nJ(e.domain)
        }
        function nJ(e) {
            return /^localhost:\d+$/.test(e) ? "http://".concat(e) : /^https?:\/\/localhost:\d+$/.test(e) ? e : null
        }
        function nY() {
            return (nY = (0,
            nh._)(function(e) {
                var n, t, r, a, i, o;
                return (0,
                ng.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        return s.trys.push([0, 3, , 4]),
                        [4, fetch(e + "/.well-known/ai-plugin.json")];
                    case 1:
                        return [4, s.sent().json()];
                    case 2:
                        return t = s.sent(),
                        [3, 4];
                    case 3:
                        return s.sent(),
                        em.m.danger("Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."),
                        [2];
                    case 4:
                        if (null == (r = null == t ? void 0 : null === (n = t.api) || void 0 === n ? void 0 : n.url))
                            return em.m.danger("Localhost manifest is missing OpenAPI spec URL."),
                            [2];
                        if ("pathname" === (a = function(e) {
                            try {
                                return new URL(e),
                                "full url"
                            } catch (n) {
                                if (e.startsWith("/"))
                                    return "pathname";
                                return "neither"
                            }
                        }(r)))
                            r = e + r;
                        else if ("neither" === a)
                            return em.m.danger("Localhost manifest OpenAPI spec URL is not a valid URL or path."),
                            [2];
                        s.label = 5;
                    case 5:
                        return s.trys.push([5, 8, , 9]),
                        [4, fetch(r)];
                    case 6:
                        return [4, s.sent().text()];
                    case 7:
                        return i = s.sent(),
                        [3, 9];
                    case 8:
                        return s.sent(),
                        em.m.danger("Failed to fetch localhost OpenAPI spec."),
                        [2];
                    case 9:
                        try {
                            o = nV.ZP.parse(i)
                        } catch (e) {}
                        try {
                            o = JSON.parse(i)
                        } catch (e) {}
                        if (null == o)
                            return em.m.danger("Failed to parse localhost OpenAPI spec as JSON or YAML."),
                            [2];
                        s.label = 10;
                    case 10:
                        return s.trys.push([10, 12, , 13]),
                        [4, ee.ZP.createOrUpdateLocalhostPlugin({
                            localhost: e,
                            manifest: t,
                            openapiSpec: o
                        })];
                    case 11:
                        return [2, s.sent()];
                    case 12:
                        return s.sent(),
                        em.m.danger("Failed to create or update localhost plugin at ".concat(e)),
                        [3, 13];
                    case 13:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        function nX(e) {
            var n = e.onSuccess
              , t = e.onError
              , r = e.onSettled
              , a = (0,
            w.NL)()
              , i = (0,
            nc.D)(ee.ZP.updatePluginUserSettings.bind(ee.ZP), {
                onSuccess: function(e) {
                    nK(e, a, ["installedAip"]),
                    n0(e, a, ["approvedAip"]),
                    n(e)
                },
                onError: t,
                onSettled: r
            }).mutate;
            return (0,
            C.useCallback)(function(e) {
                i({
                    pluginId: e,
                    isInstalled: !0
                })
            }, [i])
        }
        function nK(e, n, t) {
            n.setQueryData(t, function(n) {
                var t = (0,
                nz._)((null == n ? void 0 : n.items) || [])
                  , r = t.findIndex(function(n) {
                    return n.id === e.id
                });
                return -1 !== r ? t[r] = e : t.push(e),
                {
                    count: t.length,
                    items: t
                }
            })
        }
        function n0(e, n, t) {
            n.setQueryData(t, function(n) {
                var t = (0,
                nz._)((null == n ? void 0 : n.items) || [])
                  , r = t.findIndex(function(n) {
                    return n.id === e.id
                });
                return -1 !== r && (t[r] = e),
                {
                    count: t.length,
                    items: t
                }
            })
        }
        function n1(e) {
            var n = e.manifest.auth;
            if ("oauth" !== n.type || !e.oauth_client_id)
                return null;
            var t = new URLSearchParams({
                response_type: "code",
                client_id: e.oauth_client_id,
                redirect_uri: "".concat(window.location.origin, "/aip/").concat(e.id, "/oauth/callback"),
                scope: n.scope
            });
            return n.client_url.includes("slack.com") && (t.delete("scope"),
            t.append("user_scope", n.scope)),
            "".concat(n.client_url, "?").concat(t)
        }
        function n2() {
            var e, n = (0,
            b._)((0,
            C.useState)(!1), 2), t = n[0], r = n[1];
            return {
                fetchManifestAndSpec: (0,
                C.useCallback)((e = (0,
                nh._)(function(e) {
                    var n, t, a, i, o, s, l, u, c;
                    return (0,
                    ng.Jh)(this, function(d) {
                        switch (d.label) {
                        case 0:
                            n = e.domain,
                            t = e.manifestAccessToken,
                            a = e.onSuccess,
                            i = e.onError,
                            o = nJ(n),
                            d.label = 1;
                        case 1:
                            if (d.trys.push([1, 10, 11, 12]),
                            r(!0),
                            !(null != o))
                                return [3, 3];
                            return [4, function(e) {
                                return nY.apply(this, arguments)
                            }(o)];
                        case 2:
                            if (void 0 === (s = d.sent()))
                                return [2];
                            return a({
                                domain: o,
                                scrapeManifestResponse: {
                                    plugin: s.plugin,
                                    manifest_validation_info: s.manifest_validation_info
                                },
                                apiValidationInfo: s.api_validation_info
                            }),
                            [3, 9];
                        case 3:
                            return [4, ee.ZP.scrapePluginManifest({
                                domain: n,
                                manifestAccessToken: t
                            })];
                        case 4:
                            if (!(l = d.sent()).plugin)
                                return [3, 8];
                            d.label = 5;
                        case 5:
                            return d.trys.push([5, 7, , 8]),
                            [4, ee.ZP.getPluginApi({
                                id: l.plugin.id
                            })];
                        case 6:
                            return u = d.sent().api_validation_info,
                            [3, 8];
                        case 7:
                            return d.sent(),
                            [3, 8];
                        case 8:
                            a({
                                domain: n,
                                scrapeManifestResponse: l,
                                apiValidationInfo: u,
                                manifestAccessToken: t
                            }),
                            d.label = 9;
                        case 9:
                            return [3, 12];
                        case 10:
                            return c = d.sent(),
                            i(null != o ? c : void 0),
                            [3, 12];
                        case 11:
                            return r(!1),
                            [7];
                        case 12:
                            return [2]
                        }
                    })
                }),
                function(n) {
                    return e.apply(this, arguments)
                }
                ), []),
                isLoading: t
            }
        }
        function n3() {
            var e = (0,
            eh.kP)().session
              , n = (0,
            nf.Fl)().isPluginsAvailable
              , t = (0,
            nt.a)(["installedAip"], function() {
                return ee.ZP.getPlugins({
                    offset: 0,
                    limit: 250,
                    isInstalled: !0,
                    accessToken: null == e ? void 0 : e.accessToken
                })
            }, {
                enabled: n && !!(null == e ? void 0 : e.accessToken),
                onError: function(e) {
                    console.error(e)
                }
            })
              , r = t.data
              , a = t.isLoading;
            return (0,
            C.useMemo)(function() {
                return {
                    installedPlugins: r ? r.items : [],
                    isLoading: a
                }
            }, [r, a])
        }
        var n5 = [["www.klarna.com", "server.shop.app"], ["apim.expedia.com", "kayak.com"], ["www.redfin.com", "plugins.zillow.com"], ["instacart.com", "api.tasty.co"]]
          , n4 = "oai/enabledPluginIds"
          , n6 = (0,
        P.ZP)(function() {
            var e = Array.from(new Set(eg.m.getItem(n4)));
            return {
                enabledPluginIds: new Set(e.splice(0, 3))
            }
        });
        function n8() {
            var e = n3().installedPlugins
              , n = n6().enabledPluginIds;
            return (0,
            C.useMemo)(function() {
                return e.filter(function(e) {
                    return n.has(e.id)
                })
            }, [n, e])
        }
        function n7(e) {
            e.length > 3 || n6.setState(function() {
                return eg.m.setItem(n4, e),
                {
                    enabledPluginIds: new Set(e)
                }
            })
        }
        function n9(e) {
            n6.setState(function(n) {
                if (n.enabledPluginIds.size >= 3)
                    return n;
                var t = (0,
                nz._)(n.enabledPluginIds).concat([e]);
                return eg.m.setItem(n4, t),
                {
                    enabledPluginIds: new Set(t)
                }
            })
        }
        var te = (0,
        P.ZP)(function() {
            return {
                isOpen: !1
            }
        })
          , tn = {
            close: function() {
                te.setState({
                    isOpen: !1
                })
            },
            setIsOpen: function(e) {
                te.setState({
                    isOpen: e
                })
            }
        };
        function tt(e) {
            var n = e.slideOver
              , t = (0,
            b._)((0,
            C.useState)(), 2)
              , r = t[0]
              , a = t[1]
              , i = (0,
            b._)((0,
            C.useState)(!1), 2)
              , o = i[0]
              , s = i[1]
              , l = (0,
            b._)((0,
            C.useState)(!1), 2)
              , u = l[0]
              , c = l[1]
              , d = (0,
            b._)((0,
            C.useState)(!1), 2)
              , f = d[0]
              , h = d[1]
              , g = (0,
            eh.kP)().session
              , m = (null == g ? void 0 : g.user) != null && (0,
            eh.yl)(g.user)
              , p = (0,
            I.hz)()
              , v = (0,
            w.NL)()
              , x = te(function(e) {
                return e.isOpen
            })
              , y = n8()
              , k = n2().fetchManifestAndSpec
              , _ = (0,
            C.useMemo)(function() {
                return m ? y[0] : y.find(n$)
            }, [y, m])
              , M = (0,
            C.useCallback)((0,
            nh._)(function() {
                return (0,
                ng.Jh)(this, function(e) {
                    return _ && (a(void 0),
                    k({
                        domain: _.domain,
                        onSuccess: function(e) {
                            a({
                                manifestValidationInfo: e.scrapeManifestResponse.manifest_validation_info,
                                apiValidationInfo: e.apiValidationInfo
                            }),
                            null != e.scrapeManifestResponse.plugin && n0(e.scrapeManifestResponse.plugin, v, ["installedAip"])
                        },
                        onError: function(e) {
                            em.m.danger((null == e ? void 0 : e.message) || "Error refreshing plugin.")
                        }
                    })),
                    [2]
                })
            }), [_, v, k]);
            return ((0,
            C.useEffect)(function() {
                M()
            }, [M]),
            p.has("tools3_dev")) ? (0,
            j.jsx)(nS, {
                icon: J.V7f,
                title: "Plugin devtools",
                isOpen: x,
                slideOver: n,
                onClose: tn.close,
                children: (0,
                j.jsx)("div", {
                    className: "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                    children: null != _ ? (0,
                    j.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                        j.jsx)("div", {
                            children: (0,
                            j.jsx)(eu.z, {
                                size: "small",
                                color: "neutral",
                                onClick: M,
                                children: "Refresh plugin"
                            })
                        }), r ? (0,
                        j.jsxs)(j.Fragment, {
                            children: [(0,
                            j.jsx)(nE, {
                                plugin: _
                            }), (0,
                            j.jsxs)("div", {
                                children: ["Plugin id: ", _.id]
                            }), (0,
                            j.jsx)(nL, {
                                manifestValidationInfo: r.manifestValidationInfo,
                                expanded: o,
                                onChangeExpanded: s
                            }), null != r.apiValidationInfo && (0,
                            j.jsxs)(j.Fragment, {
                                children: [(0,
                                j.jsx)(nB, {
                                    apiValidationInfo: r.apiValidationInfo,
                                    expanded: u,
                                    onChangeExpanded: c
                                }), (0,
                                j.jsx)(nO, {
                                    apiValidationInfo: r.apiValidationInfo,
                                    expanded: f,
                                    onChangeExpanded: h
                                })]
                            })]
                        }) : (0,
                        j.jsx)("div", {
                            className: "self-center",
                            children: (0,
                            j.jsx)(ed.Z, {})
                        })]
                    }) : (0,
                    j.jsxs)("div", {
                        className: "mt-4 text-center",
                        children: ["Please enable a localhost plugin", " ", m && " (or any plugin if you're an OpenAI employee) ", "to use devtools."]
                    })
                })
            }) : null
        }
        var tr = t(44925);
        function ta() {
            var e = (0,
            y._)(["block text-sm font-medium mb-1"]);
            return ta = function() {
                return e
            }
            ,
            e
        }
        var ti = (0,
        Y.vU)({
            settings: {
                id: "settingsModal.settings",
                defaultMessage: "Settings",
                description: "Title for the settings modal"
            },
            theme: {
                id: "settingsModal.theme",
                defaultMessage: "Theme",
                description: "Label for the theme setting"
            },
            system: {
                id: "settingsModal.system",
                defaultMessage: "System",
                description: "Option for the system theme"
            },
            dark: {
                id: "settingsModal.dark",
                defaultMessage: "Dark",
                description: "Option for the dark theme"
            },
            light: {
                id: "settingsModal.light",
                defaultMessage: "Light",
                description: "Option for the light theme"
            },
            exportData: {
                id: "settingsModal.exportData",
                defaultMessage: "Export data",
                description: "Label for the export data button"
            },
            exportButton: {
                id: "settingsModal.exportButton",
                defaultMessage: "Export",
                description: "Export data button"
            },
            deleteAccount: {
                id: "settingsModal.deleteAccount",
                defaultMessage: "Delete account",
                description: "Label for the delete account button"
            },
            deleteAccountButton: {
                id: "settingsModal.deleteButton",
                defaultMessage: "Delete",
                description: "Delete account button"
            },
            openPluginDevtools: {
                id: "settingsModal.openPluginDevtools",
                defaultMessage: "Open plugin devtools",
                description: "Label for the open plugin devtools setting"
            },
            enable2fa: {
                id: "settingsModal.enable2fa",
                defaultMessage: "Enable two-factor authentication",
                description: "Label for the enable 2FA button"
            },
            enable: {
                id: "settingsModal.enable",
                defaultMessage: "Enable",
                description: "Enable 2FA button"
            },
            disable: {
                id: "settingsModal.disable",
                defaultMessage: "Disable",
                description: "Disable 2FA button"
            },
            disable2fa: {
                id: "settingsModal.disable2fa",
                defaultMessage: "Disable two factor authentication",
                description: "Label for the mfa remove button."
            },
            chatHistoryDescription: {
                id: "settingsModal.chatHistoryDescription",
                defaultMessage: "Save new web chats to your history and allow them to be used to improve ChatGPT via model training. Unsaved chats will be deleted from our systems within 30 days. <link>Learn more</link>",
                description: "Description for the chat history setting"
            },
            dataExportRequested: {
                id: "settingsModal.dataExportRequested",
                defaultMessage: "Successfully exported data. You should receive an email shortly with your data.",
                description: "Message shown when a data export request is received"
            },
            dataExportFailed: {
                id: "settingsModal.dataExportFailed",
                defaultMessage: "We were unable to process your export at this time. Please try again later.",
                description: "Message shown when a data export request fails"
            },
            dataExportModalTitle: {
                id: "settingsModal.dataExportModalTitle",
                defaultMessage: "Request data export - are you sure?",
                description: "Title for the data export modal"
            },
            dataExportModalConfirm: {
                id: "settingsModal.dataExportModalConfirm",
                defaultMessage: "Confirm export",
                description: "Confirm button for the data export modal"
            },
            dataExportModalCancel: {
                id: "settingsModal.dataExportModalCancel",
                defaultMessage: "Cancel",
                description: "Cancel button for the data export modal"
            },
            dataExportModalDescription1: {
                id: "settingsModal.dataExportModalDescription1",
                defaultMessage: "Your account details and conversations will be included in the export.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription2: {
                id: "settingsModal.dataExportModalDescription2",
                defaultMessage: "The data will be sent to your registered email in a downloadable file.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription3: {
                id: "settingsModal.dataExportModalDescription3",
                defaultMessage: "Processing may take some time. You'll be notified when it's ready.",
                description: "Description for the data export modal"
            },
            dataExportModalDescription4: {
                id: "settingsModal.dataExportModalDescription4",
                defaultMessage: 'To proceed, click "Confirm export" below.',
                description: "Description for the data export modal"
            },
            deleteAccountSessionTooOld: {
                id: "settingsModal.deleteAccountSessionTooOld",
                defaultMessage: "Your login session is too old. Please log in again before deleting your account.",
                description: "Message shown when the user's login session is too old to delete their account."
            },
            deleteAccountFailed: {
                id: "settingsModal.deleteAccountFailed",
                defaultMessage: "Failed to delete account. Please try again later.",
                description: "Message shown when there's an error deleting the user's account."
            },
            deleteAccountTitle: {
                id: "settingsModal.deleteAccountTitle",
                defaultMessage: "Delete account - are you sure?",
                description: "Title for the delete account confirmation modal."
            },
            deleteAccountWarning: {
                id: "settingsModal.deleteAccountWarning",
                defaultMessage: "Deleting your account is permanent and cannot be undone.",
                description: "Warning message about account deletion being permanent."
            },
            reuseEmailPhoneWarning: {
                id: "settingsModal.reuseEmailPhoneWarning",
                defaultMessage: "For security reasons, you cannot reuse the same email or phone number for a new account.",
                description: "Warning message about not being able to reuse email or phone number for a new account."
            },
            dataRemovalWarning: {
                id: "settingsModal.dataRemovalWarning",
                defaultMessage: "All your data, including profile, conversations, and API usage, will be removed.",
                description: "Warning message about data removal after account deletion."
            },
            apiAccessDeletionWarning: {
                id: "settingsModal.apiAccessDeletionWarning",
                defaultMessage: "If you've been using ChatGPT with the API, this access will also be deleted.",
                description: "Warning message about API access being deleted."
            },
            iapSubscriptionWarning: {
                id: "settingsModal.iapSubscriptionWarning",
                defaultMessage: "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
                description: "Warning message about cancelling in-app subscriptions."
            },
            typeEmailLabel: {
                id: "settingsModal.typeEmailLabel",
                defaultMessage: "Please type your account email.",
                description: "Label for email input field when deleting an account."
            },
            typeDeleteInputLabel: {
                id: "settingsModal.typeDeleteInputLabel",
                defaultMessage: 'To proceed, type "DELETE" in the input field below.',
                description: "Label for DELETE input field when deleting an account."
            },
            lockedButtonLabel: {
                id: "settingsModal.lockedButtonLabel",
                defaultMessage: "Locked",
                description: "Label for the locked button when deleting an account."
            },
            deleteAccountButtonLabel: {
                id: "settingsModal.deleteAccountButtonLabel",
                defaultMessage: "Permanently delete my account",
                description: "Label for the button to confirm account deletion."
            },
            recentLoginMessage: {
                id: "settingsModal.recentLoginMessage",
                defaultMessage: "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
                description: "Message shown when the user needs to log in again to delete their account."
            },
            refreshLoginButtonLabel: {
                id: "settingsModal.refreshLoginButtonLabel",
                defaultMessage: "Refresh login",
                description: "Label for the button to refresh login."
            },
            dataControlsLabel: {
                id: "settingsModal.dataControlsLabel",
                defaultMessage: "Data Controls",
                description: "Label for the data controls section."
            },
            hideLabel: {
                id: "settingsModal.hideLabel",
                defaultMessage: "Hide",
                description: "Label for the hide button."
            },
            showLabel: {
                id: "settingsModal.showLabel",
                defaultMessage: "Show",
                description: "Label for the show button."
            },
            chatHistoryToggleLabel: {
                id: "settingsModal.chatHistoryToggleLabel",
                defaultMessage: "Chat History & Training",
                description: "Label for the chat history toggle."
            },
            dataControlsTab: {
                id: "settingsModal.dataControls",
                defaultMessage: "Data controls",
                description: "Label for the data controls tab"
            },
            betaIntro: {
                id: "settingsModal.betaIntro",
                defaultMessage: "As a Plus user, enjoy early access to experimental new features, which may change during development.",
                description: "Introduction for the beta features tab"
            },
            betaSettingsUpdateFailed: {
                id: "settingsModal.betaSettingsUpdateFailed",
                defaultMessage: "Failed to update your beta setting",
                description: "Message shown when there's an error updating beta settings"
            },
            betaPluginToggleLabel: {
                id: "settingsModal.betaPluginToggleLabel",
                defaultMessage: "Plugins",
                description: "Label for the Plugins beta toggle."
            },
            betaPluginToggleDescription: {
                id: "settingsModal.betaPluginToggleDescription",
                defaultMessage: "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
                description: "Description for the Plugins beta toggle."
            },
            betaBrowsingToggleLabel: {
                id: "settingsModal.betaBrowsingToggleLabel",
                defaultMessage: "Web browsing",
                description: "Label for the Browsing beta toggle."
            },
            betaBrowsingToggleDescription: {
                id: "settingsModal.betaBrowsingToggleDescription",
                defaultMessage: "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
                description: "Description for the Browsing beta toggle."
            },
            betaCodeInterpreterToggleLabel: {
                id: "settingsModal.betaCodeInterpreterToggleLabel",
                defaultMessage: "Code interpreter",
                description: "Label for the Code interpreter beta toggle."
            },
            betaCodeInterpreterToggleDescription: {
                id: "settingsModal.betaCodeInterpreterToggleDescription",
                defaultMessage: "Your favorite GPT models now use a python sandbox. Once enabled, ChatGPT can build and run python code.",
                description: "Description for the Code interpreter beta toggle."
            },
            generalTab: {
                id: "settingsModal.general",
                defaultMessage: "General",
                description: "Label for the general tab"
            },
            betaTab: {
                id: "settingsModal.beta",
                defaultMessage: "Beta features",
                description: "Label for the Beta Features tab"
            },
            clearChatLabel: {
                id: "settingsModal.clearChatLabel",
                defaultMessage: "Clear all chats",
                description: "Label for the clear chat button"
            },
            clearChatButton: {
                id: "settingsModal.clearChatButton",
                defaultMessage: "Clear",
                description: "Clear chat button"
            }
        });
        function to(e) {
            var n, t, r = e.onClose, a = e.onToggleHistoryDisabled, i = e.onDeleteHistory, o = (0,
            X.Z)(), s = ex().conversations.length > 0, l = (0,
            et.w$)(), c = (0,
            b._)((0,
            C.useState)(!1), 2), d = c[0], f = c[1], h = (0,
            b._)((0,
            C.useState)(!1), 2), g = h[0], m = h[1], p = (0,
            b._)((0,
            C.useState)(u.General), 2), x = p[0], y = p[1], w = (0,
            C.useContext)(L.QL), k = w.historyDisabled, _ = w.toggleHistoryDisabled, M = te(function(e) {
                return e.isOpen
            }), T = (0,
            I.hz)(), N = T.has("data_export_enabled"), P = T.has("data_deletion_enabled"), S = (0,
            eh.kP)().session, Z = (0,
            nf.Fl)(), R = Z.isBetaFeaturesUiEnabled, D = Z.isPluginsAvailable, F = Z.isBrowsingAvailable, A = Z.isCodeInterpreterAvailable, E = (0,
            C.useCallback)(function() {
                f(!1)
            }, []), O = (0,
            C.useCallback)(function() {
                m(!1)
            }, []), q = (0,
            C.useCallback)(function() {
                f(!0)
            }, []), U = (0,
            C.useCallback)(function() {
                m(!0)
            }, []), z = (0,
            C.useCallback)(function() {
                a(),
                _()
            }, [a, _]), H = np(), V = H.setupMfa, G = H.isUsernamePassword, W = H.removeMfa;
            return d ? (0,
            j.jsx)(td, {
                onClose: E
            }) : g ? (0,
            j.jsx)(tm, {
                onClose: O
            }) : (0,
            j.jsx)(na.ZP, {
                size: "custom",
                isOpen: !0,
                onModalClose: r,
                className: "md:w-[680px]",
                type: "success",
                title: o.formatMessage(ti.settings),
                closeButton: (0,
                j.jsx)(na.ol, {
                    onClose: r
                }),
                children: (0,
                j.jsxs)(nu.fC, {
                    className: "flex flex-col gap-6 md:flex-row",
                    defaultValue: x,
                    orientation: l ? "vertical" : void 0,
                    onValueChange: function(e) {
                        y(e)
                    },
                    children: [(0,
                    j.jsxs)(nu.aV, {
                        className: (0,
                        B.Z)("-ml-[8px] flex min-w-[180px] flex-shrink-0", l ? "flex-col" : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"),
                        children: [(0,
                        j.jsx)(tf, {
                            value: u.General,
                            icon: eY.oq2,
                            label: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.generalTab))
                        }), R && (F || D || A) && (0,
                        j.jsx)(tf, {
                            value: u.BetaFeatures,
                            icon: eY.rTN,
                            label: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.betaTab))
                        }), (0,
                        j.jsx)(tf, {
                            value: u.DataControls,
                            icon: eY.tQn,
                            label: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.dataControlsTab))
                        })]
                    }), (0,
                    j.jsxs)(th, {
                        value: u.General,
                        children: [(0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tc, {})
                        }), T.has("tools3_dev") && (0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tl, {
                                label: o.formatMessage(ti.openPluginDevtools),
                                enabled: M,
                                onChange: tn.setIsOpen
                            })
                        }), (0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tu, {
                                color: "danger",
                                disabled: !s,
                                label: o.formatMessage(ti.clearChatLabel),
                                buttonLabel: o.formatMessage(ti.clearChatButton),
                                onClick: i
                            })
                        })]
                    }), (0,
                    j.jsx)(th, {
                        value: u.BetaFeatures,
                        children: (0,
                        j.jsx)(ts, {})
                    }), (0,
                    j.jsxs)(th, {
                        value: u.DataControls,
                        children: [(0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tl, {
                                label: o.formatMessage(ti.chatHistoryToggleLabel),
                                enabled: !k,
                                onChange: z,
                                description: (0,
                                j.jsx)(K.Z, (0,
                                eU._)((0,
                                v._)({}, ti.chatHistoryDescription), {
                                    values: {
                                        link: function(e) {
                                            return (0,
                                            j.jsx)("a", {
                                                href: "https://help.openai.com/en/articles/7730893 ",
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noreferrer",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })
                        }), N && (0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tu, {
                                label: o.formatMessage(ti.exportData),
                                buttonLabel: o.formatMessage(ti.exportButton),
                                onClick: q
                            })
                        }), P && (0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tu, {
                                label: o.formatMessage(ti.deleteAccount),
                                buttonLabel: o.formatMessage(ti.deleteAccountButton),
                                color: "danger",
                                onClick: U
                            })
                        }), !(null == S ? void 0 : null === (n = S.user) || void 0 === n ? void 0 : n.mfa) && G && (0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tu, {
                                label: o.formatMessage(ti.enable2fa),
                                buttonLabel: o.formatMessage(ti.enable),
                                onClick: V
                            })
                        }), (null == S ? void 0 : null === (t = S.user) || void 0 === t ? void 0 : t.mfa) && G && (0,
                        j.jsx)(tg, {
                            children: (0,
                            j.jsx)(tu, {
                                label: o.formatMessage(ti.disable2fa),
                                buttonLabel: o.formatMessage(ti.disable),
                                onClick: W,
                                color: "danger"
                            })
                        })]
                    })]
                })
            })
        }
        function ts() {
            var e, n = (0,
            X.Z)(), t = (0,
            eh.kP)().session, r = (0,
            nf.N2)(), a = (0,
            nf.Fl)(), i = a.isBrowsingAvailable, o = a.isBrowsingEnabled, s = a.isPluginsAvailable, l = a.isPluginsEnabled, u = a.isCodeInterpreterAvailable, c = a.isCodeInterpreterEnabled, d = (0,
            nc.D)({
                mutationFn: function(n) {
                    var r = n.feature
                      , a = n.enabled;
                    return ee.ZP.setUserSettingsBetaFeature(null !== (e = null == t ? void 0 : t.accessToken) && void 0 !== e ? e : "", r, a)
                },
                onSettled: r,
                onError: function() {
                    em.m.danger(n.formatMessage(ti.betaSettingsUpdateFailed))
                }
            }), f = d.isLoading, h = d.variables, g = d.mutate, m = f && (null == h ? void 0 : h.feature) === nf.tr.BROWSING, p = f && (null == h ? void 0 : h.feature) === nf.tr.CODE_INTERPRETER, x = f && (null == h ? void 0 : h.feature) === nf.tr.PLUGINS;
            return (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsx)(tg, {
                    children: (0,
                    j.jsx)("p", {
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.betaIntro))
                    })
                }), i && (0,
                j.jsx)(tg, {
                    children: (0,
                    j.jsx)(tl, {
                        label: n.formatMessage(ti.betaBrowsingToggleLabel),
                        disabled: m,
                        enabled: m ? null == h ? void 0 : h.enabled : o,
                        onChange: function(e) {
                            g({
                                feature: nf.tr.BROWSING,
                                enabled: e
                            })
                        },
                        description: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.betaBrowsingToggleDescription))
                    })
                }), s && (0,
                j.jsx)(tg, {
                    children: (0,
                    j.jsx)(tl, {
                        label: n.formatMessage(ti.betaPluginToggleLabel),
                        disabled: x,
                        enabled: x ? null == h ? void 0 : h.enabled : l,
                        onChange: function(e) {
                            g({
                                feature: nf.tr.PLUGINS,
                                enabled: e
                            })
                        },
                        description: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.betaPluginToggleDescription))
                    })
                }), u && (0,
                j.jsx)(tg, {
                    children: (0,
                    j.jsx)(tl, {
                        label: n.formatMessage(ti.betaCodeInterpreterToggleLabel),
                        disabled: p,
                        enabled: p ? null == h ? void 0 : h.enabled : c,
                        onChange: function(e) {
                            g({
                                feature: nf.tr.CODE_INTERPRETER,
                                enabled: e
                            })
                        },
                        description: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.betaCodeInterpreterToggleDescription))
                    })
                })]
            })
        }
        function tl(e) {
            var n = e.label
              , t = e.disabled
              , r = e.enabled
              , a = e.onChange
              , i = e.description;
            return (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0,
                    j.jsx)("div", {
                        children: n
                    }), (0,
                    j.jsx)(nj, {
                        disabled: t,
                        enabled: r,
                        onChange: a,
                        label: n
                    })]
                }), null != i && (0,
                j.jsx)("div", {
                    className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
                    children: i
                })]
            })
        }
        function tu(e) {
            var n = e.color
              , t = e.disabled
              , r = e.label
              , a = e.buttonLabel
              , i = e.onClick;
            return (0,
            j.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0,
                j.jsx)("div", {
                    children: r
                }), (0,
                j.jsx)(eu.z, {
                    color: void 0 === n ? "neutral" : n,
                    disabled: !!t,
                    onClick: i,
                    children: a
                })]
            })
        }
        function tc() {
            var e = (0,
            nd.F)()
              , n = e.theme
              , t = e.setTheme;
            return (0,
            j.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0,
                j.jsx)("div", {
                    children: (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, ti.theme))
                }), (0,
                j.jsxs)("select", {
                    value: n,
                    onChange: function(e) {
                        t(e.target.value)
                    },
                    className: "rounded border border-black/10 bg-transparent text-sm dark:border-white/20",
                    children: [(0,
                    j.jsx)("option", {
                        value: "system",
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.system))
                    }), (0,
                    j.jsx)("option", {
                        value: "dark",
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.dark))
                    }), (0,
                    j.jsx)("option", {
                        value: "light",
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.light))
                    })]
                })]
            })
        }
        function td(e) {
            var n = e.onClose
              , t = (0,
            X.Z)()
              , r = (0,
            eh.kP)().session
              , a = null == r ? void 0 : r.accessToken
              , i = (0,
            C.useCallback)(function() {
                try {
                    ee.ZP.submitDataExport(a).then(function() {
                        em.m.success(t.formatMessage(ti.dataExportRequested)),
                        n()
                    })
                } catch (e) {
                    em.m.warning(t.formatMessage(ti.dataExportFailed), {
                        hasCloseButton: !0
                    })
                }
            }, [a, t, n]);
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: t.formatMessage(ti.dataExportModalTitle),
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: t.formatMessage(ti.dataExportModalConfirm),
                    color: "primary",
                    onClick: i
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: t.formatMessage(ti.dataExportModalCancel),
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                j.jsxs)("div", {
                    className: "text-sm",
                    children: [(0,
                    j.jsxs)("ul", {
                        className: "my-3 flex list-disc flex-col gap-1 pl-3",
                        children: [(0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.dataExportModalDescription1))
                        }), (0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.dataExportModalDescription2))
                        }), (0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.dataExportModalDescription3))
                        })]
                    }), (0,
                    j.jsx)("div", {
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ti.dataExportModalDescription4))
                    })]
                })
            })
        }
        function tf(e) {
            var n = e.value
              , t = e.icon
              , r = e.label
              , a = (0,
            et.w$)();
            return (0,
            j.jsxs)(nu.xz, {
                className: (0,
                B.Z)("group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white", {
                    "flex-1 items-center justify-center": !a
                }),
                value: n,
                children: [(0,
                j.jsx)(ec.ZP, {
                    icon: t,
                    strokeWidth: 0,
                    className: "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500"
                }), (0,
                j.jsx)("div", {
                    children: r
                })]
            })
        }
        function th(e) {
            var n = e.value
              , t = e.children;
            return (0,
            j.jsx)(nu.VY, {
                className: "w-full md:min-h-[300px]",
                value: n,
                children: (0,
                j.jsx)("div", {
                    className: "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
                    children: t
                })
            })
        }
        function tg(e) {
            var n = e.children;
            return (0,
            j.jsx)("div", {
                className: "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
                children: n
            })
        }
        function tm(e) {
            var n, t = e.onClose, r = (0,
            X.Z)(), a = (0,
            eh.kP)().session, i = null == a ? void 0 : a.accessToken, o = null == a ? void 0 : null === (n = a.user) || void 0 === n ? void 0 : n.email, s = (0,
            b._)((0,
            C.useState)(""), 2), l = s[0], u = s[1], c = (0,
            b._)((0,
            C.useState)(""), 2), d = c[0], f = c[1], h = (0,
            C.useCallback)(function() {
                var e, n = null == a ? void 0 : null === (e = a.user) || void 0 === e ? void 0 : e.iat;
                return void 0 === n || Date.now() / 1e3 - n < 600
            }, [a]), g = (0,
            C.useCallback)(function() {
                try {
                    h() ? ee.ZP.deactivateAccount(i).then(function() {
                        (0,
                        eh.w7)()
                    }) : em.m.warning(r.formatMessage(ti.deleteAccountSessionTooOld), {
                        hasCloseButton: !0
                    })
                } catch (e) {
                    em.m.warning(r.formatMessage(ti.deleteAccountFailed), {
                        hasCloseButton: !0
                    })
                }
            }, [i, r, h]), m = (0,
            C.useCallback)(function() {
                (0,
                eh.w7)()
            }, []), p = "DELETE" === d && (void 0 === o || l === o), x = (0,
            b._)((0,
            C.useState)(function() {
                return h()
            }), 1)[0], y = (0,
            I.e2)();
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: r.formatMessage(ti.deleteAccountTitle),
                closeButton: (0,
                j.jsx)(na.ol, {
                    onClose: t
                }),
                children: (0,
                j.jsxs)("div", {
                    className: "text-sm",
                    children: [(0,
                    j.jsxs)("ul", {
                        className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                        children: [(0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.deleteAccountWarning))
                        }), (0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.reuseEmailPhoneWarning))
                        }), (0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.dataRemovalWarning))
                        }), (0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.apiAccessDeletionWarning))
                        }), (null == y ? void 0 : y.purchase_origin_platform) === tr._.MOBILE_IOS && (0,
                        j.jsx)("li", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.iapSubscriptionWarning))
                        })]
                    }), x ? (0,
                    j.jsxs)(j.Fragment, {
                        children: [void 0 !== o ? (0,
                        j.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            j.jsx)(tp, {
                                children: (0,
                                j.jsx)(K.Z, (0,
                                v._)({}, ti.typeEmailLabel))
                            }), (0,
                            j.jsx)(nx, {
                                value: l,
                                placeholder: o,
                                name: "email",
                                onChange: function(e) {
                                    u(e.target.value)
                                }
                            })]
                        }) : null, (0,
                        j.jsxs)("div", {
                            className: "mb-4",
                            children: [(0,
                            j.jsx)(tp, {
                                children: (0,
                                j.jsx)(K.Z, (0,
                                v._)({}, ti.typeDeleteInputLabel))
                            }), (0,
                            j.jsx)(nx, {
                                value: d,
                                onChange: function(e) {
                                    f(e.target.value)
                                },
                                name: "delete",
                                className: "mb-4"
                            })]
                        }), (0,
                        j.jsx)(eu.z, {
                            color: p ? "danger" : "disabled",
                            onClick: g,
                            disabled: !p,
                            className: "w-full",
                            children: p ? (0,
                            j.jsxs)(j.Fragment, {
                                children: [(0,
                                j.jsx)(ec.ZP, {
                                    icon: J.BJv
                                }), " ", (0,
                                j.jsx)(K.Z, (0,
                                v._)({}, ti.deleteAccountButtonLabel))]
                            }) : (0,
                            j.jsxs)(j.Fragment, {
                                children: [(0,
                                j.jsx)(ec.ZP, {
                                    icon: J.UIZ
                                }), " ", (0,
                                j.jsx)(K.Z, (0,
                                v._)({}, ti.lockedButtonLabel))]
                            })
                        })]
                    }) : (0,
                    j.jsxs)(j.Fragment, {
                        children: [(0,
                        j.jsx)("p", {
                            className: "pb-4 text-xs text-gray-500",
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.recentLoginMessage))
                        }), (0,
                        j.jsx)(eu.z, {
                            color: "primary",
                            onClick: m,
                            className: "w-full",
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, ti.refreshLoginButtonLabel))
                        })]
                    })]
                })
            })
        }
        (r = u || (u = {})).General = "General",
        r.BetaFeatures = "BetaFeatures",
        r.DataControls = "DataControls";
        var tp = _.Z.label(ta());
        function tv() {
            var e = (0,
            y._)(["flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);
            return tv = function() {
                return e
            }
            ,
            e
        }
        function tx() {
            var e = (0,
            y._)(["", ""]);
            return tx = function() {
                return e
            }
            ,
            e
        }
        function tb() {
            var e = (0,
            y._)(["my-1.5 h-px bg-white/20"]);
            return tb = function() {
                return e
            }
            ,
            e
        }
        function ty() {
            var e = (0,
            y._)(["rounded-md border border-white/20 hover:bg-gray-500/10"]);
            return ty = function() {
                return e
            }
            ,
            e
        }
        function tj() {
            var e = (0,
            y._)(["flex-col flex-1 transition-opacity duration-500\n", "\n", ""]);
            return tj = function() {
                return e
            }
            ,
            e
        }
        var tw = (0,
        Y.vU)({
            helpAndFaq: {
                id: "navigation.helpAndFaq",
                defaultMessage: "Help & FAQ",
                description: "Help & FAQ menu item"
            },
            confirmClearConversations: {
                id: "navigation.confirmClearConversations",
                defaultMessage: "Confirm clear conversations",
                description: "Confirmation text for clearing conversations"
            },
            clearConversations: {
                id: "navigation.clearConversations",
                defaultMessage: "Clear conversations",
                description: "Clear conversations menu item"
            },
            setupTeam: {
                id: "navigation.setupTeam",
                defaultMessage: "Buy ChatGPT Business",
                description: "Buy ChatGPT for teams menu item"
            },
            myPlan: {
                id: "navigation.myPlan",
                defaultMessage: "My plan",
                description: "My plan menu item"
            },
            myProfile: {
                id: "navigation.myProfile",
                defaultMessage: "My profile",
                description: "Profile menu item"
            },
            settings: {
                id: "navigation.settings",
                defaultMessage: "Settings",
                description: "Settings menu item"
            },
            logOut: {
                id: "navigation.logOut",
                defaultMessage: "Log out",
                description: "Log out menu item"
            },
            upgradeToPlus: {
                id: "navigation.upgradeToPlus",
                defaultMessage: "Upgrade to Plus",
                description: "Upgrade to Plus menu item"
            },
            renewPlus: {
                id: "navigation.renewPlus",
                defaultMessage: "Renew Plus",
                description: "Renew Plus menu item"
            },
            newChat: {
                id: "navigation.newChat",
                defaultMessage: "New chat",
                description: "New chat button label"
            },
            clearChat: {
                id: "navigation.clearChat",
                defaultMessage: "Clear chat",
                description: "Clear chat button label"
            },
            chatHistoryLabel: {
                id: "navigation.chatHistoryLabel",
                defaultMessage: "Chat history",
                description: "Chat history label heading"
            },
            chatHistoryOff: {
                id: "navigation.chatHistoryOff",
                defaultMessage: "Chat History is off on web.",
                description: "Text indicating that chat history is turned off"
            },
            chatHistoryOffDescription: {
                id: "navigation.chatHistoryOffDescription",
                defaultMessage: "Web chats won’t be saved in your history or used for training our models to improve ChatGPT. Unsaved chats will be deleted from our systems within 30 days. {learnMore}",
                description: "Description for chat history being off"
            },
            learnMore: {
                id: "navigation.learnMore",
                defaultMessage: "Learn more",
                description: "Learn more link text"
            },
            enableChatHistory: {
                id: "navigation.enableChatHistory",
                defaultMessage: "Enable chat history",
                description: "Enable chat history button label"
            },
            closeSidebar: {
                id: "navigation.closeSidebar",
                defaultMessage: "Close sidebar",
                description: "Close sidebar button label"
            },
            openSidebar: {
                id: "navigation.openSidebar",
                defaultMessage: "Open sidebar",
                description: "Open sidebar button label"
            },
            newLabel: {
                id: "navigation.newLabel",
                defaultMessage: "NEW",
                description: "Label for new features or items"
            }
        })
          , tk = _.Z.a(tv())
          , tC = (0,
        _.Z)(tk)(tx(), function(e) {
            return e.$active ? "bg-gray-800" : "hover:bg-gray-800"
        });
        function t_(e) {
            var n = e.onClick
              , t = e.href
              , r = e.target
              , a = e.children;
            return (0,
            j.jsx)(ez.v.Item, {
                children: function(e) {
                    var i = e.active;
                    return (0,
                    j.jsx)(tk, {
                        as: void 0 !== t ? "a" : "button",
                        onClick: n,
                        href: t,
                        target: r,
                        className: (0,
                        B.Z)(i ? "bg-gray-700" : "hover:bg-gray-700"),
                        children: a
                    })
                }
            })
        }
        var tM = _.Z.div(tb())
          , tT = (0,
        _.Z)(tk)(ty())
          , tI = _.Z.div(tj(), function(e) {
            return e.$disableScroll ? "overflow-y-hidden opacity-20 pointer-events-none" : "overflow-y-auto"
        }, function(e) {
            return e.$offsetScrollbar && "-mr-2"
        });
        function tN(e) {
            var n = e.showCustomerPortalMenuItem
              , t = e.onClickCustomerPortal
              , r = e.onClickSettings
              , a = e.onDeleteHistory
              , i = (0,
            M.WS)()
              , o = (0,
            b._)((0,
            C.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            C.useCallback)(function() {
                l(!1),
                a()
            }, [a])
              , c = ex().conversations.length > 0
              , d = (0,
            I.hz)();
            return (0,
            j.jsxs)("nav", {
                children: [(0,
                j.jsxs)(t_, {
                    as: "a",
                    href: "https://help.openai.com/en/collections/3742473-chatgpt",
                    target: "_blank",
                    onClick: function() {
                        i(T.s6.clickFaqLink)
                    },
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.AlO
                    }), (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.helpAndFaq))]
                }), (0,
                j.jsx)(tM, {}), c && (0,
                j.jsxs)(t_, {
                    onClick: function(e) {
                        s ? u() : (l(!0),
                        e.preventDefault())
                    },
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: s ? J.UgA : J.Ybf
                    }), s ? (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.confirmClearConversations)) : (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.clearConversations))]
                }), n && t && (0,
                j.jsxs)(t_, {
                    onClick: t,
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.fzv
                    }), (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.myPlan))]
                }), d.has("system_message2") && (0,
                j.jsxs)(t_, {
                    onClick: function() {
                        return ns.setIsProfileModalOpen(!0)
                    },
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.yK7
                    }), (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.myProfile))]
                }), (0,
                j.jsxs)(t_, {
                    onClick: r,
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.nbt
                    }), (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.settings))]
                }), (0,
                j.jsx)(tM, {}), (0,
                j.jsxs)(t_, {
                    onClick: function() {
                        i(T.s6.clickLogOut, {
                            eventSource: "mouse"
                        }),
                        (0,
                        eh.w7)()
                    },
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.xqh
                    }), (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.logOut))]
                })]
            })
        }
        function tP(e) {
            var n, t = e.showCustomerPortalMenuItem, r = e.onClickCustomerPortal, a = e.onClickSettings, i = e.onDeleteHistory, o = (0,
            eh.kP)().session;
            return (0,
            j.jsxs)(ez.v, {
                as: "div",
                className: "group relative",
                children: [(0,
                j.jsxs)(ez.v.Button, {
                    className: "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
                    children: [(0,
                    j.jsx)("div", {
                        className: "-ml-0.5 w-5 flex-shrink-0",
                        children: null != o ? (0,
                        j.jsx)(ne, {
                            user: o.user,
                            size: "small"
                        }) : null
                    }), (0,
                    j.jsx)("div", {
                        className: "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                        children: null == o ? void 0 : null === (n = o.user) || void 0 === n ? void 0 : n.name
                    }), (0,
                    j.jsx)(ec.ZP, {
                        icon: J.K9M,
                        size: "small",
                        className: "flex-shrink-0 text-gray-500"
                    })]
                }), (0,
                j.jsx)(nn, {
                    children: (0,
                    j.jsx)(ez.v.Items, {
                        className: "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-[#050509] py-1.5 outline-none",
                        children: (0,
                        j.jsx)(tN, {
                            showCustomerPortalMenuItem: t,
                            onClickCustomerPortal: r,
                            onClickSettings: a,
                            onDeleteHistory: i
                        })
                    })
                })]
            })
        }
        var tS = eQ.G.href;
        function tZ(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onNewThread
              , s = e.children
              , l = (0,
            X.Z)()
              , u = (0,
            I.hz)()
              , c = (0,
            C.useRef)(null)
              , d = (0,
            b._)((0,
            C.useState)(!1), 2)
              , f = d[0]
              , h = d[1]
              , g = (0,
            C.useContext)(L.QL)
              , m = g.historyDisabled
              , p = g.toggleHistoryDisabled
              , x = g.getModifiedSettings
              , y = g.unsetModifiedSettings
              , w = x()
              , k = (0,
            b._)((0,
            C.useState)(w), 2)
              , _ = k[0]
              , M = k[1]
              , T = (0,
            C.useCallback)(function() {
                M(!0)
            }, [])
              , N = (0,
            C.useCallback)(function() {
                M(!1),
                y()
            }, [y])
              , P = (0,
            C.useCallback)(function() {
                o(),
                p()
            }, [o, p])
              , S = (0,
            C.useMemo)(function() {
                return (0,
                j.jsxs)("div", {
                    className: (0,
                    B.Z)("absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500", m ? "visible max-h-72" : "invisible max-h-0"),
                    children: [(0,
                    j.jsxs)("div", {
                        className: "bg-gray-900 px-4 py-3",
                        children: [(0,
                        j.jsx)("div", {
                            className: "p-1 text-sm text-gray-100",
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, tw.chatHistoryOff))
                        }), (0,
                        j.jsx)("div", {
                            className: "p-1 text-xs text-gray-500",
                            children: (0,
                            j.jsx)(K.Z, (0,
                            eU._)((0,
                            v._)({}, tw.chatHistoryOffDescription), {
                                values: {
                                    learnMore: (0,
                                    j.jsx)("a", {
                                        href: "https://help.openai.com/en/articles/7730893",
                                        target: "_blank",
                                        className: "underline",
                                        rel: "noreferrer",
                                        children: (0,
                                        j.jsx)(K.Z, (0,
                                        v._)({}, tw.learnMore))
                                    })
                                }
                            }))
                        }), (0,
                        j.jsxs)(eu.z, {
                            className: "mt-4 w-full",
                            onClick: P,
                            color: "primary",
                            size: "medium",
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: J.$IY
                            }), (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, tw.enableChatHistory))]
                        })]
                    }), (0,
                    j.jsx)("div", {
                        className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"
                    })]
                })
            }, [m, P]);
            (0,
            C.useEffect)(function() {
                if (c.current) {
                    var e;
                    h((e = c.current).scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
                }
            }, [s]);
            var Z = !(0,
            I.nR)() && !u.has("disable_upgrade_ui")
              , R = (0,
            I.KQ)();
            return (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsxs)("div", {
                    className: "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
                    children: [(0,
                    j.jsx)(eG.f, {
                        asChild: !0,
                        children: (0,
                        j.jsx)("h2", {
                            children: (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, tw.chatHistoryLabel))
                        })
                    }), (0,
                    j.jsxs)("nav", {
                        className: "flex h-full w-full flex-col p-2",
                        "aria-label": l.formatMessage(tw.chatHistoryLabel),
                        children: [(0,
                        j.jsxs)(tT, {
                            onClick: o,
                            className: "mb-1 flex-shrink-0",
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: m ? J.Bw1 : J.OvN
                            }), (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, m ? tw.clearChat : tw.newChat))]
                        }), S, (0,
                        j.jsx)(tI, {
                            ref: c,
                            $offsetScrollbar: f,
                            $disableScroll: m,
                            children: s
                        }), (0,
                        j.jsxs)("div", {
                            className: "border-t border-white/20 pt-2",
                            children: [t && (0,
                            j.jsx)(tC, {
                                onClick: n,
                                className: "rounded-md",
                                children: (0,
                                j.jsxs)("span", {
                                    className: "flex w-full flex-row justify-between",
                                    children: [(0,
                                    j.jsxs)("span", {
                                        className: "gold-new-button flex items-center gap-3",
                                        children: [(0,
                                        j.jsx)(ec.ZP, {
                                            icon: J.fzv
                                        }), R ? (0,
                                        j.jsx)(K.Z, (0,
                                        v._)({}, tw.renewPlus)) : (0,
                                        j.jsx)(K.Z, (0,
                                        v._)({}, tw.upgradeToPlus))]
                                    }), Z && !R && (0,
                                    j.jsx)("span", {
                                        className: "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                        children: (0,
                                        j.jsx)(K.Z, (0,
                                        v._)({}, tw.newLabel))
                                    })]
                                })
                            }), (0,
                            j.jsx)(tP, {
                                showCustomerPortalMenuItem: a,
                                onClickCustomerPortal: r,
                                onClickSettings: T,
                                onDeleteHistory: i
                            })]
                        })]
                    })]
                }), _ && (0,
                j.jsx)(to, {
                    onClose: N,
                    onToggleHistoryDisabled: o,
                    onDeleteHistory: i
                }), u.has("system_message2") && (0,
                j.jsx)(nl, {})]
            })
        }
        var tR = function(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onNewThread
              , s = e.children;
            return (0,
            j.jsx)(j.Fragment, {
                children: (0,
                j.jsx)("div", {
                    className: "flex h-full min-h-0 flex-col ",
                    children: (0,
                    j.jsx)(tZ, {
                        onClickAccountPayment: n,
                        showAccountPaymentMenuItem: t,
                        onClickCustomerPortal: r,
                        showCustomerPortalMenuItem: a,
                        onDeleteHistory: i,
                        onNewThread: o,
                        children: s
                    })
                })
            })
        }
          , tD = function(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , a = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , o = e.onClose
              , s = e.sidebarOpen
              , l = e.onNewThread
              , u = e.children;
            return (0,
            j.jsx)(eH.u.Root, {
                show: s,
                as: C.Fragment,
                children: (0,
                j.jsxs)(eV.V, {
                    as: "div",
                    className: "relative",
                    onClose: o,
                    children: [(0,
                    j.jsx)(eH.u.Child, {
                        as: C.Fragment,
                        enter: "transition-opacity ease-linear duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity ease-linear duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        j.jsx)("div", {
                            className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                        })
                    }), (0,
                    j.jsxs)("div", {
                        className: "fixed inset-0 flex",
                        children: [(0,
                        j.jsx)(eH.u.Child, {
                            as: C.Fragment,
                            enter: "transition ease-in-out duration-300 transform",
                            enterFrom: "-translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            leaveFrom: "translate-x-0",
                            leaveTo: "-translate-x-full",
                            children: (0,
                            j.jsxs)(eV.V.Panel, {
                                className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                children: [(0,
                                j.jsx)(eH.u.Child, {
                                    as: C.Fragment,
                                    enter: "ease-in-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in-out duration-300",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0,
                                    j.jsx)("div", {
                                        className: "absolute right-0 top-0 -mr-12 pt-2",
                                        children: (0,
                                        j.jsxs)("button", {
                                            type: "button",
                                            className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            onClick: o,
                                            children: [(0,
                                            j.jsx)("span", {
                                                className: "sr-only",
                                                children: (0,
                                                j.jsx)(K.Z, (0,
                                                v._)({}, tw.closeSidebar))
                                            }), (0,
                                            j.jsx)(ec.ZP, {
                                                icon: J.q5L,
                                                size: "medium",
                                                className: "text-white",
                                                "aria-hidden": "true"
                                            })]
                                        })
                                    })
                                }), (0,
                                j.jsx)(tZ, {
                                    onClickAccountPayment: n,
                                    showAccountPaymentMenuItem: t,
                                    onClickCustomerPortal: r,
                                    showCustomerPortalMenuItem: a,
                                    onDeleteHistory: i,
                                    onNewThread: l,
                                    children: u
                                })]
                            })
                        }), (0,
                        j.jsx)("div", {
                            className: "w-14 flex-shrink-0"
                        })]
                    })]
                })
            })
        }
          , tF = function(e) {
            var n = e.clientThreadId
              , t = e.onClickOpenSidebar
              , r = e.onNewThread
              , a = e.title
              , i = (0,
            C.useContext)(L.QL)
              , o = i.historyDisabled
              , s = i.toggleHistoryDisabled
              , l = er(n, a, !0)
              , u = l.resolvedTitle
              , c = l.isTypingEffect;
            return (0,
            j.jsxs)("div", {
                className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                children: [(0,
                j.jsxs)("button", {
                    type: "button",
                    className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                    onClick: t,
                    children: [(0,
                    j.jsx)("span", {
                        className: "sr-only",
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, tw.openSidebar))
                    }), (0,
                    j.jsx)(ec.ZP, {
                        icon: J.cur,
                        "aria-hidden": "true",
                        size: "medium"
                    })]
                }), (0,
                j.jsx)("h1", {
                    className: "flex-1 text-center text-base font-normal",
                    children: o ? (0,
                    j.jsxs)("div", {
                        className: "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                        onClick: s,
                        children: [(0,
                        j.jsx)(J.$IY, {}), (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, tw.enableChatHistory))]
                    }) : c && null != u ? (0,
                    j.jsx)(es, {
                        text: u
                    }) : null != u ? u : (0,
                    j.jsx)(K.Z, (0,
                    v._)({}, tw.newChat))
                }), (0,
                j.jsx)("button", {
                    type: "button",
                    className: "px-3",
                    onClick: r,
                    children: (0,
                    j.jsx)(ec.ZP, {
                        icon: o ? J.Bw1 : J.OvN,
                        size: "medium"
                    })
                })]
            })
        };
        function tA(e) {
            var n = e.toggleNavigationSidebar
              , t = e.handleAccountPayment
              , r = e.handleClickCustomerPortal
              , a = e.handleResetThread
              , i = e.activeSidebar
              , o = e.isAccountPaid
              , s = e.children
              , l = (0,
            k.useRouter)()
              , u = (0,
            C.useRef)(null)
              , c = (0,
            et.w$)()
              , d = (0,
            eW.g)(function(e) {
                return e.flags.isUserInCanPayGroup
            })
              , f = eb()
              , h = A(function(e) {
                return e.isNavigationCollapsed
            })
              , g = !0 === o
              , m = (0,
            C.useCallback)(function() {
                ee.ZP.deleteConversations().then(function() {
                    f()
                }),
                a(),
                l.asPath !== tS && l.replace({
                    pathname: tS
                })
            }, [a, f, l]);
            return c ? (0,
            j.jsx)(W.E.div, {
                className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
                ref: u,
                initial: !1,
                animate: {
                    width: h ? 0 : "260px",
                    transition: {
                        duration: .2,
                        ease: "easeOut"
                    }
                },
                onAnimationStart: function() {
                    u.current && (u.current.style.visibility = "visible")
                },
                onAnimationComplete: function() {
                    u.current && h && (u.current.style.visibility = "hidden")
                },
                children: (0,
                j.jsx)("div", {
                    className: "h-full w-[260px]",
                    children: (0,
                    j.jsx)(tR, {
                        onClickAccountPayment: t,
                        showAccountPaymentMenuItem: !1 === o && d,
                        onClickCustomerPortal: r,
                        showCustomerPortalMenuItem: g,
                        onDeleteHistory: m,
                        onNewThread: a,
                        children: s
                    })
                })
            }) : (0,
            j.jsx)(tD, {
                onClose: n,
                sidebarOpen: "navigation" === i,
                onClickAccountPayment: t,
                showAccountPaymentMenuItem: !1 === o && d,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: g,
                onDeleteHistory: m,
                onNewThread: a,
                children: s
            })
        }
        var tE = t(37541)
          , tL = t(6128)
          , tB = t(5437)
          , tO = t.n(tB)
          , tq = t(11253)
          , tU = t.n(tq)
          , tz = t(75179)
          , tH = t(22208);
        function tV(e) {
            var n = e.id
              , t = e.label
              , r = e.disabled;
            return (0,
            j.jsxs)("div", {
                className: "form-check",
                children: [(0,
                j.jsx)("input", {
                    className: "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
                    type: "checkbox",
                    disabled: r,
                    value: "",
                    id: n
                }), (0,
                j.jsx)("label", {
                    className: "form-check-label text-gray-800 dark:text-gray-100",
                    htmlFor: n,
                    children: t
                })]
            })
        }
        var tG = t(54655)
          , tW = t(64664);
        function tQ(e) {
            var n, t;
            if (e.author.role === nG.uU.Assistant) {
                if ("browser" === e.recipient)
                    return c.Browsing;
                if ("code" === e.content.content_type || "python" === e.recipient && "text" === e.content.content_type)
                    return c.Code;
                if (null === (n = e.recipient) || void 0 === n ? void 0 : n.includes("."))
                    return c.Plugin
            } else if (e.author.role === nG.uU.Tool) {
                if ("browser" === e.author.name)
                    return c.BrowseTool;
                if ("execution_output" === e.content.content_type)
                    return c.CodeExecutionOutput;
                if ((null === (t = e.author.name) || void 0 === t ? void 0 : t.includes(".")) || "plugin_service" === e.author.name)
                    return c.PluginTool
            }
            return "text" === e.content.content_type ? c.Text : c.Unknown
        }
        (a = c || (c = {}))[a.Text = 0] = "Text",
        a[a.Browsing = 1] = "Browsing",
        a[a.BrowseTool = 2] = "BrowseTool",
        a[a.Code = 3] = "Code",
        a[a.CodeExecutionOutput = 4] = "CodeExecutionOutput",
        a[a.Plugin = 5] = "Plugin",
        a[a.PluginTool = 6] = "PluginTool",
        a[a.Unknown = 7] = "Unknown";
        var t$ = t(95182)
          , tJ = t.n(t$);
        function tY() {
            var e = (0,
            y._)(["text-xs flex items-center justify-center gap-1"]);
            return tY = function() {
                return e
            }
            ,
            e
        }
        function tX() {
            var e = (0,
            y._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
            return tX = function() {
                return e
            }
            ,
            e
        }
        function tK() {
            var e = (0,
            y._)(["flex-grow flex-shrink-0"]);
            return tK = function() {
                return e
            }
            ,
            e
        }
        function t0(e) {
            var n = e.currentPage
              , t = e.onChangeIndex
              , r = e.length
              , a = e.className
              , i = function(e) {
                t(tJ()(n + e, 0, r - 1))
            };
            return (0,
            j.jsxs)(t1, {
                className: a,
                children: [(0,
                j.jsx)(t2, {
                    onClick: function() {
                        return i(-1)
                    },
                    disabled: 0 === n,
                    children: (0,
                    j.jsx)(ec.ZP, {
                        size: "xsmall",
                        icon: J.YFh
                    })
                }), (0,
                j.jsx)(t3, {
                    children: "".concat(n + 1, " / ").concat(r)
                }), (0,
                j.jsx)(t2, {
                    onClick: function() {
                        return i(1)
                    },
                    disabled: n === r - 1,
                    children: (0,
                    j.jsx)(ec.ZP, {
                        size: "xsmall",
                        icon: J.Tfp
                    })
                })]
            })
        }
        var t1 = _.Z.div(tY())
          , t2 = _.Z.button(tX())
          , t3 = _.Z.span(tK());
        function t5(e) {
            var n, t = e.url, r = e.size, a = void 0 === r ? 16 : r, i = e.className;
            try {
                n = new URL(t)
            } catch (e) {
                return console.error(e),
                null
            }
            return (0,
            j.jsx)("img", {
                src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
                alt: "Favicon",
                width: a,
                height: a,
                className: i
            })
        }
        var t4 = "&#8203;"
          , t6 = "oaicite:";
        function t8(e) {
            var n, t = e.displayInfo;
            return (0,
            j.jsx)(nT.u, {
                label: (0,
                j.jsx)(t7, {
                    pageInfo: t.metadata,
                    invalidReason: t.invalid_reason
                }),
                side: "top",
                sideOffset: 4,
                withArrow: !1,
                interactive: !0,
                wide: !0,
                children: (0,
                j.jsx)("a", {
                    href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "px-0.5 text-green-600 !no-underline",
                    children: (0,
                    j.jsx)("sup", {
                        children: t.index + 1
                    })
                })
            })
        }
        function t7(e) {
            var n = e.pageInfo
              , t = e.invalidReason;
            return (0,
            j.jsx)("a", {
                href: null == n ? void 0 : n.url,
                target: "_blank",
                rel: "noreferrer",
                className: "text-xs !no-underline",
                children: n ? (0,
                j.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0,
                    j.jsx)("div", {
                        className: "flex shrink-0 items-center justify-center",
                        children: (0,
                        j.jsx)(t5, {
                            url: n.url,
                            className: "my-0"
                        })
                    }), (0,
                    j.jsx)("div", {
                        className: "max-w-xs truncate",
                        children: n.title
                    }), (0,
                    j.jsx)("div", {
                        className: "shrink-0",
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.AlO,
                            size: "xsmall"
                        })
                    })]
                }) : (0,
                j.jsx)("div", {
                    className: "text-red-500",
                    children: null != t ? t : "Invalid citation"
                })
            })
        }
        function t9() {
            var e = (0,
            y._)(["flex flex-col items-start"]);
            return t9 = function() {
                return e
            }
            ,
            e
        }
        function re() {
            var e = (0,
            y._)(["flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ", ""]);
            return re = function() {
                return e
            }
            ,
            e
        }
        function rn() {
            var e = (0,
            y._)(["max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800"]);
            return rn = function() {
                return e
            }
            ,
            e
        }
        var rt = C.memo(function(e) {
            var n = e.children
              , t = e.isComplete
              , r = e.expanderClosedLabel
              , a = e.expanderOpenLabel
              , i = e.resultsPreview
              , o = e.results
              , s = e.initialExpanded
              , l = e.onExpand
              , u = (0,
            b._)((0,
            C.useState)(void 0 !== s && s), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            C.useCallback)(function() {
                d(function(e) {
                    return !e
                }),
                null == l || l()
            }, [l]);
            return (0,
            j.jsxs)(rr, {
                children: [(0,
                j.jsxs)(ra, {
                    $complete: t,
                    children: [(0,
                    j.jsx)("div", {
                        children: n
                    }), !t && (0,
                    j.jsx)(ed.Z, {
                        className: o ? "ml-1" : "ml-12"
                    }), o && (0,
                    j.jsxs)("div", {
                        className: "ml-12 flex items-center gap-2",
                        role: "button",
                        onClick: f,
                        children: [a && r && (0,
                        j.jsx)("div", {
                            className: "text-xs text-gray-600",
                            children: c ? a : r
                        }), !c && i, (0,
                        j.jsx)(ec.ZP, {
                            icon: c ? J.rH8 : J.bTu
                        })]
                    })]
                }), c && o]
            })
        })
          , rr = _.Z.div(t9())
          , ra = _.Z.div(re(), function(e) {
            return e.$complete && "bg-gray-100"
        })
          , ri = _.Z.div(rn())
          , ro = (0,
        Y.vU)({
            startingBrowsing: {
                id: "browsingMessage.startingBrowsing",
                defaultMessage: "Browsing the web...",
                description: "Status message when browsing is starting"
            },
            finishedBrowsing: {
                id: "browsingMessage.finishedBrowsing",
                defaultMessage: "Finished browsing",
                description: "Status message when browsing is finished"
            },
            thinking: {
                id: "browsingMessage.thinking",
                defaultMessage: "Thinking...",
                description: "Status message when the next browsing command is being generated"
            },
            searchInProgress: {
                id: "browsingMessage.command.search.inProgress",
                defaultMessage: "Searching: <bold>“{searchQuery}”</bold>",
                description: "Browsing command to search the web is in progress"
            },
            searchInProgressBing: {
                id: "browsingMessage.command.search.inProgress.bing",
                defaultMessage: "Searching Bing: <bold>“<link>{searchQuery}</link>”</bold>",
                description: "Browsing command to search Bing is in progress"
            },
            searchFinished: {
                id: "browsingMessage.command.search.finished",
                defaultMessage: "Searched: <bold>“{searchQuery}”</bold>",
                description: "Browsing command to search the web finished"
            },
            searchFinishedBing: {
                id: "browsingMessage.command.search.finished.bing",
                defaultMessage: "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
                description: "Browsing command to search Bing finished"
            },
            searchError: {
                id: "browsingMessage.command.search.error",
                defaultMessage: "Search failed",
                description: "Browsing command to search the web failed"
            },
            clickInProgress: {
                id: "browsingMessage.command.click.inProgress",
                defaultMessage: "Clicking on a link...",
                description: "Browsing command to click on a link is in progress"
            },
            clickFinished: {
                id: "browsingMessage.command.click.finished",
                defaultMessage: "Clicked on a link",
                description: "Browsing command to click on a link finished"
            },
            clickFinishedWithLink: {
                id: "browsingMessage.command.click.finishedWithLink",
                defaultMessage: "Clicked on:",
                description: "Browsing command to click on a link finished. The link that was clicked will be displayed after the :"
            },
            clickError: {
                id: "browsingMessage.command.click.error",
                defaultMessage: "Click failed",
                description: "Browsing command to click on a link failed"
            },
            quote: {
                id: "browsingMessage.command.quote",
                defaultMessage: "Reading content",
                description: "Browsing command to read a specific quote from a page"
            },
            quoteError: {
                id: "browsingMessage.command.quote.error",
                defaultMessage: "Reading content failed",
                description: "Browsing command to read a specific quote from a page failed"
            },
            back: {
                id: "browsingMessage.command.back",
                defaultMessage: "Going back to last page",
                description: "Browsing command to go back to the last page"
            },
            backError: {
                id: "browsingMessage.command.back.error",
                defaultMessage: "Going back failed",
                description: "Browsing command to go back to the last page failed"
            },
            scroll: {
                id: "browsingMessage.command.scroll",
                defaultMessage: "Scrolling down",
                description: "Browsing command to scroll down on a page"
            },
            scrollError: {
                id: "browsingMessage.command.scroll.error",
                defaultMessage: "Scroll failed",
                description: "Browsing command to scroll down on a page failed"
            }
        })
          , rs = C.memo(function(e) {
            var n, t = e.messages, r = e.isComplete, a = (0,
            I.hz)(), i = t.map(function(e) {
                return e.message
            }), o = i.map(function(e, n) {
                if (e.author.role !== nG.uU.Tool || n > 0 && rx(e) && rx(i[n - 1]))
                    return null;
                var t = e.metadata;
                if (!t)
                    return null;
                var r = t.command
                  , a = t.status;
                return r ? {
                    type: r,
                    status: a,
                    didError: "system_error" === e.content.content_type,
                    message: e
                } : null
            }).filter(Boolean), s = o.map(function(e, n) {
                return (0,
                j.jsx)(rl, {
                    command: e
                }, n)
            });
            r ? (s.push((0,
            j.jsx)(rp, {}, "finished")),
            n = (0,
            j.jsx)(rp, {
                compact: !0
            })) : 0 === s.length ? (s.push((0,
            j.jsx)(rm, {}, "waiting")),
            n = (0,
            j.jsx)(rm, {
                compact: !0
            })) : "finished" === o[o.length - 1].status && s.push((0,
            j.jsx)(rv, {
                icon: J.Wqx,
                children: (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.thinking))
            }, "thinking")),
            n || (n = (0,
            j.jsx)(rl, {
                command: o[o.length - 1],
                compact: !0
            }));
            var l = a.has(en.UG) && !r ? function(e) {
                var n, t = e.reverse().find(function(e) {
                    return e.author.role === nG.uU.Assistant
                });
                if (!t)
                    return null;
                for (var r = nw.Cv.getTextFromMessage(t), a = /^#\s*(.*)/gm, i = []; null !== (n = a.exec(r)); )
                    i.push(n[1]);
                return i.length > 0 ? i.join("\n") : null
            }(i) : null;
            return (0,
            j.jsxs)(rt, {
                isComplete: r,
                results: (0,
                j.jsx)(ri, {
                    className: "text-xs",
                    children: s
                }),
                children: [null != l && (0,
                j.jsx)("div", {
                    className: "mb-2 whitespace-pre-wrap font-medium",
                    children: l
                }), n]
            })
        });
        function rl(e) {
            var n = e.command
              , t = e.compact;
            if (n.didError)
                return (0,
                j.jsx)(rg, {
                    commandType: n.type
                });
            switch (n.type) {
            case "search":
                var r, a, i = null === (r = n.message.metadata) || void 0 === r ? void 0 : null === (a = r.args) || void 0 === a ? void 0 : a[0];
                if (!i)
                    return null;
                return (0,
                j.jsx)(ru, {
                    searchQuery: i,
                    isComplete: "finished" === n.status,
                    compact: t
                });
            case "click":
            case "open_url":
                var o, s, l = null === (o = n.message.metadata) || void 0 === o ? void 0 : null === (s = o._cite_metadata) || void 0 === s ? void 0 : s.metadata_list[0];
                return (0,
                j.jsx)(rc, {
                    pageInfo: l,
                    compact: t
                });
            case "quote":
            case "quote_full":
                return (0,
                j.jsx)(rd, {
                    compact: t
                });
            case "back":
                return (0,
                j.jsx)(rf, {
                    compact: t
                });
            case "scroll":
                return (0,
                j.jsx)(rh, {
                    compact: t
                });
            default:
                return null
            }
        }
        function ru(e) {
            var n = e.searchQuery
              , t = e.isComplete
              , r = e.compact
              , a = (0,
            I.hz)().has(en.oQ)
              , i = a ? ro.searchInProgressBing : ro.searchInProgress
              , o = a ? ro.searchFinishedBing : ro.searchFinished
              , s = function(e) {
                var t = "https://www.bing.com/search?q=".concat(encodeURIComponent(n));
                return (0,
                j.jsx)("a", {
                    href: t,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-green-600",
                    children: e
                })
            };
            return (0,
            j.jsx)(rv, {
                icon: J.jRj,
                compact: r,
                children: t ? (0,
                j.jsx)(K.Z, (0,
                eU._)((0,
                v._)({}, o), {
                    values: {
                        bold: function(e) {
                            return (0,
                            j.jsx)("span", {
                                className: "font-medium",
                                children: e
                            })
                        },
                        link: a ? s : void 0,
                        searchQuery: n
                    }
                })) : (0,
                j.jsx)(K.Z, (0,
                eU._)((0,
                v._)({}, i), {
                    values: {
                        bold: function(e) {
                            return (0,
                            j.jsx)("span", {
                                className: "font-medium",
                                children: e
                            })
                        },
                        link: a ? s : void 0,
                        searchQuery: n
                    }
                }))
            })
        }
        function rc(e) {
            var n = e.pageInfo
              , t = e.compact;
            return (0,
            j.jsx)(rv, {
                icon: J.PS6,
                compact: t,
                children: n ? !0 === t ? (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.clickFinished)) : (0,
                j.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0,
                    j.jsx)(K.Z, (0,
                    v._)({}, ro.clickFinishedWithLink)), (0,
                    j.jsx)("div", {
                        className: "rounded border border-black/10 bg-white px-2 py-1",
                        children: (0,
                        j.jsx)(t7, {
                            pageInfo: n
                        })
                    })]
                }) : (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.clickInProgress))
            })
        }
        function rd(e) {
            var n = e.compact;
            return (0,
            j.jsx)(rv, {
                icon: J.SnF,
                compact: n,
                children: (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.quote))
            })
        }
        function rf(e) {
            var n = e.compact;
            return (0,
            j.jsx)(rv, {
                icon: J.cww,
                compact: n,
                children: (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.back))
            })
        }
        function rh(e) {
            var n = e.compact;
            return (0,
            j.jsx)(rv, {
                icon: J.nlg,
                compact: n,
                children: (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.scroll))
            })
        }
        function rg(e) {
            var n, t = e.commandType, r = e.compact;
            switch (t) {
            case "search":
                n = ro.searchError;
                break;
            case "click":
            case "open_url":
                n = ro.clickError;
                break;
            case "quote":
            case "quote_full":
                n = ro.quoteError;
                break;
            case "back":
                n = ro.backError;
                break;
            case "scroll":
                n = ro.scrollError;
                break;
            default:
                return null
            }
            return (0,
            j.jsx)(rv, {
                icon: J.bcx,
                compact: r,
                children: (0,
                j.jsx)(K.Z, (0,
                v._)({}, n))
            })
        }
        function rm(e) {
            var n = e.compact;
            return (0,
            j.jsx)(rv, {
                icon: J.jRj,
                compact: n,
                children: (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.startingBrowsing))
            })
        }
        function rp(e) {
            var n = e.compact;
            return (0,
            j.jsx)(rv, {
                icon: J._rq,
                compact: n,
                children: (0,
                j.jsx)(K.Z, (0,
                v._)({}, ro.finishedBrowsing))
            })
        }
        function rv(e) {
            var n = e.children
              , t = e.icon
              , r = e.compact;
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("flex items-center gap-2", !0 !== r && "min-h-[24px]"),
                children: [(0,
                j.jsx)(ec.ZP, {
                    icon: t,
                    className: "shrink-0"
                }), (0,
                j.jsx)("div", {
                    children: n
                })]
            })
        }
        function rx(e) {
            var n, t;
            return (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) === "quote" || (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) === "quote_full"
        }
        var rb = C.memo(function(e) {
            var n, t = e.message, r = e.isCollapsed, a = null === (n = t.message.metadata) || void 0 === n ? void 0 : n.aggregate_result;
            if (!a)
                return console.error("Corrupt code execution result message"),
                null;
            var i = a.messages.filter(rk)
              , o = r && i.length > 0
              , s = r && null != a.final_expression_output
              , l = r && null != a.in_kernel_exception
              , u = !r && a.messages.filter(rw).length > 0;
            return (0,
            j.jsxs)(j.Fragment, {
                children: [o && (0,
                j.jsx)(ry, {
                    label: "STDOUT/STDERR",
                    output: i.map(function(e, n) {
                        return (0,
                        j.jsx)("span", {
                            className: "stderr" === e.stream_name ? "text-red-500" : "",
                            children: e.text
                        }, "".concat(n))
                    })
                }), s && (0,
                j.jsx)(ry, {
                    label: "RESULT",
                    output: a.final_expression_output
                }), l && (0,
                j.jsx)("div", {
                    className: "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                    children: (0,
                    j.jsx)("div", {
                        className: "border-l-4 border-red-500 p-2 text-xs",
                        children: (0,
                        j.jsx)("div", {
                            className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                            children: (0,
                            j.jsx)("pre", {
                                className: "shrink-0",
                                children: a.in_kernel_exception.traceback.join("")
                            })
                        })
                    })
                }), u && a.messages.filter(rw).map(function(e, n) {
                    var t = null != e.image_payload ? (0,
                    j.jsx)("img", {
                        src: "data:image/png;base64,".concat(e.image_payload)
                    }) : null != e.image_url ? (0,
                    j.jsx)(rj, {
                        downloadUrl: e.image_url
                    }) : null;
                    return t ? (0,
                    j.jsx)("div", {
                        children: t
                    }, n) : null
                })]
            })
        });
        function ry(e) {
            var n = e.label
              , t = e.output;
            return (0,
            j.jsxs)("div", {
                className: "rounded-md bg-black p-4 text-xs",
                children: [(0,
                j.jsx)("div", {
                    className: "mb-1 text-gray-400",
                    children: n
                }), (0,
                j.jsx)("div", {
                    className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
                    children: (0,
                    j.jsx)("pre", {
                        className: "shrink-0",
                        children: t
                    })
                })]
            })
        }
        function rj(e) {
            var n = e.downloadUrl
              , t = (0,
            b._)((0,
            C.useState)(""), 2)
              , r = t[0]
              , a = t[1];
            return (0,
            nt.a)(["fsDownloadUrl", n], (0,
            nh._)(function() {
                return (0,
                ng.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, ee.ZP.downloadFileService(n)];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            }), {
                onSuccess: function(e) {
                    e.url && a(e.url)
                }
            }),
            (0,
            j.jsxs)(j.Fragment, {
                children: [" ", r && (0,
                j.jsx)("img", {
                    src: r
                }), " "]
            })
        }
        function rw(e) {
            return "image" === e.message_type
        }
        function rk(e) {
            return "stream" === e.message_type
        }
        var rC = t(45306)
          , r_ = t(61110)
          , rM = t(55975)
          , rT = t(46050)
          , rI = t(29874)
          , rN = t(8449)
          , rP = t(15472);
        let rS = {
            tokenize: function(e, n, t) {
                let r = this
                  , a = this.events[this.events.length - 1]
                  , i = a && a[1].type === rP.V.linePrefix ? a[2].sliceSerialize(a[1], !0).length : 0
                  , o = [];
                return function(n) {
                    return rM.q.backslash,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function n(r) {
                        return r === rM.q.backslash || r === rM.q.leftSquareBracket && o[0] === rM.q.backslash ? (e.consume(r),
                        o.push(r),
                        n) : (e.exit("mathFlowFenceSequence"),
                        o.length < 2 ? t(r) : (0,
                        rT.f)(e, s, rP.V.whitespace)(r))
                    }(n)
                }
                ;
                function s(n) {
                    return n === rM.q.eof || (0,
                    rI.Ch)(n) ? l(n) : (e.enter("mathFlowFenceMeta"),
                    e.enter(rP.V.chunkString, {
                        contentType: rN._.contentTypeString
                    }),
                    function n(r) {
                        return r === rM.q.eof || (0,
                        rI.Ch)(r) ? (e.exit(rP.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r)) : r === rM.q.rightSquareBracket ? t(r) : (e.consume(r),
                        n)
                    }(n))
                }
                function l(t) {
                    return e.exit("mathFlowFence"),
                    r.interrupt ? n(t) : function n(t) {
                        return t === rM.q.eof ? u(t) : (0,
                        rI.Ch)(t) ? e.attempt(rZ, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, u, i ? (0,
                        rT.f)(e, n, rP.V.linePrefix, i + 1) : n), u)(t) : (e.enter("mathFlowValue"),
                        function t(r) {
                            return r === rM.q.eof || (0,
                            rI.Ch)(r) ? (e.exit("mathFlowValue"),
                            n(r)) : (e.consume(r),
                            t)
                        }(t))
                    }(t)
                }
                function u(t) {
                    return e.exit("mathFlow"),
                    n(t)
                }
                function c(e, n, t) {
                    let r = [];
                    return (0,
                    rT.f)(e, function(n) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function n(i) {
                            return i === rM.q.backslash && 0 === r.length || i === rM.q.rightSquareBracket && r[0] === rM.q.backslash ? (e.consume(i),
                            r.push(i),
                            n) : r < o ? t(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            rT.f)(e, a, rP.V.whitespace)(i))
                        }(n)
                    }, rP.V.linePrefix, rN._.tabSize);
                    function a(r) {
                        return r === rM.q.eof || (0,
                        rI.Ch)(r) ? (e.exit("mathFlowFence"),
                        n(r)) : t(r)
                    }
                }
            },
            concrete: !0
        }
          , rZ = {
            tokenize: function(e, n, t) {
                let r = this;
                return function(n) {
                    return e.enter(rP.V.lineEnding),
                    e.consume(n),
                    e.exit(rP.V.lineEnding),
                    a
                }
                ;
                function a(e) {
                    return r.parser.lazy[r.now().line] ? t(e) : n(e)
                }
            },
            partial: !0
        }
          , rR = {
            tokenize: function(e, n, t) {
                let r = this
                  , a = r.events[r.events.length - 1]
                  , i = a && a[1].type === rP.V.linePrefix ? a[2].sliceSerialize(a[1], !0).length : 0
                  , o = 0;
                return function(n) {
                    return rM.q.dollarSign,
                    e.enter("mathFlow"),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    function n(r) {
                        return r === rM.q.dollarSign ? (e.consume(r),
                        o++,
                        n) : (e.exit("mathFlowFenceSequence"),
                        o < 2 ? t(r) : (0,
                        rT.f)(e, s, rP.V.whitespace)(r))
                    }(n)
                }
                ;
                function s(n) {
                    return n === rM.q.eof || (0,
                    rI.Ch)(n) ? l(n) : (e.enter("mathFlowFenceMeta"),
                    e.enter(rP.V.chunkString, {
                        contentType: rN._.contentTypeString
                    }),
                    function n(r) {
                        return r === rM.q.eof || (0,
                        rI.Ch)(r) ? (e.exit(rP.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r)) : r === rM.q.dollarSign ? t(r) : (e.consume(r),
                        n)
                    }(n))
                }
                function l(t) {
                    return e.exit("mathFlowFence"),
                    r.interrupt ? n(t) : function n(t) {
                        return t === rM.q.eof ? u(t) : (0,
                        rI.Ch)(t) ? e.attempt(rD, e.attempt({
                            tokenize: c,
                            partial: !0
                        }, u, i ? (0,
                        rT.f)(e, n, rP.V.linePrefix, i + 1) : n), u)(t) : (e.enter("mathFlowValue"),
                        function t(r) {
                            return r === rM.q.eof || (0,
                            rI.Ch)(r) ? (e.exit("mathFlowValue"),
                            n(r)) : (e.consume(r),
                            t)
                        }(t))
                    }(t)
                }
                function u(t) {
                    return e.exit("mathFlow"),
                    n(t)
                }
                function c(e, n, t) {
                    let r = 0;
                    return (0,
                    rT.f)(e, function(n) {
                        return e.enter("mathFlowFence"),
                        e.enter("mathFlowFenceSequence"),
                        function n(i) {
                            return i === rM.q.dollarSign ? (e.consume(i),
                            r++,
                            n) : r < o ? t(i) : (e.exit("mathFlowFenceSequence"),
                            (0,
                            rT.f)(e, a, rP.V.whitespace)(i))
                        }(n)
                    }, rP.V.linePrefix, rN._.tabSize);
                    function a(r) {
                        return r === rM.q.eof || (0,
                        rI.Ch)(r) ? (e.exit("mathFlowFence"),
                        n(r)) : t(r)
                    }
                }
            },
            concrete: !0
        }
          , rD = {
            tokenize: function(e, n, t) {
                let r = this;
                return function(n) {
                    return (0,
                    rI.Ch)(n),
                    e.enter(rP.V.lineEnding),
                    e.consume(n),
                    e.exit(rP.V.lineEnding),
                    a
                }
                ;
                function a(e) {
                    return r.parser.lazy[r.now().line] ? t(e) : n(e)
                }
            },
            partial: !0
        };
        function rF(e) {
            let n, t, r = e.length - 4, a = 3;
            if ((e[3][1].type === rP.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === rP.V.lineEnding || "space" === e[r][1].type)) {
                for (n = a; ++n < r; )
                    if ("mathTextData" === e[n][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (n = a - 1,
            r++; ++n <= r; )
                void 0 === t ? n !== r && e[n][1].type !== rP.V.lineEnding && (t = n) : (n === r || e[n][1].type === rP.V.lineEnding) && (e[t][1].type = "mathTextData",
                n !== t + 2 && (e[t][1].end = e[n - 1][1].end,
                e.splice(t + 2, n - t - 2),
                r -= n - t - 2,
                n = t + 2),
                t = void 0);
            return e
        }
        function rA(e) {
            return e !== rM.q.backslash || this.events[this.events.length - 1][1].type === rP.V.characterEscape
        }
        function rE(e) {
            let n, t, r = e.length - 4, a = 3;
            if ((e[3][1].type === rP.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === rP.V.lineEnding || "space" === e[r][1].type)) {
                for (n = a; ++n < r; )
                    if ("mathTextData" === e[n][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (n = a - 1,
            r++; ++n <= r; )
                void 0 === t ? n !== r && e[n][1].type !== rP.V.lineEnding && (t = n) : (n === r || e[n][1].type === rP.V.lineEnding) && (e[t][1].type = "mathTextData",
                n !== t + 2 && (e[t][1].end = e[n - 1][1].end,
                e.splice(t + 2, n - t - 2),
                r -= n - t - 2,
                n = t + 2),
                t = void 0);
            return e
        }
        function rL(e) {
            return e !== rM.q.dollarSign || this.events[this.events.length - 1][1].type === rP.V.characterEscape
        }
        function rB(e) {
            let n, t, r = e.length - 4, a = 3;
            if ((e[3][1].type === rP.V.lineEnding || "space" === e[a][1].type) && (e[r][1].type === rP.V.lineEnding || "space" === e[r][1].type)) {
                for (n = a; ++n < r; )
                    if ("mathTextData" === e[n][1].type) {
                        e[r][1].type = "mathTextPadding",
                        e[a][1].type = "mathTextPadding",
                        a += 2,
                        r -= 2;
                        break
                    }
            }
            for (n = a - 1,
            r++; ++n <= r; )
                void 0 === t ? n !== r && e[n][1].type !== rP.V.lineEnding && (t = n) : (n === r || e[n][1].type === rP.V.lineEnding) && (e[t][1].type = "mathTextData",
                n !== t + 2 && (e[t][1].end = e[n - 1][1].end,
                e.splice(t + 2, n - t - 2),
                r -= n - t - 2,
                n = t + 2),
                t = void 0);
            return e
        }
        function rO(e) {
            return e !== rM.q.backslash || this.events[this.events.length - 1][1].type === rP.V.characterEscape
        }
        var rq = t(67726)
          , rU = t(9871)
          , rz = t(93362)
          , rH = t(45369)
          , rV = t(42426)
          , rG = t(65028)
          , rW = t(88366);
        function rQ() {
            var e = (0,
            y._)(["bg-black rounded-md"]);
            return rQ = function() {
                return e
            }
            ,
            e
        }
        function r$() {
            var e = (0,
            y._)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ", ""]);
            return r$ = function() {
                return e
            }
            ,
            e
        }
        function rJ() {
            var e = (0,
            y._)(["p-4 overflow-y-auto"]);
            return rJ = function() {
                return e
            }
            ,
            e
        }
        function rY() {
            var e = (0,
            y._)(["", ""]);
            return rY = function() {
                return e
            }
            ,
            e
        }
        var rX = _.Z.div(rQ())
          , rK = _.Z.div(r$(), function(e) {
            return e.$isMessageRedesign && "dark:bg-gray-900"
        })
          , r0 = _.Z.div(rJ())
          , r1 = _.Z.code(rY(), function(e) {
            return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre"
        });
        function r2(e) {
            var n = e.children
              , t = e.className
              , r = e.language
              , a = e.content
              , i = (0,
            C.useCallback)(function() {
                navigator.clipboard.writeText(a)
            }, [a]);
            return (0,
            j.jsx)(r3, {
                title: r,
                headerDecoration: (0,
                j.jsx)(nC, {
                    buttonText: "Copy code",
                    onCopy: i
                }),
                className: "mb-4",
                codeClassName: t,
                children: n
            })
        }
        function r3(e) {
            var n = e.children
              , t = e.title
              , r = e.headerDecoration
              , a = e.shouldWrapCode
              , i = e.className
              , o = e.codeClassName
              , s = (0,
            I.hz)().has(en.FZ);
            return (0,
            j.jsxs)(rX, {
                className: i,
                children: [(0,
                j.jsxs)(rK, {
                    $isMessageRedesign: s,
                    children: [t && (0,
                    j.jsx)("span", {
                        children: t
                    }), r]
                }), (0,
                j.jsx)(r0, {
                    children: (0,
                    j.jsx)(r1, {
                        $shouldWrap: void 0 !== a && a,
                        className: o,
                        children: n
                    })
                })]
            })
        }
        var r5 = function(e) {
            return e.startsWith(tH.SANDBOX_LINK_PREFIX) ? e : (0,
            rU.A)(e)
        }
          , r4 = [rG.Z, [function() {
            let e = this.data();
            function n(n, t) {
                let r = e[n] ? e[n] : e[n] = [];
                r.push(t)
            }
            n("micromarkExtensions", {
                flow: {
                    [rM.q.dollarSign]: rR,
                    [rM.q.backslash]: rS
                },
                text: {
                    [rM.q.dollarSign]: {
                        tokenize: function(e, n, t) {
                            let r, a, i = 0;
                            return function(n) {
                                return e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function n(r) {
                                    return r === rM.q.dollarSign ? (e.consume(r),
                                    i++,
                                    n) : i < 2 ? t(r) : (e.exit("mathTextSequence"),
                                    o(r))
                                }(n)
                            }
                            ;
                            function o(l) {
                                return l === rM.q.eof ? t(l) : l === rM.q.dollarSign ? (a = e.enter("mathTextSequence"),
                                r = 0,
                                function t(o) {
                                    return o === rM.q.dollarSign ? (e.consume(o),
                                    r++,
                                    t) : r === i ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o)) : (a.type = "mathTextData",
                                    s(o))
                                }(l)) : l === rM.q.space ? (e.enter("space"),
                                e.consume(l),
                                e.exit("space"),
                                o) : (0,
                                rI.Ch)(l) ? (e.enter(rP.V.lineEnding),
                                e.consume(l),
                                e.exit(rP.V.lineEnding),
                                o) : (e.enter("mathTextData"),
                                s(l))
                            }
                            function s(n) {
                                return n === rM.q.eof || n === rM.q.space || n === rM.q.dollarSign || (0,
                                rI.Ch)(n) ? (e.exit("mathTextData"),
                                o(n)) : (e.consume(n),
                                s)
                            }
                        },
                        resolve: rE,
                        previous: rL
                    },
                    [rM.q.backslash]: [{
                        tokenize: function(e, n, t) {
                            let r;
                            let a = []
                              , i = []
                              , o = this;
                            return function(n) {
                                return rM.q.backslash,
                                rA.call(o, o.previous) && o.previous,
                                e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function n(r) {
                                    return (a.join(","),
                                    r === rM.q.backslash && 0 === a.length || r === rM.q.leftParenthesis && 1 === a.length) ? (e.consume(r),
                                    a.push(r),
                                    n) : a.length < 2 ? t(r) : (e.exit("mathTextSequence"),
                                    s(r))
                                }(n)
                            }
                            ;
                            function s(o) {
                                return o === rM.q.eof ? t(o) : o === rM.q.backslash ? (r = e.enter("mathTextSequence"),
                                i = [],
                                function t(o) {
                                    return (a.join(","),
                                    o === rM.q.backslash && 0 === i.length || o === rM.q.rightParenthesis && 1 === i.length) ? (e.consume(o),
                                    i.push(o),
                                    t) : i.length === a.length ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o)) : (r.type = "mathTextData",
                                    l(o))
                                }(o)) : o === rM.q.space ? (e.enter("space"),
                                e.consume(o),
                                e.exit("space"),
                                s) : (0,
                                rI.Ch)(o) ? (e.enter(rP.V.lineEnding),
                                e.consume(o),
                                e.exit(rP.V.lineEnding),
                                s) : (e.enter("mathTextData"),
                                l(o))
                            }
                            function l(n) {
                                return n === rM.q.eof || n === rM.q.space || n === rM.q.backslash || (0,
                                rI.Ch)(n) ? (e.exit("mathTextData"),
                                s(n)) : (e.consume(n),
                                l)
                            }
                        },
                        resolve: rF,
                        previous: rA
                    }, {
                        tokenize: function(e, n, t) {
                            let r;
                            let a = []
                              , i = []
                              , o = this;
                            return function(n) {
                                return rM.q.backslash,
                                rO.call(o, o.previous) && o.previous,
                                e.enter("mathText"),
                                e.enter("mathTextSequence"),
                                function n(r) {
                                    return (a.join(","),
                                    r === rM.q.backslash && 0 === a.length || r === rM.q.leftSquareBracket && 1 === a.length) ? (e.consume(r),
                                    a.push(r),
                                    n) : a.length < 2 ? t(r) : (e.exit("mathTextSequence"),
                                    s(r))
                                }(n)
                            }
                            ;
                            function s(o) {
                                return o === rM.q.eof ? t(o) : o === rM.q.backslash ? (r = e.enter("mathTextSequence"),
                                i = [],
                                function t(o) {
                                    return (a.join(","),
                                    o === rM.q.backslash && 0 === i.length || o === rM.q.rightSquareBracket && 1 === i.length) ? (e.consume(o),
                                    i.push(o),
                                    t) : i.length === a.length ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    n(o)) : (r.type = "mathTextData",
                                    l(o))
                                }(o)) : o === rM.q.space ? (e.enter("space"),
                                e.consume(o),
                                e.exit("space"),
                                s) : (0,
                                rI.Ch)(o) ? (e.enter(rP.V.lineEnding),
                                e.consume(o),
                                e.exit(rP.V.lineEnding),
                                s) : (e.enter("mathTextData"),
                                l(o))
                            }
                            function l(n) {
                                return n === rM.q.eof || n === rM.q.space || n === rM.q.backslash || (0,
                                rI.Ch)(n) ? (e.exit("mathTextData"),
                                s(n)) : (e.consume(n),
                                l)
                            }
                        },
                        resolve: rB,
                        previous: rO
                    }]
                }
            }),
            n("fromMarkdownExtensions", (0,
            r_.N)()),
            n("toMarkdownExtensions", (0,
            r_.O)())
        }
        , {
            singleDollarTextMath: !1
        }]]
          , r6 = [[rz.Z, {
            languages: {
                mathematica: rq.Z
            },
            detect: !0,
            subset: ["arduino", "bash", "c", "cpp", "csharp", "css", "diff", "go", "graphql", "java", "javascript", "json", "kotlin", "latex", "less", "lua", "makefile", "makefile", "markdown", "matlab", "mathematica", "nginx", "objectivec", "perl", "pgsql", "php-template", "php", "plaintext", "python-repl", "python", "r", "ruby", "rust", "scss", "shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml"],
            ignoreMissing: !0,
            aliases: {
                mathematica: "wolfram"
            }
        }], rH.Z, [rV.Z, {
            newlines: !0
        }]]
          , r8 = {
            code: function(e) {
                var n = e.inline
                  , t = e.node
                  , r = e.className
                  , a = e.children
                  , i = (0,
                x._)(e, ["inline", "node", "className", "children"]);
                if (n) {
                    var o = function(e) {
                        if (!e.startsWith(t6))
                            return null;
                        try {
                            return JSON.parse(e.slice(t6.length))
                        } catch (e) {
                            return {
                                index: -1
                            }
                        }
                    }((0,
                    rW.B)(t));
                    return o ? (0,
                    j.jsx)(t8, {
                        displayInfo: o
                    }) : (0,
                    j.jsx)("code", (0,
                    eU._)((0,
                    v._)({
                        className: r
                    }, i), {
                        children: a
                    }))
                }
                var s, l = null === (s = null == r ? void 0 : r.split(" ").filter(function(e) {
                    return e.startsWith("language-")
                })) || void 0 === s ? void 0 : s[0], u = l ? l.split("-")[1] : "";
                return (0,
                j.jsx)(r2, {
                    language: u,
                    className: r,
                    content: (0,
                    rW.B)(t),
                    children: a
                })
            }
        };
        function r7(e) {
            var n = e.size
              , t = e.children
              , r = e.className
              , a = e.onSandboxLinkClick
              , i = (0,
            nd.F)().theme
              , o = (0,
            I.hz)().has("tools2")
              , s = (0,
            C.useMemo)(function() {
                return (0,
                eU._)((0,
                v._)({}, r8), {
                    a: function(e) {
                        var n = e.node
                          , t = (0,
                        x._)(e, ["node"])
                          , r = n.properties.href;
                        return a && o && r.startsWith(tH.SANDBOX_LINK_PREFIX) ? (0,
                        j.jsx)("a", (0,
                        eU._)((0,
                        v._)({}, t), {
                            onClick: a
                        })) : (0,
                        j.jsx)("a", (0,
                        v._)({}, t))
                    },
                    img: function(e) {
                        var n = e.node
                          , t = (0,
                        x._)(e, ["node"])
                          , r = n.properties.src;
                        return r.startsWith("sandbox:") || r.startsWith("attachment:") ? null : (0,
                        j.jsx)("img", (0,
                        v._)({}, t))
                    }
                })
            }, [a, o]);
            return (0,
            j.jsx)(rC.D, {
                rehypePlugins: r6,
                remarkPlugins: r4,
                linkTarget: "_new",
                className: (0,
                B.Z)(r, "markdown prose w-full break-words dark:prose-invert", "dark" === i ? "dark" : "light", "small" === (void 0 === n ? "medium" : n) && "prose-xs"),
                transformLinkUri: r5,
                components: s,
                children: t
            })
        }
        function r9(e) {
            return nw.Cv.getIsMessageFinished(e.message) && !nw.Cv.getIsStopFromMessage(e.message)
        }
        var ae = {}
          , an = {};
        function at(e) {
            var n, t = e.message, r = e.outputMessage, a = (0,
            nd.F)().theme, i = (0,
            M.WS)(), o = null === (n = null == r ? void 0 : r.message.metadata) || void 0 === n ? void 0 : n.aggregate_result, s = (null == o ? void 0 : o.status) !== void 0 && (null == o ? void 0 : o.status) !== "running" || r9(t);
            (0,
            C.useEffect)(function() {
                ae[t.message.id] || (i(T.s6.renderTool2Message, {
                    id: t.message.id,
                    finishedExecuting: s
                }),
                ae[t.message.id] = !0)
            }, [i, t, s]);
            var l = (0,
            C.useCallback)(function() {
                an[t.message.id] || (i(T.s6.expandTool2Message, {
                    id: t.message.id,
                    finishedExecuting: s
                }),
                an[t.message.id] = !0)
            }, [i, t, s])
              , u = (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsx)("div", {
                    className: "mt-3 self-stretch",
                    children: (0,
                    j.jsx)(r7, {
                        className: (0,
                        B.Z)("markdown prose w-full break-words dark:prose-invert", "dark" === a ? "dark" : "light"),
                        children: function(e) {
                            var n = function(e, n) {
                                return "```".concat(n, "\n").concat(e, "\n```")
                            };
                            if ("code" === e.message.content.content_type)
                                return n(e.message.content.text, "python");
                            if ("python" === e.message.recipient) {
                                if ("text" !== e.message.content.content_type)
                                    throw Error("Unexpected content type for code message");
                                var t = e.message.content.parts;
                                if (1 !== t.length || "string" != typeof t[0])
                                    throw Error("Unexpected parts for code message");
                                return n(t[0], "python")
                            }
                            throw Error("Unexpected code message format")
                        }(t)
                    })
                }), r && (0,
                j.jsx)("div", {
                    className: "self-stretch",
                    children: (0,
                    j.jsx)(rb, {
                        message: r,
                        isCollapsed: !0
                    })
                })]
            });
            return (0,
            j.jsx)(rt, {
                expanderClosedLabel: "Show work",
                expanderOpenLabel: "Hide work",
                isComplete: s,
                results: u,
                onExpand: l,
                children: s ? "Finished working" : "Working..."
            })
        }
        var ar = t(59710);
        function aa() {
            var e = (0,
            y._)(["text-center mt-2 flex justify-center"]);
            return aa = function() {
                return e
            }
            ,
            e
        }
        var ai = _.Z.div(aa());
        function ao(e) {
            var n = e.initialText
              , t = e.role
              , r = e.clientThreadId
              , a = e.currentLeaf
              , i = e.onUpdateNode
              , o = e.onChangeItemInView
              , s = e.onExitEdit
              , l = e.onDeleteNode
              , u = e.onRequestCompletion
              , c = e.onCreateEditNode
              , d = e.disabled
              , f = (0,
            M.WS)()
              , h = (0,
            C.useId)()
              , g = "".concat(a, "-").concat(h)
              , m = (0,
            b._)((0,
            C.useState)(n || ""), 2)
              , p = m[0]
              , v = m[1]
              , x = (0,
            C.useRef)(null);
            (0,
            C.useEffect)(function() {
                c(a, g)
            }, []);
            var y = (0,
            C.useCallback)(function(e) {
                v(e.currentTarget.value)
            }, [])
              , w = (0,
            C.useCallback)(function() {
                i(g, p),
                o(g),
                u(nG.Os.Next, g, {
                    eventSource: "mouse"
                }, !0),
                s()
            }, [i, g, p, o, u, s])
              , k = (0,
            C.useCallback)(function() {
                l(g),
                o(a),
                s(),
                f(t === nG.uU.User ? T.s6.cancelEditPrompt : T.s6.cancelEditCompletion, {
                    threadId: N.tQ.getServerThreadId(r)
                })
            }, [g, a, f, o, l, s, t, r]);
            return (0,
            C.useEffect)(function() {
                var e = x.current
                  , n = function(e) {
                    "Enter" === e.key && e.metaKey ? w() : "Escape" === e.key && k()
                };
                return e && e.addEventListener("keydown", n),
                function() {
                    e && e.removeEventListener("keydown", n)
                }
            }, [k, w]),
            (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsx)(nr.ZP, {
                    ref: x,
                    value: p,
                    onChange: y,
                    className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
                }), (0,
                j.jsxs)(ai, {
                    children: [(0,
                    j.jsx)(eu.z, {
                        as: "button",
                        onClick: w,
                        className: "mr-2",
                        disabled: d,
                        children: "Save & Submit"
                    }), (0,
                    j.jsx)(eu.z, {
                        as: "button",
                        color: "neutral",
                        onClick: k,
                        children: "Cancel"
                    })]
                })]
            })
        }
        var as = t(10642)
          , al = t(47635);
        function au() {
            var e = (0,
            y._)(["text-xs text-black\n", ""]);
            return au = function() {
                return e
            }
            ,
            e
        }
        function ac() {
            var e = (0,
            y._)(["relative w-full overflow-hidden pt-[67%]"]);
            return ac = function() {
                return e
            }
            ,
            e
        }
        function ad(e) {
            var n, t = e.title, r = e.url, a = e.imageUrl, i = e.logoUrl, o = e.className, s = e.mini, l = !!a, u = (0,
            M.WS)(), c = (0,
            C.useCallback)(function() {
                u(T.s6.carouselCardClick, {
                    content: r
                })
            }, [u, r]);
            try {
                n = al.get(new URL(r).hostname)
            } catch (e) {
                return console.error("Invalid card url: ", e),
                null
            }
            return (0,
            j.jsxs)(r ? "a" : "div", {
                className: (0,
                B.Z)("flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]", o),
                href: r,
                target: r ? "_blank" : "",
                onClick: c,
                children: [l && (0,
                j.jsx)(ah, {
                    children: (0,
                    j.jsx)("div", {
                        className: "absolute inset-0",
                        children: (0,
                        j.jsx)("img", {
                            src: a,
                            alt: "image of ".concat(t),
                            className: "h-full w-full border-b border-black/10 object-cover"
                        })
                    })
                }), (0,
                j.jsxs)("div", {
                    className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
                    children: [(0,
                    j.jsx)(af, {
                        $clamp: void 0 !== s && s || l,
                        children: t
                    }), (0,
                    j.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [i ? (0,
                        j.jsx)(eX, {
                            url: i,
                            name: n,
                            size: 13
                        }) : (0,
                        j.jsx)(t5, {
                            url: r,
                            size: 13
                        }), (0,
                        j.jsx)("div", {
                            className: "text-[10px] leading-3 text-gray-500 line-clamp-1",
                            children: n
                        })]
                    })]
                })]
            })
        }
        var af = _.Z.div(au(), function(e) {
            return e.$clamp && "line-clamp-2"
        })
          , ah = _.Z.div(ac())
          , ag = t(96237)
          , am = t(21260)
          , ap = t(52422);
        function av(e) {
            var n = e.disabled
              , t = e.onClick
              , r = e.left
              , a = e.children;
            return (0,
            j.jsx)("button", {
                disabled: n,
                onClick: t,
                "aria-disabled": n,
                className: (0,
                B.Z)("flex h-6 w-[30px] items-center justify-center rounded-full", "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white", "transition-opacity disabled:opacity-20", "cursor-pointer disabled:cursor-auto", "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2", void 0 !== r && r ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full" : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full", n && "lg:hidden"),
                children: a
            })
        }
        var ax = function(e) {
            var n = e.x
              , t = e.children
              , r = e.className;
            return (0,
            j.jsx)(W.E.div, {
                className: (0,
                B.Z)("mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]", r),
                style: {
                    x: n
                },
                children: t
            })
        }
          , ab = {
            type: "spring",
            bounce: 0
        }
          , ay = (0,
        C.forwardRef)(function(e, n) {
            return (0,
            j.jsx)("div", {
                ref: n,
                className: (0,
                B.Z)("relative flex h-full w-full overflow-hidden", e.className),
                children: e.children
            })
        });
        ay.displayName = "CarouselContainer";
        var aj = (d = {},
        (0,
        ag._)(d, et._G.Mobile, 1),
        (0,
        ag._)(d, et._G.Small, 2),
        (0,
        ag._)(d, et._G.Medium, 2),
        (0,
        ag._)(d, et._G.Large, 3),
        (0,
        ag._)(d, et._G.XLarge, 3),
        d);
        function aw(e) {
            var n = e.children
              , t = e.loop
              , r = void 0 === t || t
              , a = e.className
              , i = (0,
            am.c)(0)
              , o = (0,
            C.useRef)(null)
              , s = (0,
            b._)((0,
            C.useState)(0), 2)
              , l = s[0]
              , u = s[1]
              , c = aj[(0,
            et.dQ)()] || 1
              , d = C.Children.count(n) > c
              , f = C.Children.toArray(n)
              , h = (0,
            C.useCallback)(function() {
                var e, n = null === (e = o.current) || void 0 === e ? void 0 : e.clientWidth;
                return n ? -Math.floor(l / c) * (n + 12) : 0
            }, [c, l])
              , g = (0,
            C.useCallback)(function(e) {
                var n = c * e;
                r ? u(function(e) {
                    return (e + n) % f.length - 1
                }) : u(function(e) {
                    return tJ()(e + n, 0, f.length - 1)
                })
            }, [f.length, r, c])
              , m = (0,
            C.useCallback)(function() {
                g(1)
            }, [g])
              , p = (0,
            C.useCallback)(function() {
                g(-1)
            }, [g])
              , v = (0,
            b._)((0,
            C.useMemo)(function() {
                if (r)
                    return [!0, !0];
                var e = l < f.length - c;
                return [l > 0, e]
            }, [f.length, l, r, c]), 2)
              , x = v[0]
              , y = v[1];
            return (0,
            C.useEffect)(function() {
                return (0,
                ap.j)(i, h(), ab).stop
            }, [h, l, i]),
            (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("relative h-full w-full", a, d && "mb-12 lg:mb-0"),
                children: [(0,
                j.jsx)(ay, {
                    ref: o,
                    children: f.map(function(e, n) {
                        return (0,
                        j.jsx)(ax, {
                            x: i,
                            children: e
                        }, n)
                    })
                }), d && (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)(av, {
                        onClick: p,
                        left: !0,
                        disabled: !x,
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.YFh
                        })
                    }), (0,
                    j.jsx)(av, {
                        onClick: m,
                        disabled: !y,
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.Tfp
                        })
                    })]
                })]
            })
        }
        function ak() {
            var e = (0,
            C.useContext)(L.AX)
              , n = n3().installedPlugins;
            return (0,
            C.useMemo)(function() {
                return n.filter(function(n) {
                    return e.has(n.id)
                })
            }, [e, n])
        }
        var aC = new Set(["og:site_name", "og:title", "og:description", "og:image", "og:url"])
          , a_ = {
            "og:site_name": "metadataTitle",
            "og:title": "title",
            "og:description": "description",
            "og:image": "imageUrl",
            "og:url": "url"
        }
          , aM = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
          , aT = C.memo(function(e) {
            var n, t, r = e.urls, a = ak(), i = (n = (0,
            eh.kP)().session,
            t = (0,
            as.h)({
                queries: r.map(function(e) {
                    return {
                        queryKey: ["opengraph", e],
                        queryFn: (0,
                        nh._)(function() {
                            return (0,
                            ng.Jh)(this, function(n) {
                                switch (n.label) {
                                case 0:
                                    return [4, ee.ZP.getPageMetadata({
                                        url: e
                                    })];
                                case 1:
                                    return [2, n.sent()]
                                }
                            })
                        }),
                        enabled: !!(e && (null == n ? void 0 : n.accessToken)),
                        retry: !1
                    }
                })
            }),
            (0,
            C.useMemo)(function() {
                return t.map(function(e, n) {
                    var t = e.data
                      , a = e.isError
                      , i = e.isLoading
                      , o = r[n];
                    if (a || i)
                        return null;
                    var s = t.tags.reduce(function(e, n) {
                        return aC.has(n.type) && (e[a_[n.type]] = n.value),
                        e
                    }, {});
                    try {
                        var l, u = o.split(/[#?]/)[0], c = null === (l = s.url) || void 0 === l ? void 0 : l.endsWith("/login"), d = s.url && "/" === new URL(s.url || "").pathname;
                        if (u !== s.url && (c || d))
                            return null
                    } catch (e) {
                        return null
                    }
                    return s.url = o,
                    s
                }).filter(Boolean)
            }, [t, r])), o = (0,
            C.useMemo)(function() {
                return !i.some(function(e) {
                    return !!(null == e ? void 0 : e.imageUrl)
                })
            }, [i]), s = (0,
            C.useMemo)(function() {
                return a.reduce(function(e, n) {
                    return e[al.get(n.domain)] = n.manifest.logo_url,
                    e
                }, {})
            }, [a]), l = (0,
            C.useMemo)(function() {
                return i.map(function(e) {
                    var n, t;
                    if (!e)
                        return null;
                    try {
                        n = al.get(new URL(e.url).hostname)
                    } catch (e) {
                        return console.error("Invalid card url: ", e),
                        null
                    }
                    return n in s && (t = s[n]),
                    (0,
                    j.jsx)(ad, {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: t,
                        mini: o
                    }, e.url)
                })
            }, [i, o, s]);
            return 0 === i.length ? null : (0,
            j.jsx)(aw, {
                loop: !1,
                children: l
            })
        })
          , aI = t(5046);
        function aN() {
            var e = (0,
            y._)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n", "\n", "\n", "\n"]);
            return aN = function() {
                return e
            }
            ,
            e
        }
        var aP = C.memo(function(e) {
            var n, t = e.message, r = e.isEditing, a = e.format, i = e.isCompletionInProgress, o = e.className, s = e.onSandboxLinkClick, l = e.isCompletion, u = e.isResponseToPluginMessage, c = (0,
            x._)(e, ["message", "isEditing", "format", "isCompletionInProgress", "className", "onSandboxLinkClick", "isCompletion", "isResponseToPluginMessage"]);
            return r ? (0,
            j.jsx)(ao, (0,
            v._)({
                currentLeaf: t.nodeId,
                initialText: nw.Cv.getTextFromMessage(t.message),
                role: t.message.author.role
            }, c)) : (0,
            j.jsx)(aS, {
                text: nw.Cv.getTextFromMessage(t.message),
                errCode: t.errCode,
                err: t.err,
                flag: t.errType,
                isCompletionInProgress: i,
                format: a,
                className: o,
                citations: null === (n = t.message.metadata) || void 0 === n ? void 0 : n.citations,
                isCompletion: l,
                onSandboxLinkClick: s,
                id: t.nodeId,
                onRequestMoreCompletions: c.onRequestMoreCompletions,
                clientThreadId: c.clientThreadId,
                showExtractedLinkCards: u
            })
        });
        function aS(e) {
            var n, t, r, a = e.citations, i = e.className, o = e.err, s = e.errCode, l = e.flag, u = e.format, c = e.isCompletionInProgress, d = e.size, f = e.text, h = e.onSandboxLinkClick, g = e.isCompletion, m = e.id, p = e.onRequestMoreCompletions, v = e.clientThreadId, x = e.showExtractedLinkCards, b = s === tz.Dd, y = (0,
            I.hz)(), w = (t = (n = {
                text: f,
                isCompletionInProgress: c
            }).text,
            r = n.isCompletionInProgress,
            (0,
            C.useMemo)(function() {
                if (r)
                    return [];
                var e = t.match(aM);
                return Array.from(new Set(e))
            }, [r, t])), k = (0,
            C.useMemo)(function() {
                switch (s) {
                case tz.Dd:
                    return (0,
                    j.jsx)(aF, {
                        $flag: l,
                        children: (0,
                        j.jsx)(aD, {})
                    });
                case aI.uU:
                    if (y.has("model_preview"))
                        return (0,
                        j.jsx)(aR, {
                            id: m,
                            onRequestMoreCompletions: p,
                            flag: l,
                            clientThreadId: v
                        });
                    return (0,
                    j.jsx)(aF, {
                        $flag: l,
                        children: o
                    });
                case ar.wp:
                    return (0,
                    j.jsx)(aF, {
                        $flag: l,
                        children: "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT."
                    });
                default:
                    return (0,
                    j.jsx)(aF, {
                        $flag: l,
                        children: o
                    })
                }
            }, [o, s, y, l, m, p, v]), _ = (0,
            I.hz)().has(en.FZ);
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)(i, "flex flex-col items-start gap-4 whitespace-pre-wrap break-words", "danger" === l && "flex flex-row gap-2 text-red-500", "warning" === l && "text-orange-500", _ && "text-base"),
                children: [o && !f || b || !u ? "danger" === l && b ? null : f : (0,
                j.jsx)(r7, {
                    size: void 0 === d ? "medium" : d,
                    className: (0,
                    B.Z)("danger" !== l && c && "result-streaming", "danger" === l && "text-red-500", "warning" === l && "text-orange-500"),
                    onSandboxLinkClick: h,
                    children: "" === f ? "&#8203;" : function(e, n) {
                        if (!n)
                            return e;
                        for (var t = n.length - 1; t >= 0; t--) {
                            var r = n[t]
                              , a = r.start_ix
                              , i = r.end_ix
                              , o = r.metadata
                              , s = r.invalid_reason
                              , l = {
                                index: t
                            };
                            o ? l.metadata = o : s && (l.invalid_reason = s),
                            e = e.slice(0, a) + "".concat(t4, "`").concat(t6).concat(JSON.stringify(l), "`").concat(t4) + e.slice(i)
                        }
                        return e
                    }(f, a)
                }), g && x && w.length > 0 && (0,
                j.jsx)(aT, {
                    urls: w
                }), l && k]
            })
        }
        function aZ(e) {
            var n = e && new Date(e)
              , t = n && new Date(n);
            return t ? "after ".concat(t.getHours() % 12 || 12, ":").concat(10 > t.getMinutes() ? "0" : "").concat(t.getMinutes(), " ").concat(t.getHours() >= 12 ? "PM" : "AM") : "later"
        }
        function aR(e) {
            var n = e.id
              , t = e.onRequestMoreCompletions
              , r = e.flag
              , a = e.clientThreadId
              , i = (0,
            k.useRouter)()
              , o = (0,
            aI.Y8)(function(e) {
                return e.isoDate
            })
              , s = aZ(o)
              , l = (0,
            C.useCallback)(function() {
                t(n, {
                    eventSource: "mouse"
                }, !0, "none", !1)
            }, [n, t])
              , u = (0,
            C.useCallback)(function() {
                var e = void 0 !== a ? N.tQ.getServerThreadId(a) : void 0;
                void 0 === e ? i.replace("/", void 0, {
                    shallow: !0
                }) : (0,
                aI.m0)(e),
                t(n, {
                    eventSource: "mouse"
                }, !0, "none", !0)
            }, [n, t, i, a])
              , c = o ? (0,
            j.jsxs)("span", {
                children: ["You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(s, "."), " ", (0,
                j.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more"
                })]
            }) : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
            return (0,
            j.jsx)(aF, {
                $flag: !!o && r,
                children: (0,
                j.jsxs)("div", {
                    className: "flex items-center gap-6",
                    children: [c, !o && (0,
                    j.jsx)(eu.z, {
                        color: "light",
                        className: "flex-shrink-0 bg-white",
                        onClick: l,
                        children: "Try again"
                    }), o && (0,
                    j.jsx)(eu.z, {
                        color: "light",
                        className: "flex-shrink-0 bg-white",
                        onClick: u,
                        children: "Use default model"
                    })]
                })
            })
        }
        function aD() {
            return (0,
            j.jsxs)(j.Fragment, {
                children: ["This content may violate our", " ", (0,
                j.jsx)("a", {
                    target: "_blank",
                    href: "https://platform.openai.com/docs/usage-policies/content-policy",
                    rel: "noreferrer",
                    className: "bold underline",
                    children: "content policy"
                }), ". If you believe this to be in error, please", " ", (0,
                j.jsx)("a", {
                    target: "_blank",
                    href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                    rel: "noreferrer",
                    className: "bold underline",
                    children: "submit your feedback"
                }), " ", "— your input will aid our research in this area."]
            })
        }
        var aF = _.Z.div(aN(), function(e) {
            return "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
        }, function(e) {
            return "danger" === e.$flag && "border-red-500 bg-red-500/10"
        }, function(e) {
            return !e.$flag && "border-green-500 bg-green-500/10"
        });
        function aA(e) {
            var n = e.messages
              , t = e.isCompletionInProgress
              , r = e.isCompletion
              , a = e.onRequestMoreCompletions
              , i = n.reduce(function(e, n) {
                return n.err ? e : e + nw.Cv.getTextFromMessage(n.message)
            }, "");
            return (0,
            j.jsx)(aS, {
                text: i,
                format: !0,
                isCompletion: r,
                isCompletionInProgress: t,
                id: "",
                onRequestMoreCompletions: a
            })
        }
        function aE() {
            var e = (0,
            y._)(["flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800"]);
            return aE = function() {
                return e
            }
            ,
            e
        }
        function aL() {
            var e = (0,
            y._)(["flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800"]);
            return aL = function() {
                return e
            }
            ,
            e
        }
        var aB = _.Z.div(aE());
        function aO() {
            return (0,
            j.jsx)(aB, {
                children: (0,
                j.jsx)(ec.ZP, {
                    icon: J.OH,
                    className: "h-3 w-3",
                    strokeWidth: 2.5
                })
            })
        }
        function aq() {
            return (0,
            j.jsx)(aB, {
                children: (0,
                j.jsx)(ec.ZP, {
                    icon: J.V7f,
                    className: "h-3 w-3"
                })
            })
        }
        var aU = _.Z.div(aL());
        function az() {
            return (0,
            j.jsxs)(aU, {
                children: [(0,
                j.jsx)(ec.ZP, {
                    icon: J.OH,
                    className: "h-3 w-3",
                    strokeWidth: 2.5
                }), (0,
                j.jsx)("div", {
                    children: "Unverified"
                })]
            })
        }
        function aH() {
            return (0,
            j.jsxs)(aU, {
                children: [(0,
                j.jsx)(ec.ZP, {
                    icon: J.V7f,
                    className: "h-3 w-3"
                }), (0,
                j.jsx)("div", {
                    children: "Localhost"
                })]
            })
        }
        var aV = C.memo(function(e) {
            var n, t = e.messages, r = (0,
            b._)(t, 2), a = r[0], i = r[1], o = ak(), s = null === (n = a.message.recipient) || void 0 === n ? void 0 : n.split(".")[0], l = o.find(function(e) {
                return e.namespace === s
            }), u = null == l ? void 0 : l.manifest.name_for_human;
            if (!u)
                return (0,
                j.jsx)("div", {
                    className: "result-streaming prose dark:prose-invert",
                    children: (0,
                    j.jsx)("span", {
                        children: "​"
                    })
                });
            var c = r9(a)
              , d = null != i ? (0,
            j.jsxs)("div", {
                children: ["Used ", (0,
                j.jsx)("b", {
                    children: u
                })]
            }) : c ? (0,
            j.jsxs)("div", {
                children: ["Tried to use ", (0,
                j.jsx)("b", {
                    children: u
                })]
            }) : (0,
            j.jsxs)("div", {
                children: ["Using ", (0,
                j.jsx)("b", {
                    children: u
                }), "..."]
            })
              , f = n$(l) ? (0,
            j.jsx)(aH, {}) : "approved" !== l.status ? (0,
            j.jsx)(az, {}) : void 0;
            return (0,
            j.jsx)(rt, {
                isComplete: null != i || c,
                results: (0,
                j.jsx)(aG, {
                    pluginName: u,
                    pluginMessage: a,
                    toolMessage: i
                }),
                children: (0,
                j.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [d, f]
                })
            })
        });
        function aG(e) {
            var n = e.pluginName
              , t = e.pluginMessage
              , r = e.toolMessage
              , a = nw.Cv.getTextFromMessage(t.message)
              , i = r ? nw.Cv.getTextFromMessage(r.message) : null;
            try {
                a = JSON.stringify(JSON.parse(a), null, 2),
                i && (i = JSON.stringify(JSON.parse(i), null, 2))
            } catch (e) {}
            var o = (null == r ? void 0 : r.message.author.name) === "plugin_service";
            return (0,
            j.jsxs)("div", {
                className: "my-3 flex max-w-full flex-col gap-3",
                children: [(0,
                j.jsx)(aW, {
                    title: "Request to ".concat(n),
                    infoTooltip: t.message.recipient,
                    children: a
                }), i && (0,
                j.jsx)(aW, {
                    title: o ? "Error" : "Response from ".concat(n),
                    infoTooltip: t.message.recipient,
                    children: (0,
                    j.jsx)("span", {
                        className: (0,
                        B.Z)(o && "text-red-500"),
                        children: i
                    })
                })]
            })
        }
        function aW(e) {
            var n = e.title
              , t = e.infoTooltip
              , r = e.children;
            return (0,
            j.jsx)(r3, {
                title: (0,
                j.jsx)("span", {
                    className: "uppercase",
                    children: n
                }),
                headerDecoration: void 0 !== t ? (0,
                j.jsx)(nT.u, {
                    label: t,
                    children: (0,
                    j.jsx)(ec.ZP, {
                        icon: J.H33,
                        className: "text-white/50"
                    })
                }) : void 0,
                shouldWrapCode: !0,
                className: "w-full text-xs text-white/80",
                children: r
            })
        }
        var aQ = t(90076);
        function a$() {
            var e = (0,
            y._)([""]);
            return a$ = function() {
                return e
            }
            ,
            e
        }
        function aJ() {
            var e = (0,
            y._)(["flex flex-grow flex-col gap-3"]);
            return aJ = function() {
                return e
            }
            ,
            e
        }
        function aY() {
            var e = (0,
            y._)(["flex p-4 gap-4 ", ""]);
            return aY = function() {
                return e
            }
            ,
            e
        }
        function aX() {
            var e = (0,
            y._)(["flex-shrink-0 flex flex-col relative items-end"]);
            return aX = function() {
                return e
            }
            ,
            e
        }
        function aK() {
            var e = (0,
            y._)(["p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2"]);
            return aK = function() {
                return e
            }
            ,
            e
        }
        function a0() {
            var e = (0,
            y._)(["p-1 ", ""]);
            return a0 = function() {
                return e
            }
            ,
            e
        }
        function a1() {
            var e = (0,
            y._)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n", ""]);
            return a1 = function() {
                return e
            }
            ,
            e
        }
        function a2() {
            var e = (0,
            y._)(["text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"]);
            return a2 = function() {
                return e
            }
            ,
            e
        }
        function a3() {
            var e = (0,
            y._)(["flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"]);
            return a3 = function() {
                return e
            }
            ,
            e
        }
        var a5 = ["#19c37d", "#ab68ff"];
        (i = f || (f = {}))[i.Text = 0] = "Text",
        i[i.MultiText = 1] = "MultiText",
        i[i.Browsing = 2] = "Browsing",
        i[i.Code = 3] = "Code",
        i[i.CodeExecutionOutput = 4] = "CodeExecutionOutput",
        i[i.Plugin = 5] = "Plugin";
        var a4 = C.memo(function(e) {
            var n, t, r, a = e.turnIndex, i = e.turnLeafId, o = e.isFinalTurn, s = e.clientThreadId, l = e.onChangeItemInView, u = e.onChangeRating, d = e.onRequestMoreCompletions, h = e.onDeleteNode, g = e.onRequestCompletion, m = e.onUpdateNode, p = e.onSandboxLinkClick, x = e.onHandleChangeVariantFeedbackInlineComparisonRating, y = e.activeRequests, w = e.showInlineEmbeddedDisplay, k = void 0 !== w && w, _ = e.currentModelId, P = e.isStaticSharedThread, S = void 0 !== P && P, Z = e.initiallyHighlightedMessageId, R = e.avatarColor, D = (0,
            N.GD)(s, a, i), F = D.role, A = D.messages, E = D.variantIds, O = eQ.G.theme, q = O.color, U = O.icon, z = O.activeColor, H = (0,
            eh.kP)().session, V = (0,
            et.x_)(), G = (0,
            M.WS)(), W = (0,
            b._)((0,
            C.useState)(!1), 2), Q = W[0], $ = W[1], Y = (0,
            C.useMemo)(function() {
                return E.findIndex(function(e) {
                    return e === A[0].nodeId
                })
            }, [E, A]), X = F !== nG.uU.User, K = (0,
            C.useContext)(L.QL).historyDisabled, ee = (0,
            I.hz)().has(en.FZ), er = (0,
            nf.Fl)(), ea = er.isBrowsingAvailable, ei = er.isPluginsAvailable, eo = er.isCodeInterpreterAvailable, es = ea || ei || eo, el = (0,
            C.useRef)(null);
            (0,
            C.useEffect)(function() {
                var e;
                null != Z && D.messages.map(function(e) {
                    return e.message.id
                }).includes(Z) && (null === (e = el.current) || void 0 === e || e.scrollIntoView({
                    behavior: "auto"
                }))
            }, [Z]);
            var eu = A[A.length - 1]
              , ed = (0,
            b._)((0,
            C.useState)(eu.rating), 2)
              , ef = ed[0]
              , eg = ed[1]
              , em = (0,
            I.hz)()
              , ep = ak()
              , ev = (0,
            C.useMemo)(function() {
                return X && (null == A ? void 0 : A[0]) && nw.Cv.getModelFromMessage(null == A ? void 0 : A[0].message) || _
            }, [X, A, _])
              , ex = (0,
            C.useCallback)(function() {
                1 === A.length && (G(F === nG.uU.User ? T.s6.editPrompt : T.s6.editCompletion, {
                    id: A[0].message.id,
                    threadId: N.tQ.getServerThreadId(s)
                }),
                $(!0))
            }, [A, G, F, s])
              , eb = (0,
            C.useCallback)(function() {
                $(!1)
            }, [])
              , ey = (0,
            C.useCallback)(function() {
                var e = A.reduce(function(e, n) {
                    return n.err || n.message.author.role !== nG.uU.Assistant || "all" !== n.message.recipient ? e : e + (e ? "\n\n" : "") + nw.Cv.getTextFromMessage(n.message)
                }, "");
                navigator.clipboard.writeText(e),
                G(T.s6.copyToClipboard, {
                    threadId: N.tQ.getServerThreadId(s),
                    id: A[0].message.id,
                    eventSource: "mouse",
                    model: ev
                }),
                tW.m.logEvent("chatgpt_copy_to_clipboard")
            }, [ev, G, A, s])
              , ej = (0,
            C.useCallback)(function(e) {
                u(eu.nodeId, eu.message.id, e),
                eg(e)
            }, [eu, u])
              , ew = (0,
            b._)((0,
            C.useState)(eu.inlineComparisonRating), 2)
              , ek = ew[0]
              , eC = ew[1];
            (0,
            C.useEffect)(function() {
                eg(function(e) {
                    return null != e ? e : eu.rating
                }),
                eC(function(e) {
                    return null != e ? e : eu.inlineComparisonRating
                })
            }, [eu]);
            var e_ = (0,
            C.useMemo)(function() {
                return nw.Cv.getRequestIdFromConversationTurn(D)
            }, [D])
              , eM = (0,
            C.useMemo)(function() {
                return y.has(e_)
            }, [y, e_])
              , eT = (0,
            C.useMemo)(function() {
                var e = !0
                  , n = !1
                  , t = void 0;
                try {
                    for (var r, a = A[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                        var i = r.value;
                        if (i.errType)
                            return i.errType
                    }
                } catch (e) {
                    n = !0,
                    t = e
                } finally {
                    try {
                        e || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw t
                    }
                }
                return !1
            }, [A])
              , eI = (0,
            C.useMemo)(function() {
                if (X) {
                    var e, n, t = N.tQ.getTree(s), r = null === (e = t.getParentPromptNode(A[0].nodeId)) || void 0 === e ? void 0 : e.parentId, a = r && (null === (n = t.getNode(r).message.metadata) || void 0 === n ? void 0 : n.model_slug);
                    if (ev && a && ev !== a)
                        return aQ.n2.has(a) ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model." : "The previous model used in this conversation is unavailable. We've switched you to the latest default model."
                }
                return null
            }, [ev, X, A, s])
              , eN = (0,
            C.useMemo)(function() {
                if (!es)
                    return {
                        avatarIcon: U,
                        avatarColor: q
                    };
                if (eM && A.length > 0) {
                    var e = A[A.length - 1]
                      , n = tQ(e.message);
                    switch (n) {
                    case c.Text:
                        if (nw.Cv.getTextFromMessage(e.message).length > 0 || A.length > 1)
                            return {
                                avatarIcon: "text",
                                avatarColor: z
                            };
                        break;
                    case c.Browsing:
                    case c.BrowseTool:
                        return {
                            avatarIcon: "browsing",
                            avatarColor: z
                        };
                    case c.Code:
                    case c.CodeExecutionOutput:
                        return {
                            avatarIcon: "code",
                            avatarColor: z
                        };
                    case c.Plugin:
                    case c.PluginTool:
                        var t = n === c.Plugin ? e.message.recipient : e.message.author.name
                          , r = null == t ? void 0 : t.split(".")[0]
                          , a = ep.find(function(e) {
                            return e.namespace === r
                        });
                        if (a)
                            return {
                                avatarPlugin: a
                            };
                        return {
                            avatarIcon: "plugin",
                            avatarColor: z
                        }
                    }
                }
                return {
                    avatarIcon: U,
                    avatarColor: q
                }
            }, [es, eM, A, U, q, z, ep])
              , eP = eN.avatarIcon
              , eS = eN.avatarColor
              , eZ = eN.avatarPlugin
              , eR = (0,
            C.useCallback)(function(e, n) {
                N.tQ.updateTree(s, function(t) {
                    var r = t.getParentId(e);
                    t.addNode(n, "", r, nG.Jq.Prompt)
                })
            }, [s])
              , eD = (0,
            C.useMemo)(function() {
                var e = [];
                return A.forEach(function(n, t) {
                    var r = tQ(n.message)
                      , a = null == A ? void 0 : A[t - 1]
                      , i = a && (nw.Cv.getIsIncompleteFromMessage(a.message) || nw.Cv.getIsContinuedFromMessage(a.message))
                      , o = r === c.Text && nw.Cv.getTextFromMessage(n.message);
                    if (i && null != o) {
                        var s = e.pop();
                        (null == s ? void 0 : s.type) === f.MultiText ? (s.messages.push(n),
                        e.push(s)) : (null == s ? void 0 : s.type) === f.Text && e.push({
                            type: f.MultiText,
                            messages: [s.message, n]
                        })
                    } else if (r === c.Browsing || r === c.BrowseTool) {
                        var l = e[e.length - 1];
                        (null == l ? void 0 : l.type) === f.Browsing ? l.messages.push(n) : e.push({
                            type: f.Browsing,
                            messages: [n]
                        })
                    } else if (r === c.Plugin || r === c.PluginTool) {
                        var u = e[e.length - 1];
                        r === c.PluginTool && (null == u ? void 0 : u.type) === f.Plugin ? u.messages.push(n) : e.push({
                            type: f.Plugin,
                            messages: [n]
                        })
                    } else {
                        var d = f.Text;
                        r === c.Code ? d = f.Code : r === c.CodeExecutionOutput && (d = f.CodeExecutionOutput),
                        e.push({
                            type: d,
                            message: n
                        })
                    }
                }),
                e.map(function(n, t) {
                    var r, a, i = t === e.length - 1;
                    switch (n.type) {
                    case f.Text:
                        return (0,
                        j.jsx)(aP, {
                            className: "min-h-[20px]",
                            message: n.message,
                            isEditing: Q,
                            format: X,
                            isCompletionInProgress: i && eM,
                            onCreateEditNode: eR,
                            clientThreadId: s,
                            onUpdateNode: m,
                            onDeleteNode: h,
                            onChangeItemInView: l,
                            onRequestCompletion: g,
                            onExitEdit: eb,
                            disabled: 0 !== y.size,
                            onSandboxLinkClick: (r = (0,
                            nh._)(function(e) {
                                return (0,
                                ng.Jh)(this, function(t) {
                                    return [2, p(n.message.nodeId, e)]
                                })
                            }),
                            function(e) {
                                return r.apply(this, arguments)
                            }
                            ),
                            isCompletion: X,
                            onRequestMoreCompletions: d,
                            isResponseToPluginMessage: (null === (a = e[t - 1]) || void 0 === a ? void 0 : a.type) === f.Plugin
                        }, n.message.nodeId);
                    case f.MultiText:
                        return (0,
                        j.jsx)(aA, {
                            messages: n.messages,
                            isCompletionInProgress: i && eM,
                            isCompletion: X,
                            onRequestMoreCompletions: d
                        }, t);
                    case f.Browsing:
                        var o = n.messages[n.messages.length - 1];
                        return (0,
                        j.jsx)(rs, {
                            messages: n.messages,
                            isComplete: !i || r9(o)
                        }, n.messages[0].nodeId);
                    case f.Code:
                        var u = e[t + 1]
                          , c = u && u.type === f.CodeExecutionOutput ? u.message : void 0;
                        return (0,
                        j.jsx)(at, {
                            message: n.message,
                            outputMessage: c
                        }, n.message.nodeId);
                    case f.CodeExecutionOutput:
                        return (0,
                        j.jsx)(rb, {
                            message: n.message,
                            isCollapsed: !1
                        }, n.message.nodeId);
                    case f.Plugin:
                        return (0,
                        j.jsx)(aV, {
                            messages: n.messages
                        }, n.messages[0].nodeId);
                    default:
                        return null
                    }
                })
            }, [A, Q, X, eM, eR, s, m, h, l, g, eb, y.size, p, d])
              , eF = (0,
            N.r7)(s)
              , eA = !S && !eF && V && X && !k && !Q && 1 === Y && o && !ek && !ef && 2 === E.length && Date.now() - (null !== (t = eu.message.create_time) && void 0 !== t ? t : 0) * 1e3 < 6e5 && !eM && em.has(en.st)
              , eE = (0,
            C.useRef)(Date.now())
              , eL = (0,
            C.useRef)((null !== (r = eu.message.create_time) && void 0 !== r ? r : Date.now()) * 1e3)
              , eB = (0,
            C.useRef)(Date.now());
            (0,
            C.useEffect)(function() {
                eM || (eB.current = Date.now())
            }, [eM]);
            var eO = (0,
            C.useCallback)(function(e) {
                if (eA) {
                    var n, t, r = N.tQ.getTree(s), a = E[0] || "", i = (null == r ? void 0 : r.getConversationTurns(a)) || [], o = i[i.length - 1], l = (null == o ? void 0 : o.messages) || [], u = l[l.length - 1], c = (null == u ? void 0 : null === (n = u.message) || void 0 === n ? void 0 : n.id) || "", d = E[1] || "", f = (null == r ? void 0 : r.getConversationTurns(d)) || [], h = f[f.length - 1], g = (null == h ? void 0 : h.messages) || [], m = g[g.length - 1];
                    x(c, (null == m ? void 0 : null === (t = m.message) || void 0 === t ? void 0 : t.id) || "", e, eE.current, eE.current, eL.current, eB.current),
                    N.tQ.updateTree(s, function(n) {
                        n.updateNode(eu.nodeId, {
                            metadata: {
                                $set: (0,
                                eU._)((0,
                                v._)({}, n.getMetadata(eu.nodeId)), {
                                    inlineComparisonRating: e
                                })
                            }
                        })
                    }),
                    eC(e),
                    N.tQ.updateTree(s, function(e) {
                        e.updateNode(u.nodeId, {
                            metadata: {
                                $set: (0,
                                eU._)((0,
                                v._)({}, e.getMetadata(u.nodeId)), {
                                    inlineComparisonRating: "baseline"
                                })
                            }
                        })
                    })
                }
            }, [eA, eu.nodeId, x, s, E])
              , eq = (0,
            C.useCallback)(function() {
                N.tQ.updateTree(s, function(e) {
                    e.updateNode(eu.nodeId, {
                        metadata: {
                            $set: (0,
                            eU._)((0,
                            v._)({}, e.getMetadata(eu.nodeId)), {
                                inlineComparisonRating: "skip"
                            })
                        }
                    })
                }),
                eC("skip")
            }, [eu.nodeId, s])
              , ez = X && !k && !S && !eF
              , eH = !k && !Q
              , eV = !X && !k && !S && 1 === A.length && !Q;
            if (D.role === nG.uU.Unknown || D.role === nG.uU.System)
                return null;
            var eG = eV ? (0,
            j.jsx)(it, {
                $isMessageRedesign: ee,
                onClick: ex,
                className: (0,
                B.Z)(!ee && V && "md:invisible md:group-hover:visible"),
                children: (0,
                j.jsx)(ec.ZP, {
                    icon: J.vPQ
                })
            }) : null
              , eW = X && !k ? (0,
            j.jsx)(nC, {
                onCopy: ey,
                className: (0,
                B.Z)("rounded-md p-1", ee ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400" : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400")
            }) : null
              , e$ = ez ? (0,
            j.jsxs)("div", {
                className: "flex gap-1",
                children: ["thumbsDown" !== ef && !K && (0,
                j.jsx)(it, {
                    $isMessageRedesign: ee,
                    onClick: function() {
                        return ej("thumbsUp")
                    },
                    disabled: "thumbsUp" === ef,
                    className: (0,
                    B.Z)("thumbsUp" === ef && (ee ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                    children: (0,
                    j.jsx)(ec.ZP, {
                        icon: J.fmn
                    })
                }, "thumbsUp:".concat(eu.nodeId)), "thumbsUp" !== ef && !K && (0,
                j.jsx)(it, {
                    $isMessageRedesign: ee,
                    onClick: function() {
                        return ej("thumbsDown")
                    },
                    disabled: "thumbsDown" === ef,
                    className: (0,
                    B.Z)("thumbsDown" === ef && (ee ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                    children: (0,
                    j.jsx)(ec.ZP, {
                        icon: J.oLd
                    })
                }, "thumbsDown:".concat(eu.nodeId))]
            }) : null
              , eJ = eA && !K ? (0,
            j.jsxs)(ii, {
                children: [(0,
                j.jsx)("div", {
                    className: (0,
                    B.Z)("mr-4"),
                    children: "Was this response better or worse?"
                }), (0,
                j.jsxs)(ie, {
                    onClick: function() {
                        return eO("new")
                    },
                    title: "This response was better than the previous response",
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.fmn,
                        className: (0,
                        B.Z)("mr-1")
                    }), "Better"]
                }), (0,
                j.jsxs)(ie, {
                    onClick: function() {
                        return eO("original")
                    },
                    title: "This response was worse than the previous response",
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.oLd,
                        className: (0,
                        B.Z)("mr-1")
                    }), "Worse"]
                }), (0,
                j.jsxs)(ie, {
                    onClick: function() {
                        return eO("same")
                    },
                    title: "This response was the same in quality",
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: tG.Ny3,
                        className: (0,
                        B.Z)("mr-1 rounded-full border border-gray-400 dark:border-gray-300")
                    }), "Same"]
                }), (0,
                j.jsx)(ie, {
                    onClick: eq,
                    title: "Skip this comparison",
                    children: (0,
                    j.jsx)(ec.ZP, {
                        icon: J.q5L,
                        size: "medium"
                    })
                })]
            }) : null
              , eY = eH && E.length > 1
              , eX = function() {
                return (0,
                j.jsxs)("div", {
                    className: "flex gap-1",
                    children: [e$, eG, eW]
                })
            }
              , eK = null === (n = A[0].message.metadata) || void 0 === n ? void 0 : n.shared_conversation_id
              , e0 = null != eK;
            return (0,
            j.jsxs)(a6, {
                className: (0,
                B.Z)("group", "w-full text-gray-800 dark:text-gray-100", ee ? (0,
                B.Z)("sm:rounded-2xl", X ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50" : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600") : (0,
                B.Z)(!k && "border-b border-black/10 dark:border-gray-900/50", X ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800")),
                ref: el,
                children: [eI && (0,
                j.jsx)(ia, {
                    children: eI
                }), (0,
                j.jsxs)(a7, {
                    $isMessageRedesign: ee,
                    className: (0,
                    B.Z)(k ? "ml-5" : "m-auto"),
                    children: [(0,
                    j.jsxs)(a9, {
                        children: [(0,
                        j.jsx)("div", {
                            className: ee ? "" : "w-[30px]",
                            children: X ? eZ ? (0,
                            j.jsx)(e6, {
                                plugin: eZ,
                                notice: eT || void 0
                            }) : (0,
                            j.jsx)(e4, {
                                background: null != R ? R : eS,
                                iconName: eP,
                                notice: eT || void 0
                            }) : (0,
                            j.jsx)(ne, {
                                user: e0 ? {
                                    name: "User"
                                } : null == H ? void 0 : H.user,
                                notice: eT || void 0,
                                size: ee ? "redesign" : "medium",
                                backgroundColorForInitials: null != eK ? a5[eK.charCodeAt(0) % a5.length] : void 0
                            })
                        }), !ee && eH && V && (0,
                        j.jsx)(t0, {
                            currentPage: Y,
                            onChangeIndex: function(e) {
                                return l(E[e])
                            },
                            length: E.length,
                            className: (0,
                            B.Z)("invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible", E.length > 1 ? "visible" : "!invisible")
                        })]
                    }), (0,
                    j.jsxs)("div", {
                        className: (0,
                        B.Z)("relative", ee ? "min-w-0 grow" : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"),
                        children: [ee && (0,
                        j.jsx)("div", {
                            className: "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                            children: X ? "ChatGPT" : e0 ? "User" : "You"
                        }), (0,
                        j.jsx)(a8, {
                            children: eD
                        }), ee ? (!V || eY || null != eJ) && !k && (0,
                        j.jsxs)("div", {
                            className: "mt-2 flex flex-col gap-4",
                            children: [(0,
                            j.jsxs)("div", {
                                className: "flex gap-2 text-gray-400",
                                children: [eY && (0,
                                j.jsx)(t0, {
                                    currentPage: Y,
                                    onChangeIndex: function(e) {
                                        return l(E[e])
                                    },
                                    length: E.length,
                                    className: "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700"
                                }), !V && eX()]
                            }), eJ]
                        }) : (0,
                        j.jsxs)(j.Fragment, {
                            children: [eV && V && (0,
                            j.jsx)(ir, {
                                $hidden: 0 !== y.size,
                                children: eG
                            }), (ez || eH) && (0,
                            j.jsxs)("div", {
                                className: "flex justify-between lg:block",
                                children: [!V && eH && (0,
                                j.jsx)(t0, {
                                    currentPage: Y,
                                    onChangeIndex: function(e) {
                                        return l(E[e])
                                    },
                                    length: E.length,
                                    className: (0,
                                    B.Z)("self-center pt-2", E.length > 1 ? "visible" : "!invisible")
                                }), eV && !V && (0,
                                j.jsx)(ir, {
                                    $hidden: eM,
                                    children: eG
                                }), ez && (0,
                                j.jsxs)(ir, {
                                    $hidden: eM,
                                    children: [eW, e$]
                                }), eA && !K && eJ]
                            })]
                        })]
                    }), ee && V && !Q && !k && (!S || X) && (0,
                    j.jsx)("div", {
                        className: "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                        children: eX()
                    })]
                })]
            })
        })
          , a6 = _.Z.div(a$())
          , a8 = _.Z.div(aJ())
          , a7 = _.Z.div(aY(), function(e) {
            return e.$isMessageRedesign ? "relative" : "text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0"
        })
          , a9 = _.Z.div(aX())
          , ie = _.Z.button(aK())
          , it = _.Z.button(a0(), function(e) {
            return e.$isMessageRedesign ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm" : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
        })
          , ir = _.Z.div(a1(), function(e) {
            return e.$hidden ? "invisible" : "visible"
        })
          , ia = _.Z.div(a2())
          , ii = _.Z.div(a3());
        function io() {
            var e = (0,
            y._)(["mb-2 mt-auto ml-auto mr-auto"]);
            return io = function() {
                return e
            }
            ,
            e
        }
        function is() {
            var e = (0,
            y._)(["relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden"]);
            return is = function() {
                return e
            }
            ,
            e
        }
        function il() {
            var e = (0,
            y._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
            return il = function() {
                return e
            }
            ,
            e
        }
        function iu() {
            var e = (0,
            y._)([""]);
            return iu = function() {
                return e
            }
            ,
            e
        }
        var ic = (0,
        Y.vU)({
            submitFeedback: {
                id: "feedbackModal.submitFeedback",
                defaultMessage: "Submit feedback",
                description: "Button text for submitting the feedback"
            },
            submitReport: {
                id: "feedbackModal.submitReport",
                defaultMessage: "Submit report",
                description: "Button text for submitting a content-moderation report"
            },
            submitRejectModeration: {
                id: "feedbackModal.moderationReject",
                defaultMessage: "Block Content",
                description: "Button text for rejecting the share link and blocking it from being viewed"
            },
            submitAcceptModeration: {
                id: "feedbackModal.moderationAccept",
                defaultMessage: "Allow Content",
                description: "Button text for accepting the share link and allowing it to be viewed"
            },
            thumbsUpPlaceholder: {
                id: "feedbackModal.thumbsUpPlaceholder",
                defaultMessage: "What do you like about the response?",
                description: "Placeholder for textarea input when user chooses thumbs up"
            },
            thumbsDownPlaceholder: {
                id: "feedbackModal.thumbsDownPlaceholder",
                defaultMessage: "What was the issue with the response? How could it be improved?",
                description: "Placeholder for textarea input when user chooses thumbs down"
            },
            reportContentExplanationPlaceholder: {
                id: "feedbackModal.reportContentExplanationPlaceholder",
                defaultMessage: "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
                description: "Placeholder for textarea input when user chooses to report a shared conversation"
            },
            harmfulUnsafe: {
                id: "feedbackModal.harmfulUnsafe",
                defaultMessage: "This is harmful / unsafe",
                description: "Label for harmful/unsafe checkbox"
            },
            harmfulOffensive: {
                id: "feedbackModal.harmfulOffensive",
                defaultMessage: "This content is harmful or offensive",
                description: "Label for harmful/offensive checkbox"
            },
            copyrightContent: {
                id: "feedbackModal.copyrightContent",
                defaultMessage: "This content violates copyright law",
                description: "Label for Copyrighted Content checkbox"
            },
            reportOtherContent: {
                id: "feedbackModal.reportOtherContent",
                defaultMessage: "I don't like this for some other reason (please describe)",
                description: "Label for Report Other Content checkbox"
            },
            notTrue: {
                id: "feedbackModal.notTrue",
                defaultMessage: "This isn't true",
                description: "Label for not true checkbox"
            },
            notHelpful: {
                id: "feedbackModal.notHelpful",
                defaultMessage: "This isn't helpful",
                description: "Label for not helpful checkbox"
            },
            dontLikeThis: {
                id: "feedbackModal.dontLikeThis",
                defaultMessage: "I don't like this",
                description: "Label for I Don't Like This checkbox"
            },
            sexualAbuse: {
                id: "feedbackModal.sexualAbuse",
                defaultMessage: "This content contains sexual abuse",
                description: "Label for Sexual Abuse checkbox"
            },
            provideAdditionalFeedback: {
                id: "feedbackModal.provideAdditionalFeedback",
                defaultMessage: "Provide additional feedback",
                description: "Title for the critique feedback modal"
            },
            provideReportModalTitle: {
                id: "feedbackModal.provideReportModalTitle",
                defaultMessage: "Report This Content",
                description: "Title for the 'report' feedback modal"
            },
            pickBestAnswer: {
                id: "feedbackModal.pickBestAnswer",
                defaultMessage: "Pick the best answer to improve the model",
                description: "Title for the compare feedback modal"
            },
            newAnswer: {
                id: "feedbackModal.newAnswer",
                defaultMessage: "New Answer",
                description: "Title for the new answer during comparison"
            },
            originalAnswer: {
                id: "feedbackModal.originalAnswer",
                defaultMessage: "Original Answer",
                description: "Title for the original answer during comparison"
            },
            newAnswerBetter: {
                id: "feedbackModal.newAnswerBetter",
                defaultMessage: "New answer is better",
                description: "Button text for choosing new answer during comparison"
            },
            originalAnswerBetter: {
                id: "feedbackModal.originalAnswerBetter",
                defaultMessage: "Original answer is better",
                description: "Button text for choosing original answer during comparison"
            },
            neitherAnswerBetter: {
                id: "feedbackModal.neitherAnswerBetter",
                defaultMessage: "Neither answer is better",
                description: "Button text for choosing neither answer during comparison"
            },
            skipStep: {
                id: "feedbackModal.skipStep",
                defaultMessage: "Skip this step",
                description: "Button text for skipping comparison step"
            },
            continueWithChosenAnswer: {
                id: "feedbackModal.continueWithChosenAnswer",
                defaultMessage: "The conversation will continue with the answer you choose.",
                description: "Information text for user during comparison"
            }
        });
        function id(e) {
            var n, t, r, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (null == e ? void 0 : null === (n = e.messages) || void 0 === n ? void 0 : n.length) === 1 && !(null == e ? void 0 : null === (t = e.messages) || void 0 === t ? void 0 : t.some(function(e) {
                return "error"in e
            })) && (!a || !((null == e ? void 0 : null === (r = e.messages) || void 0 === r ? void 0 : r.length) === 1 && nw.Cv.getTextFromMessage(null == e ? void 0 : e.messages[0].message).length < 20))
        }
        function ih(e) {
            var n, t, r = e.ratingModalNodeId, a = e.ratingModalOpen, i = e.onCloseRatingModal, o = e.handleSubmitFeedback, s = e.onHandleChangeFeedbackComparisonRating, l = e.feedbackTextareaRef, u = e.clientThreadId, c = e.activeRequests, d = e.currentModelId, f = e.onChangeItemInView, h = e.onRequestMoreCompletions, g = e.onDeleteNode, m = e.onRequestCompletion, p = e.onUpdateNode, x = e.onSandboxLinkClick, y = (0,
            X.Z)(), w = N.tQ.getTree(u), k = (0,
            N.XK)(u);
            (0,
            C.useEffect)(function() {
                "report" === a && eh.pg.forceEnableSession()
            }, [a]);
            var _ = (0,
            C.useRef)(.5 > Math.random() ? "left" : "right")
              , P = null == w ? void 0 : w.getConversationTurns(r || "root")
              , S = P.length - 1
              , Z = P[P.length - 1]
              , R = (0,
            I.hz)().has(en.FZ)
              , D = (0,
            b._)((0,
            C.useState)("critique"), 2)
              , F = D[0]
              , A = D[1]
              , E = (0,
            et.w$)()
              , L = (0,
            I.hz)().has(en.Pt) && id(Z, !0) && E
              , O = (0,
            M.WS)()
              , q = (0,
            C.useMemo)(function() {
                return {
                    id: r || "root",
                    threadId: N.tQ.getServerThreadId(u),
                    rating: a,
                    model: d
                }
            }, [r, u, a, d])
              , U = null == P ? void 0 : P[(null == P ? void 0 : P.length) - 1].variantIds
              , z = null == U ? void 0 : U[(null == U ? void 0 : U.length) - 1]
              , H = (t = (n = null == w ? void 0 : w.getConversationTurns(z))[n.length - 1]).messages[t.messages.length - 1].nodeId
              , V = null == w ? void 0 : w.getConversationTurns(H)
              , G = (0,
            C.useMemo)(function() {
                var e = null == V ? void 0 : V[(null == V ? void 0 : V.length) - 1];
                return "thumbsDown" === a && L && id(e) && id(Z)
            }, [a, L, V, Z])
              , W = (0,
            C.useRef)(Date.now())
              , Q = (0,
            C.useRef)(-1)
              , Y = (0,
            C.useRef)(Date.now())
              , er = (0,
            C.useRef)(Date.now());
            (0,
            C.useEffect)(function() {
                "compare" === F ? (Q.current = Date.now(),
                O(T.s6.displayedComparisonUIV0, q)) : "critique" === F && "thumbsDown" === a && O(T.s6.displayedThumbsDownFeedbackForm, q)
            }, [F]);
            var ea = P.length - 2
              , ei = V.length - 1
              , eo = V[V.length - 1]
              , es = (0,
            C.useMemo)(function() {
                return eo && nw.Cv.getRequestIdFromConversationTurn(eo)
            }, [eo])
              , el = (0,
            C.useMemo)(function() {
                return c.has(es)
            }, [c, es]);
            (0,
            C.useMemo)(function() {
                el || (er.current = Date.now())
            }, [el]);
            var eu = Z.messages
              , ec = eu[eu.length - 1]
              , ed = ec.message.id
              , ef = ec.nodeId
              , eg = w.getLeafFromNode(ef)
              , ep = eo.messages
              , ev = ep[ep.length - 1]
              , ex = ev.message.id
              , eb = ev.nodeId
              , ey = w.getLeafFromNode(eb)
              , ej = "critique" === F ? "report" === a ? y.formatMessage(ic.provideReportModalTitle) : y.formatMessage(ic.provideAdditionalFeedback) : y.formatMessage(ic.pickBestAnswer)
              , ew = (0,
            C.useRef)([])
              , ek = (0,
            C.useRef)("")
              , eC = (0,
            C.useCallback)(function() {
                var e, n = null === (e = l.current) || void 0 === e ? void 0 : e.elements;
                ew.current = (0,
                nz._)(n || []).filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                }).map(function(e) {
                    return e.replace("feedback-", "")
                }),
                ek.current = (null == n ? void 0 : n["feedback-other"].value) || ""
            }, [l])
              , e_ = (0,
            C.useCallback)(function() {
                eC(),
                o(ek.current, ew.current),
                "thumbsDown" === a && O(T.s6.submitThumbsDownFeedbackForm, q),
                G ? A("compare") : i()
            }, [eC, o, a, G, O, q, i])
              , eM = (0,
            C.useCallback)(function(e, n) {
                var t = N.tQ.getServerThreadId(u);
                if (null != t) {
                    var r = N.tQ.getThreadCurrentLeafId(u);
                    ee.ZP.submitSharedConversationReportFeedback({
                        message_id: r,
                        shared_conversation_id: t,
                        text: e,
                        tags: n
                    }).then(function() {
                        em.m.success("Moderation logged successfully")
                    }).catch(function() {
                        em.m.danger("Moderation NOT logged successfully! Please try again")
                    }),
                    i()
                }
            }, [u, i])
              , eT = (0,
            C.useCallback)(function() {
                eC(),
                ew.current.push("moderation-reject"),
                eM(ek.current, ew.current)
            }, [eM, eC])
              , eI = (0,
            C.useCallback)(function() {
                eC(),
                ew.current.push("moderation-accept"),
                eM(ek.current, ew.current)
            }, [eM, eC])
              , eN = "moderate" === a ? (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsx)(na.mH, {
                    title: y.formatMessage(ic.submitRejectModeration),
                    color: "danger",
                    onClick: eT
                }), (0,
                j.jsx)(na.mH, {
                    title: y.formatMessage(ic.submitAcceptModeration),
                    color: "primary",
                    onClick: eI
                })]
            }) : "critique" === F ? (0,
            j.jsx)(na.mH, {
                title: y.formatMessage("report" === a ? ic.submitReport : ic.submitFeedback),
                onClick: e_
            }) : null
              , eP = "left" === _.current
              , eS = eP ? "new" : "original"
              , eZ = eP ? "original" : "new"
              , eR = eP ? y.formatMessage(ic.newAnswer) : y.formatMessage(ic.originalAnswer)
              , eD = eP ? y.formatMessage(ic.originalAnswer) : y.formatMessage(ic.newAnswer)
              , eF = eP ? y.formatMessage(ic.newAnswerBetter) : y.formatMessage(ic.originalAnswerBetter)
              , eA = eP ? y.formatMessage(ic.originalAnswerBetter) : y.formatMessage(ic.newAnswerBetter)
              , eE = a && "report" !== a && "moderate" !== a
              , eL = (0,
            C.useCallback)(function(e) {
                var n = "left" === e ? eS : "right" === e ? eZ : "same";
                if (O(T.s6.submittedComparisonUIV0, Object.assign({}, q, {
                    choice: n
                })),
                eE) {
                    var t = N.tQ.getTree(u)
                      , r = t.getMetadata(ef);
                    t.updateNode(ef, {
                        metadata: {
                            $set: (0,
                            eU._)((0,
                            v._)({}, r), {
                                inlineComparisonRating: "baseline"
                            })
                        }
                    });
                    var o = t.getMetadata(eb);
                    t.updateNode(eb, {
                        metadata: {
                            $set: (0,
                            eU._)((0,
                            v._)({}, o), {
                                inlineComparisonRating: n
                            })
                        }
                    }),
                    s(ed, ex, a, n, _.current, W.current, Q.current, Y.current, er.current, ek.current, ew.current)
                }
                N.tQ.setThreadCurrentLeafId(u, e === _.current ? ey.id : eg.id),
                i()
            }, [eS, eZ, O, q, eE, u, ey.id, eg.id, i, ef, eb, s, ed, ex, a])
              , eB = !el && null != er.current && G
              , eO = (0,
            C.useCallback)(function() {
                i(),
                "critique" === F ? O(T.s6.skippedThumbsDownFeedbackForm, Object.assign({}, q)) : "compare" === F && O(T.s6.skippedComparisonUIV0, Object.assign({}, q))
            }, [i, O, q, F])
              , eq = (0,
            b._)((0,
            C.useState)([]), 2)
              , ez = eq[0]
              , eH = eq[1];
            return (0,
            C.useEffect)(function() {
                "moderate" === a && ee.ZP.fetchShareModerationCategories().then(function(e) {
                    var n = e.moderation_categories;
                    eH(Object.keys(n).map(function(e) {
                        return [e, n[e]]
                    }))
                })
            }, []),
            (0,
            j.jsxs)(na.ZP, {
                isOpen: !0,
                onModalClose: eO,
                closeButton: (0,
                j.jsx)(na.ol, {
                    onClose: eO
                }),
                size: "custom",
                className: "md:w-[672px] lg:w-[896px] xl:w-[1024px] xl:max-w-7xl",
                type: "critique" === F ? "thumbsUp" === a ? "success" : "danger" : "success",
                icon: "critique" === F ? "thumbsUp" === a ? J.fmn : J.oLd : void 0,
                title: ej,
                primaryButton: eN,
                children: ["critique" === F && (0,
                j.jsxs)("form", {
                    ref: l,
                    children: [(0,
                    j.jsx)(nr.ZP, {
                        id: "feedback-other",
                        placeholder: "thumbsUp" === a ? y.formatMessage(ic.thumbsUpPlaceholder) : "report" === a ? y.formatMessage(ic.reportContentExplanationPlaceholder) : y.formatMessage(ic.thumbsDownPlaceholder),
                        rows: 3,
                        className: "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                    }), "thumbsDown" === a && (0,
                    j.jsxs)("div", {
                        className: "mb-4",
                        children: [(0,
                        j.jsx)(tV, {
                            id: "feedback-harmful",
                            label: y.formatMessage(ic.harmfulUnsafe)
                        }), (0,
                        j.jsx)(tV, {
                            id: "feedback-false",
                            label: y.formatMessage(ic.notTrue)
                        }), (0,
                        j.jsx)(tV, {
                            id: "feedback-not-helpful",
                            label: y.formatMessage(ic.notHelpful)
                        })]
                    }), null != a && !eE && (0,
                    j.jsx)(j.Fragment, {
                        children: (0,
                        j.jsxs)("div", {
                            className: "mb-4",
                            children: ["report" === a && (0,
                            j.jsxs)(j.Fragment, {
                                children: [(0,
                                j.jsx)(tV, {
                                    id: "feedback-dont-like-this",
                                    label: y.formatMessage(ic.dontLikeThis)
                                }), (0,
                                j.jsx)(tV, {
                                    id: "feedback-false",
                                    label: y.formatMessage(ic.notTrue)
                                }), (0,
                                j.jsx)(tV, {
                                    id: "feedback-not-helpful",
                                    label: y.formatMessage(ic.notHelpful)
                                }), (0,
                                j.jsx)(tV, {
                                    id: "feedback-harmful-offensive",
                                    label: y.formatMessage(ic.harmfulOffensive)
                                }), (0,
                                j.jsx)(tV, {
                                    id: "feedback-sexual-abuse",
                                    label: y.formatMessage(ic.sexualAbuse)
                                }), (0,
                                j.jsx)(tV, {
                                    id: "feedback-copyright",
                                    disabled: !0,
                                    label: (0,
                                    j.jsx)("a", {
                                        href: "https://docs.google.com/forms/d/e/1FAIpQLSeSq2JNu9g8skmUCXh9968brvVftNa2lNInG_KyNJlBPEuZJw/viewform",
                                        children: y.formatMessage(ic.copyrightContent)
                                    })
                                })]
                            }), "moderate" === a && (0,
                            j.jsxs)(j.Fragment, {
                                children: [ez.map(function(e) {
                                    var n = (0,
                                    b._)(e, 2)
                                      , t = n[0]
                                      , r = n[1];
                                    return (0,
                                    j.jsx)(tV, {
                                        id: "feedback-" + t,
                                        label: r
                                    }, t)
                                }), (0,
                                j.jsx)(tV, {
                                    id: "feedback-copyright",
                                    label: y.formatMessage(ic.copyrightContent)
                                })]
                            }), (0,
                            j.jsx)(tV, {
                                id: "feedback-content-other",
                                label: y.formatMessage(ic.reportOtherContent)
                            })]
                        })
                    })]
                }), "compare" === F && V && void 0 !== k && (0,
                j.jsxs)("div", {
                    className: (0,
                    B.Z)("w-full"),
                    children: [(0,
                    j.jsx)("p", {
                        className: (0,
                        B.Z)("mb-7 mt-3"),
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, ic.continueWithChosenAnswer))
                    }), (0,
                    j.jsx)(ip, {
                        className: R ? "rounded-2xl" : "rounded-md",
                        children: (0,
                        j.jsx)(iv, {
                            children: (0,
                            j.jsx)(a4, {
                                currentModelId: d,
                                turnIndex: ea,
                                isFinalTurn: !1,
                                clientThreadId: u,
                                onChangeItemInView: f,
                                onChangeRating: $(),
                                onRequestMoreCompletions: h,
                                onDeleteNode: g,
                                onRequestCompletion: m,
                                onUpdateNode: p,
                                onSandboxLinkClick: x,
                                activeRequests: c,
                                showInlineEmbeddedDisplay: !0,
                                onHandleChangeVariantFeedbackInlineComparisonRating: $()
                            })
                        })
                    }), (0,
                    j.jsxs)("div", {
                        className: (0,
                        B.Z)(),
                        children: [(0,
                        j.jsxs)("div", {
                            className: (0,
                            B.Z)("mb-2 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            j.jsx)("div", {
                                children: (0,
                                j.jsx)("p", {
                                    className: (0,
                                    B.Z)("font-semibold"),
                                    children: eR
                                })
                            }), (0,
                            j.jsx)("div", {
                                children: (0,
                                j.jsx)("p", {
                                    className: (0,
                                    B.Z)("font-semibold"),
                                    children: eD
                                })
                            })]
                        }), (0,
                        j.jsxs)("div", {
                            className: (0,
                            B.Z)("mb-5 grid w-full grid-cols-2 gap-5"),
                            children: [(0,
                            j.jsxs)(im, {
                                children: [(0,
                                j.jsx)(iv, {
                                    children: (0,
                                    j.jsx)(a4, {
                                        currentModelId: d,
                                        turnIndex: eP ? ei : S,
                                        turnLeafId: eP ? eb : ef,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: f,
                                        onChangeRating: $(),
                                        onDeleteNode: g,
                                        onRequestMoreCompletions: h,
                                        onRequestCompletion: m,
                                        onUpdateNode: p,
                                        onSandboxLinkClick: x,
                                        activeRequests: c,
                                        showInlineEmbeddedDisplay: !0,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: $()
                                    })
                                }), (0,
                                j.jsx)(ig, {
                                    children: (0,
                                    j.jsx)(na.mH, {
                                        disabled: !eB,
                                        title: eF,
                                        onClick: function() {
                                            return eL("left")
                                        },
                                        color: "dark"
                                    })
                                })]
                            }), (0,
                            j.jsxs)(im, {
                                children: [(0,
                                j.jsx)(iv, {
                                    children: (0,
                                    j.jsx)(a4, {
                                        currentModelId: d,
                                        turnIndex: eP ? S : ei,
                                        turnLeafId: eP ? ef : eb,
                                        isFinalTurn: !0,
                                        clientThreadId: u,
                                        onChangeItemInView: f,
                                        onChangeRating: $(),
                                        onDeleteNode: g,
                                        onRequestMoreCompletions: h,
                                        onRequestCompletion: m,
                                        onUpdateNode: p,
                                        onSandboxLinkClick: x,
                                        activeRequests: c,
                                        showInlineEmbeddedDisplay: !0,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: $()
                                    })
                                }), (0,
                                j.jsx)(ig, {
                                    children: (0,
                                    j.jsx)(na.mH, {
                                        disabled: !eB,
                                        title: eA,
                                        onClick: function() {
                                            return eL("right")
                                        },
                                        color: "dark"
                                    })
                                })]
                            })]
                        }), (0,
                        j.jsx)("div", {
                            className: (0,
                            B.Z)("grid w-full"),
                            children: (0,
                            j.jsxs)("div", {
                                className: (0,
                                B.Z)("mb-2 text-right"),
                                children: [(0,
                                j.jsx)(na.mH, {
                                    disabled: !eB,
                                    title: y.formatMessage(ic.neitherAnswerBetter),
                                    color: "primary",
                                    onClick: function() {
                                        return eL("same")
                                    },
                                    className: (0,
                                    B.Z)("mr-2")
                                }), (0,
                                j.jsx)(na.mH, {
                                    title: y.formatMessage(ic.skipStep),
                                    onClick: function() {
                                        return i()
                                    }
                                })]
                            })
                        })]
                    })]
                })]
            }, "RatingModal-".concat(r))
        }
        var ig = _.Z.div(io())
          , im = _.Z.div(is())
          , ip = _.Z.div(il())
          , iv = _.Z.div(iu())
          , ix = t(70060)
          , ib = t.n(ix);
        function iy() {
            var e = (0,
            y._)(["\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n", "\n", "\n"]);
            return iy = function() {
                return e
            }
            ,
            e
        }
        function ij() {
            var e = (0,
            y._)(["\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n", " ", ""]);
            return ij = function() {
                return e
            }
            ,
            e
        }
        function iw() {
            var e = (0,
            y._)(["", " flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"]);
            return iw = function() {
                return e
            }
            ,
            e
        }
        var ik = ib()(Promise.resolve().then(t.bind(t, 22208)), {
            loadableGenerated: {
                webpack: function() {
                    return [22208]
                }
            },
            ssr: !1
        })
          , iC = (0,
        Y.vU)({
            errorGeneratingResponse: {
                id: "PromptTextarea.errorGeneratingResponse",
                defaultMessage: "There was an error generating a response",
                description: "Error message shown when the response generation fails"
            },
            regenerateResponse: {
                id: "PromptTextarea.regenerateResponse",
                defaultMessage: "Regenerate response",
                description: "Button label for regenerating response"
            },
            continueGenerating: {
                id: "PromptTextarea.continueGenerating",
                defaultMessage: "Continue generating",
                description: "Button label for continuing response generation"
            },
            stopGenerating: {
                id: "PromptTextarea.stopGenerating",
                defaultMessage: "Stop generating",
                description: "Button label for stopping response generation"
            },
            placeholder: {
                id: "PromptTextarea.placeholder",
                defaultMessage: "Send a message.",
                description: "Placeholder text for the input field"
            },
            continueSharedConversationPlaceholder: {
                id: "PromptTextarea.ontinueSharedConversationPplaceholder",
                defaultMessage: "Send a message to continue the conversation.",
                description: "Placeholder text for the input field when viewing a shared conversation"
            },
            suggestionTooltip: {
                id: "PromptTextarea.suggestionTooltip",
                defaultMessage: "Click to send",
                description: "Tooltip for the suggestion button"
            }
        })
          , i_ = (0,
        C.forwardRef)(function(e, n) {
            var t, r = e.onAbortCompletion, a = e.onCreateNewCompletion, i = e.onRequestMoreCompletions, o = e.onContinueGenerating, s = e.onFileUpload, l = e.canUpload, u = e.modelBackend, c = e.clientThreadId, d = e.isCompletionInProgress, f = e.className, h = e.clearOnSubmit, g = void 0 === h || h, m = e.disabled, p = void 0 !== m && m, x = e.shouldRetry, y = e.canPause, w = void 0 !== y && y, k = e.canContinue, _ = void 0 !== k && k, P = e.suggestions, S = e.isInteractableSharedThread, Z = (0,
            X.Z)(), R = (0,
            N.oq)(c), D = (0,
            N.Hk)(c), F = (0,
            et.w$)(), A = (0,
            M.WS)(), E = (0,
            C.useContext)(L.gt).serviceStatus, O = (0,
            C.useContext)(L.QL).historyDisabled, q = (0,
            C.useRef)(null), U = (0,
            b._)((0,
            C.useState)(""), 2), z = U[0], H = U[1], V = (0,
            C.useCallback)(function(e, n) {
                if (null == e || e.preventDefault(),
                !p) {
                    var t, r, i = null === (t = q.current) || void 0 === t ? void 0 : t.value, o = "".concat(null === (r = q.current) || void 0 === r ? void 0 : r.dataset.id, "-nextPrompt");
                    i && (a(o, {
                        value: i || ""
                    }, {
                        eventSource: e ? "mouse" : "keyboard"
                    }, {
                        suggestions: P
                    }),
                    g && H(""),
                    (0,
                    nr.SI)(1, q.current),
                    void 0 !== P && (void 0 !== n ? tW.m.logEvent("chatgpt_prompt_use_suggestion", i, {
                        index: "".concat(n)
                    }) : tW.m.logEvent("chatgpt_prompt_ignore_suggestions")))
                }
            }, [g, p, a, H, P]), G = (0,
            C.useCallback)(function() {
                r("", D),
                i(R, {
                    eventSource: "mouse"
                })
            }, [R, D, r, i]), W = (0,
            C.useCallback)(function() {
                r("", D),
                A(T.s6.pauseCompletion, {
                    threadId: N.tQ.getServerThreadId(c),
                    eventSource: "mouse"
                })
            }, [D, c, A, r]), Q = (0,
            C.useMemo)(function() {
                return {
                    Enter: {
                        validator: function() {
                            return !p
                        },
                        handler: function(e) {
                            !e.metaKey && (!F || e.shiftKey || e.nativeEvent.isComposing) || (e.preventDefault(),
                            d || V())
                        }
                    },
                    Escape: {
                        validator: function() {
                            return w && d
                        },
                        handler: function() {
                            r("", D),
                            A(T.s6.pauseCompletion, {
                                threadId: N.tQ.getServerThreadId(c),
                                eventSource: "keyboard"
                            })
                        }
                    }
                }
            }, [p, F, d, V, w, r, D, A, c]), $ = (0,
            C.useCallback)(function(e) {
                var n;
                (null === (n = Q[e.key]) || void 0 === n ? void 0 : n.validator(e)) && Q[e.key].handler(e)
            }, [Q]);
            (0,
            C.useEffect)(function() {
                var e;
                null === (e = q.current) || void 0 === e || e.focus()
            }, []);
            var Y = "root" !== R && !d && !(null == E ? void 0 : E.oof)
              , ee = null === (t = q.current) || void 0 === t ? void 0 : t.value
              , er = (0,
            C.useCallback)(function() {
                o(R)
            }, [R, o])
              , ea = (0,
            I.hz)().has(en.uj)
              , ei = (0,
            C.useMemo)(function() {
                return (0,
                j.jsxs)("div", {
                    className: x ? "w-full" : "",
                    children: [x && (0,
                    j.jsx)("div", {
                        className: "mb-3 text-center text-xs",
                        children: (0,
                        j.jsx)(K.Z, (0,
                        v._)({}, iC.errorGeneratingResponse))
                    }), (0,
                    j.jsxs)(iS, {
                        $shouldRetry: x,
                        children: [!x && ea && (0,
                        j.jsx)(iT, {
                            suggestions: P,
                            shouldRetry: x,
                            currentInputRef: q,
                            onSelectSuggestion: H,
                            handleCreateNewCompletion: V
                        }), Y && (0,
                        j.jsxs)(eu.z, {
                            as: "button",
                            color: x ? "primary" : "neutral",
                            onClick: G,
                            className: (0,
                            B.Z)(x ? "m-auto" : "border-0 md:border"),
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: J.Qxo,
                                size: F ? "xsmall" : "small",
                                className: "flex-shrink-0"
                            }), (F || x) && (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, iC.regenerateResponse))]
                        }), _ && (0,
                        j.jsxs)(eu.z, {
                            as: "button",
                            color: "neutral",
                            onClick: er,
                            className: "border-0 md:border",
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: J.lV_,
                                className: "-rotate-180",
                                size: F ? "xsmall" : "small"
                            }), F && (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, iC.continueGenerating))]
                        }), w && d && (0,
                        j.jsxs)(eu.z, {
                            as: "button",
                            color: "neutral",
                            onClick: W,
                            className: "border-0 md:border",
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: J.jxP,
                                size: F ? "xsmall" : "small"
                            }), F && (0,
                            j.jsx)(K.Z, (0,
                            v._)({}, iC.stopGenerating))]
                        })]
                    })]
                })
            }, [_, w, Y, ea, W, V, H, G, er, d, F, x, P]);
            return (0,
            C.useImperativeHandle)(n, function() {
                return {
                    setInputValue: H
                }
            }),
            (0,
            j.jsx)("form", {
                className: f,
                onSubmit: V,
                children: (0,
                j.jsxs)("div", {
                    className: "relative flex h-full flex-1 items-stretch md:flex-col",
                    children: [F && ei, !x && (0,
                    j.jsxs)(iN, {
                        $disabled: x,
                        $historyDisabled: O,
                        children: [(0,
                        j.jsx)(nr.ZP, {
                            id: iI,
                            tabIndex: 0,
                            value: z,
                            "data-id": R,
                            ref: q,
                            style: {
                                maxHeight: "200px"
                            },
                            rows: 1,
                            onKeyDown: $,
                            onChange: function(e) {
                                H(e.target.value)
                            },
                            placeholder: S ? Z.formatMessage(iC.continueSharedConversationPlaceholder) : Z.formatMessage(iC.placeholder),
                            className: (0,
                            B.Z)("m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent", l ? "pl-8 md:pl-5" : "pl-2 md:pl-0"),
                            disabled: x
                        }), l && (0,
                        j.jsx)(ik, {
                            clientThreadId: c,
                            onFileUpload: s,
                            currentLeafId: R,
                            modelBackend: u,
                            disabled: d
                        }), (0,
                        j.jsx)(iP, {
                            disabled: d || x || !ee || p,
                            $onRightSide: !0,
                            $nudgeBottom: d,
                            className: d ? "" : "disabled:opacity-40",
                            children: d ? (0,
                            j.jsx)("div", {
                                className: "text-2xl",
                                children: (0,
                                j.jsx)(iM, {})
                            }) : (0,
                            j.jsx)(ec.ZP, {
                                icon: J.LbG,
                                size: "small",
                                className: "mr-1"
                            })
                        })]
                    }), !F && ei]
                })
            })
        });
        function iM() {
            var e = (0,
            b._)((0,
            C.useState)(0), 2)
              , n = e[0]
              , t = e[1];
            (0,
            C.useEffect)(function() {
                var e = setInterval(function() {
                    t(function(e) {
                        return (e + 1) % 3
                    })
                }, 350);
                return function() {
                    return clearInterval(e)
                }
            }, []);
            for (var r = [], a = 0; a < 3; a++)
                r.push((0,
                j.jsx)("span", {
                    className: a <= n ? "" : "invisible",
                    children: "\xb7"
                }, a));
            return (0,
            j.jsx)(j.Fragment, {
                children: r
            })
        }
        function iT(e) {
            var n = e.suggestions
              , t = e.shouldRetry
              , r = e.currentInputRef
              , a = e.onSelectSuggestion
              , i = e.handleCreateNewCompletion
              , o = (0,
            X.Z)()
              , s = (0,
            C.useCallback)(function(e, n) {
                null !== r.current && (a(e),
                r.current.value = e,
                i(void 0, n))
            }, [r, i, a]);
            return (0,
            C.useEffect)(function() {
                void 0 !== n && tW.m.logEvent("chatgpt_prompt_show_suggestions")
            }, [n]),
            (0,
            j.jsx)("div", {
                className: "absolute -left-2 bottom-full mb-4 flex max-w-[100vw] grow gap-2 overflow-auto px-2 md:static md:mb-0 md:max-w-none md:overflow-visible md:px-0",
                children: t || void 0 === n ? null : n.slice(0, 2).map(function(e, n) {
                    return (0,
                    j.jsxs)(eu.z, {
                        as: "button",
                        color: "neutral",
                        onClick: function() {
                            return s(e, n)
                        },
                        className: "group whitespace-nowrap text-left md:whitespace-normal",
                        children: [e, (0,
                        j.jsx)("div", {
                            className: "absolute bottom-0 right-0 top-0 flex items-center bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-2 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200",
                            children: (0,
                            j.jsx)(nT.u, {
                                label: o.formatMessage(iC.suggestionTooltip),
                                side: "top",
                                children: (0,
                                j.jsx)(ec.ZP, {
                                    icon: J.LbG,
                                    size: "small"
                                })
                            })
                        })]
                    }, n)
                })
            })
        }
        var iI = "prompt-textarea"
          , iN = _.Z.div(iy(), function(e) {
            return e.$historyDisabled ? "bg-gray-900 text-white shadow-[0_0_15px_rgba(0,0,0,0.10)] dark:bg-gray-900 dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]" : ""
        }, function(e) {
            return e.$disabled && "bg-gray-100"
        })
          , iP = _.Z.button(ij(), function(e) {
            return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
        }, function(e) {
            return e.$onRightSide ? "right-1 md:right-2" : "left-1 md:left-2"
        })
          , iS = _.Z.div(iw(), function(e) {
            return e.$shouldRetry ? "" : "h-full"
        })
          , iZ = t(56060)
          , iR = t(97703)
          , iD = (0,
        C.createContext)()
          , iF = function(e) {
            return (0,
            P.oR)((0,
            C.useContext)(iD), e)
        }
          , iA = t(1215);
        function iE() {
            var e = (0,
            y._)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
            return iE = function() {
                return e
            }
            ,
            e
        }
        var iL = _.Z.span(iE())
          , iB = t(90209)
          , iO = t(68789);
        function iq() {
            var e = (0,
            y._)(["absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]"]);
            return iq = function() {
                return e
            }
            ,
            e
        }
        function iU() {
            var e = (0,
            y._)(["flex flex-col rounded-lg border border-gray-100 bg-white text-left shadow-[0_1px_7px_0_rgba(0,0,0,0.03)] dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] mx-2 sm:mx-1 overflow-hidden"]);
            return iU = function() {
                return e
            }
            ,
            e
        }
        function iz() {
            var e = (0,
            y._)(["px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line"]);
            return iz = function() {
                return e
            }
            ,
            e
        }
        function iH() {
            var e = (0,
            y._)(["block"]);
            return iH = function() {
                return e
            }
            ,
            e
        }
        function iV() {
            var e = (0,
            y._)(["block text-xs text-gray-500"]);
            return iV = function() {
                return e
            }
            ,
            e
        }
        function iG(e) {
            var n = e.items
              , t = e.value
              , r = e.onChange
              , a = (0,
            b._)((0,
            C.useState)(function() {
                return n.reduce(function(e, n) {
                    if (n.options.length > 0) {
                        if (n.options.some(function(e) {
                            return e.value === t
                        }))
                            return e[n.value] = t,
                            e;
                        e[n.value] = n.options[0].value
                    }
                    return e
                }, {})
            }), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            C.useCallback)(function(e, a) {
                var s = t;
                void 0 !== a && o(function(n) {
                    return (0,
                    eU._)((0,
                    v._)({}, n), (0,
                    ag._)({}, e, a))
                }),
                (s = void 0 !== a ? a : (null == i ? void 0 : i[e]) !== void 0 && n.some(function(n) {
                    return n.value === e && n.options.some(function(n) {
                        return n.value === i[e]
                    })
                }) ? i[e] : e) !== t && r(s)
            }, [n, i, r, t])
              , l = (0,
            b._)((0,
            C.useState)(new Set), 2)
              , u = l[0]
              , c = l[1]
              , d = (0,
            C.useCallback)(function(e, n) {
                n ? c(function(n) {
                    var t = new Set(n);
                    return t.add(e),
                    t
                }) : c(function(n) {
                    var t = new Set(n);
                    return t.delete(e),
                    t
                })
            }, []);
            return (0,
            j.jsx)("div", {
                className: "relative flex rounded-xl bg-gray-100 p-1 dark:bg-gray-900",
                children: (0,
                j.jsx)("ul", {
                    className: "flex w-full list-none gap-1 sm:w-auto",
                    children: n.map(function(e, r) {
                        var a, o, l, c, f, h, g = (null == i ? void 0 : i[e.value]) !== void 0 ? i[e.value] : null === (o = e.options) || void 0 === o ? void 0 : null === (l = o[0]) || void 0 === l ? void 0 : l.value, m = null !== (c = e.options.find(function(e) {
                            return e.value === g
                        })) && void 0 !== c ? c : e.options[0], p = null !== (f = null == m ? void 0 : m.icon) && void 0 !== f ? f : null, v = t === e.value || e.options.some(function(e) {
                            return e.value === t
                        });
                        return (0,
                        j.jsx)(iQ, {
                            onToggleItemOpenChanged: d,
                            item: e,
                            isSelected: v,
                            isOtherToggleDropdownOpen: u.size > 0 && !u.has(e.categoryId),
                            currentValue: t,
                            defaultOption: null == m ? void 0 : m.value,
                            onChange: s,
                            currentIcon: p,
                            displayCurrentValue: v && e.showSelectedValueBelow && null !== (h = null == m ? void 0 : m.name) && void 0 !== h ? h : "",
                            contentAlign: (a = n.length,
                            0 === r ? "start" : r === a - 1 ? "end" : "center")
                        }, r)
                    })
                })
            })
        }
        function iW(e) {
            var n = e.item
              , t = e.isSelected
              , r = e.isOtherToggleDropdownOpen
              , a = e.isOpen
              , i = void 0 !== a && a
              , o = e.onChange
              , s = e.currentIcon
              , l = e.displayCurrentValue
              , u = n.options.length > 1
              , c = null != s ? s : n.icon;
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("group/button", "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5", t ? "border-black/10 bg-white shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-[#40414E]" : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100", i && "text-gray-800 dark:text-gray-100", r && t && "opacity-50"),
                onClick: function() {
                    n.disabled || o(n.value)
                },
                children: [(0,
                j.jsxs)("span", {
                    className: (0,
                    B.Z)("relative max-[370px]:hidden", n.disabled && "group-hover/button:text-red-500"),
                    children: [null != c && (0,
                    j.jsx)(ec.ZP, {
                        icon: c,
                        className: (0,
                        B.Z)(t && n.activeClass)
                    }), n.disabled && (0,
                    j.jsx)(i0, {})]
                }), (0,
                j.jsx)("span", {
                    className: "truncate text-sm font-medium",
                    children: n.name
                }), !n.disabled && u && (0,
                j.jsx)(ec.ZP, {
                    icon: i ? J.rH8 : J.bTu,
                    strokeWidth: 2,
                    className: "md:hidden"
                }), "" !== l && (0,
                j.jsx)("span", {
                    className: "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                    children: l
                })]
            })
        }
        function iQ(e) {
            var n = e.item
              , t = e.isSelected
              , r = e.defaultOption
              , a = e.onChange
              , i = e.currentIcon
              , o = e.currentValue
              , s = e.displayCurrentValue
              , l = e.contentAlign
              , u = e.onToggleItemOpenChanged
              , c = e.isOtherToggleDropdownOpen
              , d = (0,
            b._)((0,
            C.useState)(void 0), 2)
              , f = d[0]
              , h = d[1]
              , g = (0,
            C.useRef)(null)
              , m = n.options.length > 1
              , p = !(void 0 === n.description && void 0 === n.disclaimer)
              , v = (0,
            C.useCallback)(function(e) {
                h(e),
                u(n.categoryId, !!e)
            }, [n.categoryId, u]);
            return (0,
            j.jsx)(iO.fC, {
                open: f,
                modal: !1,
                children: (0,
                j.jsxs)("li", {
                    className: "group/toggle w-full",
                    onMouseEnter: function() {
                        return v(!0)
                    },
                    onMouseLeave: function() {
                        return v(void 0)
                    },
                    children: [(0,
                    j.jsx)(iO.xz, {
                        ref: g,
                        className: "w-full",
                        children: (0,
                        j.jsx)(iW, {
                            isOpen: !!f,
                            isOtherToggleDropdownOpen: c,
                            item: n,
                            isSelected: t,
                            onChange: a,
                            currentIcon: i,
                            displayCurrentValue: s
                        })
                    }), (0,
                    j.jsx)(iO.Uv, {
                        children: (0,
                        j.jsx)(iO.VY, {
                            className: (0,
                            B.Z)("w-full min-w-[100vw] max-w-[100vw] select-none pt-4 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none", "will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"),
                            align: l,
                            alignOffset: -6,
                            onCloseAutoFocus: function(e) {
                                f || e.preventDefault()
                            },
                            onEscapeKeyDown: function(e) {
                                var n;
                                e.preventDefault(),
                                null === (n = g.current) || void 0 === n || n.focus()
                            },
                            children: (0,
                            j.jsxs)(i1, {
                                children: [p && (0,
                                j.jsx)(i$, {
                                    item: n
                                }), (m || !f) && (0,
                                j.jsx)(iJ, {
                                    defaultOption: t ? o : r,
                                    item: n,
                                    currentValue: o,
                                    onChange: function(e, n) {
                                        var t;
                                        a(e, n),
                                        v(void 0),
                                        null === (t = document.getElementById(iI)) || void 0 === t || t.focus()
                                    },
                                    className: (0,
                                    B.Z)("group/options text-sm", p && "border-t dark:border-gray-800")
                                })]
                            })
                        })
                    }, n.categoryId)]
                })
            })
        }
        function i$(e) {
            var n = e.item;
            return (0,
            j.jsxs)(i2, {
                className: "text-sm sm:text-base",
                children: [void 0 !== n.description && (0,
                j.jsx)(i3, {
                    children: n.description
                }), void 0 !== n.disclaimer && (0,
                j.jsx)(i5, {
                    children: n.disclaimer
                })]
            })
        }
        function iJ(e) {
            var n = e.item
              , t = e.className
              , r = e.onChange
              , a = e.currentValue
              , i = e.defaultOption;
            return (0,
            j.jsx)(iO.Ee, {
                defaultValue: i,
                value: a,
                className: t,
                children: n.options.map(function(e, t) {
                    return (0,
                    j.jsx)(iY, {
                        option: e,
                        selected: a === e.value,
                        active: i === e.value,
                        activeClass: n.activeClass,
                        iconClass: n.iconClass,
                        showBorder: t !== n.options.length - 1,
                        isDisabled: e.disabled,
                        onChange: function() {
                            e.disabled || r(n.value, e.value)
                        }
                    }, e.value)
                })
            })
        }
        function iY(e) {
            var n, t = e.option, r = e.selected, a = e.active, i = e.activeClass, o = e.iconClass, s = e.isDisabled, l = e.onChange, u = e.showBorder, c = null !== (n = t.activeIcon) && void 0 !== n ? n : t.icon;
            return (0,
            j.jsx)(iO.Rk, {
                asChild: !0,
                value: t.value,
                onClick: l,
                className: "select-none",
                children: (0,
                j.jsxs)("div", {
                    className: (0,
                    B.Z)("group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium", {
                        "hover:bg-gray-50 dark:hover:bg-white/5": !s,
                        "bg-gray-50 group-hover/options:bg-transparent dark:bg-white/5": a && !r,
                        "text-gray-800 dark:text-gray-100": r || a,
                        "cursor-pointer": !s,
                        "border-b dark:border-gray-800": u
                    }),
                    children: [null != t.icon && null != c ? (0,
                    j.jsx)(ec.ZP, {
                        icon: r ? t.icon : c,
                        className: (0,
                        B.Z)("max-[370px]:hidden", !s && !r && o, r || a ? i : "text-gray-500")
                    }) : null, (0,
                    j.jsx)("span", {
                        className: (0,
                        B.Z)("truncate", {
                            "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100": !s,
                            "text-gray-800 dark:text-gray-100": a && !s
                        }),
                        children: t.name
                    }), t.tags.map(function(e) {
                        return iK(e)
                    }), (0,
                    j.jsx)("span", {
                        className: (0,
                        B.Z)({
                            "absolute right-3 rounded-full p-1 text-blue-400": !0,
                            "opacity-0": !r && !s,
                            "group-hover/options:opacity-0": !r,
                            "text-red-500": s
                        }),
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: s ? iB.Z : ec.HQ,
                            className: "h-5 w-5"
                        })
                    })]
                })
            })
        }
        var iX = new Set(["beta", "confidential", "alpha"])
          , iK = function(e) {
            return iX.has(e) && (0,
            j.jsx)("span", {
                className: (0,
                B.Z)("py-0.25 rounded px-1 text-sm capitalize", "beta" === e && "bg-blue-200 text-blue-500", "alpha" === e && "bg-blue-200 text-blue-500", "confidential" === e && "bg-red-200 text-red-800"),
                children: e
            }, e)
        }
          , i0 = _.Z.span(iq())
          , i1 = _.Z.div(iU())
          , i2 = _.Z.div(iz())
          , i3 = _.Z.span(iH())
          , i5 = _.Z.span(iV())
          , i4 = t(41170)
          , i6 = {
            textarea: "",
            "model-switcher": ""
        };
        function i8() {
            var e = (0,
            eh.kP)().session
              , n = (0,
            I.hz)()
              , t = aZ((0,
            aI.Y8)(function(e) {
                return e.isoDate
            }))
              , r = (0,
            nt.a)(["modelMessageCap"], function() {
                return ee.ZP.getModelMessageCap()
            }, {
                enabled: (null == e ? void 0 : e.accessToken) != null && n.has("model_preview")
            }).data;
            return (0,
            C.useMemo)(function() {
                var e = (null == r ? void 0 : r.message_cap) || 0
                  , n = (null == r ? void 0 : r.message_cap_window) || 1
                  , a = function(e) {
                    if (e < 60)
                        return e < 2 ? "minute" : "".concat(e, " minutes");
                    var n = Math.floor(e / 60);
                    if (n < 24)
                        return n < 2 ? "hour" : "".concat(n, " hours");
                    var t = Math.floor(n / 24);
                    if (t < 7)
                        return t < 2 ? "day" : "".concat(t, " days")
                }(n)
                  , i = (null == r ? void 0 : r.message_disclaimer) || i6;
                return a ? r && n && e ? {
                    textareaDisclaimer: i.textarea.replaceAll("%FORMATTED_TIME%", t).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", a),
                    modelSwitcherDisclaimer: i["model-switcher"].replaceAll("%FORMATTED_TIME%", t).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", a)
                } : {
                    textareaDisclaimer: i6.textarea,
                    modelSwitcherDisclaimer: i6["model-switcher"]
                } : {
                    textareaDisclaimer: i.textarea,
                    modelSwitcherDisclaimer: i["model-switcher"]
                }
            }, [r, t])
        }
        var i7 = (h = {},
        (0,
        ag._)(h, "gpt_3.5", {
            icon: ec.jr,
            activeIcon: ec.jr,
            activeClass: "text-brand-green",
            iconClass: "group-hover/option:text-brand-green",
            backgroundColor: "#19c37d",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1
        }),
        (0,
        ag._)(h, "gpt_4", {
            icon: ec.Bj,
            activeIcon: ec.MP,
            activeClass: "text-brand-purple",
            iconClass: "group-hover/option:text-brand-purple",
            backgroundColor: "#AB68FF",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1
        }),
        (0,
        ag._)(h, "other", {
            icon: i4.Z,
            activeIcon: i4.Z,
            activeClass: "text-orange-500",
            showSelectedValueBelow: !0,
            disclaimer: "Experimental models"
        }),
        h)
          , i9 = {
            browsing_model: {
                icon: ec.xx,
                activeIcon: ec.jZ,
                name: "Browsing"
            },
            code_interpreter_model: {
                icon: ec.dY,
                activeIcon: ec.b3,
                name: "Code Interpreter"
            },
            plugins_model: {
                icon: ec.oV,
                activeIcon: ec.Z8,
                name: "Plugins"
            }
        };
        function oe() {
            var e = (0,
            aQ.OX)()
              , n = (0,
            aQ.B9)()
              , t = (0,
            eh.kP)().session
              , r = (0,
            aI.BT)()
              , a = (0,
            nf.Fl)()
              , i = i8().modelSwitcherDisclaimer
              , o = (0,
            I.hz)()
              , s = (null == t ? void 0 : t.user) != null && (0,
            eh.yl)(t.user)
              , l = (0,
            aQ.B8)()
              , u = l.enabledModelsInCategoriesById
              , c = l.enabledModelsNotInCategoriesById;
            return (0,
            C.useMemo)(function() {
                var t = []
                  , l = !0
                  , d = !1
                  , f = void 0;
                try {
                    for (var h, g = e[Symbol.iterator](); !(l = (h = g.next()).done); l = !0) {
                        var m = h.value;
                        if (u.has(m.default_model)) {
                            var p = i7[m.category] || {}
                              , v = r === m.default_model
                              , x = n.get(m.default_model)
                              , b = v ? [] : function(e, n, t, r, a) {
                                var i = e.isBrowsingEnabled
                                  , o = e.isPluginsEnabled
                                  , s = e.isCodeInterpreterEnabled
                                  , l = [];
                                if (i && null != t.browsing_model && r.has(t.browsing_model)) {
                                    var u = i9.browsing_model;
                                    l.push(on(a.get(t.browsing_model), {
                                        icon: u.icon,
                                        name: n.has(en.oQ) ? "Browsing with Bing" : u.name,
                                        disabled: n.has("browsing_disabled"),
                                        activeIcon: u.activeIcon
                                    }))
                                }
                                if (s && null != t.code_interpreter_model && r.has(t.code_interpreter_model)) {
                                    var c = i9.code_interpreter_model;
                                    l.push(on(a.get(t.code_interpreter_model), {
                                        icon: c.icon,
                                        name: c.name,
                                        activeIcon: c.activeIcon
                                    }))
                                }
                                if (o && null != t.plugins_model && r.has(t.plugins_model)) {
                                    var d = i9.plugins_model;
                                    l.push(on(a.get(t.plugins_model), {
                                        icon: d.icon,
                                        name: d.name,
                                        disabled: n.has("plugins_disabled"),
                                        activeIcon: d.activeIcon
                                    }))
                                }
                                return l
                            }(a, o, m, u, n);
                            t.push({
                                categoryId: m.category,
                                value: x.id,
                                name: m.human_category_name,
                                description: v ? i : x.description,
                                disclaimer: p.disclaimer,
                                activeClass: p.activeClass,
                                iconClass: p.iconClass,
                                icon: p.icon,
                                activeIcon: p.activeIcon,
                                options: [on(x, {
                                    icon: p.icon,
                                    activeIcon: p.activeIcon,
                                    name: "Default"
                                })].concat((0,
                                nz._)(b)),
                                disabled: v,
                                showSelectedValueBelow: !1
                            })
                        }
                    }
                } catch (e) {
                    d = !0,
                    f = e
                } finally {
                    try {
                        l || null == g.return || g.return()
                    } finally {
                        if (d)
                            throw f
                    }
                }
                var y = Array.from(c).map(function(e) {
                    return n.get(e)
                });
                if (y.length > 0 && s) {
                    var j = y[0]
                      , w = i7.other;
                    t.push({
                        categoryId: "other",
                        value: null == j ? void 0 : j.id,
                        name: "Alpha",
                        activeClass: w.activeClass,
                        options: y.map(function(e) {
                            return on(e)
                        }),
                        showSelectedValueBelow: !0,
                        icon: w.icon,
                        activeIcon: w.activeIcon
                    })
                }
                return t
            }, [c, s, e, u, r, n, a, o, i])
        }
        function on(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (0,
            v._)({
                value: e.id,
                name: e.title,
                tags: e.tags
            }, n)
        }
        function ot(e) {
            var n = e.onModelChange
              , t = e.currentModel
              , r = (0,
            M.WS)()
              , a = (0,
            aI.BT)()
              , i = oe()
              , o = (0,
            C.useCallback)(function(e) {
                a !== e && (n(e),
                r(T.s6.toggleModel, {
                    model: e
                }))
            }, [a, r, n]);
            return (0,
            j.jsx)(iG, {
                value: null == t ? void 0 : t.id,
                onChange: o,
                items: i
            })
        }
        var or = t(12285)
          , oa = t(57526)
          , oi = t(99581)
          , oo = t(30892)
          , os = t.n(oo)
          , ol = t(7361)
          , ou = t.n(ol);
        function oc(e) {
            var n = e.values
              , t = e.className
              , r = Object.keys(n)
              , a = Object.values(n);
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("flex w-full items-stretch gap-2", t),
                children: [(0,
                j.jsx)("div", {
                    className: "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
                    children: r.map(function(e, n) {
                        return (0,
                        j.jsx)("span", {
                            children: os()(e)
                        }, n)
                    })
                }), (0,
                j.jsx)("div", {
                    className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
                    children: a.map(function(e, n) {
                        var t = (0,
                        b._)(e, 2)
                          , r = t[0]
                          , a = t[1];
                        return (0,
                        j.jsx)(od, {
                            num: r,
                            max: a
                        }, n)
                    })
                })]
            })
        }
        function od(e) {
            var n = e.num
              , t = e.max
              , r = (0,
            C.useMemo)(function() {
                var e = ou()(Array(t), !1);
                return ou()(e, !0, 0, n)
            }, [t, n]);
            return (0,
            j.jsx)("div", {
                className: "flex w-full gap-1",
                children: r.map(function(e, n) {
                    return (0,
                    j.jsx)("div", {
                        className: (0,
                        B.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"),
                        children: e
                    }, n)
                })
            })
        }
        function of() {
            var e = (0,
            y._)(["rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]"]);
            return of = function() {
                return e
            }
            ,
            e
        }
        function oh() {
            var e = (0,
            y._)(["absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]"]);
            return oh = function() {
                return e
            }
            ,
            e
        }
        function og() {
            var e = (0,
            y._)(["absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4"]);
            return og = function() {
                return e
            }
            ,
            e
        }
        function om() {
            var e = (0,
            y._)(["flex items-center gap-2 truncate"]);
            return om = function() {
                return e
            }
            ,
            e
        }
        function op() {
            var e = (0,
            y._)(["h-6 w-6 shrink-0"]);
            return op = function() {
                return e
            }
            ,
            e
        }
        function ov() {
            var e = (0,
            y._)(["absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100"]);
            return ov = function() {
                return e
            }
            ,
            e
        }
        function ox() {
            var e = (0,
            y._)(["absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100"]);
            return ox = function() {
                return e
            }
            ,
            e
        }
        var ob = ["confidential", "alpha", "plus"];
        function oy(e) {
            var n = e.selectedOption
              , t = e.onChange
              , r = e.onAction
              , a = e.onOpen
              , i = e.onClose
              , o = e.dropdownRef
              , s = (0,
            x._)(e, ["selectedOption", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"])
              , l = (0,
            C.useCallback)(function(e) {
                "string" == typeof e ? null == r || r(e) : t(e)
            }, [t, r]);
            return (0,
            j.jsx)(or.R, {
                value: n.value,
                onChange: l,
                children: function(e) {
                    var t = e.open;
                    return (0,
                    j.jsx)(ow, (0,
                    v._)({
                        ref: o,
                        selectedLabel: (0,
                        j.jsxs)(j.Fragment, {
                            children: [n.title, n.tags.map(function(e) {
                                return oI(e)
                            }), n.customTags]
                        }),
                        open: t,
                        onOpen: a,
                        onClose: i
                    }, s))
                }
            })
        }
        function oj(e) {
            var n = e.selectedOptions
              , t = e.selectedLabel
              , r = e.onChange
              , a = e.onAction
              , i = e.onOpen
              , o = e.onClose
              , s = e.dropdownRef
              , l = (0,
            x._)(e, ["selectedOptions", "selectedLabel", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"])
              , u = (0,
            C.useCallback)(function(e) {
                if (e.some(function(e) {
                    return "string" == typeof e
                })) {
                    var n = e.find(function(e) {
                        return "string" == typeof e
                    });
                    null == a || a(n)
                } else
                    r(e)
            }, [r, a]);
            return (0,
            j.jsx)(or.R, {
                value: n.map(function(e) {
                    return e.value
                }),
                multiple: !0,
                onChange: u,
                children: function(e) {
                    var r = e.open;
                    return (0,
                    j.jsx)(ow, (0,
                    v._)({
                        ref: s,
                        selectedLabel: t || "".concat(n.length, " selected"),
                        open: r,
                        onOpen: i,
                        onClose: o,
                        multiple: !0
                    }, l))
                }
            })
        }
        var ow = (0,
        C.forwardRef)(function(e, n) {
            var t = e.name
              , r = e.selectedLabel
              , a = e.open
              , i = e.options
              , o = e.actions
              , s = e.multiple
              , l = e.isLoading
              , u = e.loadingState
              , c = e.header
              , d = e.onOpen
              , f = e.onClose
              , h = e.theme
              , g = (0,
            C.useRef)(null)
              , m = (0,
            C.useRef)(null)
              , p = (0,
            et.oc)();
            (0,
            C.useImperativeHandle)(n, function() {
                return {
                    open: function() {
                        if (!a) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.click()
                        }
                    },
                    close: function() {
                        if (a) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.click()
                        }
                    }
                }
            }, [a]);
            var v = l ? u || (0,
            j.jsx)("div", {
                className: "flex h-[42px] items-center justify-center",
                children: (0,
                j.jsx)(ed.Z, {})
            }) : (0,
            j.jsxs)(j.Fragment, {
                children: [c, (0,
                j.jsxs)(or.R.Options, {
                    className: "overflow-auto",
                    children: [i.map(function(e, n) {
                        return (0,
                        j.jsx)(ok, {
                            value: e.value,
                            disabled: e.disabled,
                            theme: h,
                            children: function(n) {
                                var t = n.selected
                                  , r = n.active;
                                return (0,
                                j.jsxs)(j.Fragment, {
                                    children: [(0,
                                    j.jsxs)(oD, {
                                        children: [e.imageUrl && (0,
                                        j.jsx)(oF, {
                                            children: (0,
                                            j.jsx)(eX, {
                                                url: e.imageUrl,
                                                name: e.title,
                                                size: "100%"
                                            })
                                        }), (0,
                                        j.jsxs)("span", {
                                            className: (0,
                                            B.Z)(t && !s && "font-semibold", "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"),
                                            children: [e.title, e.tags.map(function(e) {
                                                return oI(e)
                                            }), e.customTags]
                                        })]
                                    }), s && !e.disabled ? (0,
                                    j.jsx)(o_, {
                                        theme: h,
                                        selected: t
                                    }) : t && (0,
                                    j.jsx)(oC, {
                                        theme: h,
                                        icon: "mini" === h ? ec.HQ : J.UgA
                                    }), e.disabled && (0,
                                    j.jsx)(oC, {
                                        theme: h,
                                        icon: oa.Z,
                                        className: "text-red-700 dark:text-red-500"
                                    }), r && p && (0,
                                    oi.createPortal)((0,
                                    j.jsx)(oT, {
                                        option: e,
                                        dropdownRef: m
                                    }), document.body)]
                                })
                            }
                        }, n)
                    }), null == o ? void 0 : o.map(function(e, n) {
                        return (0,
                        j.jsx)(ok, {
                            value: e.id,
                            theme: h,
                            children: function() {
                                return (0,
                                j.jsxs)(j.Fragment, {
                                    children: [(0,
                                    j.jsx)("div", {
                                        className: "text-gray-800 dark:text-gray-100",
                                        children: e.label
                                    }), (0,
                                    j.jsx)(oC, {
                                        theme: h,
                                        icon: e.icon
                                    })]
                                })
                            }
                        }, n)
                    })]
                })]
            });
            return (0,
            j.jsxs)("div", {
                className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
                children: [(0,
                j.jsxs)(or.R.Button, {
                    ref: g,
                    onClick: a ? f : d,
                    className: (0,
                    B.Z)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === h ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"),
                    children: ["mini" !== h && (0,
                    j.jsx)(or.R.Label, {
                        className: "block text-xs text-gray-700 dark:text-gray-500",
                        children: t
                    }), (0,
                    j.jsx)("span", {
                        className: "inline-flex w-full truncate",
                        children: (0,
                        j.jsx)("span", {
                            className: "flex h-6 items-center gap-1 truncate",
                            children: r
                        })
                    }), (0,
                    j.jsx)("span", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                        children: (0,
                        j.jsx)(ec.ZP, {
                            icon: J.bTu,
                            className: " text-gray-400",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0,
                j.jsx)(eH.u, {
                    show: a,
                    as: C.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0,
                    j.jsx)(oP, {
                        ref: m,
                        children: v
                    })
                })]
            })
        });
        function ok(e) {
            var n = e.value
              , t = e.disabled
              , r = e.children
              , a = e.theme;
            return (0,
            j.jsx)(or.R.Option, {
                className: function(e) {
                    var n = e.active;
                    return (0,
                    B.Z)("mini" === a ? oZ : oR, n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", t && "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100")
                },
                value: n,
                children: r
            })
        }
        function oC(e) {
            var n = e.icon
              , t = e.className
              , r = e.theme;
            return (0,
            j.jsx)("mini" === r ? oA : oE, {
                children: (0,
                j.jsx)(ec.ZP, {
                    icon: n,
                    className: (0,
                    B.Z)("h-5 w-5", t),
                    "aria-hidden": "true"
                })
            })
        }
        function o_(e) {
            var n = e.selected
              , t = e.disabled;
            return "mini" === e.theme ? (0,
            j.jsxs)(oA, {
                children: [(0,
                j.jsx)(ec.ZP, {
                    icon: n ? ec.HQ : ec.i9,
                    className: "h-5 w-5 text-blue-600",
                    strokeWidth: n ? 2.5 : 2
                }), !n && (0,
                j.jsx)(ec.ZP, {
                    icon: ec.nQ,
                    className: (0,
                    B.Z)("absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity", !t && "group-hover:opacity-100")
                })]
            }) : (0,
            j.jsx)(oE, {
                children: (0,
                j.jsx)("div", {
                    className: (0,
                    B.Z)("flex h-6 w-6 items-center justify-center rounded-full border transition-colors", n ? "border-transparent bg-green-600 text-white" : "border-black/5 dark:border-white/20"),
                    "aria-hidden": "true",
                    children: (0,
                    j.jsx)(ec.ZP, {
                        icon: J.UgA,
                        className: (0,
                        B.Z)("h-3 w-3 transition-opacity", n && "opacity-100", !n && "opacity-0", !n && !t && "group-hover:opacity-50"),
                        strokeWidth: n ? 2.5 : 2
                    })
                })
            })
        }
        function oM(e) {
            var n = e.showCheckbox
              , t = e.theme;
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("mini" === t ? oZ : oR, "cursor-auto"),
                children: [(0,
                j.jsxs)(oD, {
                    children: [(0,
                    j.jsx)(oF, {
                        children: (0,
                        j.jsx)("div", {
                            className: "h-full w-full rounded-sm bg-gray-200"
                        })
                    }), (0,
                    j.jsx)("div", {
                        className: "h-[12px] w-[88px] rounded-sm bg-gray-100"
                    })]
                }), n && (0,
                j.jsx)(o_, {
                    theme: t,
                    selected: !1,
                    disabled: !0
                })]
            })
        }
        function oT(e) {
            var n = e.option
              , t = e.dropdownRef
              , r = (0,
            b._)((0,
            C.useState)(), 2)
              , a = r[0]
              , i = r[1];
            (0,
            C.useEffect)(function() {
                var e = function() {
                    if (t.current) {
                        var e = t.current.getBoundingClientRect();
                        i({
                            top: e.top,
                            left: e.left - 260,
                            minHeight: e.height
                        })
                    }
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }, [t]);
            var o = n.value.properties
              , s = (0,
            C.useMemo)(function() {
                return o ? (0,
                j.jsx)(oc, {
                    values: o,
                    className: "mt-auto"
                }) : null
            }, [o]);
            return a ? (0,
            j.jsxs)(oS, {
                style: {
                    width: 260,
                    minHeight: a.minHeight,
                    top: a.top,
                    left: a.left
                },
                children: [n.disabled && (0,
                j.jsx)(ec.ZP, {
                    icon: oa.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500"
                }), n.imageUrl && (0,
                j.jsx)(eX, {
                    url: n.imageUrl,
                    name: n.title,
                    size: 70
                }), (0,
                j.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [n.title, " ", n.tags.map(function(e) {
                        return oI(e)
                    }), " ", n.customTags]
                }), (0,
                j.jsx)("div", {
                    className: "whitespace-pre-line text-xs",
                    children: n.description
                }), !n.disabled && s]
            }) : null
        }
        var oI = function(e) {
            return ob.includes(e) && (0,
            j.jsx)("span", {
                className: (0,
                B.Z)("py-0.25 rounded px-1 text-[10px] font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "alpha" === e && "bg-blue-200 text-blue-500", "plus" === e && "bg-yellow-200 text-yellow-900"),
                children: e
            }, e)
        }
          , oN = _.Z.div(of())
          , oP = (0,
        _.Z)(oN)(oh())
          , oS = (0,
        _.Z)(oN)(og())
          , oZ = "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20"
          , oR = "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20"
          , oD = _.Z.span(om())
          , oF = _.Z.span(op())
          , oA = _.Z.span(ov())
          , oE = _.Z.span(ox())
          , oL = t(20485)
          , oB = t(5759);
        function oO() {
            var e = (0,
            y._)(["mt-4 flex flex-col gap-4"]);
            return oO = function() {
                return e
            }
            ,
            e
        }
        function oq() {
            var e = (0,
            y._)(["text-sm text-red-500"]);
            return oq = function() {
                return e
            }
            ,
            e
        }
        var oU = _.Z.div(oO())
          , oz = _.Z.div(oq());
        function oH(e) {
            var n = e.onClickInstall
              , t = e.onInstallLocalhost
              , r = e.onClose
              , a = (0,
            b._)((0,
            C.useState)(), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            b._)((0,
            C.useState)(), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            b._)((0,
            C.useState)(!1), 2)
              , d = c[0]
              , f = c[1]
              , h = (0,
            C.useCallback)(function(e) {
                o(e)
            }, [])
              , g = (0,
            C.useCallback)(function() {
                f(!0)
            }, []);
            return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0,
            j.jsx)(o$, {
                plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
                onClickInstall: n,
                onClose: r
            }) : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0,
            j.jsx)(oQ, {
                plugin: i.scrapeManifestResponse.plugin,
                manifestAccessToken: i.manifestAccessToken,
                verificationTokens: l,
                onReadyToInstall: g,
                onClose: r
            }) : i ? (0,
            j.jsx)(oW, {
                loadManifestResult: i,
                onRefetch: h,
                onSubmitAuthInfo: u,
                onReadyToInstall: g,
                onInstallLocalhost: t,
                onClose: r
            }) : (0,
            j.jsx)(oV, {
                onFetch: h,
                onClose: r
            })
        }
        function oV(e) {
            var n = e.onFetch
              , t = e.onClose
              , r = (0,
            eh.kP)().session
              , a = (0,
            b._)((0,
            C.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            b._)((0,
            C.useState)("bearer"), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            b._)((0,
            C.useState)(), 2)
              , d = c[0]
              , f = c[1]
              , h = (0,
            C.useRef)(null)
              , g = (0,
            C.useRef)(null)
              , m = n2()
              , p = m.fetchManifestAndSpec
              , v = m.isLoading;
            (0,
            C.useEffect)(function() {
                var e;
                null === (e = h.current) || void 0 === e || e.focus()
            }, []);
            var x = (0,
            C.useCallback)(function() {
                o(function(e) {
                    return !e
                })
            }, [])
              , y = (0,
            C.useCallback)(function(e) {
                u(e.target.value)
            }, [])
              , w = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e, t, r;
                return (0,
                ng.Jh)(this, function(a) {
                    return (r = null === (e = h.current) || void 0 === e ? void 0 : e.value) ? (p({
                        domain: r,
                        manifestAccessToken: i ? {
                            authorization_type: l,
                            token: (null === (t = g.current) || void 0 === t ? void 0 : t.value) || ""
                        } : void 0,
                        onSuccess: n,
                        onError: function(e) {
                            return f((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                        }
                    }),
                    [2]) : (f("Please provide a domain."),
                    [2])
                })
            }), [p, n, l, i]);
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: "Enter your website domain",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Find manifest file",
                    color: "primary",
                    onClick: w,
                    loading: v
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                j.jsxs)(oU, {
                    children: [(0,
                    j.jsx)("a", {
                        href: "https://platform.openai.com/docs/plugins/getting-started",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-green-600",
                        children: "Visit our documentation to learn how to build a plugin."
                    }), (0,
                    j.jsxs)(oB.Z, {
                        icon: "\uD83D\uDEA8",
                        children: ["If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your ", "plugin's", " manifest, your plugin will be removed from the store, and you will need to", " ", (0,
                        j.jsx)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                            children: "resubmit it for review"
                        }), "."]
                    }), (0,
                    j.jsx)(nx, {
                        ref: h,
                        name: "url",
                        displayName: "Domain",
                        placeholder: "ex: openai.com or localhost:3000",
                        onPressEnter: w,
                        autoFocus: !0
                    }), (null == r ? void 0 : r.user) != null && (0,
                    eh.yl)(r.user) && (0,
                    j.jsxs)(j.Fragment, {
                        children: [(0,
                        j.jsxs)("div", {
                            role: "button",
                            className: "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                            onClick: x,
                            children: [(0,
                            j.jsx)("div", {
                                children: "My file requires authentication"
                            }), (0,
                            j.jsx)(ec.ZP, {
                                icon: i ? J.rH8 : J.bTu
                            })]
                        }), i && (0,
                        j.jsxs)(j.Fragment, {
                            children: [(0,
                            j.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                j.jsx)("div", {
                                    children: "Authentication type"
                                }), (0,
                                j.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0,
                                    j.jsx)(oG, {
                                        label: "Bearer",
                                        value: "bearer",
                                        checked: "bearer" === l,
                                        onChange: y
                                    }), (0,
                                    j.jsx)(oG, {
                                        label: "Basic",
                                        value: "basic",
                                        checked: "basic" === l,
                                        onChange: y
                                    })]
                                })]
                            }), (0,
                            j.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                j.jsx)("div", {
                                    children: "Access token"
                                }), (0,
                                j.jsx)(nx, {
                                    ref: g,
                                    name: "manifestToken",
                                    onPressEnter: w
                                })]
                            })]
                        })]
                    }), d && (0,
                    j.jsx)(oz, {
                        children: d
                    })]
                })
            })
        }
        function oG(e) {
            var n = e.label
              , t = e.value
              , r = e.checked
              , a = e.onChange;
            return (0,
            j.jsxs)("label", {
                className: "flex items-center gap-2",
                children: [(0,
                j.jsx)("input", {
                    name: "manifestAuthType",
                    type: "radio",
                    value: t,
                    checked: r,
                    onChange: a,
                    className: "text-green-600 focus:ring-green-600"
                }), n]
            })
        }
        function oW(e) {
            var n = e.loadManifestResult
              , t = e.onRefetch
              , r = e.onSubmitAuthInfo
              , a = e.onReadyToInstall
              , i = e.onInstallLocalhost
              , o = e.onClose
              , s = n.domain
              , l = n.manifestAccessToken
              , u = n.scrapeManifestResponse
              , c = n.apiValidationInfo
              , d = u.plugin
              , f = u.manifest_validation_info
              , h = (0,
            b._)((0,
            C.useState)(), 2)
              , g = h[0]
              , m = h[1]
              , p = (0,
            b._)((0,
            C.useState)(!1), 2)
              , v = p[0]
              , x = p[1]
              , y = (0,
            C.useRef)(null)
              , k = (0,
            C.useRef)(null)
              , _ = (0,
            C.useRef)(null)
              , M = n2()
              , T = M.fetchManifestAndSpec
              , I = M.isLoading
              , N = (0,
            w.NL)()
              , P = d && n$(d)
              , S = (null == d ? void 0 : d.manifest.auth.type) === "service_http"
              , Z = (null == d ? void 0 : d.manifest.auth.type) === "oauth"
              , R = f.errors && f.errors.length > 0 || (null == c ? void 0 : c.errors) && (null == c ? void 0 : c.errors.length) > 0
              , D = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e, n, u, c, f;
                return (0,
                ng.Jh)(this, function(h) {
                    switch (h.label) {
                    case 0:
                        if (!R)
                            return [3, 1];
                        return T({
                            domain: s,
                            manifestAccessToken: l,
                            onSuccess: t,
                            onError: function(e) {
                                return m((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                            }
                        }),
                        [3, 15];
                    case 1:
                        if (!P)
                            return [3, 2];
                        return nK(d, N, ["installedAip"]),
                        i(d),
                        [3, 15];
                    case 2:
                        if (!S)
                            return [3, 8];
                        if (!(null === (e = y.current) || void 0 === e ? void 0 : e.value))
                            return m("Please provide your service access token."),
                            [2];
                        h.label = 3;
                    case 3:
                        return h.trys.push([3, 5, 6, 7]),
                        x(!0),
                        [4, ee.ZP.setPluginServiceHttpToken({
                            id: d.id,
                            serviceAccessToken: y.current.value
                        })];
                    case 4:
                        return r(h.sent().verification_tokens),
                        [3, 7];
                    case 5:
                        return h.sent(),
                        m("Error setting access token."),
                        [3, 7];
                    case 6:
                        return x(!1),
                        [7];
                    case 7:
                        return [3, 15];
                    case 8:
                        if (!Z)
                            return [3, 14];
                        if (c = null === (n = k.current) || void 0 === n ? void 0 : n.value,
                        f = null === (u = _.current) || void 0 === u ? void 0 : u.value,
                        !c || !f)
                            return m("Please provide your OAuth credentials."),
                            [2];
                        h.label = 9;
                    case 9:
                        return h.trys.push([9, 11, 12, 13]),
                        [4, ee.ZP.setPluginOAuthClientCredentials({
                            id: d.id,
                            clientId: k.current.value,
                            clientSecret: _.current.value
                        })];
                    case 10:
                        return r(h.sent().verification_tokens),
                        [3, 13];
                    case 11:
                        return h.sent(),
                        m("Error setting OAuth credentials."),
                        [3, 13];
                    case 12:
                        return x(!1),
                        [7];
                    case 13:
                        return [3, 15];
                    case 14:
                        d ? a(d) : o(),
                        h.label = 15;
                    case 15:
                        return [2]
                    }
                })
            }), [S, Z, d, s, l, R, P, N, T, t, r, a, i, o]);
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: o,
                type: "success",
                title: "Found plugin",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: R ? "Refetch manifest" : P ? "Install localhost plugin" : "Next",
                    color: "primary",
                    onClick: D,
                    loading: v || I
                }),
                secondaryButton: (R || S || Z) && (0,
                j.jsx)(na.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: o
                }),
                children: (0,
                j.jsxs)(oU, {
                    children: [(0,
                    j.jsx)(nL, {
                        manifestValidationInfo: f
                    }), c && (0,
                    j.jsx)(nB, {
                        apiValidationInfo: c
                    }), d && (0,
                    j.jsx)(nE, {
                        plugin: d
                    }), S && !R && (0,
                    j.jsxs)("div", {
                        children: [(0,
                        j.jsx)("div", {
                            className: "text-sm",
                            children: "Enter your service access token:"
                        }), (0,
                        j.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            j.jsx)(nx, {
                                ref: y,
                                name: "serviceToken",
                                placeholder: "Service access token",
                                autoComplete: "off",
                                onPressEnter: D,
                                autoFocus: !0
                            })
                        })]
                    }), Z && !R && (0,
                    j.jsxs)("div", {
                        children: [(0,
                        j.jsx)("div", {
                            className: "text-sm",
                            children: "Enter your OAuth credentials:"
                        }), (0,
                        j.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            j.jsx)(nx, {
                                ref: k,
                                name: "clientId",
                                placeholder: "Client ID",
                                autoComplete: "off",
                                onPressEnter: D,
                                autoFocus: !0
                            })
                        }), (0,
                        j.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            j.jsx)(nx, {
                                ref: _,
                                type: "password",
                                name: "clientSecret",
                                placeholder: "Client secret",
                                autoComplete: "off",
                                onPressEnter: D
                            })
                        })]
                    }), g && (0,
                    j.jsx)(oz, {
                        children: g
                    })]
                })
            })
        }
        function oQ(e) {
            var n = e.plugin
              , t = e.manifestAccessToken
              , r = e.verificationTokens
              , a = e.onReadyToInstall
              , i = e.onClose
              , o = (0,
            b._)((0,
            C.useState)(), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            b._)((0,
            C.useState)(!1), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e, i;
                return (0,
                ng.Jh)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, 3, 4]),
                        d(!0),
                        [4, ee.ZP.scrapePluginManifest({
                            domain: n.domain,
                            manifestAccessToken: t
                        })];
                    case 1:
                        if (e = o.sent().plugin) {
                            for (var s in i = "service_http" === e.manifest.auth.type || "oauth" === e.manifest.auth.type ? e.manifest.auth.verification_tokens : {},
                            r)
                                if (r[s] !== i[s])
                                    return l('Please add the "'.concat(s, '" token to your manifest file.')),
                                    [2];
                            a(e)
                        } else
                            l("Error creating plugin.");
                        return [3, 4];
                    case 2:
                        return o.sent(),
                        l("Error creating plugin."),
                        [3, 4];
                    case 3:
                        return d(!1),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }), [n, t, r, a]);
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: i,
                type: "success",
                title: "Add verification token",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Verify tokens",
                    color: "primary",
                    onClick: f,
                    loading: c
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: "I'll add the tokens later",
                    color: "neutral",
                    onClick: i
                }),
                children: (0,
                j.jsxs)(oU, {
                    children: [(0,
                    j.jsx)(nE, {
                        plugin: n
                    }), (0,
                    j.jsx)("div", {
                        className: "text-sm",
                        children: "Add the following verification tokens to your manifest file:"
                    }), (0,
                    j.jsx)("pre", {
                        className: "text-sm",
                        children: JSON.stringify(r, null)
                    }), s && (0,
                    j.jsx)(oz, {
                        children: s
                    })]
                })
            })
        }
        function o$(e) {
            var n = e.plugin
              , t = e.onClickInstall
              , r = e.onClose
              , a = (0,
            C.useCallback)(function() {
                t(n)
            }, [n, t]);
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "Ready to install",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Install for me",
                    color: "primary",
                    onClick: a
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Install later",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                j.jsx)(oU, {
                    children: (0,
                    j.jsxs)("div", {
                        className: "text-sm",
                        children: ["Your unverified plugin can now be installed by", " ", (0,
                        j.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: "up to 15 developers"
                        }), ". Once ", "you're", " ready to make your plugin available to everyone, you can", " ", (0,
                        j.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: "submit your plugin for review"
                        }), "."]
                    })
                })
            })
        }
        function oJ(e) {
            var n = e.onConfirm
              , t = e.onClose;
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: "Unverified plugin",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Continue",
                    color: "primary",
                    onClick: n
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                j.jsx)(oU, {
                    children: (0,
                    j.jsx)(oB.I, {
                        children: (0,
                        j.jsx)(oB.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding."
                        })
                    })
                })
            })
        }
        function oY(e) {
            var n = e.plugin
              , t = e.onInstall
              , r = e.onClose
              , a = (0,
            b._)((0,
            C.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            b._)((0,
            C.useState)(n), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            C.useCallback)(function() {
                o(!0)
            }, []);
            return l ? i ? (0,
            j.jsx)(oK, {
                plugin: l,
                onInstall: t,
                onClose: r
            }) : (0,
            j.jsx)(oJ, {
                onConfirm: c,
                onClose: r
            }) : (0,
            j.jsx)(oX, {
                onLoad: u,
                onClose: r
            })
        }
        function oX(e) {
            var n = e.onLoad
              , t = e.onClose
              , r = (0,
            C.useRef)(null)
              , a = (0,
            b._)((0,
            C.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            b._)((0,
            C.useState)(), 2)
              , l = s[0]
              , u = s[1];
            (0,
            C.useEffect)(function() {
                setTimeout(function() {
                    var e;
                    null === (e = r.current) || void 0 === e || e.focus()
                }, 50)
            }, []);
            var c = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e, t, a;
                return (0,
                ng.Jh)(this, function(i) {
                    switch (i.label) {
                    case 0:
                        if (!(t = null === (e = r.current) || void 0 === e ? void 0 : e.value))
                            return u("Please provide a URL."),
                            [2];
                        if (nJ(t))
                            return u('To add a localhost plugin, please go to "Develop your own plugin."'),
                            [2];
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, 4, 5]),
                        o(!0),
                        [4, ee.ZP.getPluginByDomain({
                            domain: t
                        })];
                    case 2:
                        return (a = i.sent()) ? n(a) : u("That plugin doesn't exist."),
                        [3, 5];
                    case 3:
                        return i.sent(),
                        u("Couldn't find plugin."),
                        [3, 5];
                    case 4:
                        return o(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [n, o, u]);
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: t,
                type: "success",
                title: "Install an unverified plugin",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Find plugin",
                    color: "primary",
                    onClick: c,
                    loading: i
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                j.jsxs)(oU, {
                    children: [(0,
                    j.jsx)("div", {
                        children: "Please provide the website domain of the unverified plugin you'd like to install."
                    }), (0,
                    j.jsx)(nx, {
                        ref: r,
                        name: "url",
                        placeholder: "openai.com",
                        onPressEnter: c
                    }), l && (0,
                    j.jsx)(oz, {
                        children: l
                    })]
                })
            })
        }
        function oK(e) {
            var n = e.plugin
              , t = e.onInstall
              , r = e.onClose
              , a = (0,
            b._)((0,
            C.useState)(), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            b._)((0,
            C.useState)(!1), 2)
              , l = s[0]
              , u = s[1]
              , c = (0,
            C.useRef)(null)
              , d = nX({
                onSuccess: function(e) {
                    t(e),
                    r()
                },
                onError: function(e) {
                    o("Couldn't install plugin.")
                }
            })
              , f = n.manifest.name_for_human
              , h = "user_http" === n.manifest.auth.type
              , g = "oauth" === n.manifest.auth.type
              , m = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e, t;
                return (0,
                ng.Jh)(this, function(r) {
                    switch (r.label) {
                    case 0:
                        if (!g)
                            return [3, 1];
                        return (e = n1(n)) ? window.location.href = e : o("Missing plugin configuration for ".concat(f, ".")),
                        [3, 8];
                    case 1:
                        if (!h)
                            return [3, 7];
                        if (!(null === (t = c.current) || void 0 === t ? void 0 : t.value))
                            return o("Please provide your credentials."),
                            [2];
                        r.label = 2;
                    case 2:
                        return r.trys.push([2, 4, 5, 6]),
                        u(!0),
                        [4, ee.ZP.setPluginUserHttpToken({
                            id: n.id,
                            userAccessToken: c.current.value
                        })];
                    case 3:
                        return r.sent(),
                        d(n.id),
                        [3, 6];
                    case 4:
                        return r.sent(),
                        o("Couldn't install plugin."),
                        [3, 6];
                    case 5:
                        return u(!1),
                        [7];
                    case 6:
                        return [3, 8];
                    case 7:
                        try {
                            u(!0),
                            d(n.id)
                        } catch (e) {
                            o("Couldn't install plugin.")
                        } finally {
                            u(!1)
                        }
                        r.label = 8;
                    case 8:
                        return [2]
                    }
                })
            }), [n, f, g, h, d]);
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "Unverified plugin",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: g ? "Log in with ".concat(f) : "Install plugin",
                    color: "primary",
                    onClick: m,
                    loading: l
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                j.jsxs)(oU, {
                    children: [(0,
                    j.jsx)(nE, {
                        plugin: n
                    }), h && (0,
                    j.jsxs)("div", {
                        children: [(0,
                        j.jsx)("div", {
                            className: "text-sm",
                            children: n.manifest.auth.instructions || "Enter your HTTP access token below:"
                        }), (0,
                        j.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            j.jsx)(nx, {
                                ref: c,
                                type: "password",
                                name: "token",
                                placeholder: "Enter your credentials",
                                autoComplete: "off",
                                onPressEnter: m
                            })
                        })]
                    }), g && (0,
                    j.jsxs)("div", {
                        children: ["You will be redirected to", " ", (0,
                        j.jsx)("span", {
                            className: "font-medium",
                            children: f
                        }), " to log in."]
                    }), i && (0,
                    j.jsx)(oz, {
                        children: i
                    })]
                })
            })
        }
        var o0 = t(95552)
          , o1 = t.n(o0);
        function o2(e) {
            var n = e.onClose
              , t = np().setupMfa;
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: n,
                type: "success",
                title: "Enable two-factor authentication",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Enable two-factor authentication",
                    color: "primary",
                    onClick: t
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                j.jsx)(oU, {
                    children: (0,
                    j.jsx)(oB.I, {
                        children: (0,
                        j.jsx)(oB.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again."
                        })
                    })
                })
            })
        }
        function o3() {
            var e = (0,
            y._)(["text-sm text-black/70 dark:text-white/70 whitespace-nowrap ", ""]);
            return o3 = function() {
                return e
            }
            ,
            e
        }
        function o5() {
            var e = (0,
            y._)(["hidden h-4 border-l border-black/30 dark:border-white/30 sm:block"]);
            return o5 = function() {
                return e
            }
            ,
            e
        }
        var o4 = (g = {},
        (0,
        ag._)(g, et._G.Mobile, 8),
        (0,
        ag._)(g, et._G.Small, 4),
        (0,
        ag._)(g, et._G.Medium, 4),
        (0,
        ag._)(g, et._G.Large, 6),
        (0,
        ag._)(g, et._G.XLarge, 8),
        g);
        (o = m || (m = {}))[o.All = 0] = "All",
        o[o.Installed = 1] = "Installed",
        (s = p || (p = {})).New = "newly_added",
        s.Popular = "most_popular";
        var o6 = [{
            id: p.Popular,
            title: "Popular"
        }, {
            id: p.New,
            title: "New"
        }, {
            id: m.All,
            title: "All"
        }, {
            id: m.Installed,
            title: "Installed"
        }];
        function o8(e) {
            var n, t, r, a, i, o, s, l, u, c, d, f, h, g, v = e.onInstallWithAuthRequired, x = e.onClickInstallDeveloper, y = e.onClickDevelop, w = e.onClickAbout, k = e.onClose, _ = (0,
            eh.kP)().session, M = n3(), T = M.installedPlugins, N = M.isLoading, P = (u = (0,
            eh.kP)().session,
            c = (0,
            nf.Fl)().isPluginsAvailable,
            f = (d = (0,
            nt.a)(["approvedAip"], function() {
                return ee.ZP.getPlugins({
                    offset: 0,
                    limit: 250,
                    statuses: ["approved"],
                    accessToken: null == u ? void 0 : u.accessToken
                })
            }, {
                enabled: c && (null == u ? void 0 : u.accessToken) != null,
                onError: function(e) {
                    console.error(e)
                }
            })).data,
            h = d.isLoading,
            (0,
            C.useMemo)(function() {
                var e = f ? f.items.reduce(function(e, n) {
                    var t = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o, s = (null !== (i = n.categories) && void 0 !== i ? i : [])[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) {
                            var l = o.value;
                            null == e[l.id] && (e[l.id] = {
                                id: l.id,
                                title: l.title,
                                items: []
                            }),
                            e[l.id].items.push(n)
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            t || null == s.return || s.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return e
                }, {}) : {};
                return {
                    approvedPlugins: f ? f.items : [],
                    approvedPluginsByCategory: e,
                    isLoading: h
                }
            }, [f, h])), S = P.approvedPlugins, Z = P.isLoading, R = P.approvedPluginsByCategory, D = (0,
            C.useMemo)(function() {
                var e = []
                  , n = !0
                  , t = !1
                  , r = void 0;
                try {
                    for (var a, i = o6[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var o, s = a.value;
                        Object.values(p).includes(s.id) ? (null === (o = R[s.id]) || void 0 === o ? void 0 : o.items.length) > 0 && e.push(s) : s.id === m.Installed ? T.length > 0 && e.push(s) : e.push(s)
                    }
                } catch (e) {
                    t = !0,
                    r = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (t)
                            throw r
                    }
                }
                return e
            }, [T.length, R]), F = (0,
            b._)((0,
            C.useState)(D[0].id), 2), A = F[0], E = F[1], L = function(e, n) {
                for (var t = (0,
                nz._)(e), r = o1()(n), a = t.length - 1; a > 0; a--) {
                    var i, o = Math.floor(r() * (a + 1));
                    i = [t[o], t[a]],
                    t[a] = i[0],
                    t[o] = i[1]
                }
                var s = t.findIndex(function(e) {
                    return "api.openai.com" === e.domain
                });
                if (-1 !== s) {
                    var l = t.splice(s, 1)[0];
                    t.unshift(l)
                }
                return t
            }(o7((0,
            C.useMemo)(function() {
                if (A === m.All)
                    return S;
                if (Object.values(p).includes(A)) {
                    var e, n;
                    return null !== (n = null === (e = R[A]) || void 0 === e ? void 0 : e.items) && void 0 !== n ? n : []
                }
                return []
            }, [S, A, R])), (null == _ ? void 0 : null === (g = _.user) || void 0 === g ? void 0 : g.id) || ""), B = o7(T), O = (0,
            I.hz)(), q = o4[(0,
            et.dQ)()], U = [], z = !1;
            A === m.Installed ? (U = B,
            z = N) : (U = L,
            z = Z);
            var H = (t = (n = {
                items: U,
                numItemsPerPage: q
            }).items,
            r = n.numItemsPerPage,
            i = (a = (0,
            b._)((0,
            C.useState)(0), 2))[0],
            o = a[1],
            s = Math.ceil(t.length / r),
            l = i * r,
            {
                page: i,
                numPages: s,
                pageItems: t.slice(l, l + r),
                goToPage: (0,
                C.useCallback)(function(e) {
                    o(e)
                }, [])
            })
              , V = H.page
              , G = H.numPages
              , W = H.pageItems
              , Q = H.goToPage;
            (0,
            C.useEffect)(function() {
                A === m.Installed && 0 === T.length && (E(D[0].id),
                Q(0))
            }, [A, T, Q, D]),
            (0,
            C.useEffect)(function() {
                Z || E(D[0].id)
            }, [Z]);
            var $ = (0,
            b._)((0,
            C.useState)(!1), 2)
              , J = $[0]
              , Y = $[1];
            return J ? (0,
            j.jsx)(o2, {
                onClose: function() {
                    Y(!1)
                }
            }) : (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: k,
                type: "success",
                title: "Plugin store",
                size: "custom",
                className: "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
                closeButton: (0,
                j.jsx)(na.ol, {
                    onClose: k
                }),
                children: (0,
                j.jsxs)(oU, {
                    children: [!z && D.length > 1 && (0,
                    j.jsx)("div", {
                        className: "flex flex-wrap gap-3",
                        children: D.map(function(e) {
                            return (0,
                            j.jsx)(o9, {
                                selected: A === e.id,
                                onClick: function() {
                                    E(e.id),
                                    Q(0)
                                },
                                children: e.title
                            }, e.id)
                        })
                    }), (0,
                    j.jsx)(se, {
                        plugins: W,
                        numSkeletons: q,
                        isLoading: z,
                        onInstallWithAuthRequired: v,
                        onRequestMfa: function() {
                            return Y(!0)
                        }
                    }), (0,
                    j.jsxs)("div", {
                        className: "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                        children: [(0,
                        j.jsx)("div", {
                            className: "flex flex-1 justify-start max-lg:justify-center",
                            children: G > 1 && (0,
                            j.jsx)(sa, {
                                page: V,
                                numPages: G,
                                goToPage: Q
                            })
                        }), (0,
                        j.jsxs)("div", {
                            className: "flex flex-col items-center gap-2 sm:flex-row",
                            children: [O.has("tools3_dev") && (0,
                            j.jsxs)(j.Fragment, {
                                children: [(0,
                                j.jsx)(si, {
                                    onClick: x,
                                    children: "Install an unverified plugin"
                                }), (0,
                                j.jsx)(so, {}), (0,
                                j.jsx)(si, {
                                    onClick: y,
                                    children: "Develop your own plugin"
                                }), (0,
                                j.jsx)(so, {})]
                            }), (0,
                            j.jsx)(si, {
                                onClick: w,
                                children: "About plugins"
                            })]
                        })]
                    })]
                })
            })
        }
        function o7(e) {
            return (0,
            C.useMemo)(function() {
                return e.sort(function(e, n) {
                    return e.manifest.name_for_human.localeCompare(n.manifest.name_for_human)
                })
            }, [e])
        }
        function o9(e) {
            var n = e.selected
              , t = e.onClick
              , r = e.children;
            return (0,
            j.jsx)(eu.z, {
                color: n ? "light" : "neutral",
                className: (0,
                B.Z)("focus:ring-0", n && "hover:bg-gray-200", !n && "text-black/50"),
                onClick: t,
                children: r
            })
        }
        function se(e) {
            var n = e.plugins
              , t = e.numSkeletons
              , r = e.isLoading
              , a = e.onInstallWithAuthRequired
              , i = e.onRequestMfa
              , o = r ? Array(t).fill(0).map(function(e, n) {
                return (0,
                j.jsx)(st, {}, n)
            }) : n.map(function(e) {
                return (0,
                j.jsx)(sn, {
                    plugin: e,
                    onInstallWithAuthRequired: a,
                    onRequestMfa: i
                }, e.id)
            });
            return (0,
            j.jsx)("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
                children: o
            })
        }
        function sn(e) {
            var n, t, r, a, i, o, s, l = e.plugin, u = e.onInstallWithAuthRequired, c = e.onRequestMfa, d = (0,
            b._)((0,
            C.useState)(!1), 2), f = d[0], h = d[1], g = (0,
            b._)((0,
            C.useState)(!1), 2), m = g[0], p = g[1], v = nX({
                onSuccess: function(e) {
                    n9(e.id)
                },
                onError: function(e) {
                    console.error(e),
                    em.m.danger("Error installing ".concat(l.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    h(!1)
                }
            }), x = (t = (n = {
                onSuccess: function() {},
                onError: function(e) {
                    console.error(e),
                    em.m.danger("Error uninstalling ".concat(l.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    p(!1)
                }
            }).onSuccess,
            r = n.onError,
            a = n.onSettled,
            i = (0,
            w.NL)(),
            o = (0,
            nc.D)(ee.ZP.updatePluginUserSettings.bind(ee.ZP), {
                onSuccess: function(e) {
                    (function(e, n, t) {
                        n.setQueryData(t, function(n) {
                            var t = (0,
                            nz._)((null == n ? void 0 : n.items) || [])
                              , r = t.findIndex(function(n) {
                                return n.id === e.id
                            });
                            return -1 !== r && t.splice(r, 1),
                            {
                                count: t.length,
                                items: t
                            }
                        })
                    }
                    )(e, i, ["installedAip"]),
                    n0(e, i, ["approvedAip"]),
                    t(e)
                },
                onError: r,
                onSettled: a
            }).mutate,
            (0,
            C.useCallback)(function(e) {
                o({
                    pluginId: e,
                    isInstalled: !1
                })
            }, [o])), y = (0,
            eh.kP)().session, k = np().isUsernamePassword, _ = (0,
            C.useCallback)(function() {
                var e, n = l.manifest.auth.type;
                if (!("none" === n || "service_http" === n) && !(null == y ? void 0 : null === (e = y.user) || void 0 === e ? void 0 : e.mfa) && k) {
                    c();
                    return
                }
                if ("oauth" === n) {
                    var t = n1(l);
                    t ? window.location.href = t : em.m.danger("Missing plugin configuration for ".concat(l.manifest.name_for_human, "."))
                } else
                    "user_http" === n ? u(l) : (h(!0),
                    v(l.id))
            }, [l, v, u, c, k, y]), M = (0,
            C.useCallback)(function() {
                p(!0),
                x(l.id)
            }, [l, x]);
            return s = f || m ? (0,
            j.jsxs)(eu.z, {
                color: "light",
                className: "bg-green-100 hover:bg-green-100",
                children: [f ? "Installing" : "Uninstalling", (0,
                j.jsx)(ed.Z, {})]
            }) : l.user_settings.is_installed ? (0,
            j.jsxs)(eu.z, {
                color: "light",
                className: "hover:bg-gray-200",
                onClick: M,
                children: ["Uninstall", (0,
                j.jsx)(ec.ZP, {
                    icon: J.$Rx
                })]
            }) : (0,
            j.jsxs)(eu.z, {
                onClick: _,
                children: ["Install", (0,
                j.jsx)(ec.ZP, {
                    icon: J.wzc
                })]
            }),
            (0,
            j.jsx)(sr, {
                logo: (0,
                j.jsx)(eX, {
                    url: l.manifest.logo_url,
                    name: l.manifest.name_for_human,
                    size: "100%",
                    large: !0
                }),
                tag: n$(l) ? (0,
                j.jsx)(aq, {}) : "approved" !== l.status ? (0,
                j.jsx)(aO, {}) : void 0,
                title: (0,
                j.jsx)("div", {
                    className: "max-w-full truncate text-lg leading-6",
                    children: l.manifest.name_for_human
                }),
                button: s,
                description: l.manifest.description_for_human
            })
        }
        function st() {
            return (0,
            j.jsx)(sr, {
                logo: (0,
                j.jsx)("div", {
                    className: "h-full w-full rounded-[5px] bg-gray-300"
                }),
                title: (0,
                j.jsx)("div", {
                    className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100"
                }),
                button: (0,
                j.jsx)("div", {
                    className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200"
                }),
                description: (0,
                j.jsxs)("div", {
                    className: "flex flex-col gap-1.5",
                    children: [(0,
                    j.jsx)("div", {
                        className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100"
                    }), (0,
                    j.jsx)("div", {
                        className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100"
                    }), (0,
                    j.jsx)("div", {
                        className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100"
                    })]
                })
            })
        }
        function sr(e) {
            var n = e.logo
              , t = e.tag
              , r = e.title
              , a = e.button
              , i = e.description;
            return (0,
            j.jsxs)("div", {
                className: "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
                children: [(0,
                j.jsxs)("div", {
                    className: "flex gap-4",
                    children: [(0,
                    j.jsx)("div", {
                        className: "h-[70px] w-[70px] shrink-0",
                        children: n
                    }), (0,
                    j.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-start justify-between",
                        children: [t ? (0,
                        j.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [t, r]
                        }) : r, a]
                    })]
                }), (0,
                j.jsx)("div", {
                    className: "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
                    children: i
                })]
            })
        }
        function sa(e) {
            for (var n = function(e) {
                u.push((0,
                j.jsx)(si, {
                    role: "button",
                    className: (0,
                    B.Z)("flex h-5 w-5 items-center justify-center", e === t && "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"),
                    onClick: function() {
                        return a(e)
                    },
                    children: e + 1
                }, e))
            }, t = e.page, r = e.numPages, a = e.goToPage, i = t > 0, o = t < r - 1, s = (0,
            C.useCallback)(function() {
                a(Math.max(t - 1, 0))
            }, [t, a]), l = (0,
            C.useCallback)(function() {
                a(Math.min(t + 1, r - 1))
            }, [t, r, a]), u = [], c = 0; c < r; c++)
                n(c);
            return (0,
            j.jsxs)("div", {
                className: "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
                children: [(0,
                j.jsxs)(si, {
                    role: "button",
                    className: (0,
                    B.Z)("flex items-center", !i && "opacity-50"),
                    onClick: s,
                    $disabled: !i,
                    children: [(0,
                    j.jsx)(ec.ZP, {
                        icon: J.YFh
                    }), "Prev"]
                }), u, (0,
                j.jsxs)(si, {
                    role: "button",
                    className: (0,
                    B.Z)("flex items-center", !o && "opacity-50"),
                    onClick: l,
                    $disabled: !o,
                    children: ["Next", (0,
                    j.jsx)(ec.ZP, {
                        icon: J.Tfp
                    })]
                })]
            })
        }
        var si = _.Z.button(o3(), function(e) {
            return e.$disabled ? "opacity-50 cursor-default" : "hover:text-black/50 dark:hover:text-white/50"
        })
          , so = _.Z.div(o5());
        function ss(e) {
            var n = e.allowClose
              , t = e.onConfirm
              , r = e.onClose;
            return (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: r,
                type: "success",
                title: "About plugins",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    title: "OK",
                    color: "primary",
                    onClick: t
                }),
                secondaryButton: n && (0,
                j.jsx)(na.mH, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                j.jsx)(oU, {
                    children: (0,
                    j.jsxs)(oB.I, {
                        children: [(0,
                        j.jsx)(oB.Z, {
                            icon: "\uD83D\uDEA8",
                            children: "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation."
                        }), (0,
                        j.jsx)(oB.Z, {
                            icon: "\uD83C\uDF10",
                            children: "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation."
                        }), (0,
                        j.jsx)(oB.Z, {
                            icon: "\uD83E\uDDE0",
                            children: "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled."
                        })]
                    })
                })
            })
        }
        var sl = "oai/apps/hasSeenPluginsDisclaimer";
        function su(e) {
            var n = e.onInstall
              , t = e.onClose
              , r = (0,
            b._)((0,
            C.useState)(!!eg.m.getItem(sl)), 2)
              , a = r[0]
              , i = r[1]
              , o = (0,
            b._)((0,
            C.useState)(!1), 2)
              , s = o[0]
              , l = o[1]
              , u = (0,
            b._)((0,
            C.useState)(!1), 2)
              , c = u[0]
              , d = u[1]
              , f = (0,
            b._)((0,
            C.useState)(), 2)
              , h = f[0]
              , g = f[1]
              , m = (0,
            b._)((0,
            C.useState)(!1), 2)
              , p = m[0]
              , v = m[1]
              , x = (0,
            C.useCallback)(function() {
                i(!0),
                l(!1),
                eg.m.setItem(sl, !0)
            }, [])
              , y = (0,
            C.useCallback)(function(e) {
                g(e),
                d(!0)
            }, [])
              , w = (0,
            C.useCallback)(function() {
                d(!0)
            }, [])
              , k = (0,
            C.useCallback)(function() {
                v(!0)
            }, [])
              , _ = (0,
            C.useCallback)(function() {
                l(!0)
            }, [])
              , M = (0,
            C.useCallback)(function(e) {
                n9(e.id),
                t(),
                n(e)
            }, [n, t])
              , T = (0,
            C.useCallback)(function() {
                g(void 0),
                d(!1),
                t()
            }, [t])
              , I = (0,
            C.useCallback)(function() {
                v(!1),
                t()
            }, [t]);
            return !a || s ? (0,
            j.jsx)(ss, {
                allowClose: !a,
                onConfirm: x,
                onClose: t
            }) : c ? (0,
            j.jsx)(oY, {
                plugin: h,
                onInstall: M,
                onClose: T
            }) : p ? (0,
            j.jsx)(oH, {
                onClickInstall: y,
                onInstallLocalhost: M,
                onClose: I
            }) : (0,
            j.jsx)(o8, {
                onInstallWithAuthRequired: y,
                onClickInstallDeveloper: w,
                onClickDevelop: k,
                onClickAbout: _,
                onClose: t
            })
        }
        function sc() {
            var e = (0,
            y._)(["flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white"]);
            return sc = function() {
                return e
            }
            ,
            e
        }
        function sd(e) {
            var n, t = e.theme, r = void 0 === t ? "default" : t, a = (0,
            b._)((0,
            C.useState)(!1), 2), i = a[0], o = a[1], s = (0,
            b._)((0,
            C.useState)(!1), 2), l = s[0], u = s[1], c = (0,
            k.useRouter)(), d = n3(), f = d.installedPlugins, h = d.isLoading, g = n8(), m = (0,
            C.useRef)(null);
            (0,
            C.useEffect)(function() {
                if (!h) {
                    var e = c.query
                      , n = e.loginAip
                      , t = e.loginSuccess
                      , r = (0,
                    x._)(e, ["loginAip", "loginSuccess"]);
                    if (n) {
                        var a, i = f.find(function(e) {
                            return e.id === n
                        });
                        i && "true" === t ? (n9(c.query.loginAip),
                        null === (a = m.current) || void 0 === a || a.open()) : em.m.warning("Couldn't log in with ".concat((null == i ? void 0 : i.manifest.name_for_human) || "plugin", ".")),
                        c.replace({
                            pathname: c.pathname,
                            query: r
                        })
                    }
                }
            }, [c, f, h]);
            var p = (0,
            C.useCallback)(function() {
                var e;
                null === (e = m.current) || void 0 === e || e.open()
            }, [])
              , v = (0,
            C.useCallback)(function() {
                o(!1)
            }, [])
              , y = (0,
            b._)((0,
            C.useState)(g), 2)
              , w = y[0]
              , _ = y[1]
              , M = (0,
            C.useCallback)(function(e) {
                if (e.length > 3)
                    u(!0),
                    setTimeout(function() {
                        u(!1)
                    }, 600);
                else {
                    var n = e.filter(function(e) {
                        return !g.find(function(n) {
                            return n.id === e.id
                        })
                    })
                      , t = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o = n5[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var s = function() {
                                var e = i.value
                                  , t = g.find(function(n) {
                                    return e.includes(n.domain)
                                });
                                if (t) {
                                    var r = e.find(function(e) {
                                        return e !== t.domain
                                    })
                                      , a = n.find(function(e) {
                                        return e.domain === r
                                    });
                                    if (a)
                                        return em.m.warning("You can't enable ".concat(a.manifest.name_for_human, " while ").concat(t.manifest.name_for_human, " is enabled.")),
                                        {
                                            v: void 0
                                        }
                                }
                            }();
                            if ("object" === (0,
                            oL._)(s))
                                return s.v
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    n7(e.map(function(e) {
                        return e.id
                    }))
                }
            }, [g])
              , T = (0,
            C.useCallback)(function(e) {
                var n;
                null === (n = m.current) || void 0 === n || n.close(),
                "store" === e && o(!0)
            }, [])
              , I = (0,
            C.useCallback)(function() {
                _(g),
                tW.m.logEvent("chatgpt_plugin_chooser_opened", null, {
                    num_enabled_plugins: "".concat(g.length)
                })
            }, [g])
              , N = (0,
            C.useCallback)(function() {
                var e = w.filter(function(e) {
                    return !g.find(function(n) {
                        return n.id === e.id
                    })
                })
                  , n = g.filter(function(e) {
                    return !w.find(function(n) {
                        return n.id === e.id
                    })
                })
                  , t = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, o = n[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                        var s = i.value;
                        tW.m.logEvent("chatgpt_plugin_enabled", null, {
                            plugin_id: s.id
                        })
                    }
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                var l = !0
                  , u = !1
                  , c = void 0;
                try {
                    for (var d, f = e[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                        var h = d.value;
                        tW.m.logEvent("chatgpt_plugin_disabled", null, {
                            plugin_id: h.id
                        })
                    }
                } catch (e) {
                    u = !0,
                    c = e
                } finally {
                    try {
                        l || null == f.return || f.return()
                    } finally {
                        if (u)
                            throw c
                    }
                }
            }, [g, w])
              , P = f.map(function(e) {
                return {
                    value: e,
                    title: e.manifest.name_for_human,
                    description: e.manifest.description_for_human,
                    tags: [],
                    customTags: n$(e) ? (0,
                    j.jsx)(aq, {}) : "approved" !== e.status ? (0,
                    j.jsx)(aO, {}) : void 0,
                    imageUrl: e.manifest.logo_url
                }
            })
              , S = P.filter(function(e) {
                return g.find(function(n) {
                    return n.id === e.value.id
                })
            })
              , Z = "".concat(0 === g.length ? "No" : g.length, " plugins enabled");
            if (g.length > 0 && g.length < 6) {
                var R = g.map(function(e, n) {
                    return (0,
                    j.jsx)(eX, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 16
                    }, n)
                });
                Z = (0,
                j.jsx)("div", {
                    className: "flex gap-1",
                    children: R
                })
            }
            var D = [{
                id: "store",
                label: "Plugin store",
                icon: J.Rgz
            }];
            f.length > 3 && (n = (0,
            j.jsxs)(sf, {
                className: (0,
                B.Z)("transition-colors duration-300", l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"),
                children: [g.length, "/", 3, " Enabled"]
            }));
            var F = (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsx)(sf, {
                    children: "Loading..."
                }), (0,
                j.jsx)(oM, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                j.jsx)(oM, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                j.jsx)(oM, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                j.jsx)(oM, {
                    showCheckbox: !0,
                    theme: r
                }), (0,
                j.jsx)(oM, {
                    showCheckbox: !0,
                    theme: r
                })]
            });
            return (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsx)(oj, {
                    name: "Plugins",
                    selectedOptions: S,
                    selectedLabel: Z,
                    options: P,
                    actions: D,
                    onChange: M,
                    onAction: T,
                    onOpen: I,
                    onClose: N,
                    dropdownRef: m,
                    isLoading: h,
                    loadingState: F,
                    header: n,
                    theme: "mini" === r ? "mini" : "default"
                }), i && (0,
                j.jsx)(su, {
                    onInstall: p,
                    onClose: v
                })]
            })
        }
        var sf = _.Z.div(sc());
        function sh(e) {
            var n, t, r = e.currentModelId, a = (0,
            I.hz)(), i = (0,
            aQ.fm)(), o = (0,
            aQ.B9)(), s = void 0 !== r ? o.get(r) : void 0, l = (0,
            C.useMemo)(function() {
                return Array.from(o.values())
            }, [o]), u = (0,
            nf.Fl)(), c = u.isBetaFeaturesUiEnabled, d = u.isPluginsAvailable, f = u.isBrowsingAvailable, h = u.isCodeInterpreterAvailable;
            return c && a.has("new_model_switcher_20230512") && (d || f || h) ? s ? (0,
            j.jsxs)("div", {
                className: "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
                children: [(0,
                j.jsx)(ot, {
                    currentModel: s,
                    onModelChange: i
                }), d && (null == s ? void 0 : null === (t = s.enabledTools) || void 0 === t ? void 0 : t.includes("tools3")) && (0,
                j.jsx)(sd, {
                    theme: "mini"
                })]
            }) : null : (0,
            j.jsxs)("div", {
                className: "flex items-center justify-center gap-2",
                children: [(0,
                j.jsx)(sg, {
                    onChangeModelQueryParam: i,
                    availableModels: l,
                    currentModelId: r
                }), d && (null == s ? void 0 : null === (n = s.enabledTools) || void 0 === n ? void 0 : n.includes("tools3")) && (0,
                j.jsx)(sd, {})]
            })
        }
        function sg(e) {
            var n = e.onChangeModelQueryParam
              , t = e.availableModels
              , r = e.currentModelId
              , a = (0,
            aI.BT)()
              , i = (0,
            M.WS)()
              , o = i8()
              , s = (0,
            C.useCallback)(function(e) {
                e.id !== a && (n(e.id),
                i(T.s6.toggleModel, {
                    model: e.id
                }))
            }, [a, i, n])
              , l = "".concat(o.modelSwitcherDisclaimer)
              , u = t.map(function(e) {
                return {
                    value: e,
                    title: e.title,
                    description: e.id === a ? l : e.description,
                    tags: e.tags,
                    disabled: e.id === a
                }
            })
              , c = u.find(function(e) {
                return e.value.id === r
            }) || u[0];
            return void 0 === r ? null : (0,
            j.jsx)(oy, {
                name: "Model",
                selectedOption: c,
                options: u,
                onChange: s,
                theme: "default"
            })
        }
        var sm = function(e) {
            var n, t, r, a = e.currentModelConfig, i = e.clientThreadId, o = e.isStaticSharedThread, s = e.icon, l = (0,
            N.Ro)(i);
            void 0 === l && (l = a);
            var u = l.tags.filter(function(e) {
                return ob.includes(e)
            }).map(function(e) {
                return oI(e)
            })
              , c = ak();
            if (c.length > 0) {
                var d = c.map(function(e, n) {
                    return (0,
                    j.jsx)(eX, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 16
                    }, n)
                });
                r = (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)("div", {
                        children: "Enabled plugins:"
                    }), d]
                })
            }
            var f = (0,
            N.je)(i)
              , h = (0,
            k.useRouter)()
              , g = o && (null === (n = h.query) || void 0 === n ? void 0 : null === (t = n.shareParams) || void 0 === t ? void 0 : t[1]) === "moderate";
            return (0,
            j.jsxs)("div", {
                className: (0,
                B.Z)("flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300", o ? "sticky top-0 z-50" : ""),
                children: [o && (0,
                j.jsxs)(j.Fragment, {
                    children: [null != f ? "Shared By: ".concat(f) : "Shared Conversation", " ", (0,
                    j.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    })]
                }), !o && void 0 !== s && (0,
                j.jsx)(ec.ZP, {
                    icon: s
                }), "Model: ", a.title, u, r ? (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    }), r]
                }) : null, g && (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsx)("span", {
                        className: "px-1",
                        children: "•"
                    }), (0,
                    j.jsx)("strong", {
                        children: "MODERATION VIEW"
                    })]
                })]
            })
        }
          , sp = t(75318);
        function sv() {
            var e = (0,
            y._)(["text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
            return sv = function() {
                return e
            }
            ,
            e
        }
        function sx() {
            var e = (0,
            y._)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
            return sx = function() {
                return e
            }
            ,
            e
        }
        function sb() {
            var e = (0,
            y._)(["md:flex items-start text-center gap-3.5"]);
            return sb = function() {
                return e
            }
            ,
            e
        }
        function sy() {
            var e = (0,
            y._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
            return sy = function() {
                return e
            }
            ,
            e
        }
        function sj() {
            var e = (0,
            y._)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
            return sj = function() {
                return e
            }
            ,
            e
        }
        function sw() {
            var e = (0,
            y._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
            return sw = function() {
                return e
            }
            ,
            e
        }
        function sk() {
            var e = (0,
            y._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
            return sk = function() {
                return e
            }
            ,
            e
        }
        function sC() {
            var e = (0,
            y._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
            return sC = function() {
                return e
            }
            ,
            e
        }
        function s_() {
            var e = (0,
            y._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
            return s_ = function() {
                return e
            }
            ,
            e
        }
        var sM = _.Z.div(sv())
          , sT = _.Z.h1(sx())
          , sI = _.Z.div(sb())
          , sN = _.Z.div(sy())
          , sP = _.Z.h2(sj())
          , sS = _.Z.ul(sw())
          , sZ = _.Z.li(sk());
        _.Z.li(sC());
        var sR = _.Z.button(s_());
        function sD(e) {
            var n = e.text
              , t = e.onChangeCurrentPrompt
              , r = (0,
            C.useCallback)(function() {
                t(n)
            }, [n, t]);
            return (0,
            j.jsxs)(sR, {
                onClick: r,
                children: ['"', n, '" →']
            })
        }
        function sF(e) {
            var n = function(e) {
                var n;
                null == t || null === (n = t.current) || void 0 === n || n.setInputValue(e)
            }
              , t = e.promptTextareaRef
              , r = (0,
            I.nR)();
            return (0,
            j.jsxs)(sM, {
                children: [(0,
                j.jsxs)(sT, {
                    children: ["ChatGPT", r && (0,
                    j.jsx)(iL, {
                        children: "Plus"
                    })]
                }), (0,
                j.jsxs)(sI, {
                    children: [(0,
                    j.jsxs)(sN, {
                        children: [(0,
                        j.jsxs)(sP, {
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: J.kXG,
                                size: "medium"
                            }), "Examples"]
                        }), (0,
                        j.jsxs)(sS, {
                            children: [(0,
                            j.jsx)(sD, {
                                text: "Explain quantum computing in simple terms",
                                onChangeCurrentPrompt: n
                            }), (0,
                            j.jsx)(sD, {
                                text: "Got any creative ideas for a 10 year old’s birthday?",
                                onChangeCurrentPrompt: n
                            }), (0,
                            j.jsx)(sD, {
                                text: "How do I make an HTTP request in Javascript?",
                                onChangeCurrentPrompt: n
                            })]
                        })]
                    }), (0,
                    j.jsxs)(sN, {
                        children: [(0,
                        j.jsxs)(sP, {
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: sp.Z,
                                size: "medium"
                            }), "Capabilities"]
                        }), (0,
                        j.jsxs)(sS, {
                            children: [(0,
                            j.jsx)(sZ, {
                                children: "Remembers what user said earlier in the conversation"
                            }), (0,
                            j.jsx)(sZ, {
                                children: "Allows user to provide follow-up corrections"
                            }), (0,
                            j.jsx)(sZ, {
                                children: "Trained to decline inappropriate requests"
                            })]
                        })]
                    }), (0,
                    j.jsxs)(sN, {
                        children: [(0,
                        j.jsxs)(sP, {
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: J.BJv,
                                size: "medium"
                            }), "Limitations"]
                        }), (0,
                        j.jsxs)(sS, {
                            children: [(0,
                            j.jsx)(sZ, {
                                children: "May occasionally generate incorrect information"
                            }), (0,
                            j.jsx)(sZ, {
                                children: "May occasionally produce harmful instructions or biased content"
                            }), (0,
                            j.jsx)(sZ, {
                                children: "Limited knowledge of world and events after 2021"
                            })]
                        })]
                    })]
                })]
            })
        }
        function sA() {
            var e = (0,
            y._)(["flex flex-col text-sm dark:bg-gray-800"]);
            return sA = function() {
                return e
            }
            ,
            e
        }
        function sE() {
            var e = (0,
            y._)(["h-32 md:h-48 flex-shrink-0"]);
            return sE = function() {
                return e
            }
            ,
            e
        }
        function sL() {
            var e = (0,
            y._)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
            return sL = function() {
                return e
            }
            ,
            e
        }
        function sB() {
            var e = (0,
            y._)(["px-2 relative w-full flex flex-col h-full py-2 md:py-6"]);
            return sB = function() {
                return e
            }
            ,
            e
        }
        function sO() {
            var e = (0,
            y._)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
            return sO = function() {
                return e
            }
            ,
            e
        }
        function sq(e) {
            var n = e.clientThreadId
              , t = (0,
            N.qA)(n)
              , r = (0,
            N.je)(n)
              , a = (0,
            N.qN)(function(e) {
                return N.iN.getThreadCreateTime(n, e)
            });
            return (0,
            j.jsxs)("div", {
                className: "pt-2 sm:pt-4",
                children: [(0,
                j.jsx)("h1", {
                    className: "text-2xl font-normal text-gray-700 dark:text-gray-100",
                    children: t
                }), (null != r || null != a) && (0,
                j.jsxs)("div", {
                    className: "pt-1 text-base text-gray-400",
                    children: [null != r && (0,
                    j.jsx)("span", {
                        children: r
                    }), null != r && null != a && (0,
                    j.jsx)("span", {
                        className: "px-2",
                        children: "•"
                    }), null != a && (0,
                    j.jsx)(Y.Ji, {
                        value: a,
                        month: "long",
                        year: "numeric",
                        day: "numeric"
                    })]
                })]
            })
        }
        function sU(e) {
            var n, t, r, a = e.onChangeItemInView, i = e.onRequestMoreCompletions, o = e.onUpdateNode, s = e.onChangeRating, l = e.onDeleteNode, u = e.onRequestCompletion, c = e.onSandboxLinkClick, d = e.onHandleChangeVariantFeedbackInlineComparisonRating, f = e.clientThreadId, h = e.isNewThread, g = e.activeRequests, m = e.currentThreadModel, p = e.isStaticSharedThread, v = e.inlineEmbeddedDisplay, x = e.initiallyHighlightedMessageId, y = e.promptTextareaRef, w = (0,
            iA.useScrollToBottom)(), k = (0,
            b._)((0,
            iA.useSticky)(), 1)[0], _ = (0,
            I.hz)(), M = (0,
            nf.Fl)().isBetaFeaturesUiEnabled, T = (0,
            N.Kt)(f), P = (0,
            I.Xj)().isLoading, S = (0,
            aQ.iu)(), Z = (0,
            aQ.ZL)(), R = (0,
            aQ.Xy)(m, f), D = _.has("model_switcher") && S.size > 1, F = h && !P && D, A = (0,
            I.nR)(), E = (0,
            b._)((0,
            C.useState)(!1), 2), L = E[0], B = E[1], O = (n = R.id,
            t = oe(),
            (0,
            C.useMemo)(function() {
                return function(e, n) {
                    if (n)
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            if (r.options.length > 0) {
                                var a, i, o = r.options.find(function(e) {
                                    return e.value === n
                                });
                                if (o)
                                    return {
                                        item: o,
                                        categoryId: r.categoryId,
                                        backgroundColor: i7[r.categoryId].backgroundColor,
                                        icon: null !== (i = null !== (a = o.icon) && void 0 !== a ? a : r.icon) && void 0 !== i ? i : i7[r.categoryId].icon
                                    }
                            }
                        }
                }(t, n)
            }, [t, n])), q = (0,
            N.U0)(f);
            (0,
            C.useEffect)(function() {
                if (T) {
                    var e = setTimeout(function() {
                        B(!0)
                    }, 1e3);
                    return function() {
                        clearTimeout(e)
                    }
                }
                B(!1)
            }, [T]);
            var U = _.has(en.FZ)
              , z = !M && R.tags.includes(aQ.S.GPT_4) ? "black" : null !== (r = null == O ? void 0 : O.backgroundColor) && void 0 !== r ? r : void 0
              , H = (0,
            nz._)(Array(q).keys()).map(function(e) {
                return (0,
                j.jsx)(a4, {
                    isFinalTurn: e === q - 1,
                    turnIndex: e,
                    clientThreadId: f,
                    onChangeItemInView: a,
                    onChangeRating: s,
                    onRequestMoreCompletions: i,
                    onDeleteNode: l,
                    onRequestCompletion: u,
                    onUpdateNode: o,
                    onSandboxLinkClick: c,
                    onHandleChangeVariantFeedbackInlineComparisonRating: d,
                    activeRequests: g,
                    currentModelId: R.id,
                    isStaticSharedThread: p,
                    showInlineEmbeddedDisplay: v,
                    initiallyHighlightedMessageId: x,
                    avatarColor: z
                }, e)
            });
            return (0,
            j.jsxs)(j.Fragment, {
                children: [F && (0,
                j.jsxs)(sG, {
                    children: [(0,
                    j.jsx)(sh, {
                        currentModelId: R.id
                    }), (0,
                    j.jsxs)(sW, {
                        children: ["ChatGPT", A && (0,
                        j.jsx)(iL, {
                            children: "Plus"
                        })]
                    })]
                }), (0,
                j.jsxs)(sz, {
                    children: [h && !P && !Z && !D && (0,
                    j.jsx)(sF, {
                        promptTextareaRef: y
                    }), L && (0,
                    j.jsx)(ed.Z, {
                        className: "mt-4 self-center"
                    }), !h && (p || !P && D) && !v && (0,
                    j.jsx)(sm, {
                        icon: M ? null == O ? void 0 : O.icon : void 0,
                        currentModelConfig: R,
                        clientThreadId: f,
                        isStaticSharedThread: p
                    }), U ? H.length > 0 && (0,
                    j.jsx)("div", {
                        className: "flex flex-col items-center sm:px-4",
                        children: (0,
                        j.jsxs)("div", {
                            className: "w-full max-w-[44rem] pt-4",
                            children: [p && !v && (0,
                            j.jsx)(sq, {
                                clientThreadId: f
                            }), H]
                        })
                    }) : (0,
                    j.jsxs)(j.Fragment, {
                        children: [p && !v && (0,
                        j.jsx)("div", {
                            className: "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0,
                            j.jsx)(sq, {
                                clientThreadId: f
                            })
                        }), H]
                    }), !F && !v && (0,
                    j.jsx)(sH, {})]
                }), !k && !v && (0,
                j.jsx)(sV, {
                    onClick: w,
                    children: (0,
                    j.jsx)(ec.ZP, {
                        icon: J.tv1,
                        className: "m-1"
                    })
                })]
            })
        }
        var sz = _.Z.div(sA())
          , sH = _.Z.div(sE())
          , sV = _.Z.button(sL())
          , sG = _.Z.div(sB())
          , sW = _.Z.h1(sO());
        function sQ() {
            var e = (0,
            y._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return sQ = function() {
                return e
            }
            ,
            e
        }
        function s$() {
            var e = (0,
            y._)(["grow flex-1 overflow-hidden"]);
            return s$ = function() {
                return e
            }
            ,
            e
        }
        function sJ() {
            var e = (0,
            y._)(["w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-[rgba(0, 0, 0, 0.1)]"]);
            return sJ = function() {
                return e
            }
            ,
            e
        }
        function sY() {
            var e = (0,
            y._)(["mt-4 mx-4 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)] rounded-t max-h-80 overflow-y-scroll"]);
            return sY = function() {
                return e
            }
            ,
            e
        }
        function sX() {
            var e = (0,
            y._)(["flex p-4 bg-white dark:bg-gray-800/90 border-t rounded-b-lg w-full h-full\n", "\n"]);
            return sX = function() {
                return e
            }
            ,
            e
        }
        function sK() {
            var e = (0,
            y._)(["flex w-full items-center justify-left gap-2"]);
            return sK = function() {
                return e
            }
            ,
            e
        }
        function s0() {
            var e = (0,
            y._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
            return s0 = function() {
                return e
            }
            ,
            e
        }
        function s1() {
            var e = (0,
            y._)(["flex-none h-full mt-auto mb-auto"]);
            return s1 = function() {
                return e
            }
            ,
            e
        }
        function s2(e) {
            var n = e.serverThreadId
              , t = (0,
            b._)((0,
            C.useState)(function() {
                var e;
                return e = N.tQ.getThreadConversationTurns(n)[0].messages[0].message.id,
                (0,
                iR.Z)(function(n, t) {
                    return {
                        title: null,
                        highlightedMessageId: e,
                        initiallyHighlightedMessageId: void 0,
                        shareLinkId: void 0,
                        shareLinkUrl: void 0,
                        isPublic: !1,
                        isDeleted: !1,
                        isAnonymous: !0,
                        linkAlreadyExisted: !1
                    }
                })
            }), 1)[0]
              , r = (0,
            C.useRef)(!1);
            return (0,
            C.useEffect)(function() {
                r.current || (r.current = !0,
                ee.ZP.createShareLink({
                    message_id: t.getState().highlightedMessageId,
                    conversation_id: n,
                    is_anonymous: !0
                }).then(function(e) {
                    t.setState({
                        shareLinkId: e.share_id,
                        shareLinkUrl: e.share_url,
                        isPublic: e.is_public,
                        isDeleted: !e.is_visible,
                        title: e.title,
                        highlightedMessageId: e.highlighted_message_id,
                        initiallyHighlightedMessageId: e.highlighted_message_id,
                        linkAlreadyExisted: e.already_exists,
                        isAnonymous: e.is_anonymous
                    })
                }).catch(function(e) {
                    em.m.danger("Failed to copy link to clipboard - could not create link"),
                    E.closeSharingModal()
                }))
            }, []),
            (0,
            j.jsx)(iD.Provider, {
                value: t,
                children: (0,
                j.jsx)(s3, (0,
                v._)({}, e))
            })
        }
        function s3(e) {
            var n, t, r, a, i, o, s = e.serverThreadId, l = e.activeRequests, u = e.currentThreadModel, c = (0,
            C.useRef)(null), d = (0,
            b._)((0,
            C.useState)(!1), 2), f = d[0], h = d[1], g = (0,
            b._)((0,
            C.useState)(!1), 2), m = g[0], p = g[1], v = (0,
            b._)((0,
            C.useState)(!1), 2), x = v[0], y = v[1], w = (0,
            C.useContext)(iD), k = iF(function(e) {
                return e.title
            }), _ = iF(function(e) {
                return e.shareLinkId
            }), M = iF(function(e) {
                return e.shareLinkUrl
            }), T = iF(function(e) {
                return e.isAnonymous
            }), I = iF(function(e) {
                return e.initiallyHighlightedMessageId
            }), P = iF(function(e) {
                return e.isPublic
            }), S = iF(function(e) {
                return e.linkAlreadyExisted
            }) && P, Z = (0,
            eh.kP)().session, R = (n = (0,
            nh._)(function(e, n) {
                var t, r, a, i, o;
                return (0,
                ng.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        p(!0),
                        r = (t = w.getState()).highlightedMessageId,
                        a = t.title,
                        i = t.isDeleted,
                        o = t.isAnonymous;
                        try {
                            navigator.clipboard.writeText(n)
                        } catch (e) {
                            return console.warn("Could not copy link to clipboard: " + e),
                            em.m.warning("Failed to copy link to clipboard"),
                            p(!1),
                            [2]
                        }
                        return w.setState({
                            isPublic: !0
                        }),
                        [4, ee.ZP.updateShareLink({
                            share_id: e,
                            highlighted_message_id: r,
                            title: null != a ? a : void 0,
                            is_public: !i,
                            is_visible: !i,
                            is_anonymous: o
                        })];
                    case 1:
                        return s.sent(),
                        p(!1),
                        y(!0),
                        setTimeout(function() {
                            E.closeSharingModal(),
                            em.m.success("Copied shared conversation URL to clipboard!")
                        }, 500),
                        [2]
                    }
                })
            }),
            function(e, t) {
                return n.apply(this, arguments)
            }
            ), D = (0,
            j.jsxs)(na.mH, {
                onClick: function() {
                    return R(_, M)
                },
                color: "primary",
                disabled: m || x || null == _ || null == M,
                children: [x ? (0,
                j.jsx)(ec.ZP, {
                    icon: J.LSm
                }) : m ? (0,
                j.jsx)(ed.Z, {}) : (0,
                j.jsx)(ec.ZP, {
                    icon: J.UH
                }), x ? "Copied!" : m ? "Copying..." : S ? "Save and Copy (INTERNAL)" : "Copy (INTERNAL)"]
            }), F = (0,
            C.useCallback)(function(e) {
                var n;
                null == e || e.preventDefault(),
                w.setState({
                    title: null === (n = c.current) || void 0 === n ? void 0 : n.value
                }),
                h(!1)
            }, [w]), A = (0,
            C.useCallback)(function(e) {
                "Enter" === e.key && F()
            }, [F]), L = (t = (0,
            nh._)(function() {
                return (0,
                ng.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, ee.ZP.deleteShareLink({
                            share_id: w.getState().shareLinkId
                        }).catch(function(e) {
                            em.m.danger("Failed to delete shared link")
                        }).then(function() {
                            E.closeSharingModal()
                        })];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                })
            }),
            function() {
                return t.apply(this, arguments)
            }
            ), O = (r = (0,
            nh._)(function() {
                return (0,
                ng.Jh)(this, function(e) {
                    return w.setState({
                        isAnonymous: !0
                    }),
                    N.qN.setState(function(e) {
                        e.threads[s].initialThreadData.authorName = void 0
                    }),
                    [2]
                })
            }),
            function() {
                return r.apply(this, arguments)
            }
            ), q = (a = (0,
            nh._)(function() {
                return (0,
                ng.Jh)(this, function(e) {
                    return w.setState({
                        isAnonymous: !1
                    }),
                    N.qN.setState(function(e) {
                        var n;
                        e.threads[s].initialThreadData.authorName = null == Z ? void 0 : null === (n = Z.user) || void 0 === n ? void 0 : n.name
                    }),
                    [2]
                })
            }),
            function() {
                return a.apply(this, arguments)
            }
            ), U = (0,
            j.jsxs)(s7, {
                $active: f,
                children: [(0,
                j.jsxs)("div", {
                    className: "flex-1 pr-1",
                    children: [void 0 !== k ? f ? (0,
                    j.jsx)(le, {
                        ref: c,
                        type: "text",
                        defaultValue: null != k ? k : "",
                        autoFocus: !0,
                        onKeyDown: A,
                        className: "mr-0",
                        onBlur: F
                    }) : (0,
                    j.jsxs)(s9, {
                        onDoubleClick: function() {
                            return h(!0)
                        },
                        children: [k, f ? null : (0,
                        j.jsx)("button", {
                            onClick: function() {
                                return h(!0)
                            },
                            children: (0,
                            j.jsx)(ec.ZP, {
                                icon: J.Nte,
                                size: "small"
                            })
                        })]
                    }) : (0,
                    j.jsx)("div", {
                        className: "h-6"
                    }), (0,
                    j.jsxs)("div", {
                        className: "mt-1 text-gray-500",
                        children: [!T && (0,
                        j.jsxs)("span", {
                            children: [null == Z ? void 0 : null === (o = Z.user) || void 0 === o ? void 0 : o.name, " \xb7 "]
                        }), (0,
                        j.jsx)(Y.Ji, {
                            value: new Date,
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })]
                    })]
                }), (0,
                j.jsx)(ln, {
                    children: (0,
                    j.jsxs)(iZ.fC, {
                        children: [(0,
                        j.jsx)(iZ.xz, {
                            asChild: !0,
                            children: (0,
                            j.jsx)(eu.z, {
                                color: "neutral",
                                className: "mb-auto mt-auto",
                                children: (0,
                                j.jsx)(eY.JEI, {})
                            })
                        }), (0,
                        j.jsx)(iZ.h_, {
                            children: (0,
                            j.jsxs)(iZ.VY, {
                                className: "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                                side: "top",
                                align: "end",
                                children: [T && (0,
                                j.jsx)(eu.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: q,
                                    children: (0,
                                    j.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        j.jsx)(ec.ZP, {
                                            icon: J.fzv,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        j.jsx)("div", {
                                            children: "Share your name"
                                        })]
                                    })
                                }), !T && (0,
                                j.jsx)(eu.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: O,
                                    children: (0,
                                    j.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        j.jsx)(ec.ZP, {
                                            icon: J.fzv,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        j.jsx)("div", {
                                            children: "Share anonymously"
                                        })]
                                    })
                                }), S && (0,
                                j.jsx)(eu.z, {
                                    color: "neutral",
                                    className: "mb-2 flex w-full border-0",
                                    onClick: L,
                                    children: (0,
                                    j.jsxs)("div", {
                                        className: "flex w-full items-start",
                                        children: [(0,
                                        j.jsx)(ec.ZP, {
                                            icon: J.Ybf,
                                            className: "float-left mb-auto mr-4 mt-auto"
                                        }), " ", (0,
                                        j.jsx)("div", {
                                            children: "Delete Link"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })]
            }), z = (i = (0,
            nh._)(function(e, n) {
                return (0,
                ng.Jh)(this, function(e) {
                    return [2]
                })
            }),
            function(e, n) {
                return i.apply(this, arguments)
            }
            );
            return (0,
            j.jsxs)(na.ZP, {
                isOpen: !0,
                onModalClose: function() {
                    E.closeSharingModal()
                },
                size: "custom",
                type: "success",
                className: "max-w-2xl",
                title: "Share Chat - INTERNAL ONLY",
                closeButton: (0,
                j.jsx)(na.ol, {
                    onClose: function() {
                        E.closeSharingModal()
                    }
                }),
                primaryButton: null,
                children: [(0,
                j.jsxs)("div", {
                    className: (0,
                    B.Z)("w-full"),
                    children: [(0,
                    j.jsx)("p", {
                        className: (0,
                        B.Z)("mb-7 mt-3 text-[#8E8EA0]"),
                        children: "Create a sharable link to a snapshot of your conversation. Messages you send after creating your link won't be shared."
                    }), (0,
                    j.jsx)("p", {
                        className: (0,
                        B.Z)("mb-7 mt-3 text-[#8E8EA0]"),
                        children: (0,
                        j.jsx)("b", {
                            children: "INTERNAL ONLY. DO NOT SHARE LINKS EXTERNALLY."
                        })
                    })]
                }), (0,
                j.jsx)(s6, {
                    children: (0,
                    j.jsx)("div", {
                        className: "flex h-full max-w-full flex-1 flex-col",
                        children: (0,
                        j.jsx)(s5, {
                            children: (0,
                            j.jsxs)(s4, {
                                children: [(0,
                                j.jsx)(s8, {
                                    className: null == I ? "invisible" : "",
                                    children: (0,
                                    j.jsx)(sU, {
                                        onChangeItemInView: $(),
                                        onRequestMoreCompletions: $(),
                                        onUpdateNode: $(),
                                        onChangeRating: $(),
                                        onDeleteNode: $(),
                                        onRequestCompletion: $(),
                                        onSandboxLinkClick: z,
                                        onHandleChangeVariantFeedbackInlineComparisonRating: $(),
                                        clientThreadId: s,
                                        activeRequests: l,
                                        currentThreadModel: u,
                                        inlineEmbeddedDisplay: !0,
                                        isStaticSharedThread: !0,
                                        isNewThread: !1,
                                        initiallyHighlightedMessageId: I
                                    })
                                }), U]
                            })
                        })
                    })
                }), (0,
                j.jsxs)("div", {
                    className: (0,
                    B.Z)("grid grid-cols-2"),
                    children: [(0,
                    j.jsx)("div", {
                        children: (0,
                        j.jsxs)(na.mH, {
                            onClick: function() {
                                E.closeSharingModal()
                            },
                            className: (0,
                            B.Z)("ml-0 border-0 pl-0 hover:bg-transparent"),
                            children: [(0,
                            j.jsx)(ec.ZP, {
                                icon: J.H33
                            }), "INTERNAL ONLY - DO NOT SHARE LINKS EXTERNALLY"]
                        })
                    }), (0,
                    j.jsx)("div", {
                        className: (0,
                        B.Z)("text-right"),
                        children: D
                    })]
                })]
            })
        }
        var s5 = _.Z.main(sQ())
          , s4 = _.Z.div(s$())
          , s6 = _.Z.div(sJ())
          , s8 = _.Z.div(sY())
          , s7 = _.Z.div(sX(), function(e) {
            return e.$active,
            ""
        })
          , s9 = _.Z.div(sK())
          , le = _.Z.input(s0())
          , ln = _.Z.div(s1());
        function lt() {
            var e = (0,
            y._)(["p-2 rounded-md ", ""]);
            return lt = function() {
                return e
            }
            ,
            e
        }
        var lr = (0,
        Y.vU)({
            newChat: {
                defaultMessage: "New chat",
                id: "Stage.newChat",
                description: "New chat button tooltip"
            },
            closeSidebar: {
                defaultMessage: "Close sidebar",
                id: "Stage.closeSidebar",
                description: "Close sidebar button tooltip"
            },
            openSidebar: {
                defaultMessage: "Open sidebar",
                id: "Stage.openSidebar",
                description: "Open sidebar button tooltip"
            },
            closeDebug: {
                defaultMessage: "Close debug sidebar",
                id: "Stage.closeDebug",
                description: "Close debug sidebar button tooltip"
            },
            openDebug: {
                defaultMessage: "Open debug sidebar",
                id: "Stage.openDebug",
                description: "Open debug sidebar button tooltip"
            }
        });
        function la(e) {
            var n = e.isStaticSharedThread
              , t = e.handleResetThread
              , r = e.toggleDebugSidebar
              , a = e.activeSidebar
              , i = (0,
            X.Z)()
              , o = A().isNavigationCollapsed
              , s = (0,
            I.hz)()
              , l = s.has(en.M6)
              , u = "debug" === a
              , c = s.has("debug") && (l || !u);
            return n ? null : (0,
            j.jsxs)(j.Fragment, {
                children: [l && (0,
                j.jsx)("div", {
                    className: "absolute left-4 top-4 z-10 hidden md:inline-block",
                    children: (0,
                    j.jsx)(nT.u, {
                        side: "right",
                        label: o ? i.formatMessage(lr.openSidebar) : i.formatMessage(lr.closeSidebar),
                        children: (0,
                        j.jsx)(li, {
                            $isNewLayout: l,
                            onClick: E.toggleNavigation,
                            "aria-label": o ? i.formatMessage(lr.openSidebar) : i.formatMessage(lr.closeSidebar),
                            children: (0,
                            j.jsx)(ec.ZP, {
                                icon: J.iYc
                            })
                        })
                    })
                }), (0,
                j.jsxs)("div", {
                    className: (0,
                    B.Z)("absolute z-10 hidden flex-col gap-2 md:flex", l ? "right-4 top-4" : "right-3 top-3"),
                    children: [l && (0,
                    j.jsxs)(j.Fragment, {
                        children: [(0,
                        j.jsx)(nT.u, {
                            side: "left",
                            label: i.formatMessage(lr.newChat),
                            children: (0,
                            j.jsx)(li, {
                                $isNewLayout: l,
                                onClick: function() {
                                    t()
                                },
                                "aria-label": i.formatMessage(lr.newChat),
                                children: (0,
                                j.jsx)(ec.ZP, {
                                    icon: J.vPQ
                                })
                            })
                        }), c && (0,
                        j.jsx)("div", {
                            className: "my-3 border-t-[1px] border-black/20 dark:border-white/20"
                        })]
                    }), c && (0,
                    j.jsx)(nT.u, {
                        side: "left",
                        label: u ? i.formatMessage(lr.closeDebug) : i.formatMessage(lr.openDebug),
                        children: (0,
                        j.jsx)(li, {
                            className: (0,
                            B.Z)(c && "opacity-40 hover:opacity-100"),
                            onClick: r,
                            $isNewLayout: l,
                            "aria-label": u ? i.formatMessage(lr.closeDebug) : i.formatMessage(lr.openDebug),
                            children: (0,
                            j.jsx)(ec.ZP, {
                                icon: J.cDN
                            })
                        })
                    })]
                })]
            })
        }
        var li = _.Z.button(lt(), function(e) {
            return e.$isNewLayout ? "hover:bg-black/10 hover:dark:bg-white/10" : "bg-black/10 dark:bg-white/10 "
        })
          , lo = ib()(function() {
            return Promise.resolve().then(t.bind(t, 1215))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [1215]
                }
            },
            ssr: !1
        });
        function ls(e) {
            var n = e.children;
            return (0,
            j.jsx)(lo, {
                className: "h-full dark:bg-gray-800",
                followButtonClassName: "scroll-convo",
                initialScrollBehavior: "auto",
                children: n
            })
        }
        function ll() {
            var e, n, t, r, a, i, o = (n = (e = np()).isLoggedInWithMfa,
            t = e.isUsernamePassword,
            r = e.setupMfa,
            i = (a = n8()).filter(function(e) {
                return !("none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type)
            }),
            (n || !t) && (i = []),
            {
                disablePluginsThatWeCantUse: function() {
                    n7(a.filter(function(e) {
                        return "none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type
                    }).map(function(e) {
                        return e.id
                    }))
                },
                pluginsWeCantUse: i,
                setupMfa: r
            }), s = o.disablePluginsThatWeCantUse, l = o.pluginsWeCantUse, u = o.setupMfa, c = (0,
            C.useCallback)(function() {
                s()
            }, [s]);
            return 0 === l.length ? null : (0,
            j.jsx)(na.ZP, {
                isOpen: !0,
                onModalClose: c,
                title: "Some of your plugins require two-factor authentication.",
                primaryButton: (0,
                j.jsx)(na.mH, {
                    onClick: u,
                    title: "Setup two-factor authentication",
                    color: "primary"
                }),
                secondaryButton: (0,
                j.jsx)(na.mH, {
                    onClick: s,
                    title: "Turn off the plugins"
                }),
                type: "danger",
                children: (0,
                j.jsx)("div", {
                    className: "flex flex-col gap-2 py-4",
                    children: l.map(function(e) {
                        return (0,
                        j.jsx)("div", {
                            className: "w-full",
                            children: (0,
                            j.jsx)(nE, {
                                plugin: e
                            })
                        }, e.id)
                    })
                })
            })
        }
        var lu = t(16578)
          , lc = t.n(lu)
          , ld = t(74853)
          , lf = t(99652)
          , lh = t(1220);
        function lg(e) {
            var n = e.isOpen
              , t = e.onClose
              , r = (0,
            M.WS)()
              , a = (0,
            b._)((0,
            C.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            k.useRouter)()
              , l = (0,
            C.useCallback)(function() {
                r(T.s6.closeAccountPaymentModal),
                t()
            }, [t, r])
              , u = (0,
            C.useCallback)((0,
            nh._)(function() {
                var e;
                return (0,
                ng.Jh)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        o(!0),
                        r(T.s6.clickAccountCustomerPortal),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, 4, 5]),
                        [4, ee.ZP.fetchCustomerPortalUrl()];
                    case 2:
                        return e = n.sent(),
                        s.push(e.url),
                        [3, 5];
                    case 3:
                        return n.sent(),
                        em.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                            hasCloseButton: !0
                        }),
                        [3, 5];
                    case 4:
                        return o(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [s, r, o])
              , c = (0,
            C.useCallback)(function() {
                r(T.s6.clickAccountPaymentGetHelp)
            }, [r])
              , d = (0,
            I.hz)()
              , f = (0,
            I.e2)()
              , h = (0,
            I.YD)();
            return (0,
            j.jsxs)(ld.x, {
                isOpen: n,
                onClose: t,
                children: [(0,
                j.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                    children: [(0,
                    j.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: "Your plan"
                    }), (0,
                    j.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: l,
                        children: (0,
                        j.jsx)(J.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0,
                j.jsx)("div", {
                    className: "grid",
                    children: (0,
                    j.jsx)("div", {
                        className: "relative order-1 col-span-1 sm:order-2",
                        children: (0,
                        j.jsx)(lf.Oi, {
                            rowElements: [(0,
                            j.jsx)(lf.Cu, {
                                text: lh.S.plus.name,
                                children: (0,
                                j.jsx)("span", {
                                    className: "font-semibold text-gray-500",
                                    children: lh.S.plus.costInDollars
                                })
                            }, "row-plus-plan-name"), (0,
                            j.jsx)(lf.hi, {
                                disabled: !0,
                                variant: "primary-disabled",
                                text: lh.S.plus.callToAction.active
                            }, "row-plus-plan-button"), (0,
                            j.jsx)(lf.G, {
                                text: lh.S.plus.demandAccess
                            }, "row-plus-plan-demand"), (0,
                            j.jsx)(lf.G, {
                                text: lh.S.plus.responseSpeed
                            }, "row-plus-plan-speed"), (0,
                            j.jsx)(lf.G, {
                                className: "sm:pb-1",
                                text: lh.S.plus.modelFeatures
                            }, "row-plus-plan-feathers"), (null == f ? void 0 : f.purchase_origin_platform) === tr._.MOBILE_IOS && (0,
                            j.jsx)(lf.Hb, {
                                className: "sm:pb-1",
                                text: lh.S.manageSubscriptionIos.callToAction
                            }, "row-plus-plan-manage-ios"), (!f || f.purchase_origin_platform === tr._.WEBAPP) && h && (0,
                            j.jsx)(lf.nR, {
                                className: "sm:pb-1",
                                isLoading: i,
                                text: lh.S.manageSubscriptionWeb.callToAction,
                                onClick: u
                            }, "row-plus-plan-manage"), (0,
                            j.jsx)(lc(), {
                                href: tr.L,
                                target: "_blank",
                                passHref: !0,
                                children: (0,
                                j.jsx)(lf.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: lh.S.getHelp.callToAction,
                                    onClick: c
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-help-link"), d.has("business_seats") ? (0,
                            j.jsx)(lc(), {
                                href: "/payments/business",
                                target: "_blank",
                                passHref: !0,
                                children: (0,
                                j.jsx)(lf.nR, {
                                    className: "sm:pb-1",
                                    isLoading: !1,
                                    text: lh.S.business.callToAction,
                                    onClick: c
                                }, "row-plus-plan-help")
                            }, "row-plus-plan-create-business-team") : null]
                        })
                    })
                })]
            })
        }
        var lm = t(48432)
          , lp = {
            showAccountPaymentModal: !1
        }
          , lv = (0,
        P.ZP)()(function(e) {
            return (0,
            eU._)((0,
            v._)({}, lp), {
                setShowAccountPaymentModal: function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $();
                    e({
                        showAccountPaymentModal: n
                    }),
                    t && t()
                }
            })
        })
          , lx = t(89678)
          , lb = t.n(lx)
          , ly = t(55989)
          , lj = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i];
        function lw() {
            var e = (0,
            y._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return lw = function() {
                return e
            }
            ,
            e
        }
        function lk() {
            var e = (0,
            y._)(["grow flex-1 overflow-hidden"]);
            return lk = function() {
                return e
            }
            ,
            e
        }
        function lC() {
            var e = (0,
            y._)(["absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2"]);
            return lC = function() {
                return e
            }
            ,
            e
        }
        var l_ = (0,
        Y.vU)({
            contentPolicyViolation: {
                id: "thread.modal.restrictedTerms.title",
                defaultMessage: "This prompt may violate our content policy.",
                description: "Title for the restricted terms modal"
            },
            acknowledge: {
                id: "thread.modal.common.acknowledge",
                defaultMessage: "Acknowledge",
                description: "Acknowledge button text"
            },
            doNotShareSensitive: {
                id: "thread.modal.onboarding.title",
                defaultMessage: "Do not share sensitive materials with this application",
                description: "Title for the onboarding warning modal"
            },
            freeResearchPreview: {
                id: "thread.chatgptFreeResearchPreview",
                defaultMessage: "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 12 Version</link>",
                description: "Free Research Preview disclaimer"
            },
            mayProduceInaccurateInformation: {
                id: "thread.chatgptMayProduceInaccurateInformation",
                defaultMessage: "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT May 12 Version</link>",
                description: "ChatGPT disclaimer for producing inaccurate information"
            },
            somethingWentWrong: {
                id: "thread.modal.unrecoverableError.title",
                defaultMessage: "Something went wrong",
                description: "Title for the UnrecoverableErrorModal"
            },
            tryAgainLater: {
                id: "thread.modal.unrecoverableError.description",
                defaultMessage: "We're sorry, but something went wrong. Please try again later.",
                description: "Description for the UnrecoverableErrorModal"
            },
            resetThread: {
                id: "thread.modal.unrecoverableError.resetThread",
                defaultMessage: "Reset thread",
                description: "Reset thread button text"
            },
            reportModalThankYouTitle: {
                id: "thread.modal.reportModalThankYou.title",
                defaultMessage: "Thank you for your report!",
                description: "Title for the post-report thank-you modal"
            },
            reportModalThankYouDescription: {
                id: "thread.modal.reportModalThankYou.description",
                defaultMessage: "Thank you for your report. We take all reports seriously and will review this thread as soon as possible.",
                description: "Description for the post-report thank-you modal"
            },
            reportModalThankYouDismiss: {
                id: "thread.modal.reportModalThankYou.dismissButton",
                defaultMessage: "Close",
                description: "Close button for the post-report thank-you modal"
            },
            sharedConversationContinueConversation: {
                id: "thread.sharedConversation.continue",
                defaultMessage: "Continue this conversation",
                description: "Button for shared conversations to allow user to continue conversation in their own history"
            },
            sharedConversationReportConversation: {
                id: "thread.sharedConversation.report",
                defaultMessage: "Report conversation",
                description: "Button for shared conversations to report conversation for legal, safety, or other reasons"
            },
            sharedConversationModerateConversation: {
                id: "thread.sharedConversation.moderate",
                defaultMessage: "Moderate conversation",
                description: "Button for shared conversations to moderate a conversation for legal, safety, or other reasons"
            }
        })
          , lM = function(e) {
            var n, t, r, a, i, o, s, l, u, c, d, f, h, g, m, p, x, y, w, _, P, S, R, F, E, O, q, U, z, H, V, G, W = e.initialThreadData, Q = e.clientThreadId, Y = e.showAccountPortalModal, er = e.setShowAccountPortalModal, ea = e.activeSidebar, ei = e.setActiveSidebar, eo = e.activeRequests, es = e.setActiveRequests, el = e.handleResetThread, ed = e.isStaticSharedThread, ef = e.initiallyHighlightedMessageId, eh = e.continueConversationUrl, em = (0,
            X.Z)(), ep = (0,
            I.hz)(), ev = (0,
            nf.Fl)(), ex = ev.isPluginsAvailable, ey = ev.isCodeInterpreterAvailable, ej = (0,
            et.w$)(), ew = (0,
            M.WS)(), ek = ep.has(en.Pt) && ej, eC = (0,
            C.useContext)(L.QL).historyDisabled, e_ = (0,
            k.useRouter)(), eM = ed && (null === (F = e_.query) || void 0 === F ? void 0 : null === (E = F.shareParams) || void 0 === E ? void 0 : E[1]) === "moderate", eT = (0,
            N.U0)(Q), eI = (0,
            N.Kt)(Q), eN = (0,
            N.oq)(Q), eP = (0,
            b._)((0,
            C.useState)(!1), 2), eS = eP[0], eZ = eP[1], eR = (0,
            b._)((0,
            C.useState)(!1), 2), eD = eR[0], eF = eR[1], eA = (0,
            b._)((0,
            C.useState)(), 2), eE = eA[0], eL = eA[1], eB = (0,
            b._)((0,
            C.useState)(!1), 2), eO = eB[0], eq = eB[1], ez = (0,
            b._)((0,
            C.useState)(), 2), eH = ez[0], eV = ez[1], eG = (0,
            b._)((0,
            C.useState)(), 2), eQ = eG[0], e$ = eG[1], eJ = (0,
            b._)((0,
            C.useState)(), 2), eY = eJ[0], eX = eJ[1], eK = (0,
            C.useRef)(null), e0 = (0,
            I.nR)(), e1 = (0,
            eW.g)(function(e) {
                return e.flags.isUserInCanPayGroup
            }), e2 = ep.has(en.FZ), e3 = (0,
            b._)((0,
            C.useState)(!1), 2), e5 = e3[0], e4 = e3[1], e6 = (t = (n = {
                exempt: !1,
                onRestrictedTermFound: (0,
                C.useCallback)(function(e) {
                    e4(!0),
                    ew(T.s6.promptUsedRestrictedWords, {
                        threadId: N.tQ.getServerThreadId(Q),
                        content: e
                    })
                }, [ew, Q])
            }).exempt,
            r = n.onRestrictedTermFound,
            i = (a = (0,
            b._)((0,
            C.useState)(!1), 2))[0],
            o = a[1],
            {
                hasRestrictedTerms: i,
                checkRestrictedTerms: (0,
                C.useCallback)(function(e) {
                    var n;
                    return (lj.some(function(t) {
                        var r = t.exec(e);
                        return r && (n = r[0]),
                        r
                    }),
                    !t && n) ? (o(!0),
                    null == r || r(n),
                    !0) : (o(!1),
                    !1)
                }, [t, r])
            }), e8 = e6.hasRestrictedTerms, e7 = e6.checkRestrictedTerms, e9 = (0,
            b._)((0,
            C.useState)(!0), 2), ne = e9[0], nn = e9[1], nt = (0,
            b._)((0,
            C.useState)(!1), 2), nr = nt[0], ni = nt[1], no = (0,
            aQ.iu)(), ns = n8(), nl = (0,
            aQ.Gg)(no, !0), nu = null !== (V = (0,
            aQ.Bv)(W.lastModelUsed, Q)) && void 0 !== V ? V : nl, nc = (0,
            aQ.B9)(), nd = void 0 !== nu ? nc.get(nu) : void 0, nm = eb(), np = (0,
            C.useCallback)(function() {
                nm(),
                ew(T.s6.newThread)
            }, [ew, nm]), nv = N.tQ.getTitle(Q), nx = (0,
            b._)((0,
            C.useState)(), 2), nb = nx[0], ny = nx[1], nj = (0,
            C.useCallback)(function(e, n) {
                var t = null != n ? n : "";
                eC || "" === t || ee.ZP.generateTitle(t, e, nu).then(function(e) {
                    var r = e.title;
                    N.tQ.setTitle(t, r, N._L.Generated),
                    nm(),
                    ew(T.s6.renameThread, {
                        threadId: n,
                        content: r,
                        model: nu
                    })
                }).catch(function(e) {
                    console.error(e)
                })
            }, [eC, ew, nu, nm]), nk = (0,
            C.useCallback)(function(e, n, t) {
                var r = ep.has(en.uj);
                eC || !r || void 0 === t || nw.Cv.getIsIncompleteFromMessage(t) || nw.Cv.getWasInterruptedFromMessage(t) || ee.ZP.generateSuggestions(e, n, nu).then(function(e) {
                    ny({
                        messageId: n,
                        suggestions: e.suggestions
                    })
                }).catch(function(e) {
                    console.error(e)
                })
            }, [ep, eC, nu]), nC = (0,
            N.Uy)(Q), n_ = (s = ex && (null == nd ? void 0 : null === (O = nd.enabledTools) || void 0 === O ? void 0 : O.includes("tools3")) ? ns.map(function(e) {
                return e.id
            }) : void 0,
            l = (0,
            I.hz)(),
            u = (0,
            C.useId)(),
            c = (0,
            M.WS)(),
            d = (0,
            aI.Y8)(function(e) {
                return null == e ? void 0 : e.setCapTimeout
            }),
            f = (0,
            aI.Y8)(function(e) {
                return null == e ? void 0 : e.clearCapTimeout
            }),
            h = (0,
            C.useContext)(L.QL).historyDisabled,
            g = (0,
            C.useRef)(0),
            m = (0,
            C.useRef)({}),
            p = (0,
            C.useCallback)(function(e, n, t, r) {
                var a, i, o = r.eventSource, s = function() {
                    setTimeout(function() {
                        D.removeAborterById(t),
                        es(function(e) {
                            var n = new Set(e);
                            return n.delete(t),
                            n
                        }),
                        delete m.current[t],
                        N.tQ.releaseThread(Q)
                    }, 0)
                }, u = N.tQ.getTree(Q), h = t, g = u.getParentId(h), p = n === nG.Os.Continue, x = !0, b = !1, j = u.getMessage(h), w = new Set, k = u.getIsBlockedFromNode(g), C = !1, _ = !1, M = lb()(function() {
                    k || C || N.tQ.updateTree(Q, function(e) {
                        e.updateNodeMessage(h, j)
                    })
                }, 50, {
                    leading: !0,
                    maxWait: 50
                });
                function I() {
                    return (I = (0,
                    nh._)(function(e, n, t) {
                        var r, a, i, o, s, l = arguments;
                        return (0,
                        ng.Jh)(this, function(d) {
                            switch (d.label) {
                            case 0:
                                r = l.length > 3 && void 0 !== l[3] && l[3],
                                d.label = 1;
                            case 1:
                                return d.trys.push([1, 3, , 4]),
                                [4, (0,
                                tz._I)(t, !1, e, u.getMessageId(n))];
                            case 2:
                                return i = (a = d.sent()).isBlocked,
                                o = a.isFlagged,
                                (i || o) && (_ = !0),
                                i ? (C = !0,
                                r || (k = !0),
                                N.tQ.updateTree(Q, function(e) {
                                    e.updateNode(n, {
                                        message: {
                                            content: {
                                                parts: {
                                                    $set: [""]
                                                }
                                            }
                                        },
                                        metadata: {
                                            $set: (0,
                                            eU._)((0,
                                            v._)({}, tz.sK), {
                                                completionSampleFinishTime: Date.now()
                                            })
                                        }
                                    })
                                }),
                                c(r ? T.s6.completionBlockedByModeration : T.s6.promptBlockedByModeration, {
                                    threadId: e,
                                    id: n
                                })) : o ? (N.tQ.updateTree(Q, function(e) {
                                    e.updateNode(n, {
                                        metadata: {
                                            $set: tz.Mf
                                        }
                                    })
                                }),
                                c(r ? T.s6.completionFlaggedByModeration : T.s6.promptFlaggedByModeration, {
                                    threadId: e,
                                    id: n
                                })) : r && k && N.tQ.updateTree(Q, function(e) {
                                    e.updateNodeMessage(n, j)
                                }),
                                [3, 4];
                            case 3:
                                return s = d.sent(),
                                C = !0,
                                N.tQ.updateTree(Q, function(e) {
                                    e.updateNode(n, {
                                        metadata: {
                                            $set: {
                                                err: "An error occured",
                                                errType: "danger",
                                                completionSampleFinishTime: Date.now()
                                            }
                                        }
                                    })
                                }),
                                c(T.s6.moderationError, {
                                    threadId: e,
                                    content: JSON.stringify(s || "")
                                }),
                                tU().publish("UnrecoverableError"),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                return a = (0,
                nh._)(function(r) {
                    var a, P, S, Z, R, F, A, E, L, B, O, q, U, z, H;
                    return (0,
                    ng.Jh)(this, function(V) {
                        switch (V.label) {
                        case 0:
                            if ("error" === r.type)
                                return console.error(a = r.error),
                                P = (null == a ? void 0 : a.message) || "Something went wrong",
                                N.tQ.updateTree(Q, function(e) {
                                    e.updateNode(h, {
                                        message: {
                                            $set: j
                                        },
                                        metadata: {
                                            $set: {
                                                err: P,
                                                errType: "danger",
                                                errCode: (0,
                                                ly.T)(a) && a.code || "",
                                                completionSampleFinishTime: Date.now()
                                            }
                                        }
                                    })
                                }),
                                s(),
                                (0,
                                ly.T)(a) && (null == a ? void 0 : a.code) === aI.uU && (null == a ? void 0 : a.clearsIn) && (d(new Date(Date.now() + 1e3 * a.clearsIn).toISOString()),
                                setTimeout(function() {
                                    f()
                                }, 1e3 * a.clearsIn)),
                                [2];
                            if ("moderation" === r.type && (S = r.isCompletion,
                            Z = r.messageId,
                            R = r.conversationId,
                            F = r.flagged,
                            ((A = r.blocked) || F) && N.tQ.updateTree(Q, function(e) {
                                var n = e.messageIdToNodeId(Z);
                                e.updateNode(n, {
                                    message: {
                                        content: {
                                            parts: {
                                                $set: [""]
                                            }
                                        }
                                    },
                                    metadata: {
                                        $set: (0,
                                        eU._)((0,
                                        v._)({}, A ? tz.sK : tz.Mf), {
                                            completionSampleFinishTime: Date.now()
                                        })
                                    }
                                })
                            }),
                            (F || A) && c(S ? A ? T.s6.completionBlockedByModeration : T.s6.completionFlaggedByModeration : A ? T.s6.promptBlockedByModeration : T.s6.promptFlaggedByModeration, {
                                threadId: R,
                                id: Z
                            })),
                            "message" === r.type) {
                                if (E = r.message,
                                L = r.conversationId,
                                x && u.isFirstCompletion) {
                                    if ((null == E ? void 0 : E.author.role) === nG.uU.System)
                                        return u.appendSystemMessageToRoot(E),
                                        [2];
                                    if ((null == E ? void 0 : E.author.role) === nG.uU.User)
                                        return [2]
                                }
                                x ? (O = (null === (B = N.qN.getState().threads[Q]) || void 0 === B ? void 0 : B.continuingFromSharedConversationId) != null,
                                N.tQ.removeContinuingFromSharedConversationId(Q),
                                x = !1,
                                b = u.isFirstCompletion || O,
                                (null == E ? void 0 : E.id) && w.add(t),
                                void 0 !== L && (i = L,
                                (0,
                                N.Zz)(Q) && N.tQ.setServerIdForNewThread(Q, L)),
                                N.tQ.updateTree(Q, function(e) {
                                    e.updateNodeMessage(h, E)
                                }),
                                b && np(L),
                                p || function(e, n, t) {
                                    I.apply(this, arguments)
                                }(L, g, u.getTextFromLastNTurns(g, 1), !1),
                                c(T.s6.generateCompletion, {
                                    id: t,
                                    threadId: L,
                                    completionType: n,
                                    eventSource: o,
                                    model: e
                                }),
                                D.addAborter(t, m.current[t])) : p || E.id === u.getMessageId(h) || (w.add(E.id),
                                M.flush(),
                                N.tQ.updateTree(Q, function(e) {
                                    e.addNode(E.id, E, h, nG.Jq.Completion)
                                }),
                                h = E.id,
                                N.tQ.setThreadCurrentLeafId(Q, h)),
                                j = E
                            }
                            if (M(),
                            "done" !== r.type || (k || C || (M.flush(),
                            _ || (q = u.getMessageId(h),
                            b && nj(q, i),
                            nk(i, q, j))),
                            N.tQ.updateTree(Q, function(e) {
                                e.updateNode(h, {
                                    metadata: {
                                        $set: (0,
                                        eU._)((0,
                                        v._)({}, u.getMetadata(h)), {
                                            completionSampleFinishTime: Date.now()
                                        })
                                    }
                                })
                            }),
                            s(),
                            !l.has("tools3_dev") || !(U = function(e) {
                                var n, t, r, a = (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.invoked_plugin) || void 0 === t ? void 0 : t.http_api_call_data) || (null === (r = e.metadata) || void 0 === r ? void 0 : r.http_api_call_data);
                                if (void 0 !== a) {
                                    if (e.author.role !== nG.uU.Assistant) {
                                        console.error("Refusing to make localhost plugin HTTP call from non-assistant message", e);
                                        return
                                    }
                                    if ("object" != typeof a || "string" != typeof a.namespace || 0 === a.namespace.length || "string" != typeof a.function_name || 0 === a.function_name.length || "string" != typeof a.parent_message_id || 0 === a.parent_message_id.length || "string" != typeof a.url || 0 === a.url.length || "string" != typeof a.method || !["get", "post", "put", "delete", "patch"].includes(a.method) || !Array.isArray(a.qs_params) || a.qs_params.some(function(e) {
                                        return !Array.isArray(e) || 2 !== e.length || "string" != typeof e[0] || "string" != typeof e[1]
                                    }) || "object" != typeof a.headers || Object.keys(a.headers).some(function(e) {
                                        return "string" != typeof e
                                    }) || Object.values(a.headers).some(function(e) {
                                        return "string" != typeof e
                                    }) || !(null === a.body || "object" == typeof a.body && Object.keys(a.body).every(function(e) {
                                        return "string" == typeof e
                                    })) || "string" != typeof a.api_function_type || !["kwargs", "chat"].includes(a.api_function_type)) {
                                        console.error("Refusing to make localhost plugin HTTP call with invalid metadata", e);
                                        return
                                    }
                                    if (!/^https?:\/\/localhost:/.test(a.url)) {
                                        console.error("Refusing to make localhost plugin HTTP call with non-localhost URL", e);
                                        return
                                    }
                                    return a
                                }
                            }(j))))
                                return [3, 2];
                            return [4, function(e) {
                                return nW.apply(this, arguments)
                            }(U)];
                        case 1:
                            z = V.sent(),
                            H = h,
                            N.tQ.updateTree(Q, function(e) {
                                var n = !0
                                  , t = !1
                                  , r = void 0;
                                try {
                                    for (var a, i = z[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                                        var o = a.value;
                                        e.addNode(o.id, o, H, nG.Jq.Completion, {
                                            completionSampleFinishTime: Date.now()
                                        }),
                                        H = o.id
                                    }
                                } catch (e) {
                                    t = !0,
                                    r = e
                                } finally {
                                    try {
                                        n || null == i.return || i.return()
                                    } finally {
                                        if (t)
                                            throw r
                                    }
                                }
                            }),
                            N.tQ.setThreadCurrentLeafId(Q, H),
                            y(e, nG.Os.Next, H, {}, void 0, void 0),
                            V.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                }),
                function(e) {
                    return a.apply(this, arguments)
                }
            }, [c, np, nj, es, Q]),
            y = (0,
            C.useCallback)((x = (0,
            nh._)(function(e, n, t, r) {
                var a, i, o, l, c, d, f, v, x, b, y, j = arguments;
                return (0,
                ng.Jh)(this, function(w) {
                    switch (w.label) {
                    case 0:
                        return a = !(j.length > 4) || void 0 === j[4] || j[4],
                        i = j.length > 5 ? j[5] : void 0,
                        o = N.tQ.getTree(Q),
                        N.tQ.retainThread(Q),
                        l = "request-".concat(u, "-").concat(g.current++),
                        es(function(e) {
                            var n = new Set(e);
                            return n.add(l),
                            n
                        }),
                        N.tQ.updateTree(Q, function(e) {
                            e.addNode(l, "", t, nG.Jq.Completion)
                        }),
                        a && N.tQ.setThreadCurrentLeafId(Q, l),
                        d = [],
                        f = o.getNode(t),
                        n === nG.Os.Next || n === nG.Os.Variant ? (c = (null === (v = (x = o.getNode(f.parentId)).message) || void 0 === v ? void 0 : v.id) || x.id,
                        d.push(f.message)) : c = f.message.id,
                        void 0 === (b = N.tQ.getServerThreadId(Q)) && (0,
                        N.Zz)(Q) && N.tQ.updateInitialThreadDataForNewThread(Q, e, s),
                        [4, ee.ZP.publicApiCompletionStream({
                            model: e,
                            completionType: n,
                            threadId: b,
                            continueFromSharedConversationId: nC,
                            historyDisabled: h,
                            parentMessageId: c,
                            messages: d,
                            enabledPluginIds: s,
                            completionMetadata: i
                        }, p(e, n, l, r))];
                    case 1:
                        return y = w.sent(),
                        m.current[l] = y,
                        [2]
                    }
                })
            }),
            function(e, n, t, r) {
                return x.apply(this, arguments)
            }
            ), [Q, u, es, nC, h, s, p])), nM = (0,
            C.useCallback)(function() {
                if (eN) {
                    var e = N.tQ.getTree(Q).getBranchFromLeaf(eN);
                    e.forEach(function(e) {
                        D.abortAndRemoveById(e.id)
                    }),
                    es(function(n) {
                        var t = new Set(n);
                        return e.forEach(function(e) {
                            t.delete(e.id)
                        }),
                        t
                    })
                }
            }, [eN, es, Q]), nI = (0,
            C.useCallback)((w = (0,
            nh._)(function(e, n, t, r) {
                var a, i, o, s, l = arguments;
                return (0,
                ng.Jh)(this, function(u) {
                    return a = !(l.length > 4) || void 0 === l[4] || l[4],
                    i = l.length > 5 ? l[5] : void 0,
                    o = l.length > 6 ? l[6] : void 0,
                    r && nM(),
                    s = N.tQ.getTree(Q),
                    e !== nG.Os.Continue && e7(s.getTextFromNode(n)) || n_(i ? nl : nu, e, n, t, a, o),
                    [2]
                })
            }),
            function(e, n, t, r) {
                return w.apply(this, arguments)
            }
            ), [Q, e7, n_, nl, nu, nM]), nN = (0,
            C.useCallback)(function(e, n, t, r) {
                N.tQ.updateTree(Q, function(t) {
                    t.addNode(e, r, n, nG.Jq.Prompt)
                })
            }, [Q]), nP = (0,
            C.useCallback)(function(e, n, t) {
                var r = n.value
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                nN(e, eN, nG.Jq.Prompt, r),
                nI(nG.Os.Next, e, t, !0, void 0, void 0, a)
            }, [eN, nN, nI]), nS = (0,
            N.nh)(Q, eN), nR = (0,
            C.useMemo)(function() {
                var e, n, t = nS.type === nG.Jq.Prompt, r = (null === (e = nS.metadata) || void 0 === e ? void 0 : e.err) && (null === (n = nS.metadata) || void 0 === n ? void 0 : n.errCode) !== tz.Dd;
                return !!(t || r) && 0 === eo.size
            }, [eo.size, nS]), nD = (0,
            aI.Y8)(function(e) {
                return e.isoDate
            }), nF = (0,
            C.useMemo)(function() {
                var e, n = (null === (e = nS.metadata) || void 0 === e ? void 0 : e.errCode) === aI.uU;
                return nR && n && null != nD && "" !== nD
            }, [null === (q = nS.metadata) || void 0 === q ? void 0 : q.errCode, nR, nD]), nA = (0,
            C.useCallback)(function(e, n) {
                var t, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", i = arguments.length > 4 ? arguments[4] : void 0, o = N.tQ.getTree(Q);
                t = nR ? o.getLastValidNode(e).id : o.getParentPromptNode(e).id,
                nI(nG.Os.Variant, t, n, !1, r, i, {
                    variantPurpose: a
                })
            }, [nI, nR, Q]), nE = (0,
            C.useCallback)(function(e) {
                ew(T.s6.continueCompletion),
                nI(nG.Os.Continue, e, {
                    eventSource: "mouse"
                }, !1)
            }, [ew, nI]), nL = (0,
            C.useCallback)(function(e) {
                var n = eN
                  , t = !0
                  , r = !1
                  , a = void 0;
                try {
                    for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0)
                        !function() {
                            var e = i.value;
                            e.conversation_id && (0,
                            N.Zz)(Q) && N.tQ.setServerIdForNewThread(Q, e.conversation_id),
                            N.tQ.updateTree(Q, function(t) {
                                t.addNode(e.message.id, e.message, n, nG.Jq.Completion)
                            }),
                            n = e.message.id
                        }()
                } catch (e) {
                    r = !0,
                    a = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw a
                    }
                }
                N.tQ.setThreadCurrentLeafId(Q, n),
                nI(nG.Os.Next, n, {}, !0, void 0, void 0, void 0)
            }, [eN, nI, Q]), nB = !!(ey && (null == nd ? void 0 : null === (U = nd.enabledTools) || void 0 === U ? void 0 : U.includes("tools2"))), nO = (0,
            C.useCallback)((_ = (0,
            nh._)(function(e, n) {
                var t, r;
                return (0,
                ng.Jh)(this, function(a) {
                    switch (a.label) {
                    case 0:
                        if (!nB)
                            return [3, 2];
                        return n.preventDefault(),
                        n.stopPropagation(),
                        t = n.currentTarget.href,
                        r = N.tQ.getServerThreadId(Q),
                        [4, (0,
                        tH.handleSandboxLinkClick)(ep, r)(e, t)];
                    case 1:
                        a.sent(),
                        a.label = 2;
                    case 2:
                        return [2]
                    }
                })
            }),
            function(e, n) {
                return _.apply(this, arguments)
            }
            ), [ep, nB, Q]), nq = (0,
            C.useCallback)(function(e) {
                var n = N.tQ.getTree(Q).getLeafFromNode(e);
                N.tQ.setThreadCurrentLeafId(Q, n.id),
                ew(T.s6.changeNode)
            }, [ew, Q]), nU = (0,
            C.useCallback)(function(e, n) {
                N.tQ.updateTree(Q, function(t) {
                    t.updateNodeText(e, n)
                })
            }, [Q]), nz = (0,
            C.useCallback)(function(e, n, t) {
                var r = N.tQ.getServerThreadId(Q);
                if (ew(T.s6.thumbRating, {
                    id: n,
                    threadId: r,
                    rating: t,
                    model: nu
                }),
                void 0 !== r && ee.ZP.submitMessageFeedback({
                    message_id: n,
                    conversation_id: r,
                    rating: t
                }),
                e$(e),
                eX(n),
                eV(t),
                N.tQ.updateTree(Q, function(n) {
                    var r = n.getMetadata(e);
                    n.updateNode(e, {
                        metadata: {
                            $set: (0,
                            eU._)((0,
                            v._)({}, r), {
                                rating: t
                            })
                        }
                    })
                }),
                "thumbsDown" === t && ek) {
                    var a = N.tQ.getTree(Q).getConversationTurns(e || "root");
                    id(a[a.length - 1]) && nA(e, {
                        eventSource: "mouse",
                        intent: "comparison"
                    }, !1, "comparison")
                }
            }, [ew, Q, nu, ek, nA]), nH = (0,
            C.useCallback)(function(e, n) {
                if (eH && null != eQ && "" !== eQ && (e || n.length > 0)) {
                    var t = N.tQ.getServerThreadId(Q);
                    ew(T.s6.reportResult, {
                        id: eY,
                        threadId: t,
                        content: e,
                        model: nu,
                        rating: eH,
                        tags: n
                    }),
                    Q && eY && ee.ZP.submitMessageFeedback({
                        message_id: eY,
                        conversation_id: t,
                        rating: eH,
                        text: e,
                        tags: n
                    })
                }
            }, [eH, eQ, Q, ew, eY, nu]), nV = (0,
            C.useCallback)(function(e, n) {
                if (eS && null != eE && "" !== eE) {
                    var t = N.tQ.getServerThreadId(Q);
                    ew(T.s6.reportResult, {
                        id: eY,
                        threadId: t,
                        content: e,
                        model: nu,
                        rating: eH,
                        tags: n
                    }),
                    ee.ZP.submitSharedConversationReportFeedback({
                        message_id: eE,
                        shared_conversation_id: t,
                        text: e,
                        tags: n
                    }),
                    eF(!0)
                }
            }, [eH, eS, eE, Q, ew, eY, nu]), nQ = (0,
            C.useCallback)((P = (0,
            nh._)(function(e, n, t, r, a, i, o, s, l, u, c) {
                return (0,
                ng.Jh)(this, function(d) {
                    switch (d.label) {
                    case 0:
                        return [4, ee.ZP.submitMessageComparisonFeedback({
                            feedback_version: "comparison_feedback_modal:a:1.0",
                            original_message_id: e,
                            new_message_id: n,
                            rating: t,
                            conversation_id: N.tQ.getServerThreadId(Q),
                            text: u,
                            tags: c.map(function(e) {
                                return e.replace("feedback-", "")
                            }),
                            completion_comparison_rating: r,
                            new_completion_placement: a,
                            feedback_start_time: i,
                            compare_step_start_time: o,
                            new_completion_load_start_time: s,
                            new_completion_load_end_time: l,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })];
                    case 1:
                        return d.sent(),
                        [2]
                    }
                })
            }),
            function(e, n, t, r, a, i, o, s, l, u, c) {
                return P.apply(this, arguments)
            }
            ), [Q]), n$ = (0,
            C.useCallback)((S = (0,
            nh._)(function(e, n, t, r, a, i, o) {
                return (0,
                ng.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        return [4, ee.ZP.submitMessageComparisonFeedback({
                            feedback_version: "inline_regen_feedback:a:1.0",
                            original_message_id: e,
                            new_message_id: n,
                            rating: "none",
                            conversation_id: N.tQ.getServerThreadId(Q),
                            text: "",
                            tags: [],
                            completion_comparison_rating: t,
                            new_completion_placement: "not-applicable",
                            feedback_start_time: r,
                            compare_step_start_time: a,
                            new_completion_load_start_time: i,
                            new_completion_load_end_time: o,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        })];
                    case 1:
                        return s.sent(),
                        [2]
                    }
                })
            }),
            function(e, n, t, r, a, i, o) {
                return S.apply(this, arguments)
            }
            ), [Q]), nJ = (0,
            C.useCallback)(function(e, n) {
                var t = N.tQ.getTree(Q).getConversationTurns(e)
                  , r = null == t ? void 0 : t[(null == t ? void 0 : t.length) - 1].variantIds
                  , a = (null == r ? void 0 : r.length) === 1;
                nA(e, a ? (0,
                eU._)((0,
                v._)({}, n), {
                    intent: "comparison_implicit"
                }) : n, !0, a ? "comparison_implicit" : "none")
            }, [nA, Q]), nY = (0,
            C.useCallback)(function(e) {
                N.tQ.updateTree(Q, function(n) {
                    n.deleteNode(e)
                })
            }, [Q]), nX = (0,
            C.useCallback)(function() {
                ei(function(e) {
                    return "navigation" !== e && "navigation"
                })
            }, [ei]), nK = (0,
            C.useCallback)(function() {
                ei(function(e) {
                    return "debug" !== e && "debug"
                })
            }, [ei]), n0 = (0,
            C.useCallback)(function() {
                er(!1)
            }, [er]), n1 = lv(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }), n2 = n1.showAccountPaymentModal, n3 = n1.setShowAccountPaymentModal, n5 = (0,
            C.useCallback)(function() {
                n3(!1)
            }, [n3]), n4 = (0,
            C.useCallback)(function(e, n) {
                var t = N.tQ.getTree(Q);
                if (t.isFirstCompletion && !eC) {
                    var r, a = t.getParent(n);
                    (null === (r = a.metadata) || void 0 === r ? void 0 : r.errCode) !== tz.Dd && setTimeout(function() {
                        nj(a.message.id)
                    }, 500)
                }
                D.abortAndRemoveById(n),
                eo.has(n) && (N.tQ.updateTree(Q, function(e) {
                    e.updateNodeMessageMetadata(n, {
                        finish_details: {
                            type: "interrupted"
                        }
                    })
                }),
                es(function(e) {
                    var t = new Set(e);
                    return t.delete(n),
                    t
                }))
            }, [nj, eC, eo, es, Q]), n6 = (0,
            C.useCallback)(function() {
                ni(!0)
            }, []);
            (0,
            C.useEffect)(function() {
                var e = tU().subscribe("AbortCompletion", n4)
                  , n = tU().subscribe("UnrecoverableError", n6);
                return function() {
                    tU().unsubscribe(e),
                    tU().unsubscribe(n)
                }
            }, [n4, n6]);
            var n7 = (0,
            N.Hk)(Q)
              , n9 = eT >= 2
              , te = (0,
            N.Zz)(Q) && !n9
              , tn = (0,
            C.useCallback)(function() {
                nn(!0),
                eg.m.setItem("oai/librarian/hasSeenWarning", "true")
            }, [])
              , tr = (0,
            C.useCallback)(function() {
                e4(!1)
            }, [])
              , ta = (0,
            N.lA)(Q, eN)
              , ti = (0,
            N.dz)(Q, eN)
              , to = Z(function(e) {
                return null != e.aborters[n7]
            })
              , ts = (0,
            C.useRef)(null)
              , tl = (0,
            C.useMemo)(function() {
                return !to && !ta && ti
            }, [ta, ti, to])
              , tu = i8()
              , tc = (0,
            N.XK)(Q)
              , td = A(function(e) {
                return e.sharingModalThreadId === tc
            })
              , tf = (0,
            N.r7)(Q);
            return (0,
            j.jsxs)(j.Fragment, {
                children: [(0,
                j.jsxs)(tO(), {
                    children: [(0,
                    j.jsx)("title", {
                        children: nv
                    }), ed && (0,
                    j.jsxs)(j.Fragment, {
                        children: [(0,
                        j.jsx)("meta", {
                            property: "og:site_name",
                            content: "ChatGPT"
                        }), (0,
                        j.jsx)("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        }), (0,
                        j.jsx)("meta", {
                            property: "og:title",
                            content: null != nv ? nv : "Shared Conversation on ChatGPT"
                        }), (0,
                        j.jsx)("meta", {
                            property: "og:image",
                            content: "/api/share/og/".concat(tc)
                        })]
                    })]
                }), (0,
                j.jsx)(ll, {}), !ne && (0,
                j.jsx)(na.ZP, {
                    isOpen: !0,
                    onModalClose: tn,
                    icon: tL.Z,
                    title: em.formatMessage(l_.doNotShareSensitive),
                    primaryButton: (0,
                    j.jsx)(na.mH, {
                        onClick: tn,
                        title: em.formatMessage(l_.acknowledge)
                    }),
                    type: "danger"
                }, "OnboardingModal"), e8 && e5 && (0,
                j.jsx)(na.ZP, {
                    isOpen: !0,
                    onModalClose: tr,
                    icon: J.U0j,
                    title: em.formatMessage(l_.contentPolicyViolation),
                    primaryButton: (0,
                    j.jsx)(na.mH, {
                        onClick: tr,
                        title: em.formatMessage(l_.acknowledge)
                    }),
                    type: "danger"
                }, "RestrictedTerms"), td && null != tc && (0,
                j.jsx)(s2, {
                    serverThreadId: tc,
                    currentLeafId: eN,
                    activeRequests: eo,
                    currentThreadModel: W.lastModelUsed
                }), null != eH && (0,
                j.jsx)(ih, {
                    ratingModalNodeId: eQ,
                    ratingModalOpen: eH,
                    onCloseRatingModal: function() {
                        return eV(void 0)
                    },
                    handleSubmitFeedback: nH,
                    onHandleChangeFeedbackComparisonRating: nQ,
                    currentModelId: nu,
                    feedbackTextareaRef: eK,
                    clientThreadId: Q,
                    activeRequests: eo,
                    onChangeItemInView: nq,
                    onRequestMoreCompletions: nA,
                    onUpdateNode: nU,
                    onChangeRating: nz,
                    onDeleteNode: nY,
                    onRequestCompletion: nI,
                    onSandboxLinkClick: nO
                }), eS && (0,
                j.jsx)(ih, {
                    ratingModalNodeId: eE,
                    ratingModalOpen: "report",
                    onCloseRatingModal: function() {
                        return eZ(!1)
                    },
                    handleSubmitFeedback: nV,
                    onHandleChangeFeedbackComparisonRating: function() {},
                    currentModelId: nu,
                    feedbackTextareaRef: eK,
                    clientThreadId: Q,
                    activeRequests: eo,
                    onChangeItemInView: nq,
                    onRequestMoreCompletions: nA,
                    onUpdateNode: nU,
                    onChangeRating: nz,
                    onDeleteNode: nY,
                    onRequestCompletion: nI,
                    onSandboxLinkClick: nO
                }), eD && (0,
                j.jsx)(na.ZP, {
                    onModalClose: function() {
                        return eF(!1)
                    },
                    isOpen: !0,
                    icon: tL.Z,
                    title: em.formatMessage(l_.reportModalThankYouTitle),
                    description: em.formatMessage(l_.reportModalThankYouDescription),
                    primaryButton: (0,
                    j.jsx)(na.mH, {
                        onClick: function() {
                            return eF(!1)
                        },
                        title: em.formatMessage(l_.reportModalThankYouDismiss)
                    }),
                    type: "danger"
                }), eO && (0,
                j.jsx)(ih, {
                    ratingModalNodeId: eN,
                    ratingModalOpen: "moderate",
                    onCloseRatingModal: function() {
                        return eq(!1)
                    },
                    handleSubmitFeedback: $(),
                    onHandleChangeFeedbackComparisonRating: function() {},
                    currentModelId: nu,
                    feedbackTextareaRef: eK,
                    clientThreadId: Q,
                    activeRequests: eo,
                    onChangeItemInView: nq,
                    onRequestMoreCompletions: nA,
                    onUpdateNode: nU,
                    onChangeRating: nz,
                    onDeleteNode: nY,
                    onRequestCompletion: nI,
                    onSandboxLinkClick: nO
                }), (0,
                j.jsxs)("div", {
                    className: "flex h-full max-w-full flex-1 flex-col",
                    children: [!ej && (0,
                    j.jsx)(tE.Z, {
                        children: (0,
                        j.jsx)(tF, {
                            clientThreadId: Q,
                            onNewThread: el,
                            onClickOpenSidebar: nX,
                            title: null !== (G = N.tQ.getTitle(Q)) && void 0 !== G ? G : "New chat"
                        })
                    }), (0,
                    j.jsxs)(lT, {
                        className: "flex-1",
                        children: [(0,
                        j.jsx)(la, {
                            isStaticSharedThread: ed,
                            handleResetThread: el,
                            activeSidebar: ea,
                            toggleDebugSidebar: nK
                        }), (0,
                        j.jsx)(lI, {
                            children: !eI && (te || n9) && (R = (0,
                            j.jsx)(sU, {
                                onChangeItemInView: nq,
                                onRequestMoreCompletions: nA,
                                onUpdateNode: nU,
                                onChangeRating: nz,
                                onDeleteNode: nY,
                                onRequestCompletion: nI,
                                onSandboxLinkClick: nO,
                                onHandleChangeVariantFeedbackInlineComparisonRating: n$,
                                isNewThread: te,
                                clientThreadId: Q,
                                isStaticSharedThread: ed,
                                activeRequests: eo,
                                currentThreadModel: W.lastModelUsed,
                                initiallyHighlightedMessageId: ef,
                                inlineEmbeddedDisplay: !1,
                                promptTextareaRef: ts
                            }, Q),
                            ed ? (0,
                            j.jsx)("div", {
                                className: "h-full overflow-auto dark:bg-gray-800",
                                children: R
                            }) : (0,
                            j.jsx)(ls, {
                                children: R
                            }))
                        }), (0,
                        j.jsxs)(lN, {
                            children: [ep.has("model_preview") && te && (null == nd ? void 0 : nd.tags.includes(aQ.S.GPT_4)) && (0,
                            j.jsx)("div", {
                                className: "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
                                children: tu.textareaDisclaimer
                            }), !nF && !ed && (0,
                            j.jsx)(tE.Z, {
                                children: (0,
                                j.jsx)(i_, {
                                    clientThreadId: Q,
                                    onRequestMoreCompletions: nJ,
                                    onCreateNewCompletion: nP,
                                    onAbortCompletion: n4,
                                    onContinueGenerating: nE,
                                    onFileUpload: nL,
                                    modelBackend: nu,
                                    canUpload: nB,
                                    isCompletionInProgress: eo.has(n7),
                                    className: (0,
                                    B.Z)("stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto", e2 ? "max-w-[44rem]" : "lg:max-w-2xl xl:max-w-3xl"),
                                    shouldRetry: nR,
                                    canContinue: tl,
                                    suggestions: void 0 !== nb && (null == nb ? void 0 : nb.messageId) === (null === (z = N.tQ.getTree(Q).getLastValidNode(eN)) || void 0 === z ? void 0 : null === (H = z.message) || void 0 === H ? void 0 : H.id) ? null == nb ? void 0 : nb.suggestions : void 0,
                                    disabled: !no.size,
                                    canPause: to,
                                    isInteractableSharedThread: tf,
                                    ref: ts
                                }, Q)
                            }), ed && (0,
                            j.jsx)(j.Fragment, {
                                children: (0,
                                j.jsxs)("div", {
                                    className: "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                                    children: [(0,
                                    j.jsx)(eu.z, {
                                        as: "link",
                                        to: eh,
                                        children: em.formatMessage(l_.sharedConversationContinueConversation)
                                    }), eM ? (0,
                                    j.jsx)(eu.z, {
                                        onClick: function() {
                                            eq(!0)
                                        },
                                        children: em.formatMessage(l_.sharedConversationModerateConversation)
                                    }) : (0,
                                    j.jsx)(nT.u, {
                                        label: em.formatMessage(l_.sharedConversationReportConversation),
                                        side: "top",
                                        sideOffset: 4,
                                        className: "ml-2",
                                        children: (0,
                                        j.jsx)("button", {
                                            onClick: function() {
                                                eL(eN),
                                                eZ(!0)
                                            },
                                            "aria-label": em.formatMessage(l_.sharedConversationReportConversation),
                                            className: "p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200",
                                            children: (0,
                                            j.jsx)(ec.ZP, {
                                                icon: J.MJI
                                            })
                                        })
                                    })]
                                })
                            }), (0,
                            j.jsx)("div", {
                                className: "px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3",
                                children: e0 ? (0,
                                j.jsx)("span", {
                                    children: (0,
                                    j.jsx)(K.Z, (0,
                                    eU._)((0,
                                    v._)({}, l_.mayProduceInaccurateInformation), {
                                        values: {
                                            link: function(e) {
                                                return (0,
                                                j.jsx)("a", {
                                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            }
                                        }
                                    }))
                                }) : (0,
                                j.jsx)("span", {
                                    children: (0,
                                    j.jsx)(K.Z, (0,
                                    eU._)((0,
                                    v._)({}, l_.freeResearchPreview), {
                                        values: {
                                            link: function(e) {
                                                return (0,
                                                j.jsx)("a", {
                                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "underline",
                                                    children: e
                                                })
                                            }
                                        }
                                    }))
                                })
                            })]
                        })]
                    })]
                }), ep.has("debug") && "debug" === ea && (0,
                j.jsx)(nZ, {
                    clientThreadId: Q,
                    currentLeafId: eN,
                    isOpen: "debug" === ea,
                    slideOver: !ej,
                    onClose: nK
                }), ep.has("tools3_dev") && (0,
                j.jsx)(tt, {
                    slideOver: !ej
                }), e1 && (0,
                j.jsx)(lm.Z, {
                    isOpen: n2,
                    onClose: n5
                }), void 0 !== e0 && e0 && (0,
                j.jsx)(lg, {
                    isOpen: Y,
                    onClose: n0
                }), nr && (0,
                j.jsx)(na.ZP, {
                    onModalClose: $(),
                    isOpen: !0,
                    icon: tL.Z,
                    title: em.formatMessage(l_.somethingWentWrong),
                    description: em.formatMessage(l_.tryAgainLater),
                    primaryButton: (0,
                    j.jsx)(na.mH, {
                        onClick: function() {
                            el(),
                            ni(!1)
                        },
                        title: em.formatMessage(l_.resetThread)
                    }),
                    type: "danger"
                }, "UnrecoverableErrorModal")]
            })
        }
          , lT = _.Z.main(lw())
          , lI = _.Z.div(lk())
          , lN = _.Z.div(lC());
        function lP() {
            var e = (0,
            y._)(["overflow-hidden w-full h-full relative flex z-0"]);
            return lP = function() {
                return e
            }
            ,
            e
        }
        var lS = _.Z.div(lP())
          , lZ = (l = function(e) {
            var n = e.clientThreadId
              , t = e.setClientThreadId
              , r = e.isStaticSharedThread
              , a = (0,
            x._)(e, ["clientThreadId", "setClientThreadId", "isStaticSharedThread"])
              , i = (0,
            N.UL)(n)
              , o = a.setShowAccountPortalModal
              , s = a.activeSidebar
              , l = a.setActiveSidebar
              , u = a.setActiveRequests
              , c = (0,
            N.XK)(n)
              , d = (0,
            k.useRouter)()
              , f = (0,
            M.WS)()
              , h = (0,
            I.nR)()
              , g = (0,
            C.useContext)(L.QL).historyDisabled
              , m = (0,
            aQ.Xy)(i.lastModelUsed, n)
              , p = (0,
            w.NL)();
            (0,
            C.useEffect)(function() {
                return N.tQ.retainThread(n),
                function() {
                    setTimeout(function() {
                        p.invalidateQueries(["conversation", n])
                    }, 0),
                    N.tQ.releaseThread(n)
                }
            }, [n, p]),
            (0,
            C.useEffect)(function() {
                E.closeSharingModal()
            }, [n, c]);
            var b = (0,
            C.useCallback)(function() {
                l(function(e) {
                    return "navigation" !== e && "navigation"
                })
            }, [l])
              , y = (0,
            C.useCallback)(function() {
                f(T.s6.clickSidebarAccountPortalMenuItem),
                o(!0)
            }, [f, o])
              , _ = lv(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }).setShowAccountPaymentModal
              , P = (0,
            C.useCallback)(function() {
                _(!0, function() {
                    f(T.s6.clickSidebarAccountPaymentMenuItem)
                })
            }, [f, _])
              , S = (0,
            C.useCallback)(function() {
                t((0,
                N.OX)()),
                m.tags.includes(aQ.S.GPT_4) ? d.replace("/", void 0, {
                    shallow: !0
                }) : d.replace("/?model=".concat(m.id))
            }, [t, m.tags, m.id, d]);
            return (0,
            C.useEffect)(function() {
                return function() {
                    D.abortAllAndReset(),
                    u(new Set)
                }
            }, [u, n]),
            (0,
            j.jsxs)(lS, {
                children: [!r && (0,
                j.jsx)(tE.Z, {
                    children: (0,
                    j.jsx)(tA, {
                        toggleNavigationSidebar: b,
                        handleAccountPayment: P,
                        handleClickCustomerPortal: y,
                        handleResetThread: S,
                        activeSidebar: s,
                        isAccountPaid: h,
                        children: (0,
                        j.jsx)(eS, {
                            activeId: g ? void 0 : c,
                            onNewThread: S,
                            setActiveRequests: u
                        })
                    })
                }), (0,
                j.jsx)("div", {
                    className: "relative flex h-full max-w-full flex-1 overflow-hidden",
                    children: (0,
                    j.jsx)(lM, (0,
                    v._)({
                        initialThreadData: i,
                        clientThreadId: n,
                        handleResetThread: S,
                        isStaticSharedThread: r
                    }, a), n)
                })]
            })
        }
        ,
        function(e) {
            var n = e.clientThreadId
              , t = e.isStaticSharedThread;
            (0,
            N.ax)(n, t);
            var r = (0,
            N.UL)(n)
              , a = (0,
            b._)((0,
            C.useState)(!1), 2)
              , i = a[0]
              , o = a[1]
              , s = (0,
            b._)((0,
            C.useState)(!1), 2)
              , u = s[0]
              , c = s[1]
              , d = (0,
            b._)((0,
            C.useState)(new Set), 2)
              , f = d[0]
              , h = d[1];
            return (0,
            C.useEffect)(function() {
                c(!1),
                D.reset(),
                h(new Set)
            }, [r.threadId]),
            (0,
            j.jsx)(l, (0,
            v._)({}, e, {
                showAccountPortalModal: i,
                setShowAccountPortalModal: o,
                activeSidebar: u,
                setActiveSidebar: c,
                activeRequests: f,
                setActiveRequests: h
            }))
        }
        )
    },
    5759: function(e, n, t) {
        "use strict";
        t.d(n, {
            I: function() {
                return g
            },
            Z: function() {
                return c
            }
        });
        var r = t(4337)
          , a = t(35250)
          , i = t(34303);
        function o() {
            var e = (0,
            r._)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
            return o = function() {
                return e
            }
            ,
            e
        }
        function s() {
            var e = (0,
            r._)(["w-10 text-2xl text-center"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        function l() {
            var e = (0,
            r._)(["flex-1 leading-5"]);
            return l = function() {
                return e
            }
            ,
            e
        }
        function u() {
            var e = (0,
            r._)(["flex gap-4 flex-col text-sm"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function c(e) {
            var n = e.icon
              , t = e.children;
            return (0,
            a.jsxs)(d, {
                children: [(0,
                a.jsx)(f, {
                    children: n
                }), (0,
                a.jsx)(h, {
                    children: t
                })]
            })
        }
        var d = i.Z.div(o())
          , f = i.Z.div(s())
          , h = i.Z.div(l())
          , g = i.Z.div(u())
    },
    5046: function(e, n, t) {
        "use strict";
        t.d(n, {
            BT: function() {
                return c
            },
            R9: function() {
                return o
            },
            Y8: function() {
                return d
            },
            kc: function() {
                return l
            },
            m0: function() {
                return u
            },
            uU: function() {
                return s
            }
        });
        var r = t(81949)
          , a = t(81292)
          , i = t(51132)
          , o = "gpt-4"
          , s = "model_cap_exceeded"
          , l = (0,
        a.ZP)(function() {
            return {
                serverThreadIds: new Set
            }
        });
        function u(e) {
            l.setState(function(n) {
                return {
                    serverThreadIds: new Set((0,
                    r._)(n.serverThreadIds).concat([e]))
                }
            })
        }
        function c() {
            var e = d(function(e) {
                return e.isoDate
            })
              , n = d(function(e) {
                return e.clearCapTimeout
            })
              , t = Date.now()
              , r = e && new Date(e).getTime();
            return e && r && r <= t ? (n(),
            null) : e ? o : null
        }
        var d = (0,
        a.ZP)()((0,
        i.tJ)(function(e) {
            return {
                isoDate: "",
                setCapTimeout: function(n) {
                    e(function() {
                        return {
                            isoDate: n
                        }
                    })
                },
                clearCapTimeout: function() {
                    e(function() {
                        return {
                            isoDate: ""
                        }
                    })
                }
            }
        }, {
            name: "oai/apps/capExpiresAt"
        }))
    },
    90076: function(e, n, t) {
        "use strict";
        t.d(n, {
            B8: function() {
                return Z
            },
            B9: function() {
                return T
            },
            Bv: function() {
                return P
            },
            Gg: function() {
                return I
            },
            H6: function() {
                return R
            },
            OX: function() {
                return _
            },
            S: function() {
                return a
            },
            Xy: function() {
                return S
            },
            ZL: function() {
                return C
            },
            fm: function() {
                return N
            },
            iu: function() {
                return M
            },
            n2: function() {
                return w
            }
        });
        var r, a, i = t(21722), o = t(39324), s = t(71209), l = t(81949), u = t(39889), c = t(24396), d = t(68555), f = t(70079), h = t(32787), g = t(24274), m = t(64135), p = t(75527), v = t(21437), x = t(32983), b = t(5046), y = "text-davinci-002-render";
        (r = a || (a = {})).GPT_3_5 = "gpt3.5",
        r.GPT_4 = "gpt4",
        r.MOBILE = "mobile";
        var j = R({
            slug: y,
            max_tokens: 4097,
            title: "Default",
            description: "",
            tags: [a.GPT_3_5]
        })
          , w = new Set(["text-davinci-002-render-paid"]);
        function k(e) {
            var n = (0,
            f.useContext)(x.QL).historyDisabled
              , t = (0,
            h.kP)()
              , r = t.session
              , a = t.loading
              , o = null == r ? void 0 : r.accessToken;
            return (0,
            c.a)({
                queryKey: ["models", {
                    isHistoryDisabled: !n
                }],
                queryFn: (0,
                i._)(function() {
                    return (0,
                    u.Jh)(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, g.ZP.getModels(o, n)];
                        case 1:
                            return [2, e.sent()]
                        }
                    })
                }),
                enabled: !a && null != o,
                select: e
            })
        }
        function C() {
            return k().isLoading
        }
        function _() {
            var e = k(function(e) {
                return e.categories
            }).data;
            return null != e ? e : []
        }
        function M() {
            var e = k(function(e) {
                return e.models
            }).data;
            return (0,
            f.useMemo)(function() {
                return new Set(e ? e.map(function(e) {
                    return e.slug
                }) : [y])
            }, [e])
        }
        function T() {
            var e = k(function(e) {
                return e.models
            }).data;
            return (0,
            f.useMemo)(function() {
                return new Map(e ? e.map(function(e) {
                    return [e.slug, R(e)]
                }) : [[y, j]])
            }, [e])
        }
        function I(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , t = function(e) {
                var n, t, r = o.get(e);
                return null !== (t = null == r ? void 0 : null === (n = r.tags) || void 0 === n ? void 0 : n.includes(a.GPT_3_5)) && void 0 !== t && t
            }
              , r = (0,
            m.hz)()
              , i = (0,
            l._)(e)
              , o = T();
            if (!n && r.has("priority_driven_models_list"))
                return i[0];
            var s = (0,
            l._)(i).find(function(e) {
                return t(e)
            });
            return null != s ? s : i[0]
        }
        function N() {
            var e = (0,
            d.useRouter)()
              , n = e.query;
            return (0,
            f.useCallback)(function(t) {
                e.replace({
                    pathname: e.basePath,
                    query: (0,
                    s._)((0,
                    o._)({}, n), {
                        model: encodeURIComponent(t)
                    })
                }, void 0, {
                    shallow: !0
                })
            }, [n, e])
        }
        function P(e, n) {
            var t, r = decodeURIComponent(null !== (t = (0,
            d.useRouter)().query.model) && void 0 !== t ? t : ""), a = (0,
            p.XK)(n), i = Z().enabledModelsById, o = (0,
            v.Fl)().isBetaFeaturesUiEnabled, s = (0,
            b.kc)().serverThreadIds, l = M(), u = o ? i : l, c = I(u);
            return (0,
            f.useMemo)(function() {
                if (0 !== u.size) {
                    var n = void 0 !== a && s.has(a);
                    return !n && null != e && l.has(e) ? null != e ? e : void 0 : !n && r && u.has(r) ? null != r ? r : void 0 : null != c ? c : void 0
                }
            }, [l, c, e, r, u, a, s])
        }
        function S(e, n) {
            var t = P(e, n)
              , r = T();
            return (0,
            f.useMemo)(function() {
                var e;
                return null == t ? j : null !== (e = r.get(t)) && void 0 !== e ? e : j
            }, [t, r])
        }
        function Z() {
            var e = _()
              , n = M()
              , t = T()
              , r = (0,
            v.Fl)();
            return (0,
            f.useMemo)(function() {
                var i, o = e.reduce(function(e, a) {
                    var i, o, s, l, u, c, d = e.enabledModelsInCategoriesById, f = e.availableModelsInCategoriesById, h = n.has(a.default_model) ? a.default_model : null;
                    null != h && (f.add(h),
                    d.add(h));
                    var g = n.has(null !== (i = a.browsing_model) && void 0 !== i ? i : "") ? t.get(null !== (o = a.browsing_model) && void 0 !== o ? o : "") : null;
                    g && (f.add(g.id),
                    r.isBrowsingEnabled && d.add(g.id));
                    var m = n.has(null !== (s = a.code_interpreter_model) && void 0 !== s ? s : "") ? t.get(null !== (l = a.code_interpreter_model) && void 0 !== l ? l : "") : null;
                    m && (f.add(m.id),
                    r.isCodeInterpreterEnabled && d.add(m.id));
                    var p = n.has(null !== (u = a.plugins_model) && void 0 !== u ? u : "") ? t.get(null !== (c = a.plugins_model) && void 0 !== c ? c : "") : null;
                    return p && (f.add(p.id),
                    r.isPluginsEnabled && d.add(p.id)),
                    e
                }, {
                    enabledModelsInCategoriesById: new Set,
                    availableModelsInCategoriesById: new Set
                }), s = o.enabledModelsInCategoriesById, u = o.availableModelsInCategoriesById, c = new Set(Array.from(n).filter(function(e) {
                    return !u.has(e)
                })), d = new Set(Array.from(c).filter(function(e) {
                    var n;
                    return !(null === (n = t.get(e)) || void 0 === n ? void 0 : n.tags.includes(a.MOBILE))
                }));
                return {
                    enabledModelsInCategoriesById: s,
                    availableModelsInCategoriesById: u,
                    enabledModelsNotInCategoriesById: d,
                    enabledModelsById: new Set((0,
                    l._)(s).concat((0,
                    l._)(d)))
                }
            }, [e, n, r, t])
        }
        function R(e) {
            return {
                id: e.slug,
                maxTokens: e.max_tokens,
                title: e.title,
                description: e.description,
                tags: e.tags,
                enabledTools: e.enabled_tools,
                properties: e.qualitative_properties
            }
        }
    },
    75527: function(e, n, t) {
        "use strict";
        t.d(n, {
            tQ: function() {
                return S
            },
            iN: function() {
                return P
            },
            _L: function() {
                return a
            },
            OX: function() {
                return C
            },
            Zz: function() {
                return _
            },
            ax: function() {
                return Z
            },
            r7: function() {
                return J
            },
            XK: function() {
                return R
            },
            je: function() {
                return V
            },
            Uy: function() {
                return H
            },
            GD: function() {
                return O
            },
            U0: function() {
                return B
            },
            oq: function() {
                return E
            },
            Hk: function() {
                return q
            },
            UL: function() {
                return D
            },
            Kt: function() {
                return F
            },
            Ro: function() {
                return L
            },
            GR: function() {
                return A
            },
            qA: function() {
                return U
            },
            XL: function() {
                return z
            },
            u9: function() {
                return $
            },
            nh: function() {
                return G
            },
            lA: function() {
                return W
            },
            dz: function() {
                return Q
            },
            qN: function() {
                return T
            }
        });
        var r, a, i = t(39324), o = t(71209), s = t(24396), l = t(61888), u = t(68555), c = t(70079), d = t(81292), f = t(58392), h = t(32787), g = t(70216);
        t(59710);
        var m = t(57311)
          , p = t(75179);
        t(44675).env.INTERNAL_API_URL;
        var v = t(69403)
          , x = t(97688)
          , b = t(90076)
          , y = t(24274)
          , j = t(32983)
          , w = "NEW:"
          , k = 0;
        function C() {
            return "".concat(w).concat(k++)
        }
        function _(e) {
            return e.startsWith(w)
        }
        (r = a || (a = {})).NewChat = "NewChat",
        r.Server = "Server",
        r.User = "User",
        r.Generated = "Generated",
        r.Unknown = "Unknown";
        var M = {}
          , T = (0,
        d.ZP)((0,
        f.n)(function() {
            return {
                threads: {},
                clientNewThreadIdToServerIdMapping: {},
                threadRetainCounts: {}
            }
        }))
          , I = T.getState
          , N = T.setState
          , P = {
            resolveThreadId: function(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I();
                return null !== (n = t.clientNewThreadIdToServerIdMapping[e]) && void 0 !== n ? n : e
            },
            getThreadCustomTitle: function(e) {
                var n, t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(), a = P.resolveThreadId(e, r);
                return null !== (t = null === (n = r.threads[a]) || void 0 === n ? void 0 : n.title) && void 0 !== t ? t : void 0
            },
            getThreadDataTitle: function(e) {
                var n, t, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(), i = P.resolveThreadId(e, a);
                return null !== (r = null === (n = a.threads[i]) || void 0 === n ? void 0 : null === (t = n.initialThreadData) || void 0 === t ? void 0 : t.title) && void 0 !== r ? r : void 0
            },
            getThreadTitleSource: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I()
                  , t = P.resolveThreadId(e, n);
                return null != n.threads[t] ? n.threads[t].titleSource : a.Unknown
            },
            getThreadCreateTime: function(e) {
                var n, t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(), a = P.resolveThreadId(e, r);
                return null === (n = r.threads[a]) || void 0 === n ? void 0 : null === (t = n.initialThreadData) || void 0 === t ? void 0 : t.createTime
            }
        }
          , S = {
            getOrInitThread: function(e) {
                var n = S.resolveThreadId(e);
                return null != I().threads[n] ? I().threads[n] : (S.resetThread(e),
                I().threads[e])
            },
            getServerThreadId: function(e) {
                return _(e) ? I().clientNewThreadIdToServerIdMapping[e] : e
            },
            setServerIdForNewThread: function(e, n) {
                void 0 === I().clientNewThreadIdToServerIdMapping[e] && N(function(t) {
                    t.threads[n] = t.threads[e],
                    delete t.threads[e],
                    t.clientNewThreadIdToServerIdMapping[e] = n
                })
            },
            initThreadFromServerData: function(e, n) {
                var t, r, s, l, u, c, d, f, h, v, x = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], y = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0, j = S.resolveThreadId(e);
                if (null != I().threads[j] || x) {
                    var w = (r = null === (t = Object.values(n.mapping).find(function(e) {
                        return null === e.parent
                    })) || void 0 === t ? void 0 : t.id,
                    s = new Set,
                    l = new Set,
                    (n.moderation_results || []).forEach(function(e) {
                        e.blocked ? l.add(e.message_id) : e.flagged && s.add(e.message_id)
                    }),
                    {
                        rootId: r,
                        mapping: Object.keys(n.mapping).reduce(function(e, t) {
                            var r, a = n.mapping[t], u = a.parent, c = a.children, d = (0,
                            g._)(a, ["parent", "children"]), f = n.mapping[t].message || m.Cv.createRootMessage();
                            return l.has(f.id) ? r = p.sK : s.has(f.id) && (r = p.Mf),
                            e[t] = (0,
                            i._)((0,
                            o._)((0,
                            i._)({}, d), {
                                message: f,
                                children: c || [],
                                parentId: u || "",
                                type: m.uV[f.author.role]
                            }), r && {
                                metadata: r
                            }),
                            e
                        }, {}),
                        initialCurrentLeafId: n.current_node,
                        authorName: n.author_name
                    });
                    if ((null === (u = I().threads[j]) || void 0 === u ? void 0 : u.isLoading) !== !1) {
                        var k = null !== (c = w.mapping) && void 0 !== c ? c : m.Cv.createTree()
                          , C = {
                            thread: k,
                            initialCurrentLeafId: null !== (f = null !== (d = w.initialCurrentLeafId) && void 0 !== d ? d : w.rootId) && void 0 !== f ? f : "root",
                            threadId: j,
                            title: null !== (h = n.title) && void 0 !== h ? h : null,
                            lastModelUsed: function e(n, t) {
                                var r, a, i = n[t];
                                return (null == i ? void 0 : null === (r = i.message) || void 0 === r ? void 0 : null === (a = r.metadata) || void 0 === a ? void 0 : a.model_slug) ? i.message.metadata.model_slug : (null == i ? void 0 : i.parentId) ? e(n, i.parentId) : null
                            }(w.mapping, w.initialCurrentLeafId),
                            pluginIds: null !== (v = n.plugin_ids) && void 0 !== v ? v : [],
                            authorName: w.authorName,
                            model: "model"in n && null != n.model ? (0,
                            b.H6)(n.model) : void 0,
                            createTime: "create_time"in n ? new Date(1e3 * n.create_time) : void 0
                        }
                          , _ = new m.Cv(k)
                          , M = C.initialCurrentLeafId;
                        N(function(e) {
                            var n;
                            e.threads[j] = (0,
                            o._)((0,
                            i._)({}, null !== (n = e.threads[j]) && void 0 !== n ? n : {}), {
                                initialThreadData: C,
                                title: C.title,
                                titleSource: a.Server,
                                tree: _,
                                currentLeafId: M,
                                isLoading: !1,
                                continuingFromSharedConversationId: y
                            })
                        }),
                        S.recomputeConversationTurns(j, I().threads[j].currentLeafId, [])
                    }
                }
            },
            resetThread: function(e) {
                var n = {
                    thread: m.Cv.createTree(),
                    initialCurrentLeafId: "root",
                    threadId: null,
                    title: null,
                    lastModelUsed: null,
                    pluginIds: [],
                    authorName: void 0
                };
                S.deleteThread(e),
                N(function(t) {
                    t.threads[e] = {
                        initialThreadData: n,
                        tree: new m.Cv(n.thread),
                        title: n.title,
                        titleSource: a.NewChat,
                        currentLeafId: n.initialCurrentLeafId,
                        conversationTurns: [],
                        isLoading: !_(e)
                    }
                })
            },
            updateInitialThreadDataForNewThread: function(e, n, t) {
                N(function(r) {
                    r.threads[e].initialThreadData.lastModelUsed = n,
                    r.threads[e].initialThreadData.pluginIds = t
                })
            },
            getThreadCurrentLeafId: function(e) {
                var n, t, r = S.resolveThreadId(e);
                return null !== (t = null === (n = I().threads[r]) || void 0 === n ? void 0 : n.currentLeafId) && void 0 !== t ? t : "root"
            },
            setThreadCurrentLeafId: function(e, n) {
                var t, r, a = S.resolveThreadId(e);
                if (null != I().threads[a]) {
                    N(function(e) {
                        e.threads[a].currentLeafId = n
                    });
                    var i = I();
                    S.recomputeConversationTurns(a, n, null !== (r = null === (t = i.threads[a]) || void 0 === t ? void 0 : t.conversationTurns) && void 0 !== r ? r : [])
                }
            },
            setTitle: function(e, n, t) {
                var r = S.resolveThreadId(e);
                null != I().threads[r] && N(function(e) {
                    e.threads[r].title = n,
                    e.threads[r].titleSource = t
                })
            },
            getTitle: function(e) {
                var n;
                return null !== (n = P.getThreadCustomTitle(e)) && void 0 !== n ? n : P.getThreadDataTitle(e)
            },
            getTitleAndSource: function(e) {
                var n;
                return {
                    title: null !== (n = P.getThreadCustomTitle(e)) && void 0 !== n ? n : P.getThreadDataTitle(e),
                    titleSource: P.getThreadTitleSource(e)
                }
            },
            updateTree: function(e, n) {
                var t, r, a, i, o = S.resolveThreadId(e);
                if (!(null != I().threads[o])) {
                    console.warn("Thread does not exist, cannot update tree: ", o);
                    return
                }
                n(S.getTree(e));
                var s = I()
                  , l = null !== (a = null === (t = s.threads[o]) || void 0 === t ? void 0 : t.currentLeafId) && void 0 !== a ? a : "root"
                  , u = null !== (i = null === (r = s.threads[o]) || void 0 === r ? void 0 : r.conversationTurns) && void 0 !== i ? i : [];
                S.recomputeConversationTurns(o, l, u)
            },
            getTree: function(e) {
                var n, t, r = S.resolveThreadId(e);
                return null !== (t = null === (n = I().threads[r]) || void 0 === n ? void 0 : n.tree) && void 0 !== t ? t : new m.Cv
            },
            resolveThreadId: function(e) {
                return P.resolveThreadId(e)
            },
            recomputeConversationTurns: function(e, n, t) {
                var r = S.resolveThreadId(e);
                N(function(e) {
                    e.threads[r] && (e.threads[r].conversationTurns = S.computeThreadConversationTurns(r, n, t))
                })
            },
            computeThreadConversationTurns: function(e, n, t) {
                var r = S.resolveThreadId(e);
                return S.getTree(r).getConversationTurns(n).map(function(e, n) {
                    var r = null == t ? void 0 : t[n];
                    return (0,
                    l.isEqual)(r, e) ? r : e
                })
            },
            getThreadConversationTurns: function(e, n, t) {
                var r, a, i, o, s = S.resolveThreadId(e), l = null !== (i = null === (r = I().threads[s]) || void 0 === r ? void 0 : r.currentLeafId) && void 0 !== i ? i : "root";
                return null != n && n !== l ? S.computeThreadConversationTurns(s, n, null != t ? t : []) : null !== (o = null === (a = I().threads[s]) || void 0 === a ? void 0 : a.conversationTurns) && void 0 !== o ? o : []
            },
            getThreadModel: function(e) {
                var n, t = S.resolveThreadId(e);
                return null === (n = I().threads[t]) || void 0 === n ? void 0 : n.initialThreadData.model
            },
            removeContinuingFromSharedConversationId: function(e) {
                var n = S.resolveThreadId(e);
                N(function(e) {
                    var t;
                    (null === (t = e.threads[n]) || void 0 === t ? void 0 : t.continuingFromSharedConversationId) != null && delete e.threads[n].continuingFromSharedConversationId
                })
            },
            deleteThread: function(e) {
                N(function(n) {
                    delete n.threads[e],
                    delete n.clientNewThreadIdToServerIdMapping[e]
                })
            },
            retainThread: function(e) {
                N(function(n) {
                    var t;
                    n.threadRetainCounts[e] = (null !== (t = n.threadRetainCounts[e]) && void 0 !== t ? t : 0) + 1
                }),
                clearTimeout(M[e])
            },
            releaseThread: function(e) {
                null != I().threads[e] && (N(function(n) {
                    var t;
                    n.threadRetainCounts[e] = Math.max((null !== (t = n.threadRetainCounts[e]) && void 0 !== t ? t : 0) - 1, 0)
                }),
                I().threadRetainCounts[e] > 0 || (clearTimeout(M[e]),
                M[e] = setTimeout(function() {
                    null == I().threads[e] || I().threadRetainCounts[e] > 0 || S.deleteThread(e)
                }, 3e4)))
            }
        }
          , Z = function(e, n) {
            var t = (0,
            u.useRouter)()
              , r = (0,
            h.kP)().session
              , a = (0,
            c.useContext)(j.QL).historyDisabled;
            (0,
            s.a)(["conversation", e], function() {
                return y.ZP.getConversation(e, null == r ? void 0 : r.accessToken)
            }, {
                enabled: !_(e) && (null == r ? void 0 : r.accessToken) !== void 0 && !a && !n,
                onError: function() {
                    t.replace("/"),
                    x.m.danger("Unable to load conversation ".concat(e))
                },
                onSuccess: function(n) {
                    n && S.initThreadFromServerData(e, n)
                }
            }),
            (0,
            c.useEffect)(function() {
                S.getOrInitThread(e)
            }, [e, t])
        }
          , R = function(e) {
            return T(function(n) {
                return _(e) ? n.clientNewThreadIdToServerIdMapping[e] : e
            })
        }
          , D = function(e) {
            return T(function(n) {
                var t, r, a = S.resolveThreadId(e);
                return null !== (r = null === (t = n.threads[a]) || void 0 === t ? void 0 : t.initialThreadData) && void 0 !== r ? r : Object.freeze({
                    thread: m.Cv.createTree(),
                    threadId: null,
                    initialCurrentLeafId: "root",
                    title: null,
                    lastModelUsed: null
                })
            })
        }
          , F = function(e) {
            return T(function(n) {
                var t, r, a = S.resolveThreadId(e);
                return null !== (r = null === (t = n.threads[a]) || void 0 === t ? void 0 : t.isLoading) && void 0 !== r && r
            })
        }
          , A = function(e) {
            var n = T(function(n) {
                var t, r, a = S.resolveThreadId(e);
                return null === (t = n.threads[a]) || void 0 === t ? void 0 : null === (r = t.initialThreadData) || void 0 === r ? void 0 : r.pluginIds
            });
            return (0,
            c.useMemo)(function() {
                return new Set(null != n ? n : [])
            }, [n])
        }
          , E = function(e) {
            return T(function() {
                return S.getThreadCurrentLeafId(e)
            })
        }
          , L = function(e) {
            return T(function() {
                return S.getThreadModel(e)
            })
        }
          , B = function(e, n) {
            var t = (0,
            c.useRef)([]);
            return T(function() {
                var r, a = S.getThreadConversationTurns(e, n, t.current);
                return t.current = a,
                null !== (r = null == a ? void 0 : a.length) && void 0 !== r ? r : 0
            })
        }
          , O = function(e, n, t) {
            var r = (0,
            c.useRef)([]);
            return T(function() {
                var a = S.getThreadConversationTurns(e, t, r.current);
                return r.current = a,
                a[n]
            })
        }
          , q = function(e) {
            var n = E(e);
            return (0,
            c.useMemo)(function() {
                var t, r, a = S.getThreadConversationTurns(e, n, []), i = null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0, o = null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r ? r : null;
                return 0 === i ? n : m.Cv.getRequestIdFromConversationTurn(o)
            }, [n, e])
        }
          , U = function(e) {
            return T(function() {
                return S.getTitle(e)
            })
        }
          , z = function(e) {
            return T(function() {
                return S.getTitleAndSource(e)
            })
        }
          , H = function(e) {
            return T(function() {
                var n, t = S.resolveThreadId(e);
                return null === (n = I().threads[t]) || void 0 === n ? void 0 : n.continuingFromSharedConversationId
            })
        }
          , V = function(e) {
            return T(function() {
                var n, t, r = S.resolveThreadId(e);
                return null === (n = I().threads[r]) || void 0 === n ? void 0 : null === (t = n.initialThreadData) || void 0 === t ? void 0 : t.authorName
            })
        }
          , G = function(e, n) {
            return T(function() {
                return S.getTree(e).getNode(n)
            })
        }
          , W = function(e, n) {
            return T(function() {
                var t, r;
                return null !== (r = null === (t = S.getTree(e)) || void 0 === t ? void 0 : t.getHasErrorFromNode(n)) && void 0 !== r && r
            })
        }
          , Q = function(e, n) {
            return T(function() {
                var t, r;
                return null !== (r = null === (t = S.getTree(e)) || void 0 === t ? void 0 : t.isMessageIncomplete(n)) && void 0 !== r && r
            })
        }
          , $ = function(e, n) {
            return T(function() {
                var t = S.getTree(e);
                return null == t ? [] : t.getBranchFromLeaf(n).filter(function(e) {
                    return e.type !== v.Jq.Root
                }).map(function(e) {
                    return e.message
                })
            })
        }
          , J = function(e) {
            return T(function() {
                var n, t = S.resolveThreadId(e);
                return (null === (n = I().threads[t]) || void 0 === n ? void 0 : n.continuingFromSharedConversationId) != null
            })
        }
    },
    21437: function(e, n, t) {
        "use strict";
        t.d(n, {
            Fl: function() {
                return k
            },
            N2: function() {
                return w
            },
            tr: function() {
                return a
            }
        });
        var r, a, i, o = t(96237), s = t(39324), l = t(71209), u = t(22830), c = t(35448), d = t(24396), f = t(70079), h = t(81292), g = t(32787), m = t(24274), p = t(64135), v = {
            isBetaFeaturesUiEnabled: !1,
            isBrowsingAvailable: !1,
            isBrowsingEnabled: !1,
            isPluginsAvailable: !1,
            isPluginsEnabled: !1,
            isCodeInterpreterAvailable: !1,
            isCodeInterpreterEnabled: !1,
            isLegacyToolsUser: !1,
            isNewToolsUser: !1
        };
        (r = a || (a = {})).BROWSING = "browsing",
        r.CODE_INTERPRETER = "code_interpreter",
        r.PLUGINS = "plugins";
        var x = (i = {},
        (0,
        o._)(i, a.BROWSING, "isBrowsingEnabled"),
        (0,
        o._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
        (0,
        o._)(i, a.PLUGINS, "isPluginsEnabled"),
        i)
          , b = (0,
        h.ZP)()(function() {
            return v
        })
          , y = {
            updateUserSettings: function(e) {
                b.setState(function(n) {
                    return (0,
                    s._)({}, n, e)
                })
            },
            updateUserSettingsFromFeatures: function(e) {
                b.setState(function(n) {
                    return (0,
                    s._)({}, n, y.getUserSettingsFromFeatures(e))
                })
            },
            getUserSettingsFromFeatures: function(e) {
                return Object.entries(e).reduce(function(e, n) {
                    var t = (0,
                    u._)(n, 2)
                      , r = t[0]
                      , a = t[1]
                      , i = x[r];
                    return i ? (0,
                    l._)((0,
                    s._)({}, e), (0,
                    o._)({}, i, a)) : e
                }, {})
            }
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return ["userSettings", e]
        };
        function w() {
            var e = (0,
            g.kP)().session
              , n = (0,
            c.NL)();
            return function() {
                return n.invalidateQueries({
                    queryKey: j(null == e ? void 0 : e.accessToken)
                })
            }
        }
        function k() {
            var e = (0,
            g.kP)().session
              , n = (0,
            p.hz)()
              , t = n.has("beta_features");
            return (0,
            d.a)(j(null == e ? void 0 : e.accessToken), function() {
                return m.ZP.getUserSettingBetaFeatures(e.accessToken).then(function(e) {
                    return null != e && y.updateUserSettingsFromFeatures(e),
                    e
                })
            }, {
                enabled: t && (null == e ? void 0 : e.accessToken) != null
            }),
            (0,
            f.useEffect)(function() {
                y.updateUserSettings({
                    isBetaFeaturesUiEnabled: t,
                    isBrowsingAvailable: n.has("browsing_available") || n.has("tools"),
                    isCodeInterpreterAvailable: n.has("tools2"),
                    isPluginsAvailable: n.has("plugins_available") || n.has("tools3"),
                    isLegacyToolsUser: n.has("tools") && n.has("browsing_available") || n.has("tools3") && n.has("plugins_available"),
                    isNewToolsUser: n.has("browsing_available") && !n.has("tools") || n.has("plugins_available") && !n.has("tools3")
                })
            }, [n, t]),
            b(function(e) {
                return e
            })
        }
    },
    53086: function(e, n, t) {
        "use strict";
        t.d(n, {
            G: function() {
                return r
            }
        });
        var r = {
            id: "chat",
            name: "ChatGPT",
            href: "/",
            theme: {
                icon: "openai",
                color: "#19c37d",
                activeColor: "#1a7f64"
            }
        }
    },
    77442: function(e, n, t) {
        "use strict";
        t.d(n, {
            _G: function() {
                return a
            },
            dQ: function() {
                return g
            },
            oc: function() {
                return d
            },
            w$: function() {
                return f
            },
            x_: function() {
                return h
            }
        });
        var r, a, i, o = t(96237), s = t(22830), l = t(70079);
        (r = a || (a = {})).Mobile = "mobile",
        r.Small = "small",
        r.Medium = "medium",
        r.Large = "large",
        r.XLarge = "xlarge";
        var u = (i = {},
        (0,
        o._)(i, a.Small, 640),
        (0,
        o._)(i, a.Medium, 768),
        (0,
        o._)(i, a.Large, 1024),
        (0,
        o._)(i, a.XLarge, 1280),
        i);
        function c(e) {
            var n = function() {
                i(t(e))
            }
              , t = function(e) {
                return window.matchMedia(e).matches
            }
              , r = (0,
            s._)((0,
            l.useState)(t(e)), 2)
              , a = r[0]
              , i = r[1];
            return (0,
            l.useEffect)(function() {
                var t = window.matchMedia(e);
                return n(),
                t.addListener ? t.addListener(n) : t.addEventListener("change", n),
                function() {
                    t.removeListener ? t.removeListener(n) : t.removeEventListener("change", n)
                }
            }, [e]),
            a
        }
        function d() {
            return c("(min-width: ".concat(u[a.Small], "px)"))
        }
        function f() {
            return c("(min-width: ".concat(u[a.Medium], "px)"))
        }
        function h() {
            return c("(min-width: ".concat(u[a.Large], "px)"))
        }
        function g() {
            var e = d()
              , n = f()
              , t = h();
            return c("(min-width: ".concat(u[a.XLarge], "px)")) ? a.XLarge : t ? a.Large : n ? a.Medium : e ? a.Small : a.Mobile
        }
    },
    57311: function(e, n, t) {
        "use strict";
        t.d(n, {
            Cv: function() {
                return _
            },
            uV: function() {
                return j
            }
        });
        var r, a, i = t(51217), o = t(53596), s = t(54084), l = t(49406), u = t(31819), c = t(96237), d = t(39324), f = t(70216), h = t(81949), g = t(74050), m = t(84251), p = t.n(m), v = t(8844), x = t(75179), b = t(69403), y = (r = {},
        (0,
        c._)(r, b.Jq.Root, b.uU.Unknown),
        (0,
        c._)(r, b.Jq.Prompt, b.uU.User),
        (0,
        c._)(r, b.Jq.Completion, b.uU.Assistant),
        (0,
        c._)(r, b.Jq.System, b.uU.System),
        r), j = (a = {},
        (0,
        c._)(a, b.uU.Unknown, b.Jq.Root),
        (0,
        c._)(a, b.uU.System, b.Jq.System),
        (0,
        c._)(a, b.uU.User, b.Jq.Prompt),
        (0,
        c._)(a, b.uU.Assistant, b.Jq.Completion),
        (0,
        c._)(a, b.uU.Critic, b.Jq.Completion),
        (0,
        c._)(a, b.uU.Tool, b.Jq.Completion),
        a);
        function w(e) {
            var n = (0,
            v.Z)();
            return "".concat(e).concat(n.substring(e.length))
        }
        var k = new WeakMap
          , C = new WeakMap
          , _ = function() {
            function e(n) {
                (0,
                i._)(this, e),
                (0,
                s._)(this, k, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                s._)(this, C, {
                    writable: !0,
                    value: void 0
                }),
                (0,
                l._)(this, k, n || e.createTree());
                var t = Object.values((0,
                o._)(this, k)).find(function(e) {
                    return e.type === b.Jq.Root
                });
                (0,
                l._)(this, C, (null == t ? void 0 : t.id) || "root")
            }
            var n = e.prototype;
            return n.getNode = function(e) {
                return (0,
                o._)(this, k)[e]
            }
            ,
            n.getMessage = function(e) {
                return (0,
                o._)(this, k)[e].message
            }
            ,
            n.getMessageId = function(e) {
                try {
                    return (0,
                    o._)(this, k)[e].message.id
                } catch (n) {
                    throw console.error("Tree: Unable to getMessageId for node ".concat(e)),
                    n
                }
            }
            ,
            n.getMetadata = function(e) {
                return (0,
                o._)(this, k)[e].metadata
            }
            ,
            n.getLeafFromNode = function(e) {
                for (var n = (0,
                o._)(this, k)[e]; ; ) {
                    if (0 === n.children.length)
                        return n;
                    n = (0,
                    o._)(this, k)[n.children.values().next().value]
                }
            }
            ,
            n.getParent = function(e) {
                var n = (0,
                o._)(this, k)[e].parentId;
                return (0,
                o._)(this, k)[n]
            }
            ,
            n.getParentId = function(e) {
                var n;
                return (null === (n = this.getParent(e)) || void 0 === n ? void 0 : n.id) || "root"
            }
            ,
            n.getBranchFromLeaf = function(e) {
                for (var n = [], t = (0,
                o._)(this, k)[e]; ; ) {
                    if (n.includes(t)) {
                        console.error("Infinite loop detected in getBranchFromLeaf.");
                        break
                    }
                    if (!t || (n.push(t),
                    "root" === t.type))
                        break;
                    t = (0,
                    o._)(this, k)[t.parentId]
                }
                return n.reverse()
            }
            ,
            n.getChildrenFromNode = function(e) {
                var n = this
                  , t = (0,
                o._)(this, k)[e];
                return t ? Array.from(t.children).map(function(e) {
                    return (0,
                    o._)(n, k)[e]
                }) : []
            }
            ,
            n.getFirstPrompt = function() {
                for (var e, n, t = this.getNode((0,
                o._)(this, C)); ; ) {
                    if (!t)
                        return;
                    if (t.type === b.Jq.Prompt || t.type === b.Jq.System && (null === (e = t.message.metadata) || void 0 === e ? void 0 : e.upload_filename))
                        return t;
                    t = (0,
                    o._)(this, k)[null === (n = t.children) || void 0 === n ? void 0 : n[0]]
                }
            }
            ,
            n.isMessageIncomplete = function(n) {
                var t = this.getMessage(n);
                return e.getIsIncompleteFromMessage(t)
            }
            ,
            n.addNodeToEnd = function(e, n) {
                if (!(0,
                o._)(this, k)[e])
                    return (0,
                    c._)({}, n.id, n);
                (0,
                l._)(this, k, p()((0,
                o._)(this, k), (0,
                c._)({
                    $merge: (0,
                    c._)({}, n.id, n)
                }, e, {
                    children: {
                        $apply: function(e) {
                            return Array.from(new Set((0,
                            h._)(e).concat([n.id])))
                        }
                    }
                })))
            }
            ,
            n.appendSystemMessageToRoot = function(e) {
                var n, t, r = null === (n = this.getFirstPrompt()) || void 0 === n ? void 0 : n.parentId;
                if (r) {
                    var a = this.getNode(r)
                      , i = this.getNode(a.children[0])
                      , s = {
                        id: e.id,
                        children: a.children,
                        parentId: a.id,
                        message: e
                    };
                    (0,
                    l._)(this, k, p()((0,
                    o._)(this, k), (t = {
                        $merge: (0,
                        c._)({}, s.id, s)
                    },
                    (0,
                    c._)(t, a.id, {
                        children: {
                            $set: [s.id]
                        }
                    }),
                    (0,
                    c._)(t, i.id, {
                        parentId: {
                            $set: s.id
                        }
                    }),
                    t)))
                }
            }
            ,
            n.addNode = function(e, n, t, r, a) {
                var i = "string" == typeof n ? {
                    id: w("aaa2"),
                    author: {
                        role: y[r]
                    },
                    content: {
                        content_type: "text",
                        parts: [n]
                    }
                } : n
                  , o = (0,
                d._)({
                    id: e,
                    children: [],
                    parentId: t,
                    type: r,
                    message: i
                }, a ? {
                    metadata: a
                } : {});
                this.addNodeToEnd(t, o)
            }
            ,
            n.updateNode = function(e, n) {
                (0,
                l._)(this, k, p()((0,
                o._)(this, k), (0,
                c._)({}, e, n)))
            }
            ,
            n.updateNodeMessage = function(e, n) {
                (0,
                l._)(this, k, p()((0,
                o._)(this, k), (0,
                c._)({}, e, {
                    message: {
                        $set: n
                    }
                })))
            }
            ,
            n.updateNodeMessageMetadata = function(e, n) {
                (0,
                l._)(this, k, p()((0,
                o._)(this, k), (0,
                c._)({}, e, {
                    message: {
                        metadata: {
                            $merge: n
                        }
                    }
                })))
            }
            ,
            n.updateNodeText = function(e, n) {
                (0,
                l._)(this, k, p()((0,
                o._)(this, k), (0,
                c._)({}, e, {
                    message: {
                        content: {
                            parts: {
                                $set: [n]
                            }
                        }
                    }
                })))
            }
            ,
            n.deleteNode = function(e) {
                var n = (0,
                o._)(this, k)
                  , t = n[e]
                  , r = (0,
                f._)(n, [e].map(g._))
                  , a = t.parentId;
                (0,
                l._)(this, k, p()(r, (0,
                c._)({}, a, {
                    children: {
                        $apply: function(n) {
                            return n.filter(function(n) {
                                return n !== e
                            })
                        }
                    }
                })))
            }
            ,
            n.getTextFromNode = function(n) {
                return e.getTextFromMessage(this.getMessage(n))
            }
            ,
            n.getHasErrorFromNode = function(e) {
                var n, t, r = this.getNode(e);
                return r && ((null === (n = r.metadata) || void 0 === n ? void 0 : n.errType) === "danger" || (null === (t = r.metadata) || void 0 === t ? void 0 : t.errType) === "warning")
            }
            ,
            n.getIsBlockedFromNode = function(e) {
                var n, t, r = this.getNode(e);
                return r && (null === (n = r.metadata) || void 0 === n ? void 0 : n.errCode) === x.Dd && (null === (t = r.metadata) || void 0 === t ? void 0 : t.errType) === "danger"
            }
            ,
            n.getTextFromThread = function(n) {
                return this.getBranchFromLeaf(n).filter(function(e) {
                    return e.type !== b.Jq.Root && e.type !== b.Jq.System
                }).map(function(n) {
                    return e.getTextFromMessage(n.message)
                }).join("\n\n")
            }
            ,
            n.shouldFilterNode = function(e) {
                var n = e.message
                  , t = n.content.content_type
                  , r = e.message.author.role === b.uU.System
                  , a = e.message.author.role === b.uU.Tool
                  , i = void 0 !== n.recipient && "all" !== n.recipient;
                return r || i || a && !("code" === t || "execution_output" === t || "system_error" === t)
            }
            ,
            n.getTextFromTurnsById = function(e) {
                var n = this;
                return e.map(function(e) {
                    return n.getNode(e)
                }).filter(function(e) {
                    return !n.shouldFilterNode(e)
                }).map(function(e) {
                    return n.getTextFromNode(e.id)
                }).join("\n\n")
            }
            ,
            n.getTextFromLastNTurns = function(n, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return this.getConversationTurns(n, this.shouldFilterNode).slice(-t).map(function(n) {
                    var t = n.messages.map(function(n) {
                        return e.getTextFromMessage(n.message)
                    }).filter(function(e) {
                        return "" !== e
                    }).join("\n");
                    return r ? "[".concat(n.role, "]\n").concat(t) : t
                }).join("\n")
            }
            ,
            n.getConversationTurns = function(e, n) {
                var t = this
                  , r = [];
                return this.getBranchFromLeaf(e).forEach(function(e) {
                    var a = e.id
                      , i = e.parentId
                      , s = e.message
                      , l = e.metadata;
                    if (null == n || !n(e)) {
                        var u = r[r.length - 1];
                        (null == u ? void 0 : u.role) === s.author.role || s.author.role === b.uU.Tool ? r[r.length - 1].messages.push((0,
                        d._)({
                            nodeId: a,
                            parentId: i,
                            message: s
                        }, l)) : r.push({
                            role: s.author.role,
                            messages: [(0,
                            d._)({
                                nodeId: a,
                                parentId: i,
                                message: s
                            }, l)],
                            variantIds: i ? Array.from((0,
                            o._)(t, k)[i].children) : [a]
                        })
                    }
                }),
                r
            }
            ,
            n.getLastValidNode = function(e) {
                for (var n, t = this.getNode(e); t && t && (null === (n = t.metadata) || void 0 === n ? void 0 : n.err); )
                    t = this.getNode(t.parentId);
                return t
            }
            ,
            n.getParentPromptNode = function(e) {
                for (var n, t = this.getNode(e); t && t && (null === (n = t.message) || void 0 === n ? void 0 : n.author.role) !== b.uU.User; )
                    t = this.getNode(t.parentId);
                return t
            }
            ,
            n.messageIdToNodeId = function(e) {
                if (null != (0,
                o._)(this, k)[e])
                    return e;
                var n = !0
                  , t = !1
                  , r = void 0;
                try {
                    for (var a, i = Object.values((0,
                    o._)(this, k))[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var s, l = a.value;
                        if ((null === (s = l.message) || void 0 === s ? void 0 : s.id) === e)
                            return l.id
                    }
                } catch (e) {
                    t = !0,
                    r = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (t)
                            throw r
                    }
                }
                return e
            }
            ,
            n.unstable_getMapping = function() {
                return (0,
                o._)(this, k)
            }
            ,
            e.createTree = function() {
                return {
                    root: {
                        id: "root",
                        children: [],
                        parentId: "",
                        type: b.Jq.Root,
                        message: e.createRootMessage()
                    }
                }
            }
            ,
            e.createRootMessage = function() {
                return {
                    id: w("aaa1"),
                    author: {
                        role: y[b.Jq.Root]
                    },
                    content: {
                        content_type: "text",
                        parts: []
                    }
                }
            }
            ,
            e.getIsMessageFinished = function(e) {
                var n;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : n.finish_details) != null
            }
            ,
            e.getIsStopFromMessage = function(e) {
                var n, t;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.finish_details) || void 0 === t ? void 0 : t.type) === "stop"
            }
            ,
            e.getIsIncompleteFromMessage = function(e) {
                var n, t;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.finish_details) || void 0 === t ? void 0 : t.type) === "max_tokens"
            }
            ,
            e.getWasInterruptedFromMessage = function(e) {
                var n, t;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : null === (t = n.finish_details) || void 0 === t ? void 0 : t.type) === "interrupted"
            }
            ,
            e.getIsContinuedFromMessage = function(e) {
                var n;
                return (null === (n = e.metadata) || void 0 === n ? void 0 : n.message_type) === "continue"
            }
            ,
            e.getModelFromMessage = function(e) {
                var n;
                return null === (n = e.metadata) || void 0 === n ? void 0 : n.model_slug
            }
            ,
            e.getTextFromMessage = function(e) {
                switch (e.content.content_type) {
                case "text":
                    return e.content.parts.join("");
                case "tether_browsing_code":
                case "code":
                case "execution_output":
                case "system_error":
                    return e.content.text;
                case "system_message":
                    var n = e.content.text
                      , t = !0
                      , r = !1
                      , a = void 0;
                    try {
                        for (var i, o = Object.values(e.content.tools_section)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                            var s = i.value;
                            n += "\n\n".concat(s)
                        }
                    } catch (e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return n;
                default:
                    return ""
                }
            }
            ,
            e.getRequestIdFromConversationTurn = function(e) {
                var n = e.messages[e.messages.length - 1];
                return this.getIsContinuedFromMessage(n.message) ? n.nodeId : e.messages[0].nodeId
            }
            ,
            e.getRecipientFromMessage = function(e) {
                return e.recipient || ""
            }
            ,
            (0,
            u._)(e, [{
                key: "isFirstCompletion",
                get: function() {
                    var e = this.getFirstPrompt();
                    if (e) {
                        var n = (0,
                        o._)(this, k)[e.children[0]];
                        if (n && 0 === n.children.length)
                            return !0
                    }
                    return !1
                }
            }]),
            e
        }()
    },
    19051: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(70079);
        function a() {
            var e = (0,
            r.useRef)([])
              , n = (0,
            r.useRef)(function(n, t) {
                var r = setTimeout(n, t);
                return e.current.push(r),
                r
            });
            return (0,
            r.useEffect)(function() {
                var n = e.current;
                return function() {
                    n.forEach(function(e) {
                        clearTimeout(e)
                    })
                }
            }, []),
            n.current
        }
    },
    75179: function(e, n, t) {
        "use strict";
        t.d(n, {
            Dd: function() {
                return o
            },
            Mf: function() {
                return s
            },
            _I: function() {
                return u
            },
            sK: function() {
                return l
            }
        });
        var r = t(95182)
          , a = t.n(r)
          , i = t(24274)
          , o = "content_policy"
          , s = {
            errType: "warning",
            errCode: o
        }
          , l = {
            err: "Contents may violate our content policy",
            errType: "danger",
            errCode: o
        };
        function u(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , t = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0
              , o = a()(e.length, 0, 4e3)
              , s = a()(e.length - o, 0, e.length - 1)
              , l = n ? e.substring(s, e.length) : e;
            return l ? i.ZP.runModerationApi(l, t, r).then(function(e) {
                return {
                    isBlocked: !!e.blocked,
                    isFlagged: !!e.flagged
                }
            }).catch(function(e) {
                return console.error(e),
                {
                    isBlocked: !1,
                    isFlagged: !1,
                    error: e
                }
            }) : Promise.resolve({
                isBlocked: !1,
                isFlagged: !1
            })
        }
    },
    41402: function() {}
}]);
