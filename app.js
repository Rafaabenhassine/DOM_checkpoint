var favs =Array.from(document.querySelectorAll(".fa-heart"))        
var deletebtn =Array.from(document.querySelectorAll(".fa-trash"))   
var plus =Array.from(document.querySelectorAll(".fa-plus"))        
var minus =Array.from(document.querySelectorAll(".fa-minus"))      
var cards =Array.from(document.querySelectorAll(".card"))

// heart
for(let fav of favs){                            
    fav.addEventListener("click",function(){
        if(fav.style.color!="red"){
            fav.style.color="red"
        }
        else{
            fav.style.color="black"
        }
    })
    
}
// trush
for (let i in deletebtn) {                                 
    deletebtn[i].addEventListener("click",function(){     
        cards[i].remove()
    })
    
}
// plus
for (let p of plus) {
    
    p.addEventListener("click",function(){
        p.nextElementSibling.innerHTML++
        total()
    })
    
}
// minus 
for (let m of minus) {
    m.addEventListener("click",function(){
        if (m.previousElementSibling.innerHTML>0) {
            m.previousElementSibling.innerHTML--
            total()
        }
    })
    
}

// Total Price 
function total() {
    let qte=Array.from(document.querySelectorAll(".qte"));
    let price=Array.from(document.querySelectorAll(".price"));
    let t=0;
    for (let i in qte) {
        t=t+qte[i].innerHTML*price[i].innerHTML
    }
    document.querySelector(".totalprice").innerHTML = t
    console.log(t)
}
