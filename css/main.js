var maths=parseInt(prompt("Enter the mathematics mark"));
var phy=parseInt(prompt("Enter the physics mark"));
var chem=parseInt(prompt("Enter the chemistry mark"));


var a=maths+phy+chem
var b=maths+chem
if((maths>=65)&&(phy>=55)&&(chem>=50)){
     if((a>=190)||(b>=140)){
        document.write("The candidate in eligible for addmission")
     }
}
else{
    document.write("The candidate in not eligible for addmission")
}