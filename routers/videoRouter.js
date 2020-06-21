import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
  videoDetail,
  search,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.search, search);

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, postUpload);

videoRouter.get(routes.editVideo, getEditVideo);
videoRouter.get(routes.editVideo, postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
