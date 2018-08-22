var React = require("react");
var ReactDOM = require("react-dom");
var {Route} = require("react-router");

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {error: null};
    }

    onSubmit(e) {
        e.preventDefault();
        var username = ReactDOM.findDOMNode(this.refs.username).value;
        var password = ReactDOM.findDOMNode(this.refs.password).value;
        if (this.props.onLogin)
            this.props.onLogin(username, password);
    }

    render() {
        if (this.props.error) {
            var error = (
                <div className="alert alert-danger" role="alert">
                    {this.props.error}
                </div>
            );
        }
        return (

            <div className="container-fluid">
                <div className="cols-xs-12">
                    {error}

                    <div className=""></div>
                    <div>

                    </div>
                </div>

                <div className="login">
                    {error}
                    <form name="loginform" id="login-form" onSubmit={this.onSubmit.bind(this)}>

                        <div className="form-group">
                            <input type="hidden" className="form-control" name="username" ref="username"/>
                        </div>

                        <div className="form-group">
                            <center><label htmlFor="password" className = "loginfont-color">Password</label></center>
                            <input type="password" className="form-control" name="password" ref="password"/>
                        </div>

                        <center><input type="submit" value="Retrieve content"/></center>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = LoginForm;