document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
   const p = document.getElementById("display")
    // Enable submit button only when form inputs are filled
    /*registerForm.addEventListener('input', () => {
      const isEmpty = Array.from(registerForm.elements).some(input => input.value === '');
      registerForm.querySelector('button').disabled = isEmpty;
    });
  
    loginForm.addEventListener('input', () => {
      const isEmpty = Array.from(loginForm.elements).some(input => input.value === '');
      loginForm.querySelector('button').disabled = isEmpty;
    });*/
  
    // Handle form submissions
    registerForm.addEventListener('submit',  (event) => {
      event.preventDefault();
  
      const formData = new FormData(registerForm);
       const finalData = Object.fromEntries(formData)
       console.log(finalData)
        fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(finalData),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then((data) => p.innerHTML = data)
  
      /*const data = await response.text();
      if (data === 'register') {
        console.log('Registration successful');
      } else if (data === 'error1') {
        console.log('Error: Username or Email already exists');
      }*/
    });
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(loginForm);
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const data = await response.text();
      if (data === 'login') {
        console.log('Login successful');
      } else if (data === 'error2') {
        console.log('Error: Invalid Username or Password');
      }
    });
  });
  