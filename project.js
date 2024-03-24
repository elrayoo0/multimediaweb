document.getElementById("homeLink").addEventListener("click", scrollToSection);
document.getElementById("formLink").addEventListener("click", scrollToSection);
document.getElementById("statusLink").addEventListener("click", scrollToSection);
document.getElementById("contactLink").addEventListener("click", scrollToSection);

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1); 
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
        behavior:"smooth",
        duration: 1000
    });
}
function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;

    // Reset error messages
    document.getElementById("fullNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("dobError").innerText = "";

    // Perform validation
    let isValid = true;

    if (!fullName) {
        document.getElementById("fullNameError").innerText = "Full Name is required";
        isValid = false;
    }

    if (!email) {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    if (!phone) {
        document.getElementById("phoneError").innerText = "Phone Number is required";
        isValid = false;
    } else if (!isValidPhone(phone)) {
        document.getElementById("phoneError").innerText = "Invalid phone number format";
        isValid = false;
    }

    if (!dob) {
        document.getElementById("dobError").innerText = "Date of Birth is required";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Basic phone number validation (numeric characters only)
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
}

// DOM manipulation for a better user experience
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("signupForm");

submitButton.addEventListener("click", function () {
    // Display a confirmation message after form submission
    alert("Thank you for joining the Football Academy!");
    alert(`Form submitted!\nName: ${data.name}\nEmail: ${data.email}`);

});

form.addEventListener("mouseover", function () {
    // Change form background color on mouseover
    form.style.backgroundColor = "#f0f0f0";
});

form.addEventListener("mouseout", function () {
    // Revert form background color on mouseout
    form.style.backgroundColor = "#fff";
});
function submitForm() {
    const form = document.getElementById('submission-form');
    
    // Display a message indicating that the form has been submitted
    alert("Form submitted!");
}