
import React from "react";
import content from "../content";
        
class  MyRewardForm extends React.Component {

    myFunction() {
        alert("Your service has been sent successfully.");
    }


    render() {
        let customer = content.Customer;
        var image_banner = "";
        var image_link = "";
        var openingBalance = "";
        var cashback = "";
        var redeemed = "";
        var expiredAdjusted = "";
        var total = "";
        var cashbackToBeCredited = "";
        var accNo = "";
        var name = "";

        if(customer.hasOwnProperty("overViewPage")) {
            let overViewPage = customer.overViewPage;
            if (overViewPage.hasOwnProperty("creditCardSummary")) {
                let creditCardSummary = overViewPage.creditCardSummary;
                if (creditCardSummary.hasOwnProperty("cashbackToBeCredited")) {
                    cashbackToBeCredited = creditCardSummary.cashbackToBeCredited;
                }
                if (creditCardSummary.hasOwnProperty("accountNo")) {
                    accNo = creditCardSummary.accountNo;
                }
            }
            if (overViewPage.hasOwnProperty("customerInfo")) {
                let customerInfo = overViewPage.customerInfo;
                if (customerInfo.hasOwnProperty("name")) {
                    name = customerInfo.name;
                }
            }
        }

        if(customer.hasOwnProperty("myCardPage")) {
            let myCardPage = customer.myCardPage;
            if (myCardPage.hasOwnProperty("rewardSummary")) {
                let rewardSummary = myCardPage.rewardSummary
                if (rewardSummary.hasOwnProperty("openingBalance")) {
                    openingBalance = rewardSummary.openingBalance;
                }
                if (rewardSummary.hasOwnProperty("cashback")) {
                    cashback = rewardSummary.cashback;
                }
                if (rewardSummary.hasOwnProperty("redeemed")) {
                    redeemed = rewardSummary.redeemed;
                }
                if (rewardSummary.hasOwnProperty("expiredAdjusted")) {
                    expiredAdjusted = rewardSummary.expiredAdjusted;
                }
                if (rewardSummary.hasOwnProperty("total")) {
                    total = rewardSummary.total;
                }
            }
            if (myCardPage.hasOwnProperty("rewardBanner")) {
                let rewardBanner = myCardPage.rewardBanner
                if (rewardBanner.hasOwnProperty("image")) {
                    image_banner = "data:image/jpeg;base64,"+rewardBanner.image;
                }
                if (rewardBanner.hasOwnProperty("link")) {
                    image_link = rewardBanner.link;
                }
            }
        }

        return (
           <div className="row">
                <div className="col-xs-12 col-md-8 col-sm-12 borderRightGreay">
                    <div className="row ">
                        <div className="container-class backgroundWhite creditCardReward borderTopGreay15 minHeight601">
                            <div className="col-xs-12 col-md-12 col-sm-12">
                                <div className="col-xs-12 col-sm 12 col-md-12">
                                     <div> <span className="colorRed">Cashback Reward</span></div>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="style_1" >
                                        <table className="zui-table thBgRed table-striped zuiTableFontSize">
                                            <thead>
                                            <tr className="bg-danger">
                                                <th className="text_align_center">Opening Balance</th>
                                                <th className="text_align_center">&nbsp;</th>
                                                <th className="text_align_center">CashBack for this Statement</th>
                                                <th className="text_align_center">&nbsp;</th>
                                                <th className="text_align_center">Redeemed</th>
                                                <th className="text_align_center">&nbsp;</th>
                                                <th className="text_align_center">Expired/Adjusted</th>
                                                <th className="text_align_center">&nbsp;</th>
                                                <th className="text_align_center">Total CashBack   </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr >
                                                <td className="text_align_center">{openingBalance}</td>
                                                <td className="text_align_center">+</td>
                                                <td className="text_align_center">{cashback}</td>
                                                <td className="text_align_center">-</td>
                                                <td className="text_align_center">{redeemed}</td>
                                                <td className="text_align_center">-</td>
                                                <td className="text_align_center">{expiredAdjusted}</td>
                                                <td className="text_align_center">=</td>
                                                <td className="text_align_center">{total}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <br/>
                                    </div>


                                    <p>Total CashBack to be credited : <b>{cashbackToBeCredited}</b></p>
                                    <br/>
                                    <div> <span className="colorRed">CashBack Credit Account</span></div>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="style_1" >
                                        <table className="zui-table thBgRed table-striped zuiTableFontSize">
                                            <thead>
                                            <tr className="bg-danger">
                                                <th  className="text_align_center">Account Holder Name</th>
                                                <th  className="text_align_center">Account Number</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr >
                                                <td className="text_align_center">{name}</td>
                                                <td className="text_align_center">{accNo}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <br/>
                                    </div>

                                    <p><b>Total CashBack amount indicated above will be credited within 30 days. Conditions apply.</b></p>




{/*
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12">
                                            <p><span className="greayColor fontSize15">Opening Balance</span> <br />{openingBalance}</p>

                                            <p className="borderTopGreay1">
                                                <p className="height0">&nbsp;</p>
                                                <span className="greayColor fontSize15">Disbursed</span> <br />{disbursed}
                                            </p>
                                            <p className="borderTopGreay1">
                                                <p className="height0">&nbsp;</p>
                                                <span className="greayColor fontSize15">Closing Balance</span> <br />{closingBalance}
                                            </p>
                                        </div>
                                        <div className="col-md-6 col-xs-12">
                                            <p><span className="greayColor fontSize15">Earned</span> <br />{earned}</p>
                                            <p className="borderTopGreay1">
                                                <p className="height0">&nbsp;</p>
                                                <span className="greayColor fontSize15">Adjusted</span> <br />{adjusted}
                                            </p>
                                        </div>
                                    </div>
*/}


                                    
{/*
                                <div className="row">
                                    <div className="col-xs-12 col-md-12 col-sp-12">

                                        <div className="col-xs-12 col-md-12">

                                            <div  className="divScroll divScrollRewards" >
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
*/}
                                <div className="clearfix">&nbsp;</div>
                                <div className="row">
                                    <div className="col-md-6 col-xs-12 textCenter">
                                        <a href="http://www.dfcc.lk/en/personal/deals-offers" target="_blank" className="btn bgred rewardsBtn">REDEEM YOUR REWARD POINTS</a>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mbMarginTop mbTextCenter">
                                        <a href="http://www.dfcc.lk/en/personal/deals-offers" target="_blank" className="btn bgred rewardsBtn">UPGRADE YOUR CARD</a>
                                    </div>
                                </div>
                                <br/>
                                </div>
                            </div>
                             <div className="clearfix">&nbsp;</div> 
                        </div>
                    </div>
                </div>
               <div className="col-md-4 col-xs-12 borderTopGreay15 minHeight554">
                   <figure className="bgred_credit_home"></figure>
               </div>
                <div className="clearfix"></div>
                <div className="borderTopGreay"></div>
            </div>
        );
    }
}

MyRewardForm.contextTypes = {
    router: React.PropTypes.func
};

module.exports = MyRewardForm;
