import React, { useState } from 'react';


class Todo {
    constructor(str) {
        this.text = str;
        this.completed = false;
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }

}
const Todos = () => {
    const [inputVal, setInputVal] = useState('');
    const [todos, setTodos] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        const newTodo = new Todo(inputVal);
        setTodos([...todos, newTodo]);

        setInputVal('');
    }

    function toggleCompleted(index) {
        const todo = todos[index];
        todo.toggleCompleted();

        setTodos([...todos]);
    }
    function handleDelete(index) {
        const newTodo = [...todos];
        newTodo.splice(index,1);
        setTodos(newTodo);
        console.log(todos[index])
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                />
                <button>Add</button>
            </form>
            {todos.map((todo,i) => (
                <div key={i}>
                    <span style={{textDecoration: todo.completed ? 'line-through':'none'}}>{todo.text}</span>
                    <input
                        type="checkbox"
                        chekced={todo.completed}
                        onChange={() => toggleCompleted(i)}
                    />
                    <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
            ))}
        </>
    )
}


export default Todos;
