export const FETCH_EMAILS_SUCCESS = 'FETCH_EMAILS_SUCCESS';

export const fetchEmailsSuccess = (threads) => ({
  type: FETCH_EMAILS_SUCCESS,
  payload: threads,
});
