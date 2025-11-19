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
    });
});
