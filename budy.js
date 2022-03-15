const loadBudies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBudies(data))
}
const displayBudies = (data) => {
    const budies = data.results;
    const budiesContainer = document.getElementById('budies');
    for (const budy of budies) {

        const p = document.createElement('p');
        p.innerText = `Name : ${budy.name.title} ${budy.name.first} ${budy.name.last}
        Email : ${budy.email}`;
        budiesContainer.appendChild(p);
        // const name = budy.name.first;
        // console.log(budy.name.title, name, budy.name.last);


    }
}