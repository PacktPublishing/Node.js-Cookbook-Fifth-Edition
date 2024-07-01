const password = process.argv[2];
const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    process.exit(1);
  } else {
    console.log(hash);
  }
});
