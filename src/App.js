import React from 'react';
import './assests/css/style.css';
import './assests/css/responsive.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/index';
import DetailItem from './Components/DetailItems/index';
import Welcome from './Components/Welcome';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Sell from './Components/Sell';
// import NotAccount from './Home/Sell/NotAccount'
// import Account from './Home/Sell/Account'

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail-item" component={DetailItem} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/sign-in" component={SignIn} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/sell" component={Sell} />
                {/* <Route exact path="/sell-signup" component={NotAccount} /> */}
                {/* <Route exact path="/sell-signin" component={Account} /> */}
            </Switch>
        </>
    )
}
export default App;
