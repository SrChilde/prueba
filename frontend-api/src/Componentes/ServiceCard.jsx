function ServiceCard({ servicio, onEdit }) {
  return (
    <div style={{
      backgroundColor: 'var(--white)',
      border: '1px solid var(--border-gray)',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 86, 179, 0.15)';
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = 'var(--primary-blue)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border-gray)';
    }}
    >
      <h3 style={{ color: 'var(--primary-blue)', marginTop: 0 }}>{servicio.nombre}</h3>
      <p style={{ color: 'var(--dark-gray)', marginBottom: 0 }}>{servicio.descripcion}</p>
      <button onClick={() => onEdit(servicio)}>Editar</button>
    </div>
  );
}
export default ServiceCard;