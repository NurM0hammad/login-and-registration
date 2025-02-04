// Toggle between Login and Registration forms
document.getElementById('toggle-login').addEventListener('click', () => {
    document.getElementById('login-form').classList.remove('d-none');
    document.getElementById('register-form').classList.add('d-none');
    document.getElementById('form-title').textContent = 'Login';
  });
  
  document.getElementById('toggle-register').addEventListener('click', () => {
    document.getElementById('register-form').classList.remove('d-none');
    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('form-title').textContent = 'Register';
  });
  
  // Handle Registration
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
  
    if (userExists) {
      alert('User already exists!');
      return;
    }
  
    // Save user data
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registration successful!');
    document.getElementById('register-form').reset();
  });
  
  // Handle Login
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert('Login successful!');
      document.getElementById('login-form').reset();
    } else {
      alert('Invalid email or password!');
    }
  });