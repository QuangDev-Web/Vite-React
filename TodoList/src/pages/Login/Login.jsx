import React from 'react';
import AuthLayout from '../../layouts/authLayout/AuthLayout';
import './Login.scss';

const Login = () => {
    return (
        <AuthLayout>
            <div className="login">
                <h2>Đăng nhập</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Nhập email" />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" placeholder="Nhập mật khẩu" />
                    </div>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;
