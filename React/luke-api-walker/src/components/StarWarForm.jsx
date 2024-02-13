
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const StarWarForm = props => {
    //const [options, setOptions] = useState([]);
    const {options, onUpdate} = props;
    const [id, setId] = useState('');
    const[category, setCategory] = useState("");
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        onUpdate(id, category);
        if(id && category){
            navigate(`/${category}/${id}`);
        }
    }

    return (
        <div>
            <h1>Star War</h1>
            <form onSubmit={handleSubmit} className="style-form">
                <div>
                    <label style={{ marginRight: '10px' }}><strong>Search for:</strong></label>
                    <select className="style-input" style={{ width: '100px' }} 
                    value={category} onChange={e => setCategory(e.target.value)}>
                        {
                            options.map( (item, index) =>( <option key={index} value={item}>{item}</option>))
                        }
                    </select>
                </div>
                <div>
                    <label style={{ marginRight: '10px' }}><strong>ID:</strong></label>
                    <input className="style-input" type="number" 
                    value={id} onChange={e => setId(e.target.value)}  />
                </div>
                <input className="btn" type="submit" value="Search" />
            </form>
        </div>
    );
}

export default StarWarForm;