import React, { useState } from "react";
import SettingsSection from "./SettingsSection";
import { Lock } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
  const [twoFactorAuthentication, setTwoFactorAuthentication] = useState(false);
  const handleToggle = () => {
    setTwoFactorAuthentication(!twoFactorAuthentication);
  };

  return (
    <SettingsSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two Factor Authentication"}
        isOn={twoFactorAuthentication}
        onToggle={() => handleToggle()}
      />
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Change Password
      </button>
    </SettingsSection>
  );
};

export default Security;
