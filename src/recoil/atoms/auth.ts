import { atom } from 'recoil';
import { customAxios } from '../../lib/customAxios';

export const userState = atom({
  key: 'user',
  default: { username: '', email: '' },
});

export const isLoggedInState = atom<boolean>({
  // todo: 토큰을 통해서 user 정보를 가져오는 로직 추가
  key: 'isLoggedIn',
  default: !!localStorage.getItem('token'),
});

export const login = async (formData: { email: string; password: string }) => {
  // todo: 실패했을 때 처리
  //const response = await customAxios.post("/auth/login", formData);
  // todo: username 수정
  const response = {
    data: {
      username: 'test',
      email: formData.email,
      token: '1234',
    },
  };
  const { username, email, token } = response.data;

  // todo: token 수정
  localStorage.setItem('token', token); // 로컬 스토리지에 토큰 저장

  return { username, email, token };
};

export const signup = async (formData: {
  username: string;
  email: string;
  password: string;
}) => {
  // todo: 실패했을 때 처리
  //const response = await customAxios.post("/auth/signup", formData);
  // todo: username 수정
  const response = {
    data: {
      username: formData.username,
      email: formData.email,
      token: '1234',
    },
  };
  const { username, email, token } = response.data;

  // todo: token 수정
  localStorage.setItem('token', token); // 로컬 스토리지에 토큰 저장

  return { username, email, token };
};

export const logout = async () => {
  try {
    await customAxios.post('/auth/logout');

    localStorage.removeItem('token');
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
