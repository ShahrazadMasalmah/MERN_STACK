import React, {useState} from "react";

const MyTab = (props) => {
    const[message, setMessage] = useState("");
    const[isclicked, setIsClicked] = useState(0);

    const onClickHandler = (e, value, index) => {
        setIsClicked(index);
        setMessage(value + " content is showing here.");
    }

    const tabs = props.tabs;

    return (
        <div>
            <div>
            {
                tabs.map((tab, index) => (
                    <button key={index} onClick={e => onClickHandler(e, tab, index)}
                    style={{ backgroundColor: index === isclicked ? "black" : "white",
                            color: index === isclicked ? "white" : "black",
                            marginLeft: '10px'}} 
                    >{tab}</button>
                )
                )
            }
            </div>
            <div style={{ border: '2px solid gray',
                width: '250px',
                height: '80px',
                marginTop: '10px',
                paddingTop: '20px' }}>{ message }
            </div>
        </div>
        
    );
}

export default MyTab;