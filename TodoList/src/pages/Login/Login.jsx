import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../features/auth/authSlice';
import AuthLayout from '../../layouts/authLayout/AuthLayout';
import './Login.scss';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFakeLogin = (e) => {
        e.preventDefault();

        // fake user data
        const fakeUser = {
            id: 1,
            name: 'Nguyễn Văn A',
            email: 'test@example.com'
        };

        // dispatch loginSuccess
        dispatch(loginSuccess(fakeUser));

        // redirect sang dashboard
        navigate('/dashboard');
    };
    return (
        <AuthLayout>
            <div className="login">
                <h2>Đăng nhập</h2>
                <form onSubmit={handleFakeLogin}>
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
