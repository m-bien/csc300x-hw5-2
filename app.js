// create express app
const express = require('express');
const app = express();

// import jokebook data from homework5.pdf
let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
    {
        'joke': 'Why did the student eat his homework?',
        'response': 'Because the teacher told him it was a piece of cake!'
    },
    {
        'joke': 'What kind of tree fits in your hand?',
        'response': 'A palm tree'
    },
    {
        'joke': 'What is worse than raining cats and dogs?',
        'response': 'Hailing taxis'
    }
];
let lameJoke = [
    {
        'joke': 'Which bear is the most condescending?',
        'response': 'Pan-DUH'
    },
    {
        'joke': 'What would the Terminator be called in his retirement?',
        'response': 'The Exterminator'
    }
];

// middleware to parse json
app.use(express.json());

// GET jokebook categories endpoint
app.get("/jokebook/categories", (req, res) => {
    res.json(categories);
});

// GET jokes from specified category endpoint
app.get('/jokebook/joke/:category', (req, res) => {
    const category = req.params.category;
    const limit = req.query.limit;

    let jokeList;

    if (category === 'funnyJoke') {
        jokeList = funnyJoke;
    } else if (category === 'lameJoke') {
        jokeList = lameJoke;
    } else {
        return res({ 'error': `no category listed for ${category}` });
    }
    if (limit) {
        jokeList = jokeList.slice(0, limit);
    }
    res.json(jokeList)
});

// POST new joke to specified category endpoint
app.post('/jokebook/joke/new', (req, res) => {
    const { category, joke, response } = req.body;

    if (!category || !joke || !response || !categories.includes(category)) {
        return res.status(400).json({ 'error': 'invalid or insufficient user input' })
    }

    let jokeList;

    if (category === 'funnyJoke') {
        funnyJoke.push({ joke, response })
        jokeList = funnyJoke
    } else if (category === 'lameJoke') {
        lameJoke.push({ joke, response })
        jokeList = lameJoke
    }
    res.json(jokeList)
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT);