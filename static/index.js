

// // Send the voting data to the backend API
// // fetch('http://localhost:8080/customer/save', {
// //   method: 'POST',
// //   headers: {
// //     'Content-Type': 'application/json'
// //   },
// //   body: JSON.stringify(#)
// // })
// //   .then(function(response) {
// //     if (response.ok) {
// //       // Handle the successful submission
// //       console.log('form submitted successfully!');
// //     } else {
// //       throw new Error('Error: ' + response.status);
// //     }
// //   })
// //   .catch(function(error) {
// //     console.error('Error:', error);
// //   });


//   // Function to handle form submission
//   function submitForm(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Get form values
//     const mobile = document.getElementById('no').value;
//     const address = document.getElementById('addres').value;
//     const firstName = document.getElementById('fname').value;
//     const lastName = document.getElementById('lname').value;
//     const password = document.getElementById('password').value;

//     // Create an object with the form data
//     const formData = {
//       mobile: mobile,
//       address: address,
//       firstName: firstName,
//       lastName: lastName,
//       password: password
//     };

//     // Send an HTTP POST request to the backend API
//     fetch('http://localhost:8080/customer/save', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Handle the response from the backend
//       console.log(data); // You can do further processing or display a success message
//     })
//     .catch(error => {
//       console.error('Error:', error); // Handle any errors that occur during the request
//     });
//   }

//   // Add an event listener to the form submit button
//   document.getElementById('registrationForm').addEventListener('submit', submitForm);

