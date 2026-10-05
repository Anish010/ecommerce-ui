/**
 * Turns any axios error into a plain Error with:
 *   message      - safe to show to the user
 *   status       - HTTP status (0 when the server was unreachable)
 *   fieldErrors  - optional { field: message } map from the backend
 */
export function normalizeError(error) {
  const status = error?.response?.status ?? 0;
  const data = error?.response?.data;


  let message;
  if (!error?.response) {
    message = 'Cannot reach the server. Please check your connection.';
  } else {
    message =
      (typeof data === 'string' && data) ||
      data?.message ||
      data?.error ||
      `Request failed (${status})`;
  }


  const normalized = new Error(message);
  normalized.status = status;
  normalized.fieldErrors = data?.errors ?? null;
  normalized.original = error;
  return normalized;
}
