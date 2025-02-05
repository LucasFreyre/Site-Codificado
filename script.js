const botao = document.querySelector('.lerMais')
botao.addEventListener('click', () => {
  const conteudo = document.querySelector('.conteudo')
  conteudo.classList.toggle('ativo')
  document.querySelector('.transformP').classList.toggle('apareceu')
  if (conteudo.classList.contains('ativo')) {
    return document.querySelector('.lerMais').textContent = 'Ler menos';
}
  document.querySelector('.lerMais').textContent = 'Ler Mais'
})

const botao2 = document.querySelector('.lerMais2')
botao2.addEventListener('click', () => {
  const conteudo = document.querySelector('.conteudo2')
  const transition = document.querySelector('.transitionP')
  const leMaisbutton = document.querySelector('.lerMais2')
  conteudo.classList.toggle('ativo2')
  transition.classList.toggle('apareceu2')
  if (conteudo.classList.contains('ativo2')) {
    return leMaisbutton.textContent = 'Ler menos';
}
  leMaisbutton.textContent = 'Ler Mais'
})
