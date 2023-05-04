import React from 'react';

export default function Notification(props) {
  const { message } = props;

  return (
    <div style={{ backgroundColor: 'lightgray', padding: '10px', margin: '10px 0' }}>
      <p>{message}</p>
    </div>
  );
}
