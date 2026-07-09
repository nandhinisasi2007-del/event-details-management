// Get the selected event from the URL
const params = new URLSearchParams(window.location.search);
const event = params.get("event");

let ticketPrice = 500;

const eventNameInput = document.getElementById("eventName");

if (event === "music") {
    eventNameInput.value = "Chennai Music Festival";
    ticketPrice = 2500;
}
else if (event === "ipl") {
    eventNameInput.value = "IPL Fan Meet 2026";
    ticketPrice = 1500;
}
else if (event === "tech") {
    eventNameInput.value = "Tech Conference 2026";
    ticketPrice = 900;
}
else if (event === "startup") {
    eventNameInput.value = "Startup Summit 2026";
    ticketPrice = 2000;
}
else if (event === "food") {
    eventNameInput.value = "Food Carnival 2026";
    ticketPrice = 300;
}
else if (event === "comedy") {
    eventNameInput.value = "Comedy Night Live";
    ticketPrice = 1600;
}
else if (event === "dance") {
    eventNameInput.value = "Classical Dance Festival";
    ticketPrice = 400;
}
else if (event === "ai") {
    eventNameInput.value = "AI & Machine Learning Workshop";
    ticketPrice = 1500;
}
else if (event === "photography") {
    eventNameInput.value = "Photography Expo";
    ticketPrice = 350;
}
else if (event === "fashion") {
    eventNameInput.value = "Fashion Show 2026";
    ticketPrice = 1000;
}
else {
    eventNameInput.value = "Chennai Music Festival";
    ticketPrice = 2500;
}

const quantityInput = document.getElementById("quantity");

function updateTotal() {

    const quantity = quantityInput.value;

    const total = quantity * ticketPrice;

    document.getElementById("total").innerText =
        `Total : ₹${total}`;
}

updateTotal();

quantityInput.addEventListener("input", updateTotal);

function bookTicket() {

    const eventName =
        document.getElementById("eventName").value;

    const quantity =
        document.getElementById("quantity").value;

    const booking = {

        id: Date.now(),

        eventName,

        quantity

    };

    let bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

    alert("Booking Successful!");
    window.location.href = "dashboard.html";
}
