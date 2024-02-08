import React, {useState} from "react";
let id = 0;
const ListForm = (props) => {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {id:id++, title:title, isChecked:false};
        props.addTodo(newTodo);
        setTitle("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className="style-text" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    <input className="btn" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
}

export default ListForm;