import logo from './logo.svg';
import './App.css';
import PageLayout from './components/PageLayout';
import NavigationHeader from './components/NavigationHeader';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

function App() {
  return (
    <PageLayout>
        <NavigationHeader />
    </PageLayout>
  );
}

export default App;
