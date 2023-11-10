var Client = require('node-rest-client').Client;
var utils = require('./utils/utils.js');
 
// direct way
var client = new Client();
 
var args = {    
    path: { "user": "user1" }, // path substitution var
    parameters: { arg1: "hello", arg2: "world" }, // this is serialized as URL parameters
    headers: { "test-header": "client-api" } // request headers
};
 
 
client.get("http://localhost:4000/infocards/user1/",
    function (data, response) {
        // raw response
        console.log(data);
        console.log(utils.decrypt(data));        
    });

client.get("http://localhost:4000/enablecard/user1/INTERNATIONAL",
function (data, response) {
    // raw response
    console.log(data);
    console.log(utils.decrypt(data));
});