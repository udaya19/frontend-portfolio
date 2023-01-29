import { addApi, deleteApi, getApi, getByIdApi } from "./apiResposne";

export const getAboutApi = () => getApi("/about");

export const getAboutByIdApi = (id) => getByIdApi(`/about/${id}`);

export const addAboutApi = (body) => addApi("/about/add", body);

export const deleteAboutApi = (id) => deleteApi(`/about/delete/${id}`);
