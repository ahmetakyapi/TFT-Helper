import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Champions from "./components/Champions/Champions";
import MetaComps from "./components/MetaComps/MetaComps";
import Items from "./components/Items/Items";
import Home from "./components/Home/Home";
import styled from "styled-components";

class App extends Component {
    render() {
        return (

        <React.Fragment>
        <Router>
            <Container>
            <Switch>
            <Route exact path="/" component={Home}/>
                <Route path="/Champions" component={Champions}/>
                <Route path="/MetaComps" component={MetaComps}/>
                <Route path="/items" component={Items}/>
            </Switch>
            </Container>
        </Router>
        </React.Fragment>
    )
}
}
const Container = styled.div `
     background: #13334C;
     height: 100vh;
`
export default App

