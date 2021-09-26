/* Constants About the 'App' Entity */

/* This enumeration stores the types of operating systems where an application
    is run */
export const OperatingSystems = {
    IOS: "ios",
    ANDROID: "android"
}

/* This enumeration stores the types that an application has
    about its earnings method
    it can be free, paid or a top-grossing app */
export const AppEarningsTypes = {
    FREE: "free",
    PAID: "paid",
    TOP_GROSSING: "top-grossing"
}

/* This enumeration stores the types of the devices that an application 
    is developed for */
export const DeviceTypes = {
    ANDROID_MOBILE: "MOBILE",
    IPHONE: "IPHONE",
    IPAD: "IPAD"
}

/* Possible pairs of operatings systems and device types */
export const OperatingSystemsAndDeviceTypes = [
    {
        "os": OperatingSystems.IOS,
        "deviceType": DeviceTypes.IPHONE
    },
    {
        "os": OperatingSystems.IOS,
        "deviceType": DeviceTypes.IPAD
    },
    {
        "os": OperatingSystems.ANDROID,
        "deviceType": DeviceTypes.ANDROID_MOBILE
    }
]


/* This enumeration stores the limits of the applications that the SensorTowerAPI provides */
export const Limits = {
    MAX: 200,
    MEDIUM: 100
}

/* Validator Functions */
/* these functions will make sure that the inputs to the program
   is one of these constants */

export function isValidOperatingSystem(os){
    /* this function is responsible for validating the operating system data
       in the program, it must be one of the valid operating systems */
    
    let validOperatinsSystems = Object.values(OperatingSystems);

    if (validOperatinsSystems.includes(os))
        return true;
    else
        return false;
}


export function isValidDeviceType(deviceType){
    /* this function is responsible for validating the device type data
       in the program, it must be one of the valid device types */
    
    let validDeviceTypes = Object.values(DeviceTypes);

    if (validDeviceTypes.includes(deviceType))
        return true;
    else 
        return false;
}

export function isValidLimit(limit){
    /* this function is responsible for validating the limit data
       in the program, it must be positive */

    if (limit > 0 && Number.isInteger(limit))
        return true;
    else 
        return false;
}
