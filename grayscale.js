function grayscale() {
  var x, i;
  x = document.querySelectorAll("img");
  for (i = 0; i < x.length; i++) {
    x[i].style.filter = "grayscale(100%)";
    x[i].style.filter = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")";
  }
}

function grayscaleById(id) {
  var x, i;
  x = document.querySelectorAll("#" + id);
  for (i = 0; i < x.length; i++) {
    x[i].style.filter = "grayscale(100%)";
    x[i].style.filter = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")";
  }
}

function grayscaleByClass(className) {
  var x, i;
  x = document.querySelectorAll("." + className);
  for (i = 0; i < x.length; i++) {
    x[i].style.filter = "grayscale(100%)";
    x[i].style.filter = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")";
  }
}

function grayscaleClear() {
  var x, i;
  x = document.querySelectorAll("img");
  for (i = 0; i < x.length; i++) {
    x[i].style.filter = "grayscale(0%)";
  }
}

function grayscaleClearById(id) {
  var x, i;
  x = document.querySelectorAll("#" + id);
  for (i = 0; i < x.length; i++) {
    x[i].style.filter = "grayscale(0%)";
  }
}

function grayscaleClearByClass(className) {
  var x, i;
  x = document.querySelectorAll("." + className);
  for (i = 0; i < x.length; i++) {
    x[i].style.filter = "grayscale(0%)";
  }
}

function grayscaleToggle() {
  var x, i, isGrayScaled = false;
  x = document.querySelectorAll("img");
  if(x[0].style.filter == "" || x[0].style.filter == "grayscale(0%)" ){
    isGrayScaled = false;
  }else{
    isGrayScaled = true;
  }
  if(isGrayScaled){

    for (i = 0; i < x.length; i++) {
      x[i].style.filter = "grayscale(0%)";
    }
  }else{
    for (i = 0; i < x.length; i++) {
      x[i].style.filter = "grayscale(100%)";
      x[i].style.filter = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")";
    }
  }
}

function grayscaleToggleById(id) {
  var x, i, isGrayScaled = false;
  x = document.querySelectorAll("#" + id);
  if(x[0].style.filter == "" || x[0].style.filter == "grayscale(0%)" ){
    isGrayScaled = false;
  }else{
    isGrayScaled = true;
  }
  if(isGrayScaled){
    for (i = 0; i < x.length; i++) {
      x[i].style.filter = "grayscale(0%)";
    }
  }else{
    for (i = 0; i < x.length; i++) {
      x[i].style.filter = "grayscale(100%)";
      x[i].style.filter = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")";
    }
  }
}

function grayscaleToggleByClass(className) {
  var x, i, isGrayScaled = false;
  x = document.querySelectorAll("." + className);
  if(x[0].style.filter == "" || x[0].style.filter == "grayscale(0%)" ){
    isGrayScaled = false;
  }else{
    isGrayScaled = true;
  }
  if(isGrayScaled){
    for (i = 0; i < x.length; i++) {
      x[i].style.filter = "grayscale(0%)";
    }
  }else{
    for (i = 0; i < x.length; i++) {
      x[i].style.filter = "grayscale(100%)";
      x[i].style.filter = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")";
    }
  }
}
