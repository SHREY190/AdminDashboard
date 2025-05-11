import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notification = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: false,
  });

  const handleToggle = (notificationType) => {
    setNotifications({
      ...notifications,
      [notificationType]: !notifications[notificationType],
    });
  };
  return (
    <SettingsSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notifications.push}
        onToggle={() => handleToggle("push")}
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notifications.email}
        onToggle={() => handleToggle("email")}
      />
      <ToggleSwitch
        label={"SMS Notifications"}
        isOn={notifications.sms}
        onToggle={() => handleToggle("sms")}
      />
    </SettingsSection>
  );
};

export default Notification;
