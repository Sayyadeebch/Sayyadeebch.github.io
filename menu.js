// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// ===============================
// MENU FILTER
// ===============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const foodCards =
    document.querySelectorAll(".food-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

        const category =
            button.dataset.category;


        foodCards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display = "block";

                card.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translateY(15px)"
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    ],
                    {
                        duration: 350,
                        easing: "ease-out"
                    }
                );

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ===============================
// ORDER BUTTON
// ===============================

const orderButtons =
    document.querySelectorAll(".order-btn");


orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const food =
            button.dataset.food;

        alert(
            `You selected: ${food}\n\n` +
            `Order functionality will be connected later.`
        );

    });

});