const textarea = document.getElementById('inputText')
const saveButton = document.getElementsByClassName('btn-primary')[0]
const deleteButton= document.getElementsByClassName('btn-warning')[0]


saveButton.addEventListener('click', function(){
    console.log('salvato')
    const content = textarea.value 
    console.log('content', content)
    localStorage.setItem('notepad-memory', content)
  alert('contenuto salvato!')
  nome()
})
deleteButton.addEventListener('click', function () {
    console.log('eliminato')
    textarea.value = ''
    localStorage.removeItem('notepad-memory')
    alert('eliminato')
    nome()
  })
  const nome = function () {
    const nomeSalvato = localStorage.getItem('notepad-memory')
    const addName = document.getElementById('savedName')
    if(nomeSalvato){
        addName.innerText= nomeSalvato
    }else{
        addName.innerText=''
    }
  }
  nome()