import project from './projectInfo.js';
//set year in footer 
const footerDate = document.querySelector("#date");
footerDate.innerHTML = new Date().getFullYear();
//set toggle button
let toggleBtn = document.querySelector('.toggle-btn');
let linksDiv =  document.querySelector('.links');

toggleBtn.addEventListener('click',()=>{
    linksDiv.classList.toggle('show-links');

});

let projectContainer = document.querySelector('#projects');
let projects = project.projects;
let projectsEls = projects.map((p)=>{
    return `<div class="card-container">
    <div class="heading">
        <h1>${p.title}</h1>
    </div>
    <img id="think" src="./images/html.svg" />
    <p>${p.info}
    </p>
    <div class="project-content">
        <a href='${p.codeLink}' target='_blank'>Code</a>
        <a href='${p.demoLink}'>Demo</a>
    </div>
</div>`;
});
projectContainer.innerHTML = projectsEls.join('');