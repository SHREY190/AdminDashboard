import React from "react";
import SettingsSection from "./SettingsSection";
import { CreditCard } from "lucide-react";

const Billing = () => {
  return (
    <SettingsSection icon={CreditCard} title={"Security"}>
      <div className="flex justify-between items-center py-3">
        <span>Current Plan</span>
        <p className="text-indigo-400 font-semibold">Pro</p>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Upgrade Plan
      </button>
    </SettingsSection>
  );
};

export default Billing;
