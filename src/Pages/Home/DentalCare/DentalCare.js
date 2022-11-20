import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row lg:px-44 gap-20">
            <img src={treatment} alt="" className="rounded-lg shadow-2xl w-96" />
            <div className='lg:w-1/2 mx-auto'>
            <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
        </div>
    );
};

export default DentalCare;