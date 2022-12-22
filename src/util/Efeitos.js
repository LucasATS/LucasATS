const Hover3D = (elemento, sensibilidade = 15, classe = '.CardHover') => {
    const link = document.querySelectorAll(classe);

    const animateit = function (e) {
        const elmnto = this.querySelector(elemento);

        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = elmnto,
            xMove = x / width * (sensibilidade * 2) - sensibilidade,
            yMove = y / height * (sensibilidade * 2) - sensibilidade;

        elmnto.style.transform = `rotateY(${xMove}deg) rotateX(${yMove}deg)`;
        if (e.type === 'mouseleave') elmnto.style.transform = '';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
}

const HoverDrag = (elemento, sensibilidade = 15, classe = '.hover-this') => {
    const link = document.querySelectorAll(classe);

    const animateit = function (e) {
        const elmnto = this.querySelector(elemento);

        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            xMove = x / width * (sensibilidade * 2) - sensibilidade,
            yMove = y / height * (sensibilidade * 2) - sensibilidade;
        elmnto.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') elmnto.style.transform = '';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
}

export { Hover3D, HoverDrag };