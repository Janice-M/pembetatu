function triangleTracker(first, second, third) {

  var first = document.getElementById('firstSide').value;
  var second = document.getElementById('secondSide').value;
  var third = document.getElementById('thirdSide').value;

  if (first === second && second === third) {
    if (first == "" || first.length == 0 || first == null && second == "" || second.length == 0 || second == null && third == "" || third.length == 0 || third == null) {
      alert("Not a triangle buddy!");
    } else {
      alert("This is an equilateral triangle");
    }
  } else if (first === second || second === third || first === third) {
    if (first == "" || first.length == 0 || first == 0 || first == null || second == 0 || second == "" || second.length == 0 || second == null || third == 0 || third == "" || third.length == 0 || third == null) {
      alert("Not a triangle buddy!");
    } else {
      alert("This is an isosceles triangle");
    }
  } else {
    alert("This is a scalene triangle");
  }

}
