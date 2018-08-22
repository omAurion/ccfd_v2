import React from "react";
import {Route, NotFoundRoute, DefaultRoute, RouteHandler, Link} from "react-router";
import _ from "lodash";

export default class CreditForm extends React.Component {

    render() {
        var route = _.last(this.context.router.getCurrentRoutes());
        var name = route.name;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 paddingDesktop">
                        <div className="containerMiddle customSubNavStyle">
                            <ul>
                                <li id="summaryTab" >
                                    <Link to="home"><p>Summary</p></Link>
                                </li>
                                <li id="transactionTab" >
                                    <Link to="credit-transaction"><p>Transaction</p></Link>
                                </li>
                                <li id="myRewardsTab" >
                                    <Link to="my_reward"><p>Rewards</p></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <RouteHandler data={this.props.data}/>
                </div>
            </div>
        );
    }
}

CreditForm.contextTypes = {
    router: React.PropTypes.func
}

import Home from "./home.jsx";
import CraditT from "./credit-transaction.jsx";
import MyReward from "./my_reward.jsx";


CreditForm.Home = Home;
CreditForm.CraditT = CraditT;
CreditForm.MyReward = MyReward;