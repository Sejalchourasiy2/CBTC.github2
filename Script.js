let listcontainer = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')

function addTask(){
  if(inputBox.value === ''){
    alert('Add Your Task')
  }
  else{
    let task = document.createElement('li')
    task.textContent = inputBox.value
    listcontainer.appendChild(task)

    let span = document.createElement('span');
    span.textContent ='\u00d7';
    task.appendChild(span)
  }
  inputBox.value = ''
  saveData()
}

listcontainer.addEventListener('click', (el)=>{
  if(el.target.tagName == 'LI'){
    el.target.Classlist.toggle('checked')
  }

  else if(el.target.tagName == 'SPAN'){
    el.target.parentElement.remove()
    saveData()
  }

})

function saveData(){
  localStorage.setItem("tasks",listcontainer.innerHTML)
}

function showdata(){
  listcontainer.innerHTML = localStorage.getItem('tasks')
}

showdata()