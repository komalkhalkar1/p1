document.getElementById('toggleLogin').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    this.classList.add('btn-primary');
    this.classList.remove('btn-secondary');
    document.getElementById('toggleRegister').classList.add('btn-secondary');
    document.getElementById('toggleRegister').classList.remove('btn-primary');
    document.getElementById('loginForm').classList.add('fade-in');
});

document.getElementById('toggleRegister').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    this.classList.add('btn-primary');
    this.classList.remove('btn-secondary');
    document.getElementById('toggleLogin').classList.add('btn-secondary');
    document.getElementById('toggleLogin').classList.remove('btn-primary');
    document.getElementById('registerForm').classList.add('fade-in');
});

document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    let userExists = users.some(user => user.email === email);
    if(userExists) {
        alert('User already exists!');
    } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('loginForm').classList.remove('hidden');
        document.getElementById('registerForm').classList.add('hidden');
        this.classList.add('btn-primary');
        this.classList.remove('btn-secondary');
        document.getElementById('toggleRegister').classList.add('btn-secondary');
        document.getElementById('toggleRegister').classList.remove('btn-primary');
        document.getElementById('loginForm').classList.add('fade-in');
    }
});

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    let user = users.find(user => user.email === email && user.password === password);
    if(user) {
        window.location.href = "home.html"
    } else {
        alert('Invalid email or password!');
    }
});
