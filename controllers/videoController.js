export const videoDetail = (req, res) =>
  res.render("videoDetail", { pgaeTitle: "Video Detail" });
export const search = (req, res) =>
  res.render("search", { pgaeTitle: "Search" });
export const getUpload = (req, res) =>
  res.render("upload", { pgaeTitle: "Upload" });
export const postUpload = (req, res) =>
  res.render("upload", { pgaeTitle: "Upload" });
export const getEditVideo = (req, res) =>
  res.render("editVideo", { pgaeTitle: "Edit Video" });
export const postEditVideo = (req, res) =>
  res.render("editVideo", { pgaeTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.redirect(routes.home);
