import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './notification.types';

export function createShowNotificationAction(payload) {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      level: 'error',
      message: 'no fetch!'
    },
  };
}

export function newMessageAction(payload) {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      level: 'warning',
      message: 'new Pokemon!'
    },
  };
}


export function createHideNotificationAction() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
