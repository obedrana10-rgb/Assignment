document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page refresh

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const course = document.querySelector('input[name="course"]:checked')?.value || "Not selected";
        const message = document.getElementById("message").value;
        const agree = document.getElementById("agree").checked ? "Yes" : "No";

        // Create an object
        const registrationData = {
            Name: name,
            Email: email,
            Age: age,
            Course: course,
            Message: message,
            Agreement: agree
        };

        // Log data to console
        console.log("Registration Data:", registrationData);

        // Optional: Save to localStorage for persistence
        localStorage.setItem("registrationData", JSON.stringify(registrationData));

        // Optional: Alert user
        alert("Registration data saved to console and local storage!");
    });
});
