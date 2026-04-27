import { createContext, useState, useContext, useEffect } from "react";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const savedData = localStorage.getItem("inventory_items");
    return JSON.parse(savedData);
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
