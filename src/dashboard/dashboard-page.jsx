import _ from "lodash";
import React from "react";
import content from "../content";
import conn from "../conn";
import Infoline from "../info-line"
var PDFDocument = require ("jspdf");
var PDFTable = require ("jspdf-autotable");
import $ from "jQuery";

class DashboardPage extends React.Component {

    hrStyleDyn() {
        if (navigator.userAgent.match(/iPhone/i)) {
            return "hrStylem"
        }
        else  if (navigator.userAgent.match(/Android/i))
        {
            return "hrStylem"
        }
        else  if (navigator.userAgent.match(/BlackBerry/i)) {
            return "hrStylem"
        }
        else if (navigator.userAgent.match(/webOS/i)) {
            return "hrStylem"
        }
        else {
            return "hrStyle"
        }
    }

    normaltextInfoDyn() {
        if (navigator.userAgent.match(/iPhone/i)) {
            return "normal-textInfom"
        }
        else  if (navigator.userAgent.match(/Android/i))
        {
            return "normal-textInfom"
        }
        else  if (navigator.userAgent.match(/BlackBerry/i)) {
            return "normal-textInfom"
        }
        else if (navigator.userAgent.match(/webOS/i)) {
            return "normal-textInfom"
        }
        else {
            return "normal-textInfo"
        }
    }

