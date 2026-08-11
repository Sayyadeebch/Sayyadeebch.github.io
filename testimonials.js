// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// ==========================================
// TESTIMONIAL SLIDER
// ==========================================

const reviews =
    document.querySelectorAll(".review-card");

const dotsContainer =
    document.getElementById("reviewDots");

const previousButton =
    document.getElementById("prevReview");

const nextButton =
    document.getElementById("nextReview");


let currentReview = 0;


// ==========================================
// CREATE DOTS
// ==========================================

reviews.forEach((review, index) => {

    const dot =
        document.createElement("button");

    dot.classList.add("review-dot");

    dot.setAttribute(
        "aria-label",
        `Show review ${index + 1}`
    );

    dot.addEventListener("click", () => {

        showReview(index);

    });

    dotsContainer.appendChild(dot);

});


// ==========================================
// SHOW REVIEW
// ==========================================

function showReview(index) {

    reviews.forEach(review => {

        review.classList.remove("active");

    });


    const dots =
        document.querySelectorAll(".review-dot");

    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    reviews[index].classList.add("active");

    dots[index].classList.add("active");


    currentReview = index;

}


// ==========================================
// NEXT
// ==========================================

nextButton.addEventListener("click", () => {

    currentReview++;

    if (currentReview >= reviews.length) {

        currentReview = 0;

    }

    showReview(currentReview);

});


// ==========================================
// PREVIOUS
// ==========================================

previousButton.addEventListener("click", () => {

    currentReview--;

    if (currentReview < 0) {

        currentReview = reviews.length - 1;

    }

    showReview(currentReview);

});


// ==========================================
// AUTO SLIDE
// ==========================================

let autoSlide =
    setInterval(() => {

        currentReview++;

        if (currentReview >= reviews.length) {

            currentReview = 0;

        }

        showReview(currentReview);

    }, 6000);


// Pause when user interacts

document
    .querySelector(".reviews-slider")
    .addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });


document
    .querySelector(".reviews-slider")
    .addEventListener("mouseleave", () => {

        autoSlide = setInterval(() => {

            currentReview++;

            if (currentReview >= reviews.length) {

                currentReview = 0;

            }

            showReview(currentReview);

        }, 6000);

    });


// ==========================================
// INITIAL STATE
// ==========================================

showReview(0);


// ==========================================
// CLOSE MOBILE NAV
// ==========================================

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});