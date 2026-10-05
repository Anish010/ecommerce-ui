import { httpClient } from "./httpClient";

export const productsApi = {
    list: (params) => httpClient.get('/api/products', { params }).then((response) => response.data),
    byId: (productId) => httpClient.get(`/api/products/${productId}`).then((response) => response.data),
    create: (body) => httpClient.post('/api/products', body).then((response) => response.data), //ADMIN ONLY
    update: (productId, body) => httpClient.put(`/api/products/${productId}`, body).then((response) => response.data), //ADMIN ONLY
    remove: (productId) => httpClient.delete(`/api/products/${productId}`).then((response) => response.data), //ADMIN ONLY
}