    onPrint(){
        let customer = content.Customer;
        let name = "";
        let accNo = "";
        let emailId = "";
        let address1 = "";
        let address2 = "";
        let address3 = "";
        let cardNumber = "";
        var statementDate = "";
        var statementDate_from = "";
        var statementDate_to = "";
        var statementPeriod = "";
        var paymentDueDate = "";
        var totalDues = "";
        var minAmtDue = "";
        var creditLimit = "";
        var availableCreditLimit = "";
        var availableCashLimit = "";
        var openingBal = "";
        var closingBal = "";
        var debits = "";
        var credits = "";
        var cashbackToBeCredited = "";

        if(customer.hasOwnProperty("overViewPage")) {
            let overViewPage = customer.overViewPage;
            if (overViewPage.hasOwnProperty("customerInfo")) {
                let customerInfo = overViewPage.customerInfo;
                if (customerInfo.hasOwnProperty("name")) {
                    name = customerInfo.name;
                }
                if (customerInfo.hasOwnProperty("emailId")) {
                    emailId = customerInfo.emailId;
                }
                if (customerInfo.hasOwnProperty("address")) {
                    let address = customerInfo.address;
                    let adrArr = address.split(',');
                    address1 = (adrArr[0]);
                    address2 = (adrArr[1]);
                    address3 = (adrArr[2]);
                    address1.trim();
                    address2.trim();
                    address3.trim();
                }
            }
            if(overViewPage.hasOwnProperty("creditCardSummary")){
                let creditCardSummary = overViewPage.creditCardSummary;
                if(creditCardSummary.hasOwnProperty("cardNumber")){
                    cardNumber = creditCardSummary.cardNumber;
                }
                if(creditCardSummary.hasOwnProperty("accountNo")){
                    accNo = creditCardSummary.accountNo;
                }
                if(creditCardSummary.hasOwnProperty("statementDate")){
                    statementDate = creditCardSummary.statementDate;
                }

                if(creditCardSummary.hasOwnProperty("statementDate_FROM")){
                    statementDate_from = creditCardSummary.statementDate_FROM;
                }
                if(creditCardSummary.hasOwnProperty("statementDate_TO")){
                    statementDate_to = creditCardSummary.statementDate_TO;
                }
                if(creditCardSummary.hasOwnProperty("statementPeriod")){
                    statementPeriod = creditCardSummary.statementPeriod;
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
                if(creditCardSummary.hasOwnProperty("openingBalance")){
                    openingBal = creditCardSummary.openingBalance;
                }
                if(creditCardSummary.hasOwnProperty("closingBalance")){
                    closingBal = creditCardSummary.closingBalance;
                }
                if(creditCardSummary.hasOwnProperty("debits")){
                    debits = creditCardSummary.debits;
                }
                if(creditCardSummary.hasOwnProperty("credits")){
                    credits = creditCardSummary.credits;
                }
                if(creditCardSummary.hasOwnProperty("cashbackToBeCredited")){
                    cashbackToBeCredited = creditCardSummary.cashbackToBeCredited;
                }
            }
        }

        var doc = new PDFDocument();
        var res = doc.autoTableHtmlToJson(document.getElementById("transactionTable"));
        var options = {
            margin: {
                left:4,
                right:5,
                top: 100,
                bottom: 25
            },
            styles: {cellPadding: 1,cellSpacing:0,overflow: 'linebreak'},
            /*drawCell: function(cell, data) {
             if (data.column.dataKey === 'amount') {
             cell.styles.halign = 'right';
             }
             },*/
            headerStyles: {textColor:[0,0,0],fillColor:[221,221,221],rowHeight: 6, fontSize: 8,valign: 'middle'},//184,236,241
            bodyStyles: {rowHeight: 6,fontSize: 8, valign: 'middle'},
            //startY: 100,
            theme: 'plain'
        };
        doc.autoTable(res.columns, res.data, options);

        doc.addPage();
        doc.setFontSize(12);
        doc.text(5,105,'Cashback Rewards');
        var res1 = doc.autoTableHtmlToJson(document.getElementById("rewardTable"));
        var options1 = {
            margin: {
                left:4,
                right:5,
                top: 108,
                bottom: 25
            },
            styles: {cellPadding: 1,cellSpacing:0,overflow: 'linebreak'},
            headerStyles: {textColor:[0,0,0],halign:'center',fillColor:[221,221,221],rowHeight: 6, fontSize: 8,valign: 'middle'},//184,236,241
            bodyStyles: {rowHeight: 6,fontSize: 10,halign:'center',valign: 'middle'},
            //startY: (doc.autoTableEndPosY() + 15),
            theme: 'plain'
        };
        doc.autoTable(res1.columns, res1.data, options1);

        doc.setFontSize(10);
        doc.text(5,135,'Total CashBack to be credited : '+cashbackToBeCredited);

        doc.setFontSize(12);
        doc.text(5,142,'Cashback Credit Account');
        doc.setFontSize(10);
        doc.text(5,148,'Account Holder : '+name);
        doc.text(5,154,'Account Number : '+accNo);
        doc.text(5,160,'Total cashback amount indicated above will be credited within 30 days. Conditions apply.');

        //header repeat
        var pageCount = doc.internal.getNumberOfPages();
        var curPage = '';
        for(var i = 0; i < pageCount; i++) {
            curPage=''+i;
            doc.setPage(i);
            let logoByte = "data:image/jpeg;base64,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";
            doc.addImage(logoByte, 125, 1,100,16);

            //title
            doc.setFontSize(14);
            doc.setFontStyle("bold");
            doc.text(5,10,"Statement of account");

            //custInfo
            doc.setFontSize(12);
            doc.setFontStyle("normal");
            doc.text(15,25,name);
            doc.text(15,30,address1+' ,');
            doc.text(13.5,35,address2+' ,');
            doc.text(13.5,40,address3);

            //bankInfo
            doc.setFontSize(13);
            doc.setFontStyle("bold");
            doc.text(135,25,"DFCC Bank PLC");
            doc.setFontSize(10);
            doc.text(135,30,"Company No. PQ 233");
            doc.setFontStyle("normal");
            doc.text(135,35,"No. 73/5, Galle Raod,");
            doc.text(135,39,"Colombo 03");
            doc.text(135,43,"Inquiries");
            doc.text(150,43,": 0112 350000 (24 Hrs-call centre)");
            doc.text(135,47,"E-mail");
            doc.text(150,47,": Cards@dfccbank.lk");
            doc.text(135,51,"Website");
            doc.text(150,51,": www.dfcc.lk");

            doc.setFontSize(8);
            doc.text(5,60,"Please check this statement against sales slip copies and if you have any queries, Please contact call center within 14 days from the statement date.");

            doc.setLineWidth(.4);
            doc.line(4,63,204,63);

            //card summary
            doc.setFontSize(10);
            doc.text(5,70,"Card Number");
            doc.text(5,75,cardNumber);
            doc.text(45,70,"Statement Date");
            doc.text(45,75,statementDate);
            doc.text(77,70,"Total Outstanding");
            doc.text(77,75,totalDues);
            doc.text(112,70,"Due Date");
            doc.text(112,75,paymentDueDate);
            doc.text(140,70,"Minimum Payment");
            doc.text(140,75,minAmtDue);
            doc.text(180,70,"Credit Limit");
            doc.text(180,75,creditLimit);

            doc.setLineWidth(.4);
            doc.line(4,80,204,80);
            doc.text(5,86,"Page No.");
            doc.text(5,91,curPage);
            doc.text(35,86,"Opening Balance");
            doc.text(35,91,openingBal);
            doc.text(90,86,"Debits");
            doc.text(90,91,debits);
            doc.text(128,86,"Credits");
            doc.text(128,91,credits);
            doc.text(170,86,"Closing Balance");
            doc.text(170,91,closingBal);

            doc.setLineWidth(.4);
            doc.line(4,95,204,95);

            //footer
            doc.text(60,278,"Please see overleaf for conditions governing payments");
            doc.rect(4,282,202,12.5);
            doc.text(6,287,"Bank/Cheque Number");
            doc.text(6,292,"");
            doc.text(65,287,"Cash/Cheque Amount");
            doc.text(65,292,"");
            doc.text(125,287,"Due Date");
            doc.text(125,292,paymentDueDate);
            doc.text(170,287,"Minimum Payment");
            doc.text(170,292,minAmtDue);

        }

        doc.save(cardNumber+'.pdf');
    }

    render() {
        let dashboard = this.props.data;
        let tooltip = {
            format: {
                value: function (value, ratio, id) {
                    return "Rs. " + numeral(value).format("0,000.");
                }
            }
        };

        var video;
        if (conn.online) {
            video = (
                <iframe type="text/html"
                        width="100%"
                        height="200px"
                        src="http://www.youtube.com/embed/oQh0Xn459nM"
                        frameBorder="0">
                </iframe>
            )
        } else {
            video = (
                <div className="default-image-instead-of-video">
                </div>
            )
        }

        let customer = content.Customer;
        var name = "";
        var emailId = "";
        var address = "";
        let cardNumber = "";
        let cardType = "";
        var statementDate = "";
        var statementDate_from = "";
        var statementDate_to = "";
        var statementPeriod = "";
        var paymentDueDate = "";
        var totalDues = "";
        var minAmtDue = "";
        var creditLimit = "";
        var availableCreditLimit = "";
        var availableCashLimit = "";
        var color_inner = "";
        var color_th = "";
        var color_tr = "";
        var color_header = "";
        var color_delight = "";
        var color_delight_body = "";
        var import_infoLabel = "";
        var import_infoItem = [];
        var card_offerLabel= "";
        var card_offerItem= [];
        var offerLabel= "";
        var offerItem= [];
        var statementtable = [];
        var openingBalance = "";
        var cashback = "";
        var redeemed = "";
        var expiredAdjusted = "";
        var total = "";

        if(customer.hasOwnProperty("overViewPage")){
            let overViewPage = customer.overViewPage;
            if(overViewPage.hasOwnProperty("colorInfo")){
                let colorInfo = overViewPage.colorInfo;
                if(colorInfo.hasOwnProperty("frame_color")){
                    color_inner = colorInfo.frame_color;
                }
                if(colorInfo.hasOwnProperty("table_header")){
                    color_th = colorInfo.table_header;
                }
                if(colorInfo.hasOwnProperty("table_row")){
                    color_tr = colorInfo.table_row;
                }
                if(colorInfo.hasOwnProperty("heading_color")){
                    color_header = colorInfo.heading_color;
                }
                if(colorInfo.hasOwnProperty("delight")){
                    color_delight = colorInfo.delight;
                }
                if(colorInfo.hasOwnProperty("delight_body")){
                    color_delight_body = colorInfo.delight_body;
                }
            }
            if(overViewPage.hasOwnProperty("importantInfo")){
                let importInfo = overViewPage.importantInfo;
                if(importInfo.hasOwnProperty("ImportantInfoItem")){
                    let importInfoTemp = importInfo.ImportantInfoItem;
                    if(importInfoTemp.length>1){
                        import_infoItem =  importInfoTemp;
                    }
                    else{
                        import_infoItem.push(importInfoTemp);
                    }
                }
                if(importInfo.hasOwnProperty("label")){
                    import_infoLabel = importInfo.label;
                }
            }
            if(overViewPage.hasOwnProperty("cardOffers")){
                let cardOffers= overViewPage.cardOffers;
                if(cardOffers.hasOwnProperty("CardOffersItem")){
                    let cardofferTemp = cardOffers.CardOffersItem;
                    if(cardofferTemp.length>1){
                        card_offerItem =  cardofferTemp;
                    }
                    else{
                        card_offerItem.push(cardofferTemp);
                    }
                }
                if(cardOffers.hasOwnProperty("label")){
                    card_offerLabel = cardOffers.label;
                }
            }
            if(overViewPage.hasOwnProperty("offers")){
                let offers = overViewPage.offers;
                if(offers.hasOwnProperty("item")){
                    let offerTemp = offers.item;
                    if(offerTemp.length>1){
                        offerItem =  offerTemp;
                    }
                    else{
                        offerItem.push(offerTemp);
                    }
                }
                if(offers.hasOwnProperty("label")){
                    offerLabel = offers.label;
                }
            }
            if(overViewPage.hasOwnProperty("customerInfo")){
                let customerInfo = overViewPage.customerInfo;
                if(customerInfo.hasOwnProperty("name")){
                    name = customerInfo.name;
                }
                if(customerInfo.hasOwnProperty("emailId")){
                    emailId = customerInfo.emailId;
                }
                if(customerInfo.hasOwnProperty("address")){
                    address = customerInfo.address;
                }
            }
            if(overViewPage.hasOwnProperty("creditCardSummary")){
                let creditCardSummary = overViewPage.creditCardSummary;
                if(creditCardSummary.hasOwnProperty("cardType")){
                    cardType = creditCardSummary.cardType;
                }
                if(creditCardSummary.hasOwnProperty("cardNumber")){
                    cardNumber = creditCardSummary.cardNumber;
                }
                if(creditCardSummary.hasOwnProperty("statementDate")){
                    statementDate = creditCardSummary.statementDate;
                }

                if(creditCardSummary.hasOwnProperty("statementDate_FROM")){
                    statementDate_from = creditCardSummary.statementDate_FROM;
                }
                if(creditCardSummary.hasOwnProperty("statementDate_TO")){
                    statementDate_to = creditCardSummary.statementDate_TO;
                }
                if(creditCardSummary.hasOwnProperty("statementPeriod")){
                    statementPeriod = creditCardSummary.statementPeriod;
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
            }
        }

        if(customer.hasOwnProperty("myCardPage")) {
            let myCardPage = customer.myCardPage;
            if (myCardPage.hasOwnProperty("transaction")) {
                let tempStatementtable=myCardPage.transaction;
                let newTransactionData = [];
                if(tempStatementtable.length > 1) {
                    for (var sdate=0;sdate<tempStatementtable.length;sdate++) {
                        let zTransaction = tempStatementtable[sdate];
                        let zdate = zTransaction.transactionDate;
                        zdate = (zdate).split("/");
                        zdate = zdate[2] + zdate[1] + zdate[0];
                        let amt = zTransaction.amount;
                        if(typeof amt == "string"){
                            amt = amt.split(",").join("");
                        }

                        newTransactionData.push({
                            sortDate: zdate,
                            transactionDate:zTransaction.transactionDate,
                            billDate:zTransaction.billDate,
                            transactionCurrency:zTransaction.transactionCurrency,
                            description: zTransaction.description,
                            amount: parseFloat(amt),
                            smartEmi: zTransaction.smartEmi,
                            transactionType: zTransaction.transactionType,
                            cashBackFlg: zTransaction.cashBackFlg,
                            transactionCode: zTransaction.transactionCode,
                            CardSequenceNumber: zTransaction.CardSequenceNumber,
                            CardHolderName: zTransaction.CardHolderName,
                            Exchange: zTransaction.Exchange
                        })
                    }
                }
                else {
                    let zTransaction = tempStatementtable;
                    let zdate = zTransaction.transactionDate;
                    zdate = (zdate).split("/");
                    zdate = zdate[2] + zdate[1] + zdate[0];
                    let amt = zTransaction.amount;
                    if(typeof amt == "string"){
                        amt = amt.split(",").join("");
                    }

                    newTransactionData.push({
                        sortDate: zdate,
                        transactionDate:zTransaction.transactionDate,
                        description: zTransaction.description,
                        amount: parseFloat(amt),
                        smartEmi: zTransaction.smartEmi,
                        transactionType: zTransaction.transactionType,
                        billDate:zTransaction.billDate,
                        transactionCurrency:zTransaction.transactionCurrency,
                        cashBackFlg: zTransaction.cashBackFlg,
                        transactionCode: zTransaction.transactionCode,
                        CardSequenceNumber: zTransaction.CardSequenceNumber,
                        CardHolderName: zTransaction.CardHolderName,
                        Exchange: zTransaction.Exchange
                    })
                }
                statementtable = newTransactionData;
            }

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
        }

        var divStyle_innermailcontainer = {

            backgroundColor: color_inner

        };
        var divStyle_header = {

            color: color_header

        };
        var divStyle_th = {

            backgroundColor: color_th

        };
        var divStyle = {

            backgroundColor: color_inner

        };
        var divStyle_tr = {

            backgroundColor: color_inner

        };
        var divStyle_delight = {

            backgroundColor: color_delight

        };
        var divStyle_delight_body = {

            backgroundColor: color_delight_body

        };


        return (
            <div  className="" >
                <div className="row">

                     <div className="col-md-4 col-xs-12 paddingLeftNone">
                        <div className="infolineStyle mob_right backgroundWhite">
                            <p className="fontsize20 paddtop20">
                                <span className="colorRed"><strong>Credit Card Statement</strong> </span> {/*<strong>{name}</strong>*/}<br />
                                {/*<span className="greayColor fontSize15">This is</span>*/} <div >Credit Card Type : Visa</div>

                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 paddingLeftNone">
                        <div className="infolineStyle mob_right backgroundWhite">
                            <p className="margtop10"><span className="greayColor fontSize15">Card Number</span> <br />
                                {cardNumber} <br/>
                                <hr className="hr" />
                                <span className="greayColor fontSize15">Statement Period</span> <br />
                               <span className="colorRed fontSize15"> From </span>{statementDate_from} <span className="colorRed fontSize15">To</span> {statementDate_to}</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 paddingLeftNone">
                        <div className="infolineStyle mob_right backgroundWhite">
                            <p className="margtop10">
                                <b>{name}</b><br/>
                                {address}<br />
                                {emailId}
                            </p>    
                        </div>
                    </div>
                </div>
                <div className="row rcornersbanner textCenter"><p className="fontSize12">In case any of your personal details have changed. You may updated the same by contacting our customer service. 0112 350000</p></div>
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-sm-12 paddingLeftNone">
                        <div className="infolineStyle paddingRightLeft backgroundWhite ">
                            {/*<p><span className="colorRed fontSize15">{offerLabel}</span></p>*/}
                            <div className="delights">
                                <figure className="bgred_home_1"></figure>
                            </div>
                        </div>
                        <div className="clearfix borderTopGreay"></div>
                        <div className="infolineStyle paddingRightLeft backgroundWhite padTopBot20">
                            <p><span className="colorRed fontSize15">{card_offerLabel}</span></p>
                            <ul className="delights">
                                {_.map(card_offerItem, (id)=><li value={id}><a href={id.link} target="_blank">{id.label}</a></li>)}
                            </ul>
                        </div>

                        <div className="clearfix borderTopGreay"></div>
                        <div className="infolineStyle paddingRightLeft backgroundWhite padTopBot20">
                            <p><span className="colorRed fontSize15">{import_infoLabel}</span></p>
                            <ul className="delights">
                                {_.map(import_infoItem, (id)=><li href={id.link} target="_blank" value={id}>{id.label}</li>)}
                                <li onClick={this.onPrint.bind(this)}>Print Statement</li>
                            </ul>
                        </div>

                        <div className="clearfix borderTopGreay"></div>
                        <div className="videoStyle">{video}</div>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 paddingLeftNone">
                        <div className="infolineStyle padTopBot20 backgroundWhite">
                            <div className="col-md-6 col-xs-12">
                                <p><span className="colorRed fontSize15">Statement Summary</span></p>
                                <p className="margtop10"><span className="greayColor fontSize15">Payment Due Date</span> <br />
                               {paymentDueDate} <br/>
                                <hr className="hr" />
                                <span className="greayColor fontSize15">Minimum Amount Due</span> <br/>
                                {minAmtDue}
                                </p>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <button className="button btn_new bgred rewardsBtn" data-toggle="modal" data-target="#myModal4">Pay Now</button>
                                <p className="margtop10">
                                    <span className="greayColor fontSize15">Total Dues</span> <br />
                                    {totalDues}<br/>
                                    <hr className="hr" />
                                    <span className="greayColor fontSize15">Credit Limit</span> <br/>
                                    {creditLimit}
                                </p>
                            </div>
                            <div className="modal fade" id="myModal4" tabindex="-2" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                       <center> <div className="modal-header">
                                            <h4 className="modal-title" id="myModalLabel">Payment Option</h4>
                                            <br/>
                                           <select name="forma">
                                            <option value="Home">Online banking</option>
                                            <option value="Contact">Virtual Wallet</option>
                                            </select>
                                           <br/>
                                           <br/>

                                        </div>
                                       </center>
                                        <div className="modal-body">
                                            <div className="chatImg2"/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">OK</button>
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="clearfix"></div>
                        </div>
                        <div className="">
                        <div className=" minHeight452">
                            <figure className="bgred_home"></figure>
                        </div>
                            </div>
                    </div>
                </div>
                <table id="transactionTable" style={{display: 'none'}}>
                    <thead>
                    <tr>
                        <th>Post Date</th>
                        <th>Txn Date</th>
                        <th>Transaction Description</th>
                        <th>Transaction Amount(LKR)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {_.map(statementtable,st=><tr>
                        <td>{st.billDate}</td>
                        <td>{st.transactionDate}</td>
                        <td>{st.description}</td>
                        <td style={{align:'right'}}>{st.amount}</td>
                    </tr>)
                    }
                    </tbody>
                </table>
                <table id="rewardTable" style={{display: 'none'}}>
                    <thead>
                    <tr>
                        <th>Opening Balance</th>
                        <th>&nbsp;</th>
                        <th>CashBack for this Statement</th>
                        <th>&nbsp;</th>
                        <th>Redeemed</th>
                        <th>&nbsp;</th>
                        <th>Expired/Adjusted</th>
                        <th>&nbsp;</th>
                        <th>Total CashBack   </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{openingBalance}</td>
                        <td>+</td>
                        <td>{cashback}</td>
                        <td>-</td>
                        <td>{redeemed}</td>
                        <td>-</td>
                        <td>{expiredAdjusted}</td>
                        <td>=</td>
                        <td>{total}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
DashboardPage.contextTypes = {
    db: React.PropTypes.object
};

module.exports = DashboardPage;