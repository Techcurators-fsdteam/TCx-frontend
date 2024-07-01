import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
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


export async function getTests(){
  try {
    const response = await apiClient.get("/certify/get-tests");
    return response.data;
  } catch (error) {
    return error;
  }
}

export const getQuestions = async (testId) => {
  try {
    const response = await apiClient.get(`/certify/get-questions/${testId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const submitAnswers = async (testId, answers, name) => {
  try {
    const response = await apiClient.post('/certify/submit-answers', { testId, answers, name });
    return response.data;
  } catch (error) {
    console.error('Error submitting answers:', error);
    throw error;
  }
};