const inputTag = document.querySelector('.input')
const sortTag = document.querySelector(".sort")
const saveTag = document.querySelector(".save")
const nameList = document.querySelector('.text_name')

let arr = []
saveTag.addEventListener('click', () =>{
    let name =  inputTag.value
    arr = [...arr, name.toUpperCase()]
    inputTag.value = ''
    localStorage.setItem('name', JSON.stringify(arr))
    nameList.innerHTML = JSON.parse(localStorage.getItem('name'))
})

sortTag.addEventListener('click', (ev) =>{
    ev.preventDefault()
    if(ev.target.dataset.id == 1){
        nameList.innerHTML = arr.sort()
        ev.target.dataset.id = 2
    } else{
        nameList.innerHTML = arr.sort().reverse()
        ev.target.dataset.id = 1
    }
})



    

    






