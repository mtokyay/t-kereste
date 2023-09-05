"use strict";
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 1871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Section)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(124);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__(4628);
// EXTERNAL MODULE: external "@material-ui/core/utils/capitalize"
var capitalize_ = __webpack_require__(7608);
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize_);
;// CONCATENATED MODULE: ./src/components/BackgroundImage.js



const useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            content: "",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            zIndex: 0
        }
    }));
function BackgroundImage(props) {
    const classes = useStyles();
    const { image , opacity , ...otherProps } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.root,
        style: {
            backgroundImage: `url(${image})`,
            opacity: opacity
        },
        ...otherProps
    });
}
/* harmony default export */ const components_BackgroundImage = (BackgroundImage);

;// CONCATENATED MODULE: ./src/components/Section.js







const Section_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            position: "relative",
            // Ensure child <Container> is above background
            // image (if one is set with the bgImage prop).
            "& > .MuiContainer-root": {
                position: "relative"
            }
        },
        // Create color classes that set background color and determine
        // text color and dividing border automatically based on background color.
        // Adds the keys colorDefault, colorLight, etc
        ...[
            [
                "default",
                theme.palette.background.default
            ],
            [
                "light",
                (0,colorManipulator_.emphasize)(theme.palette.background.default, 0.03)
            ],
            [
                "primary",
                theme.palette.primary.main
            ],
            [
                "secondary",
                theme.palette.secondary.main
            ], 
        ].reduce((acc, [name, value])=>{
            acc[`color${capitalize_default()(name)}`] = {
                backgroundColor: value,
                // Ensure text is legible on background
                color: theme.palette.getContrastText(value),
                // Sibling selector that adds a top border if section above
                // has the same color class.
                // We use emphasize to compute border based on background color
                // and make sure it's always lightly visible.
                [`& + &`]: {
                    borderTop: `1px solid ${(0,colorManipulator_.emphasize)(value, 0.09)}`
                }
            };
            return acc;
        }, {}),
        colorInherit: {
            color: "inherit"
        },
        colorTransparent: {
            backgroundColor: "transparent",
            color: "inherit"
        }
    }));
function Section(props) {
    const classes = Section_useStyles();
    const { bgColor ="default" , bgImage , bgImageOpacity , size ="normal" , className , children , ...otherProps } = props;
    // Get MUI responsize size object based
    // on size prop (normal, medium, large, auto)
    const verticalPadding = {
        normal: {
            xs: 6
        },
        medium: {
            xs: 6,
            sm: 10
        },
        large: {
            xs: 6,
            sm: 20
        },
        auto: 0
    }[size];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        component: "section",
        py: verticalPadding,
        className: classes.root + ` ${classes[`color${capitalize_default()(bgColor)}`]}` + (className ? ` ${className}` : ""),
        ...otherProps,
        children: [
            bgImage && /*#__PURE__*/ jsx_runtime_.jsx(components_BackgroundImage, {
                image: bgImage,
                opacity: bgImageOpacity
            }),
            props.children
        ]
    });
}
/* harmony default export */ const components_Section = (Section);


/***/ })

};
;