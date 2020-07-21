import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const jsCommentText = document.getElementById("jsCommentText");

const addComment = (comment) => {
  //   const li = document.createElement("li");
  //   const span = document.createElement("span");
  //   span.innerHTML = comment;
  //   li.appendChild(span);
  //   commentList.append(li);
  //   ------------------
  //   const li = document.createElement("li");
  //   const a = document.createElement("a");
  //   a.innerHTML="<a class='video__comments-list__column' href='routes.userDetail(comment.creator.id)'>"
  //   const svg = document.createElement("svg");
  //   svg.innerHTML="<svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>";
  //   a.appendChild(svg);
  //   li.appendChild(a);
  //   commentList.append(li);
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: { comment },
  });
  if (response.status === 200) {
    // addComment(comment); --> I can't handle it which has images, date.. :2020.0721
    window.location.reload();
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const init = () => {
  addCommentForm.addEventListener("submit", handleSubmit);
};

if (addCommentForm) {
  init();
}
