"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 9440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function Meta(props) {
    const { children , ...customPageMeta } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    // Meta values that are the same across all pages
    const globalMeta = {
        // Site name
        siteName: "Tokyay Kereste | Balıkesir G\xf6nen'de inşaatlık kereste, doğramalık kereste, ithal kereste, ithal lambri, k\xfct\xfck ev, ahşap ev, bunglov, tinyhouse",
        // Your production domain (example: https://tokyaykereste.com.tr)
        domain: "https://tokyaykereste.com.tr",
        // Your Twitter handle (example: @divjoy)
        twitterHandle: ""
    };
    // Default meta values for current page (override with props)
    const defaultPageMeta = {
        // Page title
        title: "Tokyay Kereste | Balıkesir G\xf6nen Kereste",
        // Page description
        description: "Tokyay Kereste, inşaatlık kereste, doğramalık kereste, lambri, deck tahtası, tinyhouse, k\xfct\xfck ev, pergola, \xfc\xe7gen ev, bungalov",
        // Social share image (create this file in /public/images/)
        image: "/images/social.png",
        // Page type (see https://ogp.me/#types)
        type: "website"
    };
    // Construct meta object from global, default, and custom meta
    const meta = {
        ...globalMeta,
        ...defaultPageMeta,
        ...customPageMeta
    };
    // Note: Each tag should have a unique `key` so that they are de-deduped if other
    // `Meta` components are rendered on the same page or within nested components.
    // prettier-ignore
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: meta.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                content: meta.description,
                name: "description"
            }, "description"),
            meta.domain && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: `${meta.domain}${router.asPath}`
            }, "canonical"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: meta.title
            }, "og-title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: meta.description
            }, "og-description"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: meta.siteName
            }, "og-site-name"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }, "og-type"),
            meta.domain && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${meta.domain}${router.asPath}`
            }, "og-url"),
            meta.domain && meta.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: `${meta.domain}${meta.image}`
            }, "og-image"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: meta.title
            }, "twitter-title"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: meta.description
            }, "twitter-description"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, "twitter-card"),
            meta.twitterHandle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:site",
                content: meta.twitterHandle
            }, "twitter-site"),
            meta.domain && meta.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: `${meta.domain}${meta.image}`
            }, "twitter-image")
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meta);


/***/ })

};
;