/* SISTEMA INTEGRADO DE SANIDAD (SIS)
   Módulo: Control del formulario
*/

// 1. IMPORTACIONES
import { iniciarSesion } from "./authService.js";

// 2. ELEMENTOS DEL HTML
const formulario = document.getElementById("formularioLogin");
const mensaje = document.getElementById("mensaje");

// 3. INICIO DE SESIÓN
formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    // Obtener datos del formulario
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;

    // Autenticación
    try {
        await iniciarSesion(correo, contrasena);
        mensaje.textContent = "Inicio de sesión correcto";
    } catch (error) {
        console.error("Error de autenticación:", error.code);
        mensaje.textContent = "No fue posible iniciar sesión. Verifica tus datos.";
    }
});
