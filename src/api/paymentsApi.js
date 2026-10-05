import { http } from './httpClient';


export const paymentsApi = {
  byOrderId: (orderId) => http.get('/api/payments/order/' + orderId).then((r) => r.data),
};
