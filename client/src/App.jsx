import React from "react";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import Home from "./routes/Home";
import UpdataPage from "./routes/UpdatePage";

const App = () => {
  return (
    <div>
      <Router>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id/update" component={UpdataPage} />
          <Route
            exact
            path="/restaurants/:id"
            component={RestaurantDetailPage}
          />
        </BrowserRouter>
      </Router>
    </div>
  );
};
export default App;
