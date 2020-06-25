import routes from "../routes";
import Video from "../models/Video";
import { permittedCrossDomainPolicies } from "helmet";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do : Upload and Save video
  res.redirect(routes.videoDetail(34234));
};

export const videoDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("videoDetail", { pageTitle: "Video Detail" });
};
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.send("Delete Video");
