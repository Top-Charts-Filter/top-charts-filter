

function isValidDate(date){
    /* this function validates whether a given date is in the desired format or not
       desired format is UTC format with hours, minutes, seconds and miliseonds are both zero */

    if(!date) return false;

    /* hours, minutes, seconds and milliseconds must be zero */
    if(date.getHours() !== 0) return false;
    if(date.getMinutes() !== 0) return false;
    if(date.getSeconds() !== 0) return false;
    if(date.getMilliseconds() !== 0) return false;

    return true; // validated
}

export default isValidDate;