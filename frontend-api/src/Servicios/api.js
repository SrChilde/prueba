// Prueba forzando la URL real para descartar errores de variables
const BASE_URL = "https://serviciosti.onrender.com/api/servicios";

export async function getServicios() {
  try {
    console.log("Intentando conectar a:", BASE_URL);
    const res = await fetch(BASE_URL);
    
    if (!res.ok) {
        throw new Error(`Error del servidor: ${res.status}`);
    }
    
    const data = await res.json();
    console.log("Datos recibidos:", data);
    return data;
  } catch (error) {
    console.error("Error detallado en fetch:", error);
    throw error;
  }
}

// ... mantén tus otras funciones (crear, actualizar) usando la misma BASE_URL

export async function crearServicio(payload) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Error creando servicio");
  }

  return res.json();
}

export async function actualizarServicio(id, payload) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Error actualizando servicio");
  }

  return res.json();
}