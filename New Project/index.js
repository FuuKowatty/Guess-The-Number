const typeNumb = document.querySelector('.typeNumb');
const submitNumb = document.querySelector('.submitNumb');
const result = document.querySelector('.result');
const randValue = Math.floor(Math.random() * 10 + 1);
const resetButton = document.querySelector('.reset');
let count = 5;

submitNumb.addEventListener('click', function NumbGame() {

    if(+typeNumb.value < 1 || +typeNumb.value > 10 || typeNumb.value === '') return result.innerHTML = 'wrong value!'
    if(+typeNumb.value === randValue) {
        result.innerHTML = typeNumb.value + " is correct!"
        resetButton.classList.toggle('active');
        resetGame()
    }
    else {
        let grab = `.heart${count}`;
        let heart = document.querySelector(grab)
        heart.src = "img/deathHeart.png";
        result.innerHTML = typeNumb.value + " is wrong!";
        count--;
            if(count < 1) {
                resetButton.classList.toggle('active');
                result.innerHTML = "lost! correct numb: " + randValue;            
                typeNumb.setAttribute('disabled', true);
                resetGame();
            
                
            }    
    }
})

        resetButton.addEventListener('click', function resetGame() {

        resetButton.classList.toggle('active');
        result.innerHTML = '';
        typeNumb.value = '';
        typeNumb.removeAttribute('disabled');
        count = 5; 
        
        for(let i = 1; i<6; i++) {
            heart = document.querySelector(`.heart${i}`)
            heart.src = "img/heart.png";
        };
    })
    


