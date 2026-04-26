import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { InventoryProvider } from "./store/InventoryContext";
import AdminInventory from "./pages/AdminInventory";
import AdminInventoryCreate from "./pages/AdminInventoryCreate";
import AdminInventoryEdit from "./pages/AdminInventoryEdit";
import AdminInventoryDetails from "./pages/AdminInventoryDetails";
import "./index.css";

function App() {
  return (
    <InventoryProvider>
      <div className="app-wrapper">
        <Router>
          <Routes>
            <Route path="/admin" element={<AdminInventory />} />
            <Route path="/admin/create" element={<AdminInventoryCreate />} />
            <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
            <Route
              path="/admin/details/:id"
              element={<AdminInventoryDetails />}
            />
            <Route path="/" element={<Navigate to="/admin" />} />
          </Routes>
        </Router>
      </div>
    </InventoryProvider>
  );
}

export default App;
