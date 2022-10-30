import { mainContainer, tasksProjectsContainer, dateParser} from ".";

let date = new Date();

function injectTasks () {
    return tasksProjectsContainer.innerHTML = `
    <div class="tasks-title">
    <h1>Tasks</h1>
    <h1>Due For</h1>
    <svg id="add-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
    </div>

    <div class="tasks-checkbox"> 
    <label for="done">Wake Up</label>
    <label for="done">${dateParser(date)}</label>
    <input type="checkbox" name="tasks" id="done">
    <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="trash-svg" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    </div>

    <div class="tasks-checkbox"> 
    <label for="done">Feed the cats</label>
    <label for="done">${dateParser(date)}</label>
    <input type="checkbox" name="tasks" id="done">
    <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="trash-svg" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
  </div>
`
}

function injectProjects() {
  return tasksProjectsContainer.innerHTML = `
    <div class="project-header">
    <h1>Projects</h1>
    <svg id="add-projects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
    </div>
    
    <div class="emptyProjects">
    <p>You don't have any projects at the moment. </p>
    </div>
    `
}

function createTaskModal(){ 

  const modalContainer = document.createElement('div') 
  document.body.appendChild(modalContainer)
  modalContainer.classList = "modal-container"
  modalContainer.innerHTML = `
      <div class="modal"></div>
      <form class="form" action="" method="get">
      <div class="input-container">
      <input type="text" name="tasks-name" id="tasks-name" placeholder="Tasks" minlength="4" maxlength="20" required>
      </div>
      
      <div class="input-container">
      <input type="date" name="date" id="date">
      </div>
      
      <button type="button" class="submit-task">Add to your list</button>
      </form>
      `
      // <div>
      // <select name="tasks-or-projects" id="tasks-or-projects">
      //     <option value="tasks-or-projects">Task or Project ?</option>
      //     <option value="tasks-option">My Tasks</option>
      //     <option value="projects-option">My Projects</option>
      // </select>
      // </div>
      
  const modal = document.querySelector('.modal');

  modal.addEventListener("click", () => {
      modal.parentNode.remove();
  });

}

function newModal (name, date, type) {
    this.name = name;
    this.date = date;
    this.type = type
};
function submitTasksModal() {
  const modal = document.querySelector('.modal');
  const dateInput = document.querySelector('#date');
  const tasksName = document.querySelector('#tasks-name');
  
      let tasksArray = [];

          tasksArray.push(new newModal(tasksName.value, dateInput.value))
          modal.parentNode.remove();

          return tasksProjectsContainer.innerHTML += 
          `
          <div class="tasks-checkbox"> 
          <label for="done">${tasksName.value}</label>
          <label for="done">${dateParser(dateInput.value)}</label>
          <input type="checkbox" name="tasks" id="done">
          <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </div>
          `      
}

  
  export {injectProjects, injectTasks, createTaskModal, submitTasksModal};