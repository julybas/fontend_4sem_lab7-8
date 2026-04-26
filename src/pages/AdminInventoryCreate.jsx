// src/pages/AdminInventoryCreate.jsx
import { useNavigate } from "react-router-dom";
import { useInventory } from "../store/InventoryContext";
import InventoryForm from "../components/inventory/InventoryForm";

const AdminInventoryCreate = () => {
  const navigate = useNavigate();
  const { addItem } = useInventory();

  const handleCreate = (data) => {
    const fakePhotoUrl = data.file
      ? URL.createObjectURL(data.file)
      : "https://picsum.photos/150";

    addItem({
      inventory_name: data.name,
      description: data.description,
      photo_url: fakePhotoUrl,
    });

    alert("Товар створено!");
    navigate("/admin");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Додати нову позицію</h1>
      <button
        onClick={() => navigate("/admin")}
        style={{ marginBottom: "20px" }}
      >
        ← Назад
      </button>
      <InventoryForm onSubmit={handleCreate} buttonText="Створити товар" />
    </div>
  );
};

export default AdminInventoryCreate;
