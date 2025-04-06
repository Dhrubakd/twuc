const bcrypt = require('bcrypt');
async function hashPassword() {
  const password = 'twuc@12345';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Hashed Password:', hashedPassword);
}
hashPassword();
