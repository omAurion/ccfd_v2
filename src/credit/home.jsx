
import React from "react";
import {controller} from "smartobjects";
import content from "../content";
class HomeForm extends React.Component {

    render() {
        let customer = content.Customer;
        var cardNumber = "";
        var statementDate = "";
        var paymentDueDate = "";
        var totalDues = "";
        var minAmtDue = "";
        var creditLimit = "";
        var availableCreditLimit = "";
        var availableCashLimit = "";
        var atTotalDues = "";
        var atMinAmtDue = "";
        var atOpeningBalance="";
        var atCreditLimit = "";
        var atCredits="";
        var atDebits="";
        var cashAdvances = "";
        var atFinanceCharges="";
        var atPayment="";
        var atTotalDues="";
        var overLimit = "";
        var threeMonths="";
        var twoMonths="";
        var oneMonths="";
        var currentDues="";
        var minAmtDue="";
        var color_inner = "";
        var color_th = "";
        var image_banner = "";
        var image_link = "";
        var ipStartDate = "";
        var ipEndDate = "";
        var ipMerchantName = "";
        var ipAmount = "";
        var ipSettledInstallments = "";
        var ipBalance = "";
        var ipTotal = "";

        if(customer.hasOwnProperty("myCardPage")) {
            let myCardPage = customer.myCardPage;
            if (myCardPage.hasOwnProperty("accountSummary")) {
                let accounttable = myCardPage.accountSummary
                if (accounttable.hasOwnProperty("minAmtDue")) {
                    atMinAmtDue = accounttable.minAmtDue;
                }
                if (accounttable.hasOwnProperty("creditLimit")) {
                    atCreditLimit = accounttable.creditLimit;
                }
                if (accounttable.hasOwnProperty("openingBalance")) {
                    atOpeningBalance = accounttable.openingBalance;
                }
                if (accounttable.hasOwnProperty("debits")) {
                    atDebits = accounttable.debits;
                }
                if (accounttable.hasOwnProperty("cashAdvances")) {
                    cashAdvances = accounttable.cashAdvances;
                }
                if (accounttable.hasOwnProperty("cashAdvances")) {
                    cashAdvances = accounttable.cashAdvances;
                }
                if (accounttable.hasOwnProperty("totalDues")) {
                    atTotalDues = accounttable.totalDues;
                }
                if (accounttable.hasOwnProperty("charges")) {
                    atFinanceCharges = accounttable.charges;
                }
                if (accounttable.hasOwnProperty("payment")) {
                    atPayment = accounttable.payment;
                }

                if (accounttable.hasOwnProperty("credits")) {
                    atCredits = accounttable.credits;
                }

            }
            if (myCardPage.hasOwnProperty("installmentPlan")) {
                let installment = myCardPage.installmentPlan
                if (installment.hasOwnProperty("startDate")) {
                    ipStartDate = installment.startDate;
                }
                if (installment.hasOwnProperty("endDate")) {
                    ipEndDate = installment.endDate;
                }
                if (installment.hasOwnProperty("merchantName")) {
                    ipMerchantName = installment.merchantName;
                }
                if (installment.hasOwnProperty("amount")) {
                    ipAmount = installment.amount;
                }
                if (installment.hasOwnProperty("settledInstallments")) {
                    ipSettledInstallments = installment.settledInstallments;
                }
                if (installment.hasOwnProperty("balance")) {
                    ipBalance = installment.balance;
                }
                if (installment.hasOwnProperty("total")) {
                    ipTotal = installment.total;
                }
            }
            if (myCardPage.hasOwnProperty("pastDues")) {
                let pastDues = myCardPage.pastDues
                if (pastDues.hasOwnProperty("currentDues")) {
                    currentDues = pastDues.currentDues;
                }
                if (pastDues.hasOwnProperty("minAmtDue")) {
                    minAmtDue = pastDues.minAmtDue;
                }
                if (pastDues.hasOwnProperty("overLimit")) {
                    overLimit = pastDues.overLimit;
                }
            }
            if (myCardPage.hasOwnProperty("summaryBanner")) {
                let summaryBanner = myCardPage.summaryBanner
                if (summaryBanner.hasOwnProperty("image")) {
                    image_banner = "data:image/jpeg;base64,"+summaryBanner.image;
                }
                if (summaryBanner.hasOwnProperty("link")) {
                    image_link = summaryBanner.link;
                }
            }
        }
        if(customer.hasOwnProperty("overViewPage")){
            let overViewPage = customer.overViewPage;
            if(overViewPage.hasOwnProperty("colorInfo")){
                let colorInfo = overViewPage.colorInfo;
                if(colorInfo.hasOwnProperty("frame_color")){
                    color_inner = colorInfo.innermailcontainer;
                }
                if(colorInfo.hasOwnProperty("table_header")){
                    color_th = colorInfo.table_header;
                }
            }
            if(overViewPage.hasOwnProperty("creditCardSummary")){
                let creditCardSummary = overViewPage.creditCardSummary;
                if(creditCardSummary.hasOwnProperty("cardNumber")){
                    cardNumber = creditCardSummary.cardNumber;
                }
                if(creditCardSummary.hasOwnProperty("statementDate")){
                    statementDate = creditCardSummary.statementDate;
                }
                if(creditCardSummary.hasOwnProperty("paymentDueDate")){
                    paymentDueDate = creditCardSummary.paymentDueDate;
                }
                if(creditCardSummary.hasOwnProperty("totalDues")){
                    totalDues = creditCardSummary.totalDues;
                }
                if(creditCardSummary.hasOwnProperty("minAmtDue")){
                    minAmtDue = creditCardSummary.minAmtDue;
                }
                if(creditCardSummary.hasOwnProperty("creditLimit")){
                    creditLimit = creditCardSummary.creditLimit;
                }
                if(creditCardSummary.hasOwnProperty("availableCreditLimit")){
                    availableCreditLimit = creditCardSummary.availableCreditLimit;
                }
                if(creditCardSummary.hasOwnProperty("availableCashLimit")){
                    availableCashLimit = creditCardSummary.availableCashLimit;
                }
            }
        }
        
        
        var divStyle = {

            backgroundColor: color_inner

        };
        var divStyle_th = {

            backgroundColor: color_th

        };

        return (
            <div className="row">
                 <div className="col-xs-12 col-md-8 col-sm-12 borderRightGreay">
                    <div className="row">
                        <div className="container-class backgroundWhite creditCardSummury borderTopGreay15">
                            <div className="col-xs-12 col-sm 12 col-md-12" >
                                <div className="col-xs-12 col-md-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6 black">
                                            <span className="greayColor">Statement Date: </span>
                                            {statementDate}
                                            <br/>
                                            <span className="greayColor">Due Date: </span>
                                            {paymentDueDate}

                                        </div>

                                        <div className="col-xs-12 col-sm-12  col-md-6 black">
                                            <span className="greayColor">Card No: </span><br />
                                            {cardNumber}
                                        </div>
                                    </div>
                                    <div className="clearfix">&nbsp;</div>
                                    <span className="colorRed">Account Summary</span>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="style_1" >
                                        <table className="zui-table thBgRed table-striped zuiTableFontSize">
                                            <thead>
                                            <tr style={divStyle_th}>
                                                <th>Minimum Payment</th>
                                                <th>Credit Limit</th>
                                                <th>Opening Balance</th>
                                                <th>Purchase</th>
                                                <th>Cash Advances</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={divStyle}>
                                                <td>{minAmtDue}</td>
                                                <td>{atCreditLimit}</td>
                                                <td>{atOpeningBalance}</td>
                                                <td>{atDebits}</td>
                                                <td>{cashAdvances}</td>
                                            </tr>
                                            </tbody>
                                            <thead>
                                                <tr style={divStyle_th}>
                                                    <th>Charges</th>
                                                    <th>Payment</th>
                                                    <th>Credit</th>
                                                    <th colSpan="2">Total Outstanding</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={divStyle}>
                                                    <td>{atFinanceCharges}</td>
                                                    <td>{atPayment}</td>
                                                    <td>{atCredits}</td>
                                                    <td colSpan="2">{totalDues}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6 black">
                                            <p>&nbsp;</p>
                                            <p><span className="colorRed">Installment Plan</span></p>
                                            <span className="greayColor">Start Date - End Date</span> <br />
                                            {ipStartDate+' - '+ipEndDate}
                                            <p className="borderTopGreay1 margtop10"></p>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-6 black">
                                            <p>&nbsp;</p>
                                            <p><span className="colorRed">&nbsp;</span></p>
                                            <span className="greayColor">Merchant Name/Instalment Type</span> <br />
                                            {ipMerchantName}
                                            <p className="borderTopGreay1 margtop10"></p>
                                        </div>
                                    </div>
                                    <div className="row pad_mar">
                                        <div className="col-xs-12 col-sm-12 col-md-6 black">
                                            <span className="greayColor">Amount</span> <br />
                                            {ipAmount}
                                            <p className="borderTopGreay1 margtop10"></p>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-6 black">
                                            <span className="greayColor">Settled Installments</span> <br />
                                            {ipSettledInstallments}
                                            <p className="borderTopGreay1 margtop10"></p>
                                        </div>
                                    </div>
                                    <div className="row pad_mar">
                                        <div className="col-xs-12 col-sm-12 col-md-6 black">
                                            <span className="greayColor">Balance</span> <br />
                                            {ipBalance}
                                            <p className="borderTopGreay1 margtop10"></p>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-6 black">
                                            <span className="colorRed">Total</span> <br />
                                            {ipTotal}
                                            <p className="borderTopGreay1 margtop10"></p>
                                        </div>
                                    </div>
                                    <div className="clearfix">&nbsp;</div>
                                    <span className="colorRed">Payment Due</span>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="style_1" >
                                        <table className="zui-table thBgRed table-striped zuiTableFontSize">
                                            <thead>
                                            <tr style={divStyle_th}>
                                                <th className="text-center">Over Limit</th>
                                                <th className="text-center">Past Due</th>
                                                <th className="text-center">Minium Payment Due</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={divStyle}>
                                                <td className="text_align_center">{overLimit}</td>
                                                <td className="text_align_center">{currentDues}</td>
                                                <td className="text_align_center">{minAmtDue}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="heigh50">&nbsp;</div>
                                    </div>
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

let accounttable_Data = [


    {
        "columnName": "openingBalance",
        "displayName": "Opening Balance"
    },
    {
        "columnName": "credits",
        "displayName": "Payment/Credits"
    },
    {
        "columnName": "debits",
        "displayName": "Purchase/Debit"
    },

    {
        "columnName": "financeCharges",
        "displayName": "Finance Charges"
    },
    {
        "columnName": "totalDues",
        "displayName": "Total Dues"
    }


];


   let  pastdues_Datacolumns = [


    {
        "columnName": "overLimit",
        "displayName": "Overlimit"
    },
    {
        "columnName": "threeMonths",
        "displayName": "3 Months+"
    },
    {
        "columnName": "twoMonths",
        "displayName": "2 Months"
    },

    {
        "columnName": "oneMonths",
        "displayName": "1 Month"
    },
    {
        "columnName": "currentDues",
        "displayName": "Current Dues"
    },
    {
        "columnName": "minAmtDue",
        "displayName": "Minimum Amount Due"
    }


];


//module.exports = HomeForm;

HomeForm.contextTypes = {
    router: React.PropTypes.func
};

module.exports = HomeForm;