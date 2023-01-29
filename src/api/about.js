import apiInstance from ".";
import { getApi } from "./apiResposne";

export const getAboutApi = () => getApi("/about");

export const addAboutApi = (body) => apiInstance.post("/about/add", body);
