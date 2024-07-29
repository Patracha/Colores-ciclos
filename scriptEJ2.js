let box = document.querySelector("#caja")
for (let i=1; i<=6 ;i++){
    let botonID = 'btn-' +i; 
    let botonActual = document.getElementById(botonID);
    botonActual.addEventListener("click", function(){
        let colorSelecionado = botonActual.style.backgroundColor;
        box.style.backgroundColor = colorSelecionado; 
    })
}

 


