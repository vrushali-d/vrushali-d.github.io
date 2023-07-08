/*
This program is like quote book.
23/01/2021
How it works?
Each quote is written as separate function like drawScene1
currentScene variable keeps track of current Scene
when mouse is clicked it will check what current scene is and the
change the scene depending of previous or next button pressed
Now it is object oriented
*/

function setup(){
  let c = createCanvas(450,400);
  let p = select("#canvasPosition");
  c.parent(p);
  drawScene1();
}

let currentScene;

class Button{
    constructor(config){
      this.x=config.x || 200;
      this.y=config.y || 200;
      this.width=config.width || 30;
      this.height=config.height || 20;
      this.label=config.label || "Click";
      this.textSize=config.textSize||10;

    }
  
    draw(){
       fill(255, 0, 0);
     rect(this.x,this.y,this.width,this.height);
     fill(235, 221, 221);
     textSize(this.textSize);
     text(this.label,this.x,this.y+10,width,height); 
    }
  
    isMouseOnButton(){
        if(mouseX>=this.x && mouseX<=this.x+this.width && mouseY>=this.y && mouseY<=this.y+this.height){
          return 1;
      }
      return 0;

    }
        
}
let btnNext= new Button(
    {
        x:300,
        y:350,
        width:60,
        height:40,
        textSize:20,
        label:"Next",
    }
    
);

let btnPrev= new Button(
    {
        x:5,
        y:350,
        width:85,
        height:40,
        textSize:20,
        label:"Previous",
    }
    
);

let btnStart = new Button(
    {
        x:110,
        y:250,
        width:150,
        height:100,
        textSize:40,
        label:"Start",
    
    }    
);


class DrawScene{
   constructor(config){
    this.textX=config.textX||0;
    this.textY=config.textY||0;
    this.text=config.text || "Text";
    this.textSize=config.textSize || 10;
    this.width=config.textWidth || 400;
    this.height=config.height || 400;
    this.sceneNo=config.sceneNo;
   }
    
    draw(){
      currentScene = this.sceneNo;

      background(217, 39, 137);  
      fill(238, 237, 242);
      textSize(this.textSize);
      text(this.text,this.textX,this.textY,this.width,this.height);
      btnNext.draw();
      btnPrev.draw();  
    }
    
}
let drawScene1=function(){
    currentScene=1;
    background(0, 170, 255);
    //fill(0, 170, 255);
    fill(255, 0, 0);
    rect(110,250,150,100);
    fill(255, 255, 255);
    textSize(40);
    text("Start",140,290,150,100);
    //150,100
    text("Here are some quotes which i like!",20,50,300,300);
    //300,300
};
let drawScene2 = new DrawScene({textX:20,textY:40,text:"You only have to know one thing:You can learn anything!-Khan Academy\n",textSize:40,textWidth:400,textHeight:400,sceneNo:2});

let drawScene3 = new DrawScene({textX:20,textY:40,text:"The most beautiful things in the world cannot be seen or touched,they must be felt with the heart.",textSize:35,textWidth:350,textHeight:400,sceneNo:3});

let drawScene4 = new DrawScene({textX:20,textY:40,text:"Friends:People who make you laugh a little louder,your smile a little brighter and your life a little better.",textSize:35,textWidth:350,textHeight:400,sceneNo:4});

let drawScene5 = new DrawScene({textX:20,textY:40,text:"Efforts may fail but don't fail to make efforts!",textSize:35,textWidth:350,textHeight:400,sceneNo:5});

let drawScene6 = new DrawScene({textX:20,textY:40,text:"You can't start next chapter of your life if you keep re-reading last one.",textSize:35,textWidth:350,textHeight:400,sceneNo:6});

mouseClicked = function(){
    if(currentScene===1){
         if(btnStart.isMouseOnButton()===1){
            drawScene2.draw();
        }
        
    }
    else if(currentScene===2){
        if(btnNext.isMouseOnButton()===1){
            drawScene3.draw();
        }else if(btnPrev.isMouseOnButton()===1){
            drawScene1();
        }
    }
    else if(currentScene===3){
        if(btnNext.isMouseOnButton()===1){
            drawScene4.draw();
        }else if(btnPrev.isMouseOnButton()===1){
            drawScene2.draw();
        }
    }
    else if(currentScene===4){
        if(btnNext.isMouseOnButton()===1){
            drawScene5.draw();
        }else if(btnPrev.isMouseOnButton()===1){
            drawScene3.draw();
        }
    }
    else if(currentScene===5){
        if(btnNext.isMouseOnButton()===1){
            drawScene6.draw();
            
        }else if(btnPrev.isMouseOnButton()===1){
            drawScene4.draw();
        }
    }
    else if(currentScene===6){
        if(btnNext.isMouseOnButton()===1){
            drawScene1();
        }else if(btnPrev.isMouseOnButton()===1){
            drawScene5.draw();
        }
    }
};
function draw() {
  if(currentScene===1){
        if(btnStart.isMouseOnButton()===1){
            fill(18, 74, 7);
            rect(110,250,150,100);
            fill(255, 255, 255);
            textSize(40);
            text("Start",140,290,150,100);
        }
        else{
            fill(237, 43, 29);
            rect(110,250,150,100);
            fill(255, 255, 255);
            textSize(40);
            text("Start",140,290,150,100);
        }
    }
    else{
        if(btnNext.isMouseOnButton()===1){
            fill(18, 74, 7);
            rect(300,350,60,40);
            fill(235, 223, 223);
            textSize(20);
            text("Next",305,365,50,40);
        }
        else{
            btnNext.draw();
        }
        if(btnPrev.isMouseOnButton()===1){
            fill(18, 74, 7);
            rect(5,350,85,40);
            fill(235, 223, 223);
            textSize(20);
            text("Previous",10,365,70,40);
        }
        else{
            btnPrev.draw();
        }
    }
}
