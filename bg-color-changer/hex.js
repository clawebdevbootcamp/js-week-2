// If you want to make a random color
// Arrays are list of items defined by a square bracket
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Grab the elements you need
const btn = document.getElementById('btn')
const colorText = document.querySelector('.color')

btn.addEventListener('click', () => {
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
        // Add caracters 6 times
        hexColor += hex[getRandomNumber()]
    }

    colorText.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length) // 0 - 15
}