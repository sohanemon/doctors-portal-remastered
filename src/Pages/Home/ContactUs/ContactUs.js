import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className="hero py-16" style={{background: `url(${appointment})`}}>     
            <div className="card flex-shrink-0 w-full max-w-md">
                <div className="text-center">
                <h1 className="text-xl font-bold text-secondary">Contact Us</h1>
                <p className="py-2 text-4xl text-white mb-8">Stay connected with us</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="form-control">
                <input type="text" placeholder="Email Address" className="input input-bordered" />
                </div>
                <div className="form-control">
                <input type="text" placeholder="Subject" className="input input-bordered" />
                </div>
                <div className="form-control">
                <textarea className="textarea textarea-bordered h-28" placeholder="Your message"></textarea>
                </div>
                <div className="mt-3 flex justify-center">
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;