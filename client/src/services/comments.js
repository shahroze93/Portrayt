import api from "./api-config";

export const getAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const addCommentToPost = async (commentId, postId) => {
  const resp = await api.put(`/comments/${commentId}/posts/${postId}`);
  return resp.data;
};

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
};

export const postComment = async (commentData) => {
  const resp = await api.post("/comments", { comment: commentData });
  return resp.data;
};

export const updateComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, { content: commentData.content});
  return resp.data;
};

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
};
