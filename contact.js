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


// Close navigation after selecting a page

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ==========================================
// ORDER CALCULATOR
// ==========================================

const foodChoice =
    document.getElementById("foodChoice");

const quantity =
    document.getElementById("quantity");

const totalPrice =
    document.getElementById("totalPrice");

const summaryText =
    document.getElementById("summaryText");


function updateTotal() {

    const selectedOption =
        foodChoice.options[
            foodChoice.selectedIndex
        ];


    const price =
        Number(
            selectedOption.dataset.price || 0
        );


    const item =
        selectedOption.value;


    const qty =
        Number(quantity.value) || 1;


    const total =
        price * qty;


    if (!item) {

        totalPrice.textContent = "₦0";

        summaryText.textContent =
            "Select an item to calculate your total.";

        return;

    }


    if (item === "Event Catering") {

        totalPrice.textContent =
            "Custom";

        summaryText.textContent =
            "Our catering team will contact you for a quote.";

        return;

    }


    totalPrice.textContent =
        `₦${total.toLocaleString()}`;


    summaryText.textContent =
        `${qty} × ${item}`;

}


// Update whenever food changes

foodChoice.addEventListener(
    "change",
    updateTotal
);


// Update whenever quantity changes

quantity.addEventListener(
    "input",
    updateTotal
);


// ==========================================
// FORM SUBMISSION
// ==========================================

const orderForm =
    document.getElementById("orderForm");


orderForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "customerName"
            ).value.trim();


        const phone =
            document.getElementById(
                "customerPhone"
            ).value.trim();


        const item =
            foodChoice.value;


        const qty =
            quantity.value;


        if (!name || !phone || !item) {

            alert(
                "Please complete all required fields."
            );

            return;

        }


        alert(
            `Thank you, ${name}!\n\n` +
            `Your order request has been received.\n\n` +
            `Item: ${item}\n` +
            `Quantity: ${qty}\n\n` +
            `We will contact you on ${phone} to confirm your order.`
        );


        orderForm.reset();


        totalPrice.textContent =
            "₦0";


        summaryText.textContent =
            "Select an item to calculate your total.";

    }
);