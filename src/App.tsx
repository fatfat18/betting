import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Layout from "./layout/Layout";
import { UNAUTH_ROUTES } from "./constants/routes.constants";

function getRouteWithLayout(path: string, element: React.ReactNode) {
  return <Route key={path} path={path} element={<Layout>{element}</Layout>} />;
}

const routeConfig = [
  { path: UNAUTH_ROUTES.HOME, element: <Home /> },
  { path: UNAUTH_ROUTES.GAMES, element: <Games /> },
  { path: UNAUTH_ROUTES.LOGIN, element: <Login /> },
  { path: UNAUTH_ROUTES.REGISTER, element: <Register /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {routeConfig.map(({ path, element }) => getRouteWithLayout(path, element))}
        <Route path={UNAUTH_ROUTES.ROOT} element={<Navigate to={UNAUTH_ROUTES.HOME} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
