function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === 'admin' && password === '12345') {
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
}