import { Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnaliticsPage from "./pages/AnaliticsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/sales" element={<SalesPage />}></Route>
        <Route path="/orders" element={<OrdersPage />}></Route>
        <Route path="/analytics" element={<AnaliticsPage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
