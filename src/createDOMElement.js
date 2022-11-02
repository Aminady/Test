import { mainContainer, tasksProjectsContainer, dateParser} from ".";

let date = new Date();
var modal = document.querySelector('.modal');

function injectTasks () {
    return tasksProjectsContainer.innerHTML = `
    <div class="tasks-title">
    <h1>Tasks</h1>
    <h1>Due For</h1>
    <svg id="add-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="add-svg" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
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
    <svg id="add-projects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="add-projects" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
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
      
  var modal = document.querySelector('.modal');

  modal.addEventListener("click", () => {
      modal.parentNode.remove();
  });

}

function createProjectModal() {
  const projectsModalContainer = document.createElement('div') 
  document.body.appendChild(projectsModalContainer)
  projectsModalContainer.classList = "projects-modal-container";

  projectsModalContainer.innerHTML = `
        <div class="modal"></div>
        <form class="project-form" action="" method="get">
        <div class="input-container">
        <input type="text" name="title-name" id="title-name" placeholder="Project Title" required>
        </div>
        
        <div class="input-container">
        <input type="text" name="tasks-name" id="tasks-name" placeholder="Add a task to your project" required>
        </div>

        <div class="input-container">
        <input type="date" name="date" id="date">
        </div>
    
        <button type="button" class="submit-project">Add this project</button>
        </form>
        `
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

function submitProjectModal() {

  const titleName = document.querySelector('#title-name');
  const taskName = document.querySelector('#tasks-name');
  const dateInput = document.querySelector('#date');
  const emptyProjects = document.querySelector('.emptyProjects');

  
      let projectsArray = [];
      projectsArray.push(new newModal(titleName.value, taskName.value, dateInput.value));
      emptyProjects.remove();

      tasksProjectsContainer.innerHTML += 
  ` 
      <div class="tasksInProjectstitle">
      <h3 class="h3">${titleName.value}</h3>
      <div class="add-delete-project">
        <svg id="add-svg" class="add-subtask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="add-svg" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        <svg class="trash-project" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="trash-project" d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>
      </div>
      </div>
      <div class="tasks-checkbox"> 
      <label for="done">${taskName.value}</label>
      <label for="done">${dateParser(dateInput.value)}</label>
      <input type="checkbox" name="tasks" id="done">
      <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
      </div>
  `
  // modal.parentNode.remove();

//   modal.addEventListener("click", () => {
//     modal.parentNode.remove();
// });
};

  
  export {injectProjects, injectTasks, createTaskModal, createProjectModal, submitTasksModal, submitProjectModal};