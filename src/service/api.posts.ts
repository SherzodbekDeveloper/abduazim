import { API_URL } from "@/constants";
import axios from "axios";

export const getLatestPosts = async (): Promise<{
  data: any;
  status: number;
}> => {
  try {
    const res = await axios.get(`${API_URL}/posts`);
    return {
      data: res.data.posts,
      status: res.status,
    };
  } catch (error) {
    console.error("Error fetching latest posts:", error);

    return {
      data: null,
      status: 500,
    };
  }
};
