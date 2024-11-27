import * as admin from "firebase-admin";
import * as dotenv from "dotenv";

dotenv.config();

if (!admin.apps.length) {
  try {
    const serviceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    };

    if (
      !serviceAccount.projectId ||
      !serviceAccount.privateKey ||
      !serviceAccount.clientEmail
    ) {
      throw new Error("Faltando credenciais do Firebase.");
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    console.error("Erro ao inicializar o Firebase Admin:", error);
    throw new Error("Erro ao inicializar o Firebase Admin SDK.");
  }
} else {
  console.log("Firebase Admin já inicializado.");
}
