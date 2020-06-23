export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
<<<<<<< HEAD

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

=======
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
>>>>>>> 0cc3ac266a9f44bd0b999413dad575ed8f279b64
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const getEditVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const postEditVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.redirect(routes.home);
