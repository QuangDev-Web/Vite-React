import React from 'react';
import DefaultLayout from '../../layouts/defaultLayout/DefaultLayout';
import './About.scss';

const About = () => {
    return (
        <DefaultLayout>
            <div className="about">
                <h2>Giới thiệu</h2>
                <p>Đây là trang giới thiệu về ứng dụng của bạn 🚀</p>
            </div>
        </DefaultLayout>
    );
};

export default About;
