import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value); // 用于读取state
    const dispatch = useDispatch(); // 用于触发action

    return (
        <div>
            <h1>Redux Counter</h1>
            <div>Count: {count}</div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            </div>
        </div>
    );
};

export default Counter;