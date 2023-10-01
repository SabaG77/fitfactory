import "./css/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesMap } from "./services";
import { Footer, Header } from "./pages";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          {routesMap.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
