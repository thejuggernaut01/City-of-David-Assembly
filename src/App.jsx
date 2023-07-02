import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import RootRoute from "./pages/RootRoute";
import BlogPage from "./pages/BlogPage";
import Error from "./pages/Error";
import SinglePost from "./pages/SinglePost";
import BlogRoute from "./pages/BlogRoute";

// const BlogPage = lazy(() => import("./pages/BlogPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootRoute />,
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
