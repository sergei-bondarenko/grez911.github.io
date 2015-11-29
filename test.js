var test = function () {
  var pagecontent = "<svg id=\"drawsvg\"></svg>";
  $("body").append(pagecontent);
  s = Snap("#drawsvg");                     // создаём холст
  s.attr({viewBox: "0 0 500 500", width: "100%", height: "100%"});
  Snap.load("drawing.svg", function (f) {
    s.append(f);
  });
};
