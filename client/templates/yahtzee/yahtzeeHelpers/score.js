Template.dashboard.helpers({
"getScore": function(){console.log("here")
    var test = Games.findOne({})
    return test.score;
}
});