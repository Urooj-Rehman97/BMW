// Operators
// Arithmetic Operators
var a=12;
var b=6;
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var rem=a%b;
document.write("The Value of a : "+a+"<br>");
document.write("The Value of b : "+b+"<br>");
document.write("The sum of a and b : "+sum+"<br>");
document.write("The subtraction of a and b : "+sub+"<br>");
document.write("The multiplictaion of a and b : "+mul+"<br>");
document.write("The division of a and b : "+div+"<br>");
document.write("The remainder of a and b : "+rem+"<br>");

//relational Operators and if statement
var value1= 23;
var value2= 45;
var first_name="Urooj";
var last_name="Rehman";
if(value1<value2){
    document.write("Value 1 is Smaller than Value 2<br>");
}
if(first_name!==value2){
    document.write("Both First and Last name are not same");
}
// if-else statement
var first=45;
var second=56;
document.write("<h1> if-else statement</h1>");
if(first>second){
    document.write("First value is greater than second value");
}else{
    document.write("First value is smaller than second value");
}

//if-else if and Logical Operator
document.write("<h1>Student Grade</h1>");
var per=20;
if(per>=80&&per<=100){
    document.write("A-1 Grade");
}
else if(per>=70&&per<80){
    document.write("A Grade");
}
else if(per>=60&&per<70){
    document.write("B Grade");
}
else if(per>=50&&per<60){
    document.write("C Grade");
}else {
    document.write("You are fail");
}
//Logical NOT
var x=true;
var y=!x;
document.write("<br>"+y);
//Assignment Operator
var num=4;
document.write("<br><br>The value of num is: "+num);
num+=6;
document.write("<br>The value of num is: "+num);
num-=5;
document.write("<br>The value of num is: "+num);
num*=2;
document.write("<br>The value of num is: "+num);
num/=5;
document.write("<br>The value of num is: "+num);
num%=2;
document.write("<br>The value of num is: "+num);
//switch case
document.write("<h1>Switch Case</h1>");
var day=prompt("Enter any number");
switch (day) {
    case 1: 
        document.write("Today is Sunday<br>");
        break;
    case 2:
        document.write("Today is Monday");
        break;
    case 3:
        document.write("Today is Tuesday");
        break;
    case 4:
        document.write("Today is Wednesday");
        break;
    case 5:
        document.write("Today is Thursday");
        break;
    case 6:
        document.write("Today is Friday");
        break;
    case 7:
        document.write("Today is Saturday");
        break;

    default:
        document.write("Enter Valid Value<br>");
        break;
}