import apiInstance from ".";

export const getApi = (url) => apiInstance.get(`${url}`);

export const addApi = (url, body) => apiInstance.post(`${url}`, body);
