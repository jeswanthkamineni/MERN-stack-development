let boxes=document.getElementsByClassName("box");
console.log("boxes");
boxes[2].style.backgroundColor="green";
document.getElementById("blue").style.backgroundColor="blue";
document.querySelector(".box").style.backgroundColor="royalblue";
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box");
document.querySelectorAll(".box")[1].style.backgroundColor="pink";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";        
})
