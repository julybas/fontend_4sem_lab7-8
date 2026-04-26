import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useInventory } from "../store/InventoryContext";

const AdminInventoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, updateItemText, updateItemPhoto } = useInventory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // Підтягуємо дані існуючого товару
  useEffect(() => {
    const item = items.find((i) => i.id === id);
    if (item) {
      setName(item.inventory_name);
      setDescription(item.description);
    }
  }, [id, items]);

  // Частина 1: Оновлення тексту (JSON)
  const handleTextUpdate = (e) => {
    e.preventDefault();
    updateItemText(id, { inventory_name: name, description });
    alert("Текстові дані оновлено!");
    navigate("/admin");
  };

  // Частина 2: Оновлення фото (multipart/form-data)
  const handlePhotoUpdate = (e) => {
    e.preventDefault();
    if (!file) return alert("Виберіть файл!");

    // В реальності тут був би FormData і запит до API
    const fakePhotoUrl = URL.createObjectURL(file);
    updateItemPhoto(id, fakePhotoUrl);
    alert("Фото оновлено!");
    navigate("/admin");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Редагування позиції</h1>
      <button onClick={() => navigate("/admin")}>← Назад</button>

      <div
        style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px" }}
      >
        <h3>Текстова інформація</h3>
        <form onSubmit={handleTextUpdate}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Назва"
          />
          <br />
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Опис"
          />
          <br />
          <button type="submit">Зберегти текст</button>
        </form>
      </div>

      <div
        style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px" }}
      >
        <h3>Оновлення зображення</h3>
        <form onSubmit={handlePhotoUpdate}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Оновити фото</button>
        </form>
      </div>
    </div>
  );
};

export default AdminInventoryEdit;
