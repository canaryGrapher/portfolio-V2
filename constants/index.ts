const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/**
 * @function getMonthName
 * @description Returns the name of the month
 * @param monthNumber the month number to get the name of
 * @returns string
 */
const getMonthName = (monthNumber: number) => {
    return months[monthNumber];
}

export { getMonthName };
