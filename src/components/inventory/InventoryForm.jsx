import { useState } from "react";

const InventoryForm = ({
  initialData = {},
  onSubmit,
  buttonText = "Зберегти",
  showFileInput = true,
}) => {
  const [name, setName] = useState(initialData.inventory_name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаємо дані "наверх" у батьківський компонент
    onSubmit({ name, description, file });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
      }}
    >
      <div>
        <label>Назва інвентарю (обов'язково):</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
          required
        />
      </div>

      <div>
        <label>Опис:</label>
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: "8px", minHeight: "80px" }}
        />
      </div>

      {showFileInput && (
        <div>
          <label>Фото інвентарю:</label>
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: "5px" }}
          />
        </div>
      )}

      <button
        type="submit"
        style={{
          padding: "10px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default InventoryForm;
