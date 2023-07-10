//set year in footer 
const footerDate = document.querySelector("#date");
footerDate.innerHTML = new Date().getFullYear();

let projectContainer = document.querySelector('#projects');

let projects = [
    {
        id:1,
        title:'Random Problem Selector',
        info:'This program using codeforces APIs to select a random problem to solve from codeforces website. We can also apply the filters to select the difficulty of problem and type of problem',
        codeLink:'https://github.com/vrushali-d/vrushali-d.github.io/tree/master/RandomProblem',
        demoLink:'./RandomProblem/index.html',

    },
    {
        id:2,
        title:'Rotate Square',
        info:'This program shows how we can rotate square. There is controller which we can use to rotate square by some angle. Rotation matrix is used in this program',
        codeLink:'https://github.com/vrushali-d/vrushali-d.github.io/tree/master/RotateSquare',
        demoLink:'./RotateSquare/RotateSquare.html',
    },
    {
        id:3,
        title:'Flexbox Playground',
        info:'There is flexbox layout in CSS.This program shows how we can align items using different flexbox properties',
        codeLink:'https://github.com/vrushali-d/vrushali-d.github.io/tree/master/AlignCSSFlexContainer',
        demoLink:'./AlignCSSFlexContainer/index.html',
    }
];

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