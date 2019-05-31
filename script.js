function triangleTracker() {


var first= document.getElementById('firstSide').value;
var second= document.getElementById('secondSide').value;
var third= document.getElementById('thirdSide').value;

if(first === second && second ===third){
alert("This is an equilateral triangle");
}
else if (first === second || second === third || first  === third) {

  alert("This is an isosceles triangle");

}
else if (first == 0 || second == 0 || third == 0) {
  alert("Not a triangle buddy!");

}
else {
  alert ("This is a scalene triangle");
}

}
