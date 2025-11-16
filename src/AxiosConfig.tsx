import axios, { type InternalAxiosRequestConfig, type AxiosResponse, AxiosError } from "axios";

// Create Axios instance
const AxiosConfig = axios.create({
  baseURL: "https://localhost", // Change to your API
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ===== REQUEST INTERCEPTOR =====
AxiosConfig.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Example: attach token from localStorage
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ===== RESPONSE INTERCEPTOR =====
AxiosConfig.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        // Handle unauthorized
        console.warn("Unauthorized! Redirecting to login...");
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else if (status === 403) {
        // Handle forbidden
        alert("You do not have permission to perform this action.");
      } else if (status >= 500) {
        // Handle server errors
        console.error("Server error:", error.response.data);
      }
    } else if (error.request) {
      // No response received
      console.error("Network error:", error.request);
    } else {
      // Something else
      console.error("Axios error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default AxiosConfig;
