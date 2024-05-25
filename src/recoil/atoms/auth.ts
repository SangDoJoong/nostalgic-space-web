import { atom } from 'recoil';
import { customAxios } from '../../lib/customAxios';
import { User } from 'src/inferfaces';

export const userState = atom<User>({
  key: 'user',
  default: { username: '' },
});

export const isLoggedInState = atom<boolean>({
  // todo: 토큰을 통해서 user 정보를 가져오는 로직 추가
  key: 'isLoggedIn',
  default: !!localStorage.getItem('token'),
});

export const logout = async () => {
  try {
    await customAxios.post('/auth/logout');

    localStorage.removeItem('token');
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
