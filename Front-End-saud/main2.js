// function mode_switcher(){
//     let body = document.getElementById("body");
//     let btn = document.getElementById("btn");


//     body.classList.toggle("dark-mode");
//     btn.innerText = body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
// }
//     document.getElementById("btn").addEventListener("click", mode_switcher);

const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("night");
  document.body.classList.toggle("dark-mode");
});

