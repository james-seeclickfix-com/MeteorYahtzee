Meteor.publishComposite("game", function() {
  return {
    find: function() {
      return Games.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  };
});
