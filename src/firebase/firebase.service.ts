import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import 'dotenv/config';

@Injectable()
export class FirebaseService {
    private readonly db: admin.database.Database;

    constructor() {
        // Firebase Admin SDK 초기화
        const serviceAccount = require(process.env.FIREBASE_ACCOUNT_KEY_PATH);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.DATABASE_URL
        });
        // Realtime Database에 연결
        this.db = admin.database();
    }

    // Firebase 서비스에서 사용할 메서드들을 정의할 수 있음
    // 예: 데이터 추가, 읽기, 업데이트, 삭제 등
    getDatabase(): admin.database.Database{
        return  this.db;
    }
}