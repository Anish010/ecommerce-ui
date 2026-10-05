export const ROLES = Object.freeze({
  USER: 'USER',
  ADMIN: 'ADMIN',
});


export const ORDER_STATUS = Object.freeze({
  PENDING: 'PENDING',
  PAYMENT_PROCESSING: 'PAYMENT_PROCESSING',
  CONFIRMED: 'CONFIRMED',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
});


// Statuses that are still changing on the backend -> keep polling.
export const IN_PROGRESS_STATUSES = [ORDER_STATUS.PENDING, ORDER_STATUS.PAYMENT_PROCESSING];


export const POLL_INTERVAL_MS = 2000;
export const PAGE_SIZE = 12;
export const AUTH_LOGOUT_EVENT = 'auth:logout';


export const PAYMENT_METHODS = [
  { value: 'CARD', label: 'Credit / Debit card' },
  { value: 'UPI', label: 'UPI' },
  { value: 'NET_BANKING', label: 'Net banking' },
];


// Change these two lines to switch currency formatting app-wide.
export const CURRENCY = 'INR';
export const LOCALE = 'en-IN';
