import { addApi, getApi } from "./apiResposne";

export const getAboutApi = () => getApi("/about");

export const addAboutApi = (body) => addApi("/about/add", body);
