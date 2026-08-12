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
// SHOW / HIDE PASSWORD
// ==========================================

const passwordInput =
    document.getElementById("loginPassword");

const showPassword =
    document.getElementById("showPassword");


showPassword.addEventListener("click", () => {

    if (
        passwordInput.type === "password"
    ) {

        passwordInput.type = "text";

        showPassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        showPassword.textContent = "👁";

    }

});


// ==========================================
// LOGIN FORM
// ==========================================

const loginForm =
    document.getElementById("loginForm");

const loginModal =
    document.getElementById("loginModal");

const modalOkay =
    document.getElementById("modalOkay");


loginForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document.getElementById(
                "loginEmail"
            ).value.trim();

        const password =
            passwordInput.value;


        if (!email || !password) {

            alert(
                "Please enter your email and password."
            );

            return;

        }


        if (password.length < 8) {

            alert(
                "Password must contain at least 8 characters."
            );

            passwordInput.focus();

            return;

        }


        loginModal.classList.add("show");

    }
);


// ==========================================
// CLOSE MODAL
// ==========================================

modalOkay.addEventListener(
    "click",
    () => {

        loginModal.classList.remove("show");

    }
);


loginModal.addEventListener(
    "click",
    event => {

        if (
            event.target === loginModal
        ) {

            loginModal.classList.remove("show");

        }

    }
);