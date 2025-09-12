
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
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
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;