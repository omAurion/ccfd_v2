import _ from "lodash";
import React from "react";
import $ from "jquery";
import Griddle from 'griddle-react';
import content from "../content";
var s;
var statementtable = [];
var domestic = [];
var international = [];
var showcredit = [];
var cardHolderData = [];

var col = ["billDate","transactionCurrency","sortDate","description", "amount","transactionCode","Select"];
var colInt = ["billDate","transactionCurrency","sortDate","description", "Exchange","amount","transactionCode","Select"];

var DateValue = React.createClass({
    render: function() {
        let date = this.props.data;
        if (date == "" || date == undefined || date == null) {
            return <span></span>
        }
        else {
            let year = date.substr(0,4);
            let month = date.substr(4,2);
            let dt = date.substr(6,2);
            date = dt+"/"+month+"/"+year;
            return <span>{date}</span>
        }
    }
});

var AmtValue = React.createClass({
    formatCurrency(nStr)
    {
        //return numeral(val).format("0,000.00");

        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? ('.' + x[1]): '';
        if
        (
            x2.length == 0)
        {
            x2 = '.00';
        }
        else if
        (
            x2.length == 2)
        {
            x2 = '.' + x[1] + '0';
        }

        var rgx = /(\d+)(\d{3})/;
        var z = 0;
        var len = String(x1).length;
        var num = parseInt((len/2)-1);

        while (rgx.test(x1))
        {
            if(z > 0)
            {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            else
            {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
                rgx = /(\d+)(\d{2})/;
            }
            z++;
            num--;

            if(num == 0)
            {
                break;
            }
        }
        return x1+x2;
    },
    render: function(){
        let amt = this.props.data;
        if(amt == "" || amt == 0)
        {
            return <span>0.00</span>
        }
        else if(amt == "undefined" || amt == undefined){
            return <span></span>
        }
        else {
            amt = this.formatCurrency(amt);
            return <span>{amt}</span>
        }
    }
});

let cardHolder_MD = [
    {
        columnName: 'CardHolderName',
        displayName: 'Card Holder',
    },
    {
        columnName: 'description',
        displayName: 'Transaction Description'
    },
    {
        columnName: 'amount',
        displayName: 'Amount(INR)',
        cssClassName: "",
        customComponent:AmtValue
    },
    {
        columnName: 'transactionCode',
        displayName: 'Cr/Dr',

    }
];


class PrintCheckbox extends React.Component {
    checkBox_Chnage(e)
    {
        if(e.target.checked) {

            $("#myModal_checkbox").modal();

            //alert("popup");


        }

    }
    render() {


        return ((this.props.rowData.amount > 10000)?

          //  var T_Date = this.props.rowData.amount;
       // console.log("T_date", T_Date);

            <div><input type="checkbox" onChange={this.checkBox_Chnage.bind(this)}/>
                <div className="modal fade" id="myModal_checkbox" tabindex="-2" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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

                            </div>
                            <div className="modal-footer">
                                 <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>:null);
    }
}



export default class CreditTransactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {col:col,st:"all",statementtableSt:[],domesticSt:[],internationalSt:[],showcreditSt:[],cardHolderDataSt:[]}
    }
    componentDidMount() {
        let data = this.props.data;
        let customer = content.Customer;
        document.getElementById("all").checked = true;

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
                this.setState({statementtableSt:statementtable})
            }
        }

        let domesticTemp = statementtable.filter(function(statementdata) {
            return statementdata.transactionType == "domestic"});
        if(domesticTemp.length>1){
            domestic = domesticTemp;
            this.setState({domesticSt:domestic})
        }
        else {
            domestic.push(domesticTemp);
            this.setState({domesticSt:domestic})
        }

        let internationalTemp=statementtable.filter(function(statementdata) {
            return statementdata.transactionType == "international"});
        if(internationalTemp.length>1){
            international = internationalTemp;
            this.setState({internationalSt:international})
        }
        else {
            international = internationalTemp;


            this.setState({internationalSt:international})
        }

        let showcreditTemp=statementtable.filter(function(statementdata) {
            return statementdata.transactionCode == "Cr"});
        if(showcreditTemp.length>1){
            showcredit = showcreditTemp;
            this.setState({showcreditSt:showcredit})
        }
        else {
            showcredit = showcreditTemp;
            this.setState({showcreditSt:showcredit})
        }

        cardHolderData = _(statementtable).groupBy('CardHolderName').map((cardHolderData, servId)=> {
            return {
                "CardHolderName": servId === "undefined" ? "" : servId,
                children: _(cardHolderData).groupBy('transactionDate').map((cardHolderData, typeId)=> {
                    return {
                        "CardHolderName": typeId === "undefined" ? "" : typeId,
                        "transactionDate": typeId,
                        "description": "",
                        "amount": "",
                        "transactionCode":"",
                        "children": _(cardHolderData).groupBy('description').map((cardHolderData, subtypeId)=> {
                            return {
                                "CardHolderName": "",
                                "transactionDate": "",
                                "description": subtypeId,
                                "amount": _(cardHolderData).map("amount").replace(/\[\]/g, ""),
                                "transactionCode": _(cardHolderData).map("transactionCode").replace(/\[\]/g, "")
                            }
                        }).value()
                    };
                }).value()
            }
        }).value();
        this.setState({cardHolderDataSt:cardHolderData})

    }

    onShowMode(e) {
        s=e.target.value;
        if (s == "all") {
            document.getElementById("all").checked = true;
            this.setState({col:col,st:"all"});
        }

        else if (s== "domestic") {
            document.getElementById("domestic").checked = true;
            this.setState({col:colInt,st:"domestic"});
        }
        else if (s== "international") {
            document.getElementById("international").checked = true;
            this.setState({col:col,st:"international"});
        }
        else if (s== "showcredit") {
            document.getElementById("showcredit").checked = true;
            this.setState({col:col,st:"showcredit"});
        }
        else if (s== "cardholder") {
            this.setState({col:col,st:"cardholder"});
        }else{
            this.setState({col:col,st:"all"});
        }
    }

    render() {
        let data = this.props.data;
        return (
            <div className="row">
                <div className="col-xs-12 col-md-9 col-sm-12 borderRightGreay" >
        <div className="row">
            <div className="container-class backgroundWhite creditCardTransaction borderTopGreay15">
                <div className="col-xs-12 col-sm 12 col-md-12">
                    <div className="">
                        <div>
                            <label className="radio-inline radioLblStyle">
                                <input type="radio" id="all"
                                       name="show"
                                       value="all"
                                       checked={(data.showMode == "all")?"checked":null}
                                       onChange={this.onShowMode.bind(this)}
                                />
                                Show All
                            </label>
                            <label className="radio-inline radioLblStyle">
                                <input type="radio" id="domestic"
                                       name="show"
                                       value="domestic"
                                       checked={(data.showMode == "domestic")?"checked":null}
                                       onChange={this.onShowMode.bind(this)}/>
                                Domestic
                            </label>
                            <label className="radio-inline radioLblStyle">
                                <input type="radio" id="international"
                                       name="show"
                                       value="international"
                                       checked={(data.showMode == "international")?"checked":null}
                                       onChange={this.onShowMode.bind(this)}/>
                                International
                            </label>

                            <label className="radio-inline radioLblStyle">
                                <input type="radio" id="showcredit"
                                       name="show"
                                       value="showcredit"
                                       checked={(data.showMode == "showcredit")?"checked":null}
                                       onChange={this.onShowMode.bind(this)}/>
                                Show Credit
                            </label>

                        </div>
                        <br/>
                        {this.state.st=="all"?<div id="statementtableDiv" className="scrollDiv">
                            <Griddle results={this.state.statementtableSt} resultsPerPage={this.state.statementtableSt.length}
                                     columnMetadata={CreditTransactionForm_Data}
                                     columns={["billDate","transactionCurrency","sortDate","description", "amount","transactionCode","Select"]}
                                     tableClassName="zui-table thBgRed table-striped" useGriddleStyles={false}
                                     showPager={false}/>
                        </div>:(this.state.st=="domestic"?<div id="domesticDiv" className="scrollDiv">
                            <Griddle results={this.state.domesticSt} resultsPerPage={this.state.domesticSt.length}
                                     tableClassName="zui-table thBgRed table-striped" useGriddleStyles={false}
                                     columnMetadata={CreditTransactionForm_Data} showPager={false}
                                     columns={["billDate","transactionCurrency","sortDate","description", "amount","transactionCode","Select"]}/>

                        </div>:(this.state.st=="international"?<div id="internationalDiv" className="scrollDiv">
                            <Griddle results={this.state.internationalSt} resultsPerPage={this.state.internationalSt.length}
                                     tableClassName="zui-table thBgRed table-striped" useGriddleStyles={false}
                                     columnMetadata={CreditTransactionForm_Data} showPager={false}
                                     columns={["billDate","transactionCurrency","sortDate","description", "Exchange","amount","transactionCode","Select"]}/>

                        </div>:(this.state.st=="showcredit"?<div id="showcreditDiv" className="scrollDiv">
                            <Griddle results={this.state.showcreditSt} resultsPerPage={this.state.showcreditSt.length}
                                     tableClassName="zui-table thBgRed table-striped"
                                     columnMetadata={CreditTransactionForm_Data} showSettings={false}
                                     showPager={false} useGriddleStyles={false}
                                     columns={["billDate","transactionCurrency","sortDate","description", "amount","transactionCode","Select"]}/>

                        </div>:<div id="statementtableDiv" className="scrollDiv">
                            <Griddle results={this.state.statementtableSt}
                                     columnMetadata={CreditTransactionForm_Data} resultsPerPage={this.state.statementtableSt.length}
                                     columns={["billDate","transactionCurrency","sortDate","description", "amount","transactionCode","Select"]}
                                     tableClassName="zui-table thBgRed table-striped" useGriddleStyles={false}
                                     showPager={false}/>
                        </div>)))
                        }
                    </div>
                </div>
                <div className="clearfix">&nbsp;</div> 
            </div>
            </div>
        </div>
                <div className="col-md-3 col-xs-12 borderTopGreay15 minHeight554">
                   <figure className="bgred_credit_home"></figure>
                </div>
                <div className="clearfix"></div>
                <div className="borderTopGreay"></div>
            </div>
        );
    }
}

