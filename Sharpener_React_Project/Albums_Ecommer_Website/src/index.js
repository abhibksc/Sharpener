import ReactDOM from 'react-dom/client';
import { ContextProvider } from './Components/ContextAPI.js/Context';
import { RouterProvider } from 'react-router-dom';


import './index.css';
import App from './App';
import AppRouter from '../AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContextProvider><RouterProvider router={AppRouter}/></ContextProvider>);
