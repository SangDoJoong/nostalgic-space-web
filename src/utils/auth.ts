import { signInUser, signUpUser } from 'src/apis/User';

export const signIn = async (formData: {
  username: string;
  password: string;
}) => {
  const { username, access_token } = await signInUser(
    formData.username,
    formData.password,
  );

  // 로컬 스토리지에 토큰 저장
  localStorage.setItem('token', access_token);

  return { username, token: access_token };
};

export const signup = async (formData: {
  name: string;
  password: string;
  password2: string;
}) => {
  return await signUpUser(formData.name, formData.password, formData.password2);
};
