import React from 'react';
import './AuthLayout.scss';

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <div className="auth-layout__content">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;