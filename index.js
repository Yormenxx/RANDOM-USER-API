
//DOM

const $photo_user = document.getElementById("photo_user")
const $user_name = document.getElementById("user_name")
const $gender_user = document.getElementById("gender_user")
const $number_user = document.getElementById("number_user")
const $email_user = document.getElementById("email_user")
const $getRandom = document.getElementById("getRandom")


//API
const urlRandom = "https://randomuser.me/api/";

async function getRadomUser(){

    const response = await fetch(urlRandom);

    const data = await response.json();

    const userData = data.results[0]

    //PHOTO DEL USUARIO

    let photo = userData.picture.medium

    $photo_user.setAttribute("src",photo)

    //NAME DEL USUARIO

    $user_name.textContent= `${userData.name.title} ${userData.name.first} ${userData.name.last}`

    //GENDER USER

    $gender_user.textContent = userData.gender
    
    //NUMBER USER

    $number_user.textContent=userData.cell

    //EMAILL  USER

    $email_user.textContent=userData.email

    console.log(userData)

}
$getRandom.addEventListener("click",getRadomUser);

