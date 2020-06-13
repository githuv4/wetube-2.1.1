export const Join = (req, res) => res.render("join", { pageTitle: "Join" });
export const Login = (req, res) => res.render("login", { pageTitle: "Login" });
export const Logout = (req, res) => res.send("Logout");

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "Profile" });
