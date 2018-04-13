'use strict';

var Mqtt = require('azure-iot-device-mqtt').Mqtt;
var DeviceClient = require('azure-iot-device').Client;

var connectionString = 'HostName=AndrewTestHub.azure-devices.net;DeviceId=test123;SharedAccessKey=KDkqhcSqLd0xr/eZxa9FAoguh4Qs6AqLYqcYQg/zz/8=';
var client = DeviceClient.fromConnectionString(connectionString, Mqtt);



function onGetTemperature(request, response) {
    
    var temperature = Math.floor(Math.random() * 100) + 1;  
    var payload = {
        temperature:temperature
    };

    response.send(200, JSON.stringify(payload), function(err) {
        if(err) {
            console.error('An error occurred when sending a method response:\n' + err.toString());
        } else {
            console.log('Response to method \'' + request.methodName + '\' sent successfully.' );
        }
    });
}


client.open(function(err) {
    console.log("asdfdasf");
    if (err) {
        console.error('could not open IotHub client');
    }  else {
        console.log('client opened');
        client.onDeviceMethod('getTemperature', onGetTemperature);
    }
});