window.jQuery = require("jquery");
require("bootstrap");

import React from 'react';
import {render} from 'react-dom';


import Moment from 'moment';
var momentLocalizer = require('react-widgets/lib/localizers/moment')
momentLocalizer(Moment);

import {Route, NotFoundRoute, DefaultRoute, RouteHandler, Link} from "react-router";
import Router from "react-router";
import Login from "./login-form.jsx";
import CreditForm from "./credit";
import  Dashboard from "./dashboard"
import OffersForm from "./offers";
import TermsForm from "./terms";
import ContactForm from "./contact";
import content, {loadContent} from "./content.js";
var x;

var MediaQuery = require('react-responsive');
var MobNavMenu = React.createClass({
    getInitialState: function() {
        return { childVisible: false };
    },
    onClick: function() {
        this.setState({childVisible: !this.state.childVisible});
    },



    render: function() {
        
        
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 customNavStyle">
                        <div className="rightAlignStyle1">
                            <label className="navMIconStyle" onClick={this.onClick}></label>
                        </div>
                        <label className="navMobIcon" onClick={this.onClick}></label>
                        {
                            this.state.childVisible
                                ? (
                                <center>
                                <ul className="nav" role="tablist">
                                    <li  role="presentation" className="tabclass1">
                                        <Link to="dashboard" className="containerclass2"><p onClick={this.onClick}>Overview</p></Link>
                                    </li>
                                    <li role="presentation" className="tabclass1">
                                        <Link to="credit" className="containerclass2"><p onClick={this.onClick}>My Card</p></Link>
                                    </li>
                                    <li role="presentation" className="tabclass1">
                                        <Link to="offers" className="containerclass2"><p onClick={this.onClick}>Offers</p></Link>
                                    </li>
                                    <li role="presentation" className="tabclass1">
                                        <Link to="terms" className="containerclass2"><p onClick={this.onClick}>Terms</p></Link>
                                    </li>
                                    <li role="presentation" className="tabclass1">
                                        <Link to="contact" className="containerclass2"><p onClick={this.onClick}>Contact us</p></Link>
                                    </li>

                                </ul></center>
                            )
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this is for debug only, skip login dialog and goes to first tab immediately
      setTimeout(()=> {
           this.decodeData("qwe", "qweqwe");
       }, 100);
    }

    decodeData(username, password) {
        if (loadContent(username, password)) {
            this.setState({error: null, data: content});
            this.context.router.transitionTo("dashboard");
        } else {
            console.log("!!");
            this.setState({error: "Invalid Password", data: null});
        }
    }

    mainContainerDyn() {
        if (navigator.userAgent.match(/iPhone/i)) {
            return "containerPaddingm"
        }
        else  if (navigator.userAgent.match(/Android/i))
        {
            return "containerPaddingm"
        }
        else  if (navigator.userAgent.match(/BlackBerry/i)) {
            return "containerPaddingm"
        }
        else if (navigator.userAgent.match(/webOS/i)) {
            return "containerPaddingm"
        }
        else if (navigator.userAgent.match(/iPad/i)) {
            return "containerPaddingm"
        }
        else {
            return "containerPadding"
        }
    }

    componentDidMount() {
        //console.log("Hi...");
       // this.context.router.transitionTo('/dashboard/dashboard-page');
    }

        
    render() {
        if (this.state.data) {
            var route = this.context.router.getCurrentRoutes()[1];
            var name = route.name;


            var color_inner = "";
            let customer = content.Customer;
            if(customer.hasOwnProperty("overViewPage")) {
                let overViewPage = customer.overViewPage;
                if (overViewPage.hasOwnProperty("colorInfo")) {
                    let colorInfo = overViewPage.colorInfo;
                    if (colorInfo.hasOwnProperty("frame_color")) {
                        color_inner = colorInfo.innermailcontainer;
                    }
                }
            }

            var divStyle_innermailcontainer = {

                backgroundColor: color_inner


            };


            return (
                <div className={this.mainContainerDyn()}>
                    <div className="container-fluid margpadd0">
                        <div className="col-md-3 col-xs-12 dfccLogo">&nbsp;</div>
                        <div className="col-md-9 col-xs-12 col-sm-12 nav-web customNavStyle navBgColcor">
                            <ul className="nav nav-tabs">
                                <li>
                                    <Link to="dashboard" >Overview</Link>
                                </li>
                                <li>
                                    <Link to="credit">My Card</Link>
                                </li>
                                <li>
                                    <Link to="offers">Offers</Link>
                                </li>
                                <li>
                                    <Link to="terms">Terms</Link>
                                </li>
                                <li>
                                    <Link to="contact">Contact us</Link>
                                </li>
                              </ul>

                        </div>
                    </div>

                    <div className="innerMainContainer">
                        <br/>
                        <div className="nav-mob row">
                            <MobNavMenu/>
                        </div>
                        <div className="tab-content container">
                            <RouteHandler data={this.state.data}/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <Login onLogin={this.decodeData.bind(this)} error={this.state.error}/>
        }
    }
}

App.contextTypes = {
    router: React.PropTypes.func
};


var routes = (
    <Route handler={App} path="/">
        <DefaultRoute name="dashboard" handler={Dashboard}/>
        <Route name="credit" handler={CreditForm}>
            <DefaultRoute name="home" handler={CreditForm.Home}/>
            <Route name="credit-transaction" handler={CreditForm.CraditT}/>
            <Route name="my_reward" handler={CreditForm.MyReward}/>
        </Route>
        <Route name="offers" handler={OffersForm}/>
        <Route name="terms" handler={TermsForm}>
            <DefaultRoute name="importantInformation" handler={TermsForm.ImportantInformationT}/>
            <Route name="regulatory" handler={TermsForm.RegulatoryT}/>
        </Route>
        <Route name="contact" handler={ContactForm}/>
    </Route>
);

//var HashLocation = require("./PatchedRouterHashLocation");

Router.run(routes, function (Handler) {
    let appHost = document.getElementById('app');
    render(<Handler/>, appHost);
});







