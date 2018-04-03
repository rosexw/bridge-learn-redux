import React from 'react';
import { Button } from '../button';

export const Notification = ({
  showNotification,
  message = '',
  style = '',
  hideNotification, // Todo: remove
}) => (
  <div>
    {showNotification && (
      <div className={`notification ${style}`}>
        <Button onClick={hideNotification}>X</Button>
        {/* Todo: remove the X Button */}
        <h2>{message}</h2>
      </div>
    )}
  </div>
);
