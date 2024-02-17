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
import { RestaurantsContextProvider } from "./context/RestaurantContext";

const App = () => {
  
  return (
    <RestaurantsContextProvider>
      <div className="container">
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
    </RestaurantsContextProvider>
  );
};
export default App;
