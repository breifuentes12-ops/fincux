// ==========================================================
// FINCUX - Validación del formulario de contacto
// El proyecto no tiene backend: este script SOLO valida los campos.
// No envía ni guarda nada, y el mensaje de resultado lo dice con claridad.
// También precarga el asunto si llega en la URL (?asunto=...), por ejemplo
// desde el botón "Contactar al productor" del detalle de producto.
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successMessage = document.getElementById("formSuccess");

  // Reglas de validación de cada campo
  const fields = {
    nombre: {
      input: document.getElementById("nombre"),
      error: document.getElementById("error-nombre"),
      validate: function (value) {
        if (value.trim().length === 0) return "Escribe tu nombre completo.";
        if (value.trim().length < 3) return "El nombre es demasiado corto.";
        return "";
      },
    },
    correo: {
      input: document.getElementById("correo"),
      error: document.getElementById("error-correo"),
      validate: function (value) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim().length === 0) return "Escribe tu correo electrónico.";
        if (!pattern.test(value.trim())) return "Ese correo no parece válido.";
        return "";
      },
    },
    telefono: {
      input: document.getElementById("telefono"),
      error: document.getElementById("error-telefono"),
      validate: function (value) {
        const digits = value.replace(/\D/g, "");
        if (digits.length === 0) return "Escribe tu número de teléfono.";
        if (digits.length < 7) return "El teléfono parece incompleto.";
        return "";
      },
    },
    asunto: {
      input: document.getElementById("asunto"),
      error: document.getElementById("error-asunto"),
      validate: function (value) {
        if (value.trim().length === 0) return "Cuéntanos brevemente el asunto.";
        return "";
      },
    },
    mensaje: {
      input: document.getElementById("mensaje"),
      error: document.getElementById("error-mensaje"),
      validate: function (value) {
        if (value.trim().length === 0) return "Escribe tu mensaje.";
        if (value.trim().length < 10) return "Cuéntanos un poco más (mínimo 10 caracteres).";
        return "";
      },
    },
  };

  // Valida un campo individual y muestra/oculta su mensaje de error
  function validateField(key) {
    const field = fields[key];
    const message = field.validate(field.input.value);

    if (message) {
      field.error.textContent = message;
      field.input.classList.add("invalid");
      field.input.setAttribute("aria-invalid", "true");
    } else {
      field.error.textContent = "";
      field.input.classList.remove("invalid");
      field.input.removeAttribute("aria-invalid");
    }
    return message === "";
  }

  // Valida en tiempo real cuando el usuario sale de un campo
  Object.keys(fields).forEach(function (key) {
    fields[key].input.addEventListener("blur", function () {
      validateField(key);
    });
  });

  // Precargar el asunto desde la URL (solo texto, se asigna como valor del campo)
  const asuntoParam = new URLSearchParams(window.location.search).get("asunto");
  if (asuntoParam) {
    fields.asunto.input.value = asuntoParam.slice(0, 120);
  }

  // Al enviar, valida todos los campos a la vez
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstInvalid = null;
    Object.keys(fields).forEach(function (key) {
      if (!validateField(key) && !firstInvalid) {
        firstInvalid = fields[key].input;
      }
    });

    if (firstInvalid) {
      successMessage.hidden = true;
      firstInvalid.focus();
      return;
    }

    // Todo es válido, pero NO se envía nada: no hay servidor que reciba los datos.
    // No se limpia el formulario para que la persona pueda copiar su mensaje.
    successMessage.hidden = false;
  });

  // Si la persona vuelve a editar, se oculta el aviso anterior
  form.addEventListener("input", function () {
    successMessage.hidden = true;
  });
});