import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.tsx'
import App from './App.tsx';
import Login from "./pages/Login.tsx"
import Signup from './pages/SignUp.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
