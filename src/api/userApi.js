import apiInstance from ".";

const userEndPoint = "/users";
export const getUserImageApi = () => apiInstance.get(`${userEndPoint}/image`);
