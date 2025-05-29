import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import TodoList from './components/TodoList';
import todoModel from './models/todo';

// 1. 初始化 Dva 应用
const app = dva();

// 2. 注册 Model
app.model(todoModel);

// 3. 定义路由组件
app.router(() => <TodoList />);

// 4. 启动应用并渲染
const App = app.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);