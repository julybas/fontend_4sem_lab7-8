import { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";

const InventoryTable = ({ items, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Відкриваємо модалку і запам'ятовуємо, що хочемо видалити
  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  // Підтверджуємо видалення
  const handleConfirmDelete = () => {
    onDelete(itemToDelete);
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  return (
    <>
      <table
        border="1"
        style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Фото</th>
            <th>Назва інвентарю</th>
            <th>Опис</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={{ textAlign: "center" }}>
                <img
                  src={item.photo_url}
                  alt={item.inventory_name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{item.inventory_name}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/details/${item.id}`}>Переглянути</Link> |{" "}
                <Link to={`/admin/edit/${item.id}`}>Редагувати</Link> |{" "}
                <button onClick={() => handleDeleteClick(item.id)}>
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        message="Ви дійсно хочете видалити цей товар зі складу?"
      />
    </>
  );
};

export default InventoryTable;
