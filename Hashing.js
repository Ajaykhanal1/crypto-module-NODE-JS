const crypto = require('crypto');

const hash = crypto
    .createHash('sha256')
    .update('passwor123')
    .digest('hax')

console.log(hash)


//      Hashing is irreversible

//      Crypto = data security