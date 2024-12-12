import React from "react";
import './SignIn.css'
import SigninForm from "../../components/Form/SignInForm";
import { Link } from "react-router-dom";
import myLogo from '../../images/SneakerHeadLogo.jpeg'

const SignIn = () => {

    return ( 
        <div className="SignInContainer">
            <div>
            <div className="SneakerHead">
          {/* Add image within SneakerHead div */}
          <img src={myLogo} alt="Sneaker" className="sneaker-image img-responsive" />
         
        </div>
                <div>
                    <SigninForm />
                    <Link to='/signUpPage'> Create Account Now</Link>
                </div>
            </div>
        </div>
    )
}
export default SignIn