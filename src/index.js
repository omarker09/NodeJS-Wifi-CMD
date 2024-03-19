const InjectCMD = require("./cmd/Injector")
const Commands = require("../commands/commands")

// Scrap Your Local Wifi Passwords In NodeJS

const CommandsInit = new Commands()

// Show Your All Wifi Profiles
const showProfiles = CommandsInit.show_wifi_profiles

// Show The Selected Wifi Password
const showProfilesByName = CommandsInit.showProfileWifiByName("YOUR_WIFI_PROFILE")

// Make Sure to pass commands Here
InjectCMD(showProfilesByName)
