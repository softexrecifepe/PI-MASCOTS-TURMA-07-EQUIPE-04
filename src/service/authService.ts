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
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
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
