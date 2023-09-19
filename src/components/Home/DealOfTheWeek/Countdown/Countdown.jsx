import React, { useEffect, useState } from 'react'

function TimeSlot({ time, name }) {
    return (
        <div className='p-4 bg-neutral-100 text-center'>
            <h2 className='text-4xl text-yellow-400 font-semibold tracking-wide'>{time && time < 10 ? `0${time}` : `${time}`}</h2>
            <p className='text-neutral-400 tracking-widest font-light'>{name}</p>
        </div>
    )
}
export function Countdown() {
    const [days, setDays] = useState(6);
    const [hours, setHours] = useState(23);
    const [min, setMin] = useState(58);
    const [sec, setSec] = useState(57);

    useEffect(() => {
        const interval = setInterval(() => {
            setSec(prev => prev < 2? 57: (prev - 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='flex gap-6 justify-evenly items-center'>
            <TimeSlot time={days} name={"DAYS"} />
            <TimeSlot time={hours} name={"HRS"} />
            <TimeSlot time={min} name={"MINS"} />
            <TimeSlot time={sec} name={"SECS"} />
        </div>
    )
}
