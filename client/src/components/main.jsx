import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Update from './update';
import InvestmentTrust from './investmentTrust';
import ForeignInvestors from './foreignInvestors';
import Dealer from './dealer';
import Query from './query';

const Main = () => {
    return (
        <Switch>
            <Route path="/updateDatabase" component={Update} />
            <Route path="/foreigninvestors" component={ForeignInvestors} />
            <Route path="/investmenttrust" component={InvestmentTrust} />
            <Route path="/dealer" component={Dealer} />
            <Route path="/test" component={Query} />
        </Switch>
    );
};

export default Main;
