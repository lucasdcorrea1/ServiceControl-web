import React from 'react';
import { toast } from 'react-toastify';

export default async function notify(msg, icon, type, position) {
  let content = (
    <div style={{ display: 'flex', verticalAlign: 'middle' }}>
      {/* <Col> */}
      <p style={{ fontSize: '20px', textAlign: 'center', verticalAlign: 'middle' }}>{icon}</p>
      {/* </Col> */}
      {/* <Col> */}
      <p style={{ margin: 'auto', fontSize: '14px', fontFamily: 'Roboto, sans-serif', marginLeft: '15px', textAlign: 'justify', marginRight: '3px' }}>{msg}</p>
      {/* </Col> */}
    </div>);

  if (type === 'error') {
    toast.error(content, {
      position: position,
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
  } else if (type === 'success') {
    toast.success(content, {
      position: position,
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
  } else if (type === 'info') {
    toast.info(content, {
      position: position,
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });

  } else if (type === 'warn') {
    toast.warn(content, {
      position: position,
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });

  } else if (type === 'default') {
    toast(content, {
      position: position,
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
  }
};