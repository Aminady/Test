import './style.css';
import {injectProjects, injectTasks, createTaskModal, submitTasksModal} from './createDOMElement';

function setTheme() {
    const root = document.documentElement;
      const newTheme = root.className === 'dark' ? 'light' : 'dark';
      root.className = newTheme;
};

(function createNavBar() {
    const navContainer = document.createElement('div');
    document.body.appendChild(navContainer)
    navContainer.classList = "nav-bar"
    return navContainer.innerHTML = `
    <h1>TASK AWAY</h1>
    `
})();

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return newDate;
  }
  
dateParser()
  let mainContainer = document.createElement('div')
  document.body.appendChild(mainContainer)
  mainContainer.classList = "main-container"

  
  
    const dashboard = document.createElement('div');
    mainContainer.appendChild(dashboard);
    dashboard.classList = 'dashboard';
    dashboard.innerHTML = `
    <h3 class="dash-title">TODO LIST</h3>
    <div class="dash-btns">
    <p class="tasks">My Tasks</p>
    <p class="projects">My Projects</p>
    </div>  
    `  
    
    let tasksProjectsContainer = document.createElement('div');
    mainContainer.appendChild(tasksProjectsContainer);
    tasksProjectsContainer.classList = 'tasks-projects-container'


    document.body.onload = injectTasks();

    let sideNavTaskBtn = document.querySelector('.tasks');
    let sideNavProjectBtn = document.querySelector('.projects');
    sideNavTaskBtn.addEventListener('click', () => {  injectTasks();})
    sideNavProjectBtn.addEventListener('click', () => {  injectProjects();})

    // let NewTaskModal = document.querySelector('#add-svg')
    // NewTaskModal.addEventListener('click', () => {
    //   createTaskModal()
    // })
    
    document.body.addEventListener('click', (e) => {
      console.log(e);
      if(e.target.id == 'add-svg') {
        createTaskModal()
        console.log('add');
      } else if(e.target.className == "submit-task"){
        submitTasksModal()
        console.log('submit');
      } else if(e.target.className.baseVal == "trash-svg") {
        e.target.parentElement.parentElement.remove()
        console.log("TRASH");
      }
    })
    export {mainContainer, tasksProjectsContainer, dateParser}
