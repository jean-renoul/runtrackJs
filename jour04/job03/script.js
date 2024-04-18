document.getElementById('filtrer').addEventListener('click', async function() {
    $('ul').remove();
    let reponse = await fetch("pokemon.json");
    let data = await reponse.json();

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    console.log(id, name, type);
    
    // Iterate over the keys of the data object
    Object.keys(data).forEach(key => {
        let pokemon = data[key];
        // Check if the current Pokemon matches the filter criteria
        if ((id === '' || pokemon.id == id) && (name === '' || pokemon.name.english.toLowerCase().includes(name.toLowerCase())) && (type === '' || pokemon.type.includes(type))) {
            displayPokemon(pokemon);
        }        
    });
});

function displayPokemon(pokemon) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.textContent = pokemon.id + " | " + pokemon.name.english + " | " + pokemon.type;
    ul.appendChild(li);
    document.body.appendChild(ul);
}
