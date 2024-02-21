//while loop
while(i<=10){
    document.write(i+"<br>");
    i++;
}
//do-while loop
document.write("<h1>Do-While Loop</h1>");
var j=0;
do{
    document.write("JavaScript<br>");
    j++;
}while(j>=10);
//for loop
document.write("<h1>For Loop</h1>");
for(k=0; k<=10; k++){
    document.write(k+"<br>");
}
//even numbers
document.write("<h1>Even Numbers</h1>");
for(num=0; num<=20; num++){
    if(num%2==0){
        document.write(num+"<br>");
    }
}
//break and continue statement
document.write("<h1>Break and Continue Statement</h1>");
for(l=1; l<=10; l++){
    if(l==3){
        document.write(l+") JavaScript<br>");
       break;
    }
    document.write(l+") BMW<br>");
}