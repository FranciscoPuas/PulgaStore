document.addEventListener("DOMContentLoaded", () => {
  const formContacto = document.getElementById("formContacto");

  formContacto.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const fileContent = `
Información de Contacto:
-----------------------
Nombre: ${nombre}
Número de Teléfono: ${telefono}
Correo Electrónico: ${email}
Mensaje:
${mensaje}
        `.trim();

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "contacto_pulga_store.txt";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    formContacto.reset();

    alert("¡Tu mensaje ha sido enviado y el archivo TXT ha sido generado!");
  });
});
