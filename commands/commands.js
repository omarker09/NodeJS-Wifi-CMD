class MainCommands {
    constructor() {
        this.show_wifi_profiles = "netsh wlan show profiles";
        this.open_task_manager = "taskmgr"
    }
    showProfileWifiByName(name) {
        if (!name) {
            return;
        }
        return `netsh wlan show profile name="${name}" key=clear`;
    }
    windowPopup(text) {
        if (!text) {
            return `msg * You did not Enter Your Text !!`
        }
        return `msg * ${text}`
    }
}

module.exports = MainCommands;
