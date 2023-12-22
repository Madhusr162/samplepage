import React, { useState, useEffect } from 'react';
import './Sidebar.css'

const ReverseCountdownTimer = ({ totalSeconds }) => {
    const [hours, setHours] = useState(Math.floor(totalSeconds / 3600));
    const [minutes, setMinutes] = useState(Math.floor((totalSeconds % 3600) / 60));
    const [seconds, setSeconds] = useState(totalSeconds % 60);

    useEffect(() => {
        const updateTimer = () => {
            if (totalSeconds > 0) {
                setHours(Math.floor(totalSeconds / 3600));
                setMinutes(Math.floor((totalSeconds % 3600) / 60));
                setSeconds(totalSeconds % 60);
            }
        };

        const timerId = setInterval(() => {
            updateTimer();
            totalSeconds -= 1;
        }, 1000);

        return () => clearInterval(timerId);
    }, [totalSeconds]);

    return (
        <div>
            <p>
                Timer: {' '}
                <span>{String(hours).padStart(2, '0')}</span> :
                <span>{String(minutes).padStart(2, '0')}</span> :
                <span>{String(seconds).padStart(2, '0')}</span>
            </p>
        </div>
    );
};

const MultiTimerPage = () => {
    const timers = [
        { id: 1, totalSeconds: 3600 }, // 1 hour
        { id: 2, totalSeconds: 1800 }, // 30 minutes
        { id: 3, totalSeconds: 900 }, // 15 minutes
    ];

    return (
        <div className='container'>
            <div className='sidebar float-end'>
                {timers.map((timer) => (
                    <span className="input-group-text mt-3" id="inputGroup-sizing-lg" style={{ "width": "50%", marginLeft: "20px" }}>
                        <div>
                            <ReverseCountdownTimer key={timer.id} totalSeconds={timer.totalSeconds} />

                        </div>
                    </span>
                ))}
                <div className='userlist'>
                    <h6 className='mt-4'> Online</h6>
                    <ul className='bullet-list'>
                        <li>User 1</li>
                        <li>User 1</li>
                        <li>User 1</li>
                        <li>User 1</li>
                    </ul>
                </div>
            </div>
         </div>
    );
};

export default MultiTimerPage;
