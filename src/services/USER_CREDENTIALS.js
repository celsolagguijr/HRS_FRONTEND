const sessionStorage_data = sessionStorage.getItem("userCredentials")
  ? sessionStorage.getItem("userCredentials")
  : null;

const userCredentials = sessionStorage_data
  ? JSON.parse(sessionStorage_data)
  : null;
export default userCredentials;
