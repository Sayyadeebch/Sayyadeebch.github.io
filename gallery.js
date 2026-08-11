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
// GALLERY FILTER
// ==========================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        // Update active button

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // Filter images

        galleryItems.forEach(item => {

            const category =
                item.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

                item.animate(
                    [
                        {
                            opacity: 0,
                            transform: "scale(0.95)"
                        },
                        {
                            opacity: 1,
                            transform: "scale(1)"
                        }
                    ],
                    {
                        duration: 350,
                        easing: "ease-out"
                    }
                );

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ==========================================
// LIGHTBOX
// ==========================================

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxClose =
    document.getElementById("lightboxClose");


const viewButtons =
    document.querySelectorAll(".view-btn");


// Open image

viewButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();


        const image =
            button.dataset.image;

        const title =
            button.dataset.title;


        lightboxImage.src = image;

        lightboxImage.alt = title;

        lightboxTitle.textContent = title;


        lightbox.classList.add("show");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow = "hidden";

    });

});


// Close lightbox

function closeLightbox() {

    lightbox.classList.remove("show");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


// Close when clicking background

lightbox.addEventListener(
    "click",
    event => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


// Close with Escape key

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


// ==========================================
// CLOSE MOBILE NAVIGATION
// ==========================================

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});