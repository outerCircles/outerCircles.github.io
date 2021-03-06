import React from "react";
import ActionButton from "components/ActionButton";

const SettingsSection = () =>{
    return (
        <div className="SystemSetting">
            <ActionButton to="settings" name="Settings" icon="settings" />
            <ActionButton to="about" name="About" icon="info"/>
        </div>
    )
}

export default SettingsSection;