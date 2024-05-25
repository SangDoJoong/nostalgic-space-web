import Axios, { AxiosInstance } from 'axios';
import { WebPageBaseURL } from 'src/constants/constants';

/**
  API client instance connects to the Nostalgic API Server.
*/
export const axiosAPIClient: AxiosInstance = Axios.create({
  baseURL: `${WebPageBaseURL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
  API client instance connects to the Nostalgic API Server.
  Helps to call APIs that use the authentication.
  This instance requires JWT for the authentication.
*/
export const authAxiosAPIClient: AxiosInstance = Axios.create({
  baseURL: `${WebPageBaseURL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

authAxiosAPIClient.interceptors.request.use(
  config => {
    const accessToken = !!localStorage.getItem('token'); // Get JWT from the local storage.

    config.headers['Authorization'] = `Bearer ${accessToken}`; // Set JWT in headers before executing API call.
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
