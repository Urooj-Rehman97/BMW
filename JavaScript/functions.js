//Functions
//Function without Parameter
function calculate(){             //function definition
    var x=12;
    var y=16;
    var sum=x+y;
    var sub=x-y;
    var mul=x*y;
    var div=x/y;
    var rem=x%y;
    document.write("The value of x : "+x+"<br>");
    document.write("The value of y : "+y+"<br>");
    document.write("Sum of x and y : "+sum+"<br>");
    document.write("Subtraction of x and y : "+sub+"<br>");
    document.write("Multiplication of x and y : "+mul+"<br>");
    document.write("Division of x and y : "+div+"<br>");
    document.write("Reminder of x and y : "+div+"<br>");

}
document.write("<br><br>");
calculate();                          //function calling
//Functions with Parameter
function cal(c,d){                   //function definition
    var c;
    var d;
    var sum=c+d;
    var sub=c-d;
    var mul=c*d;
    var div=c/d;
    var rem=c%d;
    document.write("The value of c : "+c+"<br>");
    document.write("The value of d : "+d+"<br>");
    document.write("Sum of c and d : "+sum+"<br>");
    document.write("Subtraction of c and d : "+sub+"<br>");
    document.write("Multiplication of c and d : "+mul+"<br>");
    document.write("Division of c and d : "+div+"<br>");
    document.write("Reminder of c and d : "+div+"<br>");

}
document.write("<br><br>");
cal(7,9);                                        //function Calling
//Functions with Return Statement

function add(value_1,value_2){                 //function definition
    var value_1;
    var value_2;
    var sum= value_1+value_2;
    document.write("The Value_1 : "+value_1+"<br>");
    document.write("The Value_2 : "+value_2+"<br>");
    return(sum);
}
document.write("<br><br>");
var result=add(4,5);                              //function Calling
document.write(result);