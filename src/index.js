import './style.css';
import {injectProjects, injectTasks, createTaskModal, createProjectModal , submitTasksModal, submitProjectModal} from './createDOMElement';

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
    
    document.body.addEventListener('click', (e) => {
      console.log(e);
      if(e.target.id == 'add-svg' || e.target.className.baseVal == 'add-svg') {
        createTaskModal()
      } else if(e.target.className == "submit-task"){
        submitTasksModal()
      } else if(e.target.className.baseVal == "trash-svg") {
        e.target.parentElement.parentElement.remove()
      } else if(e.target.className.baseVal == "add-projects") {
        createProjectModal()
      } else if(e.target.className == "submit-project") {
        submitProjectModal()
      } else if(e.target.className == "trash-project" || e.target.className.baseVal == "trash-project") {
        e.target.parentElement.parentElement.parentElement.remove();

      }
    })
    export {mainContainer, tasksProjectsContainer, dateParser}
