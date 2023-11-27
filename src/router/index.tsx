import { createBrowserRouter } from 'react-router-dom';
import DemoPage from './demo-page';
// import AllCustomerPage from './customer';
import App from '../App';

export const router = createBrowserRouter([
  ...DemoPage,
  // ...AllCustomerPage,
  {
    path: '/',
    element: <App />,
  },
]);
