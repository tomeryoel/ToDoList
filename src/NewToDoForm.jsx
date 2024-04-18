import { useState } from "react";

export function NewToDoForm({onSubmit}) {
    // props.onSubmit;
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem == "") return

        onSubmit(newItem);
        // props.onSubmit(newItem);
        // addToDo(newItem);

        setNewItem("");
    }


    return <form onSubmit={handleSubmit} className='new-item-form'>
        <h1 className="header"> Todo List</h1>
        <div className='form-row'>
            <label> New Item</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text" id="item"
            />
        </div>
        <button className="btn"> Add </button>
    </form>
}