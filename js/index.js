function inicia_modal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

// CONSTUÇÃO
// const div = document.createElement("div");
// var body = document.querySelector("body");
// body.appendChild(div);
// div.classList.add("modal_container");
// CONSTUÇÃO

const janela = document.querySelector('#html5');
janela.addEventListener('click', () => {
    inicia_modal('modal_janela');
})

const janela1 = document.querySelector('#css3');
janela1.addEventListener('click', () => {
    inicia_modal('modal_janela1');
})

const janela2 = document.querySelector('#js');
janela2.addEventListener('click', () => {
    inicia_modal('modal_janela2');
})

const janela3 = document.querySelector('#wordpress');
janela3.addEventListener('click', () => {
    inicia_modal('modal_janela3');
})

const janela4 = document.querySelector('#github');
janela4.addEventListener('click', () => {
    inicia_modal('modal_janela4');
})

const janela5 = document.querySelector('#figma');
janela5.addEventListener('click', () => {
    inicia_modal('modal_janela5');
})

const janela6 = document.querySelector('#ux');
janela6.addEventListener('click', () => {
    inicia_modal('modal_janela6');
})