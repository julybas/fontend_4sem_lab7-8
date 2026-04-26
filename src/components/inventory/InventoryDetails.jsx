const InventoryDetails = ({ item }) => {
  if (!item) return <p>Дані про товар відсутні.</p>;

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1", minWidth: "300px" }}>
        <img
          src={item.photo_url}
          alt={item.inventory_name}
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>
      <div style={{ flex: "1.5", minWidth: "300px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          {item.inventory_name}
        </h2>
        <p style={{ color: "#666", fontSize: "1.1rem", lineHeight: "1.6" }}>
          <strong>Опис:</strong>
          <br />
          {item.description || "Опис для цього товару ще не додано."}
        </p>
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <small>ID товару: {item.id}</small>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
