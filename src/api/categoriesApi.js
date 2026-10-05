import { httpClient } from "./httpClient";

export const categoriesApi = {
    list: () => httpClient.get('/api/categories').then((response) => response.data),
}