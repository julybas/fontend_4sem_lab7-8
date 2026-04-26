import { createContext, useState, useContext, useEffect } from "react";

const InventoryContext = createContext();

// Тестові дані для перевірки
const MOCK_DATA = [
  {
    id: "1",
    inventory_name: "Ноутбук Lenovo IdeaPad",
    description: "Для навчання та програмування",
    photo_url: "https://picsum.photos/200/300?random=1",
  },
  {
    id: "2",
    inventory_name: 'Монітор Dell 24"',
    description: "Full HD, IPS матриця",
    photo_url: "https://picsum.photos/200/300?random=2",
  },
];

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedData = localStorage.getItem("inventory_items");
    return savedData ? JSON.parse(savedData) : MOCK_DATA;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("inventory_items", JSON.stringify(items));
  }, [items]);

  const fetchInventory = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setError(null);
    } catch (err) {
      setError("Помилка завантаження");
    } finally {
      setLoading(false);
    }
  };

  // Імітація видалення
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Імітація додавання
  const addItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now().toString() };
    setItems((prev) => [...prev, itemWithId]);
  };

  const updateItemText = (id, updatedData) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item)),
    );
  };

  const updateItemPhoto = (id, photoUrl) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, photo_url: photoUrl } : item,
      ),
    );
  };

  return (
    <InventoryContext.Provider
      value={{
        items,
        loading,
        error,
        fetchInventory,
        deleteItem,
        addItem,
        updateItemText,
        updateItemPhoto,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
