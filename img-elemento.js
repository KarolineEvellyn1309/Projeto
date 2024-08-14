class imgElemento extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const imgSrc = this.getAttribute('src');
        const imgAlt = this.getAttribute('alt');
        const imgId = this.getAttribute('id'); 

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = imgAlt;

        if (imgId) {
            const link = document.createElement('a');
            link.href = `Apresentação do Produto.html?id=${imgId}`; // Define o href com o id
            link.appendChild(img);
            this.appendChild(link);
        } else {
            this.appendChild(img);
        }
    }
}

customElements.define('img-elemento', imgElemento);