let CreditTransactionForm_Data = [
    {
        columnName: 'sortDate',
        displayName: 'Date',
        cssClassName:"dateStyle1",
        customComponent:DateValue
    },
    {
        columnName: 'description',
        displayName: 'Transaction Description',
        cssClassName:"colWidthStyle1"
    },

    {
        columnName: 'Exchange',
        displayName: 'Exchange',
        cssClassName:"colWidthStyle_exchange1"

    },

    {
        columnName: 'amount',
        displayName: 'Amount(LKR)',
        cssClassName: "colWidthStyle_amount1 alignrightrow",
        customComponent:AmtValue
    },
    {
        columnName: 'transactionCode',
        displayName: 'Cr/Dr',
        cssClassName:"crDrStyle1 aligncenterrow"
    },
    {
        columnName: 'billDate',
        displayName: 'Bill Date',
        cssClassName:"crDrStyle1 aligncenterrow"
    },
    {
        columnName: 'transactionCurrency',
        displayName: 'Transaction Currency',
        cssClassName:"crDrStyle1 aligncenterrow"
    },
    {
        "columnName": "Select",
        "displayName": "Select",
        cssClassName:"crDrStyle1 aligncenterrow",
        "customComponent":PrintCheckbox
    }



];



CreditTransactionForm.contextTypes = {
    router: React.PropTypes.func
};

