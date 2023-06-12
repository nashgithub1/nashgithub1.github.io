document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Content
    const readMoreButton = document.querySelector(".btn");
    const infoContent = document.querySelector(".info-content");

    readMoreButton.addEventListener("click", function(e) {
        e.preventDefault();
        infoContent.classList.toggle("show-more");
        if (infoContent.classList.contains("show-more")) {
            readMoreButton.textContent = "Read less";
        } else {
            readMoreButton.textContent = "Read more";
        }
    });

    // Image Slider
    const sliderImages = document.querySelectorAll(".slider-img");
    let currentImageIndex = 0;

    function showNextImage() {
        sliderImages[currentImageIndex].classList.remove("show");
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
        sliderImages[currentImageIndex].classList.add("show");
    }

    setInterval(showNextImage, 3000);

    // Form Validation
    const contactForm = document.querySelector("#contact-form");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Form submission logic here
            console.log("Form submitted successfully");
            contactForm.reset();
        }
    });

    function validateForm() {
        // Perform form validation logic here
        return true; // Return true if form is valid, false otherwise
    }

    // Smooth Scrolling
    const navbarLinks = document.querySelectorAll("#navbar ul li a");

    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Event Handling
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            this.classList.add("hover");
        });

        item.addEventListener("mouseleave", function() {
            this.classList.remove("hover");
        });
    });

    // Custom Animations
    const sections = document.querySelectorAll("section");

    function animateSections() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add("animate");
            } else {
                section.classList.remove("animate");
            }
        });
    }

    animateSections();

    window.addEventListener("scroll", animateSections);

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
