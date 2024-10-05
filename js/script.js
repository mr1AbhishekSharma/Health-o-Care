function showSignup() {
    document.querySelector('.login-box').classList.remove('active');
    document.querySelector('.signup-box').classList.add('active');
}

function showLogin() {
    document.querySelector('.signup-box').classList.remove('active');
    document.querySelector('.login-box').classList.add('active');
}

// Initially show the login form
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.login-box').classList.add('active');
});
