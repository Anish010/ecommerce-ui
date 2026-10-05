import { LOCALE } from './constants';


export function formatDate(value, withTime = false) {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';


  return new Intl.DateTimeFormat(
    LOCALE,
    withTime ? { dateStyle: 'medium', timeStyle: 'short' } : { dateStyle: 'medium' }
  ).format(date);
}
