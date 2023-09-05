"use strict";
(() => {
var exports = {};
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 4609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _section_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Meta.js
var Meta = __webpack_require__(9440);
;// CONCATENATED MODULE: external "@material-ui/core/Tabs"
const Tabs_namespaceObject = require("@material-ui/core/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Tab"
const Tab_namespaceObject = require("@material-ui/core/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(124);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__(2705);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./src/components/Section.js + 1 modules
var Section = __webpack_require__(1871);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./src/components/LongContent.js



const useStyles = (0,styles_.makeStyles)((theme)=>({
        // Style nested HTML elements so that
        // long-form content doesn't have to use
        // components to match MUI style
        root: {
            ...theme.typography.body1,
            "& h1": {
                ...theme.typography.h4,
                fontWeight: 600
            },
            "& h2": {
                ...theme.typography.h5,
                fontWeight: 600
            },
            "& h3": {
                ...theme.typography.h6,
                fontWeight: 600
            },
            "& a": {
                color: theme.palette.primary.main,
                textDecoration: "none",
                "&:hover": {
                    textDecoration: "underline"
                }
            }
        }
    }));
function LongContent(props) {
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.root,
        children: props.children
    });
}
/* harmony default export */ const components_LongContent = (LongContent);

;// CONCATENATED MODULE: ./src/components/LegalTerms.js



function LegalTerms(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_LongContent, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Terms of Service"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "This document is a placeholder. You should replace this with your own Terms of Service or create one using\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://avodocs.com",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "avodocs.com"
                    }),
                    ",\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://getterms.io",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "getterms.io"
                    }),
                    " ",
                    "or\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://termly.io",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "termly.io"
                    }),
                    ". We've included some example HTML structure below to make adding your content easier ↴"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "These Terms of Service govern your use of ",
                    props.domain,
                    " and any related services provided by ",
                    props.companyName,
                    ". By accessing ",
                    props.domain,
                    ", you agree to abide by these Terms of Service and to comply with all applicable laws and regulations."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "If you do not agree with these Terms of Service, you are prohibited from using or accessing ",
                    props.domain,
                    " and from using any other services we provide. We reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "This policy was last updated on October 5th, 2021."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Limitations of Use"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "By using ",
                    props.domain,
                    ", you warrant on behalf of yourself, your users, and other parties you represent that you will not:"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on the GetTerms.io website."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            "remove any copyright or other proprietary notations from any materials and software on the ",
                            props.domain,
                            " website."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "etc"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Another header"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Another paragraph of text"
            })
        ]
    });
}
/* harmony default export */ const components_LegalTerms = (LegalTerms);

;// CONCATENATED MODULE: ./src/components/LegalPrivacy.js



function LegalPrivacy(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_LongContent, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Privacy Policy"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "This document is a placeholder. You should replace this with your own Privacy Policy or create one using\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://avodocs.com",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "avodocs.com"
                    }),
                    ",\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://getterms.io",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "getterms.io"
                    }),
                    " ",
                    "or\xa0",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://termly.io",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "termly.io"
                    }),
                    ". We've included some example HTML structure below to make adding your content easier ↴"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Your privacy is important to us. It’s our policy to respect your privacy and comply with any applicable law and regulation regarding the personal information we collect about you through this website, ",
                    props.domain,
                    ", and through any associated services and third-party platforms we may use."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "This policy was last updated on October 5th, 2021."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Information we collect"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Personal information is any information about you which can be used to identify you. Any information we collect may be automatically collected (i.e. information automatically sent to us by your devices when you access our services) or voluntarily provided (i.e. information you knowingly and actively provide us)."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Automatically collected information"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Our servers automatically log standard data provided by your web browser when you visit our website. This data may include your device’s IP address, device type, operating system, browser type and version, the pages you visit, the time and date of your visit, time spent on each page, and other details about your visit or device."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Another subheader"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Another paragraph of text"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Another main header"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Another paragraph of text"
            })
        ]
    });
}
/* harmony default export */ const components_LegalPrivacy = (LegalPrivacy);

;// CONCATENATED MODULE: ./src/components/LegalSection.js










function LegalSection(props) {
    const validSections = {
        "terms-of-service": true,
        "privacy-policy": true
    };
    const section = validSections[props.section] ? props.section : "terms-of-service";
    const data = {
        domain: "company.com",
        companyName: "Company"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        bgColor: props.bgColor,
        size: props.size,
        bgImage: props.bgImage,
        bgImageOpacity: props.bgImageOpacity,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                value: section,
                indicatorColor: "primary",
                textColor: "primary",
                centered: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/legal/terms-of-service",
                        passHref: true,
                        value: "terms-of-service",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            component: "a",
                            label: "Terms of Service"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/legal/privacy-policy",
                        passHref: true,
                        value: "privacy-policy",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                            component: "a",
                            label: "Privacy Policy"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                mt: 5,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    children: [
                        section === "terms-of-service" && /*#__PURE__*/ jsx_runtime_.jsx(components_LegalTerms, {
                            ...data
                        }),
                        section === "privacy-policy" && /*#__PURE__*/ jsx_runtime_.jsx(components_LegalPrivacy, {
                            ...data
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_LegalSection = (LegalSection);

;// CONCATENATED MODULE: ./src/pages/legal/[section].js





function LegalPage(props) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: "Legal"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LegalSection, {
                bgColor: "default",
                size: "normal",
                bgImage: "",
                bgImageOpacity: 1,
                section: router.query.section
            }, router.query.section)
        ]
    });
}
// Tell Next.js to export static files for each page
// See https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
const getStaticPaths = ()=>({
        paths: [
            {
                params: {
                    section: "terms-of-service"
                }
            },
            {
                params: {
                    section: "privacy-policy"
                }
            }, 
        ],
        fallback: true
    });
function getStaticProps({ params  }) {
    return {
        props: {}
    };
}
/* harmony default export */ const _section_ = (LegalPage);


/***/ }),

/***/ 124:
/***/ ((module) => {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ 2705:
/***/ ((module) => {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 4628:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ 7608:
/***/ ((module) => {

module.exports = require("@material-ui/core/utils/capitalize");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,871,440], () => (__webpack_exec__(4609)));
module.exports = __webpack_exports__;

})();