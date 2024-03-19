// random joke
document.getElementById('getRandomJoke').addEventListener('click', getRandomJoke);

// this doesn't even work I give up
function getRandomJoke() {
    try {
        fetch(`http://localhost:3000/jokebook/categories`)
            .then(response => response.json())
            .then(categories => {

                const randomCategory = categories[Math.floor(Math.random() * categories.length)];

                fetch(`http://localhost:3000/jokebook/categories/${randomCategory}`)
                    .then(response => { return response.json() })
                    .then(jokes => {

                        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                        document.getElementById('showJoke').innerText = `${randomJoke.joke} - ${randomJoke.response}`;
                    })
            })
    } catch (err) {
        console.log(err, 'Error fetching joke');
        document.getElementById('showJoke').innerText = "Error. No joke for you.";

    }
}

// mental energy: depleted
// rip this joke assignment
