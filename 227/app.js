/*let greetingText='Hi, I\'m Max!';
let age=32;
alert(greetingText);
alert(greetingText);
greetingText='Hi, I\'m really  Max!';
alert(greetingText);
alert(age);
alert(age);*/
let age=32;
let userName='Max';
let hobbies=['Sports','Cooking','Reading'];
let job={
    title:'Developer',
    place:'New York',
    salary: 50000,
}
let totalAdultYears;
function calculateAdultYears(userAge){
    
    return userAge-18
}

totalAdultYears=calculateAdultYears(age);
alert(totalAdultYears);

age=45;
totalAdultYears=calculateAdultYears(age);
alert(totalAdultYears);