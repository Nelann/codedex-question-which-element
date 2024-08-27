import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { UserProvider } from "./contexts/user-context";

import Root from "@/pages/root";
import HomePage from "@/pages/home";
import QuizPage from "./pages/quiz";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Route>
  )
);

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
