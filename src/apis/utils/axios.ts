import Axios, { AxiosInstance } from 'axios';
import { WebPageBaseURL } from 'src/constants/constants';

/**
  API client instance connects to the Nostalgic API Server.
*/
export const axiosAPIClient: AxiosInstance = Axios.create({
  baseURL: WebPageBaseURL,
});

/**
  API client instance connects to the Nostalgic API Server.
  Helps to call APIs that use the authentication.
  This instance requires JWT for the authentication.
*/
export const authAxiosAPIClient: AxiosInstance = Axios.create({});
