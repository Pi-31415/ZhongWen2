//the words needs to be put back in separate file
//from now on these are chinese language functions
var deck = "none";
var n = getRndInteger(0, 5);
var curchin = "";
var curpin = "";
var cureng = "";
function log(a) {
    console.log(a);
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var xchin = document.getElementById("chineseword");
var xpinyin = document.getElementById("pinword");
var xeng = document.getElementById("engword");
var next = document.getElementById("next");
var check = document.getElementById("check");
var img = document.getElementById("img");
function geteng(x) {
    return eng[x];
}
function getmand(x) {
    return mand[x];
}
function getpin(x) {
    return "(" + pinyin[x].toLowerCase() + ")";
}
log(n);
//speaking
function speak() {
    speaker = "Chinese Female";
    speed = 0.95;
    var para = getmand(n);;
    console.log(para);
    responsiveVoice.speak(para, speaker, {
        rate: speed
    });
}

function speakk(k) {
    speaker = "Chinese Female";
    speed = 0.95;
    responsiveVoice.speak(k, speaker, {
        rate: speed
    });
}

//the following are the main toggle functions
//Setup
xeng.innerHTML = geteng(n);
xchin.innerHTML = getmand(n);
xpinyin.innerHTML = getpin(n);

//Toggle functions

function switchtext(id,disp){
    
}

function toggle(id){
    if(id.style.display == "none"){
        id.style.display = "block";
        console.log("Showing : ");
    }
    else if (id.style.display == "block"){
        id.style.display = "none";
        console.log("Hiding : ")
    }
}

//p5 functions
//this is p5js functions

function setup() {
    cureng = geteng(n);
    var wid = displayWidth;
    var hid = (displayHeight * 3) / 3;
    createCanvas(wid, hid);
    strokeWeight(5)
    stroke(0);
}

function touchMoved() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;

}

function clrscr() {
    clear();
    return false;
}

//these are functions for the checking and going next
function chincheck() {
    console.log("----------------------------Clicking Chincheck----------------------------");
    //Image function
    var q = geteng(n);
    $('#img').html('');
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&&pithumbsize=200&origin=*&prop=pageimages&titles=" + q, function (data) {
        $.each(data.query.pages, function (i) {
            $('#img').html("<img src='" + data.query.pages[i].thumbnail.source + "' height='100' width='auto'>");
        });

    });
    //image function end
    
    console.log(n);
    //show
    toggle(xchin);
    toggle(xpinyin);
    toggle(next);
    toggle(img);
    
    speak();
    
    //hide
    toggle(check);

}

function nextword() {
    clrscr();
    n = getRndInteger(0, mand.length-1);
    xeng.innerHTML = geteng(n);
xchin.innerHTML = getmand(n);
xpinyin.innerHTML = getpin(n);
    console.log("----------------------------Clicking Next----------------------------");
    console.log(n);
    //show
    toggle(xchin);
    toggle(xpinyin);
    toggle(next);
    toggle(img);
    
    //hide
    toggle(check);

}

//Function for displaying words

function showtable(){
    //alert("Hello");
    
    var disp = document.getElementById("displaytable");
    var tabdata = "";
    var k;
    var imglink = "Unknown";
    for(k=0;k<mand.length;k++){
        
        //img function
        
        tabdata += "<tr><td>"+(k+1)+"</td><td style='color:blue;' onclick='speakk(\""+mand[k]+"\")'><span class ='link' >"+mand[k]+"</span></td><td>"+pinyin[k].toLowerCase()+"</td><td>"+eng[k]+"</td></tr>";
        
    }
    disp.innerHTML = tabdata;
    
}










