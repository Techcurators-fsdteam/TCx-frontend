import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

export async function getQues(data) {
  try {
    const response = await apiClient.post("/questions", data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function login(data) {
  try {
    const response = await apiClient.post("/auth/login", data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function register(data) {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response.data;
  } catch (error) {
    return error;
  }
}
