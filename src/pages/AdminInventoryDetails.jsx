import { useParams, useNavigate } from "react-router-dom";
import { useInventory } from "../store/InventoryContext";
import InventoryDetails from "../components/inventory/InventoryDetails";

const AdminInventoryDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items } = useInventory();

  const item = items.find((i) => String(i.id) === String(id));

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => navigate("/admin")}
        style={{ marginBottom: "20px", cursor: "pointer", padding: "8px 16px" }}
      >
        ← Назад до списку
      </button>

      {item ? (
        <InventoryDetails item={item} />
      ) : (
        <p style={{ color: "red" }}>Товар із таким ID не знайдено!</p>
      )}
    </div>
  );
};

export default AdminInventoryDetailsPage;
