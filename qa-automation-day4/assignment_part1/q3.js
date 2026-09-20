// Q3
// Task: Write dayType(day) that takes a day name string and returns 'Weekend' for Saturday/Sunday and 'Weekday' for the rest. Use a switch statement.
const dayType = (day) => {
    switch(day) {
        case 'Sunday':
        case 'Saturday':
            return 'Weekend' ; // we do not use break here because we want 'sunday' to fall through to same code as 'saturday'
            // also, return exists the function immediately
            // break would've been important if we used console.log instead of return
        default:
            return 'Weekday';
    }
};
console.log(dayType('Sunday'));
console.log(dayType('Saturday'));
console.log(dayType('Tuesday'));