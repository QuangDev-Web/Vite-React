import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import './Home.scss';

const Home = () => {
    return (
        <DefaultLayout>
            <div className="home">
                <h2>Trang chủ</h2>
                <p>Chào mừng bạn đến với ứng dụng React + Redux + SCSS 🎉</p>
            </div>
        </DefaultLayout>
    );
};

export default Home;
