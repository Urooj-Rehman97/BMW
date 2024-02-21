//Array
//Single dimensional Array
//method 1
document.write("<h1>Array</h1>");
document.write("<h2>Single Dimensional Array</h2>");
var arr=[23,78,9,54,12,67,34,"Hello"];
document.write(arr+"<br>");
document.write(arr[3]+"<br><br>");
for(m=0; m<arr.length; m++){
    document.write(arr[m]+"<br>");
}
document.write("<br>"+arr.length+"<br>");
//method 2
var arr1=new Array();
arr1[0]="Urooj Rehman";
arr1[1]="Faculty Member";
document.write("<br>"+arr1);
//multidimensional array

document.write("<h1>Student Records</h1>");

var student=new Array(3);
student[0]=["Hamza", 20, "semester 1"];
student[1]=["Taha", 25, "semester 1"];
student[2]=["Usama", 21, "semester 1"];
document.write("<table border=1 cellspacing=0 cellpadding=5px >")
for(a=0;a<student.length;a++){
    document.write("<tr>");
    for(b=0;b<3;b++){
        document.write("<td>"+student[a][b]+"</td>");
    }
    document.write("<tr>");
}
document.write("</table>");
//Array Method

var names=["Urooj","Saba","Neelam","Mahnoor"];
document.write("<br>"+names);
delete names[2];
document.write("<br>"+names);
names[0]="Ariba";
document.write("<br>"+names);

document.write("<h1>Concat</h1>");
var first=names.concat("Urooj","Afifa");
document.write(first);

document.write("<h1>Join</h1>");
var x=names.join(" / ");
document.write(x);

document.write("<h1>Pop</h1>");
names.pop();
document.write(names);

document.write("<h1>Push</h1>");
names.push("Friends");
document.write(names);

document.write("<h1>Sorting(Ascending Order)</h1>");
names.sort();
document.write(names);

document.write("<h1>Reverse Order</h1>");
names.reverse();
document.write(names);
document.write("<h1>Number Pattern</h1>");
