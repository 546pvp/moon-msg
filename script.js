var username = prompt("Username:")
if (username == null) {username = 'Guest'}
username = username.charAt(0).toUpperCase() + username.slice(1)
var msginput = document.getElementById("msginput")
var msglist = document.getElementById("msglist")
var msglistbox = document.getElementById("msglistbox")
var base = "https://database-5d763-default-rtdb.firebaseio.com/"
f1 = new Firebase(base + "/messages")


function sendMsg(msg, user) {
    var messageObject = {
        content: msginput.value,
        user: username
    }
    f1.set(messageObject)
}

f1.on("value", function(snapshot) {
    msglistbox.innerHTML += `<li id='msgElement'>${snapshot.val().user}: ${snapshot.val().content}</li>`;
})
msginput.addEventListener('keypress', (e)=>{if (e.key == 'Enter') {
    sendMsg(msginput.value, username)
    var messageObject = {
        content: msginput.value,
        user: username
    }
} }, false);
