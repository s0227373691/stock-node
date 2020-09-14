import React from 'react';
import { Route } from 'react-router-dom';

import InvestmentTrust from './investmentTrust';
import ForeignInvestors from './foreignInvestors';
import Dealer from './dealer';

const Main = () => {
    return (
        <div>
            <Route path="/foreigninvestors" component={ForeignInvestors} />
            <Route path="/investmenttrust" component={InvestmentTrust} />
            <Route path="/dealer" component={Dealer} />
        </div>
    );
};

export default Main;
