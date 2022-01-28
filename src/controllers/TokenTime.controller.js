import tokentime from "../models/tokentime";

export const renderToken = async (req, res) => {
  const token = await tokentime.find({ idToken: "1" })
    .sort({ date: "desc" })
    .lean();
  res.render("TokenTime/allToken", { token });
};

export const renderEditForm= async (req, res) => {
  console.log("entrando a renderEditForm");
  const token = await tokentime.findById(req.params.id).lean();
  res.render("TokenTime/edit-token", { token });
};

export const updateToken = async (req, res) => {
  console.log("entrando a updateToken");
  const { idToken,  tiempo } = req.body;
  await tokentime.findByIdAndUpdate(req.params.id, { idToken, tiempo });

  req.flash("success_msg", "Token Updated Successfully");
  res.redirect("/TokenTime/allToken");
};
