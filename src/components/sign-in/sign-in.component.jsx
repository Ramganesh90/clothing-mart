import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "email": "",
            "password": ""
        }
    }

    handleSubmit = (e) => {
        console.log("printing ==>", this.state.email, this.state.password);
        this.setState({ "email": "", "password": "" });
        e.preventDefault();
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your Username & Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        label="Email"
                        type="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange} />
                    <FormInput
                        name="password"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange} />

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}