const videoLinkBtn = document.getElementById("jsLinkBtn");
const fileUrlInput = document.getElementById("jsFileUrlInput");

const handleVideoLinkBtn = () => {
  fileUrlInput.innerHTML = `<input type="text", name="link", placeholder="Put a link">`;
  videoLinkBtn.innerText = `Video File`;
  videoLinkBtn.removeEventListener("click", handleVideoLinkBtn);
  videoLinkBtn.addEventListener("click", handleVideoFileBtn);
};
const handleVideoFileBtn = () => {
  fileUrlInput.innerHTML = `<input type="file", name="videoFile", accept="video/*">`;
  videoLinkBtn.innerText = `Video Link`;
  videoLinkBtn.removeEventListener("click", handleVideoFileBtn);
  videoLinkBtn.addEventListener("click", handleVideoLinkBtn);
};

videoLinkBtn.addEventListener("click", handleVideoLinkBtn);
