import React, { useContext } from "react";
import MyContext from "./MyContext";

const Navbar = props => {
    const { name } = useContext(MyContext);
    
    return(
        <div className="style-name">
            <h1 style={{ marginRight: '25px' }}>Hi { name }!</h1>
        </div>
    );
}
export default Navbar;