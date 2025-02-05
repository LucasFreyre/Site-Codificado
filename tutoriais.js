const tutoriais = [
    {
      name: 'Tudo sobre transform',
      text: 'Quando quis aprender animation scroll, vi que isso ia ser a primeira coisa pra eu aprender, então aqui está tudo que eu aprendi de transform',
      paragrafo: 'transformP',
      lerMais: 'lerMais', // Unique ID for the first button
      conteudo: 'conteudo',
      link: '../Transform/transform.html'
    },
    {
      name: 'Tudo sobre transition',
      text: 'Quando quis aprender animation scroll, vi que isso ia ser a primeira coisa pra eu aprender, então aqui está tudo que eu aprendi de transform',
      paragrafo: 'transitionP',
      lerMais: 'lerMais2', // Unique ID for the second button
      conteudo: 'conteudo2',
    }
  ];
  let tudoHTML = '';
  const conteudos = document.querySelector('.conteudos')
  tutoriais.forEach((tutorial) => {
    tudoHTML+= `
    <div class="${tutorial.conteudo}">
        <div class="card"
        <a class='botoes' href="transform.html">a</a>
        <p class="${tutorial.paragrafo}">${tutorial.text}</p>
        </div>
        <button onclick='lerMais('.conteudo')' class="${tutorial.lerMais}">Ler mais</button>
    </div>
  `;
  })
  conteudos.innerHTML = tudoHTML
  
