// scroll from another page

if (window.location.hash) {
  var hash = window.location.hash;
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    800,
    function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    }
  );
} // End if

function enableSmoothScroll() {
  // Smooth scroll
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
}
function enableAos() {
  // Animate on Scroll
  $(document).ready(function () {
    AOS.init();
  });
}
function enableSwiperSlide() {
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
    },
  });
}
// Light gallery

function enableLightGallery() {
  $(document).ready(function () {
    lightGallery(document.querySelector("#galChildren"), {
      thumbnail: true,
      animateThumb: false,
      showThumbByDefault: false,
      mode: "lg-fade",
      loop: true,
    });
    lightGallery(document.querySelector("#galTeacher"), {
      thumbnail: true,
      animateThumb: false,
      showThumbByDefault: false,
      mode: "lg-fade",
      loop: true,
    });
    lightGallery(document.querySelector("#galOnam"), {
      thumbnail: true,
      animateThumb: false,
      showThumbByDefault: false,
      mode: "lg-fade",
      loop: true,
    });
    lightGallery(document.querySelector("#galAnniversary"), {
      thumbnail: true,
      animateThumb: false,
      showThumbByDefault: false,
      mode: "lg-fade",
      loop: true,
    });
    lightGallery(document.querySelector("#galIndependence"), {
      thumbnail: true,
      animateThumb: false,
      showThumbByDefault: false,
      mode: "lg-fade",
      loop: true,
    });
    lightGallery(document.querySelector("#galSchool"), {
      thumbnail: true,
      animateThumb: false,
      showThumbByDefault: false,
      mode: "lg-fade",
      loop: true,
    });
  });
}
// Navbar toggle
let navUl = document.querySelector("#navUl");
let hamburgerIcon = document.querySelector("#hamburgerIcon");
let nav = document.querySelector("nav");
hamburgerIcon.addEventListener("click", hamburgerToggle);
function hamburgerToggle() {
  nav.classList.toggle("h-full");
  nav.classList.toggle("hidden");
  navUl.classList.toggle("bg-gray-800");
  navUl.classList.toggle("bg-opacity-100");
  navUl.classList.toggle("h-screen");
  navUl.classList.toggle("-right-10");
  navUl.classList.toggle("right-0");

  hamburgerIcon.classList.toggle("mNav-open");
  hamburgerIcon.children[0].classList.toggle("rotate-45");
  hamburgerIcon.children[0].classList.toggle("border-white");
  hamburgerIcon.children[1].classList.toggle("hidden");
  hamburgerIcon.children[2].classList.toggle("w-6");
  hamburgerIcon.children[2].classList.toggle("-rotate-45");
  hamburgerIcon.children[2].classList.toggle("border-white");
}
document.addEventListener("scroll", () => {
  if (document.documentElement.getBoundingClientRect().top < -50) {
    navUl.classList.add("md:shadow-xl", "bg-gray-100");
    navUl.classList.remove("md:top-20");
  } else {
    navUl.classList.remove("md:shadow-xl", "bg-gray-100");
    navUl.classList.add("md:top-20");
  }
});

navUl.childNodes.forEach((child) => {
  child.addEventListener("click", () => {
    if (hamburgerIcon.classList.contains("mNav-open")) {
      hamburgerToggle();
    }
  });
});

// form submit
// mail
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

// setup popup gallery
document.querySelectorAll(".popupClick").forEach((popup) => {
  popup.addEventListener("click", () => {
    let popupChild = popup.lastElementChild;
    popupChild.classList.toggle("hidden");
  });
});
document.querySelectorAll(".popupInner").forEach((popupInner) => {
  popupInner.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
});
document.querySelectorAll(".popupClose").forEach((popupClose) => {
  popupClose.addEventListener("click", () => {
    popupClose.parentElement.parentElement.parentElement.classList.toggle(
      "hidden"
    );
  });
});
