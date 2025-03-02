// Reference to Firebase Auth service
const auth = firebase.auth();

// Registration Function
function registerUser() {
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Registration Successful!");
            // Redirect or show message
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
}

// Login Function
function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            // Redirect or show dashboard
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
}

// Logout Function
function logoutUser() {
    auth.signOut().then(() => {
        alert("Logged out successfully!");
        // Redirect to homepage
    }).catch((error) => {
        alert(`Error: ${error.message}`);
    });
}

// Optional: Listen for user auth state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is logged in:", user.email);
    } else {
        console.log("No user logged in.");
    }
});
