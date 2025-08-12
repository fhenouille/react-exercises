import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { DialogDemo, DropdownDemo, Home, StorageDemo } from "./pages/index.ts";

const container = document.getElementById("root");
if (container) {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children: [
        { index: true, Component: Home },
        { path: "storage", Component: () => <StorageDemo /> },
        { path: "dialog", Component: () => <DialogDemo /> },
        { path: "dropdown", Component: () => <DropdownDemo /> },
        { path: "*", Component: () => <Home /> },
      ],
    },
  ]);

  createRoot(container).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
