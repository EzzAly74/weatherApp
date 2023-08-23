var myImage = document.getElementById("myImage");

function myEffect() {
  var engine = new RainyDay({
    image: myImage,
  });
  engine.rain([[1, 2, 8000]]);
  engine.rain(
    [
      [3, 3, 0.88],
      [5, 5, 0.9],
      [6, 2, 1],
    ],
    10
  );
}
myEffect();
