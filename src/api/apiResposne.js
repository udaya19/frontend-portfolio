import apiInstance from ".";

export const getApi = (url) => apiInstance.get(`${url}`);

export const getByIdApi = (url) => apiInstance.post(`${url}`);

export const addApi = (url, body) => apiInstance.post(`${url}`, body);

export const deleteApi = (url) => apiInstance.post(`${url}`);
