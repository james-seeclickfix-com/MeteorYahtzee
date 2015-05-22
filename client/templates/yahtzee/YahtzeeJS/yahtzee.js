var global, temporary, scored = 0;
var rolled = false, one = false, two = false, three = false, four = false, five = false, six = false, threk = false, fourk = false, fH = false, sms = false, las = false, yahtzee = false, chance = false;

function nG() {
    global = 0;
    temporary = 0;
    scored = 0;
    rolled = false;
    
    one = false;
    two = false;
    three = false;
    four = false;
    five = false;
    six = false;
    threk = false;
    fourk = false;
    fH = false;
    smS = false;
    laS = false;
    yahtzee = false;
    chance = false;
    
    for (i = 0; i < 5; i++) {//reset dice
        document.getElementById("d" + i).src = "dice0.gif";
        console.log(i)
    }
    
    for (i = 1; i < 15; i++) {//reset all values holders
        var dd = document.getElementsByName("m" + i);
        dd[0].value = null;
    }
}

function reroll() {//set all dice to 0
    for (i = 0; i < 5; i++) {
        document.getElementById("d" + i).src = "dice0.gif";
    }
}

function rollMe() {//inGame reroll function
    if (scored < 3) {//3 inGame rerolls allowed
        scored++;
        rolled = true;//
        var r;
        for (i = 0; i < 5; i++) {//loop through dice
            var indicat = indic(i);
            if (indicat != "X") {//if not held, then rerol
                r = Math.floor((Math.random() * 6) + 1);
                document.getElementById("d" + i).src = "dice" + r + ".gif";
            }
        }
    }
}

function hold(k) {
    var myimg = document.getElementById("d" + k);
    var n = locStr(k);
    var indicat = indic(k)
    if (n != "0") {
        if (indicat != "X") {
            myimg.src = "diceX" + n + ".gif";
        } else {
            myimg.src = "dice" + n + ".gif";
        }
    }
}

function over(p) {
    var dd = document.getElementsByName("m" + p);
    var tt = document.getElementsByName("m14");
    var total = 0;
    var nn;
    var temp;
    for (var i = 0; i < 5; i++) {
        nn = locInt(i);
        console.log(nn);
        if (nn == p) total += nn;
    }
    if (rolled != false) {
        if (p == "1" && one != true) {
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "2" && two != true) {
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "3" && three != true) {
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "4" && four != true) {
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "5" && five != true) {
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "6" && six != true) {
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "7" && threk != true) {
            total = kinder(1);
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "8" && fourk != true) {
            total = kinder(2);
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "9" && fH != true) {
            total = kinder(5);
            if (total > 0) {
                total = 25;
            }
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "10" && sms != true) {
            total = straighter(3);
            if (total == 1) {
                total = 30;
            }
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "11" && las != true) {
            total = straighter(4);
            if (total == 1) {
                total = 40;
            }
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "12" && yahtzee != true) {
            total = kinder(10);
            if (total > 0) {
                total = 50;
            }
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
        if (p == "13" && chance != true) {
            total = kinder(0);
            dd[0].value = total;
            tt[0].value = global + total;
            temporary = total;
        }
    }
}

function out(p) {
    var dd = document.getElementsByName("m" + p);
    var tt = document.getElementsByName("m14");
    tt[0].value = global;
    if (p == "1" && one != true) {
        dd[0].value = null;
    }
    if (p == "2" && two != true) {
        dd[0].value = null;
    }
    if (p == "3" && three != true) {
        dd[0].value = null;
    }
    if (p == "4" && four != true) {
        dd[0].value = null;
    }
    if (p == "5" && five != true) {
        dd[0].value = null;
    }
    if (p == "6" && six != true) {
        dd[0].value = null;
    }
    if (p == "7" && threk != true) {
        dd[0].value = null;
    }
    if (p == "8" && fourk != true) {
        dd[0].value = null;
    }
    if (p == "9" && fH != true) {
        dd[0].value = null;
    }
    if (p == "10" && sms != true) {
        dd[0].value = null;
    }
    if (p == "11" && las != true) {
        dd[0].value = null;
    }
    if (p == "12" && yahtzee != true) {
        dd[0].value = null;
    }
    if (p == "13" && chance != true) {
        dd[0].value = null;
    }
}

function check(p) {
    repeat = false;
    scored = 0;
    var dd = document.getElementsByName("m" + p);
    var tt = document.getElementsByName("m14");
    if (p == "1" && one != true) {
        one = true;
        repeat = true;
    }
    if (p == "2" && two != true) {
        two = true;
        repeat = true;
    }
    if (p == "3" && three != true) {
        three = true;
        repeat = true;
    }
    if (p == "4" && four != true) {
        four = true;
        repeat = true;
    }
    if (p == "5" && five != true) {
        five = true;
        repeat = true;
    }
    if (p == "6" && six != true) {
        six = true;
        repeat = true;
    }
    if (p == "7" && threk != true) {
        threk = true;
        repeat = true;
    }
    if (p == "8" && fourk != true) {
        fourk = true;
        repeat = true;
    }
    if (p == "9" && fH != true) {
        fH = true;
        repeat = true;
    }
    if (p == "10" && sms != true) {
        sms = true;
        repeat = true;
    }
    if (p == "11" && las != true) {
        las = true;
        repeat = true;
    }
    if (p == "12" && yahtzee != true) {
        yahtzee = true;
        repeat = true;
    }
    if (p == "13" && chance != true) {
        chance = true;
        repeat = true;
    }
    if (repeat == true) {
        reroll();
        rolled = false;
        global = global + temporary;
    }
}

function straighter(num) {
    temp = 0;
    total = 0;
    var array = sorter();
    for (i = 0; i < 4; i++) {
        if (array[i + 1] == array[i] + 1) {
            temp++;
        }
    }
    if (num <= temp) {
        total = 1;
    }
    return total;
}

function kinder(num) {
    var temp = 0;
    var total = 0;
    var array = sorter();
    for (i = 0; i < 4; i++) {
        if (array[i] == array[i + 1]) {
            if (array[i] == array[i + 2]) //3 of a kind and 4 of a kind
            {
                temp++;
                if (array[i + 3] == array[i + 4] && array[i] == array[i + 1]) //full house
                {
                    temp = 5;
                    if (array[0] == array[4]) {
                        temp = 10;
                    }
                }
            }
        }
    }
    //alert(temp);
    if (num <= temp) {
        total = array[0] + array[1] + array[2] + array[3] + array[4];
    }
    return total;
}

function sorter() {
    var array = new Array();
    array[0] = locInt(0);
    array[1] = locInt(1);
    array[2] = locInt(2);
    array[3] = locInt(3);
    array[4] = locInt(4);
    array.sort(function(a, b) {
        return a - b
    });
    return array;
}

function locInt(arg) {
    myimg = document.getElementById("d" + arg);
    nn = parseInt(myimg.src.charAt(myimg.src.length - 5));
    console.log(nn);
    return nn;
}

function locStr(arg) {
    var myimg = document.getElementById("d" + arg);
    var nn = myimg.src.charAt(myimg.src.length - 5);
    console.log(nn);
    return nn;
}

function indic(arg) {//this looks for whether there is an X on the 6th char of string
    var myimg = document.getElementById("d" + arg);
    var nn = myimg.src.charAt(myimg.src.length - 6);
    return nn;
}//used for the hold function