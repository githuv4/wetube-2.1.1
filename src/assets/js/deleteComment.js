import axios from "axios";

const deleteCommentForm = document.getElementById("jsDeleteComment");
const deleteCommentBtn = document.getElementById("jsCommentDeleteBtn");

const deleteComment = (req, res) => {
  const {
    body: { commentId },
  } = req;
  console.log(commentId);
  axios({
    url: `/api/${commentId}/comment/delete`,
    method: "POST",
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formContainer = event.target.parentNode;
  formContainer.parentNode.remove();
  console.log(event);
  deleteComment();
};

const init = () => {
  // deleteCommentForm.addEventListener("submit", handleSubmit);
};

if (deleteCommentForm) {
  console.log("---");
  init();
}
