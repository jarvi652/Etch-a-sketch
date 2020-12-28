const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const container=document.querySelector('.container')


function createGrid(size){
    totalSquares = size * size
    for(let i =0; i < totalSquares; i++){
        const newbox = document.createElement('div')
        newbox.classList.add('box')
        container.appendChild(newbox)
        newbox.addEventListener('mouseover', (e) =>{
            newbox.style.backgroundColor = 'black'
        })
    }
    document.documentElement.style.setProperty("--rowNum", size)
    document.documentElement.style.setProperty("--colNum", size)
    
}
function resetGrid(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
createGrid(16)
start.addEventListener('click', (e)=>{
    newsize = prompt('Please enter the size of the grid(max 64):')
    if(newsize <= 64){
        createGrid(newsize)
    } else if (newsize > 64) {
        alert('limit exceded. Please Try Again:')
    } 
})
reset.addEventListener('click',(e)=>{
    resetGrid()
})