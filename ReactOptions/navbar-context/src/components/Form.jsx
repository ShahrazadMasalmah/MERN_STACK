import React, { useContext } from "react";
import MyContext from "./MyContext";

const Form = props => {
    const { name, setName } = useContext(MyContext);

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label><strong>Your Name:</strong></label>
                <input className="style-input" type="text" value={name} onChange={ e => setName(e.target.value) } />
            </form>
        </>
    );

}

export default Form;