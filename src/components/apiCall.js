import { getAboutApi } from "../api/about";

export const getAbout = async () => {
  try {
    const { results, success, error } = await (await getAboutApi()).data;
    return {
      results,
      success,
      error,
    };
  } catch (error) {
    alert(error.message);
  }
};
