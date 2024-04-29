const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

// Function to create user
const createUser = async (userDetails) => {
   try {
       const response = await fetch('http://localhost:3001/api/users', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(userDetails)
       });
       const data = await response.json();
       console.log('UserData', data)
       return data;
   } catch (error) {
       console.error('Error creating user:', error);
       return null;
   }
};

// Function to validate email
function isValidEmail(email) {
   // Basic email validation regex
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

// Function to match passwords

// Function to handle form submission
function handleSubmit(event) {
   event.preventDefault(); // Prevent default form submission

   // Select the form
   const form = event.target;

   // Select the form inputs
   const fullname = form.querySelector('#fullname')?.value;
   const username = form.querySelector('#username')?.value;
   const email = form.querySelector('#email')?.value;
   const password = form.querySelector('#password')?.value;

   // Check email validity
   if (!isValidEmail(email)) {
      // If email is not valid, log an error message
      alert('Please enter a valid email address');
      console.error('Please enter a valid email address');
      return;
   }

   // Create an object with the information
   const userInfo = {
      name: fullname,
      username: username,
      email: email,
      password: password
   };

   // Convert the object to JSON string
   // const jsonUserInfo = JSON.stringify(userInfo, null, 2); // The null and 2 are for pretty formatting

   // Display the JSON string
   // console.log(jsonUserInfo);

   // Call the createUser function
   const user = createUser(userInfo);
   console.log('User', user);

   // You can submit the form to the server here if needed
   // form.submit();
}

// Add event listener to each form for form submission
document.querySelectorAll('form').forEach(form => {
   form.addEventListener('submit', handleSubmit);
});

