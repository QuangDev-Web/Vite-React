import React from 'react';
import DefaultLayout from '../../layouts/defaultLayout/DefaultLayout';

const Dashboard = () => {
    return (
        <DefaultLayout>
            <h2>Dashboard</h2>
            <p>Đây là khu vực chỉ dành cho user đã đăng nhập 🔒</p>
        </DefaultLayout>
    );
};

export default Dashboard;
