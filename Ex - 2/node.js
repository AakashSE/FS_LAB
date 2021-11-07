'use strict';

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
          if (!results[name]) {
                results[name] = [];
            }

            results[name].push(net.address);
        }
    }
}
// results
{
  "en0": [
    "192.168.1.101"
  ],
  "eth0": [
    "10.0.0.101"
  ],
  "<network name>": [
    "<ip>",
    "<ip alias>",
    "<ip alias>",
    ...
  ]
}
// results["en0"][0]
"192.168.1.101"
