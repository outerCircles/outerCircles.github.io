import React from "react";
import ActionButton from "components/ActionButton";

const SettingsSection = () =>{
    return (
        <div className="SystemSetting">
            <ActionButton name="Settings" icon="settings" />
            <ActionButton name="About" icon="info"/>
        </div>
    )
}

export default SettingsSection;