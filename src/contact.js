import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5j1ukke',
            'template_o2co6mq', form.current,
            '8pYZRToj-TXHH9enX')
            .then((result) => {
                console.log(result.text);
                toast.success('🦄 Sent Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }, (error) => {
                console.log(error.text);
                toast.error('🦄 Error occured!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            });
        e.target.reset();
    };

    return (
        <section>
            <div>
                <h2>Contact us</h2>
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" placeholder="Full name" name="user-name" required /> <br />
                    <input type="email" placeholder="Email" name="user-email" required /><br />
                    <input type="text" placeholder="Subject" name="subject" required /><br />
                    <textarea placeholder="message" name="message" cols="30" rows="10" ></textarea><br />
                    <button type="submit">Send message</button>

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
                </form>
            </div>
        </section>
    )
}
export default Contact;
