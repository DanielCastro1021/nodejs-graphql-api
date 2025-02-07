const GRAPHQL_URL = 'http://localhost:4000/graphql';

async function fetchGreeting() {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ greeting }' }),
    });
    const { data } = await response.json();
    console.log(data.greeting);
    return data.greeting;
}

fetchGreeting().then(greeting => {
    const title = document.createElement('h1');
    title.textContent = greeting;
    const centerDiv = document.querySelector('.center');
    centerDiv.append(title);
}
);
