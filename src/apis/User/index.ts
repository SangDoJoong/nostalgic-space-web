import { axiosAPIClient } from 'src/apis/utils/axios';

/**
 * TODO: write comment
 * @param username
 * @param password
 */
export async function signInUser(username: string, password: string) {
  try {
    const response = await axiosAPIClient.post('/user/login', {
      username: username,
      password: password,
    });
    // Parse result from data
    const access_token: string = response.data.data.access_token;

    return { username, access_token };
  } catch (err) {
    // TODO: Error handling
    console.log(err);
    return { username: '', access_token: '' };
  }
}

export async function signUpUser(
  name: string,
  password1: string,
  password2: string,
) {
  try {
    const response = await axiosAPIClient.post('/user/create', {
      name,
      password1,
      password2,
    });
    // Parse result from data
    const { status_code, detail } = response.data;

    if (status_code !== 200) {
      new Error(detail);
    } else {
      return { status_code, detail };
    }
  } catch (err) {
    // TODO: Error handling
    console.log(err);
    return { username: '', access_token: '' };
  }
}
