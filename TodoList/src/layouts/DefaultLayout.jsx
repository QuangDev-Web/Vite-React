import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './DefaultLayout.scss';

const DefaultLayout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="layout__content">{children}</main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;