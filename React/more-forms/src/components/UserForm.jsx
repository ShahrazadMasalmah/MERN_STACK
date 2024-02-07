import React, {useState} from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    //const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmPasswordError("Confirm Password must be at least 8 characters!");
        } 
        else if(password !== confirmPassword){
            setConfirmPasswordError("Passwords must match!");
        }
        else {
            // an empty string is considered a "falsy" value
            setConfirmPasswordError("");
        }
    }


    return (
        <section>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div className="style-div">
                    <label>First Name: </label> 
                    <input style={{marginLeft: '17%'}} type="text" onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p style={{color: 'red'}}>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div className="style-div">
                    <label>Last Name: </label> 
                    <input style={{marginLeft: '17%'}} type="text" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p style={{color: 'red'}}>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div className="style-div">
                    <label>Email: </label> 
                    <input style={{marginLeft: '30%'}} type="email" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style={{color: 'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div className="style-div">
                    <label>Password: </label> 
                    <input style={{marginLeft: '20%'}} type="password" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style={{color: 'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div className="style-div">
                    <label>Confirm Password: </label> 
                    <input type="password" onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p style={{color: 'red'}}>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                {
                    firstNameError || lastNameError || emailError || passwordError || confirmPasswordError ?
                    <input className="btn" type="submit" value="Create User" disabled /> : 
                    <input className="btn" type="submit" value="Create User" />
                }
                
            </form>
        </section>
    );
}

export default UserForm;