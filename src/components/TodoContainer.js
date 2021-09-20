import React, { useState } from "react"
import InputTodo from "../InputTodo";
import TodoList from "../TodoList";
import Header from "./Header"

const TodoContainer = () => {
    const [todos, setTodos] = useState(
        [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       );
    
    const addTodoItem = title => {
        const newTodo = {
            id: todos.length + 1,
            title: title,
            completed: false
          };
          setTodos(
            [...todos, newTodo]
          );
      };

    const handleChange = (id) => {
        setTodos(
            todos.map(todo => {
              if (todo.id === id) {
                todo.completed = !todo.completed;
              }
              return todo;
            })
          );
    };

    const delTodo = (id) => {
        setTodos( todos.filter(todo => todo.id != id) );
      }
    const setUpdate = (updatedTitle, id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          })
        );
      }
    return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={addTodoItem}/>
                    <TodoList todos={todos} handleChangeProps={handleChange} 
                    deleteTodoProps={delTodo}  setUpdate={setUpdate}/>
                </div>
            </div>
        );

}
export default TodoContainer