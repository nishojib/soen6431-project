import { nanoid } from 'nanoid';
import { REMOVE_ALERT, SET_ALERT } from './types';

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const id = nanoid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

export const selectAlert = (state) => state.alert;
