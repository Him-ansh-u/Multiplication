var  playing=false;
var score;
var avltime;
var action;
var answer;

document.getElementById("start").onclick=function(){
    if(playing==true){
        location.reload();
    }else{  
        playing=true; 
        hide("over");                  
        score=0;        
        document.getElementById("valscore").innerHTML=score;
        show("time"); 
        document.getElementById("start").innerHTML="<div>Restart</div>"
        avltime=60;
        document.getElementById("avltime").innerHTML=avltime;
        countdown();    
        question();
    
    }

}
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==answer){
                score++;
                document.getElementById("valscore").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
                question();
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }
        }
    }
}
function countdown(){
    action=setInterval(function(){
        avltime -= 1;
        document.getElementById("avltime").innerHTML=avltime;
        if(avltime==0){
            stopcountdown();
            hide("time");
            document.getElementById("finscore").innerHTML = score;
            show("over");
            document.getElementById("start").innerHTML ="Start";
            playing=false;
        }
    },1000); 
}
function stopcountdown(){
    clearInterval(action); 
} 
function show(id){
    document.getElementById(id).style.display="block";
}
function hide(id){
    document.getElementById(id).style.display="none";
}
var ans=[answer]
function question(){
    var x= 1+ Math.round(9*Math.random());
    var y= 1+ Math.round(9*Math.random());
    document.getElementById("question").innerHTML= x + "x" + y;
    var pos = 1 + Math.round(Math.random()*3);
    answer = x * y;
    document.getElementById("box"+pos).innerHTML=answer;
    for(i=1;i<5;i++){
        if(i!=pos){
            var wrongans;
            do{ 
            wrongans=( 1+ Math.round(9*Math.random()))*( 1+ Math.round(9*Math.random()));
            }while(ans.indexOf(wrongans)>-1)
            document.getElementById("box"+i).innerHTML=wrongans;
            ans.push(wrongans);
        }
    }

}        