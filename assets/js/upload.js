const videoLinkBtn = document.getElementById("jsLinkBtn");
const fileUrlInput = document.getElementById("jsFileUrlInput");
// export const inputType = document.getElementById("jsInputType");

const handleVideoLinkBtn = () => {
  fileUrlInput.innerHTML = `<input type="text", name="link", placeholder="Put a link">`;
  videoLinkBtn.innerText = `Video File`;
  videoLinkBtn.removeEventListener("click", handleVideoLinkBtn);
  // eslint-disable-next-line no-use-before-define
  videoLinkBtn.addEventListener("click", handleVideoFileBtn);
};
const handleVideoFileBtn = () => {
  fileUrlInput.innerHTML = `<input type="file", name="videoFile", accept="video/*">`;
  videoLinkBtn.innerText = `Video Link`;
  videoLinkBtn.removeEventListener("click", handleVideoFileBtn);
  videoLinkBtn.addEventListener("click", handleVideoLinkBtn);
};

videoLinkBtn.addEventListener("click", handleVideoLinkBtn);
