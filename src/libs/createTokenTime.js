import tokentime from "../models/tokentime";

export const createTokenTime = async () => {
  const TokenFound = await tokentime.findOne({ idToken: "1"});

  if (TokenFound) return;

  const newToken = new tokentime({
    idToken: "1",
    tiempo: "86400"
  });


  const token_time = await newToken.save();

  console.log("Tiempo del Token Default: ", token_time);
};
