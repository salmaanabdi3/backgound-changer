const button =document.querySelector("button");
const h2cl = document.querySelector('h2');
const bgcl =document.querySelector("section")

button.addEventListener('click', ()=>{
    let color="#";
    color +=Math.random().toString(16).slice(2,8);
    bgcl.style.backgroundColor =color
    h2cl.innerHTML = color
    console.log(color)
})