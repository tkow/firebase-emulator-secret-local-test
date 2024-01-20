"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = void 0;
/* eslint-disable turbo/no-undeclared-env-vars */
const params_1 = require("firebase-functions/params");
const v2_1 = require("firebase-functions/v2");
const tasks_1 = require("firebase-functions/v2/tasks");
// NOTE: if you use secret variable names which not contains `-` and
// prepare .env.local contains them and can overried them with .secret.local files
// in `dist` folder which deployed to emulator, it should work like a next line.
// const secretValue = defineSecret("FOO_BAR");
const secretValue = (0, params_1.defineSecret)("demo-project-secret");
exports.example = (0, tasks_1.onTaskDispatched)({
    memory: '512MiB',
    cpu: 1,
    maxInstances: 10,
    minInstances: 0,
    region: "asia-northeast1",
    secrets: [secretValue.name],
}, (req) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("request start");
    try {
        console.log(secretValue.value());
    }
    catch (e) {
        throw new v2_1.https.HttpsError("failed-precondition", "Encrption failed.");
    }
}));
