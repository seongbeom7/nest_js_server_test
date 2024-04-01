import 'dotenv/config';

var admin = require("firebase-admin");

const serviceAccountKey = process.env.FIREBASE_ACCOUNT_KEY_PATH;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    databaseURL: process.env.DATABASE_URL
});

export const fbDB = admin.database();