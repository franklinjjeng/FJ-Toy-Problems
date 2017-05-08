/*

A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent 
dating profiles as rectangles on a two-dimensional plane.
They need help writing an algorithm to find the intersection of two users' love rectangles.
They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an 
immediate acquisition by Google or Facebook or Obama or something.

Two rectangles overlapping a little. It must be love.
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal."
More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this:

  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

Your output rectangle should use this format as well.

*/

var rectangularLove = function (obj1, obj2) {
  var result = {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  var obj1rightX = obj1.leftX + obj1.width;
  var obj2rightX = obj2.leftX + obj2.width;
  var obj1topY = obj1.bottomY + obj1.height;
  var obj2topY = obj2.bottomY + obj2.height;


  if (obj1.leftX >= obj2.leftX && obj1.leftX <= obj2rightX) result.leftX = obj1.leftX;
  else if (obj2.leftX >= obj1.leftX && obj2.leftX <= obj1rightX) result.leftX = obj2.leftX;
  else return result;

  if (obj1.bottomY >= obj2.bottomY && obj1.bottomY <= obj2topY) result.bottomY = obj1.bottomY;
  else if (obj2.bottomY >= obj1.bottomY && obj2.bottomY <= obj1topY) result.bottomY = obj2.bottomY;
  else return result;

  result.width = Math.min(obj1rightX, obj2rightX) - result.leftX;
  result.height = Math.min(obj1topY, obj2topY) - result.bottomY;
   
  return result;
}

var rect1 = {
  leftX: 1,
  bottomY: 5,
  width: 10,
  height: 4,
}

var rect2 = {
  leftX: 6,
  bottomY: 4,
  width: 5,
  height: 8,
}

var rect3 = {
  leftX: 12,
  bottomY: 20,
  width: 5,
  height: 8,
}

var rect4 = {
  leftX: 2,
  bottomY: 6,
  width: 3,
  height: 2,
}

var rect5 = {
  leftX: 5,
  bottomY: 6,
  width: 3,
  height: 2,
}

var expectedResult = {
  leftX: 6,
  bottomY: 5,
  width: 5,
  height: 4,
}

console.log(rectangularLove(rect1, rect2)); // 6, 5, 5, 4
console.log(rectangularLove(rect2, rect2)); // 6, 4, 5, 8
console.log(rectangularLove(rect2, rect3)); // no overlap
console.log(rectangularLove(rect1, rect4)); // 2, 6, 3, 2
console.log(rectangularLove(rect4, rect5)); // 5, 6, 0, 2
