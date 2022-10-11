
function abrirCerrar1() {
    let estilo = document.getElementById("collaps1")
    if (estilo.style.display == "none") {
        estilo.style.display= "block"
    } else {
        estilo.style.display = "none"
    }
}

function abrirCerrar2() {
    let estilo = document.getElementById("collaps2")
    if (estilo.style.display == "none") {
        estilo.style.display= "block"
    } else {
        estilo.style.display = "none"
    }
}

function abrirCerrar3() {
    let estilo = document.getElementById("collaps3")
    if (estilo.style.display == "none") {
        estilo.style.display= "block"
    } else {
        estilo.style.display = "none"
    }
}


function abrirCerrar4() {
    let estilo = document.getElementById("collaps4")
    if (estilo.style.display == "none") {
        estilo.style.display= "flex"
    } else {
        estilo.style.display = "none"
    }
}


function abrirCerrar5() {
    let estilo = document.getElementById("collaps5")
    if (estilo.style.display == "none") {
        estilo.style.display= "flex"
    } else {
        estilo.style.display = "none"
    }
}



//funciones para modificar el parrafo y agregarlo
function cambiarParrafo1 () {
    let texto = document.getElementById("text-acercade").innerText
    console.log(texto)
}
function myFunction1(valor) {
    document.getElementById("text-acercade").innerText = valor
}


