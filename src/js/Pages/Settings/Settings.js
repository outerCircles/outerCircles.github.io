import React from "react";

const Settings = () => {
    return (
        <>
        <header class="settingsHeader">
            <span class="material-icons homeIconHeader">home</span>
        </header>
        <main main class="settingsMain">
        <h1>Settings</h1>
          <div class="settingsUser">
            <span class="material-icons settingsUserIcon">
              perm_identity
              </span>
          </div>
          <div class="settingsTile">
            <p class="settingsHeading">Name</p>
            <p>KunalDhawan</p>
          </div>
          <div class="settingsTile">
            <p class="settingsHeading">UserName</p>
            <p>@KunalDhawan</p>
          </div>
          <div class="settingsTile">
            <p class="settingsHeading">Password</p>
            <p>********</p>
          </div>
          <div class="settingsTileSingle">
            <p class="settingsHeading">Blocked Accounts</p>
            <p></p>
          </div>
          <div class="settingsTileSingle">
            <p class="settingsHeading"> Data and Privacy</p>
            <p></p>
          </div>
          <div class="settingsTileSingle">
            <p class="settingsHeading"> © All Rights Reserved</p>
            <p></p>
          </div>
        </main>
        <footer>
        </footer>
        </>
    )
}

export default Settings;