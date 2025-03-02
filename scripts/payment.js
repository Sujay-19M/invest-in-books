function processRazorpayPayment(details) {
    const options = {
        key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay Key
        amount: 50000, // Example amount (₹500.00)
        currency: "INR",
        name: "Invest In Books",
        description: "Service Payment",
        image: "../assets/logo.png",
        prefill: {
            name: details.name,
            email: details.email,
            contact: details.phone
        },
        theme: {
            color: "#28a745"
        },
        handler: function (response) {
            // On Successful Payment
            localStorage.setItem('paymentResponse', JSON.stringify(response));
            window.location.href = '../pages/thank-you.html';
        },
        modal: {
            ondismiss: function () {
                alert("Payment window closed. Please try again.");
            }
        }
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
}
