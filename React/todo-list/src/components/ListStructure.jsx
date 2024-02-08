import React from "react";
import ListToDo from "./ListToDo";

const ListStructure = (props) => {

    const {items, toggleItem, deleteItem} = props;

    return (
        <div className="unorder"> 
                {
                    items.map( (item, index) => (
                        <ListToDo key={index} item={item} toggleItem={toggleItem} deleteItem={deleteItem} />
                    ))
                }
        </div>
    );
}

export default ListStructure;