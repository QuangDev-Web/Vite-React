import React from 'react';
import DefaultLayout from '../../layouts/defaultLayout/DefaultLayout';
import './Contact.scss';

const Contact = () => {
    return (
        <DefaultLayout>
            <div className="contact">
                <h2>Liên hệ</h2>
                <p>Hãy liên hệ với chúng tôi qua email: support@myapp.com 📩</p>
            </div>
        </DefaultLayout>
    );
};

export default Contact;
