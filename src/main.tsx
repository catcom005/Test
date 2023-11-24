import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'jotai';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
