// MÓDULO: AUTENTICACIÓN DE USUARIOS

// Importaciones
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

// Función para iniciar sesión
export async function iniciarSesion(correo, contrasena) {
    return await signInWithEmailAndPassword(
        auth,
        correo,
        contrasena
    );
}
