import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-04-18') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className='text-white grid grid-cols-2 lg:grid-cols-4  gap-2'>
            {days && (
                <Card count={formatTime(days)} title={"Days"} />
                
            )}
            <Card count={formatTime(hours)} title={"Hours"} />
            <Card count={formatTime(minutes)} title={"Minutes"} />
            <Card count={formatTime(seconds)} title={"Seconds"} />
        </div>
    );
};

export default Countdown;
