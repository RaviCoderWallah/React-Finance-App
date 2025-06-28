import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Budgets from './Pages/Budgets.jsx';
import Pots from './Pages/Pots.jsx';
import Transactions from './Pages/Transactions.jsx';
import RecurringBills from './Pages/RecurringBills.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        element: <Transactions/>
      },
            {
        path: "/recurring",
        element: <RecurringBills/>
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
