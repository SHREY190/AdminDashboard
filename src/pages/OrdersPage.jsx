import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategory from "../components/sales/SalesByCategory";
import DailySalesTrend from "../components/sales/DailySalesTrend";
import DailyOrdersChart from "../components/orders/DailyOrdersChart";
import OrderStatusDistributionChart from "../components/orders/OrderStatusDistributionChart";
import OrderListTable from "../components/orders/OrderListTable";

const ORDER_STATS = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};
const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={ShoppingBag}
            value={ORDER_STATS.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name="Average Order Value"
            icon={Clock}
            value={ORDER_STATS.pendingOrders}
            color="#10B981"
          />
          <StatCard
            name="Conversion Rate"
            icon={CheckCircle}
            value={ORDER_STATS.completedOrders}
            color="#F59E0B"
          />
          <StatCard
            name="Sales Growth"
            icon={DollarSign}
            value={ORDER_STATS.totalRevenue}
            color="#EF4444"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrdersChart />
          <OrderStatusDistributionChart />
          <OrderListTable />
        </div>
      </main>
    </div>
  );
};

export default OrdersPage;
