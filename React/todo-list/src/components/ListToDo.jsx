import React from "react";

const ListToDo = (props) => {
    const {item, toggleItem, deleteItem} = props;

    const handleToggle = () => {
        toggleItem(item.id);
    }

    const handleDelete = () => {
        deleteItem(item.id);
    }

    return (
        <div style={{ marginBottom: '10px' }}>
            <label style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}>
                <input type="checkbox" checked={item.isChecked} onChange={handleToggle} />
                {item.title}
            </label>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ListToDo;