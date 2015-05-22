// Home Route
Router.route('/', {
  name: 'home'
});

// Dashboard route
Router.route('/dashboard', {
  name: 'dashboard',
  waitOn: function() {
    return this.subscribe('game');
  },
  data: {
    game: Games.find({})
  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {

  }
});

// Profile Route
Router.route('/profile', {
  name: 'profile'
});
