document.getElementById('button').addEventListener('click', async function() {
    let reponse = await fetch("expression.txt");
    console.log(reponse);
    let text = await reponse.text();
    console.log(text);
    $("p").text(text);
});