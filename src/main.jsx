import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App.jsx'
import Resume from './components/pages/Resume.jsx'
import './output.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/resume",
    element: <Resume />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
