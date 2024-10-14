// Navbar Toggle 
let navBar = document.querySelector (".navLink");
let menuBar = document.getElementById("menuBtn");
menuBar.addEventListener ("click", ()=>{
    navBar.classList.toggle('active');
});

