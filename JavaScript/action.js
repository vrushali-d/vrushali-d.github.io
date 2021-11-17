    /*
            Need to create new element Project.Which will contain Project
            title,image aasociated with that project,link to that project
        
        
        */
        
        /*or*/
        let Project=[
            {
                title:"Rotate Square",
                image:"Images/img1.png",
                info:"Rotate the Square object using controller.\n I learned how to use rotation matrix to rotate objects\n Used p5.js",
                link:"RotateSquare.html",
            },
            {
                title:"Flexbox Playground",
                image:"Images/img2.png",
                info:"Play with flexbox styles!",
                link:"https://vrushali-d.github.io/flexbox.html",
            },
            {
                title:"Portfolio",
                image:"Images/img3.png",
                info:"The same Website You are seeing!",
                link:"#",
            },
            {
                title:"Quotes Book",
                image:"Images/img4.png",
                info:"Collection of Quotes which I like.",
                link:"QuotesBook.html",
            }
        ];


        let ClickLinkFunctions = [];
        let linkEl=document.querySelector("#links");
        console.log(linkEl);
        let linkElList=linkEl.children;

        function selectProject(active){
            return ()=>{
                for(let i=0;i<linkElList.length;++i){
                    
                    if(String("#"+linkElList[i].id) == ("#"+String(active))){
                        let activeEl = document.querySelector("#"+active);
                    
                        activeEl.firstElementChild.firstElementChild.style.borderBottom = "1px";
                        activeEl.firstElementChild.firstElementChild.style.borderBottomColor = "rgb(125, 209, 224)";
                        activeEl.firstElementChild.firstElementChild.style.borderBottomStyle = "solid";
                        activeEl.firstElementChild.firstElementChild.style.color = "rgb(125, 209, 224)";
                        
                    }
                    else{
                        linkElList[i].firstElementChild.firstElementChild.style.textDecoration="none";
                        linkElList[i].firstElementChild.firstElementChild.style.color="white";
                        linkElList[i].firstElementChild.firstElementChild.style.borderBottom="0px";
                    }
                }
            }
        }


        for(i=0;i<linkElList.length;++i){
            ClickLinkFunctions.push(selectProject(String(linkElList[i].id)));
            linkElList[i].firstElementChild.firstElementChild.addEventListener("click",ClickLinkFunctions[i]);
            
        }




        let node = document.querySelector('#ProjectContents');
        //console.log(node);
        for(let i=0;i<Project.length;i+=1){
            let cardEl=document.createElement("div");
            let infoEl=document.createElement("p");
            infoEl.innerText = Project[i].info;
            let titleEl=document.createElement("h3");
            titleEl.innerHTML=Project[i].title;
            //let clickEl=document.createElement("a");document.createElement("div");
            //clickEl.href="#";
            let textSecEl=document.createElement("div");
            textSecEl.style.display="flex";
            textSecEl.style.flexDirection="column";

            let linkEl = document.createElement("a");
            linkEl.href=Project[i].link;

            cardEl.style.border="1px";
            cardEl.style.borderStyle="solid";
            cardEl.style.borderColor="black";
            cardEl.style.borderRadius="10px";
            cardEl.style.width="70%";
            cardEl.style.margin="20px";
            cardEl.style.padding="2px";
            cardEl.style.backgroundColor="#90CAF9";
            cardEl.style.display="flex";
            cardEl.style.flexDirection="row";
            let imgEl=document.createElement("img");
            imgEl.src=Project[i].image;
            imgEl.width="200";
            imgEl.style.marginRight="10px";
            
            //clickEl.appendChild(cardEl)
            cardEl.appendChild(imgEl);
            linkEl.appendChild(titleEl)
            textSecEl.appendChild(linkEl);
            textSecEl.appendChild(infoEl);
            cardEl.appendChild(textSecEl);
            node.appendChild(cardEl);
        }
        
