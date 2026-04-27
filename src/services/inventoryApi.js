import axios from "axios";

const API_URL = "http://localhost:5000";

export const inventoryApi = {
  // Отримати весь список
  getAll: () => axios.get(`${API_URL}/inventory`),

  // Отримати одну позицію
  getById: (id) => axios.get(`${API_URL}/inventory/${id}`),

  // Створити нову позицію (multipart/form-data)
  create: (formData) => axios.post(`${API_URL}/register`, formData),

  // Оновити текст (JSON)
  updateText: (id, data) => axios.put(`${API_URL}/inventory/${id}`, data),

  // Оновити фото (multipart/form-data)
  updatePhoto: (id, formData) =>
    axios.put(`${API_URL}/inventory/${id}/photo`, formData),

  // Видалити позицію
  delete: (id) => axios.delete(`${API_URL}/inventory/${id}`),
};
