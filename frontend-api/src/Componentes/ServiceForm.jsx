import { useState } from "react";

function ServiceForm({ onGuardar, loading }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    // Validación frontend
    if (!nombre.trim() || !descripcion.trim()) {
      setMsg("Nombre y descripción son obligatorios.");
      return;
    }
    if (nombre.trim().length < 3) {
      setMsg("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    // Ejecuta guardado (Home maneja el try/catch)
    const ok = await onGuardar({
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
    });

    // Si Home devuelve true, limpiamos
    if (ok) {
      setNombre("");
      setDescripcion("");
    }
  };

  return (
    <form onSubmit={submit} style={{
      backgroundColor: 'var(--white)',
      border: '1px solid var(--border-gray)',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    }}>
      <h3 style={{ color: 'var(--primary-blue)', marginTop: 0 }}>Nuevo Servicio</h3>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            border: '1px solid var(--border-gray)',
            borderRadius: '6px',
            backgroundColor: loading ? '#f9f9f9' : 'var(--white)',
            color: 'var(--black)',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => {
            if (!loading) {
              e.target.style.borderColor = 'var(--primary-blue)';
              e.target.style.boxShadow = '0 0 0 3px var(--light-blue)';
            }
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--border-gray)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            border: '1px solid var(--border-gray)',
            borderRadius: '6px',
            backgroundColor: loading ? '#f9f9f9' : 'var(--white)',
            color: 'var(--black)',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => {
            if (!loading) {
              e.target.style.borderColor = 'var(--primary-blue)';
              e.target.style.boxShadow = '0 0 0 3px var(--light-blue)';
            }
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--border-gray)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>

      <button type="submit" disabled={loading} style={{
        width: '100%',
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: '600',
        border: 'none',
        borderRadius: '6px',
        backgroundColor: loading ? 'var(--medium-gray)' : 'var(--primary-blue)',
        color: 'var(--white)',
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 4px rgba(0, 86, 179, 0.3)',
      }}
      onMouseEnter={(e) => {
        if (!loading) {
          e.target.style.backgroundColor = 'var(--dark-blue)';
          e.target.style.boxShadow = '0 4px 8px rgba(0, 86, 179, 0.4)';
        }
      }}
      onMouseLeave={(e) => {
        if (!loading) {
          e.target.style.backgroundColor = 'var(--primary-blue)';
          e.target.style.boxShadow = '0 2px 4px rgba(0, 86, 179, 0.3)';
        }
      }}
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>

      {msg && <p style={{
        color: 'var(--error)',
        backgroundColor: '#ffe7e7',
        padding: '12px',
        borderRadius: '6px',
        marginTop: '16px',
        marginBottom: 0,
      }}>{msg}</p>}
    </form>
  );
}

export default ServiceForm;