import React, { Component } from 'react'
import styles from './login.module.scss'
import * as ACTIONS from "../../store/actions/index";
import { connect } from "react-redux";

class Login extends Component {
    state = {
        name: null,
        email:null
    }
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const { name, email } = this.state
        this.props.login(name,email)
    }
    render() {
        return (
            <div className={styles.login}>
                <h1>Login</h1>
                <form onSubmit={this.onSubmitHandler} >
                    <div className={styles.Input}>
                        <input type="text" name="name" onChange={this.handleOnChange} className={styles.InputElement} placeholder="Name" required />
                    </div>
                    <div className={styles.Input}>
                        <input type="email" name="email" onChange={this.handleOnChange} className={styles.InputElement} placeholder="Email address" required />
                    </div>
                        
                    <button className={styles.example_b}>login</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        login: (name, email) => dispatch(ACTIONS.login(name,email))
    };
};
export default connect(null,mapDispatchToProps)(Login)