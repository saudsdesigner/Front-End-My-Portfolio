
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("night");
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("red-mode");

});

let year = new Date().getFullYear();

document.getElementById("date").innerText = year;

consle.log(year);



// function print_result(){
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     document.getElementById("result").innerHTML = email + "<br> " + password;
// }

//     document.getElementById("btn btn-sec").addEventListener("click", print_result);