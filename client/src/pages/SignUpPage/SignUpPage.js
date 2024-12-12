import React from "react";
import SignUpForm from '../../components/Form/SignUpForm';
import './SignUpPage.css'

const SignUpPage = () => {

 return(
        <div className="wrapper">
 <div className="logo"></div>
        <div className="signUpContainer ">
           
          <div className=" text-center">
            <SignUpForm / >
           </div> 
         </div>
         </div>
    )

}
export default SignUpPage