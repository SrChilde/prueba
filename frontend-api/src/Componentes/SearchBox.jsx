function SearchBox({ value, onChange }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <input
        type="text"
        placeholder="Buscar servicio..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '14px',
          border: '1px solid var(--border-gray)',
          borderRadius: '6px',
          backgroundColor: 'var(--white)',
          color: 'var(--black)',
          transition: 'all 0.3s ease',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--primary-blue)';
          e.target.style.boxShadow = '0 0 0 3px var(--light-blue)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--border-gray)';
          e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }}
      />
    </div>
  );
}
export default SearchBox;