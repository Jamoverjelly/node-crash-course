const os = require('os');

// Report platform
console.log(os.platform());

// Report CPU Architecture
console.log(os.arch());

// Report CPU Core Info
console.log(os.cpus());

// Report free and total memory
console.log(`Free memory: `, os.freemem(), `\nTotal memory: `, os.totalmem());

// Report Home Directory
console.log(os.homedir());

// Report system uptime
console.log(`System uptime: `, os.uptime());