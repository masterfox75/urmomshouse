const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: "WHERE",
        questions:[
            {
                question:"Where was the indpendence signed?", 
                answers: ["New Amsterdam", "Washington DC"],
                correct: "New Amsterdam",
                level: "easy"
            },
            {
                question:"What continent is Austrailia in?", 
                answers: ["Austrailia", "Indonesia"],
                correct: "Indonesia",
                level: "medium"
            },
            {
                question:"At what border does Andorra lie?", 
                answers: ["Italy", "portrugal"],
                correct: "Italy",
                level: "hard"
            },

        ]
    },
    {
        genre:"WHEN",
        questions: [
            {
                question:"When did the usa declare independance?", 
                answers: ["1777", "1896"],
                correct: "1896",
                level: "easy"
            },
            {
                question:"When was Italy founded?", 
                answers: ["1942", "1886"],
                correct: "1886",
                level: "medium"
            },
            {
                question:"When was New Mexico founded?", 
                answers: ["1992", "2001"],
                correct: "2001",
                level: "hard"
            },
        ]
        
    },
    
    {
        genre:"DOES",
        questions: [
            {
                question:"Does Taiwan exist", 
                answers: ["No", "Yes"],
                correct: "No",
                level: "easy"
            },
            {
                question:"Does Soviet Russia Still Exist", 
                answers: ["No", "Yes"],
                correct: "No",
                level: "medium"
            },
            {
                question:"Do you have a Kid", 
                answers: ["Yes", "Not Anymore"],
                correct: "Not Anymore",
                level: "hard"
            },
        ]
        
    },

    {
        genre:"WHO",
        questions: [
            {
                question:"Who Took Your Kid", 
                answers: ["M̴̡̛͕̳̫̳͇͈͚̝̪̼̘̗̦͓̭͖̺͈͖̩̠̮̹̰̗̔͝ớ̷̡̨̢̨̛͉͍̫̻͙̞̫͍̬̭̝͔̘̀̈́̏̍̎̀̆̔̒̿̎̊͒̈̽̆́̿̕͘͜͠͝t̵̢͍͖͖̳͈͉̟̬͚̹̙̙̩̘̭̭͉̟̤̲̟̠̭̳̞͍̝͎́ͅh̶̢͓͖̳̤̫̻̩̙͇͚̜̦͙̝̪̺̦̆̂̇̑̏̓̔̒̓̑̍̀̇̄̇̕̚͠͝ĕ̸̙̥̘̣̊̾̍̉͝͠r̸̨̧̘̰͓̲̥͙̩̪͖̝͚̝̜̮̥͔̙͈̯͈̈́̉̔̋̀̾ͅ", "Me"],
                correct: "M̴̡̛͕̳̫̳͇͈͚̝̪̼̘̗̦͓̭͖̺͈͖̩̠̮̹̰̗̔͝ớ̷̡̨̢̨̛͉͍̫̻͙̞̫͍̬̭̝͔̘̀̈́̏̍̎̀̆̔̒̿̎̊͒̈̽̆́̿̕͘͜͠͝t̵̢͍͖͖̳͈͉̟̬͚̹̙̙̩̘̭̭͉̟̤̲̟̠̭̳̞͍̝͎́ͅh̶̢͓͖̳̤̫̻̩̙͇͚̜̦͙̝̪̺̦̆̂̇̑̏̓̔̒̓̑̍̀̇̄̇̕̚͠͝ĕ̸̙̥̘̣̊̾̍̉͝͠r̸̨̧̘̰͓̲̥͙̩̪͖̝͚̝̜̮̥͔̙͈̯͈̈́̉̔̋̀̾ͅ",
                level: "easy"
            },
            {
                question:"Who do we want to know about", 
                answers: ["M̴̡̛͕̳̫̳͇͈͚̝̪̼̘̗̦͓̭͖̺͈͖̩̠̮̹̰̗̔͝ớ̷̡̨̢̨̛͉͍̫̻͙̞̫͍̬̭̝͔̘̀̈́̏̍̎̀̆̔̒̿̎̊͒̈̽̆́̿̕͘͜͠͝t̵̢͍͖͖̳͈͉̟̬͚̹̙̙̩̘̭̭͉̟̤̲̟̠̭̳̞͍̝͎́ͅh̶̢͓͖̳̤̫̻̩̙͇͚̜̦͙̝̪̺̦̆̂̇̑̏̓̔̒̓̑̍̀̇̄̇̕̚͠͝ĕ̸̙̥̘̣̊̾̍̉͝͠r̸̨̧̘̰͓̲̥͙̩̪͖̝͚̝̜̮̥͔̙͈̯͈̈́̉̔̋̀̾ͅ", "You"],
                correct: "You",
                level: "medium"
            },
            {
                question:"f̴̷̶̵̷̸̷̡̳͎̤̹͓̠̣̬̱̅̊̑́̔̈́̑̍̔͝ḏ̷̸̴̸̶̸̲̗̳̦͇̍̎̐̉̓̈́̌̾͊͜͜ͅa̵̸̵̶̸̶̷̪͙̭̬̺̳̱̟̫̞̩̋͑̂̐̊̐̆́̇̈ģ̸̸̷̶̴̵̞͉̯̣͙̳̠̹͓̈́̒̓̂̽̂̀͌̽́ḩ̵̴̴̸̶̴̶̵̸̠̦̤̥̟͍̬̣̖̭̺͈͈̯͔̐̈́̿̎͑̒̽͋͗͋͌͑͐̅͒͝ͅf̶̷̵̴̷̴̸̧̨̦̩̜͔̯͚̮̼̫̿̐̂̎̀͋̓̀̌̍̕͜ḑ̷̷̴̶̶̸̸̛̦̫̜̹̲͉̤̱̺̞͊̽̇̂̏̈́͆͂́͑͝s̶̷̵̸̶̶͇͓̫̙͎̖̥͍̑̑̊̅̈͗̇̆̇͘͜ǎ̷̸̷̸̸̶̖̪̳̘̫͖̱͐̆͌̓́̀̀͗͜͝f̵̷̵̷̸̵̶̨̛̼̥̜̪̠̗̬͙͌̅̑̊̉̈́͛͑̐̉͝ͅd̸̸̶̷̷̶̨̫̮͓͈͈̙̪̳̜̝̂̑̓̿̌́̆͜͝a̶̸̶̷̶̶̶͚̰̣̱̥̰̘̝̭̫̔̐̂̐͌̊͆̆̅̏́͜g̸̸̵̴̴̵̡̧̫̩͕͇̺̫͌͒̽̄̀͐͛̿̃̚ḫ̶̴̸̵̸̶̶̷̷̢̧̛͕̬̱͖̖̭̱͈̟̯͉̮͐̆͂̿̒̈̀͗̓̈́̎͝͝͠f̴̷̷̸̷̴̴̢̢̧̠̬͚͉̮̼͓̔̓͛͋̈́̀͛̃̃̕͘d̶̷̶̷̷̴̵̢̤͎͓͖̤͉̯̺̜͐̒̇̀̃̏͑̑͛̄͠s̵̷̸̸̵̵̥͙͉̻̖͎̱͖͍̬͑̊̊̅̎́͐̓̚͠ḁ̵̸̸̵̶̸͇͉͓̘͚̟̱̝̹̈́̇̃̓͊̒͛̍", 
                answers: ["F̶̧̧̟̖̱̤͓͙̖̹͎̳̰̝̳̠̤̥̺̥̟̹̑́͜ā̵̫̝͕͙̩̑̎̈́̔̅͗̈͋͋̌̒̉̿̍̓̌̐̉̾̀͝ͅt̵̨̠͙̫̟̼͔̩͚̜̉̈́͛́̉͘͠h̵̡̡͖̖͎̻͇͔̼̜̯͈͓̤̳̬̤̫̰̺̬̠͔͕̩̽̎̊͆̏̽̐ͅe̴̡̡̲̼̗̘̮̰̪͎͑̌͐̈́̿̀̀̓̕͝͝r̶̨̧̨̠͖̘͈͔̟̣̠̙̮̳̳̲̰͙̻̟̖̖̖͚̟̍̆͊̇̃̔͆̽̊̐͗̅̊̒̀̂̏̑̌͘͜͠", "M̴̡̛͕̳̫̳͇͈͚̝̪̼̘̗̦͓̭͖̺͈͖̩̠̮̹̰̗̔͝ớ̷̡̨̢̨̛͉͍̫̻͙̞̫͍̬̭̝͔̘̀̈́̏̍̎̀̆̔̒̿̎̊͒̈̽̆́̿̕͘͜͠͝t̵̢͍͖͖̳͈͉̟̬͚̹̙̙̩̘̭̭͉̟̤̲̟̠̭̳̞͍̝͎́ͅh̶̢͓͖̳̤̫̻̩̙͇͚̜̦͙̝̪̺̦̆̂̇̑̏̓̔̒̓̑̍̀̇̄̇̕̚͠͝ĕ̸̙̥̘̣̊̾̍̉͝͠r̸̨̧̘̰͓̲̥͙̩̪͖̝͚̝̜̮̥͔̙͈̯͈̈́̉̔̋̀̾ͅ"],
                correct: "F̶̧̧̟̖̱̤͓͙̖̹͎̳̰̝̳̠̤̥̺̥̟̹̑́͜ā̵̫̝͕͙̩̑̎̈́̔̅͗̈͋͋̌̒̉̿̍̓̌̐̉̾̀͝ͅt̵̨̠͙̫̟̼͔̩͚̜̉̈́͛́̉͘͠h̵̡̡͖̖͎̻͇͔̼̜̯͈͓̤̳̬̤̫̰̺̬̠͔͕̩̽̎̊͆̏̽̐ͅe̴̡̡̲̼̗̘̮̰̪͎͑̌͐̈́̿̀̀̓̕͝͝r̶̨̧̨̠͖̘͈͔̟̣̠̙̮̳̳̲̰͙̻̟̖̖̖͚̟̍̆͊̇̃̔͆̽̊̐͗̅̊̒̀̂̏̑̌͘͜͠",
                level: "hard"
            },
        ]
        
    },
    {
        genre:"???",
        questions: [
            {
                question:"Yes", 
                answers: ["Maybe", "No"],
                correct: "No",
                level: "easy"
            },
            {
                question:"We have your kids", 
                answers: ["Beg", "To Us"],
                correct: "Beg",
                level: "medium"
            },
            {
                question:"Give Up On Your life", 
                answers: ["NO", "PLEASE"],
                correct: "NO",
                level: "hard"
            },
        ]
        
    },
] 

