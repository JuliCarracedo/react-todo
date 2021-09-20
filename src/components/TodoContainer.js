import React, { useEffect, useState } from "react"
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import Header from "./Header"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import { Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"

const TodoContainer = () => {
    const [todos, setTodos] =  useState(
      JSON.parse(localStorage.getItem('list')) || []
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
        localStorage.setItem('list', JSON.stringify(todos));
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

          localStorage.setItem('list', JSON.stringify(todos));
    };

    const delTodo = (id) => {
        setTodos( todos.filter(todo => todo.id != id) );

        localStorage.setItem('list', JSON.stringify(todos));
      }

    const setUpdate = (updatedTitle, id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          })
        );
        localStorage.setItem('list', JSON.stringify(todos));
      }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => response.json())
        .then(data => setTodos(data));
      });

    return (
        <>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div className="container">
                  <div className="inner">
                      <Header />
                      <InputTodo addTodoProps={addTodoItem}/>
                      <TodoList todos={todos} handleChangeProps={handleChange} 
                      deleteTodoProps={delTodo}  setUpdate={setUpdate}/>
                  </div>
              </div>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotMatch />
            </Route>
          </Switch>
        </>
        );

}
export default TodoContainer