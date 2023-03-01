
function updateTime() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am = document.getElementById("am");

    if (hours >= 12) {
        am.innerHTML = "PM";
    } else {
        am.innerHTML = "AM";
    }

    // const greeting = [];
    // function addTags(headings) { }

    let greeting = document.getElementById("heading");
    if (hours >= 3 && hours < 12) {
        greeting.innerText = "Good Morning!";
    }
    if (hours >= 12 && hours < 16) {
        greeting.innerText = "GoodAfterNoon!!"
            ;
    }
    if (hours >= 16 && hours < 20) {
        greeting.innerText = "GoodEvening!!"
    }
    if (hours >= 20 && hours < 24) {
        greeting.innerText = "GoodNight!!"
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    document.getElementById("ss").innerHTML = hours;
    document.getElementById("sss").innerHTML = minutes;
    document.getElementById("sr").innerHTML = seconds;
}
setInterval(updateTime, 1000);


let button = document.getElementById("button");
button.addEventListener("mouseover", function () {
    this.innerText = "Party Time";
})
button.addEventListener("mouseout", function () {
    this.innerText = "Set Alarm";
})


button.addEventListener("click", function () {
    let dateTime = new Date();
    let hours = dateTime.getHours();

    let wakeUp = document.getElementById("wake");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");

    if (parseInt(wakeUp.value) === hours) {
        document.getElementById("grab").innerText = "Grab Some Healthy Breakfast!!!";
        document.getElementById("Img").style.backgroundImage = "url('./jimg/Component 30 – 1.png')";

    }

    else if (parseInt(lunch.value) === hours) {
        document.getElementById("grab").innerText = "Let's have some lunch!!";
        document.getElementById("Img").style.backgroundImage = "url('./jimg/Component 31 – 1.png')";
    }

    else if (parseInt(nap.value) === hours) {
        document.getElementById("grab").innerText = "Stop yawning , get some tea.. Its just evening!";
        document.getElementById("Img").style.backgroundImage = "url('./jimg/lunch_image.png')";
    }

    else if (parseInt(night.value) === hours) {
        document.getElementById("grab").innerText = "close your eyes and go to sleep";
        document.getElementById("Img").style.backgroundImage = "url('./jimg/Component 32 – 1.png')";
    }

    let como = document.getElementsByClassName("como");
    como[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
    como[1].innerText = lunch.options[lunch.selectedIndex].text;
    como[2].innerText = nap.options[nap.selectedIndex].text;
    como[3].innerText = night.options[night.selectedIndex].text;
})