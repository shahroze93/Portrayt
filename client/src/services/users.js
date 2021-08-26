import api from './api-config';

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};

export const updateUser = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
};

export const deleteUser = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
};