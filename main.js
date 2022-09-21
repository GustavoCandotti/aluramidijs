function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado')
    }

    if (elemento != null) {

        if(elemento.localName === 'audio'){
                elemento.play();
        }
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0; FOI INTRODUZIDO NO LOCAL DO FOR

//while 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //console.log(instrumento);

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    //contador = contador + 1; FOI USADO contador++ no seu local

    //console.log(contador);
}