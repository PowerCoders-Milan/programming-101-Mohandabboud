//Insert level 9 code below
moveForward();

while (notDone()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnLeft();
  }
}