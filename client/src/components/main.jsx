import React from 'react';
import { Route } from 'react-router-dom';

import UpdateDatabase from './updateDatabase';
import InvestmentTrust from './investmentTrust';
import ForeignInvestors from './foreignInvestors';
import Dealer from './dealer';

const Main = () => {
    return (
        <>
            <Route path="/updateDatabase" component={UpdateDatabase} />
            <Route path="/foreigninvestors" component={ForeignInvestors} />
            <Route path="/investmenttrust" component={InvestmentTrust} />
            <Route path="/dealer" component={Dealer} />
        </>
    );
};

export default Main;
