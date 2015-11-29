var test = function () {
  var pagecontent = "<div id=\"drawbox\"><svg id=\"drawsvg\"></svg></div>";
  $("body").append(pagecontent);
  s = Snap("#drawsvg");                     // создаём холст
  s.attr({viewBox: "0 0 500 500", width: "100%", height: "100%"});
  Snap.load("drawing.svg", function (f) {
    s.append(f);
  });
  $(document).mousedown(function(e) {      // вызывается по клику мышью
    if (e.button == 0) {                   // клик левой клавишей мыши?
       s.selectAll("path").animate({"opacity": "0"}, 500);
       tiker("Льюис Кэрролл. Аня в стране чудес.txt", s);
    }
  });
};

var tiker = function (file, s) {                // генерирует бегущую строку для потокового шифра из файла 
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {  // получили файл
        allText = rawFile.responseText;                    // содержимое файла
        allText = allText.replace(/(?:\r\n|\r|\n)/g, " "); // заменяем все переносы строк на пробелы
        allText = allText.replace(/ +(?= )/g, "");         // убираем несколько пробелов подряд
        var text = "                         ";            // текст
        setInterval(function(){                            // дописывает один символ
          $("#tspan2988").text(text);                      // выводим на экран текст
          text = text.substring(1) + allText[0];           // сдвигаем влево строку с открытым текстом и дописываем один символ из allText
          allText = allText.substring(1);                  // обрезаем самый левый символ у allText
        }, 150);
      }
    }
  }
  rawFile.send(null);
}
