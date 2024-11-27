import admin from "firebase-admin";

import serviceAccount from "@/service/configs/serviceAccountKey.json";

if (!admin.apps.length) {
  console.log("Inicializando Firebase Admin...");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  console.log("Firebase Admin já inicializado.");
}

export const verifyIdToken = async (token: string) => {
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (err) {
    console.error("Erro ao verificar ID Token:", err);
    throw new Error("Token inválido");
  }
};
