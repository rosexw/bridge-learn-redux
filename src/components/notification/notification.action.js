import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './notification.types';

export function createShowNotificationAction(payload) {
  return {
    type: SHOW_NOTIFICATION,
    payload,
  };
}

export function createHideNotificationAction() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
