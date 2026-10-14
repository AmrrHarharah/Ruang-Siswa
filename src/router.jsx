import { Navigate } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import AdminSettings from "./pages/AdminSettings";
import Schedule from "./pages/Schedule";
import Classes from "./pages/Classes";
import GuestHome from "./pages/GuestHome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Santri, { Absensi, Nilai, SantriList } from "./pages/Santri";

function RequireAuth({ children }) {
  const isAuthenticated =
    window.localStorage.getItem("user-authenticated") === "true";

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export const appRoutes = [
  { path: "/", element: <GuestHome /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/admin",
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/about",
    element: (
      <RequireAuth>
        <About />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/profil",
    element: (
      <RequireAuth>
        <Profile />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/pengaturan",
    element: (
      <RequireAuth>
        <AdminSettings />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/jadwal",
    element: (
      <RequireAuth>
        <Schedule />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/kelas",
    element: (
      <RequireAuth>
        <Classes />
      </RequireAuth>
    ),
  },
  {
    path: "/admin/santri",
    element: (
      <RequireAuth>
        <Santri />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <SantriList /> },
      { path: "nilai", element: <Nilai /> },
      { path: "absensi", element: <Absensi /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
];
