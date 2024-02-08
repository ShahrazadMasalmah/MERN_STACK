import React, {useState} from "react";
import styles from './component.module.css';

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const [arrayColors, setArrayColors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(arrayColors);
    }

    const addElement = () => {
        const newArray = [...arrayColors, color];
        setArrayColors(newArray);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label style={{marginRight: '20px'}}><strong>Color</strong></label>
                <input className={styles.text} type="text" value={ color } onChange={ e => setColor(e.target.value) } />
                <input className={ styles.btn } type="submit" value="Add"
                onClick={ () => {addElement(); setColor("");} }/>
            </div>
            
        </form>
    );
}

export default ColorForm;