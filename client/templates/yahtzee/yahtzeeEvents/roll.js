Template.dashboard.events({
    "click #roll": function (e) {
        var gameSession = Games.findOne();
        
    if (gameSession.rolled < 3) {//3 inGame rerolls allowed
        Games.update({_id:gameSession._id},{$inc:{rolled:1}})
        Games.update({_id:gameSession._id},{$set:{isRolled:true}})
        var r;
        for (i = 0; i < 5; i++) {//loop through dice
            var indicat = indic(i);
            if (indicat != "X") {//if not held, then rerol
                r = Math.floor((Math.random() * 6) + 1);
                document.getElementById("d" + i).src = "/images/img/dice" + r + ".gif";
            }
        }
    }
        
        function indic(arg) {//this looks for whether there is an X on the 6th char of string
            var myimg = document.getElementById("d" + arg);
            var nn = myimg.src.charAt(myimg.src.length - 6);
            return nn;
        }//used for the hold function
}
});