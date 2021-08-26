import api from "./api-config";

export const getAllSegments = async () => {
  const resp = await api.get("/segments");
  return resp.data;
};

export const getOneSegment = async (id) => {
  const resp = await api.get(`/segments/${id}`);
  return resp.data;
};

export const addSegmentToPost = async (segmentId, postId) => {
  const resp = await api.put(`/segments/${segmentId}/posts/${postId}`);
  return resp.data;
};
