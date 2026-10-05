import { CURRENCY, LOCALE } from './constants';


const formatter = new Intl.NumberFormat(LOCALE, { style: 'currency', currency: CURRENCY });


export function formatCurrency(value) {
  const amount = Number(value);
  return formatter.format(Number.isFinite(amount) ? amount : 0);
}
