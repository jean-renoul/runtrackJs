document.getElementById('updateButton').addEventListener('click', fetchJson);

async function fetchJson() {
    const reponse = await fetch("utilisateur.json");
    const data = await reponse.json();
    document.getElementById('tableBody').innerHTML = data.map(user => {
        return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.firstname}</td>
            <td>${user.email}</td>
        </tr>`;
    }).join('');
}