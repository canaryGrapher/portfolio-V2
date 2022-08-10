import { useEffect, useMemo, useState } from "react";
import { getMonthName } from "../constants";


/**
 * @hook useHumanReadableTime
 * @description Returns the current time in the format of "Hour:Minute AM/PM"
 * @returns string 
 */
const useHumanReadableTime = () => {
    const [humanTime, setHumanTime] = useState<string>('');

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const AMPM = hours >= 12 ? 'PM' : 'AM';
            setHumanTime(`${hours == 0 ? 12 : hours}:${minutes < 10 ? "0" + minutes : minutes} ${AMPM}`);
        }, 2000);
    }, []);

    return humanTime
}

/**
 * @hook useHumanReadableDate
 * @description Returns the current date in the format of "Month, Day, Year"
 * @returns string 
 */
const useHumanReadableDate = () => {
    const [humanDate, setHumanDate] = useState<string>('');
    const date = useMemo(() => new Date(), []);
    useEffect(() => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        setHumanDate(`${getMonthName(month)} ${day}, ${year}`);
    }, [date]);
    return humanDate
}


export { useHumanReadableTime, useHumanReadableDate }