function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card');
        column.append(card)

        if (question.level === 'easy') {
            card.innerHTML = 1
        }

        if (question.level === 'medium') {
            card.innerHTML = 2
        }

        if (question.level === 'hard') {
            card.innerHTML = 3
        }

        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer1', question.answers[0])
        card.setAttribute('data-answer2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    })

}

let score = 0

jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "30px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstbutton = document.createElement('button')
    const secondbutton = document.createElement('button')
    firstbutton.classList.add('first-button')
    secondbutton.classList.add('second-button')
    firstbutton.innerHTML = this.getAttribute('data-answer1')
    secondbutton.innerHTML = this.getAttribute('data-answer2')
    firstbutton.addEventListener('click', getResult)
    secondbutton.addEventListener('click', getResult)
    this.append(textDisplay, firstbutton, secondbutton)
    
    const allCard = Array.from(document.querySelectorAll('.card'))
    allCard.forEach(card => card.removeEventListener('click', flipCard))
}

function getResult() {

    const allCards = Array.from(document.querySelectorAll('.card'))

    allCards.forEach(card => card.addEventListener('click', flipCard))

 

    const cardOfButton = this.parentElement

 

    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {

        score = score + parseInt(cardOfButton.getAttribute('data-value'))

        scoreDisplay.innerHTML = score

        cardOfButton.classList.add('correct-answer')

        setTimeout(() => {

            while (cardOfButton.firstChild) {

                cardOfButton.removeChild(cardOfButton.lastChild)

            }

            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')

        }, 100)

    } else {

        cardOfButton.classList.add('wrong-answer')

        setTimeout(() => {

            while (cardOfButton.firstChild) {

                cardOfButton.removeChild(cardOfButton.lastChild)

            }

            cardOfButton.innerHTML = 0

        }, 100)

    }

    cardOfButton.removeEventListener('click', flipCard)

}