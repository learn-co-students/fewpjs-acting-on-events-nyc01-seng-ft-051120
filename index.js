// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor='goldenrod'
dodger.style.bottom='0px'
document.addEventListener("keydown", function(e){
    switch(e.key){
        case 'ArrowLeft':
            moveDodgerLeft()
        case 'ArrowRight':
            moveDodgerRight()
         default: 
        
    }
})

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
      }
  }

  function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
      }
  }