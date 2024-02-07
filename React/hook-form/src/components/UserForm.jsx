import React, {useState} from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPssword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
    }

    return (
        <section>
            <form onSubmit={ createUser }>
                <div className="style-div">
                    <label>First Name: </label> 
                    <input style={{marginLeft: '17%'}} type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className="style-div">
                    <label>Last Name: </label> 
                    <input style={{marginLeft: '17%'}} type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className="style-div">
                    <label>Email: </label> 
                    <input style={{marginLeft: '30%'}} type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="style-div">
                    <label>Password: </label> 
                    <input style={{marginLeft: '20%'}} type="password" value={password} onChange={ (e) => setPssword(e.target.value) } />
                </div>
                <div className="style-div">
                    <label>Confirm Password: </label> 
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input className="btn" type="submit" value="Create User" />
            </form>
                <div id="data">
                    <h3 style={{textAlign: "center"}}>Your Form Data</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p> 
                </div>
        </section>
    );
}

export default UserForm;