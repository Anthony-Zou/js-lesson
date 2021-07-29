/**Compute the circle's area */
/*
var radius;
var area;

radius=20;
area= Math.pow(radius,2) * Math.PI;

console.log(Math.floor(area));
console.log(area.toFixed(2));
console.log(Math.round(area));
console.log(Math.ceil(area));

*/
var input =require('readline-sync');

function calculateBMI()
{
 
var height=input.question("what is your height in meter");
var weight=input.question("what is your weight in kg");
 
BMI=weight/Math.pow(height,2);

console.log(BMI.toFixed(2));

if (BMI<=25 && BMI>=18.5)
{
    console.log("Your BMI is normal");
}
else if (BMI>25 && BMI<=30)
{
    console.log("You are overweight");
}
else if (BMI>30 && BMI<=40)
{
    console.log("You are obese");
}
else if (BMI<18.5)
{
    console.log("You are underweight");
}
else
{
    console.log("You have morbid obesity");
}
}


var AskQuestion=input.question("Do you want to claculate your BMI? (y/n)");
if(AskQuestion=='y')
{calculateBMI();}
else if(AskQuestion=='n')
{console.log('bye bye');
return;}




