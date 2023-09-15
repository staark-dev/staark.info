// Importing Pages From Source
import Home         from "../pages/home/index";
import Contact      from "../pages/contact/index";
import Privacy      from "../pages/privacy/index";
import Terms        from "../pages/terms/index";
import FAQ          from "../pages/faq/index";
import Pricing      from "../pages/pricing/index";
import Features     from "../pages/features/index";

// Error Page Custom
import ErrorPage  from "../pages/404/index";

const AppRoutes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  
    {
      path: "/contact",
      element: <Contact />,
    },
  
    {
      path: "/privacy",
      element: <Privacy />,
    },
  
    {
      path: "/terms",
      element: <Terms />,
    },
  
    {
      path: "/faq",
      element: <FAQ />,
    },
  
    {
      path: "/features",
      element: <Features />,
    },
  
    {
      path: "/pricing",
      element: <Pricing />,
    },
];

export default AppRoutes;