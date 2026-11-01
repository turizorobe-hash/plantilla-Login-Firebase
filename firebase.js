/* SISTEMA INTEGRADO DE SANIDAD (SIS)
   Módulo: Configuración de Firebase
*/

// 1. IMPORTACIONES
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

// 2. CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// 3. INICIALIZACIÓN
const app = initializeApp(firebaseConfig);

// 4. AUTENTICACIÓN
export const auth = getAuth(app);
