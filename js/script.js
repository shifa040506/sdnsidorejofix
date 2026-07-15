/*=====================================================
 SD NEGERI SIDOREJO
 script.js
======================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       AOS
    ========================================== */

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out"
        });
    }

    /* ==========================================
       STICKY NAVBAR
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       COUNTER
    ========================================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText = "0";

        const update = () => {

            const target = +counter.getAttribute("data-target") || +counter.innerText;

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = `${Math.ceil(current + increment)}`;

                setTimeout(update, 20);

            } else {

                counter.innerText = target;

            }

        };

        if (counter.dataset.target) {

            update();

        }

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       MOBILE NAVBAR AUTO CLOSE
    ========================================== */

    const navItem = document.querySelectorAll(".nav-link");

    const navbarCollapse = document.querySelector(".navbar-collapse");

    navItem.forEach(item => {

        item.addEventListener("click", () => {

            if (navbarCollapse.classList.contains("show")) {

                bootstrap.Collapse.getInstance(navbarCollapse).hide();

            }

        });

    });

    /* ==========================================
       HERO TEXT ANIMATION
    ========================================== */

    const heroText = document.querySelector(".carousel-caption");

    if (heroText) {

        heroText.classList.add("fade-up");

    }

    /* ==========================================
       GALLERY LIGHTBOX
    ========================================== */

    const gallery = document.querySelectorAll(".gallery-img");

    gallery.forEach(img => {

        img.style.cursor = "pointer";

        img.addEventListener("click", function () {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.left = "0";
            overlay.style.top = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,.85)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "99999";

            const image = document.createElement("img");

            image.src = this.src;
            image.style.maxWidth = "90%";
            image.style.maxHeight = "90%";
            image.style.borderRadius = "12px";

            overlay.appendChild(image);

            document.body.appendChild(overlay);

            overlay.onclick = function () {

                overlay.remove();

            }

        });

    });

    /* ==========================================
       RIPPLE BUTTON
    ========================================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("mouseenter", function () {

            this.style.transition = ".3s";

            this.style.transform = "translateY(-4px)";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });

    /* ==========================================
       COPYRIGHT YEAR
    ========================================== */

    const year = document.getElementById("year");

    if (year) {

        year.innerHTML = new Date().getFullYear();

    }

    /* ==========================================
       PRELOADER
    ========================================== */

    const preloader = document.getElementById("preloader");

    if (preloader) {

        window.addEventListener("load", function () {

            preloader.style.opacity = "0";

            setTimeout(() => {

                preloader.style.display = "none";

            }, 500);

        });

    }

});