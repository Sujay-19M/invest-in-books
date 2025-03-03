document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('loading').style.display = 'block';

    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');  // Add your emailjs public key

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_name: 'Admin',
        from_name: this.elements[0].value,
        message: `New Registration - ${this.elements[1].value}`,
        email: this.elements[1].value,
    }).then(() => {
        alert('Account Created! Check your email.');
        window.location.href = 'dashboard.html';
    }).catch((err) => {
        alert('Error creating account.');
        console.error(err);
        document.getElementById('loading').style.display = 'none';
    });
});

// Similar logic can be applied for login form if you want
