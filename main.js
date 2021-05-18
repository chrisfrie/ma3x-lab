var nav = document.querySelector("nav");

var expandMobileNavigation = function() {
  nav.classList.add("mobile-navigation-expanded");
};

var collapseMobileNavigation = function() {
  nav.classList.remove("mobile-navigation-expanded");
};

var removeShowClassMenu = function() {
  console.log("body click");
  var all = document.querySelectorAll(".show");
  all.forEach((element)=>{
    element.classList.remove("show");
  })
} 

var toggleMenu = function(event) {
  console.log(event);
  console.log("service click");
  var subMenu = document.querySelector(`#${event.target.id} + .sub-menu`);
  subMenu.classList.toggle("show");
  event.stopPropagation();
}

var expandButton = document.querySelector("#expand-mobile-navigation");
expandButton.addEventListener("click", expandMobileNavigation);

var collapseButton = document.querySelector("#collapse-mobile-navigation");
collapseButton.addEventListener("click", collapseMobileNavigation);

var serviceMenu = document.querySelector("#services");
serviceMenu.addEventListener("click", toggleMenu);

var body = document.querySelector("body");
body.addEventListener("click", removeShowClassMenu)



// typewriter the h1 -- first possibility
var i = 0;
var txt = 'thinking is our DNA'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var e = 0;
var txt2 = 'textile solutions our Target'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter2() {
  if (e < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(e);
    e++;
    setTimeout(typeWriter2, speed);
  }
}

typeWriter();
typeWriter2();

// Second possibility -- typewriter h1

// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite { color: #fff }";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };