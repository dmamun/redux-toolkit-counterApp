import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../counterSlice';

const CounterView = () => {
    const count=useSelector(state=>state.counter.count);
    const dispatch=useDispatch();
    const handleIncrement=()=>{
        dispatch(increment())
    }
    const handleDecrement=()=>{
        dispatch(decrement())
    }
    const handleRest=()=>{
        dispatch(reset())
    }
    return (
        <div>
            <h2>count:{count}</h2>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleRest}>reset</button>
        </div>
    );
};

export default CounterView;