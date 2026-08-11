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


document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });


// ==========================================
// ORDER ELEMENTS
// ==========================================

const itemInputs =
    document.querySelectorAll(
        'input[name="item"]'
    );

const orderTypeInputs =
    document.querySelectorAll(
        'input[name="orderType"]'
    );

const summaryItems =
    document.getElementById("summaryItems");

const summaryTotal =
    document.getElementById("summaryTotal");

const summaryType =
    document.getElementById("summaryType");


// ==========================================
// UPDATE ORDER SUMMARY
// ==========================================

function updateSummary() {

    let total = 0;

    let selectedItems = [];


    itemInputs.forEach(input => {

        if (input.checked) {

            const name =
                input.value;

            const price =
                Number(input.dataset.price);

            total += price;

            selectedItems.push({
                name: name,
                price: price
            });

        }

    });


    // Clear current summary

    summaryItems.innerHTML = "";


    // No items

    if (selectedItems.length === 0) {

        summaryItems.innerHTML = `

            <div class="empty-summary">

                <div>
                    🛒
                </div>

                <p>
                    Your selected items
                    will appear here.
                </p>

            </div>

        `;

    }


    // Display selected items

    selectedItems.forEach(item => {

        const itemElement =
            document.createElement("div");

        itemElement.classList.add(
            "summary-item"
        );


        itemElement.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <span>
                    Selected
                </span>

            </div>

            <strong>
                ₦${item.price.toLocaleString()}
            </strong>

        `;


        summaryItems.appendChild(
            itemElement
        );

    });


    // Update total

    summaryTotal.textContent =
        `₦${total.toLocaleString()}`;


    // Update order type

    orderTypeInputs.forEach(input => {

        if (input.checked) {

            summaryType.textContent =
                input.value;

        }

    });

}


// ==========================================
// ITEM EVENTS
// ==========================================

itemInputs.forEach(input => {

    input.addEventListener(
        "change",
        updateSummary
    );

});


// ==========================================
// ORDER TYPE EVENTS
// ==========================================

orderTypeInputs.forEach(input => {

    input.addEventListener(
        "change",
        updateSummary
    );

});


// ==========================================
// FORM SUBMISSION
// ==========================================

const orderForm =
    document.getElementById("orderForm");

const successModal =
    document.getElementById("successModal");


orderForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const selectedItems =
            document.querySelectorAll(
                'input[name="item"]:checked'
            );


        // Require at least one item

        if (selectedItems.length === 0) {

            alert(
                "Please select at least one item before submitting your order."
            );

            return;

        }


        successModal.classList.add("show");

    }
);


// ==========================================
// CLOSE MODAL
// ==========================================

const closeModal =
    document.getElementById("closeModal");

const modalOkay =
    document.getElementById("modalOkay");


function closeSuccessModal() {

    successModal.classList.remove("show");

}


closeModal.addEventListener(
    "click",
    closeSuccessModal
);


modalOkay.addEventListener(
    "click",
    closeSuccessModal
);


// Close when clicking outside

successModal.addEventListener(
    "click",
    event => {

        if (
            event.target === successModal
        ) {

            closeSuccessModal();

        }

    }
);


// ==========================================
// INITIAL SUMMARY
// ==========================================

updateSummary();