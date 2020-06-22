import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo,
  videoDetail,
  deleteVideo,
  search,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.search, search);

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, postUpload);

videoRouter.get(routes.editVideo, getEditVideo);
videoRouter.get(routes.editVideo, postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
