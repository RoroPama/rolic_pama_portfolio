document.addEventListener("DOMContentLoaded", function () {
  // Navigation
  const header = document.querySelector("header");
  const navLinks = document.querySelector(".nav-links");
  const menuBtn = document.querySelector(".menu-btn");
  const navLinksA = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinksA.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Reveal animations
  const revealElements = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-up"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  // Projects filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.target.dataset.filter;

      filterBtns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");

      projectCards.forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Testimonials slider
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  const testimonialControls = document.querySelectorAll(".testimonial-control");
  const testimonialDots = document.querySelectorAll(".testimonial-dot");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonialItems.forEach((item) => item.classList.remove("active"));
    testimonialDots.forEach((dot) => dot.classList.remove("active"));

    testimonialItems[index].classList.add("active");
    testimonialDots[index].classList.add("active");
  }

  testimonialControls.forEach((control) => {
    control.addEventListener("click", (e) => {
      if (e.target.classList.contains("prev")) {
        currentTestimonial =
          (currentTestimonial - 1 + testimonialItems.length) %
          testimonialItems.length;
      } else {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
      }
      showTestimonial(currentTestimonial);
    });
  });

  testimonialDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      currentTestimonial = parseInt(e.target.dataset.index);
      showTestimonial(currentTestimonial);
    });
  });

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
});
