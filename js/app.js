function trafficTimeframe() {
    const children = document.getElementById("timeframes").children;

    for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", function() {
            for (let j = 0; j < children.length; j++) {
                children[j].style.backgroundColor = "";
                children[j].style.color = "";
            }
            children[i].style.backgroundColor = "#81c98f";
            children[i].style.color = "white";
        });
    }
};

function hideAlert() {
    const hideAlertButton = document.getElementById("hide-alert");
    const alertDiv = document.getElementById("alert")
    hideAlertButton.addEventListener("click", function() {
        alertDiv.style.display = "none";
    });
};

function completeForm() {
    const userElement = document.getElementById("user");
    const messageElement = document.getElementById("message");

    if (userElement.value && messageElement.value) {
        return true;
    } else {
        return false;
    }
}

function messageFormListener() {
    document.getElementById("message-form").addEventListener("submit", function(e) {
        e.preventDefault();
        if (completeForm()) {
            alert("Message Sent!")
        } else {
            alert("Message form incomplete!")
        }
    })
}

function settingToggle() {
    const emailNotification = {
        id: document.getElementById("email"),
        bool: true
    };
    const profilePublic = {
        id: document.getElementById("profile"),
        bool: true
    };
    const toggles = [emailNotification, profilePublic];

    toggles.forEach(function(e) {
        e.id.addEventListener("click", function() {
            if (e.bool) {
                e.bool = false;
                e.id.style.backgroundColor = "grey";
                e.id.firstChild.nextSibling.innerHTML = "OFF";
                e.id.firstChild.nextSibling.style.order = "1";
            } else {
                e.bool = true;
                e.id.style.backgroundColor = "#7477bf";
                e.id.firstChild.nextSibling.innerHTML = "ON"
                e.id.firstChild.nextSibling.style.order = "0";
            }
        })
    })
}

function addTimeZones() {
    const timezoneSelect = document.getElementById("timezones");

    for (let i = -12; i < 13; i++) {
        let select = document.createElement("option");
        let node = document.createTextNode(`${i}:00`)
        select.appendChild(node)

        timezoneSelect.appendChild(select);

    }
}

trafficTimeframe();
hideAlert();
messageFormListener();
settingToggle();
addTimeZones();