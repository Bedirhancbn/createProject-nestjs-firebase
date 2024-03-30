import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private db: admin.database.Database;
  serviceAccount = require('../../firebase_service_account.json');

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccount),
      databaseURL: this.serviceAccount.databaseURL,
    });
    this.db = admin.database();
  }

  async findAll(collection: string): Promise<any[]> {
    const ref = this.db.ref(collection);
    const snapshot = await ref.once('value');
    const data = snapshot.val();
    if (!data) {
      return [];
    }
    const result = [];
    Object.keys(data).forEach((key) => {
      const item = data[key];
      item.id = key;
      result.push(item);
    });
    return result;
  }

  async create(collection: string, data: any): Promise<any> {
    const ref = this.db.ref(collection);
    const newRef = ref.push();
    await newRef.set(data);
    return newRef.key;
  }
}
