export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.redirect("home");
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "Profile" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
