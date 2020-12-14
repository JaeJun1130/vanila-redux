import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../routers/Home";
import Detail from "../routers/Deatil";

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/:id" exact>
                <Detail />
            </Route>
        </Router>
    );
}

export default App;
