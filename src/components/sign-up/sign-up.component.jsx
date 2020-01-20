import React from 'react';
import "./sign-up.styles.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";


export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            "displayName": "",
            "email": "",
            "password": "",
            "confirmPassword": ""
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            createUserProfileDocument(user, { displayName });

            this.setState({
                "displayName": "",
                "email": "",
                "password": "",
                "confirmPassword": ""
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with Email & Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="Display Name"
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        required
                        onChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                        onChange={this.handleChange}
                    />

                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}