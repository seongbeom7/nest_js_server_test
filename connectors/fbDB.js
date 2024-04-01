"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fbDB = void 0;
require("dotenv/config");
var admin = require("firebase-admin");
const serviceAccountKey = process.env.FIREBASE_ACCOUNT_KEY_PATH;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    databaseURL: process.env.DATABASE_URL
});
exports.fbDB = admin.database();
