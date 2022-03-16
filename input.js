// setup interface to handle user input from stdin

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    console.log('up')
    connection.write('Move: up')
  }
  if (key === 'a') {
    console.log('left')
    connection.write('Move: left')
  }
  if (key === 's') {
    console.log('down')
    connection.write('Move: down')
  }
  if (key === 'd') {
    console.log('right')
    connection.write('Move: right')
  }
// Fun messages?
  if (key === '1') {
    console.log('deth by snek')
    connection.write('Say: deth by snek')
  }
  if (key === '2') {
    console.log('snek hungry')
    connection.write('Say: snek hungry')
  }
  if (key === '3') {
    console.log('Say: python rulz')
    connection.write('Say: python rulz')
  }
};

module.exports = {setupInput}
