var React = require("react");


let InfoCont = (props)=>(
    <div className="info-line1">
        <div className="title">{props.title}</div>
        <div className="value">{props.value}</div>
    </div>
);

class ContactForm extends React.Component {

    render() {
        return (
           <div className="row">
                <div className="col-xs-12 col-md-6 col-sm-12 borderRightGreay">
{/*
                    <div className="row">
                        <div className="container-class backgroundWhite">
                            <div className="col-xs-12 col-sm 12 col-md-12" >
                                <div className="col-xs-12 col-md-12 col-sm-12">
                                    <div className="mainHeadingStyle margtop10"><span className="colorRed">24-hour customer call centres</span></div>
                                    <div className="row margtop5">
                                        <div className="col-xs-12 col-xs-6 col-md-6">
                                            <span className="greayColor">Aluthgama</span> <br />
                                            063-2224242
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">BADULLA</span> <br />
                                            055-2230160-2
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">Beliatta Customer Service Centre</span> <br />
                                            047 - 2251100
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">CHILAW - 032</span> <br />
                                            032-2220236
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">DAMBULLA - 020</span> <br />
                                            066-2283553
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">EMBILIPITIYA - 045</span> <br />
                                            047-2261369
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">GALLE - 035</span> <br />
                                            091-2227372-6
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">GANGODAWILA - 076</span> <br />
                                            011-2442711
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">Giriulla Customer Service Centre</span> <br />
                                            037 - 2288055
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">HORANA - 034</span> <br />
                                            034-2265331
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KOTAHENA - 064</span> <br />
                                            0112337601
                                        </div>
                                        <div className="col-xs-12 col-xs-6 col-md-6">
                                            <span className="greayColor">Haputale Customer Service Centre</span> <br />
                                            057 - 2268503
                                            <p className="borderTopGreay1 margtop10"></p>
                                           <span className="greayColor">IBBAGAMUWA - 075</span> <br />
                                            037 - 2259360
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">JAFFNA - 042</span> <br />
                                            021-2221444
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">JA-ELA - 063</span> <br />
                                            011-2247754
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KALUTARA - 026</span> <br />
                                            034-2236363
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KANDY - 006</span> <br />
                                            081-2234411
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KILINOCHCHI - 052</span> <br />
                                            021-2280140
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KIRIBATHGODA - 027</span> <br />
                                            011-2910965
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KOTTAWA - 019</span> <br />
                                            011-2783886
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KALAWANA - 037</span> <br />
                                            94-45- 2255411
                                            <p className="borderTopGreay1 margtop10"></p>
                                            <span className="greayColor">KADUWELA - 078</span> <br />
                                            011-2548170
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix">&nbsp;</div>
                        </div>
                    </div>
*/}
                {/*

                    <embed src="https://www.dfcc.lk/en/atm-branch-locator"/>

                    <object type="text/html" data="https://www.dfcc.lk/en/atm-branch-locator">
                    </object>*/}

                 {/*   <Iframe url="https://www.dfcc.lk/en/atm-branch-locator"
                            width="450px"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                            allowFullScreen/>*/}
                    <iframe src="http://google.com" width="100%" height="90%">
                        alternative content for browsers which do not support iframe.
                    </iframe>

                </div>
                <div className="col-xs-12 col-md-3 col-sm-12 borderRightGreay">
                    <div className="row">
                        <div className="container-class backgroundWhite">
                            <div className="col-xs-12 col-sm-12 col-md-12" >
                                <div className="col-xs-12 col-md-12 col-sm-12">
                                    <div className="mainHeadingStyle margtop10"><span className="colorRed">Inquiries</span></div>
                                    <p><a href="tel:+0112350000" target="_blank">0112 350000(24hrs)</a></p>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="mainHeadingStyle margtop10"><span className="colorRed">E-mail</span></div>
                                    <p><a href="mailto:+0112350000" target="_blank">info@dfcc.com</a></p>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="mainHeadingStyle margtop10"><span className="colorRed">Website</span></div>
                                    <p><a href="http://www.dfcc.lk/en/" target="_blank">http://www.dfcc.lk/en/</a></p>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="clearfix">&nbsp;</div>
                                    <div className="clearfix margtop14">&nbsp;</div>
                                    <form>
                                        <div className="form-group">
                                            <span for="email" className="colorRed">Category*</span>
                                            <select className="form-control contactInput" required="true">
                                                <option>Please select the category</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <span for="email" className="colorRed">Name*</span>
                                            <input type="text" className="form-control contactInput" required="true" />
                                        </div>
                                        <div className="form-group">
                                            <span for="email" className="colorRed">Email*</span>
                                            <input type="email" className="form-control contactInput" required="true" />
                                        </div>
                                         <div className="form-group">
                                            <span for="email" className="colorRed">Comment*</span>
                                            <textarea className="form-control contactInput contactText" required="true"></textarea>
                                        </div>
                                        <div className="form-group textRight">
                                            <input type="submit" value="Submit" className="btn bgred" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="clearfix">&nbsp;</div>
                        </div>
                    </div>        
                </div>
                <div className="col-md-3 col-xs-12  minHeight705">
                    <figure className="bgred_credit_ad"></figure>
                </div>
                <div className="clearfix"></div>
                <div className="borderTopGreay"></div>
            </div>
        );
    }
}

module.exports = ContactForm;