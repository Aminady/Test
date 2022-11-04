(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(81),o=e.n(t),s=e(645),a=e.n(s)()(o());a.push([n.id,'@font-face {\r\n    font-family: \'Barlow\';\r\n    font-style: italic;\r\n    font-weight: 200;\r\n    font-display: swap;\r\n    src: url(https://fonts.gstatic.com/s/barlow/v12/7cHsv4kjgoGqM7E_CfP04WouvTo.woff2) format(\'woff2\');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: \'Barlow\', \'CooperHewittThin\', sans-serif;\r\n}\r\n\r\n.nav-bar {\r\n    padding: 10px;\r\n    height: 50px;\r\n    width: 100%;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.add-profile {\r\n    width: 250px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    justify-items: end;\r\n}\r\n\r\n\r\n#add-svg {\r\n    cursor: pointer;\r\n    width: 25px;\r\n    transition: transform linear 100ms;\r\n}\r\n\r\n#add-projects {\r\n        cursor: pointer;\r\n        width: 40px;\r\n        border: 4px solid white;\r\n        transition: transform linear 100ms;      \r\n}\r\n\r\n#add-svg:hover, #add-projects:hover {\r\n    transform: scale(1.2) rotate(180deg);\r\n    \r\n}\r\n\r\n#profile-svg {\r\n    cursor: pointer;\r\n    width: 25px;\r\n    background: white;\r\n    border: 2px solid white;\r\n    transition: transform linear 100ms;\r\n}\r\n\r\n.trash-svg, .trash-project {\r\n    cursor: pointer;\r\n    width: 15px;\r\n    height: 15px;\r\n    grid-column: 4;\r\n}\r\n\r\n.trash-svg:hover, .trash-project:hover {\r\n    fill: red;\r\n}\r\n\r\n.add-delete-project {\r\n    width: 50px;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.add-subtask {\r\n    cursor: pointer;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n.add-subtask:hover {\r\n    fill: blue;\r\n}\r\n\r\n#profile-svg:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n#search {\r\n    width: 400px;\r\n    height: 25px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n.add-btn {\r\n    font-size: 30px;\r\n    font-weight: bolder;\r\n    cursor: pointer;\r\n}\r\n\r\n/*MAIN CONTAINER*/\r\n\r\n.main-container {\r\n    margin-top: 150px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n\r\n.tasks-projects-container {\r\n    border-left: 1px solid black;\r\n    height: 100%;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.tasks-title {\r\n    margin-bottom: 30px;\r\n    gap: 300px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n    justify-content: space-between;\r\n    }\r\n\r\n.tasks-checkbox {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr 1fr;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.tasks-checkbox:hover {\r\n    animation-name: dashing;\r\n    animation-duration: 0.5s;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.tasksInProjectstitle{\r\n    border-bottom: 2px solid black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n}\r\n\r\n\r\n.project-header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    margin-bottom: 30px;\r\n}\r\n/*///////////////////////////CHECKBOX//////////////////////////////*/\r\ninput[type="checkbox"] {\r\n    -webkit-appearance: none;\r\n    appearance: none;   \r\n    background-color: #fff;\r\n    margin: 0;\r\n    font: inherit;\r\n    color: currentColor;\r\n    width: 1.15em;\r\n    height: 1.15em;\r\n    border: 0.15em solid currentColor;\r\n    border-radius: 0.15em;\r\n    transform: translateY(-0.075em);\r\n    display: grid;\r\n    place-content: center;\r\n    \r\n    grid-column: 3;\r\n}\r\n\r\ninput[type="checkbox"]::before {\r\n    content: "";\r\n    width: 0.65em;\r\n    height: 0.65em;\r\n    transform: scale(0);\r\n    transition: 120ms transform ease-in-out;\r\n    box-shadow: inset 1em 1em var(--form-control-color);\r\n    background-color: CanvasText;\r\n    transform-origin: bottom left;\r\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n}\r\n\r\ninput[type="checkbox"]:checked::before {\r\n    transform: scale(1);\r\n}\r\n\r\ninput[type="checkbox"]:focus {\r\n    outline: max(2px, 0.15em) solid currentColor;\r\n    outline-offset: max(2px, 0.15em);\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/\r\n\r\n/*DASHBOARD PART*/\r\n\r\n.dashboard {\r\n    /* margin-top: 150px; */\r\n    /* margin-left: 10px; */\r\n    background-color: black;\r\n    color: white;\r\n    width: 250px;\r\n    height: 300px;\r\n    display: grid;\r\n    grid-template-rows: 2fr 1fr;\r\n    justify-items: start;\r\n    align-items: end;\r\n    box-shadow: 1px 5px 8px rgba(145, 144, 144, 0.589);\r\n}\r\n\r\n.dash-title {\r\n    align-self: center;\r\n}\r\n\r\n.dash-btns {\r\n    width: 100%;\r\n}\r\n\r\n.tasks, .projects {\r\n    width: 100%;\r\n    height: 30px;\r\n}\r\n\r\n.tasks:hover, .projects:hover {\r\n    animation-name: dash;\r\n    animation-duration: 0.5s;\r\n    animation-fill-mode: both;\r\n\r\n}\r\n\r\n@keyframes dash {\r\n    0%{}\r\n    100%{    background: white;\r\n        color: black;\r\n        box-shadow: 1px 5px 8px rgba(190, 189, 189, 0.589);\r\n        cursor: pointer;\r\n        font-size: 18px;}\r\n}\r\n@keyframes dashing {\r\n    0%{}\r\n    100%{    background: white;\r\n        color: black;\r\n        box-shadow: 1px 5px 8px rgba(238, 233, 233, 0.589);\r\n        cursor: pointer;\r\n        font-size: 18px;}\r\n}\r\n\r\n\r\n/*//////////////////////////////MODALE///////////////////////////////////////*/\r\n\r\n.modal {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    background: rgba(121, 117, 117, 0.582);\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\n.form {\r\n    z-index: 1;\r\n    bottom: 50%;\r\n    right: 50%;\r\n    transform: translateX(50%) translateY(50%);\r\n    position: fixed;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    height: 300px;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    background: white;\r\n    justify-content: center;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.project-form {\r\n    z-index: 1;\r\n    bottom: 50%;\r\n    right: 50%;\r\n    transform: translateX(50%) translateY(50%);\r\n    position: fixed;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    height: 300px;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: repeat(4, 1fr);\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    background: white;\r\n    justify-content: center;\r\n    align-items: end;\r\n    justify-items: center;\r\n}\r\n\r\ninput {\r\n    width: 200px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    background: black;\r\n    color: white;\r\n\r\n}\r\n\r\nselect {\r\n    width: 200px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    background: black;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    width: 150px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    background: black;\r\n    color: white;\r\n    cursor: pointer;\r\n    transition: transform linear 100ms;\r\n}\r\n\r\nbutton:hover {\r\n    transform: scale(1.2);\r\n    box-shadow: 1px 5px 8px rgba(95, 94, 94, 0.589);\r\n}\r\n\r\n.emptyProjects {\r\n    color: grey;\r\n    font-size: 18px;\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 760px) {\r\n    h1 {\r\n        font-size: 1.6em;\r\n        width: 100px;\r\n    }\r\n\r\n    .tasks-title {\r\n        gap: 200px;\r\n    }\r\n}',""]);const i=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var s={},a=[],i=0;i<n.length;i++){var c=n[i],d=t.base?c[0]+t.base:c[0],l=s[d]||0,p="".concat(d," ").concat(l);s[d]=l+1;var m=e(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)r[m].references++,r[m].updater(h);else{var u=o(h,t);t.byIndex=i,r.splice(i,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var s=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<s.length;a++){var i=e(s[a]);r[i].references--}for(var c=t(n,o),d=0;d<s.length;d++){var l=e(s[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}s=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var s=e.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var s=r[t]={id:t,exports:{}};return n[t](s,s.exports,e),s.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var t={};(()=>{e.d(t,{RX:()=>b,Dj:()=>k});var n=e(379),r=e.n(n),o=e(795),s=e.n(o),a=e(569),i=e.n(a),c=e(565),d=e.n(c),l=e(216),p=e.n(l),m=e(589),h=e.n(m),u=e(426),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;let g=new Date;function v(){return k.innerHTML=`\n    <div class="tasks-title">\n    <h1>Tasks</h1>\n    <h1>Due For</h1>\n    <svg id="add-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path class="add-svg" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>\n    </div>\n\n    <div class="tasks-checkbox"> \n    <label for="done">Wake Up</label>\n    <label for="done">${b(g)}</label>\n    <input type="checkbox" name="tasks" id="done">\n    <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path class="trash-svg" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>\n    </div>\n\n    <div class="tasks-checkbox"> \n    <label for="done">Feed the cats</label>\n    <label for="done">${b(g)}</label>\n    <input type="checkbox" name="tasks" id="done">\n    <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path class="trash-svg" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>\n  </div>\n`}function x(n,r,e){this.name=n,this.date=r,this.type=e}function b(n){return new Date(n).toLocaleDateString("fr-FR",{year:"numeric",month:"short",day:"numeric"})}document.querySelector(".project-modal-container"),function(){const n=document.createElement("div");document.body.appendChild(n),n.classList="nav-bar",n.innerHTML="\n    <h1>TASK AWAY</h1>\n    "}(),b();let w=document.createElement("div");document.body.appendChild(w),w.classList="main-container";const y=document.createElement("div");w.appendChild(y),y.classList="dashboard",y.innerHTML='\n    <h3 class="dash-title">TODO LIST</h3>\n    <div class="dash-btns">\n    <p class="tasks">My Tasks</p>\n    <p class="projects">My Projects</p>\n    </div>  \n    ';let k=document.createElement("div");w.appendChild(k),k.classList="tasks-projects-container",document.body.onload=v();let C=document.querySelector(".tasks"),H=document.querySelector(".projects");C.addEventListener("click",(()=>{v()})),H.addEventListener("click",(()=>{k.innerHTML='\n    <div class="project-header">\n    <h1>Projects</h1>\n    <svg id="add-projects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path class="add-projects" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>\n    </div>\n    \n    <div class="emptyProjects">\n    <p>You don\'t have any projects at the moment. </p>\n    </div>\n    '})),document.body.addEventListener("click",(n=>{console.log(n),"add-svg"==n.target.id||"add-svg"==n.target.className.baseVal?function(){const n=document.createElement("div");document.body.appendChild(n),n.classList="modal-container",n.innerHTML='\n      <div class="modal"></div>\n      <form class="form" action="" method="get">\n      <div class="input-container">\n      <input type="text" name="tasks-name" id="tasks-name" placeholder="Tasks" minlength="4" maxlength="20" required>\n      </div>\n      \n      <div class="input-container">\n      <input type="date" name="date" id="date">\n      </div>\n      \n      <button type="button" class="submit-task">Add to your list</button>\n      </form>\n      '}():"submit-task"==n.target.className?function(){const n=document.querySelector(".modal"),r=document.querySelector("#date"),e=document.querySelector("#tasks-name");[].push(new x(e.value,r.value)),n.parentNode.remove(),k.innerHTML+=`\n          <div class="tasks-checkbox"> \n          <label for="done">${e.value}</label>\n          <label for="done">${b(r.value)}</label>\n          <input type="checkbox" name="tasks" id="done">\n          <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>\n          </div>\n          `}():"trash-svg"==n.target.className.baseVal?n.target.parentElement.parentElement.remove():"add-projects"==n.target.className.baseVal?function(){const n=document.createElement("div");document.body.appendChild(n),n.classList="projects-modal-container",n.innerHTML='\n        <div class="modal"></div>\n        <form class="project-form" action="" method="get">\n        <div class="input-container">\n        <input type="text" name="title-name" id="title-name" placeholder="Project Title" required>\n        </div>\n        \n        <div class="input-container">\n        <input type="text" name="tasks-name" id="tasks-name" placeholder="Add a task to your project" required>\n        </div>\n\n        <div class="input-container">\n        <input type="date" name="date" id="date">\n        </div>\n    \n        <button type="button" class="submit-project">Add this project</button>\n        </form>\n        '}():"submit-project"==n.target.className?function(){const n=document.querySelector("#title-name"),r=document.querySelector("#tasks-name"),e=document.querySelector("#date"),t=document.querySelector(".emptyProjects"),o=document.querySelector(".modal");[].push(new x(n.value,r.value,e.value)),t.remove(),o.parentNode.remove(),k.innerHTML+=` \n  <div class="single-project-container">\n      <div class="tasksInProjectstitle">\n      <h3 class="h3">${n.value}</h3>\n      <div class="add-delete-project">\n        <svg id="add-svg" class="add-subtask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path class="add-svg" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>\n        <svg class="trash-project" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path class="trash-project" d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>\n      </div>\n      </div>\n      <div class="tasks-checkbox"> \n      <label for="done">${r.value}</label>\n      <label for="done">${b(e.value)}</label>\n      <input type="checkbox" name="tasks" id="done">\n      <svg class="trash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path class="trash-svg" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>\n      </div>\n      </div>\n  `,console.log(t)}():"trash-project"!=n.target.className&&"trash-project"!=n.target.className.baseVal||n.target.parentElement.parentElement.parentElement.remove()}))})()})();