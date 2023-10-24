// libbraries
import { Routes, Route } from "react-router-dom";

// custom components
import Layout from "../components/Layout";
import Home from "../pages/Home/index";

// import PrivateRoute from './privateRouter';
function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <Home />
            // </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
