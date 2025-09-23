import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Live from "./pages/Live";
import About from "./pages/About";
import Rewards from "./pages/Rewards";
import CoinBomb from "./games/coin-bomb";
import "./App.css";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import { UNAUTH_ROUTES, AUTH_ROUTES } from "./constants/routes.constants";
import Dashboard from "./pages/user/Dashboard";
import ContactSupport from "./pages/user/ContactSupport";
import PlayGames from "./pages/user/PlayGames";
import Betting from "./pages/user/Betting";
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";

const getRouteWithLayout = (path: string, element: React.ReactNode) => {
  return <Route key={path} path={path} element={<Layout>{element}</Layout>} />;
};

const getAuthRouteWithLayout = (path: string, element: React.ReactNode) => {
  return <Route key={path} path={path} element={<AuthLayout>{element}</AuthLayout>} />;
};

const routeConfig = [
  { path: UNAUTH_ROUTES.HOME, element: <Home /> },
  { path: UNAUTH_ROUTES.GAMES, element: <Games /> },
  { path: UNAUTH_ROUTES.LIVE, element: <Live /> },
  { path: UNAUTH_ROUTES.ABOUT, element: <About /> },
  { path: UNAUTH_ROUTES.REWARDS, element: <Rewards /> },
  { path: UNAUTH_ROUTES.LOGIN, element: <Login /> },
  { path: UNAUTH_ROUTES.REGISTER, element: <Register /> },
  { path: AUTH_ROUTES.GAMES.COIN_BOMB, element: <CoinBomb /> },
];

const authRouteConfig = [
  // Add authenticated routes here if needed in the future
  { path: AUTH_ROUTES.GAMES.COIN_BOMB, element: <CoinBomb /> },
  { path: AUTH_ROUTES.DASHBOARD, element: <Dashboard /> },
  { path: AUTH_ROUTES.CONTACT_SUPPORT, element: <ContactSupport /> },
  { path: AUTH_ROUTES.PLAY_GAMES, element: <PlayGames /> },
  { path: AUTH_ROUTES.BETTING, element: <Betting /> },
  { path: AUTH_ROUTES.PROFILE, element: <Profile /> },
  { path: AUTH_ROUTES.SETTINGS, element: <Settings /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {routeConfig.map(({ path, element }) => getRouteWithLayout(path, element))}
        {authRouteConfig.map(({ path, element }) => getAuthRouteWithLayout(path, element))}
        <Route path={UNAUTH_ROUTES.ROOT} element={<Navigate to={UNAUTH_ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
