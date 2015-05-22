Template.dashboard.events({     
    "click .di": function (e, template) {
        var thisButton = template.find(event.target)
        var currHold = thisButton.getAttributeNode("src").value.substring(16,17);
        var currVal = thisButton.getAttributeNode("src").value.slice(-5).substring(0,1);
        if(currVal!="0"){
            if(currHold!="X"){
                thisButton.getAttributeNode("src").value = "/images/img/diceX"+currVal+".gif";
            }
            else{
                thisButton.getAttributeNode("src").value = "/images/img/dice"+currVal+".gif";
            }
        }
        
    }
});