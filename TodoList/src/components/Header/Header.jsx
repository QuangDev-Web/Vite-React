import './Header.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Header = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log('isAuthenticated:', isAuthenticated)
    // console.log('user:', user)

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
    return (
        <header className="header">
            <div className="header__logo">
                <h1>My App</h1>
            </div>

            <nav className="header__nav">
                <ul>
                    <li><NavLink to="/">Trang chủ</NavLink></li>
                    <li><NavLink to="/about">Giới thiệu</NavLink></li>
                    <li><NavLink to="/contact">Liên hệ</NavLink></li>
                    <li><NavLink to="/login">Đăng Nhập</NavLink></li>
                    <li><NavLink to="/register">Đăng Kí</NavLink></li>
                    {isAuthenticated && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
                </ul>
            </nav>
            <div className="header__auth">
                {isAuthenticated ? (
                    <>
                        <span>Xin chào, {user.name}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;