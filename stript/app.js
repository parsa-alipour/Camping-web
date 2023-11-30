const navBtn = document.querySelector(".navBtn")
const navMenu = document.querySelector(".mobailNavmenu")
let navopen = false
navBtn.addEventListener("click",function(){
      if(navopen){
            navBtn.classList.remove("navBtnopen")
            navMenu.classList.remove("mobailNavmenuopen")
            navopen =false
      }else{
            navBtn.classList.add("navBtnopen")
            navMenu.classList.add("mobailNavmenuopen")
            navopen =true
      }
})