import { useState } from 'react';
import { connect } from 'dva';
import './TodoList.css';

// TodoList收到Dva状态管理的两个参数，todos是state数据, dispatch用于触发action
const TodoList = ({ todos, dispatch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch({
                type: 'todo/addTodo',
                payload: inputValue,
            });
            setInputValue('');
        }
    };

    const handleRemoveTodo = id => {
        dispatch({
            type: 'todo/removeTodo',
            payload: id,
        });
    };

    const handleToggleTodo = id => {
        dispatch({
            type: 'todo/toggleTodo',
            payload: id,
        });
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="输入待办事项"
                />
                <button onClick={handleAddTodo}>添加</button>
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <span onClick={() => handleToggleTodo(todo.id)}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleRemoveTodo(todo.id)}>删除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// connect函数状态注入组件, 这里的{ todo }是Dva状态管理的namespace, 将todos作为参数转递给TodoList组件
export default connect(({ todo }) => ({
    todos: todo.todos,
}))(TodoList);