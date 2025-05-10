import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

const DAILY_SALES_TRENDS = [
  { name: "Mon", sales: 1000 },
  { name: "Tue", sales: 1200 },
  { name: "Wed", sales: 900 },
  { name: "Thu", sales: 1100 },
  { name: "Fri", sales: 1300 },
  { name: "Sat", sales: 1600 },
  { name: "Sun", sales: 1400 },
];

const DailySalesTrend = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className=" text-lg font-medium mb-4 text-gray-100">
        Daily Sales Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={DAILY_SALES_TRENDS}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Bar dataKey={"sales"} fill="#8884D8">
              {DAILY_SALES_TRENDS.map((entry, index) => (
                <Cell key={`Cell-${index}`} fill="#10B981" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailySalesTrend;
