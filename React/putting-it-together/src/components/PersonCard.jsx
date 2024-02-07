import React, {useState} from "react";

const PersonCard = (props) => {

    const [state, setState] = useState({
        age : props.age,
    });

    const ageIncreaseByOne = () => {
        setState({                   // the setter will update the value held in state
            age: state.age + 1
        });
    }

    const {firstName, lastName, hairColor} = props;

    return (
        <section>
            <h1>{ firstName }, { lastName }</h1>
            <p>Age: { state.age}</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ ageIncreaseByOne }>Birthday Button for {firstName} {lastName}</button>
        </section>
    );
}

export default PersonCard;