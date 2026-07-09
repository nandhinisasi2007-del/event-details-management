const events = [
{
    id:1,
    name:"Chennai Music Festival",
    category:"Music",
    location:"Chennai",
    date:"15 July 2026",
    price:"₹500"
},

{
    id:2,
    name:"IPL Fan Meet",
    category:"Sports",
    location:"Mumbai",
    date:"20 July 2026",
    price:"₹700"
},

{
    id:3,
    name:"Tech Conference",
    category:"Technology",
    location:"Bangalore",
    date:"25 July 2026",
    price:"₹1200"
},

{
    id:4,
    name:"Startup Summit",
    category:"Business",
    location:"Hyderabad",
    date:"28 July 2026",
    price:"₹1500"
},

{
    id:5,
    name:"Food Carnival",
    category:"Food",
    location:"Coimbatore",
    date:"5 August 2026",
    price:"₹300"
},

{
    id:6,
    name:"Comedy Night",
    category:"Entertainment",
    location:"Chennai",
    date:"10 August 2026",
    price:"₹600"
},

{
    id:7,
    name:"Classical Dance Festival",
    category:"Cultural",
    location:"Madurai",
    date:"15 August 2026",
    price:"₹400"
},

{
    id:8,
    name:"AI & Machine Learning Workshop",
    category:"Technology",
    location:"Bangalore",
    date:"18 August 2026",
    price:"₹1500"
},

{
    id:9,
    name:"Photography Expo",
    category:"Art",
    location:"Kochi",
    date:"22 August 2026",
    price:"₹350"
},

{
    id:10,
    name:"Fashion Show",
    category:"Fashion",
    location:"Delhi",
    date:"28 August 2026",
    price:"₹1000"
}
];

const container =
document.getElementById("eventContainer");

function displayEvents(data){

    container.innerHTML="";

    data.forEach(event=>{

        const card =
        document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML=`


            <h3>${event.name}</h3>

            <p>
            Category : ${event.category}
            </p>

            <p>
            Location : ${event.location}
            </p>

            <p>
            Date : ${event.date}
            </p>

            <p>
            Price : ${event.price}
            </p>

            <button>
                Book Now
            </button>

        `;

        container.appendChild(card);

    });

}

displayEvents(events);

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    events.filter(event=>

        event.name
        .toLowerCase()
        .includes(value)

    );

    displayEvents(filtered);

});

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

});
