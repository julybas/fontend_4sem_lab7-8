const InventoryDetails = ({ item }) => {
  if (!item) return <p>Дані про товар відсутні.</p>;

  return (
    <div className="details-container">
      <div className="details-image-section">
        <img
          src={item.photo_url}
          alt={item.inventory_name}
          className="details-img"
        />
      </div>
      <div className="details-info-section">
        <h2 className="details-title">{item.inventory_name}</h2>
        <div className="details-description">
          <strong>Опис:</strong>
          <p>{item.description || "Опис для цього товару ще не додано."}</p>
        </div>
        <div className="details-badge">
          <small>ID товару: {item.id}</small>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
