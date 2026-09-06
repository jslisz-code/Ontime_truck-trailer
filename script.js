const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
if(menuToggle&&navLinks){
  menuToggle.addEventListener("click",()=>{
    const open=navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active",open);
    menuToggle.setAttribute("aria-expanded",String(open));
  });
  navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    navLinks.classList.remove("open");menuToggle.classList.remove("active");menuToggle.setAttribute("aria-expanded","false");
  }));
}
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}
  }),{threshold:.12});
  reveals.forEach(el=>io.observe(el));
}else{reveals.forEach(el=>el.classList.add("visible"))}
