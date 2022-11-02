import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Study from "./Study"
import CreateDeckSummary from "./CreateDeckSummay";
import {Switch, Link, Route} from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
      <Home/>
          </Route>
          <Route path="/decks/:deckId/study">
            <Study/>
          </Route>
          <Route path="/decks">
          <CreateDeckSummary/>

          </Route>
          <Route>
          <NotFound />
          </Route>
        </Switch>
        {/* TODO: Implement the screen starting here */}
       
      </div>
    </>
  );
}

export default Layout;
