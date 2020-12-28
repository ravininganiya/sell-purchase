import React from 'react';
import './assests/css/style.css';
import './assests/css/responsive.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/index';
// import Welcome from './Welcome';
import DetailItem from './Components/DetailItems/index';
// import Sell from './Home/Sell/Sell';
// import NotAccount from './Home/Sell/NotAccount'
// import Account from './Home/Sell/Account'
// import SignIn from './SignIn';
// import SignUp from './SignUp';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail-item" component={DetailItem} />
                {/* <Route exact path="/welcome" component={Welcome} /> */}
                {/* <Route exact path="/sell" component={Sell} /> */}
                {/* <Route exact path="/sell-signup" component={NotAccount} /> */}
                {/* <Route exact path="/sell-signin" component={Account} /> */}
                {/* <Route exact path="/sign-in" component={SignIn} /> */}
                {/* <Route exact path="/sign-up" component={SignUp} /> */}
            </Switch>
        </>
    )
}
export default App;
