$(document).ready(() => {
  $(".faq_card_title").click(function () {
    $(this)
        .find("svg")
        .toggleClass("transform180X")
        .parent()
        .parent()
        .siblings()
        .find(".faq_card_title svg")
        .removeClass("transform180X");

    $(this)
        .parent()
        .children(".faq_card_content")
        .slideToggle();

    $(this)
        .parent()
        .siblings()
        .children(".faq_card_content")
        .slideUp();
  });
});

$(document).ready(function () {
  $(".nav-links li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - $("header").outerHeight() + 45,
        },
        800,
        function () {
          window.location.hash = hash
        }
      );
    }
  });
});
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


let calcInputs = document.querySelector(".modal-body input")
let annualProfit = document.querySelector(".annualProfit")
let input_with_icon = document.querySelectorAll(".input_with_icon span")
calcInputs.oninput = () => {
    for (let i = 0; i < input_with_icon.length; i++) {
        if (calcInputs.value <= 1000) {
            annualProfit.innerHTML = "30 %";
            input_with_icon[0].innerHTML =
            ((calcInputs.value * 30) / 100 / 365).toFixed(2) + " $";
            input_with_icon[1].innerHTML = calcInputs.value * 1.3 + " $";
        }
        else if (calcInputs.value <= 30000 && calcInputs.value > 1000){
            annualProfit.innerHTML = "40 %";
            input_with_icon[0].innerHTML = ((calcInputs.value * 40) / 100 / 365).toFixed(2) + " $";
            input_with_icon[1].innerHTML = calcInputs.value * 1.4 + " $"; 
        }
        else{
            annualProfit.innerHTML = "50 %";
            input_with_icon[0].innerHTML = ((calcInputs.value * 50) / 100 / 365).toFixed(2) + " $";
            input_with_icon[1].innerHTML = calcInputs.value * 1.5 + " $";
        }
}
 }
 
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const close = document.querySelectorAll(".nav-links a");

  close.forEach((item) => {
    item.addEventListener("click", () => {
      // Toggle nav
      nav.classList.toggle("nav-active");

      // Animate Links

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
    });
  });

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
