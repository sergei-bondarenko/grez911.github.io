var test = function () {
  var pagecontent = "<div id=\"drawbox\" height=500 width=500><svg id=\"drawsvg\"></svg></div>";
  $("body").append(pagecontent);
  s = Snap("#drawsvg");                     // создаём холст
  s.attr({viewBox: "0 0 500 500", width: "100%", height: "100%"});
  Snap.load("drawing.svg", function (f) {
    s.append(f);
  });
};
