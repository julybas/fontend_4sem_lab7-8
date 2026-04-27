// src/pages/AdminInventoryCreate.jsx
import { useNavigate } from "react-router-dom";
import { useInventory } from "../store/InventoryContext";
import InventoryForm from "../components/inventory/InventoryForm";

const AdminInventoryCreate = () => {
  const navigate = useNavigate();
  const { addItem } = useInventory();

  const handleCreate = (data) => {
    if (data.file) {
      const reader = new FileReader();

      // Коли файл зчитано, він стає довгим рядком (Base64)
      reader.onloadend = () => {
        const base64String = reader.result;

        addItem({
          inventory_name: data.name,
          description: data.description,
          photo_url: base64String,
        });

        alert("Товар створено!");
        navigate("/admin");
      };

      reader.readAsDataURL(data.file);
    } else {
      // Якщо файлу нема, ставимо заглушку
      addItem({
        inventory_name: data.name,
        description: data.description,
        photo_url: "https://picsum.photos/150",
      });
      navigate("/admin");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Додати нову позицію</h1>
      <button onClick={() => navigate("/admin")} class="btn btn-back">
        ← Назад
      </button>
      <InventoryForm onSubmit={handleCreate} buttonText="Створити товар" />
    </div>
  );
};

export default AdminInventoryCreate;
