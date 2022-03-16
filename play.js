const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.29.42.155", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (idleMessage)=> {
    console.log(idleMessage);
  });
  return conn;
};

console.log("Connecting ...");
connect();
