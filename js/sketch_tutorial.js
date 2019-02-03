//the words needs to be put back in separate file
//from now on these are chinese language functions
var deck = "none";
function toast(text){
    M.toast({html: text,displayLength:100000});
}
function clrtoast(){
      M.Toast.dismissAll();
}
function toastc(text){
    var tex2 = "<span>"+text+"</span><button class=\"btn-flat toast-action\" onclick=\"clrtoast();\">Ok</button>";
    M.toast({html: tex2,displayLength:100000});
}
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
    var hid = (displayHeight);
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
    clrtoast();
    var text1 = "Great! If you wrote it correctly, you may proceed to next word by pressing the <span style='color:lightblue;'>blue </span>  button.If you get wrong, you can erase by pressing the <span style='color:red;'> red </span> button at the bottom and then write again.";
    
    toastc(text1);
    
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
    
    clrtoast();
    var text1 = "Nice! You can hear the word again by pressing the <span style='color:orange;'>orange </span>  button. Repeat the steps again. Good luck!";
    
    toastc(text1);
    
    clrscr();
    n = getRndInteger(0, mand.length);
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



// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    toast("Welcome to Zhong Wen 2.0!")
    var text1 = "First, write the Chinese character for "+geteng(n)+"("+getmand(n)+")"+" in the white space above. After this, check your answer by clicking the <span style='color:green;'> green </span> button at the top."
    toastc(text1);
});















