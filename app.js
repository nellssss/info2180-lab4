document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('button').addEventListener('click', function() {
        fetch("superheroes.php")
       .then(response => response.text())
        .then(data => {
            alert(data);
        })
});
});
