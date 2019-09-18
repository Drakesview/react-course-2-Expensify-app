import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginFacebook} from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginFacebook }) => (
        <div>
            <button onClick={startLogin}>Login with Google</button>
            <button onClick={startLoginFacebook}>Login with Facebook</button>
        </div>
    );

const mapDispatchToProps = (dispatch) => ({
    startLogin: ()=> dispatch(startLogin()),
    startLoginFacebook : () => dispatch(startLoginFacebook())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);
