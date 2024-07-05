import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.tcx.academy/api",
  withCredentials: true,
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

export async function getTests() {
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
    console.error("Error fetching questions:", error);
    throw error;
  }
};

export const submitAnswers = async (testId, answers, name) => {
  try {
    const response = await apiClient.post("/certify/submit-answers", {
      testId,
      answers,
      name,
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting answers:", error);
    throw error;
  }
};

export async function forgotPass(email) {
  try {
    const response = await apiClient.post("/auth/forgetPassword", { email });
    return response;
  } catch (error) {
    return error;
  }
}

export async function VerifyOTP(email, token) {
  try {
    const response = await apiClient.post("/auth/verify", { email, token });
    return response;
  } catch (error) {
    return error;
  }
}
export async function ResetPassword(email, password) {
  try {
    const response = await apiClient.post("/auth/reset", { email, password });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getAllProjects() {
  try {
    const response = await apiClient.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    throw error; // Rethrow to allow further error handling by the caller
  }
}

export async function getProjectByPid(pid) {
  try {
    const response = await apiClient.get(`/projects/${pid}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with pid ${pid}:`, error);
    throw error; // Rethrow to handle exceptions where this function is called
  }
}
