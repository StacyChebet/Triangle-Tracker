function triangle() {
  var XY= parseInt(document.getElementById("XY").value);
  var XZ= parseInt(document.getElementById("XZ").value);
  var YZ= parseInt(document.getElementById("YZ").value);

    if (XY===XZ && XY===YZ) {
      document.write("Equilateral triangle");
    }else if (XY===YZ && XY!==XZ||XY===XZ && XY!==YZ||XZ===YZ && XZ!=XY) {
      document.write("Isosceles triangle");
  
}
