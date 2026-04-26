import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInventory } from "../store/InventoryContext";
import InventoryTable from "../components/inventory/InventoryTable";

const AdminInventory = () => {
  const { items, loading, error, fetchInventory, deleteItem } = useInventory();

  useEffect(() => {
    fetchInventory();
  }, []);

  if (loading) return <p>Завантаження даних...</p>; // Стан loading
  if (error) return <p style={{ color: "red" }}>{error}</p>; // Стан error
  // if (items.length === 0) return <p>Склад порожній. Додайте перший товар!</p>; // Стан empty

  return (
    <div>
      <h1>Адмін-панель інвентарю</h1>
      <Link
        to="/admin/create"
        style={{
          padding: "10px",
          background: "green",
          color: "white",
          textDecoration: "none",
        }}
      >
        + Додати позицію
      </Link>

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
              <td>
                <img
                  src={item.photo_url}
                  alt={item.inventory_name}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{item.inventory_name}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/details/${item.id}`}>Переглянути</Link> |
                <Link to={`/admin/edit/${item.id}`}> Редагувати</Link> |
                <button
                  onClick={() => {
                    if (window.confirm("Ви впевнені?")) deleteItem(item.id);
                  }}
                >
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminInventory;
