
window.addEventListener("scroll", ()=>{
    const tour = document.querySelector(".tour");
    tour.classList.toggle("active", scrollY >= 40);
})