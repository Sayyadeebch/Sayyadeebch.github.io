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
// FAQ ACCORDION
// ==========================================

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const answer =
        item.querySelector(".faq-answer");


    question.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("open");


        // Close all other questions

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("open");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        // Open selected question

        if (!isOpen) {

            item.classList.add("open");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


// ==========================================
// CATEGORY FILTER
// ==========================================

const categoryButtons =
    document.querySelectorAll(".category-btn");

const noResults =
    document.getElementById("noResults");


let currentCategory = "all";


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentCategory =
            button.dataset.category;


        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        filterFAQs();

    });

});


// ==========================================
// SEARCH
// ==========================================

const searchInput =
    document.getElementById("faqSearch");


searchInput.addEventListener(
    "input",
    filterFAQs
);


function filterFAQs() {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    let visibleCount = 0;


    faqItems.forEach(item => {

        const category =
            item.dataset.category;

        const question =
            item
                .querySelector(".faq-question span")
                .textContent
                .toLowerCase();

        const answer =
            item
                .querySelector(".faq-answer p")
                .textContent
                .toLowerCase();


        const matchesCategory =
            currentCategory === "all" ||
            category === currentCategory;


        const matchesSearch =
            searchTerm === "" ||
            question.includes(searchTerm) ||
            answer.includes(searchTerm);


        if (
            matchesCategory &&
            matchesSearch
        ) {

            item.style.display = "block";

            visibleCount++;

        } else {

            item.style.display = "none";

            item.classList.remove("open");

            item.querySelector(
                ".faq-answer"
            ).style.maxHeight = null;

        }

    });


    // Show / hide no results

    if (visibleCount === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }

}


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