const { exec } = require('child_process');

// Execute a command
function InjectCMD(input) {
    exec(input, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        const key = "Key Content"
        const isKey = stdout.includes(key)
        if (isKey === true) {
            const regex = /Key Content\s+:\s+(.+)/;
            const match = stdout.match(regex);
            if (match) {
                const keyContentValue = match[1].trim();
                console.log("--------------------------------- \n");
                console.log('Your Wifi Profile Password: ');
                console.log({ Wifi_Pass: keyContentValue } , "\n"); // Output The Key
                console.log("---------------------------------");
            } else {
                console.log('not found');
            }
        } else {
            const pattern = /All User Profile\s+: (.+)/g;

            // Array to store profile names
            const profileArray = [];
            let match;

            // Find all matches using the pattern
            while ((match = pattern.exec(stdout)) !== null) {
                profileArray.push(match[1]);
            }

            // Print the array
            console.log("--------------------------------- \n");
            console.log('Your Wifi Profiles : ');
            console.log(profileArray , "\n");
            console.log("---------------------------------");
        }
    });
}

module.exports = InjectCMD