document.addEventListener('DOMContentLoaded', () => {
    const correct = document.querySelector('.result'); 
    
    function resetColor() {
        console.log('reset')

        let elements = document.getElementsByClassName('answers') 

        for (let i = 0; i < elements.length; i++)
            elements[i].style.backgroundColor = "lightgray"    
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