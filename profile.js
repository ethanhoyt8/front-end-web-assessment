let favColor = document.querySelector('#color')

const color = () => {
    alert('My favorite color is purple')
}

favColor.addEventListener('click', color)

let favPlace = document.querySelector('#place')

const place = () => {
    alert('My favorite place is Jamaica')
}

favPlace.addEventListener('mouseover', place)

let favRitual = document.querySelector('#ritual')

const ritual = () => {
    alert('My favorite ritual is sleeping')
}

favRitual.addEventListener('dblclick', ritual)