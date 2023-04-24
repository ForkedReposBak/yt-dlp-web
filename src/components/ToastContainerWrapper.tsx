'use client';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// `use client` Warpper
export function ToastContainerWrapper() {
  return (
    <ToastContainer
      position='bottom-right'
      autoClose={3000}
      closeOnClick={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
  );
}
