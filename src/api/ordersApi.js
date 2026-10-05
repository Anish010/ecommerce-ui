import { http } from './httpClient';


export const ordersApi = {
  place: (body) => http.post('/api/orders', body).then((r) => r.data),
  mine: () => http.get('/api/orders/my').then((r) => r.data),
  byId: (id) => http.get('/api/orders/' + id).then((r) => r.data),
};
