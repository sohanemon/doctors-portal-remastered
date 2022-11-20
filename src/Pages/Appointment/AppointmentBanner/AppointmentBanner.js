import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header>
            <div className="hero py-48" style={{background: `url(${bg})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className='bg-white p-4 rounded-xl shadow-lg'
                    />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;