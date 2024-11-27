import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from "firebase/auth";
import nookies from "nookies";
import { auth } from "@/service/firebaseConfig";

export async function sign(email: string, password: string): Promise<void> {
  try {
    const userCredential = await firebaseSignInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await userCredential.user?.getIdToken();

    if (token) {
      nookies.set(undefined, "firebaseAuthToken", token, {
        maxAge: 30 * 24 * 60 * 60, // 30 dias
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
    }
  } catch (error: any) {
    if (error.code) {
      throw new Error(`Código de erro: ${error.code} - ${error.message}`);
    } else {
      throw new Error("Erro desconhecido ao autenticar");
    }
  }
}

export function signOut(): void {
  auth
    .signOut()
    .then(() => {
      nookies.destroy(undefined, "firebaseAuthToken");
    })
    .catch((error) => {
      console.error("Erro ao sair:", error);
    });
}
