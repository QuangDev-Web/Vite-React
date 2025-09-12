import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>© {new Date().getFullYear()} My App. All rights reserved.</p>

                <ul className="footer__links">
                    <li><a href="/privacy">Chính sách bảo mật</a></li>
                    <li><a href="/terms">Điều khoản sử dụng</a></li>
                    <li><a href="/contact">Liên hệ</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;