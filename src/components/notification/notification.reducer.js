import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './notification.types';

const INITIAL_STATE = {
  showNotification: false,
  message: '',
  level: '',
};

export const notificationReducer = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case SHOW_NOTIFICATION:
      return {
        showNotification: true,
        message: payload.message,
        level: payload.level,
      };
    case HIDE_NOTIFICATION:
      return INITIAL_STATE;

    default:
      return state;
  }
};
