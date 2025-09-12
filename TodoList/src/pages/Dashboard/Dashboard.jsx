import React from 'react';
import DefaultLayout from '../../layouts/defaultLayout/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    return (
        <DefaultLayout>
            <h2>Dashboard</h2>
            {user ? (
                <>
                    <p>Xin chào, <strong>{user.name}</strong> 👋</p>
                    <button onClick={() => dispatch(logout())}>Đăng xuất</button>
                </>
            ) : (
                <p>Không có thông tin user</p>
            )}
        </DefaultLayout>
    );
};

export default Dashboard;
