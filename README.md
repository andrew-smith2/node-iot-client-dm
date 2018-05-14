# Node-Iot-Client
Simple node IOT device client
<br>
<ul>
<li>Sets up a device application that registers with the Azure IoT hub as a Azure IoT Device</li>
<li>Exposes a method that can be invoked as a direct method call and returns a random number representing the temperature to the calling application.</li>
</ul>

<b>Instructions</b>
(You can either work on your laptop and build the solution then deploy to you Raspberry PI or you can develop on the Rapberry PI. The PI will contain NodeJs and NPM)

1. Ensure you have node and npm installed on your machine  https://nodejs.org/en/ (When you install node you will get both node and npm)
2. Download and unpack zipped file of application or clone respository using git clone
3. Open terminal window to the location where the project files are located
4. Type "npm install" to install required packages
5. Edit the SimulatedDevice.js and update the connection string to the Device with the provided connection string in Hackathon instructions
6. After all packages are installed type "node SimulatedDevice.js" to run the application
7. You can now go and install the calling application that will invoke direct method on client. Calling application located here: https://github.com/spock75/Node-iot-device-caller.git

