import { httpClient } from "./httpClient";

export const authApi = {
    register: (body) => httpClient.post("/api/auth/register", body).then((response) => response.data),
    login: (body) => httpClient.post("/api/auth/login", body).then((response) => response.data),
}