var os = require('os');
var allNetworkInterfaces = os.networkInterfaces();
console.log(allNetworkInterfaces['en0'][1].address);