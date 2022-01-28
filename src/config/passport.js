import { JsonWebTokenError } from "jsonwebtoken";
import configurations from "../config";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../models/User";
import tokentime from "../models/tokentime";

const jwt = require('jsonwebtoken');

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      // Match Email's User
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false, { message: "Not User found." });
      } else {
        // Match Password's User
        const match = await user.matchPassword(password);
        if (match) {
          const tokentiempo = await tokentime.findOne({ idToken: "1" });
          console.log("tiempo configurado:"+tokentiempo.tiempo);
          const json = {"key": User.name, "key2": User.email};
          global.token = jwt.sign(json, configurations.secret, {expiresIn: parseInt(tokentiempo.tiempo)});
          console.log("JWT:", global.token);
          //global.token = jwt.sign({id: User.name}, configurations.secret, {expiresIn: tokentiempo.tiempo});
          console.log("El token es:"+global.token);      
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password." });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
