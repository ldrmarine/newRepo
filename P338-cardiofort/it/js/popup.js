function detectMob() {
    return (window.innerWidth <= 992);
    // && (window.innerHeight <= 600));
}

function counter() {

    if(sec > 0)
    {
        sec--;
    }
    else
    {
        if(min > 0)
        {
            min--;
            sec = 59;
        }
 
    }
 
    document.getElementById('timer').innerHTML=((min < 10) ? "0" + min : min)+":"+((sec < 10) ? "0" + sec : sec);
 
    setTimeout("counter();", 1000);

    if(min == 0 && sec == 0) {
        closePopup();
    }
 }
 
 var min = 3;
 var sec = 0;

if (!detectMob()) {
    //disable popup variable
    var displayPopup = false;
    var creatCookie = false;
    //function to open modal if variable is true
    function openPopUp() {
        if (displayPopup == true) {
            const popup = document.getElementById("popup");
            const bg = document.getElementById("bg");

            bg.classList.remove("d-none");
            popup.classList.remove("d-none");
            displayPopup = false;
            creatCookie = true;
            createCookies();
            counter();
        }

    }


    // open popup if mouse out of window
    $(document).ready(function () {
        var mouseY = 0;
        var topValue = 0;
        window.addEventListener("mouseout", function (e) {
            mouseY = e.clientY;
            if (mouseY < topValue) {
                openPopUp();
            }
        },
            false);
    });

    //close popup
    function closePopup() {
        bg.classList.add("d-none");
        popup.classList.add("d-none");
    }
    // handle cookies

    function setCookie(c_name, value, exdays) {
        var c_value = escape(value);
        if (exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            c_value += '; expires=' + exdate.toUTCString();
        }
        document.cookie = c_name + '=' + c_value;
    }

    function getCookie(c_name) {
        var i, x, y, cookies = document.cookie.split(';');

        for (i = 0; i < cookies.length; i++) {
            x = cookies[i].substr(0, cookies[i].indexOf('='));
            y = cookies[i].substr(cookies[i].indexOf('=') + 1);
            x = x.replace(/^\s+|\s+$/g, '');

            if (x === c_name) {
                return unescape(y);
            }
        }
    }
    // set cookie and display popup once per day

    window.setTimeout(function () {
        // When the cookie exists, do not show the popup!
        if (getCookie('displayedPopup')) {
            displayPopup = false;
            creatCookie = false
            return;
        }


        //display popup
        displayPopup = true;
        // The popup was displayed. Set the cookie for 1 day.

    }, 10000);

    function createCookies() {
        if (creatCookie == true) {
            setCookie('displayedPopup', 'yes', 1);
        };
    };
}

