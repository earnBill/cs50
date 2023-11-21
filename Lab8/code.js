document.addEventListener('DOMContentLoaded', () => {
    const correct = document.querySelector('.result'); 
    
    function resetColor() {
        console.log('reset')

        document.getElementsByClassName('answers').forEach(answers => {
            amswers.style.backgroundColor = 'yellow'
        }) 

       
    }

    console.log('ready')
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = () => {
            console.log('click')
            button.backgroundColor = 'yellow'
            if (button.id === 'correct') {
                console.log('correct')
                
                correct.innerHTML = 'Correct'
                resetColor()
                button.style.backgroundColor = 'green'
            }
            else {
                button.style.backgroundColor = 'red'
                correct.innerHTML = 'Incorrect'
            }
        }
        
    })
})