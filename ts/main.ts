const pointer = document.getElementById('pointer')!;

window.addEventListener('mousemove', (e)=>{
    pointer.style.left = (e.clientX + 15 ) + "px";
    pointer.style.top = (e.clientY + 15 ) + "px";
    console.log("hi")
});
console.log("guhha")