const bcrypt = require('bcrypt');

const saltRounds = 10;

let hash = (myPlaintextPassword)=>{
  return new Promise((resolve,reject)=>{
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      if(err){
        reject()
      }else{
        resolve(hash)
      }
    });
  })
}

exports.hash = hash