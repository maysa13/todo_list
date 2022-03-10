import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoFrom";
import uuid from "uuid";
import "../style/TodoList.css";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: uuid(), task: "ตื่นก่อน 6.00 น.", completed: false },
        { id: uuid(), task: "ออกกำลังกาย", completed: false },
        { id: uuid(), task: "ดื่มกาแฟดำ", completed: true },
        { id: uuid(), task: "ห้ามง่วงนอนระหว่างวัน", completed: true }
    ]);

    const create = newTodo => {
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    };

    const remove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const update = (id, updtedTask) => {
        const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, task: updtedTask };
        }
        return todo;
        });
        setTodos(updatedTodos);
    };

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const todosList = todos.map(todo => (
        <Todo
            toggleComplete={toggleComplete}
            update={update}
            remove={remove}
            key={todo.id}
            todo={todo}
        />
    ));

    return (
        <div className="TodoList">

            <ul>{todosList}</ul>
            <NewTodoForm createTodo={create} />
        </div>
    );
}

export default TodoList;
