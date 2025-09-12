
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <h1>My App</h1>
            </div>

            <nav className="header__nav">
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/about">Giới thiệu</a></li>
                    <li><a href="/contact">Liên hệ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;