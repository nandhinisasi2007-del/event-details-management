const bookings =
JSON.parse(
localStorage.getItem("bookings")
) || [];

const bookingList =
document.getElementById("bookingList");

bookings.forEach(item=>{

    const div =
    document.createElement("div");

    div.innerHTML=`
        <p>
        ${item.eventName}
        -
        ${item.quantity}
        Tickets
        </p>
    `;

    bookingList.appendChild(div);

});

function addReview(){

    const review =
    document.getElementById("reviewText").value;

    const reviewList =
    document.getElementById("reviewList");

    const p =
    document.createElement("p");

    p.innerText = review;

    reviewList.appendChild(p);

}
