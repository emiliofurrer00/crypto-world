import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import generateFakeData from "./utilities/fakergenerator";
//import Person from "./components/Person";
//import Table from "./components/Table";

//Routes/pages
import Home from "./routes/Home/Home";
import News from "./routes/News/NewsView";

const App = () => {

    return (
        <Router>  
        <Navbar/>
        <div className="app">         
        <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/news">
                    <News />
                </Route>
        </Switch>            
        </div>
        </Router>           
    )
}

export default App