let doors = document.querySelectorAll(".door");
let doorSales = document.querySelectorAll(".door__sales");
let doorWrapper = document.querySelector(".door__wrapper");
let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let orderBlock = document.querySelector(".order_block");
let orderBlockForm = document.querySelector(".order_block");
let door1 = document.getElementById("door__1");
let door2 = document.getElementById("door__2");
let door3 = document.getElementById("door__3");
let doorSale1 = document.getElementById("door__sales1");
let doorSale2 = document.getElementById("door__sales2");
let doorSale3 = document.getElementById("door__sales3");

doors.forEach(function(door) {
    door.addEventListener("click", openDoor);
});

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (a) {
    start_timer()
    doorWrapper.style.display = "none";
    $('.spin-result-wrapper').fadeOut();
    orderBlock.style.display = "block";
    orderBlockForm.style.display = "block";
    var b = $(".box").offset().top;
    $("body,html").animate({scrollTop: b}, 800)
});


function openDoor(e) {
    e.currentTarget.classList.add("open");
    //должна выпадать всплывашка после открытие 1й двери

    setTimeout(function() {
        spinResultWrapper.style.display = "block";
        setTimeout(function() {
            doorWrapper.style.display = "none";
            orderBlock.style.display = "block";
            start_timer();
        }, 3500);
    }, 3500);

    doorSales.forEach(function(sale) {
        if (door1.classList.contains("open")) {
            doorSale1.innerHTML = "100%";
            doorSale1.style.left = "12px";

            doorSale2.innerHTML = "50%";
            doorSale2.style.left = "30px";

            doorSale3.innerHTML = "25%";
            doorSale3.style.left = "32px";
        } else if (door2.classList.contains("open")) {
            doorSale2.innerHTML = "100%";
            doorSale2.style.left = "12px";

            doorSale1.innerHTML = "25%";
            doorSale1.style.left = "32px";

            doorSale3.innerHTML = "50%";
            doorSale3.style.left = "30px";
        } else if (door3.classList.contains("open")) {
            doorSale1.innerHTML = "50%";
            doorSale1.style.left = "30px";

            doorSale3.innerHTML = "100%";
            doorSale3.style.left = "12px";

            doorSale2.innerHTML = "25%";
            doorSale2.style.left = "32px";
        }

    });

    for (let i = 0; i < doors.length; i++) {
        if (!doors[i].classList.contains("open")) {
            setTimeout(function() {
                doors[i].classList.add("open");
            }, 2500);
        }
    }

    for (let j = 0; j < doors.length; j++) {
        doors[j].removeEventListener("click", openDoor);
    }
}
let time = 3600;
let intr;
let count = 0;

function start_timer() {
    count++
    if (count === 1) {
        intr = setInterval(tick, 1000);
        count++
    } else {
        return false
    }
};

function tick() {
    time = time - 1;
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    document.querySelector('#min').innerHTML = "" + mins;
    document.querySelector('#sec').innerHTML = secs
}
start_timer();
// setInterval(function() {
//     if (Boolean(document.querySelector('#order').style.display === "block")) {
//         start_timer()
//     }
// }, 100)