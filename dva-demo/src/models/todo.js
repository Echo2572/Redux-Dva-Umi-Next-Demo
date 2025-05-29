export default {
    namespace: 'todo',
    state: {
        todos: JSON.parse(localStorage.getItem('todos')) || [
            { id: 1, text: '学习 Dva', completed: false },
        ],
    },
    effects: {
        /**
         * 异步操作, 模拟API延迟
         * '*'表示JS中的generator函数
         * yield, call, put都是异步操作函数
         */
        *addTodo({ payload }, { call, put }) {
            yield call(delay, 1000);
            yield put({
                type: 'addTodoSync',
                payload,
            });
        },
    },
    reducers: {
        addTodoSync(state, { payload }) {
            const newTodo = {
                id: Date.now(),
                text: payload,
                completed: false,
            };
            const newTodos = [...state.todos, newTodo];
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: newTodos,
            };
        },
        removeTodo(state, { payload }) {
            const newTodos = state.todos.filter(todo => todo.id !== payload);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: newTodos,
            };
        },
        toggleTodo(state, { payload }) {
            const newTodos = state.todos.map(todo =>
                todo.id === payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return {
                ...state,
                todos: newTodos,
            };
        },
    },
};

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}