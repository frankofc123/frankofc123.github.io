
// first hide the playing field
function pageload() {
    document.getElementById("playground").style.display = "none";
    document.getElementById("returnbutton").style.display = "none";

}
// Check which if and company selected
function startGame() {
    var rivalO2 = document.getElementById("selectO2").checked
    var rivalVodafone = document.getElementById("selectVodafone").checked
    var rivalAtt = document.getElementById("selectAtt").checked

    if (rivalO2) {
        startO2();
        document.getElementById("infotext").innerHTML = "";
    }
    else if (rivalVodafone ) {
        startVodafone();
        document.getElementById("infotext").innerHTML = "";
    }
    else if (rivalAtt ) {
        startAtt();
        document.getElementById("infotext").innerHTML = "";
    }
    else 
    document.getElementById("infotext").innerHTML = "Please select a company first!"; 
}

// When a company is selected, show the playing field and hide everything else.
function display() {
    document.getElementById("playground").style.display = "inline";
    document.getElementById("start").style.display = "none";
    document.getElementById("vendortable").style.display = "none";
    document.getElementById("header3").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("returnbutton").style.display = "inline";

}
// Write the respective company selection in the variable "vendor"
var vendor ;

function startO2() {
    vendor = 1;
    display();
};
function startVodafone() {
    vendor = 2;
    display();
};
function startAtt() {
    vendor = 3;
    display();
};

function endGame() {
    location.reload();
};

// game logic - Every click is counted and odd numbers are Telekom and even numbers are the selected company
var counter = 0;    




// Determining the selected company and inserting the corresponding image
function selectField1() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field1").appendChild(timg);
    document.getElementById("buttonfield1").style.display = "none";
    f[0] = 100;
    numberArray.splice (numberArray.indexOf(0), 1);


    checkwin();

    if (end == true){
        console.log("winner");
    }
    else {
        if (numberArray.length !== 0) {
        randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
        var xx = buttonfieldArray[randomNumber]
        var yy = fieldArray[randomNumber]
        document.getElementById(yy).appendChild(img);
        document.getElementById(xx).style.display = "none";
        f[randomNumber] = points;
        numberArray.splice (numberArray.indexOf(randomNumber), 1);
        checkwin();
        } 
        else {
        hidebutton();
        document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
        }
    }
}

