"use strict";
(() => {
var exports = {};
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 1236:
/***/ ((module) => {

module.exports = require("mailchimp-api-v3");

/***/ }),

/***/ 8017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Mailchimp = __webpack_require__(1236);
const mailchimpClient = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    const body = req.body;
    return mailchimpClient.request({
        method: "POST",
        path: "/lists/" + audienceId + "/members",
        body: {
            email_address: body.email,
            // Set status to "subscribed" to disable double-opt-in
            status: "pending"
        }
    }).then((result)=>{
        res.send({
            status: "success"
        });
    }).catch((error)=>{
        console.log("newsletter error", error);
        // If error due to email already in list then return success response
        // rather than an error (the user doesn't need to know).
        if (error.title === "Member Exists") {
            return res.send({
                status: "success"
            });
        }
        res.send({
            status: "error"
        });
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8017));
module.exports = __webpack_exports__;

})();