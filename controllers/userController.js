export const profile = (req, res) =>
  res.render("userDetail", { pageTitle: "Profile" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.send("Change Password");

export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.send("loggout");
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};
