import { useState, useEffect } from "react";

export const useTimer = (toggleStartHandler) => {
    const [timer, setTimer] = useState(0);
    const [activateInterval, setActivateInterval] = useState(false);

    useEffect(() => {
        let interval = undefined;
        if (activateInterval) {
            interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev === 1) {
                        toggleStartHandler();
                        setActivateInterval(false);
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [activateInterval]);

    const startTimer = (inputState) => {
        if (inputState > 0) {
            setActivateInterval(true);
            setTimer(inputState * 60);
            toggleStartHandler()
        } else {
            alert("Введите число!")
        }
    };

    const stopTimer = () => {
        setActivateInterval(false);
    };
    const startTimerAfterStop = () => {
        setActivateInterval(true);
    };
    const restartTimer = () => {
        stopTimer();
        setTimer(0);
    };

    return {
        timer,
        startTimer,
        stopTimer,
        restartTimer,
        startTimerAfterStop,
    };
};