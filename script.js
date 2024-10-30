let love = document.querySelector("#love")
let con = document.querySelector("#container")
let like = document.querySelector("#like")

let img = document.querySelector("#imgdiv")
let count = document.querySelector("#count")
let cntn = 1;
const likecnt = like.addEventListener('click',() => {
    count.innerHTML = cntn++;
    like.style.color = "red";
    love.style.color = "red";
    
})

const imgclick = img.addEventListener("dblclick", () => {
    count.innerHTML = cntn++;
    like.style.color = "red";
    love.style.color = "red";
    love.style.transform = "scale(1)"
    
    setTimeout(function(){
        love.style.transform = "scale(0)"
    },1000)
});