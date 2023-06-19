const playerText=document.querySelector("#playerText")
const computerText=document.querySelector("#computerText")
const resultText=document.querySelector("#resultText")
const choiceBtns=document.querySelectorAll(".choiceBtn")

let player
let computer
let result

choiceBtns.forEach(button=>button.addEventListener('click',()=>{
  player=button.textContent
  computer = computerChoice()
  result = compareResults(player,computer)
  playerText.textContent=`Player: ${player}`
  computerText.textContent=`Computer: ${computer}`
  resultText.textContent=`Result: ${result}`
}))

function computerChoice(){
  let pcchoice=Math.floor(Math.random()*3)
  if(pcchoice==0){
    pcchoice='Rock'
  }
  else if(pcchoice==1)
  {
    pcchoice='Paper'
  }
  else{
    pcchoice='Scissors'
  }
  return pcchoice
}

function compareResults(playerC,computerC){
  let msg
  if(playerC==computerC){
    msg='Draw!'
  }else if(computerC=='Paper')
  {
    msg=(playerC=='Rock')? 'Computer Wins!':'You Win!'
  }else if(computerC=='Rock')
  {
    msg=(playerC=='Scissors')? 'Computer Wins!':'You Win!'
  }else if(computerC=='Scissors')
  {
    msg=(playerC=='Paper')? 'Computer Wins!':'You Win!'
  }
  return msg

}