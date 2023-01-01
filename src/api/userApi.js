import apiInstance from ".";

const userEndPoint = "/users";
export const getUserImageApi = () => apiInstance.get(`${userEndPoint}/image`);

export const loginUserApi = (email, password) =>
  apiInstance.post(`${userEndPoint}/login`, { email, password });
