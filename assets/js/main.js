/**
* Template Name: DevFolio
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  //mouse animation Spark 
  document.addEventListener('mousemove', (e) => {
    // Don't create sparks on navbar or header
    if (e.target.closest('#header') || e.target.closest('.navmenu')) {
      return;
    }

    // Throttle spark creation - only create every 50ms
    if (!window.lastSparkTime) {
      window.lastSparkTime = 0;
    }

    const now = Date.now();
    if (now - window.lastSparkTime < 50) {
      return;
    }
    window.lastSparkTime = now;

    const spark = document.createElement('div');
    spark.classList.add('spark');
    document.body.appendChild(spark);

    // position spark at mouse cursor
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    spark.style.position = 'fixed';
    spark.style.pointerEvents = 'none';
    spark.style.zIndex = '1';

    // random motion
    const moveX = (Math.random() - 0.5) * 60;
    const moveY = (Math.random() - 0.5) * 60;

    spark.animate(
      [
        { transform: `translate(0, 0) scale(1)`, opacity: 1 },
        { transform: `translate(${moveX}px, ${moveY}px) scale(0)`, opacity: 0 }
      ],
      {
        duration: 700 + Math.random() * 300,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    // remove spark after animation
    setTimeout(() => {
      spark.remove();
    }, 1000);
  }, { passive: true });

  // main page background animation

  /* ============================================================
     PART 1 — PARTICLE BACKGROUND SYSTEM
     Creates dots floating + mouse attraction effect
     ============================================================ */

  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");

  /* Resize canvas to full screen */
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let mouse = { x: null, y: null };

  /* Track Mouse Position + also move glowing blobs */
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    moveBlobs(e.clientX, e.clientY); // call blob motion
  });

  /* Create particles */
  let particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6
    });
  }

  /* Animate particles */
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

      ctx.beginPath();
      ctx.fillStyle = "rgba(71,127,187,0.6)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      /* --- Mouse attraction --- */
      if (mouse.x) {
        let distX = mouse.x - p.x;
        let distY = mouse.y - p.y;
        let dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < 150) {
          p.x += distX / 30;
          p.y += distY / 30;
        }
      }

    });

    requestAnimationFrame(animate);
  }
  animate();


  /* ============================================================
     PART 2 — BLOB GLOW MOVEMENT (Parallax Mouse Motion)
     Moves glowing blobs smoothly with mouse
     ============================================================ */

  function moveBlobs(x, y) {
    document.querySelector(".b1").style.transform =
      `translate(${x / 40}px, ${y / 40}px)`;

    document.querySelector(".b2").style.transform =
      `translate(${x / 30}px, ${y / 35}px)`;

    document.querySelector(".b3").style.transform =
      `translate(${x / 50}px, ${y / 45}px)`;
  }












  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const el = document.querySelector(".typed");

  let words = ["Flutter Development", "Android Development"];
  let index = 0;

  function showWord() {
    el.classList.remove("slideUp");
    void el.offsetWidth; // restart CSS animation

    el.textContent = words[index];
    el.classList.add("slideUp");

    index = (index + 1) % words.length;
  }

  showWord();

  // Word stays 3 seconds → change after 3 sec
  setInterval(showWord, 4000);


  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();





