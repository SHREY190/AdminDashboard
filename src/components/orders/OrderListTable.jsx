import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Eye, Search, Trash2 } from "lucide-react";

const ORDER_DATA = [
  {
    id: "ORD001",
    customer: "John Doe",
    total: 235.4,
    status: "Delivered",
    date: "2023-07-01",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    total: 412.0,
    status: "Processing",
    date: "2023-07-02",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    total: 162.5,
    status: "Shipped",
    date: "2023-07-03",
  },
  {
    id: "ORD004",
    customer: "Alice Brown",
    total: 750.2,
    status: "Pending",
    date: "2023-07-04",
  },
  {
    id: "ORD005",
    customer: "Charlie Wilson",
    total: 95.8,
    status: "Delivered",
    date: "2023-07-05",
  },
  {
    id: "ORD006",
    customer: "Eva Martinez",
    total: 310.75,
    status: "Processing",
    date: "2023-07-06",
  },
  {
    id: "ORD007",
    customer: "David Lee",
    total: 528.9,
    status: "Shipped",
    date: "2023-07-07",
  },
  {
    id: "ORD008",
    customer: "Grace Taylor",
    total: 189.6,
    status: "Delivered",
    date: "2023-07-08",
  },
];
const OrderListTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ORDER_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ORDER_DATA.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 shadow-lg rounded-lg lg:col-span-2 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-start lg:items-center mb-6 flex-col lg:flex-row">
        <h2 className="text-xl font-semibold text-gray-100 mb-2 lg:mb-0">
          Order List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ORDER ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                CUSTOMER
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                TOTAL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                STATUS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                DATE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default OrderListTable;
