import React from "react";
import "./styles/main.css";
import {
  About,
  Game,
  Games,
  Genres,
  Home,
  PcGames,
  PsGames,
  RecentGames,
  Stores,
  Tags,
  XboxGames,
  Error,
  MobileGames,
  Topgames,
} from "./pages/index";
import Search from "./components/Search/Search";
import SideNav from "./components/SideNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./components/datacontext/DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="flex flex-wrap flex-row text-white">
          <div className="w-full md:w-3/12 ">
            <SideNav />
          </div>
          <div className="w-full lg:w-9/12 ">
            <Search />
            <Switch>
              <Route path="/about" exact component={About} />
              <Route path="/game" exact component={Game} />
              <Route path="/allgames" exact component={Games} />
              <Route path="/" exact component={Home} />
              <Route path="/pc" exact component={PcGames} />
              <Route path="/playstation" exact component={PsGames} />
              <Route path="/recent" exact component={RecentGames} />
              <Route path="/stores" exact component={Stores} />
              <Route path="/tags" exact component={Tags} />
              <Route path="/genres" exact component={Genres} />
              <Route path="/xbox" exact component={XboxGames} />
              <Route path="/mobile" exact component={MobileGames} />
              <Route path="/topgames" exact component={Topgames} />
              <Route>
                <Error />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
