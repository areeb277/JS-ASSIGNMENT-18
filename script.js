// PROFILE CARD //


function changeProfile() {

    let changeName = document.getElementById("profile-name").innerHTML = "Name: Umer";
    let changeRole = document.getElementById("profile-role").innerHTML = "Role: Full stack developer"
    let changeDescription = document.getElementById("profile-des").innerHTML = "Hello! My name is umer i'am a full stack web developer!"

};



function changeImage() {

    let changeImg = document.getElementById("profile-img").src = "image/umer1.jpeg"

};

function addName() {
    
    let name = document.getElementById("name").value;

    document.getElementById("username").innerText = name;
}