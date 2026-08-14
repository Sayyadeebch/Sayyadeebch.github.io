// ==========================================
// SUPABASE CONNECTION
// ==========================================

const supabaseUrl =
    "https://tkrdzdbpbolkhkebxfdh.supabase.co";

const supabaseKey =
    "sb_publishable_kKYC3IfgzWGZTgDzLATZ7A_2j30XaQw";

const supabase =
    window.supabase.createClient(
        supabaseUrl,
        supabaseKey
    );


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
// PASSWORD VISIBILITY
// ==========================================

const passwordButtons =
    document.querySelectorAll(".show-password");


passwordButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.target;

        const input =
            document.getElementById(targetId);


        if (input.type === "password") {

            input.type = "text";

            button.textContent = "🙈";

        } else {

            input.type = "password";

            button.textContent = "👁";

        }

    });

});


// ==========================================
// PASSWORD STRENGTH
// ==========================================

const password =
    document.getElementById("password");

const strengthBar =
    document.getElementById("strengthBar");

const strengthText =
    document.getElementById("strengthText");


password.addEventListener("input", () => {

    const value = password.value;

    let strength = 0;


    if (value.length >= 8) {
        strength++;
    }


    if (/[A-Z]/.test(value)) {
        strength++;
    }


    if (/[0-9]/.test(value)) {
        strength++;
    }


    if (/[^A-Za-z0-9]/.test(value)) {
        strength++;
    }


    if (value.length === 0) {

        strengthBar.style.width = "0%";

        strengthText.textContent =
            "Password strength";

    }

    else if (strength === 1) {

        strengthBar.style.width = "25%";

        strengthText.textContent =
            "Weak password";

    }

    else if (strength === 2) {

        strengthBar.style.width = "50%";

        strengthText.textContent =
            "Fair password";

    }

    else if (strength === 3) {

        strengthBar.style.width = "75%";

        strengthText.textContent =
            "Good password";

    }

    else {

        strengthBar.style.width = "100%";

        strengthText.textContent =
            "Strong password";

    }

});


// ==========================================
// FORM ELEMENTS
// ==========================================

const accountForm =
    document.getElementById("accountForm");

const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const confirmPassword =
    document.getElementById("confirmPassword");

const terms =
    document.getElementById("terms");

const successModal =
    document.getElementById("successModal");


// ==========================================
// CREATE ACCOUNT
// ==========================================

accountForm.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        // Get values

        const nameValue =
            fullName.value.trim();

        const emailValue =
            email.value.trim();

        const phoneValue =
            phone.value.trim();

        const passwordValue =
            password.value;

        const confirmPasswordValue =
            confirmPassword.value;


        // ==================================
        // BASIC VALIDATION
        // ==================================

        if (nameValue === "") {

            alert(
                "Please enter your full name."
            );

            fullName.focus();

            return;

        }


        if (emailValue === "") {

            alert(
                "Please enter your email address."
            );

            email.focus();

            return;

        }


        if (phoneValue === "") {

            alert(
                "Please enter your phone number."
            );

            phone.focus();

            return;

        }


        // ==================================
        // PASSWORD MATCH
        // ==================================

        if (
            passwordValue !==
            confirmPasswordValue
        ) {

            alert(
                "Passwords do not match."
            );

            confirmPassword.focus();

            return;

        }


        // ==================================
        // PASSWORD LENGTH
        // ==================================

        if (passwordValue.length < 8) {

            alert(
                "Password must contain at least 8 characters."
            );

            password.focus();

            return;

        }


        // ==================================
        // TERMS
        // ==================================

        if (!terms.checked) {

            alert(
                "Please agree to the terms and conditions."
            );

            return;

        }


        // ==================================
        // DISABLE BUTTON
        // ==================================

        const createButton =
            accountForm.querySelector(
                ".create-button"
            );

        createButton.disabled = true;

        createButton.innerHTML =
            "Creating Account...";


        // ==================================
        // SUPABASE SIGN UP
        // ==================================

        const {
            data,
            error
        } = await supabase.auth.signUp({

            email: emailValue,

            password: passwordValue,

            options: {

                data: {

                    full_name:
                        nameValue,

                    phone:
                        phoneValue

                }

            }

        });


        // ==================================
        // HANDLE ERROR
        // ==================================

        if (error) {

            console.error(
                "Supabase signup error:",
                error
            );

            alert(
                error.message
            );

            createButton.disabled = false;

            createButton.innerHTML =
                'Create Account <span>→</span>';

            return;

        }


        // ==================================
        // SUCCESS
        // ==================================

        console.log(
            "Account created:",
            data
        );


        createButton.disabled = false;

        createButton.innerHTML =
            'Create Account <span>→</span>';


        successModal.classList.add(
            "show"
        );


        // Clear form

        accountForm.reset();

        strengthBar.style.width =
            "0%";

        strengthText.textContent =
            "Password strength";

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

    successModal.classList.remove(
        "show"
    );

}


closeModal.addEventListener(
    "click",
    closeSuccessModal
);


modalOkay.addEventListener(
    "click",
    closeSuccessModal
);


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