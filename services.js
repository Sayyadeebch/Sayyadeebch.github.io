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
// SERVICE DATA
// ==========================================

const services = {

    meals: {

        number: "01",

        icon: "🍛",

        label: "EVERYDAY MEALS",

        title: "Delicious meals for your day.",

        description:
            "Enjoy freshly prepared meals made with care and quality ingredients. Whether you need breakfast, lunch or dinner, we aim to make every meal satisfying.",

        list: [
            "Freshly prepared meals",
            "Quality ingredients",
            "Convenient ordering"
        ]

    },


    snacks: {

        number: "02",

        icon: "🥐",

        label: "SNACKS & DRINKS",

        title: "Something delicious between meals.",

        description:
            "Enjoy tasty snacks and refreshing drinks whenever you need a quick bite or something to complement your meal.",

        list: [
            "Fresh snacks",
            "Refreshing drinks",
            "Great for quick bites"
        ]

    },


    events: {

        number: "03",

        icon: "🎉",

        label: "EVENT CATERING",

        title: "Food that makes occasions special.",

        description:
            "Planning a celebration, gathering or special occasion? Our catering service is designed to help make your event enjoyable and memorable.",

        list: [
            "Event food preparation",
            "Flexible catering options",
            "Professional service"
        ]

    },


    custom: {

        number: "04",

        icon: "✨",

        label: "CUSTOM SERVICE",

        title: "A service designed around you.",

        description:
            "Have a specific food or catering requirement? Tell us what you need and we can discuss an option that fits your occasion.",

        list: [
            "Flexible requests",
            "Personalized options",
            "Direct communication"
        ]

    }

};


// ==========================================
// SERVICE ELEMENTS
// ==========================================

const tabs =
    document.querySelectorAll(".service-tab");

const serviceIcon =
    document.getElementById("serviceIcon");

const serviceNumber =
    document.getElementById("serviceNumber");

const serviceLabel =
    document.getElementById("serviceLabel");

const serviceTitle =
    document.getElementById("serviceTitle");

const serviceDescription =
    document.getElementById("serviceDescription");

const serviceList =
    document.getElementById("serviceList");


// ==========================================
// CHANGE SERVICE
// ==========================================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const selectedService =
            tab.dataset.service;

        const data =
            services[selectedService];


        // Active button

        tabs.forEach(item => {

            item.classList.remove("active");

        });

        tab.classList.add("active");


        // Animate content out

        const display =
            document.querySelector(".service-display");

        display.animate(

            [
                {
                    opacity: 0.4,
                    transform: "translateY(10px)"
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


        // Update content

        serviceIcon.textContent =
            data.icon;

        serviceNumber.textContent =
            data.number;

        serviceLabel.textContent =
            data.label;

        serviceTitle.textContent =
            data.title;

        serviceDescription.textContent =
            data.description;


        serviceList.innerHTML = "";


        data.list.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            serviceList.appendChild(li);

        });

    });

});


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