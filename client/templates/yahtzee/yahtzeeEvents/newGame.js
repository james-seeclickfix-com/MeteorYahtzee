Template.dashboard.events({    
    "click #nG": function (e) {
        
        
        var gameSession = Games.findOne();
        Games.remove({_id:gameSession._id})
        Games.insert({"score":0, "placementScore":[0,0,0,0,0,0,0,0,0,0,0,0], "placementDi":"00000", "rolled":0, "isRolled":false})
        
            for (i = 0; i < 5; i++) {//reset dice
                document.getElementById("d" + i).src = "/images/img/dice0.gif";
            }
        
        
        var dd = document.getElementsByClassName("selection");
        for(i=0;i<dd.length;i++){
            if(dd[i].id!="s14"){console.log(dd[i].id)
                dd[i].innerHTML = "";
            }
            else{dd[i].innerHTML = 0;}
        }
    }
});