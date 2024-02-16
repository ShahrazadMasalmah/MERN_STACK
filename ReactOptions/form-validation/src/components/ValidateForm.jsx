import React, { useReducer } from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action){
    return {
        ...state,
        [action.type]: action.payload
    };
}

const ValidateForm = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        let currentError = null;
        let emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(e.target.name === 'firstName'){
            if(e.target.value.length === 0){
                currentError = "First name is required!";
            }
            else if(e.target.value.length < 3){
                currentError = "First name must be at least 3 characters!";
            }
            else {
                currentError = null;
            }
        }
        else if(e.target.name === 'lastName'){
            if(e.target.value.length === 0){
                currentError = "Last name is required!";
            }
            else if(e.target.value.length < 3){
                currentError = "Last name must be at least 3 characters!";
            }
            else {
                currentError = null;
            }
        }
        else if(e.target.name === 'email'){
            if(e.target.value.length === 0){
                currentError = "Email is required!";
            }
            else if(!e.target.value.match(emailformat)){
                currentError = "Invalid email!";
            }
            else {
                currentError = null;
            }
        }

        dispatch({
            type: e.target.name,
            payload: {
                value: e.target.value,
                error: currentError
            }
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        state.firstName.value = '';
        state.lastName.value = ''; 
        state.email.value = '';
    }

    return (
        <form className="w-50 mt-5 mx-auto p-3 border border-dark" onSubmit={ handleSubmit }>
            <div className="mb-3">
                <div>
                    <label className="form-label">First Name:</label>
                    <input type="text"
                        name="firstName"
                        className="form-control"
                        value={ state.firstName.value }
                        onChange={ handleChange } />
                </div>
                {state.firstName.error !== null && (
                    <p className="text-danger"> { state.firstName.error }</p>
                )}
            </div>
            <div className="mb-3">
                <div>
                    <label className="form-label">last Name:</label>
                    <input type="text"
                        name="lastName"
                        className="form-control"
                        value={ state.lastName.value }
                        onChange={ handleChange } />
                </div>
                
                {state.lastName.error !== null && (
                    <p className="text-danger"> { state.lastName.error }</p>
                )}
            </div>
            <div className="mb-3">
                <div>
                    <label className="form-label">Email:</label>
                    <input type="text"
                        name="email"
                        className="form-control"
                        value={ state.email.value }
                        onChange={ handleChange } />
                </div>
                {state.email.error !== null && (
                    <p className="text-danger"> { state.email.error }</p>
                )}
            </div>
            {
                state.firstName.error !== null || state.lastName.error !== null || state.email.error !== null ?
                <input className="btn btn-primary" type="submit" value="Submit" disabled /> : 
                <input className="btn btn-primary" type="submit" value="Submit" />
            }
        </form>
    );

}

export default ValidateForm;