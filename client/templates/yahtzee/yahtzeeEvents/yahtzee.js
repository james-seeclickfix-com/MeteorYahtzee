Template.dashboard.events({    
    "mouseenter .rowSelection": function (e, template) {
        var gameSession = Games.findOne();
        if (gameSession.isRolled != false) {
    var thisButton = template.find(event.target)
    var p = thisButton.getAttributeNode("id").value;
    thisButton.style.backgroundColor="beige";
    var gameSession = Games.findOne();
    var place = gameSession.placementScore;
                                                        
                                                        
    
                                                        
                                                        
    var dd = document.getElementById("s"+p);
    var tt = document.getElementById("s14");
    var total = 0;
    var nn;
                                                        
                                                        
    for (var i = 0; i < 5; i++) {
        nn = locInt(i);
        if (nn == p) total += nn;
    }
    var global = gameSession.score + total;
        if (p == "1" && place[0] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "2" && place[1] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "3" && place[2] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "4" && place[3] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "5" && place[4] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "6" && place[5] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "7" && place[6] != 1) {
            total = kinder(1);
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "8" && place[7] != 1) {
            total = kinder(2);
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "9" && place[8] != 1) {
            total = kinder(5);
            if (total > 0) {
                total = 25;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "10" && place[9] != 1) {
            total = straighter(3);
            if (total == 1) {
                total = 30;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "11" && place[10] != 1) {
            total = straighter(4);
            if (total == 1) {
                total = 40;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "12" && place[11] != 1) {
            total = kinder(10);
            if (total > 0) {
                total = 50;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
        if (p == "13" && place[12] != 1) {
            total = kinder(0);
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
        }
    }
    },
    
    
    "mouseleave .rowSelection": function (e, template) {
    var thisButton = template.find(event.target)
    thisButton.style.backgroundColor="aliceblue";

    var p = thisButton.getAttributeNode("id").value;
        
    var gameSession = Games.findOne();
    var place = gameSession.placementScore;
                                                                                                  
    var dd = document.getElementById("s"+p);
    var tt = document.getElementById("s14");
                                                        
        if (p == "1" && place[0] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "2" && place[1] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "3" && place[2] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "4" && place[3] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "5" && place[4] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "6" && place[5] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "7" && place[6] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "8" && place[7] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "9" && place[8] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "10" && place[9] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "11" && place[10] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "12" && place[11] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
        if (p == "13" && place[12] != 1) {
            dd.innerHTML = "";
            tt.innerHTML = gameSession.score;
        }
    },
    
    "click .rowSelection": function (e, template) {
        var gameSession = Games.findOne();
        if (gameSession.isRolled != false) {
    var thisButton = template.find(event.target)
    var p = thisButton.getAttributeNode("id").value;
    var place = gameSession.placementScore;                                            
    var dd = document.getElementById("s"+p);
    var tt = document.getElementById("s14");
    var total = 0;
    var nn;
                                                        
                                                        
    for (var i = 0; i < 5; i++) {
        nn = locInt(i);
        if (nn == p) total += nn;
    }
    var global = gameSession.score + total;
        
        if (p == "1" && place[0] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = gameSession.score + total;
            place[0] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
            
        }
        if (p == "2" && place[1] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = gameSession.score + total;
            place[1] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "3" && place[2] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = gameSession.score + total;
            place[2] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "4" && place[3] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = gameSession.score + total;
            place[3] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "5" && place[4] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = gameSession.score + total;
            place[4] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "6" && place[5] != 1) {
            dd.innerHTML = total;
            tt.innerHTML = gameSession.score + total;
            place[5] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "7" && place[6] != 1) {
            total = kinder(1);
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
            place[6] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "8" && place[7] != 1) {
            total = kinder(2);
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
            place[7] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "9" && place[8] != 1) {
            total = kinder(5);
            if (total > 0) {
                total = 25;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
            place[8] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "10" && place[9] != 1) {
            total = straighter(3);
            if (total == 1) {
                total = 30;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
            place[9] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "11" && place[10] != 1) {
            total = straighter(4);
            if (total == 1) {
                total = 40;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
            place[10] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "12" && place[11] != 1) {
            total = kinder(10);
            if (total > 0) {
                total = 50;
            }
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
            place[11] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
        if (p == "13" && place[12] != 1) {
            total = kinder(0);
            global = gameSession.score + total;
            dd.innerHTML = total;
            tt.innerHTML = global;
            place[12] = "1";
            Games.update({_id:gameSession._id}, {$set:{placementScore:place,score:global,isRolled:false,rolled:0}})
            reroll()
        }
    }
    }
    
    
});

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
        if (array[i] == array[i + 1]) {//if first is equal to second
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
    return nn;
}

function indic(arg) {//this looks for whether there is an X on the 6th char of string
    var myimg = document.getElementById("d" + arg);
    var nn = myimg.src.charAt(myimg.src.length - 6);
    return nn;
}//used for the hold function

function reroll() {//set all dice to 0
    for (i = 0; i < 5; i++) {
        document.getElementById("d" + i).src = "/images/img/dice0.gif";
    }
}