import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "/facebook.svg",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "/x.png",
    },
  ]);

  const handleConnected = (accId) => {
    setConnectedAccounts(
      connectedAccounts.map((acc) => {
        if (acc.id === accId) {
          return {
            ...acc,
            connected: !acc.connected,
          };
        }
        return acc;
      })
    );
  };
  return (
    <SettingsSection title={"Connected Accounts"} icon={HelpCircle}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex justify-between items-center py-3"
        >
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt="Social Account"
              className="size-6 object-cover rounded-full mr-2"
            />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transistion duration-200`}
            onClick={() => handleConnected(account.id)}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" /> Add Account
      </button>
    </SettingsSection>
  );
};

export default ConnectedAccounts;
