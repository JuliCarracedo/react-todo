import React, { Component, useState } from "react"

const InputTodo = (props) => {
    const [title, setTitle] = useState('');

    const onChange = e => {
        setTitle(e.target.value);
      };

    const  handleSubmit = e => {
        if (this.state.title.trim()) {
            e.preventDefault();
            props.addTodoProps(title);
            setTitle('');
        }else { 
            alert("Please write item"); 
        }
      };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo..." 
        value={title} name="title" onChange={onChange}/>
        <button>Submit</button>
      </form>
    )

}
export default InputTodo
