import "./App.css";
import GamingPage from "./Pages/GamingPage";
import Header from "./Pages/Header";
import MainPage from "./Pages/MainPage";
import "./styles/dist/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RankingPage from "./Pages/RankingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/gaming-page">
            <GamingPage />
          </Route>
          <Route path="/ranking-page">
            <RankingPage />
          </Route>
          <Route path="/">
            <Header />
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
