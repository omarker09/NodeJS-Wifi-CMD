# Node.js WiFi Password Scrapper

This Node.js program allows you to scrape and view the passwords of WiFi networks stored on your local system. It's a handy tool for retrieving passwords if you've forgotten them or need them for any other legitimate purpose.

## Getting Started

To use this program, you need to have Node.js installed on your system. If you haven't installed Node.js yet, you can download it from [here](https://nodejs.org/). Follow the installation instructions provided on the Node.js website for your specific operating system.

Once you have Node.js installed, you can clone this repository by running the following command in your terminal or Command Prompt:

```bash
git clone https://github.com/omarker09/NodeJS-Wifi-CMD.git

After cloning the repository, navigate into the project directory: "cd NodeJS-Wifi-CMD"

Then, install the required dependencies by running: "npm install"

To run the program, use the following command: "npm start"

--------------------------------------------------------------------------------------------

Available Commands
Show All WiFi Profiles: Use this command to display all the WiFi profiles stored on your system.

const CommandsInit = new Commands()
const showProfiles = CommandsInit.show_wifi_profiles
InjectCMD(showProfiles)

Show WiFi Profile Password by Name: Use this command to display the password of a specific WiFi profile. Replace "Virus" with the name of the WiFi profile you want to view the password for.

const showProfilesByName = CommandsInit.showProfileWifiByName("YOUR_WIFI_NAME")
InjectCMD(showProfilesByName)

