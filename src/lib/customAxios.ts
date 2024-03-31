import axios, { AxiosInstance } from 'axios';

export const customAxios: AxiosInstance = axios.create({
  // todo: 서버 주소 추가
  // 서버 주소
  baseURL: `https://api주소`,
  headers: {
    'Content-Type': 'application/json',
    // 나중에 header 값 추가
  },
});
