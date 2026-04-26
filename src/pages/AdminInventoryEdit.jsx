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
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      // Викликаємо функцію з контексту, передаючи Base64 рядок
      updateItemPhoto(id, base64String);
      alert("Фото успішно оновлено!");
      navigate("/admin");
    };
    // Читаємо файл як DataURL (Base64)
    reader.readAsDataURL(file);
  };

  return (
    <div className="edit-container">
      <h1>Редагування позиції</h1>
      <button onClick={() => navigate("/admin")} className="btn btn-back">
        ← Назад
      </button>

      <div className="edit-section">
        <h3>Текстова інформація</h3>
        <form onSubmit={handleTextUpdate} className="inventory-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Назва"
            className="form-input"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Опис"
            className="form-input form-textarea"
          />
          <button type="submit" className="btn btn-submit">
            Зберегти текст
          </button>
        </form>
      </div>

      <div className="edit-section">
        <br></br>
        <h3>Оновлення зображення</h3>
        <form onSubmit={handlePhotoUpdate} className="inventory-form">
          <div className="file-input-container">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="form-input"
            />
          </div>
          <button type="submit" className="btn btn-add">
            Оновити фото
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminInventoryEdit;
