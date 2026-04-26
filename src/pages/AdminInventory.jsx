import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInventory } from "../store/InventoryContext";
import InventoryTable from "../components/inventory/InventoryTable";

const AdminInventory = () => {
  const { items, loading, error, fetchInventory, deleteItem } = useInventory();

  useEffect(() => {
    fetchInventory();
  }, []);

  if (loading) return <p>Завантаження даних...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Адмін-панель інвентарю</h1>
      <Link to="/admin/create" className="btn btn-add">
        + Додати позицію
      </Link>

      <InventoryTable items={items} onDelete={deleteItem} />
    </div>
  );
};

export default AdminInventory;
