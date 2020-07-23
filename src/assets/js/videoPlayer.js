/* eslint-disable no-use-before-define */
const videoWrapper = document.querySelector("#jsVideoWrapper");
const videoContainer = document.querySelector("#jsVideoContainer");
const video = document.querySelector("video");
const videoYoutube = document.querySelector(".video-player-youtube iframe");
const videoTitle = document.querySelector("#jsVideoTitle");
const controlsBox = document.getElementById("jsControls");
const playPauseBtn = document.getElementById("jsPlayPauseBtn");
const bigPlayPauseBtn = document.querySelector("#jsBigPlayPauseBtn");
const volumeBtn = document.getElementById("jsVolumeBtn");
const volumeRange = document.getElementById("jsVolumeRange");
const fullScrnBtn = document.getElementById("jsFullScreenBtn");
const timer = document.querySelector(".timer");
const progress = document.getElementById("jsPlayProgress");

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, { method: "post" });
};

const handleTimeUpdate = () => {
  // console.dir(video);
  // console.log(currentTime, duration);
  const { currentTime, duration } = video;
  const formatCurrentTime = Math.floor(video.currentTime);
  let hours = Math.floor(formatCurrentTime / 3600);
  let minutes = Math.floor((formatCurrentTime - hours * 3600) / 60);
  let seconds = formatCurrentTime - hours * 3600 - minutes * 60;
  const formatDuration = Math.floor(video.duration);
  let durationHours = Math.floor(formatDuration / 3600);
  let durationMinutes = Math.floor(
    (formatDuration - durationHours * 3600) / 60
  );
  let durationSeconds =
    formatDuration - durationHours * 3600 - durationMinutes * 60;

  progress.value = currentTime;
  progress.max = duration;
  // console.log(progress.value);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (durationHours < 10) {
    durationHours = `0${durationHours}`;
  }
  if (durationMinutes < 10) {
    durationMinutes = `0${durationMinutes}`;
  }
  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }

  if (durationHours > 0) {
    timer.innerHTML = `${hours}:${minutes}:${seconds} / ${durationHours}:${durationMinutes}:${durationSeconds}`;
  }
  timer.innerHTML = `${minutes}:${seconds} / ${durationMinutes}:${durationSeconds}`;
};

const handleKeydown = (event) => {
  const key = event.code;
  // console.log(event);
  // console.log(key);
  if (
    (event.keyCode == 32 && event.target == document.body) ||
    (event.keyCode == 32 && event.target == fullScrnBtn)
  ) {
    event.preventDefault();
  }

  if (key === "Space" || key === "Enter") {
    fullScrnBtn.removeEventListener("click", goFullScreen);
    document.removeEventListener("keydown", exitFullScreen);
    handlePlayPauseBtn();
    handleHide();
    fullScrnBtn.addEventListener("click", goFullScreen);
    document.addEventListener("keydown", exitFullScreen);
  }
  // else if (key === "KeyF") {
  //   if (event.target == document.input) {
  //     event.preventDefault();
  //   }
  //   goFullScreen();
  // } else {
  //   document.removeEventListener("keydown", exitFullScreen);
  //   document.removeEventListener("keydown", goFullScreen);
  // }
  console.log(key);
  console.log(event.target);
};

const input = document.querySelector("#jsAddComment input");
const handleRemoveKeydownEvent = () => {
  document.removeEventListener("keydown", handleKeydown);
  fullScrnBtn.removeEventListener("click", goFullScreen);
  document.removeEventListener("keydown", exitFullScreen);
};

let timeOut = null;

const handleLoad = () => {
  // console.log("loaded");
  registerView();
  video.style.cursor = "default";
  controlsBox.classList.add("showing-controls");
  videoTitle.classList.add("showing-controls");
  bigPlayPauseBtn.classList.add("showing-controls");
};
const handleShow = () => {
  if (timeOut) {
    clearTimeout(timeOut);
  }
  video.style.cursor = "default";
  controlsBox.classList.add("showing-controls");
  videoTitle.classList.add("showing-controls");
  bigPlayPauseBtn.classList.add("showing-controls");
  timeOut = setTimeout(handleHide, 3000);
};
const handleHide = () => {
  video.style.cursor = "none";
  controlsBox.classList.remove("showing-controls");
  videoTitle.classList.remove("showing-controls");
  bigPlayPauseBtn.classList.remove("showing-controls");
  if (video.paused) {
    controlsBox.classList.add("showing-controls");
    videoTitle.classList.add("showing-controls");
    bigPlayPauseBtn.classList.add("showing-controls");
  }
};

const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozExitFullscreen) {
    /* Firefox */
    document.mozExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
  fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScrnBtn.addEventListener("click", goFullScreen);
  document.removeEventListener("keydown", exitFullScreen);
  document.addEventListener("keydown", goFullScreen);
};

const goFullScreen = () => {
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    /* Firefox */
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    /* IE/Edge */
    videoContainer.msRequestFullscreen();
  }
  fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
  document.removeEventListener("keydown", goFullScreen);
  document.addEventListener("keydown", exitFullScreen);
};

const handleVolumeBtn = () => {
  // console.dir(video);
  if (!video.muted) {
    video.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute">`;
    volumeRange.value = 0;
  } else {
    video.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up">`;
    volumeRange.value = 1;
  }
};

const handlePlayPauseBtn = () => {
  // console.dir(video);
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    bigPlayPauseBtn.innerHTML = `<i class="far fa-pause-circle"></i>`;
  } else {
    video.pause();
    playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
    bigPlayPauseBtn.innerHTML = `<i class="far fa-play-circle"></i>`;
  }
};

const handleEnded = () => {
  // registerView();
  video.currentTime = 0;
  playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
  bigPlayPauseBtn.innerHTML = `<i class="far fa-play-circle"></i>`;
  handleShow();
};

const handleDragPlay = (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
};

const handleDrag = (event) => {
  const {
    target: { value },
  } = event;
  // console.dir(video);
  video.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else if (value >= 0.2) {
    volumeBtn.innerHTML = `<i class="fas fa-volume-down"></i>`;
  } else if (value == 0) {
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  } else {
    volumeBtn.innerHTML = `<i class="fas fa-volume-off"></i>`;
  }
};

const init = () => {
  video.addEventListener("timeupdate", handleTimeUpdate);
  video.addEventListener("ended", handleEnded);
  // video.addEventListener("click", handlePlayPauseBtn);
  playPauseBtn.addEventListener("click", handlePlayPauseBtn);
  bigPlayPauseBtn.addEventListener("click", handlePlayPauseBtn);
  volumeBtn.addEventListener("click", handleVolumeBtn);
  fullScrnBtn.addEventListener("click", goFullScreen);

  input.addEventListener("focus", handleRemoveKeydownEvent);
  document.addEventListener("keydown", handleKeydown);
  videoContainer.addEventListener("mousemove", handleShow);
  videoContainer.addEventListener("mouseout", handleHide);
  window.addEventListener("load", handleLoad);
  volumeRange.addEventListener("input", handleDrag);
  progress.addEventListener("input", handleDragPlay);
};

if (videoYoutube) {
  registerView();
}

if (videoContainer) {
  console.log("form-player exists");
  // if (videoWrapper) {
  init();
}