function selectField2() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field2").appendChild(timg);
    document.getElementById("buttonfield2").style.display = "none";
    f[1] = 100;
    numberArray.splice (numberArray.indexOf(1), 1);


    checkwin();

    if (end == true){
        console.log("winner");
    }
    else {
        if (numberArray.length !== 0) {
        randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
        var xx = buttonfieldArray[randomNumber]
        var yy = fieldArray[randomNumber]
        document.getElementById(yy).appendChild(img);
        document.getElementById(xx).style.display = "none";
        f[randomNumber] = points;
        numberArray.splice (numberArray.indexOf(randomNumber), 1);
        checkwin();
        } 
        else {
        hidebutton();
        document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
        }
    }
}
function selectField3() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field3").appendChild(timg);
    document.getElementById("buttonfield3").style.display = "none";
    f[2] = 100;
    numberArray.splice (numberArray.indexOf(2), 1);


    checkwin();

    if (end == true){
        console.log("winner");
    }
    else {
        if (numberArray.length !== 0) {
        randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
        var xx = buttonfieldArray[randomNumber]
        var yy = fieldArray[randomNumber]
        document.getElementById(yy).appendChild(img);
        document.getElementById(xx).style.display = "none";
        f[randomNumber] = points;
        numberArray.splice (numberArray.indexOf(randomNumber), 1);
        checkwin();
        } 
        else {
        hidebutton();
        document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
        }
    }
}
function selectField4() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field4").appendChild(timg);
    document.getElementById("buttonfield4").style.display = "none";
    f[3] = 100;
    numberArray.splice (numberArray.indexOf(3), 1);


    checkwin();

    if (end == true){
        console.log("winner");
    }
    else {
        if (numberArray.length !== 0) {
        randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
        var xx = buttonfieldArray[randomNumber]
        var yy = fieldArray[randomNumber]
        document.getElementById(yy).appendChild(img);
        document.getElementById(xx).style.display = "none";
        f[randomNumber] = points;
        numberArray.splice (numberArray.indexOf(randomNumber), 1);
        checkwin();
        } 
        else {
        hidebutton();
        document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
        }
    }
}
function selectField5() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field5").appendChild(timg);
    document.getElementById("buttonfield5").style.display = "none";
    f[4] = 100;
    numberArray.splice (numberArray.indexOf(4), 1);


    checkwin();

        if (end == true){
            console.log("winner");
        }
        else {
            if (numberArray.length !== 0) {
            randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
            var xx = buttonfieldArray[randomNumber]
            var yy = fieldArray[randomNumber]
            document.getElementById(yy).appendChild(img);
            document.getElementById(xx).style.display = "none";
            f[randomNumber] = points;
            numberArray.splice (numberArray.indexOf(randomNumber), 1);
            checkwin();
            } 
            else {
            hidebutton();
            document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
            }
        }
}
function selectField6() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field6").appendChild(timg);
    document.getElementById("buttonfield6").style.display = "none";
    f[5] = 100;
    numberArray.splice (numberArray.indexOf(5), 1);


    checkwin();

        if (end == true){
            console.log("winner");
        }
        else {
            if (numberArray.length !== 0) {
            randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
            var xx = buttonfieldArray[randomNumber]
            var yy = fieldArray[randomNumber]
            document.getElementById(yy).appendChild(img);
            document.getElementById(xx).style.display = "none";
            f[randomNumber] = points;
            numberArray.splice (numberArray.indexOf(randomNumber), 1);
            checkwin();
            } 
            else {
            hidebutton();
            document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
            }
        }
}
function selectField7() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field7").appendChild(timg);
    document.getElementById("buttonfield7").style.display = "none";
    f[6] = 100;
    numberArray.splice (numberArray.indexOf(6), 1);


    checkwin();

        if (end == true){
            console.log("winner");
        }
        else {
            if (numberArray.length !== 0) {
            randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
            var xx = buttonfieldArray[randomNumber]
            var yy = fieldArray[randomNumber]
            document.getElementById(yy).appendChild(img);
            document.getElementById(xx).style.display = "none";
            f[randomNumber] = points;
            numberArray.splice (numberArray.indexOf(randomNumber), 1);
            checkwin();
            } 
            else {
            hidebutton();
            document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
            }
        }
}
function selectField8() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field8").appendChild(timg);
    document.getElementById("buttonfield8").style.display = "none";
    f[7] = 100;
    numberArray.splice (numberArray.indexOf(7), 1);


    checkwin();

        if (end == true){
            console.log("winner");
        }
        else {
            if (numberArray.length !== 0) {
            randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
            var xx = buttonfieldArray[randomNumber]
            var yy = fieldArray[randomNumber]
            document.getElementById(yy).appendChild(img);
            document.getElementById(xx).style.display = "none";
            f[randomNumber] = points;
            numberArray.splice (numberArray.indexOf(randomNumber), 1);
            checkwin();
            } 
            else {
            hidebutton();
            document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
            }
        }
}
function selectField9() {
    {
        if (vendor == 1) {
            var img = new Image(100, 100);
            img.src = "img/o2.png";
            var points = 1;
        }
        else if (vendor == 2) 
        {
            var img = new Image(100, 100);
            img.src = "img/vodafone.png";
            var points = 2;
        }
        else if (vendor == 3) {
        var img = new Image(100, 100);
        img.src = "img/att.png";
        var points = 10;
        }
        else
        console.log("something is wrong")
    }
    var timg = new Image(100, 100);
    timg.src = "img/telekom1.jpeg";    
    document.getElementById("field9").appendChild(timg);
    document.getElementById("buttonfield9").style.display = "none";
    f[8] = 100;
    numberArray.splice (numberArray.indexOf(8), 1);


    checkwin();

        if (end == true){
            console.log("winner");
        }
        else {
            if (numberArray.length !== 0) {
            randomNumber = numberArray[ Math.floor(Math.random() * (numberArray.length))];
            var xx = buttonfieldArray[randomNumber]
            var yy = fieldArray[randomNumber]
            document.getElementById(yy).appendChild(img);
            document.getElementById(xx).style.display = "none";
            f[randomNumber] = points;
            numberArray.splice (numberArray.indexOf(randomNumber), 1);
            checkwin();
            } 
            else {
            hidebutton();
            document.getElementById("congrats").innerHTML = "The game ended in a draw. Try it again!";
            }
        }
}



