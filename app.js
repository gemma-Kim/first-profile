//index
var index = document.querySelectorAll("#index");

//open the index
function funcopen(element) {
  if (element > 0) {
    for (var i = 0; i < element; i++) {
      index[i].style.height = "5vh";
    }
    for (var i = index.length - 1; i > element; i--) {
      index[i].style.height = "5vh";
    }
    index[element].style.height = "75vh";
  } else {
    for (var i = index.length - 1; i > element; i--) {
      index[i].style.height = "5vh";
    }
    index[element].style.height = "75vh";
  }
}

//close the index
function funcclose(element) {
  for (var i = 0; i < index.length; i++) {
    index[i].style.height = "16.7vh";
  }
}

//click me button
var clickBtn = document.querySelectorAll(".click");
var content = document.querySelector(".innerPage3 .content");
var p = document.querySelectorAll(".content p");
var closeBtn = document.querySelector(".close");

function funcclick(x) {
  content.style.display = "flex";
  p[x].style.display = "block";
  closeBtn.addEventListener("click", function () {
    content.style.display = "none";
    p[x].style.display = "none";
  });
}

//image carausel

var counter = 1;

var imageCarausel = setInterval(autoSet, 2000);
var image = document.querySelectorAll(".image-container img");

function autoSet() {
  if (counter < 10) {
    for (var i = 0; i < image.length; i++) {
      image[i].style.right = String(counter * 100) + "%";
      image[i].style.transition = "all 0.8s ease-in-out";
    }
    counter++;
  } else {
    for (var i = 0; i < image.length; i++) {
      image[i].style.transition = "none 1s";
      image[i].style.right = "0%";
    }
    counter = 1;
  }
}

//carausel buttons
var prevBtn = document.querySelector(".prevBtn");
var nextBtn = document.querySelector(".nextBtn");

//previous button
prevBtn.addEventListener("click", function () {
  if (counter > 1) {
    counter--;
    for (var i = 0; i < image.length; i++) {
      image[i].style.right = String((counter - 1) * 100) + "%";
      image[i].style.transition = "all 0.8s ease-in-out";
    }
  } else {
    for (var i = 0; i < image.length; i++) {
      image[i].style.right = "900%";
      image[i].style.transition = "none 1s";
    }
    counter = 10;
  }
});

//next button
nextBtn.addEventListener("click", function () {
  if (counter < 10) {
    for (var i = 0; i < image.length; i++) {
      image[i].style.right = String(counter * 100) + "%";
      image[i].style.transition = "all 0.8s ease-in-out";
    }
    counter++;
  } else {
    for (var i = 0; i < image.length; i++) {
      image[i].style.transition = "none 1s";
      image[i].style.right = "0%";
    }
    counter = 1;
  }
});

//stop and start again button

var stop = document.querySelector(".stopBtn");
var turnOn = true;

stop.addEventListener("click", function () {
  if (turnOn) {
    clearInterval(imageCarausel);
    stop.innerHTML = "START";
    turnOn = !turnOn;
    stop.style.background = "beige";
    stop.style.border = "2px solid #1565c0";
  } else {
    setInterval(autoSet, 2000);
    stop.innerHTML = "STOP";
    turnOn = !turnOn;
    stop.style.background = "#1565c0";
    stop.style.border = "none";
  }
});

//open index
var header = document.querySelector(".header");
var menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  header.classList.toggle("unvisible");
});
