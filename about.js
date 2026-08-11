// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// ==========================================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// ==========================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            target / 50;


        const updateCounter = () => {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target;

            }

        };


        updateCounter();

    });

}


// ==========================================
// OBSERVE STATS SECTION
// ==========================================

const statsSection =
    document.querySelector(".stats-section");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounters();

                }

            });

        },

        {
            threshold: 0.4
        }

    );


observer.observe(statsSection);


// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".value-card, .service-item, .intro-content, .intro-image"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});