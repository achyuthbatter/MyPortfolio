var counter = document.getElementById("count");
var highscore = document.getElementById("count1");
var pone = document.getElementById("penguin1");
var ptwo = document.getElementById("penguin2");
var pthree = document.getElementById("penguin3");
var pfour = document.getElementById("penguin4");
var pfive = document.getElementById("penguin5");
var psix = document.getElementById("penguin6");
var pseven = document.getElementById("penguin7");
var peight = document.getElementById("penguin8");
var yeti = document.getElementById("yeti");
var alrt = document.getElementById("alert");
var span = document.getElementsByClassName("exit")[0];
var btn = document.getElementById("button");
var score = 0;
var prev_val = 0;

function p1fun() {
    document.getElementById("img1").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1; 
    counter.value= score;
    pone.removeEventListener('click', p1fun);
}
function p2fun(){
    document.getElementById("img2").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1;
    counter.value= score;
    ptwo.removeEventListener('click', p2fun);
}
function p3fun(){
    document.getElementById("img3").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1;
    counter.value= score;
    pthree.removeEventListener('click', p3fun);
}
function p4fun(){
    document.getElementById("img4").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1;
    counter.value= score;
    pfour.removeEventListener('click', p4fun);
}
function p5fun(){
    document.getElementById("img5").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1;
    counter.value= score; 
    pfive.removeEventListener('click', p5fun);
}
function p6fun(){
    document.getElementById("img6").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1;
    counter.value= score;
    psix.removeEventListener('click', p6fun);
}
function p7fun(){
    document.getElementById("img7").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1;
    counter.value= score;
    pseven.removeEventListener('click', p7fun);
}
function p8fun(){
    document.getElementById("img8").style.visibility = "visible";
    var aud = new Audio('penguins.mp3');
    aud.play();
    score += 1;
    counter.value= score;
    peight.removeEventListener('click', p8fun);
}
function yfun(){
    document.getElementById("img9").style.visibility = "visible";
    document.getElementById("img1").style.visibility = "hidden";
    document.getElementById("img2").style.visibility = "hidden";
    document.getElementById("img3").style.visibility = "hidden";
    document.getElementById("img4").style.visibility = "hidden";
    document.getElementById("img5").style.visibility = "hidden";
    document.getElementById("img6").style.visibility = "hidden";
    document.getElementById("img7").style.visibility = "hidden";
    document.getElementById("img8").style.visibility = "hidden";
    var aud = new Audio('yeti.mp3');
    aud.play();
    alrt.style.display="block";
    alrt.style.visibility ="visible";
    score = 0;
}
function shuffle(){
    var parent = $('#one');
    var divs = parent.children();
    while(divs.length){
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

span.onclick = function() {
    alrt.style.visibility = "hidden";   
}
btn.onclick = function(){
    alrt.style.visibility = "hidden";
    document.getElementById("img9").style.visibility = "hidden";
    if(highscore.value <= counter.value){
        highscore.value = counter.value;
        prev_val = highscore.value;
        counter.value = "0"; 
    }    
    else{
        highscore.value = prev_val;
        counter.value = "0";
    }
    pone.addEventListener("click", p1fun);
    ptwo.addEventListener("click", p2fun);
    pthree.addEventListener("click", p3fun);
    pfour.addEventListener("click", p4fun);
    pfive.addEventListener("click", p5fun);
    psix.addEventListener("click", p6fun);
    pseven.addEventListener("click", p7fun);
    peight.addEventListener("click", p8fun);
    yeti.addEventListener("click", yfun);
    shuffle();
}
pone.addEventListener("click", p1fun);
ptwo.addEventListener("click", p2fun);
pthree.addEventListener("click", p3fun);
pfour.addEventListener("click", p4fun);
pfive.addEventListener("click", p5fun);
psix.addEventListener("click", p6fun);
pseven.addEventListener("click", p7fun);
peight.addEventListener("click", p8fun);
yeti.addEventListener("click", yfun);