import React from "react";
import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, User, Zap } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesChannelChart from "../components/home/SalesChannelChart";
import SalesOverviewChart from "../components/home/SalesOverviewChart";
import CategoryDistributionChart from "../components/home/CategoryDistributionChart";

const HomePage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Home" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Sales" icon={Zap} value="$12,345" color="#6366F1" />
          <StatCard name="New Users" icon={User} value="123" color="#8B5CF6" />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="456"
            color="#EC4899"
          />
          <StatCard
            name="Convertion Rates"
            icon={BarChart2}
            value="15%"
            color="#10B981"
          />
        </motion.div>
        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
