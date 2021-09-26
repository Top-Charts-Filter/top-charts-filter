import isValidDate from "../validators/dateValidator.js";

function rectifyDate(date){
    /* this function makes sure that the date in the application is 
       in the desired format, if not, rectifies it */
    
    if(isValidDate(date)) return date;
    /* if valid just return it */
    
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    
    return new Date(Date.UTC(year, month, day));

}

export default rectifyDate;

/* Test Case */
/*
    console.log(rectifyDate(new Date()));
*/