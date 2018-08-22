
import React from "react";

import content from "../content";
import conn from "../conn";

import _ from "lodash";


class OffersForm  extends React.Component {

    render() {

        let customer = content.Customer;

        var card_offerLabel= "";
        var offer = "";
        var item_data = [];

        if(customer.hasOwnProperty("offersPage")) {
             offer = customer.offersPage;
            if (offer.hasOwnProperty("OffersPageItem")) {
                item_data = offer.OffersPageItem;


            }
            console.log("cardHolderData==>"+ card_offerLabel);
        }
        return (
            <div className="row">
                <div className="col-xs-12 col-md-8 col-sm-12 borderRightGreay">
                    <div className="row">
                        <div className="container-class backgroundWhite">
                            <div className="col-xs-12 col-sm 12 col-md-12" >
                                <div className="col-xs-12 col-md-12 col-sm-12">
                                    <div className="mainHeadingStyle margtop10"><span className="colorRed">Offers on your credit card</span></div>
                                    <div className="offersBorderStyle normal-text margtop5">
                                        <ul>
                                            {_.map(item_data, (id)=><li value={id.label}>{id.label}</li>)}
                                        </ul>
                                        
                                        <p className="offerTermsP">Terms &amp; Conditions Apply. Visit www.dfcc.lk/en/personal/deals-offers for offer details.</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="clearfix">&nbsp;</div>
                            <div className="clearfix">&nbsp;</div>  
                              <div className="col-xs-12 col-md-6 textCenter font12">
                                    <p><span className="colorRed">Online Offers</span></p>
                                    <div className="normal-text">
                                        <p>Avail delightful online deals and<br />discounts at selected outlets.</p>
                                        <u className="underline">
                                            <a className="btn bgred" href="http://www.dfcc.lk/en/personal/deals-offers" target="_blank">know more</a>
                                        </u>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6 textCenter font12">
                                    <p><span className="colorRed">Easy EMI Offers</span></p>
                                    <div className="normal-text">
                                        <p>Simplify your payments with convenient<br />EasyEMI offers on a variety of purchases.</p>
                                        <u className="underline">
                                            <a className="btn bgred" href="http://www.dfcc.lk/en/personal/deals-offers" target="_blank">know more</a>
                                        </u>
                                    </div>
                                </div>
                                 <div className="clearfix">&nbsp;</div>
                                <div className="minHeight47">&nbsp;</div>
                                <div className="clearfix">&nbsp;</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12  minHeight554">
                    <figure className="bgred_credit_home"></figure>
                </div>
                <div className="clearfix"></div>
                <div className="borderTopGreay"></div>
            </div>

        );
    }
}


module.exports = OffersForm;

OffersForm .contextTypes = {
    router: React.PropTypes.func
};

