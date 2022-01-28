import User from "../models/User";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "admin@localhost" });

  if (userFound) return;

  const newUser = new User({
    username: "admin",
    email: "admin@localhost",
    tipouser: true
  });

  newUser.password = await newUser.encryptPassword("adminpassword");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};
