import { httpClient } from "./httpClient";

export const usersApi = {
    me: () => httpClient.get('/api/users/me').then((response) => response.data),
    updateMe: (body) => httpClient.put('/api/users/me', body).then((response) => response.data),
    addresses: () => httpClient.get('/api/users/me/addresses').then((response) => response.data),
    addAddress: (body) => httpClient.post('/api/users/me/addresses', body).then((response) => response.data),
    updateAddress: (addressId, body) => httpClient.put(`/api/users/me/addresses/${addressId}`, body).then((response) => response.data),
    listUsers: () => httpClient.get('/api/users').then((response) => response.data), //ADMIN ONLYY
};
