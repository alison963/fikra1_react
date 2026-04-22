import api from "../../../shared/api/axios"; 

const BASE_URL = "http://localhost:8082";

export const getBookmarkedPosts = async () => {
  const response = await api.get(`${BASE_URL}/api/office-posts/bookmarked/`)
  return response.data;
}

export const bookmarkPost = async (postId: string) => {

  const response = await api.post(`${BASE_URL}/api/office-posts/${postId}/bookmark`);
  console.log("Bookmark response:", response);
  return response.data;
}

export const unbookmarkPost = async (postId: string) => {
  const response = await api.delete(`${BASE_URL}/api/office-posts/${postId}/unbookmark`);
  console.log("Unbookmark response:", response);
  return response.data;
}