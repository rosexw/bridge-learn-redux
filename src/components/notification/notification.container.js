import { Notification } from './notification.component';
import { connect } from 'react-redux';
import { createHideNotificationAction } from './notification.action';

const mapStateToProps = state => ({
  message: state.notification.message,
  showNotification: state.notification.showNotification,
  style: state.notification.level,
});

// Todo: remove mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  hideNotification: () => dispatch(createHideNotificationAction()),
});

export const NotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps, // Todo: remove
)(Notification);
