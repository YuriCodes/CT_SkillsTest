///Carousel
let images = document.getElementsByClassName("picture")
let circles = document.getElementsByClassName("circle")
//Tabs
let tabinfo = document.getElementsByClassName("tabtext")
let tab = document.getElementsByClassName("tabFlap")
//Mobile ccordion
const accordion = document.getElementsByClassName("accordion");

let currentPic = 1

function showPicture(pic){  
    for (let i = 0; i < images.length; i++){
        images[i].style.opacity = "0.5"
    }
    for (let i = 0; i < circles.length; i++){
        circles[i].className = circles[i].className.replace("active", "")
    }   
    images[currentPic-1].style.opacity = "1"
    circles[currentPic-1].className += " active"
}
showPicture(currentPic)

function selectedPic(pic){
    showPicture(currentPic = pic)
}

//Tabs
function tabOpen(e, content){
    for (let i = 0; i < tabinfo.length; i++){
      tabinfo[i].style.display = "none"
    }
    for (let i = 0; i < tab.length; i++){
      tab[i].className = tab[i].className.replace(" active", "")
    }
    document.getElementById(content).style.display = "block"
    e.currentTarget.className += " active"
}

//Mobile accordion
for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active")
        let element = this.nextElementSibling
        if (element.style.display === "none"){
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }
    })
}