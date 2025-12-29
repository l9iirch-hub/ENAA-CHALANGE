const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez la température en Celsius : ", (celsius) => {
  let fahrenheit = (celsius * 1.8) + 32;
  console.log(`${celsius}°C équivaut à ${fahrenheit}°F`);
  rl.close();
});
