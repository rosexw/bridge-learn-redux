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

export function createHideNotificationAction() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
