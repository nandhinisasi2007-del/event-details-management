function createEvent(){

    const eventName =
    document.getElementById("eventName").value;

    const eventDate =
    document.getElementById("eventDate").value;

    const eventLocation =
    document.getElementById("eventLocation").value;

    let events =
    JSON.parse(
    localStorage.getItem("events")
    ) || [];

    events.push({
        eventName,
        eventDate,
        eventLocation
    });

    localStorage.setItem(
    "events",
    JSON.stringify(events)
    );

    showToast();

}

function showToast(){

    const toast =
    document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}
