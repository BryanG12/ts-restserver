import jwt = require('jsonwebtoken');

export const generarJWT = ( uid:any )=>{
  
  return new Promise((resolve,reject)=>{
    const payload = { uid };

    jwt.sign(payload,process.env.SECRETORPRIVATEKEY||'3st3esmyjs0nw3bt0k3n2021xD@',{
      expiresIn:'4h'
    },(err,token)=>{
      if (err) {
        console.log(err);
        reject('No se puedo generar el token')
      } else {
        resolve(token);
      }
    });

  });
}