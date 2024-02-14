const PI = Math.PI;

function area (radius) {
  return PI * radius * radius;
}

function circumference (radius) {
  return 2 * PI * radius;
}

export default area;
export { circumference };
