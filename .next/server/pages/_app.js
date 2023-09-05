(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@material-ui/core/AppBar"
const AppBar_namespaceObject = require("@material-ui/core/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__(2705);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "@material-ui/core/Toolbar"
const Toolbar_namespaceObject = require("@material-ui/core/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@material-ui/core/Hidden"
const Hidden_namespaceObject = require("@material-ui/core/Hidden");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/IconButton"
const IconButton_namespaceObject = require("@material-ui/core/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
const Menu_namespaceObject = require("@material-ui/icons/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@material-ui/icons/NightsStay"
const NightsStay_namespaceObject = require("@material-ui/icons/NightsStay");
var NightsStay_default = /*#__PURE__*/__webpack_require__.n(NightsStay_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/WbSunny"
const WbSunny_namespaceObject = require("@material-ui/icons/WbSunny");
var WbSunny_default = /*#__PURE__*/__webpack_require__.n(WbSunny_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(124);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@material-ui/core/Drawer"
const Drawer_namespaceObject = require("@material-ui/core/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/List"
const List_namespaceObject = require("@material-ui/core/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/ListItem"
const ListItem_namespaceObject = require("@material-ui/core/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/ListItemText"
const ListItemText_namespaceObject = require("@material-ui/core/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: ./src/components/Section.js + 1 modules
var Section = __webpack_require__(1871);
;// CONCATENATED MODULE: external "@material-ui/core/colors"
const colors_namespaceObject = require("@material-ui/core/colors");
;// CONCATENATED MODULE: external "@material-ui/core/CssBaseline"
const CssBaseline_namespaceObject = require("@material-ui/core/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/useMediaQuery"
const useMediaQuery_namespaceObject = require("@material-ui/core/useMediaQuery");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_namespaceObject);
;// CONCATENATED MODULE: external "use-local-storage-state"
const external_use_local_storage_state_namespaceObject = require("use-local-storage-state");
;// CONCATENATED MODULE: ./src/util/theme.js







const themeConfig = {
    // Light theme
    light: {
        palette: {
            type: "light",
            primary: {
                // Use hue from colors or hex
                main: colors_namespaceObject.indigo[500]
            },
            secondary: {
                main: colors_namespaceObject.pink[500]
            },
            background: {
                // Background for <body>
                // and <Section color="default">
                default: "#fff",
                // Background for elevated
                // components (<Card>, etc)
                paper: "#fff"
            }
        }
    },
    // Dark theme
    dark: {
        palette: {
            type: "dark",
            primary: {
                // Same as in light but we could
                // adjust color hue if needed
                main: colors_namespaceObject.indigo[500]
            },
            secondary: {
                main: colors_namespaceObject.pink[500]
            },
            background: {
                default: colors_namespaceObject.grey[900],
                paper: colors_namespaceObject.grey[800]
            }
        }
    },
    // Values for both themes
    common: {
        typography: {
            fontSize: 14,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1200,
                xl: 1920
            }
        },
        // Override component styles
        overrides: {
            // Global styles
            MuiCssBaseline: {
                "@global": {
                    "#__next": {
                        // Flex column that is height
                        // of viewport so that footer
                        // can push self to bottom by
                        // with auto margin-top
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        // Prevent child elements from
                        // shrinking when content
                        // is taller than the screen
                        // (quirk of flex parent)
                        "& > *": {
                            flexShrink: 0
                        }
                    }
                }
            }
        }
    }
};
function getTheme(name) {
    // Create MUI theme from themeConfig
    return (0,styles_.createTheme)({
        ...themeConfig[name],
        // Merge in common values
        ...themeConfig.common,
        overrides: {
            // Merge overrides
            ...themeConfig[name] && themeConfig[name].overrides,
            ...themeConfig.common && themeConfig.common.overrides
        }
    });
}
// Create a local storage hook for dark mode preference
const useDarkModeStorage = (0,external_use_local_storage_state_namespaceObject.createLocalStorageStateHook)("isDarkMode");
const ThemeProvider = (props)=>{
    // Get system dark mode preference
    const prefersDarkMode = useMediaQuery_default()("(prefers-color-scheme: dark)");
    // Get stored dark mode preference
    let [isDarkModeStored, setIsDarkModeStored] = useDarkModeStorage();
    // Only used stored preference after hydration to avoid client/server mismatch
    const hasHydrated = useHasHydrated();
    if (!hasHydrated) {
        isDarkModeStored = undefined;
    }
    // Use stored dark mode with fallback to system preference
    const isDarkMode = isDarkModeStored === undefined ? prefersDarkMode : isDarkModeStored;
    // Get MUI theme object
    const themeName = isDarkMode ? "dark" : "light";
    const theme = getTheme(themeName);
    // Add toggle function to theme object
    theme.palette.toggle = ()=>setIsDarkModeStored((value)=>!value);
    // Since Next.js server-renders we need to remove
    // the server-side injected CSS on mount so the
    // client can take over with managing styles.
    (0,external_react_.useEffect)(()=>{
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            props.children
        ]
    });
};
// Hook for detecting dark mode and toggling between light/dark
// More convenient than reading theme.palette.type from useTheme
function useDarkMode() {
    // Get current Material UI theme
    const theme = (0,styles_.useTheme)();
    // Check if it's the dark theme
    const isDarkMode = theme.palette.type === "dark";
    // Return object containing dark mode value and toggle function
    return {
        value: isDarkMode,
        toggle: theme.palette.toggle
    };
}
// Hook that tells us when hydration is complete so that we can
// safely use the value returned by useDarkModeStorage without
// risking a mismatch between server and client.
// This will hopefully be built-in to the use-local-storage-state library soon
// See https://github.com/astoilkov/use-local-storage-state/issues/23
function useHasHydrated() {
    const { 0: hasHydrated , 1: setHasHydrated  } = (0,external_react_.useState)(false);
    const isServer = "undefined" === "undefined";
    // To reduce flicker, we use `useLayoutEffect` so that app re-renders before
    // before React has painted to the browser.
    // React throws a warning when using useLayoutEffect on the server so
    // we use useEffect on the server (no-op) and useLayoutEffect in the browser.
    const useEffectFn = isServer ? external_react_.useEffect : external_react_.useLayoutEffect;
    useEffectFn(()=>{
        setHasHydrated(true);
    }, []);
    return hasHydrated;
}

;// CONCATENATED MODULE: ./src/components/Navbar.js




















const useStyles = (0,styles_.makeStyles)((theme)=>({
        logo: {
            height: 28,
            marginRight: theme.spacing(2)
        },
        drawerList: {
            width: 250
        },
        spacer: {
            flexGrow: 1
        }
    }));
function Navbar(props) {
    const classes = useStyles();
    const darkMode = useDarkMode();
    const { 0: drawerOpen , 1: setDrawerOpen  } = (0,external_react_.useState)(false);
    const { 0: menuState , 1: setMenuState  } = (0,external_react_.useState)(null);
    // Use inverted logo if specified
    // and we are in dark mode
    const logo = props.logoInverted && darkMode.value ? props.logoInverted : props.logo;
    const handleOpenMenu = (event, id)=>{
        // Store clicked element (to anchor the menu to)
        // and the menu id so we can tell which menu is open.
        setMenuState({
            anchor: event.currentTarget,
            id
        });
    };
    const handleCloseMenu = ()=>{
        setMenuState(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        bgColor: props.color,
        size: "auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                color: "transparent",
                elevation: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    disableGutters: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: logo,
                                        alt: "Logo",
                                        className: classes.logo
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.spacer
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                                mdUp: true,
                                implementation: "css",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    onClick: ()=>{
                                        setDrawerOpen(true);
                                    },
                                    color: "inherit",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Hidden_default()), {
                                smDown: true,
                                implementation: "css",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/urunlerimiz",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            component: "a",
                                            color: "inherit",
                                            children: "\xfcr\xfcnlerimiz"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/hakkimizda",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            component: "a",
                                            color: "inherit",
                                            children: "hakkımızda"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/sss",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            component: "a",
                                            color: "inherit",
                                            children: "sss"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/iletisim",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            component: "a",
                                            color: "inherit",
                                            children: "iletişim"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://tokyaykereste.com",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            component: "a",
                                            color: "inherit",
                                            target: "_blank",
                                            children: "Ahşap Boya Market"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((IconButton_default()), {
                                        color: "inherit",
                                        onClick: darkMode.toggle,
                                        style: {
                                            opacity: 0.6
                                        },
                                        children: [
                                            darkMode.value && /*#__PURE__*/ jsx_runtime_.jsx((NightsStay_default()), {}),
                                            !darkMode.value && /*#__PURE__*/ jsx_runtime_.jsx((WbSunny_default()), {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        component: "span",
                                        ml: 1
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                anchor: "right",
                open: drawerOpen,
                onClose: ()=>setDrawerOpen(false),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                    className: classes.drawerList,
                    onClick: ()=>setDrawerOpen(false),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/urunlerimiz",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                component: "a",
                                button: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    children: "\xdcr\xfcnlerimiz"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/hakkimizda",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                component: "a",
                                button: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    children: "Hakkımızda"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/sss",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                component: "a",
                                button: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    children: "SSS"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/iletisim",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                component: "a",
                                button: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    children: "İletişim"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://tokyaykereste.com",
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                component: "a",
                                button: true,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    children: "Ahşap Boya Market"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((IconButton_default()), {
                                color: "inherit",
                                onClick: darkMode.toggle,
                                style: {
                                    opacity: 0.6
                                },
                                children: [
                                    darkMode.value && /*#__PURE__*/ jsx_runtime_.jsx((NightsStay_default()), {}),
                                    !darkMode.value && /*#__PURE__*/ jsx_runtime_.jsx((WbSunny_default()), {})
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(3266);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(4104);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@material-ui/core/Link"
const Link_namespaceObject = require("@material-ui/core/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/ListItemIcon"
const ListItemIcon_namespaceObject = require("@material-ui/core/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Footer.js















const Footer_useStyles = (0,styles_.makeStyles)((theme)=>({
        sticky: {
            marginTop: "auto"
        },
        brand: {
            display: "block",
            height: 32
        },
        listItem: {
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 12,
            paddingRight: 12
        },
        listItemTextHeader: {
            fontWeight: "bold"
        },
        socialIcon: {
            minWidth: 30
        },
        legal: {
            marginTop: theme.spacing(3),
            fontSize: "0.875rem",
            opacity: 0.6,
            "& a": {
                color: "inherit",
                marginLeft: "0.8rem"
            }
        }
    }));
function Footer(props) {
    const classes = Footer_useStyles();
    const darkMode = useDarkMode();
    // Use inverted logo if specified
    // and we are in dark mode
    const logo = props.logoInverted && darkMode.value ? props.logoInverted : props.logo;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        bgColor: props.bgColor,
        size: props.size,
        bgImage: props.bgImage,
        bgImageOpacity: props.bgImageOpacity,
        className: props.sticky && classes.sticky,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                justifyContent: "space-between",
                spacing: 4,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: logo,
                                        alt: "Logo",
                                        className: classes.brand
                                    })
                                })
                            }),
                            props.description && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                mt: 3,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "p",
                                    children: props.description
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.legal,
                                children: [
                                    props.copyright,
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/legal/terms-of-service",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            children: "Terms"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/legal/privacy-policy",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                            children: "Privacy"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 4,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        disablePadding: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.listItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "overline",
                                                    className: classes.listItemTextHeader,
                                                    children: "Firmamız"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/hakkimizda",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    component: "a",
                                                    button: true,
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                        children: "Hakkımızda"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/sss",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    component: "a",
                                                    button: true,
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                        children: "SSS"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/iletisim",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    component: "a",
                                                    button: true,
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                        children: "İletişim"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://tokyaykereste.com",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    component: "a",
                                                    button: true,
                                                    target: "_blank",
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                        children: "Ahşap Boya Market"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        disablePadding: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.listItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "overline",
                                                    className: classes.listItemTextHeader,
                                                    children: "Social"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                button: true,
                                                component: "a",
                                                href: "https://www.facebook.com/tokyaykereste",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: classes.listItem,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                        className: classes.socialIcon,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "https://uploads.divjoy.com/icon-facebook.svg",
                                                            alt: "Facebook"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                        children: "Facebook"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                                button: true,
                                                component: "a",
                                                href: "https://www.instagram.com/tokyaykereste/",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: classes.listItem,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                        className: classes.socialIcon,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "https://uploads.divjoy.com/icon-instagram.svg",
                                                            alt: "Facebook"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                        children: "Instagram"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: external "analytics"
const external_analytics_namespaceObject = require("analytics");
var external_analytics_default = /*#__PURE__*/__webpack_require__.n(external_analytics_namespaceObject);
;// CONCATENATED MODULE: external "@analytics/google-analytics"
const google_analytics_namespaceObject = require("@analytics/google-analytics");
var google_analytics_default = /*#__PURE__*/__webpack_require__.n(google_analytics_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/util/analytics.js



// Initialize analytics and plugins
// Documentation: https://getanalytics.io
const analytics = external_analytics_default()({
    debug: "production" !== "production",
    plugins: [
        google_analytics_default()({
            measurementIds: [
                "G-2MS4Q043QC"
            ]
        }), 
    ]
});
// Track initial pageview
if (false) {}
// Track pageview on route change
router_default().events.on("routeChangeComplete", (url)=>{
    analytics.page();
});
/* harmony default export */ const util_analytics = ((/* unused pure expression or super */ null && (analytics)));

// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/components/Chat.js


const config = {
    // Crisp website ID
    crispWebsiteId: "adc49333-d26e-4fc3-b7b6-27aaf919441e"
};
function Chat() {
    if (!config.crispWebsiteId) {
        console.warn("Crisp chat is disabled because website ID is not specified");
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(CrispScript, {});
}
function CrispScript() {
    return /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
        id: "crisp-widget",
        strategy: "afterInteractive",
        dangerouslySetInnerHTML: {
            __html: `;
          window.$crisp = [];
          window.CRISP_WEBSITE_ID = "${config.crispWebsiteId}";
          (function () {
            const d = document; 
            const s = d.createElement('script');
            s.src = 'https://client.crisp.chat/l.js';
            s.async = 1;
            d.getElementsByTagName('head')[0].appendChild(s);
          })();
        `
        }
    });
}
/* harmony default export */ const components_Chat = (Chat);

;// CONCATENATED MODULE: ./src/pages/_app.js







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Chat, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                            color: "default",
                            logo: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-.svg",
                            logoInverted: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-beyaz.svg"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                            bgColor: "default",
                            size: "medium",
                            bgImage: "",
                            bgImageOpacity: 1,
                            description: "A short description of what you do here",
                            copyright: `© ${new Date().getFullYear()} Company`,
                            logo: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-.svg",
                            logoInverted: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/tokyaykereste+web+logo-beyaz.svg",
                            sticky: true
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ }),

/***/ 124:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ 2610:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 2705:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ 3266:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 4104:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 8308:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 4628:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ 7608:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/utils/capitalize");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,871], () => (__webpack_exec__(5929)));
module.exports = __webpack_exports__;

})();