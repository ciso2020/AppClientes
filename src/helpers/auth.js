import configurations from "../config";
import User from "../models/User";

const jwt = require('jsonwebtoken');

export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (!res.locals.user.tipouser) {
      console.log("no admin");
      
      
      const verifyResult = jwt.verify(global.token, configurations.secret, (err, verifiedJwt) => {
        if(err){
          console.log("verifyResult:", verifyResult);
          console.log("token aqui:"+global.token);
           console.log("error token:"+err);
           req.flash("error_msg", "Token expiro Vuelva al login...");
           return res.redirect("/users/signin");
           //return next();
           //return;
        }
      });
  }
    return next();
  }
  req.flash("error_msg", "Not Authorized.");
  return next();  
  //res.redirect("/users/signin");
};
