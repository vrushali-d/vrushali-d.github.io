let loading = false;
let baseURL = "https://codeforces.com/api/problemset.problems?lang=en&tags=";
let tags = [
    { value: "combine-tags-by-or", title: "*combine tags by OR" },
    { value: "2-sat", title: "2-satisfiability" },
    { value: "binary search", title: "Binary search" },
    { value: "bitmasks", title: "Bitmasks" },
    { value: "brute force", title: "Brute force" },
    { value: "chinese remainder theorem", title: "Сhinese remainder theorem" },
    { value: "combinatorics", title: "Combinatorics" },
    { value: "constructive algorithms", title: "Constructive algorithms" },
    { value: "dp", title: "Dynamic programming" },
    { value: "dsu", title: "Disjoint set union" },
    { value: "divide and conquer", title: "Divide and Conquer" },
    { value: "two pointers", title: "Two pointers" },
    { value: "trees", title: "Trees" },
    { value: "ternary search", title: "Ternary search" },
    { value: "strings", title: "strings" },
    { value: "data structures", title: "data structures" },
    { value: "sortings", title: "Sortings, orderings" },
    { value: "string suffix structures", title: "string suffix structures" },
    { value: "shortest paths", title: "shortest paths" },
    { value: "schedules", title: "Scheduling Algorithms" },
    { value: "probabilities", title: "probabilities" },
    { value: "number theory", title: "number theory" },
    { value: "meet-in-the-middle", title: "Meet-in-the-middle" },
    { value: "matrices", title: "matrices" },
    { value: "math", title: "math" },
    { value: "implementation", title: "implementation" },
    { value: "interactive", title: "interactive" },
    { value: "graphs", title: "Graphs" },
    { value: "greedy", title: "Greedy" },
    { value: "hashing", title: "Hashing" },
    { value: "games", title: "Games" },
    { value: "geometry", title: "Geometry" },
    { value: "flows", title: "Graph network flows" },
    { value: "expression parsing", title: "expression parsing" },
    { value: "graph matchings", title: "graph matchings" },
    { value: "fft", title: "Fast Fourier transform" }

];
tags = tags.sort((a, b) => {
    if (a.value.toLocaleLowerCase() > b.value.toLocaleLowerCase()) {
        return 1;
    }
    else {
        return -1;
    }
});
let leftPaneEl = document.querySelector("#tags");
for (let i = 0; i < tags.length; ++i) {

    let tagEl = document.createElement("input");
    tagEl.type = "checkbox";
    tagEl.value = tags[i].value;
    labelEl = document.createElement("label");
    labelEl.innerHTML = tags[i].title;
    let groupEl = document.createElement("div");
    groupEl.appendChild(tagEl);
    groupEl.appendChild(labelEl);
    leftPaneEl.appendChild(groupEl);
}
let problems = [];
let filteredProblems = [];

async function initialLoad() {
    await filterProblems();
}
initialLoad();
function makeQueryParameter(t, query) {
    let parts = t.split(' ');
    if (parts < 2) {
        query += parts[0];
    }
    else {
        for (let i = 0; i < parts.length - 1; ++i) {
            query += parts[i] + "%20";
        }
        query += parts[parts.length - 1] + ';';
    }
    //console.log(query);
    return query;
}
function nextProblem() {
    console.log("In next problems");
    let loaderEl = document.querySelector("#loader");
    loaderEl.style.display = "none";

    let randomIndex = getRandomInt(filteredProblems.length);
    console.log("Total number of problems:" + filteredProblems.length);
    let linkEl = document.querySelector("#linkProblem");
    let opEL = document.querySelector("#notFound");
    if (filteredProblems.length > 0) {
        opEL.innerHTML = "";
        console.log("Random Index:" + randomIndex);
        console.log(filteredProblems[randomIndex]);
        let pLink = "https://codeforces.com/problemset/problem/" + filteredProblems[randomIndex].contestId + "/" + filteredProblems[randomIndex].index;

        linkEl.href = pLink;
        linkEl.innerHTML = filteredProblems[randomIndex].name;

    }
    else {
        linkEl.innerHTML = "";
        opEL.innerHTML = "No problems found";
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
async function loadProblem(url) {
    console.log("In load problems:" + url);
    let response = await fetch(url);
    if (!response.ok) {
        console.log("This is response:" + response.status, response.statusText);
    }
    else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") == -1) {
            console.log("API Error");
        }
        else{
        let problemsObj = await response.json();
        problems = problemsObj.result.problems;
        }
    }
}
async function filterProblems() {
    let loaderEl = document.querySelector("#loader");
    loaderEl.style.display = "block";
    let linkEl = document.querySelector("#linkProblem");
    let opEL = document.querySelector("#notFound");
    linkEl.innerHTML = "";
    opEL.innerHTML = "";
    //console.log("In filter problems. Number after filter:" + filteredProblems.length);
    let selectedTags = [];
    let leftPaneEls = document.querySelector("#tags");
    leftPaneEls.childNodes.forEach((i) => {
        i.childNodes.forEach((item) => {
            //console.log(item.tagName);
            if ((item.tagName == "INPUT") && (item.checked == true)) {
                selectedTags.push(item.value);
            }
        });

    });
    let query = "";
    let url = "";
    selectedTags.forEach((t) => {
        query = makeQueryParameter(t, query);
    });
    //query=query.substring(0,query.length-2);
    url = baseURL + query;
    console.log(url);
    await loadProblem(baseURL + query);

    console.log("In filter problems");
    let lowBound = document.querySelector("#pointsLow");
    let upBound = document.querySelector("#pointsHigh");
    //console.log("Low:" + lowBound.value + " Up:" + upBound.value);
    filteredProblems = problems.filter((x) => {
        if (x.rating >= lowBound.value && x.rating <= upBound.value) {
            return true;
        }
        else {
            return false;
        }
    });
    nextProblem();
}
function ChangeHighEnd() {
    let optionHighEl = document.querySelector("#pointsHigh");
    let optionLowEl = document.querySelector("#pointsLow");
    let points = [800, 900, 1000, 1200];
    while (optionHighEl.hasChildNodes()) {
        optionHighEl.removeChild(optionHighEl.firstChild);
    }
    points.forEach((p) => {

        if (p && optionLowEl.value && p >= optionLowEl.value) {
            let x = document.createElement("option");
            x.value = p;
            x.innerHTML = p;
            optionHighEl.appendChild(x);
        }
    })

}