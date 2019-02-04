function getRndInteger(min,max) {
    var temp = Math.floor(Math.random() * (max - min) ) + min;
    return temp;
}
localStorage.setItem("deckload", "testjs");
localStorage.setItem("deckname", "Words");
function loaddeck(deck){
    localStorage.setItem("deckload", deck);

}

function loadname(deck){
    localStorage.setItem("deckname", deck);

}

var colors = ["blue"];


//Here is all the topic list

var topicname = ["Numbers","Day, Dates and Months","Chinese Zodiac","My Family","Countries and Languages","Body Parts","Colours","Clothes","Daily Routine"];
var jsname = ["0","1","2","3","4","5","6","7","8"];
//topic list ends

var curcolor = colors[getRndInteger(0,colors.length)];
console.log(curcolor);

var btnmain = "<h5>Topics</h5>";
var btnt = "<h5>Word List by topic</h5>";

var i;
for (i = 0; i < topicname.length; i++) { 
    
    curcolor = colors[getRndInteger(0,colors.length)];
    
console.log(curcolor);
    
    btnmain += "<br><a class=\"waves-effect waves-light btn-large "+curcolor+"\" href=\"write.html\" style=\"width:85%;\" onclick=\"loaddeck('"+jsname[i]+".js')\">"+(i+1)+" - "+topicname[i]+"</a><br>";
      
    //console.log(btnmain);
    
}

var j;
for (j = 0; j < topicname.length; j++) { 
    
    curcolor = colors[getRndInteger(0,colors.length)];
    
console.log(curcolor);
    
    btnt += "<br><a class=\"waves-effect waves-light btn-large "+curcolor+"\" href=\"tab.html\" style=\"width:85%;\" onclick=\"loaddeck('"+jsname[j]+".js');loadname('"+topicname[j]+"');\">"+(j+1)+" - "+topicname[j]+"</a><br>";
    
}

document.getElementById("links").innerHTML = btnmain;
document.getElementById("tlinks").innerHTML = btnt;