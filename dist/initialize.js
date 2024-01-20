"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const initialize = () => {
    // TODO https://firebase.google.com/docs/functions/beta-v1-diff
    if (!(0, app_1.getApps)().length) {
        (0, app_1.initializeApp)();
        try {
            (0, firestore_1.getFirestore)().settings({
                ignoreUndefinedProperties: true,
            });
        }
        catch (e) {
            console.warn(e);
        }
    }
};
exports.initialize = initialize;
(0, exports.initialize)();
