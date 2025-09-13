import React from 'react';
import DefaultLayout from '../../layouts/defaultLayout/DefaultLayout';
import './Home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../features/counter/counterSlice';
const Home = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <DefaultLayout>
            <div className="home">
                <h2>Trang chủ</h2>
                <p>Chào mừng bạn đến với ứng dụng React + Redux + SCSS 🎉</p>
                <h1>Counter: {count}</h1>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </DefaultLayout>
    );
};

export default Home;
