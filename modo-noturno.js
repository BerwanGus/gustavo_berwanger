document.addEventListener('DOMContentLoaded', function () {
  const body = document.body
  const header = document.header
  const toggleButton = document.getElementById('toggleNightMode')
  const borderSection = document.querySelector('.border')
  const headerSection = document.querySelector('.header')

  const setNightMode = () => {
    body.style.backgroundColor = 'rgb(50, 50, 50)'
    body.style.color = '#fff'
    borderSection.style.backgroundColor = 'rgb(50, 50, 50)'
    borderSection.style.color = '#fff'
    toggleButton.innerHTML =
      '<img src="/imgs/brilho-do-sol.png" alt="Day Mode" style="width: 32px; height: 32px;">'
    // Adiciona estilos específicos para a seção border
  }

  const setDayMode = () => {
    body.style.backgroundColor = '#f5f5f5'
    body.style.color = 'black'
    borderSection.style.backgroundColor = ''
    borderSection.style.color = ''
    toggleButton.innerHTML =
      '<img src="/imgs/lua-crescente.png" alt="Night Mode" style="width: 32px; height: 32px;">'
    // Remove estilos específicos da seção border
  }

  toggleButton.addEventListener('click', function () {
    const isNightMode = body.style.backgroundColor === 'rgb(50, 50, 50)'
    if (isNightMode) {
      setDayMode()
    } else {
      setNightMode()
    }
  })

  const letters = ['A', 'i', 'r', 'f', 'l', 'y']

  logo = document.querySelector('.text-logo')
  letters.forEach(letter =>{
    logo.innerHTML += letter
  })
  logo.style.color = '#f0f8ff'
})
