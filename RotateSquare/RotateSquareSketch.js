let opEl;
function setup() {
  let c = createCanvas(400, 400);
  let p = select("#canvasPosition");
  c.parent(p);
  opEl = createP("Angle In Degrees:0");
  opEl.parent(select("#anglePrint"));
}

var drawBackground = function()
{
    fill(255,255,255);
    rect(0,0,400,400);
    for(let i=0;i<400;i++)
    {
        /*
            Scale:
            20 pixels = 1unit
        */
        fill(255, 0, 0);
        text(-i+10,205,i*20);//Scale on Y-axis
        text(i-10,i*20,215);//Scale on X-axis
        stroke(0, 255, 247);
        line(0,i*20,400,i*20);//Lines on Y-axis
        line(i*20,0,i*20,400);//Lines on X-axis
        stroke(0, 0, 0);
        line(195,i*20,205,i*20);//Lines on Y-axis
        line(i*20,195,i*20,205);//Lines on X-axis
        line(200,0,200,400);//Y-axis
        line(0,200,400,200);//X-axis
    
    }
};

/*
    This function takes values in reference with drawn cartician co-ordinates and 
    converts it into canvas co-ordinates
*/
var convertXStandardToCanvas=function(x){
    return(x*20+200);
    
};


/*
    This function takes values in reference with drawn cartician co-ordinates and 
    converts it into canvas co-ordinates
*/
var convertYStandardToCanvas=function(y){
    return(200-y*20);
    
};



function draw() {
    strokeWeight(0.5);
    drawBackground();//To draw graph paper
    var flag=0;
    stroke(255, 0, 0);
    noFill();
    //To draw circle on right cornor
    ellipse(convertXStandardToCanvas(7),convertYStandardToCanvas(7),80,80);
    fill(64, 102, 199);//To show blue controller
    noStroke();
    //Initial controller position
    ellipse(convertXStandardToCanvas(2*cos(0)+7),convertYStandardToCanvas(2*sin(0)+7),10,10); 
    var x=[200,200,200,200];
    var y=[200,200,200,200];
    
    var xOrg=[-2,2,2,-2,-2];
    var yOrg=[-2,-2,2,2,-2];
    
    let theta;
    if(mouseY <= convertYStandardToCanvas(7) && mouseY <= convertYStandardToCanvas(7) && mouseX>=convertXStandardToCanvas(5) && mouseX<=convertXStandardToCanvas(9) ){
      //console.log("Upper");
        ellipse(mouseX,-sqrt(-(mouseX-convertXStandardToCanvas(7))*(mouseX-convertXStandardToCanvas(7))+40*40)+convertYStandardToCanvas(7),10,10);
        theta=acos((mouseX-convertXStandardToCanvas(7))/40);
        //text(("AngleInDegrees:"+round(theta*180/PI)),20,20);
        opEl.html("Angle In Degrees:"+round(theta*180/PI));    
        stroke(207, 97, 207);
        flag=1;
    }
    else if(mouseY < convertYStandardToCanvas(4) && mouseY > convertYStandardToCanvas(7)&& mouseX>=convertXStandardToCanvas(5) && mouseX<=convertXStandardToCanvas(9)){
       ellipse(mouseX,sqrt(-(mouseX-convertXStandardToCanvas(7))*(mouseX-convertXStandardToCanvas(7))+40*40)+convertYStandardToCanvas(7),10,10);
    theta = 2*PI-acos((mouseX-convertXStandardToCanvas(7))/40);
    opEl.html("Angle In Degrees:"+round(theta*180/PI));
    stroke(207, 97, 207);
    flag=1;
    }
    for(let i=0;i<xOrg.length;++i){
    
        x[i]=((20*xOrg[i])*cos(theta)-(20*yOrg[i])*sin(theta));
        y[i]=-((20*xOrg[i])*sin(theta)+(20*yOrg[i])*cos(theta));
        
        x[i]+=200;
        y[i]+=200;
    
        strokeWeight(5);
        //line(convertXStandardToCanvas(0),convertYStandardToCanvas(0),x[i],y[i]);
        if(i > 0){
            if(i==3){
              
                stroke(255, 0, 0);  
                line(x[i],y[i],x[i-1],y[i-1]);
            }
            else{
                stroke(207, 97, 207);
                line(x[i],y[i],x[i-1],y[i-1]);
            }
        }
    }
    //Draw refrence faint square
    stroke(112, 112, 112,100);
    for(let i=0;i<xOrg.length;++i){
    
        x[i]=((20*xOrg[i])*cos(0)-(20*yOrg[i])*sin(0));
        y[i]=-((20*xOrg[i])*sin(0)+(20*yOrg[i])*cos(0));
        
        x[i]+=200;
        y[i]+=200;
    
        strokeWeight(5);
        //line(convertXStandardToCanvas(0),convertYStandardToCanvas(0),x[i],y[i]);
        if(i > 0){
            line(x[i],y[i],x[i-1],y[i-1]);
        }
    }
}
