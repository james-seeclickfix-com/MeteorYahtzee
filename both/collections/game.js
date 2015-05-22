// Define Collection
Games = new Mongo.Collection('game');

// Collection Helpers https://github.com/dburles/meteor-collection-helpers
Games.helpers({

});

// Collection Hooks https://github.com/matb33/meteor-collection-hooks
Games.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});


//db.game.insert('')