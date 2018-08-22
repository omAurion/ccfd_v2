
import React from "react";

class ImportantInformationForm  extends React.Component {

    render() {
        return (
           <div className="row">
                <div className="col-xs-12 col-md-8 col-sm-12 borderRightGreay">
                    <div className="row">
                        <div className="container-class backgroundWhite">
                            <div className="col-xs-12 col-sm 12 col-md-12">
                                <div className="col-xs-12 col-sm 12 col-md-12">
                                    <div className="mainHeadingStyle margtop10"><span className="colorRed">Important Information</span></div>
                                    <div className="offersBorderStyle normal-text margtop5">
                                        <ul>
                                            <li> The 'Available Credit Card Limit' shown in this statement takes into account charges incurred but not due. Please ensure that at least the 'Minimum Amount Due' reaches us by the 'Due Date'.</li>
                                            <li> If the minimum amount due or part amount less than the total amount due is paid, interest charges are applicable(including fresh purchase, if any) on an average daily reducing balance method.</li>
                                            <li> The 'To Hotlist your credit card, login into net banking or call our phone banking numbers, please <a className="colorRed textUnderLine">click here</a>. </li>
                                            <li>DFCC Bank recently conducted a demonstration of its latest mobile innovation, the Vardhana Virtual Wallet. This mobile app was launched as yet another financial inclusion enabler by DFCC and it is a first in the country’s banking industry.The event was attended by DFCC’s customers, merchantsand members of the media, who were able to learn more about the various features and benefits of using the Vardhana Virtual Wallet.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="clearfix">&nbsp;</div>
                                <div className="minHeight149">&nbsp;</div>
                                <div className="clearfix">&nbsp;</div>
                            </div>
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


module.exports = ImportantInformationForm;


ImportantInformationForm.contextTypes = {
    router: React.PropTypes.func
};


