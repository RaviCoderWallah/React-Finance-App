import { createRoot } from 'react-dom/client'
import './index.css'
import './custom.css'; 
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Budgets from './Pages/Budgets.jsx';
import Pots from './Pages/Pots.jsx';
import Transactions from './Pages/Transactions.jsx';
import RecurringBills from './Pages/RecurringBills.jsx';
import Overview from './Pages/Overview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Overview />
      },
      {
        path: "/budgets",
        element: <Budgets />
      },
      {
        path: "/pots",
        element: <Pots />
      },
      {
        path: "/transactions",
        element: <Transactions />
      },
      {
        path: "/recurring",
        element: <RecurringBills />
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
