import { Link } from "react-router-dom";

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
      <p style={{ color: 'var(--dark-gray)', marginBottom: '15px' }}>{servicio.descripcion}</p>
      
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Link to={`/servicios/${servicio.id}`} style={{
          color: 'var(--primary-blue)',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--primary-blue-dark)';
          e.currentTarget.style.textDecoration = 'underline';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--primary-blue)';
          e.currentTarget.style.textDecoration = 'none';
        }}
        >
          Ver detalle
        </Link>

        {onEdit && (
          <button onClick={() => onEdit(servicio)} style={{
            marginLeft: '10px',
            backgroundColor: 'var(--primary-blue)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-blue-dark)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
          }}
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}
export default ServiceCard;