console.log('Can you see me?')

let characters = [];

let list = document.getElementById('list')
let search = document.querySelector('input')

fetch('https://swapi.co/api/planets')
.then(response => response.json())
.then(response => {
    characters.push(...response.results)
    render();
});


function render () {
    let html = characters.map(val => `<li>${val.name}</li>`).join('');
    list.innerHTML = html;
  }

function filterText() {
    const filtered = characters
        .filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
        .map(val => `<li>${val.name}</li>`)

    if (filtered.length) {
        render(filtered)
    }
}

function render(array) {
    const html = array.join('');
    list.innerHTML = html;
}

search.addEventListener('keyup', filterText);