// Check the profit by summing up the rows
f = [null,null,null,null,null,null,null,null,null]

var f1 ;
var f2 ;
var f3 ;
var f4 ;
var f5 ;
var f6 ;
var f7 ;
var f8 ;
var f9 ;

var end = false

function checkwin() {
    if (f[0] + f[1] + f[2] == 3 || f[3]+f[4]+f[5]==3 || f[6]+f[7]+f[8]==3 || f[0]+f[3]+f[6]==3 || f[1]+f[4]+f[7]==3 || f[2]+f[5]+f[8]==3 || f[0]+f[4]+f[8]==3 || f[2]+f[4]+f[6]==3) {
        hidebutton();
        document.getElementById("losing").innerHTML = "Oh no good, you let the competitor O2 win. We have to inform the CEO of Telekom!";
        end = true;
    } 
    else if (f[0] + f[1] + f[2] == 6 || f[3]+f[4]+f[5]==6 || f[6]+f[7]+f[8]==6 || f[0]+f[3]+f[6]==6 || f[1]+f[4]+f[7]==6 || f[2]+f[5]+f[8]==6 || f[0]+f[4]+f[8]==6 || f[2]+f[4]+f[6]==6)  {
        hidebutton();
        document.getElementById("losing").innerHTML = "Oh no good, you let the competitor Vodafone win. We have to inform the CEO of Telekom!";
        end = true;

    } 
    else if (f[0] + f[1] + f[2] == 30 || f[3]+f[4]+f[5]==30 || f[6]+f[7]+f[8]==30 || f[0]+f[3]+f[6]==30 || f[1]+f[4]+f[7]==30 || f[2]+f[5]+f[8]==30 || f[0]+f[4]+f[8]==30 || f[2]+f[4]+f[6]==30)  {
        hidebutton();
        document.getElementById("losing").innerHTML = "Oh no good, you let the competitor AT&T win. We have to inform the CEO of Telekom!";
        end = true;


    } 
    else if (f[0] + f[1] + f[2] == 300 || f[3]+f[4]+f[5]==300 || f[6]+f[7]+f[8]==300 || f[0]+f[3]+f[6]==300 || f[1]+f[4]+f[7]==300 || f[2]+f[5]+f[8]==300 || f[0]+f[4]+f[8]==300 || f[2]+f[4]+f[6]==300)  {
        hidebutton();
        document.getElementById("congrats").innerHTML = "Congratulations, you have won against the competitor. We will immediately forward this good news to the CEO of Telekom!!";
        end = true;

    } else {
    }
}
// After a win, the user should no longer be able to click in the playing field
function hidebutton() {
    document.getElementById("buttonfield1").style.display = "none";
    document.getElementById("buttonfield2").style.display = "none";
    document.getElementById("buttonfield3").style.display = "none";
    document.getElementById("buttonfield4").style.display = "none";
    document.getElementById("buttonfield5").style.display = "none";
    document.getElementById("buttonfield6").style.display = "none";
    document.getElementById("buttonfield7").style.display = "none";
    document.getElementById("buttonfield8").style.display = "none";
    document.getElementById("buttonfield9").style.display = "none";
}


buttonfieldArray = ["buttonfield1","buttonfield2","buttonfield3","buttonfield4","buttonfield5","buttonfield6","buttonfield7","buttonfield8","buttonfield9"]

fieldArray = ["field1","field2","field3","field4","field5","field6","field7","field8","field9"]

numberArray = [0,1,2,3,4,5,6,7,8]