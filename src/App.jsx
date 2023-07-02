import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/UI/Loader";

import RootRoute from "./pages/RootRoute";
import BlogPage from "./pages/BlogPage";
import Error from "./pages/Error";
import SinglePost from "./pages/SinglePost";
import BlogRoute from "./pages/BlogRoute";

// const BlogPage = lazy(() => import("./pages/BlogPage"));
// const RootRoute = lazy(() => import("./pages/RootRoute"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Loader />
            </div>
          }
        >
          <RootRoute />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [],
    },
    {
      path: "blog",
      element: <BlogRoute />,
      children: [
        {
          index: true,
          element: <BlogPage />,
        },
        { path: ":slug", element: <SinglePost /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
