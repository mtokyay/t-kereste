"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 4983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2705);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3266);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7943);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(898);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(124);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2098);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4104);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1871);
/* harmony import */ var components_SectionHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1445);












const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.makeStyles)((theme)=>({
        card: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
        },
        avatarWrapper: {
            display: "flex",
            justifyContent: "center"
        },
        avatar: {
            width: theme.spacing(15),
            height: theme.spacing(15)
        }
    }));
function TeamBiosSection(props) {
    const classes = useStyles();
    const items = [
        {
            avatar: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/g%C3%BCvenli+al%C4%B1%C5%9Fveri%C5%9F+icon-kereste-web+-.png",
            name: "G\xfcvenli Alışveriş",
            role: "",
            bio: ""
        },
        {
            avatar: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/telefon+ile+sipari%C5%9F+web++icon+-.png",
            name: "Telefon ile Sipariş",
            role: "0533 727 80 34",
            bio: ""
        },
        {
            avatar: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/kaliteli+hizmet+icon-kereste+web++-.png",
            name: "Kaliteli Hizmet",
            role: "",
            bio: ""
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        bgColor: props.bgColor,
        size: props.size,
        bgImage: props.bgImage,
        bgImageOpacity: props.bgImageOpacity,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SectionHeader__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    title: props.title,
                    subtitle: props.subtitle,
                    size: 4,
                    textAlign: "center"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                    container: true,
                    justifyContent: "center",
                    spacing: 4,
                    children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
                            item: true,
                            xs: 12,
                            sm: 6,
                            md: 4,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: classes.card,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            className: classes.avatarWrapper,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                src: item.avatar,
                                                alt: item.name,
                                                className: classes.avatar
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            textAlign: "center",
                                            pt: 3,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    variant: "body2",
                                                    component: "p",
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    variant: "body2",
                                                    color: "textSecondary",
                                                    component: "p",
                                                    children: item.role
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    mt: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        variant: "body1",
                                                        component: "p",
                                                        children: item.bio
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, index))
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamBiosSection);


/***/ })

};
;