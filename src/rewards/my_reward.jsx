import React from "react";
import conn from "../conn";
import config from "../util/config";
import Griddle from 'griddle-react';
import content from "../content";


var accountfakedata =  [
    {
        "Opening Balance": "3500",
        "Earned": "50",
        "Disbursed": "0",
        "Adjusted": "30",
        "Closing Balance": "3520"


    },

];

const Columns2 = [
    {
        "columnName": "Opening Balance",
        "displayName": "Opening Balance",
        cssClassName: "alignrightrow",


    },
    {
        "columnName": "Earned",
        "displayName": "Earned",
        cssClassName: "alignrightrow",

    },
    {
        "columnName": "Disbursed",
        "displayName": "Disbursed",
        cssClassName: "alignrightrow",

    },
    {
        "columnName": "Adjusted",
        "displayName": "Adjusted",
        cssClassName: "alignrightrow",

    },
    {
        "columnName": "Closing Balance",
        "displayName": "Closing Balance",
        cssClassName: "alignrightrow",
       
    }

];


export default class Myrewards extends React.Component {


    myFunction() {
        alert("Your service has been sent successfully.");
    }

    pieChartData() {
        let data = fakeData3;
        let columns = _(data).map('Sector').uniq().value();
        data = _.groupBy(data, 'Sector');
        let services = _.reduce(data, (services, value, type)=>{
            services[type] = _.reduce(value, (total, service) => {
                let charge = parseFloat(service.sValue);
                if (!_.isNaN(charge)) {
                    return total + charge;
                } else {
                    return total;
                }
            }, 0);
            return services;
        }, {});
        return {
            json: [services],
            keys: {value: columns}
        };
    }
    render() {


        let customer = content.CUSTOMER;
        let custname = content.CUSTOMER_NAME;


        let cust_id = content.CUSTOMER_ID;
        let address1 = content.ADDRESS1;
        let address2 = content.ADDRESS2;
        let address3 = content.ADDRESS3;
        let address4 = content.ADDRESS4;
        var video;
        if (conn.online) {
            video = (
                <iframe type="text/html"
                        width="100%"
                        height="185px"
                        src="http://www.youtube.com/embed/ZcbJ5pPu04g"
                        frameBorder="0">
                </iframe>
            )
        } else {
            video = (
                <div className="default-image-instead-of-video">
                </div>
            )
        }


        return (

            <div className="container-class">
                <br/>
                <div className="row">


                    <div className="col-xs-12">

                        <div className="pink-caption" >
                            <p> Reward Points Summary</p>
                        </div>
                        <Griddle results={accountfakedata} tableClassName="table" showPager={false} columnMetadata={Columns2}
                                
                                 columns={["Opening Balance","Earned", "Disbursed","Adjusted","Closing Balance"]}/>

                    </div>
                </div>
                <br/>
                <br/>


                <div className="row">
                    <div className="col-xs-12 col-md-12 col-sp-12">

                        <div className="col-xs-12 col-md-9">

                            <div  className="divScroll" >
                                <div class="container" align="center">
                                    <div className="col-md-4 col-xs-12 col-xs-12" >
                                        <div className="gridimg1"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-12">
                                        <div className="gridimg2"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-12">
                                        <div className="gridimg3"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>

                                <div class="container" align="center">
                                    <div className="col-md-4 col-xs-12 col-xs-12" >
                                        <div className="gridimg4"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-12">
                                        <div className="gridimg5"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-12">
                                        <div className="gridimg6"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div class="container" align="center">
                                    <div className="col-md-4 col-xs-12 col-xs-12" >
                                        <div className="gridimg7"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-12">
                                        <div className="gridimg8"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-12">
                                        <div className="gridimg9"></div>
                                        <div className="divclassforImage">
                                            <input type="checkbox" className="checkmidddle"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <br/>

                            <div className="button-stylecenter">
                                <button onClick={this.myFunction.bind(this)}  type="button" className="button-stylecenter">Submit</button>
                            </div>

                        </div>


                        <div className="col-xs-3">
                            <figure className="img_rewards"></figure>
                        </div>


                    </div>

                </div>

                <br/>

                <br/>



            </div>


        );
    }
}
Myrewards.contextTypes = {
    db: React.PropTypes.object,
    router: React.PropTypes.func.isRequired
};
