import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32 px-20'
        style={{
            background: `url(${appointment})`
        }}
            >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row pb-0">
                    <img src={doctor} alt="" className="-mt-24 hidden md:block lg:w-1/2" />
                    <div>
                        <h4 className='text-xl text-secondary font-bold mb-5'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-semibold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;