const divEl = document.querySelector(".message");

function getLinkInfo() {
  const todosLinks = document.getElementsByTagName('a');
  const numeroLinks = todosLinks.length;
  const primerLink = todosLinks[0].href;
  const ultimoLink = todosLinks[todosLinks.length - 1].href;
  const mensaje = `Numero de Links: ${numeroLinks} <br>` +
                  `Primer link: ${primerLink}<br>` +
                  `Último link: ${ultimoLink}`;
  renderMessage(mensaje);
}


//Funcion para renderizar un mensaje
const renderMessage = (message) =>{
    const alert = `
    <div  class="alert alert-light" role="alert">
        ${message}
    </div>
    `;
    divEl.insertAdjacentHTML("afterbegin",alert);
}