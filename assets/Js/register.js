
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
       localStorage.setItem('username', data.username);
       return data;
   } catch (error) {
       console.error('Error creating user:', error);
       return null;
   }
};

const loginUser = async (userDetails) => {
   try {
       const response = await fetch('http://localhost:3001/api/login', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(userDetails)
       });
       const data = await response.json();
       console.log('UserData', data)
       localStorage.setItem('username', data.username);
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
   if (email?.length > 0 && !isValidEmail(email)) {
      // If email is not valid, log an error message
      alert('Please enter a valid email address');
      console.error('Please enter a valid email address');
      return;
   }

   if (username && password && !email && !fullname) {
      const loginInfo = {
         username: username,
         password: password
      }

      loginUser(loginInfo)
   } else if (fullname && username && email && password) {
      const userInfo = {
         name: fullname,
         username: username,
         email: email,
         password: password
      }

      createUser(userInfo)

   }
   window.location = '../../index.html';


}

// Add event listener to each form for form submission
document.querySelectorAll('form').forEach(form => {
   form.addEventListener('submit', handleSubmit);
});

