const navbar = document.querySelector(".navbar")

window.onscroll=()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

ScrollTrigger.create({
    animation: gsap.from(".logo",{
        x: "50vh",
        scale:6,
        xPercent:-50,
    }),
    scrub:true,
    trigger:".navbar",
    start:"top bottom",
    endTrigger:".navbar",
    end:"top center",
})
function clicked(){
    alert('Click Test, Button Working');
}