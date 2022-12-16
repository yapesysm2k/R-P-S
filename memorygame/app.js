const cardArray = [
    {
        name: 'BTC',
        img: 'images/bitcoin.png',
    },
    {
        name: 'DOGE',
        img: 'images/dogecoin.png',
    },
    {
        name: 'ETH',
        img: 'images/ethereum.png',
    },
    {
        name: 'BTC',
        img: 'images/bitcoin.png',
    },
    {
        name: 'DOGE',
        img: 'images/dogecoin.png',
    },
    {
        name: 'ETH',
        img: 'images/ethereum.png',
    }
]

cardArray.sort(() => 0.5 - Math.random()) // shortcut that shuffles array randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

console.log(gridDisplay)

function createBoard () {
    for (let i=0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }    
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/snowman.png')
        cards[optionTwoId].setAttribute('src', 'images/snowman.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert ('Sorry try again!') 
    }

    resultDisplay.textContent = cardsWon.length
        cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500) //timing event, call a function after certain timed has passed
    }

}