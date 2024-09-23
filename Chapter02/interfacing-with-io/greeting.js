console.log("What is your name?");
process.stdin.on("data", (data) => {
  // processing on each data event
  const name = data.toString().trim().toUpperCase();
  if (name !== "") {
    process.stdout.write(`Hello ${name}!`);
  } else {
    process.stderr.write("Input was empty.\n");
  }
});
