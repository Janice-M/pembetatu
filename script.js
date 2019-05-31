function triangleTracker(first,second,third) {


var first= document.getElementById('firstSide');
var second= document.getElementById('secondSide');
var third= document.getElementById('thirdSide');

if(first === second && second ===thirdSide){
alert("This is an equilateral triangle");
}
else if (first === second || second === third || first  === third) {

  alert("This is an isosceles triangle");

}
else if (first ===0 || second === 0 || third===0) {
  alert("Not a triangle buddy!");

}
else {
  alert ("This is a scalene triangle");
}

}
