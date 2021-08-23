import axios, { AxiosResponse } from "axios";
import { CategoryResult } from "types/movies";
import categories from "utils/movieCategories";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const Movies = {
  category: (category: string) => {
    const index = categories.findIndex(({ title }) => title === category);
    return requests.get<CategoryResult>(
      categories[index]?.url || categories[0].url
    );
  },
};

const agent = {
  Movies,
};

export default agent;
