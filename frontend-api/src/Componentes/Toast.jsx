function Toast({ type = "info", text = "", onClose }) {
  if (!text) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "#d4edda";
      case "error":
        return "#f8d7da";
      case "warning":
        return "#fff3cd";
      default:
        return "#e7f3ff";
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case "success":
        return "#28a745";
      case "error":
        return "#dc3545";
      case "warning":
        return "#ffc107";
      default:
        return "var(--primary-blue)";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "success":
        return "#155724";
      case "error":
        return "#721c24";
      case "warning":
        return "#856404";
      default:
        return "var(--dark-blue)";
    }
  };

  return (
    <div style={{
      margin: "16px 0",
      padding: "16px",
      border: `2px solid ${getBorderColor()}`,
      borderRadius: "6px",
      backgroundColor: getBackgroundColor(),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      animation: "slideIn 0.3s ease",
    }}>
      <strong style={{ color: getTextColor() }}>{type.toUpperCase()}:</strong>
      <span style={{ color: getTextColor(), flex: 1, marginLeft: "12px" }}>{text}</span>
      <button onClick={onClose} style={{
        backgroundColor: "transparent",
        border: "none",
        color: getTextColor(),
        fontSize: "18px",
        cursor: "pointer",
        padding: "0 8px",
        fontWeight: "bold",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => e.target.style.opacity = "0.6"}
      onMouseLeave={(e) => e.target.style.opacity = "1"}
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;