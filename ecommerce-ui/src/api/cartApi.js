import { httpClient } from "./httpClient";

export const cartApi = {
    get: () => httpClient.get('/api/cart').then((response) => response.data),
    addItem: (productId, quantity) => httpClient.post('/api/cart/items', { productId, quantity }).then((response) => response.data),
    removeItem: (itemId) => httpClient.delete(`/api/cart/items/${itemId}`).then((response) => response.data),
    updateItem: (itemId, quantity) => httpClient.put(`/api/cart/items/${itemId}`, { quantity }).then((response) => response.data),
    clear: () => httpClient.delete('/api/cart').then((response) => response.data),
}