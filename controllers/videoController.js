import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 }).populate("creator");
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
  // res.send("home");
};

export const findMyVideos = async (req, res) => {
  try {
    const myVideos = await await Video.find({ creator: req.user.id }).populate(
      "creator"
    );
    if (myVideos.length === 0) {
      res.render("home", {
        userName: `Hi! ${req.user.name}, `,
        userText: "You don't have any videos yet.",
        videos: myVideos,
      });
    } else {
      res.render("home", {
        // userName: req.user.name,
        // userText: "'s Videos",
        userText: "My Videos",
        videos: myVideos,
      });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    }).populate("creator");
  } catch (error) {
    console.log(error);
  }
  res.render("Search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { link, youtubeId },
  } = req;

  if (link) {
    const {
      body: { title, description, link },
    } = req;
    const newVideo = await Video.create({
      link,
      title,
      description,
      creator: req.user.id,
    });
    req.user.videos.push(newVideo.id);
    req.user.save();
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
  }
  if (youtubeId) {
    const {
      body: { title, description, youtubeId },
    } = req;
    const youtubeLink = `https://www.youtube.com/embed/${youtubeId}`;
    const newVideo = await Video.create({
      youtubeLink,
      youtubeId,
      title,
      description,
      creator: req.user.id,
    });
    req.user.videos.push(newVideo.id);
    req.user.save();
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
  }
  if (!link && !youtubeId) {
    const {
      body: { title, description },
      file: { path },
    } = req;
    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description,
      creator: req.user.id,
    });
    req.user.videos.push(newVideo.id);
    req.user.save();
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id)
      .populate("comments")
      .populate({ path: "comments", populate: { path: "creator" } })
      .populate("creator");
    res.render("videoDetail", { pageTitle: video.title, video });
    console.log(video);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(typeof video.creator);
    console.log(typeof video.creator.id);
    console.log(typeof req.user.id);
    if (JSON.stringify(video.creator) !== JSON.stringify(req.user.id)) {
      // console.log("!==");
      throw Error;
    } else {
      res.render("editVideo", { pageTitle: video.title, video });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { link, title, description, youtubeId },
  } = req;
  const youtubeLink = `https://www.youtube.com/embed/${youtubeId}`;
  try {
    if (link) {
      await Video.findOneAndUpdate(
        { _id: id },
        {
          link,
          title,
          description,
        }
      );
    } else if (youtubeId) {
      await Video.findOneAndUpdate(
        { _id: id },
        {
          youtubeLink,
          youtubeId,
          title,
          description,
        }
      );
    } else {
      await Video.findOneAndUpdate(
        { _id: id },
        {
          title,
          description,
        }
      );
    }
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (JSON.stringify(video.creator) !== JSON.stringify(req.user.id)) {
      throw Error;
    } else {
      await Video.findByIdAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// Register Video View

export const postRegisterView = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

// Add Comment

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;
  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
    });
    video.comments.push(newComment.id);
    video.save();
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

// Delete Comment

export const postDeleteComment = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const comment = await Comment.findById(id);
    if (JSON.stringify(comment.creator.id) !== JSON.stringify(req.user.id)) {
      throw Error;
    } else {
      await Comment.findByIdAndRemove({ _id: id });
      res.status(200);
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};
