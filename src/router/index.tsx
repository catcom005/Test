import { createBrowserRouter } from 'react-router-dom';
import DemoPage from './demo-page';
import App from '../App';

export const router = createBrowserRouter([
    ...DemoPage,
    {
        path: '/',
        element: <App />
    }
]);