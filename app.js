/*document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('button').addEventListener('click', function() {
        const dres = document.getElementById('result');
        const userfld = document.getElementById('searchbar').trim();


        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(res => res.text())
            .then data => {
                dres.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
            });

});*/

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('button').addEventListener('click', function(){
        
        const disRes = document.getElementById('result');
        const userfld = document.getElementById('searchbar').value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(userfld))
        .then(res => res.text())
        .then(data => {
            disRes.innerHTML = data;
        })
        .catch(error => {
                console.error(error);
            });
    })
})
