const emojis = ["🐱","🐱","🐯","🐯","🦁","🦁","🤠","🤠","🐮","🐮","🐨","🐨","🐸","🐸","🐻","🐻"];
let openCards = [];


let shuffleEmojis=emojis.sort(()=>(Math.random()>0.5?2:-1));

shuffleEmojis.forEach((em)=>{
    let box= document.createElement("div");
    box.className="item";
    box.innerHTML = em

    box.onclick=handleClick
    document.querySelector(".game").appendChild(box)
})


function handleClick()
    
{
    if(openCards.length<2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length==2){
        setTimeout(checkMatch,500)
    }
   
}
function checkMatch(){
   
    
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards.forEach(cards=>{
            cards.classList.add("boxMatch")
        })
    }
    else{
        openCards.forEach(cards=>{
            cards.classList.remove("boxOpen")
        })
    }
    openCards=[]
    if(document.querySelectorAll(".boxMatch").length===emojis.length){
        alert("você venceu")
    }

}