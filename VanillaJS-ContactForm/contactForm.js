window.onload=function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // // Perform client-side form validation
    // if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    //   alert('Please fill in all the fields.');
    //   return;
    // }
  
    // Create an object to hold the form data
    const formData = {
      name,
      email,
      message
    };
  
    // Send the form data to the server using Fetch API
    fetch('http://127.0.0.1:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          alert('Form submitted successfully!');
          document.getElementById('contactForm').reset();
        } else {
          throw new Error('Form submission failed.');
        }
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred. Please try again later.');
      });
  }
  