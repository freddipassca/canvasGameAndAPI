console.log("hasta aqui vamos bien")

document.getElementById("ourUser").addEventListener("click", userInfo);

function userInfo() {
    let ourUserName = document.getElementById("name").value;
    let ourUserAge = document.getElementById("edad").value;
    // let byeForm = document.querySelectorAll(".form");
    // for(i=0; i<5; i++) {
    //     byeForm[i].remove();
    // }
    userGood = document.getElementById("user");
    userGood.innerHTML = `
    <p  class="name"> <strong>Nombre:</strong> ${ourUserName} </p>
    <p> <strong>Edad:</strong> ${ourUserAge} </p>
    <br>
    <div id="user2">
        <p class="byeChoice"> Elige un animal: </p>
        <a class="byeChoice" id="aVaca" href="#"> <img src="./images/vaca.png"> </a>
        <a class="byeChoice" id="aPollo" href="#"> <img src="./images/pollo.png"> </a>
        <a class="byeChoice" id="aCerdo" href="#"> <img src="./images/cerdo.png"> </a>
    </div>
    `
    //--------------------------------------------------------------
    var choice = "";
    let vacaOne = () => {choice = "vaca"; picked(vaca.url);}
    let polloOne = () => {choice = "pollo"; picked(pollo.url);}
    let cerdoOne = () => {choice = "cerdo"; picked(cerdo.url);}
    
    document.getElementById("aVaca").addEventListener("click", vacaOne);
    document.getElementById("aPollo").addEventListener("click", polloOne);
    document.getElementById("aCerdo").addEventListener("click", cerdoOne);
    
    function picked (imagen) {
        // let byeChoicebye = document.querySelectorAll(".byeChoice");
        // for(i=0; i<4; i++) {
        //     byeChoicebye[i].remove();
        // }
        urChoice = document.getElementById("user2");
        urChoice.innerHTML = `
        <p> Este es tu animal: </p>
        <img id="desicion" src="${imagen}">
    
        `
    }
}
// function getChoice () {
//     return choice;
// }
// export default getChoice ;
// var getChoice = function() {return choice}

// module.exports = getChoice;

// export default choice;





var usuarioExterno = document.getElementById("usuarioExterno");
// page.addEventListener("load", traerApi);

// function traerApi() {
    console.log("function si entra");
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => { 
        console.log(data.results[0]);
        usuarioExterno.innerHTML = ` 
        

        <img src="${data.results[0].picture.large}" id="usuarioRandom">
        <p> <strong> Nombre:</strong> ${data.results[0].name.title}
        ${data.results[0].name.first} ${data.results[0].name.last}</p>
        <p> <strong>Gender:</strong> ${data.results[0].gender}</p>
        <p> <strong>Email:</strong> ${data.results[0].email}</p>
        <p> <strong>Phone:</strong> ${data.results[0].phone}</p>
        
        `
    })


// }