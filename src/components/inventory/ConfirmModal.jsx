const ConfirmModal = ({ isOpen, onCancel, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(206, 206, 214, 0.95)",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
          color: "black",
        }}
      >
        <h3>Підтвердження дії</h3>
        <p>{message || "Ви впевнені?"}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <button
            onClick={onConfirm}
            style={{
              background: "red",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Видалити
          </button>
          <button
            onClick={onCancel}
            style={{
              background: "gray",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
