import React from 'react';
import AuthLayout from '../../layouts/authLayout/AuthLayout';
import './Register.scss';

const Register = () => {
    return (
        <AuthLayout>
            <div className="register">
                <h2>Đăng ký</h2>
                <form>
                    <div className="form-group">
                        <label>Họ tên</label>
                        <input type="text" placeholder="Nhập họ tên" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Nhập email" />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" placeholder="Nhập mật khẩu" />
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Register;
