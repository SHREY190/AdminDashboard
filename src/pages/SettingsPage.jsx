import React from "react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";

import Profile from "../components/settings/Profile";
import Notification from "../components/settings/Notification";
import Security from "../components/settings/Security";
import Billing from "../components/settings/Billing";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto z-10 relative bg-gray-900">
      <Header title="Settings" />

      <main className="max-w-4xl mx-auto px-4 py-6 lg:px-8">
        <Profile />
        <Notification />
        <Security />
        <Billing />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
