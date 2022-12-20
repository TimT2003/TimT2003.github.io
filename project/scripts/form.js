if (document.readyState !== "loading") {
    onReady();
} else {
    document.addEventListener("DOMContentLoaded", onReady);
}


function onReady() {
    window.history.pushState({ popup: "close" }, "popup", "./");
    window.addEventListener("popstate", function (e) {
        if (e.state.popup === "close") {
            closePopUp();
        }
        if (e.state.popup === "open") {
            openPopUp();
        }
    });

    let buttons = document.querySelectorAll(".auth-popup-start");
    for(let i = 0; i < buttons.length; i++) { buttons[i].addEventListener("click", openPopUp); }
    let closeSpan = document.getElementsByClassName("close")[0];
    closeSpan.addEventListener("click", closePopUp);
    let userName = document.getElementById("user-name");
    let userEmail = document.getElementById("user-email");
    let userPhone = document.getElementById("user-phone");
    let userMsg = document.getElementById("user-msg");
    let policyCheck = document.getElementById("policy");
    let form = document.getElementById("user-form");

    userName.value = localStorage.getItem("name");
    userEmail.value = localStorage.getItem("email");
    userMsg.value = localStorage.getItem("message");
    userPhone.value = localStorage.getItem("phone");

    console.log(`${userName} : UserName; ${userEmail} : UserEmail; + ${userMsg} : UserPhone + ${userPhone}`);

    form.addEventListener("submit", async function (e) {
        let user = {
            name: userName,
            email: userEmail,
            policy: policyCheck,
            message: userMsg,
            phone: userPhone
        };
        let url = "https://formcarry.com/s/S2CSA3XtYcs";
        policyCheck.ariaChecked = false;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        let result = await response.json();
        alert(result.message);

        return false;
    });
}

function saveToLocalStorage() {
    let userName = document.getElementById("user-name").value;
    let userPhone = document.getElementById("user-phone").value;
    let userEmail = document.getElementById("user-email").value;
    let userMsg = document.getElementById("user-msg").value;
    localStorage.setItem("name", userName);
    localStorage.setItem("email", userEmail);
    localStorage.setItem("message", userMsg);
    localStorage.setItem("phone", userPhone);
}

function clearEntries() {
    document.getElementById("user-name").value = "";
    document.getElementById("user-email").value = "";
    document.getElementById("user-msg").value = "";
    document.getElementById("user-phone").value = "";
}

function openPopUp() {
    window.history.replaceState({ popup: "open" }, "popup", "./popup");
    let popup = document.getElementById("auth-popup");
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
}

function closePopUp() {
    window.history.replaceState({ popup: "close" }, "popup", "./");
    let popup = document.getElementById("auth-popup");
    popup.style.display = "none";
}
