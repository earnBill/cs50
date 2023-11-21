document.addEventListener('DOMContentLoaded', () => {
    const correct = document.querySelector('.result'); 
    
    //reret color function 
    function resetColor() {
        console.log('reset')

        let elements = document.getElementsByClassName('answers') 

        for (let i = 0; i < elements.length; i++)
            elements[i].style.backgroundColor = "lightcyan"    
    }

    //Part1 multible choise
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = () => {
            console.log('click')
            
            if (button.id === 'correct') {
                console.log('correct')
                
                correct.innerHTML = 'Correct'
                resetColor()
                button.style.backgroundColor = 'green'
            }
            else {
                resetColor()
                button.style.backgroundColor = 'red'
                correct.innerHTML = 'Incorrect'
            }
        }
        
    })

    //Part2
    
    let confirmBtn = document.querySelector('#confirmBtn')
    let result2 = document.querySelector('#result2')

    confirmBtn.onclick = () => {
        let text = document.querySelector('input')
        console.log(text.value)
        if(text.value === 'Greece') {
            console.log("Congratulations")
            text.style.backgroundColor = 'green'
            result2.innerHTML = 'Correct'
        }
        else {
            console.log('false')
            text.style.backgroundColor = "red"
            result2.innerHTML = 'Incorrect'
        }
    }
    

})