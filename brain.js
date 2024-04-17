
let pscore = 0;
let compscore = 0;

const body=document.querySelector("body")
const options = document.querySelectorAll(".options")
const stone = document.querySelector(".stone")
const msg=document.querySelector(".msg")
const playerscore=document.querySelector("#pscore")
const cscore=document.querySelector("#compscore")
const heading=document.querySelector("#heading")
const mode =document.querySelector(".circle")
const modebtn=document.querySelector(".switch")

let curmode="light"

    mode.addEventListener("click",()=>{
        if(curmode==="light"){
        curmode="dark"    
        body.style.backgroundColor="rgb(80,82,80)"
        body.style.color="white"
        heading.style.color="white"
        modebtn.style.display="flex"
        modebtn.style.flexDirection="row-reverse"
        modebtn.style.border="2px solid white"
        console.log("dark")
        mode.style.backgroundColor="white"
        }
        else{
            curmode="light"
            console.log(curmode)
            modebtn.style.display="flex"
            body.style.backgroundColor="white"
            modebtn.style.flexDirection="row"
            body.style.color="black"
            heading.style.color="black"
            modebtn.style.border="2px solid black"
            mode.style.backgroundColor="#081b31"

        }
       

})

const showwinner=(userwin,userchoise,compchoise)=>{
      if(userwin){
        pscore++
        playerscore.innerText=pscore
        console.log(`your${userchoise}defeated${compchoise}`)
        msg.innerText=`your ${userchoise} defeated ${compchoise}`
        msg.style.backgroundColor="green"
        
        msg.style.color="white"
      }
      else{
        compscore++
        cscore.innerText=compscore
        console.log(`your ${userchoise} was defeated by ${compchoise}`)
        msg.innerText=`your ${userchoise} was defeated by ${compchoise}`
        msg.style.backgroundColor="red"
        msg.style.color="white"
      }
}
const drawgame = () => {
    console.log("game drawn")
    msg.innerText="game drawm"
    msg.style.backgroundColor="#081b31"
    msg.style.color="white"
}

const gencompchoise = () => {
    const choises = ["stone", "paper", "sesior"]
    const randidx = Math.floor(Math.random() * 3)
    return choises[randidx]
}

const playgame = (userchoise) => {
    console.log("user choise is:", userchoise)
    const compchoise = gencompchoise()
    console.log("comp choise is:", compchoise)
    if (userchoise === compchoise) {
        drawgame()
    }
    else {
        let userwin = true
        if (userchoise == "stone") {
            //sesior,paper

            userwin = compchoise === "paper" ? false : true
        }
        else if (userchoise === "paper") {
            //sesior,rock
            userwin = compchoise === "sesior" ? false : true;
        }
        else {
            userwin = compchoise === "stone" ? false : true
        }
        showwinner(userwin,userchoise,compchoise)
    }
}



options.forEach((options) => {
    // console.log(options)
    options.addEventListener("click", () => {
        let userchoise = options.getAttribute("id")
        playgame(userchoise)
        // console.log("clicked",chose)
    })
})