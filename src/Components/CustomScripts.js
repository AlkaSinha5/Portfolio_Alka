import { useEffect } from "react";
import $ from "jquery"; // Import jQuery
import Isotope from "isotope-layout"; // Import Isotope
import "owl.carousel/dist/assets/owl.carousel.css"; // Import Owl Carousel CSS
import "owl.carousel"; // Import Owl Carousel JS

const CustomScripts = () => {
  useEffect(() => {
    // Navbar on scroll
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".navbar").fadeIn("slow").css("display", "flex");
      } else {
        $(".navbar").fadeOut("slow").css("display", "none");
      }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        $("html, body").animate(
          { scrollTop: $(this.hash).offset().top - 45 },
          1500,
          "easeInOutExpo"
        );

        $(".navbar-nav .active").removeClass("active");
        $(this).addClass("active");
      }
    });

    // ✅ Initialize Isotope only when elements are loaded
    let portfolioIsotope;
    setTimeout(() => {
      portfolioIsotope = new Isotope(".portfolio-container", {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });
    }, 500);

    // Portfolio filter click event
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("active");
      $(this).addClass("active");
      portfolioIsotope.arrange({ filter: $(this).data("filter") });
    });

    // Testimonials carousel
   

    return () => {
      $(window).off("scroll");
      $(".navbar-nav a").off("click");
    };
  }, []);

  return null;
};

export default CustomScripts;
