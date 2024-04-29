// JavaScript code for form interaction

// Sliding effect between login and signup forms
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
   loginForm.style.marginLeft = "-50%";
   loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
   loginForm.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
   signupBtn.click();
   return false;
};



    // Function to check if the input value is empty
    function isEmpty(value) {
        return !value.trim();
    }

    // Function to validate email
    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to match passwords
    function matchPassword() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        return password === confirmPassword;
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Select the form
        const form = event.target;

        // Select the form inputs
        const fullname = form.querySelector('#fullname').value;
        const username = form.querySelector('#username').value;
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;

        // Check if any field is empty
        if (isEmpty(fullname) || isEmpty(username) || isEmpty(email) || isEmpty(password)) {
            console.error('Please fill in all fields');
            return;
        }

        // Check email validity
        if (!isValidEmail(email)) {
            console.error('Please enter a valid email address');
            return;
        }

        // Check if passwords match
        if (!matchPassword()) {
            console.error('Passwords do not match');
            return;
        }

        // If all validations pass, log the data
        console.log('Fullname:', fullname);
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // You can submit the form to the server here if needed
        // form.submit();
    }

    // Add event listener to each form for form submission
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleSubmit);
    });
