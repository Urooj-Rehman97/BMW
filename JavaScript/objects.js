//Objects (method 1)
var info={
    Name:"Urooj Rehman",
    Depart:"Academics",
    Destination:"Faculty Member",
    Courses:["Office Automation","BMW","Bootstrap and JavaScript","SEO"]
}

document.write(info.Name+"<br>"+info.Depart+"<br>"+info.Destination+"<br>"+info.Courses[1]+"<br><br>");
var cars=new Object();
cars.number=12357;
cars.color="black";
cars.model="Latest";
cars.brand="abc";
document.write(cars.model+"<br>"+cars.brand+"<br>"+cars.color+"<br>"+cars.number+"<br><br>");
document.write("<br><br>");
//for in loop (objects)
for(var a in info){
    document.write(a+": "+info[a]+"<br>");
}