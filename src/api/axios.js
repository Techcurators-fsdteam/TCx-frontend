import axios from "axios";
import { URL } from "./url";

const apiClient = axios.create({
  baseURL: URL,
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

export const submitAnswers = async (testId, answers, name, username) => {
  console.log(username);
  try {
    const response = await apiClient.post("/certify/submit-answers", {
      testId,
      answers,
      name,
      username,
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
    const response = await apiClient.get("/projects/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    throw error; // Rethrow to allow further error handling by the caller
  }
}

export async function getProjectByPid(pid) {
  try {
    const response = await apiClient.get(`/projects/projects/${pid}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with pid ${pid}:`, error);
    throw error; // Rethrow to handle exceptions where this function is called
  }
}

export const submitProject = async (gradioLink, pid, username) => {
  try {
    const response = await apiClient.post("/projects/submit", {
      gradioLink,
      pid,
      username,
    });
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      return error.response;
    } else if (error.request) {
      // Request was made but no response received
      console.error("Error request:", error.request);
      throw new Error("No response from the server");
    } else {
      // Something happened in setting up the request
      console.error("Error message:", error.message);
      throw new Error(error.message);
    }
  }
};

export const fetchAllChallenges = async () => {
  try {
    const response = await apiClient.get("/coding/tests");
    return response;
  } catch (error) {
    console.error("Error fetching all challenges:", error);
    throw error;
  }
};

// Fetch challenge by ID
export const fetchChallenge = async (testId) => {
  try {
    const response = await apiClient.get(`/coding/tests/${testId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching challenge with ID ${testId}:`, error);
    throw error;
  }
};

export async function getDrives() {
  try {
    const response = await apiClient.get("/apply");
    return response.data;
  } catch (error) {
    return error;
  }
}

export const submitInterviewTest = async ({
  fullName,
  contactNumber,
  emailId,
  universityCollege,
  rollNo,
  branch,
  resume,
  linkedInProfile,
  testId,
  answers,
  username,
  interviewId,
}) => {
  console.log(
    fullName,
    contactNumber,
    emailId,
    universityCollege,
    rollNo,
    branch,
    resume,
    linkedInProfile,
    testId,
    answers,
    username,
    interviewId
  );
  try {
    const response = await apiClient.post("/apply/submitTest", {
      fullName,
      contactNumber,
      emailId,
      universityCollege,
      rollNo,
      branch,
      resume,
      linkedInProfile,
      testId: testId,
      answers,
      username,
      interviewId,
    });
    return response;
  } catch (error) {
    console.error("Error submitting interview test:", error);
    throw error; // Rethrow to allow further error handling by the caller
  }
};



export const newsLetter= async(email,name)=>{
  try {
    const response = await apiClient.post(`/newsLetter`,{
      email,name
    });
    return response;
  } catch (error) {
    console.error(`Error sending Mail:`, error);
    throw error;
  }
}
