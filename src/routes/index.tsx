import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export function AppRoutes() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage/>} />
      </>
    )
  )

  return <RouterProvider router={router} />
}