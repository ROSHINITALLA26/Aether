import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Location,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import EchoGalaxy from "./pages/EchoGalaxy";
import ClubsPage from "./pages/Clubs";
import GamesPage from "./pages/Games";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BottomNav from "./components/BottomNav";
import TopBar from "./components/TopBar";

function Protected({ children }: { children: React.ReactNode }) {
  const { token } = useAuth();
  const loc = useLocation() as Location;

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: loc }}
        replace
      />
    );
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      {/* MAIN WRAPPER — Desktop responsive */}
      <div className="w-full min-h-screen relative bg-gradient-to-b px-10 pt-10">
        {/* HEADER */}
        <TopBar />

        {/* PAGE CONTENT — Reduced padding */}
        <div className="pt-4 pb-32">  {/* pb-32 prevents overlap with bottom nav */}
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/echo"
              element={
                <Protected>
                  <EchoGalaxy />
                </Protected>
              }
            />
            <Route
              path="/clubs"
              element={
                <Protected>
                  <ClubsPage />
                </Protected>
              }
            />
            <Route
              path="/games"
              element={
                <Protected>
                  <GamesPage />
                </Protected>
              }
            />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* MOBILE NAV */}
        <BottomNav />

      </div>
    </AuthProvider>
  );
}