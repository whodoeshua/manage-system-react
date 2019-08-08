import React from "react";
import { connect } from "react-redux";

import action from "../../store/action";
let { currentUser } = action;
class Login extends React.Component {
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (<div>login page<button onClick={this.props.handleLoginIn}>loginIn</button></div>);
    }
}

Login = connect(null, (dispatch, ownerProps) => {
    return {
        handleLoginIn() {
            dispatch(currentUser.login());
        }
    }
})(Login)

export default Login;